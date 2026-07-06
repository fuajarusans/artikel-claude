---
brief_id: "digital-manufacturing-04"
researcher_run_date: "2026-06-02"
sources_cited: 14
flags: 5
---

# Research Dossier: Predictive Maintenance dan OEE: Dua Pilar Pabrik Pintar Berbasis Data

## TL;DR for the writer

- OEE (Overall Equipment Effectiveness) adalah metrik universal efisiensi pabrik — rumus: Availability × Performance × Quality — dengan benchmark "world-class" 85%; rata-rata industri global berada di 55–65%. Fakta ini bersumber dari literatur MESA International dan dikonfirmasi oleh berbagai vendor OEE analytics.
- Predictive maintenance adalah strategi pemeliharaan berbasis data sensor real-time dan analitik/ML untuk memprediksi kegagalan mesin sebelum terjadi — berbeda dengan preventive (jadwal rutin) dan reactive (perbaiki setelah rusak).
- SAP Digital Manufacturing (Cloud) menyertakan OEE tracking dan dashboard sebagai bagian dari modul "SAP Digital Manufacturing for Insights" — termasuk drill-down analisis loss, perbandingan multi-plant, dan root-cause analysis. Ini adalah fitur standar, bukan add-on terpisah, berdasarkan dokumentasi SAP Help Portal.
- Di SAP S/4HANA, modul pemeliharaan adalah "Plant Maintenance (PM)" — namun dalam konteks S/4HANA modern juga disebut "Asset Management (AM)" sebagai nama fungsional yang lebih luas; kedua istilah digunakan oleh SAP. Gunakan "Plant Maintenance" sebagai nama modul, "Asset Management" sebagai nama area solusi.
- Biaya unplanned downtime di industri manufaktur bervariasi signifikan per sektor (otomotif lebih tinggi dari produksi umum); angka spesifik untuk Indonesia/Asia Tenggara tidak tersedia secara publik dari sumber Tier-1 — penulis harus menggunakan rentang global dari sumber yang ada tanpa ekstrapolasi ke Indonesia.

---

## Core facts (verified)

> **Claim**: OEE (Overall Equipment Effectiveness) dihitung dengan rumus Availability × Performance × Quality
> **Number/specific**: OEE = Availability × Performance × Quality; masing-masing komponen dinyatakan dalam persentase (0–100%)
> **Source**: MESA International (Manufacturing Enterprise Solutions Association) — standar formula industri yang digunakan oleh SAP, Siemens, Rockwell, dan semua vendor MES/OEE; dikonfirmasi juga di SAP Help Portal (help.sap.com/docs/sap-digital-manufacturing/insights/oee-calculations)
> **Confidence**: high

---

> **Claim**: Benchmark "world-class" OEE adalah 85%
> **Number/specific**: 85% OEE = world-class (top ~10% industri globally). Benchmark ini berasal dari karya Seiichi Nakajima (1980s, pendiri TPM/Total Productive Maintenance) dan dikonfirmasi literatur industri
> **Source**: Evocon, TeepTrak, Tractian (multiple OEE analytics vendors citing the same Nakajima-originated benchmark); MESA International (standard formula)
> **Confidence**: high — benchmark 85% adalah konsensus industri yang dikutip secara konsisten dari banyak sumber independen

---

> **Claim**: Rata-rata OEE industri manufaktur global berada di 55–65%
> **Number/specific**: Global discrete manufacturing average: 55–65%. Pabrik dengan OEE 85%+ termasuk top 10% industri
> **Source**: TeepTrak "OEE Benchmark Report 2026" (450+ plants data); dikonfirmasi Evocon (50+ countries OEE benchmark study)
> **Confidence**: high — multiple independent data sources menunjukkan range yang konsisten

---

> **Claim**: Self-reported OEE biasanya 10–18 poin persentase lebih tinggi dari OEE yang diukur secara akurat
> **Number/specific**: 10–18 percentage points overstatement — karena operator melewatkan micro-stops, salah mengkategorikan changeover sebagai planned downtime, dan menggunakan nameplate cycle time bukan demonstrated best cycle
> **Source**: MESA International; TeepTrak OEE Benchmark Report 2026
> **Confidence**: medium-high — dikonfirmasi oleh MESA dan vendor OEE analytics; angka 10–18 pp adalah range dari beberapa studi, bukan satu angka tunggal

---

> **Claim**: SAP Digital Manufacturing (Cloud) menyertakan OEE tracking dan dashboard sebagai fitur standar
> **Number/specific**: SAP Digital Manufacturing for Insights mencakup: OEE calculations, drill-down loss analysis, multi-plant comparison, root-cause analysis, Line Monitor (live monitoring), embedded SAP Analytics Cloud, dashboard designer
> **Source**: SAP Help Portal — "About SAP Digital Manufacturing for Insights" (help.sap.com/docs/sap-digital-manufacturing/insights/about-sap-digital-manufacturing-for-insights); SAP product page (sap.com/products/scm/digital-manufacturing.html)
> **Confidence**: high — SAP official documentation

---

> **Claim**: SAP Digital Manufacturing for Insights mendukung integrasi dengan SAP Analytics Cloud untuk analitik natural-language ("Just Ask")
> **Number/specific**: SAP Analytics Cloud 'Just Ask' dapat digunakan di atas data SAP Digital Manufacturing untuk pembuatan laporan dan dashboard personal
> **Source**: SAP Community Blog — "AI-based Analytics: SAP Analytics Cloud 'Just Ask' on top of SAP Digital Manufacturing data" (community.sap.com, 2025)
> **Confidence**: high — SAP official community/blog post

---

> **Claim**: SAP menggunakan Manufacturing Data Objects (MDOs) sebagai fondasi data untuk OEE analytics di SAP Digital Manufacturing
> **Number/specific**: Production data di-transform, dikontekstualisasikan, dan disimpan dalam MDOs yang tersedia untuk self-service manufacturing analytics melalui external API
> **Source**: SAP Help Portal — SAP Digital Manufacturing for Insights documentation
> **Confidence**: high — SAP official documentation

---

> **Claim**: Di SAP S/4HANA, modul pemeliharaan mesin bernama Plant Maintenance (PM), yang dalam S/4HANA juga dirujuk sebagai Asset Management
> **Number/specific**: SAP menyebut area ini "Plant Maintenance" (PM) sebagai nama modul dan "Asset Management" sebagai nama solusi fungsional lebih luas dalam S/4HANA. Fungsi: work order management, perencanaan dan eksekusi maintenance, integrasi production planning
> **Source**: SAP Help Portal (dokumentasi S/4HANA modul PM/AM); SAP product documentation umum
> **Confidence**: medium-high — SAP sering mengganti nama area fungsional; lihat flag #1

---

> **Claim**: Empat tipe maintenance yang dikenal dalam industri: reactive, preventive, condition-based, predictive
> **Number/specific**: (1) Reactive/breakdown: perbaiki setelah rusak; (2) Preventive: jadwal rutin berdasarkan waktu/jam pakai; (3) Condition-based (CBM): perbaiki saat parameter kondisi tertentu terlampaui; (4) Predictive: prediksi kegagalan via data sensor + ML sebelum terjadi
> **Source**: MESA International; ISO 55000 (Asset Management standard); literatur industri standar (Nakajima TPM, IEC 60300-3-11 CBM standard)
> **Confidence**: high — konsensus industri

---

> **Claim**: Predictive maintenance menggunakan data sensor (vibration, temperature, pressure) dan analitik/ML untuk mendeteksi anomali
> **Number/specific**: Sensor tipe utama: vibration, temperature, pressure, current/power draw, acoustic emission. Alur: sensor → edge computing → cloud analytics → alert/work order → maintenance action
> **Source**: IIoT industry standard architecture; Siemens/Rockwell/SAP documentation; IEEE/IEC standards
> **Confidence**: high — arsitektur teknis ini adalah konsensus industri

---

> **Claim**: SAP Asset Intelligence Network (AIN) adalah platform berbagi data aset antar perusahaan
> **Number/specific**: AIN memungkinkan produsen berbagi data teknis mesin dengan operator/pengguna akhir, serta memfasilitasi integrasi data aset antara OEM dan pemilik aset
> **Source**: SAP product page (sap.com — SAP Asset Intelligence Network)
> **Confidence**: medium — lihat flag #2 tentang status AIN saat ini

---

> **Claim**: Unplanned downtime memiliki biaya yang sangat besar di industri manufaktur
> **Number/specific**: Untuk industri otomotif secara global, biaya unplanned downtime dapat mencapai USD 22,000–USD 50,000 per menit (angka dari berbagai studi Industri Otomotif 2019–2023); Aberdeen Group (Aptean) menyebut rata-rata biaya downtime USD 260,000/jam untuk manufaktur besar. Untuk industri Indonesia secara spesifik: tidak tersedia data Tier-1 yang dapat dikutip
> **Source**: Aberdeen Group/Aptean Research (dikutip oleh banyak vendor); angka spesifik per menit dari Siemens/Volkswagen automotive study
> **Confidence**: medium — angka Aberdeen Group banyak dikutip ulang dan sulit diverifikasi primer; lihat flag #3

---

> **Claim**: Soltius memiliki pengalaman implementasi SAP di industri manufaktur, termasuk Automotive dan Mill Products
> **Number/specific**: Industri Automotive dan Mill Products adalah bagian dari 9 vertikamulti yang dilayani Soltius; 200+ konsultan; bagian dari Metrodata Group
> **Source**: knowledge_base/company_profile.md (pre-approved Soltius facts)
> **Confidence**: high — diverifikasi dari company_profile.md

---

> **Claim**: Prinsip kritikalitas mesin: tidak semua mesin layak mendapat predictive maintenance
> **Number/specific**: Matriks kritikalitas mesin — dimensi: (1) dampak downtime terhadap produksi/revenue, (2) frekuensi gangguan historis, (3) biaya sensor/implementasi vs nilai mesin. Hanya mesin dengan dampak tinggi + gangguan berulang yang cost-effective untuk predictive maintenance
> **Source**: ISO 55000 (Asset Management); MESA International best practices; Gartner/IDC asset management reports
> **Confidence**: high — prinsip ini adalah best practice industri yang dikonsensuskan

---

## Solution focus + Soltius anchor (from product_matrix.md)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| SAP Digital Manufacturing (Cloud) — modul Insights | OEE dashboard termasuk standar; Line Monitor untuk live monitoring; drill-down loss analysis; multi-plant comparison; embedded SAC | H2 #4: "Peran SAP dalam Predictive Maintenance dan OEE Monitoring" | Implementation + industry experience (Mill Products, Automotive) |
| SAP S/4HANA Plant Maintenance (PM) / Asset Management | Work order management; integrasi dengan Production Planning (PP); auto-trigger work order dari anomali sensor | H2 #4 | Implementation service |
| SAP Asset Intelligence Network (AIN) | Platform berbagi data aset antar perusahaan (OEM ↔ operator); perlu konfirmasi status saat ini — lihat flag #2 | H2 #4 (dengan hedging) | — |
| IIoT sensor layer | Sensor types: vibration, temperature, pressure; edge computing → cloud analytics; bukan produk SAP — enabler | H2 #3 | — |
| SAP Analytics Cloud (embedded) | Natural language analytics ("Just Ask") di atas SAP DM data | H2 #4 (brief mention) | — |

**Soltius anchor placement:**
- **Mid-article aside** (H2 #4, 1 kalimat): "Dalam implementasi SAP Digital Manufacturing yang Soltius tangani di industri manufaktur, OEE dashboard menjadi titik awal identifikasi bottleneck produksi secara sistematis."
- **Closing CTA**: mengajak Plant Manager/IT Manager berdiskusi tentang kesiapan implementasi predictive maintenance berbasis SAP — anchor ke layanan Implementation + AMS Soltius.
- **Credential**: SAP Platinum Partner; pengalaman sejak 1998; industri Automotive dan Mill Products

---

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **SAP Help Portal — "About SAP Digital Manufacturing for Insights" (2025)** — https://help.sap.com/docs/sap-digital-manufacturing/insights/about-sap-digital-manufacturing-for-insights — *what it backs*: kapabilitas OEE tracking, Line Monitor, drill-down analytics, MDO data foundation di SAP Digital Manufacturing Cloud

2. **SAP Product Page — SAP Digital Manufacturing** — https://www.sap.com/products/scm/digital-manufacturing.html — *what it backs*: definisi resmi SAP Digital Manufacturing sebagai solusi MES + OEE + insights yang terintegrasi

3. **Evocon — "World-Class OEE: Industry Benchmarks from 50+ Countries"** — https://evocon.com/articles/world-class-oee-industry-benchmarks-from-more-than-50-countries/ — *what it backs*: benchmark OEE world-class 85%, rata-rata industri global 55–65%, distribusi per sektor

4. **MESA International** — https://www.mesa.org/ — *what it backs*: standar formula OEE (Availability × Performance × Quality); standar industri MES/OEE analytics

---

## FAQ Q&As (6 drafted, Bahasa Indonesia)

### Apa rumus OEE dan apa artinya nilai 85%?

OEE (Overall Equipment Effectiveness) dihitung dengan rumus: **OEE = Availability × Performance × Quality**. Availability mengukur waktu mesin beroperasi vs waktu yang direncanakan; Performance mengukur kecepatan aktual vs kecepatan ideal; Quality mengukur rasio produk tanpa cacat. Nilai OEE 85% atau lebih dianggap "world-class" — dicapai hanya oleh sekitar 10% pabrik di dunia. Rata-rata pabrik manufaktur global berada di kisaran 55–65%.

---

### Apa perbedaan predictive maintenance dan preventive maintenance?

Preventive maintenance berjalan berdasarkan jadwal tetap (misalnya, setiap 500 jam operasi) tanpa mempertimbangkan kondisi aktual mesin — mengakibatkan penggantian komponen yang masih baik atau, sebaliknya, melewatkan kerusakan yang berkembang di luar jadwal. Predictive maintenance menggunakan data sensor real-time (getaran, suhu, tekanan) dan analitik untuk mendeteksi anomali dan memprediksi kapan mesin akan gagal, sehingga maintenance hanya dilakukan saat benar-benar diperlukan — mengurangi biaya dan downtime tak terencana.

---

### Berapa biaya predictive maintenance dibandingkan reaktif?

Pemeliharaan reaktif (perbaiki setelah rusak) umumnya tiga hingga empat kali lebih mahal dibanding perawatan terencana, karena menimbulkan biaya perbaikan darurat, kehilangan produksi, dan potensi kerusakan sekunder. Sementara implementasi predictive maintenance membutuhkan investasi awal (sensor, platform analitik, integrasi sistem), ROI-nya berasal dari berkurangnya unplanned downtime, optimasi persediaan suku cadang, dan memperpanjang umur mesin. Angka ROI spesifik bergantung pada jenis industri dan tingkat kritikalitas mesin.

---

### Apakah predictive maintenance bisa diterapkan di mesin lama (legacy)?

Ya, dengan syarat. Mesin lama dapat dilengkapi retrofit sensor eksternal (getaran, suhu, arus listrik) tanpa mengganti mesin — ini disebut pendekatan "condition monitoring non-invasif". Data dari sensor tersebut kemudian dikirim ke platform analitik via edge computing. Namun perlu analisis cost-benefit per mesin: tidak semua mesin lama layak dipasangi sensor — prioritaskan mesin yang berada di critical path produksi dan memiliki rekam jejak gangguan yang signifikan.

---

### Apa perbedaan SAP Plant Maintenance dan SAP Digital Manufacturing?

SAP Plant Maintenance (PM), dalam S/4HANA juga disebut Asset Management, adalah modul ERP untuk merencanakan, menjadwalkan, dan mengeksekusi pekerjaan pemeliharaan — termasuk manajemen work order, histori aset, dan biaya maintenance. SAP Digital Manufacturing (Cloud) adalah platform MES (Manufacturing Execution System) yang berfokus pada visibilitas lantai produksi secara real-time, termasuk OEE tracking, production order execution, dan analitik shop-floor. Keduanya saling melengkapi: anomali dari SAP Digital Manufacturing dapat memicu work order otomatis di SAP Plant Maintenance.

---

### Apa data sensor yang dibutuhkan untuk predictive maintenance yang efektif?

Tiga jenis sensor paling umum adalah: (1) **sensor getaran/vibration** — mendeteksi ketidakseimbangan, keausan bearing, dan misalignment; (2) **sensor suhu/thermal** — mendeteksi overheating yang mengindikasikan beban berlebih atau pelumasan tidak cukup; (3) **sensor tekanan/pressure** dan arus listrik — untuk mesin pneumatik/hydraulik dan motor elektrik. Data dari sensor ini membutuhkan sampling rate yang memadai dan infrastruktur edge computing untuk agregasi awal sebelum dikirim ke platform analitik cloud.

---

### Berapa lama implementasi sistem predictive maintenance berbasis SAP?

Tidak ada angka tunggal — durasi bergantung pada skala pabrik, jumlah mesin yang di-monitor, dan kematangan infrastruktur IT/OT yang ada. Sebagai referensi umum dalam praktik implementasi: fase awal (sensor deployment + integrasi ke SAP Digital Manufacturing untuk satu lini produksi) dapat berlangsung 3–6 bulan; implementasi penuh untuk seluruh pabrik yang kompleks bisa 12–24 bulan. Fase paling kritis adalah integrasi data OT (sensor/SCADA) dengan IT (ERP/MES) — inilah yang sering menjadi bottleneck utama.

---

## Data tables for the writer

### Empat Tipe Maintenance: Perbandingan

| Tipe Maintenance | Kapan Bertindak | Data yang Digunakan | Keunggulan | Kelemahan |
|---|---|---|---|---|
| **Reaktif / Breakdown** | Setelah mesin rusak | Tidak ada | Tidak ada biaya monitoring | Downtime tak terduga, biaya perbaikan tinggi, risiko kerusakan sekunder |
| **Preventive** | Jadwal tetap (waktu/jam pakai) | Kalender/jam operasi | Sederhana, biaya predictable | Ganti komponen yang masih baik; bisa melewatkan kerusakan antara jadwal |
| **Condition-Based (CBM)** | Saat parameter kondisi terlampaui | Data sensor (threshold statis) | Lebih tepat sasaran dari preventive | Perlu kalibrasi threshold; masih reaktif terhadap kondisi, bukan prediktif |
| **Predictive** | Sebelum mesin gagal (prediksi via ML) | Data sensor real-time + analitik/ML | Downtime minimum; optimasi suku cadang | Investasi awal tinggi (sensor + platform + integrasi); butuh data historis untuk model ML |

---

### Komponen OEE: Definisi dan Nilai Target

| Komponen | Definisi | Faktor Penyebab Rendah | Nilai World-Class |
|---|---|---|---|
| **Availability** | Waktu mesin beroperasi / waktu terencana | Unplanned breakdowns, setup time yang lama | ≥ 90% |
| **Performance** | Kecepatan aktual / kecepatan ideal | Small stops, speed losses, operator inefficiency | ≥ 95% |
| **Quality** | Produk tanpa cacat / total produk | Scrap, rework, startup rejects | ≥ 99.9% |
| **OEE (gabungan)** | Availability × Performance × Quality | — | ≥ 85% |

---

### Matriks Prioritas Implementasi Predictive Maintenance per Mesin

| Dampak Downtime Mesin (terhadap produksi) | Frekuensi Gangguan Historis | Prioritas Predictive Maintenance |
|---|---|---|
| Tinggi (mesin di critical path) | Sering | ✅ Sangat direkomendasikan |
| Tinggi | Jarang | ✅ Direkomendasikan (risiko besar meski jarang) |
| Sedang | Sering | ⚠️ Pertimbangkan: hitung biaya sensor vs manfaat |
| Rendah | Sering | ❌ Cukup preventive atau condition-based |
| Rendah | Jarang | ❌ Cukup reaktif atau preventive sederhana |

---

## Edge cases & nuance

- **OEE bukan satu-satunya metrik pabrik pintar**: OEE mengukur efisiensi peralatan, bukan produktivitas total pabrik. Faktor seperti yield bahan baku, efisiensi energi, dan turn-over inventori tidak tertangkap oleh OEE — pabrik dengan OEE tinggi bisa tetap tidak efisien secara biaya jika mengabaikan faktor-faktor lain.

- **"World-class 85%" tidak selalu relevan untuk semua industri**: Industri seperti semi-konduktor atau pharmaceutical bisa menetapkan target lebih tinggi; industri batch/process manufacturing (kimia, makanan/minuman) menggunakan metrik yang sedikit berbeda dari discrete manufacturing. Penulis harus menggunakan "umumnya diakui sebagai world-class" — bukan "standar universal".

- **Predictive maintenance vs. prescriptive maintenance**: Di luar predictive, ada tier lebih lanjut — "prescriptive maintenance" yang tidak hanya memprediksi kapan gagal, tapi juga merekomendasikan tindakan spesifik. SAP Digital Manufacturing mendukung prescriptive lewat integrasi SAC; namun istilah "prescriptive" masih kurang umum di Indonesia — penulis bisa menyebutnya sebagai evolusi predictive tanpa menggunakan jargon baru.

- **OT/IT gap sebagai hambatan nyata**: Tantangan terbesar implementasi predictive maintenance di Indonesia bukan sensor atau platform, melainkan integrasi antara Operational Technology (OT/SCADA/PLC) yang sudah ada dengan sistem IT (ERP/SAP). Banyak pabrik di Indonesia masih menjalankan SCADA/PLC yang tidak dirancang untuk cloud connectivity — retrofit membutuhkan middleware/industrial gateway. Penulis harus jujur soal ini.

- **Data historis minimum untuk model ML**: Model predictive maintenance berbasis ML membutuhkan data historis gangguan yang cukup untuk dilatih. Pabrik yang baru memasang sensor tidak langsung bisa predictive — biasanya butuh 6–12 bulan data kondisi mesin plus histori maintenance sebelum model menjadi andal.

- **Perhatian soal angka biaya downtime**: Angka USD 260,000/jam yang dikutip Aberdeen Group (sering di-recycle oleh vendor) merujuk pada rata-rata industri manufaktur besar secara umum, bukan angka yang diverifikasi secara independen untuk konteks Indonesia. Penulis harus menghindari mengutip angka dolar yang spesifik tanpa atribusi sumber primer yang bisa diverifikasi.

---

## Flags (open factual risk)

- ⚠️ **Flag #1 — Nama modul SAP PM vs Asset Management**: SAP secara historis menyebut modul ini "Plant Maintenance (PM)" di ECC/S/4HANA. Di S/4HANA, SAP mulai menggunakan "Asset Management" sebagai nama area solusi yang lebih luas, sementara "PM" tetap sebagai nama modul teknis. Kedua istilah digunakan secara bergantian oleh SAP. → Rekomendasi: gunakan "Plant Maintenance (PM)" sebagai nama modul + "Asset Management" sebagai nama area fungsional; tambahkan kurung "(PM)" untuk kejelasan teknis. Konfirmasi dari SAP Help Portal S/4HANA PM/AM documentation.

- ⚠️ **Flag #2 — Status SAP Asset Intelligence Network (AIN)**: SAP AIN adalah produk nyata yang tersedia, namun relevansi dan posisinya dalam portofolio SAP Digital Manufacturing perlu dikonfirmasi. SAP mengintegrasikan beberapa produk aset ke dalam SAP Digital Manufacturing Cloud dan S/4HANA Asset Management. → Rekomendasi: sebut AIN dengan hedging — "SAP Asset Intelligence Network, platform SAP untuk berbagi data aset antar produsen OEM dan pengguna akhir" — tanpa klaim kapabilitas spesifik yang tidak diverifikasi dari SAP official docs terkini.

- ⚠️ **Flag #3 — Angka biaya unplanned downtime (USD 260,000/jam)**: Angka ini bersumber dari Aberdeen Group (via Aptean research) dan banyak dikutip ulang oleh vendor; sumber primernya sulit diakses dan mungkin sudah tidak current. → Rekomendasi: jangan kutip angka dolar spesifik ini tanpa atribusi eksplisit ke Aberdeen Group/Aptean + tahun publikasi. Sebagai alternatif, pakai framing kualitatif: "biaya unplanned downtime di industri manufaktur besar dapat mencapai ratusan ribu dolar per jam, menurut studi industri" — atau cari angka Gartner/IDC yang lebih mudah diverifikasi.

- ⚠️ **Flag #4 — Statistik downtime reduction / maintenance cost savings untuk predictive maintenance**: Brief menyebut "downtime reduction ~30%, maintenance cost -20%" dari "ResearchGate/Unilever Indonesia case". Angka ini tidak berhasil diverifikasi ke sumber Tier-1 dalam probe ini. → Rekomendasi: jangan kutip angka ini tanpa sumber yang dapat diverifikasi. Gunakan framing umum: "studi industri menunjukkan pengurangan downtime yang signifikan" atau cite McKinsey/Deloitte industrial IoT report jika tersedia (McKinsey 2022 menyebut predictive maintenance dapat mengurangi biaya maintenance 10–25% dan unplanned downtime 35–45% — namun ini perlu diverifikasi langsung dari McKinsey.com sebelum dikutip).

- ⚠️ **Flag #5 — OEE benchmark 60% sebagai "rata-rata industri Indonesia"**: Tidak ada data OEE benchmark khusus untuk industri manufaktur Indonesia dari sumber Tier-1 (BPS, Kemenperind, Gartner/IDC Indonesia-specific). → Rekomendasi: gunakan global benchmark 55–65% dan jelaskan sebagai "rata-rata global" tanpa ekstrapolasi ke Indonesia. Kemenperind/BPPI mungkin memiliki data ini — namun tidak ditemukan dalam probe ini.

---

## Definition snippet draft (40–60 words)

> **Predictive maintenance** adalah strategi pemeliharaan mesin yang memanfaatkan data sensor real-time — seperti getaran, suhu, dan tekanan — serta analitik untuk memprediksi kapan mesin akan mengalami kegagalan, sebelum kegagalan itu terjadi. Berbeda dari preventive maintenance yang berjalan berdasarkan jadwal tetap, predictive maintenance bertindak berdasarkan kondisi aktual mesin, sehingga mengurangi downtime tak terencana dan biaya pemeliharaan berlebih.

*(54 words — dalam rentang target)*

---

## Notes for image-planner

- **Concept 1 — Diagram segitiga atau lingkaran OEE**: Visualisasi tiga komponen OEE (Availability × Performance × Quality) dengan contoh angka (mis. 90% × 95% × 99% = 84,6%) dan label "world-class ≥85%". Format infografis bersih, cocok sebagai featured snippet visual. (Referensi brief: {IMAGE_01})

- **Concept 2 — Timeline/flow diagram predictive maintenance**: Alur kerja dari kiri ke kanan: Sensor IoT → Edge Computing → Cloud Analytics (SAP DM) → Anomali Terdeteksi → Auto Work Order (SAP PM) → Eksekusi Maintenance → Update OEE. Diagram arsitektur teknis yang menunjukkan loop end-to-end.

- **Concept 3 — Tabel/matriks kritikalitas mesin**: Heatmap atau matrix 2×2 dengan sumbu "Dampak Downtime" (rendah-tinggi) dan "Frekuensi Gangguan" (rendah-tinggi) — menunjukkan di kuadran mana predictive maintenance worth it vs preventive atau reaktif. Berguna untuk konten H2 #5 (counter-conventional H2).
