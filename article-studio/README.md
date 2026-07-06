# Article Studio

Web app multi-client untuk pembuatan artikel SEO dengan AI agent. Membungkus pipeline
Claude Code per-client (folder seperti `seo-soltius`, `seo-gagas`) menjadi UI berpemandu
dengan **2 titik revisi** (outline & draft), **indikator progres real-time**, dan
**halaman preview**.

Dibangun dengan **Next.js (App Router) + TypeScript + Claude Agent SDK**.

## Alur

```
Input keyword → Strategist → [Gate 1: revisi outline] → Researcher → Writer
            → [Gate 2: revisi draft] → ⟦Generate⟧ Editor → Preview final
```

Tiap tahap dijalankan oleh agent `.claude/agents/*.md` milik client (dibaca apa adanya
oleh Agent SDK, dengan `cwd` = folder client). Artefak ditulis ke
`monthly_runs/<YYYY-MM>/{briefs,dossiers,drafts,final}` + state di `runs/<brief-id>.run.json`.

## Setup

```bash
cd article-studio
npm install
npm install @anthropic-ai/claude-agent-sdk   # bila belum terpasang

cp .env.example .env.local
# isi ANTHROPIC_API_KEY=...
```

Secara default `CLIENTS_ROOT` = folder induk dari `article-studio` (mis.
`.../Documents/artikel-claude`), sehingga `seo-soltius`, `seo-gagas`, dst. otomatis
terdeteksi sebagai client. Override via `CLIENTS_ROOT` di `.env.local` bila perlu.

## Jalankan

```bash
npm run dev      # http://localhost:3000
npm run build    # build produksi
npm run typecheck
```

## Struktur

| Path | Isi |
|---|---|
| `app/` | Halaman (Dashboard, Client, Artikel Baru, Wizard) + API routes |
| `app/api/articles/.../run` | Endpoint SSE yang menjalankan satu tahap agent & stream progres |
| `lib/` | config, paths (sandbox), clients, runs, agents, pipeline, agent-runner |
| `components/` | ProgressStepper, ArticleWizard, editor knowledge base, dll. |

## Catatan v1

- 4 agent inti: strategist → researcher → writer → editor. (image-planner, quality-validator,
  history-curator menyusul — lihat `../PRD.md` §15.)
- Tanpa database; semua artefak berupa file (kompatibel dengan pipeline CLI lama).
- Tanpa generate gambar; placeholder `{IMAGE_NN}` dipertahankan.
- Output: preview + salin Markdown + unduh `.md`. Ekspor `.docx` direncanakan v1.1.
