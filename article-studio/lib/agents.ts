import { promises as fs } from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { agentsDir } from "./paths";
import { resolveModel } from "./config";

export interface AgentDef {
  name: string;
  description?: string;
  model: string; // resolved concrete model id
  modelTier?: string; // original frontmatter value (opus/sonnet/...)
  tools?: string[];
  systemPrompt: string; // markdown body
}

export async function readAgent(slug: string, agentName: string): Promise<AgentDef> {
  const file = path.join(agentsDir(slug), `${agentName}.md`);
  const raw = await fs.readFile(file, "utf8");
  const parsed = matter(raw);
  const data = parsed.data as Record<string, unknown>;

  let tools: string[] | undefined;
  if (typeof data.tools === "string") {
    tools = data.tools.split(",").map((t) => t.trim()).filter(Boolean);
  } else if (Array.isArray(data.tools)) {
    tools = (data.tools as unknown[]).map(String);
  }

  return {
    name: (data.name as string) || agentName,
    description: data.description as string | undefined,
    model: resolveModel(data.model as string | undefined),
    modelTier: data.model as string | undefined,
    tools,
    systemPrompt: parsed.content.trim(),
  };
}

export async function listAgents(slug: string): Promise<string[]> {
  try {
    const entries = await fs.readdir(agentsDir(slug));
    return entries
      .filter((e) => e.endsWith(".md"))
      .map((e) => e.replace(/\.md$/, ""))
      .sort();
  } catch {
    return [];
  }
}
