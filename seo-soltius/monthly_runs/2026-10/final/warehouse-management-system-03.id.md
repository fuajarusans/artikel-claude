---
title: "Gudang B3: Peran Warehouse Management System dalam Kepatuhan dan Keselamatan"
meta_title: "Warehouse Management System untuk Gudang B3"
meta_description: "Panduan warehouse management system untuk gudang B3: sistem menegakkan segregasi, aturan putaway hazard rating SAP EWM, jejak audit, dan kepatuhan PP 22/2021."
slug: "warehouse-management-system-gudang-b3-kepatuhan"
language: "id"
primary_keyword: "warehouse management system"
secondary_keywords:
  - "gudang B3"
  - "penyimpanan bahan berbahaya"
  - "limbah B3 / TPS Limbah B3"
  - "PP No. 22 Tahun 2021"
  - "Permen LHK No. 6 Tahun 2021"
  - "K3 gudang / HSE"
  - "segregasi dan inkompatibilitas bahan kimia"
  - "GHS (klasifikasi dan pelabelan)"
  - "product hazard rating (SAP EWM)"
  - "hazmat putaway"
  - "SDS / lembar data keselamatan"
  - "traceability dan pelaporan B3"
internal_links:
  - url: "https://www.soltius.co.id/id/blog/manfaat-dan-modul-warehouse-management-system"
    anchor: "warehouse management system"
  - url: "https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide"
    anchor: "prinsip clean core"
  - url: "https://www.soltius.co.id/id/blog/low-code-and-no-code-platforms"
    anchor: "platform low-code"
external_citations:
  - url: "https://dinaspmptsp.pemalangkab.go.id/wp-content/uploads/PERMEN-LHK-6-2021.pdf"
    context: "Permen LHK No. 6 Tahun 2021 (turunan PP 22/2021): batas waktu simpan TPS Limbah B3, pelabelan/simbol, segregasi limbah tak kompatibel"
  - url: "https://learning.sap.com/courses/basic-customizing-in-sap-s-4hana-ewm/configuring-direct-putaway"
    context: "Hazard rating sebagai parameter penentuan storage type/section pada putaway SAP EWM"
brief_id: "warehouse-management-system-03"
target_word_count: 1650
publish_month: "2026-10"
word_count: 2311
---

# Gudang B3: Peran Warehouse Management System dalam Kepatuhan dan Keselamatan

Satu drum oksidator yang tersimpan terlalu dekat dengan pelarut mudah menyala tidak akan memberi peringatan sebelum terbakar. Di gudang yang menyimpan bahan berbahaya dan beracun (B3), mulai dari pabrik kimia, cat, farmasi, hingga oil & gas, kesalahan penempatan seperti ini sering masih diatur lewat ingatan operator dan catatan di kertas. Artikel ini membahas satu hal yang jarang disatukan dalam konten berbahasa Indonesia: bagaimana sebuah [warehouse management system](https://www.soltius.co.id/id/blog/manfaat-dan-modul-warehouse-management-system) membantu menegakkan aturan penyimpanan B3 yang diwajibkan regulasi, dari segregasi otomatis sampai jejak audit, dan di mana letak batas kemampuannya.

> **Secara singkat:** Gudang B3 adalah fasilitas penyimpanan khusus untuk bahan berbahaya dan beracun, yaitu zat yang mudah meledak, mudah menyala, reaktif, korosif, infeksius, atau beracun. Fasilitas ini wajib memenuhi syarat teknis, pelabelan, dan segregasi menurut PP No. 22 Tahun 2021 dan Permen LHK No. 6 Tahun 2021. Tata letaknya ditentukan oleh karakteristik bahaya, bukan sekadar efisiensi ruang.

Pembahasan bergerak dari definisi dan dasar hukum, lalu ke cara kerja WMS menegakkan segregasi, tabel inkompatibilitas yang wajib ada, jejak audit untuk limbah B3, hingga satu bagian yang jujur: apa yang tetap tidak bisa digantikan sistem.

## Apa itu gudang B3 dan apa bedanya dengan gudang biasa?

Gudang B3 adalah fasilitas penyimpanan yang diatur oleh karakteristik bahaya tiap bahan, bukan semata kapasitas dan kecepatan ambil barang. Berbeda dari gudang umum, lokasi setiap material ditentukan sifatnya, apakah mudah menyala, korosif, atau reaktif, dan fasilitasnya harus dilengkapi pengendali tumpahan, ventilasi memadai, serta pemisahan bahan yang tidak saling cocok.

B3 (Bahan Berbahaya dan Beracun) didefinisikan sebagai zat atau bahan yang karena sifat, konsentrasi, atau jumlahnya dapat membahayakan lingkungan, kesehatan, serta kelangsungan hidup manusia dan makhluk lain. Kerangka hukum lingkungan Indonesia mengenal enam karakteristik baku untuk B3 dan limbah B3:

- **Mudah meledak** (eksplosif pada suhu dan tekanan tertentu).
- **Mudah menyala** (pelarut, cairan dengan titik nyala rendah).
- **Reaktif** (termasuk reaktif terhadap air atau udara).
- **Infeksius** (umumnya pada limbah medis/fasilitas kesehatan).
- **Korosif** (asam dan basa kuat yang merusak jaringan dan logam).
- **Beracun** (berbahaya bila terpapar, tertelan, atau terhirup).

Ada perbedaan penting yang sering tertukar. **B3** adalah bahan baku atau produk berbahaya yang masih dipakai dalam produksi, sedangkan **limbah B3** adalah sisa kegiatan yang mengandung B3 dan wajib dikelola hingga tahap akhir. Satu gudang kimia kerap menyimpan keduanya di area terpisah, dengan aturan main yang berbeda. Perlakuan khusus bukan formalitas: salah menempatkan satu golongan bahan di sebelah golongan lain bisa memicu reaksi, kebakaran, atau pelepasan gas beracun yang tidak bisa ditarik kembali.

## Regulasi yang mengikat: PP 22/2021, Permen LHK 6/2021, GHS, dan K3

Penyimpanan B3 di Indonesia tunduk pada dua rezim yang berjalan paralel: pengelolaan lingkungan di bawah Kementerian Lingkungan Hidup dan Kehutanan, serta klasifikasi bahan kimia di bawah Kementerian Perindustrian. Keduanya menuntut hal konkret di lantai gudang, bukan sekadar dokumen di laci.

PP No. 22 Tahun 2021 adalah payung pengelolaan B3 dan limbah B3 di Indonesia. Aturan ini mencakup rangkaian pengelolaan dari penetapan, pengurangan, penyimpanan, pengumpulan, pengangkutan, pemanfaatan, pengolahan, hingga penimbunan. Setiap penghasil wajib mengelola limbah yang dihasilkannya. Rincian teknis penyimpanan sementara diatur lebih lanjut dalam Permen LHK No. 6 Tahun 2021, yang menetapkan tata cara pengemasan sesuai karakteristik, pelabelan dan simbol bahaya, serta pemisahan limbah yang tidak saling cocok. Fasilitas penyimpanan juga dituntut memiliki sarana pengendali kebocoran dan tumpahan (*secondary containment*), ventilasi, perlindungan dari air hujan dan sinar matahari, serta jarak aman dari permukiman (Permen LHK No. 6 Tahun 2021).

Di sisi klasifikasi bahan kimia, Indonesia mengadopsi GHS (*Globally Harmonized System*) melalui Permenperin No. 87/M-IND/PER/9/2009 yang diperbarui dengan Permenperin No. 23/M-IND/PER/4/2013. Label GHS memuat identitas produk dan pemasok, piktogram bahaya, kata sinyal (Bahaya atau Awas), pernyataan bahaya, dan pernyataan kehati-hatian, didukung Lembar Data Keselamatan (*Safety Data Sheet*/SDS). GHS membagi bahaya ke dalam kelas bahaya fisik, kesehatan, dan lingkungan, dengan jumlah kelas yang bervariasi antar-revisi GHS.

Satu hal yang penting dibedakan: klasifikasi GHS (ranah bahan kimia, Kemenperin) tidak sama dengan klasifikasi limbah B3 kategori 1 dan 2 (ranah lingkungan, KLHK). Sebuah gudang kimia bisa tunduk pada keduanya sekaligus, dan menyamakannya dalam satu kalimat adalah kekeliruan yang sering muncul di konten awam. Di atas semua itu, kerangka Keselamatan dan Kesehatan Kerja (K3/HSE) menuntut pelatihan, alat pelindung diri, dan prosedur tanggap darurat yang berjalan setiap hari.

## Bagaimana WMS membantu menegakkan kepatuhan penyimpanan B3?

WMS modern menyimpan atribut bahaya setiap bahan di *master data*, lalu memakainya saat sistem menentukan lokasi penyimpanan. Dalam SAP Extended Warehouse Management (EWM), informasi bahaya menjadi parameter penentuan *storage type* dan *storage section* pada proses *putaway*, sehingga sistem mengarahkan tiap bahan ke zona yang kompatibel secara otomatis, bukan bergantung pada ingatan petugas.

Mekanismenya bisa diurai menjadi langkah penentuan lokasi (*putaway*) ketika barang masuk:

1. **Baca data masuk.** Sistem membaca *inbound delivery* dan *warehouse product master* untuk mengenali barang serta karakter penanganannya.
2. **Ambil atribut bahaya.** EWM menarik *hazardous substance master data*, tempat Hazard Rating 1 dan Hazard Rating 2 tersimpan sebagai atribut bahan.
3. **Tentukan zona.** Hazard rating menjadi parameter saat sistem menyusun urutan pencarian *storage type* dan menetapkan *storage section* yang sesuai (SAP Learning).
4. **Periksa kapasitas.** Sebelum lokasi dikunci, sistem memeriksa kapasitas dan kuota *bin* agar tidak melampaui batas aman.

Hasilnya, bahan dengan sifat bahaya tertentu diarahkan ke zona yang sudah dipisahkan, bukan ke rak kosong terdekat.

Penamaan *field* dan transaksi persisnya memang bervariasi antar-rilis EWM, baik versi *embedded* di S/4HANA, *decentralized*, maupun *cloud*. Yang stabil adalah fungsinya: hazard rating sebagai penentu *section*. Dalam praktik implementasi EWM di gudang berisiko, aturan *storage section* disetel sejak awal agar oksidator tidak pernah ditempatkan di *section* yang sama dengan bahan mudah menyala, dan aturan itu ditegakkan sistem pada setiap transaksi, bukan sesekali saat inspeksi.

Karena aturan kepatuhan B3 sangat spesifik pada regulasi lokal, pengembangannya sebaiknya mengikuti [prinsip clean core](https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide): kebutuhan khusus di-*extend* lewat platform di luar inti, bukan dengan memodifikasi inti EWM, agar sistem tetap mudah di-*upgrade* ketika regulasi atau rilis SAP berubah.

## Segregasi dan inkompatibilitas: tabel yang wajib ada di gudang Anda

Aturan segregasi menjawab pertanyaan paling operasional: bahan apa tidak boleh disimpan dekat bahan apa? Perlu ditegaskan, matriks inkompatibilitas kimia bukan lampiran PP 22/2021, melainkan praktik keselamatan kimia standar yang diacu dari panduan seperti OSHA, NFPA, dan EPA CAMEO Chemicals. Regulasi mewajibkan segregasi; isi tabelnya datang dari ilmu keselamatan kimia dan SDS tiap bahan.

| Golongan bahan | Jangan disimpan dekat dengan | Alasan singkat | Implikasi di gudang |
|---|---|---|---|
| Oksidator (nitrat, peroksida) | Mudah menyala, bahan organik, reduktor | Mempercepat atau memicu kebakaran | *Section* terpisah, jauh dari zona *flammable* |
| Mudah menyala/pelarut | Oksidator, sumber panas/api, listrik statis | Risiko kebakaran dan ledakan | Zona berventilasi, *grounding*, jauh dari api |
| Asam kuat | Basa kuat, sianida, sulfida, logam reaktif | Reaksi hebat; gas beracun (HCN/H2S) | *Section* asam, *secondary containment* |
| Basa kuat | Asam kuat | Reaksi eksotermik | *Section* basa, terpisah dari asam |
| Reaktif-air (logam alkali) | Air, bahan berair, asam | Melepas panas dan gas mudah menyala | Zona kering, jauh dari sumber air |
| Beracun/korosif | Bahan pangan, area kerja terbuka | Kontaminasi dan paparan | *Section* tertutup, akses terbatas, berlabel GHS |

Di gudang digital, matriks ini tidak berhenti di dinding sebagai poster. Ia diterjemahkan menjadi aturan *storage section* dan diperkuat label GHS pada setiap kemasan, sementara SDS tiap bahan terhubung ke *material master* sebagai rujukan cepat. Perusahaan tetap wajib menyesuaikan matriks finalnya dengan SDS masing-masing bahan, karena satu nama golongan bisa mencakup senyawa dengan perilaku berbeda.

Satu salah kaprah perlu diluruskan di sini. SAP EWM mengurus di mana barang disimpan dan bagaimana disegregasi, tetapi penerbitan SDS, pelabelan transport, dan pemeriksaan pengiriman barang berbahaya menurut regulasi internasional (ADR, IMDG, IATA) bukan ranahnya. Fungsi itu ada di SAP EHS (*Environment, Health & Safety*), yang kini dirapikan di bawah payung SAP S/4HANA for product compliance. Keduanya terhubung lewat *master data*, tetapi segregasi rak di gudang berbeda ranah dari dokumen transport.

## Jejak audit, pelaporan, dan penanganan limbah B3

Nilai WMS untuk kepatuhan tidak berhenti pada penempatan. Data yang terkumpul membentuk *logbook* digital dan penelusuran (*traceability*) berbasis *lot/batch*, sehingga ketika auditor meminta riwayat sebuah bahan, catatannya bisa direproduksi dalam hitungan menit alih-alih disusun ulang dari berkas yang tercecer. Ini menjadi krusial untuk limbah B3, yang punya batas waktu simpan ketat.

Batas waktu penyimpanan limbah B3 di TPS bergantung pada kategori dan volume harian, bukan satu angka tunggal. Banyak sumber sekunder hanya menyebut "90 hari", padahal skenarionya ada empat:

| Kategori / volume | Batas simpan maksimal | Dasar |
|---|---|---|
| Dihasilkan ≥ 50 kg/hari | 90 hari | PP 22/2021 (dirinci Permen LHK 6/2021) |
| Kategori 1, < 50 kg/hari | 180 hari | PP 22/2021 / Permen LHK 6/2021 |
| Kategori 2 (sumber tidak spesifik dan spesifik umum) | 365 hari | PP 22/2021 / Permen LHK 6/2021 |
| Kategori 2 (sumber spesifik khusus) | 365 hari | PP 22/2021 / Permen LHK 6/2021 |

Melewati batas ini tanpa menyerahkan limbah ke pihak berizin adalah salah satu temuan audit yang paling umum. Di sinilah WMS membantu: tanggal masuk tiap *batch* tercatat, sehingga sistem bisa menandai limbah yang mendekati tenggat. Penghasil juga wajib menyelenggarakan pencatatan timbulan (jenis, jumlah, karakteristik, waktu) dan dokumen penyerahan atau manifes ke pihak berizin, yang semuanya lebih mudah dibuktikan saat data sudah terstruktur sejak awal.

Tidak semua kebutuhan ini harus dibangun di dalam inti EWM. *Logbook* B3, *checklist* inspeksi harian, dan laporan kepatuhan untuk audit KLHK sering kali lebih cepat dibangun sebagai aplikasi ringan di atas data WMS menggunakan [platform low-code](https://www.soltius.co.id/id/blog/low-code-and-no-code-platforms), sehingga tim HSE bisa menyesuaikan formulir tanpa menunggu antrean pengembangan besar.

## WMS bukan pengganti SOP, izin, dan budaya K3

Ini bagian yang jarang ditulis pemasok sistem, padahal justru di sinilah kejujuran membangun kepercayaan. WMS hanya menegakkan aturan yang sudah benar dikonfigurasi; ia tidak menciptakan kepatuhan. Izin TPS, pelatihan petugas, alat pelindung diri, uji berkala, dan SOP tanggap darurat tetap wajib, dan semuanya tetap pekerjaan manusia.

Sistem mengurangi kesalahan manusia dan mempercepat pembuktian saat audit, tetapi ia tidak menggantikan sistem manajemen K3 dan lingkungan. Gudang yang memasang EWM canggih namun tanpa SOP yang jelas hanya memindahkan kekacauan ke antarmuka yang lebih rapi. Urutan yang benar selalu dimulai dari aturan keselamatan yang sahih, baru sistem menegakkannya.

Ada juga titik di mana WMS belum perlu buru-buru. Untuk perusahaan dengan jumlah SKU berbahaya kecil, satu lokasi, dan volume limbah rendah, kombinasi SOP ketat, *logbook* manual, dan tata letak yang benar bisa memadai. WMS menjadi relevan ketika jumlah bahan berbahaya, lokasi, dan frekuensi audit meningkat, sampai penegakan aturan secara manual mulai rawan salah dan sulit dibuktikan. Membeli sistem besar untuk masalah kecil hanya memindahkan anggaran, bukan menyelesaikan risiko.

## FAQ (Pertanyaan yang Sering Diajukan)

### Apa itu bahan berbahaya dan beracun (B3)?

Bahan berbahaya dan beracun (B3) adalah zat atau bahan yang karena sifat, konsentrasi, atau jumlahnya dapat membahayakan lingkungan hidup, kesehatan, serta kelangsungan hidup manusia dan makhluk lain. Menurut kerangka PP 22/2021, karakteristik B3 dan limbah B3 mencakup mudah meledak, mudah menyala, reaktif, infeksius, korosif, dan beracun. Contohnya pelarut, oksidator, asam-basa kuat, dan residu produksi kimia.

### Apa dasar hukum penyimpanan B3 di Indonesia?

Dasar hukum utamanya adalah PP No. 22 Tahun 2021 tentang Penyelenggaraan Perlindungan dan Pengelolaan Lingkungan Hidup, yang mengatur pengelolaan B3 dan limbah B3 dari penetapan hingga penimbunan. Rincian teknis penyimpanan sementara diatur dalam Permen LHK No. 6 Tahun 2021, sedangkan klasifikasi dan pelabelan bahan kimia mengikuti GHS melalui Permenperin No. 87/2009 yang diperbarui dengan No. 23/2013.

### Berapa lama batas simpan limbah B3 di TPS?

Batasnya bergantung kategori dan volume, bukan satu angka. Limbah B3 yang dihasilkan 50 kg atau lebih per hari boleh disimpan maksimal 90 hari. Di bawah 50 kg per hari, limbah B3 kategori 1 maksimal 180 hari, sedangkan limbah B3 kategori 2, baik dari sumber tidak spesifik, spesifik umum, maupun spesifik khusus, boleh hingga 365 hari sebelum wajib diserahkan ke pihak berizin.

### Apa itu klasifikasi GHS?

GHS (*Globally Harmonized System*) adalah sistem global yang menyeragamkan cara mengklasifikasikan bahaya bahan kimia dan mengomunikasikannya lewat label dan Lembar Data Keselamatan (SDS). Di Indonesia, GHS diadopsi melalui Permenperin No. 87/2009 dan diperbarui lewat No. 23/2013. Label GHS memuat piktogram bahaya, kata sinyal, pernyataan bahaya, dan pernyataan kehati-hatian, sehingga petugas gudang mengenali risiko secara cepat dan seragam.

### Bagaimana WMS mencegah bahan inkompatibel disimpan berdekatan?

WMS seperti SAP EWM menyimpan atribut bahaya tiap bahan di *master data*, lalu memakainya saat menentukan lokasi. Dalam EWM, hazard rating menjadi parameter penentuan *storage type* dan *storage section* pada *putaway*, sehingga sistem mengarahkan oksidator, bahan mudah menyala, atau korosif ke zona yang sudah dipisahkan dan mencegah penempatan di *section* yang tidak kompatibel. Aturannya ditegakkan otomatis, bukan bergantung ingatan operator.

### Apakah SAP EWM punya fitur untuk bahan berbahaya?

Ya. SAP Extended Warehouse Management membaca *hazardous substance master data* dan menggunakan Hazard Rating 1 dan 2 sebagai parameter penentuan *storage type* dan *storage section* saat *putaway*. Untuk kepatuhan transport dan dokumen, SAP menyediakan modul terpisah, yaitu SAP EHS atau SAP S/4HANA for product compliance, yang mengelola barang berbahaya (ADR, IMDG, IATA) serta penerbitan SDS dan label. Keduanya saling melengkapi namun berbeda ranah.

### Apakah UMKM wajib punya sistem untuk mengelola B3?

Kewajiban hukumnya terletak pada pengelolaan yang benar, yaitu perizinan, TPS sesuai syarat, pelabelan, segregasi, dan pencatatan, bukan pada kepemilikan WMS tertentu. Untuk volume B3 kecil, kombinasi SOP ketat, *logbook* manual, dan tata letak yang benar bisa memadai. WMS menjadi relevan ketika jumlah SKU berbahaya, lokasi, dan frekuensi audit meningkat sehingga penegakan aturan secara manual mulai rawan salah.

## Kesimpulan

Risiko penyimpanan B3 tidak pernah sebanding dengan penghematan dari mengatur segregasi secara manual. WMS yang dikonfigurasi dengan benar mengubah aturan keselamatan dari poster di dinding menjadi kontrol yang ditegakkan pada setiap transaksi, lengkap dengan jejak audit yang bisa dibuktikan. Sebagai gambaran kredibilitas teknologinya, SAP diakui sebagai Leader dalam Gartner Magic Quadrant for Warehouse Management Systems 2026, posisi yang dipertahankan dua belas kali berturut-turut (SAP News, 4 Mei 2026). Sebagai SAP Platinum Partner dengan pengalaman implementasi di industri manufaktur dan *consumer products*, Soltius membantu perusahaan menyetel aturan *putaway* berbasis hazard rating di SAP EWM agar sistem turut menegakkan segregasi yang telah ditetapkan, sementara perizinan dan kepatuhan hukum tetap menjadi proses dan tanggung jawab perusahaan.

Untuk mendiskusikan kesiapan gudang B3 dan konfigurasi warehouse management system di perusahaan Anda, kunjungi soltius.co.id.
