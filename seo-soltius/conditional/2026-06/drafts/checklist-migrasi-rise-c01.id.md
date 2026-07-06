---
title: "Checklist Kesiapan Migrasi RISE with SAP: 10 Hal yang Harus Disiapkan"
meta_title: "Checklist Migrasi RISE with SAP: 10 Hal yang Disiapkan"
meta_description: "Checklist migrasi RISE with SAP: 10 hal wajib disiapkan, dari pembersihan data master dan remediasi custom code hingga SAP Readiness Check dan biaya dual-run."
slug: "checklist-migrasi-rise-with-sap-10-hal-disiapkan"
language: "id"
primary_keyword: "checklist migrasi RISE with SAP"
secondary_keywords:
  - "kesiapan migrasi RISE SAP"
  - "persiapan migrasi RISE with SAP"
  - "SAP Readiness Check"
  - "pembersihan data master SAP"
  - "remediasi custom code"
  - "model tanggung jawab bersama SAP"
  - "SAP S/4HANA Cloud Private Edition"
  - "SAP Migration Cockpit"
  - "change management migrasi ERP"
  - "SAP ECC end of maintenance 2027"
  - "biaya dual-run migrasi"
internal_links:
  - url: "https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud"
    anchor: "migrasi ERP ke cloud"
  - url: "https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide"
    anchor: "SAP Clean Core"
  - url: "https://www.soltius.co.id/id/blog/5-kesalahan-umum-saat-migrasi-ke-rise-with-sap-dan-cara-menghindarinya"
    anchor: "kesalahan umum saat migrasi RISE with SAP"
external_citations:
  - url: "https://support.sap.com/en/release-upgrade-maintenance/maintenance-information/maintenance-strategy/s4hana-business-suite7.html"
    context: "Tenggat maintenance SAP Business Suite 7: mainstream 31 Des 2027, extended 31 Des 2030 (+2 poin persentase)"
  - url: "https://news.sap.com/2025/02/compass-map-vehicle-three-tools-erp-migration/"
    context: "Nama resmi dan fungsi tiga alat migrasi SAP: Custom Code Migration app, Migration Cockpit, Business Transformation Center"
brief_id: "checklist-migrasi-rise-c01"
target_word_count: 1750
publish_month: "2026-06"
word_count: 1750
date_modified: "2026-06-17"
---

# Checklist Kesiapan Migrasi RISE with SAP: 10 Hal yang Harus Disiapkan

Anda sudah memutuskan jalur migrasi: RISE with SAP. Kontrak hampir di meja, anggaran sedang disusun. Lalu muncul pertanyaan yang jauh lebih sulit dijawab daripada "kenapa pindah ke cloud", yaitu "konkretnya, apa saja yang harus kami siapkan sebelum proyek dimulai?" Panduan yang beredar umumnya berhenti di tataran strategis atau membahas implementasi SAP secara umum. Artikel ini berbeda: sebuah **checklist migrasi RISE with SAP** berisi 10 item taktis yang bisa Anda bawa langsung ke rapat internal, lengkap dengan siapa pemiliknya dan alat apa yang dipakai. Konteks besarnya, [migrasi ERP ke cloud](https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud), tetap penting, tapi di sini fokusnya pada langkah persiapan yang sering menentukan sukses-gagalnya proyek.

> **Secara singkat:** Migrasi RISE with SAP adalah proses perpindahan sistem ERP perusahaan ke *Business Transformation as a Service* dari SAP, yaitu sebuah bundel terintegrasi yang mencakup SAP S/4HANA Cloud Private Edition, SAP Business Technology Platform (BTP), dan SAP Business Network dalam satu kontrak berlangganan, dengan SAP sebagai pengelola infrastruktur cloud dan penanggung jawab tunggal SLA.

{IMAGE_01: Infografik checklist 10 item kesiapan migrasi RISE with SAP, disusun dua kolom (item 1–5 di kiri, 6–10 di kanan), tiap item dengan ikon kecil dan satu baris teks Bahasa Indonesia, gaya korporat biru-putih, format "screenshot-friendly" untuk dibawa ke rapat internal}

## Apa Itu Migrasi RISE with SAP dan Mengapa Perlu Checklist Khusus?

RISE with SAP bukan sekadar memindahkan server ke cloud. SAP memposisikannya sebagai *Business Transformation as a Service*: satu kontrak yang membundel sistem ERP (SAP S/4HANA Cloud Private Edition), platform integrasi dan pengembangan (SAP BTP), jaringan rantai pasok (SAP Business Network), serta layanan transformasi, dengan satu pihak penanggung jawab SLA (SAP News, 2021).

Karena yang berpindah adalah model operasi, bukan hanya teknologi, persiapannya menuntut disiplin berbeda dari instalasi SAP era lama. Tersedia tiga tier untuk Private Edition: **Base**, **Premium**, dan **Premium Plus**, di mana Premium Plus menambahkan kapabilitas analitik dan generative AI yang lebih luas. Detail komponen tiap tier berubah secara berkala, jadi rujuk situs SAP untuk versi terkini.

Kenapa checklist begitu menentukan? Karena mayoritas kegagalan proyek terjadi sebelum baris kode pertama disentuh. Riset Gartner memperkirakan pada 2027 lebih dari 70% inisiatif ERP yang baru diimplementasikan akan gagal memenuhi business case awalnya. McKinsey mencatat sekitar 70% transformasi besar tidak mencapai tujuannya, dengan penyebab terbesar berupa budaya organisasi dan lemahnya manajemen perubahan, bukan teknologi.

Ada pula tenggat yang membingkai urgensi. Untuk SAP Business Suite 7 (SAP ERP 6.0 dengan Enhancement Package 6, 7, atau 8), SAP menghentikan *mainstream maintenance* pada **31 Desember 2027**, dengan *extended maintenance* opsional hingga **31 Desember 2030** (tambahan biaya sekitar +2 poin persentase). Tanggal ini dikonfirmasi langsung dalam dokumen strategi pemeliharaan SAP ([SAP Support Portal](https://support.sap.com/en/release-upgrade-maintenance/maintenance-information/maintenance-strategy/s4hana-business-suite7.html)). Jadi jendela persiapan Anda nyata dan terbatas.

## Apa Saja yang Harus Disiapkan Sebelum Migrasi RISE with SAP?

Ada 10 item kesiapan utama: sponsor eksekutif dan tujuan bisnis terukur; inventarisasi lanskap sistem dan integrasi; pembersihan data master; remediasi *custom code*; menjalankan SAP Readiness Check; memahami model tanggung jawab bersama; memilih pendekatan migrasi dan tier; anggaran realistis termasuk biaya *dual-run*; rencana *change management*; serta pemilihan partner dan penyusunan timeline *cutover*.

Tabel berikut merangkum kesepuluhnya dalam format yang bisa Anda *screenshot* dan tempel di papan proyek: siapa pemilik utamanya, dan alat atau output yang diharapkan dari tiap item.

| # | Item Checklist | Pemilik Utama | Alat / Output |
|---|---|---|---|
| 1 | Sponsor eksekutif & tujuan bisnis terukur | C-Level / Steering Committee | Charter proyek, KPI sukses |
| 2 | Inventarisasi lanskap sistem & integrasi | IT Architecture / Integration | Peta integrasi (*landscape diagram*) |
| 3 | Pembersihan & validasi data master | Data Owner / Finance / Procurement | SAP Migration Cockpit; *data quality report* |
| 4 | Inventarisasi & remediasi *custom code* | ABAP / Development Team | SAP Custom Code Migration app; *register* kode |
| 5 | Jalankan SAP Readiness Check | IT Architecture / Basis | SAP Readiness Check; *readiness report* |
| 6 | Pahami model tanggung jawab bersama | IT Security / Cloud Team | RACI matrix; SAP Roles & Responsibilities |
| 7 | Pilih pendekatan migrasi & tier RISE | Project Sponsor + IT | Dokumen keputusan (greenfield/brownfield/SDT) |
| 8 | Anggaran realistis (termasuk *dual-run*) | CFO / PMO | *Budget baseline* lengkap |
| 9 | Rencana *change management* & komunikasi | HR / Change Lead | *Change plan*; rencana pelatihan |
| 10 | Pilih partner & timeline *cutover* | CIO / CPO | Matriks evaluasi partner; *cutover plan* |

## 10 Hal yang Harus Disiapkan untuk Migrasi RISE with SAP

Berikut penjabaran tiap item. Yang membedakan daftar ini dari checklist generik: setiap poin spesifik untuk konteks RISE, menyebut alat bawaannya, pemiliknya, dan jebakan yang sering terlewat.

1. **Sponsor eksekutif dan tujuan bisnis terukur.** Migrasi RISE adalah proyek bisnis, bukan proyek IT. Tanpa sponsor di level C dan KPI yang jelas (misalnya mempercepat *closing* atau menurunkan biaya operasi), proyek kehilangan arah saat keputusan sulit muncul. Ingat temuan McKinsey: kegagalan transformasi lebih sering soal manusia daripada teknologi.

2. **Inventarisasi lanskap sistem dan integrasi.** Petakan semua aplikasi yang bertukar data dengan SAP: POS, *warehouse management* pihak ketiga, e-commerce, bahkan file Excel yang diam-diam menjadi penghubung antar-tim. Integrasi yang tidak terpetakan adalah sumber kejutan biaya terbesar saat *cutover*.

3. **Pembersihan dan validasi data master.** Duplikat *Business Partner*, satuan *Material Master* yang tidak konsisten, dan *Chart of Accounts* yang belum harmonis: semua ini harus dibereskan sebelum data dipindahkan dengan SAP S/4HANA Migration Cockpit (aplikasi Fiori "Migrate Your Data", pengganti LTMC yang sudah *deprecated*). Dalam praktik migrasi ERP, sebagian besar catatan dalam basis data lama kerap ternyata duplikat atau tidak kompatibel dengan aturan validasi sistem baru; estimasi industri menyebut porsinya bisa sangat besar. Memindahkan data kotor hanya memindahkan masalah.

4. **Inventarisasi dan remediasi *custom code*.** Jalankan SAP Custom Code Migration app (aplikasi Fiori) untuk mengidentifikasi kode buatan sendiri yang perlu diadaptasi ke S/4HANA. Sekaligus, ini momen tepat merencanakan pemindahan kustomisasi ke *extensibility* modern sesuai prinsip [SAP Clean Core](https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide) — menjaga inti sistem tetap standar agar mudah di-*upgrade* di masa depan.

5. **Jalankan SAP Readiness Check.** Ini alat analisis berbasis Fiori yang disediakan SAP **gratis** bagi pelanggannya, diakses melalui SAP for Me atau SAP Cloud ALM menggunakan akun S-user yang valid. Satu catatan penting: gratis di sini berlaku untuk pelanggan SAP berlisensi dengan kontrak support aktif, bukan untuk publik umum. Hasilnya menganalisis *simplification items*, dampak *custom code*, kompatibilitas *add-on*, dan *sizing*, lalu menjadi peta perencanaan migrasi Anda.

6. **Pahami model tanggung jawab bersama (*shared responsibility*).** SAP mengelola infrastruktur cloud, sistem operasi, basis data, dan monitoring keamanan 24/7. Namun konfigurasi proses bisnis, kualitas dan keamanan data, serta akses pengguna **tetap sepenuhnya milik Anda**. Ini bagian yang paling sering disalahpahami, dan dibahas lebih dalam pada bagian berikutnya.

7. **Pilih pendekatan migrasi dan tetapkan tier.** Tiga jalur resmi SAP: *greenfield* (implementasi baru, desain ulang proses), *brownfield* (konversi sistem ECC apa adanya), dan *Selective Data Transition* (SDT, kombinasi keduanya, kadang disebut "bluefield" oleh sejumlah implementer, meski nama resminya SDT). Bersamaan dengan ini, tetapkan tier RISE yang sesuai (Base/Premium/Premium Plus).

8. **Susun anggaran realistis, termasuk biaya tersembunyi.** Selain langganan, implementasi, integrasi, dan pelatihan, jangan lupakan biaya *dual-run*: menjalankan ECC lama paralel dengan S/4HANA baru. Dalam praktik implementasi enterprise besar, periode *dual-run* kerap berlangsung 12–24 bulan, dan biaya infrastruktur ganda ini hampir tidak pernah masuk estimasi awal. Secara lisensi, menjalankan keduanya paralel juga memerlukan *Parallel Landscape Agreement* yang dinegosiasikan dengan SAP lebih dulu.

9. **Rencana *change management* dan komunikasi internal.** Libatkan pengguna sejak awal, susun kalender komunikasi, dan rencanakan pelatihan berbasis peran. Survei industri menunjukkan hanya sekitar 18% perusahaan yang benar-benar menerapkan proses baru saat migrasi ke S/4HANA, sementara 49% memilih mempertahankan cara lama dengan sedikit perubahan (CIO.com). Resistensi adalah variabel yang bisa dikelola, bukan kejutan.

10. **Pilih partner implementasi dan susun timeline *cutover*.** Tetapkan milestone dari desain, konfigurasi, migrasi data, *testing*, pelatihan, *go-live*, hingga *hypercare*. Lakukan *due diligence* terhadap rekam jejak partner, bukan sekadar memilih yang termurah. Rata-rata proyek S/4HANA berjalan 30% lebih lama dari rencana (CIO.com), jadi timeline yang realistis sejak awal menghemat banyak rasa sakit.

{IMAGE_02: Diagram tanggung jawab bersama RISE with SAP — dua kolom, kiri "SAP" (biru gelap) berisi infrastruktur/OS/database/monitoring, kanan "Pelanggan" (biru muda) berisi konfigurasi proses/data/akses pengguna; bagian tengah overlap menampilkan kolaborasi saat cutover dan hypercare; gaya diagram bersih, teks Bahasa Indonesia}

## Siapa Pemilik Setiap Item? Tanggung Jawab Anda vs SAP vs Partner

Inti yang sering keliru: RISE bukan berarti "SAP urus semua". Karena RISE adalah layanan cloud terkelola, sebagian organisasi mengira konfigurasi bisnis dan data juga dikelola SAP. Itu salah. SAP mengelola lapisan teknis; pelanggan tetap pemilik penuh atas *Customizing*, data, dan akses pengguna.

Pembagian ini bersifat kontraktual dan terdokumentasi dalam panduan *Roles & Responsibilities* SAP. Memahaminya sejak awal mencegah kekosongan tanggung jawab, yaitu situasi di mana sebuah tugas dikira ditangani SAP padahal sebenarnya milik internal Anda. Tabel berikut memperjelasnya.

| Aspek | SAP | Pelanggan |
|---|---|---|
| Infrastruktur cloud (Azure/AWS/GCP) | Ya, kelola & operasikan | Tidak |
| Sistem Operasi & Database | Ya, *patching* & monitoring | Tidak |
| Ketersediaan & SLA | Ya, SLA kontraktual | Tidak |
| Keamanan infrastruktur (24/7) | Ya | Tidak |
| Konfigurasi proses bisnis (*Customizing*) | Tidak | Ya, sepenuhnya |
| Kualitas & keamanan data | Tidak | Ya |
| Manajemen akses pengguna | Tidak | Ya |
| Pengembangan ekstensi (BTP/ABAP Cloud) | Tidak | Ya (dengan prinsip *clean core*) |
| Pelatihan pengguna akhir | Tidak | Ya |

Di sinilah peran partner implementasi: menjembatani sisi pelanggan. Dalam praktik implementasi RISE di lapangan, partner biasanya menangani konfigurasi, migrasi data, dan pendampingan *cutover*. Pekerjaan ini secara kontraktual ada di kolom "pelanggan", tetapi membutuhkan keahlian khusus yang jarang dimiliki tim internal sepenuhnya.

## Tanda Anda BELUM Siap Memulai Migrasi RISE with SAP

Bagian ini jarang ditulis kompetitor, padahal justru di sinilah kejujuran membangun kepercayaan. Tidak semua perusahaan yang sudah menandatangani niat migrasi benar-benar siap memulai besok. Memaksakan proyek pada organisasi yang belum siap adalah resep paling umum menuju pembengkakan biaya dan jadwal molor.

Anda kemungkinan **belum** siap memulai jika beberapa kondisi berikut masih ada:

- **Data master kacau tanpa pemilik yang jelas.** Jika tidak ada satu pun orang yang bertanggung jawab atas kualitas data pelanggan, vendor, atau material, migrasi akan mewarisi kekacauan itu, kini di sistem yang jauh lebih mahal.
- **Tidak ada sponsor eksekutif yang aktif.** Tanpa pemilik di level C yang siap mengambil keputusan sulit dan mengalokasikan sumber daya, proyek akan tersendat saat menghadapi konflik prioritas dengan operasional harian.
- **Integrasi kritis belum dipetakan.** Bila Anda belum tahu persis aplikasi apa saja yang bertukar data dengan SAP, Anda belum punya gambaran utuh atas ruang lingkup proyek. Ruang lingkup yang kabur adalah sumber biaya yang membengkak.
- **Tim tanpa kapasitas waktu.** Migrasi menuntut keterlibatan nyata *key user* dari setiap divisi. Jika semua orang sudah penuh dengan pekerjaan harian, proyek akan kekurangan masukan yang justru paling menentukan.

Sebelum bicara *kick-off*, bereskan dulu kepemilikan data dan komitmen sponsor. Untuk pelengkap dari sisi sebaliknya, yaitu apa yang harus dihindari selama proyek berjalan, ada baiknya menengok daftar [kesalahan umum saat migrasi RISE with SAP](https://www.soltius.co.id/id/blog/5-kesalahan-umum-saat-migrasi-ke-rise-with-sap-dan-cara-menghindarinya) yang melengkapi checklist ini.

{IMAGE_03: Timeline horizontal tenggat ECC ke RISE with SAP dari 2024 hingga 2033, menampilkan milestone mainstream end 2027, extended end 2030, dan transition option 2031–2033, dengan penanda "Mulai proyek sekarang" di posisi 2025–2026; gradasi warna kuning ke oranye ke merah untuk menekankan urgensi, teks Bahasa Indonesia}

## FAQ (Pertanyaan yang Sering Diajukan)

### Apa saja yang harus disiapkan sebelum migrasi RISE with SAP?
Ada 10 item kesiapan utama: (1) sponsor eksekutif dan tujuan bisnis terukur, (2) inventarisasi lanskap sistem dan integrasi, (3) pembersihan data master, (4) remediasi *custom code*, (5) menjalankan SAP Readiness Check yang gratis, (6) memahami model tanggung jawab bersama, (7) memilih pendekatan migrasi dan tier, (8) anggaran realistis termasuk biaya *dual-run*, (9) rencana *change management*, dan (10) memilih partner serta menyusun timeline *cutover*.

### Apa itu RISE with SAP dan apa saja yang termasuk di dalamnya?
RISE with SAP adalah program *Business Transformation as a Service* dari SAP yang membundel dalam satu kontrak: SAP S/4HANA Cloud Private Edition sebagai sistem ERP utama, SAP Business Technology Platform (BTP) untuk integrasi dan pengembangan, SAP Business Network untuk kolaborasi rantai pasok, serta layanan transformasi dan dukungan. Tersedia dalam tiga tier, yaitu Base, Premium, dan Premium Plus, sesuai kebutuhan kapabilitas.

### Berapa lama waktu yang dibutuhkan untuk migrasi RISE with SAP?
Durasi bergantung pada kompleksitas lanskap dan pendekatan yang dipilih. Pendekatan *brownfield* (konversi) umumnya lebih cepat daripada *greenfield* (mulai dari awal). Survei industri menunjukkan rata-rata proyek S/4HANA berlangsung 30% lebih lama dari rencana, sehingga timeline realistis untuk enterprise menengah-besar berkisar 12–24 bulan. Persiapan pra-proyek seperti pembersihan data dan remediasi *custom code* biasanya menambah 2–4 bulan sebelum *kick-off*.

### Apa itu SAP Readiness Check dan apakah gratis?
SAP Readiness Check adalah alat analisis berbasis Fiori yang disediakan SAP gratis (*free of charge*) bagi pelanggannya yang memiliki kontrak support aktif. Diakses melalui SAP for Me atau SAP Cloud ALM dengan akun S-user yang valid. Alat ini menganalisis kompatibilitas sistem dengan S/4HANA target: pemeriksaan *simplification items*, analisis *custom code*, kompatibilitas *add-on* pihak ketiga, dan *sizing* sistem. Hasilnya menjadi dasbor panduan perencanaan migrasi.

### Apa perbedaan tanggung jawab pelanggan dan SAP dalam RISE with SAP?
Dalam model tanggung jawab bersama RISE with SAP, SAP mengelola infrastruktur cloud (Azure/AWS/GCP), sistem operasi, basis data, monitoring keamanan 24/7, dan *patching*. Pelanggan tetap bertanggung jawab atas konfigurasi proses bisnis, kualitas dan keamanan data, manajemen akses pengguna, serta pengembangan ekstensi. Kesalahan umum: mengira RISE berarti "SAP urus semua", padahal konfigurasi bisnis tetap sepenuhnya milik pelanggan.

### Kapan SAP ECC berhenti didukung secara resmi?
Untuk SAP ERP 6.0 dengan Enhancement Package 6, 7, atau 8 (varian paling umum), SAP menghentikan *mainstream maintenance* pada 31 Desember 2027. Setelahnya tersedia *extended maintenance* opsional hingga 31 Desember 2030 dengan biaya tambahan sekitar +2 poin persentase. Bagi perusahaan terkompleks, SAP menyediakan "SAP ERP, private edition, transition option" sebagai jembatan pada 2031–2033. Perlu dicatat, opsi ini bukan pemanjangan ECC dan hanya untuk pelanggan yang berkomitmen sebelum akhir 2025.

### Apa saja biaya tersembunyi saat migrasi ke RISE with SAP?
Beberapa yang sering tidak dimodelkan: (1) *dual-run*, yaitu menjalankan ECC lama dan S/4HANA baru paralel selama 12–24 bulan pada enterprise besar; (2) integrasi sistem pihak ketiga (POS, WMS, e-commerce) yang mungkin perlu dibangun ulang; (3) pembersihan dan migrasi data master yang kerap melampaui perkiraan; (4) pelatihan pengguna dan *change management*; serta (5) biaya konsultan tambahan jika proyek melebihi jadwal, yang rata-rata terjadi 30% lebih lama dari rencana.

## Kesimpulan

Migrasi RISE with SAP yang berhasil hampir selalu ditentukan jauh sebelum *go-live*, yaitu di tahap persiapan yang tidak glamor: membereskan data master, memetakan integrasi, dan menyepakati siapa memiliki apa. Tenggat 2027 dan 2030 membuat jendela ini terbatas, tetapi terburu-buru tanpa kesepuluh item di atas justru memperbesar risiko gagal. Sebagai SAP Platinum Partner melalui United VARs, dan diakui sebagai Best RISE Partner serta Best Cloud Partner, Soltius merancang dan mengeksekusi migrasi RISE: mendampingi perusahaan dari penilaian kesiapan hingga dukungan pasca *go-live*, bukan sebagai pembuat perangkat lunaknya, melainkan sebagai mitra yang menjalankannya.

Untuk mendiskusikan kesiapan migrasi RISE with SAP di perusahaan Anda, kunjungi soltius.co.id dan mulai percakapan dengan tim yang telah menjalaninya di lapangan.
