"use client";

import { useState } from "react";
import type { KnowledgeBaseFile } from "@/lib/types";

const LABELS: Record<string, string> = {
  "company_profile.md": "Company Profile",
  "product_matrix.md": "Product Matrix",
  "style_guide.md": "Style Guide",
  "seo_playbook.md": "SEO Playbook",
};

export default function KnowledgeBaseEditor({
  slug,
  initialFiles,
}: {
  slug: string;
  initialFiles: KnowledgeBaseFile[];
}) {
  const [files, setFiles] = useState(initialFiles);
  const [active, setActive] = useState(initialFiles[0]?.name ?? "");
  const [busy, setBusy] = useState(false);
  const [savedAt, setSavedAt] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const current = files.find((f) => f.name === active);

  function update(name: string, content: string) {
    setFiles((prev) => prev.map((f) => (f.name === name ? { ...f, content } : f)));
    setSavedAt(null);
  }

  async function save() {
    if (!current) return;
    setBusy(true);
    setError(null);
    try {
      const res = await fetch(`/api/clients/${slug}/kb`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: current.name, content: current.content }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Gagal menyimpan");
      setSavedAt(new Date().toLocaleTimeString("id-ID"));
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="rounded-xl border border-border bg-surface">
      <div className="flex flex-wrap gap-1 border-b border-border p-2">
        {files.map((f) => (
          <button
            key={f.name}
            onClick={() => setActive(f.name)}
            className={`rounded-md px-3 py-1.5 text-sm ${
              f.name === active
                ? "bg-brand text-brand-ink"
                : "text-muted hover:bg-surface-2"
            }`}
          >
            {LABELS[f.name] ?? f.name}
            {!f.exists && <span className="ml-1 text-warn">•</span>}
          </button>
        ))}
      </div>

      {current && (
        <div className="p-3">
          <textarea
            value={current.content}
            onChange={(e) => update(current.name, e.target.value)}
            spellCheck={false}
            className="h-[460px] w-full resize-y rounded-md border border-border bg-bg p-3 font-mono text-[13px] leading-relaxed outline-none focus:border-brand"
            placeholder={`Isi ${current.name}…`}
          />
          <div className="mt-3 flex items-center gap-3">
            <button
              onClick={save}
              disabled={busy}
              className="rounded-md bg-brand px-4 py-2 text-sm font-medium text-brand-ink hover:opacity-90 disabled:opacity-50"
            >
              {busy ? "Menyimpan…" : "Simpan"}
            </button>
            <span className="font-mono text-xs text-muted">{current.name}</span>
            {savedAt && <span className="text-xs text-ok">Tersimpan {savedAt}</span>}
            {error && <span className="text-xs text-danger">{error}</span>}
          </div>
        </div>
      )}
    </div>
  );
}
