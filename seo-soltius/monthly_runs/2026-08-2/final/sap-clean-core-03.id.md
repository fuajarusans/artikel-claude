---
title: "Clean Core SAP: Beda Aturan di Public, Private, dan On-Premise"
meta_title: "SAP Clean Core: Beda Aturan Public vs Private vs On-Prem"
meta_description: "Aturan SAP Clean Core tidak sama di tiap edisi: Public Edition memaksanya, Private & on-premise hanya menyarankan. Bandingkan ekstensibilitas & Level A–D."
slug: "sap-clean-core-public-private-on-premise"
language: "id"
primary_keyword: "SAP Clean Core"
secondary_keywords:
  - "S/4HANA Cloud Public Edition"
  - "S/4HANA Cloud Private Edition"
  - "SAP on-premise"
  - "RISE with SAP"
  - "GROW with SAP"
  - "ekstensibilitas per edisi"
  - "key-user vs developer extensibility"
  - "classic ABAP"
  - "clean core enforced vs recommended"
  - "Level A–D ekstensibilitas"
  - "portabilitas ekstensi ke public cloud"
  - "pilihan edisi S/4HANA"
internal_links:
  - url: "https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide"
    anchor: "SAP Clean Core"
  - url: "https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud"
    anchor: "migrasi ERP ke cloud"
  - url: "https://www.soltius.co.id/id/blog/data-warehouse-solutions"
    anchor: "Data Warehouse Solutions"
external_citations:
  - url: "https://news.sap.com/2025/08/extend-sap-s4hana-cloud-right-way-clean-clear/"
    context: "Definisi model Level A–D, perbedaan ekstensi on-stack vs side-by-side, prinsip clean core"
  - url: "https://community.sap.com/t5/technology-blog-posts-by-sap/abap-extensibility-guide-clean-core-for-sap-s-4hana-cloud-august-2025/ba-p/14175399"
    context: "Peralihan model 3-tier ke A–D, classic ABAP tidak tersedia di Public Edition, ABAP Cloud sebagai default"
brief_id: "sap-clean-core-03"
target_word_count: 1650
publish_month: "2026-08-2"
word_count: 2098
---

# Clean Core SAP: Beda Aturan di Public, Private, dan On-Premise

Seorang CIO yang sedang memilih antara S/4HANA Cloud Public dan Private Edition biasanya bertanya soal harga lisensi dan lama implementasi. Pertanyaan yang lebih menentukan justru jarang muncul di awal: seberapa bebas tim Anda boleh memodifikasi sistem setelah *go-live*? Di sinilah prinsip [SAP Clean Core](https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide) sering disalahpahami sebagai satu aturan universal. Kenyataannya, seberapa ketat clean core ditegakkan bergantung pada opsi *deployment* yang Anda pilih. Artikel ini membandingkan aturan clean core di tiga opsi (Public Edition, Private Edition, dan on-premise) secara berdampingan, supaya Anda tahu konsekuensi ekstensibilitas tiap pilihan sebelum menandatangani kontrak.

> **Ringkas:** Clean core SAP adalah prinsip menjaga inti sistem S/4HANA tetap standar dan aman-upgrade dengan memindahkan kustomisasi ke ekstensi resmi. Aturannya sama di setiap *deployment*, tetapi penegakannya berbeda: S/4HANA Cloud Public Edition memaksanya secara teknis (tanpa modifikasi core), sedangkan Private Edition dan on-premise hanya menyarankannya. Anda masih bisa memodifikasi core, tetapi membayarnya saat upgrade.

Bagian demi bagian, kita akan bahas mengapa aturannya berbeda, apa yang boleh dan tidak di Public Edition, tabel perbandingan lintas edisi, implikasinya bagi portabilitas ekstensi, dan kapan pilihan "kurang bersih" justru lebih tepat.

## Mengapa aturan clean core berbeda di tiap opsi deployment?

Prinsip clean core identik di ketiga opsi *deployment* S/4HANA, tetapi tingkat penegakannya berbeda. Public Edition (GROW with SAP) memaksa clean core secara teknis: platform tidak membuka jalur modifikasi core sama sekali. Private Edition (RISE with SAP) dan on-premise hanya menyarankannya; Anda tetap bebas memodifikasi, tetapi menanggung biayanya saat setiap upgrade.

Perbedaan ini bukan soal kualitas satu edisi di atas yang lain, melainkan soal siapa yang memegang kendali. Ada tiga opsi yang perlu dibedakan sejak awal:

- **S/4HANA Cloud Public Edition (GROW with SAP).** Lingkungan *multi-tenant* (banyak pelanggan berbagi infrastruktur yang sama) dengan proses *best practice* bawaan. GROW with SAP umumnya menjadi jalur adopsi bagi perusahaan baru atau kelas menengah yang menempuh pendekatan *greenfield* (implementasi dari awal, mengikuti standar).
- **S/4HANA Cloud Private Edition (RISE with SAP).** *Instance* terdedikasi untuk satu pelanggan, memberi fleksibilitas mirip on-premise tetapi berjalan di atas cloud. RISE with SAP umumnya menjadi jalur bagi pelanggan SAP eksisting yang memigrasikan sistem lamanya.
- **On-premise.** S/4HANA yang dijalankan di pusat data milik sendiri. Kendali penuh atas infrastruktur dan jadwal upgrade, dengan tanggung jawab operasional yang juga penuh.

Perlu dicermati, RISE tidak identik mutlak dengan Private dan GROW dengan Public; secara program keduanya bisa lebih luas. Namun asosiasi praktisnya kuat: RISE umumnya menuju Private Edition, GROW menuju Public Edition. Pemetaan inilah yang menentukan seberapa ketat clean core berlaku.

Konteks yang membuat keputusan ini mendesak adalah tenggat SAP ECC. *Mainstream maintenance* untuk ECC 6 (EHP 6–8) berakhir 31 Desember 2027, dengan opsi *extended maintenance* berbayar sampai 31 Desember 2030; versi lebih lama (EHP 0–5) bahkan sudah habis dukungannya sejak 31 Desember 2025. Karena setiap perusahaan pada akhirnya harus pindah edisi, momen migrasi menjadi saat paling tepat untuk menegakkan clean core, dan memilih edisi adalah salah satu keputusan inti dalam proyek [migrasi ERP ke cloud](https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud).

## Apa yang boleh dan tidak boleh di S/4HANA Cloud Public Edition?

Di S/4HANA Cloud Public Edition, Anda hanya boleh memperluas sistem lewat tiga model resmi: *key-user* (in-app), *developer extensibility* via ABAP Cloud, dan *side-by-side* di SAP BTP. Ketiganya wajib memakai API yang dirilis dan diizinkan SAP. Modifikasi core maupun *classic ABAP* tidak tersedia, dan sistem di-upgrade otomatis dua kali setahun.

Tiga model ekstensibilitas yang diizinkan itu bekerja pada lapisan berbeda:

1. **Key-user extensibility (in-app).** Penyesuaian tanpa kode oleh pengguna bisnis terlatih: menambah *field* kustom, mengubah *form*, atau menyusun logika sederhana langsung di dalam aplikasi.
2. **Developer extensibility via ABAP Cloud.** Pengembangan kode di lingkungan SAP S/4HANA Cloud ABAP Environment, tetapi hanya boleh memanggil API dan *extension point* yang resmi dirilis SAP.
3. **Side-by-side extensibility di SAP BTP.** Aplikasi yang berjalan terpisah dari core di SAP Business Technology Platform, terhubung ke S/4HANA lewat API. Logika bisnis berat dipindahkan keluar dari inti.

Daftar yang tidak tersedia justru sama menentukannya. Menurut dokumentasi SAP, *classic extensibility* berbasis kode ABAP klasik tidak lagi dapat dipakai di S/4HANA Cloud Public Edition (SAP Community, Agustus 2025). Tidak ada modifikasi objek standar, tidak ada penulisan langsung ke tabel SAP. Model ini menggantikan kebiasaan lama dengan pemisahan tegas antara kode SAP dan kode ekstensi Anda.

Konsekuensinya pada siklus upgrade. Public Edition di-upgrade oleh SAP dengan dua *major release* wajib per tahun, ditambah *Continuous Feature Delivery* bulanan, sehingga pelanggan selalu berada di rilis terbaru yang didukung. Karena Anda tidak mengontrol jadwal itu, setiap ekstensi harus *upgrade-safe* sejak baris pertama ditulis. Di sinilah "dipaksa bersih" berarti harfiah: platform tidak akan membiarkan Anda menumpuk *technical debt* yang bisa merusak upgrade berikutnya.

## Perbandingan clean core: Public vs Private vs On-Premise

Ringkasnya: Public Edition melarang modifikasi core dan classic ABAP serta mengunci jadwal upgrade di tangan SAP; Private Edition dan on-premise mengizinkan keduanya tetapi menyerahkan disiplin dan kendali upgrade kepada Anda. Ketiga edisi sama-sama mendukung key-user, developer, dan side-by-side extensibility. Tabel berikut memetakan perbedaannya baris per baris.

| Dimensi | Public Edition (GROW) | Private Edition (RISE) | On-Premise |
|---|---|---|---|
| Penegakan clean core | Dipaksa sistem (*enforced*) | Disarankan (*recommended*) | Disarankan (*recommended*) |
| Modifikasi core diizinkan? | Tidak | Ya (tidak disarankan) | Ya (tidak disarankan) |
| Classic ABAP | Tidak tersedia | Tersedia | Tersedia |
| Key-user (in-app) | Ya | Ya | Ya |
| Developer (ABAP Cloud) | Ya (hanya API resmi) | Ya (direkomendasikan) | Ya (direkomendasikan) |
| Side-by-side (SAP BTP) | Ya | Ya | Ya |
| Level A–D yang mungkin | Praktis hanya A | A–D (D sangat dihindari) | A–D (D sangat dihindari) |
| Kendali jadwal upgrade | SAP (otomatis, 2×/tahun) | Pelanggan | Pelanggan |

Kerangka yang dipakai SAP untuk menilai "seberapa bersih" sebuah ekstensi adalah model empat level, A sampai D, yang sejak 2025 resmi menggantikan model tiga tingkat sebelumnya (SAP Community, pembaruan Agustus 2025). Level ini menilai ekstensi berdasarkan keamanan-upgrade dan pemakaian API resmi.

| Level | Deskripsi singkat | Contoh teknologi | Upgrade-safe? |
|---|---|---|---|
| A | Hanya API SAP resmi dan stabil | ABAP Cloud on-stack; SAP BTP side-by-side | Ya (direkomendasikan) |
| B | Patuh, memakai *classic API* terdokumentasi | BAPI, IDoc, RFC, batch job SM37 | Umumnya, belum penuh cloud-ready |
| C | Mengakses objek internal yang tidak dirilis | Objek non-released; perlu dipantau | Berisiko |
| D | Modifikasi dan teknik tidak direkomendasikan | Modifikasi objek standar, tulis langsung ke tabel, *implicit enhancement* | Tidak |

Menurut SAP News Center (Agustus 2025), Level A adalah ekstensi yang sepenuhnya aman-upgrade dan dapat dibangun lewat dua lokasi: *on-stack* via ABAP Cloud atau *side-by-side* di SAP BTP. Ini sering disalahpahami. "Level A" tidak berarti "harus BTP", sebab ekstensi on-stack pun bisa masuk Level A selama hanya memakai API resmi. Public Edition praktis hanya sanggup mencapai Level A, sedangkan Private dan on-premise membentang dari A sampai D, dengan D yang secara eksplisit dihindari.

## Apa artinya bagi portabilitas dan masa depan ekstensi Anda?

Portabilitas menentukan seberapa mudah ekstensi Anda ikut pindah bila kelak berganti edisi. Ekstensi *side-by-side* di SAP BTP paling portabel karena logika bisnisnya ter-*decouple* dari core, sehingga umumnya kompatibel lintas edisi. Ekstensi *on-stack* ABAP Cloud yang dibuat di Private Edition biasanya perlu adaptasi untuk berjalan di Public Cloud, sementara classic ABAP tidak portabel sama sekali.

Perbedaan lokasi ekstensi inilah yang menentukan masa depan. *On-stack* berarti ekstensi terintegrasi ketat di dalam sistem ERP; *side-by-side* berarti aplikasi terpisah yang berjalan independen di SAP BTP dan hanya menyapa core lewat API. Ketika sebuah perusahaan Private Edition suatu hari ingin bergerak ke Public, ekstensi side-by-side-nya punya peluang jauh lebih besar untuk ikut tanpa ditulis ulang (SAP News Center, Agustus 2025).

Implikasi praktisnya: bila Anda memperkirakan akan bergeser edisi di masa depan, memilih pendekatan side-by-side sejak awal menjaga fleksibilitas. Prinsip yang sama berlaku ketika memperluas lapisan data dan analitik. Alih-alih menempelkan logika pelaporan berat ke dalam core, banyak perusahaan memindahkannya ke platform terpisah seperti SAP Datasphere atau BW/4HANA, pendekatan yang kami bahas di [Data Warehouse Solutions](https://www.soltius.co.id/id/blog/data-warehouse-solutions), agar inti S/4HANA tetap bersih dan analitik tetap leluasa berkembang.

## Kapan Private Edition atau on-premise justru pilihan lebih tepat

Public Edition memang "paling bersih", tetapi paling bersih bukan berarti paling cocok. Private Edition atau on-premise lebih tepat ketika keunikan proses bisnis adalah keunggulan bersaing, ketika ada tuntutan regulasi atau *data residency* tertentu, atau ketika perusahaan butuh kendali penuh atas jadwal upgrade. Keduanya tetap bisa menerapkan clean core secara disiplin.

Ada nuansa yang sering hilang dalam perdebatan "cloud vs on-premise". Memilih Private Edition tidak otomatis berarti sistem Anda kotor. Perusahaan bisa menerapkan ABAP Cloud sebagai model default dan mencapai mayoritas Level A juga di Private. Bedanya cuma satu: di Public, kebersihan adalah batasan sistem; di Private dan on-premise, kebersihan adalah pilihan disiplin.

Beberapa situasi di mana fleksibilitas Private/on-premise benar-benar berharga:

- **Proses yang tidak bisa distandarkan.** Bila alur produksi atau logika penetapan harga Anda adalah pembeda di pasar, memaksakannya masuk *best practice* standar Public bisa mengikis keunggulan itu.
- **Kepatuhan dan lokasi data.** Sektor tertentu menuntut kendali atas tempat dan cara data diproses, yang lebih mudah dipenuhi dengan *instance* terdedikasi.
- **Kendali atas waktu upgrade.** Perusahaan dengan jendela pemeliharaan ketat kadang perlu menentukan sendiri kapan upgrade dijalankan, bukan mengikuti kalender SAP.

Di lapangan, penghalang terbesar mengadopsi Public Edition biasanya bukan keterbatasan teknis ekstensibilitas, melainkan kesiapan proses: kemauan mengganti proses kustom dengan standar SAP. Karena itu keputusan edisi sebaiknya dimulai dari pertanyaan bisnis, bukan pertanyaan teknis — seberapa unik proses Anda, dan seberapa siap organisasi melepas kebiasaan lama. Jujur menjawabnya di awal jauh lebih murah ketimbang menyesalinya setelah kontrak berjalan.

## FAQ (Pertanyaan yang Sering Diajukan)

### Apa beda clean core di Public Edition dan Private Edition?

Perbedaannya pada penegakan. S/4HANA Cloud Public Edition (GROW with SAP) memaksa clean core secara teknis: modifikasi core dan classic ABAP tidak diizinkan, hanya ekstensi via API resmi. Private Edition (RISE with SAP) menyarankan clean core tetapi tetap mengizinkan classic ABAP sampai modifikasi core. Public praktis hanya bisa Level A; Private bisa Level A sampai D.

### Apakah clean core wajib untuk SAP on-premise?

Tidak wajib secara teknis. Pada S/4HANA on-premise Anda masih dapat memodifikasi core dan memakai classic ABAP (Level A–D), sama seperti Private Edition. Namun SAP tetap merekomendasikan clean core dan menjadikan ABAP Cloud sebagai model pengembangan default untuk ekstensi baru. Alasannya praktis: makin bersih core, makin murah dan cepat setiap upgrade, termasuk bila nanti pindah ke cloud.

### Apa itu RISE with SAP dan GROW with SAP?

Keduanya paket adopsi S/4HANA Cloud. RISE with SAP umumnya ditujukan bagi pelanggan SAP eksisting yang menuju S/4HANA Cloud Private Edition, yakni *instance* terdedikasi yang fleksibel mirip on-premise di atas cloud. GROW with SAP umumnya ditujukan bagi perusahaan baru atau kelas menengah menuju S/4HANA Cloud Public Edition yang bersifat *multi-tenant*, dengan *best practice* bawaan dan pendekatan *greenfield*. Perbedaan edisi inilah yang menentukan seberapa ketat clean core ditegakkan.

### Ekstensibilitas apa saja yang tersedia di S/4HANA Cloud Public Edition?

Tersedia tiga model: *key-user* (in-app) untuk penyesuaian tanpa kode; *developer extensibility* via ABAP Cloud di SAP S/4HANA Cloud ABAP Environment; dan *side-by-side* di SAP BTP. Semuanya hanya boleh memakai API yang dirilis SAP. Classic ABAP dan modifikasi core tidak tersedia. Sistem di-upgrade otomatis dua kali setahun, sehingga ekstensi harus *upgrade-safe* sejak awal.

### Bisakah ekstensi Private Edition dipindahkan ke Public Cloud?

Bergantung jenisnya. Ekstensi *side-by-side* di SAP BTP paling portabel karena ter-*decouple* dari core, sehingga umumnya kompatibel lintas edisi. Ekstensi *on-stack* ABAP Cloud yang dibuat di Private Edition biasanya perlu adaptasi agar berjalan di Public Cloud. Classic ABAP dan modifikasi core tidak portabel sama sekali. Memilih pendekatan side-by-side sejak awal menjaga fleksibilitas masa depan.

### Apakah Public Edition lebih murah karena "dipaksa" bersih?

Tidak selalu, dan bukan itu inti pertimbangannya. Public Edition menekan biaya jangka panjang lewat upgrade otomatis dan bebas *technical debt* dari modifikasi core. Namun bila proses bisnis Anda sangat unik dan sulit menyesuaikan *best practice* standar, Private Edition atau on-premise bisa lebih hemat total karena menghindari perombakan proses besar-besaran. Bandingkan TCO menyeluruh, bukan sekadar biaya lisensi.

### Edisi mana yang cocok untuk perusahaan dengan proses sangat unik?

Umumnya Private Edition (RISE with SAP) atau on-premise. Keduanya memberi kendali kustomisasi lebih tinggi, termasuk classic ABAP bila benar-benar diperlukan, serta kendali atas jadwal upgrade dan kebutuhan regulasi. Public Edition menuntut adopsi proses standar. Rekomendasi: pilih Private atau on-premise bila keunikan proses adalah keunggulan bersaing, lalu terapkan clean core (ABAP Cloud) agar tetap aman-upgrade.

## Kesimpulan

Memilih edisi S/4HANA pada dasarnya adalah memilih seberapa banyak kebebasan kustomisasi yang ingin Anda tukar dengan kemudahan upgrade. Tidak ada jawaban tunggal yang benar: Public Edition menuntut disiplin proses, sedangkan Private Edition dan on-premise menuntut disiplin teknis. Yang menentukan hasil akhir adalah kejujuran menilai seberapa unik proses bisnis Anda dan seberapa siap organisasi mengadopsi standar sebelum kontrak ditandatangani. Diakui sebagai Best RISE dan Best Cloud Partner, Soltius membantu perusahaan memetakan edisi S/4HANA yang paling sesuai dengan kebutuhan kustomisasi dan kepatuhan, lalu memigrasikan dan mendukungnya setelah go-live.

Untuk mendiskusikan edisi S/4HANA mana yang paling pas dengan kebutuhan clean core perusahaan Anda, kunjungi soltius.co.id.
