---
brief_id: "employee-central-c01"
researcher_run_date: "2026-10-08"
sources_cited: 6
flags: 7
batch: "conditional-2026-10"
target_word_count: 1100
angle_hash: "sha1:12347a2814ea"
---

# Research Dossier: Employee Central SAP SuccessFactors: Fungsi dan Keunggulannya

## TL;DR for the writer

- **Definisi inti terverifikasi (SAP Learning resmi):** SAP menyebut Employee Central "the HR information system of the SAP SuccessFactors HCM suite" yang "provides a reliable, consistent system of record for global companies", dan Employee Central Core sebagai "the basis of the entire SAP SuccessFactors HCM solution". Jadi klaim "core HR / system of record" **aman** dan ber-sumber. **Catatan**: frasa "single source of truth" **tidak** muncul di halaman SAP tersebut — pakai SSOT sebagai konsep umum, jangan klaim "SAP menyebut SSOT".
- **Dua jenis data terkonfirmasi.** EC memisahkan **data karyawan** dari **data organisasi**. Data karyawan sendiri terbagi lagi: **Person data** (lepas dari pekerjaan: alamat, kewarganegaraan, tanggungan) vs **Employment data** (kode pekerjaan, jabatan, gaji). Data organisasi = **foundation objects**. Foundation data **wajib dibuat lebih dulu** karena record karyawan bergantung padanya — ini fakta kuat untuk FAQ #1 dan H2-2.
- **KOREKSI HALUS vs brief — hierarki foundation objects.** Hierarki organisasi yang benar menurut SAP = **Legal Entity → Business Unit → Division → Department (4 tingkat)**. **Location** ditautkan ke legal entity lewat **asosiasi** (bukan tingkat hierarki), dan **Cost Center "do not form part of the organizational hierarchy"**. **Position** adalah objek MDF berdiri sendiri yang membentuk **hierarki posisi** tersendiri. Tabel brief boleh dipakai sebagai "daftar foundation object + fungsi", tetapi JANGAN sebut Location/Cost Center/Position sebagai "tingkat" dalam hierarki 4-tingkat. Lihat Flag #2.
- **"5 nilai default dari Legal Entity" TERKONFIRMASI** (dua sumber SAP): legal entity menetapkan default **country, pay group, location, currency, dan standard hours** untuk karyawan di perusahaan itu, dan nilainya di-*propagate* ke Job/Compensation Information. Nuansa: standard hours butuh konfigurasi **propagation XML rule**, dan currency punya logika fallback. Aman memakai angka **5 nilai default**, atribusikan "menurut dokumentasi/materi SAP". Lihat Flag #3.
- **Effective dating persis seperti brief.** Saat record baru disisipkan, record lama **ditutup satu hari sebelum** tanggal berlaku record baru; record baru diberi tanggal akhir **31 Desember 9999**; tanggal bisa lampau/kini/mendatang. Pakai konvensi **31/12/9999** (bukan 1/1/9999). Terverifikasi SAP KBA + worked example.
- **EC Payroll** = modul **terpisah**; EC adalah **system of record wajib**-nya. Angka SAP (5 Des 2023): **50 locale native** (Yunani ditambah di rilis 2H) + **"over 800 legal changes" per tahun**. SAP memakai istilah **"legal changes"**, bukan "regulatory changes" — ikuti wording ini.
- **Cakupan negara/mata uang EC = HEDGE.** Sumber SAP sendiri tidak konsisten: materi pelatihan ">100 negara/wilayah, 47 bahasa, 166 mata uang"; halaman produk payroll "158 currencies, 34 languages, 80+ negara"; blog 2017 "84 negara". **Jangan patok angka tunggal.** Lihat Flag #1.

## Core facts (verified)

> **Claim**: Employee Central adalah core HR / HRIS / system of record di dalam suite SAP SuccessFactors.
> **Number/specific**: SAP: EC = "the HR information system of the SAP SuccessFactors HCM suite" yang "provides a reliable, consistent system of record for global companies"; EC Core = "the basis of the entire SAP SuccessFactors HCM solution".
> **Source**: SAP Learning resmi — "Exploring Employee Central" (learning.sap.com, course sap-successfactors-employee-central-core-administration), diakses 2026-10-08.
> **Confidence**: high (SAP official).

> **Claim**: EC memisahkan data karyawan dari data organisasi; data karyawan terbagi Person data vs Employment data.
> **Number/specific**: Person Data = informasi karyawan yang independen dari pekerjaan (alamat, kewarganegaraan, tanggungan). Employment Data = informasi yang terkait pekerjaan (kode pekerjaan, jabatan, gaji). Data organisasi disimpan sebagai **foundation objects**.
> **Source**: SAP Learning resmi ("Exploring Employee Central") + SAP Community blog (struktur organisasi), diakses 2026-10-08.
> **Confidence**: high.

> **Claim**: Foundation data (data organisasi) harus ada lebih dulu sebelum data karyawan dimuat.
> **Number/specific**: "Before adding any employee data to the system, corporate (foundation) data must be set up first. This is because employee records depend on this foundational information." Propagation rules lalu mengisi field karyawan dari foundation data otomatis (mengurangi error input).
> **Source**: SAP Learning / SAP Community blog, diakses 2026-10-08.
> **Confidence**: high.

> **Claim**: Hierarki organisasi foundation objects = Legal Entity → Business Unit → Division → Department (4 tingkat). Location & Cost Center di luar hierarki itu.
> **Number/specific**: Legal Entity = "the highest object that can be used in the organization hierarchy". Business Unit = area/lini bisnis (bukan geografis). Division = "a level of organization hierarchy lower than the Business Unit". Department = serupa division, bisa milik >1 division. **Location** ditautkan ke legal entity lewat asosiasi; **Cost Center** "do not form part of the organizational hierarchy".
> **Source**: SAP Learning resmi — "Introducing Foundation Objects" (learning.sap.com), diakses 2026-10-08.
> **Confidence**: high. **Nuansa penting — lihat Flag #2.**

> **Claim**: Legal Entity = badan hukum tempat karyawan dipekerjakan; terikat satu negara; objek tertinggi; tak bisa punya parent sejenis.
> **Number/specific**: "A Legal Entity represents a company as registered against country laws. It cannot span across more than one country." Negara yang di-assign menentukan field country-specific pada Job Information, Employment Details, dan Compensation Information.
> **Source**: SAP Learning resmi ("Introducing Foundation Objects"), diakses 2026-10-08.
> **Confidence**: high.

> **Claim**: Legal Entity menyediakan 5 nilai default bagi karyawan di perusahaan itu.
> **Number/specific**: "By default, a Legal Entity defines the country and default Pay Group, Location, currency, and standard hours for employees within that company." Nilai di-propagate ke Job/Compensation Information. Standard hours dikonfigurasi lewat **Propagation XML rule** (legal entity sebagai objek sumber); currency punya logika fallback (legal entity → negara).
> **Source**: SAP Learning + SAP KBA (via WebSearch terverifikasi), diakses 2026-10-08.
> **Confidence**: medium-high. 5 nilai default = terkonfirmasi; mekanisme standard hours & currency butuh konfigurasi/aturan (atribusikan "menurut dokumentasi SAP"). **Lihat Flag #3.**

> **Claim**: Position adalah objek Metadata Framework (MDF) yang effective-dated; parent position menentukan atasan langsung; membentuk Position Org Chart.
> **Number/specific**: "The Position object is an effective dated entity which has organization, job, and pay related fields." "Each position is linked with a parent position and incumbent of parent position becomes the direct manager." Posisi membentuk tree yang divisualkan di **Position Org Chart** (Position Hierarchy). Position = objek MDF, dikelola di **Configure Object Definitions**.
> **Source**: SAP Learning resmi ("Getting Started with Employee Central Position Management", "Configuring the Position Object") + SAP blog (2015), diakses 2026-10-08.
> **Confidence**: high.

> **Claim**: Position Management bersifat opsional.
> **Number/specific**: "A customer does not need to use Position Management in order to use the Position object." Saat manajer meninggalkan posisi, wizard meminta manajer baru untuk bawahan (default: manajer dari manajer yang keluar, masih bisa diedit).
> **Source**: SAP Learning / SAPinsider, diakses 2026-10-08.
> **Confidence**: high untuk "opsional"; detail wizard = medium (konsisten lintas sumber).

> **Claim**: Metadata Framework (MDF) adalah kerangka ekstensibilitas; sebagian foundation object berbasis MDF, sebagian XML.
> **Number/specific**: "Some of these objects are Metadata Framework (MDF) while others are XML-based." Objek MDF (mis. Position) dikonfigurasi di Configure Object Definitions: tampil/sembunyi field, label, field kustom, asosiasi, workflow/business rules.
> **Source**: SAP Learning resmi ("Exploring Employee Central", "Configuring the Position Object"), diakses 2026-10-08.
> **Confidence**: high. **JANGAN** kutip batas field kustom versi-spesifik (lihat Flag #6).

> **Claim**: Effective dating — record lama ditutup satu hari sebelum penggantinya; record baru bertanggal akhir 31/12/9999.
> **Number/specific**: "when you insert a new record, the end date of the previous record is automatically set to the day before the effective start date of the new record. And the new record is automatically assigned an end date of 12-31-9999." Tanggal berlaku bisa lampau/kini/mendatang; field non-effective-dated ditimpa (overwrite). Terminasi mengikuti offset satu hari yang sama.
> **Source**: SAP KBA Public + SAP Learning ("Modifying an Effective-Dated Record…"), diakses 2026-10-08.
> **Confidence**: high. Pakai konvensi 31/12/9999 (satu course menyebut 1/1/9999 — minoritas; lihat Flag #7).

> **Claim**: EC menyediakan Employee Self-Service (ESS) & Manager Self-Service (MSS).
> **Number/specific**: "The solution offers both employee and manager self-service." Permission berbasis peran; manajer bisa memulai aksi (promosi, terminasi) untuk bawahan; menu **Take Action** untuk update record, spot bonus, ubah benefit plan.
> **Source**: SAP Learning / aset ringkasan EC (via WebSearch), diakses 2026-10-08.
> **Confidence**: high untuk ESS/MSS & Take Action. **Mobile**: SuccessFactors punya aplikasi mobile sebagai kapabilitas umum platform; boleh sebut "web dan mobile" secara ringan, jangan over-spesifik per-fitur.

> **Claim**: HR events memakai event reason; workflow bisa diotomasi per event reason.
> **Number/specific**: "You can automate a workflow for each event reason." Mendukung import massal, mass changes, dan rule management.
> **Source**: SAP Learning / aset ringkasan EC, diakses 2026-10-08.
> **Confidence**: high.

> **Claim**: Employee Central Payroll adalah modul terpisah; EC = system of record wajibnya.
> **Number/specific**: "Employee Central is the mandatory system of record for SAP SuccessFactors Employee Central Payroll. Payroll-relevant data is either replicated to payroll or maintained in SAP SuccessFactors Employee Central using mashups."
> **Source**: SAP Learning / aset ringkasan EC, diakses 2026-10-08.
> **Confidence**: high.

> **Claim**: EC Payroll native mendukung 50 locale + SAP mengirim 800+ legal changes/tahun.
> **Number/specific**: "natively supports 50 locales across the globe" (Yunani ditambah di rilis 2H). "Each year we deliver over 800 legal changes." Istilah resmi SAP = **"legal changes"**.
> **Source**: SAP News Center — "SAP SuccessFactors Employee Central Payroll Natively Supports 50 Locales", news.sap.com/2023/12/..., **5 Desember 2023**, diakses 2026-10-08.
> **Confidence**: high (sudah terverifikasi di run artikel Juni; dipertahankan dengan atribusi + tanggal).

> **Claim**: Modul talenta dilisensikan terpisah di atas EC dan membaca data dari EC; EC bisa berdiri sebagai core HR mandiri.
> **Number/specific**: EC = fondasi berlisensi; modul talenta (Performance & Goals, Compensation, Recruiting, Onboarding, Learning, Succession & Development) ditagih terpisah. EC Payroll = satu-satunya ketergantungan keras (tidak bisa jalan tanpa EC). Modul lain bisa integrasi tapi sebagian bisa standalone.
> **Source**: EC-sebagai-fondasi = SAP (cuspera/learning); struktur lisensi = penasihat lisensi pihak ketiga (Redress Compliance, SAP Licensing Experts), diakses 2026-10-08.
> **Confidence**: medium. EC-as-foundation = SAP-backed (high); "dilisensikan terpisah" = tidak ada dokumen lisensi SAP resmi yang bisa dibuka → frasa "umumnya dilisensikan terpisah". **JANGAN** kutip harga/bundle. Lihat Flag #5.

> **Claim**: EC bisa direplikasi ke SAP S/4HANA (dua arah data induk karyawan/organisasi).
> **Number/specific**: Replikasi foundation object & data karyawan EC↔S/4HANA tersedia (prepackaged integration; mode web service, program ekstraksi khusus). (Sebut hanya sebagai **1 klausa** di body — jangan jelaskan apa itu S/4HANA.)
> **Source**: SAP Learning ("Replicating Foundation Object Data from SAP S/4HANA to Employee Central") + SAP Help integration doc (dari run Juni), diakses 2026-10-08.
> **Confidence**: high untuk keberadaan integrasi.

**Total verified claims: 15 blok** (17 fakta diskrit; melampaui ambang 12 — prioritaskan 8–12 terkuat untuk ~1100 kata).

## Solution focus + Soltius anchor (from product_matrix.md / company_profile.md)

> `employee central` = topik conditional (tak ada di `product_matrix.md`). Mapping diturunkan dari `company_profile.md` (Solution **Human Capital Management System**) + CTA anchor tracker (**SAP SuccessFactors**) + riset run ini.

| What to teach (SAP tech) | Facts to state accurately | Where in article | Soltius anchor |
|---|---|---|---|
| **SAP SuccessFactors Employee Central** (core HR / HRIS cloud, system of record) | Nama resmi di sebutan pertama. Mengelola data karyawan + data organisasi; fondasi yang dibaca modul talenta, EC Payroll, dan S/4HANA. | Lead + H2-1 | Solusi **Human Capital Management System (HCM)**; SAP Platinum Partner via United VARs (Metrodata Group, sejak 1998) |
| **Foundation objects + position management** | Hierarki 4 tingkat (Legal Entity→BU→Division→Department); Location/Cost Center via asosiasi; Position = objek MDF, parent position → atasan langsung. | H2-2 (tabel) — CTA/cousin mendarat di sini | — |
| **Effective dating + MDF + ESS/MSS** | Record lama ditutup H-1, bukan ditimpa; MDF untuk ekstensibilitas; ESS/MSS web & mobile. | H2-3 (keunggulan) | — |
| **Employee Central Payroll** | Modul terpisah; 50 locale + 800+ legal changes/tahun (SAP, Des 2023). | FAQ #3 | — |

Reminder framing: Soltius **mengimplementasikan & mendampingi** penataan Employee Central (foundation objects/struktur organisasi, migrasi master data, integrasi) — **bukan membuat** perangkat lunaknya. **Maks 2 self-mention** (1 positioning line di Kesimpulan + 1 soft website CTA baris terakhir). TANPA aside Soltius di tengah body (praktisi boleh tanpa nama Soltius).

## Internal links (TEPAT 2 — 1 hub + 1 cousin; keduanya diverifikasi live 2026-10-08)

1. **Hub (own, paling relevan — muara CTA)**: `https://www.soltius.co.id/solutions-by-products/reading/success-factors` — anchor natural: **"SAP SuccessFactors"** (= CTA anchor tracker). **Verifikasi run ini**: live, halaman produk SuccessFactors Soltius, "The Leader in Cloud Solutions for Human Resources"; menyebut Performance and Goals, Strategic Workforce Planning, Recruiting (+Onboarding), Compensation, Learning, Succession/Development. **Employee Central TIDAK disebut di halaman ini** → justru menguatkan nilai artikel sebagai penjelas EC. Halaman berbahasa Inggris (anchor tetap Bahasa Indonesia). Tempatkan inline di lead/awal body atau Kesimpulan.
2. **Cousin (live, paling relevan)**: `https://www.soltius.co.id/id/blog/panduan-implementasi-sap-successfactors` — anchor natural: **"panduan implementasi SAP SuccessFactors"**. **Verifikasi run ini**: live (ID), memakai metodologi **SAP Activate 6 fase** (Discover, Prepare, Explore, Realize, Deploy, Run) dan menyebut **"Employee Central sebagai tulang punggung utama"** di Phase 1 (Discover). **Fungsi dedup**: artikel ini menjelaskan *apa & bagaimana* EC bekerja; cousin menjelaskan *cara mengimplementasikannya* → body DILARANG mengulang fase/metodologi implementasi. Tempatkan inline di H2-2 (saat menyinggung penataan struktur organisasi perlu asesmen) atau di hedging H2-3.

> Hanya 2 link. TANPA link ketiga, TANPA "BACA JUGA". Sibling `sap-successfactors-modul-c01` (2026-06) belum live/belum di-commit → tidak ditautkan.

## Authoritative external sources (≥2 kuat, untuk tautan keluar writer)

1. **SAP Learning (resmi)** — `https://learning.sap.com/courses/sap-successfactors-employee-central-core-administration/exploring-employee-central` (+ "Introducing Foundation Objects") — *what it backs*: definisi core HR/system of record, pembagian Person/Employment data, foundation objects & hierarki, legal entity defaults. Atribusi "menurut dokumentasi SAP". **Citation utama** (halaman produk sap.com/products/hcm/employee-central-hris = **HTTP 403**, jangan dijadikan link hidup).
2. **SAP News Center** — `https://news.sap.com/2023/12/sap-successfactors-employee-central-payroll-supports-50-locales/` (5 Des 2023) — *what it backs*: EC Payroll 50 locale native + 800+ legal changes/tahun (dipakai di FAQ #3).
3. **SAP Learning — Position Management** — `https://learning.sap.com/courses/sap-successfactors-employee-central-position-management-academy/configuring-the-position-object_bf49ecbc-fe31-4909-ace8-202e8e5e5933` — *what it backs*: Position = objek MDF, parent position → atasan langsung, Position Org Chart (cadangan sitasi).

> Prioritas 1–2 sitasi inline: **SAP Learning (definisi/foundation objects)** + **SAP News Center (EC Payroll)**. Hindari outbound ke integrator SAP kompetitor (EPI-USE, Surety, dsb.) & materi non-resmi.

## FAQ Q&As (5 drafted, Bahasa Indonesia; 30–60 kata, tiap jawaban memuat 1 fakta)

### Apa bedanya data karyawan dan data organisasi di Employee Central?
Data karyawan adalah catatan per individu: person data (lepas dari pekerjaan, seperti alamat dan kewarganegaraan) dan employment data (jabatan, kode pekerjaan, gaji). Data organisasi adalah foundation objects bersama: legal entity, business unit, divisi, departemen, lokasi, cost center. Menurut dokumentasi SAP, data organisasi harus dibuat lebih dulu karena catatan karyawan bergantung padanya.

### Apa itu effective dating di Employee Central?
Effective dating adalah mekanisme data berbasis tanggal. Saat record baru dimasukkan, record lama otomatis ditutup satu hari sebelum tanggal berlaku record baru, dan record baru diberi tanggal akhir 31 Desember 9999. Tanggal berlaku bisa di masa lalu, kini, atau mendatang, sehingga riwayat tetap utuh dan dapat diaudit, bukan ditimpa.

### Apakah Employee Central sudah termasuk payroll?
Tidak otomatis. Penggajian ditangani modul terpisah, Employee Central Payroll, yang menjadikan Employee Central sebagai sistem pencatatan wajibnya. Menurut SAP (Desember 2023), EC Payroll secara native mendukung 50 locale dan menerima lebih dari 800 legal change setiap tahun; cakupan locale dapat berubah antar-rilis.

### Apakah Employee Central bisa dipakai tanpa modul talenta lain?
Bisa. Employee Central adalah core HR yang dapat berdiri sendiri sebagai fondasi data SDM. Modul talenta seperti Recruiting, Onboarding, Performance & Goals, Learning, dan Compensation umumnya dilisensikan terpisah dan ditambahkan bertahap sesuai prioritas, lalu membaca data induk dari Employee Central.

### Apa itu position management di Employee Central?
Position management mengelola posisi/jabatan sebagai objek tersendiri berbasis Metadata Framework (MDF) dan effective-dated. Setiap posisi dikaitkan ke satu posisi induk (parent position), dan pemegang posisi induk otomatis menjadi atasan langsung. Garis pelaporan dan Position Org Chart terbentuk dari hierarki posisi, bukan diinput manual. Fitur ini opsional.

## Data tables for the writer

### Tabel 1 — Foundation objects / struktur organisasi Employee Central (untuk H2-2; ekstraktabel)
| Objek fondasi | Fungsi dalam struktur organisasi | Contoh |
|---|---|---|
| **Legal Entity** | Badan hukum tempat karyawan dipekerjakan; objek tertinggi dalam hierarki organisasi; menjadi acuan default negara, pay group, lokasi, mata uang, dan jam kerja standar | PT Contoh Indonesia |
| **Business Unit** | Area/lini bisnis di bawah legal entity (berbasis fungsi/produk, bukan geografis) | Manufaktur, Distribusi |
| **Division** | Pembagian di bawah business unit; bisa bertingkat (punya parent division) | Operasi, Penjualan |
| **Department** | Unit kerja di bawah divisi; bisa milik lebih dari satu divisi | Payroll, Rekrutmen |
| **Location** | Alamat kantor fisik; ditautkan ke legal entity lewat asosiasi (di luar hierarki 4 tingkat) | Kantor Pusat Jakarta |
| **Cost Center** | Tempat biaya karyawan dibebankan di payroll & finance; bukan bagian hierarki organisasi | CC-Payroll-01 |
| **Position** | Objek MDF effective-dated; parent position menentukan atasan langsung; membentuk Position Org Chart | Manajer Payroll |

> **Catatan akurasi WAJIB untuk writer**: hierarki organisasi inti = **Legal Entity → Business Unit → Division → Department (4 tingkat)**. **Location**, **Cost Center**, dan **Position** berada DI LUAR hierarki 4 tingkat itu (Location & Position ditautkan lewat asosiasi; Cost Center "do not form part of the organizational hierarchy"; Position membentuk hierarki posisi tersendiri). Angka "hierarki 4 tingkat" + "5 nilai default dari Legal Entity" = angka E-E-A-T yang aman.

### Tabel 2 — Dua jenis data di Employee Central (opsional, untuk H2-1 atau FAQ #1)
| Jenis data | Isi | Sifat | Contoh |
|---|---|---|---|
| **Data karyawan — Person data** | Informasi individu lepas dari pekerjaan | Per individu | Alamat, kewarganegaraan, tanggungan |
| **Data karyawan — Employment data** | Informasi terkait pekerjaan | Per individu, effective-dated | Jabatan, kode pekerjaan, gaji |
| **Data organisasi — Foundation objects** | Struktur bersama yang dipakai banyak karyawan | Dibuat lebih dulu; effective-dated | Legal entity, business unit, divisi, departemen |

## Edge cases & nuance

- **Hierarki ≠ semua foundation object.** Kesalahan umum: menyebut Location/Cost Center/Position sebagai "tingkat" dalam hierarki organisasi. Faktanya hanya Legal Entity→BU→Division→Department yang berjenjang; sisanya ditautkan lewat asosiasi/berhierarki sendiri. (Flag #2.)
- **"Default" ≠ paksa.** Nilai dari Legal Entity bersifat default/baseline yang di-propagate; standard hours butuh propagation XML rule, currency punya fallback. Tulis "menjadi acuan default", bukan "mengunci".
- **Granularitas org EC vs SAP ERP HCM on-premise berbeda** (forward-looking/hedge untuk H2-3): pemetaan objek EC ke konsep HCM klasik (legal entity≈company code, division/department≈organizational unit, location≈personnel area/subarea, cost center≈cost center) tidak satu-ke-satu, sehingga kebutuhan struktur & master data **perlu diasesmen sebelum migrasi**. Maks 2 kalimat, TANPA fase/metodologi/timeline (milik halaman cousin).
- **"Di lapangan…" (sinyal pengalaman, tanpa nama Soltius, tanpa angka klien)**: migrasi SuccessFactors paling sering tersandung oleh master data & struktur organisasi yang belum rapi, bukan oleh fiturnya. Aman sebagai framing E-E-A-T.
- **JANGAN petakan ulang semua modul SuccessFactors** (milik artikel Juni) dan **JANGAN komparasi vs HRIS lokal** (milik artikel Agustus). Modul lain hanya sebagai penerima data dari EC.

## Flags (open factual risk)

- ⚠️ **Flag #1 — Cakupan negara/mata uang EC (HEDGE WAJIB)**: sumber SAP tidak konsisten — materi pelatihan ">100 negara/wilayah, 47 bahasa, 166 mata uang"; halaman produk payroll "158 currencies, 34 languages, 80+ negara"; blog 2017 "84 negara". → **Rekomendasi**: tulis "dukungan lokalisasi di banyak negara/wilayah (menurut materi SAP, lebih dari 100)" ATAU pakai angka EC Payroll terverifikasi (50 locale, SAP Des 2023). JANGAN patok satu angka mata uang.
- ⚠️ **Flag #2 — Hierarki foundation objects (KOREKSI vs tabel brief)**: Location, Cost Center, Position BUKAN tingkat hierarki organisasi 4-tingkat. → **Rekomendasi**: tabel boleh memuat ketujuh objek + fungsi, tetapi narasi + caption harus menegaskan hierarki inti = Legal Entity→BU→Division→Department; sisanya asosiasi/hierarki tersendiri.
- ⚠️ **Flag #3 — "5 nilai default dari Legal Entity"**: terkonfirmasi (country, pay group, location, currency, standard hours), tetapi halaman "Introducing Foundation Objects" tunggal tidak melistnya; berasal dari materi SAP lain + KBA; standard hours butuh propagation rule. → **Rekomendasi**: aman pakai "5 nilai default", atribusikan "menurut dokumentasi SAP", hindari klaim mekanis yang over-spesifik.
- ⚠️ **Flag #4 — "legal changes" vs "regulatory changes"**: SAP menulis **"over 800 legal changes"**. → **Rekomendasi**: pakai "lebih dari 800 legal change (perubahan ketentuan hukum) per tahun", atribusi SAP Des 2023.
- ⚠️ **Flag #5 — Lisensi modul talenta terpisah**: tidak ada dokumen lisensi SAP resmi yang bisa dibuka; framing dari penasihat lisensi pihak ketiga. EC-as-foundation = SAP-backed. → **Rekomendasi**: "modul talenta umumnya dilisensikan terpisah dan ditambahkan bertahap"; JANGAN kutip harga/bundle; JANGAN klaim status locale Indonesia.
- ⚠️ **Flag #6 — Batas field kustom Position (versi-spesifik)**: course menyebut 30 String/55 Number/20 Decimal/15 Date, dilabeli "current, check your release". → **Rekomendasi**: JANGAN masukkan angka ini (berubah antar-rilis); cukup sebut Position = objek MDF yang bisa diperluas dengan field kustom.
- ⚠️ **Flag #7 — Placeholder tanggal akhir effective dating**: KBA & worked example SAP pakai **31/12/9999**; satu course menyebut 1/1/9999 (minoritas). → **Rekomendasi**: pakai 31 Desember 9999.

## Definition snippet draft (40–60 kata; SEKALI, jangan diulang di body/H2/FAQ)

> Secara singkat, Employee Central adalah modul inti (core HR) berbasis cloud dalam suite SAP SuccessFactors yang berfungsi sebagai sistem pencatatan tunggal (system of record) untuk data karyawan sekaligus data organisasi. Modul talenta lain dan sistem seperti SAP S/4HANA membaca data induk dari sini, sehingga seluruh fungsi SDM berjalan di atas satu sumber data yang sama.

*(55 kata; tanpa em-dash agar jatah em-dash body tetap utuh; akronim core HR/system of record/SDM di-expand di sini saja — JANGAN diulang di body/H2/FAQ.)*

## Catatan untuk orchestrator / writer

- Ini **tahap-1** (dossier). Tahap berikut (writer → editor → validator → .docx) belum dijalankan untuk artikel ini.
- Target 1100 kata; 0 image placeholder; definisi SEKALI; 3–4 H2 (H2-1 question "fondasi"; H2-2 tabel struktur organisasi + cousin link; H2-3 question "keunggulan" + hedging); FAQ 5; sitasi SAP Learning + SAP News Center; Soltius maks 2 mention; em-dash ≤2.
- **Angka E-E-A-T inline aman (≥5)**: 2 jenis data; hierarki 4 tingkat (Legal Entity→BU→Division→Department); 5 nilai default dari Legal Entity; ≥6 modul/sistem penerima data (Recruiting, Onboarding, Performance & Goals, Learning, Compensation, Succession, + EC Payroll + S/4HANA); EC Payroll 50 locale + 800+ legal changes/tahun (SAP, Des 2023). Cakupan negara/mata uang = HEDGE.
- **Pertanyaan koordinasi untuk user** (user minta ditanyai) diteruskan via laporan orchestrator — topik HR batch ini bertumpuk (row 3 EC, row 4 HCM, row 9 KPI karyawan); urutan publish idealnya EC/HCM dulu sebelum KPI agar internal-linking antar-sibling rapi. Lihat ringkasan run.
