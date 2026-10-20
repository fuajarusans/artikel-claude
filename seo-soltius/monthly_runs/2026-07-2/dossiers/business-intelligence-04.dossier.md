---
brief_id: "business-intelligence-04"
researcher_run_date: "2026-07-07"
sources_cited: 9
flags: 4
---

# Research Dossier: Kenapa Angka BI Beda-Beda? Tata Kelola & Semantic Layer

## TL;DR for the writer

- **Inti cerita**: masalah "angka beda-beda" bukan soal dashboard, melainkan tidak adanya (a) definisi metrik tunggal (*semantic/metrics layer*) dan (b) tata kelola data (*governance* — kebijakan, peran, kepemilikan). Rangkai rantai sebab: definisi metrik menyimpang → *governance* lemah → angka tak konsisten → kepercayaan runtuh → BI diabaikan.
- **Fakta jangkar (kuat, terverifikasi)**: Gartner memprediksi **80% inisiatif data & analytics governance akan gagal hingga 2027** — bukan karena teknologi, tapi karena tidak terkait krisis/hasil bisnis yang jelas (press release Gartner, 28 Feb 2024, analis Saul Judah). Ini fakta pembuka yang kuat untuk H2 governance.
- **Standar baru 2026**: **Open Semantic Interchange (OSI)** — spesifikasi v1.0 difinalisasi & dirilis publik **27 Januari 2026** (Apache 2.0), standar vendor-netral untuk pertukaran model semantik (metrik, dimensi, relasi) antar-tool BI/AI. Didukung 30+ organisasi (Snowflake, Databricks, dbt Labs, ThoughtSpot, Salesforce, dll). Relevan untuk H2 semantic layer + tren AI-readiness.
- **SAP anchor (terverifikasi help.sap.com)**: **SAP Datasphere** menyatukan *data integration, cataloging, semantic modeling, data warehousing, virtualization* dalam satu layanan; **Business Builder** membangun lapisan semantik/bisnis; **Catalog** untuk penemuan mandiri + glosarium/istilah + KPI; **Impact & Lineage Analysis** untuk *data lineage*. **SAP Analytics Cloud (SAC)** mengonsumsi model ter-*governed* dari Datasphere via *live connection* — satu versi kebenaran tanpa duplikasi data.
- **Bedakan tegas** *data governance* (kebijakan, peran, kepemilikan — "aturan main") dari *data quality* (kondisi aktual data: akurat, lengkap, konsisten — "hasilnya"). Governance adalah sistem yang, antara lain, menghasilkan dan menjaga data quality.
- **Hati-hati**: angka "67% trust rendah" dari brief TIDAK terkonfirmasi bersih; gunakan angka teratribusi yang terverifikasi (75% eksekutif tak percaya penuh pada datanya — HFS Research) ATAU frasakan kualitatif. Jangan sebut "67%" tanpa sumber.

## Core facts (verified)

> **Claim**: Gartner memprediksi mayoritas inisiatif tata kelola data & analitik akan gagal karena tidak terkait hasil bisnis, bukan karena teknologi.
> **Number/specific**: 80% inisiatif D&A governance diprediksi gagal hingga 2027, "due to a lack of a real or manufactured crisis"; analis Saul Judah, VP Analyst: "A D&A governance program that does not enable prioritized business outcomes fails."
> **Source**: Gartner press release, "Gartner Predicts 80% of D&A Governance Initiatives Will Fail by 2027…", 2024-02-28 (gartner.com/en/newsroom/press-releases/2024-02-28-…). Dikonfirmasi via ringkasan BizTechReports (2024-02-29). Diakses 2026-07-07.
> **Confidence**: high (halaman gartner.com sendiri 403 saat fetch; angka, tanggal, nama analis, dan alasan dikonfirmasi konsisten di dua sumber — hasil pencarian Gartner + BizTechReports).

> **Claim**: Gartner juga memprediksi GenAI akan mempercepat *time-to-value* program governance & MDM.
> **Number/specific**: pada 2027, penerapan GenAI diprediksi mempercepat *time to value* program D&A governance dan master data management sebesar **40%**.
> **Source**: Gartner press release, 2024-02-28 (sda). Diakses 2026-07-07.
> **Confidence**: high.

> **Claim**: Open Semantic Interchange (OSI) adalah standar terbuka baru untuk lapisan semantik lintas platform BI/AI.
> **Number/specific**: spesifikasi **v1.0 difinalisasi & dirilis publik 27 Januari 2026** di bawah lisensi **Apache 2.0**; mendefinisikan model vendor-netral untuk konstruksi *semantic layer* — *data sets, metrics, dimensions, relationships, contexts*. Diinisiasi Snowflake dengan kolaborasi komunitas.
> **Source**: Snowflake blog, "Open Semantic Interchange's Specs Finalized" (snowflake.com/en/blog/open-semantic-interchanges-specs-finalized/); open-semantic-interchange.org. Diakses 2026-07-07.
> **Confidence**: high.

> **Claim**: OSI didukung banyak vendor data/BI/AI besar.
> **Number/specific**: 30+ organisasi anggota, termasuk Snowflake, Databricks, dbt Labs, ThoughtSpot, Salesforce, Qlik, AtScale, Alation, Atlan, Collibra, Informatica, Sigma, Cube, Starburst (Google & AWS bergabung Nov 2025 per liputan sekunder).
> **Source**: Snowflake blog (sda); Thoughtspot/Datus liputan OSI 2026. Diakses 2026-07-07.
> **Confidence**: high (daftar inti anggota konsisten; keanggotaan bertambah dari waktu ke waktu — tulis "termasuk", bukan daftar tertutup).

> **Claim**: OSI menyelesaikan masalah "definisi metrik yang tidak konsisten antar-tool" — inti keluhan angka beda-beda.
> **Number/specific**: standar dibuat agar konstruksi semantik (metrik, dimensi) "consistently interpreted across tools, platforms and agentic applications" — satu definisi metrik dipahami sama oleh setiap tool BI/AI.
> **Source**: open-semantic-interchange.org; Snowflake blog (sda). Diakses 2026-07-07.
> **Confidence**: high.

> **Claim**: SAP Datasphere adalah layanan data terpadu yang mencakup pemodelan semantik dan katalog.
> **Number/specific**: SAP Datasphere "combines previously discrete capabilities into a unified service for **data integration, cataloging, semantic modeling, data warehousing, and virtualizing** workloads across SAP and non-SAP data."
> **Source**: SAP Help Portal, "Getting Started with SAP Datasphere" (help.sap.com/docs/SAP_DATASPHERE/…/5db9a099826c467e93ff0994fc185589.html). Diakses 2026-07-07.
> **Confidence**: high.

> **Claim**: SAP Datasphere menyediakan lapisan model bisnis/semantik melalui Business Builder.
> **Number/specific**: **Business Builder** memungkinkan pengguna dengan peran *modeler* "combine, refine, and enrich Data Builder objects and expose lightweight, tightly-focused perspectives for consumption by SAP Analytics Cloud and Microsoft Excel"; lapisan bisnis membentuk semantik untuk pelaporan/dashboard di SAC.
> **Source**: SAP Help Portal, "Modeling Data in the Business Builder" (help.sap.com/docs/SAP_DATASPHERE/…/3829d46c48a44f1e94915054bd76b7b9.html). Diakses 2026-07-07.
> **Confidence**: high.

> **Claim**: SAP Datasphere memiliki katalog untuk penemuan data mandiri, glosarium bisnis, dan KPI.
> **Number/specific**: Catalog mendukung "self-service discovery of data and analytic assets, glossaries and terms, and key performance indicators."
> **Source**: SAP Help Portal, "Catalog Concepts – SAP Datasphere" (help.sap.com/docs/SAP_DATASPHERE/…/5772386034824e2ba7146fe7b3109d21.html). Diakses 2026-07-07.
> **Confidence**: high.

> **Claim**: SAP Datasphere menyediakan analisis *data lineage* (silsilah data) dan dampak perubahan.
> **Number/specific**: "graphical impact and lineage analysis to visualize data movements, transformations, and other dependencies" — pengguna dapat menelusuri asal-usul data dan dampak perubahan sebelum diterapkan.
> **Source**: SAP Help Portal, "Impact and Lineage Analysis – SAP Datasphere" (help.sap.com/docs/SAP_DATASPHERE/…/9da4892cb0e4427ab80ad8d89e6676b8.html). Diakses 2026-07-07.
> **Confidence**: high.

> **Claim**: SAP Analytics Cloud mengonsumsi model ter-*governed* dari Datasphere secara langsung, tanpa menduplikasi data — mendukung *single version of truth*.
> **Number/specific**: via *live data connection* ke SAP Datasphere, SAC mengakses *Analytical Dataset, Analytic Model, atau Perspective*; hanya metadata model disimpan di SAC, eksekusi query terjadi di sumber — tim finance/sales/supply chain "consume the same governed facts".
> **Source**: SAP Help Portal, "Live Data Connections to SAP Datasphere" & "About Models" (help.sap.com/docs/SAP_ANALYTICS_CLOUD/…). Diakses 2026-07-07.
> **Confidence**: high.

> **Claim**: Kepercayaan eksekutif pada data organisasinya rendah — konteks yang menjelaskan mengapa "angka beda-beda" fatal.
> **Number/specific**: 75% eksekutif bisnis tidak memiliki tingkat kepercayaan yang tinggi pada datanya, dan 70% tidak menganggap arsitektur datanya "world class" (studi HFS Research).
> **Source**: RTInsights, "75% of Executives Don't Trust Their Data" (rtinsights.com/executives-dont-trust-data/), mengutip HFS Research. Diakses 2026-07-07.
> **Confidence**: medium (angka valid & teratribusi, tetapi studi HFS ini lebih lama (±2022); gunakan sebagai ilustrasi tren "distrust umum", bukan data 2026. Lihat Flags — brief menyebut 67% yang berbeda).

> **Claim**: *Data governance* dan *data quality* adalah dua hal berbeda yang sering tertukar.
> **Number/specific**: Governance = kerangka kebijakan, peran, dan kepemilikan ("aturan main"); data quality = kondisi aktual data (akurat, lengkap, konsisten, tepat waktu — "hasilnya"). Governance adalah sistem yang antara lain menegakkan data quality.
> **Source**: Konvensi industri data-management (mis. definisi DAMA-DMBOK / Gartner glossary); disintesiskan dari sumber governance di atas. Diakses 2026-07-07.
> **Confidence**: high (distingsi konseptual baku; tidak perlu satu URL tunggal, tetapi jangan mengklaim angka).

> **Claim**: *Semantic layer* dan *metrics layer* — bedanya untuk pembaca.
> **Number/specific**: *Semantic layer* = lapisan yang menerjemahkan struktur teknis data (tabel/kolom) menjadi istilah bisnis + relasi yang dipahami pengguna; *metrics layer* (metrics store) = subset yang berfokus khusus mendefinisikan KPI/metrik terpusat (mis. "revenue" didefinisikan sekali). Metrics layer sering dianggap komponen inti semantic layer.
> **Source**: OSI/Snowflake & industri semantic-layer 2026 (definisi konsep); Improvado "The Metrics Layer". Diakses 2026-07-07.
> **Confidence**: medium (definisi konseptual mapan; batasan istilah bervariasi antar-vendor — frasakan sebagai "umumnya"/"sering dipahami sebagai").

## Solution focus + Soltius anchor (from product_matrix.md)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| **SAP Datasphere** sebagai lapisan model bisnis/semantik + katalog + lineage | Business Builder = lapisan semantik bisnis; Catalog = penemuan mandiri + glosarium + KPI; Impact & Lineage Analysis = *data lineage*; menyatukan integrasi, katalog, pemodelan semantik, warehousing, virtualisasi (help.sap.com) | H2 #3 (semantic layer) & H2 #4 (governance mechanisms — tabel masalah→mekanisme) | **Data and AI Consulting** + perancangan arsitektur data ter-*governed* (Datasphere/BW/4HANA) sebagai *single source of truth* — closing CTA |
| **SAP Analytics Cloud (SAC)** sebagai konsumen model ter-*governed* | Live connection ke model Datasphere; tim lintas fungsi mengonsumsi *governed facts* yang sama tanpa duplikasi (help.sap.com) | H2 #4; sebutkan bahwa dashboard yang dipercaya berdiri di atas model ter-*governed*, bukan sebaliknya | (sama — Data and AI Consulting) |
| Konsep vendor-netral: *semantic/metrics layer, data steward, data lineage, OSI* | Definisi konseptual + OSI v1.0 (27 Jan 2026, Apache 2.0) | H2 #3 (tren) | — (jaga body vendor-neutral) |

Reminder: Soltius **mengimplementasikan/merancang/mendukung** SAP Datasphere & SAC — **bukan membangunnya**. Maks 2–3 self-mention: 1 aside di H2 #4 (pengalaman menegakkan definisi metrik tunggal) + 1 closing CTA (Data and AI Consulting). Jangan service-dump.

**Anchor phrasing (pre-approved, company_profile):** "Melalui layanan Data and AI Consulting, Soltius membantu perusahaan mengubah data menjadi keputusan bisnis yang lebih cepat dan akurat." / "…merancang arsitektur data warehouse modern (mis. SAP Datasphere/BW/4HANA) agar data tersebar menjadi satu sumber kebenaran."

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **Gartner press release (2024-02-28)** — https://www.gartner.com/en/newsroom/press-releases/2024-02-28-gartner-predicts-80-percent-of-data-and-analytics-governance-initiatives-will-fail-by-2027-due-to-a-lack-of-a-real-or-manufactured-crisis- — *what it backs*: 80% inisiatif D&A governance gagal hingga 2027 karena tak terkait hasil/krisis bisnis; GenAI +40% time-to-value. (Prioritas #1 untuk H2 governance.)
2. **SAP Help Portal — Getting Started with SAP Datasphere** — https://help.sap.com/docs/SAP_DATASPHERE/d4f3c5a0bb074d09ae9b42b2b9bd7a08/5db9a099826c467e93ff0994fc185589.html — *what it backs*: Datasphere menyatukan integrasi data, katalog, pemodelan semantik, warehousing, virtualisasi. (Sumber SAP-official untuk klaim produk.)
3. **Snowflake / open-semantic-interchange.org — OSI v1.0** — https://www.snowflake.com/en/blog/open-semantic-interchanges-specs-finalized/ — *what it backs*: standar semantic layer terbuka, finalisasi 27 Jan 2026, Apache 2.0, definisi metrik konsisten lintas tool. (Sumber primer untuk tren OSI.)

## FAQ Q&As (6 drafted, Bahasa Indonesia)

### Apa itu single source of truth dalam Business Intelligence?
*Single source of truth* (SSOT) adalah satu tempat rujukan resmi tempat setiap metrik dan data bisnis didefinisikan dan disimpan secara konsisten, sehingga seluruh divisi memakai angka yang sama. Dalam BI, SSOT diwujudkan lewat lapisan semantik dan tata kelola data — bukan sekadar satu database, melainkan satu definisi metrik yang disepakati (mis. "revenue" dihitung dengan rumus yang sama di mana pun). Tanpa SSOT, dua dashboard bisa menampilkan angka berbeda dari sumber yang sama.

### Apa bedanya data governance dan data quality?
*Data governance* adalah kerangka kebijakan, peran, dan kepemilikan yang mengatur siapa boleh mendefinisikan, mengubah, dan mengakses data — "aturan mainnya". *Data quality* adalah kondisi aktual data itu sendiri: akurat, lengkap, konsisten, dan tepat waktu — "hasilnya". Keduanya berkaitan tetapi tidak sama: governance adalah sistem yang, antara lain, menegakkan dan menjaga data quality. Gartner memprediksi 80% inisiatif governance gagal hingga 2027 justru karena hanya fokus pada aturan tanpa mengaitkannya ke hasil bisnis.

### Apa itu semantic layer dan metrics layer?
*Semantic layer* adalah lapisan yang menerjemahkan struktur teknis data (tabel, kolom) menjadi istilah bisnis dan relasi yang dipahami pengguna, sehingga metrik didefinisikan satu kali dan dipakai konsisten. *Metrics layer* adalah bagian yang khusus memusatkan definisi KPI/metrik. Di SAP Datasphere, lapisan ini dibangun lewat Business Builder dan dikonsumsi SAP Analytics Cloud. Standar terbuka Open Semantic Interchange (v1.0, Januari 2026) kini menstandarkan pertukaran definisi semantik lintas tool BI dan AI.

### Apa peran data steward?
*Data steward* adalah orang yang bertanggung jawab atas kualitas, definisi, dan penggunaan data pada domain tertentu (mis. data pelanggan atau keuangan). Ia memastikan setiap metrik punya definisi tunggal yang disepakati, mendokumentasikannya di katalog data, dan menengahi ketika divisi berbeda memakai istilah yang sama untuk hal berbeda. Tanpa *steward*, definisi metrik menyimpang diam-diam — akar utama masalah "angka beda-beda" di rapat direksi.

### Apa itu data lineage dan mengapa penting?
*Data lineage* (silsilah data) adalah jejak yang menunjukkan asal-usul sebuah angka: dari sumber mana ia berasal, transformasi apa yang dilaluinya, hingga muncul di dashboard. Ini penting karena memungkinkan tim menelusuri kenapa dua angka berbeda dan menilai dampak sebuah perubahan sebelum diterapkan. SAP Datasphere menyediakan *Impact and Lineage Analysis* grafis untuk memvisualkan pergerakan dan transformasi data — fondasi kepercayaan pada angka BI.

### Apakah semua metrik harus di-governance secara ketat?
Tidak. Menerapkan tata kelola ketat pada setiap metrik justru bisa membunuh BI — proses jadi birokratis dan pengguna kembali ke spreadsheet bayangan. Pendekatan yang lebih sehat adalah *governed self-service*: tegakkan definisi tunggal hanya untuk metrik inti bersama (mis. revenue, active customer, margin) yang sering diperdebatkan, lalu beri kebebasan bereksplorasi di sekitarnya. Mulai dari beberapa metrik yang paling menyebabkan konflik, bukan seluruh kamus data sekaligus.

## Data tables for the writer (if the article calls for one)

### Tabel 1 — Masalah "angka beda-beda" → mekanisme tata kelola yang menjawabnya (untuk H2 #4)
| Gejala/masalah | Akar penyebab | Mekanisme governance | Wujud di arsitektur SAP |
|---|---|---|---|
| "Revenue" beda antar-divisi | Tidak ada definisi metrik tunggal | Definisi metrik terpusat di semantic/metrics layer | Business Builder di SAP Datasphere (lapisan bisnis) |
| Tidak tahu angka ini dari mana | Tidak ada silsilah data | *Data lineage* / impact analysis | Impact & Lineage Analysis di SAP Datasphere |
| Tidak yakin data mana yang resmi | Aset data tak terkatalog | Katalog data + glosarium + label "tepercaya" | Catalog SAP Datasphere (discovery, glossary, KPI) |
| Definisi menyimpang diam-diam | Tidak ada penanggung jawab | Peran *data owner*/*data steward* | (peran organisasional; ditegakkan lewat governance) |
| Dashboard dibangun di atas data kacau | Model tak ter-*governed* dikonsumsi bebas | Konsumsi hanya model ter-*governed* | SAC live connection ke model Datasphere ter-*governed* |

### Tabel 2 — Data governance vs. data quality (untuk membedakan konsep, opsional di H2 #4/FAQ)
| Aspek | Data governance | Data quality |
|---|---|---|
| Apa | Kebijakan, peran, kepemilikan, proses ("aturan main") | Kondisi aktual data ("hasilnya") |
| Pertanyaan kunci | Siapa boleh mendefinisikan/mengubah data? | Apakah data akurat, lengkap, konsisten, tepat waktu? |
| Contoh artefak | Kebijakan definisi metrik, peran steward, katalog | Skor akurasi, tingkat duplikasi, kelengkapan field |
| Hubungan | Sistem yang **menegakkan** kualitas | **Hasil** yang dijaga oleh governance |

### Tabel 3 — Governance ketat vs. governed self-service (untuk H2 #5)
| Aspek | Governance terlalu ketat | Governed self-service (seimbang) |
|---|---|---|
| Cakupan | Semua metrik di-*lock* | Hanya metrik inti bersama yang di-*lock* |
| Risiko | Birokratis, lambat, *shadow* spreadsheet | Perlu disiplin memilih metrik inti |
| Kelincahan analis | Rendah | Tinggi di luar metrik inti |
| Kepercayaan | Tinggi tapi tak terpakai | Tinggi dan terpakai |

## Edge cases & nuance

- **Governance bukan proyek teknologi, tapi organisasional.** Poin Gartner: 80% gagal karena tak terkait hasil bisnis/krisis — bukan karena tool kurang canggih. Semantic layer/Datasphere adalah *enabler*, bukan pengganti kesepakatan definisi antar-manusia. Jangan biarkan artikel menyiratkan "beli SAP → masalah selesai".
- **Semantic layer ≠ satu database fisik.** SSOT sering disalahpahami sebagai "gabungkan semua data ke satu tempat". Justru dengan *virtualization* dan *live connection*, data bisa tetap di sumbernya sementara **definisi**-nya yang disatukan. Ini nuansa penting agar tidak menyesatkan.
- **OSI masih baru (v1.0 Jan 2026).** Adopsi native lintas platform baru dalam tahap awal (roadmap 2026). Tulis sebagai "tren/standar yang sedang naik", bukan sesuatu yang sudah universal dipakai. SAP bukan tercantum sebagai anggota inti OSI dalam sumber yang ditemukan — **jangan** klaim Datasphere "mendukung OSI" tanpa sumber (lihat Flags).
- **"Governance berlebihan membunuh BI"** (H2 #5) adalah sudut jujur yang membedakan artikel ini. Rangka: mulai dari metrik yang paling sering diperdebatkan, bukan seluruh kamus data.
- **Metrics layer vs semantic layer** batasannya cair antar-vendor. Frasakan "umumnya"/"sering dipahami sebagai" agar tidak terkesan definisi mutlak.

## Flags (open factual risk)

- ⚠️ **Angka "67% organisasi trust rendah pada data"** (dari brief E-E-A-T): **tidak terkonfirmasi bersih**. Sumber yang ada memberi angka berbeda — 75% eksekutif tak percaya penuh pada datanya (HFS Research, ±2022, via RTInsights); 70% menganggap arsitektur data tak "world class". → **Rekomendasi**: JANGAN tulis "67%". Pakai angka teratribusi "±75% eksekutif tidak memiliki kepercayaan tinggi pada datanya (HFS Research)" ATAU frasakan kualitatif ("mayoritas pemimpin bisnis tidak sepenuhnya mempercayai data mereka"). Angka HFS agak lama — bingkai sebagai tren umum, bukan data 2026.
- ⚠️ **Klaim "SAP Datasphere mendukung Open Semantic Interchange"**: **tidak ditemukan** dalam sumber SAP-official maupun daftar anggota OSI yang diperiksa. → **Rekomendasi**: JANGAN kaitkan Datasphere ke OSI secara eksplisit. Bahas OSI sebagai tren industri vendor-netral, dan Datasphere sebagai contoh lapisan semantik terpisah. Jika penulis ingin menautkan, frasakan "tren yang searah dengan pendekatan lapisan semantik SAP", tanpa klaim dukungan resmi.
- ⚠️ **Halaman gartner.com tidak dapat di-fetch langsung (HTTP 403).** Angka 80%/2027, alasan, tanggal (28 Feb 2024), dan analis (Saul Judah) dikonfirmasi via hasil pencarian resmi Gartner + ringkasan BizTechReports yang konsisten. → **Rekomendasi**: aman dikutip sebagai "prediksi Gartner (2024)"; tautkan URL press release resmi (valid, hanya diblokir untuk bot fetch). Catatan tanggal: judul URL tertanggal 2024-02-28; beberapa liputan menulis 2024-02-29 — gunakan **28 Februari 2024** (dari URL resmi Gartner).
- ⚠️ **Definisi metrics layer vs semantic layer** bervariasi antar-vendor (bukan istilah baku tunggal). → **Rekomendasi**: frasakan "umumnya dipahami sebagai…"; hindari mengklaim ada satu definisi otoritatif.

## Definition snippet draft (40–60 words)

> **Single source of truth (SSOT)** dalam Business Intelligence adalah satu rujukan resmi tempat setiap metrik dan data bisnis didefinisikan secara konsisten, sehingga seluruh divisi memakai angka yang sama. SSOT bukan sekadar satu database, melainkan satu definisi metrik yang disepakati dan ditegakkan lewat lapisan semantik serta tata kelola data — fondasi agar dashboard benar-benar dipercaya. *(52 kata)*
