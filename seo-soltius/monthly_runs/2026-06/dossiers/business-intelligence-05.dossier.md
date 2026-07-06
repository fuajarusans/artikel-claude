---
brief_id: "business-intelligence-05"
researcher_run_date: "2026-06-02"
sources_cited: 14
flags: 5
---

# Research Dossier: 5 Alasan Proyek Business Intelligence Gagal — dan Cara Mencegahnya

## TL;DR for the writer

- Tingkat kegagalan proyek BI dan analytics yang sering dikutip berada di kisaran 70–85%; Gartner menyebut 70–80% untuk BI secara umum, dan 85% untuk big data analytics — gunakan range ini dengan atribusi Gartner, bukan angka pasti tunggal.
- Kegagalan BI hampir selalu multi-dimensional: teknologi bukan sumber utama masalah. Penelitian konsisten menunjukkan faktor manusia (change management, business champion, tujuan kabur) dan kualitas data adalah akar utama.
- ROI BI bisa signifikan bila dieksekusi dengan benar — rata-rata 112% ROI dan payback period 1,6 tahun dalam satu studi — tetapi angka ini tidak otomatis; ia membutuhkan implementasi yang matang.
- SAP Analytics Cloud diposisikan sebagai enabler yang powerful, tetapi tidak menyelesaikan masalah data quality yang buruk atau resistensi organisasi. Framing ini defensible dan original vs. konten kompetitor.
- Soltius anchor: Data and AI Consulting + implementasi — dimulai dengan data readiness assessment, bukan tools selection. Tempatkan di closing + satu aside di poin #1.

---

## Core facts (verified)

> **Claim**: Sebagian besar proyek BI tidak menghasilkan hasil yang diharapkan
> **Number/specific**: Gartner memperkirakan 70–80% proyek BI berakhir gagal; angka lain dari Gartner untuk big data analytics projects menyebut 85% gagal
> **Source**: Gartner (dikutip di Yellowfin BI blog, https://www.yellowfinbi.com/blog/majority-of-business-intelligence-implementations-fail; Designing for Analytics, https://designingforanalytics.com/resources/failure-rates-for-analytics-bi-iot-and-big-data-projects-85-yikes/)
> **Confidence**: medium — angka Gartner 70–80% untuk BI adalah kutipan yang banyak beredar, tapi artikel asli Gartner berbayar/tidak langsung dapat diakses. Gunakan framing: "Menurut Gartner, antara 70–80% proyek BI tidak menghasilkan nilai yang diharapkan" dengan catatan atribusi. Hindari menyebutnya sebagai "gagal total" — kegagalan bisa berarti tidak mencapai ROI target, bukan selalu proyek dihentikan.

> **Claim**: Inisiatif data governance pun menghadapi tingkat kegagalan tinggi
> **Number/specific**: Gartner memprediksi 80% inisiatif data & analytics governance akan gagal pada 2027 karena kurangnya urgensi organisasi yang nyata
> **Source**: Gartner Press Release, "Gartner Predicts 80% of D&A Governance Initiatives Will Fail by 2027," 28 Februari 2024 — https://www.gartner.com/en/newsroom/press-releases/2024-02-28-gartner-predicts-80-percent-of-data-and-analytics-governance-initiatives-will-fail-by-2027-due-to-a-lack-of-a-real-or-manufactured-crisis-
> **Confidence**: high — langsung dari Gartner press release resmi

> **Claim**: Alasan utama kegagalan proyek data platform adalah peta jalan (roadmap) yang tidak jelas
> **Number/specific**: 43% proyek data platform menderita akibat roadmap yang tidak spesifik, menghasilkan infrastruktur yang tidak mendukung tujuan bisnis (Forrester)
> **Source**: Forrester Research, dikutip di Medium/LUMIQ article "Data Platform Project Failure: Key Challenges and Effective Solutions" — https://medium.com/lumiq-tech/data-platform-project-failure-key-challenges-and-effective-solutions-69ae837290c8
> **Confidence**: medium — kutipan dari Forrester melalui artikel pihak ketiga; angka 43% ini perlu atribusi hati-hati ("menurut Forrester, dikutip dalam..."). Prinsipnya valid dan bisa dipakai.

> **Claim**: ROI dari implementasi Business Intelligence bisa signifikan bila dilakukan dengan benar
> **Number/specific**: Rata-rata ROI 112% dan payback period 1,6 tahun dari investasi BI (dari sebuah studi industri)
> **Source**: Business Intelligence Statistics 2026, Market.us Scoop — https://scoop.market.us/business-intelligence-statistics/ (mengacu pada studi industri agregat)
> **Confidence**: medium — angka ini berasal dari kompilasi statistik BI, bukan dari laporan primer Gartner/Forrester. Gunakan sebagai indikasi range, bukan angka definitif. Label: "beberapa studi industri menunjukkan rata-rata ROI sekitar 112% dengan payback period ~1,6 tahun."

> **Claim**: Pasar BI dan analytics global terus tumbuh pesat
> **Number/specific**: Pasar global BI dan analytics diperkirakan mencapai US$84,6 miliar pada 2026, tumbuh dengan CAGR 14,7% dari 2021–2026
> **Source**: Market.us BI Statistics 2026 — https://scoop.market.us/business-intelligence-statistics/
> **Confidence**: medium — angka market size bervariasi antar sumber; gunakan sebagai konteks makro, bukan klaim definitif. ⚠️ Lihat flags.

> **Claim**: Proyek BI gagal bukan karena teknologinya — melainkan karena kesiapan data dan manusia
> **Number/specific**: CIO.com mengidentifikasi 4 sebab utama kegagalan BI: kurangnya manajemen perubahan, tujuan bisnis yang tidak jelas, kualitas data yang buruk, dan tidak ada sponsorship eksekutif
> **Source**: CIO.com, "4 reasons most companies fail at business intelligence" — https://www.cio.com/article/230614/4-reasons-most-companies-fail-at-business-intelligence.html
> **Confidence**: medium — artikel ini cukup lama (exact date tidak terverifikasi), tapi temuan ini konsisten dengan riset terbaru. Pakai sebagai validasi pola, bukan sebagai satu-satunya sumber.

> **Claim**: Kurangnya data yang siap (AI-ready) juga menjadi penyebab kegagalan proyek analitik modern
> **Number/specific**: Gartner (Februari 2025): organisasi yang tidak memiliki data AI-ready berisiko mengabaikan 60% proyek AI mereka hingga 2026
> **Source**: Gartner Press Release, "Lack of AI-Ready Data Puts AI Projects at Risk," 26 Februari 2025 — https://www.gartner.com/en/newsroom/press-releases/2025-02-26-lack-of-ai-ready-data-puts-ai-projects-at-risk
> **Confidence**: high — langsung dari Gartner. Relevan karena BI modern semakin bertumpu pada AI/augmented analytics layer; data readiness adalah syarat yang sama.

> **Claim**: Proyek GenAI / analitik modern juga menghadapi pola kegagalan yang sama dengan BI tradisional
> **Number/specific**: Gartner (2024): 5 kesalahan umum yang menyebabkan kegagalan proyek GenAI mencakup tujuan kabur, kurangnya data berkualitas, tidak ada change management, dan kurang dukungan eksekutif
> **Source**: Gartner, "Why Half of GenAI Projects Fail: Avoid These 5 Common Mistakes" — https://www.gartner.com/en/articles/genai-project-failure
> **Confidence**: high — langsung dari Gartner. Pola kegagalan ini analog dengan BI tradisional dan memperkuat narasi artikel.

> **Claim**: SAP Analytics Cloud (SAC) adalah platform BI dan perencanaan terintegrasi dari SAP
> **Number/specific**: SAC menggabungkan BI, augmented analytics, dan planning dalam satu cloud platform yang terintegrasi dengan SAP S/4HANA dan SAP Datasphere
> **Source**: SAP official product page — https://www.sap.com/products/technology-platform/cloud-analytics.html (domain knowledge verified; current naming as of 2026)
> **Confidence**: high — naming SAP Analytics Cloud dan posisinya sebagai platform terintegrasi adalah informasi resmi SAP yang stabil

> **Claim**: SAP Datasphere (sebelumnya SAP Data Warehouse Cloud) adalah lapisan data governance yang dibangun sebelum BI layer
> **Number/specific**: SAP Datasphere menyediakan fabric semantik data yang memungkinkan single source of truth sebelum data dikonsumsi oleh SAC atau tools BI lainnya
> **Source**: SAP official — https://www.sap.com/products/technology-platform/datasphere.html (domain knowledge; product naming confirmed stable per 2025-2026)
> **Confidence**: high — naming SAP Datasphere sudah stabil sejak penggantian nama dari Data Warehouse Cloud pada 2023

> **Claim**: Perusahaan yang migrasi ke SAP S/4HANA memiliki peluang untuk sekaligus membenahi kualitas data master
> **Number/specific**: Migrasi ke S/4HANA (baik greenfield maupun brownfield) mensyaratkan data migration + data cleansing sebagai fase wajib — ini adalah momentum untuk membenahi master data sebelum BI layer dibangun di atasnya
> **Source**: Domain knowledge SAP S/4HANA migration methodology (ASAP/Activate); konsisten dengan SAP's official Activate Methodology documentation
> **Confidence**: high — ini adalah praktik standar migrasi SAP yang terdokumentasi

> **Claim**: Change management adalah faktor penentu adopsi BI yang sering diabaikan
> **Number/specific**: Dalam konteks proyek digital dan analitik, resistensi pengguna akhir adalah faktor kegagalan nomor 1 menurut berbagai survei proyek IT; adopsi pasca go-live sering drop drastis tanpa program perubahan perilaku yang terstruktur
> **Source**: CIO.com artikel di atas + pola konsisten di Gartner's GenAI failure article; konsisten dengan domain knowledge implementasi BI
> **Confidence**: medium — tidak ada satu angka tunggal yang terverifikasi, tapi pola ini sangat konsisten di berbagai sumber. Label sebagai "pola yang konsisten ditemukan dalam riset implementasi."

> **Claim**: Pendekatan MVP (Minimum Viable Product) untuk BI — satu domain, 3–5 KPI, go-live dalam 8–12 minggu — adalah best practice yang diakui
> **Number/specific**: Timeline 8–12 minggu untuk fase pertama BI dengan scope terbatas adalah patokan lapangan yang umum digunakan; tidak ada satu studi tunggal, tapi konsisten dalam praktik
> **Source**: Domain knowledge / praktik implementasi BI; dikonfirmasi di berbagai panduan implementasi agile BI
> **Confidence**: medium — ini adalah "rule of thumb" lapangan, bukan angka resmi dari Gartner/IDC. Harus di-label sebagai "patokan umum dalam implementasi" bukan "menurut Gartner." ⚠️ Lihat flags.

> **Claim**: Adoption rate >60% pengguna aktif mingguan sebagai indikator proyek BI yang sehat
> **Number/specific**: Threshold 60% adoption rate mingguan sebagai tanda kesehatan BI adalah patokan lapangan (rule of thumb), bukan angka resmi dari penelitian
> **Source**: Domain knowledge / common practice dalam BI program management
> **Confidence**: medium — label sebagai "patokan praktis di lapangan" bukan angka riset. ⚠️ Lihat flags.

> **Claim**: Soltius Indonesia memiliki layanan Data and AI Consulting yang relevan untuk BI assessment dan implementasi
> **Number/specific**: Layanan Data and AI Consulting Soltius mencakup konsultasi data, implementasi analytics, dan AMS pasca go-live; Soltius berpengalaman sejak 1998 dengan 200+ konsultan dan 120+ klien
> **Source**: knowledge_base/company_profile.md — verified
> **Confidence**: high

---

## Solution focus + Soltius anchor (from product_matrix.md)

| Apa yang diajarkan (SAP/partner tech) | Fakta yang perlu dinyatakan dengan akurat | Di mana dalam artikel | Soltius service/credential untuk anchor CTA |
|---|---|---|---|
| SAP Analytics Cloud (SAC) | Platform BI terintegrasi (BI + planning + augmented analytics); cloud-native; integrasi native dengan S/4HANA dan Datasphere. Powerful — tetapi tidak menyelesaikan data quality yang buruk atau resistensi pengguna. | H2 "Masalah Bukan Soal Tools" (H2 #5) | Data and AI Consulting (Analytics solution) |
| SAP Datasphere | Lapisan data governance dan fabric semantik; single source of truth sebelum BI layer. Ini adalah prasyarat teknis yang sering dilewati — penyebab kegagalan #1. | H2 "5 Penyebab Utama" poin #1 (data quality) + cousin link ke `/id/blog/data-warehouse-solutions` | Data Management solution |
| SAP S/4HANA | Migrasi ke S/4HANA adalah momentum terbaik untuk membenahi data master sekaligus — "dua keuntungan satu langkah". | H2 "5 Penyebab Utama" poin #1, solusi — + cousin link ke `/id/blog/migrasi-erp-ke-cloud` | Migration service |

**Reminder**: Soltius mengimplementasikan/mendampingi adopsi SAP — tidak membangun SAP. Max 2–3 self-mentions. Satu aside di poin #1, satu di closing.

---

## Authoritative external sources (untuk writer gunakan sebagai link-out)

1. **Gartner Press Release — "Gartner Predicts 80% of D&A Governance Initiatives Will Fail by 2027" (28 Februari 2024)** — https://www.gartner.com/en/newsroom/press-releases/2024-02-28-gartner-predicts-80-percent-of-data-and-analytics-governance-initiatives-will-fail-by-2027-due-to-a-lack-of-a-real-or-manufactured-crisis- — *mendukung*: tingginya tingkat kegagalan inisiatif data & analytics; pentingnya urgensi organisasi dalam mendorong adopsi

2. **Gartner — "Why Half of GenAI Projects Fail: Avoid These 5 Common Mistakes"** — https://www.gartner.com/en/articles/genai-project-failure — *mendukung*: pola kegagalan analitik modern (tujuan kabur, data tidak siap, tidak ada change management) yang identik dengan kegagalan BI tradisional; Gartner sebagai sumber otoritatif tertinggi untuk topik ini

3. **CIO.com — "4 reasons most companies fail at business intelligence"** — https://www.cio.com/article/230614/4-reasons-most-companies-fail-at-business-intelligence.html — *mendukung*: pola kegagalan BI spesifik (kurang change management, tujuan tidak jelas, data quality, sponsorship eksekutif)

4. **Gartner Press Release — "Lack of AI-Ready Data Puts AI Projects at Risk" (26 Februari 2025)** — https://www.gartner.com/en/newsroom/press-releases/2025-02-26-lack-of-ai-ready-data-puts-ai-projects-at-risk — *mendukung*: data readiness sebagai prasyarat mutlak untuk proyek analitik; relevan untuk framing "selesaikan data dulu, baru bangun BI"

---

## FAQ Q&As (8 drafted, Bahasa Indonesia)

### Berapa persentase proyek Business Intelligence yang gagal?
Menurut Gartner, antara 70–80% proyek Business Intelligence tidak menghasilkan nilai yang diharapkan. Untuk proyek big data analytics yang lebih luas, angka ini bisa mencapai 85%. Namun "gagal" di sini tidak selalu berarti proyek dihentikan — lebih sering berarti dashboard tidak digunakan, data tidak dipercaya pengguna, atau tidak ada perubahan nyata dalam kecepatan pengambilan keputusan setelah go-live.

### Apa penyebab utama proyek BI gagal?
Penyebab paling sering bukan teknologinya — melainkan: (1) data master yang tidak siap dan tidak konsisten sejak sumber, (2) tidak ada *business champion* yang mengawal adopsi dari sisi pengguna bisnis, (3) tujuan yang terlalu abstrak tanpa KPI sukses yang terukur, (4) *scope creep* yang membuat proyek berlarut tanpa go-live, dan (5) tidak ada *change management* yang mengubah cara kerja setelah sistem hidup.

### Berapa lama waktu yang dibutuhkan untuk implementasi Business Intelligence?
Untuk fase pertama yang sehat, implementasi BI dengan *scope* terbatas — satu domain bisnis, 3–5 KPI utama — seharusnya bisa go-live dalam 8–12 minggu. Proyek yang masuk bulan ke-8 tanpa satu pun dashboard live adalah tanda awal *scope creep*. Implementasi yang kompleks (multi-modul, multi-sistem sumber) tentu lebih panjang, tapi selalu dimulai dari fase pertama yang terbatas dan terukur.

### Bagaimana cara mengukur ROI dari investasi Business Intelligence?
ROI BI tidak bisa hanya diukur dari penghematan biaya. Tiga *leading indicator* yang lebih awal terdeteksi: (1) *adoption rate* — berapa persen pengguna yang aktif mengakses dashboard setiap minggu (target sehat: di atas 60%), (2) *data trust index* — apakah manajemen merujuk ke dashboard dalam rapat pengambilan keputusan, dan (3) *time-to-insight* — berapa hari dari pertanyaan bisnis ke jawaban berbasis data, dibandingkan sebelum BI.

### Apa itu change management dalam konteks Business Intelligence?
*Change management* dalam BI bukan sekadar pelatihan teknis cara menggunakan dashboard. Ini adalah proses sistematis untuk mengubah kebiasaan kerja — dari pengambilan keputusan berbasis laporan Excel manual menjadi pengambilan keputusan berbasis data real-time. Konkretnya: mengintegrasikan BI ke dalam agenda rapat rutin, menetapkan *data champion* per unit bisnis, dan memberikan coaching kepada manajer tentang cara membaca dan mempertanyakan data.

### Bagaimana memastikan kualitas data sebelum membangun BI?
Sebelum memilih platform BI, lakukan *data readiness assessment*: audit konsistensi data master di semua sistem sumber (ERP, CRM, SCM), identifikasi duplikasi dan inkonsistensi, dan tetapkan siapa yang bertanggung jawab atas akurasi data per domain. Membangun BI di atas data yang kotor hanya mempercepat ketidakpercayaan pengguna. Perusahaan yang sedang migrasi ke SAP S/4HANA punya momentum baik untuk membenahi data master sekaligus di fase *cutover*.

### Apakah SAP Analytics Cloud memerlukan persiapan data khusus?
Ya. SAP Analytics Cloud (SAC) adalah platform yang powerful, tapi hasilnya hanya sebaik data yang masuk ke dalamnya. SAC paling efektif bila data sudah dikelola dengan baik di lapisan di bawahnya — misalnya SAP Datasphere sebagai *single source of truth*, atau langsung dari SAP S/4HANA yang datanya sudah distandarisasi. Memilih SAC tanpa menyelesaikan masalah data master lebih dulu adalah urutan yang terbalik.

### Apa tanda-tanda proyek BI perlu diselamatkan?
Lima tanda peringatan yang bisa dideteksi lebih awal: (1) tim analis menghabiskan lebih banyak waktu untuk *cleansing* data daripada menganalisis; (2) proyek sudah memasuki bulan ke-8 tapi belum ada yang go-live; (3) *user acceptance testing* didominasi oleh IT, bukan *business users*; (4) tidak ada KPI sukses yang tertulis di dokumen proyek; (5) manajer masih meminta laporan Excel manual dari tim padahal dashboard sudah tersedia.

---

## Data tables for the writer

### BI yang Berhasil vs BI yang Gagal: Perbedaan di Fase Perencanaan

| Dimensi | Proyek BI yang Berhasil | Proyek BI yang Gagal |
|---|---|---|
| **Inisiator** | Business + IT bersama; ada *executive sponsor* dari C-suite | Hanya IT yang menginisiasi; bisnis tidak terlibat sejak awal |
| **Definisi tujuan** | 3–5 pertanyaan bisnis spesifik yang harus terjawab di akhir fase 1 | "Kami mau jadi *data-driven*" — aspirasi, bukan tujuan terukur |
| **Data assessment** | Dilakukan sebelum memilih *tools* — audit kualitas data master | Langsung pilih platform, masalah data ditemukan saat implementasi |
| **Pendekatan** | MVP/fase: satu domain, 3–5 KPI, go-live 8–12 minggu | Big-bang: semua data dari semua sistem sekaligus |
| **Change management** | Training + coaching + integrasi ke rapat rutin sejak awal | Training teknis saja di akhir proyek, setelah go-live |
| **Ukuran sukses** | *Adoption rate* >60% aktif mingguan; *time-to-insight* terukur | Sukses = sistem hidup (*go-live*); adopsi tidak dipantau |
| **Post-go-live** | Ada program dukungan dan iterasi; KPI dimonitor rutin | Proyek ditutup saat go-live; tidak ada mekanisme tindak lanjut |

### Penyebab Kegagalan BI dan Solusi Pencegahannya

| # | Penyebab | Warning Sign | Solusi Pencegahan |
|---|---|---|---|
| 1 | Data master tidak siap BI | Analis lebih banyak *cleansing* daripada menganalisis | *Data readiness assessment* sebelum proyek BI dimulai |
| 2 | Tidak ada *business champion* | UAT didominasi IT; *business users* tidak terlibat | Identifikasi *data champion* per unit bisnis sejak fase perencanaan |
| 3 | Tujuan bisnis tidak spesifik | Tidak ada KPI sukses tertulis di dokumen proyek | Definisikan 3–5 pertanyaan bisnis spesifik yang harus terjawab |
| 4 | *Scope creep* dan perfeksionisme | Proyek masuk bulan ke-8, belum ada yang go-live | Pendekatan MVP: satu domain, 3–5 KPI, target go-live 8–12 minggu |
| 5 | Tidak ada *change management* | Manajer masih minta laporan Excel meskipun dashboard sudah ada | Integrasikan BI ke rapat rutin; ubah kebiasaan kerja, bukan hanya sistem |

---

## Edge cases & nuance

- **"Gagal" itu spektrum, bukan biner**: banyak proyek BI secara teknis "hidup" tapi gagal dalam hal nilai bisnis. Artikel perlu mendefinisikan "gagal" secara eksplisit di awal: tidak mencapai adoption target, data tidak dipercaya, atau tidak ada perubahan nyata dalam kecepatan keputusan.
- **Kegagalan bisa parsial**: BI bisa berhasil di satu departemen (mis. finance) tapi gagal di yang lain (mis. operations) dalam perusahaan yang sama. Ini adalah realita yang sering dihadapi implementer.
- **Urutan prioritas penyebab berbeda per organisasi**: di perusahaan dengan data master yang sangat buruk, penyebab #1 (data quality) mendominasi. Di perusahaan dengan data OK tapi organisasi hierarkis dan resistif, penyebab #5 (change management) yang dominan. Artikel bisa menambahkan catatan ini.
- **SAP Analytics Cloud bukan satu-satunya pilihan**: artikel ini memposisikan SAC sebagai contoh tools BI enterprise, tapi pasar juga punya Tableau, Power BI, Qlik. Karena artikel bersifat vendor-neutral dalam pendekatan kegagalan, tidak perlu mengklaim SAC unggul — cukup sebut SAC sebagai contoh platform enterprise-grade yang diimplementasikan di ekosistem SAP.
- **Data governance bukan proyek IT semata**: ini perlu disebutkan sebagai nuance — data governance yang efektif membutuhkan komitmen bisnis (data owner per domain), bukan hanya solusi teknis. Ini relevan untuk menghindari kesan bahwa "beli Datasphere = selesai masalah data quality."
- **ROI BI sulit diukur langsung**: manfaat terbesar BI sering bersifat *soft* (keputusan lebih cepat, lebih percaya diri) yang sulit di-monetize secara langsung. Ini adalah nuance yang jujur dan membedakan artikel ini dari konten vendor yang hanya menyebut ROI positif.

---

## Flags (open factual risk)

- ⚠️ **Angka kegagalan 70–80% BI (Gartner)**: angka ini banyak beredar tapi sumber Gartner asli ada di balik paywall. Konfirmasi ini adalah kutipan yang valid dari Gartner, bukan angka yang diinvensikan. Rekomendasi: gunakan framing "antara 70–80% menurut estimasi Gartner" dengan link ke sumber sekunder yang mengutip Gartner (yellowfinbi.com atau designingforanalytics.com), sambil mencantumkan catatan bahwa angka ini berdasarkan berbagai survei industri. JANGAN menyebutnya sebagai "fakta resmi Gartner 2026" karena tahun laporan aslinya tidak terverifikasi.

- ⚠️ **ROI 112% dan payback 1,6 tahun**: angka ini dari Market.us, bukan laporan primer Gartner/Forrester/IDC. Rekomendasi: gunakan sebagai konteks ("beberapa studi industri menunjukkan...") bukan sebagai klaim definitif. Jangan jadikan headline statistik artikel ini.

- ⚠️ **Angka market size BI US$84,6 miliar 2026**: figure ini dari kompilasi pasar yang bervariasi di berbagai sumber; angka persisnya tidak terverifikasi dari IDC/Gartner primer. Rekomendasi: omit atau gunakan sebagai konteks ringan saja ("pasar BI global tumbuh pesat dengan estimasi puluhan miliar dolar") — tidak krusial untuk argumen kegagalan artikel ini.

- ⚠️ **Adoption rate >60% sebagai threshold sehat**: ini adalah rule of thumb lapangan, bukan angka dari penelitian resmi. Rekomendasi: label eksplisit sebagai "patokan praktis yang umum digunakan dalam program BI" — bukan "menurut Gartner" atau "menurut IDC."

- ⚠️ **Timeline MVP 8–12 minggu**: patokan praktis, bukan angka dari studi peer-reviewed. Label sebagai "dalam praktik implementasi BI, fase pertama yang sehat biasanya..." — ini adalah *first-party experience claim* yang Soltius bisa miliki dari pengalaman implementasinya sendiri.

---

## Definition snippet draft (40–60 words, Bahasa Indonesia)

> *Business Intelligence* (BI) adalah kemampuan organisasi untuk mengubah data mentah menjadi informasi yang dapat mendukung pengambilan keputusan bisnis secara tepat waktu dan akurat. Menurut Gartner, antara 70–80% proyek BI tidak menghasilkan nilai yang diharapkan — bukan karena teknologinya buruk, melainkan karena kualitas data, keterlibatan pengguna bisnis, dan manajemen perubahan yang kurang memadai.

---

## Notes for image-planner

- **Konsep 1 — Diagram "5 Penyebab Kegagalan BI"**: visual fishbone atau numbered infographic horizontal yang menampilkan 5 penyebab utama (data tidak siap, tidak ada business champion, tujuan kabur, scope creep, tidak ada change management) dengan ikon per penyebab dan warning sign-nya. Warna: merah/oranye untuk penyebab, hijau untuk solusi. Format: satu-halaman infographic yang bisa di-screenshot dan dibagikan.

- **Konsep 2 — Tabel perbandingan "BI Berhasil vs BI Gagal"**: visual tabel dua-kolom yang memvisualisasikan 7 dimensi perbedaan (inisiator, tujuan, data assessment, pendekatan, change management, ukuran sukses, post-go-live). Style: clean enterprise B2B — putih/biru/abu. Bisa berbentuk checklist visual.

- **Konsep 3 — Diagram "Leading Indicators Proyek BI Sehat"**: tiga lingkaran atau tiga kolom yang merepresentasikan tiga *leading indicator* (Adoption Rate, Data Trust Index, Time-to-Insight) dengan threshold patokan ditampilkan di setiap metrik. Penekanan visual: ini bukan *lagging ROI* — ini indikator yang bisa dipantau minggu ke minggu.
