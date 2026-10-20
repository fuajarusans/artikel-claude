---
brief_id: "erp-migration-to-the-cloud-02"
researcher_run_date: "2026-07-07"
sources_cited: 12
flags: 6
---

# Research Dossier: Remediasi Custom Code Sebelum Migrasi ERP ke Cloud: Panduan Praktis

## TL;DR for the writer

- **Custom code (ABAP) — bukan data atau infrastruktur — adalah rem tersembunyi migrasi ke cloud.** Artikel ini adalah panduan eksekusi remediasi custom code end-to-end: inventarisasi (ATC + Simplification Database) → pisahkan kode terpakai vs tidur (usage data / SCMON+SUSG) → keputusan refactor/retire/recode → pindahkan ekstensi ke ABAP Cloud / SAP BTP demi clean core. Sudut ini baru untuk cluster ERP-migration Soltius.
- **Angka aman untuk dikutip (dengan atribusi + rentang)**: statistik SAP selama >15 tahun menunjukkan **30–60% custom code di sistem produktif ERP tidak pernah dieksekusi**; beberapa sumber SAP menyebut **"lebih dari 60% Z-code tidak pernah jalan di produksi"**. Sajikan sebagai **rentang** ("sekitar 30–60%, bahkan bisa lebih") — JANGAN mengunci satu angka tunggal. (Lihat Flag ⚠️1.)
- **Nama tool WAJIB akurat**: **ABAP Test Cockpit (ATC)** menjalankan pemeriksaan readiness terhadap **Simplification Database**; **aplikasi Fiori "Custom Code Migration"** menyatukan analisis + data pemakaian; **usage data dikumpulkan via SCMON (Usage Logging) + SUSG (agregasi)**, disarankan **minimal 1 tahun** sebelum konversi. Kode tak terpakai dihapus lewat **deletion transport** saat system conversion.
- **Business Partner (BP) memaksa remapping**: di S/4HANA, Customer (KNA1) & Vendor (LFA1) tidak lagi menjadi objek utama — **BP adalah satu-satunya entry point**, disinkronkan lewat **CVI (Customer-Vendor Integration)**. Custom code yang menulis langsung ke KNA1/LFA1 atau memakai transaksi lama (XD01/XK01/FD01) harus dipetakan ulang ke BP API/BAPI.
- **Clean core = tujuan akhir remediasi**: ekstensi dipindah ke **key-user (in-app) extensibility**, **developer extensibility dengan ABAP Cloud** (on-stack, upgrade-stable), atau **side-by-side di SAP BTP** — agar upgrade berikutnya aman. **SAP Joule for Developers** menambah bantuan AI (ATC Explain; **Custom Code Migration Agent** rilis **Q2 2026** untuk perbaikan massal) — bantuan, bukan pengganti keputusan arsitektur.
- **Soltius anchor**: **Implementation + Enhancement + ERP Strategy** + **SAP Platinum Partner via United VARs**, di closing. Framing: menganalisis custom code & memindahkan kustomisasi ke pendekatan clean-core (SAP BTP) agar sistem tetap mudah di-upgrade dan siap cloud. Maks 2–3 self-mention.

## Core facts (verified)

> **Claim**: Sebagian besar custom code di sistem SAP lama sering tidak pernah dijalankan di produksi.
> **Number/specific**: Statistik SAP selama **>15 tahun** menunjukkan **30–60%** custom code pada sistem SAP ERP produktif **tidak pernah dieksekusi**; analisis SAP atas sistem pelanggan lain menyebut **"lebih dari 60% Z-code tidak pernah jalan di produksi"**. Rentang praktisi yang sering dikutip: **60–75% objek custom tidak pernah dipanggil**. Sajikan sebagai rentang, bukan angka tunggal.
> **Source**: SAP Community "Get started with the ABAP custom code migration process" + SAPinsider "How to Prepare SAP Custom Code for S/4HANA" (via WebSearch), diakses 2026-07-07.
> **Confidence**: medium (angka bervariasi antar-sumber; rentang solid, angka tunggal tidak — lihat Flag ⚠️1)

> **Claim**: ABAP Test Cockpit (ATC) memeriksa custom code terhadap Simplification Database untuk kesiapan S/4HANA.
> **Number/specific**: Untuk memeriksa custom code terhadap simplifikasi S/4HANA, **Simplification Database di-impor** (disediakan SAP sebagai konten ZIP yang dapat diunduh); **ATC** lalu menjalankan pemeriksaan readiness dan menghasilkan temuan (findings) beserta **quick fix** semi-otomatis untuk sebagian temuan.
> **Source**: SAP Help Portal — "Custom Code Migration Guide for SAP S/4HANA" (help.sap.com/doc/9dcbc5e47ba54a5cbb509afaa49dd5a1, versi 2025.001 bertanggal 2026-02-25), diakses 2026-07-07.
> **Confidence**: high

> **Claim**: Simplification Database adalah konten resmi SAP yang menjadi acuan pemeriksaan.
> **Number/specific**: **Simplification Database** berisi daftar item simplifikasi (perubahan struktural/fungsional di S/4HANA, mis. penyatuan tabel, objek yang di-deprecate). ATC memetakan objek custom terhadap database ini untuk menemukan yang terdampak. SAP menyediakannya sebagai file yang di-download & di-impor ke sistem pemeriksa.
> **Source**: SAP Help Portal — Custom Code Migration Guide for SAP S/4HANA (versi 2025.001, 2026-02-25), diakses 2026-07-07.
> **Confidence**: high

> **Claim**: Aplikasi Fiori "Custom Code Migration" adalah tool analisis modern yang menyatukan temuan ATC dengan data pemakaian.
> **Number/specific**: **Custom Code Migration app** mendukung identifikasi custom code tak terpakai berdasarkan usage data; hasil dapat difilter menurut kategori seperti ketersediaan quick fix, scope, dan usage data. Mulai **SAP BTP ABAP environment 2602**, dukungan analisis berbasis AI terintegrasi di app ini.
> **Source**: SAP Help Portal — Custom Code Migration Guide (2025.001) + SAP Community "Custom code migration powered by SAP Joule for Developers", diakses 2026-07-07.
> **Confidence**: high

> **Claim**: Data pemakaian (usage data) memisahkan kode terpakai dari kode "tidur", dan harus dikumpulkan jauh sebelum konversi.
> **Number/specific**: Administrator mengaktifkan **Usage Logging (transaksi SCMON)** dan agregasi via **SUSG**; SAP menyarankan mengumpulkan usage data di sistem produksi **minimal 1 tahun** sebelum proyek konversi S/4HANA, agar pola musiman (mis. tutup buku tahunan) tertangkap.
> **Source**: SAP Help Portal — Custom Code Migration Guide (2025.001) + SAP-PRESS blog "How to Evaluate Custom Code Usage Data" (via WebSearch), diakses 2026-07-07.
> **Confidence**: high

> **Claim**: Custom code tak terpakai dapat dihapus (decommission) untuk mengecilkan lingkup migrasi.
> **Number/specific**: **Custom code scoping** menentukan objek yang sering dipakai dan perlu dibawa ke S/4HANA; **kode tak terpakai dihapus lewat deletion transport request saat system conversion** — mengurangi jumlah objek yang harus diadaptasi, memperkecil footprint upgrade, effort testing, dan biaya.
> **Source**: SAP Help Portal — Custom Code Migration Guide for SAP S/4HANA (versi 2025.001, 2026-02-25), diakses 2026-07-07.
> **Confidence**: high

> **Claim**: Di S/4HANA, Customer (KNA1) & Vendor (LFA1) digantikan model Business Partner (BP) sebagai entry point tunggal.
> **Number/specific**: **BP adalah entry point wajib** untuk membuat master Customer/Vendor di S/4HANA. Tabel lama (KNA1, LFA1) masih ada demi proses SD/MM, tetapi diisi melalui BP; sinkronisasi dijaga oleh **CVI (Customer-Vendor Integration)** (mis. link CVI_CUST_LINK/CVI_VEND_LINK ke BUT000). Konversi CVI adalah langkah **mandatory** dalam system conversion.
> **Source**: SAP Community — "FAQ: CVI - Customer Vendor Integration for system conversion to SAP S/4HANA" (community.sap.com), diakses 2026-07-07.
> **Confidence**: high

> **Claim**: Custom code yang menulis langsung ke tabel/transaksi Customer/Vendor lama harus dipetakan ulang ke BP.
> **Number/specific**: Kustomisasi yang memakai transaksi lama (mis. **XD01/XK01/FD01/FK01**) atau menulis langsung ke KNA1/LFA1 tidak lagi valid sebagai jalur utama; harus diarahkan ke **BP (transaksi BP) dan API/BAPI Business Partner**. Ini pemicu remapping yang konkret di fase remediasi.
> **Source**: SAP Community — CVI/Business Partner conversion blogs (community.sap.com), diakses 2026-07-07.
> **Confidence**: medium (mekanisme benar; kombinasi transaksi bergantung modul — writer sebut sebagai contoh, bukan daftar lengkap)

> **Claim**: ABAP Cloud adalah model pengembangan cloud-ready yang menjaga ekstensi upgrade-stable (clean core).
> **Number/specific**: **ABAP Cloud** kini tersedia di semua edisi SAP S/4HANA; memungkinkan membangun ekstensi ABAP **cloud-ready & upgrade-stable** langsung di stack S/4HANA, dengan syarat memakai **bahasa ABAP yang cloud-optimized** dan hanya **API/objek yang di-release (released local & remote APIs)**. Inilah fondasi teknis clean core on-stack.
> **Source**: SAP Community — "ABAP Extensibility Guide – Clean Core for SAP S/4HANA Cloud (Aug 2025 Update)" + ABAP Cloud FAQ (community.sap.com), diakses 2026-07-07.
> **Confidence**: high

> **Claim**: Ada tiga jalur ekstensibilitas clean core; kustomisasi remediasi diarahkan ke salah satunya.
> **Number/specific**: (1) **Key-user (in-app) extensibility** — low-/no-code oleh business expert, bagian dari clean core; (2) **Developer extensibility (ABAP Cloud)** — on-stack, tightly-coupled, upgrade-stable; (3) **Side-by-side extensibility di SAP BTP** — loosely-coupled, berjalan di platform terpisah (SAP BTP), memakai ABAP Cloud/CAP/SAP Build (low-code). Ketiganya menjaga inti tetap standar.
> **Source**: SAP Community — "ABAP Extensibility Guide – Clean Core for SAP S/4HANA Cloud (Aug 2025)" (community.sap.com), diakses 2026-07-07.
> **Confidence**: high

> **Claim**: SAP Joule for Developers menambah bantuan AI untuk migrasi custom code (bantuan, bukan pengganti keputusan).
> **Number/specific**: Mulai **SAP BTP ABAP environment 2602**, kapabilitas AI (**SAP Joule for Developers, ABAP AI**) terintegrasi di Custom Code Migration app. Fitur **ATC Explain** menjelaskan temuan ATC terkait S/4HANA + resolusi langkah-demi-langkah. **Custom Code Migration Agent pertama — "Mass S/4 Custom Code Conversion Agent" — dirilis Q2 2026**, mengidentifikasi & memperbaiki temuan ATC secara massal memakai deterministic rules atau AI-generated fixes.
> **Source**: SAP Community — "Custom code migration to SAP S/4HANA powered by SAP Joule for Developers" (community.sap.com), diakses 2026-07-07.
> **Confidence**: high (fitur & rilis Q2 2026 dinyatakan SAP; lihat Flag ⚠️2 soal auto-fix)

> **Claim**: SAP ECC (Business Suite 7) menuju akhir maintenance — konteks deadline yang mendorong remediasi.
> **Number/specific**: **Mainstream maintenance SAP Business Suite 7 (core, termasuk SAP ERP 6.0 EhP 6–8) berlaku hingga akhir 2027**; **extended maintenance 2028–akhir 2030** dengan premium **2 poin persentase**; setelahnya **Customer-Specific Maintenance**. SAP memberi **innovation commitment untuk S/4HANA hingga akhir 2040**.
> **Source**: SAP Support Portal — "Maintenance strategy / Innovation Commitment" (support.sap.com/.../maintenance-strategy/s4hana-business-suite7.html), diakses 2026-07-07.
> **Confidence**: high

## Solution focus + Soltius anchor (from product_matrix.md)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| ABAP Test Cockpit (ATC) + Simplification Database | ATC memeriksa readiness terhadap Simplification Database (di-impor sebagai konten SAP); menghasilkan findings + quick fix semi-otomatis | H2 #2 (inventarisasi/analisis) | — |
| SAP Custom Code Migration app (Fiori) + usage data (SCMON/SUSG) | App menyatukan temuan ATC + usage data untuk memisahkan kode terpakai vs tidur; kumpulkan usage ≥1 tahun; kode tak terpakai dihapus via deletion transport | H2 #2 & #5 | — |
| Keputusan refactor / retire / recode | Kerangka per objek berdasar frekuensi pakai, kompleksitas, kepatuhan clean core | H2 #3 (tabel keputusan) | Mid-article aside (H2 #3): pola lapangan keputusan retire menekan biaya |
| In-app (key-user) vs developer (ABAP Cloud) vs side-by-side (SAP BTP) extensibility | Tiga jalur clean core; ABAP Cloud on-stack upgrade-stable; BTP untuk loosely-coupled | H2 #4 (ke mana kustomisasi dipindah) | — |
| Business Partner (BP) + CVI remapping | BP entry point tunggal; KNA1/LFA1 diisi via BP; custom code ke KNA1/LFA1/XD01/XK01 harus dipetakan ke BP API | H2 #4 + FAQ | — |
| SAP Joule for Developers / Custom Code Migration Agent | ATC Explain; Mass S/4 Custom Code Conversion Agent rilis Q2 2026; bantuan AI, bukan pengganti keputusan arsitektur | H2 #5 (honest) + FAQ | — |
| Clean core (prinsip payung) | Remediasi = langkah paling langsung menuju clean core & cloud-ready | Sepanjang; kuat di H2 #4 | Closing — **Implementation + Enhancement + ERP Strategy**, **SAP Platinum Partner via United VARs** |

Reminder: Soltius **mengimplementasikan/memigrasikan/mendukung** teknologi ini — **tidak membangunnya**. Max 2–3 Soltius self-mentions (idealnya 1 closing + 1 mid-article aside di H2 #3).

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **SAP Help Portal — "Custom Code Migration Guide for SAP S/4HANA" (versi 2025.001, cover 2026-02-25)** — https://help.sap.com/doc/9dcbc5e47ba54a5cbb509afaa49dd5a1/2025.001/en-US/CustomCodeMigration_EndtoEnd.pdf — *what it backs*: ATC + Simplification Database, Custom Code Migration app, usage data (SCMON/SUSG), decommission via deletion transport, fase analisis→adaptasi. (Sumber resmi paling otoritatif — top-1 SERP competitor; artikel Soltius harus lebih ramah CIO, bukan developer-only.)
2. **SAP Community (post oleh SAP) — "Custom code migration to SAP S/4HANA powered by SAP Joule for Developers"** — https://community.sap.com/t5/technology-blog-posts-by-sap/custom-code-migration-to-sap-s-4hana-powered-by-sap-joule-for-developers/ba-p/14329094 — *what it backs*: ATC Explain, Custom Code Migration Agent (Mass S/4 Custom Code Conversion Agent) rilis Q2 2026, BTP ABAP environment 2602.
3. **SAP Community (post oleh SAP) — "ABAP Extensibility Guide – Clean Core for SAP S/4HANA Cloud (Aug 2025 Update)"** — https://community.sap.com/t5/technology-blog-posts-by-sap/abap-extensibility-guide-clean-core-for-sap-s-4hana-cloud-august-2025/ba-p/14175399 — *what it backs*: tiga jalur ekstensibilitas (key-user, ABAP Cloud developer, side-by-side BTP), definisi ABAP Cloud & upgrade stability.
4. **SAP Support Portal — Maintenance strategy / Innovation Commitment (Business Suite 7 & S/4HANA)** — https://support.sap.com/en/release-upgrade-maintenance/maintenance-information/maintenance-strategy/s4hana-business-suite7.html — *what it backs*: ECC/Business Suite 7 2027, extended 2028–2030 (+2%-poin), S/4HANA hingga 2040.

Priority: SAP official (help/community/support) > SAPinsider/SAP-PRESS (praktisi effort/statistik) untuk konteks.

## FAQ Q&As (7 drafted, Bahasa Indonesia)

### Apa itu custom code remediation dalam migrasi SAP S/4HANA?
Custom code remediation adalah proses menginventarisasi, menyaring, dan menyesuaikan kode kustom ABAP (objek Z/Y) agar kompatibel dengan SAP S/4HANA sebelum atau saat konversi. Prosesnya memakai ABAP Test Cockpit (ATC) yang memeriksa kode terhadap Simplification Database, lalu memutuskan tiap objek untuk diperbaiki (refactor), dipensiunkan (retire), atau ditulis ulang (recode) mengikuti prinsip clean core.

### Apa fungsi ABAP Test Cockpit (ATC)?
ABAP Test Cockpit (ATC) adalah tool kualitas kode SAP yang menjalankan pemeriksaan statis. Dalam konteks migrasi, ATC memeriksa custom code terhadap Simplification Database S/4HANA untuk menemukan objek yang terdampak perubahan struktural (mis. tabel yang disatukan atau objek yang di-deprecate). ATC menghasilkan daftar temuan berikut quick fix semi-otomatis untuk sebagian kasus, sehingga tim tahu persis kode mana yang harus diperbaiki.

### Apa itu Simplification Database?
Simplification Database adalah konten resmi dari SAP berisi daftar seluruh item simplifikasi di SAP S/4HANA — perubahan yang membuat kode ECC lama tidak lagi kompatibel, seperti penyatuan tabel Customer/Vendor ke Business Partner atau transaksi yang dihapus. Database ini di-download dan di-impor ke sistem, lalu menjadi acuan pemeriksaan ATC. Tanpa Simplification Database yang mutakhir, hasil analisis readiness tidak akurat.

### Bagaimana cara tahu custom code mana yang masih dipakai?
Gunakan data pemakaian (usage data). Administrator mengaktifkan Usage Logging lewat transaksi SCMON dan mengagregasinya via SUSG. SAP menyarankan mengumpulkan usage data di sistem produksi minimal satu tahun agar pola musiman seperti tutup buku tahunan ikut tertangkap. Aplikasi Custom Code Migration lalu menggabungkan data ini dengan temuan ATC, sehingga kode yang tidak pernah dieksekusi bisa dipensiunkan lewat deletion transport dan tidak ikut dibawa ke cloud.

### Apa itu Business Partner dan mengapa custom code perlu dipetakan ulang?
Business Partner (BP) adalah model master data tunggal di SAP S/4HANA yang menggantikan pengelolaan Customer dan Vendor secara terpisah. Tabel lama KNA1 dan LFA1 tetap ada tetapi hanya diisi melalui BP, disinkronkan oleh Customer-Vendor Integration (CVI). Karena itu, custom code yang dulu menulis langsung ke KNA1/LFA1 atau memakai transaksi lama (mis. XD01/XK01) harus dipetakan ulang ke transaksi BP dan API Business Partner agar tetap berfungsi setelah konversi.

### Apakah AI seperti SAP Joule bisa memperbaiki custom code otomatis?
Sebagian, sebagai bantuan — bukan pengganti keputusan arsitektur. Mulai SAP BTP ABAP environment 2602, SAP Joule for Developers menambah fitur ATC Explain yang menjelaskan temuan dan mengusulkan resolusi. SAP juga merilis Mass S/4 Custom Code Conversion Agent pada Q2 2026 yang memperbaiki temuan ATC secara massal memakai aturan deterministik atau perbaikan hasil AI. Namun keputusan strategis — objek mana di-retire atau ditulis ulang ke ABAP Cloud — tetap perlu penilaian arsitek.

### Berapa lama proses remediasi custom code biasanya berlangsung?
Durasinya bergantung volume dan usia sistem, jadi hindari janji angka pasti. Yang penting: langkah paling menentukan justru dimulai lebih awal — SAP menyarankan mengumpulkan usage data minimal satu tahun sebelum konversi agar kode tidur teridentifikasi. Semakin banyak custom code yang dipensiunkan di tahap awal, semakin kecil lingkup adaptasi, testing, dan biaya. Analisis ATC sendiri bisa dijalankan berulang kali sepanjang persiapan.

## Data tables for the writer (if the article calls for one)

### Kerangka keputusan per objek custom code (refactor / retire / recode)
| Sinyal objek | Refactor (perbaiki) | Retire (pensiunkan) | Recode (tulis ulang) |
|---|---|---|---|
| Frekuensi pakai (usage data) | Sering dipakai | Tidak pernah dieksekusi ≥1 tahun | Sering dipakai |
| Temuan ATC | Sedikit / ada quick fix | Tidak relevan | Banyak / struktural berat |
| Kepatuhan clean core | Bisa dibuat compliant | — | Melanggar (akses tabel internal/modifikasi) |
| Fungsi standar S/4HANA | Belum ada padanan | Sudah usang/duplikatif | Sudah ada padanan / lebih baik pindah ke BTP |
| Tindakan | Sesuaikan + quick fix ATC | Hapus via deletion transport | Bangun ulang di ABAP Cloud / side-by-side BTP |

### Tiga jalur ekstensibilitas clean core (ke mana kustomisasi dipindah)
| Aspek | Key-user (in-app) | Developer (ABAP Cloud) | Side-by-side (SAP BTP) |
|---|---|---|---|
| Siapa | Business expert (low/no-code) | Developer ABAP | Developer (ABAP Cloud/CAP/low-code) |
| Kopling ke inti | On-stack, ringan | On-stack, tightly-coupled | Loosely-coupled, platform terpisah |
| Upgrade-stable? | Ya | Ya (pakai released API) | Ya |
| Cocok untuk | Field/logika "last mile" | Ekstensi ABAP yang perlu dekat inti | Aplikasi/integrasi besar, UI kustom, workflow |

### Konteks deadline maintenance (pendorong urgensi)
| Fase | Periode | Catatan |
|---|---|---|
| Mainstream maintenance Business Suite 7 (ECC EhP 6–8) | s.d. akhir 2027 | Tanpa biaya tambahan |
| Extended maintenance | 2028 – akhir 2030 | Premium +2 poin persentase |
| Customer-Specific Maintenance | setelah 2030 | Hanya perbaikan masalah yang sudah diketahui |
| Innovation commitment S/4HANA | s.d. akhir 2040 | Selalu ada ≥1 rilis dalam maintenance |

## Edge cases & nuance

- **"Angkut semua" adalah jebakan termahal.** Godaan lift-and-shift seluruh custom code memperbesar footprint, effort testing, dan risiko — padahal sebagian besar mungkin kode tidur. Retire lebih dulu, baru adaptasi. (Ini inti H2 #5.)
- **Retire bukan tanpa risiko.** Usage data satu tahun bisa melewatkan proses tahunan langka (mis. audit khusus, proses regulasi bertahun sekali). Rekomendasi: verifikasi kandidat retire dengan pemilik proses bisnis, jangan hanya percaya log.
- **Key-user extensibility "clean core" tapi bukan ABAP Cloud.** Ada nuansa: key-user extensibility termasuk clean core, namun secara teknis tidak identik dengan package ABAP Cloud. Writer sebaiknya menyebut ketiganya sebagai "jalur clean core" tanpa mengklaim semuanya adalah ABAP Cloud. (Lihat Flag ⚠️4.)
- **Recode kadang lebih murah dari refactor.** Untuk objek dengan banyak temuan struktural atau yang melanggar clean core (akses tabel internal, modifikasi objek SAP), menulis ulang di ABAP Cloud/BTP bisa lebih murah jangka panjang daripada menambal terus-menerus. Ini poin "honest" yang membedakan artikel dari kompetitor.
- **AI bukan tombol ajaib.** Custom Code Migration Agent mempercepat perbaikan temuan ATC, tetapi keputusan retire/recode dan desain clean core tetap keputusan manusia. Framing artikel: AI mengangkat beban mekanis, arsitek memegang kemudi.
- **BP remapping menyentuh lebih dari master data.** Selain KNA1/LFA1, remapping BP berdampak pada interface, laporan custom, dan enhancement yang mengasumsikan struktur lama — cakupannya sering lebih luas dari perkiraan awal.

## Flags (open factual risk)

- ⚠️ **1 — Proporsi custom code tak terpakai**: sumber SAP menyebut angka berbeda (**30–60%** selama >15 tahun; **"lebih dari 60%"** dalam analisis lain; praktisi menyebut **60–75%**). → **Rekomendasi**: tulis sebagai rentang dengan atribusi ("menurut statistik SAP, sekitar 30–60% — bahkan bisa lebih — custom code di sistem produktif tidak pernah dieksekusi"). JANGAN mengunci satu angka tunggal atau menyebut "60%" tanpa kata "lebih dari/hingga".
- ⚠️ **2 — Klaim "auto-fix" oleh Joule/Agent**: Mass S/4 Custom Code Conversion Agent memang "memperbaiki temuan ATC secara massal" (deterministic rules atau AI-generated fixes), tetapi memframe-nya sebagai perbaikan **otomatis penuh tanpa review** berlebihan. → **Rekomendasi**: sebut "memperbaiki temuan ATC secara massal dengan pengawasan developer", tekankan human-in-the-loop. Rilis **Q2 2026** — writer boleh sebut "sudah tersedia sejak 2026" (sesuai tanggal artikel 2026-07).
- ⚠️ **3 — Versi BTP ABAP environment (2602)**: penomoran rilis SAP cloud (mis. 2602 = Feb 2026) berubah cepat. → **Rekomendasi**: writer boleh menyebut "sejak rilis 2026" tanpa mengunci nomor teknis "2602" di badan artikel untuk audiens CIO; nomor disimpan sebagai referensi.
- ⚠️ **4 — Key-user extensibility vs ABAP Cloud**: keduanya "clean core" tetapi tidak identik secara teknis. → **Rekomendasi**: bingkai sebagai tiga "jalur clean core" (key-user, developer/ABAP Cloud, side-by-side BTP); hindari menyatakan "key-user extensibility adalah ABAP Cloud".
- ⚠️ **5 — Daftar transaksi lama (XD01/XK01/FD01/FK01)**: kombinasi transaksi bergantung modul dan konteks. → **Rekomendasi**: sebut sebagai contoh ("misalnya transaksi seperti XD01/XK01"), bukan daftar exhaustive yang harus dipetakan.
- ⚠️ **6 — Versi Custom Code Migration Guide**: SERP menampilkan banyak versi (2020–2026). Versi terbaru yang dikonfirmasi: **2025.001, cover date 2026-02-25**. → **Rekomendasi**: jika writer menautkan guide, gunakan URL versi 2025.001 dan sebut "panduan resmi SAP (edisi 2026)". Isi PDF tidak bisa di-parse via WebFetch (biner), tetapi fakta inti dikonfirmasi lewat ringkasan pencarian SAP Help + Custom Code Migration app docs.

## Definition snippet draft (40–60 words)

> Remediasi custom code adalah proses menyaring dan menyesuaikan kode kustom ABAP agar kompatibel dengan SAP S/4HANA sebelum migrasi ke cloud. Dengan ABAP Test Cockpit (ATC), Simplification Database, dan data pemakaian, tiap objek diputuskan untuk diperbaiki, dipensiunkan, atau ditulis ulang — mengikuti prinsip clean core agar upgrade berikutnya tetap aman.
