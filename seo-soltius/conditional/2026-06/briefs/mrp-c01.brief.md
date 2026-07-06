---
keyword: "mrp adalah"
keyword_slug: "mrp-adalah"
landing_page: ""   # no own-hub page exists for "MRP" — top-funnel magnet; links to related hubs + funnels to SAP S/4HANA Manufacturing (see Internal links)
month: "2026-06"
brief_id: "mrp-c01"
angle: "apa-itu-mrp-material-requirements-planning-cara-kerja-input-proses-output"
angle_hash: "sha1:72fd41cd25ae"   # sha1(mrp-adalah | apa-itu-mrp-...-input-proses-output | sorted-subtopics)
search_intent: "informational"
target_word_count: 1850   # top-funnel format-dense magnet; ACCEPT up to ~2100 per user policy 2026-06-17 (only flag <1300 thin / >2200 bloated)
strategist_run_date: "2026-06-17"
mode: "conditional-given-angle"
---

# Apa Itu MRP (Material Requirements Planning) dan Cara Kerjanya

<!-- H1 = given title, used AS-IS (angle GIVEN by user, not generated). Primary keyword "MRP" in first 9 chars; "Material Requirements Planning" glossed in title. Meta title below trimmed to <=60. -->

**Meta title (≤60):** Apa Itu MRP (Material Requirements Planning) & Cara Kerjanya
**Meta description (140–160):** MRP adalah sistem perencanaan kebutuhan material untuk produksi. Pelajari pengertian, input-proses-output, cara kerja, dan bedanya MRP, MRP II, serta ERP.
**Slug (≤60):** apa-itu-mrp-material-requirements-planning

## Hook hypothesis

Setiap manajer produksi dan PPIC (Production Planning & Inventory Control) menghadapi pertanyaan yang sama setiap minggu: bahan apa yang harus dipesan, berapa banyak, dan kapan — agar lini produksi tidak berhenti karena kekurangan komponen, tetapi gudang juga tidak penuh stok yang menumpuk biaya. Di situlah **MRP (Material Requirements Planning)** menjawab. Artikel ini adalah explainer **top-funnel** murni: ia menjelaskan tuntas apa itu MRP, logika **input-proses-output**-nya, cara kerjanya langkah demi langkah, dan bedanya dengan MRP II serta ERP — dengan contoh angka yang bisa langsung dipahami. Nilai diberikan dulu sepenuhnya; baru di penutup, pembaca yang sistem MRP-nya sudah mentok (banyak SKU, banyak level BOM, data tersebar) diarahkan ke konteks **production planning di SAP S/4HANA Manufacturing** — solusi yang Soltius **implementasikan dan dukung, bukan buat**. Kredibilitas Soltius lahir dari pengalaman implementasi SAP lintas industri manufaktur (Automotive, Consumer Products, Mill Products), bukan klaim superlatif.

## Primary keyword

`mrp adalah`

**Supporting keyword (eksplisit dari brief):** `material requirement planning`

## Secondary / LSI keywords (8–12)

- material requirements planning (kepanjangan MRP)
- cara kerja MRP
- input proses output MRP
- Bill of Materials (BOM)
- Master Production Schedule (MPS) / jadwal produksi induk
- Inventory Status File / catatan persediaan
- netting, lotting, offsetting, exploding
- planned order schedule (jadwal pesanan terencana)
- MRP vs ERP / perbedaan MRP dan ERP
- MRP II (Manufacturing Resource Planning)
- perencanaan produksi (production planning)
- lead time / waktu ancang-ancang

## Search intent & SERP feature targets

- **Stage**: awareness (top-funnel definitional + "cara kerja" / how-it-works; intent edukasi)
- **Format**: definitional explainer + diagram input-proses-output + langkah bernomor + tabel perbandingan (MRP vs MRP II vs ERP) + contoh perhitungan
- **Surface targets**:
  - [x] AI Overview (Google SGE) / AI-engine citation (Perplexity, ChatGPT) — definisi 40–60 kata + langkah proses quotable
  - [x] Featured Snippet (definisi + numbered list langkah netting→exploding)
  - [x] People Also Ask
  - [ ] Image Pack (skip — B2B)

## SERP landscape (live scrape today)

> **Catatan metode:** WebFetch langsung ke `google.com/search?q=mrp+adalah&hl=id&gl=id` **DIBLOKIR** hari ini (mengembalikan halaman error/aksesibilitas Google, bukan hasil SERP). Maka SERP + PAA di bawah direkonstruksi via **WebSearch fallback** (4 query) — sesuai prosedur degradasi graceful (CLAUDE.md §11). Volume/KD: `n/a (Ahrefs not connected)`.

**Top pages yang bersaing (organik, dari WebSearch):**
1. `https://kledo.com/blog/mrp-adalah/` — Kledo — *angle*: definisi + fungsi + konsep + cara kerja; sudut software akuntansi/inventory SME.
2. `https://www.mas-software.com/blog/mrp-adalah` — MAS Software — *angle*: cara kerja, tujuan, prosedur; sudut ERP/manufaktur lokal.
3. `https://www.impactfirst.co/id/c/material-requirement-planning-mrp` — ImpactFirst — *angle*: cara kerja & penerapan; sudut software bisnis.
4. `https://ilmumanajemenindustri.com/pengertian-mrp-material-requirement-planning-tujuan-penerapannya/` — Ilmu Manajemen Industri — *angle*: definisi + tujuan, **sudut teknik industri/akademik** (paling kredibel secara konseptual).
5. `https://www.prieds.com/post/material-requirement-planning-mrp-pengertian-tujuan-dan-prosedur` + `https://8thinktank.com/material-requirement-planning/` — PRIEDS / Think Tank Solusindo — *angle*: pengertian-tujuan-prosedur standar.
6. `https://mekari.com/blog/perbedaan-mrp-dan-erp/` & `https://www.telkomsel.com/enterprise/insight/blog/mrp-vs-erp` — Mekari / Telkomsel Enterprise — *angle*: fokus **perbedaan MRP vs ERP** (sub-intent kuat).

**Gaps to exploit** (yang TIDAK dilakukan baik oleh top pages):
- Banyak menyebut langkah **netting–lotting–offsetting–exploding** sebagai daftar istilah, tapi sedikit yang menyajikannya sebagai **alur input-proses-output yang utuh + contoh angka berantai** (kami buat diagram + contoh: gross → on-hand → net requirement → planned order). Ini sudut diferensiasi utama sesuai permintaan brief.
- Sebagian besar mencampur "MRP" (metode) dengan "software MRP" tanpa membedakan **MRP → MRP II → ERP** sebagai evolusi historis yang jelas — kami buat **tabel perbandingan** yang rapi (cakupan, fokus, kapan dipakai).
- Hampir tidak ada yang membahas **keterbatasan MRP klasik secara jujur** (asumsi lead time tetap, sensitif data BOM/persediaan kotor, "nervousness"/replanning, hanya material — bukan kapasitas) — sudut honest/counter-conventional kami, sekaligus jembatan natural ke MRP II/ERP modern (SAP S/4HANA: MRP Live & Predictive MRP).
- Sumber otoritatif jarang dikutip; kami sitir kerangka dari ASCM/APICS (definisi standar) + SAP official (production planning S/4HANA) + 1 statistik manufaktur Indonesia (BPS/Kemenperin).

**People Also Ask / "Orang juga bertanya" (dari WebSearch — direkonstruksi):**
- Apa yang dimaksud dengan MRP (Material Requirements Planning)?
- Apa kepanjangan dari MRP?
- Bagaimana cara kerja MRP?
- Apa saja input (data) yang dibutuhkan MRP? (MPS, BOM, Inventory Status File)
- Apa output dari sistem MRP?
- Apa perbedaan MRP dan ERP?
- Apa itu MRP II?
- Apa tujuan dan manfaat penerapan MRP?
- Apa saja kelemahan/keterbatasan MRP?

## Distinct angle vs. history

- **Closest prior article in this cluster**: **tidak ada artikel "MRP" di `articles_history/`** (51 artikel committed diperiksa via grep `mrp|material requirement|production planning` → **0 hasil**). Tetangga topik terdekat: klaster **digital manufacturing** (`digital-manufacturing-01..05` — smart factory, integrasi MES-ERP, OEE, predictive maintenance) dan klaster **warehouse management system** (`warehouse-management-system-01..04` — pemilihan & integrasi sistem gudang/EWM, inventory visibility). Brief conditional `lead-time-c01` juga bersinggungan (reorder point/safety stock) tapi itu metrik waktu, bukan metode perencanaan material.
- **How this brief differs**: Artikel ini adalah explainer **konsep/metode MRP** (definisi, input-proses-output, cara kerja, MRP vs MRP II vs ERP) — bukan tentang memilih sistem gudang (WMS), bukan tentang smart factory/MES, bukan tentang metrik lead time. Sudut, kata kunci primer (`mrp adalah`), dan kerangka (netting/lotting/offsetting/exploding) tidak tumpang tindih dengan artikel mana pun.
- **Subtopic overlap (Jaccard) dengan tetangga terdekat**:
  - vs `integrasi-mes-erp-digital-manufacturing-lantai-produksi` (MES-ERP): irisan hanya konteks "ERP/produksi" → **~0.06**.
  - vs `lead-time-c01` (reorder point/safety stock): irisan "persediaan/lead time" → **~0.10**.
  - Keduanya **< 0.4 → LOLOS.**
- **Dedup verdict**: **DISTINCT — NEW ARTICLE.** Aman diproduksi; **bukan rewrite**.

## Article skeleton — H2s the writer should expand

> Tiap H2 utama WAJIB diikuti **jawaban langsung 40–60 kata** sebelum elaborasi (GEO extractability, seo_playbook §2a). ≥1 H2 format pertanyaan; ≥1 H2 jujur/counter-conventional. NO "BACA JUGA" — tautan internal natural inline.

1. **H2 (definitional)**: "Apa Itu MRP (Material Requirements Planning)?" — *covers*: definisi inti 40–60 kata; kepanjangan MRP; MRP sebagai sistem perencanaan kebutuhan material untuk produksi; sejarah singkat (1960-an, era komputerisasi manufaktur). **Sertakan definition snippet di sini.**
2. **H2 (question-format)**: "Bagaimana Cara Kerja MRP? Logika Input – Proses – Output" — *covers*: kerangka utama yang diminta brief. **Sub-bagian:**
   - **Input MRP** — 3 data utama: **Master Production Schedule (MPS)**, **Bill of Materials (BOM)**, **Inventory Status File** (stok on-hand, on-order, safety stock). (Gunakan bullet list + placeholder diagram.)
   - **Proses MRP** — 4 langkah **bernomor**: **Netting** (kebutuhan bersih = kebutuhan kotor − persediaan), **Lotting** (ukuran lot pemesanan), **Offsetting** (mundurkan dengan **lead time** untuk tentukan waktu rilis pesanan), **Exploding** (turunkan ke komponen level di bawah lewat BOM).
   - **Output MRP** — **Planned Order Schedule** (jadwal pesanan terencana) + **Order Release Report**. (Placeholder `{IMAGE_01}` = diagram input-proses-output.)
3. **H2 (worked example)**: "Contoh Sederhana Cara Kerja MRP" — *covers*: satu produk dengan BOM 2 level; tabel gross requirement → on-hand → net requirement → planned order release (digeser lead time). Contoh angka **ilustratif** (beri label "ilustrasi"). Format: tabel + langkah bernomor (snippet/GEO bait).
4. **H2 (comparison/table)**: "MRP, MRP II, dan ERP: Apa Bedanya?" — *covers*: evolusi historis; **TABEL** (dimensi: cakupan · fokus · data yang dikelola · contoh · kapan relevan). Tegaskan MRP = perencanaan material; **MRP II (Manufacturing Resource Planning)** menambah kapasitas/keuangan/tenaga kerja; **ERP** mengintegrasikan seluruh fungsi bisnis. (Menangkap sub-intent "MRP vs ERP" yang kuat di SERP.)
5. **H2 (honest / counter-conventional)**: "Keterbatasan MRP Klasik yang Jarang Dibahas" — *covers*: asumsi **lead time tetap**; sangat **sensitif terhadap akurasi data** BOM & persediaan ("garbage in, garbage out"); **system nervousness** (perubahan kecil memicu replanning besar); hanya merencanakan **material, bukan kapasitas mesin**; berbasis batch. Jembatan natural: inilah alasan MRP berkembang ke MRP II/ERP dan ke **MRP modern di SAP S/4HANA** (MRP Live yang real-time + Predictive MRP/pMRP untuk simulasi). (Trust-builder + funnel.)
6. **H2 (practical)**: "Manfaat MRP dan Kapan Perusahaan Membutuhkannya" — *covers*: manfaat (cegah stockout, kurangi kelebihan stok, efisiensi biaya & jadwal); kapan MRP manual/spreadsheet sudah tidak cukup (banyak SKU, BOM multi-level, banyak pemasok, permintaan fluktuatif) → kapan butuh sistem terintegrasi.
7. **## Kesimpulan** — rangkum: MRP = jantung perencanaan material; pahami input-proses-output, cara kerja, dan batasannya; di skala kompleks, MRP hidup di dalam ERP modern.
8. **Soft CTA** (paragraf TERPISAH setelah Kesimpulan) — undang kunjungan ke soltius.co.id untuk diskusi production planning di SAP S/4HANA Manufacturing. (Lihat Soltius anchor.)
9. **FAQ** (5–8) — lihat daftar di bawah.

(≥1 H2 question-format = #2. ≥1 H2 honest/counter-conventional = #5. Terpenuhi.)

## SAP / partner tech to teach (from product_matrix.md + research)

> "mrp adalah" bukan keyword di `product_matrix.md` (artikel ad-hoc). Pemetaan SAP diturunkan dari brief (`CTA = SAP S/4HANA Manufacturing`) + riset; framing universal matrix tetap berlaku: **implements-not-builds, ≤3 self-mentions, no superlatives, no invented specs**. Baris matrix terdekat untuk konteks: **#2 digital manufacturing** (S/4HANA Production Planning/PP).

Konsep yang boleh diajarkan **vendor-neutral** di body (jangan menjejalkan SAP di tengah artikel top-funnel):
- Inti netral vendor: MRP, MPS, BOM, Inventory Status File, netting/lotting/offsetting/exploding, planned order schedule, MRP II, lead time, lot sizing — **semua netral**.
- Baru di H2 #5 dan penutup, perkenalkan **production planning modern** sebagai disiplin, lalu **SAP S/4HANA Manufacturing / modul Production Planning (PP)** sebagai contoh bagaimana MRP dijalankan dalam ERP cloud.

**Fakta SAP yang TERVERIFIKASI (gunakan nama persis ini; peneliti konfirmasi ulang — jangan mengarang):**
- **SAP S/4HANA** menjalankan MRP dalam modul **Production Planning (PP)**.
- Dua mode MRP di S/4HANA: **classic MRP** dan **MRP Live** (berbasis HANA, jauh lebih cepat untuk material kompleks/banyak, mengurangi risiko perencanaan dengan data usang). (Sumber: SAP Learning / SAP-PRESS.)
- **Predictive MRP (pMRP)** — alat simulatif untuk perencanaan jangka menengah/kapasitas. (Sumber: SAP.)
- Posisikan SAP sebagai yang **Soltius implementasikan**, bukan buat/miliki.

**Facts the researcher must verify:** nama "MRP Live", "classic MRP", "Predictive MRP (pMRP)", modul "Production Planning (PP)" via help.sap.com / learning.sap.com (penamaan modul SAP berevolusi); definisi standar "MRP" dari **ASCM/APICS**; langkah netting/lotting/offsetting/exploding (sumber teknik industri tepercaya). Jangan kutip angka "rata-rata pengurangan inventory X%" tanpa sumber.

## Soltius anchor (max 2–3 self-mentions; usually the closing)

- **Service/credential to anchor the CTA**: Soltius sebagai **SAP Platinum Partner** (via United VARs) dengan pengalaman implementasi manufaktur lintas industri (Automotive, Consumer Products, Mill Products) yang **mengimplementasikan dan mendukung SAP S/4HANA Manufacturing (Production Planning)** — *placement*: **closing/CTA saja**.
- Framing wajib: Soltius **mengimplementasikan, mengintegrasikan, dan mendukung** SAP — **bukan membuat/memiliki** software-nya.
- Optional 1 mid-article aside: boleh 1 kalimat ringan di H2 #5/#6 ("dalam praktik implementasi di lantai produksi…") jika natural. **Total ≤2 self-mention.**
- ❌ Hindari: superlatif ("terbaik/nomor satu"), service-dump, klaim Soltius membuat SAP.

## Internal links to place (NO "BACA JUGA" — natural inline; ~3 links)

> Tidak ada hub khusus "MRP" (top-funnel magnet, `landing_page` kosong). Maka: **tidak ada own-hub link**; pakai **3 hub/halaman Soltius yang sudah ada & relevan** sebagai tautan inline natural, dengan funnel menuju **SAP S/4HANA Manufacturing / production planning**.

- **Link 1 (produksi / lantai pabrik — konteks production planning):** `https://www.soltius.co.id/id/blog/digital-manufaktur-sistem` — anchor inline: "sistem manufaktur digital" / "digitalisasi lantai produksi" — *why*: MRP adalah inti perencanaan produksi; halaman ini sudah membahas perencanaan→rantai pasok di pabrik. Tautkan di H2 #2 atau #6. **(Verified loads — WebFetch OK.)**
- **Link 2 (persediaan / gudang — Inventory Status File & output pesanan):** `https://www.soltius.co.id/id/blog/konsep-warehouse-management-system-yang-wajib-anda-tahu` — anchor inline: "manajemen gudang" / "akurasi data persediaan" — *why*: input MRP (Inventory Status File) dan output (pengeluaran pesanan) hidup di tingkat persediaan/gudang; akurasi stok menentukan kualitas MRP. Tautkan di sub-bagian Input (H2 #2) atau H2 #5.
- **Link 3 / funnel (fondasi ERP modern — jembatan ke CTA):** `https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud` — anchor inline: "ERP berbasis cloud" / "sistem ERP modern seperti SAP S/4HANA" — *why*: MRP modern (MRP Live/pMRP) berjalan di dalam ERP cloud terkini; jembatan natural dari "keterbatasan MRP klasik" (H2 #5) ke CTA production planning S/4HANA.

**Funnel CTA target (produk):** **SAP S/4HANA Manufacturing / Production Planning (PP)** — diarahkan via penutup ke konsultasi di soltius.co.id (bukan URL blog tersendiri; Soltius mengimplementasikan S/4HANA Manufacturing).

(Total = 3 tautan internal natural-inline → memenuhi checklist seo_playbook §3 "≥3 internal links" tanpa own-hub.)

## E-E-A-T signals to embed

- **Angka/fakta spesifik untuk dikutip**: contoh perhitungan netting konkret (mis. kebutuhan kotor 1.000 unit − persediaan 300 − terjadwal-diterima 100 = kebutuhan bersih 600; planned order release digeser mundur lead time 5 hari) — beri label **"ilustrasi"**. Sejarah singkat MRP (1960-an) bila bersumber.
- **Sumber otoritatif (suggest ≥2; ini WAJIB ≥2 per brief):**
  1. **ASCM/APICS (Association for Supply Chain Management)** — definisi standar "Material Requirements Planning" / "Bill of Materials" dari ASCM Supply Chain Dictionary (peneliti cari URL resmi) — sumber konseptual paling kredibel.
  2. **SAP official** — `https://learning.sap.com/` (kursus "Understanding MRP in SAP S/4HANA" / MRP Live) atau `https://www.sap.com/products/scm.html` — untuk production planning & MRP Live/pMRP di S/4HANA.
  3. Opsional statistik Indonesia: **BPS** atau **Kemenperin** (kontribusi/pertumbuhan sektor manufaktur) untuk konteks relevansi — jika ber-sumber & ber-tahun jelas.
- **First-party Soltius angle**: pengalaman implementasi SAP di industri manufaktur (Automotive/Consumer Products/Mill Products dari company_profile) — sebut "dalam praktik implementasi" sekali, jujur, tanpa angka klien yang dikarang.

## AI Overview & GEO optimization (seo_playbook §2a)

- **Question-first + extractable**: setiap H2 utama dibingkai sebagai pertanyaan/diawali jawaban langsung; tulis blok **40–60 kata** persis setelah tiap H2 (umpan sitasi GEO).
- **Definition snippet (40–60 kata)** — siapkan di awal H2 #1, contoh: *"MRP (Material Requirements Planning) adalah sistem perencanaan kebutuhan material yang menghitung jenis, jumlah, dan waktu pengadaan bahan baku serta komponen untuk memenuhi jadwal produksi. MRP mengubah rencana produksi induk menjadi rencana pembelian dan pembuatan komponen, sehingga material tersedia tepat waktu tanpa kelebihan stok."*
- **Planned 40–60-word answers per H2 (writer harus tulis serupa):**
  - *H2 #2 (cara kerja):* "MRP bekerja dengan tiga input — Master Production Schedule (MPS), Bill of Materials (BOM), dan Inventory Status File — lalu memprosesnya melalui netting, lotting, offsetting, dan exploding. Hasilnya berupa Planned Order Schedule: jadwal kapan dan berapa banyak material harus dipesan atau diproduksi untuk setiap level komponen."
  - *H2 #4 (MRP vs MRP II vs ERP):* "MRP merencanakan kebutuhan material. MRP II (Manufacturing Resource Planning) memperluasnya dengan kapasitas mesin, tenaga kerja, dan keuangan. ERP mengintegrasikan seluruh fungsi bisnis—keuangan, SDM, penjualan, hingga produksi—dalam satu sistem. Singkatnya: MRP adalah bagian dari MRP II, dan MRP II adalah cikal bakal modul manufaktur dalam ERP."
  - *H2 #5 (keterbatasan):* "MRP klasik mengasumsikan lead time tetap dan sangat bergantung pada akurasi data BOM serta persediaan—data yang salah menghasilkan rencana yang salah. MRP juga merencanakan material, bukan kapasitas, dan rentan terhadap replanning berlebih. Keterbatasan inilah yang mendorong evolusi ke MRP II, ERP, dan MRP real-time seperti MRP Live di SAP S/4HANA."
- **Entity list (sebut eksplisit)**: MRP, Material Requirements Planning, Master Production Schedule (MPS), Bill of Materials (BOM), Inventory Status File, netting, lotting, offsetting, exploding, Planned Order Schedule, MRP II (Manufacturing Resource Planning), ERP, lead time, SAP S/4HANA, Production Planning (PP), MRP Live, Predictive MRP (pMRP).
- **One quotable point per paragraph**: satu klaim + satu fakta/angka per paragraf.
- **FAQ target (5–8)** — pakai PAA di atas:
  1. Apa itu MRP (Material Requirements Planning)?
  2. Apa kepanjangan dari MRP?
  3. Apa saja input yang dibutuhkan MRP? (MPS, BOM, Inventory Status File)
  4. Apa output dari MRP? (Planned Order Schedule, Order Release Report)
  5. Apa perbedaan MRP dan ERP?
  6. Apa itu MRP II?
  7. Apa kelemahan/keterbatasan MRP?
  8. Kapan perusahaan perlu menjalankan MRP di dalam ERP modern (mis. SAP S/4HANA)? (jembatan ke CTA)
- **Freshness**: tandai `dateModified` akurat di meta block (prioritas sitasi GEO).

## Data captured this run

- **Source(s)**: live SERP via WebFetch **DIBLOKIR hari ini** (google.com/search mengembalikan halaman error) → **WebSearch fallback** (4 query: "mrp adalah cara kerja", "input proses output contoh manufaktur", "MRP vs MRP II vs ERP S/4HANA", "perbedaan MRP ERP kelemahan"). WebFetch ke halaman Soltius `digital-manufaktur-sistem` **berhasil** (verifikasi link internal). `_extracted/seo_report_apr2026.md` **tidak relevan** (MRP bukan bagian dari 6 keyword report April).
- **Apr 2026 rank**: n/a — "mrp adalah" bukan keyword yang dilacak dalam report April 2026.
- **Volume / KD / trend**: `n/a (Ahrefs not connected)`. Sinyal kualitatif: SERP ID **sangat padat** (10+ hasil definisi/cara-kerja: Kledo, MAS Software, ImpactFirst, Mekari, Telkomsel Enterprise, flip.id, PRIEDS, 8thinktank, Ilmu Manajemen Industri, 123dok) → topik **bervolume tinggi & kompetitif**, didominasi konten vendor ERP/SME generik dan beberapa sumber teknik industri akademik. **Celah**: diagram input-proses-output yang utuh + contoh angka + perbandingan MRP/MRP II/ERP yang jujur + funnel ke production planning S/4HANA.
- **SERP features present**: PAA (ya, direkonstruksi); kandidat featured snippet (definisi + numbered list langkah proses); AI Overview kemungkinan ada (tak terverifikasi karena WebFetch SERP diblokir).
- **cache_source**: tidak ada cache (mode conditional/ad-hoc; bukan monthly run). Riset dilakukan langsung di run ini.

## Notes for SME researcher

- **Verifikasi nama SAP persis** (help.sap.com / learning.sap.com): "Production Planning (PP)", "classic MRP", "MRP Live", "Predictive MRP (pMRP)". Jangan campur dengan nama lama (SAP APO/PP-MRP klasik ECC) tanpa konteks. Posisikan SAP sebagai yang **Soltius implementasikan**, bukan buat.
- **Verifikasi langkah proses MRP**: netting → lotting → offsetting → exploding (sumber teknik industri tepercaya, mis. ilmumanajemenindustri / buku Operations Management Heizer-Render / ASCM). Pastikan definisi tiap langkah benar (offsetting = mundurkan dengan lead time; exploding = turun ke level komponen via BOM).
- **Definisi standar** "Material Requirements Planning" & "Bill of Materials" dari **ASCM/APICS** untuk satu kutipan otoritatif.
- **Contoh perhitungan** netting harus benar secara aritmetika dan diberi label **"ilustrasi"**; jangan sajikan tabel MRP yang keliru kolom.
- Jika menambah statistik manufaktur Indonesia, ambil dari **BPS / Kemenperin** dengan URL & tahun jelas. **Jangan mengarang** "rata-rata penghematan stok X%".
- Jaga klaim MRP II/ERP akurat secara historis (MRP 1960-an → MRP II 1980-an → ERP 1990-an) jika menyebut linimasa — beri sumber.

## Notes for future strategist runs (apa yang artikel ini TIDAK bahas — sisakan untuk sibling)

- **MRP Live & Predictive MRP (pMRP) di SAP S/4HANA secara teknis penuh** (cara setup, performa, vs classic MRP) — layak artikel decision/how-to terpisah; di sini hanya disinggung sebagai funnel.
- **CRP / Capacity Requirements Planning & MRP II mendalam** (kapasitas, routing, work center) — artikel terpisah.
- **Lot sizing techniques** (EOQ, Lot-for-Lot, POQ, Wagner-Whitin) secara mendalam — artikel teknik tersendiri (hindari kanibalisasi dengan `lead-time-c01` dan artikel persediaan).
- **MRP vs ERP sebagai keputusan pembelian software** (decision-stage komparatif penuh) — bisa jadi artikel sendiri; di sini hanya tabel konseptual.
- **DDMRP (Demand-Driven MRP)** — evolusi modern MRP; sisakan untuk artikel khusus (sudah dicatat juga di `lead-time-c01`).
