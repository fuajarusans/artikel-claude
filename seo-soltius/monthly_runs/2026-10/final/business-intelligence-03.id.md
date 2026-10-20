---
title: "Business Intelligence untuk Rumah Sakit: BOR, Alur Pasien, dan Klaim BPJS"
meta_title: "Business Intelligence untuk Rumah Sakit: BOR & Klaim BPJS"
meta_description: "Business Intelligence untuk rumah sakit menyatukan data SIMRS, keuangan, dan klaim BPJS menjadi dashboard BOR, alur pasien, dan INA-CBG yang terpantau harian."
slug: "business-intelligence-rumah-sakit-bor-klaim-bpjs"
language: "id"
primary_keyword: "Business Intelligence"
secondary_keywords:
  - "Business Intelligence rumah sakit"
  - "BOR (Bed Occupancy Rate)"
  - "ALOS / LOS"
  - "klaim BPJS / INA-CBG"
  - "alur pasien"
  - "SIMRS"
  - "casemix / koding"
  - "dashboard rumah sakit"
  - "SAP Analytics Cloud"
  - "monitoring klaim pending"
  - "revenue cycle rumah sakit"
  - "indikator mutu pelayanan"
internal_links:
  - url: "https://www.soltius.co.id/id/blog/business-intelligence"
    anchor: "Business Intelligence"
  - url: "https://www.soltius.co.id/id/blog/manfaat-dan-modul-warehouse-management-system"
    anchor: "warehouse management system"
  - url: "https://www.soltius.co.id/id/blog/low-code-and-no-code-platforms"
    anchor: "platform low-code"
external_citations:
  - url: "https://kemkes.go.id/id/ini-dia-standar-tarif-baru-pelayanan-jkn"
    context: "Tarif terbaru INA-CBG (Permenkes No. 3 Tahun 2023) dan mekanisme pembayaran JKN"
  - url: "https://finansial.bisnis.com/read/20260702/215/1985060/bpjs-kesehatan-peserta-jkn-2827-juta-jiwa-beban-pelayanan-kesehatan-capai-rp1913-triliun"
    context: "Peserta JKN 282,7 juta jiwa dan beban pelayanan kesehatan Rp191,3 triliun (2025)"
brief_id: "business-intelligence-03"
target_word_count: 1650
publish_month: "2026-10"
word_count: 1942
---

# Business Intelligence untuk Rumah Sakit: BOR, Alur Pasien, dan Klaim BPJS

Seorang direktur rumah sakit sering menatap dua angka yang saling bertengkar: tempat tidur terasa selalu penuh, tetapi arus kas seret karena klaim BPJS menumpuk sebagai piutang dan sebagian ditolak akibat koding yang tidak sesuai tarif INA-CBG. Datanya sebenarnya sudah ada di SIMRS (Sistem Informasi Manajemen Rumah Sakit), hanya saja laporan BOR, lama rawat, dan status klaim baru tersaji mingguan, terlambat untuk mencegah pasien menumpuk di IGD atau klaim lewat tenggat. Di sinilah [Business Intelligence](https://www.soltius.co.id/id/blog/business-intelligence) untuk rumah sakit masuk: mengubah data yang sudah terkumpul menjadi keputusan harian. Artikel ini membedah KPI yang wajib dipantau, cara BI mengamankan klaim, dari mana datanya, dan kapan dashboard justru menyesatkan.

> **Ringkas:** *Business Intelligence* (BI) untuk rumah sakit adalah praktik menyatukan data SIMRS, keuangan, dan klaim menjadi dashboard yang memantau operasional (BOR, ALOS), mutu pelayanan, dan siklus klaim BPJS (INA-CBG) secara terkini. Dengan BI, manajemen melihat utilisasi tempat tidur, alur pasien, dan status klaim dalam satu tampilan, bukan menunggu rekap manual yang sudah basi saat dibaca.

## Apa Itu Business Intelligence untuk Rumah Sakit?

Business Intelligence rumah sakit berbeda dari rekap bulanan SIMRS: ia menarik data operasional, keuangan, dan klaim dari banyak sistem, lalu menyajikannya sebagai dashboard yang bisa ditindaklanjuti harian. Manajemen tidak lagi menunggu laporan yang sudah basi, melainkan melihat utilisasi tempat tidur, alur pasien, dan status klaim secara terkini di satu layar.

Perbedaannya halus tetapi penting. SIMRS jago mencatat transaksi, tapi laporannya cenderung statis dan terlambat; angka baru terbaca setelah kejadian lewat. BI duduk di atas data itu dan menjawab pertanyaan manajemen, bukan sekadar menyimpan catatan.

Skala program JKN membuat urusan ini bersifat kas-kritis. Per 31 Desember 2025, peserta JKN mencapai 282,7 juta jiwa atau sekitar 98,62% penduduk, dengan lebih dari 725,3 juta pemanfaatan layanan sepanjang tahun dan beban pelayanan kesehatan menembus Rp191,3 triliun (BPJS Kesehatan, 2025). Bagi mayoritas rumah sakit, pendapatan bertumpu pada arus kas klaim BPJS, sehingga keterlambatan rekap bukan sekadar soal administrasi, melainkan soal likuiditas.

## KPI Rumah Sakit Apa Saja yang Wajib Dipantau?

Dashboard rumah sakit idealnya memantau empat kelompok KPI: efisiensi tempat tidur (BOR, ALOS, TOI, BTO), alur pasien (waktu tunggu IGD dan rawat jalan), mutu pelayanan (angka readmisi dan infeksi), serta sisi finansial dan klaim (piutang klaim, klaim pending, rasio klaim ditolak, dan nilai paket INA-CBG). Tiap indikator harus terhubung ke satu tindakan manajemen, bukan sekadar angka.

Empat indikator efisiensi tempat tidur berasal dari grafik Barber-Johnson (1973) yang kemudian diadopsi acuan Depkes/Kemenkes. BOR (*Bed Occupancy Rate*, tingkat hunian tempat tidur) dihitung sederhana: jumlah hari perawatan dibagi hasil kali jumlah tempat tidur dengan jumlah hari dalam periode, lalu dikali 100%.

| Indikator | Arti | Rentang ideal (Depkes / Barber-Johnson) | Sinyal untuk manajemen |
|---|---|---|---|
| **BOR** | % pemakaian tempat tidur | 60–85% (Depkes) / 75–85% (Barber-Johnson) | Terlalu tinggi, percepat pemulangan atau tambah kapasitas; terlalu rendah, kapasitas menganggur |
| **ALOS/AvLOS** | Rata-rata lama rawat | 6–9 hari (Depkes) / 3–12 hari (Barber-Johnson) | Memanjang tanpa alasan klinis, tinjau *discharge planning* |
| **TOI** | Jeda tempat tidur kosong antar pasien | 1–3 hari (keduanya) | < 1 hari, risiko tanpa jeda sterilisasi; > 3 hari, tempat tidur idle |
| **BTO** | Frekuensi pakai tempat tidur per periode | 40–50×/tahun (Depkes) / ~30×/tahun (Barber-Johnson) | Rendah menandakan utilisasi buruk |

ALOS (*Average Length of Stay*) atau LOS mengukur rata-rata lama pasien dirawat; TOI (*Turn Over Interval*) mengukur jeda tempat tidur kosong; BTO (*Bed Turn Over*) mengukur seberapa sering satu tempat tidur dipakai.

Satu peringatan yang sering dilupakan: tidak ada satu angka "ideal" yang mutlak. BOR 90% bisa terlihat hebat, padahal justru menandakan rumah sakit kewalahan, IGD menumpuk, dan nyaris tanpa jeda sterilisasi antar pasien. Sebaliknya, BOR 55% buruk untuk bangsal umum namun wajar untuk unit isolasi atau ICU cadangan. Karena itu dashboard sebaiknya kontekstual per bangsal, bukan satu angka untuk seluruh rumah sakit. TOI 1–3 hari relatif aman dijadikan patokan karena disepakati kedua acuan.

## Bagaimana BI Mempercepat dan Mengamankan Klaim BPJS (INA-CBG)?

Business Intelligence mempercepat klaim BPJS dengan memantau klaim pending, klaim yang mendekati tenggat, dan selisih antara koding diagnosis dengan tarif INA-CBG secara harian. Karena rumah sakit wajib mengajukan klaim paling lambat tanggal 10 bulan berikutnya dan BPJS membayar dalam 15 hari kerja setelah berkas lengkap, deteksi dini ini menekan penolakan dan menjaga arus kas dari piutang yang menumpuk.

INA-CBG (*Indonesian Case Base Groups*) adalah metode pembayaran *casemix* prospektif: diagnosis dan prosedur dikelompokkan berdasarkan kemiripan ciri klinis dan biaya, lalu dibayar menurut tarif paket yang sudah ditetapkan sebelum layanan diberikan. Pedomannya diatur Permenkes No. 76 Tahun 2016, sedangkan standar tarif terbaru ada pada Permenkes No. 3 Tahun 2023 yang diundangkan 9 Januari 2023 (Kemenkes).

Dalam praktiknya, inilah pekerjaan yang dibuat ringan oleh dashboard klaim:

1. **Memantau klaim pending dan yang mendekati tenggat** agar tidak ada berkas kedaluwarsa sebelum tanggal 10.
2. **Menyorot selisih koding versus tarif INA-CBG** sehingga potensi *dispute* ketahuan sebelum diajukan, bukan setelah ditolak.
3. **Melacak umur piutang klaim** agar manajemen tahu berapa kas yang tertahan dan di tahap mana.
4. **Menandai rasio klaim ditolak** per unit, menjadi umpan balik untuk Unit Casemix dan koder.

Jujur saja, BI tidak memperbaiki klaim yang salah koding; ia hanya memperlihatkannya lebih cepat. Akurasi koding tetap pekerjaan Unit Casemix. Selisih antara biaya riil dan tarif INA-CBG pun bervariasi per kasus dan per rumah sakit; jurnal akademik menyajikannya sebagai gambaran, bukan satu angka nasional yang pasti, jadi perlakukan demikian di dashboard Anda.

## Dari Mana Datanya? Menghubungkan SIMRS, Keuangan, dan Casemix

Data dashboard rumah sakit berasal dari tiga lapisan: SIMRS (registrasi, rawat inap dan jalan, farmasi, laboratorium), sistem keuangan atau ERP (biaya, logistik, pengadaan), dan data *casemix* atau koding. Ketiganya disatukan lewat proses ETL (*extract, transform, load*) ke sebuah *data warehouse* sebelum divisualkan. Dashboard duduk di atas sumber-sumber itu, bukan menggantikan SIMRS.

Secara teknis, lapisan ini bisa dipetakan dari yang netral-vendor hingga ke ekosistem SAP.

| Lapisan | Fungsi | Contoh SAP |
|---|---|---|
| Sumber | Data klinis-administratif | SIMRS (pihak ketiga) |
| Fondasi ERP | Keuangan, logistik, farmasi | SAP S/4HANA |
| Integrasi/warehouse | ETL, pemodelan, satu sumber kebenaran | SAP Datasphere / BW/4HANA |
| Dashboard/BI | Visualisasi, self-service, prediktif | SAP Analytics Cloud |

Penyatuan ini umumnya ditempuh lewat API atau konektor integrasi. Standar seperti HL7 FHIR memang dipakai, tetapi untuk pertukaran data klinis antarfasilitas ke platform nasional SATUSEHAT, bukan otomatis menjadi jalur internal dari SIMRS ke ERP. Membedakan keduanya penting agar ekspektasi integrasi tetap realistis.

Sisi logistik medis sering diremehkan sebagai sumber data. Stok obat dan alat kesehatan di gudang farmasi menentukan biaya sekaligus ketersediaan layanan, dan pola pengelolaannya beririsan erat dengan praktik [warehouse management system](https://www.soltius.co.id/id/blog/manfaat-dan-modul-warehouse-management-system). Tanpa data persediaan yang rapi, analisis biaya per kasus dan kesiapan layanan mudah menjadi tebak-tebakan.

Di lapisan paling atas, SAP Analytics Cloud (SAC) berperan sebagai dashboard manajemen sekaligus alat analitik, memadukan business intelligence dengan perencanaan. Ia memvisualkan data yang sudah dimodelkan di *data warehouse*, bukan menyimpan rekam medis itu sendiri.

## Kapan Dashboard RS Justru Menyesatkan: Bereskan Data Administratif dan Koding Dulu

Dashboard rumah sakit bisa menyesatkan ketika data sumbernya belum tertib: koding diagnosis tidak konsisten, data master pasien atau dokter ganda, dan input SIMRS yang tidak disiplin membuat angka BOR dan status klaim keliru. Prinsipnya *garbage in, garbage out*. Analitik hanya memperlihatkan masalah lebih cepat, bukan memperbaiki koding yang salah secara otomatis.

Bagian ini jarang ditulis vendor, padahal justru di sinilah kepercayaan dibangun. Sebelum berinvestasi pada visualisasi yang mengilap, periksa dulu fondasi berikut:

- **Koding diagnosis belum konsisten.** Jika koder berbeda memberi kode berbeda untuk kasus serupa, nilai klaim dan rasio *dispute* di dashboard tidak bisa dipercaya.
- **Data master pasien dan dokter masih ganda.** Satu pasien dengan beberapa nomor rekam medis akan mengacaukan hitungan readmisi, ALOS, dan utilisasi.
- **Input SIMRS tidak disiplin.** Waktu masuk dan keluar yang diisi asal membuat BOR dan TOI menyimpang dari kenyataan di lapangan.
- **Tata kelola privasi belum ditetapkan.** Data pasien tunduk pada UU Pelindungan Data Pribadi; dashboard manajemen idealnya menampilkan data agregat dengan kontrol akses berbasis peran. Pembahasan teknis seperti *masking* dan *role-level security* layak dibahas terpisah.

Dalam praktiknya, pendampingan analitik yang sehat justru dimulai dari pekerjaan yang tidak glamor ini: menertibkan master data dan koding sebelum dashboard dinyalakan. Salah satu cara menertibkan data di sumber adalah membangun formulir pendukung yang terstruktur, misalnya untuk registrasi tambahan atau pencatatan *casemix*, yang kerap dibuat cepat di atas [platform low-code](https://www.soltius.co.id/id/blog/low-code-and-no-code-platforms) sebagai pelengkap SIMRS.

Ada pula mitos kecepatan yang perlu diluruskan. Tidak semua hal perlu *real-time*. Klaim bersifat bulanan, jadi pembaruan harian sudah lebih dari cukup; yang benar-benar menuntut kecepatan adalah alur pasien dan IGD. Memaksakan "real-time" seragam hanya menambah biaya tanpa menambah keputusan yang lebih baik.

## FAQ (Pertanyaan yang Sering Diajukan)

### Apa itu Business Intelligence untuk rumah sakit?

Business Intelligence (BI) rumah sakit adalah praktik menyatukan data SIMRS, keuangan, dan klaim menjadi dashboard yang memantau operasional (BOR, ALOS), mutu pelayanan, dan siklus klaim BPJS (INA-CBG) secara terkini. Berbeda dari rekap bulanan SIMRS, BI menyajikan utilisasi tempat tidur, alur pasien, dan status klaim dalam satu tampilan agar manajemen mengambil keputusan harian, bukan menunggu laporan yang sudah basi.

### Apa itu BOR dan bagaimana rumusnya?

BOR (Bed Occupancy Rate) adalah persentase pemakaian tempat tidur dalam satu periode. Rumusnya: jumlah hari perawatan dibagi hasil kali jumlah tempat tidur dengan jumlah hari, dikali 100%. Rentang ideal berbeda antar acuan, yakni 60–85% menurut Depkes dan 75–85% menurut Barber-Johnson. BOR terlalu tinggi berisiko pasien menumpuk; terlalu rendah berarti kapasitas menganggur.

### Apa itu ALOS atau LOS?

ALOS (Average Length of Stay) atau LOS adalah rata-rata lama seorang pasien dirawat inap, dihitung dari total hari rawat dibagi jumlah pasien keluar. Rentang yang umum dianggap ideal 6–9 hari menurut Depkes, sedangkan Barber-Johnson memberi rentang lebih lebar, 3–12 hari. ALOS yang memanjang tanpa alasan klinis menandakan inefisiensi alur pasien dan menaikkan biaya per kasus.

### Bagaimana BI membantu mempercepat dan mengamankan klaim BPJS?

BI memantau klaim pending, klaim mendekati tenggat, dan selisih koding terhadap tarif INA-CBG secara harian. Karena rumah sakit wajib mengajukan klaim paling lambat tanggal 10 bulan berikutnya dan BPJS membayar dalam 15 hari kerja setelah berkas lengkap, dashboard klaim membantu mendeteksi *dispute* koding lebih awal, menekan penolakan, dan menjaga arus kas dari piutang yang menumpuk.

### Apa itu INA-CBG?

INA-CBG (Indonesian Case Base Groups) adalah sistem pembayaran *casemix* prospektif yang dipakai BPJS Kesehatan untuk membayar klaim rumah sakit dalam program JKN. Diagnosis dan prosedur dikelompokkan berdasarkan kemiripan ciri klinis dan biaya, lalu dibayar menurut tarif paket yang sudah ditetapkan. Pedomannya diatur Permenkes No. 76 Tahun 2016, dengan standar tarif terbaru pada Permenkes No. 3 Tahun 2023.

### Dari mana data dashboard rumah sakit berasal?

Datanya berlapis: SIMRS menyimpan registrasi, rawat inap dan jalan, farmasi, serta laboratorium; sistem keuangan atau ERP menyimpan biaya, logistik, dan pengadaan; data *casemix* menyimpan diagnosis-prosedur. Ketiga sumber disatukan lewat proses ETL ke sebuah *data warehouse*, baru divisualkan di dashboard BI. Karena itu dashboard hanya seakurat data sumbernya, sehingga koding dan master data harus tertib lebih dulu.

### Apakah data pasien aman saat masuk ke dashboard?

Data pasien tunduk pada UU Pelindungan Data Pribadi (UU PDP) dan aturan rekam medis elektronik. Dashboard manajemen idealnya menampilkan data agregat seperti BOR, klaim, dan alur pasien, bukan identitas individual, dengan kontrol akses berbasis peran. Tata kelola ini adalah prasyarat, bukan tambahan; pembahasan teknis *masking* dan *role-level security* dibahas terpisah di artikel keamanan data.

## Kesimpulan

Dua angka yang bertengkar di awal tadi, tempat tidur yang penuh tetapi kas yang seret, sebenarnya bisa didamaikan ketika data operasional dan klaim duduk di satu dashboard yang dibaca harian, bukan mingguan. Kuncinya bukan membeli alat termahal, melainkan menertibkan data sumber lebih dulu, memilih KPI yang memicu tindakan, dan memastikan siklus klaim BPJS terpantau sebelum tenggat. Melalui layanan Data and AI Consulting, Soltius mengimplementasikan SAP Analytics Cloud di atas data SIMRS dan keuangan agar manajemen rumah sakit memantau BOR, alur pasien, dan klaim BPJS dalam satu tampilan, tanpa membangun ulang SIMRS yang sudah ada.

Untuk menilai kesiapan data dan analitik rumah sakit Anda, mulai dari koding hingga dashboard klaim, kunjungi soltius.co.id dan mulai percakapan konsultatif.
