---
title: "Data Warehouse atau Data Mart Dulu? Menentukan Cakupan dan Strategi Bangun"
meta_title: "Data Warehouse vs Data Mart: Mulai dari Mana?"
meta_description: "Bangun data warehouse atau data mart dulu? Pahami beda cakupan, dependent vs independent mart, metodologi Inmon vs Kimball, plus kerangka keputusannya."
slug: "data-warehouse-atau-data-mart-dulu"
language: "id"
primary_keyword: "Data Warehouse Solutions"
secondary_keywords:
  - "data mart"
  - "enterprise data warehouse (EDW)"
  - "metodologi Inmon"
  - "metodologi Kimball"
  - "dependent vs independent data mart"
  - "conformed dimensions"
  - "single source of truth"
  - "SAP Datasphere"
  - "SAP BW/4HANA"
  - "star schema"
internal_links:
  - url: "https://www.soltius.co.id/id/blog/data-warehouse-solutions"
    anchor: "Data Warehouse Solutions"
  - url: "https://www.soltius.co.id/id/blog/business-intelligence"
    anchor: "Business Intelligence"
  - url: "https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud"
    anchor: "migrasi ERP ke cloud"
external_citations:
  - url: "https://help.sap.com/docs/SAP_DATASPHERE/c8a54ee704e94e15926551293243fd1d/6a396f6cf7ad41faa3a8cdd24f4e728a.html"
    context: "SAP Datasphere 'spaces' sebagai area aman untuk akuisisi/pemodelan data; federasi remote table tanpa replikasi"
  - url: "https://www.kimballgroup.com/data-warehouse-business-intelligence-resources/kimball-techniques/kimball-data-warehouse-bus-architecture/"
    context: "Conformed dimensions sebagai cara menghindari 'stovepipe' data mart; pengiriman bottom-up per proses bisnis"
brief_id: "data-warehouse-solutions-01"
target_word_count: 1650
publish_month: "2026-07-2"
word_count: 2086
---

# Data Warehouse atau Data Mart Dulu? Menentukan Cakupan dan Strategi Bangun

Banyak perusahaan menunda proyek data bukan karena tidak butuh, melainkan karena membayangkannya sebagai satu proyek raksasa lintas divisi yang mahal dan lama. Padahal keputusan pertama yang menentukan keberhasilan sering bukan "vendor mana", melainkan "seberapa besar cakupan yang saya bangun dulu": satu *data mart* untuk satu departemen, atau *enterprise data warehouse* penuh sekaligus. Artikel ini bukan perbandingan definisi biasa. Ini kerangka keputusan cakupan, kapan mulai kecil dan kapan langsung besar, yang menghubungkan pilihan itu dengan dua metodologi build klasik, Inmon dan Kimball, agar tim [Data Warehouse Solutions](https://www.soltius.co.id/id/blog/data-warehouse-solutions) Anda tidak salah langkah di awal.

> **Ringkas:** *Data mart* adalah subset penyimpanan data yang berfokus pada satu subjek atau departemen (misalnya penjualan atau keuangan), sedangkan *enterprise data warehouse* (EDW) menyatukan data seluruh perusahaan lintas divisi menjadi satu sumber kebenaran. Perbedaannya bukan sekadar ukuran, melainkan cakupan dan urutan bangun: mart bisa berdiri dulu, lalu tumbuh menjadi warehouse penuh.

Kita akan bahas empat hal secara berurutan: beda mendasar mart dan warehouse, pilihan dependent vs independent, metodologi Inmon vs Kimball, lalu kerangka keputusan konkret untuk kasus Anda. Penutupnya satu jebakan lapangan yang jarang diperingatkan.

## Data Mart vs Data Warehouse: Apa Bedanya dan Mengapa Urutannya Penting

Data mart adalah gudang data berlingkup satu subjek; ia menjadi "wajah depan" data satu departemen, misalnya penjualan atau logistik. Data warehouse menyimpan informasi seluruh perusahaan lintas topik (AWS, "What is a Data Mart?"). Bedanya bukan hanya besar-kecil, tetapi cakupan dan urutan bangun: mart bisa berdiri lebih dulu, lalu tumbuh menjadi warehouse penuh.

Perbedaan cakupan ini menentukan seberapa cepat Anda melihat hasil. Sebuah mart penjualan cukup menyatukan beberapa sumber di sekitar satu proses bisnis, sehingga timnya bisa menganalisis tanpa menunggu seluruh gudang data perusahaan rampung. Warehouse penuh, sebaliknya, menuntut kesepakatan lintas divisi soal definisi angka (apa itu "pelanggan aktif", bagaimana "pendapatan" dihitung) sebelum baris pertama masuk.

Di sinilah letak jebakan berpikir yang mahal. Perusahaan sering mengira harus memilih salah satu, seolah membangun mart berarti menyerah pada visi *single source of truth* (satu sumber data yang dipercaya semua divisi). Padahal banyak arsitektur data modern justru dirancang untuk dimulai dari satu lingkup, lalu diperluas. Toh keduanya melayani konsumen yang sama: dasbor dan laporan [Business Intelligence](https://www.soltius.co.id/id/blog/business-intelligence) yang dilihat manajemen setiap pagi. Yang berubah hanya dari mana data berasal dan seberapa luas cakupannya.

## Dependent vs Independent Data Mart: Pilihan yang Menentukan Masa Depan

Jika Anda memilih memulai dari data mart, pertanyaan lanjutannya lebih menentukan daripada kelihatannya: mart itu *dependent* atau *independent*? Dependent data mart menarik datanya dari data warehouse terpusat yang sudah ada, sehingga konsisten tapi bergantung pada warehouse. Independent data mart berdiri sendiri, menarik data langsung dari sistem sumber: cepat dibangun, tapi berisiko menjadi silo (AWS).

Perbedaan ini terdengar teknis, tetapi konsekuensinya sangat bisnis. Mart independen menggoda karena bisa "live" tanpa menunggu warehouse pusat. Masalahnya muncul ketika departemen kedua, lalu ketiga, membangun mart independennya sendiri, masing-masing menarik data dengan aturan sendiri dan mendefinisikan "penjualan bersih" dengan caranya sendiri. Enam bulan kemudian, rapat direksi kembali diisi perdebatan lama: angka finance tidak cocok dengan angka sales, persoalan yang seharusnya justru dituntaskan proyek data.

| Aspek | Dependent | Independent |
|---|---|---|
| Sumber data | Subset dari data warehouse terpusat | Langsung dari sistem sumber |
| Ketergantungan | Bergantung pada warehouse | Berdiri sendiri |
| Konsistensi | Tinggi (mewarisi standar warehouse) | Rentan tidak konsisten antar-mart |
| Kecepatan setup | Perlu warehouse lebih dulu | Cepat, relatif mudah |
| Risiko jangka panjang | Rendah (terintegrasi) | Menjadi silo baru |

Ada juga model *hybrid* yang menggabungkan sumber warehouse dan data eksternal. Intinya satu: kecepatan mart independen ada harganya, dan harga itu dibayar belakangan dalam bentuk integrasi ulang.

## Inmon atau Kimball: Metodologi Mana yang Cocok untuk Perusahaan Anda?

Inmon (top-down) membangun *enterprise data warehouse* ternormalisasi lebih dulu, lalu menurunkan data mart darinya. Pendekatan ini cocok untuk organisasi stabil yang mampu berinvestasi waktu dan biaya desain demi konsistensi jangka panjang. Kimball (bottom-up) membangun data mart dimensional per proses bisnis lebih dulu, lalu mengintegrasikannya, sehingga cocok bila fokusnya *quick win* satu departemen (ComputerWeekly).

Perlu ditegaskan sejak awal: "mart vs warehouse" dan "Inmon vs Kimball" adalah dua sumbu yang berbeda, dan sering dicampur secara keliru. Yang pertama soal cakupan, yang kedua soal metodologi membangun. Anda bisa memulai dari satu mart di bawah kedua metodologi; bedanya pada apa yang dibangun lebih dulu dan bagaimana potongan-potongan itu akhirnya menyatu.

Bill Inmon, yang mempopulerkan pendekatan top-down sejak awal 1990-an, menyimpan data pada level detail terendah (*atomic*) dalam model ternormalisasi hingga 3NF; warehouse menjadi pusat, dan mart dimensional diturunkan setelahnya. Ralph Kimball menempuh arah sebaliknya: bangun mart dimensional berbentuk *star schema* untuk satu proses bisnis, lalu rekatkan antar-mart lewat *conformed dimensions* dan arsitektur "data warehouse bus".

| Aspek | Inmon (Top-Down) | Kimball (Bottom-Up) |
|---|---|---|
| Titik mulai | Enterprise data warehouse dulu | Data mart per proses bisnis dulu |
| Model data | Ternormalisasi hingga 3NF | Dimensional (*star schema*) |
| Perekat integrasi | Struktur EDW terpusat | Conformed dimensions / data-warehouse bus |
| Waktu ke nilai pertama | Lebih lama (desain enterprise di muka) | Lebih cepat (*quick win* departemen) |
| Kekuatan utama | Konsistensi & tata kelola enterprise | Kecepatan & fleksibilitas |
| Risiko utama | Investasi awal besar, kurang adaptif | Silo bila tanpa conformed dimensions |

Tidak ada yang universal unggul. ComputerWeekly menyimpulkannya dengan jujur: pendekatan Inmon cocok untuk bisnis stabil yang sanggup menanggung waktu dan biaya desain, sedangkan bila optimasi lokal sudah memadai dan fokusnya kemenangan cepat, Kimball lebih masuk akal. Di lapangan, banyak organisasi justru memadukan keduanya: merencanakan integrasi ala top-down, tetapi mengirim hasil bertahap ala bottom-up.

## Kerangka Keputusan: Mulai dari Mart atau Langsung Warehouse?

Jawaban singkatnya bergantung pada lima faktor, bukan satu. Mulai dari satu data mart berprioritas tinggi jika sumber datanya sedikit, kebutuhan terpusat pada satu departemen, anggaran terbatas, dan urgensi hasil tinggi. Pilih membangun warehouse penuh lebih dulu jika kebutuhan lintas divisi sudah jelas, tata kelola menuntut satu definisi angka, dan tim data sudah matang.

Lima kriteria yang layak Anda timbang sebelum menentukan cakupan:

1. **Jumlah sumber data.** Satu-dua sistem sumber condong ke mart; belasan sistem lintas fungsi condong ke warehouse.
2. **Urgensi satu departemen.** Ada satu tim yang "berdarah-darah" menunggu laporan? Mart berprioritas menjawabnya lebih cepat.
3. **Anggaran dan toleransi risiko.** Warehouse penuh menuntut komitmen di muka; mart membagi investasi menjadi langkah-langkah kecil.
4. **Kematangan tim data.** Tanpa tata kelola dan keahlian pemodelan, warehouse besar rawan mangkrak di tengah jalan.
5. **Kebutuhan lintas divisi.** Bila keputusan strategis menuntut menggabungkan angka dari banyak divisi, tunda-tunda membangun fondasi terpusat justru menambah utang teknis.

Dalam praktik implementasi, memulai dari satu domain berprioritas tinggi lalu memperluas sering menurunkan risiko dibanding menargetkan seluruh perusahaan sekaligus. Kabar baiknya, satu platform bisa menampung kedua strategi. **SAP Datasphere**, layanan *data warehouse* berbasis cloud generasi penerus SAP Data Warehouse Cloud, mengatur pekerjaan dalam *spaces*: area aman tempat satu tim atau domain mengakuisisi, menyiapkan, dan memodelkan data, lalu membagikannya ke *space* lain saat siap. Secara *default*, *remote table*-nya memfederasi data tanpa replikasi, artinya data diakses langsung dari sistem sumber, bukan digandakan (SAP Help Portal). Anda bisa mulai per-domain, lalu difederasi tanpa membangun ulang.

Bagi perusahaan yang sudah punya lanskap SAP *on-premise* atau *private cloud*, **SAP BW/4HANA** menawarkan jalur serupa lewat arsitektur berlapis LSA++ (*Layered Scalable Architecture*), yang lapisannya tidak wajib: Anda membangun hanya lapisan yang diperlukan. Keduanya bahkan bisa dikombinasikan menjadi solusi *hybrid*, dan SAP menyatakan BW/4HANA didukung setidaknya hingga 2040. Poinnya bukan produknya, melainkan bahwa pendekatan bertahap adalah pilihan arsitektur yang sah, bukan kompromi.

| Aspek | SAP Datasphere | SAP BW/4HANA |
|---|---|---|
| Deployment | Cloud (DWaaS) | On-premise / private cloud |
| Unit kerja | Spaces (per domain/tim) | Lapisan LSA++ (opsional) |
| Akses lintas sumber | Federasi default (tanpa replikasi) | Virtualisasi berlapis |
| Kombinasi | Hybrid dengan BW/4HANA | Hybrid dengan Datasphere |
| Dukungan | Rilis SaaS berkelanjutan | Hingga 2040 (selaras S/4HANA) |

Keputusan cakupan data ini juga jarang berdiri sendiri; ia sering menyertai keputusan platform yang lebih besar, seperti [migrasi ERP ke cloud](https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud), karena lapisan data dan lapisan aplikasi idealnya direncanakan bersamaan.

## Jebakan "Spaghetti of Marts": Ketika Mendahulukan Cepat Justru Menciptakan Silo Baru

Bagian ini jarang ditulis kompetitor, padahal justru di sinilah kegagalan proyek data paling sering bermula. Memulai cepat dengan banyak mart independen tanpa standar bersama menghasilkan apa yang praktisi sebut *stovepipe*, yaitu mart-mart terisolasi yang tidak bisa disatukan. Kimball Group menegaskan cara menghindarinya: memakai *conformed dimensions*, yakni dimensi master standar yang dikelola sekali dan dipakai ulang lintas mart.

Yang penting dipahami: "mulai dari mart" tidak otomatis berarti menciptakan silo. Yang menciptakan silo adalah mart *independen* tanpa aturan bersama. Mart yang dependent, atau mart yang dibangun dengan conformed dimensions sejak awal, justru bisa dimulai cepat sekaligus tetap terintegrasi. Inilah pembeda yang sering hilang dalam perbandingan sederhana di internet.

Conformed dimensions bekerja seperti bahasa bersama. Ketika dimensi "Pelanggan" dan "Produk" didefinisikan satu kali dan dipakai ulang oleh mart penjualan maupun mart keuangan, kedua tim otomatis berbicara dalam kosakata yang sama, sehingga angka bisa di-*drill across* dan digabung lintas proses bisnis (Kimball Group). Menurut Kimball Group, matriks bus enterprise justru memadukan perencanaan integrasi top-down dengan pengiriman bottom-up bertahap, satu proses bisnis pada satu waktu. Jadi Anda tidak perlu memilih antara cepat dan konsisten; Anda hanya perlu merencanakan integrasi sebelum mart pertama dibangun.

Praktisnya, sebelum membangun mart pertama, sepakati dulu daftar dimensi bersama yang akan dipakai lintas departemen. Pekerjaan ini tidak glamor dan sering ditunda karena "nanti saja saat sudah banyak mart". Justru di situ silo lahir. Data silo, seperti diakui pemerintah dalam agenda transformasi digital nasional (Komdigi), tetap menjadi tantangan nyata, dan ironisnya proyek data yang buru-buru bisa menciptakan silo baru, bukan menghapusnya.

## FAQ (Pertanyaan yang Sering Diajukan)

### Apa itu data mart?

Data mart adalah subset penyimpanan data yang berfokus pada satu subjek atau unit bisnis, misalnya penjualan, keuangan, atau logistik. Berbeda dari data warehouse yang menyimpan informasi seluruh perusahaan lintas divisi, data mart menjadi "wajah depan" data satu departemen, sehingga tim terkait dapat menganalisis area mereka tanpa menavigasi seluruh gudang data perusahaan (AWS).

### Kapan perusahaan cukup pakai data mart saja, bukan data warehouse penuh?

Data mart memadai ketika kebutuhan analitik masih terpusat pada satu departemen, sumber datanya sedikit, anggaran terbatas, dan urgensi hasil tinggi. Jika kebutuhan lintas divisi dan "satu sumber kebenaran" belum mendesak, memulai dari satu mart berprioritas menurunkan risiko dan mempercepat nilai, selama direncanakan agar bisa berkembang, bukan menjadi silo baru.

### Apa perbedaan dependent dan independent data mart?

Dependent data mart mengambil datanya dari data warehouse terpusat yang sudah ada, sehingga konsisten tetapi bergantung pada warehouse itu. Independent data mart berdiri sendiri dan menarik data langsung dari sistem sumber, jadi cepat dibangun tetapi berisiko menjadi silo terisolasi jika banyak dibuat tanpa standar bersama (AWS). Ada juga hybrid yang menggabungkan sumber warehouse dan eksternal.

### Metodologi Inmon atau Kimball, mana yang cocok untuk perusahaan saya?

Inmon (top-down) membangun enterprise data warehouse ternormalisasi lebih dulu, lalu menurunkan mart; ini cocok untuk organisasi stabil yang mampu berinvestasi waktu dan biaya desain demi konsistensi. Kimball (bottom-up) membangun mart dimensional per proses bisnis lebih dulu dan mengintegrasikannya lewat conformed dimensions, sehingga cocok bila fokusnya quick win. Tidak ada yang universal unggul (ComputerWeekly).

### Apakah data mart bisa berkembang menjadi data warehouse?

Bisa, dan inilah kekuatan pendekatan bottom-up Kimball: mart per proses bisnis dibangun bertahap, lalu diintegrasikan menjadi warehouse enterprise melalui conformed dimensions, yaitu dimensi master standar yang dikelola sekali dan dipakai ulang. Kuncinya mendesain mart sejak awal agar "menyambung" (dependent atau conformed), bukan berdiri sendiri, sehingga tidak menjadi stovepipe yang sulit disatukan (Kimball Group).

### Berapa lama membangun data mart dibanding data warehouse penuh?

Sebagai rentang praktik lapangan, bukan janji, data mart departemen berlingkup fokus umumnya bisa "live" jauh lebih cepat, dalam hitungan minggu hingga beberapa bulan, karena cakupannya sempit dan satu sumber utama. Enterprise data warehouse penuh menuntut desain lintas divisi dan tata kelola, sehingga biasanya memakan berbulan-bulan. Angka pastinya bergantung pada jumlah sumber, kualitas data, dan kematangan tim.

### Apakah SAP Datasphere dan SAP BW/4HANA mendukung pendekatan bertahap?

Ya. SAP Datasphere mengatur pekerjaan dalam spaces, yaitu area aman tempat satu tim atau domain mengakuisisi, menyiapkan, dan memodelkan data, lalu membagikannya ke space lain; remote table-nya memfederasi data tanpa replikasi. SAP BW/4HANA memakai arsitektur berlapis LSA++ yang lapisannya tidak wajib, jadi hanya yang diperlukan yang dibangun. Keduanya memungkinkan mulai per-domain lalu difederasi (SAP Help Portal).

## Kesimpulan

Keputusan pertama dalam proyek data bukan soal vendor, melainkan cakupan: mulai kecil dari satu mart berprioritas, atau bangun warehouse penuh sekaligus. Keduanya sah, asalkan Anda merencanakan integrasi sejak awal lewat dependent mart atau conformed dimensions, bukan menumpuk silo independen yang harus dibongkar ulang nanti. Metodologi Inmon dan Kimball hanyalah dua jalan menuju tujuan yang sama: data yang konsisten dan dipercaya. Melalui layanan Data and AI Consulting, Soltius membantu merancang arsitektur data yang bisa dimulai dari satu lingkup berprioritas lalu tumbuh menjadi satu sumber kebenaran perusahaan, di atas platform seperti SAP Datasphere atau SAP BW/4HANA, dengan pengalaman menskala dari lingkup departemen hingga enterprise.

Untuk mendiskusikan strategi dan cakupan data warehouse yang paling pas bagi tahap bisnis Anda, kunjungi soltius.co.id.
