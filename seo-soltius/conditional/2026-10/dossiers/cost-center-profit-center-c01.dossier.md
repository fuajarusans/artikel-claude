---
brief_id: "cost-center-profit-center-c01"
researcher_run_date: "2026-10-08"
sources_cited: 6
flags: 5
batch: "conditional-2026-10"
target_word_count: 1100
---

# Research Dossier: Cost Center dan Profit Center: Perbedaan dan Fungsinya

## TL;DR for the writer

- **Pembedaan inti terverifikasi (jawaban paling extractable untuk AI Overview)**: cost center bertanggung jawab **hanya atas biaya** ("responsible for costs incurred"), profit center bertanggung jawab atas **pendapatan sekaligus biaya** ("responsible for both its revenues and costs"). Objective-nya berlawanan: cost center **minimize costs**, profit center **maximize profits** (AccountingTools, verbatim). Taruh ini sebagai jawaban langsung H2 #1 + tabel.
- **Kerangka 4 pusat pertanggungjawaban terverifikasi** (whitespace vs SERP ID): teks managerial accounting baku mengakui **empat** jenis — cost (biaya), revenue (pendapatan), profit (laba), investment (investasi). Dasarnya **controllability**: manajer hanya dinilai atas yang benar-benar bisa ia kendalikan. Investment center dinilai paling luas: laba **dibanding modal yang diinvestasikan** (ROI/residual income). Sumber: Lumen Learning (managerial accounting) + AccountingTools "responsibility center".
- **SAP Controlling (CO) terverifikasi dari SAP resmi**: cost center accounting & profit center accounting adalah objek CO di SAP FICO. Profit center accounting **"Integrate Profit Centers with Financial Accounting, Materials Management, Cost Object Controlling, and Sales and Distribution"** (SAP Learning, verbatim). Cost center: **controlling area A000** preset di S/4HANA Cloud public edition, **standard hierarchy** "1 – Standard Hierarchy", **activity type** (machine/labour hours), alokasi via **allocation tools** (SAP Learning).
- **KOREKSI LINK PENTING**: cousin `buku-besar-general-ledger` yang disarankan brief **mengembalikan HTTP 404 run ini — BELUM live**. Gunakan **fallback `apa-itu-siklus-akuntansi-dan-manfaatnya`** (terverifikasi memuat konten penuh run ini). Hub SAP FICO **terverifikasi live** & menyebut eksplisit "pusat biaya, pusat laba".
- **JANGAN** tumpuk materi buku besar/posting/Universal Journal (milik `buku-besar-c01`) atau struktur laporan laba rugi (milik `laporan-laba-rugi-c01`). "Laba" di sini = **tolok ukur tanggung jawab unit**. Contoh alokasi IT Rp600 jt = **ilustrasi buatan berlabel**. Target artikel ~1100 kata, 4 H2.

## Core facts (verified)

> **Claim**: Cost center bertanggung jawab hanya atas biaya; profit center atas pendapatan + biaya.
> **Number/specific**: AccountingTools: cost center = *"a reporting unit of a business that is responsible for costs incurred"* (membebani biaya operasinya, **tidak** menghasilkan pendapatan); profit center = *"responsible for profits generated"*, akuntabel atas **pendapatan dan biaya** sekaligus sehingga labanya bisa dihitung.
> **Source**: AccountingTools "The difference between cost center and profit center" (accountingtools.com), diakses 2026-10-08.
> **Confidence**: high (konsep mapan, wording verbatim).

> **Claim**: Tujuan (objective) cost center vs profit center berlawanan.
> **Number/specific**: AccountingTools verbatim: *"The objective of a cost center is to minimize costs"* sedangkan *"the objective of a profit center is to maximize profits."* Cost center berusaha menekan pengeluaran; profit center memaksimalkan hasil bersih dari pengeluaran.
> **Source**: AccountingTools (accountingtools.com), diakses 2026-10-08.
> **Confidence**: high.

> **Claim**: Contoh baku cost center dan profit center.
> **Number/specific**: Cost center: departemen **pemeliharaan, akuntansi, keuangan, teknologi informasi (IT), dan sumber daya manusia (SDM/HR)**. Profit center: **anak perusahaan** (bertanggung jawab atas penjualan + seluruh biayanya), **divisi/negara**, dan **lini produk**.
> **Source**: AccountingTools (accountingtools.com), diakses 2026-10-08.
> **Confidence**: high.

> **Claim**: Cost center dan profit center hanyalah dua dari EMPAT jenis pusat pertanggungjawaban.
> **Number/specific**: Akuntansi pertanggungjawaban membagi unit menurut kendali finansial manajernya menjadi **4** kategori: **cost center** (biaya), **revenue center** (pendapatan, mis. departemen penjualan), **profit center** (laba), **investment center** (investasi). Prinsipnya **controllability** — manajer hanya dinilai atas hal yang benar-benar bisa ia kendalikan.
> **Source**: Lumen Learning "Introduction to Responsibility Centers" (courses.lumenlearning.com) + AccountingTools "Responsibility center definition" (accountingtools.com), diakses 2026-10-08.
> **Confidence**: high (konvensi standar teks managerial accounting; sebagian sumber memakai istilah "expense center" untuk cost center).

> **Claim**: Investment center dinilai atas laba DIBANDING modal yang diinvestasikan (bukan sekadar laba).
> **Number/specific**: Investment center = tingkat akuntabilitas terluas: unit dinilai atas laba **dan** return atas modal yang ditanam, lazim lewat **ROI** atau **residual income**. Contoh khas: anak perusahaan. Ini pembeda utama dari profit center yang dinilai dari laba saja.
> **Source**: Lumen Learning + AccountingTools (responsibility center), diakses 2026-10-08.
> **Confidence**: high (untuk konsep). Catatan: residual income/EVA mendalam DILUAR lingkup artikel ini (sisakan untuk artikel lain).

> **Claim**: Dasar penilaian kinerja berbeda (inti "fungsi" yang diminta judul).
> **Number/specific**: Cost center dinilai dari **biaya aktual dibanding anggaran** (manajer pemeliharaan, menurut AccountingTools, *"is only rated on the amount of costs incurred to maintain facilities and equipment at a predetermined level"*). Profit center dinilai dari **laba aktual dibanding target laba**. Memindahkan unit dari cost ke profit center menuntut ubahnya *"performance metrics, budgeting, and managerial responsibilities."*
> **Source**: AccountingTools (accountingtools.com), diakses 2026-10-08.
> **Confidence**: high untuk cost center (verbatim) & framing anggaran vs target (konvensi managerial accounting). "Laba vs target" = praktik baku, bukan kutipan verbatim halaman ini.

> **Claim**: SAP Profit Center Accounting berintegrasi lintas modul (sumber SAP resmi).
> **Number/specific**: SAP Learning "Profit Center Accounting in SAP S/4HANA" verbatim: learner *"Integrate Profit Centers with Financial Accounting, Materials Management, Cost Object Controlling, and Sales and Distribution"* dan *"Create and manage Profit Center Master Data and account assignment objects accurately."* Produk: **SAP S/4HANA Enterprise Management** + **SAP S/4HANA Cloud, private edition**. Transfer pricing punya unit tersendiri (DILUAR lingkup artikel).
> **Source**: SAP Learning (learning.sap.com/courses/profit-center-accounting-in-sap-s-4hana), diakses 2026-10-08. **Sumber SAP resmi.**
> **Confidence**: high (SAP official, wording verbatim).

> **Claim**: SAP Cost Center Accounting — controlling area A000, standard hierarchy, activity type, alokasi (sumber SAP resmi).
> **Number/specific**: SAP Learning "Explaining Cost Center Accounting": S/4HANA Cloud **public edition** memakai **controlling area A000** preset (terikat group currency, **tidak bisa diubah**); terpasang **standard hierarchy** global "1 – Standard Hierarchy" yang **wajib memuat semua cost center** di area itu; **activity type** memindahkan biaya lewat kuantitas terukur (machine hours, labour hours, electricity); biaya yang terkumpul di cost center disebar ke produk/jasa lewat **allocation tools**. Cost center dibuat via **KS01** atau langsung di hierarki.
> **Source**: SAP Learning (learning.sap.com/courses/explaining-cost-center-accounting), diakses 2026-10-08. **Sumber SAP resmi.**
> **Confidence**: high untuk A000/standard hierarchy/activity type (SAP langsung). **Hedge**: materi berbasis S/4HANA Cloud public edition / rilis 2023; private/on-prem bisa beda; JANGAN sebut T-code (KS01) di body tanpa label sumber (lihat Flags).

> **Claim**: Di SAP S/4HANA, data Financial Accounting (FI) + Controlling (CO) tersedia real-time di satu tabel (Universal Journal/ACDOCA).
> **Number/specific**: SAP Learning menyatakan data FI & CO *"recorded in one single table"* sehingga *"no reconciliation between financial accounting and controlling is necessary"* — biaya cost center & laba profit center terbaca tanpa rekonsiliasi terpisah. (Terverifikasi pada sibling `buku-besar-c01` run ini dari halaman SAP Learning Universal Journal.)
> **Source**: SAP Learning (learning.sap.com, kursus Universal Journal), diakses 2026-10-08. **Sumber SAP resmi.**
> **Confidence**: high untuk FI↔CO. **Hedge**: nama tabel (ACDOCA) & konfigurasi bisa beda antar-rilis/edisi → sebut "satu tabel jurnal universal", rujuk SAP Learning/SAP Help, jangan klaim nama field spesifik.

> **Claim**: Halaman internal Soltius — status link (hub live, cousin utama 404).
> **Number/specific**: **Hub** `sistem-sap-fico-dan-modulnya...` memuat konten penuh & **eksplisit** menyebut CO *"terdapat sub modul seperti elemen biaya, pusat biaya, pusat laba, pesanan internal"* (CO = perencanaan & pemantauan biaya; FI = pelaporan). **Cousin brief** `buku-besar-general-ledger` = **HTTP 404 (belum live)**. **Fallback** `apa-itu-siklus-akuntansi-dan-manfaatnya` = konten penuh (mencatat transaksi → posting buku besar → neraca saldo).
> **Source**: WebFetch soltius.co.id (3 URL), 2026-10-08. Penulis tetap cek 200/OK saat menulis.
> **Confidence**: high (hub & fallback ter-render; cousin brief dikonfirmasi 404).

**Total verified claims: 10** (ambang ≥8 untuk ~1100 kata terpenuhi; semua di atas layak dipakai).

## Solution focus + Soltius anchor (keyword tidak ada di product_matrix.md → framing universal)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| **SAP Controlling (CO) di dalam SAP FICO** — cost center accounting + profit center accounting | Nama penuh di sebutan pertama. Cost center kumpulkan overhead per unit; profit center hitung laba per segmen; integrasi profit center dengan **Financial Accounting, Materials Management, Cost Object Controlling, Sales and Distribution** (SAP resmi); controlling area **A000** (public cloud), **standard hierarchy**, **activity type**; FI+CO di **satu tabel jurnal universal** (hedge nama/versi). | H2 #4 ("Bagaimana Cost Center dan Profit Center Dikelola di SAP (Controlling)?") — tempat CTA menyalur | **Implementation + Supports (AMS)** menata modul **SAP FICO/Controlling**; kredensial: **SAP Platinum Partner via United VARs**, bagian Metrodata Group **sejak 1998** |

Framing: Soltius **mengimplementasikan / mendampingi / mendukung** SAP FICO (implementasi → dukungan pasca go-live) — **bukan membuat** perangkat lunaknya. **Maks 2 self-mention** (1 positioning line di `## Kesimpulan` + 1 soft website CTA baris terakhir). TANPA aside Soltius di tengah body. Penyebutan SAP FICO/CO di H2 #4 = teaching, bukan self-mention.

## Internal links (TEPAT 2 — 1 hub + 1 cousin; status dikonfirmasi 2026-10-08)

1. **Hub (paling relevan + funnel CTA anchor SAP FICO)** — ✅ **LIVE**: `https://www.soltius.co.id/id/blog/sistem-sap-fico-dan-modulnya-yang-banyak-digunakan-perusahaan-besar` — anchor natural: **`SAP FICO`** / **`modul Controlling (CO) di SAP FICO`** — *why*: menyebut eksplisit "pusat biaya, pusat laba" sebagai sub-modul CO; paling dekat topik + jadi funnel CTA anchor. *Placement*: inline di H2 #4.
2. **Cousin — GUNAKAN FALLBACK** — ✅ **LIVE**: `https://www.soltius.co.id/id/blog/apa-itu-siklus-akuntansi-dan-manfaatnya` — anchor natural: **`siklus akuntansi`** — *why*: cost/profit center mengklasifikasi ulang transaksi yang dicatat dalam siklus akuntansi; hub konseptual cluster akuntansi (sama dipakai `jurnal-umum`, `neraca-saldo`, `buku-besar`). *Placement*: inline di H2 #2 atau #3.
   - ⚠️ **Cousin yang disarankan brief (`.../buku-besar-general-ledger`) mengembalikan HTTP 404 run ini — JANGAN pakai** kecuali editor memverifikasi sudah live saat publish. Fallback di atas adalah default yang resolve.

> Hanya 2 link. JANGAN tambah link ketiga. TANPA "BACA JUGA" — inline kontekstual. Hub FICO wajib; cousin = fallback siklus akuntansi (bukan buku-besar yang masih 404).

## Authoritative external sources (≥2 strong, untuk tautan keluar writer)

1. **SAP Learning (resmi)** — profit center: `https://learning.sap.com/courses/profit-center-accounting-in-sap-s-4hana` — *what it backs*: profit center master data + integrasi FI/MM/Cost Object Controlling/SD; produk S/4HANA Enterprise Management & Cloud private edition. **Prioritas utama klaim profit center di H2 #4.**
2. **SAP Learning (resmi)** — cost center: `https://learning.sap.com/courses/explaining-cost-center-accounting` — *what it backs*: controlling area A000 (public cloud), standard hierarchy, activity type, allocation tools. **Prioritas utama klaim cost center di H2 #4.** (Pakai salah satu dari dua URL SAP ini sebagai sitasi inline; keduanya SAP official — pilih yang paling pas konteks kalimat.)
3. **AccountingTools (netral, konsep)** — `https://www.accountingtools.com/articles/the-difference-between-cost-center-and-profit-center` (+ `.../what-is-a-responsibility-center.html` untuk 4 jenis) — *what it backs*: tanggung jawab biaya vs pendapatan+biaya; objective minimize vs maximize; contoh; kerangka 4 pusat pertanggungjawaban. Pakai di H2 #1 & H2 #2.

> Prioritas 1–2 sitasi inline: **SAP official** (H2 #4) + **AccountingTools** (H2 #1/#2). Hindari outbound ke kompetitor vendor software akuntansi (Mekari/Jurnal.id/Accurate). **JANGAN** sitasi URL repositori kampus tanpa verifikasi 200/OK — gunakan AccountingTools/Lumen Learning untuk kerangka 4 pusat (sudah terverifikasi).

## FAQ Q&As (4 drafted, Bahasa Indonesia; 30–60 kata, tiap jawaban memuat 1 fakta/angka)

> Ambil dari PAA. JANGAN mengulang definisi snippet kata per kata; beri sudut/fakta baru. Parseable untuk FAQPage schema.

### Apa itu cost center?
Cost center (pusat biaya) adalah unit yang bertanggung jawab hanya atas biaya yang dikeluarkannya, tanpa menghasilkan pendapatan langsung. Kinerjanya dinilai dari biaya aktual dibanding anggaran. Contoh paling umum: departemen SDM, IT, akuntansi, keuangan, dan pemeliharaan.

### Apa contoh profit center?
Profit center (pusat laba) adalah unit yang bertanggung jawab atas pendapatan sekaligus biaya, sehingga labanya dapat dihitung. Contohnya cabang atau toko ritel, satu lini produk, divisi regional, atau anak perusahaan — unit yang hasilnya ikut menentukan profitabilitas perusahaan secara langsung.

### Apa bedanya profit center dan investment center?
Profit center dinilai dari laba (pendapatan dikurangi biaya). Investment center (pusat investasi) dinilai lebih jauh: labanya dihubungkan dengan modal yang diinvestasikan di unit itu, biasanya lewat ROI. Keduanya termasuk empat jenis pusat pertanggungjawaban, bersama cost center dan revenue center.

### Apakah satu departemen bisa menjadi cost center sekaligus profit center?
Bergantung pada struktur pertanggungjawaban. Departemen IT umumnya cost center internal, tetapi bisa diperlakukan sebagai profit center jika menjual jasanya ke pihak luar. Kuncinya prinsip controllability: klasifikasikan unit sesuai apa yang benar-benar bisa dikendalikan manajernya.

## Data tables for the writer

### Tabel 1 — Perbedaan cost center vs profit center (elemen terstruktur utama, untuk H2 #1; extractable baris-per-baris)
| Aspek | Cost Center (Pusat Biaya) | Profit Center (Pusat Laba) |
|---|---|---|
| **Tanggung jawab** | Biaya saja | Pendapatan **dan** biaya |
| **Tujuan utama** | Menekan/mengendalikan biaya (*minimize costs*) | Memaksimalkan laba (*maximize profits*) |
| **Kontribusi ke laba** | Tidak langsung | Langsung |
| **Dasar penilaian kinerja** | Biaya aktual vs **anggaran** biaya | Laba aktual vs **target laba** |
| **Contoh** | SDM, IT, akuntansi, keuangan, pemeliharaan | Cabang/toko, lini produk, divisi, anak perusahaan |

> Satu kalimat jujur untuk writer: cost center **bukan** berarti tidak penting — ia menekan biaya agar profit center bisa menghasilkan lebih. (Angka inline: 2 jenis unit, 5 baris perbandingan.)

### Tabel/list 2 — Empat jenis pusat pertanggungjawaban (untuk H2 #2; sajikan sebagai list ber-lead-in bold, JANGAN paksa tabel kedua)
- **Cost center (pusat biaya)** — manajer dinilai atas pengendalian biaya; tak mengendalikan pendapatan. Contoh: HR, IT pusat.
- **Revenue center (pusat pendapatan)** — fokus menghasilkan penjualan; sedikit/tidak mengendalikan biaya produksi. Contoh: departemen penjualan.
- **Profit center (pusat laba)** — mengendalikan pendapatan **dan** biaya; dinilai atas laba. Contoh: lini produk, cabang.
- **Investment center (pusat investasi)** — akuntabilitas terluas; dinilai atas laba **dibanding modal** yang diinvestasikan (ROI/residual income). Contoh: anak perusahaan.

> Angka inline: 4 jenis pusat. Cost center & profit center = dua di antara empat.

### Contoh alokasi berangka (untuk H2 #3; WAJIB dilabeli "ilustrasi") — aritmetika diverifikasi
Cost center IT berbiaya **Rp600 juta/bulan** dialokasikan ke **3** profit center menurut jumlah pengguna **50% / 30% / 20%** → **Rp300 juta / Rp180 juta / Rp120 juta**. (Verifikasi: 50+30+20 = 100%; 300+180+120 = 600. ✓) Setelah alokasi, laba tiap profit center = pendapatannya − biaya langsung − porsi biaya pendukung ini. **Angka ini buatan; jangan pakai data perusahaan nyata.**

> Honest hedging (lipat 1–2 kalimat di H2 #3, bukan H2 terpisah): memaksa unit pendukung menjadi profit center lewat harga transfer internal kerap memicu sengketa antar-divisi & mengaburkan akuntabilitas — klasifikasikan unit sesuai apa yang benar-benar bisa dikendalikan manajernya (prinsip controllability).

## Definition snippet draft (40–60 kata; SEKALI, jangan diulang di body/H2/FAQ)

> Ringkasnya: cost center (pusat biaya) adalah unit organisasi yang bertanggung jawab atas biaya yang dikeluarkannya, sedangkan profit center (pusat laba) bertanggung jawab atas pendapatan sekaligus biaya sehingga labanya bisa dihitung. Keduanya adalah jenis pusat pertanggungjawaban yang dipakai untuk menilai kinerja tiap unit secara adil.

(44 kata; tanpa em-dash agar jatah em-dash body tetap utuh. **INI satu-satunya definisi** — body/H2/FAQ dilarang menyatakannya ulang dengan kata lain, termasuk di jawaban langsung tiap H2.)

## Edge cases & nuance

- **Controllability adalah prinsip pengikat** (differentiator vs SERP ID): manajer hanya dinilai atas yang bisa ia kendalikan. Inilah alasan HR/IT jadi cost center (tak kendalikan pendapatan) dan cabang jadi profit center. Taruh di jawaban langsung H2 #2 agar extractable.
- **Cost center ≠ revenue center** (trust-builder): sebagian sumber ID populer keliru menyamakan cost center dengan "pusat pendapatan". **JANGAN tiru.** Revenue center = pusat **pendapatan** (penjualan), jenis ke-3 yang berbeda; cost center sama sekali tidak menghasilkan pendapatan.
- **Investment center lebih dari profit center**: dinilai atas laba **relatif modal** (ROI), bukan laba absolut. Ini jawaban PAA "bedanya profit center dan investment center".
- **Praktik lapangan (tanpa menyebut Soltius di body)**: "di lapangan, keluhan paling sering bukan soal definisi, melainkan unit pendukung yang dipaksa jadi profit center lewat harga transfer internal — akuntabilitas jadi kabur dan antar-divisi saling menyalahkan" — framing pengalaman, jujur, tanpa angka klien.
- **Penamaan/konfigurasi SAP berubah antar-rilis/edisi** → rujuk SAP Learning/SAP Help; jangan klaim versi/field/T-code spesifik tanpa sumber.

## Flags (open factual risk)

- ⚠️ **Cousin `buku-besar-general-ledger` = HTTP 404 run ini (belum live)**. → **Rekomendasi**: pakai fallback `apa-itu-siklus-akuntansi-dan-manfaatnya` (✅ live) sebagai cousin. Editor cek ulang status buku-besar saat publish; bila sudah live boleh ganti, total tetap 2 link & hub FICO wajib.
- ⚠️ **"Allocation cycle" sebagai istilah/alur spesifik**: WebSearch tidak menemukan halaman SAP yang menjelaskan "allocation cycle" secara langsung run ini; yang terverifikasi = "allocation tools transfer costs posted to cost centers" + activity allocation (machine/labour hours). → **Rekomendasi**: tulis "biaya cost center **dialokasikan/disebar** ke unit pemakai" (konsep aman); boleh sebut "allocation cycle" sebagai contoh mekanisme CO **dengan hedge**, jangan deskripsikan langkah teknis yang tak bersumber.
- ⚠️ **Controlling area A000 & nama tabel ACDOCA**: terverifikasi untuk S/4HANA Cloud **public edition** / materi rilis 2023; private & on-prem bisa beda. → **Rekomendasi**: sebut "controlling area terkonfigurasi (mis. A000 di public cloud)" + "satu tabel jurnal universal"; hedge "konfigurasi/penamaan bergantung edisi/rilis — rujuk SAP Learning/SAP Help". JANGAN sebut T-code (KS01) di body.
- ⚠️ **"Laba vs target" sebagai dasar penilaian profit center**: konvensi managerial accounting baku, TETAPI bukan kutipan verbatim AccountingTools (halaman itu hanya eksplisit soal cost center "rated on costs"). → **Rekomendasi**: aman dinyatakan sebagai praktik umum; jangan atribusikan sebagai kutipan langsung AccountingTools.
- ⚠️ **Tren "sap fico +46%"**: berasal dari catatan sheet/GSC di tracker, **bukan** statistik SAP resmi. → **Rekomendasi**: jangan sajikan sebagai statistik SAP; boleh dipakai di catatan internal saja, tidak wajib di body.

## Catatan untuk orchestrator / writer

- Ini **tahap-1** (dossier). Tahap berikut (writer → editor → validator → .docx) belum dijalankan untuk artikel ini.
- Struktur override 2026-10 diterapkan: target ~1100 kata; **0 image placeholder**; definisi SEKALI di snippet "Ringkasnya:"; **4 H2** (H2 #1 question perbedaan + **tabel**; H2 #2 kerangka 4 pusat pertanggungjawaban/list; H2 #3 alur alokasi + contoh angka + honest hedging dilipat; H2 #4 jembatan SAP FICO/CO); jawaban langsung 40–60 kata setelah tiap H2 (poin baru, bukan ulang snippet); **≥5 angka spesifik inline** (2 jenis unit; 5 baris tabel; 4 jenis pusat; Rp600 jt → 50/30/20% ke 3 profit center = Rp300/180/120 jt; controlling area A000; 1 tabel jurnal universal); FAQ **4**; internal link **TEPAT 2** (hub FICO + fallback siklus akuntansi); sitasi **SAP Learning (profit/cost center) + AccountingTools**; Soltius **maks 2** mention (Kesimpulan + CTA baris terakhir); anchor CTA = **SAP FICO (Controlling)**.
- **Boundary dedup**: JANGAN ajarkan cara posting/bentuk buku besar/Universal Journal sebagai topik utama (milik `buku-besar-c01`); JANGAN bedah struktur/komponen laporan laba rugi (milik `laporan-laba-rugi-c01`). "Laba" = tolok ukur tanggung jawab unit. Investment center/ROI, transfer pricing, konfigurasi CO mendalam, CO-PA = disebut ≤1 frasa, sisakan untuk artikel lain.
- **JANGAN mengarang** angka/T-code/spesifikasi SAP, pasal, atau angka klien Soltius. Contoh alokasi WAJIB berlabel ilustrasi.
- Meta block saran brief (editor finalisasi): meta_title "Cost Center dan Profit Center: Perbedaan & Fungsi" (49 char); meta_description 158 char (lihat brief); slug "cost-center-dan-profit-center-perbedaan-fungsi" (46 char); publish_month 2026-10.
