---
brief_id: "low-code-platform-04"
researcher_run_date: "2026-06-02"
sources_cited: 14
flags: 4
---

# Research Dossier: Risiko Low-Code Platform yang Jarang Dibahas: Keamanan Data, Shadow IT, dan Vendor Lock-In

## TL;DR for the writer

- **Angle utama**: Artikel ini adalah satu-satunya dalam kluster low-code yang membahas risiko secara jujur — bukan promosi platform. Tone: "advisory dari konsultan berpengalaman", bukan marketing.
- **UU PDP Indonesia** (UU No. 27 Tahun 2022) resmi berlaku penuh sejak Oktober 2024 (masa transisi 2 tahun dari tanggal pengesahan 17 Oktober 2022). Sanksi administratif bisa mencapai 2% dari pendapatan tahunan perusahaan — ini adalah angka konkret yang bisa dikutip langsung.
- **SAP Build di BTP** memiliki audit logging built-in (Audit Log Service BTP dengan default retention 90 hari), role-based access control via Role Collections, dan approval workflow di Build Process Automation — ini adalah fitur governance yang membedakan dari platform low-code generik.
- **Shadow IT dan vendor lock-in** adalah risiko nyata dan terdokumentasi; angka "30–40% IT spend via shadow IT" dan "12% IT dept memenuhi permintaan" harus dilabeli medium confidence karena tidak ditemukan sumber primer spesifik — writer harus framing sebagai "riset industri memperkirakan" bukan angka pasti.
- **IBM statistic "97% breach melibatkan sistem tanpa proper access control"** — TIDAK DAPAT diverifikasi ke sumber IBM Security 2025 yang spesifik; writer harus dihapus atau diganti dengan statistic IBM yang lebih mudah diverifikasi (IBM Cost of Data Breach Report 2024: rata-rata biaya breach $4,88 juta global).

---

## Core facts (verified)

> **Claim**: UU Perlindungan Data Pribadi (UU PDP) Indonesia resmi berlaku penuh dengan sanksi efektif mulai Oktober 2024.
> **Number/specific**: UU No. 27 Tahun 2022 disahkan 17 Oktober 2022; masa transisi dua tahun; seluruh ketentuan termasuk sanksi administratif berlaku penuh sejak Oktober 2024. Sanksi administratif: denda hingga 2% dari pendapatan tahunan perusahaan + peringatan tertulis + penghentian sementara kegiatan pemrosesan + penghapusan data pribadi. Sanksi pidana untuk pelanggaran serius (penjualan data ilegal).
> **Source**: BPK Peraturan — UU No. 27 Tahun 2022 (peraturan.bpk.go.id/Details/229798/uu-no-27-tahun-2022); JDIH Komdigi (jdih.komdigi.go.id); Untar Faculty of Law analysis (fh.untar.ac.id, Sep 2025)
> **Confidence**: high

> **Claim**: UU PDP berlaku ekstrateritorial — mengikat penyelenggara luar negeri yang memproses data warga Indonesia, mirip cakupan GDPR Eropa.
> **Number/specific**: Prinsip ekstrateritorial ini dikonfirmasi dalam analisis akademik UU PDP; implikasinya adalah bahwa platform low-code cloud luar negeri yang memproses data karyawan/pelanggan Indonesia pun terikat UU PDP.
> **Source**: Untar Faculty of Law — "Implementasi UU No. 27 Tahun 2022 dan Tantangan Penegakannya" (fh.untar.ac.id, Sep 2025)
> **Confidence**: high

> **Claim**: SAP BTP Audit Log Service mencatat akses data, perubahan konfigurasi, dan aksi pengguna secara built-in dengan default retention 90 hari.
> **Number/specific**: BTP Audit Log berfungsi sebagai sumber utama security events; dapat diintegrasikan dengan sistem eksternal via pull-based Audit Log Retrieval API atau push-based SAP Alert Notification Service untuk notifikasi real-time. Audit Logging juga tersedia spesifik di SAP Build Process Automation (help.sap.com/docs/build-process-automation).
> **Source**: Layer Seven Security — "Security Logging and Alerting for SAP BTP" (layersevensecurity.com); SAP Help Portal — "Audit Logging — SAP Build Process Automation" (help.sap.com/docs/build-process-automation/sap-build-process-automation/audit-logging)
> **Confidence**: high

> **Claim**: SAP BTP menggunakan Role Collections (kelompok role berdasarkan fungsi jabatan) sebagai mekanisme Role-Based Access Control (RBAC).
> **Number/specific**: Best practice SAP BTP 2025 mengelompokkan role ke dalam role collections berdasarkan job function/responsibility; high-privileged accounts harus dipisahkan dan diaudit aktif; segregation of duties wajib diterapkan.
> **Source**: 2i Solutions — "SAP BTP Governance & Security Best Practices for Enterprises in 2026" (2isolutionsus.com/blog); SAP Basis Solutions — "SAP BTP Role Management and Best Practices for 2025" (sapbasissolutions.com)
> **Confidence**: high

> **Claim**: SAP Build Process Automation memiliki fitur approval workflow built-in yang memungkinkan IT mengontrol proses yang dibangun citizen developer.
> **Number/specific**: Fitur ini memungkinkan alur kerja dengan human-in-the-loop approval; integrasi antara sistem SAP dan non-SAP didukung.
> **Source**: SAP Help Portal — SAP Build Process Automation documentation (help.sap.com); low-code-platform-01.dossier.md (verified per 2026-06-02)
> **Confidence**: high

> **Claim**: Shadow IT — penggunaan aplikasi/teknologi tanpa persetujuan IT — meningkat seiring adopsi low-code platform oleh tim bisnis yang tidak sabar dengan IT backlog.
> **Number/specific**: ISACA mendokumentasikan fenomena "Shadow AI" dan "Shadow IT" sebagai risiko enterprise yang makin besar di 2025; low-code yang tidak dikelola diklasifikasikan sebagai bentuk modern shadow IT.
> **Source**: ISACA — "From Shadow IT to Shadow AI: Navigating the New Frontier of Enterprise Risk" (isaca.org/resources/news-and-trends/newsletters/atisaca/2025/volume-19/from-shadow-it-to-shadow-ai-navigating-the-new-frontier-of-enterprise-risk)
> **Confidence**: high (ISACA adalah otoritas IT governance; tapi angka spesifik % IT spend via shadow IT belum terkonfirmasi dari sumber primer — lihat Flags)

> **Claim**: Vendor lock-in dalam konteks low-code platform mengacu pada kesulitan migrasi aplikasi ke platform lain akibat ketergantungan pada proprietary logic, API, atau data format platform tersebut.
> **Number/specific**: Evaluasi lock-in mencakup: (a) portabilitas data — apakah data bisa diekspor dalam format standar? (b) portabilitas logic — apakah workflow bisa dimigrasi atau harus dibangun ulang? (c) switching cost — biaya waktu dan uang untuk pindah platform.
> **Source**: Panorama Consulting — "Low-Code Platforms & The Collapse of Process Governance" (panorama-consulting.com/the-new-shadow-it-low-code-platforms/); domain expertise
> **Confidence**: medium-high (framework evaluasi berdasarkan best practice industri yang terdokumentasi)

> **Claim**: SAP BTP menjamin data ownership tetap di tenant customer, terpisah dari hosting SAP.
> **Number/specific**: Data residency di SAP BTP adalah pilihan customer berdasarkan data center region; SAP BTP tersedia di multiple regions termasuk Asia Pacific. Namun untuk Indonesia secara spesifik, ketersediaan data center lokal perlu dikonfirmasi terpisah (lihat Flags).
> **Source**: 2i Solutions — "SAP BTP Governance & Security Best Practices" (2isolutionsus.com); SAP BTP documentation
> **Confidence**: medium (data ownership claim dikonfirmasi umum; data center Indonesia spesifik — flagged)

> **Claim**: IBM Cost of Data Breach Report 2024 melaporkan rata-rata biaya pelanggaran data global sebesar $4,88 juta.
> **Number/specific**: $4,88 juta per breach (2024), naik dari $4,45 juta di 2023 — kenaikan 10% YoY. Laporan ini mencakup biaya deteksi, notifikasi, respons, dan dampak bisnis.
> **Source**: IBM Security — "Cost of a Data Breach Report 2024" (ibm.com/reports/data-breach); merupakan laporan tahunan IBM Security yang dikerjakan bersama Ponemon Institute
> **Confidence**: high (laporan resmi IBM/Ponemon; angka $4,88 juta 2024 adalah angka yang paling banyak dikutip dari laporan ini)

> **Claim**: Technical debt tersembunyi adalah risiko nyata dari low-code deployment tanpa governance — aplikasi yang dibangun citizen developer seringkali tidak terdokumentasi, tidak terawat, dan sulit diaudit.
> **Number/specific**: Fenomena ini terdokumentasi di Panorama Consulting dan ISACA sebagai salah satu risiko governance utama low-code; aplikasi "orphan" (tanpa pemilik jelas) bisa membuat audit dan security review menjadi sangat sulit.
> **Source**: Panorama Consulting (panorama-consulting.com); ISACA (isaca.org); TCS white paper on low-code security (tcs.com/what-we-do/industries/high-tech/white-paper/low-code-platform-mitigate-data-security-threats)
> **Confidence**: high

> **Claim**: Pasal-pasal UU PDP yang relevan untuk aplikasi bisnis low-code mencakup kewajiban pemrosesan data berdasarkan persetujuan eksplisit, kewajiban notifikasi kebocoran data, dan kewajiban Data Protection Officer (DPO) untuk kategori tertentu.
> **Number/specific**: Kewajiban utama operator data: (1) memproses data hanya untuk tujuan yang dinyatakan dengan persetujuan; (2) memberikan notifikasi kebocoran dalam waktu yang ditentukan; (3) menerapkan safeguard teknis dan organisasi. Pelanggaran: sanksi administratif hingga 2% pendapatan tahunan.
> **Source**: UU No. 27 Tahun 2022 tentang Perlindungan Data Pribadi (teks resmi via JDIH Komdigi); Sustain.id — "Empat Perbuatan Yang Dilarang berdasarkan UU PDP" (sustain.id, Jan 2024)
> **Confidence**: high

> **Claim**: SAP BTP pada akhir 2025 memperkenalkan SAP Key Management Service untuk kontrol customer atas enkripsi data mereka di seluruh layanan SAP cloud.
> **Number/specific**: Fitur ini diluncurkan Q4 2025; termasuk juga quantum-safe cryptography dan updated compliance certifications untuk SAP Cryptographic Library — menunjukkan komitmen SAP terhadap keamanan data enterprise.
> **Source**: 2i Solutions — "SAP BTP Governance & Security Best Practices for Enterprises in 2026" (2isolutionsus.com, 2026)
> **Confidence**: medium (dikutip dari sumber sekunder berbasis BTP documentation; perlu konfirmasi dari SAP official jika digunakan sebagai klaim utama)

> **Claim**: Pasar low-code platform global diproyeksikan mencapai $37,39 miliar pada 2025 dan sekitar $48,91 miliar pada 2026 (pertumbuhan sekitar 30% YoY).
> **Number/specific**: Angka ini beredar luas di berbagai laporan pasar; sering dikaitkan dengan Gartner dan/atau integrate.io.
> **Source**: Disebutkan di brief strategist (2026-06-02) dengan referensi integrate.io dan Gartner; dossier low-code-platform-01 mencatat angka Gartner $44,5B 2026 dari secondary sources
> **Confidence**: medium (terdapat variasi angka antar sumber; berbagai firm analis memiliki proyeksi berbeda; lihat Flags)

> **Claim**: Federated governance model — di mana IT menetapkan guardrails dan standar, sementara tim bisnis bebas membangun dalam batas tersebut — adalah pendekatan yang direkomendasikan untuk mengelola citizen developer di enterprise.
> **Number/specific**: Model ini memisahkan "governance layer" (IT: keamanan, compliance, integrasi) dari "build layer" (tim bisnis: kecepatan, inovasi) — SAP Build di BTP mendukung ini via role collections dan approval workflow.
> **Source**: ISACA Shadow IT/Shadow AI guidance (isaca.org, 2025); 2i Solutions BTP Governance guide (2026); Panorama Consulting analysis
> **Confidence**: high (konsep diverifikasi dari multiple authoritative sources)

> **Claim**: Compliance terhadap UU PDP relevan untuk setiap aplikasi low-code yang memproses data pribadi karyawan atau pelanggan — termasuk aplikasi HR, ticketing layanan pelanggan, dan form pengumpulan data.
> **Number/specific**: "Data pribadi" dalam UU PDP mencakup nama, nomor identifikasi, lokasi, data biometrik, data kesehatan, data keuangan — semua ini berpotensi diproses oleh aplikasi bisnis low-code.
> **Source**: UU No. 27 Tahun 2022 Pasal 4 (definisi data pribadi); JDIH Kota Semarang — artikel UU PDP (jdih.semarangkota.go.id)
> **Confidence**: high

---

## Solution focus + Soltius anchor (from product_matrix.md)

| Apa yang diajarkan (SAP/partner tech) | Fakta yang harus dinyatakan akurat | Penempatan dalam artikel | Soltius anchor / CTA |
|---|---|---|---|
| SAP Build governance features (RBAC, Audit Log, Approval Workflow) | Role Collections di BTP; Audit Log retention 90 hari default; Build Process Automation punya approval workflow; SAP Key Management Service (Q4 2025) | H2 #3 (Shadow IT) dan H2 #4 (Vendor Lock-In) | Digital Platform + Implementation |
| SAP BTP data residency + UU PDP compliance | Data ownership di customer tenant; BTP tersedia di multiple regions Asia Pacific; UU PDP berlaku penuh Oktober 2024 | H2 #5 (Checklist Keamanan) | Digital Platform + Implementation |
| UU PDP Indonesia (No. 27/2022) | Berlaku penuh Oktober 2024; sanksi 2% pendapatan; kewajiban notifikasi; ekstrateritorial | H2 #5 (Checklist point #6) | (informatif — bukan Soltius anchor tapi relevan governance) |
| Federated governance model | IT sets guardrails; bisnis builds; SAP Build mendukung secara teknis | H2 #3 + kesimpulan | "Soltius membantu perusahaan merancang framework governance..." |

**Soltius anchor CTA (paraphrased, 1 variasi untuk closing):**
"Sebagai SAP Platinum Partner, Soltius Indonesia tidak hanya membantu perusahaan mengimplementasikan SAP Build di atas SAP BTP, tetapi juga merancang framework governance yang memastikan program citizen developer berjalan secara aman dan patuh sejak hari pertama."

**Optional mid-article mention (H2 checklist):**
"Assessment kesiapan governance ini — termasuk pemetaan risiko dan mapping compliance UU PDP — dapat dilakukan bersama mitra implementasi SAP yang berpengalaman."

---

## Authoritative external sources (≥2 strong, untuk writer kutip)

1. **ISACA — "From Shadow IT to Shadow AI" (2025)** — https://www.isaca.org/resources/news-and-trends/newsletters/atisaca/2025/volume-19/from-shadow-it-to-shadow-ai-navigating-the-new-frontier-of-enterprise-risk — *mendukung*: Shadow IT sebagai risiko enterprise yang makin kritis; low-code tanpa governance = modern shadow IT
2. **UU No. 27 Tahun 2022 tentang Perlindungan Data Pribadi (JDIH Komdigi)** — https://jdih.komdigi.go.id/produk_hukum/view/id/832/t/undangundang+nomor+27+tahun+2022 — *mendukung*: regulasi resmi Indonesia yang mengatur compliance data; berlaku penuh Oktober 2024; sanksi 2% pendapatan tahunan
3. **IBM Cost of Data Breach Report 2024** — https://www.ibm.com/reports/data-breach — *mendukung*: biaya breach $4,88 juta rata-rata global 2024; justifikasi finansial untuk investasi governance
4. **SAP Help Portal — Audit Logging, SAP Build Process Automation** — https://help.sap.com/docs/build-process-automation/sap-build-process-automation/audit-logging — *mendukung*: SAP Build memiliki audit logging built-in; referensi teknis untuk klaim governance SAP Build
5. **TCS Low-Code Security White Paper** — https://www.tcs.com/what-we-do/industries/high-tech/white-paper/low-code-platform-mitigate-data-security-threats — *mendukung*: analisis risiko keamanan low-code dari perspektif enterprise; technical debt dan shadow IT sebagai risiko nyata

---

## FAQ Q&As (7 draft, Bahasa Indonesia)

### Apakah low-code platform aman untuk data sensitif perusahaan?

Keamanan data di platform low-code sangat bergantung pada bagaimana platform tersebut dikelola, bukan semata-mata fitur bawaannya. Platform enterprise-grade seperti SAP Build di atas SAP BTP menyediakan role-based access control, audit logging (default 90 hari retensi), dan enkripsi data. Namun tanpa framework governance yang jelas — siapa boleh mengakses data apa, aplikasi mana yang boleh dibangun, dan bagaimana proses approval-nya — platform paling canggih sekalipun bisa menjadi titik lemah keamanan.

### Apa perbedaan shadow IT dan citizen development yang terstruktur?

Shadow IT terjadi ketika tim bisnis membuat atau menggunakan aplikasi tanpa sepengetahuan atau persetujuan departemen IT. Citizen development yang terstruktur adalah kebalikannya: tim bisnis membangun aplikasi *dalam batas yang ditetapkan IT* — platform yang disetujui, standar keamanan yang jelas, dan proses approval yang terdokumentasi. ISACA (2025) mendokumentasikan shadow IT sebagai salah satu risiko governance enterprise terbesar saat ini; citizen development yang dikelola justru menjadi solusinya, bukan sumber masalah.

### Bagaimana mencegah vendor lock-in saat memilih low-code platform?

Evaluasi vendor lock-in sebelum implementasi dimulai dengan tiga pertanyaan utama: (1) Apakah data dapat diekspor dalam format standar (CSV, JSON, API terbuka)? (2) Apakah logika workflow dapat dimigrasi atau harus dibangun ulang dari nol? (3) Berapa estimasi biaya (waktu + uang) jika harus pindah platform dalam 3–5 tahun? Untuk perusahaan yang sudah dalam ekosistem SAP, SAP Build di BTP memiliki switching cost yang perlu dievaluasi secara sadar — bukan secara buta diterima, tapi juga bukan alasan untuk tidak adopsi.

### Apakah SAP Build aman untuk data enterprise?

SAP Build dibangun di atas SAP Business Technology Platform (BTP) yang menyertakan kontrol keamanan enterprise-grade: Role Collections untuk RBAC (role-based access control), Audit Log Service dengan retensi default 90 hari yang dapat diintegrasikan ke SIEM eksternal, approval workflow di Build Process Automation, dan SAP Key Management Service (diluncurkan Q4 2025) untuk kontrol enkripsi data di sisi customer. Data ownership tetap di tenant customer, bukan di infrastruktur SAP secara umum.

### Apa regulasi Indonesia yang relevan untuk keamanan data di low-code platform?

Undang-Undang No. 27 Tahun 2022 tentang Perlindungan Data Pribadi (UU PDP) adalah regulasi utama yang relevan. Berlaku penuh sejak Oktober 2024 setelah masa transisi dua tahun. Setiap aplikasi low-code yang memproses data pribadi — nama, nomor identifikasi, data keuangan, atau data kesehatan karyawan/pelanggan — harus memenuhi kewajiban UU PDP: persetujuan eksplisit, notifikasi kebocoran, dan safeguard teknis. Pelanggaran dikenai sanksi administratif hingga 2% dari pendapatan tahunan perusahaan.

### Bagaimana cara mengaudit aplikasi yang dibangun dengan low-code?

Audit aplikasi low-code mencakup empat dimensi: (1) Inventarisasi — daftar semua aplikasi yang ada, siapa yang membuatnya, dan data apa yang diakses; (2) Access review — siapa saja yang memiliki akses ke aplikasi dan data terkait; (3) Audit trail — apakah platform mencatat log aktivitas yang cukup untuk investigasi insiden? SAP BTP Audit Log Service menyediakan ini; (4) Lifecycle review — apakah ada aplikasi "orphan" tanpa pemilik aktif yang perlu dinonaktifkan? Tanpa proses audit berkala, technical debt tersembunyi akan menumpuk.

### Kapan harus melibatkan tim keamanan IT sebelum deploy low-code platform?

Sejak awal — idealnya pada tahap pemilihan platform, sebelum ada aplikasi yang dibuat. Tim keamanan IT perlu terlibat dalam: (a) evaluasi fitur security platform (RBAC, audit log, enkripsi, data residency); (b) mapping compliance UU PDP dan regulasi industri yang berlaku; (c) perancangan governance model (siapa bisa membangun apa); dan (d) penyusunan incident response plan. Keterlibatan tim keamanan setelah deployment berjalan jauh lebih mahal — baik dari segi waktu remediasi maupun risiko yang sudah terlanjur terekspos.

---

## Data tables for the writer

### Matriks Risiko Low-Code Platform Enterprise

| Risiko | Dampak Potensial | Tanda Peringatan | Mitigasi |
|---|---|---|---|
| **Shadow IT** | Data tidak terproteksi; aplikasi tanpa backup; compliance gaps | Tim bisnis membuat aplikasi sendiri tanpa notifikasi IT | Governed low-code platform dengan approval workflow; federated governance model |
| **Vendor Lock-In** | Sulit migrasi; biaya tinggi jika vendor naikkan harga atau hentikan support | Logic bisnis seluruhnya dikodekan dalam format proprietary vendor | Evaluasi portabilitas data dan logic sebelum kontrak; pilih platform berbasis open standards |
| **Data Security Gap** | Akses tidak sah ke data sensitif; pelanggaran UU PDP (sanksi 2% pendapatan) | Citizen developer dapat akses tabel database produksi langsung; tidak ada role separation | Role-based access control; data classification; audit log aktif |
| **Technical Debt Tersembunyi** | Aplikasi tidak terawat; tidak bisa diaudit; kerentanan security tidak tertangani | Aplikasi "orphan" tanpa pemilik jelas; tidak ada dokumentasi versi | App lifecycle management; mandatory documentation; periodic audit inventory |

### Checklist Keamanan Sebelum Deploy Low-Code Platform

| # | Item Checklist | Keterangan |
|---|---|---|
| 1 | Role-Based Access Control (RBAC) | Siapa boleh membangun, siapa boleh mengakses data apa |
| 2 | Data classification dan access tiering | Data mana yang sensitif; siapa levelnya yang boleh diakses |
| 3 | Audit trail untuk setiap aplikasi | Log aktivitas user; integrasi ke SIEM jika perlu |
| 4 | Approval workflow untuk app baru | IT harus review sebelum app masuk produksi |
| 5 | Backup dan disaster recovery plan | Aplikasi low-code perlu dicakup oleh DR plan enterprise |
| 6 | Compliance mapping UU PDP Indonesia | Setiap app yang menyentuh data pribadi harus comply No. 27/2022 |
| 7 | Exit strategy evaluasi vendor | Portabilitas data dan logic; estimasi switching cost |
| 8 | Incident response plan | Prosedur jika aplikasi low-code terlibat dalam insiden keamanan |

---

## Edge cases & nuance

- **Tidak semua vendor lock-in itu buruk**: Untuk perusahaan yang sudah fully invested di ekosistem SAP, SAP Build di BTP adalah pilihan yang rasional — switching cost-nya diimbangi oleh integrasi native dengan S/4HANA, data governance yang konsisten, dan satu vendor untuk dukungan. Yang penting adalah keputusan ini dibuat secara *sadar* dengan evaluasi yang jelas, bukan karena terjebak tanpa evaluasi.

- **Shadow IT bukan hanya masalah low-code**: Low-code mempercepat fenomena yang sudah ada — tim bisnis sudah menggunakan spreadsheet Excel kompleks, Google Forms, atau Zapier tanpa sepengetahuan IT jauh sebelum low-code platform hadir. Low-code hanya membuat shadow IT lebih powerful dan lebih berbahaya jika tidak dikelola.

- **UU PDP masih dalam tahap penegakan awal**: Per Juni 2026, UU PDP sudah berlaku penuh sejak Oktober 2024, tapi regulasi turunan (Peraturan Pemerintah) masih terus berkembang. Perusahaan harus memantau perkembangan regulasi turunan yang mengatur detail teknis pelaksanaan.

- **Angka market size (low-code $37,39B / $44,5B / $48,91B)**: Berbagai firma analis (Gartner, IDC, MarketsandMarkets) memiliki proyeksi yang berbeda untuk market size low-code platform global. Writer sebaiknya menggunakan satu angka dengan atribusi jelas ("menurut proyeksi [firma analis]...") daripada menyebut angka tanpa sumber.

- **SAP BTP data center Indonesia**: Pertanyaan apakah SAP BTP memiliki data center di Indonesia (relevan untuk data residency UU PDP) belum dapat dikonfirmasi dari sumber yang diakses dalam dossier ini. Ini adalah flag kritis untuk compliance claim.

---

## Flags (open factual risk)

- ⚠️ **Angka "97% breach melibatkan sistem tanpa proper access control" (IBM 2025)**: Brief strategist mencantumkan angka ini, tapi tidak dapat diverifikasi ke laporan IBM Security 2025 yang spesifik. Laporan IBM yang terverifikasi adalah "Cost of a Data Breach Report 2024" ($4,88 juta rata-rata per breach). → **Rekomendasi**: Hapus angka 97% atau ganti dengan angka IBM 2024 yang terverifikasi ($4,88 juta). Jangan kutip angka tanpa sumber yang dapat ditelusuri.

- ⚠️ **Angka "30–40% IT spend enterprise via shadow IT"**: Angka ini beredar di banyak artikel industri tapi tidak dapat dikonfirmasi ke satu laporan primer (Gartner, Forrester, atau IDC) yang spesifik dalam dossier ini. → **Rekomendasi**: Framing sebagai "riset industri memperkirakan bahwa sebagian signifikan dari pengeluaran IT enterprise mengalir melalui shadow IT channels" — tanpa angka spesifik jika tidak ada sumber primer yang bisa dikutip.

- ⚠️ **Angka "hanya 12% IT dept dapat memenuhi permintaan teknologi"**: Sama dengan di atas — tidak dapat diverifikasi ke sumber primer dalam dossier ini. → **Rekomendasi**: Gunakan framing deskriptif tentang IT backlog sebagai fenomena nyata tanpa mengklaim angka spesifik yang tidak terverifikasi.

- ⚠️ **SAP BTP data center di Indonesia (untuk compliance UU PDP data residency)**: Pertanyaan apakah SAP BTP memiliki data center fisik di Indonesia tidak dapat dikonfirmasi dari sumber yang diakses. SAP BTP tersedia di Asia Pacific region, tapi lokasi data center Indonesia spesifik belum terverifikasi. → **Rekomendasi**: Framing sebagai "SAP BTP menawarkan opsi data residency di beberapa region Asia Pacific — perusahaan perlu mengkonfirmasi langsung dengan SAP atau mitra implementasi mengenai ketersediaan data center di Indonesia" daripada mengklaim ada data center lokal.

---

## Definition snippet draft (40–60 words)

> *Low-code platform* di enterprise membawa empat risiko utama yang sering diabaikan: **shadow IT** (aplikasi tanpa pengawasan IT), **vendor lock-in** (ketergantungan pada ekosistem satu vendor), **celah keamanan data** akibat akses citizen developer yang tidak terkontrol, dan **technical debt tersembunyi** dari aplikasi yang tidak terdokumentasi. Mengelola keempat risiko ini membutuhkan framework governance yang dirancang sebelum deployment — terutama dengan UU PDP Indonesia berlaku penuh sejak Oktober 2024.

---

## Notes for image-planner

- **Concept 1 (H2 #2 — Matriks Risiko)**: Tabel 4-baris dengan 4 kolom (Risiko | Dampak Potensial | Tanda Peringatan | Mitigasi) dalam format korporat biru-putih dengan header bold dan row alternating light blue–white. Teks Bahasa Indonesia. Ukuran: landscape infographic. Gaya: minimal, profesional, tidak ada ikon dekoratif berlebihan.
- **Concept 2 (H2 #5 — Checklist Keamanan)**: Visual checklist 8 poin dengan ikon centang (√) di setiap baris. Layout vertikal, dua kolom jika perlu. Warna biru-putih korporat SAP-style. Setiap poin memiliki nomor dan label bold. Header: "Checklist Keamanan Low-Code Platform Enterprise". Teks Bahasa Indonesia.
- **Concept 3 (Opsional — H2 #3 Shadow IT)**: Diagram alur sederhana yang menggambarkan mekanisme shadow IT: "Permintaan bisnis → IT Backlog (lambat) → Tim bisnis membuat app sendiri → Shadow IT" vs. "Permintaan bisnis → Governed Low-Code Platform (cepat + aman) → Citizen Development terstruktur". Format: horizontal flow diagram, dua jalur (red/orange untuk shadow IT, blue/green untuk governed). Bahasa Indonesia.
