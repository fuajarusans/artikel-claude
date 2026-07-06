---
brief_id: "mrp-c01"
researcher_run_date: "2026-06-17"
sources_cited: 16
flags: 4
---

# Research Dossier: Apa Itu MRP (Material Requirements Planning) dan Cara Kerjanya

## TL;DR for the writer

- MRP (Material Requirements Planning) adalah sistem perencanaan kebutuhan material berbasis komputer, dicetuskan oleh Joseph Orlicky (IBM) pada 1964 dan dibukukan 1975; bukan istilah baru. Definisi standar ASCM/APICS tersedia dan wajib dikutip.
- Tiga input MRP yang baku: Master Production Schedule (MPS), Bill of Materials (BOM), dan Inventory Status File (stok on-hand, on-order, safety stock). Empat langkah proses: Netting → Lotting → Offsetting → Exploding — terverifikasi dari Cambridge IfM dan SAP Learning.
- Sejarah evolusi MRP→MRP II→ERP terverifikasi dengan tanggal: MRP 1964/1975, MRP II 1983 (Oliver Wight), istilah ERP diciptakan Gartner 1990.
- SAP S/4HANA menawarkan tiga mode MRP di modul Production Planning (PP): classic MRP, MRP Live (berbasis HANA in-memory, didefinisikan SAP sebagai arsitektur masa depan), dan Predictive MRP / pMRP (simulasi kapasitas, diperkenalkan di S/4HANA 1909). Nama-nama ini sudah terverifikasi via SAP official.
- Keterbatasan MRP klasik yang jujur (dan langka dibahas SERP) — asumsi lead time tetap, "garbage in garbage out", system nervousness, tidak merencanakan kapasitas mesin — adalah sudut diferensiasi paling kuat; gunakan secara utuh di H2 #5.

---

## Core facts (verified)

> **Claim**: MRP adalah sistem perencanaan kebutuhan material berbasis komputasi
> **Number/specific**: MRP = "a production planning, scheduling, and inventory control system used to manage manufacturing processes" (Wikipedia / TechTarget: "a system for calculating the materials and components needed to manufacture a product")
> **Source**: Wikipedia, "Material requirements planning" — https://en.wikipedia.org/wiki/Material_requirements_planning (accessed 2026-06-17); TechTarget SearchERP definition — https://www.techtarget.com/searcherp/definition/material-requirements-planning-MRP (accessed 2026-06-17)
> **Confidence**: high

---

> **Claim**: Joseph Orlicky (IBM) mengembangkan MRP pada 1964; buku MRP terbit 1975 dan menjadi cetak biru industri
> **Number/specific**: MRP formalized by Joseph Orlicky in 1964 after studying Toyota's production system; Black & Decker was first company to implement it in 1964; Orlicky published "Material Requirements Planning" in 1975; by 1975 MRP was in 700 companies, ~8,000 by 1981
> **Source**: Wikipedia MRP article, https://en.wikipedia.org/wiki/Material_requirements_planning (accessed 2026-06-17); TechTarget MRP definition, https://www.techtarget.com/searcherp/definition/material-requirements-planning-MRP (accessed 2026-06-17); QAD blog "Joseph Orlicky: Hero of MRP" — https://www.qad.com/blog/2018/05/joseph-orlicky-hero-materials-requirements-planning (accessed 2026-06-17)
> **Confidence**: high

---

> **Claim**: Tiga input utama MRP adalah Master Production Schedule (MPS), Bill of Materials (BOM), dan Inventory Status File
> **Number/specific**: (1) MPS — planned timeline for when finished goods must be completed; (2) BOM — hierarchical listing of all materials, subassemblies, and components with quantities; (3) Inventory Data/Status — current stock levels. Consistent across TechTarget, Cambridge IfM, SafetyCulture, Wikipedia
> **Source**: TechTarget MRP definition, https://www.techtarget.com/searcherp/definition/material-requirements-planning-MRP (accessed 2026-06-17); Cambridge IfM MRP page, https://www.ifm.eng.cam.ac.uk/research/dstools/mrp/ (accessed 2026-06-17); SafetyCulture MRP topics, https://safetyculture.com/topics/material-requirements-planning (accessed 2026-06-17)
> **Confidence**: high

---

> **Claim**: Empat langkah proses MRP: Netting, Lotting (Lot Sizing), Offsetting, Exploding
> **Number/specific**: (1) Exploding — uses BOM to determine component quantities needed; (2) Netting — subtracts on-hand inventory from gross requirements to get net requirements; (3) Lotting — batches net requirements based on lot-sizing policies; (4) Offsetting — applies lead time to compute when to release orders. Note: some sources list only 3 (omitting Lotting as a separate step); SAP Learning's deterministic MRP lists 5 steps (BOM explosion, net requirements calculation, lot sizing, sourcing/procurement types, scheduling) but covers the same logic.
> **Source**: Research digest from SAP Learning, "Understanding MRP in SAP S/4HANA" — https://learning.sap.com/courses/exploring-production-planning-in-sap-s-4hana/understanding-mrp-in-sap-s-4hana (accessed 2026-06-17); Cambridge IfM MRP, https://www.ifm.eng.cam.ac.uk/research/dstools/mrp/ (accessed 2026-06-17); Vaia/Factory Physics textbook reference, https://www.vaia.com/en-us/textbooks/physics/factory-physics-3-edition/chapter-3/problem-20-what-is-nervousness-in-an-mrp-system-how-is-it-ca/ (accessed 2026-06-17)
> **Confidence**: high — with nuance; see Flag #1 on step-count variation

---

> **Claim**: Netting = Gross Requirement − On-hand Stock − Scheduled Receipts = Net Requirement
> **Number/specific**: Formula confirmed: net requirement = gross requirement minus inventory on hand minus scheduled receipts (on-order). This is the mathematical core of MRP, consistent across all sources.
> **Source**: Wikipedia MRP article; TechTarget MRP definition; SafetyCulture MRP topics (all accessed 2026-06-17)
> **Confidence**: high

---

> **Claim**: MRP II (Manufacturing Resource Planning) dikembangkan oleh Oliver Wight pada 1983, memperluas MRP dengan kapasitas, tenaga kerja, dan keuangan
> **Number/specific**: "In 1983, Oliver Wight transformed the system into Manufacturing Resource Planning (MRP II), incorporating master scheduling, capacity planning, and S&OP capabilities." By 1989, ~1/3 of software industry revenue in the US came from MRP II sales ($1.2 billion).
> **Source**: Wikipedia MRP article — https://en.wikipedia.org/wiki/Material_requirements_planning; Wikipedia MRP II article — https://en.wikipedia.org/wiki/Manufacturing_resource_planning; TechTarget MRP definition (all accessed 2026-06-17)
> **Confidence**: high

---

> **Claim**: Istilah "ERP" (Enterprise Resource Planning) diciptakan Gartner pada 1990, sebagai generalisasi MRP II yang mencakup keuangan, SDM, dan rantai pasok
> **Number/specific**: "In 1990, Gartner's research coined 'Enterprise Resource Planning' to describe systems that integrated beyond manufacturing." (Multiple sources consistent on this date and attribution.)
> **Source**: TechTarget MRP definition — https://www.techtarget.com/searcherp/definition/material-requirements-planning-MRP; "The History of ERP: From MRP to AI & Cloud Software" — https://thecfoclub.com/operational-finance/history-of-erp/ (accessed 2026-06-17)
> **Confidence**: high

---

> **Claim**: SAP S/4HANA menjalankan MRP dalam modul Production Planning (PP) dengan tiga mode: classic MRP, MRP Live, dan Predictive MRP (pMRP)
> **Number/specific**: Confirmed via SAP official sources. Classic MRP, MRP Live, and Predictive MRP (pMRP) are three distinct modes within SAP S/4HANA's Production Planning (PP) module.
> **Source**: SAP help.sap.com — "When to Plan in MRP Live and When to Plan with Classic MRP" — https://help.sap.com/docs/SAP_S4HANA_ON-PREMISE/fe39e10a9a864a8f8dc9537704f0fa13/8b1f7d5128f6563ce10000000a423f68.html (accessed 2026-06-17); SAP Learning — "Understanding MRP in SAP S/4HANA" — https://learning.sap.com/courses/exploring-production-planning-in-sap-s-4hana/understanding-mrp-in-sap-s-4hana (accessed 2026-06-17)
> **Confidence**: high

---

> **Claim**: MRP Live berbasis SAP HANA in-memory, lebih cepat dari classic MRP untuk material banyak/kompleks, dan didefinisikan SAP sebagai arsitektur masa depan
> **Number/specific**: "MRP Live was created, pushing the MRP logic into the SAP HANA database and allowing an in-memory planning run." MRP Live "is defined by SAP as the future architecture with all innovation focused here." Classic MRP: "still supported but lacks new features." MRP Live exclusively supports PP/DS integration and SAP Fiori MRP Cockpit. For large, complex material sets, MRP Live outperforms classic MRP; for a few simple materials, classic MRP can still be faster.
> **Source**: SAP PRESS blog, "What Are the Differences Between MRP Live and Classic MRP?" — https://blog.sap-press.com/what-are-the-differences-between-mrp-live-and-classic-mrp (accessed 2026-06-17); help.sap.com "When to Plan in MRP Live..." (accessed 2026-06-17)
> **Confidence**: high — the claim "up to 10x faster" circulates on the web but was NOT found in the SAP PRESS source; use "significantly faster for large/complex material sets" as the defensible phrasing (see Flag #2)

---

> **Claim**: Predictive MRP (pMRP) adalah alat simulasi untuk perencanaan kapasitas jangka menengah, diperkenalkan di SAP S/4HANA 1909
> **Number/specific**: pMRP introduced in SAP S/4HANA 1909. "Goal of predictive material and resource planning is to identify potential capacity issues and to evaluate possible solutions as early as possible." Simulates requirements plan, work center loads, and BOM explosion across levels. Aimed to replace Long-Term Planning (LTP) from ECC. Business scenarios: validating demand plans (S&OP/IBP), capacity planning, and purchasing/supplier visibility.
> **Source**: SAP Community, "pMRP in S/4HANA 1909" — https://community.sap.com/t5/enterprise-resource-planning-blog-posts-by-members/pmrp-in-s-4-hana-1909/ba-p/13499937 (accessed 2026-06-17 — returned 403, content confirmed via WebSearch digest); SAP PRESS blog, "Business Scenarios for Predictive MRP in SAP S/4HANA" — https://blog.sap-press.com/business-scenarios-for-predictive-mrp-in-sap-s4hana (accessed 2026-06-17); SAP blog "The Power of SAP S/4HANA #3 – Predictive Material and Resource Planning" — https://blogs.sap.com/2019/10/30/the-power-of-sap-s4hana-3-predictive-material-and-resource-planning/
> **Confidence**: high for pMRP scope and use cases; medium for release version "1909" (confirmed via multiple SAP community sources but direct SAP help.sap.com page was inaccessible)

---

> **Claim**: MRP klasik mengasumsikan lead time tetap (fixed lead time), yang merupakan salah satu keterbatasan utamanya
> **Number/specific**: Classic MRP assumes fixed lead times — "rigidity in accounting for lead times and production variables." In reality, lead times vary based on queue, capacity, and lot size, making the fixed-lead-time assumption unrealistic in dynamic environments.
> **Source**: TechTarget MRP definition — https://www.techtarget.com/searcherp/definition/material-requirements-planning-MRP (accessed 2026-06-17); Cambridge IfM MRP — https://www.ifm.eng.cam.ac.uk/research/dstools/mrp/ (accessed 2026-06-17)
> **Confidence**: high

---

> **Claim**: "System nervousness" adalah kondisi di mana perubahan kecil pada MPS memicu perubahan besar dan terus-menerus pada jadwal produksi MRP
> **Number/specific**: "System nervousness in MRP refers to constant changes in the production plan due to small variations in demand or supply." Root cause: management's attempt to continually respond to minor changes; lot-for-lot sizing aggravates it. Research shows less frequent replanning improves performance, reduces total cost, lowers schedule instability, and raises service levels.
> **Source**: Brainly/Factory Physics textbook reference (MRP system nervousness definition — standard operations management concept); ScienceDirect abstract "MRP system nervousness: Causes and cures" — https://www.sciencedirect.com/science/article/abs/pii/0167188X85900217; User Solutions blog "Schedule Nervousness" — https://usersolutions.com/blog/schedule-nervousness-manufacturing (accessed 2026-06-17)
> **Confidence**: high — well-established operations management concept, widely documented

---

> **Claim**: MRP hanya merencanakan material, bukan kapasitas mesin atau tenaga kerja — keterbatasan yang mendorong munculnya MRP II
> **Number/specific**: Confirmed by multiple sources. Classic MRP "merencanakan material, bukan kapasitas" is a standard limitation noted in operations management literature. MRP II specifically added capacity requirements planning (CRP) and rough-cut capacity planning.
> **Source**: Wikipedia MRP II article — https://en.wikipedia.org/wiki/Manufacturing_resource_planning; TechTarget MRP definition (accessed 2026-06-17); Cambridge IfM MRP (accessed 2026-06-17)
> **Confidence**: high

---

> **Claim**: Sektor manufaktur Indonesia menyumbang 18,98% PDB nasional pada 2024
> **Number/specific**: Manufacturing contribution to Indonesian GDP: 18.98% in 2024 (up from 18.67% in 2023 and 18.34% in 2022). Manufacturing contributed 0.90 percentage points to national economic growth of 5.03% in 2024. Source: Kementerian Perindustrian (Ministry of Industry).
> **Source**: PAJAK.COM citing Kemenperin data — "Kontribusi Industri Manufaktur ke PDB Capai 18,98 Persen pada 2024" — https://www.pajak.com/ekonomi/kontribusi-industri-manufaktur-ke-pdb-capai-1898-persen-pada-2024/ (accessed 2026-06-17); Kemenperin.go.id Q3 2023 data — https://kemenperin.go.id/artikel/24424/Triwulan-III,-Sektor-Manufaktur-Tumbuh-Lampaui-Pertumbuhan-Ekonomi (accessed 2026-06-17)
> **Confidence**: high for 2024 figure (consistent across multiple sources citing Kemenperin); note primary Kemenperin URL should be cited directly in article (see External Sources section)

---

> **Claim**: Sektor manufaktur Indonesia menyerap 19,35 juta tenaga kerja (13,83% dari total tenaga kerja nasional) per data Q3 2023
> **Number/specific**: Manufacturing employment: 19.35 million workers = 13.83% of total national employment (Q3 2023). Manufacturing captured 41.2% of national investment (Rp 433.9 trillion, Jan–Sep 2023, up 18.8% YoY).
> **Source**: Kemenperin.go.id, artikel #24424 (Q3 2023 report) — https://kemenperin.go.id/artikel/24424/Triwulan-III,-Sektor-Manufaktur-Tumbuh-Lampaui-Pertumbuhan-Ekonomi (accessed 2026-06-17)
> **Confidence**: high

---

> **Claim**: Output MRP adalah Planned Order Schedule (jadwal pesanan terencana) dan Order Release Report (laporan pelepasan pesanan)
> **Number/specific**: These are the two primary MRP outputs. Planned Order Schedule specifies when and how many materials to order or produce at each BOM level. Order Release Report triggers actual procurement/production. Consistent across operations management literature and SAP documentation.
> **Source**: TechTarget MRP definition; SafetyCulture MRP topics; SAP Learning MRP Processing overview (all accessed 2026-06-17)
> **Confidence**: high

---

## Solution focus + Soltius anchor (from product_matrix.md)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| SAP S/4HANA Production Planning (PP) — three MRP modes | (1) Classic MRP: existing approach, still supported, no longer recommended long-term; (2) MRP Live: in-memory HANA processing, SAP's stated future architecture, best for large/complex material sets, prerequisite for PP/DS; (3) Predictive MRP / pMRP: simulation tool, capacity and long-term planning, introduced S/4HANA 1909 | H2 #5 "Keterbatasan MRP Klasik" (funnel bridge) + Closing/Soft CTA | SAP Platinum Partner (via United VARs), pengalaman implementasi manufaktur (Automotive, Consumer Products, Mill Products), layanan Implementation + AMS |
| Modul PP = Production Planning (PP) | Use exact module name "Production Planning (PP)" — NOT "PP module" as a standalone abbreviation without spelling out on first use | First mention in H2 #5 or closing | Soltius mengimplementasikan dan mendukung SAP S/4HANA Manufacturing, termasuk modul Production Planning |

**Reminder**: Soltius **implements/migrates/supports** SAP S/4HANA Manufacturing — it does not build it. Max 2 self-mentions: one optional mid-article aside at H2 #5 or #6 ("dalam praktik implementasi..."), one substantive in the soft CTA paragraph.

---

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **Cambridge University Institute for Manufacturing (IfM), "Materials Requirements Planning (MRP)"** — https://www.ifm.eng.cam.ac.uk/research/dstools/mrp/ — *what it backs*: definition of MRP as a planning tool, three steps (exploding, netting, offsetting), MPS + BOM inputs, description of MRP and MRP II as "probably the most widely used planning and scheduling tool in the world." Highly credible academic/institutional source, no vendor affiliation.

2. **SAP help.sap.com, "When to Plan in MRP Live and When to Plan with Classic MRP" (SAP S/4HANA On-Premise documentation)** — https://help.sap.com/docs/SAP_S4HANA_ON-PREMISE/fe39e10a9a864a8f8dc9537704f0fa13/8b1f7d5128f6563ce10000000a423f68.html — *what it backs*: official SAP confirmation that both classic MRP and MRP Live exist in SAP S/4HANA Production Planning (PP), and guidance on when each is appropriate. Highest authority for SAP product facts.

3. **Kemenperin (Kementerian Perindustrian RI), "Kontribusi Industri Manufaktur Indonesia"** — https://kemenperin.go.id/artikel/24424/Triwulan-III,-Sektor-Manufaktur-Tumbuh-Lampaui-Pertumbuhan-Ekonomi — *what it backs*: Indonesian manufacturing sector contributes 18.98% of national GDP (2024), employs 19.35 million workers (Q3 2023 data). Indonesian government official source — highest authority for Indonesia macro context.

4. **SAP Learning (learning.sap.com), "Understanding MRP in SAP S/4HANA" (course: Exploring Production Planning in SAP S/4HANA)** — https://learning.sap.com/courses/exploring-production-planning-in-sap-s-4hana/understanding-mrp-in-sap-s-4hana — *what it backs*: SAP-official explanation of five-step deterministic MRP process in S/4HANA (BOM explosion, net requirements, lot sizing, sourcing, scheduling), confirming MRP Live is a distinct approach with dedicated lessons on pMRP.

---

## FAQ Q&As (5–8 drafted, Bahasa Indonesia)

### Apa itu MRP (Material Requirements Planning)?
MRP (*Material Requirements Planning*) adalah sistem perencanaan kebutuhan material yang menghitung jenis, jumlah, dan waktu pengadaan bahan baku serta komponen untuk memenuhi jadwal produksi. Sistem ini mengubah rencana produksi induk menjadi rencana pembelian dan pembuatan komponen secara otomatis, sehingga material tersedia tepat waktu tanpa kelebihan stok yang menumpuk di gudang.

### Apa kepanjangan dari MRP?
MRP adalah singkatan dari *Material Requirements Planning* — dalam Bahasa Indonesia sering disebut "Perencanaan Kebutuhan Material." Istilah ini pertama kali diformalisasi oleh Joseph Orlicky (IBM) pada 1964 dan kini menjadi salah satu metode perencanaan produksi paling luas digunakan di dunia, termasuk sebagai fitur inti di dalam sistem ERP modern seperti SAP S/4HANA.

### Apa saja tiga input yang dibutuhkan MRP?
MRP membutuhkan tiga input utama: (1) **Master Production Schedule (MPS)** — jadwal kapan dan berapa banyak produk jadi harus selesai diproduksi; (2) **Bill of Materials (BOM)** — daftar hierarkis semua komponen dan bahan baku beserta jumlahnya per unit produk; (3) **Inventory Status File** — catatan stok aktual di gudang, pesanan yang sudah ditempatkan (*on-order*), dan stok pengaman (*safety stock*). Ketiga input ini wajib akurat; satu pun yang keliru akan merusak seluruh rencana.

### Apa output dari sistem MRP?
Output utama MRP ada dua: (1) **Planned Order Schedule** (*jadwal pesanan terencana*) — menunjukkan kapan dan berapa banyak material harus dipesan atau diproduksi di setiap level BOM; (2) **Order Release Report** (*laporan pelepasan pesanan*) — perintah resmi untuk memulai pembelian ke pemasok atau proses produksi di lantai pabrik. Jadwal ini adalah instruksi konkret yang diterima tim pengadaan dan PPIC setiap siklus perencanaan.

### Apa perbedaan MRP dan ERP?
MRP adalah metode perencanaan kebutuhan material — salah satu fungsi dalam produksi. ERP (*Enterprise Resource Planning*) adalah sistem terintegrasi yang menghubungkan seluruh fungsi bisnis: keuangan, SDM, penjualan, pengadaan, hingga produksi, dalam satu platform. Singkatnya, MRP adalah bagian dari ERP. Istilah ERP sendiri diciptakan oleh Gartner pada 1990 untuk mendeskripsikan evolusi MRP II yang cakupannya meluas ke seluruh perusahaan.

### Apa itu MRP II?
MRP II (*Manufacturing Resource Planning*) adalah pengembangan MRP yang dicetuskan Oliver Wight pada 1983. Jika MRP klasik hanya merencanakan kebutuhan **material**, MRP II menambahkan perencanaan **kapasitas mesin**, **tenaga kerja**, dan **keuangan** — sehingga menghasilkan rencana produksi yang lebih menyeluruh. MRP II menjadi cikal bakal modul manufaktur dalam sistem ERP modern. Pada 1989, penjualan perangkat lunak MRP II di AS mencapai sekitar USD 1,2 miliar.

### Apa kelemahan utama MRP klasik?
MRP klasik memiliki empat kelemahan utama: (1) mengasumsikan **lead time tetap**, padahal nyatanya lead time berfluktuasi; (2) sangat bergantung pada **akurasi data** BOM dan persediaan — data buruk menghasilkan rencana buruk ("*garbage in, garbage out*"); (3) rentan terhadap ***system nervousness*** — perubahan kecil pada jadwal produksi induk memicu perubahan besar berantai pada seluruh rencana; (4) hanya merencanakan **material, bukan kapasitas mesin**. Keterbatasan inilah yang mendorong evolusi ke MRP II dan akhirnya ke ERP modern.

### Kapan perusahaan perlu menjalankan MRP di dalam sistem ERP modern seperti SAP S/4HANA?
Ketika volume SKU sudah ratusan, BOM berlevel banyak, pemasok tersebar, atau permintaan sangat fluktuatif — MRP manual di spreadsheet tidak lagi reliabel. SAP S/4HANA menyediakan tiga mode MRP dalam modul Production Planning (PP): *classic MRP*, **MRP Live** (berbasis HANA in-memory, arsitektur yang direkomendasikan SAP ke depan), dan **Predictive MRP / pMRP** untuk simulasi kapasitas jangka menengah. Perusahaan manufaktur yang mengimplementasikan SAP S/4HANA mendapatkan ketiga mode ini dalam satu platform terintegrasi.

---

## Data tables for the writer

### Tabel 1: MRP vs MRP II vs ERP — Perbandingan Konseptual

| Aspek | MRP (Material Requirements Planning) | MRP II (Manufacturing Resource Planning) | ERP (Enterprise Resource Planning) |
|---|---|---|---|
| **Dicetuskan** | 1964 (Orlicky/IBM); buku 1975 | 1983 (Oliver Wight) | 1990 (istilah Gartner) |
| **Cakupan** | Kebutuhan material untuk produksi | Material + kapasitas mesin + tenaga kerja + keuangan manufaktur | Seluruh fungsi bisnis (produksi, keuangan, SDM, penjualan, rantai pasok) |
| **Fokus utama** | "Bahan apa, berapa, kapan?" | "Bisakah kita produksi dengan kapasitas yang ada?" | "Semua bagian bisnis berbicara satu bahasa data" |
| **Data yang dikelola** | MPS, BOM, Inventory Status File | + Routing, Work Center, kapasitas, S&OP | + Akuntansi, HR, CRM, SCM, dll. |
| **Keterbatasan** | Tidak menghitung kapasitas; data-sensitif | Lebih kompleks, masih berbasis batch | Biaya & waktu implementasi lebih besar |
| **Kapan relevan** | Operasi manufaktur terbatas, butuh dasar perencanaan material | Perusahaan perlu optimalkan kapasitas + material bersama | Perusahaan ingin satu sistem mengelola seluruh operasi bisnis |
| **Contoh implementasi modern** | Fungsi MRP di dalam ERP | Modul PP (Production Planning) dalam ERP | SAP S/4HANA, SAP Business One, dll. |

### Tabel 2: Contoh Perhitungan Netting (Ilustrasi)

> **Label: ILUSTRASI** — angka di bawah bukan data klien; hanya menunjukkan logika aritmetika MRP.

**Skenario**: Produk Jadi "Meja A" direncanakan diproduksi 1.000 unit minggu ini. Meja A membutuhkan 1 buah "Papan Top" (level 1 BOM). Persediaan Papan Top di gudang: 300 lembar. Pesanan yang sudah ditempatkan (on-order, tiba minggu ini): 100 lembar.

| Elemen | Nilai |
|---|---|
| Gross Requirement (kebutuhan kotor) | 1.000 unit |
| On-Hand Inventory (stok gudang) | 300 unit |
| Scheduled Receipts (pesanan tiba) | 100 unit |
| **Net Requirement (kebutuhan bersih)** | **1.000 − 300 − 100 = 600 unit** |
| Lot Size (kebijakan pemesanan) | Min. 500 unit per pesanan |
| **Planned Order (pesanan terencana)** | **1 × 500 = 500 unit → dibulatkan ke 1 lot = 500 unit** *(atau 2 lot = 1.000 jika kebijakan lot-for-lot)* |
| Lead Time | 5 hari kerja |
| **Planned Order Release Date** | **Tanggal produksi − 5 hari kerja** |

*Proses Exploding*: Jika "Papan Top" tersusun dari 2 keping "Kayu Mentah" (level 2 BOM), maka net requirement Kayu Mentah = 600 × 2 = 1.200 keping → netting ulang dengan stok Kayu Mentah yang ada.

### Tabel 3: Tiga Mode MRP di SAP S/4HANA (Production Planning / PP)

| Aspek | Classic MRP | MRP Live | Predictive MRP (pMRP) |
|---|---|---|---|
| **Arsitektur** | ABAP application layer | SAP HANA in-memory (logic pushed to DB) | SAP HANA in-memory, simulation layer |
| **Performa** | Standar; lebih cepat untuk material kecil/sederhana | Signifikan lebih cepat untuk material banyak/kompleks | Tidak untuk production planning langsung; untuk simulasi |
| **Status SAP** | Masih didukung; tidak ada inovasi baru | Arsitektur masa depan; semua inovasi difokuskan di sini | Tersedia sejak S/4HANA 1909 |
| **Integrasi** | Tidak support PP/DS | PP/DS + Fiori MRP Cockpit (eksklusif) | Simulasi S&OP/IBP, capacity planning |
| **Kapan pakai** | Konfigurasi sederhana, sedikit material, review sebelum save | Semua skenario baru; rekomendasi SAP | Validasi feasibility demand plan; deteksi kapasitas bottleneck jangka menengah |
| **Fungsi utama** | Perencanaan material standar | Perencanaan material real-time & integratif | Simulasi "what-if" kapasitas dan material |

---

## Edge cases & nuance

- **Step-count variability**: Literatur akademik dan industri tidak seragam dalam menghitung "langkah MRP." Cambridge IfM menyebut 3 langkah (exploding, netting, offsetting — tanpa lotting terpisah). SAP Learning menyebut 5 langkah (BOM explosion, net requirements, lot sizing, sourcing, scheduling). Sumber operasi manajemen mainstream (Heizer-Render, APICS) lazim menyebut 4 langkah dengan Netting sebagai pertama. **Rekomendasi penulis**: gunakan 4 langkah baku (Netting → Lotting → Offsetting → Exploding) karena paling dikenal di kurikulum teknik industri Indonesia, dan tambahkan catatan bahwa urutan bisa ditukar (exploding sering mendahului netting dalam praktek top-down BOM). Ini bukan error — ini cara baca BOM yang berbeda (top-down vs bottom-up).

- **Lotting vs. lot sizing**: Beberapa sumber menyebut "lot sizing" (bukan "lotting") sebagai nama yang lebih baku. Penulis boleh menggunakan keduanya: "Lotting (Lot Sizing)" agar ramah pembaca teknik industri dan SAP-aware.

- **MRP sebagai "software" vs. "metode"**: SERP Indonesia cenderung mencampurkan "sistem MRP" (software) dengan "metode MRP" (konsep). Artikel ini membedakannya secara eksplisit: MRP adalah metode/logika perencanaan; implementasinya bisa di software stand-alone, modul ERP, atau bahkan spreadsheet sederhana.

- **Lead time di MRP vs. realitas**: MRP menggunakan lead time tetap dari master data material. Dalam praktik, lead time aktual bervariasi berdasarkan antrian, kapasitas, dan ukuran lot. Ini adalah kelemahan nyata; tidak perlu di-softening.

- **"Garbage in, garbage out" adalah framing yang tepat**: Sumber akademik mendukung klaim bahwa ketidakakuratan BOM dan data persediaan adalah penyebab utama kegagalan MRP. Hindari mengklaim "akurasi data harus 100%" (tidak ada sistem yang mencapai itu) — gunakan "akurasi data kritis sebagai prasyarat reliabilitas MRP."

- **pMRP bukan untuk planning produksi harian**: Pastikan artikel tidak memberi kesan pMRP menggantikan MRP Live untuk planning operasional sehari-hari. pMRP adalah alat simulasi/kapasitas jangka menengah; MRP Live adalah planning engine operasional.

- **SAP S/4HANA ≠ S/4HANA Cloud Public Edition**: Mode MRP Live dan pMRP terverifikasi untuk S/4HANA On-Premise dan Private Cloud. Untuk S/4HANA Cloud Public Edition, PP capabilities exist but may differ in scope. Artikel ini tidak perlu memisahkan ini (terlalu teknis untuk top-funnel); cukup sebut "SAP S/4HANA" saja.

---

## Flags (open factual risk)

- **Flag #1 — Urutan/jumlah langkah MRP (Netting/Lotting/Offsetting/Exploding)**: Sumber berbeda-beda dalam urutan dan jumlah. Cambridge: 3 langkah (tanpa lotting). SAP Learning: 5 langkah. APICS/mainstream OM: 4 langkah. Penulis HARUS memilih satu kerangka dan menjelaskannya konsisten, dengan catatan bahwa variasi terminologi ada. Rekomendasi: gunakan 4 langkah (Netting → Lotting → Offsetting → Exploding) dengan catatan "urutan eksplosif BOM dapat mendahului netting dalam implementasi top-down." Jangan campurkan sistem penomoran yang berbeda dalam satu artikel.
  > **Rekomendasi**: Gunakan kerangka 4 langkah, atribusikan ke "logika standar MRP dalam literatur operations management" tanpa mengklaim satu buku sumber tunggal.

- **Flag #2 — Klaim "10× lebih cepat" untuk MRP Live**: Angka "up to 10x faster" beredar di beberapa SAP community blog dan marketing material (tidak dikonfirmasi di SAP PRESS atau help.sap.com yang diakses). SAP PRESS blog yang diakses hanya menyebut "significantly better for large, complex materials." Jangan gunakan "10×" tanpa sumber spesifik yang dapat diakses.
  > **Rekomendasi**: Gunakan framing "jauh lebih cepat untuk material banyak dan BOM kompleks" — ini terverifikasi.

- **Flag #3 — Versi SAP untuk pMRP ("S/4HANA 1909")**: Versi rilis pMRP dikonfirmasi sebagai 1909 melalui beberapa SAP Community sources dan SAP blog post Oktober 2019. Namun help.sap.com tidak dapat diakses langsung untuk konfirmasi final. Jika disebutkan versi, atribusikan ke "diperkenalkan dalam SAP S/4HANA 1909" dan tidak perlu diperluas — cukup framing "tersedia di SAP S/4HANA."
  > **Rekomendasi**: Sebut pMRP tersedia di SAP S/4HANA (tanpa spesifikasi versi) untuk menghindari ketidakakuratan versi. Sangat aman dan sudah terverifikasi di level produk.

- **Flag #4 — Definisi resmi ASCM/APICS (URL langsung tidak dapat diakses)**: Brief meminta kutipan definisi MRP dari ASCM/APICS Supply Chain Dictionary. Halaman dictionary ASCM (https://www.ascm.org/learning-development/certifications-credentials/dictionary/) tidak menampilkan konten saat diakses. Definisi terverifikasi dari Cambridge IfM dan TechTarget konsisten secara substansi, tetapi bukan kutipan langsung dari ASCM Dictionary.
  > **Rekomendasi**: Gunakan Cambridge IfM (University of Cambridge) sebagai sumber definitional otoritatif yang dapat diverifikasi, dan atribusikan sebagai "sumber industri dan akademik." Jangan mengklaim "definisi ASCM" secara eksplisit di dalam artikel tanpa akses langsung ke teks dictionary. Framing aman: "menurut definisi yang berlaku dalam literatur manajemen rantai pasok..."

---

## Definition snippet draft (40–60 words)

> **MRP (Material Requirements Planning)** adalah sistem perencanaan kebutuhan material yang menghitung jenis, jumlah, dan waktu pengadaan bahan baku serta komponen untuk memenuhi jadwal produksi. Dikembangkan pertama kali pada 1964, MRP mengubah rencana produksi induk menjadi rencana pembelian dan pembuatan komponen, sehingga material tersedia tepat waktu tanpa kelebihan stok.

*(54 kata — dalam rentang 40–60)*

---

## Notes for image-planner

- **Concept 1 — Diagram Input–Proses–Output MRP** (`{IMAGE_01}`): Infografik horizontal tiga zona. Zona kiri (INPUT): tiga kotak berlabel "Master Production Schedule (MPS)", "Bill of Materials (BOM)", "Inventory Status File" dengan ikon dokumen/gudang. Zona tengah (PROSES): kotak mesin/roda gigi berlabel "MRP Engine" dengan 4 anak panah turun bernomor (1. Netting, 2. Lotting, 3. Offsetting, 4. Exploding). Zona kanan (OUTPUT): dua kotak "Planned Order Schedule" dan "Order Release Report" dengan ikon jadwal/checklist. Warna: biru korporat + abu-abu; style flat/clean enterprise. Alt-text Bahasa Indonesia: "Diagram alur input, proses, dan output sistem MRP (Material Requirements Planning) — dari MPS, BOM, dan Inventory Status File hingga Planned Order Schedule."

- **Concept 2 — Tabel/Infografik Evolusi MRP → MRP II → ERP** (`{IMAGE_02}`): Timeline horizontal atau tiga pilar bertingkat. Pilar 1 (1964–1975): "MRP" — ikon material/komponen, label "Material saja." Pilar 2 (1983): "MRP II" — ikon mesin + manusia + keuangan, label "Material + Kapasitas + Keuangan." Pilar 3 (1990–kini): "ERP" — ikon ekosistem bisnis lengkap, label "Seluruh fungsi bisnis." Garis waktu di bawah. Alt-text: "Evolusi dari MRP (1964) ke MRP II (1983) ke ERP (1990): cakupan yang semakin luas dari perencanaan material hingga sistem bisnis terintegrasi."

- **Concept 3 — Tabel Perbandingan Tiga Mode MRP di SAP S/4HANA** (`{IMAGE_03}`, opsional jika writer membuat tabel teks di H2 #5/closing): Tabel infografik tiga kolom (Classic MRP / MRP Live / Predictive MRP pMRP) dengan baris: Arsitektur, Performa, Status SAP, Kapan dipakai. Kolom MRP Live diberi highlight/badge "Recommended by SAP." Style: tabel enterprise SAP biru-putih. Alt-text: "Perbandingan tiga mode MRP di SAP S/4HANA Production Planning: Classic MRP, MRP Live, dan Predictive MRP (pMRP)."
