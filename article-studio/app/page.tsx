import Link from "next/link";
import { listClients } from "@/lib/clients";
import { listRuns } from "@/lib/runs";
import { hasAnthropicKey, CLIENTS_ROOT } from "@/lib/config";
import { currentStepLabel, isComplete } from "@/lib/steps";

export const dynamic = "force-dynamic";

export default async function Dashboard() {
  const clients = await listClients();
  const runsNested = await Promise.all(clients.map((c) => listRuns(c.slug)));
  const runs = runsNested
    .flat()
    .sort((a, b) => b.updated_at.localeCompare(a.updated_at))
    .slice(0, 8);
  const keyOk = hasAnthropicKey();

  return (
    <div className="space-y-8">
      {!keyOk && (
        <div className="rounded-lg border border-warn/40 bg-warn/10 px-4 py-3 text-sm text-warn">
          <strong>ANTHROPIC_API_KEY belum di-set.</strong> Salin{" "}
          <code>.env.example</code> ke <code>.env.local</code> dan isi kuncinya agar
          agent bisa dijalankan.
        </div>
      )}

      <section>
        <div className="flex items-end justify-between">
          <div>
            <h1 className="text-2xl font-semibold">Dashboard</h1>
            <p className="text-sm text-muted">
              {clients.length} client terdeteksi di{" "}
              <code className="text-xs">{CLIENTS_ROOT}</code>
            </p>
          </div>
          <Link
            href="/articles/new"
            className="rounded-md bg-brand px-4 py-2 text-sm font-medium text-brand-ink hover:opacity-90"
          >
            + Artikel Baru
          </Link>
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted">
          Client
        </h2>
        {clients.length === 0 ? (
          <EmptyClients />
        ) : (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {clients.map((c) => (
              <Link
                key={c.slug}
                href={`/clients/${c.slug}`}
                className="rounded-xl border border-border bg-surface p-4 hover:border-brand/60"
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">{c.name}</span>
                  {c.isTemplate && (
                    <span className="rounded bg-surface-2 px-1.5 py-0.5 text-[10px] text-muted">
                      template
                    </span>
                  )}
                </div>
                <div className="mt-1 text-xs text-muted">{c.slug}</div>
                <div className="mt-3 text-xs text-muted">{c.agents.length} agent</div>
              </Link>
            ))}
          </div>
        )}
      </section>

      <section>
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted">
          Artikel Terbaru
        </h2>
        {runs.length === 0 ? (
          <p className="text-sm text-muted">Belum ada artikel. Mulai dari “Artikel Baru”.</p>
        ) : (
          <div className="overflow-hidden rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead className="bg-surface-2 text-left text-xs uppercase text-muted">
                <tr>
                  <th className="px-4 py-2 font-medium">Judul / Keyword</th>
                  <th className="px-4 py-2 font-medium">Client</th>
                  <th className="px-4 py-2 font-medium">Tahap</th>
                  <th className="px-4 py-2 font-medium">Diperbarui</th>
                </tr>
              </thead>
              <tbody>
                {runs.map((r) => (
                  <tr key={`${r.client_slug}/${r.brief_id}`} className="border-t border-border">
                    <td className="px-4 py-2">
                      <Link
                        href={`/articles/${r.client_slug}/${r.month}/${r.brief_id}`}
                        className="text-ink hover:text-brand"
                      >
                        {r.title || r.input.keyword}
                      </Link>
                    </td>
                    <td className="px-4 py-2 text-muted">{r.client_slug}</td>
                    <td className="px-4 py-2">
                      <span
                        className={`rounded px-1.5 py-0.5 text-xs ${
                          isComplete(r)
                            ? "bg-ok/15 text-ok"
                            : "bg-surface-2 text-muted"
                        }`}
                      >
                        {currentStepLabel(r)}
                      </span>
                    </td>
                    <td className="px-4 py-2 text-xs text-muted">
                      {new Date(r.updated_at).toLocaleString("id-ID")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
}

function EmptyClients() {
  return (
    <div className="rounded-xl border border-dashed border-border bg-surface p-6 text-sm text-muted">
      Tidak ada folder client terdeteksi. Pastikan folder seperti{" "}
      <code>seo-soltius</code> berada di <code>CLIENTS_ROOT</code> (punya{" "}
      <code>knowledge_base/</code> dan <code>.claude/agents/</code>), atau buat client
      baru dari menu <Link href="/clients" className="text-brand">Client</Link>.
    </div>
  );
}
