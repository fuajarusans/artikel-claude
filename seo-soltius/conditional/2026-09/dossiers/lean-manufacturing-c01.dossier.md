---
brief_id: "lean-manufacturing-c01"
researcher_run_date: "2026-09-01"
sources_cited: 6
flags: 4
batch: "conditional / 2026-09 (RINGKAS — artikel ~900 kata, 3 H2 + FAQ)"
---

# Research Dossier: Lean Manufacturing — Prinsip, Manfaat, dan Penerapannya

## TL;DR for the writer

- Semua kronologi & atribusi brief **TERVERIFIKASI**: TPS/Ohno (1950-an), *The Machine That Changed the World* (**1990**, Womack/Jones/Roos, riset MIT-IMVP — buku ini yang memberi nama "lean"), *Lean Thinking* (**1996**, Womack & Jones — merumuskan 5 prinsip). Aman ditulis dengan tahun.
- **5 prinsip** (Value, Value Stream, Flow, Pull, Perfection) terkonfirmasi Lean Enterprise Institute (lean.org), dikutip dari "Womack & Jones 1996, p. 10". **Jangan ubah nama/urutan.**
- ⚠️ **Ada selisih penamaan pada 7 waste.** LEI/Ohno versi asli menamai: Overproduction, Waiting, **Conveyance**, **Processing**, Inventory, Motion, **Correction**. **TIMWOOD** (Transportation, Inventory, Motion, Waiting, Overproduction, Overprocessing, Defects) adalah **mnemonic populer modern** yang memetakan tujuh waste yang sama (Conveyance≈Transportation, Processing≈Overprocessing, Correction≈Defects). Pakai TIMWOOD sebagai "akronim populer", **jangan** klaim itu penamaan resmi Ohno/LEI. Lihat Flag #1.
- **muda/mura/muri** = "3M" TPS (Ohno) terkonfirmasi; 7 waste = subkategori **muda** saja. Aman untuk FAQ.
- **Lean vs Six Sigma** terkonfirmasi: lean = buru waste + kecepatan/aliran; Six Sigma = kurangi variasi/cacat secara statistik (target 3,4 cacat per sejuta peluang). Gabungan = Lean Six Sigma. Aman untuk FAQ.
- **SAP Digital Manufacturing** = cloud MES berbasis data & analitik near-real-time yang menghubungkan lantai produksi ke ERP; URL SAP resmi yang hidup = `sap.com/products/scm/digital-manufacturing.html` (bukan `.../manufacturing.html` yang 403 saat run ini). Jangan klaim SAP DM "menerapkan lean" otomatis.

## Core facts (verified)

> **Claim**: Lean berakar pada Toyota Production System (TPS) yang dikembangkan Taiichi Ohno.
> **Number/specific**: TPS dikembangkan di Toyota sejak era 1950-an; Ohno adalah "father of TPS" dan yang mengkategorikan tujuh waste serta tiga jenis pemborosan (muda/mura/muri).
> **Source**: Lean Enterprise Institute — lean.org/lexicon-terms/seven-wastes/ & /muda-mura-muri/ (diakses 2026-09-01)
> **Confidence**: high

> **Claim**: Istilah "lean" dipopulerkan lewat riset MIT dan buku *The Machine That Changed the World*.
> **Number/specific**: Buku terbit **1990** (James P. Womack, Daniel T. Jones, Daniel Roos), hasil riset lima tahun International Motor Vehicle Program (IMVP) di MIT; "gave the system its name: lean". Terjual >600.000 kopi, 11 bahasa.
> **Source**: Wikipedia (ringkasan) + Lean Enterprise Institute store + Scientific Research Publishing reference (Womack, Jones, Roos, 1990, Free Press) — diakses 2026-09-01
> **Confidence**: high

> **Claim**: Lima prinsip lean dirumuskan Womack & Jones dalam *Lean Thinking*.
> **Number/specific**: Buku terbit **1996**; lima prinsip = Value, Value Stream, Flow, Pull, Perfection. LEI mengutip langsung "(Adapted from Womack and Jones 1996, p. 10.)".
> **Source**: Lean Enterprise Institute — lean.org/lexicon-terms/lean-thinking-and-practice/ (diakses 2026-09-01)
> **Confidence**: high

> **Claim**: Tujuh waste (muda) adalah kategorisasi Taiichi Ohno.
> **Number/specific**: Versi LEI/Ohno: Overproduction, Waiting, Conveyance, Processing, Inventory, Motion, Correction. Overproduction disebut "the worst form of waste because it contributes to the other six".
> **Source**: Lean Enterprise Institute — lean.org/lexicon-terms/seven-wastes/ (diakses 2026-09-01)
> **Confidence**: high

> **Claim**: TIMWOOD adalah akronim populer untuk tujuh waste yang sama.
> **Number/specific**: Transportation, Inventory, Motion, Waiting, Overproduction, Overprocessing, Defects — mnemonic modern; sebagian praktisi menambah "S" (TIMWOODS) untuk waste ke-8 (Skills/unused talent).
> **Source**: Quality Gurus, Creative Safety Supply, GBMP (7 wastes/TIMWOOD) — diakses 2026-09-01
> **Confidence**: high (bahwa TIMWOOD populer); **medium** untuk klaim ini = penamaan "resmi" — lihat Flag #1

> **Claim**: Waste ke-8 ("unused talent/potensi karyawan") adalah tambahan modern.
> **Number/specific**: Bukan bagian tujuh waste asli Ohno; ditambahkan belakangan (kadang jadi "8 Wastes of Lean" / TIMWOODS).
> **Source**: TheLeanWay "The 8 Wastes of Lean"; Quality Gurus — diakses 2026-09-01
> **Confidence**: high

> **Claim**: TPS mengenal tiga jenis pemborosan ("3M").
> **Number/specific**: **muda** (waste/aktivitas tanpa nilai — inilah 7 waste), **mura** (unevenness/ketidakrataan), **muri** (overburden/beban berlebih). Semua didefinisikan Ohno.
> **Source**: Lean Enterprise Institute — lean.org/lexicon-terms/muda-mura-muri/; Toyota UK (mag.toyota.co.uk) — diakses 2026-09-01
> **Confidence**: high

> **Claim**: Lean dan Six Sigma berbeda fokus dan kerap digabung.
> **Number/specific**: Lean = hilangkan waste, percepat aliran; Six Sigma = kurangi variasi/cacat secara statistik (target ≤ **3,4 cacat per sejuta peluang**). Gabungan = Lean Six Sigma.
> **Source**: GBMP, Planview, 6sigma.us (lean vs six sigma) — diakses 2026-09-01
> **Confidence**: high

> **Claim**: SAP Digital Manufacturing memberi visibilitas lantai produksi near-real-time dan menghubungkannya ke ERP.
> **Number/specific**: Cloud MES berbasis data & analitik near-real-time; mengintegrasikan top-floor & shop-floor; analitik/dashboard ditenagai SAP Analytics Cloud yang tertanam; menjembatani ERP dengan shop-floor control. (OEE hanya disebut sebagai salah satu KPI — **jangan turunkan rumusnya**, milik `oee-c01`.)
> **Source**: SAP official — sap.com/products/scm/digital-manufacturing.html; sap.com/resources/what-is-mes (via WebSearch site:sap.com, 2026-09-01; halaman `.../manufacturing.html` mengembalikan 403 saat diakses langsung)
> **Confidence**: high (kapabilitas); catat URL hidup di bawah

> **Claim**: Kaizen = perbaikan berkelanjutan; wujud prinsip ke-5 (perfection).
> **Number/specific**: Kaizen (Jepang: "perubahan menjadi lebih baik"), langkah kecil berkelanjutan yang dijalankan semua karyawan; prinsip #5 lean secara eksplisit adalah "repeat this process... until a state of perfection".
> **Source**: Lean Enterprise Institute — lean.org/lexicon-terms/lean-thinking-and-practice/ (rumusan prinsip #5); kaizen.com — diakses 2026-09-01
> **Confidence**: high

## Structured element for the writer — Tabel 7 Waste (TIMWOOD) + jembatan kaizen

> Row-by-row parseable. Kolom: **Waste (Muda) | Bentuk di lantai produksi | Contoh**. Penamaan pakai TIMWOOD (populer) dengan padanan LEI dalam kurung bila perlu. Kaizen = mesin peniadaannya (lihat kalimat lead-in di bawah tabel).

| Waste (Muda) | Bentuk di lantai produksi | Contoh |
|---|---|---|
| **Transportation** (Transportasi; LEI: *Conveyance*) | Memindahkan material lebih dari yang perlu | Bahan bolak-balik antar-gudang karena tata letak buruk |
| **Inventory** (Persediaan) | Stok/WIP berlebih mengikat modal & menutupi masalah | Tumpukan barang setengah jadi menunggu diproses |
| **Motion** (Gerakan) | Gerakan operator yang tidak perlu | Berjalan mencari alat yang tak punya tempat tetap |
| **Waiting** (Menunggu) | Waktu menganggur di proses | Lini berhenti menunggu material atau instruksi |
| **Overproduction** (Overproduksi) | Memproduksi lebih banyak/lebih awal dari permintaan | Dianggap waste paling kritis — memicu enam waste lain |
| **Overprocessing** (Proses berlebih; LEI: *Processing*) | Pekerjaan/toleransi melebihi kebutuhan pelanggan | Finishing yang tidak dinilai pelanggan |
| **Defects** (Cacat; LEI: *Correction*) | Produk cacat yang harus di-rework/scrap | Biaya ganda: bahan terbuang + pengerjaan ulang |

**Lead-in kaizen (untuk jawaban langsung H2 #2):** ketujuh waste adalah target konkret yang diburu kelima prinsip. Menghilangkannya bukan proyek satu kali, melainkan pekerjaan **kaizen** harian — perbaikan kecil oleh operator yang paling dekat dengan proses. Overproduction biasanya diburu lebih dulu karena menjadi akar yang memicu inventory dan waiting.

## Draft definition snippet (40–60 kata) — SATU-SATUNYA definisi (blockquote "Ringkasnya:")

> **Ringkasnya:** lean manufacturing adalah pendekatan produksi yang memaksimalkan nilai bagi pelanggan sambil menghilangkan pemborosan (*waste*). Berakar pada Toyota Production System, metode ini bekerja lewat lima prinsip lean dan pengejaran perbaikan berkelanjutan (kaizen), sehingga sumber daya hanya dipakai untuk hal yang benar-benar bernilai bagi pelanggan.

*(53 kata. Entity-clear, extractable. Body/H2 dilarang mengulang definisi ini.)*

## Five principles — konfirmasi (untuk list bernomor H2 #1; jangan ubah nama/urutan)

1. **Value (Nilai)** — ditentukan pelanggan: apa yang benar-benar bersedia dibayar.
2. **Value Stream (Aliran Nilai)** — petakan seluruh langkah dari bahan baku hingga sampai ke pelanggan; pisahkan yang bernilai dari yang tidak.
3. **Flow (Aliran)** — buat langkah bernilai mengalir tanpa henti; setiap antrean/tumpukan adalah waste.
4. **Pull (Tarik)** — produksi dipicu permintaan nyata (*just-in-time*), bukan ramalan; membatasi work-in-process.
5. **Perfection (Kesempurnaan)** — ulangi terus tanpa titik akhir; inilah **kaizen**.

*(Rumusan LEI: prinsip #5 secara harfiah "repeat this process... until a state of perfection is reached in which perfect value is created with no waste".)*

## FAQ Q&As (3 draft, Bahasa Indonesia; 30–60 kata; tiap jawaban ≥1 fakta)

### Apa perbedaan lean manufacturing dan Six Sigma?
Lean berfokus menghilangkan tujuh waste dan mempercepat aliran; Six Sigma berfokus mengurangi variasi dan cacat secara statistik, dengan target ≤3,4 cacat per sejuta peluang. Keduanya saling melengkapi dan sering digabung menjadi Lean Six Sigma: lean membuat proses cepat, Six Sigma membuatnya konsisten. *(47 kata)*

### Apa itu kaizen dalam lean manufacturing?
Kaizen (bahasa Jepang: "perubahan menjadi lebih baik") adalah budaya perbaikan berkelanjutan lewat langkah-langkah kecil yang dijalankan semua karyawan, terutama operator. Kaizen adalah wujud prinsip kelima lean (kesempurnaan): tidak pernah ada kondisi "sudah selesai", perbaikan berjalan tanpa titik akhir. *(41 kata)*

### Apa itu muda, mura, dan muri?
Tiga jenis pemborosan ("3M") dalam Toyota Production System: muda (pemborosan/aktivitas tanpa nilai — inilah tujuh waste), mura (ketidakrataan beban atau aliran), dan muri (beban berlebih pada orang atau mesin). Tujuh waste yang populer sebenarnya hanya kategori muda; mura dan muri sering terlewat. *(44 kata)*

## Authoritative external sources (≥2 — untuk sitasi inline writer)

1. **Lean Enterprise Institute — "The Seven Wastes"** — `https://www.lean.org/lexicon-terms/seven-wastes/` — *backs*: tujuh waste sebagai kategorisasi Ohno; overproduction = waste terburuk. (Otoritas lean global, didirikan James Womack.) **WAJIB dipakai** di H2 #1/#2.
2. **Lean Enterprise Institute — "Lean Thinking and Practice"** — `https://www.lean.org/lexicon-terms/lean-thinking-and-practice/` — *backs*: lima prinsip lean (dikutip dari Womack & Jones 1996, p. 10). Pakai di H2 #1.
3. **SAP official — SAP Digital Manufacturing** — `https://www.sap.com/products/scm/digital-manufacturing.html` — *backs*: cloud MES, visibilitas near-real-time, integrasi shop-floor ↔ ERP. Pakai di H2 #3 (funnel-teach). **URL ini pengganti `.../manufacturing.html` yang 403.** Jangan kutip angka ROI/efisiensi tak bersumber.

*(Alternatif sitasi cetak bila dikutip: Womack & Jones, Lean Thinking, 1996; Womack, Jones & Roos, The Machine That Changed the World, 1990 — sebut penulis+judul+tahun, jangan mengarang nomor halaman.)*

## Solution focus + Soltius anchor (product_matrix.md §2 — digital manufacturing)

| What to teach | Facts to state accurately | Where | Soltius anchor |
|---|---|---|---|
| Lean sebagai metodologi (5 prinsip → 7 waste → kaizen) | Vendor-neutral; atribusi LEI/Womack-Jones | H2 #1, #2 | — (tanpa Soltius di body) |
| SAP Digital Manufacturing | Cloud MES; visibilitas near-real-time; hubungkan shop-floor ke ERP; **tanpa** rumus OEE/MES arsitektur | H2 #3 (1–2 kalimat funnel) | — |
| Kredibilitas implementasi | SAP Platinum Partner via United VARs, sejak 1998; pengalaman industri manufaktur (Mill Products, Automotive, Consumer Products) | Kesimpulan (1 positioning line) | 1 dari 2 self-mention |

Reminder: Soltius **implements/migrates/supports** SAP DM — **never builds/owns**. Maks 2 self-mention total (1 positioning line Kesimpulan + 1 soft CTA baris terakhir). Variasikan diksi dari penutup `oee-c01`/`rise-manufaktur-c01`.

## Flags (open factual risk)

- ⚠️ **Flag #1 — penamaan 7 waste (TIMWOOD vs LEI/Ohno).** LEI/Ohno versi asli: Overproduction, Waiting, **Conveyance**, **Processing**, Inventory, Motion, **Correction**. **TIMWOOD** (Transportation, Inventory, Motion, Waiting, Overproduction, Overprocessing, Defects) adalah **mnemonic modern**, bukan penamaan yang persis dipakai LEI. → **Rekomendasi:** perkenalkan TIMWOOD sebagai "akronim yang populer dipakai untuk menghafal ketujuh waste", **jangan** menulis "menurut Lean Enterprise Institute, tujuh waste adalah TIMWOOD". Tabel dossier sudah memberi padanan LEI dalam kurung; writer boleh pertahankan atau hapus kurung, tapi jangan salah-atribusi.
- ⚠️ **Flag #2 — John Krafcik / asal istilah "lean" (1988).** Istilah "lean" lazim dikreditkan pada John Krafcik (peneliti MIT-IMVP) lewat artikel 1988 "Triumph of the Lean Production System", lalu dipopulerkan buku 1990. Konfirmasi run ini **medium** (belum diverifikasi ke sumber primer artikel 1988). → **Rekomendasi:** brief menandai ini **opsional**; aman menulis "dipopulerkan lewat riset MIT dan buku *The Machine That Changed the World* (1990)" **tanpa** menyebut Krafcik. Sebut Krafcik hanya bila writer punya sumber; kalau ragu, hilangkan.
- ⚠️ **Flag #3 — jangan klaim SAP DM "menerapkan/menjalankan lean" otomatis.** SAP DM adalah lapisan **visibilitas/analitik** yang membuat waste **terlihat**; ia bukan pengganti budaya kaizen. → Tulis sebagai kapabilitas ("memberi visibilitas real-time sehingga WIP, waktu tunggu, dan cacat tampak seketika"), bukan sebagai "solusi yang me-lean-kan pabrik".
- ⚠️ **Flag #4 — boundary dedup (MENGIKAT).** JANGAN turunkan rumus OEE / 3 faktor / benchmark 85% / six big losses / TEEP (milik `oee-c01`) — OEE hanya **1 kali** sebagai nama metrik + tautan cousin. JANGAN bahas MES arsitektur/ISA-95/predictive maintenance (cluster `digital-manufacturing`), mekanika MRP/modul PP/BOM (`mrp-c01`/`sap-pp-c01`/`bill-of-materials-c01`), dan **JANGAN ulang 19,07% PDB industri pengolahan** (milik `sap-pp-c01`). Angka Six Sigma 3,4/sejuta hanya untuk FAQ lean-vs-Six-Sigma, bukan pembahasan OEE.

## Internal links (konfirmasi untuk writer)

- **HUB**: `https://www.soltius.co.id/id/blog/digital-manufaktur-sistem` — anchor "digital manufacturing"/"manufaktur digital". Diverifikasi 200/OK pada run `oee-c01`/`rise-manufaktur-c01`; tidak menyebut lean (tidak ada kanibalisasi). **Writer cek ulang 200/OK saat menulis.**
- **COUSIN**: OEE `oee-c01` — slug `https://www.soltius.co.id/id/blog/oee-adalah-rumus-cara-menghitung`. ⚠️ **Belum tentu live** (artikel conditional belum terbit). Bila belum live saat lean terbit → **fallback** `https://www.soltius.co.id/id/blog/business-intelligence` (anchor "business intelligence"). Total tetap **2 link**.

## Edge cases & nuance (untuk honest hedge H2 #2/#3)

- Overproduction adalah akar yang memicu inventory & waiting; memburunya lebih dulu biasanya paling berdampak (LEI: "worst form of waste").
- Lean **bukan** program PHK/pemangkasan karyawan — justru mengandalkan operator yang sama untuk kaizen; diperlakukan sebagai proyek pemotongan biaya sekali jalan, 5S/VSM rapi di awal lalu luntur. Ini pembeda trust-builder vs seluruh SERP ID.
- Waste ke-8 (unused talent) = tambahan modern; sebut sebagai tambahan, bukan bagian tujuh asli — hanya bila muat < 1000 kata.
