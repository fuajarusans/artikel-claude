---
brief_id: "business-intelligence-03"
researcher_run_date: "2026-07-07"
sources_cited: 9
flags: 4
---

# Research Dossier: Real-Time BI vs Laporan Batch: Kapan Anda Butuh Data Detik Ini

## TL;DR for the writer

- Ini artikel **keputusan arsitektur**, bukan tutorial. Sudut jujurnya: "real-time untuk semua" hampir selalu overkill; sebagian besar KPI eksekutif cukup batch harian. Jangan menjual real-time — beri reader ambang keputusan yang jujur.
- **Tiga entitas inti** harus didefinisikan bersih di awal: *real-time analytics* (latency sub-detik–detik, per event), *batch reporting* (data diolah terjadwal, latency jam–hari), dan *operational BI* (BI real/near-real-time untuk keputusan operasional harian — beda dari *strategic BI* yang menganalisis tren jangka panjang).
- **Angka latency yang aman dipakai** (sumber industri, bukan SAP): real-time murni ≈ 10–500 milidetik; *near real-time* ≈ 1–30 detik; batch = jam hingga hari. Label sebagai rentang industri, bukan angka pasti.
- **Fakta SAP yang sudah terverifikasi** (help.sap.com/learning.sap.com): koneksi **live** SAC hanya menyimpan metadata model, query dieksekusi langsung di sumber (S/4HANA, BW, HANA) dan hasil dirender real-time di browser lewat protokol InA — **tidak ada data disalin ke SAC**. Koneksi **import/acquired** menyalin data ke SAC dan disegarkan lewat jadwal. **SAP Datasphere** (dulu SAP Data Warehouse Cloud) mendukung **federation** (akses tanpa memindahkan data) dan **replication via CDC** untuk near-real-time. **SAP HANA Cloud** menyatukan OLTP + OLAP in-memory dalam satu sistem.
- **Statistik pasar** yang kuat: Gartner memproyeksikan adopsi *data streaming* (untuk agentic AI) melompat dari <15% (2025) ke >60% (2028) — sinyal tren real-time, tapi *bukan* bukti bahwa semua butuh real-time. Pakai untuk konteks, imbangi dengan pesan "kapan BELUM perlu".
- **Jangan mengarang angka biaya**. Framing biaya streaming vs batch sebagai *rule-of-thumb*/rentang berlabel estimasi. Tidak ada sumber SAP-resmi yang memberi angka biaya spesifik.

## Core facts (verified)

> **Claim**: Dalam koneksi *live* SAP Analytics Cloud, data tidak disalin ke SAC — hanya metadata model yang disimpan; query dieksekusi langsung di sistem sumber.
> **Number/specific**: "only the model metadata is stored in SAP Analytics Cloud, while query execution happens directly on the source system"; query dikirim langsung dari browser pengguna ke sumber (S/4HANA, BW, HANA) via protokol SAP InA (Information Access, REST/HTTP), hasil dirender real-time di browser.
> **Source**: SAP Help Portal — Live Data Connections (help.sap.com/docs/SAP_ANALYTICS_CLOUD/…), diakses 2026-07-07.
> **Confidence**: high

> **Claim**: Dalam model *import/acquired* SAC, data disalin (copy) dari sumber ke SAC; perubahan di sumber tidak otomatis tercermin kecuali proses import dijadwalkan ulang.
> **Number/specific**: "an import model uses an import connection to import (copy) data from a source… there are always two versions of the data"; sinkronisasi dijaga lewat penjadwalan import berkala.
> **Source**: SAP Learning — Exploring Live Models and Import Models (learning.sap.com); SAP Community "SAC Live and Import Connection Overview", diakses 2026-07-07.
> **Confidence**: high

> **Claim**: Model *live* tidak mengizinkan manipulasi/transformasi data di dalam SAC; transformasi harus dilakukan di sumber. Model *import* mengizinkan manipulasi data di SAC (karena salinan) dan membuka fitur planning/predictive penuh.
> **Number/specific**: "With live connections, you cannot manipulate any data in the model"; "Import data makes it possible to fully exploit the potential of SAC in terms of planning and predictive functions."
> **Source**: SAP Learning + btelligent/SAP Community live-vs-import overview, diakses 2026-07-07.
> **Confidence**: high (nuansa: fitur planning berbasis import — konfirmasi framing, jangan overstate bahwa live "tidak bisa apa-apa").

> **Claim**: SAP Datasphere adalah generasi penerus SAP Data Warehouse Cloud, dibangun di atas SAP BTP, yang menghadirkan *business data fabric*.
> **Number/specific**: SAP mendefinisikan Datasphere sebagai "a comprehensive data service built on SAP BTP…"; *business data fabric* = "a data management architecture that simplifies the delivery of an integrated, semantically rich data layer… without duplication".
> **Source**: news.sap.com, "A Deeper Look Into How SAP Datasphere Enables a Business Data Fabric", 8 Maret 2023, diakses 2026-07-07.
> **Confidence**: high

> **Claim**: SAP Datasphere menghubungkan data lewat **federation** (akses tanpa memindahkan data) atau **replication** menggunakan **Change Data Capture (CDC)** untuk near-real-time.
> **Number/specific**: "connecting – rather than just extracting – data with easy federation or replication"; Replication Flow memakai CDC untuk memuat data "in near real time" (dalam hitungan detik); remote tables memberi akses federasi real-time tanpa pemindahan fisik.
> **Source**: news.sap.com 8 Mar 2023; SAP-docs GitHub (SAP Datasphere HANA connections); komunitas SAP, diakses 2026-07-07.
> **Confidence**: high (istilah "near real-time = within seconds" dari dokumentasi/komunitas SAP; angka detik-nya karakteristik CDC, bukan garansi SLA — hindari klaim SLA).

> **Claim**: SAP HANA Cloud adalah database in-memory berbasis kolom yang menjalankan OLTP dan OLAP dalam satu sistem, memungkinkan analitik real-time berdampingan dengan transaksi.
> **Number/specific**: "storing data in column-based tables in main memory and bringing OLAP and OLTP together… significantly faster"; "run online transaction processing (OLTP) and analytical applications (OLAP) on the same SAP HANA database system at the same time."
> **Source**: SAP — "What is SAP HANA?" (sap.com/help.sap.com), diakses 2026-07-07.
> **Confidence**: high

> **Claim**: *Operational BI* memakai data real-time/near-real-time untuk keputusan operasional harian; *strategic BI* menganalisis data historis untuk tren jangka panjang. Keduanya saling melengkapi, bukan menggantikan.
> **Number/specific**: "Operational BI uses real-time or near-real-time data analytics to support day-to-day operations and tactical decision-making, while strategic BI answers questions about long-term trends"; operational BI menyasar line-of-business managers/frontline, strategic BI menyasar eksekutif/analis.
> **Source**: BI-Insider / EPC Group (definisi industri operational vs strategic BI), diakses 2026-07-07.
> **Confidence**: high (definisi konseptual industri, konsisten lintas sumber — bukan angka).

> **Claim**: *Near real-time* umumnya diartikan latency detik (bukan sub-detik murni); real-time murni sub-detik; batch berlatency jam–hari.
> **Number/specific**: Real-time murni ≈ 10–500 milidetik; near real-time (micro-batch) ≈ 1–30 detik (data muncul dalam hitungan detik–menit dari event); batch = jam hingga hari.
> **Source**: Medium/Remis Haroon "Pure vs Near Real-Time Streaming"; leadgen-economy; Confluent "Batch vs Real-Time" (sumber industri), diakses 2026-07-07.
> **Confidence**: medium (rentang bervariasi antar sumber; label sebagai "rentang tipikal industri", bukan standar baku. Brief menyebut "milidetik–5 detik" — aman sebagai near-real-time tapi angkanya harus dilabeli rentang industri).

> **Claim**: Batch processing cocok untuk pelaporan terjadwal/end-of-day, payroll, update data warehouse, analisis historis; stream/real-time cocok untuk deteksi fraud, personalisasi, monitoring kontinu.
> **Number/specific**: Batch: "data collected, stored, and processed at scheduled intervals", latency "hours to days"; stream: "transforms and enriches data as it's generated… immediate insights and actions", latency rendah/near-instant.
> **Source**: Confluent — "What is Batch Processing? Definition, Examples & Real-Time Alternatives", diakses 2026-07-07.
> **Confidence**: high

> **Claim**: Tekanan kebutuhan real-time mendorong adopsi data streaming naik tajam menurut Gartner.
> **Number/specific**: Gartner memproyeksikan adopsi *data streaming* (untuk agentic AI) naik dari **di bawah 15% (2025)** menjadi **lebih dari 60% (2028)**, didorong kebutuhan *real-time responsiveness* (use case: decision intelligence, autonomous operations, digital twins).
> **Source**: Gartner, "Top Trends for Data and Analytics", press release 16 Juni 2026 (Gartner Data & Analytics Summit, Sydney), diakses 2026-07-07.
> **Confidence**: medium (angka dari ringkasan press release Gartner; halaman gartner.com memblokir fetch langsung/403. Rekomendasi: atribusikan eksplisit ke "Gartner (2026)" dan bingkai sebagai tren streaming, BUKAN klaim "semua BI harus real-time").

> **Claim**: Federation/zero-copy di Datasphere memungkinkan query lintas sumber SAP dan non-SAP tanpa memindahkan data fisik, mengurangi latency dan duplikasi.
> **Number/specific**: "Remote Tables provide real-time data through data federation… without the need for physical data movement"; mode antara federation/replication/snapshot dikonfigurasi lewat GUI sebagai opsi tabel.
> **Source**: SAP Community (technology blog by SAP) + Expertum "Federation, replication and transformation with SAP Datasphere", diakses 2026-07-07.
> **Confidence**: medium-high (mekanisme benar; contoh join lintas Snowflake/Databricks "returned in seconds" berasal dari blog mitra — hindari mengutip angka "seconds" sebagai jaminan performa).

> **Claim**: SAP Analytics Cloud, SAP Datasphere, dan SAP HANA Cloud sama-sama berjalan di / terkait SAP Business Technology Platform (BTP) sebagai lapisan data-dan-analitik SAP.
> **Number/specific**: Datasphere "built on SAP BTP"; SAC adalah layanan analitik SaaS SAP; HANA Cloud sebagai DBaaS fondasi. (Kaitan lapisan: sumber ERP → warehouse/fabric (Datasphere/HANA) → BI (SAC).)
> **Source**: news.sap.com (Datasphere, 8 Mar 2023); sap.com (HANA Cloud; SAC), diakses 2026-07-07.
> **Confidence**: high

## Solution focus + Soltius anchor (from product_matrix.md)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| **SAP Analytics Cloud (SAC)** — model *live* vs *import/acquired* | Live = hanya metadata, query langsung ke sumber, real-time via InA; import = data disalin, disegarkan terjadwal, buka fitur planning/predictive | H2 #4 (implementasi di platform); definisi di lead | Analytics + **Data and AI Consulting** |
| **SAP Datasphere** (dulu Data Warehouse Cloud) | Business data fabric di atas BTP; federation (tanpa pindah data) vs replication CDC near-real-time | H2 #4 | Data and AI Consulting |
| **SAP HANA Cloud** | In-memory column store; OLTP+OLAP satu sistem; fondasi data terkini | H2 #4 (singkat) | Data and AI Consulting |
| Konsep *operational BI* vs *strategic BI*, real-time vs batch | Vendor-netral: jelaskan trade-off latency–biaya–kompleksitas; jangan promosikan real-time | H2 #1–3, #5 | — (badan artikel netral) |

**Soltius anchor**: **Data and AI Consulting** — "memetakan kebutuhan latency ke arsitektur BI yang tepat biaya". Placement: **closing**. Opsional 1 aside mid-artikel di H2 #4 (satu kalimat: memilih model live/import sesuai kebutuhan, dari pengalaman implementasi).

Reminder: Soltius **mengimplementasikan/mengintegrasikan/mendukung** SAC/Datasphere/HANA — **bukan membangun**-nya. Maks 2–3 self-mention. Jangan pakai superlatif; kredibilitas yang boleh: "kontributor pendapatan terbesar bagi SAP Indonesia (sejak 2015)", "SAP Platinum Partner via United VARs", "bagian dari Metrodata Group sejak 2008/berpengalaman sejak 1998".

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **SAP Help Portal — Live Data Connections (SAP Analytics Cloud)** — https://help.sap.com/docs/SAP_ANALYTICS_CLOUD/00f68c2e08b941f081002fd3691d86a7/d2a1edf7cda74315a2c5052de8a3a4eb.html — *what it backs*: live connection hanya menyimpan metadata; query real-time langsung ke sumber (bukti klaim live ≠ menyimpan data di SAC).
2. **SAP News — "A Deeper Look Into How SAP Datasphere Enables a Business Data Fabric" (8 Mar 2023)** — https://news.sap.com/2023/03/sap-datasphere-business-data-fabric/ — *what it backs*: Datasphere = penerus Data Warehouse Cloud; federation vs replication (CDC) near-real-time; "connect, not just move".
3. **Gartner — "Gartner Identifies the Top Trends for Data and Analytics" (16 Jun 2026)** — https://www.gartner.com/en/newsroom/press-releases/2026-06-16-gartner-identifies-the-top-trends-for-data-and-analytics — *what it backs*: adopsi data streaming <15% (2025) → >60% (2028) didorong real-time responsiveness (konteks tren pasar).
4. **Confluent — "Batch vs. Real-Time Data Processing"** — https://www.confluent.io/learn/batch-vs-real-time-data-processing/ — *what it backs*: definisi & use case batch (jam–hari, laporan terjadwal) vs stream (near-instant, fraud/monitoring) — sumber teknis netral.

Priority urutan tautan yang disarankan writer: SAP Help/News (produk) → Gartner (tren) → Confluent (definisi netral).

## FAQ Q&As (6 drafted, Bahasa Indonesia)

### Apa itu latency data?
Latency data adalah jeda waktu antara suatu peristiwa terjadi di sistem sumber dan saat data peristiwa itu tersedia untuk dianalisis. Semakin rendah latency, semakin "segar" datanya. Sebagai patokan industri: real-time murni ≈ 10–500 milidetik, *near real-time* ≈ 1–30 detik, sedangkan pemrosesan batch berlatency jam hingga hari karena data diolah pada jadwal tertentu, bukan seketika.

### Apa bedanya model live dan import di SAP Analytics Cloud?
Pada koneksi *live*, SAP Analytics Cloud hanya menyimpan metadata model; query dieksekusi langsung di sistem sumber (mis. S/4HANA, BW, atau SAP HANA) dan hasilnya tampil real-time—data tidak disalin ke SAC. Pada model *import/acquired*, data disalin ke SAC dan disegarkan lewat jadwal, sehingga membuka kemampuan transformasi, planning, dan predictive, tetapi data tidak otomatis mencerminkan perubahan terbaru di sumber.

### Apakah real-time BI selalu lebih baik daripada batch?
Tidak. Real-time hanya sepadan ketika keterlambatan beberapa menit menimbulkan kerugian nyata—misalnya deteksi fraud, pemantauan lini produksi, harga dinamis, atau stok cepat habis. Untuk KPI yang diputuskan mingguan atau bulanan, laporan batch harian sudah cukup, jauh lebih murah, dan lebih stabil. Mengejar latency nol untuk semua KPI umumnya membuang anggaran infrastruktur *streaming* tanpa menambah nilai keputusan.

### Apa itu operational BI?
Operational BI adalah penggunaan analitik data real-time atau near-real-time untuk mendukung keputusan operasional harian dan taktis—dipakai manajer lini bisnis dan staf garis depan. Berbeda dari *strategic BI* yang menganalisis data historis untuk tren jangka panjang dan keputusan eksekutif, operational BI menjawab pertanyaan yang menuntut tindakan segera. Keduanya saling melengkapi, bukan saling menggantikan.

### Apakah real-time BI lebih mahal?
Umumnya ya. Arsitektur *streaming*/event-driven menambah biaya infrastruktur, integrasi, dan pemeliharaan dibanding pemrosesan batch terjadwal—karena data harus diproses terus-menerus, bukan sekali sehari. Besarnya selisih bergantung pada volume data, sumber, dan SLA yang diminta, sehingga sebaiknya diperlakukan sebagai estimasi, bukan angka pasti. Prinsip praktisnya: bayar untuk latency rendah hanya pada KPI yang keputusannya benar-benar sensitif waktu.

### Apa itu pendekatan hybrid batch + streaming?
Pendekatan hybrid menggabungkan pemrosesan batch untuk sebagian besar KPI (yang cukup segar per jam/hari) dengan jalur *streaming*/near-real-time hanya untuk metrik operasional yang sensitif waktu. Di lapisan SAP, ini bisa diwujudkan lewat SAP Datasphere yang mendukung *federation* (akses langsung tanpa memindahkan data) maupun *replication* berbasis Change Data Capture untuk near-real-time, dipadukan dengan model *live* atau *import* di SAP Analytics Cloud sesuai kebutuhan.

## Data tables for the writer (if the article calls for one)

### Real-time vs near real-time vs batch (dimensi keputusan)
| Aspek | Real-time (streaming) | Near real-time (micro-batch/CDC) | Batch |
|---|---|---|---|
| Latency tipikal (rentang industri) | ~10–500 milidetik | ~1–30 detik | Jam hingga hari |
| Kesegaran data | Per peristiwa (event) | Detik | Snapshot terjadwal |
| Biaya infrastruktur & pemeliharaan | Tinggi | Sedang | Rendah |
| Kompleksitas | Tinggi (event-driven) | Sedang | Rendah (terjadwal) |
| Use case tipikal | Deteksi fraud, harga dinamis, monitoring lini produksi | Dashboard operasional, stok, SLA layanan | Laporan end-of-day, payroll, tren bulanan, update warehouse |
| Contoh KPI | Transaksi mencurigakan/menit, downtime mesin | Level stok, order tertunda | Penjualan bulanan, margin, laporan keuangan |

> Label rentang latency sebagai "tipikal industri" — bervariasi antar sumber, bukan standar baku.

### Model live vs import di SAP Analytics Cloud
| Aspek | Live connection | Import (acquired) |
|---|---|---|
| Lokasi data | Tetap di sumber; SAC simpan metadata saja | Disalin ke SAC (dua salinan data) |
| Kesegaran | Real-time (query langsung ke sumber via InA) | Bergantung jadwal import |
| Transformasi di SAC | Tidak (dilakukan di sumber) | Ya |
| Planning & predictive | Terbatas | Penuh |
| Cocok untuk | Data operasional yang harus selalu terkini | Analisis, planning, gabungan multi-sumber |

## Edge cases & nuance

- **"Live" ≠ murni sub-detik streaming.** Koneksi live SAC memberi data real-time karena query langsung ke sumber, tetapi kecepatannya dibatasi performa sistem sumber dan jaringan—ini "real-time query", bukan pipeline *event-streaming* seperti Kafka. Jangan samakan "live SAC" dengan "streaming".
- **Federation vs replication bukan sinonim real-time.** Federation memberi akses ke data terkini di sumber tanpa menyalin (bagus untuk kesegaran, tapi beban query jatuh ke sumber); replication CDC menyalin delta near-real-time (mengurangi beban sumber, latency detik). Pilihan bergantung beban dan SLA.
- **Data "terlalu segar" bisa berbahaya.** Keputusan atas data yang belum stabil (belum selesai diproses/direkonsiliasi) memicu keputusan gugup—salah satu alasan KPI eksekutif justru lebih baik batch harian.
- **Biaya real-time bukan hanya infrastruktur.** Ada biaya integrasi, pemeliharaan pipeline, dan keahlian (data engineer)—sering diremehkan peminta "dashboard real-time".
- **Sebagian besar KPI cukup batch.** Frame counter-conventional H2 #5: pertanyaannya bukan "seberapa cepat kita bisa", melainkan "keterlambatan berapa menit yang benar-benar merugikan".

## Flags (open factual risk)

- ⚠️ **Angka latency "milidetik–5 detik" (dari brief) / "10–500 ms" & "1–30 detik"**: berasal dari sumber industri (Medium, Confluent, leadgen), bukan standar baku; rentang bervariasi antar sumber → **rekomendasi**: sajikan sebagai "rentang tipikal industri", jangan sebagai angka pasti/standar. "Near real-time = milidetik–5 detik" versi brief masih dalam koridor yang wajar tetapi tetap harus dilabeli.
- ⚠️ **Statistik Gartner (streaming <15%→>60%)**: diambil dari ringkasan press release Gartner (16 Jun 2026); halaman gartner.com memblokir fetch (403), jadi verifikasi hanya lewat snippet pencarian → **rekomendasi**: atribusikan eksplisit "menurut Gartner (2026)"; bingkai sebagai tren adopsi *streaming untuk agentic AI*, JANGAN diperluas jadi "semua BI harus real-time".
- ⚠️ **Angka biaya real-time vs batch**: TIDAK ADA sumber SAP-resmi/analis dengan angka spesifik yang bisa diverifikasi → **rekomendasi**: jangan sebut angka/persentase biaya konkret; gunakan "umumnya lebih mahal" + framing rule-of-thumb berlabel estimasi (sesuai catatan brief).
- ⚠️ **Klaim performa "results in seconds" untuk federation lintas Snowflake/Databricks**: berasal dari blog mitra (NTT/Applium), bukan SLA SAP resmi → **rekomendasi**: jelaskan mekanisme federation/zero-copy tanpa mengutip angka detik sebagai jaminan performa.

## Definition snippet draft (40–60 words)

> **Real-time analytics** adalah analisis data segera setelah peristiwa terjadi (latency milidetik hingga detik), sementara **batch reporting** mengolah data pada jadwal tertentu sehingga berlatency jam hingga hari. **Operational BI** memakai data real-time atau near-real-time untuk keputusan operasional harian—berbeda dari *strategic BI* yang menganalisis data historis untuk tren jangka panjang.
