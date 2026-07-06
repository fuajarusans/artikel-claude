import { readAgent } from "./agents";
import { clientDir } from "./paths";
import { hasAnthropicKey } from "./config";
import type { ProgressEvent, StageId } from "./types";

/** Default tool allowlist when an agent .md does not declare its own `tools:`. */
const DEFAULT_TOOLS = ["Read", "Write", "Edit", "Grep", "Glob", "WebSearch", "WebFetch"];

export interface RunStageResult {
  resultText: string;
  costUsd?: number;
  numTurns?: number;
}

export interface RunStageArgs {
  clientSlug: string;
  step: StageId;
  agentName: string;
  taskPrompt: string;
  onEvent: (e: ProgressEvent) => void;
  signal?: AbortSignal;
}

function shortPath(p: string): string {
  const parts = p.replace(/\\/g, "/").split("/");
  return parts.slice(-2).join("/");
}

function toolDetail(name: string, input: Record<string, unknown>): string | undefined {
  switch (name) {
    case "Read":
    case "Write":
    case "Edit": {
      const fp = (input.file_path ?? input.path) as string | undefined;
      return fp ? shortPath(fp) : undefined;
    }
    case "WebSearch":
      return input.query as string | undefined;
    case "WebFetch":
      return input.url as string | undefined;
    case "Grep":
    case "Glob":
      return input.pattern as string | undefined;
    default:
      return undefined;
  }
}

/**
 * Run ONE agent stage via the Claude Agent SDK and stream progress via onEvent.
 * The agent's markdown body becomes the system prompt; cwd is the client folder
 * so it reads the client's CLAUDE.md / knowledge_base and writes into monthly_runs.
 */
export async function runAgentStage(args: RunStageArgs): Promise<RunStageResult> {
  const { clientSlug, step, agentName, taskPrompt, onEvent, signal } = args;

  if (!hasAnthropicKey()) {
    throw new Error(
      "ANTHROPIC_API_KEY belum di-set. Salin .env.example ke .env.local lalu isi kuncinya.",
    );
  }

  const agent = await readAgent(clientSlug, agentName);
  const cwd = clientDir(clientSlug);

  // Lazy import: keeps the rest of the app buildable even before the SDK is installed.
  const { query } = await import("@anthropic-ai/claude-agent-sdk");

  onEvent({ type: "start", step, label: agent.name, ts: Date.now() });

  const abortController = new AbortController();
  if (signal) {
    if (signal.aborted) abortController.abort();
    else signal.addEventListener("abort", () => abortController.abort(), { once: true });
  }

  let resultText = "";
  let costUsd: number | undefined;
  let numTurns: number | undefined;

  const q = query({
    prompt: taskPrompt,
    options: {
      cwd,
      model: agent.model,
      systemPrompt: agent.systemPrompt,
      allowedTools: agent.tools && agent.tools.length ? agent.tools : DEFAULT_TOOLS,
      permissionMode: "bypassPermissions",
      settingSources: [],
      abortController,
    },
  });

  for await (const msg of q as AsyncIterable<Record<string, any>>) {
    if (abortController.signal.aborted) break;

    if (msg.type === "assistant") {
      const content = msg.message?.content ?? [];
      for (const block of content) {
        if (block.type === "tool_use") {
          onEvent({
            type: "tool",
            step,
            tool: block.name,
            detail: toolDetail(block.name, block.input ?? {}),
            ts: Date.now(),
          });
        } else if (block.type === "text" && typeof block.text === "string" && block.text.trim()) {
          onEvent({ type: "text", step, text: block.text.trim().slice(0, 240), ts: Date.now() });
        }
      }
    } else if (msg.type === "result") {
      if (msg.subtype === "success") {
        resultText = msg.result ?? "";
        costUsd = msg.total_cost_usd;
        numTurns = msg.num_turns;
      } else {
        const detail = Array.isArray(msg.errors) ? msg.errors.join("; ") : String(msg.subtype);
        throw new Error(`Agent gagal (${msg.subtype}): ${detail}`);
      }
    }
  }

  onEvent({ type: "done", step, cost_usd: costUsd, num_turns: numTurns, ts: Date.now() });
  return { resultText, costUsd, numTurns };
}
