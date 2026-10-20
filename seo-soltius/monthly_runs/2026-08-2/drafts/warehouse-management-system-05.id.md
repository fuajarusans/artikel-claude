---
title: "Integrasi WMS dan TMS: Menyambung Gudang ke Transportasi demi OTIF"
meta_title: "Warehouse Management System & TMS: Integrasi OTIF"
meta_description: "Integrasi warehouse management system (WMS) dan TMS menutup celah gudang-transportasi pemicu kegagalan OTIF. Pahami titik hand-off, SAP EWM-TM, dan clean core."
slug: "warehouse-management-system-integrasi-tms-otif"
language: "id"
primary_keyword: "warehouse management system"
secondary_keywords:
  - "transportation management system (TMS)"
  - "integrasi WMS dan TMS"
  - "OTIF (On-Time In-Full)"
  - "Transportation Unit"
  - "load building"
  - "carrier selection"
  - "SAP EWM"
  - "SAP TM"
  - "clean core"
  - "freight cost"
internal_links:
  - url: "https://www.soltius.co.id/id/blog/konsep-warehouse-management-system-yang-wajib-anda-tahu"
    anchor: "warehouse management system"
  - url: "https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud"
    anchor: "migrasi ERP ke cloud"
  - url: "https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide"
    anchor: "SAP Clean Core"
external_citations:
  - url: "https://help.sap.com/docs/SAP_EXTENDED_WAREHOUSE_MANAGEMENT"
    context: "Definisi Transportation Unit, TU dibuat dari freight order SAP TM, early updates EWM ke TM, dan Shipping Cockpit"
  - url: "https://news.sap.com/2025/08/extend-sap-s4hana-cloud-right-way-clean-clear/"
    context: "Definisi clean core, extension side-by-side di SAP BTP vs on-stack ABAP Cloud, dan model kematangan Level A-D"
brief_id: "warehouse-management-system-05"
target_word_count: 1650
publish_month: "2026-08-2"
word_count: 1850
---

# Integrasi WMS dan TMS: Menyambung Gudang ke Transportasi demi OTIF

Order sudah dipetik tepat waktu, dikemas rapi, dan menunggu di dock. Namun truk datang terlambat, *carrier* yang dijadwalkan keliru, dan pelanggan tetap menerima barang lewat dari janji. Kegagalan seperti ini jarang lahir di dalam gudang; ia lahir di celah antara gudang dan transportasi. Ketika sistem gudang atau [warehouse management system](https://www.soltius.co.id/id/blog/konsep-warehouse-management-system-yang-wajib-anda-tahu) (WMS) berjalan sendiri dan sistem transportasi berjalan sendiri, *hand-off* antar keduanya menjadi manual, rapuh, dan tidak terlihat. Artikel ini membahas cara menyambung keduanya lewat integrasi WMS-TMS agar pesanan benar-benar sampai tepat waktu dan lengkap, sekaligus bagaimana ekosistem SAP menautkannya lewat Transportation Unit tanpa merusak inti sistem.

> **Ringkas:** *Transportation management system* (TMS) adalah sistem yang merencanakan, mengeksekusi, dan memantau pergerakan barang ke luar gudang: pemilihan rute dan pengangkut (*carrier*), konsolidasi muatan, biaya angkut, hingga eksekusi pengiriman. Berbeda dari WMS yang mengurus operasi di dalam gudang, TMS mengurus perjalanan barang setelahnya; keduanya bertemu di titik pemuatan demi OTIF (*On-Time In-Full*).

Kita akan mulai dari batas peran WMS dan TMS, lalu masuk ke titik *hand-off* yang sebenarnya, dampaknya ke OTIF dan biaya angkut, dan jebakan integrasi yang jarang dibahas vendor.

## Apa Itu TMS dan Apa Bedanya dengan WMS?

TMS (*Transportation Management System*) mengelola pergerakan barang antar-lokasi: perencanaan rute, pemilihan *carrier*, konsolidasi muatan, biaya angkut, dan eksekusi pengiriman. WMS (*Warehouse Management System*) mengelola operasi di dalam gudang: penerimaan, *put-away* (penyimpanan ke lokasi rak), *picking*, dan *packing*. Keduanya bersinggungan di titik pemuatan, tempat gudang menyerahkan barang siap muat kepada rencana transportasi.

Cara paling mudah membedakannya: WMS mengurus barang selama masih di dalam empat dinding gudang, TMS mengurus barang begitu ia keluar dari *dock*. WMS memastikan produk yang benar diambil dari rak yang benar dalam jumlah yang benar. TMS memastikan produk itu naik ke kendaraan yang benar, lewat *carrier* yang tepat, dengan rute dan biaya yang masuk akal.

Masalahnya, OTIF, metrik yang paling dipedulikan pelanggan, tidak hidup di salah satu sistem. Ia hidup di jahitan antara keduanya. Gudang boleh 100% akurat, tetapi jika informasi *carrier* tidak sampai ke tim gudang sebelum pemuatan, atau konfirmasi kesiapan barang tidak sampai ke perencana transportasi, celah itu langsung berubah menjadi keterlambatan. Di ekosistem SAP, peran WMS dijalankan SAP Extended Warehouse Management (EWM) dan peran TMS oleh SAP Transportation Management (TM).

## Siapa Mengerjakan Apa: Pembagian Peran WMS vs TMS

Pembagian perannya menjadi jelas begitu dipetakan berdampingan: WMS bertanggung jawab sampai barang siap di *dock*, dan TMS mengambil alih dari perencanaan muatan hingga pengiriman tereksekusi. Objek datanya pun berbeda. WMS bekerja dengan *handling unit* dan *warehouse task*, sedangkan TMS bekerja dengan *freight order* dan, di SAP, dengan Transportation Unit.

| Aspek | WMS (*Warehouse Management System*) | TMS (*Transportation Management System*) |
|---|---|---|
| Domain | Di dalam gudang | Pergerakan barang antar-lokasi |
| Fungsi inti | *Receiving*, *put-away*, penyimpanan, *picking*, *packing* | Perencanaan rute, *carrier selection*, *load building*, biaya angkut, eksekusi pengiriman |
| Objek data khas | *Handling unit*, stok, *warehouse task* | *Freight order/unit*, Transportation Unit (di SAP) |
| Output | Barang siap muat di *dock* | Muatan terjadwal, *carrier* terpilih, pengiriman tereksekusi |
| Metrik utama | Akurasi stok, *throughput* *picking* | OTIF, biaya angkut, ketepatan waktu kirim |
| Padanan SAP | SAP EWM | SAP TM (*embedded* di S/4HANA atau *standalone*) |

Alurnya, secara ringkas, berjalan begini: order masuk, WMS menjalankan *picking* dan menyiapkan barang, TMS menyusun muatan (*load building*) dan memilih *carrier*, lalu pengiriman dieksekusi. Selama tiap serah-terima antar tahap ini mulus, OTIF terjaga. Begitu satu serah-terima tersendat, seluruh rantai ikut tersendat.

## Bagaimana Integrasi WMS-TMS Bekerja, dan Di Mana Hand-off-nya?

Integrasi WMS-TMS bekerja dengan menyinkronkan data di titik *hand-off*: TMS memberi WMS *carrier* dan rencana muatan sebelum pemuatan, sedangkan WMS mengonfirmasi kesiapan barang (*readiness*) dan status pemuatan kembali ke TMS. Di SAP, rencana di SAP TM (sebuah *freight order*) menciptakan Transportation Unit di SAP EWM, yang kemudian mengirim pembaruan status lebih awal ke TM. Titik-titik pertukaran itu bisa dipetakan konkret.

1. **Sebelum *load building*:** WMS membutuhkan dari TMS *carrier* yang terpilih, rencana muatan, dan urutan pemuatan.
2. **Sebelum finalisasi rute:** TMS membutuhkan dari WMS konfirmasi kesiapan barang (*readiness*) serta berat dan volume aktual.
3. **Saat dan setelah pemuatan:** TMS membutuhkan dari WMS status *Finish Loading* dan konfirmasi Transportation Unit.
4. **Ke pelanggan dan carrier:** keduanya berbagi ASN (*Advanced Shipping Notification*) dan dokumen pengiriman.

Yang menyatukan semua ini di SAP adalah Transportation Unit (TU). Menurut SAP Help Portal, TU adalah unit terkecil yang dapat dimuat pada kendaraan untuk mengangkut barang, dan tidak harus menjadi bagian dari sebuah *vehicle*. Ketika perencanaan transportasi dilakukan di SAP TM, sebuah *freight order* dapat menciptakan TU di EWM; seluruh langkah terkait TU di gudang lalu dijalankan lewat *Shipping Cockpit*. EWM juga mengirim pembaruan status lebih awal (*early update*) ke TM, misalnya status *Finish Loading* yang dikirim lebih dini daripada status keberangkatan, sehingga dokumen dapat dicetak lebih awal dalam proses.

SAP TM sendiri hadir dalam dua model penyebaran. Pada model *embedded* di S/4HANA, TM dan EWM berbagi satu sistem dengan *master data* yang harmonis, tanpa perlu menduplikasi data order dan pengiriman. Pada model *standalone* (*decentralized*), TM berjalan sebagai sistem terpisah yang diintegrasikan ke ERP atau EWM lain, sehingga perlu transfer data antar-sistem. Karena EWM dan TM hidup di lanskap S/4HANA, kerapian integrasi ini menjadi bagian dari perjalanan [migrasi ERP ke cloud](https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud) yang lebih besar, bukan proyek yang berdiri sendiri.

Di sinilah pengalaman partner berperan. Soltius mengimplementasikan dan mengintegrasikan SAP EWM dan SAP TM dengan pendekatan *clean core*, yakni menempatkan pengembangan tambahan di luar inti sistem agar integrasi tetap aman ketika sistem di-*upgrade*.

## Dampak ke OTIF, Biaya Angkut, dan Visibilitas

Integrasi WMS-TMS menutup celah yang paling sering memicu kegagalan OTIF, sebab OTIF adalah metrik ujung-ke-ujung: gudang bisa 100% akurat namun skor tetap jeblok bila transportasi gagal. Sebagai *rule-of-thumb* industri, skor OTIF sekitar 95-99% dianggap sangat baik, sedangkan di bawah kira-kira 85% menandakan masalah rantai pasok. Ini rentang konvensi lapangan yang bervariasi per industri, bukan standar tunggal atau angka resmi SAP.

OTIF (*On-Time In-Full*) adalah metrik gerbang ganda: sebuah pesanan hanya dihitung berhasil bila datang tepat waktu sekaligus lengkap. Tepat waktu tetapi kurang satu unit tetap dihitung gagal; lengkap tetapi telat juga gagal. Konsep ini dipopulerkan sebagai KPI pemasok oleh Walmart pada 2017, dan sejak itu menjadi acuan de facto di banyak rantai pasok ritel dan distribusi.

Dampak kedua ada di biaya angkut (*freight cost*). Transportasi termasuk salah satu komponen biaya logistik terbesar bagi bisnis; laporan CSCMP *State of Logistics* 2025 menempatkan belanja transportasi jalan raya di puncak pengeluaran logistik. Ketika TMS dapat mengonsolidasikan muatan berdasarkan kesiapan barang yang akurat dari WMS, perusahaan berpotensi menekan biaya angkut, meski besarannya sangat bergantung pada pola pengiriman dan tidak layak dijanjikan dalam satu angka pasti.

Ringkasnya, integrasi yang benar memberi tiga hal:

- **Hand-off otomatis, bukan manual:** mengurangi salah *carrier* dan keterlambatan akibat konfirmasi yang tercecer di telepon atau email.
- **Konsolidasi muatan yang lebih akurat:** menekan biaya angkut tanpa mengorbankan kelengkapan pesanan.
- **Visibilitas ujung-ke-ujung:** status barang, muatan, dan kendaraan hidup dalam satu alur, dari *dock* hingga pintu pelanggan.

## Integrasi Bukan Sekadar Menyambung Dua Sistem: Jebakan yang Sering Terjadi

Menyambung dua sistem lewat API belum tentu menutup celah OTIF; sering kali ia hanya memindahkannya. Nilai integrasi muncul dari data yang benar pada momen yang benar, bukan dari koneksi teknis semata. Bagian ini jarang ditulis kompetitor, padahal di sinilah proyek integrasi paling banyak tergelincir. Tiga jebakan paling umum:

- **Integrasi *point-to-point* yang rapuh.** Menautkan tiap sistem satu per satu terlihat cepat di awal, tetapi menjadi jaring kusut yang mudah putus ketika satu API berubah.
- **Kustomisasi berlebihan yang merusak jalur *upgrade*.** Memodifikasi inti sistem untuk memaksakan alur integrasi tertentu membuat *upgrade* berikutnya mahal dan berisiko.
- **Data master yang tidak selaras.** Kode produk, satuan, dan data *carrier* yang berbeda antar-sistem membuat pertukaran data teknis tetap salah secara bisnis.

Prinsip yang menjaga integrasi tetap aman disebut *clean core*. Menurut SAP News Center (Agustus 2025), *clean core* berarti menjaga inti S/4HANA tetap standar dan stabil saat *upgrade*, sambil tetap memungkinkan diferensiasi bisnis lewat pengembangan tambahan yang terkendali; kustomisasi liar disebut membatasi fleksibilitas, memperlambat *upgrade*, dan menaikkan total biaya kepemilikan. Pengembangan tambahan diletakkan *side-by-side* di SAP BTP atau *on-stack* lewat ABAP Cloud memakai *released API*, bukan dengan memodifikasi inti. SAP bahkan mengklasifikasikan kematangannya ke dalam empat tingkat (Level A hingga D); Level A yang memakai *released API* sepenuhnya *upgrade-safe*. Disiplin inilah yang menjaga integrasi WMS-TMS tetap rapi; uraian lengkapnya ada di panduan [SAP Clean Core](https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide).

Konteks ini makin relevan menjelang tenggat SAP: *mainstream maintenance* SAP ECC berakhir 31 Desember 2027, dengan opsi *extended maintenance* hingga 2030. Banyak perusahaan memanfaatkan momentum pindah ke S/4HANA untuk sekaligus merapikan integrasi gudang-transportasi mereka.

Satu catatan jujur: native belum tentu selalu lebih unggul. Untuk perusahaan dengan lanskap multi-ERP atau TMS pihak ketiga yang sudah matang, model *standalone* bisa lebih tepat daripada memaksakan satu platform demi *buzzword*. Pilih model integrasi sesuai lanskap, bukan sesuai tren.

| Aspek | *Point-to-point* / middleware (dua sistem terpisah) | Native satu platform (SAP EWM + TM di S/4HANA) |
|---|---|---|
| Aliran data | Antar-sistem via API; risiko duplikasi | *Master data* harmonis, tanpa transfer ganda |
| Titik *hand-off* | Perlu pemetaan dan rekonsiliasi | TU menjembatani rencana (TM) ke eksekusi (EWM) |
| Kerapuhan | Rentan bila kustomisasi berlebihan | Lebih ringkas; tetap wajib jaga *clean core* |
| Jalur *upgrade* | Bisa terganggu kustomisasi inti | Aman bila extension di BTP/ABAP Cloud |
| Cocok untuk | Multi-ERP, lanskap heterogen | Lanskap SAP terkonsolidasi di S/4HANA |

## FAQ (Pertanyaan yang Sering Diajukan)

### Apa itu TMS (Transportation Management System)?
TMS adalah sistem yang merencanakan, mengeksekusi, dan memantau pergerakan barang ke luar gudang: pemilihan rute dan *carrier*, konsolidasi muatan, penghitungan biaya angkut, hingga eksekusi pengiriman. Jika WMS mengurus barang di dalam gudang, TMS mengurus perjalanannya setelah keluar dari *dock*. Di ekosistem SAP, peran ini dijalankan SAP Transportation Management (TM).

### Apa bedanya WMS dan TMS?
WMS mengelola operasi di dalam gudang: penerimaan, *put-away*, penyimpanan, *picking*, dan *packing*. TMS mengelola pergerakan barang antar-lokasi: perencanaan rute, pemilihan pengangkut, konsolidasi muatan, biaya angkut, dan eksekusi pengiriman. Keduanya bersinggungan di titik pemuatan: WMS menyiapkan barang, TMS mengatur kendaraan dan pengirimannya.

### Bagaimana integrasi WMS dan TMS bekerja?
Integrasi menyinkronkan dua sisi di titik *hand-off*: TMS memberi WMS informasi *carrier* dan rencana muatan sebelum pemuatan, sedangkan WMS mengonfirmasi kesiapan barang dan status pemuatan kembali ke TMS. Di SAP, rencana di SAP TM (*freight order*) menciptakan Transportation Unit di SAP EWM, dan EWM mengirim pembaruan status lebih awal ke TM agar dokumen dan pengiriman selaras.

### Apa itu OTIF (On-Time In-Full)?
OTIF adalah metrik yang mengukur apakah pesanan tiba tepat waktu sekaligus lengkap, baik jumlah maupun itemnya. Keduanya wajib terpenuhi: pesanan tepat waktu tetapi kurang unit tetap gagal, begitu pula yang lengkap tetapi telat. Sebagai *rule-of-thumb* industri, skor sekitar 95-99% dianggap sangat baik, sedangkan di bawah kira-kira 85% menandakan masalah rantai pasok.

### Apa manfaat mengintegrasikan WMS dan TMS?
Integrasi menutup celah antara gudang dan transportasi yang sering memicu kegagalan OTIF. Manfaatnya: visibilitas ujung-ke-ujung dari *dock* hingga pengiriman, *hand-off* otomatis yang mengurangi salah *carrier* dan keterlambatan, konsolidasi muatan yang menekan biaya angkut, serta data status yang konsisten antar-sistem tanpa entri ganda.

### Apakah SAP EWM terintegrasi dengan SAP TM?
Ya. SAP Extended Warehouse Management (EWM) terintegrasi dengan SAP Transportation Management (TM). Menurut SAP Help Portal, ketika perencanaan transportasi dilakukan di SAP TM, sebuah *freight order* dapat menciptakan Transportation Unit di EWM, dan EWM mengirim pembaruan status lebih awal ke TM. Di S/4HANA, TM bahkan bisa *embedded*: satu sistem, *master data* harmonis, tanpa duplikasi data.

### Apa itu Transportation Unit dalam SAP?
Transportation Unit (TU) adalah unit terkecil yang dapat dimuat pada kendaraan untuk mengangkut barang di SAP EWM; TU bisa menjadi bagian dari sebuah *vehicle*, tetapi tidak harus. TU menjembatani perencanaan transportasi dan eksekusi gudang: rencana di SAP TM (*freight order*) menciptakan TU, dan seluruh langkah terkait TU di gudang dijalankan lewat *Shipping Cockpit* di EWM.

## Kesimpulan

Kegagalan OTIF yang paling menjengkelkan bukan yang terjadi di rak gudang, melainkan yang terjadi di celah menuju truk. Menutup celah itu bukan soal membeli satu perangkat lunak baru, melainkan soal menyelaraskan data yang benar pada momen yang benar antara *warehouse management system* dan TMS, lalu menjaga sambungannya tetap *upgrade-safe* lewat disiplin *clean core*. Sebagai SAP Platinum Partner melalui United VARs dan bagian dari Metrodata Group sejak 1998, Soltius mendampingi perusahaan mengintegrasikan SAP EWM dan SAP TM dari penilaian kesiapan hingga dukungan pasca go-live, dengan pendekatan yang menjaga inti sistem tetap standar. Tujuannya bukan menambah sistem, melainkan menyambung yang sudah ada agar pesanan sampai tepat waktu dan lengkap.

Untuk mendiskusikan kesiapan integrasi gudang dan transportasi di perusahaan Anda, kunjungi soltius.co.id dan mulai dari sebuah penilaian.
