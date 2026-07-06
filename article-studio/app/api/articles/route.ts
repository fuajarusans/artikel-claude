import { NextRequest, NextResponse } from "next/server";
import { getClient } from "@/lib/clients";
import { createRun, listRuns } from "@/lib/runs";
import type { ArticleInput } from "@/lib/types";

export const runtime = "nodejs";

export async function GET(req: NextRequest) {
  const client = req.nextUrl.searchParams.get("client");
  if (!client) return NextResponse.json({ error: "Parameter 'client' wajib" }, { status: 400 });
  try {
    const runs = await listRuns(client);
    return NextResponse.json({ runs });
  } catch (err) {
    return NextResponse.json({ error: errMsg(err) }, { status: 400 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const client = String(body.client ?? "").trim();
    if (!client) return NextResponse.json({ error: "Client wajib dipilih" }, { status: 400 });
    if (!(await getClient(client))) {
      return NextResponse.json({ error: `Client '${client}' tidak ditemukan` }, { status: 404 });
    }

    const input = (body.input ?? {}) as ArticleInput;
    if (!input.keyword?.trim()) return NextResponse.json({ error: "Keyword wajib diisi" }, { status: 400 });
    if (!input.landing_page?.trim()) return NextResponse.json({ error: "Landing page wajib diisi" }, { status: 400 });

    const run = await createRun(client, input);
    return NextResponse.json(
      { client, month: run.month, id: run.brief_id, run },
      { status: 201 },
    );
  } catch (err) {
    return NextResponse.json({ error: errMsg(err) }, { status: 400 });
  }
}

function errMsg(err: unknown): string {
  return err instanceof Error ? err.message : String(err);
}
