---
title: "Account Payable & Account Receivable: Pengertian dan Cara Mengelolanya"
meta_title: "Account Payable & Account Receivable: Beda dan Cara Kelola"
meta_description: "Account payable adalah utang usaha ke pemasok, account receivable adalah piutang dari pelanggan. Pahami perbedaannya, cara mengelola, dan otomasinya di ERP."
slug: "account-payable-account-receivable-perbedaan-cara-kelola"
language: "id"
primary_keyword: "account payable adalah"
secondary_keywords: ["perbedaan ap dan ar", "utang usaha", "piutang usaha", "liabilitas jangka pendek", "aset lancar", "three-way match", "purchase order", "termin pembayaran", "umur piutang", "Procure-to-Pay", "Order-to-Cash", "buku besar pembantu", "SAP S/4HANA Finance"]
internal_links:
  - url: "https://www.soltius.co.id/id/blog/sistem-sap-fico-dan-modulnya-yang-banyak-digunakan-perusahaan-besar"
    anchor: "modul keuangan SAP (FICO)"
  - url: "https://www.soltius.co.id/id/blog/Manajemen-Keuangan-dalam-Bisnis-Demi-Kemajuan-Perusahaan"
    anchor: "manajemen keuangan"
external_citations:
  - url: "https://learning.sap.com/courses/explaining-payables-invoice-processing/exploring-the-procure-to-pay-process_d7a4061e-3d6a-44ff-bab5-e548bc258dfc"
    context: "SAP Learning: three-step verification = membandingkan purchase order, faktur, dan bukti penerimaan barang sebelum faktur disetujui; faktur dibayar lewat payment program bila tidak ada selisih dan tidak ada payment block"
  - url: "https://learning.sap.com/courses/exploring-end-to-end-business-processes-in-sap-business-suite/managing-accounts-receivable_af769af4-e265-4bd5-8a46-7bda1ba03b38"
    context: "SAP Learning: Accounts Receivable di Financial Accounting (FI) mencatat dan mengelola data akuntansi setiap pelanggan; akun rekonsiliasi diperbarui otomatis; data master menyimpan payment terms dan dunning terms; open item ditandai cleared"
brief_id: "ap-ar-c01"
target_word_count: 900
publish_month: "2026-08"
word_count: 995
---

# Account Payable & Account Receivable: Pengertian dan Cara Mengelolanya

Faktur pemasok disetujui padahal barangnya kurang satu palet. Piutang lewat 90 hari baru ketahuan saat direktur bertanya mengapa kas seret padahal penjualan naik. Keduanya berasal dari pos yang sama: account payable dan account receivable, inti operasional [manajemen keuangan](https://www.soltius.co.id/id/blog/Manajemen-Keuangan-dalam-Bisnis-Demi-Kemajuan-Perusahaan). Artikel ini membedah perbedaan keduanya, lalu cara mengelola tiap sisi dengan kontrol yang bisa ditegakkan.

> **Ringkasnya:** account payable adalah kewajiban perusahaan kepada pemasok atas barang atau jasa yang sudah diterima tetapi belum dibayar. Dalam Bahasa Indonesia disebut utang usaha, dan tercatat sebagai liabilitas jangka pendek. Account receivable (piutang usaha) adalah kebalikannya: hak tagih atas penjualan kredit yang belum dibayar pelanggan, tercatat sebagai aset lancar.

## Apa Bedanya Account Payable dan Account Receivable?

Keduanya bukan dua konsep terpisah, melainkan dua sisi dari transaksi yang sama. Utang usaha Anda kepada pemasok tercatat sebagai piutang usaha di pembukuan pemasok itu, atas faktur yang sama. Yang membedakan bukan jenis transaksinya, melainkan posisi Anda di dalamnya: pembeli atau penjual. Dari situ tujuh perbedaan turunannya masuk akal.

| Dimensi | Account Payable (Utang Usaha) | Account Receivable (Piutang Usaha) |
|---|---|---|
| Posisi di neraca | Liabilitas jangka pendek | Aset lancar |
| Arah kas | Keluar | Masuk |
| Lawan transaksi | Pemasok/vendor | Pelanggan |
| Dokumen pemicu | Faktur yang **diterima** dari pemasok | Faktur yang **diterbitkan** ke pelanggan |
| Proses induk | *Procure-to-Pay* | *Order-to-Cash* |
| Ukuran umum | DPO (*Days Payable Outstanding*) | DSO (*Days Sales Outstanding*) |
| Risiko utama | Bayar ganda atau bayar barang yang tak pernah datang | Piutang macet |

Karena posisinya berlawanan, kontrol keduanya tidak bisa sama: satu dikendalikan sebelum uang keluar, satu lagi setelah faktur terbit.

## Cara Mengelola Account Payable: Kontrol Sebelum Uang Keluar

Mengelola account payable bukan soal rajin mencatat, melainkan menolak membayar sebelum tiga dokumen cocok. Begitu kas keluar, kesalahan hanya bisa diperbaiki lewat penagihan balik ke pemasok, jauh lebih mahal daripada menahan faktur lima menit di meja verifikasi. Kontrolnya bekerja sebelum pembayaran, bukan sesudahnya.

Materi [SAP Learning](https://learning.sap.com/courses/explaining-payables-invoice-processing/exploring-the-procure-to-pay-process_d7a4061e-3d6a-44ff-bab5-e548bc258dfc) mendefinisikan pencocokan tiga dokumen (*three-step verification*, di luar SAP lazim disebut *three-way match*) sebagai proses membandingkan ketiga dokumen berikut sebelum faktur disetujui.

1. **Purchase order (PO)**: apa yang dipesan.
2. **Bukti penerimaan barang** (*goods receipt*): apa yang benar-benar datang.
3. **Faktur pemasok**: apa yang ditagih.

Cocok pada item, kuantitas, dan harga, faktur layak dibayar. Tidak cocok, faktur ditahan untuk peninjauan, bukan diloloskan lalu diperbaiki nanti: pembayaran lewat *payment program* baru berjalan setelah dipastikan tidak ada selisih dan tidak ada blokir pembayaran (*payment block*). Untuk jasa tanpa penerimaan barang, pencocokan umumnya cukup dua dokumen.

Notasi termin seperti **2/10 net 30** dibaca begini: diskon 2% bila dibayar dalam 10 hari, jatuh tempo penuh 30 hari. Membayar lebih cepat bukan kebajikan, melainkan keputusan kas: yang dikejar adalah membayar tepat pada tanggal yang diputuskan, bukan secepatnya.

Menahan pembayaran memang menambah saldo kas hari ini, tetapi biayanya berpindah, bukan hilang: diskon hangus, dan pemasok yang berulang kali dibayar terlambat cenderung memperketat termin berikutnya.

## Cara Mengelola Account Receivable: Umur Piutang Menentukan Tindakan

Di sisi piutang, kontrolnya justru bekerja setelah faktur terbit, karena uangnya sudah ada di tangan orang lain. Maka ukuran yang dipakai bukan total piutang, melainkan umurnya. Total Rp1 miliar yang seluruhnya berumur 20 hari itu sehat; jumlah yang sama dengan separuhnya di atas 90 hari tidak.

Pengelompokan umur piutang (*aging*) umumnya berjenjang 30 hari, dan tiap jenjang menuntut respons berbeda:

| Umur Piutang | Status | Tindakan yang Wajar |
|---|---|---|
| 0–30 hari | Belum jatuh tempo / baru lewat | Pengingat otomatis, tanpa eskalasi |
| 31–60 hari | Terlambat | Kontak personal ke bagian pembayaran pelanggan |
| 61–90 hari | Bermasalah | Eskalasi ke manajemen; tahan pengiriman/order baru |
| >90 hari | Berisiko macet | Tinjau sebagai potensi tak tertagih; pertimbangkan jalur formal |

Rentangnya lazim dipakai, bukan ketentuan baku, dan tiap perusahaan boleh menyetelnya. Fungsinya yang tidak bergeser: pengelompokan ini pemicu tindakan, bukan pekerjaan pelaporan. Piutang yang berpindah ke jenjang berikutnya adalah alarm, bukan sekadar angka yang bergeser.

Satu pencegahan di hulu menghemat seluruh urutan itu: batas kredit dan termin disepakati sebelum order diterima, bukan dinegosiasikan saat menagih.

## Apa yang Berubah Ketika AP dan AR Ditangani Sistem?

Di ERP (*Enterprise Resource Planning*), account payable dan account receivable bukan daftar yang direkap lalu dicocokkan ke buku besar. Keduanya buku besar pembantu (*sub-ledger*) yang memperbarui buku besar pada saat dokumennya diposting. Pertanyaan "berapa utang kita ke pemasok X" dan "apakah angkanya sudah cocok dengan buku besar" berhenti menjadi dua pertanyaan berbeda.

Keduanya sub-modul standar di [modul keuangan SAP (FICO)](https://www.soltius.co.id/id/blog/sistem-sap-fico-dan-modulnya-yang-banyak-digunakan-perusahaan-besar). Menurut [SAP Learning](https://learning.sap.com/courses/exploring-end-to-end-business-processes-in-sap-business-suite/managing-accounts-receivable_af769af4-e265-4bd5-8a46-7bda1ba03b38), Accounts Receivable di Financial Accounting (FI) mencatat dan mengelola data akuntansi setiap pelanggan, dan akun rekonsiliasi (*reconciliation account*) yang ditetapkan diperbarui otomatis. Data master pelanggan menyimpan termin pembayaran (*payment terms*) dan termin penagihan (*dunning terms*), sehingga penagihan mengikuti aturan yang disepakati, bukan ingatan staf.

## FAQ (Pertanyaan yang Sering Diajukan)

### Apa tugas dan tanggung jawab staff account payable?

Inti pekerjaannya bukan mengetik, melainkan menahan pembayaran yang belum layak dibayar. Staf account payable memverifikasi faktur pemasok terhadap tiga dokumen (purchase order, bukti penerimaan barang, dan faktur), menjadwalkan pembayaran sesuai termin yang disepakati, lalu merekonsiliasi saldo pemasok. Faktur yang selisih ditahan untuk peninjauan.

### Apakah account payable termasuk utang atau aset?

Utang. Account payable adalah liabilitas jangka pendek karena diselesaikan dalam siklus operasi normal perusahaan, sedangkan account receivable adalah aset lancar yang umumnya direalisasi dalam dua belas bulan setelah periode pelaporan. Keduanya sama-sama pos neraca, bukan pos laporan laba rugi: yang masuk ke sana adalah pembelian dan penjualannya, bukan saldo utang-piutangnya.

### Apa bedanya account payable dan utang bank?

Account payable timbul dari pembelian barang atau jasa operasional secara kredit, tanpa perjanjian pinjaman formal, dan umumnya tidak berbunga sepanjang dibayar dalam termin yang disepakati (misalnya 30 hari). Utang bank lahir dari perjanjian kredit, berbunga, dan berjangka waktu tetap. Keduanya liabilitas, tetapi hanya account payable yang mengikuti ritme operasi harian.

## Kesimpulan

Account payable dan account receivable adalah dua sisi transaksi yang sama, dan justru karena itu keduanya tidak boleh dikelola dengan cara yang sama: satu ditahan sebelum kas keluar, satu dikejar menurut umurnya. Soltius, berpengalaman sejak 1998 dan bagian dari Metrodata Group, mengimplementasikan dan mendampingi SAP S/4HANA Finance, termasuk menata proses utang-piutang. Titik awalnya biasanya satu penilaian atas proses yang berjalan sekarang.

Untuk menjajaki penataan proses utang-piutang di atas SAP S/4HANA Finance bagi perusahaan Anda, kunjungi soltius.co.id.
