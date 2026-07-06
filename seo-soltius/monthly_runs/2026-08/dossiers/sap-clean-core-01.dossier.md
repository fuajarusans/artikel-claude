---
brief_id: "sap-clean-core-01"
researcher_run_date: "2026-06-08"
sources_cited: 22
flags: 5
---

# Research Dossier: Mengapa Clean Core Jadi Syarat AI — Fondasi SAP Business AI dan Joule di S/4HANA

## TL;DR for the writer

- SAP Sapphire 2026 (Mei 2026) secara eksplisit memposisikan clean core, data tepercaya, dan proses standar sebagai **tiga prasyarat nilai AI enterprise** — bukan sekadar keunggulan teknis. Ini adalah positioning resmi SAP yang dapat dikutip.
- **SAP Joule tidak tersedia untuk SAP ECC** dan tidak ada di roadmap Joule untuk sistem on-premise klasik; akses penuh Joule hanya untuk pelanggan RISE with SAP dan GROW with SAP (S/4HANA Cloud Public/Private). Ini adalah pembeda jujur yang penting untuk audiens Indonesia yang banyak masih di ECC.
- **Joule Studio 2.0** diumumkan di SAP Sapphire 2026 (13 Mei 2026) dan mulai tersedia untuk pelanggan pada Juni 2026 — ini adalah produk nyata, bukan konsep masa depan, dan statusnya konfirmasi terkini.
- **SAP Business AI Platform** adalah nama konsolidasi baru (diumumkan Sapphire 2026) yang menyatukan SAP BTP, SAP Business Data Cloud, dan SAP Business AI menjadi satu tumpukan — nama "SAP BTP AI Foundation" sudah berubah; gunakan terminologi baru secara hati-hati.
- Bukti kasus nyata dari Sapphire 2026 (Levi Strauss, Aeropuertos Argentina) menunjukkan bahwa clean core yang sudah selesai secara langsung mengaktifkan deployment AI cepat — ini adalah argumen bisnis konkret, bukan hype.

---

## Core facts (verified)

**Claim 1: Clean core adalah prinsip menjaga S/4HANA tetap standar dan upgrade-safe**
> **Number/specific**: SAP mendefinisikan clean core sebagai sistem yang "sedekat mungkin dengan standar, dengan ekstensi yang cloud-compliant dan integrasi yang dijalankan di sisi luar inti." Ekstensi dibangun di luar inti menggunakan SAP BTP (side-by-side) atau ABAP Cloud (on-stack), bukan memodifikasi kode SAP langsung.
> **Source**: SAP News Center, "How to Extend SAP S/4HANA Cloud the Right Way," Agustus 2025 — https://news.sap.com/2025/08/extend-sap-s4hana-cloud-right-way-clean-clear/
> **Confidence**: high

**Claim 2: SAP Sapphire 2026 secara resmi mengaitkan nilai AI dengan clean core, data tepercaya, dan proses standar**
> **Number/specific**: ERP Today meliput SAP Sapphire 2026 (Mei 2026) dengan judul "AI Value Depends on Readiness, Data, and Clean Core." SAP memposisikan kondisi ini sebagai prasyarat operasional AI enterprise, bukan fitur opsional.
> **Source**: ERP Today, "SAP Sapphire 2026: AI Value Depends on Readiness, Data, and Clean Core," Mei 2026 — https://erp.today/sap-sapphire-2026-ai-readiness-data-clean-core/
> **Confidence**: high

**Claim 3: CIO Aeropuertos Argentina secara eksplisit menyebut clean core sebagai enabler kecepatan AI**
> **Number/specific**: Gustavo Sabato (CIO Aeropuertos Argentina) menyatakan: *"It will be faster and easy if you have a clean core."* Perusahaan membangun agen AI SNOW dalam 6 minggu setelah menyelesaikan migrasi clean-core dari SAP R/3 ke S/4HANA. Hasilnya: pengurangan biaya 16% dan pengurangan emisi CO₂ sebesar 45 ton.
> **Source**: SAPinsider, "SAP Sapphire 2026: What Four Global Enterprises Taught Us About AI-Driven Transformation," Mei 2026 — https://sapinsider.org/blogs/sap-sapphire-2026-ai-driven-transformation-clean-core/
> **Confidence**: high

**Claim 4: Levi Strauss membuktikan bahwa standardisasi (clean core) memungkinkan deployment AI berskala besar**
> **Number/specific**: Levi Strauss mengkonsolidasikan 9 instance ERP global menjadi satu fondasi, lalu mendeploykan 1.000+ agen AI dan melatih 4.000+ karyawan. Hasilnya: pemrosesan pesanan wholesale dari 2–5 hari menjadi 20–30 menit (~80% otomatis). Jason Gowans (CDO): *"Standardization and agility don't stand in opposition — standardization is what allows us to move with agility."*
> **Source**: SAPinsider (Mei 2026) dan SAP News Center Sapphire 2026 Keynote — https://sapinsider.org/blogs/sap-sapphire-2026-ai-driven-transformation-clean-core/ dan https://news.sap.com/2026/05/sap-sapphire-keynote-customers-making-ai-value-real-today/
> **Confidence**: high — dikonfirmasi dari dua sumber berbeda dengan angka yang konsisten

**Claim 5: SAP Joule adalah AI copilot/asisten yang tersedia di S/4HANA Cloud (Public dan Private) — tetapi TIDAK untuk ECC atau S/4HANA on-premise klasik**
> **Number/specific**: Joule tersedia untuk S/4HANA Cloud Public Edition mulai release 2408 (Agustus 2024) ke atas melalui aktivasi entitlement. Untuk S/4HANA Cloud Private Edition tersedia tetapi tidak otomatis — memerlukan kepatuhan UI dan setup via BTP. Untuk S/4HANA on-premise: tidak tersedia, dan tidak ada di roadmap saat ini. Untuk SAP ECC: tidak didukung secara native.
> **Source**: SAP Help Portal, "Joule in SAP S/4HANA Cloud Public Edition" — https://help.sap.com/docs/joule/capabilities-guide/joule-in-sap-s-4hana-cloud-public-edition; SAP Community, "SAP JOULE with S/4HANA ON-PREMISE systems" — https://community.sap.com/t5/technology-q-a/sap-joule-with-s-4hana-on-premise-systems/qaq-p/14316188
> **Confidence**: high

**Claim 6: Per Q1 2026, Joule tersedia di 35 solusi SAP dengan lebih dari 2.500 Joule Skills dan 30+ agen khusus**
> **Number/specific**: Joule live di 35 solusi; 2.500+ Joule Skills; 30+ specialized agents (termasuk Tender Analysis Agent, Dispute Resolution Agent, Catalog Optimization Agent, Expense Report Validation Agent).
> **Source**: SAP News Center, "SAP Business AI: Release Highlights Q1 2026," April 2026 — https://news.sap.com/2026/04/sap-business-ai-release-highlights-q1-2026/
> **Confidence**: high

**Claim 7: Per Q4 2025, SAP Business AI mencakup 350 fitur AI dan lebih dari 2.400 Joule Skills, dibangun di atas AI Foundation di SAP BTP**
> **Number/specific**: 350 AI features, 2.400+ Joule skills, dibangun di AI Foundation in SAP BTP (Q4 2025). SAP juga meluncurkan model SAP-RPT-1 (relational foundation model untuk data tabular) dan SAP-ABAP-1 (dilatih pada 250 juta+ baris kode ABAP).
> **Source**: SAP News Center, "SAP Business AI: Release Highlights Q4 2025," Januari 2026 — https://news.sap.com/2026/01/sap-business-ai-release-highlights-q4-2025/
> **Confidence**: high

**Claim 8: Joule Studio 2.0 diumumkan di SAP Sapphire 2026 dan mulai tersedia Juni 2026**
> **Number/specific**: Diumumkan 13 Mei 2026 di SAP Sapphire Madrid. Joule Studio adalah platform managed untuk membangun AI agent, aplikasi, dan workflow. Rollout mulai Juni 2026. Free untuk semua pelanggan BTP hingga 31 Desember 2026 (under fair-use limits).
> **Source**: SAP News Center, "Announcing New Joule Studio for Enterprise Scale Agentic Development," Mei 2026 — https://news.sap.com/2026/05/new-joule-studio-enterprise-scale-agentic-development/
> **Confidence**: high

**Claim 9: Joule Studio secara eksplisit dirancang untuk membangun solusi AI S/4HANA yang mendukung strategi clean core**
> **Number/specific**: Halaman produk resmi SAP menyebut Joule Studio memungkinkan membangun "AI solutions for SAP S/4HANA that support a clean core strategy." Agen yang dibuat grounded secara native dalam data, proses, dan semantik bisnis SAP live.
> **Source**: SAP.com, "Joule Studio | Build AI Agents, Apps, and Workflows" — https://www.sap.com/products/artificial-intelligence/joule-studio.html (diakses Juni 2026)
> **Confidence**: high

**Claim 10: Released APIs adalah antarmuka yang dirilis dan dijamin kestabilannya oleh SAP lintas release — dasar ekstensi clean-core-compliant**
> **Number/specific**: SAP mendefinisikan released APIs sebagai antarmuka publik yang SAP jamin stabilitasnya dari release ke release. Ekstensi clean-core-compliant (Level A) hanya boleh menggunakan released APIs ini. Ekstensi yang mengakses objek internal SAP yang tidak dirilis (Level C/D) bukan clean core dan berisiko gagal saat upgrade.
> **Source**: SAP Learning, "Exploring Released APIs" — https://learning.sap.com/courses/practicing-clean-core-extensibility-for-sap-s-4hana-cloud/exploring-released-apis_d80ce197-097e-4e7b-8696-b960738089c7; SAP News Center Agustus 2025 (clean core extensibility)
> **Confidence**: high

**Claim 11: SAP memperkenalkan model maturity clean core 4 level (A–D) — Level A paling bersih, Level D tidak direkomendasikan**
> **Number/specific**: Level A: ekstensi dibangun dengan ABAP Cloud atau SAP BTP menggunakan released APIs. Level B: menggunakan classic APIs yang terdokumentasi dan upgrade-stable. Level C: mengakses objek internal SAP (risiko upgrade tinggi). Level D: menggunakan objek bertanda "noAPI" — bukan clean core, harus direvisi.
> **Source**: SAP News Center, "How to Extend SAP S/4HANA Cloud the Right Way," Agustus 2025 — https://news.sap.com/2025/08/extend-sap-s4hana-cloud-right-way-clean-clear/; SAP Community ABAP Extensibility Guide, Agustus 2025
> **Confidence**: high

**Claim 12: SAP Business Suite 7 (ECC) — mainstream maintenance berakhir akhir 2027; extended support berbayar hingga akhir 2030**
> **Number/specific**: SAP mainstream maintenance untuk SAP Business Suite 7 (mencakup SAP ERP 6.0 / ECC) berakhir akhir 2027. Extended maintenance tersedia 2028–2030 dengan premi 2% dari biaya maintenance. Setelah 2030 ada opsi customer-specific maintenance tanpa tanggal akhir yang ditetapkan.
> **Source**: SAP Support, "Maintenance Strategy — SAP S/4HANA and Business Suite 7" — https://support.sap.com/en/release-upgrade-maintenance/maintenance-information/maintenance-strategy/s4hana-business-suite7.html (diakses Juni 2026)
> **Confidence**: high

**Claim 13: ABAP Cloud adalah model pengembangan yang direkomendasikan SAP untuk ekstensi baru di S/4HANA — upgrade-safe dan cloud-compliant**
> **Number/specific**: ABAP Cloud adalah "development model for clean-core-compliant, cloud-ready business applications, services, and extensions on SAP BTP, SAP S/4HANA Cloud, and SAP S/4HANA." Ekstensi ABAP Cloud mengikuti aturan sintaks yang dipaksakan secara otomatis — jika kode mengakses API yang tidak released, syntax check langsung menandainya.
> **Source**: SAP Community ABAP Cloud FAQ — https://pages.community.sap.com/topics/abap/abap-cloud-faq; SAP Community, ABAP Extensibility Guide Agustus 2025
> **Confidence**: high

**Claim 14: SAP Business AI Platform (nama baru, Sapphire 2026) mengkonsolidasikan SAP BTP, SAP Business Data Cloud, dan SAP Business AI**
> **Number/specific**: Diumumkan di SAP Sapphire Mei 2026. SAP Business AI Platform menyatukan tiga komponen ke dalam satu tumpukan dengan 3 lapisan: (1) Context Layer (data+knowledge graph+SAP Domain Models), (2) Build Layer (Joule Studio 2.0), (3) Governance Layer (SAP AI Agent Hub — GA Q3 2026). SAP AI Foundation dibangun di atas 452.000 tabel dan 7,3 juta data fields.
> **Source**: SAP News Center, "SAP Unveils the Autonomous Enterprise," Mei 2026 — https://news.sap.com/2026/05/sap-sapphire-sap-unveils-autonomous-enterprise/; ERP Today Sapphire 2026 coverage
> **Confidence**: high

**Claim 15: ExxonMobil CIO menyatakan fondasi data yang buruk adalah penghambat nilai AI**
> **Number/specific**: Bill Keillor (VP Global Services, ExxonMobil): *"Data is the asset which has been trapped"* dan *"If you can't get this foundation right, you will continue to pay the price for it."* (SAP Sapphire 2026 Keynote, Mei 2026)
> **Source**: SAP News Center Sapphire 2026 Keynote — https://news.sap.com/2026/05/sap-sapphire-keynote-customers-making-ai-value-real-today/
> **Confidence**: high

**Claim 16: Juan Pablo Muruzabal (SAP) menyebut clean core sebagai fondasi wajib untuk model operasional cloud dan AI**
> **Number/specific**: Muruzabal (SAP executive) menyatakan: *"In order to build a true cloud operating model — essential to embrace innovation including AI — it is critical to move to a clean core model."* (SAP News Center, Mei 2024 — ini adalah posisi resmi SAP yang masih relevan dan dikonfirmasi kembali di Sapphire 2026)
> **Source**: SAP News Center, "The Path to AI with Clean Core," Mei 2024 — https://news.sap.com/2024/05/the-path-to-ai-with-clean-core/
> **Confidence**: high

---

## Solution focus + Soltius anchor (from product_matrix.md)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| **SAP Clean Core** (prinsip + 4-level model A–D) | Definisi: sistem sedekat mungkin standar, ekstensi cloud-compliant di BTP/ABAP Cloud; bukan tentang menghapus kustomisasi tapi memindahkannya ke lokasi yang aman dan upgrade-stable | H1/lead + H2 #1 | — (ini topik utama) |
| **SAP Business AI** (350 fitur, 2.400+ skills Q4 2025) | Dibangun di AI Foundation di SAP BTP; tersedia S/4HANA Cloud; mengasumsikan proses standar + released APIs | H2 #2 | — |
| **SAP Joule** (AI copilot/asisten) | Tersedia: S/4HANA Cloud Public (mulai release 2408), Private (setup via BTP), TIDAK untuk ECC/on-premise klasik; 2.500+ skills; 35 solusi per Q1 2026 | H2 #2 dan #3 | — |
| **Joule Studio 2.0** | Platform managed untuk membangun AI agent; diumumkan Sapphire Mei 2026; rollout mulai Juni 2026; gratis untuk BTP customers s.d. Des 2026; mendukung clean core strategy | H2 #4 (fondasi) | — |
| **Released APIs & ABAP Cloud** | Released APIs: antarmuka SAP yang dijamin stabil lintas release; ABAP Cloud enforced via syntax check; Level A = paling bersih; ini yang "terlihat" oleh AI agent | H2 #4 (fondasi #2) | — |
| **SAP Business AI Platform** (Sapphire 2026) | Nama konsolidasi baru: SAP BTP + Business Data Cloud + Business AI; 3 lapisan; SAP Knowledge Graph + Domain Models; AI Agent Hub GA Q3 2026 | H2 #2 atau #4 | — |
| **SAP BTP** (side-by-side extensibility) | Tempat ekstensi clean-core-compliant dibangun di luar inti ERP | H2 #4 | — |
| **Soltius: Data and AI Consulting + SAP Platinum Partner via United VARs** | Menyiapkan fondasi (clean core + data tepercaya) agar perusahaan bisa mengoperasikan SAP Business AI; mengimplementasikan dan mendampingi — tidak membangun AI SAP | Closing CTA (utama) + 1 mid-article aside di H2 #4 |  **Data and AI Consulting** + **SAP Platinum Partner via United VARs** |

Reminder: Soltius **implements/migrates/supports** — tidak membangun Joule, Business AI, atau BTP. Maks 2–3 sebutan diri.

---

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **SAP News Center, "The Path to AI with Clean Core," Mei 2024** — https://news.sap.com/2024/05/the-path-to-ai-with-clean-core/ — *what it backs*: Pernyataan resmi SAP bahwa clean core adalah fondasi wajib untuk cloud operating model dan AI ("it is critical to move to a clean core model")

2. **SAP News Center, "SAP Unveils the Autonomous Enterprise | SAP Sapphire," Mei 2026** — https://news.sap.com/2026/05/sap-sapphire-sap-unveils-autonomous-enterprise/ — *what it backs*: Positioning Sapphire 2026 tentang SAP Business AI Platform, Joule Studio 2.0, dan visi Autonomous Enterprise; SAP AI Foundation; SAP AI Agent Hub

3. **SAP News Center, "How to Extend SAP S/4HANA Cloud the Right Way | Clean Core," Agustus 2025** — https://news.sap.com/2025/08/extend-sap-s4hana-cloud-right-way-clean-clear/ — *what it backs*: Model maturity 4 level (A–D), side-by-side vs on-stack extensibility, ABAP Cloud, Joule sebagai developer productivity tool untuk clean core

4. **ERP Today, "SAP Sapphire 2026: AI Value Depends on Readiness, Data, and Clean Core," Mei 2026** — https://erp.today/sap-sapphire-2026-ai-readiness-data-clean-core/ — *what it backs*: Judul artikel yang langsung mendukung angle brief; peliputan independen Sapphire 2026 yang mengaitkan AI value dengan clean core + data

5. **SAP Support, Maintenance Strategy Page** — https://support.sap.com/en/release-upgrade-maintenance/maintenance-information/maintenance-strategy/s4hana-business-suite7.html — *what it backs*: Tanggal maintenance ECC yang akurat (mainstream 2027, extended 2030)

---

## FAQ Q&As (Bahasa Indonesia)

### Apa itu clean core SAP?

Clean core adalah prinsip menjaga inti sistem SAP S/4HANA tetap standar dan upgrade-safe, dengan memindahkan kustomisasi ke luar inti — umumnya ke SAP Business Technology Platform (SAP BTP) melalui *side-by-side extensibility*, atau ke dalam sistem menggunakan ABAP Cloud. Hasilnya, perusahaan bisa menerima pembaruan SAP secara rutin tanpa harus menulis ulang kode kustom yang sudah ada.

### Apakah clean core merupakan syarat untuk menggunakan SAP Joule dan SAP Business AI?

Secara teknis, Joule bisa dijalankan tanpa core yang sempurna, tetapi nilainya terbatas jika proses dan data tidak standar. SAP Business AI mengasumsikan proses standar dan *released APIs* agar dapat memahami konteks bisnis Anda. Modifikasi Z yang mengubah alur standar membuat agen AI kehilangan referensi — ia tidak "melihat" logika bisnis yang tersembunyi di kode kustom yang tidak terekspos melalui released APIs.

### Apa itu SAP Joule?

SAP Joule adalah AI copilot dan asisten percakapan SAP yang tersedia di dalam S/4HANA Cloud, SuccessFactors, SAP Analytics Cloud, dan puluhan solusi SAP lainnya. Per Q1 2026, Joule tersedia di 35 solusi dengan lebih dari 2.500 *Joule Skills* dan 30+ agen khusus. Joule memungkinkan pengguna menyelesaikan tugas bisnis, mendapatkan wawasan, dan mengotomasi alur kerja menggunakan perintah bahasa alami.

### Apakah perusahaan yang masih menggunakan SAP ECC bisa mengakses SAP Joule?

Tidak secara native. Joule dirancang untuk SAP S/4HANA Cloud (Public dan Private Edition) dan tidak ada di roadmap untuk SAP ECC atau S/4HANA on-premise klasik. Perusahaan di ECC yang ingin memanfaatkan Business AI perlu merencanakan migrasi ke S/4HANA Cloud terlebih dahulu — dan dalam konteks ini, menyelesaikan clean core adalah bagian dari persiapan migrasi tersebut.

### Apa itu Joule Studio dan apa hubungannya dengan clean core?

Joule Studio adalah platform managed SAP untuk membangun AI agent, aplikasi, dan workflow kustom — diumumkan di SAP Sapphire pada Mei 2026, dengan rollout mulai Juni 2026. Joule Studio secara resmi dirancang untuk "membangun solusi AI S/4HANA yang mendukung strategi clean core," artinya ekstensi AI yang dibuat di Joule Studio dibangun di atas fondasi yang tidak memodifikasi inti SAP secara langsung.

### Mengapa data berkualitas menjadi prasyarat AI di SAP?

AI enterprise — termasuk Joule dan seluruh agen dalam SAP Business AI — bergantung pada data yang konsisten, lengkap, dan memiliki satu sumber kebenaran (*single source of truth*). Jika master data terfragmentasi atau proses bisnis tidak standar, model AI membuat rekomendasi berdasarkan konteks yang salah. Bill Keillor (ExxonMobil) di SAP Sapphire 2026 menyatakan: "Data is the asset which has been trapped" — nilai AI baru bisa dilepaskan ketika data tersebut dibebaskan dari silo.

### Berapa "bersih" core yang cukup untuk mulai menggunakan AI di SAP?

Tidak ada ambang sempurna, tetapi SAP mendefinisikan Level A (ekstensi menggunakan ABAP Cloud + released APIs) sebagai standar ideal. Untuk mulai memanfaatkan Joule dasar (navigasi, tanya jawab, wawasan), Level B yang konsisten sudah cukup. Untuk agen transaksional dan otomasi alur kerja end-to-end, proses standar dan released APIs adalah keharusan agar agen dapat mengakses dan bertindak atas logika bisnis Anda secara aman.

### Apa hubungan SAP BTP dengan clean core dan AI?

SAP Business Technology Platform (SAP BTP) adalah tempat ekstensi clean-core-compliant dibangun secara *side-by-side* — terpisah dari inti S/4HANA. Ini penting untuk AI karena Joule Studio dan agen AI yang dikembangkan secara kustom juga berjalan di atas BTP. Sejak Sapphire 2026, SAP menyebutnya sebagai bagian dari **SAP Business AI Platform** — konsolidasi BTP, Business Data Cloud, dan Business AI menjadi satu fondasi terpadu.

---

## Data tables for the writer

### Kondisi Core vs Kemampuan AI yang Realistis

| Kondisi Core | Deskripsi Singkat | Kapabilitas Joule/AI yang Tersedia | Prasyarat yang Perlu Dipenuhi |
|---|---|---|---|
| **Bersih (Level A)** | Semua ekstensi via released APIs + ABAP Cloud/BTP | Joule penuh: navigasi, tanya-jawab, agen transaksional, insight prediktif embedded, otomasi alur kerja end-to-end | Sudah terpenuhi; fokus pada data governance |
| **Sebagian (Level B/C)** | Sebagian kustomisasi masih via classic APIs; beberapa Z-code | Joule dasar: navigasi & tanya-jawab; insight S/4HANA standar; agen terbatas pada domain dengan proses standar | Identifikasi kustomisasi kritis; rencanakan migrasi bertahap ke released APIs |
| **Kotor (Level D/banyak Z-code)** | Banyak modifikasi inti; custom code mengakses objek internal | Minimal: Joule belum bisa "melihat" logika bisnis kustom; rekomendasi AI tidak relevan di area yang dimodifikasi | Audit custom code (SAP Cloud ALM, ABAP Test Cockpit); remediasi bertahap; prioritaskan data governance |
| **SAP ECC (on-premise)** | Sistem lama; bukan S/4HANA Cloud | Tidak ada akses Joule native; tidak ada SAP Business AI embedded | Rencanakan migrasi ERP ke cloud (S/4HANA Cloud / RISE with SAP) sebagai langkah pertama |

### Empat Fondasi Clean Core yang Membuka Nilai AI

| Fondasi | Apa Artinya | Kapabilitas AI yang Terbuka |
|---|---|---|
| **1. Proses standar (Fit-to-Standard)** | Mengikuti alur proses default SAP; kustomisasi hanya untuk diferensiasi bisnis sejati | Joule memahami konteks proses Anda; rekomendasi relevan; agen transaksional akurat |
| **2. Ekstensi via Released APIs & ABAP Cloud** | Logika bisnis kustom dibungkus dalam antarmuka yang dirilis SAP — AI bisa "melihatnya" | Joule Agent dapat mengakses dan bertindak atas logika bisnis kustom secara aman |
| **3. Data tepercaya & konsisten** | Master data bersih; satu sumber kebenaran; tidak ada silo data | Insight prediktif akurat; rekomendasi AI berbasis data nyata; Business Data Cloud efektif |
| **4. Integrasi API-first** | Integrasi antar sistem melalui API standar, bukan koneksi RFC tersembunyi | AI agent dapat mengorkestrasikan alur kerja lintas sistem (SAP dan non-SAP) |

---

## Edge cases & nuance

- **Joule untuk on-premise: ada jalan alternatif, tetapi bukan native.** SAP Community mendokumentasikan cara mengekspos API on-premise via SAP Cloud Connector lalu mengaksesnya dari Joule Studio. Namun ini bukan integrasi bawaan dan membutuhkan upaya teknis signifikan — jangan tulis seolah Joule tersedia untuk on-premise.

- **Clean core bukan berarti "tidak ada kustomisasi sama sekali."** Ini adalah kesalahpahaman umum. Clean core Level A masih memungkinkan ekstensi bisnis yang kaya — selama dibangun via ABAP Cloud atau BTP. Pesan yang benar: *pindahkan* kustomisasi ke lokasi yang aman, bukan *hapus*.

- **SAP ECC dengan HANA (Business Suite on HANA / S/4HANA on-premise versi lama):** beberapa sumber kadang menyebutnya sebagai jalur menuju S/4HANA, tetapi ini berbeda dari S/4HANA Cloud. Joule tidak tersedia di sini secara native — jangan campur adukkan dengan S/4HANA Cloud.

- **Angka uplift AI (pengurangan waktu, biaya, CO₂) dari kasus Levi Strauss dan Aeropuertos Argentina** adalah hasil yang dilaporkan perusahaan tersebut di forum Sapphire 2026 — bukan jaminan SAP. Label sebagai *reported* atau *menurut perusahaan tersebut* saat mengutip.

- **SAP Business AI Platform (nama baru Sapphire 2026) vs "SAP BTP AI Foundation" (nama lama):** nama "AI Foundation" masih digunakan di dalam konteks teknis (sebagai komponen di dalam platform), tetapi sebagai nama produk/suite, "SAP Business AI Platform" adalah terminologi terbaru. Gunakan "SAP BTP" untuk platform dasar, "SAP Business AI Platform" untuk konsolidasi baru, dan "AI Foundation" hanya dalam konteks komponen teknis spesifik. Ini adalah area risiko penamaan — lihat Flags.

---

## Flags (open factual risk)

- ⚠️ **"SAP BTP AI Foundation" sebagai nama produk**: Brief menyebut "SAP BTP AI Foundation" sebagai nama yang perlu dikonfirmasi. Konfirmasi: sejak Sapphire Mei 2026, SAP mengkonsolidasikan di bawah nama **SAP Business AI Platform**. Komponen "AI Foundation" masih ada sebagai layer teknis di dalam platform, tetapi nama umbrella-nya sudah berubah. → Rekomendasi: gunakan "SAP Business AI Platform" untuk konteks platform/suite, "AI Foundation di SAP BTP" hanya jika merujuk komponen teknis spesifik. Jangan sebut "SAP BTP AI Foundation" sebagai nama produk berdiri sendiri.

- ⚠️ **Joule Studio — status "pre-launch" vs "tersedia Juni 2026"**: Saat halaman produk di-fetch (Juni 2026), halaman SAP.com masih menampilkan tombol "Notify me when the trial opens," menunjukkan belum GA seutuhnya. Namun SAP News Center (Mei 2026) mengkonfirmasi rollout mulai Juni 2026 dan free design-time access. → Rekomendasi: tulis sebagai "diumumkan Mei 2026, rollout mulai Juni 2026" — jangan klaim sudah GA penuh untuk semua pelanggan. Hindari klaim bahwa Joule Studio sudah bisa dipakai siapapun hari ini.

- ⚠️ **Angka "350 AI features" dan "2.400+ Joule skills"**: Ini adalah angka per Q4 2025 (Januari 2026). Angka Q1 2026 menyebut "lebih dari 2.500 skills" — angka terus berubah setiap quarter. → Rekomendasi: label dengan periode ("per Q1 2026, lebih dari 2.500 Joule Skills") dan tambahkan catatan bahwa angka ini diperbarui secara reguler oleh SAP.

- ⚠️ **Klaim kausalitas langsung "clean core → AI bekerja lebih baik"**: Hubungannya nyata tetapi tidak sesederhana sakelar on/off. Joule dapat berfungsi sebagian bahkan di lingkungan yang tidak sepenuhnya clean, terutama untuk use case standar. → Rekomendasi: framing yang benar adalah "clean core *memaksimalkan* nilai AI" dan "core yang kotor *membatasi* kemampuan AI dalam domain yang dimodifikasi" — bukan "AI tidak bekerja sama sekali tanpa clean core."

- ⚠️ **Joule untuk S/4HANA on-premise: ada PoC path via BTP/Cloud Connector**: SAP Community mendokumentasikan panduan end-to-end untuk mengaktifkan Joule di S/4HANA Fiori Launchpad (PCE + OnPremise PoC) — ini eksperimen teknis, bukan GA. → Rekomendasi: jangan sebut ini sebagai solusi yang tersedia; nyatakan bahwa akses Joule native ditujukan untuk S/4HANA Cloud. Bagian "kapan AI belum prioritas" bisa menyebut ini dengan jujur tanpa over-promise.

---

## Definition snippet draft (40–60 words)

> **Clean core** adalah prinsip menjaga inti SAP S/4HANA tetap standar dan upgrade-safe, dengan memindahkan kustomisasi ke luar inti melalui SAP BTP (*side-by-side extensibility*) atau ABAP Cloud (*on-stack*). Dalam konteks AI, clean core menjadi fondasi karena SAP Business AI dan Joule mengandalkan proses standar, *released APIs*, dan data tepercaya untuk memahami serta bertindak atas konteks bisnis Anda.

(57 kata — dalam batas 40–60 kata)

---

## Notes for image-planner

- **Concept 1 — Diagram: "Tiga Prasyarat AI di SAP" (piramida atau segitiga)**: Tiga elemen di tiga sudut/tingkat — (1) Clean Core / Proses Standar, (2) Data Tepercaya, (3) Integrasi API-first — dengan ikon Joule/Business AI di puncak. Visual ini langsung mencerminkan positioning SAP Sapphire 2026 dan bisa diekstrak sebagai screenshot. Teks bahasa Indonesia; warna SAP (biru/emas). Disarankan: infografik datar (flat infographic).

- **Concept 2 — Tabel visual: "Kondisi Core vs Kemampuan Joule"**: Versi visual dari tabel yang sudah di-draft di bagian Data Tables — empat baris (Bersih/Sebagian/Kotor/ECC) dengan ikon lampu hijau-kuning-merah untuk kapabilitas AI yang tersedia. Format ini mudah di-screenshot dan dikirim di internal chat — nilai shareability tinggi untuk audiens B2B Indonesia. Disarankan: tabel berwarna / heatmap sederhana.

- **Concept 3 — Timeline atau step diagram: "Empat Fondasi Clean Core yang Membuka Nilai AI"**: Empat langkah berurutan atau empat blok paralel (Proses Standar → Released APIs → Data Tepercaya → Integrasi API-first) dengan label singkat tiap blok dan ikon yang mewakili. Di bagian bawah: label "Joule & Business AI siap dioperasikan." Disarankan: diagram horizontal 4 langkah, desain minimalis, teks Indonesia.

---

## Notes on brief's "SAP/partner tech to teach" — researcher resolution

| Item yang diminta brief | Status verifikasi | Catatan untuk writer |
|---|---|---|
| Joule Studio ketersediaan/penamaan 2026 | Terkonfirmasi: Joule Studio 2.0, diumumkan Mei 2026, rollout Juni 2026 | Lihat Flag #2 — jangan klaim sudah GA penuh |
| Pernyataan SAP yang dapat dikutip mengaitkan AI dengan clean core | Terkonfirmasi: SAP News 2024 (Muruzabal) + Sapphire 2026 (ERP Today + SAP News) | Tersedia 2+ kutipan langsung dari SAP/customers |
| Nama SAP BTP AI Foundation saat ini | SUDAH BERUBAH: nama baru adalah SAP Business AI Platform (Sapphire Mei 2026) | Lihat Flag #1 — gunakan nama baru |
| Mekanisme mengapa Z-code membatasi AI | Terkonfirmasi: ekstensi Z yang tidak menggunakan released APIs tidak "terlihat" oleh AI agent; logika tersembunyi di objek internal | Framing: AI agent mengakses logika bisnis via released APIs; kode Z yang tidak exposed = blank spot untuk AI |
| Angka uplift AI (dilabeli reported/illustrative) | Levi Strauss: 2–5 hari → 20–30 menit (80% otomatis); Aeropuertos: 16% cost reduction + 45 ton CO₂ | Label sebagai "menurut [perusahaan] di SAP Sapphire 2026" — bukan jaminan |
| ECC tidak bisa akses Business AI/Joule penuh | Terkonfirmasi: Joule tidak native untuk ECC/on-premise klasik | Tulis dengan jelas di bagian "kapan AI belum prioritas" |
| Kredensial Soltius (Platinum via United VARs; Data and AI Consulting) | Terkonfirmasi di company_profile.md | Gunakan di closing CTA dan 1 mid-article aside |
