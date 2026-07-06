"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import MarkdownPreview from "./MarkdownPreview";
import ProgressStepper, { type StepView } from "./ProgressStepper";
import { STEP_META, isComplete } from "@/lib/steps";
import type { RunState, StageId, PipelineStep } from "@/lib/types";
import type { RunArtifacts } from "@/lib/run-service";

const STEP_LABEL: Record<StageId, string> = {
  strategist: "Strategist",
  researcher: "Researcher",
  writer: "Writer",
  editor: "Editor",
};

const TOOL_VERB: Record<string, string> = {
  Read: "📖 Membaca",
  Write: "✍️ Menulis",
  Edit: "✏️ Menyunting",
  WebSearch: "🔎 Mencari web",
  WebFetch: "🌐 Mengambil",
  Grep: "🔍 Cari teks",
  Glob: "📁 Cari file",
};

type Artifacts = RunArtifacts;

export default function ArticleWizard({
  initialRun,
  initialArtifacts,
}: {
  initialRun: RunState;
  initialArtifacts: Artifacts;
}) {
  const [run, setRun] = useState<RunState>(initialRun);
  const [artifacts, setArtifacts] = useState<Artifacts>(initialArtifacts);
  const [briefDraft, setBriefDraft] = useState(initialArtifacts.brief ?? "");
  const [draftDraft, setDraftDraft] = useState(initialArtifacts.draft ?? "");
  const [logs, setLogs] = useState<Record<string, string[]>>({});
  const [runningStep, setRunningStep] = useState<StageId | null>(null);
  const [error, setError] = useState<string | null>(null);
  const startedRef = useRef(false);

  const base = `/api/articles/${run.client_slug}/${run.month}/${run.brief_id}`;

  const appendLog = useCallback((step: string, line: string) => {
    setLogs((prev) => ({ ...prev, [step]: [...(prev[step] ?? []), line] }));
  }, []);

  const reloadArtifacts = useCallback(async (): Promise<Artifacts> => {
    const res = await fetch(base, { cache: "no-store" });
    const data = await res.json();
    if (res.ok) {
      setRun(data.run);
      setArtifacts(data.artifacts);
      return data.artifacts as Artifacts;
    }
    return artifacts;
  }, [base, artifacts]);

  const handleEvent = useCallback(
    (step: StageId, ev: { type: string; [k: string]: unknown }) => {
      if (ev.type === "tool") {
        const verb = TOOL_VERB[ev.tool as string] ?? `🔧 ${ev.tool}`;
        appendLog(step, ev.detail ? `${verb}: ${ev.detail}` : verb);
      } else if (ev.type === "text") {
        appendLog(step, `💬 ${ev.text}`);
      } else if (ev.type === "done") {
        const cost = typeof ev.cost_usd === "number" ? ` ($${(ev.cost_usd as number).toFixed(3)})` : "";
        appendLog(step, `✓ ${STEP_LABEL[step]} selesai${cost}`);
      }
    },
    [appendLog],
  );

  const runStep = useCallback(
    async (step: StageId): Promise<RunState | null> => {
      setError(null);
      setRunningStep(step);
      setLogs((prev) => ({ ...prev, [step]: [`▶ ${STEP_LABEL[step]} dimulai…`] }));
      try {
        const res = await fetch(`${base}/run`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ step }),
        });
        if (!res.ok || !res.body) {
          const e = await res.json().catch(() => ({}));
          throw new Error(e.error || `Gagal menjalankan ${step}`);
        }
        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let buf = "";
        let finalRun: RunState | null = null;
        for (;;) {
          const { done, value } = await reader.read();
          if (done) break;
          buf += decoder.decode(value, { stream: true });
          let idx: number;
          while ((idx = buf.indexOf("\n\n")) !== -1) {
            const chunk = buf.slice(0, idx);
            buf = buf.slice(idx + 2);
            const dataLine = chunk.split("\n").find((l) => l.startsWith("data:"));
            if (!dataLine) continue;
            let ev: { type: string; [k: string]: unknown };
            try {
              ev = JSON.parse(dataLine.slice(5).trim());
            } catch {
              continue;
            }
            handleEvent(step, ev);
            if (ev.type === "complete") finalRun = ev.run as RunState;
            if (ev.type === "error") throw new Error(String(ev.message));
          }
        }
        const fresh = await reloadArtifacts();
        if (step === "strategist" && fresh.brief) setBriefDraft(fresh.brief);
        if (step === "writer" && fresh.draft) setDraftDraft(fresh.draft);
        setRunningStep(null);
        return finalRun;
      } catch (err) {
        setRunningStep(null);
        setError(err instanceof Error ? err.message : String(err));
        await reloadArtifacts();
        return null;
      }
    },
    [base, handleEvent, reloadArtifacts],
  );

  const patch = useCallback(
    async (action: string, content?: string) => {
      const res = await fetch(base, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action, content }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Gagal menyimpan");
      setRun(data.run);
      setArtifacts(data.artifacts);
      return data.run as RunState;
    },
    [base],
  );

  // Auto-run strategist on first open of a fresh run.
  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;
    if (run.steps.strategist.status === "idle") {
      void runStep("strategist");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function approveOutline() {
    setError(null);
    try {
      if (briefDraft !== (artifacts.brief ?? "")) await patch("save_brief", briefDraft);
      await patch("approve_outline");
      const afterResearch = await runStep("researcher");
      if (!afterResearch) return; // error already surfaced
      await runStep("writer");
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    }
  }

  async function generate() {
    setError(null);
    try {
      if (draftDraft !== (artifacts.draft ?? "")) await patch("save_draft", draftDraft);
      await patch("approve_draft");
      await runStep("editor");
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    }
  }

  const steps: StepView[] = useMemo(
    () =>
      STEP_META.map((m) => ({
        id: m.id,
        label: m.label,
        sub: m.sub,
        isGate: m.isGate,
        status: run.steps[m.id]?.status ?? "idle",
      })),
    [run],
  );

  const retry = useCallback(
    async (step: StageId) => {
      const ok = await runStep(step);
      if (ok && step === "researcher") await runStep("writer");
    },
    [runStep],
  );

  const activeStep: PipelineStep = runningStep ?? run.current_step;
  const STAGE_IDS: StageId[] = ["strategist", "researcher", "writer", "editor"];
  const erroredStep = STAGE_IDS.find((k) => run.steps[k].status === "error");

  const phase = derivePhase(run, runningStep);

  return (
    <div className="space-y-5">
      <header className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="text-xs text-muted">
            <Link href="/" className="hover:text-brand">
              Dashboard
            </Link>{" "}
            / {run.client_slug} / {run.month}
          </div>
          <h1 className="text-xl font-semibold">{run.title || run.input.keyword}</h1>
          <div className="mt-1 text-xs text-muted">
            <span className="font-mono">{run.brief_id}</span> · hub:{" "}
            <a href={run.input.landing_page} target="_blank" className="text-brand" rel="noreferrer">
              {run.input.landing_page}
            </a>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_320px]">
        <div className="min-w-0 space-y-4">
          {error && (
            <div className="rounded-lg border border-danger/40 bg-danger/10 px-4 py-3 text-sm text-danger">
              {error}
              {erroredStep && !runningStep && (
                <button
                  onClick={() => retry(erroredStep)}
                  className="ml-3 rounded bg-danger/20 px-2 py-1 text-xs hover:bg-danger/30"
                >
                  Coba lagi
                </button>
              )}
            </div>
          )}

          {phase === "working" && (
            <WorkingPanel
              step={runningStep ?? (run.current_step as StageId)}
              logs={logs}
              status={run.steps[runningStep ?? (run.current_step as StageId)]?.status ?? "running"}
            />
          )}

          {phase === "outline" && (
            <GateEditor
              title="Gate 1 — Revisi Outline"
              hint="Sunting angle, judul, struktur H2, internal link, FAQ. Setujui untuk lanjut ke riset + penulisan."
              value={briefDraft}
              onChange={setBriefDraft}
              actionLabel="Setujui Outline → Riset & Tulis"
              onAction={approveOutline}
              busy={runningStep !== null}
            />
          )}

          {phase === "draft" && (
            <GateEditor
              title="Gate 2 — Revisi Draft"
              hint="Edit draft artikel langsung. Saat menekan Generate, editor akan memoles & memvalidasi sebelum preview."
              value={draftDraft}
              onChange={setDraftDraft}
              actionLabel="⟦ Generate ⟧ → Final"
              onAction={generate}
              busy={runningStep !== null}
            />
          )}

          {phase === "preview" && (
            <PreviewPanel
              final={artifacts.final ?? ""}
              qc={artifacts.qc}
              filename={`${run.brief_id}.id.md`}
            />
          )}
        </div>

        <aside className="lg:sticky lg:top-20 lg:self-start">
          <ProgressStepper steps={steps} activeStep={activeStep} logLines={logs[activeStep] ?? []} />
        </aside>
      </div>
    </div>
  );
}

type Phase = "working" | "outline" | "draft" | "preview";

function derivePhase(run: RunState, runningStep: StageId | null): Phase {
  if (runningStep) return "working";
  if (isComplete(run)) return "preview";
  if (run.current_step === "outline_gate" && run.steps.outline_gate.status === "waiting")
    return "outline";
  if (run.current_step === "draft_gate" && run.steps.draft_gate.status === "waiting")
    return "draft";
  if (run.steps.editor.status === "done") return "preview";
  return "working";
}

function WorkingPanel({
  step,
  logs,
  status,
}: {
  step: StageId;
  logs: Record<string, string[]>;
  status: string;
}) {
  const lines = logs[step] ?? [];
  const errored = status === "error";
  return (
    <div className="rounded-xl border border-border bg-surface p-6">
      <div className="flex items-center gap-3">
        <span
          className={`h-3 w-3 rounded-full ${errored ? "bg-danger" : "animate-pulse bg-brand"}`}
        />
        <span className="font-medium">
          {STEP_LABEL[step]} {errored ? "terhenti" : "sedang bekerja…"}
        </span>
      </div>
      <p className="mt-1 text-xs text-muted">
        {errored
          ? "Tahap ini berhenti karena error. Tekan “Coba lagi” di atas."
          : "Agent membaca knowledge base, meriset, dan menulis file. Ikuti progresnya di panel kanan."}
      </p>
      <div className="mt-4 max-h-72 overflow-auto rounded-md border border-border bg-bg/60 p-3 font-mono text-xs text-muted">
        {lines.length === 0 ? (
          <div>Menyiapkan…</div>
        ) : (
          lines.map((l, i) => (
            <div key={i} className="py-0.5">
              {l}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

function GateEditor({
  title,
  hint,
  value,
  onChange,
  actionLabel,
  onAction,
  busy,
}: {
  title: string;
  hint: string;
  value: string;
  onChange: (v: string) => void;
  actionLabel: string;
  onAction: () => void;
  busy: boolean;
}) {
  return (
    <div className="rounded-xl border border-warn/40 bg-surface">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-3">
        <div>
          <h2 className="text-sm font-semibold text-warn">{title}</h2>
          <p className="text-xs text-muted">{hint}</p>
        </div>
        <button
          onClick={onAction}
          disabled={busy}
          className="rounded-md bg-brand px-4 py-2 text-sm font-medium text-brand-ink hover:opacity-90 disabled:opacity-50"
        >
          {busy ? "Memproses…" : actionLabel}
        </button>
      </div>
      <div className="grid grid-cols-1 gap-0 lg:grid-cols-2">
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          spellCheck={false}
          className="h-[560px] w-full resize-none border-b border-border bg-bg p-3 font-mono text-[13px] leading-relaxed outline-none focus:border-brand lg:border-b-0 lg:border-r"
        />
        <div className="h-[560px] overflow-auto p-4">
          <MarkdownPreview markdown={value} />
        </div>
      </div>
    </div>
  );
}

function PreviewPanel({
  final,
  qc,
  filename,
}: {
  final: string;
  qc: string | null;
  filename: string;
}) {
  const [copied, setCopied] = useState(false);
  const recommendation = useMemo(() => {
    if (!qc) return null;
    const m = qc.match(/recommendation:\s*["']?(approve|revise|reject)/i);
    return m?.[1]?.toLowerCase() ?? null;
  }, [qc]);

  async function copy() {
    await navigator.clipboard.writeText(final);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  function download() {
    const blob = new Blob([final], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-3 rounded-xl border border-ok/40 bg-ok/10 px-4 py-3">
        <span className="text-sm font-semibold text-ok">✓ Artikel final siap</span>
        {recommendation && (
          <span
            className={`rounded px-2 py-0.5 text-xs ${
              recommendation === "approve"
                ? "bg-ok/20 text-ok"
                : recommendation === "revise"
                  ? "bg-warn/20 text-warn"
                  : "bg-danger/20 text-danger"
            }`}
          >
            QC: {recommendation}
          </span>
        )}
        <div className="ml-auto flex gap-2">
          <button
            onClick={copy}
            className="rounded-md border border-border px-3 py-1.5 text-xs hover:bg-surface-2"
          >
            {copied ? "Tersalin ✓" : "Salin Markdown"}
          </button>
          <button
            onClick={download}
            className="rounded-md bg-brand px-3 py-1.5 text-xs font-medium text-brand-ink hover:opacity-90"
          >
            Unduh .md
          </button>
        </div>
      </div>

      <div className="rounded-xl border border-border bg-surface p-6">
        <MarkdownPreview markdown={final} />
      </div>

      {qc && (
        <details className="rounded-xl border border-border bg-surface p-4">
          <summary className="cursor-pointer text-sm font-medium text-muted">
            Laporan QC editor
          </summary>
          <div className="mt-3">
            <MarkdownPreview markdown={qc} />
          </div>
        </details>
      )}
    </div>
  );
}
