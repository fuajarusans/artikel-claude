---
title: "Cara Menentukan Ukuran Data Warehouse: Panduan Sizing Compute & Storage"
meta_title: "Sizing Data Warehouse: Panduan Compute & Storage"
meta_description: "Panduan sizing data warehouse: cara menghitung storage, compute, dan concurrency dari input bisnis, plus contoh perhitungan dan rightsizing biaya cloud."
slug: "cara-sizing-data-warehouse-compute-storage"
language: "id"
primary_keyword: "Data Warehouse Solutions"
secondary_keywords:
  - "sizing data warehouse"
  - "capacity planning"
  - "compute vs storage"
  - "concurrency"
  - "rightsizing cloud"
  - "consumption-based pricing"
  - "rasio kompresi data"
  - "SAP HANA Cloud"
  - "SAP Datasphere"
  - "MPP"
internal_links:
  - url: "https://www.soltius.co.id/id/blog/data-warehouse-solutions"
    anchor: "Data Warehouse Solutions"
  - url: "https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud"
    anchor: "migrasi ERP ke cloud"
  - url: "https://www.soltius.co.id/id/blog/business-intelligence"
    anchor: "Business Intelligence"
external_citations:
  - url: "https://learn.microsoft.com/en-us/sql/analytics-platform-system/processing-and-storage-capacity-planning"
    context: "Rasio kompresi 5:1 dan cadangan ~50% log/tempDB sebagai rule-of-thumb; performa query MPP naik dengan jumlah CPU core paralel"
  - url: "https://help.sap.com/docs/hana-cloud-database/sap-hana-cloud-sap-hana-database-administration-guide/what-is-elastic-compute-node"
    context: "Pemisahan skala compute/storage & Elastic Compute Node on-demand di SAP HANA Cloud"
brief_id: "data-warehouse-solutions-02"
target_word_count: 1650
publish_month: "2026-07-2"
word_count: 1946
---

# Cara Menentukan Ukuran Data Warehouse: Panduan Sizing Compute & Storage

Cepat atau lambat, kepala IT atau data akan mendapat pertanyaan yang terdengar sederhana dari manajemen: "Kira-kira kita butuh seberapa besar, dan berapa biayanya?" Di situlah masalahnya dimulai. Menebak terlalu besar berarti membayar kapasitas menganggur bertahun-tahun; menebak terlalu kecil berarti query lambat, dashboard *timeout*, dan tim mengeluh. Artikel ini bukan katalog spesifikasi vendor, melainkan kerangka praktis menentukan ukuran data warehouse dari sisi bisnis. Bagi Anda yang sedang menimbang berbagai [Data Warehouse Solutions](https://www.soltius.co.id/id/blog/data-warehouse-solutions), memahami cara menghitung kebutuhan lebih dulu akan menghemat banyak biaya di kemudian hari.

> **Secara singkat:** *Sizing* data warehouse adalah proses menentukan kapasitas *storage*, *compute*, dan *concurrency* agar performa query sesuai kebutuhan tanpa membayar kapasitas menganggur. Berbeda dari sekadar "berapa TB", sizing menerjemahkan input bisnis (volume data dengan rasio kompresi, jumlah pengguna bersamaan, dan proyeksi pertumbuhan) menjadi keputusan teknis compute dan storage, yang di cloud *consumption-based* langsung memengaruhi biaya bulanan.

Melalui panduan ini, kita akan membahas mengapa sizing sering meleset, lima input bisnis yang menentukan ukuran, mana yang lebih memengaruhi biaya antara compute dan storage, satu contoh perhitungan bertahap, dan mengapa menyiapkan kapasitas untuk beban puncak justru kesalahan mahal.

## Apa Itu Sizing Data Warehouse dan Mengapa Sering Meleset?

Sizing data warehouse adalah *capacity planning* (perencanaan kapasitas) untuk tiga dimensi berbeda, bukan satu angka tunggal: *storage* (kapasitas menyimpan data dan retensi historis), *compute* (tenaga pemrosesan yang menentukan kecepatan query), dan *concurrency* (jumlah query yang berjalan bersamaan). Meleset terjadi ketika seseorang mereduksi semuanya menjadi "berapa terabyte".

Kesalahan itu masuk akal secara historis. Di era on-premise, sizing identik dengan membeli disk dan server sekaligus, satu keputusan besar di awal. Di cloud modern, storage dan compute sering ditagih terpisah, per jam pemakaian. Salah sizing tidak lagi tampak sebagai server yang salah beli, tetapi sebagai angka yang membengkak di tagihan bulanan.

Dua kesalahan klasik saling berlawanan. Yang pertama, *over-provisioning*: mengunci kapasitas besar "untuk jaga-jaga" lalu membayarnya setiap bulan meski jarang dipakai. Yang kedua, *under-provisioning*: memasang kapasitas seadanya sampai dashboard mulai *timeout* saat banyak orang mengakses laporan bersamaan. Sizing yang baik berdiri di antara keduanya, dan itu menuntut Anda memisahkan tiga dimensi tadi alih-alih menumpuknya jadi satu tebakan.

| Dimensi | Yang diukur | Input bisnis penentu | Sifat biaya |
|---|---|---|---|
| **Storage** | Kapasitas menyimpan data (TB) | Volume data mentah × kompresi + retensi historis + cadangan log/temp | Relatif murah, elastis |
| **Compute** | Kecepatan pemrosesan query (CPU core/memory, MPP) | Berat/kompleksitas query, SLA waktu laporan | **Pemicu biaya utama** di cloud |
| **Concurrency** | Jumlah query/user bersamaan | Jumlah pengguna BI/dashboard, jendela pelaporan | Menuntut compute paralel, bukan storage |

## Lima Input Bisnis yang Menentukan Ukuran Data Warehouse Anda

Ukuran yang tepat berangkat dari kebutuhan bisnis, bukan lembar spesifikasi. Ada lima input yang menentukan: volume data mentah dikalikan rasio kompresi, retensi historis, jumlah pengguna bersamaan, kompleksitas query, dan proyeksi pertumbuhan tahunan. Terjemahkan tiap input menjadi implikasi teknis, dan angka kapasitas akan muncul dengan sendirinya, bukan dari tebakan.

1. **Volume data mentah dan rasio kompresi.** Titik awalnya adalah berapa banyak data yang masuk. Namun data mentah menyusut setelah disimpan dalam format kolumnar. Sebagai *rule-of-thumb*, dokumentasi kapasitas Microsoft memakai rasio kompresi 5:1 untuk memperkirakan storage dari data mentah (Microsoft Learn, diperbarui Januari 2026). Untuk platform *in-memory* seperti SAP HANA, SAP menyebut faktor kompresi kolumnar sekitar 10 sebagai perkiraan kasar. Kedua angka berasal dari konteks berbeda dan bukan jaminan; hasil nyata bergantung pada sifat data Anda.
2. **Retensi historis.** Menyimpan data dua tahun berbeda jauh dengan menyimpan sepuluh tahun. Kebijakan retensi, yang sering ditentukan regulasi atau kebutuhan analisis tren, langsung memperbesar kebutuhan storage. Ini keputusan bisnis, bukan teknis.
3. **Jumlah pengguna bersamaan (concurrency).** Inilah input yang paling sering diremehkan. Data kecil pun bisa terasa lambat jika seratus orang menarik dashboard di Senin pagi yang sama. Concurrency menuntut compute paralel, bukan storage lebih besar.
4. **Kompleksitas dan berat query.** Laporan agregasi lintas jutaan baris menuntut tenaga pemrosesan jauh lebih besar daripada sekadar menampilkan satu baris transaksi. SLA waktu laporan, misalnya "dashboard harus siap dalam lima detik", menentukan tier compute yang Anda perlukan.
5. **Proyeksi pertumbuhan tahunan.** Data hari ini bukan data tahun depan. Proyeksikan pertumbuhan dari kenaikan volume transaksi, sumber data baru yang akan diintegrasikan, dan kebijakan retensi. Sisakan *headroom* yang realistis, bukan angka puncak seumur hidup sistem.

Perhatikan pola di lima input itu: hanya dua yang benar-benar soal storage (volume dan retensi). Tiga sisanya, yaitu concurrency, berat query, dan sebagian pertumbuhan, bermuara ke compute. Ini petunjuk penting untuk pertanyaan biaya berikutnya.

## Compute atau Storage: Mana yang Sebenarnya Menentukan Biaya Anda?

Di cloud *consumption-based*, compute hampir selalu menjadi pemicu biaya utama, bukan storage. Storage relatif murah dan elastis. Compute (CPU core dan memory yang menjalankan query) mahal karena menentukan kecepatan, dan biasanya ditagih per jam menyala. Banyak pembeli fokus ke "berapa TB", padahal tagihan sebenarnya digerakkan oleh compute yang aktif.

Alasannya bersifat arsitektural. Data warehouse modern memakai *Massively Parallel Processing* (MPP), yaitu memecah satu query ke banyak CPU core yang bekerja serentak. Performa query, seperti dijelaskan dokumentasi Microsoft, "sangat bergantung pada jumlah CPU core yang memproses data Anda secara paralel". Sebagai ilustrasi, satu appliance dengan 12 *compute node* menyediakan 192 core paralel. Menambah core dalam batas wajar mempercepat query, dan core itulah yang Anda bayar.

Karena itu arsitektur cloud modern memisahkan skala compute dari storage. SAP HANA Cloud, misalnya, memungkinkan menaikkan atau menurunkan kapasitas disk tanpa mengubah memory atau jumlah *vCPU* (SAP Learning). Anda bisa menambah ruang simpan yang murah tanpa ikut menambah compute yang mahal, dan sebaliknya. Menyamakan "besar data" dengan "besar biaya" adalah keliru. Yang membakar anggaran adalah tenaga pemrosesan yang menyala, terutama ketika banyak pengguna [Business Intelligence](https://www.soltius.co.id/id/blog/business-intelligence) mengakses dashboard secara bersamaan.

## Contoh Perhitungan: Dari 2 TB Data Mentah ke Rekomendasi Kapasitas

Berikut satu contoh ilustratif, bukan patokan pembelian, untuk menunjukkan alur berpikirnya. Mulai dari 2 TB data mentah, terapkan rasio kompresi 5:1 (rule-of-thumb Microsoft) menjadi sekitar 0,4 TB, lalu tambahkan cadangan sekitar 50% untuk log dan area kerja sementara (*tempDB*), sehingga storage yang perlu disediakan kira-kira 0,6 TB. Compute ditentukan terpisah, dari concurrency dan berat query.

| Langkah | Perhitungan | Hasil |
|---|---|---|
| Data mentah | Titik awal | 2 TB |
| Setelah kompresi (5:1, rule-of-thumb Microsoft) | 2 TB ÷ 5 | ~0,4 TB data terkompres |
| Cadangan log + tempDB (~50%) | +50% area kerja | ~0,6 TB storage disediakan |
| Compute (tier) | Ditentukan concurrency + berat query, bukan ukuran data | tier untuk N pengguna bersamaan |
| Pertumbuhan | +headroom realistis (mis. 20–30%/tahun), andalkan elastisitas | tinjau berkala |

Angka 5:1 dan 50% di atas adalah rule-of-thumb dari dokumentasi kapasitas Microsoft untuk produk mereka, bukan standar universal semua data warehouse. Perlakukan tabel ini sebagai ilustrasi alur, lalu validasi dengan rasio kompresi data Anda sendiri. Di lapangan, sizing paling akurat berangkat dari profil query nyata, bukan tebakan di atas kertas.

Skala keputusannya berbeda menurut ukuran organisasi (kerangka kasar, bukan angka pasti):

| Skenario | Data mentah | Pengguna bersamaan | Fokus keputusan |
|---|---|---|---|
| Kecil | < 1 TB | < 20 | Storage kecil; 1 tier compute; elastisitas cukup |
| Menengah | 1–10 TB | 20–100 | Pisahkan compute/storage; siapkan auto-scale untuk peak |
| Besar | > 10 TB | > 100 | MPP + node compute tambahan untuk beban berat; disiplin FinOps ketat |

Sebagai contoh platform yang menerapkan pemisahan ini, SAP Datasphere (yang berjalan di atas SAP HANA Cloud) memakai model *Capacity Unit* dengan blok compute dan storage terpisah, dan menyediakan Estimator resmi untuk memperkirakan kebutuhan. Datasphere kini menjadi bagian dari SAP Business Data Cloud, platform data terkelola yang diluncurkan SAP pada Februari 2025 (SAP News Center).

## Jangan Sizing untuk Beban Puncak: Rightsizing dan Elastisitas di Cloud

Mengonfigurasi kapasitas default untuk beban puncak adalah kesalahan sizing yang paling mahal di cloud. Beban puncak, misalnya lonjakan laporan akhir kuartal, mungkin hanya terjadi beberapa hari dalam setahun, tetapi kapasitas yang di-set untuk itu ditagih setiap jam sepanjang tahun. *Rightsizing* berarti menyetel *baseline* yang wajar untuk beban normal, lalu membiarkan elastisitas menangani lonjakan.

Di sinilah pemisahan compute/storage tadi terbayar. SAP HANA Cloud, contohnya, memperkenalkan *Elastic Compute Node* (ECN) pada rilis akhir 2024 — node compute *read-only* yang ditambahkan dan dilepas sesuai kebutuhan untuk menampung lonjakan beban query, lalu dimatikan setelahnya (SAP Help Portal). Pola seperti ini menjaga *footprint* dan biaya tetap kecil: Anda membayar tenaga ekstra hanya saat benar-benar dibutuhkan, bukan sepanjang waktu.

Namun jujur saja: elastisitas cloud bukan alasan mengabaikan perencanaan, dan cloud tidak selalu lebih murah. Untuk beban besar yang stabil, prediktabel, dan berjalan 24/7, kapasitas tetap on-premise bisa lebih ekonomis dibanding model *consumption-based* yang menyala terus-menerus. Yang menentukan bukan "cloud versus on-premise", melainkan disiplin rightsizing dan kejujuran soal profil beban Anda. Keputusan kapasitas ini juga muncul saat proyek [migrasi ERP ke cloud](https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud), momen yang tepat untuk menata ulang sizing.

## FAQ (Pertanyaan yang Sering Diajukan)

### Bagaimana cara menghitung ukuran (sizing) data warehouse?

Mulai dari kebutuhan bisnis, bukan spesifikasi vendor. Hitung volume data mentah, terapkan rasio kompresi (rule-of-thumb umum 5:1 pada dokumentasi kapasitas Microsoft), lalu cadangkan sekitar 50% untuk log dan area kerja sementara (tempDB). Setelah storage, tentukan compute dari jumlah pengguna bersamaan dan berat query, karena performa MPP naik seiring jumlah CPU core paralel. Tambahkan proyeksi pertumbuhan tahunan sebelum memilih tier.

### Berapa rasio kompresi data yang umum dipakai untuk perhitungan?

Sebagai rule-of-thumb, dokumentasi kapasitas Microsoft memakai rasio 5:1 untuk memperkirakan storage dari data mentah. Untuk platform in-memory seperti SAP HANA, SAP menyebut kompresi kolumnar sekitar faktor 10 sebagai perkiraan kasar. Angka nyata bervariasi menurut sifat data, tipe kolom, dan nilai berulang, sehingga rasio ini harus diperlakukan sebagai estimasi awal, bukan jaminan. Validasi dengan data Anda sendiri.

### Apa beda menskalakan compute dan menskalakan storage?

Storage adalah kapasitas menyimpan data, relatif murah dan mudah ditambah atau dikurangi. Compute adalah tenaga pemrosesan (CPU core, memory) yang menentukan kecepatan query dan biasanya menjadi pemicu biaya utama di cloud. Arsitektur modern memisahkan keduanya: SAP HANA Cloud, misalnya, memungkinkan menaikkan disk tanpa mengubah memory atau vCPU, dan menambah Elastic Compute Node read-only hanya saat beban query melonjak.

### Apa itu concurrency dan mengapa penting untuk sizing?

Concurrency adalah jumlah pengguna atau query yang berjalan bersamaan pada data warehouse, misalnya lonjakan dashboard tiap Senin pagi saat tim menyiapkan laporan. Concurrency tinggi menuntut compute paralel lebih besar, bukan sekadar storage lebih banyak. Karena inilah jumlah pengguna BI yang query bersamaan menjadi salah satu input sizing yang paling sering diremehkan dan menyebabkan dashboard timeout.

### Bagaimana memperkirakan pertumbuhan data ke depan saat sizing?

Proyeksikan pertumbuhan dari tiga sumber: kenaikan volume transaksi tahunan, sumber data baru yang akan diintegrasikan, dan kebijakan retensi historis (berapa tahun data disimpan). Sisakan headroom yang realistis, bukan angka puncak seumur hidup. Di cloud consumption-based, over-provisioning untuk pertumbuhan bertahun-tahun ke depan berarti membayar kapasitas menganggur setiap bulan; lebih baik andalkan elastisitas dan tinjau ulang kapasitas berkala.

### Apakah cloud selalu lebih murah untuk data warehouse beban besar?

Tidak selalu. Cloud unggul saat beban fluktuatif karena Anda membayar sesuai pemakaian dan bisa auto-scale atau pause. Namun untuk beban besar yang stabil dan berjalan terus-menerus, model consumption-based bisa lebih mahal dari kapasitas tetap jika tidak dikelola. Yang menentukan bukan "cloud vs on-premise", melainkan disiplin rightsizing.

### Bagaimana SAP HANA Cloud dan SAP Datasphere menangani penskalaan?

SAP HANA Cloud memisahkan skala compute dan storage: disk bisa dinaikkan atau diturunkan tanpa mengubah memory atau vCPU, dan sejak rilis akhir 2024 tersedia Elastic Compute Node on-demand untuk lonjakan query. SAP Datasphere, yang berjalan di atasnya, memakai model Capacity Unit dengan blok compute dan storage terpisah serta menyediakan Estimator resmi; kini menjadi bagian dari SAP Business Data Cloud.

## Kesimpulan

Ukuran data warehouse yang tepat tidak lahir dari menebak "berapa TB", melainkan dari menerjemahkan input bisnis (volume dan retensi data, concurrency, berat query, dan pertumbuhan) menjadi keputusan storage dan compute yang terpisah. Kuncinya: storage murah dan elastis, sementara compute-lah yang menggerakkan biaya, sehingga rightsizing dan elastisitas lebih menghemat daripada mengunci kapasitas untuk beban puncak. Melalui layanan Data and AI Consulting, Soltius membantu memetakan beban kerja nyata (profil query, jumlah pengguna, retensi, pertumbuhan) ke kapasitas yang pas, menghindari kapasitas menganggur maupun keluhan performa.

Untuk mendiskusikan sizing data warehouse yang sesuai profil beban perusahaan Anda, kunjungi soltius.co.id.
