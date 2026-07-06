import path from "node:path";
import { CLIENTS_ROOT } from "./config";

const SLUG_RE = /^[a-z0-9][a-z0-9-_]*$/i;
const MONTH_RE = /^\d{4}-\d{2}$/;

export function isValidSlug(slug: string): boolean {
  return SLUG_RE.test(slug) && !slug.includes("..");
}

export function assertValidSlug(slug: string): void {
  if (!isValidSlug(slug)) throw new Error(`Slug client tidak valid: ${slug}`);
}

export function assertMonth(month: string): void {
  if (!MONTH_RE.test(month)) throw new Error(`Bulan harus format YYYY-MM: ${month}`);
}

/** Resolve a path under CLIENTS_ROOT and guarantee it cannot escape the root. */
export function safeResolve(...segments: string[]): string {
  const p = path.resolve(CLIENTS_ROOT, ...segments);
  const rel = path.relative(CLIENTS_ROOT, p);
  if (rel === ".." || rel.startsWith(".." + path.sep) || path.isAbsolute(rel)) {
    throw new Error("Akses path di luar CLIENTS_ROOT ditolak");
  }
  return p;
}

export function clientDir(slug: string): string {
  assertValidSlug(slug);
  return safeResolve(slug);
}

export function knowledgeBaseDir(slug: string): string {
  return path.join(clientDir(slug), "knowledge_base");
}

export function agentsDir(slug: string): string {
  return path.join(clientDir(slug), ".claude", "agents");
}

export function monthDir(slug: string, month: string): string {
  assertMonth(month);
  return path.join(clientDir(slug), "monthly_runs", month);
}

export const briefsDir = (s: string, m: string) => path.join(monthDir(s, m), "briefs");
export const dossiersDir = (s: string, m: string) => path.join(monthDir(s, m), "dossiers");
export const draftsDir = (s: string, m: string) => path.join(monthDir(s, m), "drafts");
export const finalDir = (s: string, m: string) => path.join(monthDir(s, m), "final");
export const runsDir = (s: string, m: string) => path.join(monthDir(s, m), "runs");
export const researchDir = (s: string, m: string) => path.join(monthDir(s, m), "research");
