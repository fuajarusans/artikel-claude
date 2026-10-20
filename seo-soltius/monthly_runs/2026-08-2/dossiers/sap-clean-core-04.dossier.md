---
brief_id: "sap-clean-core-04"
researcher_run_date: "2026-08-11"
sources_cited: 8
flags: 6
---

# Research Dossier: Memantau Kesehatan Clean Core SAP — KPI dan SAP Cloud ALM

## TL;DR for the writer

- Ini artikel tentang **mengukur & memantau** clean core secara berkelanjutan (operasi), bukan cara mencapainya (proyek). Bingkai clean core sebagai **kondisi yang dipantau terus**, bukan skor sekali. Pembeda utama vs artikel cluster lain.
- Sumber angka resminya adalah **RISE with SAP Methodology Dashboard di dalam SAP Cloud ALM**. KPI clean core inti yang wajib disebut dengan nama resmi: **Technical Debt Score** dan **Clean Core Share**, plus KPI pendukung **Execution of Customer Objects**, **Business Modifications**, **Unused Customer Objects**, dan **Detailed Level Overview (A–D)**. Semua VERIFIED (lihat Core facts).
- KPI ini memakai **Clean Core Level Concept (Level A–D)** — model kematangan ekstensi 4 tingkat berdasarkan keamanan-upgrade. Ini penamaan resmi terbaru (2025), menggantikan model 3-tier lama. Trennya ditampilkan **~3 bulan** (three-month trend) — VERIFIED.
- **Dari mana angkanya**: dashboard di-power sebagian dengan **impor manual hasil ABAP Test Cockpit (ATC)**; analisis inventori & pemakaian custom code datang dari **SAP Readiness Check** + **Custom Code Migration app / Analyze Custom Code app**. Jelaskan rantai data ini di H2 #3.
- **Nuansa jujur untuk H2 #5**: KPI dashboard clean core ini melekat pada **RISE with SAP** (dashboard metodologi RISE). Tapi **SAP Cloud ALM sendiri lebih luas** — entitlement-nya juga masuk lewat Enterprise Support & langganan cloud SAP, dan tim on-premise tetap bisa memakai **ATC (central check system)** untuk data kualitas kode kustom tanpa dashboard RISE. JANGAN mengarang ambang angka "sehat/tidak sehat" — belum ada angka resmi; tekankan **tren**, bukan angka mutlak.

## Core facts (verified)

> **Claim**: Sejak 2025 SAP menambahkan sekumpulan KPI clean core baru ke RISE with SAP Methodology Dashboard di dalam SAP Cloud ALM.
> **Number/specific**: Rilis terbaru dashboard mengintegrasikan "Clean Core Level Concept" dan memperkenalkan KPI baru (Technical Debt Score, Clean Core Share) untuk dimensi Extensibility — diumumkan 2025 lewat blog resmi SAP.
> **Source**: SAP Community (blog resmi SAP), "New Clean Core Extensibility KPIs arrive on the RISE with SAP Dashboard", community.sap.com/.../ba-p/14257352 (diakses 2026-08-11)
> **Confidence**: high (tahun 2025 dikonfirmasi beberapa sumber; bulan pasti tidak dikunci — labeli "2025" saja)

> **Claim**: Technical Debt Score adalah KPI clean core resmi.
> **Number/specific**: Skor teragregasi yang merepresentasikan technical debt dari seluruh objek kustom di sistem; mengevaluasi kebutuhan modernisasi berdasarkan kepatuhan clean core; ditampilkan dengan tren 3 bulan.
> **Source**: SAP Community (blog resmi SAP), ba-p/14257352 (diakses 2026-08-11)
> **Confidence**: high

> **Claim**: Clean Core Share adalah KPI clean core resmi.
> **Number/specific**: Mengukur porsi keseluruhan ekstensi yang patuh (compliant), yaitu bagaimana distribusi objek kustom tersebar di Level A–D.
> **Source**: SAP Community, ba-p/14257352 (diakses 2026-08-11)
> **Confidence**: high

> **Claim**: Dashboard juga memuat KPI pendukung: Execution of Customer Objects, Business Modifications, Unused Customer Objects, dan Detailed Level Overview (A–D).
> **Number/specific**: Execution of Customer Objects = seberapa sering objek kustom dieksekusi dibanding standar; Business Modifications = menyorot modifikasi warisan yang mengancam stabilitas upgrade; Unused Customer Objects = objek kustom tak terpakai yang bisa dibersihkan; Detailed Level Overview (A–D) = distribusi ekstensi per level clean core.
> **Source**: SAP Community, ba-p/14257352 (diakses 2026-08-11)
> **Confidence**: high

> **Claim**: KPI clean core memakai "Clean Core Level Concept" (Level A–D), model kematangan ekstensi 4 tingkat.
> **Number/specific**: Empat level (A, B, C, D) mengklasifikasikan ekstensi berdasarkan integritas arsitektur & keamanan upgrade; model ini adalah pembaruan 2025 atas model tier lama.
> **Source**: SAP Community, "New Clean Core Extensibility KPIs..." (ba-p/14257352) + SAP Community "Getting to a Clean Core — the new maturity model (A,B,C,D)" (ba-p/14326982) (diakses 2026-08-11)
> **Confidence**: high (konsep A–D VERIFIED; definisi persis tiap huruf sebaiknya diverifikasi ulang di help.sap.com bila artikel merincinya — lihat Flags)

> **Claim**: KPI clean core ditampilkan dengan jendela tren tiga bulan.
> **Number/specific**: Technical Debt Score punya "three-month trend" yang membantu memantau apakah maintainability sistem membaik atau tidak.
> **Source**: SAP Community, ba-p/14257352 (diakses 2026-08-11)
> **Confidence**: high

> **Claim**: Dashboard clean core di-power dengan impor hasil ABAP Test Cockpit (ATC).
> **Number/specific**: Untuk menghasilkan insight KPI, dashboard mendukung impor manual hasil pemeriksaan (check results) dari ABAP Test Cockpit (ATC).
> **Source**: SAP Community, ba-p/14257352 (diakses 2026-08-11)
> **Confidence**: high

> **Claim**: SAP Cloud ALM adalah produk application lifecycle management cloud-native SAP untuk RISE with SAP, GROW with SAP, dan pelanggan cloud SAP.
> **Number/specific**: SaaS turnkey yang di-host & dikelola SAP; mencakup fase Implementation (task plan, Fit-to-Standard, test prep) dan Operations (business process monitoring, integration monitoring, health check). Dibangun di atas SAP BTP.
> **Source**: help.sap.com / support.sap.com (SAP Cloud ALM); dirangkum via WebSearch dari materi SAP official (diakses 2026-08-11)
> **Confidence**: high

> **Claim**: Entitlement SAP Cloud ALM tidak eksklusif RISE — juga tercakup dalam Enterprise Support dan langganan cloud SAP.
> **Number/specific**: Cloud ALM disertakan tanpa biaya tambahan di banyak langganan RISE with SAP, GROW with SAP, produk cloud SAP (mis. SuccessFactors, Ariba, S/4HANA Cloud), dan kontrak SAP Enterprise Support.
> **Source**: Materi SAP official (SAP Cloud ALM expert portal / help.sap.com), via WebSearch (diakses 2026-08-11)
> **Confidence**: high (implikasi penting: dashboard *KPI clean core RISE* tetap terikat konteks RISE — lihat Flags)

> **Claim**: SAP menyediakan Custom Code Migration app (berbasis infrastruktur remote ATC) untuk analisis custom code menuju S/4HANA.
> **Number/specific**: App melakukan cloud readiness check atas custom code di sistem private cloud/on-premise dan memberi hasil analisis rinci. Sejak SAP BTP ABAP environment 2508, app dipecah dua: "Analyze Custom Code" (untuk analisis) dan "Custom Code Migration" (untuk migrasi ke S/4HANA).
> **Source**: SAP Community (blog resmi SAP), "Custom code analysis for SAP S/4HANA with SAP Fiori App Custom Code Migration" (ba-p/13402751) (diakses 2026-08-11)
> **Confidence**: high

> **Claim**: SAP Readiness Check untuk upgrade S/4HANA memuat Custom Code Analysis yang menampilkan temuan ATC.
> **Number/specific**: Check "Custom Code Analysis" memberi visibilitas atas temuan ABAP Test Cockpit; variant S4HANA_READINESS memakai Simplification Database untuk menandai error khas custom code saat pindah ke S/4HANA.
> **Source**: SAP Community (blog resmi SAP), "Enhanced Custom Code Analysis in SAP Readiness Check for SAP S/4HANA Upgrades" (ba-p/13580469) (diakses 2026-08-11)
> **Confidence**: high

> **Claim**: ABAP Test Cockpit (ATC) adalah toolset quality assurance yang menjalankan pemeriksaan otomatis & ABAP unit test atas custom code, dan bisa dijalankan terpusat untuk sistem on-premise.
> **Number/specific**: Dengan remote ATC / central check system, pelanggan bisa menganalisis custom code di sistem lama memakai check ATC terbaru dari satu sistem pusat — tersedia untuk developments on-premise, tidak butuh dashboard RISE.
> **Source**: SAP Community (blog resmi SAP) "Usage of ABAP Test Cockpit (ATC) in the cloud for on-premise developments" (ba-p/13576887) + developers.sap.com tutorial ATC central check (diakses 2026-08-11)
> **Confidence**: high

> **Claim**: SAP Cloud ALM memiliki Operations View pada RISE with SAP Methodology Dashboard yang menilai kepatuhan dimensi Operations clean core.
> **Number/specific**: Operations View bertindak sebagai "daily report" yang menunjukkan seberapa patuh sistem terhadap prinsip clean core untuk dimensi Operations, dengan metrik dari aplikasi SAP Cloud ALM untuk semua sistem S/4HANA produktif yang dikonfigurasi.
> **Source**: SAP Community (blog resmi SAP), "Introducing the New RISE with SAP Methodology Dashboard: Operations View" (ba-p/14131775) (diakses 2026-08-11)
> **Confidence**: high

> **Claim**: SAP Cloud ALM mendukung pembuatan custom KPI untuk monitoring.
> **Number/specific**: Dokumentasi "Setting Up Custom KPIs" di help.sap.com Cloud ALM menjelaskan cara mengonfigurasi KPI kustom untuk kebutuhan monitoring operasi.
> **Source**: help.sap.com, "Setting Up Custom KPIs — SAP Cloud ALM" (docs/cloud-alm/applicationhelp/custom-kpis) (referensi; halaman JS-rendered, tidak ter-scrape penuh — diakses 2026-08-11)
> **Confidence**: medium (keberadaan fitur custom KPI VERIFIED lewat judul & indeks; detail langkah tidak ter-fetch — jangan kutip langkah spesifik)

> **Claim**: SAP ECC / Business Suite 7 berakhir mainstream maintenance akhir 2027, dengan extended maintenance opsional hingga akhir 2030.
> **Number/specific**: Mainstream maintenance untuk SAP Business Suite 7 (termasuk ECC 6.0 EHP 6–8) berakhir 31 Desember 2027; extended maintenance opsional (estimasi +2 poin persentase biaya) hingga 31 Desember 2030. EHP 0–5 sudah berakhir Desember 2025.
> **Source**: SAP support "Maintenance Strategy" (support.sap.com/en/offerings-programs/strategy.html), dikonfirmasi via WebSearch (diakses 2026-08-11)
> **Confidence**: high (dates dikonfirmasi; SAP menyatakan tidak bergeser)

> **Claim**: Clean core adalah kondisi berkelanjutan, bukan proyek sekali — core bisa kembali "kotor" pasca go-live.
> **Number/specific**: KPI ditampilkan dengan tren (3 bulan) justru untuk memantau apakah technical debt bertambah/berkurang dari waktu ke waktu; Operations View adalah "daily report" — menegaskan sifat monitoring berkelanjutan.
> **Source**: SAP Community ba-p/14257352 + ba-p/14131775 (diakses 2026-08-11)
> **Confidence**: high (framing didukung desain fitur SAP; bukan klaim numerik)

## Solution focus + Soltius anchor (from product_matrix.md)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| RISE with SAP Methodology Dashboard di SAP Cloud ALM (KPI clean core) | Technical Debt Score, Clean Core Share, Execution of Customer Objects, Business Modifications, Unused Customer Objects, Detailed Level Overview (A–D); tren 3 bulan | H2 #2 (daftar KPI) + H2 #3 (sumber data) | — (educational, vendor-neutral) |
| SAP Cloud ALM (ALM cloud-native; Operations View; custom KPI) | Untuk RISE/GROW/cloud SAP; entitlement juga via Enterprise Support; di atas SAP BTP | H2 #3 | — |
| ABAP Test Cockpit (ATC) | QA toolset; hasil di-impor ke dashboard; central check untuk on-premise | H2 #3 + H2 #5 | — |
| SAP Readiness Check + Custom Code Migration app / Analyze Custom Code app | Inventarisasi & analisis used/unused custom code; Simplification Database | H2 #3 | — |
| **Application Management Services (AMS) pasca go-live** + ERP Strategy/Enhancement | Soltius **memantau & menindaklanjuti** KPI clean core setelah proyek; menjaga sistem sehat jangka panjang | **Closing CTA** + 1 aside opsional di H2 #1 | **AMS pasca go-live** (product_matrix: "Ongoing ownership") + SAP Platinum Partner via United VARs |

Reminder: Soltius **mengimplementasikan/memigrasi/mendukung** teknologi ini — tidak membangunnya. Maks 2–3 self-mention (idealnya: 1 aside di H2 #1 + 1 closing CTA).

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **SAP Community — "New Clean Core Extensibility KPIs arrive on the RISE with SAP Dashboard" (blog resmi SAP, 2025)** — https://community.sap.com/t5/enterprise-resource-planning-blog-posts-by-sap/new-clean-core-extensibility-kpis-arrive-on-the-rise-with-sap-dashboard/ba-p/14257352 — *what it backs*: nama & definisi resmi KPI clean core (Technical Debt Score, Clean Core Share, dll), Clean Core Level Concept A–D, tren 3 bulan, impor ATC. **Sumber utama artikel.**
2. **help.sap.com — "Setting Up Custom KPIs — SAP Cloud ALM"** — https://help.sap.com/docs/cloud-alm/applicationhelp/custom-kpis — *what it backs*: kemampuan custom KPI di SAP Cloud ALM untuk monitoring operasi.
3. **SAP Community — "Introducing the New RISE with SAP Methodology Dashboard: Operations View" (blog resmi SAP)** — https://community.sap.com/t5/enterprise-resource-planning-blog-posts-by-sap/introducing-the-new-rise-with-sap-methodology-dashboard-operations-view/ba-p/14131775 — *what it backs*: sifat "daily report", metrik dimensi Operations, monitoring berkelanjutan.
4. **SAP Community — "Custom code analysis for SAP S/4HANA with SAP Fiori App Custom Code Migration" (blog resmi SAP)** — https://community.sap.com/t5/enterprise-resource-planning-blog-posts-by-sap/custom-code-analysis-for-sap-s-4hana-with-sap-fiori-app-custom-code/ba-p/13402751 — *what it backs*: fungsi Custom Code Migration/Analyze Custom Code app, basis remote ATC.
5. **SAP Community — "Enhanced Custom Code Analysis in SAP Readiness Check" (blog resmi SAP)** — https://community.sap.com/t5/enterprise-resource-planning-blog-posts-by-sap/enhanced-custom-code-analysis-in-sap-readiness-check-for-sap-s-4hana/ba-p/13580469 — *what it backs*: peran SAP Readiness Check + integrasi temuan ATC + Simplification Database.
6. **SAP support — "Maintenance Strategy" (SAP Business Suite 7 / ECC dates)** — https://support.sap.com/en/offerings-programs/strategy.html — *what it backs*: mainstream 2027, extended 2030.

Priority order terpenuhi: seluruh sumber utama adalah **SAP official** (community.sap.com blog by SAP, help.sap.com, support.sap.com).

## FAQ Q&As (7 drafted, Bahasa Indonesia)

### Bagaimana cara memantau kepatuhan clean core?
Kepatuhan clean core dipantau lewat KPI resmi di **RISE with SAP Methodology Dashboard** di dalam **SAP Cloud ALM**. Dashboard menampilkan metrik seperti **Technical Debt Score** dan **Clean Core Share** beserta tren tiga bulan, sehingga tim bisa melihat apakah objek kustom bertambah atau membaik. Datanya diperkaya dengan impor hasil **ABAP Test Cockpit (ATC)**. Intinya: pantau tren berkelanjutan, bukan sekadar skor sekali.

### Apa itu SAP Cloud ALM?
**SAP Cloud ALM** adalah produk application lifecycle management cloud-native dari SAP untuk pelanggan RISE with SAP, GROW with SAP, dan cloud SAP lainnya. Dibangun di atas SAP BTP dan di-host SAP sebagai SaaS, ia mencakup fase implementasi (task plan, Fit-to-Standard) dan operasi (business process monitoring, health check). Entitlement-nya umumnya sudah termasuk dalam langganan cloud SAP dan kontrak Enterprise Support.

### Apa itu Technical Debt Score di SAP?
**Technical Debt Score** adalah KPI clean core di dashboard RISE with SAP yang memberi satu skor teragregasi mewakili technical debt dari seluruh objek kustom di sistem. Skor ini menilai kebutuhan modernisasi berdasarkan kepatuhan clean core dan ditampilkan dengan tren tiga bulan, sehingga Anda tahu apakah utang teknis sedang menumpuk atau berkurang. Fokuslah pada arah tren, bukan angka mutlaknya.

### Apa itu Clean Core Share?
**Clean Core Share** adalah KPI yang mengukur porsi ekstensi Anda yang "patuh" — yaitu bagaimana objek kustom tersebar di seluruh **Level A–D** (Clean Core Level Concept). Semakin besar porsi yang berada di level upgrade-safe (A/B), semakin bersih core Anda. KPI ini memberi gambaran cepat kualitas keseluruhan lanskap ekstensi, dan dipantau bersama Technical Debt Score di SAP Cloud ALM.

### Alat apa yang dipakai untuk mengukur custom code SAP?
Tiga alat SAP utama saling melengkapi: **ABAP Test Cockpit (ATC)** menjalankan pemeriksaan kualitas otomatis atas custom code (hasilnya bisa di-impor ke dashboard clean core); **SAP Readiness Check** menampilkan analisis custom code untuk kesiapan upgrade S/4HANA; dan **Custom Code Migration app / Analyze Custom Code app** menginventarisasi serta menganalisis pemakaian (used/unused) objek kustom. Ketiganya jadi basis remediasi dan pemantauan.

### Apakah KPI clean core tersedia untuk sistem on-premise?
Dashboard KPI clean core (Technical Debt Score, Clean Core Share) melekat pada **RISE with SAP Methodology Dashboard**, jadi terikat konteks RISE. Namun tim **on-premise tetap bisa mengukur kualitas custom code** memakai **ABAP Test Cockpit (ATC)** lewat central check system, plus SAP Readiness Check dan Analyze Custom Code app — tanpa dashboard RISE. Jadi Anda kehilangan dashboard siap-pakai, bukan kemampuan mengukurnya.

### Seberapa sering KPI clean core harus ditinjau?
KPI ini dirancang untuk pemantauan berkelanjutan, bukan audit tahunan. Dashboard menampilkan **tren tiga bulan** dan Operations View berfungsi sebagai "laporan harian", jadi tinjau secara berkala (mis. bulanan) dan cermati perubahan tren setelah setiap gelombang perubahan atau go-live. Yang penting bukan angka satu hari, melainkan apakah utang teknis konsisten menurun atau diam-diam menanjak.

## Data tables for the writer

### Tabel KPI clean core → arti → pemilik peran → tindakan (H2 #4)
> Catatan penting untuk writer: kolom "pemilik peran" adalah **saran praktik**, bukan penetapan resmi SAP. Kolom "sinyal & tindakan" berbasis **tren**, BUKAN ambang angka resmi (SAP belum menerbitkan ambang "sehat/tidak sehat" — jangan mengarang angka).

| KPI (nama resmi) | Apa yang diukur | Pemilik peran (saran) | Sinyal & tindakan tipikal (berbasis tren) |
|---|---|---|---|
| Technical Debt Score | Skor agregat technical debt seluruh objek kustom | CIO / Kepala Arsitektur | Tren naik → prioritaskan remediasi/modernisasi; jadikan agenda review berkala |
| Clean Core Share | Porsi ekstensi patuh (distribusi Level A–D) | Arsitek / Lead ABAP | Porsi Level C/D membesar → arahkan pengembangan baru ke Level A (ABAP Cloud/released API) |
| Execution of Customer Objects | Frekuensi eksekusi objek kustom vs standar | Tim Basis / AMS | Objek kustom dieksekusi intensif → tinjau apakah bisa diganti standar/konfigurasi |
| Business Modifications | Modifikasi warisan yang mengancam upgrade | Arsitek / Basis | Ada modifikasi core → target remediasi sebelum upgrade besar |
| Unused Customer Objects | Objek kustom tak terpakai | Tim AMS | Tinggi & konsisten → kandidat dibersihkan (hati-hati objek musiman — lihat edge case) |
| Detailed Level Overview (A–D) | Distribusi ekstensi per level clean core | Arsitek | Pantau pergeseran distribusi dari waktu ke waktu, bukan snapshot |

### Tabel sumber data: dari mana angka berasal (H2 #3)
| Alat SAP | Fungsi utama | Kontribusi ke monitoring clean core |
|---|---|---|
| SAP Cloud ALM (RISE Methodology Dashboard) | Pusat operasi & KPI clean core | Menampilkan Technical Debt Score, Clean Core Share, dll + tren 3 bulan |
| ABAP Test Cockpit (ATC) | QA & pemeriksaan kepatuhan custom code | Hasil check di-impor untuk memberi angka kualitas kode; central check untuk on-premise |
| SAP Readiness Check | Analisis kesiapan upgrade S/4HANA | Custom Code Analysis + Simplification Database |
| Custom Code Migration / Analyze Custom Code app | Inventarisasi & analisis pemakaian custom code | Basis used/unused untuk keputusan remediasi/pensiun objek |

## Edge cases & nuance

- **"Mengejar angka hijau" itu jebakan.** KPI bisa "di-game": menghapus objek agar Unused turun, atau menahan pengembangan agar Technical Debt Score stabil, tanpa benar-benar memperbaiki maintainability. Tekankan konteks bisnis > skor.
- **Unused ≠ selalu buang.** Objek yang tampak "unused" bisa musiman (mis. proses tutup tahun, pelaporan pajak tahunan, kampanye periodik). Jendela pengukuran pendek bisa menyesatkan — verifikasi siklus pemakaian sebelum menghapus.
- **Dashboard vs kemampuan mengukur.** Yang eksklusif RISE adalah *dashboard siap-pakai*, bukan kemampuan mengukur clean core. On-premise punya ATC/Readiness Check/Analyze Custom Code — hanya perlu merakit sendiri, tanpa tren 3-bulan otomatis.
- **Impor ATC manual.** Karena hasil ATC di-impor (bukan real-time streaming di semua kasus), angka dashboard sebaik kedisiplinan impor terakhir. Data bisa "basi" jika impor jarang dilakukan.
- **Assessment sekali ≠ monitoring berkelanjutan.** Bedakan dari maturity assessment pra-migrasi (5 dimensi, titik-waktu). Artikel ini soal instrumen operasional yang hidup pasca go-live.
- **Level A–D adalah label kepatuhan, bukan larangan.** Level C/D (mis. custom code klasik) kadang sah untuk kebutuhan nyata; tujuannya menahan pertumbuhannya dan mengarahkan yang baru ke Level A, bukan nol-kan semalam.

## Flags (open factual risk)

- ⚠️ **Bulan/tanggal pasti peluncuran KPI**: dikonfirmasi "2025" oleh beberapa sumber, tapi tanggal persis blog tidak ter-fetch (community.sap.com 403). → Rekomendasi: tulis "diperkenalkan pada 2025", jangan sebut bulan spesifik.
- ⚠️ **Definisi persis Level A/B/C/D**: konsep A–D VERIFIED sebagai penamaan resmi 2025, tetapi definisi tepat tiap huruf (mis. "A = released public API / ABAP Cloud … D = modifikasi core") berasal dari sintesis komunitas, belum di-fetch dari help.sap.com pada run ini. → Rekomendasi: bila artikel merinci tiap level, gunakan bahasa umum ("dari yang paling upgrade-safe hingga modifikasi core") atau atribusikan; hindari klaim definisi kaku per huruf tanpa verifikasi help.sap.com.
- ⚠️ **Ambang angka "sehat/tidak sehat"**: TIDAK ada angka resmi. → JANGAN mengarang ambang. Bila memberi contoh, labeli "sebagai ilustrasi/rule-of-thumb" dan tekankan tren.
- ⚠️ **Cakupan RISE vs on-premise untuk dashboard KPI**: KPI clean core = dashboard metodologi RISE (terikat RISE). SAP Cloud ALM lebih luas (Enterprise Support/cloud). → Rekomendasi: bedakan tegas "dashboard KPI clean core (RISE)" vs "SAP Cloud ALM (lebih luas)" agar tidak salah klaim tim on-premise otomatis dapat dashboard ini.
- ⚠️ **help.sap.com custom-kpis**: hanya judul/indeks terverifikasi (halaman JS-rendered, tidak ter-scrape penuh). → Jangan kutip langkah konfigurasi spesifik; cukup nyatakan "SAP Cloud ALM mendukung custom KPI".
- ⚠️ **Penamaan app custom code**: sejak SAP BTP ABAP environment 2508 dipecah jadi "Analyze Custom Code" + "Custom Code Migration". → Sebut keduanya; jangan asumsikan pembaca on-premise punya versi 2508.

## Definition snippet draft (52 words)

> **KPI clean core** adalah sekumpulan metrik resmi SAP — seperti **Technical Debt Score** dan **Clean Core Share** — yang mengukur seberapa bersih dan upgrade-safe kode kustom sebuah sistem S/4HANA. Ditampilkan di **RISE with SAP Methodology Dashboard** dalam **SAP Cloud ALM** dengan tren tiga bulan, KPI ini menjadikan clean core kondisi yang dipantau terus, bukan skor sekali.
