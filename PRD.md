# PRD — Article Studio (Web App AI Agent untuk Pembuatan Artikel SEO)

> **Status:** Draft v0.1 · **Tanggal:** 2026-06-12 · **Pemilik:** WEBARQ Promote
> **Nama kerja produk:** *Article Studio* (sementara — bisa diganti)
> Dokumen ini adalah rancangan kebutuhan produk (PRD). Belum ada kode yang ditulis; persetujuan atas dokumen ini menjadi dasar pembangunan v1.

---

## 1. Ringkasan Eksekutif

Saat ini WEBARQ Promote memproduksi artikel SEO Bahasa Indonesia memakai **pipeline multi-agent berbasis Claude Code CLI**. Tiap client adalah satu folder (mis. `seo-soltius`, `seo-gagas`) berisi knowledge base, definisi agent (`.claude/agents/*.md`), konteks sumber, dan riwayat artikel. Pipeline penuh punya 7 agent (strategist → researcher → writer → image-planner → editor → quality-validator → history-curator) yang dijalankan lewat terminal.

Masalahnya: alur ini **hanya bisa dioperasikan dari CLI oleh orang teknis**, tidak ada antarmuka visual, tidak ada **titik revisi manusia** di tengah jalan, dan tidak ada **indikator progres** yang bisa dipantau non-teknis.

**Article Studio** adalah aplikasi web yang membungkus pipeline ini menjadi produk yang dapat dipakai tim konten:

- **Multi-client**: tiap client punya konteks (knowledge base + aturan penulisan) sendiri; client baru bisa dibuat dan dilampiri konteksnya lewat UI.
- **Alur berpemandu dengan 2 titik revisi**: pengguna bisa **merevisi outline** (hasil strategist) lalu **merevisi draft** (hasil writer) **sebelum** menekan *Generate* dan masuk ke **halaman preview**.
- **Indikator progres real-time**: tiap tahap pipeline (dan sub-langkahnya) ditampilkan langsung saat agent bekerja.

---

## 2. Latar Belakang & Konteks yang Sudah Ada

### 2.1 Pipeline existing (`seo-soltius` sebagai contoh)
- **Pola multi-client sudah terbukti**: yang berbeda per client hanyalah `knowledge_base/` (4 file), `.claude/agents/`, dan `context/`. "Mesin"-nya (struktur folder, konvensi penamaan, alur) identik antar client. Lihat `seo-soltius/docs/PIPELINE_TEMPLATE.md`.
- **4 file knowledge base** (sumber kebenaran per client):
  - `company_profile.md` — fakta perusahaan, kredensial, positioning.
  - `product_matrix.md` — peta keyword → teknologi yang diajarkan + anchor brand + cross-link + blacklist.
  - `style_guide.md` — anatomi artikel, nada B2B, **§5 pola anti-AI** (aturan penulisan paling ketat).
  - `seo_playbook.md` — sinyal algoritma 2026 + aturan AI Overview/GEO + checklist on-page.
- **Aturan penulisan** dipakai writer & editor: 1.500–1.800 kata, definition snippet di awal, ≥1 list + ≥1 tabel, 3 internal link, 1–2 sitasi otoritatif, FAQ 5–8, blok anti-AI, CTA halus di akhir.
- **Output**: `.md` (kanonik) + opsi `.docx` (via pandoc). Untuk Soltius, gambar hanya placeholder `{IMAGE_NN: konsep}` (tidak men-generate gambar).

### 2.2 Yang dipakai-ulang oleh web app
- Definisi agent `.claude/agents/*.md` per client → **dijalankan apa adanya** lewat Claude Agent SDK.
- 4 file knowledge base + folder `context/` → **konteks per client**.
- Struktur `monthly_runs/<YYYY-MM>/{research,briefs,dossiers,drafts,final}` → tempat artefak tetap ditulis.
- `seo-template/` → cetakan untuk membuat client baru.

---

## 3. Tujuan & Sasaran

| Kode | Tujuan | Ukuran keberhasilan |
|---|---|---|
| G1 | Tim non-teknis bisa memproduksi 1 artikel end-to-end dari UI | Artikel jadi tanpa menyentuh terminal |
| G2 | Manusia bisa mengarahkan hasil di 2 titik (outline & draft) | 2 gate revisi berfungsi & edit tersimpan |
| G3 | Konteks berbeda per client + bisa tambah client baru dari UI | Buat client baru + unggah knowledge base tanpa edit manual folder |
| G4 | Progres pekerjaan terlihat real-time | Tiap tahap & sub-langkah tampil saat agent jalan |
| G5 | Kualitas output setara pipeline CLI | Lolos checklist `style_guide §5` + `seo_playbook §3` |

---

## 4. Non-Goals (Di Luar Lingkup v1)

Ditunda ke v2+ (lihat Roadmap §15):
- ❌ Generate gambar AI (FLUX/OpenAI) — v1 hanya pertahankan placeholder `{IMAGE_NN}`.
- ❌ Agent **quality-validator** (deteksi plagiarisme/AI) + loop revise otomatis.
- ❌ Agent **history-curator** + dedup angle + commit ke `articles_history/`.
- ❌ **Batch bulanan** (mis. 30 artikel sekaligus) — v1 fokus **1 artikel per sesi**.
- ❌ Versi **Bahasa Inggris** (writer-en).
- ❌ **Database** (Postgres) & **multi-user/role/auth** kompleks — v1 berbasis filesystem.
- ❌ **Publikasi langsung ke CMS**.
- ❌ Integrasi **Ahrefs MCP / GSC** (strategist degrade ke WebSearch/WebFetch seperti sekarang).

---

## 5. Keputusan Arsitektur (Terkunci)

Empat keputusan inti yang telah disepakati:

| # | Keputusan | Pilihan | Implikasi |
|---|---|---|---|
| D1 | **Tech stack & eksekusi agent** | **Next.js + Claude Agent SDK (TypeScript)** | Satu codebase TS. Agent SDK menjalankan subagent `.md` + membaca knowledge base folder client langsung (cwd = folder client). |
| D2 | **Titik revisi manusia** | **Outline + Draft (2 gate)** | Gate-1: revisi outline (hasil strategist). Gate-2: revisi draft (hasil writer). Lalu *Generate* (editor) → preview. |
| D3 | **Cakupan pipeline v1** | **4 agent inti** | strategist → researcher → writer → editor. (image-planner, validator, curator menyusul.) |
| D4 | **Penyimpanan konteks client** | **Folder-per-client + UI upload** | Tanpa DB. UI membuat folder client (dari `seo-template`) & mengunggah/menyunting knowledge base. |

---

## 6. Persona Pengguna

| Persona | Peran | Kebutuhan utama |
|---|---|---|
| **Content Strategist / SEO** | Memulai artikel, memilih & merevisi outline | Kontrol angle, keyword, struktur H2 |
| **Writer / Editor** | Merevisi draft, memutuskan *Generate* | Editor markdown nyaman, lihat aturan & QC |
| **Account / Admin** | Mengelola client & konteksnya | Tambah client, unggah knowledge base, atur API key |

v1 mengasumsikan tim internal tepercaya (single-tenant operasional). Tidak ada pemisahan peran teknis (RBAC) di v1.

---

## 7. Arsitektur Sistem (Tingkat Tinggi)

```
┌────────────────────────────────────────────────────────────┐
│                     Browser (Next.js UI)                    │
│  Dashboard · Client Manager · Article Wizard · Preview      │
│  (Progress stepper via SSE)                                 │
└───────────────┬───────────────────────────┬────────────────┘
                │  HTTP / SSE                │
┌───────────────▼───────────────────────────▼────────────────┐
│                  Next.js Server (API Routes)                │
│  /api/clients         CRUD client + upload knowledge base   │
│  /api/articles        buat run, baca/tulis artefak          │
│  /api/run/:stage      jalankan 1 agent (stream progres)     │
│                                                             │
│   ┌──────────────── Agent Runner (lib) ────────────────┐    │
│   │  Claude Agent SDK · cwd = <folder client>          │    │
│   │  jalankan subagent: strategist/researcher/...      │    │
│   │  map event (tool_use Read/Write/WebSearch, teks) → │    │
│   │  progres SSE                                        │    │
│   └────────────────────────────────────────────────────┘    │
└───────────────┬─────────────────────────────┬──────────────┘
                │ baca/tulis file              │ Anthropic API
┌───────────────▼──────────────┐   ┌───────────▼──────────────┐
│   Filesystem (Clients Root)  │   │   Anthropic (Claude)     │
│   seo-soltius/ seo-gagas/ …  │   │   opus / sonnet tiers    │
│   monthly_runs/<bulan>/…     │   │   + WebSearch/WebFetch   │
└──────────────────────────────┘   └──────────────────────────┘
```

### 7.1 Cara agent dijalankan
- **Claude Agent SDK (TypeScript)** dipanggil dari API route server.
- Tiap pemanggilan menjalankan **satu agent untuk satu tahap diskret** (bukan seluruh pipeline sekaligus) agar bisa berhenti di gate revisi.
- **`cwd` di-set ke folder client** sehingga agent otomatis memuat `CLAUDE.md`, `.claude/agents/`, dan `knowledge_base/` client tersebut — **tanpa menyalin prompt** ke kode.
- Tools agent (Read/Write/Edit/WebSearch/WebFetch) di-*auto-allow* (mode non-interaktif server) dan **dibatasi ke folder client**.
- **Model per agent** mengikuti frontmatter `.md` (opus untuk strategist/writer/editor, sonnet untuk researcher). ID model dapat dikonfigurasi via env (default: `claude-opus-4-8`, `claude-sonnet-4-6`).

> Catatan teknis (akan diverifikasi saat implementasi): nama paket & API persis Agent SDK, mekanisme memanggil subagent spesifik vs. memuat system prompt `.md` sendiri, dan streaming event. Detail ini tidak mengubah desain produk di PRD ini.

---

## 8. Alur Kerja Inti (4 Agent + 2 Gate Revisi)

```
[Pengguna]
   │  pilih client + isi keyword, landing page, (opsional) prioritas/fokus/catatan
   ▼
(1) STRATEGIST ───────────────► OUTLINE / BRIEF
   │                              (angle, judul, skeleton H2, intent, internal link, anchor)
   ▼
╔══════════════ GATE 1: REVISI OUTLINE ══════════════╗
║  Pengguna menyunting angle/judul/H2/intent.        ║
║  (Opsional: pilih 1 dari beberapa opsi angle.)     ║
║  → Setujui                                         ║
╚════════════════════════════════════════════════════╝
   ▼
(2) RESEARCHER ──────────────► DOSSIER
   │                             (fakta terverifikasi, sitasi, draft FAQ, definition snippet)
   ▼
(3) WRITER ──────────────────► DRAFT ARTIKEL (markdown, 1.500–1.800 kata)
   ▼
╔══════════════ GATE 2: REVISI DRAFT ════════════════╗
║  Editor markdown inline. Pengguna mengubah teks.   ║
║  Panel bantu: aturan style, daftar fakta/sitasi.   ║
║  → Tekan  ⟦ GENERATE ⟧                              ║
╚════════════════════════════════════════════════════╝
   ▼
(4) EDITOR ("Generate") ─────► FINAL POLISHED + QC REPORT
   ▼
[HALAMAN PREVIEW]  artikel final ter-render · skor QC · salin/unduh (.md, opsi .docx)
```

**Pemetaan ke requirement Anda:** "artikel yang bisa **direvisi langsung** (Gate-1 outline + Gate-2 draft) **sebelum generate** (Editor) **sebelum halaman preview**."

### 8.1 Artefak per tahap (ditulis ke folder client)
| Tahap | Output file | Folder |
|---|---|---|
| Strategist | `<brief-id>.brief.md` | `monthly_runs/<bulan>/briefs/` |
| Researcher | `<brief-id>.dossier.md` | `monthly_runs/<bulan>/dossiers/` |
| Writer | `<brief-id>.id.md` (draft) | `monthly_runs/<bulan>/drafts/` |
| Editor (Generate) | `<brief-id>.id.md` (final) + `<brief-id>.qc.md` | `monthly_runs/<bulan>/final/` |
| State run | `<brief-id>.run.json` | `monthly_runs/<bulan>/runs/` |

> Suntingan pengguna di Gate-1/Gate-2 **ditulis balik** ke file brief/draft sebelum agent berikutnya jalan, sehingga agent selalu bekerja dari versi yang sudah disetujui manusia.

---

## 9. Kebutuhan Fungsional (Functional Requirements)

### 9.1 Manajemen Client
| ID | Kebutuhan | Prioritas |
|---|---|---|
| FR-C1 | Tampilkan daftar client (deteksi otomatis folder ber-`knowledge_base/` + `.claude/agents/`) | Must |
| FR-C2 | Buat client baru via UI (salin dari `seo-template`, set nama & slug) | Must |
| FR-C3 | Lihat & sunting 4 file knowledge base lewat editor di UI | Must |
| FR-C4 | Unggah file `context/` (PDF/DOCX/MD) untuk client | Should |
| FR-C5 | Tampilkan aturan penulisan ringkas (dari `style_guide.md`) saat menulis | Should |
| FR-C6 | Validasi kelengkapan konteks (4 file ada & tidak kosong) sebelum bisa membuat artikel | Should |

### 9.2 Pembuatan Artikel (Wizard)
| ID | Kebutuhan | Prioritas |
|---|---|---|
| FR-A1 | Form mulai: pilih client + input `keyword` (wajib), `landing_page` (wajib), opsional `priority`, `sap_focus`/fokus topik, `anchor`, `notes`, `target_word_count` (default 1650), bulan (default bulan berjalan) | Must |
| FR-A2 | Jalankan strategist → hasilkan outline/brief; tampilkan terstruktur | Must |
| FR-A3 | (Opsional) strategist menghasilkan beberapa opsi angle; pengguna memilih satu | Could |
| FR-A4 | **Gate-1**: edit field outline (judul, angle, intent, daftar H2, internal link, anchor, FAQ) lalu *Setujui* | Must |
| FR-A5 | Jalankan researcher → dossier; tampilkan fakta & sitasi (read-only di v1) | Must |
| FR-A6 | Jalankan writer → draft markdown | Must |
| FR-A7 | **Gate-2**: editor markdown inline untuk draft (split-view: editor + preview) | Must |
| FR-A8 | Tombol **Generate** menjalankan editor → final + QC | Must |
| FR-A9 | Simpan/lanjutkan run yang tertunda (resume dari state terakhir) | Should |
| FR-A10 | Batalkan / ulangi satu tahap (mis. jalankan ulang strategist dengan input berbeda) | Should |

### 9.3 Indikator Progres
| ID | Kebutuhan | Prioritas |
|---|---|---|
| FR-P1 | Stepper/timeline 4 tahap dengan status: `pending` / `running` / `done` / `menunggu revisi` / `error` | Must |
| FR-P2 | Sub-langkah real-time dari event agent (mis. "Researcher: mencari sumber via WebSearch…", "Writer: menulis bagian 3…") via **SSE/stream** | Must |
| FR-P3 | Estimasi/elapsed time per tahap | Should |
| FR-P4 | Tampilkan error tahap secara jelas + opsi retry | Must |
| FR-P5 | Indikator gate "menunggu tindakan Anda" yang menonjol | Must |

### 9.4 Preview & Output
| ID | Kebutuhan | Prioritas |
|---|---|---|
| FR-O1 | Halaman preview: render artikel final (markdown → HTML rapi) | Must |
| FR-O2 | Tampilkan ringkasan QC (skor, rekomendasi approve/revise, hal yang diperbaiki/di-flag) | Must |
| FR-O3 | Salin sebagai Markdown / HTML | Must |
| FR-O4 | Unduh `.md` | Must |
| FR-O5 | Unduh `.docx` (via pandoc yang sudah ada di `tools/`) | Should |
| FR-O6 | Tampilkan meta (title, meta description, slug, internal/eksternal link, word count) | Should |
| FR-O7 | Daftar placeholder `{IMAGE_NN}` sebagai catatan untuk tim desain | Could |

---

## 10. Model Data & Struktur Penyimpanan (Filesystem)

Tanpa database. **Clients Root** = direktori yang memuat folder-folder client (mis. `C:\Users\Fajar Santoso\Documents\artikel-claude`), dikonfigurasi via env `CLIENTS_ROOT`. Aplikasi web berada di subfolder terpisah (mis. `article-studio/`) dan **dikecualikan** dari deteksi client.

```
<CLIENTS_ROOT>/
├── article-studio/                 ← APLIKASI WEB (Next.js) — bukan client
├── seo-template/                   ← cetakan untuk client baru
├── seo-soltius/                    ← client
│   ├── CLAUDE.md
│   ├── .claude/agents/*.md
│   ├── knowledge_base/*.md         ← konteks client (4 file)
│   ├── context/                    ← dokumen sumber
│   └── monthly_runs/<YYYY-MM>/
│       ├── briefs/  dossiers/  drafts/  final/
│       └── runs/<brief-id>.run.json   ← BARU: state pipeline per artikel
└── seo-gagas/ …
```

### 10.1 Skema `run.json` (state pipeline per artikel)
```json
{
  "brief_id": "low-code-platform-01",
  "client_slug": "seo-soltius",
  "month": "2026-06",
  "input": {
    "keyword": "Low-Code Platform",
    "landing_page": "https://www.soltius.co.id/id/blog/low-code-and-no-code-platforms",
    "priority": "grow",
    "notes": "..."
  },
  "stages": {
    "strategist": { "status": "done",   "started_at": "...", "finished_at": "...", "output": "briefs/low-code-platform-01.brief.md" },
    "outline_gate":{ "status": "approved","edited": true },
    "researcher": { "status": "done",   "output": "dossiers/low-code-platform-01.dossier.md" },
    "writer":     { "status": "done",   "output": "drafts/low-code-platform-01.id.md" },
    "draft_gate": { "status": "pending" },
    "editor":     { "status": "idle",   "output": null }
  },
  "current_stage": "draft_gate",
  "created_at": "...",
  "updated_at": "..."
}
```
> File ini yang membuat alur bisa **berhenti di gate** dan **dilanjutkan**.

---

## 11. UI / Halaman Utama

| Halaman | Isi |
|---|---|
| **Dashboard** | Daftar client; daftar artikel terbaru + statusnya; tombol "Artikel Baru" |
| **Client Manager** | Daftar client; buat client baru; editor 4 knowledge base; unggah `context/` |
| **Article Wizard** | Wizard berurutan: Input → Outline (Gate-1) → [Research → Draft] → Draft (Gate-2) → Generate. Panel **Progress stepper** selalu terlihat di samping |
| **Preview** | Artikel final ter-render + panel QC + tombol salin/unduh + meta |

### 11.1 Desain indikator progres
- **Stepper vertikal** 4 simpul: Strategi · Riset · Penulisan · Editing (Generate).
- Tiap simpul: ikon status + judul + **baris sub-langkah live** (di-stream).
- Dua **gate** tampil sebagai simpul khusus "Menunggu Anda" berwarna mencolok dengan tombol aksi (Setujui / Generate).
- Saat error: simpul merah + pesan + tombol *Coba lagi*.

---

## 12. Kebutuhan Non-Fungsional

| ID | Kebutuhan |
|---|---|
| NFR-1 | **Performa**: streaming progres mulai < 2 dtk setelah tahap dimulai; UI tidak nge-freeze saat agent berjalan (proses async di server). |
| NFR-2 | **Keamanan file**: operasi baca/tulis agent dibatasi ke folder client (cegah path traversal ke luar `CLIENTS_ROOT`). |
| NFR-3 | **Rahasia**: `ANTHROPIC_API_KEY` & kunci lain hanya di server (`.env`), tidak pernah ke browser. |
| NFR-4 | **Ketahanan**: kegagalan satu tahap tidak merusak artefak tahap sebelumnya; bisa retry tahap itu saja. |
| NFR-5 | **Auditabilitas**: semua output tetap berupa file `.md`/`.json` yang bisa dibuka tanpa aplikasi (kompatibel CLI lama). |
| NFR-6 | **Biaya terkontrol**: model tier sesuai frontmatter agent; tampilkan perkiraan token/biaya bila memungkinkan (opsional v1). |
| NFR-7 | **Platform**: berjalan di Windows (lingkungan saat ini); PowerShell untuk pandoc tetap kompatibel. |

---

## 13. Integrasi Eksternal

| Integrasi | Status v1 | Catatan |
|---|---|---|
| **Anthropic Claude (Agent SDK)** | Wajib | Butuh `ANTHROPIC_API_KEY` (atau auth langganan bila SDK mendukung). |
| **WebSearch / WebFetch** | Wajib | Dipakai strategist & researcher (riset live SERP/sumber). |
| **Pandoc (md→docx)** | Opsional (FR-O5) | Sudah tersedia portable di `seo-soltius/tools/pandoc/`. |
| **Ahrefs MCP / GSC** | Tidak dipakai v1 | Strategist degrade graceful (sudah didukung di prompt-nya). |
| **FLUX / OpenAI image** | Tidak dipakai v1 | Placeholder gambar saja. |

---

## 14. Metrik Keberhasilan

- **Time-to-draft**: waktu dari input → draft siap revisi (target wajar, mis. < 8 menit).
- **Tingkat penyelesaian**: % artikel yang selesai sampai preview tanpa harus turun ke CLI.
- **Kepatuhan kualitas**: % final dengan editor `recommendation: approve`.
- **Pemakaian gate**: % artikel yang outline/draft-nya benar-benar disunting (bukti human-in-the-loop berguna).
- **Onboarding client**: waktu membuat client baru + isi knowledge base dari UI.

---

## 15. Roadmap / Fase

| Fase | Lingkup |
|---|---|
| **v1 (MVP)** | 4 agent inti · 2 gate revisi · progress indicator · folder-per-client + UI upload · preview + unduh `.md` |
| **v1.1** | Unduh `.docx` (pandoc) · beberapa opsi angle di Gate-1 · estimasi biaya/token |
| **v2** | Tambah agent **image-planner** + **quality-validator** (loop revise) + **history-curator** (dedup & commit) · export full |
| **v2.1** | **Batch bulanan** (jalankan N artikel paralel dari `keywords.md`) dengan dashboard progres batch |
| **v3** | Versi EN · integrasi Ahrefs/GSC · multi-user + auth/role · (opsional) migrasi ke DB hybrid · publish ke CMS |

---

## 16. Risiko & Mitigasi

| Risiko | Dampak | Mitigasi |
|---|---|---|
| Detail API Agent SDK berbeda dari asumsi | Implementasi runner berubah | Verifikasi SDK di awal sprint; runner di-abstraksi (1 modul `agent-runner`) |
| Agent menulis ke luar folder client | Korupsi data client lain | Sandbox path + validasi `cwd`; allowlist tools |
| Tahap agent lama/ mahal (token) | UX lambat, biaya naik | Streaming progres; cache riset strategist; model tiering |
| Konflik dengan run CLI lama di folder yang sama | Artefak tertimpa | Konvensi nama + `run.json` sebagai penanda kepemilikan web app |
| Pengguna mengedit outline jadi tidak konsisten dgn aturan | Kualitas turun | Panel aturan + validasi ringan + editor tetap mengoreksi di tahap akhir |

---

## 17. Pertanyaan Terbuka (untuk dikonfirmasi)

1. **Lokasi & nama aplikasi**: setuju app dibuat di subfolder `article-studio/` di dalam `artikel-claude`, dengan `CLIENTS_ROOT` = `artikel-claude`? Nama produk final?
2. **Autentikasi v1**: cukup tanpa login (jalan lokal/internal), atau perlu password sederhana?
3. **Input awal**: cukup `keyword + landing_page` (+ opsional), atau Anda ingin field lain (mis. target audiens spesifik per artikel)?
4. **Gate-1 multi-angle**: cukup 1 outline yang bisa diedit, atau Anda mau strategist menyodorkan 2–3 opsi angle untuk dipilih?
5. **Gate revisi dossier**: di v1 dossier ditampilkan read-only. Apakah Anda juga ingin bisa mengedit fakta/sumber sebelum writer jalan? (akan jadi gate ke-3 — default: tidak, demi kesederhanaan)
6. **API key**: Anda sediakan `ANTHROPIC_API_KEY` (pay-per-use) atau memakai auth langganan Claude? (memengaruhi cara setup SDK)
7. **`.docx` di v1 atau v1.1?**

---

*Akhir PRD v0.1. Mohon review; setelah disetujui (atau direvisi), saya lanjut menyiapkan struktur proyek `article-studio/` dan membangun v1.*
