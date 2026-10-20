---
title: "Kenapa Angka BI Beda-Beda? Tata Kelola Data & Semantic Layer"
meta_title: "Business Intelligence: Kenapa Angka Beda-Beda?"
meta_description: "Angka BI beda antar-divisi? Akarnya tata kelola data & semantic layer yang lemah. Cara membangun single source of truth agar dashboard benar-benar dipercaya."
slug: "business-intelligence-tata-kelola-semantic-layer"
language: "id"
primary_keyword: "Business Intelligence"
secondary_keywords:
  - "tata kelola data"
  - "semantic layer"
  - "metrics layer"
  - "single source of truth"
  - "definisi metrik konsisten"
  - "data steward"
  - "data lineage"
  - "SAP Datasphere"
  - "SAP Analytics Cloud"
  - "kualitas data"
internal_links:
  - url: "https://www.soltius.co.id/id/blog/business-intelligence"
    anchor: "Business Intelligence"
  - url: "https://www.soltius.co.id/id/blog/data-warehouse-solutions"
    anchor: "Data Warehouse Solutions"
  - url: "https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud"
    anchor: "migrasi ERP ke cloud"
external_citations:
  - url: "https://www.gartner.com/en/newsroom/press-releases/2024-02-28-gartner-predicts-80-percent-of-data-and-analytics-governance-initiatives-will-fail-by-2027-due-to-a-lack-of-a-real-or-manufactured-crisis-"
    context: "Gartner memprediksi 80% inisiatif tata kelola data & analitik gagal hingga 2027 karena tak terkait hasil bisnis"
  - url: "https://help.sap.com/docs/SAP_DATASPHERE/d4f3c5a0bb074d09ae9b42b2b9bd7a08/5db9a099826c467e93ff0994fc185589.html"
    context: "SAP Datasphere menyatukan integrasi data, katalog, pemodelan semantik, warehousing, dan virtualisasi"
brief_id: "business-intelligence-04"
target_word_count: 1650
publish_month: "2026-07-2"
word_count: 1930
---

# Kenapa Angka BI Beda-Beda? Tata Kelola Data & Semantic Layer

Adegan ini terlalu sering terjadi di ruang rapat direksi: tim penjualan menyebut *revenue* bulan lalu Rp 12 miliar, tim keuangan menyebut Rp 11,4 miliar, dan setengah jam berikutnya habis untuk memperdebatkan angka mana yang benar, bukan apa yang harus dilakukan dengannya. Ketika dua dashboard dari *tools* [Business Intelligence](https://www.soltius.co.id/id/blog/business-intelligence) yang sama menampilkan angka berbeda, akar masalahnya jarang teknis semata. Artikel ini menelusuri rantai sebabnya, dari definisi metrik yang menyimpang hingga tata kelola data yang lemah, dan menjelaskan bagaimana *single source of truth* dibangun agar angka BI kembali dipercaya.

> **Ringkas:** *Single source of truth* (SSOT) dalam Business Intelligence adalah satu rujukan resmi tempat setiap metrik dan data bisnis didefinisikan secara konsisten, sehingga seluruh divisi memakai angka yang sama. SSOT bukan sekadar satu database, melainkan satu definisi metrik yang disepakati dan ditegakkan lewat lapisan semantik serta tata kelola data, fondasi agar dashboard benar-benar dipercaya.

## Apa itu single source of truth, dan mengapa BI runtuh tanpanya?

*Single source of truth* adalah satu tempat rujukan resmi tempat setiap metrik didefinisikan sekali dan dipakai konsisten oleh semua divisi. Dalam BI, ia bukan satu database fisik, melainkan satu definisi metrik yang disepakati, misalnya "*revenue*" dihitung dengan rumus yang sama di mana pun. Tanpanya, dua laporan dari sumber sama bisa berbeda angka.

Ketika angka tidak konsisten, yang runtuh bukan hanya laporan, melainkan kepercayaan. Dashboard yang sekali ketahuan salah akan diabaikan diam-diam, dan orang kembali ke *spreadsheet* pribadi masing-masing. Ini masalah yang lebih luas dari yang diakui: studi HFS Research (via RTInsights) menemukan sekitar 75% eksekutif bisnis tidak memiliki tingkat kepercayaan yang tinggi pada datanya. Angka itu ilustrasi tren umum, bukan patokan 2026, tetapi pola distrust-nya konsisten dengan yang terlihat di lapangan.

Inilah paradoks BI yang jarang diakui: *tools* visualisasi terbaik pun, jika dipasang di atas data tanpa definisi tunggal, hanya mempercepat penyebaran angka yang saling bertentangan.

## Kenapa angka di dua dashboard bisa berbeda padahal sumbernya sama?

Angka berbeda meski sumbernya sama karena setiap divisi mendefinisikan metrik dengan caranya sendiri. Tim penjualan menghitung *revenue* saat pesanan masuk, keuangan saat faktur terbit, satu memasukkan pajak, yang lain tidak. Perbedaan definisi ini, bukan perbedaan data mentah, yang membuat dua dashboard menampilkan angka tak sama dari database yang identik.

Penyimpangan definisi terjadi diam-diam dan berlapis. Ambil metrik "pelanggan aktif": apakah aktif berarti bertransaksi 30 hari terakhir, 90 hari, atau sekadar akun belum ditutup? Tiga divisi bisa memakai tiga ambang berbeda dan semuanya merasa benar. Tambahkan variasi periode fiskal, kurs mata uang, dan perlakuan retur, dan muncullah beberapa versi angka yang sama-sama "akurat" menurut logikanya masing-masing.

Yang memperparah: definisi ini biasanya tertanam di dalam setiap *tool* atau *query* secara terpisah. Setiap analis menulis ulang rumusnya di laporan sendiri. Ketika rumus itu tersebar di ratusan *dashboard* dan *file*, tidak ada satu tempat pun untuk memperbaikinya sekaligus. Di sinilah gagasan lapisan semantik masuk sebagai solusi struktural.

## Semantic layer & metrics layer: satu tempat semua metrik didefinisikan

*Semantic layer* adalah lapisan yang menerjemahkan struktur teknis data, tabel dan kolom mentah, menjadi istilah bisnis dan relasi yang dipahami pengguna, sehingga setiap metrik didefinisikan satu kali lalu dipakai konsisten. *Metrics layer* adalah bagian yang khusus memusatkan definisi KPI, dan umumnya dianggap komponen inti dari *semantic layer*.

Perbedaan keduanya cair antar-vendor, jadi jangan terpaku pada batasan istilah. Yang penting adalah apa yang lapisan ini berikan:

- **Definisi tunggal.** Rumus "*revenue*" ditetapkan sekali, bukan ditulis ulang di tiap laporan.
- **Konsistensi lintas *tool*.** Setiap *tool* BI menarik definisi yang sama dari lapisan itu.
- **Perbaikan terpusat.** Koreksi di satu tempat langsung merambat ke semua dashboard.

Inilah wujud teknis dari *single source of truth* untuk definisi, bukan sekadar untuk data.

Konsep ini sedang menjadi standar industri. Pada 27 Januari 2026, spesifikasi **Open Semantic Interchange (OSI)** versi 1.0 difinalisasi dan dirilis publik di bawah lisensi Apache 2.0, dibuat agar konstruksi semantik seperti metrik, dimensi, dan relasi ditafsirkan secara konsisten lintas *tool* BI dan AI. Standar ini diinisiasi Snowflake dengan dukungan 30-an organisasi, termasuk Databricks, dbt Labs, ThoughtSpot, dan Salesforce. Kemunculannya menegaskan bahwa konsistensi definisi metrik kini dianggap fondasi kesiapan AI, bukan sekadar kerapian teknis, meski adopsinya masih tahap awal dan lebih tepat dibaca sebagai tren yang naik.

Dalam ekosistem SAP, lapisan semantik ini diwujudkan di **SAP Datasphere**. Menurut SAP Help Portal, Datasphere menyatukan kapabilitas yang tadinya terpisah, *data integration*, *cataloging*, *semantic modeling*, *data warehousing*, dan virtualisasi, dalam satu layanan. Komponen *Business Builder*-nya adalah tempat pengguna dengan peran *modeler* membangun lapisan bisnis, mendefinisikan metrik dan perspektif yang kemudian dikonsumsi oleh *tool* pelaporan. Lapisan semantik dan tata kelola data ini hidup di fondasi [Data Warehouse Solutions](https://www.soltius.co.id/id/blog/data-warehouse-solutions), tempat data dari berbagai sistem disatukan sebelum sampai ke dashboard.

## Membangun tata kelola data untuk BI yang dipercaya

Tata kelola data (*data governance*) adalah kerangka kebijakan, peran, dan kepemilikan yang mengatur siapa boleh mendefinisikan, mengubah, dan mengakses data. Ia berbeda dari kualitas data (*data quality*), yang menunjuk kondisi aktual data: akurat, lengkap, konsisten, tepat waktu. Governance adalah "aturan main"; data quality adalah "hasilnya". Governance-lah sistem yang menegakkan dan menjaga kualitas itu.

Kabar buruknya, governance sering gagal bukan karena teknologi. Gartner memprediksi 80% inisiatif tata kelola data dan analitik akan gagal hingga 2027 karena tidak dikaitkan dengan hasil atau krisis bisnis yang nyata (Gartner, 28 Februari 2024). Memasang katalog data yang megah tanpa menautkannya ke masalah konkret, seperti perdebatan angka *revenue* di rapat tadi, adalah resep kegagalan. Governance yang berhasil dimulai dari rasa sakit yang dirasakan, bukan dari kelengkapan dokumen.

Secara praktik, tata kelola BI berdiri di atas beberapa mekanisme inti:

1. **Definisi metrik terpusat.** Setiap metrik bersama punya satu definisi resmi, ditetapkan di lapisan semantik, bukan di ratusan *query* yang tersebar.
2. **Peran *data owner* dan *data steward*.** *Data steward* adalah orang yang bertanggung jawab atas kualitas dan definisi data pada domain tertentu, misalnya data keuangan, dan menengahi ketika dua divisi memakai istilah sama untuk hal berbeda.
3. **Katalog data dan glosarium.** Satu tempat untuk menemukan aset data resmi, lengkap dengan definisi dan label "tepercaya", agar orang tahu angka mana yang sah.
4. **Silsilah data (*data lineage*).** Jejak yang menunjukkan asal-usul sebuah angka, dari sumber hingga muncul di dashboard, sehingga selisih bisa ditelusuri dan dampak perubahan dinilai sebelum diterapkan.

Setiap mekanisme itu punya perwujudan teknis. Tabel berikut memetakan gejala "angka beda-beda" ke mekanisme governance yang menjawabnya, dan bagaimana arsitektur SAP mendukungnya:

| Gejala | Akar penyebab | Mekanisme governance | Wujud di SAP Datasphere |
|---|---|---|---|
| "Revenue" beda antar-divisi | Tak ada definisi metrik tunggal | Definisi terpusat di semantic layer | *Business Builder* (lapisan bisnis) |
| Tak tahu angka ini dari mana | Tak ada silsilah data | *Data lineage* / impact analysis | *Impact and Lineage Analysis* |
| Tak yakin data mana yang resmi | Aset data tak terkatalog | Katalog + glosarium + label tepercaya | *Catalog* (discovery, glossary, KPI) |
| Definisi menyimpang diam-diam | Tak ada penanggung jawab | Peran *data owner*/*steward* | Ditegakkan lewat proses governance |
| Dashboard di atas data kacau | Model tak ter-*governed* dikonsumsi bebas | Konsumsi hanya model resmi | *Live connection* SAC ke model Datasphere |

Yang menutup rantai ini adalah lapisan konsumsi. **SAP Analytics Cloud (SAC)** dapat terhubung ke model di Datasphere lewat *live connection*: hanya metadata model yang disimpan di SAC, eksekusi *query* terjadi di sumber, sehingga tim keuangan, penjualan, dan *supply chain* mengonsumsi *governed facts* yang sama tanpa menduplikasi data. Dashboard yang dipercaya berdiri di atas model ter-*governed*, bukan sebaliknya. Dari pengalaman merancang arsitektur data ter-*governed* untuk perusahaan enterprise di Indonesia, Soltius menemukan bahwa menegakkan satu definisi untuk segelintir metrik yang paling sering diperdebatkan sering memberi dampak kepercayaan lebih besar daripada proyek katalog raksasa yang tak kunjung rampung.

## Governance berlebihan juga membunuh BI: menyeimbangkan kontrol dan kelincahan

Tidak, tidak semua metrik perlu di-*governance* ketat, dan memaksakannya justru membunuh BI. Ketika setiap definisi dikunci dan setiap perubahan butuh persetujuan berlapis, proses jadi birokratis, analis frustrasi, dan mereka diam-diam kembali ke *spreadsheet* bayangan. Kepercayaan pada angka mungkin tinggi, tetapi angkanya tak terpakai. Governance yang mematikan kelincahan telah gagal, sekalipun rapi di atas kertas.

Pendekatan yang lebih sehat disebut *governed self-service*: tegakkan definisi tunggal hanya untuk metrik inti bersama, seperti *revenue*, pelanggan aktif, dan margin, yang paling sering memicu konflik, lalu beri analis kebebasan bereksplorasi di sekitarnya. Ini keseimbangan antara kontrol dan kelincahan, bukan pilihan biner.

| Aspek | Governance terlalu ketat | Governed self-service |
|---|---|---|
| Cakupan | Semua metrik dikunci | Hanya metrik inti bersama dikunci |
| Risiko | Birokratis, *shadow spreadsheet* | Perlu disiplin memilih metrik inti |
| Kelincahan analis | Rendah | Tinggi di luar metrik inti |
| Hasil | Dipercaya tapi tak terpakai | Dipercaya dan terpakai |

Praktisnya, mulai dari beberapa metrik yang paling sering diperdebatkan di rapat, bukan seluruh kamus data sekaligus. Governance adalah pekerjaan organisasional, bukan proyek teknologi; lapisan semantik dan katalog hanyalah *enabler* yang menegakkan kesepakatan antar-manusia, bukan penggantinya. Membeli *tools* tak akan menyelesaikan perdebatan definisi yang belum pernah didudukkan. Momen migrasi sistem inti, seperti [migrasi ERP ke cloud](https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud), justru kesempatan baik untuk menata *master data* dan menyepakati definisi metrik sejak awal, sebelum kekacauan lama ikut terbawa pindah.

## FAQ (Pertanyaan yang Sering Diajukan)

### Apa itu single source of truth dalam Business Intelligence?

*Single source of truth* (SSOT) adalah satu rujukan resmi tempat setiap metrik dan data bisnis didefinisikan secara konsisten, sehingga seluruh divisi memakai angka yang sama. Dalam BI, SSOT diwujudkan lewat lapisan semantik dan tata kelola data, bukan sekadar satu database, melainkan satu definisi metrik yang disepakati, misalnya "*revenue*" dihitung dengan rumus yang sama di mana pun.

### Apa bedanya data governance dan data quality?

*Data governance* adalah kerangka kebijakan, peran, dan kepemilikan yang mengatur siapa boleh mendefinisikan, mengubah, dan mengakses data, yaitu "aturan mainnya". *Data quality* adalah kondisi aktual data: akurat, lengkap, konsisten, tepat waktu, yaitu "hasilnya". Keduanya berkaitan tetapi tidak sama; governance adalah sistem yang menegakkan dan menjaga kualitas data.

### Apa itu semantic layer dan metrics layer?

*Semantic layer* adalah lapisan yang menerjemahkan struktur teknis data menjadi istilah bisnis yang dipahami pengguna, sehingga metrik didefinisikan sekali dan dipakai konsisten. *Metrics layer* adalah bagian yang khusus memusatkan definisi KPI. Di SAP Datasphere, lapisan ini dibangun lewat *Business Builder* dan dikonsumsi SAP Analytics Cloud. Standar terbuka Open Semantic Interchange (v1.0, Januari 2026) kini menstandarkan pertukarannya lintas *tool*.

### Apa peran data steward?

*Data steward* adalah orang yang bertanggung jawab atas kualitas, definisi, dan penggunaan data pada domain tertentu, misalnya data pelanggan atau keuangan. Ia memastikan setiap metrik punya definisi tunggal yang disepakati, mendokumentasikannya di katalog, dan menengahi ketika divisi berbeda memakai istilah sama untuk hal berbeda. Tanpa *steward*, definisi metrik menyimpang diam-diam, akar utama masalah "angka beda-beda".

### Apa itu data lineage dan mengapa penting?

*Data lineage* (silsilah data) adalah jejak yang menunjukkan asal-usul sebuah angka: dari sumber mana ia berasal, transformasi apa yang dilaluinya, hingga muncul di dashboard. Ini penting karena tim bisa menelusuri kenapa dua angka berbeda dan menilai dampak sebuah perubahan sebelum diterapkan. SAP Datasphere menyediakan *Impact and Lineage Analysis* grafis untuk memvisualkan pergerakan dan transformasi data.

### Apakah semua metrik harus di-governance secara ketat?

Tidak. Tata kelola ketat pada setiap metrik justru bisa membunuh BI, karena proses jadi birokratis dan pengguna kembali ke *spreadsheet* bayangan. Pendekatan yang lebih sehat adalah *governed self-service*: tegakkan definisi tunggal hanya untuk metrik inti bersama, seperti *revenue* dan margin, yang sering diperdebatkan, lalu beri kebebasan bereksplorasi di sekitarnya. Mulai dari metrik yang paling menyebabkan konflik, bukan seluruh kamus data.

## Kesimpulan

Masalah "angka beda-beda" tidak akan selesai dengan membeli dashboard yang lebih cantik. Ia selesai ketika perusahaan menyepakati satu definisi untuk metrik-metrik intinya, menegakkannya di lapisan semantik, dan menopangnya dengan tata kelola data yang dikaitkan ke masalah bisnis nyata, bukan sekadar kelengkapan dokumen. Mulai dari beberapa metrik yang paling sering diperdebatkan, lalu perluas seiring kepercayaan tumbuh. Melalui layanan Data and AI Consulting, Soltius membantu perusahaan merancang arsitektur data ter-*governed* (misalnya SAP Datasphere/BW/4HANA) agar data yang tersebar menjadi satu sumber kebenaran yang benar-benar dipercaya seluruh divisi.

Untuk mendiskusikan bagaimana membangun *single source of truth* bagi BI di perusahaan Anda, kunjungi soltius.co.id.
