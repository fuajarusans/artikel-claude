import { NextRequest, NextResponse } from "next/server";
import { getRun, saveRun, writeArtifact } from "@/lib/runs";
import { artifactPaths } from "@/lib/pipeline";
import { loadArtifacts } from "@/lib/run-service";

export const runtime = "nodejs";

type Params = { params: Promise<{ client: string; month: string; id: string }> };

export async function GET(_req: NextRequest, { params }: Params) {
  try {
    const { client, month, id } = await params;
    const run = await getRun(client, month, id);
    if (!run) return NextResponse.json({ error: "Run tidak ditemukan" }, { status: 404 });
    const artifacts = await loadArtifacts(run);
    return NextResponse.json({ run, artifacts });
  } catch (err) {
    return NextResponse.json({ error: errMsg(err) }, { status: 400 });
  }
}

export async function PATCH(req: NextRequest, { params }: Params) {
  try {
    const { client, month, id } = await params;
    const run = await getRun(client, month, id);
    if (!run) return NextResponse.json({ error: "Run tidak ditemukan" }, { status: 404 });

    const body = await req.json().catch(() => ({}));
    const action = String(body.action ?? "");
    const p = artifactPaths(id);

    switch (action) {
      case "save_brief": {
        await writeArtifact(client, month, p.brief, String(body.content ?? ""));
        run.steps.outline_gate.edited = true;
        break;
      }
      case "approve_outline": {
        if (run.steps.strategist.status !== "done") {
          return NextResponse.json({ error: "Outline belum siap" }, { status: 409 });
        }
        run.steps.outline_gate.status = "approved";
        run.current_step = "researcher";
        break;
      }
      case "save_draft": {
        await writeArtifact(client, month, p.draft, String(body.content ?? ""));
        run.steps.draft_gate.edited = true;
        break;
      }
      case "approve_draft": {
        if (run.steps.writer.status !== "done") {
          return NextResponse.json({ error: "Draft belum siap" }, { status: 409 });
        }
        run.steps.draft_gate.status = "approved";
        run.current_step = "editor";
        break;
      }
      default:
        return NextResponse.json({ error: `Action tidak dikenal: ${action}` }, { status: 400 });
    }

    await saveRun(run);
    const artifacts = await loadArtifacts(run);
    return NextResponse.json({ run, artifacts });
  } catch (err) {
    return NextResponse.json({ error: errMsg(err) }, { status: 400 });
  }
}

function errMsg(err: unknown): string {
  return err instanceof Error ? err.message : String(err);
}
