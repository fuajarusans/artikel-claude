---
brief_id: "sap-btp-c01"
researcher_run_date: "2026-10-08"
sources_cited: 7
flags: 5
batch: "conditional-2026-10"
target_word_count: 1100
---

# Research Dossier: SAP BTP untuk Pemula — Fungsi dan Use Case Business Technology Platform

## TL;DR for the writer

- **Kerangka 4 pilar TERVERIFIKASI** (pengembangan aplikasi & otomasi / integrasi / data & analitik / AI), selaras antara SAP Learning dan empat "komponen" yang dicatat Wikipedia. **WAJIB hedge**: sebagian materi SAP memakai **5 pilar** (menambah *Platform Foundation*: runtime, keamanan/kompliansi, persistensi) atau membungkusnya sebagai "SAP Business AI Platform". Jangan sajikan "4" sebagai angka mutlak — frasakan "SAP umumnya mengelompokkan ke dalam empat pilar".
- **PaaS + nama lama TERVERIFIKASI & tanggal spesifik**: BTP = platform-as-a-service; nama "SAP Cloud Platform" resmi dipensiunkan **18 Januari 2021**. Silsilah: SAP NetWeaver Cloud (2012) → SAP HANA Cloud Platform (2013) → SAP Cloud Platform (2017) → SAP BTP (2021). Aman dipakai; atribusikan ke SAP/Wikipedia.
- **Free tier & trial TERVERIFIKASI dari SAP resmi**: trial **90 hari tanpa data pembayaran** (non-produksi, akun mati setelah 30 hari tanpa login); **free tier tanpa batas waktu** pada akun berbasis konsumsi (butuh data pembayaran untuk verifikasi, layanan free-nya gratis). Model berbayar: pay-as-you-go, kredit prabayar, langganan. Ini angka inline terkuat untuk H2 #3.
- **Side-by-side extensibility TERVERIFIKASI**: ekstensi dibangun **di luar** core S/4HANA pada SAP BTP, terhubung via **released API & event**, menjaga core standar/aman di-upgrade. Selaras dengan artikel clean core (cousin link).
- **HATI-HATI pada angka yang berevolusi**: jumlah integrasi Integration Suite (3.400+ / 3.800+ / "ribuan"), daftar hyperscaler (AWS/Azure/Google Cloud/Alibaba), dan jumlah pelanggan (27.000+ per Okt 2024) semuanya **angka marketing SAP yang bergeser tiap rilis**. Pakai dengan hedge + atribusi tahun, atau pilih angka pilar/free-tier yang lebih stabil untuk memenuhi kuota ≥5 angka. **Angka GigaOm SAP Build TIDAK ditemukan/terverifikasi → JANGAN dipakai.**

## Core facts (verified)

> **Claim**: SAP Business Technology Platform adalah platform-as-a-service (PaaS).
> **Number/specific**: Dikategorikan sebagai PaaS — menyediakan lingkungan pengembangan & runtime untuk aplikasi enterprise berbasis cloud; berbeda dari SaaS yang dikonsumsi sebagai aplikasi jadi.
> **Source**: Wikipedia "SAP BTP" ("a platform as a service developed by SAP SE"), diakses 2026-10-08; dikuatkan TechTarget (definisi "SAP's platform as a service (PaaS) product"), diakses 2026-10-08.
> **Confidence**: high.

> **Claim**: SAP BTP dibangun di atas empat pilar/area kapabilitas fungsional.
> **Number/specific**: (1) pengembangan aplikasi & otomasi; (2) integrasi; (3) data & analitik; (4) AI. Wikipedia mencatat empat "komponen" paralel: membangun/memperluas aplikasi + otomasi; mengakses & menganalisis data lintas sistem SAP/non-SAP (multi-cloud); menghubungkan aplikasi & data; mengembangkan AI (termasuk akses LLM).
> **Source**: SAP Learning — "Reviewing/Exploring SAP BTP Foundational Pillars" (learning.sap.com, kursus BTP Fundamentals Level 1), diakses 2026-10-08; Wikipedia "SAP BTP", diakses 2026-10-08.
> **Confidence**: high untuk pengelompokan empat area. **Lihat flag variasi 4 vs 5.**

> **Claim**: ⚠️ Jumlah pilar bervariasi di materi SAP (4 vs 5).
> **Number/specific**: Satu kursus SAP Learning menyusun BTP atas **lima pilar**, menambahkan lapisan *Platform Foundation* (runtime, keamanan & kompliansi, persistensi). Homepage SAP terkini juga membingkai sebagai "agentic AI-enabled development, automation, integration, data, and analytics" (AI dijalin ke semua area) di bawah payung SAP Business AI Platform.
> **Source**: SAP Learning (varian lima pilar) + sap.com/products/technology-platform (framing homepage), diringkas via WebSearch, diakses 2026-10-08.
> **Confidence**: high bahwa variasi ADA. Writer memakai 4 pilar + hedge; JANGAN klaim "selalu 4".

> **Claim**: Nama lama SAP BTP adalah SAP Cloud Platform; dipensiunkan pada tanggal spesifik.
> **Number/specific**: Nama "SAP Cloud Platform" resmi dipensiunkan **18 Januari 2021** untuk mendukung SAP BTP (strategi "One Platform"). Fungsi lama tidak hilang — dikelompokkan ulang ke SAP Integration Suite & SAP Extension Suite di dalam BTP.
> **Source**: Wikipedia "SAP BTP" (tanggal 18 Januari 2021), diakses 2026-10-08; dikuatkan beberapa sumber sekunder (mid-Januari 2021), diakses 2026-10-08.
> **Confidence**: high untuk tahun 2021 & fakta rename; tanggal persis 18 Jan 2021 dari Wikipedia (cross-check "pertengahan Januari 2021"). Brief menyebut "~2021" → **kini bisa dipastikan 2021** (boleh sebut 18 Januari 2021 dengan atribusi, atau cukup "sejak 2021").

> **Claim**: Silsilah penamaan platform sebelum BTP.
> **Number/specific**: SAP NetWeaver Cloud (diperkenalkan 16 Okt 2012) → SAP HANA Cloud Platform (13 Mei 2013) → SAP Cloud Platform (27 Feb 2017) → SAP Business Technology Platform (nama BTP dipakai, SAP Cloud Platform pensiun 18 Jan 2021).
> **Source**: Wikipedia "SAP BTP", diakses 2026-10-08.
> **Confidence**: high. Untuk pemula cukup sebut "sebelumnya SAP Cloud Platform"; silsilah lengkap opsional (hemat ruang).

> **Claim**: ⚠️ SAP BTP BUKAN pengganti 1:1 SAP Cloud Platform.
> **Number/specific**: SAP Cloud Platform kira-kira hanya mencakup pilar pengembangan aplikasi & integrasi dari BTP; BTP memperluas cakupan ke data & analitik dan AI.
> **Source**: Gambit wiki (ringkasan sumber sekunder), diakses 2026-10-08.
> **Confidence**: medium (sumber sekunder). **Rekomendasi**: boleh disebut sebagai nuansa ("BTP lebih luas daripada SAP Cloud Platform lama"), jangan dibuat klaim teknis keras.

> **Claim**: Produk SAP utama per pilar (penamaan terkini).
> **Number/specific**: **App dev & otomasi** → SAP Build (low-code & pro-code + otomasi alur kerja). **Integrasi** → SAP Integration Suite (API, konektor, konten prapaket SAP & non-SAP). **Data & analitik** → SAP HANA Cloud, SAP Datasphere, SAP Analytics Cloud (SAC). **AI** → SAP Business AI, asisten Joule, serta SAP AI Core / AI Launchpad / Generative AI Hub.
> **Source**: SAP (sap.com product pages) + SAP Learning, diringkas via WebSearch, diakses 2026-10-08.
> **Confidence**: high untuk pemetaan produk↔pilar. Catatan: muncul payung lebih baru **SAP Business Data Cloud** di pilar data (SAC disebut front-end-nya) — **baru/berevolusi, hedge; jangan jadikan fakta utama**.

> **Claim**: SAP Datasphere adalah nama baru dari SAP Data Warehouse Cloud.
> **Number/specific**: SAP Datasphere = penamaan terkini (sebelumnya SAP Data Warehouse Cloud). Jangan pakai "Data Warehouse Cloud" tanpa catatan.
> **Source**: knowledge_base/product_matrix.md (fakta mapan, konsisten dgn penamaan SAP), diakses 2026-10-08.
> **Confidence**: high.

> **Claim**: Side-by-side extensibility di SAP BTP.
> **Number/specific**: Ekstensi dibangun **di luar** sistem inti (sering di SAP BTP) dan berkomunikasi dengan S/4HANA via **released API & event**; menjaga core tetap standar, terdokumentasi, dan aman di-upgrade (prinsip clean core). Berbeda dari on-stack/key-user extensibility yang berjalan di dalam stack S/4HANA.
> **Source**: SAP news.sap.com ("Extend SAP S/4HANA Cloud the Right Way", 2025) + SAP Learning (clean core extensibility) + SAP Community, diakses 2026-10-08.
> **Confidence**: high.

> **Claim**: SAP BTP menyediakan trial gratis 90 hari tanpa data pembayaran.
> **Number/specific**: Trial = **90 hari**, **tanpa informasi pembayaran**, untuk eksplorasi/non-produksi; akun yang **tidak login 30 hari berturut-turut** berisiko dihapus; di akhir masa trial akun & datanya dihapus (bisa mulai trial baru).
> **Source**: SAP Help Portal — "Trial Accounts and Free Tier" (help.sap.com) + developers.sap.com ("Get an Account on SAP BTP"), diakses 2026-10-08.
> **Confidence**: high (SAP official). Catatan: post komunitas lama menyebut 365 hari — **usang**; halaman SAP terkini = 90 hari.

> **Claim**: SAP BTP memiliki free tier tanpa batas waktu (model berbasis konsumsi).
> **Number/specific**: Free tier tersedia pada akun **commercial berbasis konsumsi**; layanan free-nya gratis, tetapi **butuh data pembayaran untuk autentikasi** (otorisasi kartu ~1 EUR/USD yang kemudian batal); kapasitas terbatas, dukungan hanya komunitas, tanpa SLA; pekerjaan bisa dibawa saat upgrade ke berbayar.
> **Source**: SAP Help Portal — "Using Free Service Plans" / "Trial Accounts and Free Tier" (help.sap.com), diakses 2026-10-08.
> **Confidence**: high (SAP official).

> **Claim**: Model komersial berbayar SAP BTP.
> **Number/specific**: Tiga model — **Pay-As-You-Go** (tanpa komitmen awal, bayar sesuai pemakaian, ditagih bulanan), **Cloud credits / enterprise agreement** (prabayar kredit untuk masa kontrak, kelebihan ditagih list price), dan **Subscription** (biaya tetap untuk layanan terpilih). Estimasi biaya via SAP Discovery Center.
> **Source**: sap.com/products/technology-platform/pricing + SAP Learning ("Exploring SAP BTP Commercial Models"), diakses 2026-10-08.
> **Confidence**: high (struktur model); angka rupiah/euro spesifik JANGAN dikutip (bervariasi).

> **Claim**: SAP BTP berjalan multi-cloud di atas infrastruktur hyperscaler besar, dikelola SAP.
> **Number/specific**: Hyperscaler yang lazim disebut: **AWS, Microsoft Azure, Google Cloud** (sebagian sumber menambah **Alibaba Cloud** + infrastruktur SAP sendiri). Layanan, runtime, identitas, dan tools dirancang konsisten lintas hyperscaler.
> **Source**: Pengumuman SAP 2017 (multi-cloud) + SAP Insider reference-architecture decks (2023) + SAP Community, diakses 2026-10-08. Wikipedia mengonfirmasi framing "multi-cloud" untuk akses data.
> **Confidence**: medium. **Lihat flag**: halaman daftar region/hyperscaler resmi SAP mengembalikan 403 saat scrape; daftar persis bergeser. **Rekomendasi**: tulis "hyperscaler besar seperti AWS, Microsoft Azure, dan Google Cloud" + hedge "antara lain".

> **Claim**: Skala adopsi SAP BTP.
> **Number/specific**: Per **Oktober 2024**, SAP menyatakan **lebih dari 27.000 pelanggan dan 2.800 mitra** pada platform. (Angka 2015 historis: >4.000 pelanggan & 500 mitra.)
> **Source**: Wikipedia "SAP BTP" (mengutip pernyataan SAP, Okt 2024), diakses 2026-10-08.
> **Confidence**: medium-high. **Angka marketing SAP, point-in-time** — atribusikan "menurut SAP (Okt 2024)"; jangan pakai tanpa tahun.

> **Claim**: SAP Integration Suite menyediakan ribuan integrasi & konektor prapaket.
> **Number/specific**: Halaman produk SAP (edisi Kanada) menyebut **3.400+ integrasi & konektor prapaket** plus **4.000+ API siap pakai**; deck SAP 2025 menaikkan ke **3.800+ integrasi**; halaman produk utama SAP kini sekadar menyebut "ribuan". Open Connectors ke aplikasi non-SAP: 160+/170+/250+ tergantung halaman.
> **Source**: sap.com (Integration Suite product/application-integration pages) + SAP user-group decks 2024/2025, diakses 2026-10-08.
> **Confidence**: medium. **Angka marketing yang berevolusi** — **Rekomendasi**: tulis "lebih dari 3.400 integrasi siap pakai" **dengan hedge** ("menurut materi SAP"), atau cukup "ribuan integrasi prapaket". JANGAN presisi palsu.

**Total verified claims: 15** (melampaui ambang 12). Prioritaskan 8–12 terkuat untuk ~1100 kata: 4-pilar (+hedge 4/5), PaaS, nama lama + 2021, produk per pilar, side-by-side, trial 90 hari, free tier, 3 model komersial, 3 hyperscaler (hedge), 27.000+ pelanggan (atribusi Okt 2024).

## Solution focus + Soltius anchor (from product_matrix.md)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius anchor |
|---|---|---|---|
| **SAP Business Technology Platform (SAP BTP)** — PaaS multi-cloud; 4 pilar (app dev & otomasi, integrasi, data & analitik, AI); produk per pilar (SAP Build, SAP Integration Suite, SAP HANA Cloud/Datasphere/SAC, SAP Business AI/Joule); side-by-side extensibility; trial 90 hari + free tier | Nama penuh di sebutan pertama. Hedge jumlah pilar (4 vs 5). Nama lama SAP Cloud Platform (2021). Produk = penamaan terkini. **Soltius mengimplementasikan/mengintegrasikan DI ATAS BTP, bukan membuat BTP.** | Porsi besar di body (H2 #1–#3); anchor Soltius HANYA di Kesimpulan | Solusi **Digital Platform** (ekstensibilitas/low-code/integrasi di atas SAP BTP) + kredibilitas **SAP Platinum Partner melalui United VARs** (sejak 1998, Metrodata Group) |

Reminder framing (`style_guide.md` §11 + blacklist): Soltius **mengimplementasikan, mengintegrasikan, dan mendukung** solusi di atas SAP BTP — **bukan membuat/memiliki** BTP, SAP Build, Datasphere, atau SAC. Godaan terbesar di artikel platform: menulis seolah Soltius vendor platform — **jangan**. **Maks 2 self-mention** (1 positioning line di Kesimpulan + 1 soft website CTA baris terakhir). Tanpa aside Soltius di tengah body. Klaim peringkat satu-satunya yang boleh: "kontributor pendapatan terbesar bagi SAP Indonesia (sejak 2015)".

## Internal links (TEPAT 2 — 1 hub + 1 cousin; addendum §4)

1. **Hub (Digital Platform)**: `https://www.soltius.co.id/id/blog/low-code-and-no-code-platforms` — anchor natural **"platform low-code dan no-code"** (atau "low-code"). Placement: **lead**. *Why*: hub cluster Digital Platform; SAP BTP = fondasi tempat alat low-code SAP (SAP Build) berjalan, dan halaman ini membahas integrasi via API/konektor (match note sheet "Link ke API & integrasi"). Halaman **tidak** menyebut "SAP BTP" eksplisit → artikel ini melengkapi, bukan menduplikasi. Diverifikasi live strategist 2026-10-08.
2. **Cousin (BTP side-by-side)**: `https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide` — anchor natural **"SAP Clean Core"**. Placement: **H2 #2** saat membahas use case ekstensi tanpa menyentuh core. *Why*: prinsip clean core bergantung pada side-by-side extensibility di SAP BTP — salah satu use case utama BTP. URL English (`/blog/...`, tanpa `/id/`) sesuai product_matrix.md §6; anchor tetap Bahasa Indonesia.

> JANGAN tambah link ketiga. Semua inline natural, TANPA "BACA JUGA". ⚠️ Lihat Flags: halaman cousin clean core memuat placeholder draft "[NEEDS VALID DATA...]" di FAQ saat di-scrape — curator/CMS memastikan final sebelum publikasi; tidak mengubah isi artikel ini.

## Authoritative external sources (1–2 inline; addendum §4)

1. **SAP official — SAP Business Technology Platform** — `https://www.sap.com/products/technology-platform.html` — *what it backs*: kapabilitas/pilar BTP, penamaan produk terkini. **Tautkan inline di H2 #1.** Otoritas produk utama. *(Catatan: sap.com kadang 403 saat scrape bot — tetap valid sebagai tautan keluar untuk pembaca; fakta pilar sudah di-cross-check via SAP Learning + Wikipedia.)*
2. **SAP Learning — Foundational Pillars of SAP BTP** — `https://learning.sap.com/courses/sap-btp-fundamentals-level-1-foundations-for-next-gen-procurement-consultants/reviewing-sap-business-technology-platform-foundational-pillars` — *what it backs*: kerangka pilar (app dev & otomasi / integrasi / data & analitik / AI). Tautkan inline bila membahas kerangka pilar. Alternatif: `https://learning.sap.com/courses/exploring-sap-business-technology-platform` (overview kursus BTP).

> Total tautan eksternal: **1–2**, cukup. Prioritas: SAP official (pilar) + SAP Learning (kerangka pilar). Hindari outbound ke kompetitor integrator SAP.

## FAQ Q&As (Bahasa Indonesia; 30–60 kata, tiap jawaban memuat ≥1 fakta/angka)

> Ambil dari PAA brief. **Q1–Q3 wajib; Q4–Q5 opsional** (pakai Q4 bila word count < ~1150; Q5 cadangan jika writer ingin menonjolkan free tier). Addendum: FAQ 3–5.

### SAP BTP termasuk SaaS atau PaaS?
SAP BTP adalah platform-as-a-service (PaaS): ia menyediakan lingkungan untuk membangun, mengintegrasikan, dan memperluas aplikasi, bukan aplikasi siap pakai. Ini berbeda dari SaaS seperti SAP S/4HANA Cloud Public Edition yang langsung dikonsumsi pengguna. Baik Wikipedia maupun TechTarget mengklasifikasikan BTP sebagai produk PaaS dari SAP.

### Apa bedanya SAP BTP dan SAP S/4HANA?
SAP S/4HANA adalah ERP inti yang menjalankan keuangan, persediaan, dan produksi. SAP BTP adalah platform di sekelilingnya untuk memperluas, mengintegrasikan, dan menganalisis tanpa mengubah inti ERP. Keduanya saling melengkapi: S/4HANA mengeksekusi proses bisnis, sedangkan BTP menambah ekstensi, integrasi, dan analitik di luar core.

### Apakah SAP BTP sama dengan SAP Build?
Tidak. SAP Build hanyalah satu alat low-code/pro-code di dalam pilar pengembangan aplikasi SAP BTP. BTP mencakup tiga pilar lain di luar itu: integrasi (SAP Integration Suite), data & analitik (SAP HANA Cloud, SAP Datasphere, SAP Analytics Cloud), dan AI. Jadi SAP Build adalah bagian dari BTP, bukan keseluruhannya.

### SAP BTP dulu namanya apa?
Sebelumnya bernama SAP Cloud Platform. Nama itu resmi dipensiunkan pada 18 Januari 2021, dan seluruh fungsinya dilanjutkan di bawah SAP Business Technology Platform. Sebelum 2017 platform ini sempat bernama SAP HANA Cloud Platform. Jadi BTP adalah kelanjutan yang diperluas, bukan produk yang sepenuhnya baru.

### Apakah SAP BTP bisa dicoba gratis? *(opsional — cadangan)*
Bisa. SAP menyediakan trial 90 hari tanpa memasukkan data pembayaran, untuk eksplorasi non-produksi. Ada juga free tier tanpa batas waktu pada akun berbasis konsumsi (butuh data pembayaran untuk verifikasi, tetapi layanan free-nya gratis). Model berbayarnya pay-as-you-go, kredit prabayar, atau langganan.

## Data table for the writer (H2 #1 — elemen terstruktur utama, ekstraktabel AI Overview)

### Tabel — Empat pilar SAP BTP: fungsi, produk, masalah yang dipecahkan
| Pilar | Fungsi inti | Produk SAP utama (penamaan terkini) | Masalah yang dipecahkan |
|---|---|---|---|
| Pengembangan aplikasi & otomasi | Membangun/memperluas aplikasi (low-code & pro-code) dan mengotomasi alur kerja | SAP Build | Backlog IT, aplikasi custom lambat, shadow IT |
| Integrasi | Menghubungkan sistem SAP & non-SAP via API, konektor, dan konten prapaket | SAP Integration Suite | Data silo, sistem tidak terhubung, integrasi manual |
| Data & analitik | Menyatukan, mengelola, dan menganalisis data lintas sumber | SAP HANA Cloud, SAP Datasphere, SAP Analytics Cloud | Laporan lambat, data tersebar, banyak versi angka |
| AI | Menyisipkan AI/ML & AI generatif (asisten Joule) ke proses bisnis | SAP Business AI / Joule | Proses manual, keputusan tanpa insight |

> Setelah tabel, 1–2 kalimat hedge (WAJIB): jumlah "pilar" bisa berbeda di materi SAP — sebagian memisahkan Platform Foundation sehingga menjadi lima, atau membingkai AI sebagai lapisan yang dijalin ke semua area; kerangka empat pilar di sini mengikuti pengelompokan fungsional SAP Learning. **Hedge sebagai hal bergantung versi materi — jangan klaim angka pilar tunggal sebagai mutlak.**

## Edge cases & nuance

- **"Kapan BELUM perlu" (honest hedging untuk H2 #3)**: kesalahan umum = membeli BTP tanpa use case konkret sehingga langganan menganggur. BTP sebaiknya diadopsi **bertahap per 1 use case** (satu ekstensi, satu integrasi, atau satu lapisan analitik), dengan tata kelola (governance) sejak awal. BTP adalah **sarana**, bukan tujuan. Perusahaan bisa mulai dari trial 90 hari / free tier sebelum komitmen.
- **BTP ⊃ SAP Cloud Platform**: BTP lebih luas daripada SAP Cloud Platform lama (yang kira-kira hanya app dev + integrasi). Jangan tulis "BTP = ganti nama SAP Cloud Platform" secara mentah; "kelanjutan yang diperluas" lebih akurat.
- **Entitas yang sering tertukar** (luruskan tegas): BTP = platform; S/4HANA = ERP core; SAP Build = satu alat di pilar app dev; SAP Integration Suite ≠ keseluruhan BTP. Ini PAA nyata.
- **Runtime environments (terlalu teknis untuk pemula — JANGAN dibahas dalam)**: BTP punya tiga environment (Cloud Foundry, Kyma, ABAP). Sebut hanya bila writer perlu; untuk artikel awareness, lebih baik dilewati agar tidak melebihi fokus.
- **Side-by-side bukan default mutlak**: panduan SAP terbaru menyarankan mulai dari in-app/key-user extensibility, lalu developer extensibility, dan side-by-side untuk aplikasi/ proses lintas sistem yang lebih besar. Untuk artikel ini cukup sebut side-by-side sebagai **salah satu** use case ekstensi (tautan ke clean core), jangan jadikan satu-satunya.

## Flags (open factual risk)

- ⚠️ **Jumlah pilar (4 vs 5)**: SAP memakai 4 maupun 5 pilar (5 = +Platform Foundation) dan framing homepage "agentic AI" terbaru. → **Rekomendasi**: tulis "SAP umumnya mengelompokkan BTP ke dalam empat pilar" + 1 kalimat hedge bahwa materi lain memisahkan Platform Foundation/AI. JANGAN "selalu 4".
- ⚠️ **Daftar hyperscaler**: halaman region/hyperscaler resmi SAP 403 saat scrape; daftar bergeser (AWS/Azure/Google Cloud konsisten; Alibaba + SAP infra kadang ditambah). → **Rekomendasi**: "hyperscaler besar seperti AWS, Microsoft Azure, dan Google Cloud" + "antara lain". Jangan klaim daftar tertutup.
- ⚠️ **Jumlah integrasi Integration Suite (3.400+/3.800+/"ribuan")**: angka marketing SAP berevolusi per rilis; halaman berbeda beda angka. → **Rekomendasi**: "lebih dari 3.400 integrasi siap pakai (menurut materi SAP)" atau cukup "ribuan integrasi prapaket". Jangan presisi palsu; atribusikan ke SAP.
- ⚠️ **27.000+ pelanggan / 2.800 mitra**: angka SAP point-in-time (Okt 2024) via Wikipedia. → **Rekomendasi**: atribusikan "menurut SAP (Oktober 2024)"; opsional (bukan wajib). Jangan pakai tanpa tahun.
- ⚠️ **Angka produktivitas SAP Build (GigaOm)**: **TIDAK ditemukan/terverifikasi** dalam riset ini. → **Rekomendasi**: **JANGAN pakai persentase produktivitas SAP Build.** Penuhi kuota ≥5 angka dari fakta stabil (4 pilar, trial 90 hari, 30-hari inaktif, 3 model komersial, nama lama 2021, ≥4 use case).

## Definition snippet draft (40–60 kata; SEKALI saja — jangan diulang di body/H2/FAQ)

> Secara singkat, SAP Business Technology Platform (SAP BTP) adalah platform-as-a-service (PaaS) dari SAP untuk membangun, mengintegrasikan, memperluas, dan menganalisis aplikasi bisnis dalam satu lingkungan cloud yang dikelola SAP di atas infrastruktur hyperscaler besar. Sebelumnya platform ini bernama SAP Cloud Platform; nama SAP BTP resmi dipakai sejak 2021.

(47 kata; tanpa em-dash agar jatah em-dash body tetap utuh. Entitas wajib hadir: SAP Business Technology Platform (SAP BTP), PaaS, SAP Cloud Platform. **Editor memangkas paragraf mana pun di body yang mengulang definisi ini dengan kata lain.**)

## Catatan untuk orchestrator / writer

- Ini **tahap-1** (dossier). Tahap berikut: writer → editor → validator. Belum dijalankan untuk artikel ini.
- Target 1100 kata (cleaned-prose via `tools/count_words.py`); 0 image placeholder; definisi SEKALI; **3 H2 + FAQ** (H2 #1 tabel 4 pilar + hedge; H2 #2 use case question-format + cousin link clean core; H2 #3 "perlukah mulai?" question-format + honest hedging + free tier); FAQ 4–5; sitasi SAP official + SAP Learning; Soltius maks 2 mention; internal link TEPAT 2.
- **≥5 angka inline aman**: 4 pilar; nama lama → BTP (2021); trial 90 hari + aturan 30 hari inaktif; 3 model komersial; ≥4 use case di H2 #2; (opsional, atribusi) 3 hyperscaler, 27.000+ pelanggan Okt 2024.
- **Pertanyaan untuk user** (user minta ditanyai) diteruskan via laporan orchestrator — (1) konfirmasi hub = halaman low-code (bukan clean core) karena sheet mengosongkan landing page; (2) halaman cousin clean core masih memuat placeholder draft di FAQ saat scrape — pastikan final sebelum publikasi.
