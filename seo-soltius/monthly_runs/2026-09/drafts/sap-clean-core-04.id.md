---
title: "SAP Clean Core: Biaya BTP yang Jarang Dihitung"
meta_title: "SAP Clean Core: Biaya BTP yang Jarang Dihitung"
meta_description: "SAP Clean Core memindahkan kustomisasi ke SAP BTP, tapi bukan gratis. Pahami model biaya CPEA/BTPEA, cost driver per layanan, dan cara FinOps mengendalikannya."
slug: "sap-clean-core-biaya-btp-side-by-side"
language: "id"
primary_keyword: "SAP Clean Core"
secondary_keywords:
  - "SAP BTP"
  - "side-by-side extensibility"
  - "biaya SAP BTP"
  - "CPEA (Cloud Platform Enterprise Agreement)"
  - "BTPEA (SAP BTP Enterprise Agreement)"
  - "consumption-based commercial model"
  - "cloud credits SAP"
  - "TCO ekstensi SAP"
  - "FinOps SAP BTP"
  - "capex vs opex ERP"
  - "SAP Build"
  - "SAP BTP Cost Estimator"
internal_links:
  - url: "https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide"
    anchor: "SAP Clean Core"
  - url: "https://www.soltius.co.id/id/blog/low-code-and-no-code-platforms"
    anchor: "platform low-code SAP Build"
  - url: "https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud"
    anchor: "migrasi ERP ke cloud"
external_citations:
  - url: "https://help.sap.com/docs/btp/sap-business-technology-platform/what-is-consumption-based-commercial-model"
    context: "Definisi consumption-based commercial model SAP BTP, varian BTPEA/CPEA/PAYG, cloud credits, dan fase kontrak"
  - url: "https://www.sap.com/products/business-technology-platform/estimator-tool.html"
    context: "Keberadaan dan fungsi SAP BTP Cost Estimator gratis (input quota/metric/usage) di SAP Discovery Center"
brief_id: "sap-clean-core-04"
target_word_count: 1650
publish_month: "2026-09"
word_count: 1950
---

# SAP Clean Core: Biaya BTP yang Jarang Dihitung

Tim Anda sudah menyetujui strategi clean core: berhenti memodifikasi inti S/4HANA, pindahkan semua kustomisasi ke SAP BTP. Setahun berjalan, tagihan konsumsi BTP masuk, dan angkanya melewati estimasi yang diberikan saat kontrak. Skenario ini berulang di banyak proyek [SAP Clean Core](https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide), dan hampir selalu karena satu hal yang tidak masuk anggaran sejak awal: memindahkan kustomisasi ke BTP tidak menghapus biayanya, hanya mengubah bentuknya. Artikel ini membedah dari mana biaya itu muncul, bagaimana model komersial BTP menagihnya, dan langkah konkret mengendalikannya sebelum kontrak diteken, dari sudut pandang finansial, bukan tutorial teknis.

> **Ringkas:** SAP BTP (*Business Technology Platform*) adalah platform tempat kustomisasi clean core dipindahkan lewat *side-by-side extensibility*, dan ia ditagih dengan model berbasis konsumsi (*consumption-based*), bukan lisensi tetap. Artinya clean core tidak menghapus biaya kustomisasi, melainkan memindahkannya dari capex satu kali menjadi opex berulang yang perlu dianggarkan dan dikendalikan sejak awal.

Yang akan kita bahas: mengapa BTP berbayar, bagaimana biaya bergeser dari capex ke opex, perbedaan model CPEA, BTPEA, dan Pay-As-You-Go, cost driver per jenis ekstensi, cara mengestimasi dan mengontrolnya, serta kapan model ini justru belum ekonomis untuk Anda.

## Apakah SAP BTP berbayar? Mengapa clean core memunculkan biaya baru

Ya, SAP BTP berbayar. Ia ditagih dengan model berbasis konsumsi (*consumption-based commercial model*): perusahaan membayar sesuai layanan yang diaktifkan dan seberapa banyak dipakai, bukan lisensi flat. Karena clean core memindahkan kustomisasi ke aplikasi *side-by-side* yang berjalan di atas BTP, kustomisasi itu kini berada di dalam perimeter penagihan konsumsi. Bersih dari sisi arsitektur, tetap berbiaya dari sisi operasional.

Mantra clean core mudah diingat: jangan sentuh core, pindahkan kustomisasi ke BTP. Yang jarang ikut disebut adalah bahwa BTP bukan gudang gratis untuk menampung logika kustom. Dalam model konsumsi, perusahaan membeli hak akses (*entitlement*) ke seluruh layanan BTP yang eligible, lalu mengaktifkan layanan sesuai kebutuhan tanpa kontrak terpisah per layanan (SAP Help Portal, *What Is the Consumption-Based Commercial Model?*). Fleksibilitas menyalakan dan mematikan layanan itu nyaman, tetapi setiap layanan yang menyala mulai menghitung pemakaian.

Di lapangan, asumsi "sudah pindah ke BTP berarti gratis" muncul karena biaya lama, yaitu jam kerja developer ABAP membangun *enhancement* di dalam core, memang hilang dari pandangan. Yang menggantikannya bukan nol, melainkan pos baru: konsumsi platform yang tercatat setiap bulan. Pergeseran ini bukan alasan menghindari clean core. Ia alasan untuk menganggarkannya dengan mata terbuka.

## Bukan menghilangkan biaya, tapi memindahkannya: dari capex ke opex

Clean core tidak menghapus biaya kustomisasi. Ia menggeser bentuknya: dari capex satu kali (biaya membangun kode ABAP di dalam core) menjadi opex berulang (konsumsi BTP yang ditagih tiap fase kontrak). Pergeseran ini tetap layak karena sistem menjadi *upgrade-safe* dan tidak menahan inovasi, tetapi ia harus dianggarkan secara sadar, bukan diasumsikan lenyap.

Ada alasan kuat mengapa opex yang terukur lebih baik daripada capex yang "murah di depan". Kode kustom di dalam core memang tampak sekali bayar, padahal ia menyandera setiap upgrade sesudahnya: tiap kali SAP merilis pembaruan, kustomisasi itu harus diuji ulang, kadang diperbaiki, dan itulah utang teknis yang membuat proyek upgrade mahal dan menakutkan. Memindahkannya ke *side-by-side extension* di BTP memutus rantai itu. Biaya konsumsi berulang adalah harga untuk sistem yang bisa di-upgrade dua kali setahun tanpa drama.

Yang harus jelas bagi CFO: ekstensi yang "clean-core-safe" tetap ditagih dengan aturan konsumsi yang sama seperti ekstensi *side-by-side* lain. Kebersihan arsitektur menghilangkan utang teknis upgrade, bukan biaya konsumsi. Karena itu biaya BTP adalah komponen TCO yang nyata dari langkah [migrasi ERP ke cloud](https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud), termasuk lewat RISE with SAP, dan seharusnya dihitung sejak studi kelayakan, bukan ditemukan setahun setelah go-live.

## CPEA, BTPEA, atau Pay-As-You-Go? Tiga model komersial SAP BTP

SAP BTP punya tiga model komersial berbasis konsumsi: BTPEA (*SAP BTP Enterprise Agreement*), CPEA (*Cloud Platform Enterprise Agreement*), dan Pay-As-You-Go. BTPEA adalah evolusi dari CPEA. Sejak sekitar 15 April 2024, CPEA hanya berlaku untuk akun yang sudah ada dan cakupan layanannya tidak lagi diperluas, sementara semua layanan baru hadir lewat BTPEA. Untuk pelanggan baru pada 2026, BTPEA adalah model default.

BTPEA dan CPEA sama-sama model *commit-to-consume*: perusahaan membeli sejumlah *cloud credits* prabayar dengan komitmen konsumsi tahunan, lalu credit terpakai saat layanan aktif. Pay-As-You-Go berbeda, tanpa komitmen di muka, cocok untuk eksperimen atau konsumsi yang belum bisa diprediksi. Tabel berikut merangkum perbedaannya.

| Aspek | BTPEA | CPEA | Pay-As-You-Go |
|---|---|---|---|
| Status 2026 | Model penerus; semua layanan baru | Hanya akun lama (sejak ~Apr 2024) | Aktif |
| Komitmen | *Commit-to-consume* (prabayar + tahunan) | *Commit-to-consume* (prabayar + tahunan) | Tanpa komitmen di muka |
| Cara bayar | *Cloud credits* prabayar | *Cloud credits* prabayar | Bayar sesuai pemakaian aktual |
| Credit tak terpakai | Berbasis fase kontrak | Umumnya hangus di akhir fase | Tidak relevan |
| Cocok untuk | Konsumsi terencana & bertumbuh | (Legacy) pelanggan lama | Eksperimen / mulai kecil |

Satu catatan kejujuran: mekanisme *banding/tiering* BTPEA (harga unit turun saat volume naik) sering disebut sumber pihak ketiga, tetapi belum saya temukan konfirmasinya dari dokumentasi SAP primer. Aman menyebut BTPEA sebagai model penerus *commit-to-consume*, dengan detail tiering yang dinegosiasikan per kontrak, tanpa mengutip angka tiering tertentu sebagai fakta.

## Dari mana biaya BTP muncul? Cost driver per jenis ekstensi

Biaya BTP muncul dari konsumsi tiap layanan yang aktif, dihitung menurut metrik masing-masing layanan, bukan satu tarif seragam per aplikasi. Aplikasi *side-by-side* memakai runtime (memori/compute) dan storage; SAP Build Apps dihitung dari jumlah *builds*, *tenants*, *cloud functions*, dan storage; Integration Suite dari volume pesan. Banyak layanan juga memiliki kuota atau blok minimum, jadi mengaktifkan layanan sudah menimbulkan biaya dasar.

Inilah alasan mengapa Cost Estimator SAP meminta *quota*, *metric*, dan *usage* per layanan: setiap layanan berbeda cara menghitungnya. Yang sering luput dari anggaran adalah inisiatif low-code. SAP Build (Build Apps dan Build Process Automation) berjalan di atas BTP dan ikut mengonsumsi credit dalam model komersial yang sama. Tim yang mengadopsi [platform low-code SAP Build](https://www.soltius.co.id/id/blog/low-code-and-no-code-platforms) untuk mempercepat pengembangan aplikasi perlu memasukkannya ke perhitungan konsumsi, bukan menganggapnya pos terpisah dan gratis.

Beberapa cost driver utama yang perlu masuk radar:

| Cost driver | Contoh metrik konsumsi | Catatan |
|---|---|---|
| Aplikasi *side-by-side* (runtime) | Memori/compute unit, storage | Aplikasi independen; konsumsi lebih besar |
| SAP Build Apps (low-code) | Jumlah *builds*, *tenants*, *cloud functions*, storage | Ikut memakan credit BTP |
| SAP Build Process Automation | Metrik proses/otomasi | Sering terlupa dalam anggaran |
| Integration Suite | Volume pesan / *integration flow* | Arsitektur integrasi buruk memperbesar konsumsi |
| Layanan data/AI (mis. HANA Cloud) | *Capacity unit* / compute | Punya estimator kapasitas sendiri |

Arsitektur yang buruk adalah pengganda biaya yang paling mudah dihindari. Integrasi yang berputar-putar, aplikasi yang tidak pernah dimatikan saat idle, atau data yang disalin berkali-kali akan menaikkan volume pesan dan pemakaian runtime tanpa menambah nilai bisnis. Desain yang rapi bukan cuma soal performa, tetapi langsung memengaruhi tagihan.

## Cara mengestimasi dan mengontrol biaya BTP (FinOps clean core)

Kendalikan biaya BTP dengan disiplin FinOps: estimasikan sebelum tanda tangan memakai SAP BTP Cost Estimator, pantau konsumsi aktual di halaman Cost and Usage Management pada SAP BTP Cockpit, pecah lanskap menjadi *subaccount* per proyek, pasang *alert* saat mendekati ambang, dan tunjuk seorang *platform owner* dengan otoritas anggaran yang meninjau konsumsi tiap bulan. Alatnya resmi dan sebagian besar gratis.

Kabar baiknya, SAP menyediakan alat kontrol yang sering tidak dipakai. **SAP BTP Cost Estimator** (gratis, di **SAP Discovery Center**) memungkinkan Anda menyusun estimasi biaya bulanan berdasarkan rencana pemakaian sebelum berkomitmen, dan bisa dibagikan lewat tautan. **Cost and Usage Management** di SAP BTP Cockpit menampilkan konsumsi dan biaya aktual per *service plan*, yang bisa diekspor ke XLS untuk membandingkan realisasi dengan estimasi. Langkah praktisnya:

1. Minta estimasi resmi sebelum tanda tangan, lalu verifikasi ulang dengan **SAP BTP Cost Estimator** memakai volume transaksi Anda sendiri, bukan asumsi vendor.
2. Pantau realisasi di **Cost and Usage Management** (BTP Cockpit); ekspor XLS untuk bahan review bulanan.
3. Pecah lanskap menjadi **subaccount** per proyek atau departemen, dengan penamaan konsisten untuk *chargeback/showback*.
4. Pasang **alert** saat konsumsi mendekati ambang, dan tunjuk *platform owner* yang bertanggung jawab atas anggaran BTP.
5. Pisahkan layanan produksi bervolume tinggi dan stabil (lebih cocok komitmen credit) dari eksperimen (lebih cocok Pay-As-You-Go).
6. Estimasi secara konservatif untuk menghindari sekaligus *over-commit* (credit hangus) dan *under-commit* (overage mahal).

Penunjukan platform owner dengan review konsumsi bulanan ini bukan teori. Ini pola tata kelola yang Soltius terapkan bersama klien Application Management Services (AMS), agar konsumsi BTP terpantau seperti pos biaya operasional lain, bukan angka yang baru dilihat saat renewal.

## Kapan model BTP ini BELUM ekonomis untuk Anda

Model BTP belum tentu ekonomis bila kebutuhan ekstensi Anda minimal atau proses bisnis sudah mendekati standar. Membeli *credit pool* besar berisiko hangus di akhir fase (*over-commit*), sedangkan membeli terlalu sedikit membuat pemakaian berlebih (*overage*) ditagih harga list tanpa diskon (*under-commit*). Untuk banyak perusahaan mid-market, Pay-As-You-Go lebih aman sebagai titik awal sebelum berkomitmen ke credit pool.

Bagian ini jarang ditulis, padahal justru di sini kepercayaan dibangun. Tidak setiap perusahaan perlu belanja BTP besar. Jika proses bisnis Anda bisa berjalan dengan konfigurasi standar dan sedikit *in-app extensibility*, memaksakan banyak aplikasi *side-by-side* hanya demi terlihat "paling bersih" adalah bentuk *over-engineering* yang mahal. Kebersihan yang berlebihan bisa sama borosnya dengan kustomisasi yang berlebihan.

Anda kemungkinan belum perlu berkomitmen ke credit pool besar bila kondisi berikut menggambarkan situasi Anda:

- **Kebutuhan ekstensi minimal.** Proses inti bisa berjalan dengan konfigurasi standar dan *in-app extensibility* ringan, tanpa banyak aplikasi *side-by-side* independen.
- **Volume belum bisa diperkirakan.** Anda belum punya data pemakaian yang cukup, sehingga komitmen credit tahunan berisiko meleset ke dua arah sekaligus.
- **Masih fase eksperimen.** Bila baru menjalankan beberapa *proof of concept* sesekali, Pay-As-You-Go menagih sesuai pemakaian tanpa credit yang bisa hangus.

Perlu juga dicek apa yang sudah Anda miliki. Sebagian paket ERP cloud SAP sudah membawa credit. Pada GROW with SAP, misalnya, pelanggan disebut menerima 1% dari nilai kontrak tahunan bersih dalam bentuk CPEA credit, dengan minimum €2.000 dan maksimum €16.000 per tahun (acuan paket dari komunitas SAP; angka pasti wajib dikonfirmasi ke SAP atau mitra implementasi Anda). Pada RISE with SAP, paket Base tidak menyertakan free CPEA credit, sedangkan Premium dan Premium Plus memungkinkan konsumsi BTP. Beberapa layanan seperti SAP Launchpad service dan SAP Mobile Start bahkan termasuk tanpa memakan credit. Jangan menghitung biaya BTP seolah dari nol jika sebagian entitlement sudah ada.

## FAQ (Pertanyaan yang Sering Diajukan)

### Apakah SAP BTP berbayar dan berapa kisaran biayanya?
Ya. SAP BTP ditagih dengan model berbasis konsumsi (*consumption-based*), bukan lisensi flat, jadi Anda membayar sesuai layanan yang aktif dan seberapa banyak dipakai. Karena biaya sangat bergantung jumlah dan jenis ekstensi, SAP tidak mempublikasikan satu harga tetap. Gunakan SAP BTP Cost Estimator (gratis, di SAP Discovery Center) untuk menghitung estimasi bulanan berdasarkan rencana pemakaian Anda sendiri sebelum berkomitmen.

### Apa itu CPEA dan bagaimana cara kerjanya?
CPEA (*Cloud Platform Enterprise Agreement*) adalah model komersial prabayar SAP BTP: Anda membeli sejumlah cloud credits untuk durasi kontrak, lalu credit terpakai saat layanan BTP aktif. Kontrak dibagi menjadi fase, umumnya tahunan, dan saldo dihitung tiap bulan. Sejak sekitar 15 April 2024, CPEA hanya berlaku untuk akun yang sudah ada; layanan baru kini hadir lewat model penerusnya, BTPEA.

### Apa bedanya CPEA dan BTPEA?
BTPEA (*SAP BTP Enterprise Agreement*) adalah evolusi dari CPEA. Keduanya sama-sama model *commit-to-consume* berbasis cloud credit prabayar dengan komitmen konsumsi tahunan. Bedanya soal ketersediaan: cakupan layanan CPEA tidak lagi diperluas dan hanya untuk akun lama, sedangkan semua layanan baru SAP BTP tersedia lewat BTPEA. Untuk pelanggan baru pada 2026, BTPEA adalah model yang berlaku.

### Apakah credit BTP yang tidak terpakai akan hangus?
Pada CPEA, umumnya ya. Cloud credit yang tidak terpakai biasanya hangus (*forfeited*) di akhir tiap fase kontrak, kecuali *carryover* disepakati dalam kontrak. Anda bisa menambah (*top-up*) credit kapan saja, tetapi pemakaian yang melebihi credit (*overage*) ditagih harga list tanpa diskon. Karena itu memperkirakan volume secara realistis penting: over-commit membuat credit hangus, under-commit membuat overage mahal.

### Apakah clean core benar-benar menghemat biaya?
Clean core tidak menghapus biaya kustomisasi, ia memindahkannya. Biaya build ABAP satu kali di dalam core (capex) berubah menjadi konsumsi BTP yang berulang (opex) saat kustomisasi dipindah ke *side-by-side extensibility*. Nilainya tetap nyata: sistem menjadi upgrade-safe dan siap inovasi. Namun penghematan hanya terwujud bila konsumsi BTP dianggarkan dan dikelola sadar, bukan diasumsikan gratis.

### Apakah SAP Build ikut memakan biaya BTP?
Ya. SAP Build (Build Apps dan Build Process Automation) berjalan di atas SAP BTP dan mengonsumsi cloud credit dalam model komersial yang sama. SAP Build Apps, misalnya, dihitung lewat metrik kapasitas seperti jumlah builds, tenants, cloud functions, dan storage. Jadi inisiatif low-code untuk mempercepat pengembangan tetap perlu masuk perhitungan konsumsi BTP, bukan dianggap terpisah dan bebas biaya.

### Bagaimana cara memantau konsumsi BTP agar tidak membengkak?
Pakai alat resmi SAP. SAP BTP Cost Estimator untuk mengestimasi sebelum tanda tangan, dan halaman Cost and Usage Management di SAP BTP Cockpit untuk melihat konsumsi aktual per service plan serta mengekspornya ke XLS. Tambahkan struktur subaccount per proyek atau departemen agar biaya bisa ditelusuri, siapkan alert email saat konsumsi mendekati ambang bulanan, dan tunjuk platform owner yang meninjau realisasi tiap bulan.

## Kesimpulan

Clean core adalah keputusan arsitektur yang benar, tetapi keberhasilannya juga diukur di kolom anggaran. Biaya kustomisasi tidak lenyap saat pindah ke BTP; ia berubah menjadi konsumsi berulang yang bisa diperkirakan dan dikendalikan, asalkan ditata sejak perencanaan, bukan ditemukan saat renewal. Yang membedakan program yang terkendali dari yang membengkak bukan seberapa "bersih" arsitekturnya, melainkan seberapa disiplin tata kelola biayanya. Sebagai SAP Platinum Partner melalui United VARs dan bagian dari Metrodata Group sejak 1998, Soltius membantu men-*sizing* dan menata kelola lanskap ekstensi BTP agar biaya clean core terukur sejak awal, bukan menjadi kejutan.

Untuk mendiskusikan cara memperkirakan dan mengendalikan biaya clean core di ekstensi BTP perusahaan Anda, jelajahi solusi terkait di soltius.co.id.
