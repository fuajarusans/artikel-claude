---
brief_id: "cng-indonesia-02"
editor_run_date: "2026-06-09"
recommendation: "approve"
overall_score: 9
---

# Editor QC Report — CNG vs LNG vs LPG: Apa Bedanya dan Kapan Pakai yang Mana

## Recommendation
**approve**

Draft yang kuat dan kalibrasinya rapat dengan benchmark `gaslink-01.id.md`: hook konkret (ruang rapat teknis yang memetakan bahan bakar pabrik), definition snippet 40–60 kata yang bersih, dua tabel (perbandingan + keputusan), satu daftar berpoin, FAQ enam butir, Kesimpulan terpisah, plus soft CTA gagas.co.id sebagai baris terakhir. Anti-AI scan lolos bersih (nol em-dash U+2014; semua dash adalah en-dash pada rentang numerik sesuai EYD). Lima klaim fakta prioritas terverifikasi terhadap dossier; klaim HGBT dikonfirmasi langsung ke ESDM (Kepmen No. 76.K/MG.01/MEM.M/2025, 26 Februari 2025, USD 7 / USD 6,5 per MMBTU, 7 sektor). Elemen yang DILINDUNGI — pembalikan nilai kalori per satuan (per massa gas ~52,5 MJ/kg sedikit lebih tinggi; per volume LPG ~2,4×) dengan basis pengukuran dinyatakan — utuh dan konsisten di prosa, tabel, dan FAQ. Framing PGN Gagas benar (distributor CNG + operator LNG Hub, bukan "perusahaan LNG"), 1 self-mention eksplisit di Kesimpulan + CTA situs (≤3). Hanya dua suntingan kecil di tempat (pemecahan kalimat HGBT untuk ekstraktabilitas + penajaman satu kalimat penutup H2 #5); tidak ada masalah yang menuntut rework penulis/strategist. Layak terbit.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Nol opener terlarang, nol em-dash, ritme paragraf bervariasi (1–5 kalimat), nada konsultatif praktisi. |
| Factual & energi-gas / CNG accuracy | 9 | 5/5 klaim prioritas pass; HGBT dikonfirmasi ke ESDM. Nilai kalori dibingkai sebagai kisaran sesuai Flag 1. |
| On-page SEO compliance | 9 | Meta title 44 char (keyword pos 1), meta desc ~145 char, slug 28 char, 5 H2 + FAQ, 3 internal + 2 eksternal otoritatif. |
| GEO extractability (§2a) | 9 | Jawaban langsung 40–60 kata di tiap H2; tabel baris-per-baris; FAQ FAQPage-ready; dateModified ada. |
| PGN Gagas framing discipline | 9 | Distributor CNG + operator LNG Hub; 1 self-mention + CTA; tanpa superlatif; tanpa over-claim LNG. |
| Internal linking | 9 | 3 URL distinct inline (/perusahaan-cng-indonesia/ di lead + /perusahaan-lng-indonesia/ + /gasku/); tanpa BACA JUGA. |
| FAQ quality | 8 | 6 Q&A, 40–80 kata, mandiri, tiap jawaban memuat fakta. Sedikit di bawah target brief 8, tetapi di atas minimum §3 (5–7) — diterima. |
| Image-brief completeness | 9 | 3 entri = 3 placeholder; alt_id ≤125 char; caption/visual_direction/asset_type Bahasa Indonesia; sourcing notes bersih. |

## What I fixed (changelog)
- **H2 #3 (HGBT), prosa kalimat 2** — memecah satu kalimat majemuk ~58 kata menjadi dua agar angka HGBT (USD 7 / USD 6,5 per MMBTU) berdiri sebagai satu kalimat yang dapat dikutip AI; menambahkan penegasan "bukan per m³" untuk memperkuat poin penyetaraan per satuan energi. (ekstraktabilitas GEO; net +7 kata)
- **H2 #5 (Apel vs Jeruk), kalimat penutup** — "Menyamakan keduanya adalah jebakan logika yang sebaiknya dihindari." → "Menyamakan keduanya adalah jebakan logika." (memangkas redundansi; net −3 kata)
- **Frontmatter `word_count`** — 1552 → 1556 (mencerminkan net +4 kata dari dua suntingan di atas; tetap ≤1600 dan length-neutral).
- Menyalin draft yang sudah dipoles ke `final/cng-indonesia-02.id.md`.

## What I flagged (open issues)
- ⚠️ **FAQ berjumlah 6, brief meminta 8** — *recommendation*: tidak memblokir. 6 Q&A memenuhi rentang §3 (5–7) dan setiap jawaban padat-fakta; menambah ke 8 akan menggandakan materi yang sudah dibahas di body (mis. "apa bedanya secara singkat" sudah ada di definition snippet) dan berisiko padding di artikel 1.556 kata. Dua pertanyaan brief yang dilewati ("Apa bedanya CNG/LNG/LPG secara singkat?" dan "Apakah CNG dan LNG berasal dari gas yang sama?" — yang kedua justru SUDAH ada) memang lebih baik tidak diduplikasi. Keputusan editorial: pertahankan 6.
- ⚠️ **Nilai kalori per massa dibingkai "nyaris setara (~50 MJ/kg)" di prosa H2 #5** sementara tabel & FAQ menahan angka presisi "~52,5 vs ~49,6" — *recommendation*: ini DISENGAJA dan benar. Sesuai Flag 1 dossier (variasi antar-sumber), prosa memakai framing kualitatif sementara tabel/FAQ memuat angka tepat dengan label "kisaran referensi". Pembalikan per-satuan (gas sedikit lebih tinggi per massa; LPG jauh lebih tinggi per volume) tetap utuh. Tidak ada tindakan.
- ⚠️ **Angka PLN Batam/Lombok (2016) & rasio energi volumetrik** — *recommendation*: sudah ditangani jujur oleh penulis ("Angka pada arsip itu bisa sudah berubah, jadi perlakukan sebagai contoh konsep"). Sesuai Flag 6. Tidak ada tindakan.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — Grep: nol
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — Grep: nol kemunculan di awal paragraf
- [x] No "Penting untuk dicatat / dipahami bahwa" — Grep: nol
- [x] "Dengan demikian" not overused — Grep: nol
- [x] Em-dash count ≤2 — **nol em-dash (U+2014)**; 8 kemunculan dash adalah en-dash (U+2013) pada rentang numerik/kompon (~200–250 bar, dekat–menengah, propana–butana) sesuai EYD — bukan AI tell
- [x] Varied paragraph lengths — campuran 1–5 kalimat; tidak ada blok simetris
- [x] Not every H2 → 3-bullet list — H2 #1, #2, #4, #5 dibuka prosa; hanya H2 #3 memuat daftar
- [x] No generic claims without numbers — angka spesifik di 10+ tempat (bar, °C, 1/250, 1/600, MJ/kg, MJ/m³, MMBTU, USD, tahun)
- [x] No stacked hype adjectives — tidak ada "canggih/powerful/terdepan/seamless"
- [x] No service-dump paragraph — hanya 1 anchor relevan di Kesimpulan

### B. Factual & energi-gas / CNG spot-check
| Claim | Source check | Verdict |
|---|---|---|
| CNG dikompresi ~200–250 bar, tetap gas, ~1/250 volume | dossier Claim 1 & 5 ✓ (Ditjen Migas ESDM) | pass |
| LNG didinginkan ~-162°C, jadi cair, ~1/600 volume | dossier Claim 3 & 5 ✓ (Ditjen Migas ESDM) | pass |
| Pembalikan nilai kalori: per massa gas ~52,5 MJ/kg > LPG ~49,6; per volume LPG ~93 > gas ~39 MJ/m³ | dossier Claim 8 ✓ (ELGAS, ITGAS); basis satuan dinyatakan | pass |
| HGBT: USD 7/MMBTU (bahan bakar), USD 6,5 (bahan baku), Kepmen 26 Feb 2025, 7 sektor | dossier Claim 10 ✓ + **WebSearch ESDM dikonfirmasi langsung** (Kepmen No. 76.K/MG.01/MEM.M/2025) | pass |
| Metana titik kritis -82,6°C → tidak bisa dicairkan pada suhu kamar | dossier Claim 2 ✓ (Wikipedia LNG, prinsip teknis) | pass |

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — **44 char**, "CNG" pada posisi 1
- [x] Meta description 140–160 — **~145 char**, diawali "CNG vs LNG vs LPG"
- [x] Slug ≤60, kebab-case, keyword — `cng-vs-lng-vs-lpg-apa-bedanya` (**28 char**)
- [x] H1 contains keyword — "CNG vs LNG vs LPG..."
- [x] H2 count 4–5 — **5** (#1 definisi, #2 perbedaan, #3 pertanyaan, #4 keputusan, #5 honest)
- [x] ≥1 question-format H2 (#3 "Mana yang Lebih Hemat...?") ; ≥1 honest/counter-conventional (#5 "Apel dengan Jeruk")
- [x] Keyword in first 100 words — "CNG" di kalimat pertama
- [x] Definition snippet near top (40–60 words) — blockquote line 42, ~58 kata
- [x] ≥8 LSI terms — counted: 12+ (metana/CH4, propana, butana, nilai kalori, MMBTU, Mother Station, regasifikasi, likuifaksi, kriogenik, ISO tank, BBG, SPBG, densitas energi)
- [x] 3 internal links (1 hub + 2 cousins) — /perusahaan-cng-indonesia/ (lead) + /perusahaan-lng-indonesia/ (H2 #4) + /gasku/ (tabel keputusan); 3 URL distinct
- [x] ≥1 external authoritative citation — **2** (migas.esdm "Mengenal Jenis Gas Bumi" + esdm HGBT), keduanya inline
- [x] FAQ 5–7 Q&As — **6** (di atas minimum; di bawah target brief 8 — lihat flag)
- [x] 2 image placeholders (up to 3) — **3** (IMAGE_01/02/03)
- [x] ≥1 list + ≥1 table — 1 daftar berpoin + **2** tabel
- [x] Word count 1,200–1,600 — **1556**

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — verified: #1 (~55w), #2 (~60w lead), #3 (~50w), #4 (~50w), #5 (~52w); semua sebelum elaborasi
- [x] Each body paragraph makes one independently quotable, verifiable point — ya; suntingan HGBT mengisolasi angka jadi satu kalimat kutipan
- [x] FAQ parseable for FAQPage schema; `dateModified` / freshness noted — FAQ H3 standar; `date_modified: 2026-06-09` di meta block

### D. PGN Gagas framing discipline (product_matrix.md + style_guide §11)
- [x] PGN Gagas framed as gas-energy provider/partner — "distributor CNG beyond-pipeline... menyalurkan gas bumi... mengoperasikan LNG Hub"; tidak ada klaim produksi
- [x] ≤3 PGN Gagas self-mentions — **1** "PGN Gagas" eksplisit (Kesimpulan) + 1 CTA situs gagas.co.id = 2; body vendor-neutral
- [x] No unverifiable superlatives — tidak ada "terbaik/terbesar/nomor satu"
- [x] Energi-gas / CNG product names + specs match — Gasku, Gaslink, LNG Hub semua sesuai company_profile/product_matrix; tanpa fabrikasi spesifikasi
- [x] Closing uses a company_profile.md positioning line — "anak usaha PGN... Subholding Gas Pertamina... distributor CNG beyond-pipeline"
- [x] Soft website CTA present as FINAL line — "...kunjungi gagas.co.id dan mulai konsultasinya." (konsultatif, bukan "beli sekarang")
- [x] Hub link present as natural inline anchor — "[CNG di Indonesia]" diwoven ke lead; bukan callout

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: **none yet di cluster CNG** (index.json: hanya gaslink-01/02/03, gasku-01/02/03). Tetangga lintas-cluster: gaslink-02 (comparison).
- Subtopic overlap (Jaccard estimate): **~0.15** vs gaslink-02 — gaslink-02 berpusat pada payback/MMBTU/emisi CO2 produk Gaslink; artikel ini taksonomi tiga jenis gas + kerangka keputusan vendor-neutral, mengikutkan LNG, tidak menjadikan solar fokus.
- Verdict: **distinct angle confirmed**

### F. Image-brief completeness (images.json)
- [x] JSON parses — valid
- [x] One entry per `{IMAGE_NN}` placeholder — 3 entri (IMAGE_01/02/03) = 3 placeholder di body
- [x] Each entry has alt_id (≤125 chars) + caption_id + visual_direction + suggested_asset_type — semua ada, Bahasa Indonesia; alt_id 104–108 char
- [x] Any "real photo/site asset" requirement surfaced — tidak ada; semua aset desain orisinal, sourcing_note menegaskan tanpa foto fasilitas/branding fabrikasi
- (No generated PNGs to check — by design.)
