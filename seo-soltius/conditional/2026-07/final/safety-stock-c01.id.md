---
title: "Safety Stock: Pengertian, Rumus, dan Cara Menentukannya"
meta_title: "Safety Stock: Pengertian, Rumus, dan Cara Menentukannya"
meta_description: "Safety stock adalah stok pengaman terhadap fluktuasi permintaan dan pasokan. Pelajari rumus safety stock, contoh perhitungan, dan cara menentukannya."
slug: "safety-stock-pengertian-rumus-cara-menentukan"
language: "id"
primary_keyword: "safety stock"
secondary_keywords: ["rumus safety stock", "stok pengaman", "cara menghitung safety stock", "service level", "reorder point", "standar deviasi permintaan", "stockout", "biaya penyimpanan"]
internal_links:
  - url: "https://www.soltius.co.id/id/blog/apa-itu-supply-chain-management"
    anchor: "supply chain management"
  - url: "https://www.soltius.co.id/id/blog/konsep-warehouse-management-system-yang-wajib-anda-tahu"
    anchor: "manajemen gudang"
external_citations:
  - url: "https://web.mit.edu/2.810/www/files/readings/King_SafetyStock.pdf"
    context: "Rumus statistik Z × σd × √LT beserta syarat konsistensi satuan, tabel Z-score (95% = 1,65; 99% = 2,33), service level 100% tidak dapat dicapai, stockout tetap terjadi di ±5% siklus pada level 95%, kritik praktik buffer intuisi/10–20% cycle stock"
  - url: "https://learning.sap.com/courses/mastering-sap-ibp-for-inventory-planning-and-optimization/global-multi-stage-inventory-optimization-1"
    context: "SAP IBP for Inventory: rekomendasi safety stock lintas produk dan lokasi (multistage inventory optimization) dengan input variabilitas permintaan, variabilitas lead time pasokan, dan target service level"
brief_id: "safety-stock-c01"
target_word_count: 900
publish_month: "2026-07"
date_modified: "2026-07-06"
word_count: 956
---

# Safety Stock: Pengertian, Rumus, dan Cara Menentukannya

Kehabisan stok saat permintaan melonjak itu mahal; modal yang terkubur di gudang karena *buffer* (stok penyangga) ditetapkan asal tebak sama mahalnya. Safety stock berdiri persis di antara dua kerugian itu. Dalam praktik [supply chain management](https://www.soltius.co.id/id/blog/apa-itu-supply-chain-management), besarannya bisa dihitung dari data, bukan dikira-kira. Artikel ini membahas dua rumus safety stock yang dipakai di lapangan, contoh perhitungannya, dan empat faktor yang menentukan besarannya.

> **Ringkasnya:** safety stock (stok pengaman) adalah persediaan ekstra yang disimpan di atas kebutuhan normal untuk melindungi operasional dari ketidakpastian — lonjakan permintaan, meleset-nya perkiraan, dan keterlambatan pasokan. Besarannya dihitung dari data historis penjualan dan lead time, bukan ditebak, sehingga perusahaan terhindar dari stockout tanpa menimbun persediaan berlebihan.

## Bagaimana Rumus Safety Stock?

Dua rumus lazim dipakai praktisi: rumus sederhana berbasis selisih skenario maksimum terhadap rata-rata, dan rumus statistik berbasis target *service level* (tingkat layanan). Pemilihannya bukan soal mana yang paling benar, melainkan soal data: rumus sederhana cukup dengan angka maksimum dan rata-rata, rumus statistik menuntut data historis yang memadai untuk menghitung standar deviasi.

| Rumus | Formula | Kapan dipakai | Data yang dibutuhkan |
|---|---|---|---|
| Sederhana (maks–rata-rata) | (Penjualan harian maksimum × *lead time* maksimum) − (penjualan harian rata-rata × lead time rata-rata) | Data historis terbatas, fluktuasi moderat, butuh angka cepat | Angka maksimum dan rata-rata penjualan harian serta lead time |
| Statistik (service level) | Z × σd × √lead time | Data historis memadai, permintaan fluktuatif, target service level eksplisit | σd (standar deviasi permintaan), Z dari target service level, lead time |

Z adalah faktor pengaman dari tabel distribusi normal sesuai target service level; σd mengukur seberapa jauh permintaan menyimpang dari rata-ratanya. Bentuk √lead time hanya valid bila satuan σd dan lead time konsisten, misalnya standar deviasi permintaan harian dipasangkan dengan lead time dalam hari ([King, APICS magazine, 2011](https://web.mit.edu/2.810/www/files/readings/King_SafetyStock.pdf)).

Kerangka Z-score mengasumsikan permintaan terdistribusi normal, penyederhanaan yang diterima luas dalam praktik.

## Contoh Perhitungan Safety Stock

Ilustrasi berikut memakai satu skenario komponen manufaktur yang sama untuk kedua rumus. Hasilnya terpaut jauh, 480 unit berbanding sekitar 63 unit, dan selisih itu wajar karena keduanya menjawab pertanyaan proteksi yang berbeda: satu memproteksi skenario terburuk historis, satu lagi memproteksi sampai target kepastian layanan tertentu.

Datanya: pemakaian rata-rata 50 unit per hari, maksimum 70; lead time rata-rata 10 hari, maksimum 14; σd harian 12 unit.

1. **Rumus sederhana:** (70 × 14) − (50 × 10) = 980 − 500 = **480 unit**.
2. **Rumus statistik** (service level 95%, Z = 1,65): 1,65 × 12 × √10 ≈ 19,8 × 3,16 ≈ **63 unit**.

Mengapa terpaut hampir delapan kali? Rumus sederhana menumpuk skenario terburuk permintaan dan lead time sekaligus, sehingga proteksinya maksimal tetapi cenderung boros modal. Rumus statistik memproteksi sebatas target service level 95%; menurut King, buffer pada level ini tetap membiarkan stockout terjadi di sekitar 5% siklus pengisian ulang. Safety stock memang tidak dirancang menghapus seluruh risiko.

Hasil hitungan ini kemudian menjadi komponen penjumlah dalam *reorder point* (ROP), titik stok yang memicu pemesanan ulang.

## Cara Menentukan Tingkat Safety Stock yang Tepat

Menentukan tidak sama dengan menghitung. Rumus memberi angka; keputusan akhirnya ditarik oleh empat faktor: target service level, fluktuasi permintaan, keandalan pasokan, dan biaya penyimpanan. Menetapkan buffer berdasarkan intuisi atau persentase tetap 10–20% dari *cycle stock*, menurut King, adalah praktik yang umumnya berkinerja buruk.

- **Target service level.** Standar umum 95% (Z = 1,65); item kritis layak 99% (Z = 2,33). Kebutuhan buffer naik tidak proporsional saat target mendekati 100%, dan service level 100% secara statistik tidak dapat dicapai; target lazim 90–98%.
- **Fluktuasi permintaan.** Makin besar standar deviasinya, makin besar buffer pada target service level yang sama.
- **Keandalan pemasok dan lead time.** Pasokan yang sering meleset dari jadwal menuntut buffer lebih besar dibandingkan pemasok konsisten.
- **Biaya penyimpanan.** Buffer berlebih mengubur modal kerja dan menambah biaya simpan. Besaran yang tepat adalah kompromi sadar antara risiko stockout dan biaya, bukan "makin besar makin aman".

Satu prasyarat sering terlewat: rumus hanya sebaik datanya. Standar deviasi yang dihitung dari catatan stok yang tidak akurat menghasilkan buffer yang salah; disiplin [manajemen gudang](https://www.soltius.co.id/id/blog/konsep-warehouse-management-system-yang-wajib-anda-tahu) menjadi fondasi perhitungan.

Di lingkungan multi-SKU dan multi-lokasi, menghitung parameter per item di spreadsheet cepat mentok. Di titik ini perusahaan memakai optimasi inventori berbasis sistem seperti SAP Integrated Business Planning (SAP IBP); modul SAP IBP for Inventory merekomendasikan safety stock lintas produk dan lokasi dengan mempertimbangkan variabilitas permintaan, variabilitas lead time pasokan, dan target service level ([SAP Learning](https://learning.sap.com/courses/mastering-sap-ibp-for-inventory-planning-and-optimization/global-multi-stage-inventory-optimization-1)).

## FAQ (Pertanyaan yang Sering Diajukan)

### Apa perbedaan safety stock dan reorder point?

Safety stock adalah besaran stok penyangga, sedangkan reorder point (ROP) adalah titik level stok yang memicu pemesanan ulang. Safety stock menjadi salah satu komponen penjumlah dalam rumus ROP; pada ilustrasi artikel ini, buffer sekitar 63 unit ikut dijumlahkan saat menentukan titik pemesanan ulang.

### Berapa banyak safety stock yang ideal?

Tidak ada angka universal. Besarannya ditarik oleh target service level: standar umum 95% memakai Z = 1,65, sementara item kritis bisa 99% dengan Z = 2,33 yang berarti buffer lebih besar. Service level 100% praktis mustahil dicapai karena kebutuhan buffer naik tidak proporsional.

### Apa risiko safety stock terlalu besar?

Modal kerja terkunci di gudang dan biaya simpan membengkak. Praktisi APICS/ASCM memakai aturan praktis biaya penyimpanan tahunan 15–25% dari nilai persediaan, mencakup biaya modal, asuransi, gudang, dan keusangan, sehingga buffer yang berlebihan langsung menggerus margin.

## Kesimpulan

Safety stock yang sehat lahir dari data, bukan tebakan: variabilitas permintaan, lead time pasokan, dan target service level yang dipilih secara sadar. Mulailah dari rumus yang sesuai kematangan data, lalu tinjau ulang saat pola permintaan bergeser. Sebagai SAP Platinum Partner melalui keanggotaan United VARs, Soltius mengimplementasikan dan mendampingi solusi perencanaan rantai pasok SAP seperti SAP IBP untuk perusahaan manufaktur dan distribusi.

Untuk mendiskusikan penerapan SAP IBP dalam perencanaan persediaan perusahaan Anda, kunjungi soltius.co.id.
