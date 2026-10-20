---
title: "Dimensi Data dalam SAP Clean Core: Menjaga Data Bersih, Bukan Cuma Kode"
meta_title: "SAP Clean Core: Dimensi Data yang Sering Terlupakan"
meta_description: "Dimensi data adalah pilar SAP Clean Core yang sering dilupakan. Pahami governance, kualitas, archiving, ILM, DVM, tiering hot/warm/cold, dan retensi 10 tahun."
slug: "dimensi-data-sap-clean-core"
language: "id"
primary_keyword: "SAP Clean Core"
secondary_keywords:
  - "dimensi data clean core"
  - "SAP Information Lifecycle Management"
  - "data archiving SAP"
  - "Data Volume Management"
  - "data tiering hot warm cold"
  - "data governance SAP"
  - "kualitas data S/4HANA"
  - "retensi data Indonesia"
  - "single source of truth"
  - "footprint database S/4HANA"
internal_links:
  - url: "https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide"
    anchor: "SAP Clean Core"
  - url: "https://www.soltius.co.id/id/blog/data-warehouse-solutions"
    anchor: "Data Warehouse Solutions"
  - url: "https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud"
    anchor: "migrasi ERP ke cloud"
external_citations:
  - url: "https://help.sap.com/docs/BS_CA/7ce8e5dc89d7407e8baa9de7b775f31f/eeb91dcd1aa444a98ffbba662ecddb9c.html"
    context: "Definisi SAP Information Lifecycle Management (ILM): archiving + retention + destruction"
  - url: "https://jdih.bumn.go.id/storage/peraturan/UU%20Nomor%208%20Tahun%201997.pdf"
    context: "Kewajiban menyimpan dokumen pembukuan 10 tahun (UU No. 8/1997 Pasal 11; diperkuat Pasal 28 ayat 11 UU KUP)"
brief_id: "sap-clean-core-01"
target_word_count: 1650
publish_month: "2026-08-2"
word_count: 1830
---

# Dimensi Data dalam SAP Clean Core: Menjaga Data Bersih, Bukan Cuma Kode

Ketika sebuah perusahaan mulai serius soal *clean core*, diskusinya hampir selalu berhenti di kode: membersihkan program Z-*custom*, memindahkan ekstensi ke SAP BTP, merapikan modifikasi yang menyulitkan *upgrade*. Ada satu pilar yang jarang masuk radar sampai tagihannya datang, yaitu data. Basis data S/4HANA yang membengkak, kebutuhan memori HANA yang naik, laporan yang makin lambat, semuanya berakar pada data yang tidak pernah dikelola. Tulisan ini membedah dimensi data dalam [SAP Clean Core](https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide) secara praktis: dari tata kelola dan kualitas, sampai *archiving* dan *tiering*, plus kapan pekerjaan ini justru belum layak jadi prioritas Anda.

> **Ringkas:** Dimensi data clean core adalah salah satu dari lima dimensi resmi strategi clean core SAP (di samping Processes, Extensibility, Integrations, dan Operations) yang berfokus menjaga data tetap terkendali dan berkualitas tinggi. SAP memecahnya menjadi lima pilar: strategi, tata kelola, kualitas, efisiensi volume, dan proteksi data.

Yang membuat dimensi ini sering terlewat bukan karena tidak penting, tapi karena efeknya lambat terlihat. Kode kotor langsung menampar saat *upgrade* gagal. Data kotor menumpuk diam-diam, lalu tiba-tiba jadi masalah biaya dan performa di kuartal yang salah.

## Apa itu dimensi data dalam SAP Clean Core?

Dimensi data adalah satu dari lima dimensi resmi clean core SAP, bersama Processes, Extensibility, Integrations, dan Operations. Fokusnya menjaga data tetap terkendali dan berkualitas tinggi. Prinsipnya sederhana: sistem yang bersih bukan hanya bebas kode kustom, tetapi juga bebas data usang, ganda, dan tak tergovernansi.

Kesalahpahaman terbesar adalah menganggap clean core semata soal *keep the code clean*. SAP sendiri membingkai clean core sebagai lima dimensi yang saling menopang (SAP, "5 guiding principles of clean core", Desember 2025):

- **Processes:** proses bisnis mengikuti standar, minim penyimpangan.
- **Extensibility:** ekstensi dibangun di luar inti (mis. di SAP BTP), bukan memodifikasi inti.
- **Data:** data terkendali, berkualitas, dan volumenya diatur.
- **Integrations:** integrasi memakai antarmuka resmi (*API*), bukan sambungan langsung ke tabel.
- **Operations:** operasi dan pemantauan sistem yang rapi.

Menariknya, empat dimensi lain akan cepat kehilangan makna jika data di bawahnya berantakan. Proses yang standar tidak menolong bila *master data*-nya ganda. Laporan real-time tidak berguna bila datanya salah. Karena itu, "keep the data clean" bukan pekerjaan sampingan *housekeeping*, melainkan fondasi yang membuat empat dimensi lainnya berdiri.

## Lima pilar menjaga data tetap bersih: dari strategi sampai proteksi

SAP memecah dimensi data menjadi lima pilar: strategi, tata kelola (*governance*), kualitas, efisiensi volume, dan proteksi. Kelimanya bukan urutan baku, melainkan aspek yang harus diperhatikan bersamaan. Dua pilar pertama, strategi dan governance, adalah tempat sebagian besar perusahaan tersandung karena keduanya soal disiplin, bukan teknologi.

| Pilar (SAP) | Inti | Alat/konsep SAP terkait |
|---|---|---|
| Strategy | Rencana pengelolaan siklus hidup data ujung ke ujung | Kebijakan *retention*/*residence*, peta jalan DVM |
| Governance | Kepemilikan, standar, dan kontrol data yang diformalkan | *Data ownership*, *stewardship*, alur persetujuan |
| Quality | Akurasi, konsistensi, deduplikasi *master data* | *Validation rules*, *quality checks*, MDM |
| Volume efficiency | Menjaga database ramping, menyimpan yang relevan | DVM, *archiving*, *data tiering* |
| Protection | Keamanan dan kepatuhan data | Otorisasi, enkripsi, aturan retensi legal |

Kualitas data adalah syarat mendasar. Akurasi ditegakkan lewat aturan validasi, pemeriksaan berkala, dan proses governance yang jelas siapa pemilik datanya. Inilah yang melahirkan *single source of truth* (satu sumber data yang dipercaya semua divisi): ketika data inti yang bersih dan tergovernansi menjadi sumber tepercaya, ia mengalir mulus ke lapisan analitik dan [Data Warehouse Solutions](https://www.soltius.co.id/id/blog/data-warehouse-solutions) tanpa harus dibersihkan ulang di hilir.

Governance yang lemah punya biaya majemuk. Satu vendor yang tercatat dengan tiga ejaan berbeda akan menghasilkan tiga laporan pengeluaran yang tak pernah cocok. Kalikan dengan ribuan *master record*, dan tim keuangan menghabiskan hari-harinya merekonsiliasi, bukan menganalisis.

## Berapa besar dampak volume data pada biaya dan performa S/4HANA?

Karena HANA berbasis *in-memory* (data aktif disimpan di memori, bukan disk), volume data langsung berkaitan dengan kebutuhan memori dan biaya. Data panas yang misi-kritis menempati tier termahal. Semakin banyak data lama yang dibiarkan menumpuk di sana, semakin berat kebutuhan memori dan semakin lambat pemrosesan laporan.

Besaran persisnya tidak seragam, dan di sinilah banyak artikel keliru dengan menebar angka. SAP tidak mempublikasikan persentase penghematan universal karena hasilnya sangat bergantung pada profil data tiap perusahaan. Yang bisa dinyatakan pasti bersifat kualitatif: data panas berada di memori, tier paling mahal, sehingga memindahkan data yang jarang diakses ke tier lebih murah menekan biaya tanpa membuang datanya. Anggap angka penghematan sebagai *rule-of-thumb*, bukan janji.

Di lapangan, tim implementasi seperti Soltius kerap menemukan *footprint* data nyaris tak pernah dihitung saat perencanaan, lalu jadi kejutan pahit setelah *go-live* ketika tagihan cloud membengkak oleh data yang seharusnya sudah diarsipkan bertahun-tahun lalu.

Urgensinya kini bertambah karena tenggat ECC. SAP menutup *mainstream maintenance* ECC 6 pada 31 Desember 2027 (untuk EHP 6–8; EHP 0–5 sudah berakhir 2025), dengan *extended maintenance* sampai 31 Desember 2030 dengan premi sekitar 2% di atas basis pemeliharaan (SAP Support). Banyak perusahaan akan pindah ke S/4HANA dalam jendela ini, dan memindahkan data kotor bervolume besar hanya memperberat proyek yang sudah rumit.

## Archiving, ILM, dan tiering: kapan memakai yang mana

Ketiganya sering dianggap sama, padahal berbeda peran. *Data tiering* mengatur di lapisan penyimpanan mana data berada. *Archiving* mengeluarkan data dari database operatif ke penyimpanan patuh yang tetap bisa dipanggil. *Data Volume Management* (DVM) adalah payung proses untuk menjaga database seramping mungkin. Urutan yang sehat biasanya begini:

1. **Governance dan kualitas dulu.** Cegah data kotor masuk sejak awal, karena mengarsip data buruk hanya memindahkan masalah ke tempat lain.
2. **Tiering untuk data yang masih dipakai.** Tempatkan data sesuai frekuensi akses tanpa mengeluarkannya dari sistem.
3. **Archiving dan ILM untuk data yang wajib disimpan tapi jarang diakses.** Di sinilah kepatuhan retensi bertemu efisiensi.

Untuk *tiering*, istilah panas/hangat/dingin (*hot/warm/cold*) adalah terminologi SAP resmi, bukan sekadar jargon industri. Mekanismenya jelas dan bisa dipetakan:

| Aspek | Panas (*Hot*) | Hangat (*Warm*) | Dingin (*Cold*) |
|---|---|---|---|
| Akses | Sering, real-time | Sesekali | Jarang |
| Lokasi | *In-memory* HANA | Tier lebih murah, tetap dikelola HANA (mis. NSE) | Penyimpanan termurah / arsip |
| Biaya relatif | Tertinggi | Menengah | Terendah |
| Contoh | Transaksi & *master data* aktif | Data 1–2 tahun lalu untuk analisis sesekali | Data historis untuk kepatuhan |

Tier hangat ditangani antara lain oleh SAP HANA Native Storage Extension (NSE), yang mengelola data hangat di area memori khusus terpisah dari area panas dan memadukan *in-memory* dengan SSD/*flash* untuk rasio biaya-performa yang lebih baik.

Yang paling sering disalahpahami: *archiving* bukan menghapus data. Pada *archiving*, data ditulis ke file arsip di *ILM Store* yang patuh, dikeluarkan dari database operatif, tetapi tetap dapat dipanggil kembali dan tunduk pada aturan *residence* (kapan boleh keluar dari database) serta *retention* (berapa lama wajib disimpan). Penghapusan permanen (*destruction*) baru terjadi setelah masa retensi berakhir. Kerangka bawaan SAP untuk mengatur ini adalah SAP Information Lifecycle Management (ILM), yang menangani tiga hal sekaligus: *archiving*, *retention*, dan *destruction* (SAP Help Portal).

| Aspek | Archiving (ILM/DVM) | Penghapusan (*Destruction*) |
|---|---|---|
| Nasib data | Dipindah ke *ILM Store*, tetap dapat dipanggil | Hilang permanen |
| Kepatuhan retensi | Ya, tunduk *residence* & *retention* | Baru boleh setelah retensi habis |
| Efek ke DB operatif | *Footprint* turun, performa naik | *Footprint* turun permanen |
| Kapan dipakai | Data wajib simpan tapi jarang diakses | Data yang masa retensinya sudah lewat |

Perbedaan ini bukan soal teknis semata, melainkan kepatuhan hukum. Di Indonesia, dokumen dasar pembukuan dan perpajakan wajib disimpan 10 tahun, berdasarkan Pasal 28 ayat (11) UU KUP (mencakup dokumen yang dikelola elektronik) dan [UU No. 8 Tahun 1997 tentang Dokumen Perusahaan Pasal 11](https://jdih.bumn.go.id/storage/peraturan/UU%20Nomor%208%20Tahun%201997.pdf), yang mewajibkan penyimpanan catatan dan bukti pembukuan selama 10 tahun sejak akhir tahun buku. Karena itu, strategi yang benar bukan "hapus data lama", melainkan atur retensi lewat *archiving*. DVM juga berperan sebagai langkah persiapan sebelum konversi: *footprint* yang lebih kecil memangkas ukuran beban sehingga durasi dan risiko [migrasi ERP ke cloud](https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud) ikut turun.

## Kapan membersihkan data BELUM jadi prioritas Anda

Tidak setiap sistem butuh proyek *archiving* agresif hari ini. Untuk sistem yang masih baru atau kecil dengan data muda, upaya membangun kerangka archiving penuh bisa lebih besar daripada manfaatnya. Governance dan kualitas data hampir selalu lebih dulu bernilai daripada memburu pengurangan volume. Bagian ini jarang ditulis kompetitor, padahal justru di sinilah keputusan yang tepat menghemat banyak.

Anda kemungkinan **belum** perlu memprioritaskan archiving jika kondisi berikut yang lebih menonjol:

- **Sistem masih muda dan datanya sedikit.** Database yang belum bertahun-tahun jarang punya cukup data historis untuk membuat archiving sepadan usahanya. Fokuskan energi pada mencegah data kotor masuk.
- **Governance belum ada.** Mengarsip data yang belum tergovernansi hanya memindahkan kekacauan ke arsip. Bereskan kepemilikan dan standar data lebih dulu.
- **Risiko over-archiving nyata.** Mengarsip terlalu agresif bisa menyulitkan audit dan pelaporan bila data yang masih relevan ikut terdorong keluar. Retensi harus mengikuti kewajiban hukum dan kebutuhan bisnis, bukan sekadar menekan ukuran database.

Intinya, membersihkan data adalah keseimbangan antara kepatuhan dan efisiensi, bukan lomba mengecilkan database. Perusahaan yang paling sehat datanya bukan yang paling agresif mengarsip, melainkan yang paling disiplin mencegah data kotor sejak titik masuknya.

## FAQ (Pertanyaan yang Sering Diajukan)

### Apa itu dimensi data dalam SAP Clean Core?
Dimensi data adalah satu dari lima dimensi resmi clean core SAP, bersama Processes, Extensibility, Integrations, dan Operations. Fokusnya menjaga data tetap terkendali dan berkualitas tinggi. SAP memecahnya menjadi lima pilar: strategi, tata kelola, kualitas, efisiensi volume, dan proteksi. Intinya, sistem yang bersih bukan hanya bebas kode kustom, tetapi juga bebas data usang, ganda, dan tak tergovernansi.

### Apa itu SAP Information Lifecycle Management (ILM)?
SAP Information Lifecycle Management (ILM) adalah kerangka bawaan SAP untuk mengelola seluruh siklus hidup data sesuai kepatuhan. ILM menangani tiga hal: *archiving* (memindahkan data yang tak lagi dipakai harian keluar dari sistem operatif), *retention* (berapa lama data wajib disimpan), dan *destruction* (menghapus permanen setelah masa retensi habis). ILM membantu mengendalikan volume database sekaligus memenuhi kewajiban hukum penyimpanan dokumen.

### Apa bedanya archiving dan menghapus data di SAP?
Berbeda mendasar. *Archiving* menulis data ke file arsip di *ILM Store* yang patuh, lalu mengeluarkannya dari database operatif, namun data tetap bisa dipanggil kembali dan tetap tunduk pada masa retensi. Menghapus (*destruction*) berarti data hilang permanen, dan itu baru boleh dilakukan setelah masa retensi habis. Untuk dokumen pembukuan yang wajib disimpan 10 tahun, archiving adalah jawabannya, bukan penghapusan.

### Apakah Data Volume Management wajib sebelum migrasi S/4HANA?
Tidak wajib secara formal, tetapi sangat dianjurkan. Data Volume Management (DVM) mengurangi jejak database dengan mengarsip data historis dan menghapus data usang. *Footprint* yang lebih kecil memangkas ukuran beban migrasi sehingga durasi konversi ke S/4HANA lebih pendek dan risikonya lebih rendah. SAP menempatkan DVM sebagai langkah persiapan sebelum konversi; memindahkan data kotor hanya memperberat proyek.

### Berapa lama data harus disimpan menurut aturan Indonesia?
Untuk dokumen dasar pembukuan dan perpajakan, kewajibannya 10 tahun. Dasar hukumnya Pasal 28 ayat (11) UU KUP (termasuk dokumen yang dikelola elektronik) dan UU No. 8 Tahun 1997 tentang Dokumen Perusahaan Pasal 11, yang mewajibkan penyimpanan catatan dan bukti pembukuan selama 10 tahun sejak akhir tahun buku. Karena itu strategi data yang benar bukan "hapus data lama", melainkan atur retensi lewat archiving.

### Apakah data kotor bisa menggagalkan migrasi S/4HANA?
Data kotor jarang membuat proyek gagal total, tetapi rutin membuatnya membengkak biaya dan molor. Duplikasi *master data*, record yang tak konsisten, dan volume transaksi lama yang tak dikelola memperbesar beban migrasi, memicu error saat konversi, dan menurunkan kualitas laporan di sistem baru. Prinsip clean core menempatkan kualitas dan governance data sebagai fondasi, dan merapikan data lebih dulu jauh lebih murah daripada memperbaikinya setelah go-live.

### Apa itu tiering data hot/warm/cold?
Data tiering adalah penempatan data pada lapisan penyimpanan sesuai frekuensi aksesnya, dan hot/warm/cold adalah istilah SAP resmi. Data panas yang misi-kritis disimpan *in-memory* di HANA untuk performa real-time; data hangat yang lebih jarang dipakai ditaruh di tier lebih murah (mis. lewat SAP HANA Native Storage Extension) tapi tetap dikelola sebagai bagian database; data dingin yang jarang diakses ditempatkan di penyimpanan termurah. Tiering menekan biaya memori tanpa membuang data.

## Kesimpulan

Clean core yang sesungguhnya berhenti bekerja bila datanya diabaikan. Kode yang rapi di atas data yang kotor tetap menghasilkan laporan yang salah, biaya cloud yang liar, dan migrasi yang tersendat. Mengurutkan pekerjaannya dengan benar, governance dan kualitas dulu, lalu tiering, baru archiving sesuai retensi, membuat sistem tetap ramping tanpa melanggar kewajiban simpan 10 tahun. Melalui layanan Data and AI Consulting, Soltius membantu merapikan data menjadi satu sumber kebenaran sebelum dan sesudah migrasi, sehingga fondasi datanya bersih lebih dulu, bukan dibereskan belakangan.

Untuk mendiskusikan kesiapan dimensi data clean core di perusahaan Anda, jelajahi solusinya lebih jauh di soltius.co.id.
