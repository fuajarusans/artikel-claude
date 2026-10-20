---
keyword: "bill of material"
keyword_slug: "bill-of-material"
landing_page: ""
month: "2026-07"
brief_id: "bill-of-materials-c01"
angle: "bill-of-materials-pengertian-jenis-contoh-struktur-bertingkat"
angle_hash: "sha1:172ff8d815bc"
search_intent: "informational"
target_word_count: 900
strategist_run_date: "2026-07-06"
mode: "conditional-given-angle"
batch: "conditional-2026-07 (style_addendum.md WAJIB — 800–1000 kata, tanpa image placeholder, FAQ 2–3, 2 internal link)"
dedup_result: "DISTINCT — Jaccard tertinggi ~0.14 vs mrp-c01 (2026-06) (< 0.4)"
---

# Bill of Materials (BOM): Pengertian, Jenis, dan Contohnya

> Working Title diberikan user — dipertahankan apa adanya (57 chars; primary keyword "Bill of Material(s)" di karakter pertama). Supporting keyword "apa itu bom produksi" ditangkap di FAQ #1. Penulis TIDAK mengubah substansi angle.
>
> **Meta title (≤60):** Bill of Materials (BOM): Pengertian, Jenis, dan Contohnya
> **Meta description (140–160):** Bill of material (BOM) adalah daftar terstruktur bahan dan komponen pembentuk satu produk. Kenali jenis BOM, contoh struktur bertingkat, dan fungsinya.
> **Slug (≤60):** bill-of-materials-pengertian-jenis-contoh

## Hook hypothesis

Di pabrik, hampir semua masalah material berawal dari dokumen yang sama: BOM yang tidak akurat — komponen tertinggal, kuantitas salah, versi desain dan versi produksi tidak sinkron. SERP Bahasa Indonesia untuk "bill of material" ramai (Accurate, Kledo, HashMicro, Mekari Jurnal, PRIEDS, 8thinktank), tetapi mayoritas berupa katalog 5–10 jenis BOM dengan contoh mainan (cappuccino kafe, rumah) — hampir tidak ada yang menyajikan SATU tabel BOM bertingkat utuh yang bisa langsung ditiru, dan tidak ada yang jujur soal biaya BOM yang salah. Artikel ini top-funnel padat: definisi sekali di snippet, jenis BOM diringkas ke dua sumbu yang benar-benar dipakai (fungsi: EBOM vs MBOM; struktur: single vs multi-level), satu contoh tabel BOM bertingkat Level 0–2 dengan angka, lalu relasi BOM→MRP secukupnya. Di penutup, pembaca yang BOM-nya masih hidup di spreadsheet terpisah dari stok dan pembelian diarahkan ke SAP S/4HANA Manufacturing — yang Soltius implementasikan dan dukung, bukan buat.

## Primary keyword

`bill of material`

Supporting keyword (given): `apa itu bom produksi`

(Istilah Inggris + penjelasan Bahasa Indonesia — pola pencari B2B. Kueri definisional murni; artikel ini menjadi parent master-data untuk cluster manufaktur: `mrp-c01` (2026-06) memiliki cara kerja MRP, `sap-pp-c01` (batch ini, row 11) akan memiliki modul SAP PP — struktur & jenis BOM adalah milik artikel ini.)

## Secondary / LSI keywords (8–12)

- bill of materials / daftar kebutuhan material
- BOM produksi
- struktur produk bertingkat (product structure)
- single-level BOM
- multi-level BOM / indented BOM
- Engineering BOM (EBOM)
- Manufacturing BOM (MBOM)
- sub-assembly (rakitan antara)
- komponen dan bahan baku
- kode item / part number
- master data produksi
- MRP (Material Requirements Planning) — sebagai relasi, bukan bahasan

## Search intent & SERP feature targets

- **Stage**: awareness (top-funnel definitional; "pengertian + jenis + contoh")
- **Format**: definitional snippet + tabel jenis BOM + tabel contoh struktur bertingkat (menggantikan diagram — batch tanpa image)
- **Surface targets**:
  - [x] AI Overview (Google SGE) / AI-engine citation (Perplexity, ChatGPT) — definisi 40–60 kata + tabel jenis + tabel contoh quotable baris-per-baris
  - [x] Featured Snippet (definisi + tabel contoh BOM bertingkat)
  - [x] People Also Ask

## SERP landscape (live scrape today)

> **Catatan metode:** WebFetch langsung ke `google.com/search?q=bill+of+material&hl=id&gl=id` terblokir (halaman fallback/consent — konsisten seluruh run conditional 2026-06/07). Degradasi anggun ke **WebSearch** (2026-07-06, 4 kueri ID + EN) sesuai SOP CLAUDE.md §11. Volume/KD: `n/a (Ahrefs not connected)`.

**Top competing pages (WebSearch, kueri Bahasa Indonesia):**
1. `https://accurate.id/akuntansi/bill-of-material/` — Accurate — *angle*: pengertian + jenis + elemen + contoh; sudut software akuntansi SME, contoh sederhana.
2. `https://kledo.com/blog/bill-of-material/` — Kledo — *angle*: pengertian lengkap + contoh; sudut pembukuan UMKM (contoh kafe: 1 cappuccino = 18 g kopi + 150 ml susu).
3. `https://www.hashmicro.com/id/blog/pengertian-bill-of-material-beserta-penjelasan-lengkapnya/` — HashMicro — *angle*: panduan struktur sampai contoh; funnel software ERP generik, katalog jenis panjang.
4. `https://www.jurnal.id/id/blog/pegertian-jenis-dan-manfaat-bill-of-material-dalam-perusahaan-manufaktur/` — Mekari Jurnal — *angle*: pengertian + jenis + manfaat untuk manufaktur; tanpa contoh tabel bertingkat yang utuh.
5. `https://www.prieds.com/post/bill-of-material-pengertian-fungsi-jenis-dan-manajemen-efektif-dalam-industri-manufaktur` & `https://8thinktank.com/bill-of-material-bom/` — PRIEDS / Think Tank Solusindo — *angle*: pengertian-fungsi-jenis + kelola dengan ERP; standar, level dijelaskan konseptual tanpa worked example enterprise.

**Gaps to exploit** (yang TIDAK dicakup baik oleh top hasil):
- **Katalog jenis tanpa keputusan**: pesaing mendaftar 5–10 jenis BOM (EBOM, MBOM, sales BOM, planning BOM, configurable, dst.) berdampingan tanpa menjawab "yang mana relevan untuk siapa". Kita ringkas ke DUA SUMBU (fungsi dokumen: EBOM vs MBOM; kedalaman struktur: single vs multi-level) + tabel "kapan dipakai" — decision-oriented.
- **Tidak ada tabel BOM bertingkat yang utuh**: contoh pesaing berupa narasi (rumah = dinding + atap) atau resep kafe; hampir tidak ada tabel Level-Kode-Komponen-Qty-Satuan yang bisa langsung dicontoh manufaktur. Ini diferensiasi utama — dan persis permintaan sheet notes ("contoh struktur BOM bertingkat via tabel/list").
- **Tidak ada kejujuran soal akurasi**: tidak ada yang membahas bahwa BOM salah satu baris pun menjalar ke pembelian, stok, dan costing — honest hedging kami.
- **Relasi BOM→MRP disebut sambil lalu** tanpa dijelaskan tepat (BOM di-explode MRP); kami jelaskan 2–3 kalimat presisi — TANPA mengulang cara kerja MRP (milik `mrp-c01`).
- **Sumber otoritatif nyaris nol**: tidak ada yang mengutip ASCM/APICS atau dokumentasi SAP; kami sitir keduanya.

**People Also Ask / kueri turunan** (dari WebSearch ID, mewakili PAA — SERP scrape terblokir):
1. Apa yang dimaksud dengan bill of material (BOM)?
2. Apa itu BOM produksi? (supporting keyword)
3. Apa saja jenis-jenis bill of material?
4. Apa perbedaan EBOM dan MBOM?
5. Apa perbedaan single-level dan multi-level BOM?
6. Apa saja isi/elemen dari sebuah BOM?
7. Apa hubungan BOM dengan MRP?

## Distinct angle vs. history

- **Closest prior article in this cluster**: `mrp-c01` (conditional 2026-06, "Apa Itu MRP dan Cara Kerjanya") — BOM muncul di sana sebagai SALAH SATU dari tiga input MRP (bersama MPS dan Inventory Status File), disebut sebagai istilah tanpa dibedah. Tetangga kedua: `sap-pp-c01` (batch ini, row 11 — belum ditulis) dan klaster `digital-manufacturing` (2026-06).
- **How this brief differs**: `mrp-c01` adalah explainer PROSES perencanaan (netting-lotting-offsetting-exploding, MRP vs MRP II vs ERP). Artikel ini membedah DOKUMEN/master data-nya: definisi BOM, dua sumbu jenis, elemen isi, dan contoh tabel struktur bertingkat. Boundary tegas untuk writer (sesuai dedup caution tracker): **relasi BOM→MRP maksimal 2–3 kalimat** ("MRP meng-explode BOM untuk menghitung kebutuhan komponen") — JANGAN menjelaskan langkah netting/lotting/offsetting, input MPS/Inventory Status File, MRP II, atau MRP Live (semuanya milik `mrp-c01`). JANGAN membedah modul SAP PP, routing, atau work center (milik `sap-pp-c01`) — SAP disebut hanya sebagai konteks master data 1–2 kalimat.
- **Subtopic overlap (Jaccard) with closest prior**: subtopik bersama dengan `mrp-c01` = {BOM sebagai input MRP, akurasi data BOM sebagai prasyarat rencana benar} ≈ 2 dari union ~14 → **Jaccard ≈ 0.14 (< 0.4 ✓)**. Vs `digital-manufacturing-01` ≈ 0.05 (irisan hanya konteks manufaktur); vs `sap-pp-c01` (planned) ≈ 0.10 dengan boundary master data vs modul; vs `safety-stock-c01`/`lead-time-c01` ≈ 0.05 (domain persediaan, bukan struktur produk). angle_hash `sha1:172ff8d815bc` tidak berbenturan dengan `articles_history/index.json` (56 entri diperiksa) maupun brief batch conditional Juni (14) dan Juli (6 yang sudah ada). **Hasil dedup: DISTINCT — aman ditulis.**

## Article skeleton — H2s the writer should expand (BATCH OVERRIDE: 3–4 H2 SAJA)

> Lead ≤80 kata (pain konkret + keyword + janji artikel, TANPA roadmap) → definition snippet blockquote "Ringkasnya:" 40–60 kata → body 3 H2 → FAQ 2–3 → Kesimpulan ≤80 kata → soft CTA baris terakhir. **DILARANG H2 definitional yang mengulang snippet** — definisi BOM muncul SEKALI, di snippet. Bagian "Pengertian" pada judul sudah tertunaikan oleh snippet; body langsung masuk jenis.

1. **H2 (question-format + tabel)**: "Apa Saja Jenis Bill of Materials?" — *covers*: jawaban langsung 40–60 kata berisi poin BARU (jenis BOM dibedakan pada dua sumbu — fungsi dokumen dan kedalaman struktur — bukan mengulang definisi). Lalu **satu tabel jenis** (kolom: jenis · isi · siapa yang memakai / kapan): **Engineering BOM (EBOM)** — produk sebagaimana DIRANCANG tim engineering (gambar teknik, spesifikasi desain); **Manufacturing BOM (MBOM)** — produk sebagaimana DIBUAT di lantai produksi, termasuk material kemasan dan urutan perakitan (inilah yang sehari-hari disebut "BOM produksi"); **Single-level BOM** — satu tingkat: produk jadi + daftar komponen langsungnya, cocok produk rakitan sederhana; **Multi-level (indented) BOM** — bertingkat Level 0-1-2-dst., produk jadi → sub-assembly → komponen/bahan baku, standar untuk produk kompleks. Sebut 1 kalimat bahwa varian lain (planning BOM, sales BOM, configurable BOM) ada untuk kebutuhan khusus — jangan dikatalogkan panjang.
2. **H2 (worked example — tabel, pengganti diagram)**: "Contoh Struktur BOM Bertingkat" — *covers*: jawaban langsung 40–60 kata (cara membaca: Level 0 = produk jadi, Level 1 = sub-assembly, Level 2 = komponen/bahan baku; setiap baris memuat kode item, kuantitas, dan satuan terhadap satu base quantity produk jadi). Lalu **satu tabel contoh berlabel "ilustrasi"** — kursi kantor, base quantity 1 unit (kolom: Level · Kode · Komponen · Qty · Satuan): Level 0 `FG-100` kursi kantor 1 unit; Level 1 `SA-110` rakitan dudukan 1 unit → Level 2 `RM-111` busa dudukan 1 pcs, `RM-112` kain pelapis 0,8 m²; Level 1 `SA-120` rakitan kaki 1 unit → Level 2 `RM-121` roda kastor 5 pcs, `RM-122` gas lift 1 pcs, `RM-123` baut M8 4 pcs. Tutup 2–3 kalimat elemen minimum tiap baris BOM: kode item, deskripsi, kuantitas per base quantity, satuan, level — plus nomor revisi/versi pada praktik yang disiplin. (Angka tabel = angka spesifik inline yang dituntut addendum §4.)
3. **H2 (question-format — fungsi/relasi + honest hedging)**: "Mengapa BOM Menentukan Akurasi Produksi dan MRP?" — *covers*: jawaban langsung 40–60 kata (BOM adalah master data yang dibaca banyak proses sekaligus — perencanaan kebutuhan material, pembelian, costing produk; kesalahan satu baris menjalar ke semuanya). Elaborasi: (a) **relasi BOM→MRP secukupnya, 2–3 kalimat**: sistem MRP "meledakkan" (explode) struktur BOM dari jadwal produksi untuk menghitung kebutuhan tiap komponen per level — TITIK, tanpa membahas langkah MRP selanjutnya (milik `mrp-c01`); (b) fungsi lain: dasar penghitungan biaya produk (product costing) dan daftar belanja pengadaan; (c) **honest hedging 1–2 kalimat** (pengganti H2 honest per addendum §2): BOM yang tidak dirawat — komponen usang tidak dihapus, revisi desain tidak diperbarui — membuat sistem secanggih apa pun menghasilkan rencana yang salah; (d) jembatan eskalasi natural: saat produk multi-level dan revisi desain sering, BOM di spreadsheet cepat tidak sinkron dengan stok dan pembelian — di titik ini perusahaan mengelola BOM sebagai master data terpusat di ERP; di **SAP S/4HANA Manufacturing**, BOM tersusun atas BOM header (dengan base quantity) dan BOM item, dan menjadi acuan bersama perencanaan, produksi, pengadaan, hingga costing (1–2 kalimat vendor-teach, tanpa menyebut Soltius di body, tanpa membedah modul PP).
4. **FAQ (2–3 Q&A, jawaban 30–60 kata, tiap jawaban memuat 1 fakta/angka)** — pilih dari PAA:
   - "Apa itu BOM produksi?" (supporting keyword) — BOM produksi = Manufacturing BOM (MBOM): daftar material sebagaimana produk DIBUAT, termasuk kemasan dan urutan perakitan; berbeda dari EBOM yang menggambarkan produk sebagaimana dirancang — satu produk lazim punya keduanya (2 dokumen paralel).
   - "Apa perbedaan single-level dan multi-level BOM?" — single-level hanya 1 tingkat (produk + komponen langsung); multi-level bertingkat Level 0-1-2-dst. mengikuti sub-assembly; rujuk contoh kursi (Level 0–2).
   - "Apa hubungan BOM dengan MRP?" — BOM adalah salah satu input utama MRP; MRP meng-explode BOM untuk menghitung kebutuhan komponen per level dari jadwal produksi (sebut 1 angka dari contoh, mis. 100 kursi → 500 roda kastor).
5. **## Kesimpulan** — ≤80 kata: BOM = fondasi data produksi; pilih jenis sesuai fungsi dan struktur; jaga akurasinya seperti menjaga stok; 1 positioning line Soltius (lihat anchor). CTA konsultatif.
6. **Soft website CTA (baris terakhir, terpisah)** — ajakan halus mengunjungi soltius.co.id; anchor produk: **SAP S/4HANA Manufacturing** (per tracker).

(≥1 question-format: H2 #1 dan #3 ✓; ≥1 praktis/terstruktur dengan tabel: H2 #1 tabel jenis + H2 #2 tabel contoh ✓; H2 honest DIGANTI honest-hedging di H2 #3 — sesuai style_addendum §2; ≥4 angka spesifik inline: Level 0/1/2, qty tabel (5 roda, 4 baut, 0,8 m²), base quantity 1 unit, 100 kursi → 500 roda di FAQ ✓. **DILARANG menulis {IMAGE_NN} dalam bentuk apa pun** — dua tabel menggantikan kebutuhan visual, sesuai sheet notes.)

## SAP / partner tech to teach (dari research; keyword tidak ada di product_matrix.md — framing universal berlaku)

Konsep yang dijelaskan akurat & vendor-neutral:
- **BOM, EBOM/MBOM, single/multi-level, sub-assembly, kode item, base quantity** — konsep inti, netral vendor, selaras kerangka ASCM/APICS.
- **SAP S/4HANA Manufacturing / modul Production Planning (PP)** — BOM sebagai master data produksi: tersusun atas **BOM header** (memuat base quantity) dan **BOM item**; BOM digunakan MRP (explode), produksi, pengadaan, dan product costing. Disebut RINGKAS di akhir H2 #3 (1–2 kalimat) — baris matrix terdekat untuk konteks: **#2 digital manufacturing** (S/4HANA PP). JANGAN membedah PP/routing/work center (milik `sap-pp-c01`).

**Fakta yang WAJIB diverifikasi researcher:**
- Struktur **BOM header + BOM item** dan konsep **base quantity** di SAP S/4HANA: `https://help.sap.com/docs/SAP_S4HANA_ON-PREMISE/18ee18df146f46e9a7738186eebceaa7/ff04c453f57eb44ce10000000a174cb4.html` (Bills of Material in Production Planning) — jangan mengarang istilah.
- Klaim "MRP meng-explode BOM untuk menghitung kebutuhan komponen" — konfirmasi via halaman SAP Help yang sama / learning.sap.com ("Introducing Bills of Material (BOMs)").
- **Definisi standar BOM** dari ASCM/APICS Supply Chain Dictionary (daftar bahan baku, sub-assembly, komponen + kuantitas untuk membuat satu produk) — selaraskan snippet.
- Istilah Indonesia yang dipakai konsisten: "daftar kebutuhan material", "rakitan antara (sub-assembly)" — gloss sekali, lalu pakai istilah Inggris yang lazim.
- JANGAN mengutip angka "X% kesalahan produksi akibat BOM" tanpa sumber — jika tak ada sumber kredibel, cukup kualitatif.

## Soltius anchor (BATCH OVERRIDE: maks 2 self-mention)

- **1 positioning line di Kesimpulan**: Soltius — SAP Platinum Partner melalui United VARs dengan pengalaman implementasi lintas industri manufaktur (Automotive, Consumer Products, Mill Products) — mengimplementasikan dan mendampingi SAP S/4HANA Manufacturing, termasuk penataan master data produksi seperti BOM. (Framing: implements/supports, NEVER builds/owns; tanpa superlatif.)
- **1 soft website CTA** (baris terakhir): ajakan konsultasi/kunjungi soltius.co.id — anchor funnel: **SAP S/4HANA Manufacturing** (per tracker).
- **TANPA aside Soltius di tengah body** (style_addendum §6). Sentuhan praktisi di body boleh TANPA nama Soltius (mis. "di lapangan, BOM versi engineering dan versi produksi yang tidak sinkron adalah temuan paling umum saat penataan master data").

## Internal links to place (BATCH OVERRIDE: 2 SAJA — 1 hub + 1 cousin, inline natural, tanpa "BACA JUGA")

> Landing page kosong di sheet → hub dipilih strategist (keputusan standing 2026-07). Kedua URL diverifikasi **200/OK via WebFetch hari ini (2026-07-06)**. Penulis tetap cek ulang saat menulis.

- **Hub (halaman soltius.co.id paling relevan)**: `https://www.soltius.co.id/id/blog/digital-manufaktur-sistem` — anchor natural: "sistem manufaktur digital" — why: BOM adalah master data inti digitalisasi produksi; halaman ini hub cluster manufaktur Soltius dan satu garis funnel dengan CTA SAP S/4HANA Manufacturing (hub yang sama menaungi `digital-manufacturing-01..05`; preseden link: `mrp-c01`). Tempatkan inline di lead.
- **Cousin**: `https://www.soltius.co.id/id/blog/konsep-warehouse-management-system-yang-wajib-anda-tahu` — anchor natural: "manajemen gudang" / "data persediaan komponen" — why: hasil explode BOM berujung pada kebutuhan komponen yang hidup di stok/gudang; akurasi BOM dan akurasi persediaan saling menopang. Tautkan di H2 #3. Preseden: dipakai `mrp-c01`, `lead-time-c01`, `safety-stock-c01` dan lolos editor.
- *Catatan cluster*: sibling `mrp-c01` (2026-06) adalah rujukan alami saat menyebut MRP — **jika** live URL-nya tersedia saat penulisan, editor BOLEH menukar cousin dengan sibling itu; total tautan internal TETAP 2, hub manufaktur diprioritaskan.

## E-E-A-T signals to embed

- **Angka/fakta spesifik** (≥4 angka inline per addendum §4): tabel contoh Level 0/1/2 dengan qty (5 roda kastor, 4 baut M8, 0,8 m² kain, base quantity 1 unit); perkalian kebutuhan di FAQ (100 kursi → 500 roda kastor); semua contoh berlabel "ilustrasi". JANGAN mengarang benchmark industri.
- **Authoritative sources to cite (≥2 — saran, sitasi final 1–2 di artikel):**
  1. **ASCM (Association for Supply Chain Management / APICS)** — definisi standar bill of materials: ASCM Supply Chain Dictionary (`https://www.ascm.org/learning-development/certifications-credentials/dictionary/`) — sumber konseptual paling kredibel; edisi ke-19.
  2. **SAP official** — Bills of Material in Production Planning (SAP Help Portal): `https://help.sap.com/docs/SAP_S4HANA_ON-PREMISE/18ee18df146f46e9a7738186eebceaa7/ff04c453f57eb44ce10000000a174cb4.html` — struktur BOM header/item, base quantity, penggunaan oleh MRP/produksi/costing. Alternatif: `https://learning.sap.com/courses/exploring-basic-data-for-manufacturing-and-product-management-in-sap-s-4hana/introducing-bills-of-material-boms-`.
- **First-party Soltius angle**: pengalaman implementasi SAP di industri manufaktur (Automotive, Consumer Products, Mill Products — dari company_profile) — dipakai di positioning line Kesimpulan, tanpa angka klien karangan.

## AI Overview & GEO optimization (seo_playbook §2a, dipadatkan per addendum §5)

- **Definition snippet blockquote** setelah lead — "Ringkasnya:" 40–60 kata, arah: *"Ringkasnya: bill of material (BOM) adalah daftar terstruktur seluruh bahan baku, komponen, dan sub-assembly — lengkap dengan kode item, kuantitas, dan satuannya — yang dibutuhkan untuk membuat satu unit produk jadi. BOM menjadi acuan bersama tim desain, produksi, pengadaan, dan keuangan, serta input utama perhitungan kebutuhan material."* (INI satu-satunya definisi — body tidak boleh menyatakannya ulang dengan kata lain.)
- **Jawaban langsung 40–60 kata segera setelah TIAP H2** berisi poin baru milik H2 itu (dua sumbu jenis; cara membaca level & elemen baris; BOM sebagai master data lintas proses), BUKAN parafrase snippet.
- **Satu paragraf = satu poin quotable & verifiable.**
- **Entity list** (nama penuh saat sebutan pertama, akronim di-expand sekali): bill of material (BOM), Engineering BOM (EBOM), Manufacturing BOM (MBOM), single-level BOM, multi-level/indented BOM, sub-assembly (rakitan antara), base quantity, kode item (part number), MRP (Material Requirements Planning), explode/ledakan BOM, product costing, SAP S/4HANA Manufacturing, ASCM (Association for Supply Chain Management).
- **Format match**: tabel untuk jenis BOM + kapan dipakai (H2 #1); tabel Level-Kode-Komponen-Qty-Satuan untuk contoh (H2 #2); prosa padat untuk fungsi/relasi (H2 #3). Dua tabel cukup — jangan paksa list tambahan melampaui 1000 kata.
- **FAQ**: 2–3 Q&A, parseable FAQPage schema; `dateModified` akurat di meta block.

## Data captured this run

- **Source(s)**: WebSearch (Google ID + EN, 2026-07-06, 4 kueri) — peta pesaing "bill of material adalah", struktur bertingkat/"bom produksi", verifikasi fakta BOM di SAP S/4HANA (help.sap.com + learning.sap.com), kandidat sumber ASCM. WebFetch SERP Google **terblokir** (halaman fallback) — fallback WebSearch sesuai SOP. WebFetch verifikasi 2 URL internal Soltius **berhasil (200/OK)**.
- **Apr 2026 rank** (from report): `n/a` — keyword baru, tidak dilacak di `seo_report_apr2026.md`.
- **Volume / KD / trend**: `n/a (Ahrefs not connected)`. Sinyal kualitatif: SERP ID sangat padat (10+ artikel definisi dari Accurate, Kledo, HashMicro, Mekari Jurnal, PRIEDS, 8thinktank, ScaleOcean, MAS Software, Pluxee, GreatDay HR) → volume jelas ada; semua format katalog-jenis untuk UMKM → beatable dengan tabel BOM bertingkat utuh + dua-sumbu jenis + sitasi otoritatif + GEO.
- **SERP features present**: explainer definisi mendominasi; PAA + AI Overview sangat mungkin aktif untuk kueri definisional ini (tidak terkonfirmasi via scrape — consent page).
- **cache_source**: `n/a` — mode conditional `/single-article`; riset ditangkap inline di brief ini.

## Notes for SME researcher

- Verifikasi **struktur BOM di SAP S/4HANA** (BOM header + BOM item, base quantity, dipakai MRP/produksi/pengadaan/costing) via SAP Help Portal / learning.sap.com — gunakan nama persis, jangan bawa istilah modul lain (routing, work center milik `sap-pp-c01`).
- Ambil **definisi ASCM/APICS** untuk menyelaraskan snippet (daftar bahan baku, komponen, sub-assembly + kuantitas untuk satu produk jadi).
- Pastikan pembagian **EBOM vs MBOM** akurat (as-designed vs as-built/manufactured; MBOM memuat kemasan & urutan proses) — sumber kredibel (SAP, NetSuite/TechTarget boleh sebagai pembanding, sitasi final tetap ASCM/SAP).
- **Contoh tabel kursi kantor**: cek aritmetika sederhana konsisten (100 kursi × 5 roda = 500) dan label "ilustrasi" terpasang.
- **Boundary dedup**: JANGAN menyediakan materi cara kerja MRP (netting/lotting/offsetting/exploding, MPS, Inventory Status File, MRP II, MRP Live — milik `mrp-c01`); JANGAN membedah modul SAP PP (milik `sap-pp-c01`). Relasi BOM→MRP cukup 2–3 kalimat. **Dossier ringkas saja** — artikel target 900 kata.
- Cek 2 URL internal (hub `digital-manufaktur-sistem` + cousin `konsep-warehouse-management-system-yang-wajib-anda-tahu`) tetap 200/OK.

## Notes for future strategist runs

Artikel ini SENGAJA TIDAK mencakup (untuk menghindari kanibalisasi + disisakan untuk artikel lain):
- **Cara kerja MRP** (input-proses-output, langkah, MRP II/ERP, MRP Live/pMRP) — sudah dimiliki `mrp-c01` (2026-06).
- **Modul SAP PP secara utuh** (routing, work center, production order, penerapan di manufaktur) — milik `sap-pp-c01` (batch ini, row 11).
- **BOM management lanjutan** (engineering change management/ECN, versi & revisi BOM, configurable BOM/variant configuration) — kandidat artikel terpisah cluster manufaktur.
- **Product costing berbasis BOM** (kalkulasi HPP per struktur) — bersinggungan dengan `cara-menghitung-hpp-c01` (2026-06); di sini costing hanya disebut sebagai fungsi.
- **PLM / integrasi EBOM-MBOM antar sistem** (PLM ke ERP) — kandidat artikel lanjutan.

## Format overrides (batch conditional 2026-07)

Restating dari `conditional/2026-07/style_addendum.md` — MENGIKAT untuk researcher, writer, editor, validator:

- **Panjang: 800–1000 kata (target ~900)** — hitungan body H1 s/d CTA; <800 terlalu tipis, >1000 gagal (pangkas dengan membuang kalimat kosong/contoh redundan, bukan memampatkan jadi telegram).
- **TANPA image placeholder** — dilarang `{IMAGE_NN}` dalam bentuk apa pun; stage image-planner dilewati; konsep visual (struktur bertingkat) disampaikan via tabel/list — sesuai sheet notes, contoh BOM = tabel.
- **FAQ: 2–3 Q&A** (bukan 5–8); jawaban 30–60 kata, tiap jawaban memuat 1 fakta/angka; ambil dari PAA di atas.
- **Internal link: 2** (1 hub `digital-manufaktur-sistem` + 1 cousin `konsep-warehouse-management-system-yang-wajib-anda-tahu`), inline natural.
- **Definisi HANYA SEKALI** — di snippet "Ringkasnya:"; body/H2 dilarang mengulang definisi dengan kata lain; tidak ada H2 definitional.
- **Prosa padat on-point** — tanpa paragraf roadmap, tanpa transisi kosong; ritme tetap bervariasi (paragraf 1–4 kalimat); em-dash ≤2; tanpa adjektiva hype.
- **Lead ≤80 kata** (pain konkret + keyword + janji artikel).
- **Kesimpulan ≤80 kata** + 1 positioning line Soltius; **soft website CTA (soltius.co.id) = baris terakhir**, terpisah dari Kesimpulan; maksimal 2 mention Soltius total.
