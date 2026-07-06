export type StageId = "strategist" | "researcher" | "writer" | "editor";
export type GateId = "outline_gate" | "draft_gate";
export type PipelineStep = StageId | GateId;

export type StageStatus =
  | "idle"
  | "running"
  | "done"
  | "waiting" // gate is waiting for the user
  | "approved" // gate approved by the user
  | "error";

export interface ArticleInput {
  keyword: string;
  landing_page: string;
  priority?: string;
  sap_focus?: string;
  anchor?: string;
  notes?: string;
  target_word_count?: number;
  month?: string; // YYYY-MM
}

export interface StageState {
  status: StageStatus;
  started_at?: string;
  finished_at?: string;
  output?: string | null; // artifact path relative to monthly_runs/<month>/
  edited?: boolean;
  error?: string;
  cost_usd?: number;
  num_turns?: number;
}

export interface RunState {
  brief_id: string;
  client_slug: string;
  month: string;
  title?: string;
  input: ArticleInput;
  steps: Record<PipelineStep, StageState>;
  current_step: PipelineStep;
  created_at: string;
  updated_at: string;
}

export interface ClientSummary {
  slug: string;
  name: string;
  hasKnowledgeBase: boolean;
  agents: string[];
  isTemplate: boolean;
}

export interface KnowledgeBaseFile {
  name: string; // e.g. company_profile.md
  exists: boolean;
  content: string;
}

/** Events streamed over SSE while an agent stage runs. */
export type ProgressEvent =
  | { type: "start"; step: StageId; label: string; ts: number }
  | { type: "tool"; step: StageId; tool: string; detail?: string; ts: number }
  | { type: "text"; step: StageId; text: string; ts: number }
  | {
      type: "done";
      step: StageId;
      output?: string | null;
      cost_usd?: number;
      num_turns?: number;
      ts: number;
    }
  | { type: "error"; step: StageId; message: string; ts: number };
