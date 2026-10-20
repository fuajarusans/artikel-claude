---
brief_id: "sap-clean-core-02"
researcher_run_date: "2026-08-11"
sources_cited: 8
flags: 5
---

# Research Dossier: Add-on Pihak Ketiga & Clean Core SAP: Memilih yang Tak Mengotori Core

## TL;DR for the writer

- **Angle = buyer's guide, not builder's guide.** Semua pembahasan di sini tentang add-on/software ISV yang Anda **beli** (SAP Store), bukan ekstensi yang Anda bangun. Rangka artikel di sekitar keputusan pemilihan vendor + verifikasi sertifikasi, bukan teknik coding.
- **Kerangka teknis intinya: 4 level ekstensibilitas clean core (A–D)** yang SAP formalkan/segarkan pada **Agustus 2025**. Level A = paling bersih (released API/ABAP Cloud), Level D = modifikasi (bukan clean core). Sertifikasi add-on mengikuti level ini, tetapi hanya sampai Level C (kondisional); Level D tidak bisa disertifikasi.
- **Sertifikasi dijalankan oleh SAP ICC (SAP Integration and Certification Center).** Untuk add-on ada empat skenario sertifikasi: `BTP-EXT-CC` (side-by-side di BTP), `S/4HC-ABAP-CLOUD-CC` (on-stack ABAP Cloud → Level A), `S/4HC-ABAP-CC` (on-stack classic ABAP → Level B), `S/4HC-ABAP-COND` (classic ABAP kondisional → Level C).
- **Cara verifikasi publik:** cek SAP Store (setiap solusi lolos *readiness check*), daftar "certified ABAP Add-Ons" di SAP Community, dan **SAP Business Accelerator Hub** (api.sap.com) untuk melihat released API yang dipakai.
- **⚠️ Nuansa penting untuk 2026:** pada **Januari 2026 SAP mengumumkan pembaruan program sertifikasi integrasi** (Integration Certification + Interoperability Review baru) yang **direncanakan meluncur Q3 2026**. Penamaan/struktur program sedang bergerak — tulis dengan hati-hati (lihat Flags).
- Soltius muncul hanya di penutup: SAP Platinum Partner (via United VARs) yang **menilai & mengintegrasikan** add-on agar tetap clean-core-safe. Bukan pembuat add-on. Maks 2–3 sebutan.

## Core facts (verified)

> **Claim**: Prinsip clean core = menjaga inti S/4HANA tetap standar/upgrade-safe; kustomisasi/ekstensi dilakukan lewat released API, bukan mengubah kode inti.
> **Number/specific**: Upgrade-safety "depends entirely on using published APIs — unmodified standards remain compatible across releases."
> **Source**: SAP News Center, "How to Extend SAP S/4HANA Cloud the Right Way | Clean Core" (news.sap.com/2025/08/), diakses 2026-08-11
> **Confidence**: high

> **Claim**: SAP mengklasifikasikan ekstensibilitas clean core ke dalam **empat level (A, B, C, D)** berdasarkan upgrade-safety & kepatuhan pada released API.
> **Number/specific**: 4 level; diformalkan/diperbarui sebagai konsep resmi pada **Agustus 2025** (ABAP Extensibility Guide – Clean Core, August 2025 Update).
> **Source**: SAP Community (technology-blog-posts-by-sap), "ABAP Extensibility Guide – Clean Core for SAP S/4HANA Cloud – August 2025 Update"; SAP Community "Clean Core maturity and the new Extensibility Levels", diakses 2026-08-11
> **Confidence**: high

> **Claim**: **Level A** = ekstensi sepenuhnya patuh (fully clean/upgrade-safe), dibangun hanya dari released API SAP — on-stack via **ABAP Cloud** atau side-by-side di **SAP BTP**.
> **Number/specific**: "solely use publicly released and stable interfaces backed by formal stability contracts, based exclusively on ABAP Cloud." Rekomendasi SAP: "SAP BTP first", target level tertinggi.
> **Source**: SAP Community, extensibility levels posts (Aug 2025 Update; "Business Excellence with SAP's New Clean Core Extensibility Levels"), diakses 2026-08-11
> **Confidence**: high

> **Claim**: **Level B** = kondisional-boleh — memakai classic ABAP API yang masih didukung SAP (BAPI/IDoc/RFC/user exit/BAdI/framework legacy), dipakai hanya bila kebutuhan tidak bisa dipenuhi released API Level A.
> **Number/specific**: "comply with SAP recommendations for the use of classic ABAP development technologies … used only if the requirements cannot be fulfilled by the set of released APIs at Level A."
> **Source**: SAP Community, extensibility levels posts, diakses 2026-08-11
> **Confidence**: high

> **Claim**: **Level C** = memakai objek internal SAP yang tidak diklasifikasi/tidak ditujukan untuk pelanggan; hanya "conditionally clean" bila ada pengecekan khusus (changelog/SAP object check) sebelum tiap upgrade.
> **Number/specific**: "usage of arbitrary SAP internal objects … under the condition that dedicated checks are performed before the release upgrade."
> **Source**: SAP Community, extensibility levels posts, diakses 2026-08-11
> **Confidence**: high

> **Claim**: **Level D** = **bukan** clean core — modifikasi langsung, implicit enhancement, atau objek/teknologi yang tidak direkomendasikan SAP.
> **Number/specific**: "severe violations … like modifications, usage of not recommended SAP objects or extension technologies (e.g. implicit enhancements)." Level D tidak dapat disertifikasi.
> **Source**: SAP Community, extensibility levels posts, diakses 2026-08-11
> **Confidence**: high

> **Claim**: Add-on dibedakan menjadi **on-stack (in-app)** vs **side-by-side**. On-stack (ABAP Cloud) berjalan di dalam sistem S/4HANA; side-by-side berjalan terpisah di SAP BTP.
> **Number/specific**: On-stack cocok untuk validasi bisnis & enhancement Fiori ringan yang butuh akses data SAP langsung; side-by-side cocok untuk subsistem fungsional, integrasi pihak ketiga, kapabilitas yang berkembang independen.
> **Source**: SAP News Center (Aug 2025) + SAP Community extensibility posts, diakses 2026-08-11
> **Confidence**: high

> **Claim**: **ABAP Cloud** secara sintaksis hanya mengizinkan API yang sudah **released** SAP; objek yang belum dirilis akan gagal-kompilasi — inilah yang membuat ekstensi upgrade-safe.
> **Number/specific**: "ABAP Cloud syntactically allows only APIs officially released by SAP … preventing compilation errors when accessing unreleased objects."
> **Source**: SAP Community extensibility posts; SAP News Center (Aug 2025), diakses 2026-08-11
> **Confidence**: high

> **Claim**: Released API didokumentasikan & bisa diverifikasi publik di **SAP Business Accelerator Hub** (api.sap.com / hub.sap.com).
> **Number/specific**: "Released APIs are documented in the SAP Business Accelerator Hub (api.sap.com)." Hub = tempat menemukan standard API, Events, dan opsi extensibility untuk S/4HANA.
> **Source**: SAP Business Accelerator Hub (hub.sap.com); SAP Community, diakses 2026-08-11
> **Confidence**: high

> **Claim**: Sertifikasi solusi partner untuk clean core dijalankan oleh **SAP ICC (SAP Integration and Certification Center)** dan memiliki **empat skenario** untuk add-on.
> **Number/specific**: `BTP-EXT-CC` (side-by-side di SAP BTP); `S/4HC-ABAP-CLOUD-CC` (on-stack ABAP Cloud → clean core Level A); `S/4HC-ABAP-CC` (on-stack classic ABAP → Level B); `S/4HC-ABAP-COND` (on-stack classic ABAP → Level C kondisional).
> **Source**: SAP Community (ERP blog by SAP), "Certification of Partner Solutions following Clean Core"; SAP doc "Certification Of Partner Solutions Following Clean Core Criteria" (sap.com/documents/2023/05/), diakses 2026-08-11
> **Confidence**: medium (kode skenario konsisten di beberapa sumber SAP, tetapi halaman blog SAP asli mengembalikan 403 saat fetch; nama dapat berubah — lihat Flags)

> **Claim**: Untuk add-on ABAP on-stack di S/4HANA Cloud Public Edition, syarat sertifikasi mencakup: uninstall harus didukung, semua objek di namespace terdaftar, dan lolos **security code scan** + **ATC check** (SAP Note 3565942) tanpa error.
> **Number/specific**: "must run on-stack … uninstallation must be supported … all objects must be located in a registered namespace … must successfully pass a security code scan"; "successful scan with ATC check from SAP Note 3565942, without having any errors."
> **Source**: SAP Community (ERP blog by SAP), "Natively ABAP Cloud (Clean Core) Add-ons in SAP S/4HANA Cloud Public Edition", diakses 2026-08-11
> **Confidence**: high

> **Claim**: **SAP Store** kini mendukung publikasi, order management, dan fulfilment dengan deployment otomatis add-on ABAP Cloud ke sistem Public Edition pelanggan.
> **Number/specific**: "integration of SAP Store publishing, order management, and fulfillment with automated deployment to customers' Public Edition systems." Add-on ABAP Cloud "natively available as clean-core solutions."
> **Source**: SAP Community, "Natively ABAP Cloud (Clean Core) Add-ons in SAP S/4HANA Cloud Public Edition", diakses 2026-08-11
> **Confidence**: high

> **Claim**: Setiap solusi partner di SAP Store wajib lolos **standard readiness check** yang memverifikasi arsitektur solusi, teknologi SAP & pihak ketiga yang dipakai, API integrasi, dan antarmuka — sehingga pembeli bisa memakainya sebagai sinyal kepatuhan.
> **Number/specific**: readiness check memeriksa "solution architecture, SAP technologies used, third-party technologies used, integration APIs, and user interfaces."
> **Source**: SAP Store FAQ (sap.com/store/faq.html); SAP Community, diakses 2026-08-11
> **Confidence**: high

> **Claim**: Cara publik memverifikasi status sertifikasi add-on: SAP Store, **daftar "List of certified ABAP Add-Ons for SAP S/4HANA"** yang dirawat SAP di SAP Community (terpisah untuk Public Edition, Private Edition, extended edition), dan SAP Business Accelerator Hub untuk API.
> **Number/specific**: Tersedia daftar terpisah per edisi (Public / Private / extended edition) di SAP Community.
> **Source**: SAP Community, "List of certified ABAP Add-Ons for SAP S/4HANA (Cloud Private Edition / extended edition)", diakses 2026-08-11
> **Confidence**: high

> **Claim**: Pada **Januari 2026** SAP mengumumkan pembaruan Integration Certification Program untuk solusi partner — dua jalur baru: **Integration Certification** (untuk solusi selaras prioritas SAP: BTP, Business AI, clean core, public cloud) dan **Interoperability Review** (program terbuka baru untuk semua partner/ISV).
> **Number/specific**: Kerangka baru "planned to launch in Q3 2026", didukung sepanjang H2 2026; dikelola SAP Integration and Certification Center.
> **Source**: SAP News Center, "Updates to SAP's Integration Certification Program for Partner-Built Solutions" (news.sap.com/2026/01/), diakses 2026-08-11
> **Confidence**: high

> **Claim**: SAP ECC (Business Suite 7): mainstream maintenance berakhir **31 Des 2027** (untuk EHP 6–8), dengan **extended maintenance berbayar hingga 31 Des 2030** (premi ~2 poin persentase); EHP 0–5 sudah berakhir 31 Des 2025 tanpa extended.
> **Number/specific**: 2027 (mainstream) → 2030 (extended, +~2% basis maintenance). SAP menegaskan tenggat 2027 tidak berubah.
> **Source**: Rimini Street (mengutip pengumuman SAP); The Register (Feb 2025); konsisten dengan `product_matrix.md`, diakses 2026-08-11
> **Confidence**: high (dates), medium (angka premi persis — kutip sebagai kisaran)

## Solution focus + Soltius anchor (from product_matrix.md)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| Add-on ISV on-stack vs side-by-side; SAP ICC certification (skenario BTP-EXT-CC / S/4HC-ABAP-*); Level A–D; SAP Store; SAP Business Accelerator Hub | Level A–D definisi SAP; hanya sampai Level C yang bisa disertifikasi (kondisional), D tidak; released API di api.sap.com; SAP Store fulfilment otomatis untuk Public Edition; readiness check + ATC/security scan | H2 #1–#3 (teach), verifikasi di H2 #2; keputusan build-vs-buy H2 #4 | **SAP Platinum Partner via United VARs** + **Implementation/Enhancement** (evaluasi & integrasi solusi) — closing |

Reminder: Soltius **mengevaluasi, mengintegrasikan, mengimplementasi, dan mendukung** add-on/solusi ini — **tidak membangun/menjual add-on ISV sendiri**. Maks 2–3 sebutan Soltius. Satu aside mid-artikel yang diizinkan brief: pengalaman lapangan bahwa banyak proyek terganjal add-on warisan saat upgrade (jangan tambahkan angka/nama klien yang tak ada di company_profile).

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **SAP News Center — "How to Extend SAP S/4HANA Cloud the Right Way" (Agustus 2025)** — https://news.sap.com/2025/08/extend-sap-s4hana-cloud-right-way-clean-clear/ — *backs*: prinsip clean core, on-stack vs side-by-side, ABAP Cloud/released API, upgrade-safety.
2. **SAP News Center — "Updates to SAP's Integration Certification Program for Partner-Built Solutions" (Januari 2026)** — https://news.sap.com/2026/01/updates-sap-integration-certification-program-partner-built-solutions/ — *backs*: SAP ICC mengelola sertifikasi partner; jalur Integration Certification + Interoperability Review; peluncuran Q3 2026.
3. **SAP Business Accelerator Hub** — https://hub.sap.com/ (api.sap.com) — *backs*: released API terdokumentasi & bisa dicek publik.
4. **SAP Community (blog by SAP) — "Natively ABAP Cloud (Clean Core) Add-ons in SAP S/4HANA Cloud Public Edition"** — https://community.sap.com/t5/enterprise-resource-planning-blog-posts-by-sap/natively-abap-cloud-clean-core-add-ons-in-sap-s-4hana-cloud-public-edition/ba-p/14093908 — *backs*: syarat sertifikasi add-on, SAP Store fulfilment otomatis.

Prioritaskan link keluar ke SAP official (news.sap.com, hub.sap.com, community.sap.com blog **by SAP**). Hindari nge-link ke halaman marketing vendor add-on (mis. Sovos/Saviynt/xSuite) sebagai otoritas — brief melarang endorsement produk tertentu.

## FAQ Q&As (5–8 drafted, Bahasa Indonesia)

### Apakah add-on pihak ketiga bisa merusak clean core?
Bisa. Add-on yang menyentuh inti dengan modifikasi atau memakai objek internal SAP yang belum dirilis berperilaku sama seperti Z-code buatan sendiri — ia dapat menggagalkan atau memperlambat upgrade dan menghambat perpindahan ke cloud. Kuncinya bukan "beli vs bangun", melainkan **bagaimana** add-on itu dibangun: add-on berbasis ABAP Cloud/released API (Level A) tetap upgrade-safe, sedangkan yang bersandar modifikasi (Level D) mengotori core.

### Bagaimana cara tahu sebuah add-on SAP sudah tersertifikasi clean core?
Verifikasi di tiga tempat resmi: **SAP Store** (setiap solusi partner wajib lolos *readiness check*), daftar **"List of certified ABAP Add-Ons for SAP S/4HANA"** yang dirawat SAP di SAP Community (terpisah per edisi), dan **SAP Business Accelerator Hub** (api.sap.com) untuk melihat released API yang dipakai. Sertifikasi clean core dijalankan oleh SAP ICC (SAP Integration and Certification Center). Minta vendor menyebut skenario sertifikasinya secara spesifik.

### Apa itu Level A, B, C, D dalam ekstensibilitas SAP?
Empat tingkat kepatuhan clean core yang SAP formalkan pada Agustus 2025. **Level A**: hanya released API/ABAP Cloud — sepenuhnya upgrade-safe. **Level B**: classic ABAP API yang masih didukung SAP (BAPI/IDoc/BAdI), boleh bila Level A tak cukup. **Level C**: memakai objek internal SAP, "clean bersyarat" dengan pengecekan tiap sebelum upgrade. **Level D**: modifikasi langsung — bukan clean core dan tidak bisa disertifikasi.

### Apa bedanya add-on on-stack dan side-by-side?
Add-on **on-stack (in-app)** berjalan di dalam sistem S/4HANA itu sendiri; bila berbasis ABAP Cloud, ia tetap clean-core-safe dan cocok untuk validasi bisnis atau enhancement Fiori ringan yang butuh akses data langsung. Add-on **side-by-side** berjalan terpisah di **SAP BTP**, ideal untuk subsistem fungsional, integrasi pihak ketiga, atau kapabilitas yang perlu berkembang independen dari inti — sehingga inti tetap ringan.

### Apa itu SAP Store dan SAP Business Accelerator Hub?
**SAP Store** (store.sap.com) adalah etalase resmi solusi SAP & partner; kini mendukung publikasi, pemesanan, dan **fulfilment otomatis** add-on ABAP Cloud langsung ke sistem S/4HANA Cloud Public Edition pelanggan. **SAP Business Accelerator Hub** (api.sap.com/hub.sap.com) adalah katalog resmi API, event, dan opsi extensibility SAP — tempat memverifikasi apakah sebuah integrasi memakai released API yang stabil.

### Lebih baik beli add-on atau bangun sendiri di SAP BTP?
Tergantung kebutuhannya. **Beli** bila kebutuhan generik (pajak/e-Faktur, EDI, pergudangan, manajemen dokumen), butuh cepat, dan tersedia add-on tersertifikasi Level A/B — TCO umumnya lebih rendah dan perawatan jadi tanggung jawab vendor. **Bangun** bila kebutuhan unik jadi pembeda bisnis dan tak ada padanan certified. Apa pun pilihannya, syaratnya sama: pastikan solusi berbasis released API/ABAP Cloud agar tetap clean-core-safe.

### Apakah add-on lama bisa dibawa ke S/4HANA Cloud Public Edition?
Belum tentu. Public Edition menegakkan batasan clean core secara teknis — hanya ekstensi berbasis ABAP Cloud/released API yang diterima. Add-on warisan yang memodifikasi inti atau memakai objek internal (Level C/D) sering harus dibangun ulang atau diganti versi certified sebelum migrasi. Inilah alasan add-on non-standar kerap menjadi penghambat utama saat migrasi ERP ke cloud.

### Siapa yang bertanggung jawab bila add-on gagal saat upgrade?
Secara kontraktual, vendor add-on bertanggung jawab menjaga kompatibilitas produknya, tetapi risiko operasional saat upgrade tetap jatuh ke perusahaan Anda. Karena itu, sertifikasi SAP (Level A/B) penting sebagai mitigasi: add-on yang hanya memakai released API jauh lebih kecil kemungkinannya patah antar-rilis. Untuk add-on Level C, sepakati dalam kontrak siapa yang menjalankan pengecekan pra-upgrade dan menanggung remediasi.

## Data tables for the writer

### Level A–D ekstensibilitas clean core & implikasinya untuk add-on

| Level | Teknologi/pendekatan | Status clean core | Bisa disertifikasi? | Implikasi upgrade & portabilitas ke Public Edition |
|---|---|---|---|---|
| **A** | ABAP Cloud (on-stack) atau side-by-side BTP; hanya **released API** | Sepenuhnya bersih / upgrade-safe | Ya — `S/4HC-ABAP-CLOUD-CC` (on-stack) / `BTP-EXT-CC` (side-by-side) | Upgrade-safe; portabel ke Public Edition |
| **B** | Classic ABAP API yang **masih didukung** (BAPI/IDoc/RFC/BAdI/user exit) | Kondisional-boleh (bila A tak cukup) | Ya — `S/4HC-ABAP-CC` | Umumnya stabil tetapi perlu governance; belum tentu langsung portabel ke Public Edition |
| **C** | Memakai **objek internal SAP** yang tak dirilis untuk pelanggan | "Clean bersyarat" — butuh cek pra-upgrade | Ya, kondisional — `S/4HC-ABAP-COND` | Berisiko; wajib pengecekan changelog SAP tiap sebelum upgrade |
| **D** | Modifikasi langsung, implicit enhancement, objek tak direkomendasikan | **Bukan** clean core | **Tidak** | Rawan patah saat upgrade; menghambat jalan ke cloud |

> Catatan penulisan: kolom "skenario sertifikasi" adalah kode SAP ICC — sajikan sebagai fakta teknis, bukan angka wajib dihafal. Rekomendasi SAP: kejar level setinggi mungkin ("SAP BTP first").

### Checklist build vs buy (untuk H2 #4)

| Pertimbangan | Cenderung **BELI** add-on | Cenderung **BANGUN** sendiri |
|---|---|---|
| Sifat kebutuhan | Generik/lintas-industri (pajak, EDI, pergudangan, dokumen) | Unik, jadi pembeda kompetitif |
| Ketersediaan certified | Ada add-on Level A/B tersertifikasi | Tak ada padanan certified |
| Kecepatan | Butuh cepat, siap pakai | Ada waktu & kapasitas dev |
| TCO & perawatan | Perawatan ditanggung vendor | Perusahaan menanggung lifecycle |
| Ketergantungan vendor | Dapat diterima dengan exit plan | Ingin kendali penuh |

### Pertanyaan wajib ke vendor add-on — green flag vs red flag

| Aspek | 🟢 Green flag | 🔴 Red flag |
|---|---|---|
| Sertifikasi | Sebut skenario spesifik (mis. `S/4HC-ABAP-CLOUD-CC`, Level A) + terdaftar di SAP Store | "Sudah SAP-certified" tanpa detail level/skenario |
| API | Hanya released API (tercantum di SAP Business Accelerator Hub) | Butuh akses objek internal / modifikasi inti |
| Arsitektur | ABAP Cloud on-stack atau side-by-side BTP | Menempel via modifikasi/implicit enhancement |
| Upgrade | Komitmen kompatibilitas antar-rilis & jadwal | "Perlu penyesuaian tiap upgrade" tanpa tanggung jawab jelas |
| Public cloud | Portabel/tersedia untuk S/4HANA Cloud Public Edition | Hanya jalan di on-prem/private dengan modifikasi |

## Edge cases & nuance

- **"Certified" ≠ jaminan mutu fungsional.** Sertifikasi clean core memverifikasi *bagaimana* add-on dibangun (upgrade-safety, kepatuhan API), bukan seberapa baik fungsinya untuk proses bisnis Anda. Add-on Level A bisa saja jelek secara fungsional; add-on hebat bisa saja belum bersertifikat. Brief H2 #5 meminta kejujuran ini.
- **Non-certified kadang wajar diterima** untuk kebutuhan niche tanpa alternatif certified — syaratnya mitigasi: isolasi via side-by-side BTP, klausul kompatibilitas upgrade di kontrak, dan exit plan. Jangan sajikan certified sebagai satu-satunya jalan.
- **Level bukan "nilai rapor kepatuhan perusahaan", tapi klasifikasi per-ekstensi.** Satu landscape bisa punya campuran Level A–D. Hindari menyiratkan "perusahaan Anda Level B".
- **Public vs Private Edition berbeda tegas.** Public Edition menegakkan clean core secara teknis (hanya ABAP Cloud/released API); Private Edition & on-prem masih mengizinkan kode legacy tetapi menanggung "penalti" pada roadmap dukungan. Add-on yang jalan di Private belum tentu diterima di Public.
- **Add-on side-by-side pun perlu governance integrasi** — "di BTP" tidak otomatis berarti bersih bila integrasinya menyandera API classic yang rapuh.

## Flags (open factual risk)

- ⚠️ **Kode skenario sertifikasi (`BTP-EXT-CC`, `S/4HC-ABAP-CLOUD-CC`, `S/4HC-ABAP-CC`, `S/4HC-ABAP-COND`)**: konsisten muncul di beberapa sumber SAP, tetapi blog SAP Community sumber primernya mengembalikan 403 saat diverifikasi langsung. → Rekomendasi: penulis boleh menyebutkan skenario ini sebagai ilustrasi, tetapi frasakan "menurut kerangka sertifikasi clean core SAP" dan **jangan** menjadikan kode persis sebagai klaim yang berdiri sendiri; arahkan pembaca mengecek status terkini di SAP Store.
- ⚠️ **Program sertifikasi sedang berevolusi (2026)**: Januari 2026 SAP mengumumkan Integration Certification + Interoperability Review baru yang **baru meluncur Q3 2026**. → Rekomendasi: jangan pastikan nama program tunggal yang "final"; jelaskan bahwa penamaan/struktur sertifikasi SAP diperbarui pada 2025–2026 dan pembeli harus memverifikasi di kanal resmi SAP terkini. Ini sekaligus E-E-A-T signal ("aturan sertifikasi baru SAP").
- ⚠️ **Nama "SAP Certified for Clean Core"**: brief menyebut istilah ini; SAP lebih konsisten memakai frasa "certification of partner solutions following clean core" / "clean core certification" dan skenario ICC di atas, bukan merek tunggal "SAP Certified for Clean Core". → Rekomendasi: pakai deskripsi "sertifikasi clean core SAP (melalui SAP ICC)" ketimbang menyiratkan satu label merek resmi.
- ⚠️ **"Rentang jumlah add-on tipikal di lanskap enterprise"** (diminta brief sebagai rule-of-thumb): tidak ada sumber otoritatif yang bisa saya verifikasi untuk angka spesifik. → Rekomendasi: frasakan kualitatif ("puluhan add-on tidak jarang dijumpai") tanpa angka pasti, atau drop. Jangan sematkan angka bersumber.
- ⚠️ **Angka premi extended maintenance ECC (~2 poin persentase → total ~9–12%)**: berasal dari analis/mitra (Rimini Street, The Register), bukan tabel harga SAP publik. → Rekomendasi: kutip tenggat **2027 (mainstream) dan 2030 (extended)** dengan percaya diri (selaras product_matrix), tetapi sajikan angka premi sebagai "kisaran" beratribut, bukan angka pasti SAP.

## Definition snippet draft (40–60 words)

> **Add-on pihak ketiga** dalam konteks clean core adalah solusi siap pakai dari vendor ISV — dijual lewat SAP Store — yang menambah fungsi ke sistem SAP tanpa Anda membangunnya sendiri. Add-on disebut *clean-core-safe* bila hanya memakai released API/ABAP Cloud (Level A) sehingga inti S/4HANA tetap standar dan aman di-upgrade. (48 kata)
