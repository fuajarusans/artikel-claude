---
title: "Kustomisasi Warehouse Management System Tanpa Merusak Upgrade"
meta_title: "Warehouse Management System: Kustomisasi Aman Upgrade"
meta_description: "Cara mengkustomisasi warehouse management system (WMS) di S/4HANA tanpa merusak upgrade: clean core, in-app vs side-by-side SAP BTP, dan low-code SAP Build."
slug: "warehouse-management-system-kustomisasi-clean-core"
language: "id"
primary_keyword: "warehouse management system"
secondary_keywords:
  - "kustomisasi SAP EWM"
  - "clean core"
  - "in-app extensibility"
  - "side-by-side extensibility"
  - "SAP Business Technology Platform"
  - "SAP Build low-code"
  - "ABAP Cloud"
  - "upgrade-stable extension"
  - "utang teknis"
  - "modifikasi ZWM"
  - "SAP Extended Warehouse Management"
  - "released API"
internal_links:
  - url: "https://www.soltius.co.id/id/blog/konsep-warehouse-management-system-yang-wajib-anda-tahu"
    anchor: "warehouse management system"
  - url: "https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide"
    anchor: "SAP Clean Core"
  - url: "https://www.soltius.co.id/id/blog/low-code-and-no-code-platforms"
    anchor: "low code platform"
external_citations:
  - url: "https://news.sap.com/2025/08/extend-sap-s4hana-cloud-right-way-clean-clear/"
    context: "Definisi clean core, tiga tujuan (inovasi, tekan utang teknis, sederhanakan upgrade), side-by-side vs on-stack ABAP Cloud, strategi BTP-first"
  - url: "https://community.sap.com/t5/technology-blog-posts-by-sap/clean-core-maturity-and-the-new-extensibility-levels/ba-p/14293974"
    context: "Evolusi dari 3-tier ke clean core level concept; klasifikasi extensibility Level A/B/C/D"
brief_id: "warehouse-management-system-03"
target_word_count: 1650
publish_month: "2026-09"
word_count: 2002
---

# Kustomisasi Warehouse Management System Tanpa Merusak Upgrade

Hampir setiap gudang punya aturan yang tidak standar: logika *picking* (pengambilan barang) khusus per pelanggan, layar operator yang disesuaikan, integrasi ke timbangan dan printer label, atau validasi kualitas yang unik per industri. Selama bertahun-tahun, cara memenuhinya adalah memodifikasi inti sistem. Persoalannya baru terasa saat SAP S/4HANA di-upgrade: setiap modifikasi berubah menjadi proyek regresi yang mahal dan berisiko. Artikel ini membahas cara menambah kebutuhan khusus pada [warehouse management system](https://www.soltius.co.id/id/blog/konsep-warehouse-management-system-yang-wajib-anda-tahu) (WMS) Anda tanpa mengorbankan kemudahan upgrade, memakai prinsip *clean core*. Ini bukan tutorial teknis, melainkan kerangka keputusan bagi IT/SAP lead dan enterprise architect yang selama ini menanggung utang teknis kustomisasi.

> **Clean core** adalah prinsip menjaga inti sistem SAP S/4HANA tetap standar dan mudah di-upgrade dengan memindahkan kustomisasi ke luar inti, misalnya lewat *in-app extensibility*, ABAP Cloud, atau aplikasi *side-by-side* di SAP Business Technology Platform (SAP BTP). Untuk gudang, artinya menambah aturan *picking* atau integrasi perangkat tanpa mengunci sistem dari pembaruan.

Pembahasan bergerak dari definisi clean core, alasan cara lama menjadi mahal, cara memilih model ekstensi yang tepat, contoh nyata di gudang, hingga satu bagian yang jarang dibahas: kapan sebaiknya Anda justru tidak mengkustomisasi sama sekali.

## Apa Itu Clean Core dan Mengapa Penting untuk Sistem Gudang Anda?

Clean core berarti menjaga inti S/4HANA tetap standar dan stabil saat upgrade, sambil memindahkan diferensiasi bisnis ke lapisan ekstensi resmi di luar inti. SAP mendeskripsikannya sebagai menjaga *core* tetap bersih, standar, dan *upgrade-stable* (stabil saat diperbarui). Untuk gudang, prinsip ini memisahkan aturan khusus Anda dari kode standar yang secara berkala diperbarui SAP.

Menurut SAP, tujuan clean core ada tiga: mempercepat siklus inovasi, menekan utang teknis (*technical debt*), dan menyederhanakan pemeliharaan serta upgrade sistem ([SAP News](https://news.sap.com/2025/08/extend-sap-s4hana-cloud-right-way-clean-clear/), 12 Agustus 2025). Ketiganya adalah tepat masalah yang dirasakan tim gudang setiap kali proyek upgrade tertunda karena harus menguji ulang kustomisasi lama.

Clean core bukan sekadar soal kode. SAP memetakannya ke enam dimensi ERP: *software stack*, *extensibility* (ekstensibilitas), *integrations*, *processes*, *data*, dan *operations*. Untuk operasi gudang, dua dimensi yang paling sering menggigit adalah extensibility dan integrations, yakni bagaimana Anda menambah logika serta menyambungkan perangkat lapangan tanpa menyentuh objek standar.

Satu miskonsepsi perlu diluruskan: clean core bukan cuma urusan cloud. Fitur yang relevan untuk SAP S/4HANA Cloud Private Edition juga berlaku pada deployment *on-premise*, sehingga gudang yang belum berpindah ke cloud tetap dapat menerapkannya sekarang. Prinsip yang sama dijelaskan lebih luas di panduan [SAP Clean Core](https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide); artikel ini adalah penerapan spesifiknya untuk domain gudang.

## Mengapa Modifikasi "Cara Lama" Membuat Upgrade Gudang Mahal

Modifikasi cara lama, seperti mengubah objek standar atau menulis langsung ke tabel (pola ZWM klasik), menempelkan kode Anda pada bagian sistem yang bisa berubah setiap upgrade. Akibatnya, setiap pembaruan menuntut pengujian regresi ulang. Upgrade yang semestinya rutin berubah menjadi proyek besar. Itulah akar utang teknis di banyak gudang.

SAP kini mengklasifikasikan pola ekstensi ke dalam empat tingkat kebersihan (*extensibility levels*). Modifikasi cara lama masuk **Level D**, kategori dengan risiko utang teknis tertinggi. Bukan penulisannya yang mahal, melainkan pemeliharaannya:

- **Setiap upgrade menjadi proyek regresi.** Karena kode menempel pada objek yang bisa berubah, tim harus menguji dan menyesuaikan ulang setiap kali SAP merilis pembaruan.
- **Ketergantungan pada memori tim.** Modifikasi lama sering tak terdokumentasi rapi, sehingga hanya segelintir orang yang paham dampaknya bila disentuh.
- **Jalan ke cloud tersumbat.** Tumpukan modifikasi inti membuat perpindahan ke S/4HANA Cloud lebih rumit dan lebih lama.

Konteks waktu memperbesar taruhannya. Sesuai strategi pemeliharaan SAP, *mainstream maintenance* untuk SAP ECC berakhir 2027 dengan *extended support* berbayar hingga 2030, mendorong banyak perusahaan berpindah ke S/4HANA. Gudang yang membawa tumpukan modifikasi lama ke migrasi itu berpotensi membayar ongkosnya dua kali: sekali saat pindah, sekali lagi di setiap upgrade berikutnya. Berapa persisnya biaya itu tidak ada angka resmi yang aman dikutip; yang pasti, pola Level D mengubah upgrade dari langkah rutin menjadi taruhan anggaran.

## In-App atau Side-by-Side: Bagaimana Memilih Cara Meng-extend WMS?

Pilih berdasarkan *use case*. In-app extensibility cocok untuk perubahan kecil dan terkendali di dalam S/4HANA. Side-by-side di SAP BTP tepat untuk aplikasi terpisah yang lebih besar. ABAP Cloud dipakai bila logika perlu dekat dengan data dan berperforma tinggi. SAP menyarankan strategi "BTP-first": pilih side-by-side kecuali ada alasan kuat untuk *on-stack*.

Ada tiga jalur yang direstui SAP dan sama-sama *upgrade-stable*:

1. **In-app / key-user extensibility.** Perubahan terkendali di dalam sistem oleh *key user*, misalnya menambah *field* pada dokumen gudang, mengadaptasi layar, atau menambah logika ringan lewat *BAdI* yang di-release. Cocok untuk kebutuhan kecil.
2. **Developer extensibility di ABAP Cloud (on-stack).** Ekstensi terintegrasi di dalam ERP yang tetap stabil saat upgrade karena hanya memakai *released API* (API yang dirilis resmi SAP). Tepat untuk logika inti kompleks yang butuh performa tinggi.
3. **Side-by-side di SAP BTP.** Aplikasi terpisah (*decoupled*) yang berjalan di luar inti dan terhubung lewat released API atau *event*. Ideal untuk aplikasi atau antarmuka besar yang independen dari core.

Benang merahnya jelas: ketiganya memakai objek dan API yang di-release SAP, bukan memodifikasi objek standar. Untuk menilai seberapa "bersih" sebuah ekstensi, SAP memakai empat tingkat berikut ([SAP Community](https://community.sap.com/t5/technology-blog-posts-by-sap/clean-core-maturity-and-the-new-extensibility-levels/ba-p/14293974)):

- **Level A**: hanya interface publik yang di-release dan stabil (ABAP Cloud on-stack atau side-by-side lewat SAP Build/CAP). Paling bersih.
- **Level B**: *classic API* yang terdokumentasi dan umumnya upgrade-stable. Risiko rendah sampai sedang.
- **Level C**: akses ke objek internal SAP untuk skenario legacy. Risiko sedang sampai tinggi.
- **Level D**: modifikasi standar, tulis langsung ke tabel, *implicit enhancement*. Risiko utang teknis tertinggi.

| Aspek | In-app / key-user | Side-by-side (SAP BTP) | ABAP Cloud (on-stack) | Modifikasi inti (cara lama) |
|---|---|---|---|---|
| Di mana kode berada | Di dalam S/4HANA | Aplikasi terpisah di SAP BTP | Di dalam S/4HANA | Menyentuh objek standar |
| Cara terhubung ke core | Objek/BAdI rilisan | Released API/event | Released API dalam stack | Langsung ke tabel/objek standar |
| Upgrade-stable? | Ya (bila pakai objek rilisan) | Ya | Ya | Tidak; sumber utang teknis |
| Cocok untuk | Field, logika ringan, adaptasi UI | Aplikasi/UI besar, otomasi, low-code | Logika inti kompleks, high-volume | (Hindari) |
| Clean core level | A | A | A | D |

Untuk konteks gudang, SAP Extended Warehouse Management (EWM) bahkan punya panduan clean core level tersendiri. SAP menerbitkan seri FAQ resmi tentang penerapan konsep level clean core untuk EWM, dan tersedia pula SAP Note yang memuat panduan *extensibility* EWM yang upgrade-safe; API EWM diklasifikasikan pada Level A (released) atau Level B (classic). Detail teknis per area sebaiknya diverifikasi langsung ke dokumentasi SAP terkait, tetapi arah kebijakannya konsisten dengan prinsip di atas.

## Contoh Nyata di Gudang: Kebutuhan Kustom dan Jalur yang Tepat

Aturannya sederhana: cocokkan besar-kecilnya kebutuhan dengan jalur ekstensi. Menambah *field* pada dokumen gudang cukup lewat in-app. Layar operator mobile atau integrasi perangkat sebaiknya side-by-side di SAP BTP. Aturan *picking* kompleks berperforma tinggi masuk ABAP Cloud. Otomasi alur persetujuan dan inspeksi cocok ditangani dengan otomasi *low-code*.

Untuk membangun aplikasi pelengkap gudang tanpa membebani tim inti, SAP menyediakan SAP Build, portofolio *low-code* di atas SAP BTP: Build Apps untuk pembuatan aplikasi, Build Process Automation untuk otomasi alur kerja plus RPA, dan Build Work Zone untuk portal. Inilah titik temu antara ekstensi gudang dan [low code platform](https://www.soltius.co.id/id/blog/low-code-and-no-code-platforms): kebutuhan side-by-side dibangun cepat secara visual, lalu dihubungkan ke core lewat released API.

| Kebutuhan kustom di gudang | Jalur yang disarankan | Alasan |
|---|---|---|
| Tambah field/atribut pada dokumen atau layar gudang | In-app / key-user extensibility | Perubahan kecil, terkendali, upgrade-stable |
| Aturan picking/putaway khusus & kompleks | ABAP Cloud (on-stack, released API) | Butuh dekat data dan performa; tetap upgrade-stable |
| Layar operator mobile / aplikasi gudang pelengkap | Side-by-side SAP Build Apps (di BTP) | Aplikasi independen, low-code, decoupled dari inti |
| Integrasi timbangan / printer label / konveyor | Side-by-side di BTP via released API/event | Menjaga inti bersih; integrasi terisolasi dan bisa di-scale |
| Otomasi alur persetujuan / inspeksi QA | SAP Build Process Automation | Otomasi workflow low-code tanpa menyentuh core |
| Aturan yang sebenarnya bisa dipenuhi konfigurasi standar | Tidak perlu kustom (*fit-to-standard*) | Hindari over-engineering; adopsi proses standar dulu |

Perhatikan baris terakhir tabel. Jalur "tidak perlu kustom" bukan basa-basi, melainkan pilihan paling murah yang sering terlewat.

## Kadang Jawaban Terbaik Adalah TIDAK Mengkustomisasi

Sebelum memilih jalur ekstensi, tanyakan lebih dulu apakah kustomisasi benar-benar perlu. Banyak "kebutuhan unik" gudang sebenarnya dapat dipenuhi konfigurasi standar EWM/S/4HANA. Pendekatan *fit-to-standard*, mengadopsi proses standar terlebih dahulu, kerap lebih murah dan lebih aman daripada ekstensi apa pun, bahkan ketika ekstensi itu sudah bersih di Level A.

Bagian ini jarang ditulis kompetitor, padahal di sinilah kejujuran teknis membangun kepercayaan. Ekstensi yang paling bersih sekalipun tetap menambah komponen yang harus dipelihara. Sebelum menulis satu baris kustomisasi, ada baiknya menjawab beberapa pertanyaan:

- Apakah kebutuhan ini benar-benar diferensiasi kompetitif, atau sekadar kebiasaan lama yang terbawa dari sistem sebelumnya?
- Apakah proses standar EWM sudah dievaluasi dan terbukti tidak memadai?
- Jika harus kustom, sudahkah dipilih level terbersih yang memungkinkan (idealnya Level A)?

Dalam praktik implementasi, keputusan *extensibility* paling murah diambil di fase *blueprint*, sebelum kustomisasi terlanjur ditulis. Di titik inilah pendampingan mitra seperti Soltius membantu memisahkan kebutuhan diferensiasi nyata dari kebiasaan yang sebetulnya cukup diselesaikan lewat konfigurasi.

Satu peringatan penting soal low-code: kemudahan membangun cepat bukan berarti bebas tata kelola. Tanpa kontrol, side-by-side dan low-code bisa memicu *shadow IT* dan aplikasi gudang yang beranak-pinak tanpa pemilik jelas. Clean core menghapus modifikasi inti, tetapi tidak menghapus kebutuhan akan tata kelola. Bangun cepat, kelola dengan disiplin.

## FAQ (Pertanyaan yang Sering Diajukan)

### Apa itu clean core?
Clean core adalah prinsip menjaga inti sistem SAP S/4HANA tetap standar dan mudah di-upgrade dengan memindahkan kustomisasi ke luar inti, lewat in-app extensibility, ABAP Cloud, atau aplikasi side-by-side di SAP BTP. SAP menyebut tujuannya mempercepat inovasi, menekan utang teknis, dan menyederhanakan upgrade. Untuk gudang, artinya menambah aturan atau integrasi tanpa mengunci sistem dari pembaruan.

### Apakah SAP EWM bisa dikustomisasi tanpa mengganggu upgrade?
Bisa. SAP menyediakan panduan clean core khusus untuk Extended Warehouse Management (EWM) dan menawarkan API di Level A (released) atau Level B (classic). Selama kustomisasi memakai released API atau *extension point* resmi, bukan memodifikasi objek standar, ekstensi gudang tetap upgrade-stable. Tersedia pula SAP Note yang memuat panduan extensibility EWM yang upgrade-safe untuk deployment private cloud maupun on-premise.

### Apa bedanya in-app dan side-by-side extensibility?
In-app (key-user) extensibility adalah perubahan terkendali di dalam sistem S/4HANA, misalnya menambah field, mengadaptasi layar, atau logika ringan lewat BAdI rilisan. Side-by-side extensibility membangun aplikasi terpisah (decoupled) di SAP BTP yang terhubung ke core lewat released API atau event. In-app cocok untuk perubahan kecil di inti; side-by-side untuk aplikasi atau antarmuka yang lebih besar dan independen.

### Apa itu SAP BTP dan SAP Build?
SAP Business Technology Platform (SAP BTP) adalah platform yang menyatukan pengembangan aplikasi, integrasi, data dan analitik, serta AI, dan menjadi fondasi ekstensi side-by-side. SAP Build adalah portofolio pengembangan low-code/pro-code di atas BTP: Build Apps (aplikasi), Build Process Automation (otomasi alur kerja plus RPA), dan Build Work Zone (portal). Keduanya memungkinkan menambah kemampuan gudang tanpa menyentuh inti.

### Kapan sebaiknya memakai low-code untuk aplikasi gudang?
Low-code (SAP Build) tepat untuk aplikasi pelengkap yang independen dari inti: layar operator mobile khusus, formulir inspeksi kualitas, atau otomasi alur persetujuan. Bangun side-by-side di SAP BTP dan hubungkan lewat released API. Namun terapkan tata kelola, karena tanpa kontrol low-code bisa memicu shadow IT. Untuk logika inti yang berat, developer extensibility ABAP Cloud sering lebih tepat.

### Mengapa custom code lama (ZWM) menyulitkan upgrade?
Kustomisasi cara lama sering memodifikasi objek standar atau menulis langsung ke tabel, pola yang SAP kategorikan Level D dengan risiko utang teknis tertinggi. Karena kode menempel pada objek yang bisa berubah saat upgrade, setiap pembaruan menuntut pengujian regresi dan penyesuaian ulang. Akibatnya, upgrade berubah menjadi proyek besar yang mahal dan berisiko, bukan langkah rutin.

### Apakah clean core hanya untuk versi cloud?
Tidak. Prinsip clean core berlaku untuk deployment on-premise S/4HANA maupun cloud. Fitur yang relevan untuk S/4HANA Cloud Private Edition juga berlaku untuk on-premise. Manfaatnya sama di mana pun sistem berjalan: inti yang standar membuat upgrade lebih mudah, menekan utang teknis, dan menyiapkan organisasi bila kelak berpindah ke cloud.

## Kesimpulan

Kustomisasi gudang tidak harus berbenturan dengan kemudahan upgrade. Kuncinya adalah memindahkan aturan khusus, integrasi perangkat, dan aplikasi operator ke lapisan ekstensi resmi, in-app, ABAP Cloud, atau side-by-side di SAP BTP, sambil menjaga inti tetap bersih dan menghindari pola Level D. Sama pentingnya, tahan diri untuk tidak mengkustomisasi apa yang sebenarnya bisa diselesaikan konfigurasi standar. Sebagai SAP Platinum Partner melalui United VARs, Soltius membantu perusahaan menerapkan prinsip clean core, memindahkan kustomisasi gudang ke SAP BTP dan SAP Build, agar sistem tetap mudah di-upgrade dan siap cloud.

Untuk mendiskusikan cara meng-extend warehouse management system Anda tanpa merusak upgrade, jelajahi pendekatan clean core-nya di soltius.co.id.
