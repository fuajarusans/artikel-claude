---
title: "Low-Code dan Clean Core: Memperluas SAP S/4HANA Tanpa Merusak Inti"
meta_title: "Low-Code Platform & Clean Core: Perluas SAP S/4HANA"
meta_description: "Low-Code Platform (SAP Build) dan clean core: cara memperluas SAP S/4HANA tanpa merusak inti agar tetap upgrade-safe, lengkap dengan model level A–D."
slug: "low-code-platform-clean-core-sap-s4hana"
language: "id"
primary_keyword: "Low Code Platform"
secondary_keywords:
  - "clean core"
  - "SAP Build"
  - "SAP BTP"
  - "side-by-side extensibility"
  - "in-app / key-user extensibility"
  - "developer extensibility"
  - "ABAP Cloud"
  - "SAP S/4HANA"
  - "upgrade-safe"
  - "custom code remediation"
  - "released API"
  - "extensibility model"
internal_links:
  - url: "https://www.soltius.co.id/id/blog/low-code-and-no-code-platforms"
    anchor: "Low-Code Platform"
  - url: "https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide"
    anchor: "SAP Clean Core"
  - url: "https://www.soltius.co.id/id/blog/business-intelligence"
    anchor: "Business Intelligence"
external_citations:
  - url: "https://news.sap.com/2025/08/extend-sap-s4hana-cloud-right-way-clean-clear/"
    context: "Model clean core level concept (4 level A–D) menggantikan model 3-tier extensibility per Agustus 2025; SAP Build sebagai jalur Level A; released API = upgrade-safe"
  - url: "https://learning.sap.com/courses/expanding-sap-s-4hana-using-key-user-side-by-side-extensibility/choosing-the-appropriate-extensibility-option"
    context: "Tiga pendekatan extensibility (key-user/in-app, side-by-side, developer) dan kapan memakai masing-masing"
brief_id: "low-code-platform-03"
target_word_count: 1650
publish_month: "2026-09"
word_count: 2179
---

# Low-Code dan Clean Core: Memperluas SAP S/4HANA Tanpa Merusak Inti

Banyak perusahaan yang baru bermigrasi ke SAP S/4HANA membawa beban lama yang sama: puluhan bahkan ratusan kustomisasi yang dulu menempel langsung di inti ECC, dan membuat setiap *upgrade* berubah menjadi proyek berbulan-bulan. Pertanyaan yang kini sering muncul di ruang rapat IT sederhana tapi menentukan: kalau kami butuh aplikasi atau ekstensi baru, bagaimana menambahkannya tanpa mengulang kesalahan lama? Jawabannya berpusat pada prinsip *clean core*, dan sebuah [Low-Code Platform](https://www.soltius.co.id/id/blog/low-code-and-no-code-platforms) seperti SAP Build punya tempat yang jelas di dalamnya. Artikel ini memetakan di mana low-code duduk dalam model *extensibility* SAP, dan mengapa posisinya itu menjaga sistem Anda tetap aman saat di-upgrade.

> **Ringkas:** *Clean core* adalah prinsip menjaga inti SAP S/4HANA tetap standar dan *upgrade-safe* (aman saat pembaruan) dengan memindahkan kustomisasi ke luar inti, umumnya ke SAP BTP lewat *side-by-side extensibility*, termasuk low-code SAP Build, atau tetap di dalam sistem lewat ABAP Cloud. Ekstensi hanya memakai *released API* resmi, sehingga upgrade S/4HANA berjalan lancar tanpa merusak kustomisasi.

Ada dua konsep yang kerap tertukar dalam topik ini: tiga *cara* memperluas S/4HANA, dan empat *level* kematangan yang menilai seberapa bersih ekstensi tersebut. Kita bahas keduanya secara terpisah, lalu tempatkan low-code di antaranya.

## Apa Itu Clean Core dan Mengapa Kustomisasi Lama Menyulitkan Upgrade?

Clean core berarti membiarkan kode dan objek standar SAP S/4HANA tetap utuh, lalu menaruh semua penyesuaian di lapisan terpisah yang hanya berkomunikasi lewat antarmuka resmi. Prinsip ini lahir karena modifikasi langsung pada inti membuat setiap pembaruan harus diuji ulang, mahal, dan rapuh. Menjaga inti tetap bersih membuat upgrade menjadi rutinitas, bukan proyek besar.

Di era ECC, mengubah objek standar SAP adalah hal biasa. Konsultan menambah *field*, menempelkan logika, bahkan memodifikasi program standar langsung di inti. Selama sistem tidak di-upgrade, semuanya tampak baik-baik saja.

Masalahnya muncul saat pembaruan. Setiap kustomisasi yang menyentuh inti harus diperiksa, disesuaikan, dan diuji ulang terhadap versi baru. Semakin banyak modifikasi, semakin panjang dan berisiko upgrade-nya. Inilah yang di lapangan sering mengubah pembaruan menjadi proyek berbulan-bulan, sekaligus menumpuk *technical debt* (utang teknis yang harus dibayar di kemudian hari).

Clean core memutus lingkaran itu. Alih-alih menempel di inti, kustomisasi dipindahkan ke luar, ke SAP BTP lewat *side-by-side extensibility*, atau tetap di dalam sistem lewat ABAP Cloud, dan keduanya hanya mengakses *released API*. Karena inti tak lagi disentuh, upgrade tidak merusak ekstensi. Bedanya mendasar: dulu kustomisasi adalah bagian dari inti; kini ia menjadi tetangga inti. Untuk pembahasan menyeluruh soal prinsip ini beserta dimensinya, panduan lengkap [SAP Clean Core](https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide) bisa menjadi rujukan yang baik.

## Tiga Cara Memperluas SAP S/4HANA: Model Extensibility Clean Core

SAP S/4HANA menyediakan tiga pendekatan untuk memperluas sistem tanpa menyentuh inti: *key-user/in-app extensibility* (no/low-code di dalam aplikasi Fiori standar), *side-by-side extensibility* (aplikasi terpisah di SAP BTP, tempat SAP Build berada), dan *developer extensibility* (kode ABAP Cloud di dalam sistem). Ketiganya hanya memakai *released API*, sehingga tetap *upgrade-safe*.

Ketiga pendekatan itu bukan tingkatan yang saling menggantikan, melainkan pilihan untuk kebutuhan yang berbeda:

1. **Key-user / in-app extensibility.** Pengguna bisnis (*key user*) menambah *field*, formulir, logika sederhana, dan *custom business object* langsung di aplikasi Fiori standar, tanpa developer. Sifatnya no-code hingga low-code. Batasnya jelas: tidak untuk aplikasi baru yang kompleks atau logika transaksi berat.
2. **Side-by-side extensibility.** Aplikasi berjalan terpisah (*decoupled*) dari inti di SAP BTP dan berinteraksi dengan S/4HANA lewat released API. Di sinilah SAP Build, portofolio low-code SAP, bekerja. Cocok untuk aplikasi, *workflow*, atau portal baru yang mengintegrasikan beberapa sistem.
3. **Developer extensibility.** Developer profesional menulis kode dengan *ABAP Cloud* (model pengembangan ABAP yang dioptimalkan untuk cloud) di dalam *stack* S/4HANA. Kepatuhannya ditegakkan lewat pemeriksaan sintaks yang hanya mengizinkan released API. Ini rumah bagi logika inti yang dalam dan menuntut kinerja tinggi.

SAP merangkum kapan sebaiknya memakai masing-masing dalam materi [SAP Learning](https://learning.sap.com/courses/expanding-sap-s-4hana-using-key-user-side-by-side-extensibility/choosing-the-appropriate-extensibility-option). Di sinilah satu kesalahpahaman umum perlu diluruskan. Tiga pendekatan di atas adalah *cara* membangun ekstensi. Terpisah dari itu, sejak Agustus 2025 SAP memperkenalkan *clean core level concept*: sistem penilaian empat level (A, B, C, dan D) yang mengukur seberapa bersih dan upgrade-safe sebuah ekstensi, apa pun cara membangunnya. Model baru ini menggantikan model *3-tier extensibility* lama yang kini sudah dipensiunkan ([SAP News Center](https://news.sap.com/2025/08/extend-sap-s4hana-cloud-right-way-clean-clear/), Agustus 2025). Jadi jangan menyamakan "tiga pendekatan" dengan "model 3-tier" yang lama; keduanya hal yang berbeda.

| Level | Ringkasnya | Cara dibangun | Dampak upgrade |
|---|---|---|---|
| **A** (tertinggi) | Hanya antarmuka SAP yang *released* dan stabil (dengan *stability contract* resmi) | ABAP Cloud di dalam sistem, atau SAP Build side-by-side di BTP | Paling aman; direkomendasikan SAP |
| **B** | Memenuhi kriteria A, tetapi memakai teknologi/API ABAP klasik yang masih direkomendasikan | ABAP klasik sesuai rekomendasi SAP | Cukup aman, perlu perhatian |
| **C** | Sebagian patuh; mengakses objek internal SAP tertentu | ABAP klasik plus objek internal (skenario legacy) | Lebih berisiko saat upgrade |
| **D** | Tidak tergolong bersih; teknik atau objek yang tidak *released* | Teknik klasik atau modifikasi tidak resmi | Risiko tertinggi |

Arah yang dianjurkan SAP jelas: pakai level setinggi mungkin, idealnya Level A, dan turun ke teknik klasik hanya bila benar-benar perlu. Yang menarik, Level A dapat dicapai lewat dua jalur berbeda: ABAP Cloud di dalam sistem, atau SAP Build side-by-side di BTP. Strategi memprioritaskan BTP untuk ekstensi baru ini sering disebut *BTP-first*.

## Di Mana Posisi Low-Code (SAP Build) dalam Model Ini?

SAP Build adalah solusi low-code sekaligus pro-code dari SAP yang berjalan di SAP BTP sebagai *side-by-side extensibility*. Karena aplikasinya dibangun terpisah dari inti dan hanya memakai *released API*, ekstensi SAP Build dapat mencapai Level A, tingkat kebersihan tertinggi. Low-code, dengan kata lain, adalah salah satu jalur resmi menuju clean core, bukan jalan pintas yang berisiko.

Low-code menempati dua titik dalam model tadi. Yang paling menonjol adalah side-by-side lewat SAP Build. Portofolionya mencakup SAP Build Apps, SAP Build Process Automation, dan SAP Build Work Zone, ditambah SAP Build Code untuk kebutuhan pro-code. (Rincian tiap komponen bukan fokus artikel ini.) Titik kedua, sebagian *key-user extensibility* juga bersifat no-code, dilakukan langsung di aplikasi Fiori tanpa menulis satu baris kode pun.

Kenapa ini penting untuk keamanan upgrade? Karena low-code, baik lewat side-by-side maupun key-user, tidak pernah mengubah objek inti. Aplikasinya membaca dan menulis hanya lewat released API yang stabilitasnya dijamin SAP. Saat SAP meng-upgrade inti, ekstensi tidak ikut pecah. Ini kebalikan dari modifikasi inti ala ECC yang harus diuji ulang setiap kali ada pembaruan.

Bagi tim bisnis, daya tarik low-code juga soal kecepatan. Konteks pasarnya besar: menurut proyeksi Gartner, sekitar 75% pengembangan aplikasi baru akan memakai teknologi low-code pada 2026, naik dari sekitar 40% pada 2021. Angka ini sebuah *forecast*, bukan realisasi terukur, tapi arah trennya cukup jelas. Kemampuan membangun cepat tanpa membebani antrean developer inti sudah menjadi kebutuhan nyata, bukan lagi kemewahan.

## Tier Extensibility Mana untuk Kebutuhan Apa?

Pilih pendekatan berdasarkan sifat kebutuhan, bukan kebiasaan. Kebutuhan sederhana seperti menambah *field* atau formulir cukup ditangani key-user/in-app. Aplikasi atau *workflow* baru yang mengintegrasikan sistem paling pas dibangun side-by-side dengan SAP Build. Sementara logika transaksi berat yang menyatu erat dengan proses inti menuntut developer extensibility lewat ABAP Cloud.

| Kebutuhan | Pendekatan yang tepat | Siapa yang mengerjakan | Sifat |
|---|---|---|---|
| Tambah *field*, form/approval sederhana, *custom business object* di aplikasi standar | Key-user / in-app extensibility | Key user atau power user bisnis | No/low-code, di dalam Fiori standar |
| Aplikasi atau *workflow* baru yang mengintegrasikan sistem, portal, otomasi | Side-by-side (SAP Build) | *Fusion team*: citizen developer plus pro developer | Low-code di SAP BTP; bisa Level A |
| Logika transaksi berat, kinerja tinggi, ekstensi erat dengan proses inti | Developer extensibility (ABAP Cloud/RAP) | Developer ABAP profesional | Pro-code di dalam sistem; released API saja |

Contoh yang sering muncul adalah kebutuhan analitik. Sebuah dashboard atau aplikasi pelaporan baru biasanya paling tepat dibangun side-by-side, lalu menyuplai lapisan *Business Intelligence* di atasnya. Pola ini menautkan low-code dengan inisiatif [Business Intelligence](https://www.soltius.co.id/id/blog/business-intelligence) tanpa perlu mengutak-atik inti transaksional S/4HANA. Prinsipnya satu: pakai pendekatan sebersih mungkin untuk kebutuhannya, dan jangan "turun" ke teknik yang lebih berisiko tanpa alasan kuat.

## Batas Low-Code dalam Clean Core: Kapan Anda Tetap Butuh ABAP Cloud

Low-code bukan solusi untuk semua ekstensi. Untuk logika transaksi yang berat, menuntut kinerja tinggi, atau menyatu erat dengan proses inti, developer extensibility lewat ABAP Cloud lebih tepat. Begitu juga, kustomisasi ECC lama tidak bisa sekadar "dipindahkan" ke low-code; ia harus di-*remediate*, yakni dianalisis dan ditulis ulang di pendekatan yang bersih.

Bagian ini jarang ditulis vendor, padahal justru di sinilah keputusan sulitnya berada. Godaan setelah memahami clean core adalah menganggap low-code sebagai obat segala penyakit. Kenyataannya tidak begitu. Aplikasi low-code unggul untuk *workflow*, formulir, dan aplikasi baru yang menghubungkan sistem. Tapi begitu kebutuhan menyentuh logika bisnis inti yang kompleks atau volume transaksi tinggi, ABAP Cloud di dalam sistem adalah rumah yang benar.

Persoalan kedua lebih pelik: nasib kustomisasi lama. Ada anggapan keliru bahwa migrasi ke clean core berarti "memindahkan" kode kustom lama ke low-code. Di lapangan, langkah tersulit justru bukan membangun ekstensi baru, melainkan memutuskan nasib kustomisasi lama. Logika ABAP klasik yang kompleks tidak otomatis muat di low-code.

Yang sebenarnya terjadi adalah *custom code remediation* (penataan ulang kode kustom): inventarisasi semua kustomisasi, analisis pemakaian nyata, klasifikasi terhadap level A–D, lalu memutuskan nasibnya. Ada tiga kemungkinan hasil:

- **Dipensiunkan**, karena ternyata tak lagi dipakai.
- **Digantikan fitur standar** yang kini sudah tersedia di S/4HANA.
- **Ditulis ulang** di pendekatan yang bersih, entah key-user, side-by-side, atau ABAP Cloud.

Karena itu, keputusan tier sebaiknya lahir dari *assessment* kode kustom yang jujur, bukan dari kebiasaan lama menyalin pola ECC. Di sinilah pengalaman partner implementasi seperti Soltius berperan: memetakan mana yang layak dipertahankan, digantikan, atau ditulis ulang sebelum satu baris ekstensi baru dibuat.

Satu catatan terakhir: model clean core masih berkembang. Pembaruan besar terjadi pada Agustus 2025 dengan hadirnya level A–D, dan SAP memperbarui panduannya secara berkala. Maka patokan yang dipakai hari ini sebaiknya selalu dicek ke dokumentasi resmi SAP terbaru, terutama untuk detail yang bisa berbeda antara S/4HANA Cloud edisi Public dan Private.

## FAQ (Pertanyaan yang Sering Diajukan)

### Apa itu clean core pada SAP S/4HANA?

Clean core adalah prinsip menjaga inti SAP S/4HANA tetap standar dan *upgrade-safe* dengan memindahkan kustomisasi ke luar inti, umumnya ke SAP BTP lewat *side-by-side extensibility* (termasuk low-code SAP Build) atau lewat ABAP Cloud di dalam sistem. Ekstensi hanya memakai *released API* resmi, sehingga upgrade S/4HANA tidak merusak kustomisasi dan sistem tetap siap cloud.

### Apa perbedaan in-app/key-user, side-by-side, dan developer extensibility?

Ketiganya cara memperluas S/4HANA tanpa menyentuh inti. *Key-user/in-app extensibility* bersifat no/low-code di dalam aplikasi Fiori standar (menambah field, logika sederhana, custom business object) tanpa developer. *Side-by-side extensibility* menjalankan aplikasi terpisah di SAP BTP, tempat SAP Build bekerja. *Developer extensibility* memakai ABAP Cloud untuk logika kompleks di dalam sistem. Semuanya hanya memakai released API sehingga upgrade-safe.

### Apakah SAP Build termasuk side-by-side extensibility?

Ya. SAP Build adalah solusi low-code/pro-code SAP yang berjalan di SAP BTP sebagai *side-by-side extensibility*, yaitu aplikasi dibangun terpisah dari inti dan berinteraksi dengan S/4HANA lewat *released API*. Karena tidak memodifikasi inti dan hanya memakai antarmuka resmi, ekstensi SAP Build dapat mencapai Level A, kualitas tertinggi dalam model kematangan clean core SAP.

### Mengapa low-code membuat upgrade SAP lebih aman?

Karena low-code (SAP Build side-by-side atau key-user no-code) tidak memodifikasi objek inti. Aplikasinya berjalan terpisah atau di lapisan aman dan hanya membaca serta menulis lewat *released API* yang stabilitasnya dijamin SAP. Saat SAP meng-upgrade inti, ekstensi tidak ikut rusak, berbeda dari modifikasi inti ala ECC lama yang harus diuji ulang dan sering pecah setiap upgrade.

### Apa itu ABAP Cloud dan kapan dipakai?

ABAP Cloud adalah model pengembangan ABAP yang dioptimalkan untuk cloud: hanya mengakses *released* SAP API dan objek resmi, bersifat *upgrade-stable*, dengan kepatuhan ditegakkan lewat pemeriksaan sintaks. Dipakai ketika kebutuhan melebihi kemampuan low-code, misalnya logika transaksi berat, kinerja tinggi, atau ekstensi yang harus menyatu erat dengan proses inti. ABAP Cloud juga salah satu jalur menuju Level A clean core.

### Apakah kustomisasi lama bisa dipindahkan ke low-code?

Tidak otomatis. Kustomisasi ECC lama, apalagi yang memodifikasi objek inti, perlu *custom code remediation*: inventarisasi, analisis pemakaian, klasifikasi terhadap level A–D, lalu diputuskan nasibnya (dipensiunkan, digantikan fitur standar, atau ditulis ulang di pendekatan bersih). Logika ABAP kompleks sering lebih tepat ke ABAP Cloud, bukan low-code. Low-code paling pas untuk workflow, form, dan aplikasi baru yang menghubungkan sistem.

### Apa bedanya model 3-tier lama dan model 4 level (A–D) yang baru?

Pada Agustus 2025, SAP mengganti model "3-tier extensibility" lama dengan *clean core level concept* berupa empat level: A, B, C, dan D. Model baru menilai setiap ekstensi berdasarkan seberapa bersih dan upgrade-safe-nya. Level A hanya memakai antarmuka resmi dan stabil (kualitas tertinggi), sedangkan B, C, dan D makin banyak memakai teknik atau objek klasik yang lebih berisiko saat upgrade.

## Kesimpulan

Kembali ke pertanyaan di ruang rapat tadi: menambah ekstensi baru tanpa mengulang dosa lama itu mungkin, asalkan setiap penyesuaian ditempatkan di level sebersih mungkin dan dibangun dengan cara yang tepat. Low-code lewat SAP Build memberi jalur cepat menuju Level A untuk banyak kebutuhan, sementara ABAP Cloud menutup kebutuhan yang lebih dalam. Kuncinya bukan memilih satu alat, melainkan mendisiplinkan diri menjaga inti tetap bersih. Sebagai SAP Platinum Partner melalui United VARs dan bagian dari Metrodata Group sejak 1998, Soltius membantu perusahaan menerapkan prinsip clean core: memindahkan kustomisasi ke SAP BTP, misalnya lewat low-code SAP Build, agar sistem tetap mudah di-upgrade dan siap cloud.

Untuk mendiskusikan kesiapan clean core dan strategi extensibility di perusahaan Anda, kunjungi soltius.co.id.
