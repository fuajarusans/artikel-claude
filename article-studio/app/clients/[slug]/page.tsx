import Link from "next/link";
import { notFound } from "next/navigation";
import { getClient, readKnowledgeBase } from "@/lib/clients";
import KnowledgeBaseEditor from "@/components/KnowledgeBaseEditor";

export const dynamic = "force-dynamic";

export default async function ClientDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const client = await getClient(slug);
  if (!client) notFound();
  const files = await readKnowledgeBase(slug);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs text-muted">
            <Link href="/clients" className="hover:text-brand">
              Client
            </Link>{" "}
            / {client.slug}
          </div>
          <h1 className="text-2xl font-semibold">{client.name}</h1>
        </div>
        <Link
          href={`/articles/new?client=${client.slug}`}
          className="rounded-md bg-brand px-4 py-2 text-sm font-medium text-brand-ink hover:opacity-90"
        >
          + Artikel untuk client ini
        </Link>
      </div>

      <div className="rounded-lg border border-border bg-surface p-3 text-xs text-muted">
        <span className="font-medium text-ink">Agent:</span>{" "}
        {client.agents.join(" · ") || "(tidak ada)"}
      </div>

      <div>
        <h2 className="mb-1 text-sm font-semibold uppercase tracking-wide text-muted">
          Knowledge Base (konteks penulisan)
        </h2>
        <p className="mb-4 text-xs text-muted">
          4 file ini adalah sumber kebenaran yang dibaca agent saat menulis. Edit lalu
          simpan.
        </p>
        <KnowledgeBaseEditor slug={client.slug} initialFiles={files} />
      </div>
    </div>
  );
}
