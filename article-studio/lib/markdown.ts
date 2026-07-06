import matter from "gray-matter";

export interface ParsedMarkdown {
  data: Record<string, unknown>;
  content: string;
}

export function parseFrontmatter(md: string): ParsedMarkdown {
  try {
    const p = matter(md);
    return { data: p.data as Record<string, unknown>, content: p.content };
  } catch {
    return { data: {}, content: md };
  }
}

export function extractTitle(md: string): string | undefined {
  const { data, content } = parseFrontmatter(md);
  if (typeof data.title === "string" && data.title.trim()) return data.title.trim();
  const m = content.match(/^#\s+(.+)$/m);
  return m?.[1]?.trim();
}

/** H2 headings (## ...) for outline display. */
export function extractH2s(md: string): string[] {
  const { content } = parseFrontmatter(md);
  const out: string[] = [];
  const re = /^##\s+(.+)$/gm;
  let m: RegExpExecArray | null;
  while ((m = re.exec(content))) out.push(m[1].trim());
  return out;
}

export function wordCount(md: string): number {
  const { content } = parseFrontmatter(md);
  return content.split(/\s+/).filter(Boolean).length;
}
