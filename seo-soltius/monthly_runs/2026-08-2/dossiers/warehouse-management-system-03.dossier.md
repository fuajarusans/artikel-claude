---
brief_id: "warehouse-management-system-03"
researcher_run_date: "2026-08-11"
sources_cited: 8
flags: 4
---

# Research Dossier: Slotting Gudang — Cara WMS Memangkas Waktu Tempuh Picking

## TL;DR for the writer

- **Slotting** = proses menentukan lokasi penyimpanan (storage bin) optimal untuk tiap SKU berdasarkan karakteristik produk (velocity, ukuran/cube, berat, kemasan) dan pola permintaan; tujuannya menaruh barang cepat-laku di lokasi paling mudah diakses agar picking cepat. Ini adalah masalah *storage assignment*, bukan routing.
- **Angka jangkar** yang paling kuat: dalam sistem picker-to-parts, **perjalanan (travel) diperkirakan menghabiskan ~50% waktu order picker**, dan **order picking bisa mencapai ~55% dari total biaya operasi gudang** (De Koster, Le-Duc & Roodbergen, 2007, peer-reviewed). Pakai ini sebagai fondasi "kenapa slotting penting". Frame ~50% sebagai estimatif/rule-of-thumb, jangan absolut.
- **Sudut SAP**: **SAP Extended Warehouse Management (EWM)** punya fungsi **Slotting** (menentukan putaway control indicator, storage section indicator, storage bin type, max quantity dari master data produk + data permintaan) dan **Rearrangement** (menata ulang stok yang sudah tersimpan, memindahkan fast-mover ke bin optimal). Definisi resmi SAP tersedia — gunakan persis, jangan lebih.
- **Golden zone** = zona jangkauan ergonomis (kira-kira setinggi paha-atas sampai bahu, dalam jangkauan tangan nyaman) tempat SKU kelas-A sebaiknya ditempatkan. **ABC analysis**: ~15–20% SKU teratas ("A") biasanya menghasilkan mayoritas picks (sering diframe 80/20 Pareto).
- **Hindari klaim keras persentase pengurangan** ("slotting memangkas 50% jarak"). Angka 15–30% (dan gabungan sampai 35–60% dengan routing) berasal dari sumber vendor/praktisi — sajikan sebagai *estimasi/rentang*, bukan fakta pasti.

## Core facts (verified)

> **Claim**: Dalam sistem picker-to-parts, perjalanan (travel/walking) order picker antar lokasi menghabiskan porsi terbesar waktu picking.
> **Number/specific**: Diperkirakan ~50% dari waktu order picker adalah travel (rule-of-thumb literatur, mengutip Tompkins et al.); breakdown lain menaruhnya di kisaran 50–55%.
> **Source**: De Koster, Le-Duc & Roodbergen, "Design and control of warehouse order picking: A literature review," *European Journal of Operational Research* 182 (2007), 481–501.
> **Confidence**: high (angka pasti bervariasi antar gudang → frame sebagai estimasi ~separuh)

> **Claim**: Order picking adalah aktivitas gudang paling padat biaya.
> **Number/specific**: Order picking diperkirakan mencapai **~55% dari total biaya operasi gudang**.
> **Source**: De Koster, Le-Duc & Roodbergen (2007), *EJOR* 182, 481–501.
> **Confidence**: high

> **Claim**: Storage assignment (di mana SKU ditaruh) adalah salah satu tuas utama untuk menurunkan travel time — dan slotting adalah keputusan storage-assignment itu.
> **Number/specific**: Literatur order-picking mengelompokkan tuas kendali menjadi layout, **storage assignment**, routing, batching, dan zoning; slotting bekerja di lapisan storage assignment.
> **Source**: De Koster et al. (2007), *EJOR*.
> **Confidence**: high

> **Claim**: SAP EWM memiliki fungsi Slotting yang menentukan "storage concept" optimal untuk sebuah produk secara otomatis.
> **Number/specific**: Slotting menentukan **Putaway Control Indicator, Storage Section Indicator, Storage Bin Type, dan Maximum Quantity in Storage Type** (opsional juga stock removal control indicator serta min/max qty), diturunkan dari master data produk, data kebutuhan/permintaan, dan packaging specification.
> **Source**: SAP Help Portal — "Slotting" (SAP EWM), help.sap.com (diakses 2026-08-11).
> **Confidence**: high

> **Claim**: Slotting di SAP EWM bersifat opsional dan dijalankan lewat jalur master data khusus.
> **Number/specific**: Path: *Extended Warehouse Management → Master Data → Slotting → Slot Products for Warehouse*; user memilih parameter penyimpanan mana yang mau ditentukan.
> **Source**: SAP Help Portal — "Slotting" (SAP EWM), help.sap.com (diakses 2026-08-11); SAP Learning — "Performing Slotting" (Processes in SAP S/4HANA EWM).
> **Confidence**: high

> **Claim**: Slotting menentukan Putaway Control Indicator lalu menyimpannya di product master, sehingga menyetir penentuan storage type saat putaway.
> **Number/specific**: Selama slotting, sistem menentukan putaway control indicator (dan opsional stock removal control indicator) dan menyimpannya di master produk gudang; ada field "Planned Putaway Control Indicator" yang di-update oleh slotting run bila condition record diaktifkan.
> **Source**: SAP Help Portal — "Slotting" / SAP Community (SAP EWM slotting), help.sap.com & community.sap.com (diakses 2026-08-11).
> **Confidence**: medium-high (mekanisme condition record dari SAP Community; konsep inti dari SAP Help)

> **Claim**: SAP EWM Rearrangement menata ulang stok yang SUDAH tersimpan (bukan hanya saat barang masuk), memindahkan item cepat-laku ke bin optimal.
> **Number/specific**: Definisi SAP: rearrangement dipakai "untuk mengoptimalkan penyusunan produk di gudang dengan memindahkan stok seperti item fast-moving ke storage bin optimal yang relevan."
> **Source**: SAP Help Portal — "Rearrangement" (SAP EWM), help.sap.com (diakses 2026-08-11).
> **Confidence**: high

> **Claim**: Rearrangement bekerja dengan membandingkan parameter penyimpanan bin saat ini terhadap benchmark optimal dari slotting, memakai "slotting index".
> **Number/specific**: Bin dengan storage type/section/bin-type optimal punya **slotting index = 0**; sistem mengusulkan pemindahan hanya bila bin alternatif punya slotting index lebih rendah dari bin saat ini; prioritas transfer ditimbang dari selisih index.
> **Source**: SAP Help Portal — "Rearrangement" / "Storage Bin" (SAP EWM), help.sap.com (diakses 2026-08-11).
> **Confidence**: high

> **Claim**: SAP EWM bisa mensimulasikan slotting sebelum diterapkan, sehingga hasil bisa dievaluasi lebih dulu.
> **Number/specific**: Ada fungsi "Simulation of Slotting" di SAP EWM untuk mengevaluasi hasil slotting sebelum parameter benar-benar ditulis ke master produk.
> **Source**: SAP Help Portal — "Simulation of Slotting" (SAP EWM), help.sap.com (diakses 2026-08-11).
> **Confidence**: medium (halaman ter-index; konten spesifik JS-rendered — konsep simulasi terkonfirmasi, detail langkah tidak dikutip)

> **Claim**: SAP menawarkan pendekatan slotting berbasis machine learning di lingkungan S/4HANA EWM.
> **Number/specific**: Ada fitur "Slotting by Machine Learning" yang terdokumentasi untuk SAP S/4HANA (EWM).
> **Source**: SAP Help Portal — "Slotting by Machine Learning" (SAP S/4HANA on-premise), help.sap.com (diakses 2026-08-11).
> **Confidence**: medium-high (halaman resmi ada; sajikan sebagai "tersedia pada versi tertentu", jangan janjikan detail kapabilitas)

> **Claim**: ABC analysis mengklasifikasikan SKU berdasarkan kontribusi terhadap aktivitas picking; kelompok kecil SKU menyumbang mayoritas picks (pola Pareto).
> **Number/specific**: A-items sering ~15–20% dari SKU namun menyumbang ~70–80% picks; B moderat; C lambat. Disajikan sebagai pola 80/20 yang khas, bukan angka pasti tiap gudang.
> **Source**: Praktisi/industri (Goramp, ASC Software, Optioryx) — konsep ABC/Pareto yang mapan; konsisten lintas sumber.
> **Confidence**: medium (konsep mapan; angka spesifik bervariasi → frame sebagai tipikal)

> **Claim**: Golden zone adalah zona penempatan ergonomis untuk SKU cepat-laku agar picking cepat dan minim strain.
> **Number/specific**: Golden zone ≈ dari sekitar tinggi paha-atas/pinggang sampai bahu, dalam jangkauan tangan nyaman ke depan — SKU kelas-A idealnya di sini; C-items ke area jauh/atas-bawah.
> **Source**: Praktisi/industri (Racklify — "Golden Zone in Warehouse Picking"; Goramp; ASC Software).
> **Confidence**: medium (definisi ergonomis konsisten lintas sumber praktisi; bukan standar tunggal)

> **Claim**: Slotting yang baik dapat menurunkan jarak/waktu tempuh picking secara berarti — tetapi besarannya bergantung gudang.
> **Number/specific**: Estimasi praktisi: slotting yang baik memangkas jarak jalan ~15–30%; digabung optimasi rute bisa ~35–60% total. Angka ini estimatif/vendor, bukan universal.
> **Source**: Praktisi/industri (Optioryx; Goramp). **Flag** — lihat bagian Flags.
> **Confidence**: low-medium (klaim vendor; harus diframe sebagai estimasi/rentang, jangan dipastikan)

> **Claim**: Slotting bukan aktivitas sekali-jadi; velocity berubah, jadi klasifikasi ABC harus diperbarui berkala dari riwayat order berjalan (rolling).
> **Number/specific**: Best practice praktisi: perbarui ABC/velocity dari rolling order history, terutama untuk e-commerce cepat-berubah dan industri musiman; re-slotting dilakukan bertahap agar tak mengganggu operasi.
> **Source**: Praktisi/industri (ASC Software; Optioryx); selaras dengan kemampuan Rearrangement SAP EWM.
> **Confidence**: medium

> **Claim**: Slotting harus menyeimbangkan efisiensi picking dengan kepadatan/kongesti dan replenishment — mengejar pick density berlebihan bisa kontraproduktif.
> **Number/specific**: Menumpuk semua fast-mover di satu zona kecil menciptakan bottleneck picker dan mempercepat pengosongan bin (replenishment lebih sering); slotting yang baik menyebar beban, bukan hanya memperpendek jarak.
> **Source**: Prinsip operasional order-picking (De Koster et al. 2007 kerangka trade-off; praktisi Goramp/ASC).
> **Confidence**: medium (prinsip yang diakui; bukan angka tunggal)

> **Claim**: Kualitas data velocity menentukan kualitas slotting — data buruk menghasilkan slotting salah ("garbage in, garbage out").
> **Number/specific**: Slotting EWM menarik dari master data produk + data permintaan (bisa dari forecast, mis. integrasi APO pada arsitektur tertentu); tanpa data pergerakan SKU yang bersih, penempatan bisa keliru.
> **Source**: SAP Help Portal — "Slotting" (data sources) + SAP Community.
> **Confidence**: medium-high

## Solution focus + Soltius anchor (from product_matrix.md + brief)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| **Vendor-neutral core**: slotting, product velocity, ABC analysis, golden zone, cube/berat, pick density, re-slotting | Travel ~50% waktu picker; picking ~55% biaya operasi gudang (De Koster 2007); ABC ~80/20 (tipikal); golden zone ergonomis | H2 #1 (definisi), H2 #2 (how-to), H2 #3 (tabel) | — (badan artikel netral vendor) |
| **SAP Extended Warehouse Management (EWM) — Slotting** | Menentukan putaway control indicator, storage section indicator, storage bin type, max qty dari master data produk + data permintaan; opsional, via *Master Data → Slotting* | H2 #2 / H2 #4 | Implementation + SAP Platinum Partner (United VARs) |
| **SAP EWM — Rearrangement** | Menata ulang stok tersimpan, memindahkan fast-mover ke bin optimal; pakai slotting index (0 = optimal) | H2 #4 (kadensi/re-slotting) | Implementation + optimasi gudang lintas industri |
| **SAP EWM — Simulation of Slotting & Slotting by ML** (opsional, hati-hati) | Simulasi hasil sebelum diterapkan; ada opsi slotting berbasis ML di S/4HANA EWM | Aside singkat H2 #2 atau H2 #4 | — (sebut sebagai kapabilitas, jangan janji detail) |

Reminder: Soltius **mengimplementasikan/mengonfigurasi/mendukung** SAP EWM — bukan membuatnya. Maks 2–3 penyebutan Soltius. Placement utama: closing CTA. Satu aside mid-article boleh: "Soltius mengonfigurasi indikator slotting SAP EWM sesuai profil SKU & layout klien."

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **SAP Help Portal — "Slotting" (SAP Extended Warehouse Management)**, help.sap.com (diakses 2026-08-11) — https://help.sap.com/doc/saphelp_ewm700_ehp02/7.0.2/en-US/4b/c46aed5a304b41e10000000a42189e/content.htm — *what it backs*: definisi resmi slotting EWM + parameter yang ditentukan (putaway control indicator, storage section, bin type, max qty).
2. **SAP Help Portal — "Rearrangement" (SAP EWM)**, help.sap.com (diakses 2026-08-11) — https://help.sap.com/doc/saphelp_ewm900/9.0/en-US/9c/872041c877f623e10000000a155106/content.htm — *what it backs*: penataan ulang stok tersimpan / pemindahan fast-mover ke bin optimal + mekanisme slotting index.
3. **De Koster, R., Le-Duc, T. & Roodbergen, K.J. (2007), "Design and control of warehouse order picking: A literature review," *European Journal of Operational Research* 182, 481–501** — https://research.rug.nl/en/publications/design-and-control-of-warehouse-order-picking-a-literature-review/ — *what it backs*: travel ~50% waktu picker; order picking ~55% biaya operasi gudang; kerangka storage assignment.
4. **SAP Learning — "Performing Slotting" (Processes in SAP S/4HANA EWM)**, learning.sap.com — https://learning.sap.com/courses/processes-in-sap-s-4hana-ewm/performing-slotting — *what it backs*: tujuan & langkah menjalankan slotting di S/4HANA EWM.

Priority note: (1)(2)(4) SAP official = otoritas tertinggi untuk fakta produk; (3) peer-reviewed = otoritas untuk angka travel/biaya. Golden zone/ABC/persentase pengurangan hanya dari praktisi — jangan jadikan klaim keras.

## FAQ Q&As (7 drafted, Bahasa Indonesia)

### Apa itu slotting gudang?
Slotting gudang adalah proses menentukan lokasi penyimpanan (storage bin) paling optimal untuk setiap SKU berdasarkan kecepatan perputaran (velocity), ukuran, berat, dan pola permintaannya. Tujuannya menempatkan barang cepat-laku di lokasi yang paling mudah dan cepat diambil, sehingga operator tidak membuang waktu berjalan jauh saat picking. Slotting adalah keputusan penempatan, bukan sekadar penataan rak fisik.

### Apa manfaat slotting untuk picking?
Manfaat utamanya memangkas waktu tempuh (travel time). Dalam sistem picker-to-parts, perjalanan diperkirakan menghabiskan sekitar separuh waktu order picker (De Koster et al., 2007), sementara order picking bisa mencapai ~55% biaya operasi gudang. Dengan menaruh SKU cepat-laku di zona mudah dijangkau, slotting menurunkan jarak jalan, menaikkan pick per jam, dan mengurangi kelelahan operator.

### Apa itu ABC analysis dalam slotting?
ABC analysis mengelompokkan SKU berdasarkan kontribusinya terhadap aktivitas picking. Kelas A adalah barang cepat-laku — biasanya sekitar 15–20% SKU tetapi menyumbang mayoritas picks (pola Pareto ~80/20); B moderat; C lambat. Dalam slotting, item A ditempatkan di lokasi paling mudah dijangkau (golden zone, dekat titik keluar), sedangkan C boleh ditaruh di area jauh atau ketinggian ekstrem.

### Apa itu golden zone dalam gudang?
Golden zone adalah zona jangkauan ergonomis di rak — kira-kira dari setinggi pinggang/paha-atas sampai bahu dan dalam jangkauan tangan yang nyaman — tempat operator bisa mengambil barang paling cepat dan dengan strain paling kecil. SKU kelas-A (cepat-laku) idealnya ditempatkan di golden zone, sementara barang jarang diambil ditaruh di rak atas atau bawah yang lebih sulit dijangkau.

### Seberapa sering re-slotting perlu dilakukan?
Tidak ada angka baku; slotting bukan sekali-jadi karena velocity SKU berubah. Kadensi umum mengikuti pemicu: pergeseran musiman, rilis atau penghapusan SKU, dan promo besar. Praktik yang sehat adalah meninjau klasifikasi ABC/velocity secara berkala dari riwayat order berjalan (rolling), lalu melakukan re-slotting bertahap agar tidak mengganggu operasi harian. SAP EWM memfasilitasinya lewat fungsi rearrangement.

### Apakah slotting butuh WMS?
Secara prinsip slotting bisa manual, tetapi tanpa WMS ia bergantung pada intuisi dan cepat usang. WMS menyimpan data pergerakan SKU historis dan velocity, lalu mengusulkan lokasi optimal secara sistematis. Pada SAP EWM, fungsi slotting bahkan menentukan parameter penyimpanan (putaway control indicator, storage section, bin type) otomatis dari master data dan data permintaan, sehingga penataan berbasis data, bukan tebakan.

### Apakah SAP EWM mendukung slotting?
Ya. SAP Extended Warehouse Management (EWM) memiliki fungsi Slotting yang menentukan "storage concept" optimal untuk tiap produk — putaway control indicator, storage section indicator, storage bin type, dan kuantitas maksimum — dari master data produk, data kebutuhan, dan spesifikasi kemasan. EWM juga punya fungsi Rearrangement untuk menata ulang stok yang sudah tersimpan, memindahkan item cepat-laku ke bin yang lebih optimal.

## Data tables for the writer

### Tabel 1 — Kelas ABC → Zona penempatan (aturan praktis; label sebagai tipikal, bukan baku)
| Kelas | Karakter | ~Porsi SKU | ~Porsi picks | Penempatan ideal |
|---|---|---|---|---|
| A | Cepat-laku (fast mover) | ~15–20% | ~70–80% (mayoritas) | Golden zone (setinggi pinggang–bahu), dekat titik keluar/staging |
| B | Moderat | ~30% | menengah | Zona menengah, jangkauan wajar |
| C | Lambat (slow mover) | ~50% | kecil | Area jauh, rak atas/bawah, kepadatan tinggi |

> Angka porsi bersifat tipikal (pola Pareto) — bervariasi per gudang. Jangan sajikan sebagai konstanta.

### Tabel 2 — Slotting vs Rearrangement di SAP EWM
| Aspek | Slotting | Rearrangement |
|---|---|---|
| Kapan | Menentukan parameter penyimpanan (sering saat/persiapan putaway) | Menata ulang stok yang SUDAH tersimpan |
| Output | Putaway control indicator, storage section, bin type, max qty di master produk | Usulan pemindahan stok ke bin lebih optimal |
| Basis data | Master data produk, data permintaan/kebutuhan, packaging spec | Slotting index (0 = bin optimal); selisih index |
| Tujuan | Menetapkan "storage concept" optimal per produk | Merapikan gudang seiring perubahan velocity |

### Tabel 3 — Faktor yang dipertimbangkan slotting
| Faktor | Kenapa penting |
|---|---|
| Velocity (kecepatan perputaran) | Menentukan seberapa "mudah dijangkau" lokasi yang pantas |
| Cube (dimensi) & berat | Barang besar/berat butuh bin sesuai + ergonomi angkat |
| Kemasan / packaging spec | Menentukan tipe bin & kapasitas |
| Afinitas/family grouping | SKU sering dibeli bersama didekatkan agar rute pendek |
| Musiman | Memicu re-slotting berkala |

## Edge cases & nuance

- **Slotting ≠ routing.** Slotting = *di mana* SKU disimpan (storage assignment); routing = *urutan jalan* picker mengambilnya. Keduanya menurunkan travel time tapi tuas berbeda — artikel ini tentang slotting. Jangan campur aduk.
- **Pick density vs congestion.** Menaruh semua fast-mover berdekatan memang menaikkan pick density, tapi berlebihan menimbulkan kemacetan picker di zona panas dan replenishment lebih sering (bin cepat kosong). Slotting yang baik menyebar beban, bukan hanya memperpendek jarak.
- **Fixed vs random/dynamic slotting.** Banyak DC modern hybrid: slot tetap untuk A-items bernilai tinggi, penyimpanan acak/dinamis untuk sisanya agar utilisasi ruang tinggi. Bukan "fixed selalu lebih baik".
- **Data velocity harus bersih.** Slotting menuruti data; velocity yang salah/lama → penempatan salah. Ini alasan re-slotting berbasis rolling history, bukan snapshot lama.
- **Slotting butuh biaya perpindahan.** Setiap re-slotting = tenaga kerja memindah stok; manfaat harus melebihi biaya perpindahan. Karena itu re-slotting bertahap dan berbasis pemicu, bukan terus-menerus.
- **Golden zone bukan angka baku.** Rentang tinggi ergonomis berbeda antar sumber/standar; sajikan sebagai prinsip ("zona jangkauan nyaman"), bukan ukuran centimeter pasti.

## Flags (open factual risk)

- ⚠️ **Angka "travel ~50% waktu picking".** Sumber peer-reviewed (De Koster 2007, mengutip Tompkins et al.) mendukung *kisaran* ~50%; sumber lain menyebut 50–55% bahkan 60–70% pada gudang buruk. → **Rekomendasi**: frame sebagai rule-of-thumb/estimasi ("diperkirakan sekitar separuh"), atribusikan, jangan absolut.
- ⚠️ **Persentase pengurangan jarak dari slotting (15–30%, gabungan 35–60%).** Berasal dari sumber vendor/praktisi (Optioryx, Goramp), bukan peer-reviewed. → **Rekomendasi**: sajikan sebagai *estimasi/rentang* dengan kata "berpotensi/dapat", jangan janjikan angka pasti; brief pun mewanti-wanti jangan pastikan "50%".
- ⚠️ **Angka ABC 80/20 dan porsi 15–20% SKU = 70–80% picks.** Pola tipikal Pareto, bukan konstanta universal. → **Rekomendasi**: kata "biasanya/tipikal", hindari menyajikan sebagai hukum pasti tiap gudang.
- ⚠️ **Detail "Simulation of Slotting" & "Slotting by Machine Learning" SAP EWM.** Halaman resmi SAP ada dan ter-index, tetapi kontennya JS-rendered sehingga detail langkah tidak bisa dikutip verbatim; ketersediaan bisa tergantung versi/edisi (EWM embedded S/4HANA vs decentralized). → **Rekomendasi**: sebut sebagai kapabilitas yang tersedia ("SAP EWM juga menyediakan simulasi slotting dan opsi berbasis machine learning pada versi tertentu"), jangan uraikan detail kapabilitas atau janjikan angka.

## Definition snippet draft (40–60 words)

> **Slotting gudang** adalah proses menentukan lokasi penyimpanan (storage bin) optimal untuk setiap SKU berdasarkan kecepatan perputaran, ukuran, berat, dan pola permintaannya. Dengan menaruh barang cepat-laku di zona paling mudah dijangkau, slotting memangkas waktu tempuh picking — yang dalam sistem manual diperkirakan menghabiskan sekitar separuh waktu operator (De Koster et al., 2007).
