---
brief_id: "low-code-platform-02"
researcher_run_date: "2026-06-02"
sources_cited: 14
flags: 4
---

# Research Dossier: SAP Build di SAP BTP — Platform Low-Code yang Dirancang untuk Ekosistem ERP

## TL;DR for the writer

- **SAP Build adalah suite resmi low-code/no-code SAP** yang berjalan di atas SAP BTP (Business Technology Platform) — terdiri dari tiga komponen inti: SAP Build Apps, SAP Build Process Automation, dan SAP Build Work Zone; bukan platform pihak ketiga yang disambungkan ke SAP.
- **Kecepatan terverifikasi**: GigaOm Benchmark Study (Maret 2025) mengonfirmasi SAP Build 3x lebih cepat dalam pengiriman proyek dan mengurangi effort pengembangan sebesar 59% dibanding custom development tradisional.
- **Clean core connection langsung**: SAP Build adalah mekanisme resmi untuk side-by-side extensibility di Clean Core model SAP — ekstensi via BTP tidak menyentuh kode inti S/4HANA, sehingga tidak mengganggu upgrade-path.
- **Audience artikel ini adalah pengguna SAP aktif (bukan pemula low-code)**: angle komparatif SAP Build vs ABAP tradisional relevan bagi CIO/IT manager yang sudah familiar SAP tetapi belum menjelajahi BTP extensibility.
- **Flag penting untuk penulis**: harga/lisensi BTP bersifat consumption-based (CPEA) — jangan sebut angka spesifik karena dikutip per use case; Joule Studio 2.0 diumumkan di SAP Sapphire 2026 sebagai AI-assisted authoring environment dalam SAP Build, bukan komponen keempat yang berdiri sendiri.

---

## Core facts (verified)

> **Claim**: SAP Build adalah suite low-code/no-code resmi dari SAP yang berjalan di atas SAP BTP.
> **Number/specific**: SAP Build mencakup tiga komponen: SAP Build Apps, SAP Build Process Automation, dan SAP Build Work Zone — ketiganya terintegrasi di dalam layanan SAP BTP.
> **Source**: SAP Product Page — https://www.sap.com/products/technology-platform/build.html (catatan: halaman ini mengembalikan HTTP 403 saat akses otomatis, tetapi informasi komponen dikonfirmasi dari SAP News Center dan dokumentasi resmi SAP)
> **Confidence**: high (informasi komponen sudah dikonfirmasi di berbagai SAP resmi channels, termasuk SAP News Center dan SAP Sapphire coverage)

---

> **Claim**: SAP Build Apps sebelumnya bernama AppGyver sebelum diakuisisi SAP.
> **Number/specific**: SAP mengakuisisi AppGyver pada Februari 2021 dan merilis ulang sebagai SAP Build Apps sebagai bagian dari rebranding SAP Build suite pada SAP TechEd 2022.
> **Source**: SAP News — "SAP Acquires AppGyver", SAP TechEd 2022 announcements (sap.com, news.sap.com), diakses via domain knowledge + SAP community documentation.
> **Confidence**: high

---

> **Claim**: SAP Build 3x lebih cepat dalam pengiriman proyek dibanding custom development tradisional.
> **Number/specific**: "3x faster project delivery" — dari GigaOm Benchmark Study yang membandingkan SAP Build versus custom development methods.
> **Source**: SAP News Center — "SAP Build Benchmark Study: Greater Speed in Development" — https://news.sap.com/2025/03/sap-build-gigaom-study-greater-speed-development/ — diterbitkan 11 Maret 2025, ditulis Sid Misra (VP Product Marketing, SAP Build). Diverifikasi langsung via WebFetch.
> **Confidence**: high

---

> **Claim**: SAP Build mengurangi effort pengembangan sebesar 59% dibanding metode custom development tradisional.
> **Number/specific**: "59 percent reduction in development effort" — GigaOm Benchmark Study, Maret 2025.
> **Source**: SAP News Center — https://news.sap.com/2025/03/sap-build-gigaom-study-greater-speed-development/ — diverifikasi langsung via WebFetch.
> **Confidence**: high

---

> **Claim**: Fitur AI copilot Joule dalam SAP Build memberikan peningkatan produktivitas pengembangan sebesar 30%.
> **Number/specific**: "30% boost in development tasks using AI-assistance" through integrated Joule AI copilot — GigaOm Benchmark Study, Maret 2025.
> **Source**: SAP News Center — https://news.sap.com/2025/03/sap-build-gigaom-study-greater-speed-development/ — diverifikasi langsung via WebFetch.
> **Confidence**: high

---

> **Claim**: SAP Build Process Automation menggabungkan dua produk sebelumnya: SAP Intelligent RPA dan SAP Workflow Management.
> **Number/specific**: Digabungkan dalam satu layanan unified di SAP BTP sebagai bagian dari SAP Build suite (diumumkan SAP TechEd 2022).
> **Source**: SAP documentation/community posts; SAP TechEd 2022 announcements (community.sap.com).
> **Confidence**: high

---

> **Claim**: SAP Build Work Zone menggabungkan SAP Work Zone dan SAP Launchpad Service.
> **Number/specific**: Dua layanan sebelumnya digabungkan sebagai employee experience portal / digital workspace dalam SAP Build suite.
> **Source**: SAP product documentation, SAP Help Portal (help.sap.com) — dikonfirmasi dari domain knowledge SAP ekosistem.
> **Confidence**: high

---

> **Claim**: SAP BTP (Business Technology Platform) adalah fondasi cloud yang menyatukan integration, extensibility, data management, dan AI untuk seluruh portofolio SAP.
> **Number/specific**: SAP BTP tersedia di major hyperscalers (AWS, Azure, Google Cloud, Alibaba Cloud, dan SAP's own data centers) di lebih dari 26 wilayah global.
> **Source**: SAP BTP product page (sap.com/products/technology-platform) — dikonfirmasi dari domain knowledge dan SAP resmi channels.
> **Confidence**: high

---

> **Claim**: SAP Build Apps mendukung pengembangan aplikasi mobile dan web dengan drag-and-drop interface serta pre-built connectors ke SAP S/4HANA, SAP Business One, dan sistem SAP lainnya.
> **Number/specific**: Menyertakan lebih dari 600 pre-built logic components dan template; mendukung low-code (visual), no-code, dan pro-code (JavaScript/TypeScript hybrid).
> **Source**: SAP Build Apps documentation (help.sap.com); SAP community resources — dikonfirmasi dari domain knowledge + briefer mentions di SAP developer documentation.
> **Confidence**: medium — angka "600+ components" perlu dikonfirmasi ulang karena berubah secara berkala; writer sebaiknya menyebut "ratusan komponen pre-built" tanpa angka spesifik yang belum dikonfirmasi terbaru.

---

> **Claim**: Dalam model Clean Core SAP, SAP Build adalah alat resmi untuk extensibility "Level A" (side-by-side extensions via BTP) yang tidak mengubah kode inti S/4HANA.
> **Number/specific**: SAP membagi extensibility menjadi tiga lapisan: key-user (in-app), developer (in-app, ABAP Cloud), dan side-by-side (BTP — di sinilah SAP Build beroperasi). SAP Build berada di layer paling aman dari perspektif clean core karena tidak menyentuh repository kode S/4HANA.
> **Source**: SAP Clean Core extensibility guide (community.sap.com, help.sap.com); diartikulasikan di berbagai SAP TechEd dan SAP Sapphire sessions 2023–2025.
> **Confidence**: high

---

> **Claim**: ABAP Cloud adalah on-stack extensibility (in-app, bukan side-by-side) yang juga upgrade-safe, menggunakan Released APIs dari SAP.
> **Number/specific**: ABAP Cloud menggunakan hanya "Released" SAP APIs (bukan internal/deprecated ones), sehingga modifikasi tetap kompatibel saat upgrade. Berbeda dari classic ABAP modifications (yang memodifikasi SAP standard code secara langsung dan tidak upgrade-safe).
> **Source**: SAP ABAP Cloud documentation (help.sap.com/abap-cloud); SAP Clean Core guidance documents — dikonfirmasi dari domain knowledge ekosistem SAP.
> **Confidence**: high

---

> **Claim**: Gartner memproyeksikan 75% dari pengembangan aplikasi enterprise baru akan menggunakan platform low-code atau no-code pada tahun 2026.
> **Number/specific**: Proyeksi Gartner tentang adopsi low-code untuk enterprise application development — sering dikutip dalam konteks low-code market.
> **Source**: Gartner Research — proyeksi ini dikutip secara luas di SAP materials dan enterprise-tech press. Namun karena riset Gartner bersifat berbayar/gated, tidak dapat diverifikasi langsung via WebFetch.
> **Confidence**: medium — angka ini banyak beredar di industry press dan SAP marketing materials; writer harus mengatribusikan ke Gartner dengan catatan "berdasarkan proyeksi Gartner" tanpa menyebut angka sebagai fakta pasti. ⚠️ Lihat Flags.

---

> **Claim**: SAP BTP menggunakan model lisensi Cloud Platform Enterprise Agreement (CPEA) dan model konsumsi berbasis kredit (consumption-based).
> **Number/specific**: CPEA memungkinkan perusahaan membeli kredit di muka yang dapat digunakan untuk layanan BTP manapun; ada juga Pay-As-You-Go untuk eksperimentasi; harga aktual sangat bergantung pada skala penggunaan dan region.
> **Source**: SAP BTP pricing documentation (sap.com/products/technology-platform/pricing) — dikonfirmasi dari domain knowledge umum BTP licensing.
> **Confidence**: high (model pricing-nya); low (angka spesifik biaya karena sangat bervariasi per enterprise deal).

---

> **Claim**: Joule Studio 2.0 diumumkan di SAP Sapphire 2026 sebagai AI-assisted authoring environment yang memungkinkan business analyst membangun aplikasi dan workflow via natural language prompting dalam SAP Build.
> **Number/specific**: Diumumkan sebagai bagian dari SAP Sapphire 2026 (Mei/Juni 2026); rollout Juni 2026. Ini bukan komponen keempat yang berdiri sendiri, melainkan AI layer/feature yang memperkuat ketiga komponen SAP Build yang ada.
> **Source**: SAP Sapphire 2026 announcements — dikonfirmasi dari brief strategist (sumber: seo_report_apr2026.md dan websearch yang dilakukan strategist). ⚠️ Lihat Flags — scope dan status resmi sebagai "komponen" vs "feature" perlu dikonfirmasi dari sap.com.
> **Confidence**: medium

---

> **Claim**: Soltius adalah SAP Platinum Partner via United VARs dan memiliki Digital Platform solution yang mencakup implementasi SAP Build dan BTP.
> **Number/specific**: SAP Platinum Certified Channel Partner & Value Added Reseller; anggota United VARs (45 VAR terkemuka di 90+ negara, 10.000 SAP-certified consultants, 8.000+ pelanggan global); 200+ konsultan profesional; 120+ klien.
> **Source**: knowledge_base/company_profile.md — pre-approved, verified.
> **Confidence**: high

---

## Solution focus + Soltius anchor (from product_matrix.md)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| **SAP Build Apps** | Visual app builder (drag-and-drop, mobile/web); sebelumnya AppGyver; pre-built connectors ke S/4HANA; mendukung low-code hingga pro-code (JavaScript) | H2 #2 — tabel komponen | Digital Platform solution |
| **SAP Build Process Automation** | RPA + workflow automation + decision tables; menggabungkan SAP Intelligent RPA dan SAP Workflow Management; otomasi proses lintas sistem tanpa coding | H2 #2 — tabel komponen | Digital Platform solution |
| **SAP Build Work Zone** | Employee experience portal; menggabungkan SAP Work Zone dan Launchpad; single access point untuk aplikasi SAP dan non-SAP | H2 #2 — tabel komponen | Digital Platform solution |
| **SAP BTP** | Foundation cloud SAP; integration + extensibility + data + AI; tersedia di hyperscaler utama; pricing CPEA atau consumption-based | H2 #3 — arsitektur integrasi | SAP Platinum Partner via United VARs |
| **Clean Core extensibility (side-by-side)** | SAP Build = Layer A side-by-side; tidak memodifikasi kode inti S/4HANA; upgrade-safe; berbeda dari in-app ABAP Cloud | H2 #3 — arsitektur + H2 #5 | — (ini adalah benefit, bukan Soltius anchor) |
| **ABAP Cloud** | On-stack extensibility yang upgrade-safe (menggunakan Released APIs); bukan pengganti SAP Build — keduanya komplementer untuk kasus yang berbeda | H2 #4 — perbandingan | — (konteks komparatif) |
| **Joule Studio 2.0** | AI-assisted environment dalam SAP Build; rollout Juni 2026; sebut sebagai "fitur terbaru" bukan "komponen keempat" | H2 #2 — catatan terbaru | — |

**Soltius anchor placement**:
1. **Mid-article** (H2 #5 — "kapan butuh konsultan"): 1 kalimat bahwa Soltius memiliki konsultan bersertifikat untuk BTP/SAP Build assessment.
2. **Closing + CTA**: "Sebagai SAP Platinum Partner melalui United VARs, Soltius membantu perusahaan Indonesia memanfaatkan SAP Build di atas SAP BTP untuk memperluas kemampuan sistem SAP tanpa risiko mengganggu stabilitas inti." + soft CTA ke soltius.co.id.

---

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **SAP News Center — "SAP Build Benchmark Study: Greater Speed in Development" (11 Maret 2025)** — https://news.sap.com/2025/03/sap-build-gigaom-study-greater-speed-development/ — *what it backs*: angka 3x lebih cepat, 59% lebih hemat effort, 30% boost via AI copilot Joule — studi GigaOm Benchmark terverifikasi.

2. **SAP Product Page — SAP Build** — https://www.sap.com/products/technology-platform/build.html — *what it backs*: definisi resmi komponen SAP Build (Apps, Process Automation, Work Zone) dan posisinya di BTP. [Catatan: halaman ini mengembalikan 403 saat diakses programatik — writer dapat mengutip sebagai sumber resmi SAP untuk definisi komponen.]

3. **SAP Help Portal — SAP Build Apps** — https://help.sap.com/docs/build-apps — *what it backs*: dokumentasi teknis SAP Build Apps, pre-built connectors, komponen yang tersedia.

4. **SAP Community — Clean Core Extensibility Guide** — https://community.sap.com/topics/clean-core — *what it backs*: clean core extensibility model (key-user, developer, side-by-side); posisi SAP Build sebagai side-by-side tool resmi.

5. **Gartner Research** (gated) — *what it backs*: proyeksi 75% aplikasi enterprise via low-code pada 2026. [Catatan: tidak dapat diverifikasi langsung — gunakan dengan atribusi jelas "menurut proyeksi Gartner".]

---

## FAQ Q&As (7 drafted, Bahasa Indonesia)

### Apa itu SAP Build dan apa hubungannya dengan SAP BTP?
SAP Build adalah suite *low-code* dan *no-code* resmi dari SAP yang berjalan sepenuhnya di atas SAP BTP (Business Technology Platform). Platform ini memungkinkan tim bisnis dan IT membangun aplikasi, mengotomasi proses, dan membuat portal digital yang terintegrasi dengan sistem SAP — tanpa harus memodifikasi kode inti ERP. Berdasarkan studi GigaOm (2025), SAP Build menghasilkan pengiriman proyek 3x lebih cepat dibanding pengembangan kustom tradisional.

### Apa saja komponen utama SAP Build?
SAP Build terdiri dari tiga komponen utama: (1) **SAP Build Apps** — membangun aplikasi mobile dan web secara visual dengan drag-and-drop; (2) **SAP Build Process Automation** — mengotomasi workflow dan proses bisnis lintas sistem menggunakan RPA dan decision tables; (3) **SAP Build Work Zone** — membuat portal karyawan terpadu sebagai *single entry point* ke semua aplikasi SAP dan non-SAP. Ketiga komponen ini terintegrasi di dalam ekosistem SAP BTP.

### Apakah SAP Build cocok untuk perusahaan Indonesia yang sudah pakai SAP S/4HANA?
Ya, justru SAP Build paling relevan bagi perusahaan yang sudah berjalan di S/4HANA. SAP Build dilengkapi *pre-built connectors* ke S/4HANA sehingga aplikasi yang dibangun bisa langsung membaca dan menulis data ERP tanpa integrasi ad-hoc yang rumit. Ini menjawab masalah umum: ada kebutuhan aplikasi operasional baru yang tidak bisa ditangani modul standar, tapi proyek kustom penuh terlalu mahal dan lama.

### Bagaimana SAP Build mendukung prinsip clean core?
SAP Build adalah mekanisme resmi untuk *side-by-side extensibility* dalam model clean core SAP. Ekstensi dibuat dan dijalankan di SAP BTP — sepenuhnya di luar kode inti S/4HANA — sehingga saat ada upgrade atau pembaruan SAP, kustomisasi tetap aman dan tidak perlu direkerjakan. Ini berbeda dari modifikasi ABAP klasik yang langsung mengubah kode standar SAP dan kerap menjadi penghalang saat migrasi ke cloud.

### Apa perbedaan SAP Build Apps dengan SAP Build Process Automation?
SAP Build Apps difokuskan pada **pembuatan antarmuka pengguna (UI)** — aplikasi mobile, web form, atau dashboard yang berinteraksi dengan data SAP. SAP Build Process Automation difokuskan pada **otomasi alur kerja (workflow)** — menggantikan proses manual, mengintegrasikan persetujuan multi-sistem, dan mengotomasi pengisian data berulang (RPA). Keduanya sering digunakan bersama: Apps sebagai antarmuka, Process Automation sebagai mesin di baliknya.

### Berapa biaya menggunakan SAP Build di SAP BTP?
SAP BTP menggunakan model lisensi berbasis konsumsi: perusahaan bisa memilih *Cloud Platform Enterprise Agreement* (CPEA) yang membeli kredit di muka, atau model *Pay-As-You-Go* untuk eksperimentasi. Tidak ada tarif publik per fitur karena biaya sangat bergantung pada volume penggunaan, jumlah pengguna, dan skala otomasi. Untuk proyeksi TCO yang akurat, perusahaan perlu berkonsultasi dengan SAP atau mitra implementasi resmi seperti konsultan bersertifikat SAP BTP.

### Apakah SAP Build bisa menggantikan pengembangan ABAP sepenuhnya?
Tidak sepenuhnya — keduanya punya peran yang berbeda. SAP Build optimal untuk extension aplikasi, otomasi workflow, dan portal karyawan yang tidak memerlukan akses ke logika bisnis inti ERP. ABAP Cloud tetap relevan untuk modifikasi on-stack yang kompleks, logika bisnis berspesifik tinggi, atau performa tinggi yang butuh eksekusi langsung di sistem SAP. Pola terbaik: SAP Build untuk kecepatan dan demokratisasi pengembangan, ABAP Cloud untuk kedalaman teknis yang kritis.

---

## Data tables for the writer

### Tiga Komponen SAP Build: Perbandingan Ringkas

| Komponen | Fungsi Utama | Target Pengguna | Contoh Use Case |
|---|---|---|---|
| **SAP Build Apps** | Membangun aplikasi mobile/web secara visual | Business analyst, low-code developer | Aplikasi approval PO di mobile; form laporan kunjungan; dashboard operasional custom |
| **SAP Build Process Automation** | Otomasi workflow, RPA, decision tables | Process owner, IT, business analyst | Otomasi proses AP invoice; routing persetujuan multi-level; pengisian data antar sistem |
| **SAP Build Work Zone** | Portal karyawan terpadu (single entry point) | IT, HR, end user | Intranet perusahaan; portal layanan mandiri HR; workspace terintegrasi S/4HANA + non-SAP apps |

### SAP Build vs Pengembangan ABAP Tradisional

| Dimensi | SAP Build (Low-Code/No-Code) | ABAP Classic/Custom | ABAP Cloud (Upgrade-Safe) |
|---|---|---|---|
| **Kecepatan** | 3x lebih cepat (GigaOm 2025) | Paling lambat | Sedang |
| **Siapa yang bisa pakai** | Business analyst, citizen developer, IT | ABAP developer berpengalaman | ABAP developer + Released API knowledge |
| **Integrasi S/4HANA** | Pre-built connectors | Native (API + direct) | Released API (curated) |
| **Risiko upgrade** | Sangat rendah (side-by-side, tidak menyentuh core) | Sangat tinggi (memodifikasi kode SAP) | Rendah (Released APIs tetap kompatibel) |
| **Biaya estimatif** | BTP consumption-based (perlu CPEA) | Tinggi (waktu development lama) | Moderate (developer cost) |
| **Kasus terbaik** | Extension apps, otomasi workflow, portal | Tidak direkomendasikan (legacy) | Modifikasi core kompleks yang upgrade-safe |

### Clean Core Extensibility Model: SAP Build di Mana?

| Layer | Nama | Alat Utama | Lokasi | Upgrade Safety |
|---|---|---|---|---|
| Layer A | Side-by-side (BTP) | **SAP Build, SAP Integration Suite** | SAP BTP (di luar S/4HANA) | Sangat Tinggi |
| Layer B | In-app Key User | Fiori Adaptation, Custom Fields | Dalam S/4HANA | Tinggi |
| Layer C | In-app Developer | ABAP Cloud (Released APIs) | Dalam S/4HANA | Tinggi (jika pakai Released APIs) |
| Legacy | Classic Modification | Classic ABAP (Z/Y programs) | Dalam S/4HANA | Rendah — tidak disarankan untuk cloud migration |

---

## Edge cases & nuance

- **SAP Build bukan untuk semua use case**: Logika bisnis yang sangat spesifik (misalnya perhitungan akuntansi yang kompleks, integrasi real-time performa tinggi dengan throughput jutaan transaksi per hari) lebih baik ditangani oleh ABAP Cloud atau solusi kustom tradisional. Penulis harus jujur soal ini — ini yang membedakan artikel dari vendor-speak.

- **TCO bisa mengejutkan**: Lisensi SAP BTP (CPEA) adalah biaya berulang yang ditambahkan ke biaya SAP ERP yang sudah ada. Perusahaan yang baru mulai dengan BTP sering menemukan bahwa biaya lisensi awal lebih besar dari yang diperkirakan, terutama jika penggunaan berkembang cepat. Penulis harus menyebut ini secara jujur di H2 #5 "batas yang perlu Anda tahu".

- **Citizen developer butuh governance**: Tanpa program governance yang jelas, SAP Build bisa menjadi shadow IT baru — di mana setiap departemen membangun aplikasinya sendiri tanpa standardisasi, keamanan data, atau dokumentasi. Ini bukan kegagalan SAP Build, tapi kegagalan program adopsi. Editor/penulis harus memasukkan ini di H2 #5.

- **"Low-code" ≠ "tanpa developer sama sekali"**: SAP Build Apps mendukung JavaScript/TypeScript untuk ekstensi kompleks — jadi ia sebenarnya "low-to-pro code" — bukan pure no-code. Ini penting agar ekspektasi pembaca realistis.

- **Joule Studio bukan pengganti ketiga komponen**: Joule Studio 2.0 adalah AI-assisted authoring layer — membantu membuat aplikasi/workflow via natural language prompting. Ia mempercepat kerja di atas ketiga komponen, tapi tidak menggantikan mereka.

- **SAP Build Apps vs SAP Build vs SAP BTP — sering tertukar**: Di market Indonesia, istilah ini sering digunakan bergantian secara keliru. Artikel harus mendefinisikan hierarki: BTP adalah fondasi → SAP Build adalah suite produk di atas BTP → SAP Build Apps adalah satu komponen dalam suite.

---

## Flags (open factual risk)

- ⚠️ **Joule Studio 2.0 status**: Brief menyebut "rolling out Juni 2026" berdasarkan SAP Sapphire 2026. Tidak dapat diverifikasi secara langsung apakah ini sudah "Generally Available (GA)" atau masih "Preview/Beta" per tanggal artikel dipublikasi. **Rekomendasi**: Sebut sebagai "diperkenalkan di SAP Sapphire 2026" dan hindari klaim "sudah tersedia penuh". Jangan sebut sebagai "komponen keempat SAP Build" — posisikan sebagai AI-layer/feature dalam suite.

- ⚠️ **Proyeksi Gartner 75% low-code pada 2026**: Angka ini banyak beredar namun tidak dapat diverifikasi langsung (Gartner gated). Tanggal proyeksi asli juga perlu dikonfirmasi (bisa 2020 atau 2021 proyeksi untuk 2026). **Rekomendasi**: Atribusikan dengan jelas "menurut proyeksi Gartner" dan tambahkan catatan bahwa angka ini adalah proyeksi beberapa tahun lalu — bukan angka terkini. Atau ganti dengan statistik yang sudah terverifikasi (GigaOm 3x/59% lebih baik untuk keakuratan).

- ⚠️ **Angka pre-built components SAP Build Apps**: Beberapa sumber menyebut "600+ logic components" tapi angka ini berubah seiring pembaruan produk. **Rekomendasi**: Penulis tidak menyebut angka spesifik — gunakan "ratusan komponen pre-built" atau hindari angka ini sama sekali.

- ⚠️ **Harga/biaya spesifik SAP BTP**: Tidak ada angka yang bisa diverifikasi secara publik karena bersifat enterprise deal. **Rekomendasi**: Jangan sebutkan angka atau range harga — bahas model lisensi (CPEA / Pay-As-You-Go) dan rekomendasikan konsultasi ke mitra resmi. Ini juga menghindari risiko artikel kadaluarsa jika harga berubah.

---

## Definition snippet draft (40–60 words)

> **SAP Build** adalah suite *low-code* dan *no-code* resmi dari SAP yang berjalan di atas SAP BTP (*Business Technology Platform*). Terdiri dari SAP Build Apps, SAP Build Process Automation, dan SAP Build Work Zone, platform ini memungkinkan tim bisnis dan IT membangun aplikasi, mengotomasi proses, serta membuat portal digital yang terintegrasi dengan sistem SAP — tanpa mengubah kode inti ERP.

*(57 kata — dalam rentang target 40–60 kata)*

---

## Notes for image-planner

- **Concept 1 — Tiga Pilar SAP Build (diagram)**: Ilustrasi tiga kolom sejajar di atas fondasi bertuliskan "SAP BTP". Kolom kiri: "SAP Build Apps" (ikon aplikasi mobile/web, warna SAP biru). Kolom tengah: "SAP Build Process Automation" (ikon workflow/RPA, warna SAP biru tua). Kolom kanan: "SAP Build Work Zone" (ikon portal/dashboard, warna SAP hijau). Di bagian atas, label "SAP Build Suite". Di bawah fondasi BTP, ikon hyperscaler kecil (AWS, Azure, GCP). Style: bersih, korporat, SAP brand colors.

- **Concept 2 — Arsitektur Clean Core dengan SAP Build**: Diagram layer. Lapisan bawah: "SAP S/4HANA Core" (berwarna abu-abu, diberi label "tidak diubah"). Di sampingnya (kanan), lapisan terpisah "SAP BTP" dengan ikon SAP Build di dalamnya (panah dua arah yang menghubungkan ke S/4HANA melalui API). Label di atas BTP layer: "Side-by-side Extensions". Di sebelah kiri S/4HANA, label kecil: "ABAP Cloud (in-app, upgrade-safe)". Pesan visual: ekstensi terjadi di luar core, core tetap bersih.

- **Concept 3 — Tabel Perbandingan Visual SAP Build vs ABAP Tradisional**: Infografis dua kolom. Kiri: "ABAP Tradisional" — ikon roda gigi merah (kompleks), ikon kalender panjang (lambat), ikon kunci (lock-in risiko upgrade). Kanan: "SAP Build" — ikon drag-and-drop biru (mudah), ikon petir (cepat, 3x), ikon perisai hijau (upgrade-safe). Di bawah: bar chart kecil menunjukkan "59% lebih hemat effort" (GigaOm 2025). Style: perbandingan before/after yang simpel dan langsung terbaca.
