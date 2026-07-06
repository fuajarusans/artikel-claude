---
brief_id: "iaas-untuk-sap-c01"
researcher_run_date: "2026-06-17"
sources_cited: 18
flags: 5
---

# Research Dossier: Apa Itu IaaS dan Mengapa Enterprise Memilihnya untuk Hosting SAP

## TL;DR for the writer

- **IaaS adalah fondasi tempat SAP berjalan di cloud**: hyperscaler (AWS, Azure, GCP) menyediakan compute/storage/network virtual; perusahaan atau mitra SI mengelola OS, database HANA, dan aplikasi SAP di atasnya — inilah *shared responsibility model* yang harus dijelaskan dengan tepat.
- **Ketiga hyperscaler utama sudah SAP-certified**: AWS (EC2), Microsoft Azure, dan Google Cloud semuanya tercantum di SAP Certified & Supported HANA Hardware Directory sebagai platform IaaS yang divalidasi untuk beban kerja SAP HANA produksi — ini klaim kuat yang bisa ditulis langsung dengan sumber SAP.
- **Instance non-certified = non-production only**: AWS secara eksplisit menyatakan bahwa instance non-certified hanya untuk beban non-produksi (sesuai SAP Note 2271345); implikasi dukungan harus diframing hati-hati (lihat Flags).
- **RISE with SAP berbeda secara mendasar dari self-managed IaaS**: di RISE, SAP menjadi *single point of contact* dan mengelola infrastruktur, OS, HANA, serta aplikasi S/4HANA — ini bukan IaaS model; ini managed subscription. Tiga model operasional (self-managed IaaS, partner-managed IaaS, RISE) harus dijelaskan sebagai spektrum.
- **Pasar cloud Indonesia tumbuh kuat**: USD 2,46 miliar (2025) → USD 2,81 miliar (2026) → USD 5,5 miliar (2031), CAGR 14,32% (Mordor Intelligence, 2025) — ini konteks yang memperkuat urgensi topik.

---

## Core facts (verified)

> **Claim 1**: IaaS (Infrastructure as a Service) adalah model layanan cloud yang menyediakan sumber daya infrastruktur dasar — server virtual, penyimpanan, dan jaringan — melalui internet dengan skema bayar sesuai pemakaian.
> **Number/specific**: Penyedia mengelola hardware fisik, virtualisasi, storage, dan jaringan; pelanggan mengelola OS, middleware, runtime, aplikasi, dan data.
> **Source**: Google Cloud, "PaaS vs IaaS vs SaaS: What's the difference?" — https://cloud.google.com/learn/paas-vs-iaas-vs-saas (diakses 2026-06-17); dikonfirmasi juga oleh AWS — https://aws.amazon.com/what-is/iaas/ (diakses 2026-06-17)
> **Confidence**: high

---

> **Claim 2**: AWS, Microsoft Azure, dan Google Cloud adalah tiga penyedia IaaS publik (hyperscaler) terkemuka tempat SAP umum dihosting.
> **Number/specific**: Ketiganya — bersama Alibaba Cloud, IBM Cloud, Huawei Cloud, dan Open Telekom Cloud — terdaftar secara resmi di halaman SAP and Hyperscalers milik SAP Support.
> **Source**: SAP Support, "SAP and Hyperscalers" — https://support.sap.com/en/offerings-programs/ccoe/sap-hyperscalers.html (diakses 2026-06-17)
> **Confidence**: high

---

> **Claim 3**: AWS, Microsoft Azure, dan Google Cloud ketiganya telah mendapatkan sertifikasi dari SAP untuk menjalankan beban kerja SAP HANA (OLTP dan OLAP) dalam lingkungan produksi.
> **Number/specific**: AWS: beberapa generasi instance EC2 (r5, r6i, r7i, r8i, x1, x8i, dan seri u-*) terdaftar di AWS SAP HANA Certified Instances. Google Cloud: machine type family M1, M2, M3, M4, N1, N2, C3, C4, X4 tersertifikasi. Direktori terpusat: SAP Certified & Supported HANA Hardware Directory.
> **Source**: AWS General SAP Guide, "SAP HANA certified and non-certified instances" — https://docs.aws.amazon.com/sap/latest/general/sap-hana-aws-ec2.html (diakses 2026-06-17); Google Cloud Docs, "Certifications for SAP HANA on Google Cloud" — https://docs.cloud.google.com/sap/docs/certifications-sap-hana (diakses 2026-06-17); SAP Certified & Supported HANA Hardware Directory — https://www.sap.com/dmc/exp/2014-09-02-hana-hardware/enEN/index.html (diakses 2026-06-17)
> **Confidence**: high

---

> **Claim 4**: Instance EC2 yang tidak tersertifikasi SAP hanya boleh digunakan untuk beban kerja non-produksi (development/test), bukan produksi.
> **Number/specific**: AWS menyatakan secara eksplisit: "The Amazon EC2 instances in the following table are not certified for production usage. You can use them for running non-production workloads. For more information, see SAP Note 2271345 – Cost-Optimized SAP HANA Hardware for Non-Production Usage."
> **Source**: AWS General SAP Guide, "SAP HANA certified and non-certified instances" — https://docs.aws.amazon.com/sap/latest/general/sap-hana-aws-ec2.html (diakses 2026-06-17)
> **Confidence**: high — sumber primer AWS

---

> **Claim 5**: Hyperscaler mensertifikasi konfigurasi hardware (compute, memori, jaringan, storage) agar memenuhi KPI SAP HANA; delta certification tersedia untuk perubahan komponen tunggal.
> **Number/specific**: SAP memperkenalkan "delta certifications for IaaS offerings" sehingga mitra cloud yang sudah punya instance tersertifikasi hanya perlu subset pengujian jika mengubah satu komponen (OS, tipe CPU, memori, atau storage).
> **Source**: SAP news.sap.com, "Infrastructure Certification Update: Improved Quality Assurance for SAP Customers" — https://news.sap.com/2020/01/infrastructure-certification-improved-quality-assurance/ (diakses 2026-06-17); SAP Community, "SAP HANA Hardware Directory — Overview & FAQ" — https://community.sap.com/t5/additional-blog-posts-by-sap/sap-hana-hardware-directory-overview-faq/ba-p/13568505
> **Confidence**: high

---

> **Claim 6**: SAP HANA Hardware Directory mencantumkan 550+ hardware tersertifikasi SAP dan 950+ solusi total (certified + supported) mencakup Appliances, Enterprise Storage, IaaS Platforms, dan HCI Solutions.
> **Number/specific**: 950+ solusi total, 550+ dengan sertifikasi penuh SAP.
> **Source**: SAP Community blog, "SAP HANA Hardware Directory — Overview & FAQ" — https://community.sap.com/t5/additional-blog-posts-by-sap/sap-hana-hardware-directory-overview-faq/ba-p/13568505 (diakses 2026-06-17)
> **Confidence**: medium — angka ini dari blog SAP Community yang mengutip direktori; angka aktual di direktori dapat berubah seiring waktu. Framing sebagai "ratusan konfigurasi" lebih aman jika tidak ingin menyebut angka pasti.

---

> **Claim 7**: Pada model IaaS, AWS mengelola hardware fisik, jaringan, dan virtualisasi ("security of the cloud"); pelanggan mengelola OS tamu (termasuk patching), aplikasi, database, dan konfigurasi firewall ("security in the cloud").
> **Number/specific**: "The customer assumes responsibility and management of the guest operating system (including updates and security patches), other associated application software as well as the configuration of the AWS-provided security group firewall." — AWS Shared Responsibility Model.
> **Source**: AWS, "Shared Responsibility Model" — https://aws.amazon.com/compliance/shared-responsibility-model/ (diakses 2026-06-17)
> **Confidence**: high

---

> **Claim 8**: Dalam konteks SAP di Azure (IaaS), pelanggan bertanggung jawab atas OS, database, dan lapisan aplikasi SAP — sama seperti di AWS.
> **Number/specific**: "Security is a shared responsibility between Microsoft and you as a customer where your customer specific security controls need to be applied to the operating system, database, and the SAP application layer." (SAP on Azure Architecture blog, Microsoft Azure)
> **Source**: Microsoft Azure Blog, "SAP on Azure Architecture — Designing for security" — https://azure.microsoft.com/en-us/blog/sap-on-azure-architecture-designing-for-security/ (diakses 2026-06-17)
> **Confidence**: high

---

> **Claim 9**: RISE with SAP adalah paket berlangganan terkelola di mana SAP bertindak sebagai *single point of contact* dan mengelola infrastruktur, OS, database SAP HANA, dan lapisan aplikasi S/4HANA Cloud Private Edition.
> **Number/specific**: "SAP manages the infrastructure, operating system, database, and application layer." (AWS docs, RISE Shared Responsibility). "SAP delivers and manages the software, support, infrastructure, and technical services under one Service Level Agreement (SLA)." (SAP managed-cloud-services page).
> **Source**: AWS Docs, "Shared Responsibility — RISE" — https://docs.aws.amazon.com/sap/latest/general/rise-observability-shared-responsibility.html (diakses 2026-06-17); SAP Community FAQ "RISE with SAP: FAQ's and Myths" — https://community.sap.com/t5/enterprise-resource-planning-blog-posts-by-members/rise-with-sap-faq-s-and-myths/ba-p/13568849 (diakses 2026-06-17)
> **Confidence**: high

---

> **Claim 10**: Pelanggan RISE with SAP dapat memilih hyperscaler pilihan (AWS, Azure, Google Cloud) dan SAP bertanggung jawab atas keseluruhan SLA, operasi cloud, dan dukungan teknis — tanpa kontrak terpisah dengan hyperscaler.
> **Number/specific**: "Customers can deploy cloud solutions from SAP in their preferred hyperscaler infrastructure with no additional contracts." (SAP managed-cloud-services)
> **Source**: SAP, "RISE with SAP | Cloud Operations" (SEA) — https://www.sap.com/sea/products/erp/rise/managed-cloud-services.html (diakses via search result summary; halaman mengembalikan 403, dikonfirmasi lewat kutipan dari hasil search SAP Community dan AWS docs, 2026-06-17)
> **Confidence**: high (dikonfirmasi dari 3 sumber independen yang mengutip konten SAP resmi)

---

> **Claim 11**: Pasar cloud Indonesia bernilai USD 2,46 miliar pada 2025, diproyeksikan mencapai USD 2,81 miliar pada 2026, dan USD 5,5 miliar pada 2031 — CAGR 14,32% (2026–2031).
> **Number/specific**: SaaS memimpin segmen layanan dengan 44,62% pangsa; public cloud mendominasi dengan 66,05%; large enterprises memegang 72,05% pasar. BFSI menyumbang 27,32% pasar.
> **Source**: Mordor Intelligence, "Indonesia Cloud Market Size & Share Outlook to 2031" — https://www.mordorintelligence.com/industry-reports/indonesia-cloud-market (diakses 2026-06-17)
> **Confidence**: medium — Mordor Intelligence adalah firma riset komersial. Angka ini dikonsistensikan di beberapa sumber derivatif, tetapi laporan aslinya di-paywall. Atribusikan secara eksplisit: "menurut Mordor Intelligence (2025)..." Jangan menyajikannya sebagai angka pasti tanpa atribusi.

---

> **Claim 12**: SAP S/4HANA mengharuskan SAP HANA sebagai database karena aplikasinya dirancang ulang dari dasar untuk memanfaatkan arsitektur in-memory HANA — memungkinkan pemrosesan OLTP dan OLAP secara bersamaan.
> **Number/specific**: "In the name SAP S/4HANA, the S stands for both Suite and Simplified, and the 4 stands for fourth generation and in addition for the need to use SAP HANA as a platform." SAP menulis ulang seluruh kode ERP dengan HANA sebagai fondasi, menghilangkan tabel indeks dan agregat dari struktur data.
> **Source**: SAP Community, "SAP HANA and S/4HANA — a simple guide" — https://community.sap.com/t5/enterprise-resource-planning-blog-posts-by-members/sap-hana-and-s-4hana-a-simple-guide/ba-p/13448746 (diakses 2026-06-17)
> **Confidence**: high

---

> **Claim 13**: Pada model IaaS, biaya infrastruktur berpindah dari CapEx (pembelian server/hardware di muka) ke OpEx (bayar sesuai pemakaian bulanan/per jam) — sehingga tidak ada investasi modal besar di muka.
> **Number/specific**: "Spend that was previously allocated to CAPEX is now redeployed to OPEX, which is optimal from a cashflow timing and balance sheet flexibility perspective." (Microsoft Azure blog)
> **Source**: Microsoft Azure Blog, "Preparing for what's next: Financial considerations for cloud migration" — https://azure.microsoft.com/en-us/blog/preparing-for-what-s-next-financial-considerations-for-cloud-migration/ (diakses via search result summary, 2026-06-17)
> **Confidence**: high

---

> **Claim 14**: SAP BTP (Business Technology Platform) kini tersedia untuk dibeli melalui marketplace AWS, Azure, dan Google Cloud di Amerika Serikat — memperdalam ekosistem SAP-hyperscaler.
> **Number/specific**: Pengumuman ini muncul di SAP Community Blog (2024–2025), menandai kedalaman kolaborasi antara SAP dan tiga hyperscaler utama.
> **Source**: SAP Community Blog, "SAP BTP now available on Microsoft Azure, AWS, and Google Cloud Marketplaces" — https://community.sap.com/t5/technology-blog-posts-by-sap/sap-btp-now-available-on-microsoft-azure-aws-and-google-cloud-marketplaces/ba-p/14187864 (diakses 2026-06-17)
> **Confidence**: high — catatan: ini relevan sebagai detail ekosistem, bukan klaim inti artikel; gunakan ringan sebagai bukti kedalaman kemitraan SAP-hyperscaler.

---

> **Claim 15 (Soltius — internal knowledge base)**: Soltius Indonesia adalah SAP Platinum Partner melalui keanggotaan United VARs, diakui sebagai Best Cloud Partner dan Best RISE Partner (2021), dengan layanan Cloud solution dan Migration service yang mencakup implementasi SAP di atas hyperscaler (AWS, Azure, GCP).
> **Source**: knowledge_base/company_profile.md (pre-approved Soltius facts)
> **Confidence**: high — verified-by-default per pipeline rules

---

> **Claim 16**: SAP HANA merupakan database in-memory kolumnar — data disimpan di RAM, bukan disk — sehingga mendukung kecepatan query analitik dan transaksional secara bersamaan.
> **Number/specific**: "Retrieval from memory is much faster than from a disk or SSD, resulting in split-second response times." SAP HANA menggabungkan OLTP dan OLAP dalam satu sistem.
> **Source**: SAP Community, "Illustrating the Need for In-Memory Technology" (learning.sap.com) dan SAP Community blog "SAP HANA and S/4HANA — a simple guide" — https://community.sap.com/t5/enterprise-resource-planning-blog-posts-by-members/sap-hana-and-s-4hana-a-simple-guide/ba-p/13448746 (diakses 2026-06-17)
> **Confidence**: high

---

> **Claim 17**: Pada RISE with SAP, upgrade OS, database HANA, dan versi S/4HANA dilakukan oleh tim SAP (ECS — Enterprise Cloud Services), dengan jadwal upgrade disepakati bersama antara SAP dan pelanggan.
> **Number/specific**: "With RISE and having your SAP Landscape managed by SAP, it is SAP team (ECS) responsibility to do OS, DB and even S/4HANA version upgrade." (SAP Community)
> **Source**: SAP Community, "What is SAP RISE? Technical Architect Perspective" — https://community.sap.com/t5/technology-blog-posts-by-members/what-is-sap-rise-technical-architect-perspective-to-abap-migrations-options/ba-p/14029880 (diakses 2026-06-17)
> **Confidence**: high

---

> **Claim 18**: Pasar digital transformation Indonesia bernilai USD 24,37 miliar (2025), dengan cloud dan edge computing memimpin pada 28,07% pangsa segmen teknologi. Large enterprises menguasai 60,96% pasar ini.
> **Number/specific**: CAGR digital transformation Indonesia 19,11% (2025–2031) menurut proyeksi Mordor Intelligence. Government's Digital Indonesia 2025 framework dan Komdigi mempercepat adopsi.
> **Source**: Mordor Intelligence, "Indonesia Digital Transformation Market Forecasts to 2031" — https://www.mordorintelligence.com/industry-reports/indonesia-digital-transformation-market (diakses 2026-06-17)
> **Confidence**: medium — sama dengan Claim 11; atribusikan ke Mordor Intelligence.

---

## Solution focus + Soltius anchor

> Keyword "iaas untuk sap" tidak ada di product_matrix.md (topik baru/conditional). Mapping diturunkan dari brief + product_matrix universal rules + research.

| Apa yang diajarkan (SAP/partner tech) | Fakta yang harus dinyatakan akurat | Di mana dalam artikel | Soltius service/credential untuk anchor CTA |
|---|---|---|---|
| IaaS / model layanan cloud (IaaS, PaaS, SaaS) | Tabel pembagian tanggung jawab per lapisan (hardware → data); definisi 40–60 kata; contoh penyedia: AWS, Azure, GCP | H2 #1 (definisi), H2 #2 (tabel perbandingan) | Tidak disebutkan di bagian ini |
| SAP-certified infrastructure / SAP HANA Hardware Directory | Ketiga hyperscaler (AWS/Azure/GCP) tersertifikasi SAP untuk SAP HANA produksi; instance non-certified = non-production only (SAP Note 2271345) | H2 #3 (SAP bisa di IaaS) | Tidak disebutkan di bagian ini |
| Shared responsibility model untuk SAP di IaaS | Hyperscaler: hardware + jaringan + virtualisasi; pelanggan/SI: OS + HANA + aplikasi SAP | H2 #4 (siapa mengelola apa) | Mid-article aside ringan: mitra implementasi membantu menanggung beban lapisan teknis ini |
| Tiga model operasi SAP di cloud: self-managed IaaS, partner-managed IaaS, RISE with SAP | Self-managed = BYOL, kontrol penuh, beban penuh; RISE = SAP sebagai SPOC, mengelola infra/OS/HANA/upgrade; partner-managed = SI mengelola lapisan OS ke atas | H2 #5 (kapan pilih IaaS, kapan tidak) | **Soltius anchor utama**: "Soltius mengimplementasikan dan mendukung SAP di atas hyperscaler (AWS, Azure, Google Cloud) — dari pemilihan model hosting hingga operasional pasca go-live." — placement: closing CTA |
| CapEx → OpEx shift | IaaS mengubah pengeluaran hardware dari modal (CapEx) ke operasional (OpEx/bayar-pakai) | H2 #1 atau #5 | Tidak disebutkan |
| RISE with SAP | SAP = SPOC; mengelola infra/OS/HANA/upgrade; pelanggan pilih hyperscaler; tanpa kontrak terpisah | H2 #5 sebagai alternatif di spektrum | Tersebut 1× sebagai pembanding, bukan fokus |

**Soltius self-mention count target**: maksimal 3 — (1) mid-article aside di H2 #5: 1 kalimat ringan tentang peran mitra SI; (2) closing CTA: anchor Cloud + Migration + Best RISE/Cloud Partner award; (3) opsional satu lagi di lead/intro jika dibutuhkan untuk authority signal. Jangan melebihi 3.

**Framing wajib**: Soltius *mengimplementasikan dan mendukung* SAP di atas hyperscaler — bukan membangun cloud/IaaS, bukan memiliki AWS/Azure/GCP.

---

## Authoritative external sources (untuk penulis, siap di-link)

1. **SAP Support Portal, "SAP and Hyperscalers"** (diakses 2026-06-17) — https://support.sap.com/en/offerings-programs/ccoe/sap-hyperscalers.html — *backs*: AWS, Azure, dan GCP adalah mitra IaaS SAP yang diakui secara resmi; daftar hyperscaler yang disertifikasi SAP.

2. **AWS General SAP Guides, "SAP HANA certified and non-certified instances"** (diakses 2026-06-17) — https://docs.aws.amazon.com/sap/latest/general/sap-hana-aws-ec2.html — *backs*: daftar lengkap instance EC2 tersertifikasi untuk produksi SAP HANA; non-certified = non-production only; SAP Note 2271345.

3. **Google Cloud Documentation, "Certifications for SAP HANA on Google Cloud"** (diakses 2026-06-17) — https://docs.cloud.google.com/sap/docs/certifications-sap-hana — *backs*: machine type families tersertifikasi GCP untuk SAP HANA (M1–M4, N1, N2, C3, C4, X4); OS yang didukung (RHEL, SLES).

4. **Mordor Intelligence, "Indonesia Cloud Market Size & Share Outlook to 2031"** (2025) — https://www.mordorintelligence.com/industry-reports/indonesia-cloud-market — *backs*: USD 2,46B (2025) → USD 5,5B (2031); CAGR 14,32%; segmentasi SaaS/PaaS/IaaS dan large enterprise share.

5. **AWS, "Shared Responsibility Model"** (diakses 2026-06-17) — https://aws.amazon.com/compliance/shared-responsibility-model/ — *backs*: definisi otoritatif model tanggung jawab bersama; AWS kelola hardware/virtualisasi, pelanggan kelola OS/aplikasi/data.

---

## FAQ Q&As (7 item, Bahasa Indonesia, siap dipoles penulis)

### Apa itu IaaS (Infrastructure as a Service)?
IaaS adalah model layanan cloud yang menyediakan sumber daya infrastruktur dasar — server virtual, penyimpanan, dan jaringan — melalui internet dengan skema bayar sesuai pemakaian. Penyedia cloud mengelola perangkat keras fisik, virtualisasi, dan fasilitas; sementara pengguna mengelola sistem operasi, aplikasi, dan data. Contoh penyedia IaaS terkemuka: Amazon Web Services (AWS), Microsoft Azure, dan Google Cloud.

### Apa perbedaan IaaS, PaaS, dan SaaS?
Ketiganya berbeda di *sejauh mana* penyedia mengelola tumpukan teknologi. Di IaaS, Anda mengelola OS hingga aplikasi — fleksibel, tetapi beban operasional penuh. Di PaaS, penyedia mengelola OS dan runtime; Anda hanya fokus pada kode aplikasi. Di SaaS, penyedia mengelola segalanya — aplikasi siap pakai, seperti Microsoft 365. Makin ke kanan spektrum, makin sedikit yang Anda kelola, tetapi makin terbatas pula kendali Anda.

### Apakah SAP bisa berjalan di AWS, Azure, atau Google Cloud?
Ya. Ketiga hyperscaler tersebut tersertifikasi secara resmi oleh SAP untuk menjalankan beban kerja SAP HANA dalam lingkungan produksi, dan terdaftar di SAP Certified & Supported HANA Hardware Directory. AWS, Azure, dan Google Cloud masing-masing menyediakan tipe instans atau machine type khusus yang telah divalidasi agar memenuhi Key Performance Indicator (KPI) SAP HANA — meliputi spesifikasi compute, memori, jaringan, dan storage.

### Saat SAP dihosting di IaaS, siapa yang mengelola sistem operasi dan database HANA-nya?
Pada model self-managed IaaS, perusahaan (atau mitra implementasi/SI) bertanggung jawab penuh atas OS, patching, database SAP HANA, dan lapisan aplikasi SAP. Hyperscaler hanya mengelola hardware fisik, jaringan, dan virtualisasi. Ini berbeda dari RISE with SAP, di mana SAP sendiri mengelola keempat lapisan tersebut sebagai single point of contact — termasuk upgrade OS, HANA, dan S/4HANA.

### Apa bedanya menghosting SAP di IaaS sendiri dengan RISE with SAP?
Hosting SAP di IaaS (self-managed) berarti perusahaan — atau mitra SI — mengelola sendiri OS, database HANA, dan aplikasi SAP. RISE with SAP adalah paket berlangganan terkelola di mana SAP bertindak sebagai single point of contact, mengelola seluruh lapisan teknis di atas infrastruktur hyperscaler pilihan pelanggan, tanpa kontrak terpisah. IaaS menawarkan kontrol lebih besar; RISE menawarkan beban operasional yang jauh lebih ringan.

### Apakah hosting SAP di cloud aman?
Secara umum, ya — dengan syarat menggunakan konfigurasi yang tersertifikasi SAP dan menerapkan shared responsibility model secara konsisten. Pada IaaS, hyperscaler bertanggung jawab atas keamanan infrastruktur fisik dan virtualisasi; perusahaan bertanggung jawab atas OS, database, dan aplikasi SAP. Penggunaan instans non-certified pada AWS, misalnya, hanya diperbolehkan untuk lingkungan non-produksi (sesuai SAP Note 2271345), bukan untuk sistem live.

### Kapan perusahaan sebaiknya memilih IaaS untuk SAP, dan kapan belum tentu tepat?
IaaS tepat jika perusahaan memiliki tim Basis yang kuat, ingin mempertahankan lisensi SAP yang sudah ada (BYOL), membutuhkan kustomisasi konfigurasi mendalam, atau memerlukan kontrol data residency di region tertentu. Namun jika tim IT terbatas dan tidak ingin menanggung beban patching OS/HANA/upgrade sendiri, model partner-managed atau RISE with SAP bisa lebih tepat — karena di IaaS, tanggung jawab operasional lapisan atas sepenuhnya ada di tangan Anda.

---

## Data tables for the writer

### Tabel 1: Shared Responsibility — Siapa Mengelola Apa (IaaS vs RISE with SAP)

| Lapisan | Self-Managed IaaS (AWS/Azure/GCP) | RISE with SAP |
|---|---|---|
| Hardware fisik & fasilitas | Hyperscaler | SAP (via hyperscaler) |
| Jaringan & virtualisasi | Hyperscaler | SAP (via hyperscaler) |
| Sistem operasi (OS) | **Pelanggan/SI** | SAP |
| Database SAP HANA | **Pelanggan/SI** | SAP |
| Lapisan aplikasi SAP (S/4HANA) | **Pelanggan/SI** | SAP |
| Data bisnis & akses user | Pelanggan | Pelanggan |
| Upgrade & patching OS | **Pelanggan/SI** | SAP (jadwal disepakati) |
| Single point of contact | Tidak (masing-masing vendor) | SAP |

*Sumber: AWS Shared Responsibility Model (aws.amazon.com); AWS Docs RISE Shared Responsibility (docs.aws.amazon.com/sap/); SAP Community FAQ RISE with SAP (community.sap.com) — diakses 2026-06-17*

---

### Tabel 2: IaaS vs PaaS vs SaaS — Siapa Mengelola Apa

| Lapisan | IaaS | PaaS | SaaS |
|---|---|---|---|
| Hardware & fasilitas | Penyedia | Penyedia | Penyedia |
| Jaringan & virtualisasi | Penyedia | Penyedia | Penyedia |
| Storage | Penyedia | Penyedia | Penyedia |
| Sistem operasi | **Pelanggan** | Penyedia | Penyedia |
| Runtime & middleware | **Pelanggan** | Penyedia | Penyedia |
| Aplikasi | **Pelanggan** | **Pelanggan** | Penyedia |
| Data & akses | **Pelanggan** | **Pelanggan** | **Pelanggan*** |

*\*Pelanggan tetap memiliki/mengendalikan data; penyedia mengelola infrastruktur di baliknya.*
*Sumber: Google Cloud, "PaaS vs IaaS vs SaaS" (cloud.google.com/learn/paas-vs-iaas-vs-saas) — diakses 2026-06-17*

---

### Tabel 3: Tiga Model Operasi SAP di Cloud

| Aspek | Self-Managed IaaS | Partner-Managed IaaS | RISE with SAP |
|---|---|---|---|
| Infrastruktur | Hyperscaler (sewa langsung) | Hyperscaler (via SI) | Hyperscaler (via SAP) |
| OS & patching | Tim internal / Basis | Mitra SI | SAP (ECS) |
| Database HANA | Tim internal / Basis | Mitra SI | SAP (ECS) |
| Upgrade S/4HANA | Tim internal / Basis | Mitra SI | SAP (ECS, jadwal bersama) |
| Single point of contact | Tidak | SI/mitra | SAP |
| Kontrol & fleksibilitas | Tinggi | Menengah | Terbatas (terstandarisasi) |
| Cocok untuk | Tim Basis kuat, BYOL, kebutuhan kustom tinggi | Tim terbatas, butuh bantuan operasional | Tim IT minimal, mau fokus ke bisnis |

*Sumber: AWS Docs RISE Shared Responsibility; SAP Community "RISE with SAP FAQs and Myths"; SAP learning.sap.com "Describing RISE with SAP" — diakses 2026-06-17*

---

## Edge cases & nuance

- **IaaS bukan solusi "lebih murah" secara otomatis.** Pada IaaS, biaya infrastruktur (OpEx) bisa terlihat lebih rendah dari CapEx on-prem — tetapi biaya SDM untuk mengelola OS, HANA, dan SAP tetap ada. Total Cost of Ownership bergantung pada ukuran tim Basis dan kompleksitas landscape. Jangan menyatakan "IaaS lebih murah" tanpa kualifikasi.

- **RISE dengan hyperscaler "pilihan pelanggan" — ada batasannya.** Secara teknis, RISE mendukung AWS, Azure, dan GCP. Namun bukan berarti pelanggan bebas memilih *region* atau *konfigurasi* apapun — ada region tertentu yang tersedia, dan konfigurasi distandarisasi oleh SAP. Penulis sebaiknya tidak menyatakan "pilihan hyperscaler tanpa batas" — lebih tepat "hyperscaler utama pilihan pelanggan".

- **SAP S/4HANA Cloud Private vs Public Edition berbeda fundamental.** Private Edition (via RISE) berjalan di infrastruktur dedicated (single-tenant) di atas hyperscaler, masih memungkinkan ABAP custom terbatas. Public Edition adalah SaaS multi-tenant sejati, tidak ada kustomisasi. Dalam konteks artikel IaaS ini, keduanya cukup disebutkan ringan sebagai pembanding posisi di spektrum IaaS-SaaS; jangan mendalam.

- **"Instance non-certified = ditolak dukungan SAP Basis"** — framing perlu hati-hati. Yang terverifikasi secara eksplisit oleh AWS docs adalah: non-certified = non-production only. Implikasi bahwa "SAP Basis Support *akan* menolak" jika menggunakan non-certified instance di produksi adalah logis dan didukung oleh konteks SAP Note 2271345 dan kebijakan sertifikasi SAP, tetapi tidak ada kutipan SAP eksplisit yang menyatakan "kami akan menolak tiket support Anda" — lihat Flag 1 di bawah.

- **SAP BTP di marketplace hyperscaler** adalah perkembangan baru (2024–2025) yang memperdalam ekosistem. Ini konteks tambahan yang baik untuk menunjukkan kedalaman kolaborasi SAP-hyperscaler, tetapi bukan inti topik IaaS. Gunakan dengan hemat.

- **GROW with SAP** (untuk mid-market, cloud Public Edition) adalah alternatif keempat yang tidak disebut dalam brief. Tidak perlu dimasukkan ke artikel ini — artikel sudah cukup kompleks dengan tiga model operasi. Bila disebut, hanya satu kalimat.

---

## Flags (open factual risk)

- **Flag 1 — Implikasi dukungan instance non-certified**: Brief menyatakan "instance non-certified berisiko ditolak SAP Basis Support." Yang terkonfirmasi secara eksplisit: AWS docs menyatakan non-certified = non-production only per SAP Note 2271345. Tidak ada kutipan SAP yang secara eksplisit berbunyi "kami menolak tiket support untuk instans non-certified di produksi." Rekomendasi: framing aman adalah **"instans non-certified hanya diperbolehkan untuk beban non-produksi (development/testing), bukan produksi — sesuai SAP Note 2271345"** dan **"menggunakan instans non-certified di lingkungan produksi SAP berisiko melampaui batas dukungan yang dijamin SAP."** Hindari klaim "SAP *pasti* menolak tiket support" tanpa sumber eksplisit.

- **Flag 2 — Angka Mordor Intelligence di paywall**: Statistik pasar cloud Indonesia (USD 2,46B / 14,32% CAGR) konsisten di beberapa kutipan derivatif, tetapi laporan aslinya ada di belakang paywall. Rekomendasi: selalu atribusikan eksplisit — "menurut Mordor Intelligence (2025)" — dan jangan menyajikannya sebagai fakta mandiri. Bila butuh sumber free-access, cari IDC atau laporan Kominfo/Komdigi sebagai alternatif; tidak ditemukan angka spesifik Indonesia dari IDC dalam penelitian ini.

- **Flag 3 — Jumlah hyperscaler yang disebutkan**: SAP resmi mendaftar 7 hyperscaler/IaaS provider (Alibaba Cloud, AWS, GCP, Huawei, IBM, Microsoft Azure, Open Telekom Cloud). Brief hanya menyebut tiga (AWS, Azure, GCP). Ini pilihan editorial yang valid untuk audiens Indonesia (tiga terbesar), tetapi pastikan penulis tidak menulis "hanya ada tiga hyperscaler untuk SAP" — formulasi yang tepat: "tiga hyperscaler yang paling umum digunakan untuk SAP di Indonesia" atau "hyperscaler utama".

- **Flag 4 — Nama produk SAP berubah**: "SAP S/4HANA Cloud, Private Edition" adalah nama resmi saat ini (2025) untuk produk yang sebelumnya disebut berbeda-beda. "RISE with SAP" adalah program/paket; "SAP S/4HANA Cloud, Private Edition" adalah produk perangkat lunak yang dibundel di dalamnya. Penulis harus tidak menyamakan keduanya: RISE adalah paket/program komersial; S/4HANA Cloud Private Edition adalah produk ERP-nya. Konfirmasi nama saat penulisan artikel jika ada keraguan, karena SAP sering merevisi nomenklatur.

- **Flag 5 — RISE with SAP vs self-managed IaaS dalam konteks BYOL**: Brief menyebut "BYOL" (Bring Your Own License) sebagai keunggulan self-managed IaaS. Ini akurat secara konsep, tetapi detail lisensi SAP di IaaS bersifat kompleks (bergantung pada tipe lisensi, apakah legacy atau subscription, dan apakah ada License Mobility). Penulis sebaiknya menyebut BYOL sebagai konsep umum ("perusahaan dapat memanfaatkan lisensi SAP yang sudah ada") tanpa masuk ke mekanisme spesifik — itu terlalu teknis dan bisa berubah per versi lisensi.

---

## Definition snippet draft (40–60 words)

> **IaaS (Infrastructure as a Service)** adalah model layanan cloud yang menyediakan sumber daya infrastruktur dasar — server virtual, penyimpanan, dan jaringan — melalui internet dengan skema bayar sesuai pemakaian. Penyedia mengelola perangkat keras fisik, sementara pelanggan mengelola sistem operasi, aplikasi, dan data di atasnya. Contoh penyedia IaaS utama: Amazon Web Services (AWS), Microsoft Azure, dan Google Cloud.

*(54 kata — dalam rentang 40–60 kata; entitas eksplisit; formulasi encyclopedia-style; siap dikutip AI Overview)*

---

## Notes for image-planner

- **Concept 1 — Tabel visual "Siapa Mengelola Apa"**: Diagram tumpukan (stack diagram) vertikal atau tabel berwarna yang menampilkan lapisan infrastruktur dari bawah ke atas: Hardware → Jaringan → Virtualisasi → OS → Database (HANA) → Aplikasi (SAP) → Data. Tiga kolom: Self-Managed IaaS, Partner-Managed, RISE with SAP. Lapisan yang dikelola penyedia/SAP diberi warna berbeda dari lapisan yang dikelola pelanggan. Format infografis yang bisa di-screenshot dan dibagikan di internal IT team.

- **Concept 2 — Diagram Ekosistem Hyperscaler + SAP**: Ilustrasi arsitektur sederhana yang menunjukkan hubungan: [Physical Data Center] → [Hyperscaler (AWS/Azure/GCP)] → [Virtual Machine / Instance] → [OS (Linux)] → [SAP HANA Database] → [SAP S/4HANA]. Di sisi kanan, label "Dikelola Hyperscaler" dan "Dikelola Pelanggan/SI" dengan garis batas shared responsibility yang jelas. Gaya diagram arsitektur teknis minimalis, warna korporat.

- **Concept 3 — Spektrum model operasi SAP di cloud**: Timeline atau kontinum horizontal dari kiri ke kanan: [On-Premise] → [Self-Managed IaaS] → [Partner-Managed IaaS] → [RISE with SAP]. Setiap titik diberi label singkat tentang siapa yang mengelola, dan di bawahnya label "Kontrol Pelanggan" (tinggi di kiri, rendah di kanan) dan "Beban Operasional Internal" (berat di kiri, ringan di kanan). Membantu pembaca memahami spektrum keputusan dengan cepat tanpa membaca semua teks.
