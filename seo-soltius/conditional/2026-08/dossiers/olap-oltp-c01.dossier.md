---
brief_id: "olap-oltp-c01"
researcher_run_date: "2026-07-17"
sources_cited: 5
flags: 6
batch: "conditional-2026-08 (style_addendum.md — 800–1000 kata, target 900; tanpa image placeholder; FAQ 2–3; internal link TEPAT 2; maks 2 mention Soltius)"
verified_claims: 12
---

# Research Dossier: OLAP vs OLTP: Perbedaan dan Fungsinya dalam Sistem Database

## TL;DR for the writer

- **Angka AWS terkonfirmasi ulang, TAPI ada jebakan.** Halaman AWS Bahasa Indonesia memuat **dua pernyataan waktu OLAP yang saling bertentangan di halaman yang sama**: tabel ringkasan bilang *"detik atau menit"*, bagian "Performa" bilang *"beberapa menit hingga beberapa jam"*. Pakai **"detik hingga menit"** (baris tabel ringkasan AWS — itulah yang dikutip sebagai perbandingan) dan **wajib** framing "kisaran tipikal", bukan jaminan. Lihat Flag #1 — ini risiko fact-check paling nyata di artikel ini.
- **Plattner SIGMOD 2009 solid, kelas bukti tertinggi.** Metadata terkonfirmasi ganda (dblp + Semantic Scholar API). **Framing wajib: "makalah keynote"** — terkorroborasi independen run ini (paper ditulis mendampingi *keynote address* SIGMOD). **Bukan** "penelitian yang membuktikan".
- **HTAP AMAN disebut — tanpa Gartner, tanpa tahun.** Temuan terbaik run ini: **Microsoft Learn Bahasa Indonesia** mendefinisikan HTAP secara eksplisit. Jadi writer bisa menyebut + meng-expand akronim HTAP dengan sumber otoritatif, **tanpa** atribusi Gartner (Gartner 403 total). Brief boleh dilonggarkan di titik ini.
- **HAPUS kalimat Codd 1993** dari H2 #1 — gagal diverifikasi dari sumber layak mana pun (dblp nihil, sumber primer Computerworld ditarik). Artikel tetap utuh tanpanya; brief sudah mengantisipasi ini.
- **Bonus: honest hedging H2 #2 sekarang BERSUMBER.** Microsoft Learn menyatakan data OLAP di-refresh pada interval jauh lebih lambat dan cocok untuk keputusan strategis, bukan respons langsung. Hedge itu bukan lagi opini penulis.
- **Tidak ada sitasi SAP official.** `sap.com` **403**, `help.sap.com` hanya render judul (portal JS). Karakteristik HANA cukup di level konsep via halaman Soltius sendiri + Microsoft Learn. **Jangan paksakan sitasi inline ke sap.com.**

---

## Core facts (verified)

> **Claim**: Waktu respons tipikal beban kerja OLTP diukur dalam milidetik
> **Number/specific**: AWS (halaman ID): tabel ringkasan — *"OLTP memiliki waktu respons yang lebih pendek, biasanya dalam milidetik"*; bagian Performa — *"Anda mengukur waktu pemrosesan OLTP dalam milidetik atau kurang"*. **Dua bagian konsisten.**
> **Source**: AWS, "Apa Perbedaan Antara OLAP dan OLTP?", https://aws.amazon.com/id/compare/the-difference-between-olap-and-oltp/ (diakses 2026-07-17)
> **Confidence**: high

> **Claim**: Waktu respons tipikal kueri OLAP jauh lebih panjang daripada OLTP
> **Number/specific**: AWS tabel ringkasan: *"OLAP memiliki waktu respons yang lebih lama, biasanya dalam detik atau menit"*. ⚠️ **Bagian "Performa" di halaman YANG SAMA menyatakan berbeda**: *"Waktu pemrosesan OLAP dapat bervariasi mulai dari beberapa menit hingga beberapa jam"*.
> **Source**: sama seperti di atas (diakses 2026-07-17)
> **Confidence**: **medium** — arah klaim (OLAP ≫ OLTP, beda beberapa orde besaran) **high**; **angka persisnya inkonsisten di dalam sumbernya sendiri**. Lihat Flag #1 untuk rekomendasi kalimat.

> **Claim**: Volume data tipikal OLTP diukur dalam gigabyte
> **Number/specific**: AWS: *"Anda dapat mengukur persyaratan penyimpanan OLTP dalam gigabita (GB)"*
> **Source**: AWS (ID), URL di atas (diakses 2026-07-17)
> **Confidence**: high

> **Claim**: Volume data tipikal OLAP berada di kisaran terabyte hingga petabyte
> **Number/specific**: AWS: *"Persyaratan penyimpanan diukur mulai dari terabita (TB) hingga petabita (PB)"*. **Terkorroborasi independen** oleh Microsoft Learn (ID), tabel ciri khas: skala *"Besar, ratusan gigabyte (GB) ke beberapa petabyte (PB)"*.
> **Source**: AWS (ID) + Microsoft Learn (ID), URL di bawah (diakses 2026-07-17)
> **Confidence**: high

> **Claim**: Sebagian besar perusahaan menjalankan OLTP dan OLAP berdampingan, bukan memilih salah satu
> **Number/specific**: AWS: *"Sebagian besar perusahaan menggunakan sistem OLTP dan OLAP secara bersamaan untuk memenuhi persyaratan kecerdasan bisnis mereka"*; dan *"Basis data OLTP dapat menjadi salah satu di antara beberapa sumber data untuk sistem OLAP"*
> **Source**: AWS (ID), URL di atas (diakses 2026-07-17)
> **Confidence**: high — **berguna menopang nada wajib brief**: artikel tidak menobatkan pemenang.

> **Claim**: Argumen penyatuan OLTP+OLAP di atas database kolom in-memory diajukan Hasso Plattner pada 2009 di ACM SIGMOD
> **Number/specific**: Judul persis: *"A common database approach for OLTP and OLAP using an in-memory column database"*; penulis **Hasso Plattner**; ACM SIGMOD 2009, Providence, Rhode Island, 29 Juni–2 Juli 2009; **hlm. 1–2**; DOI `10.1145/1559845.1559846`. **Terverifikasi ganda run ini**: dblp (WebFetch 200) + Semantic Scholar API (`year: 2009`, `venue: "SIGMOD Conference"`, `authors: [H. Plattner]`, DOI cocok, `paperId 74e10ff37b568e76c5166ce8b0eddf2abfdcbac9`).
> **Source**: dblp https://dblp.org/db/conf/sigmod/sigmod2009.html + Semantic Scholar API (diakses 2026-07-17)
> **Confidence**: high

> **Claim**: Makalah itu adalah makalah **keynote**, bukan studi empiris
> **Number/specific**: Panjangnya **2 halaman** (hlm. 1–2 per dblp) — konsisten dengan format keynote abstract, bukan full research paper. Terkorroborasi independen run ini: pencarian mengonfirmasi makalah ditulis *"in association with a SIGMOD keynote address"*; liputan sezaman (InformationWeek) memberitakannya sebagai seruan/argumen Plattner, bukan hasil eksperimen.
> **Source**: dblp (jumlah halaman) + InformationWeek, "Hasso Plattner Calls for In-Memory OLTP Column Stores" (diakses 2026-07-17)
> **Confidence**: high — **framing "makalah keynote" / "argumen yang diajukan" WAJIB.** Lihat Flag #2.

> **Claim**: HTAP (*Hybrid Transactional/Analytical Processing*) adalah nama kategori untuk menjalankan OLTP dan OLAP di satu platform
> **Number/specific**: Microsoft Learn (ID): *"Anda dapat memanfaatkan pemrosesan transaksional dan analitik hibrid (HTAP) melalui indeks penyimpan kolom non-kluster yang dapat diperbarui. Gunakan HTAP untuk melakukan pemrosesan OLTP dan OLAP pada platform yang sama. Pendekatan ini menghilangkan kebutuhan akan beberapa salinan data Anda dan sistem OLTP dan OLAP terpisah."*
> **Source**: Microsoft Learn, "Pemrosesan Analitik Online (OLAP)", https://learn.microsoft.com/id-id/azure/architecture/data-guide/relational-data/online-analytical-processing (diakses 2026-07-17)
> **Confidence**: high — **ini melonggarkan batasan brief**: HTAP kini punya sumber otoritatif yang dapat diakses. **Tetap TANPA tahun & TANPA Gartner** (lihat Flag #3).

> **Claim**: Penyimpanan berbasis kolom (*column store*) adalah tata letak yang cocok untuk beban kerja OLAP
> **Number/specific**: Microsoft Learn (ID): indeks penyimpan kolom berkluster *"ideal untuk beban kerja OLAP"*, tersedia di SQL Server 2014+ dan SQL Database. Terkorroborasi oleh halaman Soltius (cousin) tentang HANA: *"Data is stored in a column format, facilitating compression and accelerating queries."*
> **Source**: Microsoft Learn (ID), URL di atas + https://www.soltius.co.id/blog/read/understanding-the-hana-in-memory-database-and-the-universal-journal (diakses 2026-07-17)
> **Confidence**: high — **ini menopang inti H2 #2** (tata letak penyimpanan yang berlawanan) dari sumber vendor, bukan asersi penulis.

> **Claim**: OLTP dioptimalkan untuk penulisan/entri rekaman individual; OLAP dioptimalkan untuk baca-berat & tulis-rendah
> **Number/specific**: Microsoft Learn (ID): database OLTP *"dioptimalkan untuk entri rekaman individual"* dan *"tidak dirancang untuk analisis"*; database OLAP *"dioptimalkan untuk tugas baca berat dan tulis rendah"*; tabel ciri khas OLAP: Beban Kerja = *"Bacaan berat, baca-saja"*.
> **Source**: Microsoft Learn (ID), URL di atas (diakses 2026-07-17)
> **Confidence**: high

> **Claim**: Menjalankan kueri analitik kompleks berisiko mengganggu sistem transaksional — itulah alasan historis pemisahan
> **Number/specific**: Microsoft Learn (ID) membingkai OLAP sebagai cara *"melakukan perhitungan kompleks dan analisis tren"* yang *"memungkinkan kueri yang rumit tanpa mengganggu sistem transaksional"*, dan menyarankan OLAP ketika Anda perlu menjalankan kueri analitik kompleks *"tanpa memengaruhi sistem OLTP Anda secara negatif"*. Di Azure, data OLTP **disalin** ke sistem OLAP.
> **Source**: Microsoft Learn (ID), URL di atas (diakses 2026-07-17)
> **Confidence**: high (sebagai implikasi eksplisit sumber) — **menopang premis rebutan sumber daya di H2 #2 tanpa perlu angka karangan.**

> **Claim**: **[HONEST HEDGING H2 #2 — kini bersumber]** Pemisahan OLAP dari OLTP membuat data analitik tertinggal dari kenyataan
> **Number/specific**: Microsoft Learn (ID), bagian "Tantangan": *"Penyimpanan data OLAP biasanya di-refresh pada interval yang jauh lebih lambat, tergantung pada kebutuhan bisnis. Sistem OLAP sesuai dengan keputusan bisnis strategis, bukan respons langsung terhadap perubahan."*
> **Source**: Microsoft Learn (ID), URL di atas (diakses 2026-07-17)
> **Confidence**: high — **pakai ini**: hedge brief ("data analitik selalu tertinggal beberapa jam") jadi klaim bersumber. **Tetapi jangan tulis "beberapa jam"** — sumber tidak menyebut angka; tulis "tertinggal dari kenyataan" / "di-refresh pada interval yang jauh lebih lambat".

> **Claim**: SAP HANA menyimpan data di memori dalam format kolom dan menjalankan proses analitik & transaksional secara bersamaan
> **Number/specific**: Halaman Soltius sendiri: *"Data is stored in a column format, facilitating compression and accelerating queries"*; *"HANA uses RAM to store data"*; *"Analytical and transactional processes can be performed simultaneously without time lags."*
> **Source**: https://www.soltius.co.id/blog/read/understanding-the-hana-in-memory-database-and-the-universal-journal (diakses 2026-07-17, judul aktual: *"SAP S/4HANA Architecture: Understanding the HANA In-Memory Database and the Universal Journal"*)
> **Confidence**: **medium-high** — cukup untuk **klaim level konsep**. Bukan sumber SAP official (sap.com 403; help.sap.com tidak ter-render). Konsisten dengan `sap-s4hana-c01` (2026-07, lolos QC). **Jangan** kutip frasa *"without time lags"* sebagai janji performa — lihat Flag #4.

---

## Solution focus + Soltius anchor (from product_matrix.md)

> Keyword `olap dan oltp` tidak ada di `product_matrix.md`; mapping diturunkan dari tracker (CTA anchor **SAP HANA**) + baris terdekat **Data Warehouse Solutions** (menyebut **SAP HANA Cloud** + layanan **Data and AI Consulting**). Aturan universal berlaku penuh.

| What to teach | Facts to state accurately | Where in article | Soltius anchor |
|---|---|---|---|
| OLTP / OLAP sebagai **tipe beban kerja** | Angka AWS (milidetik · detik–menit · GB · TB–PB) sebagai **kisaran tipikal** | Snippet + H2 #1 (tabel) | — (tanpa Soltius di body) |
| *Row store* vs *column store* (level konsep) | Column store ideal untuk OLAP (Microsoft Learn) | H2 #2 | — |
| **HTAP** (*Hybrid Transactional/Analytical Processing*) | Kategori untuk OLTP+OLAP di satu platform (Microsoft Learn) — **tanpa tahun, tanpa Gartner** | H2 #3 | — |
| **SAP HANA** (satu-satunya produk SAP yang dibahas) | Database *in-memory* berorientasi kolom; perwujudan komersial argumen Plattner 2009 | H2 #3 + FAQ Q2 + CTA | Cousin link ke halaman HANA Soltius |

**Positioning line Kesimpulan (self-mention #1)** — pilih **SATU** kredensial, jangan menumpuk:
- Utama (topik teknis SAP): **"Sebagai SAP Platinum Partner melalui United VARs, Soltius mengimplementasikan dan mendampingi perusahaan yang menjalankan SAP di atas SAP HANA — dari penilaian beban kerja hingga dukungan pasca go-live."**
- Alternatif (nada data/analitik): **"Melalui layanan Data and AI Consulting, Soltius mendampingi perusahaan..."**

**Soft CTA (self-mention #2, baris terakhir)** — ajakan halus ke soltius.co.id; anchor funnel **SAP HANA**.

⚠️ **Framing**: Soltius **mengimplementasikan / memigrasikan / mendampingi** SAP di atas HANA — **TIDAK membuat, tidak memiliki** SAP HANA. Maks **2** mention total. Tanpa aside Soltius di tengah body.

---

## Authoritative external sources (pilih 1–2 untuk sitasi inline)

1. **AWS — "Apa Perbedaan Antara OLAP dan OLTP?"** (halaman **Bahasa Indonesia**) — https://aws.amazon.com/id/compare/the-difference-between-olap-and-oltp/ — ✅ 200 (2026-07-17) — *backs*: waktu respons (milidetik vs detik–menit), volume (GB vs TB–PB), pernyataan bahwa mayoritas perusahaan memakai keduanya bersamaan. **→ Sitasi utama H2 #1 (tabel).** ⚠️ Lihat Flag #1 sebelum mengutip angka OLAP.
2. **Plattner, H. (2009), "A common database approach for OLTP and OLAP using an in-memory column database"**, ACM SIGMOD 2009, Providence, Rhode Island, hlm. 1–2 — **DOI: https://doi.org/10.1145/1559845.1559846** — *peer-reviewed*; kelas bukti tertinggi di SERP topik ini, **tidak dimiliki satu pun pesaing ID**. **→ Sitasi utama H2 #3 + FAQ Q2.** ⚠️ Sebut **"makalah keynote"**.
3. *(Cadangan/pendukung)* **Microsoft Learn — "Pemrosesan Analitik Online (OLAP)"** (Bahasa Indonesia) — https://learn.microsoft.com/id-id/azure/architecture/data-guide/relational-data/online-analytical-processing — ✅ 200 (2026-07-17) — *backs*: definisi HTAP, column store ideal untuk OLAP, OLAP di-refresh lebih lambat (hedge H2 #2). **Pakai bila writer butuh sumber kedua untuk HTAP atau hedge.** ⚠️ Lihat Flag #5 (terjemahan mesin — parafrase, jangan kutip verbatim).

### 🔗 URL Plattner mana yang dipakai? (prioritas verifikasi #1 brief — TERJAWAB)

| Kandidat | Hasil run ini | Verdict |
|---|---|---|
| `https://doi.org/10.1145/1559845.1559846` | **302 → dl.acm.org** | ✅ **PAKAI INI** — canonical & stabil |
| `https://dl.acm.org/doi/10.1145/1559845.1559846` | **403** (bot-block) | ❌ jangan ditulis langsung |
| Semantic Scholar landing | `https://www.semanticscholar.org/paper/74e10ff37b568e76c5166ce8b0eddf2abfdcbac9` (dari API) | ⚠️ cadangan; `openAccessPdf: CLOSED` |

**Rekomendasi**: tautkan **DOI** (`https://doi.org/10.1145/1559845.1559846`). 403 di dl.acm.org adalah **pemblokiran bot, bukan tautan mati** — pembaca manusia di browser sampai ke halaman ACM. ⚠️ **Catatan kejujuran**: `openAccessPdf: CLOSED` — pembaca kemungkinan hanya melihat **abstrak** (ACM berbayar). Jangan menulis "baca selengkapnya di sini" seolah teks penuh gratis; cukup sitasi bibliografis + DOI.

---

## Internal links — verifikasi run ini (TEPAT 2)

| Peran | URL | Status | Anchor | Penempatan |
|---|---|---|---|---|
| **Hub** | `https://www.soltius.co.id/id/blog/data-warehouse-solutions` | ✅ resolve (judul aktual: *"7 Data Warehouse Terbaik 2026 & Definisi Lengkap"*) | "data warehouse" | **H2 #2** |
| **Cousin** | `https://www.soltius.co.id/blog/read/understanding-the-hana-in-memory-database-and-the-universal-journal` | ✅ resolve (judul: *"SAP S/4HANA Architecture: Understanding the HANA In-Memory Database and the Universal Journal"*) | "arsitektur in-memory SAP HANA" | **H2 #3** |

Hub terkonfirmasi ulang memposisikan dirinya sebagai sisi OLAP: *"Di sinilah Data Warehouse Solutions (OLAP) mengambil peran krusial."* — artikel ini **menyelesaikan kalimat yang hub mulai**. Cousin terkonfirmasi memuat *column format* + *simultaneous analytical/transactional*.

---

## Definition snippet draft (47 kata — target 40–60 ✓, tanpa em-dash)

> **Ringkasnya:** OLAP dan OLTP adalah dua tipe beban kerja database, bukan dua produk. OLTP (*Online Transaction Processing*) menangani transaksi harian seperti mencatat pesanan dan memperbarui stok dalam hitungan milidetik. OLAP (*Online Analytical Processing*) menjawab pertanyaan analitis lintas periode atas jutaan baris, biasanya dalam hitungan detik hingga menit.

*(Frasa natural primary keyword "OLAP dan OLTP" ada di kalimat pertama ✓. Kedua akronim di-expand sekali ✓. **INI satu-satunya definisi** — body/H2 dilarang menyatakannya ulang dengan kata lain.)*

---

## Data table for the writer (H2 #1 — elemen terstruktur utama, 6 baris)

**"Perbedaan OLAP dan OLTP dalam 6 Dimensi"** *(supporting keyword di H2)*

| Dimensi | OLTP | OLAP |
|---|---|---|
| Tujuan | Memproses transaksi bisnis saat itu juga | Menganalisis data agregat untuk keputusan |
| Bentuk akses | Sedikit baris, banyak kolom | Sedikit kolom, jutaan baris |
| Operasi dominan | Tulis & perbarui, banyak dan kecil | Baca & agregasi, sedikit dan kompleks |
| Waktu respons | Milidetik | Detik hingga menit |
| Volume data tipikal | Gigabyte (GB) | Terabyte (TB) hingga petabyte (PB) |
| Pengguna | Staf lini depan, aplikasi pelanggan | Analis, manajemen, tim keuangan |

**Status sumber per baris** (untuk editor):
- **Waktu respons** & **Volume data tipikal** → **AWS (ID)**, terverifikasi. ⚠️ Baris "Waktu respons" wajib dibingkai kisaran tipikal (Flag #1).
- **Operasi dominan** & **Tujuan** → Microsoft Learn (ID): OLTP *"dioptimalkan untuk entri rekaman individual"*; OLAP *"baca berat dan tulis rendah"*. Terverifikasi.
- **Bentuk akses** → ⚠️ **framing pedagogis strategist, bukan kutipan sumber** (lihat Flag #6). Aman dinyatakan sebagai penjelasan mekanis; **jangan atribusikan ke AWS/Microsoft**.
- **Pengguna** → pengetahuan domain standar, tak kontroversial; tanpa angka.

**Batas**: tabel **6 baris, berhenti di situ**. JANGAN menambah baris "arsitektur penyimpanan" / "sumber data" / "backup".

---

## FAQ Q&As (Bahasa Indonesia — 2 wajib + 1 opsional)

### Q1. Apa contoh OLTP dan OLAP di perusahaan? *(PAA #4 — 42 kata)*

Setiap kali staf gudang mencatat penerimaan barang atau memasukkan pesanan penjualan ke ERP, itu beban kerja OLTP yang diproses dalam hitungan milidetik. Ketika manajemen meminta tren margin per lini produk selama tiga tahun, kueri itu memindai jutaan baris dan wajar memakan detik hingga menit.

*(Fakta/angka: milidetik · tiga tahun · detik–menit. Contoh **enterprise**, bukan bank/ATM/Netflix ala pesaing ✓)*

### Q2. Apakah OLAP dan OLTP bisa berjalan di satu database? *(PAA #6 — 43 kata)*

Bisa. Pendekatannya diajukan Hasso Plattner, salah satu pendiri SAP, dalam makalah keynote ACM SIGMOD 2009: simpan data di memori utama dalam format kolom agar satu database melayani transaksi dan analitik sekaligus. SAP HANA dibangun di atas prinsip ini. Kategori arsitekturnya dikenal sebagai HTAP.

*(Fakta/angka: 2009. Framing "makalah keynote" ✓)*

### Q3 (OPSIONAL — hanya bila total masih di bawah 950 kata). Berapa waktu respons OLTP dibandingkan OLAP? *(PAA #9 — 39 kata)*

Berbeda beberapa orde besaran. Menurut AWS, beban kerja OLTP diukur dalam milidetik, sedangkan kueri OLAP biasanya memakan detik hingga menit karena memproses data jauh lebih banyak: volume OLTP tipikal berada di kisaran gigabyte, OLAP di kisaran terabyte hingga petabyte.

*(Fakta/angka: milidetik · detik–menit · GB · TB–PB. Di bawah 55 kata ✓)*

> **Dedup FAQ**: tak satu pun menyentuh *data warehouse* sebagai subjek — tidak bertabrakan dengan FAQ `2026-06-data-warehouse-solutions-01` ✓

---

## Edge cases & nuance

- **Artikel ini tidak menobatkan pemenang.** AWS eksplisit: *"Sebagian besar perusahaan menggunakan sistem OLTP dan OLAP secara bersamaan"*, dan basis data OLTP bisa menjadi **salah satu sumber data** bagi sistem OLAP. Keduanya beban kerja, bukan produk yang bersaing.
- **Penyatuan bukan jawaban universal** (honest hedging H2 #3 — WAJIB). Memori utama lebih mahal daripada disk, dan perusahaan dengan beban analitik ringan/mingguan sering tidak mendapat manfaat sepadan. ⚠️ **JANGAN menyebut angka harga** — tidak terverifikasi.
- **HANA bukan satu-satunya.** Microsoft Learn menunjukkan SQL Server/SQL Database juga menawarkan HTAP lewat *columnstore index* — bukti langsung bahwa penyatuan **bukan eksklusif SAP**. Posisikan HANA sebagai **contoh paling relevan bagi pembaca ERP** + perwujudan langsung makalah 2009, **bukan** satu-satunya/terbaik. Bila ragu, tulis "beberapa database modern".
- **Pemisahan menyelesaikan satu masalah dan menciptakan yang lain** (honest hedging H2 #2 — kini bersumber): data analitik di-refresh pada interval jauh lebih lambat dan cocok untuk keputusan strategis, bukan respons langsung (Microsoft Learn); plus perusahaan menanggung dua sistem untuk dirawat.

---

## Flags (open factual risk)

- ⚠️ **#1 — INKONSISTENSI INTERNAL DI SUMBER UTAMA (paling penting).** Halaman AWS ID memuat **dua angka waktu OLAP yang bertentangan**: tabel ringkasan *"detik atau menit"* vs bagian Performa *"beberapa menit hingga beberapa jam"*. → **Rekomendasi**: pakai **"detik hingga menit"** (baris tabel ringkasan — itulah baris komparasi yang dikutip), **wajib** dibingkai "**kisaran tipikal**", dan **jangan menulis "menurut AWS, OLAP selalu selesai dalam detik hingga menit"**. Frasa aman: *"kisaran tipikalnya detik hingga menit (AWS), dan kueri yang sangat berat bisa lebih lama."* Klausa terakhir itu **jujur sekaligus melindungi** dari fact-check yang menemukan bagian Performa. **Editor: jangan flag klausa ini sebagai hedging berlebih — ini disengaja.**
- ⚠️ **#2 — Framing Plattner.** Makalahnya **2 halaman**, ditulis mendampingi *keynote address*, bukan studi empiris. → **WAJIB**: "makalah keynote" / "argumen yang diajukan". **DILARANG**: "penelitian yang membuktikan", "studi menunjukkan", "riset SAP membuktikan". Juga: `openAccessPdf: CLOSED` — jangan sugestikan teks penuh gratis.
- ⚠️ **#3 — HTAP: sebut TANPA tahun & TANPA Gartner.** Gartner **403 total** run ini (halaman dokumen + glosarium). Atribusi "Gartner mendefinisikan HTAP pada 2014" **TIDAK terverifikasi** → **DILARANG**. **Namun**: istilah HTAP + expansion akronim **AMAN** karena terverifikasi via **Microsoft Learn (ID)** — sumber vendor otoritatif yang dapat diakses. Ini **melonggarkan** batasan brief (brief mengizinkan menyebut HTAP tanpa sumber; kini ada sumbernya).
- ⚠️ **#4 — Tidak ada sitasi SAP official.** `sap.com/products/data-cloud/hana/...` **403**; `help.sap.com` hanya me-render judul (portal JS). → Karakteristik HANA (in-memory, kolom, OLTP+OLAP satu sistem) **cukup di level konsep** via halaman Soltius sendiri + korroborasi Microsoft Learn (column store ↔ OLAP). **JANGAN memaksakan sitasi inline ke sap.com.** Juga: frasa cousin *"without time lags"* adalah **bahasa pemasaran halaman Soltius** — **jangan dikutip sebagai janji performa**; cukup "menjalankan transaksi dan analitik di atas data yang sama, tanpa menyalinnya lebih dulu".
- ⚠️ **#5 — Microsoft Learn ID adalah terjemahan mesin** (`ms.translationtype: MT`). Terbukti dari galat nyata di halaman: "Fabric" diterjemahkan jadi **"Kain"**, "No" jadi **"Nomor"**. → **Parafrase, jangan kutip verbatim Bahasa Indonesianya.** Substansi teknisnya tetap sahih (sumber Microsoft) — aman sebagai rujukan, tidak aman sebagai kutipan.
- ⚠️ **#6 — "Bentuk akses berlawanan" adalah framing penjelas, bukan kutipan.** Rumusan "sedikit baris × banyak kolom vs sedikit kolom × jutaan baris" adalah **kerangka pedagogis strategist** (dan pembeda utama artikel ini). Secara mekanis benar dan konsisten dengan Microsoft Learn (OLTP = entri rekaman individual; OLAP = baca berat/agregasi), **tetapi tidak ada sumber yang menuliskannya persis begitu**. → Nyatakan sebagai **penjelasan**, **jangan atribusikan** ke AWS/Microsoft/Plattner.

### ❌ HAPUS / JANGAN TULIS

- **❌ Asal istilah OLAP (Codd, 1993) — HAPUS dari H2 #1.** **GAGAL diverifikasi.** dblp: tidak ada rekaman "Providing OLAP to User-Analysts"; Semantic Scholar API: **429** (rate-limited, tidak dapat dikonfirmasi); satu-satunya sumber = Wikipedia, olap.com, blog vendor (Oracle/ClickHouse/Holistics) — **semuanya masuk daftar ❌ brief**. Sumber primernya (Computerworld, 26 Juli 1993) **ditarik penerbitnya** setelah terungkap Codd dibayar Arbor Software. → **Per instruksi brief: hapus kalimatnya.** Artikel tetap utuh; H2 #1 langsung masuk ke "bentuk akses berlawanan" (yang justru pembeda sesungguhnya). Juga **jangan** menyeret "12 aturan OLAP Codd" dan **jangan** mencampurnya dengan 12 aturan Codd untuk database relasional (1970/1985).
- **❌ Benchmark/klaim performa SAP HANA** ("X kali lebih cepat"), **harga memori vs disk**, **pangsa pasar HTAP** — **DILARANG TOTAL**, nol sumber terverifikasi.
- **❌ Detail internal mesin HANA** (*three-tier merge tree*, *delta store*, rasio kompresi) — terlalu dalam untuk 900 kata & berisiko salah. Tidak disediakan di dossier ini, sesuai instruksi brief.
- **❌ "Data analitik tertinggal beberapa jam"** — angka "beberapa jam" **tidak ada di sumber**. Tulis "di-refresh pada interval yang jauh lebih lambat" / "tertinggal dari kenyataan".
- **❌ Nama produk HTAP pesaing** (TiDB/SingleStore) — cukup "beberapa database modern". Menyalin sudut Logique (promosi TiDB) dilarang.

### 🚧 Boundary dedup — TIDAK disediakan di dossier ini (sesuai brief)

Proses **ETL/ELT** (`etl-c01`) · **arsitektur penyimpanan**/data lake/lakehouse/schema-on-read (`data-lake-vs-data-warehouse-c01`, `2026-06-data-warehouse-solutions-02`) · **definisi/karakteristik/komponen data warehouse & 4 ciri Inmon** (`2026-06-data-warehouse-solutions-01`) · **batch vs real-time/CDC/federation** (`2026-08-data-warehouse-solutions-02`, `2026-07-2-business-intelligence-03`) · **fitur S/4HANA, Universal Journal/ACDOCA, Fiori, embedded analytics** (`sap-s4hana-c01`, `cara-kerja-sistem-sap-c01`) · **kubus OLAP/MOLAP/ROLAP/skema bintang** (sengaja ditahan; kata "kubus" maks 1× sebagai apposisi).

> **Catatan**: *data warehouse* di artikel ini hanya boleh muncul sebagai **tempat beban kerja OLAP biasanya dijalankan** (maks 1–2 kalimat + tautan hub). **HANA = mesin database, bukan aplikasi ERP**; klarifikasi "SAP HANA ≠ SAP S/4HANA" maks **1 klausa**.

---

## Data captured this run (2026-07-17)

| URL | Status | Yang didapat |
|---|---|---|
| `aws.amazon.com/id/compare/the-difference-between-olap-and-oltp/` | ✅ 200 | Angka waktu respons & volume (2× fetch) — **inkonsistensi internal ditemukan** |
| `learn.microsoft.com/id-id/.../online-analytical-processing` | ✅ 200 | **Definisi HTAP**, column store ↔ OLAP, OLAP refresh lebih lambat, OLTP/OLAP optimization |
| `dblp.org/db/conf/sigmod/sigmod2009.html` | ✅ 200 | Metadata Plattner: judul, hlm. 1–2, DOI, Providence 29 Jun–2 Jul 2009 |
| `api.semanticscholar.org/.../DOI:10.1145/1559845.1559846` | ✅ 200 | Konfirmasi silang: year 2009, venue SIGMOD, H. Plattner, `openAccessPdf: CLOSED` |
| `doi.org/10.1145/1559845.1559846` | ✅ 302 → dl.acm.org | DOI **resolve** (tautan pembaca yang dipakai) |
| `soltius.co.id/id/blog/data-warehouse-solutions` | ✅ resolve | Hub OK; konfirmasi *"Data Warehouse Solutions (OLAP) mengambil peran krusial"* |
| `soltius.co.id/blog/read/understanding-the-hana-in-memory-database-...` | ✅ resolve | Cousin OK; *column format* · *RAM* · *simultaneously without time lags* |
| `dl.acm.org/doi/10.1145/1559845.1559846` | ❌ 403 | Bot-block (bukan tautan mati) |
| `gartner.com/en/documents/2657815` | ❌ 403 | Atribusi HTAP/2014 **gagal diverifikasi** |
| `gartner.com/en/information-technology/glossary/htap-...` | ❌ 403 | Idem |
| `help.sap.com/docs/SAP_HANA_PLATFORM/...` | ❌ hanya judul | Portal JS; **tidak ada sitasi SAP official** |
| `dblp.org/search?q=Providing+OLAP+to+User-Analysts` | ❌ nihil | **Codd 1993 gagal diverifikasi → hapus** |
| `api.semanticscholar.org/.../search?query=Providing+OLAP...` | ❌ 429 | Rate-limited (2× coba) |

**Ringkasan verifikasi**: 12 klaim terverifikasi · 5 sumber layak sitasi · 6 flag terbuka · 2 klaim brief dibatalkan (Codd 1993 → hapus; Gartner/HTAP 2014 → tanpa atribusi) · 1 klaim brief **diperkuat** (HTAP kini bersumber via Microsoft Learn) · 1 risiko baru ditemukan (inkonsistensi internal AWS).
