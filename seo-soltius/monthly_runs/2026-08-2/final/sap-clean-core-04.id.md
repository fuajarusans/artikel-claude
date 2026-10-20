---
title: "Memantau Kesehatan Clean Core SAP: KPI dan SAP Cloud ALM"
meta_title: "KPI SAP Clean Core: Pantau di SAP Cloud ALM"
meta_description: "Cara memantau kesehatan SAP Clean Core lewat KPI resmi seperti Technical Debt Score dan Clean Core Share di SAP Cloud ALM, dari angka ke tindakan nyata."
slug: "kpi-clean-core-sap-cloud-alm"
language: "id"
primary_keyword: "SAP Clean Core"
secondary_keywords:
  - "KPI clean core"
  - "Technical Debt Score"
  - "Clean Core Share"
  - "SAP Cloud ALM"
  - "dashboard RISE with SAP"
  - "custom code inventory"
  - "ABAP Test Cockpit"
  - "SAP Readiness Check"
  - "SAP Custom Code Migration app"
  - "monitoring kepatuhan clean core"
  - "technical debt SAP"
internal_links:
  - url: "https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide"
    anchor: "SAP Clean Core"
  - url: "https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud"
    anchor: "migrasi ERP ke cloud"
  - url: "https://www.soltius.co.id/id/blog/business-intelligence"
    anchor: "Business Intelligence"
external_citations:
  - url: "https://community.sap.com/t5/enterprise-resource-planning-blog-posts-by-sap/new-clean-core-extensibility-kpis-arrive-on-the-rise-with-sap-dashboard/ba-p/14257352"
    context: "Nama dan definisi resmi KPI clean core (Technical Debt Score, Clean Core Share, dll), Clean Core Level Concept A–D, tren tiga bulan, impor hasil ATC"
  - url: "https://support.sap.com/en/offerings-programs/strategy.html"
    context: "SAP Business Suite 7 / ECC: mainstream maintenance berakhir 31 Desember 2027, extended maintenance opsional hingga 31 Desember 2030"
brief_id: "sap-clean-core-04"
target_word_count: 1650
publish_month: "2026-08-2"
word_count: 2156
---

# Memantau Kesehatan Clean Core SAP: KPI dan SAP Cloud ALM

Migrasi ke S/4HANA rampung, laporan proyek ditutup, dan tim akhirnya merayakan core yang bersih. Enam bulan kemudian, nyaris tanpa disadari, objek kustom baru mulai bermunculan lagi: satu laporan Z di sini, satu *enhancement* kecil di sana. Pertanyaan yang jarang dijawab dengan jujur: bagaimana Anda tahu core Anda masih bersih hari ini? Artikel ini membedah sisi yang paling sering dilewati dalam diskusi [SAP Clean Core](https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide), bukan cara mencapainya, melainkan cara mengukur dan memantaunya secara berkelanjutan lewat KPI resmi di dashboard RISE with SAP dan SAP Cloud ALM.

> **Ringkas:** KPI clean core adalah sekumpulan metrik resmi SAP, seperti **Technical Debt Score** dan **Clean Core Share**, yang mengukur seberapa bersih dan *upgrade-safe* (aman saat pembaruan) kode kustom sebuah sistem S/4HANA. Ditampilkan di **RISE with SAP Methodology Dashboard** dalam **SAP Cloud ALM** dengan tren tiga bulan, KPI ini menjadikan clean core sebagai kondisi yang dipantau terus, bukan skor sekali jadi.

Melalui artikel ini, kita akan menelusuri KPI apa saja yang tersedia, dari mana angkanya berasal, cara membacanya per peran, dan kapan angka hijau justru bisa menyesatkan.

## Apa itu KPI clean core dan mengapa harus dipantau terus-menerus?

KPI clean core wajib dipantau terus karena clean core adalah sebuah *kondisi*, bukan proyek yang selesai sekali. Setelah *go-live*, tiap enhancement, laporan kustom, atau modifikasi baru bisa menambah *technical debt* (utang teknis) tanpa banyak yang sadar. KPI resmi SAP memberi angka objektif untuk melihat apakah core Anda membaik atau perlahan kembali kotor dari waktu ke waktu.

Istilah *clean core* sendiri merujuk pada prinsip menjaga inti S/4HANA tetap standar dan mudah di-upgrade, dengan memindahkan kustomisasi ke luar inti. Masalahnya, kebersihan itu bukan status permanen. Ia bisa luntur.

Dalam praktik pendampingan pasca go-live, utang teknis paling sering menumpuk justru beberapa bulan setelah proyek ditutup, ketika tekanan tim mereda dan permintaan perubahan kecil kembali mengalir. Di titik itulah layanan Application Management Services (AMS) Soltius membantu memantau KPI clean core dan menindaklanjuti temuannya, supaya sistem tetap sehat jauh setelah proyek selesai.

Konteksnya kian relevan karena banyak perusahaan sedang atau baru saja pindah ke S/4HANA. Mainstream maintenance untuk SAP Business Suite 7 (termasuk ECC 6.0) berakhir 31 Desember 2027, dengan extended maintenance opsional hingga 31 Desember 2030 (menurut [SAP Maintenance Strategy](https://support.sap.com/en/offerings-programs/strategy.html)). Begitu migrasi tuntas, fokus bergeser dari "bagaimana pindah" menjadi "bagaimana tetap bersih", dan di sinilah pemantauan berkelanjutan menggantikan penilaian sekali jalan.

## Apa saja KPI clean core di dashboard RISE with SAP?

Dashboard RISE with SAP menampilkan sejumlah KPI clean core inti: **Technical Debt Score**, **Clean Core Share**, **Execution of Customer Objects**, **Business Modifications**, **Unused Customer Objects**, dan **Detailed Level Overview (A–D)**. Semuanya berputar pada tiga pertanyaan sederhana: berapa banyak objek kustom yang Anda punya, seberapa dipakai, dan seberapa patuh pada arsitektur yang aman saat upgrade.

Menurut [blog resmi SAP](https://community.sap.com/t5/enterprise-resource-planning-blog-posts-by-sap/new-clean-core-extensibility-kpis-arrive-on-the-rise-with-sap-dashboard/ba-p/14257352), sekumpulan KPI clean core baru untuk dimensi *extensibility* ini mulai hadir di dashboard pada 2025. Berikut arti tiap metrik secara ringkas:

- **Technical Debt Score.** Skor agregat yang mewakili utang teknis dari seluruh objek kustom di sistem, dan menilai kebutuhan modernisasi berdasarkan kepatuhan clean core.
- **Clean Core Share.** Porsi ekstensi yang tergolong patuh, yaitu bagaimana objek kustom tersebar di seluruh tingkat kematangan.
- **Execution of Customer Objects.** Seberapa sering objek kustom dieksekusi dibanding objek standar, memberi gambaran ketergantungan operasional pada kode buatan sendiri.
- **Business Modifications.** Menyorot modifikasi warisan pada objek standar yang mengancam stabilitas saat upgrade.
- **Unused Customer Objects.** Objek kustom yang tidak terpakai dan berpotensi dibersihkan.
- **Detailed Level Overview (A–D).** Distribusi ekstensi menurut *Clean Core Level Concept*, model kematangan empat tingkat (A sampai D).

Model A–D ini mengklasifikasikan ekstensi dari yang paling upgrade-safe, misalnya yang dibangun dengan ABAP Cloud dan *released API* (antarmuka resmi yang didukung SAP), hingga modifikasi core klasik yang paling rentan. Yang membuat KPI ini berguna untuk operasi bukan angkanya semata, melainkan **tren tiga bulan** yang menyertainya. Tren itulah yang memberi tahu apakah maintainability sistem membaik atau menurun. SAP sendiri belum menerbitkan ambang angka "sehat" versus "tidak sehat" untuk metrik ini, jadi arah pergerakan lebih informatif ketimbang nilai mutlak pada satu hari.

## SAP Cloud ALM dan alat pendukung: dari mana angka itu berasal?

Angka di dashboard tidak muncul begitu saja. Sumbernya adalah rantai alat SAP yang saling melengkapi: **SAP Cloud ALM** sebagai pusat operasi, **ABAP Test Cockpit (ATC)** untuk kualitas kode, serta **SAP Readiness Check** dan aplikasi **Custom Code Migration** untuk inventarisasi dan analisis pemakaian objek kustom. Dashboard clean core sendiri hidup di dalam SAP Cloud ALM.

SAP Cloud ALM adalah produk *application lifecycle management* (manajemen siklus hidup aplikasi) cloud-native dari SAP untuk pelanggan RISE with SAP, GROW with SAP, dan cloud SAP lainnya. Dibangun di atas SAP BTP dan di-host SAP sebagai layanan, ia mencakup fase implementasi maupun operasi, termasuk *business process monitoring* dan *health check*. Menariknya, entitlement Cloud ALM tidak eksklusif RISE; ia juga tercakup dalam banyak langganan cloud SAP dan kontrak Enterprise Support. Ini disiplin pengukuran yang wajar sebagai kelanjutan dari [migrasi ERP ke cloud](https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud): begitu core berjalan di RISE, dashboard menjadi instrumen harian untuk menjaganya.

ABAP Test Cockpit berperan sebagai perangkat penjaminan mutu yang menjalankan pemeriksaan otomatis atas custom code, termasuk cek kepatuhan clean core. Hasil pemeriksaannya di-impor ke dashboard untuk memberi angka kualitas kode. SAP Readiness Check menampilkan analisis custom code untuk kesiapan upgrade S/4HANA, memanfaatkan Simplification Database untuk menandai isu khas migrasi. Adapun untuk inventarisasi, sejak SAP BTP ABAP environment 2508 aplikasinya dipecah menjadi dua: "Analyze Custom Code" untuk analisis dan "Custom Code Migration" untuk migrasi, keduanya berbasis infrastruktur remote ATC.

| Alat SAP | Fungsi utama | Kontribusi ke monitoring clean core |
|---|---|---|
| SAP Cloud ALM (RISE Methodology Dashboard) | Pusat operasi dan KPI clean core | Menampilkan Technical Debt Score, Clean Core Share, dll, plus tren tiga bulan |
| ABAP Test Cockpit (ATC) | Penjaminan mutu dan pemeriksaan kepatuhan custom code | Hasil pemeriksaan di-impor untuk memberi angka kualitas kode; central check untuk on-premise |
| SAP Readiness Check | Analisis kesiapan upgrade S/4HANA | Custom Code Analysis plus Simplification Database |
| Custom Code Migration / Analyze Custom Code app | Inventarisasi dan analisis pemakaian custom code | Basis data used/unused untuk keputusan remediasi atau pensiun objek |

Satu catatan penting soal keandalan angka: karena hasil ATC di-impor, bukan selalu mengalir real-time, kualitas data dashboard bergantung pada kedisiplinan impor terakhir. Kalau impor jarang dilakukan, angka yang Anda pandangi bisa jadi sudah basi.

## Metrik mana untuk siapa: dari angka ke tindakan

Angka KPI baru berguna kalau berujung tindakan, dan tindakan itu berbeda per peran. Technical Debt Score adalah bahan rapat bagi CIO dan kepala arsitektur; Clean Core Share memandu keputusan desain di tangan arsitek; sedangkan Execution dan Unused Customer Objects lebih relevan bagi tim Basis serta AMS. Benang merahnya satu: yang dibaca adalah arah tren, bukan angka satu hari.

Memantau kesehatan core pada dasarnya sama dengan disiplin [Business Intelligence](https://www.soltius.co.id/id/blog/business-intelligence) pada umumnya: prinsip "yang tidak diukur tidak bisa dikelola" berlaku persis untuk utang teknis. Tabel berikut memetakan tiap KPI ke pemilik peran yang paling relevan dan sinyal tindakannya. Kolom pemilik peran adalah saran praktik, bukan penetapan resmi SAP, dan kolom tindakan berbasis tren, bukan ambang angka baku.

| KPI | Apa yang diukur | Pemilik peran (saran) | Sinyal dan tindakan tipikal |
|---|---|---|---|
| Technical Debt Score | Skor agregat utang teknis seluruh objek kustom | CIO / Kepala Arsitektur | Tren naik, prioritaskan remediasi; jadikan agenda review berkala |
| Clean Core Share | Porsi ekstensi patuh (distribusi Level A–D) | Arsitek / Lead ABAP | Porsi level rentan membesar, arahkan pengembangan baru ke ABAP Cloud dan released API |
| Execution of Customer Objects | Frekuensi eksekusi objek kustom vs standar | Tim Basis / AMS | Objek kustom dipakai intensif, tinjau apakah bisa diganti standar atau konfigurasi |
| Business Modifications | Modifikasi warisan yang mengancam upgrade | Arsitek / Basis | Ada modifikasi core, targetkan remediasi sebelum upgrade besar |
| Unused Customer Objects | Objek kustom tak terpakai | Tim AMS | Tinggi dan konsisten, kandidat dibersihkan (hati-hati objek musiman) |
| Detailed Level Overview (A–D) | Distribusi ekstensi per level clean core | Arsitek | Pantau pergeseran distribusi dari waktu ke waktu, bukan potret sesaat |

Cara membaca tabel ini sederhana: mulai dari kolom paling kanan. Sebuah angka baik atau buruk hampir tak berarti tanpa keputusan yang mengikutinya. Technical Debt Score yang menanjak tiga bulan berturut-turut, misalnya, adalah undangan untuk menaruh remediasi ke dalam backlog, bukan sekadar catatan di slide.

## Kapan angka hijau clean core justru menyesatkan

Angka hijau bisa menyesatkan ketika ia dikejar sebagai tujuan, bukan sebagai cerminan kesehatan yang sebenarnya. Metrik apa pun bisa "di-game", objek yang tampak tak terpakai belum tentu layak dibuang, dan dashboard siap-pakai ini melekat pada RISE sehingga tidak otomatis tersedia untuk semua orang. Konteks bisnis selalu mengalahkan skor.

Bagian ini jarang ditulis kompetitor, padahal justru di sinilah pemahaman yang matang membedakan tim yang memantau demi kesehatan dari tim yang memantau demi laporan. Ada beberapa jebakan yang perlu diwaspadai:

1. **Metrik bisa "di-game".** Menghapus objek agar Unused Customer Objects turun, atau menahan pengembangan agar Technical Debt Score terlihat stabil, bisa memperbaiki angka tanpa benar-benar memperbaiki maintainability. Skor membaik, sistem tidak.
2. **"Unused" belum tentu buang.** Objek yang tampak tak terpakai bisa jadi musiman, misalnya proses tutup tahun, pelaporan pajak tahunan, atau kampanye periodik. Jendela pengukuran yang pendek bisa menyesatkan, jadi verifikasi siklus pemakaian sebelum menghapus.
3. **Dashboard tidak sama dengan kemampuan mengukur.** Yang eksklusif RISE adalah dashboard siap-pakainya, bukan kemampuan menilai clean core. Tim on-premise tetap bisa mengukur kualitas kode memakai ABAP Test Cockpit lewat central check system, ditambah SAP Readiness Check dan Analyze Custom Code app. Mereka hanya perlu merakit sendiri, tanpa tren tiga bulan otomatis.

Level A–D pun sebaiknya dibaca sebagai label kepatuhan, bukan vonis. Ekstensi di level yang lebih rentan kadang sah untuk kebutuhan nyata yang belum ada padanan standarnya. Tujuannya menahan pertumbuhannya dan mengarahkan pengembangan baru ke level yang lebih aman, bukan menihilkan semuanya dalam semalam. Angka yang jujur, dibaca dalam konteks, jauh lebih berharga daripada dashboard yang hijau karena diakali.

## FAQ (Pertanyaan yang Sering Diajukan)

### Bagaimana cara memantau kepatuhan clean core?

Kepatuhan clean core dipantau lewat KPI resmi di RISE with SAP Methodology Dashboard di dalam SAP Cloud ALM. Dashboard menampilkan metrik seperti Technical Debt Score dan Clean Core Share beserta tren tiga bulan, sehingga tim bisa melihat apakah objek kustom bertambah atau membaik. Datanya diperkaya impor hasil ABAP Test Cockpit. Intinya: pantau tren berkelanjutan, bukan sekadar skor sekali.

### Apa itu SAP Cloud ALM?

SAP Cloud ALM adalah produk application lifecycle management cloud-native dari SAP untuk pelanggan RISE with SAP, GROW with SAP, dan cloud SAP lainnya. Dibangun di atas SAP BTP dan di-host SAP, ia mencakup fase implementasi (task plan, Fit-to-Standard) dan operasi (business process monitoring, health check). Entitlement-nya umumnya sudah termasuk dalam langganan cloud SAP dan kontrak Enterprise Support.

### Apa itu Technical Debt Score di SAP?

Technical Debt Score adalah KPI clean core di dashboard RISE with SAP yang memberi satu skor agregat mewakili utang teknis dari seluruh objek kustom di sistem. Skor ini menilai kebutuhan modernisasi berdasarkan kepatuhan clean core dan ditampilkan dengan tren tiga bulan, sehingga Anda tahu apakah utang teknis sedang menumpuk atau berkurang. Fokuslah pada arah tren, bukan angka mutlaknya.

### Apa itu Clean Core Share?

Clean Core Share adalah KPI yang mengukur porsi ekstensi Anda yang tergolong patuh, yaitu bagaimana objek kustom tersebar di seluruh Level A–D dalam Clean Core Level Concept. Semakin besar porsi yang berada di level upgrade-safe, semakin bersih core Anda. KPI ini memberi gambaran cepat kualitas keseluruhan lanskap ekstensi, dan dipantau bersama Technical Debt Score di SAP Cloud ALM.

### Alat apa yang dipakai untuk mengukur custom code SAP?

Tiga alat SAP saling melengkapi. ABAP Test Cockpit (ATC) menjalankan pemeriksaan kualitas otomatis atas custom code, dan hasilnya bisa di-impor ke dashboard clean core. SAP Readiness Check menampilkan analisis custom code untuk kesiapan upgrade S/4HANA. Sementara Custom Code Migration app dan Analyze Custom Code app menginventarisasi serta menganalisis pemakaian (used/unused) objek kustom sebagai basis remediasi.

### Apakah KPI clean core tersedia untuk sistem on-premise?

Dashboard KPI clean core seperti Technical Debt Score dan Clean Core Share melekat pada RISE with SAP Methodology Dashboard, jadi terikat konteks RISE. Namun tim on-premise tetap bisa mengukur kualitas custom code memakai ABAP Test Cockpit lewat central check system, plus SAP Readiness Check dan Analyze Custom Code app. Jadi yang hilang adalah dashboard siap-pakai, bukan kemampuan mengukurnya.

### Seberapa sering KPI clean core harus ditinjau?

KPI ini dirancang untuk pemantauan berkelanjutan, bukan audit tahunan. Dashboard menampilkan tren tiga bulan dan berfungsi sebagai laporan berkala, jadi tinjau secara rutin, misalnya bulanan, dan cermati perubahan tren setelah tiap gelombang perubahan atau go-live. Yang penting bukan angka satu hari, melainkan apakah utang teknis konsisten menurun atau diam-diam menanjak.

## Kesimpulan

Menjaga clean core bukan pekerjaan sekali tekan, melainkan disiplin operasional yang hidup di angka. KPI seperti Technical Debt Score dan Clean Core Share, dibaca lewat tren tiga bulan di SAP Cloud ALM dan dipahami dalam konteks bisnis, mengubah "mudah-mudahan core kita masih bersih" menjadi keputusan berbasis bukti. Sebagai SAP Platinum Partner melalui United VARs dan bagian dari Metrodata Group sejak 1998, Soltius mendampingi perusahaan bukan hanya sampai go-live, tetapi juga memantau dan menindaklanjuti kesehatan sistem lewat Application Management Services, agar hasil migrasi tidak perlahan tergerus utang teknis.

Untuk mendiskusikan cara memantau kesehatan clean core dan menjaga sistem SAP Anda tetap sehat pasca go-live, kunjungi soltius.co.id.
