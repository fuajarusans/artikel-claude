---
brief_id: "sap-clean-core-03"
researcher_run_date: "2026-10-07"
sources_cited: 15
flags: 7
---

# Research Dossier: Membaca Laporan SAP Readiness Check — Menemukan Sinyal Clean Core Sebelum Proyek Dimulai

## TL;DR for the writer

- **SAP Readiness Check adalah laporan analisis GRATIS** bagi pelanggan dengan perjanjian maintenance/support SAP yang aktif. Diakses lewat SAP for Me (`me.sap.com/readinesscheck`, jalur Service & Support → ALM). Ia menganalisis sistem sumber (ECC) terhadap target S/4HANA dan menjadi sinyal clean core paling awal — sebelum satu rupiah keluar. Mendukung skenario konversi (ECC→S/4HANA) *dan* upgrade.
- **Yang dianalisis (verified SAP):** relevansi *simplification items*, *custom code analysis*, *sizing* S/4HANA (estimasi memori & disk sebelum/sesudah cleanup + potensi archiving), rekomendasi Fiori apps, kompatibilitas add-on & active business function, cek integrasi/interface (apakah IDoc & BW extractor masih jalan), dan *Business Process Discovery* (pratinjau SAP Signavio Process Insights). Hasil disajikan sebagai **dashboard dengan kartu/tile per area** — tetapi **jangan mengarang nama tile/tab/field spesifik** (lihat Flags).
- **Custom code analysis di Readiness Check bersifat gambaran/overview**, bukan temuan baris-per-baris. Untuk presisi dipakai **ABAP Test Cockpit (ATC)** (analisis jauh lebih mendalam) dan **SAP Custom Code Migration app** (menyajikan hasil ATC + Quick Fix semi-otomatis di ADT). Readiness Check bisa *menampilkan* temuan ATC bila ATC dijadikan sumber datanya — jadi frasa "high-level" harus akurat, bukan "tidak terhubung ke ATC".
- **Clean Core Levels A–D (SAP, Agustus 2025)** = evolusi dari *three-tier model* lama. A = hanya released API + stability contract (preferred); B = + classic API yang terdokumentasi & upgrade-stable (recommended); C = akses objek internal untuk skenario legacy (partially compliant, risiko upgrade naik, SAP sediakan changelog); D = objek/teknik yang eksplisit tidak disarankan — modifikasi, direct write, implicit enhancement (not recommended, utang teknis terbesar). Ini kerangka menilai ekstensi, bukan output Readiness Check — hubungkan di H2 #3.
- **Tenggat yang membenarkan urgensi:** mainstream maintenance ECC berakhir **31 Des 2027**, extended maintenance (+2 poin persen premi) hingga **2030**, lalu customer-specific maintenance; komitmen inovasi S/4HANA hingga **2040**. Atribusikan ke strategi maintenance SAP.

## Core facts (verified)

> **Claim**: SAP Readiness Check adalah layanan analisis gratis bagi pelanggan SAP dengan perjanjian maintenance/support aktif, diakses via SAP for Me.
> **Number/specific**: Gratis selama ada perjanjian maintenance SAP yang valid / akun S-user; diakses di `me.sap.com/readinesscheck` (jalur Service & Support → ALM pada SAP for Me).
> **Source**: SAP Support — ALM Cloud Services / SAP for Me Readiness Check (support.sap.com; me.sap.com); blogs.sap.com "Start SAP S/4HANA planning with Readiness Check" (diakses 2026-10-07)
> **Confidence**: high

> **Claim**: SAP Readiness Check menganalisis sejumlah area kunci untuk transisi ke S/4HANA.
> **Number/specific**: Area meliputi — *Simplification Items* relevan, *Custom Code Analysis*, *SAP S/4HANA Sizing*, *Recommended SAP Fiori Apps*, *Add-On Compatibility Check*, *Compatibility of active Business Functions*, pemeriksaan integrasi (apakah IDoc & BW extractor tetap berfungsi di S/4HANA), dan *Business Process Analytics/Discovery*.
> **Source**: blogs.sap.com "SAP Readiness Check 2.0 — insights and flavors" (2020); help.sap.com "Key Feature Overview SAP Readiness Check" (diakses 2026-10-07)
> **Confidence**: high

> **Claim**: SAP Readiness Check mendukung skenario konversi sistem (ECC→S/4HANA) dan upgrade S/4HANA.
> **Number/specific**: "Flavors" Readiness Check mencakup system conversion dan upgrade; variannya juga ada untuk BW/4HANA dan solusi lain.
> **Source**: blogs.sap.com "SAP Readiness Check 2.0 — insights and flavors" (2020); answers.sap.com overview & features (diakses 2026-10-07)
> **Confidence**: high

> **Claim**: Hasil Readiness Check disajikan sebagai dashboard interaktif dengan kartu/tile per area analisis.
> **Number/specific**: Setiap area (simplification items, custom code, sizing, dll.) tampil sebagai kartu ringkas yang bisa di-drill-down; hasil bisa diekspor (mis. ke presentasi) untuk stakeholder.
> **Source**: help.sap.com "Key Feature Overview SAP Readiness Check"; blogs.sap.com Readiness Check 2.0 (diakses 2026-10-07)
> **Confidence**: medium (keberadaan dashboard & drill-down terkonfirmasi; **nama tile/field spesifik JANGAN dikarang** — lihat Flags)

> **Claim**: Simplification items adalah katalog perbedaan fungsional antara SAP ECC dan S/4HANA — fungsi yang dihapus, digabung, atau diubah — yang dapat memengaruhi proses & custom code saat konversi.
> **Number/specific**: Daftar penuh berisi hampir ~1.000 item (bervariasi menurut target release); tiap item punya *Business Impact Note* dan informasi *source/target release*; tidak semua relevan untuk setiap pelanggan.
> **Source**: SAP (konsep simplification list/SI); ringkasan vendor netral (Panaya; All-for-One; kTern) yang mengutip definisi SAP (diakses 2026-10-07)
> **Confidence**: high (konsep & struktur), medium (angka "~1.000" — label sebagai perkiraan, bergantung target release)

> **Claim**: Simplification Item Check (SI Check) membandingkan sistem terhadap simplification items yang relevan untuk target release.
> **Number/specific**: Pemeriksaan meninjau konfigurasi, pemakaian transaksi, master data, add-on, dan business function untuk menentukan langkah persiapan wajib sebelum konversi.
> **Source**: SAP SI Check (dokumentasi SAP); ringkasan kTern/All-for-One mengutip SAP (diakses 2026-10-07)
> **Confidence**: high

> **Claim**: Custom code analysis di Readiness Check bersifat gambaran/overview yang menautkan dampak simplification items ke objek kustom, bukan temuan baris-per-baris.
> **Number/specific**: Menampilkan volume custom code dan bagian yang terdampak simplification; ketika ATC dijadikan sumber, Readiness Check memberi *estimasi* porsi temuan yang berpotensi punya Quick Fix (bukan temuan presisi).
> **Source**: blogs.sap.com "Enhanced custom code analysis in SAP Readiness Check for SAP S/4HANA" (diakses 2026-10-07)
> **Confidence**: high

> **Claim**: ABAP Test Cockpit (ATC) melakukan analisis custom code yang jauh lebih mendalam daripada Custom Code Analyzer bawaan Readiness Check.
> **Number/specific**: ATC adalah alat analisis custom code yang didukung Readiness Check untuk analisis mendalam; baseline temuan ATC dapat dibuat lebih dulu agar Readiness Check fokus pada temuan yang relevan untuk target release.
> **Source**: blogs.sap.com "Enhanced custom code analysis in SAP Readiness Check"; community.sap.com (ATC) (diakses 2026-10-07)
> **Confidence**: high

> **Claim**: SAP Custom Code Migration app (Fiori) menyajikan hasil ATC dengan filter/navigasi dan mengidentifikasi kode yang bisa diperbaiki semi-otomatis via Quick Fix di ABAP Development Tools (ADT).
> **Number/specific**: Berjalan di infrastruktur remote ATC (mis. di sistem S/4HANA 1809+); bila app ini jadi sumber data Readiness Check, hasilnya menunjukkan dukungan Quick Fix *aktual* (bukan estimasi).
> **Source**: SAP — "customcodemigrationapp" (assets.dm.ux.sap.com); blogs.sap.com "How to check your custom code for ABAP Cloud" (diakses 2026-10-07)
> **Confidence**: high

> **Claim**: SAP mengklasifikasikan ekstensi ke dalam Clean Core Levels A, B, C, dan D — evolusi dari three-tier extensibility model.
> **Number/specific**: **A** = hanya released API + interface stabil dengan *stability contract* (ABAP Cloud / side-by-side BTP) — fully compliant, preferred. **B** = kriteria A + *classic API* SAP yang terdokumentasi & umumnya upgrade-stable — compliant, recommended. **C** = akses objek internal SAP untuk skenario legacy — partially compliant, risiko upgrade naik; SAP menyediakan changelog. **D** = objek/teknik yang eksplisit tidak disarankan (modifikasi, direct write ke tabel SAP, implicit enhancement) — not recommended, risiko & utang teknis terbesar.
> **Source**: SAP News — "Extend SAP S/4HANA Cloud the right way" (news.sap.com, 12 Agustus 2025); SAP Learning "Clean Core Extensibility Best Practices" (diakses 2026-10-07)
> **Confidence**: high

> **Claim**: Kerangka Clean Core Levels A–D diperkenalkan/dipertegas SAP pada 2025 sebagai penyempurnaan model tiga tingkat sebelumnya.
> **Number/specific**: Publikasi resmi bertanggal 12 Agustus 2025; sebagian materi lama masih memakai istilah "three-tier" (ABAP Cloud / key-user / side-by-side).
> **Source**: SAP News (news.sap.com, 12 Agustus 2025); ASUG "SAP updates clean core guidance" (4 September 2025, ringkasan) (diakses 2026-10-07)
> **Confidence**: high

> **Claim**: SAP S/4HANA Sizing di Readiness Check memberi estimasi kebutuhan memori & disk sebelum dan sesudah cleanup, termasuk potensi archiving.
> **Number/specific**: Membantu memperkirakan konsumsi HANA (dimensi Data) dan mengidentifikasi peluang pengurangan data sebelum konversi.
> **Source**: blogs.sap.com "SAP Readiness Check 2.0 — insights and flavors"; help.sap.com Key Feature Overview (diakses 2026-10-07)
> **Confidence**: high

> **Claim**: Readiness Check mengecek kompatibilitas add-on & active business function dan apakah integrasi (IDoc, BW extractor) tetap berfungsi di S/4HANA, serta merekomendasikan Fiori apps berdasarkan pemakaian.
> **Number/specific**: Add-On Compatibility Check, Compatibility Check of active Business Functions, pemeriksaan BW extractor/IDoc, dan Recommended SAP Fiori Apps berbasis penggunaan saat ini.
> **Source**: blogs.sap.com "SAP Readiness Check 2.0 — insights and flavors" (diakses 2026-10-07)
> **Confidence**: high

> **Claim**: Business Process Discovery di Readiness Check menampilkan pratinjau SAP Signavio Process Insights (discovery edition) — potensi perbaikan proses.
> **Number/specific**: Area potensi: otomasi proses, pembersihan dokumen tertunggak (overdue), dan order type yang tak pernah dipakai. Signavio Process Insights discovery edition tersedia dalam paket RISE with SAP untuk S/4HANA Cloud Private Edition; discovery edition memuat pemuatan data sekali yang kedaluwarsa setelah 6 bulan (full edition = pemantauan harian kontinu).
> **Source**: SAP user-group material — "SAP Readiness Check & SAP Signavio Process Insights" (assets.dm.ux.sap.com, 2025); blogs.sap.com (diakses 2026-10-07)
> **Confidence**: high (keberadaan & fungsi), medium (ketersediaan/edisi tergantung lisensi — lihat Flags)

> **Claim**: Konteks tenggat — mainstream maintenance SAP ECC (Business Suite 7) berakhir, memperkuat urgensi diagnosis dini.
> **Number/specific**: Mainstream maintenance berakhir **31 Desember 2027**; extended maintenance berbayar (+2 poin persen premi) hingga **2030**; setelahnya customer-specific maintenance (perbaikan terbatas). Komitmen inovasi S/4HANA hingga **2040**.
> **Source**: SAP maintenance strategy via CIO.com ("SAP promises to support S/4HANA through 2040"); liputan Rimini Street/IBsolution ringkasan (diakses 2026-10-07)
> **Confidence**: high (angka stabil sejak pengumuman; tetap atribusikan ke SAP)

## Solution focus + Soltius anchor (from product_matrix.md)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| **SAP Readiness Check** (apa yang dianalisis, cara baca) | Gratis bagi pelanggan maintenance aktif; dashboard per area; mendukung konversi & upgrade | H2 #1, #2 | — |
| **Simplification items** + **SI Check** | Katalog perbedaan ECC↔S/4HANA; relevansi per target release; tiap item punya Business Impact Note | H2 #2, #3 | — |
| **Custom code analysis** (overview) → **ATC** + **Custom Code Migration app** | RC = gambaran; ATC = presisi; Custom Code Migration app = hasil ATC + Quick Fix di ADT | H2 #2, #4, #5 | — |
| **Clean Core Levels A–D** (ringkas) | A/B preferred-recommended; C partially compliant (changelog); D not recommended (utang teknis) | H2 #3 | — |
| **Sizing / dimensi Data (HANA)** | Estimasi memori & disk pra/pasca cleanup + archiving potential | H2 #2, #3 | — |
| **SAP Signavio Process Insights** (opsional, sisi proses) | Business Process Discovery = pratinjau; discovery edition via RISE, kedaluwarsa 6 bulan | H2 #1/#4 (aside) | — |
| **Soltius: ERP Strategy + readiness assessment + SAP Platinum Partner (via United VARs)** | Menjalankan readiness assessment & menerjemahkan laporan jadi roadmap clean core sebelum konversi | **Closing** + 1 aside opsional di H2 #5 | "Sebagai SAP Platinum Partner melalui United VARs, Soltius menjalankan readiness assessment dan menerjemahkan laporan SAP Readiness Check menjadi roadmap clean core sebelum proyek konversi dimulai." |

Reminder: Soltius **menjalankan/mengimplementasikan/mendampingi** — bukan membangun SAP. **Maks 2–3 self-mention** (ideal: 1 aside di H2 #5 + 1 closing). Tanpa superlatif ("terbaik/nomor satu"). Boleh: "SAP Platinum Partner melalui United VARs" dan "kontributor pendapatan terbesar bagi SAP Indonesia (sejak 2015)" sebagai pengakuan.

## Internal links to place (from brief)

1. **Primary / hub** — `https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide` — anchor: **`SAP Clean Core`** (inline di lead). (Catatan: URL hub berbahasa Inggris, tanpa `/id/`.)
2. **Cousin 1** — `https://www.soltius.co.id/id/blog/low-code-and-no-code-platforms` — anchor: **`platform low-code SAP Build`** — alasan: kandidat "Rebuild" dari temuan custom code dipindah ke ekstensi BTP/SAP Build.
3. **Cousin 2** — `https://www.soltius.co.id/id/blog/business-intelligence` — anchor: **`business intelligence`** — alasan: temuan sizing/data mengarah ke strategi data yang menopang analitik (SAP Analytics Cloud).

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **SAP News — "Extend SAP S/4HANA Cloud the right way" (news.sap.com, 12 Agustus 2025)** — https://news.sap.com/2025/08/extend-sap-s4hana-cloud-right-way-clean-clear/ — *what it backs*: definisi resmi Clean Core Levels A–D dan evolusi dari three-tier model. **Sumber terkuat untuk Level A–D.**
2. **SAP blog — "SAP Readiness Check 2.0 — insights and flavors" (blogs.sap.com, 2020)** — https://blogs.sap.com/2020/05/22/sap-readiness-check-2.0-insights-and-flavors/ — *what it backs*: area analisis Readiness Check (simplification items, custom code, sizing, Fiori, add-on/business function, integrasi).
3. **SAP blog — "Enhanced custom code analysis in SAP Readiness Check for SAP S/4HANA" (answers.sap.com/blogs.sap.com)** — https://answers.sap.com/t5/enterprise-resource-planning-blogs-by-sap/enhanced-custom-code-analysis-in-sap-readiness-check-for-sap-s-4hana/ba-p/13580469 — *what it backs*: hubungan Readiness Check ↔ ATC, baseline, estimasi vs Quick Fix aktual.
4. **SAP Help — "Key Feature Overview SAP Readiness Check" (help.sap.com)** — https://help.sap.com/doc/bb0e7ba5158c424ab7ce010228bf1de1 — *what it backs*: daftar fitur resmi & penyajian dashboard. (Catatan: dokumen PDF 4,9 MB; rujukan fitur, bukan untuk menyalin nama field.)
5. **CIO.com — "SAP promises to support S/4HANA through 2040"** — https://www.cio.com/article/3519410/sap-promises-to-support-s4hana-through-2040.html — *what it backs*: tenggat maintenance ECC 2027/2030 & komitmen S/4HANA 2040.

Priority terpenuhi: **SAP official > analis/press tepercaya**. **Hindari outbound ke halaman marketing kompetitor system integrator SAP** (mis. Panaya/LeanIX dipakai hanya sebagai referensi definisi internal, bukan tautan keluar di artikel).

## FAQ Q&As (7 drafted, Bahasa Indonesia)

### Apa itu SAP Readiness Check?
SAP Readiness Check adalah laporan analisis dari SAP yang menilai kesiapan sebuah sistem (umumnya SAP ECC) untuk dikonversi atau di-upgrade ke SAP S/4HANA. Ia memeriksa simplification items yang relevan, volume dan dampak custom code, estimasi sizing, kompatibilitas add-on, serta integrasi — lalu menyajikannya sebagai dashboard. Inilah sinyal paling awal untuk menilai seberapa "bersih" core Anda sebelum proyek dimulai.

### Apakah SAP Readiness Check gratis?
Ya. SAP Readiness Check gratis bagi setiap pelanggan dengan perjanjian maintenance/support SAP yang aktif (memerlukan akun S-user). Laporan diakses melalui portal SAP for Me di `me.sap.com/readinesscheck`, lewat jalur Service & Support → ALM. Karena gratis dan dijalankan pada sistem sumber, ia ideal sebagai langkah diagnostik sebelum anggaran proyek konversi disetujui.

### Apa saja yang dianalisis SAP Readiness Check?
Readiness Check menganalisis: simplification items yang relevan untuk source/target release; custom code (volume dan bagian yang terdampak); sizing S/4HANA (estimasi memori & disk sebelum/sesudah cleanup plus potensi archiving); rekomendasi SAP Fiori apps; kompatibilitas add-on dan active business function; apakah integrasi seperti IDoc dan BW extractor tetap berfungsi; serta pratinjau perbaikan proses via Business Process Discovery.

### Apa bedanya SAP Readiness Check dengan ABAP Test Cockpit (ATC)?
Keduanya saling melengkapi. Custom code analysis di Readiness Check bersifat gambaran tingkat tinggi — menunjukkan volume dan bagian kode yang terdampak simplification. ABAP Test Cockpit (ATC) melakukan analisis jauh lebih mendalam, menghasilkan temuan presisi per objek. SAP Custom Code Migration app menyajikan hasil ATC dengan Quick Fix semi-otomatis di ADT. Readiness Check bahkan bisa menampilkan temuan ATC bila ATC dijadikan sumber datanya.

### Apa itu simplification items?
Simplification items adalah katalog perbedaan fungsional antara SAP ECC dan S/4HANA — fungsi yang dihapus, digabung, atau diubah SAP. Setiap item memiliki Business Impact Note yang menjelaskan dampaknya pada proses dan custom code, serta informasi source/target release. Daftar penuhnya mencakup hampir seribu item (bergantung versi target), namun hanya sebagian yang relevan untuk sistem Anda — itulah yang disaring Simplification Item Check.

### Berapa lama menjalankan SAP Readiness Check?
Inti prosesnya adalah program pengumpulan data yang berjalan sebagai background job di sistem sumber; hasilnya diunggah dan muncul di dashboard SAP for Me. Durasinya bergantung pada ukuran sistem, volume custom code, dan beban server, sehingga tidak ada angka pasti yang berlaku untuk semua. Perlakukan setiap estimasi durasi sebagai acuan praktis, bukan patokan resmi — rencanakan jendela eksekusi bersama tim BASIS.

### Apakah hasil Readiness Check cukup untuk memutuskan brownfield vs greenfield?
Readiness Check adalah masukan penting, tetapi belum cukup sendirian. Ia memberi bukti kuat soal volume custom code, dampak simplification, dan ukuran data — faktor yang condong ke brownfield atau greenfield. Namun keputusan juga menuntut penilaian kecocokan proses bisnis (fit-to-standard), utang proses, dan tujuan transformasi, yang perlu analisis proses (mis. Signavio) dan masukan bisnis. Gunakan laporan sebagai titik awal, bukan vonis.

## Data tables for the writer

### Tabel 1 — Empat bagian laporan yang paling menunjukkan kondisi clean core (H2 #2)
| Bagian laporan | Apa yang ditampilkan | Mengapa ini sinyal clean core |
|---|---|---|
| Simplification items | Item relevan untuk source/target release + Business Impact Note | Makin banyak item yang menyentuh area yang Anda kustomisasi, makin besar kemungkinan core "kotor" dan perlu remediasi |
| Custom code analysis | Volume custom code & bagian yang terdampak simplification (overview) | Indikator kasar utang teknis; jumlah objek terdampak = beban remediasi di depan |
| Sizing / konsumsi data | Estimasi memori & disk pra/pasca cleanup + potensi archiving | Data besar = peluang archiving & sinyal perlu strategi data sebelum pindah |
| Add-on, business function & integrasi | Kompatibilitas add-on/business function; status IDoc/BW extractor | Add-on/interface tak kompatibel = titik gesek upgrade yang menahan "kebersihan" core |

### Tabel 2 — Temuan → artinya untuk clean core → tindakan (H2 #3, tabel inti)
| Temuan di laporan | Artinya untuk clean core | Tindakan berikutnya |
|---|---|---|
| Banyak custom object tersentuh simplification items | Utang teknis tinggi; risiko regresi saat konversi | Jalankan ATC + Custom Code Migration app; petakan Keep/Rebuild/Retire |
| Custom code volume besar tapi sedikit terdampak | Banyak kode mungkin usang/tak terpakai | Analisis pemakaian; retire kode mati sebelum konversi |
| Custom code rendah & terdampak minim | Kandidat kuat *fit-to-standard* | Prioritaskan standar; pertimbangkan greenfield/konversi ringan |
| Ekstensi memakai objek internal / modifikasi inti | Setara Clean Core Level C–D (risiko tinggi) | Rebuild sebagai ekstensi Level A/B (ABAP Cloud / side-by-side BTP, mis. SAP Build) |
| Sizing/data sangat besar | Beban HANA & downtime migrasi naik | Rencanakan archiving & strategi data sebelum pindah |
| Add-on/business function tak kompatibel | Titik gesek konversi | Cek roadmap vendor add-on; rencanakan pengganti/penonaktifan |

### Tabel 3 — Clean Core Levels A–D (ringkas, untuk menilai ekstensi di H2 #3)
| Level | Interface yang dipakai | Status |
|---|---|---|
| A | Hanya released & stable API (stability contract); ABAP Cloud / side-by-side BTP | Fully compliant — preferred |
| B | Kriteria A + classic API SAP yang terdokumentasi & umumnya upgrade-stable | Compliant — recommended |
| C | Akses objek internal SAP untuk skenario legacy | Partially compliant — risiko upgrade naik (SAP sediakan changelog) |
| D | Objek/teknik tak disarankan: modifikasi, direct write, implicit enhancement | Not recommended — risiko & utang teknis terbesar |

> Sumber Tabel 3: SAP News (news.sap.com, 12 Agustus 2025). Gunakan sebagai lensa menilai temuan custom code, bukan sebagai output langsung Readiness Check.

## Edge cases & nuance

- **Readiness Check ≠ ATC — tapi bukan "terputus" dari ATC.** Framing paling akurat: custom code analysis Readiness Check adalah *overview*; presisi datang dari ATC; dan Readiness Check dapat *menampilkan* temuan ATC bila ATC jadi sumber datanya (lalu Quick Fix yang ditampilkan jadi aktual, bukan estimasi). Hindari menulis "Readiness Check tidak tahu apa-apa soal custom code" — itu salah.
- **Angka hijau bukan jaminan siap.** Readiness Check menilai dimensi teknis; ia tidak mengukur kualitas/kedewasaan proses, budaya, atau kesiapan organisasi. Inti H2 #5: laporan sering dibaca terlalu optimistis.
- **Simplification items yang "relevan" ≠ seluruh daftar.** SI Check menyaring dari hampir seribu item menjadi yang benar-benar menyentuh sistem Anda. Jangan menakut-nakuti dengan angka total daftar.
- **Clean Core Levels A–D adalah kerangka baru (2025).** Materi lama memakai "three-tier" (ABAP Cloud / key-user / side-by-side). Jelaskan A–D sebagai penyempurnaan, bukan sesuatu yang bertentangan.
- **Business Process Discovery tergantung lisensi/edisi.** Pratinjau Signavio Process Insights discovery edition terkait paket RISE / S/4HANA Cloud Private Edition dan datanya kedaluwarsa 6 bulan — jangan menggambarkannya sebagai fitur gratis universal untuk semua pelanggan.
- **Dashboard itu nyata, nama field-nya jangan dikarang.** Aman menyebut "kartu/tile per area" dan "drill-down"; tidak aman menuliskan nama tab/kolom spesifik yang belum diverifikasi — deskripsikan kategori secara umum.

## Flags (open factual risk)

- ⚠️ **Nama tile/tab/field laporan spesifik**: keberadaan dashboard & drill-down terkonfirmasi, tetapi nama elemen UI persis tidak diverifikasi per run ini. → **Rekomendasi**: deskripsikan kategori umum ("kartu Custom Code", "area Sizing") tanpa mengklaim label UI harfiah.
- ⚠️ **Angka "~1.000 simplification items"**: besaran daftar bervariasi menurut target release dan versi. → **Rekomendasi**: tulis "hampir seribu item (bergantung versi target)" sebagai perkiraan, bukan angka pasti.
- ⚠️ **Kedalaman custom code analysis**: Readiness Check overview, ATC presisi — tetapi Readiness Check *bisa* menampilkan temuan ATC. → **Rekomendasi**: frasa "analisis tingkat tinggi yang diperdalam dengan ATC/Custom Code Migration app", hindari "tidak terhubung ke ATC".
- ⚠️ **Penamaan Clean Core Levels A–D vs three-tier**: A–D adalah pembaruan resmi SAP (Agustus 2025). → **Rekomendasi**: atribusikan ke "pedoman clean core SAP 2025" dan sebut keterkaitannya dengan model tiga tingkat agar tak membingungkan pembaca yang pernah membaca materi lama.
- ⚠️ **Ketersediaan Business Process Discovery / Signavio Process Insights**: terikat lisensi (RISE / S/4HANA Cloud Private Edition) dan discovery edition kedaluwarsa 6 bulan. → **Rekomendasi**: sebut sebagai opsional/"tergantung lisensi", jangan janjikan untuk semua pelanggan.
- ⚠️ **Durasi menjalankan Readiness Check**: tidak ada angka resmi universal (bergantung ukuran sistem & volume kode). → **Rekomendasi**: jangan tulis durasi hari/jam spesifik; sebut "background job, durasi bergantung sistem" dan labeli estimasi sebagai acuan.
- ⚠️ **SAP Notes & nama program** (mis. Notes 2758146/2745851, program `RC_VALUE_DISCOVERY_COLL_DATA`): berasal dari materi user-group, bukan untuk menjadikan artikel terlalu teknis. → **Rekomendasi**: writer tidak perlu mencantumkan nomor Note/nama program; bila dipakai, atribusikan ke dokumentasi SAP dan jangan mengarang nomor lain.

## Definition snippet draft (54 words)

> **SAP Readiness Check** adalah laporan analisis gratis dari SAP yang menilai kesiapan sebuah sistem untuk dikonversi atau di-upgrade ke SAP S/4HANA. Ia memeriksa simplification items, volume custom code, sizing, dan kompatibilitas integrasi, lalu menyajikannya sebagai dashboard — menjadikannya sinyal clean core paling awal yang bisa dibaca sebelum proyek konversi dimulai.
