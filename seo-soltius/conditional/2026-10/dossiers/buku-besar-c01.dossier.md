---
brief_id: "buku-besar-c01"
researcher_run_date: "2026-10-08"
sources_cited: 5
flags: 4
batch: "conditional-2026-10"
target_word_count: 1100
---

# Research Dossier: Apa Itu Buku Besar (General Ledger) dan Perannya dalam Akuntansi

## TL;DR for the writer

- **Kontras inti jurnal vs buku besar terverifikasi** (ini jawaban "general ledger adalah" yang paling extractable): jurnal mencatat transaksi secara **kronologis** (urut waktu); buku besar **menggolongkan ulang** catatan itu **per akun** lalu menghitung saldo. Wikipedia: GL = ledger tempat data akuntansi di-*posting dari jurnal* dan *diagregasi dari subledger*. Urutan siklus: jurnal → posting → buku besar → neraca saldo.
- **3 bentuk buku besar terverifikasi**: **Bentuk T**, **Skontro** (dua kolom), **Staffel** — staffel bercabang **3 kolom** (saldo tunggal) vs **4 kolom** (saldo rangkap: saldo debit & kredit terpisah). Dikonfirmasi materi akademik (LMS Universitas Esa Unggul) + sumber edukasi ID. **Hati-hati**: penamaan kolom saldo berjalan tidak seragam antar-sumber; kolom saldo paling konsisten di staffel, bukan di skontro.
- **SAP Universal Journal / ACDOCA terverifikasi dari sumber SAP RESMI** (SAP Learning): FI + CO + Asset Accounting + Profitability Analysis + Material Ledger direkam dalam **satu tabel**; SAP menyebutnya *"the definitive single source of truth for financial data"*; dan **"no reconciliation between financial accounting and controlling is necessary"**. Ini whitespace enterprise yang tak dimiliki pesaing SERP.
- **Klaim "350+ field" = BENAR tapi di-hedge**: SAP PRESS (pakar SAP) menyebut "its 350 fields or so"; Mastering SAP menyebut "350+ fields available". Sumber lain berbeda (Surety Systems: 500+; queryviz.io: 54). → Tulis "**sekitar 350+ field**" + hedge "jumlah persis bervariasi antar-rilis dan ekstensi kustom". Universal Journal tersedia sejak S/4HANA Finance **1503**.
- **JANGAN tumpuk materi jurnal umum / neraca saldo** (milik sibling `jurnal-umum-c01` & `neraca-saldo-c01`). Konteks tahap tetangga cukup 1 kalimat. **JANGAN mengarang angka klien Soltius.** Target artikel ~1100 kata.

## Core facts (verified)

> **Claim**: Perbedaan hakiki jurnal umum vs buku besar (general ledger).
> **Number/specific**: Jurnal = pencatatan **kronologis** (urut tanggal, saat transaksi pertama terjadi). Buku besar = **penggolongan per akun** + perhitungan saldo. Wikipedia: *"a general ledger is a bookkeeping ledger in which accounting data are posted from journals and aggregated from subledgers"*. Alur: jurnal → posting → buku besar → neraca saldo (1 arah posting, 2 tahap).
> **Source**: Wikipedia "General ledger" + TechTarget "What is a general ledger (GL)" (diakses 2026-10-08).
> **Confidence**: high (konsep mapan, lintas sumber konsisten).

> **Claim**: Definisi fungsional general ledger.
> **Number/specific**: TechTarget: *"a general ledger (GL) is a set of numbered accounts a business uses to keep track of its financial transactions and to prepare financial reports"* — set akun bernomor. Logika double-entry: tiap transaksi dicatat sebagai debit dan kredit yang saling menyeimbangkan.
> **Source**: TechTarget (techtarget.com) + The Motley Fool (fool.com), diakses 2026-10-08.
> **Confidence**: high.

> **Claim**: Tiga bentuk buku besar.
> **Number/specific**: (1) **Bentuk T** — menyerupai huruf T; paling sederhana; debit kiri, kredit kanan; saldo dihitung di akhir; lazim untuk analisis/edukasi. (2) **Skontro** — dua kolom horizontal (debit vs kredit), turunan T yang lebih padat; tiap sisi memuat tanggal/keterangan/ref/nominal. (3) **Staffel** — menurun, ciri utamanya lajur saldo.
> **Source**: Materi LMS Universitas Esa Unggul (lms-paralel.esaunggul.ac.id) + sumber edukasi ID (OCBC, Kitalulus), diakses 2026-10-08.
> **Confidence**: high untuk keberadaan 3 bentuk; medium untuk detail kolom per bentuk (lihat Flags).

> **Claim**: Staffel 3 kolom (saldo tunggal) vs 4 kolom (saldo rangkap).
> **Number/specific**: Staffel **3 kolom** = lajur saldo **tunggal** (header: tanggal, keterangan, ref, debet, kredit, D/K, saldo). Staffel **4 kolom** = lajur saldo **dipecah** menjadi sisi debet dan sisi kredit (saldo rangkap); perbedaannya hanya pada kolom saldo yang dibagi dua. Keduanya memperlihatkan saldo berjalan tiap transaksi.
> **Source**: Materi LMS Universitas Esa Unggul, diakses 2026-10-08.
> **Confidence**: high (materi akademik eksplisit).

> **Claim**: Proses posting dari jurnal ke buku besar (urutan & kolom referensi).
> **Number/specific**: Posting dilakukan **setelah** seluruh transaksi dijurnal. Langkah: salin tanggal → pindahkan nilai ke sisi debit/kredit sesuai posisi di jurnal → catat nomor halaman jurnal di kolom **referensi** (mis. **JU 01** = jurnal umum halaman 1) → cocokkan kode akun → hitung saldo. Posting = pemindahan dari jurnal ke buku besar sesuai akun.
> **Source**: Materi LMS Universitas Esa Unggul + sumber edukasi ID (Jurnal.id/Mekari, Accurate — dipakai sebagai konfirmasi praktik, BUKAN untuk di-link), diakses 2026-10-08.
> **Confidence**: high (praktik baku; posisi "JU 01" = konvensi umum).

> **Claim**: Buku besar pembantu (subsidiary ledger) & akun kontrol (control account).
> **Number/specific**: Subsidiary ledger menyimpan rincian di balik satu akun kontrol di buku besar umum; dipakai saat volume transaksi akan menyesaki GL. Aturan kunci: **saldo akhir akun kontrol HARUS sama dengan total akhir buku besar pembantunya**; jika tidak cocok, kemungkinan ada jurnal ke akun kontrol yang tidak ikut dicatat di buku pembantu. Paling lazim untuk piutang & utang.
> **Source**: AccountingTools "Subsidiary ledger definition" + "Control account definition" (accountingtools.com), diakses 2026-10-08.
> **Confidence**: high (sumber akuntansi reputable).

> **Claim**: Istilah "controlling account" berasal dari fungsi meringkas buku pembantu.
> **Number/specific**: Akun GL yang menjumlahkan akun-akun pembantu disebut "mengendalikan" (control) saldo yang dilaporkan — karena itu dinamai akun kontrol/controlling account.
> **Source**: MyAccountingCourse (myaccountingcourse.com), diakses 2026-10-08.
> **Confidence**: high.

> **Claim**: Bagan akun (chart of accounts) sebagai kerangka buku besar + 5 kategori.
> **Number/specific**: Tiap akun di bagan akun mendapat satu akun buku besar; akun diklasifikasikan ke kategori: **income, expense, assets, liabilities, equity** (pendapatan, beban, aset, liabilitas, ekuitas) — 5 kategori. Tiap akun diberi nomor/kode unik agar mudah dilacak. Bagan akun relatif statis; buku besar sangat dinamis (ter-update terus).
> **Source**: Wikipedia "General ledger" (kategori) + Datarails + Dual Entry (dinamika), diakses 2026-10-08.
> **Confidence**: high (5 kategori = konvensi standar; konsisten PSAK/SAK).

> **Claim**: SAP Universal Journal (table ACDOCA) menyatukan FI + CO + subledger dalam satu tabel.
> **Number/specific**: SAP Learning resmi: data FI dan CO **"recorded in one single table"**; komponen yang melebur = **General Ledger Accounting, Asset Accounting, Controlling, Profitability Analysis, Material Ledger**. SAP menyebutnya **"the definitive single source of truth for financial data"**.
> **Source**: SAP Learning (learning.sap.com, kursus "Outlining Cost Management and Profitability Analysis" → "Discussing the Concept of the Universal Journal"), diakses 2026-10-08. **Sumber SAP resmi — otoritas tertinggi.**
> **Confidence**: high (SAP official, wording verbatim).

> **Claim**: Universal Journal menghilangkan rekonsiliasi antar-komponen.
> **Number/specific**: SAP Learning: karena semua data finansial berbasis line item yang sama, **"no reconciliation between financial accounting and controlling is necessary"**; tabel ini **"eliminates the time-consuming reconciliation activities"** dalam pelaporan.
> **Source**: SAP Learning (learning.sap.com), diakses 2026-10-08.
> **Confidence**: high untuk FI↔CO (langsung dari SAP). Untuk subledger↔GL (mis. Asset Accounting selaras otomatis) lihat Flags — didukung banyak sumber tapi bukan dari halaman SAP Learning ini.

> **Claim**: ACDOCA memuat "sekitar 350+ field".
> **Number/specific**: SAP PRESS (Q&A pakar SAP): *"the Universal Journal has got its 350 fields or so"*. Mastering SAP: *"there are 350+ fields available, not every dimension is applicable for every journal entry"*. Tiap entri hanya memakai field yang relevan. ACDOCA = columnar store.
> **Source**: blog.sap-press.com + masteringsap.com, diakses 2026-10-08.
> **Confidence**: medium-high. **Hedge**: sumber lain berbeda (Surety Systems: 500+; queryviz.io: 54) → tulis "sekitar 350+ field" + "bervariasi antar-rilis/ekstensi". Jangan klaim angka pasti.

> **Claim**: Ketersediaan & posisi Universal Journal dalam S/4HANA.
> **Number/specific**: Universal Journal tersedia sejak **S/4HANA Finance 1503**. Field kustom dapat di-append ke ACDOCA. Dimensi per posting mencakup company code, ledger, fiscal year, GL account, cost center, profit center, segment, customer, supplier, asset, material, mata uang.
> **Source**: blog.sap-press.com + hyperbots.com glossary (dimensi), diakses 2026-10-08. Catatan: untuk angka field/field list per sistem, SAP merekomendasikan cek transaksi SE11 pada rilis terkait.
> **Confidence**: high untuk "sejak 1503"; medium untuk daftar dimensi lengkap (vendor glossary) → hedge detail per-rilis.

> **Claim**: Halaman internal Soltius (hub & cousin) live & relevan.
> **Number/specific**: Hub siklus akuntansi menyebut *"mencatat transaksi dan juga memposting inputannya di buku besar"* lalu neraca saldo disusun. Cousin SAP FICO: *"memiliki sub modul berupa buku besar yang mana bisa mencatat semua data transaksi perusahaan di dalam bagan akun"* + menjelaskan CO (cost center, profit center, dll).
> **Source**: WebFetch soltius.co.id (siklus akuntansi + SAP FICO), 2026-10-08. Konten ter-render penuh; penulis tetap cek 200/OK saat menulis.
> **Confidence**: high untuk relevansi konten (status HTTP tidak dapat dipastikan dari isi; kedua halaman mengembalikan konten lengkap).

**Total verified claims: 13** (melampaui ambang 12; prioritaskan 8–12 terkuat untuk ~1100 kata).

## Solution focus + Soltius anchor (keyword tidak ada di product_matrix.md → framing universal)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| **SAP S/4HANA Finance + Universal Journal (table ACDOCA)** | Nama lengkap di sebutan pertama. Buku besar (FI-GL) + buku besar pembantu + Controlling (CO) melebur ke **satu tabel** = single source of truth; **rekonsiliasi FI↔CO hilang**; sekitar **350+ field**; posting real-time. Hedge angka/nama per rilis. | H2 #4 ("Bagaimana Buku Besar Bekerja di ERP Modern?") — tempat CTA menyalur | **Migration + Implementation** (pindah dari pembukuan manual ke SAP S/4HANA Finance); **SAP Platinum Partner via United VARs**, bagian Metrodata Group **sejak 1998** |

Reminder framing: Soltius **mengimplementasikan / memigrasikan / mendampingi** SAP S/4HANA Finance (implementasi → dukungan pasca go-live) — **bukan membuat** perangkat lunaknya. **Maks 2 self-mention** (1 positioning line di `## Kesimpulan` + 1 soft website CTA baris terakhir). TANPA aside Soltius di tengah body. Penyebutan SAP S/4HANA Finance/Universal Journal di H2 #4 = teaching, bukan self-mention.

## Internal links (TEPAT 2 — 1 hub + 1 cousin; keduanya dikonfirmasi live 2026-10-08)

1. **Hub (paling relevan)**: `https://www.soltius.co.id/id/blog/apa-itu-siklus-akuntansi-dan-manfaatnya` — anchor natural: **`siklus akuntansi`** — *why*: halaman ini eksplisit menyebut "posting ke buku besar" sebagai tahap siklus; parent konseptual cluster akuntansi; hub yang sama dengan sibling `jurnal-umum-c01` & `neraca-saldo-c01`. *Placement*: inline di lead atau H2 #1.
2. **Cousin (funnel ke SAP — CTA anchor)**: `https://www.soltius.co.id/id/blog/sistem-sap-fico-dan-modulnya-yang-banyak-digunakan-perusahaan-besar` — anchor natural: **`modul keuangan SAP (FICO)`** — *why*: halaman ini menjelaskan FI general ledger (mencatat transaksi dalam chart of accounts) + CO; jembatan alami dari buku besar manual ke SAP S/4HANA Finance. *Placement*: inline di H2 #4.

> Hanya 2 link. JANGAN tambah link ketiga. TANPA "BACA JUGA" — inline kontekstual. (Jika sibling `jurnal-umum-c01`/`neraca-saldo-c01` sudah live sebagai URL publik, editor BOLEH mengganti SALAH SATU anchor tahap jadi tautan sibling, tetapi total tetap 2 & hub siklus akuntansi diprioritaskan.)

## Authoritative external sources (≥2 strong, untuk tautan keluar writer)

1. **SAP Learning (resmi)** — `https://learning.sap.com/courses/outlining-cost-management-and-profitability-analysis/discussing-the-concept-of-the-universal-journal_f62cf151-5562-44f5-8ff6-df16fb232e94` — *what it backs*: Universal Journal/ACDOCA menyatukan GL + CO + Asset Accounting + PA + Material Ledger dalam satu tabel; single source of truth; rekonsiliasi FI↔CO hilang. **Prioritas utama untuk klaim H2 #4.**
2. **AccountingTools** — `https://accountingtools.com/articles/what-is-a-subsidiary-ledger.html` (+ `.../control-account`) — *what it backs*: definisi buku besar pembantu, akun kontrol, dan aturan "saldo akun kontrol = total buku pembantu". Sumber akuntansi netral & stabil untuk FAQ buku besar pembantu.
3. **(Pendukung, pilih 1 bila butuh sumber bentuk/akademik)** — Materi LMS Universitas Esa Unggul (`lms-paralel.esaunggul.ac.id`) untuk bentuk buku besar 3/4 kolom, ATAU TechTarget (`techtarget.com`) / Wikipedia untuk definisi general ledger & chart of accounts. **Catatan**: brief awalnya menyarankan modul Kemdikbud (`lmsspada.kemdikbud.go.id`) — URL itu TIDAK muncul di WebSearch run ini; Esa Unggul = pengganti akademik yang terkonfirmasi. Editor boleh pakai Kemdikbud bila URL-nya stabil.

> Prioritas 1–2 sitasi inline: **SAP official** (H2 #4) + **AccountingTools/akademik** (bentuk/buku pembantu). Hindari outbound ke kompetitor vendor software akuntansi (Mekari/Accurate/Kledo/Majoo) & integrator SAP lain.

## FAQ Q&As (5 drafted, Bahasa Indonesia; 30–60 kata, tiap jawaban memuat 1 fakta/angka)

> Ambil dari PAA. JANGAN mengulang definisi snippet kata per kata; beri sudut/fakta baru. Parseable untuk FAQPage schema.

### Apa bedanya buku besar dan buku besar pembantu?
Buku besar umum memuat akun ringkasan seperti Piutang Usaha, sedangkan buku besar pembantu (subsidiary ledger) merinci akun itu per entitas, misalnya piutang tiap pelanggan. Aturannya tegas: total seluruh buku besar pembantu harus sama dengan saldo akun kontrolnya. Paling lazim dipakai untuk piutang, utang, dan persediaan.

### Apa itu posting dalam akuntansi?
Posting adalah proses memindahkan nilai debit dan kredit dari jurnal ke akun buku besar yang sesuai, lalu menghitung saldonya. Posting dilakukan setelah penjurnalan dan sebelum penyusunan neraca saldo. Di kolom referensi dicatat asal jurnalnya, misalnya JU 01 untuk jurnal umum halaman 1.

### Apa hubungan buku besar dengan neraca saldo?
Saldo akhir setiap akun di buku besar dikumpulkan menjadi neraca saldo (trial balance) untuk mengecek apakah total debit sama dengan total kredit sebelum laporan keuangan disusun. Buku besar adalah sumber datanya; neraca saldo adalah ringkasan verifikasinya. Keduanya tahap berurutan dalam siklus akuntansi.

### Apa itu chart of accounts (bagan akun)?
Bagan akun adalah daftar terstruktur seluruh akun berikut kodenya yang dipakai perusahaan, umumnya dikelompokkan jadi 5 kategori: aset, liabilitas, ekuitas, pendapatan, dan beban. Bagan akun menjadi kerangka buku besar — tiap akun di dalamnya memiliki satu "halaman" buku besar tersendiri.

### Apakah buku besar masih relevan di era software akuntansi?
Ya; konsepnya tidak hilang, hanya menjadi otomatis. Di ERP seperti SAP S/4HANA Finance, seluruh entri masuk ke satu tabel jurnal universal (Universal Journal), sehingga buku besar dan buku besar pembantu tidak lagi dikelola sebagai buku-buku terpisah yang harus direkonsiliasi manual tiap akhir periode.

## Data tables for the writer

### Tabel 1 — Tiga bentuk buku besar (elemen terstruktur utama, untuk H2 #2)
| Bentuk | Susunan | Kolom saldo | Cocok untuk |
|---|---|---|---|
| **T** | Menyerupai huruf T: debit di kiri, kredit di kanan | Saldo dihitung di akhir (tidak ada lajur saldo berjalan) | Analisis cepat, edukasi, menelusuri cara kerja satu akun |
| **Skontro** | Dua kolom horizontal (sisi debit vs sisi kredit); tiap sisi memuat tanggal, keterangan, ref, nominal | Umumnya tanpa lajur saldo berjalan baku (lihat catatan akurasi) | Pencatatan rutin yang lebih padat daripada bentuk T |
| **Staffel** | Menurun (vertikal); tiap baris transaksi | **3 kolom** = saldo tunggal; **4 kolom** = saldo rangkap (debit & kredit terpisah) → saldo berjalan tampak tiap transaksi | Perusahaan yang perlu memantau saldo berjalan tiap transaksi |

> **Catatan akurasi untuk writer**: sumber berbeda pendapat apakah skontro punya lajur saldo berjalan. Lajur saldo berjalan paling konsisten di **staffel**. Tulis hati-hati — jangan over-claim bahwa skontro pasti memiliki kolom saldo.

### Tabel 2 — Buku besar manual vs buku besar di ERP modern (untuk H2 #4; funnel ke CTA)
| Aspek | Buku besar manual / spreadsheet | SAP S/4HANA Finance (Universal Journal) |
|---|---|---|
| Waktu posting | Setelah penjurnalan, batch di akhir periode | Real-time saat transaksi di-input |
| Struktur data | Banyak buku terpisah (GL + buku pembantu) | **Satu tabel** (ACDOCA, sekitar 350+ field) menyatukan FI-GL + subledger + CO |
| Rekonsiliasi antar-buku | Rutin tiap akhir periode | FI↔CO **tidak diperlukan** (SAP: "no reconciliation… is necessary") |
| Risiko utama | Saldo tak cocok, salah akun, posting tersebar | Konsistensi terjaga; fokus bergeser ke tata kelola & analisis |

> Langkah posting (untuk H2 #3, list bernomor — 6 langkah): (1) siapkan akun buku besar sesuai **bagan akun** → (2) salin **tanggal** dari jurnal → (3) isi **keterangan** (nama akun) → (4) isi **referensi** (mis. JU 01) + beri nomor akun balik di kolom ref jurnal (cross-reference) → (5) salin nilai ke sisi **debit/kredit** sesuai posisinya di jurnal → (6) hitung **saldo** (selisih debit − kredit). Hedging jujur (1–2 kalimat, bukan H2 terpisah): posting manual memadai untuk volume kecil; saat transaksi membengkak/multi-entitas, posting manual lambat & rawan salah akun — titik perusahaan beralih ke sistem akuntansi/ERP.

## Definition snippet draft (40–60 kata; SEKALI, jangan diulang di body/H2/FAQ)

> Ringkasnya: buku besar (general ledger) adalah kumpulan seluruh akun perusahaan tempat transaksi yang sudah dicatat di jurnal digolongkan kembali per akun lalu dihitung saldonya. Buku besar merupakan tahap siklus akuntansi tepat setelah penjurnalan dan menjadi sumber data utama penyusunan neraca saldo serta laporan keuangan.

(44 kata; tanpa em-dash agar jatah em-dash body tetap utuh.)

## Edge cases & nuance

- **Kontras kronologis vs per-akun adalah inti artikel** (differentiator GEO): pesaing menjelaskan jurnal & buku besar terpisah; sedikit yang menegaskan bahwa buku besar **menggolongkan ulang** isi jurnal per akun. Taruh kontras ini sebagai jawaban langsung H2 #1 agar extractable untuk AI Overview.
- **Skontro vs staffel soal kolom saldo** (lihat Tabel 1 + catatan): jangan samakan; lajur saldo berjalan paling konsisten di staffel 3/4 kolom.
- **"Rekonsiliasi hilang" bukan "pekerjaan close hilang"**: SAP close specialist mencatat di konteks financial close, "rekonsiliasi" sering berarti *substantiation* (membuktikan saldo didukung). Satu tabel menghapus tie-out mekanis antar-ledger, tetapi tim keuangan tetap perlu men-substansiasi saldo & migrasi ECC→S/4HANA tetap butuh verifikasi data. Framing hati-hati: "sebagian besar rekonsiliasi antar-buku hilang", bukan "semua pekerjaan hilang".
- **Praktik lapangan (tanpa menyebut Soltius di body)**: "saldo buku besar yang tidak cocok dengan buku besar pembantu biasanya gejala posting manual tersebar di banyak spreadsheet, bukan sekadar salah ketik" — framing pengalaman, jujur, tanpa angka klien.
- **Penamaan/field count/nama tabel SAP berubah antar-rilis** → rujuk SAP Help Portal/SAP Learning; jangan klaim versi/field spesifik tanpa sumber.

## Flags (open factual risk)

- ⚠️ **Jumlah field ACDOCA**: SAP PRESS & Mastering SAP = ~350/350+; Surety Systems = 500+; queryviz.io = 54 (kemungkinan subset/metode beda). → **Rekomendasi**: tulis "**sekitar 350+ field**" + hedge "bervariasi antar-rilis dan ekstensi kustom"; atau turunkan jadi "**satu tabel jurnal universal**" tanpa angka bila ragu. JANGAN klaim angka pasti.
- ⚠️ **Subledger↔GL auto-reconciliation (mis. Asset Accounting selaras otomatis)**: didukung banyak sumber (community/vendor) & sesuai desain New Asset Accounting, TETAPI halaman SAP Learning yang diakses hanya menyatakan **FI↔CO** "no reconciliation necessary" + melebur Asset Accounting ke ACDOCA. → **Rekomendasi**: klaim FI↔CO = aman (SAP langsung); untuk subledger/Asset Accounting, tulis hati-hati ("buku besar dan buku besar pembantu berada di satu tabel sehingga rekonsiliasi antar-buku sebagian besar hilang") — jangan klaim "Asset Accounting pasti direkonsiliasi otomatis" tanpa rujuk SAP Help rilis terkait.
- ⚠️ **Kolom saldo berjalan pada skontro**: sumber tidak seragam. → **Rekomendasi**: nyatakan lajur saldo berjalan paling konsisten di staffel (3/4 kolom); untuk skontro gunakan frasa hati-hati, jangan pastikan ada kolom saldo.
- ⚠️ **Sumber akademik ID**: modul Kemdikbud (`lmsspada.kemdikbud.go.id`) yang disarankan brief TIDAK muncul di WebSearch run ini; pengganti terkonfirmasi = materi LMS Universitas Esa Unggul. → **Rekomendasi**: writer/editor boleh pakai Esa Unggul atau TechTarget/Wikipedia untuk definisi; bila ingin Kemdikbud, verifikasi URL 200/OK lebih dulu.

## Catatan untuk orchestrator / writer

- Ini **tahap-1** (dossier). Tahap berikut (writer → editor → validator → .docx) belum dijalankan untuk artikel ini.
- Struktur override 2026-10 diterapkan: target ~1100 kata; **0 image placeholder**; definisi SEKALI di snippet "Ringkasnya:"; **4 H2** (H2 #1 question perbedaan jurnal vs GL; H2 #2 tabel 3 bentuk; H2 #3 langkah posting 6 tahap; H2 #4 jembatan SAP S/4HANA/Universal Journal); jawaban langsung 40–60 kata setelah tiap H2 (poin baru, bukan ulang snippet); **≥5 angka spesifik inline** (3 bentuk; staffel 3 vs 4 kolom; 6 langkah; 5 kategori bagan akun; 1 tabel/±350+ field; ref JU 01; sejak 1503); FAQ **5**; internal link **TEPAT 2**; sitasi **SAP official + AccountingTools/akademik**; Soltius **maks 2** mention (Kesimpulan + CTA baris terakhir); anchor CTA = **SAP S/4HANA Finance → modul keuangan SAP FICO**.
- **JANGAN** tumpuk materi jurnal umum (cara membuat jurnal/jurnal umum vs khusus) atau neraca saldo (jenis/kesalahan/heuristik÷9) — milik sibling. Konteks tahap tetangga cukup 1 kalimat.
- Meta block saran brief (editor finalisasi): meta_title "Buku Besar (General Ledger): Pengertian & Fungsi" (49 char); slug "buku-besar-general-ledger"; publish_month 2026-10.
