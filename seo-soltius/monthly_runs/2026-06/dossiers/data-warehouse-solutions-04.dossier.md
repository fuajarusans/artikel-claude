---
brief_id: "data-warehouse-solutions-04"
researcher_run_date: "2026-06-02"
sources_cited: 12
flags: 4
---

# Research Dossier: SAP Datasphere vs SAP BW/4HANA: Mana yang Tepat untuk Bisnis Anda di 2026?

## TL;DR for the writer

- SAP BW/4HANA is **not** approaching end-of-life — it is aligned to SAP S/4HANA's maintenance commitment through at least **2040**, making "BW/4HANA is dying, migrate now" a false narrative. The real urgency applies to **SAP BW 7.5** (legacy), which ends mainstream maintenance in 2027.
- SAP Datasphere is SAP's cloud-native data fabric platform on SAP BTP, designed primarily for data federation, virtualization, and multi-source integration (not just SAP data). It does not replace BW/4HANA outright — it serves different use cases and profiles.
- SAP Business Data Cloud (BDC) was announced and launched February 13, 2025 as a fully managed SaaS bundle integrating SAP Datasphere + SAP Analytics Cloud + SAP BW 7.5/BW/4HANA private cloud + SAP Databricks; it is the convergence path for companies that don't want to choose just one.
- The decision framework should be driven by 5 factors: data source profile (SAP-centric vs multi-source), existing BW investment size, team capability (BW modelers vs cloud data engineers), real-time/streaming need, and greenfield vs brownfield project type.
- SAP Datasphere pricing is capacity-unit based (USD-denominated, enterprise minimums substantial); exact current figures are not confirmed from SAP's pricing page (blocked), so the writer should use a range with a caveat to verify directly with Soltius/SAP.

---

## Core facts (verified)

> **Claim**: SAP BW/4HANA mainstream maintenance is aligned with SAP S/4HANA and extends through at least 2040
> **Number/specific**: SAP formally extended BW/4HANA maintenance to align with S/4HANA's innovation commitment, with SAP pledging S/4HANA support through 2040
> **Source**: SAP Community blog — "SAP BW/4HANA to extend maintenance in alignment with SAP Business Suite and SAP S/4HANA" (community.sap.com/t5/technology-blog-posts-by-sap/sap-bw-4hana-to-extend-maintenance-in-alignment-with-sap-business-suite-and/ba-p/13457952); SAP Maintenance Strategy page (support.sap.com/en/release-upgrade-maintenance/maintenance-information/maintenance-strategy/s4hana-business-suite7.html, accessed 2026-06-02)
> **Confidence**: high

> **Claim**: SAP BW 7.5 (legacy NetWeaver-based BW) has a different and shorter maintenance window than SAP BW/4HANA
> **Number/specific**: SAP BW 7.5 mainstream maintenance ends 2027; extended maintenance available through 2030
> **Source**: SAP Community — "Maintenance strategy for SAP NetWeaver 7.5 fully aligned with SAP Business Suite 7" (community.sap.com/t5/technology-blog-posts-by-sap/maintenance-strategy-for-sap-netweaver-7-5-fully-aligned-with-sap-business/ba-p/13456253); SAP Product Availability Matrix (PAM), accessed 2026-06-02
> **Confidence**: high

> **Claim**: SAP Business Data Cloud was launched on February 13, 2025
> **Number/specific**: Announced February 13, 2025 at an SAP event; partnership with Databricks announced the same day
> **Source**: SAP News Center — "SAP Debuts Business Data Cloud with Databricks to Turbocharge Business AI" (news.sap.com/2025/02/sap-business-data-cloud-databricks-turbocharge-business-ai/, accessed 2026-06-02)
> **Confidence**: high

> **Claim**: SAP Business Data Cloud (BDC) is a fully managed SaaS bundle integrating multiple SAP data/analytics components
> **Number/specific**: Components include SAP Datasphere (data modeling, integration, semantic layer), SAP Analytics Cloud (analytics and planning), SAP BW 7.5/BW/4HANA private cloud (legacy BW migration path), and SAP Databricks (data engineering, ML/AI on Apache Spark)
> **Source**: SAP Community — "SAP Business Data Cloud — FAQs" (community.sap.com/t5/technology-blog-posts-by-sap/sap-business-data-cloud-faqs/ba-p/14022781); SAP News Center announcement, February 2025
> **Confidence**: high

> **Claim**: SAP Datasphere originated from SAP Data Warehouse Cloud and runs on SAP Business Technology Platform (BTP)
> **Number/specific**: SAP renamed SAP Data Warehouse Cloud (launched 2019) to SAP Datasphere in 2023; it runs natively on SAP BTP as a cloud-native SaaS offering
> **Source**: SAP product documentation and community resources (community.sap.com/t5/technology-blog-posts-by-sap/sap-business-data-cloud-and-what-it-means-for-sap-datasphere/ba-p/14036678, accessed 2026-06-02)
> **Confidence**: high

> **Claim**: SAP Datasphere supports data federation (access data where it lives without physically copying it)
> **Number/specific**: SAP Datasphere's data federation capability allows querying remote data sources via virtual tables / data access connections without ETL copy; SAP officially markets this as part of its "business data fabric" architecture
> **Source**: SAP Datasphere product page (sap.com/products/data-cloud/datasphere.html); SAP BDC community posts, 2025
> **Confidence**: high — "data federation" is SAP's official terminology; "zero-copy" as a marketing descriptor is used by SAP partners/community but the official SAP term for the capability is "data federation" or "virtual access"

> **Claim**: SAP BW/4HANA is the next-generation SAP BW, running on in-memory SAP HANA
> **Number/specific**: Released 2016; successor to SAP NetWeaver BW; designed exclusively for HANA; supports on-premise, private cloud, and hybrid deployments
> **Source**: SAP product documentation (help.sap.com); SAP community migration decision blog (community.sap.com/t5/technology-blog-posts-by-members/the-sap-bw-migration-decision-your-real-options-in-2026/ba-p/14359306, accessed 2026-06-02)
> **Confidence**: high

> **Claim**: SAP BW Migration Decision in 2026 — there are multiple valid paths (BW/4HANA, Datasphere, skip to BDC), not just one
> **Number/specific**: Community analysis from 2026 identifies: (1) migrate BW 7.5 → BW/4HANA (mature, lower retraining cost), (2) migrate BW 7.5 → SAP Datasphere (cloud-native, more multi-source), (3) skip both and go directly to SAP BDC (managed, converged), (4) keep BW 7.5 on extended maintenance through 2030 and decide later
> **Source**: SAP Community — "The SAP BW Migration Decision: Your Real Options in 2026" (community.sap.com/t5/technology-blog-posts-by-members/the-sap-bw-migration-decision-your-real-options-in-2026/ba-p/14359306, accessed 2026-06-02)
> **Confidence**: medium — community blog post (SAP community member, not SAP official); content credible and consistent with official SAP docs, but not an SAP official position paper

> **Claim**: SAP Datasphere pricing is based on Capacity Units (CUs)
> **Number/specific**: SAP Datasphere uses a Capacity Unit (CU) consumption-based model; analyst and partner sources (2024–2025) cited USD 12–15 per CU per year with enterprise minimums in the range of 4,000–5,000 CUs; direct confirmation from SAP pricing page was not obtainable (page returned HTTP 403)
> **Source**: Indirect — cited in multiple SAP partner and analyst blog posts; SAP pricing page (sap.com/products/data-cloud/datasphere/pricing.html) returned 403 on 2026-06-02
> **Confidence**: medium — specific USD figure could not be confirmed from SAP official; writer should recommend readers verify current pricing with Soltius/SAP directly

> **Claim**: SAP Datasphere includes SAP Knowledge Graph and Joule AI agents as part of the broader BDC ecosystem
> **Number/specific**: SAP BDC announcement (February 2025) explicitly names SAP Knowledge Graph and Joule AI agents as part of the BDC platform's AI-readiness layer
> **Source**: SAP News Center, February 13, 2025 announcement (news.sap.com/2025/02/sap-business-data-cloud-databricks-turbocharge-business-ai/, accessed 2026-06-02)
> **Confidence**: high — for BDC-level capabilities; for Datasphere standalone (without BDC bundle), AI capabilities are more limited

> **Claim**: SAP Analytics Cloud (SAC) is the BI layer that sits on top of both SAP Datasphere and SAP BW/4HANA
> **Number/specific**: SAC is SAP's cloud-native BI, planning, and predictive analytics tool; it consumes data from both Datasphere and BW/4HANA as Live Data Connections or import-mode
> **Source**: SAP product documentation; SAP BDC components description (community.sap.com, 2025)
> **Confidence**: high

> **Claim**: SAP Datasphere is positioned primarily for multi-source (SAP + non-SAP) data integration scenarios; SAP BW/4HANA is stronger for structured SAP-centric analytics with complex transformation logic
> **Number/specific**: SAP's own positioning confirms Datasphere for "business data fabric" (cross-system, open ecosystem), BW/4HANA for organizations with deep BW investment and SAP-centric reporting; the two are not direct substitutes
> **Source**: SAP Community blog — "SAP Business Data Cloud and what it means for SAP Datasphere" (community.sap.com/t5/technology-blog-posts-by-sap/sap-business-data-cloud-and-what-it-means-for-sap-datasphere/ba-p/14036678, accessed 2026-06-02)
> **Confidence**: high

> **Claim**: Soltius Indonesia is an SAP Platinum Certified Channel Partner and member of United VARs with Data Management and Data and AI Consulting capabilities
> **Number/specific**: Established 1998; 200+ consultants; 120+ clients; SAP Platinum Partner; Data Management and Data and AI Consulting listed as active services
> **Source**: knowledge_base/company_profile.md (verified Soltius internal profile)
> **Confidence**: high

---

## Solution focus + Soltius anchor (from product_matrix.md)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| SAP Datasphere | Cloud-native on SAP BTP; data federation/virtualization (no ETL copy for federated queries); data cataloging; semantic modeling; multi-source (SAP + non-SAP); renamed from SAP Data Warehouse Cloud (2023); pricing: CU-based (exact current figure: verify with SAP/Soltius) | H2 #1 (definition), H2 #2 (comparison table), H2 #3 (decision) | Data and AI Consulting + Data Management solution |
| SAP BW/4HANA | Next-gen SAP BW (2016); HANA in-memory; on-premise or private cloud; mature, production-hardened; rich transformation layer (HANA Calculation Views, Advanced DSO); NOT end-of-life — maintained through 2040 (aligned S/4HANA); ideal for structured SAP-centric analytics | H2 #1 (definition), H2 #2 (comparison table), H2 #5 (honest/counter-conventional) | Data Management solution |
| SAP Business Data Cloud (BDC) | Announced Feb 13, 2025; managed SaaS bundle: Datasphere + SAC + BW 7.5/BW/4HANA private cloud + SAP Databricks; convergence path for companies already running BW who also want cloud-native AI/analytics | H2 #4 (BDC section) | SAP Platinum Partner implementation anchor |
| SAP HANA Cloud | Underlying in-memory cloud database for both Datasphere and BW/4HANA Cloud editions; mention for E-E-A-T but don't make article a technical treatise | Brief mention in H2 #2 | Not the CTA anchor for this article |
| SAP Analytics Cloud (SAC) | BI and planning layer atop both platforms; mention to complete the architectural picture | H2 #4 + FAQ | Not primary CTA anchor |

**Soltius framing reminder:** Soltius implements, migrates, and supports SAP solutions — it does not build them. Max 2–3 mentions: (1) mid-article when naming Datasphere + BW/4HANA as "solutions Soltius implements" and (2) the closing CTA.

---

## Authoritative external sources (for the writer to link out)

1. **SAP News Center — "SAP Debuts Business Data Cloud with Databricks to Turbocharge Business AI" (February 13, 2025)** — https://news.sap.com/2025/02/sap-business-data-cloud-databricks-turbocharge-business-ai/ — *what it backs*: BDC launch date, components, and Databricks partnership

2. **SAP Support — S/4HANA and Business Suite Maintenance Strategy (Innovation Commitment until 2040)** — https://support.sap.com/en/release-upgrade-maintenance/maintenance-information/maintenance-strategy/s4hana-business-suite7.html — *what it backs*: SAP BW/4HANA maintenance commitment through 2040 (aligned with S/4HANA)

3. **SAP Community — "SAP BW/4HANA to extend maintenance in alignment with SAP Business Suite and SAP S/4HANA"** — https://community.sap.com/t5/technology-blog-posts-by-sap/sap-bw-4hana-to-extend-maintenance-in-alignment-with-sap-business-suite-and/ba-p/13457952 — *what it backs*: official alignment of BW/4HANA maintenance with S/4HANA

4. **SAP Community — "SAP Business Data Cloud and what it means for SAP Datasphere"** — https://community.sap.com/t5/technology-blog-posts-by-sap/sap-business-data-cloud-and-what-it-means-for-sap-datasphere/ba-p/14036678 — *what it backs*: Datasphere positioning within the BDC ecosystem, product differentiation

5. **SAP Community — "The SAP BW Migration Decision: Your Real Options in 2026"** — https://community.sap.com/t5/technology-blog-posts-by-members/the-sap-bw-migration-decision-your-real-options-in-2026/ba-p/14359306 — *what it backs*: multi-path migration framework for 2026 decision-makers (cite as community analysis, not SAP official position)

---

## FAQ Q&As (7 drafted, Bahasa Indonesia)

### Apakah SAP Datasphere dan SAP BW/4HANA adalah produk yang sama?

Tidak. SAP Datasphere adalah platform data cloud-native di atas SAP BTP yang mengutamakan federasi data lintas sistem SAP dan non-SAP — ia menggantikan nama SAP Data Warehouse Cloud sejak 2023. SAP BW/4HANA adalah generasi terbaru dari SAP BW berbasis in-memory HANA yang dioptimalkan untuk analitik terstruktur berpusat ekosistem SAP. Keduanya dapat berjalan bersamaan dan sama-sama didukung SAP dalam jangka panjang.

### Apakah SAP BW/4HANA akan dihentikan dukungannya?

Tidak dalam waktu dekat. SAP secara resmi menyelaraskan komitmen maintenance SAP BW/4HANA dengan SAP S/4HANA — artinya dukungan dijamin minimal hingga tahun 2040. Yang memiliki tekanan timeline lebih pendek adalah SAP BW 7.5 (generasi lama berbasis NetWeaver), yang mainstream maintenance-nya berakhir 2027 dengan opsi extended maintenance sampai 2030. Jika perusahaan masih menggunakan BW 7.5, inilah yang perlu segera dievaluasi, bukan BW/4HANA.

### Kapan sebaiknya memilih SAP Datasphere, bukan SAP BW/4HANA?

Pilih SAP Datasphere jika: (1) data perusahaan tersebar di banyak sistem non-SAP (Salesforce, PostgreSQL, cloud storage) dan Anda butuh federasi lintas platform; (2) proyek bersifat greenfield tanpa warisan investasi BW; (3) tim Anda lebih nyaman dengan arsitektur cloud-native dan data engineering modern; atau (4) Anda ingin integrasi langsung dengan AI/ML workload. BW/4HANA lebih tepat jika Anda sudah memiliki model BW yang kompleks dan tim dengan expertise BW dalam.

### Apa itu SAP Business Data Cloud dan siapa yang cocok menggunakannya?

SAP Business Data Cloud (BDC) adalah paket SaaS terkelola penuh yang diluncurkan 13 Februari 2025. BDC mengintegrasikan SAP Datasphere, SAP Analytics Cloud, SAP BW/4HANA private cloud, dan SAP Databricks dalam satu platform. BDC paling cocok untuk perusahaan yang tidak ingin memilih antara Datasphere atau BW/4HANA — mereka bisa menjalankan keduanya dalam satu ekosistem terkelola, dilengkapi kemampuan AI/ML dari Databricks.

### Bisakah SAP Datasphere dan SAP BW/4HANA digunakan bersamaan?

Ya. Dalam arsitektur SAP Business Data Cloud, keduanya beroperasi secara komplementer: BW/4HANA menangani lapisan data warehouse terstruktur berbasis SAP, sementara Datasphere menyediakan federasi dan integrasi lintas sistem. Di luar BDC pun, banyak perusahaan menjalankan BW/4HANA sebagai sumber data SAP yang kemudian difederasikan melalui Datasphere untuk digabungkan dengan data non-SAP sebelum masuk ke SAP Analytics Cloud.

### Berapa estimasi biaya SAP Datasphere untuk enterprise?

SAP Datasphere menggunakan model berbasis Capacity Units (CU) — jumlah CU menentukan kapasitas komputasi dan storage yang tersedia. Referensi dari berbagai sumber mitra SAP menyebut kisaran USD 12–15 per CU per tahun, dengan minimum pembelian enterprise di kisaran 4.000–5.000 CU. Namun angka ini berubah dan sangat bergantung pada kontrak, volume, dan bundling. Untuk kepastian harga, konsultasikan langsung dengan SAP atau mitra implementasi seperti Soltius yang dapat memberikan simulasi TCO sesuai kebutuhan spesifik perusahaan.

### Bagaimana langkah awal migrasi dari SAP BW ke SAP Datasphere?

Langkah pertama adalah mengevaluasi inventaris objek BW yang ada: berapa banyak InfoProvider, transformasi, dan process chain yang aktif digunakan versus yang sudah usang. SAP menyediakan berbagai transfer tool dan konversi semi-otomatis untuk objek BW ke Datasphere. Setelah itu, tetapkan apakah migrasi dilakukan secara bertahap (hybrid BW/4HANA + Datasphere) atau sekaligus. Keterlibatan mitra implementasi berpengalaman sejak fase assessment sangat menentukan realistisnya timeline dan anggaran migrasi.

---

## Data tables for the writer

### Perbandingan: SAP Datasphere vs SAP BW/4HANA di 2026

| Aspek | SAP Datasphere | SAP BW/4HANA |
|---|---|---|
| **Tipe platform** | Cloud-native SaaS (SAP BTP) | On-premise / Private Cloud / Hybrid |
| **Arsitektur** | Data fabric — federasi + virtualisasi + modeling | Data warehouse — HANA in-memory + layer transformasi BW |
| **Cocok untuk** | Multi-source (SAP + non-SAP), greenfield, federasi data real-time | SAP-centric analytics, investasi BW yang sudah besar, structured reporting |
| **Integrasi non-SAP** | Native (Salesforce, Snowflake, PostgreSQL, S3, dll.) | Terbatas (perlu SAP LT Connector / middleware) |
| **Kematangan / maturity** | Relatif baru (2019 sebagai SAP DWC → Datasphere 2023) | Sangat mature (2016, generasi ke-3 SAP BW sejak 1999) |
| **Maintenance timeline** | SAP BTP roadmap jangka panjang | Dijamin ≥2040 (aligned dengan S/4HANA) |
| **Pricing model** | Capacity Unit (CU) — konsumsi berbasis cloud | HANA license + infrastruktur (on-prem) atau subscription (private cloud) |
| **Profil tim ideal** | Cloud data engineer, Python/SQL, modern ETL | BW/HANA modeler, ABAP awareness, SAP-specific skills |
| **Cocok dengan BDC?** | Ya (komponen utama BDC) | Ya (BW/4HANA private cloud masuk bundle BDC) |
| **Ideal untuk greenfield** | Sangat cocok | Kurang ideal (lebih untuk brownfield existing BW) |

### Decision Tree: 5 Pertanyaan Kunci

| Pertanyaan | Jawaban Mengarah ke Datasphere | Jawaban Mengarah ke BW/4HANA |
|---|---|---|
| Dari mana sebagian besar data Anda? | Multi-source (SAP + non-SAP) | Hampir semua dari ekosistem SAP |
| Seberapa besar investasi BW yang sudah ada? | Kecil atau tidak ada | Besar — banyak model dan proses yang berjalan |
| Profil tim data Anda? | Cloud-native engineers, SQL/Python | BW modelers, ABAP-aware, SAP-specialist |
| Apakah real-time streaming analytics diprioritaskan? | Ya | Tidak, batch reporting sudah cukup |
| Greenfield atau migration project? | Greenfield | Migration dari SAP BW 7.5 yang sudah besar |

---

## Edge cases & nuance

- **"SAP BW/4HANA is dying" adalah miskonsepsi yang harus diluruskan secara eksplisit.** Artikel harus mendahului narasi ini — banyak konten di internet (termasuk dari vendor Datasphere) yang memberi kesan BW/4HANA akan segera EOL. Faktanya, SAP berkomitmen maintenance minimal hingga 2040. Yang EOL adalah BW 7.5 (2027/2030), bukan BW/4HANA.

- **SAP Business Data Cloud (BDC) mengubah framing "pilih satu".** Sejak Februari 2025, perusahaan tidak harus memilih antara Datasphere atau BW/4HANA — BDC adalah jalur konvergensi. Artikel perlu mencantumkan opsi ini agar decision framework tetap relevan dan akurat untuk 2026.

- **Biaya migrasi ke Datasphere sering diremehkan.** Migrasi bukan sekadar memindahkan objek BW. Perusahaan harus menghitung ulang biaya retraining tim, konversi model data, redevelopment transformasi yang tidak dapat dikonversi otomatis, dan continuous cloud consumption cost. TCO Datasphere bisa lebih tinggi dari on-premise BW/4HANA dalam 3–5 tahun pertama untuk perusahaan dengan volume data besar.

- **Pricing SAP Datasphere tidak transparan secara publik.** Angka USD 12–15/CU/tahun yang beredar di komunitas bisa berubah, dan minimum purchase dalam kontrak enterprise berbeda dari list price. Jangan kutip sebagai angka pasti — sajikan sebagai referensi kisaran dengan anjuran konsultasi langsung.

- **SAP Datasphere bukan pengganti SAP Analytics Cloud (SAC).** Datasphere adalah lapisan data/warehousing; SAC adalah lapisan BI/visualization/planning. Perbedaan ini penting agar pembaca tidak bingung antara tiga produk SAP yang seringkali disebut bersamaan.

- **Untuk perusahaan Indonesia yang sedang dalam S/4HANA migration:** keputusan data warehouse sangat terkait dengan apakah mereka memilih S/4HANA Cloud (public/private edition) atau S/4HANA on-premise. S/4HANA Cloud public edition memiliki embedded analytics yang mengurangi kebutuhan standalone BW/4HANA; sebaliknya S/4HANA on-prem lebih sering dipasangkan dengan BW/4HANA atau Datasphere sebagai dedicated layer.

---

## Flags (open factual risk)

- ⚠️ **SAP Datasphere pricing (USD 12–15/CU/year, ~4.000–5.000 CU minimum)**: SAP pricing page tidak dapat diakses (HTTP 403) pada 2026-06-02. Angka ini beredar di komunitas mitra SAP dan analisis 2024–2025 tetapi tidak dikonfirmasi dari SAP official pricing page terbaru. Recommendation: sajikan sebagai "kisaran referensi dari sumber komunitas mitra SAP" dan sarankan pembaca berkonsultasi langsung ke Soltius/SAP untuk harga actual 2026. Jangan kutip sebagai angka pasti SAP.

- ⚠️ **"Zero-copy federation" sebagai terminologi SAP resmi**: "Zero-copy" adalah istilah yang digunakan oleh komunitas dan mitra SAP, tetapi SAP sendiri lebih sering menggunakan "data federation" atau "virtual access" dalam dokumentasi resminya. Recommendation: gunakan "federasi data" atau "akses virtual" sebagai istilah utama; "zero-copy" boleh muncul sebagai penjelasan konsep dalam tanda kutip, bukan klaim teknis yang diattribusikan ke SAP.

- ⚠️ **SAP BDC General Availability date dan komponen final**: Announcement February 2025 menyebut "controlled availability" sebelum GA di April 2025. Tidak terverifikasi apakah komponen BW/4HANA private cloud benar-benar telah GA sepenuhnya per Juni 2026, atau apakah ada perubahan bundling. Recommendation: framing BDC sebagai solusi yang "tersedia sejak 2025" sudah aman; hindari klaim tentang feature completeness yang sangat spesifik tanpa konfirmasi terbaru.

- ⚠️ **"SAP BW 7.5 skipping to Datasphere" vs "BW/4HANA first"**: Community blog dari 2026 membahas opsi ini (termasuk argumen skip BW/4HANA langsung ke Datasphere), tetapi ini adalah community member opinion, bukan panduan resmi SAP. Recommendation: sajikan sebagai salah satu opsi yang dipertimbangkan praktisi, dengan catatan bahwa pilihan terbaik bergantung pada profil spesifik perusahaan dan rekomendasi implementation partner.

---

## Definition snippet draft (40–60 words, Bahasa Indonesia)

> SAP Datasphere adalah platform data cloud-native di atas SAP BTP yang mendukung federasi data lintas sistem SAP dan non-SAP tanpa harus menyalin data secara fisik. SAP BW/4HANA adalah data warehouse enterprise berbasis in-memory HANA yang mature dan didukung SAP minimal hingga 2040. Keduanya dapat diintegrasikan dalam SAP Business Data Cloud yang diluncurkan Februari 2025.

---

## Notes for image-planner

- **Concept 1 — Comparison infographic (2-column table visual)**: Visual representation of the SAP Datasphere vs SAP BW/4HANA comparison table — two columns with icons representing deployment model (cloud vs server), data source mix (multi-source vs SAP-centric), team profile, and maintenance timeline. Clean, decision-tool aesthetic.

- **Concept 2 — Decision tree / flowchart**: Visual decision tree for "Mana yang tepat untuk bisnis Anda?" — starting from "Apakah data Anda multi-source?" branching to Datasphere or BW/4HANA, with a third branch converging to BDC. Numbered nodes, simple flowchart style, branded colors.

- **Concept 3 — SAP BDC architecture diagram**: Diagram showing the SAP Business Data Cloud umbrella — four components (Datasphere, SAP Analytics Cloud, BW/4HANA private cloud, SAP Databricks) as blocks within a single managed SaaS container, with arrows showing data flow from SAP systems and non-SAP systems into the platform, then up to analytics/AI. Position as the "convergence" visual for H2 #4.
