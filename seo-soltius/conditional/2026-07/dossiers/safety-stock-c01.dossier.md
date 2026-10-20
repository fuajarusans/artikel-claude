---
brief_id: "safety-stock-c01"
researcher_run_date: "2026-07-06"
sources_cited: 4
flags: 7
batch: "conditional-2026-07 (style_addendum.md — 800–1000 kata, FAQ 2–3, 2 internal link, TANPA image placeholder)"
---

# Research Dossier: Safety Stock: Pengertian, Rumus, dan Cara Menentukannya

> Dossier RINGKAS by design — artikel target ~900 kata. Prioritas: 11 klaim terkuat yang melayani skeleton brief (2 rumus + tabel keputusan, contoh berantai, 4 faktor penentu, jembatan SAP IBP for Inventory). Semua angka di bawah sudah diverifikasi 2026-07-06.

## TL;DR for the writer

- Sumber utama rumus & Z-score: **Peter L. King, "Understanding Safety Stock and Mastering Its Equations", APICS magazine Juli/Agustus 2011** (di-hosting MIT) — teks penuh terekstrak dan diverifikasi langsung. Z 95% = **1,65** dan Z 99% = **2,33** BENAR per tabel King.
- Rumus statistik versi King yang presisi: `Safety Stock = Z × √(PC/T1) × σD`. Bentuk populer `Z × σd × √LT` valid **hanya jika satuan konsisten** (σd harian + lead time dalam hari) — tulis begitu, jangan lepas dari syarat satuannya.
- Aritmetika ilustrasi brief sudah dicek ulang: rumus sederhana (70×14) − (50×10) = **480 unit**; rumus statistik 1,65 × 12 × √10 ≈ **63 unit** (√10 ≈ 3,16). Aman dipakai, label "ilustrasi".
- SAP IBP for Inventory terkonfirmasi via learning.sap.com: operator *global (multistage) inventory optimization* menghasilkan **rekomendasi safety stock per produk-lokasi** dengan mempertimbangkan variabilitas forecast/permintaan, variabilitas lead time pasokan, dan target service level. Jangan menambah fitur lain.
- Jangan tulis "melonjak eksponensial" untuk service level→buffer; King menyebutnya **nonlinear/tidak proporsional**. Kedua URL internal (hub SCM + cousin WMS) dicek **200 OK** hari ini.

## Core facts (verified) — 11 klaim

> **Claim 1 — Definisi (ASCM Dictionary)**: Safety stock adalah persediaan yang disimpan untuk melindungi dari kesalahan perkiraan (forecast error) dan fluktuasi permintaan; disebut juga buffer stock / reserve stock.
> **Number/specific**: Kutipan ASCM Supply Chain Dictionary via ASCM Insights: "inventory that is carried to protect against forecast errors, as well as fluctuations in demand."
> **Source**: ASCM Insights, "Safety Stock: A Contingency Plan to Keep Supply Chains Flying High" — https://www.ascm.org/ascm-insights/safety-stock-a-contingency-plan-to-keep-supply-chains-flying-high/ (diakses 2026-07-06)
> **Confidence**: high

> **Claim 2 — Pemicu stockout tiga arah**: Stockout bersumber dari fluktuasi permintaan pelanggan, ketidakakuratan forecast, dan variabilitas lead time bahan baku/manufaktur — inilah ketidakpastian yang diproteksi safety stock.
> **Number/specific**: King: "Stockouts stem from factors such as fluctuating customer demand, forecast inaccuracy, and variability in lead times for raw materials or manufacturing."
> **Source**: King, APICS magazine Jul/Aug 2011, hlm. 33 — https://web.mit.edu/2.810/www/files/readings/King_SafetyStock.pdf (diakses 2026-07-06)
> **Confidence**: high

> **Claim 3 — Rumus statistik (variabilitas permintaan)**: `Safety Stock = Z × √(PC/T1) × σD`, di mana Z = Z-score dari target service level, PC = performance cycle (total lead time), T1 = satuan waktu σD, σD = standar deviasi permintaan. Bila σd dihitung harian dan lead time dalam hari, bentuknya menjadi `Z × σd × √LT`.
> **Number/specific**: Persamaan verbatim dari King hlm. 34; syarat: satuan waktu σD dan lead time konsisten.
> **Source**: King (MIT-hosted PDF), hlm. 34
> **Confidence**: high

> **Claim 4 — Tabel Z-score per service level**: 90% → 1,28; 95% → **1,65**; 97% → 1,88; 98% → 2,05; 99% → **2,33**; 99,9% → 3,09.
> **Number/specific**: Tabel "Desired cycle service level vs Z-score" (Figure 2) King hlm. 34 — angka brief (1,65/2,33) TERKONFIRMASI.
> **Source**: King (MIT-hosted PDF), hlm. 34
> **Confidence**: high

> **Claim 5 — Service level 100% mustahil & hubungan nonlinear**: Hubungan service level→Z nonlinear; service level lebih tinggi menuntut safety stock yang naik TIDAK proporsional, dan cycle service level 100% secara statistik tidak dapat dicapai. Target lazim 90–98%.
> **Number/specific**: King: "the relationship is nonlinear... a cycle service level of 100 percent is unattainable"; "Typical goals fall between 90 and 98 percent". ASCM Insights: "a 100% service level is impossible".
> **Source**: King hlm. 34 + ASCM Insights (dua sumber independen)
> **Confidence**: high

> **Claim 6 — Makna praktis service level 95%**: Dirancang pada service level 95%, safety stock tidak menyentuh stok pengaman di ±50% siklus, cukup melindungi di ±45% siklus, dan stockout tetap terjadi di ±5% siklus pengisian ulang. Safety stock tidak dimaksudkan menghapus semua stockout.
> **Number/specific**: 50% / 45% / 5% (Figure 1, King hlm. 33)
> **Source**: King hlm. 33
> **Confidence**: high

> **Claim 7 — Asumsi distribusi normal**: Kerangka Z-score memakai distribusi normal standar; King mensyaratkan permintaan & lead time "normally distributed" untuk persamaan kombinasi. Label sebagai penyederhanaan yang diterima luas.
> **Number/specific**: Kondisi eksplisit di persamaan gabungan King hlm. 34.
> **Source**: King hlm. 34
> **Confidence**: high

> **Claim 8 — Praktik tebak-tebakan berkinerja buruk**: Sebagian manajer menetapkan safety stock dengan feeling atau persentase tetap dari cycle stock (mis. 10–20%) — mudah dijalankan tetapi "generally result in poor performance".
> **Number/specific**: 10–20% dari cycle stock (contoh praktik yang dikritik King).
> **Source**: King hlm. 33
> **Confidence**: high — pakai INI sebagai sentuhan praktisi, BUKAN klaim "buffer kebiasaan lama 2× kebutuhan" (tidak bersumber; lihat Flags)

> **Claim 9 — Contoh terverifikasi milik King (cadangan)**: Gudang roll plastik: σ permintaan mingguan 10 roll, Z = 1,65 (95%), PC = 8 hari, T1 = 7 hari → safety stock = 1,65 × √(8/7) × 10 ≈ 18 roll.
> **Number/specific**: 18 roll (perhitungan penuh di King hlm. 35; aritmetika dicek ulang: 1,65 × 1,069 × 10 = 17,6 → 18).
> **Source**: King hlm. 35
> **Confidence**: high — artikel tetap pakai ilustrasi sendiri (Claim 10); contoh King hanya cadangan bila editor minta contoh bersumber

> **Claim 10 — Aritmetika ilustrasi brief (dicek ulang, label "ilustrasi")**: Komponen manufaktur — pemakaian rata-rata 50 unit/hari, maksimum 70 unit/hari; lead time rata-rata 10 hari, maksimum 14 hari; σd = 12 unit.
> **Number/specific**: Rumus sederhana: (70 × 14) − (50 × 10) = 980 − 500 = **480 unit**. Rumus statistik (95%, Z 1,65): 1,65 × 12 × √10 = 19,8 × 3,1623 ≈ 62,6 → **±63 unit**. Selisih besar wajar: rumus sederhana memproteksi skenario terburuk permintaan DAN lead time sekaligus; rumus statistik memproteksi sebatas target service level.
> **Source**: Perhitungan internal (verifikasi researcher 2026-07-06); kerangka rumus dari King (Claim 3–4)
> **Confidence**: high untuk aritmetika; skenario fiktif → WAJIB berlabel "ilustrasi"

> **Claim 11 — Kapabilitas SAP IBP for Inventory**: Dalam SAP Integrated Business Planning (SAP IBP), operator *global (multistage) inventory optimization* pada SAP IBP for Inventory merekomendasikan safety stock lintas seluruh produk dan lokasi rantai pasok ("recommend safety stock across all products and locations of the supply chain"), dengan mempertimbangkan forecast & variabilitas forecast, variabilitas lead time pasokan, dan target service level pelanggan; keluaran utamanya key figure *Recommended Safety Stock*, dengan optimasi biaya simpan safety stock total jaringan.
> **Number/specific**: Terminologi persis: "Global (multistage) inventory optimization", "Recommended Safety Stock", "ensures all customer service level targets are met".
> **Source**: SAP Learning, kursus "Mastering SAP IBP for Inventory Planning and Optimization" — https://learning.sap.com/courses/mastering-sap-ibp-for-inventory-planning-and-optimization/global-multi-stage-inventory-optimization-1 (diakses 2026-07-06)
> **Confidence**: high

**Bonus (medium, untuk FAQ #3 opsional)** — Biaya simpan persediaan tahunan: aturan praktis **15–25% dari nilai persediaan per tahun**; pakar logistik menyebut rentang 18–75% tergantung industri; komponen: biaya modal, pajak, asuransi, gudang, penanganan, keusangan. Sumber: blog chapter ASCM (APICS Puerto Rico), Blair Williams CFPIM/CSCP/CLTD — https://prsj.ascm.org/blog/SCC_3. **Confidence: medium** (chapter blog, bukan ASCM pusat) → WAJIB atribusi "praktisi APICS/ASCM menyebut aturan praktis 15–25%" — atau drop FAQ #3.

## Solution focus + Soltius anchor (keyword TIDAK ada di product_matrix.md → framing universal)

| What to teach (vendor-neutral + SAP) | Facts to state accurately | Where in article | Soltius anchor |
|---|---|---|---|
| Safety stock, service level, Z-score, σ permintaan (kerangka ASCM/APICS — King) | Claim 1–8 di atas | Snippet + H2 #1–#3 | — (body bebas Soltius) |
| **SAP IBP for Inventory** — multistage inventory optimization | Claim 11 SAJA; 1–2 kalimat di akhir H2 #3; JANGAN bawa modul IBP lain (Demand/Response & Supply/S&OP milik artikel lain) | Akhir H2 #3 | Positioning line di Kesimpulan: Soltius — SAP Platinum Partner melalui United VARs — **mengimplementasikan dan mendampingi** solusi perencanaan rantai pasok SAP seperti SAP IBP (manufaktur & distribusi). Soft CTA soltius.co.id = baris terakhir. Max 2 mention total. |

## Authoritative external sources (pilih 1–2 inline untuk artikel)

1. **Peter L. King, "Understanding Safety Stock and Mastering Its Equations", APICS magazine, Jul/Aug 2011 (MIT-hosted)** — https://web.mit.edu/2.810/www/files/readings/King_SafetyStock.pdf — *backs*: rumus Z × √(PC/T1) × σD, tabel Z (95%→1,65; 99%→2,33), 100% unattainable, makna 95%. **Sitasi utama — pakai ini.**
2. **SAP Learning — "Mastering SAP IBP for Inventory Planning and Optimization"** — https://learning.sap.com/courses/mastering-sap-ibp-for-inventory-planning-and-optimization/global-multi-stage-inventory-optimization-1 — *backs*: rekomendasi safety stock per produk-lokasi, multistage optimization, input variabilitas + service level. **Pakai sebagai tautan saat menyebut SAP IBP for Inventory.**
3. (Alternatif definisi, opsional) **ASCM Insights — "Safety Stock: A Contingency Plan..."** — https://www.ascm.org/ascm-insights/safety-stock-a-contingency-plan-to-keep-supply-chains-flying-high/ — *backs*: definisi ASCM Dictionary + "100% impossible".

## Definition snippet draft (40–60 kata — SATU-SATUNYA definisi di artikel)

> Ringkasnya: safety stock (stok pengaman) adalah persediaan ekstra yang disimpan di atas kebutuhan normal untuk melindungi operasional dari ketidakpastian — lonjakan permintaan, meleset-nya perkiraan, dan keterlambatan pasokan. Besarannya dihitung dari data historis penjualan dan lead time, bukan ditebak, sehingga perusahaan terhindar dari stockout tanpa menimbun persediaan berlebihan.

(45 kata setelah "Ringkasnya:"; selaras definisi ASCM Dictionary + tiga pemicu stockout versi King. Body DILARANG memparafrasekan ulang definisi ini.)

## FAQ Q&As (2 inti + 1 opsional, Bahasa Indonesia, 30–60 kata, tiap jawaban 1 fakta/angka)

### Apa perbedaan safety stock dan reorder point?
Safety stock adalah besaran stok penyangga, sedangkan reorder point (ROP) adalah titik level stok yang memicu pemesanan ulang. Safety stock menjadi salah satu komponen penjumlah dalam rumus ROP. Pada ilustrasi artikel ini, buffer ±63 unit hasil rumus statistik ikut dijumlahkan saat menentukan titik pemesanan ulang. *(±45 kata; angka: 63 unit — jangan menjabarkan rumus ROP lengkap, milik lead-time-c01)*

### Berapa banyak safety stock yang ideal?
Tidak ada angka universal — besarannya ditarik oleh target service level. Standar umum 95% memakai Z = 1,65; item kritis bisa 99% dengan Z = 2,33 yang berarti buffer lebih besar. Service level 100% praktis mustahil dicapai karena kebutuhan buffer naik tidak proporsional. *(±42 kata; fakta: Z 1,65/2,33, per King)*

### (OPSIONAL — pakai hanya jika muat <1000 kata) Apa risiko safety stock terlalu besar?
Modal kerja terkunci di gudang dan biaya simpan membengkak. Praktisi APICS/ASCM memakai aturan praktis biaya penyimpanan tahunan 15–25% dari nilai persediaan — mencakup biaya modal, asuransi, gudang, dan keusangan — sehingga buffer berlebih langsung menggerus margin. *(±36 kata; angka 15–25% WAJIB dengan atribusi "praktisi APICS/ASCM"; jika ragu, drop FAQ ini — 2 Q&A sudah memenuhi addendum)*

## Data table for the writer (H2 #1 — tabel dua rumus; angka contoh untuk H2 #2)

### Dua rumus safety stock dan kapan memakainya

| Rumus | Formula | Kapan dipakai | Data yang dibutuhkan |
|---|---|---|---|
| Sederhana (maks–rata-rata) | (Penjualan harian maksimum × lead time maksimum) − (penjualan harian rata-rata × lead time rata-rata) | Data historis terbatas; fluktuasi moderat; butuh angka cepat | Angka maksimum & rata-rata penjualan harian dan lead time |
| Statistik (service level) | Z × σd × √lead time *(satuan σd dan lead time harus sama, mis. harian ↔ hari)* | Data historis memadai; permintaan fluktuatif; target service level eksplisit | σd (standar deviasi permintaan), Z dari target service level, lead time |

**Contoh berantai H2 #2 (label "ilustrasi", aritmetika terverifikasi):** komponen manufaktur — rata-rata 50 unit/hari, maksimum 70 unit/hari; lead time rata-rata 10 hari, maksimum 14 hari; σd = 12 unit.
- Rumus sederhana: (70 × 14) − (50 × 10) = 980 − 500 = **480 unit**.
- Rumus statistik (service level 95%, Z = 1,65): 1,65 × 12 × √10 ≈ 19,8 × 3,16 ≈ **63 unit**.
- Narasi "mengapa beda jauh": rumus sederhana menumpuk skenario terburuk permintaan dan lead time sekaligus (proteksi maksimal, cenderung boros); rumus statistik memproteksi hanya sampai target service level 95% — konsisten King: buffer dirancang menghapus mayoritas stockout, bukan semuanya (±5% siklus tetap berisiko).
- Penutup 1 kalimat: hasil ini menjadi komponen penjumlah dalam reorder point (rujukan saja — rumus ROP milik artikel lead time).

**Angka inline yang tersedia (butuh ≥4):** Z = 1,65; Z = 2,33; 95%; 99%; 90–98% (rentang target lazim); 480 unit; ±63 unit; σd = 12; √10 ≈ 3,16; 50/45/5% makna service level 95%; 10–20% cycle stock (praktik gut-feel); 15–25% carrying cost (opsional, dengan atribusi).

## Edge cases & nuance

- **Dua rumus menjawab pertanyaan berbeda** — sederhana = "berapa buffer untuk skenario terburuk historis"; statistik = "berapa buffer untuk X% kepastian". Keduanya benar pada asumsinya masing-masing; jangan framing "rumus sederhana salah".
- **Rumus statistik varian permintaan saja** — King punya varian variabilitas lead time (Z × σLT × Davg) dan gabungan; artikel CUKUP satu varian berlabel "versi yang umum dipakai untuk variabilitas permintaan" (sesuai brief). Jangan setengah-setengah menyebut varian lain tanpa rumusnya.
- **Distribusi normal = penyederhanaan** yang diterima luas (Claim 7) — 1 kalimat jujur, jangan dijadikan bahasan statistik panjang.
- **Rumus sederhana (maks–rata-rata) tidak punya induk standar** — konvensi praktik yang beredar luas (konsisten di semua pesaing SERP); sebut "rumus praktis yang lazim dipakai", TANPA atribusi ke ASCM/akademik.
- **Service level bisa dibedakan per kelompok item** (King: berdasarkan kepentingan strategis/margin/volume) — mendukung poin "item kritis 99%, item lain 95%"; sebut maksimal 1 frasa, JANGAN membuka bahasan ABC analysis (disisakan untuk artikel lain).

## Flags (open factual risk — writer WAJIB hindari/hedge)

- ⚠️ **"Buffer melonjak eksponensial"** (kata brief): King menyebut *nonlinear / disproportionately higher* — tulis "naik tidak proporsional" atau "melonjak tajam", JANGAN "eksponensial".
- ⚠️ **"Buffer dari kebiasaan lama sering 2× lebih besar dari kebutuhan statistiknya"** (saran sentuhan praktisi di brief): TIDAK terverifikasi — ganti dengan fakta bersumber King: praktik feeling/persentase tetap 10–20% dari cycle stock umumnya berkinerja buruk.
- ⚠️ **Carrying cost "20–30%"**: angka ini TIDAK ditemukan di sumber kuat — yang bersumber adalah **15–25%** (rule of thumb) dan rentang 18–75% dari blog chapter ASCM (confidence medium). Pakai hanya dengan atribusi "praktisi APICS/ASCM"; jika tidak, drop FAQ #3.
- ⚠️ **Benchmark "rata-rata safety stock industri X"**: tidak ada sumber — JANGAN dikarang.
- ⚠️ **Bentuk √LT**: valid hanya bila satuan σd dan lead time sama (bentuk presisi King: √(PC/T1)). Di tabel/contoh, pastikan σd harian dan lead time hari — jangan campur mingguan/hari.
- ⚠️ **Definisi ASCM Dictionary** yang terkutip hanya menyebut forecast error + fluktuasi permintaan; perlindungan lead time datang dari framing King (Claim 2). Snippet aman karena tidak mengatributkan definisi ke ASCM — JANGAN menulis "menurut kamus ASCM, safety stock melindungi dari keterlambatan pasokan".
- ⚠️ **SAP IBP**: jangan menyebut kemampuan di luar Claim 11 (mis. AI/ML forecasting — itu ranah IBP for demand, milik artikel lain); nama lengkap sekali: SAP Integrated Business Planning (SAP IBP), lalu "SAP IBP for Inventory".

## Internal links (dicek 2026-07-06 — keduanya 200 OK)

1. **Hub**: https://www.soltius.co.id/id/blog/apa-itu-supply-chain-management — anchor "supply chain management", inline di lead. ✅ 200
2. **Cousin**: https://www.soltius.co.id/id/blog/konsep-warehouse-management-system-yang-wajib-anda-tahu — anchor "manajemen gudang", di H2 #3 (kualitas data stok = prasyarat hitungan benar). ✅ 200

## Dedup boundaries (pengingat — dari brief)

- Lead time HANYA variabel rumus; JANGAN jenis-jenis/rumus/variabilitas lead time (milik lead-time-c01). ROP cukup 1 kalimat rujukan.
- JANGAN mekanika MRP (mrp-c01), strategi SCM makro (strategi-scm-c01), EOQ/lot-sizing, ABC analysis (>1 frasa), modul IBP selain Inventory, DDMRP.
- ZERO {IMAGE_NN}; konsep visual = tabel rumus (H2 #1) + list faktor ber-lead-in bold (H2 #3).
