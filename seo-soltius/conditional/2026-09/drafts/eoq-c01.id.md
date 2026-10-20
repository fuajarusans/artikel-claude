---
title: "Economic Order Quantity (EOQ): Pengertian, Rumus, dan Manfaatnya"
meta_title: "Economic Order Quantity (EOQ): Rumus & Manfaatnya"
meta_description: "Economic order quantity (EOQ) adalah kuantitas pesan paling ekonomis. Pahami rumus EOQ √(2DS/H), contoh perhitungan, trade-off biaya, dan asumsinya."
slug: "economic-order-quantity-eoq-rumus-manfaat"
language: "id"
primary_keyword: "economic order quantity"
secondary_keywords: ["rumus EOQ", "kuantitas pemesanan ekonomis", "biaya pemesanan", "biaya penyimpanan", "permintaan tahunan", "total biaya persediaan", "reorder point (ROP)", "safety stock", "lot sizing", "model Harris-Wilson", "SAP Integrated Business Planning (SAP IBP)"]
internal_links:
  - url: "https://www.soltius.co.id/id/blog/apa-itu-supply-chain-management"
    anchor: "supply chain management"
  - url: "https://www.soltius.co.id/id/blog/reorder-point-rumus-contoh-perhitungan"
    anchor: "reorder point"
external_citations:
  - url: "https://corporatefinanceinstitute.com/resources/accounting/what-is-eoq-formula/"
    context: "Corporate Finance Institute: rumus EOQ √(2DS/H), komponen biaya pemesanan dan penyimpanan, serta daftar asumsi klasik"
  - url: "https://help.sap.com/docs/SAP_S4HANA_ON-PREMISE/fe39e10a9a864a8f8dc9537704f0fa13/da97b6535fe6b74ce10000000a174cb4.html"
    context: "SAP Help Portal: EOQ sebagai prosedur optimum lot-sizing yang meminimalkan gabungan biaya pemesanan dan biaya penyimpanan, membutuhkan kedua biaya terpelihara di data material"
brief_id: "eoq-c01"
target_word_count: 900
publish_month: "2026-09"
word_count: 930
---

# Economic Order Quantity (EOQ): Pengertian, Rumus, dan Manfaatnya

Setiap staf pengadaan menghadapi satu keputusan berulang yang jarang dihitung: sekali pesan, berapa banyak? Terlalu sering memesan, ongkos administrasi dan pengiriman membengkak; terlalu banyak sekali angkut, modal terkubur di gudang dan biaya simpan naik. Kebanyakan menebak dari kebiasaan. Economic order quantity menjawabnya dengan aritmetika. Artikel ini menurunkan rumusnya, satu contoh hitung, tabel trade-off biaya, dan asumsi yang membatasinya.

> **Ringkasnya:** economic order quantity (EOQ) adalah kuantitas pemesanan yang meminimalkan total biaya persediaan dengan menyeimbangkan biaya pemesanan dan biaya penyimpanan. Nilainya dihitung dari akar kuadrat 2 dikali permintaan tahunan dikali biaya per pesanan, dibagi biaya penyimpanan per unit — sehingga jumlah pesan ditetapkan dari data biaya, bukan dari kebiasaan.

## Rumus EOQ dan Contoh Perhitungannya

Rumus EOQ hanya membutuhkan tiga variabel: permintaan tahunan, biaya per pesanan, dan biaya penyimpanan per unit per tahun. Harga beli per unit dan *lead time* (waktu tunggu pengiriman) tidak masuk hitungan dasar. Model ini diperkenalkan Ford W. Harris pada 1913 dan dianalisis R. H. Wilson, sehingga kerap disebut *Wilson formula*.

Sebagai keputusan pengadaan di dalam proses [supply chain management](https://www.soltius.co.id/id/blog/apa-itu-supply-chain-management), EOQ menuntut tiga angka yang biasanya sudah dimiliki tim persediaan. Rumusnya, konsisten lintas sumber operasi termasuk [Corporate Finance Institute](https://corporatefinanceinstitute.com/resources/accounting/what-is-eoq-formula/):

**EOQ = √(2DS ÷ H)**, dengan **D** permintaan tahunan (unit), **S** biaya per pesanan, dan **H** biaya penyimpanan per unit per tahun.

Angka berikut ilustrasi. Sebuah distributor memiliki permintaan tahunan yang stabil dan biaya yang terpelihara rapi:

1. Kumpulkan tiga variabel: **D = 5.000 unit/tahun**, **S = Rp100.000 per pesanan**, **H = Rp1.000 per unit per tahun**.
2. Masukkan ke rumus: EOQ = √(2 × 5.000 × 100.000 ÷ 1.000).
3. Hitung pembilang: 2 × 5.000 × 100.000 = 1.000.000.000, lalu bagi dengan H: ÷ 1.000 = 1.000.000.
4. Tarik akar kuadratnya: √1.000.000 = **1.000 unit** per pesanan.
5. Konsekuensinya, pada permintaan 5.000 unit itu berarti **5 kali pesan setahun** (5.000 ÷ 1.000), atau sekitar setiap 73 hari.

## Mengapa EOQ Menghasilkan Total Biaya Terendah?

Karena dua komponen biaya bergerak berlawanan arah terhadap ukuran pesanan. Makin besar sekali pesan, biaya pemesanan tahunan turun karena frekuensinya berkurang, tetapi biaya penyimpanan naik karena stok rata-rata lebih tinggi. EOQ adalah titik keduanya bertemu, tempat total biaya paling rendah. Itulah manfaat utamanya.

Tabel berikut memakai angka contoh yang sama dan menunjukkan biaya total di tiga ukuran pesanan:

| Kuantitas pesan (Q) | Frekuensi (D÷Q) | Biaya pemesanan (D÷Q × S) | Persediaan rata-rata (Q÷2) | Biaya penyimpanan (Q÷2 × H) | Total biaya |
|---|---|---|---|---|---|
| 500 | 10× | Rp1.000.000 | 250 | Rp250.000 | Rp1.250.000 |
| **1.000 (EOQ)** | **5×** | **Rp500.000** | **500** | **Rp500.000** | **Rp1.000.000** |
| 2.000 | 2,5× | Rp250.000 | 1.000 | Rp1.000.000 | Rp1.250.000 |

Pada EOQ, biaya pemesanan sama besar dengan biaya penyimpanan, masing-masing Rp500.000, dan total Rp1.000.000 lebih rendah daripada Rp1.250.000 baik di kuantitas 500 maupun 2.000. Kesamaan kedua biaya di titik itu bukan kebetulan angka, melainkan konsekuensi matematis rumusnya. Pola inilah yang membentuk kurva biaya berbentuk U.

## Asumsi dan Keterbatasan EOQ yang Harus Diketahui

Rumus EOQ tampak bersih karena bersandar pada asumsi yang jarang benar utuh di lapangan. Karena itu hasilnya adalah titik acuan, bukan angka pesan mutlak. Empat asumsi berikut paling sering meleset, dan masing-masing menggeser kuantitas optimal ketika kondisinya berubah:

- **Permintaan konstan dan diketahui.** Bila permintaan berfluktuasi atau musiman, EOQ perlu ditinjau berkala.
- **Biaya pesan dan simpan tetap.** Bila ongkos kirim atau biaya modal berubah, nilai EOQ ikut bergeser.
- **Tanpa diskon kuantitas.** Bila pemasok memberi diskon volume, kuantitas paling ekonomis bisa berada di atas EOQ dan menuntut analisis biaya terpisah.
- **Pesanan diterima sekaligus tanpa kehabisan stok.** Model dasar tidak memperhitungkan pengiriman bertahap maupun *stockout*.

Karena keterbatasan itu, EOQ dipakai berdampingan dengan *safety stock* (stok pengaman) dan [reorder point](https://www.soltius.co.id/id/blog/reorder-point-rumus-contoh-perhitungan) untuk menutup ketidakpastian yang tidak dimodelkannya. Pembagiannya sederhana: EOQ menetapkan berapa yang dipesan, reorder point menetapkan kapan memesan.

## EOQ dalam Sistem Perencanaan Persediaan Modern

EOQ bukan hitungan sekali di spreadsheet. Karena nilainya berubah setiap permintaan atau struktur biaya bergeser, di sistem ERP ia menjadi parameter *lot-sizing* yang dihitung ulang otomatis, bukan angka yang ditetapkan sekali lalu dilupakan.

Di SAP S/4HANA, EOQ termasuk salah satu prosedur *optimum lot-sizing* pada perencanaan kebutuhan material: sistem menghitung ukuran lot yang meminimalkan gabungan biaya pemesanan dan biaya penyimpanan, sepanjang kedua biaya itu terpelihara di data material (SAP Help Portal). Untuk perencanaan persediaan lintas produk dan lokasi, perusahaan memakai SAP Integrated Business Planning (SAP IBP).

## FAQ (Pertanyaan yang Sering Diajukan)

### Apa itu rumus EOQ dan bagaimana menghitungnya?

Rumus EOQ adalah akar kuadrat dari (2 × permintaan tahunan × biaya per pesanan) ÷ biaya penyimpanan per unit, ditulis **EOQ = √(2DS/H)**. Contoh: permintaan 5.000 unit, biaya pesan Rp100.000, biaya simpan Rp1.000 per unit menghasilkan EOQ = √1.000.000 = **1.000 unit** per pesanan.

### Apa perbedaan EOQ dan reorder point (ROP)?

Keduanya alat persediaan yang saling melengkapi. EOQ menjawab **berapa** yang dipesan sekali pesan, hasilnya kuantitas per PO; ROP menjawab **kapan** memesan, hasilnya level stok pemicu. EOQ menentukan ukuran pesanan, ROP menentukan waktunya, dan keduanya dipakai bersama dalam satu kebijakan pengisian ulang.

### Apa kelemahan atau keterbatasan metode EOQ?

EOQ mengasumsikan permintaan konstan dan diketahui, biaya pesan dan simpan tetap, tanpa diskon kuantitas, serta penerimaan sekaligus tanpa stockout. Karena asumsi ini jarang benar utuh, EOQ menjadi titik acuan yang dilengkapi safety stock dan reorder point, bukan angka pesan mutlak.

## Kesimpulan

Menebak kuantitas pesan dari kebiasaan menyembunyikan biaya yang sebenarnya bisa dihitung. EOQ mengubahnya menjadi angka: satu titik tempat biaya pemesanan dan penyimpanan seimbang dan total terendah, selama asumsinya dijaga dan dilengkapi safety stock serta reorder point. Sebagai SAP Platinum Partner melalui keanggotaan United VARs dan berpengalaman sejak 1998, Soltius mengimplementasikan dan mendampingi perencanaan rantai pasok SAP seperti SAP IBP untuk perusahaan manufaktur dan distribusi.

Untuk mendiskusikan penerapan economic order quantity dan perencanaan persediaan di atas SAP IBP, kunjungi soltius.co.id.
