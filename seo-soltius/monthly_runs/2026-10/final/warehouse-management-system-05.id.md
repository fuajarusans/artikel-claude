---
title: "Packing, Cartonization, dan VAS: Sisi Gudang yang Terlupakan di WMS"
meta_title: "Warehouse Management System: Packing & Cartonization"
meta_description: "Packing, cartonization, dan VAS: sisi gudang yang sering terlupakan. Pahami cara warehouse management system memilih kardus dan menekan ongkos kirim volumetrik."
slug: "warehouse-management-system-packing-cartonization"
language: "id"
primary_keyword: "warehouse management system"
secondary_keywords:
  - "packing gudang"
  - "cartonization"
  - "dimensional weight"
  - "berat volumetrik"
  - "value added services"
  - "kitting dan bundling"
  - "packaging specification"
  - "pack bench"
  - "SAP EWM"
  - "deconsolidation"
internal_links:
  - url: "https://www.soltius.co.id/id/blog/manfaat-dan-modul-warehouse-management-system"
    anchor: "warehouse management system"
  - url: "https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide"
    anchor: "prinsip clean core"
  - url: "https://www.soltius.co.id/id/blog/low-code-and-no-code-platforms"
    anchor: "platform low-code"
external_citations:
  - url: "https://learning.sap.com/courses/processes-in-sap-s-4hana-ewm/applying-value-added-services"
    context: "Definisi VAS (assembling, packing, labeling), VAS order sebagai dokumen pengendali, dan kitting sebagai VAS di SAP EWM"
  - url: "https://www.dhl.com/discover/id-id/logistics-advice/logistics-insights/decoding-shipping-costs-actual-weight-vs-volumetric-weight"
    context: "Konsep berat volumetrik vs aktual dan ekspedisi menagih nilai yang lebih besar di antara keduanya"
brief_id: "warehouse-management-system-05"
target_word_count: 1650
publish_month: "2026-10"
word_count: 2107
---

# Packing, Cartonization, dan VAS: Sisi Gudang yang Terlupakan di WMS

Hampir setiap gudang mengukur kecepatan *picking* (pengambilan barang) dengan cermat, tetapi nyaris tak ada yang mengukur apa yang terjadi di meja *packing* (pengepakan). Padahal di situlah biaya diam-diam lahir: kardus yang kebesaran, ongkos kirim volumetrik yang membengkak, barang rusak di perjalanan, dan retur berlabel "kemasan salah". Memilih ukuran kardus yang keliru berarti membayar untuk mengirim udara, sementara permintaan pelabelan ritel dan perakitan paket yang dikerjakan manual memperlambat seluruh antrean. Artikel ini membahas tiga proses yang kerap luput, yaitu *packing*, *cartonization*, dan *value added services* (VAS), serta bagaimana sebuah [warehouse management system](https://www.soltius.co.id/id/blog/manfaat-dan-modul-warehouse-management-system) seperti SAP EWM mengubahnya dari sumber pemborosan menjadi titik kendali biaya.

> **Ringkas:** *Cartonization* adalah proses menentukan ukuran dan jumlah kemasan paling efisien untuk sebuah pesanan sebelum barang dikemas. Dalam *warehouse management system* seperti SAP EWM, *cartonization planning* menghitung kombinasi *handling unit* optimal dari berat, volume, dan dimensi produk di data master, sehingga menekan berat volumetrik, pemborosan *void fill*, dan ongkos kirim.

Pembahasan bergerak dari definisi ketiga proses, cara WMS memilih kardus, ragam VAS dan kapan dipicu, orkestrasi di *pack bench*, hingga satu bagian yang jarang ditulis kompetitor: kapan optimasi packing justru belum sepadan.

## Apa itu packing, cartonization, dan VAS di gudang?

Packing adalah proses mengemas pesanan menjadi *handling unit* (unit penanganan) siap kirim; *cartonization* adalah langkah memilih kemasan paling efisien sebelum pengepakan; dan *value added services* (VAS) adalah pekerjaan bernilai tambah seperti pelabelan, *kitting*, dan *bundling*. Ketiganya berpusat di meja packing, titik yang diam-diam menyerap biaya kardus, *consumable* (material kemasan), dan ongkos kirim.

Dalam diskusi gudang, kecepatan picking hampir selalu jadi sorotan karena mudah diukur dan terasa "produktif". Meja packing memperoleh perhatian jauh lebih sedikit, walau justru di sanalah keputusan yang berdampak langsung ke tagihan ekspedisi diambil. Kardus dan consumable adalah pos biaya yang sering tidak terukur rapi, tersebar di banyak order kecil sehingga jarang muncul sebagai satu angka yang mengkhawatirkan.

Benang merah teknis ketiganya adalah satu objek data yang sama: *packaging specification* (spesifikasi kemasan). Di SAP EWM, packaging specification berperan sebagai data master berjenjang (dari *header* ke *contents*, lalu ke *level*) yang menjadi dasar banyak proses, mulai dari pengepakan otomatis di *inbound*, penentuan material untuk Pick HU, palletisasi, hingga cartonization. Objek yang sama ini juga memberi tahu sistem langkah VAS apa yang harus dikerjakan operator. Satu master data, dua manfaat.

## Apa itu cartonization dan bagaimana WMS memilih ukuran kardus?

Cartonization adalah perencanaan kemasan yang menghitung kombinasi kardus paling hemat untuk satu pesanan sebelum picking fisik dimulai. Di SAP EWM, algoritma standar bernama SAP1 bekerja dengan meminimalkan jumlah *handling unit*, memeriksa berat dan volume item terhadap kapasitas *packaging material*, serta secara opsional mencocokkan panjang, lebar, dan tinggi lewat *dimension check*. Hasilnya adalah saran kardus yang pas, bukan tebakan operator.

Mengapa ini penting bagi keuangan? Karena ukuran kardus menentukan *dimensional weight* (berat volumetrik), dan di banyak kasus justru berat volumetrik, bukan berat aktual, yang menentukan tarif. Rumus umumnya sederhana:

**Berat Volumetrik = (Panjang × Lebar × Tinggi) ÷ pembagi**

Pembagi berbeda antar ekspedisi: misalnya 5000 untuk standar udara internasional seperti DHL/FedEx/UPS (satuan cm/kg), 6000 yang lazim untuk angkutan darat dan ekonomi termasuk kurir domestik, serta 3000 untuk layanan ekspres tertentu. Perlakukan pembagi ini sebagai contoh, bukan konstanta universal, karena nilainya bisa berubah. Satu paket berdimensi 50 × 40 × 30 cm, misalnya, menghasilkan 60.000 ÷ 6000 = 10 kg volumetrik, meski isinya ringan. Menurut panduan DHL Indonesia, ekspedisi menagih berdasarkan nilai yang lebih besar antara berat aktual dan berat volumetrik, sehingga kardus kebesaran membuat perusahaan benar-benar membayar untuk mengirim ruang kosong.

Ilustrasi berikut menunjukkan mekanismenya. Angkanya rekaan untuk menjelaskan prinsip, bukan tarif nyata.

| Skenario | Dimensi kardus | Berat volumetrik (÷6000) | Berat aktual isi | Berat ditagih (lebih besar) |
|---|---|---|---|---|
| Kardus kebesaran | 40 × 30 × 30 cm | 6,0 kg | 2,0 kg | **6,0 kg** |
| Kardus *right-sized* | 25 × 20 × 15 cm | 1,25 kg | 2,0 kg | **2,0 kg** |

Dari satu order yang sama, *right-sizing* memindahkan dasar tagihan dari 6,0 kg ke 2,0 kg, sekaligus memangkas kebutuhan *void fill* dan menurunkan risiko barang bergoyang lalu rusak. Besar penghematan sangat bergantung pada profil produk dan tarif ekspedisi, jadi perlakukan sebagai estimasi mekanisme, bukan janji persentase. Yang pasti bukan "hemat 30%", melainkan arah hubungannya: kemasan lebih kecil menurunkan berat volumetrik, dan berat volumetrik yang turun menurunkan tarif.

## Jenis value added services dan kapan dibutuhkan

Value added services (VAS) adalah layanan atas produk yang dikerjakan di dalam gudang sebelum barang dikirim atau disimpan. SAP EWM menyebut aktivitasnya mencakup *assembling*, *packing*, *labeling*, dan *oiling* (SAP Learning), dan seluruh prosesnya dikendalikan oleh dokumen *VAS order*. Secara teknis, VAS order adalah packaging specification berisi nilai karakteristik yang menautkan item pesanan ke instruksi kerja, lalu diteruskan ke operator di *work center* khusus.

Yang membedakan VAS yang matang dari sekadar "pekerjaan tambahan": setiap langkah punya instruksi, dan konsumsi material pendukung seperti label atau *shrink wrap* ikut tercatat. Jenis VAS yang umum dan pemicunya berbeda per kanal penjualan:

| Jenis VAS | Yang dikerjakan | Kanal dominan | Catatan EWM |
|---|---|---|---|
| Labeling / *compliance labeling* (GS1) | Tempel label harga, barcode, atau label ritel | Ritel modern, B2B *retail compliance* | Instruksi dari packaging spec; cetak di work center |
| Bundling / promo | Gabungkan produk untuk promosi | Marketplace dan ritel kampanye | Dapat dikonfigurasi sebagai aktivitas VAS |
| Kitting / perakitan ringan | Rakit komponen jadi satu unit ber-SKU baru | B2B dan e-commerce (paket) | *kit-to-order* / *kit-to-stock* |
| Gift-wrap / re-pack | Bungkus hadiah atau kemas ulang | E-commerce D2C, musiman | Konsumsi consumable dicatat |
| Ticketing ritel | Pasang *hangtag* atau *price ticket* | Fashion dan ritel | Bagian dari VAS order |

Dua istilah sering tertukar. *Kitting* merakit beberapa komponen menjadi satu unit fungsional dengan identitas atau SKU baru, sering lewat proses *kit-to-order* maupun *kit-to-stock* di EWM. *Bundling* menggabungkan beberapa produk jadi untuk tujuan promosi, misalnya "beli dua gratis satu", tanpa selalu membentuk SKU permanen. SAP mendefinisikan kitting secara eksplisit sebagai VAS; "bundling" lebih merupakan istilah bisnis yang bisa dikonfigurasi sebagai aktivitas VAS, bukan objek sistem bernama resmi.

## Bagaimana WMS mengorkestrasi pack bench dan konsumsi material

Di meja packing, WMS berperan sebagai pemandu, bukan sekadar pencatat. Sistem menampilkan isi order, menyarankan kardus hasil cartonization, meminta operator memverifikasi isi lewat pemindaian, mencatat pemakaian consumable, lalu mencetak label dan dokumen pengiriman. Rangkaian langkah yang tadinya bergantung pada ingatan operator berubah menjadi alur yang konsisten dari satu order ke order berikutnya.

Secara praktis, satu siklus di pack bench yang dipandu WMS umumnya berjalan dalam urutan berikut:

1. **Tampilkan isi order.** Layar pack bench memunculkan item dan kuantitas yang harus dikemas untuk pesanan itu.
2. **Sarankan kemasan.** Hasil cartonization menampilkan kardus yang direkomendasikan, bukan tebakan operator.
3. **Verifikasi isi.** Operator memindai barang untuk memastikan kecocokan sebelum kardus ditutup, menekan risiko kirim salah.
4. **Jalankan VAS bila dipicu.** Instruksi dari VAS order muncul, misalnya pelabelan atau kitting, dengan konsumsi material ikut tercatat.
5. **Cetak dan serahkan.** Label *carrier* dan dokumen pengiriman dicetak, paket masuk antrean kirim.

Yang menyatukan semua langkah itu adalah *Process-Oriented Storage Control* (POSC), mekanisme yang mengurutkan penanganan multi-tahap di gudang. Pada sisi *inbound*, misalnya, POSC dapat merangkai *unloading*, *counting*, *deconsolidation*, *quality inspection*, VAS, hingga *putaway* sebagai gerakan yang terarah, bukan langkah lepas yang mudah terlewat.

*Deconsolidation* layak disebut karena ia adalah sisi lain dari packing yang nyaris tak pernah dibahas. Jika pack bench menyusun barang keluar, deconsolidation work center memecah *handling unit* campuran atau besar menjadi HU kecil sebelum putaway. Sistem mengarahkannya otomatis saat produk punya *activity area* atau *consolidation group* berbeda.

| Aspek | Outbound: pack bench | Inbound: deconsolidation |
|---|---|---|
| Arah | Barang keluar | Barang masuk |
| Tujuan | Bentuk shipping HU optimal, VAS, verifikasi, cetak dokumen | Pecah HU campuran/besar jadi HU kecil |
| Pemicu | POSC / proses outbound | POSC; beda *activity area* / *consolidation group* |
| Hasil | Paket siap kirim plus label carrier | HU rapi siap *putaway* ke bin |

Satu catatan desain penting. Aturan cartonization dan VAS yang sangat spesifik perusahaan sebaiknya dikonfigurasi atau diperluas tanpa memodifikasi inti EWM, sejalan dengan [prinsip clean core](https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide), agar sistem tetap mudah di-upgrade. Untuk kebutuhan yang lebih ringan, seperti aplikasi layar pack bench, checklist kitting, atau instruksi VAS bergambar, [platform low-code](https://www.soltius.co.id/id/blog/low-code-and-no-code-platforms) seperti SAP Build bisa membangunnya cepat di atas data WMS. Dalam proyek implementasi EWM, langkah VAS dan saran kardus memang dirangkai lebih dulu agar operator mengikuti instruksi yang sama; di sinilah pengalaman mitra seperti Soltius mengonfigurasi packaging specification, VAS, dan work center berperan.

## Kapan optimasi packing belum sepadan (dan jebakan over-engineering)

Cartonization bukan "selalu lebih baik". Untuk variasi SKU rendah atau produk dengan dimensi relatif seragam, aturan kardus manual plus SOP yang disiplin sering lebih murah daripada memelihara algoritma sekaligus data master dimensi. Optimasi baru sepadan ketika volume tinggi dan keragaman kemasan membuat kesalahan manusia menumpuk jadi biaya nyata.

Beberapa rambu sebelum berinvestasi di cartonization dan VAS kompleks:

- **Data master dimensi belum akurat.** Cartonization bergantung penuh pada akurasi berat dan dimensi di data master. Data buruk menghasilkan saran kardus yang salah, operator berhenti percaya, lalu kembali menebak. Ini akar kegagalan yang lebih sering daripada algoritmanya sendiri (*garbage in, garbage out*).
- **Volume dan variasi masih kecil.** Untuk gudang satu lokasi dengan jenis kemasan terbatas, SOP kardus manual biasanya sudah memadai dan jauh lebih murah dirawat.
- **VAS dipasang sebagai default, bukan per order.** Setiap langkah VAS menambah waktu dan biaya tenaga. Memberi *gift-wrap* ke semua order, misalnya, memperlambat *throughput* tanpa diminta pelanggan. VAS sebaiknya dipicu per order atau per kanal.
- **Pembagi volumetrik diperlakukan seolah pasti.** Nilai 5000, 6000, atau 3000 berbeda antar ekspedisi dan dapat berubah. Keputusan right-sizing sebaiknya memakai tarif ekspedisi Anda sendiri, bukan satu angka yang diasumsikan universal.

Intinya, optimasi packing adalah soal ambang. Di bawah ambang volume dan kompleksitas tertentu, menambah sistem hanya memindahkan pekerjaan, bukan menghilangkannya.

## FAQ (Pertanyaan yang Sering Diajukan)

### Apa itu value added services (VAS) dalam operasi gudang?

Value added services (VAS) adalah layanan bernilai tambah atas produk yang dikerjakan di dalam gudang sebelum barang dikirim atau disimpan, mulai dari pelabelan, pengepakan khusus, perakitan ringan, hingga kitting. Dalam SAP EWM, VAS dikendalikan dokumen *VAS order* dan dikerjakan di *work center* khusus, sehingga instruksi dan konsumsi material seperti label dan shrink wrap tercatat konsisten antar operator.

### Apa itu cartonization dan bagaimana WMS memilih ukuran kardus?

Cartonization adalah proses menentukan kombinasi kemasan paling efisien untuk sebuah pesanan. Di SAP EWM, *cartonization planning* mengoptimalkan pembentukan *handling unit* dari berat, volume, dan opsional dimensi di data master. Algoritma standar SAP1 meminimalkan jumlah handling unit dengan memeriksa berat dan volume item terhadap kapasitas packaging material, sehingga sistem menyarankan kardus yang pas sebelum picking fisik dimulai.

### Apa itu dimensional weight atau berat volumetrik?

Berat volumetrik adalah berat "setara ruang" yang dipakai ekspedisi untuk paket ringan tapi memakan tempat. Rumus umumnya (Panjang × Lebar × Tinggi) ÷ pembagi, dengan pembagi berbeda per ekspedisi, misalnya 5000 atau 6000 untuk satuan cm/kg. Ekspedisi menagih berdasarkan nilai yang lebih besar antara berat aktual dan berat volumetrik, itulah sebabnya kardus kebesaran membuat perusahaan membayar untuk mengirim udara.

### Apa bedanya kitting dan bundling?

Keduanya menggabungkan beberapa item, tetapi tujuannya berbeda. Kitting merakit beberapa komponen menjadi satu unit dengan SKU baru, misalnya paket perlengkapan, sering lewat *kit-to-order* atau *kit-to-stock* di EWM. Bundling menggabungkan produk jadi untuk tujuan promosi, seperti "beli dua gratis satu", tanpa selalu membentuk SKU permanen. Keduanya dapat dikonfigurasi sebagai aktivitas VAS.

### Bagaimana WMS mengurangi ongkos kirim lewat kemasan?

WMS menekan ongkos lewat *right-sizing*: melalui cartonization, sistem menyarankan kardus terkecil yang muat, sehingga berat volumetrik dan tarif ekspedisi yang mengikutinya ikut turun. Kemasan yang pas juga memangkas kebutuhan void fill serta menurunkan risiko kerusakan transit dan retur. Besar penghematan bergantung pada profil produk dan tarif ekspedisi, jadi perlakukan angkanya sebagai estimasi, bukan jaminan.

### Apakah SAP EWM mendukung packaging specification dan VAS?

Ya. *Packaging specification* adalah data master resmi SAP EWM yang mendasari penentuan kemasan termasuk cartonization, sekaligus memberi instruksi langkah VAS ke *VAS order*. Aktivitas VAS seperti pelabelan, pengepakan, dan kitting dijalankan di *work center* khusus, dan dapat dirangkai bersama langkah lain seperti deconsolidation, quality inspection, dan putaway melalui *Process-Oriented Storage Control* (POSC).

### Kapan perusahaan perlu pack bench yang terstandar?

Pack bench terstandar paling bernilai saat volume pesanan tinggi, variasi SKU besar, atau banyak permintaan VAS ritel seperti label GS1, bundling, dan kitting yang harus konsisten antar operator. Untuk volume kecil dengan variasi rendah, aturan kardus manual plus SOP sering sudah memadai. Cartonization juga menuntut data master dimensi yang akurat; tanpa itu, sarannya meleset.

## Kesimpulan

Meja packing layak diperlakukan sebagai titik kendali biaya, bukan sekadar ujung alur fulfillment. Begitu cartonization memilih kardus yang pas, VAS dirangkai per order, dan konsumsi material tercatat, tagihan ongkos kirim, angka retur, dan biaya tenaga mulai bisa dikelola, bukan sekadar diterima. Yang sering menentukan bukan kecanggihan algoritma, melainkan kualitas data master dan kejujuran menilai kapan optimasi belum sepadan. Sebagai SAP Platinum Partner melalui United VARs dan bagian dari Metrodata Group sejak 1998, Soltius mendampingi perusahaan mengonfigurasi packaging specification, VAS, dan work center di warehouse management system agar sisi gudang yang selama ini terlupakan ikut terukur.

Untuk mendiskusikan kesiapan proses packing dan VAS di gudang Anda, jelajahi solusinya di soltius.co.id.
