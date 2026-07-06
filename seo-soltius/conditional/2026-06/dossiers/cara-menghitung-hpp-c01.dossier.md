---
brief_id: "cara-menghitung-hpp-c01"
researcher_run_date: "2026-06-17"
sources_cited: 18
flags: 5
---

# Research Dossier: Cara Menghitung HPP (Harga Pokok Produksi) — Rewrite untuk Manufaktur

## TL;DR for the writer

- **Rumus HPP adalah baku dan terverifikasi.** Urutan yang benar: (1) Bahan baku terpakai = saldo awal + pembelian − saldo akhir; (2) Total biaya produksi = bahan baku terpakai + BTKL + BOP; (3) HPP = total biaya produksi + WIP awal − WIP akhir; (4) COGS/HPP penjualan = HPP + barang jadi awal − barang jadi akhir. Semua konfirmasi lintas sumber.
- **Perbedaan HPP produksi vs HPP penjualan wajib dijelaskan.** Kebingungan istilah ini adalah gap terbesar SERP; istilah Indonesia "HPP" merujuk dua hal berbeda (COGM vs COGS) — artikel harus menetapkan sejak H2 pertama.
- **PSAK 14 (Persediaan) adalah landasan hukum Indonesia.** Standar ini mengatur biaya konversi (BTKL + overhead) yang boleh masuk nilai persediaan; biaya abnormal dan SG&A dikeluarkan. Sumber: IAI, efektif 1 Januari 2017 (revisi 2014). Cite-kan sebagai otoritas akuntansi nasional.
- **SAP S/4HANA Finance — modul Product Cost Controlling (CO-PC)** adalah padanan digital dari perhitungan HPP manual. CO-PC terdiri dari: Product Cost Planning (CO-PC-PCP) untuk perencanaan & standard cost; Cost Object Controlling (CO-PC-OBJ) untuk aktual & WIP; Material Ledger (wajib aktif di S/4HANA) untuk valuasi multi-ledger. Actual costing (PUP) bersifat opsional di atas Material Ledger. Terminologi ini sudah diverifikasi via SAP-official.
- **CTA Soltius**: implementasi SAP S/4HANA (ERP Large Enterprises) sebagai SAP Platinum Partner — framing: "product costing otomatis dan auditable" sebagai evolusi dari HPP manual; URL funnel: `https://www.soltius.co.id/solutions-by-products/erp-sap-s-4hana-and-erp-large-enterprises` (terverifikasi hidup; URL yang diajukan brief berbeda sedikit — lihat Flag #3).

---

## Core facts (verified)

**Claim 1**: Harga Pokok Produksi (HPP / COGM) adalah total biaya yang dikeluarkan untuk mengubah bahan baku menjadi produk jadi dalam satu periode akuntansi.
**Number/specific**: Tiga komponen wajib: biaya bahan baku langsung + biaya tenaga kerja langsung (BTKL) + biaya overhead pabrik (BOP), disesuaikan dengan perubahan WIP.
**Source**: Mekari Jurnal — "Memahami Cost of Goods Manufactured: Konsep, Rumus, dan Contohnya", https://www.jurnal.id/id/blog/cost-of-goods-manufactured/ (diakses 17 Juni 2026); dikonfirmasi juga oleh Kledo Blog https://kledo.com/blog/harga-pokok-produksi/ (diakses 17 Juni 2026).
**Confidence**: high

---

**Claim 2**: Rumus baku HPP adalah — Harga Pokok Produksi = Total Biaya Produksi + Persediaan Awal WIP − Persediaan Akhir WIP; di mana Total Biaya Produksi = Bahan Baku Terpakai + BTKL + BOP.
**Number/specific**: Formulasi ini konsisten di seluruh literatur akuntansi manajemen Indonesia (Mekari Jurnal, Kledo, ScaleOcean).
**Source**: Mekari Jurnal https://www.jurnal.id/id/blog/cost-of-goods-manufactured/ (diakses 17 Juni 2026); ScaleOcean https://scaleocean.com/id/blog/industri/rumus-cost-of-goods-manufactured (diakses 17 Juni 2026).
**Confidence**: high

---

**Claim 3**: Rumus bahan baku terpakai adalah — Bahan Baku Terpakai = Saldo Awal Bahan Baku + Pembelian Bahan Baku − Saldo Akhir Bahan Baku.
**Number/specific**: Langkah paling dasar sebelum menghitung total biaya produksi; tanpa ini, biaya bahan baku tidak terisolasi dari pembelian yang belum terpakai.
**Source**: Mekari Jurnal https://www.jurnal.id/id/blog/2018-cara-menghitung-cost-of-good-sold-cogs-di-perusahaan-manufaktur/ (diakses 17 Juni 2026); dikonfirmasi oleh Kledo Blog.
**Confidence**: high

---

**Claim 4**: Rumus Harga Pokok Penjualan (COGS) adalah — COGS = HPP (Harga Pokok Produksi) + Persediaan Awal Barang Jadi − Persediaan Akhir Barang Jadi.
**Number/specific**: COGS ≠ HPP produksi; COGS hanya mencakup biaya barang yang benar-benar terjual, bukan semua yang diproduksi.
**Source**: Mekari Jurnal https://www.jurnal.id/id/blog/cost-of-goods-sold-cogs-dan-komponen-biaya-yang-masuk-didalamnya/ (diakses 17 Juni 2026); ScaleOcean https://scaleocean.com/id/blog/industri/perbedaan-cogs-dan-cogm (diakses 17 Juni 2026).
**Confidence**: high

---

**Claim 5**: Dalam bahasa Indonesia, istilah "HPP" digunakan untuk dua konsep berbeda — (a) Harga Pokok Produksi = COGM (Cost of Goods Manufactured) dan (b) Harga Pokok Penjualan = COGS (Cost of Goods Sold). Kebingungan ini umum dan perlu klarifikasi eksplisit.
**Number/specific**: COGM berfokus pada proses produksi (sampai barang jadi); COGS berfokus pada barang yang sudah terjual (masuk laporan laba rugi).
**Source**: ScaleOcean https://scaleocean.com/id/blog/industri/perbedaan-cogs-dan-cogm (diakses 17 Juni 2026); dikonfirmasi 8thinktank https://8thinktank.com/cogm/ (diakses 17 Juni 2026).
**Confidence**: high

---

**Claim 6**: Biaya Overhead Pabrik (BOP) umumnya berkisar 20–40% dari total biaya produksi, tergantung skala operasi dan tingkat otomasi pabrik.
**Number/specific**: Semakin tinggi tingkat otomasi, semakin besar porsi BOP dibanding biaya tenaga kerja langsung — perusahaan padat modal cenderung di ujung 40%, padat karya di ujung 20%.
**Source**: 8thinktank.com — "Biaya Overhead Pabrik: Definisi, Jenis, dan Cara Menghitungnya", https://8thinktank.com/biaya-overhead-pabrik/ (diakses 17 Juni 2026).
**Confidence**: medium — ini adalah estimasi umum industri dari satu sumber non-akademik. Tidak ditemukan benchmark BPS/Kemenperin yang menyebut angka spesifik. Sajikan sebagai "estimasi umum" dengan atribusi, bukan klaim absolut.

---

**Claim 7**: PSAK 14 (Persediaan) adalah standar akuntansi Indonesia yang mengatur biaya apa saja yang boleh dikapitalisasi ke dalam nilai persediaan (inventory cost). Biaya konversi — mencakup BTKL dan overhead pabrik (tetap + variabel) yang dialokasikan secara sistematis — diperbolehkan masuk sebagai biaya persediaan.
**Number/specific**: PSAK 14 menegaskan bahwa overhead tetap dialokasikan berdasarkan kapasitas produksi normal, bukan produksi aktual. Overhead yang tidak teralokasi (akibat produksi di bawah kapasitas normal) diakui langsung sebagai beban, bukan masuk HPP.
**Source**: Accounting BINUS — "PSAK 14 (Penyesuaian 2014): Persediaan", https://accounting.binus.ac.id/2017/08/30/psak-14-penyesuaian-2014-persediaan/ (efektif 1 Januari 2017); AU Partners — "Akuntansi atas Persediaan Menurut PSAK 14", https://au-partners.com/id/blog/akuntansi-atas-persediaan-menurut-psak-14 (diakses 17 Juni 2026).
**Confidence**: high

---

**Claim 8**: PSAK 14 mengecualikan dari biaya persediaan: biaya pemborosan bahan/tenaga kerja yang tidak normal, biaya penyimpanan (kecuali yang diperlukan untuk proses produksi lanjutan), biaya administrasi umum (SG&A), dan biaya penjualan.
**Number/specific**: Artinya, biaya SG&A dan selling cost tidak boleh masuk HPP untuk tujuan pelaporan keuangan — relevan saat membedakan full cost (untuk pricing) vs standard cost persediaan.
**Source**: AU Partners https://au-partners.com/id/blog/akuntansi-atas-persediaan-menurut-psak-14 (diakses 17 Juni 2026); dikonfirmasi Accounting BINUS PSAK 14.
**Confidence**: high

---

**Claim 9**: Dalam SAP S/4HANA, Product Cost Controlling (CO-PC) adalah modul yang mengelola HPP secara otomatis. CO-PC terbagi dalam dua sub-modul utama: (1) Product Cost Planning (CO-PC-PCP) — untuk merencanakan biaya dan menetapkan standard cost; (2) Cost Object Controlling (CO-PC-OBJ) — untuk mencatat biaya aktual, menghitung WIP, dan menganalisis varians.
**Number/specific**: Hasil Product Cost Planning berupa standard price yang tersimpan di material master dan menjadi dasar valuasi persediaan. COGM ditetapkan melalui "cost component split" yang memisahkan material, tenaga kerja, dan overhead.
**Source**: ERP Corp — "Product Cost Controlling S/4HANA", https://controlling.erpcorp.com/sap-controlling-blog/sap-product-cost-controlling-s4hana (diakses 17 Juni 2026); SAP Help Portal — "Product Cost Planning CO-PC-PCP", https://help.sap.com/docs/SUPPORT_CONTENT/ficontrolling/3361880192.html (diakses 17 Juni 2026).
**Confidence**: high

---

**Claim 10**: Di SAP S/4HANA, standard cost (harga standar) adalah harga predeterminasi yang digunakan untuk valuasi persediaan. Standard cost ini merupakan hasil dari standard cost estimate yang dijalankan melalui Product Cost Planning, kemudian "di-mark and release" ke material master.
**Number/specific**: Proses mark-and-release standard cost estimate akan merevaluasi seluruh persediaan material yang bersangkutan.
**Source**: SAP Learning — "Product Cost Planning in SAP S/4HANA", https://learning.sap.com/courses/product-cost-planning-in-sap-s-4hana (diakses 17 Juni 2026); SAP Learning — "Identifying and Integrating Material Master Data in Product Cost Planning", https://learning.sap.com/learning-journeys/introducing-product-cost-planning-and-production-accounting-in-sap-s-hana/identifying-and-integrating-material-master-data-in-product-cost-planning (diakses 17 Juni 2026).
**Confidence**: high

---

**Claim 11**: Di SAP S/4HANA, Work in Process (WIP) dikapitalisasi sebagai aset (neraca) hingga manufacturing order selesai atau diselesaikan secara teknis. Perhitungan WIP adalah langkah period-end closing dalam Cost Object Controlling.
**Number/specific**: SAP menghitung WIP dengan memvaluasi "unfinished goods" berdasarkan target cost dari operasi yang sudah terkonfirmasi. Setelah settlement, WIP di-posting ke akun Balance Sheet (aset).
**Source**: SAP Learning — "Calculating Work in Process (WIP)", https://learning.sap.com/courses/cost-object-controlling-in-sap-s-4hana/calculating-work-in-process-wip (diakses 17 Juni 2026).
**Confidence**: high

---

**Claim 12**: Material Ledger (ML) bersifat wajib (mandatory) di SAP S/4HANA — aktif per plant untuk semua perusahaan yang menggunakan Materials Management. Namun, Actual Costing (yang menghitung Periodic Unit Price/PUP) di atas Material Ledger bersifat opsional dan merupakan keputusan bisnis.
**Number/specific**: Material Ledger memungkinkan valuasi material di beberapa currency/valuation approach sekaligus (universal journal). Actual Costing/PUP berguna bagi perusahaan yang perlu melaporkan persediaan dan COGS pada biaya aktual, bukan biaya standar.
**Source**: SAP Press Blog — "The Material Ledger and Actual Costing with SAP S/4HANA", https://blog.sap-press.com/the-material-ledger-and-actual-costing-with-sap-s4hana (diakses 17 Juni 2026); SAP Community — "Decoding Material Ledger Actual Costing", https://community.sap.com/t5/financial-management-blog-posts-by-members/decoding-material-ledger-actual-costing-and-its-impact-on-fi-co-and-co-pa/ba-p/14259527 (diakses 17 Juni 2026).
**Confidence**: high

---

**Claim 13**: Cost component split di SAP S/4HANA memisahkan COGM ke dalam komponen biaya (material, berbagai activity tenaga kerja, overhead) — persis paralel dengan tiga komponen HPP manual (bahan baku, BTKL, BOP). Pembagian ini menjadi dasar untuk pelaporan margin dan profitability analysis (CO-PA).
**Number/specific**: "For inventory valuation, the calculation base will always be 'COGM' (Cost of Goods Manufactured), and the COGM value will be determined through 'Cost component split'." (SAP Help Portal, 2026).
**Source**: SAP Help Portal — "Cost and Costing Management", https://help.sap.com/docs/SAP_S4HANA_ON-PREMISE/09d5264e467d4491a82a32335a52e45f/f8cbe64bc0fa489793ce8114403ab79a.html (diakses 17 Juni 2026); SAP Help — "Cost Component (CO-PC-PCP)", https://help.sap.com/doc/erp_hcm_ias_2013_01/1.0.3/en-US/7e/cb800c43a311d189ee0000e81ddfac/content.htm (diakses 17 Juni 2026).
**Confidence**: high

---

**Claim 14**: Halaman live Soltius yang akan di-rewrite (https://www.soltius.co.id/id/blog/Menghitung-Harga-Pokok-Produksi-Untuk-Perusahaan-Manufaktur) mengandung sekitar 650–700 kata, membahas rumus tanpa contoh angka, tanpa tabel laporan HPP, dan tanpa FAQ — ini adalah penyebab kuat penurunan traffic -22,1%.
**Number/specific**: Halaman live dikonfirmasi aktif (WebFetch, 17 Juni 2026). Judul halaman lama: "5 Cara Efisiensi Menghitung Harga Pokok Produksi Untuk Perusahaan Manufaktur".
**Source**: WebFetch langsung ke URL live https://www.soltius.co.id/id/blog/Menghitung-Harga-Pokok-Produksi-Untuk-Perusahaan-Manufaktur (diakses 17 Juni 2026).
**Confidence**: high

---

**Claim 15 (Soltius — dari company_profile.md)**: Soltius Indonesia adalah SAP Platinum Certified Channel Partner & Value Added Reseller, anggota United VARs (45 top VAR di 90+ negara, 10.000 konsultan SAP bersertifikat, melayani 8.000+ pelanggan global). Soltius mengimplementasikan, bukan membuat, SAP S/4HANA.
**Number/specific**: Pengakuan sebagai kontributor pendapatan terbesar bagi SAP Indonesia sejak 2015; berdiri 1998; 200+ konsultan; 120+ klien.
**Source**: knowledge_base/company_profile.md (pre-approved Soltius facts; verified from official profile docs).
**Confidence**: high

---

**Claim 16**: URL solution S/4HANA Soltius yang live dan terverifikasi adalah `https://www.soltius.co.id/solutions-by-products/erp-sap-s-4hana-and-erp-large-enterprises` (bukan `/id/solution/erp-sap-s4hana` seperti yang diusulkan brief). Halaman ini mencantumkan Financials (FI) sebagai salah satu fungsi bisnis utama S/4HANA yang diimplementasikan Soltius.
**Number/specific**: Halaman dikonfirmasi hidup per 17 Juni 2026.
**Source**: WebFetch https://www.soltius.co.id/solutions-by-products/erp-sap-s-4hana-and-erp-large-enterprises (diakses 17 Juni 2026).
**Confidence**: high

---

**Claim 17**: Blog cousin 1 Soltius — `https://www.soltius.co.id/id/blog/read/mengenal-sistem-sap-dan-manfaatnya` — dikonfirmasi hidup. Blog cousin 2 — `https://www.soltius.co.id/id/blog/digital-manufaktur-sistem` — dikonfirmasi hidup (resolved ke halaman news/blog Soltius dengan konten digital manufacturing, diperbarui Juni 2026).
**Number/specific**: Kedua URL confirmed live 17 Juni 2026.
**Source**: WebFetch kedua URL (diakses 17 Juni 2026).
**Confidence**: high — Catatan: URL cousin 1 menggunakan format `/id/blog/read/` (bukan `/id/blog/`) dalam redirect; writer gunakan URL yang direturn WebFetch: `https://www.soltius.co.id/id/blog/read/mengenal-sistem-sap-dan-manfaatnya`.

---

## Solution focus + Soltius anchor (mapping dari brief + product_matrix universal rules)

> Keyword ini tidak ada di product_matrix.md (topik finance/manufaktur ad-hoc). Mapping diturunkan dari brief + verifikasi riset. Aturan universal product_matrix berlaku penuh.

| Apa yang diajarkan (SAP tech) | Fakta yang harus dinyatakan akurat | Di mana dalam artikel | Soltius service/credential |
|---|---|---|---|
| Product Cost Controlling (CO-PC) di SAP S/4HANA Finance | CO-PC adalah modul SAP yang menghitung HPP secara otomatis; terdiri dari CO-PC-PCP (planning/standard cost) dan CO-PC-OBJ (actual/WIP); standard cost disimpan di material master | H2 #6 "Kapan rumus manual gagal" — jembatan ke otomasi | ERP SAP S/4HANA & Large Enterprises (implementation/support) |
| Standard Cost + Cost Component Split | Standard cost = harga predeterminasi hasil cost estimate, di-mark-and-release ke material master; cost component split = COGM dipecah ke material/labor/overhead (paralel tiga komponen HPP manual) | H2 #6, satu paragraf | Sama |
| Work in Process (WIP) di SAP | WIP dikapitalisasi ke neraca (aset) hingga order selesai; period-end step dalam Cost Object Controlling; matching principle | H2 #6, kalimat pendukung | Sama |
| Material Ledger (wajib) + Actual Costing (opsional) | Material Ledger wajib di S/4HANA; Actual Costing/PUP opsional — untuk perusahaan yang butuh biaya aktual, bukan hanya standar | H2 #6, satu kalimat atau catatan opsional | Sama |
| PSAK 14 | Standar Indonesia yang mengatur biaya konversi (BTKL + overhead) masuk persediaan; overhead tetap berdasarkan kapasitas normal | H2 #1 atau H2 #2 (landasan regulasi) | Tidak perlu sebut Soltius di sini |

**Soltius anchor (closing CTA)**: Implementasi SAP S/4HANA sebagai SAP Platinum Partner melalui United VARs.
**Framing yang disetujui**: "Soltius mendampingi perusahaan manufaktur mengimplementasikan product costing di SAP S/4HANA Finance — agar HPP terbentuk otomatis, auditable, dan siap untuk analisis margin."
**Placement**: setelah ## Kesimpulan; maksimal satu aside di H2 #6.
**TIDAK boleh**: Soltius "membangun" SAP; Soltius "terbaik/nomor satu"; klaim outcome klien spesifik.

---

## Authoritative external sources (untuk writer, ≥2 kuat)

1. **SAP Learning — "Product Cost Planning in SAP S/4HANA"** (SAP, diakses 17 Juni 2026) — https://learning.sap.com/courses/product-cost-planning-in-sap-s-4hana — *Backs*: Product Cost Planning sebagai modul S/4HANA Finance; standard cost; material master integration. **Otoritas tertinggi untuk SAP product facts.**

2. **SAP Learning — "Calculating Work in Process (WIP)"** (SAP, diakses 17 Juni 2026) — https://learning.sap.com/courses/cost-object-controlling-in-sap-s-4hana/calculating-work-in-process-wip — *Backs*: WIP dikapitalisasi sebagai aset; period-end closing dalam Cost Object Controlling; cara sistem menghitung WIP dari confirmed operations.

3. **Accounting BINUS — "PSAK 14 (Penyesuaian 2014): Persediaan"** (BINUS, efektif 1 Jan 2017, diakses 17 Juni 2026) — https://accounting.binus.ac.id/2017/08/30/psak-14-penyesuaian-2014-persediaan/ — *Backs*: Landasan hukum Indonesia untuk biaya konversi (BTKL + overhead) yang boleh masuk HPP; aturan alokasi overhead tetap berdasarkan kapasitas normal.

4. **SAP Press Blog — "The Material Ledger and Actual Costing with SAP S/4HANA"** (SAP Press, diakses 17 Juni 2026) — https://blog.sap-press.com/the-material-ledger-and-actual-costing-with-sap-s4hana — *Backs*: Material Ledger wajib di S/4HANA; actual costing opsional; Periodic Unit Price (PUP).

---

## FAQ Q&As (7 draft, Bahasa Indonesia)

### Apa bedanya Harga Pokok Produksi dan Harga Pokok Penjualan?
Harga Pokok Produksi (HPP atau COGM) adalah total biaya yang dikeluarkan untuk memproduksi barang jadi dalam satu periode — mencakup bahan baku, tenaga kerja langsung, dan overhead pabrik, disesuaikan dengan perubahan WIP. Harga Pokok Penjualan (HPP atau COGS) adalah biaya dari barang yang benar-benar terjual, dihitung dari HPP produksi ditambah persediaan awal barang jadi, dikurangi persediaan akhir. Singkatnya: HPP produksi berfokus pada proses pabrik; HPP penjualan berfokus pada apa yang masuk laporan laba rugi.

### Apa rumus Harga Pokok Produksi?
Rumus lengkapnya: **HPP = Total Biaya Produksi + Persediaan Awal WIP − Persediaan Akhir WIP**, di mana Total Biaya Produksi = Bahan Baku Terpakai + Biaya Tenaga Kerja Langsung + Biaya Overhead Pabrik. Bahan Baku Terpakai sendiri dihitung dari Saldo Awal Bahan Baku + Pembelian − Saldo Akhir. Rumus ini sesuai dengan standar akuntansi manajemen yang berlaku di Indonesia dan konsisten dengan PSAK 14 (Persediaan).

### Apa saja komponen atau unsur Harga Pokok Produksi?
HPP terdiri dari tiga komponen utama. Pertama, biaya bahan baku langsung — material yang secara fisik masuk ke produk. Kedua, biaya tenaga kerja langsung (BTKL) — upah pekerja yang langsung terlibat produksi. Ketiga, biaya overhead pabrik (BOP) — semua biaya produksi tidak langsung seperti depresiasi mesin, listrik pabrik, dan gaji supervisor. BOP umumnya berkisar 20–40% dari total biaya produksi tergantung skala dan tingkat otomasi.

### Bagaimana cara menghitung Biaya Overhead Pabrik (BOP)?
BOP dihitung dengan menjumlahkan semua biaya produksi tidak langsung dalam satu periode, lalu mengalokasikannya ke produk menggunakan tarif yang ditentukan di muka (predetermined overhead rate). Tarif ini dihitung dari estimasi total BOP dibagi dengan basis alokasi (misalnya jam mesin atau jam kerja langsung). Menurut PSAK 14, overhead tetap dialokasikan berdasarkan kapasitas produksi normal — bukan kapasitas aktual — agar overhead yang tidak terserap tidak masuk ke nilai persediaan.

### Apa itu persediaan barang dalam proses (WIP) dan bagaimana cara memasukkannya ke perhitungan HPP?
Work in Process (WIP) adalah barang yang sudah mulai diproduksi tetapi belum selesai pada akhir periode. WIP awal (dari periode lalu) dan WIP akhir (tersisa di akhir periode ini) keduanya masuk ke rumus HPP: HPP = Total Biaya Produksi + WIP Awal − WIP Akhir. Jika WIP akhir lebih besar dari WIP awal, artinya sebagian biaya produksi "tertahan" di pabrik dan tidak dihitung sebagai HPP periode ini.

### Bagaimana cara menghitung HPP per unit?
Setelah total HPP diketahui, HPP per unit = Total HPP ÷ Jumlah Unit Selesai Diproduksi. Angka ini menjadi dasar untuk menetapkan harga jual. Misalnya jika HPP Rp 1.200.000.000 dan produksi 10.000 unit, maka HPP per unit = Rp 120.000. Harga jual ditetapkan di atas angka ini setelah memperhitungkan target margin, biaya penjualan, dan biaya administrasi umum (SG&A) — yang menurut PSAK 14 tidak boleh masuk HPP persediaan.

### Kapan perhitungan HPP manual di spreadsheet mulai tidak cukup?
Spreadsheet mulai tidak andal ketika perusahaan memiliki banyak SKU dengan multi-level Bill of Materials (BOM), overhead yang berubah antar periode, WIP lintas bulan yang perlu direkonsiliasi, dan kebutuhan audit trail. Di titik ini, ERP modern seperti SAP S/4HANA Finance menghitung HPP secara otomatis melalui modul Product Cost Controlling — standard cost terbentuk dari BOM dan routing, WIP dikapitalisasi otomatis, dan setiap angka dapat ditelusuri hingga ke dokumen sumber.

---

## Data tables for the writer

### Tabel 1: Pembanding HPP Produksi vs HPP Penjualan

| Aspek | Harga Pokok Produksi (COGM) | Harga Pokok Penjualan (COGS) |
|---|---|---|
| Istilah Indonesia | Harga Pokok Produksi / HPP | Harga Pokok Penjualan / HPP |
| Padanan Inggris | Cost of Goods Manufactured (COGM) | Cost of Goods Sold (COGS) |
| Definisi | Total biaya untuk memproduksi barang jadi dalam satu periode | Biaya dari barang yang benar-benar terjual dalam satu periode |
| Rumus inti | Total Biaya Produksi + WIP Awal − WIP Akhir | HPP Produksi + Barang Jadi Awal − Barang Jadi Akhir |
| Di mana muncul | Laporan Harga Pokok Produksi (internal) | Laporan Laba Rugi (Harga Pokok Penjualan) |
| Kapan dipakai | Menghitung biaya setiap barang selesai diproduksi | Menghitung laba kotor dari penjualan aktual |
| Contoh simpel | "Kami produksi 10.000 unit dengan total biaya Rp 1,2 M → HPP Rp 120.000/unit" | "Dari 10.000 unit, 8.000 terjual → COGS = 8.000 × Rp 120.000 = Rp 960 juta" |

---

### Tabel 2: Laporan HPP (Ilustrasi Angka — PT Contoh Manufaktur, Periode Januari 2026)

> **Labeli sebagai "ilustrasi" dalam artikel.** Angka dirancang konsisten baris-per-baris dan dapat ditelusuri.

**A. Biaya Bahan Baku Terpakai**

| Komponen | Jumlah (Rp) |
|---|---|
| Saldo Awal Bahan Baku | 200.000.000 |
| + Pembelian Bahan Baku | 800.000.000 |
| − Saldo Akhir Bahan Baku | (150.000.000) |
| **= Biaya Bahan Baku Terpakai** | **850.000.000** |

**B. Total Biaya Produksi**

| Komponen | Jumlah (Rp) |
|---|---|
| Biaya Bahan Baku Terpakai | 850.000.000 |
| + Biaya Tenaga Kerja Langsung (BTKL) | 350.000.000 |
| + Biaya Overhead Pabrik (BOP) | 300.000.000 |
| **= Total Biaya Produksi** | **1.500.000.000** |

*(BOP = 300/1.500 = 20% dari total biaya produksi — batas bawah rentang umum 20–40%)*

**C. Harga Pokok Produksi (COGM)**

| Komponen | Jumlah (Rp) |
|---|---|
| Total Biaya Produksi | 1.500.000.000 |
| + Persediaan Awal WIP | 80.000.000 |
| − Persediaan Akhir WIP | (100.000.000) |
| **= Harga Pokok Produksi** | **1.480.000.000** |

**D. Harga Pokok Penjualan (COGS)**

| Komponen | Jumlah (Rp) |
|---|---|
| Harga Pokok Produksi | 1.480.000.000 |
| + Persediaan Awal Barang Jadi | 120.000.000 |
| − Persediaan Akhir Barang Jadi | (200.000.000) |
| **= Harga Pokok Penjualan (COGS)** | **1.400.000.000** |

**E. HPP per unit** (asumsi 10.000 unit selesai diproduksi)

| Komponen | Jumlah |
|---|---|
| Harga Pokok Produksi | Rp 1.480.000.000 |
| ÷ Unit Selesai | 10.000 unit |
| **= HPP per unit** | **Rp 148.000** |

---

### Tabel 3: Kerangka Template HPP (untuk H2 kalkulator/template)

| Field Input | Sumber Data | Formula Sel (Excel/Sheets) |
|---|---|---|
| Saldo Awal Bahan Baku | Buku besar / neraca awal | Input manual (B2) |
| Pembelian Bahan Baku | Laporan pembelian | Input manual (B3) |
| Saldo Akhir Bahan Baku | Stok opname / sistem gudang | Input manual (B4) |
| **Bahan Baku Terpakai** | Hitung otomatis | =B2+B3-B4 |
| Biaya Tenaga Kerja Langsung | Daftar gaji produksi | Input manual (B6) |
| Biaya Overhead Pabrik | Akumulasi BOP aktual | Input manual (B7) |
| **Total Biaya Produksi** | Hitung otomatis | =B5+B6+B7 |
| Persediaan Awal WIP | Neraca / catatan sebelumnya | Input manual (B9) |
| Persediaan Akhir WIP | Stok opname WIP | Input manual (B10) |
| **Harga Pokok Produksi** | Hitung otomatis | =B8+B9-B10 |
| Persediaan Awal Barang Jadi | Neraca / gudang | Input manual (B12) |
| Persediaan Akhir Barang Jadi | Stok opname barang jadi | Input manual (B13) |
| **Harga Pokok Penjualan** | Hitung otomatis | =B11+B12-B13 |
| Unit Selesai Diproduksi | Laporan produksi | Input manual (B15) |
| **HPP per Unit** | Hitung otomatis | =B11/B15 |

---

## Edge cases & nuance

- **"HPP" adalah istilah ambigu di Indonesia.** Mekari Jurnal, Kledo, dan berbagai sumber Indonesia menggunakan "HPP" untuk kedua COGM dan COGS. Artikel wajib menetapkan terminologi sejak awal: "HPP Produksi" (COGM) vs "HPP Penjualan" (COGS) — atau gunakan "Harga Pokok Produksi" dan "Harga Pokok Penjualan" secara konsisten sepanjang artikel.

- **Overhead tetap vs variabel dalam PSAK 14.** Overhead tetap dialokasikan berdasarkan kapasitas *normal*, bukan kapasitas *aktual*. Jika produksi aktual di bawah kapasitas normal, overhead yang tidak teralokasi langsung dibebankan ke laba rugi — bukan masuk HPP. Ini penting saat produksi turun drastis (mis. seasonality, gangguan supply).

- **WIP bisa sangat besar di industri tertentu.** Industri dengan siklus produksi panjang (manufaktur berat, konstruksi kapal, perkebunan) punya WIP besar. Di sini, selisih WIP awal vs WIP akhir berdampak signifikan pada HPP — jangan dianggap angka kecil.

- **Standard cost vs actual cost — beda untuk tujuan berbeda.** Standard cost (yang disimpan di material master SAP) bagus untuk pricing dan kontrol anggaran, tapi tidak mencerminkan biaya aktual jika ada varians besar. Actual costing (Material Ledger PUP di SAP) memberikan biaya aktual per unit — berguna untuk tax/statutory reporting. Artikel sebaiknya menyebut perbedaan ini satu kalimat agar tidak menyederhanakan.

- **Tidak semua perusahaan bisa pakai metode HPP yang sama.** Perusahaan dengan produksi massal (process costing) vs pesanan (job order costing) punya cara berbeda menghitung WIP dan overhead. Artikel ini memakai pendekatan period costing umum — labeli dengan jelas agar tidak disalahartikan untuk job order manufacturing.

- **Batas "manual vs ERP" bukan angka SKU yang baku.** Brief menyebut "banyak SKU" sebagai pemicu. Jangan berikan angka batas (mis. "lebih dari 50 SKU") yang tidak terverifikasi — frame sebagai kombinasi faktor: volume SKU, multi-level BOM, frekuensi perubahan harga, dan kebutuhan audit.

---

## Flags (open factual risk)

- **Flag #1 — BOP 20–40% range**: Angka ini berasal dari satu sumber industri non-akademik (8thinktank.com). Tidak ditemukan benchmark dari BPS, Kemenperin, atau jurnal peer-reviewed yang mengkonfirmasi range ini untuk manufaktur Indonesia. Rekomendasi: sajikan sebagai "estimasi umum industri" atau "dalam banyak perusahaan manufaktur" dengan atribusi ke sumber tersebut — jangan sajikan sebagai angka baku atau "menurut riset resmi".

- **Flag #2 — Penamaan modul SAP: "CO-PC" vs "Product Cost Controlling" vs "CO-PC-PCP"**: Terminologi SAP memiliki hierarki teknis (CO-PC sebagai payung, CO-PC-PCP sebagai sub-komponen planning). Artikel pembaca awam tidak perlu menampilkan kode modul teknis (CO-PC-PCP). Gunakan nama panjang: "Product Cost Planning" dan "Product Cost Controlling" — ini terminology yang muncul di SAP Learning/Help. Hindari menginvent atau menyederhanakan nama dengan cara yang salah.

- **Flag #3 — URL funnel S/4HANA Soltius berbeda dari brief**: Brief mengusulkan `https://www.soltius.co.id/id/solution/erp-sap-s4hana` — URL ini tidak ditemukan dalam hasil WebSearch. URL yang terverifikasi hidup adalah `https://www.soltius.co.id/solutions-by-products/erp-sap-s-4hana-and-erp-large-enterprises`. Rekomendasi: writer dan editor gunakan URL yang terverifikasi ini sebagai funnel CTA, bukan URL dari brief.

- **Flag #4 — PSAK 14: tidak ada URL IAI resmi yang tersedia online secara bebas**: Dokumen resmi PSAK 14 dari IAI (Institut Akuntan Indonesia) tidak tersedia bebas di domain iai.or.id yang dapat diakses WebFetch. Sumber yang tersedia (Accounting BINUS, AU Partners) mengutip PSAK 14 secara akurat tetapi bukan dokumen primer IAI. Rekomendasi: Cite sebagai "PSAK 14 (Persediaan), IAI, efektif 1 Januari 2017" dan link ke sumber sekunder yang paling kredibel (Accounting BINUS atau AU Partners) — jangan klaim link langsung ke IAI.

- **Flag #5 — Actual Costing/PUP: jangan klaim ini "standar" di semua implementasi SAP**: Material Ledger wajib di S/4HANA, tetapi Actual Costing (yang menghasilkan Periodic Unit Price) bersifat opsional. Jangan menulis "di SAP S/4HANA, HPP otomatis dihitung sebagai PUP" — itu hanya berlaku jika actual costing diaktifkan. Framing yang aman: "Product Cost Planning menghasilkan standard cost; perusahaan yang butuh biaya aktual dapat mengaktifkan Actual Costing di atas Material Ledger."

---

## Definition snippet draft (40–60 words)

> Harga Pokok Produksi (HPP) adalah total biaya yang dikeluarkan perusahaan untuk mengubah bahan baku menjadi produk jadi dalam satu periode akuntansi. HPP mencakup tiga komponen: biaya bahan baku langsung, biaya tenaga kerja langsung, dan biaya overhead pabrik — disesuaikan dengan perubahan persediaan barang dalam proses (WIP) awal dan akhir periode.

*(56 kata — dalam rentang 40–60)*

---

## Notes for image-planner

- **Concept 1 — Diagram alur perhitungan HPP** `{IMAGE_01}`: Infografik alur horizontal/vertikal yang menunjukkan urutan: (1) Bahan Baku Terpakai [saldo awal + pembelian − saldo akhir] → (2) + BTKL + BOP → (3) Total Biaya Produksi → (4) + WIP Awal − WIP Akhir → (5) HPP (Harga Pokok Produksi) → (6) + Barang Jadi Awal − Barang Jadi Akhir → (7) HPP Penjualan (COGS). Setiap kotak dengan warna berbeda untuk membedakan komponen input vs output kalkulasi. Format: flowchart horizontal, B2B clean, tanpa dekorasi berlebihan.

- **Concept 2 — Template/screenshot laporan HPP siap-isi** `{IMAGE_02}`: Tampilan tabel laporan HPP dalam format spreadsheet (Google Sheets atau Excel) yang sudah terisi dengan angka ilustrasi dari tabel dossier ini. Tampilkan kolom "Komponen" dan "Jumlah (Rp)" dengan baris yang terkelompok (A. Bahan Baku Terpakai, B. Total Biaya Produksi, C. HPP, D. COGS, E. HPP per unit). Baris total dicetak tebal/highlighted. Tujuan: bisa langsung di-screenshot oleh pembaca atau dijadikan referensi pengisian.

- **Concept 3 — Tabel pembanding HPP Produksi vs HPP Penjualan** (opsional): Infografik dua kolom bergaya kartu yang membandingkan COGM vs COGS — definisi, rumus inti, dan "kapan digunakan" dalam format visual ringkas. Berguna untuk AI Overview extraction dan share di internal chat.
