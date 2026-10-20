---
title: "Slotting Gudang: Cara WMS Memangkas Waktu Tempuh Picking"
meta_title: "Warehouse Management System: Slotting untuk Picking"
meta_description: "Slotting gudang dengan warehouse management system: cara menata SKU berdasarkan velocity, prinsip golden zone, ABC analysis, dan kapan perlu re-slotting."
slug: "warehouse-management-system-slotting-gudang"
language: "id"
primary_keyword: "warehouse management system"
secondary_keywords:
  - "slotting gudang"
  - "warehouse slotting"
  - "ABC analysis slotting"
  - "product velocity"
  - "golden zone gudang"
  - "re-slotting"
  - "pick density"
  - "waktu tempuh picking"
  - "storage bin allocation"
  - "SAP EWM slotting"
internal_links:
  - url: "https://www.soltius.co.id/id/blog/konsep-warehouse-management-system-yang-wajib-anda-tahu"
    anchor: "warehouse management system"
  - url: "https://www.soltius.co.id/id/blog/business-intelligence"
    anchor: "business intelligence"
  - url: "https://www.soltius.co.id/id/blog/data-warehouse-solutions"
    anchor: "data warehouse solutions"
external_citations:
  - url: "https://research.rug.nl/en/publications/design-and-control-of-warehouse-order-picking-a-literature-review/"
    context: "Perjalanan ~50% waktu order picker; order picking ~55% biaya operasi gudang (De Koster, Le-Duc & Roodbergen, 2007)"
  - url: "https://help.sap.com/doc/saphelp_ewm700_ehp02/7.0.2/en-US/4b/c46aed5a304b41e10000000a42189e/content.htm"
    context: "Definisi resmi fungsi Slotting SAP EWM dan parameter yang ditentukannya (putaway control indicator, storage section, bin type, max quantity)"
brief_id: "warehouse-management-system-03"
target_word_count: 1650
publish_month: "2026-08-2"
word_count: 2004
---

# Slotting Gudang: Cara WMS Memangkas Waktu Tempuh Picking

Di banyak gudang, operator picking menghabiskan lebih banyak waktu berjalan ketimbang benar-benar mengambil barang. Penyebabnya sering sepele: SKU yang paling sering dipesan justru tersimpan di lorong terjauh, warisan tata letak lama yang tak pernah ditinjau ulang. Artikel ini membahas slotting, satu keputusan penempatan barang yang, bila dikelola sebuah [warehouse management system](https://www.soltius.co.id/id/blog/konsep-warehouse-management-system-yang-wajib-anda-tahu) berbasis data, bisa memangkas waktu tempuh picking tanpa menambah rak, robot, atau tenaga kerja. Fokusnya bukan definisi umum, melainkan cara kerja: bagaimana sistem menentukan lokasi tiap SKU dari kecepatan perputarannya, kapan gudang perlu menata ulang, dan di mana slotting yang terlalu agresif malah merugikan.

> **Ringkas:** Slotting gudang adalah proses menentukan lokasi penyimpanan (*storage bin*) optimal untuk setiap SKU berdasarkan kecepatan perputaran, ukuran, berat, dan pola permintaannya. Dengan menaruh barang cepat-laku di zona paling mudah dijangkau, slotting memangkas waktu tempuh *picking*, yang dalam sistem manual diperkirakan menghabiskan sekitar separuh waktu operator (De Koster et al., 2007).

Kita akan mulai dari definisi dan alasan slotting berdampak besar, lanjut ke mekanika bagaimana sistem memilih lokasi, aturan praktis SKU-ke-zona, kadensi re-slotting, dan terakhir jebakan yang jarang dibahas.

## Apa Itu Slotting Gudang dan Mengapa Berdampak Besar pada Picking?

Slotting gudang adalah keputusan *storage assignment* (penempatan barang): menetapkan lokasi penyimpanan optimal tiap SKU berdasarkan *velocity* (kecepatan perputaran), ukuran, berat, dan pola permintaan. Dampaknya besar karena perjalanan operator, bukan pengambilan barang, yang mendominasi waktu picking, diperkirakan sekitar separuh dalam sistem *picker-to-parts* (De Koster et al., 2007). Menaruh barang cepat-laku di lokasi mudah dijangkau langsung memangkas jarak itu.

Angka jangkarnya berasal dari tinjauan literatur *order picking* yang kerap dirujuk. Dalam sistem picker-to-parts, tempat operator berjalan menghampiri barang, perjalanan diperkirakan memakan sekitar 50% waktu order picker, dan aktivitas order picking secara keseluruhan bisa mencapai sekitar 55% dari total biaya operasi gudang (De Koster, Le-Duc & Roodbergen, *European Journal of Operational Research*, 2007). Angka pasti bervariasi antar gudang, jadi perlakukan ~50% sebagai patokan praktis, bukan konstanta.

Yang sering dikacaukan: slotting bukan *routing*. Routing mengatur urutan jalan picker saat mengambil pesanan; slotting menentukan di mana barang disimpan sejak awal. Keduanya sama-sama menurunkan waktu tempuh, tapi bekerja di lapisan berbeda. Slotting adalah keputusan yang lebih fundamental karena rute terbaik pun tak banyak menolong jika barang laris tersebar di titik-titik terjauh gudang.

Inilah alasan slotting menjadi salah satu tuas paling murah untuk menaikkan produktivitas. Ia tidak menuntut belanja modal besar seperti konveyor atau robot; ia hanya menuntut data pergerakan barang yang bersih dan disiplin menatanya.

## Bagaimana WMS Menentukan Lokasi SKU Berdasarkan Velocity

WMS menentukan lokasi SKU dengan menganalisis data pergerakannya, bukan menebak. Sistem mengklasifikasikan tiap barang berdasarkan velocity lewat *ABC analysis*, lalu memetakan kelas tercepat ke *pick face* (muka rak tempat pengambilan) yang paling ergonomis dan dekat titik keluar. Faktor ukuran, berat, dan kemasan ikut diperhitungkan sebelum sistem mengusulkan *storage bin* yang paling efisien.

Secara praktis, alur slotting berbasis data biasanya menempuh empat langkah:

1. **Klasifikasikan SKU dengan ABC analysis.** Sistem memberi peringkat tiap SKU dari riwayat order. Kelas A adalah penyumbang picks terbanyak, B moderat, C lambat. Pola ini mengikuti prinsip Pareto: sekelompok kecil SKU biasanya menghasilkan mayoritas aktivitas pengambilan.
2. **Petakan kelas ke zona.** SKU kelas A diarahkan ke *golden zone*, area jangkauan ergonomis kira-kira setinggi pinggang sampai bahu, dan ke bin yang dekat area *staging*. SKU kelas C didorong ke rak atas-bawah atau lorong jauh.
3. **Perhitungkan dimensi dan berat.** Barang besar atau berat butuh tipe bin yang sesuai dan penempatan yang aman secara ergonomi angkat. *Cube* (dimensi) dan kemasan menentukan kapasitas serta tipe bin.
4. **Sistem mengusulkan lokasi.** WMS menggabungkan semua faktor lalu merekomendasikan bin, alih-alih mengandalkan hafalan supervisor gudang.

Di lingkungan SAP, mekanika ini terwujud dalam fungsi Slotting pada **SAP Extended Warehouse Management (EWM)**. Fungsi ini menentukan "storage concept" optimal untuk sebuah produk, yakni *putaway control indicator*, *storage section indicator*, *storage bin type*, dan kuantitas maksimum di storage type, yang diturunkan dari master data produk, data permintaan, dan spesifikasi kemasan (SAP Help Portal, diakses 2026). Hasilnya disimpan di master produk gudang sehingga menyetir penentuan lokasi saat barang masuk. Slotting di EWM bersifat opsional dan dijalankan lewat jalur master data khusus, bukan sesuatu yang aktif otomatis di setiap gudang.

SAP EWM juga menyediakan simulasi slotting untuk mengevaluasi hasil sebelum parameter benar-benar ditulis ke master produk, serta opsi slotting berbasis *machine learning* pada versi tertentu. Anggap keduanya sebagai kapabilitas yang tersedia, bukan janji hasil, karena ketersediaan dan detailnya bergantung pada edisi dan konfigurasi.

## Aturan Praktis: SKU Mana ke Zona Mana

Aturannya mengikuti pola Pareto. Kelas A, tipikalnya sekitar 15–20% SKU tetapi menyumbang mayoritas picks (sering diframe 80/20), ditempatkan di golden zone setinggi pinggang sampai bahu dan dekat titik keluar. Kelas B menempati zona menengah dengan jangkauan wajar, sedangkan kelas C yang jarang diambil didorong ke area jauh atau rak ekstrem atas-bawah. Porsi ini tipikal, bukan angka pasti tiap gudang.

| Kelas | Karakter | ~Porsi SKU | ~Porsi picks | Penempatan ideal |
|---|---|---|---|---|
| A | Cepat-laku (*fast mover*) | ~15–20% | mayoritas (~70–80%) | Golden zone (pinggang–bahu), dekat titik keluar/staging |
| B | Moderat | ~30% | menengah | Zona menengah, jangkauan wajar |
| C | Lambat (*slow mover*) | ~50% | kecil | Area jauh, rak atas/bawah, kepadatan tinggi |

Angka porsi di atas adalah pola tipikal, bukan patokan yang berlaku sama di semua gudang. Gunakan sebagai kerangka berpikir, lalu kalibrasi dengan data order Anda sendiri.

Satu faktor yang sering terlewat adalah keterkaitan antar-produk atau *family grouping*. SKU yang kerap dipesan bersama sebaiknya didekatkan, meski velocity individualnya berbeda, supaya satu pesanan bisa diselesaikan dalam rute yang pendek. Prinsip yang sama membuat analisis pola order menjadi pekerjaan analitik tersendiri: banyak tim memanfaatkan pendekatan [business intelligence](https://www.soltius.co.id/id/blog/business-intelligence) untuk memetakan *pick density* (kepadatan picking) dan keterkaitan SKU sebagai peta panas, bukan sekadar tabel. Tanpa lensa analitik seperti itu, family grouping mudah mengandalkan asumsi ketimbang bukti.

## Seberapa Sering Gudang Perlu Re-Slotting?

Tidak ada angka baku. Slotting bukan aktivitas sekali-jadi karena velocity SKU berubah, jadi re-slotting mengikuti pemicu: pergeseran musiman, rilis atau penghapusan SKU, dan promo besar. Praktik yang sehat adalah meninjau klasifikasi ABC secara berkala dari riwayat order berjalan (*rolling*), lalu menata ulang secara bertahap agar operasi harian tidak terganggu.

Kunci keputusannya adalah biaya perpindahan. Setiap kali stok dipindah ke bin baru, ada tenaga kerja yang terpakai. Karena itu re-slotting yang sehat bersifat bertahap dan dipicu peristiwa, bukan dijalankan terus-menerus. Manfaat penghematan jarak harus lebih besar dari ongkos memindahkan barang, dan itu tidak selalu terpenuhi untuk setiap SKU.

SAP EWM menangani sisi ini lewat fungsi Rearrangement, yang menata ulang stok yang sudah tersimpan, bukan hanya saat barang baru masuk. Mekanismenya memakai *slotting index*: bin dengan storage type, section, dan tipe yang optimal punya index 0, dan sistem hanya mengusulkan pemindahan bila ada bin alternatif dengan index lebih rendah dari bin saat ini. Prioritas transfer ditimbang dari selisih index tersebut, sehingga pemindahan yang paling berdampak didahulukan.

| Aspek | Slotting | Rearrangement |
|---|---|---|
| Kapan | Menetapkan parameter penyimpanan (sering saat/persiapan putaway) | Menata ulang stok yang SUDAH tersimpan |
| Output | Putaway control indicator, storage section, bin type, max qty di master produk | Usulan pemindahan stok ke bin lebih optimal |
| Basis | Master data produk, data permintaan, packaging spec | Slotting index (0 = optimal); selisih index |
| Tujuan | Menetapkan "storage concept" optimal per produk | Merapikan gudang seiring perubahan velocity |

Di lapangan, menerjemahkan logika ini ke konfigurasi sistem bukan pekerjaan sekali klik. Soltius, misalnya, mengonfigurasi indikator slotting SAP EWM sesuai profil SKU dan tata letak tiap klien, agar usulan penempatan yang keluar dari sistem cocok dengan realitas gudang, bukan template bawaan.

## Slotting yang Terlalu Agresif Bisa Merugikan: Trade-off yang Jarang Dibahas

Ya, bisa merugikan. Menumpuk semua barang cepat-laku di satu zona kecil memang menaikkan pick density, tetapi berlebihan justru menciptakan kemacetan operator di zona panas dan mengosongkan bin lebih cepat sehingga *replenishment* (pengisian ulang) makin sering. Slotting yang baik menyebar beban dan menyeimbangkan picking dengan pengisian ulang, bukan sekadar memperpendek jarak tempuh.

Bagian ini jarang ditulis kompetitor, padahal di sinilah slotting berubah dari teori indah menjadi keputusan operasional yang penuh kompromi. Ada beberapa jebakan yang layak diwaspadai:

- **Kongesti di zona panas.** Bila semua kelas A berdempetan, beberapa picker berebut ruang dan lorong yang sama pada jam sibuk. Jarak jalan turun, tapi antrean naik, dan hasil bersihnya bisa nol.
- **Replenishment yang membengkak.** Zona pengambilan yang padat cepat kosong. Tim pengisian ulang jadi bekerja lebih keras, dan kalau tak seimbang, bin kosong justru menghentikan picking.
- **Data velocity yang kotor.** Slotting menuruti data. Riwayat order yang usang atau salah menghasilkan penempatan yang keliru, klasik "garbage in, garbage out". Inilah alasan re-slotting berbasis data berjalan, bukan snapshot lama.
- **Dogma "fixed selalu lebih baik".** Banyak gudang modern bersifat hybrid: lokasi tetap untuk A-items bernilai tinggi, penyimpanan acak atau dinamis untuk sisanya demi utilisasi ruang. Memaksa satu pendekatan untuk semua SKU jarang optimal.

Tujuan akhirnya bukan jarak terpendek di atas kertas, melainkan throughput yang stabil di lantai gudang. Data pergerakan SKU historis yang menjadi bahan bakar keputusan ini idealnya ditampung dan dimodelkan dengan rapi, misalnya di lapisan [data warehouse solutions](https://www.soltius.co.id/id/blog/data-warehouse-solutions), supaya klasifikasi velocity dihitung dari periode yang cukup panjang dan tidak bias oleh lonjakan sesaat.

## FAQ (Pertanyaan yang Sering Diajukan)

### Apa itu slotting gudang?

Slotting gudang adalah proses menentukan lokasi penyimpanan (storage bin) paling optimal untuk setiap SKU berdasarkan kecepatan perputaran (velocity), ukuran, berat, dan pola permintaannya. Tujuannya menempatkan barang cepat-laku di lokasi yang mudah dan cepat diambil, sehingga operator tidak membuang waktu berjalan jauh. Slotting adalah keputusan penempatan barang, bukan sekadar penataan rak fisik.

### Apa manfaat slotting untuk picking?

Manfaat utamanya memangkas waktu tempuh (travel time). Dalam sistem picker-to-parts, perjalanan diperkirakan menghabiskan sekitar separuh waktu order picker (De Koster et al., 2007), sementara order picking bisa mencapai ~55% biaya operasi gudang. Dengan menaruh SKU cepat-laku di zona mudah dijangkau, slotting menurunkan jarak jalan, menaikkan pick per jam, dan mengurangi kelelahan operator.

### Apa itu ABC analysis dalam slotting?

ABC analysis mengelompokkan SKU berdasarkan kontribusinya terhadap aktivitas picking. Kelas A adalah barang cepat-laku, biasanya sekitar 15–20% SKU tetapi menyumbang mayoritas picks (pola Pareto ~80/20); B moderat; C lambat. Dalam slotting, item A ditempatkan di lokasi paling mudah dijangkau (golden zone, dekat titik keluar), sedangkan C boleh ditaruh di area jauh atau ketinggian ekstrem.

### Apa itu golden zone dalam gudang?

Golden zone adalah zona jangkauan ergonomis di rak, kira-kira dari setinggi pinggang atau paha-atas sampai bahu dan dalam jangkauan tangan yang nyaman, tempat operator mengambil barang paling cepat dengan strain paling kecil. SKU kelas A (cepat-laku) idealnya ditempatkan di golden zone, sementara barang jarang diambil ditaruh di rak atas atau bawah yang lebih sulit dijangkau.

### Seberapa sering re-slotting perlu dilakukan?

Tidak ada angka baku; slotting bukan sekali-jadi karena velocity SKU berubah. Kadensi umum mengikuti pemicu: pergeseran musiman, rilis atau penghapusan SKU, dan promo besar. Praktik yang sehat adalah meninjau klasifikasi ABC/velocity secara berkala dari riwayat order berjalan, lalu melakukan re-slotting bertahap agar tidak mengganggu operasi harian. SAP EWM memfasilitasinya lewat fungsi rearrangement.

### Apakah slotting butuh WMS?

Secara prinsip slotting bisa manual, tetapi tanpa WMS ia bergantung pada intuisi dan cepat usang. WMS menyimpan data pergerakan SKU historis dan velocity, lalu mengusulkan lokasi optimal secara sistematis. Pada SAP EWM, fungsi slotting bahkan menentukan parameter penyimpanan (putaway control indicator, storage section, bin type) otomatis dari master data dan data permintaan, sehingga penataan berbasis data, bukan tebakan.

### Apakah SAP EWM mendukung slotting?

Ya. SAP Extended Warehouse Management (EWM) memiliki fungsi Slotting yang menentukan "storage concept" optimal untuk tiap produk, yakni putaway control indicator, storage section indicator, storage bin type, dan kuantitas maksimum, dari master data produk, data kebutuhan, dan spesifikasi kemasan. EWM juga punya fungsi Rearrangement untuk menata ulang stok yang sudah tersimpan, memindahkan item cepat-laku ke bin yang lebih optimal.

## Kesimpulan

Waktu picking yang lambat jarang berasal dari operator yang kurang cekatan; lebih sering dari barang laris yang salah tempat. Slotting menyelesaikannya dengan tuas yang paling murah, yakni menata lokasi berdasarkan data velocity, bukan menambah rak atau robot. Kuncinya bukan mengejar jarak terpendek, melainkan keseimbangan antara pick density, replenishment, dan biaya perpindahan, lalu meninjaunya ulang saat pola permintaan bergeser. Sebagai SAP Platinum Partner melalui United VARs dan bagian dari Metrodata Group sejak 1998, Soltius mengimplementasikan dan mengonfigurasi SAP EWM, termasuk fungsi slotting dan rearrangement, sesuai profil SKU serta tata letak gudang tiap klien.

Untuk menilai apakah slotting berbasis data layak diterapkan di gudang Anda, jelajahi solusinya dan mulai diskusi di soltius.co.id.
