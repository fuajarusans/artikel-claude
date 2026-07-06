"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { ClientSummary } from "@/lib/types";

export default function NewArticleForm({
  clients,
  defaultClient,
}: {
  clients: ClientSummary[];
  defaultClient?: string;
}) {
  const router = useRouter();
  const [client, setClient] = useState(
    defaultClient && clients.some((c) => c.slug === defaultClient)
      ? defaultClient
      : clients[0]?.slug ?? "",
  );
  const [keyword, setKeyword] = useState("");
  const [landingPage, setLandingPage] = useState("");
  const [priority, setPriority] = useState("");
  const [sapFocus, setSapFocus] = useState("");
  const [anchor, setAnchor] = useState("");
  const [notes, setNotes] = useState("");
  const [targetWords, setTargetWords] = useState(1650);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setBusy(true);
    try {
      const res = await fetch("/api/articles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          client,
          input: {
            keyword,
            landing_page: landingPage,
            priority: priority || undefined,
            sap_focus: sapFocus || undefined,
            anchor: anchor || undefined,
            notes: notes || undefined,
            target_word_count: targetWords,
          },
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Gagal membuat artikel");
      router.push(`/articles/${data.client}/${data.month}/${data.id}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
      setBusy(false);
    }
  }

  const field = "w-full rounded-md border border-border bg-bg px-3 py-2 text-sm outline-none focus:border-brand";

  return (
    <form onSubmit={submit} className="space-y-4 rounded-xl border border-border bg-surface p-5">
      <label className="block text-sm">
        <span className="mb-1 block text-xs text-muted">Client</span>
        <select className={field} value={client} onChange={(e) => setClient(e.target.value)}>
          {clients.map((c) => (
            <option key={c.slug} value={c.slug}>
              {c.name} ({c.slug})
            </option>
          ))}
        </select>
      </label>

      <label className="block text-sm">
        <span className="mb-1 block text-xs text-muted">Keyword *</span>
        <input
          className={field}
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="mis. ERP migration to the cloud"
          required
        />
      </label>

      <label className="block text-sm">
        <span className="mb-1 block text-xs text-muted">Landing page (hub) *</span>
        <input
          className={field}
          value={landingPage}
          onChange={(e) => setLandingPage(e.target.value)}
          placeholder="https://www.contoh.co.id/id/blog/..."
          type="url"
          required
        />
      </label>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-1 block text-xs text-muted">Prioritas (opsional)</span>
          <select className={field} value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value="">—</option>
            <option value="rescue">rescue</option>
            <option value="defend">defend</option>
            <option value="whitespace">whitespace</option>
            <option value="grow">grow</option>
            <option value="new">new</option>
          </select>
        </label>
        <label className="block text-sm">
          <span className="mb-1 block text-xs text-muted">Target kata</span>
          <input
            className={field}
            type="number"
            min={1200}
            max={2500}
            value={targetWords}
            onChange={(e) => setTargetWords(Number(e.target.value) || 1650)}
          />
        </label>
      </div>

      <label className="block text-sm">
        <span className="mb-1 block text-xs text-muted">Fokus topik / SAP (opsional)</span>
        <input
          className={field}
          value={sapFocus}
          onChange={(e) => setSapFocus(e.target.value)}
          placeholder="mis. RISE with SAP, S/4HANA Cloud"
        />
      </label>

      <label className="block text-sm">
        <span className="mb-1 block text-xs text-muted">Anchor brand (opsional)</span>
        <input
          className={field}
          value={anchor}
          onChange={(e) => setAnchor(e.target.value)}
          placeholder="mis. layanan migrasi + kredensial partner"
        />
      </label>

      <label className="block text-sm">
        <span className="mb-1 block text-xs text-muted">Catatan untuk agent (opsional)</span>
        <textarea
          className={`${field} h-24 resize-y`}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Arahan khusus angle, audiens, sudut pandang…"
        />
      </label>

      {error && <p className="text-sm text-danger">{error}</p>}

      <button
        type="submit"
        disabled={busy || !client}
        className="w-full rounded-md bg-brand px-4 py-2.5 text-sm font-medium text-brand-ink hover:opacity-90 disabled:opacity-50"
      >
        {busy ? "Menyiapkan…" : "Mulai — Jalankan Strategist"}
      </button>
    </form>
  );
}
