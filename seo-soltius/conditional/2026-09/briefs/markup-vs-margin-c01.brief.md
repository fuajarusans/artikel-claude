---
keyword: "markup dan margin"
keyword_slug: "markup-dan-margin"
landing_page: ""   # sheet kosong → hub dipilih strategist (keputusan standing sejak Juni). Hub = halaman solusi Retail (sejalan CTA anchor SAP S/4HANA Retail).
month: "2026-09"
brief_id: "markup-vs-margin-c01"
angle: "markup-vs-margin-rumus-konversi-kapan-pakai"
angle_hash: "sha1:d447d7e3f3cb736c0d5079c2e92287b94d5bc9ec"
search_intent: "comparison"   # perbedaan + how-to hitung; intent komparatif-praktis
target_word_count: 900
strategist_run_date: "2026-08-31"
mode: "conditional-given-angle"
batch: "conditional-2026-09 (style_addendum.md WAJIB — 800–1000 kata, tanpa image placeholder, FAQ 2–3, 2 internal link, definisi hanya sekali di snippet)"
dedup_result: "DISTINCT — Jaccard tertinggi ~0.06 vs laporan-laba-rugi-c01 (2026-08) dan ~0.05 vs cara-menghitung-hpp-c01 (2026-06); tidak ada tabrakan angle_hash. Resolusi dedup tracker diterapkan: fokus rumus markup vs margin + contoh + konversi + kapan pakai + kesalahan umum tertukar, TIDAK mengulang struktur laporan laba rugi."
---

# Markup vs Margin: Perbedaan dan Cara Menghitung Harga Jual

> Working Title diberikan user — substansi dipertahankan apa adanya. H1 memuat kedua entitas inti (markup, margin) dan janji "cara menghitung harga jual". Primary keyword `markup dan margin` masuk secara natural; varian "markup vs margin" adalah sinonim komparatif yang dipakai pencari.
>
> **H1 (artikel):** Markup vs Margin: Perbedaan dan Cara Menghitung Harga Jual *(58 char)*
> **Meta title (≤60):** Markup vs Margin: Beda & Cara Menghitung Harga Jual *(50 char)*
> **Meta description (140–160):** Markup dan margin sama-sama mengukur laba tetapi beda basis hitung. Pahami rumus, contoh, konversinya, dan kapan memakai masing-masing untuk menetapkan harga jual. *(159 char)*
> **Slug (≤60):** markup-vs-margin-perbedaan-cara-menghitung-harga-jual *(52 char)*

## Hook hypothesis

Seorang pemilik toko atau staf pricing sering menetapkan "markup 50%" lalu menganggarkan laba seolah marginnya juga 50% — padahal margin sebenarnya hanya 33,3%. Dua istilah ini terus tertukar karena keduanya mengukur selisih harga jual dan biaya, tetapi memakai penyebut berbeda: markup dihitung atas **biaya (HPP)**, margin atas **harga jual**. Akibatnya, satu transaksi dengan laba rupiah yang sama menghasilkan dua persentase berbeda, dan kesalahan ini menyebar ke seluruh katalog saat harga ditetapkan massal.

SERP Bahasa Indonesia untuk "markup dan margin" / "perbedaan markup dan margin" padat oleh blog accounting-SaaS (Mekari Jurnal, Kledo, Majoo, ScaleOcean, BoxHero, GPOS, Pegadaian, Ninja Xpress) dengan pola identik: definisi → dua rumus → satu contoh. Nyaris tidak ada yang menyajikan **rumus konversi markup↔margin** (alat praktis yang paling dicari pricing lead) maupun menjelaskan tegas **kapan memakai yang mana** — markup untuk menetapkan harga ke depan, margin untuk mengukur profitabilitas ke belakang (angka yang muncul di [laporan laba rugi](https://www.soltius.co.id/id/blog/laporan-laba-rugi-komponen-jenis-cara-membaca)). Soltius kredibel di titik ini bukan sebagai pembuat software, melainkan sebagai mitra implementasi SAP yang menata logika penetapan harga di atas **SAP S/4HANA Retail** — di mana markup dan margin ditegakkan konsisten lintas ribuan SKU, bukan dihitung ulang manual per produk. CTA tetap soft, setelah Kesimpulan.

## Primary keyword

`markup dan margin`

Supporting keyword (given): `perbedaan markup dan margin`

(Pola pencari Indonesia: istilah campur — "markup" & "margin" istilah Inggris, penjelasan Bahasa Indonesia. Intent komparatif ("perbedaan…") bercampur how-to ("cara menghitung harga jual"). Judul yang diberikan sudah memuat keduanya. Artikel melengkapi cluster keuangan: `cara-menghitung-hpp-c01` (2026-06) memegang perhitungan biaya/HPP, `laporan-laba-rugi-c01` (2026-08) memegang pembacaan laba per lapisan — konsep markup vs margin sebagai keputusan penetapan harga belum dimiliki siapa pun. Brief HPP 2026-06 bahkan **secara eksplisit menyisakan** "metode penetapan harga jual & strategi margin (markup, target costing)" untuk artikel terpisah — inilah artikel itu.)

## Secondary / LSI keywords (8–12)

- markup (persentase kenaikan atas biaya)
- margin (persentase laba atas harga jual)
- harga pokok penjualan (HPP) / harga modal
- harga jual
- margin laba kotor (gross margin)
- laba kotor (gross profit)
- basis perhitungan (biaya vs harga jual)
- konversi markup ke margin
- penetapan harga / cost-plus pricing
- persentase keuntungan
- target margin / strategi harga
- SAP S/4HANA Retail

## Search intent & SERP feature targets

- **Stage**: awareness → consideration (pembaca belajar membedakan + menghitung; UMKM, staf pricing/finance, pemilik toko). CTA halus.
- **Format**: definition snippet + dua rumus berdampingan + **contoh angka** + **tabel konversi markup↔margin** + tabel "kapan pakai" + FAQ.
- **Surface targets**:
  - [x] AI Overview (Google SGE) / kutipan AI-engine (Perplexity, ChatGPT) — definisi 40–60 kata + rumus + tabel konversi quotable
  - [x] Featured Snippet (definisi + dua rumus + tabel konversi)
  - [x] People Also Ask
  - [ ] Image Pack (skip — B2B finance/retail)

## SERP landscape (live scrape today)

> **Catatan metode:** WebFetch langsung ke `google.com/search?q=...&hl=id&gl=id` konsisten **terblokir** di seluruh run conditional (halaman consent/error, bukan SERP) — degradasi anggun ke **WebSearch** sesuai `CLAUDE.md` §11. Daftar di bawah dari WebSearch Bahasa Indonesia (2026-08-31, 2 kueri), urutan ≈ relevansi, bukan ranking pasti. Volume/KD: `n/a (Ahrefs not connected)`.

**Top competing pages (WebSearch ID):**
1. `https://kledo.com/blog/margin-dan-markup/` — Kledo — *angle*: "Pengertian, Perbedaan, dan Contohnya"; rumus + contoh, funnel software akuntansi.
2. `https://www.jurnal.id/id/blog/rumus-contoh-markup/` — Mekari Jurnal — *angle*: "Mark Up: Metode, Rumus, Manfaat, Contoh"; kuat di rumus markup + contoh kaos Rp20.000→Rp30.000 (markup 50%).
3. `https://majoo.id/solusi/detail/margin-dan-markup-apa-bedanya-ini-cara-menghitungnya-dalam-bisnis` — Majoo — *angle*: "apa bedanya + cara menghitung"; lensa POS/UMKM.
4. `https://scaleocean.com/id/blog/belajar-bisnis/perbedaan-margin-dan-markup` — ScaleOcean — *angle*: pengertian + perbedaan + contoh; framing ERP.
5. `https://pegadaian.co.id/artikel/wirausaha/perbedaan-markup-dan-margin` — Pegadaian — *angle*: "Mana yang tepat untuk bisnis?"; ringan, edukasi wirausaha.
6. `https://blog.ninjaxpress.co/beda-markup-vs-margin/` & `https://www.boxhero.io/id/blog/mau-untung-maksimal-kuasai-cara-hitung-margin-dan-markup-produk-anda` — Ninja Xpress / BoxHero — *angle*: beda + cara hitung untuk UMKM/logistik.
7. `https://www.gpos.id/blog/perbedaan-margin-dan-markup-harga-untuk-bisnis-apotek/` — GPOS — *angle*: satu-satunya vertikal (apotek); tetap pola definisi+rumus.
8. `https://mekari.com/blog/metode-markup/` — Mekari — *angle*: metode & rumus markup untuk penetapan harga.

**Gaps to exploit** (yang TIDAK dicakup baik oleh top hasil — ruang menang kita):
- **Rumus konversi markup↔margin absen**: hampir semua kompetitor berhenti di dua rumus terpisah + satu contoh. Nyaris tak ada yang memberi **Margin = Markup ÷ (1 + Markup)** dan **Markup = Margin ÷ (1 − Margin)** plus **tabel konversi** (20%→16,7%, 25%→20%, 50%→33,3%, 100%→50%). Inilah alat yang benar-benar dipakai praktisi — dan pemikat kutipan AI Overview terkuat.
- **"Mengapa markup% selalu > margin%" tidak dijelaskan mekanismenya**: banyak menyebut faktanya, sedikit menjelaskan **sebabnya** (penyebut markup = biaya yang lebih kecil; penyebut margin = harga jual yang lebih besar). Penjelasan sebab = konten original yang dihargai HCU.
- **"Kapan pakai markup vs margin" kabur**: kompetitor menyamakan keduanya sebagai "cara lihat untung". Kita pisahkan fungsi: markup = alat **menetapkan harga ke depan** (dari biaya); margin = alat **mengukur profitabilitas ke belakang** (angka yang dilaporkan di laporan laba rugi, dibandingkan antarproduk/periode).
- **Kesalahan umum tertukar** (trust-builder): tidak ada yang menghitung **biaya kesalahannya** — mengira markup 50% = margin 50% berarti melebih-lebihkan laba sebesar 16,7 poin persentase; pada penetapan harga massal ini menggerus profitabilitas diam-diam.
- **Lensa sistem/enterprise absen**: tak satupun menjelaskan bahwa di ERP ritel, markup/margin ditegakkan sebagai aturan penetapan harga lintas ribuan SKU, bukan dihitung manual. Fakta SAP S/4HANA Retail = pembeda jujur + jembatan funnel.

**People Also Ask / kueri turunan** (dari WebSearch ID — mewakili PAA; SERP scrape terblokir; writer wajib jawab ≥3 sebagai H2/FAQ):
1. Apa perbedaan markup dan margin?
2. Apa rumus markup dan apa rumus margin?
3. Bagaimana cara menghitung harga jual dengan markup?
4. Mengapa persentase markup lebih besar daripada margin?
5. Bagaimana cara mengubah/mengonversi markup menjadi margin?
6. Mana yang sebaiknya dipakai bisnis, markup atau margin?
7. Apa contoh perhitungan markup dan margin?

## Distinct angle vs. history

- **Closest prior article in this cluster**: `laporan-laba-rugi-c01` (conditional 2026-08, "Laporan Laba Rugi: Komponen, Jenis, dan Cara Membacanya") — ditunjuk tracker sebagai **sibling** untuk ditautkan sebagai cousin. Tetangga berikutnya: `cara-menghitung-hpp-c01` (2026-06, perhitungan HPP/biaya produksi).
- **How this brief differs**: `laporan-laba-rugi-c01` memakai kata "margin" tetapi dalam konteks **membaca laporan keuangan** — margin kotor/operasi/bersih sebagai persentase per lapisan laba terhadap **pendapatan periode**, teknik analisis vertikal (common size) untuk diagnosis. Artikel ini kebalikan sudutnya: **keputusan penetapan harga pada satu produk/transaksi** — markup mengubah biaya menjadi harga jual, margin mengukur laba atas harga jual itu, plus konversi antar keduanya dan kesalahan menyamakannya. **Boundary tegas untuk writer**: JANGAN mengulang komponen laporan laba rugi (revenue→HPP→laba kotor→operasi→bersih), single step vs multiple step, analisis vertikal per lapisan, atau akrual vs kas (milik `laporan-laba-rugi-c01`); JANGAN mengulang rumus harga pokok produksi / komponen HPP / WIP (milik `cara-menghitung-hpp-c01`). HPP di sini muncul HANYA sebagai *input* (harga modal) ke rumus markup/margin, bukan untuk dibedah cara menghitungnya.
- **Subtopic overlap (Jaccard) with closest prior**: subtopik brief ini = {definisi markup, definisi margin, rumus markup (basis biaya), rumus margin (basis harga jual), contoh hitung, konversi markup↔margin, mengapa markup%>margin%, kapan pakai markup, kapan pakai margin, kesalahan tertukar, markup/margin di sistem ritel} (11) vs subtopik `laporan-laba-rugi-c01` = {definisi laporan laba rugi, komponen bertingkat, single step vs multiple step, cara membaca/analisis vertikal, margin kotor/operasi/bersih sebagai % pendapatan, diagnosis per lapisan, akrual vs kas, FSV di SAP S/4HANA Finance} (8). Irisan efektif = {konsep margin sebagai % dari harga jual/pendapatan} ≈ 1 dari union ~18 → **Jaccard ≈ 0.06 (< 0.4 ✓)**.
- **Cek permukaan dedup lain**: vs `cara-menghitung-hpp-c01` (2026-06) ≈ 0.05 — di sana margin/markup **sengaja ditahan** untuk artikel terpisah (tercatat di "Notes for future strategist runs"-nya); irisan hanya {HPP sebagai konsep biaya}. Vs cluster persediaan (`eoq-c01` row 10, `reorder-point-c01`, `inventory-turnover-c01`, `safety-stock-c01`) ≈ 0.02 — rumus persediaan, bukan penetapan harga. Vs `sku-c01` (2026-08, ritel) ≈ 0.03 — kodifikasi produk, bukan harga. **angle_hash `sha1:d447d7e3f3cb736c0d5079c2e92287b94d5bc9ec` tidak berbenturan** dengan hash mana pun di `articles_history/` + `conditional/2026-06..08` + `monthly_runs/`. **Hasil dedup: DISTINCT — aman ditulis, resolusi tracker diterapkan.**

## Article skeleton — H2s the writer should expand (BATCH OVERRIDE: 3–4 H2 SAJA)

> Lead ≤80 kata (pain konkret + keyword + janji artikel, TANPA roadmap) → definition snippet blockquote "Ringkasnya:" 40–60 kata → body 4 H2 ramping → FAQ 2–3 → Kesimpulan ≤80 kata → soft CTA baris terakhir. **DILARANG H2 definitional "Apa Itu Markup / Margin?"** — janji "Perbedaan" di judul ditunaikan snippet + H2 #1; tidak ada info baru (asal istilah/standar) yang cukup untuk H2 definitional tersendiri. Definisi muncul SEKALI di snippet.
>
> **Budget kata (panduan, total ≈ 905):** lead 75 · snippet 50 · H2#1 185 · H2#2 175 · H2#3 145 · H2#4 120 · FAQ 3×45 = 135 · Kesimpulan 70 · CTA 20.

1. **H2 (praktis/terstruktur — CORE: rumus + contoh, basis diferensiasi):** "Rumus Markup dan Margin serta Contoh Menghitungnya" — *covers*: jawaban langsung 40–60 kata berisi poin BARU (bukan definisi ulang): keduanya mengukur selisih harga jual − biaya yang **sama dalam rupiah**, tetapi markup membaginya dengan **harga pokok (biaya)** dan margin membaginya dengan **harga jual** — beda penyebut inilah seluruh perbedaannya. Lalu sajikan dua rumus, masing-masing 1 baris, citation-ready:
   - **Markup (%) = (Harga Jual − HPP) ÷ HPP × 100%**
   - **Margin (%) = (Harga Jual − HPP) ÷ Harga Jual × 100%**
   - **Harga Jual = HPP + (HPP × Markup%)**
   Lalu **satu contoh angka** berlabel *ilustrasi*, konsisten baris-per-baris: biaya/HPP **Rp80.000**, markup **50%** → tambahan laba **Rp40.000** → harga jual **Rp120.000** → margin = 40.000 ÷ 120.000 = **33,3%**. Tegaskan: laba rupiah sama (Rp40.000), persentase beda (markup 50% vs margin 33,3%). Sajikan sebagai **tabel kecil** (baris: HPP, Markup Rp & %, Harga Jual, Laba Kotor, Margin %). ≥1 tabel terpenuhi di sini.
2. **H2 (question-format + tabel konversi — GAP UTAMA vs SERP):** "Kenapa Persentase Markup Selalu Lebih Besar daripada Margin?" — *covers*: jawaban langsung 40–60 kata (poin baru): karena markup membagi laba dengan **biaya yang lebih kecil**, sedangkan margin membagi laba yang sama dengan **harga jual yang lebih besar** — penyebut lebih besar menghasilkan persentase lebih kecil, jadi untuk transaksi mana pun **markup% > margin%**. Lalu berikan rumus konversi (alat yang hampir tak ada di kompetitor):
   - **Margin = Markup ÷ (1 + Markup)** — mis. markup 0,50 → 0,50 ÷ 1,50 = **33,3%**
   - **Markup = Margin ÷ (1 − Margin)** — mis. margin 0,25 → 0,25 ÷ 0,75 = **33,3%**
   Lalu **tabel konversi** (extractable, quotable AI Overview): Markup 20% → Margin 16,7% · 25% → 20% · 50% → 33,3% · 100% → 50% · 150% → 60%. (Angka harus konsisten & benar; researcher verifikasi tiap baris.)
3. **H2 (question-format / praktis — "kapan pakai yang mana"):** "Kapan Memakai Markup dan Kapan Memakai Margin?" — *covers*: jawaban langsung 40–60 kata (poin baru): markup adalah alat **menetapkan harga ke depan** — mengubah biaya yang diketahui menjadi harga jual; margin adalah alat **mengukur profitabilitas ke belakang** — menilai berapa laba yang benar-benar tersisa dari penjualan, dan inilah angka yang muncul serta dibandingkan di [laporan laba rugi](https://www.soltius.co.id/id/blog/laporan-laba-rugi-komponen-jenis-cara-membaca) antarproduk atau antarperiode. Sajikan sebagai **list ber-lead-in bold** ATAU tabel dua kolom (Situasi → Metrik): **Menetapkan harga dari biaya** → markup (cost-plus pricing); **Menargetkan laba tertentu dari penjualan** → margin (mis. "kami butuh margin kotor 30%"); **Membandingkan profitabilitas antarproduk/periode** → margin; **Negosiasi harga beli dengan supplier** → markup. Tautan cousin ke `laporan-laba-rugi` ditempatkan alami di sini (margin = angka pelaporan). TANPA mengulang isi/komponen laporan laba rugi.
4. **H2 (honest/counter-conventional — pengganti H2 honest, + lensa sistem + funnel):** "Kesalahan Umum: Menyamakan Markup dengan Margin" — *covers*: jawaban langsung 40–60 kata (poin baru): kesalahan paling mahal adalah menetapkan markup lalu menganggarkan laba seolah itu marginnya — mengira markup 50% berarti margin 50% membuat perusahaan **melebih-lebihkan laba 16,7 poin persentase** (margin sebenarnya 33,3%); pada penetapan harga massal, selisih ini menggerus profitabilitas diam-diam. Lalu 1 paragraf *vendor-teach* netral (1–2 kalimat soal SAP, GROUNDED ke sumber terverifikasi): pada skala ribuan SKU, harga tidak dihitung ulang manual per produk — di **SAP S/4HANA Retail**, harga jual dihitung dari **harga beli ditambah markup yang telah ditentukan**, dan sistem **menghitung margin kotor serta margin bersih secara otomatis** (SAP Learning). Efeknya, logika markup/margin ditegakkan konsisten lintas katalog dan marginnya dapat diaudit, bukan bergantung disiplin manual. (**TANPA menyebut Soltius di body**; jangan bahas modul ritel lain, POS, atau WMS; **jangan menyebut nama transaksi/condition type yang tidak diverifikasi** — cukup klaim yang didukung kutipan SAP Learning di atas.)

(≥1 question-format: H2 #2 & #3 ✓; ≥1 praktis/terstruktur dengan tabel/rumus: H2 #1 tabel contoh + H2 #2 tabel konversi + rumus ✓; H2 honest: H2 #4 ✓; ≥4 angka spesifik inline: Rp80.000/Rp40.000/Rp120.000/50%/33,3%, tabel konversi 20/25/50/100/150% → 16,7/20/33,3/50/60%, selisih 16,7 poin ✓. **DILARANG menulis {IMAGE_NN} dalam bentuk apa pun** — tabel contoh + tabel konversi menggantikan seluruh kebutuhan visual, termasuk "kurva/diagram" apa pun.)

## SAP / partner tech to teach (keyword tidak ada di `product_matrix.md` — framing universal tetap berlaku)

> `markup dan margin` topik keuangan/ritel ad-hoc, bukan salah satu 6 hub. Mapping diturunkan dari tracker (CTA anchor: **SAP S/4HANA Retail**) + `company_profile.md` (Soltius punya solusi **Retail** + industri vertikal Retail) + riset run ini. Aturan universal `product_matrix.md` berlaku penuh: **implements-not-builds**, ≤2 self-mention (override addendum §6), tanpa superlatif, tanpa spec karangan.

Konsep yang dijelaskan akurat & vendor-neutral:
- **Markup** — persentase kenaikan atas **biaya/HPP** untuk membentuk harga jual (cost-plus pricing). Alat penetapan harga ke depan.
- **Margin (margin laba kotor / gross margin)** — laba sebagai persentase **harga jual/pendapatan**. Ukuran profitabilitas; angka yang dilaporkan di laporan laba rugi.
- **Konversi markup↔margin** — Margin = Markup ÷ (1 + Markup); Markup = Margin ÷ (1 − Margin). Fakta matematis universal (bukan klaim vendor).
- **Penetapan harga di SAP S/4HANA Retail** — harga jual dihitung dari **harga beli + markup yang telah ditentukan**, dan sistem **menghitung margin kotor & margin bersih otomatis** (SAP Learning "Executing Retail Pricing", terverifikasi 200 OK run ini). Ini menegakkan logika markup/margin konsisten lintas SKU, bukan hitung manual per produk. Disebut RINGKAS di H2 #4 (1–2 kalimat) — jangan menjejalkan modul lain (POS, listing, promotion) maupun WMS; jangan menyebut condition type/transaksi yang tidak diverifikasi.

**Fakta yang WAJIB diverifikasi researcher (jangan diklaim tanpa sumber):**
- **Konsistensi seluruh angka contoh & tabel konversi** — periksa tiap baris: HPP 80.000 + markup 50% = 120.000; margin 40.000/120.000 = 33,3%; tabel konversi (Markup 20/25/50/100/150% → Margin 16,7/20/33,3/50/60%). Salah satu baris salah = seluruh kredibilitas artikel jatuh. Ini prioritas verifikasi #1.
- **Rumus markup & margin** (basis biaya vs basis harga jual) dan **rumus konversi** — konfirmasi lintas sumber (**Shopify "Markup vs. Margin"** terverifikasi 200 OK + salah satu blog akuntansi ID Kledo/Mekari Jurnal). Rumus konversi Margin = Markup ÷ (1 + Markup) adalah standar matematis; verifikasi tiap baris tabel, jangan salin dari sumber.
- **Penetapan harga SAP S/4HANA Retail** — sumber terverifikasi run ini: **SAP Learning "Executing Retail Pricing"** (`https://learning.sap.com/courses/discovering-retail-functions-and-business-processes-in-sap-s-4hana-retail/executing-retail-pricing_efff67d1-e5c9-4dc6-b71e-8653bf8f0580`, 200 OK). Klaim yang boleh dipakai (langsung didukung teks): harga jual berbasis harga beli + markup yang ditentukan; sistem menghitung margin kotor & margin bersih otomatis. Sebut **umum** — JANGAN menyebut nama transaksi/condition type spesifik atau versi yang tidak ada di kutipan itu. Jangan mengarang fitur.
- **Contoh angka** = **ilustrasi buatan**, wajib dilabeli; jangan pakai data perusahaan nyata.

## Soltius anchor (BATCH OVERRIDE: maks 2 self-mention)

- **1 positioning line di Kesimpulan**: Soltius — SAP Platinum Partner melalui United VARs, berpengalaman sejak 1998 — **mengimplementasikan dan mendampingi** solusi ritel SAP seperti SAP S/4HANA Retail, termasuk penataan logika penetapan harga agar margin konsisten dan auditable. (Framing: implements/migrates/supports, **NEVER builds/owns**; tanpa superlatif; pilih SATU kredensial, jangan menumpuk.)
- **1 soft website CTA** (baris terakhir, terpisah): ajakan konsultasi/mengunjungi soltius.co.id — anchor funnel: **SAP S/4HANA Retail** (per tracker).
- **TANPA aside Soltius di tengah body** (style_addendum §6). Sentuhan praktisi di body boleh TANPA nama Soltius (mis. "di lapangan, kesalahan markup-dikira-margin paling sering muncul saat harga ditetapkan cepat-cepat tanpa satu acuan bersama").

## Internal links to place (BATCH OVERRIDE: 2 SAJA — 1 hub + 1 cousin, inline natural, tanpa "BACA JUGA")

> `landing_page` kosong di sheet → hub dipilih strategist (keputusan standing). Hub diverifikasi **200 OK via WebFetch run ini (2026-08-31)**; cousin adalah sibling batch yang URL-nya mengikuti slug frontmatter-nya. Penulis cek ulang saat menulis.

- **Hub (halaman soltius.co.id paling relevan)**: `https://www.soltius.co.id/id/solutions-by-products/retail-produk` — anchor natural: "solusi retail" / "solusi ritel" — *why*: halaman solusi Retail Soltius adalah hub paling dekat dengan topik (penetapan harga = inti operasi ritel) dan **sejalan dengan CTA anchor SAP S/4HANA Retail** per tracker. Preseden: hub yang sama dipakai `omnichannel-retail-c01` (2026-06) dan `sku-c01` (2026-08), lolos QC. Tempatkan di paruh akhir/dekat H2 #4 atau CTA. *Catatan untuk writer:* halaman menampilkan **iVend Retail** (produk pihak ketiga) — bila disebut, framing sebagai solusi yang **diimplementasikan/didukung** Soltius, bukan produk Soltius. Paling aman: anchor "solusi retail" tanpa menyebut nama produk pihak ketiga.
- **Cousin (sibling batch keuangan — ditunjuk tracker)**: `https://www.soltius.co.id/id/blog/laporan-laba-rugi-komponen-jenis-cara-membaca` — anchor natural: "laporan laba rugi" — *why*: margin adalah angka profitabilitas yang **dilaporkan dan dibandingkan** di laporan laba rugi (margin kotor); menautkan keputusan penetapan harga (markup/margin) ke tempat hasilnya terbaca. Sesuai sheet notes: "link ke laporan laba rugi". Tempatkan alami di H2 #3 (saat membahas margin sebagai ukuran profitabilitas ke belakang). *Catatan:* artikel sibling `laporan-laba-rugi-c01` adalah bagian dari batch conditional 2026-08 (belum tentu live saat publish); URL mengikuti slug frontmatter-nya `laporan-laba-rugi-komponen-jenis-cara-membaca` (konvensi batch — sama dengan `laporan-arus-kas-c01`). **Fallback (bila sibling belum live saat penulisan):** `https://www.soltius.co.id/id/blog/macam-macam-laporan-keuangan-dan-pengertiannya` — anchor tetap "laporan laba rugi" — **terverifikasi 200 OK run ini (2026-08-31)**; halaman ini membahas laporan laba rugi (single/multiple step) beserta laba kotor/operasi/bersih, dan merupakan hub yang sama dipakai `laporan-laba-rugi-c01`. Tetap **TEPAT 2 tautan** — pasang salah satu, jangan keduanya. Editor pilih URL yang resolve saat publish.

(2 tautan: 1 hub existing + 1 cousin sibling. Tidak ada own-hub blog karena topik keuangan/ritel baru, bukan salah satu 6 hub — dicatat sesuai mode conditional.)

## E-E-A-T signals to embed

- **Angka/fakta spesifik** (≥4 angka inline per addendum §4): contoh inti HPP **Rp80.000** + markup **50%** (Rp40.000) → harga jual **Rp120.000** → margin **33,3%**; tabel konversi **Markup 20/25/50/100/150% → Margin 16,7/20/33,3/50/60%**; selisih kesalahan **16,7 poin persentase** (markup 50% dikira margin 50%). JANGAN mengarang benchmark seperti "rata-rata markup ritel X%" tanpa sumber; contoh berlabel *ilustrasi*.
- **Authoritative sources to cite (≥2 — sitasi final 1–2 inline di artikel; keduanya diverifikasi 200 OK run ini):**
  1. **SAP Learning — "Executing Retail Pricing" (Discovering Retail Functions and Business Processes in SAP S/4HANA Retail)** — `https://learning.sap.com/courses/discovering-retail-functions-and-business-processes-in-sap-s-4hana-retail/executing-retail-pricing_efff67d1-e5c9-4dc6-b71e-8653bf8f0580` — SAP official. **Terverifikasi run ini (WebFetch, 200 OK, konten body lengkap)**; halaman menyatakan *"the calculation of the sales prices is usually based on purchase prices and predefined markups"* dan *"the system will then automatically calculate various pricing key figures, such as the gross and net margin."* Ini sitasi **paling bernilai** untuk artikel — SAP resmi yang secara langsung menautkan **markup (input) → margin (dihitung otomatis)** di sistem ritel. Pakai di H2 #4. **Ini sitasi anchor** — jangan diganti tanpa memverifikasi pengganti.
  2. **Shopify — "Markup vs. Margin: What's the Difference?"** — `https://www.shopify.com/blog/markup-vs-margin-whats-the-difference` — otoritas commerce/ritel, relevan dengan intent penetapan harga. **Terverifikasi run ini (200 OK)**; menegaskan pembedaan basis (markup atas biaya, margin atas harga jual) dan bahwa **persentase markup ≠ persentase margin** untuk transaksi yang sama ("a 30% margin means 30% of the selling price is profit, while a 30% markup means the item's price is increased by 30% over its cost"). Pakai di H2 #1 atau #2 untuk menegaskan pembedaan basis. *(Alternatif otoritatif setara bila diinginkan: Corporate Finance Institute / Investopedia "Margin vs. Markup" — researcher verifikasi URL hidup dahulu; CFI `resources/accounting/margin-vs-markup/` mengembalikan 404 pada run ini, jadi Shopify dipakai sebagai sumber konsep terverifikasi.)* Rumus & tabel konversi tetap dihitung sendiri (verified researcher), bukan disalin dari sumber.
- **First-party Soltius angle**: pengalaman implementasi solusi ritel SAP + penataan logika penetapan harga (Retail termasuk industri vertikal Soltius per `company_profile.md`) — dipakai di positioning line Kesimpulan. Tanpa nama klien atau angka proyek karangan.

## AI Overview & GEO optimization (seo_playbook §2a, dipadatkan per addendum §5)

- **Definition snippet blockquote** setelah lead — "Ringkasnya:" 40–60 kata, arah: *"Ringkasnya: markup dan margin sama-sama mengukur selisih antara harga jual dan harga pokok (HPP), tetapi berbeda basis hitung. Markup adalah persentase kenaikan yang dihitung terhadap biaya, dipakai untuk menetapkan harga jual. Margin adalah persentase laba yang dihitung terhadap harga jual, dipakai untuk mengukur profitabilitas. Untuk transaksi yang sama, persentase markup selalu lebih besar daripada margin."* (writer boleh poles, jaga 40–60 kata. **INI satu-satunya definisi** — body dilarang menyatakannya ulang dengan kata lain, termasuk di jawaban langsung tiap H2.)
- **Jawaban langsung 40–60 kata segera setelah TIAP H2** berisi poin baru milik H2 itu (beda penyebut → beda %; mekanisme mengapa markup%>margin% + konversi; markup untuk harga ke depan vs margin untuk profitabilitas ke belakang; biaya kesalahan menyamakan keduanya), **BUKAN** parafrase snippet.
- **Satu paragraf = satu poin quotable & verifiable.** Rumus dan tabel konversi ditulis agar AI bisa mengekstrak baris-per-baris.
- **Entity list** (nama penuh saat sebutan pertama, akronim di-expand sekali): markup, margin, margin laba kotor (*gross margin*), harga pokok penjualan (HPP), harga jual, cost-plus pricing, SAP S/4HANA Retail, markup yang telah ditentukan (*predefined/planned markup*). (Hindari istilah teknis SAP yang tidak ada di kutipan SAP Learning — mis. "pricing conditions"/condition type — kecuali researcher memverifikasinya.)
- **Format match**: tabel untuk contoh perhitungan (H2 #1) & konversi (H2 #2); list ber-lead-in-bold/tabel untuk "kapan pakai" (H2 #3); prosa untuk kesalahan + lensa sistem (H2 #4). Tabel diutamakan — jangan paksa elemen berlebih hingga melampaui 1000 kata.
- **FAQ**: 2–3 Q&A, parseable FAQPage schema; `dateModified` akurat di meta block.

## FAQ (2–3 Q&A — jawaban 30–60 kata, tiap jawaban memuat 1 fakta/angka; ambil dari PAA)

1. **"Apa perbedaan utama markup dan margin?"** — Keduanya mengukur selisih harga jual dan harga pokok yang **sama dalam rupiah**, tetapi markup menghitungnya terhadap **biaya (HPP)** dan margin terhadap **harga jual**. Karena biaya lebih kecil dari harga jual, persentase markup selalu lebih besar — mis. markup 50% setara margin 33,3%.
2. **"Bagaimana cara mengubah markup menjadi margin?"** — Gunakan rumus **Margin = Markup ÷ (1 + Markup)**. Contoh: markup 50% (0,50) → 0,50 ÷ 1,50 = **33,3%**. Sebaliknya, Markup = Margin ÷ (1 − Margin). Rumus ini memastikan target harga dan target laba tidak tertukar.
3. **"Sebaiknya bisnis memakai markup atau margin?"** — Keduanya, untuk tujuan berbeda. Pakai **markup** untuk menetapkan harga jual dari biaya (cost-plus pricing); pakai **margin** untuk mengukur dan membandingkan profitabilitas — angka yang muncul di laporan laba rugi. Menyamakan keduanya bisa melebih-lebihkan laba hingga belasan poin persentase.

## Data captured this run

- **Source(s)**: WebSearch (Google ID, 2026-08-31, 3 kueri) — peta pesaing "markup dan margin"/"perbedaan markup dan margin", PAA turunan, rumus & contoh, konversi markup→margin. WebSearch (EN, 1 kueri) — verifikasi rumus konversi Margin = Markup ÷ (1 + Markup) + entitas produk SAP S/4HANA Retail. **WebFetch terverifikasi run ini:** `learning.sap.com/.../executing-retail-pricing_efff67d1-...` (✅ 200 OK, konten lengkap — kutipan "sales prices... based on purchase prices and predefined markups" + "system will then automatically calculate... gross and net margin"); `shopify.com/blog/markup-vs-margin-whats-the-difference` (✅ 200 OK — pembedaan basis + markup% ≠ margin%); `soltius.co.id/id/blog/macam-macam-laporan-keuangan-dan-pengertiannya` (✅ 200 OK — memuat laporan laba rugi + laba kotor/operasi/bersih; fallback cousin); `soltius.co.id/id/solutions-by-products/retail-produk` (✅ 200 OK — "Solusi Retail Produk", hub); `soltius.co.id/solutions-by-products/retail-product` (✅ 200 OK, varian EN); `corporatefinanceinstitute.com/resources/accounting/margin-vs-markup/` (❌ 404 — CFI di-drop, diganti Shopify terverifikasi). WebFetch SERP Google **terblokir** (consent/error) — fallback WebSearch sesuai `CLAUDE.md` §11.
- **Apr 2026 rank** (from report): `n/a` — keyword di luar 6 keyword `seo_report_apr2026.md` (topik conditional/ad-hoc baru).
- **Volume / KD / trend**: `n/a (Ahrefs not connected)`. Sinyal kualitatif: SERP ID sangat padat (Kledo, Mekari Jurnal, Majoo, ScaleOcean, Pegadaian, Ninja Xpress, BoxHero, GPOS, MySkill, Forwarder.ai) → volume definisional/komersial jelas ada; **semua berformat "definisi + 2 rumus + 1 contoh"** → beatable dengan rumus/tabel konversi + "kapan pakai" tegas + kesalahan-umum + lensa sistem + GEO.
- **SERP features present**: explainer definisi/rumus mendominasi; PAA + AI Overview sangat mungkin aktif untuk kueri "perbedaan/rumus" ini (tidak terkonfirmasi langsung — scrape terblokir).
- **cache_source**: `n/a` — mode conditional `/single-article`; riset ditangkap inline di brief ini (tanpa cache per-keyword bulanan).

## Notes for SME researcher

- **Dossier RINGKAS saja** — artikel target 900 kata, 4 H2 ramping. Jangan kirim material untuk 1.650 kata.
- **Prioritas #1: verifikasi konsistensi SEMUA angka.** Cek contoh inti (HPP 80.000 + markup 50% = harga jual 120.000; margin 40.000/120.000 = 33,3%) dan **tiap baris tabel konversi** (Markup 20/25/50/100/150% → Margin 16,7/20/33,3/50/60% — hitung ulang dengan Margin = Markup ÷ (1 + Markup)). Satu angka salah menjatuhkan kredibilitas.
- Konfirmasi **rumus markup (÷ biaya), margin (÷ harga jual), dan konversi** lintas sumber: **Shopify "Markup vs. Margin"** (terverifikasi 200 OK) + satu blog akuntansi ID (Kledo/Mekari Jurnal). CFI `resources/accounting/margin-vs-markup/` **404 run ini** — jangan pakai tanpa memverifikasi ulang URL barunya. Rumus konversi Margin = Markup ÷ (1 + Markup) adalah standar matematis — hitung sendiri, jangan salin.
- **Penetapan harga di SAP S/4HANA Retail** — pakai sumber terverifikasi: **SAP Learning "Executing Retail Pricing"** (`https://learning.sap.com/courses/discovering-retail-functions-and-business-processes-in-sap-s-4hana-retail/executing-retail-pricing_efff67d1-e5c9-4dc6-b71e-8653bf8f0580`, 200 OK). Klaim yang didukung teks: harga jual berbasis harga beli + markup yang ditentukan; margin kotor/bersih dihitung sistem otomatis. Jangan mengarang condition type/transaksi/versi.
- **Boundary dedup**: JANGAN menyediakan material tentang komponen/struktur laporan laba rugi, single vs multiple step, analisis vertikal, akrual vs kas (milik `laporan-laba-rugi-c01` 2026-08); JANGAN material cara menghitung HPP/komponen biaya produksi/WIP (milik `cara-menghitung-hpp-c01` 2026-06). HPP di sini hanya *input* ke rumus, tidak dibedah.
- Contoh angka **buatan & berlabel ilustrasi** — jangan pakai data perusahaan nyata.
- Cek 2 URL internal saat menulis: hub `id/solutions-by-products/retail-produk` (✅ 200 OK run ini); cousin `blog/laporan-laba-rugi-komponen-jenis-cara-membaca` (sibling — konfirmasi status; **bila belum live pakai fallback `blog/macam-macam-laporan-keuangan-dan-pengertiannya`**, ✅ 200 OK run ini). Pasang TEPAT 2 — jangan pasang keduanya untuk slot cousin.

## Notes for future strategist runs

Artikel ini SENGAJA TIDAK mencakup (hindari kanibalisasi + sisakan untuk artikel lain):
- **Strategi penetapan harga lanjutan** (value-based pricing, dynamic pricing, psychological pricing, penetration vs skimming) — kandidat artikel decision-stage tersendiri.
- **Target costing & product costing mendalam di SAP** (standard cost, cost component split, variance) — milik cluster S/4HANA Finance; disebut ≤1 frasa.
- **Break-even / BEP & contribution margin** — konsep margin lanjutan, layak artikel terpisah.
- **Struktur & pembacaan laporan laba rugi** (margin kotor/operasi/bersih per lapisan, analisis vertikal) — sudah dimiliki `laporan-laba-rugi-c01`; hanya ditautkan, tidak diulang.
- **Perhitungan HPP/harga pokok produksi** — sudah dimiliki `cara-menghitung-hpp-c01`; markup/margin memakainya sebagai input saja.

## Format overrides (batch conditional 2026-09)

Restating dari `conditional/2026-09/style_addendum.md` — **MENGIKAT** untuk researcher, writer, editor, validator:

- **Panjang: 800–1000 kata (target ~900)** — hitungan body H1 s/d CTA, di luar frontmatter; `target_word_count: 900` di frontmatter, isi `word_count` aktual (via `tools/count_words.py`, konvensi cleaned-prose) setelah menulis. <800 terlalu tipis; >1000 gagal (pangkas dengan membuang kalimat pengantar/transisi kosong dan contoh redundan, BUKAN memampatkan semua kalimat jadi telegram — ritme tetap bervariasi, paragraf 1–4 kalimat).
- **TANPA image placeholder** — dilarang menulis `{IMAGE_NN}` dalam bentuk apa pun; stage image-planner DILEWATI; tidak ada `images.json`. Konsep visual (kurva/diagram markup-margin, perbandingan) disampaikan lewat **tabel/rumus**.
- **FAQ: 2–3 Q&A** (bukan 5–8); jawaban 30–60 kata, tiap jawaban memuat 1 fakta/angka; ambil dari PAA. (Draf FAQ tersedia di atas.)
- **Internal link: TEPAT 2** — 1 hub (`id/solutions-by-products/retail-produk`) + 1 cousin (`blog/laporan-laba-rugi-komponen-jenis-cara-membaca`, fallback `blog/macam-macam-laporan-keuangan-dan-pengertiannya`), inline natural, tanpa "BACA JUGA". Sitasi eksternal otoritatif 1–2 inline: **SAP Learning "Executing Retail Pricing"** + **Shopify "Markup vs. Margin"** (keduanya terverifikasi 200 OK run ini).
- **Definisi HANYA SEKALI** — di definition snippet "Ringkasnya:" (40–60 kata) setelah lead. Body/H2 **DILARANG** mengulang definisi snippet dengan kata lain, termasuk di jawaban langsung 40–60 kata setelah tiap H2. **Tidak ada H2 definitional "Apa Itu Markup/Margin?"** — tidak ada info baru yang membenarkannya.
- **Prosa padat on-point** — tanpa paragraf roadmap, tanpa transisi kosong, tanpa pembuka klise; em-dash ≤2; tanpa adjektiva hype (anti-AI `style_guide.md` §5 berlaku penuh). EYD.
- **Lead ≤80 kata** (pain konkret + keyword `markup dan margin` + janji artikel).
- **Kesimpulan ≤80 kata** + 1 positioning line Soltius; **soft website CTA (soltius.co.id) = baris paling akhir**, terpisah dari Kesimpulan. **Maks 2 mention Soltius total.** Primary keyword `markup dan margin` muncul di penutup/CTA (seo_playbook par.3).
- **3–4 H2** (≥1 question-format: H2 #2/#3; ≥1 praktis/terstruktur dengan tabel/rumus: H2 #1/#2); **≥4 angka spesifik inline**; jawaban langsung 40–60 kata setelah tiap H2 berisi poin BARU milik H2 itu.
- **Framing Soltius** (`style_guide.md` §11): implementator/pendamping SAP — **implements, migrates, supports — NEVER builds/owns**. Disiplin sitasi §10: JANGAN mengarang angka, pasal, harga, atau spec SAP.
