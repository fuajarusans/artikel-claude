---
title: "Add-on Pihak Ketiga & Clean Core SAP: Memilih yang Tak Mengotori Core"
meta_title: "SAP Clean Core: Memilih Add-on yang Tak Mengotori Core"
meta_description: "Panduan memilih add-on pihak ketiga yang clean-core-safe untuk SAP Clean Core: cek sertifikasi SAP ICC, Level A–D, SAP Store, dan kerangka build vs buy."
slug: "add-on-pihak-ketiga-clean-core-sap"
language: "id"
primary_keyword: "SAP Clean Core"
secondary_keywords:
  - "add-on SAP pihak ketiga"
  - "solusi ISV SAP"
  - "SAP Store"
  - "sertifikasi SAP ICC"
  - "Level A B C D ekstensibilitas"
  - "ABAP Cloud add-on"
  - "on-stack vs side-by-side"
  - "build vs buy SAP"
  - "SAP Business Accelerator Hub"
internal_links:
  - url: "https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide"
    anchor: "SAP Clean Core"
  - url: "https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud"
    anchor: "migrasi ERP ke cloud"
  - url: "https://www.soltius.co.id/id/blog/business-intelligence"
    anchor: "Business Intelligence"
external_citations:
  - url: "https://news.sap.com/2025/08/extend-sap-s4hana-cloud-right-way-clean-clear/"
    context: "Prinsip clean core, on-stack vs side-by-side, ABAP Cloud/released API, upgrade-safety (SAP News, Agustus 2025)"
  - url: "https://news.sap.com/2026/01/updates-sap-integration-certification-program-partner-built-solutions/"
    context: "SAP ICC mengelola sertifikasi partner; jalur Integration Certification + Interoperability Review; peluncuran Q3 2026 (SAP News, Januari 2026)"
brief_id: "sap-clean-core-02"
target_word_count: 1650
publish_month: "2026-08-2"
word_count: 2000
---

# Add-on Pihak Ketiga & Clean Core SAP: Memilih yang Tak Mengotori Core

Tim Anda sedang menyeleksi solusi pajak e-Faktur, modul pergudangan tambahan, atau konektor EDI untuk sistem SAP. Vendornya meyakinkan, demonya mulus, harganya masuk akal. Tetapi satu pertanyaan jarang terdengar di ruang rapat pengadaan: apakah *add-on* ini akan mengotori inti sistem dan menyandera upgrade Anda beberapa tahun lagi? Sebagian besar pembahasan [SAP Clean Core](https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide) berfokus pada kode yang dibangun tim internal. Artikel ini membahas sisi lain yang sama pentingnya: solusi yang Anda *beli* dari pihak ketiga, dan cara menilai apakah sebuah add-on benar-benar aman untuk clean core sebelum kontrak diteken.

> **Ringkas:** Add-on pihak ketiga dalam konteks clean core adalah solusi siap pakai dari vendor ISV (*Independent Software Vendor*), dijual lewat SAP Store, yang menambah fungsi ke sistem SAP tanpa Anda membangunnya sendiri. Sebuah add-on disebut *clean-core-safe* bila hanya memakai *released API*/ABAP Cloud (Level A), sehingga inti S/4HANA tetap standar dan aman saat di-upgrade.

Yang akan kita bahas: mengapa add-on beli bisa sama berbahayanya dengan kode buatan sendiri, cara memverifikasi status sertifikasinya di kanal resmi SAP, arti empat tingkat ekstensibilitas (Level A–D) bagi upgrade Anda, kerangka keputusan *build vs buy*, dan kapan add-on tanpa sertifikat justru masih masuk akal untuk diterima.

## Apa hubungan add-on pihak ketiga dengan clean core?

Add-on pihak ketiga adalah perangkat lunak siap pakai dari vendor ISV yang menambah fungsi ke sistem SAP. Kaitannya dengan clean core sederhana: bila add-on itu memodifikasi inti atau memakai objek internal SAP yang belum dirilis, ia menimbulkan risiko upgrade yang sama persis seperti *Z-code* kustomisasi buatan sendiri. Prinsip clean core menjaga inti S/4HANA tetap standar dan *upgrade-safe*; ekstensi dilakukan lewat released API, bukan mengubah kode inti (SAP News, Agustus 2025).

Ada miskonsepsi yang mahal di sini: banyak perusahaan mengawasi ketat kode buatan tim internal, tetapi memberi keleluasaan pada software yang dibeli seolah "kalau vendornya besar, pasti aman". Padahal yang menentukan bersih-tidaknya sebuah add-on bukan siapa yang membuatnya, melainkan *bagaimana* ia dibangun. Puluhan add-on pajak, EDI, pergudangan, HR, dan manajemen dokumen tidak jarang menumpuk di satu landscape enterprise. Satu saja yang menyentuh inti dengan modifikasi bisa menahan seluruh proyek upgrade.

Secara arsitektur, add-on dibedakan menjadi dua jenis, dan perbedaan ini menentukan seberapa "menempel" ia pada inti:

- **On-stack (*in-app*)**: add-on berjalan di dalam sistem S/4HANA itu sendiri. Bila dibangun di atas ABAP Cloud, ia tetap clean-core-safe dan cocok untuk validasi bisnis atau *enhancement* Fiori ringan yang butuh akses data SAP langsung.
- **Side-by-side**: add-on berjalan terpisah di SAP BTP (*Business Technology Platform*), ideal untuk subsistem fungsional, integrasi pihak ketiga, atau kapabilitas yang perlu berkembang independen dari inti, sehingga inti tetap ringan.

Catatan jujur: "di BTP" tidak otomatis berarti bersih. Add-on side-by-side pun bisa bermasalah bila integrasinya menyandera API classic yang rapuh. Arsitektur hanya separuh cerita; kepatuhan pada API yang sudah dirilis SAP-lah yang menentukan.

## Bagaimana cara tahu sebuah add-on aman untuk clean core?

Verifikasi status add-on tidak perlu menebak dari klaim brosur. SAP menyediakan jejak yang bisa dicek publik: setiap solusi partner di SAP Store wajib lolos *readiness check*, ada daftar add-on tersertifikasi yang dirawat SAP, dan setiap released API terdokumentasi terbuka. Sertifikasi clean core untuk solusi partner dijalankan oleh SAP ICC (*SAP Integration and Certification Center*). Kuncinya: minta vendor menunjukkan bukti, bukan sekadar label.

Ada tiga tempat resmi untuk memverifikasi:

1. **SAP Store** (store.sap.com). Setiap solusi partner harus lolos *standard readiness check* yang memeriksa arsitektur solusi, teknologi SAP dan pihak ketiga yang dipakai, API integrasi, serta antarmuka pengguna. Untuk add-on ABAP Cloud, SAP Store kini bahkan mendukung *fulfilment* otomatis langsung ke sistem S/4HANA Cloud Public Edition pelanggan.
2. **Daftar "List of certified ABAP Add-Ons for SAP S/4HANA"** yang dirawat SAP di SAP Community, dengan daftar terpisah untuk Public Edition, Private Edition, dan *extended edition*. Add-on yang serius akan ada di sana.
3. **SAP Business Accelerator Hub** (api.sap.com). Di sinilah released API SAP terdokumentasi. Bila vendor mengklaim add-on-nya hanya memakai API resmi, API itu semestinya bisa Anda temukan di Hub.

Perlu diketahui, aturan mainnya sedang bergeser. Pada Januari 2026 SAP mengumumkan pembaruan program sertifikasi integrasi untuk solusi partner, dengan dua jalur baru: *Integration Certification* (untuk solusi yang selaras prioritas SAP seperti BTP, Business AI, clean core, dan public cloud) dan *Interoperability Review* yang lebih terbuka, dengan target peluncuran Q3 2026 (SAP News, Januari 2026). Karena penamaan dan strukturnya masih berkembang, jangan terpaku pada satu label merek tunggal. Yang lebih penting: verifikasi status terkini di kanal resmi SAP, dan minta vendor menyebut skenario sertifikasinya secara spesifik, bukan sekadar "sudah SAP-certified".

Untuk add-on ABAP on-stack di Public Edition, syarat sertifikasinya cukup ketat sebagai sinyal mutu: proses *uninstall* harus didukung, semua objek berada di *namespace* terdaftar, dan solusi wajib lolos *security code scan* serta pemeriksaan ATC (*ABAP Test Cockpit*) tanpa error. Kalau vendor sanggup menunjukkan bukti ini, Anda berpijak di tanah yang jauh lebih kokoh.

## Level A–D: apa arti tiap tingkat bagi upgrade Anda

SAP memformalkan empat tingkat ekstensibilitas clean core, Level A sampai D, pada Agustus 2025. Semakin tinggi tingkatnya (mendekati A), semakin bersih dan aman ekstensi itu terhadap upgrade. Level A memakai hanya released API/ABAP Cloud dan sepenuhnya upgrade-safe; Level D adalah modifikasi langsung yang bukan clean core dan tidak bisa disertifikasi. Add-on tersertifikasi mengikuti klasifikasi ini, tetapi hanya sampai Level C (kondisional).

Inti teknisnya begini: ABAP Cloud secara sintaksis hanya mengizinkan API yang sudah *released* SAP. Objek yang belum dirilis akan gagal-kompilasi, dan justru batasan inilah yang membuat ekstensi tetap aman antar-rilis (SAP News, Agustus 2025). Rekomendasi SAP sendiri adalah mengejar tingkat setinggi mungkin, dengan prinsip "SAP BTP first".

| Level | Pendekatan teknis | Status clean core | Bisa disertifikasi? | Implikasi upgrade & portabilitas |
|---|---|---|---|---|
| **A** | ABAP Cloud (on-stack) atau side-by-side BTP; hanya *released API* | Sepenuhnya bersih / upgrade-safe | Ya | Upgrade-safe; portabel ke Public Edition |
| **B** | Classic ABAP API yang masih didukung (BAPI/IDoc/RFC/BAdI) | Kondisional-boleh, bila A tak cukup | Ya | Umumnya stabil, tapi perlu tata kelola; belum tentu langsung portabel ke Public Edition |
| **C** | Memakai objek internal SAP yang tak dirilis untuk pelanggan | "Clean bersyarat", butuh cek pra-upgrade | Ya, kondisional | Berisiko; wajib pengecekan *changelog* tiap sebelum upgrade |
| **D** | Modifikasi langsung, *implicit enhancement*, objek tak direkomendasikan | **Bukan** clean core | **Tidak** | Rawan patah saat upgrade; menghambat jalan ke cloud |

Satu klarifikasi penting: Level bukan "nilai rapor kepatuhan perusahaan Anda", melainkan klasifikasi per-ekstensi. Satu landscape wajar memuat campuran add-on Level A sampai D sekaligus. Yang jadi pekerjaan rumah adalah mengetahui add-on mana ada di level berapa, terutama sebelum Anda merencanakan [migrasi ERP ke cloud](https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud). Public Edition menegakkan batasan clean core secara teknis, sehingga add-on warisan Level C atau D kerap harus dibangun ulang atau diganti versi *certified* sebelum ikut pindah.

## Beli add-on atau bangun sendiri? Kerangka build vs buy

Jawabannya bergantung pada sifat kebutuhan, bukan pada ideologi "beli itu praktis" atau "bangun itu lebih terkontrol". Beli add-on masuk akal untuk kebutuhan generik lintas-industri seperti pajak, EDI, atau pergudangan, ketika sudah ada solusi tersertifikasi Level A/B dan Anda butuh cepat. Bangun sendiri lebih tepat ketika kebutuhan itu unik dan menjadi pembeda kompetitif. Apa pun pilihannya, syaratnya sama: pastikan solusinya berbasis released API agar tetap clean-core-safe.

| Pertimbangan | Cenderung **BELI** add-on | Cenderung **BANGUN** sendiri |
|---|---|---|
| Sifat kebutuhan | Generik/lintas-industri (pajak, EDI, pergudangan, dokumen) | Unik, jadi pembeda kompetitif |
| Ketersediaan certified | Ada add-on Level A/B tersertifikasi | Tak ada padanan certified |
| Kecepatan | Butuh cepat, siap pakai | Ada waktu dan kapasitas *developer* |
| TCO & perawatan | Perawatan ditanggung vendor | Perusahaan menanggung *lifecycle* penuh |
| Ketergantungan vendor | Dapat diterima dengan *exit plan* | Ingin kendali penuh |

Ketika keputusan condong ke "beli", nilai vendornya seperti Anda menilai calon karyawan kunci. Ajukan pertanyaan yang memaksa bukti, bukan janji:

1. **Skenario sertifikasi apa yang dipakai add-on ini?** Jawaban hijau menyebut skenario dan level spesifik menurut kerangka sertifikasi clean core SAP, misalnya add-on ABAP Cloud on-stack di Level A. Jawaban merah: "sudah SAP-certified" tanpa detail level atau skenario.
2. **API apa saja yang dipakai?** Hijau: hanya released API yang bisa ditelusuri di SAP Business Accelerator Hub. Merah: butuh akses objek internal atau modifikasi inti.
3. **Bagaimana komitmen kompatibilitas antar-rilis?** Hijau: ada jadwal dan tanggung jawab tertulis. Merah: "perlu penyesuaian tiap upgrade" tanpa kejelasan siapa yang menanggung.
4. **Apakah add-on ini portabel ke S/4HANA Cloud Public Edition?** Hijau: tersedia dan diuji untuk Public Edition. Merah: hanya jalan di on-prem/private dengan modifikasi.

Dalam banyak proyek migrasi yang kami dampingi, add-on warisan yang menempel di inti justru lebih sering menghambat upgrade ketimbang Z-code buatan sendiri, karena tanggung jawab teknisnya kabur dan tak ada yang benar-benar memiliki risikonya. Menegaskan jawaban keempat pertanyaan di atas dalam kontrak jauh lebih murah daripada menemukannya saat upgrade mandek.

## Kapan add-on non-certified masih bisa diterima

Certified bukan satu-satunya jalan. Untuk kebutuhan niche yang belum punya padanan tersertifikasi, add-on non-certified masih wajar diterima asalkan risikonya dikelola secara sadar. Syaratnya: isolasi lewat arsitektur side-by-side di SAP BTP agar tidak menyentuh inti, klausul kompatibilitas upgrade yang jelas di kontrak, dan *exit plan* bila vendor berhenti mendukung produknya. Menerima risiko berbeda dengan mengabaikannya.

Yang jarang diakui vendor: **"certified" memverifikasi cara add-on dibangun, bukan seberapa baik fungsinya untuk proses bisnis Anda.** Sertifikasi clean core mengonfirmasi upgrade-safety dan kepatuhan API, bukan mutu fungsional. Sebuah add-on Level A bisa saja lemah secara fitur, dan sebaliknya, add-on yang sangat matang secara fungsional kadang belum sempat disertifikasi. Menjadikan sertifikat sebagai satu-satunya kriteria seleksi adalah kesalahan yang berlawanan arah.

Karena itu, timbanglah dua sumbu sekaligus: kebersihan teknis (level dan sertifikasi) dan kecocokan fungsional. Untuk kategori add-on yang menyediakan pelaporan atau [Business Intelligence](https://www.soltius.co.id/id/blog/business-intelligence), misalnya, kebersihan clean core justru yang menjaga agar fungsi analitik itu tetap andal melintasi setiap upgrade, bukan sekadar formalitas kepatuhan. Untuk add-on Level C yang terpaksa dipakai, sepakati dalam kontrak siapa yang menjalankan pengecekan pra-upgrade dan menanggung remediasinya.

## FAQ (Pertanyaan yang Sering Diajukan)

### Apakah add-on pihak ketiga bisa merusak clean core?
Bisa. Add-on yang menyentuh inti dengan modifikasi atau memakai objek internal SAP yang belum dirilis berperilaku sama seperti Z-code buatan sendiri: ia dapat menggagalkan atau memperlambat upgrade dan menghambat perpindahan ke cloud. Kuncinya bukan "beli vs bangun", melainkan bagaimana add-on itu dibangun. Add-on berbasis ABAP Cloud/released API (Level A) tetap upgrade-safe, sedangkan yang bersandar modifikasi (Level D) mengotori core.

### Bagaimana cara tahu sebuah add-on SAP sudah tersertifikasi clean core?
Verifikasi di tiga tempat resmi: SAP Store (setiap solusi partner wajib lolos *readiness check*), daftar "List of certified ABAP Add-Ons for SAP S/4HANA" yang dirawat SAP di SAP Community (terpisah per edisi), dan SAP Business Accelerator Hub untuk melihat released API yang dipakai. Sertifikasi clean core dijalankan oleh SAP ICC. Minta vendor menyebut skenario sertifikasinya secara spesifik.

### Apa itu Level A, B, C, D dalam ekstensibilitas SAP?
Empat tingkat kepatuhan clean core yang SAP formalkan pada Agustus 2025. Level A: hanya released API/ABAP Cloud, sepenuhnya upgrade-safe. Level B: classic ABAP API yang masih didukung SAP (BAPI/IDoc/BAdI), boleh bila Level A tak cukup. Level C: memakai objek internal SAP, "clean bersyarat" dengan pengecekan tiap sebelum upgrade. Level D: modifikasi langsung, bukan clean core dan tidak bisa disertifikasi.

### Apa bedanya add-on on-stack dan side-by-side?
Add-on on-stack (*in-app*) berjalan di dalam sistem S/4HANA; bila berbasis ABAP Cloud, ia tetap clean-core-safe dan cocok untuk validasi bisnis atau enhancement Fiori ringan yang butuh akses data langsung. Add-on side-by-side berjalan terpisah di SAP BTP, ideal untuk subsistem fungsional, integrasi pihak ketiga, atau kapabilitas yang perlu berkembang independen dari inti, sehingga inti tetap ringan.

### Lebih baik beli add-on atau bangun sendiri di SAP BTP?
Tergantung kebutuhannya. Beli bila kebutuhan generik (pajak, EDI, pergudangan, dokumen), butuh cepat, dan tersedia add-on tersertifikasi Level A/B; TCO umumnya lebih rendah dan perawatan jadi tanggung jawab vendor. Bangun bila kebutuhan unik menjadi pembeda bisnis dan tak ada padanan certified. Apa pun pilihannya, pastikan solusi berbasis released API/ABAP Cloud agar tetap clean-core-safe.

### Apakah add-on lama bisa dibawa ke S/4HANA Cloud Public Edition?
Belum tentu. Public Edition menegakkan batasan clean core secara teknis: hanya ekstensi berbasis ABAP Cloud/released API yang diterima. Add-on warisan yang memodifikasi inti atau memakai objek internal (Level C/D) sering harus dibangun ulang atau diganti versi certified sebelum migrasi. Inilah alasan add-on non-standar kerap menjadi penghambat utama saat migrasi ERP ke cloud.

### Siapa yang bertanggung jawab bila add-on gagal saat upgrade?
Secara kontraktual, vendor add-on bertanggung jawab menjaga kompatibilitas produknya, tetapi risiko operasional saat upgrade tetap jatuh ke perusahaan Anda. Karena itu sertifikasi SAP (Level A/B) penting sebagai mitigasi: add-on yang hanya memakai released API jauh lebih kecil kemungkinannya patah antar-rilis. Untuk add-on Level C, sepakati di kontrak siapa yang menjalankan pengecekan pra-upgrade dan menanggung remediasi.

## Kesimpulan

Menjaga clean core bukan hanya soal menahan diri menulis Z-code, tetapi juga soal kedisiplinan dalam memilih apa yang Anda beli. Add-on yang tepat mempercepat nilai tanpa menambah utang teknis; add-on yang salah bisa menjadi jangkar yang menahan sistem Anda dari cloud. Kerangkanya sudah jelas: verifikasi sertifikasi di kanal resmi SAP, pahami level ekstensibilitas tiap solusi, timbang build vs buy pada kebutuhan nyata, dan kelola risiko add-on non-certified secara sadar, bukan dengan menutup mata. Sebagai SAP Platinum Partner melalui keanggotaan United VARs, Soltius membantu perusahaan menilai kecocokan add-on dengan roadmap clean core dan mengintegrasikannya secara rapi, dari penilaian awal hingga dukungan pasca go-live.

Untuk mendiskusikan apakah add-on yang sedang Anda pertimbangkan benar-benar aman bagi roadmap clean core perusahaan Anda, jelajahi pendekatannya di soltius.co.id.
