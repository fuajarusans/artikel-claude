import path from "node:path";

/**
 * Root folder that holds the per-client folders (seo-soltius, seo-gagas, ...).
 * Defaults to the parent of article-studio, since this app lives *inside* the
 * clients root as a sibling of the client folders.
 */
function resolveClientsRoot(): string {
  const env = process.env.CLIENTS_ROOT?.trim();
  if (env) return path.resolve(env);
  return path.resolve(process.cwd(), "..");
}

export const CLIENTS_ROOT = resolveClientsRoot();

/** This app's own folder name — never treated as a client. */
export const APP_DIR_NAME = "article-studio";

/** Folder copied when creating a new client from the UI. */
export const TEMPLATE_CLIENT = process.env.TEMPLATE_CLIENT?.trim() || "seo-template";

/** Directories that are never clients even if they look like one. */
export const NON_CLIENT_DIRS = new Set<string>([
  APP_DIR_NAME,
  "node_modules",
  ".git",
  ".next",
  "content-placement-soltius",
  "New folder",
]);

/** Model id per tier — overridable via env. */
export const MODELS = {
  opus: process.env.MODEL_OPUS?.trim() || "claude-opus-4-8",
  sonnet: process.env.MODEL_SONNET?.trim() || "claude-sonnet-4-6",
  haiku: process.env.MODEL_HAIKU?.trim() || "claude-haiku-4-5",
} as const;

export type ModelTier = keyof typeof MODELS;

/** Map a frontmatter `model:` value (opus/sonnet/haiku or a concrete id) to a model id. */
export function resolveModel(tier: string | undefined): string {
  if (!tier) return MODELS.sonnet;
  const t = tier.trim().toLowerCase();
  if (t in MODELS) return MODELS[t as ModelTier];
  return tier; // already a concrete model id
}

export function hasAnthropicKey(): boolean {
  return Boolean(process.env.ANTHROPIC_API_KEY?.trim());
}
