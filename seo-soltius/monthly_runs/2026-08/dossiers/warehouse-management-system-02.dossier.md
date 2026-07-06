---
brief_id: "warehouse-management-system-02"
researcher_run_date: "2026-06-08"
sources_cited: 16
flags: 5
---

# Research Dossier: SAP EWM, Stock Room Management, atau WM Lama? Memilih WMS di Era S/4HANA

## TL;DR for the writer

- Classic SAP WM (LE-WM) di S/4HANA secara resmi berakhir hak pakainya per 31 Desember 2025 (extended ke Mei 2026 sebagai masa transisi akhir yang tidak dapat diperpanjang lagi), sementara WM di ECC masih dapat dipakai hingga mainstream 2027 / extended 2030 — jadi urgensi keputusan ini nyata dan berbeda bergantung platform.
- SAP menetapkan EWM sebagai satu-satunya solusi gudang *strategis*; Stock Room Management secara eksplisit bukan produk strategis (SAP tidak berencana menambah fitur baru), hanya jembatan sementara bagi pelanggan LE-WM dengan gudang sederhana.
- Embedded EWM tersedia sejak S/4HANA 1610 (Basic = termasuk lisensi S/4HANA; Advanced = lisensi tambahan); Stock Room Management tersedia sejak S/4HANA 1909; decentralized EWM selalu memerlukan lisensi Advanced.
- EWM (sebagai bagian dari S/4HANA) tercakup maintenance SAP hingga akhir 2040 per komitmen inovasi SAP; pilihan EWM adalah investasi masa depan yang aman.
- SAP diakui sebagai Leader di Gartner Magic Quadrant for WMS untuk ke-12 kalinya berturut-turut (2026) — memberikan E-E-A-T signal yang kuat untuk konteks pasar global EWM.

---

## Core facts (verified)

> **Claim**: SAP EWM embedded tersedia sejak S/4HANA 1610
> **Number/specific**: Embedded EWM diperkenalkan di SAP S/4HANA versi 1610 (rilis kuartal akhir 2016) sebagai integrasi dalam satu sistem tanpa instalasi terpisah
> **Source**: SAP learning.sap.com, "Differentiating the SAP Solutions for Warehouse Management" (diakses 2026-06-08); dikonfirmasi oleh SAP Community — "EWM embedded in digital core of S/4 HANA in 1610?" (community.sap.com, diakses 2026-06-08)
> **Confidence**: high

> **Claim**: SAP Stock Room Management tersedia sejak S/4HANA 1909
> **Number/specific**: Stock Room Management diperkenalkan dalam SAP S/4HANA rilis 1909; menggunakan ulang sebagian besar komponen LE-WM tetapi mengecualikan Task/Resource Management, Yard Management, Wave Management, dan fungsi-fungsi lanjutan lainnya
> **Source**: SAP Community — "S/4HANA Stock Room Management" (blogs.sap.com, diakses 2026-06-08); SAP Community QA — "LE-WM is Ending: Understanding Stock Room Management vs EWM" (community.sap.com, diakses 2026-06-08)
> **Confidence**: high

> **Claim**: Hak pakai compatibility pack LE-WM di S/4HANA on-premise berakhir, semula 31 Desember 2025, diperpanjang ke Mei 2026
> **Number/specific**: SAP mengumumkan masa transisi akhir 5 bulan, memindahkan tanggal kadaluarsa dari 31 Desember 2025 menjadi 31 Mei 2026. Ini adalah perpanjangan *terakhir* yang tidak akan diperpanjang lagi. Pelanggan yang masih menggunakan LE-WM setelah tanggal ini tidak akan mendapat dukungan teknis dan/atau maintenance lebih lanjut.
> **Source**: SAP News Center, "SAP Announced Final Transition Period for Compatibility Packs for SAP S/4HANA On Premise" (news.sap.com/2025/12, diakses 2026-06-08)
> **Confidence**: high

> **Claim**: Enam komponen LE-WM yang merupakan compatibility pack berakhir haknya
> **Number/specific**: Enam komponen LE-WM sebagai compatibility pack yang berakhir: Task & Resource Management (WM-TRM), Warehouse Control Unit interface (WM-LSR), Value Added Service (WM-VAS), Yard Management (WM-YM), Cross-Docking (WM-CD), Wave Management (WM-TFM-CP), dan decentral WM (WM-DWM). Bagian besar LE-WM lainnya masuk dalam cakupan permanen S/4HANA sebagai Stock Room Management sejak rilis 1909.
> **Source**: SAP Community — "SAP S/4HANA Compatibility Packs" (community.sap.com, diakses 2026-06-08); SAP Note 2269324 (Compatibility Scope Matrix for SAP S/4HANA)
> **Confidence**: high

> **Claim**: SAP ECC (Business Suite 7) WM mainstream maintenance berakhir 31 Desember 2027
> **Number/specific**: Mainstream maintenance untuk SAP Business Suite 7 core applications (termasuk SAP ERP 6.0/ECC dengan modul WM) berakhir 31 Desember 2027
> **Source**: SAP Support Portal, "Innovation Commitment for SAP S/4HANA until 2040" (support.sap.com/en/release-upgrade-maintenance, diakses 2026-06-08)
> **Confidence**: high

> **Claim**: SAP ECC WM extended maintenance tersedia hingga 31 Desember 2030
> **Number/specific**: Setelah mainstream maintenance 2027, extended maintenance SAP Business Suite 7 tersedia dari 2028 hingga 2030, dengan premium biaya sebesar 2% di atas tarif maintenance standar
> **Source**: SAP Support Portal, "Innovation Commitment for SAP S/4HANA until 2040" (support.sap.com/en/release-upgrade-maintenance, diakses 2026-06-08); dikonfirmasi oleh SAP Community blog "Maintenance Timelines for SAP ERP 6.0" (community.sap.com, diakses 2026-06-08)
> **Confidence**: high

> **Claim**: SAP S/4HANA (termasuk EWM) tercakup maintenance hingga akhir 2040
> **Number/specific**: SAP mengumumkan per 4 Februari 2020 komitmen inovasi untuk SAP S/4HANA hingga akhir 2040 — selalu akan ada setidaknya satu rilis SAP S/4HANA dalam masa maintenance. EWM, sebagai komponen S/4HANA, mengikuti cakupan ini.
> **Source**: SAP Support Portal, "Innovation Commitment for SAP S/4HANA until 2040" (support.sap.com/en/release-upgrade-maintenance, diakses 2026-06-08)
> **Confidence**: high — untuk jaminan S/4HANA secara keseluruhan. **Lihat Flag #1 untuk nuansa "~2040 untuk EWM".**

> **Claim**: Embedded EWM Basic termasuk dalam lisensi S/4HANA; Advanced EWM memerlukan lisensi tambahan
> **Number/specific**: Basic EWM tersedia dalam lisensi SAP S/4HANA standar (tanpa biaya tambahan); Advanced EWM memerlukan lisensi terpisah. Decentralized EWM selalu memerlukan lisensi Advanced.
> **Source**: SAP Community blog — "SAP EWM Deployment Options – embedded vs decentral warehouse management" (community.sap.com, diakses 2026-06-08); SAP Community blog "Understanding license type Basic vs Advanced for SAP Extended Warehouse Management" (community.sap.com, diakses 2026-06-08)
> **Confidence**: high

> **Claim**: Embedded EWM cocok untuk gudang berukuran kecil-menengah; Decentralized EWM untuk gudang besar/otomasi tinggi
> **Number/specific**: Embedded EWM (satu sistem dengan S/4HANA) cocok untuk gudang kecil-menengah dalam satu kawasan geografis dekat data center; Decentralized EWM (sistem terpisah terhubung via RFC/CIF) direkomendasikan untuk gudang dengan otomasi tinggi (ASRS/MFS), throughput sangat tinggi, atau beberapa ERP yang terhubung ke satu gudang
> **Source**: SAP Community knowledge base — "SAP EWM Deployment Options – embedded vs decentral warehouse management" (community.sap.com, diakses 2026-06-08)
> **Confidence**: high

> **Claim**: SAP EWM mendukung Material Flow System (MFS) untuk kontrol peralatan otomasi gudang
> **Number/specific**: Material Flow System (MFS) dalam SAP EWM memungkinkan komunikasi langsung antara EWM dan programmable logic controllers (PLC) yang mengoperasikan conveyor, ASRS (Automated Storage and Retrieval System), crane, AGV (Automated Guided Vehicle), robot, dan elevator — tanpa warehouse control unit tambahan
> **Source**: SAP Help Portal — "Material Flow System (MFS)" (help.sap.com/docs/SAP_EXTENDED_WAREHOUSE_MANAGEMENT, diakses 2026-06-08); SAP learning.sap.com — "Controlling the Material Flow System (MFS)" (diakses 2026-06-08)
> **Confidence**: high

> **Claim**: Stock Room Management bukan produk strategis SAP; tidak ada rencana pengembangan fitur baru
> **Number/specific**: SAP secara eksplisit menyatakan bahwa Stock Room Management bukan produk strategis dan SAP tidak berencana menginvestasikan fitur baru, peningkatan integrasi, maupun aplikasi SAP Fiori baru untuk produk ini. Semua inovasi warehouse management akan diberikan untuk SAP EWM saja.
> **Source**: SAP Community blog — "SAP Extended Warehouse Management versus SAP S/4HANA Stock Room Management. Key criteria to make the decision." (community.sap.com/t5/supply-chain-management-blog-posts-by-sap, diakses 2026-06-08); dikonfirmasi oleh multiple SAP Community discussions
> **Confidence**: high

> **Claim**: RISE with SAP pelanggan mendapat use-right Stock Room Management hingga 2030
> **Number/specific**: Pelanggan RISE with SAP mendapat hak pakai Stock Room Management (yang merupakan kelanjutan LE-WM) hingga akhir tahun 2030, sedangkan pelanggan on-premise non-RISE harus bermigrasi ke EWM atau menerima batas fitur compatibility scope sesuai tanggal 2025/2026.
> **Source**: SAP Community QA — "LE-WM is Ending: Understanding Stock Room Management vs EWM — What's Next for Your Warehouse in SAP" (community.sap.com, diakses 2026-06-08); SAP Community — "Stock Room Management" discussions (diakses 2026-06-08)
> **Confidence**: medium — **Lihat Flag #2: perlu konfirmasi persis cakupan use-right RISE 2030 untuk Stock Room Management vs LE-WM compatibility components.**

> **Claim**: SAP EWM Advanced menawarkan kapabilitas: wave management, slotting, labor management, yard management, value-added services, cross-docking, MFS
> **Number/specific**: Advanced EWM mencakup: wave management (grouping picking tasks berdasarkan prioritas/ketersediaan), slotting (optimisasi penempatan barang untuk efisiensi picking), labor management (perencanaan tenaga kerja dan pengukuran produktivitas), yard management, value-added services, cross-docking, MFS (integrasi otomasi). Basic EWM hanya mencakup fungsi gudang dasar tanpa modul-modul lanjutan ini.
> **Source**: SAP Community blog — "The Ultimate Guide to SAP S/4HANA Extended Warehouse Management (EWM)" (community.sap.com, diakses 2026-06-08); SAP Community — "Streamlining Warehouse Operations: SAP EWM Slotting Process" (diakses 2026-06-08)
> **Confidence**: high

> **Claim**: SAP diakui sebagai Leader di Gartner Magic Quadrant for WMS untuk ke-12 kalinya berturut-turut (2026)
> **Number/specific**: SAP diakui sebagai Leader di 2026 Gartner Magic Quadrant for Warehouse Management Systems, untuk ke-12 kalinya berturut-turut. SAP EWM melayani pelanggan di 24 industri. Kapabilitas unggulan yang disorot: AI-assisted predictive labor demand planning, slotting optimization, robotics integration via APIs, Joule AI untuk natural language interactions.
> **Source**: SAP News Center, "SAP Recognized as a Leader in the 2026 Gartner Magic Quadrant for Warehouse Management Systems" (news.sap.com/2026/05, diakses 2026-06-08)
> **Confidence**: high

> **Claim**: SAP menyediakan Migration Cockpit dan panduan migrasi resmi LE-WM ke EWM
> **Number/specific**: SAP menyediakan SAP Migration Cockpit dengan 34 migration objects untuk migrasi data EWM (master data dan customizing), termasuk 5 migration objects khusus migrasi dari LE-WM ke EWM via staging tables (tersedia sejak S/4HANA 2023 FPS1). Panduan migrasi resmi tersedia di SAP Note 3523591. Data transaksi (open documents) tidak dapat ditransfer — gudang harus bersih dari dokumen terbuka sebelum migrasi dimulai.
> **Source**: SAP Community blog — "New Migration Guide LE-WM to EWM on S/4HANA" (community.sap.com/t5/supply-chain-management-blog-posts-by-sap, diakses 2026-06-08)
> **Confidence**: high

> **Claim**: Pasar global WMS tumbuh signifikan; Asia Pasifik termasuk segmen pertumbuhan tercepat
> **Number/specific**: Pasar global WMS bernilai USD 2,88 miliar pada 2024 dan diproyeksikan mencapai USD 8,38 miliar pada 2030, dengan CAGR 19,9%. Asia Pasifik diproyeksikan mencatat pertumbuhan tercepat dengan CAGR 18,4%, didorong industrialisasi, e-commerce, dan inisiatif pemerintah modernisasi rantai pasok.
> **Source**: Grand View Research, dikutip dalam SAP WMS resource (sap.com, diakses 2026-06-08). **Lihat Flag #3: ini data Grand View Research via SAP, bukan sumber Gartner/IDC langsung — gunakan dengan atribusi yang benar.**
> **Confidence**: medium

---

## Solution focus + Soltius anchor (from product_matrix.md)

Keyword "warehouse management system" adalah keyword baru, tidak ada di product_matrix.md. Pemetaan SAP berikut diderivasi dari brief + riset:

| Apa yang diajarkan (SAP tech) | Fakta yang harus dinyatakan akurat | Penempatan di artikel | Soltius service/credential anchor |
|---|---|---|---|
| **SAP Extended Warehouse Management (EWM)** — embedded & decentralized | Embedded tersedia sejak S/4HANA 1610; Basic dalam lisensi S/4HANA standar; Advanced berlisensi tambahan; decentralized selalu Advanced; maintenance hingga ~2040 (sebagai bagian S/4HANA) | H2 #2, H2 #5 (tabel), penutup | Implementation + Migration service; SAP Platinum Partner via United VARs |
| **SAP Stock Room Management** | Tersedia sejak S/4HANA 1909; merupakan subset LE-WM tanpa fitur lanjutan; bukan produk strategis SAP; tidak akan dikembangkan lebih lanjut; RISE use-right s.d. 2030 | H2 #3, H2 #5 (tabel) | — (tidak memerlukan Soltius anchor tersendiri) |
| **Classic SAP WM / LE-WM** | Compatibility pack di S/4HANA berakhir Mei 2026 (final); WM di ECC mainstream s.d. 2027, extended s.d. 2030 (premium 2%); bukan jalur masa depan | H2 #1, H2 #4 (timeline) | Migrasi ERP ke S/4HANA (cousin link) |
| **Material Flow System (MFS) & SAP Warehouse Robotics** | MFS memungkinkan kontrol PLC/ASRS/AGV/robot langsung dari EWM; SAP Warehouse Robotics untuk onboarding multi-vendor robotics cepat; hanya tersedia di EWM Advanced/Decentralized | H2 #2 (kapabilitas EWM), H2 #6 (kapan EWM penuh diperlukan) | — (pembeda kelas EWM vs Stock Room) |

**Soltius anchor placement:**
- Penutup artikel: "Sebagai SAP Platinum Partner melalui United VARs, Soltius mendampingi perusahaan menilai jalur migrasi WM→EWM yang paling sesuai dengan roadmap S/4HANA mereka — dari asesmen awal hingga go-live dan Application Management Services pasca-implementasi."
- Mid-article aside (H2 #1 atau #4): satu kalimat bahwa keputusan EWM vs Stock Room sebaiknya diputuskan bersamaan dengan roadmap S/4HANA, bukan terpisah.

**Blacklist check:**
- Jangan klaim Soltius membangun SAP EWM atau Stock Room Management.
- Jangan sebut Soltius "terbaik" atau "nomor satu"; gunakan "SAP Platinum Partner melalui United VARs" dan "kontributor pendapatan terbesar SAP Indonesia (sejak 2015)".
- Jangan invent angka proyek atau outcome klien spesifik.

---

## Authoritative external sources (untuk penulis link-out)

1. **SAP Support Portal — "Innovation Commitment for SAP S/4HANA until 2040"** (diperbarui 2024/2025)
   URL: https://support.sap.com/en/release-upgrade-maintenance/maintenance-information/maintenance-strategy/s4hana-business-suite7.html
   *Apa yang didukung*: tanggal mainstream maintenance ECC (2027), extended maintenance ECC (2030), komitmen S/4HANA hingga 2040. Sumber resmi SAP paling otoritatif untuk maintenance dates.

2. **SAP News Center — "SAP Recognized as a Leader in the 2026 Gartner Magic Quadrant for Warehouse Management Systems"** (Mei 2026)
   URL: https://news.sap.com/2026/05/sap-leader-2026-gartner-magic-quadrant-warehouse-management-systems/
   *Apa yang didukung*: kredibilitas SAP EWM sebagai pilihan WMS kelas enterprise yang diakui analis global; 12 tahun berturut-turut sebagai Leader; kapabilitas AI dan robotics terkini.

3. **SAP News Center — "SAP Announced Final Transition Period for Compatibility Packs for SAP S/4HANA On Premise"** (Desember 2025)
   URL: https://news.sap.com/2025/12/sap-announced-final-transition-period-for-compatibility-packs-for-sap-s-4hana-on-premise/
   *Apa yang didukung*: tanggal pasti akhir compatibility pack (termasuk LE-WM components) = Mei 2026 (terakhir, tidak diperpanjang); dokumen resmi SAP untuk urgensi artikel.

4. **SAP Community — "New Migration Guide LE-WM to EWM on S/4HANA"** (SAP, community.sap.com)
   URL: https://community.sap.com/t5/supply-chain-management-blog-posts-by-sap/new-migration-guide-le-wm-to-ewm-on-s-4hana/ba-p/13882006
   *Apa yang didukung*: SAP menyediakan tooling resmi (Migration Cockpit, 34 migration objects, SAP Note 3523591) untuk migrasi LE-WM→EWM — bukti bahwa jalur migrasi ini didukung secara resmi oleh SAP.

---

## FAQ Q&As (Bahasa Indonesia)

### Apa perbedaan utama SAP EWM dan SAP WM (LE-WM)?

SAP WM (LE-WM) adalah sistem manajemen gudang klasik yang sudah ada sejak SAP R/3 dan berjalan dalam SAP ECC. SAP EWM (Extended Warehouse Management) adalah generasi berikutnya yang hadir embedded dalam SAP S/4HANA sejak rilis 1610, dengan kapabilitas yang jauh lebih lengkap: wave management, slotting, labor management, yard management, integrasi robotika via Material Flow System (MFS), dan dukungan otomasi tingkat tinggi. LE-WM tidak lagi mendapat pengembangan baru; SAP EWM adalah satu-satunya solusi gudang strategis ke depan.

### Apakah SAP WM masih didukung di tahun 2026?

Tergantung platform Anda. Jika Anda berada di SAP ECC, mainstream maintenance berlaku hingga 31 Desember 2027, dengan opsi extended maintenance berbayar (premium 2%) hingga 31 Desember 2030. Namun jika Anda sudah di SAP S/4HANA on-premise, hak pakai compatibility pack LE-WM telah berakhir pada Mei 2026 — ini adalah batas akhir yang tidak diperpanjang lagi. Setelah Mei 2026 di S/4HANA, tidak ada dukungan teknis lebih lanjut untuk komponen LE-WM.

### Kapan LE-WM di SAP S/4HANA benar-benar berhenti didukung?

SAP mengumumkan bahwa hak pakai compatibility pack LE-WM untuk SAP S/4HANA on-premise berakhir pada akhir Mei 2026 — ini merupakan perpanjangan terakhir dari batas sebelumnya (31 Desember 2025) dan tidak akan diperpanjang kembali. Setelah tanggal tersebut, pengguna S/4HANA yang masih menjalankan komponen LE-WM (termasuk Task & Resource Management, Yard Management, Wave Management, dan Cross-Docking berbasis WM) tidak akan menerima dukungan teknis dan maintenance dari SAP. Pilihan: migrasi ke SAP EWM, atau beralih ke Stock Room Management untuk fungsi dasar.

### Apa itu embedded EWM vs decentralized EWM, dan kapan memilih masing-masing?

Embedded EWM berjalan dalam satu sistem/instance yang sama dengan SAP S/4HANA — tidak perlu instalasi terpisah, integrasi lebih sederhana, dan Basic EWM-nya termasuk dalam lisensi S/4HANA standar. Cocok untuk gudang berukuran kecil hingga menengah. Decentralized EWM berjalan di sistem terpisah yang terhubung ke S/4HANA, selalu memerlukan lisensi Advanced, dan ideal untuk gudang besar dengan otomasi tinggi (conveyor, ASRS, AGV, robot), throughput sangat tinggi, atau skenario di mana beberapa sistem ERP terhubung ke satu gudang yang sama.

### Apakah Stock Room Management gratis dalam lisensi S/4HANA?

Ya, Stock Room Management termasuk dalam lisensi SAP S/4HANA Enterprise Management tanpa biaya tambahan. Namun penting dipahami: Stock Room Management bukan produk strategis SAP — SAP tidak berencana menambah fitur baru, meningkatkan integrasi, atau menghadirkan aplikasi Fiori baru untuknya. Ini adalah jembatan sementara untuk gudang sederhana yang belum siap migrasi penuh ke EWM. Semua inovasi warehouse management ke depan akan diberikan eksklusif untuk SAP EWM.

### Haruskah migrasi ke EWM dilakukan bersamaan dengan migrasi ke S/4HANA?

Tidak harus sekaligus, tetapi sangat disarankan direncanakan bersamaan. Perusahaan yang bermigrasi ke S/4HANA dan memiliki gudang dengan proses cukup kompleks sebaiknya tidak menunda keputusan EWM — karena menjalankan Stock Room Management hanya sebagai solusi sementara berarti dua kali transformasi sistem gudang. SAP menyediakan panduan migrasi resmi (SAP Note 3523591) dan Migration Cockpit dengan 34 migration objects untuk migrasi data dari LE-WM ke EWM, memungkinkan perencanaan terintegrasi dalam satu proyek S/4HANA.

### Untuk gudang jenis apa EWM penuh sebaiknya tidak dipilih?

EWM Advanced mungkin berlebihan untuk gudang dengan volume transaksi rendah, proses manual sederhana, sedikit SKU, dan tanpa kebutuhan otomasi seperti conveyor atau AGV. Dalam kasus ini, Stock Room Management atau bahkan Basic EWM sudah memadai. Implementasi EWM Advanced membawa kompleksitas konfigurasi lebih tinggi dan biaya lisensi tambahan yang tidak proporsional jika kapabilitas advancednya tidak digunakan. Kunci keputusan: kompleksitas proses gudang, volume throughput, tingkat otomasi yang dibutuhkan, dan rencana pertumbuhan bisnis 3–5 tahun ke depan.

---

## Data tables for the writer

### Tabel Perbandingan 3-Opsi WMS di SAP

| Aspek | LE-WM / WM Klasik | Stock Room Management | SAP EWM (Embedded/Decentralized) |
|---|---|---|---|
| **Platform** | SAP ECC (/ S/4HANA via compat. pack) | SAP S/4HANA | SAP S/4HANA |
| **Tersedia sejak** | SAP R/3 v2.0 (1993) | S/4HANA 1909 (2019) | Embedded: S/4HANA 1610 (2016) |
| **Lisensi** | Termasuk ECC | Termasuk S/4HANA EM | Basic: termasuk S/4HANA; Advanced: lisensi tambahan |
| **Kapabilitas** | Manajemen bin, transfer order dasar | Subset LE-WM tanpa modul lanjutan | Basic: fungsi gudang standar; Advanced: wave, slotting, labor, yard, MFS, robotics |
| **Otomasi / MFS** | Terbatas | Tidak tersedia | Tersedia di Advanced/Decentralized |
| **Status strategis SAP** | End-of-life | Bukan produk strategis; tidak dikembangkan | Produk strategis; inovasi berkelanjutan |
| **Maintenance s.d.** | ECC: 2027 (mainstream), 2030 (extended); S/4HANA: Mei 2026 (final) | S/4HANA: sesuai S/4HANA release (RISE use-right s.d. 2030) | S/4HANA: ~2040 (komitmen inovasi SAP) |
| **Cocok untuk** | Legacy ECC yang belum migrasi | Gudang sederhana, bridge ke EWM | Semua ukuran; Advanced untuk gudang kompleks/otomasi tinggi |
| **Jalur masa depan** | Tidak ada (end-of-life) | Migrasi ke EWM disarankan jangka panjang | Roadmap jelas hingga 2040 |

### Garis Waktu Maintenance

| Tanggal | Kejadian |
|---|---|
| S/4HANA 1610 (2016) | Embedded EWM tersedia pertama kali di S/4HANA |
| S/4HANA 1909 (2019) | Stock Room Management tersedia di S/4HANA |
| 31 Des 2025 | Batas awal expiry compatibility pack LE-WM di S/4HANA on-premise |
| Mei 2026 (akhir) | Batas akhir final (tidak diperpanjang) hak pakai LE-WM compatibility pack di S/4HANA on-premise |
| 31 Des 2027 | Mainstream maintenance SAP ECC (Business Suite 7) berakhir |
| 2028–31 Des 2030 | Extended maintenance SAP ECC tersedia (premium 2%) |
| ~2030 | RISE with SAP use-right Stock Room Management berakhir |
| ~2040 | Komitmen inovasi SAP S/4HANA (termasuk EWM) |

---

## Edge cases & nuance

- **"LE-WM berakhir 2025" vs "berakhir Mei 2026"**: Batas asli adalah 31 Desember 2025, tetapi SAP mengumumkan perpanjangan terakhir ke Mei 2026 (Desember 2025). Penulis harus menyebutkan *Mei 2026 sebagai batas final saat ini*, bukan Desember 2025, karena itu sudah terlampaui. Jangan menyebut "31 Desember 2025 berakhir" tanpa menyebutkan perpanjangan — itu menyesatkan.

- **EWM "gratis" vs EWM "berlisensi"**: Basic EWM termasuk dalam lisensi S/4HANA standar, tetapi Advanced EWM (dengan wave management, slotting, labor management, MFS, dll.) memerlukan lisensi terpisah yang signifikan. Penulis harus membedakan ini dengan jelas — sering jadi sumber kesalahpahaman di lapangan.

- **Decentralized EWM masih relevan di era S/4HANA**: Meskipun embedded EWM tersedia, decentralized EWM tetap pilihan valid untuk skenario multi-ERP, gudang distribusi besar dengan MFS/ASRS kompleks, atau saat tim ingin upgrade EWM secara independen dari upgrade S/4HANA.

- **Stock Room Management untuk RISE vs non-RISE berbeda**: Pelanggan RISE mendapat use-right yang lebih lama (s.d. 2030), sementara pelanggan on-premise non-RISE sudah menghadapi batas Mei 2026 untuk compatibility pack components. Jangan samakan keduanya.

- **Migrasi LE-WM ke EWM memerlukan sistem bersih dari open documents**: Tooling resmi SAP (Migration Cockpit) ada, tetapi ada constraint penting — tidak ada transfer data transaksi terbuka. Ini berdampak pada perencanaan go-live (cutover window harus diperhitungkan). Relevan untuk mid-article aside tentang pengalaman implementasi Soltius.

- **SCM-based EWM (versi standalone v9.5) berakhir Desember 2025**: Ini berbeda dari EWM embedded di S/4HANA. Pelanggan yang masih menjalankan decentralized EWM berbasis SAP SCM (bukan di atas S/4HANA) juga menghadapi deadline tersendiri. Jika artikel menyebut decentralized EWM, pastikan konteksnya jelas: decentralized EWM *on S/4HANA* (bukan SCM-based).

---

## Flags (open factual risk)

- **Flag #1 — "EWM terjamin hingga 2040"**: SAP menyatakan komitmen inovasi S/4HANA hingga 2040, dan EWM adalah bagian dari S/4HANA. Namun frasa spesifik "EWM maintenance hingga 2040" tidak muncul secara eksplisit terpisah dari komitmen S/4HANA umum di sumber yang berhasil diakses. Rekomendasi: framing yang aman adalah "EWM, sebagai bagian dari SAP S/4HANA, tercakup dalam komitmen inovasi SAP hingga akhir 2040" — jangan tulis "SAP menjamin EWM hingga 2040" secara berdiri sendiri.

- **Flag #2 — RISE use-right Stock Room Management s.d. 2030**: Klaim ini berasal dari SAP Community discussion, bukan dari halaman SAP Support resmi yang berhasil diakses langsung. Sumber sekunder menguatkan, tetapi cakupan persis (apakah ini mencakup *semua* LE-WM components atau hanya Stock Room Management yang masuk perpetual scope?) perlu konfirmasi. Rekomendasi: tulis "SAP memperpanjang hak pakai tertentu untuk pelanggan RISE hingga 2030" dan sertakan atribusi ke sumber SAP Community; hindari klaim absolut tanpa caveat.

- **Flag #3 — Angka pasar WMS USD 2,88 miliar / 8,38 miliar (Grand View Research)**: Angka ini dikutip melalui sumber SAP, bukan langsung dari laporan Grand View Research yang diverifikasi. Angka dari firma riset pasar berbeda antara sumber. Rekomendasi: jika digunakan, atribusikan secara eksplisit ke "Grand View Research, dikutip SAP" dan beri konteks "sebagai gambaran momentum pasar global." Untuk sumber yang lebih otoritatif, cari data IDC atau Gartner untuk WMS market size.

- **Flag #4 — "LE-WM compatibility scope berakhir 31 Des 2025 di S/4HANA"**: Tanggal ini sudah *diubah* menjadi Mei 2026. Jika penulis mengutip 31 Desember 2025 tanpa menyebut perpanjangan, itu secara teknis outdated. Namun sebaliknya, tanggal Mei 2026 *sudah terlampaui* saat artikel diterbitkan (Agustus 2026). Rekomendasi: framing artikel harus menggunakan masa lampau ("deadline LE-WM telah lewat per Mei 2026") bukan present tense, dan fokus pada implikasi bagi perusahaan yang *belum bermigrasi*.

- **Flag #5 — Versi S/4HANA Cloud Public Edition (EWM scope)**: Brief dan riset ini berfokus pada S/4HANA on-premise dan Private Edition. Public Edition SAP S/4HANA memiliki cakupan EWM yang berbeda (terbatas). Jika artikel menyinggung S/4HANA Cloud secara umum, pastikan dibedakan: on-premise/Private Edition vs Public Edition. Jangan campur fakta keduanya. SAP Warehouse Robotics untuk S/4HANA Public Cloud juga memiliki keterbatasan tersendiri (per komunitas SAP).

---

## Definition snippet draft (40–60 words)

> SAP Extended Warehouse Management (EWM) adalah solusi manajemen gudang strategis SAP yang tersedia embedded di dalam SAP S/4HANA sejak rilis 1610. EWM mengelola seluruh proses gudang — inbound, outbound, stok internal, wave management, slotting, labor management, dan integrasi otomasi fisik via Material Flow System (MFS) — dengan dukungan inovasi SAP hingga 2040.

*(53 kata — dalam rentang 40–60 kata.)*

---

## Notes for image-planner

- **Concept 1 — Garis Waktu Maintenance (Timeline Infographic)**: Diagram horizontal timeline yang menampilkan tiga jalur produk secara bersamaan: (a) LE-WM di S/4HANA — berakhir Mei 2026 [merah]; (b) WM di ECC — mainstream 2027, extended 2030 [oranye]; (c) SAP EWM di S/4HANA — aktif hingga ~2040 [hijau]. Format: horizontal timeline dengan color-coding per jalur, milestone markers di titik krusial. Tujuan: satu gambar yang menjawab "kapan harus bergerak dan ke mana."

- **Concept 2 — Comparison Decision Diagram (3-kolom flowchart/table)**: Visual tabel keputusan 3-kolom yang menampilkan LE-WM / Stock Room Management / SAP EWM dengan baris-baris: kompleksitas gudang, kapabilitas otomasi, status strategis, masa maintenance, dan "ideal untuk siapa." Menggunakan ikon (checklist hijau / silang merah / tanda minus abu-abu) per sel. Format: infographic bergaya comparison card yang mudah di-screenshot dan dibagikan ke tim internal.

- **Concept 3 — Embedded vs Decentralized EWM Architecture Diagram**: Diagram arsitektur sistem yang menunjukkan dua deployment: (kiri) Embedded EWM — satu kotak S/4HANA dengan EWM di dalam, panah ke warehouse operations; (kanan) Decentralized EWM — kotak S/4HANA terpisah terhubung via RFC/CIF ke kotak EWM mandiri, dengan warehouse automation (conveyor/AGV/ASRS) terhubung ke EWM via MFS. Format: clean technical diagram, dua panel berdampingan, cocok untuk audiens IT director.
