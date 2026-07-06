import { promises as fs } from "node:fs";
import path from "node:path";
import {
  monthDir,
  briefsDir,
  dossiersDir,
  draftsDir,
  finalDir,
  runsDir,
  researchDir,
  clientDir,
  assertValidSlug,
  assertMonth,
} from "./paths";
import type { ArticleInput, RunState, PipelineStep, StageState } from "./types";

export function currentMonth(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
}

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .normalize("NFKD")
    // eslint-disable-next-line no-misleading-character-class
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 40)
    .replace(/^-|-$/g, "");
}

async function ensureDirs(slug: string, month: string): Promise<void> {
  for (const dir of [briefsDir, dossiersDir, draftsDir, finalDir, runsDir, researchDir]) {
    await fs.mkdir(dir(slug, month), { recursive: true });
  }
}

function initSteps(): Record<PipelineStep, StageState> {
  const idle = (): StageState => ({ status: "idle" });
  return {
    strategist: idle(),
    outline_gate: idle(),
    researcher: idle(),
    writer: idle(),
    draft_gate: idle(),
    editor: idle(),
  };
}

async function nextBriefId(slug: string, month: string, keywordSlug: string): Promise<string> {
  const dir = runsDir(slug, month);
  let max = 0;
  try {
    const entries = await fs.readdir(dir);
    const re = new RegExp(`^${keywordSlug}-(\\d{2})\\.run\\.json$`);
    for (const e of entries) {
      const m = e.match(re);
      if (m) max = Math.max(max, parseInt(m[1], 10));
    }
  } catch {
    /* dir missing */
  }
  return `${keywordSlug}-${String(max + 1).padStart(2, "0")}`;
}

function runFile(slug: string, month: string, briefId: string): string {
  return path.join(runsDir(slug, month), `${briefId}.run.json`);
}

export async function createRun(clientSlug: string, input: ArticleInput): Promise<RunState> {
  assertValidSlug(clientSlug);
  if (!input.keyword?.trim()) throw new Error("Keyword wajib diisi");
  if (!input.landing_page?.trim()) throw new Error("Landing page wajib diisi");

  const month = input.month?.trim() || currentMonth();
  assertMonth(month);
  await ensureDirs(clientSlug, month);

  const keywordSlug = slugify(input.keyword);
  const briefId = await nextBriefId(clientSlug, month, keywordSlug);
  const now = new Date().toISOString();

  const run: RunState = {
    brief_id: briefId,
    client_slug: clientSlug,
    month,
    title: input.keyword,
    input: { ...input, month },
    steps: initSteps(),
    current_step: "strategist",
    created_at: now,
    updated_at: now,
  };
  await saveRun(run);
  return run;
}

export async function saveRun(run: RunState): Promise<void> {
  run.updated_at = new Date().toISOString();
  const file = runFile(run.client_slug, run.month, run.brief_id);
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, JSON.stringify(run, null, 2), "utf8");
}

export async function getRun(
  slug: string,
  month: string,
  briefId: string,
): Promise<RunState | null> {
  try {
    const raw = await fs.readFile(runFile(slug, month, briefId), "utf8");
    return JSON.parse(raw) as RunState;
  } catch {
    return null;
  }
}

export async function listRuns(slug: string): Promise<RunState[]> {
  assertValidSlug(slug);
  const base = path.join(clientDir(slug), "monthly_runs");
  const out: RunState[] = [];
  let months: string[] = [];
  try {
    months = await fs.readdir(base);
  } catch {
    return out;
  }
  for (const month of months) {
    if (!/^\d{4}-\d{2}$/.test(month)) continue;
    let files: string[] = [];
    try {
      files = await fs.readdir(runsDir(slug, month));
    } catch {
      continue;
    }
    for (const f of files) {
      if (!f.endsWith(".run.json")) continue;
      try {
        const raw = await fs.readFile(path.join(runsDir(slug, month), f), "utf8");
        out.push(JSON.parse(raw) as RunState);
      } catch {
        /* skip bad file */
      }
    }
  }
  out.sort((a, b) => b.updated_at.localeCompare(a.updated_at));
  return out;
}

export async function readArtifact(slug: string, month: string, rel: string): Promise<string> {
  const file = path.join(monthDir(slug, month), rel);
  return fs.readFile(file, "utf8");
}

export async function tryReadArtifact(
  slug: string,
  month: string,
  rel: string,
): Promise<string | null> {
  try {
    return await readArtifact(slug, month, rel);
  } catch {
    return null;
  }
}

export async function writeArtifact(
  slug: string,
  month: string,
  rel: string,
  content: string,
): Promise<void> {
  const file = path.join(monthDir(slug, month), rel);
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, content, "utf8");
}
