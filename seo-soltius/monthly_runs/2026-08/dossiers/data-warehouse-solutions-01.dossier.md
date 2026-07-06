---
brief_id: "data-warehouse-solutions-01"
researcher_run_date: "2026-06-08"
sources_cited: 22
flags: 5
---

# Research Dossier: Berapa Biaya Data Warehouse? Rincian TCO dan Komponen untuk Perusahaan

## TL;DR for the writer

- The article's competitive whitespace is real: no Indonesian-language article currently breaks down data warehouse TCO by component (license/capacity, integration, migration, talent, maintenance). Write to fill that gap precisely.
- SAP Datasphere uses a **Capacity Unit (CU) subscription/consumption model** — not a flat license fee. The minimum entry is 1,532 CU/month (reduced from 4,300 CU/month as of April 2024). CUs bundle compute, storage, data lake, BW Bridge, and data integration. Never state a dollar/rupiah price — no public per-CU price exists in official sources accessible without login; mark all cost examples as illustrative.
- SAP BW/4HANA is committed to mainstream maintenance until at least end of 2040, aligned with SAP S/4HANA's roadmap — this is the safe on-premise anchor. SAP BW 7.5 (the predecessor) ends mainstream maintenance in 2027. Keep these distinct.
- The cloud market grows at ~20–23% CAGR; Gartner (2021) forecasted >85% of organizations would embrace cloud-first by 2025 — use as trend context, not a hard 2026 figure.
- For H2 #5 (when data warehouse is not yet worth it), lean on data volume thresholds (sub-10 TB, stable workloads) and organizational maturity — these are well-sourced and help the article avoid a pure sales pitch.

---

## Core facts (verified)

> **Claim 1**: SAP Datasphere adalah evolusi dari SAP Data Warehouse Cloud, dirilis dengan nama baru pada Maret 2023.
> **Number/specific**: SAP mengumumkan SAP Datasphere pada 8 Maret 2023 dalam acara SAP Data Unleashed; tenant SAP Data Warehouse Cloud yang ada langsung bertransisi tanpa migrasi tambahan.
> **Source**: SAP Press Room HK — "SAP Introduces SAP Datasphere to Simplify Customers' Data Landscape", news.sap.com/hk/2023/03/sap-introduces-sap-datasphere-to-simplify-customers-data-landscape/, diakses 2026-06-08
> **Confidence**: high

> **Claim 2**: SAP Datasphere menggunakan model penagihan berbasis Capacity Unit (CU) — bukan lisensi per-pengguna atau per-CPU tetap.
> **Number/specific**: CU merupakan bundled metric yang mencakup compute, storage, data lake, BW Bridge, dan data integration. Tersedia dalam model subscription dan consumption-based.
> **Source**: SAP Community — "SAP Datasphere's updated Pricing & Packaging: Lower Costs & More Flexibility", community.sap.com/t5/technology-blog-posts-by-members/sap-datasphere-s-updated-pricing-amp-packaging-lower-costs-amp-more/ba-p/13682679; SAP Help Portal — help.sap.com/docs/SAP_DATASPHERE, diakses 2026-06-08
> **Confidence**: high

> **Claim 3**: Minimum kapasitas SAP Datasphere turun drastis pada April 2024 — dari 4.300 CU/bulan menjadi 1.532 CU/bulan.
> **Number/specific**: Per April 2024, entri minimum SAP Datasphere Tenant adalah 1.532 CU/bulan (sebelumnya 4.300 CU/bulan).
> **Source**: SAP Community — "SAP Datasphere's updated Pricing & Packaging", community.sap.com/t5/technology-blog-posts-by-members/..., diakses 2026-06-08
> **Confidence**: high — angka ini dikonfirmasi lintas beberapa posting SAP Community yang konsisten; writer JANGAN menyebut harga per-CU dalam rupiah/dolar tanpa sumber resmi terbuka.

> **Claim 4**: Komponen yang mengkonsumsi CU di SAP Datasphere meliputi lima layanan utama.
> **Number/specific**: Lima layanan: (1) core application (compute + storage), (2) data lake, (3) BW Bridge, (4) data integration, (5) data catalog (crawling + storage). SAP menyediakan Capacity Unit Estimator Tool untuk estimasi CU berdasarkan konfigurasi spesifik.
> **Source**: SAP — search results citing SAP Datasphere CU Estimator documentation + community.sap.com/t5/technology-q-a/datasphere-capacity-units-usage-explanation/qaq-p/13687852, diakses 2026-06-08
> **Confidence**: high

> **Claim 5**: SAP HANA Cloud menggunakan model penagihan berbasis CU yang memungkinkan stop/start instance — pengguna tidak membayar compute saat instance dimatikan.
> **Number/specific**: SAP HANA Cloud Capacity Unit berfungsi sebagai kredit yang dapat dialokasikan ke layanan cloud database pilihan; instance dapat di-stop untuk mengurangi biaya operasional aktif (storage tetap ditagih saat instance berhenti, compute tidak).
> **Source**: SAP Community — "SAP HANA Cloud Capacity Units: A Simple, Flexible, Consumption-Based Model", community.sap.com/t5/technology-blog-posts-by-sap/sap-hana-cloud-capacity-units-a-simple-flexible-consumption-based-model-for/ba-p/13495401; SAP Community — Automation Pilot stop/start scheduling, diakses 2026-06-08
> **Confidence**: high

> **Claim 6**: SAP Business Data Cloud diluncurkan pada Februari 2025 sebagai lapisan data terkelola penuh yang menyatukan SAP Datasphere, SAP Analytics Cloud, dan konten bisnis SAP.
> **Number/specific**: Diluncurkan 13 Februari 2025 (SAP Business Unleashed virtual event); GA direncanakan April 2025; tersedia di AWS, Google Cloud, dan Microsoft Azure pada Q4 2025.
> **Source**: SAP Community — "SAP Business Data Cloud and what it means for SAP Datasphere", community.sap.com/t5/technology-blog-posts-by-sap/sap-business-data-cloud-and-what-it-means-for-sap-datasphere/ba-p/14036678; SAP Sapphire Innovation Guide 2025, sap.com/events/sapphire/innovation-guide/data-cloud.html, diakses 2026-06-08
> **Confidence**: high — Writer: sebutkan BDC sebagai perkembangan terbaru ekosistem SAP data, tetapi fokus artikel tetap pada Datasphere/HANA Cloud/BW4HANA karena itu yang paling relevan untuk keputusan anggaran saat ini.

> **Claim 7**: SAP BW/4HANA berkomitmen mainstream maintenance hingga setidaknya akhir 2040, selaras dengan roadmap SAP S/4HANA.
> **Number/specific**: Komitmen resmi SAP: BW/4HANA dipertahankan minimal hingga akhir 2040; inovasi BW hanya diteruskan di BW/4HANA (bukan BW 7.5). Pengumuman komitmen dibuat publik 4 Februari 2020.
> **Source**: SAP — "SAP BW/4HANA End of Mainstream Maintenance Key Dates", sap.com/documents/2019/02/1ca4c940-3a7d-0010-87a3-c30de2ffd8ff.html; SAP Community — "SAP BW/4HANA to extend maintenance in alignment with SAP Business Suite and SAP S/4HANA", community.sap.com/t5/technology-blog-posts-by-sap/sap-bw-4hana-to-extend-maintenance-in-alignment-with-sap-business-suite-and/ba-p/13457952, diakses 2026-06-08
> **Confidence**: high

> **Claim 8**: SAP BW 7.5 (predecessor BW/4HANA) mengakhiri mainstream maintenance pada akhir 2027, dengan extended maintenance hingga 2030.
> **Number/specific**: Mainstream maintenance SAP BW 7.5 berakhir 2027; extended support berbayar tersedia hingga 2030 — selaras dengan jadwal SAP Business Suite 7 / SAP ECC.
> **Source**: SAP Community — "Maintenance strategy for SAP NetWeaver 7.5 fully aligned with SAP Business Suite 7", community.sap.com/t5/technology-blog-posts-by-sap/..., diakses 2026-06-08
> **Confidence**: high — Ini BERBEDA dari BW/4HANA; writer harus membedakan keduanya dengan jelas agar tidak menyesatkan pembaca.

> **Claim 9**: Provisioning cloud data warehouse dapat diselesaikan dalam hitungan jam hingga hari; on-premise memerlukan beberapa minggu hingga beberapa bulan.
> **Number/specific**: Cloud: provisioning dalam jam/hari; tim dapat mengintegrasikan data, membangun model, dan menjalankan dashboard dalam hitungan jam. On-premise: dari procurement hingga produksi membutuhkan beberapa minggu hingga beberapa bulan karena pengadaan hardware, konfigurasi, dan pengamanan sistem.
> **Source**: Multiple sources including TechTarget — "On-Premises vs. Cloud Data Warehouses: Pros and Cons", techtarget.com/searchdatamanagement/tip/On-premises-vs-cloud-data-warehouses-Pros-and-cons; erpsoftwareblog.com/2026/03/on-premise-vs-cloud-data-warehouse/, diakses 2026-06-08
> **Confidence**: high — ini adalah konsensus industri lintas sumber independen.

> **Claim 10**: Biaya egress (data keluar) adalah salah satu hidden cost paling signifikan di cloud data warehouse — AWS mengenakan $0,09/GB untuk 10 TB pertama data outbound ke internet.
> **Number/specific**: AWS: $0,09/GB outbound data untuk 10 TB pertama/bulan (pengguna Amerika Utara); Azure: $0,05–$0,18/GB (tergantung benua), dengan 100 GB gratis/bulan; Google Cloud telah menghapus biaya egress untuk pelanggan yang pindah platform (per Januari 2024). Biaya egress biasanya mewakili 15–20% dari total cloud spend.
> **Source**: TechTarget — "What is Data Egress? How It Works and How to Manage Costs", techtarget.com/searchdatamanagement/definition/data-egress, diakses 2026-06-08
> **Confidence**: high — angka AWS/Azure dari sumber primer; tulis sebagai ilustrasi kondisi umum, bukan garanteed rate untuk SAP.

> **Claim 11**: Pasar cloud data warehouse global bernilai sekitar USD 10,5 miliar pada 2024, tumbuh dengan CAGR 22,8% menuju 2031.
> **Number/specific**: USD 10,5 miliar (2024) → CAGR 22,8% (2024–2031). Proyeksi lain: USD 11,56 miliar (2025) → USD 31,7 miliar (2030) dengan CAGR 21,5%. Konsensus antar firma riset: CAGR 19–23%.
> **Source**: Cognitive Market Research — "Cloud Data Warehouse Market Report", cognitivemarketresearch.com/cloud-data-warehouse-market-report; Market Research Future, marketresearchfuture.com/reports/cloud-data-warehouse-market-28363, diakses 2026-06-08
> **Confidence**: medium — berbagai firma riset memiliki angka berbeda (metodologi berbeda); gunakan sebagai range/konsensus, bukan satu angka presisi. Sebutkan sebagai "berbagai lembaga riset memproyeksikan pertumbuhan pasar cloud data warehouse dengan CAGR sekitar 20–23% hingga 2030."

> **Claim 12**: Gartner memproyeksikan lebih dari 85% organisasi akan mengadopsi prinsip cloud-first (bukan cloud-only) sebagai strategi utama.
> **Number/specific**: Proyeksi Gartner (November 2021, analis Milind Govekar): >85% organisasi akan cloud-first dengan kemampuan baru yang tidak dapat dibangun tanpa cloud. Target awal adalah 2025.
> **Source**: Gartner Newsroom — "Gartner Says Cloud Will Be the Centerpiece of New Digital Experiences", gartner.com/en/newsroom/press-releases/2021-11-10-gartner-says-cloud-will-be-the-centerpiece-of-new-digital-experiences, diakses 2026-06-08
> **Confidence**: medium — proyeksi ini dibuat 2021 untuk target 2025; sekarang sudah melewati target tahun. Gunakan sebagai konteks tren, bukan pernyataan faktual saat ini. Framing: "Gartner memproyeksikan..." atau "menurut proyeksi Gartner 2021..."

> **Claim 13**: Total Cost of Ownership (TCO) selama 5 tahun untuk organisasi 50–150 pengguna: cloud berkisar USD 350.000–820.000 vs on-premise USD 553.000–1.138.000.
> **Number/specific**: 5-year TCO range (50–150 users): cloud USD 350k–820k; on-premise (fully loaded) USD 553k–1.138k. Ini data ERP/cloud umum, bukan spesifik data warehouse SAP — gunakan sebagai konteks ilustratif.
> **Source**: Bizowie — "ERP TCO Comparison: Cloud vs. On-Premise Over 10 Years", bizowie.com/erp-tco-comparison-cloud-vs-on-premise-over-10-years, diakses 2026-06-08
> **Confidence**: medium — data ini untuk ERP, bukan khusus data warehouse. Writer harus menyebut ini sebagai "ilustrasi perbandingan TCO infrastruktur cloud vs on-premise secara umum" bukan angka pasti data warehouse SAP.

> **Claim 14**: Untuk enterprise skala besar (>100 TB data stabil), on-premise dapat lebih hemat secara TCO jangka panjang dibandingkan cloud — selama biaya staffing dan operasional diperhitungkan dengan benar.
> **Number/specific**: Threshold kasus: <10 TB → cloud menang; 10–100 TB → tergantung pola workload dan kepatuhan; >100 TB stabil → on-premise bisa lebih ekonomis jangka panjang. Hardware refresh cycle on-premise: setiap 3–5 tahun.
> **Source**: erpsoftwareblog.com/2026/03/on-premise-vs-cloud-data-warehouse/; TechTarget — techtarget.com/searchdatamanagement/tip/On-premises-vs-cloud-data-warehouses-Pros-and-cons, diakses 2026-06-08
> **Confidence**: high — konsensus lintas sumber teknis yang independen.

> **Claim 15**: Biaya tahunan rata-rata membangun data warehouse dengan cloud storage diperkirakan sekitar USD 359.000, sebanding dengan on-premise USD 372.000 — keduanya sudah mencakup komponen talenta/SDM.
> **Number/specific**: Estimasi biaya tahunan cloud storage DW: ~USD 359.951; on-premise DW: ~USD 372.279. Komponen talent (database architect, data analyst, data engineer) berkontribusi sekitar USD 268.000/tahun. Ini adalah estimasi komposit dari sumber analitik independen, bukan data SAP.
> **Source**: Multiple — data-sleek.com/blog/how-much-does-a-data-warehouse-cost/; portable.io/learn/data-warehouse-cost; lucentinnovation.com/blogs/it-insights/data-warehouse-implementation-steps-and-costs, diakses 2026-06-08
> **Confidence**: medium — angka ini adalah estimasi komposit dari konsultan independen untuk general-purpose DW (bukan SAP-specific). Gunakan sebagai kerangka ilustratif; tandai sebagai "estimasi komposit dari berbagai analis industri" bukan angka SAP atau Soltius.

> **Claim 16**: SAP Datasphere dibangun di atas SAP HANA Cloud dan mengintegrasikan data integration, data cataloging, semantic modeling, data warehousing, data federation, dan data virtualization dalam satu platform terpadu.
> **Number/specific**: SAP Datasphere = DWaaS (Data Warehouse as a Service) di public cloud dengan siklus rilis cepat; SAP HANA Cloud berfungsi sebagai fondasi engine in-memory untuk pemrosesan analitik cepat. Keduanya saling melengkapi, bukan bersaing.
> **Source**: SAP Community — "What are the use cases of SAP Datasphere over SAP BW4/HANA", community.sap.com/t5/technology-q-a/what-are-the-use-cases-of-sap-datasphere-over-sap-bw4-hana/qaq-p/13657596; SAP Community — "The Power Duo: SAP HANA Cloud and SAP Datasphere", community.sap.com/t5/technology-blog-posts-by-sap/the-power-duo-sap-hana-cloud-and-sap-datasphere-enabling-ida-amp-gen-ai/ba-p/13712028, diakses 2026-06-08
> **Confidence**: high

---

## Solution focus + Soltius anchor (from product_matrix.md)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| SAP Datasphere | Platform cloud DWaaS berbasis CU; pengganti SAP Data Warehouse Cloud (Maret 2023); CU mencakup compute+storage+data lake+BW Bridge+integrasi; minimum 1.532 CU/bulan sejak April 2024; tidak ada harga per-CU publik yang dapat dikutip | H2 #2 (model biaya cloud) | Data and AI Consulting + Data Management solution |
| SAP HANA Cloud | Engine in-memory fondasi Datasphere; model CU yang sama; stop/start untuk efisiensi biaya; komputasi tidak ditagih saat instance dimatikan | H2 #2 (model biaya) — disebutkan bersama Datasphere | Data and AI Consulting |
| SAP BW/4HANA | Opsi on-premise/private; mainstream maintenance hingga akhir 2040 (selaras S/4HANA); CapEx upfront untuk lisensi dan infrastruktur; cocok untuk enterprise dengan data stabil dan investasi data center yang sudah ada | H2 #2 (model biaya on-premise) | Data Management solution |
| Konsep TCO | 5 komponen biaya: (1) platform/lisensi/kapasitas, (2) integrasi & ETL, (3) migrasi data historis, (4) talenta/SDM, (5) pemeliharaan & dukungan | H2 #1 (definitional) — core kerangka artikel | — |

**Soltius self-mention placements (max 2–3):**
1. **Closing/CTA** (wajib): "Melalui layanan Data and AI Consulting, Soltius merancang arsitektur data warehouse modern (SAP Datasphere/BW/4HANA) yang sesuai anggaran dan kebutuhan bisnis."
2. **Mid-article aside H2 #4** (opsional): Satu kalimat — estimasi biaya akurat membutuhkan asesmen lanskap data yang menyeluruh; pengalaman implementasi lintas industri membantu mengidentifikasi biaya tersembunyi sejak awal.

---

## Authoritative external sources (for the writer to link out)

1. **SAP News — "SAP Introduces SAP Datasphere" (Maret 2023)** — news.sap.com/hk/2023/03/sap-introduces-sap-datasphere-to-simplify-customers-data-landscape/ — *backs*: product name change (DWC → Datasphere), capabilities (data integration, cataloging, semantic modeling, warehousing, federation, virtualization), elimination of "hidden data tax".

2. **TechTarget — "On-Premises vs. Cloud Data Warehouses: Pros and Cons"** — techtarget.com/searchdatamanagement/tip/On-premises-vs-cloud-data-warehouses-Pros-and-cons — *backs*: cloud vs on-prem TCO comparison, hidden cost categories, provisioning time contrast, when on-premise is more cost-effective (stable enterprise-scale workloads).

3. **SAP Community — "SAP Business Data Cloud and what it means for SAP Datasphere"** — community.sap.com/t5/technology-blog-posts-by-sap/sap-business-data-cloud-and-what-it-means-for-sap-datasphere/ba-p/14036678 — *backs*: SAP BDC announcement (Februari 2025), Datasphere continuity for existing customers, BDC as fully managed SaaS unifying Datasphere + SAC.

---

## FAQ Q&As (6 drafted, Bahasa Indonesia)

### Berapa kisaran biaya data warehouse untuk perusahaan menengah?
Sulit menyebut satu angka karena komponen biayanya luas. Berbagai analis industri memperkirakan total biaya tahunan data warehouse (termasuk platform, integrasi, dan SDM) berkisar antara USD 100.000 hingga USD 500.000 untuk perusahaan menengah, tergantung volume data, kompleksitas sumber, dan model penyebaran yang dipilih. Angka ini perlu diverifikasi melalui asesmen internal — bukan dari brosur vendor.

### Apakah cloud data warehouse selalu lebih murah daripada on-premise?
Tidak selalu. Cloud unggul di tahun pertama (tidak ada CapEx besar) dan untuk workload yang fluktuatif atau tumbuh pesat. Namun, untuk perusahaan dengan volume data besar (di atas 100 TB) yang stabil dan sudah memiliki infrastruktur data center, on-premise bisa lebih hemat dalam jangka panjang — dengan catatan biaya staffing dan pemeliharaan diperhitungkan secara jujur. Kuncinya adalah membandingkan TCO 3–5 tahun, bukan hanya harga lisensi awal.

### Apa itu consumption-based pricing pada cloud data warehouse?
Consumption-based pricing adalah model di mana Anda membayar sesuai sumber daya yang benar-benar digunakan, bukan kapasitas yang dibeli di muka. SAP Datasphere dan SAP HANA Cloud, misalnya, menggunakan Capacity Unit (CU) sebagai satuan pengukuran — CU mencakup compute, storage, dan layanan integrasi. Jika workload turun, Anda bisa mengurangi konsumsi; SAP HANA Cloud bahkan memungkinkan instance dimatikan sehingga biaya compute berhenti sementara storage tetap berjalan.

### Berapa lama biasanya investasi data warehouse mencapai break-even?
Tidak ada angka tunggal karena tergantung skala bisnis, kompleksitas implementasi, dan seberapa cepat organisasi mengadopsi penggunaan data. Secara umum, investasi data warehouse cenderung mulai menunjukkan nilai bisnis (efisiensi pelaporan, keputusan lebih cepat) dalam 12–24 bulan pertama pasca go-live. Break-even finansial penuh — termasuk pemulihan biaya implementasi dan integrasi — biasanya dicapai dalam 2–4 tahun, tergantung pada seberapa aktif platform digunakan oleh tim bisnis.

### Komponen biaya mana yang paling sulit diprediksi dalam anggaran data warehouse?
Tiga yang paling sering mengejutkan: (1) integrasi sumber data non-standar — terutama sistem lama atau data pihak ketiga yang formatnya tidak konsisten; (2) pembersihan dan migrasi data historis — volume dan kualitas data aktual hampir selalu berbeda dari perkiraan awal; (3) biaya egress cloud — biaya transfer data keluar platform, terutama untuk query lintas sistem atau laporan yang diakses dari luar jaringan utama. Ketiga komponen ini jarang muncul dalam kalkulator biaya standar vendor.

### Apakah biaya migrasi data dihitung terpisah dari biaya platform?
Ya, umumnya terpisah. Biaya platform (lisensi/kapasitas) mencakup hak penggunaan perangkat lunak dan infrastruktur cloud. Biaya migrasi data — yang meliputi ekstraksi dari sistem sumber, transformasi format, pembersihan data historis, dan validasi kualitas — adalah pekerjaan proyek tersendiri yang ditagihkan secara terpisah oleh tim implementasi atau konsultan. Untuk proyek menengah, biaya implementasi dan migrasi sering kali dua hingga tiga kali lipat biaya lisensi tahun pertama.

---

## Data tables for the writer

### Tabel 1: Model Biaya — Cloud (OpEx) vs On-Premise (CapEx)

| Aspek | Cloud Data Warehouse (OpEx) | On-Premise Data Warehouse (CapEx) |
|---|---|---|
| Investasi awal | Rendah — tidak ada pembelian hardware; mulai dari subscription | Tinggi — server, storage, lisensi dibayar di muka |
| Model penagihan | Berbasis konsumsi/kapasitas (mis. CU pada SAP Datasphere) | Lisensi perpetual + biaya pemeliharaan tahunan (~18–22% dari harga lisensi) |
| Provisioning | Jam hingga hari | Minggu hingga beberapa bulan |
| Skalabilitas | Elastis — scale up/down sesuai kebutuhan | Terbatas kapasitas hardware yang sudah dibeli; upgrade = capex baru |
| SDM yang dibutuhkan | Lebih sedikit infra-admin; fokus ke data engineer & analyst | Perlu DBA, sysadmin, network engineer khusus |
| Biaya tersembunyi khas | Egress, idle compute, governance tooling | Hardware refresh (3–5 tahun), power & cooling, disaster recovery |
| Cocok untuk | Workload fluktuatif, pertumbuhan pesat, anggaran CapEx terbatas | Data volume besar & stabil, infrastruktur existing kuat, regulasi data ketat |

### Tabel 2: 5 Komponen Biaya TCO Data Warehouse

| Komponen | Apa yang termasuk | Mudah diprediksi? |
|---|---|---|
| 1. Platform / Lisensi / Kapasitas | Biaya subscription cloud atau lisensi on-prem; CU untuk SAP Datasphere/HANA Cloud | Relatif ya — ada estimator resmi |
| 2. Integrasi & ETL | Konektor ke sistem sumber (ERP, CRM, IoT, flat file); pipeline data; middleware | Sulit — kompleksitas sumber sering di bawah perkiraan |
| 3. Migrasi Data Historis | Ekstraksi, pembersihan, transformasi, validasi data lama | Sulit — kualitas data lama sering mengejutkan |
| 4. Talenta / SDM | Data engineer, DBA, data analyst; pelatihan pengguna bisnis | Sedang — pasar talenta data mahal & langka |
| 5. Pemeliharaan & Dukungan | Pembaruan platform, monitoring, support kontrak, lingkungan dev/test | Sedang — tapi lingkungan non-produksi sering dilupakan |

---

## Edge cases & nuance

- **Cloud tidak selalu lebih murah**: Untuk perusahaan dengan data stabil, volume besar, dan tim IT internal kuat, on-premise bisa lebih hemat dalam 5+ tahun. Writer harus menyampaikan ini di H2 #5 dengan jelas agar artikel tidak membaca seperti advertorial cloud.
- **SAP Datasphere vs SAP BW/4HANA bukan pilihan eksklusif**: BW/4HANA dapat berjalan di atas SAP HANA Cloud (private atau managed), sementara Datasphere adalah pendekatan cloud-native DWaaS. Banyak enterprise SAP menjalankan keduanya dalam ekosistem hybrid. Jangan posisikan sebagai "satu lebih baik dari yang lain" tanpa konteks.
- **SAP Business Data Cloud (BDC, Februari 2025)** adalah layer baru di atas Datasphere + SAC + Databricks. Bagi pelanggan Datasphere yang ada, tidak ada perubahan wajib segera. Writer boleh menyebutnya sebagai "arah terbaru ekosistem SAP data" tanpa detail teknis mendalam — karena BDC masih baru dan model biayanya berbeda.
- **Angka harga per-CU tidak boleh dikutip**: Tidak ada halaman pricing SAP yang terbuka secara publik (semua memerlukan login atau kontak sales). Semua angka biaya dalam artikel HARUS ditandai sebagai ilustrasi atau estimasi industri umum.
- **"Talent cost" sangat konteks-spesifik di Indonesia**: Gaji data engineer di Indonesia berbeda jauh dari benchmarks US/EU yang banyak dijadikan referensi artikel global. Writer sebaiknya menyebut talenta sebagai "komponen biaya yang sering diremehkan" tanpa menyebut angka rupiah yang bisa menyesatkan.
- **Break-even period bervariasi luas**: Tidak ada angka resmi dari SAP atau Gartner khusus untuk data warehouse break-even. Angka 2–4 tahun yang ada di dossier ini adalah estimasi berbasis TCO komposit dari berbagai sumber — tandai sebagai gambaran umum, bukan garansi.

---

## Flags (open factual risk)

- **Flag 1 — Harga per-CU SAP Datasphere**: Brief meminta verifikasi model billing SAP Datasphere. Terkonfirmasi bahwa model berbasis CU dan minimum 1.532 CU/bulan (April 2024). Namun **harga per-CU dalam mata uang tidak tersedia** di halaman publik SAP (semua halaman pricing.html mengembalikan HTTP 403 atau memerlukan login). Rekomendasi: **jangan sebut angka harga per-CU**. Framing aman: "SAP Datasphere menggunakan model Capacity Unit yang memungkinkan estimasi biaya melalui SAP Datasphere Estimator Tool sebelum berlangganan."

- **Flag 2 — Angka TCO cloud vs on-premise**: Sumber yang tersedia (Bizowie, erpsoftwareblog, independen) memberikan range USD 350k–1.1M untuk 5-tahun TCO, tetapi ini **data ERP umum**, bukan khusus data warehouse SAP. Rekomendasi: Gunakan hanya sebagai kerangka ilustratif dan tandai sumber; jangan menyajikannya sebagai "data SAP Datasphere" atau "data Soltius". Framing: "Sebagai gambaran umum dari berbagai analisis TCO..."

- **Flag 3 — Gartner "85% cloud-first" sudah melewati target tahun**: Proyeksi ini dibuat 2021 untuk target 2025. Sudah melewati tahun target per 2026-06-08. Rekomendasi: gunakan hanya sebagai konteks tren historis — "Gartner (2021) memproyeksikan..." — atau cari data Gartner yang lebih baru jika tersedia. Jangan sajikan sebagai proyeksi masa depan.

- **Flag 4 — SAP BW 7.5 vs BW/4HANA mudah tertukar**: SAP BW 7.5 berakhir mainstream maintenance 2027 (extended 2030); SAP BW/4HANA berlanjut hingga 2040. Ini dua produk berbeda. Jika writer menyebut "BW", harus jelas versi mana. Rekomendasi: gunakan nama lengkap selalu pada pertama kali disebut; tambahkan catatan klarifikasi di teks jika perlu.

- **Flag 5 — SAP Business Data Cloud (BDC) — produk sangat baru**: Diluncurkan Februari 2025, GA April 2025. Model harga BDC berbeda dari Datasphere standalone — CU di BDC dapat dibagi antara Datasphere, SAC, dan Databricks secara fleksibel. Jika writer menyebut BDC, jangan menyamakan CU BDC dengan CU Datasphere standalone. Rekomendasi: sebutkan BDC hanya sebagai "arah strategis terbaru ekosistem data SAP" tanpa detail teknis/harga yang belum stabil.

---

## Definition snippet draft (40–60 words)

> Total Cost of Ownership (TCO) data warehouse adalah keseluruhan biaya yang ditanggung sepanjang siklus hidup sistem — bukan hanya lisensi platform. TCO mencakup lima komponen utama: biaya platform dan kapasitas, integrasi dan ETL, migrasi data historis, talenta dan SDM, serta pemeliharaan dan dukungan berkelanjutan. Memahami kelima komponen ini adalah langkah pertama menyusun anggaran yang realistis.

---

## Notes for image-planner

- **Concept 1 — Infografis "5 Komponen TCO Data Warehouse"**: Diagram lingkaran atau pilar horizontal yang menampilkan 5 komponen biaya (platform/kapasitas, integrasi/ETL, migrasi data, talenta/SDM, pemeliharaan). Setiap komponen diberi label singkat + ikon. Gaya: clean, B2B, warna biru/abu selaras brand Soltius. Digunakan di H2 #1 atau sesudahnya.

- **Concept 2 — Tabel visual "Cloud (OpEx) vs On-Premise (CapEx)"**: Versi visual dari tabel perbandingan model biaya — dua kolom dengan checklist/ikon yang kontras. Highlight: "provisioning jam vs bulan", "scale elastis vs fixed", "cocok untuk" di bawah masing-masing kolom. Ideal untuk screenshot dan berbagi internal. Digunakan di H2 #2.

- **Concept 3 — Diagram "5 Langkah Menyusun Anggaran Data Warehouse"**: Timeline horizontal atau numbered flow diagram untuk kerangka anggaran di H2 #4: (1) Inventarisasi sumber data → (2) Estimasi volume & pertumbuhan → (3) Pilih model penyebaran → (4) Hitung biaya tahun-1 vs tahun-3 → (5) Tambah cadangan kontingensi. Gaya clean, cocok untuk presentasi internal CFO/CIO.
