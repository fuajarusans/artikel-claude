---
brief_id: "sap-clean-core-03"
researcher_run_date: "2026-08-11"
sources_cited: 8
flags: 4
---

# Research Dossier: Clean Core SAP — Beda Aturan di Public, Private, dan On-Premise

## TL;DR for the writer

- **Prinsip clean core sama di semua edisi; yang berbeda adalah tingkat PENEGAKAN.** S/4HANA Cloud Public Edition (GROW with SAP) *memaksa* clean core secara teknis — modifikasi core dan classic ABAP tidak diizinkan. Private Edition (RISE with SAP) dan on-premise hanya *menyarankan* clean core; Anda masih bisa memodifikasi core, tetapi membayarnya saat upgrade.
- **Kerangka yang wajib dipakai: model Level A–D.** Sejak 2025 SAP resmi mengganti model 3-tier (Tier 1–3) dengan model empat level A–D untuk menilai kepatuhan ekstensi. Public Edition praktis hanya bisa mencapai Level A; Private/on-premise bisa A sampai D (D sangat tidak disarankan).
- **Tiga cara meng-extend yang "bersih": key-user (in-app), developer extensibility (ABAP Cloud on-stack), dan side-by-side (SAP BTP).** Public Edition membolehkan ketiganya *hanya* lewat API yang dirilis/whitelisted. Classic ABAP hanya di Private/on-premise.
- **Portabilitas menentukan masa depan ekstensi.** Ekstensi side-by-side di SAP BTP paling portabel antar-edisi; ekstensi on-stack ABAP Cloud di Private umumnya butuh adaptasi bila pindah ke Public; classic ABAP tidak portabel.
- **Konteks urgensi: tenggat ECC.** Mainstream maintenance SAP ECC 6 (EHP 6–8) berakhir 31 Desember 2027; extended maintenance berbayar hingga 31 Desember 2030. Ini mendorong keputusan pindah edisi — momen tepat menegakkan clean core.

---

## Core facts (verified)

> **Claim**: Prinsip clean core identik di semua opsi deployment, tetapi tingkat penegakannya berbeda per edisi.
> **Number/specific**: Public Edition menegakkan clean core secara teknis ("clean core by nature… developers can't pollute the core system there"); Private Edition & on-premise memperbolehkan level ekstensi A hingga D, dengan D sangat tidak disarankan.
> **Source**: SAP News Center, "How to Extend SAP S/4HANA Cloud the Right Way | Clean Core", news.sap.com, 2025-08 (diakses 2026-08-11); Avotechs, "Clean Core A–D Extensibility Model", 2025-09.
> **Confidence**: high

> **Claim**: SAP mengganti model ekstensibilitas 3-tier (Tier 1–3) dengan model empat level A–D.
> **Number/specific**: Model A–D menilai kepatuhan ekstensi berdasarkan keamanan-upgrade dan pemakaian API resmi; peralihan ini efektif sepanjang 2025 (dikonfirmasi dalam "ABAP Extensibility Guide – Clean Core, August 2025 Update").
> **Source**: SAP Community, "ABAP Extensibility Guide – Clean Core for SAP S/4HANA Cloud – August 2025 Update", community.sap.com (id: ba-p/14175399); Avotechs 2025-09.
> **Confidence**: high

> **Claim**: Definisi Level A (paling bersih).
> **Number/specific**: Ekstensi yang hanya memakai API SAP yang dirilis publik dan stabil (dengan kontrak stabilitas formal); dibangun on-stack via ABAP Cloud ATAU side-by-side di SAP BTP. Sepenuhnya upgrade-safe dan direkomendasikan.
> **Source**: SAP News Center 2025-08 (kutipan definisi level); Avotechs 2025-09.
> **Confidence**: high

> **Claim**: Definisi Level B.
> **Number/specific**: Ekstensi patuh yang juga memakai "classic APIs and technologies" (mis. BAPI, IDoc, RFC, batch job SM37, validation/substitution GGB0/GGB1) — antarmuka terdokumentasi dan umumnya upgrade-stable, tetapi belum sepenuhnya cloud-ready.
> **Source**: SAP News Center 2025-08; Avotechs 2025-09.
> **Confidence**: high

> **Claim**: Definisi Level C.
> **Number/specific**: Ekstensi "partially compliant" yang mengakses objek internal SAP yang tidak dirilis/tidak dijamin stabil; fleksibel untuk skenario legacy tetapi perlu dipantau (mis. via Simplification Database).
> **Source**: SAP News Center 2025-08; Avotechs 2025-09.
> **Confidence**: high

> **Claim**: Definisi Level D (tidak direkomendasikan).
> **Number/specific**: Modifikasi objek standar SAP, tulis langsung ke tabel SAP, implicit enhancements, atau pemakaian objek "noAPI". Secara eksplisit tidak direkomendasikan.
> **Source**: SAP News Center 2025-08; Avotechs 2025-09.
> **Confidence**: high

> **Claim**: Classic ABAP tidak dapat dipakai di S/4HANA Cloud Public Edition.
> **Number/specific**: "Classic extensibility, based on classical custom ABAP code, can no longer be used in SAP S/4HANA Cloud Public Edition." Diganti model ekstensibilitas cloud yang memisahkan kode SAP dan ekstensi lewat API yang dirilis publik + extension point resmi.
> **Source**: SAP Community, "Extensibility Approaches in SAP S/4HANA Cloud Public Edition" (ba-p/13793885); learning.sap.com kursus Public Edition Developer Extensibility.
> **Confidence**: high

> **Claim**: Tiga model ekstensibilitas yang tersedia di Public Edition.
> **Number/specific**: (1) key-user (in-app) extensibility; (2) developer extensibility via ABAP Cloud (SAP S/4HANA Cloud ABAP Environment); (3) side-by-side extensibility via SAP BTP dengan whitelisted/released APIs. Ketiganya, tidak ada modifikasi core.
> **Source**: SAP Community "Extensibility Approaches in SAP S/4HANA Cloud Public Edition"; learning.sap.com.
> **Confidence**: high

> **Claim**: Public Edition di-upgrade otomatis oleh SAP dengan kadens tetap.
> **Number/specific**: Dua major release per tahun (upgrade wajib, dikelola SAP), plus Continuous Feature Delivery (CFD) bulanan; ABAP Cloud mengikuti siklus rilis setengah-tahunan. Pelanggan selalu di release terbaru yang didukung.
> **Source**: SAP Community/learning.sap.com (Public Edition release cycle).
> **Confidence**: high

> **Claim**: Private Edition & on-premise masih mengizinkan classic ABAP dan modifikasi, tetapi menyarankan ABAP Cloud.
> **Number/specific**: ABAP Cloud adalah model pengembangan yang direkomendasikan untuk semua ekstensi baru di S/4HANA private cloud dan on-premise; classic ABAP tetap boleh (Level B–D), namun D tidak disarankan. Kendali upgrade ada di pelanggan.
> **Source**: SAP Community "ABAP Extensibility Guide – Clean Core, August 2025 Update"; SAP Community "ABAP Platform in SAP S/4HANA Cloud Private Edition and SAP S/4HANA 2025".
> **Confidence**: high

> **Claim**: Ada dua jenis lokasi ekstensi: on-stack dan side-by-side.
> **Number/specific**: On-stack = ekstensi terintegrasi ketat di dalam sistem ERP via ABAP Cloud; side-by-side = aplikasi ter-decouple yang berjalan independen dari core di SAP BTP.
> **Source**: SAP News Center 2025-08; SAP Community "On-stack Clean Core Extensibility".
> **Confidence**: high

> **Claim**: Portabilitas — side-by-side (BTP) paling portabel; on-stack Private butuh adaptasi ke Public.
> **Number/specific**: On-stack extensions yang dibuat untuk S/4HANA private edition umumnya perlu adaptasi agar portabel ke public cloud; side-by-side di SAP BTP lebih mungkin kompatibel karena logika bisnis ter-decouple dari core.
> **Source**: SAP Community "SAP S/4HANA Extensibility Options for Clean Core Journey" (ba-p/13568992); SAP News Center 2025-08.
> **Confidence**: high

> **Claim**: RISE with SAP menargetkan pelanggan SAP eksisting menuju Private Cloud (S/4HANA Cloud Private Edition).
> **Number/specific**: RISE = paket menyeluruh (solusi + layanan + infrastruktur cloud) untuk transformasi; migrasi bisa ke Private (dan secara program dapat mencakup Public). Private Edition = instance/tenant terdedikasi, memberi fleksibilitas mirip on-premise di atas cloud.
> **Source**: Kellton, "RISE with SAP S/4HANA Cloud Editions: Private vs Public"; free-com.eu glossary; erpsoftwareblog 2025-03.
> **Confidence**: medium (definisi program SAP; sebaiknya konfirmasi framing "RISE = private-led" via rise.sap.com bila writer ingin klaim kuat)

> **Claim**: GROW with SAP menargetkan pelanggan baru/SME menuju Public Cloud (S/4HANA Cloud Public Edition) dengan pendekatan greenfield standar.
> **Number/specific**: GROW = paket adopsi cepat Public Edition, multi-tenant, best practice bawaan, greenfield; comparable dengan SaaS (analogi Microsoft 365).
> **Source**: erpsoftwareblog 2025-03; free-com.eu glossary; asardigital.com.
> **Confidence**: medium (definisi program; konfirmasi via grow.sap.com bila perlu klaim kuat)

> **Claim**: Mainstream maintenance SAP ECC 6 (EHP 6–8) berakhir 31 Desember 2027.
> **Number/specific**: EHP 6–8: mainstream berakhir 31-12-2027; extended maintenance berbayar (~+2 poin persentase di atas basis maintenance) hingga 31-12-2030. EHP 0–5 berakhir 31-12-2025 tanpa extended. SAP (Q1 2025) menegaskan tidak ada perpanjangan tenggat.
> **Source**: The Register, 2025-01-28; Rimini Street "No Extension to ECC 2027 deadline"; SEIDOR/ERP Research blogs (mengutip SAP maintenance strategy).
> **Confidence**: high (untuk 2027/2030; angka premium ~2% high, tetapi selalu bingkai sebagai "sekitar" dan atribusikan)

> **Claim**: SAP menyediakan daftar "classic APIs" yang direkomendasikan untuk pengembangan classic ABAP menuju clean core.
> **Number/specific**: Untuk sistem Private/on-premise, SAP memberi panduan API klasik yang stabil/terdokumentasi agar pengembangan classic ABAP tetap upgrade-stable (masuk kategori Level B).
> **Source**: SAP Community "ABAP Extensibility Guide – Clean Core, August 2025 Update".
> **Confidence**: high

---

## Solution focus + Soltius anchor (from product_matrix.md)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| Tiga opsi deployment: Public Edition (GROW), Private Edition (RISE), on-premise | Prinsip clean core sama; penegakan: enforced (public) vs recommended (private/on-prem) | H2 #1 (definisi) + H2 #3 (tabel) | — |
| Model ekstensibilitas: key-user / developer (ABAP Cloud) / side-by-side (BTP); classic ABAP hanya private/on-prem | Public: hanya API released/whitelisted, tanpa classic ABAP & modifikasi | H2 #2, #3 | — |
| Model Level A–D | Public praktis hanya Level A; Private/on-prem A–D, D tidak disarankan | H2 #3 (tabel) | — |
| Portabilitas ekstensi | Side-by-side (BTP) portabel; on-stack Private butuh adaptasi ke Public | H2 #4 | — |
| Pemilihan edisi S/4HANA sesuai kebutuhan kustomisasi & kepatuhan | RISE = private-led; GROW = public/greenfield; kendali upgrade berbeda | H2 #5 + closing | **Best RISE & Best Cloud Partner + ERP Strategy/Migration** — "Diakui sebagai Best RISE dan Best Cloud Partner, Soltius membantu memilih edisi S/4HANA yang paling sesuai dengan kebutuhan kustomisasi dan kepatuhan Anda." |

**Reminder**: Soltius **mengimplementasikan/memigrasi/mendukung** teknologi ini — bukan membangunnya. Maksimal 2–3 self-mention (idealnya: satu aside mid-article + satu closing CTA). Best RISE/Best Cloud Partner adalah award SEA yang terverifikasi di `company_profile.md`.

---

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **SAP News Center — "How to Extend SAP S/4HANA Cloud the Right Way | Clean Core" (Agustus 2025)** — https://news.sap.com/2025/08/extend-sap-s4hana-cloud-right-way-clean-clear/ — *what it backs*: definisi Level A–D, on-stack vs side-by-side, prinsip clean core. **Sumber SAP-official paling otoritatif untuk artikel ini.**
2. **SAP Community — "ABAP Extensibility Guide – Clean Core for SAP S/4HANA Cloud, August 2025 Update"** — https://community.sap.com/t5/technology-blog-posts-by-sap/abap-extensibility-guide-clean-core-for-sap-s-4hana-cloud-august-2025/ba-p/14175399 — *what it backs*: peralihan 3-tier → A–D, panduan classic API, ABAP Cloud sebagai default. (Catatan: WebFetch 403 saat diakses; isi diverifikasi silang via snippet pencarian + news.sap.com. Writer boleh menautkannya sebagai referensi resmi.)
3. **SAP asset PDF — "Clean core extensibility in SAP S/4HANA Cloud Private Edition" (2024)** — https://www.sap.com/assetdetail/2024/10/be407a0d-dc7e-0010-bca6-c68f7e60039b.html — *what it backs*: opsi ekstensibilitas khusus Private Edition.
4. **learning.sap.com — "SAP S/4HANA Cloud Public Edition Developer Extensibility"** — https://learning.sap.com/courses/implementing-sap-s-4hana-cloud-public-edition/ — *what it backs*: model developer/in-app extensibility di Public Edition.

Prioritas tautan keluar untuk writer: pakai **#1 (news.sap.com)** dan **#2 (SAP Community Aug 2025)** sebagai dua sumber otoritatif utama.

---

## FAQ Q&As (7 drafted, Bahasa Indonesia)

### Apa beda clean core di Public Edition dan Private Edition?
Perbedaannya pada penegakan. S/4HANA Cloud Public Edition (GROW with SAP) memaksa clean core secara teknis: modifikasi core dan classic ABAP tidak diizinkan, hanya ekstensi via API resmi. Private Edition (RISE with SAP) menyarankan clean core tetapi tetap mengizinkan classic ABAP hingga modifikasi—Anda bebas, namun risiko dan biaya upgrade meningkat. Public praktis hanya bisa Level A; Private bisa Level A sampai D.

### Apakah clean core wajib untuk SAP on-premise?
Tidak wajib secara teknis. Pada S/4HANA on-premise Anda masih dapat memodifikasi core dan memakai classic ABAP (Level A–D), sama seperti Private Edition. Namun SAP tetap merekomendasikan clean core dan menjadikan ABAP Cloud sebagai model pengembangan default untuk semua ekstensi baru. Alasannya praktis: makin bersih core, makin murah dan cepat setiap upgrade—termasuk bila nanti pindah ke cloud.

### Apa itu RISE with SAP dan GROW with SAP?
Keduanya paket adopsi S/4HANA Cloud. RISE with SAP ditujukan bagi pelanggan SAP eksisting menuju S/4HANA Cloud Private Edition—instance terdedikasi yang fleksibel mirip on-premise di atas cloud. GROW with SAP ditujukan bagi perusahaan baru atau SME menuju S/4HANA Cloud Public Edition—multi-tenant, best practice bawaan, pendekatan greenfield standar. Perbedaan editi ini menentukan seberapa ketat clean core ditegakkan.

### Ekstensibilitas apa saja yang tersedia di S/4HANA Cloud Public Edition?
Tersedia tiga model: key-user (in-app) extensibility untuk penyesuaian tanpa kode; developer extensibility via ABAP Cloud di SAP S/4HANA Cloud ABAP Environment; dan side-by-side extensibility di SAP BTP. Semuanya hanya boleh memakai API yang dirilis/whitelisted—classic ABAP dan modifikasi core tidak tersedia. Sistem di-upgrade otomatis dua kali setahun oleh SAP, sehingga ekstensi harus upgrade-safe sejak awal.

### Bisakah ekstensi Private Edition dipindahkan ke Public Cloud?
Bergantung jenisnya. Ekstensi side-by-side di SAP BTP paling portabel karena ter-decouple dari core sehingga umumnya kompatibel lintas edisi. Ekstensi on-stack ABAP Cloud yang dibuat di Private Edition biasanya perlu adaptasi agar berjalan di Public Cloud. Sedangkan classic ABAP dan modifikasi core tidak portabel ke Public sama sekali. Karena itu, memilih pendekatan side-by-side sejak awal menjaga fleksibilitas masa depan.

### Apakah Public Edition lebih murah karena "dipaksa" bersih?
Tidak selalu, dan bukan itu inti pertimbangannya. Public Edition menekan biaya jangka panjang karena upgrade otomatis dan bebas technical debt dari modifikasi core. Namun bila proses bisnis Anda sangat unik dan sulit menyesuaikan best practice standar, Private Edition atau on-premise bisa lebih hemat total karena menghindari re-engineering proses besar-besaran. Bandingkan TCO menyeluruh, bukan sekadar biaya lisensi.

### Edisi mana yang cocok untuk perusahaan dengan proses sangat unik?
Umumnya Private Edition (RISE with SAP) atau on-premise. Keduanya memberi kendali kustomisasi lebih tinggi—termasuk classic ABAP bila benar-benar diperlukan—serta kendali atas jadwal upgrade dan kebutuhan regulasi/data residency tertentu. Public Edition menuntut adopsi proses standar. Rekomendasi: pilih Private/on-premise bila keunikan proses adalah keunggulan bersaing, dan terapkan clean core (ABAP Cloud) agar tetap upgrade-safe.

---

## Data tables for the writer

### Perbandingan clean core lintas edisi (draft utama — H2 #3)

| Dimensi | Public Edition (GROW with SAP) | Private Edition (RISE with SAP) | On-Premise |
|---|---|---|---|
| Penegakan clean core | Enforced (dipaksa sistem) | Recommended (disarankan) | Recommended (disarankan) |
| Modifikasi core diizinkan? | Tidak | Ya (tidak disarankan) | Ya (tidak disarankan) |
| Classic ABAP | Tidak tersedia | Tersedia | Tersedia |
| Key-user (in-app) extensibility | Ya | Ya | Ya |
| Developer extensibility (ABAP Cloud) | Ya (hanya released API) | Ya (direkomendasikan) | Ya (direkomendasikan) |
| Side-by-side (SAP BTP) | Ya | Ya | Ya |
| Level A–D yang mungkin | Praktis hanya A | A–D (D sangat tidak disarankan) | A–D (D sangat tidak disarankan) |
| Kendali jadwal upgrade | SAP (otomatis, 2×/tahun) | Pelanggan | Pelanggan |
| Portabilitas ekstensi | (basis paling bersih) | side-by-side portabel; on-stack butuh adaptasi | side-by-side portabel; on-stack butuh adaptasi |

### Model Level A–D (draft pendukung — H2 #3 atau #1)

| Level | Deskripsi singkat | Contoh teknologi | Upgrade-safe? |
|---|---|---|---|
| A | Hanya API SAP resmi & stabil (kontrak stabilitas) | ABAP Cloud on-stack; SAP BTP side-by-side | Ya (direkomendasikan) |
| B | Patuh, memakai classic API terdokumentasi | BAPI, IDoc, RFC, SM37, GGB0/GGB1 | Umumnya, belum full cloud-ready |
| C | Akses objek internal SAP yang tidak dirilis | Objek non-released; pantau via Simplification DB | Berisiko |
| D | Modifikasi & teknik tidak direkomendasikan | Modifikasi objek standar, tulis langsung ke tabel, implicit enhancement, "noAPI" | Tidak |

---

## Edge cases & nuance

- **"Enforced vs recommended" adalah framing pemasaran-teknis, bukan pasal hukum.** Di Public Edition, penegakan bersifat *teknis*—platform benar-benar tidak mengekspos jalur modifikasi core. Di Private/on-premise, "recommended" berarti SAP tidak menghalangi Anda, tetapi konsekuensi (biaya upgrade, technical debt) yang menegakkan disiplin.
- **RISE bisa juga mencakup Public secara program, tetapi asosiasi kuatnya adalah Private.** Hindari menyamakan mutlak "RISE = Private". Framing paling aman: RISE umumnya jalur menuju Private Edition; GROW jalur menuju Public Edition. (Lihat Flags.)
- **Level A bisa dicapai lewat dua lokasi** (on-stack ABAP Cloud ATAU side-by-side BTP). "Level A" bukan sinonim "harus BTP". Ini sering disalahpahami.
- **Private Edition tetap bisa "sangat bersih".** Memilih Private tidak berarti kotor—perusahaan bisa menerapkan ABAP Cloud dan mencapai mayoritas Level A. Bedanya: di Private itu pilihan disiplin; di Public itu batasan sistem.
- **Public Edition menuntut kesiapan proses, bukan sekadar kesiapan teknis.** Halangan terbesar adopsi Public bukan ekstensibilitas melainkan kemauan mengadopsi best practice standar SAP menggantikan proses kustom.
- **Tenggat ECC 2027/2030 adalah pendorong keputusan, bukan topik utama.** Sebut sebagai konteks urgensi memilih edisi—jangan jadikan fokus (sudah dibahas di cluster ERP-migration).

---

## Flags (open factual risk)

- ⚠️ **Definisi "RISE = Private, GROW = Public"**: benar sebagai penyederhanaan, tetapi RISE secara program dapat mencakup deployment Public juga. → **Rekomendasi**: frasa "RISE umumnya menuju Private Edition; GROW menuju Public Edition" dan hindari kata "selalu/hanya". Bila writer ingin klaim kuat, tautkan rise.sap.com / grow.sap.com.
- ⚠️ **Angka premium extended maintenance ECC (~2 poin persentase / ~9% kenaikan)**: konsisten di beberapa sumber sekunder (Rimini Street, ERP Research), tetapi bukan halaman SAP-official yang saya fetch langsung. → **Rekomendasi**: sebut "sekitar 2% di atas basis maintenance" dan atribusikan, atau cukup sebut tenggat 2027/2030 tanpa angka premium bila ingin aman. Tenggat 2027/2030 sendiri: confidence high.
- ⚠️ **Tanggal pasti peralihan model 3-tier → A–D**: diketahui terjadi sepanjang 2025 (dikonfirmasi "August 2025 Update"), tetapi SAP tidak mempublikasi satu "tanggal ganti" tunggal. → **Rekomendasi**: tulis "diperbarui pada 2025 (pembaruan Agustus 2025)" tanpa tanggal presisi.
- ⚠️ **Sumber utama SAP Community (ba-p/14175399) mengembalikan HTTP 403 saat WebFetch**: isinya diverifikasi silang lewat snippet pencarian SAP + news.sap.com, jadi klaim tetap kuat. → **Rekomendasi**: writer boleh menautkannya sebagai referensi SAP-official; jika ingin sumber yang pasti bisa dibuka, utamakan news.sap.com (#1) sebagai tautan keluar.

---

## Definition snippet draft (54 words)

> **Clean core SAP** adalah prinsip menjaga inti sistem S/4HANA tetap standar dan aman-upgrade dengan memindahkan kustomisasi ke ekstensi resmi. Aturannya sama di setiap deployment, tetapi penegakannya berbeda: S/4HANA Cloud Public Edition memaksanya secara teknis (tanpa modifikasi core), sedangkan Private Edition dan on-premise hanya menyarankannya—Anda masih bisa memodifikasi core, tetapi membayarnya saat upgrade.
