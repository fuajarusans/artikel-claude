---
title: "Keamanan dan Privasi Data di Business Intelligence: RLS, Masking, dan UU PDP"
meta_title: "Keamanan Business Intelligence: RLS, Masking & UU PDP"
meta_description: "Keamanan data Business Intelligence: row-level security, object-level, masking, enkripsi, audit trail, plus kewajiban UU PDP saat data pribadi masuk dashboard."
slug: "business-intelligence-keamanan-data-rls-uu-pdp"
language: "id"
primary_keyword: "Business Intelligence"
secondary_keywords:
  - "keamanan data BI"
  - "row-level security"
  - "object-level security"
  - "data masking"
  - "UU PDP"
  - "kontrol akses dashboard"
  - "audit trail analitik"
  - "otorisasi berbasis peran"
  - "single sign-on BI"
  - "enkripsi data"
internal_links:
  - url: "https://www.soltius.co.id/id/blog/business-intelligence"
    anchor: "Business Intelligence"
  - url: "https://www.soltius.co.id/id/blog/data-warehouse-solutions"
    anchor: "Data Warehouse Solutions"
  - url: "https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud"
    anchor: "migrasi ERP ke cloud"
external_citations:
  - url: "https://peraturan.bpk.go.id/Details/229798/uu-no-27-tahun-2022"
    context: "Status, tanggal, dan pasal UU No. 27 Tahun 2022 (Pasal 16, 5–15, 57, 74)"
  - url: "https://help.sap.com/docs/SAP_ANALYTICS_CLOUD"
    context: "Mekanisme row-level Data Access Control di SAP Analytics Cloud"
brief_id: "business-intelligence-02"
target_word_count: 1650
publish_month: "2026-08"
word_count: 2089
---

# Keamanan dan Privasi Data di Business Intelligence: RLS, Masking, dan UU PDP

Dulu laporan penjualan per wilayah cuma ada di satu file milik tim finance. Sekarang, begitu perusahaan menaruhnya di sebuah dashboard, puluhan orang lintas divisi bisa membukanya dalam sekali klik. Di titik itulah pertanyaan yang tadinya sepele, "siapa yang boleh melihat baris dan kolom apa?", berubah menjadi soal keamanan sekaligus kepatuhan hukum. Artikel ini membahas kontrol akses di [Business Intelligence](https://www.soltius.co.id/id/blog/business-intelligence) (*row-level* dan *object-level security*, *masking*, enkripsi, *audit trail*) beserta kewajiban yang menyertainya sejak UU Perlindungan Data Pribadi berlaku penuh. Ditujukan untuk IT/security lead dan *data owner* yang kini bertanggung jawab atas data pribadi yang mengalir ke laporan.

> **Secara singkat:** keamanan data di *Business Intelligence* adalah kumpulan kontrol yang memastikan hanya pihak berwenang dapat melihat data tertentu (lewat *row-level security*, *object-level security*, *masking*, enkripsi, dan *audit trail*) sekaligus memenuhi kewajiban perlindungan data pribadi seperti UU No. 27 Tahun 2022 (UU PDP). Kontrol ini idealnya diterapkan di lapisan model dan sumber data, bukan sekadar di dashboard.

## Apa itu keamanan data di BI, dan kenapa dashboard justru memperbesar risiko?

Keamanan data di BI adalah praktik membatasi siapa boleh melihat data apa di sepanjang alur analitik. Dashboard memperbesar risiko justru karena ia mendemokratisasi akses: laporan yang dulu terkunci di satu tim kini terbuka bagi banyak pengguna. Setiap tambahan akses memperluas permukaan yang harus diamankan, diawasi, dan diaudit.

Nilai BI datang dari membuat data mudah diakses, dan risikonya datang dari hal yang sama persis: makin banyak orang membuka satu dashboard, makin besar peluang seseorang melihat angka yang bukan haknya, mengekspornya, atau menyebarkannya keluar. Kesalahan paling umum adalah menaruh kontrol di tempat yang salah. Menyembunyikan sebuah widget di level tampilan terasa aman, padahal pengguna kerap masih bisa menembusnya lewat ekspor, kueri, atau salinan data. Keamanan yang tahan uji hidup di lapisan model dan sumber data, bukan di visual. Karena itu, kontrol akses dan masking idealnya sudah diterapkan sedini mungkin, bahkan di lapisan gudang data seperti yang dibahas pada [Data Warehouse Solutions](https://www.soltius.co.id/id/blog/data-warehouse-solutions), bukan ditambal belakangan di dashboard.

Cara paling praktis memetakan risikonya adalah dengan membaginya ke tiga lapisan, dari sumber data sampai penyajian:

| Lapisan | Risiko utama | Kontrol utama | Padanan SAP |
|---|---|---|---|
| Koneksi / sumber data | Kredensial bocor, koneksi tak terenkripsi | Enkripsi in-transit (TLS), *single sign-on* + MFA | TLS; identitas via SSO/IdP di SAP BTP |
| Penyimpanan / model / dataset | Kolom sensitif terekspos, baris lintas-wilayah bocor | Enkripsi at-rest, RLS, object/column-level, masking | AES-256 (HANA); Data Access Control (SAC); authorization objects (S/4HANA) |
| Dashboard / penyajian | Over-sharing, ekspor tak terkontrol | Otorisasi berbasis peran, batasi ekspor, audit trail | Role/Folder/Model security (SAC); UI masking; logging |

## Row-level & object-level security: mengatur siapa melihat baris dan kolom apa

*Row-level security* (RLS) membatasi baris yang bisa dilihat seorang pengguna berdasarkan identitas atau atributnya, misalnya manajer wilayah Jawa hanya melihat baris data wilayah Jawa. *Object-* atau *column-level security* membatasi kolom atau field, misalnya menyembunyikan kolom gaji atau NIK dari peran yang tak berkepentingan. Keduanya bekerja di lapisan model, bukan sekadar menyembunyikan visual.

Ambil satu dashboard penjualan nasional yang dipakai seluruh kepala cabang. Dengan RLS, model yang sama otomatis menyaring baris sesuai peran penggunanya, sehingga tiap cabang hanya melihat datanya sendiri tanpa perlu menggandakan laporan. Di SAP Analytics Cloud, mekanisme ini disebut *Data Access Control* (DAC): diaktifkan per model, lalu didefinisikan per dimensi (misalnya Region atau Sales Org) ([SAP Help Portal](https://help.sap.com/docs/SAP_ANALYTICS_CLOUD)).

Kontrol objek/field punya logika berbeda. Di dunia SAP, ia diwujudkan lewat *authorization objects* yang dikelola dalam peran lewat *Profile Generator* (PFCG). Satu authorization object mengelompokkan hingga sepuluh authorization field, menentukan aksi dan objek data mana yang boleh diakses seseorang. Inilah fondasi object-level security khas SAP.

Otorisasi berbasis peran (*role-based*) menyatukan keduanya; SAC menerapkannya di level Role, Folder, dan Model. Satu jebakan klasik: peran ber-akses penuh (*Full Data Access*, seperti BI Admin) tetap melihat seluruh data meski DAC sudah diset. Kontrol baris terpasang rapi, tapi bila terlalu banyak orang memegang peran istimewa, filter itu praktis bocor.

| Aspek | Row-Level Security (RLS) | Object/Column-Level Security |
|---|---|---|
| Yang dibatasi | Baris data (record) | Kolom/field atau objek |
| Contoh | Cabang hanya lihat penjualannya | Sembunyikan kolom gaji/NIK |
| Berbasis | Identitas/atribut/peran/tim | Peran & kebutuhan bisnis |
| Padanan SAP | Data Access Control (SAC) | Authorization objects (PFCG); masking |
| Tujuan UU PDP | Pembatasan tujuan & akses | Minimisasi data yang tampil |

## Apa kewajiban UU PDP saat data pribadi masuk ke dashboard?

Sejak UU No. 27 Tahun 2022 (UU PDP) berlaku penuh, data pribadi yang masuk ke dashboard membawa kewajiban hukum yang nyata. Intinya: kumpulkan data secara terbatas dan spesifik serta proses sesuai tujuannya (Pasal 16), penuhi hak subjek data, amankan datanya, dan simpan hanya selama diperlukan. Masa transisi penyesuaian dua tahun sudah berakhir.

Dua tanggal sering tertukar dan keduanya penting. UU PDP disahkan Rapat Paripurna DPR pada 20 September 2022, lalu resmi diundangkan pada 17 Oktober 2022 sebagai UU No. 27 Tahun 2022 ([peraturan.bpk.go.id](https://peraturan.bpk.go.id/Details/229798/uu-no-27-tahun-2022)). Pasal 74 memberi masa transisi dua tahun sejak diundangkan, sehingga tenggat penyesuaian jatuh sekitar 17 Oktober 2024. Per pertengahan 2026, tenggat itu sudah lewat: kewajibannya bukan lagi "akan berlaku", melainkan sudah berlaku penuh.

Prinsip yang paling langsung mengena ke BI ada di Pasal 16: pengumpulan data pribadi dilakukan terbatas dan spesifik, dan pemrosesan sesuai tujuannya. Inilah dasar hukum untuk tidak menarik seluruh kolom pribadi ke sebuah laporan bila laporan itu tak membutuhkannya. Sebuah dashboard target penjualan per cabang, misalnya, hampir tak pernah butuh menampilkan NIK atau alamat lengkap pelanggan.

Beberapa kewajiban lain yang perlu diterjemahkan ke desain dashboard:

- **Hak subjek data (Pasal 5–15).** UU PDP memberi individu sejumlah hak, antara lain hak mengetahui tujuan pemrosesan, mengakses, memperbaiki, dan menghapus datanya. Artinya perusahaan harus mampu menemukan dan menindak data seseorang meski sudah tersebar ke banyak laporan.
- **Retensi terbatas.** Data pribadi disimpan hanya selama tujuannya masih berlaku, lalu dihapus. Snapshot lama dan ekspor yang menumpuk adalah risiko yang sering terlupakan.
- **Kewajiban mengamankan.** Data pribadi wajib dilindungi dari akses tak sah, yang menautkan langsung ke enkripsi dan kontrol akses di bagian berikut.

Soal anonimisasi perlu kehati-hatian. Data yang benar-benar teranonimisasi secara *irreversible*, sehingga individu tak mungkin diidentifikasi lagi, umumnya dianggap jatuh di luar cakupan UU PDP. Namun data yang hanya di-*masking* atau dipseudonimisasi dan masih punya kunci untuk re-identifikasi tetap tergolong data pribadi. Jadi masking di dashboard mengurangi risiko, tetapi belum tentu menghapus kewajiban hukum. Atas pelanggaran, Pasal 57 UU PDP mengatur sanksi administratif hingga denda paling tinggi 2% dari pendapatan tahunan, dengan rincian penerapan yang masih bersandar pada peraturan pelaksana.

## Masking, enkripsi, dan audit trail: kontrol teknis yang membuat BI patuh

Tiga kontrol teknis menjadi inti kepatuhan BI. *Masking* menyamarkan field sensitif seperti NIK atau gaji tanpa mengubah data aslinya. Enkripsi mengamankan data saat tersimpan (*at-rest*) maupun berpindah (*in-transit*). *Audit trail* mencatat siapa mengakses apa dan kapan. Ketiganya berjalan di atas prinsip *least-privilege*: beri hak seminimal yang benar-benar dibutuhkan peran.

Masking bekerja sebagai lapis pengaman tambahan bagi power-user. SAP HANA, misalnya, menyediakan *dynamic data masking* yang dikonfigurasi di spesifikasi view: nilai aslinya tidak diubah, hanya tampilannya yang disamarkan, sehingga kalkulasi tetap berjalan sementara data sensitif tersembunyi. Di lapisan aplikasi, masking field berbasis peran menyamarkan data di layar bagi pengguna tak berwenang, sementara yang berwenang tetap melihat nilai asli.

Enkripsi menutup celah pada data diam dan data bergerak. Pada platform SAP, data at-rest dienkripsi dengan algoritma AES-256, sedangkan trafik in-transit diamankan dengan TLS. Saat sumber data dan platform BI berpindah ke cloud, misalnya dalam proyek [migrasi ERP ke cloud](https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud), pertanyaan residensi data dan siapa memegang kunci enkripsi ikut menjadi bagian dari desain keamanan, bukan renungan belakangan.

Berikut checklist penerapan yang biasa dipakai sebagai titik awal:

1. **Terapkan RLS dan object-level di lapisan model**, bukan di visual, agar tidak bisa ditembus lewat ekspor atau kueri.
2. **Masking field sensitif** (NIK, gaji, nomor rekening) untuk peran yang tak punya kebutuhan bisnis melihat nilai aslinya.
3. **Aktifkan enkripsi at-rest dan in-transit** pada sumber, model, dan koneksi.
4. **Wajibkan single sign-on dan MFA** agar identitas pengguna tepercaya sebelum kontrol lain berlaku.
5. **Nyalakan audit trail** yang mencatat akses, ekspor, dan perubahan izin, lalu tinjau berkala.
6. **Tegakkan least-privilege dan retensi**: hapus akses dan data begitu tujuannya selesai.

Di lapangan, model otorisasi paling murah dan paling aman ketika dirancang bersama tim keamanan sejak awal implementasi, bukan ditambal setelah dashboard terlanjur dibagikan ke seluruh organisasi.

## Keamanan berlebihan juga mematikan BI: menyeimbangkan akses dan kontrol

Mengunci BI terlalu ketat justru berbahaya. Ketika pengguna tak bisa mengakses data yang sah mereka butuhkan, mereka mengekspor ke Excel dan mengedarkannya lewat email atau chat. Data pribadi itu malah keluar dari sistem yang terkontrol dan teraudit, menjadi *shadow reporting* yang jauh lebih berisiko daripada dashboard yang diatur rapi. Prinsipnya: seaman perlu, seterbuka mungkin.

Bagian ini jarang ditulis kompetitor, padahal di sinilah keseimbangan diuji. Over-restriction bukan hanya menghambat keputusan; ia memindahkan data ke tempat yang tak bisa Anda lihat, tak bisa ditarik kembali saat subjek data meminta penghapusan, dan tak bisa dibuktikan pengelolaannya saat audit datang.

Jalan tengahnya bukan membuka semua atau menutup semua, melainkan mengklasifikasi dan mendelegasikan:

- **Klasifikasikan data** (publik, internal, rahasia, data pribadi) supaya kontrol proporsional dengan sensitivitas, bukan seragam menyekat semuanya.
- **Tunjuk data owner** per domain yang memutuskan siapa berhak atas apa, ketimbang keputusan akses menumpuk di satu admin IT.
- **Beri akses memadai plus jejak audit**, bukan blokir total, agar kebutuhan analitik terpenuhi tanpa mendorong orang ke jalur bayangan.

Konfigurasi aman juga bukan setelan sekali jadi. Orang pindah divisi, peran berubah, laporan baru bermunculan. Tanpa peninjauan akses dan pembaruan model otorisasi yang berjalan, konfigurasi yang aman hari ini bisa bocor enam bulan lagi. Tata kelola akses adalah proses, bukan proyek.

## FAQ (Pertanyaan yang Sering Diajukan)

### Apa itu row-level security dalam BI?

Row-level security (RLS) adalah kontrol yang membatasi baris data yang boleh dilihat seorang pengguna berdasarkan identitas atau atributnya, misalnya manajer wilayah Jawa hanya melihat baris transaksi wilayah Jawa meski semuanya ada di satu dashboard. Di SAP Analytics Cloud, mekanisme ini disebut Data Access Control, diaktifkan per model lalu didefinisikan per dimensi. RLS bekerja di lapisan model, bukan sekadar menyembunyikan visual.

### Apa beda row-level dan object-level security?

Row-level security membatasi baris (siapa melihat data mana), sedangkan object- atau column-level security membatasi kolom atau objek (siapa boleh melihat field apa). Contoh: RLS membuat tiap cabang hanya melihat penjualannya sendiri; object-level security menyembunyikan kolom gaji atau NIK dari peran yang tak berkepentingan. Di SAP, kontrol objek ini diwujudkan lewat authorization objects dalam peran (PFCG). Keduanya sebaiknya dipakai bersama.

### Bagaimana membuat dashboard patuh UU PDP?

Mulai dari Pasal 16 UU No. 27/2022: kumpulkan data terbatas dan spesifik serta proses sesuai tujuan, jadi jangan tarik seluruh kolom pribadi bila laporan tak membutuhkannya. Terapkan RLS dan object-level security agar akses sesuai peran, masking untuk field sensitif, enkripsi at-rest dan in-transit, serta audit trail untuk akuntabilitas. Pastikan hak subjek data (akses, koreksi, penghapusan) tetap bisa dipenuhi meski data tersebar ke banyak dashboard.

### Apakah data yang sudah dianonimkan masih diatur UU PDP?

Bergantung pada apakah anonimisasinya benar-benar tidak dapat dibalik. Data yang teranonimisasi secara irreversible, sehingga individu tak mungkin diidentifikasi lagi, umumnya dianggap jatuh di luar cakupan UU PDP. Sebaliknya, data yang hanya dipseudonimisasi atau di-masking tetapi masih punya kunci untuk re-identifikasi tetap tergolong data pribadi dan tunduk penuh pada UU PDP. Masking di dashboard mengurangi risiko, tetapi belum tentu menghapus kewajiban hukum.

### Bagaimana membatasi akses per divisi tanpa membuat banyak salinan dashboard?

Gunakan satu dashboard dengan row-level security, bukan menggandakan laporan per divisi. Dengan Data Access Control di SAP Analytics Cloud, satu model yang sama otomatis menyaring baris sesuai peran atau tim penggunanya, sehingga tiap divisi hanya melihat datanya sendiri. Pendekatan ini lebih aman dan lebih mudah dirawat: satu sumber, satu definisi metrik, tanpa risiko salinan usang yang tercecer. Hati-hati pada peran ber-akses penuh yang bisa menembus filter.

### Apa yang harus dicatat dalam audit trail BI?

Minimal: siapa mengakses data atau laporan apa, kapan, dan tindakan apa yang dilakukan (melihat, mengekspor, mengubah izin). Audit trail menjadi bukti akuntabilitas bahwa pemrosesan berjalan sesuai dasar dan tujuan yang sah, selaras prinsip UU PDP, sekaligus alat deteksi bila ada akses tak wajar. Terapkan bersama prinsip least-privilege agar log tetap bermakna dan permukaan risiko kecil sejak awal.

## Kesimpulan

Keamanan BI bukan fitur yang dipasang belakangan, melainkan model yang dirancang bersama sistemnya, lalu dijaga saat peran dan laporan terus berubah. Menautkan tiap kontrol teknis, RLS, masking, enkripsi, dan audit trail, ke kewajiban UU PDP-nya mengubah kepatuhan dari beban menjadi desain yang rapi. Sebagai Certified AMS Partner dengan Partner Center of Expertise (PCoE) di Indonesia, Soltius mengimplementasikan solusi Business Intelligence seperti SAP Analytics Cloud lengkap dengan model otorisasi, masking, dan kontrol aksesnya melalui layanan Data and AI Consulting, selaras kebutuhan kepatuhan, lalu menjaganya tetap patuh lewat Application Management Services (AMS) pasca go-live.

Untuk mendiskusikan bagaimana model keamanan dan akses BI di perusahaan Anda dapat dirancang selaras UU PDP, kunjungi soltius.co.id.
