import type { PipelineStep, RunState } from "./types";

export const STEP_META: {
  id: PipelineStep;
  label: string;
  sub: string;
  isGate?: boolean;
}[] = [
  { id: "strategist", label: "Strategi", sub: "Outline & angle" },
  { id: "outline_gate", label: "Revisi Outline", sub: "Tindakan Anda", isGate: true },
  { id: "researcher", label: "Riset", sub: "Fakta & sumber" },
  { id: "writer", label: "Penulisan", sub: "Draft artikel" },
  { id: "draft_gate", label: "Revisi Draft", sub: "Tindakan Anda", isGate: true },
  { id: "editor", label: "Generate", sub: "Editing & final" },
];

export function currentStepLabel(run: RunState): string {
  if (isComplete(run)) return "Selesai";
  const meta = STEP_META.find((s) => s.id === run.current_step);
  return meta ? meta.label : run.current_step;
}

export function isComplete(run: RunState): boolean {
  return run.steps.editor.status === "done";
}
