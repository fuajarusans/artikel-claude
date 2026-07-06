"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

/** Strip YAML frontmatter so the preview shows only the article body. */
function stripFrontmatter(md: string): string {
  if (md.startsWith("---")) {
    const end = md.indexOf("\n---", 3);
    if (end !== -1) {
      const after = md.indexOf("\n", end + 1);
      return after !== -1 ? md.slice(after + 1) : "";
    }
  }
  return md;
}

export default function MarkdownPreview({
  markdown,
  stripMeta = true,
}: {
  markdown: string;
  stripMeta?: boolean;
}) {
  const body = stripMeta ? stripFrontmatter(markdown) : markdown;
  return (
    <div className="prose-article">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{body}</ReactMarkdown>
    </div>
  );
}
