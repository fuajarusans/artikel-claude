---
brief_id: "fifo-lifo-fefo-c01"
researcher_run_date: "2026-10-08"
sources_cited: 6
flags: 5
batch: "conditional-2026-10"
target_word_count: 1100
---

# Research Dossier: FIFO, LIFO, dan FEFO — Perbedaan Metode Manajemen Stok

## TL;DR for the writer

- **Dua dimensi, satu istilah — ini inti artikel.** FIFO/LIFO/FEFO hidup di dua dunia: (a) **rotasi fisik** di gudang (barang mana diambil lebih dulu) dan (b) **penilaian biaya persediaan** di akuntansi (biaya mana dibukukan sebagai HPP). Pembeda terkuat vs hub WMS: **LIFO dilarang untuk penilaian persediaan di Indonesia** (PSAK 14/PSAK 202 + IAS 2 + Pasal 10(6) UU PPh) — fakta ini terverifikasi dan tidak dibahas artikel lain di repositori.
- **Dasar urutan = kolom pembeda tabel.** FIFO dan LIFO sama-sama membaca **tanggal masuk** (arah berlawanan); FEFO membaca **tanggal kedaluwarsa**. Karena itu FEFO bukan varian FIFO: barang yang masuk lebih dulu belum tentu kedaluwarsa lebih dulu — terverifikasi lintas sumber logistik.
- **SAP EWM: pakai "shelf life expiration date", JANGAN tulis "FEFO" sebagai nama resmi SAP.** SAP Learning resmi mengonfirmasi strategi *stock removal* untuk *goods issue*: **FIFO, Stringent FIFO, LIFO, Shelf Life Expiration Date** (+ Partial quantities first, Stock removal according to quantity, Fixed storage bin, Preferred unit of measure last). Kata "FEFO" **tidak muncul harfiah**; tulis "mewujudkan logika FEFO".
- **Akuntansi (net-new, pembeda utama).** LIFO dihapus dari PSAK 14 sejak **revisi 2008 (berlaku 1 Januari 2009)**; metode sah tinggal **FIFO + rata-rata tertimbang**, selaras **IAS 2** (IASB menghapus LIFO lewat revisi 18 Desember 2003, efektif 1 Januari 2005). Penomoran berganti jadi **PSAK 202** sejak **1 Januari 2024** (hanya nomor, substansi tetap). Pajak: **Pasal 10 ayat (6) UU No. 36/2008** hanya rata-rata atau FIFO.
- **Scope discipline.** JANGAN tarik materi safety stock/ROP/EOQ, rasio perputaran, 6 proses WMS umum, atau perhitungan HPP perpetual lengkap — itu milik artikel lain. Target ~1100 kata. Contoh berhitung FEFO apotek = **ilustrasi**, bukan data klien.

## Core facts (verified)

> **Claim**: FIFO, LIFO, dan FEFO adalah tiga metode rotasi stok; pembeda intinya adalah **dasar urutan**.
> **Number/specific**: FIFO (First In, First Out) dan LIFO (Last In, First Out) sama-sama membaca **tanggal masuk** — FIFO mengeluarkan yang terlama, LIFO yang terbaru. FEFO (First Expired, First Out) membaca **tanggal kedaluwarsa**, mengeluarkan yang paling dekat kedaluwarsa apa pun urutan masuknya. Tiga metode, dua dasar urutan (tanggal masuk vs tanggal kedaluwarsa).
> **Source**: The Fulfillment Lab, Anchanto, Hyperbots (FIFO vs FEFO), GMP Insiders — konsep logistik mapan, konsisten lintas sumber (diakses 2026-10-08).
> **Confidence**: high (konsep baku, lintas sumber seragam).

> **Claim**: FEFO bukan sekadar varian FIFO — barang yang masuk lebih dulu belum tentu kedaluwarsa lebih dulu.
> **Number/specific**: FIFO mengurutkan berdasarkan kapan stok masuk; FEFO berdasarkan kedaluwarsa. Satu kedatangan yang lebih baru bisa membawa kedaluwarsa yang lebih awal, sehingga FIFO murni dapat meloloskan batch yang justru lebih dekat basi. Ilustrasi lazim: batch *long-dated* datang sebelum batch *short-dated* → FIFO mengirim yang long-dated dulu, meninggalkan yang short-dated basi di rak.
> **Source**: Hyperbots "FIFO vs FEFO", The Fulfillment Lab, Anchanto (diakses 2026-10-08).
> **Confidence**: high.

> **Claim**: FEFO adalah standar untuk produk bertanggal kedaluwarsa; penerapannya menuntut pelacakan batch/tanggal.
> **Number/specific**: Industri pemakai utama: **farmasi (obat, vaksin, perbekalan medis), makanan & minuman, kosmetik, bahan kimia**; rumah sakit memakainya untuk mencegah obat mahal terbuang. Untuk obat jadi, FIFO jarang dipakai karena regulasi menekankan tanggal kedaluwarsa. FEFO efektif hanya bila **lot tracking, pelabelan, dan kontrol berbasis tanggal** akurat.
> **Source**: GMP Insiders "FEFO vs FIFO vs LIFO", Anchanto, The Fulfillment Lab (diakses 2026-10-08). **Catatan: sumber vendor logistik/GMP (otoritas sedang) — pakai untuk konfirmasi konsep, bukan sitasi utama.**
> **Confidence**: high untuk daftar industri & syarat data; medium untuk klaim regulatif spesifik (GMP/GDP — jangan kutip pasal spesifik tanpa cek).

> **Claim**: "LIFO" yang sah di Indonesia hanyalah pola rotasi **fisik**, bukan metode pembukuan.
> **Number/specific**: Sebagai pola fisik, LIFO relevan untuk material bertumpuk non-perishable — mis. lumber/bahan bangunan atau *drive-in racking* di mana barang terakhir masuk berada paling depan. FIFO cocok untuk barang umum ber-*shelf life* panjang (menekan stok usang). FEFO untuk barang bertanggal.
> **Source**: The Fulfillment Lab, Racklify (FEFO), konsep pergudangan mapan (diakses 2026-10-08).
> **Confidence**: high (pola fisik); kaitan ke larangan pembukuan — lihat klaim akuntansi.

> **Claim**: Di akuntansi, FIFO dan LIFO adalah **asumsi arus biaya** (cost-flow assumption), bukan soal barang fisik.
> **Number/specific**: Metode penilaian menentukan biaya pembelian mana yang dibukukan sebagai **harga pokok penjualan (HPP/COGS)**. Pilihan ini memengaruhi laba dan beban pajak. FEFO **tidak** dipakai untuk penilaian akuntansi — ia metode rotasi; untuk valuasi, FIFO lazim, LIFO dilarang (lihat bawah).
> **Source**: The Fulfillment Lab ("for accounting, FEFO is rarely used for valuation, whereas FIFO is a common valuation method"); IAS 2 (IFRS/IASPlus) (diakses 2026-10-08).
> **Confidence**: high.

> **Claim**: LIFO dihapus dari PSAK 14 sejak revisi 2008; metode penentuan biaya persediaan yang sah tinggal FIFO dan rata-rata tertimbang.
> **Number/specific**: PSAK 14 (Revisi 2008) **berlaku efektif 1 Januari 2009** tidak lagi memperkenankan LIFO; metode yang diizinkan = **FIFO** dan **rata-rata tertimbang (weighted average)**. Versi PSAK 14 sebelumnya sempat mengizinkan LIFO. Selaras penyesuaian 2014 yang tetap hanya mencantumkan FIFO + rata-rata tertimbang.
> **Source**: PwC Indonesia Assurance Newsflash 2008-02 (draf PSAK 14 revisi 2008, berlaku 2009); Binus Accounting "PSAK 14 Penyesuaian 2014"; jurnal akademik ID (diakses 2026-10-08). **Teks resmi IAI terbaru tidak ditemukan dalam pencarian — lihat Flags.**
> **Confidence**: high untuk substansi (konsisten lintas sumber + PwC); medium untuk kutipan pasal verbatim standar (sumber sekunder).

> **Claim**: Penomoran PSAK 14 berubah menjadi PSAK 202 sejak 1 Januari 2024 — perubahan nomor saja, bukan substansi.
> **Number/specific**: PSAK 14 "Persediaan" dipetakan ke **PSAK 202 "Persediaan"**, efektif **1 Januari 2024**, bagian dari Kerangka Standar Pelaporan Keuangan Indonesia (KSPKI) yang disahkan DSAK IAI pada 2022. Nomor diawali 1/2 menandai standar yang merujuk IFRS. DDTC: "hanya mengubah penomoran, tidak mengubah substansi".
> **Source**: IAI "Perubahan Penomoran PSAK ISAK dalam SAK Indonesia" (web.iaiglobal.or.id); DDTCNews (diakses 2026-10-08). **Sumber IAI resmi untuk pemetaan nomor.**
> **Confidence**: high untuk pemetaan & tanggal (dokumen IAI). **Satu abstrak jurnal keliru menyebut PSAK 202 = agrikultur — abaikan (lihat Flags).**

> **Claim**: IAS 2 (IFRS) juga melarang LIFO; hanya FIFO dan rata-rata tertimbang yang diizinkan untuk item yang dapat dipertukarkan.
> **Number/specific**: IASB menghapus "allowed alternative" LIFO lewat revisi **18 Desember 2003**, efektif untuk periode yang dimulai **1 Januari 2005**. Untuk item *interchangeable*, IAS 2 mengizinkan **FIFO atau weighted average cost**; item unik pakai **specific identification**. Alasan: LIFO dinilai bukan representasi andal arus persediaan.
> **Source**: IFRS Foundation (ifrs.org, IAS 2) + Deloitte IASPlus "IAS 2 — Inventories" + AASB Basis for Conclusions IAS 2 (diakses 2026-10-08). **Sumber standar internasional — otoritas tinggi.**
> **Confidence**: high.

> **Claim**: Nuansa — US GAAP masih memperbolehkan LIFO (sumber kebingungan umum).
> **Number/specific**: Larangan LIFO berlaku di bawah **IFRS/PSAK**, bukan universal; **US GAAP** masih mengizinkan LIFO. Banyak artikel ID menyalin narasi "LIFO menguntungkan saat inflasi" dari konteks AS tanpa menyebut bahwa di Indonesia LIFO sudah dilarang untuk pelaporan.
> **Source**: Deloitte IASPlus (konteks IFRS vs US GAAP), pengetahuan akuntansi umum (diakses 2026-10-08).
> **Confidence**: high untuk IFRS≠US GAAP; writer boleh menyebut sekilas sebagai pelurusan (opsional, jangan memperpanjang).

> **Claim**: Alasan LIFO dihapus — mendistorsi laporan keuangan.
> **Number/specific**: LIFO memperlakukan stok terbaru sebagai terjual lebih dulu, sehingga sisa stok dinilai pada biaya lama; saat inflasi, laba tampak lebih kecil → beban pajak lebih kecil. IASB menilai ini bukan representasi andal; pertimbangan pajak ditolak sebagai dasar konseptual akuntansi.
> **Source**: AASB Basis for Conclusions IAS 2; jurnal/ringkasan ID (alasan IAI mengikuti IASB) (diakses 2026-10-08).
> **Confidence**: high untuk IAS 2 BC; medium untuk motif IAI spesifik (sumber sekunder).

> **Claim**: Pajak Indonesia membatasi penilaian persediaan pada rata-rata atau FIFO.
> **Number/specific**: **Pasal 10 ayat (6) UU No. 36 Tahun 2008 (PPh)**: *"Persediaan dan pemakaian persediaan untuk penghitungan harga pokok dinilai berdasarkan harga perolehan"* — *"secara rata-rata atau dengan cara mendahulukan persediaan yang diperoleh pertama"* (rata-rata atau FIFO). LIFO komersial harus dikoreksi fiskal. Pasal tidak menyebut LIFO.
> **Source**: Ortax "Konsep Biaya/HPP dalam PPh Badan" (kutip bunyi pasal); DDTCNews (diakses 2026-10-08). **Verifikasi final ke JDIH/DJP — lihat Flags (UU HPP 7/2021).**
> **Confidence**: high untuk substansi (dua metode); medium untuk verbatim (beberapa sumber tulis "yang diperoleh" tanpa "pertama").

> **Claim**: SAP Extended Warehouse Management (EWM) menegakkan rotasi otomatis saat *picking* lewat *stock removal strategy*.
> **Number/specific**: Strategi *stock removal* untuk *goods issue* di SAP S/4HANA EWM mencakup: **FIFO** (urut tanggal penerimaan), **Stringent FIFO** (FIFO lintas beberapa storage type via storage type group), **LIFO**, **Shelf Life Expiration Date** (keluarkan sisa umur simpan terpendek dulu), **Partial quantities first**, **Stock removal according to quantity**, **Fixed storage bin**, **Preferred unit of measure last** — total 8 strategi.
> **Source**: SAP Learning, "Applying the Stock Removal Strategies" (course *Basic Customizing in SAP S/4HANA EWM*), learning.sap.com (diakses 2026-10-08). **Sumber SAP resmi — otoritas tertinggi untuk fakta SAP.**
> **Confidence**: high (verbatim dari halaman SAP Learning).

> **Claim**: SAP tidak menamai strateginya "FEFO" secara harfiah — istilah resminya "Shelf Life Expiration Date".
> **Number/specific**: Pada halaman SAP Learning, kata **"FEFO" tidak muncul**; strategi yang mewujudkan logika FEFO disebut **"Shelf life expiration date"** ("removes the products with the shortest remaining shelf life first"). Writer menulis "mewujudkan logika FEFO", **bukan** "SAP menyebutnya FEFO".
> **Source**: SAP Learning (learning.sap.com), diakses 2026-10-08.
> **Confidence**: high.

> **Claim**: Otomasi WMS/EWM tidak memperbaiki data induk yang buruk.
> **Number/specific**: Shelf-life expiration date / FEFO hanya bisa dijalankan sistem bila **tanggal kedaluwarsa & nomor batch** tercatat rapi saat penerimaan. Tanpa data batch, aturan tidak dapat ditegakkan secanggih apa pun sistemnya — kegagalan FEFO di lapangan hampir selalu soal data, bukan aturan.
> **Source**: Sintesis riset (SAP shelf-life butuh master data umur simpan + sumber logistik "FEFO relies on accurate lot tracking") (diakses 2026-10-08).
> **Confidence**: high (prinsip; framing pengalaman implementasi, tanpa angka klien).

> **Claim**: Soltius dapat berperan sebagai mitra implementasi SAP EWM (bukan pembuat).
> **Number/specific**: Soltius berdiri **1998**, bagian Metrodata Group, **SAP Platinum Partner via United VARs**, dengan pengalaman industri Wholesale Distribution/Consumer Products/Retail/Pharma. Soltius **mengimplementasikan, memigrasikan, mengonfigurasi, dan mendukung** SAP EWM — termasuk aturan rotasi stok — bukan membuat perangkat lunaknya.
> **Source**: `knowledge_base/company_profile.md` + `product_matrix.md` (pre-approved).
> **Confidence**: high (knowledge base).

## Solution focus + Soltius anchor (from product_matrix.md)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| **SAP Extended Warehouse Management (EWM)** — nama penuh sekali, lalu "SAP EWM" | Menegakkan rotasi otomatis saat *picking* via *stock removal strategy*: FIFO, Stringent FIFO, LIFO, Shelf Life Expiration Date (= logika FEFO). SAP tak pakai kata "FEFO". | H2-4 (funnel) + Kesimpulan/CTA | Layanan **Implementation** (New Implementation / Migration / Roll Out) untuk SAP EWM; kredibilitas **SAP Platinum Partner via United VARs** (pilih SATU anchor) |
| **SAP S/4HANA** (hanya 1 klausa) | Platform tempat SAP EWM tertanam; jembatan ke cousin link migrasi ERP ke cloud. | H2-4, 1 klausa | — |

Reminder: Soltius **mengimplementasikan/memigrasikan/mendukung** SAP EWM — bukan membuatnya, bukan vendor WMS. **Maks 2 self-mention** (1 positioning line di Kesimpulan + 1 soft CTA soltius.co.id baris terakhir). Hindari service-dump.

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **SAP Learning — "Applying the Stock Removal Strategies"** (course *Basic Customizing in SAP S/4HANA EWM*) — `https://learning.sap.com/courses/basic-customizing-in-sap-s-4hana-ewm/applying-the-stock-removal-strategies` — *what it backs*: daftar strategi *stock removal* EWM (FIFO, Stringent FIFO, LIFO, Shelf Life Expiration Date). **Sitasi #1, inline di H2-4.** Atribusi: "menurut dokumentasi/pelatihan SAP".
2. **IAI — Perubahan Penomoran PSAK/ISAK dalam SAK Indonesia** — `https://web.iaiglobal.or.id/assets/files/file_publikasi/Perubahan_Penomoran_PSAK_ISAK_dalam_SAK_Indonesia.pdf` + **Deloitte IASPlus "IAS 2 — Inventories"** (`https://www.iasplus.com/standard/ias02.htm`) — *what it backs*: LIFO tidak diperbolehkan; PSAK 14 → PSAK 202; selaras IAS 2. **Sitasi #2, inline di H2-3.** Atribusi + tahun; hedge penomoran.
3. *(Pendukung opsional)* **Pasal 10 ayat (6) UU No. 36/2008 (PPh)** via Ortax/DDTC — sisi pajak (rata-rata atau FIFO). Hedge bunyi pasal; verifikasi JDIH sebelum verbatim.

> Prioritas: SAP resmi (teknis) > IAI/IFRS (standar) > UU/JDIH (pajak). **Hindari** outbound ke kompetitor WMS / software akuntansi.

## FAQ Q&As (4 drafted, Bahasa Indonesia; 30–60 kata, tiap jawaban 1 fakta)

> Ambil dari PAA. JANGAN mengulang definisi snippet kata per kata.

### Apa bedanya FIFO dan FEFO?
FIFO mengeluarkan barang yang paling lama masuk gudang, sedangkan FEFO mengeluarkan barang yang paling dekat tanggal kedaluwarsanya, apa pun urutan masuknya. Pada produk bertanggal, batch yang datang lebih dulu belum tentu kedaluwarsa lebih dulu — itulah sebabnya farmasi dan makanan memilih FEFO, bukan FIFO murni.

### Apakah metode LIFO masih boleh dipakai di Indonesia?
Tidak untuk penilaian persediaan. PSAK 14 revisi 2008 (berlaku 1 Januari 2009, kini bernomor PSAK 202) hanya mengizinkan FIFO dan rata-rata tertimbang, selaras IAS 2. Pasal 10 ayat (6) UU No. 36/2008 juga membatasi penilaian pajak pada rata-rata atau FIFO. LIFO hanya sah sebagai pola rotasi fisik.

### Industri apa yang paling cocok memakai FEFO?
Industri dengan produk bertanggal kedaluwarsa: farmasi, makanan dan minuman, kosmetik, serta bahan kimia. Rumah sakit juga menerapkannya untuk mencegah obat mahal terbuang. Syaratnya satu — tanggal kedaluwarsa dan nomor batch tercatat untuk setiap item; tanpa data itu, FEFO tidak bisa ditegakkan sistem.

### Apa itu metode rata-rata (weighted average) dalam persediaan?
Metode penilaian yang menghitung biaya persediaan dari rata-rata tertimbang seluruh unit tersedia, bukan dari urutan masuk. Bersama FIFO, inilah satu-satunya dua metode yang diizinkan PSAK dan Pasal 10 ayat (6) UU PPh untuk pelaporan keuangan dan pajak di Indonesia sejak LIFO dihapus pada 2009.

## Data tables for the writer

### Tabel 1 — Perbedaan FIFO, LIFO, FEFO (H2-1; rancang agar extractable baris-per-baris)

| Metode | Kepanjangan | Dasar urutan | Yang keluar lebih dulu | Cocok untuk |
|---|---|---|---|---|
| **FIFO** | First In, First Out | Tanggal masuk (terlama) | Stok paling lama masuk | Barang umum ber-*shelf life* panjang; mencegah stok usang |
| **LIFO** | Last In, First Out | Tanggal masuk (terbaru) | Stok paling baru masuk | Material bertumpuk non-perishable (bahan bangunan, *drive-in racking*) — **rotasi fisik saja** |
| **FEFO** | First Expired, First Out | Tanggal kedaluwarsa (terdekat) | Stok paling dekat kedaluwarsa | Farmasi, makanan & minuman, kosmetik, bahan kimia |

> **Aturan tabel (anti-kanibalisasi hub):** kolom **"Dasar urutan"** wajib ada (pembeda dari tabel hub WMS). **DILARANG** memasukkan "Average/rata-rata" ke tabel rotasi ini — itu dimensi akuntansi, dibahas terpisah di H2-3.

### Draft jawaban langsung per H2 (40–60 kata, poin BARU — bukan ulangan snippet)

- **H2-1 ("Apa perbedaan FIFO, LIFO, dan FEFO?")**: Pembeda intinya adalah **dasar urutan**. FIFO dan LIFO sama-sama membaca tanggal masuk, hanya arahnya berlawanan; FEFO membaca tanggal kedaluwarsa. Karena itu FEFO bukan sekadar varian FIFO — barang yang masuk lebih dulu belum tentu kedaluwarsa lebih dulu, sehingga FIFO murni bisa meloloskan stok yang justru lebih rawan basi.
- **H2-2 ("Kapan sebaiknya memakai FIFO, LIFO, atau FEFO?")**: Pilih berdasarkan karakteristik produk, bukan selera. Produk bertanggal kedaluwarsa menuntut FEFO; barang tidak mudah rusak yang tersimpan menumpuk atau di rak *drive-in* cocok dengan pola fisik LIFO; mayoritas barang umum tanpa tanggal kritis aman dengan FIFO untuk menekan stok mengendap.
- **H2-3 ("FIFO dan LIFO dalam akuntansi: kenapa LIFO dilarang di Indonesia?")**: Di akuntansi, FIFO dan LIFO bukan soal barang fisik melainkan asumsi arus biaya — pembelian mana yang dibukukan sebagai harga pokok penjualan. Pilihan ini menggeser laba dan pajak. Di Indonesia, LIFO tidak lagi diperbolehkan untuk penilaian persediaan sejak 2009.
- **H2-4 ("Bagaimana sistem gudang menegakkan FIFO, LIFO, dan FEFO otomatis?")**: Rotasi manual bergantung pada ingatan operator; sistem manajemen gudang menegakkan aturan ini otomatis pada tahap *picking* lewat konfigurasi *stock removal strategy*, sehingga urutan pengambilan ditentukan data, bukan tebakan. SAP Extended Warehouse Management mewujudkannya lewat beberapa strategi bawaan.

### Contoh berhitung FEFO (ILUSTRASI — tandai jelas, bukan data klien)

Apotek menerima dua batch obat: **Batch A** masuk **Januari**, kedaluwarsa **Desember**; **Batch B** masuk **Februari**, kedaluwarsa **Juni**. FIFO akan mengeluarkan Batch A dulu (masuk lebih awal), padahal **Batch B** lebih dekat kedaluwarsa. FEFO mengeluarkan Batch B lebih dulu dan menyelamatkan stok dari penghapusan. *Angka contoh untuk ilustrasi; bukan data pelanggan.*

## Edge cases & nuance

- **Dua dimensi harus dipisah bersih.** FIFO/LIFO di rotasi fisik ≠ FIFO/LIFO di akuntansi. FEFO **hanya** metode rotasi (tak dipakai untuk valuasi); rata-rata tertimbang **hanya** metode akuntansi (tak masuk tabel rotasi). Jangan campur "Average" ke tabel rotasi.
- **LIFO: legal sebagai pola fisik, ilegal sebagai pembukuan (di Indonesia).** Jembatan jujur ini adalah inti pelurusan artikel.
- **IFRS ≠ US GAAP.** LIFO dilarang di IFRS/PSAK, tapi masih boleh di US GAAP — sumber umum kebingungan artikel ID yang menyalin narasi AS. Sebut sekilas bila muat.
- **FEFO gagal karena data, bukan aturan.** Tanpa tanggal kedaluwarsa + nomor batch saat penerimaan, tidak ada sistem yang bisa menjalankan FEFO.
- **Istilah SAP.** EWM memakai "Shelf Life Expiration Date", bukan "FEFO". Kode strategi F/L/H berasal dari *classic WM*, bukan EWM — jangan disalin sebagai spesifikasi EWM.

## Flags (open factual risk)

- ⚠️ **Teks resmi PSAK 14/PSAK 202 (IAI) tidak ditemukan utuh.** Substansi (LIFO dihapus revisi 2008, berlaku 1 Jan 2009; sah = FIFO + rata-rata tertimbang) **konsisten lintas sumber + PwC**, tapi dari sumber sekunder/firma. → **Rekomendasi**: nyatakan sebagai status terkini + atribusi ("menurut PSAK 14/202 selaras IAS 2"); jangan kutip pasal PSAK verbatim.
- ⚠️ **Penomoran PSAK 202 (efektif 1 Jan 2024, KSPKI disahkan 2022).** Didukung dokumen IAI (pemetaan nomor) + DDTC. **Satu abstrak jurnal (RIGGS) keliru menyebut PSAK 202 = agrikultur/FVLCS** — abaikan; pemetaan IAI jelas PSAK 202 = "Persediaan". → **Rekomendasi**: frame "kini bernomor PSAK 202 (perubahan penomoran, substansi sama)"; hedge ringan.
- ⚠️ **Bunyi Pasal 10 ayat (6) UU No. 36/2008.** Ortax mengutip verbatim (rata-rata atau mendahulukan yang diperoleh pertama); sebagian sumber lain tulis "yang diperoleh" tanpa "pertama". UU PPh telah diubah **UU HPP (UU 7/2021)** — klausa penilaian persediaan tampak tetap, tapi **belum dicek di teks konsolidasi JDIH**. → **Rekomendasi**: atribusikan ("Pasal 10 ayat (6) UU PPh"); jangan klaim "tak pernah berubah".
- ⚠️ **Istilah EWM vs classic WM.** SAP Learning mengonfirmasi strategi EWM, tapi banyak dokumentasi lama memakai kode classic WM (F/L/H). → **Rekomendasi**: tulis "EWM mengaturnya lewat *stock removal strategy/rule*"; jangan sebut kode F/L/H sebagai spesifikasi EWM; "Shelf Life Expiration Date" bukan "FEFO".
- ⚠️ **Sumber FEFO = vendor logistik/GMP (otoritas sedang).** Definisi & daftar industri konsisten, tapi klaim regulatif spesifik (GMP/GDP/CDOB, kewajiban FDA) **jangan** dikutip sebagai pasal. → **Rekomendasi**: FEFO cukup dijelaskan konseptual + contoh ilustrasi; sitasi otoritatif tetap SAP + PSAK/IAS 2, bukan blog FEFO.

> **Tidak diverifikasi / JANGAN diklaim**: angka selisih HPP/laba/pajak akibat pilihan metode (contoh Rp koreksi fiskal di satu sumber bersifat ilustratif, bukan standar); persentase pasar/adopsi FEFO; "LIFO menguntungkan saat inflasi" tanpa konteks bahwa itu dilarang di Indonesia. Contoh apotek = ilustrasi.

## Definition snippet draft (40–60 kata)

> **Ringkasnya:** FIFO, LIFO, dan FEFO adalah tiga metode rotasi stok yang menentukan barang mana dikeluarkan lebih dulu dari gudang. FIFO mengeluarkan stok yang paling lama masuk, LIFO mengeluarkan stok yang paling baru masuk, dan FEFO mengeluarkan stok yang paling dekat tanggal kedaluwarsanya — tanpa memandang urutan penerimaan.

*(46 kata. Satu-satunya tempat definisi muncul; JANGAN diulang di body/H2/FAQ.)*

## Internal links (TEPAT 2 — konfirmasi brief; keduanya live 2026-10-08)

1. **Own-hub (naik)**: `https://www.soltius.co.id/id/blog/konsep-warehouse-management-system-yang-wajib-anda-tahu` — anchor `sistem manajemen gudang (WMS)` — inline di H2-4.
2. **Cousin**: `https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud` — anchor `migrasi ERP ke cloud` — inline di H2-4 (SAP EWM tertanam di S/4HANA).

> Hanya 2 link. TANPA link ketiga, TANPA "BACA JUGA".
