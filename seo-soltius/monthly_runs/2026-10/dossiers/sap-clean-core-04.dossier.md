---
brief_id: "sap-clean-core-04"
researcher_run_date: "2026-10-07"
sources_cited: 13
flags: 7
---

# Research Dossier: SAP Build Code dan Joule — Membangun Ekstensi Clean Core Lebih Cepat dengan AI

## TL;DR for the writer

- **Thesis terverifikasi dan dapat dipertahankan.** SAP memang menanamkan AI generatif (Joule) ke lingkungan pengembangan **SAP Build Code** di SAP BTP, dengan **LLM khusus beban kerja SAP termasuk "ABAP LLM"** yang (a) menghasilkan kode sesuai model clean core, (b) menjelaskan *legacy code* untuk mempercepat modernisasi, dan (c) menyarankan kode yang *Clean Core compatible*. Ini bukan klaim marketing kosong — SAP menyatakannya di news.sap.com dan dokumentasi ABAP resmi.
- **Argumen inti brief ("AI membuat jalur bersih lebih cepat") aman untuk ditulis**, tapi **angka produktivitas harus dilabeli klaim vendor**. SAP menyebut hemat biaya "hingga 30%" (pengembangan) dan "hingga 40%" (migrasi ekstensi ERP) — ini klaim SAP/early-adopter, bukan hasil terukur independen. Pakai sebagai *arah*, bukan janji.
- **Konteks pasar yang kuat & otoritatif untuk hook**: Gartner memproyeksikan **75% software engineer di perusahaan akan memakai AI code assistant pada 2028**, naik dari di bawah 10% pada awal 2023. Ini membingkai relevansi topik tanpa klaim produk.
- **Sisi jujur (H2 #5) didukung fakta, bukan opini.** SAP sendiri memposisikan **ABAP Test Cockpit (ATC)** sebagai alat tata kelola clean core yang wajib, dan dokumentasi SAP soal *Custom Code Migration Agent* secara eksplisit menyebut "di mana penilaian manusia tetap harus duduk" (human judgment still needs to sit) dalam loop AI. Pakai ini — AI = asisten, bukan autopilot.
- **Entitas yang harus akurat**: SAP Build Code (GA sejak 2024, diumumkan TechEd 2023), Joule for Developers (nama kolektif kapabilitas AI design-time), ABAP LLM, ABAP Cloud, RAP, released API, side-by-side extensibility di BTP, Clean Core Levels A–D, ATC. **Jangan mengarang fitur AI yang belum diumumkan** (mis. "menulis ulang Z-code penuh otomatis tanpa manusia" — itu salah).

## Core facts (verified)

> **Claim**: SAP Build Code adalah lingkungan pengembangan (developer environment) di atas SAP BTP yang menyediakan pengembangan kode berbantuan AI generatif lewat *copilot* Joule; dioptimalkan untuk Java & JavaScript, mendukung ABAP, dan menyatukan coding, testing, integrasi, serta application lifecycle management dalam satu tempat.
> **Number/specific**: Bagian integral dari SAP BTP (mewarisi keamanan & integrasi BTP); mendorong *fusion development* (perpaduan pro-code + low-code) dengan reuse komponen lintas SAP Build low-code dan ABAP environment.
> **Source**: SAP Community (SAP-authored), "Announcing General Availability of SAP Build Code" + SAP, "SAP Build Code" (sap.com/products/technology-platform/developer-tools.html), diakses 2026-10-07
> **Confidence**: high

> **Claim**: SAP Build Code **generally available (GA)** untuk semua developer; diumumkan pertama di SAP TechEd 2023 dan GA pada 2024.
> **Number/specific**: Diumumkan TechEd 2023; GA 2024 (blog GA komunitas menyebut tanggal pengumuman GA "March 27th" — tahun 2024).
> **Source**: SAP Community (SAP-authored), "Announcing General Availability of SAP Build Code", diakses 2026-10-07
> **Confidence**: high untuk "GA sejak 2024 / diumumkan TechEd 2023"; medium untuk tanggal persis 27 Maret (lihat Flags)

> **Claim**: Joule for Developers memakai **large language model yang dibangun khusus untuk beban kerja SAP, termasuk "ABAP LLM"**, untuk memprediksi, menghasilkan, dan menjelaskan kode.
> **Number/specific**: Pernyataan SAP: "purpose-built large language models (LLMs) specifically tailored for SAP workloads, such as our ABAP LLM." LLM ABAP dilatih pada kode ABAP kelas enterprise.
> **Source**: SAP News, "Introducing Joule for Developers: AI-Powered Capabilities Across SAP" (news.sap.com, 2025-03), diakses 2026-10-07
> **Confidence**: high

> **Claim**: "Joule for Developers" adalah **nama kolektif untuk kapabilitas AI design-time** yang membantu produktivitas & kecakapan developer, tersebar di SAP Build dan ABAP — bukan satu fitur tunggal.
> **Number/specific**: Tertanam di SAP Build Code, ABAP development tools for Eclipse (ADT), SAP Build Process Automation, SAP Build Apps, serta lingkungan pengembangan SAP Fiori/SAPUI5.
> **Source**: SAP News, "Introducing Joule for Developers" (news.sap.com, 2025-03), diakses 2026-10-07
> **Confidence**: high

> **Claim**: Untuk ABAP, Joule dapat **menghasilkan kode & model data, melengkapi kode (code completion), membuat unit test, dan menghasilkan penjelasan kode** (termasuk CDS view), serta merefaktor kode.
> **Number/specific**: Cakupan awal fitur ABAP: business object generation, code completion, unit test generation, code explanation; generasi aplikasi lintas model pemrograman SAP untuk Java, JavaScript, dan ABAP.
> **Source**: SAP News (news.sap.com, 2025-03) + SAP, "AI in ABAP" (sap.com/products/technology-platform/use-cases/ai-in-abap.html), diakses 2026-10-07
> **Confidence**: high

> **Claim**: Joule dapat **menjelaskan legacy code** (tujuan, alur, dependensi data) dan menawarkan saran penyederhanaan serta usulan migrasi yang dioptimalkan — mempercepat modernisasi menuju **kode cloud-compliant di SAP S/4HANA**.
> **Number/specific**: Program "misterius" ribuan baris bisa dijelaskan dalam hitungan detik; mendukung "S/4HANA Cloud migration" dengan analisis legacy code, penjelasan, dan saran optimasi, memakai LLM yang dilatih SAP.
> **Source**: SAP News, "Introducing Joule for Developers" (news.sap.com, 2025-03) + SAP, "Revolutionize ABAP development with Joule" (sap.com assetdetail, 2024-10), diakses 2026-10-07
> **Confidence**: high

> **Claim**: Joule memberi **saran kode yang kompatibel dengan clean core** (Clean Core compatible code suggestions) karena kontekstual terhadap model ABAP dan released API.
> **Number/specific**: Asistensi sadar-konteks yang memahami kode ABAP dan mengarahkan ke pola yang patuh clean core.
> **Source**: SAP Community (SAP-authored), post "Unlock new levels of productivity with AI in SAP Build" + "AI in ABAP" (sap.com), diakses 2026-10-07
> **Confidence**: high (framing kualitatif; hindari mengklaim "selalu" patuh — lihat Flags)

> **Claim (KLAIM VENDOR)**: SAP melaporkan penghematan biaya **hingga ~30%** untuk pengembangan dengan Joule for Developers, dan umpan balik early adopter menyebut **hingga ~40%** penghematan biaya untuk migrasi ekstensi ERP, ~30% penurunan upaya otomasi proses low-code, dan ~30% penghematan biaya pengembangan aplikasi pro-code.
> **Number/specific**: 30% (pengembangan), 40% (migrasi ekstensi ERP), 30% (otomasi proses), 30% (pro-code).
> **Source**: SAP (news.sap.com / sap.com Build materials), diakses 2026-10-07 — **angka vendor/early-adopter, bukan studi independen**
> **Confidence**: medium (sumber = SAP; labeli eksplisit sebagai klaim vendor, jangan sajikan sebagai hasil terukur netral)

> **Claim**: Joule for Developers **tersedia gratis untuk periode terbatas**.
> **Number/specific**: SAP News (Mar 2025) menyebut akses "free" "for a limited time"; ringkasan pemberitaan lain menyebut gratis "through Q3 2026". **Jangan sebut harga spesifik** (arahan brief).
> **Source**: SAP News, "Introducing Joule for Developers" (news.sap.com, 2025-03), diakses 2026-10-07
> **Confidence**: medium (periode "Q3 2026" dari ringkasan sekunder; halaman SAP hanya sebut "limited time" — lihat Flags)

> **Claim**: **ABAP RESTful Application Programming Model (RAP)** adalah model pemrograman yang **direkomendasikan SAP** untuk membangun servis/aplikasi bisnis (OData, Fiori) di ABAP, dan merupakan model yang disarankan untuk ABAP di SAP Build Code.
> **Number/specific**: RAP = framework standar SAP untuk OData services & aplikasi Fiori berbasis ABAP; direkomendasikan di SAP Build Code untuk pengembangan ABAP.
> **Source**: SAP Community (SAP-authored), "ABAP RESTful Application Programming Model (RAP) FAQ" + GA announcement Build Code, diakses 2026-10-07
> **Confidence**: high

> **Claim**: **ABAP Cloud** adalah model pengembangan ABAP untuk clean core yang hanya memakai **released API dan objek publik yang stabil** (bukan akses langsung ke tabel/objek internal), sehingga ekstensi aman saat upgrade. Ekstensi Level A dibangun on-stack dengan ABAP Cloud **atau** side-by-side di SAP BTP memakai SAP Build.
> **Number/specific**: ABAP Cloud = dasar Level A; released API = kontrak stabilitas yang membuat ekstensi upgrade-safe.
> **Source**: SAP Learning, "Exploring Clean Core Extensibility Best Practices" + SAP Community, "Business Excellence with SAP's New Clean Core Extensibility Levels", diakses 2026-10-07
> **Confidence**: high

> **Claim**: SAP memakai **Clean Core Levels A–D** untuk mengklasifikasi ekstensi menurut kepatuhan & stabilitas-upgrade (model maturity yang menggantikan model 3-tier lama).
> **Number/specific**: **A** = released API (ABAP Cloud on-stack atau side-by-side BTP/SAP Build), didukung penuh SAP, kualitas tertinggi, upgrade-stable; **B** = classic API, mapan & terdokumentasi luas; **C** = akses objek internal, risiko terkelola, hanya bila benar-benar perlu; **D** = objek not-recommended, risiko tertinggi & technical debt. SAP menyarankan "level setinggi mungkin".
> **Source**: SAP Community (SAP-authored), "Business Excellence with SAP's New Clean Core Extensibility Levels: Why, What and How" + SAP Learning extensibility course, diakses 2026-10-07
> **Confidence**: high

> **Claim**: **Side-by-side extensibility** membangun ekstensi di luar core — di SAP BTP (mis. ABAP Environment / SAP Build) — yang terhubung ke S/4HANA lewat released API, tanpa menyentuh/memodifikasi core.
> **Number/specific**: Side-by-side = salah satu jalur Level A (bersama ABAP Cloud on-stack); core tetap standar & upgrade-safe.
> **Source**: SAP, "How to Extend SAP S/4HANA Cloud the Right Way" (news.sap.com, 2025-08) + SAP Learning extensibility, diakses 2026-10-07
> **Confidence**: high

> **Claim**: **Clean core** menurut SAP mencakup **lima dimensi**: Processes, Extensibility (Extensions), Data, Integration, dan Operations — menjaga inti tetap standar & mudah di-upgrade sambil memindahkan kustomisasi ke luar core.
> **Number/specific**: 5 dimensi resmi; ekstensi "clean" dipisah dari core lewat released API/approved tools.
> **Source**: SAP, "What is a clean core?" (sap.com/resources) + SAP Learning "Exploring the Clean Core Concept", diakses 2026-10-07
> **Confidence**: high (catatan: artikel cluster 2026-08-01 memakai "4 dimensi" — gunakan **5** untuk akurasi; lihat Flags)

> **Claim**: **ABAP Test Cockpit (ATC)** adalah alat yang **direkomendasikan SAP untuk tata kelola (governance) pengembangan ABAP clean core**; ATC di SAP BTP menjadi pendekatan rekomendasi untuk landscape S/4HANA private cloud / on-premise.
> **Number/specific**: Cek ATC yang direkomendasikan untuk clean core: *Allowed SAP enhancement technologies*, *Usage of APIs* (mencegah pemakaian objek internal tak sah), *Critical statements* (statement yang mengancam stabilitas/upgrade), dan *Code Vulnerability Analyzer (CVA)*. Mode *blocking* di sistem DEV menegakkan kepatuhan temuan Priority 1 & 2 sebelum transport naik ke lingkungan lebih tinggi.
> **Source**: help.sap.com, "Keep Clean Core Governance with ABAP Test Cockpit" + SAP Community (SAP-authored), "ATC recommendations for governance of clean core ABAP development", diakses 2026-10-07
> **Confidence**: high

> **Claim**: Dalam alur modernisasi kode berbantuan AI, **penilaian manusia tetap diperlukan**. Dokumentasi SAP soal *S/4HANA Custom Code Migration Agent* menggambarkan "agentic loop" yang menjalankan cek ATC dan menerapkan *quick fix* deterministik, **sekaligus menandai di mana penilaian manusia tetap harus duduk**.
> **Number/specific**: AI menjalankan ATC + quick fix otomatis, tetapi keputusan non-deterministik diserahkan ke developer/arsitek — AI = asisten, bukan autopilot.
> **Source**: SAP Community (SAP-authored), post soal custom-code migration & Gen AI assistance untuk clean core, diakses 2026-10-07
> **Confidence**: high

> **Claim (konteks pasar, OTORITATIF)**: Gartner memproyeksikan **75% software engineer di perusahaan akan memakai AI code assistant pada 2028**, naik dari **di bawah 10% pada awal 2023**.
> **Number/specific**: 75% (2028) vs <10% (awal 2023); survei Gartner Q3 2023, 598 responden; ~63% organisasi sudah piloting/deploying AI code assistant saat survei.
> **Source**: Gartner, press release "Gartner Says 75% of Enterprise Software Engineers Will Use AI Code Assistants by 2028" (gartner.com, 2024-04-11), diakses 2026-10-07
> **Confidence**: high

> **Claim (konteks "kenapa modernisasi sekarang")**: SAP ECC (SAP ERP 6.0, EHP 6/7/8) mendapat mainstream maintenance **hingga 31 Desember 2027**, dengan opsi extended maintenance berbayar **hingga 31 Desember 2030**.
> **Number/specific**: Mainstream 31-12-2027; extended 01-01-2028 s/d 31-12-2030 (perlu addendum + biaya). Relevan sebagai pendorong modernisasi Z-code ke clean core.
> **Source**: SAP Community, "Maintenance Timelines for SAP ERP 6.0 ('ECC')" + support.sap.com maintenance strategy, diakses 2026-10-07
> **Confidence**: high (konteks pendukung, bukan topik utama)

## Solution focus + Soltius anchor (from product_matrix.md + brief)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| **SAP Build Code** (dev env di BTP + Joule copilot) | GA sejak 2024 (TechEd 2023); Java/JS + ABAP; fusion development; bagian SAP BTP | H2 #1 (definisi), lead | — |
| **Joule / ABAP LLM** | LLM khusus beban kerja SAP termasuk ABAP LLM; generate, explain, unit test, migrate | H2 #1–#2 | — |
| **Kemampuan AI untuk clean core** (daftar) | Generate kode ABAP Cloud-compliant, explain legacy code, sarankan released API, kerangka RAP/side-by-side, unit test & dokumentasi | H2 #2 (daftar, 1 kemampuan/poin) | — |
| **Pola lama vs AI-assisted clean** (tabel) | Tambal core/ABAP klasik → side-by-side + ABAP Cloud dibantu Joule; released API; dampak upgrade-safety | H2 #3 (tabel) | — |
| **Modernisasi legacy (Z-code) dgn AI** | Joule jelaskan tujuan/alur/dependensi; petakan ke released API/RAP; tautkan artikel remediasi, jangan ulang detail | H2 #4 | Aside opsional (1 kalimat): kode AI diterima tanpa review = utang teknis |
| **Tata kelola kode AI** (honest) | ATC + cek clean core; blocking mode; "human judgment still needs to sit"; Level A–D; risiko halusinasi API | H2 #5 | — |
| **Soltius anchor** | Data and AI Consulting + Digital Platform (SAP Build/BTP) implementation + SAP Platinum Partner via United VARs | **Closing CTA** | "Melalui layanan Data and AI Consulting dan pengalaman implementasi SAP Build/BTP, serta sebagai SAP Platinum Partner via United VARs, Soltius membantu tim developer mengadopsi SAP Build Code/Joule dengan guardrail clean core — produktivitas naik tanpa mengorbankan upgrade-safety." |

Reminder: Soltius **mengimplementasikan/mendampingi** — tidak membangun SAP Build/Joule. Maks 2–3 self-mention: 1 closing + maksimum 1 aside (H2 #4 atau #5). Tanpa superlatif.

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **SAP News — "Introducing Joule for Developers: AI-Powered Capabilities Across SAP" (Mar 2025)** — https://news.sap.com/2025/03/joule-for-developers-ai-powered-capabilities/ — *what it backs*: ABAP LLM; kemampuan generate/explain/unit-test; lokasi ketersediaan (SAP Build Code, ADT for Eclipse); gratis periode terbatas.
2. **SAP Community (SAP-authored) — "Announcing General Availability of SAP Build Code"** — https://community.sap.com/t5/technology-blog-posts-by-sap/announcing-general-availability-of-sap-build-code-speed-up-development-with/ba-p/13646073 — *what it backs*: definisi & GA Build Code, RAP sebagai model direkomendasikan, bagian BTP.
3. **SAP — "AI in ABAP"** — https://www.sap.com/products/technology-platform/use-cases/ai-in-abap.html — *what it backs*: percepatan migrasi ke kode cloud-compliant S/4HANA, penjelasan legacy code, pemahaman kode ABAP klasik.
4. **SAP Community (SAP-authored) — "Business Excellence with SAP's New Clean Core Extensibility Levels: Why, What and How"** — https://community.sap.com/t5/technology-blog-posts-by-sap/business-excellence-with-sap-s-new-clean-core-extensibility-levels-why-what/ba-p/14191481 — *what it backs*: Clean Core Levels A–D (definisi tiap level).
5. **SAP Help — "Keep Clean Core Governance with ABAP Test Cockpit"** — https://help.sap.com/docs/btp/btp-developers-guide/keep-clean-core-governance-with-abap-test-cockpit — *what it backs*: ATC sebagai alat tata kelola clean core; cek yang direkomendasikan; blocking mode.
6. **Gartner — "Gartner Says 75% of Enterprise Software Engineers Will Use AI Code Assistants by 2028" (2024-04-11)** — https://www.gartner.com/en/newsroom/press-releases/2024-04-11-gartner-says-75-percent-of-enterprise-software-engineers-will-use-ai-code-assistants-by-2028 — *what it backs*: konteks adopsi AI code assistant (75% pada 2028 vs <10% 2023).
7. **SAP — "What is a clean core?"** — https://www.sap.com/resources/what-is-a-clean-core — *what it backs*: definisi clean core + 5 dimensi (Processes, Extensibility, Data, Integration, Operations).
8. **Constellation Research — "SAP gives ABAP code genAI boost, adds data lake capabilities to Datasphere"** — https://www.constellationr.com/blog-news/insights/sap-gives-abap-code-genai-boost-adds-data-lake-capabilities-datasphere — *what it backs*: analisis analis independen soal genAI untuk ABAP & modernisasi clean core (second source non-SAP).

Prioritas terpenuhi: SAP official & SAP-authored community > Gartner (analis) > Constellation (tech analyst). **Writer link out minimal 2**: sarankan SAP News Joule-for-Developers + Gartner (atau SAP Community "Develop with Joule in SAP Build Code" dari SERP brief).

## FAQ Q&As (6 drafted, Bahasa Indonesia)

### Apa itu SAP Build Code?
SAP Build Code adalah lingkungan pengembangan berbantuan AI generatif di atas SAP Business Technology Platform (BTP). Ia menyatukan penulisan kode, pengujian, integrasi, dan pengelolaan siklus hidup aplikasi dalam satu tempat, dengan copilot Joule yang membantu developer Java, JavaScript, dan ABAP. Build Code telah generally available sejak 2024 (diumumkan di SAP TechEd 2023) dan mendorong pendekatan *fusion development*—perpaduan pengembangan pro-code dan low-code.

### Bisakah Joule menulis kode ABAP?
Bisa, sebagai asisten. Joule memakai large language model khusus beban kerja SAP—termasuk "ABAP LLM" yang dilatih SAP—untuk menghasilkan kode, melengkapi kode, membuat unit test, dan menjelaskan kode ABAP termasuk CDS view. Joule juga menyarankan pola yang kompatibel dengan clean core. Namun kode yang dihasilkan tetap perlu ditinjau manusia; Joule mempercepat pekerjaan developer, bukan menggantikan keputusannya.

### Apakah kode buatan AI aman untuk clean core?
Tidak otomatis aman; perlu tata kelola. Joule mengarahkan ke released API dan model ABAP Cloud yang upgrade-safe, tetapi SAP tetap merekomendasikan ABAP Test Cockpit (ATC) untuk memverifikasi kepatuhan—lewat cek seperti *Usage of APIs* dan *Critical statements*, serta mode *blocking* di sistem development. Dokumentasi SAP sendiri menegaskan ada titik di mana penilaian manusia tetap harus mengambil alih dalam alur otomasi berbasis AI.

### Apa bedanya ABAP Cloud dan ABAP klasik?
ABAP Cloud adalah model pengembangan ABAP untuk clean core yang hanya memakai released API dan objek publik berstatus stabil, sehingga ekstensi tidak rusak saat sistem di-upgrade. ABAP klasik mengizinkan akses langsung ke objek/tabel internal SAP—lebih fleksibel, tetapi berisiko pecah saat upgrade dan menumpuk utang teknis. Dalam model Clean Core Levels A–D, ABAP Cloud menempati Level A (kualitas tertinggi, didukung penuh).

### Apakah AI akan menggantikan developer SAP?
Tidak. Gartner memproyeksikan 75% software engineer perusahaan akan memakai AI code assistant pada 2028—artinya AI menjadi alat standar, bukan pengganti. Joule mempercepat tugas berulang (menjelaskan legacy code, membuat unit test, menyusun kerangka RAP), tetapi keputusan arsitektur, pemilihan pola clean core, dan tinjauan kualitas tetap tanggung jawab developer. Peran developer bergeser ke desain, tata kelola, dan validasi—bukan hilang.

### Apakah butuh lisensi atau langganan BTP khusus untuk SAP Build Code dan Joule?
SAP Build Code adalah layanan di atas SAP BTP, sehingga pemakaiannya mengikuti model langganan BTP dan entitlement yang relevan; detail komersial sebaiknya dikonfirmasi langsung ke SAP atau mitra implementasi. Joule for Developers sempat ditawarkan gratis untuk periode terbatas. Karena skema lisensi dan promosi dapat berubah, artikel ini sengaja tidak menyebut angka harga spesifik.

## Data tables for the writer

### Tabel A — Pola lama (tambal core) vs AI-assisted clean (Build Code + Joule, side-by-side)
| Tugas developer | Cara lama (tambal core / ABAP klasik) | Cara AI-assisted clean (Build Code + Joule) |
|---|---|---|
| Menambah logika bisnis | Modifikasi/append di core, akses objek internal | Ekstensi side-by-side di BTP atau ABAP Cloud on-stack, dibantu generate Joule |
| Memakai data SAP | Baca tabel internal langsung | Joule sarankan released API (kontrak stabil) |
| Membangun servis/aplikasi | Pola lama ad hoc | Kerangka RAP di-generate Joule, siap Fiori/OData |
| Memahami Z-code warisan | Baca manual ribuan baris | Joule jelaskan tujuan, alur, dependensi dalam hitungan detik |
| Membuat unit test | Sering dilewati karena memakan waktu | Joule generate ABAP/CDS unit test otomatis |
| Risiko saat upgrade | Tinggi—tiap upgrade bisa merusak kustomisasi | Rendah—Level A (released API), upgrade-safe |
| Posisi Clean Core Level | Cenderung C–D (objek internal/not-recommended) | Level A (ABAP Cloud / side-by-side via released API) |

> Catatan untuk writer: tabel menegaskan tesis brief—friksi jalur bersih berkurang karena AI mengambil alih bagian yang dulu membuat jalur bersih terasa lambat (boilerplate, test, pemahaman legacy). Labeli keunggulan "lebih cepat" sebagai arah, bukan angka pasti.

### Tabel B — Clean Core Levels A–D (ringkas, jangan deep-dive)
| Level | Dasar teknis | Status | Relevansi AI |
|---|---|---|---|
| A | Released API — ABAP Cloud (on-stack) atau side-by-side BTP/SAP Build | Direkomendasikan, didukung penuh, upgrade-safe | Target yang disarankan Joule |
| B | Classic API/teknologi klasik | Mapan, terdokumentasi, perlu diawasi | Boleh, tetap verifikasi ATC |
| C | Akses objek internal | Risiko terkelola, hanya bila perlu | Waspadai saran AI yang menyentuh objek internal |
| D | Objek not-recommended | Risiko tertinggi, technical debt | Hindari; kode AI pun tidak boleh mendarat di sini |

## Edge cases & nuance

- **"AI-assisted" ≠ "AI-autonomous".** Tesis brief benar (AI memperkecil friksi jalur bersih), tetapi hindari menyiratkan Joule menulis & men-deploy ekstensi tanpa manusia. SAP sendiri memposisikan Joule sebagai *copilot/assistant*; alur migrasi otomatis pun menyisakan titik "human judgment still needs to sit".
- **Kode yang "Clean Core compatible" bukan jaminan mutlak.** Joule mengarahkan ke pola clean, tetapi developer tetap bisa memaksa AI menghasilkan jalur Level C/D. Gerbang kepatuhan sebenarnya adalah ATC + tata kelola, bukan niat baik AI.
- **Risiko halusinasi API.** LLM bisa menyarankan API/pola yang usang atau tidak dirilis. Inilah alasan teknis released-API + ATC *Usage of APIs* check penting—jadikan ini argumen, bukan sekadar peringatan umum.
- **ATC governance paling terdokumentasi untuk Private Cloud / on-premise.** Untuk S/4HANA Cloud Public Edition, arsitektur sudah membatasi ke released API sehingga ruang "kotor" lebih sempit; jangan over-generalisasi ATC blocking mode seolah identik di semua edisi.
- **"5 dimensi" vs "4 dimensi".** Definisi resmi SAP = 5 dimensi (Processes, Extensibility, Data, Integration, Operations). Artikel cluster 2026-08-01 menyebut "4 dimensi". Untuk akurasi, pakai 5—atau sebut dimensi inti tanpa mengunci angka yang keliru.
- **Jangan ulang remediasi detail.** Brief meminta H2 #4 menautkan ke artikel remediasi (2026-06-02) tanpa mengulang langkah—fokus di sini pada peran AI (explain → petakan ke released API/RAP), bukan prosedur remediasi penuh.
- **Angka produktivitas adalah pemasaran.** 30%/40% berasal dari SAP/early adopter. Aman dikutip bila diatribusikan ("menurut SAP…"), berbahaya bila disajikan sebagai fakta terukur netral.

## Flags (open factual risk)

- ⚠️ **Angka produktivitas 30% / 40%**: klaim SAP & early adopter, bukan studi independen. → Rekomendasi: selalu atribusikan ("menurut SAP/umpan balik early adopter…") dan bingkai sebagai arah, bukan janji hasil.
- ⚠️ **"Gratis hingga Q3 2026"**: halaman SAP News (Mar 2025) hanya menyebut "free for a limited time"; frasa "Q3 2026" berasal dari ringkasan sekunder. → Rekomendasi: tulis "gratis untuk periode terbatas"; jangan sebut harga; jika memakai "Q3 2026", atribusikan sebagai informasi yang dapat berubah.
- ⚠️ **Tanggal GA persis SAP Build Code (27 Maret 2024)**: dari blog GA komunitas, bukan halaman produk resmi. → Rekomendasi: aman menulis "GA sejak 2024 (diumumkan di SAP TechEd 2023)"; hindari menegaskan tanggal harian kecuali perlu.
- ⚠️ **Dimensi clean core (5 vs 4)**: SAP official = 5 dimensi; artikel 2026-08-01 memakai 4. → Rekomendasi: gunakan 5 dimensi resmi untuk konsistensi & akurasi.
- ⚠️ **Cakupan fitur ABAP Joule berkembang cepat**: kemampuan (generate, explain, unit test, migrate) terus bertambah per rilis. → Rekomendasi: frasa "antara lain" / "saat tulisan ini dibuat"; jangan mengarang fitur yang belum diumumkan SAP (mis. penulisan ulang Z-code penuh-otomatis).
- ⚠️ **Penamaan "ABAP LLM"**: SAP menyebut "purpose-built LLMs … such as our ABAP LLM". → Rekomendasi: aman dipakai; tulis sebagai "LLM khusus beban kerja SAP, termasuk ABAP LLM", bukan nama produk komersial tersendiri.
- ⚠️ **Generalisasi ATC ke semua edisi**: tata kelola ATC paling relevan untuk Private Cloud/on-premise; Public Edition dibatasi arsitektur. → Rekomendasi: saat membahas ATC blocking mode, sebut konteks (ABAP on-stack/Private/on-prem), jangan seolah identik di Public Edition.

## Definition snippet draft (40–60 words)

> **SAP Build Code** adalah lingkungan pengembangan berbantuan AI generatif di atas SAP BTP, dilengkapi copilot **Joule**, yang memandu developer membangun ekstensi **ABAP Cloud** dan **side-by-side** sesuai prinsip **clean core**. Dengan large language model khusus SAP termasuk **ABAP LLM**, Joule menghasilkan kode, menjelaskan *legacy code*, dan menyarankan pola yang upgrade-safe—membuat jalur ekstensi bersih lebih cepat ditempuh.
