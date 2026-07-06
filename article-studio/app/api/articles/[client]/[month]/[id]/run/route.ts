import { NextRequest } from "next/server";
import { getRun, saveRun } from "@/lib/runs";
import { STAGES, buildStagePrompt, resolveAgentName } from "@/lib/pipeline";
import { runAgentStage } from "@/lib/agent-runner";
import { advanceAfter, outputForStep } from "@/lib/run-service";
import type { StageId } from "@/lib/types";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 800;

type Params = { params: Promise<{ client: string; month: string; id: string }> };

const VALID_STEPS: StageId[] = ["strategist", "researcher", "writer", "editor"];

export async function POST(req: NextRequest, { params }: Params) {
  const { client, month, id } = await params;
  const body = await req.json().catch(() => ({}));
  const step = body.step as StageId;

  if (!VALID_STEPS.includes(step)) {
    return json({ error: `Step tidak valid: ${step}` }, 400);
  }

  const run = await getRun(client, month, id);
  if (!run) return json({ error: "Run tidak ditemukan" }, 404);

  const def = STAGES[step];
  if (def.requiresGate && run.steps[def.requiresGate].status !== "approved") {
    return json({ error: `Gate '${def.requiresGate}' belum disetujui` }, 409);
  }

  const agentName = await resolveAgentName(client, def.role).catch((e) => {
    throw e;
  });
  const prompt = buildStagePrompt(step, id, month, run.input);

  const encoder = new TextEncoder();
  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      let closed = false;
      const send = (e: unknown) => {
        if (closed) return;
        controller.enqueue(encoder.encode(`data: ${JSON.stringify(e)}\n\n`));
      };

      // Mark stage running.
      run.steps[step] = {
        ...run.steps[step],
        status: "running",
        started_at: new Date().toISOString(),
        error: undefined,
      };
      run.current_step = step;
      await saveRun(run);
      send({ type: "accepted", step });

      try {
        const res = await runAgentStage({
          clientSlug: client,
          step,
          agentName,
          taskPrompt: prompt,
          onEvent: send,
          signal: req.signal,
        });

        const output = outputForStep(step, id);
        run.steps[step] = {
          status: "done",
          started_at: run.steps[step].started_at,
          finished_at: new Date().toISOString(),
          output,
          cost_usd: res.costUsd,
          num_turns: res.numTurns,
        };
        advanceAfter(run, step);
        await saveRun(run);

        send({ type: "complete", step, output, result: res.resultText, run });
      } catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        run.steps[step] = {
          ...run.steps[step],
          status: "error",
          error: message,
          finished_at: new Date().toISOString(),
        };
        await saveRun(run);
        send({ type: "error", step, message });
      } finally {
        closed = true;
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream; charset=utf-8",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
      "X-Accel-Buffering": "no",
    },
  });
}

function json(obj: unknown, status: number): Response {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
