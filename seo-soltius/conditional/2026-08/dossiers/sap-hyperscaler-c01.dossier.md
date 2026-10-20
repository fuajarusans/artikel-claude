---
brief_id: "sap-hyperscaler-c01"
researcher_run_date: "2026-07-17"
sources_cited: 9
claims_verified: 12
flags: 7
batch: "conditional-2026-08 (style_addendum.md — 800–1000 kata, FAQ 2–3, 2 internal link, tanpa image placeholder)"
---

# Research Dossier: SAP di AWS vs Azure vs GCP — Perbandingan untuk Perusahaan Indonesia

> **Dossier ringkas** sesuai instruksi brief (artikel target ~900 kata, 4 H2 ramping). Hanya 12 klaim terkuat yang melayani skeleton — bukan material 1.650 kata.

## TL;DR untuk writer

- **Flag #1 brief SUDAH TERSELESAIKAN.** Sel tabel Azure kini **terverifikasi dari sumber Microsoft resmi**: M-series eksplisit disebut "SAP HANA-certified" oleh Microsoft Learn, dan **Mv3-series** dikonfirmasi Azure Architecture Center untuk memori SAP HANA hingga **30 TiB**. Bonus temuan: **E-series (Edsv4/Edsv5)** juga tersertifikasi SAP HANA untuk deployment kecil — brief tidak menduga ini. Sel tabel **tidak perlu dilonggarkan**.
- **Tesis inti artikel terbukti dari tiga sisi sekaligus.** AWS, Microsoft, dan Google Cloud **semuanya menunjuk ke direktori SAP yang sama** sebagai sumber kebenaran sertifikasi. Ini bukti terkuat bahwa sertifikasi melekat pada **tipe instance**, bukan pada hyperscaler-nya. Kutipan Microsoft paling eksplisit: *"The SAP Certified and Supported SAP HANA Hardware Directory lists the virtual machines that are certified for the SAP HANA database."*
- **Celah terbesar (H2 #3) terkonfirmasi verbatim** di dokumentasi AWS & Google Cloud. Dua sitasi inline artikel ini sudah siap pakai (lihat §Sitasi).
- **Tanggal Azure: pakai April 2025.** Terkonfirmasi ulang run ini: `news.microsoft.com/id-id` (15 April 2025) menyatakan GA + tiga availability zone. **Jangan pakai 27 Mei 2025.**
- **Semua angka tabel terverifikasi.** 3 region Indonesia, 3 tanggal, 3×3 AZ, 2 kode region, 3 nomor SAP Note. Cukup melampaui syarat ≥4 angka inline.

---

## Core facts (verified) — 12 klaim

### A. Sertifikasi melekat pada tipe instance (H2 #1)

> **Claim 1**: Sumber kebenaran sertifikasi SAP HANA adalah direktori milik SAP, bukan materi pemasaran hyperscaler — dan **ketiga hyperscaler menunjuk ke direktori yang sama**.
> **Number/specific**: Nama resmi entitas = **SAP Certified and Supported SAP HANA Hardware Directory**.
> **Source**: Microsoft Learn (Azure Architecture Center, upd. 2026-05-07) — *"The SAP Certified and Supported SAP HANA Hardware Directory lists the virtual machines that are certified for the SAP HANA database."* · AWS Docs — menautkan *"SAP Certified and Supported SAP HANA Hardware Directory"* · Google Cloud Docs — *"SAP lists the certified machine types for SAP HANA in the Certified and supported SAP HANA hardware directory."*
> **Confidence**: **high** — tiga sumber vendor independen, konsisten. Ini fondasi artikel.

> **Claim 2**: Hyperscaler bekerja sama dengan SAP untuk **menguji & mensertifikasi tipe instance** (bukan mensertifikasi platform-nya secara umum).
> **Number/specific**: AWS: *"AWS has worked closely with SAP to test and certify Amazon EC2 instance types for SAP on AWS solutions."* Microsoft: *"Microsoft and SAP jointly certify a range of virtual machine sizes for SAP HANA workloads."*
> **Source**: `docs.aws.amazon.com/sap/latest/general/ec2-instance-types-sap.html` · Microsoft Learn Architecture Center (diakses 2026-07-17)
> **Confidence**: **high**

> **Claim 3**: Nomor SAP Note per platform + **judul resminya** (dikutip dokumentasi publik vendor, bukan dari isi Note).
> **Number/specific**: **SAP Note 1656099** = *"SAP Applications on AWS: Supported DB/OS and Amazon EC2 products"* (AWS docs menandai: *requires SAP Portal access*). **SAP Note 1928533** = *"SAP Applications on Microsoft Azure: Supported Products and Azure VM types"*.
> **Source**: AWS Docs · Microsoft Learn (`/azure/sap/workloads/certifications`, upd. 2026-02-13)
> **Confidence**: **high** untuk nomor + judul. ⚠️ **Isi Note TIDAK terverifikasi** (butuh SAP Portal login) — sebut sebagai rujukan saja.

> **Claim 4** (honest hedging wajib H2 #1): Instance non-certified boleh dipakai, **tetapi hanya untuk beban non-produksi**.
> **Number/specific**: AWS verbatim: *"The Amazon EC2 instances in the following table are not certified for production usage. You can use them for running non-production workloads."* Merujuk **SAP Note 2271345**, yang judulnya dikutip terbuka oleh AWS: *"Cost-Optimized SAP HANA Hardware for Non-Production Usage"*. AWS juga menyatakan: *"All current and previous generation Amazon EC2 instance types for SAP HANA can be used for running non-production workloads."*
> **Source**: `docs.aws.amazon.com/sap/latest/general/sap-hana-aws-ec2.html` (diakses 2026-07-17)
> **Confidence**: **high** — judul Note 2271345 kini terverifikasi dari dokumentasi publik AWS (naik dari status brief).

### B. Region Indonesia (H2 #2 — tabel)

> **Claim 5**: **AWS Asia Pacific (Jakarta)** — kode `ap-southeast-3`, dibuka **13 Desember 2021**, **3 availability zone**.
> **Source**: AWS News Blog *"Now Open – AWS Asia Pacific (Jakarta) Region"* (13 Des 2021) — *"The official name is Asia Pacific (Jakarta) and the API name is ap-southeast-3"* · **dikonfirmasi ulang** oleh tabel resmi `docs.aws.amazon.com/global-infrastructure/latest/regions/aws-regions.html`: baris `ap-southeast-3 | Asia Pacific (Jakarta) | 3 AZs | Indonesia`.
> **Confidence**: **high** — dua sumber AWS resmi, termasuk tabel yang di-maintain (bukan hanya blog 2021).

> **Claim 6**: **Microsoft Azure Indonesia Central** — **GA 15 April 2025**, **3 availability zone**.
> **Source**: Microsoft Indonesia News (15 April 2025) — *"Microsoft's first cloud region in Indonesia, called Indonesia Central, is now generally available"* + *"This cloud region includes three availability zones, which provide independent power, cooling and networking for higher availability needs."*
> **Confidence**: **high**. ⚠️ **Pakai "April 2025"** — lihat Flag F3.

> **Claim 7**: **Google Cloud Jakarta** — kode `asia-southeast2`, dibuka **24 Juni 2020**, **3 zona**.
> **Source**: Google Cloud Blog (24 Juni 2020) — *"The launch of our new Jakarta region (asia-southeast2)..."* + *"The region has three Cloud zones from the start, enabling high availability workloads."* · **dikonfirmasi masih 3 zona saat ini** via sumber Google Cloud terkini (*"asia-southeast2 is a region with 3 zones with data centers within Indonesia in Jakarta"*) — jadi angka 3 **bukan fakta basi dari 2020**.
> **Confidence**: **high** (sengaja dicek ulang karena blog 2020 berbunyi "from the start").

> **Claim 8**: Ketiganya kini punya infrastruktur di Indonesia → pertanyaan "adakah region lokal?" sudah selesai; selisih tahun beroperasi **Juni 2020 → Desember 2021 → April 2025** (rentang ~5 tahun).
> **Source**: sintesis Claim 5–7.
> **Confidence**: **high**. Framing wajib: **peta kelayakan, bukan papan skor** (lihat Flag F5).

### C. Keluarga instance tersertifikasi (H2 #2 — baris tabel paling teknis)

> **Claim 9 — AWS**: keluarga tersertifikasi SAP HANA produksi.
> **Number/specific**: **R-series** (r5, r5b, r6i, r7i, **r8i**), **X-series** (x1, x1e, x2idn, x2iedn, **x8i**), **U-series / High Memory** (u-3tb1 s/d u-24tb1, u7i, u7in, u7inh — hingga 32 TiB).
> **Source**: `docs.aws.amazon.com/sap/latest/general/sap-hana-aws-ec2.html` — tabel "Current generation certified instances" (diakses 2026-07-17)
> **Confidence**: **high**

> **Claim 10 — Microsoft Azure** ⭐ **(menyelesaikan prioritas verifikasi #1 brief)**:
> **Number/specific**: **M-series tersertifikasi SAP HANA** — Microsoft verbatim: *"In addition to the SAP HANA certifications on Azure M-series VMs..."* dan *"All combinations of SAP HANA-certified M-series VMs..."*. **Mv3-series**: *"To support the largest SAP HANA memory sizes on virtual machines, as much as 30 TiB, you can use Mv3-series virtual machines."* **Mv2/Mdsv2/Msv3/Mdsv3** disebut dalam konteks HANA (*"some VM families, like Mv2, Mdsv2, Msv3, and Mdsv3 are supported only as Gen2 VMs"*). **E-series juga tersertifikasi**: *"smaller deployments can run on an Edsv4 or Edsv5 virtual machine with 160 GiB or more of RAM"* + *"SAP HANA-certified E-series VMs"*. Azure single-node scale-up **hingga 32 TiB**.
> **Source**: Microsoft Learn `/azure/sap/workloads/hana-vm-operations` (upd. 2026-02-26) + Azure Architecture Center `/reference-architectures/sap/run-sap-hana-for-linux-virtual-machines` (upd. 2026-05-07)
> **Confidence**: **high** — **sel tabel Azure TIDAK perlu dilonggarkan.** Bobot bukti kini setara AWS & GCP.

> **Claim 11 — Google Cloud**: machine type tersertifikasi SAP HANA produksi.
> **Number/specific**: **N1 high-mem** (n1-highmem-32/64/96), **N2 high-mem** (hingga n2-highmem-128), **C3** (termasuk c3-highmem-192-metal), **C4** (hingga c4-highmem-288-metal), **M1** (megamem/ultramem), **M2**, **M3**, **M4/M4N**, **X4 bare metal**.
> **Source**: `docs.cloud.google.com/sap/docs/certifications-sap-hana` (diakses 2026-07-17)
> **Confidence**: **high**. *Koreksi kecil vs brief:* daftar GCP mencakup **M1–M4 penuh (termasuk M2 & M3)** dan **N1**, bukan hanya "M1–M4, N2/C3/C4" — tulis sebagai **contoh**, bukan daftar lengkap.

### D. Region ≠ ketersediaan instance (H2 #3 — PEMBEDA UTAMA)

> **Claim 12** ⭐ **KLAIM PALING BERHARGA ARTIKEL INI** — verbatim dari dua vendor:
> **AWS**: *"Certain Amazon EC2 instance families, such as X1, X2idn, X2iedn, and High Memory might not be available across all Availability Zones in a Region. You must confirm while planning that the instance types required for your SAP workloads are available in your target Availability Zone."* AWS juga menyediakan cara ceknya: perintah CLI `describe-instance-type-offerings`.
> **Google Cloud**: *"Some machine types are not available in all Google Cloud regions."*
> **Source**: `docs.aws.amazon.com/sap/latest/general/ec2-instance-types-sap.html` (bagian "Instance type availability") · `docs.cloud.google.com/sap/docs/certifications-sap-hana`
> **Confidence**: **high** — keduanya kalimat resmi vendor, hitam-putih. **Tidak satu pun pesaing SERP menuliskannya.**

---

## Data untuk elemen terstruktur — TABEL H2 #2 (siap pakai)

Semua sel **terverifikasi run ini**. Tulis baris instance sebagai **contoh, bukan daftar lengkap** (katalog berubah cepat).

| Dimensi | AWS | Microsoft Azure | Google Cloud |
|---|---|---|---|
| Region di Indonesia | Asia Pacific (Jakarta), `ap-southeast-3` | Indonesia Central | Jakarta, `asia-southeast2` |
| Beroperasi sejak | Desember 2021 | April 2025 | Juni 2020 |
| Availability zone di region tsb. | 3 | 3 | 3 |
| Contoh keluarga instance tersertifikasi SAP HANA | R-series (r5, r6i, r7i, r8i), X-series (x1, x2idn, x2iedn, x8i), U-series *High Memory* | M-series *memory-optimized* (termasuk Mv2, Mv3); E-series (Edsv4/Edsv5) untuk memori lebih kecil | M-series (M1–M4), X4 *bare metal*, N1/N2 *high-mem*, C3/C4 |
| Sumber daftar sertifikasi | SAP HANA Hardware Directory + SAP Note 1656099 | SAP HANA Hardware Directory + SAP Note 1928533 | SAP HANA Hardware Directory + dokumentasi Google Cloud |

**Catatan format untuk writer:**
- ⚠️ **Jangan pakai em-dash di dalam sel tabel** (mis. "Asia Pacific (Jakarta) — ap-southeast-3"). Jatah em-dash artikel hanya **2** (anti-AI §5); pakai koma seperti di atas dan simpan jatah em-dash untuk prosa.
- **JANGAN menambah baris** "performa", "harga", "SLA", atau "best fit" — tidak terverifikasi + baris *Best Fit* adalah sudut halaman EN live (duplikasi).
- Baris "Beroperasi sejak" adalah **fakta netral**, bukan peringkat. Paragraf sesudah tabel: selisih tahun hanya berarti **kedalaman katalog layanan di region itu bisa berbeda**.

**Aturan praktis H2 #3 (list 3 butir — data pendukung):**
1. **Tetapkan konfigurasi dulu, baru region** — mulai dari kebutuhan *sizing* SAP, lalu cek ketersediaan instance-nya di Jakarta.
2. **Cek di level availability zone, bukan region** — arsitektur *high availability* butuh instance yang sama tersedia di lebih dari satu AZ. (Didukung langsung oleh Claim 12; AWS bahkan menyediakan `describe-instance-type-offerings` untuk mengeceknya.)
3. **Siapkan rencana cadangan** — bila konfigurasi belum ada di region Indonesia: **region terdekat di Asia Tenggara** dengan konsekuensi residensi data (maks 1 klausa, tanpa nomor regulasi), atau konfigurasi berbeda. → **Lihat Flag F6 soal penyebutan "Singapura".**

---

## Solution focus + Soltius anchor

Keyword tidak ada di `product_matrix.md` (topik conditional). Mapping diturunkan dari tracker + `company_profile.md`.

| Yang diajarkan | Fakta yang harus akurat | Di mana | Soltius anchor |
|---|---|---|---|
| Hyperscaler (AWS / Microsoft Azure / Google Cloud) untuk beban kerja SAP; sertifikasi melekat pada tipe instance; region Indonesia | Claim 1–12 di atas | H2 #1–#4 | **1 positioning line di Kesimpulan** + **1 soft CTA** (maks 2 mention total) |

**Positioning line (pilih SATU kredensial — semua terverifikasi di `company_profile.md`):**
- **Direkomendasikan**: "SAP Platinum Partner melalui United VARs" — paling pas untuk topik teknis SAP.
- Alternatif: pengakuan **Best Cloud / Best RISE Partner (SEA, 2021)** — relevan tema cloud, tetapi berisiko terbaca "Soltius = penyedia cloud". Jika dipakai, framing harus sangat hati-hati.

**Framing wajib**: Soltius **mengimplementasikan / memigrasikan / mendampingi** SAP **di atas** platform hyperscaler milik pihak lain. **NEVER builds/owns.** Soltius **bukan** hyperscaler dan **bukan** penyedia cloud.

⚠️ **Jangan seret Huawei Cloud** (mitra teknologi Soltius, tampil di halaman hub) ke dalam komparasi, dan jangan posisikan sebagai milik Soltius.

---

## Sitasi eksternal otoritatif (2 inline, keduanya di H2 #3)

1. **AWS Documentation — "Amazon EC2 instance types for SAP on AWS"** — `https://docs.aws.amazon.com/sap/latest/general/ec2-instance-types-sap.html` — ✅ terverifikasi 200 (2026-07-17). *Membackup*: instance family tertentu (X1, X2idn, X2iedn, High Memory) mungkin tidak tersedia di semua AZ dalam satu region + kewajiban konfirmasi saat perencanaan. **Sitasi utama H2 #3.**
2. **Google Cloud Documentation — "Certifications for SAP HANA on Google Cloud"** — `https://docs.cloud.google.com/sap/docs/certifications-sap-hana` — ✅ terverifikasi 200. *Membackup*: *"Some machine types are not available in all Google Cloud regions"* + daftar machine type tersertifikasi + rujukan ke direktori SAP. **Sitasi kedua H2 #3.** ⚠️ Pakai URL `docs.cloud.google.com` langsung (`cloud.google.com/sap/docs/...` → 301).

**Sumber pendukung (TIDAK di-inline — jatah maks 2; untuk verifikasi editor saja):**
3. `https://docs.aws.amazon.com/sap/latest/general/sap-hana-aws-ec2.html` — certified/non-certified + SAP Note 2271345 (Claim 4, 9)
4. `https://learn.microsoft.com/en-us/azure/sap/workloads/hana-vm-operations` — M-series HANA-certified (Claim 10)
5. `https://learn.microsoft.com/en-us/azure/architecture/reference-architectures/sap/run-sap-hana-for-linux-virtual-machines` — Mv3 30 TiB, E-series, nama direktori SAP (Claim 1, 10)
6. `https://learn.microsoft.com/en-us/azure/sap/workloads/certifications` — SAP Note 1928533 (Claim 3)
7. `https://aws.amazon.com/blogs/aws/now-open-aws-asia-pacific-jakarta-region/` + `https://docs.aws.amazon.com/global-infrastructure/latest/regions/aws-regions.html` — AWS Jakarta (Claim 5)
8. `https://news.microsoft.com/id-id/2025/04/15/general-availability-of-indonesia-central-cloud-region/` — Azure GA (Claim 6)
9. `https://cloud.google.com/blog/products/infrastructure/new-google-cloud-region-in-jakarta-now-open` — GCP Jakarta (Claim 7)

**Internal link (TEPAT 2):** hub `https://www.soltius.co.id/id/solutions-by-products/cloud` (anchor: "solusi cloud") + cousin `https://www.soltius.co.id/blog/read/sap-in-the-cloud-why-iaas-aws-azure-gcp-is-the-strategic-choice-for-enterprise-indonesia` (anchor: "mengapa enterprise memilih IaaS untuk SAP"). Writer cek ulang 200 saat menulis.

---

## Definition snippet draft (58 kata — dalam band 40–60)

> **Ringkasnya:** hyperscaler adalah penyedia cloud publik berskala global; untuk beban kerja SAP, tiga yang paling umum dipakai adalah Amazon Web Services (AWS), Microsoft Azure, dan Google Cloud. Ketiganya menjalankan SAP pada konfigurasi yang tersertifikasi resmi, dan ketiganya sudah punya region di Indonesia. Pembedanya bukan "bisa atau tidak", melainkan konfigurasi tersertifikasi mana yang tersedia di region yang Anda tuju.

⚠️ **INI SATU-SATUNYA DEFINISI.** Body/H2 dilarang menyatakan ulang dengan kata lain, termasuk di jawaban langsung 40–60 kata tiap H2.

---

## FAQ draft (2–3 Q&A, Bahasa Indonesia — Q1 & Q2 wajib, Q3 hanya bila <950 kata)

### Q1. Hyperscaler mana yang terbaik untuk SAP? *(PAA #2 — 46 kata)*
Tidak ada yang unggul secara universal. Amazon Web Services (AWS), Microsoft Azure, dan Google Cloud sama-sama memiliki konfigurasi tersertifikasi SAP HANA dan sama-sama mengoperasikan region di Indonesia dengan tiga availability zone. Yang menentukan bukan mereknya, melainkan apakah konfigurasi tersertifikasi yang Anda butuhkan tersedia di region tujuan.
*(fakta/angka: 3 availability zone)*

### Q2. Apakah semua tipe server di AWS, Azure, atau Google Cloud bisa dipakai untuk SAP HANA produksi? *(PAA #5 — 43 kata)*
Tidak. Hanya tipe yang terdaftar di SAP Certified and Supported SAP HANA Hardware Directory yang boleh menjalankan SAP HANA produksi. Tipe non-certified tetap boleh dipakai, tetapi terbatas pada beban non-produksi seperti development dan testing. Dokumentasi AWS merujuk SAP Note 2271345 untuk aturan ini.
*(fakta/angka: SAP Note 2271345)*

### Q3 (opsional). Apakah AWS, Azure, dan Google Cloud punya region di Indonesia? *(PAA #4 — 35 kata)*
Ya, ketiganya. Google Cloud membuka region Jakarta (`asia-southeast2`) pada Juni 2020, AWS membuka Asia Pacific (Jakarta) (`ap-southeast-3`) pada Desember 2021, dan Microsoft Azure Indonesia Central tersedia umum sejak April 2025. Masing-masing memiliki tiga availability zone.
*(fakta/angka: 3 tanggal + 3 AZ)*

> Dedup: `iaas-untuk-sap-c01` sudah punya FAQ "Apakah SAP bisa berjalan di AWS, Azure, atau Google Cloud?" — ketiga Q di atas sengaja dibedakan rumusannya. **Jangan menyalin rumusan itu.**

---

## Edge cases & nuance

- **"Certified" bukan atribut biner platform.** Sertifikasi bervariasi per **beban** (OLTP vs OLAP), per **arsitektur** (scale-up vs scale-out), bahkan per **metode sizing** (Standard vs Workload) — terlihat jelas di tabel AWS. Artikel **tidak perlu** membedah ini (habis word budget); cukup jangan menulis seolah sertifikasi itu satu tombol on/off. Frasa aman: "konfigurasi tersertifikasi", bukan "instance certified" sebagai label mutlak.
- **Katalog instance berubah cepat.** AWS r8i/x8i, Azure Mv3, Google M4/C4 semuanya generasi baru. Karena itu: **tulis "contoh keluarga instance", bukan daftar lengkap**, dan jangan janjikan daftar itu akurat selamanya.
- **Azure paling muda di Indonesia (April 2025) tetapi bukan berarti lebih lemah** — Azure justru punya SKU HANA memori terbesar (Mv3 hingga 30 TiB). Ini bukti konkret bahwa **umur region ≠ kemampuan platform**, dan alasan kuat mengapa tabel harus dibaca sebagai peta kelayakan. (Boleh dipakai sebagai insight; **jangan** dibingkai sebagai "Azure menang memori".)
- **AWS Jakarta perlu opt-in.** Tabel resmi AWS menandai `ap-southeast-3` sebagai *"Opt-in status: Required"* (region pasca-20 Maret 2019). Detail operasional yang menarik, tetapi **di luar scope 900 kata** — jangan dipakai kecuali writer kekurangan bahan.

---

## Flags — risiko faktual terbuka (7)

- ⚠️ **F1 — Isi SAP Note 1656099 / 1928533 / 2271345 TIDAK terverifikasi** (butuh SAP Portal login; `me.sap.com/notes/...`). **Nomor + judul** aman disebut (dikutip terbuka oleh dokumentasi AWS/Microsoft). → **Sebut sebagai rujukan saja; JANGAN mengutip isi Note.**
- ⚠️ **F2 — Isi SAP HANA Hardware Directory TIDAK terverifikasi**: `sap.com/dmc/exp/2014-09-02-hana-hardware/...` dan `support.sap.com/.../sap-hyperscalers.html` tetap **403** untuk akses otomatis (konsisten dengan run 2026-06/2026-07). Keberadaan + fungsinya terkonfirmasi **tidak langsung** lewat AWS, Microsoft, dan Google Cloud yang menautinya. → **Sebut nama + fungsinya; JANGAN mengklaim isi spesifik direktori** ("direktori mencantumkan X" = dilarang).
- ⚠️ **F3 — Tanggal Azure**: pakai **April 2025 (GA)**. **JANGAN 27 Mei 2025** (itu acara peluncuran AI Tour Jakarta, bukan GA). **Jangan campur keduanya.**
- ⚠️ **F4 — RISE with SAP & pilihan hyperscaler**: SAP official tidak dapat diakses (403 berulang); satu-satunya sumber terbuka = blog konsultan lisensi (**bukan otoritatif**). → **Batasi pada level paling aman, 1 kalimat**: "infrastruktur berjalan di hyperscaler, tetapi dikontrakkan lewat SAP". **JANGAN** menyebut hyperscaler mana saja yang tersedia di RISE, default vendor, angka penghematan, atau negosiasi.
- ⚠️ **F5 — Klaim performa/downtime/harga/SLA komparatif: DILARANG TOTAL** (instruksi tracker). Termasuk sudut pesaing: Nitro System, Azure NetApp Files, BigQuery/Vertex AI, "GCP live migration", statistik downtime. Semua bersumber blog konsultan tanpa data terverifikasi. **Angka SAPS ada di dokumentasi AWS** tetapi **jangan dipakai untuk membandingkan antar-hyperscaler** — basis pengukurannya tidak setara antar-vendor dan itu melanggar mandat kenetralan.
- ⚠️ **F6 — "Region terdekat = Singapura" TIDAK terverifikasi penuh.** Terverifikasi run ini: **AWS Asia Pacific (Singapore) `ap-southeast-1`, 3 AZ** (tabel resmi AWS). **Azure Southeast Asia** dan **Google Cloud `asia-southeast1`** sebagai region Singapura **tidak dikonfirmasi dari halaman resmi run ini**. → **Rekomendasi: pakai "region terdekat di Asia Tenggara" tanpa menyebut kota** (sesuai fallback brief). Aman, dan tidak mengorbankan makna butir tersebut.
- ⚠️ **F7 — Regulasi**: **JANGAN menyebut nomor regulasi apa pun** (UU PDP, PP 71/2019). Sumber yang beredar = blog vendor. Cukup **1 klausa "residensi data"** tanpa dasar hukum. Topiknya milik halaman EN live + `2026-06-erp-migration-to-the-cloud-04`.

### Boundary dedup — TIDAK ada material di dossier ini (sengaja)
Apa/mengapa IaaS · karakteristik IaaS · IaaS vs PaaS vs SaaS · shared responsibility model · spektrum self-managed/partner-managed/RISE (→ `iaas-untuk-sap-c01` + halaman EN live) · cloud vs on-premise (→ `cloud-erp-vs-on-premise-c01`) · karakteristik/deployment model cloud & NIST (→ `cloud-computing-c01`) · RISE vs GROW / paket RISE (→ `2026-08-erp-migration-to-the-cloud-01`) · TCO/biaya per hyperscaler (belum ada sumber terverifikasi — **jangan disentuh**).
