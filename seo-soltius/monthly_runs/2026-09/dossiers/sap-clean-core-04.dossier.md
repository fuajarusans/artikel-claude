---
brief_id: "sap-clean-core-04"
researcher_run_date: "2026-09-22"
sources_cited: 17
flags: 7
---

# Research Dossier: SAP Clean Core — Biaya Ekstensi di BTP yang Jarang Dihitung

## TL;DR for the writer

- **Inti angle terkonfirmasi & benar**: memindahkan kustomisasi ke SAP BTP tidak menghapus biaya — ia mengubahnya dari **capex satu kali** (build ABAP di dalam core) menjadi **opex berulang** (konsumsi BTP yang ditagih bulanan). BTP memakai *consumption-based commercial model* — ini fakta resmi SAP, bukan opini.
- **Koreksi penting untuk penamaan (2026)**: model komersial berbasis konsumsi kini punya **tiga varian** — **BTPEA (SAP BTP Enterprise Agreement)**, **CPEA (Cloud Platform Enterprise Agreement)**, dan **Pay-As-You-Go**. **BTPEA adalah evolusi dari CPEA.** Sejak ~15 April 2024, **CPEA hanya untuk akun yang sudah ada** dan cakupan layanannya tidak lagi diperluas; **semua layanan baru tersedia lewat BTPEA**. Jadi untuk pelanggan baru di 2026, model default-nya **BTPEA**, bukan CPEA. Jangan tulis CPEA sebagai "model utama saat ini".
- **Fakta paling "gigit" untuk CFO — credit hangus**: pada CPEA, cloud credit adalah komitmen **prabayar**; kontrak dibagi menjadi **fase (biasanya tahunan)**; **credit yang tak terpakai hangus di akhir fase** ("forfeited"). Top-up bisa kapan saja, tapi **overage ditagih list price** (tanpa diskon). Ini jantung narasi over-commit vs under-commit.
- **Alat FinOps resmi ADA dan gratis** — sebut dengan nama tepat: **SAP BTP Cost Estimator** (di **SAP Discovery Center**, gratis) untuk estimasi sebelum tanda tangan; **Cost and Usage Management / halaman "Costs and Usage" di SAP BTP Cockpit** untuk memantau konsumsi aktual per service plan (bisa ekspor XLS). Ini bukti konkret bahwa biaya bisa dikendalikan.
- **HATI-HATI di dua klaim**: (1) "tiap application instance = minimal 1 unit CPEA" — **tidak akurat sebagai aturan universal**; konsumsi dihitung **per metrik tiap layanan** (SAP Build Apps: builds/tenants/cloud functions/storage; Integration Suite: volume pesan; runtime: memori/compute). (2) Angka pihak ketiga (25% credit tak terpakai, ~$600jt, understatement 45%, FinOps hemat 20–40%, integrasi buruk 3–5×) **tidak dapat diverifikasi dari sumber primer** — pakai hanya bila beratribusi + berlabel estimasi, atau lebih aman **di-drop**. Lihat Flags.

## Core facts (verified)

> **Claim**: SAP BTP ditagih dengan *consumption-based commercial model* (model komersial berbasis konsumsi), bukan lisensi flat.
> **Number/specific**: Tiga varian aktif: **BTPEA (SAP BTP Enterprise Agreement)**, **CPEA (Cloud Platform Enterprise Agreement)**, dan **Pay-As-You-Go for SAP BTP**. BTPEA & CPEA = model *commit-to-consume* (komitmen prabayar + komitmen konsumsi tahunan); Pay-As-You-Go = bayar sesuai pemakaian tanpa komitmen di muka.
> **Source**: SAP Help Portal — "What Is the Consumption-Based Commercial Model?" (help.sap.com/docs/btp/.../what-is-consumption-based-commercial-model); SAP Learning — "Introducing SAP BTP Commercial Models", akses 2026-09-22
> **Confidence**: high

> **Claim**: BTPEA adalah evolusi dari CPEA; per ~15 April 2024, CPEA hanya untuk akun eksisting dan cakupan layanannya tidak diperluas — layanan baru hadir lewat BTPEA.
> **Number/specific**: "BTPEA is an evolution of the existing Cloud Platform Enterprise Agreement (CPEA)"; CPEA = only existing accounts after April 15, 2024; "All new services will be available with BTPEA."
> **Source**: SAP Learning — "Introducing/Differentiating the SAP BTP Commercial Models"; SAP Help Portal — Commercial Models, akses 2026-09-22
> **Confidence**: high

> **Claim**: Dengan model berbasis konsumsi, pelanggan membeli *entitlement* ke seluruh layanan BTP yang eligible (saat ini & masa depan), dengan fleksibilitas menyalakan/mematikan dan berpindah antar layanan.
> **Number/specific**: Prabayar cloud credits untuk durasi kontrak; layanan diaktifkan sesuai kebutuhan tanpa kontrak per-layanan.
> **Source**: SAP Help Portal — "What Is the Consumption-Based Commercial Model?", akses 2026-09-22
> **Confidence**: high

> **Claim**: Cloud credits adalah komitmen prabayar; total kontrak dibagi menjadi *contract phases* (umumnya tahunan), dan total credits dibagi ke tiap fase.
> **Number/specific**: Saldo credit dihitung tiap bulan dengan mengurangi biaya seluruh layanan BTP bulan sebelumnya; informasi biaya & pemakaian ditampilkan untuk fase kontrak berjalan.
> **Source**: SAP Help Portal — Consumption-Based Commercial Model / Monitoring Usage and Consumption Costs, akses 2026-09-22
> **Confidence**: high

> **Claim**: Pada CPEA, cloud credit yang tidak terpakai hangus (forfeited) di akhir setiap fase kontrak (umumnya tahunan).
> **Number/specific**: Credit dapat di-*top up* kapan saja; **overage (pemakaian melebihi credit) ditagih pada list price** (tanpa diskon). Credit bersifat discountable saat pembelian.
> **Source**: SAP FAQ — "Consumption-based commercial model CPEA & Cloud Credits" (sap.com/documents/2021/02/…); SAP Community — CPEA credit monitoring, akses 2026-09-22
> **Confidence**: high (aturan carryover spesifik bergantung negosiasi kontrak — lihat Flags)

> **Claim**: SAP menyediakan **SAP BTP Cost Estimator** — alat online **gratis** untuk mengestimasi biaya bulanan berdasarkan rencana pemakaian layanan, sebelum berkomitmen.
> **Number/specific**: Diakses via **SAP Discovery Center**; input berupa *quota, metric, dan usage* per layanan (mis. jumlah API call, ukuran storage, compute unit); bisa memilih model lisensi (**CPEA atau Pay-As-You-Go**) dan membagikan estimasi via tautan.
> **Source**: SAP — "SAP Discovery Center — Estimator Tool" (sap.com/products/business-technology-platform/estimator-tool.html); SAP Learning — "Exploring SAP BTP Commercial Models and Estimating Costs", akses 2026-09-22
> **Confidence**: high

> **Claim**: Konsumsi aktual dipantau lewat **Cost and Usage Management** — halaman "Costs and Usage" di **SAP BTP Cockpit**.
> **Number/specific**: Menampilkan periode data, daftar semua layanan BTP yang dipakai global account, jumlah konsumsi & biaya **per service plan**; data mentah bisa diekspor sebagai **XLS**. Aktual bisa dibandingkan dengan estimasi untuk memperbaiki forecast.
> **Source**: SAP Learning — "Applying Cost and Usage Management"; SAP Help Portal — "Monitoring Usage and Consumption Costs in Your Global Account", akses 2026-09-22
> **Confidence**: high

> **Claim**: Konsumsi credit dihitung **per metrik masing-masing layanan**, bukan satu tarif seragam per instance.
> **Number/specific**: **SAP Build Apps** memakai 4 metrik kapasitas: **jumlah builds, jumlah tenants, cloud functions, dan storage**. Layanan lain memakai metrik berbeda (mis. runtime berbasis memori/compute; Integration Suite berbasis volume pesan). Cost Estimator meminta *quota/metric/usage* per layanan justru karena tiap layanan berbeda.
> **Source**: SAP Learning — Exploring SAP BTP Commercial Models; SAP — SAP Build Apps capacity metrics, akses 2026-09-22
> **Confidence**: high

> **Claim**: **SAP Build** (low-code) berjalan di atas SAP BTP dan ikut mengonsumsi cloud credit dalam model komersial yang sama.
> **Number/specific**: SAP Build Process Automation & SAP Build Apps dikonsumsi lewat sistem credit CPEA/BTPEA (atau langganan, tergantung model komersial yang dipilih).
> **Source**: SAP — SAP Build Process Automation Pricing; SAP Learning — BTP Commercial Models, akses 2026-09-22
> **Confidence**: high

> **Claim**: BTP dapat dikonsumsi sebagai bagian dari **RISE with SAP**, tetapi jumlah credit gratis bergantung paket.
> **Number/specific**: **RISE Base** tidak menyertakan free CPEA credits (menyertakan SAP Build Work Zone); **RISE Premium / Premium Plus** memungkinkan konsumsi BTP via CPEA credit atau Pay-As-You-Go. **SAP Launchpad service** & **SAP Mobile Start** termasuk dalam RISE tanpa mengonsumsi CPEA credit.
> **Source**: SAP Community — "RISE with SAP … Bundled Cloud Services: Base vs Premium vs Premium Plus"; SAP Community — "Maximize your RISE with SAP investment with SAP BTP", akses 2026-09-22
> **Confidence**: medium-high (pola paket resmi; entitlement pasti bergantung kontrak — lihat Flags)

> **Claim**: Sebagai acuan besaran, alokasi credit BTP dalam paket ERP cloud SAP dihitung sebagai persentase kecil dari nilai kontrak.
> **Number/specific**: Untuk **GROW with SAP**, pelanggan disebut menerima **1% dari net Annual Contract Value dalam CPEA credits**, dengan **minimum €2.000 dan maksimum €16.000**. (Acuan paket; angka pasti untuk RISE/kontrak spesifik wajib dikonfirmasi ke SAP account executive.)
> **Source**: SAP Community — GROW with SAP S/4HANA Cloud Public Edition (base/premium) overview blogs, akses 2026-09-22
> **Confidence**: medium (angka paket dari SAP Community; label sebagai acuan, bukan tarif universal — lihat Flags)

> **Claim**: Prinsip clean core: jaga inti S/4HANA standar/upgrade-safe dengan memindahkan kustomisasi ke luar core — umumnya ke SAP BTP lewat *side-by-side extensibility*.
> **Number/specific**: Ekstensi side-by-side berjalan sebagai aplikasi independen di BTP; karena itu ia berada dalam perimeter penagihan konsumsi BTP — "bersih" tidak berarti "bebas biaya".
> **Source**: Landing page hub Soltius "SAP Clean Core — The Complete Guide" (WebFetch 2026-09-22); SAP clean core guidance (help.sap.com), konsisten dengan knowledge_base/product_matrix.md
> **Confidence**: high

> **Claim**: Urgensi migrasi ke cloud ERP (tempat model konsumsi BTP berlaku) didorong akhir maintenance ECC.
> **Number/specific**: Mainstream maintenance SAP ECC 6.0 (Business Suite 7) berakhir **2027**, dengan extended support berbayar hingga **2030**.
> **Source**: SAP maintenance strategy (diumumkan Feb 2020); konsisten dengan knowledge_base/product_matrix.md
> **Confidence**: high (attribute ke SAP; historis pernah bergeser — lihat Flags)

> **Claim**: Konteks pasar: belanja transformasi digital & cloud Indonesia tumbuh cepat, latar relevan untuk keputusan penganggaran BTP.
> **Number/specific**: Pasar **cloud Indonesia** diperkirakan **USD 2,81 miliar (2026)** naik dari USD 2,46 miliar (2025), CAGR ~14,3% menuju ~USD 5,5 miliar pada 2031. Pasar **transformasi digital Indonesia** diperkirakan **USD 29,03 miliar (2026)** naik dari USD 24,37 miliar (2025), CAGR ~19,1% menuju ~USD 69,57 miliar pada 2031.
> **Source**: Mordor Intelligence — Indonesia Cloud Market & Indonesia Digital Transformation Market (riset pihak ketiga), akses 2026-09-22
> **Confidence**: medium (riset pasar pihak ketiga; sajikan beratribusi + berlabel estimasi — lihat Flags)

> **Claim**: Overuse credit dapat dipantau & di-alert secara proaktif (bukti kontrol teknis nyata).
> **Number/specific**: SAP Community mendokumentasikan cara memicu email alert saat konsumsi CPEA mendekati/melebihi ambang bulanan, memakai data usage BTP.
> **Source**: SAP Community — "Trigger Alert For Monthly CPEA credits overuse in BTP"; "Monitoring CPEA Cloud Credits … Triggering Email Notifications", akses 2026-09-22
> **Confidence**: high

> **Claim**: Pemisahan tanggung jawab biaya dapat ditata lewat struktur akun BTP.
> **Number/specific**: Konsumsi ditampilkan di level **global account**, dan lanskap dapat dipecah menjadi **subaccount** (mis. per proyek/departemen) sehingga biaya dapat ditelusuri untuk chargeback/showback dan review per unit.
> **Source**: SAP Help Portal — Monitoring Usage and Consumption Costs in Your Global Account; SAP BTP account model, akses 2026-09-22
> **Confidence**: high (mekanisme subaccount = fakta; praktik chargeback = pola tata kelola, bukan fitur bernama)

## Solution focus + Soltius anchor (from product_matrix.md)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| SAP BTP + consumption-based model | 3 varian (BTPEA/CPEA/PAYG); prabayar; credit hangus akhir fase | H2 #1 & #3 | — (edukasi) |
| Capex→opex shift (side-by-side di BTP) | Build ABAP satu kali → konsumsi berulang; tetap upgrade-safe | H2 #2 | — |
| Cost driver per layanan (Build Apps, Integration Suite, runtime) | Metrik berbeda per layanan; SAP Build ikut konsumsi credit | H2 #4 | Tie-in cousin: Low-Code (SAP Build) |
| FinOps: Cost Estimator + Cost and Usage Management + subaccount/alert | Alat resmi & gratis; ekspor XLS; alert overuse | H2 #5 | **ERP Strategy + Digital Platform + AMS sebagai SAP Platinum Partner via United VARs** — closing CTA (sizing & tata kelola lanskap BTP) |
| Kapan BELUM ekonomis | Risiko over-commit (hangus) vs under-commit (overage list price); mid-market mulai kecil | H2 #6 | Tie-in cousin: ERP migration to cloud (TCO) |

Reminder: Soltius **men-sizing, mengimplementasikan, dan menata kelola** lanskap ekstensi/BTP — **tidak menjual lisensi/credit dan tidak membangun SAP BTP**. Maks 2–3 self-mention (closing + 1 aside FinOps opsional di H2 #5). Cousin sesuai cross-link map: **Low-Code/SAP Build** (`/id/blog/low-code-and-no-code-platforms`) dan **ERP migration to cloud** (`/id/blog/migrasi-erp-ke-cloud`). Hub sendiri (English): `https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide`.

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **SAP Help Portal — "What Is the Consumption-Based Commercial Model?"** — https://help.sap.com/docs/btp/sap-business-technology-platform/what-is-consumption-based-commercial-model — *what it backs*: definisi model konsumsi, varian BTPEA/CPEA/PAYG, cloud credits, fase kontrak. **(SAP official — otoritas tertinggi; catatan: halaman ber-render JS, tidak bisa di-WebFetch langsung, dikonfirmasi via ringkasan search + halaman SAP Learning.)**
2. **SAP Learning — "Applying Cost and Usage Management"** — https://learning.sap.com/courses/operating-sap-business-technology-platform/using-cost-and-usage-management — *what it backs*: pemantauan biaya per service plan di BTP Cockpit, ekspor XLS, membandingkan aktual vs estimasi. **(SAP official.)**
3. **SAP — SAP BTP Pricing / Discovery Center Estimator Tool** — https://www.sap.com/products/technology-platform/pricing.html · https://www.sap.com/products/business-technology-platform/estimator-tool.html — *what it backs*: keberadaan & fungsi Cost Estimator gratis (quota/metric/usage; pilih CPEA/PAYG). **(SAP official.)**
4. **SAP FAQ — "Consumption-based commercial model CPEA & Cloud Credits"** — https://www.sap.com/documents/2021/02/668ae6f5-cd7d-0010-87a3-c30de2ffd8ff.html — *what it backs*: mekanika cloud credits, credit hangus akhir fase, top-up, overage list price. **(SAP official; catatan: PDF mengembalikan 403 via WebFetch, isi dikonfirmasi via ringkasan search SAP.)**

Priority terpenuhi: seluruh fakta produk/harga bersumber SAP official (Help Portal / Learning / sap.com / SAP Community). Sumber advisory pihak ketiga (itaa.com, saplicensingexperts.com, finoptory.ai) **tidak dikutip sebagai fakta**; hanya konteks/estimasi bila beratribusi. Konteks pasar Indonesia (Mordor Intelligence) diberi label estimasi riset pihak ketiga.

## FAQ Q&As (7 drafted, Bahasa Indonesia)

### Apakah SAP BTP berbayar dan berapa kisaran biayanya?
Ya. SAP BTP ditagih dengan model berbasis konsumsi (consumption-based), bukan lisensi flat — Anda membayar sesuai layanan yang aktif dan seberapa banyak dipakai. Kisaran biaya sangat bergantung jumlah dan jenis ekstensi, sehingga SAP tidak mempublikasikan satu harga tetap. Gunakan **SAP BTP Cost Estimator** (gratis, di SAP Discovery Center) untuk menghitung estimasi bulanan berdasarkan rencana pemakaian Anda sendiri sebelum berkomitmen.

### Apa itu CPEA dan bagaimana cara kerjanya?
CPEA (Cloud Platform Enterprise Agreement) adalah model komersial prabayar SAP BTP: Anda membeli sejumlah *cloud credits* untuk durasi kontrak, lalu credit itu terpakai saat layanan BTP aktif. Kontrak dibagi menjadi fase (umumnya tahunan), dan saldo dihitung tiap bulan. Sejak sekitar April 2024 CPEA hanya berlaku untuk akun yang sudah ada; layanan baru kini hadir lewat model penerusnya, BTPEA.

### Apa bedanya CPEA dan BTPEA?
BTPEA (SAP BTP Enterprise Agreement) adalah evolusi dari CPEA. Keduanya sama-sama model *commit-to-consume* berbasis cloud credit prabayar dengan komitmen konsumsi tahunan. Perbedaan utamanya soal ketersediaan: cakupan layanan CPEA tidak lagi diperluas dan hanya untuk akun eksisting, sedangkan semua layanan baru SAP BTP tersedia melalui BTPEA. Untuk pelanggan baru pada 2026, BTPEA adalah model yang berlaku.

### Apakah credit BTP yang tidak terpakai akan hangus?
Pada CPEA, ya — cloud credit yang tidak terpakai umumnya hangus (forfeited) di akhir setiap fase kontrak, biasanya tahunan. Anda bisa menambah (top-up) credit kapan saja, tetapi pemakaian yang melebihi credit (overage) ditagih pada harga list tanpa diskon. Karena itu memperkirakan volume secara realistis penting: over-commit membuat credit hangus, under-commit membuat overage jadi mahal.

### Apakah clean core benar-benar menghemat biaya?
Clean core tidak menghapus biaya kustomisasi — ia memindahkannya. Biaya build ABAP satu kali di dalam core (capex) berubah menjadi biaya konsumsi BTP yang berulang (opex) saat kustomisasi dipindah ke side-by-side extensibility. Nilainya tetap nyata: sistem tetap upgrade-safe dan siap inovasi. Namun penghematan hanya terwujud bila konsumsi BTP dianggarkan dan dikelola sadar, bukan diasumsikan gratis.

### Apakah SAP Build ikut memakan biaya BTP?
Ya. SAP Build (Build Apps dan Build Process Automation) berjalan di atas SAP BTP dan mengonsumsi cloud credit dalam model komersial yang sama. SAP Build Apps, misalnya, dihitung lewat metrik kapasitas seperti jumlah builds, tenants, cloud functions, dan storage. Jadi inisiatif low-code untuk mempercepat pengembangan tetap perlu masuk perhitungan konsumsi BTP, bukan dianggap terpisah dan gratis.

### Bagaimana cara memantau konsumsi BTP agar tidak membengkak?
Pakai alat resmi SAP. **SAP BTP Cost Estimator** untuk mengestimasi sebelum tanda tangan; halaman **Costs and Usage (Cost and Usage Management)** di SAP BTP Cockpit untuk melihat konsumsi aktual per service plan dan mengekspornya ke XLS. Tambahkan struktur subaccount per proyek/departemen agar biaya bisa ditelusuri, dan siapkan alert email saat konsumsi mendekati ambang bulanan.

## Data tables for the writer

### Tiga varian model komersial SAP BTP (berbasis konsumsi)
| Aspek | BTPEA (SAP BTP Enterprise Agreement) | CPEA (Cloud Platform Enterprise Agreement) | Pay-As-You-Go |
|---|---|---|---|
| Status 2026 | Model penerus; semua layanan baru | Hanya akun eksisting (sejak ~Apr 2024); cakupan tidak diperluas | Aktif |
| Komitmen | Commit-to-consume (prabayar + komitmen tahunan) | Commit-to-consume (prabayar + komitmen tahunan) | Tanpa komitmen di muka |
| Cara bayar | Cloud credits prabayar | Cloud credits prabayar | Bayar sesuai pemakaian aktual |
| Credit tak terpakai | Berbasis fase kontrak (hangus akhir fase, seperti CPEA) | Hangus di akhir fase (umumnya tahunan) | Tidak relevan (tanpa credit prabayar) |
| Cocok untuk | Konsumsi terencana & bertumbuh, portofolio layanan luas | (Legacy) pelanggan lama | Eksperimen / konsumsi tak terprediksi / awal kecil |

> Catatan: mekanisme *banding/tiering* BTPEA (harga unit turun saat volume naik) sering disebut sumber pihak ketiga tetapi belum dikonfirmasi dari sumber SAP primer — lihat Flags. Aman menulis "BTPEA = model penerus commit-to-consume; detail tiering dinegosiasi dalam kontrak."

### Dari mana biaya BTP muncul? (cost driver per jenis ekstensi)
| Cost driver | Contoh metrik konsumsi | Catatan |
|---|---|---|
| Aplikasi side-by-side (runtime) | Memori/compute unit, storage | Aplikasi independen; konsumsi lebih besar dari sekadar in-app extensibility |
| SAP Build Apps (low-code) | Jumlah builds, tenants, cloud functions, storage | Ikut memakan credit BTP |
| SAP Build Process Automation | Metrik proses/otomasi (via credit CPEA/BTPEA) | Sering terlupa dalam anggaran |
| Integration Suite | Volume pesan/integration flow | Arsitektur integrasi buruk memperbesar konsumsi |
| Layanan data/AI (mis. HANA Cloud, AI Core) | Capacity unit / compute | HANA Cloud punya Capacity Unit Estimator sendiri |

### FinOps clean core — checklist kontrol biaya (untuk H2 #5, writer boleh jadikan numbered list)
1. Minta *credit rate card* / estimasi resmi sebelum tanda tangan; verifikasi ulang dengan **SAP BTP Cost Estimator** memakai volume transaksi Anda sendiri.
2. Pantau aktual di **Cost and Usage Management** (BTP Cockpit); ekspor XLS untuk review bulanan.
3. Pecah lanskap jadi **subaccount** per proyek/departemen + penamaan konsisten untuk chargeback/showback.
4. Pasang **alert** saat konsumsi mendekati ambang; tunjuk *platform owner* dengan otoritas anggaran.
5. Pisahkan layanan produksi bervolume tinggi & stabil (rate terkunci/komitmen) dari eksperimen (lebih cocok Pay-As-You-Go).
6. Estimasi konservatif untuk hindari **over-commit** (credit hangus) sekaligus **under-commit** (overage list price).

## Edge cases & nuance

- **"Bersih" ≠ "bebas biaya".** Ekstensi clean-core-safe (side-by-side di BTP) tetap ditagih dengan aturan konsumsi yang sama seperti ekstensi side-by-side lain. Kebersihan arsitektur menghilangkan utang teknis upgrade, bukan biaya konsumsi.
- **Model konsumsi ≠ selalu lebih mahal.** Untuk perusahaan yang benar-benar butuh ekstensi, opex BTP bisa lebih efisien daripada memelihara Z-code yang menyandera setiap upgrade. Angle-nya "biaya yang harus dianggarkan sadar", bukan "clean core itu jebakan".
- **Over-commit vs under-commit adalah dua sisi risiko.** Beli credit terlalu banyak → hangus akhir fase. Terlalu sedikit → overage list price (tanpa diskon). Titik amannya di tengah, dengan estimasi berbasis volume nyata.
- **Mid-market boleh mulai kecil.** Pay-As-You-Go cocok untuk fase awal/eksperimen sebelum berkomitmen ke credit pool. Perusahaan dengan proses mendekati standar mungkin belum perlu belanja BTP besar.
- **RISE/GROW sudah membawa sebagian credit.** Jangan menghitung biaya BTP seolah dari nol jika klien pakai RISE Premium/Premium Plus atau GROW — sebagian entitlement sudah termasuk (tapi Base tidak). Selalu cek paket.
- **Beberapa layanan gratis.** SAP Launchpad service & SAP Mobile Start dalam RISE tidak mengonsumsi CPEA credit — bukti bahwa tidak semua yang di BTP menagih credit.

## Flags (open factual risk)

- ⚠️ **"Tiap application instance = minimal 1 unit CPEA"** (dari brief): **tidak akurat sebagai aturan universal.** Konsumsi dihitung per metrik tiap layanan (Build Apps: builds/tenants/cloud functions/storage; runtime: memori/compute; Integration Suite: volume pesan). → Rekomendasi: tulis "setiap layanan/aplikasi yang aktif mengonsumsi credit menurut metrik masing-masing, dan banyak layanan memiliki kuota/blok minimum" — **jangan** klaim tarif seragam "1 unit per instance".
- ⚠️ **Mekanisme banding/tiering BTPEA** (harga unit turun saat volume naik): disebut sumber pihak ketiga (finoptory.ai), **belum dikonfirmasi dari sumber SAP primer**. → Rekomendasi: sebut BTPEA sebagai "model penerus commit-to-consume"; jika menyebut tiering, beri hedge ("detail tiering dinegosiasi per kontrak") tanpa angka.
- ⚠️ **Angka pihak ketiga di brief** (~25% credit BTP tak terpakai/~$600jt 2025; understatement estimasi awal ~45%; FinOps hemat 20–40%; integrasi buruk 3–5×; rentang belanja mid-market €100K–500K/thn & enterprise €500K–2jt+/thn; pelatihan developer €2.000–5.000/orang): **tidak dapat diverifikasi dari sumber primer SAP.** → Rekomendasi: **drop** demi keamanan E-E-A-T; atau bila dipakai, wajib "menurut [nama sumber advisory], sebagai acuan lapangan, bukan angka resmi SAP" + label estimasi. Jangan sajikan sebagai fakta.
- ⚠️ **Angka credit GROW (1% net ACV, min €2.000 / maks €16.000)** & **entitlement RISE per paket**: berasal dari SAP Community (bukan halaman pricing resmi), dan **selalu bergantung kontrak spesifik**. → Rekomendasi: sajikan sebagai "acuan paket; angka pasti dikonfirmasi ke SAP/mitra implementasi", bukan tarif universal.
- ⚠️ **Konteks pasar Indonesia (Mordor Intelligence)**: riset pasar pihak ketiga, bukan IDC/BPS/Kominfo. → Rekomendasi: beratribusi ("menurut Mordor Intelligence") + label estimasi; pakai hanya sebagai latar tren, bukan angka inti artikel. (Upaya menemukan angka IDC/BPS spesifik konsumsi BTP tidak membuahkan sumber langsung.)
- ⚠️ **Tanggal maintenance ECC 2027/2030**: benar per pengumuman SAP 2020, tetapi historis pernah bergeser. → Rekomendasi: attribute ke SAP ("menurut strategi maintenance SAP") + sebut opsi extended support berbayar.
- ⚠️ **Aturan carryover credit**: default CPEA = hangus akhir fase, tetapi **carryover bisa dinegosiasikan** dalam sebagian kontrak. → Rekomendasi: tulis "umumnya hangus di akhir fase kecuali carryover disepakati dalam kontrak" agar tidak absolut.

## Definition snippet draft (52 words)

> **SAP BTP (Business Technology Platform)** adalah platform ekstensi tempat kustomisasi clean core dipindahkan lewat *side-by-side extensibility*, dan ia ditagih dengan **model berbasis konsumsi (consumption-based)** — bukan lisensi tetap. Artinya clean core tidak menghapus biaya kustomisasi, melainkan **memindahkannya dari capex satu kali menjadi opex berulang** yang perlu dianggarkan dan dikendalikan sejak awal.
