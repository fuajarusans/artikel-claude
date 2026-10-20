---
title: "Dari Workflow ke RPA: Otomatisasi Proses Bisnis dengan SAP Build"
meta_title: "Otomatisasi Proses Low-Code: SAP Build Process Automation"
meta_description: "Pahami otomatisasi proses low-code dengan SAP Build: beda workflow, RPA, dan Document Information Extraction, plus cara memilih proses yang diotomasi."
slug: "otomatisasi-proses-low-code-sap-build"
language: "id"
primary_keyword: "Low Code Platform"
secondary_keywords:
  - "SAP Build Process Automation"
  - "RPA (Robotic Process Automation)"
  - "attended vs unattended bot"
  - "workflow orchestration"
  - "Document Information Extraction"
  - "otomatisasi proses bisnis"
  - "approval workflow"
  - "hyperautomation"
  - "integrasi S/4HANA"
  - "clean core"
internal_links:
  - url: "https://www.soltius.co.id/id/blog/low-code-and-no-code-platforms"
    anchor: "platform low-code"
  - url: "https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide"
    anchor: "SAP Clean Core"
  - url: "https://www.soltius.co.id/id/blog/manfaat-dan-modul-warehouse-management-system"
    anchor: "warehouse management system"
external_citations:
  - url: "https://www.sap.com/products/technology-platform/process-automation/features.html"
    context: "Cakupan SAP Build Process Automation: workflow, RPA, Document Information Extraction, konektor native ke S/4HANA"
  - url: "https://help.sap.com/docs/document-information-extraction/document-information-extraction/what-is-document-information-extraction"
    context: "Document Information Extraction mendukung ekstraksi berbasis template, pre-trained ML, dan LLM (premium edition)"
brief_id: "low-code-platform-03"
target_word_count: 1650
publish_month: "2026-10"
word_count: 2000
---

# Dari Workflow ke RPA: Otomatisasi Proses Bisnis dengan SAP Build

Masalah terbesar di banyak perusahaan bukan kurangnya aplikasi, melainkan proses yang macet di antara aplikasi. Dokumen persetujuan menumpuk di kotak masuk email, data faktur diketik ulang dari PDF ke sistem keuangan, dan tiga aplikasi yang tidak pernah saling bicara. Di sinilah janji sebuah [platform low-code](https://www.soltius.co.id/id/blog/low-code-and-no-code-platforms) sering disalahpahami: ia bukan sekadar alat membangun tampilan aplikasi yang cantik, melainkan cara mengotomasi alur kerja itu sendiri. Artikel ini membedah bagaimana otomatisasi proses low-code di ekosistem SAP bekerja, apa beda *workflow*, RPA, dan ekstraksi dokumen, serta bagaimana memilih proses mana yang layak diotomasi lebih dulu, lengkap dengan rambu kapan sebaiknya Anda menahan diri.

> **Ringkas:** Otomatisasi proses low-code adalah pembuatan alur kerja, bot, dan ekstraksi data secara visual dengan sedikit atau tanpa kode. Pada SAP, kemampuan ini diwakili SAP Build Process Automation, layanan di atas SAP BTP yang menyatukan *workflow orchestration*, RPA (bot *attended* dan *unattended*), serta *Document Information Extraction* (berbasis template dan LLM) dalam satu lingkungan.

Pembahasan bergerak dari definisi, membedah tiga mekanisme yang kerap dikira sama, membandingkan jenis bot, sampai pertanyaan paling praktis: proses apa yang sebaiknya Anda otomasi lebih dulu, dan kapan justru tidak.

## Apa Itu Otomatisasi Proses Low-Code dan Apa Itu SAP Build Process Automation?

Otomatisasi proses low-code adalah pendekatan membangun alur persetujuan, bot, dan pembacaan dokumen lewat antarmuka visual, bukan baris kode. Di SAP, wadahnya adalah SAP Build Process Automation: satu layanan yang menggabungkan orkestrasi alur kerja (*workflow orchestration*), RPA, dan ekstraksi dokumen di atas SAP BTP (*Business Technology Platform*), lengkap dengan aturan bisnis dan formulir.

Yang membedakannya dari sekadar pembangun aplikasi adalah fokusnya pada proses, bukan layar. SAP sendiri menyebut [SAP Build Process Automation](https://www.sap.com/products/technology-platform/process-automation/features.html) sebagai evolusi dari dua produk lamanya, SAP Workflow Management dan SAP Intelligent RPA, yang kini dilebur menjadi satu tempat. Jadi ketika Anda mendengar "low-code" lalu membayangkan hanya *form builder*, Anda melewatkan bagian yang paling mengubah cara kerja: mesin otomatisasi prosesnya.

Dalam satu lingkungan, Anda merakit beberapa komponen:

- **Workflow / process orchestration:** mengatur urutan tugas dan persetujuan antar-orang maupun antar-sistem.
- **RPA (*Robotic Process Automation*):** bot yang meniru klik dan ketikan manusia pada aplikasi yang tak punya API.
- **Document Information Extraction:** menarik data dari dokumen bisnis seperti faktur dan PO.
- **Business rules & decisions:** mengkodekan logika "jika-maka" agar keputusan rutin berjalan konsisten.
- **Forms:** titik masuk data dari pengguna ke dalam alur.

SAP Build Process Automation adalah satu komponen dari portofolio SAP Build yang lebih luas, berdampingan dengan SAP Build Apps (aplikasi visual), SAP Build Work Zone (portal), dan SAP Build Code (pengembangan berbantuan AI). Semuanya berjalan di atas SAP BTP, di luar inti S/4HANA. Tersedia pula bantuan asisten AI SAP untuk mempercepat pembuatan proses, formulir, dan skrip lewat perintah bahasa natural, meski cakupan fitur AI ini bergerak cepat sehingga sebaiknya dicek ke dokumentasi terbaru sebelum dijanjikan ke pengguna.

## Apa Bedanya Workflow, RPA, dan Document Information Extraction?

Singkatnya: *workflow* mengatur urutan tugas dan persetujuan antar-orang maupun sistem; RPA adalah bot yang meniru klik dan ketikan manusia pada aplikasi yang tidak punya API; Document Information Extraction membaca dan menarik data dari dokumen seperti faktur PDF. Ketiganya berbeda peran dan paling sering dipakai bersama, bukan saling menggantikan.

Kesalahpahaman paling umum adalah menganggap ketiganya sinonim. Padahal *workflow* adalah tulang punggung yang mengatur "siapa melakukan apa, kapan", sementara RPA hanya satu cara mengeksekusi satu langkah di dalam alur itu. RPA layak dipakai sebagai pilihan terakhir, yaitu ketika sistem sumber tidak menyediakan API dan bot terpaksa "mengetuk" antarmukanya.

Document Information Extraction (yang sedang di-*rebrand* SAP menjadi SAP Document AI) bukan OCR biasa. Ia memahami *field* bisnis seperti nomor faktur, jumlah, dan nama vendor, bukan sekadar mengubah gambar menjadi teks. Layanan ini mendukung ekstraksi berbasis *template* (preconfigured maupun custom) dan model AI terlatih; tersedia pula mode berbasis LLM pada *premium edition* yang menarik data tanpa perlu membuat *template* lebih dulu ([SAP Help](https://help.sap.com/docs/document-information-extraction/document-information-extraction/what-is-document-information-extraction)).

| Aspek | Workflow orchestration | RPA (bot) | Document Information Extraction |
|---|---|---|---|
| Fungsi inti | Mengatur urutan tugas & persetujuan antar-orang/sistem | Meniru aksi manusia (klik/ketik) di UI aplikasi | Membaca & menarik data dari dokumen/PDF |
| Kapan dipakai | Ada alur multi-langkah atau approval | Sistem sumber tak punya API | Input berupa dokumen (faktur, PO, surat jalan) |
| Bergantung pada | Definisi proses & peran | Kestabilan tampilan UI sistem sumber | Template atau model AI/LLM |
| Ketahanan | Tinggi (logika, bukan tampilan) | Rapuh bila UI berubah | Tinggi untuk dokumen berpola konsisten |
| Contoh | Approval cuti/pengadaan lintas divisi | Salin data antar aplikasi *legacy* tanpa API | Ekstrak data faktur dari PDF ke S/4HANA |

## Attended vs Unattended Bot: Mana untuk Kasus Apa?

*Attended bot* (digital assistant) berjalan di komputer pengguna dan didampingi manusia, cocok untuk tugas yang masih butuh validasi atau keputusan orang. *Unattended bot* (digital worker) berjalan di server dan dipicu jadwal, panggilan API, atau formulir tanpa campur tangan manusia. Dalam SAP Build Process Automation, satu Desktop Agent dikonfigurasi untuk salah satu mode saja, bukan keduanya sekaligus.

Pembedanya bukan kecanggihan, melainkan konteks pemakaian. Bot yang membantu agen *call-center* mengambil data pelanggan saat sedang menelepon jelas berbeda kebutuhannya dengan bot yang memosting ribuan faktur pada tengah malam. Mode *unattended* membutuhkan *desktop agent service* agar bisa berjalan tanpa operator. Lisensi otomatisasi *attended* pun umumnya dijual per blok koneksi, jadi perhitungan jumlah bot dan koneksi perlu masuk dalam *sizing* sejak awal, meski SAP tidak mematok harga publik untuk metrik ini.

| Aspek | Attended (digital assistant) | Unattended (digital worker) |
|---|---|---|
| Lokasi jalan | Workstation/komputer pengguna | Server |
| Pemicu | Dijalankan atau didampingi pengguna, *on-demand* | Jadwal, panggilan API, atau formulir |
| Pengawasan manusia | Ya, untuk validasi/keputusan | Tidak |
| Cocok untuk | Tugas yang masih butuh intervensi manusia | Proses *batch* volume tinggi, penuh aturan |
| Konfigurasi | Satu Desktop Agent = satu mode | Butuh *desktop agent service* |
| Contoh | Bot bantu agen saat melayani pelanggan | Rekonsiliasi semalam, posting faktur massal |

## Cara Memilih Proses yang Layak Diotomasi Lebih Dulu

Prioritaskan proses yang bervolume tinggi dan berulang, berbasis aturan jelas, rawan salah ketik manual, melibatkan beberapa sistem, dan punya ROI terukur. Proses seperti entri faktur, rekonsiliasi data, atau pembuatan *sales order* dari lampiran email biasanya memberi hasil tercepat. Sebaliknya, tahan dulu proses yang masih sering berubah atau penuh pengecualian.

Urutkan kandidat berdasarkan lima kriteria berikut:

1. **Volume tinggi dan berulang.** ROI otomatisasi berbanding lurus dengan frekuensi; proses yang dijalankan ratusan kali sehari memberi dampak jauh lebih besar daripada yang sesekali.
2. **Berbasis aturan yang jelas.** Semakin sedikit pengecualian, semakin mudah dikodekan dan semakin stabil hasilnya.
3. **Rawan salah ketik manual.** Di sinilah otomatisasi paling terasa, karena ia menekan *error* dan *rework* yang selama ini tak terlihat di laporan.
4. **Lintas sistem.** Proses yang memaksa orang menyalin data dari satu aplikasi ke aplikasi lain adalah kandidat utama; otomatisasi menghapus "copy-paste" itu.
5. **ROI terukur.** Pilih proses yang penghematannya bisa dibuktikan dalam satuan waktu atau biaya, bukan sekadar "terasa lebih enak".

Ada juga daftar yang sebaiknya **jangan** diotomasi dulu: proses yang masih tidak stabil, penuh pengecualian, atau yang alurnya sendiri belum beres. Mengotomasi proses semacam itu sama dengan mengunci kekacauan ke dalam kode.

Area gudang dan logistik sering menjadi ladang otomatisasi paling subur, dari penerimaan barang, pencocokan surat jalan, hingga ekstraksi data dokumen pengiriman dan persetujuan *exception*. Bila operasi Anda berpusat di sana, memahami bagaimana sebuah [warehouse management system](https://www.soltius.co.id/id/blog/manfaat-dan-modul-warehouse-management-system) menata proses tersebut akan membantu menentukan titik otomatisasi yang tepat.

## Jebakan Otomatisasi: Mengotomasi Proses yang Rusak Justru Memperbesar Masalah

Otomatisasi mempercepat apa pun yang Anda beri kepadanya, termasuk kesalahan. Mengotomasi proses yang berantakan hanya membuat kekacauan berjalan lebih cepat dan lebih sulit dilacak. Karena itu, perbaiki dan sederhanakan prosesnya dulu, baru bangun bot. Pertimbangkan juga bahwa RPA secara teknis rapuh: karena meniru tampilan layar, bot bisa gagal saat antarmuka sistem sumber berubah.

RPA adalah otomatisasi di lapisan presentasi (*surface automation*). Sifat inilah, bukan cacat produk, yang membuatnya sensitif terhadap perubahan versi atau *layout* aplikasi. Di lapangan, bot yang kemarin mulus bisa berhenti bekerja hanya karena sebuah tombol berpindah posisi. Maka kaidah yang lebih sehat adalah: gunakan konektor atau API lebih dulu, dan sisakan RPA untuk celah yang benar-benar tak ber-API. Untungnya SAP menyediakan konektor *native* dan ratusan konten siap pakai untuk S/4HANA, SAP sempat menyebut sekitar 120 paket konten per 2023, sehingga tidak semua hal harus diselesaikan dengan bot layar.

Pekerjaan yang paling menentukan justru terjadi sebelum bot pertama dibangun: memetakan proses apa adanya, memangkas langkah yang tidak perlu, dan menyepakati aturan yang jelas. Bagian ini jarang ditonjolkan vendor, padahal di situlah sebagian besar keberhasilan ditentukan.

Satu hal lagi yang membedakan otomatisasi yang matang dari yang sekadar cepat jadi: tempat ia berjalan. Pada SAP, otomatisasi dan ekstensi berjalan di SAP BTP, berdampingan dengan inti S/4HANA alih-alih menempel di dalamnya. Pendekatan ini sejalan dengan prinsip [SAP Clean Core](https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide), yang menjaga inti tetap standar dan mudah di-*upgrade*. Tren ini juga yang mendorong lonjakan *hyperautomation*, yakni penggabungan RPA, workflow, dan AI/ML dalam satu pendekatan; menurut proyeksi riset pasar, nilai pasar RPA dan *hyperautomation* bergerak dari sekitar USD 16,73 miliar pada 2025 menuju sekitar USD 20,46 miliar pada 2026 (sajikan sebagai proyeksi, bukan realisasi).

## FAQ (Pertanyaan yang Sering Diajukan)

### Apa itu SAP Build Process Automation?

SAP Build Process Automation adalah layanan low-code di atas SAP BTP yang menyatukan tiga kemampuan dalam satu lingkungan visual: *workflow orchestration* (mengatur alur tugas dan persetujuan), RPA (bot yang meniru aksi manusia di layar sistem), serta Document Information Extraction untuk membaca data dari dokumen. SAP membangunnya dari penggabungan dua produk lama, SAP Workflow Management dan SAP Intelligent RPA, menjadi satu platform.

### Apa bedanya RPA dan workflow?

*Workflow* mengorkestrasi urutan langkah, tugas, dan persetujuan antar-orang maupun antar-sistem, mengatur "siapa melakukan apa, kapan". RPA adalah bot yang meniru klik dan ketikan manusia pada antarmuka sistem yang tidak punya API. Workflow mengatur alur, RPA mengeksekusi tugas repetitif di dalam alur itu. Keduanya kerap dipakai bersama, bukan saling menggantikan.

### Apa itu attended dan unattended bot?

*Attended bot* (digital assistant) berjalan di komputer pengguna dan didampingi manusia, cocok untuk tugas yang masih butuh validasi atau keputusan orang. *Unattended bot* (digital worker) berjalan di server tanpa campur tangan manusia, dipicu jadwal, API, atau formulir. Dalam SAP Build Process Automation, satu Desktop Agent dikonfigurasi untuk salah satu mode saja.

### Apa itu Document Information Extraction?

Document Information Extraction (kini juga disebut SAP Document AI) adalah layanan yang menarik data dari dokumen bisnis terstruktur maupun tidak, seperti faktur dan PO dalam PDF. Ia mendukung ekstraksi berbasis *template* (preconfigured atau custom) dan model AI terlatih; tersedia pula mode berbasis LLM pada *premium edition* yang mengekstrak data tanpa perlu membuat *template* lebih dulu.

### Proses apa yang paling cocok diotomasi lebih dulu?

Prioritaskan proses bervolume tinggi dan berulang, berbasis aturan jelas, rawan salah ketik manual, melibatkan beberapa sistem, dan ber-ROI terukur, misalnya entri faktur, rekonsiliasi data, atau pembuatan *sales order* dari lampiran email. Hindari mengotomasi proses yang masih sering berubah, penuh pengecualian, atau yang alurnya belum beres; otomatisasi di atas proses buruk hanya mempercepat kesalahan.

### Apakah RPA aman dan tahan lama?

RPA aman bila diberi tata kelola yang benar: kredensial terkelola, hak akses minimal, dan *audit log*. Namun secara teknis ia rapuh, karena meniru UI, bot bisa gagal ketika tampilan sistem sumber berubah. Untuk sistem yang punya API, seperti S/4HANA yang menyediakan konektor *native* di SAP Build Process Automation, integrasi API lebih tahan lama daripada bot layar. RPA sebaiknya untuk celah yang tak ber-API.

### Apakah perlu kemampuan coding untuk memakainya?

Tidak untuk sebagian besar kasus. SAP Build Process Automation dirancang low-code dengan antarmuka *drag-and-drop*, *template* proses, dan konten siap pakai, sehingga pengguna bisnis (*citizen developer*) bisa membangun alur dan bot sederhana. Untuk logika kompleks atau integrasi lanjutan, keterampilan teknis tetap membantu, dan bantuan asisten AI SAP dapat mempercepat pembuatan proses, formulir, serta skrip lewat perintah bahasa natural.

## Kesimpulan

Kembali ke masalah di awal: email persetujuan yang menumpuk dan faktur yang diketik ulang bukanlah takdir operasional. Keduanya adalah proses yang bisa dipetakan, disederhanakan, lalu diotomasi secara bertahap dengan kombinasi *workflow*, RPA, dan ekstraksi dokumen. Kunci keberhasilannya bukan pada bot tercanggih, melainkan pada pilihan proses yang tepat dan fondasi yang bersih. Sebagai SAP Platinum Partner melalui United VARs dan bagian dari Metrodata Group sejak 1998, Soltius membantu perusahaan merancang otomatisasi proses di SAP Build, dari pemetaan proses hingga implementasi, tanpa merusak inti S/4HANA.

Untuk menilai proses mana di perusahaan Anda yang paling layak diotomasi lebih dulu, mulai percakapannya di soltius.co.id.
