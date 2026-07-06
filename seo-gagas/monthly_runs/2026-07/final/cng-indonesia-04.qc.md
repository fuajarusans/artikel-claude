---
brief_id: "cng-indonesia-04"
editor_run_date: "2026-06-09"
recommendation: "approve"
overall_score: 9
---

# Editor QC Report — CNG Beyond Pipeline: Cara Gas Bumi Menjangkau Daerah Tanpa Pipa

## Recommendation
**approve**

Draf ini berkualitas tinggi dan sudah sangat dekat dengan benchmark `gaslink-01`. Substansinya akurat dan vendor-neutral, semua fakta sensitif (contoh PLN, panjang pipa nasional, jarak CNG truk, persentase wilayah tanpa pipa) diframekan persis seperti yang dituntut dossier Flags dan guardrail tugas, dan framing PGN Gagas benar (distributor CNG beyond-pipeline, anak usaha PGN; LNG hanya sebagai cousin link, bukan klaim "perusahaan LNG"). Satu pelanggaran anti-AI nyata ditemukan dan diperbaiki: draf memakai ~10 em-dash dalam prosa tubuh, sementara benchmark `gaslink-01` memakai nol em-dash dalam prosa (hanya di blok IMAGE). Saya menurunkannya ke nol em-dash prosa, merapikan meta description yang sedikit melebihi 160 karakter, dan menyelaraskan placeholder IMAGE_02 dengan guardrail "skematis, bukan peta geografis". Semua perubahan length-neutral pada tubuh artikel (1.559 kata). Tidak ada isu yang butuh penulisan ulang oleh writer/strategist.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Hook konkret, hedging jujur, varian panjang paragraf bagus. Em-dash overuse (satu-satunya tell) sudah diperbaiki ke nol. |
| Factual & energi-gas / CNG accuracy | 10 | 5/5 klaim spot-check lolos vs dossier; semua angka tersumber ESDM/BPH Migas/PLN dengan atribusi tepat. |
| On-page SEO compliance | 9 | Semua item lolos; meta description dirapikan dari ~163 → ~147 karakter. |
| GEO extractability (§2a) | 9 | Jawaban 40–60 kata langsung setelah tiap H2; numbered list rantai 5-langkah = unit ekstraksi kuat. |
| PGN Gagas framing discipline | 10 | 2 mention prosa (atribusi "bukan proyek PGN Gagas" + closing); distributor/penyedia, bukan produsen; tanpa superlatif. |
| Internal linking | 10 | 3 link distinct (hub di lead + 2 cousin inline), anchor deskriptif, tanpa BACA JUGA. |
| FAQ quality | 9 | 5 Q&A, jawaban 40–80 kata, mandiri, tiap jawaban memuat fakta. |
| Image-brief completeness | 9 | JSON valid, 2 entri = 2 placeholder; IMAGE_02 di-guardrail sebagai skematis (bukan peta) dengan benar. |

## What I fixed (changelog)
- **Anti-AI (em-dash):** Menghapus ~10 em-dash dalam prosa tubuh, mengubahnya menjadi koma/titik/titik dua, sehingga kini **nol em-dash dalam prosa publikasi** (satu-satunya em-dash tersisa ada di dalam blok `{IMAGE_01}` yang tidak terbit). Ini menyamakan dengan benchmark `gaslink-01` (juga nol em-dash prosa). Lokasi: lead (l.40), step list "tube trailer"/"daughter station"/"pembangkit" (l.67, 69, 70), kalimat PLN (l.78 — dibiarkan utuh karena bukan em-dash di sana; perubahan pada konektor), tabel "Tidak, beda" (l.89), bullet "Jarak dan volume" (l.100, split jadi dua kalimat), bullet "Kebutuhan lahan" (l.101), bullet "Ketergantungan logistik" (l.102), dan callback Kesimpulan (l.126).
- **On-page (meta description):** Memperketat dari ~163 karakter (melebihi 160) menjadi ~147 karakter dengan menghapus "hingga pengguna" — kini di dalam band 140–160; keyword "CNG beyond pipeline" tetap memimpin.
- **Image-brief alignment (IMAGE_02):** Mengubah teks placeholder body dari "Peta stilisasi kepulauan Indonesia" → "Ilustrasi skematis kepulauan Indonesia (bukan peta geografis presisi)" agar selaras dengan guardrail images.json (mencegah tim desain membuat peta kartografis yang mengimplikasikan cakupan layanan terverifikasi). Length-neutral pada tubuh (dalam blok IMAGE).
- **Frontmatter:** `word_count` dikonfirmasi 1.559 (edit bersifat punctuation-for-punctuation / 1-token-for-1-token; net-neutral terhadap baseline terverifikasi).

## What I flagged (open issues)
- ⚠️ **FAQ = 5 (batas bawah band 5–7).** Brief menyiapkan 8 kandidat; writer memangkas ke 5 untuk menghormati panjang (sesuai pola benchmark `gaslink-01` yang juga 5). Memenuhi syarat, tetapi *rekomendasi opsional*: jika ingin menambah kedalaman GEO/PAA tanpa menambah banyak kata, satu FAQ "Mengapa banyak wilayah Indonesia belum punya pipa gas?" (sudah ada di dossier) bisa ditambahkan di masa depan. Tidak menahan approve.
- ⚠️ **Angka "salah satu yang pertama di dunia" (Jayanti Baruna).** Sudah ditangani writer dengan benar (atribusi ke sumber + disclaimer "sulit diverifikasi independen", sesuai Flag 7 dossier). Dicatat hanya sebagai konfirmasi bahwa flag sudah teralamati, bukan isu terbuka.
- ⚠️ **Word count tidak bisa diverifikasi via tool dalam sesi ini** (Bash/python tidak tersedia). Estimasi 1.559 berdasarkan analisis delta token (semua edit net-neutral terhadap baseline `count_words.py` terverifikasi 1.559). Validator dapat mengonfirmasi via `count_words.py`.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan / Tidak dapat dipungkiri" openers — grep: nihil
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — grep: nihil
- [x] No "Penting untuk dicatat / dipahami bahwa" — grep: nihil (ada "Penting digarisbawahi" l.80, bukan klise terlarang; menyatakan fakta atribusi langsung)
- [x] "Dengan demikian" not overused — grep: nihil
- [x] Em-dash count ≤2 — **diperbaiki**: 0 dalam prosa publikasi (1 tersisa di dalam blok `{IMAGE_01}`, tidak terbit). Sebelumnya ~10.
- [x] Varied paragraph lengths — lead 5 kalimat; l.50 satu kalimat; "Satu hal yang sering disalahpahami" 2 kalimat; bervariasi
- [x] Not every H2 → 3-bullet list — H2 #3 numbered list, #4 prosa+tabel, #5 prosa+4-bullet; campuran sehat
- [x] No generic claims without numbers — angka spesifik di ≥6 tempat (22.821 km, 69%, 3.908 BBTUD, Rp 50 M, 6 MW, 300 MW, 23,38 MMSCF, 280 mil, 200–250 bar, 1/250)
- [x] No stacked hype adjectives — grep "canggih/powerful/terdepan/seamless": nihil. ("konsumen terbesar" = deskriptor faktual ESDM; "Jawaban Terbaik" = di judul honest-H2 yang justru menyangkal CNG selalu terbaik)
- [x] No service-dump paragraph — hanya 1 anchor Gaslink (mid) + closing; tidak ada daftar layanan

### B. Factual & energi-gas / CNG spot-check
Verifikasi 5 klaim vs dossier + product_matrix. Tidak ada yang butuh WebSearch — semua dossier-sourced dengan framing yang dituntut Flags.

| Claim | Source check | Verdict |
|---|---|---|
| Pipa gas nasional ~22.821 km, terkonsentrasi Sumatra–Jawa (BPH Migas, Mei 2026) | dossier l.71–73 ✓ (BPH Migas) | pass |
| PLN Batam pakai CNG sejak 2013, ~Rp 50 M/thn, unit 6 MW; Gresik 300 MW (ESDM 2016) | dossier l.36–46 ✓ (ESDM) — atribusi ke ESDM/PLN, "bukan proyek PGN Gagas" (l.80) ✓ | pass |
| Jayanti Baruna, Sept 2024, ~23,38 MMSCF, ~280 mil laut, Gresik→Lombok | dossier l.50–52 ✓ (HaloNTB/ESDM/Antara) — "pertama di dunia" diatribusikan + di-disclaimer | pass |
| Domestik gas ~69% / ~3.908 BBTUD, industri konsumen terbesar (Ditjen Migas 2025) | dossier l.106–109 ✓ (Ditjen Migas; dossier merekomendasikan angka 2025 ini) | pass |
| Kompresi CNG ~200–250 bar; volume ~1/250 atmosferik | dossier l.22–24, l.29–30 ✓ (hub Gagas + sumber teknis) | pass |

Guardrail terlindungi: GTM tanpa angka kapasitas ✓; jarak CNG truk kualitatif "ratusan km" (Flag 3) ✓; tidak ada "% wilayah tanpa pipa" (Flag 4) ✓; LNG hanya cousin link, bukan klaim "perusahaan LNG" Gagas ✓.

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — "CNG Beyond Pipeline: Gas Bumi ke Daerah Tanpa Pipa" = 50 char; "CNG" di posisi 1
- [x] Meta description 140–160 — **diperbaiki** ke ~147 char (sebelumnya ~163)
- [x] Slug ≤60, kebab-case, keyword — "cng-beyond-pipeline-gas-bumi-tanpa-pipa" = 39 char, memuat "cng"
- [x] H1 contains keyword — "CNG Beyond Pipeline: ..." (CNG)
- [x] H2 count 4–5 (konten) — 5 konten H2 + FAQ + Kesimpulan = 7 total `##` (dalam band 4–7 playbook); selaras struktur benchmark
- [x] ≥1 question-format H2 (l.62, l.54); ≥1 honest/counter-conventional H2 (l.94 "Kapan CNG Truk Bukan Jawaban Terbaik")
- [x] Keyword in first 100 words — "CNG (*Compressed Natural Gas*)" di lead (l.40)
- [x] Definition snippet near top (40–60 words) — blockquote "Secara singkat" l.42 (~52 kata)
- [x] ≥8 LSI terms — terhitung ≥15 (CNG, beyond pipeline, virtual pipeline, Mother Station, daughter station, Pressure Reduction Station, GTM, tube trailer, CNG Vessel/Marine CNG, kaskade tabung, BBTUD, MMSCF, kompresi 200–250 bar, LNG, dekanting)
- [x] 3 internal links (1 hub + 2 cousins) — `/perusahaan-cng-indonesia/` (lead, hub), `/gaslink/` (mid), `/perusahaan-lng-indonesia/` (mid); 3 URL distinct
- [x] ≥1 external authoritative citation — 2 (ESDM l.76, BPH Migas l.58); memenuhi syarat ≥1 ESDM/BPH Migas
- [x] FAQ 5–7 Q&As — 5
- [x] 2 image placeholders — IMAGE_01 (l.44), IMAGE_02 (l.92)
- [x] ≥1 list + ≥1 table — numbered list (5 langkah) + bullet list (4 batas) + tabel darat-vs-laut
- [x] Word count 1.200–1.600 — 1.559 (estimasi, net-neutral dari baseline terverifikasi)

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Jawaban langsung 40–60 kata setelah TIAP H2 mayor — H2 #1 (l.48 ~50 kata), #2 (l.56 ~45), #3 (l.64 ~55, sebelum numbered list), #4 (l.76 fakta-padat), #5 (l.96 ~45). Semua mandiri & dapat dikutip.
- [x] Tiap paragraf tubuh = satu poin quotable + fakta tersumber (22.821 km/BPH Migas; 69%/ESDM; PLN Batam Rp 50 M; Jayanti Baruna 23,38 MMSCF)
- [x] FAQ parseable untuk FAQPage schema; `date_modified: 2026-06-09` tercantum di meta block

### D. PGN Gagas framing discipline (product_matrix.md + style_guide §11)
- [x] PGN Gagas = penyedia/distributor CNG beyond-pipeline (menyalurkan/menghadirkan), BUKAN produsen — closing l.126 pakai positioning line pre-approved (company_profile.md l.89)
- [x] ≤3 self-mention — 2 mention prosa "PGN Gagas" (l.80 atribusi "bukan proyek PGN Gagas"; l.126 closing) + referensi layanan "Gaslink"; dalam budget
- [x] Tanpa superlatif tak terverifikasi — tidak ada "terbaik/terbesar/nomor satu" tentang klien
- [x] Nama produk + spesifikasi cocok product_matrix/dossier — CNG, Gaslink, GTM, Mother/daughter station, CNG Vessel; tanpa angka aset Gagas (Flag 5 dipatuhi)
- [x] Closing pakai positioning line company_profile.md — ya (l.126)
- [x] Soft website CTA sebagai baris TERAKHIR, setelah Kesimpulan — l.128 "kunjungi gagas.co.id dan mulai konsultasinya" (konsultatif, bukan "beli sekarang")
- [x] Hub link sebagai anchor inline natural di lead — l.40 `/perusahaan-cng-indonesia/`, bukan BACA JUGA

### E. Anti-cannibalization spot check
- Closest prior article untuk cluster CNG: **none yet** (cng-indonesia-04 = artikel CNG pertama yang di-commit). Tetangga lintas-cluster terdekat: `gaslink-01` (keyword "Gaslink", hub berbeda).
- Subtopic overlap (Jaccard estimate) vs gaslink-01: ~0.28 (shared: beyond pipeline, Mother Station, GTM, Pressure Reduction Station; union ~14). Di bawah ambang 0.4.
- Verdict: **distinct angle confirmed** — cng-04 memiliki CNG Vessel/Marine CNG, framing geografi kepulauan nasional, dan contoh pembangkit PLN (Batam/Gresik/Lombok) yang TIDAK ada di gaslink-01 (yang fokus onboarding produk: Gaslink Cylinder, smart metering, 600+ pelanggan, profil sektor).

### F. Image-brief completeness (images.json)
- [x] JSON parses — valid
- [x] Satu entri per placeholder — body punya {IMAGE_01} + {IMAGE_02}; JSON `image_count: 2`, 2 entri; cocok
- [x] Tiap entri punya alt_id (≤125 char) + caption_id + visual_direction + suggested_asset_type, semua Bahasa Indonesia
- [x] IMAGE_02 = skematik, BUKAN peta geografis — `suggested_asset_type: illustration`; rationale + visual_direction + sourcing_note eksplisit "bukan peta presisi/kartografis", "BUKAN peta cakupan layanan PGN Gagas"; placeholder body juga diselaraskan ("bukan peta geografis presisi"). **Guardrail terpenuhi.**
- [x] Requirement "real photo/site asset" disurfacing — sourcing_note IMAGE_01 & IMAGE_02 melarang foto fasilitas/kendaraan PGN Gagas tanpa izin; keduanya diilustrasi tim desain, bukan foto
- (Tidak ada PNG untuk dicek — sesuai desain.)
