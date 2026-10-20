---
brief_id: "ai-supply-chain-c01"
validator_run_date: "2026-07-06"
verdict: "pass"
ai_score: 0.04
plagiarism_score: 0.00
revision_loop: 0
batch: "conditional-2026-07 — style_addendum.md §7 overrides applied (word band 800–1000, FAQ 2–3, internal link 2, zero image placeholder by design)"
---

# Quality Validator Report — AI dalam Supply Chain: Use Case dan Manfaatnya

## Verdict: **pass**

Artikel lolos kedua gerbang. Detektor AI heuristik memberi skor 0.04/1.0 (jauh di bawah ambang revise 0.30) dengan hanya satu flag low-severity — variansi panjang paragraf (CV 0.395) sedikit di bawah target 0.45 tetapi jelas di atas lantai keras 0.30, dan variansi kalimat (0.508) serta konsentrasi kosakata (0.297) sehat. Delapan pasase paling distingtif dicek via WebSearch berkutip: nol verbatim hit di situs non-Soltius; skor plagiarisme 0.00. Editor merekomendasikan approve; tidak ada temuan yang membalikkan rekomendasi itu. Kurator TIDAK dijalankan sesuai instruksi batch — artikel berhenti di `final/` untuk review user.

## Editor verdict sanity-check (Step 1)
- `ai-supply-chain-c01.qc.md` → `recommendation: approve` (overall_score 9). Tidak ada short-circuit; lanjut validasi penuh.

## AI Detector (heuristic v2.0 via tools/quality-check.ps1)
- Score: **0.04** / 1.0 (thresholds: revise ≥0.30, reject ≥0.50) → **pass**
- Paragraph burstiness (CV): **0.395** (target ≥0.45; hard floor 0.30 — di atas floor, aman)
- Sentence burstiness: **0.508** (baik — campuran kalimat pendek/sedang terasa manusiawi)
- Top-30 vocab share: **0.297** (tidak ada konsentrasi kosakata ala mesin)
- Flags (1):
  - [low] paragraph-low-variance: "Paragraph word-count CV=0.395 (target >=0.45)" — konsekuensi wajar dari format batch 800–1000 kata yang padat (blok use case bold + blok manfaat pendek berukuran mirip). Bukan pola AI spesifik; tidak menghalangi pass.
- Verifikasi manual pendukung: grep 0 hit untuk seluruh frasa terlarang §5 (Di era digital / Seiring perkembangan / Tidak dapat dipungkiri / Penting untuk dicatat / Dengan demikian / Selain itu / canggih / seamless / terdepan) dan **0 em-dash** di seluruh file. Honest hedging hadir ("AI tidak memperbaiki data yang berantakan"; "spreadsheet yang disiplin bisa jadi masih memadai"). EYD terjaga (antarperusahaan/antardivisi digabung benar, desimal koma "14,29%", istilah asing dimiringkan pada sebutan pertama). Nitpick non-blocking: "pasca go-live" idealnya "pasca-go-live" (pasca- prefiks terikat); tidak mengubah verdict.

## Plagiarism (web lookup of 8 distinctive passages — quoted WebSearch)
- 8 kandidat pasase dicek (query berkutip; sintaks markdown di-strip agar query valid):
- ✅ Passage 1: "Gartner memprediksi 70% organisasi besar mengadopsi peramalan permintaan berbasis AI pada 2030..." — clean; frasa Indonesia tidak ditemukan verbatim di mana pun. Fakta = sitasi Gartner yang memang dirujuk (intentional).
- ✅ Passage 2: "sistem ORION milik UPS diperkirakan menghemat sekitar 100 juta mil perjalanan dan 10 juta galon..." — clean; tidak ada match verbatim (hasil pencarian hanya topikal: NASA Orion, UPS listrik).
- ✅ Passage 3: "Survei Gartner (Februari 2026) terhadap 509 pemimpin supply chain menunjukkan 55%..." — clean; angka survei muncul di sumber lain sebagai fakta, frasa artikel tidak ditemukan verbatim.
- ✅ Passage 4: "Pastikan riwayat penjualan dan pengiriman minimal 2–3 tahun, master data produk dan lokasi rapi..." — clean; nol match verbatim.
- ✅ Passage 5: "McKinsey ... memperbaiki biaya logistik 15%, tingkat persediaan 35%, dan service level 65% dibanding pesaing..." — clean; angka berasal dari sumber McKinsey yang disitasi inline (intentional citation), parafrase Indonesia orisinal.
- ✅ Passage 6 (lead): "Forecast penjualan meleset, biaya kirim terus naik, dan disrupsi pemasok baru terlihat setelah barang terlambat" — clean; nol match verbatim.
- ✅ Passage 7: "biaya logistik nasional tercatat 14,29% dari PDB pada 2022 menurut perhitungan Bappenas dan BPS" — clean; statistik resmi yang diberitakan luas (Fortune IDN, Akurat, Kompas) tetapi kalimat pembingkai artikel ("Ruang perbaikan di dalam negeri masih lebar: ...") orisinal — fakta umum bersitasi, bukan plagiarisme (aturan ignore untuk statistik standar).
- ✅ Passage 8: "keduanya berjalan pada satu platform cloud, SAP Integrated Business Planning" — clean; hit teratas = blog soltius.co.id (self-reference, di-ignore per aturan); tidak ada verbatim match non-Soltius.
- Exact match non-Soltius: **0** × 0.05 = 0.00 · Partial near-match: **0** × 0.02 = 0.00
- Aggregate score: **0.00** → pass (< 0.10; tidak ada verbatim hit ≥20 kata di situs non-Soltius)

## Batch-override checks (style_addendum.md §7 — recorded as compliant/N/A, NOT failures)
| Check | Default script/agent rule | Batch override | Result |
|---|---|---|---|
| Word count | 1.500–1.800 | Band **800–1000** | **COMPLIANT** — editor melaporkan 979 (metodologi body H1–CTA, URL/markup di-strip). Angka mentah script 1006 memakai tokenisasi kasar (URL & markup ikut terhitung) — informasional saja, bukan pelanggaran band. |
| FAQ | 5–8 Q&A | **2–3** Q&A | **COMPLIANT** — 3 Q&A, jawaban 40/37/39 kata, tiap jawaban memuat 1 fakta/angka. |
| Internal links | 3 | **2** (1 hub + 1 cousin) | **COMPLIANT** — tepat 2 (hub `apa-itu-supply-chain-management` + cousin SAP IBP S&OP). |
| Image placeholder / images.json | `{IMAGE_NN}` + image brief wajib | **Zero placeholder by design; stage image-planner dilewati** | **N/A / COMPLIANT BY DESIGN** — 0 `{IMAGE_NN}` di final, tidak ada `images.json`; cek image dilewati sesuai override. |

Semua cek lain berlaku penuh dan lolos: anti-AI §5 (0 pola, 0 em-dash), EYD, integritas struktur (frontmatter lengkap dengan meta block; H1; lead 1 paragraf; snippet "Ringkasnya:" blockquote tunggal — definisi tidak diulang di body; 3 body H2 dengan 2 question-format; tabel + list bold + list bernomor; FAQ 3 H3; ## Kesimpulan dengan positioning line; soft CTA soltius.co.id baris paling akhir), framing Soltius (2 mention, implementer bukan pembuat), sitasi eksternal 2 inline (Gartner, McKinsey) + 4 atribusi tanpa link.

## Revision instructions
Tidak ada — verdict pass.

## Loop status
Revision loop **0** (first pass). Tidak ada loop-back writer.

## Pipeline note
Sesuai instruksi batch conditional 2026-07: kurator TIDAK dijalankan dan TIDAK ada commit ke `articles_history/`. Artikel + laporan ini menunggu review user di `conditional/2026-07/final/`.

## The shipping question
Apakah reviewer HCU/SpamBrain akan menandai ini sebagai scaled-AI content? Tidak — skor 0.04, ritme kalimat manusiawi, hedging jujur, angka bersumber. Apakah Originality.ai kemungkinan memberi >30% probabilitas AI? Tidak — tidak ada pola statistik kuat (satu-satunya flag adalah variansi paragraf low-severity di atas lantai keras). Apakah frasa 20 kata dari paragraf mana pun muncul verbatim di tempat lain? Tidak — 8/8 pasase bersih. → **pass**
