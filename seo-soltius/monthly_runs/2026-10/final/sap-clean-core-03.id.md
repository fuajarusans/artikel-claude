---
title: "Membaca Laporan SAP Readiness Check: Menemukan Sinyal Clean Core Sebelum Proyek Dimulai"
meta_title: "SAP Clean Core: Baca Readiness Check Sebelum Konversi"
meta_description: "Cara membaca SAP Readiness Check sebagai sinyal SAP Clean Core sebelum konversi S/4HANA: simplification items, custom code, sizing, dan tindakannya."
slug: "sap-clean-core-baca-laporan-readiness-check"
language: "id"
primary_keyword: "SAP Clean Core"
secondary_keywords:
  - "SAP Readiness Check"
  - "simplification items"
  - "custom code analysis"
  - "konversi S/4HANA"
  - "ABAP Test Cockpit (ATC)"
  - "SAP Custom Code Migration app"
  - "Clean Core Levels A-D"
  - "utang teknis / technical debt"
  - "sizing dan konsumsi data"
  - "readiness assessment"
internal_links:
  - url: "https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide"
    anchor: "SAP Clean Core"
  - url: "https://www.soltius.co.id/id/blog/low-code-and-no-code-platforms"
    anchor: "platform low-code SAP Build"
  - url: "https://www.soltius.co.id/id/blog/business-intelligence"
    anchor: "business intelligence"
external_citations:
  - url: "https://news.sap.com/2025/08/extend-sap-s4hana-cloud-right-way-clean-clear/"
    context: "Definisi resmi Clean Core Levels A-D dan evolusinya dari three-tier extensibility model (SAP News, 12 Agustus 2025)"
  - url: "https://blogs.sap.com/2020/05/22/sap-readiness-check-2.0-insights-and-flavors/"
    context: "Area analisis SAP Readiness Check: simplification items, custom code, sizing, Fiori, add-on/business function, integrasi"
brief_id: "sap-clean-core-03"
target_word_count: 1650
publish_month: "2026-10"
word_count: 2091
---

# Membaca Laporan SAP Readiness Check: Menemukan Sinyal Clean Core Sebelum Proyek Dimulai

Keputusan mengonversi sistem ke SAP S/4HANA kerap diambil berdasarkan firasat. Satu pihak yakin "inti sistem kita sudah telanjur kotor oleh kustomisasi"; pihak lain menepuk dada, "ah, modifikasi kita tidak seberapa." Padahal SAP menyediakan satu laporan gratis yang menjawab perdebatan itu dengan data, bukan asumsi: SAP Readiness Check. Persoalannya, laporan ini padat dan sering diserahkan mentah-mentah ke tim teknis tanpa ada yang menerjemahkannya menjadi keputusan [SAP Clean Core](https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide). Artikel ini menunjukkan cara membaca laporan tersebut, bagian mana yang paling mengungkap kondisi "kebersihan" core Anda, dan tindakan apa yang mengikuti tiap temuan, sebelum satu rupiah pun dianggarkan.

> **Ringkas:** SAP Readiness Check adalah laporan analisis gratis dari SAP yang menilai kesiapan sebuah sistem untuk dikonversi atau di-*upgrade* ke SAP S/4HANA. Ia memeriksa *simplification items*, volume *custom code*, estimasi *sizing*, dan kompatibilitas integrasi, lalu menyajikannya sebagai *dashboard*. Inilah sinyal *clean core* paling awal yang bisa dibaca sebelum proyek konversi dimulai.

Dalam panduan ini kita mulai dari apa yang sebenarnya dianalisis laporan itu, lalu masuk ke empat bagian yang paling menentukan, sebuah tabel "temuan jadi tindakan", tiga langkah lanjutan, dan yang jarang dibahas: di mana laporan ini berhenti berguna.

## Apa itu SAP Readiness Check dan mengapa ia pintu masuk clean core?

SAP Readiness Check menganalisis sistem sumber Anda (umumnya SAP ECC) terhadap target S/4HANA, lalu menyajikan temuannya sebagai *dashboard* berisi kartu per area analisis. Karena ia dijalankan di sistem yang sedang berjalan, sebelum proyek, laporan ini menjadi bukti objektif pertama soal seberapa jauh sistem Anda menyimpang dari standar, yakni inti pertanyaan *clean core*.

Istilah *clean core* sendiri merujuk pada prinsip menjaga inti S/4HANA tetap standar dan mudah di-*upgrade*, dengan menempatkan kustomisasi di luar inti alih-alih memodifikasinya. Readiness Check tidak mengukur "kebersihan" itu dengan satu skor tunggal, tetapi memperlihatkan jejaknya: berapa banyak fungsi standar yang berubah di S/4HANA dan menyentuh proses Anda, seberapa tebal kode kustom yang terdampak, dan seberapa besar beban data yang harus dibawa.

Laporan ini gratis bagi setiap pelanggan dengan perjanjian *maintenance* SAP yang aktif, diakses lewat portal SAP for Me di `me.sap.com/readinesscheck` melalui jalur Service & Support. Ia mendukung dua skenario sekaligus, yakni konversi sistem (ECC ke S/4HANA) dan *upgrade* antarversi S/4HANA. Area yang diperiksanya mencakup relevansi *simplification items*, *custom code analysis*, *sizing* S/4HANA, rekomendasi aplikasi Fiori, kompatibilitas *add-on* dan *business function* aktif, serta pengecekan apakah integrasi seperti IDoc dan BW *extractor* masih berfungsi (blogs.sap.com, SAP Readiness Check 2.0).

Mengapa ini mendesak sekarang? *Mainstream maintenance* untuk SAP ECC berakhir pada 31 Desember 2027, dengan opsi *extended maintenance* berbayar (premi sekitar 2 poin persen) hingga 2030, sementara SAP berkomitmen menopang inovasi S/4HANA hingga 2040 (strategi *maintenance* SAP). Semakin dekat tenggat, semakin mahal menunda diagnosis. Menjalankan Readiness Check lebih dulu memberi Anda peta medan sebelum menandatangani anggaran proyek.

## Empat bagian laporan yang paling menunjukkan kondisi clean core

Dari sekian banyak area yang dianalisis, empat bagian inilah yang paling langsung bercerita tentang kebersihan core Anda. Membacanya berurutan membantu Anda membedakan antara sistem yang hanya perlu penyesuaian ringan dan sistem yang menyimpan utang teknis besar. Berikut keempatnya beserta arti praktisnya.

1. **Simplification items yang relevan.** *Simplification items* adalah katalog perbedaan fungsional antara SAP ECC dan S/4HANA, yaitu fungsi yang dihapus, digabung, atau diubah. Daftar penuhnya mencapai hampir seribu item (bergantung versi target), tetapi yang ditampilkan hanya yang benar-benar menyentuh sistem Anda. Makin banyak item yang mengenai area yang Anda kustomisasi, makin besar kemungkinan core Anda "kotor".
2. **Custom code analysis.** Bagian ini menampilkan volume kode kustom dan bagian mana yang terdampak *simplification items*. Angka ini adalah indikator kasar utang teknis: jumlah objek yang terdampak kira-kira setara dengan beban remediasi yang menanti di depan.
3. **Sizing dan konsumsi data.** Laporan memberi estimasi kebutuhan memori dan *disk* sebelum maupun sesudah pembersihan, termasuk potensi *archiving*. Data yang membengkak bukan hanya soal biaya *hardware*; ia sinyal bahwa Anda perlu strategi data sebelum pindah, bukan sesudahnya.
4. **Add-on, business function, dan integrasi.** Di sini Anda melihat apakah *add-on* dan *business function* aktif kompatibel dengan S/4HANA, serta apakah jalur integrasi seperti IDoc dan BW *extractor* tetap jalan. Satu *add-on* usang atau satu antarmuka yang putus bisa menjadi titik gesek yang menahan kelancaran *upgrade*.

Satu catatan penting agar tidak salah baca: nama kartu dan label di *dashboard* dapat berbeda antarversi, jadi fokuslah pada kategori analisisnya, bukan pada penamaan antarmuka yang persis. Yang Anda cari adalah pola, misalnya banyak kode kustom bertumpuk di area yang justru paling banyak disentuh *simplification items*.

## Apa arti tiap temuan dan tindakan apa yang harus diambil?

Membaca angka tanpa menerjemahkannya menjadi keputusan hanya menghasilkan laporan yang menakutkan, bukan rencana. Kunci membaca Readiness Check untuk *clean core* adalah memetakan setiap temuan ke satu dari tiga arah: remediasi, pembersihan, atau jalur *fit-to-standard*. Tabel berikut merangkum pola yang paling sering muncul di lapangan.

| Temuan di laporan | Artinya untuk clean core | Tindakan berikutnya |
|---|---|---|
| Banyak *custom object* tersentuh *simplification items* | Utang teknis tinggi; risiko regresi saat konversi | Jalankan ATC + Custom Code Migration app; petakan Keep/Rebuild/Retire |
| Volume *custom code* besar tapi sedikit terdampak | Banyak kode kemungkinan usang atau tak terpakai | Analisis pemakaian; pensiunkan kode mati sebelum konversi |
| *Custom code* rendah dan terdampak minim | Kandidat kuat *fit-to-standard* | Prioritaskan standar; pertimbangkan jalur konversi ringan |
| Ekstensi memakai objek internal atau modifikasi inti | Setara Clean Core Level C–D (risiko tinggi) | Bangun ulang sebagai ekstensi Level A/B di luar inti |
| *Sizing* dan data sangat besar | Beban HANA dan *downtime* migrasi naik | Rencanakan *archiving* dan strategi data lebih dulu |
| *Add-on* atau *business function* tak kompatibel | Titik gesek konversi | Cek peta jalan vendor *add-on*; siapkan pengganti |

Untuk menilai temuan kode kustom secara lebih tajam, SAP memakai kerangka Clean Core Levels A–D yang ditegaskan pada Agustus 2025 sebagai penyempurnaan dari *three-tier extensibility model* sebelumnya (SAP News, 12 Agustus 2025). Kerangka ini bukan keluaran langsung Readiness Check, melainkan lensa untuk menimbang: makin dekat ekstensi Anda ke Level D, makin berat utangnya.

| Level | Interface yang dipakai | Status |
|---|---|---|
| A | Hanya *released* & *stable API* (*stability contract*); ABAP Cloud / *side-by-side* BTP | *Fully compliant*, preferred |
| B | Kriteria A + *classic API* SAP yang terdokumentasi dan umumnya *upgrade-stable* | *Compliant*, recommended |
| C | Akses objek internal SAP untuk skenario legacy | *Partially compliant*, risiko *upgrade* naik |
| D | Modifikasi, *direct write*, atau *implicit enhancement* | *Not recommended*, utang teknis terbesar |

Cara memakainya sederhana: temuan Readiness Check memberi tahu Anda *berapa banyak* dan *di mana*, sedangkan Level A–D membantu memutuskan ke arah mana setiap ekstensi sebaiknya dipindahkan saat remediasi.

## Dari laporan ke rencana: tiga langkah setelah Readiness Check

Readiness Check adalah titik awal, bukan garis akhir. Begitu laporan terbaca, ubah temuannya menjadi tiga langkah konkret: perdalam analisis kode, petakan nasib tiap objek, lalu pilih pendekatan konversi berdasarkan bukti. Urutan ini menjaga agar keputusan besar tidak diambil dari ringkasan tingkat tinggi semata.

Pertama, perdalam dengan alat yang presisi. *Custom code analysis* di Readiness Check bersifat gambaran; untuk temuan per objek yang akurat, gunakan ABAP Test Cockpit (ATC) yang melakukan analisis jauh lebih mendalam, lalu sajikan hasilnya lewat SAP Custom Code Migration app. Aplikasi Fiori ini menampilkan temuan ATC dengan navigasi yang rapi dan menandai kode yang bisa diperbaiki semi-otomatis lewat *Quick Fix* di ABAP Development Tools (ADT). Ketika ATC dijadikan sumber data, Readiness Check bahkan dapat menampilkan temuannya, sehingga dukungan *Quick Fix* yang terlihat menjadi aktual, bukan sekadar estimasi.

Kedua, petakan setiap objek ke salah satu dari tiga nasib: *Keep* (pertahankan karena masih relevan dan bersih), *Rebuild* (bangun ulang di luar inti), atau *Retire* (pensiunkan). Kandidat *Rebuild* inilah yang biasanya dipindahkan menjadi ekstensi Level A/B di luar core, misalnya lewat [platform low-code SAP Build](https://www.soltius.co.id/id/blog/low-code-and-no-code-platforms) di atas SAP BTP, sehingga inti tetap standar. Detail eksekusi remediasi ini topik tersendiri; di sini cukup Anda tahu arahnya.

Ketiga, pilih pendekatan dari bukti, bukan selera. Kombinasi kode kustom rendah dan dampak minim condong ke *fit-to-standard* atau bahkan *greenfield*; sebaliknya, basis kustom tebal yang masih bernilai bisnis sering lebih masuk akal lewat *brownfield*. Temuan *sizing* yang besar juga layak dibaca sebagai peluang: menata ulang data lebih awal akan menopang strategi [business intelligence](https://www.soltius.co.id/id/blog/business-intelligence) di atas S/4HANA, bukan sekadar mengurangi beban migrasi.

## Kapan SAP Readiness Check BELUM cukup, dan jangan dibaca berlebihan

Bagian ini jarang ditulis kompetitor, padahal di sinilah kejujuran membangun kepercayaan. Readiness Check menilai dimensi teknis, bukan kesiapan menyeluruh. Angka yang terlihat "hijau" pada *dashboard* bukan jaminan bahwa core Anda bersih atau organisasi Anda siap. Membacanya terlalu optimistis justru salah satu kesalahan termahal menjelang proyek konversi.

Beberapa batas yang perlu Anda sadari:

- **Analisis kode kustomnya bersifat tingkat tinggi.** Ia menunjukkan volume dan area terdampak, bukan temuan baris per baris. Presisinya datang dari ATC; menyimpulkan "core kita bersih" hanya dari ringkasan Readiness Check adalah lompatan yang berisiko.
- **Ia tidak mengukur kualitas proses atau budaya.** Utang proses bisnis, dokumentasi yang buruk, dan resistensi pengguna tidak muncul di laporan ini. Untuk sisi proses, SAP menyediakan pratinjau lewat SAP Signavio Process Insights, tetapi ketersediaannya bergantung lisensi dan sebagian edisi datanya kedaluwarsa setelah 6 bulan.
- **Satu laporan bukan vonis brownfield vs greenfield.** Ia masukan kuat, bukan keputusan akhir. Faktor kecocokan proses dan tujuan transformasi tetap menuntut penilaian manusia.

Di lapangan, pola yang sering kami temui saat menjalankan *readiness assessment* bersama klien S/4HANA adalah laporan dibaca sebagai kabar baik tanpa pernah divalidasi dengan ATC. Membaca laporan secara jujur, termasuk mengakui apa yang tidak diukurnya, justru langkah pertama menuju core yang benar-benar bersih.

## FAQ (Pertanyaan yang Sering Diajukan)

### Apa itu SAP Readiness Check?

SAP Readiness Check adalah laporan analisis dari SAP yang menilai kesiapan sebuah sistem, umumnya SAP ECC, untuk dikonversi atau di-*upgrade* ke SAP S/4HANA. Ia memeriksa *simplification items* yang relevan, volume dan dampak *custom code*, estimasi *sizing*, kompatibilitas *add-on*, serta integrasi, lalu menyajikannya sebagai *dashboard*. Inilah sinyal paling awal untuk menilai seberapa bersih core Anda sebelum proyek dimulai.

### Apakah SAP Readiness Check gratis?

Ya. Readiness Check gratis bagi pelanggan dengan perjanjian *maintenance* SAP yang aktif dan memerlukan akun S-user. Laporan diakses melalui portal SAP for Me di `me.sap.com/readinesscheck` lewat jalur Service & Support. Karena gratis dan dijalankan pada sistem sumber, ia ideal sebagai langkah diagnostik sebelum anggaran proyek konversi disetujui.

### Apa saja yang dianalisis SAP Readiness Check?

Readiness Check menganalisis *simplification items* yang relevan untuk *source/target release*, volume dan bagian *custom code* yang terdampak, *sizing* S/4HANA (estimasi memori dan *disk* sebelum/sesudah pembersihan plus potensi *archiving*), rekomendasi aplikasi SAP Fiori, kompatibilitas *add-on* dan *business function* aktif, apakah integrasi seperti IDoc dan BW *extractor* tetap berfungsi, serta pratinjau perbaikan proses.

### Apa bedanya SAP Readiness Check dengan ABAP Test Cockpit (ATC)?

Keduanya saling melengkapi. *Custom code analysis* di Readiness Check bersifat gambaran tingkat tinggi: ia menunjukkan volume dan bagian kode yang terdampak *simplification*. ABAP Test Cockpit (ATC) melakukan analisis jauh lebih mendalam dan menghasilkan temuan presisi per objek. SAP Custom Code Migration app menyajikan hasil ATC dengan *Quick Fix* semi-otomatis di ADT. Readiness Check bahkan bisa menampilkan temuan ATC bila ATC dijadikan sumber datanya.

### Apa itu simplification items?

*Simplification items* adalah katalog perbedaan fungsional antara SAP ECC dan S/4HANA, yakni fungsi yang dihapus, digabung, atau diubah SAP. Setiap item memiliki *Business Impact Note* yang menjelaskan dampaknya pada proses dan *custom code*, lengkap dengan informasi *source/target release*. Daftar penuhnya mencapai hampir seribu item (bergantung versi target), tetapi hanya sebagian yang relevan untuk sistem Anda.

### Berapa lama menjalankan SAP Readiness Check?

Inti prosesnya adalah program pengumpulan data yang berjalan sebagai *background job* di sistem sumber; hasilnya diunggah dan muncul di *dashboard* SAP for Me. Durasinya bergantung pada ukuran sistem, volume *custom code*, dan beban server, sehingga tidak ada angka pasti yang berlaku untuk semua. Perlakukan setiap estimasi durasi sebagai acuan praktis, bukan patokan resmi, dan sepakati jendela eksekusi bersama tim BASIS.

### Apakah hasil Readiness Check cukup untuk memutuskan brownfield vs greenfield?

Readiness Check adalah masukan penting, tetapi belum cukup sendirian. Ia memberi bukti kuat soal volume *custom code*, dampak *simplification*, dan ukuran data, yakni faktor yang mencondongkan ke *brownfield* atau *greenfield*. Namun keputusan juga menuntut penilaian kecocokan proses bisnis (*fit-to-standard*), utang proses, dan tujuan transformasi. Gunakan laporan sebagai titik awal, bukan vonis akhir.

## Kesimpulan

Membaca SAP Readiness Check dengan benar mengubah pertanyaan "apakah core kita bersih?" dari adu firasat menjadi keputusan berbasis bukti: berapa banyak *simplification items* yang menyentuh kustomisasi Anda, seberapa tebal kode yang terdampak, dan seberapa besar beban data yang harus ditata lebih dulu. Laporan itu memberi peta; menerjemahkannya menjadi *roadmap clean core* yang realistislah pekerjaan yang menentukan. Sebagai SAP Platinum Partner melalui United VARs, Soltius menjalankan *readiness assessment* dan menerjemahkan laporan SAP Readiness Check menjadi rencana konversi yang memperhitungkan risiko dan utang teknis sebelum proyek dimulai.

Untuk mendiskusikan pembacaan laporan Readiness Check dan kesiapan *clean core* di perusahaan Anda, kunjungi soltius.co.id.
