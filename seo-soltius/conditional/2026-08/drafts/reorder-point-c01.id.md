---
title: "Reorder Point (ROP): Rumus dan Contoh Perhitungannya"
meta_title: "Reorder Point (ROP): Rumus dan Contoh Perhitungannya"
meta_description: "Reorder point adalah titik stok yang memicu pemesanan ulang. Pelajari rumus reorder point, contoh perhitungannya, dan bedanya dengan EOQ dan safety stock."
slug: "reorder-point-rumus-contoh-perhitungan"
language: "id"
primary_keyword: "reorder point"
secondary_keywords: ["rumus reorder point", "ROP (reorder point)", "titik pemesanan ulang", "safety stock", "replenishment lead time (RLT)", "permintaan harian rata-rata", "EOQ (Economic Order Quantity)", "stockout", "manajemen persediaan", "material master", "SAP Integrated Business Planning (SAP IBP)"]
internal_links:
  - url: "https://www.soltius.co.id/id/blog/apa-itu-supply-chain-management"
    anchor: "supply chain management"
  - url: "https://www.soltius.co.id/id/blog/konsep-warehouse-management-system-yang-wajib-anda-tahu"
    anchor: "manajemen gudang"
external_citations:
  - url: "https://learning.sap.com/courses/consumption-based-planning-and-forecasting-in-sap-cloud-erp/using-forecast-in-reorder-point-planning"
    context: "Komposisi replenishment lead time material beli (planned delivery time + waktu proses penerimaan barang + waktu proses pembelian); reorder point planning manual vs otomatis; service level di material master sebagai input perhitungan safety stock"
  - url: "https://help.sap.com/doc/saphelp_globext607_10/GLOBALIZATIONEXTENSIONS607/en-US/f4/7d256344af11d182b40000e829fbfe/content.htm?no_cache=true"
    context: "Korroborasi mekanisme pemicu: pengadaan terpicu saat stok pabrik ditambah penerimaan terjadwal jatuh di bawah reorder point (dokumentasi SAP era ECC)"
brief_id: "reorder-point-c01"
target_word_count: 900
publish_month: "2026-08"
word_count: 968
---

# Reorder Point (ROP): Rumus dan Contoh Perhitungannya

Stok menipis biasanya bukan kejutan. Yang menahan pesanan pelanggan adalah keputusan memesan yang diambil terlambat: PO dibuat saat rak nyaris kosong, padahal pengiriman dan proses pembeliannya butuh berhari-hari. Reorder point menetapkan kapan tombol pemesanan ditekan. Artikel ini membahas rumusnya, contoh perhitungannya, dan posisinya dalam [supply chain management](https://www.soltius.co.id/id/blog/apa-itu-supply-chain-management).

> **Ringkasnya:** reorder point (ROP) adalah level stok yang memicu pemesanan ulang: titik ketika sisa barang diperkirakan hanya cukup menutup kebutuhan selama pesanan baru diproses dan dikirim. Nilainya tersusun dari permintaan rata-rata selama *replenishment lead time* ditambah *safety stock*, sehingga ditetapkan dari data konsumsi dan waktu pasok, bukan ditebak.

## Bagaimana Rumus Reorder Point?

Rumus reorder point hadir dalam dua bentuk: tanpa dan dengan safety stock. Keduanya memakai variabel yang sama, hanya berbeda pada satu suku penjumlah. Pemilihannya bukan soal kelengkapan data, melainkan stabilitas. Bila permintaan dan waktu pasok bisa diandalkan, bentuk dasar cukup. Begitu salah satunya bergoyang, pakai bentuk dengan pengaman.

| Bentuk | Rumus | Kapan dipakai |
|---|---|---|
| Dasar | ROP = Permintaan Harian Rata-rata × Replenishment Lead Time | Permintaan dan lead time relatif stabil, konsekuensi *stockout* ringan |
| Dengan pengaman | ROP = (Permintaan Harian Rata-rata × Replenishment Lead Time) + Safety Stock | Permintaan berfluktuasi atau pemasok tidak selalu tepat waktu |

Yang sering diabaikan bukan rumusnya, melainkan lead time mana yang dipakai. Menurut [SAP Learning](https://learning.sap.com/courses/consumption-based-planning-and-forecasting-in-sap-cloud-erp/using-forecast-in-reorder-point-planning), *replenishment lead time* (waktu pengisian ulang) untuk material yang dibeli dari luar tersusun dari tiga komponen: *planned delivery time* (waktu kirim terencana), waktu proses penerimaan barang, dan waktu proses pembelian.

Konsekuensinya lugas: ROP yang dihitung dari waktu kirim saja selalu terlalu rendah, karena persetujuan PO dan pemeriksaan barang di gudang tetap memakan hari. Safety stock masuk hanya sebagai suku penjumlah; besarannya ditetapkan lewat perhitungan tersendiri.

## Contoh Perhitungan Reorder Point

Yang membuat perhitungan reorder point meleset di lapangan hampir selalu satuan, bukan rumusnya. Permintaan dicatat per bulan, lead time dihitung per hari, lalu keduanya dikalikan begitu saja. Contoh berikut menunjukkan keduanya sekaligus: versi yang benar, lalu versi yang salah satuan.

Sebagai ilustrasi (angka buatan, bukan data lapangan): distributor suku cadang dengan permintaan rata-rata **40 unit per hari**, *replenishment lead time* **12 hari**, dan safety stock **90 unit** yang sudah ditetapkan sebelumnya.

1. **Tanpa pengaman:** 40 × 12 = **480 unit**.
2. **Dengan pengaman:** (40 × 12) + 90 = **570 unit**.

Selisihnya 90 unit, persis sebesar buffer-nya. Safety stock tidak mengubah logika ROP, ia hanya menggeser titik pemicunya ke atas. Begitu stok tercatat menyentuh 570 unit, PO dibuat, bukan saat gudang terlihat menipis.

Sekarang versi yang salah. Bila permintaan dicatat **1.200 unit per bulan** lalu langsung dikalikan 12 hari, hasilnya **14.400 unit**: tepat **30 kali lipat** dari angka permintaan-selama-lead-time yang benar (480 unit). Konversikan dulu: 1.200 ÷ 30 = 40 unit per hari. Aturannya sederhana, satuan permintaan dan lead time harus sama.

Satu batas yang jujur: ROP setepat apa pun tetap gagal bila catatan stoknya meleset, sebab sistem memicu PO berdasarkan angka di layar, bukan barang di rak. Disiplin [manajemen gudang](https://www.soltius.co.id/id/blog/konsep-warehouse-management-system-yang-wajib-anda-tahu) adalah prasyarat titik pemicu yang benar, bukan pelengkapnya.

## Apa Bedanya Reorder Point dan EOQ?

Reorder point dan EOQ (*Economic Order Quantity*) sering dicampur, padahal menjawab dua pertanyaan berbeda dan tidak saling menggantikan. ROP menjawab kapan memesan, dan hasilnya berupa level stok. EOQ menjawab berapa banyak dipesan, dan hasilnya berupa kuantitas per pesanan. Keduanya memakai input yang berbeda pula.

| Dimensi | Reorder Point (ROP) | EOQ (Economic Order Quantity) |
|---|---|---|
| Pertanyaan yang dijawab | **Kapan** memesan? | **Berapa banyak** dipesan? |
| Satuan hasil | Level stok (unit yang memicu PO) | Kuantitas pesanan (unit per PO) |
| Input utama | Permintaan harian rata-rata, replenishment lead time, safety stock | Permintaan periodik, biaya pemesanan, biaya penyimpanan |
| Bila salah | Terlalu rendah → *stockout*; terlalu tinggi → stok mengendap | Terlalu kecil → terlalu sering memesan; terlalu besar → biaya simpan naik |

Keduanya dipakai bersama: ROP menekan tombolnya, EOQ menentukan ukuran pesanannya. Mengganti salah satunya dengan yang lain berarti menjawab pertanyaan yang tidak ditanyakan.

## Ketika Reorder Point Tidak Bisa Lagi Ditulis di Spreadsheet

Reorder point bukan angka sekali tetap. Ia basi diam-diam begitu permintaan rata-rata naik atau lead time memanjang, dan tidak ada yang memberi tahu Anda. Di lapangan, ROP paling sering meleset bukan karena rumusnya salah, melainkan karena angkanya ditetapkan sekali lalu tidak pernah ditinjau lagi.

Di ERP (*Enterprise Resource Planning*), ROP hidup sebagai parameter di *material master*, bukan sel spreadsheet. SAP Learning menyebut dua mode: pada *reorder point planning* manual, ROP dan safety stock diisi sendiri; pada mode otomatis, sistem menghitung ulang keduanya tiap *forecast run*, dengan *service level* di material master sebagai input perhitungan safety stock.

Pemicunya pun eksplisit: pengadaan berjalan saat stok ditambah penerimaan terjadwal jatuh di bawah reorder point, mekanisme yang sama seperti dicatat [dokumentasi SAP untuk ERP generasi sebelumnya](https://help.sap.com/doc/saphelp_globext607_10/GLOBALIZATIONEXTENSIONS607/en-US/f4/7d256344af11d182b40000e829fbfe/content.htm?no_cache=true). Untuk perencanaan persediaan lintas produk dan lokasi, perusahaan umumnya memakai SAP Integrated Business Planning (SAP IBP).

## FAQ (Pertanyaan yang Sering Diajukan)

### Apa perbedaan reorder point dan safety stock?

Safety stock adalah besaran bantalannya; reorder point adalah titik yang memicu pemesanan. Safety stock menjadi salah satu suku penjumlah dalam rumus ROP. Pada ilustrasi artikel ini, buffer 90 unit menaikkan titik pemicu dari 480 ke 570 unit.

### Apakah reorder point sama dengan stok minimum?

Sering dipakai bergantian, tetapi tidak sama. "Stok minimum" kerap sekadar angka kebiasaan. Reorder point punya cara hitung eksplisit: permintaan rata-rata selama replenishment lead time ditambah safety stock. Ilustrasinya: 40 unit per hari selama 12 hari ditambah 90 unit memberi 570 unit.

### Berapa sering reorder point perlu dihitung ulang?

Tinjau setiap kali permintaan rata-rata atau lead time bergeser, bukan setahun sekali. Pada *automatic reorder point planning*, dokumentasi SAP menyebut sistem menghitung ulang reorder point dan safety stock tiap *forecast run*, memakai service level di material master.

## Kesimpulan

Reorder point pada akhirnya bukan sekadar rumus, melainkan dua keputusan: lead time mana yang jujur Anda hitung, dan seberapa sering angkanya ditinjau ulang. Soltius, SAP Platinum Partner melalui keanggotaan United VARs dan berpengalaman sejak 1998, mengimplementasikan dan mendampingi solusi perencanaan rantai pasok SAP seperti SAP IBP untuk perusahaan manufaktur dan distribusi.

Untuk mendiskusikan perencanaan persediaan dan penerapan SAP IBP di perusahaan Anda, kunjungi soltius.co.id.
