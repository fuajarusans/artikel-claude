---
title: "Integrasi Clean Core: Cara Menghubungkan SAP Tanpa Mengotori Core"
meta_title: "Integrasi Clean Core SAP: API-First Tanpa Kotori Core"
meta_description: "Cara membangun integrasi clean core di SAP: pola lama RFC/point-to-point vs released API via SAP Integration Suite, langkah praktis, dan kapan RFC masih boleh."
slug: "integrasi-clean-core-sap-api-first"
language: "id"
primary_keyword: "SAP Clean Core"
secondary_keywords:
  - "integrasi clean core"
  - "API-first integration"
  - "SAP Integration Suite"
  - "API Management SAP"
  - "released API OData"
  - "integrasi event-driven"
  - "SAP Business Accelerator Hub"
  - "integrasi point-to-point vs API"
  - "RFC BAPI legacy"
  - "loose coupling"
internal_links:
  - url: "https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide"
    anchor: "SAP Clean Core"
  - url: "https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud"
    anchor: "migrasi ERP ke cloud"
  - url: "https://www.soltius.co.id/id/blog/low-code-and-no-code-platforms"
    anchor: "platform low-code SAP Build"
external_citations:
  - url: "https://learning.sap.com/courses/managing-clean-core-for-SAP-Cloud-ERP/exploring-how-to-make-landscapes-core-compliant-1"
    context: "Rekomendasi SAP: integrasi clean core memakai OData/SOAP via Integration Suite, bukan RFC/BAPI"
  - url: "https://help.sap.com/docs/business-accelerator-hub/sap-business-accelerator-hub/what-is-sap-business-accelerator-hub"
    context: "SAP Business Accelerator Hub sebagai katalog released API; nama resmi terkini setelah rename dari API Business Hub"
brief_id: "sap-clean-core-02"
target_word_count: 1650
publish_month: "2026-08"
date_modified: "2026-08-08"
word_count: 1670
---

# Integrasi Clean Core: Cara Menghubungkan SAP Tanpa Mengotori Core

Banyak tim IT sudah rapi: kode Z dibersihkan, ekstensi dipindah ke BTP, dan inti S/4HANA dijaga standar. Lalu tiba hari *upgrade*, dan yang patah bukan kode kustom itu, melainkan belasan antarmuka lama yang diam-diam tetap menempel di core. Koneksi RFC ke sistem gaji, panggilan BAPI ke modul keuangan, integrasi langsung ke bank dan pajak yang ditambal bertahun-tahun lalu. Inilah dimensi [SAP Clean Core](https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide) yang paling sering terlupakan: integrasi. Artikel ini membahas cara menghubungkan SAP dengan sistem lain tanpa mengotori core: pola mana yang aman terhadap upgrade, dan mana yang menjadi utang teknis tersembunyi.

> **Secara singkat:** Integrasi clean core adalah pendekatan menghubungkan SAP S/4HANA dengan sistem lain memakai antarmuka standar yang dijamin stabil terhadap upgrade, yaitu *released API* (OData/SOAP) dan *event* melalui SAP Integration Suite, alih-alih koneksi RFC, BAPI, atau panggilan database langsung yang menciptakan *hidden coupling* dan rentan patah saat sistem diperbarui. Ini salah satu dari lima dimensi resmi clean core SAP.

Melalui artikel ini, kita akan menelusuri mengapa integrasi diabaikan padahal ia satu dari lima dimensi clean core, mengapa RFC dan *point-to-point* mengotori core, tabel pola lama versus pola bersih yang bisa Anda jadikan acuan, langkah membangun lapisan integrasi yang *upgrade-safe*, dan (bagian yang jarang dibahas) kapan koneksi lama justru masih masuk akal dipertahankan.

{IMAGE_01: Diagram donat lima segmen mewakili 5 dimensi clean core SAP — Process, Data, Extensibility, Integration, Operations — dengan segmen "Integration" di-highlight warna berbeda (biru tua) sementara empat lainnya abu-abu; di bawahnya tiga poin singkat tentang apa itu integrasi bersih. Gaya korporat, teks Bahasa Indonesia}

## Apa itu integrasi clean core dan mengapa sering terlupakan?

Integrasi clean core adalah salah satu dari lima dimensi resmi clean core SAP, bersama Process, Data, Extensibility, dan Operations. Dimensi ini menuntut setiap koneksi antar-sistem dibangun di atas teknologi yang terstandar, aman, dan skalabel, bukan koneksi langsung yang menembus ke logika internal SAP. SAP mendefinisikannya sebagai pendekatan menghubungkan sistem yang andal dan siap untuk masa depan.

Integrasi terlupakan karena perhatian tim biasanya tersedot ke kode kustom. Pemeriksa seperti ATC (*ABAP Test Cockpit*) menyoroti modifikasi ABAP, sehingga remediasi kode terasa konkret dan terukur. Antarmuka, sebaliknya, jarang masuk radar audit yang sama.

Padahal sebuah landscape SAP yang khas memiliki puluhan hingga ratusan titik integrasi: ke bank, ke sistem perpajakan, ke gudang pihak ketiga, ke CRM. Menurut SAP, dimensi integrasi clean core menuntut "pendekatan yang andal, terpercaya, dan siap untuk masa depan dalam menghubungkan sistem yang dibangun di atas teknologi yang terstandar, aman, dan skalabel" ("5 Guiding Principles of Clean Core", SAP.com, Desember 2025). Antarmuka yang tidak memenuhi kriteria itu adalah utang teknis yang baru terasa saat tagihannya jatuh tempo, yaitu saat upgrade.

## Mengapa integrasi RFC dan point-to-point mengotori core?

RFC dan BAPI mengotori core karena keduanya terhubung langsung ke logika bisnis internal SAP, sehingga menciptakan *hidden coupling* (ketergantungan tersembunyi). Ketika SAP mengubah struktur internal saat upgrade, antarmuka itu bisa patah tanpa peringatan. Efeknya identik dengan kode kustom yang tidak diaudit: setiap upgrade menuntut tambalan manual, dan itu menahan perpindahan ke cloud.

SAP menyebut RFC dan BAPI sebagai jenis antarmuka yang "paling tertanam secara fungsional" karena memberi akses langsung ke objek bisnis di dalam inti SAP. Akses sekuat itu punya harga: ia tidak menyediakan kontrak stabilitas, sehingga tidak dijamin tetap bekerja lintas rilis. SAP secara eksplisit menyatakan RFC dan IDoc "hanya direkomendasikan jika benar-benar diperlukan" untuk integrasi clean-core (SAP Community, "Modernizing RFC/BAPI-based Integrations for a Clean Core", 2025).

Masalah kedua bersifat arsitektural, bukan soal jenis antarmuka. Integrasi *point-to-point*, yakni menghubungkan tiap sistem satu per satu secara langsung, tumbuh mengikuti rumus n(n-1)/2. Lima sistem menghasilkan 10 koneksi; sepuluh sistem melonjak ke 45; dua puluh sistem mencapai 190 koneksi. Inilah yang oleh komunitas SAP disebut *spaghetti architecture*: satu perubahan kecil pada satu sistem berpotensi merusak puluhan integrasi lain.

Panggilan database langsung adalah versi paling berisiko. Menulis atau membaca langsung ke tabel SAP berarti melewati lapisan API sepenuhnya: tidak ada kontrak, tidak ada jaminan struktur. Begitu skema tabel berubah saat upgrade, integrasi semacam ini patah seketika.

{IMAGE_02: Diagram perbandingan arsitektur dua panel. Panel kiri "Integrasi Lama" menampilkan garis-garis kusut (spaghetti) antara satu kotak SAP dan enam sistem eksternal — bank, logistik, pajak, CRM, WMS, payroll — via label RFC/BAPI; warna merah/abu, label "Point-to-Point: n(n-1)/2 koneksi". Panel kanan "Integrasi Clean Core" menampilkan SAP Integration Suite sebagai hub di tengah dengan garis bersih ke SAP dan ke sistem eksternal via released API & event; warna hijau/biru, label "Hub-and-Spoke: terpusat, stabil". Teks Bahasa Indonesia}

## Pola integrasi lama vs pola clean core

Inti perubahannya sederhana: ganti koneksi langsung yang rapuh dengan antarmuka standar yang dijamin stabil. SAP merekomendasikan setiap antarmuka baru memakai *released* OData atau SOAP API via SAP Integration Suite, bukan BAPI atau RFC bila padanan yang sudah di-*release* tersedia. Tabel berikut memetakan pola lama, risikonya, dan pengganti clean core-nya.

| Pola Lama | Risiko terhadap Upgrade | Pola Clean Core |
|---|---|---|
| RFC (*Remote Function Call*) | Tinggi: *hidden coupling* ke logika internal; patah jika SAP mengubah fungsi | Released OData/SOAP API via SAP Integration Suite (SAP: RFC hanya jika "benar-benar diperlukan") |
| BAPI (*Business API*) | Tinggi: tertanam langsung di core; tak dijamin stabil lintas rilis | Released OData/SOAP API; pakai *Migration Assessment* untuk temukan pengganti |
| *Point-to-point* langsung | Tinggi: *spaghetti*; n(n-1)/2 koneksi; satu perubahan merusak banyak titik | Integrasi terpusat via SAP Integration Suite sebagai *spine* (10 sistem: 45 koneksi P2P menjadi 10 koneksi terpusat) |
| Panggilan database langsung | Sangat tinggi: menembus lapisan API; patah saat skema berubah | OData V4 untuk akses data; *event* untuk perubahan data |
| IDoc (*Intermediate Document*) | Sedang: masih lazim untuk B2B/EDI; sedang ditransformasi | *Event* via SAP Integration Suite, *advanced event mesh* (path migrasi IDoc-ke-event tersedia) |

Dua istilah di kolom kanan perlu diperjelas. *Released API* adalah antarmuka yang diterbitkan resmi SAP dengan kontrak stabilitas. SAP menjamin kompatibilitas ke belakang lintas rilis triwulanan, sehingga integrasi di atasnya tidak perlu diubah setiap upgrade (SAP Learning, "Exploring Released APIs"). Jenisnya meliputi OData (V2 dan V4) dan SOAP, dibangun via ABAP RESTful Application Programming Model (RAP).

Soal IDoc, hindari menyederhanakannya menjadi "IDoc itu buruk". IDoc masih dipakai luas di skenario B2B/EDI. Yang benar: untuk skenario *baru*, SAP mengarahkan ke *event*, dan menyediakan jalur migrasi IDoc-ke-event di dalam Integration Suite. Ini bukan berarti semua IDoc harus dikonversi sekarang juga.

## Cara membangun lapisan integrasi clean core: langkah demi langkah

Membangun integrasi clean core berarti memusatkan koneksi melalui satu lapisan standar dan menetapkan disiplin untuk setiap antarmuka baru. SAP Integration Suite di SAP BTP menjadi *spine* (tulang punggung): platform ini mencakup Cloud Integration, API Management, *advanced event mesh*, dan Open Connectors, dengan 3.800+ paket integrasi siap pakai per 2025 (dokumen SAP Integration Suite 2025). Lima langkah praktis berikut menjadi kerangkanya.

1. **Inventarisasi antarmuka yang ada.** Petakan setiap koneksi: jenisnya (RFC, BAPI, IDoc, point-to-point), sistem tujuannya, frekuensinya, dan tingkat kritikalitasnya. Tanpa peta ini, modernisasi berjalan buta. Sejak Q3 2025, SAP menyediakan *Clean Core Modernization Recommendations for BAPIs* dalam Integration Suite yang otomatis mengidentifikasi BAPI di antarmuka PI/PO lama dan menyarankan API penggantinya.
2. **Jadikan released API/event sebagai standar.** Tetapkan aturan tunggal: setiap antarmuka *baru* memakai released OData/SOAP API atau event, bukan RFC/BAPI. Untuk komunikasi asinkron bervolume tinggi, pakai pola *publish/subscribe* via *advanced event mesh*.
3. **Posisikan SAP Integration Suite sebagai spine plus API Management.** Alihkan orkestrasi ke Cloud Integration agar sistem pihak ketiga tak lagi menyentuh inti SAP secara langsung. API Management mengatur kontrak: keamanan (OAuth, API key), *rate limiting*, *caching*, dan *versioning*. SAP Help Portal menyebut lebih dari 30 tipe kebijakan (*policy*) tersedia (per dokumentasi SAP Help, diakses Juni 2026).
4. **Decouple sistem pihak ketiga lewat kontrak API.** Sistem eksternal cukup berbicara dengan kontrak API yang stabil, bukan dengan struktur internal SAP. Open Connectors menyediakan 350+ konektor siap pakai untuk aplikasi pihak ketiga, berguna untuk mempercepat sambungan ke sistem lokal seperti logistik, perbankan, atau perpajakan.
5. **Tetapkan governance: pintu masuk hanya satu.** Buat kebijakan bahwa tak ada interface baru yang lolos tanpa memakai released API via Integration Suite. Tanpa aturan ini, *hidden coupling* baru akan tumbuh lebih cepat daripada yang lama dibersihkan.

Untuk konteks Indonesia, pola ini relevan karena perusahaan kerap harus menghubungkan SAP dengan sistem perpajakan lokal seperti e-Faktur DJP, sistem perbankan, dan penyedia logistik pihak ketiga (3PL). Lapisan API yang terstandar memberi penyangga stabil di antara SAP dan sistem-sistem lokal itu, sehingga perubahan di salah satu sisi tidak langsung merembet ke inti SAP.

Di lapangan, interface RFC lama yang terlupakan justru sering menjadi penyebab tersembunyi proyek upgrade molor, dan inventarisasi di langkah pertama itulah yang biasanya menyelamatkan jadwal. Lapisan integrasi yang bersih juga menjadi prasyarat [migrasi ERP ke cloud](https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud) yang mulus: integrasi yang rapuh adalah salah satu titik gagal paling umum saat *cutover*.

{IMAGE_03: Infografis ringkasan tabel pola lama → risiko → pola clean core dalam desain bersih; kolom tengah memakai ikon risiko (segitiga merah/kuning) bertingkat dari "Sedang" sampai "Sangat Tinggi". Cocok untuk dibagikan via screenshot oleh pembaca B2B. Teks Bahasa Indonesia, gaya korporat biru-putih}

## Kapan integrasi langsung masih masuk akal — dan kapan tidak

Tidak semua RFC harus diganti sekarang juga. Dogma "API untuk segalanya" tidak sesuai dengan panduan resmi SAP maupun realita di lapangan. SAP sendiri menyebut RFC "hanya jika benar-benar diperlukan", frasa yang menyiratkan masih ada ruang. Kuncinya bukan menghapus semua koneksi lama, melainkan tahu mana yang berbahaya dan mana yang bisa dijadwalkan kemudian.

Bagian ini jarang ditulis kompetitor, padahal di sinilah kejujuran membangun kepercayaan. Sebuah antarmuka RFC lama masih bisa dipertahankan untuk sementara jika tiga kondisi terpenuhi sekaligus:

- **Tidak terekspos ke sistem pihak ketiga.** Integrasi internal antar-sistem SAP punya risiko jauh lebih rendah daripada koneksi yang membuka inti ke aplikasi eksternal.
- **Beban dan frekuensi upgrade rendah.** Antarmuka bervolume kecil dan jarang tersentuh upgrade memberi sedikit alasan untuk migrasi tergesa.
- **Belum ada released API yang setara secara fungsional.** Jika padanan resmi belum tersedia, memaksakan migrasi justru menambah risiko, bukan menguranginya.

Hitung sederhana saja: jika biaya migrasi sebuah antarmuka melebihi manfaatnya dalam horizon dua hingga tiga tahun, jadwalkan kemudian. Yang tidak bisa ditawar adalah satu hal: setiap antarmuka *baru* wajib memakai released API sejak awal. Mempertahankan yang lama untuk sementara itu pragmatis; menambah utang baru itu kelalaian.

Filosofi "di luar core" ini sama dengan yang mendasari ekstensi side-by-side: ekstensi via [platform low-code SAP Build](https://www.soltius.co.id/id/blog/low-code-and-no-code-platforms) dan integrasi via Integration Suite sama-sama berdiri di atas SAP BTP, menjaga inti tetap standar.

## FAQ (Pertanyaan yang Sering Diajukan)

### Apa itu integrasi clean core di SAP?
Integrasi clean core adalah pendekatan menghubungkan SAP S/4HANA dengan sistem lain memakai antarmuka standar yang stabil terhadap upgrade, yaitu released API (OData/SOAP) dan event melalui SAP Integration Suite, alih-alih koneksi langsung berbasis RFC, BAPI, atau panggilan database yang rentan patah saat sistem diperbarui. Ini salah satu dari lima dimensi resmi clean core yang ditetapkan SAP.

### Apakah integrasi RFC dan BAPI lama melanggar prinsip clean core?
Pada dasarnya ya. SAP menegaskan RFC dan BAPI hanya direkomendasikan "jika benar-benar diperlukan" dalam konteks clean core. Keduanya menciptakan *hidden coupling*, yaitu koneksi langsung ke logika internal SAP yang bisa patah saat struktur internal berubah selama upgrade. Sejak Q3 2025, SAP menyediakan Migration Assessment dalam Integration Suite untuk mengidentifikasi BAPI yang masih dipakai dan menemukan API penggantinya.

### Apa bedanya integrasi point-to-point dan pendekatan API-first?
Integrasi point-to-point menghubungkan sistem satu per satu secara langsung. Dengan n sistem, jumlah koneksi tumbuh mengikuti rumus n(n-1)/2: 10 sistem menghasilkan 45 koneksi, 20 sistem menghasilkan 190. Satu perubahan bisa merusak puluhan koneksi lain. Pendekatan API-first memusatkan integrasi melalui satu lapisan (SAP Integration Suite), sehingga sistem eksternal hanya berinteraksi dengan kontrak API yang stabil, bukan langsung ke inti SAP.

### Apa itu released API di SAP?
Released API adalah antarmuka yang diterbitkan resmi SAP dengan kontrak stabilitas: SAP menjamin kompatibilitas ke belakang lintas rilis, sehingga integrasi di atasnya tidak perlu diubah setiap kali SAP melakukan upgrade. Jenisnya meliputi OData (V2 dan V4) dan SOAP, dibangun via ABAP RESTful Application Programming Model. Seluruh released API dapat ditemukan di SAP Business Accelerator Hub (api.sap.com).

### Apa itu SAP Business Accelerator Hub dan apa bedanya dengan SAP API Business Hub?
SAP Business Accelerator Hub adalah nama resmi terkini dari platform yang dulu dikenal sebagai SAP API Business Hub. SAP mengganti namanya karena platform berkembang melampaui API, kini mencakup business processes, CDS views, events, dan BAdI. Dapat diakses di api.sap.com atau hub.sap.com, platform ini memuat lebih dari 2.700 API berbeda (per publikasi SAP 2024), menjadikannya titik penemuan resmi untuk semua released interface SAP.

### Apa itu integrasi event-driven di SAP dan kapan digunakan?
Integrasi event-driven memungkinkan sistem berkomunikasi asinkron lewat event bisnis (misalnya "pesanan dibuat" atau "stok berubah") tanpa pengirim menunggu respons langsung. Di SAP, ini diwujudkan via SAP Integration Suite, advanced event mesh (nama resmi terkini), layanan terkelola yang mendukung pola publish/subscribe lintas aplikasi SAP dan non-SAP. Cocok untuk proses bervolume tinggi, integrasi asinkron dengan logistik atau perbankan, dan skenario yang butuh skala tanpa tight coupling.

### Kapan integrasi berbasis RFC masih boleh digunakan dalam konteks clean core?
RFC tidak harus segera dihapus dari semua skenario. SAP memperbolehkannya "jika benar-benar diperlukan", khususnya untuk integrasi internal berumur pendek, beban rendah, atau ketika belum ada released API yang setara. Pertimbangan praktis: jika antarmuka itu tidak terekspos ke pihak ketiga, frekuensi upgradenya rendah, dan biaya migrasi melebihi manfaatnya dalam dua hingga tiga tahun, modernisasi bisa dijadwalkan kemudian. Yang penting: setiap antarmuka *baru* memakai released API sejak awal.

## Kesimpulan

Integrasi adalah dimensi clean core yang paling mudah lolos dari perhatian, dan paling mahal saat tagihannya jatuh tempo di hari upgrade. Membersihkan kode tanpa membersihkan antarmuka hanya memindahkan titik patah, bukan menghilangkannya. Prinsipnya konsisten: pusatkan koneksi melalui SAP Integration Suite, jadikan released API dan event sebagai standar, dan pertahankan koneksi lama hanya bila pragmatis, bukan karena lupa. Sebagai SAP Platinum Partner melalui keanggotaan United VARs dan bagian dari Metrodata Group sejak 1998, Soltius mendampingi perusahaan merancang lapisan integrasi yang API-first dan aman terhadap upgrade berikutnya: mengintegrasikan SAP dengan sistem non-SAP, bukan membangun platformnya.

Untuk mendiskusikan kesiapan integrasi clean core dan pemetaan antarmuka di lanskap SAP Anda, kunjungi soltius.co.id.
