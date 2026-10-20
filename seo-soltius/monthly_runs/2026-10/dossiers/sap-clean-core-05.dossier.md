---
brief_id: "sap-clean-core-05"
researcher_run_date: "2026-10-07"
sources_cited: 8
flags: 7
---

# Research Dossier: Clean Core dan Beban Testing — Strategi Regresi untuk Rilis SAP Cloud Dua Kali Setahun

## TL;DR for the writer

- **Tesis inti terkonfirmasi SAP**: suite regresi pelanggan S/4HANA Cloud = *test script standar yang diberikan SAP* + *automate kustom yang Anda buat sendiri untuk proses unik Anda*. Makin sedikit modifikasi core (makin tinggi clean core level), makin kecil permukaan yang hanya bisa Anda uji sendiri. SAP menguji internal secara menyeluruh sebelum rilis; SAP *sangat menyarankan* pelanggan tetap menjalankan regresi tiap rilis untuk proses bisnisnya.
- **Jadwal rilis Public Edition itu kaku & dikelola SAP**: dua major upgrade per tahun — **Februari dan Agustus** (dinamai YYMM, mis. 2402). Upgrade *fixed dan mandatory* (konfigurasi + software), dikelola SAP; pelanggan diberi tahu ~6 minggu sebelum upgrade Test System. Di antara major release ada patch/Hot Fix Collection tiap ~2 minggu. (Batasi klaim "dua kali setahun" ke **Public Edition** — Private Edition beda cadence; lihat Flags.)
- **SAP Cloud ALM = tulang punggung test management**, gratis dalam kontrak RISE with SAP (no extra license/hardware/infra). Test Management-nya: Test Preparation, Test Plan, eksekusi manual + otomatis, defect handling. Buat **satu Test Plan untuk regresi lalu reuse** tiap rilis. Tricentis Test Automation embedded di Cloud ALM dan termasuk untuk cloud editions.
- **Alat predelivered**: Test Automation Tool (TAT) jadi bagian integral S/4HANA Cloud, memberi *pre-scripted test automates* untuk sebagian besar proses standar (basis SAP Best Practices). Automate standar di-*Import*/*Synchronize* ke Test Preparation app Cloud ALM dari workspace TAT. **Post Upgrade Test (PUT)** = solusi otomatis untuk scope/design/execute suite regresi tiap upgrade.
- **Risk-based + change-impact + i-TS**: prioritaskan tes berdasarkan kritikalitas bisnis, kompleksitas kustomisasi, frekuensi pakai, stabilitas historis, dampak kegagalan. **Intelligent Test Scoper (i-TS)** merekomendasikan scope PUT optimal (sejak CE 2608 pakai AI). JANGAN mengarang angka "% pengurangan beban tes" — SAP tidak menerbitkan angka itu; jaga klaim tetap kualitatif.

## Core facts (verified)

> **Claim**: SAP S/4HANA Cloud Public Edition menerima dua major upgrade terjadwal per tahun.
> **Number/specific**: dua major release per tahun, pada **Februari dan Agustus**, dinamai tahun+bulan (mis. Release 2402 = Februari 2024).
> **Source**: SAP Community, "FAQ on Upgrading SAP S/4HANA Cloud Public Edition" & "Understand Upgrading and Patching Processes…", community.sap.com (diakses 2026-10-07).
> **Confidence**: high

> **Claim**: Upgrade Public Edition bersifat tetap, wajib, dan dikelola SAP (bukan pelanggan).
> **Number/specific**: upgrade "fixed and mandatory (configuration and software)"; dikelola SAP; pelanggan diberi tahu ~**6 minggu** sebelum upgrade Test System.
> **Source**: SAP Community, "FAQ on Upgrading SAP S/4HANA Cloud Public Edition", community.sap.com (diakses 2026-10-07).
> **Confidence**: high

> **Claim**: Di antara dua major upgrade ada pemutakhiran lebih sering berupa patch/Hot Fix Collection.
> **Number/specific**: patch/Hot Fix Collection (HFC) tiap ~**2 minggu**; fitur non-disruptif kecil dapat diaktifkan pelanggan secara opsional selama enam bulan antar-rilis.
> **Source**: SAP Community, "Understand Upgrading and Patching Processes of SAP S/4HANA Cloud Public Edition", community.sap.com (diakses 2026-10-07).
> **Confidence**: high

> **Claim**: SAP menguji software secara internal berlapis sebelum rilis, tetapi tetap menyarankan pelanggan menjalankan regresi tiap rilis.
> **Number/specific**: "SAP performs thorough internal testing on several levels before releasing"; "SAP strongly recommends running regression tests after every release" untuk menangkap isu sebelum berdampak ke produksi.
> **Source**: SAP Community, "Test your SAP S/4HANA Cloud software", community.sap.com (diakses 2026-10-07).
> **Confidence**: high

> **Claim**: Suite regresi pelanggan menggabungkan test script standar dari SAP dan automate kustom buatan pelanggan. (Ini backbone tesis artikel.)
> **Number/specific**: "Tests can include standard SAP-delivered test scripts as well as custom automates that reflect your unique business processes."
> **Source**: SAP Community (S/4HANA Cloud testing / Test Automation Tool), community.sap.com (diakses 2026-10-07).
> **Confidence**: high

> **Claim**: SAP menyediakan predelivered automated test cases untuk proses standar lewat Test Automation Tool (TAT) yang jadi bagian integral S/4HANA Cloud.
> **Number/specific**: TAT memberi "pre-scripted test processes (test automats) for most of the business processes"; disebut **>300** standard pre-delivered test automates berbasis SAP Best Practices (jumlah tergantung rilis — labeli "lebih dari 300" sebagai acuan).
> **Source**: SAP Community, Test Automation Tool for SAP S/4HANA Cloud, Public Edition, community.sap.com (diakses 2026-10-07).
> **Confidence**: high (keberadaan fitur); medium (angka pasti — release-dependent)

> **Claim**: Automated test case standar dari S/4HANA TAT dapat di-Import/Synchronize ke SAP Cloud ALM untuk dikelola terpusat.
> **Number/specific**: fungsi "Import" membawa standard automated test cases (PUTs) dari S/4HANA TAT workspace; tombol "Synchronize Automated Test Cases" di Test Preparation app Cloud ALM menyinkronkan dari S/4HANA TAT.
> **Source**: SAP Community (SAP Cloud ALM testing user journey / TAT integration), community.sap.com (diakses 2026-10-07).
> **Confidence**: high

> **Claim**: SAP Cloud ALM adalah ALM standar untuk RISE with SAP dan disertakan tanpa biaya tambahan.
> **Number/specific**: "SAP Cloud ALM is included in every RISE with SAP contract at no additional cost"; "no additional license, no additional hardware, no additional infrastructure."
> **Source**: SAP support ALM FAQ (support.sap.com/en/alm) & SAP Community "RISING to New Summits with SAP Cloud ALM" (diakses 2026-10-07).
> **Confidence**: high

> **Claim**: SAP Cloud ALM Test Management mencakup persiapan, perencanaan, eksekusi manual + otomatis, dan penanganan defect; regresi dibuat sebagai Test Plan yang dapat dipakai ulang.
> **Number/specific**: alur Test Preparation → Test Plan → eksekusi; "Create a Test Plan for Regression Tests and reuse it for future regression tests" dengan filter untuk memilih test case tepat.
> **Source**: SAP learning.sap.com (Managing Manual and Automated Tests with SAP Cloud ALM; Post-Upgrade & Regression Testing) + SAP Community testing user journey (diakses 2026-10-07).
> **Confidence**: high

> **Claim**: Tricentis Test Automation for SAP tertanam (embedded) di SAP Cloud ALM dan disertakan untuk cloud editions.
> **Number/specific**: "Tricentis Test Automation is a tool embedded in SAP Cloud ALM"; "included for all customers as part of the Enterprise Support for cloud editions."
> **Source**: SAP Community / SAP support (SAP Cloud ALM test automation), community.sap.com & support.sap.com (diakses 2026-10-07).
> **Confidence**: high

> **Claim**: Strategi risk-based testing memprioritaskan tes berdasarkan faktor risiko, bukan menguji semuanya.
> **Number/specific**: prioritas berdasarkan "business criticality, customization complexity, usage frequency, historical stability, and failure impact."
> **Source**: SAP Community, Test Strategy / regression testing blogs, community.sap.com (diakses 2026-10-07).
> **Confidence**: high (framing metodologis)

> **Claim**: Change/impact analysis mempersempit cakupan regresi ke test case yang terdampak perubahan.
> **Number/specific**: "automating the impact analysis (change analysis) to identify affected test cases, enabling targeted and efficient testing."
> **Source**: SAP Community (S/4HANA Cloud testing strategy), community.sap.com (diakses 2026-10-07).
> **Confidence**: high

> **Claim**: Intelligent Test Scoper (i-TS) merekomendasikan scope Post Upgrade Test (PUT) optimal dan kini berbasis AI.
> **Number/specific**: sejak **SAP S/4HANA Cloud CE 2608**, i-TS mengusulkan scope regresi optimal berbasis AI (standard code changes, process complexity, change-to-touch ratio, historical learning dari rilis sebelumnya).
> **Source**: SAP Community, "AI Powered i-TS (Intelligent Test Scoper) for Post Upgrade Test…", community.sap.com (diakses 2026-10-07).
> **Confidence**: high (fitur baru — labeli sebagai kemampuan terkini/berkembang)

> **Claim**: Post Upgrade Test (PUT) adalah solusi otomatis satu-pintu untuk scope/design/execute suite regresi saat upgrade.
> **Number/specific**: "Post Upgrade Tests (PUT) provides a one stop automated release testing solution to scope, design and execute customer regression suite" untuk release upgrade, update, dan perubahan implementasi.
> **Source**: SAP Community (S/4HANA Cloud testing / PUT), community.sap.com (diakses 2026-10-07).
> **Confidence**: high

> **Claim**: Clean core = menjaga inti tetap standar, bersih, dan upgrade-stable sambil tetap memungkinkan diferensiasi spesifik bisnis.
> **Number/specific**: SAP: keep "the core clean, standard, and upgrade-stable while still enabling business-specific differentiation where it counts."
> **Source**: SAP News, "How to Extend SAP S/4HANA Cloud the Right Way", news.sap.com, Agustus 2025 (diakses 2026-10-07).
> **Confidence**: high

> **Claim**: SAP mengelompokkan ekstensi ke dalam Clean Core Extensibility Levels A–D menurut kepatuhan & stabilitas upgrade.
> **Number/specific**: **A** = fully compliant (public, stable API dengan stability contract; side-by-side di BTP + on-stack ABAP Cloud). **B** = compliant, memakai classic API (umumnya upgrade-stable). **C** = partially compliant, akses objek internal SAP (fleksibel untuk legacy, risiko lebih tinggi). **D** = not recommended (objek/teknik non-recommended; risiko tertinggi, technical debt signifikan).
> **Source**: SAP News, news.sap.com (Agustus 2025) + SAP Community "Clean Core Extensibility Levels" (diakses 2026-10-07).
> **Confidence**: high (naming terkini; sebelumnya model 3-tier — lihat Flags)

> **Claim**: Model ekstensibilitas membedakan side-by-side (BTP) vs on-stack (ABAP Cloud).
> **Number/specific**: side-by-side = aplikasi "scalable, decoupled… run independently from the core" di SAP BTP; on-stack = "tightly integrated, upgrade-stable extensions within the ERP system" via ABAP Cloud.
> **Source**: SAP News, "How to Extend SAP S/4HANA Cloud the Right Way", news.sap.com, Agustus 2025 (diakses 2026-10-07).
> **Confidence**: high

## Solution focus + Soltius anchor (from product_matrix.md)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| **SAP Cloud ALM — Test Management** | ALM standar RISE, gratis dalam kontrak RISE; Test Preparation → Test Plan → eksekusi manual+otomatis → defect; buat Test Plan regresi lalu reuse | H2 #3 & #4 | Application Management Services (AMS) pasca go-live |
| **Test Automation Tool (TAT) + predelivered automates + PUT** | TAT bagian integral S/4HANA Cloud; pre-scripted automates untuk sebagian besar proses standar (>300, release-dependent); PUT = scope/design/execute regresi | H2 #3 | — |
| **Risk-based testing + change impact + i-TS** | prioritas tes per risiko; impact analysis mempersempit scope; i-TS merekomendasikan scope PUT (AI sejak CE 2608) | H2 #4 | — |
| **Clean Core Levels A–D (ringkas)** | A terbersih (BTP side-by-side + ABAP Cloud on-stack); C/D naikkan risiko regresi → makin tinggi level = makin kecil permukaan uji sendiri | H2 #2 | — |
| **Siklus rilis Public Edition** | 2x/tahun (Feb & Agu), fixed & mandatory, dikelola SAP, notif ~6 minggu | H2 #1 | — |
| **Tricentis (embedded) vs alat pihak ketiga (mis. Panaya)** | Tricentis embedded & termasuk untuk cloud editions; Panaya = opsi pelengkap, BUKAN endorsement/wajib | H2 #5 | **SAP Platinum Partner** (closing credibility) |

Reminder: Soltius **mengelola/mendukung** siklus rilis klien lewat AMS — tidak membangun SAP Cloud ALM/TAT. **Maks 2–3 self-mention** Soltius: closing (AMS + SAP Platinum Partner via United VARs) + opsional satu aside di H2 #5. Framing pre-approved: *"…didukung Application Management Services (AMS) pasca go-live"* dan *"Sebagai SAP Platinum Partner melalui United VARs…"* (lihat company_profile.md).

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **SAP News — "How to Extend SAP S/4HANA Cloud the Right Way" (Agustus 2025)** — https://news.sap.com/2025/08/extend-sap-s4hana-cloud-right-way-clean-clear/ — *what it backs*: definisi clean core, Clean Core Extensibility Levels A–D, side-by-side vs on-stack. (Otoritas tertinggi untuk fakta clean core.)
2. **SAP Community — "FAQ on Upgrading SAP S/4HANA Cloud Public Edition"** — https://community.sap.com/t5/enterprise-resource-planning-blog-posts-by-sap/faq-on-upgrading-sap-s-4hana-cloud-public-edition/ba-p/13657921 — *what it backs*: dua upgrade/tahun (Feb/Agu), fixed & mandatory, notif ~6 minggu, patch tiap 2 minggu.
3. **SAP learning.sap.com — Post-Upgrade & Regression Testing for S/4HANA Cloud Public Edition with SAP Cloud ALM** — https://learning.sap.com/courses/implementing-with-sap-cloud-alm/conducting-post-upgrade-and-regression-testing-for-sap-s-4hana-cloud-public-edition — *what it backs*: alur regresi pasca-upgrade dengan Cloud ALM (kursus resmi SAP — juga kompetitor #1 di SERP; pakai sebagai sumber, jangan menyalin).
4. **SAP support — SAP Cloud ALM (ALM standar RISE, test management)** — https://support.sap.com/en/alm/sap-cloud-alm.html — *what it backs*: Cloud ALM sebagai ALM standar RISE, gratis; Tricentis embedded.

*(Pendukung tambahan yang dikutip inline di Core facts: SAP Community "Understand Upgrading and Patching Processes…", "Test your SAP S/4HANA Cloud software", Test Automation Tool blog, dan "AI Powered i-TS…".)*

Priority terjaga: seluruh sumber **SAP official** (news/community/learning/support). Tidak ada blog pihak ketiga yang dijadikan basis fakta.

## FAQ Q&As (7 drafted, Bahasa Indonesia)

### Seberapa sering SAP S/4HANA Cloud di-upgrade?
Untuk S/4HANA Cloud Public Edition, SAP merilis dua major upgrade terjadwal setiap tahun—umumnya Februari dan Agustus—dengan penamaan tahun+bulan (misalnya 2402 untuk Februari 2024). Di antara kedua major release itu, SAP menyalurkan patch atau Hot Fix Collection sekitar setiap dua minggu. Upgrade dikelola SAP dan bersifat wajib, sehingga pelanggan merencanakan pengujian mengikuti kalender tersebut.

### Apa itu regression testing dalam konteks SAP?
Regression testing adalah pengujian untuk memastikan upgrade atau perubahan SAP tidak merusak proses bisnis, konfigurasi, dan ekstensi yang sudah berjalan. Dalam S/4HANA Cloud, SAP sudah menguji software secara internal berlapis sebelum rilis, tetapi SAP tetap sangat menyarankan pelanggan menjalankan regresi atas proses bisnisnya sendiri setiap rilis—agar broken process, integrasi gagal, atau celah kepatuhan tertangkap sebelum masuk produksi.

### Apakah clean core benar-benar mengurangi beban testing?
Secara prinsip, ya—meski SAP tidak menerbitkan angka pasti. Logikanya: proses standar sudah diuji SAP dan punya predelivered automated test, sedangkan kustomisasi/ekstensi hanya bisa Anda uji sendiri. Makin bersih core Anda (makin banyak ekstensi di Clean Core Level A/B, bukan C/D), makin kecil permukaan berisiko yang harus Anda regresi manual tiap upgrade. Clean core mengecilkan permukaan uji, bukan menghapusnya.

### Apa itu SAP Cloud ALM?
SAP Cloud ALM adalah solusi application lifecycle management berbasis cloud dari SAP dan merupakan ALM standar untuk RISE with SAP—disertakan tanpa biaya tambahan dalam kontrak RISE (tanpa lisensi, hardware, atau infrastruktur ekstra). Untuk testing, Test Management-nya menyediakan Test Preparation, Test Plan, eksekusi tes manual dan otomatis, serta penanganan defect, dan menjadi tempat terpusat mengelola regresi pasca-upgrade.

### Apakah SAP menyediakan test case otomatis untuk proses standar?
Ya. Test Automation Tool (TAT) adalah bagian integral S/4HANA Cloud dan memberikan pre-scripted automated test untuk sebagian besar proses standar berbasis SAP Best Practices (disebut lebih dari 300 test automate, jumlah bergantung rilis). Test case standar ini dapat di-import atau disinkronkan ke Test Preparation app di SAP Cloud ALM, sementara proses kustom Anda otomasi atau uji sendiri.

### Apakah perlu alat test automation pihak ketiga seperti Panaya?
Tidak wajib. SAP sudah menyertakan TAT di S/4HANA Cloud dan menanamkan Tricentis Test Automation di SAP Cloud ALM untuk cloud editions. Alat pihak ketiga seperti Panaya bersifat pelengkap—bisa membantu skenario change-impact atau landscape kompleks, tetapi bukan prasyarat dan bukan endorsement SAP. Mulailah dari kapabilitas bawaan Cloud ALM + TAT sebelum menilai perlu-tidaknya alat tambahan.

### Bisakah tanggal upgrade S/4HANA Cloud Public Edition ditunda?
Pada praktiknya tidak untuk Public Edition: upgrade terjadwal, dikelola SAP, dan bersifat wajib (konfigurasi dan software). Pelanggan biasanya diberi tahu sekitar enam minggu sebelum sistem Test di-upgrade, lalu produksi menyusul. Karena tanggalnya kaku, strategi yang realistis adalah menyiapkan regresi berbasis risiko agar tuntas sebelum tanggal rilis—bukan berharap jadwal digeser.

## Data tables for the writer

### Tabel 1 — "Siapa menguji apa": membagi beban tes antara SAP dan Anda
| Jenis objek | Siapa menyediakan/menjalankan tes | Tingkat risiko regresi | Frekuensi uji disarankan |
|---|---|---|---|
| Proses standar (unmodified best-practice) | SAP uji internal + predelivered automated test (TAT) yang Anda jalankan | Rendah | Tiap rilis via PUT/automate standar; scoping i-TS |
| Konfigurasi (Customizing dalam batas standar) | Anda (tim/AMS), pakai automate standar sebagai basis | Rendah–sedang | Tiap rilis, fokus proses kritis |
| Key-user / in-app extension (on-stack, ABAP Cloud — Level A/B) | Anda otomasi/uji sendiri | Sedang | Tiap rilis bila proses terdampak |
| Side-by-side extension (SAP BTP / SAP Build — Level A) | Anda uji sendiri (decoupled, relatif stabil) | Sedang | Saat API/proses terkait berubah |
| Ekstensi akses objek internal / non-recommended (Level C/D) | Anda uji penuh + pantau changelog | Tinggi | Tiap rilis, prioritas tertinggi |
| Integrasi (API, iFlow, pihak ketiga) | Anda uji end-to-end | Sedang–tinggi | Tiap rilis bila endpoint/skema berubah |
| Laporan/dashboard (mis. SAP Analytics Cloud) bergantung data proses | Anda uji bila proses sumber berubah | Sedang | Saat proses sumber tersentuh upgrade |

### Tabel 2 — Siklus rilis & pemutakhiran S/4HANA Cloud Public Edition
| Jenis pemutakhiran | Frekuensi | Sifat | Catatan |
|---|---|---|---|
| Major upgrade (release) | 2×/tahun (Feb & Agu) | Wajib, dikelola SAP | Dinamai YYMM (mis. 2402); notif ~6 minggu sebelum Test System |
| Patch / Hot Fix Collection (HFC) | ~tiap 2 minggu | Dikelola SAP | Perbaikan antar major release |
| Fitur non-disruptif | Berkala (6 bulan antar-rilis) | Opsional diaktifkan pelanggan | Tidak memaksa perubahan |

### Tabel 3 — Clean Core Extensibility Levels A–D vs risiko regresi (ringkas)
| Level | Ringkas | API/teknik | Risiko upgrade/regresi |
|---|---|---|---|
| A | Paling bersih | Public stable API + stability contract; BTP side-by-side & ABAP Cloud on-stack | Terendah |
| B | Compliant | Tambahan classic API (umumnya upgrade-stable) | Rendah |
| C | Partially compliant | Akses objek internal SAP (legacy) | Lebih tinggi — butuh pantau changelog |
| D | Not recommended | Objek/teknik non-recommended, modifikasi | Tertinggi — technical debt signifikan |

## Edge cases & nuance

- **"Dua kali setahun" hanya untuk Public Edition.** S/4HANA Cloud Private Edition punya cadence berbeda (umumnya rilis tahunan dengan jendela penerapan dan kewajiban mengambil upgrade dalam periode dukungan). Jaga klaim spesifik ke Public Edition agar tidak keliru.
- **Clean core mengecilkan, bukan menghapus, beban tes.** Bahkan dengan core 100% bersih, pelanggan tetap menanggung regresi atas konfigurasi, ekstensi, dan integrasi miliknya—dan SAP tetap menyarankan regresi tiap rilis. Hindari janji "tidak perlu testing".
- **SAP juga menguji — bukan berarti pelanggan bebas.** Pembagian beban itu nyata, tetapi tanggung jawab akhir atas proses bisnis pelanggan ada di pelanggan. Framing yang akurat: SAP menanggung standar, Anda menanggung yang Anda ubah/ekstensikan.
- **Otomasi bukan tujuan.** Change-impact + risk-based + i-TS justru mengecilkan scope; mengejar 100% otomasi untuk proses jarang berubah/volume rendah sering boros. Automate yang paling berharga = proses kritis & berulang.
- **i-TS berbasis AI itu kemampuan baru (CE 2608, 2026).** Bagus untuk E-E-A-T "terkini", tapi labeli sebagai fitur yang berkembang—jangan tulis seolah sudah lama standar.
- **Tricentis vs Panaya.** Tricentis embedded & disertakan SAP untuk cloud editions; Panaya pihak ketiga. Posisikan Panaya sebagai opsi, bukan endorsement/wajib (sesuai brief).

## Flags (open factual risk)

- ⚠️ **"Umumnya dua kali setahun"**: untuk Public Edition faktanya tegas 2×/tahun (Feb/Agu). Kata "umumnya" tetap aman karena Private Edition berbeda → **rekomendasi**: tulis "untuk S/4HANA Cloud Public Edition, umumnya dua kali setahun (Februari & Agustus)"—sebutkan edition secara eksplisit.
- ⚠️ **Angka ">300 predelivered automate"**: jumlah tergantung rilis & scope → **rekomendasi**: frasa "lebih dari 300" atau "ratusan" dengan sumber SAP, jangan patok angka pasti.
- ⚠️ **"i-TS berbasis AI sejak CE 2608"**: penamaan rilis & timing fitur bisa bergeser → **rekomendasi**: attribute ke SAP dan labeli "kemampuan terbaru"; aman juga menulis i-TS tanpa menegaskan versi bila ragu.
- ⚠️ **Penamaan "Clean Core Levels A–D"**: SAP berevolusi dari model 3-tier ke level A–D (dikomunikasikan 2025) → **rekomendasi**: perlakukan ringkas, sebut "menurut kerangka clean core extensibility levels SAP (A–D)"; jangan mendalami (overlap dengan 2026-07-2-05).
- ⚠️ **Angka "% pengurangan beban tes"**: TIDAK ADA angka resmi SAP → **rekomendasi**: jaga klaim kualitatif ("mengecilkan permukaan uji"); jangan mengarang persentase (eksplisit diminta di brief).
- ⚠️ **Nama produk/fitur SAP (TAT, PUT, i-TS, Test Preparation app, Cloud ALM, Tricentis)**: cepat berubah → **rekomendasi**: gunakan nama penuh pada penyebutan pertama, attribute ke SAP, akses 2026-10-07.
- ⚠️ **ECC end-of-maintenance (konteks on-premise di H2 #1)**: bila writer mengontraskan on-prem lama, dates yang berlaku = mainstream maintenance ECC berakhir **2027** (extended berbayar hingga **2030**) → **rekomendasi**: ini konteks, bukan inti; bila dipakai, attribute ke SAP dan jangan jadikan fokus (sudah ada di cluster migrasi).

## Definition snippet draft (48 words)

> **Regression testing dalam konteks clean core** adalah pengujian untuk memastikan upgrade SAP S/4HANA Cloud tidak merusak konfigurasi dan ekstensi Anda. Karena proses standar sudah diuji SAP dan punya predelivered automated test, makin bersih core Anda—makin banyak ekstensi di level clean core teratas—makin kecil permukaan yang harus Anda uji sendiri tiap rilis.
