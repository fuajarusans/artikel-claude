---
brief_id: "reorder-point-c01"
researcher_run_date: "2026-07-17"
sources_cited: 4
claims_verified: 16
flags: 10
batch: "conditional-2026-08 (style_addendum.md — 800–1000 kata, tanpa image placeholder, FAQ 3, 2 internal link)"
---

# Research Dossier: Reorder Point (ROP): Rumus dan Contoh Perhitungannya

> **Dossier sengaja RINGKAS** (per Notes brief) — artikel target ~900 kata, 4 H2 ramping. Material di bawah dipilih agar cukup, bukan berlimpah.

## TL;DR for the writer

- **Sumber utama terverifikasi ulang run ini (WebFetch 200)**: `learning.sap.com` mengonfirmasi KEEMPAT fakta yang diminta brief, kata per kata. Pakai ini sebagai sitasi inline wajib.
- **Bonus: sumber kedua SAP-official yang BISA di-fetch ditemukan** — halaman SAP Library klasik (`help.sap.com/doc/saphelp_globext607_10/...`) merender teks penuh dan **mengorroborasi secara independen** komposisi ROP, pemicu ("sum of plant stock and firmed receipts"), dan manual-vs-otomatis. URL S/4HANA di brief (E-E-A-T #3) tetap **JS-rendered → hanya judul, tidak bisa dikutip**. Gunakan URL klasik sebagai gantinya.
- **⚠️ TEMUAN PALING PENTING — jangan salah atribusi**: SAP hanya menyatakan **SATU** rumus, yaitu bentuk **dengan** safety stock. Bentuk "dasar" (`ROP = permintaan harian × lead time`) **TIDAK ada di sumber SAP** — itu doktrin persediaan umum. Tabel dua-bentuk tetap boleh ditulis, tetapi **jangan menyandarkannya pada SAP**. Sitasi SAP hanya menempel pada: komposisi RLT, pemicu, manual/otomatis, service level.
- **Kode MRP type (VB/VM/V1/V2): dikonfirmasi TIDAK ADA** di kedua halaman SAP official yang berhasil dibaca. Larangan brief **berdiri** — jangan pakai.
- **ASCM Supply Chain Dictionary: tetap TIDAK terverifikasi** (edisi ke-19 terkonfirmasi ada, tetapi bunyi definisi ROP tidak dapat dibaca). **Jangan mengutip definisi kamusnya.** Sitasi kedua sebaiknya SAP Library klasik, bukan ASCM.
- **Aritmetika contoh: semua benar** — kecuali satu angka yang perlu dipertegas rujukannya (lihat Flag #2: "25 kali lipat" ambigu; 14.400 ÷ 480 = **tepat 30×**, 14.400 ÷ 570 = **~25,3×**).

---

## Core facts (verified)

### Blok A — Fakta SAP (sumber utama, sitasi inline)

> **Claim 1**: Reorder point tersusun dari safety stock + permintaan rata-rata selama *replenishment lead time*.
> **Verbatim**: "The reorder point is made up of the safety stock and the average demand in the replenishment lead time." Rumus di halaman: "Reorder point = safety stock + average daily requirements * replenishment lead time."
> **Source**: SAP Learning — *Using Forecast in Reorder Point Planning* — https://learning.sap.com/courses/consumption-based-planning-and-forecasting-in-sap-cloud-erp/using-forecast-in-reorder-point-planning (diakses 2026-07-17, HTTP 200)
> **Confidence**: high

> **Claim 2 — PEMBEDA UTAMA ARTIKEL**: *Replenishment lead time* untuk material yang dibeli dari luar tersusun dari tiga komponen, bukan hanya waktu kirim.
> **Verbatim**: "Replenishment lead time, which, in the case of externally procured materials, is made up of the planned delivery time, the goods receipt processing time, and the purchasing processing time."
> **Source**: SAP Learning (URL Claim 1), 2026-07-17
> **Confidence**: high
> **Catatan**: **Tepat tiga komponen — jangan menambah komponen keempat.** Terjemahan aman: *planned delivery time* (waktu kirim terencana) + waktu proses penerimaan barang + waktu proses pembelian. Konsekuensi quotable yang sah: ROP yang hanya menghitung waktu kirim **selalu terlalu rendah**, karena proses pembelian (persetujuan PO) dan penerimaan barang tetap memakan hari.

> **Claim 3**: Pengadaan terpicu saat stok + penerimaan terjadwal jatuh di bawah reorder point.
> **Verbatim (SAP Learning)**: "In reorder point planning, procurement is triggered when the sum of stock and firm receipts falls below the reorder point."
> **Verbatim (korroborasi SAP Library)**: "Procurement is triggered when the sum of plant stock and firmed receipts falls below the reorder point."
> **Source**: SAP Learning (URL Claim 1) + SAP Library — *Reorder Point Planning* — https://help.sap.com/doc/saphelp_globext607_10/GLOBALIZATIONEXTENSIONS607/en-US/f4/7d256344af11d182b40000e829fbfe/content.htm?no_cache=true (diakses 2026-07-17, HTTP 200, teks penuh)
> **Confidence**: high (dua sumber SAP official independen)

> **Claim 4**: Reorder point planning punya dua mode — manual dan otomatis.
> **Verbatim (SAP Learning)**: "In manual reorder point planning, you enter the reorder point and safety stock manually in the material master record. In automatic reorder point planning, the system calculates the reorder point and safety stock during the forecast run."
> **Verbatim (korroborasi SAP Library)**: manual — "You define both the reorder level and the safety stock level manually"; otomatis — sistem memakai "past consumption data...to forecast future requirements" dan "continually adapted to the current consumption and delivery situation".
> **Source**: dua URL di atas, 2026-07-17
> **Confidence**: high

> **Claim 5**: *Service level* ditetapkan di *material master* dan menjadi data yang dibutuhkan untuk perhitungan safety stock.
> **Verbatim**: "Service level, defined in the material master record" — terdaftar sebagai *required data* untuk perhitungan safety stock. Halaman juga menyatakan reorder point dan safety stock "depend on the service level defined in the material master record and the replenishment lead time of the material."
> **Source**: SAP Learning (URL Claim 1), 2026-07-17
> **Confidence**: high
> **⚠️ Presisi**: *service level* adalah input perhitungan **safety stock**, bukan input langsung rumus ROP. Frasa aman: "sistem menghitung ulang ROP dan safety stock tiap *forecast run*, dengan *service level* di *material master* sebagai salah satu inputnya." **Jangan** menulis "ROP dihitung dari service level".

> **Claim 6**: Reorder point harus menutup kebutuhan rata-rata selama *replenishment lead time*.
> **Verbatim**: "The reorder point should cover the average material requirements expected during the replenishment lead time."
> **Source**: SAP Library (URL Claim 3), 2026-07-17
> **Confidence**: high

> **Claim 7 (verifikasi negatif — penting)**: Kode MRP type (VB, VM, V1, V2) **tidak muncul** di kedua halaman SAP official yang berhasil dibaca run ini.
> **Source**: pemeriksaan eksplisit atas SAP Learning + SAP Library (URL Claim 1 & 3), 2026-07-17
> **Confidence**: high
> **Rekomendasi**: **larangan brief BERDIRI — jangan pakai kode ini.** Artikel utuh tanpanya.

### Blok B — Aritmetika contoh (diperiksa ulang; angka ilustrasi milik brief)

> **Claim 8**: 40 unit/hari × 12 hari = **480 unit** ✓
> **Claim 9**: 480 + 90 = **570 unit** ✓
> **Claim 10**: Selisih 570 − 480 = **90 unit**, persis sebesar safety stock ✓ (poin quotable brief valid: buffer tidak mengubah logika ROP, hanya menggeser titik pemicunya)
> **Claim 11**: 1.200 ÷ 30 = **40 unit/hari** ✓
> **Claim 12**: 1.200 × 12 = **14.400 unit** ✓
> **Claim 13**: 14.400 ÷ 480 = **tepat 30×**; 14.400 ÷ 570 = **≈25,3×** → lihat **Flag #2**, wajib dibaca sebelum menulis kalimat ini.
> **Confidence**: high (aritmetika, diperiksa ulang run ini)
> **Wajib**: seluruh set berlabel **ilustrasi**. Jika satu angka diubah, hitung ulang semuanya.

### Blok C — Fakta Soltius (dari `company_profile.md`, verified-by-default)

> **Claim 14**: Soltius — **SAP Platinum Certified Channel Partner** melalui keanggotaan **United VARs**; berdiri **1998**; bagian dari Metrodata Group.
> **Source**: `knowledge_base/company_profile.md`
> **Confidence**: high

> **Claim 15**: Industri vertikal Soltius mencakup **Wholesale Distribution**, **Mill Products**, dan **Plantation (Perkebunan)** — relevan dengan ilustrasi distributor suku cadang.
> **Source**: `knowledge_base/company_profile.md`
> **Confidence**: high
> **Framing**: **implements / migrates / supports — NEVER builds/owns.**

### Blok D — Verifikasi tautan internal (run ini, 2026-07-17)

> **Claim 16**: Kedua URL internal **live (200)** dan **tidak menyebut** reorder point / safety stock → **tidak ada risiko kanibalisasi**.
> - Hub: `https://www.soltius.co.id/id/blog/apa-itu-supply-chain-management` — judul "Kenali Apa itu Supply Chain Management untuk Perusahaan"; membahas definisi SCM, 3 fungsi inti, 5 tahap proses. **Tanpa** "reorder point"/"safety stock"/"titik pemesanan ulang". ✓
> - Cousin: `https://www.soltius.co.id/id/blog/konsep-warehouse-management-system-yang-wajib-anda-tahu` — judul "Konsep Warehouse Management System yang Wajib Anda Tahu!"; membahas WMS, FIFO/LIFO/FEFO, fitur & manfaat, WMS vs SCM. **Tanpa** "reorder point"/"safety stock"/"replenishment". ✓
> **Confidence**: high
> **Catatan**: URL artikel `safety-stock-c01` & `lead-time-c01` **tidak dites ulang** (brief mencatat HTTP 500 — belum live). **Jangan ditautkan.**

---

## Authoritative external sources (untuk sitasi inline — pakai 1–2)

1. **SAP Learning — "Using Forecast in Reorder Point Planning"** (Consumption-Based Planning and Forecasting in SAP Cloud ERP) — https://learning.sap.com/courses/consumption-based-planning-and-forecasting-in-sap-cloud-erp/using-forecast-in-reorder-point-planning — **✅ diverifikasi 200, teks penuh, 2026-07-17**
   *What it backs*: komposisi RLT (H2 #1) · rumus ROP = SS + permintaan harian rata-rata × RLT · pemicu stok + *firm receipts* < ROP · manual vs otomatis + *forecast run* (H2 #4) · *service level* di material master.
   **→ SITASI UTAMA. Ini yang paling current (SAP Cloud ERP) dan paling padat faktanya.**

2. **SAP Library — "Reorder Point Planning"** — https://help.sap.com/doc/saphelp_globext607_10/GLOBALIZATIONEXTENSIONS607/en-US/f4/7d256344af11d182b40000e829fbfe/content.htm?no_cache=true — **✅ diverifikasi 200, teks penuh, 2026-07-17**
   *What it backs*: korroborasi independen atas pemicu, manual/otomatis, dan "reorder point should cover the average material requirements expected during the replenishment lead time".
   **→ Cadangan / sitasi kedua opsional.** ⚠️ Ini dokumentasi SAP Library era ECC (Globalization Extensions 607) — **SAP official, tetapi legacy**. Kalau hanya 1 sitasi dipakai, pakai #1. Kalau 2, sebut #2 sebagai korroborasi tanpa mengesankan ia dokumentasi terkini.

3. ❌ **JANGAN pakai** URL S/4HANA di brief (`help.sap.com/docs/SAP_S4HANA_ON-PREMISE/.../5697b6535fe6b74ce10000000a174cb4.html`) — dites ulang run ini, **tetap hanya mengembalikan judul** ("SAP Help Portal | SAP Online Help"), konten dirender JavaScript. Tidak bisa dikutip. **URL #2 di atas adalah penggantinya yang setara-otoritatif dan terbaca.**

4. ⚠️ **ASCM Supply Chain Dictionary** — https://www.ascm.org/learning-development/certifications-credentials/dictionary/ — **200, tetapi TIDAK memuat definisi apa pun.** Edisi **ke-19 terkonfirmasi**; halaman hanya mengarahkan ke Supply Chain Knowledge Center / aplikasi mobile. Upaya membaca PDF kamus (edisi ke-18 via `learn.ascm.org`) **gagal** — file terenkode/butuh sesi login. **→ Lihat Flag #3: jangan mengutip bunyi definisinya.**

---

## Definition snippet draft (48 kata — band 40–60 ✓)

> **Ringkasnya:** reorder point (ROP) adalah level stok yang memicu pemesanan ulang: titik ketika sisa barang diperkirakan hanya cukup menutup kebutuhan selama pesanan baru diproses dan dikirim. Nilainya tersusun dari permintaan rata-rata selama replenishment lead time ditambah safety stock, sehingga ditetapkan dari data konsumsi dan waktu pasok, bukan ditebak.

- **Sejalan dengan SAP** (Claim 1) tanpa mengklaim sitasi di snippet.
- **Entity-clear**: ROP di-expand, RLT & safety stock disebut.
- **Tanpa em-dash** (hemat jatah ≤2 untuk body). Titik dua dipakai sebagai gantinya.
- **INI SATU-SATUNYA DEFINISI.** Jawaban langsung tiap H2 **dilarang** memparafrasekannya.

---

## Structured element data (akurat, siap dipoles)

### (a) H2 #1 — Tabel dua bentuk rumus

⚠️ **Baca Flag #1 sebelum menulis tabel ini.** Hanya baris "Dengan pengaman" yang punya dasar SAP; kriteria "kapan dipakai" adalah doktrin persediaan umum, **bukan** klaim SAP.

| Bentuk | Rumus | Kapan dipakai |
|---|---|---|
| Dasar | ROP = Permintaan Harian Rata-rata × Replenishment Lead Time | Permintaan dan lead time relatif stabil, dan konsekuensi *stockout* ringan |
| Dengan pengaman | ROP = (Permintaan Harian Rata-rata × Replenishment Lead Time) + Safety Stock | Permintaan berfluktuasi atau pemasok tidak selalu tepat waktu |

**Poin baru bersitasi SAP (tempelkan di sini, bukan di tabel):** *lead time* dalam rumus ini bukan sekadar waktu kirim. Menurut dokumentasi SAP, *replenishment lead time* material yang dibeli dari luar mencakup **planned delivery time + waktu proses penerimaan barang + waktu proses pembelian**.

### (b) H2 #2 — Perhitungan bertahap (list bernomor)

**Skenario ilustrasi** (wajib dilabeli *ilustrasi*): distributor suku cadang. Permintaan rata-rata **40 unit/hari**; *replenishment lead time* **12 hari**; safety stock **90 unit** (angka **diberikan**, bukan dihitung — rumusnya milik `safety-stock-c01`).

1. **Tanpa pengaman**: 40 × 12 = **480 unit**
2. **Dengan pengaman**: (40 × 12) + 90 = **570 unit**

**Quotable**: selisihnya **90 unit**, persis sebesar buffer-nya — safety stock tidak mengubah logika ROP, ia hanya menggeser titik pemicunya ke atas. Begitu stok menyentuh 570 unit, PO dibuat; bukan saat gudang terlihat menipis.

**Jebakan satuan (tunjukkan aritmetikanya):** permintaan dicatat **1.200 unit/bulan**, lalu langsung dikalikan lead time 12 hari → **14.400 unit**. Konversikan dulu: 1.200 ÷ 30 = **40 unit/hari**. Aturan satu kalimat: satuan permintaan dan satuan lead time harus sama.
→ **Untuk angka pengali, lihat Flag #2** (pilih "tepat 30 kali lipat dari 480" ATAU "sekitar 25 kali lipat dari ROP 570" — jangan biarkan ambigu).

### (c) H2 #3 — Tabel ROP vs EOQ

⚠️ **BATAS KERAS**: jangan turunkan rumus EOQ (√(2DS/H)) — disisakan untuk artikel EOQ tersendiri. Maksimal 1–2 kalimat + tabel ini. Expand akronim sekali: **EOQ = Economic Order Quantity**.

| Dimensi | Reorder Point (ROP) | EOQ (Economic Order Quantity) |
|---|---|---|
| Pertanyaan yang dijawab | **Kapan** memesan? | **Berapa banyak** dipesan? |
| Satuan hasil | Level stok (unit yang memicu PO) | Kuantitas pesanan (unit per PO) |
| Input utama | Permintaan harian rata-rata, replenishment lead time, safety stock | Permintaan periodik, biaya pemesanan, biaya penyimpanan |
| Bila salah | Terlalu rendah → *stockout*; terlalu tinggi → stok mengendap | Terlalu kecil → terlalu sering memesan; terlalu besar → biaya simpan naik |

**Quotable**: keduanya dipakai **bersama** — ROP menekan tombolnya, EOQ menentukan ukuran pesanannya. Keduanya tidak saling menggantikan.
*(Isi tabel = doktrin persediaan standar & vendor-neutral; tidak butuh sitasi, tetapi juga **jangan** diatribusikan ke SAP.)*

### (d) H2 #4 — Material lensa sistem (prosa, 1–2 kalimat soal SAP)

Fakta yang boleh dipakai (semua dari Claim 3–5, bersitasi SAP Learning):
- Di ERP, ROP hidup sebagai parameter di **material master**, bukan sel spreadsheet.
- **Manual**: ROP & safety stock diisi sendiri di material master.
- **Otomatis**: sistem menghitung ulang keduanya tiap **forecast run**; **service level** di material master jadi input perhitungan safety stock.
- Pengadaan terpicu saat **stok + penerimaan terjadwal (*firm receipts*) jatuh di bawah ROP**.
- Anchor funnel: **SAP Integrated Business Planning (SAP IBP)** — sebut nama penuh sekali, jangan bedah modulnya.
- **TANPA nama Soltius di body** (addendum §6). Jangan bahas mekanika MRP/PP atau model forecast.

---

## FAQ Q&As (3 drafted, Bahasa Indonesia — 30–60 kata, tiap jawaban 1 fakta/angka)

### Apa perbedaan reorder point dan safety stock?
Safety stock adalah besaran bantalannya; reorder point adalah titik yang memicu pemesanan. Safety stock menjadi salah satu suku penjumlah dalam rumus ROP. Pada ilustrasi artikel ini, buffer 90 unit menaikkan titik pemicu dari 480 unit menjadi 570 unit; bantalan itu tidak mengubah logika ROP, hanya menggeser pemicunya ke atas.
*(48 kata ✓ · fakta: 90 → 480/570 · bersandar pada angka KITA, bukan parafrase FAQ `safety-stock-c01` ✓ · tidak menurunkan rumus safety stock ✓)*

### Apakah reorder point sama dengan stok minimum?
Sering dipakai bergantian, tetapi tidak sama. "Stok minimum" kerap sekadar angka kebiasaan yang ditetapkan sekali. Reorder point punya cara hitung eksplisit: permintaan rata-rata selama replenishment lead time ditambah safety stock. Pada ilustrasi artikel ini, 40 unit/hari selama 12 hari ditambah 90 unit menghasilkan 570 unit.
*(45 kata ✓ · fakta: 40/12/90 → 570)*

### Berapa sering reorder point perlu dihitung ulang?
Tinjau setiap kali permintaan rata-rata atau lead time bergeser, bukan setahun sekali. Pada *automatic reorder point planning*, dokumentasi SAP menyebut sistem menghitung ulang reorder point dan safety stock pada setiap *forecast run*, memakai *service level* yang ditetapkan di material master. Angka yang ditulis sekali lalu dilupakan akan basi diam-diam.
*(49 kata ✓ · fakta: forecast run + service level, bersitasi Claim 4–5)*

> Ketiganya diambil dari PAA brief (#3, #4, #6) dan **tidak menduplikasi H2** (H2 memegang rumus, contoh hitung, ROP vs EOQ, lensa sistem). PAA #1/#2/#5/#7 sudah dijawab H2 → sengaja tidak diulang di FAQ.

---

## Solution focus + Soltius anchor

> `reorder point` tidak ada di `product_matrix.md` → mapping diturunkan dari tracker (CTA anchor **SAP IBP**) + `company_profile.md`. Aturan universal `product_matrix.md` berlaku penuh.

| What to teach | Facts to state accurately | Where | Soltius anchor |
|---|---|---|---|
| Reorder point planning (manual vs otomatis) | Claim 3–5 — material master; forecast run; service level; pemicu stok + firm receipts < ROP | H2 #4 (1–2 kalimat) | — (tanpa Soltius di body) |
| SAP Integrated Business Planning (SAP IBP) | Nama penuh sekali; jangan bedah modul/deployment | H2 #4 + CTA | Anchor funnel |
| — | Soltius **mengimplementasikan dan mendampingi** solusi perencanaan rantai pasok SAP seperti SAP IBP untuk perusahaan manufaktur dan distribusi | Kesimpulan (1 positioning line) | SAP Platinum Partner via United VARs, sejak 1998 |

**Maks 2 self-mention total** (1 positioning line di Kesimpulan + 1 soft CTA baris terakhir). `safety-stock-c01` memakai kredensial United VARs dengan kalimat mirip → **variasikan diksinya**. **Implements/supports — NEVER builds.** Tanpa superlatif; jangan tumpuk kredensial.

---

## Edge cases & nuance (bahan honest hedging H2 #2)

- **ROP yang benar pun gagal bila catatan stoknya meleset** — sistem memicu PO berdasarkan angka di layar, bukan barang di rak. Ini konsekuensi logis langsung dari Claim 3 (pemicunya adalah *stok tercatat* + firm receipts), jadi hedging ini **bersandar pada sumber**, bukan opini. Tempat tautan cousin [manajemen gudang].
- **Sentuhan praktisi tanpa nama Soltius** (diizinkan brief): ROP paling sering meleset bukan karena rumusnya salah, melainkan karena angkanya ditetapkan sekali lalu tidak pernah ditinjau lagi.
- **ROP tinggi juga punya biaya** (stok mengendap) — maksimal 1 klausa; sisi *dead stock* disisakan untuk artikel lain.

---

## Flags (open factual risk — WAJIB dibaca writer)

1. ⚠️ **ATRIBUSI RUMUS — risiko terbesar dossier ini.** SAP menyatakan **satu** rumus saja: `reorder point = safety stock + average daily requirements × replenishment lead time` (bentuk **dengan** pengaman). Bentuk "dasar" tanpa safety stock **tidak ada di sumber SAP mana pun yang dibaca run ini** — itu doktrin persediaan umum. **Rekomendasi**: tulis tabel dua bentuk (brief mengikat), tetapi **jangan** menulis "menurut SAP ada dua bentuk rumus" atau menempelkan sitasi SAP pada baris "Dasar". Sitasi SAP hanya untuk: komposisi RLT, pemicu, manual/otomatis, service level.

2. ⚠️ **"25 kali lipat" ambigu.** Brief menulis "14.400 unit — sekitar 25 kali lipat dari angka yang benar" tanpa menyebut referennya. Verifikasi: 14.400 ÷ **570** = **25,26×** (~25 ✓) tetapi 14.400 ÷ **480** = **tepat 30×**. **Rekomendasi**: pilih salah satu secara eksplisit — (a) "sekitar 25 kali lipat dari ROP yang benar (570 unit)", atau (b) yang lebih bersih secara logika, "tepat 30 kali lipat dari angka permintaan-selama-lead-time yang benar (480 unit)" karena jebakannya ada di suku `permintaan × lead time` (apple-to-apple). **Jangan biarkan "angka yang benar" tanpa rujukan** — editor akan menandainya.

3. ⚠️ **ASCM Supply Chain Dictionary — JANGAN dikutip.** Edisi ke-19 terkonfirmasi ada, tetapi bunyi definisi ROP **tidak berhasil dibaca** (landing page tanpa definisi; PDF kamus butuh sesi login/terenkode). **Rekomendasi**: jangan sebut "menurut ASCM/APICS, reorder point adalah…". Artikel tidak membutuhkannya — SAP Learning sudah memenuhi syarat sitasi otoritatif.

4. ⚠️ **Kode MRP type (VB/VM/V1/V2) — dikonfirmasi TIDAK ADA** di kedua halaman SAP official yang terbaca. Larangan brief **berdiri**. Jangan pakai.

5. ⚠️ **URL S/4HANA di brief (E-E-A-T #3) tidak bisa dikutip** — JS-rendered, hanya judul (dites ulang run ini). Jangan menautkannya sebagai sumber. Ganti dengan SAP Library klasik (Source #2).

6. ⚠️ **SAP Library (Source #2) adalah dokumentasi era ECC** (Globalization Extensions 607). SAP official ✓, tetapi legacy. **Rekomendasi**: kalau hanya 1 sitasi, pakai SAP Learning. Kalau 2, jangan mengesankan Source #2 sebagai dokumentasi terkini.

7. ⚠️ **"Material master **at plant level**" — jangan ditulis.** Frasa "plant level" muncul di ringkasan hasil pencarian, tetapi **tidak terkonfirmasi** di teks halaman yang benar-benar dibaca. "Material master" saja sudah terverifikasi (Claim 4) dan cukup. Hemat kata juga.

8. ⚠️ **Service level ≠ input langsung ROP.** Ia input perhitungan **safety stock** (Claim 5). Jangan menulis "ROP dihitung dari service level".

9. ⚠️ **Tidak ada benchmark stockout/persediaan Indonesia yang terverifikasi** — tidak dicari lebih jauh karena budget kata brief (≈955) sudah tidak menyisakan ruang. **JANGAN mengarang** angka seperti "perusahaan Indonesia kehilangan X% penjualan akibat stockout" atau persentase adopsi ROP. **Jangan mengulang 14,29%** (milik `lead-time-c01`).

10. ⚠️ **Angka contoh = ilustrasi buatan**, wajib dilabeli. Jangan menyajikannya sebagai data lapangan/benchmark. Bila satu angka diubah, hitung ulang seluruh set (Claim 8–13).

### Boundary dedup — material yang SENGAJA TIDAK disediakan dossier ini
Jenis/rumus/pengurangan lead time, lead time vs cycle time, cumulative lead time, DDMRP (`lead-time-c01`) · rumus/derivasi safety stock, tabel Z-score, service level 95%/99%, biaya simpan 15–25% (`safety-stock-c01`) · rumus EOQ √(2DS/H) (artikel EOQ mendatang) · mekanika MRP/lot sizing/modul PP (`mrp-c01`, `sap-pp-c01`) · rasio perputaran persediaan (`inventory-turnover-c01`). **Jika writer merasa butuh salah satunya, itu tanda artikel melenceng dari angle.**
