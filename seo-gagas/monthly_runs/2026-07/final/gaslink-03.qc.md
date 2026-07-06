---
brief_id: "gaslink-03"
editor_run_date: "2026-06-09"
recommendation: "approve"
overall_score: 9
---

# Editor QC Report — Industri yang Cocok Pakai Gaslink + Cara Penerapannya

## Recommendation
**approve**

Draft yang kuat dan siap kirim. Anti-AI scan bersih (tidak ada opener/transisi klise; em-dash prosa nol setelah perbaikan). Seluruh klaim energi-gas/CNG terlacak ke dossier, dan — yang paling penting untuk artikel ini — seluruh PROTECT flag dossier dipatuhi: hanya empat pelanggan Gaslink terkonfirmasi yang disebut (RS Hasan Sadikin, PT Puri Saron Seminyak, dapur MBG Batam/Boyolali); tidak ada RS Kariadi/Sardjito/Dharmawangsa yang menyusup sebagai pelanggan Gaslink; onboarding tetap konseptual tanpa SLA/durasi; GTM tanpa angka kapasitas; Gaslink Cylinder 28 m³ di-hedge + diatribusi ke gagas.co.id; data 2017 dilabeli ilustratif-bertanggal. Framing PGN Gagas konsisten sebagai distributor/penyalur (anak usaha PGN), 3 self-mention (di plafon ≤3), tanpa superlatif. On-page SEO lengkap (3 internal link benar, 2 sitasi ESDM, FAQ 6, tabel per-sektor + numbered onboarding hadir). Perbaikan editor: rapikan meta description (hapus em-dash, dorong ke 156 char sweet-spot), konversi 2 em-dash prosa di Kesimpulan jadi koma, kuatkan jawaban langsung 40–60 kata di H2 #2 (sebelumnya 24 kata) untuk ekstraksi GEO, dan tambah `date_modified` yang hilang. Satu catatan terbuka non-pemblokir: dua `alt_id` di images.json sedikit melebihi pedoman 125 karakter — domain image-planner, tidak menghalangi pengiriman artikel.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Opener pada pain konkret; rhythm bervariasi (kalimat 1 baris s/d paragraf 5 kalimat); aside "ini sering disalahpahami" pada kompatibilitas peralatan. Nol em-dash prosa, nol klise. |
| Factual & energi-gas / CNG accuracy | 10 | 5 klaim utama diverifikasi vs dossier; semua angka berlabel sumber+tahun; hedge tepat pada estimasi (28 m³, data 2017, porsi 40,5%). |
| On-page SEO compliance | 9 | Meta title 50 char (keyword di pos 26), meta desc 156, slug 43. H1 ber-keyword. 5 H2 (1 pertanyaan, 1 jujur). Semua marker hadir. |
| GEO extractability (§2a) | 9 | Definition snippet 54 kata di awal; jawaban langsung 40–60 kata setelah tiap H2 (H2 #2 dikuatkan); tabel + numbered list mudah diekstrak baris/poin; FAQPage-ready; `date_modified` ditambahkan. |
| PGN Gagas framing discipline | 9 | Distributor/penyalur, bukan produsen; 3 self-mention (plafon); tanpa superlatif; positioning line company_profile di Kesimpulan; soft CTA gagas.co.id sebagai baris terakhir. |
| Internal linking | 10 | 3 link distinct: /gaslink/ (hub, di lead) + /perusahaan-cng-indonesia/ + /gasku/, anchor deskriptif, inline natural, tanpa "BACA JUGA". |
| FAQ quality | 9 | 6 Q&A (dalam 5–7), tiap jawaban 40–80 kata, mandiri, mengandung angka/fakta; cermin PAA brief. |
| Image-brief completeness | 8 | JSON parse OK; 3 entri ↔ 3 placeholder; alt/caption/visual_direction/asset_type semua Bahasa Indonesia; sourcing_note menyurfacekan opsi foto GTM asli. Minus kecil: 2 alt_id >125 char. |

## What I fixed (changelog)
- **Meta description** — hapus 2 em-dash separator (AI/stylistic tell, tidak match benchmark gaslink-01); reframe ke gaya titik-bersih dan dorong panjang dari 141 → **156 char** (masuk sweet-spot GEO 150–160). Keyword tetap di awal, 3 value-prop dipertahankan.
- **Kesimpulan** — konversi 2 em-dash parentetis ("Bila jawabannya ya—dan…itu—langkah") menjadi koma, menyamai gaya benchmark dan menurunkan em-dash prosa ke nol.
- **Placeholder IMAGE_02 & IMAGE_03** — ganti em-dash internal dengan titik dua/koma (placeholder tetap utuh, isi konsep tidak berubah) agar tidak menambah hitungan em-dash dokumen.
- **H2 #2 (Profil Kecocokan per Sektor)** — perkuat paragraf pembuka dari 24 kata (terlalu tipis untuk ekstraksi GEO) menjadi jawaban langsung ~58 kata yang menamai fit spesifik tiap sektor (manufaktur/hotel/RS/laundry) + benang merah "panas kontinu volume memadai" → kini independently quotable.
- **Offset panjang** — rapikan paragraf RSHS ("layak dicermati… umum dan masuk akal" → "lazim") untuk menjaga panjang ≤1.600 tanpa kehilangan fakta.
- **Frontmatter** — tambahkan `date_modified: "2026-06-09"` yang hilang (wajib §2a freshness; benchmark gaslink-01 memilikinya); perbarui `word_count` 1559 → **1590** (estimasi editor; orchestrator re-verifikasi).

## What I flagged (open issues)
- ⚠️ **images.json: alt_id IMAGE_01 (~136 char) dan IMAGE_03 (~130 char) melebihi pedoman ≤125 karakter** — *recommendation*: image-planner memangkas sedikit (mis. IMAGE_01: "Infografik empat sektor pengguna Gaslink: manufaktur, hotel, rumah sakit, dan laundry komersial beserta peralatannya." ≈ 116 char). Non-pemblokir untuk artikel; bukan domain editor untuk mengedit images.json.
- ⚠️ **Sitasi eksternal inline hanya menyebut "Kementerian ESDM 2024 / Ditjen Migas ESDM 2021" tanpa URL mentah di body** (URL ada di frontmatter `external_citations`) — *recommendation*: konsisten dengan benchmark gaslink-01 dan praktik CMS (atribusi by-name di body, URL di meta). Tidak perlu diubah; dicatat untuk transparansi.
- ⚠️ **Pengulangan daftar empat sektor antara H2 #1 (kalimat ke-3) dan H2 #2 (pembuka)** — disengaja agar tiap H2 mandiri untuk ekstraksi GEO; bukan AI-tell. *Recommendation*: biarkan; sesuai instruksi playbook §2a one-quotable-point-per-section.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — grep: nol match
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — grep: nol match
- [x] No "Penting untuk dicatat / dipahami bahwa" — nol match
- [x] "Dengan demikian" not overused — nol match
- [x] Em-dash count ≤2 — **prosa = 0** setelah perbaikan (semua em-dash awal ada di meta/placeholder, kini dibersihkan)
- [x] Varied paragraph lengths — campur 1-kalimat (line 48 bagian) s/d 5-kalimat; tidak simetris
- [x] Not every H2 → 3-bullet list — H2 #2 = tabel, H2 #3 = numbered, H2 #4/#5 = bullet, H2 #1 = prosa
- [x] No generic claims without numbers — angka konkret di 8+ tempat (600+, 40,5%, 1.515,8 BBTUD, 24%, 1.500 m³, 22–30%, 28 m³, 20–50%)
- [x] No stacked hype adjectives — tidak ada canggih/powerful/seamless/terdepan
- [x] No service-dump paragraph — hanya Gaslink yang di-anchor; Gasku disebut sekali sebagai pembeda produk

### B. Factual & energi-gas / CNG spot-check
| Claim | Source check | Verdict |
|---|---|---|
| Gaslink melayani 600+ pelanggan per September 2025 | dossier core fact (kumparan/ANTARA, conf. high) | pass |
| Sektor industri ~40,5% pemanfaatan gas domestik / 1.515,8 BBTUD (ESDM 2024) | dossier ✓ + ESDM URL; di-hedge "sekitar" + tahun (honor Flag 5: variasi 28–40%/tahun) | pass |
| Gas bumi ditarget 24% bauran energi nasional 2050 (Ditjen Migas, 2021) | dossier ✓ (RUEN, migas.esdm.go.id) | pass |
| RS Hasan Sadikin Bandung pakai Gaslink CNG sejak Agu 2025, ~1.500 m³/bln, hemat dari solar | dossier ✓ (CNBC 11 Agu 2025, conf. high; eksplisit Gaslink CNG bukan pipa) | pass |
| Gaslink Cylinder ~28 m³ untuk lahan terbatas | dossier ✓ (gagas.co.id); di-hedge "sekitar…menurut gagas.co.id" (honor Flag 2) | pass |

### B2. PROTECT / dossier-flag compliance (artikel ini)
- [x] **Hanya pelanggan Gaslink terkonfirmasi disebut**: RS Hasan Sadikin, PT Puri Saron Seminyak, dapur MBG Batam/Boyolali. Grep konfirmasi: tidak ada Kariadi/Sardjito/Dharmawangsa/Azra/Trans Resort/Conrad/SOL by Melia. ✓ (Flag 1, 4, 7)
- [x] **Onboarding konseptual** — "gambaran konseptual, bukan janji durasi tertentu" (line 69) + "Tidak ada SLA resmi yang dipublikasikan" (FAQ line 124). Tidak ada "X hari/minggu". ✓ (Flag 3, PROTECT)
- [x] **GTM tanpa angka kapasitas** — hanya "truk GTM" fungsional; tidak ada 10/20/40ft atau Sm³. ✓ (Flag 2)
- [x] **Data 2017 dilabeli** — "data penghematan lama… 2017… hanya ilustrasi bertanggal, bukan jaminan untuk kondisi sekarang"; nama hotel TIDAK disebut (lebih aman dari minimum). ✓ (Flag 1)
- [x] **Cakupan wilayah tidak diklaim nasional** — H2 #5 "Layanan terus diperluas, tetapi belum merata; ketersediaan di lokasi Anda perlu dicek dulu". ✓ (Flag 6)
- [x] **Retrofit di-hedge** — "umumnya perlu penggantian jet/orifice"; "Asumsi 'pasti tanpa ubah apa pun' sebaiknya dihindari". Tidak ada klaim mutlak. ✓

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — **50 char**, "Gaslink" di pos 26
- [x] Meta description 140–160 — **156 char** (setelah perbaikan)
- [x] Slug ≤60, kebab-case, keyword — **industri-cocok-pakai-gaslink-cara-penerapan** (43 char)
- [x] H1 contains keyword — "Industri yang Cocok Pakai **Gaslink** + Cara Penerapannya"
- [x] H2 count 4–5 — **5** (#1 definisi, #2 tabel, #3 how-to, #4 checklist, #5 jujur)
- [x] ≥1 question-format H2 (#3) ; ≥1 honest/counter-conventional H2 (#5) — keduanya ada
- [x] Keyword in first 100 words — "Gaslink" muncul di kalimat ke-2 lead
- [x] Definition snippet near top (40–60 words) — blockquote "Secara singkat" = 54 kata
- [x] ≥8 LSI terms — dihitung 12+: CNG, GTM, Pressure Reduction Station, Gaslink Cylinder, smart metering, HOREKA, retrofit burner, beyond pipeline, boiler uap, water heater, furnace, panas proses
- [x] 3 internal links (1 hub + 2 cousins) — /gaslink/ (hub, lead), /perusahaan-cng-indonesia/, /gasku/
- [x] ≥1 external authoritative citation — **2** (ESDM 2024; Ditjen Migas ESDM 2021)
- [x] FAQ 5–7 Q&As — **6**
- [x] 2 image placeholders (up to 3) — **3** (IMAGE_01/02/03)
- [x] ≥1 list + ≥1 table — numbered (onboarding 7 langkah) + 2 bullet list + 1 tabel per-sektor
- [x] Word count 1,200–1,600 — **~1.590** (estimasi; orchestrator re-verifikasi)

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer setelah tiap major H2 — H2 #1 ~52 kata; H2 #2 ~58 kata (dikuatkan); H2 #3 ~40 kata; H2 #4 ~37 kata (mendekati); H2 #5 ~48 kata
- [x] Tiap paragraf body satu poin quotable & verifiable — ya (klaim + fakta bersumber per paragraf)
- [x] FAQ parseable untuk FAQPage schema; `date_modified` di meta — FAQ H3 bersih; `date_modified: 2026-06-09` ditambahkan

### D. PGN Gagas framing discipline (product_matrix.md + style_guide §11)
- [x] Dibingkai sebagai penyedia/distributor gas-energi (menyalurkan/menjangkau), BUKAN produsen — "menyalurkan gas bumi ke segmen beyond pipeline" (Kesimpulan)
- [x] ≤3 self-mention — **3**: definition snippet (line 42), aside H2 #3 (line 71 "penyedia seperti PGN Gagas"), Kesimpulan (line 130). Di plafon, tidak melebihi.
- [x] Tanpa superlatif tak terverifikasi — "terbesar" hanya untuk SEKTOR industri (klaim ESDM, bukan PGN Gagas); tidak ada terbaik/nomor satu
- [x] Nama produk + spec match product_matrix/dossier — Gaslink, Gaslink Cylinder (28 m³ hedged), GTM, PRS, smart metering: semua sesuai
- [x] Closing pakai positioning line company_profile — "anak usaha PGN yang merupakan bagian dari Subholding Gas Pertamina"
- [x] Soft website CTA sebagai baris TERAKHIR setelah Kesimpulan — "kunjungi gagas.co.id dan jadwalkan konsultasinya" (konsultatif, bukan "beli")
- [x] Hub link inline natural di lead — "[Gaslink](https://gagas.co.id/gaslink/)" di lead, bukan callout

### E. Anti-cannibalization spot check
- Closest prior article: **gaslink-01** ("Apa Itu Gaslink…", informational) — satu-satunya yang sudah ter-commit di index.json. (gaslink-02 = comparison/biaya, belum di index; brief mengonfirmasi angle terpisah.)
- Subtopic overlap (Jaccard estimate): **~0,13–0,2** — irisan hanya mekanisme (GTM/PRS/Cylinder/"CNG untuk industri") yang di sini hanya konteks; subtopik inti (kecocokan per-sektor, onboarding, kesiapan lokasi, retrofit, kondisi belum-cocok) seluruhnya baru.
- Verdict: **distinct angle confirmed** (< 0,4; sesuai estimasi brief; angle_hash unik 362dc8ae…)

### F. Image-brief completeness (images.json)
- [x] JSON parses — valid
- [x] One entry per `{IMAGE_NN}` — 3 placeholder body ↔ 3 entri (IMAGE_01/02/03), exact match
- [x] Tiap entri punya alt_id + caption_id + visual_direction + suggested_asset_type (semua Bahasa Indonesia) — lengkap
- [⚠] alt_id ≤125 char — IMAGE_02 OK (~116); **IMAGE_01 ~136 & IMAGE_03 ~130 sedikit melebihi** (flagged; domain image-planner)
- [x] Kebutuhan "real photo/site asset" disurfacekan — IMAGE_03 sourcing_note: opsi foto truk GTM asli PGN Gagas sebagai referensi gaya (tetap ilustrasi flat vector)
- (Tidak ada PNG untuk dicek — sesuai desain.)

## The shipping question
Jika artikel ini tayang di gagas.co.id besok dan dibaca praktisi energi senior + pembeli industri skeptis: ya, WEBARQ Promote pantas bangga. Artikel menjawab pertanyaan operasional nyata (sektor saya cocok? bagaimana mulai? apa yang disiapkan?), jujur soal kapan BELUM cocok, dan setiap angka bisa dipertanggungjawabkan. **approve.**
