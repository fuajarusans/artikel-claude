---
title: "Apa Itu Buku Besar (General Ledger) dan Perannya dalam Akuntansi"
meta_title: "Buku Besar (General Ledger): Pengertian & Fungsi"
meta_description: "Buku besar (general ledger) menggolongkan transaksi dari jurnal ke tiap akun lalu menghitung saldonya. Pahami fungsi, bentuk, cara posting, dan perannya."
slug: "buku-besar-general-ledger"
language: "id"
primary_keyword: "buku besar"
secondary_keywords: ["general ledger adalah", "buku besar akuntansi", "fungsi buku besar", "bentuk buku besar", "cara posting jurnal ke buku besar", "buku besar pembantu", "chart of accounts", "SAP S/4HANA Finance"]
internal_links:
  - url: "https://www.soltius.co.id/id/blog/apa-itu-siklus-akuntansi-dan-manfaatnya"
    anchor: "siklus akuntansi"
  - url: "https://www.soltius.co.id/id/blog/sistem-sap-fico-dan-modulnya-yang-banyak-digunakan-perusahaan-besar"
    anchor: "modul keuangan SAP (FICO)"
external_citations:
  - url: "https://learning.sap.com/courses/outlining-cost-management-and-profitability-analysis/discussing-the-concept-of-the-universal-journal_f62cf151-5562-44f5-8ff6-df16fb232e94"
    context: "SAP Learning: Universal Journal (tabel ACDOCA) menyatukan Financial Accounting (FI) dan Controlling (CO) dalam satu tabel sehingga rekonsiliasi FI-CO tidak lagi diperlukan"
  - url: "https://accountingtools.com/articles/what-is-a-subsidiary-ledger.html"
    context: "AccountingTools: definisi buku besar pembantu (subsidiary ledger) dan aturan total buku besar pembantu sama dengan saldo akun kontrolnya di buku besar umum"
brief_id: "buku-besar-c01"
target_word_count: 1100
publish_month: "2026-10"
word_count: 1194
---

# Apa Itu Buku Besar (General Ledger) dan Perannya dalam Akuntansi

Staf keuangan yang rajin mencatat setiap transaksi di jurnal sering tersendat di pertanyaan sederhana: berapa saldo kas atau piutang hari ini? Jurnal menyusun transaksi urut tanggal, bukan per akun, sehingga saldonya tidak langsung terbaca. Buku besar menjawab kebutuhan itu. Artikel ini membahas bedanya dari jurnal, tiga bentuknya, cara posting, dan bagaimana ERP modern mengubahnya.

> **Ringkasnya:** buku besar (*general ledger*) adalah kumpulan seluruh akun perusahaan tempat transaksi yang sudah dicatat di jurnal digolongkan kembali per akun lalu dihitung saldonya. Buku besar merupakan tahap siklus akuntansi tepat setelah penjurnalan dan menjadi sumber data utama penyusunan neraca saldo serta laporan keuangan.

## Apa Bedanya Buku Besar dan Jurnal Umum?

Perbedaan intinya pada cara data disusun. Jurnal umum mencatat transaksi secara kronologis, urut tanggal, tepat saat transaksi terjadi. Buku besar mengambil catatan itu lalu menggolongkannya ulang per akun dan menghitung saldo tiap akun. Satu merekam urutan waktu; satu lagi meringkas posisi tiap pos.

Urutannya dalam [siklus akuntansi](https://www.soltius.co.id/id/blog/apa-itu-siklus-akuntansi-dan-manfaatnya) berjalan satu arah: transaksi dijurnal, nilainya diposting ke buku besar, lalu saldonya dirangkum menjadi neraca saldo, bukan sebaliknya.

Isi buku besar seluruhnya berasal dari jurnal, baik jurnal umum maupun jurnal khusus seperti jurnal penjualan dan pembelian. Kalau jurnalnya salah, buku besarnya ikut salah; ia menata ulang catatan, bukan memperbaikinya.

## Apa Saja Bentuk Buku Besar?

Buku besar lazim disusun dalam tiga bentuk: bentuk T, skontro, dan staffel. Ketiganya memuat informasi yang sama, yaitu tanggal, keterangan, referensi, serta nilai debit dan kredit; yang berbeda adalah tata letak dan cara saldo ditampilkan. Bentuk staffel sendiri punya varian 3 kolom dan 4 kolom.

| Bentuk | Susunan | Kolom saldo | Cocok untuk |
|---|---|---|---|
| **T** | Menyerupai huruf T: debit di kiri, kredit di kanan | Dihitung di akhir, tanpa lajur saldo berjalan | Analisis cepat, edukasi, telaah satu akun |
| **Skontro** | Dua kolom horizontal: sisi debit berhadapan kredit | Umumnya tanpa lajur saldo berjalan baku | Pencatatan rutin yang lebih padat dari bentuk T |
| **Staffel** | Menurun vertikal, satu baris per transaksi | 3 kolom = saldo tunggal; 4 kolom = saldo rangkap (debit dan kredit terpisah) | Perusahaan yang memantau saldo berjalan tiap transaksi |

Perbedaan paling praktis terletak di kolom saldo. Bentuk T menghitung saldo hanya di akhir, sedangkan staffel menampilkan saldo berjalan tiap transaksi, dan itulah alasan staffel paling banyak dipakai dalam pembukuan nyata. Satu catatan: sumber berbeda pendapat apakah skontro punya kolom saldo baku, jadi lajur saldo paling konsisten dirujuk ke staffel.

## Bagaimana Cara Posting dari Jurnal ke Buku Besar?

Posting adalah proses memindahkan nilai debit dan kredit dari jurnal ke akun buku besar yang sesuai, lalu menghitung saldonya. Pekerjaan ini dilakukan setelah seluruh transaksi dijurnal dan sebelum neraca saldo disusun. Prosesnya mengikuti bagan akun agar setiap nilai masuk ke akun yang tepat.

Secara manual, posting menempuh enam langkah:

1. **Siapkan akun buku besar** sesuai bagan akun (*chart of accounts*), satu akun satu halaman.
2. **Salin tanggal** transaksi dari jurnal ke akun yang dituju.
3. **Isi keterangan**, umumnya nama akun lawan atau ringkasan singkat transaksi.
4. **Catat referensi**, misalnya JU 01 untuk jurnal umum halaman 1, dan tuliskan balik nomor akun di kolom referensi jurnal sebagai tautan silang (*cross-reference*).
5. **Salin nilai** ke sisi debit atau kredit, sama persis dengan posisinya di jurnal.
6. **Hitung saldo**, yaitu selisih total debit dikurangi total kredit.

Enam langkah ini memadai selama transaksi masih sedikit. Begitu volume membengkak atau entitasnya banyak, posting manual mulai lambat dan rawan salah akun, dan di titik itulah perusahaan beralih ke sistem akuntansi atau ERP. Di lapangan, saldo buku besar yang tak cocok dengan buku besar pembantu umumnya gejala posting tersebar di banyak spreadsheet, bukan sekadar salah ketik.

## Bagaimana Buku Besar Bekerja di ERP Modern?

Di ERP, buku besar menjadi modul yang terisi otomatis. Begitu sebuah transaksi di-input, posting terjadi *real-time* dan saldo setiap akun langsung mutakhir tanpa menunggu rekap akhir periode. Fokus tim keuangan bergeser dari memindahkan angka menjadi menafsirkan hasil dan menjaga konsistensi klasifikasi akun.

Perubahan paling mendasar ada pada struktur datanya. Di pembukuan manual, buku besar umum dan buku besar pembantu tersimpan sebagai banyak buku terpisah yang harus direkonsiliasi tiap akhir periode. Di SAP S/4HANA Finance, keduanya melebur ke dalam Universal Journal, yaitu satu tabel bernama ACDOCA yang menampung akuntansi keuangan (*Financial Accounting*/FI) sekaligus pengendalian biaya (*Controlling*/CO). Di sinilah konsep buku besar dan [modul keuangan SAP (FICO)](https://www.soltius.co.id/id/blog/sistem-sap-fico-dan-modulnya-yang-banyak-digunakan-perusahaan-besar) bertemu dalam satu sumber data finansial.

Satu tabel ini memuat sekitar 350+ field, meski jumlahnya bervariasi antar-rilis, jadi perlakukan angka itu sebagai kisaran, bukan spesifikasi pasti. Universal Journal tersedia sejak S/4HANA Finance versi 1503. Karena FI dan CO berbagi baris data yang sama, menurut [SAP Learning](https://learning.sap.com/courses/outlining-cost-management-and-profitability-analysis/discussing-the-concept-of-the-universal-journal_f62cf151-5562-44f5-8ff6-df16fb232e94) berlaku prinsip "no reconciliation between financial accounting and controlling is necessary".

| Aspek | Manual / spreadsheet | SAP S/4HANA Finance (ACDOCA) |
|---|---|---|
| Waktu posting | Direkap di akhir periode | Real-time saat transaksi di-input |
| Struktur data | Banyak buku terpisah (umum + pembantu) | Satu tabel (±350+ field), FI dan CO menyatu |
| Rekonsiliasi FI-CO | Rutin tiap akhir periode | Tidak diperlukan |
| Risiko utama | Saldo tak cocok, salah akun | Konsistensi dijaga sistem |

Perlu kejelasan: rekonsiliasi antar-buku yang sebagian besar hilang bukan berarti pekerjaan tutup buku lenyap. Tim keuangan tetap harus men-substansiasi saldo, dan migrasi data dari SAP ECC ke S/4HANA tetap menuntut verifikasi. Yang hilang adalah tie-out mekanis antar-ledger, bukan tanggung jawab atas angkanya.

## FAQ (Pertanyaan yang Sering Diajukan)

### Apa bedanya buku besar dan buku besar pembantu?

Buku besar umum memuat akun ringkasan seperti Piutang Usaha, sedangkan buku besar pembantu (*subsidiary ledger*) merincinya per entitas, misalnya piutang tiap pelanggan. Aturannya tegas: total seluruh buku besar pembantu harus sama dengan saldo akun kontrolnya ([AccountingTools](https://accountingtools.com/articles/what-is-a-subsidiary-ledger.html)). Paling lazim untuk piutang, utang, dan persediaan.

### Apa itu posting dalam akuntansi?

Posting menempatkan setiap nilai debit dan kredit dari jurnal ke akun buku besar yang tepat. Posisinya berada di antara penjurnalan dan penyusunan neraca saldo. Kolom referensi, misalnya JU 01 untuk jurnal umum halaman 1, membuat setiap angka di buku besar bisa ditelusuri balik ke jurnal asalnya.

### Apa hubungan buku besar dengan neraca saldo?

Saldo akhir setiap akun di buku besar dikumpulkan menjadi neraca saldo (*trial balance*) untuk menguji apakah total debit sama dengan total kredit sebelum laporan keuangan disusun. Buku besar adalah sumber datanya, neraca saldo ringkasan verifikasinya. Keduanya tahap berurutan dalam siklus akuntansi.

### Apa itu chart of accounts (bagan akun)?

Bagan akun (*chart of accounts*) adalah daftar terstruktur seluruh akun berikut kodenya yang dipakai perusahaan, umumnya dikelompokkan ke dalam 5 kategori: aset, liabilitas, ekuitas, pendapatan, dan beban. Bagan akun menjadi kerangka buku besar, sebab tiap akun di dalamnya memiliki satu halaman buku besar tersendiri.

### Apakah buku besar masih relevan di era software akuntansi?

Masih; konsepnya tidak hilang, hanya menjadi otomatis. Di ERP seperti SAP S/4HANA Finance, seluruh entri masuk ke satu tabel jurnal universal, sehingga buku besar dan buku besar pembantu tidak lagi dikelola sebagai buku-buku terpisah yang direkonsiliasi manual tiap akhir periode. Yang berubah pengelolaannya, bukan prinsipnya.

## Kesimpulan

Kembali ke pertanyaan di awal, berapa saldo kas hari ini. Buku besar menjawabnya dengan menggolongkan transaksi per akun, dan dari situ neraca saldo serta laporan keuangan tersusun. Begitu volumenya besar, pekerjaan ini menuntut sistem, bukan lagi spreadsheet. Sebagai SAP Platinum Partner melalui United VARs dan bagian dari Metrodata Group sejak 1998, Soltius mendampingi perusahaan memindahkan pembukuan dari proses manual ke SAP S/4HANA Finance, dari implementasi hingga dukungan pasca go-live.

Untuk menelaah kesiapan memindahkan buku besar perusahaan Anda ke SAP S/4HANA Finance, kunjungi soltius.co.id.
