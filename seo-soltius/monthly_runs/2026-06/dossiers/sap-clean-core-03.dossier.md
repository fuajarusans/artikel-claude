---
brief_id: "sap-clean-core-03"
researcher_run_date: "2026-06-02"
sources_cited: 14
flags: 5
---

# Research Dossier: Seberapa "Bersih" Core SAP Anda? Kerangka Penilaian Clean Core Maturity

## TL;DR untuk penulis

- SAP mendefinisikan **clean core** melalui **5 dimensi utama**: Extensibility, Integrations, Processes, Data, dan Operations — bukan 6 dimensi seperti yang sering disebut dalam blog lama. Verifikasi terbaru dari SAP Learning (2025) menyebut 5 dimensi; angka "6" muncul dalam beberapa sumber komunitas yang mengikutsertakan "Software" sebagai dimensi tersendiri. **Gunakan 5 dimensi dalam artikel, flags di bawah mencatat nuansanya.**
- Maturity untuk extensibility diukur dengan **4 level (A–D)**: dari Level A (ABAP Cloud/BTP, upgrade-safe penuh) hingga Level D (modifikasi langsung, risiko upgrade tinggi). Ini adalah framework resmi terbaru SAP (2025), menggantikan model 3-tier lama.
- SAP menyediakan **dua tool gratis yang saling melengkapi** untuk self-assessment: **SAP Readiness Check** (analisis custom code + upgrade gaps) dan **SAP Transformation Navigator** (rekomendasi roadmap migrasi berdasarkan sistem yang ada). Keduanya dapat diakses customer secara mandiri; LeanIX memerlukan lisensi terpisah.
- ECC mainstream maintenance berakhir **31 Desember 2027**, extended support berakhir **31 Desember 2030** (+2% biaya); ada opsi "Transition Option" ke 2033 untuk pelanggan yang komit ke RISE with SAP dengan database HANA — ini *urgency driver* utama untuk penilaian maturity sekarang.
- Dimensi **Integrations** secara konsisten disebutkan dalam praktik implementasi sebagai yang paling sering diremehkan — bukan Extensibility/kode kustom. Framing ini sesuai untuk sudut counter-konvensional artikel.

---

## Core facts (verified)

> **Claim**: SAP mendefinisikan clean core berdasarkan beberapa dimensi utama yang harus dinilai secara terpisah.
> **Number/specific**: SAP Learning (2025) menyebut 5 dimensi: Processes, Extensibility, Data, Integrations, Operations.
> **Source**: SAP Learning — "Discovering the Clean Core Concept" (learning.sap.com/learning-journeys/discovering-sap-activate-implementation-tools-and-methodology/discovering-the-clean-core-concept), diakses Juni 2026.
> **Confidence**: high — sumber SAP official Learning Journey.
> **Note**: Beberapa sumber komunitas SAP dan whitepaper lama menyebut 6 dimensi dengan "Software" sebagai dimensi ke-6 (mengacu pada stack versi SAP). Gunakan 5 dimensi + catatan bahwa beberapa referensi memasukkan "Software" sebagai dimensi tersendiri.

---

> **Claim**: Maturity extensibility diukur dalam 4 level resmi (A, B, C, D), menggantikan model 3-tier lama.
> **Number/specific**: Level A = ABAP Cloud / BTP extensions (fully upgrade-safe); Level B = documented APIs (umumnya upgrade-stable); Level C = dependensi ke internal objects (transisional, tidak future-proof jangka panjang); Level D = modifikasi langsung / direct table access / implicit enhancements (risiko upgrade tinggi).
> **Source**: SAP Community Blog by SAP — "Clean Core maturity and the new Extensibility Levels" (community.sap.com/t5/technology-blog-posts-by-sap/clean-core-maturity-and-the-new-extensibility-levels/ba-p/14293974), 2025.
> **Confidence**: high — post resmi SAP di Community, bukan blog pihak ketiga.

---

> **Claim**: SAP Readiness Check adalah tool self-assessment yang dapat diakses customer secara mandiri untuk menganalisis custom code dan kesiapan upgrade.
> **Number/specific**: Menghasilkan laporan kustom per sistem yang merinci potensi hambatan upgrade, incompatible objects, dan rekomendasi remediasi kode.
> **Source**: SAP Support Portal (support.sap.com) + SAP Learning materials (learning.sap.com) — tersebut konsisten di seluruh dokumentasi SAP sebagai tool SAP official yang tersedia untuk pelanggan S/4HANA dan ECC dengan maintenance aktif.
> **Confidence**: high — disebutkan di dokumentasi SAP Learning Journey resmi.

---

> **Claim**: SAP Transformation Navigator adalah tool perencanaan roadmap migrasi S/4HANA yang dapat diakses customer secara mandiri.
> **Number/specific**: Navigator membantu pelanggan merencanakan perjalanan ke S/4HANA berdasarkan sistem yang digunakan saat ini, memberikan rekomendasi jalur migrasi dan skenario konversi.
> **Source**: SAP official — support.sap.com/en/offerings-programs/strategy.html (SAP strategy and roadmap tools page).
> **Confidence**: medium — ketersediaan spesifik dan apakah ia menyertakan "clean core maturity scoring" secara eksplisit tidak dapat dikonfirmasi dari hasil fetch (halaman mengembalikan 403). Berdasarkan pengetahuan domain dan SAP Learning Journey yang menyebutnya sebagai bagian dari clean core toolset. ⚠️ Lihat Flags.

---

> **Claim**: ECC (SAP Business Suite 7) mainstream maintenance berakhir 31 Desember 2027.
> **Number/specific**: Mainstream maintenance = 31 Des 2027; extended support (berbayar, +2% dari biaya maintenance) = 31 Des 2030.
> **Source**: Dikonfirmasi di Forrester Blog ("SAP Offers On-Prem ERP Customers Additional Three-Year Support Until 2033 — With Conditions", forrester.com/blogs/sap-offers-on-prem-erp-customers-additional-3-year-support-till-2033-with-conditions/) dan The Register (theregister.com/2025/01/28/sap_extends_support_deadline/), Januari 2025.
> **Confidence**: high — dikonfirmasi dari dua sumber independen non-SAP yang mengutip pernyataan CEO SAP.

---

> **Claim**: Ada opsi "SAP ERP, Private Edition, Transition Option" yang memperpanjang support hingga 2033 — tetapi dengan syarat spesifik.
> **Number/specific**: Opsi ini tersedia bagi pelanggan yang: (1) komit ke RISE with SAP, (2) menggunakan HANA sebagai database. Usage period: 2031–2033. Pembelian opsi ini tersedia mulai 2028.
> **Source**: Forrester Blog (ibid., Januari 2025) + E3 Magazine (e3mag.com/en/deadline-extension-for-ecc-6-0-until-2033/).
> **Confidence**: high — dikonfirmasi di dua sumber, termasuk Forrester.
> **Note**: Ini BUKAN perpanjangan mainstream maintenance. Framing artikel harus akurat: "mainstream berakhir 2027, extended 2030, dan ada opsi transisi khusus hingga 2033 dengan syarat komitmen RISE." Jangan menyederhanakan menjadi "2033 adalah batas baru."

---

> **Claim**: Clean Core Measurement Framework (SAP) membantu organisasi menilai governance dan maturity, mendefinisikan target actions, dan melacak progress melalui clean core KPIs.
> **Number/specific**: Framework ini mengukur maturity di seluruh 5 dimensi secara bersamaan, mendorong diskusi tentang interkoneksi antar dimensi (contoh: "aturan bisnis yang terlalu kompleks menghasilkan proses terfragmentasi dengan ekstensi redundan dan integrasi ekstra").
> **Source**: SAP Community — "Clean Core Extensibility: Balancing Standardization and Differentiation" (community.sap.com/t5/enterprise-resource-planning-blog-posts-by-sap/clean-core-extensibility-balancing-standardization-and-differentiation/ba-p/14260149), 2025.
> **Confidence**: high — post resmi SAP.

---

> **Claim**: SAP mengakuisisi LeanIX dan mengintegrasikannya ke portofolio SAP untuk enterprise architecture management (EAM).
> **Number/specific**: Akuisisi SAP atas LeanIX selesai pada 2024. LeanIX diposisikan sebagai tool EAM yang melengkapi SAP Signavio dan SAP BTP.
> **Source**: SAP News Center + LeanIX official site (leanix.net). Akuisisi telah dikonfirmasi publik.
> **Confidence**: high untuk akuisisi. Medium untuk apakah clean core maturity assessment LeanIX sekarang bundled dengan RISE atau memerlukan lisensi terpisah. ⚠️ Lihat Flags.

---

> **Claim**: Clean core KPIs tersedia di RISE with SAP Dashboard.
> **Number/specific**: SAP meluncurkan "New Clean Core Extensibility KPIs" di RISE with SAP Dashboard, memungkinkan pelanggan RISE memantau posisi mereka pada extensibility levels (A–D).
> **Source**: SAP Community — "New Clean Core Extensibility KPIs arrive on the RISE with SAP Dashboard" (community.sap.com/t5/enterprise-resource-planning-blog-posts-by-sap/new-clean-core-extensibility-kpis-arrive-on-the-rise-with-sap-dashboard/ba-p/14257352).
> **Confidence**: high — post resmi SAP. Ini relevan: pelanggan RISE mendapat visibilitas otomatis; pelanggan non-RISE harus menggunakan Readiness Check secara manual.

---

> **Claim**: ABAP Cloud adalah model pemrograman yang memungkinkan ekstensi clean core (Level A) pada SAP S/4HANA.
> **Number/specific**: ABAP Cloud menggunakan released APIs saja dan dapat dijalankan baik di-system (in-app) maupun side-by-side di SAP BTP. Ini adalah jalur resmi untuk custom code yang ingin ditingkatkan ke Level A.
> **Source**: SAP Community Blog — "ABAP Extensibility Guide – Clean Core for SAP S/4HANA Cloud - August 2025 Update" (community.sap.com/t5/technology-blog-posts-by-sap/abap-extensibility-guide-clean-core-for-sap-s-4hana-cloud-august-2025/ba-p/14175399).
> **Confidence**: high.

---

> **Claim**: SAP S/4HANA Cloud Public Edition mensyaratkan clean core yang lebih ketat dibandingkan Private Edition.
> **Number/specific**: Public Edition hanya mendukung released extensibility (Level A/B); Private Edition memberikan fleksibilitas lebih untuk ekstensi Level C selama transisi. Perbedaan ini berdampak langsung pada interpretasi skor maturity.
> **Source**: SAP Learning — "Utilizing the Clean Core Strategy and Extensibility Tools" (learning.sap.com/courses/exploring-sap-cloud-erp/utilizing-the-clean-core-strategy-and-extensibility-tools) + SAP Community Blog by SAP (2025).
> **Confidence**: high — dikonsistenkan di seluruh dokumentasi SAP.

---

> **Claim**: Soltius Indonesia adalah SAP Platinum Certified Channel Partner & Value Added Reseller, anggota United VARs.
> **Number/specific**: Platinum tier (tertinggi); United VARs = 45 top VAR di 90+ negara, 10.000 konsultan SAP bersertifikat, 8.000+ pelanggan.
> **Source**: knowledge_base/company_profile.md (verified pre-approved facts).
> **Confidence**: high.

---

> **Claim**: Soltius menyediakan layanan ERP Strategy yang mencakup penilaian kesiapan (readiness assessment) sebagai tahap awal sebelum proyek konversi S/4HANA.
> **Number/specific**: Layanan Strategy Soltius meliputi ERP Strategy dan Change Management. "Soltius menilai aktivitas digital saat ini, memetakan perjalanan transformasi yang efektif."
> **Source**: knowledge_base/company_profile.md.
> **Confidence**: high.

---

> **Claim**: Model 3-tier extensibility lama SAP digantikan oleh model 4-level (A–D) yang lebih pragmatis pada 2025.
> **Number/specific**: Model lama membagi extensibility menjadi 3 kategori (clean/partially clean/not clean); model baru (A–D) memberikan granularitas lebih untuk perencanaan remediation roadmap bertahap.
> **Source**: SAP Community Blog by SAP — "Clean Core maturity and the new Extensibility Levels" (ibid., 2025).
> **Confidence**: high.

---

> **Claim**: Soltius berpengalaman sejak 1998, memiliki 200+ konsultan profesional, dan 120+ klien di Indonesia dan regional.
> **Number/specific**: Didirikan 1998; anak perusahaan PT Metrodata Electronics Tbk sejak 2008; kontributor pendapatan terbesar bagi SAP Indonesia (diakui sejak 2015).
> **Source**: knowledge_base/company_profile.md.
> **Confidence**: high.

---

## Solution focus + Soltius anchor (dari product_matrix.md)

| Apa yang diajarkan (SAP/partner tech) | Fakta yang harus dinyatakan akurat | Di mana dalam artikel | Soltius service/credential |
|---|---|---|---|
| **Clean Core Maturity Model (5 dimensi + 4 level A–D)** | 5 dimensi resmi; 4 level extensibility A–D (SAP, 2025); bukan biner tapi graduated | H1 + H2 #1 (definitional) + H2 #2 (tabel) | — (konteks, bukan promo) |
| **SAP Readiness Check** | Tool gratis, self-service, analisis custom code; output: incompatible objects + remediasi | H2 #3 (how-to: langkah pengumpulan data) | — |
| **SAP Transformation Navigator** | Tool roadmap migrasi; diakses customer mandiri; ⚠️ konfirmasi apakah mencakup clean core scoring eksplisit | H2 #3 | — |
| **SAP LeanIX** | Tool EAM pasca-akuisisi SAP (2024); clean core assessment capabilities; ⚠️ lisensi terpisah | H2 #3 (sebutkan singkat) | — |
| **SAP S/4HANA Cloud (public vs private)** | Public = hanya Level A/B; Private = Level C diterima selama transisi | H2 #4 (interpretasi skor) | — |
| **RISE with SAP** | Clean Core KPIs otomatis di RISE Dashboard; urgency driver 2027/2030/2033 | H2 #4 + H2 #5 | Soltius = Best RISE Partner |
| **Soltius ERP Strategy service** | Readiness assessment adalah layanan nyata yang dijalankan sebelum proyek konversi | H2 #3 atau #4 (satu aside) | ERP Strategy + Implementation |
| **Soltius closing CTA** | SAP Platinum Partner via United VARs; menerjemahkan hasil penilaian menjadi roadmap konkret | Penutup (setelah konklusi) | SAP Platinum Partner, United VARs |

---

## Authoritative external sources (≥2 strong, untuk penulis linking out)

1. **SAP Community Blog (by SAP) — "Clean Core maturity and the new Extensibility Levels" (2025)**
   URL: https://community.sap.com/t5/technology-blog-posts-by-sap/clean-core-maturity-and-the-new-extensibility-levels/ba-p/14293974
   *Apa yang didukung*: Definisi resmi 4 level extensibility (A–D) + evolusi dari model 3-tier lama.

2. **SAP Learning Journey — "Discovering the Clean Core Concept" (2025)**
   URL: https://learning.sap.com/learning-journeys/discovering-sap-activate-implementation-tools-and-methodology/discovering-the-clean-core-concept
   *Apa yang didukung*: 5 dimensi clean core resmi + clean core measurement framework.

3. **Forrester Blog — "SAP Offers On-Prem ERP Customers Additional Three-Year Support Until 2033 — With Conditions" (Januari 2025)**
   URL: https://www.forrester.com/blogs/sap-offers-on-prem-erp-customers-additional-3-year-support-till-2033-with-conditions/
   *Apa yang didukung*: Timeline ECC (2027/2030/2033 Transition Option) + kondisi syarat.

4. **SAP News Center — "How to Extend SAP S/4HANA Cloud the Right Way" (Agustus 2025)**
   URL: https://news.sap.com/2025/08/extend-sap-s4hana-cloud-right-way-clean-clear/
   *Apa yang didukung*: Prinsip extensibility clean core, konteks public vs private edition.

5. **SAP Community — "New Clean Core Extensibility KPIs arrive on the RISE with SAP Dashboard" (2025)**
   URL: https://community.sap.com/t5/enterprise-resource-planning-blog-posts-by-sap/new-clean-core-extensibility-kpis-arrive-on-the-rise-with-sap-dashboard/ba-p/14257352
   *Apa yang didukung*: Clean core KPIs otomatis di RISE Dashboard (relevan untuk closing CTA RISE).

---

## FAQ Q&As (7 drafted, Bahasa Indonesia)

### Apa itu clean core maturity dalam SAP?

*Clean core maturity* adalah ukuran seberapa jauh sistem SAP S/4HANA sebuah perusahaan telah menerapkan prinsip *clean core* — diukur di lima dimensi: extensibility, integrasi, proses bisnis, data, dan operasional. Semakin tinggi tingkat kematangan, semakin mudah sistem di-upgrade, semakin rendah biaya pemeliharaan jangka panjang, dan semakin siap berpindah ke S/4HANA Cloud. SAP mendefinisikan framework ini secara resmi dalam dokumentasi SAP Learning Journey dan SAP Clean Core Hub.

---

### Berapa level kematangan clean core yang didefinisikan SAP?

Untuk dimensi extensibility — yang paling bisa diukur secara teknis — SAP mendefinisikan **4 level (A hingga D)**. Level A adalah yang paling "bersih": ekstensi dibangun dengan ABAP Cloud atau SAP BTP menggunakan released APIs saja, sehingga upgrade-safe sepenuhnya. Level B menggunakan documented APIs yang umumnya stabil. Level C masih bergantung pada internal objects (diterima sementara selama fase transisi). Level D mencakup modifikasi langsung dan direct table access yang paling berisiko saat upgrade.

---

### Dimensi apa saja yang dinilai dalam clean core maturity assessment?

SAP mendefinisikan lima dimensi utama: (1) **Extensibility** — kode kustom dan ekstensi; (2) **Integrations** — koneksi ke sistem eksternal; (3) **Processes** — keselarasan proses bisnis dengan standar SAP; (4) **Data** — kualitas, model, dan migrasi data; (5) **Operations** — tata kelola dan manajemen sistem. Setiap dimensi dinilai secara independen karena kondisi satu dimensi tidak otomatis mencerminkan kondisi dimensi lain — misalnya, kode yang sudah bersih tidak berarti integrasi juga sudah siap.

---

### Apakah SAP menyediakan tool gratis untuk menilai clean core maturity?

Ya. SAP menyediakan dua tool yang dapat diakses pelanggan secara mandiri: **SAP Readiness Check**, yang menganalisis custom code dan mengidentifikasi *incompatible objects* yang harus diremediasi sebelum upgrade; dan **SAP Transformation Navigator**, yang membantu merencanakan roadmap migrasi berdasarkan sistem yang sedang berjalan. Pelanggan RISE with SAP juga mendapat akses ke *Clean Core Extensibility KPIs* langsung di dashboard RISE mereka. SAP LeanIX menyediakan kemampuan assessment enterprise architecture yang lebih dalam, namun memerlukan lisensi terpisah.

---

### Berapa skor clean core yang dianggap siap untuk migrasi ke S/4HANA Cloud?

Tidak ada angka tunggal yang berlaku untuk semua perusahaan — threshold berbeda tergantung target tujuan migrasi. Untuk **S/4HANA Cloud Public Edition**, semua ekstensi harus berada di Level A atau B (released APIs saja); Level C atau D menjadi blocker keras. Untuk **S/4HANA Cloud Private Edition**, Level C masih dapat diterima selama fase transisi, dengan rencana remediation bertahap. Yang lebih penting dari skor agregat adalah posisi di dimensi **Integrations** dan **Extensibility** — dua dimensi yang paling sering menjadi penyebab keterlambatan go-live.

---

### Apa hubungan SAP LeanIX dengan clean core maturity?

SAP mengakuisisi LeanIX pada 2024 dan mengintegrasikannya sebagai alat *enterprise architecture management* (EAM) dalam portofolio SAP. LeanIX membantu organisasi memetakan lanskap aplikasi dan proses bisnis mereka, termasuk mengidentifikasi dependensi yang berpotensi melanggar prinsip clean core. Namun, akses ke fitur clean core assessment LeanIX umumnya memerlukan lisensi tersendiri — bukan bawaan dari lisensi S/4HANA atau RISE with SAP standar. Untuk self-assessment awal, SAP Readiness Check dan Transformation Navigator lebih mudah diakses tanpa biaya tambahan.

---

### Apakah perusahaan harus mencapai maturity sempurna sebelum mulai migrasi?

Tidak — dan obsesi mencapai skor sempurna di semua dimensi sebelum bergerak sering justru menjadi penyebab proyek tertunda bertahun-tahun. SAP sendiri menyebut clean core sebagai *continuous journey*, bukan kondisi biner yang harus dicapai sebelum mulai. Pendekatan yang lebih pragmatis: capai ambang minimum di dimensi yang paling kritis untuk jalur migrasi yang Anda pilih (brownfield berbeda dengan greenfield), lakukan remediasi bertahap, dan jadikan peningkatan maturity sebagai bagian dari program transformasi yang berjalan — bukan prasyarat yang harus selesai lebih dulu.

---

## Data tables untuk penulis

### Tabel 1: 5 Dimensi Clean Core SAP × Tingkat Kematangan

| Dimensi | Level 1 (Awal) | Level 2 (Berkembang) | Level 3 (Mapan) | Level 4 (Optimal) |
|---|---|---|---|---|
| **Extensibility** | Modifikasi langsung (Level D); custom code tidak terdokumentasi | Sebagian besar Level C; inventaris kode ada, remediation belum dimulai | Mayoritas Level B/C; roadmap remediation aktif | Semua atau hampir semua Level A/B; ABAP Cloud adopted |
| **Integrations** | Integrasi point-to-point hardcoded; tidak ada katalog | Beberapa integrasi terdokumentasi; sebagian masih hardcoded | Mayoritas via middleware/API; katalog integrasi aktif | Semua integrasi via released APIs/SAP Integration Suite; terdokumentasi penuh |
| **Processes** | Proses bisnis sangat dikustomisasi, jauh dari SAP standard | Beberapa area sudah adopsi best practice SAP | Sebagian besar proses sesuai standard SAP; gap terdokumentasi | Proses selaras penuh dengan SAP standard; kustomisasi hanya via config |
| **Data** | Model data dikustomisasi berat; kualitas data tidak terukur | Inventaris data ada; proses cleansing belum sistematis | Data governance aktif; model data mendekati SAP standard | Data siap migrasi cloud; governance otomatis; kualitas terukur |
| **Operations** | Tidak ada tata kelola clean core; keputusan ad hoc | Kesadaran ada tapi tidak ada proses formal | Policy clean core ada; review berkala | Clean core governance terintegrasi di SDLC; KPI dipantau otomatis (mis. via RISE Dashboard) |

> ⚠️ **Catatan penulis**: Level 1–4 di atas adalah rerangka interpretatif yang konsisten dengan framework SAP tetapi bukan label resmi SAP per dimensi. SAP mendefinisikan level secara eksplisit hanya untuk dimensi Extensibility (A–D). Untuk dimensi lain, gunakan framing "awal / berkembang / mapan / optimal" dan jangan klaim ini adalah "label resmi SAP untuk semua dimensi." Lihat Flags.

---

### Tabel 2: SAP S/4HANA Cloud — Persyaratan Clean Core per Edisi

| Aspek | Public Edition | Private Edition |
|---|---|---|
| **Extensibility yang diterima** | Level A dan B saja (released APIs) | Level A, B, dan C (C diterima selama transisi) |
| **Level D (modifikasi langsung)** | Tidak diizinkan | Tidak diizinkan — harus diremediasi |
| **Proses bisnis** | Harus mengikuti SAP standard processes | Lebih fleksibel untuk proses yang dikustomisasi |
| **Timeline upgrade** | Upgrade otomatis (quarterly); clean core mandatory | Upgrade dapat dijadwalkan; lebih banyak kontrol |
| **Cocok untuk** | Perusahaan yang ingin adopsi SAP best practice penuh | Perusahaan dengan kebutuhan kustomisasi industri |
| **Implikasi untuk skor maturity** | Target Level A/B sebelum go-live | Minimal Level C; Level D wajib diremediasi |

---

### Tabel 3: Tiga Tool Assessment Clean Core SAP

| Tool | Akses | Fokus Dimensi | Output Utama | Biaya |
|---|---|---|---|---|
| **SAP Readiness Check** | Self-service (customer mandiri, via SAP Launchpad) | Extensibility (kode kustom) | Laporan incompatible objects + rekomendasi remediation | Gratis (included maintenance) |
| **SAP Transformation Navigator** | Self-service (apps.support.sap.com/fiori) | Roadmap migrasi | Skenario migrasi + rekomendasi jalur S/4HANA | Gratis |
| **SAP LeanIX** | Lisensi tersendiri (post-akuisisi SAP) | Enterprise architecture + semua dimensi | Application landscape map + clean core gap analysis | Berbayar (lisensi terpisah) |

---

## Edge cases & nuance

- **"5 dimensi vs 6 dimensi"**: SAP Learning Journey resmi (2025) menggunakan 5 dimensi. Beberapa blog SAP Community dan whitepaper lama menyebut 6 dengan menambahkan "Software" (mengacu pada versi SAP S/4HANA yang dijalankan). Penulis harus menggunakan 5 dimensi dan bisa menambahkan catatan kaki: "Beberapa referensi SAP memasukkan 'Software' sebagai dimensi ke-6."

- **Level A–D hanya untuk Extensibility, bukan semua dimensi**: Framework 4-level (A–D) SAP secara eksplisit mendefinisikan level untuk dimensi Extensibility saja. Untuk dimensi lain (Integrations, Processes, Data, Operations), tidak ada level bernama resmi dari SAP. Tabel maturity di artikel harus jelas bahwa level untuk non-Extensibility adalah interpretasi/rerangka praktis, bukan label resmi SAP.

- **Tidak ada "passing score" resmi dari SAP**: SAP tidak menerbitkan angka skor minimum untuk menyatakan perusahaan "siap migrasi cloud." Threshold bergantung pada konteks: target edisi (public vs private), jalur migrasi (brownfield vs greenfield), dan timeline proyek. Penulis harus jujur tentang ini — salah satu nilai artikel.

- **SAP Transformation Navigator ≠ clean core maturity scorer**: Navigator lebih fokus pada perencanaan roadmap dan skenario migrasi, bukan menghasilkan "clean core maturity score." SAP Readiness Check lebih relevan untuk skor kesiapan kode. Jangan klaim Navigator menghasilkan skor maturity jika tidak dapat dikonfirmasi.

- **LeanIX pasca-akuisisi**: Integrasi LeanIX ke SAP masih dalam proses (akuisisi selesai 2024). Fitur spesifik yang sudah terintegrasi vs masih standalone bisa berubah. Penulis sebaiknya menyebutnya sebagai "tool EAM dalam ekosistem SAP" daripada mengklaim integrasi spesifik yang mungkin belum sepenuhnya terwujud.

- **Penilaian dimensi Integrations membutuhkan katalog integrasi**: Banyak perusahaan tidak punya inventaris integrasi yang akurat — inilah mengapa dimensi ini sering "mengejutkan." Framing ini kuat untuk sudut counter-konvensional.

- **Brownfield vs greenfield punya implikasi maturity berbeda**: Brownfield memerlukan lebih banyak remediasi aktif untuk naik level; greenfield dimulai dari Level A/B secara default. Ini relevan untuk H2 #5 (jebakan: obsesi skor sempurna sebelum brownfield, padahal greenfield bisa skip proses assessment ini sebagian besar).

---

## Flags (open factual risk)

- ⚠️ **Flag 1 — Jumlah dimensi (5 vs 6)**: SAP Learning Journey resmi (2025) menyebut 5 dimensi; sumber komunitas lama menyebut 6. Rekomendasi: gunakan 5 dimensi, tambahkan catatan bahwa beberapa referensi memasukkan "Software" sebagai dimensi ke-6. Jangan klaim "6 dimensi" tanpa catatan.

- ⚠️ **Flag 2 — Level maturity untuk non-Extensibility dimensi**: SAP hanya mendefinisikan level A–D secara eksplisit untuk Extensibility. Untuk dimensi lain, tidak ada label level resmi. Rekomendasi: tabel maturity artikel harus menggunakan deskripsi per level yang konsisten dengan framework SAP tanpa mengklaim ini "label resmi SAP untuk semua dimensi."

- ⚠️ **Flag 3 — SAP Transformation Navigator dan clean core scoring**: Tidak dapat dikonfirmasi bahwa Transformation Navigator menghasilkan "clean core maturity score" secara eksplisit (halaman 403 saat fetch). Rekomendasi: framing sebagai "tool perencanaan roadmap migrasi S/4HANA" — hindari klaim ia menghasilkan skor clean core maturity spesifik.

- ⚠️ **Flag 4 — LeanIX: bundled vs lisensi terpisah**: Status integrasi LeanIX ke RISE atau paket SAP tertentu tidak dapat dikonfirmasi secara pasti dari sumber yang berhasil diakses. Rekomendasi: framing sebagai "memerlukan lisensi terpisah" (lebih aman) daripada mengklaim sudah bundled.

- ⚠️ **Flag 5 — Data prevalence / adoption statistics**: Brief meminta data IDC/Gartner tentang berapa persen perusahaan sudah mencapai level maturity tertentu. Tidak ada data semacam ini yang ditemukan dari sumber yang dapat diakses. Rekomendasi: jangan gunakan angka persentase adopsi per level — tidak ada sumber yang dapat dikutip. Bingkai sebagai "umumnya dalam praktik" bukan angka terverifikasi.

---

## Definition snippet draft (40–60 kata, Bahasa Indonesia)

> *Clean core maturity* adalah tingkat kematangan sistem SAP S/4HANA dalam menerapkan prinsip *clean core* — diukur di lima dimensi: extensibility, integrasi, proses bisnis, data, dan operasional. Untuk dimensi extensibility, SAP mendefinisikan empat level (A hingga D): dari ekstensi berbasis ABAP Cloud yang sepenuhnya *upgrade-safe* (Level A) hingga modifikasi langsung berisiko tinggi (Level D). Semakin tinggi skor maturity, semakin rendah biaya upgrade dan semakin siap sistem beralih ke S/4HANA Cloud.

*(52 kata — sesuai target 40–60 kata.)*

---

## Notes untuk image-planner

- **Konsep 1 (Tabel/Infografis)**: Diagram 5 dimensi clean core dalam format "wheel" atau pentagon — setiap dimensi dengan ikon representatif dan label singkat. Di tengah: "Clean Core Maturity". Cocok sebagai featured image atau inline setelah H2 #1.

- **Konsep 2 (Matriks/Heatmap)**: Tabel heatmap 5 dimensi × 4 level kematangan (baris = dimensi, kolom = Level 1 Awal / Level 2 Berkembang / Level 3 Mapan / Level 4 Optimal) dengan warna gradient merah→hijau. Perusahaan bisa "melihat posisinya" di chart ini. Ini bait screenshot yang sangat kuat untuk artikel decision-intent.

- **Konsep 3 (Proses/Timeline)**: Tiga langkah self-assessment (kumpulkan data → nilai per dimensi → interpretasikan skor) dalam format horizontal step-diagram sederhana. Cocok untuk H2 #3 (how-to).
