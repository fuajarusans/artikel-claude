import { listAgents } from "./agents";
import type { StageId, ArticleInput } from "./types";

export interface StageDef {
  id: StageId;
  label: string;
  role: "strategist" | "researcher" | "writer" | "editor";
  /** Gate that must be approved before this stage may run (if any). */
  requiresGate?: "outline_gate" | "draft_gate";
}

export const STAGE_ORDER: StageId[] = ["strategist", "researcher", "writer", "editor"];

export const STAGES: Record<StageId, StageDef> = {
  strategist: { id: "strategist", label: "Strategi — outline & angle", role: "strategist" },
  researcher: {
    id: "researcher",
    label: "Riset — fakta & sumber",
    role: "researcher",
    requiresGate: "outline_gate",
  },
  writer: { id: "writer", label: "Penulisan draft", role: "writer", requiresGate: "outline_gate" },
  editor: {
    id: "editor",
    label: "Editing — Generate final",
    role: "editor",
    requiresGate: "draft_gate",
  },
};

export function artifactPaths(briefId: string) {
  return {
    brief: `briefs/${briefId}.brief.md`,
    dossier: `dossiers/${briefId}.dossier.md`,
    draft: `drafts/${briefId}.id.md`,
    final: `final/${briefId}.id.md`,
    qc: `final/${briefId}.qc.md`,
  };
}

/** Resolve the actual agent file name for a role (clients use niche-prefixed names). */
export async function resolveAgentName(
  slug: string,
  role: StageDef["role"],
): Promise<string> {
  const agents = await listAgents(slug);
  const has = (n: string) => agents.includes(n);
  const pick = (re: RegExp) => agents.find((a) => re.test(a));

  let name: string | undefined;
  switch (role) {
    case "strategist":
      name = has("seo-keyword-strategist") ? "seo-keyword-strategist" : pick(/strategist$/);
      break;
    case "researcher":
      name = pick(/sme-researcher$/) || pick(/researcher$/);
      break;
    case "writer":
      name = has("seo-article-writer-id")
        ? "seo-article-writer-id"
        : pick(/writer-id$/) || pick(/writer/);
      break;
    case "editor":
      name = has("seo-editor") ? "seo-editor" : pick(/editor$/);
      break;
  }
  if (!name) {
    throw new Error(
      `Agent untuk peran '${role}' tidak ditemukan di client ini. Agent tersedia: ${agents.join(", ") || "(kosong)"}`,
    );
  }
  return name;
}

function optLine(label: string, v?: string | number): string {
  if (v === undefined || v === null || `${v}`.trim() === "") return "";
  return `- ${label}: ${v}\n`;
}

/** Build the self-contained task prompt for a given stage. */
export function buildStagePrompt(
  step: StageId,
  briefId: string,
  month: string,
  input: ArticleInput,
): string {
  const p = artifactPaths(briefId);
  const twc = input.target_word_count || 1650;

  if (step === "strategist") {
    return [
      `MODE: SINGLE-ARTICLE (web app), bukan batch bulanan. Hasilkan TEPAT SATU brief.`,
      `Bulan: ${month}. Brief ID: ${briefId}.`,
      ``,
      `Keyword: "${input.keyword}"`,
      `Landing page (hub): ${input.landing_page}`,
      optLine("Prioritas", input.priority),
      optLine("Fokus SAP/topik", input.sap_focus),
      optLine("Anchor brand/Soltius", input.anchor),
      optLine("Catatan dari pengguna", input.notes),
      optLine("Target kata", twc),
      ``,
      `Langkah:`,
      `1. Baca CLAUDE.md, knowledge_base/seo_playbook.md, knowledge_base/company_profile.md, knowledge_base/product_matrix.md, dan articles_history/index.json bila ada (untuk konteks + hindari duplikasi angle).`,
      `2. Riset ringan SERP/PAA via WebFetch/WebSearch (Ahrefs tidak tersambung — degrade graceful). Boleh tulis cache ke monthly_runs/${month}/research/<keyword-slug>.research.json.`,
      `3. Pilih SATU angle terkuat yang berbeda dari riwayat; pilih 2 cousin internal-link dari cross-link map product_matrix.md (atau pengetahuan terkait).`,
      `4. Tulis SATU brief memakai template brief standarmu ke: monthly_runs/${month}/briefs/${briefId}.brief.md (isi semua bagian, tanpa placeholder).`,
      ``,
      `JANGAN menulis lebih dari satu brief. JANGAN lanjut ke riset/penulisan. Laporkan: angle terpilih + path brief.`,
    ]
      .filter(Boolean)
      .join("\n");
  }

  if (step === "researcher") {
    return [
      `Bulan: ${month}. Hasilkan dossier untuk SATU brief.`,
      `Brief (outline yang SUDAH disetujui pengguna — ikuti): monthly_runs/${month}/${p.brief}`,
      `Ikuti proses dossier standarmu dan sumber di knowledge_base/.`,
      `Tulis dossier ke: monthly_runs/${month}/${p.dossier}`,
      `Laporkan: path dossier + jumlah klaim terverifikasi + jumlah sumber otoritatif.`,
    ].join("\n");
  }

  if (step === "writer") {
    return [
      `Bulan: ${month}. Tulis SATU draft artikel Bahasa Indonesia.`,
      `Input:`,
      `- Brief (outline disetujui): monthly_runs/${month}/${p.brief}`,
      `- Dossier: monthly_runs/${month}/${p.dossier}`,
      `Patuhi knowledge_base/style_guide.md (§5 anti-AI) dan seo_playbook.md (§3 on-page, §2a GEO).`,
      `Target ~${twc} kata (rentang 1.500–1.800).`,
      `Tulis draft (dengan frontmatter YAML lengkap) ke: monthly_runs/${month}/${p.draft}`,
      `Laporkan: path draft + jumlah kata final.`,
    ].join("\n");
  }

  // editor ("Generate")
  return [
    `Bulan: ${month}. Edit & finalisasi SATU artikel ("Generate").`,
    `Input:`,
    `- Brief: monthly_runs/${month}/${p.brief}`,
    `- Dossier: monthly_runs/${month}/${p.dossier}`,
    `- Draft (pengguna mungkin SUDAH merevisinya — hormati suntingan itu): monthly_runs/${month}/${p.draft}`,
    ``,
    `CATATAN v1: TIDAK ada images.json pada alur ini — LEWATI langkah validasi image-brief (anggap N/A). Pertahankan placeholder {IMAGE_NN: ...} apa adanya di body.`,
    `Jalankan anti-AI scan, cek fakta/SAP, checklist on-page + GEO, dan disiplin framing — perbaiki langsung di tempat.`,
    `Tulis final yang dipoles ke: monthly_runs/${month}/${p.final}`,
    `Tulis QC report ke: monthly_runs/${month}/${p.qc} (dengan recommendation mengikat).`,
    `Laporkan: recommendation + jumlah isu diperbaiki/di-flag.`,
  ].join("\n");
}
