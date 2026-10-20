---
brief_id: "lean-manufacturing-c01"
validator_run_date: "2026-09-01"
verdict: "pass"
ai_score: 0.04
plagiarism_score: 0.00
revision_loop: 0
batch: "conditional-2026-09 (style_addendum.md §7 overrides applied — band 800–1000 via cleaned-prose, FAQ 2–3, internal links 2, NO image placeholders; all other checks full)"
---

# Quality Validator Report — Lean Manufacturing: Prinsip, Manfaat, dan Penerapannya

## Verdict: **pass**

Artikel lolos kedua gerbang QC otomatis. AI-detector heuristik memberi skor **0.04** (jauh di bawah revise 0.30 / reject 0.50) dengan satu flag low-severity saja (paragraph CV 0.391, di atas ambang tell-kuat 0.30). Pengecekan plagiarisme lewat WebSearch terkuotasi atas 6 kalimat prosa paling distinctive tidak menemukan satu pun kecocokan verbatim di web non-Soltius — semua hasil hanya bertema sama, bukan lifting frasa. Dua sitasi eksternal (Lean Enterprise Institute soal *overproduction* & SAP Digital Manufacturing) diverifikasi ulang ke sumber otoritatifnya dan **cocok**. EYD, integritas struktur, framing Soltius, dan repetisi-definisi semuanya bersih. Override batch (word band 800–1000, FAQ 2–3, internal link 2, tanpa image) direkam sesuai addendum §7 dan tidak dijadikan alasan gagal. Aman diteruskan ke curator (menunggu review user — batch berhenti di sini per instruksi).

## AI Detector (heuristic v2.0)
- Score: **0.04** / 1.0 (thresholds: revise ≥0.30, reject ≥0.50) → **pass**
- Paragraph burstiness (CV): **0.391** (target ≥0.45; ambang tell-kuat <0.30 — TIDAK terpicu)
- Sentence burstiness (CV): **1.106** (variasi tinggi, sangat human-like)
- Top-30 vocab share: **0.321** (di bawah ambang 0.35)
- Flags (1):
  - [low] paragraph-low-variance: Paragraph word-count CV=0.391 (target ≥0.45)
- Catatan: em-dash = 0; tidak ada "Selain itu" beruntun, "penting untuk dicatat", filler era-digital, atau "dengan demikian" overuse. Lead membuka pada pain konkret manajer pabrik, bukan klise. Ritme paragraf/kalimat bervariasi. Flag CV 0.391 bersifat low dan berada di atas ambang tell-kuat (0.30) — bukan pemblokir sesuai failure-mode agent ("approving when CV < 0.30").

## Plagiarism (web lookup of distinctive passages)
Script mengekstrak 8 kandidat; 6 kalimat prosa paling distinctive dicek via WebSearch terkuotasi. 2 sisanya diabaikan sesuai aturan Step 3 (baris kredensial Soltius = self-reference; fragmen heading yang terglue script bukan prosa).

- ✅ "Kelima prinsip bukan daftar acak, melainkan urutan berpikir yang saling membangun." — **clean** (hanya hasil bertema pembelajaran/7 Habits; tanpa overlap frasa)
- ✅ "Manajer pabrik yang ingin menekan biaya biasanya menyasar yang paling terlihat…" (lead) — **clean** (hasil hanya artikel biaya-produksi umum)
- ✅ "Produksi dipicu permintaan nyata (*just-in-time*)… *work-in-process* tidak menggunung." — **clean** (hasil hanya artikel WIP/JIT umum)
- ✅ "Womack dan Jones merumuskannya dalam buku *Lean Thinking* (1996)… Taiichi Ohno sejak era 1950-an." — **clean** (fakta terkorroborasi LEI/Springer; frasa asli, bukan salinan)
- ✅ "Menghilangkannya bukan proyek satu kali, melainkan pekerjaan *kaizen* harian…" — **clean** (hasil hanya artikel kaizen umum)
- ✅ "…menghubungkan lantai produksi ke ERP sehingga tumpukan WIP, waktu tunggu, dan cacat tampak *near-real-time*…" — **clean** (hasil hanya artikel MES/ERP umum)
- Aggregate plagiarism score: **0.00** (0 exact match, 0 partial near-match pada situs non-Soltius). Ambang revise ≥0.10 tidak didekati.

## Fact / citation re-verification (override: re-verify cited claims & math)
| Claim | Source check | Verdict |
|---|---|---|
| *Overproduction* = bentuk pemborosan terburuk, akar yang memicu waste lain (atribusi LEI) | lean.org/lexicon-terms/seven-wastes + /overproduction: "most grievous form of waste… generates and hides other wastes… contributes to the other six" ✓ | pass |
| SAP Digital Manufacturing = lapisan visibilitas & analitik near-real-time, hubungkan lantai produksi ke ERP | sap.com/products/scm/digital-manufacturing: "connects the shop floor with the top floor… visibility across… analytics… real-time" ✓ | pass |
| 5 prinsip (Value→Value Stream→Flow→Pull→Perfection), Womack & Jones, *Lean Thinking* 1996; TPS/Ohno 1950-an; "lean" via MIT + *The Machine That Changed the World* 1990 | Terkorroborasi LEI "A Brief History of Lean" + Springer ✓ | pass |
| 7 waste via akronim **TIMWOOD** (Transport, Inventory, Motion, Waiting, Overproduction, Overprocessing, Defects) — dibingkai "akronim populer", bukan penamaan resmi | Mapping tabel cocok; framing "akronim populer" akurat (Ohno tidak menamai TIMWOOD) ✓ | pass |
| Six Sigma target < 3,4 cacat per sejuta peluang; muda/mura/muri = 3M TPS | Konstanta DPMO baku + 3M TPS baku ✓ | pass |
| Soltius = SAP Platinum Partner via United VARs, sejak 1998, mengimplementasikan/mendampingi (bukan pembuat) | company_profile (dikonfirmasi editor QC) ✓ | pass |
- Tidak ada rumus matematis di artikel ini (OEE hanya disebut sebagai nama metrik tanpa rumus, sesuai boundary anti-kanibalisasi). 3,4/sejuta adalah konstanta definisional, bukan kalkulasi — terverifikasi.

## EYD & structure integrity (full checks apply)
- [x] Frontmatter YAML valid; H1 memuat keyword; `word_count: 933` konsisten dengan konvensi cleaned-prose.
- [x] Definition snippet "Ringkasnya:" (blockquote) hadir sekali; **tidak ada pengulangan definisi** di body/H2/jawaban langsung (H2 #1 = provenance/urutan, info baru).
- [x] 3 body H2 (band 3–4) + FAQ + Kesimpulan; ≥1 question-format (H2 #2 & #3); ≥1 terstruktur (list bernomor 5 prinsip + tabel 7 waste + bullet 5 langkah).
- [x] FAQ = **3** Q&A (band batch 2–3) — override direkam compliant.
- [x] Internal link = **2** (hub `digital-manufaktur-sistem` di lead + cousin `business-intelligence` di H2 #3) — override direkam compliant.
- [x] Sitasi eksternal = **2** (LEI + SAP official), inline hyperlink.
- [x] Soft CTA `soltius.co.id` sebagai baris terakhir.
- [x] EYD: istilah asing di-italic konsisten (*waste*, *kaizen*, *just-in-time*, *near-real-time*, *work-in-process*, *rework*, *kanban*, *value stream mapping*); hifenisasi benar (antar-gudang, bolak-balik); kapitalisasi & tanda baca rapi; tidak ada typo terdeteksi.
- [x] Self-mention Soltius = **2** (positioning line Kesimpulan + CTA); domain soltius.co.id pada 2 internal link tidak dihitung self-mention.

## Batch-2026-09 overrides (recorded per addendum §7, NOT failed)
- Word band **800–1000**: COMPLIANT. Cleaned-prose 933 (editor) di dalam band; hitungan mentah script 976 (whitespace, ikut pipa tabel/URL/markdown) juga di dalam band. Raw count TIDAK dibaca sebagai >1000 fail.
- FAQ **2–3**: COMPLIANT (3).
- Internal link **2**: COMPLIANT (2).
- Image checks: **N/A by design** — 0 `{IMAGE_NN}`, tidak ada `images.json`; validasi image di-skip, tidak di-flag.

## Loop status
Revision loop **0**. Tidak ada revise diperlukan; tidak ada loop-back ke writer. Curator dapat commit begitu user menyetujui (batch conditional berhenti untuk review user per instruksi — validator tidak menjalankan curator maupun commit ke articles_history).
