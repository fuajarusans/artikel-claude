---
brief_id: "business-intelligence-03"
researcher_run_date: "2026-09-21"
sources_cited: 9
flags: 5
---

# Research Dossier: BI untuk Laporan Keberlanjutan (ESG) — Dari Data Tersebar ke Laporan yang Diaudit

## TL;DR for the writer

- **Regulasi Indonesia sudah nyata dan berlapis.** POJK 51/POJK.03/2017 mewajibkan Laporan Keberlanjutan bagi lembaga jasa keuangan (LJK), emiten, dan perusahaan publik (batas penyampaian ke OJK 30 April tahun berikutnya bila terpisah dari laporan tahunan). Di atasnya, **Standar Pengungkapan Keberlanjutan (SPK) — PSPK 1 & PSPK 2 — berlaku efektif 1 Januari 2027** dan konvergen dengan IFRS S1/S2 (ISSB). Ini pergeseran dari laporan naratif ke **pengungkapan terukur, dapat dibandingkan, dan dapat diaudit** — itulah persoalan data/BI.
- **Ini artikel kepatuhan: presisi wajib.** Semua tanggal/kewajiban harus akurat. Aman untuk ditulis: POJK 51 (batas 30 April), SPK/PSPK efektif 1 Jan 2027, GHG Protocol scope 1/2/3, IFRS S1/S2 vs GRI.
- **Pembagian peran produk SAP KRUSIAL — jangan salah atribusi.** SAP Analytics Cloud (SAC) = lapisan **analitik/pelaporan/dashboard** (agregasi, visualisasi, distribusi). Yang **menghitung/menyimpan data emisi** adalah rangkaian produk keberlanjutan SAP: **SAP Sustainability Control Tower** (sentralisasi data ESG untuk pelaporan & kepatuhan), **SAP Sustainability Footprint Management** (kalkulasi carbon footprint produk/korporat), dan **SAP Green Ledger** (memadukan akuntansi karbon dengan akuntansi finansial). JANGAN memposisikan SAC sebagai penghitung emisi.
- **Scope 3 = celah artikel yang paling tajam.** Emisi scope 3 (rantai nilai/supplier) bisa 70–90% dari total emisi dan datanya harus dikumpulkan dari vendor — di sinilah sistem manajemen vendor/pengadaan (SAP Ariba, SAP Fieldglass) menjadi kanal data. Tidak ada kompetitor SERP yang membahas ini.
- **Soltius anchor** (closing, ≤3 self-mention): **Data and AI Consulting** + Analytics + Data Management — menata data keberlanjutan jadi satu sumber yang konsisten & auditable, lalu memvisualisasikannya di SAC. Soltius **mengimplementasikan/mengintegrasikan**, bukan membuat produk SAP, dan **bukan lembaga verifikasi/assurance ESG**.

---

## Core facts (verified)

> **Claim**: POJK 51/POJK.03/2017 mewajibkan penerapan keuangan berkelanjutan dan penyusunan Laporan Keberlanjutan (Sustainability Report).
> **Number/specific**: Wajib bagi **Lembaga Jasa Keuangan (LJK), Emiten, dan Perusahaan Publik**. LJK menyampaikan dua dokumen ke OJK: Rencana Aksi Keuangan Berkelanjutan (RAKB) dan Laporan Keberlanjutan.
> **Source**: OJK — Peraturan OJK No. 51/POJK.03/2017 (ojk.go.id / JDIH BPK RI), diakses 2026-09-21
> **Confidence**: high

> **Claim**: Bila Laporan Keberlanjutan disampaikan terpisah dari laporan tahunan, ada tenggat penyampaian tahunan ke OJK.
> **Number/specific**: Paling lambat **30 April tahun berikutnya**; laporan juga wajib dipublikasikan melalui situs web perusahaan (atau media lain yang mudah diakses publik bila belum punya situs).
> **Source**: OJK — POJK 51/POJK.03/2017, salinan resmi (ojk.go.id/sustainable-finance), diakses 2026-09-21
> **Confidence**: high

> **Claim**: Indonesia menerbitkan Standar Pengungkapan Keberlanjutan (SPK) nasional pertama, terdiri dari PSPK 1 dan PSPK 2.
> **Number/specific**: **PSPK 1** = "Persyaratan Umum Pengungkapan Informasi Keuangan terkait Keberlanjutan"; **PSPK 2** = "Pengungkapan terkait Iklim". Diterbitkan oleh **Dewan Standar Keberlanjutan IAI (DSK IAI)** pada pertengahan 2025.
> **Source**: IAI — web.iaiglobal.or.id (Berita IAI, "Standar Pengungkapan Keberlanjutan Efektif Per 1 Januari 2027"), diakses 2026-09-21
> **Confidence**: high

> **Claim**: SPK (PSPK 1 & PSPK 2) berlaku efektif secara serentak.
> **Number/specific**: Efektif **1 Januari 2027**.
> **Source**: IAI — web.iaiglobal.or.id, diakses 2026-09-21
> **Confidence**: high

> **Claim**: PSPK 1 & PSPK 2 konvergen/selaras dengan standar ISSB.
> **Number/specific**: Konvergen dengan **IFRS Sustainability Disclosure Standards — IFRS S1 (persyaratan umum) dan IFRS S2 (iklim)** yang diterbitkan ISSB; keduanya mengatur inti pengungkapan: tata kelola, strategi, manajemen risiko, serta metrik & target.
> **Source**: IAI — web.iaiglobal.or.id; IFRS Foundation/ISSB (rujukan standar), diakses 2026-09-21
> **Confidence**: high

> **Claim**: Emisi scope 1 adalah emisi langsung dari sumber yang dimiliki/dikendalikan perusahaan.
> **Number/specific**: Contoh: pembakaran bahan bakar di boiler, tungku, dan kendaraan milik perusahaan.
> **Source**: GHG Protocol (ghgprotocol.org); US EPA Scope 1 & 2 guidance, diakses 2026-09-21
> **Confidence**: high

> **Claim**: Emisi scope 2 adalah emisi tidak langsung dari energi yang dibeli.
> **Number/specific**: Mencakup listrik, uap (steam), pemanas, dan pendingin yang dibeli dan digunakan.
> **Source**: GHG Protocol (ghgprotocol.org), diakses 2026-09-21
> **Confidence**: high

> **Claim**: Emisi scope 3 adalah emisi rantai nilai (di luar kendali langsung perusahaan) dan merupakan kategori paling sulit didata.
> **Number/specific**: GHG Protocol Corporate Value Chain (Scope 3) Standard mengidentifikasi **15 kategori** (hulu & hilir); bagi sebagian besar perusahaan, scope 3 mencapai **70–90% dari total emisi**.
> **Source**: GHG Protocol — Corporate Value Chain (Scope 3) Standard (ghgprotocol.org), diakses 2026-09-21
> **Confidence**: high

> **Claim**: SAP Sustainability Control Tower adalah solusi untuk mensentralisasi dan mengelola data karbon/ESG untuk pelaporan dan kepatuhan.
> **Number/specific**: Menyatukan data karbon untuk pelaporan, kepatuhan regulasi, dan target keberlanjutan; menghitung corporate carbon footprint; dapat mengimpor data emisi GRK dari SAP Sustainability Footprint Management.
> **Source**: SAP — sap.com (Carbon Accounting Software) & community.sap.com (SCT Q1–Q2 2026 roadmap), diakses 2026-09-21
> **Confidence**: high

> **Claim**: SAP Sustainability Footprint Management menghitung jejak karbon produk dan korporat berbasis ERP.
> **Number/specific**: Pendekatan ERP-centric untuk menghitung product & corporate carbon footprint, lalu mengintegrasikan hasilnya ke proses bisnis.
> **Source**: SAP — sap.com/products/scm/sustainability-footprint-management, diakses 2026-09-21
> **Confidence**: high

> **Claim**: SAP Green Ledger memadukan data karbon dengan data finansial (akuntansi karbon).
> **Number/specific**: Solusi keuangan yang memungkinkan alokasi data karbon ke profit center/segmen bisnis/dimensi finansial lain; diluncurkan sekitar akhir 2024 dan terus dikembangkan (rilis pembaruan Q1-2026).
> **Source**: SAP — community.sap.com (SAP Green Ledger Q1-26 Release); TechTarget (searchsap), diakses 2026-09-21
> **Confidence**: high (tanggal peluncuran: medium — sebut "diperkenalkan sekitar akhir 2024" tanpa tanggal presisi)

> **Claim**: SAP Analytics Cloud (SAC) adalah solusi BI/analitik (dashboard, pelaporan, perencanaan, prediktif) — lapisan pelaporan, bukan penghitung emisi.
> **Number/specific**: Dalam konteks ESG, SAC berperan mengagregasi, memvisualisasi, dan mendistribusikan laporan; sumber/penghitung data emisi adalah produk keberlanjutan SAP (SCT/SFM/Green Ledger).
> **Source**: knowledge_base/product_matrix.md (baris Business Intelligence); SAP sustainability product pages, diakses 2026-09-21
> **Confidence**: high

> **Claim**: SAP Ariba dan SAP Fieldglass adalah dua solusi pengadaan/vendor yang berbeda fokus.
> **Number/specific**: **SAP Ariba** = spend/procurement management + supplier network (sourcing, onboarding supplier, katalog, manajemen pemasok). **SAP Fieldglass** = **Vendor Management System (VMS)** untuk external/contingent workforce & services procurement (tenaga kerja kontrak, freelancer, SOW). Keduanya dapat diintegrasikan (sinkronisasi master data & alur requisition).
> **Source**: SAP — help.sap.com (Fieldglass–Ariba Integration); LeverX comparison, diakses 2026-09-21
> **Confidence**: high

> **Claim**: Data emisi scope 3 dan data sosial rantai pasok bersumber dari supplier, sehingga sistem pengadaan/manajemen vendor menjadi kanal pengumpulannya.
> **Number/specific**: Untuk pertukaran data keberlanjutan supplier (mis. product carbon footprint), SAP mengarahkan ke jalur supplier network/pengadaan; secara fungsional, "vendor/supplier management system" adalah titik masuk data scope 3.
> **Source**: GHG Protocol (scope 3 = rantai nilai) + SAP Ariba/Fieldglass positioning, diakses 2026-09-21
> **Confidence**: medium (lihat Flags — jalur produk spesifik SAP untuk pertukaran data karbon supplier perlu penamaan hati-hati)

> **Claim**: Soltius adalah SAP Platinum Certified Channel Partner (via United VARs) dengan layanan Data and AI Consulting, Analytics, dan Data Management.
> **Number/specific**: Berdiri 1998; anak perusahaan Metrodata (sejak 2008); 200+ konsultan; 120+ klien; kontributor pendapatan terbesar bagi SAP Indonesia (sejak 2015). Soltius mengimplementasikan/mengintegrasikan SAP — tidak membuatnya.
> **Source**: knowledge_base/company_profile.md (pre-approved), diakses 2026-09-21
> **Confidence**: high

---

## Solution focus + Soltius anchor (from product_matrix.md)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| **SAP Analytics Cloud (SAC)** | Lapisan analitik/pelaporan/dashboard ESG — agregasi, visualisasi, distribusi laporan. BUKAN penghitung emisi. | H2 #3 (dari data tersebar ke laporan), contoh lapisan pelaporan | **Data and AI Consulting** + Analytics (closing) |
| **SAP Sustainability Control Tower / Footprint Management / Green Ledger** | Sumber/penghitung & sentralisasi data ESG/karbon; SCT untuk pelaporan-kepatuhan, SFM untuk kalkulasi footprint, Green Ledger untuk padu karbon-finansial. Bahas fungsional bila ragu penamaan. | H2 #3 & #4 (aside teknis), vendor-neutral | Data Management (menata sumber data) |
| **SAP Ariba / SAP Fieldglass (VMS)** | Kanal data scope 3 dari supplier; Ariba = procurement/supplier network, Fieldglass = VMS external workforce. | H2 #4 (scope 3) — cousin link `vendor management system` | (bukan self-mention; hanya teknis + internal link) |

Reminder: Soltius **implements/migrates/integrates/supports** teknologi ini — tidak membuatnya, dan **bukan lembaga assurance/verifikasi ESG**. Max 2–3 Soltius self-mentions (closing + opsional 1 aside).

**Anchor phrasing (closing):** "Melalui layanan Data and AI Consulting, Soltius membantu perusahaan menata data keberlanjutan yang tersebar menjadi satu sumber yang konsisten dan dapat diaudit, lalu memvisualisasikannya di SAP Analytics Cloud untuk pelaporan ESG." Opsional aside (mid-article, netral): "Kredibilitas laporan ESG ditentukan oleh tata kelola data di hulunya, bukan oleh dashboard di hilirnya."

---

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **OJK — POJK 51/POJK.03/2017 (salinan resmi)** — https://www.ojk.go.id/sustainable-finance/id/peraturan/peraturan-ojk/Documents/SAL%20POJK%2051%20-%20keuangan%20berkelanjutan.pdf — *what it backs*: kewajiban Laporan Keberlanjutan bagi LJK/emiten/perusahaan publik, cakupan, dan tenggat 30 April.
2. **IAI — DSK IAI, "Standar Pengungkapan Keberlanjutan Efektif Per 1 Januari 2027"** — https://web.iaiglobal.or.id/Berita-IAI/detail/standar_pengungkapan_keberlanjutan_efektif_per_1_januari_2027 — *what it backs*: PSPK 1 & PSPK 2, efektif 1 Jan 2027, konvergen dengan IFRS S1/S2.
3. **GHG Protocol — Corporate Value Chain (Scope 3) Standard** — https://ghgprotocol.org/corporate-value-chain-scope-3-standard — *what it backs*: definisi scope 1/2/3, 15 kategori scope 3, porsi 70–90% total emisi.
4. **SAP — Carbon Accounting / Sustainability Control Tower** — https://www.sap.com/products/sustainability/carbon-accounting.html — *what it backs*: peran SCT/SFM/Green Ledger sebagai sumber/penghitung & sentralisasi data karbon (kapabilitas produk).

Priority order terpenuhi: sumber primer regulasi (OJK/IAI) > standar internasional (GHG Protocol/ISSB) > SAP official untuk kapabilitas produk.

---

## FAQ Q&As (6 drafted, Bahasa Indonesia)

### Apa itu laporan keberlanjutan dan apa bedanya dengan laporan tahunan?
Laporan keberlanjutan (sustainability report) adalah dokumen yang mengungkapkan kinerja perusahaan pada aspek lingkungan, sosial, dan tata kelola (ESG) secara terukur. Bedanya dengan laporan tahunan: laporan tahunan berfokus pada kinerja finansial dan operasional, sedangkan laporan keberlanjutan menyoroti dampak non-finansial seperti emisi, energi, limbah, dan ketenagakerjaan. Menurut POJK 51/POJK.03/2017, keduanya bisa digabung atau terpisah—bila terpisah, laporan keberlanjutan wajib disampaikan ke OJK paling lambat 30 April tahun berikutnya.

### Siapa yang wajib membuat laporan keberlanjutan menurut POJK 51?
POJK 51/POJK.03/2017 mewajibkan tiga kelompok: Lembaga Jasa Keuangan (LJK, seperti bank dan perusahaan pembiayaan), Emiten, dan Perusahaan Publik. LJK bahkan wajib menyampaikan dua dokumen ke OJK—Rencana Aksi Keuangan Berkelanjutan (RAKB) dan Laporan Keberlanjutan. Ke depan, cakupan pengungkapan diperkuat oleh Standar Pengungkapan Keberlanjutan (PSPK 1 & PSPK 2) yang berlaku efektif 1 Januari 2027 dan selaras dengan standar global IFRS S1/S2.

### Apa itu emisi scope 1, 2, dan 3?
Klasifikasi ini berasal dari GHG Protocol. Scope 1 adalah emisi langsung dari sumber yang dimiliki/dikendalikan perusahaan (mis. bahan bakar kendaraan dan boiler). Scope 2 adalah emisi tidak langsung dari energi yang dibeli (listrik, uap, pemanas, pendingin). Scope 3 adalah emisi rantai nilai di luar kendali langsung—dari supplier hingga penggunaan produk—yang terbagi dalam 15 kategori dan sering mencapai 70–90% total emisi, sehingga paling sulit dikumpulkan.

### Apa perbedaan GRI dan IFRS S1/S2 (ISSB)?
GRI (Global Reporting Initiative) berfokus pada dampak perusahaan terhadap lingkungan dan masyarakat (materialitas dampak, audiens multi-pemangku kepentingan). IFRS S1/S2 dari ISSB berfokus pada risiko dan peluang keberlanjutan yang material secara finansial bagi investor (materialitas finansial). Di Indonesia, standar nasional PSPK 1 & PSPK 2 dibangun konvergen dengan IFRS S1/S2 dan berlaku 1 Januari 2027. Banyak perusahaan memakai keduanya secara komplementer, bukan memilih salah satu.

### Bagaimana membuat data ESG yang bisa diaudit?
Data ESG auditable menuntut jejak audit yang jelas: setiap angka (emisi, energi, limbah, K3) harus punya sumber, penanggung jawab input, tanggal, dan metode penghitungan yang konsisten. Kuncinya menetapkan satu definisi metrik (single source of truth), mengonsolidasikan data ke satu repositori alih-alih spreadsheet tersebar, dan menyimpan lineage data. Pertanyaan pertama auditor umumnya bukan "berapa angkanya", melainkan "dari mana angkanya"—di situlah tata kelola data menentukan lolos-tidaknya laporan.

### Apakah butuh platform ESG khusus, atau cukup BI seperti SAP Analytics Cloud?
Bergantung pada kematangan data dan status kewajiban. SAP Analytics Cloud adalah lapisan pelaporan/dashboard—ia memvisualisasikan dan mendistribusikan laporan, bukan menghitung emisi. Penghitungan/pengumpulan data emisi ditangani produk keberlanjutan SAP seperti SAP Sustainability Control Tower atau Footprint Management. Perusahaan yang belum wajib POJK atau datanya belum tercatat rapi sebaiknya membenahi pencatatan dan tata kelola data dulu, baru berinvestasi pada platform—hindari "greenwashing by dashboard".

---

## Data tables for the writer

### Emisi scope 1, 2, dan 3 (GHG Protocol)
| Aspek | Scope 1 | Scope 2 | Scope 3 |
|---|---|---|---|
| Definisi | Emisi langsung dari sumber yang dimiliki/dikendalikan | Emisi tidak langsung dari energi yang dibeli | Emisi rantai nilai (hulu & hilir) di luar kendali langsung |
| Contoh | BBM kendaraan, boiler, genset | Listrik, uap, pemanas, pendingin yang dibeli | Pembelian barang/jasa, logistik, penggunaan produk, perjalanan bisnis |
| Sumber data | Internal (operasional) | Tagihan/utilitas energi | **Supplier & mitra rantai nilai** (paling sulit) |
| Kategori | — | — | 15 kategori (Corporate Value Chain Standard) |
| Catatan | Paling mudah didata | Relatif terukur | Sering 70–90% total emisi |

### GRI vs IFRS S1/S2 (ISSB) vs SPK (PSPK 1 & 2)
| Aspek | GRI | IFRS S1/S2 (ISSB) | SPK Indonesia (PSPK 1 & 2) |
|---|---|---|---|
| Fokus | Dampak ke lingkungan & masyarakat | Risiko/peluang material finansial | Konvergen dengan IFRS S1/S2 |
| Materialitas | Dampak (impact) | Finansial (investor) | Mengikuti pendekatan ISSB |
| Audiens | Multi-pemangku kepentingan | Investor & pasar modal | Investor & regulator (Indonesia) |
| Status di Indonesia | Rujukan umum penyusunan | Basis global | **Efektif 1 Januari 2027** |

### Pembagian peran produk (jangan salah atribusi)
| Kebutuhan | Produk SAP | Perannya |
|---|---|---|
| Menghitung jejak karbon produk/korporat | SAP Sustainability Footprint Management | Kalkulasi footprint berbasis ERP |
| Mensentralisasi data ESG untuk pelaporan & kepatuhan | SAP Sustainability Control Tower | Sumber kebenaran data ESG + carbon footprint korporat |
| Memadukan karbon dengan akuntansi finansial | SAP Green Ledger | Alokasi data karbon ke dimensi finansial |
| Mengumpulkan data scope 3 dari supplier | SAP Ariba / SAP Fieldglass (VMS) | Kanal data pengadaan/vendor |
| Analitik, dashboard, distribusi laporan | **SAP Analytics Cloud (SAC)** | **Lapisan pelaporan — BUKAN penghitung emisi** |

---

## Edge cases & nuance

- **POJK 51 vs SPK 2027 bukan hal yang sama.** POJK 51 (2017) sudah berjalan dan menetapkan kewajiban + format Laporan Keberlanjutan (Lampiran). SPK/PSPK (efektif 2027) memperkuat *standar pengungkapan* agar setara IFRS S1/S2. Writer harus jelas: yang berlaku sekarang = POJK 51; yang datang 2027 = SPK. Jangan menyiratkan POJK 51 baru berlaku 2027.
- **Materialitas ganda (double materiality).** GRI ≈ materialitas dampak; ISSB/IFRS ≈ materialitas finansial. Perusahaan besar sering memakai keduanya. Hindari menyebut salah satu "lebih benar".
- **SAC bukan carbon calculator.** Kesalahan atribusi paling umum. SAC memvisualisasi; SCT/SFM/Green Ledger menghitung/mengumpulkan. Tegaskan di artikel.
- **Scope 3 sangat bergantung supplier.** Kualitas data scope 3 dibatasi kesediaan & kematangan data vendor; banyak perusahaan memakai data rata-rata industri (secondary data) sebelum mendapat data primer supplier—ini nuansa jujur yang layak disebut.
- **"Catat dulu, otomasi kemudian".** Untuk perusahaan non-wajib/kecil, membeli platform ESG mahal sebelum proses pencatatan matang berisiko. Urutan sehat: standarkan definisi & pencatatan → konsolidasi → baru otomasi/dashboard.
- **Soltius bukan assurance provider.** Verifikasi/assurance laporan ESG adalah ranah auditor/lembaga independen. Soltius menata data & pelaporan; jangan klaim Soltius memverifikasi/menjamin laporan.

---

## Flags (open factual risk)

- ⚠️ **Tanggal peluncuran SAP Green Ledger**: sumber menyebut "akhir Q4 2024" (TechTarget) dengan rilis pembaruan Q1-2026. → *rekomendasi*: tulis "diperkenalkan sekitar akhir 2024 dan terus dikembangkan" tanpa tanggal presisi.
- ⚠️ **Jalur produk SAP untuk pertukaran data karbon supplier (scope 3)**: SAP memiliki kapabilitas pertukaran data keberlanjutan antar-supplier (mis. product carbon footprint), namun penamaan produk spesifik tidak diverifikasi tuntas run ini. → *rekomendasi*: bahas secara fungsional ("kanal pengadaan/supplier network SAP") dan tautkan cousin link `vendor management system`; jangan sebut nama produk pertukaran data spesifik tanpa verifikasi.
- ⚠️ **Anchor cousin "vendor management system" vs realita produk**: istilah "Vendor Management System (VMS)" secara teknis = SAP Fieldglass (external workforce), sedangkan data emisi/keberlanjutan supplier lebih relevan lewat SAP Ariba (supplier network). → *rekomendasi*: writer boleh memakai anchor "vendor management system" sesuai brief, tetapi framing teknis sebaiknya "sistem pengadaan/manajemen vendor" secara umum sebagai kanal data supplier—hindari menyamakan Fieldglass = sumber data emisi.
- ⚠️ **Tanggal pengesahan PSPK (hari/bulan)**: efektif 1 Jan 2027 = high-confidence; tanggal pengesahan persis oleh DSK IAI pada 2025 sedikit bervariasi antar-sumber (pertengahan 2025). → *rekomendasi*: tulis "disahkan DSK IAI pada 2025, berlaku efektif 1 Januari 2027".
- ⚠️ **Klaim porsi "70–90% scope 3"**: valid sebagai generalisasi GHG Protocol/umum industri, bukan angka spesifik satu perusahaan. → *rekomendasi*: sajikan sebagai rentang umum ("bagi sebagian besar perusahaan..."), jangan sebagai angka pasti untuk perusahaan tertentu.

---

## Definition snippet draft (40–60 words)

> Pelaporan ESG (Environmental, Social, Governance) atau laporan keberlanjutan adalah pengungkapan kinerja perusahaan pada aspek lingkungan, sosial, dan tata kelola dalam bentuk data terukur dan dapat diverifikasi—bukan sekadar narasi. Di Indonesia, laporan ini diwajibkan POJK 51/POJK.03/2017 dan akan mengikuti Standar Pengungkapan Keberlanjutan (PSPK 1 & 2) yang berlaku efektif 1 Januari 2027, selaras dengan IFRS S1/S2.
