---
brief_id: "sap-clean-core-03"
researcher_run_date: "2026-09-21"
sources_cited: 10
flags: 5
---

# Research Dossier: Transisi Developer ABAP ke ABAP Cloud — Menyiapkan Tim untuk Clean Core

## TL;DR for the writer

- **ABAP Cloud adalah "model" pengembangan go-forward, bukan sekadar bahasa baru**: ia adalah subset ABAP yang dibatasi yang hanya boleh mengonsumsi *released API* (objek ter-whitelist dengan kontrak C1). Inilah yang secara *teknis* menegakkan clean core — developer tidak bisa lagi menyentuh objek internal SAP. Ini pergeseran kebiasaan, bukan sekadar tooling.
- **RAP (ABAP RESTful Application Programming Model) adalah pola pengembangan penggantinya.** Komponen resmi yang wajib dipelajari tim: **CDS** (model data), **Behavior Definition** (+ behavior pool untuk logika), **Service Definition/Binding** (ekspos ke Fiori/OData), dan **EML** (Entity Manipulation Language) untuk mengakses business object. Ini menggantikan pola report/module-pool klasik.
- **Jawab pembaca yang panik dengan jujur**: skill ABAP klasik TIDAK dibuang. Di S/4HANA Cloud **Private Edition** dan **on-premise**, developer klasik tetap relevan — terutama untuk **Tier-2 wrapper** yang membungkus artefak lama (mis. BAPI) yang belum di-release. Yang bergeser adalah *default*-nya: bangun baru dengan ABAP Cloud/RAP.
- **Ketersediaan per edisi adalah titik akurasi paling rawan.** On-stack developer extensibility *ada* di ketiga edisi, TAPI di **Public Edition** hanya boleh ABAP Cloud (released API); classic ABAP + Tier-2 wrapper hanya di Private/on-prem. Jangan salah tulis ini (lihat Flags).
- **Tooling berubah**: SE80 → **ADT (Eclipse)**; version control lewat **abapGit** (developer) / **gCTS** (enterprise CI/CD); kualitas dicek otomatis lewat **ATC cloud-readiness variant**. Jangan kutip durasi pelatihan sebagai angka pasti — pakai label rentang/estimasi.

## Core facts (verified)

> **Claim**: ABAP Cloud adalah subset bahasa ABAP yang dibatasi yang hanya mengizinkan konsumsi *released API* / objek ter-whitelist, sehingga kustomisasi tidak menyentuh inti dan tetap upgrade-safe.
> **Number/specific**: Model pengembangan clean-core resmi SAP; objek yang boleh dipakai adalah yang punya kontrak rilis **C1 (released for cloud development)**.
> **Source**: SAP Community — ABAP Cloud FAQ (pages.community.sap.com/topics/abap/abap-cloud-faq); SAP GitHub `abap-atc-cr-cv-s4hc` README, akses 2026-09-21
> **Confidence**: high

> **Claim**: ABAP Cloud adalah model pengembangan **go-forward** yang direkomendasikan SAP untuk semua development baru lintas edisi.
> **Number/specific**: Berlaku untuk S/4HANA Cloud Public Edition, Private Edition, dan on-premise (sebagai default untuk ekstensi baru).
> **Source**: SAP Community — Developer Extensibility in SAP S/4HANA Cloud ABAP Environment, akses 2026-09-21
> **Confidence**: high

> **Claim**: RAP (ABAP RESTful Application Programming Model) adalah framework resmi SAP untuk membangun aplikasi Fiori transaksional dan read-only.
> **Number/specific**: Tersedia di SAP S/4HANA (on-premise sejak rilis **1909+**) dan SAP BTP ABAP Environment.
> **Source**: SAP Help Portal — ABAP RESTful Application Programming Model (help.sap.com/docs/abap-cloud/abap-rap), akses 2026-09-21
> **Confidence**: high

> **Claim**: Model data di RAP dibangun dengan **Core Data Services (CDS)** — CDS entity merepresentasikan entitas bisnis nyata dan menjadi fondasi aplikasi.
> **Number/specific**: CDS view/entity = lapisan model data; juga menjadi fondasi embedded analytics.
> **Source**: SAP Help Portal — RAP; SAP Learning — "Exploring the Concept and Architecture of RAP", akses 2026-09-21
> **Confidence**: high

> **Claim**: Perilaku business object RAP didefinisikan di objek **Behavior Definition**; logika tambahan diimplementasikan di kelas ABAP global bernama **Behavior Pool**.
> **Number/specific**: Behavior Definition + Behavior Pool = lapisan transaksional/logika.
> **Source**: SAP Help Portal — RAP, akses 2026-09-21
> **Confidence**: high

> **Claim**: **EML (Entity Manipulation Language)** adalah komponen bahasa ABAP — API standar dan type-safe untuk mengakses business object RAP.
> **Number/specific**: Baca via `READ ENTITIES`, ubah via `MODIFY ENTITIES` (dari transaction buffer).
> **Source**: SAP Help Portal — RAP; blog.sap-press.com (ringkasan RAP), akses 2026-09-21
> **Confidence**: high

> **Claim**: Sebuah aplikasi RAP terekspos ke UI/konsumen lewat **Service Definition** dan **Service Binding** (mis. OData untuk Fiori Elements).
> **Number/specific**: 4 lapis inti: CDS (data) → Behavior Definition (perilaku) → Service Definition → Service Binding.
> **Source**: SAP Help Portal — RAP; SAP Learning RAP course, akses 2026-09-21
> **Confidence**: high

> **Claim**: Ada tiga pendekatan extensibility: **key-user (in-app)**, **developer (on-stack)**, dan **side-by-side (di SAP BTP)**.
> **Number/specific**: Key-user tersedia di semua edisi; developer & side-by-side ketersediaannya berbeda per edisi.
> **Source**: SAP Community — ABAP Extensibility Guide: Clean Core for SAP S/4HANA Cloud (August 2025 Update), akses 2026-09-21
> **Confidence**: high

> **Claim**: Di **S/4HANA Cloud Public Edition**, on-stack developer extensibility hanya boleh berupa **ABAP Cloud (released API)** — classic ABAP tidak tersedia.
> **Number/specific**: Public Edition hanya mendukung Tier 1 (ABAP Cloud on-stack) + side-by-side; Tier 2 (classic API via wrapper) eksklusif untuk Private Edition/on-prem.
> **Source**: SAP Community — ABAP Extensibility Guide (Aug 2025 Update); Developer Extensibility blog, akses 2026-09-21
> **Confidence**: high

> **Claim**: **Tier-2 wrapper / nominated API** adalah mekanisme mitigasi: saat sebuah artefak (mis. BAPI) belum punya versi released C1 tapi terdaftar sebagai *nominated API*, developer membungkusnya dengan wrapper classic ABAP lalu me-release-nya via **ABAP Cloud API enablement** agar bisa dikonsumsi RAP.
> **Number/specific**: Hanya di S/4HANA **Private Cloud Edition** / on-prem; wrapper hanya boleh mengakses released SAP API + classic SAP API.
> **Source**: SAP-samples GitHub `abap-platform-nominated-apis-consumption`; SAP Community — "How to mitigate missing publicly released SAP APIs", akses 2026-09-21
> **Confidence**: high

> **Claim**: SAP menyediakan daftar objek ter-release/whitelisted dan alat cek kesiapan otomatis.
> **Number/specific**: **ATC (ABAP Test Cockpit)** dengan variant `CLOUD_READINESS`/`S/4HANA_READINESS`; **Cloudification Repository Viewer** menampilkan API yang sudah/akan di-release.
> **Source**: SAP GitHub `abap-atc-cr-cv-s4hc` README, akses 2026-09-21
> **Confidence**: high

> **Claim**: **ADT (ABAP Development Tools)** berbasis Eclipse adalah IDE wajib untuk pengembangan RAP/ABAP Cloud, menggantikan SE80.
> **Number/specific**: ADT mengelola CDS view, behavior definition, service binding; SE80 tidak mendukung objek-objek ini.
> **Source**: developers.sap.com/concepts/abap-development-tools; SAP Help — Installing ADT, akses 2026-09-21
> **Confidence**: high

> **Claim**: Version control modern memakai **abapGit** (level developer) dan/atau **gCTS** (Git-enabled Change and Transport System, level enterprise CI/CD).
> **Number/specific**: Di ABAP Cloud, abapGit dijalankan lewat plug-in ADT (tanpa akses SE38/SE80); abapGit & gCTS bisa dikombinasikan.
> **Source**: SAP Community — Version management in ABAP in Eclipse; abapGit ADT_Frontend (GitHub), akses 2026-09-21
> **Confidence**: high

> **Claim**: SAP memperbarui kerangka kepatuhan clean core dengan **rating A–D** yang mereframe model Tier 1–3 lama.
> **Number/specific**: A = ekstensi paling bersih (ABAP Cloud/BTP, public API); D = non-compliant (modifikasi langsung/noAPI). Diperkenalkan di panduan clean-core 2025.
> **Source**: SAP Community — ABAP Extensibility Guide (Aug 2025 Update); analisis avotechs (sekunder), akses 2026-09-21
> **Confidence**: medium (lihat Flags — terminologi masih ko-eksis dengan "Tier 1–3")

> **Claim**: Deadline maintenance ECC mendorong urgensi adopsi ABAP Cloud/RAP.
> **Number/specific**: Mainstream maintenance SAP ECC 6.0 (Business Suite 7) berakhir **2027**, dengan extended support berbayar hingga **2030**.
> **Source**: SAP maintenance strategy (diumumkan Feb 2020); konsisten dengan `knowledge_base/product_matrix.md`
> **Confidence**: high (attribute ke SAP; lihat Flags)

> **Claim**: Aturan inti ABAP Cloud dapat diringkas sebagai "gunakan hanya yang di-release": no direct access ke tabel/objek internal SAP, hanya released API/CDS/BAdI.
> **Number/specific**: Objek non-released memicu error/warning ATC saat kompilasi di ABAP Cloud language version.
> **Source**: SAP GitHub `abap-atc-cr-cv-s4hc`; ABAP Cloud FAQ, akses 2026-09-21
> **Confidence**: high

## Solution focus + Soltius anchor (from product_matrix.md)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| ABAP Cloud (subset + released API) | Model go-forward; hanya objek released/C1 | H2 #1 (definisi) | — (edukasi, bukan CTA) |
| RAP + CDS/Behavior Definition/EML | Framework Fiori transaksional; komponen resmi | H2 #2 | — |
| Developer (on-stack) vs side-by-side (BTP) + Tier-2 wrapper | Ketersediaan per edisi; wrapper hanya Private/on-prem | H2 #3 & #4 | Tie-in ke Low-Code (SAP Build) |
| ADT / abapGit / gCTS + jalur upskilling | Tooling & urutan belajar | H2 #5 | **Implementation + Enhancement + Change Management sebagai SAP Platinum Partner via United VARs** — closing CTA (enablement + co-development tim) |

Reminder: Soltius **mengimplementasikan/mendampingi/melakukan enablement** — tidak membangun ABAP Cloud/RAP. Maks 2–3 self-mention (closing + 1 aside lapangan opsional). Tie-in cousin: Low-Code/SAP Build (`/id/blog/low-code-and-no-code-platforms`) dan Business Intelligence (`/id/blog/business-intelligence`, via CDS → embedded analytics).

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **SAP Help Portal — ABAP RESTful Application Programming Model** — https://help.sap.com/docs/abap-cloud/abap-rap/abap-restful-application-programming-model — *what it backs*: komponen resmi RAP (CDS, Behavior Definition, EML, service binding), ketersediaan on-prem 1909+/BTP. **(SAP official — otoritas tertinggi.)**
2. **SAP-samples GitHub — abap-platform-nominated-apis-consumption** — https://github.com/SAP-samples/abap-platform-nominated-apis-consumption — *what it backs*: konsep nominated API & Tier-2 wrapper untuk BAPI belum-released di Private Cloud. **(SAP official samples.)**
3. **SAP Community — ABAP Extensibility Guide: Clean Core for SAP S/4HANA Cloud (Aug 2025 Update)** — https://community.sap.com/t5/technology-blog-posts-by-sap/abap-extensibility-guide-clean-core-for-sap-s-4hana-cloud-august-2025/ba-p/14175399 — *what it backs*: tiga pendekatan extensibility + ketersediaan per edisi + evolusi rating A–D.
4. **SAP GitHub — abap-atc-cr-cv-s4hc** — https://github.com/SAP/abap-atc-cr-cv-s4hc — *what it backs*: daftar released vs classic API, variant ATC cloud-readiness.

Priority terpenuhi: SAP official (Help Portal + GitHub + Community) sebagai sumber utama; sumber developer independen (etzglobal/code4sap dari brief) boleh dipakai writer untuk framing perbandingan RAP vs klasik, bukan untuk fakta produk.

## FAQ Q&As (6 drafted, Bahasa Indonesia)

### Apa bedanya ABAP Cloud dan ABAP klasik?
ABAP klasik memberi developer akses penuh ke objek internal SAP, termasuk memodifikasi inti. ABAP Cloud adalah subset bahasa yang dibatasi: hanya boleh memakai *released API* dan objek ter-whitelist, tanpa akses langsung ke tabel atau objek internal. Batasan inilah yang membuat ekstensi ABAP Cloud otomatis clean-core-safe dan upgrade-safe, sementara kode klasik bisa "menyandera" upgrade.

### Apa itu RAP dan untuk apa?
RAP (ABAP RESTful Application Programming Model) adalah framework resmi SAP untuk membangun aplikasi Fiori transaksional dan read-only. Komponennya: Core Data Services (CDS) untuk model data, Behavior Definition untuk logika, serta Service Definition/Binding untuk mengekspos layanan OData. RAP menggantikan pola report dan module-pool klasik, dan menjadi cara standar membangun ekstensi di ABAP Cloud maupun SAP BTP.

### Apakah developer ABAP akan digantikan oleh clean core?
Tidak. Perannya bergeser, bukan hilang. Di S/4HANA Cloud Private Edition dan on-premise, developer klasik tetap dibutuhkan — misalnya membuat Tier-2 wrapper untuk artefak lama seperti BAPI yang belum di-release. Yang berubah adalah *default*-nya: pengembangan baru kini dimulai dengan ABAP Cloud dan RAP, sehingga skill developer justru naik nilai bila diarahkan ke model go-forward.

### Berapa lama developer ABAP klasik belajar ABAP Cloud?
Tidak ada angka pasti; anggap ini estimasi rentang, bukan janji. Sebagai rule-of-thumb lapangan, developer OO ABAP yang berpengalaman biasanya butuh beberapa minggu untuk produktif dasar di CDS dan RAP, dan beberapa bulan untuk mahir pola released-API. Kuncinya bukan durasi, melainkan urutan belajar bertahap (ADT dulu, lalu CDS, OData, baru RAP) dan proyek latihan nyata.

### Apa itu released API dan mengapa penting untuk clean core?
Released API adalah objek SAP (CDS, BAdI, class) yang secara resmi diberi kontrak stabil (C1) untuk dikonsumsi pengembangan pelanggan. ABAP Cloud hanya mengizinkan pemakaian objek released ini. Karena SAP menjamin stabilitasnya lintas upgrade, ekstensi yang hanya memakai released API tidak rusak saat inti di-upgrade — inilah mekanisme teknis yang menegakkan clean core.

### Apakah developer extensibility on-stack tersedia di S/4HANA Cloud Public Edition?
Ya, tetapi hanya dalam bentuk ABAP Cloud (released API saja). Anda tidak bisa memakai classic ABAP atau membuat Tier-2 wrapper di Public Edition — semua ekstensi on-stack wajib clean-core-compliant sejak awal. Classic developer extensibility dan Tier-2 wrapper eksklusif untuk Private Edition dan on-premise. Membedakan ini penting agar keputusan arsitektur tidak salah sejak perencanaan.

## Data tables for the writer

### Tiga pendekatan extensibility (ketersediaan per edisi)
| Pendekatan | Untuk siapa | Public Edition | Private Edition | On-premise |
|---|---|---|---|---|
| Key-user (in-app) | Business/power user | ✅ | ✅ | ✅ |
| Developer on-stack — ABAP Cloud | Pro developer | ✅ (hanya ABAP Cloud) | ✅ | ✅ |
| Developer on-stack — classic + Tier-2 wrapper | Pro developer | ❌ | ✅ | ✅ |
| Side-by-side (SAP BTP) | Pro developer | ✅ | ✅ | ✅ |

### ABAP klasik vs ABAP Cloud (mental model developer)
| Aspek | ABAP klasik | ABAP Cloud |
|---|---|---|
| Akses objek | Penuh, termasuk internal SAP | Hanya released API/whitelisted |
| IDE | SE80 (GUI) | ADT (Eclipse) |
| Version control | CTS/transport | abapGit / gCTS |
| Pola aplikasi | Report, module-pool, BAPI | RAP (CDS + Behavior Definition + EML) |
| Upgrade | Bisa terdampak modifikasi | Upgrade-safe by design |
| Kapan tetap relevan | Private/on-prem, wrapper artefak lama | Semua development baru (go-forward) |

### Jalur upskilling bertahap (urutan disarankan)
| Langkah | Dari | Ke | Fokus |
|---|---|---|---|
| 1 | SE80 | ADT (Eclipse) | Ganti IDE, biasakan project/transport di Eclipse |
| 2 | Procedural | OO ABAP kuat | Class, interface, unit test |
| 3 | Table access | CDS | Model data, association, annotation |
| 4 | Report output | OData/REST | Service, konsumsi Fiori |
| 5 | Module-pool | RAP (BDL/EML) | Business object, managed/unmanaged scenario |
| 6 | Transport-only | abapGit/gCTS | Version control & CI/CD |

## Edge cases & nuance

- **"Developer extensibility hanya di Private/on-prem" itu SETENGAH benar.** On-stack developer extensibility *ada* di Public Edition — tapi hanya varian ABAP Cloud. Yang eksklusif Private/on-prem adalah **classic** developer extensibility + Tier-2 wrapper. Writer harus membedakan "ABAP Cloud (ada di semua)" vs "classic (Private/on-prem)".
- **Tidak semua BAPI langsung bisa dipakai.** Banyak artefak lama belum di-release; sebagian terdaftar sebagai *nominated API* yang butuh Tier-2 wrapper. Ini titik tersandung nyata developer klasik yang mengira "tinggal panggil BAPI seperti dulu".
- **CDS = jembatan ke analitik.** CDS view yang dibangun untuk RAP juga menjadi fondasi embedded analytics/BI — sudut positif untuk menenangkan tim (skill CDS bernilai ganda).
- **A–D vs Tier 1–3.** Dua terminologi masih beredar. Tier 1/2/3 masih banyak dipakai praktisi dan dokumentasi; A–D adalah rating kepatuhan clean-core yang lebih baru. Aman: jelaskan konsepnya (bersih → berisiko), sebut kedua istilah, jangan klaim salah satu "sudah dihapus total".
- **Jangan reskill semua orang sekaligus.** Rekomendasi praktis: mulai dari 1–2 developer champion, proyek pilot RAP, baru scale — hindari membakar seluruh tim.

## Flags (open factual risk)

- ⚠️ **Model A–D vs Tier 1–3**: SAP memperkenalkan rating A–D (2025), tapi istilah "Tier 1/2/3" masih dipakai luas. → Rekomendasi: jelaskan konsep, sebut keduanya, hindari klaim absolut "Tier 1–3 sudah tidak berlaku". (Confidence medium — SAP Community blog primer, tidak bisa di-WebFetch langsung karena 403; dikonfirmasi via ringkasan search + sumber sekunder.)
- ⚠️ **Ketersediaan on-stack per edisi**: mudah salah tulis. → Rekomendasi: pakai tabel di atas; frasa aman: "ABAP Cloud tersedia di semua edisi; classic ABAP + Tier-2 wrapper hanya Private Edition/on-prem".
- ⚠️ **Durasi pelatihan**: JANGAN kutip angka pasti ("30 hari", "3 bulan"). → Rekomendasi: label sebagai estimasi/rule-of-thumb; tekankan urutan belajar, bukan durasi.
- ⚠️ **Tanggal ECC 2027/2030**: benar per pengumuman SAP 2020, tapi historis pernah bergeser. → Rekomendasi: attribute ke SAP ("menurut strategi maintenance SAP") dan sebut opsi extended support berbayar.
- ⚠️ **Nama komponen RAP**: BDL (Behavior Definition Language) sering disebut ringkas; istilah SAP resmi adalah **Behavior Definition** (objek) dengan bahasa definisi perilaku + **EML** untuk akses runtime. → Rekomendasi: pakai "Behavior Definition" dan "EML" (istilah resmi Help Portal), boleh sebut "BDL" sebagai singkatan umum.

## Definition snippet draft (48 words)

> **ABAP Cloud** adalah model pengembangan resmi SAP yang memakai subset bahasa ABAP dan hanya mengizinkan *released API* serta objek ter-whitelist, sehingga kustomisasi tidak menyentuh inti S/4HANA dan tetap upgrade-safe. Inilah cara teknis membangun ekstensi clean core, dengan RAP sebagai pola pengembangannya dan ADT (Eclipse) sebagai tooling-nya.
