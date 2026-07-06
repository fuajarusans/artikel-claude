---
brief_id: "sap-clean-core-05"
researcher_run_date: "2026-06-02"
sources_cited: 14
flags: 4
---

# Research Dossier: Clean Core SAP — Dampaknya pada Pilihan Brownfield vs Greenfield

## TL;DR untuk penulis

- **Tiga pendekatan migrasi S/4HANA**: brownfield (system conversion — data & konfigurasi lama dibawa), greenfield (implementasi baru dari nol, fit-to-standard), dan *selective data transition* (hibrida: pilih data/proses yang dibawa). SAP menggunakan istilah resmi "Selective Data Transition (SDT)" — bukan "bluefield"; istilah "bluefield" beredar luas di komunitas dan tulisan partner SAP tetapi BUKAN istilah resmi SAP.
- **Tenggat kritis**: SAP ECC / Business Suite 7 *mainstream maintenance* berakhir **31 Desember 2027**; *optional extended maintenance* tersedia dengan biaya tambahan +2% hingga akhir 2030. Ini driver urgency yang harus akurat di artikel.
- **RISE vs GROW**: RISE with SAP = untuk existing SAP base yang bermigrasi ke S/4HANA Cloud Private Edition (mendukung brownfield maupun greenfield). GROW with SAP = untuk midsize companies/unit baru dengan greenfield deployment di S/4HANA Cloud Public Edition. Diferensiasi ini aktual per pertengahan 2026 per SAP Learning.
- **Kondisi clean core menentukan beban migrasi**: sistem dengan ratusan objek kode-Z aktif memiliki biaya remediasi dan risiko yang jauh lebih tinggi dalam pendekatan brownfield — ini variabel yang sering diabaikan dari kalkulasi TCO. Greenfield tidak otomatis bersih: disiplin fit-to-standard dan governance pasca go-live yang menentukan.
- **Soltius anchor**: ERP Strategy + Migration service — framing sebagai mitra yang mendampingi evaluasi pendekatan, bukan hanya eksekutor teknis. Maks 3 penyebutan.

---

## Core facts (verified)

> **Claim**: SAP ECC (Business Suite 7 termasuk SAP ERP 6.0) akan mengakhiri *mainstream maintenance* pada 31 Desember 2027.
> **Number/specific**: Mainstream maintenance berakhir 31 Desember 2027 untuk SAP Business Suite 7 (termasuk ECC EhP 0–8). Untuk EhP 0–5, mainstream maintenance berakhir lebih awal (31 Desember 2025). Opsi *optional extended maintenance* tersedia 2028–2030 dengan surcharge +2%.
> **Source**: SAP Support Portal — Maintenance Strategy, "Innovation Commitment for SAP S/4HANA until 2040" (https://support.sap.com/en/release-upgrade-maintenance/maintenance-information/maintenance-strategy/s4hana-business-suite7.html); juga dikonfirmasi SAP Community blog "Maintenance Timelines for SAP ERP 6.0" (https://community.sap.com/t5/enterprise-resource-planning-blog-posts-by-sap/maintenance-timelines-for-sap-erp-6-0/ba-p/13524564). Diakses 2026-06-02.
> **Confidence**: high

> **Claim**: Terdapat tiga pendekatan resmi migrasi ke SAP S/4HANA dari SAP ECC.
> **Number/specific**: (1) System Conversion (brownfield) — konversi teknis sistem ECC yang ada; (2) New Implementation (greenfield) — implementasi baru dari awal; (3) Selective Data Transition (SDT) — hibrida selektif. SAP menyebut SDT, bukan "bluefield," sebagai istilah resmi dalam dokumentasi dan support program.
> **Source**: SAP Support Portal — "Selective Data Transition Engagement" (https://support.sap.com/en/offerings-programs/support-services/data-management-landscape-transformation/selective-data-transition-engagement.html); SAP Community — "System Conversion to SAP S/4HANA" (https://community.sap.com/t5/technology-blog-posts-by-sap/system-conversion-to-sap-s-4hana/ba-p/14322484). Diakses 2026-06-02.
> **Confidence**: high

> **Claim**: Istilah "bluefield" BUKAN istilah resmi SAP — ini istilah industri/partner yang populer di komunitas.
> **Number/specific**: Beberapa blog SAP Community oleh anggota dan partner SAP menggunakan "bluefield" sebagai sinonim Selective Data Transition (SDT). SAP sendiri secara resmi menggunakan "Selective Data Transition (SDT)" atau "Shell Conversion" sebagai sub-metode.
> **Source**: SAP Community — "Choosing the Right Path for Your S/4HANA Transformation: Greenfield, Brownfield, or Bluefield?" (https://community.sap.com/t5/financial-management-blog-posts-by-members/choosing-the-right-path-for-your-s-4hana-transformation-greenfield/ba-p/13877169); SAP Support Portal SDT (URL di atas). Diakses 2026-06-02.
> **Confidence**: high — penulis harus jelaskan "selective data transition (sering disebut 'bluefield' dalam komunitas SAP)" dan tidak mengklaim ini istilah resmi SAP tanpa tanda kutip.

> **Claim**: SAP Software Update Manager (SUM) dengan Database Migration Option (DMO) adalah tool utama untuk System Conversion (brownfield).
> **Number/specific**: SUM dengan opsi DMO memungkinkan SAP dikonversi dan dipindah ke database HANA secara bersamaan dalam satu downtime window, mengurangi durasi total downtime teknis.
> **Source**: SAP Community — "System Conversion to SAP S/4HANA" (https://community.sap.com/t5/technology-blog-posts-by-sap/system-conversion-to-sap-s-4hana/ba-p/14322484); SAP dokumentasi SUM/DMO (help.sap.com). Diakses 2026-06-02.
> **Confidence**: high

> **Claim**: RISE with SAP diposisikan untuk pelanggan SAP yang ada (existing base) yang bermigrasi ke S/4HANA Cloud Private Edition, mendukung brownfield maupun greenfield.
> **Number/specific**: RISE with SAP = S/4HANA Cloud Private Edition + BTP + services; fleksibel: bisa brownfield system conversion atau greenfield deployment; target = perusahaan besar/enterprise dengan kebutuhan kompleks.
> **Source**: SAP Learning Journey — "Overview of GROW and RISE with SAP" (https://learning.sap.com/learning-journeys/develop-extensions-using-sap-s-4hana-cloud-abap-environment/overview-of-grow-and-rise-with-sap_da1007dd-83a6-495e-b232-9a0c1073a800). Diakses 2026-06-02.
> **Confidence**: high

> **Claim**: GROW with SAP diposisikan untuk perusahaan midsize atau unit bisnis baru yang ingin go-live cepat dengan implementasi greenfield di S/4HANA Cloud Public Edition.
> **Number/specific**: GROW with SAP = S/4HANA Cloud Public Edition; fokus greenfield ("clean system"); target = midsize/growing companies; bisa go-live secepat 4 minggu (untuk scope sangat terbatas); tidak mengandung bundling layanan selengkap RISE.
> **Source**: SAP Learning Journey — "Overview of GROW and RISE with SAP" (URL di atas); SAP Learning — "Differentiating GROW and RISE with SAP" (https://learning.sap.com/courses/exploring-sap-cloud-erp/differentiating-grow-and-rise-with-sap). Diakses 2026-06-02.
> **Confidence**: high

> **Claim**: SAP S/4HANA Cloud Public Edition (GROW) memiliki persyaratan clean core yang lebih ketat dibanding Private Edition (RISE).
> **Number/specific**: Public Edition berjalan di infrastruktur SAP bersama dan mengandalkan fit-to-standard — tidak mengizinkan modifikasi core ABAP. Private Edition lebih fleksibel dalam hal extensibility tapi tetap mendorong clean core.
> **Source**: SAP Community — "SAP S/4HANA Migration Strategies (Greenfield/Brownfield/Hybrid)" (https://community.sap.com/t5/enterprise-resource-planning-blog-posts-by-members/sap-s-4hana-migration-strategies-greenfield-brownfield-hybrid-comparison/ba-p/13451694); SAP Learning — "Differentiating GROW and RISE with SAP" (URL di atas).
> **Confidence**: high

> **Claim**: Pendekatan brownfield (System Conversion) mempertahankan data historis, konfigurasi, dan kode Z yang ada; kode Z harus diremediasi agar kompatibel dengan SAP S/4HANA (ABAP Cloud).
> **Number/specific**: Semua objek kode-Z dan modifikasi core dibawa ke S/4HANA dalam system conversion. SAP mensyaratkan compatibility check (via SAP Readiness Check / Custom Code Migration Worklist) untuk mengidentifikasi kode yang perlu diadaptasi ke ABAP Cloud atau dipindah ke BTP.
> **Source**: SAP Community — "SAP Brownfield Migration: Successful transition to SAP S/4HANA" (https://community.sap.com/t5/enterprise-resource-planning-blog-posts-by-members/sap-brownfield-migration-successful-transition-to-sap-s-4hana/ba-p/14042024); SAP Community — "System Conversion to SAP S/4HANA" (URL di atas).
> **Confidence**: high

> **Claim**: Pendekatan greenfield (New Implementation) tidak secara otomatis menghasilkan clean core — clean core adalah hasil tata kelola dan disiplin fit-to-standard, bukan hasil otomatis dari pilihan pendekatan migrasi.
> **Number/specific**: Perusahaan yang bermigrasi greenfield tapi mempertahankan kebiasaan customization lama — membangun kode Z baru di dalam core alih-alih di BTP — akan mengakumulasi technical debt baru. Tanpa governance clean core, sistem greenfield bisa "kotor" kembali dalam beberapa tahun pasca go-live.
> **Source**: SAP Community — "Choosing Between Brownfield and Greenfield: A Strategic Guide for SAP S/4HANA Migration" (https://community.sap.com/t5/enterprise-architecture-blog-posts/choosing-between-brownfield-and-greenfield-a-strategic-guide-for-sap-s/ba-p/13914233). Domain knowledge SAP, dikonfirmasi oleh pola lapangan di komunitas SAP.
> **Confidence**: high

> **Claim**: Selective Data Transition (SDT) hampir selalu lebih mahal dari pendekatan brownfield murni, karena membutuhkan pemetaan data selektif yang lebih kompleks.
> **Number/specific**: SAP Community sources menyebutkan SDT "nearly always costs more than a brownfield approach" — faktor biaya tambahan: kompleksitas data mapping selektif, durasi proyek lebih panjang, kebutuhan tooling (SAP Business Transformation Center/BTC).
> **Source**: SAP Community — "Is Selective Data Transition the Best Fit for Your SAP S/4HANA Migration?" (https://community.sap.com/t5/enterprise-resource-planning-q-a/is-selective-data-transition-the-best-fit-for-your-sap-s-4hana-migration/qaq-p/14126275); SAP Community — "Selective Data Transition Made Simple" (https://community.sap.com/t5/enterprise-resource-planning-q-a/selective-data-transition-made-simple-a-new-take-on-sap-s-4hana-moves/qaq-p/14151776).
> **Confidence**: medium-high — angka pasti tidak tersedia publik; framing sebagai tren umum, bukan klaim kuantitatif.

> **Claim**: SAP memperkenalkan Business Transformation Center (BTC) sebagai platform cloud yang membantu standardisasi dan streamlining SDT.
> **Number/specific**: SAP BTC = cloud-based tooling untuk SDT, dirilis dalam periode 2024–2025. Membantu pemetaan data, validasi, dan monitoring selama selective migration.
> **Source**: SAP Community — "Selective Data Transition Made Simple" (https://community.sap.com/t5/enterprise-resource-planning-q-a/selective-data-transition-made-simple-a-new-take-on-sap-s-4hana-moves/qaq-p/14151776). Diakses 2026-06-02.
> **Confidence**: medium — konfirmasi nama dan scope BTC dari SAP official sangat disarankan; bisa juga disebut sebagai "tooling pendukung SDT dari SAP" tanpa bergantung pada nama BTC.

> **Claim**: Soltius Indonesia adalah SAP Platinum Certified Channel Partner, anggota United VARs (45 top VAR, 90+ negara), beroperasi sejak 1998, bagian dari Metrodata Group.
> **Number/specific**: 200+ konsultan, 120+ klien, kontributor pendapatan terbesar SAP Indonesia sejak 2015.
> **Source**: `knowledge_base/company_profile.md` (pre-approved, citeable).
> **Confidence**: high

> **Claim**: Brownfield (system conversion) biasanya memiliki durasi proyek lebih pendek dari greenfield karena tidak membutuhkan re-design proses bisnis dari nol.
> **Number/specific**: Tidak ada angka publik resmi dari SAP atau analis independen tentang rata-rata durasi brownfield vs greenfield yang dapat dikutip. Pola lapangan umum: brownfield 9–18 bulan (tergantung kompleksitas), greenfield 12–24 bulan (tergantung scope re-design proses). Angka ini adalah estimasi lapangan — BUKAN data SAP/Gartner/IDC resmi yang dapat diverifikasi.
> **Source**: Domain knowledge SAP ekosistem; berbagai SAP Community discussions. Tidak ada angka resmi yang terpublikasi dari SAP atau Gartner/IDC untuk dikutip.
> **Confidence**: low untuk angka spesifik; medium untuk framing "brownfield umumnya lebih cepat dari greenfield untuk scope setara"
> ⚠️ FLAG: lihat bagian Flags di bawah.

> **Claim**: Clean core terdiri dari empat dimensi utama: Process (fit-to-standard), Data (data quality), Integration (standar API/event), dan Extensibility (ABAP Cloud + BTP side-by-side).
> **Number/specific**: Framework clean core SAP mencakup dimensi-dimensi ini, terhubung ke SAP BTP sebagai platform ekstensi standar.
> **Source**: SAP clean-core guidance (sap.com/clean-core); dikonfirmasi di dossier `sap-clean-core-01` (2026-06-02). Domain knowledge SAP.
> **Confidence**: high

---

## Solution focus + Soltius anchor (dari product_matrix.md)

| Yang diajarkan (SAP/partner tech) | Fakta yang harus dinyatakan akurat | Di mana dalam artikel | Soltius service/credential anchor |
|---|---|---|---|
| System Conversion (Brownfield) via SAP SUM + DMO | Membawa data historis & konfigurasi; kode Z dibawa dan harus diremediasi ke ABAP Cloud kompatibel; lebih cepat tapi beban technical debt dibawa | H2 #1 (definisi) + H2 #3 (skenario kode Z) | ERP Strategy + Migration service |
| New Implementation (Greenfield) dengan fit-to-standard | Implementasi S/4HANA baru; proses bisnis disesuaikan ke standar SAP; kode Z ditinggal/dibangun ulang di BTP; lebih bersih tapi butuh re-design proses bisnis | H2 #1 (definisi) + H2 #4 (greenfield tidak otomatis bersih) | ERP Strategy; framing fit-to-standard |
| Selective Data Transition / SDT ("bluefield") | Istilah industri untuk SDT resmi SAP; lebih mahal dari brownfield; cocok untuk merger/carve-out atau partial modernization; SAP BTC sebagai tooling pendukung | H2 #1 (definisi ringkas) | SAP Platinum expertise untuk kompleksitas SDT |
| RISE with SAP (Private Edition) | Untuk perusahaan besar; mendukung brownfield dan greenfield; bundle S/4HANA Cloud Private + BTP + services | H2 tabel keputusan (kolom rekomendasi) | Soltius sebagai mitra RISE |
| GROW with SAP (Public Edition) | Untuk midsize/unit baru; greenfield only; fit-to-standard ketat; public edition = persyaratan clean core paling tinggi | H2 tabel keputusan + H2 #5 (kapan brownfield lebih cerdas) | Terkait counter-konvensional |
| SAP ECC end-of-maintenance | Mainstream maintenance 31 Des 2027; extended optional +2% fee hingga 2030 | H2 definitional (konteks urgency) | Migration urgency driver |
| ABAP Cloud + SAP BTP side-by-side | Cara standar extend S/4HANA setelah migrasi tanpa mengotori core | H2 #3 (skenario kode Z) | Link ke Low-Code cluster |

**Reminder**: Soltius **mengimplementasikan/memigrasikan/mendampingi** — tidak membangun SAP. Maks 2–3 penyebutan Soltius.

---

## Authoritative external sources (≥2 kuat, untuk penulis)

1. **SAP Support Portal — Maintenance Strategy & S/4HANA commitment** (diakses 2026-06-02) — https://support.sap.com/en/release-upgrade-maintenance/maintenance-information/maintenance-strategy/s4hana-business-suite7.html — *mendukung*: tanggal ECC mainstream maintenance 2027, extended maintenance 2030, dan SAP S/4HANA commitment hingga 2040.

2. **SAP Support Portal — Selective Data Transition Engagement** (diakses 2026-06-02) — https://support.sap.com/en/offerings-programs/support-services/data-management-landscape-transformation/selective-data-transition-engagement.html — *mendukung*: istilah resmi SAP untuk "bluefield" adalah Selective Data Transition (SDT); scope dan metode resmi.

3. **SAP Learning Journey — Overview of GROW and RISE with SAP** (diakses 2026-06-02) — https://learning.sap.com/learning-journeys/develop-extensions-using-sap-s-4hana-cloud-abap-environment/overview-of-grow-and-rise-with-sap_da1007dd-83a6-495e-b232-9a0c1073a800 — *mendukung*: diferensiasi RISE vs GROW, target audiens, cloud edition masing-masing.

4. **SAP Community — "System Conversion to SAP S/4HANA"** (SAP-authored blog, diakses 2026-06-02) — https://community.sap.com/t5/technology-blog-posts-by-sap/system-conversion-to-sap-s-4hana/ba-p/14322484 — *mendukung*: definisi, tool (SUM/DMO), proses system conversion (brownfield).

5. **SAP Community — "Choosing Between Brownfield and Greenfield: A Strategic Guide"** (community blog, diakses 2026-06-02) — https://community.sap.com/t5/enterprise-architecture-blog-posts/choosing-between-brownfield-and-greenfield-a-strategic-guide-for-sap-s/ba-p/13914233 — *mendukung*: framework keputusan brownfield vs greenfield, termasuk perspektif bahwa greenfield tidak otomatis menghasilkan clean core.

> **Catatan untuk penulis**: untuk kutipan outbound di artikel, prioritaskan sumber SAP official (no. 1 dan 2 di atas). Sumber komunitas SAP (no. 4, 5) dapat digunakan sebagai backing untuk framing praktis. Untuk data pasar/adopsi (berapa % perusahaan memilih brownfield vs greenfield), tidak ada angka publik dari Gartner/IDC yang tersedia saat research run ini — lihat Flags.

---

## FAQ Q&As (7 disusun, Bahasa Indonesia)

### Apa bedanya brownfield dan greenfield dalam migrasi SAP S/4HANA?

Brownfield (disebut juga *system conversion*) adalah konversi sistem SAP ECC yang ada ke S/4HANA sambil mempertahankan data historis, konfigurasi, dan kustomisasi. Greenfield (*new implementation*) adalah implementasi S/4HANA baru dari awal dengan pendekatan *fit-to-standard*: proses bisnis disesuaikan ke best practice SAP, bukan sebaliknya. Brownfield umumnya lebih cepat dan murah di awal, sedangkan greenfield memberi kesempatan modernisasi proses yang lebih dalam.

### Apa itu Selective Data Transition (SDT) atau "bluefield" SAP?

Selective Data Transition (SDT) adalah pendekatan hibrida resmi dari SAP: perusahaan melakukan konversi sistem ECC ke S/4HANA baru sambil hanya memilih data dan proses bisnis tertentu yang dibawa, meninggalkan data lama atau proses yang tidak relevan. Istilah "bluefield" populer di komunitas SAP sebagai sinonim SDT, namun istilah resmi SAP adalah Selective Data Transition. SDT cocok untuk skenario merger, carve-out, atau modernisasi parsial, tetapi biasanya lebih mahal dari brownfield murni.

### Bagaimana kondisi clean core mempengaruhi pilihan brownfield vs greenfield?

Kondisi clean core sangat menentukan beban dan risiko dalam brownfield. Sistem dengan ratusan objek kode Z aktif dan modifikasi inti membutuhkan proses remediasi panjang sebelum go-live S/4HANA — memperpanjang durasi dan meningkatkan biaya proyek brownfield. Sistem dengan core yang sudah relatif standar dapat memanfaatkan brownfield lebih efisien. Sebaliknya, jika core sangat "kotor" dan proses bisnis perlu dirancang ulang, greenfield bisa menjadi titik awal yang lebih bersih — meski bukan jaminan tanpa disiplin governance.

### Apakah greenfield SAP S/4HANA selalu lebih baik dari brownfield?

Tidak selalu. Greenfield menawarkan start bersih, tapi membutuhkan re-design proses bisnis yang memakan waktu dan investasi besar. Lebih kritis: greenfield tidak otomatis menghasilkan clean core permanen. Jika budaya pengembangan tidak berubah — tim tetap membangun kode Z di dalam core alih-alih di SAP BTP — sistem greenfield akan mengakumulasi technical debt baru. Clean core adalah kebiasaan tata kelola, bukan hadiah otomatis dari pendekatan migrasi.

### Berapa lama estimasi waktu migrasi brownfield vs greenfield ke SAP S/4HANA?

Tidak ada angka resmi dari SAP yang dipublikasikan secara universal, karena durasi sangat bergantung pada kompleksitas sistem, jumlah kustomisasi, scope proses bisnis, dan kesiapan tim. Sebagai panduan lapangan: brownfield biasanya membutuhkan 9–18 bulan (tergantung jumlah kode Z yang harus diremediasi), sementara greenfield dengan re-design proses bisnis cenderung 12–24 bulan atau lebih. Angka ini adalah estimasi dari pola lapangan dan perlu dikalibrasi per kondisi spesifik perusahaan.

### Apa yang terjadi pada kode Z saat memilih pendekatan greenfield?

Dalam implementasi greenfield, semua kode Z yang ada ditinggal — tidak dibawa ke sistem S/4HANA baru. Fungsionalitas yang masih dibutuhkan harus dibangun ulang menggunakan standar modern: baik melalui *key-user extensibility* (konfigurasi tanpa kode), maupun melalui SAP BTP dengan ABAP Cloud atau SAP Build, bukan dengan modifikasi langsung di dalam core S/4HANA. Ini peluang untuk membersihkan akumulasi kustomisasi yang tidak terdokumentasi, sekaligus memaksa tim untuk mengevaluasi ulang apakah setiap kustomisasi benar-benar masih dibutuhkan.

### Apa risiko utama migrasi brownfield jika core sudah sangat banyak kustomisasi?

Risiko utama brownfield pada sistem dengan core yang sangat customized adalah: (1) biaya dan waktu remediasi kode Z yang underestimated — Custom Code Migration Worklist dapat menemukan ribuan objek yang perlu diadaptasi; (2) risiko regresi fungsional pasca konversi karena kode lama tidak kompatibel dengan ABAP Cloud; (3) utang teknis yang "dibawa" ke S/4HANA, artinya upgrade di masa depan tetap mahal. Tanpa penilaian technical debt yang realistis sebelum migrasi, timeline dan anggaran brownfield mudah jebol.

---

## Data tables untuk penulis

### Tabel keputusan: kondisi clean core × pendekatan migrasi yang disarankan

| Kondisi clean core saat ini | Rekomendasi pendekatan | Pertimbangan utama | Program SAP yang relevan |
|---|---|---|---|
| **Rendah** — banyak kode Z aktif, modifikasi core luas, technical debt tinggi | Brownfield bertahap (konversi → remediasi bertahap) ATAU Selective Data Transition (SDT) jika proses bisnis perlu dipisah | Remediasi kode Z bisa jadi item biaya terbesar; brownfield "langsung" berisiko mewarisi technical debt ke S/4HANA | RISE with SAP (Private Edition) |
| **Sedang** — beberapa kustomisasi inti, mayoritas proses bisnis sudah relatif standar | Brownfield dengan cleanup pre-migration ATAU greenfield jika ada appetite re-design | Perlu Readiness Check sebelum memutuskan; audit kode Z dulu | RISE with SAP (bisa brownfield atau greenfield) |
| **Tinggi** — core sudah relatif standar, sedikit atau tidak ada modifikasi inti | Greenfield ATAU brownfield cepat | Brownfield bisa lebih efisien karena sedikit remediasi; greenfield cocok jika ada re-design proses bisnis strategis | RISE with SAP atau GROW with SAP (tergantung skala dan cloud edition) |
| **Unit baru / startup** | Greenfield dengan fit-to-standard ketat | Tidak ada legacy; kesempatan terbaik untuk clean core dari hari pertama | GROW with SAP (Public Edition) |

*Catatan: tabel ini adalah panduan, bukan keputusan mutlak. Anggaran, timeline, toleransi disruption operasional, dan kesiapan tim juga berperan.*

### Perbandingan tiga pendekatan migrasi SAP S/4HANA

| Aspek | Brownfield (System Conversion) | Greenfield (New Implementation) | Selective Data Transition (SDT / "Bluefield") |
|---|---|---|---|
| Data historis | Dibawa semua | Tidak dibawa (mulai bersih) | Dipilih secara selektif |
| Kode Z | Dibawa + wajib diremediasi | Ditinggal / dibangun ulang di BTP | Dipilih mana yang dibawa |
| Proses bisnis | Dipertahankan (dengan penyesuaian minimal) | Dirancang ulang (fit-to-standard) | Selektif per modul |
| Durasi estimasi* | 9–18 bulan | 12–24 bulan+ | 12–24+ bulan (biasanya lebih lama dari brownfield) |
| Biaya relatif | Lebih rendah di awal | Lebih tinggi (re-design proses) | Tertinggi (kompleksitas pemetaan data) |
| Risiko utama | Warisan technical debt | Re-design gagal / timeline jebol | Kompleksitas, biaya lebih tinggi dari ekspektasi |
| Cocok untuk | Perusahaan yang ingin migrasi cepat dengan gangguan minimal | Perusahaan yang ingin modernisasi total & clean start | Merger, carve-out, atau modernisasi parsial |
| Program SAP | RISE with SAP | RISE atau GROW with SAP | RISE with SAP |

*\*Estimasi lapangan — tidak ada angka resmi SAP/Gartner yang terpublikasi secara universal. Harus dibingkai sebagai estimasi dan dikalibrasi per kondisi.*

---

## Edge cases & nuance

- **Brownfield bukan "jalan mudah"**: banyak perusahaan masuk brownfield karena asumsi "lebih mudah dan murah", tapi menemukan bahwa remediasi kode Z memakan sebagian besar proyek. Realistisnya, custom code analysis via SAP Readiness Check perlu dilakukan *sebelum* memutuskan pendekatan.
- **Greenfield tidak = clean core otomatis**: ini counter-intuitif dan penting untuk di-highlight. Tim yang tidak berubah kebiasaannya akan membangun kode Z baru di dalam S/4HANA, mengulangi siklus yang sama. Governance dan pelatihan ABAP Cloud/BTP adalah kunci.
- **SDT cocok untuk situasi spesifik**: merger, divestasi/carve-out, atau saat perusahaan ingin "mulai bersih" untuk proses tertentu sambil mempertahankan data historis di modul lain. Bukan solusi universal.
- **GROW with SAP hanya untuk public edition**: tidak bisa digunakan untuk skenario yang membutuhkan private cloud atau modifikasi platform. Ini sering disalahpahami.
- **Tenggat ECC berbeda per EhP**: EhP 0–5 mainstream maintenance sudah berakhir 31 Desember 2025; EhP 6–8 dan Business Suite 7 lainnya berakhir 31 Desember 2027. Penulis harus menggunakan framing "Business Suite 7 / ECC EhP 6–8 mainstream maintenance berakhir akhir 2027" untuk akurasi.
- **Extended maintenance 2028–2030 tidak gratis**: surcharge +2% dari maintenance fee tahunan; ini relevan untuk argumen TCO bahwa menunda migrasi ada harganya.
- **"Hybrid" atau pendekatan bertahap**: beberapa perusahaan besar melakukan brownfield untuk core financials dulu, lalu greenfield untuk divisi baru. Ini bukan satu kategori resmi tapi pola lapangan yang valid — penulis bisa menyebutnya sebagai "pendekatan bertahap".

---

## Flags (risiko faktual terbuka)

- ⚠️ **FLAG 1 — Durasi migrasi (angka spesifik)**: Brief meminta data tentang durasi tipikal brownfield vs greenfield. Tidak ada angka resmi yang dipublikasikan SAP, Gartner, atau IDC yang dapat dikutip dari web search run ini. Angka 9–18 bulan (brownfield) dan 12–24 bulan (greenfield) dalam tabel di atas adalah estimasi domain knowledge/pola lapangan, BUKAN data analis yang dapat dikutip. → **Rekomendasi**: bingkai eksplisit sebagai estimasi lapangan dengan kalimat seperti "dalam pengalaman lapangan, brownfield umumnya membutuhkan 9–18 bulan tergantung kompleksitas kode Z" — JANGAN kutip sebagai data SAP/Gartner.

- ⚠️ **FLAG 2 — Data adopsi brownfield vs greenfield (% perusahaan)**: Brief meminta data berapa persen perusahaan memilih brownfield vs greenfield. Tidak ada data publik resmi dari Gartner, IDC, atau SAP yang terverifikasi dalam run ini. → **Rekomendasi**: jangan klaim angka persentase. Bisa framing sebagai "banyak perusahaan existing SAP cenderung memilih brownfield karena..." tanpa angka spesifik. Jika data ini penting, disarankan Ahrefs/Gartner access saat MCP tersambung.

- ⚠️ **FLAG 3 — SAP Business Transformation Center (BTC)**: BTC disebutkan dalam SAP Community sebagai tooling untuk SDT. Nama dan scope perlu dikonfirmasi dari halaman SAP official (bukan hanya community posts). → **Rekomendasi**: sebut sebagai "tooling pendukung SDT dari SAP" tanpa bergantung pada nama spesifik "BTC" — atau jika disebutkan, atribusikan ke "SAP Community sources" dan tambahkan catatan "nama dan scope tooling dapat berubah."

- ⚠️ **FLAG 4 — ECC EhP version split**: mainstream maintenance EhP 0–5 berakhir 31 Desember 2025 (sudah lewat); EhP 6–8 dan Business Suite 7 berakhir 31 Desember 2027. Jika artikel hanya menyebut "ECC mainstream maintenance 2027", ini tidak akurat untuk pengguna EhP 0–5 yang sudah terdampak. → **Rekomendasi**: penulis menggunakan framing "SAP Business Suite 7 dan SAP ECC EhP 6–8 — mainstream maintenance berakhir akhir 2027" atau versi yang lebih umum "mayoritas pengguna ECC menghadapi tenggat 2027" dengan catatan bahwa EhP versi lebih lama sudah melewati tenggat.

---

## Definition snippet draft (40–60 kata, Bahasa Indonesia)

> *Brownfield* SAP S/4HANA adalah konversi sistem SAP ECC yang ada ke S/4HANA dengan mempertahankan data historis dan konfigurasi; *greenfield* adalah implementasi S/4HANA baru dari awal dengan pendekatan *fit-to-standard*. Kondisi *clean core* — seberapa banyak modifikasi dan kode Z dalam sistem yang ada — menjadi faktor penentu utama pendekatan mana yang lebih realistis dari sisi biaya dan risiko.

*(53 kata — sesuai target 40–60 kata; cocok untuk AIO placement di ~150 kata pertama artikel)*

---

## Notes for image-planner

- **Concept 1**: Diagram alur keputusan "kondisi clean core → pilihan pendekatan migrasi" — tiga jalur (brownfield / SDT / greenfield) dengan trigger kondisi di setiap percabangan (tingkat kustomisasi, anggaran, toleransi disruption). Format: flowchart vertical, bisa dibaca sebagai infografik standalone.
- **Concept 2**: Tabel perbandingan tiga pendekatan (brownfield / greenfield / SDT) dalam format infografik 3-kolom — setiap kolom berisi ikon + fakta kunci (data historis, kode Z, durasi, risiko). Dirancang untuk screenshot-able dan bisa beredar di LinkedIn/chat internal CIO.
- **Concept 3**: Timeline visual "urgency frame" — garis waktu ECC: mainstream maintenance berakhir akhir 2027 (EhP 6–8), extended maintenance +2% fee 2028–2030, S/4HANA cloud mandate. Ditempatkan di H2 definitional sebagai konteks urgency mengapa keputusan pendekatan migrasi harus dibuat sekarang.
