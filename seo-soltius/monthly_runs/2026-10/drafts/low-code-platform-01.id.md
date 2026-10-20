---
title: "Berapa Biaya Platform Low-Code? Membedah Model Lisensi SAP BTP"
meta_title: "Biaya Platform Low-Code: Model Lisensi SAP BTP"
meta_description: "Biaya platform low-code di SAP BTP bukan satu angka lisensi. Pahami model CPEA, BTPEA, dan PAYG, free tier, komponen TCO, serta biaya tersembunyinya."
slug: "biaya-platform-low-code-sap-btp"
language: "id"
primary_keyword: "Low Code Platform"
secondary_keywords:
  - "biaya SAP BTP"
  - "model lisensi SAP BTP"
  - "CPEA"
  - "BTPEA"
  - "PAYG"
  - "harga SAP Build Apps"
  - "free tier SAP BTP"
  - "TCO low-code platform"
  - "credits konsumsi BTP"
  - "optimasi biaya BTP"
  - "lisensi SAP Build"
  - "biaya tersembunyi low-code"
internal_links:
  - url: "https://www.soltius.co.id/id/blog/low-code-and-no-code-platforms"
    anchor: "platform low-code"
  - url: "https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide"
    anchor: "SAP Clean Core"
  - url: "https://www.soltius.co.id/id/blog/business-intelligence"
    anchor: "Business Intelligence"
external_citations:
  - url: "https://learning.sap.com/courses/becoming-an-sap-btp-solution-architect/exploring-sap-btp-commercial-models"
    context: "Definisi resmi empat model komersial SAP BTP (CPEA, BTPEA, PAYG, Subscription), mekanisme cloud credits, aturan diskon, dan beda Always Free vs Free Tier"
  - url: "https://www.gartner.com/en/documents/4350499"
    context: "Proyeksi pasar teknologi low-code ~USD 44,5 miliar pada 2026 dan tren adopsi enterprise"
brief_id: "low-code-platform-01"
target_word_count: 1650
publish_month: "2026-10"
word_count: 1811
---

# Berapa Biaya Platform Low-Code? Membedah Model Lisensi SAP BTP

Setelah demo SAP Build berjalan mulus, pertanyaan pertama dari CFO atau direktur IT hampir selalu sama: "Lalu, berapa biayanya?" Jawaban yang mereka temukan di internet justru membingungkan. Ada matriks CPEA, BTPEA, dan PAYG, istilah *cloud credits* (satuan konsumsi layanan), serta rentang harga yang melompat dari ratusan sampai jutaan dolar per tahun. Padahal model komersial harus dipilih sebelum anggaran proyek disetujui, dan salah menebak konsumsi bisa menggelembungkan tagihan. Artikel ini membedah struktur biaya [platform low-code](https://www.soltius.co.id/id/blog/low-code-and-no-code-platforms) SAP secara jujur: komponen biaya yang sebenarnya, perbedaan tiga model lisensi, peran free tier, hingga pos-pos tersembunyi yang jarang masuk hitungan awal.

> **Secara singkat:** Biaya platform low-code di SAP BTP tidak ditentukan oleh satu harga lisensi tetap, melainkan oleh model komersial yang dipilih (CPEA, BTPEA, atau PAYG) dan tingkat konsumsi layanan yang diukur dalam *cloud credits*. Total biaya mencakup konsumsi platform, runtime aplikasi, lisensi pengembang/pengguna, serta biaya integrasi dan tata kelola.

Supaya pembahasan konkret, kita akan mulai dari komponen biayanya, lalu membandingkan tiga model lisensi, menimbang free tier sebagai jalur pilot murah, dan menutup dengan biaya yang sering luput dari perhitungan.

## Apa Saja Komponen Biaya Platform Low-Code di SAP BTP?

Biaya platform low-code di SAP BTP terdiri dari lima pos, bukan satu tagihan lisensi tunggal: konsumsi layanan platform yang diukur dalam *cloud credits*, biaya *runtime* aplikasi yang sudah berjalan, lisensi pengembang dan pengguna, ongkos integrasi ke sistem inti seperti S/4HANA, serta beban tata kelola dan peningkatan keterampilan tim. Masing-masing bergerak sendiri-sendiri.

Kesalahan paling umum adalah memperlakukan low-code seperti membeli lisensi perangkat lunak biasa, satu angka di muka lalu selesai. Kenyataannya, SAP Build (portofolio low-code SAP yang mencakup **SAP Build Apps** untuk aplikasi visual dan **SAP Build Process Automation** untuk otomasi alur kerja) berjalan di atas SAP BTP dan dikonsumsi melalui platform itu, bukan dibeli sebagai paket terpisah. Artinya besaran tagihan mengikuti seberapa banyak layanan yang Anda aktifkan dan jalankan.

Tabel berikut memetakan kelima pos agar perencanaan anggaran tidak berhenti di harga lisensi saja.

| Komponen biaya | Isi | Catatan |
|---|---|---|
| Konsumsi platform | Layanan BTP yang diaktifkan, diukur dalam *cloud credits* | Pos yang paling fluktuatif, mengikuti pemakaian |
| Runtime aplikasi | Biaya menjalankan aplikasi yang sudah jadi | Termasuk aplikasi yang tak lagi dipakai |
| Lisensi pengguna/pengembang | Akses untuk *citizen developer* dan pengguna akhir | Bergantung jumlah dan peran |
| Integrasi | Koneksi ke S/4HANA dan sistem lain | Pola *side-by-side extension* |
| Tata kelola & skill | Governance, ALM, dan pelatihan | Sering diabaikan di awal |

Satu hal yang sering salah kaprah: SAP Learning menegaskan layanan BTP ditagih lewat mekanisme *cloud credits* pada model konsumsi, dan materi resmi yang kami akses tidak merinci satuan per-pengguna yang pasti untuk tiap layanan Build. Jadi jika Anda menemukan klaim "harga SAP Build Apps sekian dolar per user" dari sumber pihak ketiga, perlakukan sebagai estimasi, bukan daftar harga resmi.

## Apa Itu CPEA, BTPEA, dan PAYG — dan Apa Bedanya?

CPEA, BTPEA, dan PAYG adalah tiga model komersial berbasis konsumsi untuk SAP BTP. CPEA dan BTPEA menuntut komitmen prabayar atas *cloud credits* sehingga memperoleh diskon dibanding harga list; PAYG tidak berkomitmen dan menagih hanya pemakaian di atas batas free tier, tetapi pada harga list penuh tanpa diskon. Ketiganya berbagi satu mata uang: *credits*.

SAP sendiri mendokumentasikan empat model komersial resmi untuk BTP (SAP Learning): CPEA, SAP BTPEA, Pay-As-You-Go, dan Subscription. Tiga yang pertama berbasis konsumsi; yang keempat berbeda jenis. Berikut inti masing-masing:

- **CPEA (*Cloud Platform Enterprise Agreement*):** investasi prabayar dalam bentuk *cloud credits* dengan komitmen tahunan. Perusahaan membeli credits di muka, lalu "menariknya" (*draw down*) saat layanan diaktifkan. Karena ada komitmen, CPEA memperoleh *entry* dan *volume-based discount*. Penagihan dilakukan tahunan di muka; kelebihan pemakaian (*overage*) ditagih di belakang pada harga list, dan credits bisa ditambah kapan saja tanpa penalti.
- **BTPEA (*SAP BTP Enterprise Agreement*):** evolusi dari CPEA dengan komitmen multi-tahun. Prinsipnya sama (prabayar credits), tetapi beberapa sumber pihak ketiga menyebut diskon yang umumnya lebih dalam plus *price protection* lintas tahun. Beberapa referensi menanggalinya sekitar 2024; SAP mengonfirmasi keberadaan BTPEA sebagai evolusi CPEA, jadi perlakukan tahun persisnya secara longgar.
- **PAYG (*Pay-As-You-Go*):** tanpa komitmen minimum dan tanpa komitmen tahunan. Pembayaran dilakukan di belakang lewat tagihan bulanan, hanya untuk pemakaian di atas batas free tier. Konsekuensinya: tidak ada diskon, Anda membayar pada harga list.

Ada satu model yang sering terlupakan dalam narasi "CPEA versus PAYG": **Subscription**. Model ini mematok biaya tetap untuk layanan BTP tertentu terlepas dari tingkat konsumsi, dengan kontrak tetap yang biasanya berdurasi satu sampai tiga tahun dan dibayar di muka saat kontrak dimulai (SAP Learning). Ia cocok ketika pemakaian sebuah layanan sudah sangat stabil dan ingin kepastian biaya penuh.

## CPEA vs BTPEA vs PAYG: Mana yang Cocok untuk Fase Perusahaan Anda?

Pilihan model yang tepat bergantung pada fase, bukan pada "mana yang termurah di atas kertas". PAYG paling masuk akal untuk pilot dan beban yang belum terprediksi; CPEA pas ketika pola konsumsi mulai jelas dan Anda ingin menekan biaya per unit lewat diskon; BTPEA untuk komitmen jangka panjang berskala *enterprise*. Tabel berikut menyandingkan ketiganya.

| Aspek | PAYG | CPEA | BTPEA |
|---|---|---|---|
| Komitmen di muka | Tidak ada | Ya (prabayar credits, umumnya tahunan) | Ya (prabayar credits, multi-tahun) |
| Mekanisme | Bayar di belakang, hanya di atas free tier | Draw-down cloud credits | Draw-down cloud credits |
| Diskon | Tidak (harga list) | Entry & volume-based discount | Umumnya lebih dalam + price protection* |
| Billing | Bulanan, di belakang | Tahunan di muka; overage di belakang | Tahunan di muka; overage di belakang |
| Free tier | Ya | Ya | Ya |
| Paling cocok | Pilot, PoC, beban tak menentu | Pemakaian terprediksi, tekan biaya/unit | Komitmen jangka panjang, skala enterprise |

\* *Besaran diskon pasti dan detail price protection BTPEA berasal dari sumber pihak ketiga; SAP tidak mempublikasikan persentase resmi. Beberapa referensi menyebut kisaran 25–40% pada volume komitmen besar, namun angka ini bergantung kontrak dan bukan jaminan.*

Dua catatan jujur soal diskon. Pertama, diskon CPEA/BTPEA tidak otomatis: ia bergantung pada volume komitmen, sehingga perusahaan dengan komitmen tipis tidak serta-merta memperoleh potongan terbesar. Kedua, karena credits CPEA bisa ditambah kapan saja tanpa penalti, strategi yang lebih aman adalah mulai konservatif lalu *top-up*, ketimbang over-commit sejak awal dan menyisakan credits yang hangus.

Keputusan model juga tidak sekali seumur hidup. Banyak perusahaan mulai dengan PAYG atau free tier, pindah ke CPEA saat pola konsumsi stabil, lalu ke BTPEA untuk komitmen multi-tahun. Perpindahan ini bagian normal dari strategi anggaran.

## Apakah SAP BTP Punya Free Tier untuk Uji Coba?

Ya. SAP membedakan dua bentuk gratis di BTP: **"Always Free"** (layanan tertentu yang selalu tanpa biaya) dan **"Free Tier"** (kapasitas gratis sampai ambang tertentu, lalu kena biaya setelahnya). Pada model konsumsi seperti PAYG, tagihan baru muncul untuk pemakaian di atas batas free tier. Jalur ini ideal untuk membangun *proof of concept* sebelum berkomitmen.

Nilai praktis free tier ada pada risiko yang nyaris nol di tahap awal. Tim bisa merakit satu aplikasi SAP Build, menguji alur otomasi, dan memvalidasi apakah low-code benar-benar memangkas backlog IT, semuanya sebelum sepeser pun komitmen tahunan ditandatangani. Ketiga model konsumsi menyertakan alokasi gratis, sehingga pilot tidak harus menunggu persetujuan anggaran besar.

Yang perlu dijaga ekspektasinya: free tier bukan "gratis selamanya untuk produksi". Ia dirancang untuk eksperimen dan PoC, dengan batas kapasitas. Menjalankan beban produksi penuh di atasnya bukan tujuannya, dan mengandalkannya untuk itu justru berisiko ketika aplikasi melewati ambang dan tiba-tiba mulai menagih.

## Biaya Tersembunyi Low-Code yang Jarang Dihitung

Biaya tersembunyi low-code jarang muncul dari harga lisensi, melainkan dari pemborosan konsumsi dan ongkos di sekitarnya: credits yang terbuang karena *over-provisioning*, aplikasi "yatim" (*orphaned apps*) yang tetap menyedot runtime, integrasi ke S/4HANA, beban tata kelola, serta biaya melatih *citizen developer*. Pos-pos ini jarang masuk perhitungan awal, padahal bisa menggerus penghematan yang dijanjikan low-code.

Ada beberapa sumber kebocoran yang paling sering terlihat di lapangan:

1. **Over-provisioning credits.** Membeli credits jauh melebihi kebutuhan nyata terasa aman, tetapi credits yang tidak terpakai pada akhir periode bisa hangus. Inilah alasan memulai konservatif lebih bijak daripada over-commit.
2. **Aplikasi "yatim".** Aplikasi yang sudah tidak dipakai, tetapi tidak pernah dimatikan, tetap mengonsumsi runtime dan credits diam-diam. Tanpa tata kelola, biaya ini menumpuk tanpa nilai bisnis.
3. **Integrasi ke sistem inti.** Menghubungkan aplikasi low-code ke S/4HANA lewat pola *side-by-side extension* membutuhkan usaha teknis, dan di sinilah low-code bertemu [SAP Clean Core](https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide): extension yang menjaga core tetap standar justru "tinggal" di BTP, sehingga biaya BTP sebagian adalah biaya menjalankan strategi clean core.
4. **Tata kelola dan keterampilan.** *Governance*, *application lifecycle management* (ALM), dan pelatihan tim bukan biaya sekali bayar. Tanpa ini, low-code malah melahirkan *shadow IT* baru.

Di titik inilah pendampingan *sizing* yang realistis membayar dirinya sendiri; pengalaman memilih model komersial yang pas, seperti yang dilakukan Soltius lintas klien enterprise, membantu mencegah over-provisioning sebelum tagihan membengkak. Konsekuensinya satu: pertanyaan "apakah low-code lebih murah" hanya bisa dijawab jujur dengan menghitung *total cost of ownership* (TCO), bukan sekadar membandingkan harga lisensi.

Ini juga alasan keputusan biaya low-code sering beririsan dengan investasi lain. Layanan seperti SAP Analytics Cloud untuk [Business Intelligence](https://www.soltius.co.id/id/blog/business-intelligence) juga dikonsumsi lewat BTP, sehingga pilihan model komersial Anda memengaruhi lebih dari satu inisiatif sekaligus.

## FAQ (Pertanyaan yang Sering Diajukan)

### Berapa kira-kira biaya awal untuk mulai memakai SAP Build?
Tidak ada "harga awal" tunggal yang dipatok SAP secara publik. Jalur termurah adalah memakai free tier pada model konsumsi (PAYG/CPEA) untuk pilot tanpa biaya hingga batas kapasitas tertentu. Di luar itu, biaya mengikuti konsumsi layanan dalam *cloud credits*. Angka entry yang beredar, misalnya ratusan dolar per bulan, berasal dari sumber pihak ketiga, bukan daftar harga resmi SAP, jadi perlakukan sebagai estimasi.

### Apa itu CPEA pada SAP BTP?
CPEA (*Cloud Platform Enterprise Agreement*) adalah model komersial prabayar: perusahaan berkomitmen membeli sejumlah *cloud credits* di muka untuk durasi kontrak (umumnya tahunan), lalu menariknya seiring layanan BTP diaktifkan. Karena ada komitmen, CPEA memperoleh *entry* dan *volume-based discount* dibanding harga list PAYG. Kelebihan pemakaian ditagih di belakang pada harga list, dan credits bisa ditambah kapan saja.

### Apakah SAP BTP punya free tier?
Ya. SAP membedakan dua hal: "Always Free" (layanan tertentu selalu gratis) dan "Free Tier" (kapasitas gratis sampai ambang tertentu, biaya baru muncul setelahnya). Pada PAYG, tagihan hanya untuk pemakaian di atas batas free tier. Free tier ini ideal untuk membangun *proof of concept* dan menguji SAP Build sebelum berkomitmen pada model berbayar yang lebih besar.

### Apa bedanya CPEA dan PAYG?
Keduanya berbasis konsumsi *cloud credits*, tetapi PAYG tanpa komitmen: bayar di belakang per bulan hanya untuk yang dipakai melebihi free tier, tanpa diskon. CPEA berkomitmen di muka (prabayar tahunan) sehingga memperoleh entry dan volume-based discount. Singkatnya, PAYG cocok untuk pilot atau beban tak menentu; CPEA untuk pemakaian yang sudah bisa diprediksi dan ingin menekan biaya per unit.

### Apakah low-code selalu lebih murah daripada membangun aplikasi sendiri?
Tidak selalu. Low-code memangkas waktu dan beban developer, tetapi menambah pos biaya baru: konsumsi platform (credits), runtime aplikasi, lisensi pengguna/pengembang, integrasi ke S/4HANA, dan tata kelola. Tanpa *sizing* yang tepat, over-provisioning dan aplikasi "yatim" yang tetap menyedot runtime bisa menggerus penghematan. Perhitungan jujur harus memakai TCO menyeluruh, bukan sekadar membandingkan harga lisensi.

### Bagaimana mengendalikan biaya SAP BTP agar tidak membengkak?
Kuncinya *sizing* realistis dan tata kelola konsumsi. Pilih model sesuai fase (PAYG untuk pilot, CPEA/BTPEA saat pola stabil), pantau *monthly balance statement*, manfaatkan free tier untuk eksperimen, dan matikan aplikasi "yatim" yang masih menagih runtime. Karena credits CPEA bisa ditambah kapan saja tanpa penalti, lebih aman mulai konservatif lalu *top-up* ketimbang over-commit sejak awal.

### Apakah model lisensi SAP BTP bisa diubah seiring waktu?
Bisa, dan memang lazim. Banyak perusahaan mulai dengan PAYG atau free tier untuk pilot, pindah ke CPEA ketika pola konsumsi jelas, lalu ke BTPEA (evolusi CPEA untuk komitmen multi-tahun) demi diskon lebih dalam dan *price protection*. Perpindahan ini bagian dari strategi anggaran; *sizing* berkala membantu memilih model paling hemat untuk fase perusahaan saat itu.

## Kesimpulan

Pertanyaan "berapa biaya platform low-code?" sebenarnya pertanyaan yang salah bentuk. Yang menentukan bukan satu angka lisensi, melainkan kombinasi model komersial dan tingkat konsumsi. Begitu Anda memahami CPEA, BTPEA, dan PAYG, menakar free tier untuk pilot, dan menghitung pos-pos tersembunyi dalam TCO, anggaran low-code berubah dari tebakan menjadi keputusan yang bisa dipertanggungjawabkan. Momentumnya juga nyata: menurut proyeksi Gartner, pasar teknologi low-code diperkirakan menembus sekitar USD 44,5 miliar pada 2026 (CAGR ~19%), dan Gartner sebelumnya memproyeksikan 70% aplikasi baru akan memakai teknologi low-code/no-code pada 2025, naik dari kurang dari 25% pada 2020. Sebagai SAP Platinum Partner melalui United VARs dan bagian dari Metrodata Group sejak 1998, Soltius membantu perusahaan menakar kebutuhan dan memilih model komersial SAP BTP yang paling pas agar anggaran low-code tetap terkendali, sebagai pendamping yang mengimplementasikan dan mendukung, bukan penjual lisensi.

Untuk mendiskusikan *sizing* dan pemilihan model komersial SAP BTP yang sesuai dengan fase perusahaan Anda, jelajahi solusinya di soltius.co.id.
