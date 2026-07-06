import { promises as fs } from "node:fs";
import path from "node:path";
import { CLIENTS_ROOT, NON_CLIENT_DIRS, TEMPLATE_CLIENT } from "./config";
import { clientDir, knowledgeBaseDir, agentsDir, assertValidSlug } from "./paths";
import { listAgents } from "./agents";
import type { ClientSummary, KnowledgeBaseFile } from "./types";

export const KB_FILES = [
  "company_profile.md",
  "product_matrix.md",
  "style_guide.md",
  "seo_playbook.md",
] as const;

export type KbFileName = (typeof KB_FILES)[number];

async function isDir(p: string): Promise<boolean> {
  try {
    return (await fs.stat(p)).isDirectory();
  } catch {
    return false;
  }
}

async function pathExists(p: string): Promise<boolean> {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

async function looksLikeClient(slug: string): Promise<boolean> {
  return (await isDir(knowledgeBaseDir(slug))) && (await isDir(agentsDir(slug)));
}

async function readClientName(slug: string): Promise<string> {
  try {
    const md = await fs.readFile(path.join(clientDir(slug), "CLAUDE.md"), "utf8");
    const m = md.match(/^#\s+(.+)$/m);
    if (m) return m[1].trim();
  } catch {
    /* ignore */
  }
  return slug;
}

export async function listClients(): Promise<ClientSummary[]> {
  let entries: import("node:fs").Dirent[];
  try {
    entries = await fs.readdir(CLIENTS_ROOT, { withFileTypes: true });
  } catch {
    return [];
  }
  const out: ClientSummary[] = [];
  for (const e of entries) {
    if (!e.isDirectory()) continue;
    if (NON_CLIENT_DIRS.has(e.name) || e.name.startsWith(".")) continue;
    if (!(await looksLikeClient(e.name))) continue;
    out.push({
      slug: e.name,
      name: await readClientName(e.name),
      hasKnowledgeBase: true,
      agents: await listAgents(e.name),
      isTemplate: e.name === TEMPLATE_CLIENT,
    });
  }
  out.sort((a, b) => a.name.localeCompare(b.name));
  return out;
}

export async function getClient(slug: string): Promise<ClientSummary | null> {
  assertValidSlug(slug);
  if (!(await looksLikeClient(slug))) return null;
  return {
    slug,
    name: await readClientName(slug),
    hasKnowledgeBase: true,
    agents: await listAgents(slug),
    isTemplate: slug === TEMPLATE_CLIENT,
  };
}

export async function readKnowledgeBase(slug: string): Promise<KnowledgeBaseFile[]> {
  assertValidSlug(slug);
  const out: KnowledgeBaseFile[] = [];
  for (const name of KB_FILES) {
    const file = path.join(knowledgeBaseDir(slug), name);
    let content = "";
    let exists = false;
    try {
      content = await fs.readFile(file, "utf8");
      exists = true;
    } catch {
      /* file missing */
    }
    out.push({ name, exists, content });
  }
  return out;
}

export async function writeKnowledgeBaseFile(
  slug: string,
  name: string,
  content: string,
): Promise<void> {
  assertValidSlug(slug);
  if (!(KB_FILES as readonly string[]).includes(name)) {
    throw new Error(`File knowledge base tidak dikenal: ${name}`);
  }
  const dir = knowledgeBaseDir(slug);
  await fs.mkdir(dir, { recursive: true });
  await fs.writeFile(path.join(dir, name), content, "utf8");
}

export async function createClient(slug: string, name: string): Promise<ClientSummary> {
  assertValidSlug(slug);
  const target = clientDir(slug);
  if (await pathExists(target)) throw new Error(`Folder client '${slug}' sudah ada`);

  const template = clientDir(TEMPLATE_CLIENT);
  if (!(await isDir(template))) {
    throw new Error(
      `Cetakan '${TEMPLATE_CLIENT}' tidak ditemukan. Set TEMPLATE_CLIENT atau buat folder cetakan dulu.`,
    );
  }

  // Copy the template but skip run artifacts / history / heavy dirs.
  await fs.cp(template, target, {
    recursive: true,
    filter: (src: string) => {
      const rel = path.relative(template, src);
      if (!rel) return true;
      const top = rel.split(path.sep)[0];
      return !["monthly_runs", "articles_history", "node_modules", ".git"].includes(top);
    },
  });

  return {
    slug,
    name: name || slug,
    hasKnowledgeBase: true,
    agents: await listAgents(slug),
    isTemplate: false,
  };
}
