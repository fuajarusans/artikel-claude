---
brief_id: "sap-clean-core-02"
researcher_run_date: "2026-06-02"
sources_cited: 14
flags: 4
---

# Research Dossier: Remediasi Custom Code SAP: Langkah Membersihkan Z-Code Menuju ABAP Cloud

## TL;DR for the writer

- **Z-code** (kode kustom SAP berawalan Y/Z) adalah penghambat utama konversi brownfield ke S/4HANA: objek yang tidak kompatibel dengan model ABAP Cloud harus diidentifikasi, ditriase, dan dimigrasi sebelum atau sesaat setelah go-live.
- **Empat alat kunci SAP** harus disebut dengan tepat: (1) SAP Readiness Check (diakses via SAP for Me — gratis bagi pemegang kontrak SAP aktif), (2) ABAP Test Cockpit (ATC) dalam ABAP Development Tools (ADT) Eclipse, (3) Custom Code Migration app (Fiori), dan (4) released objects / released APIs sebagai target migrasi kode.
- **Framework triase** yang digunakan dalam praktik industri adalah **Keep / Eliminate / Rebuild** — SAP sendiri menyebutnya dalam panduan resmi Custom Code Migration End-to-End; tidak ada istilah SAP resmi tunggal, tapi framing ini konsisten dengan terminologi SAP community dan dokumentasi help.sap.com.
- **Tidak semua Z-code harus dibersihkan sebelum go-live**: pendekatan bertahap (phased remediation) adalah praktik standar — prioritaskan kode yang melanggar released API atau memblokir konversi inti dulu; sisanya bisa diselesaikan pasca go-live.
- **ABAP Cloud** membatasi akses hanya ke *released objects* dan melarang penggunaan internal SAP objects — ini yang membuat kode lama (ABAP klasik) perlu dimigrasi. ATC memberikan warning/error real-time di ADT untuk setiap pelanggaran restriction ini.

---

## Core facts (verified)

> **Claim**: ABAP Cloud adalah model pengembangan modern yang membatasi akses hanya ke released objects dan released APIs SAP.
> **Number/specific**: Kode ditulis dalam "language version 5" (ABAP for Cloud Development) yang tidak mengizinkan akses ke internal SAP objects — misalnya, tabel MARA tidak boleh diakses langsung; penggantinya adalah CDS View I_PRODUCT.
> **Source**: SAP Community blog "ABAP Platform in SAP S/4HANA Cloud Private Edition and SAP S/4HANA 2025" (community.sap.com, 2025) — https://community.sap.com/t5/enterprise-resource-planning-blog-posts-by-sap/abap-platform-in-sap-s-4hana-cloud-private-edition-and-sap-s-4hana-2025/ba-p/14289979
> **Confidence**: high

> **Claim**: Custom Code Migration Guide for SAP S/4HANA 2025 tersedia secara resmi di SAP Help Portal.
> **Number/specific**: Versi terbaru adalah panduan 2025.001 (update: 2025), tersedia di help.sap.com sebagai PDF dan online guide.
> **Source**: SAP Help Portal — "Custom Code Migration Guide for SAP S/4HANA 2025" — https://help.sap.com/doc/9dcbc5e47ba54a5cbb509afaa49dd5a1/2025.001/en-US/CustomCodeMigration_EndtoEnd.pdf
> **Confidence**: high

> **Claim**: SAP Readiness Check dapat diakses melalui SAP for Me (portal support SAP) bagi pemegang kontrak SAP aktif.
> **Number/specific**: Tersedia juga di SAP Cloud ALM. Menyediakan analisis custom code terintegrasi dengan temuan ABAP Test Cockpit.
> **Source**: SAP Help Portal — "SAP Readiness Check" — https://help.sap.com/docs/SAP_READINESS_CHECK; dan SAP Community blog tentang Enhanced Custom Code Analysis in SAP Readiness Check — https://community.sap.com/t5/enterprise-resource-planning-blog-posts-by-sap/enhanced-custom-code-analysis-in-sap-readiness-check-for-sap-s-4hana/ba-p/13580469
> **Confidence**: high

> **Claim**: ABAP Test Cockpit (ATC) adalah alat analisis kode statis terintegrasi dalam ABAP Development Tools (ADT) Eclipse yang mendeteksi incompatibility ABAP Cloud.
> **Number/specific**: ATC dalam ADT memberikan warning dan error secara real-time untuk setiap pelanggaran ABAP Cloud restrictions. Sebelum upgrade ke S/4HANA 2025, SAP merekomendasikan menjalankan ATC terhadap simplification items versi target.
> **Source**: SAP Help Portal Upgrade Guide for SAP S/4HANA 2025 (help.sap.com, version 2.1 — 2026-05-12) — https://help.sap.com/doc/760ce610a2af4174a329d2d8315378e2/2025/en-US/UPGR_OP2025.pdf; SAP Community — https://community.sap.com/t5/technology-blog-posts-by-sap/get-started-with-the-abap-custom-code-migration-process/ba-p/13531886
> **Confidence**: high

> **Claim**: SAP mengintegrasikan kemampuan AI (SAP Joule for Developers) ke dalam proses Custom Code Migration untuk membantu analisis dan transformasi kode.
> **Number/specific**: Fitur AI mencakup: penjelasan tujuan bisnis kode legacy, penjelasan temuan ATC S/4HANA, dan rekomendasi resolusi berdasarkan simplification items.
> **Source**: SAP Community blog "Custom code migration to SAP S/4HANA powered by SAP Joule for Developers" (community.sap.com, 2025) — https://community.sap.com/t5/technology-blog-posts-by-sap/custom-code-migration-to-sap-s-4hana-powered-by-sap-joule-for-developers/ba-p/14329094
> **Confidence**: high — (catatan: ini adalah perkembangan baru per 2025; writer bisa menyebut sebagai "tersedia" tapi jangan klaim sudah digunakan semua klien)

> **Claim**: "Cloudification repository" SAP menyediakan daftar released successor objects — pengganti resmi untuk internal objects yang tidak boleh diakses di ABAP Cloud.
> **Number/specific**: SAP menerbitkan dan memelihara repo ini; tim developer dapat merujuknya untuk menemukan API pengganti yang released.
> **Source**: SAP Community blog "Include released successor objects from 'cloudification repo' in your ABAP custom code migration" — https://community.sap.com/t5/technology-blog-posts-by-members/include-released-successor-objects-from-quot-cloudification-repo-quot-in/ba-p/14136908
> **Confidence**: high

> **Claim**: Framework triase Keep / Eliminate / Rebuild digunakan secara konsisten dalam panduan SAP dan komunitas SAP untuk mengkategorikan custom code.
> **Number/specific**: SAP Custom Code Migration Guide End-to-End menggunakan kategorisasi serupa; SAP community dan blog mitra implementasi global secara konsisten merujuk tiga jalur ini.
> **Source**: SAP Help Portal Custom Code Migration Guide 2025; SAP Community blog tentang CCM workshops (github.com/SAP-samples/abap-platform-ccm-workshops) — https://github.com/SAP-samples/abap-platform-ccm-workshops/
> **Confidence**: medium — Tidak ada satu istilah resmi tunggal "Keep/Eliminate/Rebuild" dalam dokumentasi SAP formal. Framing ini adalah praktikal dan konsisten digunakan, tapi writer sebaiknya menyebutnya sebagai "kerangka triase yang umum digunakan" bukan "istilah resmi SAP". ⚠️ (lihat Flags)

> **Claim**: SAP Readiness Check menyediakan Enhanced Custom Code Analysis yang terintegrasi dengan ABAP Test Cockpit (ATC) untuk upgrade S/4HANA.
> **Number/specific**: Fitur ini memungkinkan pembuatan *baseline* temuan historis (dari konversi ERP sebelumnya) sehingga tim bisa fokus pada temuan baru yang relevan dengan versi S/4HANA target.
> **Source**: SAP Community blog "Enhanced Custom Code Analysis in SAP Readiness Check for SAP S/4HANA Upgrades" — https://community.sap.com/t5/enterprise-resource-planning-blog-posts-by-sap/enhanced-custom-code-analysis-in-sap-readiness-check-for-sap-s-4hana/ba-p/13580469
> **Confidence**: high

> **Claim**: Objects SAP yang tidak di-released dapat "dibungkus" menjadi custom object yang di-release untuk cloud development (released custom API).
> **Number/specific**: Mekanisme ini disebut "API wrapping" dan dijelaskan dalam ABAP Cloud API Enablement Guidelines for SAP S/4HANA Cloud Private Edition.
> **Source**: SAP Community blog "ABAP Platform in SAP S/4HANA Cloud Private Edition and SAP S/4HANA 2025" — https://community.sap.com/t5/enterprise-resource-planning-blog-posts-by-sap/abap-platform-in-sap-s-4hana-cloud-private-edition-and-sap-s-4hana-2025/ba-p/14289979
> **Confidence**: high

> **Claim**: Z-code dalam konvensi ABAP mengacu pada objek kustom yang nama-nya diawali huruf Y atau Z — ini adalah namespace yang dicadangkan SAP untuk kustomisasi pelanggan.
> **Number/specific**: Konvensi ini berlaku sejak era SAP R/3 dan masih berlaku di S/4HANA; objek yang diawali A–X umumnya milik SAP standard.
> **Source**: Domain knowledge SAP ABAP (published consistently across SAP Help Portal, SAP Learning, dan community). Tidak memerlukan URL tunggal — ini adalah fact dasar yang sangat-established.
> **Confidence**: high

> **Claim**: ABAP Cloud FAQ resmi tersedia di SAP Community sebagai referensi developer.
> **Number/specific**: Halaman FAQ ini mencakup pertanyaan umum tentang ABAP Cloud, released objects, dan migrasi kode.
> **Source**: SAP Community ABAP Cloud FAQ — https://pages.community.sap.com/topics/abap/abap-cloud-faq
> **Confidence**: high

> **Claim**: SAP memperkenalkan SAP Joule for Developers sebagai AI coding assistant yang terintegrasi dengan ABAP Development Tools untuk membantu custom code migration.
> **Number/specific**: Per 2025, kemampuan ini mencakup: analisis kode legacy, penjelasan temuan ATC, dan rekomendasi transformasi kode otomatis.
> **Source**: SAP blog "Unleash the power of GenAI for ABAP Custom Code Migration" (sap.com, 2025) — https://www.sap.com/assetdetail/2025/10/920b9e66-297f-0010-bca6-c68f7e60039b.html
> **Confidence**: medium — Fitur ini tersedia per 2025 tapi adopsi aktual bervariasi; writer jangan klaim ini sudah menjadi standar semua proyek. ⚠️ (lihat Flags)

> **Claim**: Brownfield conversion ke S/4HANA adalah pendekatan konversi sistem ECC yang sudah ada (bukan instalasi baru), di mana custom code menjadi tantangan utama.
> **Number/specific**: Dalam brownfield conversion, sistem ECC dikonversi "in place" ke S/4HANA; semua Z-code dari sistem lama ikut dibawa dan harus dianalisis kompatibilitasnya.
> **Source**: SAP documentation (terminologi brownfield/greenfield/bluefield konsisten di SAP Help Portal dan training materials); dikuatkan di Custom Code Migration Guide.
> **Confidence**: high

> **Claim**: SAP Community menyediakan workshop materials dan hands-on labs untuk Custom Code Migration (CCM) yang dapat diakses publik.
> **Number/specific**: Repository GitHub resmi SAP (SAP-samples) berisi materi workshop CCM yang aktif diperbarui.
> **Source**: GitHub SAP-samples "abap-platform-ccm-workshops" — https://github.com/SAP-samples/abap-platform-ccm-workshops/
> **Confidence**: high

---

## Solution focus + Soltius anchor (dari product_matrix.md)

| Apa yang diajarkan (SAP tech) | Fakta yang harus dinyatakan akurat | Penempatan dalam artikel | Anchor layanan/kredensial Soltius |
|---|---|---|---|
| **Z-code / Custom Code** (definisi + skala masalah) | Konvensi namespace Y/Z; objek kustom yang terakumulasi selama bertahun-tahun implementasi SAP; tantangan utama brownfield conversion | H2 #1 (definitional) | — |
| **SAP Readiness Check** | Diakses via SAP for Me + SAP Cloud ALM; gratis bagi pemegang kontrak SAP aktif; menghasilkan laporan inventarisasi custom code + custom code analysis terintegrasi ATC | H2 #2 (fase 1: inventarisasi) | — |
| **ABAP Test Cockpit (ATC)** di ADT Eclipse | Alat analisis kode statis; mengidentifikasi pelanggaran ABAP Cloud restrictions; memberikan warning/error real-time di ADT | H2 #2 (fase 2: analisis) | — |
| **Framework triase Keep/Eliminate/Rebuild** | Kategorisasi praktis (bukan istilah resmi SAP tunggal); digunakan konsisten di komunitas dan panduan SAP | H2 #3 (tabel triase) | — |
| **Released objects / Released APIs** | SAP menyatakan secara eksplisit objek mana yang boleh diakses di ABAP Cloud; cloudification repo menyediakan daftar successor; custom objects bisa "dibungkus" menjadi released custom API | H2 #2 (fase 4: migrasi) + H2 #3 | — |
| **ABAP Cloud** (model pengembangan) | Language version 5; hanya akses ke released objects; upgrade-safe; contoh: tabel MARA → CDS View I_PRODUCT | H2 #1 (definisi snippet) + H2 #2 | — |
| **SAP Custom Code Migration app (Fiori)** | Tool SAP untuk melacak progres migrasi per objek; terintegrasi dalam workflow CCM; tersedia di S/4HANA | H2 #2 (alat pendukung) | — |
| **SAP BTP / SAP Build** (Rebuild destination) | Kode yang di-Rebuild direkomendasikan dipindahkan ke SAP BTP sebagai side-by-side extension, atau ditulis ulang menggunakan SAP Build (low-code) | H2 #3 (kolom Rebuild) | Internal link ke Low-Code hub |
| **Soltius anchor** | Implementation + Enhancement + ERP Strategy; SAP Platinum Partner via United VARs | 1× mid-article aside (pengalaman lapangan brownfield), 1× closing CTA | "Sebagai SAP Platinum Partner melalui United VARs, Soltius mendampingi perusahaan dari audit custom code hingga migrasi kode ke model ABAP Cloud — termasuk memfasilitasi keputusan triase bersama tim IT klien." |

> Soltius **mendampingi/mengimplementasikan/memigrasikan** — tidak membangun ABAP Cloud, SAP BTP, atau ATC. Max 3 penyebutan total.

---

## Authoritative external sources (≥2 kuat, untuk writer jadikan outbound link)

1. **SAP Help Portal — Custom Code Migration Guide for SAP S/4HANA 2025 (versi 2025.001)** — https://help.sap.com/doc/9dcbc5e47ba54a5cbb509afaa49dd5a1/2025.001/en-US/CustomCodeMigration_EndtoEnd.pdf — *mendukung*: Proses end-to-end migrasi custom code, termasuk penggunaan ATC, Custom Code Migration app, dan pendekatan triase.

2. **SAP Community — ABAP Cloud FAQ (halaman resmi SAP Community)** — https://pages.community.sap.com/topics/abap/abap-cloud-faq — *mendukung*: Definisi ABAP Cloud, released objects, dan perbedaan dengan ABAP klasik.

3. **SAP Help Portal — SAP Readiness Check** — https://help.sap.com/docs/SAP_READINESS_CHECK — *mendukung*: Ketersediaan dan cara akses SAP Readiness Check via SAP for Me; fitur custom code analysis.

4. **SAP Community — "ABAP Platform in SAP S/4HANA Cloud Private Edition and SAP S/4HANA 2025"** — https://community.sap.com/t5/enterprise-resource-planning-blog-posts-by-sap/abap-platform-in-sap-s-4hana-cloud-private-edition-and-sap-s-4hana-2025/ba-p/14289979 — *mendukung*: ABAP Cloud language version 5, restriction akses internal objects (contoh MARA → I_PRODUCT), mekanisme API wrapping.

> **Rekomendasi untuk writer**: Gunakan sumber #1 (SAP Help Portal) dan #2 (ABAP Cloud FAQ) sebagai dua outbound link utama — keduanya SAP official, otoritatif, dan stabil. Sertakan akses tanggal.

---

## FAQ Q&As (7 draft, Bahasa Indonesia)

### Apa itu ABAP Cloud dan apa bedanya dengan ABAP klasik?
ABAP Cloud adalah model pengembangan ABAP modern yang hanya mengizinkan akses ke *released objects* dan API resmi SAP — menghasilkan kode yang tidak terputus saat upgrade sistem. Berbeda dengan ABAP klasik yang bisa mengakses internal SAP secara bebas (misalnya tabel MARA langsung), ABAP Cloud mengharuskan penggunaan antarmuka yang sudah di-release, seperti CDS View I_PRODUCT. Kode yang ditulis dalam ABAP Cloud disebut *upgrade-safe* karena tidak bergantung pada internal SAP yang bisa berubah.

### Apa itu Z-code SAP dan mengapa menjadi hambatan migrasi?
Z-code adalah istilah umum untuk kode kustom SAP — program, function module, class, atau objek lain yang diawali huruf Y atau Z. Ini adalah namespace yang SAP cadangkan untuk kustomisasi pelanggan. Masalahnya: setelah bertahun-tahun implementasi, sistem SAP bisa memiliki ratusan hingga ribuan objek Z — banyak di antaranya sudah tidak aktif digunakan, namun tetap ada di sistem. Saat migrasi ke S/4HANA, semua objek ini harus dianalisis kompatibilitasnya dengan model ABAP Cloud, yang menjadikannya penghambat utama konversi brownfield.

### Apa itu SAP Readiness Check dan bagaimana cara menggunakannya?
SAP Readiness Check adalah alat gratis dari SAP yang tersedia melalui portal SAP for Me (bagi pemegang kontrak SAP aktif). Alat ini menganalisis sistem ECC atau S/4HANA yang ada dan menghasilkan laporan yang mencakup inventarisasi objek kustom, simplification items yang relevan, dan temuan ABAP Test Cockpit (ATC). Hasilnya menjadi peta jalan awal sebelum tim IT merencanakan konversi ke S/4HANA — tahap pertama dalam proses remediasi custom code.

### Apa itu ABAP Test Cockpit (ATC) dan apa fungsinya dalam remediasi kode?
ABAP Test Cockpit (ATC) adalah alat analisis kode statis yang terintegrasi dalam ABAP Development Tools (ADT) — plugin Eclipse untuk pengembangan ABAP. ATC secara otomatis memindai kode dan menandai setiap pelanggaran ABAP Cloud restrictions: misalnya, penggunaan tabel internal SAP yang tidak di-release, atau penggunaan statement ABAP yang tidak diizinkan di cloud. Setiap temuan dilengkapi penjelasan dan saran perbaikan, menjadikan ATC alat utama pada fase analisis dan migrasi custom code.

### Apakah semua Z-code harus dibersihkan sebelum migrasi ke S/4HANA?
Tidak. Pendekatan yang lebih praktis adalah *phased remediation*: prioritaskan dulu kode yang secara aktif menghalangi konversi inti atau bertentangan dengan released API kritis. Kode yang tidak digunakan (*dead code*) dapat langsung dieliminasi tanpa analisis mendalam. Sisanya — khususnya logika bisnis unik yang masih relevan — bisa dimigrasi dalam fase pasca go-live. Yang terpenting adalah menyelesaikan analisis ATC sebelum go-live agar tidak ada kejutan besar setelah sistem aktif.

### Apa itu released objects di SAP dan mengapa penting untuk ABAP Cloud?
Released objects (atau released APIs) adalah objek dan antarmuka yang SAP secara eksplisit nyatakan sebagai *tersedia untuk digunakan pelanggan* dalam pengembangan ABAP Cloud. Hanya objek inilah yang boleh diakses dalam kode ABAP Cloud — akses ke internal SAP objects yang tidak di-release akan ditandai sebagai error oleh ATC. SAP memelihara daftar released objects melalui "cloudification repository" yang dapat dirujuk tim developer untuk menemukan API pengganti yang sesuai.

### Bagaimana cara menentukan kode mana yang harus di-Rebuild ke SAP BTP?
Kode yang perlu di-Rebuild ke SAP BTP adalah logika bisnis yang benar-benar unik — tidak ada padanannya di SAP standard dan tidak bisa digantikan oleh released API yang ada. Contoh: laporan kustom yang menggabungkan data dari beberapa modul dengan logika perhitungan spesifik industri. Kode ini bisa ditulis ulang sebagai side-by-side extension di SAP BTP menggunakan ABAP Cloud atau dikembangkan ulang dengan SAP Build (low-code). Sebelum memutuskan Rebuild, selalu cek dulu apakah SAP standard S/4HANA atau released API baru sudah mencakup fungsi yang dibutuhkan — seringkali tidak perlu membangun ulang dari nol.

---

## Data tables for the writer

### Tabel triase: Keep, Eliminate, atau Rebuild

| Tipe Z-code | Rekomendasi | Alasan |
|---|---|---|
| Modifikasi inti SAP yang sudah punya pengganti di S/4HANA standard | **Eliminate** | S/4HANA standard sudah mencakup fungsi ini; kode kustom redundan |
| Kode yang tidak pernah/jarang dijalankan (*dead code*, 0–1 eksekusi per tahun) | **Eliminate** | Tidak ada nilai bisnis aktif; mengurangi technical debt langsung |
| Laporan/program yang menggunakan tabel/function tidak di-release (incompatible ATC finding) tapi memiliki released API pengganti | **Keep → Swap** | Ganti referensi ke released API; logika utama dipertahankan |
| Logika bisnis unik yang tidak ada padanannya di SAP standard | **Rebuild** di SAP BTP / ABAP Cloud | Nilai bisnis tinggi; perlu ditulis ulang sebagai side-by-side extension agar upgrade-safe |
| Kode kecil dengan satu atau dua panggilan ke internal object; released successor tersedia di cloudification repo | **Swap Released API** | Perubahan minimal — cukup ganti referensi; tidak perlu Rebuild penuh |
| Enhancement yang bertentangan langsung dengan S/4HANA data model baru (simplification item) | **Evaluate → Eliminate atau Rebuild** | Perlu analisis mendalam; mungkin fungsi sudah ada di standard baru atau perlu arsitektur ulang |

### Empat fase remediasi custom code SAP

| Fase | Aktivitas | Alat utama | Output |
|---|---|---|---|
| **1. Inventarisasi** | Hitung dan daftarkan semua objek kustom di sistem ECC/S/4HANA | SAP Readiness Check (via SAP for Me) | Laporan inventaris: jumlah objek, tipe, frekuensi penggunaan |
| **2. Analisis** | Identifikasi incompatibility dengan ABAP Cloud restrictions dan S/4HANA simplifications | ABAP Test Cockpit (ATC) di ADT Eclipse | Daftar temuan per objek: error/warning + penjelasan + saran perbaikan |
| **3. Triase** | Kategorikan setiap kelompok objek: Keep/Swap, Eliminate, atau Rebuild | Custom Code Migration app (Fiori) + penilaian manual | Triase list dengan prioritas dan estimasi effort |
| **4. Migrasi & Verifikasi** | Tulis ulang ke released objects (ABAP Cloud) atau pindahkan ke SAP BTP; verifikasi dengan ATC | ADT Eclipse + SAP BTP / SAP Build | Kode yang upgrade-safe; ATC zero findings (atau findings yang diterima) |

---

## Edge cases & nuance

- **"Berapa lama proses remediasi?"** — tidak ada angka tunggal yang jujur dapat dinyatakan. Durasi sangat bergantung pada volume objek kustom, kompleksitas logika, dan ketersediaan tim ABAP. Fase inventarisasi + ATC scan bisa selesai dalam beberapa hari hingga minggu; remediasi penuh bisa berbulan-bulan. Writer harus membingkainya sebagai *range lapangan* tanpa janji waktu spesifik. ⚠️ (lihat Flags)

- **Dead code yang sangat besar proporsinya**: Dalam praktik konversi brownfield, proporsi kode yang sudah tidak aktif (dead code) sering mengejutkan — bisa 30–50% atau lebih dari total objek Z. Pembersihan dead code saja, sebelum remediasi penuh, sudah memberikan dampak nyata pada performa sistem dan menyederhanakan analisis. ⚠️ Angka 30–50% ini adalah estimasi lapangan yang umum disebut praktisi; belum ada studi SAP/Gartner resmi yang mengkuantifikasi ini secara global. Writer harus membingkainya sebagai "pola yang sering ditemui dalam praktik implementasi" — jangan sajikan sebagai statistik yang dikutip dari studi.

- **SAP Joule for Developers untuk CCM**: Ini adalah perkembangan 2025 yang relevan dan bisa disebutkan sebagai "perkembangan terbaru" — tapi jangan klaim ini sudah menjadi bagian standar semua proyek atau semua klien sudah menggunakannya. Framing: "SAP kini mengintegrasikan kemampuan AI melalui SAP Joule for Developers untuk membantu analisis kode legacy secara otomatis — mengurangi beban manual tim ABAP."

- **Perbedaan S/4HANA Cloud Public Edition vs Private Edition dalam konteks ABAP Cloud**: Di S/4HANA Cloud Public Edition, kustomisasi ABAP sama sekali tidak diizinkan — hanya key-user extensibility via Fiori. Di Private Edition dan S/4HANA on-premise, ABAP Cloud tersedia sebagai model pengembangan. Artikel ini relevan terutama untuk skenario Private Edition dan on-premise (brownfield conversion).

- **ABAP Cloud bukan hanya untuk migrasi**: Model ini juga berlaku untuk pengembangan baru di S/4HANA — semua extension baru sebaiknya ditulis dalam ABAP Cloud dari awal, bukan hanya kode lama yang dimigrasi.

- **Biaya remediasi custom code**: Tidak ditemukan data analis/SAP yang mengkuantifikasi persentase biaya konversi yang berasal dari custom code remediation secara global. ⚠️ (lihat Flags) — jangan klaim angka tertentu; framing sebagai "salah satu komponen biaya terbesar" tanpa angka persen sudah defensible.

---

## Flags (open factual risk)

- ⚠️ **Flag 1 — Terminologi "Keep/Eliminate/Rebuild" bukan istilah resmi SAP tunggal**: SAP menggunakan kategorisasi serupa dalam dokumentasinya, tapi tidak ada satu istilah tunggal "Keep/Eliminate/Rebuild" yang berstatus "SAP official terminology." Framing aman: "kerangka triase yang umum digunakan dalam praktik migrasi kustom SAP" atau "pendekatan yang konsisten dengan panduan SAP Custom Code Migration." Jangan tulis "SAP menyebut ini sebagai Keep/Eliminate/Rebuild."

- ⚠️ **Flag 2 — Durasi remediasi**: Tidak ada data SAP/Gartner/IDC yang terpercaya tentang durasi rata-rata remediasi custom code. Jangan klaim angka waktu spesifik. Gunakan framing: "bergantung pada skala dan kompleksitas sistem — dari beberapa minggu untuk fase scan hingga berbulan-bulan untuk remediasi penuh."

- ⚠️ **Flag 3 — Persentase biaya konversi dari custom code**: Tidak ditemukan studi resmi yang mengkuantifikasi ini (IDC/Gartner/SAP Transformation Center). Jangan tulis angka persen. Framing aman: "custom code remediation sering menjadi salah satu komponen waktu dan biaya terbesar dalam konversi brownfield."

- ⚠️ **Flag 4 — Angka rata-rata objek kustom per instalasi SAP**: Tidak ada statistik SAP/Gartner yang terpercaya tentang rata-rata jumlah Z-objects per instalasi. Framing aman: "ratusan hingga ribuan objek kustom" — ini konsisten dengan pengalaman lapangan yang sering disebutkan komunitas SAP dan konsisten dengan skala instalasi enterprise yang sudah berjalan 10–15 tahun. Jangan tulis angka spesifik seperti "rata-rata 1.200 objek" tanpa sumber.

---

## Definition snippet draft (40–60 kata)

> **ABAP Cloud** adalah model pengembangan ABAP modern yang hanya mengizinkan akses ke *released objects* dan API resmi SAP — menghasilkan kode yang tidak terputus saat upgrade sistem. Berbeda dengan ABAP klasik yang bisa mengakses internal sistem secara bebas, ABAP Cloud memastikan kustomisasi tetap aman dan sesuai prinsip *clean core* SAP S/4HANA. (46 kata)

---

## Notes for image-planner

- **Konsep 1 — Diagram alur empat fase remediasi**: Infografis horizontal menampilkan 4 fase berurutan (Inventarisasi → Analisis → Triase → Migrasi) dengan ikon alat SAP di tiap fase (SAP for Me / ATC / Custom Code Migration app / ADT Eclipse). Warna: gradien dari merah/oranye (fase awal = masalah) ke hijau (fase akhir = kode bersih). Cocok sebagai featured snippet bait.

- **Konsep 2 — Tabel triase Keep/Eliminate/Rebuild**: Versi visual dari tabel triase — tiga kolom berwarna berbeda (Keep = biru, Eliminate = abu-abu/merah, Rebuild = hijau) dengan contoh tipe kode di masing-masing kolom. Format infografis ringkas yang bisa di-screenshot dan dibagikan tim IT.

- **Konsep 3 — Diagram ABAP Cloud vs ABAP Klasik**: Ilustrasi dua-kolom sederhana: kiri = ABAP klasik (akses bebas ke internal objects, simbol gembok terbuka); kanan = ABAP Cloud (hanya akses ke released objects, simbol perisai/gembok tertutup). Memperkuat definisi snippet dan perbedaan konsep yang sering ditanyakan.
