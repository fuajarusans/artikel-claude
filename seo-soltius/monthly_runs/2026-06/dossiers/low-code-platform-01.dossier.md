---
brief_id: "low-code-platform-01"
researcher_run_date: "2026-06-02"
sources_cited: 10
flags: 3
---

# Research Dossier: Low-Code Platform: Apa Itu dan Bagaimana Cara Kerjanya untuk Bisnis Enterprise?

## TL;DR for the writer

- **Definisi kunci**: Low-code platform adalah lingkungan pengembangan visual yang meminimalkan penulisan kode manual; fondasi dossier ini berpusat pada sudut pandang eksekutif enterprise — bukan developer/mahasiswa yang sudah digarap kompetitor.
- **SAP Build** adalah contoh platform low-code enterprise-grade di atas SAP BTP; per 2025–2026 terdiri dari setidaknya empat komponen resmi: SAP Build Apps, SAP Build Process Automation, SAP Build Work Zone, dan SAP Build Code (tambahan per BTP Innobytes Q1 2026).
- **Angka GigaOm terverifikasi**: 3x lebih cepat dan 59% lebih hemat effort dibanding pengembangan kustom tradisional (sumber: news.sap.com, Maret 2025).
- **Angka Gartner** ($44,5B pasar 2026; 75% aplikasi enterprise dibangun via low-code 2026; 80% pengguna adalah citizen developer) — dikutip di banyak secondary sources; sumber primer adalah laporan Gartner berbayar. Writer harus framing sebagai "Gartner memproyeksikan..." untuk akurasi atribusi.
- **Batasan yang jujur harus dimasukkan** (H2 #5 brief): low-code tidak cocok untuk logika bisnis sangat kompleks/unik, risiko vendor lock-in nyata, dan governance citizen developer perlu dikelola aktif — ini adalah differentiator editorial vs kompetitor yang hanya promosi.

---

## Core facts (verified)

> **Claim**: Low-code platform memungkinkan pembangunan aplikasi dengan antarmuka visual drag-and-drop, komponen siap pakai, dan minimal penulisan kode manual.
> **Number/specific**: Konsep berasal dari era RAD (Rapid Application Development) 1990-an, dipopulerkan Forrester dengan istilah "low-code" sekitar 2014; kini mencakup workflow builder, pre-built connectors, dan code generation.
> **Source**: Forrester Research (coiners of the term "low-code development platform" ~2014); domain knowledge editorial
> **Confidence**: high

> **Claim**: SAP Build adalah suite pengembangan low-code/no-code resmi SAP yang berjalan di atas SAP BTP.
> **Number/specific**: Komponen resmi per 2025–2026: SAP Build Apps (pembangunan aplikasi visual), SAP Build Process Automation (workflow + RPA), SAP Build Work Zone (portal digital/launchpad), SAP Build Code (pro-code dengan AI assistance, dikonfirmasi masuk suite melalui SAP Community Q1 2026 Innobytes).
> **Source**: SAP Community — SAP Build topic page (pages.community.sap.com/topics/build); SAP BTP Q1 2026 Innobytes (community.sap.com); SAP official product page (sap.com/products/technology-platform/build.html — HTTP 403 saat diakses 2026-06-02, tapi data dikonfirmasi via community)
> **Confidence**: high (komponen Apps/Process Automation/Work Zone sudah lama resmi; Build Code per 2025)

> **Claim**: SAP Build Process Automation menggabungkan otomasi workflow dan RPA (Robotic Process Automation) dalam satu platform low-code di BTP.
> **Number/specific**: Memungkinkan integrasi antara sistem SAP dan non-SAP; updated triggers dan bridging SAP–non-SAP confirmed per SAP community docs 2025–2026.
> **Source**: SAP Build Process Automation product features page (sap.com/products/technology-platform/process-automation/features.html), accessed 2026-06-02
> **Confidence**: high

> **Claim**: SAP Build Work Zone menggabungkan dua layanan BTP sebelumnya — SAP Launchpad dan SAP Work Zone — menjadi satu solusi portal digital.
> **Number/specific**: Merger tersebut terjadi sejak peluncuran SAP Build suite (~2022–2023); Work Zone memungkinkan pembuatan business sites personal yang cepat.
> **Source**: SAP Community (community.sap.com — SAP Build Work Zone discussions), accessed 2026-06-02
> **Confidence**: high

> **Claim**: GigaOm benchmark study (Maret 2025) menemukan SAP Build 3x lebih cepat dalam pengiriman proyek dibanding pengembangan kustom tradisional.
> **Number/specific**: 3x faster project delivery; projects completing in less than half the traditional timeframe.
> **Source**: news.sap.com/2025/03/sap-build-gigaom-study-greater-speed-development/ — diakses 2026-06-02
> **Confidence**: high (langsung dari sumber SAP official)

> **Claim**: GigaOm study (Maret 2025) menemukan SAP Build menghasilkan 59% pengurangan effort pengembangan dibanding metode tradisional.
> **Number/specific**: 59% reduction in development effort (confirmed exact figure from news.sap.com article).
> **Source**: news.sap.com/2025/03/sap-build-gigaom-study-greater-speed-development/ — diakses 2026-06-02
> **Confidence**: high

> **Claim**: AI assistance (Joule integration) dalam SAP Build memberikan 30% peningkatan produktivitas untuk tugas-tugas pengembangan tertentu.
> **Number/specific**: 30% boost in development tasks using AI-assistance, particularly data modeling and synthetic data creation.
> **Source**: news.sap.com/2025/03/sap-build-gigaom-study-greater-speed-development/ — diakses 2026-06-02
> **Confidence**: high (dari artikel SAP yang sama dengan GigaOm data)

> **Claim**: Pasar low-code/no-code global diproyeksikan mencapai $44,5 miliar pada 2026.
> **Number/specific**: CAGR sekitar 19% (proyeksi Gartner yang banyak dikutip media enterprise-IT).
> **Source**: Gartner (laporan primer berbayar; dikutip secara luas di kissflow.com/low-code/gartner-forecasts-on-low-code-development-market/ dan media enterprise-IT lainnya); atribut sebagai "Gartner memproyeksikan..."
> **Confidence**: medium (angka beredar luas namun sumber primer Gartner berbayar — lihat Flag #1)

> **Claim**: Gartner memproyeksikan 75% aplikasi enterprise baru akan dibangun menggunakan platform low-code pada 2026 (naik dari kurang dari 25% di 2020).
> **Number/specific**: <25% pada 2020 → proyeksi 75% pada 2026.
> **Source**: Gartner (dikutip di Kissflow dan medium enterprise-IT lainnya); atribut sebagai "Gartner memproyeksikan..."
> **Confidence**: medium (lihat Flag #1 — sumber sekunder; angka sering diulang-ulang di industri)

> **Claim**: Gartner memproyeksikan 80% pengguna low-code platform pada 2026 adalah citizen developer (non-IT profesional).
> **Number/specific**: 80% non-IT/citizen developer; Gartner juga proyeksikan rasio citizen developer vs professional developer 4:1 pada 2026.
> **Source**: Gartner (dikutip di secondary sources enterprise-IT); atribut sebagai "Gartner memproyeksikan..."
> **Confidence**: medium (lihat Flag #1)

> **Claim**: SAP BTP (Business Technology Platform) adalah fondasi integrasi dan ekstensi native untuk SAP S/4HANA — di sinilah SAP Build berjalan.
> **Number/specific**: BTP menyediakan layanan cloud foundry, kyma runtime, integration suite, dan data & analytics — SAP Build berjalan di atas BTP.
> **Source**: SAP official (sap.com/products/technology-platform.html — domain knowledge dikonfirmasi dari search result 2026-06-02)
> **Confidence**: high

> **Claim**: Low-code platform mendukung konsep "citizen developer" — pengguna bisnis non-programmer yang dapat membangun aplikasi tanpa bergantung penuh pada tim IT.
> **Number/specific**: Citizen developer adalah pengguna bisnis yang membangun aplikasi menggunakan platform resmi IT perusahaan, dengan governance terpusat; berbeda dari shadow IT.
> **Source**: Gartner (mendefinisikan dan mempopulerkan istilah "citizen developer"); Forrester Research
> **Confidence**: high (definisi sudah baku dalam industri)

> **Claim**: ABAP Cloud adalah lapisan pengembangan pro-code yang tetap aman untuk clean-core dalam ekosistem SAP S/4HANA — komplemen SAP Build untuk kasus yang memerlukan kode kompleks.
> **Number/specific**: ABAP Cloud menggunakan public API dan ABAP RESTful Application Programming Model (RAP) untuk memastikan kustomisasi tetap upgrade-safe; berbeda dari custom ABAP klasik yang memodifikasi inti.
> **Source**: SAP Help (help.sap.com — ABAP Cloud documentation); domain knowledge SAP ecosystem
> **Confidence**: high (konsep inti SAP clean core, sangat terdokumentasi)

> **Claim**: Joule adalah AI copilot SAP yang terintegrasi dalam SAP Build — memberikan saran kode, optimasi, dan bantuan pengembangan.
> **Number/specific**: Joule terintegrasi dengan SAP Build Process Automation dan komponen lain; End-to-End guide konfirmasi integrasi Joule + Build Process Automation + Build Work Zone di BTP (community.sap.com, 2025).
> **Source**: SAP Community (community.sap.com/t5/technology-blog-posts-by-sap/end-to-end-guide-to-setup-joule-sap-build-process-automation-and-sap-build), accessed 2026-06-02
> **Confidence**: high

> **Claim**: Transformasi digital di Indonesia mendorong adopsi platform low-code; pemerintah mendorong percepatan digitalisasi UKM dan enterprise.
> **Number/specific**: Kemenkominfo (kini Komdigi) memiliki roadmap digitalisasi nasional; IDC Indonesia melaporkan pertumbuhan cloud adoption di kalangan enterprise; namun angka spesifik adopsi low-code di Indonesia tidak tersedia dari sumber resmi yang terverifikasi untuk dossier ini.
> **Source**: Kemenkominfo/Komdigi (roadmap umum digital Indonesia); IDC Indonesia (general cloud adoption reports)
> **Confidence**: low untuk angka spesifik (lihat Flag #2)

---

## Solution focus + Soltius anchor (from product_matrix.md)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| **SAP Build** (Apps + Process Automation + Work Zone + Code) | Suite low-code/no-code di SAP BTP; 4 komponen resmi; GigaOm: 3x speed, 59% effort reduction (Maret 2025); Joule AI integration | H2 #4 — enterprise-grade section | Digital Platform solution |
| **SAP BTP (Business Technology Platform)** | Foundation untuk SAP Build; native integration dengan S/4HANA; side-by-side extensibility untuk clean core | H2 #4, H2 #1 (brief mention) | Implicit — BTP adalah platform yang Soltius setup |
| **Citizen Developer** | Gartner: 80% pengguna low-code adalah citizen developer (2026 proyeksi); perlu governance IT aktif | H2 #4, FAQ | — |
| **ABAP Cloud** | Pro-code layer yang tetap upgrade-safe di S/4HANA; komplemen untuk kasus di luar kemampuan low-code | H2 #3 (comparison table) | — |

**Soltius anchor placement:**
- **Closing paragraph** (utama): "Soltius, sebagai SAP Platinum Partner yang berpengalaman sejak 1998, membantu perusahaan memanfaatkan SAP Build di atas SAP BTP untuk mempercepat pengembangan aplikasi tanpa membebani tim IT inti. Jika Anda ingin mengevaluasi kesiapan platform low-code enterprise di perusahaan Anda, tim Digital Platform Soltius siap berdiskusi."
- **Mid-article aside** (opsional, 1 kalimat di H2 #4): saat menjelaskan SAP Build, sebut Soltius sebagai mitra implementasi SAP yang membantu setup BTP — satu kalimat saja.
- **Maksimum 2–3 mention total.**

---

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **SAP / GigaOm Benchmark Study (Maret 2025)** — https://news.sap.com/2025/03/sap-build-gigaom-study-greater-speed-development/ — *what it backs*: angka 3x speed dan 59% effort reduction untuk SAP Build vs pengembangan tradisional; juga 30% AI productivity boost via Joule.

2. **SAP Community — SAP Build Topic Page** — https://pages.community.sap.com/topics/build — *what it backs*: gambaran resmi komponen SAP Build (Apps, Process Automation, Work Zone, Code); definisi suite SAP Build sebagai alat pengembangan aplikasi, otomasi, dan workspace di BTP.

3. **SAP Build Process Automation Product Features** — https://www.sap.com/products/technology-platform/process-automation/features.html — *what it backs*: detail fitur Process Automation — workflow drag-and-drop, integrasi SAP dan non-SAP, RPA capabilities.

4. **Kissflow / Gartner forecast** — https://kissflow.com/low-code/gartner-forecasts-on-low-code-development-market/ — *what it backs*: proyeksi pasar $44,5B dan 75% enterprise apps via low-code (2026); GUNAKAN sebagai "Gartner, dikutip dalam..." bukan sebagai primary source; sumber primer Gartner berbayar.

> Note: Sumber 1 dan 2 adalah yang paling kuat (SAP official). Sumber 3 mendukung detail teknis. Sumber 4 sebagai secondary citation untuk angka Gartner.

---

## FAQ Q&As (7 drafted, Bahasa Indonesia)

### Apa itu low-code platform?
Low-code platform adalah lingkungan pengembangan aplikasi yang menggunakan antarmuka visual drag-and-drop dan komponen siap pakai, sehingga aplikasi bisnis dapat dibangun jauh lebih cepat dengan kebutuhan penulisan kode yang minimal. Platform ini memungkinkan pengembang profesional maupun pengguna bisnis (citizen developer) untuk membuat aplikasi yang terintegrasi dengan sistem enterprise seperti ERP. Menurut GigaOm (2025), SAP Build — salah satu platform low-code enterprise — menghasilkan pengembangan 3x lebih cepat dibanding metode kustom tradisional.

### Apa perbedaan low-code dan no-code platform?
Low-code platform menyediakan antarmuka visual namun tetap memungkinkan penambahan kode untuk logika bisnis yang kompleks — cocok untuk developer profesional dan pengguna bisnis yang melek teknologi. No-code platform sepenuhnya tanpa kode; ditujukan untuk pengguna non-teknis untuk kasus sederhana. Dalam ekosistem SAP, SAP Build mencakup keduanya: SAP Build Apps memiliki mode visual (no-code) dan mode advanced (low-code) bergantung kebutuhan.

### Apakah low-code platform aman untuk data perusahaan?
Platform low-code enterprise-grade seperti SAP Build berjalan di atas SAP BTP yang memiliki sertifikasi keamanan enterprise: enkripsi data, manajemen identitas, kontrol akses berbasis peran, dan kepatuhan regulasi (ISO 27001, SOC 2). Keamanan data lebih bergantung pada governance IT internal — bagaimana izin akses diatur, siapa yang boleh membangun aplikasi — daripada kapabilitas keamanan platformnya sendiri.

### Siapa saja yang bisa menggunakan low-code platform di perusahaan?
Ada dua tipe pengguna: (1) Developer profesional, yang menggunakannya untuk membangun aplikasi lebih cepat dan mengurangi backlog IT; (2) Citizen developer — analis bisnis, manajer operasional, atau staf keuangan yang membangun aplikasi sederhana tanpa bergantung antrian IT. Gartner memproyeksikan 80% pengguna low-code pada 2026 adalah citizen developer non-IT, dengan rasio 4:1 terhadap developer profesional.

### Berapa lama membangun aplikasi dengan low-code vs pengembangan tradisional?
Studi benchmark GigaOm (Maret 2025) mengukur bahwa SAP Build menghasilkan pengiriman proyek 3x lebih cepat dibanding pengembangan kustom tradisional, dengan pengurangan effort sebesar 59%. Sebagai gambaran, aplikasi workflow sederhana yang biasanya membutuhkan 2–3 bulan dengan pengembangan kustom dapat diselesaikan dalam beberapa minggu. Waktu aktual bergantung pada kompleksitas integrasi, kesiapan data, dan pengalaman tim.

### Apakah SAP memiliki platform low-code?
Ya. SAP Build adalah suite low-code/no-code resmi SAP yang berjalan di atas SAP BTP (Business Technology Platform). Suite ini terdiri dari SAP Build Apps (pembangunan aplikasi visual), SAP Build Process Automation (otomasi workflow dan RPA), SAP Build Work Zone (portal digital/launchpad), dan SAP Build Code (pro-code dengan AI assistance). SAP Build terintegrasi secara native dengan SAP S/4HANA dan sistem SAP lainnya, menjadikannya pilihan low-code enterprise yang sudah dalam ekosistem bagi perusahaan pengguna SAP.

### Bagaimana low-code platform diintegrasikan dengan ERP?
Platform low-code enterprise seperti SAP Build dirancang native untuk berintegrasi dengan ERP. SAP Build menggunakan BTP Integration Suite dan pre-built connectors untuk menghubungkan aplikasi baru dengan data S/4HANA, modul HR, Finance, atau Supply Chain — tanpa memodifikasi inti ERP. Pendekatan ini selaras dengan prinsip SAP Clean Core: ekstensi dibangun di luar inti (side-by-side extensibility) sehingga sistem ERP tetap standar dan mudah di-upgrade.

---

## Data tables for the writer

### Low-Code vs No-Code vs Pro-Code (Comparison Table)

| Aspek | Low-Code | No-Code | Pro-Code (Tradisional) |
|---|---|---|---|
| **Target pengguna** | Developer + citizen developer melek teknologi | Pengguna bisnis non-teknis | Developer / engineer profesional |
| **Kebutuhan coding** | Minimal — visual utama, kode tambahan untuk logika kompleks | Tidak ada | Penuh — semua ditulis manual |
| **Kecepatan pengembangan** | 3x lebih cepat (GigaOm 2025 untuk SAP Build) | Paling cepat untuk kasus sederhana | Paling lambat — fleksibel tapi intensif |
| **Kompleksitas yang didukung** | Sedang hingga tinggi — integrasi ERP, workflow enterprise | Rendah hingga sedang — form, workflow ringan | Tidak terbatas — paling fleksibel |
| **Integrasi sistem enterprise** | Kuat (pre-built connectors, API) | Terbatas — integrasi kustom sulit | Sangat kuat — penuh kontrol |
| **Kustomisasi** | Tinggi — dapat ditambah kode | Terbatas pada template platform | Tidak terbatas |
| **Contoh platform SAP** | SAP Build Apps (advanced mode) | SAP Build Apps (visual mode) | ABAP Cloud / SAP Cloud Application Programming Model |
| **Risiko vendor lock-in** | Ada — bergantung komponen platform | Lebih tinggi — sangat bergantung platform | Rendah — kode sendiri |

### SAP Build — Komponen Resmi (per 2025–2026)

| Komponen | Fungsi Utama | Pengguna Utama |
|---|---|---|
| **SAP Build Apps** | Pembangunan aplikasi bisnis visual (mobile & web) | Citizen developer + developer |
| **SAP Build Process Automation** | Otomasi workflow + RPA; integrasi SAP dan non-SAP | Developer + business analyst |
| **SAP Build Work Zone** | Portal digital / launchpad — workspace personal yang dapat dikonfigurasi | IT admin + end user |
| **SAP Build Code** | Pengembangan pro-code dengan AI assistance (Joule) untuk developer | Developer profesional |

---

## Edge cases & nuance

- **Low-code bukan solusi universal**: aplikasi dengan logika bisnis sangat kompleks dan unik (misalnya, kalkulasi harga multi-variabel dengan ratusan aturan pengecualian) masih lebih efisien dibangun secara pro-code atau kustom — platform low-code punya batasan ekspresi logika kompleks.
- **Risiko vendor lock-in adalah nyata**: aplikasi yang dibangun di atas platform low-code proprietary (SAP Build, Mendix, OutSystems, Power Apps) terikat pada ekosistem vendor tersebut. Jika perusahaan keluar dari ekosistem SAP, aplikasi SAP Build perlu dibangun ulang. Ini perlu disebutkan jujur di H2 #5.
- **Governance citizen developer wajib ada**: tanpa kebijakan tata kelola yang jelas, low-code bisa menjadi shadow IT terselubung — aplikasi dibangun oleh divisi bisnis, mengakses data sensitif, tanpa pengawasan IT. Ini bukan alasan untuk tidak memakai low-code, tapi perlu framework governance.
- **Performa untuk beban transaksi sangat tinggi**: untuk sistem yang memproses jutaan transaksi per detik (misalnya, trading engine atau core banking), low-code platform umumnya bukan pilihan yang tepat — overhead abstraksi platform menambah latensi.
- **SAP Build Code menambah dimensi pro-code**: kehadiran SAP Build Code menunjukkan bahwa SAP mengakui kebutuhan developer profesional yang ingin kecepatan AI assistance tanpa mengorbankan kontrol kode — ini juga berarti "suite" SAP Build kini lebih luas dari sekadar low-code.
- **Joule Studio 2.0**: brief menyebut "Joule Studio 2.0 mulai rollout Juni 2026." Ini tidak dapat dikonfirmasi dari sumber yang diakses hari ini — lihat Flag #3.

---

## Flags (open factual risk)

- ⚠️ **Flag #1 — Angka Gartner (pasar $44,5B, 75% enterprise apps, 80% citizen developer)**: Angka-angka ini beredar sangat luas di konten industri dan secondary sources (Kissflow, G2, Forbes), namun sumber primer adalah laporan Gartner berbayar yang tidak dapat diakses langsung untuk verifikasi. → **Rekomendasi**: Writer WAJIB frame sebagai "Gartner memproyeksikan..." atau "menurut Gartner, dikutip dalam [source]..." — jangan sajikan sebagai established fact tanpa atribusi. Jangan gunakan framing "terbukti" atau "sudah terjadi" karena ini masih proyeksi.

- ⚠️ **Flag #2 — Statistik adopsi low-code/digital Indonesia**: Tidak ada angka spesifik adopsi low-code di Indonesia dari sumber Kemenkominfo/Komdigi, BPS, atau IDC Indonesia yang dapat diverifikasi dalam penelusuran ini. → **Rekomendasi**: Writer dapat menyebut tren umum digitalisasi Indonesia (Komdigi roadmap, pertumbuhan cloud enterprise) tanpa menyebut angka spesifik yang tidak terverifikasi. Jangan fabrikasi persentase adopsi low-code Indonesia.

- ⚠️ **Flag #3 — Joule Studio 2.0 (Juni 2026)**: Brief strategist menyebut "Joule Studio 2.0 mulai rollout Juni 2026" — ini tidak dapat dikonfirmasi dari sumber SAP resmi yang diakses hari ini (sap.com 403, community.sap.com tidak menyebut "Joule Studio 2.0" secara eksplisit). → **Rekomendasi**: Jangan sebut "Joule Studio 2.0" sebagai fitur resmi saat ini. Gunakan phrasing lebih umum: "SAP terus mengintegrasikan kemampuan AI Joule ke dalam SAP Build" — aman dan terverifikasi dari konteks community SAP.

---

## Definition snippet draft (40–60 words)

> **Low-code platform** adalah lingkungan pengembangan aplikasi yang menggunakan antarmuka visual drag-and-drop dan komponen siap pakai, sehingga aplikasi bisnis dapat dibangun lebih cepat dengan kebutuhan penulisan kode yang minimal. Platform ini memungkinkan pengembang profesional maupun pengguna bisnis (*citizen developer*) untuk membuat aplikasi yang terintegrasi dengan sistem enterprise seperti ERP, tanpa mengganggu stabilitas inti sistem.

---

## Notes for image-planner

- **Concept 1 — Diagram arsitektur SAP Build di atas BTP**: Ilustrasi konseptual yang menunjukkan lapisan: S/4HANA (inti ERP) → SAP BTP (platform) → SAP Build (suite low-code: Apps, Process Automation, Work Zone, Code). Menjelaskan secara visual mengapa low-code bisa "aman" untuk enterprise karena tidak memodifikasi inti ERP.

- **Concept 2 — Tabel perbandingan Low-Code vs No-Code vs Pro-Code**: Infografik ringkasan tabel 3-kolom (berbasis tabel di dossier ini) — cocok untuk screenshot dan sharing di internal chat. Format B2B clean, tidak terlalu berwarna, mudah dibaca pada desktop.

- **Concept 3 — Spektrum pengguna: dari Citizen Developer ke Pro Developer**: Diagram horizontal yang menunjukkan spektrum: Citizen Developer (no-code/low-code ringan) → Business Analyst (low-code) → Professional Developer (low-code + pro-code) → Engineer (pro-code). Kontekstualisasi siapa yang menggunakan apa — membantu eksekutif memahami siapa di tim mereka yang bisa mulai pakai platform ini.
