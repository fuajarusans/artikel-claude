---
keyword: "sku adalah"
keyword_slug: "sku"
landing_page: ""
month: "2026-08"
brief_id: "sku-c01"
angle: "sku-pengertian-fungsi-dan-cara-membuat-penomoran"
angle_hash: "sha1:86c2fe46d521"
search_intent: "informational"
target_word_count: 900
strategist_run_date: "2026-07-17"
mode: "conditional-given-angle"
batch: "conditional-2026-08 (style_addendum.md WAJIB — 800–1000 kata, tanpa image placeholder, FAQ 2–3, 2 internal link)"
dedup_result: "DISTINCT — Jaccard tertinggi ~0.05 vs omnichannel-retail-c01 (< 0.4); tidak ada tabrakan angle_hash di 81 hash yang diperiksa"
---

# SKU (Stock Keeping Unit): Pengertian, Fungsi, dan Cara Membuatnya

> Working Title diberikan user — substansi dipertahankan apa adanya. Hanya catatan teknis: H1 versi lengkap = 65 karakter (di atas band 50–60), jadi **meta title dipendekkan** agar primary keyword `sku adalah` masuk 10 karakter pertama. Penulis TIDAK mengubah angle.
>
> **H1 (artikel):** SKU (Stock Keeping Unit): Pengertian, Fungsi, dan Cara Membuatnya
> **Meta title (≤60):** SKU Adalah: Pengertian, Fungsi, dan Cara Membuatnya *(50 char)*
> **Meta description (140–160):** SKU adalah kode unik internal untuk mengidentifikasi tiap varian produk. Pahami fungsi SKU, bedanya dengan barcode, serta aturan penomoran dan contohnya. *(151 char)*
> **Slug (≤60):** sku-adalah-pengertian-fungsi-cara-membuat *(41 char)*

## Hook hypothesis

Manajer inventaris, staf gudang, dan pemilik bisnis ritel bertemu masalah yang sama: dua produk yang "kelihatan sama" ternyata beda ukuran, stok opname tidak pernah cocok, dan tim gudang salah ambil barang karena nama produk di sistem cuma "Kaos Polos Hitam". SERP Bahasa Indonesia untuk "sku adalah" padat (Mekari Jurnal, PRIEDS, Kompas, Komerce, Folio POS, MAS Software, EKRUT) tetapi berhenti di pola yang identik: definisi → manfaat → satu contoh kode acak. Nyaris tak satupun memberi **aturan penomoran yang bisa langsung dipakai** — mana yang boleh masuk kode dan mana yang tidak, mengapa SKU tidak boleh diawali angka nol, dan bagaimana skema tetap rapi saat varian bertambah. Celah kedua lebih besar lagi: tidak ada yang menjelaskan bagaimana SKU **hidup di dalam sistem** — bahwa ERP ritel kelas enterprise sudah punya model penomoran varian yang terstruktur (di SAP: *generic article* + varian bersufiks tiga digit), sehingga penomoran manual di spreadsheet ada batasnya. Soltius kredibel di titik ini karena bekerja tepat di lapisan itu: sebagai mitra implementasi SAP yang menata master data produk di atas SAP S/4HANA Retail — bukan pembuat softwarenya.

## Primary keyword

`sku adalah`

Supporting keyword (given): `cara membuat sku`

(Pola pencari Indonesia: istilah Inggris + penjelasan Bahasa Indonesia. Intent definisional bercampur *how-to* — judul yang diberikan sudah memuat keduanya. Artikel ini melengkapi cluster ritel/persediaan: `omnichannel-retail-c01` memegang strategi kanal, cluster `warehouse-management-system` memegang operasi gudang — konsep SKU + aturan penomoran belum dimiliki siapa pun.)

## Secondary / LSI keywords (8–12)

- stock keeping unit
- kode SKU / nomor SKU
- cara membuat SKU
- contoh SKU produk
- barcode / UPC (Universal Product Code)
- GTIN (Global Trade Item Number) / GS1
- manajemen persediaan (inventory management)
- stock opname
- varian produk (warna, ukuran)
- master data produk
- article number / generic article (istilah SAP Retail)
- SAP S/4HANA Retail
- dead stock / barang slow-moving

## Search intent & SERP feature targets

- **Stage**: awareness (top-funnel definisional + *how-to*/template intent)
- **Format**: definition snippet + tabel pembeda (SKU vs barcode vs GTIN) + anatomi kode & contoh penomoran berantai
- **Surface targets**:
  - [x] AI Overview (Google SGE) / AI-engine citation (Perplexity, ChatGPT) — definisi 40–60 kata + tabel pembeda + aturan penomoran quotable
  - [x] Featured Snippet (definisi + tabel + list aturan)
  - [x] People Also Ask

## SERP landscape (live scrape today)

> **Catatan metode:** WebFetch ke `google.com/search?q=sku+adalah&hl=id&gl=id` **terblokir** (Google mengembalikan halaman error/consent, bukan SERP) — konsisten dengan seluruh run conditional 2026-06 dan 2026-07. Degradasi anggun ke **WebSearch** (2026-07-17, 2 kueri Bahasa Indonesia) sesuai SOP `CLAUDE.md` §11. Volume/KD: `n/a (Ahrefs not connected)`.

**Top competing pages (WebSearch, kueri Bahasa Indonesia):**
1. `https://www.jurnal.id/id/blog/stock-keeping-unit-sku/` — Mekari Jurnal — *angle*: "Pengertian, Fungsi, dan Contohnya"; sudut akuntansi/SME, contoh kode ringan, funnel software akuntansi.
2. `https://www.prieds.com/post/stock-keeping-unit-sku-pengertian-manfaat-fungsi-dan-cara-membuat-sku` — PRIEDS — *angle*: paling dekat dengan judul kita (pengertian + manfaat + cara membuat); langkah pembuatan masih generik ("tentukan informasi → pilih format → uji").
3. `https://www.kompas.com/skola/read/2021/08/18/133936169/stock-keeping-unit-pengertian-fungsi-cara-penggunaan-dan-contohnya` — Kompas Skola — *angle*: penjelasan ensiklopedis/edukasi umum; otoritas domain tinggi, kedalaman praktis rendah.
4. `https://www.foliopos.com/blog/detail/stock-keeping-unit-sku-adalah-definisi-fungsi-dan-contohnya` — Folio POS — *angle*: definisi + fungsi + contoh; funnel sistem kasir/POS untuk UMKM.
5. `https://komerce.id/blog/apa-itu-sku/` & `https://www.ekrut.com/media/sku-adalah` — Komerce / EKRUT — *angle*: "apa itu + cara membuat"; EKRUT memberi 3 contoh penerapan (paling konkret di antara pesaing).
6. `https://majoo.id/solusi/detail/sku-vs-barcode-apa-bedanya-ini-perannya-dalam-sistem-kasir` — Majoo — *angle*: satu-satunya yang fokus SKU vs barcode; lensa sistem kasir UMKM, tidak menyentuh GTIN/GS1.
7. `https://www.mas-software.com/blog/sku-adalah-stock-keeping-unit` & `https://www.spil.co.id/blogs/stock-keeping-unit-adalah/` — MAS Software / SPIL — *angle*: definisi + fungsi + contoh kasus; framing ERP/logistik generik.

**Gaps to exploit** (yang TIDAK dicakup baik oleh top hasil):
- **Aturan penomoran yang bisa dieksekusi**: semua menulis "buatlah konsisten dan unik" tanpa aturan konkret. Kita beri aturan spesifik: urutan umum→spesifik, hindari awalan angka nol, hindari karakter mirip (`0`/`O`, `1`/`I`), huruf kapital + tanda hubung, jangan menyisipkan data yang berubah (harga, stok, nama pemasok).
- **SKU vs barcode vs GTIN dipisah tiga**: pesaing menyamakan SKU dengan barcode atau berhenti di dua. Tidak ada yang menjelaskan **siapa yang menerbitkan** masing-masing — SKU dibuat sendiri oleh peritel, GTIN diterbitkan lewat GS1. Kita bawa sumber GS1 langsung (otoritas standar, bukan blog vendor).
- **Contoh yang tidak berantai**: contoh pesaing berupa satu kode acak tanpa memperlihatkan bagaimana skema meluas. Kita pakai **satu produk dibedah jadi segmen, lalu ditunjukkan menghasilkan berapa SKU** saat varian bertambah (aritmetika yang bisa diverifikasi pembaca).
- **Tidak ada lensa sistem/enterprise**: tak satupun menjelaskan bahwa ERP ritel punya model penomoran varian sendiri. Fakta SAP (*generic article* + sufiks tiga digit) adalah pembeda yang tidak dimiliki SERP — sekaligus jembatan funnel yang jujur.
- **Tidak ada kejujuran batas**: tidak ada yang bilang SKU terlalu deskriptif justru menyulitkan, atau bahwa penomoran manual mentok pada skala tertentu.

**People Also Ask / kueri turunan** (dari WebSearch ID — mewakili PAA; SERP scrape terblokir):
1. Apa itu SKU (stock keeping unit)?
2. Apa fungsi SKU bagi bisnis?
3. Apa perbedaan SKU dan barcode?
4. Bagaimana cara membuat SKU?
5. Berapa digit/karakter SKU yang ideal?
6. Apa contoh kode SKU produk?
7. Apakah SKU sama dengan kode produk (product code)?

## Distinct angle vs. history

- **Closest prior article in this cluster**: `omnichannel-retail-c01` (conditional 2026-06, "Apa Itu Omnichannel Retail dan Cara Menerapkannya") — satu-satunya artikel ritel yang ada, dan target dedup yang ditunjuk tracker. Tetangga berikutnya: cluster `warehouse-management-system` (monthly 2026-08 ×4 + history).
- **How this brief differs**: `omnichannel-retail-c01` adalah artikel **strategi kanal** — H2-nya: definisi omnichannel, omnichannel vs multichannel, 5 langkah menerapkan, integrasi POS–gudang–akuntansi, kapan belum perlu omnichannel. Artikel itu **tidak pernah menyebut SKU sama sekali** (diverifikasi: 0 kemunculan di draft & final). Brief ini kebalikan skalanya: bukan strategi kanal, melainkan **unit data paling atomik di bawahnya** — apa itu SKU, fungsinya, dan aturan penomoran praktis. Sesuai instruksi dedup tracker: *"Fokus konsep SKU + aturan penomoran praktis, bukan strategi omnichannel."* **Boundary tegas untuk writer**: JANGAN membahas strategi omnichannel, perbedaan omnichannel/multichannel, BOPIS/click-and-collect, atau integrasi POS–gudang–akuntansi (milik `omnichannel-retail-c01`); JANGAN membahas kapan perusahaan butuh WMS, ambang jumlah SKU, slotting, atau bin management (milik cluster `warehouse-management-system`). SAP S/4HANA Retail muncul di kedua artikel, tetapi di sini **hanya sebagai tempat SKU hidup sebagai master data** (article number/varian), bukan sebagai fondasi integrasi kanal.
- **Subtopic overlap (Jaccard) with closest prior**: subtopik brief ini = {definisi SKU, fungsi SKU, SKU vs barcode/GTIN, anatomi segmen kode, aturan penomoran, contoh penomoran berantai, kesalahan penomoran, SKU sebagai master data di ERP, SAP S/4HANA Retail} (9) vs subtopik `omnichannel-retail-c01` = {definisi omnichannel, omnichannel vs multichannel, 5 langkah menerapkan, customer journey lintas kanal, integrasi POS–gudang–akuntansi, BOPIS/click-and-collect, ship-from-store, single source of truth stok, kapan belum perlu, penyebab kegagalan, SAP S/4HANA Retail} (11). Irisan efektif = {SAP S/4HANA Retail sebagai sistem ritel} ≈ 1 dari union ~19 → **Jaccard ≈ 0.05 (< 0.4 ✓)**.
- **Cek permukaan dedup lain**: vs cluster `warehouse-management-system` (monthly 2026-08 `-01`..`-04` + history) ≈ 0.06 — di sana "SKU" muncul **hanya sebagai satuan hitung** ("<500 SKU", "di bawah ~100 SKU") sebagai ambang kebutuhan WMS, tidak pernah didefinisikan maupun dibahas penomorannya. Vs `lead-time-c01`, `safety-stock-c01`, `mrp-c01`, `cara-menghitung-hpp-c01` ≈ 0.03–0.05 (SKU hanya kata lewat). Vs `inventory-turnover-c01` & `reorder-point-c01` (row 8 & 12 batch ini) ≈ 0.05 — keduanya rumus/rasio persediaan, bukan kodifikasi produk. **angle_hash `sha1:86c2fe46d521` tidak berbenturan** dengan 81 hash yang ada di `articles_history/` + `conditional/2026-06` + `conditional/2026-07`. **Hasil dedup: DISTINCT — aman ditulis.**

## Article skeleton — H2s the writer should expand (BATCH OVERRIDE: 3–4 H2 SAJA)

> Lead ≤80 kata (pain konkret + keyword + janji artikel, TANPA roadmap) → definition snippet blockquote "Ringkasnya:" 40–60 kata → body 4 H2 ramping → FAQ 2–3 → Kesimpulan ≤80 kata → soft CTA baris terakhir. **DILARANG H2 definitional "Apa Itu SKU?"** — janji "Pengertian" di judul sudah ditunaikan oleh snippet; body langsung masuk fungsi, pembeda, dan cara membuat. Tidak ada info baru (asal istilah/standar) yang cukup untuk membenarkan H2 definitional tersendiri.
>
> **Budget kata (panduan, total ≈ 925):** lead 75 · snippet 50 · H2#1 110 · H2#2 130 · H2#3 230 · H2#4 100 · FAQ 3×45 = 135 · Kesimpulan 75 · CTA 20.

1. **H2 (question-format)**: "Apa Fungsi SKU bagi Bisnis?" — *covers*: jawaban langsung 40–60 kata berisi poin BARU (SKU bekerja sebagai kunci penghubung antar-proses — bukan sekadar label; satu kode yang sama dipakai gudang, kasir, dan laporan penjualan). **List dengan lead-in bold**, ringkas: **Identifikasi varian yang mirip** — membedakan hitam-M dari hitam-L saat *picking*; **Stock opname** — hitung fisik dicocokkan per kode, bukan per nama produk; **Analisis penjualan** — mengetahui varian mana yang laku dan mana yang *dead stock*; **Sinkronisasi lintas kanal** — satu kode acuan untuk marketplace, toko, dan gudang. TANPA mengulang definisi snippet; jangan melebar ke strategi omnichannel (milik artikel lain).
2. **H2 (question-format + tabel)**: "Apa Bedanya SKU, Barcode, dan GTIN?" — *covers*: jawaban langsung 40–60 kata dengan poin BARU dan paling sering salah dipahami: **SKU Anda buat sendiri; GTIN diterbitkan lewat GS1; barcode hanyalah cara mesin membaca**. Lalu **satu tabel** (kolom: Dimensi | SKU | Barcode/UPC | GTIN — baris: siapa yang membuat, sifat pemakaian internal/global, format, tujuan utama). Poin quotable: dua peritel bisa menjual produk yang sama dengan GTIN identik tetapi SKU berbeda-beda. Sitasi **GS1** di sini (lihat E-E-A-T). Sebutkan sekali kepanjangan: UPC = *Universal Product Code*, GTIN = *Global Trade Item Number*.
3. **H2 (praktis/terstruktur — CORE, supporting keyword)**: "Cara Membuat SKU: Anatomi Kode dan Aturan Penomoran" — *covers*: jawaban langsung 40–60 kata (poin baru: SKU yang baik dibaca dari umum ke spesifik, dan strukturnya ditetapkan **sekali di awal** karena mengubah skema setelah ribuan produk terdaftar jauh lebih mahal). Bagian ini memenuhi catatan tracker "contoh penomoran SKU":
   - **Anatomi — satu produk dibedah jadi segmen** (tabel kecil ATAU list bernomor, pilih tabel): contoh berlabel *ilustrasi* — kaos merek Nordika, kategori kaos polos, warna hitam, ukuran M → `NRD-KP-HTM-M`. Kolom: Segmen | Isi | Contoh (Merek → NRD · Kategori → KP · Warna → HTM · Ukuran → M). Tunjukkan **aritmetika perluasannya**: 1 model dengan 3 warna × 4 ukuran = **12 SKU**, semuanya berbagi awalan `NRD-KP-` sehingga tetap mudah disortir.
   - **Aturan penomoran (list ber-lead-in bold)**: **Urut umum → spesifik** (merek/kategori di depan, varian di belakang); **Panjang wajar** — umumnya 8–12 karakter, cukup informatif tanpa jadi kalimat (label sebagai praktik umum, BUKAN standar resmi); **Jangan diawali angka nol** — banyak spreadsheet dan alat impor memangkasnya diam-diam; **Hindari karakter kembar** — `0` vs `O` dan `1` vs `I` sumber salah ketik saat input manual; **Huruf kapital + tanda hubung**, tanpa spasi/karakter spesial yang merusak impor data; **Jangan pakai nomor dari pemasok/pabrikan** — nomor itu bisa berubah dan bukan milik Anda.
   - **Honest hedging (1–2 kalimat, pengganti H2 honest sesuai addendum §2)**: SKU bukan tempat menyimpan segalanya — memasukkan harga, jumlah stok, atau nama pemasok ke dalam kode membuatnya usang begitu data itu berubah. Kode yang terlalu deskriptif juga melambatkan orang yang harus mengetiknya ratusan kali sehari.
4. **H2 (pendek — lensa sistem + funnel)**: "SKU di Dalam Sistem: Ketika Spreadsheet Mulai Kewalahan" — *covers*: jawaban langsung 40–60 kata (poin baru: pada skala ribuan varian, penomoran manual gagal bukan karena aturannya salah, tetapi karena tidak ada yang menegakkannya — duplikat dan salah ketik masuk diam-diam). Lalu 1 paragraf *vendor-teach* netral: ERP ritel menangani ini lewat model **master data produk berjenjang** — di **SAP S/4HANA Retail**, produk induk (*generic article*) menurunkan varian secara otomatis, dan menurut dokumentasi SAP nomor varian standarnya dibentuk dari nomor artikel induk ditambah **sufiks urut tiga digit**. Artinya skema penomoran ditegakkan sistem, bukan disiplin manusia. (1–2 kalimat saja soal SAP; **TANPA menyebut Soltius di body**; jangan bahas modul ritel lain, integrasi POS, atau WMS.)
5. **FAQ (2–3 Q&A, jawaban 30–60 kata, tiap jawaban memuat 1 fakta/angka)** — ambil dari PAA:
   - "Apa perbedaan SKU dan barcode?" — SKU = kode internal yang Anda buat sendiri untuk manajemen stok; barcode = representasi visual yang dibaca mesin, umumnya mengkodekan GTIN yang diterbitkan lewat GS1 dan berlaku global. Dua peritel bisa memakai GTIN sama, tetapi SKU-nya berbeda.
   - "Berapa karakter SKU yang ideal?" — tidak ada standar resmi; praktik yang lazim 8–12 karakter — cukup memuat merek, kategori, dan varian tanpa menyulitkan input manual. Yang wajib: unik, konsisten formatnya, dan tidak diawali angka nol.
   - "Apakah SKU perlu didaftarkan seperti barcode?" — tidak. SKU sepenuhnya internal dan bebas Anda rancang. Yang perlu didaftarkan adalah GTIN/UPC lewat GS1 bila produk dijual di ritel modern atau marketplace yang mensyaratkannya. (Researcher konfirmasi persyaratan GS1 sebelum dikutip; bila tidak terverifikasi, longgarkan jadi "sejumlah kanal ritel mensyaratkannya".)
6. **## Kesimpulan** — ≤80 kata: SKU yang rapi bukan soal kreativitas kode, melainkan aturan yang ditetapkan sekali dan ditegakkan konsisten; skema manual punya batas skala. 1 positioning line Soltius (lihat anchor). CTA konsultatif.
7. **Soft website CTA (baris terakhir, terpisah)** — ajakan halus mengunjungi soltius.co.id; anchor produk: **SAP S/4HANA Retail** (per tracker).

(≥1 question-format: H2 #1 & #2 ✓; ≥1 praktis/terstruktur dengan tabel/list: H2 #2 tabel pembeda + H2 #3 tabel anatomi & list aturan ✓; H2 honest DIGANTI honest-hedging di H2 #3 — sesuai style_addendum §2; ≥4 angka spesifik inline: 8–12 karakter, 3 warna × 4 ukuran = 12 SKU, sufiks 3 digit SAP, panjang GTIN 8/12/13/14 digit bila terverifikasi ✓. **DILARANG menulis {IMAGE_NN} dalam bentuk apa pun** — tabel pembeda + tabel anatomi segmen menggantikan seluruh kebutuhan visual.)

## SAP / partner tech to teach (keyword tidak ada di `product_matrix.md` — framing universal tetap berlaku)

> `sku adalah` topik baru/ad-hoc. Mapping diturunkan dari tracker (CTA anchor: **SAP S/4HANA Retail**) + `company_profile.md` (Soltius punya solusi **Retail** dan industri vertikal Retail) + riset run ini. Aturan universal `product_matrix.md` berlaku penuh: **implements-not-builds**, ≤2 self-mention (override addendum §6), tanpa superlatif, tanpa spec karangan.

Konsep yang dijelaskan akurat & vendor-neutral:
- **SKU (stock keeping unit)** — kode identifikasi internal per varian yang dapat dijual/disimpan; dibuat dan dimiliki peritel sendiri.
- **GTIN (Global Trade Item Number) / UPC (Universal Product Code) / barcode** — identifier global yang diterbitkan lewat **GS1**, berbeda peran dari SKU. Netral vendor.
- **Master data produk berjenjang di SAP S/4HANA Retail** — *generic article* (produk induk) → *variant* (varian warna/ukuran, inilah SKU fisiknya) → *article number*. Penomoran varian standar = nomor artikel induk + **sufiks urut tiga digit**. Disebut RINGKAS di H2 #4 (1–2 kalimat) — jangan menjejalkan modul ritel lain (POS, pricing, listing) maupun WMS/EWM.

**Fakta yang WAJIB diverifikasi researcher (jangan diklaim tanpa sumber):**
- **Penomoran varian SAP** — "nomor artikel induk + sufiks urut tiga digit" dan istilah *generic article* / *variant*: konfirmasi via `learning.sap.com` / `help.sap.com` (SAP official, BUKAN blog reseller/community). Sumber yang sudah ditemukan run ini tercantum di E-E-A-T. Jangan menyebut nama transaksi, user exit, atau versi yang tidak diverifikasi.
- **Panjang GTIN (8/12/13/14 digit)** dan **siapa yang menerbitkan** — konfirmasi via GS1 official. Catatan run ini: `gs1.org` mengembalikan **HTTP 403** saat WebFetch; `gs1us.org` dapat diakses dan memuat pembedaan SKU vs UPC secara eksplisit. Bila panjang digit tidak terkonfirmasi dari sumber GS1, **hapus angkanya** dan cukup tulis "format numerik baku" — jangan mengarang.
- **Panjang SKU 8–12 karakter** — ini **praktik umum industri, BUKAN standar resmi**. Sumber yang beredar bervariasi (ada yang menulis 6–12, ada yang ≤20). WAJIB dilabeli sebagai praktik umum/rentang lazim; JANGAN menuliskannya seolah aturan baku. Bila researcher menemukan sumber kuat, sebutkan; bila tidak, tetap gunakan hedging.
- **Klaim "spreadsheet memangkas angka nol di depan"** — perilaku yang lazim diketahui; tulis sebagai alasan praktis, jangan dibungkus statistik karangan.
- **Persyaratan pendaftaran GTIN untuk marketplace/ritel modern Indonesia** (dipakai di FAQ #3) — verifikasi; bila tidak ada sumber jelas, longgarkan kalimatnya.
- **Contoh kode SKU** (`NRD-KP-HTM-M`, 3 warna × 4 ukuran = 12 SKU) adalah **ilustrasi buatan** — wajib dilabeli demikian. Jangan memakai merek nyata (Nike, Tropicana) seperti pesaing, agar tidak menyiratkan skema penomoran resmi merek tersebut.

## Soltius anchor (BATCH OVERRIDE: maks 2 self-mention)

- **1 positioning line di Kesimpulan**: Soltius — SAP Platinum Partner melalui United VARs, berpengalaman sejak 1998 — **mengimplementasikan dan mendampingi** solusi ritel SAP seperti SAP S/4HANA Retail, termasuk penataan master data produk. (Framing: implements/migrates/supports, **NEVER builds/owns**; tanpa superlatif; pilih SATU kredensial, jangan menumpuk.)
- **1 soft website CTA** (baris terakhir): ajakan konsultasi/mengunjungi soltius.co.id — anchor funnel: **SAP S/4HANA Retail** (per tracker).
- **TANPA aside Soltius di tengah body** (style_addendum §6). Sentuhan praktisi di body boleh TANPA nama Soltius (mis. "di lapangan, skema SKU paling sering berantakan bukan saat dirancang, melainkan saat orang kedua mulai menambahkan produk dengan aturannya sendiri").

## Internal links to place (BATCH OVERRIDE: 2 SAJA — 1 hub + 1 cousin, inline natural, tanpa "BACA JUGA")

> `landing_page` kosong di sheet → hub dipilih strategist (keputusan standing sejak Juni). Kedua URL **sudah diverifikasi resolve/200 OK via WebFetch run ini (2026-07-17)**. Penulis tetap cek ulang saat menulis.

- **Hub (halaman soltius.co.id paling relevan)**: `https://www.soltius.co.id/id/solutions-by-products/retail-produk` — anchor natural: "solusi retail" / "solusi ritel" — *why*: halaman solusi Retail Soltius adalah hub yang paling dekat dengan topik (SKU = master data inti operasi ritel) dan **sejalan dengan CTA anchor SAP S/4HANA Retail** per tracker. Preseden: hub yang sama dipakai `omnichannel-retail-c01` (2026-06) dan lolos QC. Tempatkan di paruh akhir/dekat H2 #4 atau CTA. *Catatan untuk writer:* halaman ini menampilkan **iVend Retail** — bila disebut, framing sebagai solusi yang **diimplementasikan/didukung** Soltius, bukan produk Soltius. Paling aman: cukup anchor "solusi retail" tanpa menyebut nama produk pihak ketiga.
- **Cousin**: `https://www.soltius.co.id/id/blog/konsep-warehouse-management-system-yang-wajib-anda-tahu` — anchor natural: "manajemen gudang" / "warehouse management system" — *why*: SKU adalah unit terkecil yang dihitung dan diambil di gudang; akurasi *picking* dan stok opname bertumpu pada kode yang rapi. Tautkan di H2 #1 saat membahas fungsi *picking*/stock opname. Preseden: dipakai `omnichannel-retail-c01` + `safety-stock-c01`, lolos editor. *Catatan:* halaman ini sedang di-REWRITE di batch yang sama (row 4, `wms-konsep-c01`) tetapi **URL/slug dipertahankan** — tautan tetap valid.

(2 tautan, keduanya existing & natural inline. Tidak ada own-hub blog karena topik baru — dicatat sesuai mode conditional.)

## E-E-A-T signals to embed

- **Angka/fakta spesifik** (≥4 angka inline per addendum §4): panjang SKU lazim **8–12 karakter** (berlabel praktik umum, bukan standar); ilustrasi **3 warna × 4 ukuran = 12 SKU** dari 1 produk induk; **sufiks urut 3 digit** pada penomoran varian SAP; panjang **GTIN 8/12/13/14 digit** (HANYA bila terkonfirmasi dari GS1 — lihat catatan verifikasi). JANGAN mengarang benchmark seperti "rata-rata bisnis ritel mengelola X SKU" tanpa sumber.
- **Authoritative sources to cite (≥2 — sitasi final 1–2 inline di artikel):**
  1. **GS1 US — "What is a UPC Code? | Guide to UPCs"** — `https://www.gs1us.org/upcs-barcodes-prefixes/guide-to-upcs` — otoritas standar identifikasi produk global. **Sudah diverifikasi run ini (WebFetch, 200 OK)**; halaman menyatakan secara eksplisit bahwa GS1 adalah otoritas global untuk identifikasi unik produk, bahwa GTIN adalah nomor yang dikodekan pada barcode, dan bahwa **SKU bersifat internal & dibuat oleh brand/peritel sendiri sedangkan UPC berlaku global**. Pakai di H2 #2 (tabel pembeda). *Catatan: `gs1.org` memblokir WebFetch (403) — gunakan `gs1us.org`, atau GS1 Indonesia bila researcher menemukan halaman yang dapat diakses.*
  2. **SAP Learning — "Creating a Generic Article" (Configuring Master Data in SAP S/4HANA Cloud Private Edition — Retail)** — `https://learning.sap.com/courses/configuring-master-data-in-sap-s-4hana-cloud-private-edition-retail/creating-a-generic-article-1-1` — SAP official. **Sudah diverifikasi run ini (WebFetch, 200 OK)**; halaman menyatakan varian *generic article* secara standar dinomori berdasarkan nomor generic article ditambah sufiks urut tiga digit. Pakai di H2 #4.
  3. (Opsional/cadangan, bila salah satu di atas tidak dapat diakses saat penulisan) **SAP Help Portal — "Article Number"** — `https://help.sap.com/docs/SAP_S4HANA_ON-PREMISE/9905622a5c1f49ba84e9076fc83a9c2c/4885c353fad0b44ce10000000a174cb4.html`. *Catatan: WebFetch run ini hanya mengembalikan judul halaman (konten dirender JavaScript) — researcher perlu membukanya langsung untuk mengutip.*
- **First-party Soltius angle**: pengalaman implementasi solusi ritel SAP dan penataan master data produk (Retail termasuk salah satu industri vertikal Soltius per `company_profile.md`) — dipakai di positioning line Kesimpulan. Tanpa nama klien atau angka proyek karangan.

## AI Overview & GEO optimization (seo_playbook §2a, dipadatkan per addendum §5)

- **Definition snippet blockquote** setelah lead — "Ringkasnya:" 40–60 kata, arah: *"Ringkasnya: SKU (stock keeping unit) adalah kode unik alfanumerik yang dibuat sebuah bisnis untuk mengidentifikasi setiap varian produk yang dapat dijual dan disimpan — lengkap dengan atribut seperti merek, kategori, warna, dan ukuran. Berbeda dari barcode yang berlaku global, SKU bersifat internal dan sepenuhnya dirancang oleh perusahaan yang memakainya."* (writer boleh poles, jaga 40–60 kata. **INI satu-satunya definisi** — body dilarang menyatakannya ulang dengan kata lain, termasuk di jawaban langsung tiap H2.)
- **Jawaban langsung 40–60 kata segera setelah TIAP H2** berisi poin baru milik H2 itu (SKU sebagai kunci penghubung antar-proses; siapa menerbitkan SKU/GTIN/barcode; urutan umum→spesifik & biaya mengubah skema; mengapa penomoran manual gagal pada skala), **BUKAN** parafrase snippet.
- **Satu paragraf = satu poin quotable & verifiable.**
- **Entity list** (nama penuh saat sebutan pertama, akronim di-expand sekali): SKU (stock keeping unit), barcode, UPC (Universal Product Code), GTIN (Global Trade Item Number), GS1, stock opname, master data produk, generic article, variant, article number, SAP S/4HANA Retail.
- **Format match**: tabel untuk pembeda SKU/barcode/GTIN (H2 #2); tabel segmen + list ber-lead-in-bold untuk aturan (H2 #3); prosa untuk lensa sistem (H2 #4). Tabel diutamakan — jangan paksa elemen berlebih hingga melampaui 1000 kata.
- **FAQ**: 2–3 Q&A, parseable FAQPage schema; `dateModified` akurat di meta block.

## Data captured this run

- **Source(s)**: WebSearch (Google ID + EN, 2026-07-17, 4 kueri) — peta pesaing "sku adalah", PAA turunan, aturan penomoran SKU, pembedaan SKU/barcode/GTIN. WebFetch: `learning.sap.com` (✅ 200, fakta sufiks 3 digit), `gs1us.org` (✅ 200, fakta SKU internal vs UPC global), `soltius.co.id/id/solutions-by-products/retail-produk` (✅ 200), `soltius.co.id/id/blog/konsep-warehouse-management-system-yang-wajib-anda-tahu` (✅ 200), `gs1.org` (❌ 403), `help.sap.com` (⚠️ hanya judul — JS-rendered). WebFetch SERP Google **terblokir** (halaman error/consent) — fallback WebSearch sesuai SOP `CLAUDE.md` §11.
- **Apr 2026 rank** (from report): `n/a` — keyword di luar 6 keyword `seo_report_apr2026.md` (topik conditional/ad-hoc baru).
- **Volume / KD / trend**: `n/a (Ahrefs not connected)`. Sinyal kualitatif: SERP ID sangat padat (10+ hasil dari Mekari Jurnal, PRIEDS, Kompas, Komerce, Folio POS, MAS Software, EKRUT, Majoo, SPIL, MuatMuat) → volume definisional jelas ada; **semua berformat "definisi + manfaat + contoh acak" untuk UMKM** → beatable dengan aturan penomoran eksekutabel + sitasi GS1 + lensa sistem enterprise + GEO.
- **SERP features present**: explainer definisi mendominasi; PAA + AI Overview sangat mungkin aktif untuk kueri "…adalah" ini (tidak terkonfirmasi langsung — scrape terblokir).
- **cache_source**: `n/a` — mode conditional `/single-article`; riset ditangkap inline di brief ini (tanpa cache per-keyword bulanan).

## Notes for SME researcher

- **Dossier RINGKAS saja** — artikel target 900 kata, 4 H2 ramping. Jangan kirim material untuk 1.650 kata.
- Konfirmasi **penomoran varian SAP** (*generic article* → *variant*, sufiks urut tiga digit) dari `learning.sap.com`/`help.sap.com` — SAP official, bukan community blog. Jangan mengarang nama transaksi/user exit/versi.
- Konfirmasi dari **GS1 official**: siapa menerbitkan GTIN, panjang digit GTIN, dan pembedaan eksplisit SKU (internal) vs UPC/GTIN (global). `gs1.org` memblokir akses otomatis (403) — coba `gs1us.org` (terbukti bisa) atau GS1 Indonesia. **Bila panjang digit tidak terkonfirmasi, drop angkanya.**
- **Panjang SKU 8–12 karakter**: cari sumber terbaik yang ada, tetapi **tetap dilabeli praktik umum, bukan standar**. Sumber yang beredar tidak konsisten (6–12, ~8, ≤20) — kejujuran ini justru pembeda kita dari SERP.
- Verifikasi persyaratan **pendaftaran GTIN untuk marketplace/ritel modern Indonesia** (FAQ #3). Bila tidak ketemu sumber kredibel, longgarkan jadi "sejumlah kanal ritel mensyaratkan".
- **Boundary dedup**: JANGAN menyediakan material tentang strategi omnichannel, omnichannel vs multichannel, BOPIS, integrasi POS–gudang–akuntansi (milik `omnichannel-retail-c01` 2026-06); JANGAN menyediakan material tentang kapan butuh WMS, ambang jumlah SKU, slotting/bin (milik cluster `warehouse-management-system`); JANGAN rumus persediaan (milik `safety-stock-c01`, `reorder-point-c01`, `inventory-turnover-c01`).
- Contoh kode SKU harus **buatan & berlabel ilustrasi** — jangan pakai merek nyata.
- Cek 2 URL internal (`solutions-by-products/retail-produk` + `blog/konsep-warehouse-management-system-yang-wajib-anda-tahu`) tetap 200/OK saat penulisan.

## Notes for future strategist runs

Artikel ini SENGAJA TIDAK mencakup (untuk menghindari kanibalisasi + disisakan untuk artikel lain):
- **SKU rationalization / SKU proliferation** (memangkas jumlah SKU, analisis *long-tail* portofolio produk) — kandidat artikel decision-stage tersendiri.
- **ABC analysis / segmentasi SKU berdasarkan kontribusi** — disebut maksimal 1 frasa; layak artikel sendiri di cluster persediaan.
- **Cara mendaftarkan barcode/GTIN lewat GS1 Indonesia** (prosedur, biaya, prefiks perusahaan) — kandidat artikel *how-to* terpisah dengan riset regulasi tersendiri.
- **Master data governance / data cleansing produk** (siapa pemilik data, alur approval, dedup master data) — kandidat artikel enterprise; brief ini hanya menyinggung 1 kalimat di H2 #4.
- **SAP S/4HANA Retail sebagai produk** (modul, *listing*, *pricing*, deployment) — brief ini hanya memakainya sebagai contoh model penomoran varian, tidak membedah produknya.
- **Serial number vs batch number vs SKU** (tingkat granularitas pelacakan) — pembeda yang menarik, sengaja ditahan.

## Format overrides (batch conditional 2026-08)

Restating dari `conditional/2026-08/style_addendum.md` — **MENGIKAT** untuk researcher, writer, editor, validator:

- **Panjang: 800–1000 kata (target ~900)** — hitungan body H1 s/d CTA, di luar frontmatter; `target_word_count: 900` di frontmatter, isi `word_count` aktual setelah menulis. <800 terlalu tipis; >1000 gagal (pangkas dengan membuang kalimat pengantar/transisi kosong dan contoh redundan, BUKAN memampatkan semua kalimat jadi telegram — ritme tetap bervariasi, paragraf 1–4 kalimat).
- **TANPA image placeholder** — dilarang menulis `{IMAGE_NN}` dalam bentuk apa pun; stage image-planner DILEWATI; tidak ada `images.json`. Konsep visual (perbandingan SKU/barcode/GTIN, anatomi segmen kode) disampaikan lewat **tabel/list**.
- **FAQ: 2–3 Q&A** (bukan 5–8); jawaban 30–60 kata, tiap jawaban memuat 1 fakta/angka; ambil dari PAA di atas.
- **Internal link: TEPAT 2** — 1 hub (`solutions-by-products/retail-produk`) + 1 cousin (`blog/konsep-warehouse-management-system-yang-wajib-anda-tahu`), inline natural, tanpa "BACA JUGA". Sitasi eksternal otoritatif 1–2 inline (GS1 + SAP official).
- **Definisi HANYA SEKALI** — di definition snippet "Ringkasnya:" (40–60 kata) setelah lead. Body/H2 **DILARANG** mengulang definisi snippet dengan kata lain, termasuk di jawaban langsung 40–60 kata setelah tiap H2. **Tidak ada H2 definitional "Apa Itu SKU?"** — tidak ada info baru yang membenarkannya.
- **Prosa padat on-point** — tanpa paragraf roadmap, tanpa transisi kosong, tanpa pembuka klise; em-dash ≤2; tanpa adjektiva hype (anti-AI `style_guide.md` §5 berlaku penuh).
- **Lead ≤80 kata** (pain konkret + keyword `sku adalah` + janji artikel).
- **Kesimpulan ≤80 kata** + 1 positioning line Soltius; **soft website CTA (soltius.co.id) = baris paling akhir**, terpisah dari Kesimpulan. **Maks 2 mention Soltius total.**
- **3–4 H2** (≥1 question-format; ≥1 praktis/terstruktur dengan tabel/list); **≥4 angka spesifik inline**; jawaban langsung 40–60 kata setelah tiap H2 berisi poin BARU milik H2 itu.
- **Framing Soltius** (`style_guide.md` §11): implementator/pendamping SAP — **implements, migrates, supports — NEVER builds/owns**. Disiplin sitasi §10: JANGAN mengarang angka, pasal, harga, atau spec SAP.
