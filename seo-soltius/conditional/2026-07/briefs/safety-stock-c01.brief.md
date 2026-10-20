---
keyword: "safety stock"
keyword_slug: "safety-stock"
landing_page: ""
month: "2026-07"
brief_id: "safety-stock-c01"
angle: "safety-stock-pengertian-rumus-cara-menentukan"
angle_hash: "sha1:7eab5513608e"
search_intent: "informational"
target_word_count: 900
strategist_run_date: "2026-07-06"
mode: "conditional-given-angle"
batch: "conditional-2026-07 (style_addendum.md WAJIB — 800–1000 kata, tanpa image placeholder, FAQ 2–3, 2 internal link)"
dedup_result: "DISTINCT — Jaccard tertinggi ~0.21 vs lead-time-c01 (< 0.4)"
---

# Safety Stock: Pengertian, Rumus, dan Cara Menentukannya

> Working Title diberikan user — dipertahankan apa adanya (55 chars; primary keyword "safety stock" di 12 karakter pertama). Supporting keyword "rumus safety stock" tertangkap di judul. Penulis TIDAK mengubah substansi angle.
>
> **Meta title (≤60):** Safety Stock: Pengertian, Rumus, dan Cara Menentukannya
> **Meta description (140–160):** Safety stock adalah stok pengaman terhadap fluktuasi permintaan dan pasokan. Pelajari rumus safety stock, contoh perhitungan, dan cara menentukannya.
> **Slug (≤60):** safety-stock-pengertian-rumus-cara-menentukan

## Hook hypothesis

Manajer persediaan, PPIC, dan supply chain hidup di antara dua kerugian: kehabisan stok saat permintaan melonjak, atau modal terkubur di gudang karena buffer yang ditetapkan asal tebak. SERP Bahasa Indonesia untuk "safety stock" ramai (Mekari Jurnal, Accurate, HashMicro, Kledo, PRIEDS), tetapi hampir semuanya menyajikan katalog 4–6 rumus tanpa menjawab pertanyaan praktisnya: rumus mana untuk kondisi apa, dan bagaimana MENENTUKAN besarannya lewat trade-off service level vs biaya simpan. Artikel ini top-funnel murni: definisi sekali di snippet, dua rumus yang benar-benar dipakai (sederhana + statistik Z-score) dengan contoh angka berantai, lalu kerangka menentukan tingkatnya. Di penutup, pembaca yang perhitungannya sudah mentok di spreadsheet multi-SKU diarahkan ke optimasi inventori terintegrasi — SAP Integrated Business Planning (SAP IBP), yang Soltius implementasikan dan dukung, bukan buat.

## Primary keyword

`safety stock`

Supporting keyword (given): `rumus safety stock`

(Istilah Inggris, penjelasan Bahasa Indonesia — pola pencari B2B Indonesia. Kueri definisional + calculator-intent; artikel ini melengkapi cluster SCM: `lead-time-c01` sudah memiliki rumus lead time, `strategi-scm-c01` memiliki strategi makro — rumus & penentuan safety stock adalah milik artikel ini.)

## Secondary / LSI keywords (8–12)

- stok pengaman
- cara menghitung safety stock
- rumus safety stock sederhana
- service level (tingkat layanan)
- Z-score / faktor pengaman
- standar deviasi permintaan
- lead time (sebagai variabel rumus)
- reorder point (ROP / titik pemesanan ulang)
- stockout (kehabisan stok)
- biaya penyimpanan (holding/carrying cost)
- manajemen persediaan (inventory management)
- SAP Integrated Business Planning (SAP IBP for Inventory)

## Search intent & SERP feature targets

- **Stage**: awareness (top-funnel definitional + rumus/how-to; calculator-style intent)
- **Format**: definitional snippet + rumus dengan tabel "kapan pakai yang mana" + contoh perhitungan bernomor
- **Surface targets**:
  - [x] AI Overview (Google SGE) / AI-engine citation (Perplexity, ChatGPT) — definisi 40–60 kata + rumus quotable + tabel Z-score
  - [x] Featured Snippet (definisi + rumus + contoh perhitungan)
  - [x] People Also Ask

## SERP landscape (live scrape today)

> **Catatan metode:** WebFetch langsung ke `google.com/search?q=safety+stock&hl=id&gl=id` terblokir (halaman fallback/consent — konsisten dengan seluruh run conditional 2026-06/07). Degradasi anggun ke **WebSearch** (2026-07-06, 4 kueri) sesuai SOP CLAUDE.md §11. Volume/KD: `n/a (Ahrefs not connected)`.

**Top competing pages (WebSearch, kueri Bahasa Indonesia):**
1. `https://www.jurnal.id/id/blog/istilah-safety-stock-terkait-persediaan-barang-sbc/` — Mekari Jurnal — *angle*: pengertian + manfaat + cara hitung; sudut akuntansi/SME, contoh ritel kecil.
2. `https://accurate.id/akuntansi/safety-stock/` — Accurate — *angle*: "6 cara menghitung safety stock" — katalog rumus (basic, fixed, Heizer-Render, Greasley, EOQ) tanpa panduan memilih.
3. `https://www.hashmicro.com/id/blog/mengenal-safety-stock-dan-penerapannya-dalam-bisnis/` — HashMicro — *angle*: pengertian + manfaat + rumus dasar; funnel software inventory generik.
4. `https://www.prieds.com/post/safety-stock-pengertian-manfaat-dan-cara-menghitung-safety-stock-dalam-manajemen-pergudangan` — PRIEDS — *angle*: sudut manajemen pergudangan; definisi + rumus standar.
5. `https://kledo.com/blog/safety-stock/` & `https://www.bicaralogistik.com/2026/02/6-cara-lengkap-menghitung-safety-stock-untuk-bisnis-lengkap-dengan-pengertian-manfaat-rumus-contoh-dan-strategi-menentukan-stok-cadangan-optimal.html` — Kledo / BicaraLogistik — *angle*: paling lengkap (6 rumus + contoh), tetapi tetap katalog panjang untuk UMKM, tanpa lensa enterprise.

**Gaps to exploit** (yang TIDAK dicakup baik oleh top hasil):
- **Katalog rumus tanpa keputusan**: semua menyalin 4–6 rumus berdampingan; tidak ada yang menjawab "pakai rumus sederhana kapan, pakai Z-score kapan" — kita ringkas jadi DUA rumus + tabel kondisi pemakaian (decision-oriented, sesuai audiens B2B).
- **Service level tidak dijelaskan benar**: Z-score disebut tanpa menjelaskan trade-off-nya (95% vs 99% menaikkan buffer signifikan; 100% praktis mustahil) — celah "cara menentukan" yang persis dijanjikan judul.
- **Contoh kasusnya ritel mikro** (croissant kedai kopi, botol minuman) — tidak ada contoh manufaktur/distribusi dengan satuan enterprise; kita pakai contoh komponen manufaktur dengan angka berantai antar-H2.
- **Tidak ada kejujuran biaya**: hampir tak ada yang membahas bahwa safety stock berlebih = modal kerja mati + biaya simpan — honest hedging kami.
- **Tidak ada jembatan lanjutan**: pembaca multi-SKU/multi-lokasi tidak diarahkan ke langkah berikut (optimasi inventori berbasis sistem) — celah funnel ke SAP IBP for Inventory.

**People Also Ask / kueri turunan** (dari WebSearch ID, mewakili PAA — SERP scrape terblokir):
1. Apa yang dimaksud dengan safety stock?
2. Bagaimana rumus menghitung safety stock?
3. Apa perbedaan safety stock dan reorder point?
4. Berapa banyak safety stock yang ideal?
5. Apa itu service level dan Z-score dalam safety stock?
6. Apa yang terjadi jika safety stock terlalu besar atau terlalu kecil?
7. Apa faktor yang memengaruhi besarnya safety stock?

## Distinct angle vs. history

- **Closest prior article in this cluster**: `lead-time-c01` (conditional 2026-06, "Apa Itu Lead Time dalam Supply Chain dan Cara Menghitungnya"). Kedua terdekat: `mrp-c01` (2026-06) dan `strategi-scm-c01` (batch ini).
- **How this brief differs**: `lead-time-c01` adalah explainer metrik WAKTU — jenis lead time, rumus lead time, reorder point (`ROP = (pemakaian harian × lead time) + safety stock`), dan variabilitas lead time; safety stock di sana hanya disebut sebagai buffer/peran, **tanpa rumus safety stock itu sendiri**. Artikel ini kebalikannya: fokus pada **rumus & cara menentukan safety stock** (rumus sederhana + statistik Z-score, service level, contoh perhitungan). Boundary tegas untuk writer (sesuai dedup caution tracker): **lead time hanya disinggung sebagai VARIABEL rumus** — JANGAN mengulang jenis-jenis lead time, rumus lead time, atau pembahasan variabilitasnya (milik lead-time-c01); rumus reorder point cukup 1 kalimat rujukan (sudah dimiliki lead-time-c01); JANGAN bahas mekanika MRP (milik mrp-c01) atau strategi SCM makro (milik strategi-scm-c01).
- **Subtopic overlap (Jaccard) with closest prior**: subtopik bersama dengan `lead-time-c01` = {relasi safety stock–reorder point, variabilitas sebagai pemicu buffer, funnel perencanaan terintegrasi} ≈ 3 dari union ~14 → **Jaccard ≈ 0.21 (< 0.4 ✓)**. Vs `mrp-c01` ≈ 0.08 (irisan hanya konteks persediaan); vs `strategi-scm-c01` ≈ 0.07 (brief-nya eksplisit menyisakan "rumus & perhitungan operasional safety stock" untuk artikel ini); vs `ai-supply-chain-c01` (belum ditulis) ≈ 0.05 dengan boundary use-case AI. angle_hash `sha1:7eab5513608e` tidak berbenturan dengan histori maupun batch Juni/Juli. **Hasil dedup: DISTINCT — aman ditulis.**

## Article skeleton — H2s the writer should expand (BATCH OVERRIDE: 3–4 H2 SAJA)

> Lead ≤80 kata (pain konkret + keyword + janji artikel, TANPA roadmap) → definition snippet blockquote "Ringkasnya:" 40–60 kata → body 3 H2 → FAQ 2–3 → Kesimpulan ≤80 kata → soft CTA baris terakhir. **DILARANG H2 definitional yang mengulang snippet** — definisi safety stock muncul SEKALI, di snippet. Judulnya "Pengertian" sudah tertunaikan oleh snippet; body langsung masuk rumus.

1. **H2 (question-format + rumus/tabel)**: "Bagaimana Rumus Safety Stock?" — *covers*: jawaban langsung 40–60 kata berisi poin BARU (ada dua rumus yang lazim dipakai, pemilihannya bergantung pada ketersediaan data dan fluktuasi — bukan mengulang definisi). Lalu **satu tabel** dua baris: **Rumus sederhana** `Safety Stock = (Penjualan harian maksimum × Lead time maksimum) − (Penjualan harian rata-rata × Lead time rata-rata)` — cocok saat data terbatas, fluktuasi moderat; **Rumus statistik (service level)** `Safety Stock = Z × σd × √Lead Time` — cocok saat punya data historis dan permintaan fluktuatif (kolom: rumus · kapan dipakai · data yang dibutuhkan). Jelaskan variabel singkat: Z = faktor service level, σd = standar deviasi permintaan, lead time dipakai apa adanya sebagai variabel waktu (rujuk inline ke konsep lead time TANPA menjelaskan ulang). Tegaskan jujur: rumus statistik mengasumsikan distribusi normal — label sebagai penyederhanaan yang diterima luas.
2. **H2 (worked example)**: "Contoh Perhitungan Safety Stock" — *covers*: jawaban langsung 40–60 kata (menyatakan contoh memakai skenario komponen manufaktur, hasil dua rumus bisa berbeda dan itu wajar). Contoh angka berantai **berlabel "ilustrasi"**: pemakaian rata-rata 50 unit/hari, maksimum 70 unit/hari; lead time rata-rata 10 hari, maksimum 14 hari → rumus sederhana: (70 × 14) − (50 × 10) = **480 unit**; rumus statistik: σd = 12 unit, service level 95% (Z = 1,65) → 1,65 × 12 × √10 ≈ **63 unit** — jelaskan MENGAPA hasilnya jauh berbeda (rumus sederhana memproteksi skenario terburuk sekaligus, rumus statistik memproteksi sesuai target service level; itulah alasan rumus sederhana sering menghasilkan buffer boros). Tutup 1 kalimat penghubung ke reorder point: safety stock hasil hitungan ini menjadi komponen penjumlah dalam reorder point (cukup rujukan — rumus ROP milik artikel lead time).
3. **H2 (praktis/terstruktur — "cara menentukan")**: "Cara Menentukan Tingkat Safety Stock yang Tepat" — *covers*: jawaban langsung 40–60 kata (menentukan ≠ sekadar menghitung; besaran ditarik oleh 4 faktor). **List dengan lead-in bold**: **Target service level** — 95% (Z = 1,65) standar umum; 99% (Z = 2,33) untuk item kritis; kejar 100% praktis mustahil karena buffer melonjak eksponensial; **Fluktuasi permintaan** — makin besar deviasi, makin besar buffer; **Keandalan pemasok/lead time** — pasokan tidak konsisten menuntut buffer lebih besar (variabel, bukan pembahasan ulang lead time); **Biaya penyimpanan** — honest hedging 1–2 kalimat (pengganti H2 honest sesuai addendum §2): safety stock berlebih mengubur modal kerja dan menambah biaya simpan; safety stock bukan "makin besar makin aman". Tutup dengan eskalasi natural: di lingkungan multi-SKU/multi-lokasi, perhitungan per item di spreadsheet cepat mentok — di titik ini perusahaan memakai optimasi inventori berbasis sistem seperti **SAP IBP for Inventory** yang menghitung rekomendasi safety stock lintas produk-lokasi sekaligus dengan mempertimbangkan variabilitas permintaan dan pasokan (1–2 kalimat, vendor-teach, tanpa menyebut Soltius di body).
4. **FAQ (2–3 Q&A, jawaban 30–60 kata, tiap jawaban memuat 1 fakta/angka)** — pilih dari PAA:
   - "Apa perbedaan safety stock dan reorder point?" — safety stock = besaran buffer; reorder point = titik waktu pemesanan ulang; safety stock adalah salah satu komponen dalam rumus reorder point (sebut 1 angka dari contoh ilustrasi).
   - "Berapa safety stock yang ideal?" — tidak ada angka universal; ditentukan target service level — 95% memakai Z = 1,65, 99% memakai Z = 2,33; item kritis diberi target lebih tinggi daripada item slow-moving.
   - (Opsional ke-3, jika muat) "Apa risiko safety stock terlalu besar?" — modal kerja terkunci + biaya penyimpanan; sebut angka carrying cost tahunan HANYA jika researcher menemukan sumber kredibel (jangan dikarang).
5. **## Kesimpulan** — ≤80 kata: safety stock ditentukan oleh data (variabilitas + service level), bukan tebakan; dua rumus sesuai kematangan data; 1 positioning line Soltius (lihat anchor). CTA konsultatif.
6. **Soft website CTA (baris terakhir, terpisah)** — ajakan halus mengunjungi soltius.co.id; anchor produk: **SAP IBP** (per tracker).

(≥1 question-format: H2 #1 ✓; ≥1 praktis/terstruktur dengan tabel/list: H2 #1 tabel rumus + H2 #3 list ✓; H2 honest DIGANTI honest-hedging di H2 #3 — sesuai style_addendum §2; ≥4 angka spesifik inline: Z 1,65/2,33, 95%/99%, contoh 480 vs 63 unit, σd 12, √10 ✓. **DILARANG menulis {IMAGE_NN} dalam bentuk apa pun** — tabel rumus + list faktor menggantikan kebutuhan visual.)

## SAP / partner tech to teach (dari research; keyword tidak ada di product_matrix.md — framing universal berlaku)

Konsep yang dijelaskan akurat & vendor-neutral:
- **Safety stock, service level, Z-score, standar deviasi permintaan** — konsep inti, netral vendor, mengikuti kerangka standar rantai pasok (ASCM/APICS).
- **SAP Integrated Business Planning (SAP IBP)**, khususnya **SAP IBP for Inventory** — optimasi inventori multi-stage: merekomendasikan safety stock lintas produk-lokasi dengan mempertimbangkan variabilitas permintaan, variabilitas pasokan, lead time, dan target service level. Disebut RINGKAS di akhir H2 #3 (1–2 kalimat) — jangan menjejalkan modul IBP lain (Demand/Response & Supply/S&OP sudah dimiliki artikel lain).

**Fakta yang WAJIB diverifikasi researcher:**
- Nilai **Z-score per service level**: 95% → Z ≈ 1,65; 99% → Z ≈ 2,33 (tabel distribusi normal standar; konfirmasi via sumber rantai pasok kredibel, mis. paper King/MIT di bawah). Jangan menulis Z salah.
- Bentuk **rumus statistik** yang dipakai: `Z × σd × √LT` adalah versi variabilitas-permintaan; jika writer menambah varian variabilitas-lead-time, WAJIB akurat — lebih aman tetap di satu varian berlabel "versi yang umum dipakai".
- Kapabilitas **SAP IBP for Inventory** (multi-stage inventory optimization, rekomendasi safety stock per item-lokasi): konfirmasi via learning.sap.com / sap.com — jangan mengarang fitur.
- Angka carrying cost tahunan (jika dipakai di FAQ #3): cari sumber eksplisit (APICS/King paper/jurnal); JANGAN pakai angka "20–30%" tanpa sitasi.
- Definisi safety stock untuk snippet selaras definisi ASCM: buffer terhadap ketidakpastian permintaan, lead time, dan pasokan.

## Soltius anchor (BATCH OVERRIDE: maks 2 self-mention)

- **1 positioning line di Kesimpulan**: Soltius — SAP Platinum Partner melalui United VARs — mengimplementasikan dan mendampingi solusi perencanaan rantai pasok SAP seperti SAP IBP lintas industri manufaktur dan distribusi. (Framing: implements/supports, NEVER builds/owns; tanpa superlatif.)
- **1 soft website CTA** (baris terakhir): ajakan konsultasi/kunjungi soltius.co.id — anchor funnel: **SAP IBP** (per tracker).
- **TANPA aside Soltius di tengah body** (style_addendum §6). Sentuhan praktisi di body boleh TANPA nama Soltius (mis. "di lapangan, buffer yang ditetapkan dari kebiasaan lama sering dua kali lebih besar dari kebutuhan statistiknya").

## Internal links to place (BATCH OVERRIDE: 2 SAJA — 1 hub + 1 cousin, inline natural, tanpa "BACA JUGA")

> Landing page kosong di sheet → hub dipilih strategist (keputusan standing 2026-07). Hub SCM terverifikasi muncul di indeks `site:soltius.co.id` (WebSearch 2026-07-06, run strategi-scm-c01); URL cousin sudah dipakai + lolos QC di `lead-time-c01` (2026-06). Penulis tetap cek 200/OK saat menulis.

- **Hub (halaman soltius.co.id paling relevan)**: `https://www.soltius.co.id/id/blog/apa-itu-supply-chain-management` — anchor natural: "supply chain management" — why: safety stock adalah konsep inti manajemen persediaan dalam cluster SCM Soltius; halaman ini parent definisional cluster tersebut (hub yang sama dipakai `strategi-scm-c01` — konsisten membangun otoritas satu hub). Tempatkan inline di lead.
- **Cousin**: `https://www.soltius.co.id/id/blog/konsep-warehouse-management-system-yang-wajib-anda-tahu` — anchor natural: "manajemen gudang" — why: akurasi data stok gudang adalah prasyarat perhitungan safety stock yang benar (garbage in, garbage out); tautkan di H2 #3 saat membahas data historis/keandalan angka. Preseden: dipakai lead-time-c01 dan lolos editor.
- *Catatan cluster*: sibling `lead-time-c01` (2026-06) adalah rujukan alami saat menyebut lead time sebagai variabel — **jika** live URL-nya tersedia saat penulisan, editor BOLEH menukar cousin dengan sibling itu; total tautan internal TETAP 2, hub SCM diprioritaskan.

## E-E-A-T signals to embed

- **Angka/fakta spesifik** (≥4 angka inline per addendum §4): Z = 1,65 (service level 95%) dan Z = 2,33 (99%); contoh berantai 480 unit (rumus sederhana) vs ±63 unit (rumus statistik, σd 12, √10 ≈ 3,16); semua contoh berlabel "ilustrasi". JANGAN mengarang benchmark "rata-rata safety stock industri X".
- **Authoritative sources to cite (≥2 — saran, sitasi final 1–2 di artikel):**
  1. **ASCM (Association for Supply Chain Management / APICS)** — definisi standar safety stock sebagai buffer terhadap ketidakpastian permintaan, lead time, dan pasokan: ASCM Supply Chain Dictionary (`https://www.ascm.org/learning-development/certifications-credentials/dictionary/`) atau artikel ASCM Insights tentang safety stock (`https://www.ascm.org/ascm-insights/safety-stock-a-contingency-plan-to-keep-supply-chains-flying-high/`).
  2. **SAP official** — SAP IBP for Inventory / multi-stage inventory optimization: `https://learning.sap.com/courses/mastering-sap-ibp-for-inventory-planning-and-optimization/global-multi-stage-inventory-optimization-1` (atau halaman produk `sap.com/products/scm/integrated-business-planning.html`).
  3. (Opsional, kredibel untuk rumus/Z-score) **Peter L. King, "Understanding Safety Stock and Mastering Its Equations" (APICS magazine, dihosting MIT)** — `https://web.mit.edu/2.810/www/files/readings/King_SafetyStock.pdf`.
- **First-party Soltius angle**: pengalaman implementasi solusi perencanaan/rantai pasok SAP lintas industri (manufaktur, distribusi, perkebunan) — dipakai di positioning line Kesimpulan, tanpa angka klien karangan.

## AI Overview & GEO optimization (seo_playbook §2a, dipadatkan per addendum §5)

- **Definition snippet blockquote** setelah lead — "Ringkasnya:" 40–60 kata, arah: *"Ringkasnya: safety stock (stok pengaman) adalah persediaan ekstra yang disimpan di atas kebutuhan normal untuk melindungi operasional dari ketidakpastian — lonjakan permintaan, keterlambatan pemasok, atau meleset-nya perkiraan. Besarannya dihitung dengan rumus berbasis data penjualan dan lead time, bukan ditebak, agar perusahaan terhindar dari stockout tanpa menimbun berlebihan."* (INI satu-satunya definisi — body tidak boleh menyatakannya ulang dengan kata lain.)
- **Jawaban langsung 40–60 kata segera setelah TIAP H2** berisi poin baru milik H2 itu (dua rumus & kriterianya; skenario contoh & mengapa hasil beda; 4 faktor penentu), BUKAN parafrase snippet.
- **Satu paragraf = satu poin quotable & verifiable.**
- **Entity list** (nama penuh saat sebutan pertama, akronim di-expand sekali): safety stock (stok pengaman), service level, Z-score, standar deviasi (σ), lead time, reorder point (ROP), stockout, holding cost, SAP Integrated Business Planning (SAP IBP), SAP IBP for Inventory, ASCM (Association for Supply Chain Management).
- **Format match**: tabel untuk dua rumus + kondisi pemakaian (H2 #1); perhitungan bernomor/berantai untuk contoh (H2 #2); list ber-lead-in-bold untuk faktor penentu (H2 #3). Tabel diutamakan — jangan paksa elemen berlebih melampaui 1000 kata.
- **FAQ**: 2–3 Q&A, parseable FAQPage schema; `dateModified` akurat di meta block.

## Data captured this run

- **Source(s)**: WebSearch (Google ID + EN, 2026-07-06, 4 kueri) — peta pesaing rumus safety stock, PAA turunan, verifikasi awal kapabilitas SAP IBP for Inventory, kandidat sumber ASCM/MIT. WebFetch SERP Google **terblokir** (halaman fallback) — fallback WebSearch sesuai SOP.
- **Apr 2026 rank** (from report): `n/a` — keyword baru, tidak dilacak di `seo_report_apr2026.md`.
- **Volume / KD / trend**: `n/a (Ahrefs not connected)`. Sinyal kualitatif: SERP ID sangat padat (10+ artikel rumus dari Mekari, Accurate, HashMicro, Kledo, PRIEDS, BicaraLogistik, RUN System, dll.) → volume jelas ada; semua format katalog-rumus untuk UMKM → beatable dengan sudut decision-oriented + lensa enterprise + GEO.
- **SERP features present**: explainer definisi + rumus mendominasi; PAA + AI Overview sangat mungkin aktif untuk kueri definisional/kalkulasi ini (tidak terkonfirmasi via scrape — consent page).
- **cache_source**: `n/a` — mode conditional `/single-article`; riset ditangkap inline di brief ini.

## Notes for SME researcher

- Verifikasi **nilai Z per service level** (95% → 1,65; 99% → 2,33) dan bentuk **rumus statistik** `Z × σd × √LT` dari sumber kredibel (paper King/MIT atau teks ASCM). Cek juga rumus sederhana (max-avg) konsisten dengan versi yang beredar luas.
- Konfirmasi kapabilitas **SAP IBP for Inventory**: rekomendasi safety stock per item-lokasi, multi-stage/global inventory optimization, mempertimbangkan variabilitas permintaan + pasokan + service level (learning.sap.com / sap.com). Jangan mengarang nama fitur; jangan bawa modul IBP lain.
- Ambil **definisi ASCM** untuk menyelaraskan snippet (buffer terhadap ketidakpastian permintaan, lead time, pasokan).
- FAQ #3 (opsional): cari sumber eksplisit untuk **carrying cost tahunan persediaan** — jika tidak ketemu sumber kuat, drop FAQ #3 dan pakai 2 Q&A saja.
- **Boundary dedup**: JANGAN menyediakan materi jenis-jenis lead time / rumus lead time / rumus reorder point lengkap (milik `lead-time-c01`); lead time hanya variabel. **Dossier ringkas saja** — artikel target 900 kata.
- Cek 2 URL internal (hub `apa-itu-supply-chain-management` + cousin `konsep-warehouse-management-system-yang-wajib-anda-tahu`) tetap 200/OK.

## Notes for future strategist runs

Artikel ini SENGAJA TIDAK mencakup (untuk menghindari kanibalisasi + disisakan untuk artikel lain):
- **Rumus lead time, jenis lead time, dan rumus reorder point lengkap** — sudah dimiliki `lead-time-c01` (2026-06).
- **EOQ (Economic Order Quantity)** dan kebijakan lot-sizing — kandidat artikel terpisah cluster persediaan.
- **ABC analysis / segmentasi service level per kelas item** — disebut maksimal 1 frasa; layak artikel sendiri.
- **SAP IBP sebagai produk** (modul-modul, deployment, S&OP) — `strategi-scm-c01` sudah menautkan sisi S&OP; artikel decision-stage IBP tersendiri masih terbuka.
- **DDMRP (demand-driven replenishment)** — pendekatan buffer alternatif; kandidat artikel lanjutan.

## Format overrides (batch conditional 2026-07)

Restating dari `conditional/2026-07/style_addendum.md` — MENGIKAT untuk researcher, writer, editor, validator:

- **Panjang: 800–1000 kata (target ~900)** — hitungan body H1 s/d CTA; <800 terlalu tipis, >1000 gagal (pangkas dengan membuang kalimat kosong/contoh redundan, bukan memampatkan jadi telegram).
- **TANPA image placeholder** — dilarang `{IMAGE_NN}` dalam bentuk apa pun; stage image-planner dilewati; konsep visual (kurva stok, tabel Z) disampaikan via tabel/list/prosa.
- **FAQ: 2–3 Q&A** (bukan 5–8); jawaban 30–60 kata, tiap jawaban memuat 1 fakta/angka; ambil dari PAA di atas.
- **Internal link: 2** (1 hub `apa-itu-supply-chain-management` + 1 cousin `konsep-warehouse-management-system-yang-wajib-anda-tahu`), inline natural.
- **Definisi HANYA SEKALI** — di snippet "Ringkasnya:"; body/H2 dilarang mengulang definisi dengan kata lain; tidak ada H2 definitional.
- **Prosa padat on-point** — tanpa paragraf roadmap, tanpa transisi kosong; ritme tetap bervariasi (paragraf 1–4 kalimat).
- **Lead ≤80 kata** (pain konkret + keyword + janji artikel).
- **Kesimpulan ≤80 kata** + 1 positioning line Soltius; **soft website CTA (soltius.co.id) = baris terakhir**, terpisah dari Kesimpulan.
