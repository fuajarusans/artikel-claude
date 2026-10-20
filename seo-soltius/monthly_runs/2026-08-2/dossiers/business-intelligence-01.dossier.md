---
brief_id: "business-intelligence-01"
researcher_run_date: "2026-08-11"
sources_cited: 11
flags: 6
---

# Research Dossier: Cara Memilih Platform Business Intelligence — Kriteria, PoC, dan Build vs Buy

## TL;DR for the writer

- Angle-nya adalah **metode seleksi yang bisa dipertanggungjawabkan** untuk IT lead / kepala data — bukan "10 tools BI terbaik". Empat pilar yang dibawa brief: **matriks kriteria berbobot**, **PoC pada data sendiri**, **model TCO tiga tahun**, dan **kerangka build vs buy**. Ini distinct dari artikel ROI (business case finansial) dan artikel "kenapa proyek BI gagal" yang sudah ada — jangan tumpang tindih.
- Sumber eksternal kelas-A yang mendukung persis metode brief: **Databricks — "How to Evaluate an Enterprise Analytics Platform"** secara eksplisit menolak "dashboard comparison" sebagai titik awal, dan merekomendasikan **PoC di data sendiri + worksheet TCO 3 tahun + vendor question bank**, dengan **7 kriteria berbobot**. Ini fondasi H2 #2, #4, dan #5.
- Kerangka build vs buy didukung **Product School — "Build vs Buy 2026"**: bangun **hanya bila kapabilitas itu keunggulan kompetitif inti** (competitive moat); beli yang sifatnya commodity; **mayoritas organisasi berakhir hybrid**. Biaya tersembunyi membangun sendiri: talenta khusus, maintenance jangka panjang, dan opportunity cost.
- SAP context yang harus akurat: **SAP Analytics Cloud (SAC)** menyatukan **BI + planning + predictive** di atas **SAP BTP**, dan **bisa terhubung ke sumber non-SAP** (Google BigQuery & Snowflake via live connection; SQL/lainnya via import) — jadi SAC valid dipertimbangkan **meski perusahaan belum full-SAP**. **SAP BusinessObjects BI belum pensiun** — BI 2025 sudah rilis dan SAP berkomitmen memeliharanya hingga di luar 2030/2031. **Embedded analytics S/4HANA** = lapisan operasional real-time, bukan pengganti platform BI lintas-sistem.
- Statistik "efek" yang bisa dipakai untuk hook "jebakan demo": **Gartner** — melalui 2022, **80% insight analitik tidak menghasilkan business outcome** (hanya 20% yang berhasil); dan **~87% organisasi masih ber-maturity BI rendah** (survei Gartner). **Keduanya prediksi/survei lama** — atribusikan dengan tahun, jangan sajikan sebagai data 2026 (lihat Flags).
- Soltius anchor (closing, maks 2–3 sebutan): **Data and AI Consulting** + Implementation; framing "membantu **mengevaluasi kebutuhan dan mengimplementasikan** platform BI seperti SAC sesuai lanskap data klien" — Soltius **memasang & mengintegrasikan**, **bukan membuat** produknya. Kredibilitas: **SAP Platinum Partner via United VARs**.

## Core facts (verified)

> **Claim**: Platform BI modern bukan sekadar alat visualisasi — ia menyatukan pengambilan data lintas sumber, pemodelan (semantic layer), visualisasi/self-service, hingga analitik prediktif.
> **Number/specific**: Definisi kategori "Analytics and Business Intelligence Platforms" Gartner mencakup data preparation, visual-based exploration, augmented analytics, dan governed self-service — bukan hanya dashboard. Ini membedakan "platform" dari "tool visualisasi" tunggal.
> **Source**: Gartner — Analytics and Business Intelligence Platforms (definisi pasar), https://www.gartner.com/reviews/market/analytics-business-intelligence-platforms — diakses 2026-08-11
> **Confidence**: high

> **Claim**: SAP Analytics Cloud (SAC) adalah platform cloud yang menyatukan Business Intelligence, enterprise planning, dan predictive analytics dalam satu solusi, dibangun di atas SAP BTP.
> **Number/specific**: SAC memasarkan diri sebagai "BI, Planning, and Predictive Analysis" dalam satu produk cloud-native di atas SAP Business Technology Platform; mencakup augmented analytics (Smart Predict/Smart Insights) dan integrasi generative AI (Joule) untuk natural-language query.
> **Source**: SAP — SAP Analytics Cloud (halaman produk), https://www.sap.com/products/data-cloud/cloud-analytics.html — diakses 2026-08-11
> **Confidence**: high — catatan: halaman produk SAP (sap.com) menolak WebFetch (403); klaim dikuatkan silang oleh dokumentasi help.sap.com di bawah dan materi partner. Nama fitur augmented (Smart Predict, Joule) evolutif — lihat Flags.

> **Claim**: SAC dapat terhubung ke sumber data non-SAP, sehingga relevan meski perusahaan belum sepenuhnya memakai SAP.
> **Number/specific**: Google BigQuery dan Snowflake didukung via **live connection**; sumber non-SAP lain (mis. database SQL) tersedia via **import connection**. Live data access berguna untuk memakai fact data yang tersimpan di sumber non-SAP dalam model analitik & planning tanpa replikasi.
> **Source**: SAP Help Portal — "About Live Data Access" / "Live Data Connection Overview" (SAP Analytics Cloud), https://help.sap.com/docs/SAP_ANALYTICS_CLOUD/00f68c2e08b941f081002fd3691d86a7/4a573d78d2da4642b6f374d377c2f4a0.html — diakses 2026-08-11
> **Confidence**: high

> **Claim**: SAC membedakan dua mode koneksi — live (query langsung tanpa replikasi) vs import (data disalin ke SAC) — dengan konsekuensi arsitektur yang berbeda.
> **Number/specific**: Pada live connection, model dibuat dari sumber on-premise/cloud dan analisis dilakukan online **tanpa replikasi data**; full data-wrangling tidak tersedia untuk remote data, tetapi persiapan data esensial (ubah tipe objek/data, dsb.) tetap bisa. Import connection menyalin data ke SAC untuk transformasi penuh.
> **Source**: SAP Help Portal — "About Live Data Access" (SAP Analytics Cloud), URL di atas — diakses 2026-08-11
> **Confidence**: high

> **Claim**: Embedded analytics di SAP S/4HANA adalah lapisan pelaporan operasional real-time, bukan pengganti platform BI lintas-sistem.
> **Number/specific**: Embedded Analytics = kumpulan Fiori tiles untuk operational reporting real-time di dalam S/4HANA; **tidak bisa** meng-query sistem SAP lain atau aplikasi non-SAP, **tidak** punya planning engine/write-back, dan **tidak** punya data warehouse historis. Pendekatan yang disarankan: hybrid — embedded untuk operasional, SAC/BW untuk analitik lintas-sistem & long-history.
> **Source**: SAP Community — "SAP S/4HANA Embedded Analytics: An Overview", https://community.sap.com/t5/enterprise-resource-planning-blog-posts-by-members/sap-s-4hana-embedded-analytics-an-overview/ba-p/13530854; NTT DATA Business Solutions — "Embedded Analytics vs SAP Analytics Cloud", https://nttdata-solutions.com/ae-en/embedded-analytics-vs-sap-analytics-cloud-s4hana-cloud/ — diakses 2026-08-11
> **Confidence**: high

> **Claim**: SAP BusinessObjects BI belum dipensiunkan — SAP masih merilis versi baru dan berkomitmen memeliharanya jangka panjang.
> **Number/specific**: **BI 2025** telah dirilis; **BI 4.3** mainstream maintenance berakhir **31 Desember 2027**; SAP menyatakan komitmen menjaga BusinessObjects tersedia **on-premise dan sebagai managed cloud melampaui 2030**, dengan mainstream maintenance dijamin **hingga setidaknya akhir 2031**; rilis **BI 2027** direncanakan Q1 2027.
> **Source**: SAP Community (posts by SAP) — "SAP BusinessObjects BI 2025 Updated Release Timeline and Maintenance Strategy" & "SAP BusinessObjects BI Future is clarified", https://community.sap.com/t5/technology-blog-posts-by-sap/sap-businessobjects-bi-2025-updated-release-timeline-and-maintenance/ba-p/13932657 — diakses 2026-08-11
> **Confidence**: medium — lihat Flags: tanggal maintenance historis pernah berubah; frasakan "berdasarkan roadmap SAP 2025" dan jangan sajikan sebagai jaminan absolut.

> **Claim**: Titik awal evaluasi yang benar bukan membandingkan dashboard, melainkan apakah analitik/AI berjalan di atas satu lapisan data yang sama.
> **Number/specific**: "Most enterprise analytics evaluations are really just dashboard comparisons. That's the wrong starting point." Pertanyaan inti: apakah "analytics, AI and agents all run on the same data".
> **Source**: Databricks — "How to Evaluate an Enterprise Analytics Platform", https://www.databricks.com/blog/enterprise-analytics-platform-evaluation — diakses 2026-08-11
> **Confidence**: high

> **Claim**: Metode evaluasi yang direkomendasikan adalah PoC memakai data & pengguna sendiri terhadap kriteria sukses yang telah ditetapkan lebih dulu.
> **Number/specific**: "Run every test on your own data, with your own users, against pre-defined success criteria." Menolak demo vendor sebagai dasar keputusan.
> **Source**: Databricks — "How to Evaluate an Enterprise Analytics Platform", URL di atas — diakses 2026-08-11
> **Confidence**: high

> **Claim**: TCO harus dimodelkan lintas tiga tahun dengan komponen biaya yang eksplisit, bukan hanya harga lisensi.
> **Number/specific**: Worksheet TCO Databricks mencakup: **platform license/subscription, compute, storage, third-party BI tools, support & SLA tiers, training & certification, implementation services, dan internal headcount** — dimodelkan tahun 1–3.
> **Source**: Databricks — "How to Evaluate an Enterprise Analytics Platform", URL di atas — diakses 2026-08-11
> **Confidence**: high

> **Claim**: Evaluasi platform analitik sebaiknya memakai matriks kriteria berbobot, bukan checklist fitur datar.
> **Number/specific**: Tujuh kriteria berbobot Databricks: **Scope & workload fit (20%)**, Architecture & openness (15%), Governance & compliance (15%), Performance & scalability (15%), Adoption & usability (15%), AI & ML readiness (10%), **Total cost of ownership (10%)**.
> **Source**: Databricks — "How to Evaluate an Enterprise Analytics Platform", URL di atas — diakses 2026-08-11
> **Confidence**: high

> **Claim**: Jawaban vendor yang penting harus dikunci secara tertulis (question bank), bukan sekadar diperlihatkan di demo.
> **Number/specific**: "Answers that can't be committed to in writing can't be relied on in production." — dasar untuk vendor question bank dalam RFP.
> **Source**: Databricks — "How to Evaluate an Enterprise Analytics Platform", URL di atas — diakses 2026-08-11
> **Confidence**: high

> **Claim**: Aturan build vs buy: bangun hanya bila kapabilitas itu keunggulan kompetitif inti; beli bila sifatnya commodity.
> **Number/specific**: "If it [is a competitive moat]... you should build it." Bila bukan pembeda strategis, membeli "frees your team to focus on what truly drives value." Mayoritas organisasi berakhir dengan pendekatan **hybrid** — bangun yang membedakan, beli yang commodity.
> **Source**: Product School — "Build vs Buy: Making Smarter Software Decisions in 2026", https://productschool.com/blog/leadership/build-vs-buy — diakses 2026-08-11
> **Confidence**: high

> **Claim**: Biaya membangun BI sendiri melampaui biaya awal pengembangan; ada beban tersembunyi jangka panjang.
> **Number/specific**: Biaya tersembunyi yang disebut: talenta khusus + maintenance berkelanjutan, investasi infrastruktur data, biaya tooling/evaluasi, beban ownership jangka panjang, dan opportunity cost kapasitas tim untuk pekerjaan non-diferensiasi. Lima kriteria keputusan: cost, time-to-market, capabilities/customization, expertise/maintenance, strategic control.
> **Source**: Product School — "Build vs Buy 2026", URL di atas — diakses 2026-08-11
> **Confidence**: high

> **Claim**: Mayoritas organisasi masih ber-maturity BI/analitik rendah — sinyal bahwa "punya tool" ≠ "dapat nilai".
> **Number/specific**: Survei Gartner menemukan **lebih dari 87% organisasi** berada pada maturity BI & analitik **rendah** ("basic"/"opportunistic").
> **Source**: Gartner (via Information Age) — "Gartner finds 87% of organisations have low BI and analytics maturity", https://www.information-age.com/low-bi-and-analytics-maturity-12257/ — diakses 2026-08-11
> **Confidence**: medium — survei lama (rilis 2018); atribusikan sebagai temuan Gartner, bukan angka terbaru. Lihat Flags.

> **Claim**: Adopsi BI oleh pengguna akhir historisnya rendah — memilih tool "yang menang demo" tak menjamin dipakai.
> **Number/specific**: Adopsi BI/analitik berkisar **~25–35% dari karyawan** tergantung sumber & tahun (Gartner ~35% pada 2019; BARC/Eckerson ~25% pada 2022; beberapa ringkasan ~29–30% rata-rata). Adopsi jauh lebih tinggi di perusahaan besar (>5.000 karyawan).
> **Source**: TechTarget / IBM Think ringkasan riset Gartner & BARC, https://www.ibm.com/think/insights/business-intelligence-adoption — diakses 2026-08-11
> **Confidence**: medium — angka bervariasi antar sumber/tahun; sajikan sebagai rentang dengan atribusi.

> **Claim**: Sebagian besar insight analitik historisnya gagal berujung pada hasil bisnis — dasar untuk "menang demo ≠ platform tepat".
> **Number/specific**: Gartner memprediksi bahwa **melalui 2022, 80% insight analitik tidak akan menghasilkan business outcome** (hanya 20% yang berhasil), sebagian besar karena tidak mengikuti praktik yang teruji.
> **Source**: Gartner (prediksi, dikutip luas — mis. MIT Sloan / CIO), https://mitsloan.mit.edu/ideas-made-to-matter/10-best-practices-analytics-success-including-3-you-cant-ignore — diakses 2026-08-11
> **Confidence**: medium — prediksi dengan horizon "melalui 2022" yang kini sudah lewat; pakai sebagai ilustrasi pola, bukan statistik terkini. Lihat Flags.

## Solution focus + Soltius anchor (from product_matrix.md)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| Vendor-neutral: apa itu platform BI modern (integrasi data → semantic layer → self-service → prediktif); metode seleksi (kriteria berbobot, PoC, TCO 3-tahun, build vs buy) | Definisikan dulu tanpa vendor; tekankan "mulai dari arsitektur & kebutuhan, bukan daftar fitur demo" | H2 #1, #2, #3, #4, #5 (body) | — |
| **SAP Analytics Cloud (SAC)** (contoh platform "buy") | Menyatukan BI + planning + predictive di atas **SAP BTP**; **bisa konek non-SAP** (BigQuery/Snowflake live; SQL import); live vs import; augmented (Smart Predict) + Joule NLQ. **Jangan sebut angka lisensi.** | H2 #1 (contoh), #3 (opsi "buy"), #5 (uji integrasi di PoC) | — |
| **SAP BusinessObjects BI** | Konteks estat on-prem yang **masih dipelihara** (BI 2025 rilis; komitmen melampaui 2030/2031) — **jangan klaim pensiun** | H2 #1 atau aside | — |
| **Embedded analytics S/4HANA** | Lapisan operasional real-time; bukan pengganti platform BI lintas-sistem | H2 #1 (peta lapisan) | — |
| **Soltius anchor** | Soltius **mengevaluasi kebutuhan & mengimplementasikan** platform BI (mis. SAC) pada lanskap SAP/non-SAP klien; **Data and AI Consulting** + Implementation; **SAP Platinum Partner via United VARs** | **Closing CTA** + 1 aside opsional di H2 #4 (PoC) | **Data and AI Consulting** + Implementation (SAP Platinum via United VARs) |

Reminder: Soltius **implements/integrates/supports** teknologi ini — **tidak membuatnya**. Maks 2–3 sebutan Soltius. Aside mid-artikel yang disahkan brief (H2 #4): 1 kalimat bahwa partner implementasi berpengalaman mempercepat PoC yang jujur (menyiapkan data & integrasi nyata) — tanpa jualan.

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **Databricks — "How to Evaluate an Enterprise Analytics Platform"** — https://www.databricks.com/blog/enterprise-analytics-platform-evaluation — *backs*: dashboard-comparison itu titik awal keliru; PoC di data sendiri + TCO 3-tahun + vendor question bank + 7 kriteria berbobot. **Sumber metode inti brief.**
2. **SAP Help Portal — "About Live Data Access" (SAP Analytics Cloud)** — https://help.sap.com/docs/SAP_ANALYTICS_CLOUD/00f68c2e08b941f081002fd3691d86a7/4a573d78d2da4642b6f374d377c2f4a0.html — *backs*: SAC konek non-SAP (BigQuery/Snowflake live; import lain), live vs import tanpa replikasi.
3. **SAP — SAP Analytics Cloud (halaman produk)** — https://www.sap.com/products/data-cloud/cloud-analytics.html — *backs*: SAC menyatukan BI + planning + predictive di atas SAP BTP.
4. **Product School — "Build vs Buy 2026"** — https://productschool.com/blog/leadership/build-vs-buy — *backs*: bangun hanya untuk keunggulan inti; beli commodity; hybrid; biaya tersembunyi membangun.
5. **Gartner (via MIT Sloan)** — https://mitsloan.mit.edu/ideas-made-to-matter/10-best-practices-analytics-success-including-3-you-cant-ignore — *backs*: 80% insight analitik tak berujung outcome (through 2022) — untuk H2 #5 "jebakan demo". (Sajikan dengan tahun.)

Priority order terpenuhi: SAP official (SAC, help.sap.com) > Gartner > reputable tech (Databricks, Product School).

## FAQ Q&As (6 drafted, Bahasa Indonesia)

### Apa perbedaan platform BI dan tools visualisasi?
Tools visualisasi berhenti pada pembuatan grafik dari data yang sudah rapi. Platform BI mencakup rantai lengkap: integrasi lintas sumber (SAP & non-SAP), pemodelan/semantic layer agar definisi metrik konsisten, keamanan akses (row-level), self-service, hingga analitik prediktif. Jadi visualisasi hanya satu lapisan; platform adalah fondasi tata kelola dan data di belakangnya. Memilih berdasarkan tampilan dashboard saja adalah kesalahan evaluasi yang paling umum.

### Bagaimana cara menghitung TCO platform BI selama tiga tahun?
Jangan berhenti di harga lisensi. Model TCO tiga tahun sebaiknya mencakup: lisensi/langganan, compute dan storage, biaya implementasi, integrasi ke sumber data, pelatihan dan sertifikasi, dukungan/SLA, application management (AMS), serta headcount internal untuk mengelolanya. Menurut panduan evaluasi Databricks, biaya lisensi sering hanya sebagian kecil; biaya implementasi, integrasi, dan orang justru mendominasi total kepemilikan.

### Berapa lama Proof of Concept (PoC) BI yang ideal?
PoC yang efektif umumnya berlangsung 2–4 minggu, fokus pada 1–2 use case bernilai tinggi, dan diuji memakai data serta pertanyaan nyata Anda—bukan data contoh vendor. Tetapkan kriteria sukses terukur di awal, libatkan pengguna akhir yang sesungguhnya, dan uji integrasi ke lanskap data asli. Prinsip Databricks: jalankan setiap uji pada data Anda sendiri, dengan pengguna Anda, terhadap kriteria yang sudah ditetapkan.

### Apakah lebih murah membangun BI sendiri daripada membeli platform jadi?
Sering kali tidak, kecuali kapabilitas itu benar-benar keunggulan kompetitif inti Anda. Membangun sendiri menambah biaya tersembunyi: talenta khusus, maintenance jangka panjang, infrastruktur data, dan opportunity cost tim. Kerangka build vs buy menyarankan membangun hanya yang membedakan bisnis Anda, dan membeli yang bersifat commodity. Untuk kebutuhan BI umum, platform jadi biasanya lebih cepat bernilai; banyak organisasi akhirnya memilih pendekatan hybrid.

### Bagaimana menghindari vendor lock-in saat memilih platform BI?
Uji integrasi ke lanskap data nyata Anda dalam PoC, bukan hanya di demo. Nilai keterbukaan arsitektur (dukungan standar, koneksi live ke sumber non-SAP, kemampuan ekspor model/definisi metrik), dan kunci komitmen vendor secara tertulis—termasuk SLA, portabilitas data, dan biaya keluar. Panduan Databricks menempatkan "architecture & openness" sebagai kriteria berbobot tersendiri, karena jawaban yang tak bisa dituangkan tertulis tak bisa diandalkan di produksi.

### Apakah SAP Analytics Cloud cocok untuk perusahaan yang belum memakai SAP penuh?
Bisa. SAP Analytics Cloud dapat terhubung ke sumber non-SAP—misalnya Google BigQuery dan Snowflake melalui live connection, serta database SQL lain melalui import—selain ke SAP S/4HANA, BW/4HANA, dan Datasphere. Jadi SAC tetap layak dipertimbangkan pada lanskap campuran. Kuncinya, buktikan koneksi dan performa terhadap sumber data Anda yang sebenarnya dalam PoC sebelum memutuskan, bukan mengandalkan demo.

## Data tables for the writer

### Matriks kriteria evaluasi platform BI (bobot indikatif — sesuaikan dengan konteks)
| Kriteria | Bobot indikatif | Apa yang dinilai |
|---|---|---|
| Kecocokan lingkup & beban kerja | 20% | Apakah use case & volume Anda memang sasaran platform ini |
| Integrasi & keterbukaan arsitektur | 15% | Koneksi ke sumber SAP & non-SAP; live vs import; standar terbuka |
| Tata kelola & kepatuhan | 15% | Semantic/metrics layer, row-level security, audit, UU PDP |
| Performa & skalabilitas | 15% | Waktu respons pada volume nyata; concurrency |
| Adopsi & kemudahan pakai | 15% | Self-service, kurva belajar, dukungan lokal |
| Kesiapan AI/ML | 10% | Prediktif, augmented analytics, NLQ |
| Total Cost of Ownership (3 tahun) | 10% | Lisensi + implementasi + integrasi + pelatihan + AMS + headcount |

*(Bobot mengikuti kerangka Databricks; sembilan kriteria brief dipetakan ke tujuh baris ini + "dukungan lokal" dimasukkan ke "adopsi".)*

### Komponen TCO tiga tahun (yang sering terlupa dicetak tebal)
| Komponen | Tahun 1 | Tahun 2 | Tahun 3 |
|---|---|---|---|
| Lisensi / langganan | ● | ● | ● |
| **Implementasi & konfigurasi** | ● | | |
| **Integrasi sumber data** | ● | ● | |
| Compute & storage | ● | ● | ● |
| **Pelatihan & sertifikasi** | ● | ● | |
| Dukungan / SLA | ● | ● | ● |
| **Application Management (AMS)** | ● | ● | ● |
| **Headcount internal** | ● | ● | ● |

*(Komponen dari worksheet TCO Databricks; yang dicetak tebal adalah biaya di luar lisensi yang paling sering diremehkan di tahap demo.)*

### Kerangka build vs buy
| Pertanyaan | Jika "ya" | Jika "tidak" |
|---|---|---|
| Apakah kapabilitas BI ini keunggulan kompetitif inti? | Pertimbangkan **build** (kontrol & diferensiasi) | Cenderung **buy** (fokus tim ke nilai inti) |
| Apakah tim punya talenta & kapasitas maintenance jangka panjang? | Build lebih layak | Build berisiko utang teknis |
| Seberapa cepat butuh time-to-value? | Butuh cepat → **buy** | Ada waktu → build bisa dipertimbangkan |
| Apakah kebutuhan sangat standar (commodity)? | **Buy** | Mungkin butuh kustom |

*(Mayoritas berakhir hybrid: bangun yang membedakan, beli yang commodity.)*

### Peta tiga lapisan analitik SAP (untuk H2 #1)
| Lapisan | Untuk apa | Batasannya |
|---|---|---|
| Embedded analytics S/4HANA | Pelaporan operasional real-time di dalam proses | Tak lintas-sistem; tak ada planning/warehouse |
| SAP Analytics Cloud (SAC) | BI + planning + predictive lintas sumber (SAP & non-SAP) | Cloud-only (SaaS) |
| SAP BusinessObjects BI | Estat pelaporan on-prem yang mapan | On-prem; masih dipelihara (BI 2025), roadmap ke 2027+ |

## Edge cases & nuance

- **"Menang demo" ≠ "platform tepat".** Demo memakai data bersih buatan vendor dan menonjolkan fitur yang mungkin tak pernah Anda pakai. Bukti keputusan yang benar adalah PoC pada data & pertanyaan nyata Anda, dengan kriteria sukses yang ditetapkan lebih dulu. Ini inti H2 #5.
- **Lisensi ≈ puncak gunung es.** Komponen TCO yang menentukan justru implementasi, integrasi, pelatihan, AMS, dan headcount — semua tak terlihat di demo. Sajikan model 3 tahun, bukan harga lisensi tahun pertama.
- **Build vs buy bukan biner.** Jawaban paling umum adalah hybrid: beli platform inti (mis. SAC), bangun ekstensi/model spesifik di atasnya. Jangan bingkai sebagai pilihan ekstrem.
- **SAC itu cloud-only (SaaS); BusinessObjects on-prem.** Bila perusahaan punya kendala data residency/kontrol on-prem, ini variabel nyata — jangan berasumsi cloud selalu jawabannya. (Deployment cloud vs on-prem dibahas terpisah di artikel lain batch ini — cukup singgung, jangan diulang panjang.)
- **SAC bukan hanya untuk pengguna SAP penuh.** Karena bisa konek non-SAP (BigQuery/Snowflake live; SQL import), SAC valid dipertimbangkan pada lanskap campuran — tapi buktikan koneksi & performa di PoC.
- **BusinessObjects belum pensiun.** Jangan tulis "sudah usang/dihentikan". SAP masih merilis (BI 2025) dan berkomitmen memelihara melampaui 2030/2031 — posisikan sebagai estat mapan yang bisa berdampingan dengan SAC, bukan mayat.
- **Statistik adopsi/kegagalan itu ilustratif, bukan hukum.** Angka Gartner (87% low maturity; 80% insight tak berujung outcome) berguna untuk menegaskan "tool saja tak cukup" — tapi berasal dari survei/prediksi lama. Atribusikan dengan tahun.

## Flags (open factual risk)

- ⚠️ **Posisi SAP di Gartner Magic Quadrant Analytics & BI 2026**: laporan terbit 29 Juni 2026, tetapi **posisi kuadran SAP tidak terkonfirmasi** dari sumber otoritatif dalam riset ini (satu blog non-SAP menyebut "Visionary" — tidak dapat diverifikasi). → Rekomendasi: **jangan** nyatakan penempatan kuadran SAP/SAC secara spesifik; jika ingin menyebut MQ, cukup rujuk keberadaan laporan tanpa mengklaim posisi.
- ⚠️ **Statistik Gartner "80% insight analitik tak berujung outcome"**: prediksi dengan horizon "melalui 2022" yang kini sudah lewat. → Rekomendasi: sajikan sebagai "prediksi Gartner" untuk menggambarkan pola, dengan tahun; jangan sajikan sebagai data 2026.
- ⚠️ **Statistik Gartner "87% low BI maturity"**: berasal dari survei lama (rilis 2018). → Rekomendasi: atribusikan sebagai temuan Gartner (dengan tahun); jangan tulis "menurut data Gartner terbaru".
- ⚠️ **Angka adopsi BI (~25–35%)**: bervariasi antar sumber & tahun (Gartner ~35% 2019; BARC ~25% 2022). → Rekomendasi: sajikan sebagai **rentang** dengan atribusi, bukan satu angka pasti.
- ⚠️ **Tanggal maintenance SAP BusinessObjects BI (2027 / 2030 / 2031) & rencana BI 2027**: roadmap maintenance SAP pernah bergeser secara historis. → Rekomendasi: frasakan "berdasarkan roadmap/pernyataan SAP 2025"; aman untuk menegaskan "belum pensiun", tetapi jangan sajikan tanggal sebagai jaminan absolut.
- ⚠️ **Nama fitur augmented SAC (Smart Predict, Smart Insights, Just Ask, Joule) & konektivitas native Snowflake/BigQuery**: penamaan fitur SAP evolutif; konektivitas terkonfirmasi via help.sap.com, tetapi label pemasaran bisa berubah. → Rekomendasi: sebut kapabilitas ("prediktif bawaan", "natural-language query", "koneksi live ke BigQuery/Snowflake") lebih aman daripada mengunci nama fitur; **jangan** sebutkan angka lisensi SAC apa pun (instruksi brief).

## Definition snippet draft (52 words)

> Platform Business Intelligence adalah perangkat lunak yang menyatukan pengambilan data dari berbagai sumber, pemodelan (semantic layer), visualisasi, keamanan akses, dan analitik lanjutan sehingga organisasi dapat memantau serta menganalisis kinerja secara mandiri. Berbeda dari sekadar alat visualisasi, platform BI menata seluruh rantai dari data mentah hingga keputusan — bukan hanya menampilkan grafik.
