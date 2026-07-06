---
brief_id: "perusahaan-cng-indonesia-02"
editor_run_date: "2026-06-09"
recommendation: "approve"
overall_score: 9
---

# Editor QC Report — Layanan Penyedia CNG: Pasokan, Distribusi GTM, hingga Dukungan Teknis

## Recommendation
**approve**

Draf ini sudah kuat sejak awal dan terkalibrasi rapi ke benchmark `gaslink-01` (suara praktisi, hedging jujur, ritme paragraf bervariasi, tabel + daftar bernomor + FAQ). Karena draf ditulis sebelum dosier tersedia, fact-check menjadi prioritas — dan hasilnya bersih: semua klaim teknis yang sensitif (PRS 0,8–1,5 bar, C-Cyl 28 m³, legalitas izin ESDM, dorongan BPH Migas, telemetri/smart meter) cocok dengan dosier dan ter-hedge sesuai instruksi. Tidak ada angka skala (600+/16 juta MMBTU/jumlah SPBG) maupun angka kapasitas GTM yang menyusup, sesuai guardrail. Empat perbaikan in-place bersifat netto-negatif/netral terhadap panjang: (1) satu sebutan "PGN Gagas" mid-body diubah menjadi framing vendor-netral sehingga self-mention turun 3→2 dan kepadatan promosi mid-body berkurang; (2) hedge "referensi teknis industri" ditambahkan pada angka PRS di FAQ agar konsisten dengan body & tabel; (3) frasa yang berisiko menyiratkan angka waktu-tanggap SLA dinetralkan; (4) sitasi BPH Migas diberi tanggal. Tidak ada isu yang menuntut rework penulis/strategist. Layak tayang.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Ritme paragraf bervariasi (1–6 kalimat), tanpa opener AI, 0 em-dash di body, tanpa "Selain itu" beruntun. |
| Factual & energi-gas / CNG accuracy | 9 | 5/5 klaim spot-check lolos vs dosier; semua angka sensitif ter-hedge & teratribusi. |
| On-page SEO compliance | 9 | Meta/slug/H2/FAQ/internal-eksternal link semua lolos. Meta title membawa "Perusahaan CNG" core (bukan keyword penuh) — wajar di batas 60 char. |
| GEO extractability (§2a) | 9 | Jawaban 40–60 kata setelah tiap H2; satu poin quotable per paragraf; FAQ FAQPage-ready. |
| PGN Gagas framing discipline | 9 | Penyedia/distributor CNG (menyalurkan/memantau), 2 self-mention, tanpa superlatif. |
| Internal linking | 9 | 3 link distinct: hub inline di lead + Gaslink + Gasku di Kesimpulan. |
| FAQ quality | 9 | 5 Q&A, 40–80 kata, tiap jawaban memuat fakta spesifik. |
| Image-brief completeness | 9 | JSON valid; 3 entri = 3 placeholder; alt_id IMAGE_01 ditrim ke ≤125. |

## What I fixed (changelog)
- **Self-mention 3 → 2 + 1 em-dash body dihapus**: Kalimat "PGN Gagas, misalnya, menyebut layanannya disertai perhitungan pemakaian yang akurat — tolok ukur..." (§4) diubah menjadi framing vendor-netral "Penyedia yang menyertakan perhitungan pemakaian akurat sebagai standar layanan, bukan opsi tambahan, layak jadi tolok ukur...". Menurunkan self-mention "PGN Gagas" dari 3 ke 2 (sesuai niat dosier: 1 aside mid-article + 1 closing), mengurangi kepadatan promosi mid-body, sekaligus menghapus satu-satunya em-dash di body.
- **Hedge PRS di FAQ**: FAQ "Apa fungsi GTM dan Pressure Reduction Station?" — angka "0,8–1,5 bar" kini diberi "sesuai kebutuhan alat (referensi teknis industri)" agar konsisten dengan body (§2) dan tabel; memenuhi guardrail F3 (bukan standar regulasi).
- **Netralisasi sinyal SLA waktu-tanggap**: §4 "berapa jam sampai teknisi tiba" → "sampai sejauh mana teknisi menjamin kedatangan" untuk menghindari implikasi adanya angka waktu-tanggap SLA yang dipublikasikan (guardrail: no SLA response-time figure). Klaim "24 jam" tetap diposisikan sebagai standar yang harus didefinisikan di kontrak.
- **Sitasi BPH Migas diberi tanggal**: §5 "(BPH Migas)" → "(BPH Migas, Februari 2024)" sesuai disiplin sitasi style_guide §4 dan dosier Claim 2.
- **Trim alt_id IMAGE_01 (images.json)**: dari 131 → 117 karakter (menghapus "dan dukungan teknis 24 jam" → "dukungan teknis") agar masuk batas ≤125; detail "24 jam" tetap ada di caption_id.
- **Frontmatter word_count**: 1510 → 1549 (estimasi pasca-edit; netto sedikit positif dari draf 1542 karena penambahan hedge/tanggal, tetap ≤1600).

## What I flagged (open issues)
- ⚠️ **Word count adalah estimasi manual (1549).** Tool Bash/`count_words.py` tidak tersedia di sesi ini untuk verifikasi numerik. Editan bersih netto kecil (+~7 kata dari 1542 terverifikasi pada draf). *Rekomendasi*: jalankan `python tools/count_words.py monthly_runs/2026-07/final/perusahaan-cng-indonesia-02.id.md` saat tooling tersedia; bila berbeda >10 kata, sesuaikan frontmatter. Tetap aman ≤1600 dalam skenario apa pun.
- ⚠️ **Meta title membawa "Perusahaan CNG", bukan keyword penuh "Perusahaan CNG Indonesia."** Disengaja agar muat ≤60 char (judul aktual 53 char) tanpa mengorbankan value props; H1, slug, dan body tetap membawa keyword utuh. *Rekomendasi*: pertahankan — menambah "Indonesia" mendorong title melewati 60 char, melanggar §3.
- ⚠️ **Opening H2 #5 ~38 kata** (sedikit di bawah pita 40–60 GEO), namun unit jawaban lengkap menyentuh ~40 dan tetap quotable. *Rekomendasi*: tidak wajib diubah; bila ingin presisi, tambahkan satu klausa pada kalimat pembuka.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — grep: 0
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — grep: 0
- [x] No "Penting untuk dicatat / dipahami bahwa" — grep: 0
- [x] "Dengan demikian" not overused — grep: 0
- [x] Em-dash count ≤2 — **0 di body** (4 total di file semuanya di frontmatter/placeholder IMAGE; bukan prosa terbit)
- [x] Varied paragraph lengths (not all ~4 sentences) — campuran 1–6 kalimat; pembuka pendek, body sedang
- [x] Not every H2 → 3-bullet list — H2 #2 daftar bernomor, #3 tabel, #4 bullet kontrak, #5 bullet sinyal; bervariasi
- [x] No generic claims without numbers — angka spesifik di 250 bar, 0,8–1,5 bar, 28 m³, lima komponen, Permen 2018/2021, BPH Feb 2024
- [x] No stacked hype adjectives (canggih/powerful/seamless/terdepan) — grep: 0
- [x] No service-dump paragraph — penutup memakai 1 positioning line + 2 cousin-link kontekstual, bukan daftar layanan

### B. Factual & energi-gas / CNG spot-check
| Claim | Source check | Verdict |
|---|---|---|
| PRS turunkan tekanan ke 0,8–1,5 bar (input s.d. 250 bar), "referensi teknis industri" | dossier Claim 4 + F3 (PT Citigas + jurnal Wibowo 2024) ✓ | pass |
| C-Cyl ~28 m³ per cylinder, atribusi gagas.co.id + hedge versi produk | dossier Claim 6 ✓ (gagas.co.id/gaslink, primer) | pass |
| Niaga/pengangkutan CNG selain pipa wajib izin usaha Menteri ESDM | dossier Claim 1 + 16 ✓ (Permen ESDM 4/2018 Psl 20, ubah 19/2021; migas.esdm.go.id) | pass |
| Pemerintah dorong pemanfaatan CNG industri & transportasi (BPH Migas, Feb 2024) | dossier Claim 2 ✓ (bphmigas.go.id, 28 Feb 2024) | pass |
| Telemetri/smart meter untuk penagihan akurat (vendor-netral) | dossier Claim 11 ✓ (gagas.co.id "smart meter"; PGN AMR) + company_profile "perhitungan pemakaian akurat" | pass |

**Guardrail PROTECT — terverifikasi:** GTM **tanpa angka kapasitas** (grep 0,15/MMSCF: 0); **tanpa angka SLA waktu-tanggap** (klaim "24 jam" diposisikan sebagai standar yang harus didefinisikan, bukan figure jam); **tanpa angka skala** 600+/563+/16.111/10,85/SPBG counts (grep: 0). Framing service-scope (apa yang dibeli & siapa bertanggung jawab), bukan mekanika beyond-pipeline. Vendor-neutral, tanpa nama kompetitor, tanpa rank.

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — **53 char**; "Perusahaan CNG" pada char 9–22 (keyword core; varian sinonim, lihat flag)
- [x] Meta description 140–160 — **150 char**; keyword + value props (pasokan, GTM, PRS, telemetri, 24 jam)
- [x] Slug ≤60, kebab-case, keyword — `layanan-penyedia-cng-pasokan-distribusi-gtm` (43 char, memuat "cng")
- [x] H1 contains keyword — "Layanan Penyedia CNG..." (varian keyword inti hadir; hub-anchor "perusahaan CNG Indonesia" di lead)
- [x] H2 count 4–5 — **5 H2 body** (+ FAQ + Kesimpulan)
- [x] ≥1 question-format H2; ≥1 honest/counter-conventional H2 — Q: "...Mencakup Apa Saja?" & "...Termasuk Layanan atau Biaya Terpisah?"; counter: "...Tampak Lengkap tapi Tipis di Lapangan"
- [x] Keyword in first 100 words — "perusahaan CNG Indonesia" (anchor hub) di lead
- [x] Definition snippet near top (40–60 words) — blockquote "Secara singkat" ~49 kata
- [x] ≥8 LSI terms — counted: **12** (layanan penyedia CNG, distribusi CNG, GTM, PRS, virtual pipeline, telemetri, dukungan teknis, komisioning, Mother Station, layanan 24 jam, C-Cyl, beyond pipeline)
- [x] 3 internal links (1 hub + 2 cousins) — `/perusahaan-cng-indonesia/` (lead), `/gaslink/`, `/gasku/` (Kesimpulan)
- [x] ≥1 external authoritative citation — **2**: ESDM/Ditjen Migas + BPH Migas (keduanya inline + dosier-sourced)
- [x] FAQ 5–7 Q&As — **5**
- [x] 2 image placeholders (up to 3) — **3** (IMAGE_01/02/03)
- [x] ≥1 list + ≥1 table — daftar bernomor (§2) + bullet (§1,§4,§5) + 1 tabel tanggung jawab (§3)
- [x] Word count 1,200–1,600 — **~1.549** (estimasi; lihat flag)

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — #1 ~42, #2 ~52, #3 ~46, #4 ~48, #5 ~38 (borderline, lihat flag)
- [x] Each body paragraph makes one independently quotable, verifiable point — ya; klaim + fakta/atribusi per paragraf
- [x] FAQ parseable for FAQPage schema; `dateModified`/freshness in meta — FAQ `###` Q + jawaban; `date_modified: 2026-06-09` ada di frontmatter

### D. PGN Gagas framing discipline (product_matrix.md + style_guide §11)
- [x] PGN Gagas sebagai penyedia/distributor gas (menggabungkan distribusi GTM + pemantauan + 24 jam; menghadirkan gas bumi via CNG) — bukan produsen
- [x] ≤3 PGN Gagas self-mentions — **2** (aside §3 + Kesimpulan); grep terverifikasi
- [x] No unverifiable superlatives ("terbaik/nomor satu") — grep: 0
- [x] Energi-gas/CNG product names + specs match product_matrix/dossier — Gaslink/GTM/PRS/Mother Station/C-Cyl/MRU konsisten; tanpa spec karangan
- [x] Closing uses a company_profile.md positioning line — "Sebagai anak usaha PGN yang merupakan bagian dari Subholding Gas Pertamina, PGN Gagas menghadirkan gas bumi ke wilayah tanpa jaringan pipa lewat solusi CNG..."
- [x] Soft website CTA sebagai baris terakhir, setelah Kesimpulan — "...jelajahi pilihannya di gagas.co.id dan mulai konsultasinya." (konsultatif, bukan "beli sekarang")
- [x] Hub link sebagai natural inline anchor (di lead), bukan "BACA JUGA" — ya, di paragraf pembuka

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: **none yet** untuk `perusahaan-cng-indonesia` (history hanya berisi 3 Gaslink + 3 Gasku). Tetangga tema terdekat: `gaslink-01`.
- Subtopic overlap (Jaccard estimate): **~0,18** vs gaslink-01 (berbagi istilah GTM/Mother Station/PRS; maksud berbeda — produk/edukasi vs lingkup-layanan-yang-dievaluasi)
- Verdict: **distinct angle confirmed** — gaslink-01 = informational "apa itu Gaslink/beyond-pipeline"; artikel ini = commercial "menilai lingkup layanan penyedia". Tidak perlu re-spin.

### F. Image-brief completeness (images.json)
- [x] JSON parses — valid
- [x] One entry per `{IMAGE_NN: ...}` placeholder in body — 3 entri (IMAGE_01/02/03) = 3 placeholder di body
- [x] Each entry has alt_id (≤125 chars) + caption_id + visual_direction + suggested_asset_type (semua Bahasa Indonesia) — ya; **IMAGE_01 alt_id ditrim 131→117 char**; IMAGE_02 = 124; IMAGE_03 = 115
- [x] Any "real photo/site asset" requirement surfaced — tidak ada; ketiganya infografik/diagram orisinal, `sourcing_note` menegaskan tanpa foto/branding nyata & vendor-neutral (tanpa nama kompetitor, GTM tanpa angka kapasitas)
- (Tidak ada PNG untuk dicek — sesuai desain; tim desain klien mengeksekusi dari brief ini.)
