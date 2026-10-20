---
title: "SKU (Stock Keeping Unit): Pengertian, Fungsi, dan Cara Membuatnya"
meta_title: "SKU Adalah: Pengertian, Fungsi, dan Cara Membuatnya"
meta_description: "SKU adalah kode unik internal untuk mengidentifikasi tiap varian produk. Pahami fungsi SKU, bedanya dengan barcode, serta aturan penomoran dan contohnya."
slug: "sku-adalah-pengertian-fungsi-cara-membuat"
language: "id"
primary_keyword: "sku adalah"
secondary_keywords: ["stock keeping unit", "cara membuat sku", "contoh sku produk", "kode sku", "barcode", "GTIN (Global Trade Item Number)", "UPC (Universal Product Code)", "manajemen persediaan", "stock opname", "master data produk", "varian produk", "SAP S/4HANA Retail"]
internal_links:
  - url: "https://www.soltius.co.id/id/solutions-by-products/retail-produk"
    anchor: "solusi retail"
  - url: "https://www.soltius.co.id/id/blog/konsep-warehouse-management-system-yang-wajib-anda-tahu"
    anchor: "manajemen gudang"
external_citations:
  - url: "https://www.gs1us.org/upcs-barcodes-prefixes/guide-to-upcs"
    context: "GS1 US: SKU bersifat internal dan dibuat brand/peritel sendiri, sedangkan UPC berlaku global; dua peritel bisa memakai UPC sama dengan SKU berbeda"
  - url: "https://learning.sap.com/courses/configuring-master-data-in-sap-s-4hana-cloud-private-edition-retail/creating-a-generic-article-1-1"
    context: "SAP Learning: varian generic article secara standar dinomori dari nomor artikel induk ditambah sufiks urut tiga digit; varian merepresentasikan produk fisik di seluruh proses bisnis"
brief_id: "sku-c01"
target_word_count: 900
publish_month: "2026-08"
word_count: 973
---

# SKU (Stock Keeping Unit): Pengertian, Fungsi, dan Cara Membuatnya

*Stock opname* selesai tengah malam dan angkanya tetap tidak cocok. Tim gudang salah ambil barang karena di sistem dua produk sama-sama bernama "Kaos Polos Hitam", padahal ukurannya berbeda. Masalahnya jarang soal kedisiplinan orang; lebih sering soal kode produk. Artikel ini membahas fungsi SKU, bedanya dengan barcode, dan aturan penomoran yang bisa langsung dipakai.

> **Ringkasnya:** SKU (*stock keeping unit*) adalah kode unik alfanumerik yang dibuat sebuah bisnis untuk mengidentifikasi setiap varian produk yang dapat dijual dan disimpan — merek, kategori, warna, hingga ukuran. Berbeda dari barcode yang berlaku global, SKU bersifat internal dan sepenuhnya dirancang oleh perusahaan yang memakainya, sehingga dua peritel bisa memakai kode berbeda untuk barang yang sama.

## Apa Fungsi SKU bagi Bisnis?

Fungsi utama SKU adalah menjadi kunci penghubung antarproses, bukan sekadar label di rak. Satu kode yang sama dipakai tim gudang saat memetik barang, kasir saat menjual, dan analis saat membaca laporan penjualan. Selama kodenya konsisten, ketiga proses itu berbicara tentang barang yang persis sama.

- **Identifikasi varian yang mirip.** Kaos hitam ukuran M dan L punya kode sendiri-sendiri, sehingga petugas *picking* tidak menebak dari nama produk.
- **Stock opname.** Hitungan fisik dicocokkan per kode, bukan per nama yang ditulis berbeda oleh tiap orang. Ini fondasi [manajemen gudang](https://www.soltius.co.id/id/blog/konsep-warehouse-management-system-yang-wajib-anda-tahu) yang akurat.
- **Analisis penjualan.** Anda tahu varian mana yang laku dan mana yang menjadi *dead stock* (barang yang tidak bergerak).
- **Sinkronisasi lintas kanal.** Satu kode acuan dipakai katalog marketplace, toko fisik, dan gudang.

## Apa Bedanya SKU, Barcode, dan GTIN?

Pembedanya adalah siapa yang menerbitkan. SKU Anda buat sendiri; GTIN (*Global Trade Item Number*) ditetapkan pemilik merek dari rentang nomor yang dilisensikan lewat GS1 dan berlaku global; barcode hanyalah cara mesin membaca nomor itu tanpa salah ketik. Ketiganya kerap disamakan, padahal perannya berbeda.

| Dimensi | SKU | Barcode | GTIN |
|---|---|---|---|
| Siapa yang membuat | Peritel/brand sendiri, bebas dirancang | Pemilik merek, mengikuti standar GS1 | Pemilik merek, dari rentang nomor yang dilisensikan GS1 |
| Sifat pemakaian | **Internal**, hanya berlaku di bisnis Anda | Media baca | **Global**, satu nomor di mana pun |
| Format | Alfanumerik bebas (lazimnya 8–12 karakter) | Simbol garis atau 2D (UPC-A, EAN-13) | Numerik: **8, 12, 13, atau 14 digit** |
| Tujuan utama | Manajemen stok dan analisis internal | Agar mesin membaca nomor tanpa salah ketik | Identifikasi produk unik secara global |

Menurut [GS1 US](https://www.gs1us.org/upcs-barcodes-prefixes/guide-to-upcs), otoritas global untuk identifikasi unik produk, dua peritel bisa menjual barang sama dengan kode UPC (*Universal Product Code*) identik, tetapi masing-masing tetap memakai nomor SKU sendiri.

## Cara Membuat SKU: Anatomi Kode dan Aturan Penomoran

Kode SKU yang baik dibaca dari umum ke spesifik: merek dan kategori di depan, varian di belakang. Strukturnya ditetapkan sekali di awal, sebab mengubah skema setelah ribuan produk terdaftar berarti menomori ulang label, katalog, dan riwayat penjualan sekaligus. Aturan jauh lebih menentukan daripada kreativitas kodenya.

Ilustrasi berikut memakai merek fiktif Nordika: kaos polos hitam ukuran M menjadi `NRD-KP-HTM-M`.

| Segmen | Isi | Contoh |
|---|---|---|
| Merek | Nordika *(ilustrasi)* | `NRD` |
| Kategori | Kaos polos | `KP` |
| Warna | Hitam | `HTM` |
| Ukuran | M | `M` |

Skema yang sama meluas sendiri. Satu model kaos dengan 3 warna (`HTM`, `PTH`, `NVY`) dan 4 ukuran (S, M, L, XL) menghasilkan 12 SKU, dari `NRD-KP-HTM-S` hingga `NRD-KP-NVY-XL`, semuanya berbagi awalan `NRD-KP-` sehingga tersortir berdampingan.

Enam aturan yang menjaga skema tetap konsisten:

- **Urut umum ke spesifik.** Merek dan kategori di depan, varian di belakang, agar kode berawalan sama mengelompok.
- **Panjang wajar.** Praktik yang lazim berkisar 8–12 karakter. Tidak ada standar resminya: angka ini patokan lapangan, bukan aturan baku.
- **Jangan diawali angka nol.** Banyak spreadsheet dan alat impor memangkasnya diam-diam: `012` berubah menjadi `12`.
- **Hindari karakter kembar.** Angka `0` versus huruf `O`, `1` versus `I`, sumber salah ketik saat input.
- **Huruf kapital dan tanda hubung saja.** Spasi dan karakter spesial kerap merusak impor data.
- **Jangan pakai nomor pemasok atau pabrikan.** Nomor itu bisa berubah dan bukan milik Anda.

SKU bukan tempat menyimpan segalanya. Harga, jumlah stok, atau nama pemasok yang ikut dikodekan membuat kode usang begitu data itu berubah, dan kode yang terlalu deskriptif melambatkan orang yang mengetiknya ratusan kali sehari.

## SKU di Dalam Sistem: Ketika Spreadsheet Mulai Kewalahan

Pada skala ribuan varian, penomoran manual gagal bukan karena aturannya salah, melainkan karena tidak ada yang menegakkannya. Di lapangan, skema paling sering berantakan bukan saat dirancang, tetapi saat orang kedua mulai menambahkan produk dengan aturannya sendiri. Duplikat dan salah ketik masuk diam-diam.

ERP ritel menangani ini lewat master data produk berjenjang. Di SAP S/4HANA Retail, produk induk (*generic article*) menurunkan varian warna dan ukuran secara otomatis, dan menurut [dokumentasi SAP](https://learning.sap.com/courses/configuring-master-data-in-sap-s-4hana-cloud-private-edition-retail/creating-a-generic-article-1-1), nomor varian secara standar dibentuk dari nomor artikel induk ditambah sufiks urut tiga digit. Varian itulah yang mewakili barang fisik di seluruh proses bisnis. Skemanya ditegakkan sistem, bukan ingatan orang.

## FAQ (Pertanyaan yang Sering Diajukan)

### Apa perbedaan SKU dan barcode?

SKU adalah kode internal untuk mengelola stok. Barcode adalah representasi visual yang dibaca mesin; angka yang dikodekannya, yaitu GTIN, diterbitkan lewat GS1 dan berlaku global. Menurut GS1 US, dua peritel bisa memakai UPC sama dengan nomor SKU berbeda.

### Berapa karakter SKU yang ideal?

Tidak ada standar resmi; setiap perusahaan menentukan formatnya sendiri. Praktik yang lazim di lapangan berkisar 8–12 karakter: cukup memuat merek, kategori, dan varian tanpa menyulitkan input manual. Syarat yang wajib hanya tiga: unik, konsisten formatnya, dan tidak diawali angka nol.

### Apakah SKU perlu didaftarkan seperti barcode?

Tidak. SKU sepenuhnya internal, tanpa perlu mendaftar ke lembaga mana pun. Yang diterbitkan lewat GS1 adalah GTIN, nomor global pada barcode, dengan empat struktur sepanjang 8, 12, 13, atau 14 digit. Sejumlah kanal ritel dan marketplace mensyaratkan GTIN untuk listing produk.

## Kesimpulan

Stock opname yang tidak pernah cocok jarang berawal dari kelalaian tim; lebih sering dari kode produk tanpa aturan. Skema SKU yang ditetapkan sekali dan ditegakkan konsisten menutup sebagian besarnya; sisanya ditegakkan sistem saat varian melewati kemampuan spreadsheet. Sebagai SAP Platinum Partner melalui United VARs dan berpengalaman sejak 1998, Soltius mengimplementasikan serta mendampingi [solusi retail](https://www.soltius.co.id/id/solutions-by-products/retail-produk) berbasis SAP, termasuk penataan master data produk.

Untuk mendiskusikan penataan SKU dan master data produk di SAP S/4HANA Retail, kunjungi soltius.co.id.
