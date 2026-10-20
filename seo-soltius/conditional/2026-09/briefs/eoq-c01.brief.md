---
keyword: "economic order quantity"
keyword_slug: "economic-order-quantity"
landing_page: ""   # sheet kosong → hub dipilih strategist (keputusan standing sejak Juni). Hub = halaman blog Supply Chain Management (paling relevan untuk topik persediaan; sejalan CTA anchor SAP IBP). Diverifikasi 200 OK run ini.
month: "2026-09"
brief_id: "eoq-c01"
angle: "eoq-rumus-2ds-h-contoh-trade-off-manfaat-asumsi"
angle_hash: "sha1:a42e9abb7fa45923feffbde6757385159b6dd585"
search_intent: "informational"   # definisional + how-to/rumus (Pengertian, Rumus, Manfaat) — intent informasional-praktis
target_word_count: 900
strategist_run_date: "2026-08-31"
mode: "conditional-given-angle"
batch: "conditional-2026-09 (style_addendum.md WAJIB — 800–1000 kata, tanpa image placeholder, FAQ 2–3, 2 internal link, definisi hanya sekali di snippet)"
dedup_result: "DISTINCT — Jaccard tertinggi ~0.08 vs reorder-point-c01 (2026-08); tidak ada tabrakan angle_hash. Resolusi tracker diterapkan: rumus EOQ √(2DS/H) + contoh hitung + trade-off biaya pesan vs simpan + asumsi/keterbatasan. reorder-point-c01 SUDAH mengontraskan EOQ (kapan vs berapa) TAPI TIDAK menurunkan rumusnya — dan secara eksplisit MENCADANGKAN rumus EOQ untuk artikel ini (lihat 'Notes for future strategist runs'-nya). ROP & safety stock hanya disinggung."
---

# Economic Order Quantity (EOQ): Pengertian, Rumus, dan Manfaatnya

> Working Title diberikan user — substansi dipertahankan apa adanya. H1 memuat entitas inti (Economic Order Quantity/EOQ) di 30 karakter pertama dan menjanjikan tiga hal: Pengertian (→ snippet), Rumus (→ H2 #1), Manfaat (→ H2 #2). Tidak ada perubahan angle.
>
> **H1 (artikel):** Economic Order Quantity (EOQ): Pengertian, Rumus, dan Manfaatnya *(58 char)*
> **Meta title (≤60):** Economic Order Quantity (EOQ): Rumus & Manfaatnya *(50 char)*
> **Meta description (140–160):** Economic order quantity (EOQ) adalah kuantitas pesan paling ekonomis. Pahami rumus EOQ √(2DS/H), contoh perhitungan, trade-off biaya, dan asumsinya. *(150 char)*
> **Slug (≤60):** economic-order-quantity-eoq-rumus-manfaat *(41 char)*

## Hook hypothesis

Staf procurement dan manajer persediaan menghadapi satu keputusan berulang yang jarang dihitung: sekali pesan, berapa banyak? Pesan terlalu sering, biaya administrasi PO dan ongkos kirim membengkak. Pesan terlalu banyak sekaligus, modal terkubur di gudang dan biaya simpan naik. Kebanyakan menebak dari kebiasaan ("pesan sebulan sekali") tanpa pernah tahu titik biaya terendahnya. EOQ menjawab pertanyaan itu dengan aritmetika, bukan kebiasaan.

SERP Bahasa Indonesia untuk "economic order quantity" / "rumus EOQ" padat oleh blog accounting-SaaS (Mekari Jurnal, Kledo, Accurate, Zahir, Ukirama, HashMicro, kumparan, szetoaccurate, logos3pl) dengan pola nyaris identik: definisi → satu rumus → satu contoh angka → daftar manfaat generik. Tiga celah menganga. Pertama, **trade-off-nya tidak pernah ditunjukkan sebagai angka** — semua menyebut "menyeimbangkan biaya pesan dan simpan" tetapi tak satu pun memperlihatkan tabel total biaya di beberapa kuantitas sehingga pembaca melihat *mengapa* satu titik paling murah (kurva EOQ yang diminta sheet, disajikan via tabel). Kedua, **asumsi & keterbatasan EOQ nyaris tak dibahas** — padahal permintaan konstan, tanpa diskon kuantitas, dan tanpa stockout adalah syarat yang jarang benar di lapangan; menyembunyikan ini membuat pembaca salah pakai. Ketiga, **EOQ dipisah dari ROP secara tegas** (berapa vs kapan) belum jadi framing utama. Soltius kredibel di titik ini bukan sebagai pembuat software, melainkan sebagai mitra implementasi SAP yang mendampingi perencanaan persediaan di atas SAP IBP — tempat EOQ hidup sebagai prosedur *lot-sizing* di sistem, bukan angka di spreadsheet. CTA tetap soft, setelah Kesimpulan.

## Primary keyword

`economic order quantity`

Supporting keyword (given): `rumus eoq`

(Pola pencari Indonesia: istilah Inggris ("economic order quantity", "EOQ") + penjelasan Bahasa Indonesia. Intent definisional ("apa itu EOQ", "EOQ adalah") bercampur how-to/rumus ("rumus EOQ", "cara menghitung EOQ"). Judul yang diberikan sudah memuat ketiganya: Pengertian + Rumus + Manfaat. Artikel ini melengkapi cluster persediaan: `lead-time-c01` (2026-06) memegang lead time, `safety-stock-c01` (2026-07) memegang buffer, `reorder-point-c01` (2026-08) memegang titik pemicu/kapan memesan, `inventory-turnover-c01` (2026-08) memegang rasio perputaran — **kuantitas pesan ekonomis / berapa dipesan belum dimiliki artikel mana pun sebagai entitas utamanya**. Rumus EOQ penuh (√2DS/H) belum pernah diturunkan di cluster; `reorder-point-c01` bahkan mencadangkannya secara eksplisit untuk artikel ini.)

## Secondary / LSI keywords (8–12)

- rumus EOQ (economic order quantity)
- kuantitas pemesanan ekonomis / jumlah pesanan optimal
- biaya pemesanan (ordering/setup cost)
- biaya penyimpanan (holding/carrying cost)
- permintaan tahunan (annual demand)
- total biaya persediaan
- manajemen persediaan (inventory management)
- reorder point (ROP)
- safety stock / stok pengaman
- lot sizing (penentuan ukuran lot)
- model Harris-Wilson / Wilson formula
- SAP Integrated Business Planning (SAP IBP)

## Search intent & SERP feature targets

- **Stage**: awareness (definisional + how-to/rumus intent; manajer persediaan, staf procurement, mahasiswa/pelaku UMKM manufaktur–distribusi)
- **Format**: definition snippet + rumus 1 baris + contoh perhitungan bertahap + **tabel total biaya di 3 kuantitas (kurva EOQ via tabel)** + list asumsi/keterbatasan + FAQ
- **Surface targets**:
  - [x] AI Overview (Google SGE) / kutipan AI-engine (Perplexity, ChatGPT) — definisi 40–60 kata + rumus + tabel biaya quotable
  - [x] Featured Snippet (definisi + rumus + tabel)
  - [x] People Also Ask
  - [ ] Image Pack (skip — B2B operasi/persediaan)

## SERP landscape (live scrape today)

> **Catatan metode:** WebFetch langsung ke `google.com/search?q=...&hl=id&gl=id` konsisten **terblokir** di seluruh run conditional (halaman consent/error, bukan SERP) — degradasi anggun ke **WebSearch** sesuai `CLAUDE.md` §11. Daftar di bawah dari WebSearch Bahasa Indonesia + Inggris (2026-08-31, 5 kueri), urutan ≈ relevansi, bukan ranking pasti. Volume/KD: `n/a (Ahrefs not connected)`.

**Top competing pages (WebSearch ID/EN):**
1. `https://www.jurnal.id/id/blog/2018-cara-menghitung-persediaan-melalui-economic-order-quantity/` — Mekari Jurnal — *angle*: "Cara Menghitung EOQ: Rumus & Contoh"; pesaing terdekat, funnel software akuntansi.
2. `https://kledo.com/blog/rumus-economic-order-quantity/` — Kledo — *angle*: "Rumus EOQ dan Contoh Kasusnya"; rumus + 1 contoh, funnel akuntansi UMKM.
3. `https://accurate.id/marketing-manajemen/economic-order-quantity-eoq-adalah/` — Accurate — *angle*: "Rumus & Cara Hitung"; standar SME, satu rumus.
4. `https://zahiraccounting.com/id/blog/economic-order-quantity-adalah-eoq/` & `https://www.zahironline.com/economic-order-quantity-adalah/` — Zahir — *angle*: "EOQ: Rumus dan Contoh"; definisi + rumus + manfaat generik.
5. `https://ukirama.com/blogs/cara-dan-contoh-menghitung-economic-order-quantity-eoq-untuk-menurunkan-biaya-produksi` — Ukirama — *angle*: EOQ untuk menurunkan biaya produksi; lensa ERP ringan.
6. `https://www.hashmicro.com/id/blog/pengertian-reorder-point/` (+ `/rop-roq-min-max/`) — HashMicro — *angle*: menyandingkan ROP/ROQ; satu-satunya yang menautkan EOQ ke ROP, tetapi sebaris.
7. `https://www.logos3pl.com/id/glossary/economic-order-quantity/` — Logos 3PL — *angle*: glossary logistik; definisi + pentingnya.
8. `https://www.szetoaccurate.com/economic-order-quantity/` — Szeto/Accurate — *angle*: EOQ dalam manajemen persediaan; varian rumus √(2RS/PI).

**Gaps to exploit** (yang TIDAK dicakup baik oleh top hasil — ruang menang kita):
- **Trade-off tidak ditunjukkan sebagai angka.** Semua menyebut "menyeimbangkan biaya pesan dan simpan" secara verbal; nyaris tak ada yang menyajikan **tabel total biaya di beberapa kuantitas** yang memperlihatkan biaya turun lalu naik (kurva EOQ). Ini pemikat kutipan AI Overview terkuat dan memenuhi permintaan sheet ("kurva EOQ via teks/tabel").
- **Titik biaya-pesan = biaya-simpan di EOQ tak dijelaskan.** Fakta matematis bahwa pada EOQ biaya pemesanan tahunan = biaya penyimpanan tahunan adalah "aha" yang jarang ditunjukkan — konten original yang dihargai HCU.
- **Asumsi & keterbatasan hampir absen.** Kompetitor menjual EOQ sebagai solusi; sedikit yang jujur bahwa EOQ mengasumsikan permintaan konstan/diketahui, tanpa diskon kuantitas, penerimaan sekaligus, tanpa stockout — syarat yang sering tidak benar. Ini trust-builder + pembeda.
- **Asal usul & nama baku kabur.** Tak satu pun menyebut model dikembangkan Ford W. Harris (1913) dan dianalisis R. H. Wilson (kerap disebut *Wilson formula* / model Harris-Wilson) — anchor E-E-A-T yang murah dan jujur.
- **EOQ vs ROP tegas.** EOQ = berapa dipesan; ROP = kapan memesan. Kompetitor mencampur; kita pisahkan dan tautkan ROP sebagai cousin (glue cluster diminta tracker).
- **Lensa sistem/enterprise absen.** Tak ada yang menjelaskan EOQ sebagai prosedur *optimum lot-sizing* di ERP yang dihitung ulang sistem, bukan sekali di spreadsheet. Fakta SAP = jembatan funnel jujur.

**People Also Ask / kueri turunan** (dari WebSearch ID — mewakili PAA; SERP scrape terblokir; writer wajib jawab ≥3 sebagai H2/FAQ):
1. Apa itu economic order quantity (EOQ)?
2. Bagaimana rumus EOQ dan cara menghitungnya?
3. Apa saja komponen biaya dalam EOQ (biaya pesan vs biaya simpan)?
4. Apa manfaat/kelebihan metode EOQ?
5. Apa asumsi dan kekurangan EOQ?
6. Apa perbedaan EOQ dan reorder point (ROP)?
7. Kapan EOQ sebaiknya digunakan?

## Distinct angle vs. history

- **Closest prior article in this cluster**: `reorder-point-c01` (conditional 2026-08, "Reorder Point (ROP): Rumus dan Contoh Perhitungannya"). Tetangga berikutnya: `safety-stock-c01` (2026-07), `inventory-turnover-c01` (2026-08), `lead-time-c01` (2026-06).
- **How this brief differs**: `reorder-point-c01` menjawab **kapan** memesan (hasil = level stok pemicu) dan sudah memuat **satu tabel pembeda ROP vs EOQ** yang menyebut EOQ menjawab "berapa banyak" — **tetapi tidak menurunkan rumus EOQ sama sekali** (dibatasi keras di brief-nya: *"JANGAN menurunkan rumus EOQ (√(2DS/H)); maksimal 1–2 kalimat + baris tabel"*) dan secara eksplisit **mencadangkan** rumus EOQ untuk artikel tersendiri (*Notes for future strategist runs*-nya: *"EOQ dan rumusnya … kandidat artikel tersendiri … sudah dicadangkan safety-stock-c01 & mrp-c01, dan tracker row 8 memintanya"*). Artikel ini adalah **kebalikan pertanyaannya**: **berapa** yang dipesan (hasil = kuantitas per PO), dengan rumus √(2DS/H) diturunkan penuh, contoh hitung, tabel trade-off biaya (kurva EOQ), dan asumsi/keterbatasan. **Boundary tegas untuk writer**: ROP di sini muncul HANYA sebagai kontras satu paragraf/baris (kapan vs berapa) + tautan cousin — JANGAN menurunkan rumus ROP, komposisi replenishment lead time, jebakan satuan, atau reorder point planning manual/otomatis (semua milik `reorder-point-c01`). Safety stock hanya disinggung sebagai konsep cluster — JANGAN menurunkan rumusnya (milik `safety-stock-c01`). Rasio perputaran TIDAK dibahas (milik `inventory-turnover-c01`).
- **Subtopic overlap (Jaccard) with closest prior**: subtopik brief ini = {definisi EOQ, EOQ menjawab berapa dipesan, rumus EOQ √(2DS/H), tiga variabel D/S/H, contoh perhitungan EOQ, asal usul Harris-Wilson 1913, trade-off biaya pesan vs simpan, tabel total biaya (kurva EOQ), biaya pesan = biaya simpan di EOQ, manfaat EOQ (total biaya minimum), asumsi EOQ, keterbatasan EOQ, EOQ vs ROP, EOQ sebagai optimum lot-sizing di ERP, SAP IBP} (15) vs subtopik `reorder-point-c01` = {definisi ROP, ROP pemicu pemesanan, rumus ROP dasar, rumus ROP + safety stock, kriteria memilih rumus, komposisi replenishment lead time, contoh perhitungan ROP, jebakan satuan, ROP vs EOQ, ROP bukan angka statis, reorder point planning manual vs otomatis SAP, SAP IBP} (12). Irisan efektif = {EOQ↔ROP kontras (kapan vs berapa), SAP IBP} ≈ 2 dari union ~25 → **Jaccard ≈ 0.08 (< 0.4 ✓)**. Inti EOQ (rumus √2DS/H, trade-off berangka, kurva biaya, asumsi) **tidak ada sama sekali** di `reorder-point-c01`.
- **Cek permukaan dedup lain**: vs `safety-stock-c01` (2026-07) → irisan {manajemen persediaan, SAP IBP} ≈ 2 / union ~23 → **≈ 0.07**; artikel itu tentang buffer & service level, bukan kuantitas pesan. Vs `inventory-turnover-c01` (2026-08) ≈ 0.04 — rasio perputaran/HPP, bukan kuantitas pesan. Vs `lead-time-c01` (2026-06) ≈ 0.05 — waktu tunggu, bukan kuantitas. Vs cluster keuangan (`markup-vs-margin-c01`, `laporan-arus-kas-c01`, dll) ≈ 0.02 — penetapan harga/laporan, bukan persediaan. Vs `articles_history/index.json` (cluster BI/DW/manufaktur/ERP-cloud/low-code/clean-core; 50+ entri) → **tidak ada artikel rumus persediaan sama sekali**; grep "EOQ"/"economic order" di index = 0 match. Vs `monthly_runs/*` → tidak ada yang menurunkan EOQ. **angle_hash `sha1:a42e9abb7fa45923feffbde6757385159b6dd585` tidak berbenturan** dengan hash mana pun di `articles_history/` + `conditional/2026-06..09` + `monthly_runs/`. **Hasil dedup: DISTINCT — aman ditulis, resolusi tracker diterapkan.**

## Article skeleton — H2s the writer should expand (BATCH OVERRIDE: 3–4 H2 SAJA)

> Lead ≤80 kata (pain konkret + keyword + janji artikel, TANPA roadmap) → definition snippet blockquote "Ringkasnya:" 40–60 kata → body 4 H2 ramping → FAQ 2–3 → Kesimpulan ≤80 kata → soft CTA baris terakhir. **DILARANG H2 definitional "Apa Itu EOQ?"** — janji "Pengertian" di judul ditunaikan snippet; akronim EOQ cukup di-expand sekali di snippet. Asal usul (Harris 1913/Wilson) BUKAN alasan untuk H2 definitional tersendiri — cukup 1 kalimat E-E-A-T di dalam H2 #1. Definisi muncul SEKALI di snippet.
>
> **Budget kata (panduan, total ≈ 955):** lead 75 · snippet 50 · H2#1 205 · H2#2 195 · H2#3 150 · H2#4 95 · FAQ 3×45 = 135 · Kesimpulan 70 · CTA 20. (Bila mepet 1000, pangkas ke FAQ 2 dan/atau H2#4.)

1. **H2 (praktis/terstruktur — CORE: rumus + contoh, basis diferensiasi, supporting keyword `rumus eoq`):** "Rumus EOQ dan Contoh Perhitungannya" — *covers*: jawaban langsung 40–60 kata berisi poin BARU (bukan ulang definisi): rumus EOQ hanya membutuhkan **tiga variabel** — permintaan tahunan, biaya per pesan, dan biaya simpan per unit per tahun; harga beli per unit dan lead time **tidak masuk** rumus dasar. Anchor E-E-A-T 1 kalimat: model ini dikembangkan **Ford W. Harris (1913)** dan dipopulerkan **R. H. Wilson** (kerap disebut *Wilson formula*). Sajikan rumus 1 baris, citation-ready:
   - **EOQ = √(2DS ÷ H)** — dengan **D** = permintaan tahunan (unit), **S** = biaya per pesanan, **H** = biaya penyimpanan per unit per tahun.
   Lalu **satu contoh angka** berlabel *ilustrasi*, konsisten baris-per-baris:
   - **D = 5.000 unit/tahun**, **S = Rp100.000 per pesanan**, **H = Rp1.000 per unit/tahun**.
   - EOQ = √(2 × 5.000 × 100.000 ÷ 1.000) = √1.000.000 = **1.000 unit** per pesanan.
   - Konsekuensi quotable: pada 5.000 unit/tahun, itu berarti **5 kali pesan setahun** (5.000 ÷ 1.000), atau ±setiap 73 hari. Sajikan langkah sebagai **list bernomor** (cocok HowTo/featured snippet). ≥1 elemen terstruktur terpenuhi di sini.
2. **H2 (question-format + tabel — GAP UTAMA + Manfaat):** "Mengapa EOQ Menghasilkan Total Biaya Terendah?" — *covers*: jawaban langsung 40–60 kata (poin baru): karena dua biaya bergerak **berlawanan arah** terhadap ukuran pesanan — makin besar sekali pesan, biaya pemesanan tahunan **turun** (lebih jarang pesan) tetapi biaya penyimpanan **naik** (rata-rata stok lebih tinggi); EOQ adalah titik keduanya **bertemu**, tempat total biaya paling rendah. Inilah **manfaat** EOQ. Lalu **tabel total biaya** (kurva EOQ via tabel — extractable, quotable), memakai angka H2 #1:

   | Kuantitas pesan (Q) | Frekuensi (D÷Q) | Biaya pemesanan (D÷Q × S) | Persediaan rata-rata (Q÷2) | Biaya penyimpanan (Q÷2 × H) | Total biaya |
   |---|---|---|---|---|---|
   | 500 | 10× | Rp1.000.000 | 250 | Rp250.000 | Rp1.250.000 |
   | **1.000 (EOQ)** | **5×** | **Rp500.000** | **500** | **Rp500.000** | **Rp1.000.000** |
   | 2.000 | 2,5× | Rp250.000 | 1.000 | Rp1.000.000 | Rp1.250.000 |

   Poin quotable: pada EOQ, **biaya pemesanan = biaya penyimpanan = Rp500.000**, dan total biaya (Rp1.000.000) lebih rendah dari kuantitas di kiri maupun kanannya (keduanya Rp1.250.000) — itulah dasar bentuk "kurva" biaya berbentuk U. (Angka harus konsisten; researcher hitung ulang tiap sel.)
3. **H2 (honest/counter-conventional — asumsi & keterbatasan, trust-builder):** "Asumsi dan Keterbatasan EOQ yang Harus Diketahui" — *covers*: jawaban langsung 40–60 kata (poin baru): rumus EOQ bersih karena bersandar pada **asumsi yang jarang benar utuh di lapangan**, jadi hasilnya adalah **titik acuan**, bukan angka pesan mutlak. Sajikan **list ber-lead-in bold** asumsi + implikasinya:
   - **Permintaan konstan & diketahui** → bila permintaan berfluktuasi/musiman, EOQ perlu ditinjau berkala.
   - **Biaya pesan & simpan tetap** → bila ongkos kirim atau biaya modal berubah, EOQ ikut bergeser.
   - **Tidak ada diskon kuantitas** → bila pemasok memberi diskon volume, kuantitas optimal bisa di atas EOQ (perlu model diskon terpisah).
   - **Pesanan diterima sekaligus & tanpa stockout** → tidak memodelkan pengiriman bertahap atau kekurangan.
   Honest hedging 1 kalimat: karena itu EOQ dipakai bersama **safety stock** dan **reorder point** untuk menutup ketidakpastian yang tidak dimodelkannya — tautkan cousin [reorder point] di sini (kapan memesan, sementara EOQ menjawab berapa). TANPA menurunkan rumus ROP/safety stock.
4. **H2 (pendek — lensa sistem + funnel):** "EOQ dalam Sistem Perencanaan Persediaan Modern" — *covers*: jawaban langsung 40–60 kata (poin baru): EOQ **bukan hitungan sekali di spreadsheet**; di ERP ia menjadi parameter *lot-sizing* yang dihitung ulang sistem saat biaya atau permintaan berubah. Lalu 1 paragraf *vendor-teach* netral (1–2 kalimat soal SAP): di **SAP S/4HANA**, EOQ ditawarkan sebagai bagian dari *optimum lot-sizing procedures* pada perencanaan kebutuhan material — memerlukan biaya penyimpanan dan biaya pemesanan yang terpelihara di data material agar ukuran lot optimal dihitung otomatis; untuk perencanaan persediaan lintas produk dan lokasi, perusahaan memakai **SAP Integrated Business Planning (SAP IBP)**. (**TANPA menyebut Soltius di body**; jangan bahas mekanika MRP mendalam, kode prosedur, atau modul lain.) **JANGAN sebut nama transaksi/kode prosedur spesifik** kecuali researcher mengonfirmasinya dari SAP official — sumber run ini untuk detail prosedur sebagian SAP Community (bukan dokumentasi resmi).

(≥1 question-format: H2 #2 ✓; ≥1 praktis/terstruktur dengan tabel/rumus/list: H2 #1 rumus + list langkah, H2 #2 tabel total biaya, H2 #3 list asumsi ✓; H2 honest/counter-conventional: H2 #3 ✓; ≥4 angka spesifik inline: D 5.000, S Rp100.000, H Rp1.000, EOQ 1.000, 5× pesan, Rp500.000 = Rp500.000, total Rp1.000.000 vs Rp1.250.000, Harris 1913 ✓. **DILARANG menulis {IMAGE_NN} dalam bentuk apa pun** — tabel total biaya menggantikan seluruh kebutuhan visual, TERMASUK "kurva EOQ" yang biasanya digambar; kurva disampaikan sebagai tabel U-shape sesuai sheet notes.)

## SAP / partner tech to teach (keyword tidak ada di `product_matrix.md` — framing universal tetap berlaku)

> `economic order quantity` topik persediaan/operasi ad-hoc, bukan salah satu 6 hub. Mapping diturunkan dari tracker (CTA anchor: **SAP IBP**) + `company_profile.md` (Soltius punya pengalaman rantai pasok di manufaktur/distribusi/perkebunan) + riset run ini. Aturan universal `product_matrix.md` berlaku penuh: **implements-not-builds**, ≤2 self-mention (override addendum §6), tanpa superlatif, tanpa spec karangan.

Konsep yang dijelaskan akurat & vendor-neutral:
- **Economic Order Quantity (EOQ)** — kuantitas pemesanan yang meminimalkan total biaya persediaan (biaya pesan + biaya simpan); menjawab *berapa* dipesan. Model klasik Harris (1913) / Wilson.
- **Rumus EOQ = √(2DS/H)** — D permintaan tahunan, S biaya per pesan, H biaya simpan per unit per tahun. Fakta matematis universal (bukan klaim vendor).
- **Trade-off biaya pesan vs biaya simpan** — bergerak berlawanan arah terhadap ukuran pesanan; pada EOQ keduanya sama besar dan total minimum.
- **Asumsi klasik EOQ** — permintaan konstan/diketahui, biaya tetap, tanpa diskon kuantitas, penerimaan sekaligus, tanpa stockout. Keterbatasan = titik acuan, dilengkapi ROP + safety stock.
- **EOQ di ERP (optimum lot-sizing)** — di SAP S/4HANA, EOQ merupakan salah satu *optimum lot-sizing procedure* pada perencanaan material; butuh biaya simpan & biaya pesan terpelihara di data material. Disebut RINGKAS di H2 #4 (1–2 kalimat).
- **SAP Integrated Business Planning (SAP IBP)** — anchor funnel; sebut nama penuh sekali. Jangan membedah modul-modulnya.

**Fakta yang WAJIB diverifikasi researcher (jangan diklaim tanpa sumber):**
- **Konsistensi SELURUH aritmetika** — prioritas #1. Contoh inti: 2 × 5.000 × 100.000 = 1.000.000.000; ÷ 1.000 = 1.000.000; √1.000.000 = 1.000. Tabel: Q=500 → pesan 10×, biaya pesan Rp1.000.000, simpan Rp250.000, total Rp1.250.000; Q=1.000 → 5×, Rp500.000, Rp500.000, total Rp1.000.000; Q=2.000 → 2,5×, Rp250.000, Rp1.000.000, total Rp1.250.000. **Hitung ulang tiap sel.** Satu sel salah menjatuhkan kredibilitas.
- **Rumus EOQ √(2DS/H)** — konfirmasi lintas sumber (ASCM/APICS + Investopedia/CFI + salah satu blog akuntansi ID). Catat: sebagian sumber ID menulis varian √(2RS/PI) di mana H = P×I (biaya simpan = harga × persentase); **secara matematis identik** — bila dipakai, jelaskan H = biaya simpan per unit, tetap konsisten dengan angka contoh (H = Rp1.000).
- **Asal usul Harris (1913, "How Many Parts to Make at Once", *Factory: The Magazine of Management*) & R. H. Wilson** — verifikasi via sumber tepercaya (Wikipedia bukan sitasi final; pakai untuk mengarahkan ke sumber sekunder yang layak, mis. ensiklopedia SCM/ASCM). Sebut **1 kalimat**; jangan melebih-lebihkan.
- **Asumsi klasik EOQ** — konfirmasi daftar (permintaan konstan/diketahui, biaya tetap, tanpa diskon kuantitas, penerimaan sekaligus, tanpa stockout) dari sumber otoritatif (Investopedia/CFI/ASCM). Jangan menambah asumsi yang tak bersumber.
- **EOQ sebagai *optimum lot-sizing procedure* di SAP S/4HANA** — konfirmasi via `help.sap.com`/`learning.sap.com` (SAP official, BUKAN SAP Community/blog reseller). Sebut secara **umum** ("EOQ termasuk prosedur *optimum lot-sizing* yang membutuhkan biaya simpan & biaya pesan terpelihara di data material") — JANGAN menyebut nama transaksi, kode prosedur (mis. "EX"/Groff/part-period balancing), atau versi yang tidak diverifikasi. Bila mekanisme spesifik tidak terkonfirmasi resmi, longgarkan jadi "sistem menghitung ukuran lot ekonomis dari parameter biaya" tanpa istilah teknis.
- **Contoh angka** = **ilustrasi buatan**, wajib dilabeli; jangan pakai data perusahaan nyata. **Angka WAJIB BARU** — jangan pakai ulang set cluster: `lead-time-c01` (50 unit/hari, LT 10, SS 100, ROP 600), `safety-stock-c01` (50/70, LT 10/14, σd 12, 480/63), `reorder-point-c01` (40 unit/hari, RLT 12, SS 90, ROP 570, 1.200/bulan → 14.400). Set brief ini: **D 5.000/th, S Rp100.000, H Rp1.000, EOQ 1.000** — distinct.
- **JANGAN mengarang benchmark** ("rata-rata perusahaan menghemat X% dengan EOQ") tanpa sumber. Bila researcher menemukan statistik biaya persediaan Indonesia bersumber jelas (BPS/Bappenas), boleh 1 angka — **jangan mengulang biaya logistik 14,29% yang sudah dipakai `lead-time-c01`**.

## Soltius anchor (BATCH OVERRIDE: maks 2 self-mention)

- **1 positioning line di Kesimpulan**: Soltius — SAP Platinum Partner melalui keanggotaan United VARs, berpengalaman sejak 1998 — **mengimplementasikan dan mendampingi** solusi perencanaan rantai pasok SAP seperti SAP IBP untuk perusahaan manufaktur dan distribusi. (Framing: implements/migrates/supports, **NEVER builds/owns**; tanpa superlatif; pilih SATU kredensial, jangan menumpuk. *Catatan:* `reorder-point-c01` & `safety-stock-c01` memakai kredensial United VARs dengan kalimat mirip — **variasikan diksinya**, jangan menyalin.)
- **1 soft website CTA** (baris terakhir, terpisah): ajakan konsultasi/mengunjungi soltius.co.id — anchor funnel: **SAP IBP** (per tracker). Primary keyword `economic order quantity` muncul di penutup/CTA (seo_playbook par.3).
- **TANPA aside Soltius di tengah body** (style_addendum §6). Sentuhan praktisi di body boleh TANPA nama Soltius (mis. "di lapangan, kuantitas pesan lebih sering ditetapkan dari kebiasaan daripada dari hitungan biaya").

## Internal links to place (BATCH OVERRIDE: 2 SAJA — 1 hub + 1 cousin, inline natural, tanpa "BACA JUGA")

> `landing_page` kosong di sheet → hub dipilih strategist (keputusan standing sejak Juni). Status URL diverifikasi via WebFetch run ini (2026-08-31). Penulis cek ulang saat menulis.

- **Hub (halaman soltius.co.id paling relevan)**: `https://www.soltius.co.id/id/blog/apa-itu-supply-chain-management` — anchor natural: "supply chain management" / "manajemen rantai pasok" — *why*: EOQ adalah keputusan pengadaan/persediaan di dalam proses *plan* dan *source* rantai pasok; halaman ini hub SCM tingkat atas milik Soltius dan **sejalan dengan CTA anchor SAP IBP** per tracker. **Diverifikasi 200 OK run ini** (judul: "Kenali Apa itu Supply Chain Management untuk Perusahaan"; **tidak menyebut EOQ/reorder point/safety stock** → tidak ada risiko kanibalisasi). Preseden: hub yang sama dipakai `safety-stock-c01` (2026-07) & `reorder-point-c01` (2026-08), lolos QC. Tempatkan di lead atau paruh awal.
- **Cousin (ditunjuk tracker: "tautkan reorder-point sebagai cousin")**: `https://www.soltius.co.id/id/blog/reorder-point-rumus-contoh-perhitungan` — anchor natural: "reorder point" — *why*: pasangan alami — EOQ menjawab **berapa** dipesan, reorder point menjawab **kapan** memesan; keduanya dipakai bersama. Tempatkan di H2 #3 (saat menyebut EOQ dilengkapi ROP + safety stock). Sesuai instruksi dedup tracker.
  - **⚠️ CATATAN PENTING soal status URL cousin (untuk editor/curator):** URL reorder-point **BELUM LIVE** — WebFetch run ini mengembalikan **HTTP 500** (batch conditional 2026-08 belum dipublikasikan; curator belum jalan untuk conditional, konsisten catatan tracker). URL mengikuti slug frontmatter `reorder-point-c01`: `reorder-point-rumus-contoh-perhitungan`. **Jangan menautkan URL yang belum resolve saat publish.** Bila reorder-point masih 500 saat penulisan/publikasi, **swap ke cousin live**: `https://www.soltius.co.id/id/blog/konsep-warehouse-management-system-yang-wajib-anda-tahu` — anchor "manajemen gudang" (**terbukti live & lolos QC** di `lead-time-c01`, `safety-stock-c01`, `reorder-point-c01`, `sku-c01`; EOQ dipicu keputusan stok di gudang → relevan). Serahkan keputusan swap ke editor/curator saat publikasi. Anchor & penempatan (H2 #3) sudah ditetapkan di sini untuk kedua opsi.

(2 tautan: 1 hub existing live + 1 cousin sibling per tracker dengan fallback live. Tidak ada own-hub blog khusus EOQ karena topik persediaan baru, bukan salah satu 6 hub — dicatat sesuai mode conditional.)

## E-E-A-T signals to embed

- **Angka/fakta spesifik** (≥4 angka inline per addendum §4): **D 5.000 unit/tahun**, **S Rp100.000/pesan**, **H Rp1.000/unit/tahun** → **EOQ 1.000 unit** → **5× pesan/tahun**; pada EOQ **biaya pesan = biaya simpan = Rp500.000**, **total Rp1.000.000** vs **Rp1.250.000** di Q=500 dan Q=2.000; model diperkenalkan **Harris, 1913**. Semua berlabel *ilustrasi*, aritmetika terverifikasi. JANGAN mengarang benchmark industri.
- **Authoritative sources to cite (≥2 — sitasi final 1–2 inline di artikel):**
  1. **Investopedia — "Economic Order Quantity (EOQ)"** — `https://www.investopedia.com/terms/e/economicorderquantity.asp` — otoritas edukasi keuangan/operasi yang banyak dikutip; memuat rumus √(2DS/H), komponen biaya, dan **daftar asumsi** (permintaan & biaya konstan). Pakai di H2 #1 (rumus) atau H2 #3 (asumsi). *(Alternatif setara: Corporate Finance Institute "Economic Order Quantity (EOQ)".)* Researcher verifikasi URL hidup & isi.
  2. **ASCM (Association for Supply Chain Management, dahulu APICS) — Supply Chain Dictionary / sumber definisi baku** — `https://www.ascm.org/learning-development/certifications-credentials/dictionary/` — badan sertifikasi rantai pasok global, otoritas terminologi (EOQ/lot sizing). **Preseden: dipakai `lead-time-c01` & `reorder-point-c01`.** ⚠️ Halaman landing mungkin **tidak memuat bunyi definisi** (dikonfirmasi di run reorder-point: 200 OK tetapi tanpa teks definisi) → bila ingin mengutip bunyi baku, researcher wajib membuka kamusnya dulu; **jangan mengarang teks definisi**. Bila tak terverifikasi, pakai untuk menyandarkan istilah baku saja atau ganti ke SAP official di bawah.
  3. **SAP Help / SAP Learning — *optimum lot-sizing* di SAP S/4HANA** — mis. `https://help.sap.com/docs/SAP_S4HANA_ON-PREMISE` (cari Lot-Sizing Procedures / Optimum Lot Size) atau kursus MRP di `learning.sap.com`. SAP official — dipakai di H2 #4 untuk fakta EOQ sebagai lot-sizing procedure. **Researcher wajib menemukan URL SAP resmi yang tepat**; bila hanya JS-rendered/tidak terverifikasi, longgarkan klaim (tanpa nama prosedur/kode) — jangan mengarang nama fitur. *(Catatan: detail 4 prosedur — part-period balancing, least unit cost, Groff, dynamic lot size — muncul di SAP Community run ini, BUKAN dokumentasi resmi; jangan dikutip sebagai fakta resmi tanpa konfirmasi help.sap.com.)*
- **First-party Soltius angle**: pengalaman implementasi & pendampingan perencanaan rantai pasok SAP (manufaktur, distribusi, perkebunan — industri vertikal Soltius per `company_profile.md`) — dipakai di positioning line Kesimpulan. Tanpa nama klien atau angka proyek karangan.

## AI Overview & GEO optimization (seo_playbook §2a, dipadatkan per addendum §5)

- **Definition snippet blockquote** setelah lead — "Ringkasnya:" 40–60 kata, arah: *"Ringkasnya: economic order quantity (EOQ) adalah kuantitas pemesanan yang meminimalkan total biaya persediaan dengan menyeimbangkan biaya pemesanan dan biaya penyimpanan. Nilainya dihitung dari akar kuadrat 2 dikali permintaan tahunan dikali biaya per pesanan, dibagi biaya penyimpanan per unit — sehingga jumlah pesan ditetapkan dari data biaya, bukan dari kebiasaan."* (writer boleh poles, jaga 40–60 kata, em-dash ≤ jatah. **INI satu-satunya definisi** — body dilarang menyatakannya ulang dengan kata lain, termasuk di jawaban langsung tiap H2.)
- **Jawaban langsung 40–60 kata segera setelah TIAP H2** berisi poin baru milik H2 itu (tiga variabel & harga/lead time tak masuk rumus; dua biaya berlawanan arah → EOQ titik pertemuan = total minimum; asumsi jarang benar utuh → EOQ titik acuan; EOQ dihitung ulang sistem, bukan sekali di spreadsheet), **BUKAN** parafrase snippet.
- **Satu paragraf = satu poin quotable & verifiable.** Rumus dan tabel total biaya ditulis agar AI mengekstrak baris-per-baris.
- **Entity list** (nama penuh saat sebutan pertama, akronim di-expand sekali): economic order quantity (EOQ), Ford W. Harris, R. H. Wilson, biaya pemesanan (ordering cost), biaya penyimpanan (holding/carrying cost), permintaan tahunan (annual demand), reorder point (ROP), safety stock, lot sizing, SAP S/4HANA, SAP Integrated Business Planning (SAP IBP).
- **Format match**: rumus 1 baris + list bernomor langkah (H2 #1); tabel total biaya/kurva EOQ (H2 #2); list ber-lead-in bold asumsi (H2 #3); prosa untuk lensa sistem (H2 #4). Tabel diutamakan; jangan paksa elemen berlebih hingga melampaui 1000 kata.
- **FAQ**: 2–3 Q&A, parseable FAQPage schema; `dateModified` akurat di meta block.

## FAQ (2–3 Q&A — jawaban 30–60 kata, tiap jawaban memuat 1 fakta/angka; ambil dari PAA; tanpa menduplikasi H2)

1. **"Apa itu rumus EOQ dan bagaimana menghitungnya?"** — Rumus EOQ adalah akar kuadrat dari (2 × permintaan tahunan × biaya per pesanan) ÷ biaya penyimpanan per unit, ditulis **EOQ = √(2DS/H)**. Contoh: permintaan 5.000 unit, biaya pesan Rp100.000, biaya simpan Rp1.000/unit → EOQ = √1.000.000 = **1.000 unit** per pesanan.
2. **"Apa perbedaan EOQ dan reorder point (ROP)?"** — Keduanya alat persediaan yang saling melengkapi. **EOQ menjawab berapa** yang dipesan sekali pesan (hasil: kuantitas per PO); **ROP menjawab kapan** memesan (hasil: level stok pemicu). EOQ menentukan ukuran pesanan, ROP menentukan waktunya — dipakai bersama dalam satu kebijakan pengisian ulang.
3. **"Apa kelemahan atau keterbatasan metode EOQ?"** — EOQ mengasumsikan permintaan konstan dan diketahui, biaya pesan/simpan tetap, tanpa diskon kuantitas, serta penerimaan sekaligus tanpa stockout. Karena asumsi ini jarang benar utuh, EOQ menjadi titik acuan yang dilengkapi safety stock dan reorder point, bukan angka pesan mutlak.

## Data captured this run

- **Source(s)**: WebSearch (Google ID, 2026-08-31, 4 kueri) — peta pesaing "economic order quantity"/"rumus EOQ"/"kelebihan kekurangan EOQ", PAA turunan, rumus & contoh, EOQ vs ROP. WebSearch (EN, 1 kueri) — verifikasi asal usul Harris 1913/Wilson + asumsi + EOQ sebagai *optimum lot-sizing* di SAP S/4HANA. WebFetch: `soltius.co.id/id/blog/apa-itu-supply-chain-management` (✅ 200 OK — hub, tanpa EOQ/ROP), `soltius.co.id/id/blog/reorder-point-rumus-contoh-perhitungan` (❌ HTTP 500 — cousin belum live). WebFetch SERP Google **terblokir** (consent/error) — fallback WebSearch sesuai `CLAUDE.md` §11.
- **Apr 2026 rank** (from report): `n/a` — keyword di luar 6 keyword `seo_report_apr2026.md` (topik conditional/ad-hoc baru).
- **Volume / KD / trend**: `n/a (Ahrefs not connected)`. Sinyal kualitatif: SERP ID sangat padat (Mekari Jurnal, Kledo, Accurate, Zahir, Ukirama, HashMicro, kumparan, szetoaccurate, logos3pl) → volume definisional/rumus jelas ada; **semua berformat "definisi + 1 rumus + 1 contoh + manfaat generik"** → beatable dengan tabel trade-off berangka (kurva EOQ) + biaya-pesan=biaya-simpan + asumsi/keterbatasan jujur + pemisahan EOQ/ROP + asal usul + lensa sistem + GEO.
- **SERP features present**: explainer definisi/rumus mendominasi; PAA + AI Overview sangat mungkin aktif untuk kueri "…adalah"/"rumus…"/"cara menghitung…" ini (tidak terkonfirmasi langsung — scrape terblokir).
- **cache_source**: `n/a` — mode conditional `/single-article`; riset ditangkap inline di brief ini (tanpa cache per-keyword bulanan).

## Notes for SME researcher

- **Dossier RINGKAS saja** — artikel target ~900 kata, 4 H2 ramping. Jangan kirim material untuk 1.650 kata.
- **Prioritas #1: verifikasi konsistensi SEMUA angka.** Hitung ulang: EOQ = √(2 × 5.000 × 100.000 ÷ 1.000) = √1.000.000 = 1.000; dan **tiap sel tabel** total biaya (Q=500 → total Rp1.250.000; Q=1.000 → Rp1.000.000, biaya pesan = simpan = Rp500.000; Q=2.000 → Rp1.250.000). Satu sel salah menjatuhkan kredibilitas.
- Konfirmasi **rumus EOQ √(2DS/H)** dan **daftar asumsi klasik** lintas sumber: Investopedia/CFI + ASCM + salah satu blog akuntansi ID. Catat varian √(2RS/PI) = identik (H = P×I) bila ditemui — jaga konsistensi dengan H = Rp1.000.
- Konfirmasi **asal usul Harris (1913)/Wilson** dari sumber tepercaya (bukan hanya Wikipedia) — sebut 1 kalimat saja.
- Konfirmasi **EOQ sebagai *optimum lot-sizing procedure* di SAP S/4HANA** dari SAP official (`help.sap.com`/`learning.sap.com`). Sebut UMUM — **jangan mengarang** nama prosedur/kode/transaksi. Detail 4 prosedur muncul di SAP Community (bukan resmi) — jangan dikutip sebagai fakta resmi tanpa konfirmasi. Bila tak terverifikasi, longgarkan jadi "sistem menghitung ukuran lot ekonomis dari parameter biaya".
- **Boundary dedup (MENGIKAT)**: JANGAN menyediakan material rumus ROP, komposisi replenishment lead time, jebakan satuan, reorder point planning manual/otomatis (milik `reorder-point-c01` 2026-08); JANGAN rumus/derivasi safety stock, Z-score, service level (milik `safety-stock-c01` 2026-07); JANGAN rasio perputaran persediaan (milik `inventory-turnover-c01` 2026-08); JANGAN jenis/pengurangan lead time (milik `lead-time-c01` 2026-06). ROP & safety stock hanya disinggung sebagai pelengkap (kapan/buffer), tanpa rumus.
- Contoh angka **buatan & berlabel ilustrasi** — jangan pakai data perusahaan nyata; jangan pakai ulang angka set cluster (lihat SAP-tech section). Set brief ini: D 5.000/th, S Rp100.000, H Rp1.000, EOQ 1.000.
- Cek 2 URL internal: hub `blog/apa-itu-supply-chain-management` (200 OK run ini); cousin `blog/reorder-point-rumus-contoh-perhitungan` (**HTTP 500 run ini — belum live**; siapkan fallback WMS `blog/konsep-warehouse-management-system-yang-wajib-anda-tahu`). Konfirmasi status saat penulisan.

## Notes for future strategist runs

Artikel ini SENGAJA TIDAK mencakup (hindari kanibalisasi + sisakan untuk artikel lain):
- **EOQ dengan diskon kuantitas (quantity discount model)** — perpanjangan EOQ; disebut ≤1 klausa di H2 #3 sebagai keterbatasan; kandidat artikel tersendiri.
- **Economic Production Quantity (EPQ) / production run model** — varian EOQ untuk produksi bertahap; sengaja ditahan.
- **Periodic vs continuous review (sistem P vs Q), min-max, two-bin** — kebijakan pengisian ulang alternatif; milik cluster lain / kandidat artikel sendiri.
- **Reorder point & safety stock (rumus)** — sudah dimiliki `reorder-point-c01` & `safety-stock-c01`; hanya disinggung sebagai pelengkap, ditautkan sebagai cousin.
- **MRP / lot-sizing SAP secara teknis** (kode prosedur, konfigurasi, part-period balancing/Groff) — terlalu teknis untuk 900 kata; kandidat artikel praktisi SAP tersendiri.
- **SAP IBP sebagai produk** (modul, deployment, S&OP) — brief ini hanya memakainya sebagai anchor funnel 1–2 kalimat; artikel decision-stage IBP tersendiri masih terbuka.

## Format overrides (batch conditional 2026-09)

Restating dari `conditional/2026-09/style_addendum.md` — **MENGIKAT** untuk researcher, writer, editor, validator:

- **Panjang: 800–1000 kata (target ~900)** — hitungan body H1 s/d CTA, di luar frontmatter; `target_word_count: 900` di frontmatter, isi `word_count` aktual (via `tools/count_words.py`, konvensi cleaned-prose) setelah menulis. <800 terlalu tipis; >1000 gagal (pangkas dengan membuang kalimat pengantar/transisi kosong dan contoh redundan, BUKAN memampatkan semua kalimat jadi telegram — ritme tetap bervariasi, paragraf 1–4 kalimat).
- **TANPA image placeholder** — dilarang menulis `{IMAGE_NN}` dalam bentuk apa pun; stage image-planner DILEWATI; tidak ada `images.json`. Konsep visual **kurva EOQ** disampaikan lewat **tabel total biaya berbentuk U** (H2 #2), bukan gambar (sesuai sheet notes: "Contoh + kurva EOQ dijelaskan via teks/tabel, bukan gambar").
- **FAQ: 2–3 Q&A** (bukan 5–8); jawaban 30–60 kata, tiap jawaban memuat 1 fakta/angka; ambil dari PAA. (Draf 3 FAQ tersedia di atas; bila total mepet 1000 kata, pakai 2.)
- **Internal link: TEPAT 2** — 1 hub (`blog/apa-itu-supply-chain-management`, live) + 1 cousin (`blog/reorder-point-rumus-contoh-perhitungan` per tracker; **fallback live** `blog/konsep-warehouse-management-system-yang-wajib-anda-tahu` bila cousin masih HTTP 500 saat publish), inline natural, tanpa "BACA JUGA". Sitasi eksternal otoritatif 1–2 inline (Investopedia/CFI + SAP official; ASCM opsional).
- **Definisi HANYA SEKALI** — di definition snippet "Ringkasnya:" (40–60 kata) setelah lead. Body/H2 **DILARANG** mengulang definisi snippet dengan kata lain, termasuk di jawaban langsung 40–60 kata setelah tiap H2. **Tidak ada H2 definitional "Apa Itu EOQ?"** — asal usul Harris/Wilson cukup 1 kalimat di H2 #1, bukan H2 tersendiri.
- **Prosa padat on-point** — tanpa paragraf roadmap, tanpa transisi kosong, tanpa pembuka klise; em-dash ≤2; tanpa adjektiva hype (anti-AI `style_guide.md` §5 berlaku penuh). EYD.
- **Lead ≤80 kata** (pain konkret: sekali pesan berapa banyak + keyword `economic order quantity` + janji artikel).
- **Kesimpulan ≤80 kata** + 1 positioning line Soltius; **soft website CTA (soltius.co.id) = baris paling akhir**, terpisah dari Kesimpulan. **Maks 2 mention Soltius total.** Primary keyword `economic order quantity` muncul di penutup/CTA (seo_playbook par.3).
- **3–4 H2** (brief ini menetapkan **4**; ≥1 question-format → H2 #2; ≥1 praktis/terstruktur dengan tabel/rumus/list → H2 #1 & #2; H2 honest/counter-conventional → H2 #3 asumsi/keterbatasan); **≥4 angka spesifik inline**; jawaban langsung 40–60 kata setelah tiap H2 berisi poin BARU milik H2 itu.
- **Framing Soltius** (`style_guide.md` §11): implementator/pendamping SAP — **implements, migrates, supports — NEVER builds/owns**. Disiplin sitasi §10: JANGAN mengarang angka, pasal, harga, atau spec SAP (termasuk nama prosedur lot-sizing yang tak terverifikasi).
