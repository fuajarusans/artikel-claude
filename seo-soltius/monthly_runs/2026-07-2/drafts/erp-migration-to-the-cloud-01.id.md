---
title: "Strategi Migrasi Data ERP ke Cloud: Bersihkan dan Arsip Sebelum Pindah"
meta_title: "Strategi Migrasi Data ERP ke Cloud: Bersih Sebelum Pindah"
meta_description: "Strategi migrasi data ERP ke cloud: kapan membersihkan, mengarsip, dan memensiunkan data sebelum ke S/4HANA, plus tool Migration Cockpit dan patokan waktunya."
slug: "strategi-migrasi-data-erp-ke-cloud"
language: "id"
primary_keyword: "ERP migration to the cloud"
secondary_keywords:
  - "migrasi data ERP ke cloud"
  - "data cleansing SAP"
  - "data archiving sebelum migrasi S/4HANA"
  - "SAP S/4HANA Migration Cockpit"
  - "staging table vs file"
  - "master data deduplication"
  - "migrasi ECC ke S/4HANA"
  - "Business Partner SAP"
  - "single source of truth"
  - "validasi data pasca-load"
internal_links:
  - url: "https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud"
    anchor: "migrasi ERP ke cloud"
  - url: "https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide"
    anchor: "SAP Clean Core"
  - url: "https://www.soltius.co.id/id/blog/data-warehouse-solutions"
    anchor: "data warehouse solutions"
external_citations:
  - url: "https://support.sap.com/en/release-upgrade-maintenance/maintenance-information/maintenance-strategy/s4hana-business-suite7.html"
    context: "Mainstream maintenance SAP ECC/Business Suite 7 hingga akhir 2027, extended 2030"
  - url: "https://www.tjc-group.com/blogs/sap-data-archiving-how-to-reduce-s-4hana-migration-cost/"
    context: "Mulai arsip 12–18 bulan sebelum migrasi; reduksi volume data khas 30–70%"
brief_id: "erp-migration-to-the-cloud-01"
target_word_count: 1650
publish_month: "2026-07"
word_count: 1727
---

# Strategi Migrasi Data ERP ke Cloud: Bersihkan dan Arsip Sebelum Pindah

Cutover yang gagal di menit terakhir jarang bermula dari teknologi. Ia bermula dari data: master vendor ganda yang tak bisa dikonversi, record pelanggan mati sejak 2015 yang tetap ikut diangkut, tabel transaksi 15 tahun yang membanjiri sistem baru. Sebagian besar molornya proyek *ERP migration to the cloud* berakar di situ. Artikel ini membahas disiplin yang sering terlewat dalam pembahasan [migrasi ERP ke cloud](https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud): strategi data sebagai pekerjaan tersendiri. Bukan "bagaimana memindahkan semua", melainkan apa yang dibersihkan, diarsip, dipensiunkan, dan tool SAP mana yang mengeksekusinya.

> **Strategi migrasi data ERP ke cloud** adalah rencana terstruktur untuk memutuskan data mana yang dibersihkan, diarsip, dipensiunkan, lalu dimuat dan divalidasi saat berpindah ke ERP cloud seperti SAP S/4HANA. Tujuannya bukan mengangkut seluruh data, melainkan memindahkan data yang benar dalam kondisi bersih, karena data yang tidak siap adalah penyebab kegagalan *cutover* yang paling sering ditemui.

## Apa itu strategi migrasi data dan mengapa penentu sukses migrasi ERP ke cloud?

Strategi migrasi data adalah keputusan sadar tentang nasib setiap kelompok data sebelum berpindah sistem: mana yang dibersihkan dan dimuat, mana yang cukup diarsip, mana yang dipensiunkan bersama sistem lamanya. Ia berbeda dari sekadar memilih jalur transisi. Roadmap saja tidak cukup karena roadmap menjawab "bagaimana proyeknya berjalan", bukan "seperti apa kondisi datanya".

Sebagai satu rangkaian, disiplin ini bergerak dari data mentah ke sistem baru yang bersih:

1. **Cleanse** — bersihkan dan deduplikasi data master aktif.
2. **Archive** — pindahkan data lama yang wajib disimpan ke arsip terpisah.
3. **Decommission** — pensiunkan sistem sumber yang datanya sudah diarsip.
4. **Load** — muat data yang benar ke S/4HANA lewat Migration Cockpit.
5. **Validate** — rekonsiliasi hasil load terhadap sumber sebelum cutover.

Pemilihan jalur — *greenfield* (implementasi baru), *brownfield* (konversi teknis sistem lama), atau *selective data transition* (hibrida) — memang menentukan seberapa banyak data historis ikut. Tetapi ketiganya sama-sama runtuh jika data sumbernya kotor. Di S/4HANA, pelanggan dan vendor tidak lagi bisa dibuat tanpa objek *Business Partner* (BP) lebih dulu; data ganda atau inkonsisten langsung menghambat konversinya.

Ada urgensi kalender yang memperkuat alasan menata data sekarang. Menurut SAP, *mainstream maintenance* untuk SAP Business Suite 7 (termasuk ECC / SAP ERP 6.0 enhancement package 6–8) berakhir **31 Desember 2027**, dengan opsi *extended maintenance* berbayar hingga **2030** ([SAP Support Portal](https://support.sap.com/en/release-upgrade-maintenance/maintenance-information/maintenance-strategy/s4hana-business-suite7.html)). Perlu dicermati: EhP 1–5 dan ECC tanpa EhP sudah kehilangan dukungan mainstream sejak akhir 2025, jadi 2027 tidak berlaku untuk semua instalasi.

## Tiga keputusan data sebelum pindah: bersihkan, arsip, atau pensiunkan

Sebelum satu byte pun dimuat ke sistem baru, setiap kelompok data mesti melewati tiga keputusan: **bersihkan** (data aktif yang harus benar), **arsip** (data lama yang wajib disimpan tapi jarang dipakai), atau **pensiunkan** (data yang cukup tinggal di sistem lama). Menyatukan ketiganya dalam satu kerangka itulah yang membedakan strategi data dari sekadar "load semua lalu perbaiki nanti".

*Data cleansing* menyasar data master aktif. Deduplikasi menjadi krusial: tabel pelanggan (KNA1) dan vendor (LFA1) di S/4HANA diisi lewat *Customer-Vendor Integration* (CVI) yang menyinkronkannya ke Business Partner. Jumlah entri harus konsisten; record yatim atau ganda akan menggagalkan konversi BP. Membersihkan master data lebih awal juga bagian dari menjaga inti sistem tetap standar dan siap-cloud, tema yang berkaitan dengan prinsip [SAP Clean Core](https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide).

*Data archiving* mengurus data lama yang wajib disimpan karena alasan legal, bukan karena masih dipakai harian. Di Indonesia, buku, catatan, dan dokumen dasar pembukuan (termasuk yang elektronik) wajib disimpan **10 tahun** sesuai Pasal 28 ayat (11) UU KUP. Itu alasan kuat untuk mengarsip, bukan memigrasikan, data transaksi lawas. Terakhir, *decommissioning*: setelah data diarsip dalam mode *read-only*, sistem sumbernya dimatikan dan datanya tidak ikut dimuat ke S/4HANA sama sekali.

| Kondisi data | Tindakan | Mekanisme SAP |
|---|---|---|
| Master aktif ganda / inkonsisten (pelanggan, vendor) | **Bersihkan** | Konsolidasi ke Business Partner via CVI sebelum konversi |
| Transaksi lama, wajib disimpan (pajak/audit) | **Arsip** | *Data archiving object* + retensi 10 tahun (UU KUP) |
| Data lama yang sudah diarsip & tak dibutuhkan online | **Pensiunkan** | Arsip *read-only* + matikan sistem sumber |
| Master & saldo yang harus aktif di sistem baru | **Migrasikan** | *Migrate Your Data* + simulasi + rekonsiliasi |

## Kapan sebaiknya pekerjaan data dimulai — dan berapa lama?

Sebagai patokan lapangan (*rule-of-thumb*), pekerjaan arsip idealnya dimulai **12–18 bulan sebelum tanggal go-live** yang direncanakan, menurut TJC Group (Juni 2026). Rentang itu memberi ruang menganalisis database, mengonfigurasi *archiving object*, menjalankan sesi arsip, lalu memverifikasi hasilnya tanpa mengganggu operasi harian.

Alasan memulai sedini itu bersifat ekonomis. Mengarsip sebelum migrasi biasanya memangkas volume data **30–70%** ([TJC Group](https://www.tjc-group.com/blogs/sap-data-archiving-how-to-reduce-s-4hana-migration-cost/), Juni 2026); angka ini rentang khas, bukan garansi untuk setiap perusahaan. Jejak data yang lebih kecil langsung menurunkan kebutuhan memori SAP HANA, memperpendek *runtime* konversi, dan mempersingkat jendela *downtime* saat cutover.

Efeknya terasa sampai ke biaya berlangganan. Pada model RISE with SAP, kapasitas ditentukan lewat *tiering* ("T-shirt size") dan memori HANA bersifat mahal serta bertingkat. Mengarsip lebih dulu membantu me-*right-size* lingkungan awal dan menghindari lompatan ke tier berikutnya, sekaligus memperbaiki posisi negosiasi. Durasi migrasi datanya sendiri tak punya angka tunggal; bergantung pada volume, jumlah objek, dan jalur transisi.

Data yang diarsip atau dipensiunkan juga tak harus hilang dari jangkauan pelaporan. Banyak organisasi memindahkannya ke lapisan pelaporan historis lewat [data warehouse solutions](https://www.soltius.co.id/id/blog/data-warehouse-solutions), sehingga tetap bisa dianalisis tanpa membebani ERP baru.

## Bagaimana SAP memindahkan data: Migration Cockpit, staging table vs file, dan uji coba

SAP memuat data awal ke S/4HANA lewat **Migration Cockpit**. Perlu diluruskan: transaksi lama **LTMC sudah _deprecated_ sejak S/4HANA 2021**. Project lama masih bisa dilihat, tetapi project baru tidak bisa dibuat. Penggantinya adalah aplikasi Fiori **"Migrate Your Data – Migration Cockpit"**, standar sejak versi 2020 ke atas dan di S/4HANA Cloud.

Migration Cockpit menawarkan dua pendekatan dengan trade-off jelas: *staging table* untuk volume besar dan *file transfer* untuk proyek kecil–menengah. Untuk penyesuaian pemetaan field, termasuk *field* kustom (Z-field), tersedia komponen *Migration Object Modeler* (LTMOM).

| Aspek | Staging table | File |
|---|---|---|
| Bentuk | Tabel database | Template XML/CSV |
| Paling cocok | Volume besar, otomatisasi | Proyek kecil–menengah |
| Efisiensi volume besar | Tinggi (tak perlu pecah tabel) | Terbatas |
| Cara isi data | HANA Studio, CSV/XML, tool ETL | Unggah file template |

Yang menentukan sukses cutover bukan sekadar load-nya, melainkan verifikasinya. Migration Cockpit menyediakan *simulation* atau *test run* yang menjalankan migrasi uji untuk mendeteksi error tanpa memposting data. Setelah simulasi bersih, migrasi produktif dijalankan, lalu **rekonsiliasi pasca-load** membandingkan hasil di S/4HANA dengan sistem sumber untuk memastikan tidak ada yang hilang. Di lapangan, tim implementasi umumnya menjalankan beberapa siklus uji coba (sering disebut *mock migration*) sebelum cutover final, meski itu bukan fitur bernama resmi di SAP.

## Yang jarang dibahas: memindahkan lebih banyak data bukan berarti lebih aman

Naluri "angkut semua, biar aman" justru menambah risiko, bukan mengurangi. Bagian ini jarang ditulis kompetitor, padahal di sinilah keputusan datang mahal. Setiap record yang tidak perlu ikut menekan empat hal sekaligus:

- **Memori HANA** yang mahal dan bertingkat.
- ***Runtime* konversi** yang makin panjang seiring volume.
- **Durasi *downtime*** saat cutover.
- **Biaya operasional** yang menempel selama data itu aktif.

Data yang hanya dibutuhkan untuk kepatuhan atau referensi sesekali tidak menghasilkan nilai operasional di ERP baru, tetapi tetap menanggung ongkosnya di setiap tier HANA dan jendela cutover. Jauh lebih tepat menyimpannya di arsip *read-only* atau lapisan pelaporan historis ketimbang memaksanya masuk sistem produksi.

Jebakan klasiknya adalah "siapa tahu nanti butuh". Argumen itu terdengar aman, tapi biayanya nyata dan berulang tiap tahun, sementara peluang benar-benar memakainya kecil. Pertanyaan yang tepat bukan "mungkinkah suatu hari data ini berguna", melainkan "apakah nilainya sepadan dengan ongkos memindahkan dan menyimpannya secara aktif". Untuk sebagian besar data historis, jawabannya tidak.

## FAQ (Pertanyaan yang Sering Diajukan)

### Apa itu strategi migrasi data dalam migrasi ERP ke cloud?
Strategi migrasi data adalah rencana terstruktur untuk menentukan data mana yang dibersihkan, diarsip, dipensiunkan, lalu dimuat dan divalidasi saat berpindah ke ERP cloud seperti SAP S/4HANA. Fokusnya bukan memindahkan semua, melainkan memindahkan data yang benar dalam kondisi bersih, karena data yang tidak siap adalah penyebab kegagalan cutover yang paling sering ditemui.

### Berapa lama proses migrasi data dari SAP ECC ke S/4HANA?
Durasinya bergantung pada volume data, jumlah objek, dan jalur transisi (greenfield, brownfield, atau selective data transition), sehingga tidak ada angka tunggal yang berlaku umum. Yang lebih pasti: pekerjaan pembersihan dan arsip sebaiknya dimulai 12–18 bulan sebelum go-live (TJC Group, 2026). Memangkas volume data 30–70% memperpendek runtime konversi dan jendela downtime saat cutover.

### Apa itu SAP S/4HANA Migration Cockpit (LTMC)?
Migration Cockpit adalah alat bawaan SAP untuk memuat data awal ke S/4HANA. Transaksi lama LTMC sudah deprecated sejak S/4HANA 2021; penggantinya aplikasi Fiori "Migrate Your Data", standar sejak versi 2020 ke atas. Alat ini mendukung pendekatan staging table atau file, plus simulasi dan rekonsiliasi sebelum data final diposting.

### Apa bedanya data cleansing, data archiving, dan data decommissioning?
Data cleansing membersihkan data aktif, misalnya menghapus duplikat vendor/pelanggan dan memetakannya ke Business Partner sebelum konversi. Data archiving memindahkan data lama yang wajib disimpan (mis. retensi pajak 10 tahun per UU KUP) ke penyimpanan terpisah. Data decommissioning mematikan sistem lama setelah datanya diarsip read-only, sehingga tidak perlu ikut dimigrasikan.

### Kapan sebaiknya mulai membersihkan data sebelum migrasi?
Sebagai patokan, pekerjaan arsip idealnya dimulai 12–18 bulan sebelum tanggal go-live yang direncanakan (TJC Group, 2026). Rentang ini memberi waktu menganalisis database, mengonfigurasi archiving object, menjalankan sesi arsip, dan memverifikasi hasil tanpa mengganggu operasi harian. Semakin dini dimulai, semakin besar reduksi jejak data yang bisa dicapai sebelum cutover.

### Apakah semua data historis harus ikut dimigrasikan?
Tidak. Memindahkan lebih banyak data justru menaikkan kebutuhan memori HANA, runtime konversi, downtime, dan biaya operasional; setiap record yang tidak perlu menambah ongkos di suatu titik. Data lama yang hanya dibutuhkan untuk kepatuhan atau referensi sering lebih tepat disimpan di arsip read-only atau lapisan data warehouse, bukan diangkut ke ERP baru.

### Apa risiko terbesar dari data yang tidak siap saat cutover?
Risiko terbesarnya cutover gagal atau molor di menit terakhir, misalnya konversi Business Partner terhenti karena data pelanggan/vendor ganda atau load gagal validasi. Karena itu Migration Cockpit menyediakan simulasi (test run) untuk mendeteksi error sebelum posting, dan rekonsiliasi pasca-load untuk memastikan tidak ada data hilang.

## Kesimpulan

Keberhasilan *ERP migration to the cloud* ditentukan jauh sebelum cutover, di meja tempat tim memutuskan data mana yang layak ikut. Menata tiga keputusan (bersihkan, arsip, pensiunkan) lebih awal memangkas biaya, risiko, dan downtime sekaligus, sementara "angkut semua" diam-diam membebani setiap tahun ke depan. Sebagai Best RISE & Best Cloud Partner, Soltius menjalankan data cleansing, arsip, dan validasi migrasi lintas industri agar cutover berjalan minim kejutan. Titik mulai yang tepat bukan memilih tool, melainkan memetakan kondisi data Anda.

Untuk mendiskusikan kesiapan data dan strategi migrasi ERP ke cloud di perusahaan Anda, kunjungi soltius.co.id.
