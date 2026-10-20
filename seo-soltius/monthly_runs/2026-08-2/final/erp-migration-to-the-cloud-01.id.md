---
title: "Hyperscaler untuk Migrasi ERP ke Cloud: AWS, Azure, atau GCP?"
meta_title: "Migrasi ERP ke Cloud: Hyperscaler AWS, Azure, GCP"
meta_description: "Migrasi ERP ke cloud lewat RISE with SAP berjalan di AWS, Azure, Google Cloud, atau IBM. Panduan memilih region Indonesia, cakupan BTP, dan kepatuhan UU PDP."
slug: "migrasi-erp-ke-cloud-pilih-hyperscaler"
language: "id"
primary_keyword: "ERP migration to the cloud"
secondary_keywords:
  - "migrasi ERP ke cloud"
  - "RISE with SAP hyperscaler"
  - "SAP S/4HANA Cloud Private Edition"
  - "AWS untuk SAP"
  - "Microsoft Azure SAP"
  - "Google Cloud SAP"
  - "data residency Indonesia"
  - "region cloud Jakarta"
  - "SAP BTP"
  - "UU PDP cloud"
  - "lock-in RISE with SAP"
internal_links:
  - url: "https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud"
    anchor: "migrasi ERP ke cloud"
  - url: "https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide"
    anchor: "SAP Clean Core"
  - url: "https://www.soltius.co.id/id/blog/data-warehouse-solutions"
    anchor: "data warehouse solutions"
external_citations:
  - url: "https://docs.aws.amazon.com/sap/latest/general/rise.html"
    context: "SAP memegang dan mengelola akun hyperscaler serta memikul SLA, operasi cloud, dan dukungan teknis dalam RISE with SAP"
  - url: "https://peraturan.go.id/id/uu-no-27-tahun-2022"
    context: "UU Pelindungan Data Pribadi No. 27/2022 berlaku penuh 17 Oktober 2024, pendorong data residency"
brief_id: "erp-migration-to-the-cloud-01"
target_word_count: 1650
publish_month: "2026-08-2"
word_count: 1843
---

# Hyperscaler untuk Migrasi ERP ke Cloud: AWS, Azure, atau GCP?

Sebuah tim IT baru saja menandatangani kontrak RISE with SAP. Anggaran disetujui, jadwal disusun, lalu muncul pertanyaan yang jarang terjawab tuntas dalam bahasa Indonesia: sistem ini sebenarnya berjalan di atas infrastruktur siapa, AWS, Microsoft Azure, Google Cloud, atau IBM? Bagi banyak perusahaan yang menjalankan [migrasi ERP ke cloud](https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud), pilihan hyperscaler ini terasa teknis dan berisiko salah, padahal kerangka keputusannya bisa disederhanakan. Artikel ini membedah apa yang benar-benar dipengaruhi oleh pilihan tersebut, mulai dari ketersediaan region di Indonesia, cakupan layanan, hingga struktur komersial, dan, yang lebih jarang dibahas, apa yang justru tidak dipengaruhinya sama sekali.

> **Ringkasnya:** Hyperscaler dalam RISE with SAP adalah penyedia infrastruktur cloud publik (AWS, Microsoft Azure, Google Cloud, atau IBM Cloud) tempat SAP menjalankan dan mengelola SAP S/4HANA Cloud Private Edition milik pelanggan. Dalam skema ini SAP yang memegang akun hyperscaler dan memikul SLA, operasi, serta dukungan teknis; pelanggan cukup memilih penyedianya.

## Apa peran hyperscaler dalam RISE with SAP saat migrasi ERP ke cloud?

Dalam RISE with SAP, hyperscaler adalah tempat sistem berjalan, tetapi SAP yang mengoperasikannya. SAP memegang dan mengelola akun cloud, memikul SLA menyeluruh, operasi harian, dan dukungan teknis. Pelanggan memilih penyedia di kontrak, namun tidak menandatangani perjanjian infrastruktur langsung dengan AWS, Azure, atau Google. Inilah yang membuat RISE disebut layanan terkelola.

Perbedaan ini terdengar sepele, tapi konsekuensinya besar. Karena SAP yang memiliki dan mengelola akun hyperscaler tempat sistem di-deploy, beban operasional harian, patching, dan pemenuhan SLA berpindah dari tim internal Anda ke SAP (AWS, dokumentasi ["RISE with SAP on AWS Cloud"](https://docs.aws.amazon.com/sap/latest/general/rise.html)). Sistemnya bersifat *single-tenant* (terisolasi per pelanggan), sehingga lingkungan Anda tidak berbagi dengan tenant lain.

Yang perlu diluruskan sejak awal: *memilih* hyperscaler tidak sama dengan *mengontrak* hyperscaler. Anda menyatakan preferensi di Order Form, tetapi akun dan tagihan infrastruktur tetap dipegang SAP. Perusahaan tetap boleh membuka akun cloud sendiri yang terpisah untuk ekstensi atau lapisan data, dan akun itu memang tidak dikelola SAP.

Pergeseran ini bukan tren abstrak. *Mainstream maintenance* untuk SAP Business Suite 7, termasuk ECC 6.0, berakhir 31 Desember 2027, dengan perpanjangan opsional hingga 2030 yang dikenai premium dua poin persentase di atas basis pemeliharaan (SAP). Tenggat itulah yang mendorong banyak perusahaan menimbang migrasi ke S/4HANA sekarang, bukan nanti, sekaligus memaksa keputusan soal infrastruktur cloud ikut mengemuka.

## Empat pilihan hyperscaler untuk SAP: AWS, Azure, Google Cloud, dan IBM

RISE with SAP dapat berjalan di empat hyperscaler resmi: Amazon Web Services (AWS), Microsoft Azure, Google Cloud, dan IBM Cloud, atau di data center milik SAP sendiri. Pelanggan memilih salah satu di Order Form kontrak. Huawei Cloud, meski aktif di pasar Indonesia, bukan bagian dari daftar hyperscaler RISE resmi.

Empat nama itu tampak setara di atas kertas, tetapi ada nuansa yang berguna diketahui sebelum negosiasi:

- **AWS** dan **Google Cloud** adalah opsi penuh, namun bila bukan preferensi komersial default SAP di region Anda, keduanya sering perlu dinegosiasikan secara eksplisit.
- **Microsoft Azure** kerap menjadi default komersial RISE di banyak region, buah dari hubungan co-sell dan co-develop SAP dengan Microsoft. Ini pola komersial yang sering ditemui, bukan aturan teknis yang kaku.
- **IBM Cloud** naik menjadi hyperscaler penuh untuk RISE melalui IBM Power Virtual Server, tersertifikasi pada 2025 (IBM/SAPinsider). Ini satu-satunya opsi yang membawa teknologi IBM Power bersertifikasi SAP, relevan bagi pengguna estate IBM Power yang sudah ada.
- **Data center milik SAP** tetap tersedia sebagai opsi non-hyperscaler, bergantung ketersediaan di wilayah Anda.

Karena keempatnya sama-sama bersertifikasi SAP, perdebatan "mana yang paling cepat" jarang produktif. Yang lebih menentukan justru muncul di pertanyaan berikutnya: di mana datanya duduk.

## Apakah data SAP Anda bisa berada di region Indonesia?

Bisa. Tiga hyperscaler RISE terbesar sudah memiliki region data center di Jakarta: AWS Asia Pacific/Jakarta sejak Desember 2021, Google Cloud sejak 2020, dan Microsoft Azure Indonesia Central yang *General Availability* (GA) sejak 27 Mei 2025 (Microsoft). Dengan memilih region Indonesia, data S/4HANA dapat dijaga di dalam negeri, relevan untuk kepatuhan UU PDP.

Faktor pendorongnya jelas. UU Pelindungan Data Pribadi No. 27 Tahun 2022 telah [berlaku penuh sejak 17 Oktober 2024](https://peraturan.go.id/id/uu-no-27-tahun-2022) setelah masa transisi dua tahun, menyatukan lebih dari 30 aturan yang sebelumnya terpencar. Namun undang-undang ini mengatur pelindungan dan syarat transfer data pribadi, bukan melarang cloud lintas batas. Menyimpan data di region Jakarta menyederhanakan kepatuhan, tetapi bukan satu-satunya jalan menuju patuh.

Tren investasi infrastruktur ini juga selaras dengan permintaan pasar. Pasar layanan public cloud Indonesia ditaksir sekitar US$1,3 miliar pada 2025 dengan CAGR sekitar 28,1% pada periode 2020–2025 (IDC). Estimasi antar-lembaga berbeda tergantung cakupannya, jadi angka ini sebaiknya dibaca sebagai indikasi arah, bukan patokan tunggal.

| Hyperscaler | Region di Indonesia | Sejak | Catatan untuk RISE |
|---|---|---|---|
| Amazon Web Services (AWS) | Asia Pacific/Jakarta (`ap-southeast-3`), 3 AZ | Desember 2021 | Sering perlu dinegosiasikan bila bukan default komersial |
| Microsoft Azure | Indonesia Central, 3 AZ | Mei 2025 (GA) | Kerap menjadi default komersial di banyak region |
| Google Cloud | Jakarta (`asia-southeast2`), 3 zona | 2020 | Umumnya perlu dinegosiasikan eksplisit |
| IBM Cloud | Belum ada region publik di Indonesia (per 2026) | — | Hyperscaler RISE via IBM Power Virtual Server (2025) |
| Data center SAP | Bergantung ketersediaan SAP | — | Opsi non-hyperscaler di dalam RISE |

Satu catatan penting: IBM Cloud memang hyperscaler RISE penuh, tetapi belum memiliki region publik di Indonesia per 2026. Untuk perusahaan yang menjadikan data residency lokal sebagai syarat, praktis pilihan mengerucut ke AWS, Azure, atau Google Cloud.

## Kriteria memilih hyperscaler: region, cakupan BTP, komersial, dan exit

Memilih hyperscaler bukan soal mencari "yang terbaik", melainkan yang paling sesuai. Kriteria yang benar-benar menentukan: ketersediaan region di Indonesia, komitmen cloud yang sudah dimiliki perusahaan, cakupan layanan SAP BTP di penyedia itu, struktur komersial, serta klausul exit dan portabilitas data di kontrak awal.

Cakupan SAP BTP (*Business Technology Platform*, lapisan integrasi dan ekstensi SAP) layak dicermati karena tidak semua layanan dan region BTP tersedia di setiap hyperscaler. Bila roadmap Anda mengandalkan layanan BTP tertentu untuk integrasi atau ekstensi, ketersediaannya di penyedia yang dipilih menjadi kriteria nyata, bukan sekadar teknis. Kesiapan sistem juga berperan: prinsip [SAP Clean Core](https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide), yaitu menjaga inti S/4HANA tetap standar dan memindahkan kustomisasi ke BTP, menentukan seberapa mulus sistem berjalan di hyperscaler mana pun.

| Kriteria | Yang perlu ditimbang |
|---|---|
| Region & data residency | Ada region Jakarta? AWS, Azure, dan GCP ya; IBM belum. Menentukan kemudahan kepatuhan UU PDP |
| Ekosistem existing | Sudah punya komitmen atau estate di salah satu penyedia? Integrasi dan keterampilan tim internal |
| Cakupan SAP BTP | Layanan dan region BTP yang Anda butuhkan tersedia di penyedia itu? |
| Struktur komersial | Default komersial (sering Azure) vs perlu negosiasi (AWS/GCP) |
| Latency & kebutuhan khusus | Kebutuhan latency sangat rendah atau mandat sovereign tertentu |
| Exit & portabilitas | Klausul migrasi dan biaya egress ditetapkan di kontrak awal |

Karena keputusan ini bersifat *front-loaded*, ditetapkan di kontrak awal dan bukan dikonfigurasi bebas setelah tanda tangan, pemilihan hyperscaler idealnya diputuskan bersama partner implementasi yang memahami roadmap BTP sekaligus kondisi kustomisasi sistem Anda.

## Yang jarang dibahas: pilihan hyperscaler bukan penentu nasib proyek

Untuk mayoritas perusahaan, hyperscaler mana yang dipilih jarang menentukan sukses atau gagalnya migrasi. Karena SAP mengelola operasional harian dan semua hyperscaler bersertifikasi SAP, "mana yang lebih cepat" bukan faktor penentu untuk sebagian besar beban kerja S/4HANA. Lock-in yang nyata justru terletak pada keluar dari RISE dan SAP, bukan berpindah antar-hyperscaler.

Bagian ini jarang ditulis kompetitor, padahal justru di sinilah ekspektasi perlu diturunkan agar keputusan tidak berlarut-larut. Terlalu banyak waktu rapat habis membandingkan tiga logo cloud, padahal energi itu lebih baik dicurahkan ke kesiapan data, desain proses, dan negosiasi klausul kontrak.

Meski begitu, ada situasi ketika pilihan ini memang penting. Pilihan hyperscaler benar-benar berbobot bila:

1. **Perusahaan sudah punya estate atau komitmen besar** di salah satu penyedia, sehingga integrasi, keterampilan tim, dan skema komersial existing menjadi pertimbangan riil.
2. **Ada kebutuhan latency sangat rendah atau mandat sovereign** tertentu yang mengunci lokasi dan penyedia.
3. **Anda ingin memanfaatkan estate IBM Power** yang sudah berjalan, karena hanya IBM Cloud yang membawa opsi ini di RISE.
4. **Cakupan BTP yang Anda butuhkan** tersedia optimal hanya di penyedia tertentu.

Soal berpindah hyperscaler setelah *go-live*: secara teknis mungkin, tetapi umumnya berbiaya dan kompleks. Ada biaya *data egress* saat terminasi, rekonfigurasi infrastruktur, serta potensi kedaluwarsa kredit BTP, dan ketentuan standar RISE tidak otomatis memberi hak migrasi multi-cloud kecuali dinegosiasikan. Karena itu, tetapkan pilihan penyedia dan klausul exit secara matang di kontrak awal, bukan setelah proyek berjalan.

Pilihan region dan penyedia juga menentukan di mana lapisan data dan [data warehouse solutions](https://www.soltius.co.id/id/blog/data-warehouse-solutions) Anda berada, terutama bila arsitektur analitik dibangun berdampingan dengan S/4HANA dan menuntut data tetap berdekatan secara geografis.

## FAQ (Pertanyaan yang Sering Diajukan)

### Hyperscaler apa saja yang didukung RISE with SAP?

RISE with SAP dapat berjalan di empat hyperscaler resmi: Amazon Web Services (AWS), Microsoft Azure, Google Cloud, dan IBM Cloud (via IBM Power Virtual Server, tersertifikasi 2025), atau di data center milik SAP sendiri. Pelanggan memilih salah satunya di Order Form. Huawei Cloud tidak termasuk daftar hyperscaler RISE resmi, meski merupakan penyedia cloud yang aktif di Indonesia.

### Apakah data SAP S/4HANA bisa disimpan di Indonesia?

Bisa. Tiga hyperscaler RISE terbesar sudah memiliki region di Jakarta: AWS Asia Pacific/Jakarta (sejak Desember 2021), Google Cloud (asia-southeast2, sejak 2020), dan Microsoft Azure Indonesia Central (GA sejak 27 Mei 2025). Dengan memilih region Indonesia, data residency S/4HANA dapat dijaga di dalam negeri, relevan untuk kepatuhan UU PDP No. 27/2022.

### Siapa yang mengelola infrastruktur di RISE with SAP?

SAP. Dalam RISE, SAP memikul SLA menyeluruh, operasi cloud, dan dukungan teknis, serta memiliki dan mengelola akun hyperscaler tempat sistem di-deploy. Pelanggan memilih hyperscaler, tetapi tidak menandatangani kontrak infrastruktur langsung dengan AWS, Azure, atau Google. Inilah yang membuat RISE disebut layanan terkelola: beban operasional harian berpindah ke SAP.

### Apa bedanya RISE dengan hosting SAP langsung di AWS atau Azure?

Pada hosting langsung (self-managed), perusahaan atau partner menyewa dan mengelola sendiri akun hyperscaler, lisensi, patching, dan operasi. Pada RISE, SAP membundel infrastruktur, lisensi S/4HANA Cloud Private Edition, dan layanan terkelola dalam satu kontrak langganan, serta memegang akun hyperscaler. RISE menyederhanakan tanggung jawab dan SLA, tetapi mengurangi kontrol langsung atas infrastruktur.

### Apakah bisa pindah hyperscaler setelah go-live?

Secara teknis mungkin, tetapi berbiaya dan kompleks: ada biaya data egress saat terminasi, rekonfigurasi infrastruktur, serta potensi kedaluwarsa kredit BTP. Ketentuan standar RISE tidak otomatis memberi hak migrasi multi-cloud kecuali dinegosiasikan. Karena itu, pilihan hyperscaler dan klausul exit sebaiknya ditetapkan matang di kontrak awal, bukan dipikirkan setelah proyek berjalan.

### Apakah Huawei Cloud termasuk pilihan hyperscaler RISE?

Tidak. Hyperscaler resmi RISE with SAP saat ini adalah AWS, Microsoft Azure, Google Cloud, dan IBM Cloud, ditambah opsi data center milik SAP. Huawei Cloud tidak termasuk daftar itu, meski Huawei memiliki kehadiran cloud di Indonesia dan menjadi mitra teknologi bagi sejumlah integrator. Untuk skenario RISE, fokuskan evaluasi pada keempat hyperscaler resmi tersebut.

## Kesimpulan

Pertanyaan "AWS, Azure, atau GCP?" penting, tetapi bukan pertanyaan terpenting dalam migrasi ERP ke cloud. Yang lebih menentukan adalah ketersediaan region di Indonesia untuk data residency, kesiapan data dan clean core, cakupan BTP yang Anda butuhkan, serta klausul kontrak, karena di situlah lock-in dan biaya perpindahan yang sebenarnya berada. Sebagai Best RISE & Best Cloud Partner, Soltius mendampingi pemilihan region dan hyperscaler lintas industri di Indonesia secara netral vendor, dari penilaian awal hingga dukungan pasca go-live.

Untuk mendiskusikan region dan hyperscaler yang paling sesuai bagi rencana migrasi ERP perusahaan Anda, kunjungi soltius.co.id.
