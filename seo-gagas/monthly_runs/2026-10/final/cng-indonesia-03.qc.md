---
brief_id: "cng-indonesia-03"
editor_run_date: "2026-09-28"
recommendation: "approve"
overall_score: 9
ai_score: 0.04
plagiarism_score: 0.05
---

# Editor QC Report — CNG vs Batubara & Cangkang Sawit untuk Boiler Industri

## Recommendation
**approve**

Artikel ini memenuhi maksud brief secara tepat: comparison explainer netral/edukatif yang menempatkan CNG (gas) berhadapan dengan bahan bakar PADAT (batubara, cangkang sawit) untuk boiler industri — sumbu perbandingan yang belum ada di klaster CNG Indonesia. Nada edukatif, bukan pitch penjualan; setiap angka emisi/biaya diatribusikan dengan asumsi eksplisit dan di-hedge sesuai dossier (EIA CO2, HGBT hanya 7 sektor via pipa, biaya per ton uap "estimasi umum bukan data resmi", klaim MLBI 90% dilabeli klaim korporat). Framing PGN Gagas benar (distributor/penyalur CNG beyond-pipeline, bukan produsen) dengan mention dalam batas ketat ≤2 (satu aside Gaslink + closing). Anti-AI bersih (ai=0.04), tidak ada superlatif, tidak ada klaim "50% lebih rendah" yang tak tersumber. Ditemukan SATU kesalahan faktual (inversi basis persentase CO2 di FAQ) yang sudah saya perbaiki in-place. Sisa flag bersifat minor dan tidak menghalangi commit.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | ai=0.04; nol AI-opener, nol "Selain itu", nol em-dash body; ritme paragraf & kalimat variatif |
| Factual & energi-gas / CNG accuracy | 9 | Semua angka cocok dossier; 1 inversi persentase di FAQ diperbaiki |
| On-page SEO compliance | 9 | Meta title 45c, meta desc 149c, slug 46c, semua terpenuhi |
| GEO extractability (§2a) | 9 | Jawaban 40–60 kata di tiap H2; satu poin quotable/paragraf; FAQ FAQPage-ready |
| PGN Gagas framing discipline | 9 | Distributor/penyalur, ≤2 mention, tanpa superlatif, closing positioning line |
| Internal linking | 10 | 1 hub (lead) + 2 cousin (inline, deskriptif); tanpa BACA JUGA |
| FAQ quality | 8 | 5 Q&A (di batas bawah 5–7); tiap jawaban 40–80 kata, self-contained |
| Originality (plagiarism + AI-detector) | 9 | ai=0.04; plagiarisme heuristik-only (no WebSearch): komposisi orisinal, tanpa lift verbatim |

## What I fixed (changelog)
- **[Faktual — penting]** FAQ "Apakah gas bumi lebih bersih daripada batubara?": draft menulis batubara "sekitar 40–46% lebih tinggi" dari gas. Ini inversi basis persentase yang keliru — angka 40–46% pada dossier adalah "gas ~40–46% LEBIH RENDAH dari batubara" (basis = batubara). Menyatakan "batubara 40–46% lebih tinggi" (basis = gas) secara matematis berbeda (sebenarnya ~76–86% lebih tinggi). Diperbaiki menjadi: "artinya gas sekitar 40–46% lebih rendah karbonnya per satuan energi" — konsisten dengan frasa yang sudah benar di body H2 #3.
- **[Voice/keterbacaan]** Kalimat penutup lead diperhalus: "Ini juga potret bagian dari perkembangan [CNG di Indonesia]…" (frasa janggal) → "Topik ini juga menyentuh peran [CNG di Indonesia] sebagai energi transisi di sektor industri." Anchor hub jadi lebih natural.
- **[Entity/LSI]** Menambahkan istilah entitas "*fuel switching* (peralihan bahan bakar)" secara natural di H2 #4 (sebelumnya "fuel switching" hanya ada di frontmatter, tidak di body) — memenuhi entity list brief + aturan gloss istilah §3.
- **[Frontmatter]** `word_count` disesuaikan ke 1487 (hitungan tool quality-check, otoritatif untuk pipeline; sebelumnya 1431 di draft).

## What I flagged (open issues)
- ⚠️ **Plagiarism scan degraded (heuristik-only, no WebSearch)** — per instruksi run ini WebSearch dinonaktifkan. 8 passage kandidat sudah dibaca manual: semuanya komposisi orisinal yang membungkus data point tersumber (EIA 52,91 kg CO2/MMBtu; nilai kalor; ambang sulfur 0,44%; excess air 15–40%). Tidak ada lift verbatim prosa non-Gagas. *Rekomendasi*: bila ingin kepastian penuh, jalankan WebSearch atas kandidat saat kuota tersedia; risiko dinilai rendah.
- ⚠️ **Burstiness CV 0.386** — di atas ambang tell editor (≥0.30) sehingga LULUS, tetapi di bawah target internal script (0.45), memicu 1 flag severity `low`. Skor AI keseluruhan 0.04 (sangat aman). *Rekomendasi*: tidak perlu tindakan; opsional tambah 1 paragraf pendek 1-kalimat bila ingin menaikkan varians.
- ⚠️ **FAQ = 5 (batas bawah)** — memenuhi 5–7/5–8, tetapi di floor. Dua pertanyaan brief ("biaya tersembunyi", "kelebihan boiler gas") sudah terjawab di body (H2 #2 gunung es & H2 #4), jadi tidak diulang agar tidak redundan/padding. *Rekomendasi*: biarkan; menambah malah berisiko duplikatif.
- ⚠️ **`dateModified` / freshness** — tidak ada field khusus di frontmatter (template §7 tidak menyediakannya); `publish_month: 2026-10` menandai kesegaran. *Rekomendasi*: CMS mengisi `dateModified` saat publish.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — grep 0
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — grep 0 (tidak ada sama sekali)
- [x] No "Penting untuk dicatat / dipahami bahwa" — grep 0
- [x] "Dengan demikian" not overused — grep 0
- [x] Em-dash count ≤2 — body 0 (em-dash hanya di frontmatter citation context, bukan body)
- [x] Varied paragraph lengths (bukan semua ~4 kalimat) — CV 0.386; mix 1–6 kalimat
- [x] Not every H2 → 3-bullet list — H2 #2 (bullet 5), #4 (numbered 4), #3 (tabel), #1/#5 prosa
- [x] No generic claims without numbers — kaya angka (≥12 data point)
- [x] No stacked hype adjectives — nihil (canggih/powerful/terdepan/seamless)
- [x] No service-dump paragraph — satu anchor Gaslink saja

### B. Factual & energi-gas / CNG spot-check
| Claim | Source check | Verdict |
|---|---|---|
| Gas 52,91 vs batubara 93,24 (bituminus)–98,27 (lignit) kg CO2/MMBtu | dossier ✓ (EIA, vintage 18 Sep 2024) | pass |
| Gas ~40–46% lebih RENDAH karbon vs batubara (bukan "50%") | dossier ✓ (turunan EIA); body benar; FAQ diperbaiki dari inversi | pass (setelah fix) |
| Cangkang sawit ~4.000–5.000 kkal/kg (hingga ±5.190); gas ~8.750 kkal/m³ (950–1.150 BTU/SCF) | dossier ✓ (ETD Unsyiah/Neliti + jurnal UNISTEK, dilabeli indikatif) | pass |
| HGBT USD6,5–7/MMBTU, Kepmen ESDM 76.K/2025, 7 sektor via pipa, ≠ CNG beyond-pipeline | dossier ✓ + hedge dihormati | pass |
| MLBI beralih gas→biomassa, Sampangagung Mojokerto 2018, 80% sekam+20% kayu, klaim 90% (~5.000 t CO2) | dossier ✓; dilabeli "klaim korporat, bukan audit independen" | pass |
| Tambahan diperiksa: excess air 3–15% vs 15–40%; sulfur <1% & ambang 0,44%; Permen LH 7/2007 (tanpa mg/Nm³); biaya per ton uap dilabeli estimasi | dossier ✓; angka mg/Nm³ TIDAK dikutip (hormati flag) | pass |

Catatan: draft menghindari semua trap dossier — tidak mengutip harga cangkang sawit tunggal, tidak memakai klaim "50%", tidak mengutip mg/Nm³ Permen LH 7/2007, tidak menautkan situs vendor boiler, tidak menyamakan HGBT dengan harga Gaslink.

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — 45 chars; "CNG" di posisi 1
- [x] Meta description 140–160 — 149 chars
- [x] Slug ≤60, kebab-case, keyword — `cng-vs-batubara-cangkang-sawit-boiler-industri` (46)
- [x] H1 contains keyword — "CNG vs Batubara & Cangkang Sawit untuk Boiler Industri"
- [x] H2 count 4–5 — 5 H2 konten (+ FAQ + Kesimpulan)
- [x] ≥1 question-format H2 (#2, #4, #5); ≥1 honest/counter-conventional (#5 "Kapan Bahan Bakar Padat Masih Menang?")
- [x] Keyword in first 100 words — "CNG (*Compressed Natural Gas*)" + anchor "CNG di Indonesia"
- [x] Definition snippet near top (40–60 words) — blockquote "Ringkasnya" ~48 kata
- [x] ≥8 LSI terms — counted 12: bahan bakar boiler, CNG vs batubara, cangkang sawit, biomassa, fuel switching, nilai kalor, biaya per ton uap, emisi CO2, excess air, penanganan abu, kadar sulfur/SOx, retrofit
- [x] 3 internal links (1 hub + 2 cousins) — perusahaan-cng-indonesia (lead), gaslink (H2#4), perusahaan-lng-indonesia (H2#3)
- [x] ≥1 external authoritative citation — 3 (EIA, ESDM/HBA, Kemenperin); tanpa link vendor/kompetitor
- [x] FAQ 5–7 Q&As — 5 (batas bawah, acceptable)
- [x] 2 image placeholders (up to 3) — 3 dengan konsep kaya + alt Bahasa Indonesia
- [x] ≥1 list + ≥1 table — bullet (H2#2), numbered (H2#4), tabel (H2#3)
- [x] Word count 1.200–1.600 — 1487 (tool)

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Jawaban langsung 40–60 kata tepat setelah tiap H2 utama (bukan hanya definisi puncak) — diverifikasi di kelima H2
- [x] Tiap paragraf body membuat satu poin yang independen-quotable & verifiable
- [x] FAQ parseable untuk FAQPage schema; kesegaran via `publish_month` (dateModified = tugas CMS)

### D. PGN Gagas framing discipline (product_matrix.md + style_guide §11)
- [x] PGN Gagas dibingkai sebagai penyedia/distributor gas-energi (menghadirkan/menyalurkan CNG beyond-pipeline), BUKAN produsen
- [x] Mention dalam batas ketat dossier ≤2 — actual: 1 aside (Gaslink, H2#4) + 1 closing package (positioning PGN Gagas + CTA gagas.co.id). FAQ konversi sengaja TIDAK menamai Gaslink ("moda CNG beyond-pipeline") agar tidak double dengan aside (sesuai instruksi dossier "H2#4 ATAU FAQ, jangan dua-duanya")
- [x] Tanpa superlatif ("terbaik/nomor satu/paling hemat") — grep 0
- [x] Nama produk/spec cocok product_matrix.md/dossier (Gaslink = CNG industri/komersial via GTM; beyond-pipeline)
- [x] Closing memakai positioning line company_profile.md (anak usaha PGN/Subholding Gas Pertamina, menghadirkan gas bumi ke lokasi tanpa pipa)
- [x] Soft website CTA sebagai baris FINAL setelah Kesimpulan (undangan kunjungi gagas.co.id; konsultatif, bukan "beli sekarang")
- [x] Hub link sebagai anchor inline natural di lead ("CNG di Indonesia"); bukan callout BACA JUGA

### E. Anti-cannibalization spot check
- Closest prior articles (klaster CNG Indonesia): `manfaat-cng-untuk-industri-dan-lingkungan` (cng-03, Jul — manfaat CNG umum tanpa lawan tanding padat); `bio-cng-indonesia-terbarukan-limbah-sawit` (Sep — produksi biometana dari POME, entitas berbeda); lintas-klaster `gaslink-vs-lpg-vs-solar` (gas vs bahan bakar CAIR) & `cng-vs-lng-vs-lpg` (gas vs gas).
- Subtopic overlap (Jaccard estimate): ~0.18 (brief). Subtopik inti artikel ini — CNG vs bahan bakar PADAT, total biaya per ton uap, penanganan abu, nilai kalor cangkang sawit, honest "kapan padat menang" — tidak ada di artikel manapun.
- Verdict: **distinct angle confirmed** (sumbu gas vs padat belum pernah ada di klaster; via index.json + by_keyword, tanpa web)

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran; `cng-indonesia-03.id.quality-input.json` ditulis
- [x] AI-detector score < 0.30 — actual: **0.04** (verdict pass; 1 flag `low` paragraph-low-variance)
- [x] Paragraph burstiness CV ≥ 0.30 — actual: **0.386** (di atas ambang tell; di bawah target internal 0.45 → flag low, tidak blocking)
- [~] Plagiarism: **heuristik-only (no WebSearch)** — WebSearch dinonaktifkan untuk run ini. 8 passage kandidat dibaca manual: semua komposisi orisinal membungkus data point tersumber (EIA/nilai kalor/sulfur/excess air); tidak ada lift verbatim ≥20 kata dari halaman non-Gagas; definisi umum & data point dikecualikan. plagiarism_score heuristik: **0.05** (risiko rendah).
