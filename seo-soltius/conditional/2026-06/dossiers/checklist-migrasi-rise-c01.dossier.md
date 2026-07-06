---
brief_id: "checklist-migrasi-rise-c01"
researcher_run_date: "2026-06-17"
sources_cited: 19
flags: 5
---

# Research Dossier: Checklist Kesiapan Migrasi RISE with SAP: 10 Hal yang Harus Disiapkan

## TL;DR for the writer

- RISE with SAP adalah program *Business Transformation as a Service* resmi SAP, bukan sekadar perpindahan infrastruktur — bundel mencakup SAP S/4HANA Cloud Private Edition + SAP BTP + SAP Business Network + services under one contract; tiga tier: Base, Premium, Premium Plus.
- Tenggat ECC telah **terkonfirmasi resmi**: mainstream maintenance berakhir **31 Des 2027** (khusus EHP 6/7/8); extended maintenance opsional **31 Des 2030** (+2 pp uplift); "SAP ERP, private edition, transition option" (jembatan baru, bukan pemanjangan ECC) berlaku **2031–2033** khusus pelanggan terpilih yang berkomitmen sebelum akhir 2025 — *flag: hati-hati framing*, ini bukan opsi maintenance ECC biasa.
- SAP Readiness Check **gratis** (tersedia *free of charge* via SAP for Me / SAP Cloud ALM untuk pelanggan dengan S-user aktif); mencakup analisis simplification items, custom code, add-on compatibility, sizing, dan integrasi.
- Alat migrasi bawaan SAP (konfirmasi nama resmi Feb 2025): **Custom Code Migration app** (Fiori), **SAP S/4HANA Migration Cockpit** ("Migrate Your Data" Fiori app), dan **SAP Business Transformation Center** (selective data transition). Nama-nama ini valid per Feb 2025.
- Statistik kegagalan ERP/transformasi kuat dan terpercaya (Gartner + McKinsey): Gartner memprediksi >70% inisiatif ERP yang baru diimplementasikan akan gagal capai business case pada 2027; McKinsey melaporkan ~70% transformasi besar gagal capai tujuan. Gunakan ini untuk membingkai *urgensi checklist*, bukan menakuti.

---

## Core facts (verified)

**Claim 1**: SAP akan menghentikan mainstream maintenance untuk SAP ECC (Business Suite 7 / SAP ERP 6.0 EHP6–8)
**Number/specific**: Mainstream maintenance berakhir **31 Desember 2027**; extended maintenance opsional tersedia 3 tahun dari awal 2028 hingga **31 Desember 2030** dengan uplift **+2 poin persentase** di atas biaya maintenance standar.
**Source**: SAP Support Portal — "Innovation Commitment for SAP S/4HANA until 2040", https://support.sap.com/en/release-upgrade-maintenance/maintenance-information/maintenance-strategy/s4hana-business-suite7.html (diakses 17 Jun 2026)
**Confidence**: high — sumber SAP official langsung; angka konsisten dengan SAP Note 2881788.

> **Nuance penting (flag terkait)**: Tanggal 2027 berlaku untuk SAP ERP 6.0 dengan **enhancement package 6, 7, dan 8**. ERP 6.0 tanpa enhancement package atau dengan EHP 1–5 mainstream maintenance-nya berakhir **31 Desember 2025** — sudah lewat. Writer harus merujuk "SAP ECC (EHP 6/7/8)" secara spesifik atau cukup "SAP Business Suite 7" agar tidak menyesatkan.

---

**Claim 2**: Ada opsi "jembatan" bagi pelanggan terkompleks melampaui 2030
**Number/specific**: SAP memperkenalkan **"SAP ERP, private edition, transition option"** — penawaran berbasis langganan (bukan perpanjangan ECC) yang tersedia **2031–2033** untuk organisasi yang belum dapat menyelesaikan transformasi cloud pada 2030. Dapat dibeli mulai 2028; hanya tersedia bersamaan dengan *max success plan*.
**Source**: SAP News, "Navigating Your RISE with SAP Journey: Updates for SAP ERP, Private Edition, Transition Option", https://news.sap.com/2025/08/rise-with-sap-journey-sap-erp-private-edition-transition-option-updates/ (diakses 17 Jun 2026); SAP News, "New Offering to Help Navigate Complex RISE with SAP Transformations", https://news.sap.com/2025/02/sap-erp-private-edition-transition-option-navigate-complex-rise-with-sap-transformations/ (diakses 17 Jun 2026)
**Confidence**: high — dua sumber SAP official; timeline dan kondisi terkonfirmasi.

---

**Claim 3**: RISE with SAP adalah "Business Transformation as a Service"
**Number/specific**: RISE with SAP didefinisikan SAP sebagai *Business Transformation as a Service* — sebuah bundel terintegrasi yang mencakup SAP S/4HANA Cloud, SAP Business Technology Platform (BTP), SAP Business Network, business process intelligence, dan services dalam satu kontrak dengan satu pihak penanggung jawab SLA.
**Source**: SAP News, "Introducing RISE with SAP – Business Transformation as a Service", https://news.sap.com/2021/01/rise-with-sap-business-transformation-as-a-service/ (diakses 17 Jun 2026)
**Confidence**: high — pernyataan SAP resmi sejak peluncuran; masih digunakan sebagai positioning utama.

---

**Claim 4**: RISE with SAP tersedia dalam tiga tier untuk Private Edition
**Number/specific**: Tiga tier resmi: **Base**, **Premium**, dan **Premium Plus**. Premium Plus menambahkan kemampuan BTP yang lebih luas (termasuk SAP Datasphere, SAP Analytics Cloud, sustainability insights, dan kapabilitas generative AI).
**Source**: SAP Community Blog, "Rise with SAP S/4HANA public and private edition: Bundled Cloud Services – Base Vs Premium Vs Premium Plus", https://community.sap.com/t5/enterprise-resource-planning-blog-posts-by-members/rise-with-sap-s-4-hana-public-and-private-edition-bundled-cloud-services/ba-p/13572827 (diakses 17 Jun 2026); SAP Learning, "Introducing RISE with SAP S/4HANA Cloud, private edition, premium plus", https://learning.sap.com/learning-journeys/discovering-rise-with-sap-s-4hana-cloud-private-edition-premium-plus-implementation-including-supplier-portal/introducing-rise-with-sap-s-4hana-cloud-private-edition-premium-plus_e71c3c06-74e3-4348-ab03-6f0ebac04f86 (diakses 17 Jun 2026)
**Confidence**: medium-high — tier names confirmed via SAP Community + SAP Learning; detail komponen per tier (yang mana BTP services di-include di Base vs Premium) berubah secara berkala. Writer disarankan menyebut nama tier tanpa mendetailkan komponen BTP spesifik per tier, kecuali referensi ke Premium Plus untuk AI/analytics.

---

**Claim 5**: SAP Readiness Check tersedia gratis bagi pelanggan
**Number/specific**: SAP Readiness Check adalah aplikasi berbasis Fiori yang disediakan SAP **gratis** (*free of charge*) kepada pelanggannya untuk perencanaan konversi dan upgrade ke SAP S/4HANA. Dapat diakses melalui SAP for Me atau SAP Cloud ALM menggunakan S-user yang valid.
**Source**: SAP Community (dikutip dari hasil pencarian resmi help.sap.com + SAP KBA 3455928): "SAP Readiness Check is a Fiori-based Web Application which SAP puts at its customers' disposal – free of charge – for planning purposes related to S/4HANA conversions and upgrades." https://pages.community.sap.com/topics/readiness-check dan https://userapps.support.sap.com/sap/support/knowledge/en/3455928 (diakses 17 Jun 2026)
**Confidence**: high — dikonfirmasi dari dua sumber SAP (help.sap.com + SAP KBA); konsisten di semua hasil pencarian.

---

**Claim 6**: Cakupan analisis SAP Readiness Check
**Number/specific**: SAP Readiness Check menganalisis: (1) **Simplification Items** — perubahan proses/data di S/4HANA yang mempengaruhi sistem lama; (2) **Custom Code Analysis** — identifikasi custom code yang perlu diadaptasi; (3) **Add-On Compatibility** — kompatibilitas add-on pihak ketiga; (4) **System Sizing** — apakah hardware/cloud sizing mencukupi; (5) **Integration & Interface Analysis**; (6) **Data Migration Profiling** — profil data untuk perencanaan migrasi.
**Source**: SAP Help Portal, "Functions of SAP Readiness Check for SAP S/4HANA", https://help.sap.com/docs/SAP_READINESS_CHECK/a281af437b3e4ef4a187c7f35a9093e9/69463edf26e44ba8a99e16c0c0e27100.html; SAP Community, https://pages.community.sap.com/topics/readiness-check (diakses 17 Jun 2026)
**Confidence**: high — sumber SAP official help portal.

---

**Claim 7**: Tiga alat migrasi bawaan SAP yang relevan
**Number/specific**: Per SAP News Feb 2025, tiga alat resmi untuk migrasi ERP: (1) **Custom Code Migration app** (Fiori app, Fiori ID F3191) — untuk menginventarisasi dan menganalisis custom code; (2) **SAP S/4HANA Migration Cockpit** (Fiori app "Migrate Your Data", pengganti LTMC yang sudah deprecated) — untuk migrasi master data dan data transaksi dengan template bawaan; (3) **SAP Business Transformation Center** — untuk selective data transition, memungkinkan pemindahan data dari company code tertentu atau data sebelum tanggal tertentu.
**Source**: SAP News, "Compass, Map, Vehicle: Three Tools for an ERP Move", https://news.sap.com/2025/02/compass-map-vehicle-three-tools-erp-migration/ (Feb 2025, diakses 17 Jun 2026); SAP Community Tutorial, https://community.sap.com/t5/technology-blog-posts-by-members/tutorial-using-the-sap-s-4hana-migration-cockpit-app-step-by-step/ba-p/14016874 (diakses 17 Jun 2026)
**Confidence**: high — dikonfirmasi dari SAP News (artikel resmi Feb 2025) + SAP Community. Nama-nama ini adalah nama resmi terkini.

---

**Claim 8**: Model tanggung jawab bersama (shared responsibility) RISE with SAP
**Number/specific**: Dalam RISE with SAP, SAP bertanggung jawab atas: infrastruktur (Azure/AWS/GCP), OS, database, basis management, monitoring keamanan 24/7, patch, dan SLA. **Pelanggan tetap bertanggung jawab** atas: konfigurasi aplikasi (business process), manajemen data, akses pengguna (user access), pengaturan keamanan tenant, serta pengembangan dan ekstensi aplikasi.
**Source**: SAP Community, "RISE with SAP: Shared Security Responsibility for SAP Cloud Services", https://community.sap.com/t5/technology-blog-posts-by-sap/rise-with-sap-shared-security-responsibility-for-sap-cloud-services/ba-p/13497110; SAP, "Shared responsibility model for SAP S/4HANA Cloud", https://www.sap.com/assetdetail/2024/10/e2276b16-dc7e-0010-bca6-c68f7e60039b.html (diakses 17 Jun 2026)
**Confidence**: high — sumber SAP official; model ini bersifat kontraktual dan terdokumentasi dalam SAP Roles & Responsibilities guide.

---

**Claim 9**: Tiga pendekatan migrasi SAP S/4HANA
**Number/specific**: Tiga jalur transisi yang diakui SAP: (1) **Greenfield** (new implementation) — mulai dari awal, desain ulang proses bisnis; (2) **Brownfield** (system conversion) — konversi sistem ECC as-is ke S/4HANA, mempertahankan data dan kustomisasi; (3) **Selective Data Transition (SDT)** — kombinasi keduanya, memilih data dan proses yang dibawa serta meninggalkan yang tidak relevan; juga disebut "bluefield" oleh beberapa mitra.
**Source**: SAP Community, "Choosing the Right Path for Your S/4HANA Transformation: Greenfield, Brownfield, or Bluefield?", https://community.sap.com/t5/financial-management-blog-posts-by-members/choosing-the-right-path-for-your-s-4hana-transformation-greenfield/ba-p/13877169; SAP Support, "Selective Data Transition Engagement", https://support.sap.com/en/offerings-programs/support-services/data-management-landscape-transformation/selective-data-transition-engagement.html (diakses 17 Jun 2026)
**Confidence**: high — terminologi dan definisi konsisten di seluruh dokumentasi SAP.

---

**Claim 10**: Gartner — prediksi kegagalan inisiatif ERP
**Number/specific**: Gartner memprediksi bahwa pada **2027**, lebih dari **70%** inisiatif ERP yang baru diimplementasikan akan gagal memenuhi tujuan business case awalnya, dan hingga **25%** akan gagal secara katastrofik. Sebanyak 75% strategi ERP tidak selaras dengan strategi bisnis perusahaan secara keseluruhan.
**Source**: Gartner, "ERP Implementation: To Avoid Project Failure, Assess the Impact of Change Before Starting Configuration", https://www.gartner.com/en/documents/1329324; Gartner ERP topics page https://www.gartner.com/en/information-technology/topics/enterprise-resource-planning (diakses 17 Jun 2026)
**Confidence**: medium — angka >70% dan 25% dikutip konsisten di banyak sumber industri yang merujuk riset Gartner; dokumen asli Gartner gated/berbayar. Rekomendasi: framing sebagai "riset Gartner memperkirakan..." bukan kutipan langsung tanpa akses.

---

**Claim 11**: McKinsey — tingkat kegagalan transformasi besar
**Number/specific**: Menurut McKinsey, **~70%** transformasi besar-besaran gagal mencapai tujuannya. Hambatan utama: budaya organisasi dan kurangnya manajemen perubahan.
**Source**: McKinsey & Company, "Perspectives on transformation", https://www.mckinsey.com/capabilities/transformation/our-insights/perspectives-on-transformation (diakses 17 Jun 2026)
**Confidence**: medium — angka 70% sangat luas dikutip; McKinsey mempublikasikan insight ini di berbagai laporan transformasi. Framing yang tepat: "riset McKinsey menunjukkan sekitar 70% transformasi besar gagal capai target".

---

**Claim 12**: Data duplikat dan kualitas data master — masalah nyata pra-migrasi
**Number/specific**: Dalam proyek migrasi ERP, **30–60% catatan** dalam database pelanggan bisa ternyata duplikat, kadaluarsa, atau tidak kompatibel secara struktural dengan aturan validasi ERP target.
**Source**: ClonePartner Blog (enterprise tech, mengutip industri), "Why ERP Migrations Fail at the Data Layer: 9 Core Patterns", https://clonepartner.com/blog/why-erp-migrations-fail-at-the-data-layer-9-core-patterns (diakses 17 Jun 2026)
**Confidence**: low-medium — ini adalah observasi praktisi, bukan studi peer-reviewed tunggal; rentangnya luas (30–60%) mencerminkan variasi di lapangan. Rekomendasi: framing sebagai "dalam praktik, ditemukan bahwa..." atau "riset industri menunjukkan..." tanpa angka tepat, atau pakai rentang dengan label "estimasi industri".

---

**Claim 13**: Biaya dual-run — biaya tersembunyi migrasi yang sering tidak dimodelkan
**Number/specific**: Migrasi S/4HANA produksi skala besar umumnya membutuhkan periode *dual-run* — menjalankan ECC lama paralel dengan S/4HANA baru — selama **12–24 bulan** untuk enterprise besar. Biaya ini (infrastruktur ganda + tenaga konsultan perpanjangan) hampir tidak pernah masuk dalam estimasi SAP awal dan jarang dimodelkan dalam business case migrasi.
**Source**: SAPLicensingExperts, "SAP ECC-to-S/4HANA Parallel Landscape Licensing: Migration Cost Guide 2026", https://saplicensingexperts.com/blog/sap-migration-parallel-licence-cost-guide.html; "Hidden Costs and 'Gotchas' in SAP S/4HANA Migration Deals", https://saplicensingexperts.com/hidden-costs-and-gotchas-in-sap-s-4hana-migration-deals/ (diakses 17 Jun 2026)
**Confidence**: medium — sumber adalah konsultan/analis independen (bukan SAP official), tapi observasi ini konsisten di seluruh komunitas implementer. Framing: "dalam praktik implementasi, dual-run selama 12–24 bulan adalah hal umum..." — framing berbasis pengalaman, bukan klaim SAP.

---

**Claim 14**: Indonesia — pasar ERP dan cloud tumbuh signifikan
**Number/specific**: Pasar cloud Indonesia diperkirakan tumbuh dari **USD 2,46 miliar (2025)** menjadi **USD 5,5 miliar pada 2031** (CAGR 14,32%). ERP memegang **30,52% pangsa** pasar digital software Indonesia pada 2025, dengan cloud menyumbang **65,23%** dari pasar tersebut.
**Source**: Mordor Intelligence, "Indonesia Cloud Market Size & Share Outlook to 2031", https://www.mordorintelligence.com/industry-reports/indonesia-cloud-market; "Indonesia Digital Software Solutions Market", https://www.mordorintelligence.com/industry-reports/indonesia-digital-software-solutions-market (diakses 17 Jun 2026)
**Confidence**: medium — Mordor Intelligence adalah firma riset pasar terakreditasi; angka proyeksi pasar memiliki ketidakpastian inheren. Gunakan sebagai konteks umum adopsi cloud di Indonesia, bukan klaim tunggal.

---

**Claim 15**: SAP implementasi lebih lama dari rencana — statistik lapangan
**Number/specific**: Rata-rata implementasi SAP S/4HANA membutuhkan waktu **30% lebih lama** dari yang direncanakan semula; hanya **18%** perusahaan yang mengimplementasikan proses baru secara penuh saat migrasi ke S/4HANA, sementara **49%** memilih mempertahankan proses dan data lama dengan sedikit perubahan.
**Source**: CIO.com, "SAP migrations often fail during planning phase", https://www.cio.com/article/4130935/sap-migrations-often-fail-at-the-planning-stage.html (diakses 17 Jun 2026)
**Confidence**: medium — CIO.com adalah publikasi teknologi terkemuka; angka spesifik ini mengutip riset/survei industri. Gunakan dengan framing "survei industri menunjukkan..." bukan diklaim sebagai fakta mutlak.

---

## Solution focus + Soltius anchor (from product_matrix.md)

| Apa yang diajarkan (SAP/partner tech) | Fakta yang harus dinyatakan akurat | Penempatan dalam artikel | Anchor Soltius untuk CTA |
|---|---|---|---|
| **RISE with SAP** sebagai *Business Transformation as a Service* | Bundel: SAP S/4HANA Cloud Private Edition + SAP BTP + SAP Business Network + services; satu kontrak, satu pihak penanggung jawab SLA; tier Base/Premium/Premium Plus | H2 #1 (definitional) — definisi snippet | Closing CTA |
| **SAP ECC end of maintenance** | Mainstream 31 Des 2027 (EHP 6/7/8); extended 31 Des 2030 (+2 pp); SAP ERP private edition transition option 2031–2033 (bukan pemanjangan ECC, bukan untuk semua) | H2 #1 dan #2 (framing urgensi) | — |
| **SAP Readiness Check** | Gratis via SAP for Me/Cloud ALM (S-user); analisis simplification items, custom code, add-on, sizing | H2 #3, item #5 | — |
| **SAP Custom Code Migration app** | Fiori app F3191; analisis scope dan dampak custom code; integrasi dengan SAP BTP ABAP env | H2 #3, item #4 | — |
| **SAP S/4HANA Migration Cockpit** ("Migrate Your Data") | Fiori app; pengganti LTMC (deprecated); included (no extra cost); template master data + data transaksi | H2 #3, item #3 | — |
| **SAP Business Transformation Center** | Selective data transition; memungkinkan migrasi data per company code atau sebelum tanggal tertentu | H2 #3, item #3 (opsional) | — |
| **Shared responsibility model** | SAP: infrastruktur/platform/OS/DB/monitoring; Pelanggan: konfigurasi aplikasi, data, akses user | H2 #4 | — |
| **Pendekatan brownfield/greenfield/SDT** | Tiga jalur resmi SAP; SDT = kombinasi kedua, data selektif | H2 #3, item #7 | — |
| **Soltius migration service + Best RISE/Cloud Partner** | "Soltius merancang dan mengeksekusi migrasi RISE with SAP..." + "diakui sebagai Best RISE Partner & Best Cloud Partner" | Closing (setelah Kesimpulan) + 1 mid-article aside opsional di H2 #4 | Migration (Implementation) + Cloud solution |

**Framing wajib:** Soltius **merancang dan mengeksekusi** migrasi RISE, **tidak membuat** SAP. Maksimal 2–3 sebutan Soltius.

---

## Authoritative external sources (untuk writer linkkan keluar — ≥2 wajib)

1. **SAP Support Portal — "Innovation Commitment for SAP S/4HANA until 2040"** — https://support.sap.com/en/release-upgrade-maintenance/maintenance-information/maintenance-strategy/s4hana-business-suite7.html — *mendukung*: tanggal maintenance ECC 2027/2030 dan uplift 2 pp.

2. **SAP News — "Compass, Map, Vehicle: Three Tools for an ERP Move" (Feb 2025)** — https://news.sap.com/2025/02/compass-map-vehicle-three-tools-erp-migration/ — *mendukung*: nama resmi dan deskripsi tiga alat migrasi SAP (Custom Code Migration app, Migration Cockpit, Business Transformation Center).

3. **SAP Community — "RISE with SAP S/4HANA Cloud, Private Edition: Understanding Roles And Responsibility"** — https://community.sap.com/t5/enterprise-architecture-blog-posts/rise-with-sap-s-4hana-cloud-private-edition-understanding-roles-and/ba-p/13798158 — *mendukung*: rincian shared responsibility model (siapa bertanggung jawab apa).

4. **Gartner ERP topics (referensi untuk framing kegagalan)** — https://www.gartner.com/en/information-technology/topics/enterprise-resource-planning — *mendukung*: prediksi >70% inisiatif ERP gagal capai business case pada 2027.

---

## FAQ Q&As (6 — Bahasa Indonesia)

### 1. Apa saja yang harus disiapkan sebelum migrasi RISE with SAP?
Secara ringkas, ada 10 item kesiapan utama: (1) sponsor eksekutif dan tujuan bisnis terukur, (2) inventarisasi lanskap sistem dan integrasi, (3) pembersihan data master, (4) inventarisasi dan remediasi custom code, (5) menjalankan SAP Readiness Check (gratis), (6) memahami model tanggung jawab bersama, (7) memilih pendekatan migrasi (brownfield/greenfield/selective), (8) menyusun anggaran realistis termasuk biaya dual-run, (9) rencana change management, dan (10) memilih partner implementasi dan menyusun timeline cutover.

---

### 2. Apa itu RISE with SAP dan apa saja yang termasuk di dalamnya?
RISE with SAP adalah program *Business Transformation as a Service* dari SAP yang membundel dalam satu kontrak: SAP S/4HANA Cloud Private Edition (sistem ERP utama), SAP Business Technology Platform (BTP) untuk integrasi dan pengembangan, SAP Business Network untuk kolaborasi rantai pasok, serta layanan transformasi dan dukungan. Tersedia dalam tiga tier: Base, Premium, dan Premium Plus — pelanggan memilih sesuai kebutuhan kapabilitas.

---

### 3. Berapa lama waktu yang dibutuhkan untuk migrasi RISE with SAP?
Durasi sangat bergantung pada kompleksitas lanskap sistem dan pendekatan migrasi yang dipilih. Implementasi brownfield (konversi sistem) umumnya lebih cepat daripada greenfield (mulai dari awal). Riset industri menunjukkan rata-rata proyek SAP S/4HANA berlangsung **30% lebih lama dari rencana awal**, sehingga timeline realistis untuk enterprise menengah-besar berkisar antara 12–24 bulan. Persiapan pra-proyek (termasuk pembersihan data dan remediasi custom code) biasanya menambah 2–4 bulan sebelum kick-off.

---

### 4. Apa itu SAP Readiness Check dan apakah gratis?
SAP Readiness Check adalah alat analisis berbasis Fiori yang disediakan SAP **gratis** (*free of charge*) kepada pelanggannya. Dapat diakses melalui SAP for Me atau SAP Cloud ALM menggunakan akun S-user yang valid. Alat ini menganalisis kompatibilitas sistem dengan SAP S/4HANA target, mencakup: pemeriksaan simplification items, analisis custom code (kode yang perlu dimodifikasi), kompatibilitas add-on pihak ketiga, dan sizing sistem. Hasilnya adalah dashboard yang menjadi panduan perencanaan migrasi.

---

### 5. Apa perbedaan tanggung jawab pelanggan dan SAP dalam RISE with SAP?
Dalam model tanggung jawab bersama (shared responsibility) RISE with SAP, SAP mengelola infrastruktur cloud (Azure/AWS/GCP), sistem operasi, database, manajemen basis, monitoring keamanan 24/7, dan patching. **Pelanggan tetap bertanggung jawab** atas konfigurasi aplikasi (pengaturan proses bisnis), kualitas dan keamanan data, manajemen akses pengguna, serta pengembangan ekstensi aplikasi. Kesalahan umum: mengira RISE berarti "SAP urus semua" — padahal konfigurasi bisnis tetap sepenuhnya milik pelanggan.

---

### 6. Kapan SAP ECC berhenti didukung secara resmi?
Untuk SAP ERP 6.0 dengan Enhancement Package 6, 7, atau 8 (yang paling umum digunakan), SAP menghentikan mainstream maintenance pada **31 Desember 2027**. Setelah itu tersedia extended maintenance opsional hingga **31 Desember 2030** dengan biaya tambahan sekitar +2 poin persentase. Bagi perusahaan yang membutuhkan waktu lebih, SAP juga menawarkan "SAP ERP, private edition, transition option" sebagai jembatan selama 2031–2033, meskipun ini bukan pemanjangan ECC biasa dan hanya tersedia untuk pelanggan yang berkomitmen sebelum akhir 2025.

---

### 7. Apa saja biaya tersembunyi saat migrasi ke RISE with SAP?
Beberapa biaya yang sering tidak dimodelkan dalam business case awal: (1) **Dual-run** — biaya menjalankan ECC lama dan S/4HANA baru secara paralel selama 12–24 bulan untuk enterprise besar; (2) integrasi sistem pihak ketiga (POS, WMS, e-commerce) yang mungkin perlu dibangun ulang; (3) biaya pembersihan dan migrasi data master yang seringkali melampaui perkiraan; (4) pelatihan pengguna dan manajemen perubahan; serta (5) biaya konsultan tambahan jika proyek melebihi jadwal — yang terjadi rata-rata 30% lebih lama dari rencana.

---

## Tabel untuk writer

### Tabel 1: 10 Item Checklist — Pemilik & Alat/Output

| # | Item Checklist | Pemilik Utama | Alat / Output |
|---|---|---|---|
| 1 | Sponsor eksekutif & tujuan bisnis terukur | C-Level / Steering Committee | Charter proyek, KPI sukses |
| 2 | Inventarisasi lanskap sistem & integrasi | IT Architecture / Integration Team | Peta sistem (integration landscape diagram) |
| 3 | Pembersihan & validasi data master | Data Owner / Finance / Procurement | SAP Migration Cockpit ("Migrate Your Data"); data quality report |
| 4 | Inventarisasi & remediasi custom code | ABAP / Development Team | SAP Custom Code Migration app (Fiori F3191); custom code register |
| 5 | SAP Readiness Check | IT Architecture / Basis | SAP Readiness Check (gratis via SAP for Me); readiness report |
| 6 | Pahami model tanggung jawab bersama | IT Security / Cloud Team | SAP Roles & Responsibilities guide; RACI matrix |
| 7 | Pilih pendekatan migrasi & tier RISE | Project Sponsor + IT | Decision document (greenfield/brownfield/SDT + Base/Premium/Premium Plus) |
| 8 | Anggaran realistis (termasuk dual-run) | CFO / PMO | Budget baseline dengan komponen: lisensi + impl + integrasi + training + dual-run |
| 9 | Rencana change management & komunikasi | HR / Change Management Lead | Change plan; communications calendar; training plan |
| 10 | Pilih partner implementasi & timeline cutover | CPO / CIO | Partner evaluation matrix; project timeline; cutover plan |

---

### Tabel 2: Tanggung Jawab Pelanggan vs SAP di RISE with SAP

| Aspek | SAP bertanggung jawab | Pelanggan bertanggung jawab |
|---|---|---|
| Infrastruktur (cloud: Azure/AWS/GCP) | Ya — SAP mengelola dan mengoperasikan | Tidak |
| Sistem Operasi & Database | Ya — patching, monitoring | Tidak |
| Ketersediaan & SLA | Ya — SLA kontraktual | Tidak |
| Keamanan infrastruktur & monitoring 24/7 | Ya | Tidak |
| Konfigurasi proses bisnis (Customizing) | Tidak | Ya — sepenuhnya milik pelanggan |
| Kualitas & keamanan data | Tidak | Ya — data masuk = tanggung jawab pelanggan |
| Manajemen akses pengguna | Tidak | Ya |
| Pengembangan ekstensi (BTP/ABAP Cloud) | Tidak | Ya (dengan panduan clean core) |
| Pelatihan pengguna akhir | Tidak | Ya |

---

### Tabel 3: Tiga Pendekatan Migrasi SAP S/4HANA

| Aspek | Greenfield | Brownfield (System Conversion) | Selective Data Transition (SDT) |
|---|---|---|---|
| Pendekatan | Implementasi baru dari awal | Konversi sistem ECC as-is | Kombinasi; data/proses dipilih selektif |
| Mempertahankan data historis | Tidak (atau migrasi terbatas) | Ya — semua data | Sebagian — yang dipilih |
| Mempertahankan kustomisasi | Tidak — desain ulang | Ya — kustomisasi dibawa serta | Selektif |
| Cocok untuk | Proses bisnis ingin didesain ulang sepenuhnya | Meminimalkan gangguan, waktu lebih singkat | Ingin reorganisasi + bersih dari data usang |
| Durasi relatif | Lebih lama | Lebih cepat | Menengah |
| Risiko | Perubahan besar, resistensi perubahan | Custom code menumpuk jika tidak dibersihkan | Kompleksitas perencanaan data |

---

## Edge cases & nuance

- **EHP versi ECC mana yang dapat 2027?** Hanya EHP 6, 7, dan 8. ERP 6.0 tanpa EHP atau dengan EHP 1–5 sudah berakhir mainstream maintenance per 31 Des 2025. Ini sering diabaikan; writer harus merujuk "SAP ECC (EHP6–8)" atau "SAP Business Suite 7" secara tepat.

- **"SAP ERP, private edition, transition option" bukan pemanjangan ECC.** Ini adalah penawaran cloud subscription baru (bukan ECC on-premise dipertahankan) yang menjembatani 2031–2033 untuk perusahaan terkompleks yang tidak dapat selesai pada 2030. Tidak semua perusahaan memenuhi syarat; hanya yang berkomitmen ke SAP ERP private edition. Jika writer menyebut opsi 2033, harus dijelaskan kondisinya.

- **RISE bukan berarti "SAP urus semua."** Mispersepsi terbesar: karena RISE adalah managed cloud service, beberapa pelanggan mengira konfigurasi bisnis dan data juga dikelola SAP. Ini salah — pelanggan tetap sepenuhnya bertanggung jawab atas Customizing, data, dan akses user.

- **Nama tier RISE dapat berubah.** Saat artikel ini ditulis (Jun 2026), tier yang terkonfirmasi adalah Base, Premium, Premium Plus. SAP memperbarui packaging secara periodik — writer jangan mendetailkan komponen BTP per tier secara spesifik kecuali Premium Plus untuk AI/analytics (yang paling stabil). Rujuk ke situs SAP untuk detail ter-update.

- **Dual-run dan Parallel Landscape Agreement (PLA).** Dual-run bukan hanya soal biaya operasional ganda; secara lisensi, menjalankan ECC dan S/4HANA secara paralel memerlukan PLA yang harus dinegosiasikan dengan SAP sebelum migrasi dimulai. Ini adalah aspek kontraktual yang sering terlewat.

- **Pendekatan "bluefield" bukan terminologi resmi SAP.** SAP menyebutnya Selective Data Transition (SDT). "Bluefield" adalah istilah yang dipopulerkan oleh mitra implementasi. Writer boleh menyebutnya sebagai "selective (kadang disebut 'bluefield' oleh beberapa implementer)" tapi nama resminya adalah SDT.

- **Statistik Gartner dan McKinsey** yang dikutip (55–75% ERP gagal, ~70% transformasi gagal) sangat luas beredar tapi bersumber dari riset gated. Gunakan dengan framing "menurut riset Gartner..." atau "McKinsey melaporkan..." bukan diklaim sebagai angka yang dapat diverifikasi langsung.

---

## Flags (open factual risk)

- **Flag 1 — Versi ECC mana yang dapat 2027**: Brief menyebut "SAP ECC end of mainstream maintenance 2027" tanpa spesifikasi EHP. Fakta: hanya EHP 6/7/8 yang dapat 2027; EHP 1–5 sudah berakhir 2025. Rekomendasi: writer harus menyebut "SAP ECC (EHP6/7/8) atau "SAP Business Suite 7" secara eksplisit di teks, bukan hanya "SAP ECC" secara generik. Jika diperlukan kesederhanaan, gunakan "SAP Business Suite 7" (yang paling umum dipakai SAP secara resmi).

- **Flag 2 — Framing "opsi 2033" harus hati-hati**: "SAP ERP, private edition, transition option" untuk 2031–2033 adalah penawaran cloud subscription baru yang berbeda dari extended maintenance ECC. Writer tidak boleh menyebut ini sebagai "SAP ECC masih bisa digunakan hingga 2033" — itu tidak akurat. Framing yang benar: "Bagi perusahaan terkompleks, SAP menyediakan jembatan migrasi bertahap hingga 2033, meskipun ini bukan pemanjangan support ECC dan hanya untuk pelanggan yang berkomitmen sebelum akhir 2025." Jika artikel tidak ingin masuk ke detail ini, cukup sebutkan 2027/2030 sebagai tenggat utama dan tinggalkan 2033.

- **Flag 3 — Detail komponen per tier RISE (Base/Premium/Premium Plus)**: Tier names confirmed (Base, Premium, Premium Plus), namun komponen BTP services yang termasuk di setiap tier berubah secara periodik seiring pembaruan SAP packaging. Rekomendasi: writer sebutkan nama tier saja tanpa mendetailkan "tier X menyertakan service Y" kecuali untuk Premium Plus (AI/analytics/sustainability — lebih stabil). Rujuk pembaca ke sap.com untuk detailnya.

- **Flag 4 — Angka statistik duplikat data (30–60%)**: Sumber adalah blog praktisi (ClonePartner), bukan studi peer-reviewed. Rekomendasi: framing sebagai observasi lapangan "dalam praktik migrasi ERP, ditemukan bahwa..." tanpa menyebut angka persentase spesifik, ATAU gunakan angka dengan atribusi jelas ke "estimasi industri" — jangan klaim sebagai fakta SAP-sourced.

- **Flag 5 — Konfirmasi "SAP Readiness Check gratis" dengan syarat**: Terkonfirmasi gratis via S-user aktif dan SAP for Me / Cloud ALM. Namun penting dicatat: akses memerlukan S-user (akun support SAP yang dimiliki pelanggan berlisensi). Writer tidak boleh menyebut "bisa diakses siapa saja" — hanya pelanggan SAP dengan kontrak aktif yang memiliki S-user.

---

## Definition snippet draft (40–60 kata)

> **Migrasi RISE with SAP** adalah proses perpindahan sistem ERP perusahaan ke *Business Transformation as a Service* dari SAP — sebuah bundel terintegrasi yang mencakup SAP S/4HANA Cloud Private Edition, SAP Business Technology Platform (BTP), dan SAP Business Network dalam satu kontrak berlangganan, dengan SAP sebagai pengelola infrastruktur cloud dan penanggung jawab tunggal SLA.

*(56 kata — dalam rentang 40–60)*

---

## Notes for image-planner

- **Concept 1 — Checklist visual 10 item (prioritas utama):** Infografis bergaya korporat biru-putih berisi numbered list 10 item kesiapan migrasi RISE with SAP dalam dua kolom (item 1–5 kiri, 6–10 kanan). Setiap item dengan ikon kecil dan satu baris teks Bahasa Indonesia. Format "screenshot-friendly" — bisa dicetak dan dibawa ke rapat internal. Alt-text: "Checklist 10 item kesiapan migrasi RISE with SAP untuk perusahaan Indonesia."

- **Concept 2 — Diagram tanggung jawab bersama (shared responsibility):** Dua kolom bertanda "SAP" (kiri, warna biru gelap) dan "Pelanggan" (kanan, warna biru muda) dengan daftar tanggung jawab masing-masing. Bagian tengah menampilkan tumpang tindih (overlap) berupa kolaborasi dalam phase cutover dan hypercare. Gaya diagram bersih, korporat. Alt-text: "Model tanggung jawab bersama RISE with SAP: apa yang dikelola SAP vs pelanggan."

- **Concept 3 — Timeline ECC ke RISE with SAP:** Garis waktu horizontal dari 2024 hingga 2033 menunjukkan milestone: ECC mainstream end 2027 → extended end 2030 → SAP ERP Private Edition Transition Option 2031–2033 → target cloud ERP. Dengan tanda "Start project NOW" di posisi 2025–2026. Warna sinyal bahaya (kuning → oranye → merah) untuk menekankan urgensi. Alt-text: "Timeline tenggat migrasi SAP ECC ke RISE with SAP: mainstream 2027, extended 2030, opsi transisi 2033."
