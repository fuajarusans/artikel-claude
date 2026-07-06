---
brief_id: "business-intelligence-02"
researcher_run_date: "2026-06-08"
sources_cited: 18
flags: 5
---

# Research Dossier: Augmented Analytics: Bagaimana AI Mengubah Cara Kerja Business Intelligence

## TL;DR for the writer

- Augmented analytics is a Gartner-coined term (2017) for analytics that uses AI/ML and NLP to automate insight generation — the core entity to define in the first 60 words. Cite Gartner's definition; do not invent your own.
- SAP Analytics Cloud has three named augmented-analytics features: **Just Ask** (NLQ, GA Q1 2024), **Smart Predict** (automated ML — classification/regression/time-series), and **Smart Insights / Smart Discovery** (auto-explains anomalies and correlations). Search to Insight was deprecated in Q4 2024 and replaced by Just Ask.
- **Joule** in SAP Analytics Cloud: the "Analytical Insights" capability had a controlled release in Q1 2025 and reached general availability with the Q2 2025 quarterly release (May 2025). It lets users ask natural-language questions within the apps they already use, surfacing SAC charts and metrics — this is the clearest example of "decisions-not-dashboards."
- Gartner (June 2025) predicts 75% of new analytics content will be contextualized via GenAI by 2027; a separate 2026 Gartner prediction states 90% of current analytics content consumers will become content creators enabled by AI (by 2026). Both are citable but need clear attribution with "Gartner predicts" framing and year.
- The non-negotiable caveat the writer must include honestly: augmented analytics only works on clean, governed data with a semantic layer. Without it, NLQ returns wrong or hallucinated answers. The article's credibility depends on stating this explicitly — it is also the natural opening for Soltius's Data and AI Consulting service.

---

## Core facts (verified)

> **Claim 1**: "Augmented analytics" sebagai istilah dan konsep diciptakan oleh Gartner pada 2017.
> **Number/specific**: Gartner pertama kali mendefinisikan augmented analytics pada 2017 sebagai "the use of enabling technologies such as machine learning and AI to assist with data preparation, insight generation and insight explanation to augment how people explore and analyze data in analytics and BI platforms."
> **Source**: Gartner Glossary — Augmented Analytics (https://www.gartner.com/en/information-technology/glossary/augmented-analytics); confirmed by multiple secondary sources citing this origin. Also referenced in: Gartner Top 10 Data and Analytics Trends 2019 press release, gartner.com/en/newsroom/press-releases/2019-02-18 (accessed 2026-06-08).
> **Confidence**: high

---

> **Claim 2**: SAP Analytics Cloud (SAC) fitur **Just Ask** (NLQ) rilis versi awal di Q1 2024 dan menggantikan Search to Insight.
> **Number/specific**: Initial release = Q1 2024 (version 2024 Q1 QRC / 2024.02). Search to Insight deprecated starting Q4 2024 QRC. Pada tenant yang baru di-provisioning, Search to Insight tidak lagi tersedia; administrator diminta mengaktifkan Just Ask.
> **Source**: SAP Support KBA 3430577 — "SAP Analytics Cloud - Initial Release of Just Ask" (userapps.support.sap.com/sap/support/knowledge/en/3430577, accessed 2026-06-08); SAP Support KBA 3532315 — "Deprecation of Search to Insight feature in SAP Analytics Cloud" (userapps.support.sap.com/sap/support/knowledge/en/3532315, accessed 2026-06-08); SAP Community blog "Initial Release of SAP Analytics Cloud Just Ask" (community.sap.com/t5/technology-blog-posts-by-sap/initial-release-of-sap-analytics-cloud-just-ask/ba-p/13583721, accessed 2026-06-08).
> **Confidence**: high

---

> **Claim 3**: Just Ask menggunakan generative AI untuk NLQ — pengguna bertanya dalam bahasa sehari-hari (saat ini English) dan mendapat jawaban berupa chart/tabel secara instan.
> **Number/specific**: Just Ask "applies generative AI to natural language query for search-driven analytics." Tersedia di tenant pada GCP, Microsoft Azure, dan AWS. Mendukung querying terhadap SAP Analytics Cloud acquired data models dan SAP Datasphere models.
> **Source**: SAP official product page "Natural Language Query in SAP Analytics Cloud" (sap.com/use-cases/lower-the-barrier-to-analytics-using-natural-language, accessed 2026-06-08); SAP Community blog, initial release post (community.sap.com, accessed 2026-06-08).
> **Confidence**: high

---

> **Claim 4**: SAP Analytics Cloud **Smart Predict** mengotomatiskan machine learning dengan tiga tipe algoritma: klasifikasi, regresi, dan time-series.
> **Number/specific**: Klasifikasi — memprediksi perilaku pelanggan, propensity to buy, risiko churn. Regresi — memprediksi nilai numerik dan mengidentifikasi influencer. Time series — menghasilkan forecast per dimensi. Pengguna tidak perlu menulis kode.
> **Source**: SAP Africa product page "SAP Analytics Cloud augmented and predictive analytics tools" (sap.com/africa/products/cloud-analytics/features/augmented-analytics.html, accessed 2026-06-08); SAP Community posts on Smart Predict classification and time series (community.sap.com, accessed 2026-06-08).
> **Confidence**: high

---

> **Claim 5**: SAP Analytics Cloud **Smart Insights / Smart Discovery** secara otomatis menjelaskan anomali, korelasi, dan tren dalam data tanpa keterlibatan data scientist.
> **Number/specific**: Smart Discovery menjalankan model ML otomatis untuk menemukan hubungan dan pola tersembunyi dalam dataset, menghasilkan visualisasi data dan data stories termasuk tren, key influencer, dan outlier. Smart Insights kini dapat digunakan pada planning models dan SAP Datasphere (update 2025).
> **Source**: SAP product page (sap.com/africa/products/cloud-analytics/features/augmented-analytics.html, accessed 2026-06-08); Sira Consulting review "SAP Analytics Cloud in 2025" (siraconsultinginc.com, accessed 2026-06-08).
> **Confidence**: high

---

> **Claim 6**: **Joule** adalah AI copilot generatif SAP; fitur **Analytical Insights in Joule** (powered by SAP Analytics Cloud) mencapai General Availability (GA) di Q2 2025.
> **Number/specific**: Controlled release dimulai Q1 2025. GA tersedia untuk SAP Analytics Cloud standard release customers dengan quarterly release (QRC) Q2 2025 / Mei 2025. Fast-track customers sudah mendapatkan akses lebih awal. Joule "generally available within SAP Analytics Cloud in Q3 2025" (kutipan dari SAP roadmap yang lebih umum; angka GA Q2 2025 untuk Analytical Insights lebih spesifik dan bersumber SAP Community resmi).
> **Source**: SAP Community blog "Analytical Insights in Joule (powered by SAP Analytics Cloud), Controlled release in Q1 2025" (community.sap.com/t5/technology-blog-posts-by-sap/...-ba-p/13951799, accessed 2026-06-08); SAP Help Portal "Analytical Insights with SAP Analytics Cloud - Joule" (help.sap.com/docs/joule/capabilities-guide/analytical-insights-with-sap-analytics-cloud, accessed 2026-06-08); SAP Community "SAP Analytics Cloud Integration into Joule" (community.sap.com, accessed 2026-06-08).
> **Confidence**: high

---

> **Claim 7**: Joule Analytical Insights memungkinkan pengguna bertanya dalam bahasa natural langsung dari aplikasi kerja (tanpa berpindah ke SAP Analytics Cloud) dan mendapat jawaban berupa chart dan metrik.
> **Number/specific**: Contoh pertanyaan yang bisa dijawab: "Who were the top 3 sales managers last month?", "Compare sales between 2023 and 2024", "Show me sales by month". Integrasi terjadi melalui SAP Build Work Zone (diperlukan sejak update Joule 2506 pada 2026).
> **Source**: SAP product page "Joule, Analytical Insights" (sap.com/products/artificial-intelligence/joule-analytical-insights.html — referenced dari search results, accessed 2026-06-08); SAP Community post introducing Analytical Insights (community.sap.com/.../introducing-analytical-insights-in-joule..., accessed 2026-06-08); Joule integration documentation 2026-05-19 (help.sap.com/doc/de3af3c0f81642dbaa4d36172ed57a72).
> **Confidence**: high

---

> **Claim 8**: **Agent Builder** di Joule Studio mencapai General Availability (GA) pada Januari 2026.
> **Number/specific**: "The Agent Builder became Generally Available in January 2026." Joule Studio 2.0 diumumkan di SAP Sapphire pada 13 Mei 2026 sebagai platform terpadu untuk membangun dan mengelola AI agents, aplikasi, dan workflow.
> **Source**: SAP Community blog "Agent builder in Joule Studio is now generally available: Build your own Joule agents today!" (community.sap.com/t5/artificial-intelligence-blogs-posts/agent-builder-in-joule-studio-is-now-generally-available.../ba-p/14289282, accessed 2026-06-08); SAP News Center "Announcing New Joule Studio for Enterprise Scale Agentic Development" (news.sap.com/2026/05/new-joule-studio-enterprise-scale-agentic-development/, accessed 2026-06-08).
> **Confidence**: high

---

> **Claim 9**: Gartner memprediksi 75% analytics content baru akan dikontekstualisasikan melalui GenAI pada 2027.
> **Number/specific**: Berdasarkan survei Gartner terhadap 403 analytics atau AI leaders (Oktober–Desember 2024): lebih dari 50% melaporkan organisasi mereka menggunakan AI tools untuk automated insights dan natural language queries untuk analytics. Prediksi: "75% of new analytics content will be contextualized for intelligent applications through GenAI by 2027."
> **Source**: Gartner press release "Gartner Predicts 75% of Analytics Content to Use GenAI for Enhanced Contextual Intelligence by 2027" (gartner.com/en/newsroom/press-releases/2025-06-18-..., published 18 Juni 2025, accessed 2026-06-08).
> **Confidence**: high — sumber adalah Gartner official press release dengan metodologi survei yang dicantumkan.

---

> **Claim 10**: Gartner memprediksi 90% analytics content consumers saat ini akan menjadi content creators yang dimungkinkan oleh AI pada 2026.
> **Number/specific**: "By 2026, 90% of current analytics content consumers will become content creators enabled by AI." Bagian dari Top Predictions for Data and Analytics in 2026 yang diumumkan di Gartner D&A Summit Orlando, Maret 2026.
> **Source**: Gartner press release "Gartner Announces Top Predictions for Data and Analytics in 2026" (gartner.com/en/newsroom/press-releases/2026-03-11-gartner-announces-top-predictions-for-data-and-analytics-in-2026, accessed 2026-06-08); diperkuat oleh DataGalaxy summary (datagalaxy.com, accessed 2026-06-08).
> **Confidence**: medium-high — angka ini bersumber dari Gartner press release resmi yang tercantum dalam hasil pencarian; namun WebFetch ke halaman asli Gartner memberikan 403 Forbidden. Rekomendasi: atribusikan sebagai "Gartner memperkirakan" dan sertakan tahun prediksi.

---

> **Claim 11**: Gartner memproyeksikan 50% keputusan bisnis akan diaugmentasi atau diotomasi oleh AI agents pada 2027.
> **Number/specific**: "By 2027, 50% of business decisions will be augmented or automated by AI agents for decision intelligence."
> **Source**: Gartner prediction cited in multiple secondary sources (technologymagazine.com, datagalaxy.com); originally from Gartner D&A Predictions announcements 2025-2026 (gartner.com/en/newsroom/press-releases/2026-03-11-..., accessed 2026-06-08).
> **Confidence**: medium — angka ini beredar luas dari Gartner namun halaman primer tidak dapat di-fetch langsung. Atribusikan sebagai "menurut proyeksi Gartner" dan hindari menyatakan sebagai kepastian mutlak.

---

> **Claim 12**: Penelitian akademis (Alghamdi & Al-Baity, 2022, King Saud University, jurnal Sensors) mengonfirmasi augmented analytics memproses semua ML model dalam < 1 menit dibandingkan ~3 menit per iterasi di pendekatan tradisional.
> **Number/specific**: Studi komparatif pada data retail (170.939 records): AA menghasilkan semua model dalam < 1 menit vs ~3 menit/iterasi untuk tradisional. Kesimpulan kunci: "AI-driven analytics cannot fully replace human decision-making, as most business problems cannot be solved purely by machines."
> **Source**: Alghamdi NA, Al-Baity HH. "Augmented Analytics Driven by AI: A Digital Transformation beyond Business Intelligence." Sensors (Basel). 2022. PMC9608484. (pmc.ncbi.nlm.nih.gov/articles/PMC9608484/, accessed 2026-06-08).
> **Confidence**: high — peer-reviewed journal, PubMed Central.

---

> **Claim 13**: Pasar Big Data Analytics Software Indonesia diproyeksikan tumbuh dari ~USD 47 miliar (2025) dengan CAGR 9,35% hingga 2030.
> **Number/specific**: Mordor Intelligence memproyeksikan Indonesia Big Data Analytics Software Market mencapai USD 47,18 miliar pada 2025, tumbuh CAGR 9,35% menuju USD 73,77 miliar di 2030. Segmen AI & analytics mencatat CAGR tercepat 14,2%.
> **Source**: Mordor Intelligence "Indonesia Big Data Analytics Software Market" (mordorintelligence.com/industry-reports/indonesia-big-data-analytics-software-market, accessed 2026-06-08); dikonfirmasi oleh datainsightsmarket.com report (accessed 2026-06-08).
> **Confidence**: medium — sumber adalah market research firm komersial (bukan Gartner/IDC), namun angka konsisten di beberapa laporan. Rekomendasikan menggunakannya sebagai konteks pertumbuhan pasar Indonesia, bukan sebagai angka presisi.

---

> **Claim 14**: Augmented analytics membutuhkan semantic layer yang ter-governance sebagai prasyarat; tanpanya, AI dapat menghasilkan jawaban salah atau "halusinasi."
> **Number/specific**: "A semantic layer isn't optional for AI projects — it's a prerequisite, providing the guardrails that prevent hallucinations." Governed semantic layer memastikan AI hanya mengquery metrik yang sudah disetujui, sambil mem-flag query yang tidak valid.
> **Source**: dbt Labs blog "How a semantic layer prevents AI hallucinations in analytics" (getdbt.com/blog/how-a-semantic-layer-prevents-ai-hallucinations-in-analytics, accessed 2026-06-08); didukung oleh insightsoftware.com dan atlan.com analyses (accessed 2026-06-08).
> **Confidence**: high — konsensus industri yang luas, didukung beberapa sumber teknis terpercaya.

---

> **Claim 15**: Soltius adalah SAP Platinum Partner dan menyediakan layanan **Data and AI Consulting** untuk membantu perusahaan menerapkan augmented analytics di atas fondasi data yang ter-governance.
> **Number/specific**: Lebih dari 200 konsultan profesional, 120+ klien, berpengalaman sejak 1998, bagian dari Metrodata Group. Layanan termasuk Data and AI Consulting, Analytics, dan Data Management.
> **Source**: knowledge_base/company_profile.md (verified Soltius internal document, accessed 2026-06-08).
> **Confidence**: high

---

## Solution focus + Soltius anchor (from product_matrix.md)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| Augmented analytics (konsep Gartner) | Istilah diciptakan Gartner 2017; definisi: AI/ML + NLP mengotomatiskan data prep, insight generation, dan penjelasan | H1/lead + H2 #1 | — (pendidikan vendor-neutral) |
| SAP Analytics Cloud — Just Ask | GA Q1 2024; menggantikan Search to Insight (deprecated Q4 2024); NLQ via generative AI; tersedia di GCP/Azure/AWS; mendukung SAC data models + Datasphere | H2 #3 | — (contoh konkret) |
| SAP Analytics Cloud — Smart Predict | Automated ML: klasifikasi, regresi, time-series; no-code; prediksi churn, demand, nilai numerik | H2 #3 | — (contoh konkret) |
| SAP Analytics Cloud — Smart Insights/Discovery | Auto-explain anomali dan korelasi; sekarang bekerja di planning models dan Datasphere | H2 #3 | — (contoh konkret) |
| Joule — Analytical Insights in SAC | Controlled release Q1 2025; GA Q2 2025; pertanyaan natural language langsung dari aplikasi kerja; butuh SAP Build Work Zone | H2 #2 & H2 #4 | — (contoh "decisions-not-dashboards") |
| Joule Studio / Agent Builder | GA Januari 2026; platform agentic AI SAP; Joule Studio 2.0 diumumkan Sapphire Mei 2026 | H2 #2 (sebutkan sebagai gelombang agentic, bukan deep-dive) | — |
| Semantic layer + data governance sebagai prasyarat | AI butuh data bersih + semantic layer; tanpanya: hallucination risk; governed metric layer | H2 #5 (honest/counter-conventional) | Soltius Data and AI Consulting: membangun fondasi data sebelum mengaktifkan augmented analytics |
| Soltius Data and AI Consulting | SAP Platinum Partner; implementasi SAC; Data and AI Consulting service; Metrodata Group sejak 1998 | Closing CTA; opsional 1 kalimat aside di H2 #5 | "Melalui layanan Data and AI Consulting, Soltius membantu perusahaan menerapkan augmented analytics SAP Analytics Cloud di atas fondasi data yang ter-governance." |

**Reminder**: Soltius mengimplementasikan/mendukung SAC — tidak membangunnya. Maksimal 2–3 self-mention Soltius; biasanya hanya di closing + 1 aside.

---

## Authoritative external sources (untuk writer sertakan sebagai outbound link)

1. **Gartner press release "Gartner Predicts 75% of Analytics Content to Use GenAI for Enhanced Contextual Intelligence by 2027" (18 Juni 2025)** — https://www.gartner.com/en/newsroom/press-releases/2025-06-18-gartner-predicts-75-percent-of-analytics-content-to-use-genai-for-enhanced-contextual-intelligence-by-2027 — *backs*: tren adopsi GenAI dalam analytics (50%+ organisasi sudah menggunakan AI tools untuk NLQ, proyeksi 75% analytics content via GenAI by 2027).

2. **SAP official "Natural Language Query in SAP Analytics Cloud | SAP"** — https://www.sap.com/use-cases/lower-the-barrier-to-analytics-using-natural-language — *backs*: kapabilitas Just Ask dan NLQ di SAP Analytics Cloud; klaim SAP resmi tentang "no technical skills needed."

3. **Peer-reviewed: Alghamdi & Al-Baity (2022) — "Augmented Analytics Driven by AI: A Digital Transformation beyond Business Intelligence," Sensors (Basel)** — https://pmc.ncbi.nlm.nih.gov/articles/PMC9608484/ — *backs*: bukti akademis bahwa AA mempercepat proses analytics (<1 menit vs 3 menit/iterasi) + konfirmasi bahwa AI tidak menggantikan human decision-making sepenuhnya.

4. **SAP Community blog — "SAP Analytics Cloud Integration into Joule"** — https://community.sap.com/t5/technology-blog-posts-by-sap/sap-analytics-cloud-integration-into-joule/ba-p/14298196 — *backs*: detail teknis integrasi Joule–SAC, GA timeline, dan contoh use case.

---

## FAQ Q&As (7 Q&A, Bahasa Indonesia)

### Apa itu augmented analytics?
Augmented analytics adalah pendekatan analitik yang menggunakan kecerdasan buatan (AI), machine learning, dan pemrosesan bahasa alami (NLP) untuk mengotomatiskan persiapan data, penemuan insight, dan penjelasan hasil analisis. Istilah ini diciptakan Gartner pada 2017. Hasilnya: pengguna bisnis biasa — tanpa keahlian data science — dapat langsung bertanya ke data dan mendapatkan jawaban berupa grafik atau angka dalam hitungan detik.

### Apa perbedaan Business Intelligence dan augmented analytics?
Business Intelligence (BI) tradisional membutuhkan analis yang membangun laporan dan dashboard secara manual, sementara augmented analytics mengotomatiskan langkah tersebut dengan AI. Dalam BI konvensional, manajer meminta laporan dan menunggu; dalam augmented analytics, manajer mengetik pertanyaan dalam bahasa sehari-hari dan mendapat jawaban instan. Augmented analytics adalah evolusi BI, bukan penggantinya — dasar data dan proses bisnis tetap harus solid.

### Apa itu natural language query (NLQ) dalam konteks BI?
Natural language query (NLQ) adalah kemampuan bertanya ke sistem data menggunakan bahasa sehari-hari, tanpa perlu menulis kode SQL atau membuat filter secara manual. Contoh: mengetik "Kenapa margin turun di Q2?" dan mendapat grafik beserta penjelasan otomatis. Di SAP Analytics Cloud, fitur ini disebut Just Ask — diluncurkan secara umum pada Q1 2024 dan menggantikan fitur Search to Insight yang dihapus sejak Q4 2024.

### Apa itu Joule pada SAP Analytics Cloud?
Joule adalah AI copilot generatif SAP yang kini terintegrasi dengan SAP Analytics Cloud. Melalui fitur Analytical Insights, pengguna dapat mengajukan pertanyaan data dalam bahasa natural langsung dari aplikasi kerja — tanpa harus membuka SAP Analytics Cloud secara terpisah. Fitur ini mencapai General Availability pada Q2 2025, memungkinkan query seperti "Tampilkan 5 produk dengan penjualan tertinggi bulan lalu" dan mendapatkan jawaban berupa chart instan.

### Apakah AI bisa menggantikan analis data?
Tidak sepenuhnya. Penelitian dari King Saud University (jurnal Sensors, 2022) menyimpulkan bahwa "AI-driven analytics cannot fully replace human decision-making, as most business problems cannot be solved purely by machines." Augmented analytics mengotomatiskan tugas berulang — pencarian pola, pembuatan visualisasi, penjelasan anomali — sehingga analis dapat fokus pada interpretasi konteks bisnis, pertanyaan strategis, dan keputusan yang membutuhkan pertimbangan manusia.

### Apakah augmented analytics aman untuk data perusahaan yang sensitif?
Keamanan bergantung pada bagaimana sistem dikonfigurasi, bukan pada teknologinya saja. Augmented analytics yang baik menggunakan semantic layer ter-governance yang membatasi akses query hanya pada data dan metrik yang sudah diotorisasi. Tanpa lapisan ini, AI berpotensi menghasilkan jawaban salah atau mengekspos data yang tidak seharusnya. Pastikan model data, otorisasi pengguna, dan kebijakan akses data sudah rapi sebelum mengaktifkan fitur NLQ.

### Apa itu predictive analytics dalam konteks augmented analytics?
Predictive analytics adalah komponen augmented analytics yang menggunakan algoritma machine learning untuk memprediksi kejadian di masa depan berdasarkan pola historis. Di SAP Analytics Cloud, fitur ini disebut Smart Predict dan menawarkan tiga jenis model: klasifikasi (misal: prediksi churn pelanggan), regresi (prediksi nilai penjualan), dan time-series (forecast permintaan per periode). Pengguna tidak perlu menulis kode — model dilatih dan dijalankan dengan beberapa klik.

---

## Data tables for the writer

### Tiga Level AI dalam Augmented Analytics

| Level | Nama Kapabilitas | Cara Kerja | Contoh di SAP Analytics Cloud |
|---|---|---|---|
| 1 — Natural Language | Natural Language Query (NLQ) | Pengguna bertanya dalam bahasa sehari-hari; AI menginterpretasi dan menghasilkan visualisasi | **Just Ask** (GA Q1 2024) |
| 2 — Prediktif | Automated Machine Learning | AI melatih model prediksi secara otomatis dari data historis | **Smart Predict** (klasifikasi, regresi, time-series) |
| 3 — Auto-Insight | Automated Insight Generation | AI menemukan anomali, korelasi, dan tren tanpa pertanyaan eksplisit | **Smart Insights / Smart Discovery** |
| 4 — Agentic | AI Copilot / Agent | AI menjawab pertanyaan langsung di dalam aplikasi kerja dan dapat memicu aksi | **Joule Analytical Insights** (GA Q2 2025) |

### BI Tradisional vs Augmented Analytics

| Aspek | BI Tradisional | Augmented Analytics |
|---|---|---|
| Siapa yang buat laporan | Analis / tim IT | Siapa saja (citizen analytics) |
| Waktu untuk insight | Hari hingga minggu | Detik hingga menit |
| Keahlian teknis yang dibutuhkan | SQL, tools BI, modeling | Bahasa sehari-hari |
| Temuan anomali | Manual, tergantung analis | Otomatis (Smart Discovery) |
| Prediksi | Perlu data scientist | Otomatis (Smart Predict) |
| Prasyarat kritis | Data tersedia | Data bersih + semantic layer ter-governance |

---

## Edge cases & nuance

- **Joule di SAC membutuhkan SAP Build Work Zone**: Sejak update Joule 2506 (2026), integrasi Analytical Insights memerlukan SAP Build Work Zone untuk provisioning dan sinkronisasi user/role dari SAC. Writer jangan menyederhanakan ini sebagai "tinggal aktifkan Joule" — ada dependency infrastruktur.

- **Just Ask mendukung query bahasa Inggris sebagai bahasa utama**: Dokumentasi SAP tidak menyebutkan dukungan Bahasa Indonesia secara eksplisit. Brief menyebut "multi-bahasa 2025 Q3" — ini **tidak terverifikasi** dari sumber resmi SAP. Jangan klaim dukungan Bahasa Indonesia tanpa konfirmasi SAP.

- **"Agentic analytics" sebagai istilah SAP**: SAP menggunakan istilah "agentic AI" untuk Joule Studio dan Agent Builder (GA Jan 2026), tetapi tidak ada halaman resmi SAP yang secara eksplisit menyebut "agentic analytics" sebagai produk atau fitur bernama. Gunakan istilah "AI agent" atau "agentic capabilities" dan jelaskan konteksnya — jangan sajikan sebagai produk dengan nama resmi.

- **Prediksi Gartner tentang "decisions-not-dashboards"**: Brief menyebut tren "mayoritas karyawan mengonsumsi wawasan langsung di aplikasi kerja." Prediksi Gartner yang terverifikasi adalah "90% of current analytics content consumers will become content creators enabled by AI by 2026" dan prediksi AI agents di 50% keputusan bisnis by 2027 — keduanya beda dari framing "80% karyawan di aplikasi kerja." Gunakan prediksi yang terverifikasi; hindari versi yang tidak ada sumbernya.

- **Smart Insights vs Smart Discovery**: SAP menggunakan kedua nama ini di berbagai halaman. "Smart Discovery" tampaknya nama lama/alternatif; "Smart Insights" lebih sering muncul di dokumentasi terkini. Sebut keduanya saat pertama kali: "Smart Insights (sebelumnya juga disebut Smart Discovery)" untuk menghindari kebingungan pembaca yang menemukan dokumentasi lama.

- **Klaim kecepatan dari studi akademis**: Angka "< 1 menit vs ~3 menit/iterasi" berasal dari satu studi retail (170.939 records, 2022). Presentasikan sebagai "studi kasus" — bukan klaim universal berlaku untuk semua skenario.

---

## Flags (open factual risk)

- ⚠️ **Flag 1 — Dukungan Bahasa Indonesia oleh Just Ask**: Brief menyebut "multi-bahasa 2025 Q3." Tidak ditemukan konfirmasi resmi SAP untuk klaim ini. Semua dokumentasi SAP tentang Just Ask menggunakan contoh dalam bahasa Inggris. Rekomendasi: jangan klaim Just Ask mendukung Bahasa Indonesia tanpa sumber SAP resmi. Cukup tulis "pengguna mengajukan pertanyaan — umumnya dalam bahasa Inggris" atau omit klaim bahasa.

- ⚠️ **Flag 2 — Prediksi "80% karyawan mengonsumsi wawasan di aplikasi 2026" (versi asli brief)**: Tidak ditemukan prediksi Gartner dengan angka "80%" dan framing persis ini. Prediksi yang terverifikasi adalah "90% content consumers → content creators by 2026" dan "75% analytics content via GenAI by 2027." Rekomendasi: gunakan yang terverifikasi; jangan gunakan angka "80%" yang tidak ada sumbernya.

- ⚠️ **Flag 3 — Klaim "agentic analytics" sebagai nama fitur SAP**: Tidak ada halaman produk SAP bernama "agentic analytics." SAP menggunakan "agentic AI" untuk Joule Studio dan Agent Builder (konteks pengembangan), bukan sebagai fitur BI siap pakai. Rekomendasi: jelaskan Joule Studio + Agent Builder sebagai arah pengembangan agentic SAP, bukan sebagai kapabilitas augmented analytics yang sudah tersedia secara luas untuk end-user BI.

- ⚠️ **Flag 4 — Prediksi Gartner "50% keputusan bisnis diotomasi AI agents by 2027"**: Angka ini beredar luas dari Gartner namun halaman sumber primer tidak dapat diverifikasi langsung (403 Forbidden saat diakses). Rekomendasi: atribusikan sebagai "menurut proyeksi Gartner" tanpa framing pasti; jika dihapus, artikel tidak kehilangan substansi karena ada prediksi 75% dan 90% yang lebih kuat.

- ⚠️ **Flag 5 — Angka pasar Indonesia dari Mordor Intelligence**: Angka USD 47 miliar berasal dari Mordor Intelligence (commercial market research), bukan IDC/Gartner/Kemenkominfo. Rekomendasi: gunakan sebagai konteks pertumbuhan ("diproyeksikan tumbuh dengan CAGR 9,35% hingga 2030 menurut Mordor Intelligence") dan atribusikan sumbernya secara eksplisit, atau cari validasi dari IDC/BPS/Komdigi jika dibutuhkan angka yang lebih otoritatif.

---

## Definition snippet draft (40–60 words)

> **Augmented analytics** adalah pendekatan Business Intelligence yang mengintegrasikan kecerdasan buatan (AI), machine learning, dan pemrosesan bahasa alami (NLP) sehingga pengguna bisnis biasa dapat menggali insight dari data hanya dengan bertanya dalam bahasa sehari-hari. Istilah ini diciptakan Gartner pada 2017 dan kini menjadi fondasi evolusi modern platform BI seperti SAP Analytics Cloud.

*(54 kata — sesuai panduan 40–60 kata)*

---

## Notes for image-planner

- **Concept 1 — Diagram bertingkat "Tiga Level AI dalam Augmented Analytics"**: Infografis vertikal atau piramida menunjukkan empat level kapabilitas — NLQ (Just Ask), Predictive (Smart Predict), Auto-Insight (Smart Insights), Agentic (Joule) — dengan ikon yang berbeda per level dan satu-dua kalimat deskripsi. Warna SAP (biru gelap ke biru muda, gradasi naik). Target: screenshot-friendly untuk dibagikan di internal perusahaan.

- **Concept 2 — Tabel perbandingan "BI Tradisional vs Augmented Analytics"**: Visual dua-kolom yang bersih — kiri merah/abu BI lama (analis bikin laporan manual, tunggu berhari-hari, butuh SQL), kanan biru/hijau augmented (siapa saja bertanya, jawaban dalam detik, bahasa sehari-hari). Format tabel atau kartu berdampingan. Momen "aha" yang mudah dipindai.

- **Concept 3 — Diagram prasyarat "Piramida Augmented Analytics yang Bekerja"**: Mengilustrasikan bahwa augmented analytics baru dapat berjalan andal di atas fondasi yang solid: lapisan bawah = data bersih + integrasi, lapisan tengah = semantic layer ter-governance + otorisasi, lapisan atas = AI/NLQ layer (Just Ask, Smart Predict, Joule). Cocok untuk H2 #5 (honest/counter-conventional) — menegaskan pesan "AI butuh fondasi, bukan tongkat ajaib."
