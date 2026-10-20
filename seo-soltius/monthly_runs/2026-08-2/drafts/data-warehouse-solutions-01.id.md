---
title: "Keamanan Data Warehouse Cloud: Enkripsi, Akses, dan Audit"
meta_title: "Keamanan Data Warehouse Cloud: Enkripsi, Akses & Audit"
meta_description: "Peta kontrol keamanan data warehouse cloud: enkripsi at-rest & in-transit, kontrol akses baris (RBAC), data masking, shared responsibility, dan audit log."
slug: "keamanan-data-warehouse-cloud-enkripsi-akses-audit"
language: "id"
primary_keyword: "Data Warehouse Solutions"
secondary_keywords:
  - "keamanan data warehouse"
  - "enkripsi data at-rest dan in-transit"
  - "role-based access control (RBAC)"
  - "row-level security"
  - "customer-managed key (CMK)"
  - "data masking"
  - "shared responsibility model"
  - "audit trail data warehouse"
  - "SAP Datasphere security"
  - "SAP HANA Cloud encryption"
internal_links:
  - url: "https://www.soltius.co.id/id/blog/data-warehouse-solutions"
    anchor: "data warehouse solutions"
  - url: "https://www.soltius.co.id/id/blog/business-intelligence"
    anchor: "business intelligence"
  - url: "https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud"
    anchor: "migrasi ERP ke cloud"
external_citations:
  - url: "https://help.sap.com/docs/SAP_DATASPHERE/0c3780ad05fd417fa27b98418535debd/88565a3dfdc34108a9c401a4d44a0fde.html"
    context: "SAP Datasphere: data, metadata, log, dan backup dienkripsi at-rest dengan customer-specific key; opsi CMK via SAP Key Management Service"
  - url: "https://www.ibm.com/think/insights/data-matters/cost-of-a-data-breach"
    context: "IBM Cost of a Data Breach 2025: rata-rata biaya global USD 4,44 juta; rincian per lingkungan cloud"
brief_id: "data-warehouse-solutions-01"
target_word_count: 1650
publish_month: "2026-08-2"
word_count: 1860
---

# Keamanan Data Warehouse Cloud: Enkripsi, Akses, dan Audit

Seorang CISO diminta menandatangani persetujuan proyek data warehouse cloud pekan ini. Seluruh data operasional perusahaan, mulai dari keuangan, HR, sampai pelanggan, akan dipusatkan di satu platform. Pertanyaan yang menggantung bukan lagi soal arsitektur atau biaya, melainkan: kalau titik terpusat ini jebol, apa saja yang ikut bocor? Kebanyakan artikel tentang [data warehouse solutions](https://www.soltius.co.id/id/blog/data-warehouse-solutions) berhenti di kapabilitas dan harga, lalu melewatkan peta kontrol keamanannya. Tulisan ini mengisi celah itu. Bukan daftar fitur, melainkan peta kontrol teknis: enkripsi, kunci, akses baris, masking, isolasi jaringan, dan audit, yang bisa Anda bawa ke rapat, lengkap dengan garis tanggung jawab yang paling sering disalahpahami antara penyedia cloud dan perusahaan.

> **Ringkas:** Keamanan data warehouse cloud adalah kumpulan kontrol teknis yang melindungi data terpusat di cloud melalui empat lapisan: enkripsi (at-rest dan in-transit), kontrol akses (RBAC dan row-level security), keamanan jaringan (koneksi terisolasi), serta audit trail. Tujuannya memastikan hanya pihak berwenang yang dapat mengakses data, dengan pembagian tanggung jawab jelas antara penyedia cloud dan perusahaan.

Untuk membuat peta itu konkret, sepanjang artikel kontrol yang bersifat umum diilustrasikan dengan **SAP Datasphere** dan fondasinya, **SAP HANA Cloud**, karena keduanya menunjukkan bagaimana kontrol ini benar-benar dikonfigurasi di lapangan.

## Apa Saja Lapisan Keamanan Data Warehouse Cloud?

Keamanan data warehouse cloud bekerja berlapis, bukan satu tombol. Empat lapisan utamanya: enkripsi yang mengacak data saat disimpan dan dikirim; kontrol akses yang menentukan siapa boleh melihat apa; keamanan jaringan yang mengisolasi jalur koneksi; dan audit trail yang merekam siapa mengakses data dan kapan. Melemahkan satu lapisan berarti melemahkan keseluruhan.

Cara paling berguna memandangnya adalah sebagai pertahanan berlapis, bukan pagar tunggal. Setiap lapisan mengasumsikan lapisan lain suatu saat bisa gagal, sehingga masing-masing tetap berdiri sendiri.

1. **Lapisan data (enkripsi).** Data diacak baik saat tersimpan di disk (*at-rest*) maupun saat berpindah antar sistem (*in-transit*), sehingga tidak terbaca meski media penyimpanan atau lalu lintas jaringan disadap.
2. **Lapisan akses (kontrol identitas dan baris).** Menentukan fungsi apa yang boleh dijalankan seorang pengguna lewat *role-based access control* (RBAC, kontrol akses berbasis peran) dan baris data mana yang boleh dilihatnya lewat *row-level security* (keamanan tingkat baris).
3. **Lapisan jaringan (konektivitas aman).** Membatasi jalur masuk ke data warehouse agar hanya koneksi tepercaya dan terenkripsi yang diterima, alih-alih membuka sistem ke jaringan publik.
4. **Lapisan audit (jejak dan pemantauan).** Merekam operasi baca dan ubah sehingga, saat terjadi insiden, ada catatan yang bisa ditelusuri, bukan tebak-tebakan.

Tiga lapisan pertama mencegah; lapisan keempat membuktikan. Banyak organisasi rajin di enkripsi tetapi lupa audit, dan baru menyadarinya persis ketika mereka paling membutuhkannya.

## Enkripsi: At-Rest, In-Transit, dan Siapa yang Pegang Kuncinya

Enkripsi melindungi data dalam dua kondisi. *At-rest* mengacak data yang tersimpan di disk; *in-transit* mengacak data yang sedang berpindah antar komponen atau koneksi. Di lapisan SAP HANA Cloud, data at-rest dienkripsi memakai algoritma AES-256-CBC, sementara komunikasi antar komponen diproteksi TLS 1.2 atau lebih tinggi. Pertanyaan yang lebih menentukan menyusul: siapa yang memegang kuncinya?

Di SAP Datasphere, cakupan enkripsi at-rest tergolong luas. Menurut [dokumentasi SAP Help Portal](https://help.sap.com/docs/SAP_DATASPHERE/0c3780ad05fd417fa27b98418535debd/88565a3dfdc34108a9c401a4d44a0fde.html), data, metadata, log, dan backup pelanggan semuanya dienkripsi saat disimpan, masing-masing dengan *customer-specific encryption key*. Backup pun tidak luput: berdasarkan dokumentasi SAP saat ini, backup tenant dienkripsi dan dilakukan pada interval sekitar 15 menit. Artinya, data yang paling sering terlupakan dalam diskusi keamanan, yakni salinan cadangan, justru sudah masuk cakupan.

| Aspek | At-Rest | In-Transit |
|---|---|---|
| Yang dilindungi | Data, metadata, log, dan backup tersimpan di disk | Data saat berpindah antar komponen dan koneksi |
| Mekanisme | AES-256-CBC (lapisan HANA Cloud), *customer-specific key* | TLS 1.2 atau lebih tinggi (Web UI, CLI, API) |
| Kepemilikan kunci | Default dikelola SAP; opsi CMK via SAP Key Management Service | Sertifikat dan kepercayaan dikelola per koneksi |
| Catatan | Backup terenkripsi (interval ~15 menit) | Koneksi tak terenkripsi (mis. JDBC/ODBC polos) ditolak |

Soal kunci itulah yang membedakan keamanan "cukup" dari keamanan "terkendali". Secara default, penyedia yang mengelola kunci enkripsi. Bila regulator, kebijakan internal, atau standar audit menuntut kontrol lebih, Anda dapat membuat *Customer-Managed Key* (CMK, kunci yang dikelola pelanggan) melalui SAP Key Management Service, lalu meminta SAP mengenkripsi database atau object store dengan kunci itu. Konsekuensinya penting: SAP tidak memiliki akses ke kunci pelanggan, sehingga tercipta pemisahan tugas yang sesungguhnya.

CMK menambah kontrol, tetapi juga menambah tanggung jawab. Memegang kunci sendiri berarti Anda menanggung tata kelola rotasi dan pemulihannya. Kehilangan kunci bisa berarti kehilangan akses ke data, bukan sekadar merepotkan. Jadi CMK bukan tombol "lebih aman otomatis", melainkan keputusan tata kelola yang perlu prosedur pendukung.

## Bagaimana Membatasi Siapa yang Melihat Baris Data Mana?

Dengan dua kontrol yang saling melengkapi, bukan saling menggantikan. RBAC menentukan fungsi dan objek apa yang boleh diakses seorang pengguna; *row-level security* menentukan baris data mana yang terlihat olehnya. Di SAP Datasphere, kontrol tingkat baris diterapkan lewat **Data Access Controls** (DAC), sedangkan isi kolom sensitif disembunyikan dengan **data masking** pada SAP HANA Cloud.

Perbedaan ini kerap dicampur, padahal keduanya menjawab pertanyaan berbeda. RBAC menjawab "boleh melakukan apa"; row-level menjawab "boleh melihat baris yang mana". Seorang manajer wilayah Jawa dan manajer wilayah Sumatra bisa punya peran identik, tetapi hanya melihat data wilayahnya masing-masing. Itu kerja row-level, bukan RBAC.

Data Access Controls di SAP Datasphere menyediakan tiga tipe kriteria, yang bisa dipilih sesuai kerumitan aturannya.

| Tipe DAC | Cara kerja | Kapan dipakai |
|---|---|---|
| Single Values | Pengguna dibatasi ke nilai persis pada kolom kriteria | Filter sederhana, mis. kode cabang |
| Operator and Values | Pasangan operator-nilai dengan kombinasi Boolean AND/OR (EQ, GT, BT, LIKE, dan lainnya) | Skenario kompleks; menekan beban administrasi |
| Hierarchy | Pengguna melihat nilai yang diizinkan beserta seluruh turunannya | Struktur berjenjang, mis. organisasi atau wilayah |

Row-level mengatur baris; masking mengatur isi kolom. *Data masking* SAP HANA Cloud mengubah cara data tampil di *view* tanpa mengubah data aslinya yang tersimpan. Nomor kartu, misalnya, tampil sebagai `1111-XXXX-XXXX-4444` bagi pengguna biasa, dan hanya terlihat utuh oleh pemegang privilege UNMASKED. Karena yang berubah hanya tampilan, database tetap bisa menjalankan kalkulasi di atas data asli, sehingga dashboard [business intelligence](https://www.soltius.co.id/id/blog/business-intelligence) tetap bisa dibangun di atas data yang aman.

Satu istilah jangan tertukar: masking bukan anonymization. Masking menyembunyikan tampilan kolom bagi pihak tak berwenang. *Data anonymization* SAP HANA Cloud, yang tersedia sejak SAP HANA 2.0 SPS 02 (2018), mengubah data agar aman dianalisis pada tingkat populasi tanpa mengidentifikasi individu. Prinsip yang menyatukan semuanya adalah *least privilege*: akses diberikan seminimal yang benar-benar dibutuhkan tugas, tidak lebih.

## Shared Responsibility: Batas Tanggung Jawab Vendor dan Perusahaan Anda

Dalam model *shared responsibility* (tanggung jawab bersama), penyedia dan pelanggan mengamankan hal yang berbeda. SAP mengamankan infrastruktur, platform, dan enkripsi bawaan; perusahaan Anda mengonfigurasi pengguna, akses data (role dan row-level), koneksi, serta mengaktifkan audit. Garis inilah yang paling sering disalahpahami: cloud memberi fondasi, bukan keamanan yang sudah jadi.

Menganggap penyedia mengurus segalanya adalah asumsi yang mahal. Yang benar, ada pembagian kerja yang tegas, dan celah keamanan paling sering muncul persis di kolom yang menjadi tanggung jawab pelanggan.

| Area | SAP (penyedia) | Perusahaan (Anda) |
|---|---|---|
| Infrastruktur dan platform fisik | Amankan dan patch | — |
| Enkripsi at-rest/in-transit (mesin) | Sediakan dan kelola default | Aktifkan opsi lanjutan, mis. CMK |
| Pengguna dan identitas di dalam solusi | Kelola identitas layanan | Kelola user, autentikasi, otorisasi |
| Akses data (RBAC/row-level) | Sediakan mekanisme | Konfigurasi role, DAC, dan masking |
| Koneksi ke sistem lain | Sediakan kanal aman | Tentukan sistem dan scope yang diekspos |
| Audit log dan deteksi ancaman | Sediakan kapabilitas | Aktifkan, atur retensi, dan pantau |

Lapisan jaringan menempati kolom pelanggan juga. Untuk menghubungkan data warehouse cloud ke sistem on-premise, SAP Cloud Connector bertindak sebagai *reverse invoke proxy*: ia membuka tunnel terenkripsi dari sisi internal Anda dan memberi kontrol granular atas sistem mana yang boleh dijangkau, alih-alih membuka seluruh jaringan di balik firewall. Keputusan sepenting ini sebaiknya tidak diserahkan ke pengaturan default, dan idealnya sudah dipetakan sejak tahap perencanaan [migrasi ERP ke cloud](https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud), ketika sistem inti dan data pendukungnya dipindahkan bersamaan.

## Salah Kaprah: "Sudah di Cloud, Berarti Sudah Aman"

Keliru. Penyedia cloud mengamankan fondasi, tetapi kontrol yang paling menentukan (akses baris, masking, audit log, dan kunci) harus dikonfigurasi pelanggan, dan banyak di antaranya mati secara default. Gartner bahkan memproyeksikan bahwa hingga 2025, mayoritas kegagalan keamanan cloud berakar pada kesalahan pelanggan, umumnya salah konfigurasi, bukan kelemahan penyedia.

Proyeksi Gartner itu ("through 2025, 99% of cloud security failures will be the customer's fault") berasal dari 2019 dengan horizon hingga 2025, jadi perlakukan sebagai gambaran pola, bukan statistik terukur terbaru. Namun polanya konsisten dengan data biaya. Laporan *Cost of a Data Breach 2025* dari [IBM](https://www.ibm.com/think/insights/data-matters/cost-of-a-data-breach) menaruh rata-rata biaya pelanggaran data global di USD 4,44 juta, dengan lingkungan private cloud di USD 4,68 juta dan multi-environment paling mahal di USD 5,05 juta. Angka-angka itu bukan sekadar risiko teoretis.

Kesalahan yang berulang biasanya bukan hal eksotis, melainkan konfigurasi mendasar yang terlewat:

- **Audit log dibiarkan mati.** Di SAP Datasphere, audit untuk operasi baca dan ubah bersifat opt-in per Space; menganggapnya sudah menyala adalah asumsi berbahaya saat insiden terjadi.
- **Akses terlalu longgar.** Peran diberikan lebih luas dari kebutuhan, dan row-level tidak pernah dikonfigurasi, sehingga terlalu banyak orang melihat terlalu banyak baris.
- **Kolom sensitif tidak di-masking.** Data yang seharusnya tersamar tampil polos bagi analis yang sebenarnya tidak perlu melihatnya.
- **Koneksi dibuka terlalu lebar.** Seluruh jaringan diekspos, bukan hanya sistem yang benar-benar perlu diakses.

Di lapangan, dua kontrol yang paling sering lupa diaktifkan justru audit log dan row-level access, dua hal yang paling dicari begitu ada dugaan kebocoran. Soal retensi audit pun sering diabaikan: berdasarkan dokumentasi SAP saat ini, di SAP Datasphere retensi default audit log adalah 30 hari, dengan minimum 7 hari dan maksimum hingga 10.000 hari. Menyesuaikan angka ini dengan kebutuhan investigasi dan kewajiban audit internal adalah pekerjaan lima menit yang sering tidak pernah dilakukan.

## FAQ (Pertanyaan yang Sering Diajukan)

### Apakah data warehouse cloud lebih aman daripada on-premise?
Tidak otomatis. Keamanannya bergantung pada konfigurasi, bukan lokasi. Penyedia seperti SAP mengamankan infrastruktur (enkripsi at-rest AES-256, TLS in-transit, backup terenkripsi), tetapi pelanggan tetap bertanggung jawab mengonfigurasi role, akses baris, dan audit. Gartner bahkan memproyeksikan mayoritas kegagalan keamanan cloud berakar pada kesalahan pelanggan. Cloud memberi fondasi kuat; sisanya soal disiplin konfigurasi.

### Apa itu Customer-Managed Key (CMK) dan kapan perusahaan membutuhkannya?
CMK adalah kunci enkripsi yang dibuat dan dikendalikan pelanggan sendiri, bukan dikelola default oleh penyedia. Di SAP Datasphere, Anda dapat membuat CMK melalui SAP Key Management Service, lalu meminta SAP mengenkripsi database atau object store dengan kunci itu, dan SAP tidak memiliki akses ke kunci Anda. CMK relevan bila regulator atau standar audit menuntut kontrol penuh dan pemisahan tugas atas kunci.

### Bagaimana mencegah administrator atau analis melihat data sensitif tertentu?
Gunakan dua lapisan. Pertama, row-level security lewat Data Access Controls agar pengguna hanya melihat baris yang diizinkan, misalnya hanya data wilayahnya. Kedua, data masking SAP HANA Cloud yang menyembunyikan isi kolom sensitif, misalnya nomor kartu menjadi 1111-XXXX-XXXX-4444; data hanya terlihat utuh oleh pemegang privilege UNMASKED. Prinsipnya least privilege: akses seminimal yang dibutuhkan tugas.

### Apakah masking mengurangi kegunaan data untuk analitik?
Tidak signifikan bila memakai native data masking. Masking hanya mengubah tampilan data di view, bukan data yang tersimpan, sehingga database tetap bisa menjalankan kalkulasi atas data aslinya. Untuk analisis lintas populasi tanpa membuka identitas individu, SAP HANA Cloud juga menyediakan data anonymization. Jadi keamanan dan kegunaan analitik bisa berjalan bersama, bukan saling meniadakan.

### Berapa lama audit log data warehouse disimpan?
Bergantung pada konfigurasi Anda. Di SAP Datasphere, audit log untuk operasi baca maupun ubah diaktifkan per Space, dan retensinya dapat diatur: default 30 hari, minimum 7 hari, hingga maksimum 10.000 hari (berdasarkan dokumentasi SAP saat ini). Perlu diingat, audit log tidak aktif secara default. Sesuaikan retensi dengan kebutuhan investigasi insiden dan kewajiban audit internal Anda.

### Apa bedanya keamanan data warehouse dan kepatuhan (misalnya UU PDP)?
Keamanan adalah kontrol teknis yang mencegah akses tidak sah: enkripsi, RBAC, row-level access, masking, isolasi jaringan, dan audit. Kepatuhan adalah pemenuhan kewajiban hukum atas data pribadi: dasar pemrosesan, retensi, dan hak subjek data. Keduanya beririsan pada audit trail, tetapi berbeda fokus. Sistem bisa patuh secara dokumen namun tetap rentan bila kontrol teknisnya lemah.

## Kesimpulan

Memindahkan seluruh data ke satu data warehouse cloud memang memusatkan risiko, tetapi risiko itu bisa dijinakkan bila keempat lapisannya, yaitu enkripsi, akses, jaringan, dan audit, dikonfigurasi secara sadar, bukan dibiarkan pada pengaturan bawaan. Fondasi dari penyedia sudah kuat; yang menentukan adalah disiplin di kolom tanggung jawab Anda, terutama row-level access dan audit log yang paling sering terlewat. Melalui layanan Data and AI Consulting, Soltius mendampingi perusahaan mengonfigurasi dan mengaudit kontrol keamanan seperti ini di implementasi SAP Datasphere dan SAP HANA Cloud, sebagai mitra yang menerapkan dan menyetel platform, bukan membuatnya. Titik awal yang baik bukan membeli lebih banyak teknologi, melainkan memetakan kontrol mana yang sudah aktif dan mana yang masih mati.

Untuk mendiskusikan kesiapan keamanan data warehouse cloud di perusahaan Anda, kunjungi soltius.co.id dan mulai dari penilaian kontrol yang ringkas.
