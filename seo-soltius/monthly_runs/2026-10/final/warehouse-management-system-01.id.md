---
title: "Strategi Picking Gudang: Wave, Batch, Zone, atau Cluster, Mana yang Tepat?"
meta_title: "Warehouse Management System: Strategi Picking Gudang"
meta_description: "Lima metode picking di warehouse management system: wave, batch, zone, cluster, discrete. Kerangka memilih sesuai profil order dan cara SAP EWM menjalankannya."
slug: "warehouse-management-system-strategi-picking"
language: "id"
primary_keyword: "warehouse management system"
secondary_keywords:
  - "strategi picking gudang"
  - "wave picking"
  - "batch picking"
  - "zone picking"
  - "cluster picking"
  - "discrete picking"
  - "waveless picking"
  - "pick path"
  - "SAP EWM wave management"
  - "akurasi picking"
  - "lines per hour"
internal_links:
  - url: "https://www.soltius.co.id/id/blog/manfaat-dan-modul-warehouse-management-system"
    anchor: "warehouse management system"
  - url: "https://www.soltius.co.id/id/blog/low-code-and-no-code-platforms"
    anchor: "platform low-code"
  - url: "https://www.soltius.co.id/id/blog/business-intelligence"
    anchor: "business intelligence"
external_citations:
  - url: "https://news.sap.com/?p=242340"
    context: "SAP diakui Leader di 2026 Gartner Magic Quadrant for WMS (4 Mei 2026, ke-12 berturut-turut, EWM melayani 24 industri)"
  - url: "https://learning.sap.com/courses/resource-management-in-sap-ewm/combining-items-in-waves"
    context: "Wave management SAP EWM: wave template, release method (Automatic/Immediate/Manual), automatic wave assignment"
brief_id: "warehouse-management-system-01"
target_word_count: 1650
publish_month: "2026-10"
word_count: 2231
---

# Strategi Picking Gudang: Wave, Batch, Zone, atau Cluster, Mana yang Tepat?

Di banyak gudang, picker menghabiskan separuh jam kerjanya bukan untuk mengambil barang, melainkan untuk berjalan dari rak ke rak. Ketika volume order naik, biaya perjalanan ini membengkak lebih cepat daripada pos lain, sementara menambah rak atau robot belum tentu terjangkau. Pengungkit termurahnya justru ada pada strategi picking: cara sebuah [warehouse management system](https://www.soltius.co.id/id/blog/manfaat-dan-modul-warehouse-management-system) mengatur urutan dan pengelompokan pengambilan order. Artikel ini membandingkan lima metode picking, yaitu discrete, batch, zone, cluster, dan wave, lalu memberi kerangka memilih (bahkan menggabungkan) yang paling cocok dengan profil order Anda, sampai ke bagaimana SAP EWM benar-benar mengeksekusinya.

> **Ringkas:** Strategi picking adalah metode mengatur urutan dan pengelompokan pengambilan barang di gudang agar waktu tempuh picker dan tingkat kesalahan seminimal mungkin. Pilihan utamanya, yaitu *discrete*, *batch*, *zone*, *cluster*, dan *wave* (plus *waveless*), dipilih berdasarkan profil order, karena perjalanan picker menyita sekitar separuh total waktu picking menurut literatur logistik.

## Apa itu strategi picking dan mengapa menyedot biaya gudang terbesar?

Strategi picking adalah cara gudang menyusun urutan dan mengelompokkan pengambilan order agar picker menempuh jarak sesingkat mungkin dengan kesalahan seminimal mungkin. Ia penting karena perjalanan (*travel*) adalah komponen terbesar waktu *picking*: sekitar 50%, bahkan hingga 55% dalam sebagian studi, sehingga menata metode picking memberi penghematan terbesar sebelum perusahaan menyentuh otomasi.

*Order picking* sendiri adalah aktivitas mengambil barang dari lokasi simpan untuk memenuhi pesanan, dan ia secara konsisten dicatat sebagai pekerjaan gudang yang paling padat karya. Satu rincian klasik dari literatur logistik (merujuk klasifikasi Tompkins, dikonfirmasi ulang di proceedings Winter Simulation Conference 2017) membagi waktu order picking seperti ini:

- **Travelling (berjalan) ~55%**: berpindah antar lokasi ambil, pekerjaan yang tidak menambah nilai sama sekali.
- **Searching (mencari) ~15%**: menemukan SKU yang benar di lokasi.
- **Extracting (mengambil) ~10%**: tindakan fisik mengambil barang.
- **Aktivitas lain ~20%**: administrasi, menunggu, menata.

Perhatikan bahwa dua aktivitas yang benar-benar bernilai (mencari dan mengambil) hanya mengisi sekitar seperempat waktu. Sisanya habis untuk berpindah. Karena itulah menata urutan dan pengelompokan pengambilan bisa memangkas waktu tempuh secara signifikan, dengan acuan praktik industri di kisaran 20–40% (bahkan diklaim hingga 50% pada kasus optimasi layout tertentu) tanpa belanja robot. Angka-angka ini perlu dibaca sebagai acuan dan potensi, bukan janji, dan berasal dari studi internasional, bukan data gudang Indonesia.

## Lima metode picking: discrete, batch, zone, cluster, dan wave

Ada lima metode inti, ditambah satu varian modern. **Discrete** mengambil satu order per perjalanan; **batch** mengambil banyak order sekaligus lalu memilahnya belakangan; **zone** menugaskan picker pada zona tetap; **cluster** mengambil beberapa order sekaligus sambil langsung memilahnya ke wadah terpisah; dan **wave** melepas order dalam gelombang terjadwal. Tidak ada pemenang universal.

- **Discrete / order picking.** Satu picker menyelesaikan satu order dari awal sampai selesai dalam satu kali jalan. Paling sederhana dan akurasinya tinggi, tetapi travel per unit paling boros. Cocok untuk gudang kecil atau order besar yang jarang.
- **Batch picking.** Beberapa order dengan SKU yang beririsan diambil bersamaan dalam satu perjalanan, lalu dipilah kembali ke masing-masing order di tahap terpisah. Hemat travel, tetapi langkah sortir tambahan membuka risiko salah memasukkan barang ke order yang keliru.
- **Zone picking.** Gudang dibagi menjadi zona, dan tiap picker tetap bekerja di zonanya. Order berpindah antar zona (metode "pick-and-pass"). Bagus untuk gudang luas dengan banyak SKU, tetapi butuh langkah konsolidasi antar zona sebelum order lengkap.
- **Cluster picking.** Satu picker mengambil untuk beberapa order sekaligus dalam satu jalan, lalu langsung memilahnya ke beberapa *tote* atau kantong terpisah per order di trolinya. Berbeda dari batch, pemilahan terjadi saat pengambilan, bukan setelahnya. Efektif untuk order e-commerce berjumlah baris sedikit tetapi bervolume tinggi.
- **Wave picking.** Order dikelompokkan dan dilepas ke lantai dalam gelombang (*wave*) terjadwal, biasanya disinkronkan dengan jadwal shift atau *cut-off* kurir. Efisien dan teratur, tetapi menambah latensi karena order harus menunggu gelombangnya terbentuk.

Varian modernnya adalah **waveless picking** atau *order streaming*: WMS melepas tugas picking terus-menerus begitu order masuk, tanpa menunggu gelombang terbentuk. Ia menukar keteraturan jadwal dengan responsivitas, cocok untuk operasi e-commerce bervolume tinggi yang butuh fleksibilitas.

## Apa bedanya wave, batch, zone, dan cluster picking?

Perbedaan intinya terletak pada kapan pengelompokan dan pemilahan terjadi. Batch mengelompokkan banyak order lalu memilah belakangan; cluster memilah saat pengambilan; zone mengelompokkan berdasarkan lokasi picker, bukan order; dan wave mengelompokkan berdasarkan waktu pelepasan terjadwal. Masing-masing menukar kecepatan, akurasi, dan kebutuhan sistem dengan cara berbeda.

Tabel berikut merangkum trade-off-nya agar mudah dibandingkan berdampingan.

| Metode | Mekanisme inti | Cocok untuk profil order | Trade-off | Kebutuhan sistem |
|---|---|---|---|---|
| Discrete / order | Satu picker, satu order per jalan | Order besar/jarang; gudang kecil | Travel per unit paling boros; akurasi tinggi | Minimal, bisa manual |
| Batch | Banyak order diambil, dipilah belakangan | Banyak order kecil, SKU beririsan | Hemat travel; butuh sortir, rawan salah order | WMS untuk batch dan sortir |
| Cluster | Banyak order diambil, dipilah ke tote saat jalan | Order e-com baris sedikit, volume tinggi | Hemat travel tanpa sortir terpisah; tote terbatas | WMS plus troli multi-tote |
| Zone | Picker tetap di zona; order berpindah antar zona | SKU banyak, gudang luas | Spesialisasi zona; butuh konsolidasi | WMS zoning dan konsolidasi |
| Wave | Order dilepas per gelombang terjadwal | Sinkron dengan cut-off kurir atau shift | Efisien terjadwal; menambah latensi per order | WMS dengan wave management |
| Waveless | Tugas dilepas terus-menerus tanpa gelombang | E-com volume tinggi, butuh responsif | Picker selalu sibuk; kurang terjadwal | WMS dengan order streaming |

Satu hal yang sering disalahpahami: pertanyaan "metode mana yang tercepat" sebenarnya salah arah. Kecepatan efektif selalu relatif terhadap profil order Anda, bukan sifat bawaan satu metode.

## Bagaimana memilih metode picking sesuai profil order Anda?

Pilih metode dengan membaca profil order, bukan mengikuti tren. Empat parameter paling menentukan: jumlah baris (*lines*) per order, jumlah SKU per order, volume order harian, dan pola permintaan (B2C banyak-order-kecil versus B2B sedikit-order-besar). Dari sini pola kecocokannya cukup konsisten dan bisa dijadikan titik awal keputusan.

Urutan membacanya seperti ini:

1. **Hitung lines dan SKU per order.** Order e-commerce yang tipikalnya 1–3 baris menguntungkan cluster atau batch, karena satu perjalanan melayani banyak order sekaligus. Order B2B dengan puluhan baris lebih cocok zone atau wave.
2. **Ukur volume harian dan konsentrasinya.** Volume tinggi yang datang merata sepanjang hari mendukung waveless. Volume yang menumpuk menjelang *cut-off* kurir mendukung wave yang disinkronkan ke jadwal pengiriman.
3. **Perhatikan pola musiman.** Lonjakan tajam, misalnya saat Harbolnas 2024 yang menurut Kemendag (via pemberitaan) membukukan transaksi Rp31,2 triliun dan volume order 5–10 kali hari normal, menuntut metode yang bisa di-switch, bukan satu metode kaku sepanjang tahun.
4. **Tentukan toleransi latensi.** Jika order harus keluar secepatnya (same-day, order prioritas), wave justru menambah penundaan; waveless atau discrete lebih tepat.

Yang jarang disadari manajer gudang: menggabungkan metode itu normal, bukan kompromi setengah hati. Satu gudang lazim menjalankan *batched-cluster* untuk kanal B2C dan *timed-wave* untuk kanal B2B/wholesale secara bersamaan, dengan area dan aturan pelepasan yang berbeda per alur. Yang Anda butuhkan bukan satu metode "terbaik", melainkan WMS yang cukup fleksibel menjalankan beberapa metode di bawah satu atap.

## Bagaimana WMS mengeksekusi strategi picking secara nyata?

Di sinilah teori menjadi konfigurasi. WMS kelas enterprise seperti SAP Extended Warehouse Management (*SAP EWM*) menjalankan strategi picking lewat tiga lapisan: pembentukan dan pelepasan wave, penentuan rute pengambilan, dan konfirmasi per unit. Ia juga, bukan picker, yang memutuskan urutan jalan agar jarak tempuh ditekan.

Inti eksekusi wave ada pada *wave template*, yaitu skema yang mendefinisikan atribut semua wave yang dibentuk darinya dan menjadi basis *automatic wave assignment*. Atribut terpentingnya adalah *release method* (metode pelepasan), yang punya tiga nilai: **Automatic** (EWM menjalankan job yang melepas wave otomatis pada hari dan jam rilis), **Immediate** (wave dilepas begitu dibuat), dan **Manual** (dilepas kapan saja lewat monitor). Ketiga opsi ini terdokumentasi di [SAP Learning](https://learning.sap.com/courses/resource-management-in-sap-ewm/combining-items-in-waves). Dalam praktik implementasi EWM di lapangan, aturan pelepasan wave biasanya disetel mengikuti gelombang kerja (shift) dan cut-off kurir, bukan sekadar nilai default, agar tiap gelombang selesai tepat sebelum truk berangkat.

Untuk rute, EWM menyusun urutan pengambilan lewat mekanisme seperti *storage-type search sequence* dan aturan pengurutan *storage bin*, sehingga tugas dirangkai menekan jarak. Penamaan dan jalur konfigurasinya bervariasi antar rilis (embedded di S/4HANA, decentralized, atau Cloud), jadi yang menentukan adalah fungsinya, bukan nama transaksi tertentu. EWM juga dapat menyisipkan tugas putaway di sela tugas picking, konsep yang lazim disebut *interleaving* tugas: satu resource menuntaskan tugas dari satu antrean (*queue*) lalu mengambil tugas berikut dari antrean lain sesuai urutan yang dikonfigurasi, sehingga perjalanan kosong (*deadhead*) berkurang.

Konfirmasi pengambilan bisa lewat beberapa cara, dan di sini perlu presisi. RF *scanner* adalah mode konfirmasi bawaan. *Pick-by-voice* didukung melalui framework suara EWM dan umumnya diimplementasikan lewat solusi mitra bersertifikat. *Pick-to-light* pada dasarnya add-on perangkat keras dari mitra yang diintegrasikan ke EWM, bukan fitur native SAP. Aplikasi pendukung picker, misalnya untuk konfirmasi cepat atau menangani *exception* di luar alur normal, kerap dibangun cepat di atas [platform low-code](https://www.soltius.co.id/id/blog/low-code-and-no-code-platforms) seperti SAP Build tanpa menyentuh inti WMS.

## Kapan mengganti metode picking TIDAK akan menolong (dan apa akar masalahnya)

Mengganti metode picking tidak akan menolong bila akar masalahnya ada di data atau slotting, bukan di metode. Jika akurasi jeblok karena dimensi dan berat SKU salah di master data, atau barang cepat-laku diletakkan jauh dari area pengiriman, mengganti ke batch atau cluster justru memperbesar error karena lebih banyak order terpapar sekaligus. Metode mempercepat proses yang sudah benar; ia tidak memperbaiki proses yang keliru.

Bagian ini jarang ditulis kompetitor, padahal di sinilah uang paling sering terbuang. Urutan pembenahan yang masuk akal adalah menaikkan fondasi lebih dulu, baru mempercepat:

1. **Benahi master data.** Dimensi, berat, satuan, dan kode SKU harus konsisten. Tanpa ini, kartonisasi dan rute pengambilan apa pun akan meleset.
2. **Perbaiki slotting.** Letakkan SKU cepat-laku dekat jalur utama dan area pengiriman. Ini memangkas travel sebelum metode apa pun diterapkan.
3. **Baru pilih dan setel metode.** Setelah data dan tata letak benar, metode picking memberi hasil nyata, bukan sekadar memindahkan kekacauan lebih cepat.
4. **Pertimbangkan otomasi paling akhir.** Robot dan conveyor mahal; ia melipatgandakan proses yang sudah efisien, bukan menyelamatkan proses yang belum.

Ada juga trade-off yang tidak boleh diabaikan: metode yang mengelompokkan banyak order (batch dan cluster) menaikkan throughput tetapi menambah titik salah-sortir, sehingga konfirmasi per unit lewat scan, voice, atau light adalah pengaman, bukan opsi. Dan sebelum menyimpulkan "metode kami lambat", pastikan Anda benar-benar mengukurnya. Produktivitas picking seperti *lines per hour* dan rata-rata travel per order hanya bisa diperbaiki bila lebih dulu diukur; dashboard [business intelligence](https://www.soltius.co.id/id/blog/business-intelligence) yang menyorot metrik ini membantu membedakan masalah metode dari masalah data.

## FAQ (Pertanyaan yang Sering Diajukan)

### Apa metode picking tercepat?

Tidak ada satu metode tercepat untuk semua gudang. Kecepatan efektif bergantung pada profil order. Untuk banyak order kecil B2C, batch atau cluster picking biasanya paling produktif karena satu perjalanan melayani banyak order. Untuk order besar B2B dengan banyak baris, zone atau wave lebih unggul. Patokannya bukan metode, melainkan kecocokannya dengan jumlah lines per order dan volume harian.

### Apa itu cluster picking?

Cluster picking adalah metode saat satu picker mengambil untuk beberapa order sekaligus dalam satu jalan, lalu langsung memilahnya ke wadah atau tote terpisah per order di trolinya. Berbeda dari batch picking yang menunda pemilahan, cluster memilah saat pengambilan. Metode ini efektif untuk order e-commerce berbaris sedikit tetapi bervolume tinggi karena memangkas perjalanan tanpa langkah sortir terpisah.

### Kapan wave picking tidak cocok?

Wave picking kurang cocok saat order harus keluar secepat mungkin tanpa menunggu gelombang terbentuk, misalnya fulfillment same-day atau order prioritas yang datang sporadis. Membentuk dan menunggu wave menambah latensi. Dalam kondisi ini, waveless picking yang melepas tugas terus-menerus, atau discrete picking untuk order mendesak, lebih tepat daripada menahan order demi efisiensi gelombang.

### Apakah WMS wajib untuk batch picking?

Secara teknis batch picking bisa manual, tetapi tanpa WMS ia rapuh: pengelompokan order, penentuan rute, dan pemilahan kembali ke order yang benar rawan salah saat volume naik. WMS seperti SAP EWM mengotomatiskan pembentukan batch, menyusun pick path, dan mengikat tiap unit ke order lewat konfirmasi scan atau voice, sehingga kecepatan batch tidak dibayar dengan lonjakan error.

### Apa itu waveless picking?

Waveless picking (order streaming) adalah pendekatan saat WMS melepas tugas picking secara terus-menerus begitu order masuk, tanpa menunggu pembentukan gelombang terjadwal. Tujuannya menjaga picker selalu sibuk dan memangkas latensi order, cocok untuk operasi e-commerce bervolume tinggi yang butuh fleksibilitas. Ia menukar keteraturan gelombang dengan responsivitas real-time.

### Berapa persen waktu picker habis untuk berjalan?

Menurut literatur logistik klasik, perjalanan (travel) menyita sekitar 50%, bahkan hingga 55% dalam sebagian studi, dari total waktu order picking, sisanya terbagi untuk mencari, mengambil, dan aktivitas lain. Karena perjalanan tidak menambah nilai, inilah target pertama efisiensi: menata metode picking dan slotting sebelum berinvestasi pada otomasi. Angka ini acuan internasional, bukan data khusus Indonesia.

### Apakah SAP EWM mendukung semua metode picking ini?

Ya. SAP Extended Warehouse Management (EWM) mendukung strategi discrete, batch, cluster, zone, dan wave, termasuk wave management lewat wave template dengan metode pelepasan otomatis, langsung, atau manual. EWM juga menyusun pick path, menyisipkan tugas (interleaving) via manajemen resource, dan mengonfirmasi pengambilan lewat RF scanner atau pick-by-voice. SAP dinobatkan Leader di Gartner Magic Quadrant for WMS 2026.

## Kesimpulan

Picking akan tetap menjadi aktivitas termahal di gudang Anda selama perjalanan picker dibiarkan tanpa strategi. Kabar baiknya, memilih dan menggabungkan metode yang tepat adalah pengungkit termurah yang tersedia sebelum robot, asalkan data master dan slotting sudah benar lebih dulu. SAP sendiri dinobatkan sebagai Leader di [Gartner Magic Quadrant for Warehouse Management Systems 2026](https://news.sap.com/?p=242340) (terbit 4 Mei 2026), yang ke-12 kalinya berturut-turut, dengan EWM melayani pelanggan di 24 industri. Sebagai SAP Platinum Partner melalui United VARs dan bagian dari Metrodata Group sejak 1998, Soltius mendampingi perusahaan mengonfigurasi wave management dan strategi picking di SAP EWM lintas industri distribusi dan retail, dari pembacaan profil order hingga dukungan pasca go-live.

Untuk menelaah metode picking mana yang paling pas dengan profil order dan sistem *warehouse management system* Anda, jelajahi solusi yang ditangani Soltius di soltius.co.id.
