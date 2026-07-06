"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

function slugify(s: string): string {
  return s
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export default function CreateClientForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [slugTouched, setSlugTouched] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const effectiveSlug = slugTouched ? slug : slugify(name);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setBusy(true);
    try {
      const res = await fetch("/api/clients", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, slug: effectiveSlug }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Gagal membuat client");
      router.push(`/clients/${data.client.slug}`);
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
      setBusy(false);
    }
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-3 sm:flex-row sm:items-end">
      <label className="flex-1 text-sm">
        <span className="mb-1 block text-xs text-muted">Nama client</span>
        <input
          className="w-full rounded-md border border-border bg-bg px-3 py-2 outline-none focus:border-brand"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="mis. PT Contoh Industri"
          required
        />
      </label>
      <label className="flex-1 text-sm">
        <span className="mb-1 block text-xs text-muted">Slug folder</span>
        <input
          className="w-full rounded-md border border-border bg-bg px-3 py-2 font-mono text-sm outline-none focus:border-brand"
          value={effectiveSlug}
          onChange={(e) => {
            setSlugTouched(true);
            setSlug(slugify(e.target.value));
          }}
          placeholder="seo-contoh"
          required
        />
      </label>
      <button
        type="submit"
        disabled={busy}
        className="rounded-md bg-brand px-4 py-2 text-sm font-medium text-brand-ink hover:opacity-90 disabled:opacity-50"
      >
        {busy ? "Membuat…" : "Buat Client"}
      </button>
      {error && <p className="text-xs text-danger sm:w-full">{error}</p>}
    </form>
  );
}
