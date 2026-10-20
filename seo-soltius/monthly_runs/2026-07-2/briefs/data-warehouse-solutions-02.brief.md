---
keyword: "Data Warehouse Solutions"
keyword_slug: "data-warehouse-solutions"
landing_page: "https://www.soltius.co.id/id/blog/data-warehouse-solutions"
month: "2026-07-2"
brief_id: "data-warehouse-solutions-02"
angle: "sizing-capacity-planning-data-warehouse"
angle_hash: "sha1:5fbbb2fa06af"
search_intent: "how-to"
target_word_count: 1650
strategist_run_date: "2026-07-07"
---

# Cara Menentukan Ukuran Data Warehouse: Panduan Sizing Compute & Storage

## Hook hypothesis

Dua kesalahan sizing menghantui proyek data warehouse: beli terlalu besar (bayar kapasitas menganggur bertahun-tahun) atau terlalu kecil (query lambat, dashboard timeout, tim mengeluh). Di era cloud consumption-based, salah sizing tidak lagi soal beli server salah — ia langsung tercermin di tagihan bulanan. Angle ini segar karena belum ada panduan berbahasa Indonesia yang menjelaskan *cara menghitung kebutuhan* data warehouse dalam bahasa bisnis (bukan sekadar spesifikasi vendor). Pain yang disasar: kepala IT/data yang diminta "kira-kira butuh berapa besar dan berapa biayanya" tanpa punya kerangka. Soltius kredibel sebagai implementor yang melakukan sizing SAP HANA Cloud/Datasphere untuk beban kerja nyata lintas industri.

## Primary keyword

`Data Warehouse Solutions`

## Secondary / LSI keywords (8–12)

- sizing data warehouse
- capacity planning
- compute vs storage
- concurrency (beban query paralel)
- rightsizing cloud
- consumption-based pricing
- rasio kompresi data
- SAP HANA Cloud
- SAP Datasphere
- over-provisioning
- MPP (massively parallel processing)
- proyeksi pertumbuhan data

## Search intent & SERP feature targets

- **Stage**: consideration → decision
- **Format**: how-to + worked example (perhitungan)
- **Surface targets**:
  - [x] AI Overview (Google SGE) / AI-engine citation (Perplexity, ChatGPT)
  - [x] Featured Snippet (list / numbered steps)
  - [x] People Also Ask

## SERP landscape (live scrape today)

**Top 3 competing pages:**
1. `https://learn.microsoft.com/en-us/sql/analytics-platform-system/processing-and-storage-capacity-planning` — "Processing and storage capacity planning (Microsoft)" — *angle*: rumus teknis spesifik-produk (drive size × disk, rasio kompresi 5:1), EN, tidak dalam konteks bisnis/SAP.
2. `https://docs.cloudera.com/data-warehouse/cloud/planning/topics/dw-public-cloud-vw-env-size-requirements-planning.html` — "Virtual Warehouse sizing requirements (Cloudera)" — *angle*: dokumentasi sizing virtual warehouse cloud; teknis, vendor-spesifik.
3. `https://www.linkedin.com/advice/1/how-do-you-determine-right-size-your-data-warehouse-6lsae` — "Determining Your Data Warehouse Size (LinkedIn)" — *angle*: tips umum, tidak terstruktur sebagai kerangka.

**Gaps to exploit**: tak ada panduan ID; tak ada yang menerjemahkan sizing ke bahasa bisnis (jumlah user, jendela laporan, retensi historis, pertumbuhan tahunan) lalu ke keputusan compute/storage; tak ada worked example angka; tak ada peringatan bahwa di cloud, sizing = keputusan biaya berjalan, bukan sekali beli; tak ada pembedaan storage (relatif murah, elastis) vs compute (mahal, sumber biaya utama).

**People Also Ask** (captured):
- Bagaimana cara menentukan ukuran data warehouse yang tepat?
- Berapa besar storage dan compute yang dibutuhkan data warehouse?
- Apa itu rightsizing di cloud data warehouse?
- Mengapa biaya cloud data warehouse membengkak karena salah sizing?
- Apa bedanya menskalakan storage dan compute?
- Bagaimana memperhitungkan pertumbuhan data ke depan?

## Distinct angle vs. history

- **Closest prior article in this cluster**: `biaya-data-warehouse-tco-komponen` (2026-08-01) dan `roadmap-implementasi-data-warehouse-solutions-5-fase` (2026-06-03).
- **How this brief differs**: 08-01 menjawab "berapa *biaya* dan komponennya" (TCO, lisensi, OpEx/CapEx, ROI); brief ini menjawab "berapa *besar* yang saya butuhkan" (compute core, storage TB, concurrency) — pertanyaan teknik kapasitas, bukan finansial. Sizing yang benar adalah *input* ke TCO, bukan pengulangannya. 06-03 adalah roadmap fase; brief ini menajam pada satu keputusan teknis di dalam fase desain.
- **Subtopic overlap (Jaccard) with closest prior**: ~0.15 (irisan hanya "consumption-based" & nama produk SAP; storage/compute split, concurrency, rasio kompresi, MPP, rightsizing, proyeksi pertumbuhan semuanya baru).

## Article skeleton — H2s the writer should expand

1. **H2 (definitional)**: "Apa Itu Sizing Data Warehouse dan Mengapa Sering Meleset?" — *covers*: definisi capacity planning; tiga dimensi (storage, compute, concurrency); blok 40–60 kata.
2. **H2 (practical/numbered)**: "Lima Input Bisnis yang Menentukan Ukuran Data Warehouse Anda" — *covers*: volume data mentah + rasio kompresi (~5:1), retensi historis, jumlah user bersamaan, kompleksitas/berat query, pertumbuhan tahunan; ubah tiap input jadi implikasi teknis.
3. **H2 (question-format)**: "Compute atau Storage: Mana yang Sebenarnya Menentukan Biaya Anda?" — *covers*: storage relatif murah & elastis; compute (paralelisme MPP) adalah pemicu biaya utama; mengapa memisahkan keduanya (arsitektur cloud modern) penting.
4. **H2 (comparison/table + worked example)**: "Contoh Perhitungan: Dari 2 TB Data Mentah ke Rekomendasi Kapasitas" — *covers*: satu contoh angka bertahap (data mentah → setelah kompresi → cadangan log/temp ~50% → tier compute untuk N user); tabel skenario kecil/menengah/besar.
5. **H2 (honest / counter-conventional)**: "Jangan Sizing untuk Beban Puncak: Rightsizing dan Elastisitas di Cloud" — *covers*: kesalahan mengonfigurasi default untuk peak = pemborosan; pola auto-scale/pause; kapan on-premise fixed masih masuk akal.
6. **FAQ** — questions to answer: Bagaimana menghitung ukuran data warehouse? · Berapa rasio kompresi umum? · Apa beda menskalakan compute vs storage? · Apa itu concurrency dan mengapa penting? · Bagaimana memperkirakan pertumbuhan data? · Apakah cloud selalu lebih murah untuk beban besar? · Bagaimana SAP HANA Cloud/Datasphere menangani penskalaan?

(≥1 H2 question-format: H2 #3. ≥1 honest/counter-conventional: H2 #5.)

## SAP / partner tech to teach (from product_matrix.md)

Vendor-neutral: konsep storage vs compute terpisah, MPP, rasio kompresi kolumnar, concurrency/workload management, elastic scaling. Petakan ke **SAP HANA Cloud** (in-memory, kompresi kolumnar, penskalaan compute/storage) dan **SAP Datasphere** (di atas HANA Cloud) sebagai contoh platform yang memisahkan skala. **Verify (researcher):** klaim pemisahan compute/storage & elastic scaling di SAP HANA Cloud; rasio kompresi in-memory HANA (jangan sebut angka pasti tanpa sumber); apakah Datasphere memakai model kapasitas/blok tertentu.

## Soltius anchor (max 2–3 self-mentions; usually the closing)

- **Service/credential to anchor the CTA**: **Data and AI Consulting** + Implementation — *placement*: closing ("sizing yang tepat sejak awal menghindari biaya menganggur maupun keluhan performa; Soltius membantu memetakan beban kerja nyata ke kapasitas yang pas").
- Optional 1 mid-article aside: satu kalimat di H2 #4 bahwa di lapangan, sizing paling akurat berangkat dari profil query nyata, bukan tebakan.

## Internal links to place

- **Primary** (this keyword's hub): `https://www.soltius.co.id/id/blog/data-warehouse-solutions` — anchor: `Data Warehouse Solutions` — inline di lead.
- **Cousin 1**: `https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud` — anchor: `migrasi ERP ke cloud` — why: keputusan compute/storage & model consumption sama-sama muncul saat memindahkan beban ke cloud.
- **Cousin 2**: `https://www.soltius.co.id/id/blog/business-intelligence` — anchor: `Business Intelligence` — why: concurrency ditentukan oleh berapa banyak pengguna BI/dashboard yang query bersamaan.

## E-E-A-T signals to embed

- Specific numbers/facts to cite: rasio kompresi ~5:1 (referensi Microsoft capacity planning), cadangan ~50% untuk log/tempDB (label sebagai rule-of-thumb), performa query MPP naik dengan jumlah core paralel.
- Authoritative sources to cite (suggest 2): Microsoft Learn (processing & storage capacity planning) untuk rumus umum; SAP help.sap.com (SAP HANA Cloud sizing / capacity units) untuk konteks SAP. Minimal 1 sumber SAP resmi.
- First-party Soltius angle: pengalaman men-sizing beban kerja SAP untuk klien lintas industri, menghindari over/under-provisioning.

## AI Overview & GEO optimization (seo_playbook §2a)

- **Question-first + extractable**: H2 #3 & #5 dalam bentuk pertanyaan; jawaban 40–60 kata langsung.
- **Definition snippet (40–60 words)**: "Sizing data warehouse adalah proses menentukan kapasitas compute, storage, dan concurrency ..." di awal.
- **Entity list**: SAP HANA Cloud, SAP Datasphere, MPP, compute, storage, concurrency, rasio kompresi, rightsizing.
- **FAQ target**: 7 pertanyaan; reuse PAA.

## Data captured this run

- **Source(s)**: WebSearch (Google ID) capacity-planning + landing page fetch.
- **Apr 2026 rank** (from report): 48 (referensi historis; seo_report run ini = none).
- **Volume / KD / trend**: n/a (Ahrefs not connected); sinyal: query sizing didominasi konten teknis vendor asing — whitespace ID jelas.
- **SERP features present**: PAA, kemungkinan AI Overview, featured snippet list.
- **cache_source**: `2026-07-2/research/data-warehouse-solutions.research.json (captured: 2026-07-07)`

## Notes for SME researcher

Verifikasi: (1) rasio kompresi & aturan cadangan log/temp — beri sumber, framing rule-of-thumb; (2) klaim pemisahan compute/storage dan elastic scaling pada SAP HANA Cloud; (3) apakah SAP Datasphere memakai satuan kapasitas/blok resmi (jika ya, sebut nama resminya); (4) jangan menyebut harga per unit tanpa sumber SAP resmi. Sediakan 1 contoh angka sizing yang realistis untuk worked example.

## Notes for future strategist runs

TIDAK dibahas di sini: rincian TCO/harga (sudah di 2026-08-01); FinOps/observability pasca go-live (brief -04); data mesh (brief -03). Sisakan benchmark performa Datasphere vs Snowflake/BigQuery untuk run mendatang.
