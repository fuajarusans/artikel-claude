import { NextRequest, NextResponse } from "next/server";
import { readKnowledgeBase, writeKnowledgeBaseFile } from "@/lib/clients";

export const runtime = "nodejs";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  try {
    const { slug } = await params;
    const files = await readKnowledgeBase(slug);
    return NextResponse.json({ files });
  } catch (err) {
    return NextResponse.json({ error: errMsg(err) }, { status: 400 });
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  try {
    const { slug } = await params;
    const body = await req.json().catch(() => ({}));
    const name = String(body.name ?? "").trim();
    const content = String(body.content ?? "");
    if (!name) return NextResponse.json({ error: "Nama file wajib diisi" }, { status: 400 });
    await writeKnowledgeBaseFile(slug, name, content);
    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: errMsg(err) }, { status: 400 });
  }
}

function errMsg(err: unknown): string {
  return err instanceof Error ? err.message : String(err);
}
