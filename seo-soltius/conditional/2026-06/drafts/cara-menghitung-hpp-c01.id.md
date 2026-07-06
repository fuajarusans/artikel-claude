---
title: "Cara Menghitung HPP (Harga Pokok Produksi): Rumus, Contoh, dan Kalkulator Manufaktur"
meta_title: "Cara Menghitung HPP: Rumus & Contoh Manufaktur"
meta_description: "Cara menghitung HPP (Harga Pokok Produksi) lengkap: rumus, contoh angka langkah demi langkah, template kalkulator, beda HPP produksi vs penjualan, dan FAQ."
slug: "Menghitung-Harga-Pokok-Produksi-Untuk-Perusahaan-Manufaktur"
language: "id"
primary_keyword: "cara menghitung hpp"
secondary_keywords:
  - "rumus harga pokok produksi"
  - "harga pokok produksi (HPP)"
  - "harga pokok penjualan vs harga pokok produksi"
  - "biaya bahan baku terpakai"
  - "biaya overhead pabrik (BOP)"
  - "persediaan barang dalam proses (WIP)"
  - "contoh perhitungan HPP manufaktur"
  - "laporan harga pokok produksi"
  - "harga pokok produksi per unit"
  - "total biaya produksi"
internal_links:
  - url: "https://www.soltius.co.id/solutions-by-products/erp-sap-s-4hana-and-erp-large-enterprises"
    anchor: "implementasi SAP S/4HANA"
  - url: "https://www.soltius.co.id/id/blog/read/mengenal-sistem-sap-dan-manfaatnya"
    anchor: "sistem ERP seperti SAP"
  - url: "https://www.soltius.co.id/id/blog/digital-manufaktur-sistem"
    anchor: "digitalisasi manufaktur"
external_citations:
  - url: "https://accounting.binus.ac.id/2017/08/30/psak-14-penyesuaian-2014-persediaan/"
    context: "PSAK 14 (Persediaan): biaya konversi (BTKL + overhead) yang boleh masuk persediaan; overhead tetap dialokasikan berdasarkan kapasitas normal; SG&A dikecualikan"
  - url: "https://learning.sap.com/courses/product-cost-planning-in-sap-s-4hana"
    context: "Product Cost Planning di SAP S/4HANA: standard cost dihitung lewat cost estimate dan disimpan di material master untuk valuasi persediaan"
  - url: "https://learning.sap.com/courses/cost-object-controlling-in-sap-s-4hana/calculating-work-in-process-wip"
    context: "WIP dikapitalisasi sebagai aset hingga manufacturing order selesai; perhitungan WIP adalah langkah period-end closing"
brief_id: "cara-menghitung-hpp-c01"
target_word_count: 1750
publish_month: "2026-06"
word_count: 2046
---

# Cara Menghitung HPP (Harga Pokok Produksi): Rumus, Contoh, dan Kalkulator Manufaktur

Anda perlu menetapkan harga jual minggu ini, tetapi belum yakin berapa biaya sebenarnya untuk memproduksi satu unit barang. Biaya bahan baku tercampur dengan pembelian yang belum terpakai, upah produksi terselip di daftar gaji, dan ada barang setengah jadi di lantai pabrik yang tak masuk hitungan. Inilah masalah yang dipecahkan oleh **cara menghitung HPP**. Artikel ini menyajikan rumus baku Harga Pokok Produksi, contoh perhitungan lengkap dengan angka yang bisa Anda telusuri baris per baris, kerangka kalkulator siap salin, serta penjelasan kapan rumus manual mulai gagal dan apa gantinya.

> **Secara singkat:** Harga Pokok Produksi (HPP) adalah total biaya yang dikeluarkan perusahaan untuk mengubah bahan baku menjadi produk jadi dalam satu periode akuntansi. HPP mencakup tiga komponen — biaya bahan baku langsung, biaya tenaga kerja langsung, dan biaya overhead pabrik — yang disesuaikan dengan perubahan persediaan barang dalam proses (*work in process*/WIP) awal dan akhir periode.

Melalui artikel ini, kita akan membahas perbedaan istilah yang sering tertukar (HPP produksi vs HPP penjualan), tiga komponen biaya, rumus berikut turunannya, contoh hitung satu perusahaan manufaktur, template yang bisa Anda salin, hingga titik di mana spreadsheet sudah tak memadai.

{IMAGE_01: Diagram alur perhitungan HPP horizontal — Bahan Baku Terpakai (saldo awal + pembelian − saldo akhir) → +BTKL +BOP → Total Biaya Produksi → +WIP awal −WIP akhir → Harga Pokok Produksi → +Barang Jadi awal −akhir → Harga Pokok Penjualan. Tiap kotak warna berbeda untuk membedakan input vs hasil; gaya korporat biru-putih bersih, teks Bahasa Indonesia.}

## Apa itu HPP, dan apa bedanya Harga Pokok Produksi dengan Harga Pokok Penjualan?

Di Indonesia, singkatan "HPP" dipakai untuk dua hal berbeda. **Harga Pokok Produksi** (*Cost of Goods Manufactured*/COGM) adalah biaya membuat barang jadi dalam satu periode. **Harga Pokok Penjualan** (*Cost of Goods Sold*/COGS) adalah biaya dari barang yang benar-benar terjual. Yang pertama berhenti di pintu gudang barang jadi; yang kedua masuk laporan laba rugi.

Kebingungan istilah ini adalah pertanyaan paling sering muncul saat orang mempelajari topik ini, dan banyak artikel pesaing tidak menjelaskannya di awal. Padahal keduanya tidak bisa dipertukarkan: sebuah pabrik bisa memproduksi 10.000 unit (masuk HPP produksi) tetapi hanya menjual 8.000 unit (yang masuk HPP penjualan). Sisanya menjadi persediaan barang jadi di neraca, bukan beban di laporan laba rugi.

Tabel berikut memisahkan keduanya secara tegas agar Anda tidak salah pakai saat menyusun laporan.

| Aspek | Harga Pokok Produksi (COGM) | Harga Pokok Penjualan (COGS) |
|---|---|---|
| Padanan Inggris | Cost of Goods Manufactured | Cost of Goods Sold |
| Definisi | Total biaya memproduksi barang jadi dalam satu periode | Biaya barang yang benar-benar terjual dalam satu periode |
| Rumus inti | Total Biaya Produksi + WIP Awal − WIP Akhir | HPP Produksi + Barang Jadi Awal − Barang Jadi Akhir |
| Muncul di | Laporan Harga Pokok Produksi (internal) | Laporan Laba Rugi |
| Dipakai untuk | Menghitung biaya tiap barang selesai diproduksi | Menghitung laba kotor dari penjualan aktual |

Sepanjang artikel ini, "HPP" merujuk pada **Harga Pokok Produksi** kecuali disebut lain. Landasan akuntansinya di Indonesia adalah PSAK 14 (Persediaan), yang mengatur biaya apa saja yang boleh dibebankan ke nilai persediaan (Accounting BINUS, efektif 1 Januari 2017).

## Apa saja komponen Harga Pokok Produksi?

Harga Pokok Produksi terdiri dari tiga komponen biaya: **biaya bahan baku langsung**, **biaya tenaga kerja langsung (BTKL)**, dan **biaya overhead pabrik (BOP)**. Ketiganya kemudian disesuaikan dengan persediaan barang dalam proses (WIP) untuk mendapatkan angka HPP satu periode. Memisahkan ketiga komponen ini dengan rapi adalah separuh pekerjaan menghitung HPP.

- **Biaya bahan baku langsung.** Material yang secara fisik menjadi bagian produk — misalnya tepung dan gula untuk pabrik roti, atau pelat baja untuk komponen otomotif. Yang dihitung hanya bahan yang *terpakai* dalam produksi, bukan seluruh pembelian.
- **Biaya tenaga kerja langsung (BTKL).** Upah pekerja yang langsung mengerjakan produk: operator mesin, perakit, penjahit. Gaji manajer pabrik atau staf administrasi tidak masuk sini — itu bagian dari overhead.
- **Biaya overhead pabrik (BOP).** Semua biaya produksi tidak langsung: depresiasi mesin, listrik pabrik, pemeliharaan, gaji supervisor, dan bahan penolong. Dalam banyak perusahaan manufaktur, BOP berkisar 20–40% dari total biaya produksi, bergantung skala dan tingkat otomasi — ini estimasi umum industri (8thinktank), bukan angka baku. Pabrik padat modal cenderung di ujung 40%, padat karya di ujung 20%.

Ada satu aturan PSAK 14 yang sering terlewat: biaya administrasi umum dan biaya penjualan (SG&A) **tidak boleh** masuk nilai persediaan. Artinya, gaji tim pemasaran atau ongkos kirim ke pelanggan bukan bagian HPP, melainkan beban operasional terpisah. Aturan inilah yang membedakan biaya untuk valuasi persediaan dari biaya penuh untuk penetapan harga jual.

Komponen keempat yang bukan "biaya" melainkan "penyesuaian" adalah WIP — barang yang sudah mulai diproduksi tetapi belum selesai pada akhir periode. Perannya muncul di rumus berikutnya.

{IMAGE_02: Template laporan HPP gaya spreadsheet (Google Sheets/Excel) terisi angka ilustrasi — kolom "Komponen" dan "Jumlah (Rp)", baris dikelompokkan A. Bahan Baku Terpakai, B. Total Biaya Produksi, C. Harga Pokok Produksi, D. Harga Pokok Penjualan, E. HPP per unit; baris total dicetak tebal. Teks Bahasa Indonesia, siap di-screenshot pembaca.}

## Rumus harga pokok produksi (dan rumus turunannya)

Rumus inti harga pokok produksi adalah: **HPP = Total Biaya Produksi + Persediaan Awal WIP − Persediaan Akhir WIP**, dengan Total Biaya Produksi = Bahan Baku Terpakai + BTKL + BOP. Sebelum sampai ke sana, ada dua rumus pendukung, dan setelahnya satu rumus untuk menjembatani ke Harga Pokok Penjualan. Berikut urutannya, masing-masing satu baris.

1. **Bahan Baku Terpakai** = Saldo Awal Bahan Baku + Pembelian Bahan Baku − Saldo Akhir Bahan Baku
2. **Total Biaya Produksi** = Bahan Baku Terpakai + Biaya Tenaga Kerja Langsung + Biaya Overhead Pabrik
3. **Harga Pokok Produksi** = Total Biaya Produksi + Persediaan Awal WIP − Persediaan Akhir WIP
4. **Harga Pokok Penjualan (COGS)** = Harga Pokok Produksi + Persediaan Awal Barang Jadi − Persediaan Akhir Barang Jadi
5. **HPP per unit** = Harga Pokok Produksi ÷ Jumlah Unit Selesai Diproduksi

Logika di balik rumus nomor 1 sederhana tetapi sering keliru: pembelian bahan baku bukan biaya bahan baku. Sebagian pembelian bisa jadi masih tersimpan di gudang akhir periode. Karena itu kita mengambil saldo awal, menambah pembelian, lalu mengurangi saldo akhir agar hanya bahan yang benar-benar masuk produksi yang dihitung.

Rumus nomor 3 menjelaskan kenapa WIP penting. Jika WIP akhir lebih besar dari WIP awal, sebagian biaya produksi "tertahan" di barang setengah jadi dan tidak dihitung sebagai HPP periode ini. Di industri dengan siklus produksi panjang — galangan kapal, manufaktur berat, perkebunan — selisih WIP bisa sangat besar dan jangan dianggap remeh.

## Cara menghitung HPP langkah demi langkah (contoh perusahaan manufaktur)

Cara menghitung HPP mengikuti lima langkah sesuai urutan rumus di atas: hitung bahan baku terpakai, jumlahkan menjadi total biaya produksi, sesuaikan dengan WIP untuk mendapat HPP, sesuaikan lagi dengan barang jadi untuk mendapat COGS, lalu bagi dengan jumlah unit untuk HPP per unit. Mari kita jalankan dengan satu contoh ilustrasi — PT Contoh Manufaktur, periode Januari 2026. Angka di bawah dirancang konsisten dan bisa Anda telusuri baris demi baris.

**Langkah 1 — Biaya Bahan Baku Terpakai**

| Komponen | Jumlah (Rp) |
|---|---|
| Saldo Awal Bahan Baku | 200.000.000 |
| + Pembelian Bahan Baku | 800.000.000 |
| − Saldo Akhir Bahan Baku | (150.000.000) |
| **= Biaya Bahan Baku Terpakai** | **850.000.000** |

**Langkah 2 — Total Biaya Produksi**

| Komponen | Jumlah (Rp) |
|---|---|
| Biaya Bahan Baku Terpakai | 850.000.000 |
| + Biaya Tenaga Kerja Langsung (BTKL) | 350.000.000 |
| + Biaya Overhead Pabrik (BOP) | 300.000.000 |
| **= Total Biaya Produksi** | **1.500.000.000** |

Di contoh ini BOP = 300 juta dari total 1,5 miliar, atau 20% — tepat di batas bawah rentang umum tadi.

**Langkah 3 — Harga Pokok Produksi**

| Komponen | Jumlah (Rp) |
|---|---|
| Total Biaya Produksi | 1.500.000.000 |
| + Persediaan Awal WIP | 80.000.000 |
| − Persediaan Akhir WIP | (100.000.000) |
| **= Harga Pokok Produksi** | **1.480.000.000** |

**Langkah 4 — Harga Pokok Penjualan**

| Komponen | Jumlah (Rp) |
|---|---|
| Harga Pokok Produksi | 1.480.000.000 |
| + Persediaan Awal Barang Jadi | 120.000.000 |
| − Persediaan Akhir Barang Jadi | (200.000.000) |
| **= Harga Pokok Penjualan (COGS)** | **1.400.000.000** |

**Langkah 5 — HPP per unit** (asumsi 10.000 unit selesai diproduksi): Rp 1.480.000.000 ÷ 10.000 = **Rp 148.000 per unit**.

Angka Rp 148.000 inilah lantai harga jual Anda. Di atasnya barulah ditambahkan target margin serta biaya penjualan dan administrasi — yang, sesuai PSAK 14, tidak boleh ikut masuk perhitungan HPP persediaan.

## Kalkulator & template HPP: hitung lebih cepat

Cara tercepat menghitung HPP berulang tiap bulan adalah membangun template di Excel atau Google Sheets, lalu mengisi data input dan membiarkan rumus sel bekerja. Strukturnya mengikuti lima rumus tadi: Anda hanya memasukkan angka mentah, sistem menghitung baris totalnya. Berikut kerangka yang bisa langsung Anda salin.

| Field | Sumber Data | Formula Sel |
|---|---|---|
| Saldo Awal Bahan Baku | Buku besar / neraca awal | input (B2) |
| Pembelian Bahan Baku | Laporan pembelian | input (B3) |
| Saldo Akhir Bahan Baku | Stok opname | input (B4) |
| **Bahan Baku Terpakai** | otomatis | `=B2+B3-B4` |
| Biaya Tenaga Kerja Langsung | Daftar gaji produksi | input (B6) |
| Biaya Overhead Pabrik | Akumulasi BOP | input (B7) |
| **Total Biaya Produksi** | otomatis | `=B5+B6+B7` |
| Persediaan Awal WIP | Catatan periode lalu | input (B9) |
| Persediaan Akhir WIP | Stok opname WIP | input (B10) |
| **Harga Pokok Produksi** | otomatis | `=B8+B9-B10` |
| Persediaan Awal Barang Jadi | Neraca / gudang | input (B12) |
| Persediaan Akhir Barang Jadi | Stok opname barang jadi | input (B13) |
| **Harga Pokok Penjualan** | otomatis | `=B11+B12-B13` |
| Unit Selesai Diproduksi | Laporan produksi | input (B15) |
| **HPP per Unit** | otomatis | `=B11/B15` |

Template seperti ini memadai untuk satu lini produk dengan data yang relatif stabil. Begitu jumlah produk bertambah dan rumus mulai bercabang, justru di situ letak risikonya — yang kita bahas berikut.

## Kapan rumus manual dan spreadsheet mulai gagal (dan apa solusinya)

Spreadsheet mulai tidak andal ketika perusahaan punya banyak SKU dengan *multi-level Bill of Materials* (struktur komponen berlapis), tarif overhead yang berubah antar periode, WIP lintas bulan yang harus direkonsiliasi, dan kebutuhan jejak audit. Bukan jumlah SKU tertentu yang jadi pemicunya, melainkan kombinasi faktor-faktor ini — dan satu salah ketik di sel tersembunyi bisa menggeser HPP seluruh laporan.

Di sistem ERP modern, perhitungan yang tadi Anda lakukan manual menjadi *product costing* yang berjalan otomatis. Di SAP S/4HANA Finance, modul **Product Cost Planning** menghasilkan *standard cost* (harga standar) dari struktur produk dan disimpan di *material master* sebagai dasar valuasi persediaan (SAP Learning). Yang menarik bagi praktisi HPP: COGM di SAP dipecah lewat *cost component split* menjadi material, tenaga kerja, dan overhead — persis paralel dengan tiga komponen HPP manual yang kita bahas tadi.

Tiga hal lain pun ikut terotomatisasi:

- **WIP dikapitalisasi otomatis.** SAP memvaluasi barang setengah jadi sebagai aset di neraca hingga *manufacturing order* selesai; perhitungan WIP menjadi bagian dari proses tutup buku periode (SAP Learning).
- **Material Ledger aktif sebagai standar di S/4HANA.** Modul ini memungkinkan valuasi material dalam beberapa mata uang sekaligus. Perusahaan yang perlu melaporkan biaya aktual — bukan hanya biaya standar — dapat mengaktifkan *Actual Costing* di atasnya, tetapi ini opsional dan merupakan keputusan bisnis, bukan bawaan setiap implementasi.
- **Setiap angka dapat ditelusuri** hingga ke dokumen sumber, sehingga audit yang tadinya menyusun ulang dari banyak file menjadi hitungan klik.

Transisi ke sistem terintegrasi semacam ini biasanya bukan sekadar urusan software, melainkan pemetaan ulang struktur biaya ke dalam [sistem ERP seperti SAP](https://www.soltius.co.id/id/blog/read/mengenal-sistem-sap-dan-manfaatnya). Di sinilah pendampingan partner berperan — Soltius mendampingi perusahaan manufaktur memetakan komponen biaya produksi mereka ke modul yang tepat, sejalan dengan upaya [digitalisasi manufaktur](https://www.soltius.co.id/id/blog/digital-manufaktur-sistem) di lantai produksi.

Satu catatan jujur: pindah ke ERP belum tentu langkah berikutnya untuk semua orang. Jika produksi Anda satu lini, datanya stabil, dan tim disiplin menjaga spreadsheet, template di atas masih memadai. Otomasi product costing baru benar-benar terasa nilainya ketika kompleksitas — bukan sekadar ukuran perusahaan — sudah melampaui kemampuan manual.

## FAQ (Pertanyaan yang Sering Diajukan)

### Apa bedanya Harga Pokok Produksi dan Harga Pokok Penjualan?
Harga Pokok Produksi (COGM) adalah total biaya memproduksi barang jadi dalam satu periode — bahan baku, tenaga kerja langsung, dan overhead, disesuaikan dengan WIP. Harga Pokok Penjualan (COGS) adalah biaya barang yang benar-benar terjual, dihitung dari HPP produksi ditambah persediaan awal barang jadi dikurangi persediaan akhir. Singkatnya, HPP produksi berhenti di gudang, HPP penjualan masuk laporan laba rugi.

### Apa rumus Harga Pokok Produksi?
Rumus lengkapnya: HPP = Total Biaya Produksi + Persediaan Awal WIP − Persediaan Akhir WIP, dengan Total Biaya Produksi = Bahan Baku Terpakai + Biaya Tenaga Kerja Langsung + Biaya Overhead Pabrik. Bahan Baku Terpakai sendiri = Saldo Awal + Pembelian − Saldo Akhir. Rumus ini konsisten dengan standar akuntansi manajemen di Indonesia dan PSAK 14 (Persediaan).

### Apa saja komponen Harga Pokok Produksi?
Ada tiga: biaya bahan baku langsung (material yang fisik masuk produk), biaya tenaga kerja langsung (upah pekerja produksi), dan biaya overhead pabrik (biaya produksi tidak langsung seperti depresiasi mesin, listrik pabrik, dan gaji supervisor). BOP umumnya 20–40% dari total biaya produksi, bergantung skala dan otomasi. Biaya penjualan dan administrasi tidak termasuk komponen HPP.

### Bagaimana cara menghitung Biaya Overhead Pabrik (BOP)?
Jumlahkan semua biaya produksi tidak langsung dalam satu periode, lalu alokasikan ke produk memakai tarif yang ditentukan di muka (estimasi total BOP dibagi basis alokasi seperti jam mesin). Menurut PSAK 14, overhead tetap dialokasikan berdasarkan kapasitas produksi normal, bukan kapasitas aktual — sehingga overhead yang tidak terserap saat produksi rendah dibebankan langsung ke laba rugi, bukan masuk HPP.

### Apa itu persediaan barang dalam proses (WIP) dan bagaimana memasukkannya ke HPP?
WIP adalah barang yang sudah mulai diproduksi tetapi belum selesai di akhir periode. WIP awal dan WIP akhir masuk ke rumus: HPP = Total Biaya Produksi + WIP Awal − WIP Akhir. Jika WIP akhir lebih besar dari WIP awal, sebagian biaya produksi tertahan di barang setengah jadi dan tidak dihitung sebagai HPP periode berjalan.

### Bagaimana cara menghitung HPP per unit?
HPP per unit = Total Harga Pokok Produksi ÷ Jumlah Unit Selesai Diproduksi. Misalnya HPP Rp 1.480.000.000 dengan 10.000 unit selesai menghasilkan HPP per unit Rp 148.000. Angka ini menjadi lantai harga jual; di atasnya ditambahkan target margin serta biaya penjualan dan administrasi (SG&A) yang menurut PSAK 14 tidak boleh masuk HPP persediaan.

### Kapan perhitungan HPP manual di spreadsheet mulai tidak cukup?
Saat perusahaan punya banyak SKU dengan multi-level Bill of Materials, tarif overhead yang sering berubah, WIP lintas bulan yang perlu direkonsiliasi, dan kebutuhan jejak audit. Di titik ini, ERP seperti SAP S/4HANA Finance menghitung HPP otomatis lewat product costing: standard cost terbentuk dari struktur produk, WIP dikapitalisasi otomatis, dan setiap angka dapat ditelusuri ke dokumen sumber.

## Kesimpulan

Menghitung HPP dengan benar dimulai dari satu disiplin: memisahkan bahan baku terpakai, tenaga kerja langsung, dan overhead pabrik, lalu menyesuaikannya dengan WIP dan barang jadi mengikuti urutan rumus yang baku. Dengan template sederhana, sebagian besar perusahaan manufaktur sudah bisa mendapatkan angka HPP per unit yang andal sebagai dasar harga jual. Tantangannya muncul saat produk, lokasi, dan kompleksitas biaya bertambah — di situ perhitungan manual mulai rapuh dan rawan kesalahan. Sebagai SAP Platinum Partner melalui keanggotaan United VARs dan bagian dari Metrodata Group sejak 1998, Soltius mendampingi perusahaan manufaktur lewat [implementasi SAP S/4HANA](https://www.soltius.co.id/solutions-by-products/erp-sap-s-4hana-and-erp-large-enterprises) — menerapkan *product costing* di modul Finance-nya agar HPP terbentuk otomatis, dapat diaudit, dan siap untuk analisis margin.

Untuk mendiskusikan kesiapan menerapkan product costing otomatis di perusahaan Anda, kunjungi soltius.co.id.
