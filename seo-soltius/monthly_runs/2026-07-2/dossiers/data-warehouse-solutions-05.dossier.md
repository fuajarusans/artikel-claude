---
brief_id: "data-warehouse-solutions-05"
researcher_run_date: "2026-07-07"
sources_cited: 9
flags: 5
---

# Research Dossier: SAP Business Data Cloud — Apa Artinya bagi Pembeli Data Warehouse SAP di 2026

## TL;DR for the writer

- **Ini artikel keputusan komersial, bukan head-to-head teknis.** Inti angle: sejak awal 2026, SAP Datasphere & SAP Analytics Cloud (SAC) **dihapus dari daftar Eligible Cloud Services untuk langganan BARU** pada skema BTPEA/CPEA/PAYG — keduanya kini dijual **melalui SAP Business Data Cloud (BDC)**. Ini **perubahan skema penjualan/kemasan komersial**, bukan penghentian produk. Jangan pernah menulis "Datasphere dihentikan/discontinued" — itu tidak akurat.
- **Dua tanggal yang harus dibedakan** (penting untuk akurasi): (1) **1 Januari 2026** — Datasphere & SAC dihapus dari Eligible Cloud Services untuk langganan baru BTPEA/CPEA/PAYG; (2) **2 Januari 2026** — tidak tersedia untuk perpanjangan (renewal) pada perjanjian BTPEA/CPEA/PAYG yang dimulai setelah tanggal itu; setelah 31 Desember 2025 tidak untuk renewal. Layanan yang sama tetap tersedia di BDC.
- **Pelanggan existing aman.** Tenant Datasphere/SAC yang sudah ada dipertahankan di bawah BDC, **tanpa migrasi teknis**. Pelanggan BTPEA/CPEA yang membeli cloud credits sebelum 1 Januari 2026 dapat terus memakainya sepanjang masa perjanjian.
- **BDC = payung platform data** yang menyatukan SAP Datasphere + SAP Analytics Cloud + SAP BW (modernisasi) + SAP Databricks (native) di atas konsep **business data fabric**, dengan **curated data products** dan **insight apps**. Diperkenalkan **13 Februari 2025** bersama kemitraan Databricks.
- **Fakta baru yang lebih segar dari brief** (opsional untuk dipakai writer): sejak **November 2025**, SAP menambah **SAP Snowflake** sebagai solution extension untuk BDC (GA direncanakan Q1 2026) — memperkuat narasi "business data fabric multi-engine", bukan hanya Databricks. Gunakan hati-hati (lihat Flags).

## Core facts (verified)

> **Claim**: SAP Datasphere & SAP Analytics Cloud dihapus dari daftar Eligible Cloud Services untuk langganan baru BTPEA/CPEA/PAYG.
> **Number/specific**: efektif **1 Januari 2026** untuk langganan baru; layanan yang sama tetap tersedia melalui SAP Business Data Cloud.
> **Source**: SAP Community (official SAP post) — "Announcement: SAP Datasphere and SAP Analytics Cloud Availability via SAP Business Data Cloud", https://community.sap.com/t5/technology-blog-posts-by-sap/announcement-sap-datasphere-and-sap-analytics-cloud-availability-via-sap/ba-p/14140920 — diakses 2026-07-07
> **Confidence**: high

> **Claim**: Layanan tidak tersedia untuk perpanjangan (renewal) pada skema BTPEA/CPEA/PAYG.
> **Number/specific**: tidak tersedia untuk renewal pada perjanjian yang dimulai **setelah 2 Januari 2026**; setelah **31 Desember 2025** tidak untuk renewal. Tetap dapat dipakai hingga akhir masa perjanjian berjalan.
> **Source**: SAP Community (official) — URL sama seperti di atas — diakses 2026-07-07
> **Confidence**: high (perhatikan nuansa dua tanggal — lihat Flags)

> **Claim**: Pelanggan Datasphere/SAC existing tidak terganggu; tenant dipertahankan di bawah BDC.
> **Number/specific**: **tidak diperlukan migrasi teknis**; tenant existing "preserved under SAP BDC". Pelanggan BTPEA/CPEA yang membeli cloud credits sebelum 1 Januari 2026 dapat terus memakainya sepanjang masa perjanjian.
> **Source**: SAP Community (official) — URL sama — diakses 2026-07-07
> **Confidence**: high

> **Claim**: SAP Business Data Cloud diperkenalkan bersama kemitraan Databricks.
> **Number/specific**: diumumkan **13 Februari 2025**; SAP Databricks natively embedded sebagai komponen BDC untuk data engineering, ML, dan AI.
> **Source**: SAP News Center — "SAP Debuts Business Data Cloud with Databricks to Turbocharge Business AI", https://news.sap.com/2025/02/sap-business-data-cloud-databricks-turbocharge-business-ai/ — diakses 2026-07-07
> **Confidence**: high

> **Claim**: BDC adalah SaaS yang menyatukan dan meng-govern data SAP dan pihak ketiga.
> **Number/specific**: "fully managed SaaS solution that unifies and governs all SAP data and seamlessly connects with third-party data"; evolusi dari solusi data, planning, dan analytics SAP — menyatukan SAP Datasphere, SAP Analytics Cloud, dan SAP Business Warehouse dalam satu pengalaman.
> **Source**: SAP News Center (Databricks announcement, 2025-02-13) + Databricks Newsroom (press release, 2025-02-13) — diakses 2026-07-07
> **Confidence**: high

> **Claim**: Komponen inti SAP Business Data Cloud.
> **Number/specific**: SAP Datasphere (integrasi, federasi, analytic modeling, self-service), SAP Analytics Cloud (dashboard, reporting, planning), SAP Databricks (native, AI/ML/data engineering), plus modernisasi SAP Business Warehouse, semua di atas **business data fabric** dengan **curated data products** dan **insight apps**.
> **Source**: SAP official — sap.com/products/data-cloud (product page) + learning.sap.com "Positioning SAP Business Data Cloud" — diakses 2026-07-07
> **Confidence**: high

> **Claim**: "Business data fabric" adalah arsitektur inti BDC.
> **Number/specific**: "an architecture that connects data and context in one governed foundation" — mencakup data integration, lakehouse, data products, data marketplace, semantics, knowledge graphs, dan modeling; menjadi fondasi tepercaya untuk AI/agentic AI.
> **Source**: SAP official — sap.com/products/data-cloud/business-data-fabric.html — diakses 2026-07-07
> **Confidence**: high

> **Claim**: "Data product" di BDC adalah dataset ter-kurasi dan ter-governance.
> **Number/specific**: "a curated, governed, and reusable dataset built using SAP's deep application knowledge, structured to be consumed by analytics and AI applications without requiring users to understand the underlying data model."
> **Source**: SAP Architecture Center (architecture.learning.sap.com "Data Products in SAP Business Data Cloud") — diakses 2026-07-07
> **Confidence**: high

> **Claim**: SAP Databricks dijual oleh SAP sebagai bagian dari BDC.
> **Number/specific**: "SAP Databricks is sold by SAP as part of SAP Business Data Cloud", tersedia dalam staged rollout di AWS, Azure, dan Google Cloud; menggunakan zero-copy Delta Sharing (bi-directional) sambil menjaga semantik data SAP.
> **Source**: Databricks Newsroom — "Databricks Announces Launch of SAP Databricks", https://www.databricks.com/company/newsroom/press-releases/databricks-announces-launch-sap-databricks — diakses 2026-07-07
> **Confidence**: high

> **Claim**: SAP menambahkan SAP Snowflake ke ekosistem BDC.
> **Number/specific**: diumumkan **November 2025** (SAP TechEd) sebagai **solution extension** untuk BDC; memperluas business data fabric dengan zero-copy sharing; **GA direncanakan Q1 2026**, SAP BDC Connect for Snowflake menyusul di paruh pertama 2026.
> **Source**: SAP News Center — "Introducing SAP Snowflake, New Data Fabric Innovations for SAP Business Data Cloud and SAP HANA Cloud", https://news.sap.com/2025/11/sap-snowflake-new-data-fabric-innovations-sap-bdc-sap-hana-cloud/ — diakses 2026-07-07
> **Confidence**: high (status GA per Q1 2026 — verifikasi ulang jika artikel menegaskan "sudah GA"; lihat Flags)

> **Claim**: SAP BW/4HANA tetap didukung jangka panjang.
> **Number/specific**: mainstream maintenance diperpanjang hingga **akhir 2040**, selaras dengan roadmap SAP S/4HANA dan SAP Business Suite. (SAP BW 7.5 — versi lama, berbeda — mainstream hingga akhir **2027**, extended hingga **2030**.)
> **Source**: SAP Community (official) — "SAP BW/4HANA to extend maintenance in alignment with SAP Business Suite and SAP S/4HANA", https://community.sap.com/t5/technology-blog-posts-by-sap/sap-bw-4hana-to-extend-maintenance-in-alignment-with-sap-business-suite-and/ba-p/13457952 — diakses 2026-07-07
> **Confidence**: high

> **Claim**: Datasphere di BTP cockpit ditandai sebagai deprecated service (konsekuensi perubahan skema penjualan, BUKAN penghentian produk).
> **Number/specific**: SAP KBA 3630656 menjelaskan Datasphere muncul sebagai "deprecated service" di SAP BTP cockpit karena tidak lagi dijual via skema BTP tersebut — layanan tetap berjalan via BDC.
> **Source**: SAP Support KBA 3630656 — https://userapps.support.sap.com/sap/support/knowledge/en/3630656 — diakses 2026-07-07
> **Confidence**: medium (judul KBA terlihat di hasil pencarian; isi penuh di balik login SAP. Gunakan hanya untuk menegaskan "deprecated di cockpit ≠ produk dihentikan"; jangan mengutip detail teknis KBA tanpa akses penuh.)

> **Claim**: BDC menyatukan data dari aplikasi SAP inti dan sumber pihak ketiga untuk fondasi AI.
> **Number/specific**: contoh sumber yang disebut SAP: SAP S/4HANA & SAP Ariba (finance, spend, supply chain), SAP SuccessFactors (talent/learning), plus data eksternal; "insight apps" memakai data products + model AI atas data real-time.
> **Source**: SAP News Center (BDC/Databricks announcement, 2025-02-13) — diakses 2026-07-07
> **Confidence**: high

## Solution focus + Soltius anchor (from product_matrix.md + brief)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| SAP Business Data Cloud (payung platform) | Payung SaaS yang menyatukan Datasphere + SAC + BW + Databricks di atas business data fabric; diperkenalkan 13 Feb 2025 | H2 #1 (definisi) + blok 40–60 kata | Data and AI Consulting (menakar apakah/kapan BDC tepat) — closing |
| SAP Datasphere | Fondasi ter-governance/data fabric; kini dijual via BDC, bukan lagi Eligible Cloud Service BTPEA/CPEA/PAYG untuk langganan baru (1 Jan 2026); tetap ada sebagai komponen | H2 #2 & #4 | — |
| SAP Analytics Cloud (SAC) | Lapisan BI/planning di dalam BDC; ikut perubahan skema komersial yang sama dengan Datasphere | H2 #4 + FAQ | Anchor internal link ke hub Business Intelligence |
| SAP BW/4HANA | Warehouse existing (on-prem/private); didukung hingga 2040; jalur modernisasi ke BDC | H2 #4 + FAQ | — |
| SAP Databricks (+ konteks SAP Snowflake) | Komponen native BDC untuk AI/ML/data engineering; dijual oleh SAP sebagai bagian BDC | H2 #1 & #4 (ringkas) | — |
| Curated data products / business data fabric | Konsep inti BDC; dataset ter-kurasi & ter-governance untuk analytics/AI | H2 #1 | — |

**Soltius anchor (dari brief + company_profile):** **SAP Platinum Partner (via United VARs)** + **Data and AI Consulting**. Placement utama: closing ("perubahan kemasan lisensi SAP bisa membingungkan; sebagai SAP Platinum Partner, Soltius membantu menakar apakah dan kapan BDC tepat untuk lanskap data Anda"). Opsional satu aside mid-article di H2 #3: keputusan lisensi terbaik berangkat dari roadmap AI/analitik nyata, bukan tekanan jadwal.

Reminder: Soltius **mengimplementasikan/mendampingi/migrasi/support** teknologi ini — **tidak membangunnya**. Maks 2–3 penyebutan Soltius. Jangan sebut harga.

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **SAP Community — "Announcement: SAP Datasphere and SAP Analytics Cloud Availability via SAP Business Data Cloud"** (official SAP post) — https://community.sap.com/t5/technology-blog-posts-by-sap/announcement-sap-datasphere-and-sap-analytics-cloud-availability-via-sap/ba-p/14140920 — *what it backs*: tanggal & wording perubahan komersial (1 Jan / 2 Jan 2026, existing continue, tetap via BDC, tanpa migrasi teknis). **Sumber utama untuk klaim komersial.**
2. **SAP News Center — "SAP Debuts Business Data Cloud with Databricks to Turbocharge Business AI"** (2026-02-13) — https://news.sap.com/2025/02/sap-business-data-cloud-databricks-turbocharge-business-ai/ — *what it backs*: peluncuran BDC, definisi resmi, kemitraan Databricks.
3. **SAP — SAP Business Data Cloud product page** — https://www.sap.com/products/data-cloud.html — *what it backs*: komponen & kapabilitas resmi BDC (business data fabric, curated data products, BW modernization).
4. **BARC — "SAP BDC: A BARC Perspective"** (analis independen, konteks kedua) — https://barc.com/sap-bdc-barc-perspective/ — *what it backs*: analisis netral pihak ketiga tentang implikasi BDC bagi pembeli. (Konteks/opini analis; verifikasi tanggal & kutipan jika dipakai langsung.)

Priority yang dipenuhi: SAP official (Community + News Center + sap.com) > analis independen (BARC).

## FAQ Q&As (7 drafted, Bahasa Indonesia)

### Apakah SAP Datasphere masih dijual terpisah di 2026?
Tidak lagi untuk langganan baru pada skema BTPEA/CPEA/PAYG. Sejak 1 Januari 2026, SAP Datasphere (dan SAP Analytics Cloud) dihapus dari daftar Eligible Cloud Services untuk langganan baru skema tersebut dan kini dijual melalui SAP Business Data Cloud. Ini perubahan cara membeli, bukan penghentian produk — Datasphere tetap ada sebagai komponen di dalam BDC, dan pelanggan lama dapat melanjutkan tanpa gangguan.

### Apa itu SAP Business Data Cloud (BDC)?
SAP Business Data Cloud adalah solusi SaaS terkelola yang menyatukan dan meng-govern data SAP maupun pihak ketiga dalam satu fondasi tepercaya untuk analitik dan AI. Diperkenalkan 13 Februari 2025, BDC menyatukan SAP Datasphere, SAP Analytics Cloud, SAP Business Warehouse, dan SAP Databricks di atas arsitektur business data fabric, lengkap dengan curated data products dan insight apps siap pakai.

### Apa yang terjadi pada pelanggan SAP Datasphere/SAC yang sudah ada?
Pelanggan existing tidak terganggu. Menurut pengumuman resmi SAP, tenant Datasphere dan SAC yang sudah berjalan dipertahankan di bawah SAP Business Data Cloud tanpa perlu migrasi teknis. Pelanggan BTPEA/CPEA yang membeli cloud credits sebelum 1 Januari 2026 dapat terus menggunakannya untuk Datasphere/SAC sepanjang masa perjanjian. Transisi ke BDC bisa dilakukan bertahap, bukan mendadak.

### Apa bedanya SAP Business Data Cloud dan SAP Datasphere?
SAP Datasphere adalah salah satu komponen; SAP Business Data Cloud adalah payung platformnya. Datasphere menangani integrasi, federasi, dan pemodelan data ter-governance sebagai fondasi data fabric. BDC membungkus Datasphere bersama SAP Analytics Cloud, SAP BW, dan SAP Databricks menjadi satu platform SaaS yang menyatukan data untuk analitik dan AI. Singkatnya: Datasphere = mesin data; BDC = platform lengkap yang menaunginya.

### Apakah SAP Business Data Cloud termasuk SAP Analytics Cloud?
Ya. SAP Analytics Cloud adalah komponen resmi di dalam SAP Business Data Cloud, berperan sebagai lapisan business intelligence dan perencanaan (dashboard, reporting, planning) di atas data yang dikelola BDC. Sama seperti Datasphere, sejak 1 Januari 2026 SAC untuk langganan baru pada skema BTPEA/CPEA/PAYG dijual melalui BDC, bukan lagi sebagai layanan mandiri pada skema tersebut.

### Apa peran Databricks di SAP Business Data Cloud?
SAP Databricks adalah versi terkelola SAP dari platform Databricks yang tertanam native di dalam BDC, dijual oleh SAP sebagai bagian dari BDC. Perannya: data engineering, machine learning, dan AI atas data SAP yang kaya semantik, dengan zero-copy Delta Sharing dua arah sehingga data tidak perlu digandakan. Sejak November 2025, SAP juga menambahkan SAP Snowflake sebagai extension BDC, memperluas pilihan engine data.

### Apakah SAP BW/4HANA masih didukung?
Ya, dan dalam jangka panjang. SAP memperpanjang mainstream maintenance SAP BW/4HANA hingga akhir 2040, selaras dengan roadmap SAP S/4HANA dan SAP Business Suite. (Catatan: SAP BW 7.5 yang lebih lama berbeda — mainstream hanya sampai 2027, extended sampai 2030.) BW/4HANA tetap relevan sebagai data warehouse existing, dengan jalur modernisasi menuju Business Data Cloud bila dibutuhkan.

## Data tables for the writer

### Yang Berubah vs Yang Tetap (Datasphere/SAC & BDC, 2026)
| Aspek | Yang berubah | Yang tetap |
|---|---|---|
| Cara membeli (langganan baru) | Datasphere & SAC dihapus dari Eligible Cloud Services BTPEA/CPEA/PAYG (1 Jan 2026); dibeli via BDC | Produknya sama; kapabilitas inti tidak hilang |
| Renewal skema lama | Tidak tersedia untuk renewal pada perjanjian yang dimulai setelah 2 Jan 2026 | Perjanjian berjalan tetap dipakai sampai berakhir |
| Pelanggan existing | Jalur pembelian ke depan mengarah ke BDC | Tenant dipertahankan; tanpa migrasi teknis; cloud credits (dibeli sebelum 1 Jan 2026) tetap berlaku |
| Posisi produk | Datasphere/SAC menjadi komponen di dalam BDC | Datasphere/SAC tetap ada dan berfungsi |

### Peta Peran Komponen di 2026
| Komponen | Peran di 2026 | Catatan |
|---|---|---|
| SAP Business Data Cloud | Payung platform data (SaaS) untuk analitik & AI | Diperkenalkan 13 Feb 2025 |
| SAP Datasphere | Fondasi data ter-governance / business data fabric | Kini komponen di dalam BDC |
| SAP Analytics Cloud | Lapisan BI & planning | Komponen BDC |
| SAP BW/4HANA | Data warehouse existing (on-prem/private) | Didukung hingga 2040 |
| SAP Databricks | Engine AI/ML & data engineering (native) | Dijual oleh SAP sbg bagian BDC |
| SAP Snowflake | Solution extension BDC (pilihan engine tambahan) | Diumumkan Nov 2025; GA direncanakan Q1 2026 |

### Pembeli Baru vs Pelanggan Existing
| Situasi | Rekomendasi arah | Yang perlu diperhatikan |
|---|---|---|
| Pembeli baru | Evaluasi lewat BDC sejak awal | Nilai kebutuhan AI/analitik nyata dulu, hindari over-buy bundle penuh karena FOMO |
| Pelanggan Datasphere/SAC existing | Lanjut dulu, transisi ke BDC bertahap | Tidak ada tekanan migrasi teknis; petakan roadmap sebelum memperluas |
| Pengguna BW/4HANA | Pertahankan sebagai warehouse existing | Dukungan sampai 2040; modernisasi ke BDC opsional, berbasis kebutuhan |

## Edge cases & nuance

- **"Dihapus dari eligible cloud services" ≠ "produk dihentikan".** Ini yang paling sering disalahpahami. Yang berubah adalah *cara membeli* (mekanisme komersial BTPEA/CPEA/PAYG), bukan keberadaan atau dukungan produk. Datasphere/SAC tetap berjalan dan dijual — hanya via BDC.
- **Dua tanggal, dua makna.** 1 Januari 2026 = penghapusan dari Eligible Cloud Services untuk langganan baru; 2 Januari 2026 = titik acuan untuk perjanjian yang dimulai setelahnya tidak bisa renewal pada skema tsb (setelah 31 Des 2025 tidak untuk renewal). Writer sebaiknya menyajikan keduanya dengan hati-hati; jika ragu, sebut "sejak awal Januari 2026" dan jelaskan nuansanya, jangan memilih satu tanggal saja seolah mutlak.
- **BW/4HANA vs BW 7.5.** Jangan tercampur. BW/4HANA (produk modern) didukung sampai 2040; BW 7.5 (versi lama) sampai 2027 (extended 2030). Menyebut "BW berakhir 2027" tanpa membedakan versi adalah kesalahan faktual.
- **BDC bukan sekadar produk baru — ini kemasan/platform.** Brief benar: tegaskan ini repackaging + platform konvergensi, bukan produk pengganti tunggal.
- **Jangan over-sell urgensi.** Meski arah investasi SAP jelas ke BDC, pengumuman resmi SAP sendiri menyatakan pelanggan existing tidak perlu buru-buru pindah. H2 #5 (honest angle) harus mencerminkan ini.

## Flags (open factual risk)

- ⚠️ **Nuansa dua tanggal (1 Jan vs 2 Jan 2026).** Sumber SAP menyebut keduanya dalam konteks berbeda (removal untuk langganan baru vs renewal). → Rekomendasi: sajikan keduanya dengan penjelasan; jangan mereduksi jadi satu tanggal tunggal tanpa konteks. Aman: "sejak 1 Januari 2026 untuk langganan baru … dan tidak untuk perpanjangan pada perjanjian yang dimulai setelah 2 Januari 2026".
- ⚠️ **Jangan tulis "Datasphere/SAC discontinued/dihentikan".** Tidak akurat. → Selalu bingkai sebagai "perubahan skema penjualan / kini dijual via BDC".
- ⚠️ **Status GA SAP Snowflake.** Per sumber Nov 2025, GA *direncanakan* Q1 2026 (dan BDC Connect for Snowflake H1 2026). Hari ini 2026-07-07, kemungkinan sudah GA, tetapi **belum diverifikasi ke pengumuman GA final**. → Rekomendasi: sebut sebagai konteks ("SAP menambahkan SAP Snowflake sebagai extension BDC, GA direncanakan Q1 2026") atau verifikasi ulang sebelum menyatakan "sudah tersedia umum". Ini fakta tambahan, bukan inti brief — boleh diabaikan bila writer ingin fokus.
- ⚠️ **Detail SAP KBA 3630656** (Datasphere "deprecated" di BTP cockpit) ada di balik login SAP; hanya judul yang terlihat. → Pakai hanya untuk menegaskan "deprecated di cockpit ≠ produk dihentikan"; jangan mengutip isi teknis KBA.
- ⚠️ **BARC sebagai sumber.** Berguna sebagai konteks analis independen, tetapi halaman spesifik & kutipan belum di-fetch penuh. → Jika writer mengutip BARC secara spesifik, verifikasi tanggal & pernyataan; jika hanya sebagai "analis independen menyoroti implikasi BDC", aman. **Jangan** jadikan BARC sumber untuk klaim tanggal komersial — gunakan SAP Community untuk itu.

## Definition snippet draft (40–60 words)

> SAP Business Data Cloud (BDC) adalah platform data SaaS terkelola dari SAP yang menyatukan dan meng-govern data SAP maupun pihak ketiga dalam satu fondasi tepercaya untuk analitik dan AI. Diperkenalkan Februari 2025, BDC menaungi SAP Datasphere, SAP Analytics Cloud, SAP BW, dan SAP Databricks di atas arsitektur business data fabric.

*(55 kata)*
