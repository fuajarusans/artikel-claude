---
brief_id: "erp-migration-to-the-cloud-01"
researcher_run_date: "2026-07-07"
sources_cited: 11
flags: 5
---

# Research Dossier: Strategi Migrasi Data ERP ke Cloud: Bersihkan dan Arsip Sebelum Pindah

## TL;DR for the writer

- **Data, bukan teknologi, adalah penyebab tersering cutover molor/gagal.** Artikel ini adalah panduan eksekusi data end-to-end (cleanse → archive → decommission → load → validate) — sudut yang belum digarap cluster ini. Ajarkan tiga keputusan data dalam satu kerangka.
- **Koreksi nama tool WAJIB dilakukan.** Transaksi **LTMC sudah _deprecated_ sejak SAP S/4HANA 2021**; sejak versi 2020 ke atas penggantinya adalah aplikasi Fiori **"Migrate Your Data – Migration Cockpit"**. Boleh sebut "LTMC" sebagai istilah historis/lama, tapi JANGAN memframe LTMC sebagai cara terkini. (Lihat Flag ⚠️1.)
- **Angka aman untuk dikutip**: mulai arsip **12–18 bulan** sebelum go-live; pengurangan volume data khas **30–70%** (TJC Group, 12 Jun 2026). SAP ECC (Business Suite 7) mainstream maintenance berakhir **31 Des 2027**, extended (+2%-poin) **2028–2030** (SAP resmi). Retensi dokumen pajak Indonesia **10 tahun** (Pasal 28 ayat (11) UU KUP) — konteks legal kuat untuk bagian archiving.
- **Business Partner (BP) memaksa pembersihan master data**: di S/4HANA, Customer (KNA1) & Vendor (LFA1) tidak bisa dibuat tanpa BP dulu; sinkronisasi lewat **CVI (Customer-Vendor Integration)**. Data ganda/inkonsisten harus dibereskan sebelum konversi ke BP — ini pemicu nyata data cleansing.
- **Soltius anchor**: layanan **Migration** (di bawah Implementation) + **Best RISE & Best Cloud Partner**, di closing. Framing: menjalankan data cleansing, arsip, dan validasi/rekonsiliasi migrasi. Maks 2–3 self-mention.

## Core facts (verified)

> **Claim**: SAP menghentikan mainstream maintenance untuk SAP Business Suite 7 (termasuk SAP ERP 6.0 / ECC).
> **Number/specific**: Mainstream maintenance untuk core applications SAP Business Suite 7 berlaku hingga **akhir 2027** (31 Desember 2027) — spesifik untuk SAP ERP 6.0 enhancement package 6, 7, dan 8.
> **Source**: SAP Support Portal — "Maintenance strategy / Innovation Commitment" (support.sap.com/.../maintenance-strategy/s4hana-business-suite7.html), diakses 2026-07-07.
> **Confidence**: high

> **Claim**: Tersedia extended maintenance berbayar setelah 2027.
> **Number/specific**: Extended maintenance option tersedia **2028 hingga akhir 2030** dengan premium **2 poin persentase** di atas basis maintenance. Setelah itu, customer-specific maintenance.
> **Source**: SAP Support Portal — maintenance strategy Business Suite 7, diakses 2026-07-07.
> **Confidence**: high

> **Claim**: SAP memberi komitmen inovasi jangka panjang untuk S/4HANA (mengurangi kecemasan "pindah ke mana").
> **Number/specific**: **Innovation commitment untuk SAP S/4HANA hingga akhir 2040** — selalu ada minimal satu rilis S/4HANA yang di-maintenance sampai 2040.
> **Source**: SAP Support Portal — maintenance strategy Business Suite 7, diakses 2026-07-07.
> **Confidence**: high

> **Claim**: Catatan penting soal EhP lama (untuk akurasi, hindari overclaim tanggal 2027 untuk semua ECC).
> **Number/specific**: Mainstream maintenance untuk SAP ERP 6.0 **tanpa EhP dan EhP 1–5 berakhir 31 Desember 2025**; hanya EhP 6/7/8 yang dapat garis waktu 2027.
> **Source**: SAP Support Portal / SAP Community "Maintenance Timelines for SAP ERP 6.0", diakses 2026-07-07.
> **Confidence**: high

> **Claim**: Transaksi LTMC (Migration Cockpit versi lama) sudah tidak dapat dipakai untuk migrasi data.
> **Number/specific**: Sejak **SAP S/4HANA 2021**, tidak lagi mungkin memigrasikan data lewat transaksi LTMC (project lama masih bisa ditampilkan, tetapi project baru tidak bisa dibuat). LTMC _deprecated_.
> **Source**: SAP Help Portal — "Migration Cockpit (Transaction LTMC) – Deprecated" (help.sap.com, SAP_S4HANA_ON-PREMISE), diakses 2026-07-07.
> **Confidence**: high

> **Claim**: Pengganti resmi LTMC adalah aplikasi Fiori "Migrate Your Data".
> **Number/specific**: Aplikasi **"Migrate Your Data – Migration Cockpit"** adalah successor LTMC dan sudah menjadi aplikasi migrasi data default di SAP Fiori launchpad sejak S/4HANA **2020 ke atas**; juga standar untuk S/4HANA Cloud.
> **Source**: SAP Help Portal + SAP Community "LTMC replaced with Migrate Your Data", diakses 2026-07-07.
> **Confidence**: high

> **Claim**: Migration Cockpit menawarkan pendekatan staging table vs file, dengan trade-off yang jelas.
> **Number/specific**: **Staging table** = tabel database, lebih fleksibel dan **cara paling efisien untuk memindahkan volume data besar secara otomatis** (tanpa perlu memecah tabel besar). **File transfer** biasanya cukup untuk **proyek kecil–menengah**. Staging table dapat diisi via XML/CSV template, SAP HANA Studio, atau tool ETL.
> **Source**: SAP Community (blog by SAP) — "Migrate your Data – Migration Cockpit (SAP S/4HANA 2020 and higher)", diakses 2026-07-07.
> **Confidence**: high

> **Claim**: Migration Cockpit punya komponen LTMOM (Migration Object Modeler) untuk kustomisasi mapping.
> **Number/specific**: Komponen inti: Migration Cockpit (Fiori app), **Migration Object Modeler (LTMOM)** untuk penyesuaian field mapping/logika, dan migration monitor. Field custom (Z-field) dapat dikenali dan dipetakan di LTMOM.
> **Source**: SAP Community — S/4HANA Migration Cockpit FAQ / tutorial, diakses 2026-07-07.
> **Confidence**: high

> **Claim**: Migration Cockpit mendukung simulasi (uji coba) dan validasi sebelum posting data final.
> **Number/specific**: Fitur **simulation/test run** menjalankan migrasi uji untuk mendeteksi error tanpa memposting data; memvalidasi konsistensi & kelengkapan terhadap konfigurasi dan business rules. Setelah simulasi sukses, migrasi produktif dijalankan, lalu **rekonsiliasi pasca-load** membandingkan data hasil migrasi dengan sumber.
> **Source**: SAP Community — Migration Cockpit tutorial / reconciliation approach, diakses 2026-07-07.
> **Confidence**: high (istilah "mock migration" adalah istilah praktisi; mekanisme resminya "simulation/test run" + reconciliation — lihat Flag ⚠️3.)

> **Claim**: Arsip data sebaiknya dimulai jauh sebelum go-live untuk memangkas biaya migrasi.
> **Number/specific**: **Idealnya arsip dimulai 12–18 bulan sebelum migrasi terencana**; pengurangan volume data khas **30–70%**, langsung menurunkan kebutuhan memori HANA, runtime konversi, dan biaya infrastruktur.
> **Source**: TJC Group — "SAP data archiving: How to reduce S/4HANA migration cost", dipublikasikan **12 Juni 2026**, diakses 2026-07-07.
> **Confidence**: high (praktisi/spesialis archiving, bukan SAP resmi — konsisten dengan konsep SAP; label sebagai rule-of-thumb.)

> **Claim**: Volume data lebih besar = biaya HANA lebih tinggi karena model tiering ("T-shirt size").
> **Number/specific**: Arsip sebelum migrasi membantu "right-size" environment S/4HANA awal dan menghindari lompat ke **T-shirt size** berikutnya; memori HANA mahal dan bertingkat.
> **Source**: TJC Group (12 Jun 2026) untuk framing biaya; SAP Community — RISE T-shirt sizing & memory extension (unit 256GB) untuk mekanisme, diakses 2026-07-07.
> **Confidence**: high (untuk konsep tiering); medium untuk detail angka T-shirt spesifik (varies; jangan kutip GB persis — lihat Flag ⚠️4).

> **Claim**: Di S/4HANA, Business Partner (BP) adalah objek master data wajib dan tunggal untuk customer & vendor.
> **Number/specific**: BP adalah **"single point of entry"** — customer/vendor **tidak bisa dibuat tanpa membuat BP lebih dulu**. Tabel lama **KNA1 (customer) & LFA1 (vendor) tetap ada**, diisi oleh **CVI (Customer-Vendor Integration)** yang mensinkronkan BP ke tabel tersebut. Wajib sejak S/4HANA (BP jadi leading object, mis. 1709 ke atas).
> **Source**: SAP Community (blog by SAP) — "FAQ: CVI" & "Business Partner Conversion", diakses 2026-07-07.
> **Confidence**: high

> **Claim**: Konversi ke BP memaksa pembersihan/pemetaan master data (relevansi data cleansing).
> **Number/specific**: Sinkronisasi harus konsisten — jumlah entri KNA1 harus sama dengan CVI_CUST_LINK, LFA1 harus sama dengan CVI_VEND_LINK. Data customer/vendor ganda, konflik, atau tidak lengkap menghambat konversi BP.
> **Source**: SAP Community — CVI concept / conversion, diakses 2026-07-07.
> **Confidence**: high

> **Claim**: Ada tiga jalur transisi S/4HANA — memberi konteks kapan sebagian data tidak perlu ikut.
> **Number/specific**: **Greenfield** (new implementation, redesain proses, migrasi data esensial saja), **Brownfield** (system conversion, pertahankan proses & data, risiko bawa legacy), **Selective Data Transition/SDT** (hibrida, migrasikan data/unit/proses terpilih; shell conversion sebagai variannya).
> **Source**: SAP Community (blogs by SAP) — "Options for your SAP S/4HANA Transition" / "System Conversion" / SDT topic page, diakses 2026-07-07.
> **Confidence**: high

> **Claim**: Kewajiban legal retensi dokumen di Indonesia menjadi dasar keputusan archiving (bukan migrasi).
> **Number/specific**: Buku, catatan, dan dokumen dasar pembukuan (termasuk yang elektronik) **wajib disimpan 10 tahun** — **Pasal 28 ayat (11) UU KUP** — sejalan dengan batas daluwarsa penyidikan pidana pajak.
> **Source**: DDTC News — "Alasan Dokumen Dasar Pembukuan Wajib Disimpan selama 10 Tahun" (mengutip Pasal 28 ayat (11) UU KUP); dikuatkan DJP (pajak.go.id), diakses 2026-07-07.
> **Confidence**: high

## Solution focus + Soltius anchor (from product_matrix.md)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| SAP S/4HANA Migration Cockpit — app **"Migrate Your Data"** (successor LTMC), staging table vs file, LTMOM, simulation + reconciliation | LTMC deprecated sejak S/4HANA 2021; staging table = efisien untuk volume besar; simulasi & rekonsiliasi standar | H2 #4 (tool) + FAQ | Layanan **Migration** (under Implementation) |
| **SAP data archiving** (archiving object, retensi legal) | Mulai 12–18 bln sebelum go-live; reduksi volume 30–70%; retensi pajak ID 10 thn (UU KUP) | H2 #2 & #3 | Migration + data cleansing/arsip di lapangan |
| **Business Partner (BP)** + **CVI** | BP wajib & tunggal; KNA1/LFA1 diisi via CVI; deduplikasi master data prasyarat | H2 #2 (cleansing) | — |
| **RISE with SAP** (jejak data kecil = memori HANA rendah = TCO/negosiasi) | Model T-shirt size; memory extension per unit 256GB; jangan kutip GB spesifik | H2 #3 (aside) | **Best RISE & Best Cloud Partner** (closing) |
| **SAP ECC end of maintenance** (urgency ringan) | 2027 mainstream (EhP6-8), extended 2030 (+2%); S/4HANA innovation commitment 2040 | Lead / H2 #1 aside | — |

Reminder: Soltius **implements/migrates/supports** — tidak membangunnya. Maks 2–3 Soltius self-mention (idealnya closing + satu aside di H2 #4).

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **SAP Support Portal — Maintenance strategy, SAP Business Suite 7 / S/4HANA (diakses 2026-07-07)** — https://support.sap.com/en/release-upgrade-maintenance/maintenance-information/maintenance-strategy/s4hana-business-suite7.html — *what it backs*: mainstream maintenance ECC 2027, extended 2030 (+2%), innovation commitment S/4HANA 2040.
2. **SAP Help Portal — "Migration Cockpit (Transaction LTMC) – Deprecated" (diakses 2026-07-07)** — https://help.sap.com/docs/SAP_S4HANA_ON-PREMISE/29193bf0ebdd4583930b2176cb993268/8f97f0b407024465a283809f0bbe000c.html — *what it backs*: LTMC deprecated sejak S/4HANA 2021; gunakan app "Migrate Your Data".
3. **TJC Group — "SAP data archiving: How to reduce S/4HANA migration cost" (12 Jun 2026, diakses 2026-07-07)** — https://www.tjc-group.com/blogs/sap-data-archiving-how-to-reduce-s-4hana-migration-cost/ — *what it backs*: mulai arsip 12–18 bulan sebelum migrasi; reduksi volume 30–70%.
4. **DDTC News — retensi dokumen pembukuan 10 tahun, Pasal 28 ayat (11) UU KUP (diakses 2026-07-07)** — https://news.ddtc.co.id/berita/nasional/1805429/alasan-dokumen-dasar-pembukuan-wajib-disimpan-selama-10-tahun — *what it backs*: dasar legal archiving di Indonesia (konteks lokal).

Priority order untuk linkout di artikel: 1 SAP resmi (maintenance atau LTMC) + 1 praktisi (TJC Group). DDTC sebagai penguat konteks lokal opsional.

## FAQ Q&As (5–8 drafted, Bahasa Indonesia)

### Apa itu strategi migrasi data dalam migrasi ERP ke cloud?
Strategi migrasi data adalah rencana terstruktur untuk menentukan data mana yang dibersihkan, diarsip, dipensiunkan, lalu dimuat dan divalidasi saat berpindah ke ERP cloud seperti SAP S/4HANA. Fokusnya bukan sekadar "memindahkan semua", melainkan memindahkan data yang benar dalam kondisi bersih. Strategi ini menentukan sukses cutover karena data yang tidak siap adalah penyebab kegagalan migrasi yang paling sering ditemui.

### Berapa lama proses migrasi data dari SAP ECC ke S/4HANA?
Durasinya sangat bergantung pada volume data, jumlah objek, dan jalur transisi (greenfield, brownfield, atau selective data transition), sehingga tidak ada angka tunggal yang berlaku umum. Yang lebih pasti: pekerjaan pembersihan dan arsip sebaiknya dimulai 12–18 bulan sebelum go-live (TJC Group, 2026). Memangkas volume data 30–70% memperpendek runtime konversi dan jendela downtime saat cutover.

### Apa itu SAP S/4HANA Migration Cockpit (LTMC)?
SAP S/4HANA Migration Cockpit adalah alat bawaan SAP untuk memuat data awal ke S/4HANA. Transaksi lama LTMC sudah deprecated sejak S/4HANA 2021; penggantinya adalah aplikasi Fiori "Migrate Your Data – Migration Cockpit", standar sejak versi 2020 ke atas dan di S/4HANA Cloud. Alat ini mendukung pendekatan staging table (efisien untuk volume besar) atau file, plus simulasi dan rekonsiliasi sebelum data final diposting.

### Apa bedanya data cleansing, data archiving, dan data decommissioning?
Data cleansing membersihkan dan mengonsolidasikan data aktif — misalnya menghapus duplikat vendor/customer dan memetakannya ke Business Partner sebelum konversi. Data archiving memindahkan data lama yang jarang dipakai namun wajib disimpan (mis. retensi pajak 10 tahun per UU KUP) ke penyimpanan terpisah. Data decommissioning mematikan sistem lama setelah datanya diarsip read-only, sehingga tidak perlu ikut dimigrasikan.

### Kapan sebaiknya mulai membersihkan data sebelum migrasi?
Sebagai patokan (rule-of-thumb), pekerjaan arsip idealnya dimulai 12–18 bulan sebelum tanggal go-live yang direncanakan, menurut TJC Group (2026). Rentang ini memberi waktu menganalisis database, mengonfigurasi archiving object, menjalankan sesi arsip, dan memverifikasi hasil tanpa mengganggu operasi harian. Semakin dini dimulai, semakin besar reduksi jejak data yang bisa dicapai sebelum cutover.

### Apakah semua data historis harus ikut dimigrasikan?
Tidak. Memindahkan lebih banyak data justru menaikkan kebutuhan memori HANA, runtime konversi, downtime, dan biaya operasional — setiap record yang tidak perlu menambah biaya di suatu titik (TJC Group, 2026). Data lama yang hanya dibutuhkan untuk kepatuhan atau referensi sering lebih tepat disimpan di arsip read-only atau lapisan data warehouse, bukan diangkut ke ERP baru.

### Apa risiko terbesar dari data yang tidak siap saat cutover?
Risiko terbesarnya adalah cutover gagal atau molor di menit terakhir — misalnya konversi Business Partner terhenti karena data customer/vendor ganda atau tidak konsisten, atau load gagal validasi. Karena itu Migration Cockpit menyediakan simulasi (test run) untuk mendeteksi error sebelum posting, dan rekonsiliasi pasca-load untuk memastikan tidak ada data hilang antara sistem sumber dan S/4HANA.

## Data tables for the writer (if the article calls for one)

### Tabel keputusan data: bersihkan, arsip, atau pensiunkan (H2 #2)
| Kriteria data | Tindakan | Tool SAP / mekanisme | Catatan |
|---|---|---|---|
| Master data aktif ganda/inkonsisten (customer, vendor) | **Cleanse** (deduplikasi, perbaikan field, konsolidasi) | Pemetaan ke **Business Partner** via **CVI** sebelum konversi | KNA1/LFA1 tidak boleh punya record yatim; wajib sinkron |
| Data transaksi lama, jarang dipakai, wajib disimpan (pajak/audit) | **Archive** | SAP **data archiving** (archiving object), retensi | Retensi pajak Indonesia 10 thn (UU KUP Pasal 28) |
| Data di sistem lama yang sudah diarsip & tak dibutuhkan online | **Decommission** | Arsip read-only + matikan sistem sumber | Tidak ikut dimuat ke S/4HANA |
| Data master & saldo yang harus aktif di sistem baru | **Migrate** | **Migrate Your Data** (staging table/file) + simulasi + rekonsiliasi | Successor LTMC sejak S/4HANA 2020/2021 |

### Staging table vs file (H2 #4)
| Aspek | Staging table | File |
|---|---|---|
| Bentuk | Tabel database | XML/CSV template |
| Cocok untuk | Volume besar, otomatisasi | Proyek kecil–menengah |
| Efisiensi volume besar | Tinggi (tak perlu pecah tabel) | Terbatas |
| Cara isi data | HANA Studio, CSV/XML, tool ETL | Unggah file template |

### Tiga jalur transisi S/4HANA (konteks H2 #5)
| Jalur | Inti | Data historis |
|---|---|---|
| Greenfield (new impl.) | Redesain proses dari nol | Hanya data esensial dimigrasikan |
| Brownfield (system conversion) | Konversi teknis sistem lama | Sebagian besar data & proses dipertahankan |
| Selective Data Transition (SDT) | Hibrida; pilih data/unit/proses | Migrasikan data terpilih (mis. shell conversion) |

## Edge cases & nuance

- **"ECC berakhir 2027" tidak berlaku untuk semua ECC.** Hanya SAP ERP 6.0 EhP 6/7/8 yang mendapat garis 2027; ECC tanpa EhP atau EhP 1–5 mainstream-nya sudah berakhir **31 Des 2025**. Tulis "hingga 2027 (untuk EhP 6–8), extended hingga 2030" — jangan generalisasi.
- **"LTMC" masih dipakai orang sebagai istilah sehari-hari**, tetapi teknis sudah deprecated. Aman: "Migration Cockpit (dulu diakses via transaksi LTMC, kini aplikasi Fiori 'Migrate Your Data')".
- **"Mock migration" bukan istilah resmi SAP.** Mekanisme resminya: **simulation/test run** di Migration Cockpit + **reconciliation** pasca-load. Aside brief ("minimal dua siklus mock migration") boleh sebagai praktik lapangan, bukan fitur bernama.
- **Reduksi 30–70% adalah rentang khas, bukan garansi.** Label sebagai "khas/typical menurut TJC Group", bukan angka pasti untuk setiap perusahaan.
- **Archiving ≠ decommissioning.** Archiving memindah data ke penyimpanan terpisah namun tetap dapat diakses/legal; decommissioning mematikan sistem sumber. Jangan campur.
- **Business Partner memaksa keputusan cleansing lebih awal** — konversi CVI kerap jadi titik gagal jika master data customer/vendor kotor. Ini jembatan alami ke internal link SAP Clean Core (master data bersih = inti standar).

## Flags (open factual risk)

- ⚠️1 **LTMC positioning**: Brief berulang menyebut "Migration Cockpit (LTMC)". **LTMC deprecated sejak S/4HANA 2021**; successor = app Fiori "Migrate Your Data". → Rekomendasi: writer WAJIB menyebut LTMC sebagai transaksi lama/deprecated dan menyebut nama app terkini. Sumber: help.sap.com (diakses 2026-07-07).
- ⚠️2 **Tanggal ECC**: 2027 hanya untuk EhP 6/7/8; jangan klaim "semua ECC berakhir 2027". Extended 2030 berbayar (+2%-poin). → Frasa hati-hati; atribusikan ke SAP resmi.
- ⚠️3 **"Mock migration" / "dua siklus"**: istilah praktisi, bukan fitur bernama SAP; "dua siklus" tidak berasal dari sumber resmi. → Sajikan sebagai praktik lapangan umum ("umumnya beberapa siklus uji coba"), jangan sebagai angka wajib yang bersumber.
- ⚠️4 **Angka T-shirt size / GB RISE**: detail memori spesifik (256GB/512GB/6144GB) bervariasi antar sumber komunitas dan bukan komitmen resmi tetap. → Jangan kutip GB persis; cukup jelaskan konsep tiering "T-shirt size" + memory extension. Konsep TCO/negosiasi RISE aman; angka jangan.
- ⚠️5 **Volume record / % penghematan spesifik perusahaan**: brief melarang mengarang angka. Reduksi 30–70% adalah rentang khas TJC Group — kutip sebagai rentang bersumber, bukan janji. Jangan mengarang jumlah record atau % penghematan biaya spesifik.

## Definition snippet draft (40–60 words)

> **Strategi migrasi data ERP ke cloud** adalah rencana terstruktur untuk memutuskan data mana yang dibersihkan, diarsip, dipensiunkan, lalu dimuat dan divalidasi saat berpindah ke ERP cloud seperti SAP S/4HANA. Tujuannya bukan mengangkut seluruh data, melainkan memindahkan data yang benar dalam kondisi bersih — karena data yang tidak siap adalah penyebab kegagalan cutover yang paling sering ditemui.
