---
brief_id: "low-code-platform-02"
researcher_run_date: "2026-09-17"
sources_cited: 11
flags: 5
---

# Research Dossier: Beli, Bangun, atau Low-Code? Kerangka Keputusan Aplikasi Enterprise

## TL;DR for the writer

- Ini bukan artikel definisi dan bukan use case — ini **kerangka keputusan portofolio TIGA jalur**: beli (SaaS), bangun (custom), atau perluas dengan low-code. Semua konten ID pesaing berhenti di dua jalur (custom vs low-code); keunggulan artikel ini adalah menambah jalur "beli SaaS" + matriks kriteria + TCO jujur.
- Angka Gartner sudah terverifikasi dan **aman dipakai**: low-code ~75% pengembangan aplikasi baru pada 2026 (naik dari 40% pada 2021); pasar low-code global ~USD 44,5 miliar pada 2026 (CAGR ~19%); ≥80% pengguna low-code dari luar IT pada 2026 (naik dari ~60% pada 2021). Selalu atribusikan "menurut Gartner".
- **SAP Build** (di **SAP BTP**) adalah contoh konkret low-code enterprise sebagai strategi *buy-and-extend*: memperluas **SAP S/4HANA** lewat *side-by-side extensibility* tanpa menyentuh core. Kaitkan langsung ke **clean core**.
- ⚠️ **Perubahan fakta penting (Agustus 2025):** SAP **mengganti model extensibility 3-tier lama** dengan **Clean Core Level Concept 4 tingkat (A, B, C, D)**. Level A = paling bersih/upgrade-safe (hanya API SAP yang di-release & stabil; on-stack ABAP Cloud atau side-by-side SAP Build di BTP). Jangan tulis "tiga tier" sebagai model terkini — gunakan framing 4 level A–D atau bicara pada level prinsip (in-app vs side-by-side vs ABAP Cloud) tanpa menyebut jumlah tier.
- Statistik "30–40% lebih sedikit kegagalan implementasi" adalah **temuan industri**, bukan hukum — wajib dibingkai sebagai temuan pihak ketiga. JANGAN mengarang angka biaya/lisensi SAP Build/BTP; bahas TCO secara kualitatif. Contoh pengikat matriks ke realitas: **aplikasi manajemen vendor/procurement** (di dunia SAP dipetakan ke SAP Fieldglass / SAP Ariba — pas untuk cousin link).

## Core facts (verified)

> **Claim**: Low-code akan mencakup ~75% pengembangan aplikasi baru pada 2026, naik dari 40% pada 2021.
> **Number/specific**: 75% (2026) vs 40% (2021) — proyeksi Gartner.
> **Source**: InfoWorld melaporkan proyeksi Gartner — https://www.infoworld.com/article/2337677/low-code-development-technologies-market-forecast-to-hit-445-billion-by-2026.html (diakses 2026-09-17)
> **Confidence**: high

> **Claim**: Pasar teknologi low-code global diproyeksi mencapai ~USD 44,5 miliar pada 2026.
> **Number/specific**: USD 44,5 miliar pada 2026, pertumbuhan ~19% (CAGR) selama empat tahun; Low-Code Application Platform (LCAP) adalah komponen terbesar.
> **Source**: InfoWorld / Gartner — https://www.infoworld.com/article/2337677/low-code-development-technologies-market-forecast-to-hit-445-billion-by-2026.html (diakses 2026-09-17)
> **Confidence**: high

> **Claim**: Pada 2026, ≥80% pengguna alat low-code berasal dari luar departemen IT.
> **Number/specific**: ≥80% pada 2026, naik dari ~60% pada 2021 (Gartner).
> **Source**: Gartner (dikutip InfoWorld/kissflow, cache research low-code-platform 2026-09-17)
> **Confidence**: medium (angka Gartner yang lazim dikutip; atribusikan ke Gartner, bukan fakta absolut)

> **Claim**: SAP Build adalah portofolio low-code/pro-code terpadu di SAP BTP.
> **Number/specific**: Komponen — SAP Build Apps (aplikasi visual), SAP Build Process Automation (otomasi workflow/RPA), SAP Build Work Zone (workspace/portal), SAP Build Code (pro-code); lifecycle & monitoring terpusat.
> **Source**: SAP — https://www.sap.com/products/technology-platform/build.html; community.sap.com What's New 2025 (diakses 2026-09-17)
> **Confidence**: high

> **Claim**: SAP Build berjalan di SAP BTP sebagai side-by-side extensibility dan terhubung ke S/4HANA lewat API yang di-release.
> **Number/specific**: Model side-by-side (di luar core) vs on-stack; integrasi native via released SAP APIs.
> **Source**: SAP News "How to Extend SAP S/4HANA Cloud the Right Way | Clean Core" — https://news.sap.com/2025/08/extend-sap-s4hana-cloud-right-way-clean-clear/ (diakses 2026-09-17)
> **Confidence**: high

> **Claim**: SAP memperkenalkan Joule for Developers pada Maret 2025, membawa kapabilitas GenAI ke seluruh SAP Build.
> **Number/specific**: Joule for Developers diperkenalkan Mar 2025; membangkitkan workflow/business rule dari bahasa natural; SAP mengklaim mempercepat pengembangan & menurunkan biaya hingga ~30% (klaim SAP).
> **Source**: SAP News — https://news.sap.com/2025/03/joule-for-developers-ai-powered-capabilities/ (diakses 2026-09-17)
> **Confidence**: high untuk keberadaan/tanggal; klaim "~30%" adalah klaim vendor SAP → atribusikan, jangan sajikan sebagai fakta netral.

> **Claim**: Joule Studio (low-code untuk membangun AI agent/aplikasi/workflow) tersedia umum (GA) pada 2025.
> **Number/specific**: Agent builder di Joule Studio GA 2025; lingkungan terkelola untuk low-code & pro-code.
> **Source**: SAP — https://www.sap.com/products/artificial-intelligence/joule-studio.html; InfoWorld "SAP Build gains AI capabilities" — https://www.infoworld.com/article/3551049/sap-build-gains-ai-capabilities-to-help-build-autonomous-agents.html (diakses 2026-09-17)
> **Confidence**: high

> **Claim**: SAP mengganti model extensibility 3-tier lama dengan Clean Core Level Concept 4 tingkat (A–D) pada Agustus 2025.
> **Number/specific**: Empat level (A, B, C, D) berdasarkan integritas arsitektur & upgrade-safety; menggantikan model 3-tier terdahulu (Agustus 2025).
> **Source**: SAP News (Aug 2025) — https://news.sap.com/2025/08/extend-sap-s4hana-cloud-right-way-clean-clear/; community.sap.com "Getting to a Clean Core — the new maturity model ... four distinct levels (A,B,C,D)" — https://community.sap.com/t5/technology-blog-posts-by-members/getting-to-a-clean-core-the-new-maturity-model-of-extensions-into-four/ba-p/14326982 (diakses 2026-09-17)
> **Confidence**: high (dikonfirmasi SAP News + learning.sap.com "August 2025 Update")

> **Claim**: Level A (paling bersih) hanya memakai antarmuka SAP yang di-release & stabil, dibangun on-stack (ABAP Cloud) atau side-by-side (SAP Build di BTP).
> **Number/specific**: Level A = fully clean-core compliant, hanya public released & stable APIs dengan stability contract; SAP Build/BTP dan ABAP Cloud sama-sama bisa mencapai Level A.
> **Source**: community.sap.com clean-core levels A–D (Aug 2025 update) — https://community.sap.com/t5/technology-blog-posts-by-sap/abap-extensibility-guide-clean-core-for-sap-s-4hana-cloud-august-2025/ba-p/14175399 (diakses 2026-09-17)
> **Confidence**: high

> **Claim**: Model extensibility SAP dibagi jadi on-stack (ABAP Cloud = developer extensibility; key-user/in-app = no-code di Fiori standar) vs side-by-side (SAP BTP / SAP Build), dengan pendekatan "BTP-first".
> **Number/specific**: Dua jalur utama; in-app/key-user untuk perluasan ringan, side-by-side untuk aplikasi/ekstensi kompleks yang decoupled dari core.
> **Source**: SAP News Aug 2025 + learning.sap.com "Practicing Clean Core Extensibility for SAP S/4HANA Cloud" — https://learning.sap.com/courses/practicing-clean-core-extensibility-for-sap-s-4hana-cloud (diakses 2026-09-17)
> **Confidence**: high

> **Claim**: Keputusan aplikasi enterprise modern adalah pilihan tiga jalur: bangun custom (diferensiasi/strategis), beli SaaS (komoditas), atau buy-and-extend/low-code (jalan tengah).
> **Number/specific**: Build = untuk keunggulan kompetitif yang tak dijual siapa pun; Buy = komoditas (payroll, helpdesk, akuntansi standar); Low-code = workflow/approval/form yang menghubungkan sistem + ekstensi ERP.
> **Source**: Kissflow (kerangka buy vs build vs low-code) — https://kissflow.com/low-code/low-code-trends-statistics/; Forbes/zylo (dikutip di cache research) (diakses 2026-09-17)
> **Confidence**: high (kerangka konsensus industri; vendor-neutral)

> **Claim**: Kerangka keputusan yang terstruktur dikaitkan dengan ~30–40% lebih sedikit kegagalan implementasi.
> **Number/specific**: 30–40% (rentang) — temuan industri, bukan hukum absolut.
> **Source**: Temuan industri (kissflow / Forbes / zylo, via cache research low-code-platform 2026-09-17)
> **Confidence**: low → **bingkai sebagai "temuan/estimasi pihak ketiga", jangan sebagai fakta pasti. Lihat Flags.**

> **Claim**: SAP Fieldglass adalah vendor management system (VMS) berbasis cloud untuk external workforce & services procurement.
> **Number/specific**: Mengelola tenaga kerja kontingen & penyedia jasa; terintegrasi dengan SAP S/4HANA, SAP SuccessFactors, dan SAP Ariba.
> **Source**: help.sap.com (SAP Fieldglass & SAP Ariba Integration) — https://help.sap.com/doc/b9285ee937f949c0a4ef80f41e379b62/cloud/en-US/SAPFieldglassandSAPAribaIntegrationBusinessSynopsis.pdf; LeverX overview (diakses 2026-09-17)
> **Confidence**: high (pakai hanya sebagai contoh pengikat + cousin link "sistem manajemen vendor")

> **Claim**: SAP Ariba menangani supplier management & procurement (source-to-pay); Fieldglass fokus pada jasa/tenaga kerja eksternal.
> **Number/specific**: Ariba = pengadaan barang/jasa & manajemen pemasok; Fieldglass = services procurement + contingent workforce; keduanya saling terintegrasi.
> **Source**: help.sap.com integrasi Fieldglass–Ariba (diakses 2026-09-17)
> **Confidence**: high

> **Claim**: Microsoft Power Platform adalah low-code yang kuat di ekosistem Microsoft (Dataverse, SharePoint, Teams, Power Automate).
> **Number/specific**: Jalur tercepat citizen development untuk organisasi yang sudah pakai Microsoft 365.
> **Source**: Gartner Peer Insights / SelectHub (via cache research) (diakses 2026-09-17)
> **Confidence**: medium (pakai ringkas; -01 memegang perbandingan cross-vendor mendalam)

> **Claim**: Mendix adalah platform low-code model-driven untuk fusion development dengan lapisan AI "Maia".
> **Number/specific**: Rating Gartner Peer Insights ~4,5 (dari ratusan review); kuat untuk aplikasi kompleksitas menengah–tinggi & multi-channel.
> **Source**: Gartner Peer Insights (Enterprise Low-Code Application Platforms) — https://www.gartner.com/reviews/market/enterprise-low-code-application-platform (diakses 2026-09-17)
> **Confidence**: medium (angka rating bisa bergeser; atribusikan "menurut Gartner Peer Insights")

> **Claim**: Soltius adalah SAP Platinum Partner (via United VARs), bagian Metrodata Group sejak 1998, dengan solusi Digital Platform + layanan Implementation & ERP Strategy.
> **Number/specific**: Berdiri 1998; 200+ konsultan; 120+ klien; kontributor pendapatan terbesar bagi SAP Indonesia (diakui sejak 2015).
> **Source**: knowledge_base/company_profile.md (pre-approved)
> **Confidence**: high

## Solution focus + Soltius anchor (from product_matrix.md)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| Low-code sebagai strategi *buy-and-extend*; **SAP Build** (Apps / Process Automation / Work Zone / Code) di **SAP BTP** | Portofolio SAP Build; berjalan di BTP; memperluas S/4HANA via released APIs; Joule/GenAI 2025 | H2 #3 ("Di Mana Low-Code Paling Masuk Akal") | **Digital Platform + Implementation** — "Soltius membantu perusahaan menilai & memanfaatkan SAP Build di atas SAP BTP" |
| **Clean core** & model extensibility (in-app/key-user, ABAP Cloud, side-by-side BTP; Level A–D) | Low-code side-by-side menjaga core standar/upgrade-safe; model 4 level A–D (Agu 2025) | H2 #3 (tie-in) + FAQ #6 | ERP Strategy + Implementation (assessment sebelum investasi) |
| Konsep **TCO** & kerangka keputusan 3 jalur (vendor-neutral) | Biaya awal vs pemeliharaan multi-tahun, technical debt, siapa yang "own"; kualitatif | H2 #2, #4, #5 | SAP Platinum Partner via United VARs; Metrodata Group sejak 1998 (closing CTA) |
| Contoh pengikat: **aplikasi manajemen vendor/procurement** (SAP Fieldglass / SAP Ariba) | Fieldglass = VMS/external workforce; Ariba = procurement/supplier | H2 #4 atau #5 (contoh nyata) + cousin link | — (contoh, bukan self-mention) |

Reminder: Soltius **mengimplementasikan/migrasi/mendukung** teknologi ini — **tidak membangunnya**. Maks 2–3 self-mention Soltius; utamakan closing + satu aside netral di H2 low-code.

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **InfoWorld — "Low-code development technologies market forecast to hit $44.5 billion by 2026" (Gartner)** — https://www.infoworld.com/article/2337677/low-code-development-technologies-market-forecast-to-hit-445-billion-by-2026.html — *what it backs*: 75% aplikasi baru pada 2026 (dari 40% 2021), pasar USD 44,5 miliar, CAGR ~19%.
2. **SAP News Center — "How to Extend SAP S/4HANA Cloud the Right Way | Clean Core" (Agustus 2025)** — https://news.sap.com/2025/08/extend-sap-s4hana-cloud-right-way-clean-clear/ — *what it backs*: side-by-side extensibility di SAP BTP menjaga clean core; dasar model extensibility terkini.
3. **SAP News Center — "Introducing Joule for Developers" (Maret 2025)** — https://news.sap.com/2025/03/joule-for-developers-ai-powered-capabilities/ — *what it backs*: kapabilitas GenAI/Joule di SAP Build 2025.
4. **Gartner Peer Insights — Enterprise Low-Code Application Platforms** — https://www.gartner.com/reviews/market/enterprise-low-code-application-platform — *what it backs*: konteks lanskap platform (SAP Build, Power Platform, Mendix) — pakai ringkas saja.

Priority terpakai: SAP official (news.sap.com, help.sap.com, learning.sap.com) untuk fakta produk; Gartner (via InfoWorld) untuk tren pasar; kissflow/Forbes untuk kerangka & statistik kegagalan (bingkai sebagai temuan industri).

## FAQ Q&As (6 drafted, Bahasa Indonesia)

### Apa perbedaan buy, build, dan low-code?
Beli (buy) berarti mengambil produk SaaS jadi untuk kebutuhan komoditas seperti payroll atau helpdesk. Bangun (build) berarti mengembangkan aplikasi custom dari nol untuk proses yang benar-benar menjadi keunggulan kompetitif. Low-code adalah jalan tengah "buy-and-extend": merakit workflow, form, atau ekstensi di atas platform yang ada dengan cepat, sering di atas ERP seperti lewat SAP Build.

### Kapan sebaiknya membangun aplikasi custom?
Bangun dari nol hanya tepat ketika software menyentuh keunggulan kompetitif yang tidak dijual vendor mana pun, atau ketika tidak ada produk pasar yang cocok. Konsekuensinya, tim Anda "memiliki" aplikasi itu selamanya—termasuk biaya pemeliharaan, keamanan, dan technical debt bertahun-tahun. Untuk kebutuhan komoditas, membangun custom hampir selalu lebih mahal dan lambat dibanding membeli.

### Kapan low-code lebih baik daripada membeli SaaS?
Low-code unggul untuk kebutuhan di "ruang tengah": proses unik perusahaan yang menghubungkan beberapa sistem internal—alur persetujuan, form, atau ekstensi ERP—yang tidak tersedia sebagai SaaS jadi tetapi tidak cukup strategis untuk dibangun penuh dari nol. Contoh khas: memperluas SAP S/4HANA lewat SAP Build di BTP tanpa memodifikasi core.

### Apa itu TCO dan mengapa penting dalam keputusan ini?
TCO (Total Cost of Ownership) adalah total biaya sebuah aplikasi sepanjang umurnya—bukan hanya biaya awal, tetapi juga lisensi/konsumsi, integrasi, pemeliharaan, keamanan, dan technical debt selama bertahun-tahun. TCO penting karena jalur termurah di awal sering menjadi termahal dalam jangka panjang; keputusan yang bijak menilai biaya multi-tahun, bukan harga pembelian.

### Apakah low-code aman untuk aplikasi inti perusahaan?
Low-code aman bila dipakai pada porsinya. Untuk perluasan, workflow, dan aplikasi departemen, low-code enterprise seperti SAP Build memiliki tata kelola, keamanan, dan lifecycle terpusat. Namun memaksa low-code menjadi sistem transaksi inti berskala besar berisiko menimbulkan shadow IT dan technical debt. Kunci keamanannya adalah governance dan menempatkan setiap kebutuhan di jalur yang tepat.

### Bagaimana low-code membantu memperluas SAP tanpa merusak sistem inti?
Low-code SAP Build berjalan di SAP BTP sebagai side-by-side extensibility—kustomisasi diletakkan di luar core S/4HANA dan hanya mengakses API yang resmi di-release. Pendekatan ini menjaga prinsip clean core sehingga sistem tetap standar dan mudah di-upgrade. Sejak Agustus 2025, SAP mengklasifikasikan kualitas ekstensi dalam model 4 level (A–D), dengan Level A sebagai yang paling upgrade-safe.

## Data tables for the writer

### Matriks Keputusan: Beli vs Bangun vs Low-Code (6 kriteria) — draft utama H2 #4
| Kriteria | Beli (SaaS) | Bangun (Custom) | Low-Code (Buy-and-Extend) |
|---|---|---|---|
| Seberapa strategis / diferensiasi | Rendah — kebutuhan komoditas | Tinggi — keunggulan kompetitif inti | Menengah — proses unik tapi bukan inti |
| Kompleksitas yang cocok | Standar, out-of-the-box | Sangat kompleks / spesifik | Menengah: workflow, form, ekstensi |
| Kecepatan ke nilai | Cepat (langsung pakai) | Lambat (bulan–tahun) | Cepat–menengah (rakit visual) |
| TCO jangka panjang | Biaya langganan berulang, minim pemeliharaan sendiri | Tertinggi — "own it forever" | Menengah — lisensi/konsumsi + tata kelola |
| Siapa yang memelihara | Vendor SaaS | Tim IT internal penuh | Tim IT + citizen/fusion developer |
| Risiko utama | Lock-in fitur; proses mengalah ke software | Technical debt, beban SDM | Shadow IT bila tanpa governance; batas skala |

### TCO — Biaya awal vs biaya berkelanjutan (kualitatif; JANGAN isi angka rupiah spesifik)
| Jalur | Biaya awal | Biaya berkelanjutan (multi-tahun) | Sumber technical debt |
|---|---|---|---|
| Beli SaaS | Rendah–menengah | Langganan berulang; biaya integrasi | Rendah (dikelola vendor) |
| Bangun custom | Tinggi | Pemeliharaan, keamanan, upgrade sendiri | Tinggi bila tak dirawat |
| Low-code | Rendah–menengah | Lisensi/konsumsi platform + governance | Menengah bila dipakai di luar porsinya |

### (Opsional, ringkas) Contoh platform low-code enterprise — untuk konteks, bukan fokus
| Platform | Paling kuat untuk | Catatan |
|---|---|---|
| SAP Build (di SAP BTP) | Organisasi pengguna SAP; ekstensi S/4HANA clean core | Side-by-side; Joule/GenAI 2025 |
| Microsoft Power Platform | Organisasi Microsoft 365 | Dataverse/Teams/Power Automate |
| Mendix | Aplikasi kompleksitas menengah–tinggi, multi-channel | Model-driven; AI "Maia" |

> Catatan penulis: perbandingan cross-vendor mendalam adalah domain artikel **-01**. Di artikel ini, cukup sebut SAP Build sebagai contoh utama dan sebutkan dua lainnya sepintas agar tidak tumpang tindih.

## Edge cases & nuance

- **"Beli" tidak selalu murah:** SaaS terjangkau di awal tetapi bisa memaksa proses bisnis unik mengalah pada software; jika prosesnya sumber keunggulan, ini kerugian tersembunyi—bukan penghematan.
- **"Bangun" jarang menang:** godaan over-build (membangun yang sebenarnya bisa dibeli) membuang bulan-bulan developer. Build hanya menang bila kebutuhan benar-benar diferensiasi dan tak ada produk pasar.
- **Low-code punya plafon:** memakai low-code untuk sistem transaksi inti berskala sangat besar dapat memicu masalah performa, governance, dan technical debt. Low-code adalah perluasan, bukan pengganti ERP inti.
- **Kesalahan tersering bukan pilihan platform, tapi salah menaruh kebutuhan di jalur yang salah** (first-party angle Soltius). Kerangka membantu mencegah over-build, over-buy, dan over-low-code.
- **Governance menentukan hasil low-code:** tanpa Center of Excellence/aturan, low-code melahirkan shadow IT; dengan governance, ia mengurangi backlog IT. (Program CoE mendalam = domain artikel lain, jangan diperluas.)
- **Model clean core berubah:** perusahaan yang masih memakai istilah "3-tier extensibility" merujuk model lama; sejak Agu 2025 SAP memakai 4 level (A–D). Tulis dengan hati-hati.

## Flags (open factual risk)

- ⚠️ **"30–40% lebih sedikit kegagalan implementasi"**: sumbernya temuan industri (kissflow/Forbes/zylo), bukan riset primer yang bisa diverifikasi ketat → **bingkai sebagai "menurut temuan industri" / "beberapa analisis memperkirakan"**, jangan sebagai angka pasti.
- ⚠️ **Klaim "Joule menurunkan biaya pengembangan ~30%"**: ini klaim vendor SAP → atribusikan ("SAP menyebutkan..."), jangan sajikan sebagai fakta netral pihak ketiga.
- ⚠️ **Model clean core "tier vs level"**: SAP mengganti 3-tier dengan 4 level (A–D) pada Agustus 2025 → **jangan tulis "tiga tier" sebagai model saat ini**. Aman: jelaskan pada level prinsip (in-app/key-user, ABAP Cloud on-stack, side-by-side BTP) dan sebut "model kematangan 4 level A–D" bila perlu detail. Sumber pendukung untuk detail level sebagian adalah community.sap.com (blog anggota) yang dikuatkan SAP News + learning.sap.com — cukup untuk framing, hindari mengutip angka/definisi level yang terlalu spesifik.
- ⚠️ **≥80% pengguna non-IT & angka rating Mendix (~4,5)**: angka Gartner/Gartner Peer Insights yang bisa bergeser antar-edisi → selalu atribusikan sumber + framing "menurut Gartner".
- ⚠️ **Volume/KD keyword**: Ahrefs tidak terhubung → tidak ada data volume; jangan mengklaim angka pencarian. Tren "naik" hanya didasarkan proyeksi Gartner.
- ℹ️ **Harga/lisensi SAP Build / BTP**: TIDAK diverifikasi dan JANGAN diarang. Bahas TCO kualitatif; tandai setiap contoh angka sebagai ilustrasi, bukan janji.

## Definition snippet draft (40–60 words)

> **Low-code platform** adalah perangkat pengembangan aplikasi visual yang memungkinkan tim merakit aplikasi dan workflow lewat drag-and-drop dengan kode minimal, sehingga pengiriman jauh lebih cepat daripada koding tradisional. Dalam keputusan aplikasi enterprise, low-code menjadi jalur ketiga—"buy-and-extend"—di antara membeli produk SaaS jadi dan membangun aplikasi custom dari nol.
