---
title: "7 Aplikasi Low-Code untuk Back-Office: Keuangan, SDM, dan Pengadaan"
meta_title: "7 Aplikasi Low-Code Back-Office: Keuangan, SDM, Pengadaan"
meta_description: "Tujuh use case aplikasi low-code untuk back-office: keuangan, SDM, pengadaan. Plus kriteria memilih prioritas dan cara terhubung ke SAP tanpa menyentuh inti."
slug: "aplikasi-low-code-back-office"
language: "id"
primary_keyword: "Low Code Platform"
secondary_keywords:
  - "use case low-code"
  - "aplikasi back-office"
  - "otomatisasi keuangan"
  - "aplikasi SDM"
  - "approval workflow"
  - "aplikasi pendamping ERP"
  - "SAP Build Apps"
  - "SAP Build Process Automation"
  - "citizen developer"
  - "clean core"
internal_links:
  - url: "https://www.soltius.co.id/id/blog/low-code-and-no-code-platforms"
    anchor: "platform low-code"
  - url: "https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide"
    anchor: "SAP Clean Core"
  - url: "https://www.soltius.co.id/id/blog/manfaat-dan-modul-warehouse-management-system"
    anchor: "warehouse management system"
external_citations:
  - url: "https://www.sap.com/products/technology-platform/build.html"
    context: "SAP Build sebagai portofolio low-code (empat komponen) di atas SAP BTP"
  - url: "https://www.gartner.com/en/documents/7146430"
    context: "Proyeksi pertumbuhan pasar dan adopsi teknologi pengembangan low-code (Gartner)"
brief_id: "low-code-platform-04"
target_word_count: 1650
publish_month: "2026-10"
word_count: 2101
---

# 7 Aplikasi Low-Code untuk Back-Office: Keuangan, SDM, dan Pengadaan

Tim keuangan menutup buku sambil mengejar persetujuan yang tersangkut di email. Tim SDM menyiapkan karyawan baru lewat rangkaian formulir cetak dan spreadsheet yang disalin berulang. Tim pengadaan mengejar tanda tangan dari satu meja ke meja berikutnya. ERP sudah terpasang dan transaksi inti berjalan, tetapi "jarak terakhir" proses back-office ini tetap manual. Artikel ini bukan ulasan umum tentang [platform low-code](https://www.soltius.co.id/id/blog/low-code-and-no-code-platforms), melainkan peta use case konkret: tujuh aplikasi yang paling cepat berdampak di keuangan, SDM, dan pengadaan, lengkap dengan kriteria memilih mana yang didahulukan dan kapan sebaiknya Anda tidak membangunnya sama sekali.

> **Ringkas:** Aplikasi low-code back-office adalah aplikasi pendamping ERP yang dibangun cepat dengan sedikit kode untuk menutup celah proses manual di keuangan, SDM, dan pengadaan, seperti formulir pengajuan, approval berjenjang, dan onboarding, tanpa mengubah inti sistem ERP. Aplikasi ini berjalan *side-by-side* (berdampingan) di atas platform seperti SAP BTP dan terhubung ke S/4HANA lewat API resmi.

Kita akan menelusuri mekanismenya, tujuh use case nyata, cara menghubungkannya ke SAP tanpa menyentuh inti, lima kriteria memilih prioritas, lalu batas jujurnya: kapan low-code justru bukan jawaban.

## Mengapa "Jarak Terakhir" Proses Back-Office Masih Manual Meski Sudah Ada ERP?

ERP seperti S/4HANA dirancang untuk mengelola transaksi inti: pesanan, jurnal, stok, dan penggajian. Namun proses di sekelilingnya, seperti formulir pengajuan, persetujuan berlapis, rekonsiliasi kecil, dan onboarding lintas divisi, kerap tidak tercakup modul standar. Membangun aplikasi khusus dianggap mahal dan lama, sehingga celah "jarak terakhir" (*last mile*) ini tetap dikerjakan lewat spreadsheet dan email.

Celah itu bukan kegagalan ERP, melainkan batas desainnya. Sistem inti menjaga kebenaran data transaksional, bukan menampung setiap variasi formulir dan alur persetujuan lokal tiap perusahaan. Akibatnya muncul lapisan kerja bayangan: file Excel yang jadi "sumber kebenaran" tandingan, grup chat tempat approval diberikan, dan entri ulang manual yang rawan salah ketik.

Di sinilah *low-code* (pengembangan dengan sedikit kode) berperan sebagai lapisan pendamping. Alih-alih memodifikasi ERP, tim membangun aplikasi tipis di atasnya yang membaca dan menulis data inti lewat antarmuka resmi. SAP menyediakan portofolio ini melalui **SAP Build**, yang menurut halaman produk SAP terdiri dari empat komponen: Build Apps untuk aplikasi dan formulir visual, Build Process Automation untuk alur kerja dan otomatisasi, Build Work Zone untuk portal, dan Build Code untuk pengembangan berbantuan AI. Keempatnya berjalan di atas SAP BTP (*Business Technology Platform*).

Minat terhadap pendekatan ini bukan tren sesaat. Menurut Gartner, pada 2025 sekitar 70% aplikasi baru yang dikembangkan organisasi akan memakai teknologi low-code atau no-code, naik dari kurang dari 25% pada 2020. Gartner juga memproyeksikan pasar teknologi pengembangan low-code terus tumbuh dengan laju majemuk sekitar 14% per tahun menuju kisaran USD 58 miliar pada 2029. Angka ini perlu dibaca sebagai proyeksi arah, bukan janji hasil.

## 7 Use Case Low-Code di Back-Office yang Paling Cepat Berdampak

Use case yang paling layak dibangun lebih dulu punya pola sama: bervolume tinggi, melibatkan banyak persetujuan, dan menyeberangi lebih dari satu divisi atau sistem. Berikut tujuh contoh lintas fungsi keuangan, SDM, dan pengadaan. Tiap item ditulis sebagai blok mandiri (masalah, yang dibangun, dampak), dan dampaknya dibingkai sebagai pola lapangan, bukan angka persentase tanpa sumber.

1. **Keuangan, pengajuan dan persetujuan pengeluaran.** Masalah: reimbursement dan pengeluaran tersebar di email dengan lampiran tak seragam. Yang dibangun: formulir intake di Build Apps plus alur persetujuan berjenjang di Build Process Automation yang menulis balik ke S/4HANA. Dampak: jejak approval terekam rapi dan bolak-balik konfirmasi berkurang.
2. **Keuangan, portal penagihan atau collection tracker.** Masalah: status tagihan dan tindak lanjut tersebar di catatan pribadi. Yang dibangun: dasbor pemantau penagihan yang menarik data dari modul keuangan. Dampak: tim melihat satu daftar prioritas, bukan sepuluh versi spreadsheet.
3. **SDM, onboarding dan offboarding.** Masalah: karyawan baru menunggu akun, aset, dan akses yang diurus terpisah oleh IT, GA, dan SDM. Yang dibangun: orkestrasi tugas lintas divisi di Build Process Automation. Dampak: satu alur memicu semua langkah, tidak ada yang terlewat.
4. **SDM, *self-service* cuti dan klaim.** Masalah: pengajuan cuti dan klaim lewat formulir kertas yang lambat direkap. Yang dibangun: aplikasi pengajuan mandiri dengan validasi saldo. Dampak: karyawan mengajukan sendiri, atasan menyetujui dari ponsel.
5. **Pengadaan, permintaan pembelian dan persetujuan berjenjang.** Masalah: purchase request berpindah tangan tanpa jejak yang jelas. Yang dibangun: *approval workflow* (alur persetujuan) yang menulis permintaan sah ke S/4HANA via API. Dampak: persetujuan lebih cepat dan dapat diaudit.
6. **Pengadaan, registrasi dan penilaian vendor.** Masalah: data calon vendor masuk lewat email dan sulit dibandingkan. Yang dibangun: portal registrasi ringan dengan formulir penilaian terstandar. Dampak: perbandingan vendor jadi apple-to-apple.
7. **Layanan internal, helpdesk dan permintaan aset.** Masalah: permintaan dukungan dan aset bercampur di chat. Yang dibangun: formulir tiket sederhana dengan status yang terlacak. Dampak: antrean jelas dan tidak ada permintaan yang hilang.

Sebagian use case pengadaan dan layanan internal bersinggungan dengan operasi gudang, misalnya penerimaan barang yang semestinya memperbarui stok. Di titik itu aplikasi pendamping dapat menjembatani formulir intake dengan sistem [warehouse management system](https://www.soltius.co.id/id/blog/manfaat-dan-modul-warehouse-management-system) tanpa menggandakan data, sehingga satu entri cukup untuk kedua sisi.

| # | Fungsi | Use case | Komponen SAP Build utama |
|---|---|---|---|
| 1 | Keuangan | Pengajuan & persetujuan pengeluaran | Build Process Automation (+ Build Apps) |
| 2 | Keuangan | Portal penagihan / collection tracker | Build Apps (+ Process Automation) |
| 3 | SDM | Onboarding / offboarding | Build Process Automation |
| 4 | SDM | Self-service cuti / klaim | Build Apps (+ Process Automation) |
| 5 | Pengadaan | Permintaan pembelian & approval | Build Process Automation |
| 6 | Pengadaan | Registrasi & penilaian vendor | Build Apps (+ Process Automation) |
| 7 | Layanan internal | Helpdesk / permintaan aset | Build Apps + Process Automation |

Perhatikan bahwa komponennya berbeda per kasus. Formulir dan portal adalah teritori Build Apps, sedangkan persetujuan berjenjang dan otomatisasi adalah teritori Build Process Automation yang juga menyediakan RPA (*Robotic Process Automation*) dan ekstraksi data dokumen untuk invoice. Menyebut "Build Apps" untuk semua kebutuhan adalah ketidakakuratan halus yang sebaiknya dihindari.

## Bagaimana Aplikasi Low-Code Terhubung ke SAP Tanpa Menyentuh Inti?

Aplikasi low-code terhubung ke SAP lewat lapisan integrasi, bukan modifikasi kode inti. SAP Build Apps memanggil S/4HANA melalui **BTP Destinations**, yaitu definisi endpoint HTTP ke OData atau REST API resmi. Untuk S/4HANA on-premise, koneksi aman memakai SAP Cloud Connector dengan *principal propagation* agar identitas pengguna tetap terjaga. Sistem non-SAP dihubungkan lewat HTTP destination dengan API key.

Kuncinya adalah posisi aplikasi: ia hidup di SAP BTP, berdampingan dengan ERP, bukan di dalamnya. Karena hanya memanggil antarmuka yang sudah dirilis resmi, inti S/4HANA tetap standar. Build Process Automation pun dapat mengonsumsi OData API dari S/4HANA sebagai "action" di dalam alur kerjanya, sehingga sebuah persetujuan bisa membaca dan menulis data ERP yang sah tanpa menyentuh tabel inti.

Pola inilah yang membuat aplikasi pendamping sejalan dengan prinsip [SAP Clean Core](https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide): kustomisasi dipindahkan ke luar inti agar sistem tetap aman di-upgrade. Namun kepatuhan clean core tidak otomatis; ia bergantung pada disiplin memakai API resmi dan meninjau integrasi, bukan sekadar karena aplikasinya kebetulan ada di BTP.

| Target sistem | Mekanisme | Kunci menjaga inti |
|---|---|---|
| S/4HANA Cloud | BTP Destination ke OData/REST API resmi | Pakai API yang sudah dirilis, tanpa modifikasi inti |
| S/4HANA on-premise | BTP Destination + Cloud Connector + principal propagation | Tunnel aman; identitas pengguna on-prem terjaga |
| Sistem non-SAP | HTTP destination + API key | Integrasi di lapisan BTP, bukan di dalam ERP |

Catatan teknis: langkah antarmuka rinci bisa berubah antar-versi, jadi yang penting dipegang adalah mekanismenya, bukan urutan klik tertentu.

## Proses Back-Office Mana yang Sebaiknya Didahulukan? Lima Kriteria

Dahulukan proses yang bervolume tinggi, bertumpuk persetujuan manual, rawan salah entri, menyeberangi divisi atau sistem, dan punya dampak atau kebutuhan audit yang jelas. Semakin banyak kriteria yang terpenuhi, semakin besar kemungkinan aplikasi low-code memberi hasil cepat. Kerangka ini bersifat heuristik untuk menyaring kandidat, bukan rumus bernomor yang kaku.

| Kriteria | Pertanyaan diagnostik | Mengapa penting |
|---|---|---|
| Volume & frekuensi | Seberapa sering dan banyak prosesnya? | Dampak menskala dengan volume |
| Persetujuan manual | Berapa lapis persetujuan? | Alur otomatis memangkas bottleneck terbesar |
| Rawan salah entri | Apakah banyak salin-tempel manual? | Formulir tervalidasi menekan error dan rework |
| Lintas divisi/sistem | Apakah melibatkan lebih dari satu tim? | Orkestrasi adalah celah yang jarang ditangani modul |
| Dampak & kepatuhan | Apakah hasil atau jejak audit jelas? | Jadikan prioritas yang bisa dipertanggungjawabkan |

Satu hal yang menentukan keberhasilan jangka panjang adalah tata kelola. Tanpa pemisahan environment dev, test, dan prod, kepemilikan aplikasi, serta rencana memensiunkan yang tak terpakai, "spreadsheet pindah jadi aplikasi" hanya memindahkan kekacauan. Sebagai mitra implementasi SAP, Soltius menekankan pagar tata kelola sejak awal agar pengembangan cepat tidak berubah menjadi *app sprawl* (pembengkakan aplikasi liar).

## Kapan Back-Office Justru Tidak Butuh Aplikasi Low-Code

Hindari low-code bila prosesnya jarang dipakai, sudah ditangani modul SAP standar, menuntut kontrol dan audit super-ketat, atau sebenarnya perlu diperbaiki dulu sebelum didigitalkan. Membangun ulang yang sudah ada hanya menambah utang teknis. Bagian ini jarang ditulis vendor lain, padahal di sinilah kejujuran justru menghemat anggaran Anda.

Banyak proses back-office yang "diminta" sebagai aplikasi baru sebenarnya sudah punya rumahnya di portofolio SAP. Beberapa contoh yang perlu dicek lebih dulu:

- **Expense dan reimbursement** sering sudah tercakup SAP Concur. Membangun ulang di low-code jarang sepadan.
- **Onboarding, cuti, dan employee self-service** adalah wilayah SAP SuccessFactors bila perusahaan sudah berlangganan.
- **Pengadaan dan manajemen vendor end-to-end** adalah teritori SAP Ariba, dengan modul registrasi dan penilaian vendor bawaan.
- **Persetujuan purchase requisition standar** sudah ditangani flexible workflow di S/4HANA, dan penagihan oleh fungsi Collections di dalamnya.

Artinya, realisme use case SDM dan pengadaan bergantung pada apakah perusahaan sudah memiliki modul penuh tersebut. Jika sudah, low-code paling tepat mengisi celah yang belum tercakup, misalnya orkestrasi lintas sistem saat karyawan baru masuk, bukan membangun ulang fungsi inti. Proses dengan kontrol teregulasi ketat, seperti tutup buku berpenyelia audit, sebaiknya tetap di modul inti. Dan proses yang kacau sebaiknya dirapikan dulu, karena mengotomasi kekacauan hanya mempercepat kekacauan.

## FAQ (Pertanyaan yang Sering Diajukan)

### Apa contoh aplikasi low-code untuk keuangan?

Contoh paling cepat berdampak adalah aplikasi pengajuan dan persetujuan pengeluaran berjenjang, portal penagihan atau collection tracker, dan alat rekonsiliasi ringan yang memvalidasi dokumen. Dengan SAP Build Process Automation, persetujuan dapat memanggil data S/4HANA lewat OData API, sementara ekstraksi dokumen membantu menarik data dari invoice. Semuanya berperan sebagai pendamping ERP, bukan pengganti modul keuangan inti.

### Apakah low-code cocok untuk HR?

Cocok untuk menutup celah proses, bukan menggantikan sistem HR inti. Onboarding lintas divisi, self-service cuti dan klaim, serta checklist aset karyawan adalah kandidat kuat. Namun jika perusahaan sudah memakai SAP SuccessFactors, banyak fungsi ini sudah tersedia standar, sehingga low-code sebaiknya dipakai untuk langkah "jarak terakhir" yang tidak tercakup modul, misalnya orkestrasi tugas lintas sistem saat karyawan baru masuk.

### Bagaimana low-code membantu pengadaan?

Low-code mempercepat sisi intake dan persetujuan: formulir permintaan pembelian, approval berjenjang, hingga portal registrasi dan penilaian vendor. Dengan SAP Build Process Automation, persetujuan berjenjang bisa dijalankan sebagai alur kerja yang menulis kembali ke S/4HANA via API. Untuk pengadaan end-to-end dan manajemen vendor penuh, SAP Ariba adalah modul standarnya; low-code paling pas menutup celah yang belum ditangani.

### Apakah aplikasi low-code bisa terhubung ke SAP?

Bisa, dan inilah inti nilainya. SAP Build Apps terhubung ke S/4HANA melalui BTP Destinations (endpoint HTTP ke OData atau REST API). Untuk S/4HANA on-premise, koneksi aman memakai SAP Cloud Connector dengan principal propagation sehingga identitas pengguna tetap terjaga. Sistem non-SAP dihubungkan lewat HTTP destination dengan API key. Karena aplikasi hidup di SAP BTP, inti S/4HANA tidak disentuh.

### Siapa yang membangunnya, IT atau tim bisnis?

Keduanya, dengan pembagian peran. *Citizen developer* (pengembang dari kalangan bisnis) dapat membangun formulir dan alur sederhana karena low-code mengurangi kebutuhan menulis kode. Namun integrasi ke S/4HANA, keamanan, dan arsitektur tetap melibatkan IT. Model yang sehat adalah pagar tata kelola: bisnis membangun cepat di dalam environment dan API yang sudah disiapkan IT, bukan membangun bebas yang berisiko menjadi *shadow IT*.

### Apakah aman untuk data keuangan dan karyawan?

Bisa aman jika tata kelolanya benar. Karena aplikasi berjalan di SAP BTP dan mengakses S/4HANA lewat API resmi dengan autentikasi, kontrol akses ERP tetap berlaku dan identitas pengguna on-premise terjaga lewat principal propagation. Risiko muncul bukan dari platformnya, melainkan dari tata kelola longgar: siapa boleh membangun apa, peninjauan sebelum rilis, dan pemisahan environment dev, test, serta prod.

### Kapan sebaiknya tidak pakai low-code untuk back-office?

Hindari bila prosesnya jarang dipakai, sudah ditangani modul SAP standar seperti Concur, SuccessFactors, atau Ariba, menuntut kontrol dan audit super-ketat, atau sebenarnya perlu diperbaiki dulu sebelum didigitalkan. Membangun ulang yang sudah ada hanya memindahkan masalah dari spreadsheet ke app sprawl. Pilih proses yang bercelah nyata, lintas sistem, dan bervolume tinggi.

## Kesimpulan

Kembali ke tim keuangan, SDM, dan pengadaan di awal tadi: masalah mereka bukan ERP yang kurang kuat, melainkan "jarak terakhir" yang belum punya rumah. Low-code paling bernilai ketika dipakai dengan presisi, untuk celah proses yang nyata, lintas sistem, dan bervolume tinggi, bukan untuk membangun ulang yang sudah ada. Dengan solusi Digital Platform dan layanan Implementation, Soltius mendampingi perusahaan membangun aplikasi pendamping SAP di atas SAP Build untuk menutup celah back-office tanpa membebani tim IT inti, lengkap dengan tata kelola yang menjaganya tetap rapi.

Untuk mendiskusikan proses back-office mana yang paling layak didahulukan di perusahaan Anda, jelajahi solusi dan mulai percakapan di soltius.co.id.
