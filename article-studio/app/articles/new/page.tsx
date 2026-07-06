import { listClients } from "@/lib/clients";
import NewArticleForm from "@/components/NewArticleForm";

export const dynamic = "force-dynamic";

export default async function NewArticlePage({
  searchParams,
}: {
  searchParams: Promise<{ client?: string }>;
}) {
  const { client } = await searchParams;
  const clients = await listClients();
  const selectable = clients.filter((c) => !c.isTemplate);

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Artikel Baru</h1>
        <p className="text-sm text-muted">
          Pilih client, isi keyword + landing page, lalu jalankan pipeline. Anda bisa
          merevisi outline dan draft sebelum Generate.
        </p>
      </div>

      {selectable.length === 0 ? (
        <div className="rounded-xl border border-dashed border-border bg-surface p-6 text-sm text-muted">
          Belum ada client yang bisa dipakai. Buat dulu di menu Client.
        </div>
      ) : (
        <NewArticleForm clients={selectable} defaultClient={client} />
      )}
    </div>
  );
}
