---
brief_id: "data-warehouse-solutions-02"
researcher_run_date: "2026-06-08"
sources_cited: 22
flags: 5
---

# Research Dossier: Real-Time vs Batch: Kapan Data Warehouse Anda Perlu Data Seketika

## TL;DR for the writer

- The article's core thesis holds: real-time is not always superior — the right answer depends on decision latency (how quickly does action need to follow the data). Frame this honestly throughout.
- SAP Datasphere supports three data integration modes: (1) federation/virtual access via Remote Tables (no-copy, near-instant reads); (2) batch loading via Data Flows and scheduled Replication Flows; (3) near-real-time delta synchronization via Replication Flows with CDC. Avoid claiming "full real-time streaming warehouse" — it is near-real-time for CDC scenarios, not sub-second event streaming.
- The SAP Datasphere–Confluent integration is real and SAP-endorsed, but it operates through Replication Flows (Confluent as source or target). It is not a native Apache Kafka broker inside Datasphere — it is a certified connector partnership, generally available since SAP Datasphere release 2024.8 (August 2024) for Confluent targets, and 2024.23 for Confluent as source.
- A major product flag: SAP launched SAP Business Data Cloud (BDC) on 13 February 2025, which bundles SAP Datasphere + SAP Analytics Cloud + SAP BW + managed Databricks as a fully managed SaaS. SAP Datasphere is still developed and sold standalone, but new BTPEA/CPEA/PAYG subscriptions for standalone Datasphere end 1 January 2026 (new sales route is via BDC). Writer should refer to "SAP Datasphere" as the data integration/warehouse layer without asserting its future as a standalone SKU.
- Decision threshold for the writer to state (well-supported by multiple sources): if the business action triggered by the data does not change within one hour, batch or scheduled replication is typically sufficient. Real-time streaming is justified when decision windows are measured in seconds to low minutes (fraud scoring, dynamic pricing, cross-warehouse inventory allocation).

---

## Core facts (verified)

> **Claim 1**: Batch processing collects and processes data in scheduled intervals, with latency ranging from hours to days.
> **Number/specific**: Batch latency "ranges from hours to days"; micro-batch can process in intervals as small as seconds but typically minutes.
> **Source**: Confluent, "What is Batch Processing?" — https://www.confluent.io/learn/batch-processing/ (accessed 2026-06-08)
> **Confidence**: high

> **Claim 2**: Micro-batch processing groups events over short time windows — typically 100 milliseconds to several minutes — and processes them as tiny batches, achieving end-to-end latencies as low as 100 milliseconds in Apache Spark Structured Streaming.
> **Number/specific**: Spark Structured Streaming micro-batch: 100 ms minimum recommended interval; end-to-end latency as low as 100 ms with exactly-once fault-tolerance.
> **Source**: Apache Spark Structured Streaming documentation (spark.apache.org/docs/latest); Hazelcast "Micro-Batch Processing vs Stream Processing" — https://hazelcast.com/foundations/software-architecture/micro-batch-processing/ (accessed 2026-06-08)
> **Confidence**: high

> **Claim 3**: Change Data Capture (CDC) captures inserts, updates, and deletes from database transaction logs (log-based) or triggers, enabling near-real-time downstream synchronization without full-table scans.
> **Number/specific**: Three CDC methods — timestamp-based, trigger-based, log-based. Log-based is standard for enterprise integration; it reads native transaction logs (e.g., Oracle redo log, SQL Server transaction log) with minimal source overhead.
> **Source**: Confluent, "What Is Change Data Capture (CDC)?" — https://www.confluent.io/learn/change-data-capture/ (accessed 2026-06-08)
> **Confidence**: high

> **Claim 4**: SAP Datasphere is the current product name (as of 8 March 2023), replacing the former name SAP Data Warehouse Cloud. All existing SAP DWC customers were automatically transitioned to Datasphere with no interruption.
> **Number/specific**: Renamed 8 March 2023. Capabilities of SAP DWC are fully retained in Datasphere.
> **Source**: SAP Community blog post "SAP Datasphere — the next generation of SAP Data Warehouse Cloud" — https://community.sap.com/t5/technology-blog-posts-by-members/sap-datasphere-the-next-generation-of-sap-data-warehouse-cloud/ba-p/13576735 (accessed 2026-06-08); SAP Community Q&A and Partnerships page — https://community.sap.com/t5/technology-blog-posts-by-members/sap-datasphere-q-a-and-partnerships/ba-p/13570461 (accessed 2026-06-08)
> **Confidence**: high

> **Claim 5**: SAP Datasphere Replication Flows support three load types — Initial Only, Delta Only, and Initial & Delta — with near-real-time (CDC) and scheduled (batch) frequency options. Data Flows, by contrast, support only full/initial load with batch/scheduled execution (no delta).
> **Number/specific**: Replication Flow: Initial & Delta with CDC = near-real-time. Data Flow: full load only, no CDC/delta.
> **Source**: SAP Help Portal, "Replication Flow Scenarios with Different Load Types" — https://help.sap.com/docs/SUPPORT_CONTENT/datasphere/4518284059.html; SAP Community, "SAP Datasphere: ETL Best Practices" — https://community.sap.com/t5/technology-blog-posts-by-sap/sap-datasphere-extract-transform-amp-load-etl-best-practices/ba-p/14363004; SAP Help Portal "Use Replication Flows and Transformation Flows to Load…" — https://help.sap.com/docs/SAP_DATASPHERE/c8a54ee704e94e15926551293243fd1d/34ae0a2ea6e94483b19f632a2843d56d.html (all accessed 2026-06-08)
> **Confidence**: high

> **Claim 6**: SAP Datasphere data federation uses Remote Tables — virtual objects providing direct access to data in source systems without copying it. By default, imported remote tables are not replicated; they are queried at the source each time (zero-copy federation).
> **Number/specific**: Remote tables = virtual, no-copy. Users can switch to snapshot (scheduled) or real-time replication (CDC) on CDC-enabled tables without changing data models.
> **Source**: SAP Help Portal, "Monitoring Remote Tables" — https://help.sap.com/docs/SAP_DATASPHERE/be5967d099974c69b77f4549425ca4c0/4dd95d7bff1f48b399c8b55dbdd34b9e.html; SAP Community, "Data Federation in SAP Datasphere" — https://community.sap.com/t5/technology-blog-posts-by-members/data-federation-in-sap-datasphere/ba-p/13734763; SAP Help Portal, "Replicate Data Changes in Real-Time" — https://help.sap.com/docs/SAP_DATASPHERE/be5967d099974c69b77f4549425ca4c0/441d327ead5c49d580d8600301735c83.html (all accessed 2026-06-08)
> **Confidence**: high

> **Claim 7**: The key performance consideration for federation vs. replication: use federation (remote tables) when needing small subsets of always-fresh data; use replication when Datasphere must perform complex modeling, transformations, or joins — replicated data supports these operations, whereas federated access may suffer latency if source and Datasphere are in different cloud regions or hyperscalers.
> **Number/specific**: Federation favored for: small subsets, aggregated source data, up-to-the-moment freshness. Replication favored for: complex transforms, multi-table joins, high-frequency dashboards. Cross-region latency is cited as a material risk for federation.
> **Source**: SAP Architecture Center, "Latency and Performance considerations" — https://architecture.learning.sap.com/docs/ref-arch/a07a316077/6; SAP Community, "Optimizing Data Movement in SAP Datasphere: Replication Flow or Remote Table Replication?" — https://community.sap.com/t5/technology-blog-posts-by-sap/optimizing-data-movement-in-sap-datasphere-replication-flow-or-remote-table/ba-p/14179771 (accessed 2026-06-08)
> **Confidence**: high

> **Claim 8**: The SAP Datasphere–Confluent Cloud integration is an SAP Endorsed App (tested and premium-certified by SAP). Confluent is available via the SAP Store. Replication Flows support Confluent as a target (GA: SAP Datasphere 2024.8, August 2024) and as a source (GA: SAP Datasphere 2024.23). AVRO and JSON schemas are supported for inbound Kafka messages.
> **Number/specific**: Confluent as target: GA with Datasphere release 2024.8. Confluent as source: GA with release 2024.23. Message formats: AVRO and JSON.
> **Source**: SAP Community, "SAP Datasphere Replication Flows Blog Series Part 3 – Integration with Kafka" — https://community.sap.com/t5/technology-blog-posts-by-sap/sap-datasphere-replication-flows-blog-series-part-3-integration-with-kafka/ba-p/13580350; SAP Community, "Replication Flows Blog Series Part 8 – Confluent as a Replication Source" — https://community.sap.com/t5/technology-blog-posts-by-sap/replication-flows-blog-series-part-8-confluent-as-a-replication-source/ba-p/13938148; SAP Community, "Set SAP Data in Motion with Confluent Cloud, an SAP Endorsed App" — https://community.sap.com/t5/technology-blogs-by-sap/set-sap-data-in-motion-with-confluent-cloud-an-sap-endorsed-app/ba-p/13576364 (all accessed 2026-06-08)
> **Confidence**: high

> **Claim 9**: SAP launched SAP Business Data Cloud (BDC) on 13 February 2025 — a fully managed SaaS combining SAP Datasphere, SAP Analytics Cloud, SAP Business Warehouse, and managed SAP Databricks. From 1 January 2026, standalone SAP Datasphere and SAP Analytics Cloud are no longer available for new BTPEA/CPEA/PAYG subscriptions; new customers acquire them through BDC.
> **Number/specific**: BDC launch: 13 February 2025. Standalone Datasphere new subscriptions sunset: 1 January 2026. Existing customers continue without interruption.
> **Source**: SAP Community, "SAP Business Data Cloud and what it means for SAP Datasphere" — https://community.sap.com/t5/technology-blog-posts-by-sap/sap-business-data-cloud-and-what-it-means-for-sap-datasphere/ba-p/14036678; SAP Community, "Announcement: SAP Datasphere and SAP Analytics Cloud Availability via SAP Business Data Cloud" — https://community.sap.com/t5/technology-blog-posts-by-sap/announcement-sap-datasphere-and-sap-analytics-cloud-availability-via-sap/ba-p/14140920 (accessed 2026-06-08)
> **Confidence**: high

> **Claim 10**: For enterprise CDC-based replication from SAP S/4HANA into SAP Datasphere using CDS views, CDC is supported starting SAP S/4HANA Cloud 1905 and SAP S/4HANA 1909 FPS01 (on-premise). Replication Flows use the ODP (Operational Data Provisioning) framework — the modern replacement for BW Delta Queues (RSA7) — for delta loading.
> **Number/specific**: CDC for ODP: available from S/4HANA 1909 FPS01 on-premise; S/4HANA Cloud 1905. ODP replaces BW Delta Queue/RSA7.
> **Source**: SAP Community, "SAP Datasphere replication with Change Data Capture on a custom SAP S4 CDS view" — https://community.sap.com/t5/technology-blog-posts-by-sap/sap-datasphere-replication-with-change-data-capture-on-a-custom-sap-s4-cds/ba-p/13599587; SAP Help Portal, "Replication Flow for CDS views from S/4HANA On-Premise" — https://help.sap.com/docs/SUPPORT_CONTENT/datasphere/4445249362.html (accessed 2026-06-08)
> **Confidence**: high

> **Claim 11**: Fraud detection is a primary real-time analytics use case that requires event-by-event evaluation in sub-second to low-second windows; end-of-day batch cannot catch fraud before damage accumulates. Banking/BFSI sector leads real-time analytics adoption at 91% according to sector analysis.
> **Number/specific**: BFSI real-time analytics adoption: 91% (sector analysis, Data Ideology / industry research). Fraud detection decision window: sub-second to seconds.
> **Source**: dataideology.com, "The State of Big Data & Analytics in 2025" — https://www.dataideology.com/the-state-of-big-data-analytics-in-2025-market-growth-adoption-investment-trends/ (accessed 2026-06-08); BMC/Ververica streaming use-case literature (corroborating); Confluent batch processing guide (accessed 2026-06-08)
> **Confidence**: medium (BFSI 91% figure is from a sector-analysis aggregator, not primary IDC/Gartner report — recommend attributing as "analisis industri" rather than a hard IDC/Gartner stat)

> **Claim 12**: The operational cost overhead for self-managed real-time streaming pipelines (e.g., self-managed Kafka) can be 3–5x higher than managed streaming cloud services for the same workload, based on a retail analytics example ingesting 1 TB/day (self-managed: $47,600–$51,000/month vs. Confluent Cloud: ~$906–$1,100/month).
> **Number/specific**: Self-managed Kafka ~$47,600–$51,000/month; Confluent Cloud ~$906–$1,100/month for 1 TB/day retail workload. Self-managed = 3–5x more expensive than managed options.
> **Source**: Confluent, "The Real Cost of Data Streaming: TCO, ROI, and Hidden Tradeoffs" — https://www.confluent.io/blog/the-true-cost-of-real-time-data-streaming/ (accessed 2026-06-08)
> **Confidence**: medium (source is Confluent's own blog — commercially motivated in favour of managed services. Use the directional argument — streaming has meaningful operational overhead — but do not cite these exact dollar figures as neutral data. Recommend: "profil biaya streaming berbeda dari batch — compute berjalan terus-menerus, biaya operasional infrastruktur lebih tinggi.")

> **Claim 13**: 72% of global organizations use event-driven architecture, but only 13% achieve organization-wide maturity. The streaming analytics segment is projected to grow at 28.3% CAGR to $128.4 billion by 2030.
> **Number/specific**: 72% event-driven adoption; 13% org-wide maturity; streaming analytics CAGR 28.3% to $128.4B by 2030.
> **Source**: Integrate.io, "Real-Time Data Integration Statistics — 39 Key Facts" — https://www.integrate.io/blog/real-time-data-integration-growth-rates/ (accessed 2026-06-08)
> **Confidence**: medium (Integrate.io is a credible data-integration platform; figures aggregate from multiple underlying research. Cite as industry research aggregate, not as a primary Gartner/IDC number.)

> **Claim 14**: Replication Flow throughput benchmarks from SAP: initial load averages 520 million cells/hour per replication thread; delta load averages 260 million cells/hour per delta thread. Actual performance varies by system landscape.
> **Number/specific**: Initial load: 520M cells/hour/thread. Delta load: 260M cells/hour/thread. SAP caveat: "actual numbers might deviate depending on individual system landscape."
> **Source**: SAP Community, "Replication Flow Blog Series Part 7 – Performance" — https://community.sap.com/t5/technology-blog-posts-by-sap/replication-flow-blog-series-part-7-performance/ba-p/13930000 (accessed 2026-06-08)
> **Confidence**: high (SAP-published benchmark; use with the caveat SAP attaches)

---

## Solution focus + Soltius anchor (from product_matrix.md)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| Batch loading patterns (Data Flow, scheduled Replication Flow) | Data Flows: batch only, no CDC/delta; Replication Flow scheduled: configurable intervals; both persist data into Datasphere for transforms/joins | H2 #1 (definitions) + H2 #3 (comparison table) | — (teaching content, no Soltius mention here) |
| Near-real-time via Replication Flow + CDC | Replication Flows with CDC: delta loads from S/4HANA CDS views; ODP framework; near-real-time (not sub-second streaming); available from S/4HANA 1909 FPS01 / Cloud 1905 | H2 #4 (how modern DW combines both) | One mid-article aside: "pemetaan sumber data ke pola loading yang tepat adalah bagian dari asesmen implementasi" — Soltius Data and AI Consulting |
| Data federation (Remote Tables / virtual access) | Zero-copy; queries pushed to source; favored for small subsets needing freshest data; performance degrades for complex joins or cross-region access | H2 #4 (how modern DW combines both) | — |
| Confluent/Kafka integration with SAP Datasphere | SAP Endorsed App; Replication Flow Confluent connector (target GA 2024.8; source GA 2024.23); AVRO + JSON; not a native Kafka broker inside Datasphere — a certified connector | H2 #4 (streaming integration aside) | — |
| SAP Business Data Cloud (BDC) | Launched 13 Feb 2025; bundles Datasphere + SAC + BW + managed Databricks as fully managed SaaS; does not replace Datasphere capabilities, extends the delivery model | Flag only — writer should NOT explain BDC as a new product in this article without more space; mention Datasphere as current product without calling out BDC complexity | — |

Soltius anchor: **Data and AI Consulting** service — "Melalui layanan Data and AI Consulting, Soltius merancang arsitektur data warehouse modern — memadukan batch, near-real-time CDC, dan federasi sesuai kebutuhan keputusan klien, bukan sekadar mengikuti tren real-time." Placement: H2 #4 (one-sentence aside) + closing CTA paragraph.

---

## Authoritative external sources (for the writer to link out)

1. **SAP Help Portal — "Replicate Data Changes in Real-Time" (SAP Datasphere documentation)** — https://help.sap.com/docs/SAP_DATASPHERE/be5967d099974c69b77f4549425ca4c0/441d327ead5c49d580d8600301735c83.html — *backs*: near-real-time CDC replication capability in SAP Datasphere (Replication Flows, remote table real-time access).

2. **Confluent — "What Is Change Data Capture (CDC)?"** — https://www.confluent.io/learn/change-data-capture/ — *backs*: CDC definition, log-based vs trigger-based methods, use cases (near-real-time sync, zero-downtime migration, continuous warehouse refresh). Confluent is a primary industry authority on event streaming and CDC. Note: Confluent is a vendor — use for technical definitions, not market-share claims.

3. **SAP Community — "SAP Business Data Cloud and what it means for SAP Datasphere"** (SAP official blog, 2025) — https://community.sap.com/t5/technology-blog-posts-by-sap/sap-business-data-cloud-and-what-it-means-for-sap-datasphere/ba-p/14036678 — *backs*: current SAP Datasphere product positioning, role within BDC, roadmap continuity. Use only if the writer needs to address the "future of Datasphere" question — otherwise leave this as background.

---

## FAQ Q&As (Bahasa Indonesia — 6 pertanyaan sesuai brief)

### Apa perbedaan batch dan real-time data warehouse?
Data warehouse batch memperbarui data dalam jadwal terjadwal — misalnya setiap malam atau setiap jam — sehingga data yang tampil di dashboard bisa berumur beberapa jam. Data warehouse real-time (lebih tepatnya: *near-real-time* berbasis CDC) menyinkronkan perubahan dalam hitungan detik hingga menit setelah terjadi di sistem sumber. Pilihan antara keduanya bergantung pada seberapa cepat keputusan bisnis harus diambil setelah data berubah.

### Apa itu change data capture (CDC)?
Change data capture (CDC) adalah teknik integrasi data yang hanya menangkap baris yang baru ditambahkan, diubah, atau dihapus di sistem sumber — bukan seluruh tabel — lalu mengirimkannya ke sistem tujuan secara inkremental. Pendekatan paling umum di enterprise menggunakan *log-based CDC*, yaitu membaca log transaksi database (seperti redo log Oracle atau transaction log SQL Server) tanpa membebani performa sistem sumber. Hasilnya: pembaruan data warehouse mendekati seketika dibanding batch penuh.

### Apa bedanya data federation dan data replication?
Data federation (atau *remote table* di SAP Datasphere) menyimpan data tetap di sistem sumber dan mengaksesnya secara virtual tanpa menyalin — data selalu aktual, tetapi kueri bisa lebih lambat jika melibatkan join kompleks atau sumber lintas wilayah. Data replication menyalin data ke dalam data warehouse; performa kueri lebih cepat karena data sudah lokal, tetapi terdapat jeda antara perubahan sumber dan tersedianya data segar. Keduanya tersedia di SAP Datasphere dan dipilih berdasarkan pola penggunaan: federation untuk subset kecil yang butuh kesegaran penuh, replikasi untuk analitik berat.

### Apakah real-time selalu lebih mahal?
Tidak selalu, tetapi profil biayanya berbeda. Batch membutuhkan komputasi besar secara periodik; streaming membutuhkan komputasi yang berjalan terus-menerus (*always-on*), termasuk biaya infrastruktur, monitoring, dan keahlian tim yang lebih tinggi. Infrastruktur streaming yang dikelola sendiri bisa memiliki total biaya operasional beberapa kali lipat dibanding layanan terkelola. Kesalahan paling umum adalah menerapkan streaming ke semua use case padahal sebagian besar keputusan bisnis hanya butuh data yang diperbarui tiap jam — di titik itu, batch terjadwal jauh lebih efisien.

### Bisakah satu data warehouse menjalankan batch dan real-time sekaligus?
Ya. Arsitektur data warehouse modern seperti SAP Datasphere dirancang untuk menggabungkan keduanya dalam satu platform: Data Flow untuk batch transformasi penuh, Replication Flow dengan CDC untuk sinkronisasi near-real-time dari sistem SAP (termasuk S/4HANA), dan Remote Table untuk federasi virtual tanpa salinan. Setiap sumber data dapat dipetakan ke pola loading yang paling sesuai, sehingga laporan keuangan bulanan tetap menggunakan batch sementara stok lintas gudang diperbarui hampir seketika.

### Industri apa yang paling membutuhkan data warehouse real-time?
Industri dengan keputusan operasional berjangka detik hingga menit: perbankan dan keuangan (deteksi penipuan, penilaian risiko kredit real-time), ritel dan e-commerce (pengelolaan stok lintas gudang, penetapan harga dinamis), serta manufaktur (pemantauan lini produksi, peringatan kualitas langsung). Sebaliknya, industri yang keputusannya bersifat periodik — seperti analisis laporan keuangan bulanan atau proyeksi anggaran tahunan — umumnya tidak memerlukan streaming dan lebih terlayani oleh batch yang handal dan berbiaya rendah.

---

## Data tables for the writer

### Perbandingan Tiga Pola Loading Data Warehouse

| Aspek | Batch (Data Flow terjadwal) | Near-Real-Time (Replication Flow + CDC) | Federasi (Remote Table) |
|---|---|---|---|
| **Latensi data** | Jam hingga hari | Detik hingga menit | Mendekati nol (selalu dari sumber) |
| **Beban infrastruktur** | Burst periodik | Komputasi berjalan terus | Tergantung frekuensi kueri |
| **Cocok untuk** | Laporan keuangan, rekonsiliasi, BI historis | Stok lintas gudang, deteksi fraud, harga dinamis | Akses ad-hoc ke data sumber kecil |
| **Dukungan transformasi** | Penuh (join, kalkulasi, pemodelan berlapis) | Terbatas — data direplikasi mentah, transformasi via Transformation Flow setelahnya | Sangat terbatas — join kompleks memperburuk performa |
| **Contoh SAP Datasphere** | Data Flow terjadwal | Replication Flow dengan delta/CDC | Remote Table (virtual, zero-copy) |
| **Risiko utama** | Data basi jika keputusan butuh kesegaran | Kompleksitas pipeline, kebutuhan monitoring | Performa menurun untuk join besar atau sumber lintas region |

### Panduan Keputusan: Batch atau Streaming?

| Pertanyaan | Jawaban → Batch cukup | Jawaban → Pertimbangkan near-real-time/streaming |
|---|---|---|
| Seberapa cepat tindakan harus diambil setelah data berubah? | Lebih dari 1 jam | Kurang dari 15 menit |
| Apa konsekuensi data terlambat 1 jam? | Tidak signifikan | Kerugian finansial atau operasional nyata |
| Apakah keputusan ini diambil manusia atau otomatis? | Manusia, periodik | Sistem otomatis (fraud engine, restock trigger) |
| Berapa frekuensi perubahan data di sumber? | Rendah/harian | Tinggi/kontinu |

---

## Edge cases & nuance

- **Near-real-time bukan sub-second streaming penuh.** CDC-based Replication Flows di SAP Datasphere menghasilkan sinkronisasi dalam hitungan detik hingga menit, bukan sub-detik. Untuk use case yang benar-benar membutuhkan latensi milidetik (misalnya high-frequency trading), arsitektur berbeda — event stream processor langsung di in-memory — diperlukan di luar data warehouse. Jangan klaim "real-time penuh" untuk skenario Datasphere.

- **Federasi bukan pengganti replikasi untuk analitik berat.** Remote Tables memberikan data terbaru, tetapi kueri kompleks dengan banyak join atau filter besar yang dikirim ke sumber dapat membebani sistem operasional (S/4HANA). Pola terbaik: federasi untuk akses ad-hoc kecil, replikasi untuk laporan reguler berjadwal.

- **Confluent bukan "native streaming inside Datasphere."** Integrasi bekerja via Replication Flow connector — Confluent berdiri sebagai platform streaming terpisah yang terkoneksi ke Datasphere. Ini adalah arsitektur yang valid dan SAP-endorsed, tetapi bukan broker Kafka yang hidup di dalam Datasphere itu sendiri.

- **Tidak semua data sumber SAP mendukung CDC.** CDC via ODP tersedia untuk CDS views dengan anotasi delta yang tepat di S/4HANA 1909 FPS01 ke atas. Tabel SAP tanpa CDS views delta-enabled tidak dapat menggunakan near-real-time CDC; mereka harus batch atau snapshot. Penulis jangan mengklaim CDC tersedia untuk semua sumber SAP secara universal.

- **SAP Business Data Cloud (BDC) — jangan abaikan, tapi jangan berlebihan.** BDC diluncurkan 13 Februari 2025 dan membundel Datasphere. Artikel ini fokus pada arsitektur data warehouse (batch vs real-time) — BDC relevan sebagai konteks masa depan. Cukup gunakan nama "SAP Datasphere" sepanjang artikel; hindari menjelaskan struktur BDC yang membingungkan di artikel 1,650 kata ini.

---

## Flags (open factual risk)

- ⚠️ **"Real-time" vs "near-real-time" untuk SAP Datasphere CDC**: SAP Datasphere Replication Flows dengan CDC menghasilkan *near-real-time* synchronization — detik hingga menit, bukan sub-detik event streaming. Dokumentasi SAP menggunakan frasa "replicate data changes in real-time" (help.sap.com), tetapi konteksnya adalah CDC delta, bukan event stream. **Rekomendasi**: gunakan "near-real-time" atau "hampir seketika" di artikel; hindari klaim "real-time penuh". Jika menggunakan kutipan SAP "real-time replication", tambahkan klarifikasi parenthetical.

- ⚠️ **SAP Business Data Cloud vs SAP Datasphere standalone**: Per 1 Januari 2026, SAP Datasphere tidak tersedia sebagai SKU baru standalone via BTPEA/CPEA/PAYG — rute penjualan baru adalah melalui SAP Business Data Cloud. Jika artikel diterbitkan Agustus 2026, menyebut "beli/implementasi SAP Datasphere" tanpa konteks BDC bisa menyesatkan prospek baru. **Rekomendasi**: gunakan "SAP Datasphere" sebagai nama solusi/layer; hindari klaim terkait pembelian/lisensi standalone. Soltius sebagai mitra implementasi SAP dapat mengonfirmasi jalur pengadaan terkini.

- ⚠️ **Angka biaya streaming dari Confluent blog**: Figur $47,600/bulan (self-managed Kafka) vs $906/bulan (Confluent Cloud) berasal dari Confluent's own blog — commercially biased. **Rekomendasi**: jangan gunakan angka spesifik ini. Gunakan argumen kualitatif: "pipeline streaming membutuhkan compute yang berjalan terus-menerus dan tim operasional yang terampil — profil biayanya berbeda dari batch" — pernyataan ini didukung oleh sumber yang lebih luas.

- ⚠️ **Statistik BFSI 91% real-time adoption**: Angka ini bersumber dari agregator (dataideology.com), bukan laporan primer IDC/Gartner. **Rekomendasi**: jika digunakan, atribusikan sebagai "industri keuangan dikenal sebagai sektor terdepan dalam adopsi analitik real-time" tanpa mengutip angka persentase spesifik, atau cari sumber primer IDC/Forrester untuk angka konkret.

- ⚠️ **Confluent "native" integration wording**: Confluent tersedia di SAP Store sebagai SAP Endorsed App, dan integrasinya lewat Replication Flow connector sudah GA. Namun beberapa sumber menyebutnya "native" sementara yang lain menggambarkannya sebagai "certified connector". **Rekomendasi**: gunakan frasa "integrasi streaming SAP Datasphere dengan Confluent Cloud (SAP Endorsed App)" — akurat dan tidak melebih-lebihkan kedalamannya.

---

## Definition snippet draft (40–60 words)

> *Real-time data warehouse* adalah arsitektur penyimpanan data yang menyinkronkan perubahan dari sistem sumber — seperti ERP atau sistem transaksi — mendekati seketika menggunakan teknik seperti *change data capture* (CDC), tanpa menunggu jendela batch harian. Lawannya, pendekatan *batch*, memproses data dalam interval terjadwal dan lebih sederhana serta efisien untuk keputusan yang tidak memerlukan kesegaran menit ke menit.

*(54 kata — dalam rentang 40–60)*

---

## Notes for image-planner

- **Concept 1 — Diagram perbandingan tiga pola loading (infografik vertikal)**: Tiga kolom berdampingan berlabel "Batch", "Micro-Batch / Near-Real-Time (CDC)", dan "Streaming". Setiap kolom menampilkan: ikon jam menunjukkan latensi (jam/hari → menit/detik → milidetik), ikon kompleksitas (sederhana → menengah → tinggi), dan contoh use-case konkret (laporan keuangan → stok gudang → deteksi fraud). Cocok sebagai tabel visual yang mudah di-screenshot dan dibagikan via chat internal.

- **Concept 2 — Diagram arsitektur SAP Datasphere hibrida (flow diagram)**: Menunjukkan tiga jalur data masuk ke SAP Datasphere secara bersamaan: (1) panah batch dari berbagai sumber via Data Flow, (2) panah CDC dari S/4HANA via Replication Flow, (3) panah federasi virtual dari source system via Remote Table. Di dalam Datasphere: layer Transformation Flow → Data Mart → output ke SAP Analytics Cloud. Label singkat di setiap jalur. Berguna untuk H2 #4.

- **Concept 3 — Decision tree / panduan keputusan (flowchart sederhana)**: Mulai dari pertanyaan "Seberapa cepat keputusan bisnis harus bereaksi?" → cabang ke "lebih dari 1 jam" (batch cukup) vs "kurang dari 15 menit" (pertimbangkan CDC/streaming) → sub-cabang berikutnya: "apakah tindakan diambil otomatis?" → rekomendasi akhir. Format flowchart minimalis yang bisa dirender sebagai diagram HTML atau gambar sederhana.

---

Sources consulted (for dossier transparency):

- SAP Help Portal, "Replicate Data Changes in Real-Time" — https://help.sap.com/docs/SAP_DATASPHERE/be5967d099974c69b77f4549425ca4c0/441d327ead5c49d580d8600301735c83.html
- SAP Help Portal, "Replication Flow Scenarios with Different Load Types" — https://help.sap.com/docs/SUPPORT_CONTENT/datasphere/4518284059.html
- SAP Help Portal, "Use Replication Flows and Transformation Flows to Load…" — https://help.sap.com/docs/SAP_DATASPHERE/c8a54ee704e94e15926551293243fd1d/34ae0a2ea6e94483b19f632a2843d56d.html
- SAP Help Portal, "Monitoring Remote Tables" — https://help.sap.com/docs/SAP_DATASPHERE/be5967d099974c69b77f4549425ca4c0/4dd95d7bff1f48b399c8b55dbdd34b9e.html
- SAP Architecture Center, "Latency and Performance considerations" — https://architecture.learning.sap.com/docs/ref-arch/a07a316077/6
- SAP Community, "SAP Datasphere: ETL Best Practices" — https://community.sap.com/t5/technology-blog-posts-by-sap/sap-datasphere-extract-transform-amp-load-etl-best-practices/ba-p/14363004
- SAP Community, "Optimizing Data Movement in SAP Datasphere: Replication Flow or Remote Table Replication?" — https://community.sap.com/t5/technology-blog-posts-by-sap/optimizing-data-movement-in-sap-datasphere-replication-flow-or-remote-table/ba-p/14179771
- SAP Community, "SAP Datasphere replication with CDC on a custom SAP S4 CDS view" — https://community.sap.com/t5/technology-blog-posts-by-sap/sap-datasphere-replication-with-change-data-capture-on-a-custom-sap-s4-cds/ba-p/13599587
- SAP Community, "Replication Flow Blog Series Part 7 – Performance" — https://community.sap.com/t5/technology-blog-posts-by-sap/replication-flow-blog-series-part-7-performance/ba-p/13930000
- SAP Community, "SAP Datasphere Replication Flows Blog Series Part 3 – Integration with Kafka" — https://community.sap.com/t5/technology-blog-posts-by-sap/sap-datasphere-replication-flows-blog-series-part-3-integration-with-kafka/ba-p/13580350
- SAP Community, "Replication Flows Blog Series Part 8 – Confluent as a Replication Source" — https://community.sap.com/t5/technology-blog-posts-by-sap/replication-flows-blog-series-part-8-confluent-as-a-replication-source/ba-p/13938148
- SAP Community, "Set SAP Data in Motion with Confluent Cloud, an SAP Endorsed App" — https://community.sap.com/t5/technology-blogs-by-sap/set-sap-data-in-motion-with-confluent-cloud-an-sap-endorsed-app/ba-p/13576364
- SAP Community, "SAP Business Data Cloud and what it means for SAP Datasphere" — https://community.sap.com/t5/technology-blog-posts-by-sap/sap-business-data-cloud-and-what-it-means-for-sap-datasphere/ba-p/14036678
- SAP Community, "Announcement: SAP Datasphere and SAP Analytics Cloud Availability via SAP BDC" — https://community.sap.com/t5/technology-blog-posts-by-sap/announcement-sap-datasphere-and-sap-analytics-cloud-availability-via-sap/ba-p/14140920
- SAP Community, "SAP Datasphere – the next generation of SAP Data Warehouse Cloud" — https://community.sap.com/t5/technology-blog-posts-by-members/sap-datasphere-the-next-generation-of-sap-data-warehouse-cloud/ba-p/13576735
- SAP Community, "Data Federation in SAP Datasphere" — https://community.sap.com/t5/technology-blog-posts-by-members/data-federation-in-sap-datasphere/ba-p/13734763
- Confluent, "What is Batch Processing?" — https://www.confluent.io/learn/batch-processing/
- Confluent, "What Is Change Data Capture (CDC)?" — https://www.confluent.io/learn/change-data-capture/
- Confluent, "The Real Cost of Data Streaming: TCO, ROI, and Hidden Tradeoffs" — https://www.confluent.io/blog/the-true-cost-of-real-time-data-streaming/
- Kai Waehner, "SAP Datasphere and Apache Kafka as Data Fabric for S/4HANA ERP Integration" (Jan 2024) — https://www.kai-waehner.de/blog/2024/01/03/sap-datasphere-and-apache-kafka-as-data-fabric-for-s4hana-erp-integration/
- Hazelcast, "Micro-Batch Processing vs Stream Processing" — https://hazelcast.com/foundations/software-architecture/micro-batch-processing/
- Integrate.io, "Real-Time Data Integration Statistics — 39 Key Facts" — https://www.integrate.io/blog/real-time-data-integration-growth-rates/
