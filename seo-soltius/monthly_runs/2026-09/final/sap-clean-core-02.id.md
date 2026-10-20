---
title: "Clean Core saat Merger & Akuisisi: Menyatukan Lanskap SAP Tanpa Warisan Kotor"
meta_title: "SAP Clean Core saat Merger & Akuisisi Grup"
meta_description: "SAP Clean Core saat merger & akuisisi: menyatukan beberapa sistem SAP tanpa mewarisi Z-code lewat harmonisasi proses, Central Finance, dan triase ekstensi."
slug: "sap-clean-core-merger-akuisisi"
language: "id"
primary_keyword: "SAP Clean Core"
secondary_keywords:
  - "clean core merger akuisisi"
  - "konsolidasi lanskap SAP"
  - "SAP Central Finance"
  - "SAP Landscape Transformation"
  - "Selective Data Transition"
  - "carve-in carve-out SAP"
  - "Clean Core Levels A-D"
  - "two-tier ERP"
  - "harmonisasi proses dan data"
  - "group reporting konsolidasi"
internal_links:
  - url: "https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide"
    anchor: "SAP Clean Core"
  - url: "https://www.soltius.co.id/id/blog/low-code-and-no-code-platforms"
    anchor: "platform low-code SAP Build"
  - url: "https://www.soltius.co.id/id/blog/business-intelligence"
    anchor: "business intelligence"
external_citations:
  - url: "https://support.sap.com/en/offerings-programs/support-services/data-management-landscape-transformation/selective-data-transition-engagement.html"
    context: "Definisi resmi Selective Data Transition dan dukungannya untuk merge/split sistem serta skenario carve-out M&A"
  - url: "https://news.sap.com/2025/08/extend-sap-s4hana-cloud-right-way-clean-clear/"
    context: "Prinsip clean core: ekstensi side-by-side di SAP BTP lewat released API tanpa memodifikasi inti"
brief_id: "sap-clean-core-02"
target_word_count: 1650
publish_month: "2026-09"
word_count: 2124
---

# Clean Core saat Merger & Akuisisi: Menyatukan Lanskap SAP Tanpa Warisan Kotor

Dua perusahaan yang bergabung jarang membawa satu sistem yang rapi. Masing-masing datang dengan instalasi SAP sendiri, Z-code (kustomisasi ABAP buatan sendiri) yang menumpuk bertahun-tahun, dan proses "khas kami" yang tidak pernah didokumentasikan. Begitu grup wajib melaporkan diri sebagai satu entitas, semua kekusutan itu bertabrakan sekaligus. Di sinilah prinsip [SAP Clean Core](https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide) diuji paling keras: apakah konsolidasi akan mewarisi kekacauan lama, atau menjadi kesempatan sekali seumur proyek untuk memulai bersih. Artikel ini membahas cara menyatukan beberapa lanskap SAP saat merger dan akuisisi (M&A) tanpa menyeret warisan kotor ke inti hasil gabungan, lengkap dengan kerangka keputusan yang jujur soal kapan justru lebih bijak tidak menggabungkan semuanya.

> **Ringkas:** Dalam merger dan akuisisi, clean core adalah upaya menyatukan beberapa sistem SAP menjadi satu lanskap yang tetap standar dan mudah di-upgrade: mengharmonisasi proses dan data, memindahkan kustomisasi ke SAP BTP lewat *released API*, serta menandai ekstensi berisiko (Clean Core Levels A–D) untuk dibersihkan sebelum *cutover*, alih-alih mewarisi Z-code lama ke inti hasil konsolidasi.

Pembahasan bergerak dari mengapa M&A menghasilkan core terkotor, tiga keputusan konsolidasi yang berurutan, pilihan arsitektur (gabung, Central Finance, atau pertahankan terpisah), cara menyaring ekstensi warisan sebelum cutover, hingga kapan konsolidasi paksa sebaiknya dihindari.

## Mengapa merger & akuisisi menghasilkan core SAP paling kotor?

Merger dan akuisisi menabrakkan dua atau lebih sistem SAP yang masing-masing sudah penuh kustomisasi. Setiap entitas membawa Z-code, modifikasi inti, dan proses yang tumbuh berbeda selama bertahun-tahun. Ketika grup wajib melapor sebagai satu kesatuan, warisan itu menumpuk serentak, menjadikan M&A momen dengan *technical debt* (utang teknis) tertinggi sekaligus peluang terbaik untuk membersihkannya.

Prinsip clean core sendiri sederhana di atas kertas: jaga inti S/4HANA tetap standar, dan bangun kebutuhan unik sebagai ekstensi *side-by-side* di SAP BTP yang berkomunikasi dengan inti hanya lewat *released API* (antarmuka resmi yang stabil), tanpa mengutak-atik inti (SAP News Center, Agustus 2025). Core yang bersih itulah yang memungkinkan upgrade berkala tanpa regresi, kesiapan RISE with SAP, dan fitur AI seperti Joule yang mengandalkan proses serta data standar.

Masalahnya, sebuah akuisisi hampir selalu membawa lawan dari semua itu. Sumber "kotornya" core pasca-M&A biasanya berulang:

- **Z-code tak terdokumentasi** yang tak ada lagi yang paham logikanya, tetapi menopang proses harian.
- **Modifikasi inti** yang membuat setiap upgrade menjadi proyek uji regresi tersendiri.
- **Proses paralel** untuk aktivitas yang sama, misalnya dua cara berbeda mencatat penerimaan barang di dua entitas.
- **Master data yang tumpang-tindih**: kode produk ganda, vendor dengan banyak nama, satuan ukur campur aduk.

Menggabungkan sistem tanpa membereskan hal-hal ini sama saja menyatukan dua tumpukan utang menjadi satu tumpukan yang lebih besar. Itu sebabnya M&A perlu diperlakukan sebagai keputusan desain, bukan sekadar latihan teknis memindahkan data.

## Tiga keputusan inti: harmonisasi proses, data, dan sistem

Konsolidasi lanskap SAP berpijak pada tiga aktivitas yang harus berurutan: harmonisasi proses, lalu harmonisasi data, baru konsolidasi sistem. Urutannya menentukan hasil akhir. Menggabungkan sistem lebih dulu hanya menyalin dua set kustomisasi ke satu tempat; menstandarkan proses lebih dulu memastikan sistem hasil gabungan tidak mewarisi kebiasaan lama tiap entitas.

1. **Harmonisasi proses (*fit-to-standard*).** Sepakati satu cara kerja standar untuk setiap proses inti, sedekat mungkin dengan praktik bawaan SAP. Ini pekerjaan bisnis, bukan IT, dan justru di sini sebagian besar nilai clean core diputuskan: proses yang sudah standar tidak butuh kustomisasi untuk dipindahkan.
2. **Harmonisasi data.** Satukan master data lintas entitas: definisi produk, pelanggan, vendor, dan bagan akun (*chart of accounts*) yang konsisten. Tanpa langkah ini, pelaporan grup tetap menghasilkan angka yang saling bertengkar meski sistemnya sudah satu.
3. **Konsolidasi sistem.** Setelah proses dan data selaras, barulah penggabungan teknis dijalankan. Di tahap inilah perangkat seperti SAP Landscape Transformation dan Selective Data Transition berperan.

Membalik urutan ini adalah kesalahan paling mahal dalam konsolidasi pasca-merger. Kompetitor sering menuliskannya sebagai "konsolidasi teknis" dan langsung melompat ke alat replikasi. Padahal menyalakan alat sebelum proses disepakati hanya memindahkan kekacauan dengan lebih cepat.

## Gabung jadi satu sistem, pakai Central Finance, atau pertahankan terpisah?

Ada tiga jalur utama. Pertama, menggabungkan semua entitas ke satu S/4HANA. Kedua, memakai SAP Central Finance sebagai lapisan pelaporan konsolidasi tanpa langsung mematikan sistem sumber. Ketiga, mempertahankan model *two-tier* bila entitas terlalu berbeda untuk dipaksa menyatu. Pilihannya bergantung pada keseragaman proses, urgensi pelaporan grup, dan kesiapan mengganti sistem lama.

**Full consolidation** memindahkan semua entitas ke satu instance S/4HANA. Inilah peluang terbaik memulai benar-benar bersih, asalkan kustomisasi lama tidak ikut diwariskan. Secara teknis, penggabungan biasanya mengandalkan SAP Landscape Transformation (SLT), teknologi replikasi data *real-time*/*near-real-time* yang menjadi motor skenario *merge*, *split*, dan carve-out, dipadu Selective Data Transition untuk memindahkan hanya data yang relevan.

**Selective Data Transition (SDT)** adalah pendekatan migrasi resmi SAP yang menjadi jalan tengah antara *system conversion* (brownfield) dan *new implementation* (greenfield). SAP mendefinisikannya sebagai alternatif yang "menggabungkan kelebihan kedua pendekatan tanpa keterbatasannya", dan secara eksplisit mendukung penataan ulang lanskap: menggabungkan atau memisahkan sistem, termasuk skenario carve-out dalam konteks M&A ([SAP — Selective Data Transition Engagement](https://support.sap.com/en/offerings-programs/support-services/data-management-landscape-transformation/selective-data-transition-engagement.html)). Engagement bersertifikat ini dibentuk pada 2020 dan beranggotakan empat organisasi: CBS, Natuvion, SAP, dan SNP. Catatan istilah: "bluefield" yang sering dipakai vendor adalah merek dagang SNP; istilah vendor-netral SAP adalah Selective Data Transition.

**SAP Central Finance** mereplikasi dokumen keuangan secara real-time dari beberapa ERP sumber (SAP ECC, versi SAP lama, bahkan non-SAP) ke satu S/4HANA terpusat sebagai lapisan pelaporan dan konsolidasi, tanpa langsung mematikan sistem sumber. Pendekatan ini sering disebut *stepping consolidation*. Perlu ditegaskan: Central Finance masih strategi yang didukung dan diinvestasikan SAP pada 2026, bukan produk yang dipensiunkan. SAP menjadwalkan "Central Finance & Beyond Conference 2026" (edisi AS: 30 September–1 Oktober 2026) dan memuatnya dalam road map fungsi finance (Mei 2026). Posisikan ia sebagai salah satu titik awal yang kuat, bukan satu-satunya rekomendasi.

Satu hal yang membingungkan banyak tim: perbedaan carve-in dan carve-out. Keduanya sering muncul berbarengan dalam satu transaksi grup.

| Aspek | Carve-in (akuisisi) | Carve-out (divestasi) |
|---|---|---|
| Arah | Menyerap entitas baru ke lanskap induk | Memisahkan sebagian lanskap menjadi entitas berdiri sendiri |
| Pemicu khas | Merger/akuisisi menambah unit bisnis | Penjualan atau *spin-off* pabrik, *company code*, atau unit |
| Risiko clean core | Membawa Z-code tak terdokumentasi ke induk | Memisahkan tanpa merusak integritas core yang tersisa |

Kerangka keputusan berikut membantu memilih arsitektur konsolidasi. Perhatikan bahwa tidak ada kolom biaya atau durasi berangka: keduanya hanya bisa ditetapkan lewat penilaian lanskap, bukan asumsi generik.

| Aspek | Full consolidation (satu S/4HANA) | Central Finance (lapisan pelaporan) | Two-tier / template |
|---|---|---|---|
| Ide inti | Semua entitas pindah ke satu instance S/4HANA | Replikasi finansial multi-sumber ke satu S/4HANA; sumber tetap jalan | Pusat di S/4HANA; anak usaha di ERP tier-2 |
| Kapan dipilih | Proses & regulasi relatif seragam; ingin satu core bersih jangka panjang | Butuh pelaporan konsolidasi cepat; belum siap ganti semua sistem | Entitas berbeda regulasi/geografi/model bisnis |
| Dampak clean core | Peluang terbaik memulai bersih, jika kustomisasi tak diwariskan | Core baru bersih; sumber lama (dan utang tekniknya) tetap ada | Core pusat bersih; tier-2 lebih ringan *by design* |
| Kompleksitas/risiko | Tertinggi (harmonisasi penuh, *cutover* besar) | Menengah (non-disruptif, butuh *mapping* & rekonsiliasi) | Menengah (integrasi antar-tier & tata kelola template) |

## Extension classification sebelum cutover: memilah warisan dengan Clean Core Levels A–D

Sebelum *cutover*, katalogkan setiap ekstensi lintas sistem, lalu nilai dengan Clean Core Levels A–D, model klasifikasi ekstensi SAP per pembaruan Agustus 2025. Level A adalah ekstensi paling bersih; makin ke arah D makin berisiko karena memodifikasi inti dan tidak *upgrade-safe*. Hasil penilaian memandu tiga keputusan sederhana untuk tiap item: dipertahankan, dibangun ulang, atau dipensiunkan.

Model empat level ini bukan sekadar label. Ia menjadi alat triase yang mengubah pertanyaan kabur ("kustomisasi mana yang boleh ikut?") menjadi keputusan yang bisa dipertanggungjawabkan. Ekstensi yang masih bernilai tetapi tidak bersih sebaiknya dibangun ulang sebagai aplikasi *side-by-side* di atas [platform low-code SAP Build](https://www.soltius.co.id/id/blog/low-code-and-no-code-platforms) di SAP BTP, sehingga fungsinya tetap ada tetapi inti hasil konsolidasi tidak ikut ternoda.

| Level (indikatif) | Karakter ekstensi | Keputusan M&A tipikal |
|---|---|---|
| A | Paling bersih: ABAP Cloud *on-stack* / *side-by-side* BTP via *released API* | *Keep* — aman diteruskan |
| B–C | Semi-bersih / butuh penyesuaian agar *upgrade-safe* | *Rebuild* ke *side-by-side* BTP jika masih bernilai |
| D | Klasik/berisiko: memodifikasi inti, tidak *upgrade-safe* | *Retire* atau bangun ulang; jangan wariskan ke core hasil konsolidasi |

Penamaan dan detail level ini masih berevolusi, jadi perlakukan tabel di atas sebagai panduan arah per Agustus 2025, bukan daftar final yang kaku. Yang tidak berubah adalah prinsipnya: apa pun yang memodifikasi inti adalah kandidat untuk dibersihkan sebelum, bukan sesudah, penggabungan.

## Kapan mempertahankan sistem terpisah lebih bijak daripada memaksa satu core bersih

Tidak semua entitas layak dipaksa masuk ke satu instance. Ketika unit bisnis berbeda regulasi, geografi, atau model bisnis, model *two-tier* ERP (S/4HANA di pusat, ERP lebih ringan seperti SAP Business One atau S/4HANA Cloud di anak usaha) sering lebih sepadan. Clean core adalah tujuan desain, bukan alasan untuk menggabungkan segala hal menjadi satu sistem.

Konsolidasi paksa punya biaya tersembunyi. Memaksa entitas dengan proses yang sah-sah berbeda ke dalam satu template sering berujung pada gelombang kustomisasi baru, persis hal yang ingin dihindari. Dalam kasus seperti itu, mempertahankan instance terpisah yang masing-masing bersih justru lebih dekat ke semangat clean core daripada satu instance raksasa yang penuh pengecualian. Ini bukan kegagalan konsolidasi; ini pilihan arsitektur yang dewasa.

Di lapangan, penilaian kondisi core beberapa entitas hampir selalu menemukan Z-code yang tidak terdokumentasi dan proses yang lebih rumit dari yang diakui di atas kertas. Karena itu, keputusan gabung-atau-tidak sebaiknya berangkat dari penilaian lanskap yang jujur, bukan dari asumsi bahwa "satu sistem" otomatis lebih baik.

Perlu diingat pula bahwa tujuan akhir sebuah konsolidasi jarang berupa sistem itu sendiri; tujuannya adalah pelaporan grup yang konsisten dan pengambilan keputusan yang lebih cepat. Core yang bersih memasok satu sumber data tepercaya, dan di atasnya lapisan *business intelligence* grup bisa berdiri tanpa terus-menerus merekonsiliasi angka yang berbeda antar entitas. Two-tier maupun Central Finance sama-sama bisa mendukung tujuan ini, selama data yang mengalir ke atas sudah harmonis.

## FAQ (Pertanyaan yang Sering Diajukan)

### Bagaimana cara menggabungkan dua sistem SAP setelah merger?

Mulai dari proses, bukan sistem. Harmonisasikan proses ke standar (*fit-to-standard*), lalu satukan data, baru gabungkan sistem, agar hasil gabungan tidak mewarisi dua set kustomisasi lama. Secara teknis, penggabungan umumnya memakai SAP Landscape Transformation (SLT) untuk replikasi dan Selective Data Transition untuk memindahkan hanya data relevan. Alternatifnya, gunakan SAP Central Finance sebagai lapisan konsolidasi tanpa langsung mematikan sistem sumber.

### Apa itu SAP Central Finance dan kapan cocok dipakai?

SAP Central Finance mereplikasi data keuangan secara real-time dari beberapa ERP sumber (SAP ECC, SAP lama, bahkan non-SAP) ke satu S/4HANA terpusat sebagai lapisan pelaporan dan konsolidasi, tanpa langsung mematikan sistem sumber. Cocok saat grup butuh pelaporan konsolidasi cepat pasca-merger tetapi belum siap mengganti semua sistem. Central Finance masih strategi yang didukung SAP pada 2026 dan sering dipakai sebagai titik awal perjalanan S/4HANA.

### Apa bedanya carve-in dan carve-out di SAP?

Carve-out adalah memisahkan sebagian lanskap SAP (data finansial, master data, transaksi, infrastruktur) menjadi entitas independen, biasanya saat divestasi anak usaha atau unit bisnis. Carve-in adalah kebalikannya: menyerap entitas hasil akuisisi ke dalam sistem dan proses induk. Keduanya memakai perangkat seperti SLT, System Landscape Optimization (SLO), dan pendekatan Selective Data Transition, dengan transformasi seperti *company code carve-out*.

### Apakah konsolidasi pasca-merger sebaiknya greenfield?

Tidak selalu. Greenfield (mulai bersih) menarik karena membuang warisan, tetapi berisiko kehilangan histori dan memakan waktu. Selective Data Transition sering lebih tepat: menggabungkan kelebihan greenfield dan brownfield, memungkinkan Anda memilih data yang dipertahankan, dibersihkan, atau dipensiunkan. Pertahankan pola pikir clean core apa pun jalurnya, yaitu pindahkan kustomisasi ke SAP BTP, bukan mewarisi Z-code ke inti hasil konsolidasi.

### Bagaimana menjaga clean core saat mengintegrasikan hasil akuisisi?

Katalogkan semua ekstensi lintas sistem lebih dulu, lalu nilai memakai Clean Core Levels A–D untuk menandai item berisiko sebelum *cutover*. Putuskan tiap ekstensi: dipertahankan (jika sudah bersih/Level A), dibangun ulang sebagai *side-by-side* di SAP BTP lewat *released API*, atau dipensiunkan. Prinsip intinya, inti S/4HANA hasil konsolidasi dijaga tetap standar dan *upgrade-safe*, sementara kebutuhan unik dipenuhi di luar inti.

### Berapa lama proyek konsolidasi lanskap SAP biasanya berjalan?

Tidak ada angka tunggal; sangat bergantung pada jumlah entitas, tingkat kustomisasi, volume dan kualitas data, serta pendekatan yang dipilih (Central Finance biasanya lebih cepat karena non-disruptif; *full consolidation* ke satu S/4HANA paling lama). Sebagai *rule-of-thumb* yang bersifat estimasi, bukan komitmen, proyek grup multi-entitas umumnya diukur dalam kuartal hingga tahunan. Tetapkan durasi lewat penilaian lanskap awal, bukan asumsi generik.

## Kesimpulan

Merger dan akuisisi memang menghasilkan lanskap SAP paling kusut yang bisa dihadapi sebuah grup, tetapi kekusutan itu juga membuka jendela langka untuk memulai bersih. Kuncinya bukan memilih alat lebih dulu, melainkan menegakkan urutan yang benar: harmonisasi proses, lalu data, baru sistem, dengan clean core sebagai tujuan desain dan keputusan gabung-atau-tidak yang berpijak pada penilaian jujur, bukan asumsi. Sebagai SAP Platinum Partner melalui keanggotaan United VARs (aliansi 45 VAR teratas di 90+ negara) dan bagian dari Metrodata Group sejak 2008, Soltius mendampingi grup menilai *technical debt* lintas entitas serta memigrasikan dan merancang pendekatan konsolidasi, entah menuju satu S/4HANA, Central Finance, atau model two-tier.

Untuk mendiskusikan kesiapan konsolidasi lanskap SAP di grup Anda dengan clean core sebagai tujuan desain, kunjungi soltius.co.id.
