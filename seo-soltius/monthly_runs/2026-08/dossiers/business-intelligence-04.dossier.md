---
brief_id: "business-intelligence-04"
researcher_run_date: "2026-06-08"
sources_cited: 18
flags: 5
---

# Research Dossier: Cara Mendesain Dashboard BI yang Benar-Benar Dipakai (Bukan Diabaikan)

## TL;DR for the writer

- The central tension the article must resolve: most BI dashboards fail not because of bad technology but because of low adoption — Gartner research puts BI tool usage at only 25–35% of employees, essentially flat for years. Design quality is one lever; data literacy, governance, and workflow integration are the others. The article must be honest about this multi-causal picture.
- Cognitive-load research (George Miller's 7±2 principle) underpins the KPI-number recommendation: 5–7 KPIs per view is well-supported for executive dashboards; operational dashboards can stretch to 7–9. The "engagement drops above 12" framing is plausible but not from a single citable study — frame it as practitioner consensus rather than a hard threshold.
- Nielsen Norman Group's F-pattern research (landmark eye-tracking studies, 2006, updated 2017) is the authoritative source for why KPI placement at the top-left matters. It is the correct citation for visual hierarchy justification.
- SAP Analytics Cloud (SAC) uses "Stories" as its canonical term for dashboards/reports. Augmented-analytics features are named: Smart Insights, Smart Discovery, Smart Predict, and "Just Ask" (natural language query, GA Q1 2024). SAP has renamed the "Augmented Analytics" umbrella to "AI for Planning and Analytics." These names are confirmed via SAP official documentation and community.
- Gartner's "decision-centric" framing (2024–2025) is the strongest authoritative anchor for the article's honest counter-conventional H2 (#5): the shift from "more dashboards" to "decisions embedded in workflows." Use it with attribution — it adds credibility the SERP competitors lack.

---

## Core facts (verified)

> **Claim 1**: BI and analytics tools are used by only a fraction of enterprise employees.
> **Number/specific**: Gartner research puts BI and analytics tool penetration at 25–35% of the workforce, with that figure essentially flat over multiple years. One TechTarget summary of Gartner data (referencing Gartner document 3753469) cites ~30% of employees on average.
> **Source**: Gartner, "Survey Analysis: Why BI and Analytics Adoption Remains Low and How to Expand Its Reach" (document 3753469, paywall), reported by TechTarget — https://www.techtarget.com/searchbusinessanalytics/news/365530077/BI-adoption-poised-to-break-through-barrier-finally; accessed 2026-06-08.
> **Confidence**: high (Gartner research cited consistently across multiple independent sources over multiple years)

---

> **Claim 2**: Most organizations use data to justify pre-existing decisions rather than drive them.
> **Number/specific**: According to Gartner research, 65% of organizations still use data selectively to justify decisions already made, rather than allowing data to genuinely drive decision-making.
> **Source**: Gartner, cited in Linkurious analysis "From data-centric to decision-centric: Insights from Gartner Data & Analytics 2024" — https://linkurious.com/blog/gartner-data-and-analytics-2024/; accessed 2026-06-08.
> **Confidence**: medium (figure sourced from a secondary reference to Gartner research; Gartner underlying document not directly accessible due to paywall — phrase as "according to Gartner" with this limitation noted)

---

> **Claim 3**: Gartner predicts a major shift from "data-driven" to "decision-centric" analytics by 2028.
> **Number/specific**: By 2028, 25% of CDAO vision statements will become "decision-centric," surpassing the "data-driven" framing. By 2025, 60% of ABI platforms claimed to enable decision intelligence, but only 10% had a decision-centric UI.
> **Source**: Gartner, "Gartner Identifies Top Trends in Data and Analytics for 2025" — https://www.gartner.com/en/newsroom/press-releases/2025-03-05-gartner-identifies-top-trends-in-data-and-analytics-for-2025; accessed 2026-06-08.
> **Confidence**: high

---

> **Claim 4**: More than half of chief data and analytics officers (CDAOs) will secure funding for data literacy programs by 2027.
> **Number/specific**: Gartner predicts that by 2027, more than 50% of CDAOs will secure funding for data literacy and AI literacy programs; 83% of CDAOs report their organization already has a data literacy program in progress or plans to deploy one within 12 months. Poor data literacy ranks among the top 5 roadblocks to D&A success in Gartner's 2024 CDAO survey.
> **Source**: Gartner press release, "Gartner Predicts More Than 50% of CDAOs Will Secure Funding for Data Literacy and AI Literacy Programs by 2027" — https://www.gartner.com/en/newsroom/press-releases/2024-01-29-gartner-predicts-more-than-50-percent-of-cdaos-will-secure-funding-for-data-literacy-and-ai-literacy-programs-by-2027; accessed 2026-06-08.
> **Confidence**: high

---

> **Claim 5**: 80% of data and analytics governance initiatives will fail by 2027.
> **Number/specific**: Gartner predicts that 80% of D&A governance initiatives will fail by 2027 due to a lack of a real or manufactured crisis — underscoring that governance without organizational urgency does not stick.
> **Source**: Gartner press release, "Gartner Predicts 80% of D&A Governance Initiatives Will Fail by 2027" — https://www.gartner.com/en/newsroom/press-releases/2024-02-28-gartner-predicts-80-percent-of-data-and-analytics-governance-initiatives-will-fail-by-2027-due-to-a-lack-of-a-real-or-manufactured-crisis-; accessed 2026-06-08.
> **Confidence**: high

---

> **Claim 6**: The optimal number of KPIs per dashboard view is grounded in cognitive load theory.
> **Number/specific**: George Miller's foundational cognitive psychology research establishes that human working memory handles roughly 7±2 items simultaneously; practitioner consensus translates this to 5–7 KPIs for executive dashboards and up to 7–9 for operational dashboards checked frequently. Beyond 9 metrics on a single screen, comprehension drops and users begin skipping metrics. Executive dashboards perform best at 3–5 high-level KPIs.
> **Source**: Multiple practitioner sources converging on Miller's foundational work. Practitioner synthesis: Fegno, "Designing Enterprise Dashboards with Cognitive Load Theory" — https://www.fegno.com/designing-enterprise-dashboards-with-cognitive-load-theory/ (cites Miller); ClearPoint Strategy, "KPI Dashboard Best Practices" — https://www.clearpointstrategy.com/blog/kpi-dashboard-best-practices; accessed 2026-06-08. Miller's original paper: George A. Miller, "The Magical Number Seven, Plus or Minus Two," Psychological Review, 1956.
> **Confidence**: medium-high (the 5–7 / 7–9 ranges are practitioner consensus informed by cognitive science; the "12 causes engagement drop" threshold is claimed by multiple practitioners but not from a single controlled study — present as practitioner consensus, not a law)

---

> **Claim 7**: Users scan digital interfaces in an F-shaped pattern, not linearly — making top-left placement of primary KPIs critical.
> **Number/specific**: Nielsen Norman Group's landmark eye-tracking studies, originally published in 2006 and updated in 2017, found that users scan web content in an F-shaped pattern: a horizontal sweep across the top, a second shorter horizontal sweep lower, then a vertical scan down the left side. This pattern applies on both desktop and mobile.
> **Source**: Nielsen Norman Group, "F-Shaped Pattern of Reading on the Web: Misunderstood, But Still Relevant (Even on Mobile)" — https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/; "Text Scanning Patterns: Eyetracking Evidence" — https://www.nngroup.com/articles/text-scanning-patterns-eyetracking/; accessed 2026-06-08.
> **Confidence**: high

---

> **Claim 8**: Edward Tufte's data-ink ratio principle provides the authoritative framework for eliminating chart clutter.
> **Number/specific**: Tufte's data-ink ratio, introduced in "The Visual Display of Quantitative Information" (1983), defines the proportion of ink presenting actual data versus total ink. The principle: maximize the data-ink ratio by eliminating non-data-ink (gridlines, 3D effects, decorative shadows) — what Tufte calls "chartjunk." Tufte states: "The only thing worse than a pie chart is several of them."
> **Source**: Edward Tufte, "The Visual Display of Quantitative Information" (1983, 2001 edition); principle summarized at GeeksForGeeks "Mastering Tufte's Data Visualization Principles" — https://www.geeksforgeeks.org/data-visualization/mastering-tuftes-data-visualization-principles/; Chartbuddy — https://chartbuddy.io/blog/tuftes-principles-for-graphical-integrity; accessed 2026-06-08.
> **Confidence**: high

---

> **Claim 9**: Stephen Few explicitly warns against pie charts in business dashboards.
> **Number/specific**: Stephen Few, author of "Show Me the Numbers" (2004) and "Information Dashboard Design" (2006), is the practitioner authority on dashboard design. His quote: "Save the pies for dessert." His work emphasizes that the human eye cannot accurately compare angular segments in pie charts, especially when there are more than 3–4 slices.
> **Source**: Stephen Few, referenced via multiple visualization educators; Perceptual Edge (Few's publication platform) — https://www.perceptualedge.com/articles/visual_business_intelligence/sometimes_we_must_raise_our_voices.pdf; accessed 2026-06-08. Few is the single most authoritative practitioner source for dashboard design.
> **Confidence**: high

---

> **Claim 10**: Dual-axis charts can mislead by manufacturing false visual correlations through independent axis manipulation.
> **Number/specific**: Dual-axis charts allow each y-axis scale to be set independently; by stretching one axis and compressing another, a chart creator can make any two datasets appear correlated or causally linked regardless of actual relationship. This makes dual-axis charts one of the most commonly misused chart types in BI dashboards.
> **Source**: PolicyViz, "Avoiding the Dual Axis Chart" — https://policyviz.com/2022/10/06/avoiding-the-dual-axis-chart/ (data visualization practitioner resource); PPCExpo, "Dual-Axis Charts: How to Avoid Misleading Visuals" — https://ppcexpo.com/blog/dual-axis-charts; accessed 2026-06-08.
> **Confidence**: high

---

> **Claim 11**: SAP Analytics Cloud uses "Stories" as its primary canvas for dashboard and report creation; augmented analytics features are named Smart Insights, Smart Discovery, Smart Predict, and Just Ask.
> **Number/specific**: SAP Analytics Cloud (SAC) Stories is the official product term for its dashboard/data-visualization canvas (as of SAP Help Portal documentation version 2023.20 and later 2024 releases). The augmented analytics suite — recently rebranded by SAP from "Augmented Analytics" to "AI for Planning and Analytics" — includes: Smart Insights (statistical textual insights on selected data points), Smart Discovery (automated exploration of KPI drivers using ML), Smart Predict (classification, regression, and time-series forecasting), and Just Ask (natural language query, generally available Q1 2024).
> **Source**: SAP Help Portal, "Augmented Analytics (Smart Features)" — https://help.sap.com/doc/00f68c2e08b941f081002fd3691d86a7/2023.20/en-US/cd897576c3344475a208c2f7a52f151e.html; SAP Community, "Artificial Intelligence for Planning & Analytics" — https://pages.community.sap.com/topics/cloud-analytics/ai-for-planning-and-analytics; SAP Learning, "Exploring SAP Analytics Cloud Smart Predict" — https://learning.sap.com/courses/applying-ai-powered-visualizations-and-augmented-analytics-to-business-data-in-sap-analytics-cloud; accessed 2026-06-08.
> **Confidence**: high (SAP official documentation)

---

> **Claim 12**: SAC implements role-based access control (RBAC) for Stories, enabling enterprise dashboard governance: who can create, edit, and view content is controlled through roles assigned to teams.
> **Number/specific**: In SAC, roles are collections of permissions controlling feature access and object-level authorization. Best practice is to assign roles to teams (not individual users), with a Public folder serving as the governed content area. Administrators can configure Data Access Control (DAC) to restrict data slices by region, user, or team.
> **Source**: SAP Help Portal, "Roles, Privileges and Data Access Control" — https://help.sap.com/docs/SAP_ANALYTICS_CLOUD/00f68c2e08b941f081002fd3691d86a7/5dec245fe7d449309b9bc4b1cfd214f6.html; SAP Community, "SAP Analytics Cloud: Best Practices for Folder Organization and Governance" — https://community.sap.com/t5/technology-blog-posts-by-members/sap-analytics-cloud-best-practices-for-folder-organization-and-governance/ba-p/14320771; accessed 2026-06-08.
> **Confidence**: high (SAP official documentation)

---

> **Claim 13**: SAP Analytics Cloud Horizon Theme and Optimized Design Experience (ODE) are the current design framework for Stories.
> **Number/specific**: SAC's Optimized Design Experience (ODE) provides an updated chart builder with consolidated chart types, undo/redo during design, performance optimization, and a story versioning framework (up to 10 versions). The Horizon theme — aligned with SAP Fiori design language — is available on all tenants from SAC Version 2025.14. A mass migration tool assists moving older Stories to the new design experience.
> **Source**: SAP Community, "Horizon Theme and Templates for Stories in SAP Analytics Cloud" — https://community.sap.com/t5/technology-blog-posts-by-sap/horizon-theme-and-templates-for-stories-in-sap-analytics-cloud/ba-p/13657027; SAP Community, "SAP Analytics Cloud's Optimized Design Experience (ODE): New Features and Improvements" — https://community.sap.com/t5/technology-blog-posts-by-members/sap-analytics-cloud-s-optimized-design-experience-ode-new-features-and/ba-p/13623544; accessed 2026-06-08.
> **Confidence**: high (SAP Community official blog posts by SAP)

---

> **Claim 14**: Dashboard adoption failure is primarily driven by misalignment with user workflow and decision contexts, not only design quality.
> **Number/specific**: Multiple practitioner analyses identify the core adoption failure pattern: dashboards are built in isolation from end users, optimize for technical completeness over decision relevance, and are launched without workflow integration — users check once, find limited decision value, and stop returning. Successful dashboards are co-created with users, embedded in their work context, and explicitly linked to decisions.
> **Source**: RevealBI, "Why Dashboard Adoption Fails (And How To Fix It)" — https://www.revealbi.io/blog/dashboard-adoption-problem; The Virtual Forge, "Why Dashboards Fail to Drive Decisions and How to Fix It" — https://www.thevirtualforge.com/company/blog/why-your-dashboards-arent-driving-decisions-and-how-to-fix-it; accessed 2026-06-08.
> **Confidence**: high (consistent across multiple practitioner analyses; backed by Gartner's "decisions not dashboards" theme)

---

> **Claim 15**: The "5-second rule" in dashboard usability holds that users should identify the main insight within 5 seconds.
> **Number/specific**: The 5-second rule is a recognized practitioner heuristic in dashboard UX: if the primary message or key insight is not identifiable within 5 seconds of first viewing, the dashboard layout has failed. This complements cognitive load theory — excessive visual complexity forces users to search rather than perceive.
> **Source**: Referenced in practitioner resources including Fegno "Designing Enterprise Dashboards with Cognitive Load Theory" — https://www.fegno.com/designing-enterprise-dashboards-with-cognitive-load-theory/ and UXPin "Effective Dashboard Design Principles for 2025" — https://www.uxpin.com/studio/blog/dashboard-design-principles/; accessed 2026-06-08.
> **Confidence**: medium (widely cited practitioner heuristic, not a peer-reviewed finding; frame as "praktisi merekomendasikan" rather than a law)

---

> **Claim 16**: SAP aims to integrate generative AI into major SAC workflows by end of 2025.
> **Number/specific**: According to SAP's stated roadmap as of 2024, SAP's goal is to integrate generative AI into the major workflows of SAP Analytics Cloud by end of 2025, with "Just Ask" (natural language query) as the first GA delivery (Q1 2024).
> **Source**: SAP Community, pages.community.sap.com/topics/cloud-analytics/ai-for-planning-and-analytics; SAP Community "What's New in SAP Analytics Cloud Release 2024.12" — https://community.sap.com/t5/technology-blog-posts-by-sap/what-s-new-in-sap-analytics-cloud-release-2024-12/ba-p/13731348; accessed 2026-06-08.
> **Confidence**: medium (stated roadmap; actual delivery may differ — note access date and frame as "roadmap")

---

## Solution focus + Soltius anchor (from product_matrix.md)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| SAP Analytics Cloud (SAC) — Stories | Stories is SAC's canvas for enterprise dashboards; supports templates, RBAC (role-based access control), story versioning, and Horizon/ODE design framework | Closing section; brief mid-article aside | Data and AI Consulting service |
| SAC Augmented Analytics / AI for Planning and Analytics | Named features: Smart Insights, Smart Discovery, Smart Predict, Just Ask (NLQ, GA Q1 2024). Use as "value-add" example — SAC can suggest chart types and surface anomalies automatically | One sentence in H2 #3 or definition context | — |
| Generic (vendor-neutral) principles | All design principles (F-pattern, KPI range, Tufte, Few) are vendor-neutral; SAC used only as an enterprise implementation example, not the sole tool | H2 #2, #3, #4 body | — |

**Reminder**: Soltius implements/migrates/supports SAC — it does not build it. Max 2–3 Soltius self-mentions total. Suggested placements: (1) one mid-article aside in H2 #2 or #3 ("dalam workshop dashboard, pertanyaan pertama yang kami ajukan bukan 'metrik apa', tapi 'keputusan apa'"); (2) one closing CTA anchored on Data and AI Consulting.

---

## Authoritative external sources (for the writer to link out)

1. **Nielsen Norman Group — "F-Shaped Pattern of Reading on the Web: Misunderstood, But Still Relevant" (2017 update of 2006 original)** — https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/ — *backs*: F-pattern eye-tracking rationale for top-left KPI placement and visual hierarchy section.

2. **Gartner press release — "Gartner Predicts More Than 50% of CDAOs Will Secure Funding for Data Literacy and AI Literacy Programs by 2027" (January 2024)** — https://www.gartner.com/en/newsroom/press-releases/2024-01-29-gartner-predicts-more-than-50-percent-of-cdaos-will-secure-funding-for-data-literacy-and-ai-literacy-programs-by-2027 — *backs*: counter-conventional H2 #5 claim that data literacy gaps — not just design quality — drive dashboard non-adoption.

3. **SAP Help Portal — "Augmented Analytics (Smart Features)"** — https://help.sap.com/doc/00f68c2e08b941f081002fd3691d86a7/2023.20/en-US/cd897576c3344475a208c2f7a52f151e.html — *backs*: SAC feature names (Smart Insights, Smart Discovery, Smart Predict) if writer mentions augmented capabilities.

4. **Gartner press release — "Gartner Predicts 80% of D&A Governance Initiatives Will Fail by 2027" (February 2024)** — https://www.gartner.com/en/newsroom/press-releases/2024-02-28-gartner-predicts-80-percent-of-data-and-analytics-governance-initiatives-will-fail-by-2027-due-to-a-lack-of-a-real-or-manufactured-crisis- — *backs*: governance/metric-certification section; honest counter-conventional angle on why good dashboards fail.

---

## FAQ Q&As (6 drafted, Bahasa Indonesia)

### Apa itu dashboard dalam business intelligence?

Dashboard dalam Business Intelligence adalah tampilan terpusat yang menyajikan KPI dan metrik utama secara visual dalam satu layar, sehingga pengambil keputusan dapat memantau kinerja bisnis secara cepat tanpa harus menggali laporan mentah. Dashboard BI yang efektif bukan sekadar kumpulan grafik — ia disusun berdasarkan hierarki keputusan: metrik mana yang paling penting, dan informasi apa yang mendorong tindakan.

### Berapa jumlah KPI ideal dalam satu dashboard?

Berdasarkan prinsip beban kognitif, otak manusia bekerja optimal saat memproses 5–7 item secara bersamaan (merujuk pada penelitian George Miller). Dalam praktik, dashboard eksekutif sebaiknya menampilkan 3–5 KPI utama, sementara dashboard operasional yang diakses setiap hari bisa mencapai 7–9. Di atas 9 metrik dalam satu tampilan, pengguna cenderung mulai melewatkan angka — tanda hierarki visual perlu diperbaiki.

### Apa kesalahan umum dalam desain dashboard?

Lima kesalahan yang paling sering ditemui: (1) pie chart dengan terlalu banyak irisan — sulit dibandingkan secara visual; (2) dual-axis chart yang memanipulasi skala sumbu sehingga menciptakan korelasi palsu; (3) efek 3D dan bayangan yang mengaburkan nilai data; (4) "democratic layout" di mana semua metrik berukuran sama sehingga tidak ada yang menonjol; (5) menampilkan angka tanpa konteks — tanpa target, tren, atau satuan yang jelas.

### Apa perbedaan dashboard operasional dan dashboard strategis?

Dashboard operasional dirancang untuk dipantau harian atau bahkan real-time — misalnya status produksi, jumlah tiket layanan, atau stok gudang. Metriknya bersifat taktis dan berubah cepat. Dashboard strategis disajikan kepada manajemen senior secara mingguan atau bulanan, menampilkan 3–5 KPI tingkat tinggi yang mencerminkan arah bisnis jangka menengah-panjang. Kedua tipe ini membutuhkan desain yang berbeda: operasional mengutamakan keterbacaan cepat, strategis mengutamakan konteks dan tren.

### Mengapa dashboard sering tidak digunakan setelah diluncurkan?

Masalahnya jarang teknologi. Gartner mencatat bahwa alat BI rata-rata hanya dipakai 25–35% karyawan, dan 65% organisasi masih menggunakan data untuk membenarkan keputusan yang sudah diambil — bukan sebagai dasar keputusan. Dashboard tidak digunakan karena tiga alasan utama: (1) tidak terhubung ke alur kerja nyata pengguna; (2) metrik tidak dipercaya karena tidak ada proses sertifikasi angka; (3) pengguna tidak memiliki literasi data yang cukup untuk menafsirkan visualisasi. Desain bagus perlu disertai adopsi yang dikelola secara aktif.

### Tools apa yang digunakan untuk membuat dashboard BI?

Ada banyak pilihan — mulai dari Microsoft Power BI, Tableau, Looker, hingga SAP Analytics Cloud yang sering digunakan di lingkungan enterprise berbasis SAP. Pilihan tool yang tepat bergantung pada ekosistem ERP perusahaan, kebutuhan koneksi data, model lisensi, dan kapasitas governance. Yang lebih penting dari pilihan tool adalah apakah dashboard yang dihasilkan terhubung ke sumber data ter-governance dan dirancang berdasarkan keputusan nyata — bukan sekadar tampilan yang menarik.

### Bagaimana cara membuat dashboard yang mendorong tindakan?

Mulai dari pertanyaan, bukan dari data. Identifikasi terlebih dahulu: keputusan apa yang akan dibuat menggunakan dashboard ini, dan siapa yang membuatnya? Setiap KPI harus disertai target dan rentang tanggal yang jelas. Susun tampilan berdasarkan hierarki keputusan: metrik yang paling sering memengaruhi keputusan ditempatkan di posisi yang langsung terlihat (kiri atas). Sertakan konteks — angka bulan ini bermakna lebih jika dibandingkan bulan lalu atau target.

---

## Data tables for the writer

### Perbandingan Dashboard Operasional vs. Dashboard Strategis

| Aspek | Dashboard Operasional | Dashboard Strategis |
|---|---|---|
| Frekuensi akses | Harian / real-time | Mingguan / bulanan |
| Pengguna utama | Supervisor, manajer operasional | Direktur, C-level |
| Jumlah KPI | 7–9 | 3–5 |
| Horizon data | Jam / hari terakhir | Bulan / kuartal |
| Contoh metrik | Jumlah pesanan hari ini, stok gudang | Revenue growth YoY, gross margin |
| Kecepatan refresh data | Real-time atau near-real-time | Harian / mingguan |
| Prioritas desain | Keterbacaan cepat, alert | Tren dan konteks strategis |

### Kesalahan Visualisasi Umum vs. Alternatif yang Benar

| Kesalahan | Mengapa Bermasalah | Alternatif |
|---|---|---|
| Pie chart (>4 irisan) | Mata manusia tidak akurat membandingkan sudut/area | Bar chart terurut (sorted bar) |
| Dual-axis chart | Skala independen menciptakan korelasi semu | Dua panel terpisah dengan skala yang jelas |
| Efek 3D / bayangan | Mengaburkan nilai sebenarnya, menambah "chartjunk" | Grafik datar (flat), tanpa dekorasi |
| "Democratic layout" | Tidak ada hierarki — semua metrik tampak sama penting | Ukuran/kontras berbeda sesuai kepentingan |
| Angka tanpa konteks | Pengguna tidak tahu apakah angka baik atau buruk | Selalu sertakan target, tren sebelumnya, satuan |

---

## Edge cases & nuance

- **"7 KPI" bukan hukum mutlak.** Angka 5–7 (atau 3–5 / 7–9 per jenis) adalah panduan praktisi berbasis kognitif — bukan ambang yang berlaku universal. Dashboard yang dikunjungi berkali-kali sehari oleh pengguna terlatih bisa mencapai lebih banyak metrik karena pengguna sudah "menghafal" tata letak. Framing yang aman: "sebagai panduan, mulailah dengan..." bukan "tidak boleh lebih dari X".
- **F-pattern berlaku untuk konten teks, bukan selalu dashboard.** NNG's F-pattern research awalnya untuk halaman teks/web biasa. Untuk dashboard dengan tata letak terstruktur (bukan artikel teks), implikasinya adalah: otak akan memindai dari atas-kiri — tetapi tidak selalu dengan pola F yang ketat. Framing yang aman: "pengguna cenderung memindai dari area kiri-atas" berdasarkan riset eye-tracking, tanpa mengklaim bahwa semua dashboard dibaca persis mengikuti pola F.
- **SAC bukan satu-satunya tool enterprise.** Artikel harus vendor-neutral pada prinsip desain; SAC disebutkan sebagai contoh ekosistem SAP, bukan sebagai rekomendasi absolut. Power BI, Tableau, dan Looker sama-sama sah untuk konteks non-SAP.
- **Augmented analytics bisa bantu pemilihan chart, tapi tidak menggantikan prinsip desain.** SAC Smart Insights bisa menyarankan visualisasi dan mengidentifikasi anomali — tetapi output-nya tetap perlu dikurasi oleh perancang yang memahami konteks bisnis. Jangan overclaim bahwa AI otomatis menyelesaikan masalah desain.
- **Governance metrik ("sertifikasi angka") adalah topik yang kaya tetapi sudah di-flag sebagai topik masa depan** ("governance metrik & metric layer" diidentifikasi di brief sebagai reservasi untuk artikel berikutnya). Singgung sebukaan saja di H2 #5 — jangan jadi artikel tersendiri di dalam artikel ini.
- **Data storytelling vs. dashboard.** Brief menyebut "data storytelling" sebagai LSI keyword — tetapi brief juga mencatat bahwa "data storytelling untuk eksekutif" adalah topik masa depan. Gunakan istilah ini hanya sebagai penyebutan dalam konteks, bukan sebagai H2 terpisah.

---

## Flags (open factual risk)

- ⚠️ **"Engagement drops above 12 KPIs"**: Brief menyebut angka ini. Tidak ada satu studi terkontrol tunggal yang bisa dikutip sebagai sumber baku. Beberapa praktisi menggunakan angka ini, tetapi angka tersebut adalah inferensi dari Miller's law + pengalaman lapangan. Rekomendasi: framing sebagai "praktisi umumnya merekomendasikan tidak lebih dari 9–12 KPI karena..." — jangan sajikan sebagai temuan riset dengan angka pasti.

- ⚠️ **"40-30-20-10 space rule" (dari brief)**: Belum ditemukan sumber otoritatif yang menggunakan persis terminologi "40-30-20-10 rule" dalam konteks alokasi ruang dashboard. Konsep dasarnya valid (alokasi ruang berdasarkan prioritas) tetapi angka spesifik ini mungkin berasal dari satu buku desain tertentu atau konvensi internal. Rekomendasi: jika writer menggunakan ini, atribusikan sebagai "panduan alokasi ruang dalam praktik desain" tanpa mengklaim itu "aturan resmi" — atau ganti dengan prinsip yang lebih mudah dikutip (Tufte/Few tentang white space dan non-data-ink).

- ⚠️ **SAC feature naming stability**: SAP telah mengganti nama "Augmented Analytics" menjadi "AI for Planning and Analytics" (diverifikasi 2026-06-08 via SAP Community). Feature names individual (Smart Insights, Smart Discovery, Smart Predict, Just Ask) masih terkonfirmasi aktif. Namun SAP sering merename fitur — writer harus menggunakan nama yang diperoleh dari SAP Help Portal dengan note tanggal akses dan menghindari klaim fitur yang sangat spesifik tanpa konfirmasi ulang.

- ⚠️ **Klaim "65% organisasi menggunakan data untuk membenarkan keputusan"**: Dikutip via secondary source (Linkurious mengacu ke Gartner). Gartner underlying report berada di balik paywall. Confidence: medium. Rekomendasi: atribusikan sebagai "menurut penelitian Gartner" dan tetap gunakan karena konsisten dengan Gartner's broader "decision-centric" narrative yang terverifikasi di press release resmi.

- ⚠️ **Klaim adopsi BI "25–35%"**: Angka ini konsisten lintas sumber yang mengacu Gartner, tetapi data terbaru Gartner ada di balik paywall. Angka 29–35% terkonfirmasi via TechTarget yang mengacu Gartner document 3753469 dan IBM summary. Rekomendasi: frame sebagai "data Gartner menunjukkan rata-rata hanya 25–35% karyawan aktif menggunakan alat BI" dengan catatan sumber.

---

## Definition snippet draft (40–60 words)

> Dashboard Business Intelligence yang efektif adalah tampilan terpusat yang menyajikan KPI terpilih secara visual dalam satu layar — tersusun berdasarkan hierarki keputusan, terhubung ke data yang diperbarui secara real-time atau terjadwal, dan dirancang agar pengambil keputusan dapat menemukan insight utama dalam hitungan detik tanpa harus menggali laporan mentah.

*(57 kata — dalam batas 40–60)*

---

## Notes for image-planner

- **Concept 1 — KPI Selection Matrix (2×2)**: Matriks actionable (sumbu vertikal: "Seberapa sering digunakan untuk keputusan?") x frequently-needed (sumbu horizontal: "Seberapa sering datanya berubah?"). Empat kuadran: kiri-atas = "wajib ada di dashboard", kanan-atas = "monitoring rutin", kiri-bawah = "laporan periodik", kanan-bawah = "buang / sembunyikan". Infografik 2×2, clean flat design, label Bahasa Indonesia. Mendukung H2 #2.

- **Concept 2 — Visual Hierarchy Comparison (before/after)**: Dua tampilan dashboard naratif berdampingan. "Sebelum": democratic layout — semua tile berukuran sama, 14 angka tanpa hierarki, warna acak. "Sesudah": KPI utama 3 besar di baris atas berukuran besar, detail di bawah, palet warna konsisten (2 warna + aksen). Caption: "Hierarki visual yang jelas mengarahkan perhatian ke angka yang paling penting." Mendukung H2 #3.

- **Concept 3 — Chart Mistakes Table / Infographic**: Tabel visual 3-kolom: nama kesalahan | contoh chart thumbnail (ikonik, flat) | alternatif yang benar. Baris: pie chart > sorted bar; dual-axis > dua panel; 3D bar > flat bar; no context > bar dengan target line. Dapat dibuat sebagai tabel infografis yang screenshot-friendly. Mendukung H2 #4.
