---
brief_id: "business-intelligence-03"
researcher_run_date: "2026-08-11"
sources_cited: 14
flags: 6
---

# Research Dossier: Business Intelligence untuk Manufaktur: OEE, Downtime, dan Analitik Kualitas

## TL;DR for the writer

- **BI produksi = menyatukan data lantai produksi** (mesin/PLC → MES → ERP) menjadi visibilitas real-time atas OEE, downtime, yield, dan biaya. Ajarkan konsep vendor-neutral dulu; baru kaitkan ke SAP.
- **Rumus OEE aman untuk ditulis sebagai Featured Snippet**: OEE = Availability × Performance × Quality. Benchmark **world-class ≥85%, tipikal ~60%, ≤40% rendah** — tapi ini khusus **discrete manufacturing**; wajib diatribusi, jangan digeneralisasi ke industri proses.
- **Penamaan SAP berubah**: sejak 2023 produknya bernama **SAP Digital Manufacturing (SAP DM)**, sebelumnya "SAP Digital Manufacturing Cloud (DMC)". Tulis "SAP Digital Manufacturing" — boleh sebut nama lama sekali sebagai konteks. Ini MES cloud SAP dengan perhitungan OEE bawaan, time model, dan reason code.
- **Tiga lapisan yang sering rancu — bedakan tegas**: MES (eksekusi & data shop floor real-time) vs ERP/S4HANA PP (order produksi, konsumsi material, biaya) vs BI/SAC (visualisasi & analitik). Whitespace artikel ini justru menghubungkan metrik ke SUMBER datanya.
- **Pesan jujur (H2 #5)**: analitik canggih tidak berguna di atas data mesin kotor (pencatatan downtime manual, reason code kacau, mesin lama tanpa konektivitas). "Garbage in, garbage out" — mulai dari 1 lini percontohan. Jangan mengklaim angka penurunan downtime spesifik tanpa sumber.

## Core facts (verified)

> **Claim**: OEE dihitung dari perkalian tiga komponen: ketersediaan, performa, dan kualitas.
> **Number/specific**: OEE = Availability × Performance × Quality. Secara ekuivalen, OEE = (Good Count × Ideal Cycle Time) / Planned Production Time.
> **Source**: Lean Production / Vorne — leanproduction.com/oee (diakses 2026-08-11); Evocon — evocon.com/articles/how-to-calculate-oee-formulas-examples
> **Confidence**: high

> **Claim**: 85% OEE dianggap "world-class" untuk manufaktur diskrit.
> **Number/specific**: 85% = world-class (target jangka panjang yang layak); ~60% = tipikal untuk manufaktur diskrit (banyak ruang perbaikan); ~40% = rendah, biasanya mudah diperbaiki dengan langkah dasar. Angka ini eksplisit untuk **discrete manufacturers**.
> **Source**: Lean Production / Vorne — leanproduction.com/oee (diakses 2026-08-11)
> **Confidence**: high (⚠️ scope: discrete manufacturing — lihat Flags)

> **Claim**: Availability mengukur waktu mesin benar-benar berjalan dibanding waktu produksi terencana.
> **Number/specific**: Availability = perbandingan planned operating time vs actual operating time (kehilangan karena downtime terencana/tak terencana & changeover).
> **Source**: Factbird / Lean Production (diakses 2026-08-11)
> **Confidence**: high

> **Claim**: Performance mengukur kecepatan aktual dibanding kecepatan ideal (kehilangan kecepatan & micro-stop).
> **Number/specific**: Performance = perbandingan actual run time vs ideal run time.
> **Source**: Factbird / Lean Production (diakses 2026-08-11)
> **Confidence**: high

> **Claim**: Quality mengukur proporsi unit baik terhadap total unit yang diproduksi.
> **Number/specific**: Quality = Good Count / Total Count (kehilangan karena defect & rework).
> **Source**: Lean Production (diakses 2026-08-11)
> **Confidence**: high

> **Claim**: First-Pass Yield (FPY) adalah persentase produk yang lolos standar mutu pada percobaan pertama tanpa rework/scrap.
> **Number/specific**: FPY = (unit masuk − unit rework/reject) / unit masuk. Contoh: (500 − 25) / 500 = 95%. Umumnya FPY ≥90% dianggap baik di manufaktur.
> **Source**: Deltek — deltek.com/en/manufacturing/first-pass-yield-fpy; MRPeasy (diakses 2026-08-11)
> **Confidence**: high

> **Claim**: MTBF dan MTTR adalah KPI keandalan/pemeliharaan yang bersifat lagging.
> **Number/specific**: MTBF (Mean Time Between Failures) = rata-rata waktu operasi antar kegagalan (mengukur keandalan); MTTR (Mean Time To Repair) = rata-rata waktu perbaikan (mengukur maintainability). Availability sistem ≈ MTBF / (MTBF + MTTR).
> **Source**: Wikipedia (MTBF); eMaint — emaint.com/mtbf-mttf-mttr-maintenance-kpis (diakses 2026-08-11)
> **Confidence**: high

> **Claim**: SAP Digital Manufacturing adalah MES berbasis cloud yang mengeksekusi, menganalisis, dan mengintegrasikan proses produksi.
> **Number/specific**: Menyediakan SAP Fiori & operator dashboard, termasuk Production Operator Dashboard (POD) yang dapat dikonfigurasi untuk mengorkestrasi shop floor, memantau OEE, dan mengelola downtime event.
> **Source**: SAP Help Portal — help.sap.com/docs/sap-digital-manufacturing (diakses 2026-08-11)
> **Confidence**: high

> **Claim**: SAP Digital Manufacturing menjalankan perhitungan OEE dengan logika bawaan yang dapat dikonfigurasi.
> **Number/specific**: Perhitungan OEE berbasis prebuilt calculation logic; pengguna dapat mengonfigurasi OEE time model dan reason code (kode penyebab berhenti); tersedia integrasi out-of-the-box ke SAP ERP, SAP S/4HANA, dan SAP EWM.
> **Source**: SAP Help Portal — help.sap.com/docs/sap-digital-manufacturing (diakses 2026-08-11)
> **Confidence**: high

> **Claim**: SAP mengganti nama "SAP Digital Manufacturing Cloud (DMC)" menjadi "SAP Digital Manufacturing (SAP DM)".
> **Number/specific**: Penggantian nama terjadi pada 2023; kata "Cloud" dilepas karena dianggap sudah menjadi standar (strategi cloud-first). Singkatan DMC masih lazim dipakai praktisi.
> **Source**: IGZ — igz.com/en/blog/sap-dmc-becomes-sap-dm (diakses 2026-08-11)
> **Confidence**: high

> **Claim**: SAP S/4HANA menyediakan modul Production Planning (PP) dengan analitik tertanam (embedded analytics) real-time.
> **Number/specific**: S/4HANA berbasis platform in-memory SAP HANA; Embedded Analytics = kumpulan SAP Fiori tile untuk pelaporan operasional real-time, menghilangkan jeda batch reporting. PP/DS (Production Planning & Detailed Scheduling) kini tertanam langsung di S/4HANA tanpa instalasi terpisah.
> **Source**: SAP Community — community.sap.com (S/4HANA Embedded Analytics: An Overview); SAP — sap.com/products/scm/manufacturing-for-planning-and-scheduling (diakses 2026-08-11)
> **Confidence**: high

> **Claim**: SAP Analytics Cloud (SAC) adalah solusi cloud yang memadukan BI, perencanaan, dan analitik prediktif dalam satu produk.
> **Number/specific**: SAC terhubung native ke SAP S/4HANA dan SAP Datasphere; fitur augmented analytics mencakup Smart Predict (forecasting), Smart Discovery, dan Smart Insights; asisten AI generatif SAP bernama Joule.
> **Source**: SAP — sap.com/products/data-cloud/cloud-analytics.html (diakses 2026-08-11)
> **Confidence**: high

> **Claim**: Pemerintah Indonesia meluncurkan roadmap "Making Indonesia 4.0" sebagai strategi implementasi Industri 4.0.
> **Number/specific**: Diluncurkan 4 April 2018 oleh Kementerian Perindustrian (dan diresmikan Presiden Joko Widodo) pada Indonesia Industrial Summit 2018. Awalnya menetapkan sektor prioritas yang menyumbang ~70% PDB manufaktur, 65% ekspor manufaktur, dan 60% tenaga kerja industri.
> **Source**: Kemenperin — kemenperin.go.id/download/18384 (Making Indonesia 4.0 Roadmap); Setneg (diakses 2026-08-11)
> **Confidence**: high

> **Claim**: INDI 4.0 (Indonesia Industry 4.0 Readiness Index) adalah alat ukur kesiapan sektor manufaktur menuju Industri 4.0.
> **Number/specific**: Menilai 5 pilar (manajemen & organisasi; orang & budaya; produk & layanan; teknologi; operasi pabrik) dengan skala Level 0 (belum siap) hingga Level 4 (sudah menerapkan). Per 15 April 2019, tercatat 328 perusahaan telah melakukan self-assessment melalui SIINas.
> **Source**: Kemenperin — kemenperin.go.id/artikel/20578 (diakses 2026-08-11)
> **Confidence**: high (⚠️ data 2019 — lihat Flags)

## Solution focus + Soltius anchor (from product_matrix.md)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| **SAP Digital Manufacturing (SAP DM)** — MES cloud | POD, OEE calc bawaan, time model & reason code, integrasi ke S/4HANA/ERP/EWM. Nama saat ini "SAP Digital Manufacturing"; dulu "…Cloud/DMC" | H2 #3 (sumber data), H2 #4 (dashboard OEE/downtime) | — |
| **S/4HANA Production Planning (PP)** + Embedded Analytics | Sumber order produksi & konsumsi material; Fiori tiles real-time di atas HANA in-memory; PP/DS tertanam | H2 #3 | — |
| **SAP Analytics Cloud (SAC)** | Lapisan BI/visualisasi; BI + planning + predictive; terhubung ke S/4HANA & Datasphere | H2 #1, H2 #4 | Analytics + Data and AI Consulting |
| Konsep Industri 4.0 / IIoT + konteks Making Indonesia 4.0 | OT/IT convergence; roadmap nasional 2018; INDI 4.0 | H2 #1 atau #3 (konteks) | — |
| **Soltius anchor** | Implementation + pengalaman industri manufaktur (Mill Products, Automotive, Consumer Products) | **Closing** + 1 aside opsional di H2 #3 (integrasi OT/IT dengan partner) | "Sebagai mitra implementasi SAP dengan pengalaman lintas industri manufaktur, Soltius membantu menghubungkan lantai produksi ke sistem ERP dan BI secara real-time." |

Reminder: Soltius **implements/migrates/supports** teknologi ini — bukan membangunnya. **Maks 2–3** self-mention (idealnya 1 closing + 1 aside pendek). Boleh tegaskan kredibilitas via "Data and AI Consulting" untuk sisi BI.

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **SAP Help Portal — SAP Digital Manufacturing** (diakses 2026-08-11) — https://help.sap.com/docs/sap-digital-manufacturing — *what it backs*: cakupan MES cloud, POD, perhitungan OEE bawaan, reason code, integrasi ke S/4HANA. (Otoritas tertinggi untuk fakta produk SAP.)
2. **SAP — SAP Analytics Cloud** (diakses 2026-08-11) — https://www.sap.com/products/data-cloud/cloud-analytics.html — *what it backs*: SAC sebagai lapisan BI/planning/predictive, koneksi native ke S/4HANA & Datasphere.
3. **Kemenperin — Making Indonesia 4.0 / INDI 4.0** (2018–2019) — https://kemenperin.go.id/artikel/20578 — *what it backs*: konteks kebijakan Industri 4.0 Indonesia, 5 pilar INDI 4.0, 328 perusahaan self-assessment (per Apr 2019).
4. **Lean Production (Vorne) — OEE** (diakses 2026-08-11) — https://www.leanproduction.com/oee/ — *what it backs*: rumus OEE & benchmark 85/60/40 (discrete manufacturing).

Priority: SAP official > Kemenperin > referensi OEE tepercaya. Sarankan writer link-out ke #1 (SAP Help) + #3 (Kemenperin) sebagai dua sumber otoritatif utama; #4 sebagai pendukung metrik.

## FAQ Q&As (6 drafted, Bahasa Indonesia)

### Apa itu OEE dan bagaimana cara menghitungnya?
OEE (Overall Equipment Effectiveness) adalah metrik gabungan yang mengukur seberapa efektif sebuah mesin atau lini produksi dipakai. Rumusnya OEE = Availability × Performance × Quality — masing-masing mengukur kehilangan akibat downtime, kehilangan kecepatan, dan produk cacat. Nilai 100% berarti hanya memproduksi barang baik, secepat mungkin, tanpa henti. Untuk manufaktur diskrit, 85% dianggap world-class dan ~60% tergolong tipikal.

### Metrik produksi apa yang paling penting untuk dipantau?
Selain OEE, pantau downtime (dengan analisis Pareto penyebab berhenti), first-pass yield (persentase produk lolos mutu tanpa rework), scrap/reject rate, serta biaya per unit dan konsumsi material. Untuk keandalan mesin, tambahkan MTBF dan MTTR. Bedakan metrik leading (dapat diintervensi lebih dini, mis. tren micro-stop) dari lagging (hasil akhir, mis. scrap bulanan) agar tim bertindak sebelum kerugian membesar.

### Apa beda MES dan ERP untuk data produksi?
MES (Manufacturing Execution System) bekerja di lantai produksi: mengeksekusi perintah kerja, mengumpulkan data mesin real-time, dan menghitung OEE serta downtime. ERP seperti SAP S/4HANA mengelola sisi bisnis: order produksi, konsumsi material, biaya, dan persediaan. SAP Digital Manufacturing (MES cloud SAP) terintegrasi langsung ke S/4HANA, sehingga data eksekusi shop floor dan data order/biaya menjadi satu aliran yang konsisten.

### Apakah pabrik dengan mesin lama bisa menerapkan BI produksi?
Bisa, tetapi bertahap. Mesin lama sering tak punya konektivitas, jadi datanya perlu dijembatani lewat sensor tambahan, gateway IIoT, atau pencatatan operator yang terstruktur. Kesalahan umum adalah mengejar dashboard canggih di atas data kotor. Mulai dari satu lini percontohan, rapikan reason code downtime dan definisi metrik, baru perluas. BI hanya seakurat data sumbernya — "garbage in, garbage out".

### Real-time atau cukup laporan harian untuk data produksi?
Bergantung pada keputusan yang ingin dipicu. Untuk menghentikan lini yang bermasalah atau merespons micro-stop, visibilitas real-time (via MES seperti SAP Digital Manufacturing) sangat berharga. Untuk evaluasi tren OEE mingguan atau perencanaan kapasitas, laporan harian/periodik dari lapisan analitik seperti SAP Analytics Cloud sudah memadai. Banyak pabrik memadukan keduanya: monitoring real-time di shop floor, analitik tren di atasnya.

### Bagaimana BI membantu menurunkan downtime?
BI menyatukan catatan downtime dari mesin dan MES, lalu memvisualisasikannya sebagai analisis Pareto: penyebab henti mana yang paling sering dan paling mahal. Dengan reason code yang konsisten, tim maintenance bisa memprioritaskan akar masalah, bukan menebak. SAP Digital Manufacturing menghitung OEE dan mengelola downtime event dengan reason code bawaan, sehingga penurunan downtime menjadi hasil tindakan yang terarah — bukan sekadar laporan setelah kejadian.

## Data tables for the writer (if the article calls for one)

### Tabel metrik produksi inti (kandidat Featured Snippet)
| Metrik | Definisi singkat | Rumus / cara ukur | Jenis |
|---|---|---|---|
| **OEE** | Efektivitas keseluruhan mesin/lini | Availability × Performance × Quality | Gabungan (lagging) |
| **Availability** | Waktu berjalan vs waktu terencana | Actual operating time / Planned operating time | Lagging |
| **Performance** | Kecepatan aktual vs ideal | Actual run rate / Ideal run rate | Lagging |
| **Quality** | Proporsi unit baik | Good count / Total count | Lagging |
| **First-Pass Yield** | Lolos mutu tanpa rework | (Unit masuk − rework/reject) / Unit masuk | Lagging |
| **Scrap/Reject rate** | Proporsi unit terbuang | Unit scrap / Total unit | Lagging |
| **MTBF** | Rata-rata waktu antar kegagalan | Total uptime / Jumlah kegagalan | Keandalan (lagging) |
| **MTTR** | Rata-rata waktu perbaikan | Total waktu perbaikan / Jumlah perbaikan | Maintainability (lagging) |

### Tiga lapisan sistem data produksi
| Lapisan | Peran | Contoh SAP | Data yang dihasilkan |
|---|---|---|---|
| **OT / Mesin** | Sensor, PLC, penghitung siklus | (IIoT / edge) | Sinyal mentah: run/stop, count, cycle time |
| **MES** | Eksekusi & data shop floor real-time | **SAP Digital Manufacturing** | OEE, downtime event, reason code, WIP |
| **ERP** | Order, material, biaya | **S/4HANA Production Planning (PP)** | Order produksi, konsumsi material, biaya |
| **BI / Analitik** | Visualisasi & analitik tren | **SAP Analytics Cloud** | Dashboard OEE/yield/biaya, prediksi |

### Empat dashboard produksi (untuk H2 #4)
| Dashboard | Isi utama | Keputusan yang dipicu |
|---|---|---|
| OEE per lini/shift | OEE + breakdown A/P/Q | Fokus perbaikan pada lini/shift terlemah |
| Analisis downtime | Pareto penyebab henti | Prioritaskan akar penyebab paling mahal |
| Kualitas / first-pass yield | Tren FPY & defect | Intervensi proses sebelum scrap naik |
| Biaya & material | Biaya/unit, konsumsi material | Kendalikan pemborosan & varians biaya |

## Edge cases & nuance

- **Benchmark OEE 85/60/40 spesifik untuk discrete manufacturing.** Industri proses (kimia, F&B kontinu, semen) punya pola berbeda; jangan menyamaratakan. Writer sebaiknya menulis "untuk manufaktur diskrit…" saat mengutip angka ini.
- **OEE tinggi belum tentu profit tinggi.** OEE mengukur efektivitas aset, bukan permintaan pasar. Memproduksi 100% barang baik yang tidak terjual tetap pemborosan. Ini nuance jujur yang membedakan artikel dari listicle kompetitor.
- **MES ≠ ERP ≠ BI.** Banyak artikel mencampuradukkannya. Justru pemisahan peran (dan cara ketiganya diintegrasikan) adalah whitespace utama brief ini.
- **Reason code adalah fondasi, bukan detail teknis.** Tanpa kode penyebab downtime yang konsisten, analisis Pareto downtime jadi sampah. Layak diangkat di H2 #5.
- **Real-time bukan tujuan akhir.** Nilainya muncul hanya jika ada keputusan/aksi yang dipicu. Data real-time tanpa proses respons = biaya tanpa manfaat.
- **INDI 4.0/Making Indonesia 4.0 sebagai konteks kebijakan, bukan statistik OEE.** Pakai untuk membingkai urgensi transformasi digital manufaktur Indonesia — bukan sebagai sumber angka performa mesin.

## Flags (open factual risk)

- ⚠️ **Penamaan SAP Digital Manufacturing**: gunakan "**SAP Digital Manufacturing**" (nama resmi sejak 2023). Boleh menyebut "sebelumnya SAP Digital Manufacturing Cloud/DMC" satu kali sebagai konteks. Jangan menulis "SAP DMC" sebagai nama saat ini. → phrase carefully.
- ⚠️ **Benchmark OEE 85%/60%/40%**: valid tetapi **khusus discrete manufacturing** (sumber: Vorne/Lean Production). → atribusikan sumber + batasi ke "manufaktur diskrit"; jangan klaim sebagai standar universal semua industri.
- ⚠️ **Angka penurunan downtime/uptime spesifik**: brief & product_matrix melarang mengarang. Tidak ada sumber angka "%" penurunan downtime yang bisa diverifikasi untuk kasus umum. → JANGAN tulis angka penurunan spesifik; gunakan framing kualitatif ("membantu mengidentifikasi & memprioritaskan penyebab downtime").
- ⚠️ **Statistik INDI 4.0 (328 perusahaan)** berasal dari April 2019 — sudah lama. → sebutkan tahunnya secara eksplisit ("per April 2019") atau gunakan hanya sebagai ilustrasi awal program; jangan sajikan sebagai angka terkini.
- ⚠️ **Ranking Manufacturing Value Added (11→9)** berasal dari data 2015–2016 dalam roadmap 2018. → jika dipakai, atribusi tahun; jangan sajikan sebagai posisi saat ini.
- ⚠️ **SAP Joule / fitur AI SAC**: kapabilitas AI generatif berkembang cepat dan berstatus "early-stage". → sebut secukupnya sebagai arah pengembangan; hindari klaim kapabilitas AI yang pasti/berlebihan.

## Definition snippet draft (48 words)

> **Business Intelligence untuk manufaktur** adalah penerapan analitik yang menyatukan data lantai produksi — dari mesin, MES, dan ERP — menjadi visibilitas real-time atas OEE, downtime, yield, dan biaya. Dengan begitu, tim operasi dapat menemukan akar masalah dan bertindak sebelum kerugian membesar, bukan sekadar membaca laporan setelah kejadian.
