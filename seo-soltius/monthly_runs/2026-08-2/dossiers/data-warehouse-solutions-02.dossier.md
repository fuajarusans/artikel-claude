---
brief_id: "data-warehouse-solutions-02"
researcher_run_date: "2026-08-11"
sources_cited: 12
flags: 6
---

# Research Dossier: SAP Datasphere vs Snowflake vs Databricks: Panduan Memilih

## TL;DR for the writer

- **Tiga DNA berbeda, bukan tiga produk sejenis.** SAP Datasphere = *business data fabric* (semantic/business context native ke S/4HANA); Snowflake = *cloud data warehouse* SQL/BI (pemisahan storage–compute, pricing konsumsi); Databricks = *lakehouse* (Delta Lake + Unity Catalog, kuat untuk data engineering/ML/AI). Framing artikel: cocokkan kekuatan platform dengan profil beban kerja pembeli, bukan menobatkan pemenang.
- **Angle inti yang membedakan cluster ini: SAP + Databricks kini rekan, bukan hanya rival.** SAP Business Data Cloud (BDC) diumumkan **Februari 2025** dan meng-*embed* teknologi Databricks; **BDC Connect** memungkinkan berbagi data **dua-arah, zero-copy, via Delta Sharing** — jadi "pilih satu" makin sering menjadi "kombinasikan". Ini pembeda utama dari artikel prior yang hanya membandingkan produk SAP satu sama lain.
- **Netralitas adalah fitur, bukan bug.** Semua artikel kompetitor berbahasa Inggris & ditulis vendor pihak-ketiga dengan bias "keluar dari SAP". Whitespace Soltius: panduan **Bahasa Indonesia, netral, dari sudut pembeli SAP-centric** yang jujur soal kapan tetap di SAP dan kapan Snowflake/Databricks lebih tepat.
- **Aturan pricing (WAJIB):** sajikan sebagai *model* — Snowflake & Databricks = konsumsi (credits/DBU, bayar sesuai pakai); Datasphere = berbasis kapasitas/langganan. JANGAN kutip angka rupiah/dolar. JANGAN klaim "termurah/terbaik" absolut.
- **Klaim performa/memori Datasphere** (mis. out-of-memory saat dataset besar) hanya boleh muncul sebagai "dilaporkan sebagian pengguna", dengan atribusi — bukan fakta mutlak.

## Core facts (verified)

> **Claim**: SAP Business Data Cloud (BDC) diumumkan pada Februari 2025 sebagai solusi baru yang menyatukan data SAP dan pihak-ketiga, dikembangkan bersama Databricks.
> **Number/specific**: diumumkan 13–14 Februari 2025; "natively embeds Databricks technology for data engineering, machine learning and AI workloads".
> **Source**: SAP News SEA, "SAP Debuts Business Data Cloud with Databricks to Turbocharge Business AI" — https://news.sap.com/sea/2025/02/sap-debuts-business-data-cloud-with-databricks-to-turbocharge-business-ai/ (diakses 2026-08-11)
> **Confidence**: high

> **Claim**: Databricks meluncurkan "SAP Databricks", produk yang di-embed native di dalam SAP Business Data Cloud dan dijual oleh SAP.
> **Number/specific**: diumumkan 13 Feb 2025; dijual SAP sebagai bagian dari BDC; rollout bertahap di AWS, Azure, Google Cloud; Databricks mengalokasikan ~US$250 juta untuk kesuksesan pelanggan/partner.
> **Source**: Databricks Newsroom, "Databricks Announces Launch of SAP Databricks" — https://www.databricks.com/company/newsroom/press-releases/databricks-announces-launch-sap-databricks (diakses 2026-08-11)
> **Confidence**: high

> **Claim**: SAP Business Data Cloud Connect memungkinkan berbagi data SAP dengan Databricks secara dua-arah (bidirectional), live, dan zero-copy melalui protokol Delta Sharing.
> **Number/specific**: "bi-directional, live, zero-copy SAP data sharing with Databricks via Delta Sharing"; data tetap di storage BDC, Databricks meng-query in-place tanpa menyalin/memindahkan; SAP tetap menjadi system of governance.
> **Source**: SAP Community (technology blog by SAP), "SAP BDC Connect: SAP elevates bidirectional zero-copy data sharing" — https://community.sap.com/t5/technology-blog-posts-by-sap/sap-bdc-connect-sap-elevates-bidirectional-zero-copy-data-sharing-with-game/ba-p/14244067 (diakses 2026-08-11)
> **Confidence**: high

> **Claim**: SAP Datasphere adalah teknologi inti dari SAP Business Data Fabric — arsitektur yang menghubungkan data, semantik, dan proses bisnis dalam satu lapisan tanpa duplikasi.
> **Number/specific**: "business data fabric... connects data, semantics, and business processes into a unified layer... without duplication"; Datasphere adalah "knowledge core" yang menjaga business context lintas lingkungan hybrid/multi-cloud.
> **Source**: SAP News, "A Deeper Look Into How SAP Datasphere Enables a Business Data Fabric" (Mar 2023) — https://news.sap.com/2023/03/sap-datasphere-business-data-fabric/ (diakses 2026-08-11)
> **Confidence**: high

> **Claim**: SAP Datasphere memiliki integrasi native dengan SAP S/4HANA, SAP Cloud ERP, dan SAP BW, dan dapat menghubungkan (federasi) atau mereplikasi data tanpa memindahkannya.
> **Number/specific**: fitur "Semantic Onboarding" membawa Virtual Data Model (VDM) berbasis CDS dari S/4HANA langsung ke Datasphere, mewarisi business context tanpa rework manual; replication task otomatis menangani initial load + delta.
> **Source**: SAP Product page + SAP Community (S/4HANA integration guide) — https://www.sap.com/products/data-cloud/datasphere.html ; https://community.sap.com/t5/technology-blog-posts-by-sap/sap-datasphere-sap-s-4hana-your-guide-to-seamless-data-integration/ba-p/13662817 (diakses 2026-08-11)
> **Confidence**: high

> **Claim**: SAP Datasphere adalah penerus/evolusi dari SAP Data Warehouse Cloud (DWC), yang di-*rebrand* pada Maret 2023.
> **Number/specific**: diumumkan 8 Maret 2023; bukan sekadar ganti nama — menambah global data catalog, analytic model, dan kemitraan; pelanggan lama tidak perlu migrasi.
> **Source**: SAP Community + CIO.com, "SAP rounds out data warehouse cloud functionality, renamed Datasphere" — https://www.cio.com/article/464123/ (diakses 2026-08-11)
> **Confidence**: high

> **Claim**: Databricks mempopulerkan arsitektur *lakehouse*, yang menggabungkan fleksibilitas/biaya data lake dengan manajemen/keandalan data warehouse.
> **Number/specific**: lakehouse "replaces the dependency on data lakes and data warehouses"; fondasinya Delta Lake membawa jaminan ACID ke filesystem data lake.
> **Source**: Databricks Docs, "What is a data lakehouse?" — https://docs.databricks.com/aws/en/lakehouse/ (diakses 2026-08-11)
> **Confidence**: high

> **Claim**: Delta Lake adalah lapisan penyimpanan open-source di atas cloud object storage (S3/ADLS/GCS) yang membawa transaksi ACID; Unity Catalog adalah solusi tata kelola (governance) terpadu untuk data & AI di Databricks.
> **Number/specific**: Unity Catalog menyatukan governance untuk data terstruktur/tak-terstruktur, tabel Delta Lake & Apache Iceberg, model ML, notebook, dashboard; hierarki Metastore → Catalog → Schema → Tables/Views/Volumes/Models.
> **Source**: Databricks Docs / Product (Lakehouse, Unity Catalog) — https://docs.databricks.com/aws/en/lakehouse/ ; https://www.databricks.com/product/unity-catalog (diakses 2026-08-11)
> **Confidence**: high

> **Claim**: Arsitektur Snowflake memisahkan storage, compute, dan services, memungkinkan penskalaan independen dan model pricing berbasis konsumsi.
> **Number/specific**: tiga lapisan (storage/compute/services); compute (virtual warehouse) ditagih per detik saat aktif via "credits"; storage ditagih per TB terkompresi (rata-rata harian); "pay only for what you use".
> **Source**: Snowflake Blog, "How Usage-Based Pricing Delivers a Budget-Friendly Data Cloud" — https://www.snowflake.com/en/blog/how-usage-based-pricing-delivers-a-budget-friendly-cloud-data-warehouse/ (diakses 2026-08-11)
> **Confidence**: high

> **Claim**: Snowflake dan Databricks sama-sama mendukung format tabel terbuka Apache Iceberg untuk mengurangi vendor lock-in; Databricks membuka sebagian Unity Catalog (2024) dan Snowflake mendorong Apache Polaris.
> **Number/specific**: Iceberg REST Catalog API memberi akses baca (GA) & tulis (Preview) dari engine eksternal (Databricks, Trino, Amazon EMR); Iceberg diposisikan sebagai standar netral engine-agnostic.
> **Source**: Snowflake Blog (open table formats) + Databricks Blog (open lakehouse) — https://www.snowflake.com/en/blog/data-sharing-open-table-formats/ ; https://www.databricks.com/blog/what-open-lakehouse-open-data-standards-explained (diakses 2026-08-11)
> **Confidence**: high (catatan: kedua vendor punya bias promosi soal "siapa lebih terbuka" — sajikan seimbang)

> **Claim**: SAP Datasphere menjaga *business context* / semantic layer dari aplikasi SAP, sesuatu yang tidak otomatis dibawa saat data diekspor mentah ke warehouse/lakehouse generik.
> **Number/specific**: Datasphere "connects – rather than just extracts – data... to a business semantic layer", memungkinkan self-service modeling tanpa harus paham struktur tabel aplikasi SAP yang kompleks.
> **Source**: SAP (Datasphere business data fabric) — https://news.sap.com/2023/03/sap-datasphere-business-data-fabric/ (diakses 2026-08-11)
> **Confidence**: high

> **Claim**: Sebagian pengguna melaporkan kendala performa/memori pada SAP Datasphere untuk beban dataset sangat besar (mis. error out-of-memory saat preview/konsumsi model di SAC).
> **Number/specific**: laporan komunitas menyebut OOM saat menangani objek ratusan juta baris pada tenant terbatas; sebagian tim "masih bersandar pada Snowflake" untuk beban tertentu.
> **Source**: SAP Community Q&A (OOM) + Fivetran blog (perspektif pihak-ketiga) — https://community.sap.com/t5/technology-q-a/sap-datasphere-cannot-allocate-enough-memory-allocation-failed-reason/qaq-p/13904648 ; https://www.fivetran.com/blog/sap-datasphere-vs-modern-data-platforms (diakses 2026-08-11)
> **Confidence**: medium (anekdotal/komunitas — WAJIB diatribusikan sebagai "dilaporkan sebagian pengguna", bukan fakta absolut; performa bergantung pada sizing tenant & desain model)

> **Claim**: Konteks Indonesia: investasi enterprise diprioritaskan pada data & AI analytics dan cloud, mendukung urgensi keputusan platform data.
> **Number/specific**: di Indonesia fokus investasi pada data & AI analytics (62%) dan cloud computing (62%); pasar cloud APAC (IDC) diproyeksi ~US$250 miliar pada 2025, tumbuh ~14% CAGR.
> **Source**: IDC (APAC public cloud) via IDC press + laporan industri — https://my.idc.com/getdoc.jsp?containerId=prAP53239725 (diakses 2026-08-11)
> **Confidence**: medium (angka pasar dari vendor riset berbeda-beda; sajikan sebagai indikasi tren, bukan angka pasti — lihat Flags)

## Solution focus + Soltius anchor (from product_matrix.md)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| **SAP Datasphere** (business data fabric, semantic/business context, integrasi native S/4HANA) | Penerus Data Warehouse Cloud (2023); federasi/replikasi tanpa duplikasi; Semantic Onboarding VDM dari S/4HANA | H2 #1, #2, #3 | Data and AI Consulting |
| **SAP HANA Cloud** (fondasi in-memory di bawah Datasphere/BDC) | Fondasi data untuk Datasphere & BDC | H2 #1 (ringkas) | — |
| **SAP Business Data Cloud** (konvergensi SAP–Databricks) | Diumumkan Feb 2025; embed Databricks; BDC Connect = bidirectional zero-copy Delta Sharing | H2 #5 (subjek konvergensi, bukan utama) | Data and AI Consulting |
| **Snowflake** (cloud data warehouse SQL/BI) | Pemisahan storage–compute; pricing konsumsi (credits); dukungan Iceberg | H2 #1, #2, #4 | — (netral) |
| **Databricks** (lakehouse) | Delta Lake (ACID), Unity Catalog (governance), kuat ML/AI; pricing konsumsi (DBU) | H2 #1, #2, #4 | — (netral) |
| **Anchor Soltius** | Merancang arsitektur data untuk lanskap SAP + non-SAP (koeksistensi), bukan menjual satu produk | **Closing CTA** | **Data and AI Consulting + SAP Platinum Partner via United VARs** |

Reminder: Soltius **mengimplementasikan/mengintegrasikan/mendukung** teknologi ini — tidak membangunnya. Maks 2–3 self-mention Soltius; utamakan di closing. Jaga netralitas di body (jangan menjadikan artikel iklan SAP).

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **SAP News — "SAP Debuts Business Data Cloud with Databricks" (Feb 2025)** — https://news.sap.com/sea/2025/02/sap-debuts-business-data-cloud-with-databricks-to-turbocharge-business-ai/ — *what it backs*: peluncuran BDC + kemitraan Databricks, embedding native, tanggal.
2. **Databricks Newsroom — "Databricks Announces Launch of SAP Databricks" (13 Feb 2025)** — https://www.databricks.com/company/newsroom/press-releases/databricks-announces-launch-sap-databricks — *what it backs*: SAP Databricks di-embed di BDC, dijual oleh SAP, governance Unity Catalog, rollout hyperscaler.
3. **SAP Community (SAP tech blog) — "SAP BDC Connect: bidirectional zero-copy data sharing"** — https://community.sap.com/t5/technology-blog-posts-by-sap/sap-bdc-connect-sap-elevates-bidirectional-zero-copy-data-sharing-with-game/ba-p/14244067 — *what it backs*: mekanisme Delta Sharing dua-arah zero-copy, SAP sebagai system of governance.
4. **Databricks Docs — "What is a data lakehouse?"** — https://docs.databricks.com/aws/en/lakehouse/ — *what it backs*: definisi lakehouse, Delta Lake ACID, Unity Catalog governance.
5. **Snowflake Blog — "Usage-Based Pricing"** — https://www.snowflake.com/en/blog/how-usage-based-pricing-delivers-a-budget-friendly-cloud-data-warehouse/ — *what it backs*: arsitektur storage/compute terpisah + model pricing konsumsi.
6. **Fivetran Blog — "SAP Datasphere vs. modern data platforms"** — https://www.fivetran.com/blog/sap-datasphere-vs-modern-data-platforms — *what it backs*: perspektif pihak-ketiga (KUTIP SEBAGAI PERSPEKTIF, bukan endorsement — vendor punya bias pro-non-SAP).

Priority terpakai: SAP official (#1, #3) > Databricks/Snowflake vendor docs (#2, #4, #5) > tech press/perspektif (#6). Untuk konteks Indonesia opsional: IDC (APAC public cloud).

## FAQ Q&As (6 drafted, Bahasa Indonesia)

### SAP Datasphere vs Snowflake, mana yang lebih baik?
Tidak ada jawaban tunggal — keduanya menjawab kebutuhan berbeda. SAP Datasphere unggul bila mayoritas data Anda berada di S/4HANA/SAP karena mempertahankan *business context* dan semantik native tanpa rework. Snowflake unggul untuk warehouse SQL/BI lintas sumber dengan penskalaan elastis dan pricing berbasis konsumsi. Pilih berdasar profil sumber data, keahlian tim, dan pola beban kerja — bukan label "terbaik".

### Apakah Databricks bisa menggantikan SAP BW?
Bisa secara teknis, tetapi belum tentu tepat. Databricks (lakehouse) kuat untuk data engineering, machine learning, dan data non-SAP dalam skala besar. Namun mengekspor data SAP mentah ke lakehouse berisiko kehilangan business context/semantic layer yang sudah tertanam di BW/Datasphere. Sejak SAP Business Data Cloud (Feb 2025), pola yang makin umum bukan "mengganti", melainkan mengombinasikan keduanya via zero-copy Delta Sharing.

### Apa itu SAP Business Data Cloud?
SAP Business Data Cloud (BDC) adalah solusi data terkelola yang diumumkan SAP pada Februari 2025, menyatukan data SAP dan pihak-ketiga serta meng-*embed* teknologi Databricks untuk data engineering, ML, dan AI. Lewat fitur BDC Connect, data SAP dan Databricks dapat dibagikan dua-arah secara *zero-copy* menggunakan protokol Delta Sharing—tanpa menyalin atau memindahkan data, dengan SAP tetap sebagai system of governance.

### Apakah SAP Datasphere lebih mahal dari Snowflake?
Sulit dibandingkan langsung karena model pricing-nya berbeda. Snowflake memakai model konsumsi (credits): Anda membayar compute per detik saat virtual warehouse aktif plus penyimpanan. SAP Datasphere umumnya berbasis kapasitas/langganan. Total biaya sangat bergantung pola beban kerja, volume data, dan efisiensi desain model—bukan harga daftar. Hindari kesimpulan "lebih murah/mahal" tanpa menghitung skenario penggunaan Anda sendiri.

### Bisakah menggabungkan data SAP dan non-SAP dalam satu warehouse?
Bisa, dan ini justru arah industri saat ini. SAP Datasphere dapat memfederasi atau mereplikasi data dari sumber SAP maupun non-SAP tanpa selalu menduplikasinya. Sejak SAP Business Data Cloud (2025), data SAP bahkan dapat diakses langsung dari Databricks—dan sebaliknya—secara zero-copy via Delta Sharing. Kuncinya adalah merancang arsitektur (federation vs replication) yang menjaga tata kelola dan business context.

### Apa itu semantic layer, dan mengapa penting?
Semantic layer adalah lapisan yang menerjemahkan struktur data teknis yang kompleks menjadi entitas bisnis yang mudah dipahami (mis. "pendapatan", "pelanggan", "pusat biaya). Dalam ekosistem SAP, layer ini membawa *business context* dari S/4HANA sehingga angka konsisten dan pengguna bisnis bisa membangun laporan tanpa memahami tabel mentah. Bila data SAP diekspor mentah ke warehouse generik, konteks ini bisa hilang dan harus dibangun ulang.

## Data tables for the writer

### Tabel 1 — Head-to-head: 7 kriteria pembeli (draft untuk disempurnakan writer)

| Kriteria | SAP Datasphere | Snowflake | Databricks |
|---|---|---|---|
| **DNA / kategori** | Business data fabric (semantic + warehouse) | Cloud data warehouse (SQL/BI) | Lakehouse (data lake + warehouse) |
| **Integrasi sumber SAP** | Native (VDM/CDS S/4HANA, BW); business context terjaga | Via konektor/ETL pihak-ketiga | Via konektor; native lewat BDC Connect (Delta Sharing) |
| **Semantic / business context** | Kuat (bawaan dari aplikasi SAP) | Terbatas (dibangun terpisah) | Terbatas (dibangun terpisah/Unity Catalog) |
| **ML / AI & data science** | Berkembang (via BDC/Databricks) | BI/analitik SQL; ML lewat mitra/Snowpark | Sangat kuat (Delta Lake, MLflow, notebook) |
| **Model pricing** | Berbasis kapasitas/langganan | Konsumsi (credits, per-detik) | Konsumsi (DBU) |
| **Openness / lock-in** | Ekosistem SAP-centric; membuka via Delta Sharing | Iceberg/Polaris; interoperable | Delta Lake + Iceberg; sebagian komponen proprietary |
| **Keahlian tim yang cocok** | Tim SAP/BW existing | Analis SQL/BI | Data/ML engineer |

> Catatan pengisian: semua sel bersifat *karakteristik umum*, bukan skor. Baris pricing WAJIB tetap sebagai model (tanpa angka). Hindari kolom "pemenang".

### Tabel 2 — Warehouse vs Lakehouse vs Business Data Fabric (untuk definisi snippet/H2 #1)

| Konsep | Inti | Cocok untuk | Contoh platform |
|---|---|---|---|
| **Data warehouse** | Penyimpanan terstruktur untuk BI/pelaporan (schema-on-write) | Reporting, dashboard, SQL analytics | Snowflake, SAP BW/4HANA |
| **Lakehouse** | Menggabungkan skala data lake + keandalan warehouse (ACID di object storage) | ML, data engineering, data campuran skala besar | Databricks (Delta Lake) |
| **Business data fabric** | Menghubungkan data + semantik + proses lintas sistem tanpa duplikasi | Menjaga business context SAP, self-service modeling | SAP Datasphere / SAP Business Data Cloud |

## Edge cases & nuance

- **"Datasphere vs Snowflake" sering salah bingkai.** Datasphere adalah *fabric* dengan semantic layer, bukan sekadar warehouse; membandingkannya head-to-head dengan Snowflake pada "kecepatan query" saja mengabaikan nilai business context. Beri pembaca kriteria yang benar.
- **Business Data Cloud mengubah pertanyaan, bukan sekadar menambah opsi.** Sebelum 2025 pilihannya terasa "SAP atau Databricks". Kini SAP mem-posisikan keduanya berdampingan (SAP Databricks di dalam BDC + BDC Connect ke Databricks pelanggan). Jangan bingkai sebagai zero-sum.
- **"SAP Databricks" ≠ Databricks penuh.** SAP Databricks (di-embed di BDC) adalah versi yang di-*curate* SAP dan tidak identik dengan seluruh fitur Databricks komersial (mis. batasan tertentu pada Delta Sharing eksternal). BDC Connect adalah jalur untuk menyambungkan Databricks milik pelanggan sendiri. Writer harus tidak menyamakan keduanya.
- **Openness itu relatif.** Baik Snowflake (Polaris/Iceberg) maupun Databricks (Delta Lake/Iceberg via Unity Catalog) mengklaim "paling terbuka". Sajikan sebagai klaim bersaing; lock-in sebenarnya ada di *storage + catalog*, bukan sekadar engine.
- **Bukan keputusan permanen, tapi mahal untuk dibalik.** Exit cost terbesar ada di format storage & catalog. Memilih format tabel terbuka (Iceberg/Delta) mengurangi—bukan menghilangkan—biaya perpindahan di masa depan.
- **Keahlian tim sering menjadi faktor penentu nyata**, bukan fitur di brosur. Tim SAP/BW yang kuat akan lebih cepat produktif di Datasphere; tim data engineering akan lebih produktif di Databricks.

## Flags (open factual risk)

- ⚠️ **Tanggal peluncuran BDC**: sumber menyebut 13 Feb 2025 (Databricks PR) dan 14 Feb 2025 (SAP News SEA). → Rekomendasi: tulis **"Februari 2025"** saja, aman dan akurat; hindari menegaskan tanggal harian.
- ⚠️ **Angka pricing**: JANGAN kutip angka credits/DBU/CU/rupiah/dolar. → Sajikan hanya sebagai *model* (konsumsi vs kapasitas/langganan). Datasphere memakai "capacity units", Databricks "DBU", Snowflake "credits" — nama unit boleh disebut, angka jangan.
- ⚠️ **Keluhan memori/performa Datasphere**: bersumber komunitas/anekdotal & perspektif vendor pihak-ketiga (Fivetran). → WAJIB diatribusikan "dilaporkan sebagian pengguna"; imbangi dengan catatan bahwa performa bergantung sizing tenant & desain model. Jangan jadikan fakta absolut.
- ⚠️ **Klaim "paling terbuka"**: baik Snowflake maupun Databricks memasarkan diri sebagai paling terbuka. → Sajikan sebagai klaim bersaing dengan atribusi; jangan menobatkan pemenang openness.
- ⚠️ **Nama produk SAP cepat berubah**: "SAP Databricks", "BDC Connect", "Business Data Cloud" relatif baru (2025). → Konfirmasi penamaan tetap berlaku saat publish; frasa "per Februari 2025 / pada peluncurannya".
- ⚠️ **Angka pasar Indonesia/APAC (IDC & riset lain)**: sumber riset berbeda memberi angka berbeda. → Sajikan sebagai indikasi tren ("investasi diprioritaskan pada data & AI analytics dan cloud"), hindari mengutip satu angka pasar sebagai pasti; atribusikan ke IDC bila dipakai.

## Definition snippet draft (52 words)

> **Data warehouse** menyimpan data terstruktur untuk pelaporan/BI; **lakehouse** (mis. Databricks) menggabungkan skala data lake dengan keandalan warehouse untuk analitik dan machine learning; sedangkan **business data fabric** (SAP Datasphere) menghubungkan data, semantik, dan proses bisnis lintas sistem tanpa menduplikasinya—menjaga *business context* dari SAP S/4HANA agar tetap konsisten dan siap dianalisis.
