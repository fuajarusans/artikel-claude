---
brief_id: "erp-migration-to-the-cloud-01"
researcher_run_date: "2026-06-08"
sources_cited: 18
flags: 5
---

# Research Dossier: RISE with SAP vs GROW with SAP: Mana Jalur Migrasi ERP ke Cloud yang Tepat?

## TL;DR for the writer

- RISE with SAP dan GROW with SAP adalah dua **program komersial SAP** yang berbeda sasaran dan edisi cloud; RISE menargetkan pelanggan SAP eksisting yang kompleks (dipasangkan dengan SAP S/4HANA Cloud Private Edition / SAP Cloud ERP Private), sementara GROW menargetkan perusahaan baru atau mid-market yang menginginkan implementasi cepat berbasis standar (dipasangkan dengan SAP S/4HANA Cloud Public Edition / SAP Cloud ERP).
- **Brand RISE with SAP masih aktif**, tetapi sejak awal 2025 SAP mengganti nama produk intinya: "SAP S/4HANA Cloud, private edition" kini dipasarkan sebagai **"SAP Cloud ERP Private"**, dan "SAP S/4HANA Cloud, public edition" sebagai **"SAP Cloud ERP"**. Jurnalisme lapangan dan dokumen SAP masih menggunakan nama lama — penulis dapat menggunakan keduanya dengan catatan konteks (lihat Flag 1).
- Tanggal ECC resmi dan terkonfirmasi: mainstream maintenance berakhir **31 Desember 2027**, extended maintenance (berbayar +2%) tersedia **2028–2030**, dan bagi pelanggan yang tidak bisa selesai sebelum 2030 ada opsi cloud baru "SAP ERP, private edition, transition option" (2031–2033) yang bersifat langganan cloud baru, bukan perpanjangan on-premise.
- GROW with SAP hanya mendukung **greenfield** (fit-to-standard); RISE with SAP / SAP Cloud ERP Private mendukung greenfield **dan** brownfield (system conversion). Klaim "go-live secepat 4 minggu" untuk GROW berlaku pada skenario terbatas (satu entitas, satu negara, fit-to-standard, scope kecil) — tulis sebagai klaim SAP yang dikondisikan, bukan janji umum.
- Soltius dapat diframe sebagai mitra yang mengeksekusi kedua jalur, dengan kredensial **Best RISE Partner** dan **Best Cloud Partner** yang terdokumentasi di `company_profile.md`; maksimal 2–3 penyebutan diri.

---

## Core facts (verified)

> **Claim 1**: RISE with SAP adalah program transformasi cloud menyeluruh dari SAP yang terutama dipasangkan dengan SAP S/4HANA Cloud Private Edition (kini dipasarkan sebagai SAP Cloud ERP Private).
> **Number/specific**: RISE with SAP diperkenalkan 2021; pada 2025, SAP merename produk inti private cloud-nya menjadi "SAP Cloud ERP Private" sebagai bagian dari penyederhanaan nama. Brand RISE with SAP tetap aktif sebagai methodology/journey framework.
> **Source**: SAP News Center, "Navigating Your RISE with SAP Journey: Updates for SAP ERP, Private Edition, Transition Option," https://news.sap.com/2025/08/rise-with-sap-journey-sap-erp-private-edition-transition-option-updates/ (diakses Jun 2026); Walldorf Consulting, "SAP simplifies the naming of its cloud ERP offering," https://walldorf.consulting/en/blog/sap-simplifies-the-naming-of-its-cloud-erp-offering (diakses Jun 2026)
> **Confidence**: high

> **Claim 2**: GROW with SAP adalah program yang menargetkan perusahaan baru/mid-market yang menginginkan implementasi cloud ERP cepat berbasis standar, dipasangkan dengan SAP S/4HANA Cloud Public Edition (kini: SAP Cloud ERP).
> **Number/specific**: GROW with SAP menggunakan SAP S/4HANA Cloud Public Edition sebagai "ready-to-run cloud ERP that's always on the latest release." Tersedia dalam dua bundel: base dan premium.
> **Source**: SAP Learning, "Differentiating GROW and RISE with SAP," https://learning.sap.com/courses/exploring-sap-cloud-erp/differentiating-grow-and-rise-with-sap (diakses Jun 2026); SAP, "What is SAP GROW," https://www.sap.com/products/erp/grow/what-is-sap-grow.html
> **Confidence**: high

> **Claim 3**: RISE with SAP mendukung pendekatan greenfield (implementasi baru dari awal) dan brownfield (konversi sistem ECC eksisting). GROW with SAP hanya mendukung greenfield (fit-to-standard).
> **Number/specific**: Perbedaan ini bersifat fundamental: GROW Public Edition tidak mengizinkan migrasi kode custom ABAP — seluruh implementasi harus dimulai dari standar SAP. RISE Private Edition mendukung sistem conversion (brownfield).
> **Source**: SAP Learning, "Differentiating GROW and RISE with SAP" (ibid.); berbagai implementer SAP (Kellton, Migravion) mengonfirmasi perbedaan ini konsisten per 2024–2025.
> **Confidence**: high

> **Claim 4**: Kustomisasi di GROW with SAP / SAP Cloud ERP (Public Edition) dibatasi pada key-user extensibility (custom fields, custom logic melalui BAdIs, custom CDS views) dan side-by-side extensions di SAP BTP. Tidak ada custom ABAP di dalam sistem public cloud.
> **Number/specific**: RISE with SAP / SAP Cloud ERP Private (Private Edition) mendukung full ABAP extensibility dalam lingkungan single-tenant, plus key-user extensibility dan side-by-side extensions di SAP BTP.
> **Source**: SAP Community, "SAP S/4HANA Cloud and On-Premise Deployment Options," https://community.sap.com/t5/enterprise-resource-planning-blog-posts-by-sap/sap-s-4hana-cloud-and-on-premise-deployment-options/ba-p/13410008; WebSearch verification via multiple SAP implementer sources (Jun 2026)
> **Confidence**: high

> **Claim 5**: GROW with SAP menggunakan model multi-tenant yang dikelola SAP, dengan update wajib setiap kuartal (quarterly updates). RISE with SAP / Private Edition menggunakan single-tenant dengan siklus update tahunan (annual) yang dapat direncanakan pelanggan.
> **Number/specific**: Quarterly updates pada Public Edition berarti pelanggan selalu di versi terbaru; Private Edition memberi lebih banyak kontrol atas waktu upgrade.
> **Source**: SAP License Experts, "SAP RISE Tiers 2025 Changes," https://saplicensingexperts.com/blog/sap-rise-tiers-2025-changes (diakses Jun 2026); berbagai sumber SAP implementer dikonfirmasi konsisten.
> **Confidence**: high

> **Claim 6**: Klaim "go-live secepat 4 minggu" untuk GROW with SAP / Public Edition merujuk pada skenario terbatas: satu entitas, satu negara, scope standar terbatas (75 scope item), dan kesiapan data penuh.
> **Number/specific**: SAP Learning menyebutkan "the time to go-live can be as little as four weeks" untuk GROW with SAP dengan pendekatan fit-to-standard. Program SAP GROW Fast menargetkan go-live ~12 minggu untuk first-wave, dan umumnya 16 minggu jika memperhitungkan kesiapan pelanggan aktual.
> **Source**: SAP Learning, "Differentiating GROW and RISE with SAP" (ibid.) untuk klaim 4 minggu; SAP NBS, "SAP GROW Fast," https://www.nbs-us.com/sap-grow-fast untuk konteks 12–16 minggu (diakses Jun 2026)
> **Confidence**: medium (angka 4 minggu valid secara teknis namun untuk skenario minimal; penulis harus memberi konteks)

> **Claim 7**: RISE with SAP mencakup bundel komponen termasuk: SAP S/4HANA Cloud Private Edition, SAP Business Technology Platform (BTP) credits (CPEA), SAP Signavio Business Process Transformation Starter Pack, dan SAP Business Network.
> **Number/specific**: Alokasi BTP CPEA credits dihitung sebesar ~1% dari net ACV dengan minimum 10.000 EUR dan maksimum 20.000 EUR per tahun. SAP Signavio Process Analysis and Modeling (mis. Process Insights, Process Manager) termasuk di tier Premium/SAP Cloud ERP Private.
> **Source**: Redress Compliance, "RISE with SAP Tiers and July 2025 Premium Packaging Changes," (diakses Jun 2026); SAP License Experts, "SAP RISE Tiers 2025 Changes," https://saplicensingexperts.com/blog/sap-rise-tiers-2025-changes; SAP News, "SAP Cloud ERP Private Package Accelerate Transformation," https://news.sap.com/2025/04/sap-cloud-erp-private-package-accelerate-transformation/ (Apr 2025)
> **Confidence**: medium (bundel berubah dengan repackaging mid-2025; konfirmasi versi terkini langsung ke SAP)

> **Claim 8**: GROW with SAP tersedia dalam dua bundle: base dan premium. GROW premium menambahkan SAP Signavio process intelligence, BTP Build Process Automation, Build Work Zone, dan SAP Business Network Starter Pack di atas base.
> **Number/specific**: GROW base mencakup SAP S/4HANA Cloud Public Edition + BTP credits (CPEA). GROW premium menambahkan Group Reporting (50 objects vs 25), 500K Digital Access documents per annum vs 100K (base), dan Signavio tools.
> **Source**: SAP Community blog (SAP-authored), "GROW with SAP S/4HANA Cloud Public Edition, base: An Overview," https://community.sap.com/t5/enterprise-resource-planning-blog-posts-by-sap/grow-with-sap-s-4hana-cloud-public-edition-base-an-overview-of-the-base/ba-p/13903040; SAP Community, "GROW with SAP S/4HANA Cloud Public Edition, premium — A Practical Guide," https://community.sap.com/t5/enterprise-resource-planning-blog-posts-by-sap/grow-with-sap-s-4hana-cloud-public-edition-premium-a-practical-guide/ba-p/13953369 (diakses Jun 2026)
> **Confidence**: medium (detail bundle evolves; konfirmasi SAP partner terbaru)

> **Claim 9**: SAP ECC (Business Suite 7, ERP 6.0 dengan Enhancement Package 6, 7, atau 8) mendapatkan mainstream maintenance resmi SAP hingga akhir 2027.
> **Number/specific**: SAP mengumumkan pada Februari 2020 bahwa mainstream maintenance diperpanjang dari 2025 ke akhir 2027. Tanggal ini hanya berlaku untuk enhancement package 6, 7, dan 8. ERP 6.0 tanpa enhancement package (atau dengan EhP 1–5) berakhir maintenance mainstream-nya 31 Desember 2025.
> **Source**: SAP Support Portal, "Innovation Commitment for SAP S/4HANA until 2040," https://support.sap.com/en/release-upgrade-maintenance/maintenance-information/maintenance-strategy/s4hana-business-suite7.html (diakses Jun 2026); SAP News, "Mainstream Maintenance Commitments Aid Transformation," https://news.sap.com/2020/06/sap-mainstream-maintenance-commitments/ (Jun 2020)
> **Confidence**: high

> **Claim 10**: Extended maintenance untuk SAP Business Suite 7 / ECC tersedia selama tiga tahun (2028–2030), dengan biaya tambahan premium dua persen poin di atas biaya maintenance standar.
> **Number/specific**: Extended maintenance yang bersifat opsional ini memberi pelanggan waktu konversi yang lebih panjang hingga akhir 2030 dengan biaya lebih tinggi.
> **Source**: SAP Support Portal (ibid.); SAP News, "Updated Policy Gives Customers More Time to Complete SAP S/4HANA Transition," https://news.sap.com/2020/02/sap-s4hana-transition-updated-policy/ (Feb 2020); dikonfirmasi oleh Rimini Street, "No Extension to SAP ECC 6 and Business Suite 7 Mainstream Maintenance End Dates in 2025 and 2027," https://www.riministreet.com/blog/no-extension-to-ecc-support-2027-deadline/ (diakses Jun 2026)
> **Confidence**: high

> **Claim 11**: SAP menawarkan opsi baru bernama "SAP ERP, private edition, transition option" — sebuah langganan cloud berbatas waktu (2031–2033) bagi pelanggan dengan lanskap sangat kompleks yang tidak bisa menyelesaikan migrasi sebelum akhir 2030.
> **Number/specific**: Opsi ini hanya tersedia bagi pelanggan yang sudah beralih ke "SAP ERP, private edition" sebelum 31 Desember 2030. Ini BUKAN perpanjangan on-premise dan bukan maintenance SAP ECC — melainkan cloud subscription baru yang berbeda.
> **Source**: SAP News, "New Offering to Help Navigate Complex RISE with SAP Transformations," https://news.sap.com/2025/02/sap-erp-private-edition-transition-option-navigate-complex-rise-with-sap-transformations/ (Feb 2025); SAP News, "Navigating Your RISE with SAP Journey: Updates for SAP ERP, Private Edition, Transition Option," https://news.sap.com/2025/08/rise-with-sap-journey-sap-erp-private-edition-transition-option-updates/ (Agt 2025)
> **Confidence**: high

> **Claim 12**: Menurut laporan SAPinsider 2025, 30% organisasi sudah fully live di SAP S/4HANA Cloud Private Edition (naik dari 19% setahun sebelumnya), dan 73% sedang dalam berbagai tahap transisi cloud.
> **Number/specific**: Legacy SAP ECC dan Business Suite untuk pertama kalinya turun di bawah 50% responden. Survei melibatkan 122 profesional SAP. Sebanyak 43% menyebut kemampuan generative AI sebagai faktor penentu keputusan migrasi.
> **Source**: SAPinsider Benchmark Report 2025, dikutip oleh ERP Today, "RISE with SAP: Cloud ERP Adoption Accelerates Ahead of 2027 Deadline," https://erp.today/rise-with-sap-cloud-erp-adoption-accelerates-ahead-of-2027-deadline-sapinsider-benchmark-report/ (diakses Jun 2026)
> **Confidence**: medium (survei 122 responden — ukuran sampel terbatas; gunakan dengan atribusi)

> **Claim 13**: SAP menggunakan SAP Activate Methodology sebagai kerangka implementasi standar untuk GROW with SAP, yang terdiri dari enam fase: Discover, Prepare, Explore, Realize, Deploy, Run.
> **Number/specific**: Fase Explore mencakup fit-to-standard workshops — kunci untuk memastikan adopsi proses standar SAP tanpa kustomisasi berlebih. Durasi sprint umumnya 2–4 minggu per fase.
> **Source**: SAP Learning, "Understanding the SAP Activate Methodology," https://learning.sap.com/learning-journeys/discovering-grow-with-sap-s-4hana-cloud-public-edition-premium-implementation-and-adoption/understanding-the-sap-activate-methodology_c4840c55-beb6-4a33-a572-996cb227aed4 (diakses Jun 2026)
> **Confidence**: high

> **Claim 14**: Biaya implementasi Private Edition (RISE) diperkirakan 40–60% lebih tinggi dari Public Edition, dengan timeline implementasi rata-rata 8–14 bulan. Public Edition lebih murah TCO-nya namun memerlukan komitmen penuh ke standar SAP.
> **Number/specific**: Angka cost delta 40–60% berasal dari perbandingan oleh ERP Research dan multiple implementer; TCO lebih rendah pada Public Edition dikonfirmasi SAP namun angka spesifik tergantung scope.
> **Source**: ERP Research, "SAP S/4HANA Public Cloud Review 2026," https://www.erpresearch.com/en-us/sap-s4-hana-public-cloud (diakses Jun 2026); dikonfirmasi oleh berbagai sumber implementer.
> **Confidence**: medium (angka estimasi, bukan harga resmi SAP; jangan dikutip sebagai harga pasti)

> **Claim 15**: Prinsip clean core SAP — menjaga inti S/4HANA tetap standar dan mudah di-upgrade dengan memindahkan kustomisasi ke SAP BTP — berlaku pada RISE maupun GROW, namun lebih ketat diterapkan di Public Edition karena tidak ada custom ABAP di dalamnya.
> **Number/specific**: SAP memformalisasi framework A–D level pada Agustus 2025 untuk mengklasifikasikan setiap ekstensi dan risiko upgrade-nya. Level A (fully compliant, ABAP Cloud); Level D (modifikasi langsung, risiko upgrade tertinggi, harus dipensiunkan).
> **Source**: SAP Community, "ABAP Extensibility Guide — Clean Core for SAP S/4HANA Cloud — August 2025 Update," https://community.sap.com/t5/technology-blog-posts-by-sap/abap-extensibility-guide-clean-core-for-sap-s-4hana-cloud-august-2025/ba-p/14175399 (Agt 2025)
> **Confidence**: high

> **Claim 16**: Garuda Indonesia mengadopsi RISE with SAP (SAP Cloud ERP Private) untuk modernisasi core enterprise: finance, procurement, supply chain, dan operasi pelanggan terpilih, sebagai fondasi menuju otomasi berbasis AI di masa depan.
> **Number/specific**: Inisiatif ini bertujuan menciptakan "organisasi yang lebih terhubung, gesit, dan disiplin" (Deputy CEO Thomas Oentoro). Implementasi mencakup antarmuka SAP Fiori berbasis peran dan embedded analytics.
> **Source**: SAP SEA News Center, "Garuda Indonesia Advances Digital Transformation Through RISE with SAP," https://news.sap.com/sea/2026/05/garuda-indonesia-advances-digital-transformation-through-rise-with-sap/ (Mei 2026)
> **Confidence**: high

> **Claim 17**: Indonesia memiliki pasar ERP cloud yang tumbuh dengan CAGR ~10.5%, dengan market ERP implementasi Indonesia dan Singapura senilai USD 750 juta di 2024 dan diproyeksikan mencapai USD 1,725 miliar pada 2033.
> **Number/specific**: Cloud deployments menyumbang 52,41% dari belanja IT enterprise di Indonesia pada 2025. Program Pemerintah Making Indonesia 4.0 mendorong adopsi cloud di sektor manufaktur.
> **Source**: Various market research firms (Verified Market Reports, Mordor Intelligence), dikutip via WebSearch Jun 2026; Trade.gov, "Indonesia Digital Transformation," https://www.trade.gov/market-intelligence/indonesia-digital-transformation (diakses Jun 2026)
> **Confidence**: low (angka dari lembaga riset pasar berbayar yang tidak dapat diverifikasi langsung — gunakan hanya sebagai konteks umum dengan atribusi, bukan sebagai angka definitif)

---

## Solution focus + Soltius anchor (from product_matrix.md)

| Apa yang diajarkan (SAP tech) | Fakta untuk dikutip akurat | Posisi di artikel | Soltius service/kredensial untuk anchor CTA |
|---|---|---|---|
| **RISE with SAP** (SAP Cloud ERP Private) | Program transformasi untuk pelanggan SAP eksisting/kompleks; mendukung greenfield + brownfield; Private Edition (single-tenant); ABAP extensibility penuh; update tahunan; bundel termasuk BTP CPEA credits, Signavio, Business Network | H2 #1, #2 (tabel perbandingan), #3, #4 | Migration service + Best RISE Partner (2021 award) |
| **GROW with SAP** (SAP Cloud ERP) | Program untuk perusahaan baru/mid-market; Public Edition (multi-tenant); fit-to-standard; greenfield only; no custom ABAP; update kuartalan; go-live 4 minggu (kondisi terbatas) hingga ~12–16 minggu (praktik umum); bundel base + premium | H2 #1, #2 (tabel), #3, #4 | Migration service |
| **SAP S/4HANA Cloud Private Edition / SAP Cloud ERP Private** | Single-tenant, ABAP penuh, bisa brownfield, update tahunan, lebih mahal 40–60% | H2 #2, #3 | — |
| **SAP S/4HANA Cloud Public Edition / SAP Cloud ERP** | Multi-tenant, managed SAP, update kuartalan, greenfield only, key-user + BTP side-by-side only | H2 #2, #3 | — |
| **SAP Activate Methodology** | 6 fase (Discover–Run); fit-to-standard workshops di fase Explore | H2 #4 | — |
| **SAP Clean Core** | Prasyarat keberhasilan upgrade; A–D level framework (Agt 2025); makin ketat di Public Edition | H2 #4 (ringkas); cousin link ke hub SAP Clean Core | — |
| **ECC end-of-maintenance** | 2027 (mainstream), 2030 (extended +2%), 2031–2033 (transition option cloud baru) | H2 #5 | — |
| **SAP Business One** | Alternatif untuk perusahaan kecil yang belum siap S/4HANA; bukan bagian RISE/GROW | H2 #5 (honest counter) | — |

**Reminder**: Soltius **merancang dan mengeksekusi** implementasi pada kedua jalur — bukan membuat program RISE atau GROW. Anchor CTA di penutup; satu kalimat opsional di H2 #4 tentang readiness assessment bersama mitra implementasi. Maksimal 2–3 penyebutan.

---

## Authoritative external sources (untuk penulis link out)

1. **SAP Support Portal — Maintenance Strategy, Business Suite 7 (diakses Jun 2026)** — https://support.sap.com/en/release-upgrade-maintenance/maintenance-information/maintenance-strategy/s4hana-business-suite7.html — *backs*: tanggal ECC mainstream maintenance 2027, extended 2030; SAP S/4HANA committed hingga 2040.

2. **SAP Learning — "Differentiating GROW and RISE with SAP" (diakses Jun 2026)** — https://learning.sap.com/courses/exploring-sap-cloud-erp/differentiating-grow-and-rise-with-sap — *backs*: definisi program, target audiens, edisi cloud, klaim go-live 4 minggu (kondisi terbatas), greenfield-only GROW.

3. **SAP News — "New Offering to Help Navigate Complex RISE with SAP Transformations" (Feb 2025)** — https://news.sap.com/2025/02/sap-erp-private-edition-transition-option-navigate-complex-rise-with-sap-transformations/ — *backs*: opsi transition 2031–2033 (bukan maintenance on-prem, tapi cloud subscription).

4. **SAP SEA News — "Garuda Indonesia Advances Digital Transformation Through RISE with SAP" (Mei 2026)** — https://news.sap.com/sea/2026/05/garuda-indonesia-advances-digital-transformation-through-rise-with-sap/ — *backs*: contoh nyata enterprise Indonesia yang adopsi RISE with SAP untuk finance, procurement, supply chain.

---

## FAQ Q&As (Bahasa Indonesia)

### Apa perbedaan utama antara RISE with SAP dan GROW with SAP?

RISE with SAP adalah program transformasi cloud SAP untuk perusahaan dengan sistem SAP eksisting yang kompleks; program ini berjalan di atas SAP S/4HANA Cloud Private Edition (single-tenant) dan mendukung migrasi brownfield maupun greenfield. GROW with SAP ditujukan untuk perusahaan baru atau mid-market yang ingin mengadopsi cloud ERP cepat berbasis standar; programnya menggunakan SAP S/4HANA Cloud Public Edition (multi-tenant) dan hanya mendukung implementasi greenfield.

### Apakah GROW with SAP hanya untuk cloud publik?

Ya. GROW with SAP secara eksklusif menggunakan SAP S/4HANA Cloud Public Edition — lingkungan multi-tenant yang dikelola sepenuhnya oleh SAP, diperbarui setiap kuartal. Perusahaan tidak dapat membawa kode ABAP kustom ke sistem ini; semua kustomisasi dilakukan melalui key-user extensibility dan side-by-side extensions di SAP Business Technology Platform (BTP). Jika perusahaan membutuhkan kontrol lebih atau infrastruktur single-tenant, pilihan yang tepat adalah RISE with SAP.

### Berapa lama go-live dengan GROW with SAP?

SAP menyebutkan bahwa go-live GROW with SAP bisa secepat empat minggu — namun kondisi ini berlaku untuk satu entitas, satu negara, scope standar terbatas, dan data yang sudah bersih. Dalam praktik implementasi yang lebih umum, program SAP GROW Fast menargetkan first-wave go-live sekitar 12 minggu, dan rata-rata 16 minggu jika mempertimbangkan kesiapan pelanggan aktual. Perusahaan dengan data yang belum siap atau cakupan lebih luas perlu menyesuaikan ekspektasi timeline.

### Apakah RISE with SAP termasuk SAP BTP dan SAP Signavio?

Ya, RISE with SAP menyertakan alokasi SAP Business Technology Platform (BTP) credits (CPEA) dan SAP Signavio Business Process Transformation Starter Pack, khususnya di tier Premium/SAP Cloud ERP Private. Detail komponen bundel berubah seiring repackaging SAP pada mid-2025 — konfirmasikan komponen terkini langsung kepada SAP atau mitra implementasi sebelum membuat keputusan kontraktual.

### Bisakah perusahaan berpindah dari GROW ke RISE setelah go-live?

SAP tidak mendokumentasikan jalur formal "GROW to RISE upgrade" secara publik per Juni 2026. Secara teknis, perpindahan dari Public Edition ke Private Edition melibatkan perubahan arsitektur signifikan (multi-tenant ke single-tenant). Keputusan antara GROW dan RISE sebaiknya dibuat di awal berdasarkan profil kompleksitas perusahaan, bukan sebagai rencana sementara — karena migrasi ulang setelah go-live berpotensi mahal.

### Kapan SAP ECC berhenti didukung secara resmi?

SAP menghentikan mainstream maintenance untuk SAP ECC (Business Suite 7 dengan Enhancement Package 6, 7, atau 8) pada **31 Desember 2027**. Perusahaan dapat memilih extended maintenance berbayar (premi +2%) selama tiga tahun hingga akhir 2030. Bagi pelanggan dengan lanskap sangat kompleks yang tidak mampu migrasi sebelum 2030, SAP menawarkan "SAP ERP, private edition, transition option" — sebuah langganan cloud baru (bukan maintenance on-premise) yang tersedia 2031–2033 dengan syarat tertentu.

### Mana yang lebih murah: RISE atau GROW with SAP?

GROW with SAP (Public Edition) umumnya memiliki TCO lebih rendah karena infrastruktur multi-tenant yang dibagi dan implementasi yang lebih cepat. Estimasi industri menempatkan biaya Private Edition (RISE) 40–60% lebih tinggi dari Public Edition untuk scope yang sebanding. Namun, perbandingan "lebih murah" tidak tepat tanpa konteks: perusahaan dengan ratusan kustomisasi ECC sering menemukan biaya re-engineering ke GROW justru lebih tinggi daripada RISE. Readiness assessment bersama mitra implementasi adalah langkah yang sebaiknya mendahului perbandingan biaya.

### Kapan perusahaan sebaiknya mempertimbangkan SAP Business One, bukan RISE atau GROW?

Perusahaan kecil dengan operasi yang belum terlalu kompleks — omzet di bawah ambang enterprise, proses bisnis relatif standar, dan tidak ada kebutuhan multi-entitas segera — sebaiknya mempertimbangkan SAP Business One terlebih dahulu. RISE dan GROW dirancang untuk skala enterprise; memaksakan keduanya ke perusahaan kecil berpotensi menghasilkan biaya dan kompleksitas yang tidak sebanding dengan manfaatnya.

---

## Data tables for the writer

### Perbandingan RISE with SAP vs GROW with SAP

| Aspek | RISE with SAP (SAP Cloud ERP Private) | GROW with SAP (SAP Cloud ERP) |
|---|---|---|
| **Target audiens** | Perusahaan SAP eksisting, lanskap kompleks, multi-entitas | Perusahaan baru SAP atau mid-market, ingin adopsi cepat |
| **Edisi cloud** | SAP S/4HANA Cloud Private Edition (SAP Cloud ERP Private) | SAP S/4HANA Cloud Public Edition (SAP Cloud ERP) |
| **Model deployment** | Single-tenant (dedicated) | Multi-tenant (shared, managed SAP) |
| **Pendekatan migrasi** | Greenfield + brownfield (system conversion) | Greenfield only (fit-to-standard) |
| **Kustomisasi** | Full ABAP extensibility + key-user + BTP side-by-side | Key-user + BTP side-by-side only; no custom ABAP |
| **Siklus update** | Tahunan (dapat direncanakan) | Kuartalan (wajib, dikelola SAP) |
| **Timeline go-live** | 8–14 bulan (brownfield complex); lebih cepat untuk greenfield | 4 minggu (scope minimal) hingga ~12–16 minggu (praktik umum) |
| **Bundel komponen** | S/4HANA Cloud Private Ed. + BTP CPEA credits + Signavio + Business Network | S/4HANA Cloud Public Ed. + BTP credits; Signavio + Biz Network di premium |
| **SAP Clean Core** | Didukung; ABAP Cloud + BTP extensibility; tingkat kebebasan lebih besar | Enforced secara arsitektur; no custom ABAP inside the core |
| **Cocok untuk** | ECC eksisting dengan kustomisasi berat, compliance ketat, multi-negara | Perusahaan baru SAP, ingin standar best practice, kecepatan prioritas |

### Jalur Maintenance SAP ECC — Timeline Ringkas

| Periode | Status | Catatan |
|---|---|---|
| Hingga 31 Des 2027 | Mainstream maintenance | Berlaku untuk ERP 6.0 EhP 6, 7, 8 |
| 2028–2030 | Extended maintenance (+2% premium) | Opsional, berbayar tambahan |
| 2031–2033 | SAP ERP, private edition, transition option | Cloud subscription baru (bukan on-prem); syarat: migrasi ke SAP ERP private edition sebelum akhir 2030 |
| 2025 | Mainstream maintenance berakhir untuk ERP 6.0 tanpa EhP atau EhP 1–5 | — |

---

## Edge cases & nuance

- **Rebranding 2025 yang membingungkan**: SAP secara resmi mengganti nama "SAP S/4HANA Cloud, public edition" menjadi "SAP Cloud ERP" dan "SAP S/4HANA Cloud, private edition" menjadi "SAP Cloud ERP Private" pada awal 2025 sebagai langkah penyederhanaan pemasaran. Brand "RISE with SAP" tetap aktif sebagai journey/methodology — RISE berpasangan dengan SAP Cloud ERP Private; GROW berpasangan dengan SAP Cloud ERP. Nama lama (S/4HANA Cloud Public/Private Edition) masih banyak digunakan dalam dokumentasi teknis, komunitas SAP, dan percakapan lapangan. Penulis sebaiknya menyebut nama baru dengan tanda kurung nama lama untuk menghindari kebingungan pembaca.

- **Klaim "4 minggu" adalah marketing floor, bukan rata-rata**: Go-live 4 minggu berlaku hanya untuk scope sangat terbatas (satu entitas, satu negara, 75 scope item, data sudah bersih). Dalam praktik nyata, implementasi GROW lebih sering membutuhkan 12–16 minggu atau lebih. Penulis harus mengutip angka 4 minggu sebagai "klaim SAP" dengan konteks skenario ideal, bukan sebagai promise umum.

- **Transition option 2031–2033 bukan "masa maintenance diperpanjang"**: Opsi ini sering disalahpahami sebagai perpanjangan support ECC on-premise. Faktanya, ini adalah produk cloud subscription baru ("SAP ERP Central Component on SAP HANA" yang di-host di cloud SAP) dengan harga lebih tinggi dibanding cloud subscription reguler, dan hanya tersedia bagi pelanggan yang sudah beralih ke "SAP ERP, private edition" sebelum 2030.

- **Brownfield vs greenfield bukanlah satu-satunya dimensi keputusan RISE vs GROW**: Perusahaan yang punya sedikit kustomisasi tapi beroperasi di banyak negara dengan compliance ketat mungkin tetap lebih cocok ke RISE Private Edition bukan karena brownfield, tapi karena kebutuhan kontrol infrastruktur, regulatory compliance, atau integrasi yang kompleks.

- **SAP Business One sebagai alternatif legitimate**: Perusahaan kecil dengan proses yang relatif sederhana sering kali akan mendapat lebih banyak nilai dari SAP Business One dibanding dari GROW atau RISE. Mengakui ini secara jujur di H2 #5 justru meningkatkan kepercayaan pembaca — dan sesuai dengan layanan Soltius yang juga mengimplementasikan SAP Business One.

---

## Flags (open factual risk)

- ⚠️ **Flag 1 — Rebranding nama produk SAP 2025**: SAP mengubah nama "SAP S/4HANA Cloud, public edition" → "SAP Cloud ERP" dan "private edition" → "SAP Cloud ERP Private" pada awal 2025. RISE with SAP masih aktif sebagai brand. Namun, dokumentasi SAP resmi, komunitas implementer, dan pembaca Indonesia masih menggunakan nama lama secara luas. **Rekomendasi**: gunakan nama baru dengan nama lama dalam tanda kurung pada penyebutan pertama (contoh: "SAP Cloud ERP Private (sebelumnya SAP S/4HANA Cloud Private Edition)"). Verifikasi dengan SAP Partner Portal terbaru atau minta konfirmasi ke tim SAP Indonesia sebelum artikel publish.

- ⚠️ **Flag 2 — Detail bundel RISE/GROW terkini (mid-2025 repackaging)**: SAP melakukan repackaging signifikan pada mid-2025 yang mengubah BTP credit allocations, FUE volume tier thresholds, dan konten bundel RISE Premium → SAP Cloud ERP Private. Informasi bundel yang dikumpulkan (Claim 7 dan 8) didasarkan pada sumber sekunder dan dokumentasi pra-repackaging. **Rekomendasi**: jangan klaim bundel spesifik sebagai "termasuk X dan Y secara pasti" — gunakan bahasa "umumnya mencakup" atau "pada saat penelitian ini, bundel meliputi." Konfirmasikan komponen terkini langsung ke SAP atau melalui channel resmi SAP partner sebelum kontrak.

- ⚠️ **Flag 3 — Klaim "go-live 4 minggu" harus diberi konteks**: Angka 4 minggu muncul dari SAP Learning resmi tetapi untuk skenario sangat terbatas. Mengutipnya tanpa konteks dapat menyesatkan CIO/CFO yang menggunakannya sebagai patokan project planning. **Rekomendasi**: selalu sertakan kondisi (satu entitas, satu negara, data bersih, scope standar minimal). Bedakan dari "GROW Fast" (~12–16 minggu) yang lebih representatif untuk most real-world implementations.

- ⚠️ **Flag 4 — Angka biaya dan TCO**: Estimasi "Private Edition 40–60% lebih mahal dari Public Edition" berasal dari sumber implementer, bukan publikasi resmi SAP. SAP tidak mempublikasikan harga resmi. **Rekomendasi**: tulis sebagai "estimasi industri" atau "dalam praktik implementasi, biaya Private Edition umumnya lebih tinggi secara signifikan" tanpa mengutip angka persentase spesifik, atau jika disertakan, atribusikan ke "perkiraan yang dikumpulkan dari praktisi implementasi."

- ⚠️ **Flag 5 — Perpindahan GROW → RISE setelah go-live**: Tidak ada dokumentasi resmi SAP tentang jalur upgrade formal dari GROW (Public Edition) ke RISE (Private Edition) yang dipublikasikan per Juni 2026. **Rekomendasi**: nyatakan bahwa perpindahan secara teknis mungkin tetapi kompleks dan SAP tidak menyediakan jalur resmi yang terdokumentasi publik — sarankan keputusan dibuat sebelum implementasi, bukan sesudahnya.

---

## Definition snippet draft (40–60 words)

> RISE with SAP dan GROW with SAP adalah dua program komersial SAP untuk migrasi ERP ke cloud. RISE dirancang untuk perusahaan dengan sistem SAP eksisting yang kompleks, berjalan di atas SAP S/4HANA Cloud Private Edition. GROW ditujukan untuk perusahaan baru yang menginginkan adopsi cepat berbasis standar, menggunakan SAP S/4HANA Cloud Public Edition.

*(54 kata — dalam kisaran target 40–60 kata)*

---

## Notes for image-planner

- **Concept 1 — Decision matrix visual**: Infografik atau tabel berdampingan bergaya "RISE vs GROW" dengan 7–8 dimensi keputusan (warna berbeda per jalur). Cocok untuk featured snippet dan share di internal chat tim IT. Arahkan desainer: dua kolom (RISE = biru tua/enterprise; GROW = hijau/growth), baris mencakup target audiens, edisi cloud, kustomisasi, update cycle, go-live, bundel utama. Format: landscape, bisa dipotong sebagai standalone infografik.

- **Concept 2 — Timeline maintenance ECC**: Diagram timeline horizontal menunjukkan tiga periode (2027 mainstream end → 2030 extended maintenance → 2031–2033 transition option). Tambahkan ikon "clock" atau "warning" di 2027 untuk urgensi keputusan. Arahkan desainer: simpel, bisa dibaca di mobile, gunakan warna gradasi (hijau → kuning → oranye → merah) untuk menunjukkan meningkatnya urgensi.

- **Concept 3 — Profil pembeli / customer journey**: Ilustrasi dua jalur divergen dari titik "Memutuskan Migrasi ERP ke Cloud" — satu jalur ke RISE (enterprise, kompleks, brownfield) dan satu ke GROW (mid-market, baru, greenfield). Setiap jalur menunjukkan 3–4 milestone kunci (readiness assessment → program selection → implementation → go-live). Format: flowchart sederhana, cocok untuk H2 #3 di artikel.
