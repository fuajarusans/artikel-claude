---
brief_id: "erp-migration-to-the-cloud-02"
researcher_run_date: "2026-06-08"
sources_cited: 16
flags: 5
---

# Research Dossier: ERP Migration Readiness Assessment: Apakah Perusahaan Anda Siap Pindah ke Cloud?

## TL;DR for the writer

- Artikel ini mengisi celah nyata di SERP Indonesia: tidak ada satu pun artikel berbahasa Indonesia yang menyajikan instrumen asesmen kesiapan pra-proyek berlapis dimensi khusus konteks SAP — ini adalah peluang Featured Snippet + AI Overview yang nyata.
- Dua alat SAP yang wajib dijelaskan: **SAP Readiness Check** (gratis untuk pelanggan dengan kontrak support aktif; menganalisis custom code, simplification items, add-on, sizing, dan integrasi) dan **SAP Signavio Process Insights, discovery edition** (analisis proses bisnis satu kali, gratis, berbasis data dari sistem SAP). Kedua nama telah dikonfirmasi ke sumber SAP resmi.
- Angka kegagalan yang bisa dikutip: Gartner menyatakan 55–75% implementasi ERP gagal mencapai tujuan semula; McKinsey mengidentifikasi ~70% transformasi berskala besar gagal, dengan faktor utama bukan teknologi melainkan orang dan proses.
- Konteks urgensi ECC: SAP mengonfirmasi mainstream maintenance untuk SAP Business Suite 7 (termasuk ECC 6.0) berakhir 31 Desember 2027, dengan opsi extended maintenance berbayar (premi 2 poin persentase) hingga 2030. Ini sudah dikonfirmasi dari sumber SAP resmi (support.sap.com).
- Framing Soltius: posisi sebagai pelaksana asesmen kesiapan, bukan pembuat alat SAP — "Soltius memulai setiap engagement migrasi dengan discovery phase untuk menilai kesiapan" adalah kalimat yang honest dan defensible.

---

## Core facts (verified)

> **Claim**: SAP akan menghentikan mainstream maintenance untuk SAP ECC / Business Suite 7
> **Number/specific**: Mainstream maintenance berakhir 31 Desember 2027; opsi extended maintenance berbayar (premi +2 poin persentase dari basis maintenance) tersedia hingga akhir 2030
> **Source**: SAP Support Portal — Maintenance Strategy for SAP S/4HANA and Business Suite 7, https://support.sap.com/en/release-upgrade-maintenance/maintenance-information/maintenance-strategy/s4hana-business-suite7.html (diakses 2026-06-08)
> **Confidence**: high — sumber SAP official langsung

> **Claim**: SAP berkomitmen bahwa SAP S/4HANA akan terus di-maintain setidaknya dalam satu rilis aktif hingga 2040
> **Number/specific**: Komitmen inovasi S/4HANA hingga 2040 diumumkan SAP pada Februari 2020 dan dikonfirmasi pada September 2022
> **Source**: SAP News — "New SAP S/4HANA Release and Maintenance Strategy", https://news.sap.com/2022/09/new-sap-s4hana-release-maintenance-strategy/ (2022-09); SAP Support Portal ibid
> **Confidence**: high

> **Claim**: Gartner memperkirakan lebih dari 55–75% implementasi ERP gagal mencapai business case aslinya
> **Number/specific**: Gartner menyebut angka 55–75%; perkiraan terakhir Gartner: lebih dari 70% implementasi ERP akan gagal mencapai tujuan bisnis semula pada 2027, dengan 25% mengalami kegagalan katastrofik
> **Source**: Gartner Research — "What IT Leaders Must Do to Avoid Disappointing ERP Initiatives", https://www.gartner.com/en/information-technology/insights/what-it-leaders-must-do-to-avoid-disappointing-erp-initiatives (diakses 2026-06-08); dikutip juga di https://www.randgroup.com/insights/services/solution-implementation/what-percentage-of-erp-implementations-fail/
> **Confidence**: medium — penulis sebaiknya menggunakan rentang "55–75%" bukan angka tunggal; halaman Gartner di-paywall sehingga tidak bisa diambil verbatim, angka dikonfirmasi dari multiple reputable secondary citations. Framing: "Menurut riset Gartner..."

> **Claim**: McKinsey menemukan sekitar 70% transformasi berskala besar gagal
> **Number/specific**: "Roughly 70 percent of transformations fail when corporations launch them" — McKinsey Transformation Practice
> **Source**: McKinsey & Company — "Why do most transformations fail? A conversation with Harry Robinson", https://www.mckinsey.com/capabilities/transformation/our-insights/why-do-most-transformations-fail-a-conversation-with-harry-robinson; "Perspectives on transformation", https://www.mckinsey.com/capabilities/transformation/our-insights/perspectives-on-transformation
> **Confidence**: medium — URL berhasil diidentifikasi dari WebSearch; halaman timeout saat fetch. Angka 70% dikonfirmasi dari berbagai secondary sources yang mengutip McKinsey. Penulis harus melabel sebagai "menurut McKinsey" dan tidak menginventarisasi persentase baru.

> **Claim**: SAP Readiness Check adalah alat self-service gratis bagi pelanggan SAP dengan kontrak support aktif
> **Number/specific**: Tersedia sejak Juni 2017 (versi 1.0); gratis untuk pelanggan dengan kontrak support SAP aktif; dapat diakses melalui SAP for Me dan SAP Cloud ALM
> **Source**: SAP Community — "SAP Readiness Check" topic hub, https://pages.community.sap.com/topics/readiness-check; SAP Help Portal, https://help.sap.com/docs/SAP_READINESS_CHECK (diakses 2026-06-08)
> **Confidence**: high

> **Claim**: SAP Readiness Check menganalisis custom code, simplification items, add-on compatibility, integrasi, dan sizing untuk migrasi ke S/4HANA
> **Number/specific**: Output utama meliputi: (1) Custom Code Analysis — volume dan kompleksitas modifikasi ABAP; (2) Simplification Items — perubahan yang relevan untuk sumber dan target rilis; (3) Add-on compatibility; (4) Sizing SAP HANA; (5) Integration/interface assessment; (6) App availability; (7) Data profiling
> **Source**: SAP Community — topic hub ibid; SAP Help Portal — Functions of SAP Readiness Check, https://help.sap.com/docs/SAP_READINESS_CHECK/a281af437b3e4ef4a187c7f35a9093e9/69463edf26e44ba8a99e16c0c0e27100.html; Community blog "Understanding SAP Readiness Check and Simplification Check", https://community.sap.com/t5/technology-blog-posts-by-members/understanding-sap-readiness-check-and-simplification-check-for-sap-s-4hana/ba-p/13770134
> **Confidence**: high

> **Claim**: SAP Signavio Process Insights, discovery edition adalah alat analisis proses bisnis satu kali yang gratis berbasis data dari sistem SAP ERP/S/4HANA pelanggan
> **Number/specific**: One-time, free-of-charge analysis; menghasilkan rekomendasi spesifik per lini bisnis dan proses end-to-end; untuk sistem SAP ERP, rekomendasi diarahkan ke langkah menuju S/4HANA; tersedia dalam versi discovery (satu kali) dan full edition (monitoring berkelanjutan, update harian)
> **Source**: SAP Community — "What You Must Know About SAP Signavio Process Insights, discovery edition", https://community.sap.com/t5/technology-blog-posts-by-sap/what-you-must-know-about-sap-signavio-process-insights-discovery-edition/ba-p/13864928; SAP Community — "Generally available now: SAP Signavio Process Insights, discovery edition", https://community.sap.com/t5/enterprise-resource-planning-blog-posts-by-sap/generally-available-now-sap-signavio-process-insights-discovery-edition/ba-p/13605615; SAP product page, https://www.sap.com/products/business-transformation-management/business-process-assessment-service-with-sap-signavio-process-insights-discovery-edition.html
> **Confidence**: high

> **Claim**: SAP Signavio Process Insights (full edition) menawarkan 270+ Process Performance Indicators (PPI) untuk monitoring performa proses
> **Number/specific**: 270+ PPI mengukur completion rates, automation rates, cycle times, dan exceptions; angka ini berlaku untuk full edition, bukan discovery edition
> **Source**: Signavio product page — SAP Signavio Process Insights, https://www.signavio.com/products/process-insights/ (diakses 2026-06-08)
> **Confidence**: medium — angka 270+ ada di situs signavio.com; konfirmasi apakah ini berlaku juga untuk discovery edition atau hanya full edition. Penulis sebaiknya mengacu pada angka ini untuk full edition saja, atau menghilangkan angka spesifik jika merujuk ke discovery edition.

> **Claim**: SAPinsider 2025 melaporkan lebih dari 60% perusahaan yang melakukan migrasi S/4HANA mengalami keterlambatan jadwal, kelebihan anggaran, atau keduanya
> **Number/specific**: 60%+ mengalami budget overruns dan/atau schedule delays; migrasi rata-rata menghabiskan waktu 30% lebih lama dari rencana; ~65% mengidentifikasi defisiensi kualitas "severe to very severe" pasca go-live
> **Source**: SAPinsider — "SAP S/4HANA Migration Benchmark Report 2025" (Februari 2025), Executive Summary PDF tersedia di https://sapinsider.org/wp-content/uploads/2025/02/SAPinsider-2025-02-SAP-S4HANA-Migration-Executive-SummaryRV.pdf; ringkasan di https://sapinsider.org/research-reports/sap-s-4hana-migration-2025/
> **Confidence**: medium — PDF tidak terbaca secara verbatim (binary); angka dikonfirmasi dari multiple secondary citations yang mengutip laporan yang sama. Penulis label: "Menurut laporan SAPinsider 2025..."

> **Claim**: 50% responden dalam survei SAPinsider 2025 kini menggunakan SAP Readiness Check
> **Number/specific**: 50% responden menggunakan SAP Readiness Check; 32% telah berhasil bertransisi ke S/4HANA (naik 10% dari 2024); 21% masih dalam fase evaluasi
> **Source**: SAPinsider — "SAP S/4HANA Migration Benchmark Report 2025" ibid, dikutip dari https://synoviadigital.com/insights/sap-s-4hana-migration-trends-heading-into-2026/ dan https://sapinsider.org/research-reports/sap-s-4hana-migration-2025/ (diakses 2026-06-08)
> **Confidence**: medium — same caveat sebagai klaim di atas; atribusikan ke SAPinsider 2025.

> **Claim**: Fase discovery/readiness assessment untuk migrasi S/4HANA umumnya berlangsung sekitar 4 minggu
> **Number/specific**: Discovery & Readiness phase: sekitar 4 minggu (untuk organisasi dengan kompleksitas menengah); beberapa partner menawarkan complimentary 4-week S/4HANA readiness assessment
> **Source**: Multiple implementation partner sources; SAVIC Technologies — "SAP S/4HANA Migration Readiness Assessment Framework", https://www.savictech.com/insights/sap-s4hana-migration-readiness-framework/ (diakses 2026-06-08)
> **Confidence**: medium — angka 4 minggu konsisten di berbagai sumber partner, namun bervariasi tergantung skala perusahaan. Penulis label: "umumnya berlangsung 2–6 minggu, tergantung skala dan kompleksitas sistem."

> **Claim**: SAP S/4HANA 2023 release dan seterusnya memiliki siklus rilis 2 tahunan dengan 7 tahun mainstream maintenance per rilis
> **Number/specific**: Mulai rilis 2023: siklus 2 tahun (dari sebelumnya tidak terstruktur); mainstream maintenance 7 tahun per rilis (dari sebelumnya 5 tahun)
> **Source**: SAP News — "New SAP S/4HANA Release and Maintenance Strategy to Deliver Greater Innovation and Flexibility" (2022-09-09), https://news.sap.com/2022/09/new-sap-s4hana-release-maintenance-strategy/
> **Confidence**: high

> **Claim**: Kualitas data master (master data) adalah salah satu faktor kritis dalam kesiapan migrasi ERP; S/4HANA menggunakan model data yang disederhanakan yang mensyaratkan data yang bersih dan konsisten
> **Number/specific**: S/4HANA menggunakan data model yang berbeda dari ECC (contoh: Business Partner menggantikan Customer/Vendor terpisah); data kotor dapat menyebabkan gagal migrasi atau defisiensi kualitas pasca go-live. ~65% responden SAPinsider 2025 melaporkan defisiensi kualitas "severe to very severe" pasca go-live.
> **Source**: SAVIC Technologies ibid; SAPinsider 2025 ibid; SAP Help Portal — Custom Code Migration Guide, https://help.sap.com/doc/9dcbc5e47ba54a5cbb509afaa49dd5a1/2025.000/en-US/CustomCodeMigration_EndToEnd.pdf
> **Confidence**: high (fakta teknis data model S/4HANA sudah well-established)

> **Claim**: Audit custom code (ABAP) sebelum migrasi sangat penting; organisasi yang melewatinya sering mengalami cost overrun 30–50%
> **Number/specific**: "Organizations that skip this audit routinely encounter 30–50% cost overruns at implementation" — dari analisis praktisi
> **Source**: Multiple implementation practitioner analyses; dikutip via https://www.scmsoftwarelab.com/sap-s4hana-implementation-cost-guide.html dan analisis serupa (bukan sumber SAP-official, namun consistent across sources)
> **Confidence**: low — angka 30–50% adalah praktitioner estimate, bukan studi peer-reviewed. Penulis jangan kutip angka spesifik ini; gunakan framing umum: "kustomisasi ABAP yang tidak diaudit sebelum migrasi menjadi salah satu penyebab pembengkakan biaya yang paling sering ditemui."

> **Claim**: Fit-gap analysis / fit-to-standard adalah teknik membandingkan proses bisnis as-is dengan standar S/4HANA untuk mengidentifikasi gap sebelum konfigurasi
> **Number/specific**: Fit = fungsionalitas cocok; Gap = fungsionalitas yang hilang dan harus ditangani dengan konfigurasi, custom code, atau perubahan proses bisnis
> **Source**: ERP Research — "ERP Fit Gap Analysis Template", https://www.erpresearch.com/pages/en-us/erp-fit-gap-analysis-template; RSM — "Find the right cloud ERP system with a fit gap analysis", https://rsmus.com/insights/services/digital-transformation/find-the-right-cloud-erp-system-with-a-fit-gap-analysis.html (diakses 2026-06-08)
> **Confidence**: high — konsep well-established, konsisten di semua sumber

> **Claim**: Soltius adalah SAP Platinum Partner melalui United VARs, berpengalaman sejak 1998, dengan 200+ konsultan dan 120+ klien
> **Number/specific**: 1998 (berdiri), 200+ konsultan, 120+ klien; SAP Platinum Certified Channel Partner & VAR; penghargaan Best RISE Partner dan Best Cloud Partner (2021)
> **Source**: knowledge_base/company_profile.md (verified by Soltius directly)
> **Confidence**: high

---

## Solution focus + Soltius anchor (from product_matrix.md)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| SAP Readiness Check | Alat self-service gratis untuk pelanggan SAP dengan support contract aktif; menganalisis custom code, simplification items, add-on, sizing, integrasi; tersedia via SAP for Me / Cloud ALM | H2 #4 ("Alat dan Cara Mengukur Kesiapan") | — (tool milik SAP, Soltius membantu menginterpretasikan hasilnya) |
| SAP Signavio Process Insights, discovery edition | Analisis proses bisnis satu kali, gratis; mengidentifikasi inefisiensi proses dan rekomendasi menuju S/4HANA; berbasis data sistem SAP ERP pelanggan | H2 #4 | — (tool milik SAP/Signavio) |
| SAP S/4HANA Cloud (Private/Public Edition) | Tujuan migrasi cloud; SAP memiliki maintenance commitment hingga 2040; ECC end-of-mainstream-maintenance 2027 | H2 #2 (konteks urgensi) | — |
| SAP Clean Core | Tingkat kebersihan custom code adalah komponen kunci kesiapan migrasi; dimensi clean core menentukan kompleksitas migrasi | H2 #3 (dimensi custom code), cousin link | — |
| ERP Migration Strategy (Soltius service) | Soltius memulai setiap engagement migrasi dengan fase discovery/asesmen kesiapan; sebagai SAP Platinum Partner memiliki pengalaman cross-industry | Penutup (CTA); satu kalimat aside di H2 #4 | ERP Strategy + Migration service; SAP Platinum Partner via United VARs; Best RISE & Best Cloud Partner (2021) |

**Reminder**: Soltius **implements/migrates/supports** — tidak membangun alat SAP di atas. Max 2–3 self-mentions: (1) satu kalimat aside di H2 #4 tentang objektivitas asesmen bersama mitra; (2) closing CTA dengan framing SAP Platinum Partner.

---

## Authoritative external sources (untuk writer gunakan sebagai outbound links)

1. **SAP Support Portal — Maintenance Strategy for SAP S/4HANA and Business Suite 7** (diakses 2026-06-08)
   URL: https://support.sap.com/en/release-upgrade-maintenance/maintenance-information/maintenance-strategy/s4hana-business-suite7.html
   *Backs*: ECC mainstream maintenance berakhir 2027; extended support hingga 2030 dengan premi 2%; S/4HANA maintenance commitment hingga 2040. Ini adalah sumber primer paling otoritatif untuk klaim ECC deadline.

2. **SAP Community — SAP Readiness Check topic hub** (diakses 2026-06-08)
   URL: https://pages.community.sap.com/topics/readiness-check
   *Backs*: Deskripsi, cakupan, dan ketersediaan SAP Readiness Check; bahwa alat ini gratis untuk pelanggan dengan SAP support contract.

3. **SAP News — "New SAP S/4HANA Release and Maintenance Strategy"** (2022-09-09)
   URL: https://news.sap.com/2022/09/new-sap-s4hana-release-maintenance-strategy/
   *Backs*: Siklus rilis S/4HANA 2 tahunan; 7 tahun mainstream maintenance per rilis; komitmen 2040.

4. **SAPinsider — "SAP S/4HANA Migration Benchmark Report 2025"** (Februari 2025)
   URL: https://sapinsider.org/research-reports/sap-s-4hana-migration-2025/
   *Backs*: 60%+ organisasi mengalami keterlambatan/overrun; 50% menggunakan SAP Readiness Check; 32% sudah migrasi.

5. **McKinsey — "Why do most transformations fail?"**
   URL: https://www.mckinsey.com/capabilities/transformation/our-insights/why-do-most-transformations-fail-a-conversation-with-harry-robinson
   *Backs*: ~70% transformasi berskala besar gagal; faktor utama bukan teknologi melainkan orang/budaya.

---

## FAQ Q&As (7 drafted, Bahasa Indonesia)

### Apa itu ERP migration readiness assessment?
ERP migration readiness assessment adalah evaluasi terstruktur yang dilakukan *sebelum* proyek migrasi dimulai untuk menilai kesiapan perusahaan dari berbagai dimensi — mulai dari kualitas data, kustomisasi sistem, kapasitas SDM, hingga anggaran dan kepatuhan. Tujuannya bukan sekadar membuat checklist, melainkan membantu pemimpin bisnis memutuskan apakah sudah layak memulai migrasi, atau perlu memperkuat fondasi dulu.

### Berapa lama proses asesmen kesiapan migrasi ERP berlangsung?
Durasi asesmen bervariasi tergantung skala dan kompleksitas sistem perusahaan. Untuk perusahaan menengah dengan satu landscape SAP, asesmen umumnya berlangsung 2–6 minggu, mencakup pengumpulan data sistem, wawancara stakeholder, analisis custom code, dan penyusunan laporan kesiapan. Semakin besar volume kustomisasi ABAP dan integrasi pihak ketiga, semakin panjang durasi yang dibutuhkan.

### Apa itu SAP Readiness Check dan apakah berbayar?
SAP Readiness Check adalah alat self-service yang disediakan SAP, gratis untuk pelanggan yang memiliki kontrak SAP support aktif. Alat ini menganalisis sistem SAP Anda secara otomatis — mencakup custom code, simplification items, kompatibilitas add-on, kebutuhan sizing HANA, dan titik integrasi — lalu menghasilkan laporan kesiapan menuju S/4HANA. Hasilnya dapat diakses melalui portal SAP for Me atau SAP Cloud ALM.

### Data seperti apa yang harus dibersihkan sebelum migrasi ERP ke cloud?
Data yang paling kritis meliputi: data master (master data) seperti material, pelanggan, dan pemasok; data transaksi historis yang tidak lagi aktif; serta konfigurasi duplikat atau inkonsisten. SAP S/4HANA menggunakan model data yang lebih ringkas dibandingkan ECC — misalnya, entitas Customer dan Vendor digabung menjadi Business Partner. Data yang tidak bersih sebelum migrasi menjadi salah satu penyebab utama defisiensi kualitas pasca go-live.

### Siapa yang harus terlibat dalam readiness assessment?
Asesmen kesiapan bukan tugas tim IT semata. Setidaknya lima pihak perlu dilibatkan: (1) sponsor eksekutif yang memiliki wewenang mengalokasikan anggaran dan mendorong perubahan; (2) process owner dari setiap lini bisnis utama; (3) tim IT/basis yang memahami lanskap sistem; (4) tim keuangan untuk validasi TCO dan baseline biaya; serta (5) perwakilan kepatuhan/hukum untuk aspek regulasi dan keamanan data.

### Apa bedanya readiness assessment dengan Business Blueprint (Business Blueprint fase dalam implementasi SAP)?
Readiness assessment dilakukan *sebelum* proyek dimulai — tujuannya menilai apakah perusahaan layak dan siap memulai migrasi. Business Blueprint (atau dalam metodologi SAP Activate disebut Explore phase) dilakukan *di dalam* proyek setelah kontrak ditandatangani — tujuannya mendokumentasikan proses bisnis to-be secara rinci dan memetakan gap dengan standar S/4HANA. Readiness assessment adalah gerbang masuk; Blueprint adalah fondasi desain solusi.

### Apa tanda-tanda perusahaan BELUM siap migrasi ERP ke cloud?
Ada tiga sinyal merah yang paling sering ditemui: (1) tidak ada sponsor eksekutif yang secara aktif mendukung proyek — tanpa dukungan ini, perubahan organisasi hampir pasti terhambat; (2) data master tidak terkelola, banyak duplikat, atau belum pernah diaudit — ini akan menyulitkan migrasi data dan menurunkan kualitas sistem baru; (3) tim inti sudah kelebihan beban proyek lain — migrasi ERP menuntut perhatian penuh dari subject matter expert bisnis, bukan hanya tim IT.

---

## Data tables for the writer

### 8 Dimensi Kesiapan Migrasi ERP ke Cloud

| # | Dimensi | Pertanyaan Self-Check Utama | Alat Bantu SAP |
|---|---|---|---|
| 1 | Strategi & tujuan bisnis | Apakah ada business case yang terdokumentasi? Siapa sponsor eksekutifnya? | — |
| 2 | Inventarisasi sistem & sizing | Berapa banyak modul, add-on, dan integrasi yang berjalan? Berapa volume data? | SAP Readiness Check (sizing) |
| 3 | Kualitas & pemetaan data master | Seberapa bersih data master? Sudah diaudit kapan terakhir? | SAP Readiness Check (data profiling), Signavio Process Insights |
| 4 | Custom code / utang teknis | Berapa banyak kode ABAP kustom? Berapa yang masih aktif digunakan? | SAP Readiness Check (custom code analysis) |
| 5 | Kesiapan & keterampilan SDM | Apakah ada tim internal yang memahami S/4HANA? | — |
| 6 | Kapasitas change management | Apakah organisasi pernah melewati transformasi besar? Berapa kapasitas training? | SAP Signavio Process Insights |
| 7 | Kepatuhan & keamanan | Apakah ada regulasi industri/data residency yang mempengaruhi pilihan edisi cloud? | — |
| 8 | Baseline biaya / TCO | Apakah TCO saat ini sudah dipetakan? Berapa biaya ECC maintenance per tahun? | — |

### Tanda Siap vs. Belum Siap Migrasi

| Indikator | Siap Migrasi | Pertimbangkan Menunda |
|---|---|---|
| Sponsor eksekutif | Ada, aktif terlibat | Tidak ada atau pasif |
| Kualitas data master | Bersih, teraudit | Banyak duplikat, tidak teraudit |
| Custom code | < 20% kode aktif, terdokumentasi | > 50% kode aktif, tidak terdokumentasi |
| Kapasitas tim | Tim inti tersedia, tidak overloaded | Tim inti sudah kelebihan beban proyek lain |
| Business case | TCO terdokumentasi, target ROI jelas | Tidak ada business case formal |
| Kepatuhan | Persyaratan regulasi sudah dipetakan | Belum ada kajian data residency/privasi |

---

## Edge cases & nuance

- **Readiness assessment ≠ jaminan sukses**: Asesmen yang baik meminimalkan risiko, tetapi tidak menghilangkannya. Penulis jangan menjanjikan bahwa asesmen = proyek pasti berhasil. Framing yang tepat: "menurunkan risiko kegagalan secara signifikan."

- **SAP Readiness Check bukan pengganti asesmen konsultasi**: Alat SAP menganalisis data teknis secara otomatis, tetapi tidak menggantikan wawancara stakeholder, penilaian change readiness, atau analisis strategic fit. Keduanya saling melengkapi.

- **Tidak semua perusahaan membutuhkan 8 dimensi dengan bobot yang sama**: Perusahaan greenfield (baru) lebih menekankan dimensi 1 (strategi), 5 (SDM), dan 8 (TCO). Perusahaan yang sudah berjalan di ECC lebih menekankan dimensi 2 (inventarisasi), 3 (data), dan 4 (custom code).

- **ECC EHP 0–5 sudah berakhir mainstream maintenance akhir 2025**: Hanya ECC 6.0 dengan Enhancement Package 6–8 yang mendapat mainstream maintenance hingga akhir 2027 dan extended maintenance hingga 2030. Perusahaan di EHP 0–5 sudah dalam periode kritis. Penulis harus hati-hati: jangan sebut "ECC berakhir 2027" secara blanket tanpa menyebut bahwa ini berlaku untuk EHP 6–8.

- **"Asesmen berbayar atau gratis?"**: Ini adalah pertanyaan PAA yang muncul. Jawabannya bergantung: SAP Readiness Check (tool) gratis untuk pemegang support contract. Asesmen konsultasi menyeluruh (termasuk wawancara, fit-gap, TCO modeling) adalah layanan berbayar dari mitra implementasi. Penulis sebaiknya membedakan keduanya di FAQ.

---

## Flags (open factual risk)

- ⚠️ **Gartner failure rate (55–75% / "lebih dari 70%")**: Halaman Gartner ada di balik paywall — tidak bisa diambil verbatim. Angka dikonfirmasi dari multiple reputable secondary citations. Penulis harus menggunakan framing "menurut riset Gartner" dan menggunakan rentang "55–75%" daripada satu angka, atau link ke halaman Gartner publik yang tersedia. Jangan claim sebagai angka pasti.

- ⚠️ **McKinsey 70% transformations fail**: URL berhasil diidentifikasi tetapi halaman timeout saat fetch. Angka dikonsensus di berbagai sumber yang mengutip McKinsey. Penulis harus label "menurut McKinsey" — tidak memuat angka berbeda atau lebih spesifik tanpa sumber asli yang terbaca.

- ⚠️ **ECC end-of-maintenance: detail EHP 0–5 vs EHP 6–8**: ECC EHP 0–5 berakhir mainstream maintenance akhir 2025 (sudah lewat); ECC EHP 6–8 berakhir akhir 2027. Penulis yang menulis "ECC berakhir 2027" tanpa kualifikasi ini bisa menyesatkan perusahaan di EHP lama. Rekomendasi: gunakan framing "SAP Business Suite 7 (ECC 6.0) mainstream maintenance berakhir akhir 2027 untuk enhancement package terbaru" — atau cukup sebut 2027 sebagai deadline menyeluruh dengan catatan bahwa sebagian sudah berakhir lebih awal.

- ⚠️ **SAP Signavio Process Insights — discovery edition vs full edition**: Angka 270+ PPI hanya berlaku untuk full edition. Discovery edition lebih terbatas (analisis satu kali, subset indikator). Penulis jangan atribusikan angka 270+ PPI ke discovery edition. Cukup sebut: "Signavio Process Insights, discovery edition menyediakan analisis satu kali gratis yang mengidentifikasi inefisiensi proses dan rekomendasi menuju S/4HANA."

- ⚠️ **Durasi readiness assessment "4 minggu"**: Angka ini konsisten di berbagai sumber partner tetapi sangat bergantung pada kompleksitas sistem. Untuk perusahaan besar dengan lanskap ERP yang kompleks, bisa 2–4 bulan. Penulis gunakan rentang: "umumnya 2–6 minggu untuk perusahaan menengah; lebih panjang untuk lanskap yang lebih kompleks."

---

## Definition snippet draft (40–60 words)

> ERP migration readiness assessment adalah evaluasi terstruktur yang dilakukan sebelum proyek migrasi ERP ke cloud dimulai, mencakup penilaian kualitas data, kustomisasi sistem, kesiapan SDM, kapasitas change management, kepatuhan, dan baseline biaya. Hasilnya menentukan apakah perusahaan siap memulai, atau perlu memperkuat fondasi terlebih dahulu sebelum satu rupiah pun dikeluarkan untuk implementasi.

*(57 kata — dalam batas 40–60)*

---

## Notes for image-planner

- **Concept 1 (H2 #3 — 8 Dimensi)**: Infografis roda/wheel atau diagram radial menampilkan 8 dimensi kesiapan migrasi ERP, masing-masing diberi label singkat. Warna yang lebih gelap = dimensi yang lebih sering menjadi bottleneck (data, custom code, change management). Format: clean, corporate, bisa discreenshot dan dishare di internal meeting.

- **Concept 2 (H2 #4 — alat asesmen)**: Diagram dua kolom yang memperlihatkan alur kerja: kiri = SAP Readiness Check (input: data sistem, output: laporan teknis); kanan = SAP Signavio Process Insights (input: data transaksi, output: rekomendasi proses). Di bawah keduanya: label "diinterpretasikan bersama mitra implementasi." Format: flowchart sederhana, mudah dibaca di desktop.

- **Concept 3 (H2 #5 — sinyal belum siap)**: Tabel dua kolom "Siap vs Belum Siap" dalam format kartu atau checklist visual. Warna hijau untuk kondisi siap, merah/oranye untuk kondisi perlu perhatian. Cocok untuk kutipan langsung atau screenshot oleh pembaca yang ingin bagikan ke rekan mereka.
