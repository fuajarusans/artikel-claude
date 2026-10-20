---
brief_id: "eoq-c01"
researcher_run_date: "2026-09-01"
sources_cited: 4
flags: 3
batch: "conditional-2026-09 (style_addendum WAJIB — 800–1000 kata, tanpa image, FAQ 2–3, 2 internal link, definisi sekali di snippet)"
---

# Research Dossier: Economic Order Quantity (EOQ): Pengertian, Rumus, dan Manfaatnya

## TL;DR for the writer
- **Semua aritmetika brief LOLOS verifikasi ulang** — pakai apa adanya. EOQ = √(2×5.000×100.000÷1.000) = √1.000.000 = **1.000 unit**; 5×/tahun (≈73 hari). Tabel total biaya benar di ketiga baris (Rp1.250.000 / Rp1.000.000 / Rp1.250.000); pada EOQ biaya pesan = biaya simpan = **Rp500.000**.
- **Rumus √(2DS/H) dan daftar asumsi klasik terkonfirmasi lintas sumber** (CFI/NCSU/Investopedia-consensus). Asumsi baku: permintaan konstan & diketahui, tanpa stockout, penerimaan sekaligus, tanpa diskon kuantitas, biaya tetap.
- **Asal usul terkonfirmasi**: Ford W. Harris, 1913, artikel "How Many Parts to Make at Once" di *Factory, The Magazine of Management*; R. H. Wilson menganalisis & mempopulerkan (kerap disebut *Wilson formula*). Sebut 1 kalimat saja.
- **EOQ di SAP terkonfirmasi dari SAP official** (help.sap.com, S/4HANA on-premise): EOQ hidup sebagai *optimum lot-sizing procedure* yang meminimalkan total biaya pengadaan dari biaya pemesanan + biaya penyimpanan; butuh biaya simpan & biaya pesan terpelihara di data material. Sebut UMUM — **jangan** sebut kode prosedur.
- **URL**: hub SCM **200 OK** (tanpa EOQ/ROP/safety stock di body → aman); cousin reorder-point **HTTP 500 run ini → pakai fallback WMS live** saat publish.

## Core facts (verified)

> **Claim**: Rumus EOQ = akar kuadrat dari (2 × permintaan tahunan × biaya per pesanan) ÷ biaya penyimpanan per unit per tahun.
> **Number/specific**: EOQ = √(2DS/H); D = permintaan tahunan (unit), S = biaya per pesanan, H = biaya simpan per unit/tahun. Harga beli per unit & lead time TIDAK masuk rumus dasar.
> **Source**: Corporate Finance Institute — "Economic Order Quantity (EOQ)" (corporatefinanceinstitute.com); NC State SCM tutorial (scm.ncsu.edu). Diakses 2026-09-01.
> **Confidence**: high

> **Claim**: Contoh perhitungan konsisten (ilustrasi buatan).
> **Number/specific**: D = 5.000 unit/th, S = Rp100.000, H = Rp1.000/unit/th → 2×5.000×100.000 = 1.000.000.000; ÷1.000 = 1.000.000; √ = **1.000 unit/pesan**. Frekuensi = 5.000÷1.000 = **5×/tahun** ≈ setiap **73 hari** (365÷5).
> **Source**: Aritmetika dihitung ulang researcher (2026-09-01) — tiap langkah benar.
> **Confidence**: high

> **Claim**: Tabel total biaya (kurva U) — tiap sel diverifikasi.
> **Number/specific**: Q=500 → 10× · pesan Rp1.000.000 · simpan Rp250.000 · **total Rp1.250.000**. Q=1.000 (EOQ) → 5× · pesan Rp500.000 · simpan Rp500.000 · **total Rp1.000.000**. Q=2.000 → 2,5× · pesan Rp250.000 · simpan Rp1.000.000 · **total Rp1.250.000**.
> **Source**: Dihitung ulang researcher (2026-09-01) — 6 kolom × 3 baris semua benar; total EOQ terendah, di EOQ biaya pesan = biaya simpan.
> **Confidence**: high

> **Claim**: Pada titik EOQ, biaya pemesanan tahunan = biaya penyimpanan tahunan.
> **Number/specific**: Di contoh, keduanya Rp500.000 pada Q=1.000. Ini konsekuensi matematis EOQ (turunan pertama total biaya = 0), bukan kebetulan angka.
> **Source**: NC State SCM tutorial; diperkuat SAP Help (optimum lot-sizing "sampai total biaya penyimpanan sama dengan biaya pemesanan"). Diakses 2026-09-01.
> **Confidence**: high

> **Claim**: Asumsi/keterbatasan klasik EOQ.
> **Number/specific**: (1) permintaan konstan & diketahui, rata di sepanjang tahun; (2) tanpa stockout/kekurangan; (3) pesanan diterima sekaligus (satu pengiriman); (4) tanpa diskon kuantitas; (5) biaya pesan & simpan tetap; (6) satu produk. Bila ada diskon volume, perlu analisis total-cost terpisah.
> **Source**: NC State SCM tutorial (scm.ncsu.edu); Corporate Finance Institute. Diakses 2026-09-01.
> **Confidence**: high

> **Claim**: EOQ dikembangkan Ford W. Harris (1913), dianalisis/dipopulerkan R. H. Wilson.
> **Number/specific**: Harris memperkenalkan model di artikel "How Many Parts to Make at Once", *Factory, The Magazine of Management*, 1913; kerap disebut *Wilson formula* / model Harris-Wilson karena analisis lanjutan Wilson.
> **Source**: Erlenkotter, "Ford Whitman Harris and the Economic Order Quantity Model", *Operations Research* 38(6), 1990 (pubsonline.informs.org). Diakses 2026-09-01.
> **Confidence**: high

> **Claim**: Di SAP S/4HANA, EOQ termasuk *optimum lot-sizing procedure* pada perencanaan kebutuhan material.
> **Number/specific**: Prosedur optimum lot-sizing bertujuan meminimalkan total biaya pengadaan yang timbul dari biaya pemesanan (ordering/setup) dan biaya penyimpanan (storage); memerlukan biaya penyimpanan dan biaya pemesanan (lot-size independent) terpelihara di data material (view MRP 1).
> **Source**: SAP Help Portal — "Optimum Lot-Sizing Procedures", SAP S/4HANA on-premise (help.sap.com/docs/SAP_S4HANA_ON-PREMISE/…/da97b6535fe6b74ce10000000a174cb4.html). Diakses 2026-09-01. ⚠️ Halaman JS-rendered (body tak ter-scrape langsung); isi dikonfirmasi via indeks/snippet SAP Help — lihat Flags.
> **Confidence**: high (konsep) / medium (kutipan verbatim body)

> **Claim**: Hub internal SCM Soltius live & tidak berisiko kanibalisasi.
> **Number/specific**: `blog/apa-itu-supply-chain-management` → **200 OK**, judul "Kenali Apa itu Supply Chain Management untuk Perusahaan"; body TIDAK menyebut EOQ/reorder point/safety stock.
> **Source**: WebFetch 2026-09-01.
> **Confidence**: high

## Definition snippet draft (40–60 kata) — SATU-SATUNYA definisi

> **Ringkasnya:** economic order quantity (EOQ) adalah kuantitas pemesanan yang meminimalkan total biaya persediaan dengan menyeimbangkan biaya pemesanan dan biaya penyimpanan. Nilainya dihitung dari akar kuadrat 2 dikali permintaan tahunan dikali biaya per pesanan, dibagi biaya penyimpanan per unit — sehingga jumlah pesan ditetapkan dari data biaya, bukan dari kebiasaan.

*(52 kata; 1 em-dash. Writer boleh poles, jaga 40–60 kata. Body/H2 DILARANG mengulang definisi ini.)*

## Structured element — Tabel total biaya (kurva EOQ via tabel), H2 #2

Angka contoh: D = 5.000 unit/th, S = Rp100.000/pesan, H = Rp1.000/unit/th. **Verified cell-by-cell.**

| Kuantitas pesan (Q) | Frekuensi (D÷Q) | Biaya pemesanan (D÷Q × S) | Persediaan rata-rata (Q÷2) | Biaya penyimpanan (Q÷2 × H) | Total biaya |
|---|---|---|---|---|---|
| 500 | 10× | Rp1.000.000 | 250 | Rp250.000 | Rp1.250.000 |
| **1.000 (EOQ)** | **5×** | **Rp500.000** | **500** | **Rp500.000** | **Rp1.000.000** |
| 2.000 | 2,5× | Rp250.000 | 1.000 | Rp1.000.000 | Rp1.250.000 |

Poin quotable: pada EOQ, **biaya pemesanan = biaya penyimpanan = Rp500.000**; total Rp1.000.000 lebih rendah dari kiri (Rp1.250.000) maupun kanannya (Rp1.250.000) → bentuk kurva biaya U. Itulah **manfaat** EOQ = total biaya persediaan minimum.

### Langkah hitung (list bernomor, H2 #1)
1. Kumpulkan tiga variabel: **D** = 5.000 unit/tahun, **S** = Rp100.000/pesan, **H** = Rp1.000/unit/tahun.
2. Masukkan ke **EOQ = √(2DS ÷ H)** = √(2 × 5.000 × 100.000 ÷ 1.000).
3. Hitung pembilang: 2 × 5.000 × 100.000 = 1.000.000.000; bagi H: ÷ 1.000 = 1.000.000.
4. Akar kuadrat: √1.000.000 = **1.000 unit** per pesanan.
5. Konsekuensi: 5.000 ÷ 1.000 = **5 kali pesan setahun** (≈ tiap 73 hari).

## Solution focus + Soltius anchor

| What to teach (vendor-neutral) | Facts to state accurately | Where | Soltius anchor |
|---|---|---|---|
| EOQ + rumus √(2DS/H) + trade-off + asumsi | Model Harris (1913)/Wilson; tiga variabel D/S/H; di EOQ biaya pesan=simpan | Snippet, H2 #1–#3 | — (tanpa Soltius di body) |
| EOQ sebagai *optimum lot-sizing* di SAP S/4HANA; SAP IBP untuk perencanaan lintas produk/lokasi | UMUM saja, tanpa kode prosedur (SAP official) | H2 #4 (1–2 kalimat) | — |
| Positioning line | SAP Platinum Partner via United VARs (sejak 1998) — **mengimplementasikan & mendampingi** SAP IBP untuk manufaktur/distribusi | Kesimpulan | 1 self-mention |
| Soft CTA | Kunjungi soltius.co.id (funnel: SAP IBP); primary keyword `economic order quantity` di CTA | Baris terakhir | 1 self-mention |

Reminder: Soltius **implements/supports** SAP IBP — **NEVER builds/owns**. Maks 2 self-mention total (override addendum §6). Variasikan diksi kredensial United VARs (reorder-point-c01 & safety-stock-c01 sudah memakainya).

## Authoritative external sources (pilih 1–2 inline)
1. **Corporate Finance Institute — "Economic Order Quantity (EOQ)"** — https://corporatefinanceinstitute.com/resources/accounting/what-is-eoq-formula/ — *backs*: rumus √(2DS/H), komponen biaya, asumsi. (Pengganti Investopedia yang tak dapat di-fetch run ini; setara otoritas edukasi keuangan.) Pakai di H2 #1 atau #3.
2. **SAP Help Portal — "Optimum Lot-Sizing Procedures" (SAP S/4HANA on-premise)** — https://help.sap.com/docs/SAP_S4HANA_ON-PREMISE/fe39e10a9a864a8f8dc9537704f0fa13/da97b6535fe6b74ce10000000a174cb4.html — *backs*: EOQ sebagai optimum lot-sizing yang meminimalkan biaya pesan + simpan. SAP official; pakai di H2 #4.
   - *Cadangan akademik untuk asal usul (opsional, tidak wajib inline)*: Erlenkotter, *Operations Research* 38(6), 1990 — https://pubsonline.informs.org/doi/10.1287/opre.38.6.937

## FAQ Q&As (3 drafted, Bahasa Indonesia — 30–60 kata, tiap jawaban 1 fakta)

### Apa itu rumus EOQ dan bagaimana menghitungnya?
Rumus EOQ adalah akar kuadrat dari (2 × permintaan tahunan × biaya per pesanan) ÷ biaya penyimpanan per unit, ditulis **EOQ = √(2DS/H)**. Contoh: permintaan 5.000 unit, biaya pesan Rp100.000, biaya simpan Rp1.000/unit → EOQ = √1.000.000 = **1.000 unit** per pesanan.

### Apa perbedaan EOQ dan reorder point (ROP)?
Keduanya alat persediaan yang saling melengkapi. **EOQ menjawab berapa** yang dipesan sekali pesan (hasil: kuantitas per PO); **ROP menjawab kapan** memesan (hasil: level stok pemicu). EOQ menentukan ukuran pesanan, ROP menentukan waktunya — dipakai bersama dalam satu kebijakan pengisian ulang.

### Apa kelemahan atau keterbatasan metode EOQ?
EOQ mengasumsikan permintaan konstan dan diketahui, biaya pesan/simpan tetap, tanpa diskon kuantitas, serta penerimaan sekaligus tanpa stockout. Karena asumsi ini jarang benar utuh, EOQ menjadi titik acuan yang dilengkapi safety stock dan reorder point, bukan angka pesan mutlak.

*(Bila total mepet 1000 kata, pakai 2 FAQ — buang FAQ #3, sudah tercakup H2 #3.)*

## Edge cases & nuance
- **Varian rumus √(2RS/PI)** (dipakai beberapa blog ID): identik secara matematis — di sana H = P×I (biaya simpan = harga unit × persentase biaya penyimpanan). Bila writer menyinggung, jelaskan H = biaya simpan per unit dan **jaga konsistensi dengan H = Rp1.000** di contoh. Rekomendasi: cukup pakai bentuk √(2DS/H) agar sejalan tabel.
- **"Manfaat" bukan H2 terpisah** — manfaat = total biaya minimum, tertunai di jawaban langsung H2 #2. Jangan buat daftar manfaat generik ala kompetitor.
- **EOQ ≠ angka statis**: berubah saat D, S, atau H berubah; inilah jembatan ke H2 #4 (dihitung ulang sistem, bukan sekali di spreadsheet).

## Flags (open factual risk)
- ⚠️ **Kutipan verbatim body SAP Help**: halaman "Optimum Lot-Sizing Procedures" JS-rendered — body tak ter-scrape langsung run ini. Konsep terkonfirmasi dari indeks + snippet SAP Help + learning.sap.com, tapi **jangan mengutip kalimat persis** seolah tersalin dari halaman. Sebut UMUM ("EOQ termasuk prosedur optimum lot-sizing yang meminimalkan biaya pesan + simpan; butuh kedua biaya terpelihara di data material"). **JANGAN sebut kode/nama prosedur** (Part-Period Balancing, Least Unit Cost, Groff, Dynamic Lot Size) sebagai fakta resmi — muncul di SAP Community, bukan yang diverifikasi di halaman resmi.
- ⚠️ **Cousin reorder-point HTTP 500 run ini** (`blog/reorder-point-rumus-contoh-perhitungan`). Menariknya hub SCM sudah menautkannya di "Other News" (mungkin segera live), TAPI fetch langsung tetap gagal. **Saat publish: bila masih 500, swap ke fallback live** `https://www.soltius.co.id/id/blog/konsep-warehouse-management-system-yang-wajib-anda-tahu` (anchor "manajemen gudang", terbukti live di 4 artikel sebelumnya). Serahkan keputusan swap ke editor/curator.
- ⚠️ **Investopedia tak dapat di-fetch** run ini (WebFetch diblokir untuk domain itu). Diganti Corporate Finance Institute (setara otoritas, isi rumus+asumsi terkonfirmasi via search). Bila writer ingin menautkan Investopedia, editor verifikasi URL hidup saat publish; jika ragu, pakai CFI.

## Hindari / jangan diklaim (writer)
- **JANGAN** mengarang benchmark ("perusahaan hemat X% dengan EOQ") — tak ada sumber. Jangan ulang angka logistik 14,29% (`lead-time-c01`).
- **JANGAN** menurunkan rumus ROP, safety stock, Z-score, service level, komposisi replenishment lead time, jebakan satuan, rasio perputaran — milik artikel lain (boundary dedup MENGIKAT). ROP/safety stock hanya disinggung sebagai pelengkap (kapan/buffer), tanpa rumus.
- **JANGAN** pakai ulang angka set cluster; set brief ini D 5.000/S Rp100.000/H Rp1.000/EOQ 1.000 = distinct, sudah diverifikasi.
- **JANGAN** menyebut nama transaksi/kode prosedur SAP atau modul MRP mendalam.
