---
brief_id: "warehouse-management-system-03"
researcher_run_date: "2026-09-17"
sources_cited: 8
flags: 4
---

# Research Dossier: Kustomisasi WMS Tanpa Merusak Upgrade — Pendekatan Clean Core untuk Gudang

## TL;DR for the writer

- **Clean core = jaga inti S/4HANA standar & upgrade-stable, pindahkan kustomisasi ke luar inti.** SAP resmi mendefinisikan clean core sebagai menjaga core "clean, standard, and upgrade-stable" sambil tetap membolehkan diferensiasi bisnis di tempat yang tepat (SAP News, 12 Agustus 2025). Framing ini bisa dipakai apa adanya untuk konteks gudang.
- **Model ekstensi sudah berevolusi.** "3-tier extensibility model" lama (Tier 1 ABAP Cloud on-stack + SAP Build side-by-side; Tier 2 gap-filler API; Tier 3 classic ABAP) kini digantikan **"clean core level concept"** dengan **empat tingkat A/B/C/D**. Tulis ini sebagai kerangka keputusan, jangan sebut "3-tier" sebagai yang terbaru.
- **Tiga jalur kustomisasi yang harus dijelaskan writer**: (1) in-app / key-user extensibility, (2) developer extensibility di ABAP Cloud (on-stack), (3) side-by-side di SAP BTP (aplikasi decoupled lewat released API/event, sering dibangun dengan SAP Build low-code). Prinsip inti: pakai **released/public API**, jangan modifikasi objek standar.
- **EWM punya panduan clean core sendiri.** Ada seri FAQ resmi SAP "Extended Warehouse Management in SAP S/4HANA — clean core level concept" dan **SAP Note 2782080** berisi panduan extensibility EWM yang upgrade-safe. API EWM tersedia di **Level A (released)** atau **Level B (classic)**. Lihat flag — konfirmasi kutipan halus karena halaman FAQ mem-block fetch langsung.
- **Clean core berlaku on-premise DAN cloud** — bukan hanya cloud. Fitur untuk S/4HANA Cloud Private Edition juga berlaku untuk deployment on-premise. Ini menjawab satu FAQ langsung.
- **Angka biaya upgrade JANGAN dikarang.** Tidak ada angka biaya resmi yang aman dikutip; gunakan framing kualitatif "utang teknis → setiap upgrade jadi proyek regresi" (lihat Flags).

## Core facts (verified)

> **Claim**: Clean core adalah prinsip menjaga inti SAP S/4HANA tetap standar dan mudah di-upgrade sambil tetap membolehkan diferensiasi bisnis di luar inti.
> **Number/specific**: SAP mendeskripsikan clean core sebagai menjaga core "clean, standard, and upgrade-stable while still enabling business-specific differentiation where it counts."
> **Source**: SAP News Center, "How to Extend SAP S/4HANA Cloud the Right Way", https://news.sap.com/2025/08/extend-sap-s4hana-cloud-right-way-clean-clear/ (12 Agustus 2025, diakses 2026-09-17)
> **Confidence**: high

> **Claim**: Tujuan clean core adalah mempercepat inovasi, menekan utang teknis, dan menyederhanakan pemeliharaan/upgrade sistem.
> **Number/specific**: Tiga tujuan yang disebut SAP: "accelerate innovation cycles", "minimize technical debt", "simplify system maintenance and upgrades".
> **Source**: SAP News Center, sama seperti di atas (12 Agustus 2025, diakses 2026-09-17)
> **Confidence**: high

> **Claim**: Clean core mencakup enam dimensi ERP, tidak hanya soal kustomisasi kode.
> **Number/specific**: Enam dimensi: software stack, extensibility, integrations, processes, data, dan operations.
> **Source**: SAP, materi/kursus clean core (learning.sap.com "Managing Clean Core for SAP S/4HANA Cloud" & "Clean Core Extensibility" paper), dikuatkan lewat SERP SAP resmi (diakses 2026-09-17)
> **Confidence**: high

> **Claim**: SAP menetapkan dua model ekstensi utama untuk clean core: side-by-side di SAP BTP dan on-stack dengan ABAP Cloud.
> **Number/specific**: Side-by-side = "scalable, decoupled applications that run independently from the core"; on-stack ABAP Cloud = "tightly integrated, upgrade-stable extensions within the ERP system".
> **Source**: SAP News Center, "Extend SAP S/4HANA Cloud the Right Way" (12 Agustus 2025, diakses 2026-09-17)
> **Confidence**: high

> **Claim**: SAP merekomendasikan strategi "BTP-first" — pilih side-by-side atau on-stack berdasarkan use case.
> **Number/specific**: "Choose between side-by-side and on-stack extensibility based on your use case, applying an SAP BTP-first strategy."
> **Source**: SAP News Center, sama (12 Agustus 2025, diakses 2026-09-17)
> **Confidence**: high

> **Claim**: In-app / key-user extensibility adalah jalur kustomisasi terkendali di dalam sistem oleh key user (mis. custom field, logika ringan lewat BAdI rilisan, custom CDS view, adaptasi UI), memakai objek yang di-release SAP.
> **Number/specific**: Bagian dari model ekstensibilitas SAP; termasuk kategori Level A ketika hanya memakai interface publik yang stabil.
> **Source**: SAP, extensibility model best practices (learning.sap.com "Exploring Clean Core Extensibility Best Practices") + ABAP Extensibility Guide Aug 2025 (community.sap.com), diakses 2026-09-17
> **Confidence**: high

> **Claim**: Model "3-tier extensibility" lama telah berevolusi menjadi "clean core level concept" dengan empat tingkat.
> **Number/specific**: 3-tier lama = Tier 1 (ABAP Cloud on-stack + SAP Build side-by-side di BTP), Tier 2 (mekanisme sementara untuk API yang belum di-release), Tier 3 (classic ABAP). Kini digantikan level A/B/C/D.
> **Source**: SAP Community (SAP-authored), "Clean Core maturity and the new Extensibility Levels" & "ABAP Extensibility Guide – Clean Core (August 2025 Update)", https://community.sap.com/t5/technology-blog-posts-by-sap/clean-core-maturity-and-the-new-extensibility-levels/ba-p/14293974 (diakses 2026-09-17)
> **Confidence**: high

> **Claim**: Empat tingkat clean core (extensibility levels) mengklasifikasikan ekstensi dari paling bersih ke paling berisiko.
> **Number/specific**: Level A = ekstensi paling bersih (on-stack ABAP Cloud atau side-by-side SAP Build/CAP/low-code, hanya pakai API publik yang di-release); Level B = classic API yang terdokumentasi & umumnya upgrade-stable; Level C = akses ke objek internal SAP (partial compliant, untuk skenario legacy); Level D = pola tidak disarankan (modifikasi standar, tulis langsung ke tabel, implicit enhancement) = risiko utang teknis tertinggi.
> **Source**: SAP Community (SAP-authored) "Clean Core maturity and the new Extensibility Levels" (diakses 2026-09-17); dikuatkan SAP News (12 Agustus 2025)
> **Confidence**: high

> **Claim**: Semua API di SAP Business Accelerator Hub (dulu SAP API Business Hub) diklasifikasikan sebagai Level A.
> **Number/specific**: Katalog pusat API/integration content SAP; API yang tercantum = Level A (public, released, stabil).
> **Source**: SAP Community/SAP resmi via SERP (diakses 2026-09-17)
> **Confidence**: medium (nama katalog SAP sempat berganti "API Business Hub" → "Business Accelerator Hub"; verifikasi penamaan terkini sebelum menyebut nama katalog spesifik — lihat Flags)

> **Claim**: SAP Build adalah portofolio pengembangan terpadu di atas SAP BTP yang menyatukan low-code dan pro-code.
> **Number/specific**: Komponen low-code: SAP Build Apps (pembuatan aplikasi), SAP Build Process Automation (otomasi alur kerja + RPA), SAP Build Work Zone (business site/portal). Pro-code: SAP Build Code, plus SAP BTP ABAP environment & S/4HANA ABAP Cloud environment.
> **Source**: SAP, halaman produk resmi "App Development and Automation | SAP Build", https://www.sap.com/products/technology-platform/build.html (diakses 2026-09-17)
> **Confidence**: high

> **Claim**: SAP Build Process Automation menggabungkan otomasi alur kerja (workflow) dan RPA dalam satu tool low-code.
> **Number/specific**: Termasuk kemampuan seperti process variants, RFC/BAPI consumption, dan branching (pembaruan 2025).
> **Source**: SAP, "Business Process Automation Software | Low Code | SAP", https://www.sap.com/sea/products/technology-platform/process-automation.html (diakses 2026-09-17)
> **Confidence**: high

> **Claim**: SAP Business Technology Platform (SAP BTP) adalah platform yang menyatukan pengembangan aplikasi, integrasi, data & analitik, dan AI — fondasi untuk ekstensi side-by-side.
> **Number/specific**: SAP Build berjalan di atas SAP BTP; side-by-side extension dibangun di BTP dan terhubung ke core lewat released API/event.
> **Source**: SAP, halaman SAP Build/BTP (sap.com) + SAP News (12 Agustus 2025), diakses 2026-09-17
> **Confidence**: high

> **Claim**: Prinsip clean core berlaku untuk deployment on-premise S/4HANA maupun cloud, bukan hanya cloud.
> **Number/specific**: Fitur yang relevan untuk SAP S/4HANA Cloud Private Edition juga berlaku untuk deployment on-premise.
> **Source**: SAP, materi clean core (learning.sap.com "Managing Clean Core for SAP S/4HANA Cloud" & dokumen "Clean core extensibility in SAP S/4HANA Cloud Private Edition"), diakses 2026-09-17
> **Confidence**: high

> **Claim**: SAP Extended Warehouse Management (EWM) di S/4HANA memiliki panduan clean core level tersendiri.
> **Number/specific**: Ada seri FAQ resmi SAP "Extended Warehouse Management in SAP S/4HANA — FAQ series: update on the new Clean Core level concept" (SAP Community, supply-chain blog by SAP).
> **Source**: SAP Community (SAP-authored), https://community.sap.com/t5/supply-chain-management-blog-posts-by-sap/extended-warehouse-management-in-sap-s-4hana-faq-series-update-on-the-new/ba-p/14035555 (URL valid via SERP; halaman mem-block fetch langsung/HTTP 403, diakses 2026-09-17)
> **Confidence**: medium (URL & judul terverifikasi via SERP SAP; isi rinci dari snippet, bukan fetch penuh — lihat Flags)

> **Claim**: API/extension point EWM tersedia di tingkat clean core Level A (released) atau Level B (classic), dan ada panduan extensibility EWM khusus yang upgrade-safe.
> **Number/specific**: Mitra dapat menawarkan clean core API untuk pelanggan EWM di Level A (released) atau Level B (classic API); **SAP Note 2782080** memuat beberapa panduan extensibility per area EWM (metodologi upgrade-safe), berlaku untuk S/4HANA Private Cloud Edition.
> **Source**: SAP Community EWM FAQ + SAP Note 2782080 (via SERP SAP resmi, diakses 2026-09-17)
> **Confidence**: medium (dari snippet SERP; nomor SAP Note perlu disebut hati-hati atau di-attribute — lihat Flags)

> **Claim**: Memodifikasi objek standar / custom code klasik (mis. modifikasi ZWM ala lama, implicit enhancement, tulis langsung ke tabel) menciptakan utang teknis dan menyulitkan upgrade.
> **Number/specific**: Pola ini masuk Level D — "highest risk of technical debt"; setiap upgrade menuntut pengujian regresi ulang pada kode yang menyentuh objek standar.
> **Source**: SAP Community (SAP-authored) extensibility levels + SAP News (12 Agustus 2025), diakses 2026-09-17
> **Confidence**: high (klaim kualitatif; jangan lampirkan angka biaya — lihat Flags)

> **Claim**: SAP ECC / SAP Business Suite 7 mainstream maintenance berakhir 2027, dengan opsi extended support berbayar hingga 2030 — mendorong perpindahan ke S/4HANA dan relevansi clean core untuk kesiapan cloud.
> **Number/specific**: Mainstream maintenance 2027; extended maintenance (berbayar) hingga 2030.
> **Source**: SAP maintenance strategy (news.sap.com / SAP maintenance policy — kebijakan yang dipublikasikan dan sudah mapan), diakses 2026-09-17
> **Confidence**: high (tanggal ini pernah berubah historis; writer sebaiknya frasa "sesuai strategi pemeliharaan SAP" — lihat Flags)

(16 verified claims.)

## Solution focus + Soltius anchor (from product_matrix.md — row 6: SAP Clean Core)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| Prinsip clean core (vendor-neutral → SAP) | Jaga inti standar & upgrade-stable; pindahkan diferensiasi ke luar inti | H2 #1 (definisi) | — |
| In-app / key-user extensibility | Kustomisasi terkendali di dalam sistem pakai objek rilisan; Level A bila hanya pakai API publik | H2 #3 | — |
| ABAP Cloud (on-stack) | Ekstensi terintegrasi & upgrade-stable di dalam ERP, pakai released API | H2 #3 | — |
| Side-by-side di SAP BTP | Aplikasi decoupled, terhubung via released API/event; strategi "BTP-first" | H2 #3, #4 | — |
| SAP Build (Build Apps, Build Process Automation, Build Work Zone; low-code) | Portofolio low-code/pro-code di atas BTP untuk aplikasi & otomasi gudang | H2 #4 (tabel) | Digital Platform framing |
| Clean core level A/B/C/D | Kerangka keputusan tingkat kebersihan ekstensi | H2 #3/#4 | — |
| SAP EWM clean core level + released API | EWM punya panduan level sendiri; API Level A/B; SAP Note 2782080 | H2 #1/#3, FAQ | — |
| **Soltius anchor** | "Soltius membantu perusahaan menerapkan prinsip clean core — memindahkan kustomisasi gudang ke SAP BTP/SAP Build — agar sistem tetap mudah di-upgrade dan siap cloud." Kredibilitas: **SAP Platinum Partner via United VARs**; layanan **Implementation + Enhancement + ERP Strategy**. | **closing** (+ opsional 1 aside mid-artikel di bagian fit-to-standard) | Implementation/Enhancement/ERP Strategy |

Reminder: Soltius **implements/migrates/supports/enhances** teknologi ini — **tidak membangunnya**. Maks 2–3 self-mention (idealnya 1 di closing + 1 aside). Jangan superlatif. Jangan posisikan SAP Build/BTP sebagai produk Soltius.

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **SAP News Center — "How to Extend SAP S/4HANA Cloud the Right Way" (12 Agustus 2025)** — https://news.sap.com/2025/08/extend-sap-s4hana-cloud-right-way-clean-clear/ — *what it backs*: definisi clean core, side-by-side vs on-stack ABAP Cloud, strategi BTP-first, "Extend with SAP Build", empat level compliance. **Sumber utama & paling otoritatif — wajib ditautkan.**
2. **SAP Community (SAP-authored) — "Clean Core maturity and the new Extensibility Levels"** — https://community.sap.com/t5/technology-blog-posts-by-sap/clean-core-maturity-and-the-new-extensibility-levels/ba-p/14293974 — *what it backs*: evolusi 3-tier → clean core level concept; rincian Level A/B/C/D. (Alternatif setara: "ABAP Extensibility Guide – Clean Core, August 2025 Update", https://community.sap.com/t5/technology-blog-posts-by-sap/abap-extensibility-guide-clean-core-for-sap-s-4hana-cloud-august-2025/ba-p/14175399)
3. **SAP Community (SAP-authored) — "Extended Warehouse Management in SAP S/4HANA FAQ series: update on the new Clean Core level concept"** — https://community.sap.com/t5/supply-chain-management-blog-posts-by-sap/extended-warehouse-management-in-sap-s-4hana-faq-series-update-on-the-new/ba-p/14035555 — *what it backs*: penerapan clean core level spesifik untuk EWM; API Level A/B; SAP Note 2782080. (Gunakan sebagai bukti "EWM punya panduan clean core sendiri"; kutip hati-hati — lihat Flags.)
4. **SAP produk — "App Development and Automation | SAP Build"** — https://www.sap.com/products/technology-platform/build.html — *what it backs*: komposisi SAP Build (Build Apps/Process Automation/Work Zone/Code) di atas SAP BTP.

Priority note: keempatnya SAP official (tingkat otoritas tertinggi untuk fakta produk SAP). Writer wajib link out minimal ke #1, dan sebaiknya #2 atau #3.

## FAQ Q&As (7 drafted, Bahasa Indonesia)

### Apa itu clean core?
Clean core adalah prinsip menjaga inti sistem SAP S/4HANA tetap standar dan mudah di-upgrade dengan memindahkan kustomisasi ke luar inti — lewat in-app extensibility, ABAP Cloud, atau aplikasi side-by-side di SAP BTP. SAP menyebut tujuannya mempercepat inovasi, menekan utang teknis, dan menyederhanakan upgrade. Untuk gudang, artinya menambah aturan atau integrasi tanpa mengunci sistem dari pembaruan.

### Apakah SAP EWM bisa dikustomisasi tanpa mengganggu upgrade?
Bisa. SAP menyediakan panduan clean core khusus untuk Extended Warehouse Management (EWM) dan menawarkan API di Level A (released) atau Level B (classic). Selama kustomisasi memakai released API/extension point resmi — bukan memodifikasi objek standar — ekstensi gudang tetap upgrade-stable. SAP Note 2782080 memuat panduan extensibility EWM upgrade-safe untuk S/4HANA Private Cloud Edition.

### Apa bedanya in-app dan side-by-side extensibility?
In-app (key-user) extensibility adalah perubahan terkendali di dalam sistem S/4HANA — misalnya menambah field, adaptasi layar, atau logika ringan lewat BAdI rilisan. Side-by-side extensibility membangun aplikasi terpisah (decoupled) di SAP BTP yang terhubung ke core lewat released API/event. In-app cocok untuk perubahan kecil di inti; side-by-side untuk aplikasi atau UI yang lebih besar dan independen.

### Apa itu SAP BTP dan SAP Build?
SAP Business Technology Platform (SAP BTP) adalah platform yang menyatukan pengembangan aplikasi, integrasi, data & analitik, serta AI — fondasi untuk ekstensi side-by-side. SAP Build adalah portofolio pengembangan low-code/pro-code di atas BTP: Build Apps (aplikasi), Build Process Automation (otomasi alur kerja + RPA), dan Build Work Zone (portal). Keduanya memungkinkan menambah kemampuan gudang tanpa menyentuh inti.

### Kapan sebaiknya memakai low-code untuk aplikasi gudang?
Low-code (SAP Build) tepat untuk aplikasi pelengkap yang independen dari inti: layar operator mobile khusus, formulir inspeksi kualitas, atau otomasi alur persetujuan. Bangun side-by-side di SAP BTP dan hubungkan lewat released API. Namun terapkan tata kelola: tanpa kontrol, low-code bisa memicu shadow IT. Untuk logika inti yang berat, developer extensibility ABAP Cloud sering lebih tepat.

### Mengapa custom code lama (ZWM) menyulitkan upgrade?
Kustomisasi cara lama sering memodifikasi objek standar atau menulis langsung ke tabel — pola yang SAP kategorikan Level D dengan risiko utang teknis tertinggi. Karena kode menempel pada objek yang bisa berubah saat upgrade, setiap pembaruan menuntut pengujian regresi dan penyesuaian ulang. Akibatnya upgrade berubah menjadi proyek besar yang mahal dan berisiko, bukan langkah rutin.

### Apakah clean core hanya untuk versi cloud?
Tidak. Prinsip clean core berlaku untuk deployment on-premise S/4HANA maupun cloud. Fitur yang relevan untuk S/4HANA Cloud Private Edition juga berlaku untuk on-premise. Manfaatnya sama di mana pun sistem berjalan: inti yang standar membuat upgrade lebih mudah, menekan utang teknis, dan menyiapkan organisasi bila kelak berpindah ke cloud.

## Data tables for the writer

### Tabel 1 — Tiga jalur meng-extend WMS (in-app vs side-by-side vs modifikasi inti)
| Aspek | In-app / key-user | Side-by-side (SAP BTP) | ABAP Cloud (on-stack) | Modifikasi inti (cara lama) |
|---|---|---|---|---|
| Di mana kode berada | Di dalam S/4HANA (tool key-user) | Aplikasi terpisah di SAP BTP | Di dalam S/4HANA (ABAP Cloud) | Menyentuh objek standar di inti |
| Cara terhubung ke core | Objek/BAdI rilisan | Released API/event | Released API di dalam stack | Langsung ke tabel/objek standar |
| Upgrade-stable? | Ya (bila pakai objek rilisan) | Ya | Ya | Tidak — sumber utang teknis |
| Cocok untuk | Field, logika ringan, adaptasi UI | Aplikasi/UI besar, otomasi, low-code | Logika inti kompleks, high-volume | (Hindari) |
| Contoh gudang | Tambah field pada dokumen gudang | Layar operator mobile kustom, otomasi QA | Aturan picking kompleks berperforma tinggi | ZWM ala lama |
| Clean core level | A (bila API publik) | A | A | D |

### Tabel 2 — Empat tingkat clean core (extensibility levels)
| Level | Deskripsi singkat | Contoh | Risiko upgrade |
|---|---|---|---|
| A | Hanya interface publik yang di-release & stabil; on-stack ABAP Cloud atau side-by-side SAP Build/CAP/low-code | Aplikasi BTP via released API | Terendah (paling bersih) |
| B | Classic API yang terdokumentasi & umumnya upgrade-stable | Ekstensi via classic API bertumpu interface resmi | Rendah–sedang |
| C | Akses ke objek internal SAP (partial compliant) untuk skenario legacy | Pemakaian objek internal terbatas | Sedang–tinggi |
| D | Pola tidak disarankan: modifikasi standar, tulis langsung ke tabel, implicit enhancement | Modifikasi ZWM ala lama | Tertinggi (utang teknis) |

### Tabel 3 — Kebutuhan gudang → jalur yang disarankan (untuk H2 #4)
| Kebutuhan kustom di gudang | Jalur yang disarankan | Alasan |
|---|---|---|
| Tambah field/atribut pada dokumen atau layar gudang | In-app / key-user extensibility | Perubahan kecil, terkendali di dalam sistem, upgrade-stable |
| Aturan picking/putaway khusus & kompleks berperforma tinggi | ABAP Cloud (on-stack, released API) | Butuh dekat data & performa; tetap upgrade-stable via released API |
| Layar operator mobile kustom / aplikasi gudang pelengkap | Side-by-side SAP Build Apps (di BTP) | Aplikasi independen, low-code, decoupled dari inti |
| Integrasi timbangan / printer label / konveyor | Side-by-side di BTP via released API/event + Integration Suite | Menjaga inti bersih; integrasi terisolasi dan bisa di-scale |
| Otomasi alur persetujuan / inspeksi QA | SAP Build Process Automation | Otomasi workflow low-code tanpa menyentuh core |
| Validasi/aturan yang sebenarnya bisa dipenuhi konfigurasi standar | (Tidak perlu kustom) fit-to-standard | Hindari over-engineering; adopsi proses standar dulu |

## Edge cases & nuance

- **"Kadang jawaban terbaik adalah TIDAK mengkustomisasi."** Banyak "kebutuhan unik" sebenarnya bisa dipenuhi konfigurasi standar EWM/S/4HANA. Fit-to-standard dulu; kustomisasi hanya untuk diferensiasi nyata. Ini poin orisinal untuk H2 #5 dan pembeda vs kompetitor SERP.
- **Low-code bukan bebas tata kelola.** Side-by-side/low-code yang tak terkelola menimbulkan shadow IT dan proliferasi aplikasi. Clean core menghilangkan modifikasi inti, bukan kebutuhan governance. (Governance low-code mendalam sengaja disisakan untuk artikel Low Code Platform tersendiri — jangan digarap dalam.)
- **Level A ≠ "tanpa syarat".** Ekstensi Level A tetap harus memakai released API/objek; bila API yang dibutuhkan belum di-release, itulah kasus yang dulu ditangani "Tier 2" dan kini dinilai per level. Jangan janjikan "semua bisa Level A".
- **On-stack vs side-by-side bukan hitam-putih.** SAP menyarankan "BTP-first" tapi memilih on-stack untuk logika yang perlu dekat dengan data/berperforma tinggi. Writer sebaiknya sajikan sebagai keputusan berbasis use case, bukan aturan kaku.
- **Keputusan extensibility paling murah diambil di fase blueprint** — sebelum kustomisasi terlanjur ditulis. Ini titik natural untuk 1 aside pengalaman implementasi Soltius (opsional, mid-artikel).
- **EWM: embedded vs decentralized.** Artikel 2026-08 sudah membahas pilihan produk (Stock Room vs Embedded EWM vs Decentralized EWM). Artikel ini fokus pada model ekstensi setelah memilih — jangan ulang perbandingan produk.

## Flags (open factual risk)

- ⚠️ **Halaman FAQ EWM clean core mem-block fetch langsung (HTTP 403).** URL, judul, dan fakta kunci (API Level A/B, SAP Note 2782080, "clean core level concept" untuk EWM) terverifikasi via snippet SERP SAP resmi, bukan fetch penuh. → Rekomendasi: writer boleh menyatakan "EWM punya panduan clean core level tersendiri" dan menautkan URL, tetapi hindari kutipan kalimat verbatim dari halaman ini; frasa sebagai parafrase. Jika ingin menyebut **SAP Note 2782080**, attribute sebagai "SAP Note tentang panduan extensibility EWM" tanpa mengklaim isi detail per area.
- ⚠️ **Nama katalog API SAP bisa berbeda.** Historis: "SAP API Business Hub" → "SAP Business Accelerator Hub". → Rekomendasi: gunakan frasa generik "katalog API resmi SAP (released API)" alih-alih menyebut nama merek katalog yang mungkin sudah berganti, kecuali writer mengonfirmasi penamaan terkini.
- ⚠️ **Tanggal end-of-maintenance ECC (2027/2030) pernah bergeser secara historis.** → Rekomendasi: sebut "sesuai strategi pemeliharaan SAP, mainstream maintenance ECC berakhir 2027 dengan extended support hingga 2030" — attribute ke SAP, jangan sajikan sebagai angka mutlak tanpa sumber. Ini konteks pendukung saja; artikel bukan tentang migrasi.
- ⚠️ **Angka biaya/waktu upgrade TIDAK boleh dikarang.** Tidak ada angka resmi yang aman dikutip untuk "berapa mahal upgrade dengan banyak modifikasi". → Rekomendasi: gunakan framing kualitatif ("utang teknis membuat setiap upgrade jadi proyek regresi") atau label eksplisit "rentang lapangan, ilustratif — bukan studi resmi". Jangan lampirkan persentase/nominal.

## Definition snippet draft (49 words)

> **Clean core** adalah prinsip menjaga inti sistem SAP S/4HANA tetap standar dan mudah di-upgrade dengan memindahkan kustomisasi ke luar inti — melalui in-app extensibility, ABAP Cloud, atau aplikasi side-by-side di SAP Business Technology Platform (SAP BTP). Untuk gudang, artinya menambah aturan picking atau integrasi perangkat tanpa mengunci sistem dari pembaruan.
