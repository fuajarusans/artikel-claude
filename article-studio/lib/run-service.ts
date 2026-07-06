import { artifactPaths } from "./pipeline";
import { tryReadArtifact } from "./runs";
import type { RunState, StageId } from "./types";

export interface RunArtifacts {
  brief: string | null;
  dossier: string | null;
  draft: string | null;
  final: string | null;
  qc: string | null;
}

export async function loadArtifacts(run: RunState): Promise<RunArtifacts> {
  const p = artifactPaths(run.brief_id);
  const [brief, dossier, draft, final, qc] = await Promise.all([
    tryReadArtifact(run.client_slug, run.month, p.brief),
    tryReadArtifact(run.client_slug, run.month, p.dossier),
    tryReadArtifact(run.client_slug, run.month, p.draft),
    tryReadArtifact(run.client_slug, run.month, p.final),
    tryReadArtifact(run.client_slug, run.month, p.qc),
  ]);
  return { brief, dossier, draft, final, qc };
}

export function outputForStep(step: StageId, briefId: string): string {
  const p = artifactPaths(briefId);
  switch (step) {
    case "strategist":
      return p.brief;
    case "researcher":
      return p.dossier;
    case "writer":
      return p.draft;
    case "editor":
      return p.final;
  }
}

/** Move run state forward after a stage completes (sets the next gate to waiting). */
export function advanceAfter(run: RunState, step: StageId): void {
  switch (step) {
    case "strategist":
      run.steps.outline_gate.status = "waiting";
      run.current_step = "outline_gate";
      break;
    case "researcher":
      run.current_step = "writer";
      break;
    case "writer":
      run.steps.draft_gate.status = "waiting";
      run.current_step = "draft_gate";
      break;
    case "editor":
      run.current_step = "editor";
      break;
  }
}
