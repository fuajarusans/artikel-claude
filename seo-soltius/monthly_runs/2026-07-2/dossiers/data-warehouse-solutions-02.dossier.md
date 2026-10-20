---
brief_id: "data-warehouse-solutions-02"
researcher_run_date: "2026-07-07"
sources_cited: 12
flags: 6
---

# Research Dossier: Cara Menentukan Ukuran Data Warehouse — Panduan Sizing Compute & Storage

## TL;DR for the writer

- **Sizing = tiga dimensi, bukan satu angka.** Yang ditentukan bukan hanya "berapa TB", tapi **storage** (kapasitas + retensi), **compute** (paralelisme core/MPP untuk kecepatan query), dan **concurrency** (berapa user/query berjalan bersamaan). Storage relatif murah & elastis; **compute adalah pemicu biaya utama** di cloud consumption-based.
- **Rule-of-thumb angka yang bisa dipakai (WAJIB dilabeli estimasi + disumberkan):** rasio kompresi **5:1** dan cadangan **~50% untuk log/tempDB** — keduanya dari dokumentasi kapasitas Microsoft (bukan angka SAP). SAP menyebut kompresi kolumnar in-memory HANA sekitar **faktor 10** sebagai rule-of-thumb tersendiri. Jangan campur dua angka ini sebagai satu "fakta"; atribusikan masing-masing.
- **Performa query MPP naik dengan jumlah CPU core yang bekerja paralel** — ini fakta terverifikasi Microsoft (contoh: 12 compute node = 192 core paralel). Ini landasan mengapa "compute" = kecepatan.
- **SAP HANA Cloud benar-benar memisahkan skala compute dan storage** (bisa naik/turun disk tanpa mengubah memory/vCPU), dan sejak rilis Q4 2024 punya **Elastic Compute Node (ECN)** — node compute read-only yang ditambah/dilepas on-demand untuk lonjakan beban. Ini contoh platform yang cocok untuk worked example rightsizing.
- **Perubahan komersial 2026 yang harus disebut hati-hati:** SAP Datasphere & SAP Analytics Cloud **dihapus dari daftar Eligible Cloud Services untuk langganan BTPEA/CPEA/PAYG baru per 1 Januari 2026**; layanan yang sama tetap tersedia via **SAP Business Data Cloud (BDC)**. Pelanggan existing lanjut tanpa migrasi teknis. Untuk artikel *sizing*, sebut BDC/Datasphere sebagai contoh platform, jangan berlebihan membahas komersial (itu ranah brief lain).

---

## Core facts (verified)

> **Claim**: Performa query pada data warehouse MPP sangat bergantung pada jumlah CPU core yang memproses data secara paralel; menambah paralelisme (dalam batas) meningkatkan performa query.
> **Number/specific**: Contoh Microsoft: appliance 12 compute node = 192 CPU core paralel; 56 node = 896 core paralel. "Query performance ... depends heavily on the number of CPU cores working on your data in parallel."
> **Source**: Microsoft Learn — "Processing and storage capacity planning (Analytics Platform System)", https://learn.microsoft.com/en-us/sql/analytics-platform-system/processing-and-storage-capacity-planning (diakses 2026-07-07; halaman ms.date 2018, updated_at 2026-01-16)
> **Confidence**: high

> **Claim**: Estimasi kapasitas storage data warehouse harus memperhitungkan kompresi data dan cadangan untuk log/tempDB.
> **Number/specific**: Microsoft memakai formula: estimasi user data = kapasitas fisik × **5 (rasio kompresi 5:1)** × **50% untuk log dan tempDB**. Teks persis: "(5 for a 5:1 compression ratio) * (50% for logs and tempDB). This is a conservative estimate ... This is an estimate and is not enforced by software."
> **Source**: Microsoft Learn — Processing and storage capacity planning, URL di atas (diakses 2026-07-07)
> **Confidence**: high — tapi ini angka spesifik-produk Microsoft PDW/APS, **rule-of-thumb**, bukan universal. Writer harus melabeli sebagai aturan praktis + atribusi.

> **Claim**: Rasio kompresi bukan konstanta; bergantung pada sifat data, tipe data, nilai berulang, jumlah index, dan skenario.
> **Number/specific**: "The compression rate depends on the used scenario, so you cannot estimate the amount of memory needed with certainty."
> **Source**: SAP Community / SAP HANA documentation snippets (memory sizing), community.sap.com — "The secret of SAP HANA" & SAP HANA memory sizing docs (diakses 2026-07-07)
> **Confidence**: high (untuk pernyataan kualitatif; angka pasti tidak boleh diklaim tanpa konteks)

> **Claim**: Column store SAP HANA mengompres tiap kolom dengan kombinasi algoritma (dictionary, run-length, sparse, dsb.); SAP menyebut faktor kompresi sekitar 10 sebagai rule-of-thumb.
> **Number/specific**: "Compression typically achieves a factor of 10" disebut sebagai rule-of-thumb umum dalam materi SAP; contoh dunia nyata bervariasi (mis. 336,3 GB → 108,2 GB ≈ 3,1x). Jadi angkanya **rentang**, bukan tetap.
> **Source**: SAP HANA Platform — Memory Sizing (help.sap.com) + SAP Community "The secret of SAP HANA", https://community.sap.com/t5/technology-blog-posts-by-sap/the-secret-of-sap-hana-pssst-don-t-tell-anyone/ba-p/13445334 (diakses 2026-07-07)
> **Confidence**: medium — halaman help.sap.com resmi ter-render JavaScript sehingga isi lengkap tak terekstrak via fetch; angka "faktor 10" konsisten muncul di materi SAP tapi jelas rule-of-thumb. **Selalu labeli sebagai estimasi + "bergantung data".**

> **Claim**: SAP HANA Cloud memungkinkan penskalaan compute dan storage secara independen.
> **Number/specific**: "You can scale up and down disk (storage) space without changing the memory or the number of vCPUs (compute)." (materi SAP Learning "Scaling in SAP HANA Cloud")
> **Source**: SAP Learning — Scaling in SAP HANA Cloud, https://learning.sap.com/learning-journeys/provision-and-administer-databases-in-sap-hana-cloud/ (diakses 2026-07-07); SAP HANA Cloud product page https://www.sap.com/products/data-cloud/hana.html
> **Confidence**: high

> **Claim**: SAP HANA Cloud memperkenalkan Elastic Compute Node (ECN) — node compute read-only yang di-provision/di-deprovision on-demand untuk menskalakan compute terpisah dari storage.
> **Number/specific**: ECN diperkenalkan pada rilis **Q4 2024**. "An ECN is a read-only compute node that can be provisioned and deprovisioned on demand to match workload spikes." Hanya temporary/replica table yang disimpan di ECN; ECN tidak termasuk HA/DR sehingga footprint & TCO lebih kecil. Contoh use case: beban planning berat / analisis stok-harga real-time saat lonjakan (mis. Black Friday).
> **Source**: SAP Help Portal — SAP HANA Cloud Elastic Compute Node, https://help.sap.com/docs/hana-cloud-database/sap-hana-cloud-sap-hana-database-administration-guide/what-is-elastic-compute-node ; SAP Community "Harnessing Dynamic Elasticity (Elastic Compute Node)", https://community.sap.com/t5/technology-blog-posts-by-sap/harnessing-dynamic-elasticity-elastic-compute-node-for-smarter-scaling-in/ba-p/14016836 (diakses 2026-07-07)
> **Confidence**: high

> **Claim**: SAP Datasphere memakai model komersial berbasis Capacity Unit (CU) dengan blok compute dan storage terpisah.
> **Number/specific**: Layanan yang mengonsumsi CU: core application (compute & storage), data lake, BW bridge, data integration, data catalog. Angka blok yang beredar (blog member): compute block 64 GB RAM + 4 vCPU ≈ 2.124 CU/bulan (720 jam); storage block 256 GB SSD ≈ 52 CU/bulan; minimum tenant turun ke ~1.532 CU/bulan (sejak 15 April). Estimasi resmi via **SAP Datasphere Estimator**.
> **Source**: SAP KBA 3583153 "SAP Datasphere Capacity Unit Consumption", https://userapps.support.sap.com/sap/support/knowledge/en/3583153 ; SAP Datasphere pricing page https://www.sap.com/products/technology-platform/datasphere/pricing.html ; blog member SAP Community (angka blok) (diakses 2026-07-07)
> **Confidence**: medium — **konsep CU/blok terverifikasi**; angka CU spesifik berasal dari blog member dan bisa berubah. Writer: sebut *bahwa* Datasphere pakai model CU/blok compute-storage terpisah dan ada Estimator resmi; **jangan mematok angka CU pasti** tanpa cek SAP Datasphere Estimator terkini.

> **Claim**: SAP Datasphere & SAP Analytics Cloud dihapus dari daftar Eligible Cloud Services untuk langganan BTPEA/CPEA/PAYG BARU per 1 Januari 2026.
> **Number/specific**: "SAP Datasphere and SAP Analytics Cloud are scheduled to be removed from the list of Eligible Cloud Services for new BTPEA, CPEA, and PAYG subscriptions as of January 1, 2026." Setelah 31 Desember 2025 tidak tersedia untuk perpanjangan pada skema tsb; layanan yang sama tetap tersedia via SAP Business Data Cloud.
> **Source**: SAP Community (by SAP) — "Announcement: SAP Datasphere and SAP Analytics Cloud Availability via SAP Business Data Cloud", https://community.sap.com/t5/technology-blog-posts-by-sap/announcement-sap-datasphere-and-sap-analytics-cloud-availability-via-sap/ba-p/14140920 (diakses 2026-07-07)
> **Confidence**: high (posting resmi "by SAP")

> **Claim**: Pelanggan SAP Datasphere & SAP Analytics Cloud yang sudah ada dapat melanjutkan tanpa gangguan; tenant existing dipertahankan di bawah BDC tanpa migrasi teknis.
> **Number/specific**: "Existing SAP Datasphere and SAP Analytics Cloud tenants will be preserved under SAP BDC, no technical migration required." Pelanggan yang beli cloud credit sebelum 1 Jan 2026 tetap bisa memakainya selama masa perjanjian.
> **Source**: SAP Community (by SAP) — announcement URL di atas (diakses 2026-07-07)
> **Confidence**: high

> **Claim**: SAP Business Data Cloud (BDC) adalah solusi fully-managed SaaS yang menyatukan data SAP + pihak ketiga sebagai fondasi data untuk AI enterprise, dengan Databricks tertanam secara native.
> **Number/specific**: Diluncurkan **13 Februari 2025**; "unifies all SAP and third-party data ... trusted data foundation ... reliable AI"; "natively embeds Databricks technology for data engineering, machine learning and AI workloads." BDC mempersatukan SAP Datasphere, SAP Analytics Cloud, dan SAP Business Warehouse dalam satu pengalaman.
> **Source**: SAP News Center — "SAP Debuts Business Data Cloud with Databricks", https://news.sap.com/2025/02/sap-business-data-cloud-databricks-turbocharge-business-ai/ ; "SAP and Databricks: A Bold New Era of Data and AI", https://news.sap.com/2025/02/sap-databricks-open-bold-new-era-data-ai/ (diakses 2026-07-07)
> **Confidence**: high untuk sifat SaaS/Databricks/tanggal (SAP News resmi); komponen Datasphere+SAC+BW dikonfirmasi via SAP Community.

> **Claim**: Di cloud consumption-based, salah sizing langsung tercermin di biaya berjalan, bukan sekali beli; mengonfigurasi default untuk beban puncak = pemborosan.
> **Number/specific**: Pola cloud modern memisahkan storage (elastis, relatif murah) dari compute (mahal, sumber biaya) sehingga bisa auto-scale/pause; ECN SAP HANA Cloud adalah contoh menambah compute hanya saat dibutuhkan → footprint & TCO lebih kecil.
> **Source**: SAP Community ECN blog + SAP Learning scaling (URL di atas); FinOps Foundation — FinOps for Data/Cloud Platforms, https://www.finops.org/insights/finops-for-data-cloud-platforms/ (diakses 2026-07-07)
> **Confidence**: high (kualitatif); angka biaya spesifik tidak diklaim.

> **Claim (Soltius)**: Soltius menyediakan layanan Data and AI Consulting dan pengalaman implementasi/sizing beban kerja SAP lintas industri.
> **Number/specific**: SAP Platinum Certified Channel Partner via United VARs; berdiri 1998; bagian Metrodata Group (sejak 2008); 200+ konsultan; 120+ klien; layanan **Data and AI Consulting** (di bawah Supports) + **Implementation**.
> **Source**: `knowledge_base/company_profile.md` + `product_matrix.md` (pre-approved)
> **Confidence**: high

---

## Solution focus + Soltius anchor (from product_matrix.md)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| **SAP HANA Cloud** (in-memory columnar) | Memisahkan skala compute & storage; scale disk tanpa ubah memory/vCPU; **Elastic Compute Node (ECN)** read-only, on-demand (rilis Q4 2024) untuk lonjakan compute | H2 #3 (compute vs storage), H2 #5 (rightsizing/elastisitas) | **Data and AI Consulting** + Implementation |
| **SAP Datasphere** (di atas HANA Cloud) | Model **Capacity Unit (CU)** dengan blok compute & storage terpisah; ada **Datasphere Estimator** resmi; kini bagian dari **SAP Business Data Cloud** | H2 #4 (worked example / tabel skenario) sebagai contoh platform | (sama — closing) |
| **Konsep vendor-neutral** | Storage vs compute terpisah, MPP (paralelisme core), rasio kompresi kolumnar, concurrency/workload management, elastic scaling | H2 #1–#5 (badan utama, netral vendor) | — |

**Soltius anchor (closing, 1 mention utama + max 1 aside):** "Melalui layanan **Data and AI Consulting**, Soltius membantu memetakan beban kerja nyata (profil query, jumlah pengguna, retensi, pertumbuhan) ke kapasitas compute/storage yang pas — menghindari kapasitas menganggur maupun keluhan performa." Aside opsional di H2 #4: di lapangan, sizing paling akurat berangkat dari profil query nyata, bukan tebakan.

Reminder: Soltius **mengimplementasikan/memigrasikan/mendukung** SAP HANA Cloud/Datasphere — **tidak membangunnya**. Max 2–3 self-mention.

---

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **Microsoft Learn — "Processing and storage capacity planning" (updated 2026-01-16, diakses 2026-07-07)** — https://learn.microsoft.com/en-us/sql/analytics-platform-system/processing-and-storage-capacity-planning — *what it backs*: paralelisme MPP menentukan performa query; formula storage rasio kompresi **5:1** + cadangan **50% log/tempDB** (rule-of-thumb).
2. **SAP News Center — "SAP Debuts Business Data Cloud with Databricks" (2025-02-13, diakses 2026-07-07)** — https://news.sap.com/2025/02/sap-business-data-cloud-databricks-turbocharge-business-ai/ — *what it backs*: BDC fully-managed SaaS, native Databricks, fondasi data untuk AI; kemasan baru Datasphere/SAC.
3. **SAP Help / SAP Learning — Scaling in SAP HANA Cloud + Elastic Compute Node (diakses 2026-07-07)** — https://help.sap.com/docs/hana-cloud-database/sap-hana-cloud-sap-hana-database-administration-guide/what-is-elastic-compute-node — *what it backs*: pemisahan skala compute/storage & ECN on-demand (contoh rightsizing di cloud).

Priority order terpenuhi: SAP official + Microsoft (hyperscaler docs).

---

## FAQ Q&As (7 drafted, Bahasa Indonesia)

### Bagaimana cara menghitung ukuran (sizing) data warehouse?
Mulai dari kebutuhan bisnis, bukan spesifikasi vendor. Hitung volume data mentah, terapkan rasio kompresi (rule-of-thumb umum 5:1 pada dokumentasi kapasitas Microsoft), lalu cadangkan sekitar 50% untuk log dan area kerja sementara (tempDB). Setelah storage, tentukan compute dari jumlah pengguna bersamaan dan berat query, karena performa MPP naik seiring jumlah CPU core paralel. Tambahkan proyeksi pertumbuhan tahunan sebelum memutuskan tier.

### Berapa rasio kompresi data yang umum dipakai untuk perhitungan?
Sebagai rule-of-thumb, dokumentasi kapasitas Microsoft memakai rasio 5:1 untuk memperkirakan storage dari data mentah. Untuk platform in-memory seperti SAP HANA, SAP menyebut kompresi kolumnar sekitar faktor 10 sebagai perkiraan kasar. Angka nyata bervariasi menurut sifat data, tipe kolom, dan nilai berulang, sehingga rasio ini harus diperlakukan sebagai estimasi awal, bukan jaminan — validasi dengan data Anda sendiri.

### Apa beda menskalakan compute dan menskalakan storage?
Storage adalah kapasitas menyimpan data — relatif murah dan mudah ditambah/dikurangi. Compute adalah tenaga pemrosesan (CPU core, memory) yang menentukan kecepatan query dan biasanya menjadi pemicu biaya utama di cloud. Arsitektur modern memisahkan keduanya: SAP HANA Cloud, misalnya, memungkinkan menaikkan disk tanpa mengubah memory/vCPU, dan menambah Elastic Compute Node read-only hanya saat beban query melonjak.

### Apa itu concurrency dan mengapa penting untuk sizing?
Concurrency adalah jumlah pengguna atau query yang berjalan bersamaan pada data warehouse — misalnya lonjakan dashboard tiap Senin pagi saat tim menyiapkan laporan. Concurrency tinggi menuntut compute paralel lebih besar, bukan sekadar storage lebih banyak. Karena inilah jumlah pengguna Business Intelligence yang query bersamaan menjadi salah satu input sizing yang paling sering diremehkan dan menyebabkan dashboard timeout.

### Bagaimana memperkirakan pertumbuhan data ke depan saat sizing?
Proyeksikan pertumbuhan dari tiga sumber: kenaikan volume transaksi tahunan, sumber/aplikasi data baru yang akan diintegrasikan, dan kebijakan retensi historis (berapa tahun data disimpan). Sisakan headroom yang realistis, bukan angka puncak seumur hidup. Di cloud consumption-based, over-provisioning untuk pertumbuhan bertahun-tahun ke depan berarti membayar kapasitas menganggur setiap bulan; lebih baik andalkan elastisitas dan tinjau ulang kapasitas berkala.

### Apakah cloud selalu lebih murah untuk data warehouse beban besar?
Tidak selalu. Cloud unggul saat beban fluktuatif karena Anda membayar sesuai pemakaian dan bisa auto-scale atau pause. Namun untuk beban besar yang stabil dan berjalan terus-menerus, model consumption-based bisa lebih mahal dari kapasitas tetap jika tidak dikelola. Yang menentukan bukan "cloud vs on-premise", melainkan disiplin rightsizing: mengonfigurasi default untuk beban puncak justru pemborosan biaya berjalan.

### Bagaimana SAP HANA Cloud dan SAP Datasphere menangani penskalaan?
SAP HANA Cloud memisahkan skala compute dan storage: disk bisa dinaikkan/diturunkan tanpa mengubah memory atau vCPU, dan sejak rilis Q4 2024 tersedia Elastic Compute Node — node compute read-only yang ditambah on-demand untuk lonjakan query. SAP Datasphere, yang berjalan di atas HANA Cloud, memakai model Capacity Unit dengan blok compute dan storage terpisah serta menyediakan Estimator resmi untuk memperkirakan kebutuhan; kini menjadi bagian dari SAP Business Data Cloud.

---

## Data tables for the writer

### Tiga dimensi sizing data warehouse (kerangka utama)
| Dimensi | Yang diukur | Input bisnis penentu | Sifat biaya |
|---|---|---|---|
| **Storage** | Kapasitas menyimpan data (TB) | Volume data mentah × kompresi + retensi historis + cadangan log/temp | Relatif murah, elastis |
| **Compute** | Kecepatan pemrosesan query (CPU core/memory, MPP) | Berat/kompleksitas query, SLA waktu laporan | **Pemicu biaya utama** di cloud |
| **Concurrency** | Jumlah query/user bersamaan | Jumlah pengguna BI/dashboard, jendela pelaporan | Menuntut compute paralel, bukan storage |

### Worked example — dari 2 TB data mentah ke perkiraan kapasitas (rule-of-thumb, LABEL sebagai ilustrasi)
| Langkah | Perhitungan | Hasil |
|---|---|---|
| Data mentah | Titik awal | 2 TB |
| Setelah kompresi (5:1, rule-of-thumb Microsoft) | 2 TB ÷ 5 | ~0,4 TB data terkompres |
| Cadangan log + tempDB (~50%) | +50% area kerja | ~0,6 TB storage disediakan |
| Compute (tier) | Ditentukan concurrency + berat query, bukan ukuran data | mis. tier untuk N user bersamaan |
| Pertumbuhan | +headroom realistis (mis. 20–30%/th), andalkan elastisitas | tinjau berkala |

> ⚠️ Angka 5:1 dan 50% adalah **rule-of-thumb dari dokumentasi Microsoft** untuk produk mereka, bukan jaminan universal. Writer harus melabeli tabel sebagai ilustrasi dan mengatribusikan sumbernya.

### Skenario kecil / menengah / besar (kerangka, bukan angka pasti)
| Skenario | Data mentah | Pengguna bersamaan | Fokus keputusan |
|---|---|---|---|
| Kecil | < 1 TB | < 20 | Storage kecil; 1 tier compute; elastisitas cukup |
| Menengah | 1–10 TB | 20–100 | Pisahkan compute/storage; siapkan auto-scale untuk peak |
| Besar | > 10 TB | > 100 | MPP + node compute tambahan (mis. ECN) untuk beban berat; FinOps ketat |

---

## Edge cases & nuance

- **Compute, bukan storage, yang biasanya membengkakkan tagihan.** Banyak pembeli fokus ke "berapa TB" padahal di cloud consumption-based, biaya utama datang dari compute yang menyala (kredit/CU per jam). Pesan kontra-intuitif ini adalah inti nilai artikel.
- **Rasio kompresi bukan angka tetap.** 5:1 (Microsoft) dan ~faktor 10 (SAP HANA) adalah dua rule-of-thumb dari konteks berbeda. Jangan sajikan sebagai satu "fakta gabungan"; hasil nyata bergantung data.
- **On-premise fixed masih masuk akal** untuk beban besar yang stabil, prediktabel, dan berjalan 24/7 — di sinilah kapasitas tetap bisa lebih murah daripada consumption. Artikel harus jujur soal ini (H2 #5).
- **Sizing ≠ TCO.** Sizing adalah *input* teknis ke perhitungan biaya; rincian TCO/harga sudah dibahas artikel lain (2026-08-01) — jangan mengulang komponen biaya/lisensi di sini.
- **Concurrency sering diremehkan.** Data kecil pun bisa lambat jika 100 user query dashboard bersamaan tanpa compute paralel memadai — kaitkan ke Business Intelligence (konsumen utama warehouse).
- **Elastisitas ≠ tanpa perencanaan.** "Cloud elastis" tidak berarti abaikan sizing; default yang dikonfigurasi untuk peak tetap membakar biaya. Rightsizing = menyetel baseline + membiarkan elastisitas menangani lonjakan.

## Flags (open factual risk)

- ⚠️ **Rasio kompresi 5:1 & cadangan 50% log/tempDB**: valid sebagai kutipan Microsoft, tapi **spesifik produk Microsoft PDW/APS**, bukan angka SAP/universal. → Recommendation: sajikan sebagai *rule-of-thumb* dengan atribusi "menurut dokumentasi kapasitas Microsoft"; jangan klaim sebagai standar semua data warehouse.
- ⚠️ **Faktor kompresi ~10 SAP HANA**: rule-of-thumb yang konsisten muncul di materi SAP, tetapi halaman help.sap.com resmi ter-render JS sehingga isi lengkap tidak bisa diekstrak via fetch; contoh nyata bervariasi (mis. 3,1x). → Recommendation: label "sekitar/rule-of-thumb, bergantung data"; jangan mematok angka tunggal sebagai fakta keras.
- ⚠️ **Angka Capacity Unit Datasphere** (compute block 2.124 CU/bln, storage 52 CU/bln, min 1.532 CU/bln): berasal sebagian dari blog member SAP Community dan bisa berubah. → Recommendation: sebut *bahwa* Datasphere pakai model CU/blok compute-storage terpisah + ada Estimator resmi; **jangan mematok angka CU/harga** tanpa cek SAP Datasphere Estimator terkini. Brief juga meminta tidak menyebut harga per unit tanpa sumber SAP resmi — patuhi.
- ⚠️ **Tanggal ECN "Q4 2024"**: konsisten di beberapa posting SAP Community; belum diverifikasi ke halaman rilis resmi tunggal (help.sap.com ter-render JS). → Recommendation: boleh sebut "diperkenalkan pada rilis SAP HANA Cloud akhir 2024" tanpa menegaskan kuartal jika ingin ekstra aman; klaim fungsional ECN (read-only, on-demand, terpisah dari storage) aman.
- ⚠️ **Perubahan komersial BDC per 1 Jan 2026**: sumber adalah posting "by SAP" di SAP Community (bukan press release news.sap.com untuk klausul BTPEA/CPEA spesifik). Confidence tinggi tapi bukan halaman legal resmi. → Recommendation: untuk artikel *sizing*, sentuh singkat sebagai konteks ("Datasphere kini menjadi bagian dari SAP Business Data Cloud"); hindari detail komersial mendalam — itu ranah brief lain.
- ⚠️ **Worked example angka (2 TB → ~0,6 TB)**: ilustrasi hasil rule-of-thumb, bukan rekomendasi kapasitas nyata. → Recommendation: writer wajib melabeli "contoh ilustratif" agar pembaca tidak memakainya sebagai patokan pembelian.

## Definition snippet draft (40–60 words)

> **Sizing data warehouse** adalah proses menentukan kapasitas **storage**, **compute**, dan **concurrency** yang dibutuhkan agar performa query sesuai kebutuhan tanpa membayar kapasitas menganggur. Berbeda dari sekadar "berapa TB", sizing menerjemahkan input bisnis — volume data (dengan rasio kompresi), jumlah pengguna bersamaan, dan proyeksi pertumbuhan — menjadi keputusan teknis compute dan storage, yang di cloud consumption-based langsung memengaruhi biaya bulanan.
