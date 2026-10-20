---
brief_id: "sap-clean-core-05"
researcher_run_date: "2026-07-07"
sources_cited: 8
flags: 4
---

# Research Dossier: SAP Clean Core — Menjaga Ekstensi Tetap Upgrade-Safe dari Waktu ke Waktu

## TL;DR for the writer

- **Angle inti**: clean core bukan status permanen sekali jadi, melainkan kondisi yang harus *dijaga sepanjang siklus rilis*. Ekstensi bisa "membusuk" karena (a) API yang dipakai di-*deprecate*, (b) drift antar-level A–D, dan (c) SAP kini merilis lebih sering. Ini yang membedakan brief ini dari artikel penempatan (-04) dan penilaian kematangan (-03).
- **Fakta jangkar terverifikasi (SAP resmi)**: Level A = ekstensi yang hanya memakai *released API* dengan **formal stability contract** (paling upgrade-safe). Level C = mengakses **objek internal SAP** (risiko upgrade nyata) — dan **SAP berencana menyediakan *changelog* untuk objek SAP** agar perubahan terdeteksi dini. Sumber: SAP News, 12 Agustus 2025.
- **Kadens rilis terverifikasi**: mulai **SAP S/4HANA 2023**, produk pindah ke **siklus rilis dua-tahunan** dan **7 tahun mainstream maintenance** per rilis (naik dari 5 tahun). *Feature pack* direncanakan tiap **6 bulan** dalam dua tahun pertama. Untuk **S/4HANA Cloud Public Edition**: dua rilis besar per tahun (**Februari & Agustus**) plus **Continuous Feature Delivery** di antaranya. Sumber: SAP News 2022/09 + SAP Community.
- **Alat menjaga upgrade-safe (terverifikasi)**: **ABAP Test Cockpit (ATC)** menyediakan check variant **`ABAP_CLEAN_CORE_DEVELOPMENT`** (tersedia di ATC SAP BTP ABAP environment & S/4HANA 2025 FPS01 private cloud/on-premise); **SAP Business Accelerator Hub** adalah katalog *released API* resmi. Objek *deprecated* diperlakukan sebagai Level B (prioritas remediasi).
- **Soltius anchor**: Application Management Services (AMS) + Enhancement sebagai SAP Platinum Partner via United VARs — closing. Framing: Soltius menjaga ekstensi klien tetap kompatibel tiap siklus rilis; **tidak** "membuat" software SAP. Maks 2–3 self-mention.

## Core facts (verified)

> **Claim**: Model clean core membagi ekstensi menjadi empat level (A, B, C, D) berdasarkan kepatuhan dan keamanan upgrade.
> **Number/specific**: Level A = fully compliant (released API + stability contract); Level B = classic APIs (BAPI/RFC, upgrade-stable tapi tanpa stability contract formal); Level C = mengakses objek internal SAP (partially compliant, risiko moderat); Level D = objek/teknik non-recommended (risiko tertinggi, technical debt signifikan).
> **Source**: SAP News, "How to Extend SAP S/4HANA Cloud the Right Way," news.sap.com/2025/08/extend-sap-s4hana-cloud-right-way-clean-clear/ (tanggal artikel 12 Agustus 2025; diakses 2026-07-07)
> **Confidence**: high

> **Claim**: Level A adalah level paling upgrade-safe karena hanya memakai released API yang didukung "formal stability contract".
> **Number/specific**: SAP menyebut Level A sebagai "fully compliant extensions using only publicly released and stable SAP interfaces," "backed by formal stability contracts."
> **Source**: SAP News, 12 Agustus 2025, URL di atas (diakses 2026-07-07)
> **Confidence**: high

> **Claim**: Released API adalah API yang secara resmi dipublikasikan SAP dengan stability contract — kontrak *teknis* (bukan legal) yang menjamin API tetap stabil ke depan.
> **Number/specific**: "A Released API is one that SAP has formally published with a stability contract"; kontrak ini bersifat teknis, memastikan API tidak berubah tak-kompatibel antar-rilis.
> **Source**: SAP Learning / SAP Community "Exploring Released APIs" + "Clean Core maturity and the new Extensibility Levels" (community.sap.com, 2025; diakses 2026-07-07)
> **Confidence**: high

> **Claim**: Untuk objek internal (Level C), SAP berencana menyediakan changelog agar perubahan terdeteksi dini dan upgrade bisa direncanakan proaktif.
> **Number/specific**: SAP: untuk Level C, "SAP plans to provide a changelog for SAP objects to help identify changes early and plan upgrades proactively."
> **Source**: SAP News, 12 Agustus 2025, URL di atas (diakses 2026-07-07)
> **Confidence**: high (perhatikan kata "plans to" — ini rencana, bukan fitur GA; lihat Flags)

> **Claim**: Level B memakai classic API (mis. BAPI, RFC-enabled function module) yang upgrade-stable tapi tidak membawa stability contract formal.
> **Number/specific**: Level B = "SAP's classic APIs and technologies" dengan "well-defined, documented, and generally upgrade-stable interfaces"; classic API dinominasikan pakar produk SAP sebelum proses release formal ada.
> **Source**: SAP News, 12 Agustus 2025 + SAP Community "Business Excellence with SAP's New Clean Core Extensibility Levels" (diakses 2026-07-07)
> **Confidence**: high

> **Claim**: Level D mencakup modifikasi, write-access ke tabel SAP, dan implicit enhancement — direkomendasikan untuk dihilangkan.
> **Number/specific**: Level D = "explicitly non-recommended objects, modifications, write access to SAP tables, or implicit enhancements"; "highest risk and create significant technical debt."
> **Source**: SAP News, 12 Agustus 2025, URL di atas (diakses 2026-07-07)
> **Confidence**: high

> **Claim**: Mulai SAP S/4HANA 2023, produk pindah ke siklus rilis dua-tahunan.
> **Number/specific**: "The product will move to a two-year release cycle starting with SAP S/4HANA 2023." Rilis 2023 tersedia Oktober 2023.
> **Source**: SAP News, "New SAP S/4HANA Release and Maintenance Strategy," news.sap.com/2022/09/new-sap-s4hana-release-maintenance-strategy/ (15 September 2022; diakses 2026-07-07)
> **Confidence**: high

> **Claim**: Sejak rilis 2023, setiap rilis S/4HANA memperoleh 7 tahun mainstream maintenance (naik dari 5 tahun).
> **Number/specific**: "Beginning with SAP S/4HANA 2023, each release will stay in mainstream maintenance for seven years."
> **Source**: SAP News, 15 September 2022, URL di atas (diakses 2026-07-07)
> **Confidence**: high

> **Claim**: Feature pack yang mudah diadopsi direncanakan tiap enam bulan pada dua tahun pertama tiap rilis.
> **Number/specific**: "Easy-to-adopt feature packs are currently planned to be delivered every six months in the first two years."
> **Source**: SAP News, 15 September 2022, URL di atas (diakses 2026-07-07)
> **Confidence**: high (perhatikan "currently planned" — wording rencana)

> **Claim**: SAP S/4HANA Cloud Public Edition memakai jadwal rilis besar dua kali setahun, di bulan Februari (02) dan Agustus (08).
> **Number/specific**: Rilis besar tiap Februari dan Agustus; di antaranya ada Continuous Feature Delivery (fitur non-disruptif yang bisa diadopsi lebih awal, atau aktif otomatis saat rilis besar berikutnya).
> **Source**: SAP Community "Release and Update Cycle of S/4HANA Cloud" + "Continuous Delivery for SAP S/4HANA Cloud Public Edition" (pages.community.sap.com/topics/s4hana-cloud/continuous-delivery; diakses 2026-07-07)
> **Confidence**: high (public edition; jangan campur dengan private edition — lihat Flags)

> **Claim**: ABAP Test Cockpit (ATC) menyediakan check variant khusus clean core bernama `ABAP_CLEAN_CORE_DEVELOPMENT`.
> **Number/specific**: Variant `ABAP_CLEAN_CORE_DEVELOPMENT` tersedia via remote ATC di SAP BTP ABAP environment, atau ATC di sistem private cloud/on-premise ≥ SAP S/4HANA 2025 FPS01. Isinya = check `ABAP_CLOUD_DEVELOPMENT_DEFAULT` plus 4 clean-core check (a.l. Allowed Enhancement Technologies check, Usage of APIs check).
> **Source**: SAP Community "ABAP Test Cockpit (ATC) recommendations for governance of clean core ABAP development" (community.sap.com, ba-p/14186130; diakses 2026-07-07)
> **Confidence**: high (nama variant & scope; catat versi FPS)

> **Claim**: Objek deprecated dalam custom code diperlakukan sebagai clean core Level B dan ditandai untuk remediasi oleh ATC; developer diarahkan mencari successor API.
> **Number/specific**: Kode yang memakai objek Deprecated diperlakukan sebagai Level B dan di-flag Priority 3 di ATC; developer diminta mengidentifikasi successor API di Cloudification Repository atau SAP Business Accelerator Hub, lalu merencanakan migrasi.
> **Source**: SAP Community, ba-p/14186130 (diakses 2026-07-07)
> **Confidence**: high

> **Claim**: SAP Business Accelerator Hub adalah katalog resmi released API (dan objek terkait) untuk pengembangan clean core.
> **Number/specific**: Business Accelerator Hub menampilkan remote API, event, CDS view, RAP BO interface, dan BAdI; ABAP Development Tools for Eclipse juga punya "released objects view" yang menunjukkan objek yang dirilis untuk ABAP Cloud.
> **Source**: SAP Community/Learning "Exploring Released APIs" + ba-p/14186130 (diakses 2026-07-07)
> **Confidence**: high

> **Claim**: Ekstensi upgrade-safe dibangun dengan ABAP Cloud (on-stack) atau side-by-side di SAP BTP; keduanya masuk kategori Level A bila memakai released API.
> **Number/specific**: Level A = side-by-side (SAP BTP pro-code/low-code, mis. SAP Build) atau on-stack (ABAP Cloud dengan public API).
> **Source**: SAP News, 12 Agustus 2025, URL di atas (diakses 2026-07-07)
> **Confidence**: high

> **Claim**: (Konteks migrasi) SAP ECC / Business Suite 7 (termasuk SAP ERP 6.0) berakhir mainstream maintenance akhir 2027, dengan extended maintenance opsional 2028–2030.
> **Number/specific**: Mainstream maintenance s.d. 31 Desember 2027; extended maintenance tiga tahun (2028–2030); setelahnya customer-specific maintenance. (Konteks pendukung, bukan fokus artikel.)
> **Source**: SAP Support, "Maintenance 2040 / S/4HANA & Business Suite 7" (support.sap.com/.../s4hana-business-suite7.html; diakses 2026-07-07)
> **Confidence**: high

## Solution focus + Soltius anchor (from product_matrix.md)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| Clean Core Extensibility Levels A–D dikaitkan risiko upgrade | Level A = released API + stability contract (upgrade-safe); C = objek internal (SAP rencanakan changelog); D = non-recommended | H2 #1, #3 (tabel A–D) | — (edukasi vendor-neutral) |
| Released API vs objek internal; deprecation | Released API punya stability contract; deprecated → treated Level B, cari successor via Business Accelerator Hub/Cloudification Repository | H2 #3, #4 | — |
| Siklus rilis S/4HANA (dua-tahunan; 7 th mainstream sejak 2023; FPS 6 bulan; public Feb/Agu + CFD) | Verifikasi wording; bedakan private vs public edition | H2 #2 | — |
| ABAP Test Cockpit (ATC) `ABAP_CLEAN_CORE_DEVELOPMENT` + Business Accelerator Hub | Variant di S/4HANA 2025 FPS01 & BTP; uji regresi terjadwal | H2 #4 (praktik) | AMS aside opsional (1 kalimat) |
| ABAP Cloud & SAP BTP sebagai fondasi ekstensi Level A | On-stack (ABAP Cloud) / side-by-side (BTP) | H2 #1, #3 | — |
| **Soltius: AMS + Enhancement** | SAP Platinum Partner via United VARs; menjaga kompatibilitas ekstensi tiap siklus rilis; implements/supports, bukan builds | **Closing CTA** | **Application Management Services (AMS) + Enhancement** |

Reminder: Soltius **implements/enhances/supports** ekstensi ini — **tidak membangun** software SAP. Maks 2–3 Soltius self-mention (idealnya: 1 aside mid-artikel di H2 #4 + 1 closing). Anchor closing: "Sebagai SAP Platinum Partner melalui United VARs, Soltius menjaga ekstensi tetap kompatibel tiap siklus rilis melalui Application Management Services (AMS)."

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **SAP News — "How to Extend SAP S/4HANA Cloud the Right Way" (12 Agustus 2025)** — https://news.sap.com/2025/08/extend-sap-s4hana-cloud-right-way-clean-clear/ — *what it backs*: definisi Level A–D, released API + stability contract, dan rencana changelog untuk objek Level C. **Sumber utama & paling otoritatif untuk artikel ini.**
2. **SAP News — "New SAP S/4HANA Release and Maintenance Strategy" (15 September 2022)** — https://news.sap.com/2022/09/new-sap-s4hana-release-maintenance-strategy/ — *what it backs*: siklus rilis dua-tahunan sejak S/4HANA 2023, 7 tahun mainstream maintenance, feature pack tiap 6 bulan.
3. **SAP Community — "ABAP Test Cockpit (ATC) recommendations for governance of clean core ABAP development"** — https://community.sap.com/t5/technology-blog-posts-by-sap/abap-test-cockpit-atc-recommendations-for-governance-of-clean-core-abap/ba-p/14186130 — *what it backs*: check variant `ABAP_CLEAN_CORE_DEVELOPMENT`, penanganan objek deprecated, Business Accelerator Hub sebagai sumber successor API. (Blog resmi by SAP — labeli sebagai panduan teknis SAP.)

Priority: SAP official (news.sap.com) sudah #1–2. Untuk tautan keluar artikel, gunakan minimal #1 dan #2 (news.sap.com). #3 sebagai pendukung teknis.

## FAQ Q&As (6 drafted, Bahasa Indonesia)

### Apa itu ekstensi upgrade-safe?
Ekstensi upgrade-safe adalah ekstensi SAP yang tetap berfungsi tanpa perbaikan saat sistem di-upgrade. Kuncinya: ekstensi hanya memakai *released API* yang stabil (Level A) dan terpisah dari inti S/4HANA, bukan objek internal. Karena SAP menjamin released API lewat *stability contract*, ekstensi seperti ini tidak retak ketika SAP merilis versi baru — berbeda dari kustomisasi yang menyentuh objek tak-resmi.

### Apa perbedaan level A, B, C, dan D?
Model clean core SAP membagi ekstensi jadi empat level menurut keamanan upgrade. Level A memakai released API dengan stability contract (paling aman). Level B memakai classic API seperti BAPI/RFC — masih upgrade-stable tapi tanpa kontrak formal. Level C mengakses objek internal SAP (berisiko saat upgrade). Level D memakai objek/teknik non-recommended dan modifikasi — risiko tertinggi, sebaiknya dihilangkan. (Sumber: SAP News, 12 Agustus 2025.)

### Apa itu deprecation released API?
Deprecation adalah penandaan sebuah API atau objek SAP sebagai "usang" — masih bisa dipakai untuk sementara, tetapi akan dihapus atau tak lagi direkomendasikan di rilis mendatang. Jika ekstensi Anda memakai objek deprecated, ATC memperlakukannya sebagai Level B dan menandainya untuk remediasi. Langkah tepatnya: cari *successor API* di SAP Business Accelerator Hub atau Cloudification Repository, lalu jadwalkan migrasi sebelum objek benar-benar dihapus.

### Seberapa sering SAP S/4HANA Cloud upgrade?
Tergantung edisi. Public Edition menerima dua rilis besar per tahun (Februari dan Agustus) plus pembaruan Continuous Feature Delivery di antaranya. Untuk rilis on-premise/private, sejak SAP S/4HANA 2023 SAP memakai siklus dua-tahunan dengan *feature pack* tiap enam bulan pada dua tahun pertama, dan tiap rilis memperoleh tujuh tahun mainstream maintenance. Makin sering pembaruan, makin penting ekstensi tetap upgrade-safe.

### Apa itu stability contract?
Stability contract adalah kontrak *teknis* (bukan legal) yang menyertai setiap *released API* SAP. Isinya: SAP menjamin API tersebut tidak berubah secara tak-kompatibel antar-rilis, sehingga ekstensi yang memakainya tetap berfungsi setelah upgrade. Inilah yang membuat ekstensi Level A "upgrade-safe". Objek internal SAP (Level C) tidak punya jaminan ini, sehingga bisa berubah kapan saja tanpa pemberitahuan kompatibilitas.

### Bagaimana menguji ekstensi sebelum upgrade?
Gunakan ABAP Test Cockpit (ATC) dengan check variant clean core `ABAP_CLEAN_CORE_DEVELOPMENT` untuk memeriksa apakah ekstensi hanya memakai teknologi enhancement yang diizinkan dan released API. Variant ini tersedia di ATC SAP BTP ABAP environment serta di S/4HANA 2025 FPS01 private cloud/on-premise. Selain itu, pantau changelog dan daftar deprecation SAP, lalu jalankan uji regresi terjadwal di sistem non-produksi sebelum upgrade produksi.

## Data tables for the writer (Level A–D vs risiko upgrade)

### Clean Core Extensibility Levels dikaitkan risiko upgrade
| Level | Apa yang dipakai | Stability contract? | Risiko saat upgrade | Tindakan yang disarankan |
|---|---|---|---|---|
| **A** | Released API (ABAP Cloud on-stack atau side-by-side di SAP BTP) | Ya (formal) | Terendah — upgrade-safe | Target ideal; pertahankan |
| **B** | Classic API (BAPI, RFC-enabled function module) | Tidak formal, tapi umumnya upgrade-stable | Rendah–moderat | Sah bila Level A belum tersedia; kelola dengan governance |
| **C** | Objek internal SAP (tidak dirilis untuk pelanggan) | Tidak | Nyata — objek bisa berubah tanpa jaminan | Masuk roadmap remediasi; pantau changelog (rencana SAP) |
| **D** | Objek/teknik non-recommended, modifikasi, write ke tabel SAP, implicit enhancement | Tidak | Tertinggi — technical debt | Hilangkan/ganti |

*(Sumber level & definisi: SAP News, 12 Agustus 2025.)*

### Kadens rilis S/4HANA (ringkas)
| Aspek | S/4HANA Cloud Public Edition | S/4HANA (private edition / on-premise) |
|---|---|---|
| Rilis besar | 2×/tahun (Feb & Agu) | Siklus dua-tahunan (sejak rilis 2023) |
| Update di antara rilis | Continuous Feature Delivery | Feature pack tiap ~6 bulan (2 tahun pertama) |
| Mainstream maintenance | Dikelola SAP (selalu terbaru) | 7 tahun per rilis (sejak 2023) |

*(Sumber: SAP News 2022/09 + SAP Community. Verifikasi kembali sebelum publikasi bila menulis angka spesifik private edition.)*

## Edge cases & nuance

- **Clean core bertingkat, bukan biner**: tidak semua ekstensi harus Level A. Level B sah bila released API belum menutup kebutuhan; yang penting keputusan *sadar* + governance, bukan memaksa semua ke Level A dengan biaya besar. Ini mendukung H2 #5 (honest angle).
- **Public vs private edition beda kadens**: jangan menyamaratakan "S/4HANA Cloud upgrade tiap 6 bulan". Feb/Agu = public edition. Dua-tahunan + FPS 6-bulanan = jalur rilis 2023 on-premise/private. Salah menyebut edisi = kesalahan faktual.
- **Changelog Level C = rencana, bukan GA**: SAP menyatakan "plans to provide a changelog". Writer harus memakai bahasa rencana ("SAP berencana menyediakan changelog…"), bukan menyatakan fitur ini sudah tersedia penuh.
- **Deprecated ≠ langsung hilang**: objek deprecated masih berfungsi sementara; risikonya adalah penghapusan di rilis mendatang. Framing "harus segera diganti" boleh, tapi jangan menyiratkan objek langsung mati saat deprecation diumumkan.
- **Stability contract bukan kontrak hukum**: tekankan ini kontrak *teknis* — kesalahpahaman umum. Jangan menyiratkan jaminan hukum/SLA komersial.

## Flags (open factual risk)

- ⚠️ **Changelog untuk objek Level C**: sumber SAP menyebut "SAP *plans to* provide a changelog for SAP objects." → **Rekomendasi**: tulis sebagai rencana ("SAP berencana menyediakan changelog…"), jangan sebagai fitur yang sudah pasti GA. Jangan mengarang tanggal rilis fitur ini.
- ⚠️ **Kadens rilis — beda edisi**: angka "Feb/Agu" (public) vs "dua-tahunan + FPS 6 bulan" (private/on-prem, sejak 2023) mudah tertukar. → **Rekomendasi**: selalu sebut edisi saat menyatakan kadens; hindari klaim tunggal "S/4HANA Cloud upgrade tiap 6 bulan" tanpa kualifikasi. Wording SAP 2022 memakai "currently planned", jadi bingkai sebagai kebijakan yang bisa direvisi.
- ⚠️ **Nama/versi API & tanggal deprecation spesifik**: brief mewanti-wanti jangan mengarang. → **Rekomendasi**: JANGAN sebut nama released API atau tanggal deprecation spesifik. Rujuk pembaca ke SAP Business Accelerator Hub / Cloudification Repository sebagai sumber otoritatif, tanpa contoh mengada-ada.
- ⚠️ **ATC variant tergantung versi**: `ABAP_CLEAN_CORE_DEVELOPMENT` tersedia di ATC SAP BTP ABAP environment & S/4HANA **2025 FPS01** private cloud/on-premise (bukan semua versi lama). → **Rekomendasi**: sebutkan konteks versi bila menulis nama variant; jangan menyiratkan tersedia universal di semua release ECC/S4 lama.

## Definition snippet draft (40–60 words)

> Ekstensi *upgrade-safe* adalah ekstensi SAP yang tetap berfungsi tanpa perbaikan saat sistem di-upgrade, karena hanya memakai *released API* stabil (Level A) dengan *stability contract* dan terpisah dari inti S/4HANA. *Clean core* dengan begitu adalah kondisi yang dijaga sepanjang siklus rilis, bukan status permanen sekali jadi. (48 kata)
