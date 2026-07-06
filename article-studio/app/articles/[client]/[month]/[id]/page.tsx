import { notFound } from "next/navigation";
import { getRun } from "@/lib/runs";
import { loadArtifacts } from "@/lib/run-service";
import ArticleWizard from "@/components/ArticleWizard";

export const dynamic = "force-dynamic";

export default async function WizardPage({
  params,
}: {
  params: Promise<{ client: string; month: string; id: string }>;
}) {
  const { client, month, id } = await params;
  const run = await getRun(client, month, id);
  if (!run) notFound();
  const artifacts = await loadArtifacts(run);
  return <ArticleWizard initialRun={run} initialArtifacts={artifacts} />;
}
