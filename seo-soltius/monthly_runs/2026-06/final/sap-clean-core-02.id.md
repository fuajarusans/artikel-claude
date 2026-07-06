---
title: "Remediasi Custom Code SAP: Langkah Membersihkan Z-Code Menuju ABAP Cloud"
meta_title: "Remediasi Custom Code SAP: Jalan ke Clean Core & ABAP Cloud"
meta_description: "Cara membersihkan Z-code SAP menuju ABAP Cloud: panduan 4 fase audit, tabel triase Keep/Eliminate/Rebuild, dan kapan TIDAK perlu terburu-buru remediasi."
slug: "remediasi-custom-code-sap-clean-core"
language: "id"
primary_keyword: "SAP Clean Core"
secondary_keywords:
  - "Z-code SAP"
  - "ABAP Cloud model"
  - "SAP Custom Code Migration app"
  - "released objects SAP"
  - "ABAP Test Cockpit ATC"
  - "technical debt SAP"
  - "brownfield conversion S/4HANA"
  - "Keep Eliminate Rebuild"
  - "SAP Readiness Check"
  - "remediasi custom code SAP"
internal_links:
  - url: "https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide"
    anchor: "SAP Clean Core"
  - url: "https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud"
    anchor: "migrasi ERP ke cloud"
  - url: "https://www.soltius.co.id/id/blog/low-code-and-no-code-platforms"
    anchor: "platform low-code SAP Build"
external_citations:
  - url: "https://help.sap.com/doc/9dcbc5e47ba54a5cbb509afaa49dd5a1/2025.001/en-US/CustomCodeMigration_EndtoEnd.pdf"
    context: "Custom Code Migration Guide for SAP S/4HANA 2025 — proses end-to-end migrasi custom code"
  - url: "https://pages.community.sap.com/topics/abap/abap-cloud-faq"
    context: "SAP Community ABAP Cloud FAQ — definisi ABAP Cloud, released objects, perbedaan dengan ABAP klasik"
brief_id: "sap-clean-core-02"
target_word_count: 1350
publish_month: "2026-06"
word_count: 1350
---

# Remediasi Custom Code SAP: Langkah Membersihkan Z-Code Menuju ABAP Cloud

Ketika proyek konversi S/4HANA akhirnya dibuka, tim IT hampir selalu berhadapan dengan kejutan yang sama: ratusan, bahkan ribuan program *custom* (yang biasa disebut Z-code) tertumpuk selama 10, 15, bahkan 20 tahun implementasi SAP. Banyak yang sudah tidak digunakan, sebagian masih kritis, dan tidak sedikit yang tidak ada yang benar-benar ingat fungsinya. Kode-kode inilah yang kerap menjadi penghambat utama menuju standar *SAP Clean Core* dan memperlambat konversi *brownfield* ke S/4HANA.

Artikel ini bukan membahas konsep *clean core* secara umum, melainkan menjawab satu pertanyaan praktis: apa yang harus dilakukan dengan Z-code hari ini? Kami uraikan empat fase remediasi, dari inventarisasi hingga migrasi ke model *ABAP Cloud*, lengkap dengan tabel triase dan penjelasan kapan Anda tidak perlu terburu-buru.

> **Ringkas:** *ABAP Cloud* adalah model pengembangan ABAP modern yang hanya mengizinkan akses ke *released objects* dan API resmi SAP, menghasilkan kode yang tidak terputus saat *upgrade* sistem. Berbeda dengan ABAP klasik yang bisa mengakses internal sistem secara bebas, ABAP Cloud memastikan kustomisasi tetap aman dan sesuai prinsip *clean core* SAP S/4HANA. (46 kata)

{IMAGE_01: Infografis horizontal 4 fase remediasi custom code SAP — Inventarisasi (ikon SAP for Me, warna oranye) → Analisis (ikon ATC/Eclipse, warna merah) → Triase (ikon tabel Keep/Eliminate/Rebuild, warna kuning) → Migrasi (ikon ABAP Cloud/perisai, warna hijau) — teks Bahasa Indonesia, gaya korporat bersih, gradien oranye ke hijau menggambarkan kemajuan dari "masalah" ke "kode bersih"}

## Apa itu Z-code dan mengapa ia menjadi hambatan terbesar migrasi S/4HANA?

Sejak era SAP R/3, objek kustom pelanggan menggunakan *namespace* khusus yang SAP cadangkan: nama yang diawali huruf Y atau Z. Itulah mengapa istilah "Z-code" melekat sebagai sinonim *custom code* di komunitas SAP. Setiap laporan spesifik industri, logika bisnis yang tidak ada di SAP standard, modifikasi proses yang diminta satu departemen, semuanya masuk ke sini.

Selama berada di sistem ECC, Z-code ini biasanya tidak bermasalah. Masalah datang saat migrasi *brownfield* ke S/4HANA dimulai: model data S/4HANA berbeda dari ECC, dan ratusan fungsi internal yang selama ini diakses langsung oleh Z-code tidak lagi kompatibel. Model ABAP Cloud membatasi akses hanya ke *released objects*, yaitu objek yang SAP nyatakan boleh digunakan pelanggan. Akses langsung ke tabel internal seperti MARA, misalnya, harus diganti dengan CDS View I_PRODUCT yang sudah di-*release* (SAP Community, 2025).

Instalasi SAP yang sudah berjalan belasan tahun bisa memiliki ratusan hingga ribuan objek Z. Dalam praktik konversi brownfield, proporsi *dead code* (kode yang tidak aktif dieksekusi) sering mengejutkan; pembersihannya saja sudah mempercepat seluruh analisis berikutnya.

**BACA JUGA:** [SAP Clean Core](https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide).

## Empat fase remediasi custom code SAP: dari audit hingga ABAP Cloud

Proses remediasi yang terstruktur dibagi menjadi empat fase berurutan. Tiap fase menghasilkan input untuk fase berikutnya, sehingga urutannya tidak bisa dibalik.

1. **Fase Inventarisasi: SAP Readiness Check.** Jalankan SAP Readiness Check melalui portal SAP for Me (gratis bagi pemegang kontrak SAP aktif; tersedia juga di SAP Cloud ALM). Hasilnya: laporan inventaris objek kustom berikut tipe dan frekuensi penggunaannya.

2. **Fase Analisis: ABAP Test Cockpit (ATC).** Jalankan ABAP Test Cockpit (ATC) dalam ABAP Development Tools (ADT) Eclipse. ATC memindai setiap objek Z dan menandai pelanggaran ABAP Cloud restrictions secara real-time: akses ke tabel internal non-released atau *statement* yang tidak diizinkan di cloud. Setiap temuan dilengkapi saran perbaikan (SAP Help Portal Upgrade Guide, 2025).

3. **Fase Triase: Keep, Eliminate, atau Rebuild.** Dengan data ATC di tangan, tim memutuskan per kelompok objek: pertahankan dengan sedikit penyesuaian (*keep/swap*), eliminasi langsung, atau bangun ulang di SAP BTP. SAP Custom Code Migration app (Fiori) melacak status triase per objek secara terpusat.

4. **Fase Migrasi dan Verifikasi: ABAP Cloud.** Kode yang dipertahankan ditulis ulang menggunakan *released objects* dan API resmi SAP. SAP memelihara "cloudification repository" berisi daftar *released successor objects* pengganti resmi untuk internal objects yang tidak boleh diakses di ABAP Cloud. ATC dijalankan ulang untuk memverifikasi hasilnya.

## Tabel triase: Keep, Eliminate, atau Rebuild ke SAP BTP?

Kerangka triase yang konsisten digunakan komunitas SAP dan panduan migrasi (Custom Code Migration Guide for SAP S/4HANA 2025) membagi kode ke dalam beberapa jalur keputusan. Framing ini bukan terminologi resmi tunggal SAP, tapi pendekatan yang paling praktis dan konsisten digunakan dalam proyek konversi nyata.

| Tipe Z-code | Rekomendasi | Alasan |
|---|---|---|
| Modifikasi SAP yang sudah punya pengganti di S/4HANA standard | **Eliminate** | S/4HANA standard sudah mencakup fungsi ini; kode kustom redundan |
| Kode tidak aktif (*dead code*, 0–1 eksekusi per tahun) | **Eliminate** | Tidak ada nilai bisnis; hilangkan technical debt langsung |
| Kode kecil yang mengakses internal object tapi ada released API penggantinya | **Swap Released API** | Ganti referensi ke released API; logika utama dipertahankan |
| Logika bisnis unik yang tidak ada padanannya di SAP standard | **Rebuild** di SAP BTP | Nilai bisnis tinggi; tulis ulang sebagai side-by-side extension agar *upgrade-safe* |
| Enhancement yang bertentangan langsung dengan data model S/4HANA baru | **Evaluate lebih lanjut** | Perlu analisis mendalam; mungkin fungsi sudah ada di standard baru |

Untuk kode yang masuk jalur **Rebuild**, SAP BTP menjadi tujuan yang paling direkomendasikan: ekstensi ditulis sebagai *side-by-side extension* yang berdiri di luar inti S/4HANA, tidak menyentuh lapisan standar SAP. Opsi lain yang semakin banyak digunakan adalah mengembangkan ulang fungsi tersebut dengan [platform low-code SAP Build](https://www.soltius.co.id/id/blog/low-code-and-no-code-platforms), khususnya untuk proses yang bisa diformulasikan tanpa coding penuh.

{IMAGE_02: Infografis tabel triase Keep/Eliminate/Rebuild — tiga kolom berwarna berbeda (Keep/Swap = biru muda, Eliminate = abu-abu/merah, Rebuild = hijau), tiap kolom berisi contoh tipe kode dan ikon representatif; format infografis ringkas siap dibagikan tim IT, teks Bahasa Indonesia, gaya korporat bersih}

Dalam proyek konversi brownfield yang ditangani Soltius, tim sering menemukan bahwa fase inventarisasi saja sudah mengungkap proporsi objek tidak aktif yang jauh lebih besar dari perkiraan awal. Pembersihan *dead code* sebelum masuk ke fase triase penuh menyederhanakan seluruh analisis berikutnya.

## Apakah semua Z-code harus dibersihkan sebelum migrasi ke S/4HANA?

Tidak. Asumsi ini sering muncul dalam rapat perencanaan konversi dan, jika tidak diluruskan lebih awal, bisa membuat scope proyek terasa mustahil sebelum dimulai.

Pendekatan yang lebih realistis adalah *phased remediation*: selesaikan dulu kode yang menghalangi konversi inti atau bertentangan dengan *released API* kritis. Kode tidak aktif langsung dieliminasi. *Finding* ATC yang tidak kritis bisa masuk backlog pasca go-live. Yang tidak boleh ditunda: ATC scan menyeluruh sebelum go-live, bukan untuk menyelesaikan semua temuan, tapi agar tidak ada kejutan setelah sistem aktif.

*Custom code remediation* sering menjadi salah satu komponen waktu dan biaya terbesar dalam konversi brownfield. Untuk diskusi yang lebih strategis tentang pendekatan migrasi keseluruhan, panduan [migrasi ERP ke cloud](https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud) membahas opsi brownfield, greenfield, dan bluefield secara lebih luas.

## Kapan remediasi custom code BELUM jadi prioritas utama?

Bagian ini jarang ditulis konsultan, padahal justru di sinilah kejujuran membangun kepercayaan. Tidak semua perusahaan perlu segera masuk ke proses remediasi penuh.

Beberapa kondisi di mana remediasi bukan urgensi pertama:

- **Instalasi greenfield baru.** Tidak ada legacy Z-code, tidak ada yang perlu diremediasi. Fokus di sini adalah menulis semua ekstensi baru langsung dalam model ABAP Cloud dari awal.
- **Timeline migrasi masih lebih dari 3 tahun.** Investasi besar dalam remediasi hari ini berisiko membersihkan kode yang akan diganti ulang sebelum digunakan. Lebih produktif fokus pada dokumentasi dan inventarisasi dulu.
- **Anggaran terbatas, perlu diprioritaskan.** SAP Readiness Check dan ATC scan tidak memerlukan biaya lisensi tambahan; keduanya tersedia dalam ekosistem SAP yang sudah ada. Inventarisasi dan analisis bisa dimulai tanpa anggaran besar. Remediasi penuh, terutama jalur Rebuild ke SAP BTP, yang membutuhkan perencanaan anggaran lebih serius.

Durasi proses remediasi tidak bisa dijanjikan dalam satu angka: fase ATC scan bisa selesai dalam beberapa hari hingga minggu, tergantung ukuran sistem. Remediasi penuh, terutama untuk objek di jalur Rebuild, bisa memakan berbulan-bulan. Estimasi yang jujur hanya bisa diberikan setelah fase inventarisasi dan ATC scan selesai, bukan sebelumnya.

Mengaudit dan membersihkan Z-code bukan pekerjaan yang glamor, tapi justru di sinilah konversi brownfield sering ditentukan. Semakin awal inventarisasi dimulai, semakin realistis scope dan anggaran yang bisa disusun. Sebagai SAP Platinum Partner melalui United VARs, Soltius mendampingi perusahaan dari audit custom code hingga migrasi ke model ABAP Cloud, termasuk memfasilitasi keputusan triase bersama tim IT klien.

## FAQ (Pertanyaan yang Sering Diajukan)

### Apa itu ABAP Cloud dan apa bedanya dengan ABAP klasik?
ABAP Cloud hanya mengizinkan akses ke *released objects* dan API resmi SAP, berbeda dengan ABAP klasik yang bisa mengakses internal SAP secara bebas. Misalnya, tabel MARA tidak boleh diakses langsung; penggantinya adalah CDS View I_PRODUCT yang sudah di-*release*. Kode ABAP Cloud disebut *upgrade-safe* karena tidak bergantung pada internal SAP yang bisa berubah. (Sumber: ABAP Cloud FAQ resmi SAP.)

### Apa itu Z-code SAP dan mengapa menjadi hambatan migrasi?
Z-code adalah kode kustom SAP: objek yang diawali huruf Y atau Z, yakni *namespace* yang SAP cadangkan untuk kustomisasi pelanggan. Setelah bertahun-tahun implementasi, sistem SAP bisa memiliki ratusan hingga ribuan objek Z. Saat migrasi ke S/4HANA, semua harus dianalisis kompatibilitasnya dengan model ABAP Cloud, menjadikannya penghambat utama konversi *brownfield*.

### Apa itu SAP Readiness Check dan bagaimana cara menggunakannya?
SAP Readiness Check diakses melalui portal SAP for Me (gratis bagi pemegang kontrak SAP aktif; tersedia juga di SAP Cloud ALM). Alat ini menganalisis sistem ECC atau S/4HANA dan menghasilkan laporan inventarisasi objek kustom serta temuan ATC. Hasilnya adalah peta jalan awal: fase pertama dalam proses remediasi custom code.

### Apa itu ABAP Test Cockpit (ATC) dan apa fungsinya?
ATC adalah alat analisis kode statis dalam ABAP Development Tools (ADT) Eclipse. Alat ini memindai kode dan menandai setiap pelanggaran ABAP Cloud restrictions secara real-time: akses ke tabel internal non-released atau *statement* yang tidak diizinkan di cloud. Setiap temuan dilengkapi saran perbaikan. ATC adalah alat utama pada fase analisis dan verifikasi pasca migrasi.

### Apa itu released objects di SAP dan mengapa penting?
*Released objects* adalah objek dan antarmuka yang SAP nyatakan tersedia untuk kode ABAP Cloud. Hanya ini yang boleh diakses; akses ke internal SAP objects non-released akan ditandai error oleh ATC. SAP memelihara daftar ini melalui "cloudification repository" sebagai referensi tim developer untuk menemukan API pengganti yang sesuai.

### Bagaimana cara menentukan kode mana yang harus di-Rebuild ke SAP BTP?
Kode yang perlu di-*rebuild* ke SAP BTP adalah logika bisnis yang benar-benar unik dan tidak bisa digantikan *released API*. Contoh: laporan yang menggabungkan data lintas modul dengan logika perhitungan spesifik industri. Selalu cek dulu apakah S/4HANA standard sudah mencakup fungsinya sebelum memutuskan *rebuild* dari nol.

Untuk mendiskusikan kesiapan remediasi custom code di lingkungan SAP perusahaan Anda, kunjungi soltius.co.id.
