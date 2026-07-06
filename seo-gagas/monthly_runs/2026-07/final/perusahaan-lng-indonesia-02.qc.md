---
brief_id: "perusahaan-lng-indonesia-02"
editor_run_date: "2026-06-09"
recommendation: "approve"
overall_score: 9
---

# Editor QC Report — Peran LNG di Luar Jaringan Pipa: Memahami Konsep LNG Hub

## Recommendation
**approve**

Artikel ini lulus penuh pada semua gerbang kualitas yang menentukan. Bingkai LNG paling kritis — yang menjadi titik rawan terbesar untuk keyword ini — ditangani dengan benar dan eksplisit: PGN Gagas diposisikan sebagai **operator LNG Hub yang masih dalam tahap pembangunan** (groundbreaking Agustus 2025, ~15.000 MMBTU/bulan, mitra PT Nusantara Regas, via Gaslink), **bukan** produsen/regasifikasi/"perusahaan LNG", tidak disamakan dengan PT PGN LNG Indonesia, dan **RS Hasan Sadikin sama sekali tidak dikaitkan dengan LNG Hub** (penulis mematuhi temuan kritis Flag 6 — RSHS bahkan tidak disebut). Contoh Conrad Bali diatribusikan dengan benar ke Pertagas Niaga, bukan Gagas; kilang mini Pasuruan dipakai hanya sebagai konteks nasional; tidak ada "terbesar". Dua klaim bertanggal terkuat (kilang mini LNG Pasuruan 11 Feb 2026; groundbreaking LNG Hub Bandung Agt 2025 + kapasitas) saya verifikasi silang ke sumber otoritatif (ESDM + Bisnis.com/Jawa Barat Ekspres) dan cocok. Scan anti-AI bersih, GEO §2a terpenuhi (jawaban 40–60 kata di bawah setiap H2), 3 internal link tepat, ≥1 sitasi ESDM, FAQ 6 entri, numbered list virtual-pipeline + tabel + honest section semua hadir, dan anti-kanibalisasi vs cng-indonesia-04 terkonfirmasi distinct (CNG-kompresi vs LNG-kriogenik). Satu-satunya perbaikan in-place adalah pengurangan 2 em-dash prosa menjadi 0. Panjang akhir ~1.555 kata (net-negatif tipis dari 1.559), di dalam pita.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Tidak ada opener AI, transisi repetitif, atau service-dump. Ritme paragraf bervariasi (1–6 kalimat). Aside "yang sering disalahpahami" terasa praktisi. |
| Factual & energi-gas / CNG / LNG accuracy | 9 | 5 klaim di-spot-check; 2 klaim bertanggal diverifikasi silang ke ESDM/Bisnis.com. Semua angka tersumber & berlabel (10–25% diatribusikan ke PGN; 24% bauran tidak dipaksakan masuk). |
| On-page SEO compliance | 9 | Meta title 41 char, meta desc 155 char, slug 34 char — semua dalam batas. H1 berisi keyword. 5 H2. Keyword di 100 kata pertama. |
| GEO extractability (§2a) | 9 | Jawaban 40–60 kata langsung di bawah kelima H2 utama; satu poin quotable per paragraf; FAQ FAQPage-ready; date_modified hadir. |
| PGN Gagas framing discipline | 10 | Operator hub (bukan produsen), 1 self-mention (penutup) + CTA URL; tidak ada superlatif; tidak konflasi dengan PT PGN LNG Indonesia; RSHS tidak dikaitkan ke hub. |
| Internal linking | 9 | 3 link distinct: hub LNG di lead (inline), cousin CNG + Gaslink mid-body. Anchor deskriptif. Tidak ada "BACA JUGA". |
| FAQ quality | 9 | 6 Q&A dari PAA; tiap jawaban 40–80 kata, self-contained, satu angka/fakta. |
| Image-brief completeness | 9 | 3 entri images.json sah; satu per placeholder; alt_id/caption_id/visual_direction/suggested_asset_type lengkap dalam Bahasa Indonesia. |

## What I fixed (changelog)
- **Em-dash prosa: 2 → 0.** Pada bagian "Konsep Virtual Pipeline LNG", mengubah "...udara sekitar — skalanya jauh lebih sederhana, dan bisa berjalan..." → "...udara sekitar, jauh lebih sederhana skalanya, dan bisa berjalan..." (hapus 1 em-dash, lebih ringkas).
- Pada bullet honest section, mengubah "...penanganan boil-off gas — semuanya butuh evaluasi teknis..." → "...penanganan boil-off gas, semuanya butuh evaluasi teknis..." (hapus 1 em-dash). *Catatan: em-dash di dalam 3 placeholder `{IMAGE_NN}` sengaja dipertahankan — itu brief desain, bukan prosa, dan tidak masuk hitungan ritme prosa.*
- `word_count` frontmatter dipertahankan apa adanya dari draft (1.559); perubahan di atas net-negatif beberapa kata sehingga estimasi akhir ~1.555 — tetap di dalam pita 1.200–1.600 dan length-neutral/net-negatif sesuai instruksi.

## What I flagged (open issues)
- ⚠️ **Tanggal groundbreaking LNG Hub Bandung beredar dalam dua versi.** Artikel menulis "13 Agustus 2025 (Bisnis.com, 2025)", konsisten dengan dossier (Claim 3, high). Verifikasi WebSearch menunjukkan sebagian outlet (Radar Bandung, rilis gagas.co.id) menyebut **5 Agustus 2025** (tanggal pengumuman/rilis), sementara liputan groundbreaking + penandatanganan kerja sama bertanggal **13 Agustus 2025**. Keduanya "Agustus 2025" dan PROTECT hanya menuntut "groundbreaking Aug 2025", jadi klaim tetap akurat dan tersumber. *Rekomendasi:* tidak perlu diubah; cukup catatan untuk curator bila ingin menyeragamkan ke "awal Agustus 2025" di masa depan. Tidak menghalangi approve.
- ⚠️ **Sitasi inline berlabel pendek ("(Bisnis.com, 2025)", "(Universitas Pertamina, 2025)").** Ini gaya yang sama dengan benchmark gaslink-01 dan dapat diterima untuk artikel; URL lengkap ada di frontmatter `external_citations` (hanya 2 ESDM di sana, konsisten dengan playbook ≥1 otoritatif). *Rekomendasi:* tidak ada tindakan; konsisten dengan rumah gaya.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan / Tidak dapat dipungkiri" openers — grep: 0 match
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — grep: 0 match
- [x] No "Penting untuk dicatat / dipahami bahwa" — grep: 0 match
- [x] "Dengan demikian" not overused — grep: 0 match
- [x] Em-dash count ≤2 — **prosa = 0 setelah fix** (em-dash di 3 placeholder IMAGE dipertahankan, di luar hitungan prosa)
- [x] Varied paragraph lengths — lead 5 kalimat, beberapa paragraf 2–3 kalimat, definisi 1 kalimat; tidak simetris
- [x] Not every H2 → 3-bullet list — H2 dibuka prosa; hanya honest section memakai bullet; ada numbered list & tabel
- [x] No generic claims without numbers — angka spesifik di 6+ tempat (−162°C, 1/600, 1/250, 20.000–40.000 L, 15.000 MMBTU, 700–800 MMBTU, 10–25%, 200–250 bar)
- [x] No stacked hype adjectives (canggih/powerful/terdepan) — tidak ada
- [x] No service-dump paragraph — hanya 1 anchor (Gaslink/operator hub) di penutup

### B. Factual & energi-gas / LNG spot-check
| Claim | Source check | Verdict |
|---|---|---|
| Kilang mini LNG pertama Pulau Jawa resmi beroperasi 11 Feb 2026, ~20 ton/hari, Pasuruan | dossier Claim 13 ✓ + WebSearch ESDM ("diresmikan ... Rabu 11 Februari 2026 ... kilang mini LNG pertama di Pulau Jawa") | pass |
| LNG Hub Bandung groundbreaking Agt 2025, ~15.000 MMBTU/bulan (~0,5 BBTUD), mitra Nusantara Regas, target HOREKA | dossier Claim 3 ✓ + WebSearch (Bisnis.com/Jabar Ekspres: kapasitas 15.000 MMBTU/0,5 BBTUD, NR, HOREKA terkonfirmasi) | pass |
| ISO tank 20.000–40.000 liter, dinding ganda insulasi vakum, −162°C | dossier Claim 2 ✓ (PT PGN LNG Indonesia) | pass |
| LNG menyusut ~1/600 volume gas saat dicairkan −162°C | dossier Claim 1 ✓ | pass |
| Conrad Bali = hotel pertama dipasok LNG ISO tank, oleh **Pertagas Niaga** (bukan Gagas), 700–800 MMBTU/bulan | dossier Claim 15 ✓ (atribusi Pertagas Niaga benar; tidak diklaim Gagas) | pass |

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — **41 char**, "LNG" di posisi 1
- [x] Meta description 140–160 — **155 char**
- [x] Slug ≤60, kebab-case, keyword — **lng-beyond-pipeline-konsep-lng-hub** (34 char)
- [x] H1 contains keyword — "Peran LNG di Luar Jaringan Pipa: Memahami Konsep LNG Hub" (varian "LNG")
- [x] H2 count 4–5 — **5** (definisi, virtual pipeline, break-bulking, sektor pengguna [question], honest)
- [x] ≥1 question-format H2 (#2 & #4); ≥1 honest/counter-conventional H2 (#5)
- [x] Keyword in first 100 words — "LNG" muncul di kalimat 1 lead
- [x] Definition snippet near top (40–60 words) — blockquote "Secara singkat" (~50 kata)
- [x] ≥8 LSI terms — counted: 12+ (LNG Hub, break-bulking, ISO tank, virtual pipeline, FSRU, vaporizer, regasifikasi, boil-off gas, kriogenik, likuifaksi, HOREKA, Liquefied Natural Gas)
- [x] 3 internal links (1 hub + 2 cousins) — destinations: perusahaan-lng-indonesia (lead) + perusahaan-cng-indonesia + gaslink (body)
- [x] ≥1 external authoritative citation — actual: 2 ESDM di frontmatter (RIJTDGBN + kilang mini Pasuruan); inline juga merujuk ESDM 2023 & 2026
- [x] FAQ 5–7 Q&As — actual: **6**
- [x] 2 image placeholders (up to 3) — actual: **3**, semua placeholder dipertahankan di body
- [x] ≥1 list + ≥1 table — numbered list (7 tahap) + bullet list (honest) + tabel LNG vs CNG
- [x] Word count 1,200–1,600 — actual: ~1.555 (draft 1.559, net-negatif tipis setelah fix em-dash)

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — kelima H2 dibuka dengan jawaban langsung yang dapat dikutip (bukan hanya definition snippet teratas)
- [x] Each body paragraph makes one independently quotable, verifiable point — mis. "menyusut ~1/600 ... (PT PGN LNG Indonesia, 2026)", "kapasitas ~15.000 MMBTU/bulan (Bisnis.com, 2025)"
- [x] FAQ parseable for FAQPage schema; `dateModified` / freshness noted — blok FAQ H3 bersih; `date_modified: 2026-06-09` di meta

### D. PGN Gagas framing discipline (product_matrix.md + style_guide §11)
- [x] PGN Gagas dibingkai sebagai **operator LNG Hub & penyalur gas bumi beyond-pipeline (via Gaslink)** — eksplisit "bukan produsen atau pemilik kilang"
- [x] ≤3 PGN Gagas self-mentions — actual: **1** ("PGN Gagas" di penutup) + 1 CTA URL gagas.co.id; referensi LNG Hub Bandung mid-body sengaja netral tanpa menamai Gagas
- [x] No unverifiable superlatives — tidak ada "terbesar/terbaik/nomor satu" sebagai klaim Gagas ("terbaik" hanya muncul dalam frasa honest "BUKAN Jawaban Terbaik" & meta — bukan superlatif merek)
- [x] Nama produk + spesifikasi LNG sesuai product_matrix.md / dossier — LNG Hub, Gaslink, ISO tank, FSRU, Nusantara Regas semua akurat
- [x] Closing uses a company_profile.md positioning line — "Sebagai anak usaha PGN, bagian dari Subholding Gas Pertamina..."
- [x] Soft website CTA present as the FINAL line — "...kunjungi gagas.co.id." (konsultatif, bukan "beli sekarang")
- [x] Hub link present as a natural inline anchor (di lead) — "[LNG beyond pipeline di Indonesia](...)"; bukan callout

**Verifikasi PROTECT (kritis):**
- [x] Gagas = OPERATOR LNG Hub "sedang dibangun/dalam pengembangan" — "ditandai groundbreaking 13 Agustus 2025 ... masih dalam tahap pembangunan, bukan operasional komersial" ✓
- [x] BUKAN produsen/regasifier/"perusahaan LNG" — "bukan produsen atau pemilik kilang" ✓; vaporisasi/regasifikasi sisi pelanggan dijelaskan vendor-neutral, tidak diatribusikan ke Gagas
- [x] Tidak dikonflasikan dengan PT PGN LNG Indonesia — muncul HANYA sebagai sumber sitasi LNG, tidak disamakan dengan Gagas ✓
- [x] RS Hasan Sadikin TIDAK dikaitkan dengan LNG Hub — RSHS tidak disebut sama sekali ✓ (Flag 6 dipatuhi)
- [x] Conrad Bali via Pertagas Niaga (bukan Gagas) ✓
- [x] mini-LNG Pasuruan Feb 2026 (ESDM) sebagai konteks ✓; tidak ada "terbesar" ✓

### E. Anti-cannibalization spot check
- Closest prior article for this cluster: **cng-indonesia-04** (CNG Beyond Pipeline, committed editor-approved)
- Subtopic overlap (Jaccard estimate): **~0,18** (intersection ≈ {beyond pipeline, gas tanpa pipa, virtual pipeline}; union ≈ 18–20)
- Verdict: **distinct angle confirmed.** cng-04 = mode KOMPRESI CNG (Mother Station, 200–250 bar, GTM, daughter/PRS, CNG vessel, PLN Batam/Gresik/Lombok, ~1/250). LNG-02 = mode CAIR KRIOGENIK (likuifaksi −162°C, ISO tank, break-bulking, LNG Hub, vaporizer/FSRU, Conrad/Pertagas Niaga, ~1/600). Payung "beyond pipeline" sama, moda teknis berbeda total — cng-04 sendiri membedakan CNG dari "kapal LNG yang perlu −162°C". Di bawah ambang 0,4.

### F. Image-brief completeness (images.json)
- [x] JSON parses — valid, image_count: 3
- [x] One entry per `{IMAGE_NN}` placeholder — IMAGE_01/02/03 di body cocok dengan 3 entri JSON; ketiga placeholder dipertahankan di final
- [x] Each entry has alt_id (≤125 char) + caption_id + visual_direction + suggested_asset_type — semua ada, Bahasa Indonesia
- [x] suggested_asset_type beralasan — IMAGE_01 diagram (alur), IMAGE_02 diagram (cutaway ISO tank), IMAGE_03 infographic (decision card)
- [x] "Real photo/site asset" requirement surfaced — sourcing_note setiap entri menegaskan "infografis/diagram skematik orisinal, BUKAN peta/foto fasilitas nyata; jangan cantumkan nama kota/koordinat" — tepat untuk menghindari salah-baca sebagai fasilitas Gagas operasional
- (Tidak ada PNG untuk diperiksa — sesuai desain; tim desain klien mengeksekusi dari brief.)

## The shipping question
Jika artikel ini tayang di gagas.co.id besok dan dibaca praktisi energi/gas senior plus pembeli industrial yang skeptis: ia menjelaskan LNG Hub & break-bulking dengan akurat, jujur soal kapan LNG Hub BUKAN jawaban, membingkai peran Gagas dengan tepat (operator hub yang sedang dibangun, bukan produsen), dan tidak membuat klaim yang bisa dibantah. WEBARQ Promote layak bangga. **Approve.**
