---
keyword: "sap pp"
keyword_slug: "sap-pp"
landing_page: ""
month: "2026-07"
brief_id: "sap-pp-c01"
angle: "fungsi-modul-sap-pp-dan-penerapannya-di-manufaktur"
angle_hash: "sha1:1fbed6a6a309"
search_intent: "informational"
target_word_count: 900
strategist_run_date: "2026-07-06"
mode: "conditional-given-angle"
batch: "conditional-2026-07 (style_addendum.md WAJIB — 800–1000 kata, tanpa image placeholder, FAQ 2–3, 2 internal link)"
dedup_result: "DISTINCT — Jaccard tertinggi ~0.15 vs mrp-c01 (2026-06) (< 0.4)"
---

# SAP PP (Production Planning): Fungsi dan Penerapannya di Manufaktur

> Working Title diberikan user — dipertahankan apa adanya (68 chars; primary keyword "SAP PP" di 6 karakter pertama). Supporting keyword "modul sap pp" tertangkap natural di lead + H2 #1. Penulis TIDAK mengubah substansi angle.
>
> **Meta title (≤60):** SAP PP (Production Planning): Fungsi & Penerapannya
> **Meta description (140–160):** SAP PP (Production Planning) adalah modul perencanaan produksi di SAP S/4HANA. Kenali fungsi utamanya, master data, tipe manufaktur, dan kapan butuh PP/DS.
> **Slug (≤60):** sap-pp-production-planning-fungsi-penerapan

## Hook hypothesis

Manajer produksi dan PPIC yang meriset "sap pp" di Google Indonesia menemukan dua kutub: glossary pendek dan halaman kursus/training yang bicara transaksi teknis — hampir tidak ada artikel Bahasa Indonesia yang menjelaskan modul SAP PP dari kacamata keputusan bisnis: fungsi apa saja yang dijalankannya, master data apa yang harus siap, tipe manufaktur mana yang didukung, dan kapan PP standar tidak lagi cukup. Artikel ini mengisi celah itu padat: 5 fungsi inti dalam satu siklus rencana→eksekusi→konfirmasi, tabel tipe manufaktur, alur penerapan order-to-confirmation, lalu eskalasi natural ke SAP PP/DS (Production Planning and Detailed Scheduling) sebagai CTA. Ini artikel "jembatan ke cluster Manufaktur" per tracker — Soltius kredibel bicara sebagai mitra implementasi SAP lintas industri manufaktur (Automotive, Consumer Products, Mill Products), bukan pembuat software-nya.

## Primary keyword

`sap pp`

Supporting keyword (given): `modul sap pp`

(Kueri produk/modul — pencari B2B Indonesia memakai istilah Inggris + penjelasan Bahasa Indonesia. Artikel ini melengkapi cluster manufaktur: `mrp-c01` (2026-06) memiliki KONSEP MRP, `bill-of-materials-c01` (batch ini) memiliki master data BOM — artikel ini memiliki MODUL SAP PP secara utuh.)

## Secondary / LSI keywords (8–12)

- modul SAP PP / modul production planning
- perencanaan produksi (production planning)
- production order (pesanan produksi)
- master data produksi
- work center (stasiun kerja)
- routing (urutan operasi)
- Bill of Materials (BOM) — sebagai master data, bukan bahasan
- MRP (Material Requirements Planning) — sebagai salah satu fungsi, bukan bahasan
- capacity planning (perencanaan kapasitas)
- konfirmasi produksi / shop floor control
- discrete manufacturing, process manufacturing, repetitive manufacturing
- SAP PP/DS (Production Planning and Detailed Scheduling)

## Search intent & SERP feature targets

- **Stage**: awareness → consideration (pembaca memetakan isi modul PP sebelum masuk keputusan implementasi/optimasi produksi)
- **Format**: module explainer + list fungsi ber-lead-in bold + tabel tipe manufaktur
- **Surface targets**:
  - [x] AI Overview (Google SGE) / AI-engine citation (Perplexity, ChatGPT) — definisi 40–60 kata + list fungsi + tabel tipe manufaktur quotable baris-per-baris
  - [x] Featured Snippet (definisi + list fungsi)
  - [x] People Also Ask

## SERP landscape (live scrape today)

> **Catatan metode:** WebFetch ke `google.com/search?q=sap+pp&hl=id&gl=id` mengembalikan halaman error/blokir (bukan SERP organik) — konsisten dengan seluruh run conditional 2026-06/07. Degradasi anggun ke **WebSearch** (2026-07-06, 4 kueri ID + EN) sesuai SOP CLAUDE.md §11. Volume/KD: `n/a (Ahrefs not connected)`.

**Top competing pages (WebSearch, kueri Bahasa Indonesia):**
1. `https://www.guru99.com/introduction-sap-pp.html` (versi terjemahan ID) — Guru99 — *angle*: pengantar SAP PP gaya tutorial training; teknis ke arah transaksi/konfigurasi, bukan lensa keputusan bisnis.
2. `https://www.linuxid.net/istilah/sap-production-planning/` — LinuxID — *angle*: glossary definisi singkat "apa itu SAP Production Planning"; dangkal, tanpa struktur fungsi.
3. `https://8thinktank.com/modul-sap/` — Think Tank Solusindo — *angle*: katalog "modul SAP yang paling penting"; PP hanya salah satu entri, tidak dibedah.
4. `https://kursussaponline.com/product/sap-pp/` & `https://www.edutechsolution.co.id/...sap-production-planning-sap-pp...` — JNC / Edutech — *angle*: halaman produk kursus/training SAP PP; intent komersial pelatihan, bukan explainer.
5. (EN, pembanding format) `https://www.redwood.com/glossary/sap-production-planning-pp/` dan `https://community.sap.com/...introduction-to-sap-pp-production-planning...` — glossary vendor + blog komunitas SAP; menyebut integrasi MM/SD/QM/FICO dan sub-fungsi, tanpa konteks Indonesia.

**Gaps to exploit** (yang TIDAK dicakup baik oleh top hasil):
- **SERP ID terbelah antara glossary dangkal dan halaman kursus** — tidak ada satu pun artikel Bahasa Indonesia yang menyajikan fungsi SAP PP sebagai siklus utuh (rencana → order → konfirmasi) untuk pembaca bisnis (ops lead/CIO). Itu format kita.
- **Tipe manufaktur tidak pernah dipetakan** — tidak ada tabel discrete vs process vs repetitive (+ Kanban) dengan contoh industrinya; padahal ini penentu relevansi PP bagi pabrik pembaca. Tabel kita = diferensiasi utama + snippet bait.
- **PP standar vs PP/DS tidak dijelaskan di mana pun di SERP ID** — kapan penjadwalan infinite capacity tidak lagi cukup dan perlu finite scheduling; ini jembatan CTA kita (funnel-to per tracker: SAP PP/DS).
- **Nol konteks Indonesia dan nol sitasi otoritatif** — kita masukkan kontribusi industri pengolahan 19,07% PDB 2025 (BPS/Kemenperin) + sumber SAP resmi.

**People Also Ask / kueri turunan** (dari WebSearch ID, mewakili PAA — SERP scrape terblokir):
1. Apa itu SAP PP (Production Planning)?
2. Apa saja fungsi modul SAP PP?
3. Apa perbedaan SAP PP dan MRP?
4. SAP PP terintegrasi dengan modul apa saja?
5. Apa saja master data dalam SAP PP?
6. Apa perbedaan discrete, process, dan repetitive manufacturing?
7. Apa itu SAP PP/DS?

## Distinct angle vs. history

- **Closest prior article in this cluster**: `mrp-c01` (conditional 2026-06, "Apa Itu MRP dan Cara Kerjanya") — flagged di tracker untuk DIFFERENTIATE. Tetangga lain: `bill-of-materials-c01` (batch ini — BOM sebagai master data), `digital-manufacturing-01..05` (2026-06 — smart factory/MES/OEE), `cara-kerja-sistem-sap-c01` (2026-06 — SAP umum, modul hanya didaftar), `sap-s4hana-c01` (batch ini — pillar produk S/4HANA).
- **How this brief differs**: `mrp-c01` adalah explainer KONSEP/METODE MRP (input-proses-output, netting-lotting-offsetting-exploding, MRP vs MRP II vs ERP). Artikel ini membedah MODUL SAP PP: 5 fungsi dalam satu siklus, master data yang menopangnya, tipe manufaktur yang didukung, alur penerapan order-to-confirmation, dan eskalasi ke PP/DS. **Boundary tegas untuk writer (sesuai dedup caution tracker): MRP disinggung sebagai SALAH SATU fungsi PP, maksimal 2–3 kalimat ("PP menjalankan MRP untuk menghitung kebutuhan material dari rencana produksi") + 1 jawaban FAQ perbedaan PP vs MRP — JANGAN menjelaskan langkah netting/lotting/offsetting/exploding, MPS/Inventory Status File, MRP II, atau MRP Live/pMRP (semuanya milik `mrp-c01`).** BOM disebut hanya sebagai salah satu dari 4 master data, 1–2 kalimat — jenis/struktur BOM milik `bill-of-materials-c01`. Fitur umum S/4HANA (in-memory, Fiori) milik `sap-s4hana-c01`. MES/shop-floor digital & OEE milik cluster `digital-manufacturing`.
- **Subtopic overlap (Jaccard) with closest prior**: subtopik bersama dengan `mrp-c01` = {MRP (di sana kerangka penuh, di sini 1 fungsi), BOM (di sana input MRP, di sini master data), konteks perencanaan produksi} ≈ 2–3 dari union ~17 → **Jaccard ≈ 0.15 (< 0.4 ✓)**. Vs `bill-of-materials-c01` ≈ 0.13 (irisan: BOM, master data produksi — boundary "dokumen vs modul" sudah saling ditegaskan di kedua brief); vs `cara-kerja-sistem-sap-c01` ≈ 0.13 (irisan: PP disebut dalam daftar modul, integrasi antar modul); vs `digital-manufacturing-01/02` ≈ 0.10 (irisan: konteks manufaktur/S4 PP mention); vs `sap-s4hana-c01` ≈ 0.10 (irisan: S/4HANA, modul — brief itu eksplisit menyisakan "kedalaman modul PP" untuk artikel ini). angle_hash `sha1:1fbed6a6a309` tidak berbenturan dengan `articles_history/index.json` (52 entri) maupun brief batch conditional 2026-06 (14) dan 2026-07 (10 yang sudah ada). **Hasil dedup: DISTINCT — aman ditulis.**
- **Cannibalization check (soltius.co.id live)**: tidak ada artikel khusus "SAP PP" di soltius.co.id — PP hanya muncul sebagai entri di halaman daftar modul (`8-modul-sap-indonesia-...`, `modul-sistem-sap-terfavorit-...`). Artikel baru ini aman menjadi halaman kanonik untuk intent "sap pp" dan justru memperkuat halaman modul via internal link.

## Article skeleton — H2s the writer should expand (BATCH OVERRIDE: 3–4 H2 SAJA)

> Lead ≤80 kata (pain konkret + keyword + janji artikel, TANPA roadmap) → definition snippet blockquote "Ringkasnya:" 40–60 kata → body 4 H2 → FAQ 2–3 → Kesimpulan ≤80 kata → soft CTA baris terakhir. **Definisi HANYA di snippet** — H2 mana pun DILARANG menyatakan ulang definisi dengan kata lain; tidak ada H2 "Apa itu SAP PP".

**Definition snippet (arah, writer poles)**: "Ringkasnya: SAP PP (Production Planning) adalah modul SAP untuk perencanaan dan pengendalian produksi di perusahaan manufaktur — dari menghitung kebutuhan material dan kapasitas, menerbitkan production order, sampai mencatat konfirmasi hasil di lantai pabrik. Di SAP S/4HANA, PP terintegrasi langsung dengan modul pembelian, penjualan, kualitas, dan keuangan dalam satu sistem." (±50 kata)

1. **H2 (question-format + list)**: "Apa Saja Fungsi Utama Modul SAP PP?" — *covers*: jawaban langsung 40–60 kata berisi poin BARU (fungsi PP membentuk siklus tertutup rencana → eksekusi → umpan balik, bukan daftar fitur lepas). Lalu **list 5 fungsi dengan lead-in bold**, 1 paragraf pendek per fungsi: **(1) Perencanaan permintaan (demand management)** — menetapkan apa dan berapa yang akan diproduksi; **(2) Perhitungan kebutuhan material (MRP)** — PP menjalankan MRP untuk menurunkan rencana produksi menjadi kebutuhan komponen dan jadwal pengadaan; MAKS 2–3 kalimat, jangan bedah cara kerjanya (milik `mrp-c01`); **(3) Perencanaan kapasitas (capacity planning)** — menyeimbangkan beban kerja terhadap mesin, tenaga kerja, dan shift agar tidak terjadi bottleneck; **(4) Production order & eksekusi** — rencana menjadi pesanan produksi yang dieksekusi di lantai pabrik; **(5) Konfirmasi & pencatatan biaya** — kuantitas dan waktu aktual dikonfirmasi, selisih rencana vs aktual mengalir ke costing (FI/CO). Sisipkan cousin link modul SAP di pengantar H2 ini ("salah satu modul SAP yang paling banyak digunakan").
2. **H2 (praktis/terstruktur + TABEL)**: "Master Data dan Tipe Manufaktur yang Didukung SAP PP" — *covers*: jawaban langsung 40–60 kata (PP berdiri di atas 4 master data dan melayani 3 tipe manufaktur; pemilihan tipe menentukan cara sistem membuat order dan mencatat hasil). Elaborasi singkat 4 master data dalam 1 paragraf/list ringkas: **material master**, **Bill of Materials (BOM)** (1 kalimat — struktur/jenisnya dibedah artikel BOM), **work center** (stasiun kerja tempat operasi dilakukan, pemilik kapasitas), **routing** (urutan operasi + waktu standar). Lalu **satu tabel tipe manufaktur** (kolom: tipe · karakteristik · contoh industri): **Discrete manufacturing** — produk per unit/lot, order-based, BOM+routing per produk (otomotif, elektronik, furnitur); **Process manufacturing (PP-PI)** — berbasis formula/resep dan batch (kimia, farmasi, makanan-minuman); **Repetitive manufacturing** — produk sama diproduksi berulang berbasis periode & kuantitas, bukan per order (consumer goods bervolume tinggi). Tambah 1 kalimat: **Kanban** tersedia sebagai metode pengendalian pengisian material berbasis tarikan (pull) — sebut saja, jangan bedah.
3. **H2 (question-format — penerapan, sesuai judul)**: "Bagaimana Penerapan SAP PP di Lantai Produksi?" — *covers*: jawaban langsung 40–60 kata (alur order-to-confirmation: rencana → production order → eksekusi per routing di work center → konfirmasi kuantitas & waktu aktual → stok dan biaya terbarui otomatis di modul lain). Elaborasi: (a) alur bernomor ringkas ATAU prosa padat 4 langkah (buat/rilis order → goods issue material → operasi & konfirmasi → goods receipt produk jadi) — pilih salah satu format, jangan dobel; (b) integrasi lintas modul dalam 1–2 kalimat: konfirmasi PP menggerakkan **5 modul** — MM (stok/pengadaan), SD (janji kirim), QM (inspeksi), PM (ketersediaan mesin), FI/CO (biaya produksi); (c) konteks Indonesia 1–2 kalimat: industri pengolahan menyumbang **19,07% PDB 2025** — sektor terbesar (BPS via Kemenperin) — menjadikan disiplin perencanaan produksi berbasis sistem relevan luas; (d) **honest hedging 1–2 kalimat** (pengganti H2 honest per addendum §2): SAP PP hanya sebaik master data dan disiplin konfirmasinya — routing yang usang atau konfirmasi yang menumpuk di akhir shift membuat rencana sistem menyimpang dari kondisi lantai pabrik. Tempatkan hub link "sistem manufaktur digital" natural di bagian ini.
4. **H2 (decision/funnel, ringkas)**: "Kapan Perusahaan Perlu Naik ke SAP PP/DS?" — *covers*: jawaban langsung 40–60 kata (PP standar menjadwalkan dengan asumsi kapasitas tak terbatas/infinite; **SAP PP/DS (Production Planning and Detailed Scheduling)** menambahkan penjadwalan kapasitas terbatas/finite hingga **level jam**, mempertimbangkan batasan mesin, tenaga kerja, dan urutan setup sekaligus). Elaborasi 1–2 paragraf: sinyal butuh PP/DS — bottleneck bergiliran, produk multi-varian dengan waktu setup signifikan, janji kirim yang sering meleset; PP/DS **sudah tertanam (embedded) di SAP S/4HANA** dan diaktifkan melalui konfigurasi (verifikasi researcher — jangan bahas lisensi/harga tanpa sumber). Ini jembatan CTA (funnel-to tracker: SAP PP/DS) — tetap vendor-teach, tanpa menyebut Soltius di body.
5. **FAQ (2–3 Q&A, jawaban 30–60 kata, tiap jawaban memuat 1 fakta/angka)** — pilih dari PAA:
   - "Apa perbedaan SAP PP dan MRP?" — MRP adalah metode perhitungan kebutuhan material; di SAP, MRP dijalankan sebagai SATU dari 5 fungsi modul PP yang juga mencakup kapasitas, production order, dan konfirmasi produksi. (Menegaskan positioning dedup vs `mrp-c01`; rujuk konsepnya tanpa mengulang cara kerjanya.)
   - "SAP PP terintegrasi dengan modul apa saja?" — 5 modul inti: MM (material), SD (penjualan), QM (kualitas), PM (pemeliharaan), FI/CO (keuangan & costing); konfirmasi produksi otomatis memperbarui stok dan biaya.
   - "Apa perbedaan SAP PP dan SAP PP/DS?" — PP standar menjadwalkan infinite capacity (harian); PP/DS menambah detailed scheduling finite capacity hingga level jam dan tertanam di S/4HANA.
6. **## Kesimpulan** — ≤80 kata: SAP PP = mesin perencanaan-eksekusi produksi; nilainya lahir dari siklus tertutup rencana-konfirmasi dan master data yang dirawat; saat penjadwalan detail jadi kebutuhan, jalurnya PP/DS; 1 positioning line Soltius (lihat anchor). CTA konsultatif.
7. **Soft website CTA (baris terakhir, terpisah)** — ajakan halus mengunjungi soltius.co.id; anchor produk: **SAP PP/DS** (per tracker).

(≥1 question-format: H2 #1, #3, #4 ✓; ≥1 praktis/terstruktur: H2 #1 list ber-lead-in bold + H2 #2 tabel ✓ (tabel tipe manufaktur diprioritaskan; bila melewati 1000 kata, list fungsi H2 #1 dipadatkan jadi paragraf pendek, tabel dipertahankan); honest hedging di H2 #3 ✓; ≥4 angka spesifik inline: 5 fungsi, 4 master data, 3 tipe manufaktur, 5 modul terintegrasi, 19,07% PDB, level jam PP/DS ✓. **DILARANG menulis {IMAGE_NN} dalam bentuk apa pun** — alur produksi dan tipe manufaktur disampaikan via list/tabel.)

## SAP / partner tech to teach (dari research; keyword tidak ada di product_matrix.md — framing universal berlaku; baris matrix terdekat: #2 digital manufacturing, "S/4HANA Production Planning (PP)")

Konsep yang dijelaskan akurat & vendor-neutral:
- **SAP PP (Production Planning)** — modul perencanaan & pengendalian produksi; di S/4HANA menjadi bagian lini fungsional manufacturing. Fungsi: demand management, MRP, capacity planning, production order, konfirmasi/shop floor.
- **Master data produksi**: material master, BOM, work center, routing — nama persis, jangan tertukar (routing = urutan operasi; work center = tempat operasi & pemilik kapasitas).
- **Tipe manufaktur**: discrete, process (PP-PI, berbasis master recipe/batch), repetitive (berbasis periode-kuantitas); Kanban sebagai metode pengendalian pull.
- **SAP PP/DS (Production Planning and Detailed Scheduling)** — advanced planning tertanam di S/4HANA: finite capacity scheduling, mempertimbangkan batasan mesin/tenaga kerja, optimasi urutan setup, akurasi hingga level jam. CTA/funnel product — Soltius **mengimplementasikan dan mendukung**, bukan membuat.

**Fakta yang WAJIB diverifikasi researcher:**
- Daftar fungsi & penamaan sub-komponen PP di S/4HANA (demand management, MRP, capacity planning, production orders, confirmation) — via help.sap.com / learning.sap.com; jangan pakai struktur menu ECC lama tanpa konteks.
- Tipe manufaktur di S/4HANA: discrete, **process manufacturing (PP-PI)**, **repetitive manufacturing** — konfirmasi istilah persis via SAP Help Portal (mis. "Production Planning and Control for Repetitive Manufacturing", `https://help.sap.com/docs/SAP_S4HANA_ON-PREMISE/21aead0c98bd4755abdacd91c99e3393/9577b6535fe6b74ce10000000a174cb4.html`).
- **PP/DS tertanam di S/4HANA + diaktifkan via konfigurasi + finite scheduling hingga level jam** — via SAP Help "PP/DS with SAP S/4HANA" (`https://help.sap.com/docs/SAP_S4HANA_ON-PREMISE/f899ce30af9044299d573ea30b533f1c/aa35c95360267514e10000000a174cb4.html` — researcher konfirmasi URL aktif) dan blog SAP Community "Overview of the key functionality PP/DS embedded on S/4HANA" (`https://community.sap.com/t5/supply-chain-management-blog-posts-by-sap/overview-of-the-key-functionality-production-planning-and-detailed/ba-p/13409001`). JANGAN klaim soal lisensi advanced planning tanpa sumber.
- Integrasi PP dengan **MM, SD, QM, PM, FI/CO** — konfirmasi 5 modul ini (jangan menambah HCM tanpa sumber).
- **Kontribusi industri pengolahan 19,07% PDB 2025** + pertumbuhan 5,3% — verifikasi dari Kemenperin (`https://sippa.kemenperin.go.id/news/post/2026/02/20/37/industri-pengolahan-mendominasi-kinerja-ekonomi-nasional`) / BPS; kutip tahun & sumber persis.
- JANGAN mengarang angka efisiensi ("PP mengurangi downtime X%") — tidak ada sumbernya.

## Soltius anchor (BATCH OVERRIDE: maks 2 self-mention)

- **1 positioning line di Kesimpulan**: Sebagai SAP Platinum Partner melalui United VARs dengan pengalaman implementasi lintas industri manufaktur (Automotive, Consumer Products, Mill Products), Soltius mengimplementasikan dan mendampingi SAP PP hingga PP/DS — dari penataan master data produksi sampai dukungan pasca go-live. (Framing: implements/supports, NEVER builds/owns; tanpa superlatif.)
- **1 soft website CTA** (baris terakhir): ajakan konsultasi/kunjungi soltius.co.id — anchor funnel: **SAP PP/DS** (per tracker).
- **TANPA aside Soltius di tengah body** (style_addendum §6). Suara praktisi anonim diperbolehkan ("di lapangan, penyebab rencana produksi meleset paling sering bukan sistemnya, melainkan konfirmasi yang telat dicatat").

## Internal links to place (BATCH OVERRIDE: 2 SAJA — 1 hub + 1 cousin, inline natural, tanpa "BACA JUGA")

> Landing page kosong di sheet → hub dipilih strategist (keputusan standing 2026-07). Kedua URL diverifikasi **200/OK via WebFetch hari ini (2026-07-06)**. Penulis tetap cek ulang saat menulis.

- **Hub (halaman soltius.co.id paling relevan)**: `https://www.soltius.co.id/id/blog/digital-manufaktur-sistem` — anchor natural: "sistem manufaktur digital" / "digitalisasi produksi" — why: hub cluster manufaktur Soltius (menaungi `digital-manufacturing-01..05`; preseden: `mrp-c01`, `bill-of-materials-c01`); SAP PP adalah inti ERP dari digitalisasi produksi — sesuai sheet notes "Jembatan ke cluster Manufaktur". Tempatkan inline di H2 #3 (penerapan) atau lead.
- **Cousin**: `https://www.soltius.co.id/id/blog/8-modul-sap-indonesia-yang-paling-banyak-digunakan-perusahaan` — anchor natural: "modul SAP yang paling banyak digunakan" — why: halaman existing yang mendaftar PP sebagai modul #2 (diverifikasi hari ini); menangkap supporting keyword "modul sap pp" dan memberi konteks posisi PP di antara modul lain. Tempatkan di pengantar H2 #1. (Catatan URL: gunakan varian `...-paling-banyak-digunakan-perusahaan` yang terverifikasi 200/OK — bukan varian tanpa `-perusahaan` di product_matrix.md.)
- *Catatan cluster*: sibling `mrp-c01` (2026-06) dan `bill-of-materials-c01` (batch ini) adalah rujukan alami saat menyinggung MRP/BOM — **jika** live URL salah satunya tersedia saat penulisan, editor BOLEH menukar cousin dengan sibling itu; total tautan internal TETAP 2, hub manufaktur diprioritaskan.

## E-E-A-T signals to embed

- **Angka/fakta spesifik** (≥4 angka inline per addendum §4): 5 fungsi inti PP; 4 master data; 3 tipe manufaktur; 5 modul terintegrasi (MM, SD, QM, PM, FI/CO); industri pengolahan 19,07% PDB Indonesia 2025 (BPS/Kemenperin) + pertumbuhan 5,3% (opsional); penjadwalan PP/DS hingga level jam. Semua bersumber — JANGAN mengarang benchmark efisiensi.
- **Authoritative sources to cite (≥2 — saran, sitasi final 1–2 di artikel):**
  1. **SAP official (SAP Help Portal / SAP Community)** — "PP/DS with SAP S/4HANA" (help.sap.com, doc set `f899ce30af9044299d573ea30b533f1c`) atau blog SAP Community "Overview of the key functionality PP/DS embedded on S/4HANA" (`https://community.sap.com/t5/supply-chain-management-blog-posts-by-sap/overview-of-the-key-functionality-production-planning-and-detailed/ba-p/13409001`) — fungsi PP, tipe manufaktur, PP/DS embedded + finite scheduling.
  2. **BPS / Kemenperin** — kontribusi industri pengolahan terhadap PDB 19,07% (2025): `https://sippa.kemenperin.go.id/news/post/2026/02/20/37/industri-pengolahan-mendominasi-kinerja-ekonomi-nasional` (mengutip BPS; alternatif tabel BPS langsung) — konteks relevansi manufaktur Indonesia.
  3. (Opsional pembanding, bukan sitasi final) Redwood glossary "SAP Production Planning (PP)" / Guru99 — cek konsistensi daftar fungsi.
- **First-party Soltius angle**: pengalaman implementasi SAP di industri manufaktur (Automotive, Consumer Products, Mill Products — dari company_profile) — dipakai di positioning line Kesimpulan; di body cukup suara praktisi anonim tanpa nama Soltius.

## AI Overview & GEO optimization (seo_playbook §2a, dipadatkan per addendum §5)

- **Definition snippet blockquote** "Ringkasnya:" 40–60 kata setelah lead (arah sudah ditulis di skeleton) — satu-satunya tempat definisi muncul; body DILARANG memparafrasekannya.
- **Jawaban langsung 40–60 kata segera setelah TIAP H2** — masing-masing berisi poin BARU milik H2 itu (siklus tertutup 5 fungsi; 4 master data + pemilihan tipe menentukan perilaku sistem; alur order-to-confirmation; infinite vs finite scheduling), BUKAN pengulangan snippet.
- **Satu paragraf = satu poin quotable & verifiable.**
- **Entity list** (nama penuh saat sebutan pertama, akronim di-expand sekali): SAP PP (Production Planning); SAP S/4HANA; MRP (Material Requirements Planning); Bill of Materials (BOM); work center; routing; production order; capacity planning; discrete manufacturing; process manufacturing (PP-PI); repetitive manufacturing; Kanban; SAP PP/DS (Production Planning and Detailed Scheduling); modul MM (Materials Management), SD (Sales and Distribution), QM (Quality Management), PM (Plant Maintenance), FI/CO (Finance/Controlling); BPS (Badan Pusat Statistik).
- **Format match**: list ber-lead-in bold untuk 5 fungsi (H2 #1); **tabel** untuk tipe manufaktur (H2 #2 — prioritas tertinggi, quotable baris-per-baris); alur bernomor ringkas atau prosa untuk penerapan (H2 #3); paragraf kriteria untuk H2 #4. Jangan paksa semua format sekaligus melampaui 1000 kata.
- **FAQ**: 2–3 Q&A, parseable FAQPage schema; `dateModified` akurat di meta block.

## Data captured this run

- **Source(s)**: WebSearch (Google ID + EN, 2026-07-06, 4 kueri) — peta pesaing "sap pp adalah / modul sap pp", fakta PP/DS embedded S/4HANA (SAP Community, CONSILIO, valantic, PIKON), tipe manufaktur via help.sap.com, statistik manufaktur Indonesia (BPS/Kemenperin 19,07% PDB 2025), audit cannibalization site:soltius.co.id. WebFetch SERP Google **terblokir** (halaman error) — fallback WebSearch sesuai SOP. WebFetch verifikasi 2 URL internal Soltius **berhasil (200/OK)**: hub `digital-manufaktur-sistem` + cousin `8-modul-sap-indonesia-yang-paling-banyak-digunakan-perusahaan` (PP = modul #2 di sana).
- **Apr 2026 rank** (from report): `n/a` — keyword baru, tidak dilacak di `seo_report_apr2026.md`.
- **Volume / KD / trend**: `n/a (Ahrefs not connected)`. Sinyal kualitatif: SERP ID untuk "sap pp" didominasi glossary (LinuxID), tutorial training (Guru99, kursussaponline, Edutech) dan katalog modul (8thinktank) — TIDAK ada explainer bisnis Bahasa Indonesia yang utuh → celah nyata; kueri niche B2B (volume moderat) tetapi high-fit dengan funnel Soltius (jembatan cluster manufaktur + CTA PP/DS).
- **SERP features present**: glossary/tutorial mendominasi; PAA + AI Overview kemungkinan aktif untuk kueri definisional modul (tidak terkonfirmasi via scrape — halaman blokir).
- **cache_source**: `n/a` — mode conditional `/single-article`; riset ditangkap inline di brief ini.

## Notes for SME researcher

- Verifikasi **daftar fungsi PP** dan penamaan persis di S/4HANA (demand management, MRP, capacity planning, production order, confirmation) via help.sap.com / learning.sap.com — jangan menyalin struktur ECC lama.
- Verifikasi **3 tipe manufaktur** (discrete; process/PP-PI berbasis master recipe & batch; repetitive berbasis periode-kuantitas) + Kanban sebagai metode pull — SAP Help Portal (URL repetitive manufacturing sudah di atas). Contoh industri per tipe harus masuk akal (otomotif/elektronik; kimia/farmasi/mamin; consumer goods volume tinggi).
- Verifikasi **PP/DS**: kepanjangan persis (Production Planning and Detailed Scheduling), tertanam di S/4HANA + aktivasi via konfigurasi, finite capacity scheduling hingga level jam, optimasi urutan setup — SAP Help / SAP Community (URL di atas). JANGAN masuk detail heuristik/optimizer (kandidat artikel lanjutan) dan JANGAN bahas lisensi tanpa sumber.
- Verifikasi **19,07% PDB 2025** industri pengolahan (BPS via Kemenperin, URL di atas) — kutip lembaga + tahun persis; pertumbuhan 5,3% opsional.
- **Boundary dedup (WAJIB dijaga di dossier)**: JANGAN menyediakan materi cara kerja MRP (netting/lotting/offsetting/exploding, MPS, Inventory Status File, MRP II, MRP Live/pMRP — milik `mrp-c01`); JANGAN membedah jenis/struktur BOM (milik `bill-of-materials-c01`); JANGAN bahas fitur umum S/4HANA in-memory/Fiori (milik `sap-s4hana-c01`); JANGAN bahas MES/OEE/shop-floor digital (milik cluster `digital-manufacturing`). **Dossier ringkas saja** — artikel target 900 kata.
- Cek 2 URL internal (hub + cousin, tercantum di atas) tetap 200/OK saat riset.

## Notes for future strategist runs

Artikel ini SENGAJA TIDAK mencakup (disisakan untuk artikel lain / menghindari kanibalisasi):
- **Cara kerja MRP** (input-proses-output, langkah, MRP II, MRP Live/pMRP) — milik `mrp-c01` (2026-06).
- **Jenis & struktur BOM** — milik `bill-of-materials-c01` (batch ini).
- **SAP PP/DS mendalam** (heuristik, optimizer, setup matrix, alert monitor, perbandingan vs APO) — kandidat artikel decision/how-to tersendiri; di sini hanya 1 H2 ringkas sebagai funnel.
- **Integrasi PP dengan MES / SAP Digital Manufacturing** (shop-floor digital, OEE) — milik cluster `digital-manufacturing` (2026-06).
- **PP-PI untuk industri proses secara khusus** (master recipe, batch management, kepatuhan farmasi/mamin) — kandidat artikel industri tersendiri.
- **Tahapan proyek implementasi** — milik `implementasi-erp-c01` (batch ini).

## Format overrides (batch conditional 2026-07)

Restating dari `conditional/2026-07/style_addendum.md` — MENGIKAT untuk researcher, writer, editor, validator:

- **Panjang: 800–1000 kata (target ~900)** — hitungan body H1 s/d CTA; <800 terlalu tipis, >1000 gagal (pangkas dengan membuang kalimat kosong/contoh redundan, bukan memampatkan jadi telegram).
- **TANPA image placeholder** — dilarang `{IMAGE_NN}` dalam bentuk apa pun; stage image-planner dilewati; konsep visual (alur produksi, tipe manufaktur) disampaikan via tabel/list.
- **FAQ: 2–3 Q&A** (bukan 5–8); jawaban 30–60 kata, tiap jawaban memuat 1 fakta/angka; ambil dari PAA di atas.
- **Internal link: 2** (1 hub `digital-manufaktur-sistem` + 1 cousin `8-modul-sap-indonesia-yang-paling-banyak-digunakan-perusahaan`), inline natural.
- **Definisi HANYA SEKALI** — di definition snippet "Ringkasnya:" (blockquote 40–60 kata setelah lead); body/H2 dilarang mengulang definisi snippet dengan kata lain; jawaban langsung tiap H2 berisi poin baru milik H2 itu.
- **Prosa padat on-point** — tanpa paragraf roadmap, tanpa transisi kosong; ritme tetap bervariasi (paragraf 1–4 kalimat); em-dash ≤2; tanpa adjektiva hype.
- **Lead ≤80 kata** (pain konkret + keyword + janji artikel).
- **Kesimpulan ≤80 kata** + 1 positioning line Soltius; **soft website CTA (soltius.co.id) = baris paling akhir**, terpisah dari Kesimpulan; maksimal 2 mention Soltius total.
