---
brief_id: "gaslink-03"
editor_run_date: "2026-09-28"
recommendation: "approve"
overall_score: 9
ai_score: 0.04
plagiarism_score: 0.05
---

# Editor QC Report — Gaslink untuk Agroindustri: Pengeringan Kopi, Teh, & Gabah Tanpa Pipa

## Recommendation
**approve**

Draft yang kuat dan sesuai brief: sudut agroindustri/pengeringan hasil bumi benar-benar baru dalam cluster Gaslink, ditulis dengan suara praktisi (hedging jujur, tabel perbandingan, seksi "kapan BELUM sepadan"), tanpa AI tell (0 em-dash, tidak ada opener/transisi klise). Seluruh klaim faktual dan angka tersumber ke dossier dan diberi hedge sesuai flag researcher — klaim hemat 30% diatribusikan sebagai klaim penyedia, suhu teh disajikan sebagai rentang riset, aplikasi agro dibingkai sebagai potensi (tanpa nama pelanggan agro fiktif). Semua item on-page + GEO lolos. Empat perbaikan framing/SEO dan dua penambahan FAQ diterapkan langsung; tidak ada isu yang perlu dikembalikan ke writer/strategist. Skor originalitas bersih (AI 0.04, burstiness CV 0.388). Curator-ready.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | 0 em-dash; tidak ada "Di era/Seiring/Selain itu/Dengan demikian/Penting untuk"; panjang paragraf & kalimat bervariasi; hedging jujur |
| Factual & energi-gas / CNG accuracy | 9 | 5+ klaim dicek vs dossier — semua pass; hedge flag dihormati (30%, suhu teh, BPS 2020, agro=potensi) |
| On-page SEO compliance | 9 | meta title 49, desc 149, slug 35, H1 keyword, 5 H2 konten, keyword di 100 kata awal, def snippet, 8+ LSI, 3 internal + 1 outbound ESDM, FAQ 7, 3 image, list+tabel |
| GEO extractability (§2a) | 9 | Jawaban 40–60 kata di bawah tiap H2; satu poin quotable/paragraf; FAQ FAQPage-ready; date_modified ditambahkan |
| PGN Gagas framing discipline | 9 | Framing penyalur/distributor; 3 self-mention; tanpa superlatif; nama produk cocok product_matrix; positioning line di penutup; soft CTA baris terakhir |
| Internal linking | 9 | Hub (Gaslink) inline di lead + 2 cousin (perusahaan-cng-indonesia, gasku); anchor deskriptif; tanpa "BACA JUGA" |
| FAQ quality | 9 | 7 Q&A, 40–80 kata, sesuai PAA brief; jawaban self-contained |
| Originality (plagiarism + AI-detector) | 9 | AI 0.04 (pass); burstiness CV 0.388 (>0.30); plagiarisme heuristik-only, kandidat = statistik teratribusi + prosa orisinal |

## What I fixed (changelog)
- **Framing hedge (meta description)**: "Gaslink memasok gas bumi (CNG) untuk pengeringan kopi, teh, dan gabah" → "Gaslink **dapat memasok** CNG untuk pengeringan kopi, teh, dan gabah" — menghindari kesan deployment agro yang sudah berjalan (honor flag agro=aplikasi potensial). Panjang 149 char (tetap dalam 140–160).
- **Self-mention discipline**: menurunkan "PGN Gagas" dari 4 → 3. FAQ biaya diubah dari "PGN Gagas menyebut pelanggan..." → "Angka yang beredar, sekitar 30%, adalah **klaim penyedia**..." — atribusi 30% tetap jujur, tanpa em-dash, mention perusahaan turun ke batas ≤3.
- **Outbound authoritative link**: menautkan "Kementerian ESDM (Ditjen Migas, Oktober 2025)" ke https://migas.esdm.go.id/ (sebelumnya hanya atribusi inline tanpa tautan) — memenuhi ≥1 external authoritative link.
- **FAQ diperkaya 5 → 7**: menambah "Bahan bakar apa yang paling bersih untuk pengeringan hasil bumi?" dan "Komoditas apa yang paling cocok dikeringkan dengan gas bumi?" (keduanya dari PAA brief + Q&A dossier terverifikasi, dengan hedge "paling bersih tergantung kondisi pembakaran aktual" dan "kesesuaian ditentukan aplikasi panas + volume, bukan label komoditas").
- **Freshness/GEO**: menambah `date_modified: "2026-09-28"` di frontmatter (§2a freshness).
- **Word count**: memperbarui `word_count` 1364 → 1489 (mencerminkan penambahan FAQ; dalam band 1.200–1.600).

## What I flagged (open issues)
- ⚠️ **Plagiarism scan degraded (heuristik-only, tanpa WebSearch)** — sesuai instruksi run ini. 8 kandidat yang diekstrak seluruhnya berupa (a) statistik publik teratribusi (BPS 53,14 jt ton GKG; 169.788 unit penggilingan survei BPS 2020; kadar air green bean 12,5% SNI 01-2907-2008; kebijakan HGBT & virtual pipeline cluster ESDM) dan (b) kalimat penjelas orisinal artikel. Tidak ada indikasi lift verbatim prosa. *Rekomendasi*: bila akses live tersedia di tahap curator, verifikasi cepat tiga angka statistik itu ke sumber primernya; non-blocking.
- ⚠️ **Beberapa angka bersandar sumber medium-confidence dossier** (suhu firing teh ~100–115°C dari preprint/laporan magang PTPN-Pindad; angka pascapanen dari sumber sekunder). *Sudah dimitigasi in-text*: artikel menyajikannya sebagai "kajian akademik menguji kisaran suhu sekitar 100–115°C" dan "survei BPS 2020", bukan angka mutlak. Tidak perlu tindakan; catat untuk refresh berkala.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers
- [x] No "Selain itu" opening ≥2 consecutive paragraphs (0 occurrences)
- [x] No "Penting untuk dicatat / dipahami bahwa" (0)
- [x] "Dengan demikian" not overused (0)
- [x] Em-dash count ≤2 — actual: 0
- [x] Varied paragraph lengths (1–6 kalimat; CV 0.388)
- [x] Not every H2 → 3-bullet list (tabel di #2/#3, numbered di #4, bullet di #5, prosa di #1)
- [x] No generic claims without numbers (13–14%, 12,5%, 100–115°C, 53,14 jt ton, 169.788, 30%)
- [x] No stacked hype adjectives (canggih/powerful/terdepan) — none
- [x] No service-dump paragraph

### B. Factual & energi-gas / CNG spot-check
| Claim | Source check | Verdict |
|---|---|---|
| Produksi padi 2024 = 53,14 juta ton GKG (BPS) | dossier ✓ (BPS, rilis 3 Feb 2025) | pass |
| Green bean kopi maks ~12,5%, SNI 01-2907-2008 (Puslitkoka) | dossier ✓ (cctcid.com/Puslitkoka) + product_matrix konteks CNG | pass |
| GKG kadar air aman ~13–14% | dossier ✓ (kisaran 13–14%); flag "jangan klaim Kementan halaman spesifik" dihormati ("sejalan dengan pedoman pascapanen padi nasional") | pass |
| Suhu firing teh ~100–115°C | dossier ✓ tapi flag: sajikan sebagai rentang → draft "kajian akademik menguji kisaran ~100–115°C" | pass |
| 169.788 unit penggilingan, ~161.400 kecil (survei BPS 2020) | dossier ✓; flag "label tahun" dihormati ("survei BPS 2020") | pass |
| Hemat "hingga 30%" | dossier flag: atribusikan → draft "klaim penyedia... bukan studi khusus pengeringan agro" | pass |
| HGBT hanya 7 sektor, agro tidak termasuk | dossier ✓ (Kepmen ESDM 76.K/2025 edge case) | pass |
| PGN Gagas = penyalur (bukan produsen) | product_matrix ✓ ("menyalurkan/menghadirkan gas bumi") | pass |

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: 49 / "Gaslink" di posisi 1
- [x] Meta description 140–160 — actual: 149
- [x] Slug ≤60, kebab-case, keyword — actual: gaslink-pengeringan-kopi-teh-gabah (34)
- [x] H1 contains keyword — "Gaslink untuk Agroindustri..."
- [x] H2 count 4–5 — actual: 5 konten (+FAQ +Kesimpulan)
- [x] ≥1 question-format H2 (#1 & #2); ≥1 honest/counter-conventional H2 (#5 "BELUM Sepadan")
- [x] Keyword in first 100 words (lead, tertaut)
- [x] Definition snippet near top (blockquote "Ringkasnya", ~58 kata)
- [x] ≥8 LSI terms — counted: ~14 (rotary/box dryer, GTM, PRS, Mother Station, beyond pipeline, green bean, oksidasi enzimatis, pascapanen, sekam, HGBT, kadar air, firing, CNG)
- [x] 3 internal links (1 hub + 2 cousins) — gaslink/ (lead), perusahaan-cng-indonesia/, gasku/
- [x] ≥1 external authoritative citation — actual: 1 outbound (migas.esdm.go.id) + atribusi inline BPS/Puslitkoka/SNI
- [x] FAQ 5–7 Q&As — actual: 7
- [x] 2 image placeholders (up to 3) — actual: 3 (dengan alt-text)
- [x] ≥1 list + ≥1 table — 1 numbered + 1 bullet + 2 tables
- [x] Word count 1,200–1,600 — actual: ~1.489

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 (verified #1–#5; masing-masing 44–50 kata sebelum elaborasi)
- [x] Each body paragraph makes one independently quotable, verifiable point
- [x] FAQ parseable for FAQPage schema; `date_modified: 2026-09-28` ditambahkan ke meta block

### D. PGN Gagas framing discipline (product_matrix.md + style_guide §11)
- [x] Framed as gas-energy provider/partner ("menyalurkan"/"menghadirkan gas bumi... melalui solusi CNG") — bukan produsen
- [x] ≤3 PGN Gagas self-mentions — actual: 3 (aside H2#4 + klaim biaya H2#3 + positioning penutup)
- [x] No unverifiable superlatives ("terbaik/nomor satu/satu-satunya")
- [x] Product names + specs match product_matrix.md / dossier (Gaslink, GTM, Mother Station/SPBG, PRS, CNG)
- [x] Closing uses a company_profile positioning line (anak usaha PGN / Subholding Gas Pertamina)
- [x] Soft website CTA present as the FINAL line, after Kesimpulan (kunjungi gagas.co.id; konsultatif)
- [x] Hub link = natural inline anchor di lead (bukan "BACA JUGA")

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: `industri-cocok-pakai-gaslink-cara-penerapan` (gaslink-03 lama, sektor manufaktur/HORECA/RS) + `gaslink-konversi-boiler-oven-retrofit`. 12 artikel Gaslink historis dicek via by_keyword/ + index.json.
- Subtopic overlap (Jaccard estimate): ~0.10 (strategist), dikonfirmasi editor — komoditas agro, rotary/box dryer, pengeringan pascapanen, ganti kayu bakar seluruhnya baru; tidak ada artikel historis membahas agroindustri/pengeringan hasil bumi.
- Verdict: **distinct angle confirmed**.

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran; `gaslink-03.id.quality-input.json` written
- [x] AI-detector score < 0.30 — actual: **0.04** (pass; 1 flag low-severity: paragraph-low-variance CV 0.388 vs target internal 0.45 — masih > ambang editor ≥0.30, tidak diperlukan aksi)
- [x] Paragraph burstiness CV ≥ 0.30 — actual: **0.388**
- [~] Plagiarism: **heuristic-only (no WebSearch)** per instruksi run. 8 kandidat = statistik publik teratribusi (BPS/SNI/Puslitkoka/ESDM/HGBT) + kalimat orisinal artikel; tidak ada indikasi lift verbatim ≥20 kata dari sumber non-Gagas. plagiarism_score (heuristik): **0.05**. Tidak memblokir approve.
