---
title: "Clean Core untuk Pengguna Bisnis: Kustomisasi SAP Tanpa Coding lewat Key-User Extensibility"
meta_title: "Clean Core: Kustomisasi SAP Tanpa Coding (Key-User)"
meta_description: "Clean Core tetap memungkinkan kustomisasi SAP S/4HANA tanpa coding lewat key-user extensibility: tambah custom field, atur layar Fiori, aman saat upgrade."
slug: "clean-core-kustomisasi-sap-tanpa-coding-key-user"
language: "id"
primary_keyword: "SAP Clean Core"
secondary_keywords:
  - "key-user extensibility"
  - "in-app extensibility"
  - "kustomisasi SAP tanpa coding"
  - "custom field S/4HANA"
  - "Custom Fields and Logic"
  - "adaptasi UI Fiori"
  - "BAdI"
  - "key-user vs developer extensibility"
  - "clean-core-safe customization"
  - "fit-to-standard"
internal_links:
  - url: "https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide"
    anchor: "SAP Clean Core"
  - url: "https://www.soltius.co.id/id/blog/low-code-and-no-code-platforms"
    anchor: "platform low-code SAP Build"
  - url: "https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud"
    anchor: "migrasi ERP ke cloud"
external_citations:
  - url: "https://learning.sap.com/courses/implementing-sap-s-4hana-cloud-public-edition/introducing-the-key-user-in-app-extensibility-tools"
    context: "Definisi key-user extensibility, target pengguna tanpa keahlian coding, alat Extensibility Cockpit/Inventory"
  - url: "https://news.sap.com/2025/08/extend-sap-s4hana-cloud-right-way-clean-clear/"
    context: "Model kematangan clean core level A-D (2025); tiga jalur extensibility S/4HANA"
brief_id: "sap-clean-core-03"
target_word_count: 1650
publish_month: "2026-08"
word_count: 1682
date_modified: "2026-06-08"
---

# Clean Core untuk Pengguna Bisnis: Kustomisasi SAP Tanpa Coding lewat Key-User Extensibility

Begitu tim implementasi mengucapkan "jangan utak-atik core", reaksi pertama dari bagian operasi dan finance biasanya cemas: berarti kami tidak bisa lagi menyesuaikan SAP dengan cara kerja kami? Justru sebaliknya. Prinsip [SAP Clean Core](https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide) memang membatasi modifikasi langsung pada kode inti, tetapi SAP menyediakan jalur resmi bagi pengguna bisnis untuk menambah field, menata ulang layar, dan menambahkan logika sederhana, semuanya tanpa satu baris kode. Artikel ini bukan untuk developer, melainkan untuk manajer fungsional dan key user yang ingin tahu persis: apa yang boleh saya ubah sendiri, dan apa yang harus diserahkan ke IT.

> **Ringkas:** *Key-user (in-app) extensibility* adalah kemampuan pengguna bisnis menyesuaikan SAP S/4HANA langsung dari dalam sistem, yaitu menambah *custom field*, menata ulang layar Fiori, dan menambahkan logika sederhana lewat aplikasi *Custom Fields and Logic*, tanpa menulis kode dan tanpa menyentuh inti SAP, sehingga kustomisasi tetap aman saat sistem di-*upgrade*.

Melalui artikel ini kita akan membahas apa yang sebenarnya bisa dilakukan key user, membandingkan tiga jalur kustomisasi yang sah dalam kerangka clean core, dan, yang sering dilewatkan kompetitor, kapan alat tanpa-coding ini mencapai batasnya dan kebutuhan harus naik ke developer.

{IMAGE_01: Diagram alur kerja key-user extensibility lima langkah horizontal: (1) Buka Fiori launchpad, (2) Pilih app yang extensible, (3) Gunakan Custom Fields and Logic atau Adapt UI, (4) Uji di tenant development, (5) Export ke production; tiap langkah dengan ikon SAP Fiori, gaya korporat biru-abu, teks Bahasa Indonesia}

## Apa itu key-user (in-app) extensibility di SAP S/4HANA?

Key-user atau *in-app extensibility* adalah jalur resmi SAP yang membiarkan pengguna bisnis, bukan programmer, menyesuaikan S/4HANA dari dalam sistem melalui aplikasi berbasis SAP Fiori. Sasarannya, menurut SAP Learning, adalah "administrator dan spesialis fungsional yang menguasai produk atau proses bisnis tetapi tidak punya keahlian *coding*". Hasilnya tetap konsisten dengan prinsip clean core dan aman saat *upgrade*.

Inilah yang sering disalahpahami soal clean core. Menjaga inti tetap bersih tidak berarti membekukan sistem; ia berarti memindahkan kustomisasi ke lapisan yang sudah disediakan SAP. Key-user extensibility adalah lapisan paling dekat dengan pengguna: Anda bekerja di dalam aplikasi yang sama yang Anda pakai sehari-hari, bukan di lingkungan pengembangan terpisah.

Dalam strategi SAP, key-user extensibility adalah satu dari tiga jalur perluasan yang sah: *key-user extensibility*, *developer extensibility* (ABAP Cloud), dan *side-by-side extensibility* di SAP BTP (SAP Learning). Ketiganya dirancang agar inti S/4HANA tetap standar. Pada Agustus 2025, SAP menambahkan kerangka kepatuhan clean core empat tingkat (level A hingga D) di atas model ini: level A untuk ekstensi yang sepenuhnya memakai antarmuka publik yang sudah di-*release*, hingga level D untuk pendekatan yang menumpuk *technical debt* dan tidak direkomendasikan (SAP News Center, Agustus 2025).

Satu keunggulan praktis: alat key-user tersedia di semua opsi penerapan S/4HANA. Menurut SAP Learning, "semua yang mungkin di SAP S/4HANA Public Edition juga mungkin di Private Edition maupun on-premise". Artinya, baik Anda di cloud publik, cloud privat, atau on-premise, set alat yang sama tersedia, meski pada on-premise sebagian fitur memerlukan konfigurasi tambahan terlebih dahulu.

## Apa saja yang bisa dilakukan key user tanpa coding?

Dengan alat key-user, pengguna bisnis dapat melakukan empat hal inti tanpa menulis kode: menambah *custom field* dan menampilkannya di layar, laporan, serta template; menata ulang atau menyembunyikan field di antarmuka Fiori; menambahkan logika sederhana seperti validasi dan kalkulasi; dan bahkan membuat *business object* baru lengkap dengan tabel, UI, serta API. Semuanya dikerjakan lewat browser.

Pusat dari semua ini adalah aplikasi **Custom Fields and Logic** (CFL), nama aplikasi Fiori yang dikonfirmasi aktif per Juni 2026 (SAP Learning). Aplikasi ini punya tiga fungsi: *Custom Fields* untuk membuat field baru pada tabel atau *CDS view* dan menyematkannya ke aplikasi; *Data Source Extension* untuk menarik field tambahan dari sumber data; dan *Custom Logic* untuk menambahkan aturan.

Untuk merapikan tampilan, key user memakai mode **Adapt UI**, sebuah fitur yang terpisah dari CFL. Di mode ini, pengguna mengaktifkan adaptasi langsung di aplikasi Fiori dan memindahkan, menyembunyikan, atau menampilkan field secara *drag-and-drop*, persis seperti yang terlihat di layar (WYSIWYG), tanpa menyentuh kode sumber (SAP Learning). Satu batasan penting: tidak semua aplikasi Fiori mendukung adaptasi ini, hanya aplikasi yang memakai kontrol kompatibel dengan SAPUI5 *flexibility*.

Berikut yang lazim dikerjakan key user lewat masing-masing alat:

- **Custom Fields and Logic:** menambah field "Nomor Kontrak" ke layar *Purchase Order*; menyalakan field itu agar bisa dicari bebas; menambah aturan validasi nilai harga.
- **Adapt UI:** memindahkan kolom penting ke atas, menyembunyikan field yang tak relevan untuk tim Anda, mengganti label, menetapkan tampilan default.
- **Custom Business Objects:** membuat entitas data yang belum ada di standar SAP, lengkap dengan tabel, aplikasi Fiori, dan API sederhana.

Soal logika, kekuatannya sengaja dibatasi. *Custom Logic* memakai **ABAP for Key Users**, editor web terbatas (*restricted ABAP*) yang hanya mengizinkan *select* dari *CDS view* yang sudah di-*release*, plus validasi, substitusi, dan determinasi. Operasi *database* langsung seperti INSERT/UPDATE/DELETE dan *dynamic programming* diblokir (SAP Learning). Pembatasan inilah yang menjaga logika Anda tetap aman saat upgrade.

Logika ini ditanamkan pada **BAdI** (*Business Add-In*), yaitu titik perluasan resmi, semacam "kait" yang sengaja disediakan SAP di dalam proses standar untuk menyisipkan logika tambahan. Key user mengimplementasikan BAdI yang sudah di-*release* lewat aplikasi *Custom Logic*, tanpa perlu akses penuh ke lingkungan pengembangan ABAP. Di lapangan, memberi key user kemampuan menambah field atau aturan kecil seperti ini sering memangkas antrean permintaan yang biasanya menumpuk di meja tim IT.

{IMAGE_02: Tabel infografis perbandingan tiga jalur extensibility SAP S/4HANA, tiga kolom (Key-User, Developer, Side-by-Side) dengan ikon peran (pengguna bisnis, developer ABAP, arsitek BTP), indikator butuh-coding (centang/silang), dan satu contoh use case per kolom; warna brand SAP biru-abu, teks Bahasa Indonesia, format screenshot-friendly}

## Key-user vs developer vs side-by-side: jalur mana untuk kebutuhan mana?

Pilih jalur sesuai bobot kebutuhan. *Key-user extensibility* untuk perubahan yang bisa ditangani satu ahli bisnis tanpa kode; *developer extensibility* (ABAP Cloud/RAP) untuk logika yang menuntut pengembangan ABAP profesional; dan *side-by-side* di SAP BTP untuk aplikasi terpisah atau integrasi lintas sistem. Ketiganya clean-core-safe karena hanya memakai mekanisme yang di-*release* SAP.

Satu poin pembeda yang sering mengejutkan: menurut SAP, cakupan *custom field* lewat key-user justru **lebih luas** daripada lewat developer extensibility. Sebabnya, *custom field* developer extensibility hanya didukung untuk aplikasi berbasis RAP (*ABAP RESTful Application Programming Model*) dan tidak mencakup SAP GUI maupun SOAP API. Karena itu SAP merekomendasikan aplikasi *Custom Fields* (alat key-user) sebagai opsi yang disukai untuk membuat field baru. Untuk kebutuhan yang lebih besar dari sekadar field, misalnya sebuah aplikasi tersendiri di atas BTP, jalurnya bergeser ke [platform low-code SAP Build](https://www.soltius.co.id/id/blog/low-code-and-no-code-platforms).

Tabel ini bisa langsung Anda bagikan ke kolega untuk memutuskan jalur:

| Aspek | Key-User (In-App) | Developer Extensibility | Side-by-Side (SAP BTP) |
|---|---|---|---|
| **Siapa yang melakukan** | Pengguna bisnis / key user | Developer ABAP (ABAP Cloud) | Tim developer / arsitek BTP |
| **Butuh coding?** | Tidak (hanya logika sederhana) | Ya (ABAP Cloud / RAP) | Ya (SAP Build dapat menyederhanakan) |
| **Contoh kebutuhan** | Tambah field di layar PO; validasi harga; atur ulang kolom laporan | Laporan kompleks; *wrapper* API; perluas *RAP business object* | Aplikasi mobile terpisah; integrasi ERP-CRM; persetujuan multi-sistem |
| **Cakupan custom field** | Luas (mayoritas app S/4HANA yang extensible) | Terbatas (hanya app berbasis RAP) | N/A (aplikasi mandiri) |
| **Clean-core?** | Ya | Ya | Ya (terhubung via API) |
| **Dampak upgrade** | Nol (tak menyentuh inti) | Minimal (hanya API yang di-release) | Nol (terpisah dari inti) |

Detail jalur side-by-side BTP berada di luar lingkup artikel ini; yang perlu diingat, ketiganya saling melengkapi, bukan saling menggantikan.

## Apakah kustomisasi key-user aman terhadap upgrade?

Ya, selama Anda memakai alat dan mekanisme yang sudah di-*release* SAP. *In-app extensibility* memanfaatkan **release contract C0**, yaitu kontrak yang menjamin sebuah *CDS view* boleh diperpanjang key user secara aman. Karena perubahan ini tidak menyentuh kode inti SAP, *upgrade* sistem berjalan tanpa harus mengerjakan ulang kustomisasi Anda.

Kuncinya ada pada penamaan. SAP merekomendasikan memberi prefiks **ZZ** (atau *namespace* pelanggan) pada nama *custom field* agar tidak berbenturan dengan field standar SAP yang mungkin muncul di versi mendatang (SAP Community). Field yang dibuat dengan cara ini disebut "100% upgrade-stable". Inilah inti mengapa clean core dan kustomisasi sebenarnya tidak bertentangan: aturan main-nya yang menjaga keduanya tetap berdampingan.

Lalu bagaimana memindahkan perubahan dari sistem uji ke produksi? Mekanismenya bernama **Export/Import Software Collections**, dikelola lewat aplikasi Fiori. Dalam lanskap tiga-sistem, ekstensi dibuat di *development*, diekspor ke *test* untuk pengujian integrasi, lalu di-*release* ke produksi. Sistem otomatis memeriksa dependensi saat ekspor dan mencegah versi yang lebih baru "menyalip" versi lama, demi menjaga konsistensi produksi (SAP Community). Untuk mengaudit semuanya, aplikasi *Extensibility Inventory* mencatat siapa terakhir mengubah sebuah ekstensi dan memantau status transportnya.

## Kapan key-user extensibility TIDAK cukup, dan harus diserahkan ke developer

Bagian ini jarang ditulis, padahal di sinilah keputusan yang baik dibuat. Alat key-user punya batas desain: ia tidak cocok untuk logika bisnis kompleks yang butuh akses data luas di luar *CDS view* yang di-*release*, integrasi lintas sistem, atau pembuatan aplikasi Fiori penuh yang rumit. Untuk itu, jalurnya naik ke developer extensibility (ABAP Cloud/RAP) atau side-by-side di SAP BTP (SAP Learning).

Ambang praktisnya bisa Anda pakai sendiri: jika kebutuhan masih sebatas menambah field, menata tampilan, atau aturan validasi/kalkulasi, key user sanggup menanganinya. Begitu kebutuhan menyentuh proses yang melibatkan banyak objek data, panggilan ke sistem lain, atau antarmuka baru yang kompleks, itu sinyal untuk melibatkan tim developer. SAP sendiri merumuskannya singkat: "key-user extensibility untuk perluasan oleh satu ahli bisnis; developer extensibility untuk perluasan yang menuntut pengembangan ABAP profesional."

Risiko nyata jika batas ini diabaikan adalah lahirnya *shadow customization*, yakni tumpukan logika setengah jadi yang dipaksakan lewat alat tanpa-coding, sulit dilacak, dan akhirnya membebani justru di saat upgrade. Memaksakan kebutuhan besar ke alat kecil tidak menghemat waktu; ia menunda biaya. Karena jalur extensibility yang sah ini tersedia di S/4HANA Cloud, memahami batasnya sejak awal membantu perusahaan merencanakan kustomisasi pasca [migrasi ERP ke cloud](https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud) tanpa kembali mengotori inti.

Prinsip *fit-to-standard* menutup pembahasan ini: pakai proses standar SAP semaksimal mungkin, dan lakukan perluasan hanya ketika ada nilai bisnis yang jelas. Workshop *fit-to-standard* dalam metodologi SAP Activate justru bertujuan menyaring mana kebutuhan yang sah diperluas dan mana yang sebenarnya cukup diselesaikan dengan konfigurasi standar.

{IMAGE_03: Diagram dua zona keputusan, yaitu zona hijau "Bisa dikerjakan key user" (tambah field, atur UI Fiori, validasi/kalkulasi sederhana) dan zona kuning-merah "Perlu developer" (logika kompleks, integrasi lintas sistem, aplikasi baru), dengan panah eskalasi menuju developer extensibility / SAP BTP; teks Bahasa Indonesia, gaya korporat bersih}

## FAQ (Pertanyaan yang Sering Diajukan)

### Apa itu key-user (in-app) extensibility di SAP S/4HANA?
Key-user (in-app) extensibility adalah kemampuan pengguna bisnis menyesuaikan SAP S/4HANA langsung dari dalam sistem, yaitu menambah custom field, menata ulang layar Fiori, dan menambahkan logika sederhana, tanpa menulis kode. Semua alatnya berbasis aplikasi SAP Fiori dan tersedia di seluruh penerapan (Cloud Public, Private, maupun on-premise), sehingga konsisten dengan prinsip clean core dan aman saat upgrade.

### Apa bedanya in-app extensibility dan side-by-side extensibility?
In-app extensibility berjalan di dalam sistem S/4HANA: key user menambah field atau logika langsung lewat Fiori tanpa coding. Side-by-side extensibility membangun aplikasi terpisah di SAP BTP yang terhubung ke S/4HANA via API, cocok untuk skenario yang menuntut fleksibilitas penuh, integrasi multi-sistem, atau aplikasi kompleks. Keduanya clean-core-safe dan saling melengkapi.

### Bisakah pengguna bisnis membuat custom field tanpa bantuan IT?
Ya. SAP menyediakan aplikasi Custom Fields and Logic (CFL) di Fiori launchpad yang memungkinkan key user membuat custom field baru tanpa keahlian coding, lalu menyematkannya ke UI, laporan, dan template. Menurut SAP, cakupan custom field key-user bahkan lebih luas daripada developer extensibility yang terbatas pada aplikasi berbasis RAP. SAP merekomendasikan prefiks ZZ pada nama field agar aman terhadap upgrade.

### Apa itu aplikasi Custom Fields and Logic?
Custom Fields and Logic (CFL) adalah aplikasi Fiori untuk key-user extensibility dengan tiga fungsi: Custom Fields (membuat field baru), Data Source Extension (menambah field dari sumber data), dan Custom Logic (menambah aturan seperti validasi atau kalkulasi via editor ABAP web terbatas). Aplikasi ini dikonfirmasi aktif per Juni 2026; nama aplikasi SAP dapat berubah, jadi verifikasi ulang sebelum dipakai.

### Apakah custom field key-user aman saat SAP melakukan upgrade?
Ya, selama memakai alat dan mekanisme yang sudah di-release SAP. In-app extensibility menggunakan release contract C0 yang menjamin CDS view atau field kustom dapat diperpanjang aman tanpa putus saat upgrade. Karena perubahan key-user tidak menyentuh kode inti SAP, upgrade berjalan tanpa harus mengerjakan ulang kustomisasi. SAP merekomendasikan prefiks ZZ agar tidak berbenturan dengan field standar di versi mendatang.

### Apa itu BAdI, dan bisakah key user menggunakannya?
BAdI (Business Add-In) adalah titik perluasan logika yang disediakan SAP, semacam "kait" di dalam proses standar tempat logika kustom bisa disisipkan. Key user dapat mengimplementasikan BAdI yang sudah di-release lewat aplikasi Custom Logic di Fiori, memakai editor ABAP web terbatas yang hanya mengizinkan operasi aman seperti validasi, substitusi, dan kalkulasi. BAdI yang sama juga tersedia bagi developer ABAP Cloud untuk implementasi yang lebih kompleks.

### Kapan kustomisasi harus diserahkan ke developer?
Saat kebutuhan melampaui menambah field, menata tampilan, atau aturan validasi/kalkulasi sederhana. Logika yang butuh akses data luas di luar CDS view yang di-release, integrasi lintas sistem, atau aplikasi Fiori penuh yang kompleks memerlukan developer extensibility (ABAP Cloud/RAP) atau side-by-side di SAP BTP. Memaksakan kebutuhan besar ke alat key-user menghasilkan logika yang sulit dipelihara saat upgrade.

## Kesimpulan

Clean core bukan tembok yang mengunci pengguna bisnis dari sistemnya sendiri, melainkan seperangkat jalur resmi agar kustomisasi tidak lagi menjadi beban saat upgrade. Bagi sebagian besar kebutuhan harian seperti menambah field, merapikan layar Fiori, atau menyisipkan validasi, key user bisa bergerak sendiri lewat aplikasi yang sudah ada, sementara kebutuhan yang lebih berat punya jalurnya sendiri di developer extensibility atau SAP BTP. Yang menentukan keberhasilannya adalah tata kelola: siapa boleh mengubah apa, dan kapan harus naik jalur. Sebagai SAP Platinum Partner melalui keanggotaan United VARs dan bagian dari Metrodata Group sejak 1998, Soltius mendampingi perusahaan menyiapkan key user dan menata tata kelola extensibility saat implementasi S/4HANA.

Untuk mendiskusikan cara memberdayakan key user di perusahaan Anda tanpa mengorbankan prinsip clean core, kunjungi soltius.co.id.
