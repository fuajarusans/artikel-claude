---
brief_id: "ap-ar-c01"
researcher_run_date: "2026-07-17"
sources_cited: 4
verified_claims: 12
flags: 9
batch: "conditional-2026-08 (style_addendum.md — 800–1000 kata, 0 image placeholder, FAQ 3, 2 internal link)"
---

# Research Dossier: Account Payable & Account Receivable: Pengertian dan Cara Mengelolanya

## TL;DR for the writer

- **Dossier ini ramping karena artikelnya ramping (~900 kata, 4 H2).** Semua yang ada di bawah muat; jangan tambahkan riset sendiri.
- **Dua pertanyaan terbuka brief SUDAH TERJAWAB run ini.** (a) Pernyataan *cleared* sisi **AP** ✅ terverifikasi dari halaman SAP resmi ("The outgoing payment references the supplier invoice. Both line items will be marked as cleared") — brief mengizinkan pakai. (b) **Three-way match ✅ AKHIRNYA punya sumber SAP official** — brief menyatakan "belum ditemukan di SAP official"; run ini menemukannya di SAP Learning (Procure-to-Pay). Ini upgrade terbesar: H2 #2 sekarang bisa bersitasi, bukan sekadar "praktik umum".
- **⚠️ TAPI SAP menyebutnya "Three-Step Verification", bukan "three-way matching".** Jangan tulis "SAP menyebutnya three-way match". Pola aman ada di §Sitasi.
- **⚠️ KOREKSI FAKTA pada draf FAQ #2 di brief.** Brief menulis AP = liabilitas jangka pendek *"karena umumnya jatuh tempo dalam 12 bulan atau kurang"*. **Alasan itu keliru secara standar.** Utang usaha diklasifikasikan jangka pendek karena bagian modal kerja dalam **siklus operasi normal** — *walaupun* jatuh tempo lebih dari 12 bulan. Pakai FAQ #2 versi dossier ini, bukan versi brief.
- **DROP: "payment run menurut payment terms & payment method".** Tidak ada di halaman SAP mana pun yang berhasil di-fetch run ini → brief memerintahkan drop bila gagal. Gantinya sudah tersedia & terverifikasi: **payment program** + **payment block**.

---

## Core facts (verified)

### Sisi AP — SAP Learning (Managing Accounts Payable)

> **Claim**: Definisi fungsional AP di sistem SAP.
> **Verbatim**: *"Accounts Payable records and administers accounting data for each individual vendor."*
> **Source**: SAP Learning, "Managing Accounts Payable" — https://learning.sap.com/courses/exploring-end-to-end-business-processes-in-sap-business-suite/managing-accounts-payable_dcb7da7b-c24c-48d9-8b12-73c44bb6e988 (WebFetch 200, diakses 2026-07-17)
> **Confidence**: high

> **Claim**: Posting AP mengalir ke akun rekonsiliasi di buku besar.
> **Number/specific**: jumlah diposting ke *reconciliation account* di General Ledger; saat pembayaran, *"the assigned payables reconciliation account in the General Ledger is also reduced"*. Contoh materi: akun **21000000 Payables Domestic**.
> **Source**: sama seperti di atas
> **Confidence**: high untuk mekanismenya — ⚠️ **medium untuk kata "otomatis" di sisi AP**: halaman AP tidak memakai kata *automatically* (halaman **AR** memakainya). Lihat Flag #3.

> **Claim**: Faktur terbuka ditandai lunas saat pembayaran diposting — **sisi AP** *(pertanyaan terbuka brief → TERJAWAB)*.
> **Verbatim**: *"The outgoing payment references the supplier invoice. Both line items will be marked as cleared."*
> **Source**: sama seperti di atas
> **Confidence**: high ✅ — brief mensyaratkan fetch halaman langsung sebelum dikutip; **sudah dilakukan run ini**. Aman dipakai.

### Sisi AR — SAP Learning (Managing Accounts Receivable)

> **Claim**: Definisi fungsional AR di Financial Accounting.
> **Verbatim**: *"Accounts Receivable in Financial Accounting (FI) records and manages the accounting data of each customer."*
> **Source**: SAP Learning, "Managing Accounts Receivable" — https://learning.sap.com/courses/exploring-end-to-end-business-processes-in-sap-business-suite/managing-accounts-receivable_af769af4-e265-4bd5-8a46-7bda1ba03b38 (WebFetch 200, diakses 2026-07-17)
> **Confidence**: high

> **Claim**: Faktur dari modul penjualan otomatis diposting ke AR.
> **Verbatim**: *"Because it is highly integrated with SAP S/4HANA Sales, customer invoices and credit notes from SAP S/4HANA Sales are automatically posted in Accounts Receivable."*
> **Source**: sama seperti di atas
> **Confidence**: high

> **Claim**: Akun rekonsiliasi diperbarui otomatis — **inti lensa sistem H2 #4**.
> **Verbatim**: *"The assigned reconciliation account is automatically updated, too."*
> **Source**: sama seperti di atas
> **Confidence**: high ✅ (kata *automatically* eksplisit — pakai kalimat AR ini, bukan AP, saat menyatakan "otomatis")

> **Claim**: Data master pelanggan (peran FI Customer) menyimpan aturan pembayaran & penagihan.
> **Number/specific**: mencakup **Reconciliation account**, **Payment terms**, **Dunning terms** (tiga field, disajikan sebagai bullet terpisah di halaman SAP).
> **Source**: sama seperti di atas
> **Confidence**: high

> **Claim**: *Open item* → *cleared* di sisi AR.
> **Verbatim**: *"Finally, the customer invoice and the payment are marked as cleared."*
> **Source**: sama seperti di atas
> **Confidence**: high

### Three-way match — SAP Learning (Procure-to-Pay) ⭐ SUMBER BARU RUN INI

> **Claim**: Pencocokan tiga dokumen sebelum faktur disetujui — **definisi dari SAP official**.
> **Verbatim**: *"Three-step verification is the process of comparing the purchase order, invoice, and goods receipt to make sure they match, prior to approving the invoice."*
> **Source**: SAP Learning, "Exploring the Procure-to-Pay Process" — https://learning.sap.com/courses/explaining-payables-invoice-processing/exploring-the-procure-to-pay-process_d7a4061e-3d6a-44ff-bab5-e548bc258dfc (WebFetch 200, diakses 2026-07-17)
> **Confidence**: high ✅ — **membatalkan asumsi brief** bahwa three-way match "belum ditemukan di SAP official". Frasa *"prior to approving the invoice"* persis menopang poin quotable H2 #2 (kontrol **sebelum** uang keluar).

> **Claim**: Bukti penerimaan barang mencocokkan ke purchase order.
> **Verbatim**: *"The goods receipt will check the purchase order for the quantity ordered."*
> **Source**: sama seperti di atas
> **Confidence**: high

> **Claim**: Faktur baru dibayar bila tidak ada selisih dan tidak ada blokir — pengganti terverifikasi untuk "payment run".
> **Verbatim**: *"If everything is fine, no differences occurred, and there is no payment block, the vendor invoice is usually paid using the payment program."*
> **Source**: sama seperti di atas
> **Confidence**: high ✅ — **pakai ini**, bukan klaim *payment run menurut payment terms* yang gagal verifikasi (Flag #1). Entitas **payment block** adalah bonus: menopang kalimat "faktur ditahan, bukan diloloskan".

### Klasifikasi neraca

> **Claim**: Utang usaha = liabilitas jangka pendek karena **siklus operasi normal**, bukan karena ambang 12 bulan.
> **Verbatim**: *"Walaupun jatuh tempo liabilitas tersebut lebih dari 12 bulan, namun liabilitas tersebut merupakan bagian dari modal kerja dalam siklus operasi normal entitas, oleh karena itu utang usaha tersebut diklasifikasikan dalam liabilitas jangka pendek."* Kriteria pertama: *"entitas memperkirakan akan menyelesaikan liabilitas tersebut dalam siklus operasi normal."*
> **Source**: DDTC News (publikasi pajak/akuntansi Indonesia yang kredibel), "Klasifikasi Aset-Liabilitas Sesuai PSAK 201 di Laporan Posisi Keuangan" — https://news.ddtc.co.id/berita/nasional/1807003/klasifikasi-aset-liabilitas-sesuai-psak-201-di-laporan-posisi-keuangan (WebFetch 200, diakses 2026-07-17)
> **Confidence**: medium-high (sumber sekunder; teks standar IAI tidak diakses langsung) → **jangan disitasi inline, jangan sebut nomor PSAK** (milik `laporan-laba-rugi-c01`). Nyatakan sebagai fakta akuntansi standar. Lihat Flag #2.

> **Claim**: Ambang dua belas bulan berlaku untuk **aset lancar**.
> **Verbatim**: *"entitas memperkirakan akan merealisasi aset dalam jangka waktu dua belas bulan setelah periode pelaporan."*
> **Source**: sama seperti di atas
> **Confidence**: medium-high → angka **12 bulan** aman dipakai **dilekatkan pada aset lancar**, bukan sebagai sebab AP jangka pendek.

---

## Definition snippet draft (49 kata) — SATU-SATUNYA definisi di artikel

> Ringkasnya: account payable adalah kewajiban perusahaan kepada pemasok atas barang atau jasa yang sudah diterima tetapi belum dibayar. Dalam Bahasa Indonesia disebut utang usaha, dan tercatat sebagai liabilitas jangka pendek. Account receivable (piutang usaha) adalah kebalikannya: hak tagih atas penjualan kredit yang belum dibayar pelanggan, tercatat sebagai aset lancar.

- **49 kata** (band 40–60 ✓). Primary keyword `account payable adalah` muncul **persis** ✓. Kedua entitas didefinisikan ✓. Padanan Indonesia di-expand sekali ✓. Tanpa em-dash (hemat kuota em-dash ≤2 untuk body) ✓.
- **Sengaja TIDAK memuat** "keduanya sama-sama pos neraca" — itu poin BARU milik FAQ #2. Jangan pindahkan ke sini.
- Body/H2 **dilarang** menyatakan ulang isi snippet dengan kata lain.

---

## Structured element #1 (utama) — Tabel komparasi 7 dimensi (H2 #1)

Data terverifikasi/aman; kolom persis seperti brief.

| Dimensi | Account Payable (Utang Usaha) | Account Receivable (Piutang Usaha) |
|---|---|---|
| Posisi di neraca | Liabilitas jangka pendek | Aset lancar |
| Arah kas | Keluar | Masuk |
| Lawan transaksi | Pemasok/vendor | Pelanggan |
| Dokumen pemicu | Faktur yang **diterima** dari pemasok | Faktur yang **diterbitkan** ke pelanggan |
| Proses induk | *Procure-to-Pay* | *Order-to-Cash* |
| Ukuran umum | DPO (*Days Payable Outstanding*) | DSO (*Days Sales Outstanding*) |
| Risiko utama | Bayar ganda atau bayar barang yang tak pernah datang | Piutang macet |

⚠️ Baris "Ukuran umum": **cukup dinamai — DILARANG memberi rumus/kadens** (milik cluster `business-intelligence` monthly 2026-08).

**Poin quotable H2 #1 (dua sisi transaksi yang sama)** — tidak dimiliki satu pun pesaing, dan **tidak butuh sitasi** (pernyataan logis, gratis):
> Utang usaha Anda kepada pemasok tercatat sebagai piutang usaha di pembukuan pemasok itu, atas faktur yang sama. Yang membedakan bukan jenis transaksinya, melainkan posisi Anda di dalamnya.

## Structured element #2 — List three-way match (H2 #2)

Sekarang **bersitasi SAP** (lihat Sitasi #1). Urutan dokumen persis seperti kalimat SAP: purchase order → goods receipt → invoice.

1. **Purchase order (PO)** — apa yang dipesan.
2. **Bukti penerimaan barang (*goods receipt*)** — apa yang benar-benar datang. *(SAP: "The goods receipt will check the purchase order for the quantity ordered.")*
3. **Faktur pemasok** — apa yang ditagih.

Cocok pada **item, kuantitas, dan harga** → faktur layak dibayar. Tidak cocok → **ditahan untuk peninjauan**, bukan diloloskan lalu diperbaiki nanti. SAP menopang urutan logisnya: pembayaran lewat *payment program* baru berjalan bila *"no differences occurred, and there is no payment block"*.

- **Jasa tanpa penerimaan barang → pencocokan dua dokumen.** ⚠️ **Tidak terverifikasi dari SAP** (Flag #4). Tulis "umumnya", tanpa atribusi.
- **Termin 2/10 net 30**: diskon **2%** bila dibayar dalam **10 hari**, jatuh tempo penuh **30 hari**. Tulis sebagai **contoh notasi** ("misalnya"). ⚠️ **DILARANG menghitung biaya tahunan ekuivalen** (Flag #5).
- **Honest hedging (1–2 kalimat, wajib per addendum §2)**: menahan pembayaran pemasok menambah saldo kas hari ini, tetapi biayanya berpindah, bukan hilang — diskon hangus, dan pemasok yang berulang kali dibayar terlambat cenderung memperketat termin di kontrak berikutnya.

## Structured element #3 — Tabel umur piutang → tindakan (H2 #3)

⚠️ Praktik umum industri; **tidak ada sumber otoritatif** — tulis dengan "umumnya", jangan sebagai ketentuan baku (Flag #6).

| Umur Piutang | Status | Tindakan yang Wajar |
|---|---|---|
| 0–30 hari | Belum jatuh tempo / baru lewat | Pengingat otomatis, tanpa eskalasi |
| 31–60 hari | Terlambat | Kontak personal ke bagian pembayaran pelanggan |
| 61–90 hari | Bermasalah | Eskalasi ke manajemen; tahan pengiriman/order baru |
| >90 hari | Berisiko macet | Tinjau sebagai potensi tak tertagih; pertimbangkan jalur formal |

- Berjenjang **30 hari** (umumnya). Poin quotable: bucket berbeda menuntut respons berbeda; piutang yang berpindah bucket adalah alarm, bukan angka yang bergeser.
- Satu kalimat hulu: batas kredit dan termin disepakati **sebelum** order diterima, bukan dinegosiasikan saat menagih.
- ⚠️ **DILARANG** menghitung penyisihan piutang tak tertagih / *expected credit loss*; **DILARANG** menyebut PSAK 71 (Flag #7).

## Material H2 #4 (lensa sistem — prosa, 1–2 kalimat soal SAP)

Rangkaian aman, semuanya terverifikasi:
- AP dan AR adalah **buku besar pembantu** (*sub-ledger*); setiap posting memperbarui **akun rekonsiliasi** (*reconciliation account*) di buku besar. Kalimat "otomatis" bersandar pada AR: *"The assigned reconciliation account is automatically updated, too."*
- Data master pelanggan menyimpan **payment terms** dan **dunning terms** → penagihan & jadwal bayar berjalan menurut aturan yang disepakati, bukan ingatan staf.
- *Open item* → **cleared** saat pembayaran diposting (terverifikasi **kedua sisi**).
- ⚠️ **DILARANG**: Universal Journal/ACDOCA, Joule/AI/ML, Business Partner, konfigurasi FI, GR/IR, *special GL indicator*, F110.

---

## Solution focus + Soltius anchor

| What to teach | Facts to state accurately | Where | Soltius anchor |
|---|---|---|---|
| AP/AR sebagai sub-ledger + akun rekonsiliasi di **SAP S/4HANA Finance** | Definisi AP/AR di FI; akun rekonsiliasi diperbarui otomatis; payment terms & dunning terms di data master; open item → cleared | H2 #4 (1–2 kalimat) | Kesimpulan: heritage **1998 + Metrodata Group** |

- **Maks 2 mention Soltius total**: 1 positioning line di Kesimpulan + 1 soft CTA (baris terakhir). **TANPA aside Soltius di body.**
- Kredensial: pakai **1998/Metrodata** (per `company_profile.md`) — brief melarang mengulang "SAP Platinum Partner via United VARs" yang sudah dipakai `neraca-saldo-c01` & `laporan-laba-rugi-c01`.
- Framing wajib: Soltius **mengimplementasikan dan mendampingi** SAP S/4HANA Finance — **NEVER builds/owns**. Tanpa superlatif, tanpa nama klien, tanpa angka proyek.

## Authoritative external sources (sitasi inline: 1–2 SAJA)

**Rekomendasi penempatan** (beda dari brief — brief menaruh keduanya di H2 #4; sumber three-way match baru run ini membuat sebaran ini lebih kuat):

1. **SAP Learning — "Exploring the Procure-to-Pay Process"** — https://learning.sap.com/courses/explaining-payables-invoice-processing/exploring-the-procure-to-pay-process_d7a4061e-3d6a-44ff-bab5-e548bc258dfc — *backs*: definisi pencocokan tiga dokumen sebelum faktur disetujui. **Pakai di H2 #2.**
2. **SAP Learning — "Managing Accounts Receivable"** — https://learning.sap.com/courses/exploring-end-to-end-business-processes-in-sap-business-suite/managing-accounts-receivable_af769af4-e265-4bd5-8a46-7bda1ba03b38 — *backs*: AR di FI, akun rekonsiliasi otomatis, payment/dunning terms, cleared. **Pakai di H2 #4.** *(Bila hanya 1 sitasi yang muat: pilih yang ini — faktanya paling kaya.)*

**Cadangan (tidak perlu disitasi, tersedia bila editor minta):** SAP Learning — "Managing Accounts Payable" — https://learning.sap.com/courses/exploring-end-to-end-business-processes-in-sap-business-suite/managing-accounts-payable_dcb7da7b-c24c-48d9-8b12-73c44bb6e988 (menopang definisi AP + *cleared* sisi AP).

**Pola sitasi aman untuk three-way match** (SAP memakai istilah *Three-Step Verification*, bukan *three-way matching* — Flag #8):
> ✅ "Materi SAP Learning mendefinisikan pencocokan tiga dokumen (*three-step verification*) sebagai proses membandingkan purchase order, faktur, dan bukti penerimaan barang **sebelum faktur disetujui**."
> ❌ "SAP menyebut proses ini three-way match." / ❌ "Menurut SAP, three-way matching adalah…"

## Internal links (TEPAT 2)

- **Hub** → `https://www.soltius.co.id/id/blog/sistem-sap-fico-dan-modulnya-yang-banyak-digunakan-perusahaan-besar` — anchor "modul keuangan SAP (FICO)" — tempatkan di **H2 #4**.
- **Cousin** → `https://www.soltius.co.id/id/blog/Manajemen-Keuangan-dalam-Bisnis-Demi-Kemajuan-Perusahaan` — anchor "manajemen keuangan" — tempatkan di **lead atau H2 #1**. ⚠️ **Huruf kapital persis** — jangan di-*lowercase*. Tautkan sebagai **konteks induk**; jangan klaim halaman itu membahas AP/AR.
- Tanpa "BACA JUGA"; inline natural. Writer cek ulang 200/OK saat menulis.

---

## FAQ drafts (3 Q&A, Bahasa Indonesia, 30–60 kata, tiap jawaban 1 fakta/angka)

### Apa tugas dan tanggung jawab staff account payable?
Inti pekerjaannya bukan mengetik, melainkan menahan pembayaran yang belum layak dibayar. Staf account payable memverifikasi faktur pemasok terhadap tiga dokumen (purchase order, bukti penerimaan barang, dan faktur pemasok), menjadwalkan pembayaran sesuai termin yang disepakati, lalu merekonsiliasi saldo pemasok. Faktur yang selisih ditahan untuk peninjauan, bukan diloloskan.

*(47 kata. Fakta: 3 dokumen. Menjawab PAA terkuat dari lensa proses, bukan lowongan kerja. Tidak menduplikasi H2 #2 karena fokusnya peran, bukan mekanisme kontrol.)*

### Apakah account payable termasuk utang atau aset?
Utang. Account payable adalah liabilitas jangka pendek karena diselesaikan dalam siklus operasi normal perusahaan, sedangkan account receivable adalah aset lancar yang umumnya direalisasi dalam dua belas bulan setelah periode pelaporan. Keduanya sama-sama pos neraca, bukan pos laporan laba rugi: yang masuk laporan laba rugi adalah pembelian dan penjualannya, bukan saldo utang-piutangnya.

*(53 kata. Fakta/angka: dua belas bulan — **dilekatkan pada aset lancar**, bukan sebagai sebab AP jangka pendek. **Versi ini MENGGANTIKAN draf FAQ #2 di brief yang alasannya keliru** — lihat Flag #2. Poin baru: keduanya pos neraca.)*

### Apa bedanya account payable dan utang bank?
Account payable timbul dari pembelian barang atau jasa operasional secara kredit, tanpa perjanjian pinjaman formal, dan umumnya tidak berbunga sepanjang dibayar dalam termin yang disepakati (misalnya 30 hari). Utang bank timbul dari perjanjian kredit, berbunga, dan berjangka waktu tetap. Keduanya liabilitas, tetapi hanya account payable yang mengikuti ritme operasi harian.

*(51 kata. Fakta/angka: 30 hari.)*

---

## Angka spesifik inline yang tersedia (≥4 wajib — tersedia 6)

**3** dokumen three-way match · **2/10 net 30** (diskon **2%** / **10 hari** / **30 hari**) · bucket **0–30 / 31–60 / 61–90 / >90 hari** (berjenjang **30 hari**) · **12 bulan** (aset lancar) · **7** dimensi tabel · **2** dokumen untuk jasa (hedge "umumnya").

## Edge cases & nuance

- **"Dua sisi transaksi yang sama" itu benar tetapi bukan cermin sempurna.** Nilainya bisa berbeda di kedua pembukuan (selisih kurs, potongan, sengketa kuantitas) — karena itulah rekonsiliasi saldo pemasok tetap ada. Cukup 1 klausa bila muat; jangan dibedah.
- **AP tidak selalu "gratis".** Diskon 2/10 yang dilewatkan adalah biaya nyata meski tidak muncul sebagai bunga. Ini isi honest hedging H2 #2 — jangan dinaikkan jadi analisis biaya modal.
- **Bucket umur ≠ kualitas piutang.** Satu pelanggan besar di bucket 31–60 bisa lebih berisiko daripada sepuluh kecil di >90. Opsional, hanya bila muat.

## Flags (open factual risk — writer WAJIB patuh)

1. ⚠️ **"Payment run disiapkan menurut payment terms & payment method"** — **TIDAK TERVERIFIKASI.** Tidak muncul di halaman AP maupun P2P yang di-fetch run ini. → **DROP** (perintah brief). Ganti dengan fakta terverifikasi: *payment program* + *payment block* + *payment terms* sebagai field data master (AR).
2. ⚠️ **Draf FAQ #2 di brief salah sebab** ("liabilitas jangka pendek **karena** jatuh tempo dalam 12 bulan atau kurang"). Standar penyajian justru menyatakan utang usaha tetap jangka pendek **walaupun** jatuh tempo >12 bulan, karena bagian modal kerja siklus operasi normal. → **Pakai FAQ #2 versi dossier.** Jangan menulis "12 bulan" sebagai sebab klasifikasi AP.
3. ⚠️ **Kata "otomatis" untuk akun rekonsiliasi**: eksplisit hanya di halaman **AR** (*"automatically updated"*). Halaman AP tidak memakai kata itu. → Bila menyatakan "otomatis", sandarkan pada **AR** atau tulis netral untuk keduanya. Jangan mengutip AP untuk kata "otomatis".
4. ⚠️ **Pencocokan dua dokumen untuk jasa** — tidak ditemukan di SAP official run ini. → tulis "umumnya", **tanpa atribusi SAP**.
5. ⚠️ **Biaya tahunan ekuivalen diskon 2/10 net 30** — **DILARANG dihitung/dikarang.** Tidak ada sumber.
6. ⚠️ **Bucket 0–30/31–60/61–90/>90** — praktik lazim, **bukan ketentuan baku**; tanpa sumber otoritatif. → wajib "umumnya". **DILARANG** mengarang statistik piutang macet Indonesia atau benchmark DSO/DPO industri.
7. ⚠️ **PSAK 71 / kerugian kredit ekspektasian** — **JANGAN DIPAKAI** (halaman IAI yang ada = Exposure Draft 2016, bukan standar final). Juga **jangan sebut nomor PSAK apa pun** — PSAK 201 milik `laporan-laba-rugi-c01`.
8. ⚠️ **Istilah**: SAP official memakai **"Three-Step Verification"**. **"Three-way match" adalah istilah industri umum, bukan istilah SAP.** → jangan atribusikan istilahnya ke SAP (pola aman di §Sitasi).
9. ⚠️ **Nomor akun 21000000 "Payables Domestic"** — **contoh di materi SAP, bukan standar.** → **jangan tulis sama sekali** di artikel 900 kata.

### Boundary dedup — ringkas (MENGIKAT, dari brief)

**DILARANG total**: sudut AI apa pun (Joule, SAP Business AI, ML, OCR, *cash application*, deteksi anomali, *straight-through processing*, agen finance) + **seluruh angka `ai-untuk-finance-c01`** (60% / 85% / 10% / 70% / 80%, Gartner 59%/37%/34%, Bain 79%/94%/71%) · siklus akuntansi dasar, jurnal umum, debit-kredit · neraca saldo & jenisnya · struktur laporan laba rugi / margin / single-multiple step / PSAK 201 / FSV · rumus & kadens DSO/DPO, *cash conversion cycle* · Universal Journal/ACDOCA · Business Partner · GR/IR · konfigurasi FI (F110, *special GL indicator*, *dunning procedure*).

**Format**: **0** image placeholder (`{IMAGE_NN}` dilarang total) · body **800–1000 kata** · FAQ **3** · internal link **tepat 2** · sitasi inline **1–2** · em-dash **≤2** · Soltius **maks 2 mention** · lead **≤80 kata** · Kesimpulan **≤80 kata** · soft CTA soltius.co.id = **baris paling akhir** · definisi **hanya di snippet**.
