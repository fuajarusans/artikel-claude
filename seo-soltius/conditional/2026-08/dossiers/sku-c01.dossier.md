---
brief_id: "sku-c01"
researcher_run_date: "2026-07-17"
sources_cited: 2
claims_verified: 12
flags: 6
batch: "conditional-2026-08 (style_addendum.md MENGIKAT — 800–1000 kata, FAQ 2–3, 0 image placeholder, 2 internal link)"
---

# Research Dossier: SKU (Stock Keeping Unit): Pengertian, Fungsi, dan Cara Membuatnya

> **Dossier ringkas by design** — artikel target ~900 kata / 4 H2 ramping. Material di bawah sudah dipangkas ke 12 klaim terkuat yang melayani skeleton brief. Jangan menambah sub-bahasan di luar ini.

## TL;DR for the writer

- **Dua fakta pembeda sudah terverifikasi 200 OK dan boleh dikutip langsung**: (1) GS1 US menyatakan eksplisit SKU itu internal & dibuat brand/peritel sendiri, UPC berlaku global; (2) SAP Learning menyatakan varian *generic article* **secara standar** dinomori = nomor generic article + **sufiks urut tiga digit**. Tidak satu pun pesaing SERP punya keduanya.
- **Angka GTIN SELAMAT** — brief menyuruh drop bila tak terkonfirmasi. Sudah terkonfirmasi dari GS1 US: **"They can be 8, 12, 13, or 14 digits long."** Boleh dipakai inline.
- **"8–12 karakter" TIDAK punya sumber otoritatif** — pencarian justru mengonfirmasi *tidak ada standar resmi* untuk panjang SKU. WAJIB dilabeli praktik umum. Ini justru bahan honest-hedging yang membedakan kita dari SERP.
- **Persyaratan GTIN marketplace/ritel modern Indonesia GAGAL diverifikasi** — semua hasil pencarian adalah reseller barcode/content farm (kategori "reject as sources"). Angka yang beredar (Rp 1,5 juta/tahun, 14 hari kerja, 1.000 nomor) **DILARANG dipakai**. Longgarkan kalimatnya persis seperti fallback brief.
- **Hati-hati satu jebakan penamaan**: sumber SAP menulis *"In SAP Retail"*, dan hub `retail-produk` justru menampilkan **iVend Retail**, bukan SAP S/4HANA Retail. Lihat Flags.

---

## Core facts (verified)

### A. SKU vs barcode vs GTIN — sumber GS1 (untuk H2 #2 + FAQ)

> **Claim**: SKU adalah pengenal internal yang dibuat peritel/brand sendiri
> **Verbatim**: "A SKU is known as a Stock Keeping Unit and is an internal tracking metric for retailers."
> **Source**: GS1 US, "What is a UPC Code? | Guide to UPCs" — https://www.gs1us.org/upcs-barcodes-prefixes/guide-to-upcs — diakses 2026-07-17 (200 OK)
> **Confidence**: high

> **Claim**: UPC berlaku global, SKU bersifat internal
> **Verbatim**: "A UPC code is accepted globally for that product, while a SKU number is internal and created by a specific brand or retailer."
> **Source**: GS1 US, Guide to UPCs (URL di atas), 2026-07-17
> **Confidence**: high

> **Claim (POIN QUOTABLE UTAMA H2 #2)**: Dua peritel bisa menjual barang yang sama dengan UPC identik, tetapi SKU-nya berbeda
> **Verbatim**: "Two retailers can sell the same item with the same UPC codes, but they will both use their own SKU number."
> **Source**: GS1 US, Guide to UPCs, 2026-07-17
> **Confidence**: high — ini kalimat GS1 sendiri, bukan parafrase kita

> **Claim**: GS1 adalah otoritas global untuk identifikasi unik produk
> **Verbatim**: "GS1 is the global authority for the unique identification of products and companies, which serve as the building blocks for barcodes."
> **Source**: GS1 US, Guide to UPCs, 2026-07-17
> **Confidence**: high

> **Claim**: GTIN adalah nomor yang dikodekan pada barcode
> **Verbatim**: "the identifying number encoded on the bottom of the barcode"; GTIN = "Global Trade Item Number"
> **Source**: GS1 US, Guide to UPCs, 2026-07-17
> **Confidence**: high

> **Claim (ANGKA — brief minta diverifikasi; HASIL: TERVERIFIKASI, JANGAN di-drop)**: GTIN punya empat struktur, panjang 8/12/13/14 digit
> **Verbatim**: "Global Trade Item Number barcodes have four structures. They can be 8, 12, 13, or 14 digits long."
> **Source**: GS1 US, "What is a GTIN?" — https://www.gs1us.org/upcs-barcodes-prefixes/what-is-a-gtin — diakses 2026-07-17 (200 OK)
> **Confidence**: high

> **Claim**: GTIN-12 = 12 digit, satu-satunya GTIN yang dipakai di barcode UPC-A, dominan di Amerika Utara; GTIN-13 = 13 digit, satu-satunya yang dipakai di EAN-13, dominan di luar Amerika Utara
> **Verbatim**: "A GTIN-12 is 12 digits in length"; "A GTIN-13 is 13 digits in length"
> **Source**: GS1 US, "What is a GTIN?", 2026-07-17
> **Confidence**: high — *pakai hanya bila muat; ini detail cadangan, bukan wajib di 900 kata*

> **Claim**: GTIN ditetapkan oleh brand owner; GTIN mengidentifikasi trade item secara unik & global
> **Verbatim**: "The brand owner assigns and marks the soda with a GTIN."; "It is a globally unique number used to identify your specific product or service."
> **Source**: GS1 US, "What is a GTIN?", 2026-07-17
> **Confidence**: high
> **Nuance penting**: GTIN *ditetapkan* brand owner, tetapi rentang nomornya *dilisensikan lewat GS1*. Jangan tulis "GTIN dibuat bebas oleh brand" — itu salah. Frasa aman: **"ditetapkan brand owner dari rentang nomor yang dilisensikan lewat GS1"**.

### B. Lensa sistem — sumber SAP official (untuk H2 #4)

> **Claim (PEMBEDA UTAMA vs SERP)**: Varian generic article di SAP secara standar dinomori dari nomor generic article + sufiks urut tiga digit
> **Verbatim**: "In SAP Retail, the generic article variants are by standard numbered based on the generic article's number, with an additional sequential three-digit suffix."
> **Source**: SAP Learning, "Creating a Generic Article" (Configuring Master Data in SAP S/4HANA Cloud Private Edition — Retail) — https://learning.sap.com/courses/configuring-master-data-in-sap-s-4hana-cloud-private-edition-retail/creating-a-generic-article-1-1 — diakses 2026-07-17 (200 OK)
> **Confidence**: high
> **⚠️ WAJIB dipertahankan saat menulis**: kata **"by standard" / "secara standar"**. Halaman yang sama menyebut skema alternatif dimungkinkan lewat *user exit*. Jadi tulis "secara standar/default", **JANGAN** "selalu" atau "semua varian SAP bernomor 3 digit". Sesuai brief: **jangan sebut nama user exit/transaksi/versi**.

> **Claim**: Generic article = "dummy header article" (produk induk sebagai wadah varian), berfungsi sebagai bantuan seleksi/entri di transaksi & dokumen
> **Verbatim**: "a dummy header article"; "selection and entry help in system transactions and documents"
> **Source**: SAP Learning, "Creating a Generic Article", 2026-07-17
> **Confidence**: high

> **Claim**: Variant = artikel yang hanya berbeda pada nilai karakteristik tertentu (warna, ukuran, rasa)
> **Verbatim**: "articles that only differ from one another in certain characteristics values (for example, color, size or flavor)"
> **Source**: SAP Learning, "Creating a Generic Article", 2026-07-17
> **Confidence**: high

> **Claim (JEMBATAN KONSEPTUAL PALING KUAT — pakai ini di H2 #4)**: Varian-lah yang merepresentasikan produk fisik nyata di seluruh proses bisnis
> **Verbatim**: "represent the actually available, physical articles used in all business processes, from planning to purchasing, logistics and sales."
> **Source**: SAP Learning, "Creating a Generic Article", 2026-07-17
> **Confidence**: high
> **Kenapa ini emas**: kalimat SAP ini secara efektif mengatakan *varian = SKU fisiknya* tanpa kita perlu mengarang. Ini menyambungkan H2 #3 (penomoran manual) ke H2 #4 (sistem menegakkan skema) secara jujur dan bersumber.

### C. Fakta Soltius (pre-approved, `company_profile.md` — tidak perlu verifikasi eksternal)

> **Claim**: Soltius berdiri 1998; SAP Platinum Certified Channel Partner; anggota United VARs; **Retail** adalah salah satu solusi by-product DAN salah satu industri vertikal Soltius
> **Source**: `knowledge_base/company_profile.md` (Identity; SAP partnership status; Solutions by product; By industry)
> **Confidence**: high (pre-approved)
> **Pakai**: HANYA 1 positioning line di Kesimpulan. Pilih **satu** kredensial, jangan menumpuk.

---

## Solution focus + Soltius anchor

> `sku adalah` tidak ada di `product_matrix.md` → mapping diturunkan dari brief + tracker + `company_profile.md`. Aturan universal `product_matrix.md` berlaku penuh.

| What to teach | Facts to state accurately | Where | Soltius anchor |
|---|---|---|---|
| SKU sebagai kode internal | Dibuat & dimiliki peritel sendiri (GS1 US) | Snippet + H2 #1 | — (tanpa Soltius di body) |
| GTIN/UPC/barcode via GS1 | GS1 = otoritas global; GTIN 8/12/13/14 digit; brand owner menetapkan dari rentang berlisensi | H2 #2 (tabel) | — |
| Master data produk berjenjang SAP | generic article → variant; penomoran varian **secara standar** = nomor induk + sufiks urut 3 digit; varian = produk fisik di semua proses bisnis | H2 #4 (1–2 kalimat) | — (TANPA nama Soltius di body) |
| — | Soltius: SAP Platinum Partner via United VARs, sejak 1998; mengimplementasikan & mendampingi solusi ritel SAP termasuk penataan master data produk | Kesimpulan (1 line) + CTA (1) | Retail solution + Implementation |

**Framing wajib**: Soltius **implements / migrates / supports** — **NEVER builds/owns**. Maks **2** self-mention total (addendum §6).

---

## Authoritative external sources (sitasi final 1–2 inline)

1. **GS1 US — "What is a UPC Code? | Guide to UPCs"** — https://www.gs1us.org/upcs-barcodes-prefixes/guide-to-upcs — *what it backs*: SKU internal & dibuat peritel sendiri vs UPC global; dua peritel bisa berbagi UPC tetapi SKU berbeda; GS1 sebagai otoritas global. **Pakai di H2 #2.** ✅ 200 OK, 2026-07-17.
2. **GS1 US — "What is a GTIN?"** — https://www.gs1us.org/upcs-barcodes-prefixes/what-is-a-gtin — *what it backs*: GTIN 8/12/13/14 digit; brand owner menetapkan GTIN. **Cadangan/pendukung angka digit** bila writer memakai angka GTIN. ✅ 200 OK, 2026-07-17.
3. **SAP Learning — "Creating a Generic Article"** — https://learning.sap.com/courses/configuring-master-data-in-sap-s-4hana-cloud-private-edition-retail/creating-a-generic-article-1-1 — *what it backs*: generic article/variant + sufiks urut tiga digit. **Pakai di H2 #4.** ✅ 200 OK, 2026-07-17.

> Sitasi inline **1–2 saja** (addendum §4). Rekomendasi: **GS1 US Guide to UPCs (H2 #2) + SAP Learning (H2 #4)** — dua sumber, dua otoritas berbeda, persis dua celah SERP yang kita serang.
>
> **Tidak dipakai**: `gs1.org` (403 — dikonfirmasi ulang run ini), `help.sap.com` (JS-rendered, hanya judul), `gs1id.org` (**GS1 Indonesia — WebFetch mengembalikan halaman kosong run ini; tidak dapat diverifikasi**).

---

## Data table #1 — Anatomi & contoh penomoran SKU (H2 #3, CORE — catatan tracker "contoh penomoran SKU")

> **WAJIB dilabeli ilustrasi.** Merek "Nordika" adalah **merek fiktif buatan** — jangan diganti merek nyata (Nike/Tropicana/Uniqlo) seperti pesaing SERP.

**Satu produk dibedah jadi segmen** — contoh ilustrasi: kaos polos hitam ukuran M dari merek (fiktif) Nordika → **`NRD-KP-HTM-M`**

| Segmen | Isi | Contoh |
|---|---|---|
| Merek | Nordika *(ilustrasi)* | `NRD` |
| Kategori | Kaos polos | `KP` |
| Warna | Hitam | `HTM` |
| Ukuran | M | `M` |

**Aritmetika perluasan (verifiable oleh pembaca):** 1 model kaos dengan **3 warna** (Hitam `HTM`, Putih `PTH`, Navy `NVY`) × **4 ukuran** (S, M, L, XL) = **12 SKU**. Semuanya berbagi awalan `NRD-KP-`, sehingga tetap tersortir berdampingan.

Contoh deret (writer boleh ambil 3–4 saja, jangan tulis 12-duanya — boros kata):
`NRD-KP-HTM-S` · `NRD-KP-HTM-M` · `NRD-KP-HTM-L` · `NRD-KP-HTM-XL` · `NRD-KP-PTH-S` … `NRD-KP-NVY-XL`

**Aturan penomoran (list ber-lead-in bold):**

- **Urut umum → spesifik** — merek/kategori di depan, varian di belakang; kode tersortir logis dan awalan yang sama mengelompok sendiri.
- **Panjang wajar** — praktik yang lazim **8–12 karakter**. ⚠️ **Label sebagai praktik umum, BUKAN standar** (lihat Flags).
- **Jangan diawali angka nol** — banyak spreadsheet dan alat impor memangkas nol di depan secara diam-diam (`012` menjadi `12`).
- **Hindari karakter kembar** — `0` vs `O` dan `1` vs `I` adalah sumber salah ketik saat input manual.
- **Huruf kapital + tanda hubung** — tanpa spasi atau karakter spesial yang merusak impor data.
- **Jangan pakai nomor dari pemasok/pabrikan** — nomor itu bisa berubah dan bukan milik Anda.

**Honest hedging (1–2 kalimat, pengganti H2 honest — addendum §2):** SKU bukan tempat menyimpan segalanya. Memasukkan harga, jumlah stok, atau nama pemasok ke dalam kode membuatnya usang begitu data itu berubah; kode yang terlalu deskriptif juga melambatkan orang yang harus mengetiknya ratusan kali sehari.

---

## Data table #2 — SKU vs Barcode vs GTIN (H2 #2)

| Dimensi | SKU | Barcode | GTIN |
|---|---|---|---|
| Siapa yang membuat | Peritel/brand sendiri, bebas dirancang | Dicetak brand owner mengikuti standar GS1 | Ditetapkan brand owner dari rentang nomor yang **dilisensikan lewat GS1** |
| Sifat pemakaian | **Internal** — hanya berlaku di dalam bisnis Anda | Media baca | **Global** — satu nomor untuk produk yang sama di mana pun |
| Format | Alfanumerik, bebas (lazimnya 8–12 karakter) | Simbol garis/2D (mis. UPC-A, EAN-13) | Numerik: **8, 12, 13, atau 14 digit** |
| Tujuan utama | Manajemen stok & analisis internal | Agar mesin dapat membaca nomor tanpa salah ketik | Identifikasi produk unik secara global |

**Poin quotable H2 #2**: SKU Anda buat sendiri; GTIN diterbitkan lewat GS1; barcode hanyalah cara mesin membacanya. Dua peritel bisa menjual barang yang sama dengan UPC identik, tetapi SKU-nya berbeda (GS1 US).

Expand akronim **sekali**: UPC = *Universal Product Code*; GTIN = *Global Trade Item Number*.

---

## FAQ draft (2–3 Q&A — addendum §4; jawaban 30–60 kata, tiap jawaban memuat 1 fakta/angka)

> Diambil dari PAA terkuat di brief (#3, #5, dan varian #7). **Pakai 2 atau 3 — jangan lebih.** Bila hanya muat 2, ambil FAQ 1 + FAQ 2 (paling banyak dicari & paling sering salah dipahami).

### Apa perbedaan SKU dan barcode?

SKU adalah kode internal yang Anda rancang sendiri untuk mengelola stok; barcode adalah representasi visual yang dibaca mesin, dan angka yang dikodekannya — GTIN — diterbitkan lewat GS1 serta berlaku global. Menurut GS1 US, dua peritel bisa menjual barang dengan UPC sama, tetapi memakai nomor SKU masing-masing.

*(45 kata · fakta: pernyataan GS1 US, terverifikasi verbatim)*

### Berapa karakter SKU yang ideal?

Tidak ada standar resmi — SKU adalah kode internal, sehingga setiap perusahaan menentukan formatnya sendiri. Praktik yang lazim di lapangan berkisar 8–12 karakter: cukup memuat merek, kategori, dan varian tanpa menyulitkan input manual. Yang wajib dipenuhi hanya tiga: unik, konsisten formatnya, dan tidak diawali angka nol.

*(45 kata · angka: 8–12 karakter, sudah di-hedge sebagai praktik lazim — JANGAN hapus hedge-nya)*

### Apakah SKU perlu didaftarkan seperti barcode?

Tidak. SKU sepenuhnya internal dan bebas Anda rancang tanpa mendaftar ke lembaga mana pun. Yang diterbitkan lewat GS1 adalah GTIN — nomor global yang dikodekan pada barcode, dengan empat struktur sepanjang 8, 12, 13, atau 14 digit. Sejumlah kanal ritel dan marketplace mensyaratkan GTIN untuk listing produk.

*(46 kata · angka: 8/12/13/14 digit, terverifikasi GS1 US · ⚠️ kalimat terakhir SUDAH dilonggarkan jadi "sejumlah" — persyaratan spesifik Indonesia TIDAK terverifikasi, lihat Flags)*

---

## Definition snippet draft (40–60 kata — SATU-SATUNYA definisi di artikel)

> **Ringkasnya:** SKU (*stock keeping unit*) adalah kode unik alfanumerik yang dibuat sebuah bisnis untuk mengidentifikasi setiap varian produk yang dapat dijual dan disimpan — merek, kategori, warna, hingga ukuran. Berbeda dari barcode yang berlaku global, SKU bersifat internal dan sepenuhnya dirancang oleh perusahaan yang memakainya, sehingga dua peritel bisa memakai kode berbeda untuk barang yang sama.

**55 kata** ✓ (band 40–60) · 1 em-dash (sisa jatah: 1 untuk seluruh artikel — addendum/§5 anti-AI) · entity-clear, extractable, akronim di-expand.

⚠️ **INI satu-satunya tempat definisi boleh muncul.** Body/H2 dan jawaban langsung 40–60 kata setelah tiap H2 **DILARANG** memparafrase kalimat ini. Poin baru per H2 sudah dipetakan di brief skeleton — pegang itu.

---

## Angka spesifik inline yang tersedia (addendum §4 minta ≥4 — tersedia 5, semua aman)

| Angka | Status | Catatan pemakaian |
|---|---|---|
| **3 warna × 4 ukuran = 12 SKU** | ✅ aritmetika sendiri, verifiable | Label ilustrasi |
| **Sufiks urut 3 digit** (SAP) | ✅ terverifikasi verbatim SAP Learning | Wajib pakai "secara standar" |
| **GTIN 8/12/13/14 digit** | ✅ terverifikasi verbatim GS1 US | Boleh dipakai; brief sempat menyuruh drop — **TIDAK jadi drop** |
| **8–12 karakter** (SKU) | ⚠️ praktik umum, tanpa sumber otoritatif | Wajib di-hedge, jangan disitasi ke GS1 |
| **Sejak 1998** (Soltius) | ✅ pre-approved company_profile | Hanya di Kesimpulan |

---

## Edge cases & nuance (1–2 kalimat saja di artikel, jangan melebar)

- **SKU deskriptif punya titik balik**: makin banyak atribut yang dikodekan, makin panjang & makin lambat diketik. Ini alasan aturan "panjang wajar" ada, bukan estetika.
- **Skema gagal bukan saat dirancang, tapi saat orang kedua ikut menambahkan produk dengan aturannya sendiri.** Sentuhan praktisi ini boleh dipakai **tanpa** nama Soltius (brief §Soltius anchor) — cocok sebagai jembatan ke H2 #4.
- **Mengubah skema setelah ribuan produk terdaftar jauh lebih mahal** daripada menetapkannya sekali di awal → ini poin baru untuk jawaban langsung H2 #3 (bukan pengulangan snippet).

---

## Flags (open factual risk — writer WAJIB patuh)

- ⚠️ **"8–12 karakter" bukan standar.** Pencarian run ini justru mengonfirmasi **tidak ada standar resmi** untuk panjang SKU (SKU adalah pengenal internal; GS1 tidak mengaturnya). Sumber yang beredar hanya glosarium vendor & bervariasi (6–12, ~8, ≤20). → **Rekomendasi**: tulis "praktik yang lazim" / "umumnya". **JANGAN** menyitasikannya ke GS1 atau menyebutnya aturan/standar. *(Kejujuran ini justru pembeda kita dari SERP — pesaing menulisnya seolah baku.)*
- ⚠️ **Persyaratan GTIN untuk marketplace/ritel modern Indonesia — TIDAK TERVERIFIKASI.** Seluruh hasil pencarian berasal dari reseller barcode & content farm (ucollab.id, kiosbarcode.com, dikemas.com, pradha.id, bisnisukm.com) — kategori **"reject as sources"** per definisi agent. Situs **GS1 Indonesia (`gs1id.org`) mengembalikan halaman kosong** saat WebFetch run ini. → **Rekomendasi**: pakai fallback brief — **"sejumlah kanal ritel dan marketplace mensyaratkan GTIN"**. **DILARANG menyebut nama peritel spesifik** (Indomaret/Alfamart/Transmart), nama marketplace (Tokopedia/Shopee), atau angka apa pun dari sumber itu.
- 🚫 **ANGKA TERLARANG (beredar di hasil pencarian, semuanya dari reseller — JANGAN DIPAKAI):** "Rp 1,5 juta/tahun", "14 hari kerja", "1.000 nomor produk per anggota", "biaya keanggotaan GS1". Tidak satu pun terverifikasi dari sumber otoritatif. Memakainya = melanggar disiplin sitasi §10 (jangan mengarang harga/angka).
- ⚠️ **Penamaan produk SAP.** Sumber SAP Learning menulis **"In SAP Retail"**, dan judul course-nya **"…SAP S/4HANA Cloud Private Edition — Retail"** — bukan persis frasa "SAP S/4HANA Retail". → **Rekomendasi**: aman menulis "SAP S/4HANA Retail" sebagai nama solusi ritel SAP (dipakai luas & sesuai tracker), tetapi saat **menyitasi fakta sufiks 3 digit**, atribusikan ke **dokumentasi SAP** secara umum ("menurut dokumentasi SAP"), jangan mengklaim SAP menyebut produknya persis begitu di halaman itu. **JANGAN** sebut nama transaksi, user exit, atau versi.
- ⚠️ **"Secara standar" tidak boleh hilang.** Halaman SAP menyatakan sufiks 3 digit adalah **default** dan skema alternatif dimungkinkan. Menulis "selalu"/"semua varian" = klaim berlebih.
- ⚠️ **Hub `retail-produk` menampilkan iVend Retail, BUKAN SAP S/4HANA Retail** (diverifikasi run ini; halaman juga tidak menyebut SAP S/4HANA Retail secara eksplisit di body). → **Rekomendasi**: anchor cukup **"solusi retail"** tanpa menyebut nama produk pihak ketiga. Bila iVend Retail terpaksa disebut: framing **diimplementasikan/didukung** Soltius, **bukan** produk Soltius.
- ⚠️ **Klaim "spreadsheet memangkas nol di depan"**: perilaku yang lazim diketahui, tanpa sumber otoritatif yang dikutip run ini. → Tulis sebagai **alasan praktis** ("banyak spreadsheet dan alat impor memangkasnya"), **jangan** dibungkus statistik atau disitasi.

---

## Boundary dedup (brief §Distinct angle — MENGIKAT)

Material di dossier ini **sengaja tidak mencakup**, dan writer **DILARANG** memasukkannya:

- Strategi omnichannel, omnichannel vs multichannel, BOPIS/click-and-collect, integrasi POS–gudang–akuntansi → milik `omnichannel-retail-c01` (2026-06).
- Kapan perusahaan butuh WMS, ambang jumlah SKU, slotting, bin management → milik cluster `warehouse-management-system`.
- Rumus persediaan (safety stock, reorder point, inventory turnover, HPP) → milik artikel lain batch ini.
- SKU rationalization/proliferation, ABC analysis, prosedur & biaya pendaftaran GTIN lewat GS1 Indonesia, master data governance, serial vs batch number → sengaja ditahan untuk artikel lain (brief §Notes for future strategist runs).

SAP S/4HANA Retail muncul **hanya** sebagai tempat SKU hidup sebagai master data (H2 #4, 1–2 kalimat) — bukan sebagai fondasi integrasi kanal, bukan bedah produk.

---

## Internal links — recheck run ini (2026-07-17)

| Link | Status | Anchor natural | Penempatan |
|---|---|---|---|
| **Hub**: https://www.soltius.co.id/id/solutions-by-products/retail-produk | ✅ 200 OK — judul "Solusi Retail Produk - SOLTIUS Indonesia"; Soltius terframing sebagai mitra/implementator ✓ | "solusi retail" | Paruh akhir / dekat H2 #4 atau CTA |
| **Cousin**: https://www.soltius.co.id/id/blog/konsep-warehouse-management-system-yang-wajib-anda-tahu | ✅ 200 OK — judul "Konsep Warehouse Management System yang Wajib Anda Tahu!"; topik WMS ✓ | "manajemen gudang" | H2 #1, saat membahas *picking*/stock opname |

**TEPAT 2 tautan.** Tanpa "BACA JUGA" — inline natural.
