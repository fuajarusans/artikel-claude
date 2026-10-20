---
keyword: "sap di aws azure gcp"
keyword_slug: "sap-di-aws-azure-gcp"
landing_page: ""
month: "2026-08"
brief_id: "sap-hyperscaler-c01"
angle: "komparasi-head-to-head-tiga-hyperscaler-untuk-sap-sertifikasi-region-indonesia"
angle_hash: "sha1:736d44d3e861"
search_intent: "comparison"
target_word_count: 900
strategist_run_date: "2026-07-17"
mode: "conditional-given-angle"
batch: "conditional-2026-08 (style_addendum.md WAJIB — 800–1000 kata, tanpa image placeholder, FAQ 2–3, 2 internal link)"
dedup_result: "DISTINCT — Jaccard tertinggi ~0.13 vs iaas-untuk-sap-c01 (< 0.4); tidak ada tabrakan angle_hash di 83 hash yang diperiksa. Lihat catatan PENTING soal artikel EN yang sudah live."
---

# SAP di AWS vs Azure vs GCP: Perbandingan untuk Perusahaan Indonesia

> Working Title diberikan user — substansi dipertahankan apa adanya. Hanya catatan teknis: H1 versi lengkap = 67 karakter (di atas band 50–60), jadi **meta title dipendekkan**. Penulis TIDAK mengubah angle.
>
> **H1 (artikel):** SAP di AWS vs Azure vs GCP: Perbandingan untuk Perusahaan Indonesia
> **Meta title (≤60):** SAP di AWS vs Azure vs GCP: Perbandingan untuk Indonesia *(56 char)*
> **Meta description (140–160):** SAP di AWS, Azure, dan GCP: bandingkan status sertifikasi SAP, region Indonesia (Jakarta), dan cakupan layanan ketiga hyperscaler sebelum Anda memutuskan. *(155 char)*
> **Slug (≤60):** sap-di-aws-azure-gcp-perbandingan-indonesia *(43 char)*
>
> *Catatan keyword:* primary keyword `sap di aws azure gcp` tidak memuat "vs", sehingga kecocokannya di H1 bersifat entitas (SAP + AWS + Azure + GCP dalam 26 karakter pertama), bukan *exact match*. Ini sudah optimal — jangan paksakan frasa kaku "sap di aws azure gcp" ke dalam kalimat; penulis cukup memastikan keempat entitas muncul di H1, lead, dan meta.

## Hook hypothesis

Seorang IT director yang sudah memutuskan "SAP kita pindah ke cloud" langsung bertemu pertanyaan berikutnya yang jauh lebih sulit dijawab: **hyperscaler mana?** Dan di sinilah SERP mengkhianati pembaca Indonesia. Kueri ini nyaris tidak punya hasil Bahasa Indonesia yang serius: yang tersedia adalah blog konsultan berbahasa Inggris/Jerman yang beradu klaim performa (AWS "Nitro System", Azure "NetApp Files", GCP "BigQuery + Vertex AI") tanpa satu pun angka yang bisa diverifikasi pembaca, atau artikel "AWS vs Azure vs GCP" generik dari media lokal yang tidak menyentuh SAP sama sekali. Celah terbesarnya: **tidak ada yang menjawab pertanyaan yang benar-benar menentukan di Indonesia** — apakah ketiganya sama-sama tersertifikasi SAP (ya), apakah ketiganya punya region di Indonesia (ya, dan tanggalnya bisa disebut), dan yang paling sering terlewat, bahwa **punya region di Jakarta tidak otomatis berarti instance tersertifikasi SAP yang Anda butuhkan tersedia di Jakarta**. Fakta terakhir itu ada hitam-putih di dokumentasi resmi AWS dan Google Cloud, dan tidak satu pun pesaing menuliskannya. Soltius kredibel di titik ini karena bekerja tepat di lapisan itu: mitra implementasi SAP yang menjalankan SAP di atas platform hyperscaler (halaman solusi Cloud Soltius menyebut Google Cloud sebagai *certified platform for SAP* dan AWS sebagai penyedia infrastruktur) — bukan penjual cloud, bukan pembuat SAP.

## Primary keyword

`sap di aws azure gcp`

Supporting keyword (given): `hyperscaler untuk sap`

(Intent **comparison** murni — format X vs Y sesuai catatan tracker. Pola pencari Indonesia: nama produk Inggris + penjelasan Bahasa Indonesia. Artikel ini melengkapi cluster cloud/SAP: `iaas-untuk-sap-c01` memegang "apa & mengapa IaaS", `saas-paas-iaas-c01` memegang model layanan, `cloud-computing-c01` memegang pillar cloud — komparasi head-to-head tiga hyperscaler belum dimiliki siapa pun, dan **kedua brief sebelumnya secara eksplisit menyisakannya untuk artikel ini**.)

## Secondary / LSI keywords (8–12)

- hyperscaler (penyedia cloud global)
- instance tersertifikasi SAP / *SAP-certified instance*
- SAP Certified and Supported SAP HANA Hardware Directory
- Amazon Web Services (AWS) — Asia Pacific (Jakarta), `ap-southeast-3`
- Microsoft Azure — Indonesia Central
- Google Cloud — Jakarta, `asia-southeast2`
- SAP HANA / SAP S/4HANA
- availability zone (zona ketersediaan)
- region cloud Indonesia / data residency (residensi data)
- machine type / instance type / VM size
- memory-optimized (M-series, R-series, X-series)
- RISE with SAP

## Search intent & SERP feature targets

- **Stage**: consideration → decision (pembaca sudah memutuskan cloud; sedang memilih platform)
- **Format**: tabel komparasi head-to-head + kriteria pemilihan + satu caveat praktis yang dapat diverifikasi
- **Surface targets**:
  - [x] AI Overview (Google SGE) / AI-engine citation (Perplexity, ChatGPT) — tabel komparasi baris-per-baris + jawaban 40–60 kata per H2
  - [x] Featured Snippet (tabel komparasi)
  - [x] People Also Ask

## SERP landscape (live scrape today)

> **Catatan metode:** WebFetch ke `google.com/search?q=...&hl=id&gl=id` **terblokir** (Google mengembalikan halaman error/consent, bukan SERP) — konsisten dengan seluruh run conditional 2026-06, 2026-07, dan sibling `sku-c01`/`cloud-computing-c01` batch ini. Degradasi anggun ke **WebSearch** (2026-07-17, 5 kueri ID + EN) sesuai SOP `CLAUDE.md` §11. Volume/KD: `n/a (Ahrefs not connected)`.

**Top competing pages (WebSearch, kueri ID + EN):**
1. `https://blog.ouassassi.com/sap-hyperscaler-vergleich-2023-en.html` — Enterprise Tech Blog — *angle*: "The Ultimate Hyperscaler Showdown: Pros and Cons of AWS, Azure, and GCP in an SAP Architecture Comparison". Pesaing paling dekat secara topik, tetapi **berbahasa Inggris, ber-slug Jerman, dan bertanggal 2023**; isinya klaim arsitektural (Nitro, NetApp Files, live migration) tanpa angka terverifikasi.
2. `https://support.sap.com/en/offerings-programs/ccoe/sap-hyperscalers.html` — SAP Support — *angle*: halaman resmi "SAP and Hyperscalers". Otoritatif, tetapi **memblokir akses otomatis (HTTP 403)** dan bukan artikel komparatif.
3. `https://upperedge.com/microsoft/aws-gcp-and-azure-hyperscaler-comparison-be-aware-of-key-commercial-terms/` — UpperEdge — *angle*: komparasi **commercial terms** (negosiasi kontrak), bukan kelayakan teknis SAP.
4. `https://medium.com/@prernadua27/demystifying-the-cloud-how-sap-runs-on-aws-azure-and-gcp-...` — Medium (personal) — *angle*: "How SAP Runs on AWS, Azure, and GCP"; naratif, tanpa sitasi resmi, otoritas domain lemah.
5. `https://www.asug.com/insights/aws-microsoft-azure-or-google-cloud-platform-gcp-its-complicated` & `.../hyperscalers-are-knocking-at-the-front-door` — ASUG — *angle*: sudut komunitas pengguna SAP Amerika; kesimpulannya "it's complicated", tanpa konteks region Asia/Indonesia.
6. `https://www.cloudcomputing-news.net/news/aws-azure-or-google-six-steps-to-decide-the-best-cloud-for-sap-implementations/` — *angle*: 6 langkah memilih cloud untuk SAP; kerangka keputusan, tanpa data region.
7. **Pesaing lokal Bahasa Indonesia untuk kueri ini praktis nihil.** Yang muncul justru artikel "AWS vs Azure vs GCP" generik tanpa SAP: `berca.co.id` (2022), `domainesia.com`, `dte.telkomuniversity.ac.id`, `weefer.co.id` ("11+ Rekomendasi Cloud Provider Indonesia").

**Gaps to exploit** (yang TIDAK dicakup baik oleh top hasil):
- **Kekosongan bahasa**: tidak ada artikel Bahasa Indonesia yang membandingkan ketiga hyperscaler **khusus untuk beban kerja SAP**. Yang ada: bahasa Inggris + SAP, atau Bahasa Indonesia tanpa SAP. Ini whitespace paling bersih di seluruh batch.
- **Konteks region Indonesia tidak pernah dibawa**: tak satu pun pesaing global menyebut Asia Pacific (Jakarta), Indonesia Central, atau asia-southeast2 — padahal itulah dimensi yang paling menentukan bagi pembaca Indonesia. Kita bawa **nama region + kode + tahun beroperasi + jumlah AZ**, semuanya dari sumber resmi.
- **Sertifikasi disalahpahami sebagai atribut hyperscaler**: pesaing menulis "ketiganya certified" seolah sertifikasi melekat pada AWS/Azure/GCP. Faktanya sertifikasi melekat pada **tipe instance/machine type tertentu**, terdaftar di SAP Certified and Supported SAP HANA Hardware Directory. Pembedaan ini quotable dan tidak dimiliki SERP.
- **CELAH TERBESAR — region ≠ ketersediaan instance**: dokumentasi resmi AWS menyatakan keluarga instance tertentu "might not be available across all Availability Zones in a Region" dan mewajibkan konfirmasi saat perencanaan; Google Cloud menyatakan "Some machine types are not available in all Google Cloud regions". **Tidak ada satu pun pesaing yang menuliskan ini**, padahal inilah yang membatalkan asumsi "sudah ada region Jakarta = beres".
- **Adu klaim performa tanpa bukti**: pesaing berlomba mengklaim siapa tercepat/paling stabil (termasuk klaim *downtime* komparatif tanpa sumber). Sesuai instruksi tracker (*"Netral & faktual; hindari klaim performa tak terverifikasi"*), **justru kenetralan kita yang jadi pembeda** — kita bandingkan pada dimensi yang bisa diverifikasi (status sertifikasi, region, keluarga instance), bukan pada siapa yang menang.

**People Also Ask / kueri turunan** (dari WebSearch ID + EN — mewakili PAA; SERP scrape terblokir):
1. Apakah SAP bisa berjalan di AWS, Azure, dan Google Cloud?
2. Hyperscaler mana yang terbaik untuk SAP?
3. Apa itu hyperscaler?
4. Apakah AWS, Azure, dan Google Cloud punya region di Indonesia?
5. Apa saja instance/VM yang tersertifikasi untuk SAP HANA?
6. Apa bedanya menjalankan SAP di IaaS hyperscaler dengan RISE with SAP?
7. Apakah RISE with SAP bisa memilih hyperscaler?
8. Apakah data SAP aman/tetap di Indonesia jika pakai cloud asing?

## Distinct angle vs. history

- **Closest prior article in this cluster**: `iaas-untuk-sap-c01` (conditional 2026-06, "Apa Itu IaaS dan Mengapa Enterprise Memilihnya untuk Hosting SAP") — target dedup yang ditunjuk tracker. Tetangga berikutnya: `saas-paas-iaas-c01` (2026-07), `cloud-computing-c01` (row 2 batch ini), `cloud-erp-vs-on-premise-c01` (2026-06), cluster `erp-migration-to-the-cloud` (history).

- **⚠️ TEMUAN PENTING RUN INI — artikel EN yang sudah live di soltius.co.id**: `https://www.soltius.co.id/blog/read/sap-in-the-cloud-why-iaas-aws-azure-gcp-is-the-strategic-choice-for-enterprise-indonesia` ("SAP in the Cloud: Why IaaS (AWS, Azure, GCP) Is the Strategic Choice for Enterprise Indonesia?", **Bahasa Inggris**). Ini tampaknya turunan/versi EN yang diperluas dari `iaas-untuk-sap-c01`. Struktur halaman itu (diverifikasi via WebFetch run ini): *The Paradigm Shift* · *Competitive Advantages of IaaS for SAP S/4HANA* · *Addressing Regulatory Challenges: UU PDP and Data Sovereignty* · ***AWS vs Azure vs GCP: Which One Fits Best?*** · *Migration Strategy: Pure IaaS vs RISE with SAP* · *Conclusion*. **Halaman itu SUDAH memuat satu seksi komparasi tiga hyperscaler** dengan tabel ringan (dimensi: *Maturity* / *Infrastructure* / *Best Fit*) dan menyebut ketiga region Jakarta.
  **Mengapa ini tetap DISTINCT, bukan duplikat:** (1) **bahasa & kueri berbeda** — halaman itu Bahasa Inggris; artikel ini Bahasa Indonesia menyasar `sap di aws azure gcp` (ruang kueri ID yang praktis kosong, lihat SERP landscape); (2) **kedalaman & sumbu berbeda** — di sana komparasi hanyalah 1 dari 6 seksi dalam artikel pillar "mengapa IaaS", dibandingkan pada sumbu **kematangan/ekosistem/best fit** (sudut kualitatif); di sini komparasi adalah **seluruh artikel**, dibandingkan pada sumbu **yang dapat diverifikasi** — status sertifikasi via SAP HANA Hardware Directory, nama+kode region, tahun beroperasi, jumlah AZ, keluarga instance certified; (3) **poin inti artikel ini tidak ada di sana sama sekali** — kaidah bahwa sertifikasi melekat pada tipe instance (bukan pada hyperscaler) dan caveat "region ada ≠ instance certified tersedia di region itu". **Konsekuensi wajib untuk writer: halaman EN itu menjadi cousin link kita** (lihat Internal links) — artikel ini **menautkan ke sana untuk urusan "apa & mengapa IaaS" + UU PDP/data sovereignty, dan TIDAK mengulangnya.**

- **How this brief differs (vs `iaas-untuk-sap-c01`)**: artikel Juni adalah **explainer definisional-plus-keputusan tentang MODEL** — H2-nya: apa itu IaaS, IaaS vs PaaS vs SaaS (tabel siapa-mengelola-apa), apakah SAP bisa jalan di IaaS, siapa mengelola apa (*shared responsibility model*), kapan IaaS tepat/belum tepat (tabel self-managed vs partner-managed vs RISE). Sumbunya: **lapisan mana milik siapa**. Brief ini bersumbu tegak lurus: **model sudah diputuskan; sekarang pilih platformnya** — komparasi head-to-head AWS vs Azure vs GCP pada dimensi faktual. Sesuai instruksi dedup tracker: *"komparasi head-to-head 3 hyperscaler untuk SAP (sertifikasi SAP, region Indonesia/terdekat, model layanan), BUKAN pembahasan 'apa/mengapa IaaS'. Netral & faktual; hindari klaim performa tak terverifikasi."*
  **Boundary tegas untuk writer — DILARANG membahas:**
  - **Definisi/karakteristik IaaS** (pay-as-you-go, elastisitas, CapEx vs OpEx, analogi sewa lahan) — milik `iaas-untuk-sap-c01` + halaman EN live.
  - **IaaS vs PaaS vs SaaS / siapa-mengelola-apa per model layanan** — milik `saas-paas-iaas-c01` (2026-07) dan `iaas-untuk-sap-c01`.
  - ***Shared responsibility model*** sebagai bahasan (tabel lapisan OS/HANA/aplikasi, "security of vs in the cloud") — milik `iaas-untuk-sap-c01`. Boleh disinggung **maksimal 1 klausa** jika benar-benar perlu, tanpa tabel.
  - **Spektrum self-managed vs partner-managed vs RISE** sebagai keputusan model operasi (termasuk tabelnya) — milik `iaas-untuk-sap-c01`; `rise-vs-grow-with-sap` milik `2026-08-erp-migration-to-the-cloud-01`. RISE di sini **hanya 1 kalimat**, sebagai dimensi "apakah pilihan hyperscaler masih ada di jalur RISE".
  - **Cloud vs on-premise** sebagai keputusan deployment — milik `cloud-erp-vs-on-premise-c01`.
  - **Karakteristik/deployment model cloud & NIST** — milik `cloud-computing-c01` (row 2 batch ini).
  - **UU PDP / data sovereignty / PP 71/2019 secara mendalam** — sudah dimiliki halaman EN live + `2026-06-erp-migration-to-the-cloud-04` (keamanan & regulasi). Di sini **maksimal 1 klausa** ("residensi data kerap jadi alasan memilih region Indonesia"), **tanpa menyebut nomor regulasi** (lihat peringatan verifikasi).
  - **TCO/biaya membandingkan hyperscaler** — belum ada sumber terverifikasi; **jangan disentuh** (lihat Notes for future).

- **Subtopic overlap (Jaccard) with closest prior**: subtopik brief ini = {sertifikasi melekat pada tipe instance bukan hyperscaler, SAP HANA Hardware Directory sebagai sumber kebenaran, instance non-certified hanya non-produksi, region Indonesia ketiga hyperscaler + kode + tahun + AZ, keluarga instance certified per hyperscaler, region ≠ ketersediaan instance per AZ, kriteria memilih hyperscaler, RISE sebagai dimensi pilihan hyperscaler} (8) vs subtopik `iaas-untuk-sap-c01` = {definisi IaaS, karakteristik IaaS pay-as-you-go/elastisitas, IaaS vs PaaS vs SaaS, SAP tersertifikasi di hyperscaler, instance non-certified non-produksi, shared responsibility model, siapa mengelola apa OS/HANA/aplikasi, kapan IaaS tepat/belum tepat, IaaS bukan otomatis lebih murah/TCO, spektrum self-managed–partner-managed–RISE} (10). Irisan efektif = {SAP tersertifikasi di hyperscaler ≈ 1; instance non-certified hanya non-produksi ≈ 1} ≈ 2 dari union ~16 → **Jaccard ≈ 0.13 (< 0.4 ✓)**. *Catatan: kedua subtopik irisan itu di artikel Juni hanya berfungsi sebagai bukti pendukung tesis "SAP boleh jalan di IaaS"; di sini keduanya menjadi **dasar dimensi komparasi** dan dibedah pada level yang berbeda (per keluarga instance, per hyperscaler, per region).*

- **Cek permukaan dedup lain**: vs `saas-paas-iaas-c01` (2026-07) ≈ 0.04 — "hyperscaler" di sana hanya kata lewat dalam contoh IaaS. Vs `cloud-computing-c01` (row 2 batch ini) ≈ 0.05 — pillar cloud/NIST, tanpa SAP maupun hyperscaler spesifik. Vs `cloud-erp-vs-on-premise-c01` ≈ 0.06. Vs `checklist-migrasi-rise-c01`, `timeline-migrasi-rise-c01`, `sap-ecc-2027-c01` ≈ 0.05–0.08 (RISE/migrasi, bukan pemilihan platform). Vs cluster `erp-migration-to-the-cloud` (history, 8 artikel) ≈ 0.05. Vs `data-lake-vs-data-warehouse-c01` & `etl-c01` ≈ 0.02 (AWS/GCP hanya disebut sebagai contoh penyimpanan). **angle_hash `sha1:736d44d3e861` tidak berbenturan** dengan 83 hash yang diperiksa di `articles_history/index.json` (51) + `conditional/2026-06` (14) + `conditional/2026-07` (14) + `conditional/2026-08` (sibling: `sku-c01`, `cloud-computing-c01`). **Hasil dedup: DISTINCT — aman ditulis, dengan boundary di atas + cousin link wajib ke halaman EN live.**

- **Kedua brief tetangga secara eksplisit MENYISAKAN angle ini untuk artikel tersendiri** (bukti tambahan bahwa ini gap yang direncanakan, bukan kanibalisasi):
  - `iaas-untuk-sap-c01` → *"Perbandingan head-to-head **AWS vs Azure vs Google Cloud untuk SAP** (artikel komparasi tersendiri)."*
  - `saas-paas-iaas-c01` → *"Perbandingan **AWS vs Azure vs GCP** dan biaya/TCO per model layanan — kandidat artikel terpisah bila cluster IaaS dikembangkan."*

## Article skeleton — H2s the writer should expand (BATCH OVERRIDE: 3–4 H2 SAJA)

> Lead ≤80 kata (pain konkret + entitas SAP/AWS/Azure/GCP + janji artikel, TANPA roadmap) → definition snippet blockquote "Ringkasnya:" 40–60 kata → body 4 H2 ramping → FAQ 2–3 → Kesimpulan ≤80 kata → soft CTA baris terakhir. **DILARANG H2 definitional "Apa itu hyperscaler?"** — snippet sudah menuntaskannya, dan tidak ada info baru yang cukup untuk membenarkan H2 tersendiri. Body langsung masuk sertifikasi, komparasi, caveat, kriteria.
>
> **Budget kata (panduan, total ≈ 915):** lead 75 · snippet 50 · H2#1 130 · H2#2 190 (termasuk sel tabel) · H2#3 155 · H2#4 120 · FAQ 3×45 = 135 · Kesimpulan 75 · CTA 20.
>
> **Nada wajib (instruksi tracker): NETRAL & FAKTUAL.** Artikel ini **tidak menobatkan pemenang**. Setiap dimensi dibandingkan pada fakta yang bisa dicek pembaca. **DILARANG**: klaim performa/kecepatan/stabilitas komparatif ("AWS paling kencang", "Azure paling stabil", "GCP paling murah"), klaim *downtime*, klaim harga, dan menyalin sudut pesaing (Nitro System / NetApp Files / BigQuery-Vertex AI) — semuanya tidak terverifikasi dan melanggar `style_guide.md` §10.

**Lead (≤80 kata)** — pain konkret: keputusan "SAP pindah ke cloud" sudah diambil, lalu rapat berikutnya macet di "AWS, Azure, atau GCP?", dan tiap vendor mengklaim dirinya paling cocok. Sebut keempat entitas (SAP, AWS, Azure, GCP) di kalimat pertama/kedua. **TANPA paragraf roadmap** ("artikel ini akan membahas…" → dilarang; satu klausa janji di akhir lead cukup).

**Definition snippet (blockquote "Ringkasnya:", 40–60 kata)** — satu-satunya tempat definisi muncul. Arah: *"Ringkasnya: hyperscaler adalah penyedia cloud publik berskala global — Amazon Web Services (AWS), Microsoft Azure, dan Google Cloud yang paling umum dipakai untuk SAP. Ketiganya sama-sama menjalankan SAP secara resmi dan sama-sama punya region di Indonesia. Pembedanya bukan 'bisa atau tidak', melainkan konfigurasi tersertifikasi mana yang tersedia di region yang Anda tuju."* (writer boleh poles, jaga 40–60 kata. **INI satu-satunya definisi** — body dilarang menyatakannya ulang dengan kata lain, termasuk di jawaban langsung tiap H2.)

1. **H2 #1 (question-format)**: *"Apakah AWS, Azure, dan GCP Sama-Sama Tersertifikasi untuk SAP?"*
   *Covers*: jawaban langsung 40–60 kata berisi **poin BARU dan paling sering salah dipahami**: jawabannya ya, **tetapi sertifikasi tidak melekat pada hyperscaler-nya** — yang tersertifikasi adalah **tipe instance / machine type / VM size tertentu**, dan daftarnya dipegang SAP di **SAP Certified and Supported SAP HANA Hardware Directory**, bukan di materi pemasaran hyperscaler. Jadi "AWS certified untuk SAP" adalah penyederhanaan yang menyesatkan saat *sizing*.
   Lalu elaborasi ringkas (1–2 paragraf): tiap hyperscaler bekerja dengan SAP untuk menguji & mensertifikasi konfigurasi (compute, memori, jaringan, storage); daftar resminya per platform juga dirujuk lewat SAP Note (AWS: **SAP Note 1656099**; Azure: **SAP Note 1928533**) — *sebut nomor Note hanya sebagai rujukan, JANGAN mengutip isinya (butuh SAP Portal login, tidak terverifikasi run ini)*.
   ***Honest hedging wajib (1–2 kalimat, pengganti H2 counter-conventional per addendum §2)***: instance yang **tidak** tersertifikasi tetap ada dan boleh dipakai — tetapi **hanya untuk beban non-produksi** (dev/test), merujuk **SAP Note 2271345**. Memakainya untuk sistem produksi berarti keluar dari batas dukungan. *(Sumber: dokumentasi AWS, terverifikasi run ini — lihat E-E-A-T.)*
   *Angka inline*: SAP Note 1656099, 1928533, 2271345.
   *Batas*: **JANGAN** menjelaskan apa itu SAP HANA/in-memory (milik artikel lain), **JANGAN** masuk ke shared responsibility.
   *Word budget*: ~130 kata.

2. **H2 #2 (praktis/terstruktur — CORE, TABEL, supporting keyword `hyperscaler untuk sap`)**: *"Perbandingan AWS, Azure, dan GCP untuk SAP: Region Indonesia dan Cakupan Sertifikasi"*
   *Covers*: jawaban langsung 40–60 kata berisi poin BARU: **ketiganya kini punya infrastruktur di Indonesia**, sehingga pertanyaan "adakah region lokal?" — yang beberapa tahun lalu menjadi pembeda utama — **sudah selesai**. Yang tersisa sebagai pembeda: keluarga instance tersertifikasi yang ditawarkan, dan sejak kapan region itu beroperasi (menentukan kematangan layanan di dalamnya).
   **TABEL (elemen terstruktur utama — dirancang agar bisa dikutip baris-per-baris oleh AI Overview).** Semua sel di bawah **sudah diverifikasi run ini dari sumber resmi** (lihat E-E-A-T; researcher tetap konfirmasi ulang):

   | Dimensi | AWS | Microsoft Azure | Google Cloud |
   |---|---|---|---|
   | Region di Indonesia | Asia Pacific (Jakarta) — `ap-southeast-3` | Indonesia Central | Jakarta — `asia-southeast2` |
   | Beroperasi sejak | Desember 2021 | April 2025 | Juni 2020 |
   | Availability zone di region tsb. | 3 | 3 | 3 |
   | Keluarga instance tersertifikasi SAP HANA (contoh) | R-series (r5/r6i/r7i/r8i), X-series, U-series *High Memory* | M-series (termasuk Mv2/Mv3) | M-series (M1–M4), X4, serta N2/C3/C4 *high-mem* |
   | Sumber daftar sertifikasi | SAP HANA Hardware Directory + SAP Note 1656099 | SAP HANA Hardware Directory + SAP Note 1928533 | SAP HANA Hardware Directory + dokumentasi Google Cloud |

   *Setelah tabel* — 1 paragraf pendek (**bukan** adu keunggulan): baca tabel ini sebagai **peta kelayakan, bukan papan skor**. Ketiganya memenuhi syarat dasar; selisih tahun beroperasi (Juni 2020 vs Desember 2021 vs April 2025) hanya berarti **kedalaman katalog layanan di region itu bisa berbeda** — dan itu justru mengantar ke H2 #3. **Cousin link ditempatkan di sini atau di H2 #4** (lihat Internal links).
   *Batas*: **JANGAN** menambah baris "performa", "harga", "SLA", atau "best fit/cocok untuk" — semuanya tidak terverifikasi (baris *Best Fit* adalah sudut halaman EN live; jangan diduplikasi).
   *Word budget*: ~190 kata termasuk sel tabel.

3. **H2 #3 (question-format — INI PEMBEDA UTAMA ARTIKEL)**: *"Apakah Region Jakarta Otomatis Berarti SAP Bisa Berjalan di Sana?"*
   *Covers*: jawaban langsung 40–60 kata berisi poin BARU yang **tidak dimiliki satu pun pesaing**: **tidak otomatis**. Region tersedia dan instance tersertifikasi tersedia **adalah dua hal berbeda**. Katalog instance bervariasi antar-region, bahkan antar-*availability zone* dalam satu region — jadi konfigurasi SAP yang Anda rencanakan wajib dicek ketersediaannya **di region tujuan**, bukan diasumsikan dari brosur global.
   Bukti (sitasi eksternal — **inilah 2 sitasi otoritatif artikel ini**; keduanya terverifikasi run ini):
   - **AWS** menyatakan keluarga instance tertentu — disebut eksplisit X1, X2idn, X2iedn, dan *High Memory* — mungkin tidak tersedia di semua *availability zone* dalam satu region, dan mewajibkan konfirmasi ketersediaan tipe instance di *availability zone* tujuan **pada tahap perencanaan**. *(docs.aws.amazon.com — lihat E-E-A-T.)*
   - **Google Cloud** menyatakan sebagian machine type tidak tersedia di semua region Google Cloud, dan mengarahkan pembaca mengecek ketersediaan region per machine type. *(docs.cloud.google.com — lihat E-E-A-T.)*
   Lalu **aturan praktis (list ber-lead-in bold, 3 butir — elemen terstruktur #2, ringkas)**: **Tetapkan konfigurasi dulu, baru region** — mulai dari kebutuhan *sizing* SAP, lalu cek apakah instance-nya ada di Jakarta; **Cek di level availability zone**, bukan level region — arsitektur *high availability* butuh instance yang sama tersedia di lebih dari satu AZ; **Siapkan rencana cadangan** — bila konfigurasi yang dibutuhkan belum ada di region Indonesia, opsinya region terdekat (Singapura) dengan konsekuensi residensi data, atau konfigurasi berbeda. *(Sebut residensi data **maksimal 1 klausa**, tanpa nomor regulasi — lihat peringatan verifikasi.)*
   *Word budget*: ~155 kata.

4. **H2 #4 (pendek — kriteria + jembatan funnel)**: *"Lalu, Kriteria Apa yang Menentukan Pilihan?"*
   *Covers*: jawaban langsung 40–60 kata berisi poin BARU: karena ketiganya lolos syarat dasar, **keputusan jarang ditentukan oleh hyperscaler-nya sendiri** — melainkan oleh tiga hal di luar itu: ketersediaan konfigurasi tersertifikasi di region tujuan, komitmen/ekosistem cloud yang sudah berjalan di perusahaan, dan model operasi yang dipilih. Karena itu perusahaan berbeda bisa mengambil keputusan berbeda **dan keduanya benar**.
   Lalu **list ber-lead-in bold (3 butir, ringkas)**: **Ketersediaan konfigurasi di region tujuan** (hasil H2 #3 — ini penyaring pertama, bukan terakhir); **Ekosistem & komitmen yang sudah ada** (kontrak, tim, dan *tooling* cloud yang sudah berjalan lebih menentukan biaya perpindahan daripada selisih fitur); **Model operasi** — 1 kalimat: pada jalur **RISE with SAP**, infrastruktur berjalan di hyperscaler tetapi dikontrakkan lewat SAP, sehingga pertanyaan pemilihan platform tetap ada dengan mekanisme berbeda. **⚠️ Batas keras: RISE cukup 1 kalimat sebagai dimensi; JANGAN membedah RISE vs self-managed (milik `iaas-untuk-sap-c01`) dan JANGAN mengklaim hyperscaler mana saja yang tersedia di RISE tanpa verifikasi SAP official** (lihat peringatan verifikasi).
   Tutup dengan 1 kalimat yang menyerahkan urusan "apa & mengapa IaaS" ke **cousin link** — sekaligus penempatan **hub link** bila belum dipakai (lihat Internal links).
   *Word budget*: ~120 kata.

5. **FAQ (2–3 Q&A, jawaban 30–60 kata, tiap jawaban memuat 1 fakta/angka)** — ambil dari PAA. **Q1 & Q2 wajib; Q3 hanya jika word count masih di bawah 950.** *Catatan dedup: `iaas-untuk-sap-c01` sudah punya FAQ "Apakah SAP bisa berjalan di AWS, Azure, atau Google Cloud?" — **JANGAN menyalin rumusan itu**; ketiga Q di bawah sengaja dibedakan.*
   - **Q1. "Hyperscaler mana yang terbaik untuk SAP?"** (PAA #2) — tidak ada yang unggul universal, dan itu bukan jawaban diplomatis: AWS, Microsoft Azure, dan Google Cloud sama-sama punya konfigurasi tersertifikasi SAP HANA dan sama-sama punya region di Indonesia dengan 3 *availability zone*. Yang menentukan: konfigurasi tersertifikasi mana yang tersedia di region tujuan Anda. *(fakta/angka: 3 AZ.)*
   - **Q2. "Apakah semua tipe server di AWS, Azure, atau GCP bisa dipakai untuk SAP HANA produksi?"** (PAA #5) — tidak. Hanya tipe yang terdaftar di SAP Certified and Supported SAP HANA Hardware Directory yang boleh menjalankan SAP HANA produksi. Tipe non-certified tetap boleh dipakai, tetapi terbatas pada beban non-produksi seperti *development* dan *testing*, merujuk SAP Note 2271345. *(fakta/angka: SAP Note 2271345.)*
   - **Q3 (opsional). "Apakah AWS, Azure, dan Google Cloud punya region di Indonesia?"** (PAA #4) — ya, ketiganya. Google Cloud membuka region Jakarta (`asia-southeast2`) pada Juni 2020, AWS membuka Asia Pacific (Jakarta) (`ap-southeast-3`) pada Desember 2021, dan Azure Indonesia Central tersedia umum sejak April 2025. Masing-masing memiliki 3 *availability zone*. *(fakta/angka: 3 tanggal + 3 AZ.)* **Maksimal 55 kata.**

6. **## Kesimpulan** — ≤80 kata: bukan ringkasan bertele-tele. Tegaskan pembalikan pertanyaannya: yang menentukan bukan "hyperscaler mana yang terbaik", melainkan **"konfigurasi tersertifikasi yang kita butuhkan tersedia di region mana"** — pertanyaan yang jawabannya bisa dicek, bukan diperdebatkan. **1 positioning line Soltius** (self-mention #1 — lihat anchor). CTA konsultatif.

7. **Soft website CTA (baris terakhir, paragraf terpisah)** — ajakan halus mengunjungi soltius.co.id (self-mention #2); anchor funnel: **SAP on AWS/Azure/GCP** (per tracker).

(≥1 question-format: H2 #1, #3, #4 ✓; ≥1 praktis/terstruktur dengan tabel/list: H2 #2 tabel komparasi + H2 #3 & #4 list ber-lead-in bold ✓; H2 honest DIGANTI honest-hedging di H2 #1 (instance non-certified) + H2 #3 (region ≠ ketersediaan) — sesuai style_addendum §2; ≥4 angka spesifik inline: 3 tanggal region (Juni 2020 / Desember 2021 / April 2025), 3 AZ ×3, SAP Note 1656099/1928533/2271345, kode region ap-southeast-3 & asia-southeast2 ✓. **DILARANG menulis {IMAGE_NN} dalam bentuk apa pun** — tabel komparasi menggantikan seluruh kebutuhan visual.)

## SAP / partner tech to teach (keyword tidak ada di `product_matrix.md` — framing universal tetap berlaku)

> `sap di aws azure gcp` topik conditional/ad-hoc. Mapping diturunkan dari tracker (CTA anchor: **SAP on AWS/Azure/GCP**) + `company_profile.md` (Soltius punya solusi **Cloud**; mitra teknologi **Huawei Cloud**) + riset run ini. Baris terdekat di `product_matrix.md` = **ERP migration to the cloud** (RISE/S4HANA Cloud) — dipakai sebagai rujukan framing, bukan sebagai topik. Aturan universal berlaku penuh: **implements-not-builds**, ≤2 self-mention (override addendum §6), tanpa superlatif, tanpa spec karangan.

Konsep yang dijelaskan akurat & vendor-neutral:
- **Hyperscaler** — penyedia cloud publik berskala global; tiga yang dibandingkan: **Amazon Web Services (AWS)**, **Microsoft Azure**, **Google Cloud**. Nama penuh di sebutan pertama, akronim di-expand sekali.
- **Sertifikasi SAP untuk infrastruktur cloud** — melekat pada **tipe instance / machine type / VM size**, terdaftar di **SAP Certified and Supported SAP HANA Hardware Directory**. Ini konsep inti artikel.
- **Region & availability zone** — Asia Pacific (Jakarta) `ap-southeast-3`; Indonesia Central; Jakarta `asia-southeast2`. Glosakan *availability zone* sekali ("zona ketersediaan").
- **RISE with SAP** — disebut **1 kalimat saja** sebagai dimensi model operasi. Jangan bedah paketnya.

**Fakta yang WAJIB diverifikasi researcher (jangan diklaim tanpa sumber):**
- **Tanggal & kode region** — sudah diverifikasi run ini dari sumber resmi (AWS blog: 13 Desember 2021, `ap-southeast-3`, 3 AZ; Microsoft News ID: GA **15 April 2025**, 3 AZ; Google Cloud: **24 Juni 2020**, `asia-southeast2`, 3 zona). ⚠️ **Kejanggalan tanggal Azure yang harus diselesaikan**: `news.microsoft.com/id-id` menyebut **GA 15 April 2025**, sementara sejumlah sumber menulis peluncuran **27 Mei 2025** — halaman Microsoft sendiri menjelaskan 27 Mei 2025 adalah **acara peluncuran** (AI Tour Jakarta), bukan tanggal GA. **Pakai "April 2025" (GA) dan jangan mencampur keduanya.**
- **Keluarga instance tersertifikasi** — AWS (R/X/U-series) & Google Cloud (M1–M4, X4, N2/C3/C4 high-mem) **terverifikasi run ini dari dokumentasi resmi**. **Azure (M-series/Mv2/Mv3) BELUM terverifikasi dari halaman resmi Microsoft dalam run ini** (sumber yang ditemukan: blog Azure + techcommunity). **Researcher WAJIB konfirmasi dari `learn.microsoft.com` (mis. `azure/sap/workloads/hana-vm-operations`) atau dari SAP HANA Hardware Directory. Bila tidak terkonfirmasi, longgarkan sel tabel menjadi "M-series (memory-optimized)" tanpa merinci generasi.** Tulis semua sel sebagai **contoh keluarga instance, bukan daftar lengkap** — daftar berubah cepat.
- **SAP Note 1656099 / 1928533 / 2271345** — nomornya dirujuk dokumentasi AWS/Microsoft, tetapi **isinya butuh SAP Portal login dan TIDAK terverifikasi run ini**. Sebut **hanya sebagai rujukan** ("merujuk SAP Note 2271345"); **JANGAN mengutip isi Note-nya.**
- **SAP HANA Hardware Directory** — `sap.com/dmc/exp/2014-09-02-hana-hardware/...` **memblokir WebFetch (403)**, sama seperti `support.sap.com/en/offerings-programs/ccoe/sap-hyperscalers.html` (403). Keberadaan & fungsi direktori ini **terverifikasi secara tidak langsung** lewat dokumentasi resmi AWS dan Google Cloud yang menautinya. **Cukup sebut namanya + fungsinya; jangan mengklaim isi spesifik direktori.**
- **RISE with SAP & pilihan hyperscaler** — sumber yang ditemukan run ini (`saplicensingexperts.com`) adalah **blog konsultan lisensi, BUKAN sumber otoritatif**; klaimnya (default Azure, hemat 15–25%, pilihan IBM/Alibaba) **JANGAN dipakai**. Bila SAP official tidak dapat diakses (403 berulang), **batasi kalimat RISE pada level paling aman**: "infrastruktur berjalan di hyperscaler, tetapi dikontrakkan lewat SAP" — tanpa menyebut hyperscaler mana saja yang tersedia.
- **Regulasi (UU PDP / PP 71/2019)** — muncul di hasil pencarian tetapi **bersumber dari blog vendor**. **JANGAN menyebut nomor regulasi apa pun di artikel ini.** Cukup 1 klausa "residensi data" tanpa dasar hukum. Topik ini milik halaman EN live + `2026-06-erp-migration-to-the-cloud-04`.
- **Klaim performa/downtime/harga komparatif** — **DILARANG TOTAL** (instruksi tracker). Sumber yang beredar (Nitro System, NetApp Files, statistik downtime, "GCP live migration") berasal dari blog konsultan tanpa data yang dapat diverifikasi.
- **"Region terdekat = Singapura"** (dipakai di H2 #3, aturan praktis #3) — verifikasi bahwa ketiga hyperscaler punya region Singapura; bila ragu, longgarkan jadi "region terdekat di Asia Tenggara" tanpa menyebut kota.

## Soltius anchor (BATCH OVERRIDE: maks 2 self-mention)

- **1 positioning line di Kesimpulan**: Soltius — **SAP Platinum Partner melalui United VARs** (pilih SATU kredensial; alternatif yang relevan: pengakuan **Best Cloud Partner / Best RISE Partner**, 2021) — **mengimplementasikan dan mendampingi** SAP di atas platform hyperscaler, dari pemilihan region & konfigurasi hingga dukungan pasca go-live. (Framing: implements/migrates/supports, **NEVER builds/owns**; tanpa superlatif.)
- **1 soft website CTA** (baris terakhir): ajakan konsultasi/mengunjungi soltius.co.id — anchor funnel: **SAP on AWS/Azure/GCP** (per tracker).
- **TANPA aside Soltius di tengah body** (style_addendum §6). Sentuhan praktisi di body boleh TANPA nama Soltius (mis. "di lapangan, keputusan hyperscaler lebih sering ditentukan oleh kontrak yang sudah berjalan ketimbang oleh selisih spesifikasi").
- **⚠️ Guardrail khusus artikel bertema cloud** (`product_matrix.md` blacklist + `style_guide.md` §11): godaan terbesar adalah menulis seolah **Soltius menjual/menyediakan cloud** — jangan. Soltius **bukan** hyperscaler dan **bukan** penyedia cloud; Soltius mengimplementasikan SAP **di atas** platform milik pihak lain. Juga **jangan memposisikan Huawei Cloud** (mitra teknologi Soltius, muncul di halaman hub) **sebagai milik Soltius** — dan **jangan menyeret Huawei Cloud masuk ke komparasi**; artikel ini tentang tiga hyperscaler yang diminta tracker.

## Internal links to place (BATCH OVERRIDE: 2 SAJA — 1 hub + 1 cousin, inline natural, tanpa "BACA JUGA")

> `landing_page` kosong di sheet → hub dipilih strategist (keputusan standing sejak Juni). Kedua URL **sudah diverifikasi resolve/200 OK via WebFetch run ini (2026-07-17)**. Penulis tetap cek ulang saat menulis.

- **Hub (halaman soltius.co.id paling relevan)**: `https://www.soltius.co.id/id/solutions-by-products/cloud` — anchor natural: "solusi cloud" / "solusi cloud untuk SAP" — *why*: halaman solusi **Cloud** adalah hub yang paling dekat dengan topik dan **sejalan langsung dengan CTA anchor SAP on AWS/Azure/GCP** per tracker. Diverifikasi run ini: halaman menyebut **Google Cloud** sebagai *"secure, intelligent, flexible and certified platform for SAP"* dan **AWS** sebagai penyedia infrastruktur cloud — relevansi topikal tinggi. Tempatkan di H2 #4 atau dekat Kesimpulan/CTA. *Catatan untuk writer:* (1) halaman ini **tidak menyebut Azure**; itu tidak masalah — pakai anchor generik "solusi cloud", **jangan** menulis seolah halaman itu mencakup ketiganya. (2) Halaman ini menampilkan **Huawei Cloud**; bila terlihat, framing sebagai mitra teknologi yang **didukung/diimplementasikan** Soltius — paling aman: jangan sebut sama sekali.
- **Cousin**: `https://www.soltius.co.id/blog/read/sap-in-the-cloud-why-iaas-aws-azure-gcp-is-the-strategic-choice-for-enterprise-indonesia` — anchor natural: "mengapa enterprise memilih IaaS untuk SAP" / "alasan strategis memilih IaaS untuk SAP" — *why*: **tautan ini punya fungsi ganda**. (1) Relevansi: artikel Soltius yang paling berdekatan topiknya (IaaS untuk SAP di AWS/Azure/GCP untuk enterprise Indonesia). (2) **Fungsi dedup**: halaman itu memegang "apa & mengapa IaaS" + UU PDP/data sovereignty, sehingga artikel ini bisa **menyerahkan** seluruh materi tersebut lewat tautan alih-alih mengulangnya — persis pola yang diinginkan `cloud-computing-c01` tetapi tidak bisa dipakai di sana karena spoke-nya belum live. Tempatkan setelah tabel H2 #2 atau di H2 #4. **Preseden bahasa:** halaman berbahasa Inggris ditautkan dari artikel Bahasa Indonesia sudah menjadi praktik yang diterima di pipeline ini (hub `sap-clean-core` berbahasa Inggris — lihat `product_matrix.md` §6). Anchor tetap Bahasa Indonesia. *Fallback bila editor menilai cousin berbahasa Inggris mengganggu:* `https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud` (anchor: "migrasi ERP ke cloud"; hub Bahasa Indonesia, terverifikasi 200 run ini, judul "Panduan Migrasi ERP ke Cloud 2025: Strategi & Roadmap") — **tetapi cousin utama lebih dipilih karena fungsi dedup-nya.**

(2 tautan, keduanya existing & natural inline. Tidak ada own-hub blog untuk keyword ini karena topik baru — dicatat sesuai mode conditional.)

## E-E-A-T signals to embed

- **Angka/fakta spesifik** (≥4 angka inline per addendum §4): **3 tanggal region** (Google Cloud Jakarta Juni 2020 · AWS Asia Pacific (Jakarta) Desember 2021 · Azure Indonesia Central April 2025); **3 availability zone** di masing-masing region; **kode region** `ap-southeast-3` & `asia-southeast2`; **SAP Note 1656099 / 1928533 / 2271345** (sebagai rujukan). JANGAN mengarang angka pangsa pasar, harga, SLA, atau *downtime*.
- **Authoritative sources to cite (≥2 — sitasi final 1–2 inline di artikel; keduanya di H2 #3):**
  1. **AWS Documentation — "Amazon EC2 instance types for SAP on AWS"** — `https://docs.aws.amazon.com/sap/latest/general/ec2-instance-types-sap.html` — **terverifikasi run ini (WebFetch, 200 OK)**. Memuat pernyataan eksplisit: keluarga instance tertentu (X1, X2idn, X2iedn, *High Memory*) *"might not be available across all Availability Zones in a Region"* dan *"You must confirm while planning that the instance types required for your SAP workloads are available in your target Availability Zone."* Juga menautkan **SAP Certified and Supported SAP HANA Hardware Directory** dan **SAP Note 1656099**. **Ini sitasi utama H2 #3.**
  2. **Google Cloud Documentation — "Certifications for SAP HANA on Google Cloud"** — `https://docs.cloud.google.com/sap/docs/certifications-sap-hana` — **terverifikasi run ini (WebFetch, 200 OK; catatan: `cloud.google.com/sap/docs/...` melakukan redirect 301 ke `docs.cloud.google.com/...` — pakai URL `docs.` langsung)**. Memuat daftar machine type tersertifikasi produksi SAP HANA (N1/N2 high-mem, C3/C4, M1–M4, X4 bare metal), merujuk *"SAP lists the certified machine types for SAP HANA in the Certified and supported SAP HANA hardware directory"*, dan menyatakan *"Some machine types are not available in all Google Cloud regions."* **Sitasi kedua H2 #3.**
  3. (Pendukung tabel H2 #2, boleh dipakai bila butuh sitasi ketiga — **maksimal 2 sitasi inline total**, pilih yang paling kuat) **AWS News Blog — "Now Open – AWS Asia Pacific (Jakarta) Region"** — `https://aws.amazon.com/blogs/aws/now-open-aws-asia-pacific-jakarta-region/` (terverifikasi 200; 13 Desember 2021, `ap-southeast-3`, 3 AZ) · **Microsoft Indonesia News — "General Availability of Indonesia Central Cloud Region"** — `https://news.microsoft.com/id-id/2025/04/15/general-availability-of-indonesia-central-cloud-region/` (terverifikasi 200; GA 15 April 2025, 3 AZ) · **Google Cloud Blog — "The new Google Cloud region in Jakarta is now open"** — `https://cloud.google.com/blog/products/infrastructure/new-google-cloud-region-in-jakarta-now-open` (24 Juni 2020, `asia-southeast2`, 3 zona — **researcher konfirmasi langsung**).
  4. **⚠️ Sumber yang MEMBLOKIR akses otomatis (jangan dijadikan sitasi inline tanpa konfirmasi manual):** `support.sap.com/en/offerings-programs/ccoe/sap-hyperscalers.html` (**403**), `sap.com/dmc/exp/2014-09-02-hana-hardware/...` (**403**). Konsisten dengan catatan run 2026-06/2026-07 bahwa `sap.com` kerap 403.
- **First-party Soltius angle**: pengalaman mengimplementasikan & mendampingi SAP di atas platform hyperscaler (solusi **Cloud** + layanan **Migration** per `company_profile.md`; halaman hub menyebut Google Cloud & AWS) — dipakai di positioning line Kesimpulan. Tanpa nama klien atau angka proyek karangan.

## AI Overview & GEO optimization (seo_playbook §2a, dipadatkan per addendum §5)

- **Definition snippet blockquote** setelah lead — "Ringkasnya:" 40–60 kata (arah lengkap ada di Article skeleton). **INI satu-satunya definisi** — body dilarang menyatakannya ulang dengan kata lain, termasuk di jawaban langsung tiap H2.
- **Jawaban langsung 40–60 kata segera setelah TIAP H2** berisi poin baru milik H2 itu (sertifikasi melekat pada tipe instance, bukan hyperscaler · pertanyaan "adakah region lokal" sudah selesai untuk ketiganya · region tersedia ≠ instance certified tersedia · keputusan ditentukan di luar hyperscaler-nya), **BUKAN** parafrase snippet.
- **Satu paragraf = satu poin quotable & verifiable.** Tabel H2 #2 dirancang agar tiap baris berdiri sendiri saat dikutip AI Overview.
- **Entity list** (nama penuh saat sebutan pertama, akronim di-expand sekali): Amazon Web Services (AWS), Microsoft Azure, Google Cloud, SAP HANA, SAP S/4HANA, SAP Certified and Supported SAP HANA Hardware Directory, RISE with SAP, hyperscaler, availability zone (zona ketersediaan), Asia Pacific (Jakarta) / `ap-southeast-3`, Indonesia Central, Jakarta / `asia-southeast2`.
- **Format match**: tabel untuk komparasi (H2 #2 — sesuai catatan tracker "Format X vs Y; tabel"); list ber-lead-in bold untuk aturan praktis (H2 #3) & kriteria (H2 #4); prosa untuk sertifikasi (H2 #1). **Jangan paksa elemen berlebih hingga melampaui 1000 kata.**
- **FAQ**: 2–3 Q&A, parseable FAQPage schema; `dateModified` akurat di meta block.

## Data captured this run

- **Source(s)**: WebSearch (Google ID + EN, 2026-07-17, 8 kueri) — peta pesaing, PAA turunan, region Indonesia, sertifikasi SAP HANA per hyperscaler, RISE hyperscaler choice. WebFetch: `docs.aws.amazon.com/sap/.../ec2-instance-types-sap.html` (✅ 200 — fakta ketersediaan instance per AZ), `docs.aws.amazon.com/sap/.../sap-hana-aws-ec2.html` (✅ 200 — daftar certified/non-certified + SAP Note 2271345), `docs.cloud.google.com/sap/docs/certifications-sap-hana` (✅ 200 via redirect 301 dari `cloud.google.com` — fakta machine type certified + "not available in all regions"), `aws.amazon.com/blogs/aws/now-open-aws-asia-pacific-jakarta-region/` (✅ 200 — 13 Des 2021, ap-southeast-3, 3 AZ), `news.microsoft.com/id-id/2025/04/15/...` (✅ 200 — GA 15 April 2025, 3 AZ), `soltius.co.id/id/solutions-by-products/cloud` (✅ 200 — hub), `soltius.co.id/blog/read/sap-in-the-cloud-why-iaas-aws-azure-gcp-...` (✅ 200 — cousin + temuan dedup), `soltius.co.id/id/blog/migrasi-erp-ke-cloud` (✅ 200 — fallback cousin), `support.sap.com/.../sap-hyperscalers.html` (❌ 403), `sap.com/dmc/exp/2014-09-02-hana-hardware/...` (❌ 403). WebFetch SERP Google **terblokir** (halaman error/consent) — fallback WebSearch sesuai SOP `CLAUDE.md` §11.
- **Apr 2026 rank** (from report): `n/a` — keyword di luar 6 keyword `seo_report_apr2026.md` (topik conditional/ad-hoc baru).
- **Volume / KD / trend**: `n/a (Ahrefs not connected)`. Sinyal kualitatif: **SERP Bahasa Indonesia untuk kueri ini praktis kosong** — hasil yang ada berbahasa Inggris/Jerman (blog konsultan, ASUG, UpperEdge, Medium) atau Bahasa Indonesia tanpa SAP (berca.co.id, domainesia, telkomuniversity). Volume kemungkinan lebih rendah daripada kueri definisional seperti `cloud computing`, tetapi **intent-nya jauh lebih dalam (consideration/decision) dan kompetisi lokalnya nyaris nol** → peluang ranking + AI-citation tinggi dengan effort moderat. Satu-satunya aset Soltius di ruang ini berbahasa Inggris (lihat temuan dedup) → artikel ID ini melengkapi, bukan menyaingi.
- **SERP features present**: komparasi/listicle mendominasi; PAA + AI Overview sangat mungkin aktif untuk kueri komparatif ini (tidak terkonfirmasi langsung — scrape terblokir).
- **cache_source**: `n/a` — mode conditional `/single-article`; riset ditangkap inline di brief ini (tanpa cache per-keyword bulanan).

## Notes for SME researcher

- **Dossier RINGKAS saja** — artikel target 900 kata, 4 H2 ramping. Jangan kirim material untuk 1.650 kata.
- **Prioritas verifikasi #1 — sel tabel Azure**: keluarga instance tersertifikasi SAP HANA di Azure (M-series/Mv2/Mv3) **belum terverifikasi dari halaman resmi Microsoft** run ini. Konfirmasi via `learn.microsoft.com` (mis. `azure/sap/workloads/hana-vm-operations`) atau SAP HANA Hardware Directory. **Bila gagal, longgarkan sel jadi "M-series (memory-optimized)".** Jangan menyamakan bobot bukti antar-kolom tabel: AWS & GCP sudah kuat, Azure belum.
- **Prioritas verifikasi #2 — tanggal Azure Indonesia Central**: pakai **GA April 2025** (news.microsoft.com/id-id, 15 April 2025). **Jangan** memakai 27 Mei 2025 (itu tanggal acara peluncuran AI Tour Jakarta, bukan GA). Jangan campur keduanya.
- Konfirmasi **tanggal & kode region** AWS (13 Des 2021, `ap-southeast-3`) dan Google Cloud (24 Juni 2020, `asia-southeast2`) langsung dari blog resmi masing-masing; keduanya sudah ditemukan run ini.
- **SAP Note (1656099, 1928533, 2271345)**: butuh SAP Portal login. **Sebut nomornya sebagai rujukan saja; jangan mengutip isinya.** Bila ragu, hapus nomor Note kecuali 2271345 (yang fungsinya dikutip eksplisit oleh dokumentasi AWS publik).
- **`sap.com` & `support.sap.com` mengembalikan 403** untuk akses otomatis (pola yang sama tercatat di run 2026-06/2026-07). Keberadaan SAP HANA Hardware Directory sudah terkonfirmasi tidak langsung lewat dokumentasi AWS & Google Cloud yang menautinya — itu cukup. **Jangan mengklaim isi spesifik direktori.**
- **JANGAN menyediakan material** tentang: klaim performa/downtime/harga komparatif antar-hyperscaler (Nitro System, NetApp Files, BigQuery/Vertex AI, statistik downtime) — instruksi tracker melarangnya dan sumbernya blog konsultan; klaim RISE hyperscaler choice dari `saplicensingexperts.com` (bukan sumber otoritatif); nomor regulasi UU PDP/PP 71/2019 (bersumber blog vendor; topiknya milik artikel lain).
- **Boundary dedup (kritis)**: JANGAN menyediakan material tentang **apa/mengapa IaaS, karakteristik IaaS, IaaS vs PaaS vs SaaS, shared responsibility model, spektrum self-managed/partner-managed/RISE** (milik `iaas-untuk-sap-c01` 2026-06 + halaman EN live `sap-in-the-cloud-why-iaas-aws-azure-gcp-...`); JANGAN material **cloud vs on-premise** (milik `cloud-erp-vs-on-premise-c01`); JANGAN material **karakteristik/deployment model cloud & NIST** (milik `cloud-computing-c01`, row 2 batch ini); JANGAN material **RISE vs GROW / paket RISE** (milik `2026-08-erp-migration-to-the-cloud-01` & cluster RISE).
- **Verifikasi 2 URL internal** (`/id/solutions-by-products/cloud` + `/blog/read/sap-in-the-cloud-why-iaas-aws-azure-gcp-is-the-strategic-choice-for-enterprise-indonesia`) tetap 200/OK saat penulisan.
- Cek apakah ketiga hyperscaler punya **region Singapura** (dipakai sebagai "region terdekat" di H2 #3); bila tidak terverifikasi, longgarkan jadi "region terdekat di Asia Tenggara".

## Notes for future strategist runs

Artikel ini SENGAJA TIDAK mencakup (untuk menghindari kanibalisasi + disisakan untuk artikel lain):
- **Biaya/TCO menghosting SAP per hyperscaler** (perbandingan harga, *committed use discount*/EDP, *egress cost*) — kandidat artikel decision-stage tersendiri; **butuh riset sumber primer yang serius** karena harga hyperscaler berubah dan tidak boleh dikarang. Sudah dua kali ditunda (`iaas-untuk-sap-c01`, `saas-paas-iaas-c01`).
- **RISE with SAP & pilihan hyperscaler** sebagai keputusan komersial (default hyperscaler, negosiasi, BTP credit) — menarik dan bervolume, tetapi **sumber terbuka yang tersedia semuanya blog konsultan lisensi**; tunda sampai ada sumber SAP official yang dapat diakses.
- **Keamanan & residensi data SAP di cloud Indonesia** (UU PDP, PP 71/2019, *sovereign cloud*) — sebagian sudah dipegang halaman EN live + `2026-06-erp-migration-to-the-cloud-04`; artikel ID khusus regulasi masih mungkin, dengan riset hukum tersendiri.
- **Sizing SAP HANA** (cara menghitung kebutuhan memori/SAPS, memilih instance) — disinggung 1 klausa di H2 #3; layak artikel *how-to* teknis sendiri.
- **High availability & disaster recovery SAP di cloud** (multi-AZ, replikasi HANA, RPO/RTO) — hanya disinggung 1 butir di H2 #3; kandidat artikel arsitektur tersendiri.
- **Hyperscaler di luar tiga besar** (Huawei Cloud — mitra teknologi Soltius, Alibaba Cloud, IBM Cloud, penyedia lokal) — sengaja **tidak** masuk artikel ini karena tracker meminta tiga. Huawei Cloud khususnya adalah sudut yang secara komersial relevan bagi Soltius dan **layak artikel sendiri**.
- **Migrasi antar-hyperscaler / exit cost & lock-in** — pembeda yang menarik, sengaja ditahan.

## Format overrides (batch conditional 2026-08)

Restating dari `conditional/2026-08/style_addendum.md` — **MENGIKAT** untuk researcher, writer, editor, validator:

- **Panjang: 800–1000 kata (target ~900)** — hitungan body H1 s/d CTA, di luar frontmatter; `target_word_count: 900` di frontmatter, isi `word_count` aktual setelah menulis. <800 terlalu tipis; >1000 gagal (pangkas dengan membuang kalimat pengantar/transisi kosong dan contoh redundan, BUKAN memampatkan semua kalimat jadi telegram — ritme tetap bervariasi, paragraf 1–4 kalimat).
- **TANPA image placeholder** — dilarang menulis `{IMAGE_NN}` dalam bentuk apa pun; stage image-planner DILEWATI; tidak ada `images.json`. Konsep visual (komparasi tiga hyperscaler, region Indonesia) disampaikan lewat **tabel** di H2 #2.
- **FAQ: 2–3 Q&A** (bukan 5–8); jawaban 30–60 kata, tiap jawaban memuat 1 fakta/angka; ambil dari PAA di atas. **Q3 hanya bila word count masih di bawah 950.**
- **Internal link: TEPAT 2** — 1 hub (`/id/solutions-by-products/cloud`) + 1 cousin (`/blog/read/sap-in-the-cloud-why-iaas-aws-azure-gcp-is-the-strategic-choice-for-enterprise-indonesia`), inline natural, tanpa "BACA JUGA". Sitasi eksternal otoritatif **1–2 inline** (AWS docs + Google Cloud docs, keduanya di H2 #3).
- **Definisi HANYA SEKALI** — di definition snippet "Ringkasnya:" (40–60 kata) setelah lead. Body/H2 **DILARANG** mengulang definisi snippet dengan kata lain, termasuk di jawaban langsung 40–60 kata setelah tiap H2. **Tidak ada H2 definitional "Apa itu hyperscaler?"** — tidak ada info baru yang membenarkannya.
- **Prosa padat on-point** — tanpa paragraf roadmap, tanpa transisi kosong, tanpa pembuka klise; em-dash ≤2; tanpa adjektiva hype (anti-AI `style_guide.md` §5 berlaku penuh).
- **Lead ≤80 kata** (pain konkret + entitas SAP/AWS/Azure/GCP + janji artikel).
- **Kesimpulan ≤80 kata** + 1 positioning line Soltius; **soft website CTA (soltius.co.id) = baris paling akhir**, terpisah dari Kesimpulan. **Maks 2 mention Soltius total.**
- **3–4 H2** (≥1 question-format; ≥1 praktis/terstruktur dengan tabel); **≥4 angka spesifik inline**; jawaban langsung 40–60 kata setelah tiap H2 berisi poin BARU milik H2 itu.
- **Framing Soltius** (`style_guide.md` §11): implementator/pendamping SAP — **implements, migrates, supports — NEVER builds/owns**; dan **Soltius bukan penyedia cloud/hyperscaler**. Disiplin sitasi §10: JANGAN mengarang angka, tanggal, nomor SAP Note, harga, klaim performa, atau spec instance.
