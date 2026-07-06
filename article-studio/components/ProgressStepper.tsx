"use client";

import type { PipelineStep, StageStatus } from "@/lib/types";

export interface StepView {
  id: PipelineStep;
  label: string;
  sub: string;
  status: StageStatus;
  isGate?: boolean;
}

const DOT: Record<StageStatus, string> = {
  idle: "bg-surface-2 border border-border",
  running: "bg-brand animate-pulse",
  done: "bg-ok",
  approved: "bg-ok",
  waiting: "bg-warn animate-pulse",
  error: "bg-danger",
};

const LABEL: Record<StageStatus, string> = {
  idle: "Menunggu",
  running: "Berjalan…",
  done: "Selesai",
  approved: "Disetujui",
  waiting: "Perlu tindakan Anda",
  error: "Error",
};

export default function ProgressStepper({
  steps,
  activeStep,
  logLines,
}: {
  steps: StepView[];
  activeStep: PipelineStep;
  logLines: string[];
}) {
  return (
    <div className="rounded-xl border border-border bg-surface p-4">
      <h3 className="text-xs font-semibold uppercase tracking-wide text-muted mb-3">
        Progres Pengerjaan
      </h3>
      <ol className="space-y-1">
        {steps.map((s, i) => {
          const active = s.id === activeStep;
          return (
            <li key={s.id} className="relative">
              <div
                className={`flex items-start gap-3 rounded-lg px-2 py-2 ${
                  active ? "bg-surface-2" : ""
                }`}
              >
                <div className="flex flex-col items-center">
                  <span className={`mt-1 h-3 w-3 rounded-full ${DOT[s.status]}`} />
                  {i < steps.length - 1 && (
                    <span className="mt-1 h-6 w-px bg-border" aria-hidden />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-sm font-medium ${
                        s.isGate ? "text-warn" : "text-ink"
                      }`}
                    >
                      {s.label}
                    </span>
                    {s.isGate && (
                      <span className="rounded bg-warn/15 px-1.5 py-0.5 text-[10px] font-medium text-warn">
                        GATE
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-muted">{s.sub}</div>
                  <div
                    className={`text-[11px] ${
                      s.status === "error"
                        ? "text-danger"
                        : s.status === "waiting"
                          ? "text-warn"
                          : s.status === "done" || s.status === "approved"
                            ? "text-ok"
                            : "text-muted"
                    }`}
                  >
                    {LABEL[s.status]}
                  </div>

                  {active && logLines.length > 0 && (
                    <div className="mt-2 max-h-40 overflow-auto rounded-md border border-border bg-bg/60 p-2 font-mono text-[11px] leading-relaxed text-muted">
                      {logLines.map((l, idx) => (
                        <div key={idx} className="truncate">
                          {l}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
