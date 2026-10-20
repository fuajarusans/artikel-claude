---
keyword: "reorder point"
keyword_slug: "reorder-point"
landing_page: ""
month: "2026-08"
brief_id: "reorder-point-c01"
angle: "reorder-point-rumus-dan-contoh-perhitungan"
angle_hash: "sha1:23c5f725e528"
search_intent: "informational"
target_word_count: 900
strategist_run_date: "2026-07-17"
mode: "conditional-given-angle"
batch: "conditional-2026-08 (style_addendum.md WAJIB — 800–1000 kata, tanpa image placeholder, FAQ 2–3, 2 internal link)"
dedup_result: "DISTINCT — Jaccard tertinggi ~0.18 vs lead-time-c01 (< 0.4); tidak ada tabrakan angle_hash di 119 hash yang diperiksa. CATATAN PENTING: lead-time-c01 SUDAH memuat rumus ROP dasar + 1 contoh — lihat bagian 'Distinct angle vs. history' untuk boundary yang mengikat."
---

# Reorder Point (ROP): Rumus dan Contoh Perhitungannya

> Working Title diberikan user — substansi dipertahankan apa adanya. H1 = **52 karakter** (dalam band 50–60), primary keyword `reorder point` ada di 13 karakter pertama. Tidak ada perubahan angle.
>
> **H1 (artikel):** Reorder Point (ROP): Rumus dan Contoh Perhitungannya
> **Meta title (≤60):** Reorder Point (ROP): Rumus dan Contoh Perhitungannya *(52 char)*
> **Meta description (140–160):** Reorder point adalah titik stok yang memicu pemesanan ulang. Pelajari rumus reorder point, contoh perhitungannya, dan bedanya dengan EOQ dan safety stock. *(154 char)*
> **Slug (≤60):** reorder-point-rumus-contoh-perhitungan *(38 char)*

## Hook hypothesis

Manajer persediaan dan staf procurement kalah bukan karena tidak tahu stoknya menipis, melainkan karena tahu terlambat. Barang dipesan saat gudang sudah nyaris kosong, lalu tim menghabiskan dua minggu berikutnya menjelaskan ke sales mengapa pesanan pelanggan tertahan. SERP Bahasa Indonesia untuk "reorder point" sangat padat (Mekari Jurnal, Accurate, HashMicro, PRIEDS, Kledo, Majoo, Folio POS, Weefer, dibimbing.id) tetapi seragam: definisi → manfaat → satu rumus → satu contoh angka. Tiga celah menganga. Pertama, **tidak ada yang menjelaskan lead time mana** yang masuk rumus — pesaing menulis "lead time pemasok" seolah itu hanya waktu kirim, padahal dalam doktrin SAP *replenishment lead time* untuk material beli mencakup *planned delivery time* + waktu proses penerimaan barang + waktu proses pembelian. Kedua, **jebakan satuan** (permintaan bulanan dikalikan lead time harian) disebut sekilas tanpa ditunjukkan akibat aritmetikanya. Ketiga, **tidak ada yang memisahkan ROP dari EOQ dengan tegas** — ROP menjawab *kapan*, EOQ menjawab *berapa*. Soltius kredibel di titik ini karena bekerja persis di lapisan tempat ROP hidup sebagai parameter sistem, bukan angka di spreadsheet: sebagai mitra implementasi SAP yang mendampingi perencanaan persediaan di atas SAP IBP — bukan pembuat softwarenya.

## Primary keyword

`reorder point`

Supporting keyword (given): `rumus reorder point`

(Pola pencari Indonesia: istilah Inggris + penjelasan Bahasa Indonesia. Intent definisional bercampur *how-to*/rumus — judul yang diberikan sudah memuat keduanya. Artikel ini melengkapi cluster persediaan: `lead-time-c01` memegang lead time, `safety-stock-c01` memegang buffer, `inventory-turnover-c01` memegang rasio perputaran — **titik pemicu pemesanan belum dimiliki artikel mana pun sebagai entitas utamanya**.)

## Secondary / LSI keywords (8–12)

- rumus reorder point
- ROP (reorder point)
- titik pemesanan ulang
- safety stock / stok pengaman
- lead time / replenishment lead time (RLT)
- permintaan harian rata-rata
- EOQ (Economic Order Quantity)
- stockout / kehabisan stok
- manajemen persediaan (inventory management)
- MRP (Material Requirements Planning)
- service level
- SAP IBP (SAP Integrated Business Planning)

## Search intent & SERP feature targets

- **Stage**: awareness (top-funnel definisional + *how-to*/rumus intent)
- **Format**: definition snippet + tabel dua rumus + contoh perhitungan bertahap + tabel pembeda ROP vs EOQ
- **Surface targets**:
  - [x] AI Overview (Google SGE) / AI-engine citation (Perplexity, ChatGPT) — definisi 40–60 kata + rumus + contoh aritmetika quotable
  - [x] Featured Snippet (definisi + rumus + tabel)
  - [x] People Also Ask

## SERP landscape (live scrape today)

> **Catatan metode:** WebFetch ke `google.com/search?q=reorder+point+adalah&hl=id&gl=id` **terblokir** (Google mengembalikan halaman error/consent, bukan SERP) — konsisten dengan seluruh run conditional 2026-06, 2026-07, dan `sku-c01` batch ini. Degradasi anggun ke **WebSearch** (2026-07-17, 4 kueri Bahasa Indonesia) sesuai SOP `CLAUDE.md` §11. Volume/KD: `n/a (Ahrefs not connected)`.

**Top competing pages (WebSearch, kueri Bahasa Indonesia):**
1. `https://www.jurnal.id/id/blog/contoh-cara-menghitung-reorder-point/` — Mekari Jurnal — *angle*: "Cara Menghitung Reorder Point dengan Contoh Rumus"; pesaing terdekat dengan judul kita; funnel software akuntansi.
2. `https://accurate.id/marketing-manajemen/reorder-point/` — Accurate — *angle*: "Pengertian, Manfaat, dan Cara Hitung"; standar SME, rumus tunggal.
3. `https://www.hashmicro.com/id/blog/pengertian-reorder-point/` — HashMicro — *angle*: "Definisi, Rumus dan Cara Menghitungnya"; satu-satunya yang menyinggung EOQ, tetapi hanya sebaris tanpa pemisahan tegas.
4. `https://www.prieds.com/post/cara-menghitung-reorder-point-beserta-rumus-dan-contohnya` — PRIEDS — *angle*: rumus + contoh; lensa logistik/WMS.
5. `https://kledo.com/blog/reorder-point/` & `https://majoo.id/solusi/detail/reorder-point-adalah` — Kledo / Majoo — *angle*: "manfaat + metode + rumus"; funnel akuntansi/kasir UMKM.
6. `https://www.foliopos.com/blog/detail/reorder-point-pengertian-manfaat-dan-cara-menghitungnya` & `https://www.weefer.co.id/id/blog/reorder-point/` — Folio POS / Weefer — *angle*: definisi + manfaat + hitung; ringan.
7. `https://dibimbing.id/blog/detail/rumus-reorder-point` & `https://www.bee.id/blog/reorder-point/` — dibimbing.id / Bee — *angle*: rumus + contoh; bee.id satu-satunya yang menyebut ROP "bukan angka statis" (sebaris, tanpa kaidah tinjau ulang).

**Gaps to exploit** (yang TIDAK dicakup baik oleh top hasil):
- **Lead time mana yang masuk rumus.** Semua pesaing menulis "lead time pemasok" seakan hanya waktu kirim. Doktrin SAP (terverifikasi run ini) menyatakan *replenishment lead time* material beli = *planned delivery time* + waktu proses penerimaan barang + waktu proses pembelian. Artinya ROP yang dihitung dari waktu kirim saja **selalu terlalu rendah**. Ini pembeda paling kuat dan tidak dimiliki satu pun hasil SERP.
- **Jebakan satuan ditunjukkan, bukan diperingatkan.** Pesaing menulis "pastikan satuan konsisten". Kita tunjukkan aritmetikanya: 1.200 unit/bulan × 12 hari = 14.400 unit (absurd) vs konversi benar 1.200 ÷ 30 = 40 unit/hari.
- **ROP vs EOQ dipisah tegas.** ROP = kapan memesan; EOQ = berapa banyak. Pesaing mencampur atau menyebut sebaris. Ini juga glue cluster yang diminta tracker.
- **Dua bentuk rumus + kapan memakai yang mana.** Pesaing menyodorkan satu rumus (kadang dua) tanpa kriteria pemilihan. Kita beri kriterianya: stabil vs berfluktuasi.
- **ROP sebagai parameter sistem, bukan angka spreadsheet.** Tak satu pun menjelaskan bahwa ERP memelihara ROP di *material master* dan dapat menghitungnya ulang otomatis tiap *forecast run*. Fakta SAP ini adalah jembatan funnel yang jujur.
- **Tidak ada kejujuran batas**: tidak ada yang bilang ROP yang benar pun gagal bila catatan stoknya meleset.

**People Also Ask / kueri turunan** (dari WebSearch ID — mewakili PAA; SERP scrape terblokir):
1. Apa itu reorder point (ROP)?
2. Bagaimana rumus reorder point?
3. Apa perbedaan reorder point dan safety stock?
4. Apakah reorder point sama dengan stok minimum?
5. Apa bedanya reorder point dan EOQ?
6. Berapa sering reorder point perlu dihitung ulang?
7. Apa contoh perhitungan reorder point?
8. Apa akibat reorder point terlalu rendah?

## Distinct angle vs. history

- **Closest prior article in this cluster**: `lead-time-c01` (conditional 2026-06, "Apa Itu Lead Time dalam Supply Chain dan Cara Menghitungnya"). Tetangga berikutnya: `safety-stock-c01` (2026-07), lalu `mrp-c01` (2026-06) dan `inventory-turnover-c01` (row 12, batch ini).

- **⚠️ KOREKSI TERHADAP CATATAN TRACKER (wajib dibaca).** Tracker row 8 menyatakan *"rumus ROP BELUM pernah ditulis penuh"*. **Ini tidak sepenuhnya akurat** dan strategist mencatatnya secara terbuka: `lead-time-c01` **sudah memuat** rumus ROP dasar (`Reorder Point = (Rata-rata Pemakaian Harian × Lead Time) + Safety Stock`) beserta satu tabel contoh (10 hari × 50 unit + 100 = **600 unit**), di dalam H2 "Lead Time, Reorder Point, dan Safety Stock". Brief `safety-stock-c01` bahkan secara eksplisit **memesan** topik itu untuk lead-time-c01 ("Rumus lead time, jenis lead time, dan rumus reorder point lengkap — sudah dimiliki `lead-time-c01`"). Instruksi dedup tracker tetap **DIIKUTI** (resolusi diberikan → verdict `distinct`), tetapi diferensiasinya **harus lebih dalam** dari sekadar "menulis rumusnya penuh", karena rumus dasarnya sudah ada di artikel lain. Boundary di bawah bersifat **mengikat** — bukan saran.

- **How this brief differs**: di `lead-time-c01`, ROP adalah **konsekuensi hilir** yang dibahas dalam satu H2 sebagai bukti mengapa lead time penting; entitas utamanya lead time. Di sini ROP adalah **entitas utama**, dan lead time turun pangkat jadi **satu variabel** di dalam rumus. Kedalaman yang tidak dimiliki `lead-time-c01`: (a) **dua bentuk rumus** (tanpa vs dengan safety stock) plus kriteria memilih; (b) **komposisi *replenishment lead time*** menurut doktrin SAP — *planned delivery time* + waktu proses penerimaan + waktu proses pembelian — yang membuat ROP dari "waktu kirim saja" selalu terlalu rendah; (c) **jebakan satuan** ditunjukkan dengan aritmetika; (d) **ROP vs EOQ** (kapan vs berapa); (e) **ROP sebagai parameter *material master*** yang dihitung ulang tiap *forecast run*. Tidak satu pun dari lima poin ini ada di `lead-time-c01`.

- **BOUNDARY MENGIKAT untuk writer & researcher** (anti-kanibalisasi):
  - **JANGAN** mengajarkan ulang lead time: definisi lead time, lead time vs *cycle time*, empat jenis lead time, *cumulative lead time*, rumus lead time (pemesanan + produksi + pengiriman), cara mengurangi lead time, DDMRP, tabel Pemasok A vs B — **semua milik `lead-time-c01`**. Lead time muncul di artikel ini **hanya sebagai variabel rumus** + satu poin baru (komposisi RLT).
  - **JANGAN** menurunkan atau membandingkan rumus safety stock (rumus maks–rata-rata, rumus statistik Z × σd × √LT, tabel Z-score, service level 95%/99%, biaya simpan 15–25%) — **milik `safety-stock-c01`**. Safety stock muncul **hanya sebagai satu suku penjumlah** yang nilainya diberikan (bukan dihitung) di contoh.
  - **JANGAN** membedah mekanika MRP, *lot sizing*, atau modul SAP PP — milik `mrp-c01` / `sap-pp-c01`.
  - **JANGAN** membahas rasio perputaran persediaan / cara meningkatkannya — milik `inventory-turnover-c01` (row 12, batch yang sama).
  - **JANGAN** menurunkan rumus EOQ (√(2DS/H)) — EOQ hanya dikontraskan sebagai *pertanyaan yang berbeda* (berapa banyak), maksimal 1–2 kalimat + 1 baris tabel. Rumus EOQ sengaja disisakan untuk artikel EOQ tersendiri (sudah dicadangkan `safety-stock-c01` & `mrp-c01`).
  - **ANGKA CONTOH WAJIB BARU.** Jangan memakai ulang angka `lead-time-c01` (50 unit/hari, LT 10 hari, SS 100, ROP 600) maupun `safety-stock-c01` (50/70 unit, LT 10/14 hari, σd 12, hasil 480/63). Brief ini menetapkan set angka baru: **40 unit/hari, RLT 12 hari, safety stock 90 unit → ROP 570 unit**.

- **Subtopic overlap (Jaccard) with closest prior**: subtopik brief ini = {definisi ROP, ROP sebagai pemicu pemesanan, rumus ROP dasar, rumus ROP dengan safety stock, kriteria memilih rumus, komposisi replenishment lead time, contoh perhitungan ROP, jebakan satuan, ROP vs EOQ, ROP bukan angka statis, reorder point planning manual vs otomatis di SAP, SAP IBP} (12) vs subtopik `lead-time-c01` = {definisi lead time, lead time vs cycle time, 4 jenis lead time, cumulative lead time, rumus lead time, contoh hitung lead time, hubungan lead time–ROP–safety stock (rumus ROP + contoh 600 unit), rumus safety stock sederhana & statistik, variabilitas lead time menyesatkan, tabel pemasok A vs B, 6 cara mengurangi lead time, horizon MRP, DDMRP, modul SAP IBP, biaya logistik Indonesia 14,29%} (15). Irisan efektif = {rumus ROP, contoh perhitungan ROP, safety stock sebagai variabel, SAP IBP} = 4 dari union 23 → **Jaccard ≈ 0.17–0.18 (< 0.4 ✓)**. Irisan ini **diakui jujur** — itulah alasan boundary di atas dibuat mengikat.
- **Cek permukaan dedup lain**: vs `safety-stock-c01` (2026-07) → irisan {safety stock sebagai variabel, ROP disinggung, SAP IBP} = 3 dari union ~20 → **≈ 0.15**; artikel itu menyebut ROP hanya di 1 kalimat body + 1 FAQ, tanpa memperluas rumusnya (dikonfirmasi QC-nya sendiri: *"ROP is a ≤1-sentence body reference plus one PAA FAQ (no ROP formula expansion)"*). Vs `inventory-turnover-c01` (row 12) ≈ 0.08 — rasio perputaran, bukan titik pemicu; tracker-nya sudah memagari: *"bukan rumus buffer/ROP"*. Vs `mrp-c01` ≈ 0.10, vs `sku-c01` ≈ 0.05 (brief sku-c01 sendiri menilai `reorder-point-c01` ≈ 0.05). Vs `articles_history/index.json` (51 entri; hanya cluster BI/DW/manufaktur/ERP-cloud/low-code/clean-core/WMS) → **tidak ada artikel rumus persediaan sama sekali**; cluster WMS menyebut stok tanpa rumus ROP. Vs `monthly_runs/2026-08/final/` (21 artikel) → tidak ada yang menyentuh ROP. **angle_hash `sha1:23c5f725e528` tidak berbenturan** dengan 119 hash unik yang diperiksa di `articles_history/` + `conditional/2026-06` + `conditional/2026-07` + `conditional/2026-08`. **Hasil dedup: DISTINCT — aman ditulis, dengan boundary di atas ditegakkan editor.**

## Article skeleton — H2s the writer should expand (BATCH OVERRIDE: 3–4 H2 SAJA)

> Lead ≤80 kata (pain konkret + keyword + janji artikel, TANPA roadmap) → definition snippet blockquote "Ringkasnya:" 40–60 kata → body 4 H2 ramping → FAQ 3 → Kesimpulan ≤80 kata → soft CTA baris terakhir. **DILARANG H2 definitional "Apa Itu Reorder Point?"** — judul hanya menjanjikan "Rumus dan Contoh Perhitungannya" (tidak menjanjikan "Pengertian"), dan snippet sudah menunaikan definisinya. Tidak ada info baru (asal istilah/standar) yang cukup membenarkan H2 definitional tersendiri; akronim ROP cukup di-expand sekali di snippet.
>
> **Budget kata (panduan, total ≈ 955):** lead 75 · snippet 50 · H2#1 140 · H2#2 220 · H2#3 140 · H2#4 100 · FAQ 3×45 = 135 · Kesimpulan 75 · CTA 20.

1. **H2 (question-format + tabel)**: "Bagaimana Rumus Reorder Point?" — *covers*: jawaban langsung 40–60 kata berisi poin BARU (rumus ROP ada **dua bentuk**, dan pemilihannya ditentukan oleh **stabilitas** permintaan & lead time — bukan selera atau kelengkapan data). Lalu **satu tabel** (kolom: Bentuk | Rumus | Kapan dipakai):
   - Dasar: `ROP = Permintaan Harian Rata-rata × Lead Time` — dipakai bila permintaan dan lead time relatif stabil dan konsekuensi *stockout* ringan.
   - Dengan pengaman: `ROP = (Permintaan Harian Rata-rata × Lead Time) + Safety Stock` — dipakai bila permintaan berfluktuasi atau pemasok tidak selalu tepat waktu.
   - **Poin BARU paling kuat (sitasi SAP, lihat E-E-A-T)**: *lead time* dalam rumus ini bukan sekadar waktu kirim. Menurut dokumentasi SAP, *replenishment lead time* untuk material yang dibeli dari luar mencakup **planned delivery time + waktu proses penerimaan barang + waktu proses pembelian**. Konsekuensi quotable: ROP yang hanya menghitung waktu kirim **selalu terlalu rendah** — persetujuan PO internal dan proses penerimaan tetap memakan hari. **JANGAN melebar** ke jenis-jenis lead time (milik `lead-time-c01`).
   - Safety stock disebut sebagai **suku penjumlah saja** — jangan menurunkan rumusnya (milik `safety-stock-c01`); cukup satu klausa + tautan cousin bila relevan.
2. **H2 (praktis/terstruktur — CORE, supporting keyword `rumus reorder point`)**: "Contoh Perhitungan Reorder Point" — *covers*: jawaban langsung 40–60 kata (poin baru: yang membuat perhitungan ROP meleset di lapangan hampir selalu **satuan**, bukan rumusnya). Bagian ini memenuhi janji judul "Contoh Perhitungannya":
   - **Skenario ilustrasi** (wajib dilabeli *ilustrasi*): distributor suku cadang. Permintaan rata-rata **40 unit/hari**; *replenishment lead time* **12 hari**; safety stock yang sudah ditetapkan **90 unit** (angka diberikan, **bukan dihitung** di artikel ini).
   - **Perhitungan bertahap (list bernomor):**
     1. **Tanpa pengaman:** 40 × 12 = **480 unit**.
     2. **Dengan pengaman:** (40 × 12) + 90 = **570 unit**.
     - Poin quotable: selisih **90 unit** persis sebesar buffer-nya — safety stock tidak mengubah logika ROP, ia hanya menggeser titik pemicunya ke atas. Artinya: begitu stok menyentuh 570 unit, PO dibuat — bukan saat gudang terlihat menipis.
   - **Jebakan satuan (ditunjukkan, bukan diperingatkan)**: bila permintaan dicatat **1.200 unit/bulan** lalu langsung dikalikan lead time 12 hari, hasilnya **14.400 unit** — sekitar 25 kali lipat dari angka yang benar. Konversikan dulu: 1.200 ÷ 30 = **40 unit/hari**. Aturannya satu kalimat: satuan permintaan dan satuan lead time harus sama.
   - **Honest hedging (1–2 kalimat, pengganti H2 honest sesuai addendum §2)**: ROP yang dihitung sempurna tetap gagal bila catatan stoknya meleset — sistem memicu PO berdasarkan angka di layar, bukan barang di rak. Di sinilah disiplin [manajemen gudang](https://www.soltius.co.id/id/blog/konsep-warehouse-management-system-yang-wajib-anda-tahu) jadi prasyarat (tautan cousin — tempatkan di sini).
3. **H2 (question-format + tabel)**: "Apa Bedanya Reorder Point dan EOQ?" — *covers*: jawaban langsung 40–60 kata dengan poin BARU: ROP dan EOQ sering dicampur padahal menjawab **dua pertanyaan berbeda dan tidak saling menggantikan** — ROP menjawab *kapan* memesan, EOQ menjawab *berapa banyak*. Lalu **satu tabel ringkas** (kolom: Dimensi | Reorder Point | EOQ — baris: pertanyaan yang dijawab, satuan hasil [level stok vs kuantitas pesanan], input utama, yang terjadi bila salah). Poin quotable: keduanya dipakai **bersama** — ROP menekan tombol, EOQ menentukan ukuran pesanannya. **BATAS KERAS**: jangan menurunkan rumus EOQ (√(2DS/H)); maksimal 1–2 kalimat + baris tabel. Sebutkan kepanjangan sekali: EOQ = *Economic Order Quantity*.
4. **H2 (pendek — lensa sistem + funnel)**: "Ketika Reorder Point Tidak Bisa Lagi Ditulis di Spreadsheet" — *covers*: jawaban langsung 40–60 kata (poin baru: ROP **bukan angka sekali tetap**; ia basi diam-diam begitu permintaan rata-rata atau lead time bergeser, dan tidak ada yang memberi tahu Anda). Lalu 1 paragraf *vendor-teach* netral: di ERP, ROP hidup sebagai parameter di *material master*, bukan sel spreadsheet. Menurut dokumentasi SAP, ada dua cara: **reorder point planning manual** (angka ROP dan safety stock diisi sendiri di material master) dan **otomatis** (sistem menghitung ulang keduanya tiap *forecast run*, berdasarkan *service level* dan *replenishment lead time*); pengadaan terpicu saat **stok + penerimaan terjadwal jatuh di bawah ROP**. Untuk perencanaan lintas produk dan lokasi, perusahaan memakai **SAP Integrated Business Planning (SAP IBP)**. (1–2 kalimat saja soal SAP; **TANPA menyebut Soltius di body**; jangan bahas modul MRP/PP atau mekanika forecast.) **JANGAN sebut kode MRP type (VB/VM/V1/V2)** kecuali researcher mengonfirmasinya dari SAP official — sumber run ini untuk kode tersebut hanya SAP Community (bukan dokumentasi resmi).
5. **FAQ (3 Q&A, jawaban 30–60 kata, tiap jawaban memuat 1 fakta/angka)** — ambil dari PAA, **tanpa menduplikasi H2**:
   - "Apa perbedaan reorder point dan safety stock?" — safety stock adalah besaran bantalannya; ROP adalah titik yang memicu pemesanan. Safety stock menjadi salah satu suku penjumlah ROP: pada ilustrasi artikel ini, buffer 90 unit menaikkan titik pemicu dari 480 menjadi **570 unit**. (Jawaban harus bersandar pada angka KITA, jangan memparafrase FAQ `safety-stock-c01`.)
   - "Apakah reorder point sama dengan stok minimum?" — dalam praktik sering dipakai bergantian, tetapi ROP punya cara hitung yang eksplisit: permintaan selama lead time ditambah safety stock. "Stok minimum" kerap sekadar angka kebiasaan; ROP menautkan titik itu ke lead time dan permintaan aktual.
   - "Berapa sering reorder point perlu dihitung ulang?" — tinjau setiap kali permintaan rata-rata atau lead time bergeser, bukan setahun sekali. Pada *automatic reorder point planning* di SAP, sistem menghitung ulang ROP dan safety stock pada setiap *forecast run*, memakai service level yang ditetapkan di material master.
6. **## Kesimpulan** — ≤80 kata: ROP bukan sekadar rumus, melainkan keputusan tentang lead time mana yang jujur Anda hitung dan seberapa sering angkanya ditinjau. 1 positioning line Soltius (lihat anchor). CTA konsultatif.
7. **Soft website CTA (baris terakhir, terpisah)** — ajakan halus mengunjungi soltius.co.id; anchor produk: **SAP IBP** (per tracker).

(≥1 question-format: H2 #1 & #3 ✓; ≥1 praktis/terstruktur dengan tabel/rumus/list: H2 #1 tabel rumus + H2 #2 list perhitungan bertahap + H2 #3 tabel pembeda ✓; H2 honest DIGANTI honest-hedging di H2 #2 — sesuai style_addendum §2; ≥4 angka spesifik inline: 40 unit/hari, 12 hari, 90 unit, 480 unit, 570 unit, 1.200 unit/bulan, 14.400 unit ✓. **DILARANG menulis {IMAGE_NN} dalam bentuk apa pun** — tabel rumus + list perhitungan + tabel ROP vs EOQ menggantikan seluruh kebutuhan visual, termasuk kurva stok yang biasanya digambar.)

## SAP / partner tech to teach (keyword tidak ada di `product_matrix.md` — framing universal tetap berlaku)

> `reorder point` topik baru/ad-hoc. Mapping diturunkan dari tracker (CTA anchor: **SAP IBP**) + `company_profile.md` (Soltius punya pengalaman rantai pasok di manufaktur/distribusi/perkebunan) + riset run ini. Aturan universal `product_matrix.md` berlaku penuh: **implements-not-builds**, ≤2 self-mention (override addendum §6), tanpa superlatif, tanpa spec karangan.

Konsep yang dijelaskan akurat & vendor-neutral:
- **Reorder point (ROP)** — level stok yang memicu pemesanan ulang; tersusun dari permintaan selama *replenishment lead time* + safety stock.
- **Replenishment lead time (RLT)** — untuk material beli: *planned delivery time* + waktu proses penerimaan barang + waktu proses pembelian (doktrin SAP, terverifikasi run ini). Netral vendor: konsepnya berlaku umum, kebetulan SAP mendokumentasikannya paling eksplisit.
- **EOQ (Economic Order Quantity)** — kuantitas pesanan ekonomis; **hanya dikontraskan**, rumusnya tidak diturunkan.
- **Reorder point planning di SAP (manual vs otomatis)** — ROP sebagai parameter *material master*; pada mode otomatis, ROP + safety stock dihitung sistem tiap *forecast run* berdasarkan *service level* dan RLT; pengadaan terpicu saat stok + penerimaan terjadwal jatuh di bawah ROP. Disebut RINGKAS di H2 #4 (1–2 kalimat).
- **SAP Integrated Business Planning (SAP IBP)** — anchor funnel; sebut nama penuh sekali. Jangan membedah modul-modulnya.

**Fakta yang WAJIB diverifikasi researcher (jangan diklaim tanpa sumber):**
- **Komposisi replenishment lead time** ("planned delivery time + waktu proses penerimaan barang + waktu proses pembelian") — **sudah terverifikasi run ini** via `learning.sap.com` (WebFetch 200 OK, lihat E-E-A-T). Tetap konfirmasi ulang saat menulis; jangan menambah komponen yang tidak disebut sumber.
- **Mekanisme pemicu** ("pengadaan terpicu saat stok + penerimaan terjadwal/*firm receipts* jatuh di bawah ROP") — terverifikasi run ini dari sumber yang sama.
- **Manual vs automatic reorder point planning** + peran *service level* di material master — terverifikasi run ini dari sumber yang sama.
- **Kode MRP type (VB, VM, V1, V2)** — ⚠️ **JANGAN DIPAKAI** kecuali ditemukan di SAP official (`help.sap.com` / `learning.sap.com`). Sumber run ini untuk kode tersebut hanya **SAP Community blog**, yang bukan dokumentasi resmi. Artikel tetap utuh tanpa kode ini — jangan memaksakannya.
- **Definisi baku ROP dari ASCM/APICS** — bila dikutip, konfirmasi teksnya di dalam *ASCM Supply Chain Dictionary* (edisi ke-19); halaman landing `ascm.org` dapat diakses (200 OK) tetapi **tidak menampilkan definisi ROP-nya**. Jangan mengarang bunyi definisi kamus.
- **Angka contoh** (40 unit/hari, RLT 12 hari, safety stock 90 unit, ROP 480/570, 1.200 unit/bulan → 14.400 unit) adalah **ilustrasi buatan** — wajib dilabeli demikian. Aritmetikanya sudah diperiksa strategist dan konsisten; jangan mengubah salah satu angka tanpa menghitung ulang sisanya.
- **JANGAN mengarang benchmark** seperti "rata-rata perusahaan Indonesia kehilangan X% penjualan akibat stockout" atau persentase adopsi ROP tanpa sumber. Bila researcher menemukan statistik stockout/logistik Indonesia yang bersumber jelas (BPS/Bappenas), boleh dipakai maksimal 1 angka — tetapi **jangan mengulang angka biaya logistik 14,29% yang sudah dipakai `lead-time-c01`**.
- **Kandidat sumber lokal (opsional)**: jurnal *BINUS Business Review* Vol. 5 No. 1 (2014), "Analisis Perbandingan Perhitungan Re-Order Point" — muncul di WebSearch, tetapi `neliti.com` mengembalikan **HTTP 403** run ini sehingga isinya **tidak terverifikasi**. Jangan mengutip sebelum benar-benar dibaca.

## Soltius anchor (BATCH OVERRIDE: maks 2 self-mention)

- **1 positioning line di Kesimpulan**: Soltius — SAP Platinum Partner melalui keanggotaan United VARs, berpengalaman sejak 1998 — **mengimplementasikan dan mendampingi** solusi perencanaan rantai pasok SAP seperti SAP IBP untuk perusahaan manufaktur dan distribusi. (Framing: implements/migrates/supports, **NEVER builds/owns**; tanpa superlatif; pilih SATU kredensial, jangan menumpuk. *Catatan:* `safety-stock-c01` memakai kredensial United VARs dengan kalimat yang mirip — **variasikan diksinya**, jangan menyalin.)
- **1 soft website CTA** (baris terakhir): ajakan konsultasi/mengunjungi soltius.co.id — anchor funnel: **SAP IBP** (per tracker).
- **TANPA aside Soltius di tengah body** (style_addendum §6). Sentuhan praktisi di body boleh TANPA nama Soltius (mis. "di lapangan, ROP paling sering meleset bukan karena rumusnya salah, melainkan karena angkanya ditetapkan sekali lalu tidak pernah ditinjau lagi").

## Internal links to place (BATCH OVERRIDE: 2 SAJA — 1 hub + 1 cousin, inline natural, tanpa "BACA JUGA")

> `landing_page` kosong di sheet → hub dipilih strategist (keputusan standing sejak Juni). Kedua URL **sudah diverifikasi resolve/200 OK via WebFetch run ini (2026-07-17)**. Penulis tetap cek ulang saat menulis.

- **Hub (halaman soltius.co.id paling relevan)**: `https://www.soltius.co.id/id/blog/apa-itu-supply-chain-management` — anchor natural: "supply chain management" / "manajemen rantai pasok" — *why*: ROP adalah keputusan pengadaan/persediaan di dalam proses *plan* dan *source* rantai pasok; halaman ini adalah hub SCM tingkat atas milik Soltius dan **sejalan dengan CTA anchor SAP IBP** per tracker. **Diverifikasi 200 OK run ini** (judul: "Kenali Apa itu Supply Chain Management untuk Perusahaan"; membahas 5 proses inti termasuk *source and inventory*; **tidak menyebut reorder point/safety stock** → tidak ada risiko kanibalisasi). Preseden: hub yang sama dipakai `safety-stock-c01` (2026-07) dan lolos QC. Tempatkan di lead atau paruh awal.
- **Cousin**: `https://www.soltius.co.id/id/blog/konsep-warehouse-management-system-yang-wajib-anda-tahu` — anchor natural: "manajemen gudang" — *why*: ROP dipicu oleh angka stok di sistem; bila catatan stok tidak akurat, titik pemicu yang benar pun ikut salah. Tautkan di *honest hedging* H2 #2. **Diverifikasi 200 OK run ini** (membahas WMS, FIFO/LIFO/FEFO; **tidak menyebut reorder point/safety stock/replenishment** → aman). Preseden: dipakai `omnichannel-retail-c01`, `lead-time-c01`, `safety-stock-c01`, `sku-c01` — lolos editor. *Catatan:* halaman ini sedang di-REWRITE di batch yang sama (row 4, `wms-konsep-c01`) tetapi **URL/slug dipertahankan** — tautan tetap valid.

> **⚠️ CATATAN PENTING soal instruksi tracker "tautkan artikel safety stock sebagai sibling/cousin":** URL artikel safety stock (`https://www.soltius.co.id/id/blog/safety-stock-pengertian-rumus-cara-menentukan`) **BELUM LIVE** — WebFetch run ini mengembalikan **HTTP 500**. Artikel `lead-time-c01` juga belum live (`.../apa-itu-lead-time-cara-menghitung` → **HTTP 500**). Batch conditional 2026-06/2026-07 memang belum dipublikasikan (konsisten dengan catatan tracker: curator belum jalan). **Karena itu cousin diisi halaman WMS yang terbukti live.** Begitu `safety-stock-c01` terbit, **cousin sebaiknya ditukar** ke artikel safety stock (sibling paling natural: safety stock = suku penjumlah dalam rumus ROP). Serahkan keputusan swap ke editor/curator saat publikasi; **jangan menautkan URL yang belum resolve.**

(2 tautan, keduanya existing & natural inline. Tidak ada own-hub blog khusus ROP karena topik baru — dicatat sesuai mode conditional.)

## E-E-A-T signals to embed

- **Angka/fakta spesifik** (≥4 angka inline per addendum §4): permintaan **40 unit/hari**; *replenishment lead time* **12 hari**; safety stock **90 unit**; ROP tanpa pengaman **480 unit**; ROP dengan pengaman **570 unit**; jebakan satuan **1.200 unit/bulan → 14.400 unit** (vs konversi benar **40 unit/hari**). Semua berlabel ilustrasi, aritmetika terverifikasi. JANGAN mengarang benchmark industri.
- **Authoritative sources to cite (≥2 — sitasi final 1–2 inline di artikel):**
  1. **SAP Learning — "Using Forecast in Reorder Point Planning"** (Consumption-Based Planning and Forecasting in SAP Cloud ERP) — `https://learning.sap.com/courses/consumption-based-planning-and-forecasting-in-sap-cloud-erp/using-forecast-in-reorder-point-planning` — **SAP official; sudah diverifikasi run ini (WebFetch, 200 OK)**. Halaman menyatakan: reorder point tersusun dari safety stock + permintaan rata-rata selama *replenishment lead time*; pengadaan terpicu saat stok + *firm receipts* jatuh di bawah reorder point; pada mode manual, ROP & safety stock diisi di *material master*, pada mode otomatis sistem menghitungnya saat *forecast run*; *service level* ditetapkan di material master sebagai input perhitungan safety stock; dan **RLT material beli = planned delivery time + waktu proses penerimaan barang + waktu proses pembelian**. **Ini sumber utama** — pakai di H2 #1 (komposisi RLT) dan H2 #4 (manual vs otomatis).
  2. **ASCM (Association for Supply Chain Management) — Supply Chain Dictionary, edisi ke-19** — `https://www.ascm.org/learning-development/certifications-credentials/dictionary/` — badan sertifikasi rantai pasok global (dahulu APICS), otoritas terminologi. **Halaman diverifikasi 200 OK run ini**, tetapi halaman landing **tidak memuat definisi ROP** → researcher wajib membuka kamusnya sebelum mengutip bunyi definisi. Preseden: dipakai `lead-time-c01`. Pakai bila ingin menyandarkan definisi baku ROP pada standar industri, bukan blog vendor.
  3. (Cadangan, bila salah satu di atas tidak dapat diakses saat penulisan) **SAP Help Portal — "Reorder Point Planning"** — `https://help.sap.com/docs/SAP_S4HANA_ON-PREMISE/fe39e10a9a864a8f8dc9537704f0fa13/5697b6535fe6b74ce10000000a174cb4.html`. *Catatan: WebFetch run ini hanya mengembalikan judul halaman (konten dirender JavaScript, pola yang sama dengan run `sku-c01`) — researcher perlu membukanya di browser untuk mengutip.*
- **First-party Soltius angle**: pengalaman implementasi dan pendampingan perencanaan rantai pasok SAP (manufaktur, distribusi, perkebunan termasuk industri vertikal Soltius per `company_profile.md`) — dipakai di positioning line Kesimpulan. Tanpa nama klien atau angka proyek karangan.

## AI Overview & GEO optimization (seo_playbook §2a, dipadatkan per addendum §5)

- **Definition snippet blockquote** setelah lead — "Ringkasnya:" 40–60 kata, arah: *"Ringkasnya: reorder point (ROP) adalah level stok yang menjadi pemicu untuk memesan ulang — bukan batas stok minimum, melainkan titik ketika sisa barang diperkirakan hanya cukup untuk menutup kebutuhan selama menunggu pesanan datang. Nilainya tersusun dari permintaan selama lead time ditambah safety stock, sehingga dihitung dari data, bukan ditebak."* (writer boleh poles, jaga 40–60 kata. **INI satu-satunya definisi** — body dilarang menyatakannya ulang dengan kata lain, termasuk di jawaban langsung tiap H2.)
- **Jawaban langsung 40–60 kata segera setelah TIAP H2** berisi poin baru milik H2 itu (dua bentuk rumus & kriteria memilih; satuan sebagai penyebab utama salah hitung; ROP vs EOQ menjawab dua pertanyaan berbeda; ROP bukan angka sekali tetap), **BUKAN** parafrase snippet.
- **Satu paragraf = satu poin quotable & verifiable.**
- **Entity list** (nama penuh saat sebutan pertama, akronim di-expand sekali): reorder point (ROP), safety stock, replenishment lead time (RLT), planned delivery time, EOQ (Economic Order Quantity), stockout, material master, service level, forecast run, MRP (Material Requirements Planning), SAP Integrated Business Planning (SAP IBP), ASCM.
- **Format match**: tabel untuk dua bentuk rumus (H2 #1); list bernomor untuk perhitungan bertahap (H2 #2 — cocok untuk *HowTo*/featured snippet); tabel untuk pembeda ROP vs EOQ (H2 #3); prosa untuk lensa sistem (H2 #4). Jangan paksa elemen berlebih hingga melampaui 1000 kata.
- **FAQ**: 3 Q&A, parseable FAQPage schema; `dateModified` akurat di meta block.

## Data captured this run

- **Source(s)**: WebSearch (Google ID, 2026-07-17, 4 kueri) — peta pesaing "reorder point adalah" / "rumus reorder point", PAA turunan, ROP vs EOQ, kesalahan satuan. WebFetch: `learning.sap.com/.../using-forecast-in-reorder-point-planning` (✅ 200 — sumber utama, fakta RLT & manual/otomatis), `ascm.org/.../dictionary` (✅ 200, landing saja), `soltius.co.id/id/blog/apa-itu-supply-chain-management` (✅ 200), `soltius.co.id/id/blog/konsep-warehouse-management-system-yang-wajib-anda-tahu` (✅ 200), `cdn.training.sap.com` S4525 course PDF (✅ 200 — hanya judul pelajaran, lemah), `help.sap.com` Reorder Point Planning (⚠️ hanya judul — JS-rendered), `learning.sap.com/.../performing-automatic-reorder-point-planning-1` (❌ 404), `learning.sap.com/learning-journeys/...` (❌ 404), `neliti.com` BINUS paper (❌ 403), `soltius.co.id/id/blog/safety-stock-pengertian-rumus-cara-menentukan` (❌ 500 — belum live), `soltius.co.id/id/blog/apa-itu-lead-time-cara-menghitung` (❌ 500 — belum live). WebFetch SERP Google **terblokir** (halaman error/consent) — fallback WebSearch sesuai SOP `CLAUDE.md` §11.
- **Apr 2026 rank** (from report): `n/a` — keyword di luar 6 keyword `seo_report_apr2026.md` (topik conditional/ad-hoc baru).
- **Volume / KD / trend**: `n/a (Ahrefs not connected)`. Sinyal kualitatif: SERP ID sangat padat (12+ hasil dari Mekari Jurnal, Accurate, HashMicro, PRIEDS, Kledo, Majoo, Folio POS, Weefer, dibimbing.id, Bee, Biteship, DealPOS, asdf.id) → volume definisional/rumus jelas ada; **semua berformat "definisi + manfaat + rumus + satu contoh" untuk UMKM** → beatable dengan komposisi RLT bersitasi SAP + jebakan satuan beraritmetika + pemisahan ROP/EOQ + lensa sistem + GEO.
- **SERP features present**: explainer definisi + rumus mendominasi; PAA + AI Overview sangat mungkin aktif untuk kueri "…adalah"/"rumus…" ini (tidak terkonfirmasi langsung — scrape terblokir).
- **cache_source**: `n/a` — mode conditional `/single-article`; riset ditangkap inline di brief ini (tanpa cache per-keyword bulanan).

## Notes for SME researcher

- **Dossier RINGKAS saja** — artikel target ~900 kata, 4 H2 ramping. Jangan kirim material untuk 1.650 kata.
- **Sumber utama sudah ditemukan & terverifikasi**: `learning.sap.com/courses/consumption-based-planning-and-forecasting-in-sap-cloud-erp/using-forecast-in-reorder-point-planning`. Konfirmasi ulang keempat fakta yang diambil darinya (komposisi RLT; pemicu stok + *firm receipts* < ROP; manual vs otomatis; service level di material master). **Jangan menambah komponen RLT yang tidak disebut sumber.**
- **JANGAN memakai kode MRP type (VB/VM/V1/V2)** kecuali ditemukan di SAP official — run ini hanya menemukannya di SAP Community (bukan dokumentasi resmi). Artikel tidak membutuhkannya.
- Bila mengutip definisi baku ROP dari **ASCM Supply Chain Dictionary** (edisi ke-19), buka kamusnya dulu — halaman landing `ascm.org` tidak memuat definisinya. Jangan mengarang bunyi definisi.
- **Periksa aritmetika contoh** (40 × 12 = 480; 480 + 90 = 570; 1.200 ÷ 30 = 40; 1.200 × 12 = 14.400). Semua sudah diverifikasi strategist — bila salah satu angka diubah, hitung ulang seluruhnya.
- **Boundary dedup (MENGIKAT — lihat "Distinct angle vs. history")**: JANGAN menyediakan material tentang jenis/rumus/pengurangan lead time, lead time vs cycle time, cumulative lead time, DDMRP (milik `lead-time-c01` 2026-06); JANGAN menyediakan rumus/derivasi safety stock, tabel Z-score, service level 95%/99%, biaya simpan 15–25% (milik `safety-stock-c01` 2026-07); JANGAN rumus EOQ (disisakan untuk artikel EOQ); JANGAN mekanika MRP/modul PP (milik `mrp-c01`, `sap-pp-c01`); JANGAN rasio perputaran persediaan (milik `inventory-turnover-c01`, row 12 batch ini).
- **Jangan mengulang angka biaya logistik Indonesia 14,29%** — sudah dipakai `lead-time-c01`.
- Cek 2 URL internal (`blog/apa-itu-supply-chain-management` + `blog/konsep-warehouse-management-system-yang-wajib-anda-tahu`) tetap 200/OK saat penulisan. URL artikel safety stock & lead time **belum live (HTTP 500)** — jangan ditautkan.

## Notes for future strategist runs

Artikel ini SENGAJA TIDAK mencakup (untuk menghindari kanibalisasi + disisakan untuk artikel lain):
- **EOQ (Economic Order Quantity) dan rumusnya** (√(2DS/H), trade-off biaya pesan vs biaya simpan, lot-sizing) — hanya dikontraskan 1–2 kalimat di sini; **kandidat artikel tersendiri** yang kini makin matang (sudah dicadangkan `safety-stock-c01` & `mrp-c01`, dan tracker row 8 memintanya sebagai cluster-link).
- **Periodic review system (sistem P) vs continuous review (sistem Q)** — kebijakan pengisian ulang alternatif tempat ROP tidak dipakai; pembeda menarik, sengaja ditahan.
- **Min-max inventory / two-bin system** — mekanisme pemicu alternatif; layak artikel sendiri.
- **ABC analysis / segmentasi service level per kelas item** — disebut maksimal 1 frasa; sudah dicadangkan brief lain.
- **SAP IBP sebagai produk** (modul, deployment, S&OP) — brief ini hanya memakainya sebagai anchor funnel 1–2 kalimat; artikel decision-stage IBP tersendiri masih terbuka.
- **Automatic reorder point planning secara teknis** (konfigurasi, model forecast, MRP type codes) — terlalu teknis untuk 900 kata; kandidat artikel praktisi SAP tersendiri.
- **Dead stock / stok mati akibat ROP kelewat tinggi** — sisi biaya; disinggung maksimal 1 klausa.

## Format overrides (batch conditional 2026-08)

Restating dari `conditional/2026-08/style_addendum.md` — **MENGIKAT** untuk researcher, writer, editor, validator:

- **Panjang: 800–1000 kata (target ~900)** — hitungan body H1 s/d CTA, di luar frontmatter; `target_word_count: 900` di frontmatter, isi `word_count` aktual setelah menulis. <800 terlalu tipis; >1000 gagal (pangkas dengan membuang kalimat pengantar/transisi kosong dan contoh redundan, BUKAN memampatkan semua kalimat jadi telegram — ritme tetap bervariasi, paragraf 1–4 kalimat).
- **TANPA image placeholder** — dilarang menulis `{IMAGE_NN}` dalam bentuk apa pun; stage image-planner DILEWATI; tidak ada `images.json`. Konsep visual (kurva stok turun menuju titik pemicu, perbandingan ROP/EOQ) disampaikan lewat **tabel/list**.
- **FAQ: 2–3 Q&A** (brief ini menetapkan **3**); jawaban 30–60 kata, tiap jawaban memuat 1 fakta/angka; ambil dari PAA di atas; **tanpa menduplikasi isi H2**.
- **Internal link: TEPAT 2** — 1 hub (`blog/apa-itu-supply-chain-management`) + 1 cousin (`blog/konsep-warehouse-management-system-yang-wajib-anda-tahu`), inline natural, tanpa "BACA JUGA". Sitasi eksternal otoritatif 1–2 inline (SAP Learning wajib; ASCM opsional).
- **Definisi HANYA SEKALI** — di definition snippet "Ringkasnya:" (40–60 kata) setelah lead. Body/H2 **DILARANG** mengulang definisi snippet dengan kata lain, termasuk di jawaban langsung 40–60 kata setelah tiap H2. **Tidak ada H2 definitional "Apa Itu Reorder Point?"** — judul tidak menjanjikan "Pengertian" dan tidak ada info baru yang membenarkannya.
- **Prosa padat on-point** — tanpa paragraf roadmap, tanpa transisi kosong, tanpa pembuka klise; em-dash ≤2; tanpa adjektiva hype (anti-AI `style_guide.md` §5 berlaku penuh).
- **Lead ≤80 kata** (pain konkret + keyword `reorder point` + janji artikel).
- **Kesimpulan ≤80 kata** + 1 positioning line Soltius; **soft website CTA (soltius.co.id) = baris paling akhir**, terpisah dari Kesimpulan. **Maks 2 mention Soltius total.**
- **3–4 H2** (brief ini menetapkan **4**; ≥1 question-format → #1 & #3; ≥1 praktis/terstruktur dengan tabel/rumus/list → #1, #2, #3); **≥4 angka spesifik inline**; jawaban langsung 40–60 kata setelah tiap H2 berisi poin BARU milik H2 itu.
- **Framing Soltius** (`style_guide.md` §11): implementator/pendamping SAP — **implements, migrates, supports — NEVER builds/owns**. Disiplin sitasi §10: JANGAN mengarang angka, pasal, harga, atau spec SAP.
