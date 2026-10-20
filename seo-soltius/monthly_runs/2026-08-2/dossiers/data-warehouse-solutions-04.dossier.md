---
brief_id: "data-warehouse-solutions-04"
researcher_run_date: "2026-08-11"
sources_cited: 8
flags: 6
---

# Research Dossier: Master Data Management vs Data Warehouse — Butuh Keduanya

## TL;DR for the writer

- **Tesis inti (dan sudah terverifikasi otoritatif):** MDM dan data warehouse menyelesaikan masalah yang **berbeda dan komplementer**. TechTarget menyatakan MDM "memperbaiki masalah kualitas data di sisi operasional bisnis DAN melengkapi (augments) data warehouse di sisi analitik" — bukan salah satu menggantikan yang lain. Ini adalah tulang punggung angle "butuh keduanya".
- **MDM bekerja pada entitas master** (pelanggan, produk/material, vendor) untuk menghasilkan **golden record** — satu versi identitas yang tepercaya. **Data warehouse menyatukan data transaksional** (order, invoice, pengiriman) untuk analitik multidimensi. Warehouse mewarisi kualitas data yang dimasukkan: kalau master data-nya kacau, laporannya kacau — hanya "lebih rapi".
- **SAP MDG terverifikasi** sebagai solusi tata kelola master data lintas domain (finance, material, business partner/customer/supplier) dengan dua pilar resmi: **Central Governance** (proses berbasis change-request: workflow → staging → approval → activation → distribution) dan **Consolidation** (memuat dari banyak sumber, standardisasi, deteksi duplikat). MDG **mendistribusikan** master data yang sudah disetujui ke sistem SAP dan non-SAP.
- **Framing SAP yang aman:** posisikan **SAP Datasphere/BW/4HANA** sebagai lapisan analitik yang *mengonsumsi* master data bersih sebagai dimensi — **bukan** pengganti MDM. Jangan menulis bahwa MDG "menggantikan" warehouse, atau bahwa Datasphere "melakukan MDM".
- **Angka pembuka yang kuat:** Gartner memperkirakan buruknya kualitas data merugikan organisasi rata-rata **USD 12,9 juta per tahun** (riset Gartner 2020, masih dikutip luas 2025–2026) — sumber otoritatif untuk membuka "mengapa akar masalahnya penting".

## Core facts (verified)

> **Claim**: Master data adalah data entitas bisnis inti (pelanggan, produk/material, vendor, akun keuangan), berbeda dari data transaksional yang mencatat peristiwa (order, invoice, pengiriman).
> **Number/specific**: Master data sering disebut "golden record" untuk sebuah domain data yang berkaitan dengan entitas subjek data tersebut; data transaksi bersifat event-based dan bervolume tinggi.
> **Source**: TechTarget — "What is Master Data Management (MDM)?", https://www.techtarget.com/searchdatamanagement/definition/master-data-management (diakses 2026-08-11)
> **Confidence**: high

> **Claim**: MDM adalah disiplin yang mengonsolidasikan data dari banyak sistem sumber ke format standar untuk memberi satu tampilan (single view) atas entitas bisnis.
> **Number/specific**: "MDM consolidates data from multiple source systems into a standard format to provide a single view of business entities" — mis. menyeragamkan data pelanggan menjadi satu set master data untuk semua sistem yang relevan.
> **Source**: TechTarget — MDM definition, https://www.techtarget.com/searchdatamanagement/definition/master-data-management (2026-08-11)
> **Confidence**: high

> **Claim**: Golden record adalah satu versi otoritatif, tepercaya, dan lengkap dari sebuah entitas master, dikumpulkan dari beberapa sumber lalu dibersihkan agar konsisten.
> **Number/specific**: "a single, authoritative and reliable version of a particular piece of master data ... the most accurate and complete representation of that data entity, often aggregated from multiple sources and cleansed."
> **Source**: Profisee — "What Is a Golden Record in MDM?", https://profisee.com/blog/what-is-a-golden-record/ ; Informatica — https://www.informatica.com/blogs/golden-record.html (2026-08-11)
> **Confidence**: high

> **Claim**: Ada dua bentuk MDM — analytical MDM (memberi master data konsisten ke data warehouse & sistem analitik) dan operational MDM (master data di sistem bisnis inti).
> **Number/specific**: "analytical MDM, which aims to feed consistent master data to data warehouses and other analytics systems, and operational MDM, which focuses on the master data in core business systems."
> **Source**: TechTarget — MDM definition (2026-08-11)
> **Confidence**: high

> **Claim**: MDM memperbaiki masalah kualitas data di sisi operasional DAN melengkapi data warehouse di sisi analitik — keduanya komplementer, bukan substitusi. (Ini fondasi angle artikel.)
> **Number/specific**: "MDM fixes the data quality problem on the operational side of the business and augments the data warehouse on the analytical side of the business."
> **Source**: TechTarget — MDM definition (2026-08-11)
> **Confidence**: high

> **Claim**: Data warehouse adalah repositori yang memuat data ke satu lingkungan untuk mendukung analitik dan pengambilan keputusan; cenderung monolitik.
> **Number/specific**: "A data warehouse tends to be monolithic and loads data into a single environment, functioning as a repository of data that supports analytics and decision-making." (OLAP; berbeda dari operational data store yang bersifat staging jangka pendek.)
> **Source**: TechTarget — "Operational data store vs. data warehouse", https://www.techtarget.com/searchdatamanagement/answer/What-is-an-operational-data-store-vs-a-data-warehouse (2026-08-11)
> **Confidence**: high

> **Claim**: Match & merge adalah proses memilih atribut paling akurat/terkini tentang entitas yang sama dari dua atau lebih sistem sumber, digabung menjadi satu record.
> **Number/specific**: "Data merging is the process of picking and choosing the most accurate, up-to-date data attributes about the same data entity from two or more source systems into a single record."
> **Source**: Profisee — "Data Merging: Guide and Best Practices", https://profisee.com/blog/data-merging-guide-best-practices/ (2026-08-11)
> **Confidence**: high

> **Claim**: Survivorship rules menentukan nilai mana yang "bertahan" ke golden record saat ada konflik/duplikat — memutuskan sumber mana yang dipercaya untuk tiap atribut.
> **Number/specific**: "MDM survivorship rules govern which data values are saved (or, which ones 'survive') ... decide which source is trusted for each attribute (e.g., CRM owns email, ERP owns billing address)."
> **Source**: Profisee — "MDM Survivorship", https://profisee.com/blog/mdm-survivorship/ (2026-08-11)
> **Confidence**: high

> **Claim**: Data stewardship melibatkan data steward yang meninjau kandidat kecocokan, memilih "pemenang", lalu record digabung menurut aturan survivorship; dibangun di atas kebijakan/standar data.
> **Number/specific**: "Data stewards review potentially matching records and select 'winners,' with records then merged according to pre-defined survivorship rules."
> **Source**: Profisee (survivorship / matching) (2026-08-11)
> **Confidence**: high

> **Claim**: SAP Master Data Governance (MDG) adalah solusi untuk mendefinisikan, menegakkan, memantau, dan memperbaiki master data lintas domain, untuk pengelolaan terpusat atau terdesentralisasi di lanskap hybrid.
> **Number/specific**: "a market-leading solution that allows you to define, enforce, monitor, and improve master data across domains for central or decentralized master data management in hybrid landscapes."
> **Source**: SAP Community — Master Data Governance topic page, https://pages.community.sap.com/topics/master-data-governance (2026-08-11)
> **Confidence**: high

> **Claim**: SAP MDG mendukung sejumlah domain master data standar: financials, material/product, supplier, customer, business partner, dan enterprise asset management — plus kerangka untuk objek custom.
> **Number/specific**: Domain: MDG-F (financials), MDG-M (material), MDG-S (supplier), MDG-C (customer), MDG-BP (business partner), MDG-EAM (enterprise asset management); MDG menyediakan model data, UI, dan definisi workflow standar untuk domain-domain ini.
> **Source**: SAP Help Portal — Master Data Governance, https://help.sap.com/docs/SAP_S4HANA_ON-PREMISE/6d52de87aa0d4fb6a90924720a5b0549/e9c313a360434b368b5865f2626f0d3d.html ; SAP Community MDG topic (2026-08-11)
> **Confidence**: high

> **Claim**: SAP MDG memiliki dua pilar resmi. **Central Governance** menyediakan kepemilikan terpusat master data melalui pemrosesan berbasis change request: workflow, staging, approval, activation, dan distribution.
> **Number/specific**: "MDG offers change request-based processing of master data with integrated workflow, staging, approval, activation, and distribution."
> **Source**: SAP Help Portal — SAP Master Data Governance (central governance), https://help.sap.com/docs/r/de1b9c94c8594d6f94fe66ae423d5d70 ; SAP Community (2026-08-11)
> **Confidence**: high

> **Claim**: Pilar kedua, **Consolidation**, memuat master data dari berbagai sumber, menstandarkannya, dan mendeteksi duplikat — untuk master data yang dimiliki/dipelihara secara desentralisasi.
> **Number/specific**: "SAP MDG, consolidation delivers capabilities to load master data from different sources, to standardize the master data, and to detect duplicates."
> **Source**: SAP Help Portal / SAP Community MDG (2026-08-11)
> **Confidence**: high

> **Claim**: SAP MDG dapat dijalankan co-deploy dengan SAP S/4HANA (Private/Public Edition) atau sebagai hub tersendiri (MDG cloud edition); ia mendistribusikan master data ke sistem SAP maupun non-SAP.
> **Number/specific**: Fungsi kunci MDG mencakup "master data distribution to SAP and Non-SAP Systems", mass changes, duplicate checks, dan data quality monitoring. Deployment: co-deployed dengan SAP ERP/S/4HANA atau sebagai hub system terpisah.
> **Source**: SAP Community — MDG deployment & key functionalities, https://pages.community.sap.com/topics/master-data-governance (2026-08-11)
> **Confidence**: high

> **Claim**: SAP Datasphere/BW/4HANA berperan sebagai lapisan analitik yang *mengonsumsi* master data bersih sebagai dimensi (business context / semantic model), bukan menggantikan MDM.
> **Number/specific**: Datasphere menyediakan konteks bisnis + semantic model dan integrasi native ke sumber SAP (S/4HANA); ia bergantung pada master data yang seragam untuk dimensi analitik yang tepercaya. Positioning ini konsisten dengan pembagian tugas analytical vs operational MDM (TechTarget).
> **Source**: product_matrix.md (baris Data Warehouse Solutions) + research cache 2026-08-2; TechTarget MDM definition untuk pembagian analytical/operational (2026-08-11)
> **Confidence**: medium (framing komplementer terverifikasi; hindari klaim fitur MDM spesifik pada Datasphere)

> **Claim**: Buruknya kualitas data merugikan organisasi rata-rata sekitar USD 12,9 juta per tahun.
> **Number/specific**: USD 12,9 juta/tahun (riset Gartner, dipublikasikan 2020; masih dikutip luas hingga 2025–2026). Angka lain yang beredar (MIT Sloan/Cork: kehilangan 15–25% pendapatan) sebaiknya diperlakukan hati-hati.
> **Source**: Gartner (via Gartner data-quality resources & pengutipan luas), https://www.gartner.com/en/data-analytics/topics/data-quality (2026-08-11)
> **Confidence**: medium (angka 2020; atribusikan sebagai "menurut Gartner" dan tanpa mengesankan data baru 2026)

## Solution focus + Soltius anchor (from product_matrix.md)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| Konsep vendor-neutral: master data, MDM, golden record, match/merge, survivorship, data stewardship | MDM ≠ data warehouse; MDM bekerja pada entitas master & menghasilkan golden record; warehouse untuk analitik transaksional | H2 #1–#4 (badan utama, generik dulu) | — (badan mengajar dulu; Soltius belum) |
| **SAP Master Data Governance (MDG)** | Dua pilar: Central Governance (workflow→staging→approval→activation→distribution) + Consolidation (load/standarisasi/deteksi duplikat); domain finance, material, business partner/customer/supplier, EAM; distribusi ke sistem SAP & non-SAP | H2 #3–#4 (ilustrasi SAP untuk golden record & governance) | Menyebut MDG sebagai *contoh* platform — bukan produk Soltius |
| **SAP Datasphere / BW/4HANA** sebagai lapisan analitik yang mengonsumsi master data bersih | Datasphere/BW/4HANA = konsumen master data (dimensi), bukan pengganti MDM | H2 #4 (tabel) / transisi ke closing | Tautan internal ke hub Data Warehouse |
| Soltius sebagai mitra perancang fondasi data | Data and AI Consulting; SAP Platinum via United VARs; AMS pasca go-live | **Closing CTA** + 1 aside mid-article | **Data and AI Consulting + implementor SAP Platinum (United VARs)** |

Reminder: Soltius **implements/migrates/supports** teknologi ini — **tidak membangunnya**. Maksimal 2–3 self-mention (idealnya 1 aside + 1 closing). Framing closing: "Soltius membantu merancang fondasi data yang benar — master data yang seragam DI SAMPING data warehouse & BI." Aside mid-article yang disarankan brief: "banyak proyek analitik terhambat bukan oleh tools, melainkan master data yang tak pernah diselesaikan."

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **TechTarget — "What is Master Data Management (MDM)?" (SearchDataManagement)** — https://www.techtarget.com/searchdatamanagement/definition/master-data-management — *what it backs*: definisi MDM, master vs transaksional, golden record, analytical vs operational MDM, dan kalimat kunci "MDM ... augments the data warehouse on the analytical side" (fondasi tesis "butuh keduanya").
2. **SAP Community / SAP Help Portal — SAP Master Data Governance** — https://pages.community.sap.com/topics/master-data-governance — *what it backs*: SAP MDG lintas domain (finance/material/business partner), dua pilar Central Governance & Consolidation, change-request workflow, distribusi ke sistem SAP & non-SAP, opsi deployment.
3. **Profisee — Golden Record & MDM Survivorship** — https://profisee.com/blog/what-is-a-golden-record/ dan https://profisee.com/blog/mdm-survivorship/ — *what it backs*: definisi golden record, match/merge, survivorship rules, peran data steward (untuk H2 #3).
4. **Gartner — Data Quality topic** — https://www.gartner.com/en/data-analytics/topics/data-quality — *what it backs*: biaya buruknya kualitas data ~USD 12,9 juta/tahun (pembuka "mengapa akar masalah penting").

Priority terpenuhi: SAP official (SAP Community/Help) + analyst (Gartner) + reputable data-management press (TechTarget) + vendor-neutral MDM reference (Profisee/Informatica).

## FAQ Q&As (6 drafted, Bahasa Indonesia)

### Apa itu master data?
Master data adalah data yang menggambarkan entitas inti bisnis yang dipakai berulang lintas proses — pelanggan, produk/material, vendor, dan akun keuangan. Berbeda dari data transaksional yang mencatat peristiwa (order, faktur, pengiriman), master data relatif stabil dan menjadi "kamus identitas" perusahaan. Karena dipakai banyak sistem, master data yang tidak seragam menimbulkan duplikasi dan angka yang berbeda antar departemen.

### Apa perbedaan master data management (MDM) dan data warehouse?
MDM dan data warehouse menyelesaikan masalah berbeda. MDM menyeragamkan identitas entitas master (pelanggan, produk, vendor) menjadi satu golden record dan mengembalikannya ke sistem sumber. Data warehouse menyatukan data transaksional untuk analitik multidimensi. Menurut TechTarget, MDM memperbaiki kualitas data di sisi operasional dan justru *melengkapi* warehouse di sisi analitik — keduanya komplementer, bukan saling menggantikan.

### Apa itu golden record?
Golden record adalah satu versi tepercaya dan otoritatif dari sebuah entitas master, hasil menggabungkan atribut paling akurat dari beberapa sistem sumber lalu dibersihkan. Prosesnya memakai match & merge dan aturan survivorship yang memutuskan nilai mana yang "bertahan" saat ada konflik — misalnya CRM dipercaya untuk email, ERP untuk alamat penagihan. Golden record inilah yang membuat "satu pelanggan" benar-benar satu di semua sistem.

### Apakah data warehouse itu single source of truth?
Tidak sepenuhnya. Data warehouse menjadi satu sumber untuk *analitik dan pelaporan*, tetapi ia mewarisi kualitas data yang dimuat ke dalamnya. Jika pelanggan yang sama muncul dalam tiga versi di sistem sumber, warehouse hanya merapikan kekacauan itu, bukan menyelesaikannya. Single source of truth untuk *identitas entitas* adalah tugas MDM/golden record; warehouse menjadi SSOT untuk *angka analitik* setelah dimensinya bersih.

### Kapan perusahaan butuh MDM?
Sinyal kebutuhan MDM muncul saat entitas yang sama tersebar di banyak sistem dengan versi berbeda: pelanggan grup dengan banyak entitas legal, kode material ganda antar pabrik, atau vendor yang terdaftar berkali-kali. Jika laporan lintas departemen sering "beda angka" dan tim menghabiskan waktu merekonsiliasi manual, itu masalah master data. Untuk skala kecil, mulai dari tata kelola dan kualitas data manual sebelum membeli platform MDM penuh.

### Apa itu SAP Master Data Governance (MDG)?
SAP Master Data Governance (MDG) adalah solusi SAP untuk mendefinisikan, menegakkan, memantau, dan memperbaiki master data lintas domain — finance, material, serta business partner (pelanggan/vendor). MDG memiliki dua pilar: Central Governance (pembuatan master data berbasis change request dengan workflow, persetujuan, aktivasi, lalu distribusi) dan Consolidation (memuat, menstandarkan, dan mendeteksi duplikat). MDG mendistribusikan master data yang disetujui ke sistem SAP maupun non-SAP.

## Data tables for the writer

### Tabel utama — MDM vs Data Warehouse (H2 #4; siap-ekstrak baris per baris)

| Aspek | Master Data Management (MDM) | Data Warehouse (DW) |
|---|---|---|
| Jenis data | Entitas master: pelanggan, produk/material, vendor, akun | Data transaksional: order, faktur, pengiriman, pergerakan stok |
| Tujuan utama | Satu identitas tepercaya (golden record) yang seragam lintas sistem | Analitik & pelaporan multidimensi untuk pengambilan keputusan |
| Arah aliran data | Menulis balik/mendistribusikan master data bersih ke sistem sumber | Menarik data dari sistem sumber ke satu repositori (read-oriented) |
| Masalah yang diselesaikan | Identitas & otoritas entitas (duplikasi, konflik atribut) | Silo pelaporan, data tersebar, analitik lambat |
| Konsep kunci | Golden record, match & merge, survivorship, data stewardship | ETL/ELT, model dimensional (fact/dimension), OLAP |
| Contoh SAP | SAP Master Data Governance (MDG) | SAP Datasphere, SAP BW/4HANA, SAP HANA Cloud |
| Hubungan | Menyediakan dimensi bersih untuk warehouse | Mengonsumsi master data bersih sebagai dimensi analitik |

### Tabel pendukung — Dua pilar SAP MDG (opsional, untuk H2 #3)

| Pilar | Untuk apa | Kapabilitas inti |
|---|---|---|
| Central Governance | Master data dibuat/diubah terpusat sesuai aturan bisnis | Change request → workflow → staging → approval → activation → distribution |
| Consolidation | Menyatukan master data yang dikelola desentralisasi | Load multi-sumber, standardisasi, deteksi duplikat, best-record calculation |

## Edge cases & nuance

- **"Warehouse akan otomatis konsisten" adalah mitos mahal.** Warehouse menyatukan dan menganalisis, tetapi tidak menyelesaikan otoritas identitas antar sistem sumber. Tanpa master data bersih, "satu pelanggan tiga versi" tetap tiga baris di tabel dimensi — laporan jadi salah dengan rapi.
- **MDM bukan hanya soal software.** Ia adalah disiplin (kebijakan, kepemilikan, data stewardship) sebelum menjadi platform. Membeli platform MDM tanpa tata kelola dan owner data hanya memindahkan kekacauan.
- **Analytical vs operational MDM.** Sebagian organisasi mulai dari analytical MDM (memberi dimensi konsisten ke warehouse/BI) sebelum operational MDM (menegakkan master data di sistem inti). Keduanya sah; urutannya bergantung pada di mana rasa sakit terbesar.
- **Momen migrasi ERP = jendela emas menata master data.** Sebelum membawa data ke S/4HANA/cloud, membersihkan dan mengonsolidasikan master data mencegah "mengangkut sampah ke rumah baru". Ini menautkan alami ke cousin "migrasi ERP ke cloud".
- **Skala menentukan kebutuhan.** Perusahaan kecil dengan satu ERP dan sedikit sistem mungkin cukup dengan tata kelola master data manual + latihan kualitas data. MDM penuh dibenarkan saat kompleksitas (banyak sistem/entitas legal/geografi) sudah nyata — jangan beli platform sebelum masalahnya terbukti (angle H2 #5).
- **Data quality ≠ MDM (tetapi bertetangga).** Profiling/cleansing memperbaiki nilai atribut; MDM memutuskan *record mana yang benar* dan mempertahankan identitas tunggal. Artikel ini fokus MDM; kedalaman data quality diarahkan ke artikel -03 bulan ini.

## Flags (open factual risk)

- ⚠️ **"Write-back ke sistem sumber"**: istilah generik MDM benar, tetapi untuk SAP MDG istilah resminya adalah **distribution/replication** master data yang sudah disetujui ke sistem SAP & non-SAP (setelah activation). → Rekomendasi: tulis "MDG mendistribusikan/mereplikasi master data yang disetujui ke sistem sumber", hindari mengklaim mekanisme API "write-back" spesifik.
- ⚠️ **Kode domain MDG (MDG-F, MDG-M, MDG-S, MDG-C, MDG-BP, MDG-EAM)** akurat per dokumentasi SAP saat ini, tetapi SAP kerap mereorganisasi penamaan. → Rekomendasi: sebut domain utama secara naratif (finance, material, business partner/pelanggan/vendor) dan atribusikan ke SAP Help; jangan bergantung pada kode sub-domain yang obscure.
- ⚠️ **Jangan klaim SAP Datasphere/BW/4HANA "melakukan MDM"** atau "menggantikan MDG", dan jangan klaim MDG "menggantikan" warehouse. Keduanya beroperasi pada jenis data berbeda (master vs transaksional) dan bersifat komplementer. → Rekomendasi: pertahankan framing "warehouse mengonsumsi master data bersih".
- ⚠️ **Angka Gartner USD 12,9 juta/tahun** berasal dari riset 2020. → Rekomendasi: atribusikan sebagai "menurut Gartner" tanpa mengesankan data baru 2026; jangan gabungkan dengan tahun berjalan.
- ⚠️ **Angka MIT Sloan/Cork "15–25% pendapatan hilang"** beredar luas tetapi sumber primernya sulit dikunci. → Rekomendasi: gunakan hanya angka Gartner USD 12,9 juta; hindari klaim persentase pendapatan kecuali writer menautkan sumber primer yang jelas.
- ⚠️ **Deployment MDG "cloud edition" vs co-deployed S/4HANA**: penamaan edisi cloud SAP berubah cepat. → Rekomendasi: cukup nyatakan MDG bisa dijalankan menyatu dengan S/4HANA atau sebagai hub tersendiri; hindari menyebut nomor rilis/edisi spesifik tanpa mengecek ulang SAP Help pada tanggal tayang.

## Definition snippet draft (52 words)

> **Master Data Management (MDM)** adalah disiplin dan teknologi untuk menyatukan data entitas inti — pelanggan, produk, dan vendor — dari berbagai sistem menjadi satu "golden record" yang tepercaya dan konsisten. Berbeda dari data warehouse yang menganalisis data transaksi, MDM memastikan identitas dan atribut entitas seragam di seluruh sistem sumber, lalu mendistribusikannya kembali.

## Internal links (from brief)

- **Primary/hub**: https://www.soltius.co.id/id/blog/data-warehouse-solutions — anchor: `data warehouse solutions`
- **Cousin 1**: https://www.soltius.co.id/id/blog/business-intelligence — anchor: `business intelligence` — dimensi analitik BI andal hanya jika master data-nya bersih.
- **Cousin 2**: https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud — anchor: `migrasi ERP ke cloud` — migrasi ERP adalah momen ideal menata master data.
