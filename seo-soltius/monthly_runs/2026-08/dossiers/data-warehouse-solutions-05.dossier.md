---
brief_id: "data-warehouse-solutions-05"
researcher_run_date: "2026-06-08"
sources_cited: 14
flags: 5
---

# Research Dossier: Data Warehouse sebagai Fondasi AI: Mengapa Model Anda Hanya Sebaik Datanya

## TL;DR for the writer

- Gartner (Feb 2025) confirms 63% of organizations lack or are unsure about having the right data management practices for AI, and predicts 60% of AI projects unsupported by AI-ready data will be abandoned by 2026 — these are the most authoritative, current stats for the "AI fails without data foundation" framing. Do NOT cite the "7% siap AI" figure; no credible primary source confirmed it.
- SAP Business Data Cloud (BDC) launched February 13, 2025 (controlled availability), with general availability from April 2025. SAP Databricks is a fully SAP-managed, first-party component within BDC — generally available on AWS. Additional BDC capabilities (including some BDC Connect partner integrations) have GA planned H2 2026; state this carefully per flag below.
- Delta Sharing is an open protocol enabling zero-copy data access: SAP Data Products from BDC are shared with SAP Databricks via Delta Sharing without data replication; those products auto-populate Databricks' Unity Catalog for governed, bidirectional sync. This is confirmed from SAP Architecture Center + news.sap.com.
- SAP Datasphere is the semantic layer / knowledge core inside BDC — preserves business context, provides data modeling, data integration, and data product management. It was formerly SAP Data Warehouse Cloud (renamed March 8, 2023). It is not a separate product from BDC — it is a foundational component.
- Medallion architecture (Bronze/Silver/Gold) is the industry-standard pattern for progressively improving data quality from raw ingestion to AI/ML-ready features. Databricks coined and popularized it; it is vendor-neutral in principle. Use this to explain how a data warehouse becomes AI-ready structurally.

---

## Core facts (verified)

> **Claim**: Mayoritas enterprise menghadapi masalah data yang belum siap untuk AI
> **Number/specific**: 63% organisasi tidak memiliki atau tidak yakin apakah mereka memiliki praktik data management yang tepat untuk AI (survei Gartner Q3 2024, 248 pemimpin data management)
> **Source**: Gartner press release "Lack of AI-Ready Data Puts AI Projects at Risk," February 26, 2025 — https://www.gartner.com/en/newsroom/press-releases/2025-02-26-lack-of-ai-ready-data-puts-ai-projects-at-risk
> **Confidence**: high

> **Claim**: Banyak proyek AI akan gagal karena data yang tidak siap AI
> **Number/specific**: Gartner memprediksi bahwa hingga 2026, organisasi akan membatalkan 60% proyek AI yang tidak didukung oleh data yang AI-ready
> **Source**: Gartner press release "Lack of AI-Ready Data Puts AI Projects at Risk," February 26, 2025 — https://www.gartner.com/en/newsroom/press-releases/2025-02-26-lack-of-ai-ready-data-puts-ai-projects-at-risk
> **Confidence**: high

> **Claim**: Data yang tidak terpusat adalah hambatan utama kesiapan AI enterprise
> **Number/specific**: Cisco AI Readiness Index 2025 (8.000+ pemimpin AI, 30 negara): hanya 19% enterprise yang memiliki data terpusat secara penuh, versus 76% pada kelompok "Pacesetters" (organisasi paling siap AI); perusahaan Pacesetters 4x lebih mungkin membawa proyek AI ke produksi
> **Source**: Cisco AI Readiness Index 2025, dirilis 14 Oktober 2025 — https://newsroom.cisco.com/c/r/newsroom/en/us/a/y2025/m10/cisco-ai-research-the-most-ai-ready-companies-outpace-peers-in-the-race-to-value.html
> **Confidence**: high

> **Claim**: Hambatan scaling AI terbesar adalah keterbatasan data
> **Number/specific**: McKinsey State of AI November 2025: 8 dari 10 perusahaan menyebut keterbatasan data sebagai penghalang untuk men-scale AI agentic; kurang dari 10% enterprise yang bereksperimen dengan AI agents berhasil men-scale ke nilai nyata
> **Source**: McKinsey "The state of AI in 2025: Agents, innovation, and transformation," November 2025 — https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai
> **Confidence**: high

> **Claim**: SAP Business Data Cloud (BDC) adalah platform SaaS terkelola penuh yang mengintegrasikan SAP Datasphere, SAP Analytics Cloud, SAP Databricks, SAP HANA Cloud, SAP BW, dan SAP Master Data Governance
> **Number/specific**: BDC diluncurkan 13 Februari 2025 (controlled availability); umumnya tersedia (general availability) sejak April 2025
> **Source**: SAP News Center "SAP Business Data Cloud Picks Up Steam with Customer and Partner Updates," April 2025 — https://news.sap.com/2025/04/sap-business-data-cloud-picks-up-steam-customer-partner-updates/; SAP product page https://www.sap.com/products/data-cloud.html
> **Confidence**: high

> **Claim**: SAP Databricks adalah komponen native (first-party, fully SAP-managed) dalam SAP Business Data Cloud
> **Number/specific**: SAP Databricks merupakan versi Databricks lakehouse yang dikelola sepenuhnya oleh SAP, tersedia sebagai first-party data service di dalam BDC; GA (Generally Available) di AWS
> **Source**: SAP News Center "SAP Business Data Cloud Picks Up Steam," April 2025 — https://news.sap.com/2025/04/sap-business-data-cloud-picks-up-steam-customer-partner-updates/; SAP News "SAP and Databricks: A Bold New Era of Data and AI," February 2025 — https://news.sap.com/2025/02/sap-databricks-open-bold-new-era-data-ai/
> **Confidence**: high

> **Claim**: SAP Databricks mendukung pengembangan model AI/ML kustom, data engineering, dan lakehouse dengan Spark, SQL, dan multi-model compute
> **Number/specific**: Kapabilitas: pengembangan model AI & ML kustom, lifecycle management AI end-to-end, pro-code environment untuk Spark scripts dan SQL, Trusted data foundation dengan governance via Unity Catalog
> **Source**: SAP product page "SAP Databricks in Business Data Cloud" — https://www.sap.com/products/data-cloud/databricks.html (diakses Juni 2026); SAP News Feb 2025 — https://news.sap.com/2025/02/sap-databricks-open-bold-new-era-data-ai/
> **Confidence**: high

> **Claim**: Delta Sharing adalah protokol terbuka yang memungkinkan zero-copy data access — SAP Data Products dibagikan ke SAP Databricks tanpa replikasi data
> **Number/specific**: SAP Data Products di BDC catalog dapat dibagikan ke Unity Catalog Databricks dengan satu klik, tanpa menyalin data; saat Delta Sharing terjadi dari BDC ke SAP Databricks, Data Product otomatis mengisi Unity Catalog (sinkronisasi metadata dua arah)
> **Source**: SAP Architecture Center "Data Products in SAP Business Data Cloud" — https://architecture.learning.sap.com/docs/ref-arch/f5b6b597a6/1; SAP community blog "SAP Databricks in SAP Business Data Cloud" — https://community.sap.com/t5/technology-blog-posts-by-sap/sap-databricks-in-sap-business-data-cloud-unifying-sap-business-data-with/ba-p/14097709
> **Confidence**: high

> **Claim**: SAP Data Products adalah dataset yang dikurasi dan semantically rich, siap dikonsumsi AI/analytics tanpa perlu membangun konteks ulang
> **Number/specific**: Data Product adalah dataset yang diekspos untuk konsumsi via API (SQL, Delta Sharing, Events, REST, OData) dan dilengkapi metadata berkualitas tinggi; tersedia dalam dua bentuk: SAP Managed (SAP mengelola lifecycle) dan Customer Managed (customer memadukan data SAP dan non-SAP)
> **Source**: SAP Architecture Center "Data Products in SAP Business Data Cloud" — https://architecture.learning.sap.com/docs/ref-arch/f5b6b597a6/1
> **Confidence**: high

> **Claim**: SAP Datasphere adalah lapisan semantic / knowledge core dalam SAP Business Data Cloud yang melestarikan business context
> **Number/specific**: SAP Datasphere mengintegrasikan data integration, semantic modeling, data product management, data federation, dan data virtualization; merupakan evolusi dari SAP Data Warehouse Cloud (diganti nama 8 Maret 2023); berfungsi sebagai "knowledge core yang menyatukan semantics, data products, dan modeling"
> **Source**: SAP product page "SAP Datasphere" — https://www.sap.com/products/data-cloud/datasphere.html; SAP News HK "SAP Introduces SAP Datasphere," March 2023 — https://news.sap.com/hk/2023/03/sap-introduces-sap-datasphere-to-simplify-customers-data-landscape/
> **Confidence**: high

> **Claim**: Medallion architecture adalah pola desain data standar industri untuk menyiapkan data dari raw ingestion ke AI/ML-ready (Bronze → Silver → Gold)
> **Number/specific**: Bronze (raw data as-is dari sumber); Silver (data divalidasi, di-merge, di-cleanse — "enterprise view"; mendukung self-service analytics dan ML); Gold (aggregates dan features tingkat bisnis, siap untuk analytics dan machine learning)
> **Source**: Databricks "What is Medallion Architecture?" — https://www.databricks.com/blog/what-is-medallion-architecture; Microsoft Learn "What is the medallion lakehouse architecture?" — https://learn.microsoft.com/en-us/azure/databricks/lakehouse/medallion
> **Confidence**: high

> **Claim**: SAP BDC Connect memungkinkan berbagi SAP Data Products ke partner ekosistem (Databricks, Snowflake, AWS) tanpa menyalin data, dengan context bisnis tetap terjaga
> **Number/specific**: BDC Connect untuk Enterprise Databricks sudah GA; BDC Connect untuk Snowflake juga GA (diumumkan di SAP Community 2026); BDC Connect untuk Amazon Athena diumumkan Mei 2026; BDC Connect untuk Microsoft Fabric — GA direncanakan H2 2026
> **Source**: SAP News "Accelerate the Autonomous Enterprise with SAP Business Data Cloud," May 2026 — https://news.sap.com/2026/05/sap-bdc-accelerate-autonomous-enterprise/; SAP Community "Announcing GA of SAP Snowflake and BDC Connect for Snowflake" — https://community.sap.com/t5/technology-blog-posts-by-sap/announcing-general-availability-of-sap-snowflake-and-sap-business-data/ba-p/14386550
> **Confidence**: high (with nuance — see Flags)

> **Claim**: Unity Catalog adalah komponen governance Databricks yang secara otomatis menerima dan mengelola metadata SAP Data Products yang dibagikan via Delta Sharing
> **Number/specific**: Ketika Delta Sharing dilakukan dari BDC ke SAP Databricks, Data Product otomatis mengisi Unity Catalog Databricks untuk sinkronisasi metadata; semua artifact dikelola dan di-govern untuk memastikan trusted insights dari sumber ke model
> **Source**: SAP Architecture Center "Integration with Databricks" — https://architecture.learning.sap.com/docs/ref-arch/a07a316077/3; SAP community blog "SAP Databricks in SAP Business Data Cloud" — https://community.sap.com/t5/technology-blog-posts-by-sap/sap-databricks-in-sap-business-data-cloud-unifying-sap-business-data-with/ba-p/14097709
> **Confidence**: high (Unity Catalog confirmed via SAP Architecture Center dan search results; tidak muncul di beberapa artikel SAP News tetapi dikonfirmasi dalam dokumentasi teknis)

> **Claim**: Proyek AI SAP S/4HANA mendapat manfaat langsung dari BDC karena Data Products dimulai dari S/4HANA data
> **Number/specific**: SAP Data Products dimulai dari S/4HANA (disebutkan sebagai titik awal); kurated, trusted SAP data products — starting with S/4HANA — dapat diakses via zero-copy delta sharing untuk AI/ML use cases
> **Source**: SAP News "SAP and Databricks: A Bold New Era of Data and AI," February 2025 — https://news.sap.com/2025/02/sap-databricks-open-bold-new-era-data-ai/
> **Confidence**: high

> **Claim**: AI adoption di Indonesia tumbuh dan pemerintah tengah mengembangkan AI roadmap
> **Number/specific**: UNESCO dan KOMINFO menyelesaikan AI Readiness Assessment Methodology di Indonesia (Mei 2024); Komdigi mengembangkan AI roadmap yang ditargetkan selesai 2025; pasar AI Indonesia diproyeksikan mencapai $10,88 miliar pada 2030; adopsi AI diperkirakan meningkat 30% pada 2025
> **Source**: UNESCO/KOMINFO AI Readiness Assessment, Mei 2024 — https://www.unesco.org/en/articles/unesco-and-kominfo-completed-ai-readiness-assessment-indonesia-ready-ai; Introl blog "Indonesia AI: 92% Adoption" — https://introl.com/blog/indonesia-ai-revolution-infrastructure-investment-2025
> **Confidence**: medium (angka pasar dari sumber non-primer; pakai untuk konteks umum, bukan klaim utama)

---

## Solution focus + Soltius anchor (from product_matrix.md)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| SAP Business Data Cloud | Platform SaaS GA sejak April 2025; mengintegrasikan Datasphere, SAC, Databricks, HANA Cloud, BW, MDG; fondasi data terpercaya untuk AI agentic | H2 #4 (BDC + Databricks deep-dive) | Data and AI Consulting |
| SAP Databricks | First-party, fully SAP-managed Databricks lakehouse dalam BDC; GA di AWS; mendukung AI/ML model development + data engineering; governance via Unity Catalog | H2 #4 | Data and AI Consulting |
| Delta Sharing / zero-copy | Protokol terbuka untuk berbagi SAP Data Products ke Databricks tanpa replikasi; auto-populate Unity Catalog; bidirectional governance | H2 #4 (tabel kapabilitas) | Data and AI Consulting |
| SAP Datasphere | Lapisan semantic/knowledge core dalam BDC; dulu SAP Data Warehouse Cloud (renamed Mar 2023); preserves business context; mendukung data integration, modeling, federation, virtualization | H2 #3 (peran warehouse modern) + H2 #4 | Data and AI Consulting |
| Medallion architecture | Pola Bronze/Silver/Gold untuk progressively meningkatkan kualitas data; Silver layer mendukung ML; Gold layer = fitur/agregat siap AI | H2 #3 (pola menyiapkan data) | — (vendor-neutral concept) |

**Soltius framing reminder**: Soltius mengimplementasikan, mengintegrasikan, dan mendukung BDC/Datasphere/Databricks — tidak membuatnya. Max 2–3 self-mentions. Penempatan utama: penutup (closing CTA). Opsional: satu kalimat mid-article di H2 #5 tentang peran asesmen kesiapan data.

---

## Authoritative external sources (for the writer to link out)

1. **Gartner, "Lack of AI-Ready Data Puts AI Projects at Risk," February 26, 2025** — https://www.gartner.com/en/newsroom/press-releases/2025-02-26-lack-of-ai-ready-data-puts-ai-projects-at-risk — *what it backs*: 63% enterprises lack proper data management for AI; 60% of AI projects without AI-ready data will be abandoned by 2026. Gunakan ini sebagai anchor statistik untuk framing "proyek AI gagal karena data."

2. **SAP News Center, "SAP and Databricks: A Bold New Era of Data and AI," February 2025** — https://news.sap.com/2025/02/sap-databricks-open-bold-new-era-data-ai/ — *what it backs*: SAP Databricks sebagai first-party data service; Delta Sharing untuk zero-copy harmonization; SAP Business Data Cloud sebagai platform pemersatu.

3. **SAP product page, "SAP Business Data Cloud"** — https://www.sap.com/products/data-cloud.html — *what it backs*: Komponen resmi BDC (Datasphere, SAC, Databricks, HANA Cloud, MDG, BW); definisi platform; kurated SAP Data Products berbasis business process definitions.

4. **SAP Architecture Center, "Data Products in SAP Business Data Cloud"** — https://architecture.learning.sap.com/docs/ref-arch/f5b6b597a6/1 — *what it backs*: Definisi SAP Data Products; mekanisme Delta Sharing dan zero-copy; Unity Catalog integration; dua tipe Data Product (SAP Managed vs Customer Managed).

---

## FAQ Q&As (6 drafted, Bahasa Indonesia)

### Apakah perlu data warehouse untuk menjalankan AI?

Ya. Model AI belajar dari data — kualitas output AI bergantung langsung pada kualitas, konsistensi, dan konteks data yang dipakai melatih atau meng-query-nya. Tanpa data warehouse yang terkonsolidasi, model mendapat data tersebar, tidak konsisten, dan tanpa konteks bisnis. Gartner memprediksi 60% proyek AI tanpa data AI-ready akan dibatalkan pada 2026.

### Apa itu data yang siap AI (AI-ready data)?

Data siap AI adalah data yang memenuhi empat dimensi: (1) **kualitas** — akurat, lengkap, tidak duplikat; (2) **konsistensi** — angka yang sama di semua sistem; (3) **lineage & governance** — tercatat asal-usul dan siapa yang boleh mengakses; (4) **konteks semantik** — data dilengkapi definisi bisnis sehingga model memahami arti "revenue" atau "customer" sesuai konteks perusahaan, bukan sekadar angka mentah.

### Apa itu SAP Business Data Cloud?

SAP Business Data Cloud (BDC) adalah platform SaaS terkelola penuh yang menyatukan dan mengatur data SAP dan non-SAP. Diluncurkan 13 Februari 2025, BDC mengintegrasikan SAP Datasphere, SAP Analytics Cloud, SAP Databricks, SAP HANA Cloud, SAP BW, dan SAP Master Data Governance dalam satu fondasi data terpercaya untuk AI agentic dan analytics.

### Apa peran Databricks dalam SAP Business Data Cloud?

SAP Databricks adalah komponen native (first-party, dikelola SAP) di dalam BDC yang memungkinkan pengembangan model AI/ML kustom, data engineering, dan analitik lakehouse menggunakan Spark, SQL, dan multi-model compute. SAP Databricks tersedia secara umum (GA) di AWS. Governance data dikelola melalui Unity Catalog Databricks yang terintegrasi langsung dengan katalog BDC.

### Apa itu zero-copy dan Delta Sharing dalam konteks SAP?

Delta Sharing adalah protokol terbuka dari Databricks yang memungkinkan SAP Data Products dibagikan ke SAP Databricks — atau platform lain seperti Snowflake, Amazon Athena — **tanpa menyalin data** (zero-copy). Saat berbagi terjadi, Data Product otomatis mengisi Unity Catalog Databricks, menjaga metadata dan governance tetap tersinkron dari sumber ke model AI secara dua arah.

### Mengapa banyak proyek AI gagal di tahap data?

Karena data di banyak perusahaan masih tersebar di berbagai sistem yang tidak terhubung, tidak konsisten, dan tidak memiliki konteks bisnis. Survei Cisco AI Readiness Index 2025 menemukan hanya 19% enterprise yang memiliki data terpusat secara penuh. McKinsey melaporkan 8 dari 10 perusahaan menyebut keterbatasan data sebagai penghalang utama meng-scale AI. Singkatnya: prinsip "garbage in, garbage out" tetap berlaku di era AI — model secanggih apapun tidak bisa mengkompensasi fondasi data yang buruk.

---

## Data tables for the writer

### Kapabilitas SAP Business Data Cloud (Komponen Utama)

| Komponen | Fungsi Utama | Relevansi untuk AI |
|---|---|---|
| SAP Datasphere | Semantic layer, data integration, data product management, federasi | Melestarikan business context agar model memahami makna data |
| SAP Databricks | AI/ML model development, data engineering, lakehouse (Spark/SQL) | Melatih dan men-deploy model AI kustom di atas data SAP |
| SAP Analytics Cloud | Analytics + enterprise planning dengan AI terbenam | Konsumsi hasil AI untuk BI dan perencanaan bisnis |
| SAP HANA Cloud | In-memory processing (transaksional, analitis, multi-model) | Real-time inference dan semantic search oleh AI agents |
| SAP BW | Modernisasi BW on-premise ke cloud | Membawa data warehouse lama ke fondasi BDC modern |
| SAP Master Data Governance | Governance master data lintas domain | Memastikan data produk/customer/vendor konsisten sebelum dikonsumsi AI |

### Lapisan Medallion Architecture dan Kesiapan AI

| Layer | Nama | Isi | Kegunaan untuk AI/ML |
|---|---|---|---|
| L1 | Bronze | Data mentah as-is dari sumber (ERP, IoT, CRM) | Raw training data; audit trail |
| L2 | Silver | Data tervalidasi, di-merge, di-cleanse; "enterprise view" | Self-service analytics; feature engineering; ML training |
| L3 | Gold | Agregat dan fitur tingkat bisnis yang dikurasi | Model AI production-ready; BI dashboards |

### Checklist: Data Siap AI (AI-Ready Data)

| Dimensi | Indikator | Risiko jika Absen |
|---|---|---|
| Kualitas | Tidak ada duplikat; data lengkap; akurasi terverifikasi | Model menghasilkan prediksi keliru |
| Konsistensi | Angka sama di semua sistem (ERP, CRM, gudang) | AI memberi jawaban berbeda tergantung sumber |
| Lineage & Governance | Tercatat asal data; akses dikontrol; audit trail ada | Regulasi PDP; output model tak dapat dipercaya |
| Konteks Semantik | Definisi bisnis melekat (mis. "pendapatan" = gross atau net?) | Model tidak memahami makna bisnis data |
| Aksesibilitas | Data dapat diakses oleh tim data/AI tanpa bottleneck IT | Proyek AI lambat; silos tetap ada |

---

## Edge cases & nuance

- **"SAP Databricks native vs. BDC Connect"**: Ada dua jalur integrasi Databricks dalam ekosistem BDC. (1) **SAP Databricks** — komponen first-party, fully managed SAP, embedded dalam BDC (GA di AWS). (2) **BDC Connect for Enterprise Databricks** — jalur untuk pelanggan yang sudah memiliki lisensi Databricks sendiri ("bring your own Databricks"), juga sudah GA. Penulis cukup menyebut "SAP Databricks sebagai komponen native BDC" tanpa harus menjelaskan keduanya — tetapi jangan mengklaim keduanya identik.
- **Medallion bukan eksklusif Databricks/SAP**: Pola Bronze/Silver/Gold dipopulerkan oleh Databricks dan kini merupakan pola industri yang vendor-neutral. Cocok dijelaskan secara umum sebelum memperkenalkan BDC/Datasphere sebagai platform yang mengimplementasikannya.
- **Klaim "7% enterprise siap AI"**: Angka ini beredar di berbagai artikel tetapi tidak ditemukan sumber primer yang kredibel dan terkini. Gantikan dengan angka Gartner (63% tidak punya praktik data management yang tepat untuk AI) dan Cisco (hanya 19% punya data terpusat penuh). Jangan gunakan 7%.
- **BDC bukan sekadar pengganti Datasphere**: SAP Datasphere tetap dapat berjalan mandiri. BDC adalah layer yang menghimpun Datasphere + SAC + Databricks + HANA Cloud + BW + MDG dalam satu platform SaaS. Pelanggan Datasphere existing tidak perlu migrasi mendesak — tapi BDC adalah evolusi.
- **Konteks Indonesia**: Indonesia belum punya statistik spesifik tentang kesiapan data warehouse enterprise untuk AI. Gunakan Gartner/Cisco/McKinsey global + konteks tren AI Indonesia (UNESCO/Komdigi AI Readiness Assessment 2024, proyeksi pasar AI) sebagai latar belakang, bukan sebagai data primer kesiapan data.

---

## Flags (open factual risk)

- **FLAG 1 — GA H2 2026 (kritis — verifikasi sebelum menulis)**: Brief menyebutkan "GA H2 2026" untuk BDC + Databricks. Faktanya lebih bernuansa: SAP Business Data Cloud sendiri GA sejak April 2025; SAP Databricks (first-party component) GA di AWS sejak April 2025. Yang berencana GA H2 2026 adalah **sebagian fitur baru BDC** (seperti SAP HANA Cloud sebagai komponen inti, integrasi Reltio MDM) dan **BDC Connect for Microsoft Fabric**. Penulis harus menggunakan tense yang tepat: "SAP Business Data Cloud dan SAP Databricks sudah tersedia (GA)" dan "beberapa kapabilitas BDC terbaru direncanakan GA H2 2026." Jangan menyatakan seluruh platform baru tersedia H2 2026 — itu keliru.
  **Rekomendasi**: Gunakan kalimat: "SAP Business Data Cloud telah tersedia secara umum sejak April 2025, dengan kapabilitas baru seperti integrasi SAP HANA Cloud dan SAP Reltio MDM yang direncanakan GA pada H2 2026."

- **FLAG 2 — Angka "7% siap AI"**: Brief menyebut "mis. 'hanya 7% enterprise menilai datanya siap AI'" sebagai statistik yang perlu diverifikasi. Tidak ditemukan sumber primer yang kredibel untuk angka ini. Angka yang terverifikasi: Gartner Q3 2024: 63% tidak punya praktik data management yang tepat; Cisco 2025: 19% punya data terpusat penuh; McKinsey 2025: 8/10 perusahaan cite data limitations sebagai hambatan AI scaling.
  **Rekomendasi**: Hapus "7%" — gunakan salah satu dari tiga angka di atas dengan atribusi sumber eksplisit.

- **FLAG 3 — Unity Catalog**: Unity Catalog adalah produk Databricks (bukan SAP) yang diintegrasikan dalam SAP Databricks untuk governance. Dikonfirmasi di SAP Architecture Center dan dokumentasi teknis, tetapi tidak muncul eksplisit di beberapa artikel utama SAP News yang lebih populer. Konfirmasi via SAP Architecture Center (https://architecture.learning.sap.com/docs/ref-arch/a07a316077/3) sudah memadai — aman disebutkan sebagai "Unity Catalog Databricks" (bukan "Unity Catalog SAP").
  **Rekomendasi**: Sebut sebagai "Unity Catalog Databricks" dan tambahkan keterangan singkat bahwa ini adalah fitur governance dari Databricks yang terintegrasi dalam SAP Databricks.

- **FLAG 4 — SAP Datasphere sebagai produk mandiri vs komponen BDC**: Brief dan beberapa sumber menyebut Datasphere sebagai "lapisan konteks bisnis dalam BDC" — ini akurat. Namun Datasphere juga dapat dibeli/digunakan mandiri (terpisah dari BDC). Penulis harus menggambarkan Datasphere sebagai "komponen kunci BDC yang juga tersedia mandiri" — jangan klaim bahwa Datasphere hanya bisa digunakan dalam BDC.
  **Rekomendasi**: Framing aman: "SAP Datasphere — yang merupakan komponen inti SAP Business Data Cloud sekaligus dapat berdiri mandiri — menyediakan lapisan semantic..."

- **FLAG 5 — Klaim "SAP Databricks komponen native BDC"**: Framing ini akurat untuk SAP Databricks (the first-party, SAP-managed service). Namun, ada produk/jalur berbeda yaitu "BDC Connect for Enterprise Databricks" untuk pelanggan yang sudah punya Databricks sendiri. Jangan samakan keduanya. Untuk artikel ini, cukup fokus pada SAP Databricks sebagai komponen BDC yang first-party.
  **Rekomendasi**: Gunakan kalimat "SAP Databricks adalah komponen native dalam SAP Business Data Cloud — versi Databricks lakehouse yang dikelola sepenuhnya oleh SAP."

---

## Definition snippet draft (40–60 words)

> **Data warehouse** adalah fondasi yang menentukan keberhasilan proyek AI: model kecerdasan buatan hanya sebaik data yang digunakan untuk melatih dan mengquery-nya. Data yang tersebar, tidak konsisten, atau tanpa konteks bisnis menghasilkan prediksi yang tak dapat dipercaya — mengabaikan fondasi data ini adalah alasan paling umum mengapa inisiatif AI perusahaan gagal sebelum menghasilkan nilai.

---

## Notes for image-planner

- **Concept 1 — Diagram lapisan Medallion Architecture**: Visualisasi tiga lapisan (Bronze/Silver/Gold) sebagai diagram alir horizontal atau piramida, dengan ikon sumber data di kiri (ERP, IoT, CRM) dan label kegunaan di kanan (BI, ML, AI Agents). Bahasa Indonesia. Tepat untuk H2 #3.

- **Concept 2 — Diagram komponen SAP Business Data Cloud**: Infografis arsitektur BDC menampilkan enam komponen (Datasphere, SAC, Databricks, HANA Cloud, BW, MDG) dalam satu "ring" atau "umbrella" platform, dengan panah Delta Sharing menghubungkan ke ekosistem eksternal (Snowflake, AWS Athena). Bahasa Indonesia + nama produk dalam Inggris. Tepat untuk H2 #4.

- **Concept 3 — Checklist / scorecard "Data Siap AI"**: Visual checklist lima dimensi (Kualitas, Konsistensi, Lineage & Governance, Konteks Semantik, Aksesibilitas) dalam format kartu atau tabel berwarna, dengan indikator hijau/merah. Self-contained, mudah di-screenshot dan dibagikan. Tepat untuk H2 #2.
