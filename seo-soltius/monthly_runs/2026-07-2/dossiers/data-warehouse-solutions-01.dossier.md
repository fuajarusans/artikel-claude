---
brief_id: "data-warehouse-solutions-01"
researcher_run_date: "2026-07-07"
sources_cited: 9
flags: 5
---

# Research Dossier: Data Warehouse atau Data Mart Dulu? Menentukan Cakupan dan Strategi Bangun

## TL;DR for the writer

- The article's spine is a **scope + build-strategy** decision, not a storage-paradigm comparison. Teach two axes cleanly: (a) **data mart (satu subjek/departemen) vs enterprise data warehouse (lintas divisi)**, and (b) **Inmon top-down vs Kimball bottom-up** as the two classic build methodologies. Do not conflate the two axes — a reader can pick "mart first" under either methodology.
- The two methodologies are **well-documented and verifiable**: Inmon = build the normalized (3NF) enterprise warehouse first, derive dimensional marts from it (top-down); Kimball = build dimensional data marts (star schema) first for single business processes, integrate them via **conformed dimensions / the data-warehouse bus architecture** (bottom-up). Attribute carefully — do not swap them.
- The honest counter-conventional H2 ("spaghetti of marts") is **backed by the Kimball Group itself**: independent marts built without conformed dimensions become "stovepipes" that cannot be integrated. This is a real, citable practitioner warning — not opinion.
- **SAP mapping is confirmed and safe to state**: SAP Datasphere (the cloud DWaaS, formerly SAP Data Warehouse Cloud) organizes work into **spaces** — secure isolated areas where a team/domain acquires, prepares, and models data, and can share/expose it to other spaces. Remote tables **federate by default** (access without replication). SAP BW/4HANA (on-prem/private cloud) uses **LSA++ (Layered Scalable Architecture)** whose layers are optional and non-mandatory — both platforms genuinely support a phased/per-domain approach. Both are supported by SAP to 2040 (S/4HANA-aligned).
- **Avoid absolute cost/duration numbers.** Use labeled practice ranges only: independent departmental marts can go live in ~weeks/a few months, a full EDW typically takes many months — attribute as general-practice ranges (the ComputerWeekly/methodology sources give a "quick win vs long design" framing, not hard universal figures). Soltius anchor = Data Management + Data and AI Consulting, closing only.

## Core facts (verified)

> **Claim**: Data mart adalah subset penyimpanan data yang berfokus pada satu subjek/unit bisnis, sedangkan data warehouse menyimpan informasi seluruh perusahaan lintas topik.
> **Number/specific**: AWS: "a data mart stores information closely related to a specific subject"; "a data mart serves as the front-facing element for a department's data"; a data warehouse "maintains enterprise-wide information across multiple topics."
> **Source**: AWS — "What is a Data Mart?", https://aws.amazon.com/what-is/data-mart/ (accessed 2026-07-07)
> **Confidence**: high

> **Claim**: Dependent data mart mengambil subset dari data warehouse terpusat; independent data mart berdiri sendiri, menarik data langsung dari sumber tanpa bergantung pada warehouse.
> **Number/specific**: AWS: "A dependent data mart populates its storage with a subset of information from a centralized data warehouse." "An independent data mart does not rely on a central data warehouse or any other data mart." (Hybrid = gabungan sumber warehouse + eksternal.)
> **Source**: AWS — "What is a Data Mart?", https://aws.amazon.com/what-is/data-mart/ (accessed 2026-07-07)
> **Confidence**: high

> **Claim**: Metodologi Inmon (top-down) membangun enterprise data warehouse ternormalisasi (hingga 3NF) lebih dulu, lalu data mart dimensional diturunkan dari warehouse tersebut.
> **Number/specific**: Inmon menyimpan data "atomic" pada level detail terendah dalam model ternormalisasi; warehouse menjadi pusat Corporate Information Factory (CIF); data mart dimensional dibuat setelahnya.
> **Source**: ComputerWeekly — "Inmon or Kimball: Which approach is suitable for your data warehouse?", https://www.computerweekly.com/tip/Inmon-or-Kimball-Which-approach-is-suitable-for-your-data-warehouse (accessed 2026-07-07)
> **Confidence**: high

> **Claim**: Metodologi Kimball (bottom-up) membangun data mart dimensional (star schema) per proses bisnis lebih dulu, lalu diintegrasikan menjadi warehouse yang lebih luas.
> **Number/specific**: Kimball memakai arsitektur "data warehouse bus" yang menghubungkan mart melalui conformed dimensions; pendekatan cocok untuk "quick win" dan optimasi lokal.
> **Source**: ComputerWeekly — "Inmon or Kimball", https://www.computerweekly.com/tip/Inmon-or-Kimball-Which-approach-is-suitable-for-your-data-warehouse (accessed 2026-07-07)
> **Confidence**: high

> **Claim**: Conformed dimensions adalah mekanisme kunci Kimball untuk mencegah data mart menjadi "stovepipe" (silo) yang tak bisa diintegrasikan.
> **Number/specific**: Kimball Group: conformed dimensions adalah "common, standardized, master dimensions that are managed once in the ETL system and then reused by multiple fact tables"; mereka "support the ability to drill across and integrate data from multiple business processes." Menggunakan conformed dimensions "is the way to avoid stovepipe data marts."
> **Source**: Kimball Group — "Enterprise Data Warehouse Bus Architecture", https://www.kimballgroup.com/data-warehouse-business-intelligence-resources/kimball-techniques/kimball-data-warehouse-bus-architecture/ (accessed 2026-07-07)
> **Confidence**: high

> **Claim**: Bus matrix Kimball menggabungkan perencanaan integrasi top-down dengan pengiriman bottom-up bertahap (satu proses bisnis pada satu waktu).
> **Number/specific**: Kimball Group: Enterprise Data Warehouse Bus Matrix = "the architectural blueprint providing the top-down strategic perspective... while agile bottom-up delivery occurs by focusing on a single business process at a time."
> **Source**: Kimball Group — "Enterprise Data Warehouse Bus Architecture", https://www.kimballgroup.com/data-warehouse-business-intelligence-resources/kimball-techniques/kimball-data-warehouse-bus-architecture/ (accessed 2026-07-07)
> **Confidence**: high

> **Claim**: Trade-off inti — Inmon menuntut investasi desain di muka demi konsistensi enterprise jangka panjang; Kimball memberi hasil awal lebih cepat lewat fokus departemen.
> **Number/specific**: ComputerWeekly: "Inmon's approach is suitable for stable businesses that can afford the time taken for design and the cost involved"; "if local optimisation is good enough and the focus is on a quick win, it is advisable to go for Kimball's approach." Tidak ada metodologi yang universal unggul.
> **Source**: ComputerWeekly — "Inmon or Kimball", https://www.computerweekly.com/tip/Inmon-or-Kimball-Which-approach-is-suitable-for-your-data-warehouse (accessed 2026-07-07)
> **Confidence**: high

> **Claim**: SAP Datasphere adalah generasi berikutnya dari SAP Data Warehouse Cloud (rebranding diumumkan/diluncurkan Maret 2023).
> **Number/specific**: SAP: "the next generation of the SAP Data Warehouse Cloud solution"; diperkenalkan 8 Maret 2023 pada SAP Data Unleashed, tenant DWC otomatis dialihkan tanpa gangguan; "available now" per 15 Maret 2023.
> **Source**: SAP News — "SAP Introduces SAP Datasphere to Simplify Customers' Data Landscape", https://news.sap.com/hk/2023/03/sap-introduces-sap-datasphere-to-simplify-customers-data-landscape/ (accessed 2026-07-07)
> **Confidence**: high

> **Claim**: SAP Datasphere menyatukan kapabilitas integrasi, katalog, pemodelan, warehousing, federasi, dan virtualisasi untuk membangun "business data fabric".
> **Number/specific**: SAP: kemampuan "integration, cataloging, modeling, warehousing, federation, and virtualization"; "customers can build a business data fabric architecture that quickly delivers meaningful data with business context and logic intact."
> **Source**: SAP News — "SAP Introduces SAP Datasphere...", https://news.sap.com/hk/2023/03/sap-introduces-sap-datasphere-to-simplify-customers-data-landscape/ (accessed 2026-07-07)
> **Confidence**: high

> **Claim**: Di SAP Datasphere, semua akuisisi, penyiapan, dan pemodelan data terjadi di dalam "spaces" — area aman yang terisolasi kecuali data dibagikan/diekspos ke space lain.
> **Number/specific**: SAP Help Portal: "A space is a secure area - space data cannot be accessed outside the space unless it is shared to another space or exposed for consumption." "All data acquisition, preparation, and modeling in SAP Datasphere happens inside spaces." Administrator membuat space dan mengalokasikan resource; user ditugaskan lewat scoped roles.
> **Source**: SAP Help Portal — "Working in SAP Datasphere Spaces" / "Integrating Data and Managing Spaces", https://help.sap.com/docs/SAP_DATASPHERE/c8a54ee704e94e15926551293243fd1d/6a396f6cf7ad41faa3a8cdd24f4e728a.html (accessed 2026-07-07)
> **Confidence**: high

> **Claim**: Di SAP Datasphere, remote table melakukan federasi data secara default — data tidak direplikasi dan diakses dari sistem sumber saat digunakan.
> **Number/specific**: SAP Help Portal: "By default, remote tables federate data, meaning data is not replicated and must be accessed from the remote system each time the data is used." Untuk skenario federasi, entitas pertama adalah Remote Table yang diimpor dari koneksi ke dalam space.
> **Source**: SAP Help Portal — "Integrating Data and Managing Spaces in SAP Datasphere", https://help.sap.com/docs/SAP_DATASPHERE/be5967d099974c69b77f4549425ca4c0/8f98d3c917f94452bafe288055b60b35.html (accessed 2026-07-07)
> **Confidence**: high

> **Claim**: SAP BW/4HANA memakai LSA++ (Layered Scalable Architecture), penyempurnaan LSA klasik untuk BW on HANA, di mana lapisan tidak lagi wajib — hanya lapisan yang diperlukan yang diimplementasikan.
> **Number/specific**: SAP Learning: "The LSA++ is an extension of the classic LSA specific for SAP BW on HANA systems." "the layers are no longer mandatory — you implement only the layers that you need"; data dapat dikonsumsi dari setiap lapisan; lapisan virtual diutamakan, persistensi harus punya alasan bisnis. Ini mendukung model berlapis/bertahap dengan redundansi minimal.
> **Source**: SAP Learning — "Introducing the Enhanced Layered Scalable Architecture (LSA++)", https://learning.sap.com/learning-journeys/upgrading-your-sap-bw-skills-to-sap-bw-4hana/introducing-the-enhanced-layered-scalable-architecture-lsa-_b2b6a2df-262c-459e-af01-a2b5d2238f51 (accessed 2026-07-07)
> **Confidence**: high

> **Claim**: SAP BW/4HANA adalah solusi data warehouse SAP untuk on-premise/private cloud; SAP Datasphere adalah counterpart cloud (DWaaS); keduanya dapat dikombinasikan menjadi solusi hybrid.
> **Number/specific**: SAP: BW/4HANA = "SAP's solution for an on-premises or private cloud deployment"; Datasphere = "based on a DWaaS approach with very fast release cycles"; "SAP BW/4HANA and SAP Datasphere can easily be combined to create a hybrid cloud/on-premise solution." SAP BW Bridge menjembatani transisi dari SAP BW ke Datasphere.
> **Source**: SAP Community (technology blog by SAP) — "SAP Datasphere is ready to take over the role of SAP BW", https://community.sap.com/t5/technology-blog-posts-by-sap/sap-datasphere-is-ready-to-take-over-the-role-of-sap-bw/ba-p/13661635 (accessed 2026-07-07)
> **Confidence**: high

> **Claim**: SAP BW/4HANA didukung (maintenance) hingga akhir 2040, selaras dengan komitmen maintenance SAP S/4HANA.
> **Number/specific**: SAP: "SAP BW/4HANA will be aligned with the SAP S/4HANA maintenance extension and be maintained until at least 2040." Sejak 2016 semua investasi fitur difokuskan ke BW/4HANA (BW 7.5 berhenti fitur; mainstream maintenance BW 7.5 hingga 2027).
> **Source**: SAP Community (blog by SAP) — "SAP BW/4HANA to extend maintenance in alignment with SAP Business Suite and SAP S/4HANA", https://community.sap.com/t5/technology-blog-posts-by-sap/sap-bw-4hana-to-extend-maintenance-in-alignment-with-sap-business-suite-and/ba-p/13457952 + SAP News, https://news.sap.com/2022/09/new-sap-s4hana-release-maintenance-strategy/ (accessed 2026-07-07)
> **Confidence**: high

> **Claim**: Data silo tetap menjadi tantangan yang diakui dalam transformasi digital Indonesia; pemerintah aktif menguranginya lewat dashboard dan data sharing.
> **Number/specific**: Komdigi: pemerintah "working to reduce data silos through dashboard systems and data sharing to improve the quality of outputs." (Konteks makro, bukan angka pasar spesifik.)
> **Source**: Kementerian Komunikasi dan Digital (Komdigi) — Transformasi Digital, https://www.komdigi.go.id/transformasi-digital (accessed 2026-07-07)
> **Confidence**: medium (konteks kualitatif; gunakan sebagai latar, bukan statistik keras)

## Solution focus + Soltius anchor (from product_matrix.md)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| **SAP Datasphere** (cloud DWaaS, formerly Data Warehouse Cloud) — "spaces" per domain + federasi default | Semua modeling terjadi di dalam spaces (area aman, terisolasi kecuali dibagikan/diekspos); remote table federasi tanpa replikasi; menyatukan integrasi/katalog/pemodelan/warehousing/federasi/virtualisasi (business data fabric) | H2 #4 (kerangka keputusan: satu platform bisa menampung mart-first maupun EDW-first) + H2 #5 (federasi/conformed sebagai antidot silo) | **Data Management + Data and AI Consulting** — closing CTA |
| **SAP BW/4HANA** (on-prem/private cloud) — LSA++ layered architecture | Lapisan LSA++ tidak wajib, hanya yang diperlukan; mendukung pendekatan berlapis/bertahap; dapat dikombinasikan hybrid dengan Datasphere; didukung hingga 2040 | H2 #4 (opsi on-prem yang sudah punya SAP) | (sama — satu anchor closing) |

Reminder: Soltius **mengimplementasikan/migrasi/mendukung** platform ini — bukan membangunnya. Maksimal 2–3 self-mention; utama di closing. Satu aside mid-article diperbolehkan pada H2 #4 (memulai dari domain prioritas menurunkan risiko) — tanpa menjual.

Suggested closing anchor phrasing (paraphrase, don't copy verbatim): "Melalui layanan Data and AI Consulting, Soltius membantu merancang arsitektur data yang bisa dimulai dari satu lingkup berprioritas lalu tumbuh menjadi satu sumber kebenaran perusahaan — di atas platform seperti SAP Datasphere atau SAP BW/4HANA." (Soltius = SAP Platinum Partner via United VARs, bagian Metrodata Group sejak 2008, 200+ konsultan — pilih satu, jangan tumpuk.)

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **SAP Help Portal — "Working in / Integrating Data and Managing Spaces in SAP Datasphere" (accessed 2026-07-07)** — https://help.sap.com/docs/SAP_DATASPHERE/c8a54ee704e94e15926551293243fd1d/6a396f6cf7ad41faa3a8cdd24f4e728a.html — *what it backs*: definisi "space" sebagai area aman untuk akuisisi/penyiapan/pemodelan data; federasi remote table tanpa replikasi. **(SAP official — prioritas tertinggi; wajib ≥1 sumber SAP.)**
2. **Kimball Group — "Enterprise Data Warehouse Bus Architecture" (accessed 2026-07-07)** — https://www.kimballgroup.com/data-warehouse-business-intelligence-resources/kimball-techniques/kimball-data-warehouse-bus-architecture/ — *what it backs*: conformed dimensions sebagai cara menghindari "stovepipe" data marts; pengiriman bottom-up bertahap per proses bisnis. **(Sumber primer metodologi Kimball.)**
3. **AWS — "What is a Data Mart?" (accessed 2026-07-07)** — https://aws.amazon.com/what-is/data-mart/ — *what it backs*: definisi data mart serta dependent vs independent vs hybrid data mart (sesuai saran brief).
4. **ComputerWeekly — "Inmon or Kimball: Which approach is suitable for your data warehouse?" (accessed 2026-07-07)** — https://www.computerweekly.com/tip/Inmon-or-Kimball-Which-approach-is-suitable-for-your-data-warehouse — *what it backs*: ringkasan trade-off Inmon top-down vs Kimball bottom-up.

Priority note untuk writer: tautkan minimal 1 SAP official (#1) + 1 sumber metodologi (Kimball #2 atau ComputerWeekly #4). AWS (#3) untuk definisi dependent/independent.

## FAQ Q&As (7 drafted, Bahasa Indonesia)

### Apa itu data mart?
Data mart adalah subset penyimpanan data yang berfokus pada satu subjek atau unit bisnis, misalnya penjualan, keuangan, atau logistik. Berbeda dari data warehouse yang menyimpan informasi seluruh perusahaan lintas divisi, data mart menjadi "wajah depan" data satu departemen sehingga tim terkait dapat menganalisis area mereka tanpa harus menavigasi seluruh gudang data perusahaan (definisi: AWS, "What is a Data Mart?").

### Kapan perusahaan cukup pakai data mart saja, bukan data warehouse penuh?
Data mart memadai ketika kebutuhan analitik masih terpusat pada satu departemen, sumber datanya sedikit, anggaran terbatas, dan urgensi tinggi untuk hasil cepat. Jika kebutuhan lintas divisi dan "satu sumber kebenaran" belum mendesak, memulai dari satu mart berprioritas tinggi menurunkan risiko dan mempercepat nilai—selama direncanakan agar bisa berkembang, bukan menjadi silo baru.

### Apa perbedaan dependent dan independent data mart?
Dependent data mart mengambil datanya dari data warehouse terpusat yang sudah ada, sehingga konsisten dan mudah dikelola tetapi bergantung pada warehouse tersebut. Independent data mart berdiri sendiri dan menarik data langsung dari sistem sumber tanpa warehouse pusat—cepat dibangun, tetapi berisiko menjadi silo terisolasi jika banyak dibuat tanpa standar bersama (AWS). Ada juga hybrid yang menggabungkan sumber warehouse dan eksternal.

### Metodologi Inmon atau Kimball, mana yang cocok untuk perusahaan saya?
Inmon (top-down) membangun enterprise data warehouse ternormalisasi lebih dulu, lalu menurunkan data mart—cocok untuk organisasi stabil yang mampu berinvestasi waktu dan biaya desain demi konsistensi jangka panjang. Kimball (bottom-up) membangun data mart dimensional per proses bisnis lebih dulu dan mengintegrasikannya lewat conformed dimensions—cocok bila fokusnya "quick win" departemen. Tidak ada yang universal unggul; keputusan bergantung pada tujuan, sumber daya, dan tenggat (ComputerWeekly).

### Apakah data mart bisa berkembang menjadi data warehouse?
Bisa, dan inilah kekuatan pendekatan bottom-up Kimball: data mart per proses bisnis dibangun bertahap, lalu diintegrasikan menjadi warehouse enterprise melalui conformed dimensions—dimensi master standar yang dikelola sekali dan dipakai ulang di banyak mart. Kuncinya adalah mendesain mart sejak awal agar "menyambung" (dependent atau conformed), bukan berdiri sendiri, sehingga tidak menjadi stovepipe yang sulit disatukan (Kimball Group).

### Berapa lama membangun data mart dibanding data warehouse penuh?
Sebagai rentang praktik lapangan (bukan janji), data mart departemen berlingkup fokus umumnya bisa "live" jauh lebih cepat—hitungan minggu hingga beberapa bulan—karena cakupannya sempit dan satu sumber utama. Enterprise data warehouse penuh menuntut desain lintas divisi dan tata kelola data, sehingga biasanya memakan waktu berbulan-bulan. Angka pastinya sangat bergantung pada jumlah sumber data, kualitas data, dan kematangan tim.

### Apakah SAP Datasphere dan SAP BW/4HANA mendukung pendekatan bertahap?
Ya. SAP Datasphere mengatur pekerjaan dalam "spaces"—area aman tempat satu tim atau domain mengakuisisi, menyiapkan, dan memodelkan data, lalu membagikannya ke space lain; remote table-nya memfederasi data tanpa replikasi. SAP BW/4HANA memakai arsitektur berlapis LSA++ yang lapisannya tidak wajib—hanya yang diperlukan yang dibangun. Keduanya memungkinkan mulai per-domain lalu difederasi/diintegrasikan (SAP Help Portal; SAP Learning).

## Data tables for the writer

### Inmon (top-down) vs Kimball (bottom-up)
| Aspek | Inmon (Top-Down) | Kimball (Bottom-Up) |
|---|---|---|
| Titik mulai | Enterprise data warehouse (EDW) dulu | Data mart per proses bisnis dulu |
| Model data | Ternormalisasi hingga 3NF (atomic, detail terendah) | Dimensional (star schema) |
| Data mart | Diturunkan dari EDW (dependent) | Dibangun dulu, lalu diintegrasikan |
| Perekat integrasi | Struktur EDW terpusat (Corporate Information Factory) | Conformed dimensions / data-warehouse bus |
| Waktu ke nilai pertama | Lebih lama (desain enterprise di muka) | Lebih cepat ("quick win" departemen) |
| Kekuatan utama | Konsistensi & tata kelola enterprise | Kecepatan & fleksibilitas |
| Risiko utama | Investasi awal besar, kurang adaptif | Silo/"stovepipe" bila tanpa conformed dimensions |
| Cocok untuk | Organisasi stabil, kebutuhan lintas divisi jelas | Butuh hasil cepat pada 1 domain prioritas |

*Sumber: ComputerWeekly (Inmon/Kimball); Kimball Group (conformed dimensions/bus). Label rentang waktu sebagai kecenderungan umum, bukan angka absolut.*

### Dependent vs Independent Data Mart
| Aspek | Dependent | Independent |
|---|---|---|
| Sumber data | Subset dari data warehouse terpusat | Langsung dari sistem sumber |
| Ketergantungan | Bergantung pada warehouse (single point of failure) | Berdiri sendiri |
| Konsistensi | Tinggi (mewarisi standar warehouse) | Rentan tidak konsisten antar-mart |
| Kecepatan setup | Perlu warehouse lebih dulu | Cepat, relatif mudah |
| Risiko jangka panjang | Rendah (terintegrasi) | Menjadi silo/"spaghetti of marts" |

*Sumber: AWS, "What is a Data Mart?"*

### SAP Datasphere vs SAP BW/4HANA (untuk H2 #4)
| Aspek | SAP Datasphere | SAP BW/4HANA |
|---|---|---|
| Deployment | Cloud (DWaaS) | On-premise / private cloud |
| Pendahulu / posisi | Generasi berikutnya SAP Data Warehouse Cloud | Penerus SAP BW (untuk on-prem) |
| Unit organisasi kerja | Spaces (per domain/tim) | Lapisan LSA++ (opsional, sesuai kebutuhan) |
| Akses lintas sumber | Federasi default (remote table tanpa replikasi) | Open ODS / virtualisasi berlapis |
| Kombinasi | Bisa hybrid dengan BW/4HANA (via BW Bridge) | Bisa hybrid dengan Datasphere |
| Dukungan (maintenance) | Rilis cepat (SaaS, berkelanjutan) | Hingga 2040 (selaras S/4HANA) |

*Sumber: SAP News (Datasphere); SAP Community/SAP Learning (BW/4HANA, LSA++, hybrid, 2040).*

## Edge cases & nuance

- **Dua sumbu berbeda, jangan dicampur.** "Mart vs warehouse" (cakupan) berbeda dari "Inmon vs Kimball" (metodologi build). Seorang pembaca bisa memilih "mart dulu" dalam kerangka Kimball (bottom-up murni) *atau* memulai dependent mart di bawah payung Inmon. Writer harus menjaga kedua sumbu tetap jelas agar tidak menyesatkan.
- **"Mart dulu" tidak otomatis berarti silo.** Yang menciptakan silo adalah *independent* mart tanpa standar bersama. Mart yang *dependent* atau dibangun dengan *conformed dimensions* justru bisa dimulai cepat DAN tetap terintegrasi. Ini pembeda utama artikel dari kompetitor.
- **Praktik nyata sering hybrid.** ComputerWeekly & sumber metodologi mencatat banyak organisasi memadukan elemen Inmon dan Kimball. Hindari menyajikannya sebagai pilihan biner yang kaku.
- **SAP Datasphere bukan pengganti langsung 1:1 BW/4HANA untuk semua kasus.** Datasphere = cloud DWaaS; BW/4HANA = on-prem/private hingga 2040. Banyak pelanggan memakai keduanya (hybrid via BW Bridge). Jangan tulis "Datasphere menggantikan BW/4HANA" secara mutlak — frasakan sebagai "counterpart cloud" / arah strategis jangka panjang.
- **Hindari angka biaya/durasi absolut.** Brief eksplisit meminta rentang berlabel "praktik lapangan". Jangan mengutip angka rupiah atau bulan sebagai janji.

## Flags (open factual risk)

- ⚠️ **Angka durasi build (minggu vs bulan).** Sumber memberi framing kualitatif ("quick win" vs "time and cost of design"), bukan angka universal terverifikasi. → Rekomendasi: tulis sebagai rentang praktik lapangan berlabel, tanpa klaim numerik keras. Contoh angka "9–18 bulan (Inmon) vs 3–6 bulan (Kimball)" muncul di sumber sekunder (Medium/Vizule) — **jangan** dikutip sebagai fakta pasti; boleh disebut "beberapa praktisi melaporkan..." bila perlu, atau dihilangkan.
- ⚠️ **Penamaan & posisi SAP Datasphere.** Nama "Datasphere" (eks Data Warehouse Cloud) benar per Maret 2023, tetapi SAP juga memperkenalkan payung **SAP Business Data Cloud** (2025) di mana Datasphere diposisikan. → Rekomendasi: sebut "SAP Datasphere" sebagai produk data-warehouse cloud saat ini; jika menyinggung Business Data Cloud, frasakan hati-hati sebagai konteks yang lebih luas, jangan klaim detail yang tak diverifikasi di sini.
- ⚠️ **"Datasphere menggantikan BW/4HANA".** Nuansa: Datasphere = counterpart cloud & arah strategis; BW/4HANA tetap didukung hingga 2040 untuk on-prem. → Rekomendasi: jangan tulis penggantian mutlak; gunakan "hybrid" / "counterpart cloud".
- ⚠️ **Klaim fitur SAP spesifik di luar dossier.** Jangan menambah kapabilitas Datasphere/BW yang tidak tercantum di sini (mis. angka performa, batas volume). → Rekomendasi: batasi pada fakta yang sudah diverifikasi (spaces, federasi default, LSA++ opsional, hybrid, 2040).
- ⚠️ **Statistik pasar Indonesia.** Tidak ada angka adopsi data-warehouse Indonesia yang terverifikasi dari BPS/Komdigi untuk topik ini; hanya konteks kualitatif "data silo diakui sebagai tantangan". → Rekomendasi: gunakan sebagai latar, jangan sajikan angka pasar yang tidak bersumber.

## Definition snippet draft (40–60 words)

> **Data mart** adalah subset penyimpanan data yang berfokus pada satu subjek atau departemen—misalnya penjualan atau keuangan—sedangkan **enterprise data warehouse (EDW)** menyatukan data seluruh perusahaan lintas divisi menjadi satu sumber kebenaran. Perbedaannya bukan sekadar ukuran, melainkan cakupan dan urutan bangun: mart bisa berdiri dulu, lalu tumbuh menjadi warehouse penuh. *(52 kata; definisi selaras AWS.)*
