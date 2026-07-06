import { NextRequest, NextResponse } from "next/server";
import { listClients, createClient } from "@/lib/clients";
import { slugify } from "@/lib/runs";

export const runtime = "nodejs";

export async function GET() {
  try {
    const clients = await listClients();
    return NextResponse.json({ clients });
  } catch (err) {
    return NextResponse.json({ error: errMsg(err) }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const name = String(body.name ?? "").trim();
    let slug = String(body.slug ?? "").trim();
    if (!slug && name) slug = slugify(name);
    if (!slug) return NextResponse.json({ error: "Nama atau slug client wajib diisi" }, { status: 400 });

    const client = await createClient(slug, name || slug);
    return NextResponse.json({ client }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: errMsg(err) }, { status: 400 });
  }
}

function errMsg(err: unknown): string {
  return err instanceof Error ? err.message : String(err);
}
