---
title: "Clean Core sebagai Strategi Keamanan SAP: Kurangi Attack Surface, Percepat Patch"
meta_title: "SAP Clean Core: Strategi Keamanan & Percepat Patch"
meta_description: "SAP Clean Core bukan sekadar soal upgrade, tapi strategi keamanan: perkecil attack surface, percepat patch SAP Security Notes, dan pahami risiko ekstensi BTP."
slug: "sap-clean-core-strategi-keamanan"
language: "id"
primary_keyword: "SAP Clean Core"
secondary_keywords:
  - "clean core keamanan SAP"
  - "attack surface SAP"
  - "SAP Security Notes"
  - "kode kustom Z-code"
  - "segregation of duties (SoD)"
  - "side-by-side extensibility SAP BTP"
  - "ABAP Cloud released API"
  - "RISE with SAP shared responsibility"
  - "ABAP Test Cockpit (ATC)"
  - "patch management SAP"
internal_links:
  - url: "https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide"
    anchor: "SAP Clean Core"
  - url: "https://www.soltius.co.id/id/blog/low-code-and-no-code-platforms"
    anchor: "platform low-code SAP Build"
  - url: "https://www.soltius.co.id/id/blog/sistem-manajemen-vendor"
    anchor: "sistem manajemen vendor"
external_citations:
  - url: "https://support.sap.com/en/my-support/knowledge-base/security-notes-news/september-2026.html"
    context: "Jadwal SAP Security Patch Day (umumnya Selasa kedua) dan volume/severitas security note bulan berjalan (September 2026)"
  - url: "https://onapsis.com/blog/sap-btp-extensibility-clean-core-devsecops/"
    context: "Attack surface berpindah ke runtime web internet-facing di SAP BTP; vektor XSS/SSRF/broken object-level authorization; jalur lateral via SAP Cloud Connector"
brief_id: "sap-clean-core-01"
target_word_count: 1650
publish_month: "2026-09"
date_modified: "2026-09-22"
word_count: 1897
---

# Clean Core sebagai Strategi Keamanan SAP: Kurangi Attack Surface, Percepat Patch

Bagi tim keamanan, ancaman terbesar di sistem SAP sering kali bukan penyerang dari luar, melainkan satu baris kode ABAP kustom di dalam inti yang diam-diam memberi hak berlebih. Diskusi soal [SAP Clean Core](https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide) selama ini berkutat pada biaya upgrade dan kesiapan cloud. Artikel ini membingkainya ulang dari kursi seorang CISO: clean core sebagai keputusan keamanan. Kita akan melihat bagaimana inti yang bersih memperkecil permukaan serangan dan mempercepat penerapan SAP Security Notes, lalu jujur soal di mana ia justru memindahkan risiko, bukan menghapusnya.

> **Ringkas:** Dari sudut keamanan, clean core adalah prinsip menjaga inti SAP S/4HANA tetap standar dan upgrade-safe sehingga permukaan serangan lebih kecil dan SAP Security Notes bisa diterapkan lebih cepat, dengan memindahkan kustomisasi ke SAP BTP dan hanya memakai released API alih-alih memodifikasi core secara langsung.

Pembahasan berikut bergerak dari definisi keamanan clean core, ke kode kustom sebagai liabilitas, ke kecepatan patch, lalu ke sisi yang paling jarang dibahas: attack surface yang berpindah, dan kapan clean core bukan jawaban Anda.

## Apa hubungan clean core dengan keamanan SAP?

Clean core mengurangi risiko keamanan dengan menjaga inti SAP S/4HANA tetap standar. Semakin sedikit modifikasi di dalam core, semakin kecil kode yang bisa menyimpan celah, dan semakin cepat SAP Security Notes diterapkan tanpa uji regresi berlarut. Kustomisasi dipindah ke SAP BTP lewat *released API*, bukan dijahit langsung ke inti.

Prinsipnya sederhana, konsekuensinya besar. Setiap modifikasi pada inti standar adalah kode yang harus Anda amankan, uji, dan pelihara sendiri, di luar payung pengujian standar SAP. Kode itu tidak pernah gratis: ia menambah baris yang berpotensi rentan sekaligus memperlambat setiap perubahan berikutnya.

Kunci teknis clean core adalah *ABAP Cloud* dan *released API*. ABAP Cloud hanya mengizinkan pengembang memakai objek yang sudah SAP rilis secara resmi, yaitu objek dengan kontrak stabilitas dan jaminan kompatibilitas lintas upgrade (SAP Community, ABAP Cloud FAQ). Artinya ekstensi Anda tidak lagi mengintip tabel internal atau memodifikasi objek yang bisa berubah diam-diam, sebuah sumber klasik kerentanan dan kerusakan pasca-upgrade.

SAP sendiri mengklasifikasikan tingkat kebersihan ekstensi ke dalam *Clean Core Extensibility Levels* A sampai D, dengan whitepaper yang diperbarui Agustus 2025. Level A adalah yang paling bersih: ekstensi on-stack ABAP Cloud atau side-by-side di SAP BTP. Level B hingga D adalah pengembangan ABAP klasik yang makin jauh dari inti standar dan biasanya perlu remediasi bertahap. Bagi tim keamanan, level ini bukan sekadar label arsitektur, melainkan peta seberapa besar utang teknis yang juga menjadi utang keamanan.

## Kode kustom sebagai liabilitas keamanan: dari SAP_ALL hingga SoD

Kode ABAP kustom adalah sumber kerentanan tak-terdeteksi terbesar di banyak lanskap SAP. Cacat umum mencakup *authority-check* yang hilang, SQL injection, *directory traversal*, hingga *hardcoded credentials*. Program Z yang rentan bahkan berpotensi menimpa *authorization buffer* dan memberi hak setara SAP_ALL secara tersembunyi, sehingga melewati kontrol otorisasi standar dan merusak *segregation of duties*.

Mekanismenya perlu dipahami tanpa dilebih-lebihkan. Kode ABAP tanpa authority-check yang tertanam bisa dieksekusi oleh user mana pun (SAP Community). Dalam skenario yang lebih buruk, program Z jahat dapat memberikan SAP_ALL tanpa terekam di *user maintenance*, dan pintu belakang di area sementara `$TMP` tidak masuk kendali versi sehingga sulit ditelusuri (Pathlock). Ini skenario yang *mungkin*, bukan yang otomatis terjadi di setiap kustomisasi, tetapi cukup nyata untuk diperlakukan sebagai risiko standar.

Cacat yang paling sering ditemui pada custom code lama:

- **Missing authority-check:** transaksi atau fungsi yang seharusnya dibatasi bisa dijalankan siapa saja.
- **SQL injection ABAP:** input yang tidak divalidasi dijahit ke query dinamis.
- **Authorization-buffer overwrite:** program menimpa buffer otorisasi sesi dan menaikkan hak diam-diam.
- **Hardcoded credentials:** kata sandi atau kunci teknis tertanam di kode, terbawa lintas sistem.
- **Backdoor di `$TMP`:** objek yang tidak masuk transport dan version control.

Di sinilah *segregation of duties* (SoD, pemisahan tugas) ikut terancam. SoD adalah prinsip memastikan tidak satu orang mengendalikan satu transaksi dari ujung ke ujung, misalnya orang yang membuat data vendor tidak boleh sekaligus menyetujui pembayarannya. Kode kustom yang melewati authority-check dapat merusak pemisahan itu dengan memberi jalan pintas ke hak yang mestinya terpisah. Vektor identitas ini melebar saat Anda melibatkan pihak ketiga: akses tenaga kerja kontingen dan pemasok yang dikelola lewat [sistem manajemen vendor](https://www.soltius.co.id/id/blog/sistem-manajemen-vendor) seperti SAP Fieldglass dan SAP Ariba menambah kombinasi role yang harus tetap patuh pada SoD. Utang teknis, pada akhirnya, adalah utang keamanan.

## Mengapa core yang bersih mempercepat penerapan SAP Security Notes?

Core yang bersih mempercepat patch karena setiap SAP Security Note tidak perlu diuji ulang terhadap tumpukan kustomisasi. SAP merilis patch terjadwal pada SAP Security Patch Day, umumnya Selasa kedua tiap bulan; pada 8 September 2026 terbit 19 security note baru dan 14 pembaruan note lama. Core standar mengikuti jalur uji SAP sehingga jendela kerentanan memendek.

Volume itu bukan konstanta, dan justru itulah alasan kecepatan patch penting. Patch Day September 2026 mencatat 33 note total dengan empat berkategori kritis, termasuk satu bernilai CVSS 10.0 (SAP Support, September 2026). Bulan lain bisa lebih sedikit atau lebih banyak; yang pasti, angkanya cukup besar sehingga menunda satu siklus saja berarti membiarkan kerentanan terbuka lebih lama.

Masalahnya, core yang penuh modifikasi memaksa setiap note melewati antrean pengujian. Tim Basis harus memastikan patch tidak memecahkan kustomisasi yang bergantung pada objek yang di-patch. Semakin banyak Z-code, semakin panjang uji regresi, dan semakin lama patch tertunda. Core yang bersih memangkas antrean itu karena kustomisasi hidup terpisah dari inti yang di-patch.

| Aspek | Core kotor (banyak modifikasi) | Core bersih (standar + ekstensi decoupled) |
|---|---|---|
| Uji regresi tiap Security Note | Wajib diuji ulang terhadap semua kustomisasi | Minimal; core standar mengikuti jalur uji SAP |
| Kecepatan penerapan patch | Lambat; patch tertunda antre pengujian | Cepat; jendela kerentanan lebih pendek |
| Risiko efek samping upgrade | Tinggi; modifikasi bisa pecah | Rendah; ekstensi upgrade-safe |
| Biaya per Patch Day (bulanan) | Naik seiring jumlah objek kustom | Relatif tetap dan dapat diprediksi |

Untuk memastikan kustomisasi yang tersisa tetap layak, SAP menyediakan *ABAP Test Cockpit* (ATC) dengan check variant `ABAP_CLEAN_CORE_READINESS`, dilengkapi *Code Vulnerability Analyzer* (CVA) tanpa biaya lisensi terpisah di BTP. Satu catatan penting: check clean core ini membutuhkan S/4HANA 2023 ke atas, jadi jangan mengasumsikannya tersedia di ECC atau rilis S/4HANA lama.

## Attack surface berpindah, bukan hilang: keamanan side-by-side di SAP BTP

*Side-by-side extensibility* tidak menghapus attack surface, ia memindahkannya. Logika kustom berpindah dari server ABAP on-premise yang terisolasi ke runtime web SAP BTP yang *internet-facing*, memunculkan vektor cloud-native seperti XSS, SSRF, dan *broken object-level authorization*. Karena ekstensi tersambung balik lewat SAP Cloud Connector, satu celah bisa menjadi jalur lateral ke ERP produksi.

Inilah bagian yang jarang ditulis vendor: memindahkan kustomisasi ke luar core adalah kabar baik untuk inti, tetapi ekstensi BTP kini menghadap internet dengan permukaan yang berbeda. Menurut Onapsis, celah aplikasi cloud yang tidak ditangani bisa memberi penyerang jalan bergerak lateral ke lingkungan ERP produksi lewat SAP Cloud Connector. Attack surface, dengan kata lain, tidak menyusut secara total; ia pecah menjadi dua front dengan karakter risiko berbeda.

| Lokasi risiko | Threat vector khas | Kontrol yang relevan |
|---|---|---|
| Core ABAP (Z-code on-stack) | Missing authority-check, SQL injection, authorization-buffer overwrite, backdoor `$TMP` | ATC + CVA (`ABAP_CLEAN_CORE_READINESS`), released API only, review otorisasi |
| Ekstensi side-by-side (SAP BTP) | XSS, SSRF, broken object-level authorization, endpoint API tak aman | DevSecOps, secure coding, autentikasi API kuat, hardening SAP Cloud Connector |
| Jembatan core ↔ BTP | Lateral movement via SAP Cloud Connector | Least-privilege pada koneksi, segmentasi, monitoring |

Konsekuensi praktisnya: ekstensi side-by-side, yang umumnya dibangun di atas [platform low-code SAP Build](https://www.soltius.co.id/id/blog/low-code-and-no-code-platforms) di BTP, menuntut disiplin DevSecOps yang tidak dikenal tim ABAP klasik. Pemindaian dependensi, autentikasi endpoint yang kuat, dan tata kelola siapa boleh menerbitkan aplikasi menjadi kontrol wajib, bukan opsional. Clean core memindahkan pekerjaan keamanan, bukan menghapusnya.

Dalam proyek remediasi kustomisasi yang ditangani Soltius sebagai SAP Platinum Partner via United VARs, pola yang paling sering ditemui adalah Z-code lama dengan hak otorisasi berlebih yang tidak pernah ditinjau ulang, persis jenis liabilitas yang seharusnya dipangkas sebelum, bukan sesudah, migrasi ke cloud.

## Kapan clean core BUKAN jawaban keamanan Anda

Clean core adalah fondasi keamanan, bukan penggantinya. Ia mengurangi permukaan serangan di inti, tetapi ekstensi BTP yang ceroboh bisa lebih berbahaya daripada Z-code terisolasi karena terpapar internet. Keamanan SAP tetap menuntut kontrol akses, patch disiplin, segregation of duties, dan monitoring; di RISE with SAP, lapisan aplikasi tetap tanggung jawab Anda.

Kesalahpahaman yang paling mahal muncul di sini: anggapan bahwa pindah ke RISE with SAP berarti SAP mengambil alih keamanan. Faktanya, model itu berbagi tanggung jawab, dan bagian pelanggan tetap besar.

| Domain | SAP | Pelanggan |
|---|---|---|
| Data center, hardware, jaringan, hypervisor | ✅ | |
| Baseline security platform | ✅ | (validasi tetap perlu) |
| Keamanan aplikasi SAP, data, dan konfigurasi | | ✅ |
| Role, akses user, custom code | | ✅ |
| Menilai/meminta/memvalidasi Security Note aplikasi | | ✅ |
| Kepatuhan (SOX, GDPR, dsb.) | | ✅ |

SAP mengamankan lapisan infrastruktur, tetapi pelanggan tetap 100% bertanggung jawab atas keamanan aplikasi dan data, termasuk menilai, meminta, dan memvalidasi Security Note level aplikasi sendiri (SecurityBridge; Onapsis). Core yang bersih membuat kewajiban ini jauh lebih ringan dieksekusi, tetapi tidak memindahkannya ke SAP.

Karena itu, perlakukan clean core sebagai fondasi, bukan program keamanan utuh. Ada empat hal yang tetap Anda butuhkan, apa pun tingkat kebersihan core Anda:

1. **Kontrol akses berbasis peran (RBAC) dan least-privilege:** clean core tidak menata ulang siapa boleh apa.
2. **Disiplin patch bulanan:** jendela yang lebih pendek hanya berguna jika patch benar-benar diterapkan.
3. **Pemeliharaan SoD:** pemisahan tugas perlu ditinjau ulang setiap kali role atau ekstensi berubah.
4. **Monitoring dan deteksi ancaman:** visibilitas atas aktivitas mencurigakan di core maupun ekstensi BTP.

Jika organisasi Anda masih rapuh di empat area itu, memoles kebersihan core lebih dulu bisa jadi salah prioritas. Bereskan fondasi kontrol akses dan patch discipline dulu, baru clean core memberi hasil keamanan yang maksimal.

## FAQ (Pertanyaan yang Sering Diajukan)

### Apakah clean core membuat sistem SAP lebih aman?
Ya, tetapi tidak otomatis kebal. Dengan menjaga inti S/4HANA tetap standar dan memindahkan kustomisasi ke SAP BTP, clean core memperkecil permukaan serangan di dalam core dan mempercepat penerapan SAP Security Notes. Namun ekstensi BTP yang ceroboh justru bisa membuka vektor baru. Clean core adalah fondasi keamanan, bukan pengganti RBAC, patch disiplin, dan monitoring.

### Bagaimana kode kustom bisa menjadi celah keamanan?
Kode ABAP kustom adalah sumber kerentanan tak-terdeteksi terbesar di banyak lanskap SAP. Cacat umum mencakup authority-check yang hilang, SQL injection, directory traversal, dan hardcoded credentials. Kode tanpa authority-check bisa dieksekusi user mana pun, dan program Z yang rentan bahkan berpotensi menimpa authorization buffer sehingga memberi hak setara SAP_ALL secara tersembunyi.

### Berapa sering SAP merilis security patch?
SAP merilis security note terjadwal pada SAP Security Patch Day, umumnya Selasa kedua setiap bulan. Volumenya berfluktuasi: pada Patch Day September 2026 (8 September) SAP menerbitkan 19 security note baru plus 14 pembaruan, dengan empat berkategori kritis termasuk satu bernilai CVSS 10.0. Core yang bersih membuat setiap patch bulanan ini bisa diterapkan lebih cepat.

### Apakah ekstensi di SAP BTP lebih aman daripada modifikasi core langsung?
Lebih aman untuk core, tetapi bukan tanpa risiko. Side-by-side extensibility tidak menghapus attack surface, ia memindahkannya ke runtime web BTP yang internet-facing, memunculkan vektor cloud-native seperti XSS, SSRF, dan broken object-level authorization. Karena ekstensi tersambung balik ke core lewat SAP Cloud Connector, satu celah bisa menjadi jalur lateral ke ERP produksi. Karena itu ekstensi BTP menuntut praktik DevSecOps.

### Apa itu segregation of duties (SoD) dan kaitannya dengan clean core?
Segregation of duties (SoD) adalah prinsip memisahkan tugas sensitif agar tidak satu orang mengendalikan seluruh transaksi, misalnya orang yang membuat vendor tidak boleh sekaligus menyetujui pembayaran. Kaitannya: kode kustom yang melewati authority-check dapat merusak SoD dengan diam-diam memberi hak berlebih. Menjaga core tetap standar dan mengaudit kustomisasi lewat ATC membantu mempertahankan kontrol SoD yang efektif.

### Siapa yang bertanggung jawab atas keamanan di RISE with SAP?
RISE with SAP memakai shared responsibility model. SAP mengamankan lapisan infrastruktur: data center, hardware, jaringan, hypervisor, dan baseline platform. Pelanggan tetap 100% bertanggung jawab atas keamanan lapisan aplikasi dan data, termasuk role dan akses user, custom code, konfigurasi aplikasi, serta menilai, meminta, dan memvalidasi Security Note level aplikasi. Kepatuhan seperti SOX dan GDPR juga tetap tanggung jawab pelanggan.

## Kesimpulan

Membingkai clean core sebagai keputusan keamanan mengubah cara Anda memprioritaskannya. Bukan lagi sekadar prasyarat teknis menuju cloud, tetapi cara terukur memperkecil attack surface di inti, memperpendek jendela kerentanan setiap Patch Day, dan menjaga segregation of duties tetap utuh, sambil sadar bahwa ekstensi BTP memindahkan sebagian risiko ke front baru yang butuh disiplin DevSecOps. Sebagai SAP Platinum Partner melalui United VARs dan bagian dari Metrodata Group sejak 1998, Soltius mendampingi perusahaan menerapkan clean core, dari remediasi Z-code berisiko otorisasi hingga memindahkan kustomisasi ke SAP BTP, agar sistem lebih mudah dipatch dan diaudit, bukan menjual produk keamanan.

Untuk mendiskusikan kesiapan clean core dan postur keamanan SAP di perusahaan Anda, kunjungi soltius.co.id.
