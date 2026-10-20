---
title: "Clean Core dan Beban Testing: Strategi Regresi untuk Rilis SAP Cloud Dua Kali Setahun"
meta_title: "SAP Clean Core: Pangkas Beban Testing Rilis Cloud"
meta_description: "SAP Clean Core memperkecil beban regression testing saat upgrade S/4HANA Cloud. Strategi tes berbasis risiko dengan SAP Cloud ALM dan tabel siapa menguji apa."
slug: "sap-clean-core-beban-testing-regresi-rilis-cloud"
language: "id"
primary_keyword: "SAP Clean Core"
secondary_keywords:
  - "regression testing SAP"
  - "SAP Cloud ALM"
  - "manajemen tes"
  - "S/4HANA Cloud Public Edition upgrade"
  - "test automation"
  - "risk-based testing"
  - "release cycle dua kali setahun"
  - "predelivered automated test"
  - "Application Management Services (AMS)"
  - "change impact analysis"
  - "upgrade-safe extension"
  - "Clean Core Levels A-D"
internal_links:
  - url: "https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide"
    anchor: "SAP Clean Core"
  - url: "https://www.soltius.co.id/id/blog/low-code-and-no-code-platforms"
    anchor: "platform low-code SAP Build"
  - url: "https://www.soltius.co.id/id/blog/business-intelligence"
    anchor: "business intelligence"
external_citations:
  - url: "https://news.sap.com/2025/08/extend-sap-s4hana-cloud-right-way-clean-clear/"
    context: "Definisi clean core dan Clean Core Extensibility Levels A-D (side-by-side di BTP vs on-stack ABAP Cloud)"
  - url: "https://community.sap.com/t5/enterprise-resource-planning-blog-posts-by-sap/faq-on-upgrading-sap-s-4hana-cloud-public-edition/ba-p/13657921"
    context: "Siklus upgrade S/4HANA Cloud Public Edition: dua kali setahun (Feb & Agu), fixed & mandatory, notifikasi ~6 minggu, patch tiap ~2 minggu"
brief_id: "sap-clean-core-05"
target_word_count: 1750
publish_month: "2026-10"
word_count: 1861
---

# Clean Core dan Beban Testing: Strategi Regresi untuk Rilis SAP Cloud Dua Kali Setahun

Di dunia on-premise lama, sebuah upgrade besar bisa ditunda berbulan-bulan sampai tim IT merasa benar-benar siap, dan *regression testing* (uji regresi untuk memastikan perubahan tidak merusak yang sudah berjalan) ikut mundur mengikuti kesiapan itu. Di SAP S/4HANA Cloud, logika itu runtuh. Untuk Public Edition, SAP merilis upgrade terjadwal dua kali setahun dengan tanggal yang tidak bisa Anda geser. Setiap rilis berpotensi menyentuh konfigurasi dan ekstensi Anda, sehingga beban pengujian berubah menjadi rutinitas berkala, bukan proyek sesekali. Di sinilah prinsip [SAP Clean Core](https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide) punya argumen operasional yang jarang dinyatakan terang-terangan: makin bersih inti sistem Anda, makin kecil permukaan yang harus Anda uji sendiri.

> **Ringkas:** *Regression testing* dalam konteks clean core adalah pengujian untuk memastikan upgrade SAP S/4HANA Cloud tidak merusak konfigurasi dan ekstensi Anda. Karena proses standar sudah diuji SAP dan punya *predelivered automated test* (skrip tes otomatis bawaan), makin bersih inti sistem Anda (makin banyak ekstensi berada di level clean core teratas), makin kecil permukaan yang harus Anda uji sendiri tiap rilis.

Yang dibahas di sini bukan teori clean core, melainkan konsekuensi praktisnya di meja QA: bagaimana membagi beban tes dengan SAP, memilih apa yang diuji berdasarkan risiko, dan memakai SAP Cloud ALM agar kalender dua kali setahun itu berjalan tanpa kejutan.

## Mengapa siklus rilis SAP Cloud mengubah cara Anda menguji?

Untuk S/4HANA Cloud Public Edition, SAP merilis dua upgrade besar terjadwal setiap tahun, umumnya pada Februari dan Agustus, yang bersifat wajib dan dikelola SAP, bukan pelanggan. Tanggalnya kaku. Akibatnya, *regression testing* berubah dari proyek sesekali menjadi rutinitas berkala yang harus tuntas sebelum setiap rilis mendarat di produksi.

Bandingkan dengan masa ECC. Upgrade jarang, direncanakan sebagai proyek tersendiri, dan jadwalnya menyesuaikan kesiapan internal (sebagai catatan, mainstream maintenance SAP ECC berakhir 2027 dengan dukungan diperpanjang berbayar hingga 2030, menurut panduan SAP). Begitu pindah ke cloud publik, kendalinya berpindah. Menurut SAP, major release dinamai dengan format tahun dan bulan (misalnya 2402 untuk Februari 2024), pelanggan diberi tahu sekitar enam minggu sebelum sistem Test di-upgrade, dan di antara dua rilis besar ada patch atau Hot Fix Collection kira-kira tiap dua minggu.

Ada pula fitur non-disruptif yang bisa Anda aktifkan sendiri secara opsional selama enam bulan antar-rilis. Artinya ritme perubahan jauh lebih padat daripada era lama, dan uji regresi tidak bisa lagi diperlakukan sebagai acara tahunan.

Satu hal yang sering disalahpahami: SAP memang menguji software-nya secara internal berlapis sebelum merilis. Tetapi SAP tetap sangat menyarankan setiap pelanggan menjalankan regresi atas proses bisnisnya sendiri pada tiap rilis, supaya proses yang putus, integrasi yang gagal, atau celah kepatuhan tertangkap sebelum berdampak ke produksi. SAP menanggung standar; Anda menanggung yang Anda ubah.

Di titik inilah clean core masuk. Menurut SAP, clean core berarti menjaga inti tetap standar, bersih, dan stabil saat upgrade, sambil tetap memungkinkan diferensiasi spesifik bisnis di tempat yang tepat (SAP News, Agustus 2025). Makin sedikit Anda memodifikasi inti, makin sedikit pula yang harus Anda khawatirkan tiap kali SAP mengirim rilis baru.

## Apakah clean core benar-benar mengurangi beban testing?

Secara prinsip ya, meski SAP tidak menerbitkan angka persentase resmi dan kami tidak menyarankan mengarangnya. Logikanya bertumpu pada pembagian kerja: proses standar sudah diuji SAP dan punya *predelivered automated test*, sedangkan kustomisasi dan ekstensi hanya bisa Anda uji sendiri. Makin banyak ekstensi Anda berada di level clean core teratas, bukan yang menembus objek internal SAP, makin kecil permukaan berisiko yang harus Anda regresi manual.

Cara paling jelas melihat ini adalah lewat kerangka Clean Core Extensibility Levels (A sampai D) yang dikomunikasikan SAP. Level menentukan seberapa patuh dan stabil sebuah ekstensi saat upgrade, dan karenanya seberapa besar risiko regresi yang ia bawa.

| Level | Ringkas | API/teknik | Risiko upgrade/regresi |
|---|---|---|---|
| A | Paling bersih | Public stable API dengan *stability contract*; BTP *side-by-side* dan ABAP Cloud *on-stack* | Terendah |
| B | Compliant | Tambahan classic API (umumnya tetap stabil saat upgrade) | Rendah |
| C | Partially compliant | Akses objek internal SAP (fleksibel untuk legacy) | Lebih tinggi, perlu pantau *changelog* |
| D | Not recommended | Objek/teknik non-recommended, modifikasi | Tertinggi, *technical debt* signifikan |

Perbedaan praktisnya terletak pada dua pola ekstensi. *Side-by-side* adalah aplikasi yang berjalan terpisah dari inti di SAP BTP, relatif terdekopel, dan biasanya dibangun di atas [platform low-code SAP Build](https://www.soltius.co.id/id/blog/low-code-and-no-code-platforms). *On-stack* adalah ekstensi yang menempel di dalam sistem ERP lewat ABAP Cloud, tetap terikat tetapi dirancang agar aman di-upgrade. Keduanya Anda uji sendiri, tetapi ekstensi di Level A dan B jauh lebih kecil kemungkinannya patah ketimbang yang ada di Level C atau D.

Jangan berlebihan menjanjikan di sini. Clean core mengecilkan permukaan uji, bukan menghapusnya. Bahkan dengan inti yang 100% bersih, Anda tetap menanggung regresi atas konfigurasi, ekstensi, dan integrasi milik Anda, dan tanggung jawab akhir atas proses bisnis tetap ada di tangan Anda. Yang ditawarkan clean core bukan "bebas testing", melainkan beban yang lebih kecil dan lebih terprediksi.

## Siapa menguji apa: membagi beban tes antara SAP dan Anda

Pembagiannya sederhana dalam prinsip. SAP menyediakan dan menguji proses standar lewat *predelivered automated test*, sedangkan Anda menguji apa pun yang Anda ubah: konfigurasi, ekstensi key-user, ekstensi *side-by-side*, dan integrasi. Makin tinggi risiko dan kustomisasi sebuah objek, makin sering ia perlu masuk ke suite regresi Anda.

Tabel berikut memetakan beban itu per jenis objek, sehingga tim bisa menyepakati siapa bertanggung jawab atas apa sebelum rilis berikutnya tiba.

| Jenis objek | Siapa menyediakan/menjalankan tes | Risiko regresi | Frekuensi uji disarankan |
|---|---|---|---|
| Proses standar (best-practice tanpa modifikasi) | SAP uji internal + *predelivered automated test* yang Anda jalankan | Rendah | Tiap rilis via automate standar; scoping i-TS |
| Konfigurasi (dalam batas standar) | Anda (tim/AMS), berbasis automate standar | Rendah–sedang | Tiap rilis, fokus proses kritis |
| Ekstensi key-user / in-app (ABAP Cloud, Level A/B) | Anda otomasi/uji sendiri | Sedang | Tiap rilis bila proses terdampak |
| Ekstensi *side-by-side* (SAP BTP / SAP Build, Level A) | Anda uji sendiri (terdekopel, relatif stabil) | Sedang | Saat API/proses terkait berubah |
| Ekstensi akses objek internal (Level C/D) | Anda uji penuh + pantau *changelog* | Tinggi | Tiap rilis, prioritas tertinggi |
| Integrasi (API, iFlow, pihak ketiga) | Anda uji *end-to-end* | Sedang–tinggi | Tiap rilis bila endpoint/skema berubah |
| Laporan/dashboard yang bergantung data proses | Anda uji bila proses sumber berubah | Sedang | Saat proses sumber tersentuh upgrade |

Untuk sisi standar, SAP menyediakan Test Automation Tool (TAT) sebagai bagian integral S/4HANA Cloud. TAT memberi *pre-scripted automated test* untuk sebagian besar proses standar berbasis SAP Best Practices (disebut lebih dari 300 automate, dengan jumlah bergantung rilis, jadi perlakukan sebagai acuan, bukan angka pasti). Test case standar ini dapat di-*import* atau disinkronkan ke aplikasi Test Preparation di SAP Cloud ALM, sementara Post Upgrade Test (PUT) menyediakan solusi otomatis untuk menetapkan cakupan, mendesain, dan mengeksekusi suite regresi saat upgrade.

Baris terakhir tabel layak diperhatikan tim data. Laporan dan dashboard, termasuk yang dibangun di atas solusi *business intelligence* seperti [business intelligence](https://www.soltius.co.id/id/blog/business-intelligence) berbasis SAP Analytics Cloud, ikut masuk cakupan regresi jika bergantung pada proses atau skema data yang berubah oleh upgrade. Angka di dashboard yang diam-diam bergeser setelah rilis sering lebih berbahaya daripada error yang kelihatan.

## Strategi regresi berbasis risiko dengan SAP Cloud ALM: langkah per rilis

Alih-alih menguji semuanya, pilih tes berdasarkan risiko lalu kelola di satu tempat. SAP Cloud ALM adalah solusi *application lifecycle management* berbasis cloud dan merupakan ALM standar untuk RISE with SAP, disertakan tanpa biaya tambahan dalam kontrak RISE (tanpa lisensi, perangkat keras, atau infrastruktur ekstra). Test Management-nya mengalir dari Test Preparation ke Test Plan lalu eksekusi manual dan otomatis, dengan penanganan *defect* menyatu di dalamnya. Praktik yang disarankan SAP: buat satu Test Plan khusus regresi, lalu pakai ulang tiap rilis.

Urutan operasional yang realistis menghadapi tanggal rilis yang kaku kurang lebih seperti ini:

1. **Baca scope dan release note, jalankan analisis dampak.** Pahami apa yang berubah pada rilis itu sebelum menentukan apa yang diuji. SAP menyediakan Intelligent Test Scoper (i-TS) yang merekomendasikan cakupan Post Upgrade Test; sejak rilis CE 2608 kemampuan ini diperkuat AI untuk mengusulkan scope regresi optimal. Perlakukan ini sebagai kemampuan yang masih berkembang, bukan standar lama.
2. **Pilih tes berbasis risiko.** Prioritaskan berdasarkan kritikalitas bisnis, kompleksitas kustomisasi, frekuensi pemakaian, stabilitas historis, dan dampak kegagalan. Proses kritis dan ekstensi yang terdampak perubahan naik ke urutan teratas; proses yang jarang dipakai dan stabil bisa menyusul.
3. **Jalankan predelivered plus otomasi kustom.** Eksekusi automate standar dari TAT untuk proses baku, lalu jalankan skrip otomasi yang Anda buat untuk proses unik. Tricentis Test Automation tertanam di SAP Cloud ALM dan disertakan untuk cloud editions, jadi Anda tidak selalu perlu alat tambahan untuk memulai.
4. **Dokumentasikan di Cloud ALM Test Management.** Catat hasil, bukti, dan status di Test Plan yang sama agar jejak regresi konsisten antar-rilis dan bisa dipakai ulang. Analisis dampak perubahan mempersempit cakupan ke test case yang benar-benar terdampak, sehingga pengujian lebih terarah.
5. **Tuntaskan defect sebelum tanggal rilis.** Karena jadwalnya tidak bisa digeser, tetapkan tenggat internal sebelum sistem produksi di-upgrade, dan selesaikan temuan prioritas tinggi lebih dulu. Strategi yang realistis adalah menyiapkan regresi agar tuntas sebelum tanggal, bukan berharap tanggal digeser.

Disiplin inilah yang membedakan tim yang tenang menghadapi rilis dari tim yang panik tiap Februari dan Agustus. Bukan karena mereka menguji lebih banyak, melainkan karena mereka menguji hal yang tepat, terdokumentasi, dan berulang.

## Kapan test automation justru prematur: jangan over-engineer

Ketika sebuah proses jarang berubah atau volumenya rendah, membangun dan merawat skrip otomasi sering lebih mahal daripada menguji manual sesekali. Mulailah dari regresi manual berbasis risiko, lalu otomasi hanya proses yang kritis dan berulang. Alat pihak ketiga bersifat pelengkap, bukan prasyarat; kapabilitas bawaan SAP Cloud ALM dan TAT biasanya cukup untuk memulai.

Otomasi bukan tujuan, melainkan alat. Kombinasi *change impact analysis*, *risk-based testing*, dan i-TS justru bekerja untuk mengecilkan cakupan, bukan membengkakkannya. Automate yang paling berharga adalah yang menutup proses bisnis paling kritis dan paling sering dijalankan, karena di situlah kegagalan paling mahal.

Di lapangan, tim yang menetapkan target 100% otomasi di awal justru sering kehabisan waktu dan anggaran sebelum rilis pertama tiba. Yang menyelamatkan go-live biasanya bukan angka cakupan otomasi, melainkan kelengkapan cakupan proses kritis yang benar-benar diuji.

Soal alat, tempatkan pada proporsinya. Tricentis sudah tertanam di Cloud ALM untuk cloud editions, sedangkan alat seperti Panaya adalah opsi pihak ketiga yang bisa membantu skenario analisis dampak atau *landscape* kompleks. Keduanya sah dipertimbangkan, tetapi Panaya bukan prasyarat dan bukan endorsement SAP. Nilai perlu-tidaknya setelah Anda menguji batas kemampuan bawaan, bukan sebelumnya.

## FAQ (Pertanyaan yang Sering Diajukan)

### Seberapa sering SAP S/4HANA Cloud di-upgrade?
Untuk S/4HANA Cloud Public Edition, SAP merilis dua major upgrade terjadwal setiap tahun, umumnya Februari dan Agustus, dengan penamaan tahun dan bulan (misalnya 2402 untuk Februari 2024). Di antara kedua rilis besar itu, SAP menyalurkan patch atau Hot Fix Collection sekitar tiap dua minggu. Upgrade dikelola SAP dan bersifat wajib, sehingga pengujian direncanakan mengikuti kalender tersebut.

### Apa itu regression testing dalam konteks SAP?
Regression testing adalah pengujian untuk memastikan upgrade atau perubahan SAP tidak merusak proses bisnis, konfigurasi, dan ekstensi yang sudah berjalan. Dalam S/4HANA Cloud, SAP menguji software-nya secara internal berlapis sebelum rilis, tetapi tetap sangat menyarankan pelanggan menjalankan regresi atas proses bisnisnya sendiri setiap rilis, agar proses putus, integrasi gagal, atau celah kepatuhan tertangkap sebelum masuk produksi.

### Apakah clean core benar-benar mengurangi beban testing?
Secara prinsip ya, meski SAP tidak menerbitkan angka pasti. Proses standar sudah diuji SAP dan punya predelivered automated test, sedangkan kustomisasi dan ekstensi hanya bisa Anda uji sendiri. Makin bersih inti Anda (makin banyak ekstensi di Clean Core Level A/B, bukan C/D), makin kecil permukaan berisiko yang harus Anda regresi manual tiap upgrade. Clean core mengecilkan permukaan uji, bukan menghapusnya.

### Apa itu SAP Cloud ALM?
SAP Cloud ALM adalah solusi application lifecycle management berbasis cloud dari SAP dan merupakan ALM standar untuk RISE with SAP, disertakan tanpa biaya tambahan dalam kontrak RISE (tanpa lisensi, perangkat keras, atau infrastruktur ekstra). Untuk testing, Test Management-nya menyediakan Test Preparation, Test Plan, eksekusi tes manual dan otomatis, serta penanganan defect, dan menjadi tempat terpusat mengelola regresi pasca-upgrade.

### Apakah SAP menyediakan test case otomatis untuk proses standar?
Ya. Test Automation Tool (TAT) adalah bagian integral S/4HANA Cloud dan memberikan pre-scripted automated test untuk sebagian besar proses standar berbasis SAP Best Practices (disebut lebih dari 300 automate, jumlah bergantung rilis). Test case standar ini dapat di-import atau disinkronkan ke aplikasi Test Preparation di SAP Cloud ALM, sementara proses kustom Anda otomasi atau uji sendiri.

### Apakah perlu alat test automation pihak ketiga seperti Panaya?
Tidak wajib. SAP sudah menyertakan TAT di S/4HANA Cloud dan menanamkan Tricentis Test Automation di SAP Cloud ALM untuk cloud editions. Alat pihak ketiga seperti Panaya bersifat pelengkap; bisa membantu skenario change-impact atau landscape kompleks, tetapi bukan prasyarat dan bukan endorsement SAP. Mulailah dari kapabilitas bawaan Cloud ALM dan TAT sebelum menilai perlu-tidaknya alat tambahan.

### Bisakah tanggal upgrade S/4HANA Cloud Public Edition ditunda?
Pada praktiknya tidak untuk Public Edition: upgrade terjadwal, dikelola SAP, dan wajib (konfigurasi dan software). Pelanggan biasanya diberi tahu sekitar enam minggu sebelum sistem Test di-upgrade, lalu produksi menyusul. Karena tanggalnya kaku, strategi yang realistis adalah menyiapkan regresi berbasis risiko agar tuntas sebelum tanggal rilis, bukan berharap jadwal digeser.

## Kesimpulan

Kalender rilis dua kali setahun tidak akan melambat, dan itu sebenarnya kabar baik bagi tim yang intinya bersih. Semakin banyak ekstensi berada di level clean core teratas dan semakin disiplin regresi berbasis risiko dikelola di SAP Cloud ALM, semakin kecil dan terprediksi beban tiap Februari dan Agustus. Fokusnya bergeser dari "menguji semuanya" menjadi "menguji yang benar-benar berisiko", terdokumentasi dan dapat dipakai ulang. Sebagai SAP Platinum Partner melalui United VARs dan bagian dari Metrodata Group sejak 1998, Soltius mendampingi perusahaan mengelola siklus rilis dan regresi pasca go-live lewat Application Management Services (AMS), sehingga upgrade berkala berjalan tanpa kejutan di atas inti yang terjaga bersih.

Untuk menilai seberapa bersih inti SAP Anda dan menyiapkan strategi regresi menjelang rilis berikutnya, jelajahi solusi clean core yang ditangani Soltius di soltius.co.id.
