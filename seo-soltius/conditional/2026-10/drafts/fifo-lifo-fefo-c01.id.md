---
title: "FIFO, LIFO, dan FEFO: Perbedaan Metode Manajemen Stok"
meta_title: "FIFO, LIFO, FEFO: Perbedaan Metode Manajemen Stok"
meta_description: "FIFO, LIFO, dan FEFO adalah metode rotasi stok penentu barang mana keluar dulu. Pahami perbedaannya, kapan dipakai, dan kenapa LIFO dilarang di akuntansi."
slug: "fifo-lifo-fefo-perbedaan-metode-manajemen-stok"
language: "id"
primary_keyword: "fifo lifo fefo"
secondary_keywords: ["perbedaan fifo dan lifo", "first in first out", "last in first out", "first expired first out", "metode penilaian persediaan", "metode rotasi stok", "rata-rata tertimbang", "harga pokok penjualan", "PSAK 14", "SAP Extended Warehouse Management (EWM)"]
internal_links:
  - url: "https://www.soltius.co.id/id/blog/konsep-warehouse-management-system-yang-wajib-anda-tahu"
    anchor: "sistem manajemen gudang (WMS)"
  - url: "https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud"
    anchor: "migrasi ERP ke cloud"
external_citations:
  - url: "https://learning.sap.com/courses/basic-customizing-in-sap-s-4hana-ewm/applying-the-stock-removal-strategies"
    context: "SAP Learning: strategi stock removal SAP EWM untuk pengeluaran barang mencakup FIFO, stringent FIFO, LIFO, dan shelf life expiration date (yang mewujudkan logika FEFO)"
  - url: "https://www.iasplus.com/standard/ias02.htm"
    context: "Deloitte IASPlus, IAS 2 Inventories: LIFO tidak diperbolehkan; untuk item yang dapat dipertukarkan hanya FIFO dan rata-rata tertimbang yang diizinkan"
brief_id: "fifo-lifo-fefo-c01"
target_word_count: 1100
publish_month: "2026-10"
word_count: 1142
---

# FIFO, LIFO, dan FEFO: Perbedaan Metode Manajemen Stok

Sebuah batch susu formula yang hampir kedaluwarsa tertinggal di rak sementara stok yang lebih baru justru terjual lebih dulu, lalu dua kardus harus ditarik karena lewat tanggal. Kerugian seperti ini sering lahir dari satu kekeliruan: menyamakan FIFO, LIFO, dan FEFO. Ketiganya tampak mirip, padahal dasar kerjanya berbeda, dan perbedaan FIFO dan LIFO bahkan punya konsekuensi di pembukuan. Tulisan ini memetakan perbedaannya, kapan tiap metode dipakai, dan bagaimana sistem menegakkannya.

> **Ringkasnya:** FIFO, LIFO, dan FEFO adalah tiga metode rotasi stok yang menentukan barang mana dikeluarkan lebih dulu dari gudang. FIFO mengeluarkan stok yang paling lama masuk, LIFO mengeluarkan stok yang paling baru masuk, dan FEFO mengeluarkan stok yang paling dekat tanggal kedaluwarsanya — tanpa memandang urutan penerimaan.

## Apa Perbedaan FIFO, LIFO, dan FEFO?

Pembeda intinya terletak pada dasar urutan. FIFO dan LIFO sama-sama membaca tanggal masuk barang, hanya arahnya berlawanan; FEFO membaca tanggal kedaluwarsa. Karena itu FEFO bukan sekadar varian FIFO: barang yang masuk lebih dulu belum tentu kedaluwarsa lebih dulu, sehingga FIFO murni bisa meloloskan stok yang justru lebih rawan basi.

| Metode | Kepanjangan | Dasar urutan | Yang keluar lebih dulu | Cocok untuk |
|---|---|---|---|---|
| **FIFO** | First In, First Out | Tanggal masuk (terlama) | Stok paling lama masuk | Barang umum ber-*shelf life* panjang; mencegah stok usang |
| **LIFO** | Last In, First Out | Tanggal masuk (terbaru) | Stok paling baru masuk | Material bertumpuk yang tidak mudah rusak (bahan bangunan, rak *drive-in*); rotasi fisik saja |
| **FEFO** | First Expired, First Out | Tanggal kedaluwarsa (terdekat) | Stok paling dekat kedaluwarsa | Farmasi, makanan dan minuman, kosmetik, bahan kimia |

Perbedaan yang paling sering terlewat ada di kolom dasar urutan. FIFO menilai kapan barang diterima, FEFO menilai kapan barang kedaluwarsa. Pada produk bertanggal, satu kedatangan yang lebih baru bisa membawa tanggal kedaluwarsa yang lebih awal, dan di situlah FIFO murni mulai berisiko.

## Kapan Sebaiknya Memakai FIFO, LIFO, atau FEFO?

Pilihannya ditentukan karakteristik produk, bukan selera. Produk yang punya tanggal kedaluwarsa menuntut FEFO. Barang tahan lama yang tersimpan bertumpuk atau di rak *drive-in* cocok dengan pola LIFO secara fisik. Mayoritas barang umum tanpa tanggal kritis aman memakai FIFO untuk menekan risiko stok mengendap dan usang.

Tiga aturan sederhana membantu memilih:

- **FEFO untuk barang bertanggal.** Ambil contoh apotek yang menerima dua batch obat. Batch A masuk Januari dan kedaluwarsa Desember; Batch B masuk Februari dan kedaluwarsa Juni. FIFO akan mengeluarkan Batch A lebih dulu karena masuk lebih awal, padahal Batch B justru lebih dekat kedaluwarsa. FEFO mengeluarkan Batch B lebih dulu dan menyelamatkan stok dari penghapusan. Angka ini sekadar ilustrasi, bukan data pelanggan.
- **FIFO untuk barang umum.** Produk ber-*shelf life* panjang yang tidak kritis tanggalnya paling praktis dirotasi dengan FIFO; tujuannya menekan stok yang mengendap hingga usang.
- **LIFO hanya sebagai pola fisik.** LIFO relevan untuk material bertumpuk seperti bahan bangunan atau rak *drive-in*, tempat barang terakhir masuk berada paling depan. Untuk pembukuan, LIFO adalah soal lain yang dibahas di bagian berikutnya.

Tidak ada metode yang unggul untuk semua kasus. FEFO paling aman bagi barang kedaluwarsa, tetapi menuntut disiplin mencatat tanggal dan nomor batch yang sering belum ada di gudang manual.

## FIFO dan LIFO dalam Akuntansi: Kenapa LIFO Dilarang di Indonesia?

Di akuntansi, FIFO dan LIFO bukan soal barang fisik melainkan asumsi arus biaya: biaya pembelian mana yang dibukukan sebagai harga pokok penjualan (HPP). Pilihan ini menggeser laba dan beban pajak. Di Indonesia, LIFO tidak lagi diperbolehkan untuk penilaian persediaan, sementara di gudang ia masih sah sebagai pola rotasi fisik.

Perubahannya sudah lama berlaku. Menurut PSAK 14 revisi 2008 yang efektif sejak 1 Januari 2009, LIFO tidak lagi diperkenankan; metode yang tersisa hanya FIFO dan rata-rata tertimbang (*weighted average*), selaras dengan standar internasional [IAS 2](https://www.iasplus.com/standard/ias02.htm). Sejak 1 Januari 2024, PSAK 14 dipetakan ulang dengan nomor PSAK 202; menurut dokumentasi IAI ini perubahan penomoran, bukan substansi, dan status penomoran terbaru sebaiknya dikonfirmasi langsung ke naskah resmi. Dari sisi pajak, Pasal 10 ayat (6) UU No. 36 Tahun 2008 tentang PPh membatasi penilaian persediaan pada rata-rata atau mendahulukan yang diperoleh pertama, yaitu FIFO. Alasan di balik larangan itu: LIFO dinilai mendistorsi laporan keuangan karena membuat laba tampak lebih kecil saat inflasi.

## Bagaimana Sistem Gudang Menegakkan FIFO, LIFO, dan FEFO Otomatis?

Rotasi manual bergantung pada ingatan dan kedisiplinan operator. Sistem manajemen gudang menegakkan aturan ini otomatis pada tahap pengambilan barang (*picking*) lewat konfigurasi strategi pengeluaran stok (*stock removal strategy*), sehingga urutan pengambilan ditentukan data, bukan tebakan. Hasilnya lebih konsisten, terutama ketika jumlah item dan batch membengkak.

Untuk konteks gudang yang lebih luas, rotasi adalah salah satu aturan yang dijalankan oleh [sistem manajemen gudang (WMS)](https://www.soltius.co.id/id/blog/konsep-warehouse-management-system-yang-wajib-anda-tahu). Di lanskap SAP, solusi gudangnya adalah SAP Extended Warehouse Management (EWM). Menurut materi [SAP Learning](https://learning.sap.com/courses/basic-customizing-in-sap-s-4hana-ewm/applying-the-stock-removal-strategies), strategi *stock removal* untuk pengeluaran barang mencakup FIFO, stringent FIFO, LIFO, dan shelf life expiration date, yaitu strategi yang mewujudkan logika FEFO; SAP sendiri tidak memakai kata "FEFO" secara harfiah. Karena SAP EWM tertanam di SAP S/4HANA, modernisasi gudang biasanya menempel pada agenda [migrasi ERP ke cloud](https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud).

Satu catatan penting: otomasi tidak memperbaiki data induk. Tanpa tanggal kedaluwarsa dan nomor batch yang tercatat rapi saat penerimaan, FEFO tidak bisa dijalankan sistem secanggih apa pun.

## FAQ (Pertanyaan yang Sering Diajukan)

### Apa bedanya FIFO dan FEFO?

Keduanya memakai dasar urutan yang berbeda. FIFO membaca tanggal masuk, FEFO membaca tanggal kedaluwarsa. Akibatnya, pada produk bertanggal, batch yang datang lebih dulu belum tentu kedaluwarsa lebih dulu, sehingga FEFO lebih aman mencegah barang basi. Itu sebabnya farmasi dan makanan memilih FEFO, bukan FIFO murni.

### Apakah metode LIFO masih boleh dipakai di Indonesia?

Tidak untuk penilaian persediaan. PSAK 14 revisi 2008 yang berlaku sejak 1 Januari 2009, kini bernomor PSAK 202, hanya mengizinkan FIFO dan rata-rata tertimbang, selaras IAS 2. Pasal 10 ayat (6) UU No. 36 Tahun 2008 juga membatasi penilaian pajak pada rata-rata atau FIFO. LIFO hanya sah sebagai pola rotasi fisik di gudang.

### Industri apa yang paling cocok memakai FEFO?

Industri dengan produk bertanggal kedaluwarsa: farmasi, makanan dan minuman, kosmetik, serta bahan kimia. Rumah sakit juga menerapkannya untuk mencegah obat mahal terbuang. Syaratnya satu, yaitu tanggal kedaluwarsa dan nomor batch tercatat untuk setiap item; tanpa data itu, FEFO tidak bisa ditegakkan sistem.

### Apa itu metode rata-rata (weighted average) dalam persediaan?

Metode penilaian yang menghitung biaya persediaan dari rata-rata tertimbang seluruh unit tersedia, bukan dari urutan masuk. Bersama FIFO, inilah dua metode yang diizinkan PSAK dan Pasal 10 ayat (6) UU PPh untuk pelaporan keuangan dan pajak di Indonesia sejak LIFO dihapus pada 2009.

## Kesimpulan

Ketiga metode menjawab pertanyaan yang sama dengan cara berbeda: barang mana yang keluar lebih dulu. Memilih di antara FIFO, LIFO, dan FEFO adalah soal karakteristik produk sekaligus kepatuhan akuntansi, dan menjalankannya secara konsisten di gudang besar menuntut sistem, bukan ingatan. Sebagai SAP Platinum Partner melalui United VARs dan bagian dari Metrodata Group sejak 1998, Soltius mengimplementasikan dan mendampingi penerapan SAP Extended Warehouse Management, termasuk mengonfigurasi aturan rotasi stok, dari penilaian kebutuhan hingga dukungan pasca go-live.

Untuk menelaah penerapan aturan rotasi stok di SAP Extended Warehouse Management bagi gudang perusahaan Anda, kunjungi soltius.co.id.
