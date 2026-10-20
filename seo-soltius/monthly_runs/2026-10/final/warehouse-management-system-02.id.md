---
title: "Reverse Logistics: Cara Warehouse Management System Menangani Retur dari Otorisasi sampai Disposisi"
meta_title: "Warehouse Management System: Alur Retur & Disposisi"
meta_description: "Bagaimana warehouse management system menangani retur: alur RMA 5 langkah, kerangka disposisi, stock type karantina EWM, hingga returns analytics."
slug: "warehouse-management-system-retur-reverse-logistics"
language: "id"
primary_keyword: "warehouse management system"
secondary_keywords:
  - "reverse logistics"
  - "manajemen retur"
  - "RMA"
  - "inspeksi dan grading barang retur"
  - "disposisi retur"
  - "returns putaway"
  - "tingkat retur e-commerce"
  - "returns analytics"
  - "SAP EWM returns"
  - "stock type karantina"
  - "FEFO barang retur"
internal_links:
  - url: "https://www.soltius.co.id/id/blog/manfaat-dan-modul-warehouse-management-system"
    anchor: "warehouse management system"
  - url: "https://www.soltius.co.id/id/blog/business-intelligence"
    anchor: "business intelligence"
  - url: "https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide"
    anchor: "prinsip clean core"
external_citations:
  - url: "https://help.sap.com/docs/SAP_S4HANA_ON-PREMISE"
    context: "Advanced Returns Management (ARM) sebagai proses retur resmi S/4HANA dan stock type (unrestricted/quality/blocked) di EWM"
  - url: "https://www.dhl.com/id-id"
    context: "Konteks pasar retur e-commerce Indonesia: label retur, drop-off/pickup, dan perilaku konsumen"
brief_id: "warehouse-management-system-02"
target_word_count: 1650
publish_month: "2026-10"
word_count: 2255
---

# Reverse Logistics: Cara Warehouse Management System Menangani Retur dari Otorisasi sampai Disposisi

Retur jarang muncul sebagai satu baris di laporan laba rugi, tapi ia diam-diam menggerus margin: tenaga yang sibuk memilah barang balik, rak yang penuh barang berstatus abu-abu, dan uang yang mengendap di stok yang sebenarnya masih bisa dijual. Di banyak gudang Indonesia, alur retur masih bersifat darurat, ditangani kalau sempat, dengan status stok yang tidak jelas. Artikel ini membahas cara sebuah [warehouse management system](https://www.soltius.co.id/id/blog/manfaat-dan-modul-warehouse-management-system) menata arus balik itu secara sistematis, dari otorisasi retur sampai keputusan disposisi, lengkap dengan alur RMA, kerangka memilih disposisi, dan returns analytics yang bisa Anda cocokkan langsung dengan operasi sendiri.

> **Ringkas:** *Reverse logistics* (logistik balik) adalah proses mengelola arus barang dari pelanggan kembali ke gudang, mulai dari otorisasi retur (RMA), penerimaan dan inspeksi, hingga keputusan disposisi, untuk memulihkan nilai barang atau membuangnya secara patuh. Berbeda dari logistik maju yang mengirim produk ke pelanggan, reverse logistics menata arus balik agar stok, biaya, dan kepatuhan tetap terkendali.

Pembahasannya mengalir dari alasan retur begitu mahal, lalu lima langkah alur retur di dalam sistem, kerangka memilih disposisi, cara membaca data retur, sampai kategori barang yang justru tidak boleh dikembalikan ke stok begitu saja.

## Apa itu reverse logistics dan mengapa retur begitu mahal?

Reverse logistics adalah penanganan arus barang yang kembali dari pelanggan, dan ia mahal karena volumenya besar sekaligus padat kerja. Rata-rata tingkat retur e-commerce global berkisar 17–20% dari order pada 2024–2025, sekitar dua hingga tiga kali lipat ritel toko fisik, sementara kategori fesyen kerap menembus 20–40%. Setiap retur menuntut tenaga, ruang, dan sering berujung penurunan nilai barang.

Angka retur bukan satu angka tunggal, melainkan sangat bergantung kategori. Elektronik biasanya di kisaran 8–15% dan produk kecantikan 4–12%, sementara apparel dan alas kaki jauh lebih tinggi. Untuk Indonesia belum ada satu angka resmi yang berlaku umum, jadi persentase ini sebaiknya dibaca sebagai rentang benchmark industri, bukan patokan pasti satu pasar.

Biaya satu retur punya beberapa lapis yang tidak selalu terlihat di neraca:

- **Tenaga dan ruang.** Barang balik harus diterima, dipindai, diperiksa, dan disimpan di lokasi tersendiri. Semua butuh jam kerja dan meter persegi gudang yang tidak gratis.
- **Penurunan nilai.** Estimasi industri menyebut retur bisa menggerus 20–65% dari nilai asli barang, atau kira-kira USD 20–50 per paket untuk proses reverse logistics saja. Perlakukan ini sebagai estimasi industri dengan metodologi beragam, bukan angka pasti.
- **Kas yang tertahan.** Selama barang retur mengambang tanpa status jelas, modal kerja ikut mengambang: tidak tercatat sebagai stok jual, tidak juga di-write off.
- **Risiko kepatuhan.** Barang kedaluwarsa, higienis, atau bersegel rusak yang terlanjur masuk stok jual bisa berujung keluhan, penarikan, atau sanksi.

Skalanya tidak kecil. Menurut IMARC Group, pasar reverse logistics global bernilai sekitar USD 678,8 miliar pada 2024 dan diproyeksikan menembus USD 1.031,6 miliar pada 2033, dengan CAGR sekitar 4,8%. Perlakukan angka ini sebagai arah tren global, bukan ukuran pasar Indonesia.

Di dalam negeri, gelombang belanja besar memperbesar arus balik. Kementerian Perdagangan mencatat transaksi Harbolnas 2024 mencapai Rp31,2 triliun, naik 21,4% dibanding Rp25,7 triliun pada 2023, dengan 98 juta pelanggan. Gelombang order sebesar itu hampir selalu diikuti gelombang retur beberapa minggu setelahnya, dan gudang yang tidak siap akan merasakannya sebagai tumpukan di sudut ruangan.

## Bagaimana alur retur (RMA) berjalan di dalam WMS?

Di dalam WMS, retur berjalan melalui lima langkah berurutan: otorisasi atau penerbitan nomor RMA, penerimaan dan pemindaian barang, inspeksi dan grading, keputusan disposisi, lalu pembaruan stok dan lokasi. Di SAP S/4HANA, rangkaian ini dipetakan lewat Advanced Returns Management yang terhubung ke SAP Extended Warehouse Management untuk eksekusi fisiknya di lantai gudang.

Berikut kelima langkahnya secara berurutan:

1. **Otorisasi (RMA).** Penjual menyetujui retur dan menerbitkan nomor *Return Merchandise Authorization* (otorisasi pengembalian barang), yang mengikat retur ke order asal, alasan retur, dan instruksi pengiriman. Tanpa otorisasi, barang yang tiba tidak punya dokumen yang bisa dicocokkan. Di SAP, langkah ini berupa *return sales order* dalam Advanced Returns Management (ARM).
2. **Penerimaan dan pemindaian.** Barang tiba di dok penerimaan, dipindai, dan dicocokkan dengan nomor RMA-nya. Di SAP, return order memicu *inbound delivery* otomatis yang didistribusikan ke EWM, lalu dicatat sebagai *goods receipt*.
3. **Inspeksi dan grading.** Petugas mutu menilai kondisi fisik dan menetapkan grade. Di EWM, langkah ini berjalan sebagai *quality inspection* (inspeksi mutu) dengan *inspection document* yang hasilnya menentukan nasib barang.
4. **Keputusan disposisi.** Berdasarkan grade, barang diarahkan ke restock, repair, refurbish, recycle, atau dispose. Di ARM, ini adalah tahap *logistical follow-up* yang memicu pergerakan stok lanjutan.
5. **Pembaruan stok dan lokasi.** Stok dan lokasi diperbarui sesuai disposisi, dengan *putaway* ke bin yang tepat dan perubahan status stok (*posting change*).

Penting membedakan dua lapis sistem di sini, karena menyamakannya membuat ekspektasi integrasi sering meleset. Advanced Returns Management (ARM) bekerja di level dokumen dan finansial di S/4HANA: ia yang menerbitkan return order, membuat inbound delivery, memicu *returns purchase order*, dan mencatat *credit memo*. SAP Extended Warehouse Management (EWM) menangani eksekusi fisik di gudang, yaitu penerimaan, inspeksi mutu, hingga putaway. Keduanya tersambung lewat inbound delivery, sehingga satu return order di sisi penjualan langsung berubah menjadi instruksi kerja yang bisa dijalankan di lantai gudang. ARM mengurus "apa dan berapa"; EWM mengurus "di mana dan bagaimana".

## Kerangka disposisi: kapan restock, refurbish, recycle, atau dispose?

Disposisi adalah keputusan tentang nasib tiap barang retur, dan umumnya ada lima opsi: restock, repair, refurbish, recycle, atau dispose/scrap. Pilihan ditentukan hasil grading kondisi barang ditambah aturan bisnis dan kepatuhan. Prinsip intinya satu: barang retur tidak langsung masuk stok bebas, melainkan ditahan lebih dulu sampai inspeksi menyatakan lolos.

Tabel berikut memetakan kondisi barang ke aksi disposisi, dampaknya terhadap nilai stok, dan status di sistem gudang:

| Kondisi barang (hasil grading) | Aksi disposisi | Dampak nilai stok | Status di EWM | Siapa memutuskan |
|---|---|---|---|---|
| Mulus, segel utuh, dalam window retur | Restock / jual ulang | Pemulihan hampir penuh | Dilepas ke *unrestricted* setelah lolos inspeksi | QC gudang + aturan otomatis |
| Rusak ringan, bisa diperbaiki | Repair lalu restock | Pemulihan sebagian (biaya repair) | Tetap *quality/blocked* sampai repair selesai | Tim repair/QC |
| Cacat kosmetik, tak layak "baru" | Refurbish, jual sebagai refurbished | Pemulihan dengan diskon | *Blocked*, lalu dipindah ke lokasi refurbished | Operasi + komersial |
| Tak layak jual, komponen bernilai | Recycle / ambil part | Pemulihan minimal | *Blocked* menuju bin scrap/recycle | QC + sustainability |
| Higienis/kedaluwarsa/segel rusak | Dispose/scrap secara patuh | Write-off | *Blocked* menuju scrapping | QC + compliance |

Mekanisme teknis di baliknya adalah *stock type*, yaitu status yang menempel pada stok. Di EWM dan S/4HANA ada tiga tipe inti yang relevan untuk retur:

| Stock type | Arti | Peran dalam retur |
|---|---|---|
| Unrestricted (bebas) | Siap pakai atau siap jual | Tujuan akhir, hanya untuk barang yang lolos inspeksi |
| Quality inspection | Belum di-clear QC | Status transit saat barang retur menunggu diperiksa |
| Blocked | Ditolak atau diblokir QC | Barang cacat yang menunggu repair, refurbish, atau scrap |

Inilah yang dimaksud returns putaway ke lokasi terpisah. Barang retur diarahkan ke bin karantina, bukan bin stok normal, dan *bin determination* di EWM mempertimbangkan process type, stock type, serta kuantitas agar barang yang belum lolos inspeksi terpisah secara fisik maupun sistem dari stok yang siap dijual. Default yang benar justru kebalikan dari intuisi banyak orang: pada SAP S/4HANA Public Cloud, goods receipt retur bahkan otomatis menempatkan barang ke blocked stock, dan pelepasan ke stok bebas baru terjadi setelah inspeksi lolos.

Aturan disposisi yang spesifik untuk perusahaan Anda, misalnya grade khusus untuk kategori tertentu atau alur persetujuan komersial, sebaiknya ditambahkan lewat konfigurasi atau ekstensi di luar inti sistem, bukan dengan memodifikasi kode inti EWM. Pendekatan ini sejalan dengan [prinsip clean core](https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide) yang menjaga sistem tetap standar dan mudah di-upgrade.

## Returns analytics: membaca alasan retur untuk membenahi hulu

Returns analytics adalah praktik mengumpulkan dan mengategorikan alasan retur, lalu menindaklanjutinya ke proses di hulu. Alasan seperti salah ukuran, rusak saat transit, atau deskripsi produk yang keliru bukan sekadar statistik, melainkan petunjuk tempat masalah sebenarnya berada: konten produk, kualitas packing, atau proses picking yang perlu diperbaiki.

Di sinilah data retur berubah dari beban administrasi menjadi umpan balik operasional. Ketika satu kode alasan muncul berulang, ia menunjuk ke satu akar masalah yang bisa ditindaklanjuti. "Salah ukuran" yang menumpuk pada satu produk sering berarti tabel ukuran di halaman produk keliru. Lonjakan "rusak saat transit" mengarah ke cara packing atau pilihan kurir. "Barang tidak sesuai deskripsi" menuntut audit konten produk, bukan sekadar menerima barangnya kembali.

Secara teknis, ini adalah kasus [business intelligence](https://www.soltius.co.id/id/blog/business-intelligence) yang paling murni: data transaksional dari gudang dikumpulkan, dikategorikan, lalu disajikan sebagai dashboard yang bisa dibaca manajemen operasi. Dalam praktik implementasi, Soltius sering menyatukan data retur dari gudang ke dashboard analitik agar alasan retur tidak berhenti sebagai catatan, melainkan mengalir kembali ke tim picking, packing, dan konten produk sebagai tindakan korektif yang terukur.

## Retur yang tidak boleh di-restock begitu saja (dan risikonya)

Tidak semua barang retur layak kembali ke stok jual meski terlihat mulus. Barang kedaluwarsa atau mendekati kedaluwarsa, produk higienis, barang bersegel yang segelnya rusak, dan barang ber-serial punya aturan tersendiri. Memaksakan restock bukan sekadar inefisiensi, melainkan membuka risiko kepatuhan, keluhan pelanggan, bahkan celah fraud.

Untuk barang ber-batch seperti produk FMCG dan farmasi, WMS atau EWM melacak nomor batch dan tanggal kedaluwarsa, lalu menerapkan strategi FEFO (*First Expired First Out*, yang lebih dulu kedaluwarsa keluar lebih dulu). Saat barang semacam ini diretur, sistem menahannya di stok inspeksi; aturan expiry dan hasil QC yang menentukan apakah boleh kembali ke stok bebas, dijual dengan diskon, atau dibuang. Tanpa batch management dan FEFO, barang near-expiry bisa diam-diam masuk lagi ke stok jual, dan itu persoalan serius untuk kategori yang diatur ketat.

Barang ber-serial menuntut pencocokan nomor seri agar yang kembali benar-benar unit yang dikirim, bukan tukar barang. Barang higienis, kosmetik, dan sebagian produk farmasi sering kali tidak boleh di-restock sama sekali, apa pun kondisinya. Di titik ini persoalannya bergeser dari efisiensi ke kepatuhan dan pengendalian risiko, dan sistem yang baik justru harus mencegah restock, bukan mempermudahnya.

Di sisi lain, tidak setiap gudang membutuhkan mesin seberat ini. Untuk UKM dengan volume retur rendah dan satu lokasi, proses retur manual atau modul inventaris dasar masih memadai. EWM dan ARM baru benar-benar terbayar ketika volume retur, kompleksitas disposisi, jejak batch atau serial, dan tuntutan kepatuhan naik bersamaan. Membeli kapabilitas gudang kelas enterprise untuk arus retur yang masih bisa ditangani satu orang hanya menambah biaya tanpa hasil. Pertanyaan yang tepat bukan "apakah kami butuh WMS canggih", melainkan "seberapa rumit dan berisiko arus retur kami saat ini".

## FAQ (Pertanyaan yang Sering Diajukan)

### Apa itu RMA (Return Merchandise Authorization)?

RMA adalah otorisasi formal dari penjual sebelum pelanggan mengirim balik barang. RMA memberi nomor referensi yang mengikat retur ke order asal, alasan retur, dan instruksi pengiriman. Di sistem gudang, RMA menjadi tiket masuk: tanpa otorisasi, barang yang tiba tidak punya dokumen untuk dicocokkan, sehingga status stok dan hak refund tidak bisa ditentukan dengan benar.

### Berapa tingkat retur di e-commerce?

Rata-rata tingkat retur e-commerce global berkisar 17–20% dari order pada 2024–2025, sekitar dua hingga tiga kali lipat ritel toko fisik. Angka sangat bergantung kategori: fesyen atau apparel kerap 20–40%, sementara elektronik 8–15% dan kecantikan 4–12%. Untuk Indonesia belum ada satu angka resmi; perlakukan persentase ini sebagai rentang benchmark industri, bukan angka pasti satu pasar.

### Apa saja opsi disposisi barang retur?

Umumnya ada lima: restock atau jual ulang untuk barang mulus, repair untuk perbaikan ringan, refurbish untuk rekondisi dan dijual sebagai refurbished, recycle untuk mengambil komponen atau mendaur ulang, dan dispose/scrap untuk membuang secara patuh. Keputusan ditentukan hasil inspeksi dan grading kondisi barang, ditambah aturan bisnis dan kepatuhan, misalnya barang higienis atau kedaluwarsa tidak boleh di-restock meski terlihat baik.

### Apakah barang retur otomatis masuk stok lagi?

Tidak, dan memang tidak seharusnya. Di SAP EWM dan S/4HANA, barang retur lazimnya diterima ke stok diblokir (*blocked*) atau stok inspeksi lebih dulu, bukan langsung ke stok bebas (*unrestricted*). Di S/4HANA Public Cloud, goods receipt retur bahkan otomatis menempatkan barang ke blocked stock. Pelepasan ke stok bebas baru terjadi setelah inspeksi lolos, sehingga barang cacat tidak langsung terjual kembali.

### Bagaimana WMS mencegah barang expired ter-restock?

WMS atau EWM melacak nomor batch dan tanggal kedaluwarsa, lalu menerapkan strategi FEFO (First Expired First Out). Saat barang ber-batch diretur, sistem menahannya di stok inspeksi; aturan expiry dan hasil QC yang menentukan apakah barang boleh kembali ke stok bebas, dijual dengan diskon, atau dibuang. Untuk FMCG dan farmasi, kombinasi batch management, FEFO, dan quality inspection inilah yang mencegah barang near-expiry diam-diam masuk lagi ke stok jual.

### Apa itu returns putaway?

Returns putaway adalah proses menyimpan barang retur ke lokasi yang tepat setelah diterima, biasanya area terpisah atau karantina, bukan bin stok normal. Di EWM, putaway dipandu *bin determination* yang mempertimbangkan stock type (misalnya blocked atau quality), process type, dan kuantitas, sehingga barang yang belum lolos inspeksi terpisah secara fisik maupun sistem dari stok yang siap dijual.

### Apakah SAP EWM punya proses retur bawaan?

Ya. Di SAP S/4HANA, retur pelanggan dipetakan melalui Advanced Returns Management (ARM): return sales order memicu inbound delivery yang didistribusikan ke EWM, lalu goods receipt, quality inspection, dan logistical follow-up seperti kembali ke stok, scrap, atau kirim ke vendor. ARM terhubung ke Quality Management, EWM, dan Finance, sehingga dokumen logistik dan credit memo dibuat secara terintegrasi.

## Kesimpulan

Retur akan selalu ada; yang membedakan gudang matang dari gudang darurat adalah apakah arus balik itu punya alur yang jelas, dari otorisasi sampai disposisi, dan apakah datanya dipakai untuk membenahi hulu. Begitu volume dan tuntutan kepatuhan meningkat, proses retur yang tertata di dalam sistem berhenti menjadi beban dan mulai memulihkan nilai yang selama ini mengendap. Melalui layanan Data and AI Consulting serta pengalaman mengimplementasikan proses retur dan inspeksi mutu di SAP EWM, Soltius membantu perusahaan menata alur ini sekaligus menyatukan data retur menjadi keputusan yang bisa ditindaklanjuti.

Untuk mendiskusikan kesiapan proses reverse logistics di gudang perusahaan Anda, jelajahi solusinya lebih jauh di soltius.co.id.
