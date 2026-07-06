import Link from "next/link";
import { listClients } from "@/lib/clients";
import { TEMPLATE_CLIENT } from "@/lib/config";
import CreateClientForm from "@/components/CreateClientForm";

export const dynamic = "force-dynamic";

export default async function ClientsPage() {
  const clients = await listClients();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold">Client</h1>
        <p className="text-sm text-muted">
          Tiap client punya konteks sendiri (knowledge base + agent). Pilih untuk
          menyunting, atau buat client baru dari cetakan{" "}
          <code className="text-xs">{TEMPLATE_CLIENT}</code>.
        </p>
      </div>

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
            <div className="mt-3 flex flex-wrap gap-1">
              {c.agents.slice(0, 4).map((a) => (
                <span
                  key={a}
                  className="rounded bg-surface-2 px-1.5 py-0.5 text-[10px] text-muted"
                >
                  {a}
                </span>
              ))}
              {c.agents.length > 4 && (
                <span className="text-[10px] text-muted">+{c.agents.length - 4}</span>
              )}
            </div>
          </Link>
        ))}
      </div>

      <section className="rounded-xl border border-border bg-surface p-5">
        <h2 className="mb-1 text-sm font-semibold">Buat Client Baru</h2>
        <p className="mb-4 text-xs text-muted">
          Menyalin cetakan <code>{TEMPLATE_CLIENT}</code> (agent + knowledge base),
          tanpa riwayat/run lama. Lalu sunting knowledge base-nya.
        </p>
        <CreateClientForm />
      </section>
    </div>
  );
}
