---
brief_id: "warehouse-management-system-02"
researcher_run_date: "2026-07-07"
sources_cited: 14
flags: 6
---

# Research Dossier: Warehouse Management System untuk Farmasi dan FMCG — Cold Chain, FEFO, dan Kepatuhan CDOB

## TL;DR for the writer

- **CDOB punya regulasi baru (2025).** Standar Cara Distribusi Obat yang Baik kini diatur **Peraturan BPOM No. 20 Tahun 2025** (ditetapkan 24 Juni 2025, diundangkan 3 Juli 2025), menggantikan PerBPOM No. 9/2019 jo. No. 6/2020. JANGAN sebut "CDOB 2019/2020" sebagai regulasi terkini — pakai "No. 20 Tahun 2025". Sertifikat CDOB wajib bagi PBF (dasar sertifikasi: PerBPOM No. 25/2017), berlaku 5 tahun.
- **Cold chain 2–8°C sudah terverifikasi** untuk vaksin/serum dan produk rantai dingin, dengan rujukan BPOM dan jurnal farmasi Indonesia. Rentang ini aman dipakai.
- **Istilah SAP yang HARUS akurat:** SAP EWM secara resmi menyebut strateginya **"Shelf Life Expiration Date"** (bukan akronim "FEFO") — sistem mengeluarkan stok dengan tanggal kedaluwarsa terpendek lebih dulu, di-sort berdasarkan field VFDAT. "FEFO" adalah istilah industri; SAP EWM mengimplementasikan logika itu lewat strategi "Shelf Life Expiration Date". Tulis keduanya, jangan klaim "SAP punya strategi bernama FEFO".
- **Serialisasi obat Indonesia SUDAH ADA MANDATNYA, tapi bertahap.** Diatur PerBPOM No. 22 Tahun 2022 (2D Barcode). Barcode autentikasi (serialisasi penuh, GS1 DataMatrix) wajib: narkotika & psikotropika Desember 2025; seluruh obat resep termasuk produk biologi Desember 2027. Jangan klaim "semua obat sudah wajib serialisasi sekarang" — bertahap.
- **Angle penyatu valid:** SERP memang terfragmentasi (cold chain vs CDOB vs WMS generik). Menautkan WMS → CDOB → cold chain → FEFO → serialisasi dalam satu artikel adalah whitespace nyata.

## Core facts (verified)

> **Claim**: Standar Cara Distribusi Obat yang Baik (CDOB) terkini diatur Peraturan BPOM No. 20 Tahun 2025.
> **Number/specific**: Ditetapkan Kepala BPOM (Taruna Ikrar) 24 Juni 2025, diundangkan Kementerian Hukum 3 Juli 2025; menggantikan PerBPOM No. 9/2019 tentang Pedoman Teknis CDOB beserta perubahannya (No. 6/2020); mengacu UU No. 17/2023 tentang Kesehatan dan PP No. 28/2024.
> **Source**: BPOM Siaran Pers "BPOM Tetapkan Peraturan Terbaru tentang Standar CDOB" (pom.go.id) + peraturan.go.id / peraturan.bpk.go.id (No. 326278), diakses 2026-07-07.
> **Confidence**: high

> **Claim**: CDOB adalah cara distribusi obat/bahan obat yang menjamin mutu sepanjang jalur distribusi sesuai persyaratan dan tujuan penggunaannya.
> **Number/specific**: Tujuan: mempertahankan konsistensi mutu obat sepanjang rantai distribusi hingga ke tangan konsumen.
> **Source**: BPOM — FAQ CDOB (sertifikasicdob.pom.go.id) + peraturan.go.id, diakses 2026-07-07.
> **Confidence**: high

> **Claim**: Sertifikat CDOB wajib bagi Pedagang Besar Farmasi (PBF) sebagai bukti pemenuhan standar distribusi obat.
> **Number/specific**: Dasar kewajiban sertifikasi: Peraturan Kepala BPOM No. 25 Tahun 2017 tentang Tata Cara Sertifikasi CDOB; sertifikat berlaku 5 tahun dan dapat diperpanjang/diperbarui.
> **Source**: BPOM — FAQ CDOB / Standar Pelayanan Sertifikasi CDOB (sertifikasicdob.pom.go.id), diakses 2026-07-07.
> **Confidence**: high (angka "5 tahun" dari sumber BPOM/turunan; writer boleh nyatakan, aman)

> **Claim**: Produk rantai dingin (cold chain product) seperti vaksin dan serum harus disimpan pada suhu 2–8°C.
> **Number/specific**: Rentang +2°C s.d. +8°C untuk vaksin/serum (mis. campak, BCG, DPT, TT, DT, Hepatitis B); parameter suhu adalah faktor kritis stabilitas dan efikasi.
> **Source**: Peraturan BPOM (pedoman teknis CDOB, historis No. 9/2019) + jurnal farmasi ID (Majalah Farmasetika/Farmasetika.com; KFTD), diakses 2026-07-07.
> **Confidence**: high

> **Claim**: Sebuah studi pemetaan suhu chiller di salah satu PBF di Jakarta menemukan suhu rata-rata cold room 5,15°C — di dalam rentang 2–8°C.
> **Number/specific**: Suhu rata-rata 5,15°C; studi Putri Pamungkas & Ida Musfiroh (Universitas Padjadjaran), Majalah Farmasetika, Mei 2023.
> **Source**: Majalah Farmasetika (jurnal.unpad.ac.id/farmasetika, view/46676), diakses 2026-07-07.
> **Confidence**: high (label sebagai temuan studi tunggal, bukan generalisasi nasional)

> **Claim**: Serialisasi/track-and-trace obat di Indonesia diatur melalui penerapan 2D Barcode.
> **Number/specific**: Peraturan BPOM No. 22 Tahun 2022 tentang Penerapan 2D Barcode dalam Pengawasan Obat dan Makanan (ditetapkan 5 Oktober 2022; revisi atas PerBPOM No. 33/2018).
> **Source**: peraturan.go.id (Peraturan BPOM No. 22/2022) + jdih.pom.go.id, diakses 2026-07-07.
> **Confidence**: high

> **Claim**: Serialisasi penuh (barcode autentikasi) obat berlaku bertahap, belum untuk semua kategori sekaligus.
> **Number/specific**: Barcode identifikasi (QR/NIE) efektif sejak Des 2023 (a.l. obat tradisional, OTC); barcode autentikasi/serialisasi: narkotika & psikotropika wajib Des 2025; seluruh obat resep termasuk produk biologi wajib Des 2027.
> **Source**: rfxcel (Indonesia BPOM Track & Trace) + Cosmotrace (Indonesia Pharma Serialization 2025 Updates), diakses 2026-07-07.
> **Confidence**: medium-high (dua sumber vendor T&T sepakat; tanggal Des 2025/Des 2027 dari rfxcel; sumber lain menyebut "2025" untuk fase kedua — writer sebaiknya rujuk PerBPOM 22/2022 untuk mandatnya dan hindari mengunci tanggal absolut jika ragu; lihat Flags)

> **Claim**: Barcode autentikasi obat resep menggunakan 2D DataMatrix standar GS1 dengan lima elemen data.
> **Number/specific**: (1) GS1 GTIN, (2) nomor izin edar/marketing authorization BPOM, (3) kode produksi/nomor batch, (4) tanggal kedaluwarsa, (5) nomor seri.
> **Source**: rfxcel (Indonesia BPOM Track & Trace requirements), diakses 2026-07-07.
> **Confidence**: high

> **Claim**: SAP Extended Warehouse Management (EWM) menyediakan sejumlah strategi stock removal (pengambilan stok).
> **Number/specific**: Strategi meliputi FIFO, Stringent FIFO (lintas storage type), LIFO, "Shelf Life Expiration Date", partial quantities first, fixed storage bin, dll. Aturan dibuat lewat Customizing (bukan pre-defined, kecuali fixed bin).
> **Source**: SAP Learning — "Applying the Stock Removal Strategies" (learning.sap.com, kursus Basic Customizing in SAP S/4HANA EWM), diakses 2026-07-07.
> **Confidence**: high

> **Claim**: SAP EWM mengimplementasikan logika FEFO melalui strategi "Shelf Life Expiration Date".
> **Number/specific**: Sistem memastikan produk dengan shelf life expiration date terpendek dikeluarkan lebih dulu; SLED ditetapkan sebagai kriteria sort (field VFDAT) pada stock removal rule per storage type/group. SAP resmi memakai istilah "Shelf Life Expiration Date", bukan akronim "FEFO".
> **Source**: SAP Learning (learning.sap.com) + SAP Help/SCN Stock Removal Strategies, diakses 2026-07-07.
> **Confidence**: high

> **Claim**: SAP EWM mendukung batch management dengan pengecekan sisa masa simpan (remaining shelf life) saat goods receipt.
> **Number/specific**: Saat inbound delivery, sistem mengumpulkan karakteristik batch & kuantitas sesuai batch relevance; jika sisa shelf life kurang saat GR, EWM dapat dikonfigurasi menolak/mengunci penuh GR & pembuatan warehouse task, atau hanya mengecek minimal. Batch management diaktifkan lebih dulu di ERP dan level material.
> **Source**: SAP Help Portal — Product Assistance for SAP EWM (help.sap.com) + SAP Community, diakses 2026-07-07.
> **Confidence**: high

> **Claim**: Handling Unit (HU) di SAP EWM adalah unit fisik (kemasan + barang) dengan nomor identitas unik untuk traceability.
> **Number/specific**: Setiap HU punya nomor identitas unik, umumnya mengikuti standar SSCC (Serial Shipping Container Code), memungkinkan pelacakan real-time di rantai pasok; HUM khususnya bernilai untuk industri dengan traceability ketat (farmasi, food, otomotif).
> **Source**: SAP Help Portal (Handling Unit Management) + praktik industri (MDP Group / Infosys SAP EWM for Life Science), diakses 2026-07-07.
> **Confidence**: high (konsep HU/SSCC dari SAP; framing "traceability ketat" didukung praktik industri)

> **Claim**: SAP EWM dapat memblokir batch tertentu dari picking/staging berdasarkan batch disposition status — relevan untuk farmasi.
> **Number/specific**: Bergantung pada Batch Disposition Status (mis. API, bahan baku), batch dapat dicegah ditentukan/di-assign ke warehouse task; pengecekan status via BAdI standar saat batch determination.
> **Source**: SAP / Infosys — "Leverage SAP EWM for Life Science and Pharmaceutical companies" (blogs.infosys.com/sap), diakses 2026-07-07.
> **Confidence**: medium (mekanisme EWM valid; sumber blog integrator, bukan SAP-official — label sebagai kapabilitas umum, jangan kutip angka)

> **Claim**: Pengelolaan vaksin sesuai CDOB mensyaratkan personel terlatih, bangunan/fasilitas sesuai rantai dingin, SOP operasional, pemeliharaan sarana, serta kalibrasi/kualifikasi/validasi.
> **Number/specific**: Lima poin utama pengelolaan vaksin per CDOB: (1) personel & pelatihan, (2) bangunan & fasilitas, (3) operasional (terima/simpan/kirim) sesuai SOP, (4) program pemeliharaan, (5) kalibrasi, kualifikasi & validasi.
> **Source**: Pedoman Teknis CDOB BPOM (turunan) via jurnal/rujukan farmasi ID, diakses 2026-07-07.
> **Confidence**: high

## Solution focus + Soltius anchor (from product_matrix.md + brief)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| **SAP Extended Warehouse Management (EWM)** — batch management, serial number, handling unit management (SSCC), strategi **"Shelf Life Expiration Date"** (logika FEFO), pengecekan remaining shelf life saat GR, storage type khusus untuk area suhu terkontrol | Gunakan istilah SAP yang tepat: "Shelf Life Expiration Date" strategy (sort VFDAT) untuk FEFO; HU dengan SSCC; batch determination + disposition check. EWM umumnya di atas S/4HANA. | H2 #2 (FEFO/batch/serialisasi), H2 #3 (cold chain/storage type), H2 #4 (traceability/HU/GS1) | **Implementation (SAP EWM) untuk industri teregulasi** + pengalaman industri **Pharma, Consumer Products, Wholesale Distribution**; **SAP Platinum Partner** — *placement: closing* |
| Konsep integrasi sensor/IoT untuk monitoring suhu 2–8°C | Vendor-neutral; sebutkan sebagai integrasi/konsep, bukan modul EWM bawaan | H2 #3 | Optional 1 mid-article aside: konfigurasi FEFO/batch sejak blueprint menentukan kelolosan audit — tanpa menjual |

Reminder: Soltius **mengimplementasikan/mengintegrasikan/mendukung** SAP EWM — **tidak membangun** software-nya. Maks 2–3 self-mention. Framing pre-approved: "Sebagai SAP Platinum Partner melalui United VARs, Soltius mendampingi... hingga dukungan pasca go-live" atau anchor industri: "...dengan pengalaman di industri farmasi dan consumer products."

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **BPOM — Peraturan BPOM No. 20 Tahun 2025 tentang Standar CDOB** (diundangkan 3 Juli 2025) — https://www.peraturan.go.id/id/peraturan-bpom-no-20-tahun-2025 (dan siaran pers pom.go.id) — *backs*: regulasi CDOB terkini, kewajiban distribusi obat bermutu.
2. **SAP Learning / SAP Help Portal — Stock Removal Strategies (SAP EWM)** — https://learning.sap.com/courses/basic-customizing-in-sap-s-4hana-ewm/applying-the-stock-removal-strategies — *backs*: strategi "Shelf Life Expiration Date"/FEFO, batch/HU di SAP EWM.
3. **BPOM — Peraturan BPOM No. 22 Tahun 2022 tentang Penerapan 2D Barcode** — https://peraturan.go.id/id/peraturan-bpom-no-22-tahun-2022 — *backs*: mandat serialisasi/track-and-trace 2D barcode (GS1).
4. **Majalah Farmasetika (Universitas Padjadjaran), Mei 2023** — https://jurnal.unpad.ac.id/farmasetika/article/view/46676 — *backs*: pemetaan suhu chiller PBF (rata-rata 5,15°C, dalam 2–8°C).

Priority terpenuhi: SAP official + regulasi pemerintah (BPOM) + jurnal farmasi peer-review ID.

## FAQ Q&As (7 drafted, Bahasa Indonesia)

### Apa itu FEFO dan apa bedanya dengan FIFO?
FEFO (First Expired First Out) adalah metode pengeluaran stok yang mendahulukan barang dengan tanggal kedaluwarsa terdekat, bukan yang paling lama masuk. Bedanya dengan FIFO (First In First Out) yang berbasis urutan masuk: FEFO berbasis tanggal kedaluwarsa. Untuk obat dan makanan, FEFO lebih tepat karena batch yang datang belakangan bisa saja kedaluwarsa lebih dulu. Di SAP EWM, logika ini dijalankan lewat strategi "Shelf Life Expiration Date" yang mengurutkan stok berdasarkan tanggal kedaluwarsa.

### Apa itu CDOB dan siapa yang wajib mematuhinya?
CDOB (Cara Distribusi Obat yang Baik) adalah standar yang memastikan mutu obat terjaga di sepanjang jalur distribusi. Standar terkini diatur Peraturan BPOM No. 20 Tahun 2025. Sertifikat CDOB wajib dimiliki Pedagang Besar Farmasi (PBF) dan sarana distribusi obat sebagai bukti pemenuhan standar, dengan masa berlaku lima tahun. Kepatuhan mencakup bangunan, fasilitas penyimpanan (termasuk rantai dingin), personel, SOP, hingga kalibrasi dan validasi.

### Apakah WMS bisa mengelola tanggal kedaluwarsa secara otomatis?
Bisa. WMS kelas enterprise seperti SAP EWM mengelola tanggal kedaluwarsa melalui batch management dan Shelf Life Expiration Date. Sistem dapat mengecek sisa masa simpan saat penerimaan barang (goods receipt) dan, jika dikonfigurasi, menolak atau mengunci barang yang masa simpannya kurang. Saat picking, stok diurutkan otomatis berdasarkan kedaluwarsa terdekat (FEFO), sehingga risiko produk kedaluwarsa lolos ke pengiriman ditekan tanpa mengandalkan pengecekan manual.

### Bagaimana WMS membantu menjaga cold chain?
WMS membantu cold chain dengan mengelola storage type khusus untuk area bersuhu terkontrol (mis. cold room 2–8°C), memisahkan penempatan produk rantai dingin, dan mencatat audit trail pergerakan batch. WMS umumnya diintegrasikan dengan sensor/IoT pemantau suhu agar penyimpangan suhu (temperature excursion) terekam dan dapat ditindaklanjuti. Namun WMS mendukung, bukan menggantikan, kualifikasi cold room dan validasi proses yang tetap diwajibkan CDOB.

### Apa itu serialisasi obat (track and trace)?
Serialisasi obat adalah pemberian identitas unik pada setiap kemasan agar bisa dilacak sepanjang rantai pasok. Di Indonesia, penerapannya diatur Peraturan BPOM No. 22 Tahun 2022 tentang 2D Barcode menggunakan standar GS1. Barcode autentikasi memuat lima data: GTIN, nomor izin edar BPOM, nomor batch, tanggal kedaluwarsa, dan nomor seri. Penerapannya bertahap—dimulai dari narkotika/psikotropika, menyusul obat resep dan produk biologi—dan datanya dilaporkan ke sistem track-and-trace BPOM.

### Apakah WMS menjamin lolos audit BPOM?
Tidak ada sistem yang otomatis menjamin lolos audit. WMS memperkuat kesiapan audit dengan traceability batch/serial, penegakan FEFO, dan audit trail yang lengkap, tetapi kepatuhan CDOB juga menuntut SOP tertulis, personel terlatih, kualifikasi fasilitas cold chain, serta kalibrasi dan validasi berkala. WMS yang dikonfigurasi tepat—terutama aturan FEFO dan batch sejak blueprint—membuat data audit tersedia rapi, namun proses dan dokumentasi tetap tanggung jawab organisasi.

### Apakah FMCG makanan juga membutuhkan FEFO?
Ya. Produk FMCG dengan masa simpan terbatas—makanan, minuman, produk susu, kosmetik—menghadapi risiko yang sama: barang kedaluwarsa yang lolos berarti write-off, penarikan produk, dan kepercayaan merek yang tergerus. FEFO (via strategi Shelf Life Expiration Date di WMS) memastikan stok berputar berdasarkan kedaluwarsa terdekat. Prinsip FEFO, batch management, dan traceability berlaku lintas industri berbasis shelf-life, bukan hanya farmasi teregulasi.

## Data tables for the writer

### Tabel 1 — Kebutuhan kepatuhan farmasi/FMCG → fitur WMS (SAP EWM sebagai contoh)
| Kebutuhan kepatuhan | Fitur WMS yang menjawab | Catatan akurat |
|---|---|---|
| Cegah produk kedaluwarsa terkirim | Strategi **Shelf Life Expiration Date** (logika FEFO), sort VFDAT | SAP EWM tidak menamai strateginya "FEFO"; istilah resminya "Shelf Life Expiration Date" |
| Kontrol batch & sisa masa simpan | **Batch management** + cek remaining shelf life saat goods receipt | Dapat dikonfigurasi menolak/mengunci GR bila shelf life kurang |
| Traceability unit & rantai pasok | **Handling Unit Management** (nomor unik, umumnya SSCC) | Mendukung pelacakan real-time; relevan untuk recall |
| Serialisasi obat (2D barcode GS1) | Nomor seri + integrasi data ke sistem T&T BPOM | Mandat bertahap per PerBPOM 22/2022; WMS menyimpan/meneruskan data |
| Penyimpanan suhu terkontrol | **Storage type** khusus (cold room 2–8°C) + integrasi sensor/IoT | Monitoring suhu umumnya via integrasi, bukan modul EWM bawaan |
| Kesiapan audit CDOB | **Audit trail** pergerakan stok/batch | Mendukung, tidak menggantikan SOP/validasi |

### Tabel 2 — FIFO vs LIFO vs FEFO
| Aspek | FIFO | LIFO | FEFO |
|---|---|---|---|
| Dasar pengeluaran | Urutan masuk (terlama dulu) | Urutan masuk (terbaru dulu) | Tanggal kedaluwarsa terdekat dulu |
| Cocok untuk | Barang umum tanpa expiry ketat | Kasus akuntansi/tertentu (jarang untuk obat) | Obat, vaksin, makanan, kosmetik |
| Risiko utama bila salah | Barang lama menumpuk | Barang lama terlupakan | (Metode paling aman untuk shelf-life) |
| Di SAP EWM | Strategi FIFO / Stringent FIFO | Strategi LIFO | Strategi "Shelf Life Expiration Date" |

## Edge cases & nuance

- **"FEFO" adalah istilah industri, bukan nama strategi SAP.** SAP EWM menyebutnya "Shelf Life Expiration Date". Writer sebaiknya menjelaskan FEFO sebagai konsep, lalu memetakannya ke istilah SAP — ini justru memperkuat E-E-A-T (menunjukkan kedalaman teknis).
- **CDOB ≠ CPOB.** CDOB (distribusi) untuk PBF/distributor; CPOB (produksi) untuk industri farmasi. Artikel ini soal gudang/distribusi → CDOB. Jangan tertukar.
- **Serialisasi bertahap, bukan universal "sekarang".** Menyatakan "semua obat wajib serialisasi" salah. Yang tepat: mandat ada (PerBPOM 22/2022), penerapan bertahap per kategori.
- **WMS mendukung, bukan menggantikan kepatuhan.** Ini justru H2 #5 (honest angle). Kualifikasi cold room, validasi proses, SOP, kalibrasi tetap wajib CDOB — WMS menyediakan data & penegakan, bukan sertifikasi otomatis.
- **Cold chain monitoring suhu umumnya integrasi, bukan fitur EWM bawaan.** Jangan tulis "SAP EWM memantau suhu" seolah modul native; frasekan sebagai "diintegrasikan dengan sensor/IoT".
- **EWM biasanya berjalan di atas S/4HANA** (embedded atau decentralized) — mendukung internal link ke migrasi ERP ke cloud tanpa overclaim.

## Flags (open factual risk)

- ⚠️ **Tanggal deadline serialisasi (Des 2025 / Des 2027)**: dua sumber vendor track-and-trace (rfxcel, Cosmotrace) memberi tanggal; satu menyebut fase kedua "2025" tanpa memisahkan 2027. → **Rekomendasi**: writer rujuk mandat via PerBPOM No. 22/2022 sebagai fakta utama; untuk tanggal per-kategori, frasekan "diterapkan bertahap (mis. narkotika/psikotropika lebih dulu, menyusul obat resep dan produk biologi)" dan hindari mengunci satu tanggal absolut sebagai fakta BPOM tanpa mengecek teks PerBPOM. Sumber vendor bukan otoritas primer.
- ⚠️ **Sertifikat CDOB "berlaku 5 tahun"**: didukung sumber turunan BPOM (FAQ/standar pelayanan), belum diverifikasi kata-per-kata dari pasal PerBPOM. → **Rekomendasi**: boleh dinyatakan; jika ingin aman, frasekan "umumnya berlaku 5 tahun sesuai ketentuan sertifikasi BPOM".
- ⚠️ **Dasar hukum kewajiban sertifikat CDOB (PerBPOM No. 25/2017)**: tata cara sertifikasi; namun rezim regulasi kesehatan berubah (UU 17/2023, PP 28/2024, PerBPOM 20/2025). → **Rekomendasi**: sebut kewajiban sertifikasi CDOB bagi PBF sebagai fakta (didukung BPOM), tapi jangan mengklaim nomor peraturan tata cara sebagai "terkini" tanpa verifikasi apakah 25/2017 masih berlaku pasca-2025.
- ⚠️ **Batch disposition/BAdI blocking**: mekanisme EWM valid tetapi sumbernya blog integrator (Infosys), bukan SAP-official. → **Rekomendasi**: sebut sebagai kapabilitas umum ("EWM dapat mencegah batch tertentu dipilih"), jangan kutip angka atau klaim spesifik.
- ⚠️ **SAP Help Portal tidak ter-scrape langsung** (halaman JS-rendered; WebFetch hanya menerima header). Fakta EWM diverifikasi via SAP Learning (learning.sap.com, otoritatif SAP) + SAP Community/KBA. → **Rekomendasi**: link keluar sebaiknya ke halaman SAP Learning yang terbukti memuat konten, bukan URL Help Portal yang mungkin memerlukan render.
- ⚠️ **Angka "~90% kepatuhan CCP" dari brief**: TIDAK ditemukan sumber tunggal yang menyebut angka 90% ini. Yang terverifikasi: studi PBF Jakarta menemukan suhu rata-rata 5,15°C (dalam rentang). → **Rekomendasi**: JANGAN pakai angka "90%" tanpa sumber. Pakai temuan suhu 5,15°C (Majalah Farmasetika 2023) sebagai contoh konkret, atau frasekan kualitatif tanpa persentase karangan.

## Definition snippet draft (40–60 words)

> **Warehouse Management System (WMS) untuk industri farmasi** adalah sistem manajemen gudang yang dirancang mengelola batch, tanggal kedaluwarsa, nomor seri, dan penyimpanan suhu terkontrol sesuai kepatuhan distribusi obat. Berbeda dari inventory biasa, WMS farmasi menegakkan FEFO (mendahulukan kedaluwarsa terdekat), menjaga rantai dingin 2–8°C, dan menyediakan audit trail traceability yang dibutuhkan standar CDOB BPOM.

*(54 kata — dalam rentang 40–60.)*
