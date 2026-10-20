---
brief_id: "neraca-saldo-c01"
researcher_run_date: "2026-07-06"
sources_cited: 9
flags: 7
batch: "conditional-2026-07 (style_addendum.md WAJIB — 800–1000 kata, tanpa image placeholder, FAQ 2–3, 2 internal link)"
---

# Research Dossier: Neraca Saldo: Pengertian, Fungsi, dan Contoh Penyusunannya

## TL;DR for the writer

- Artikel ini = tahap VERIFIKASI siklus akuntansi (setelah posting buku besar). **Boundary tegas**: jangan mengulang materi jurnal umum (`jurnal-umum-c01`) — konteks tahap sebelumnya cukup 1 kalimat.
- Honest angle yang menang di SERP: **balance ≠ bebas kesalahan**. 4 jenis kesalahan tetap lolos meski total debit = kredit — terverifikasi via AccountingTools.
- Heuristik pelacakan selisih terverifikasi: selisih habis **dibagi 9** → transposisi/slide; habis **dibagi 2** → saldo masuk kolom salah (cari akun bernilai setengah selisih). Sumber: Lumen Learning (SUNY OER) + AccountingTools.
- Jembatan enterprise terverifikasi: **Universal Journal (tabel ACDOCA)** di SAP S/4HANA = satu tabel line-item untuk GL/CO/aset/material ledger/profitabilitas; aplikasi **Trial Balance di SAP Fiori (F0996)** membaca langsung ACDOCA.
- Tabel contoh (H2 #3) sudah disusun & dihitung dari skenario transaksi konsisten: 8 akun, total debit = kredit = **Rp98.000.000** (lihat bagian Data tables). Jangan ubah satu angka pun tanpa menghitung ulang.
- Kedua URL internal link dicek 200/OK (2026-07-06). Sibling jurnal umum BELUM live — jangan ditautkan.

## Core facts (verified) — 12 klaim terkuat

> **Claim 1**: Neraca saldo (trial balance) adalah laporan/daftar yang memuat saldo akhir setiap akun buku besar.
> **Number/specific**: mencakup seluruh kategori akun — aset, liabilitas, ekuitas, pendapatan, beban.
> **Source**: AccountingTools, "Trial balance definition" — https://www.accountingtools.com/articles/the-trial-balance-example-format (accessed 2026-07-06): "The trial balance is an accounting report that lists the ending balance in each general ledger account."
> **Confidence**: high

> **Claim 2**: Format standar neraca saldo terdiri dari 4 kolom.
> **Number/specific**: nomor/kode akun, nama akun, saldo debit, saldo kredit.
> **Source**: AccountingTools (URL sama, accessed 2026-07-06): "The standard trial balance contains four columns: account number, account name, ending debit balance, and ending credit balance."
> **Confidence**: high

> **Claim 3**: Neraca saldo disusun sebagai bagian proses tutup buku akhir bulan dan akhir tahun, setelah seluruh posting buku besar selesai dan sebelum laporan keuangan dibuat.
> **Number/specific**: bagian dari month-end & year-end closing process.
> **Source**: AccountingTools (URL sama, accessed 2026-07-06).
> **Confidence**: high

> **Claim 4**: Ada 3 jenis/versi neraca saldo dalam satu siklus akuntansi.
> **Number/specific**: (1) **sebelum penyesuaian** (unadjusted — disusun langsung dari saldo buku besar, titik awal analisis & jurnal penyesuaian); (2) **setelah penyesuaian** (adjusted — setelah jurnal penyesuaian diposting; dasar penyusunan laporan keuangan yang sesuai kerangka akuntansi); (3) **penutup** (post-closing — setelah jurnal penutup; hanya memuat akun permanen/riil: aset, liabilitas, ekuitas; tujuannya memastikan total debit tetap = kredit sebelum periode berikutnya).
> **Source**: AccountingTools — "What is an unadjusted trial balance" / "What is an adjusted trial balance" / "What is a post-closing trial balance" (https://www.accountingtools.com/articles/what-is-a-post-closing-trial-balance.html, accessed 2026-07-06).
> **Confidence**: high

> **Claim 5**: Neraca saldo yang seimbang TIDAK membuktikan pembukuan bebas kesalahan.
> **Number/specific**: "Even when the debit and credit totals stated on the trial balance equal each other, it does not mean that there are no errors in the accounts."
> **Source**: AccountingTools (the-trial-balance-example-format, accessed 2026-07-06); diperkuat Lumen Learning/SUNY: "The equality of the two totals in the trial balance does not necessarily mean that the accounting process has been error-free."
> **Confidence**: high

> **Claim 6**: 4 jenis kesalahan tetap lolos meski neraca saldo balance.
> **Number/specific**: (1) **omisi** — transaksi tidak dicatat sama sekali; (2) **komisi** — entri diposting ke akun yang salah; (3) **nominal salah di kedua sisi** — debit dan kredit sama-sama salah dengan angka yang sama; (4) **kesalahan kompensasi** — dua kesalahan saling menghapus. (Entri ganda/duplikasi juga lolos — opsional sebagai tambahan, tapi jaga konsistensi angka "4 jenis".)
> **Source**: AccountingTools — "Trial balance errors" (https://www.accountingtools.com/articles/trial-balance-errors.html, accessed 2026-07-06) + the-trial-balance-example-format (wrong account, wrong amounts both sides, reversed, omitted).
> **Confidence**: high

> **Claim 7**: Heuristik selisih habis dibagi 9 → indikasi transposisi (angka tertukar) atau slide (salah letak desimal).
> **Number/specific**: contoh transposisi: 63 tertulis 36 (selisih 27), 72 tertulis 27 (selisih 45) — keduanya habis dibagi 9; contoh slide: 1.500 tertulis 15,00.
> **Source**: AccountingTools — "Transposition error" (https://www.accountingtools.com/articles/transposition-error, accessed 2026-07-06); Lumen Learning, "Preparing a Trial Balance" (https://courses.lumenlearning.com/suny-finaccounting/chapter/preparing-a-trial-balance/, accessed 2026-07-06): "If the difference is divisible by 9, you may have made a transposition error... or a slide error."
> **Confidence**: high

> **Claim 8**: Heuristik selisih habis dibagi 2 → kemungkinan saldo debit tersalin sebagai kredit (atau sebaliknya); cari akun bernilai setengah selisih.
> **Number/specific**: "If the difference is divisible by 2, you may have transferred a debit-balanced account to the trial balance as a credit, or a credit-balanced account as a debit" — lalu cari nilai = 1/2 selisih.
> **Source**: Lumen Learning (URL sama, accessed 2026-07-06).
> **Confidence**: high

> **Claim 9**: Di SAP S/4HANA, Universal Journal mencatat seluruh line item keuangan dalam SATU tabel: ACDOCA.
> **Number/specific**: menggabungkan general ledger, controlling (CO), asset accounting, material ledger, dan profitability analysis; disebut SAP sebagai "single source of truth"; menghapus kebutuhan rekonsiliasi FI vs CO.
> **Source**: SAP Help Portal — "Universal Journal" (https://help.sap.com/docs/SAP_S4HANA_ON-PREMISE/651d8af3ea974ad1a4d74449122c620e/523b8a55559ad007e10000000a44538d.html, page live 2026-07-06); korroborasi teks: SAP PRESS (blog.sap-press.com/what-is-saps-universal-journal): "The Universal Journal is the common line-item persistence... It combines transactional line items from different functional subdomains: General ledger, Profit center accounting, Fixed asset accounting, Material ledger, Controlling, Profitability analysis."
> **Confidence**: high (lihat Flag #2 soal quoting)

> **Claim 10**: Aplikasi Trial Balance di SAP Fiori (app ID F0996) menampilkan saldo debit/kredit per ledger untuk seluruh company code, dengan sumber data langsung tabel ACDOCA.
> **Number/specific**: app ID **F0996** (varian analitik: F0996A); rentang waktu bebas; data dibaca dari ACDOCA (Universal Journal) — bukan tabel agregat terpisah; leading business role: General Ledger Accountant.
> **Source**: SAP Fiori Apps Reference Library — Trial Balance F0996 (https://fioriappslibrary.hana.ondemand.com/sap/fix/externalViewer/#/detail/Apps('F0996')); SAP KBA 3573596; SAP Help "Trial Balance, Trial Balance Comparison" (accessed 2026-07-06).
> **Confidence**: high

> **Claim 11**: Karena saldo dibaca langsung dari Universal Journal, trial balance di S/4HANA tersedia kapan saja tanpa kompilasi manual akhir periode.
> **Number/specific**: keseimbangan debit-kredit dijaga sistem sejak dokumen diposting (double-entry ditegakkan saat input); laporan dihitung on-the-fly dari line item ACDOCA.
> **Source**: SAP Fiori Apps Reference Library F0996 + SAP Help/SAP PRESS di atas (accessed 2026-07-06).
> **Confidence**: medium-high — frasa aman: "tersedia setiap saat langsung dari Universal Journal, tanpa rekap manual akhir bulan"; hindari jargon marketing berlebihan (lihat Flag #3).

> **Claim 12**: Contoh neraca saldo perusahaan jasa 8 akun dengan total debit = kredit = Rp98.000.000 — disusun sendiri dari skenario transaksi konsisten (BUKAN salinan kompetitor), aritmetika diverifikasi.
> **Number/specific**: lihat "Data tables" — saldo diturunkan dari 7 transaksi; total kedua kolom Rp98.000.000.
> **Source**: konstruksi researcher (2026-07-06), derivasi lengkap di bawah — writer tinggal pakai.
> **Confidence**: high (self-consistent; sudah dihitung ulang)

## Solution focus + Soltius anchor

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| Neraca saldo / trial balance (vendor-neutral) | 4 kolom; 3 jenis; 5 langkah; 4 kesalahan lolos; heuristik 9/2 | Snippet + H2 #1–#4 | — (body vendor-neutral) |
| SAP S/4HANA Finance — Universal Journal (ACDOCA) | Satu tabel line-item untuk GL/CO/AA/ML/PA; single source of truth; keseimbangan dijaga sejak posting | H2 #4 saja (jembatan enterprise, 1–2 kalimat vendor-neutral dulu soal keterbatasan proses manual) | Positioning line di Kesimpulan: "SAP Platinum Partner melalui United VARs — mendampingi implementasi hingga dukungan pasca go-live" |
| Aplikasi Trial Balance di SAP Fiori (F0996) | Membaca langsung ACDOCA; saldo debit/kredit per ledger, semua company code | H2 #4 (1 kalimat) | Soft CTA soltius.co.id (baris terakhir); anchor funnel: SAP S/4HANA Finance |

Reminder: Soltius **mengimplementasikan/memigrasikan/mendukung** SAP — bukan pembuatnya. **Maks 2 mention Soltius total** (batch override): 1 positioning line Kesimpulan + 1 soft CTA. Tanpa aside Soltius di body.

## Authoritative external sources (untuk 1–2 sitasi inline artikel)

1. **AccountingTools — "Trial balance errors" (accessed 2026-07-06)** — https://www.accountingtools.com/articles/trial-balance-errors.html — *backs*: 4 jenis kesalahan yang lolos dari neraca saldo yang balance (basis H2 #4). Alternatif dari domain sama: definisi/format/keterbatasan di https://www.accountingtools.com/articles/the-trial-balance-example-format
2. **SAP Help Portal — "Universal Journal" (accessed 2026-07-06)** — https://help.sap.com/docs/SAP_S4HANA_ON-PREMISE/651d8af3ea974ad1a4d74449122c620e/523b8a55559ad007e10000000a44538d.html — *backs*: Universal Journal/ACDOCA sebagai tabel tunggal & single source of truth (klaim H2 #4).
3. (Cadangan, bila butuh sumber heuristik 9/2) **Lumen Learning, Financial Accounting (SUNY OER)** — https://courses.lumenlearning.com/suny-finaccounting/chapter/preparing-a-trial-balance/ — *backs*: selisih dibagi 9 (transposisi/slide) & dibagi 2 (kolom salah).

## Internal links (dicek 2026-07-06)

- **Hub**: https://www.soltius.co.id/id/blog/apa-itu-siklus-akuntansi-dan-manfaatnya — **200/OK** — anchor "siklus akuntansi", inline di lead atau H2 #1.
- **Cousin**: https://www.soltius.co.id/id/blog/sistem-sap-fico-dan-modulnya-yang-banyak-digunakan-perusahaan-besar — **200/OK** — anchor "modul keuangan SAP (FICO)", inline di H2 #4.
- **Sibling jurnal-umum-c01: BELUM live** di soltius.co.id per pengecekan indeks 2026-07-06 → JANGAN ditautkan; tetap 2 link di atas.

## FAQ Q&As (2–3, Bahasa Indonesia — jawaban 30–60 kata, tiap jawaban 1 fakta/angka)

### Apa perbedaan neraca saldo dan neraca (laporan posisi keuangan)?
Neraca saldo adalah dokumen kerja internal berformat 4 kolom (kode akun, nama akun, debit, kredit) yang memuat seluruh akun buku besar, termasuk pendapatan dan beban, untuk verifikasi keseimbangan. Neraca (laporan posisi keuangan) adalah laporan keuangan formal untuk pihak eksternal yang hanya menyajikan tiga elemen: aset, liabilitas, dan ekuitas. *(48 kata)*

### Apa yang harus dilakukan jika neraca saldo tidak balance?
Hitung ulang penjumlahan kedua kolom, lalu cocokkan setiap saldo dengan buku besar. Gunakan angka selisih sebagai petunjuk: selisih yang habis dibagi 9 mengindikasikan angka tertukar (transposisi, misalnya 540 tertulis 450), sedangkan selisih yang habis dibagi 2 biasanya berarti satu saldo masuk kolom yang salah; cari akun bernilai setengah selisih. *(50 kata)*

### Kapan neraca saldo dibuat?
Neraca saldo disusun pada akhir periode akuntansi, setelah seluruh transaksi diposting ke buku besar dan sebelum laporan keuangan dibuat. Dalam satu siklus penuh, neraca saldo dapat disusun hingga 3 kali: sebelum penyesuaian (unadjusted), setelah penyesuaian (adjusted), dan setelah jurnal penutup (post-closing). *(41 kata)*

## Data tables for the writer

### Tabel utama H2 #3 — Neraca Saldo, Studio Desain "Arah Kreatif" (per 31 Juli 2026)

| Kode Akun | Nama Akun | Debit (Rp) | Kredit (Rp) |
|---|---|---:|---:|
| 101 | Kas | 51.000.000 | |
| 102 | Piutang Usaha | 10.000.000 | |
| 121 | Peralatan | 25.000.000 | |
| 201 | Utang Usaha | | 7.000.000 |
| 301 | Modal Pemilik | | 60.000.000 |
| 401 | Pendapatan Jasa | | 31.000.000 |
| 501 | Beban Gaji | 7.000.000 | |
| 502 | Beban Sewa | 5.000.000 | |
| | **Total** | **98.000.000** | **98.000.000** |

Narasi pembacaan (1–2 kalimat untuk writer): akun bersaldo normal debit (aset dan beban) di kolom kiri; liabilitas, modal, dan pendapatan bersaldo normal kredit di kolom kanan; kedua total harus sama persis — di sini Rp98.000.000.

**Derivasi (verifikasi aritmetika — JANGAN masuk artikel, hanya jaminan konsistensi):**
1. Setoran modal pemilik tunai Rp60.000.000 → Kas +60 jt (D), Modal +60 jt (K)
2. Beli peralatan Rp25.000.000: tunai Rp15 jt + kredit Rp10 jt → Peralatan +25 jt, Kas −15 jt, Utang +10 jt
3. Pendapatan jasa tunai Rp21.000.000 → Kas +21 jt, Pendapatan +21 jt
4. Pendapatan jasa kredit Rp10.000.000 → Piutang +10 jt, Pendapatan +10 jt
5. Bayar gaji Rp7.000.000 → Beban Gaji +7 jt, Kas −7 jt
6. Bayar sewa Rp5.000.000 → Beban Sewa +5 jt, Kas −5 jt
7. Pelunasan sebagian utang Rp3.000.000 → Utang −3 jt, Kas −3 jt

Cek: Kas = 60−15+21−7−5−3 = **51 jt** ✓; Utang = 10−3 = **7 jt** ✓; Pendapatan = 21+10 = **31 jt** ✓. Total D = 51+10+25+7+5 = **98 jt**; Total K = 7+60+31 = **98 jt** ✓ BALANCE.

### Angka pendukung H2 #2 (5 langkah — HowTo-parseable)
(1) hitung saldo akhir tiap akun buku besar; (2) siapkan lembar kerja **4 kolom**; (3) masukkan saldo sesuai saldo normal, urut kode akun; (4) jumlahkan kolom debit dan kredit; (5) pastikan kedua total sama persis — jika tidak, telusuri selisih (heuristik 9/2) sebelum lanjut.

### Angka inline tersedia (≥4 wajib per addendum)
4 kolom · 3 jenis · 5 langkah · 4 jenis kesalahan lolos · dibagi 9 / dibagi 2 · contoh 540 vs 450 (selisih 90) · Rp98.000.000 = Rp98.000.000 · hingga 3 kali per siklus.

## Edge cases & nuance

- **Balance = syarat perlu, bukan syarat cukup.** Framing kesimpulan yang tepat: neraca saldo menguji kesamaan aritmetika total debit-kredit, bukan kebenaran klasifikasi maupun kelengkapan transaksi.
- Heuristik 9/2 adalah **alat penelusuran pertama**, bukan kepastian — selisih dibagi 9 juga bisa berasal dari slide (salah desimal), dan selisih genap tidak selalu berarti kolom salah. Gunakan kata "indikasi/kemungkinan".
- Post-closing trial balance hanya memuat **akun riil/permanen** — akun nominal (pendapatan, beban) sudah nol setelah jurnal penutup. Jangan tulis "semua akun" untuk jenis ini.
- Di ERP double-entry modern, dokumen yang tidak balance **ditolak sistem saat posting** — jadi masalah yang tersisa di skala enterprise bukan selisih aritmetika, melainkan 4 jenis kesalahan yang lolos (klasifikasi, omisi, duplikasi). Ini justru memperkuat honest angle, bukan melemahkannya.
- Konteks jurnal umum maksimal 1 kalimat ("setelah transaksi dijurnal dan diposting ke buku besar") — dedup boundary vs `jurnal-umum-c01`.

## Flags (open factual risk — writer WAJIB hindari/hedge)

- ⚠️ **Taksonomi "4 fungsi: persiapan, pencatatan, koreksi, monitoring"** (skeleton H2 #1) berasal dari blog kompetitor lokal (Accurate dkk.), BUKAN kerangka standar akuntansi yang bisa disitasi. Rekomendasi: tetap sebutkan empat fungsi tersebut sebagai fungsi praktis TANPA menyebutnya standar/berdasar teori, atau reframe netral: rekap saldo tiap akun, deteksi ketidakseimbangan, dasar penyusunan laporan keuangan, monitoring posisi akun. Jangan beri sitasi untuk taksonomi ini.
- ⚠️ **Halaman help.sap.com dirender JavaScript** — teks tidak bisa di-fetch langsung; isi klaim diverifikasi via SAP PRESS + Fiori Apps Library + SAP KBA. URL boleh disitasi (halaman live), tapi JANGAN mengutip kalimat verbatim seolah dari halaman itu.
- ⚠️ **Klaim "real-time" F0996**: aman sebatas "saldo dibaca langsung dari Universal Journal (ACDOCA) sehingga trial balance tersedia setiap saat, tanpa rekap manual akhir bulan". Hindari klaim performa spesifik (detik/latensi) — tidak ada angka resmi.
- ⚠️ **Tidak ada URL IAI/SAK stabil terverifikasi** — jangan menulis "sesuai PSAK No. X" atau mengatribusikan definisi ke IAI. Cukup "prinsip double-entry" generik.
- ⚠️ **Jangan mengarang angka pasar/volume pencarian** — Ahrefs n/a; tidak ada statistik adopsi yang diverifikasi untuk topik ini. Semua angka artikel harus dari daftar klaim di atas atau tabel contoh.
- ⚠️ **URL sitasi AccountingTools di brief** (`.../trial-balance.html` untuk definisi) → 404. URL definisi yang benar: `https://www.accountingtools.com/articles/the-trial-balance-example-format`. URL `trial-balance-errors.html` berfungsi normal.
- ⚠️ **Sibling `jurnal-umum-c01` belum live** (cek indeks soltius.co.id 2026-07-06) — jangan tautkan; internal link tetap 2 (hub siklus akuntansi + cousin SAP FICO, keduanya 200/OK).

## Definition snippet draft (40–60 kata — satu-satunya definisi di artikel; body dilarang mengulanginya)

> Ringkasnya: neraca saldo (trial balance) adalah daftar seluruh saldo akhir akun buku besar pada tanggal tertentu, disusun dalam kolom debit dan kredit yang totalnya harus sama. Fungsinya memverifikasi keseimbangan pencatatan double-entry sebelum laporan keuangan disusun — tahap pengecekan dalam siklus akuntansi setelah seluruh transaksi diposting ke buku besar.

*(46 kata setelah "Ringkasnya:"; entity jelas: neraca saldo = trial balance; extractable untuk AI Overview.)*

## Catatan batch (pengganti Notes for image-planner)

Batch conditional 2026-07: **TANPA image placeholder & tanpa stage image-planner.** Konsep visual disampaikan via elemen terstruktur yang sudah disiapkan: tabel neraca saldo (H2 #3), 5 langkah bernomor (H2 #2), list lead-in bold 3 jenis (H2 #1). Alur siklus akuntansi cukup 1 kalimat prosa.
