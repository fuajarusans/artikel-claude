---
brief_id: "manpower-planning-c01"
validator_run_date: "2026-09-01"
verdict: "pass"
ai_score: 0.04
plagiarism_score: 0.00
revision_loop: 0
batch: "conditional-2026-09 (style_addendum.md §7 overrides applied — word band 800–1000 via cleaned-prose count; FAQ 2–3; internal links = 2; NO image placeholders = N/A by design; definisi hanya di snippet; maks 2 self-mention Soltius)"
---

# Quality Validator Report — Apa Itu Manpower Planning dan Cara Menyusunnya

## Verdict: **pass**

Artikel lolos kedua gate dengan margin lebar. **Plagiarisme:** enam passage prosa paling distinctive dicek via WebSearch berkutip — **nol** exact match dan **nol** verbatim hit ≥20 kata di situs non-Soltius; skor agregat **0.00**. **AI-detector:** skor heuristik **0.04** (jauh di bawah ambang revise 0.30), hanya satu flag *low-severity* (`paragraph-low-variance`, CV=0.347 — di atas garis bahaya AI 0.30), burstiness kalimat sehat (0.489), dan **nol** pola klise AI menyala. Semua override addendum §7 dihormati (word band 848 cleaned-prose, FAQ 3, internal link 2, image N/A). Ketiga klaim bersumber diverifikasi ulang independen di luar dossier — Gartner 15% CHRO / 29%, WEF 63% skills-gap, dan kapabilitas pemodelan SAP SuccessFactors — **semuanya cocok**, dengan framing "15% CHRO" (bukan "15% organisasi") yang benar. Editor merekomendasikan approve; validator **concur**. Aman ke curator.

## AI Detector (heuristic v2.0)
- Score: **0.04** / 1.0 (thresholds: revise ≥0.30, reject ≥0.50) → **pass**
- Paragraph burstiness (CV): **0.347** (target ≥0.45; script hanya flag *low*, BUKAN high — di atas garis bahaya AI 0.30)
- Sentence burstiness (CV): **0.489** (sehat, di atas 0.45) — sinyal ritme manusia
- Top-30 vocab share: **0.323** (di bawah ambang flag 0.35; tak ada flag) — densitas entitas topik tunggal
- Flags (1):
  - [low] `paragraph-low-variance`: Paragraph word-count CV=0.347 (target ≥0.45)

### Catatan re-review (non-blocking)
- **`paragraph-low-variance` (CV=0.347) — non-blocking, bukan AI tell.** CV berada di atas garis bahaya 0.30 yang menjadi failure-mode agent (approve dilarang hanya bila CV<0.30). Sedikit di bawah target 0.45 karena dua batasan batch yang disengaja: format padat 800–1000 kata (addendum §1–2) dan aturan GEO "satu paragraf = satu poin quotable" (addendum §5) yang mendorong paragraf berukuran serupa. Bukti non-AI: **burstiness kalimat 0.489** (ritme kalimat manusiawi) + **nol pola klise** (tidak ada rantai "Selain itu", "Penting untuk dicatat", filler era, "Dengan demikian", "Sebagai kesimpulan"; **em-dash = 0**). Pembacaan ulang manual mengonfirmasi ritme paragraf bervariasi 1–5 kalimat.
- Dua tanda `−` (U+2212) di rumus `gap = demand − supply` adalah **minus, bukan em-dash** — script benar tidak menghitungnya sebagai em-dash (em-dash aktual = 0). Sesuai catatan non-blocking editor.

## Plagiarism (web lookup of distinctive passages)
Script mengekstrak 8 kandidat; 2 di antaranya adalah markup tabel markdown (`| Langkah | Fokus | Cara / output |` dan baris `Gap analysis | Selisih...`), bukan prosa — dilewati. Enam passage prosa substantif dicek via WebSearch berkutip:

- ✅ **P1 (lead hook)** "…tahun depan butuh berapa orang, dengan keahlian apa, dan berapa biayanya?" — **clean** (nol match verbatim; konsep tiga pertanyaan umum, frasa milik artikel).
- ✅ **P2 (alur inti)** "Penyusunan bergerak dalam satu alur logis: perkirakan kebutuhan… petakan pasokan… hitung kesenjangan… lalu susun rencana aksi." — **clean** (nol match; hasil pencarian hanya halaman supply-chain/logistik tak relevan).
- ✅ **P3 (Gartner)** "Menurut Gartner, hanya sekitar 15% CHRO melaporkan organisasinya benar-benar menjalankan strategic workforce planning… cuma 29% yang percaya diri…" — **clean** (WebSearch eksplisit: "the exact query phrase wasn't found"; angka bersumber & diatribusi, bukan lifted).
- ✅ **P4 (WEF)** "…63% pemberi kerja menyebut kesenjangan keterampilan sebagai penghalang terbesar transformasi bisnis hingga 2030." — **clean** (angka milik WEF Future of Jobs 2025, kalimat terjemahan milik artikel; tak ada blok verbatim ≥20 kata dari satu sumber).
- ✅ **P5 (horizon)** "…perencanaan operasional biasanya satu tahun, sedangkan perencanaan strategis mencakup 3 sampai 5 tahun." — **clean** (konsep HR standar tersebar di banyak situs, TIDAK verbatim; masuk kategori "phrasing standar" yang diabaikan sesuai aturan skoring).
- ✅ **P6 (praktisi/aside)** "…manpower planning paling sering tersandung bukan oleh metodenya, melainkan oleh data karyawan yang belum rapi…" — **clean** (WebSearch eksplisit: kutipan spesifik tidak ditemukan; suara praktisi original).
- **Definition snippet** ("proses sistematis memperkirakan kebutuhan tenaga kerja…") — overlap konseptual dengan definisi baku manpower planning (inherently high-overlap). Sesuai failure-mode agent, **definisi terkenal TIDAK dihitung sebagai plagiarisme**; tidak ada blok verbatim ≥20 kata dari satu pesaing. Diabaikan.
- **Aggregate plagiarism score: 0.00** (< 0.10, tanpa verbatim hit ≥20 kata di situs non-Soltius) → **pass**.
- Catatan: deskripsi kapabilitas SAP SuccessFactors (headcount/hiring/turnover/usia pensiun/biaya) bersumber dari halaman produk Soltius yang memang dikutip — hit self-reference tidak dihitung plagiarisme (kebijakan agent).

## Re-verifikasi fakta / rumus / kapabilitas (independen, di luar dossier)
Diverifikasi ulang lewat WebSearch batch ini — bukan hanya mengambil klaim editor:
- **Gartner: ~15% CHRO melaporkan organisasinya menjalankan SWP; ~29% CHRO percaya diri** — **CONFIRMED** (Gartner HR Priorities Survey; post resmi Gartner "Only 29% of HR leaders believe they can deliver on workforce planning goals"). Framing "15% **CHRO**" (bukan "15% organisasi") **tepat** — sesuai flag dossier. Tidak dicampur dengan varian McKinsey ~9–12%.
- **WEF Future of Jobs Report 2025: 63% pemberi kerja sebut skills gap penghalang terbesar transformasi 2025–2030** — **CONFIRMED** verbatim dari WEF ("63% of employers identifying [skill gaps] as a major barrier over the 2025-2030 period"). "hingga 2030" akurat.
- **SAP SuccessFactors memodelkan tenaga kerja atas 5 variabel (headcount, data rekrutmen, turnover, usia pensiun, biaya) untuk skenario kini & masa depan** — **CONFIRMED** sebagai kapabilitas (SAPinsider, SAP People Analytics/Workforce Analytics: scenario modeling turnover/headcount/hiring, visualisasi risiko pensiun, analisis biaya). Diframe sebagai **kapabilitas, bukan janji hasil** — tepat. Label "Strategic Workforce Planning" bersumber halaman produk Soltius (aman; nama modul resmi SAP saat ini umumnya "Workforce Planning / People Analytics") — bukan nama fitur karangan.
- **Rumus `gap = demand − supply`** — **benar secara konseptual** (kesenjangan = kebutuhan dikurangi pasokan; kurang → rekrut/latih/outsource, lebih → redeploy). Konsisten SAP Best Practices (demand/supply/gap/cost). Tidak ada perhitungan numerik lain yang perlu diverifikasi.
- **Horizon 1–5 tahun** (operasional ~1 th; strategis 3–5 th) — konvensi HR umum, lintas sumber; diframe "biasanya/umumnya", bukan standar resmi. Aman.
- **Framing Soltius** — "mengimplementasikan/mendampingi HCM SAP", SAP Platinum Partner via United VARs sejak 1998 (Metrodata Group) — konsisten CLAUDE.md/company_profile; **implements-not-builds**; tanpa superlatif; tanpa klaim outcome/angka penghematan karangan.

## EYD & struktur (cek penuh — bukan override)
- **EYD**: bersih. Istilah Inggris di-italik pada pemakaian pertama (*demand, supply, gap, strategic workforce planning, people analytics, headcount, redeploy, retraining*); tanda baca & kapitalisasi konsisten; tidak ada salah eja atau kalimat rumpang. "cuma" (H2 #1) informal tetapi masih wajar untuk tone B2B percakapan — non-blocking.
- **Integritas struktur**: Frontmatter YAML utuh (`word_count: 848` cocok cleaned-prose); H1 memuat keyword; snippet "Ringkasnya:" (blockquote) tepat setelah lead; **3 H2 body** (mengapa penting [question] + tabel 4 langkah [praktis] + bagaimana sistem HR [question]) + `## FAQ` (3 Q&A) + `## Kesimpulan` (≤80 kata) + soft CTA soltius.co.id baris terakhir & terpisah. Urutan sesuai addendum §2. Tabel 4 langkah well-formed (header + 4 baris).
- **Cek repetisi definisi** (addendum §7): definisi manpower planning muncul **sekali** — di snippet. H2 #1 memimpin dengan business case (reaktif→proaktif + angka), bukan mengulang definisi; tidak ada H2 "Apa Itu…" penyata-ulang. **Lolos.**

## Override addendum §7 — dicatat compliant / N/A (tidak difailkan)
- [override→compliant] **Word band 800–1000**: **848** kata via cleaned-prose (`count_words.py`), cocok dengan laporan editor. Skor mentah script (879) **juga** di dalam band — tidak ada isu >1000 di artikel ini; instruksi "jangan baca token mentah >1000 sebagai fail" tidak sampai terpakai karena raw count pun compliant.
- [override→compliant] **FAQ**: 3 Q&A (band 2–3).
- [override→compliant] **Internal link**: tepat 2 — hub `solutions-by-products/reading/success-factors` (H2 #3) + cousin `id/blog/read/6-tugas-pokok-talent-acquisition` (H2 #1). (Sitasi eksternal WEF hyperlink + Gartner atribusi inline = terpisah, bukan internal link.)
- [override→compliant] **Self-mention Soltius**: tepat 2 — positioning line di Kesimpulan + CTA soltius.co.id. Sebutan SAP SuccessFactors di H2 #3 = teaching vendor-neutral.
- [override→N/A] **Image checks**: 0 `{IMAGE_NN}` + tanpa `images.json` = compliant by design; cek image dilewati (tidak di-flag).

## Loop status
Revision loop **0**. Tidak ada loop-back ke writer — verdict **pass** pada pass pertama.

## The shipping question
Apakah review HCU/SpamBrain akan menandai ini sebagai scaled-AI content? **Tidak** — skor 0.04, nol pola klise AI, burstiness kalimat manusiawi (0.489), densitas fakta bernomor bersumber. Apakah Originality.ai akan memberi >30% AI? **Sangat tidak mungkin** pada skor 0.04 dengan satu flag paragraf low-severity yang terjelaskan oleh format padat 900 kata. Apakah frasa 20-kata mana pun muncul verbatim di tempat lain? **Tidak** (6/6 passage prosa clean; definisi baku diabaikan sesuai aturan). Semua "tidak" → **pass**.
