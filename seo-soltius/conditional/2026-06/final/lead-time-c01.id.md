---
title: "Apa Itu Lead Time dalam Supply Chain dan Cara Menghitungnya"
meta_title: "Apa Itu Lead Time & Cara Menghitungnya (Rumus + Contoh)"
meta_description: "Lead time adalah total waktu dari pesanan dibuat hingga barang diterima. Pelajari pengertian, jenis, rumus, dan cara menghitung lead time lengkap dengan contoh."
slug: "apa-itu-lead-time-cara-menghitung"
language: "id"
primary_keyword: "lead time"
secondary_keywords:
  - "cara menghitung lead time"
  - "rumus lead time"
  - "jenis lead time"
  - "cumulative lead time"
  - "reorder point"
  - "safety stock"
  - "cara mengurangi lead time"
  - "lead time supply chain"
  - "demand planning"
  - "manajemen persediaan"
internal_links:
  - url: "https://www.soltius.co.id/id/blog/digital-manufaktur-sistem"
    anchor: "sistem manufaktur digital"
  - url: "https://www.soltius.co.id/id/blog/konsep-warehouse-management-system-yang-wajib-anda-tahu"
    anchor: "manajemen gudang"
  - url: "https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud"
    anchor: "sistem ERP modern berbasis cloud"
external_citations:
  - url: "https://www.ascm.org/learning-development/certifications-credentials/dictionary/"
    context: "Definisi standar lead time dan cumulative lead time dari ASCM/APICS Supply Chain Dictionary"
  - url: "https://ekonomi.bisnis.com/read/20231010/9/1702763/ongkos-logistik-ri-1429-persen-bappenas-negara-maju-8-persen"
    context: "Biaya logistik Indonesia 14,29% dari PDB (2023) menurut Bappenas/BPS, vs negara maju ~8%"
  - url: "https://www.gartner.com/en/newsroom/press-releases/2026-04-07-gartner-forecasts-supply-chain-management-software-with-agentic-ai-will-grow-to-53-billion-in-spend-by-2030"
    context: "Proyeksi Gartner: belanja perangkat lunak SCM ber-AI tumbuh menjadi $53 miliar pada 2030"
brief_id: "lead-time-c01"
target_word_count: 1850
publish_month: "2026-06"
date_modified: "2026-06-17"
word_count: 1978
---

# Apa Itu Lead Time dalam Supply Chain dan Cara Menghitungnya

Setiap manajer operasional dan procurement pernah terjepit di antara dua kerugian yang berlawanan: stok habis tepat saat pesanan pelanggan masuk, atau gudang sesak oleh barang yang menua karena terlalu banyak dipesan. Akar keduanya hampir selalu sama, yaitu **lead time** yang tidak dipahami atau tidak terukur dengan benar. Artikel ini menjawab pertanyaan paling dasar sekaligus paling sering disalahpahami, mulai dari pengertian, jenis, rumus, hingga cara menghitung lead time, dengan contoh angka yang langsung bisa Anda pakai. Persoalan ini bukan sekadar urusan gudang. Di hilir, ia menentukan kapan harus memesan ulang, seberapa besar stok pengaman, dan apakah perencanaan persediaan Anda berpijak pada data atau pada tebakan.

> **Secara singkat:** Lead time adalah total waktu yang dibutuhkan sejak pesanan dibuat hingga barang atau produk selesai diterima. Dalam rantai pasok, lead time mencakup waktu pengadaan bahan, proses produksi, dan pengiriman. Inilah tolok ukur utama seberapa cepat perusahaan dapat memenuhi permintaan pelanggan dan mengelola persediaan secara efisien.

Melalui artikel ini, kita akan membahas definisi lead time dan bedanya dari *cycle time*, jenis-jenisnya, rumus serta contoh perhitungannya, hubungannya dengan *reorder point* dan *safety stock*, mengapa angka rata-rata bisa menyesatkan, dan langkah-langkah praktis untuk memperpendeknya.

{IMAGE_01: Infografik alur horizontal empat tahap lead time — Pemesanan (2 hari) → Produksi (5 hari) → Pengiriman (3 hari) → Penerimaan, dengan panah garis waktu di bawahnya dan total "10 hari", lalu satu baris tambahan "Cumulative Lead Time" untuk produk multi-tier; gaya flat vector, warna biru-putih korporat, teks Bahasa Indonesia}

## Apa Itu Lead Time?

Lead time adalah rentang waktu total dari saat sebuah proses dimulai hingga selesai. Dalam konteks rantai pasok, ia dihitung dari pesanan dibuat sampai barang diterima. Cakupannya meliputi pemrosesan pesanan, produksi di pemasok, transportasi, dan penerimaan. Inilah tolok ukur paling fundamental untuk menilai seberapa responsif rantai pasok Anda terhadap permintaan.

Istilah ini punya definisi baku. *ASCM Supply Chain Dictionary* edisi ke-19, yang diterbitkan badan sertifikasi rantai pasok global ASCM (dahulu APICS) dan memuat lebih dari 5.000 istilah, mendefinisikan lead time sebagai total waktu antara dimulainya sebuah proses dan penyelesaiannya. Definisi ini dipakai konsisten di seluruh literatur manajemen rantai pasok.

Satu kekeliruan yang sering muncul: menyamakan lead time dengan *cycle time*. Keduanya berbeda. **Lead time** mengukur seluruh waktu dari permintaan hingga penerimaan, termasuk antrean dan masa tunggu. **Cycle time** hanya mengukur waktu pengerjaan aktif setelah proses dimulai. Sebuah pesanan bisa saja memiliki lead time 10 hari, padahal cycle time produksinya cuma 3 hari karena sisanya 7 hari adalah antrean dan transit. Membaurkan keduanya membuat perusahaan salah menilai di mana sebenarnya waktu terbuang.

Mengapa metrik ini penting? Karena lead time adalah variabel yang menghubungkan permintaan dengan persediaan. Lead time yang panjang memaksa Anda menyimpan stok lebih banyak agar tidak kehabisan. Lead time yang tidak stabil membuat perencanaan meleset. Dalam konteks Indonesia, biaya logistik nasional masih 14,29% dari PDB pada 2023 menurut pengukuran bersama Bappenas dan BPS, jauh di atas negara maju seperti Singapura dan Jepang yang berada di kisaran 8%. Maka kemampuan mengelola lead time secara presisi di sini bukan sekadar urusan efisiensi gudang, melainkan daya saing.

## Jenis-Jenis Lead Time

Ada empat jenis lead time utama dalam rantai pasok, dibedakan berdasarkan tahap dan pihak yang mengontrolnya: lead time pengadaan, produksi, pengiriman, dan pelanggan. Di atas keempatnya ada *cumulative lead time*, yaitu penjumlahan seluruh tahap secara berurutan dari komponen paling awal hingga produk akhir. Memahami pemilahan ini penting karena tiap jenis dikendalikan pihak yang berbeda.

Membedah lead time per komponen membantu Anda tahu di mana harus menekan. Lead time produksi, misalnya, hidup di lantai pabrik dan bisa dipersingkat lewat penjadwalan yang lebih baik atau penerapan [sistem manufaktur digital](https://www.soltius.co.id/id/blog/digital-manufaktur-sistem) yang memberi visibilitas real-time atas alur kerja. Sementara lead time pengiriman ada di tangan penyedia logistik, sehingga strateginya berbeda.

| Jenis Lead Time | Definisi | Contoh (Ilustrasi) | Siapa yang Mengontrol |
|---|---|---|---|
| Lead Time Pengadaan (material/supply) | Waktu dari *purchase order* hingga material diterima di gudang | Pesan komponen ke pemasok, tiba dalam 7 hari | Pemasok (vendor) |
| Lead Time Produksi (manufacturing) | Waktu dari bahan baku masuk produksi hingga produk jadi selesai | Proses manufaktur di pabrik: 5 hari | Tim produksi internal |
| Lead Time Pengiriman (delivery) | Waktu dari produk siap di gudang hingga tiba di penerima | Ekspedisi Jakarta–Surabaya: 2 hari | Penyedia logistik/forwarder |
| Lead Time Pelanggan (customer) | Total waktu dari pesanan pelanggan hingga barang diterima | Proses B2B order sampai antar: 12 hari | Seluruh rantai (end-to-end) |
| Cumulative Lead Time | Penjumlahan semua tahap berurutan (multi-tier) | Bahan baku 10 + produksi 7 + kirim 5 = 22 hari | Seluruh rantai pasok |

*Cumulative lead time* layak diperhatikan khusus oleh pelaku manufaktur dan distribusi. Dalam perencanaan kebutuhan material (*Material Requirements Planning*/MRP), horizon perencanaan harus mencakup keseluruhan cumulative lead time. Jika horizonnya lebih pendek, pemesanan bahan baku tingkat awal akan selalu terlambat, dan keterlambatan itu menjalar ke seluruh rantai.

## Bagaimana Cara Menghitung Lead Time? (Rumus + Contoh)

Rumus dasarnya sederhana: **Lead Time = Waktu Pemesanan + Waktu Produksi + Waktu Pengiriman**. Jumlahkan durasi setiap tahap dalam satuan waktu yang sama (biasanya hari kerja). Untuk produk multi-komponen, Anda menghitung *cumulative lead time* dengan menjumlahkan seluruh tahap berurutan dari bahan baku terendah hingga produk jadi sampai ke pelanggan.

Mari pakai contoh konkret. Misalkan Anda memesan satu batch produk:

1. **Waktu pemesanan** (dari PO dikirim sampai pemasok mengonfirmasi dan menyiapkan): **2 hari**
2. **Waktu produksi** (pemrosesan di pabrik hingga produk jadi): **5 hari**
3. **Waktu pengiriman** (dari gudang pemasok sampai diterima di gudang Anda): **3 hari**

> **Lead Time = 2 + 5 + 3 = 10 hari** *(ilustrasi perhitungan — angka fiktif untuk pemahaman konsep)*

Untuk produk yang dirakit dari banyak komponen, perhitungan berlapis. Bayangkan bahan baku perlu 10 hari untuk diadakan, sub-perakitan dan produksi 7 hari, lalu pengiriman ke pelanggan 5 hari. Maka *cumulative lead time*-nya adalah 10 + 7 + 5 = 22 hari. Angka inilah, bukan lead time satu tahap, yang harus jadi acuan saat Anda menjanjikan tanggal kirim ke pelanggan untuk produk kompleks.

Catatan praktis: rumus penjumlahan ini mengasumsikan tahap berjalan berurutan (*sequential*). Jika beberapa tahap bisa berlangsung paralel, misalnya dua komponen diproduksi bersamaan, yang menentukan adalah jalur terpanjang, bukan total seluruh angka. Banyak perhitungan manual keliru di titik ini dengan menjumlahkan semuanya begitu saja.

{IMAGE_02: Grafik garis stok turun selama lead time — sumbu vertikal jumlah stok, sumbu horizontal waktu; tampilkan garis Reorder Point sebagai trigger memesan ulang, lapisan Safety Stock di bawah sebagai buffer, dua skenario (dengan safety stock cukup = aman; tanpa safety stock = garis menyentuh nol/stockout); gaya grafik garis bersih dengan area berwarna, teks Bahasa Indonesia}

## Lead Time, Reorder Point, dan Safety Stock: Hubungan yang Menentukan Stok Anda

Lead time tidak berdiri sendiri. Ia adalah input utama dari dua keputusan persediaan yang menentukan apakah Anda kehabisan stok atau kelebihan: kapan memesan ulang (*reorder point*) dan berapa banyak cadangan pengaman (*safety stock*). Rumus bakunya: **Reorder Point = (Rata-rata Pemakaian Harian × Lead Time) + Safety Stock**.

Mari sambungkan dengan contoh dari tadi. Anggap lead time rata-rata pemasok 10 hari, pemakaian harian 50 unit, dan Anda menetapkan safety stock 100 unit:

| Parameter | Nilai (Ilustrasi) |
|---|---|
| Lead time rata-rata dari pemasok | 10 hari |
| Rata-rata pemakaian harian | 50 unit/hari |
| Safety stock (buffer pengaman) | 100 unit |
| **Reorder Point** | **(10 × 50) + 100 = 600 unit** |

Artinya: begitu stok menyentuh 600 unit, saat itulah Anda memesan ulang, supaya tidak kehabisan selama 10 hari menunggu kiriman datang. *Safety stock* berperan sebagai bantalan terhadap hal-hal yang tak terduga, baik lonjakan permintaan maupun keterlambatan pemasok.

Rumus safety stock sendiri punya beberapa versi. Untuk usaha dengan data terbatas, versi sederhananya: **Safety Stock = (Pemakaian Harian Maks × Lead Time Maks) − (Pemakaian Harian Rata-rata × Lead Time Rata-rata)**. Untuk perusahaan dengan data historis lead time yang memadai, versi statistik lebih akurat: **Safety Stock = Z × σLT**, di mana Z adalah skor yang mencerminkan target *service level* (misalnya Z = 1,65 untuk service level 95%) dan σLT adalah deviasi standar permintaan selama lead time. Pakai versi yang sesuai dengan kematangan data Anda; rumus statistik tidak ada gunanya jika datanya tidak ada.

Karena ketiga konsep ini saling terhubung, mereka adalah keputusan tingkat persediaan dan gudang yang seharusnya dikelola dalam satu sistem terpadu, bukan di tiga spreadsheet terpisah. Ini juga alasan mengapa kebijakan [manajemen gudang](https://www.soltius.co.id/id/blog/konsep-warehouse-management-system-yang-wajib-anda-tahu) yang rapi menjadi prasyarat: data stok yang akurat adalah bahan baku dari setiap perhitungan reorder point.

## Mengapa Lead Time Rata-Rata Bisa Menyesatkan

Ini bagian yang jarang dibahas, padahal paling menentukan. Lead time rata-rata bisa menipu karena yang sebenarnya membahayakan persediaan Anda bukan nilai rata-ratanya, melainkan *variabilitas*-nya. Pemasok dengan lead time rata-rata pendek tapi fluktuatif justru lebih berisiko, dan menuntut safety stock lebih besar, ketimbang pemasok yang lebih lambat tapi konsisten.

Lihat perbandingan berikut:

| Skenario | Lead Time Rata-Rata | Deviasi Standar | Risiko Stockout | Implikasi Safety Stock |
|---|---|---|---|---|
| Pemasok A (stabil) | 10 hari | ±1 hari | Rendah | Kecil |
| Pemasok B (tidak menentu) | 8 hari | ±5 hari | Tinggi | Besar |

Sekilas Pemasok B terlihat "lebih cepat" karena rata-ratanya 8 hari. Tetapi deviasi ±5 hari berarti kiriman bisa datang di hari ke-3 atau molor sampai hari ke-13. Justru ketidakpastian itulah yang harus ditutup oleh safety stock. Inilah sebabnya safety stock tidak boleh dihitung hanya dari rata-rata: dua pemasok dengan rata-rata mirip bisa menuntut buffer yang jauh berbeda.

Persoalannya, melacak deviasi lead time per pemasok, per produk, secara manual nyaris mustahil saat skala bertambah. Spreadsheet masih memadai untuk bisnis dengan sedikit SKU dan pemasok tunggal. Namun begitu perusahaan mengelola ratusan SKU dengan pola permintaan berbeda (dalam praktik, banyak organisasi mulai kewalahan di kisaran beberapa ratus SKU; ini patokan lapangan, bukan ambang resmi), menghadapi variabilitas lead time dari banyak vendor, atau beroperasi di beberapa gudang, rumus di spreadsheet mulai basi dan rawan salah. Di titik itulah perhitungan manual perlu beralih ke disiplin *demand planning* (perencanaan permintaan) yang mengelola variabilitas secara otomatis di atas fondasi data yang terjaga, biasanya bersumber dari [sistem ERP modern berbasis cloud](https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud).

{IMAGE_03: Tabel perbandingan dua kolom "Spreadsheet Manual" vs "Sistem Demand Planning Terintegrasi (mis. SAP IBP)" dengan 6 baris (jumlah SKU, jumlah pemasok, lokasi gudang, pola permintaan, update data, risiko error); header biru tua, ikon di tiap baris, gaya tabel minimalis screenshottable, teks Bahasa Indonesia}

## Cara Mengurangi (Mempercepat) Lead Time

Memperpendek lead time menekan kebutuhan safety stock sekaligus mempercepat pemenuhan pesanan. Ada enam pendekatan yang umum dipakai di lapangan, dari yang paling cepat dieksekusi hingga yang menuntut perubahan sistem:

- **Negosiasi kontrak pemasok.** Sepakati komitmen waktu kirim dan penalti keterlambatan dalam kontrak, bukan sekadar harga termurah.
- **Diversifikasi pemasok.** Hindari ketergantungan pada satu sumber; pemasok alternatif menjadi katup pengaman saat satu vendor terlambat.
- **Otomasi proses pemesanan internal.** Banyak lead time membengkak bukan di pemasok, melainkan di alur persetujuan PO internal yang lambat.
- **Buffer stok strategis (DDMRP).** Pendekatan *Demand-Driven Replenishment* menempatkan cadangan di titik-titik kritis rantai pasok untuk meredam variabilitas lead time. DDMRP cocok untuk rantai pasok panjang dengan permintaan fluktuatif; untuk produksi lot kecil atau *make-to-order* sederhana, MRP klasik masih relevan.
- **Visibilitas real-time.** Memantau status pesanan dan pengiriman secara langsung memangkas waktu yang hilang karena menebak-nebak posisi barang.
- **Perencanaan permintaan terintegrasi.** Sistem yang memperbarui lead time aktual secara otomatis membuat reorder point dan safety stock selalu mencerminkan kondisi nyata, bukan angka tahun lalu.

Empat pendekatan terakhir mengarah ke satu hal: perangkat perencanaan terintegrasi. Inilah peran platform seperti **SAP Integrated Business Planning (SAP IBP)**, solusi perencanaan rantai pasok berbasis cloud yang menjadi penerus sistem perencanaan berbasis on-premise milik SAP. Lewat modul seperti *SAP IBP for Demand* (peramalan permintaan berbasis statistik dan *machine learning*), *SAP IBP for Response and Supply* (yang secara eksplisit memperhitungkan kapasitas dan lead time), *SAP IBP for Inventory* (optimasi stok terhadap service level), serta *Supply Chain Control Tower* untuk visibilitas ujung ke ujung, kalkulasi yang tadinya manual berjalan otomatis dengan mempertimbangkan variabilitas aktual. Investasi pada perangkat lunak semacam ini bukan tren sesaat: Gartner memproyeksikan belanja perangkat lunak rantai pasok ber-AI tumbuh menjadi $53 miliar pada 2030. Dalam praktik implementasi rantai pasok lintas industri, kami melihat lompatan terbesar justru datang saat perusahaan berhenti memperdebatkan rumus dan mulai mengintegrasikan datanya.

## FAQ (Pertanyaan yang Sering Diajukan)

### Apa itu lead time dalam supply chain?
Lead time dalam supply chain adalah total waktu sejak pesanan dibuat hingga barang diterima, mencakup waktu pemesanan, produksi di pemasok, dan pengiriman. Dalam praktik, lead time menjadi tolok ukur kecepatan rantai pasok: semakin pendek dan stabil, semakin mudah perusahaan merencanakan persediaan dan memenuhi permintaan pelanggan tepat waktu.

### Apa rumus dan cara menghitung lead time?
Rumus dasarnya: **Lead Time = Waktu Pemesanan + Waktu Produksi + Waktu Pengiriman**. Contoh ilustrasi: jika pemesanan butuh 2 hari, produksi 5 hari, dan pengiriman 3 hari, total lead time = 10 hari. Untuk produk multi-komponen, *cumulative lead time* dihitung dengan menjumlahkan seluruh tahap dari bahan baku terendah hingga produk jadi sampai ke pelanggan.

### Apa saja jenis lead time?
Ada empat jenis utama: (1) lead time pengadaan, dari pemesanan hingga material diterima dari pemasok; (2) lead time produksi, dari bahan baku hingga produk jadi; (3) lead time pengiriman, dari gudang pemasok hingga gudang pembeli; dan (4) lead time pelanggan, dari pesanan pelanggan hingga barang diterima. *Cumulative lead time* mencakup semua tahap secara berurutan.

### Apa perbedaan lead time dan cycle time?
Lead time mengukur total waktu dari permintaan hingga penerimaan, termasuk waktu tunggu dan antrean. Cycle time hanya mengukur waktu pengerjaan aktif setelah proses dimulai, tanpa menghitung waktu tunggu. Contohnya, sebuah pesanan bisa memiliki lead time 10 hari, tetapi cycle time produksinya hanya 3 hari karena 7 hari sisanya adalah antrean dan transit.

### Apa hubungan lead time dengan reorder point dan safety stock?
Ketiganya membentuk fondasi manajemen persediaan: **Reorder Point = (Rata-rata Pemakaian Harian × Lead Time) + Safety Stock**. Reorder point menentukan kapan harus memesan ulang, sedangkan safety stock adalah buffer yang melindungi dari fluktuasi lead time dan permintaan. Semakin panjang dan tidak pasti lead time, semakin besar safety stock yang dibutuhkan untuk menjaga service level.

### Bagaimana cara mengurangi lead time?
Enam pendekatan utama: negosiasi kontrak pemasok untuk komitmen waktu kirim; diversifikasi pemasok agar tak bergantung satu sumber; otomasi proses pemesanan internal; penerapan buffer stok strategis (DDMRP) di titik kritis; visibilitas real-time atas status pengiriman; dan perencanaan permintaan terintegrasi yang memperbarui lead time aktual secara otomatis.

### Apa itu cumulative lead time?
Cumulative lead time adalah total waktu terpanjang untuk menyelesaikan seluruh rantai produksi, dari pengadaan komponen paling awal hingga produk jadi diterima pelanggan. Konsep ini penting dalam perencanaan MRP: horizon perencanaan harus mencakup cumulative lead time agar pemesanan material tidak terlambat. Contoh ilustrasi: bahan baku 10 hari + produksi 7 hari + pengiriman 5 hari = 22 hari.

### Kapan perhitungan lead time manual perlu beralih ke sistem demand planning terintegrasi?
Perhitungan manual di spreadsheet biasanya cukup untuk bisnis dengan sedikit SKU dan pemasok tunggal. Namun saat perusahaan mengelola ratusan SKU dengan pola permintaan beragam, menghadapi variabilitas lead time banyak pemasok, atau beroperasi di banyak gudang, spreadsheet tak lagi akurat. Platform seperti SAP IBP mengotomasi kalkulasi ini secara real-time dengan mempertimbangkan variabilitas aktual, bukan sekadar rata-rata.

## Kesimpulan

Lead time adalah fondasi dari hampir setiap keputusan persediaan: kapan memesan, berapa banyak menyimpan, dan apa yang dijanjikan ke pelanggan. Memahami jenis-jenisnya, menghitungnya dengan benar termasuk untuk produk multi-tier, lalu mengelola variabilitasnya, lebih menentukan ketimbang sekadar mengejar angka rata-rata yang rendah. Selama skala masih kecil, spreadsheet yang rapi sudah memadai. Begitu kompleksitas naik, perencanaan terintegrasi menjadi pembeda antara rantai pasok yang reaktif dan yang terkendali. Sebagai SAP Platinum Partner melalui United VARs dengan pengalaman implementasi rantai pasok lintas industri (manufaktur, distribusi, hingga perkebunan), Soltius membantu perusahaan menerapkan solusi *demand planning* seperti SAP IBP, dari asesmen kebutuhan hingga dukungan pasca go-live.

Untuk mendiskusikan kesiapan perencanaan rantai pasok dan demand planning di perusahaan Anda, kunjungi soltius.co.id.
