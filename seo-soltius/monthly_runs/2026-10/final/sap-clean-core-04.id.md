---
title: "SAP Build Code dan Joule: Membangun Ekstensi Clean Core Lebih Cepat dengan AI"
meta_title: "SAP Clean Core: Bangun Ekstensi Lebih Cepat via AI"
meta_description: "SAP Clean Core lebih cepat dengan AI: SAP Build Code & Joule (ABAP LLM) bantu developer buat kode ABAP Cloud, pahami legacy code, jaga ekstensi upgrade-safe."
slug: "sap-clean-core-ai-build-code-joule"
language: "id"
primary_keyword: "SAP Clean Core"
secondary_keywords:
  - "SAP Build Code"
  - "SAP Joule / ABAP LLM"
  - "generative AI SAP"
  - "ABAP Cloud"
  - "side-by-side extensibility"
  - "SAP BTP"
  - "released API"
  - "RAP (ABAP RESTful Application Programming Model)"
  - "modernisasi legacy code"
  - "upgrade-safe extension"
  - "Clean Core Levels A-D"
internal_links:
  - url: "https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide"
    anchor: "SAP Clean Core"
  - url: "https://www.soltius.co.id/id/blog/low-code-and-no-code-platforms"
    anchor: "platform low-code SAP Build"
  - url: "https://www.soltius.co.id/id/blog/business-intelligence"
    anchor: "business intelligence"
external_citations:
  - url: "https://news.sap.com/2025/03/joule-for-developers-ai-powered-capabilities/"
    context: "Joule for Developers memakai LLM khusus beban kerja SAP termasuk ABAP LLM untuk generate, explain, dan unit test kode"
  - url: "https://www.gartner.com/en/newsroom/press-releases/2024-04-11-gartner-says-75-percent-of-enterprise-software-engineers-will-use-ai-code-assistants-by-2028"
    context: "75% software engineer perusahaan akan memakai AI code assistant pada 2028, naik dari di bawah 10% pada awal 2023"
brief_id: "sap-clean-core-04"
target_word_count: 1650
publish_month: "2026-10"
word_count: 2095
---

# SAP Build Code dan Joule: Membangun Ekstensi Clean Core Lebih Cepat dengan AI

Keberatan paling jujur terhadap clean core jarang berbunyi "kami tidak mau". Lebih sering begini: "membangun ekstensi *side-by-side* yang benar terasa lebih lambat daripada menambal *core* seperti dulu." Bagi *lead developer* dan arsitek yang dikejar tenggat, friksi itu nyata, bukan alasan. Namun sejak SAP menanamkan AI generatif ke lingkungan pengembangannya, argumen tersebut mulai bergeser. Artikel ini membahas bagaimana SAP Build Code dan *copilot* Joule mengubah ekonomi prinsip [SAP Clean Core](https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide): membuat jalur ekstensi bersih bukan lagi yang paling lambat, melainkan yang paling dibantu. Anda akan melihat kemampuan AI yang relevan, perbandingan pola lama versus pola bersih, dan batas yang tetap menuntut penilaian manusia.

> **Secara singkat:** SAP Build Code adalah lingkungan pengembangan berbantuan AI generatif di atas SAP BTP, dilengkapi *copilot* Joule, yang memandu developer membangun ekstensi ABAP Cloud dan *side-by-side* sesuai prinsip *clean core*. Dengan *large language model* khusus SAP termasuk ABAP LLM, Joule menghasilkan kode, menjelaskan *legacy code*, dan menyarankan pola yang *upgrade-safe*, membuat jalur ekstensi bersih lebih cepat ditempuh.

Konteksnya bukan tren sesaat. Gartner memproyeksikan 75% *software engineer* di perusahaan akan memakai *AI code assistant* pada 2028, naik dari di bawah 10% pada awal 2023 (Gartner, April 2024). Pertanyaan bagi tim SAP bukan lagi apakah AI masuk ke pengembangan, melainkan apakah ia dipakai untuk mempercepat jalur yang benar, bukan utang teknis lama.

## Apa itu SAP Build Code dan Joule, dan apa hubungannya dengan clean core?

SAP Build Code adalah lingkungan pengembangan berbantuan AI di SAP Business Technology Platform (BTP), dan Joule adalah *copilot* AI di dalamnya. Keduanya terkait *clean core* karena mengarahkan developer membangun ekstensi lewat ABAP Cloud dan pola *side-by-side*, yaitu memperluas S/4HANA tanpa mengubah inti yang harus tetap standar dan mudah di-upgrade.

Clean core sendiri adalah prinsip menjaga inti S/4HANA tetap standar agar ringan dan aman saat *upgrade*, dengan memindahkan kustomisasi ke luar inti. SAP memetakannya ke dalam lima dimensi: *Processes*, *Extensibility*, *Data*, *Integration*, dan *Operations*. Yang paling menyentuh pekerjaan developer adalah dimensi *extensibility*: bagaimana logika tambahan dibangun tanpa mencederai inti.

SAP Build Code hadir untuk dimensi itu. Diperkenalkan di SAP TechEd 2023 dan *generally available* sejak 2024, ia menyatukan penulisan kode, pengujian, integrasi, dan pengelolaan siklus hidup aplikasi di satu tempat. Build Code dioptimalkan untuk Java dan JavaScript, mendukung ABAP, dan mendorong *fusion development*, yakni perpaduan *pro-code* dan *low-code*. Sebagai bagian dari keluarga SAP Build di BTP, ia berbagi fondasi dengan [platform low-code SAP Build](https://www.soltius.co.id/id/blog/low-code-and-no-code-platforms) yang menyasar *citizen developer*.

Joule-lah yang membuatnya terasa berbeda. Menurut SAP, Joule for Developers memakai *large language model* yang dibangun khusus untuk beban kerja SAP, termasuk "ABAP LLM" yang dilatih pada kode ABAP kelas *enterprise* (SAP News, Maret 2025). "Joule for Developers" bukan satu fitur tunggal, melainkan nama kolektif untuk kapabilitas AI *design-time* yang tersebar di Build Code, ABAP development tools for Eclipse (ADT), hingga lingkungan Fiori. Karena model itu memahami konteks ABAP dan API yang dirilis SAP, saran yang diberikannya condong ke pola yang patuh clean core, bukan jalan pintas yang merusak inti.

## Apa saja yang bisa dibantu AI dalam pengembangan clean core?

Pada pengembangan clean core, AI membantu tugas yang selama ini membuat jalur bersih terasa lambat. Joule dapat menghasilkan kode yang patuh ABAP Cloud, menjelaskan *legacy code*, menyarankan *released API* yang stabil, menyusun kerangka RAP untuk aplikasi *side-by-side*, serta membuat *unit test* dan dokumentasi, sehingga developer lebih fokus pada desain ketimbang *boilerplate*.

Dirinci, kemampuan yang relevan untuk clean core mencakup, antara lain (cakupan ini terus bertambah per rilis):

1. **Menghasilkan kode yang patuh ABAP Cloud.** Joule membangun objek bisnis dan melengkapi kode mengikuti model ABAP Cloud, yakni model pengembangan yang hanya memakai API resmi dan objek publik stabil.
2. **Menjelaskan *legacy code*.** Program warisan ribuan baris bisa diuraikan tujuan, alur, dan dependensi datanya dalam hitungan detik, sebelum satu baris pun disentuh.
3. **Menyarankan *released API* alih-alih akses internal.** Karena sadar konteks, Joule mengarahkan developer ke kontrak API yang stabil, bukan akses langsung ke tabel internal yang rapuh saat *upgrade*.
4. **Menyusun kerangka RAP.** RAP (*ABAP RESTful Application Programming Model*) adalah model yang direkomendasikan SAP untuk membangun servis OData dan aplikasi Fiori; Joule menyiapkan kerangkanya agar developer tidak mulai dari nol.
5. **Membuat *unit test* dan dokumentasi.** Pembuatan *unit test* ABAP/CDS dan penjelasan kode, termasuk *CDS view*, adalah pekerjaan yang dulu sering dilewati karena memakan waktu.

Kemampuan ini bukan tanpa klaim angka. SAP menyebut penghematan biaya pengembangan "hingga 30%" dan, dari umpan balik *early adopter*, "hingga 40%" untuk migrasi ekstensi ERP. Angka itu berasal dari SAP dan pengguna awal, bukan studi independen; perlakukan sebagai arah, bukan janji hasil.

## Bagaimana AI mengubah pilihan developer: menambal core vs ekstensi bersih?

AI menggeser perhitungan developer karena bagian yang dulu membuat ekstensi bersih terasa mahal kini diambil alih mesin. Alih-alih menambal *core* dan mengakses objek internal, developer memakai ABAP Cloud atau *side-by-side* di BTP dengan bantuan Joule. Hasilnya, jalur bersih yang dulu paling lambat menjadi paling didukung, dan ekstensi tetap aman saat sistem di-upgrade.

Perbandingan berikut menunjukkan pergeserannya tugas demi tugas:

| Tugas developer | Cara lama (tambal core / ABAP klasik) | Cara AI-assisted clean (Build Code + Joule) |
|---|---|---|
| Menambah logika bisnis | Modifikasi atau *append* di inti, akses objek internal | Ekstensi *side-by-side* di BTP atau ABAP Cloud *on-stack*, dibantu generasi Joule |
| Memakai data SAP | Baca tabel internal secara langsung | Joule menyarankan *released API* dengan kontrak stabil |
| Membangun servis atau aplikasi | Pola *ad hoc* yang berbeda-beda | Kerangka RAP di-generate Joule, siap Fiori/OData |
| Memahami Z-code warisan | Baca manual ribuan baris | Joule menjelaskan tujuan, alur, dependensi dalam hitungan detik |
| Membuat *unit test* | Sering dilewati karena makan waktu | Joule menghasilkan *unit test* ABAP/CDS otomatis |
| Risiko saat *upgrade* | Tinggi; tiap *upgrade* bisa merusak kustomisasi | Rendah; Level A (*released API*), *upgrade-safe* |

Inti argumennya sederhana. Jalur bersih dulu terasa lambat bukan karena konsepnya salah, melainkan karena bagian yang melelahkan (memahami kode lama, menyiapkan kerangka, menulis *test*) semuanya manual. Ketika mesin mengambil alih pekerjaan itu, selisih kecepatan antara "menambal cepat tapi kotor" dan "membangun bersih tapi lambat" menyusut. Yang tersisa justru keunggulan struktural pola bersih: ekstensi yang tidak pecah tiap kali SAP merilis pembaruan.

## Modernisasi custom code lama dengan bantuan AI: dari penjelasan ke penulisan ulang

Nilai terbesar AI untuk modernisasi bukan menulis ulang otomatis, melainkan menjelaskan. Joule membaca Z-code warisan dan menguraikan tujuan, alur, serta dependensinya dalam hitungan detik, lalu menyarankan pemetaan ke *released API* dan pola RAP. Developer tetap memutuskan arsitekturnya, tetapi titik tersulit, yaitu memahami kode lama, menjadi jauh lebih cepat dilewati.

Urgensinya punya tanggal. *Mainstream maintenance* untuk SAP ECC (SAP ERP 6.0) berlaku hingga 31 Desember 2027, dengan opsi *extended maintenance* berbayar hingga 31 Desember 2030. Bagi perusahaan yang masih menumpuk kustomisasi di inti ECC, tenggat itu mengubah "modernisasi kode" dari proyek "nanti" menjadi antrean pekerjaan yang harus dibereskan. Di sinilah AI memangkas bagian yang paling memakan waktu.

Alurnya berjalan dari pemahaman ke pemetaan: Joule menjelaskan apa yang dilakukan sebuah modifikasi lama, menandai di mana ia menyentuh objek internal, lalu mengusulkan padanan berbasis *released API* atau servis RAP yang setara. Prosedur remediasi penuh, dari inventarisasi hingga strategi *transport*, adalah topik tersendiri; yang penting dicermati di sini adalah peran AI mempercepat gerbang pertamanya: memahami warisan yang selama ini membuat tim enggan mulai.

Ada batas yang jelas. Joule bisa menjelaskan dan mengusulkan, tetapi keputusan apakah sebuah logika layak dipindahkan, disederhanakan, atau dihapus tetap milik arsitek. Ekstensi yang sudah bersih juga punya bonus di hilir: data yang tidak lagi tersandera modifikasi liar lebih mudah dialirkan ke kebutuhan analitik seperti [business intelligence](https://www.soltius.co.id/id/blog/business-intelligence) dan beban kerja AI lanjutan.

## Kapan AI BELUM bisa dipercaya penuh: tata kelola kode buatan AI

Kode buatan AI tidak otomatis aman untuk clean core. Joule mengarahkan ke pola yang benar, tetapi gerbang kepatuhan sesungguhnya adalah tata kelola: ABAP Test Cockpit (ATC) dengan cek seperti *Usage of APIs*, mode *blocking* di sistem *development*, dan peninjauan manusia. SAP sendiri menegaskan ada titik di mana penilaian manusia tetap harus mengambil alih.

Bagian ini jarang ditulis vendor, padahal justru di sinilah kepercayaan dibangun. Beberapa hal perlu dijaga ketat:

- **Kode AI tetap butuh gerbang ATC.** SAP merekomendasikan ABAP Test Cockpit sebagai alat tata kelola clean core, lewat cek seperti *Usage of APIs*, *Critical statements*, dan *Code Vulnerability Analyzer*. Mode *blocking* di sistem DEV menahan temuan Priority 1 dan 2 sebelum *transport* naik. Tata kelola ini paling relevan untuk lanskap *on-stack*/Private Cloud/*on-premise*; di S/4HANA Cloud Public Edition, arsitektur sudah membatasi ke *released API*.
- **Risiko halusinasi API itu nyata.** Sebuah *LLM* bisa menyarankan API atau pola yang sudah usang atau belum dirilis. Justru karena itu kombinasi *released API* dan cek *Usage of APIs* menjadi pengaman teknis, bukan sekadar formalitas.
- **AI tidak menggantikan keputusan arsitektur.** Dokumentasi SAP soal *custom code migration* berbasis AI menggambarkan *agentic loop* yang menjalankan ATC dan menerapkan *quick fix* deterministik, sekaligus menandai titik di mana penilaian manusia tetap harus duduk. AI adalah asisten, bukan autopilot.
- **Jangan jadikan AI alasan melewati *fit-to-standard*.** Kemampuan generasi cepat bisa menggoda tim mengotak-atik lagi tanpa menimbang apakah proses standar sudah memadai.

Peta kematangan clean core membantu menjaga disiplin ini. SAP mengklasifikasi ekstensi ke dalam empat level, dan menyarankan memakai level setinggi mungkin:

| Level | Dasar teknis | Status | Relevansi AI |
|---|---|---|---|
| A | *Released API*; ABAP Cloud *on-stack* atau *side-by-side* BTP/SAP Build | Direkomendasikan, didukung penuh, *upgrade-safe* | Target yang disarankan Joule |
| B | API/teknologi klasik | Mapan, terdokumentasi, perlu diawasi | Boleh, tetap verifikasi lewat ATC |
| C | Akses objek internal | Risiko terkelola, hanya bila benar-benar perlu | Waspadai saran AI yang menyentuh objek internal |
| D | Objek *not-recommended* | Risiko tertinggi, menumpuk utang teknis | Hindari; kode AI pun tak boleh mendarat di sini |

Di lapangan, kode buatan AI yang diterima begitu saja tanpa peninjauan tetap menumpuk utang teknis (*technical debt*), hanya dengan kemasan yang lebih rapi. Niat baik AI bukan jaminan kepatuhan; tata kelolalah yang menegakkannya.

## FAQ (Pertanyaan yang Sering Diajukan)

### Apa itu SAP Build Code?

SAP Build Code adalah lingkungan pengembangan berbantuan AI generatif di atas SAP Business Technology Platform (BTP). Ia menyatukan penulisan kode, pengujian, integrasi, dan pengelolaan siklus hidup aplikasi dalam satu tempat, dengan *copilot* Joule yang membantu developer Java, JavaScript, dan ABAP. Build Code telah *generally available* sejak 2024 (diperkenalkan di SAP TechEd 2023) dan mendorong pendekatan *fusion development*.

### Bisakah Joule menulis kode ABAP?

Bisa, sebagai asisten. Joule memakai *large language model* khusus beban kerja SAP, termasuk ABAP LLM yang dilatih SAP, untuk menghasilkan kode, melengkapi kode, membuat *unit test*, dan menjelaskan kode ABAP termasuk *CDS view*. Joule juga menyarankan pola yang kompatibel dengan clean core. Namun kode hasilnya tetap perlu ditinjau manusia; Joule mempercepat pekerjaan developer, bukan menggantikan keputusannya.

### Apakah kode buatan AI aman untuk clean core?

Tidak otomatis aman; perlu tata kelola. Joule mengarahkan ke *released API* dan model ABAP Cloud yang *upgrade-safe*, tetapi SAP tetap merekomendasikan ABAP Test Cockpit (ATC) untuk memverifikasi kepatuhan, lewat cek seperti *Usage of APIs* dan *Critical statements*, serta mode *blocking* di sistem *development*. SAP sendiri menegaskan ada titik di mana penilaian manusia tetap harus mengambil alih.

### Apa bedanya ABAP Cloud dan ABAP klasik?

ABAP Cloud adalah model pengembangan untuk clean core yang hanya memakai *released API* dan objek publik berstatus stabil, sehingga ekstensi tidak rusak saat sistem di-upgrade. ABAP klasik mengizinkan akses langsung ke objek internal SAP; lebih fleksibel, tetapi berisiko pecah saat *upgrade* dan menumpuk utang teknis. Dalam model Clean Core Levels A–D, ABAP Cloud menempati Level A.

### Apakah AI akan menggantikan developer SAP?

Tidak. Gartner memproyeksikan 75% *software engineer* perusahaan memakai *AI code assistant* pada 2028, artinya AI menjadi alat standar, bukan pengganti. Joule mempercepat tugas berulang seperti menjelaskan *legacy code*, membuat *unit test*, dan menyusun kerangka RAP. Keputusan arsitektur, pemilihan pola clean core, dan tinjauan kualitas tetap tanggung jawab developer. Perannya bergeser ke desain dan tata kelola, bukan hilang.

### Apakah butuh lisensi atau langganan BTP khusus untuk SAP Build Code dan Joule?

SAP Build Code adalah layanan di atas SAP BTP, sehingga pemakaiannya mengikuti model langganan BTP dan *entitlement* yang relevan; detail komersial sebaiknya dikonfirmasi langsung ke SAP atau mitra implementasi. Joule for Developers sempat ditawarkan gratis untuk periode terbatas. Karena skema lisensi dan promosi dapat berubah, artikel ini sengaja tidak menyebut angka harga spesifik.

## Kesimpulan

Momentum AI generatif tidak menghapus disiplin clean core, justru mempertegasnya: kecepatan hanya bernilai bila ekstensi tetap aman saat di-upgrade. SAP Build Code dan Joule menggeser bagian yang dulu membuat jalur bersih terasa mahal, tetapi gerbang kepatuhan, mulai dari *released API* hingga ATC, tetap menuntut tangan manusia. Melalui layanan Data and AI Consulting serta pengalaman implementasi SAP Build dan SAP BTP, dan sebagai SAP Platinum Partner melalui United VARs, Soltius membantu tim pengembangan mengadopsi SAP Build Code dan Joule dengan *guardrail* clean core, sehingga produktivitas naik tanpa mengorbankan *upgrade-safety*.

Untuk mendiskusikan kesiapan tim developer Anda mengadopsi SAP Build Code dan Joule dengan tata kelola clean core yang benar, kunjungi soltius.co.id.
