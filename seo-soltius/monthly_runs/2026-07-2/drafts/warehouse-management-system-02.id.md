---
title: "Warehouse Management System untuk Farmasi & FMCG: Cold Chain, FEFO, dan Kepatuhan CDOB"
meta_title: "Warehouse Management System Farmasi: FEFO & CDOB"
meta_description: "Warehouse management system untuk farmasi & FMCG: cara WMS menegakkan FEFO, menjaga cold chain 2–8°C, mengelola batch/serial, dan mendukung kepatuhan CDOB."
slug: "warehouse-management-system-farmasi-cold-chain-fefo-cdob"
language: "id"
primary_keyword: "warehouse management system"
secondary_keywords:
  - "WMS farmasi"
  - "cold chain 2-8 derajat"
  - "CDOB BPOM"
  - "FEFO First Expired First Out"
  - "traceability batch dan serial number"
  - "serialisasi obat 2D barcode"
  - "handling unit management"
  - "SAP Extended Warehouse Management"
  - "FMCG shelf-life management"
internal_links:
  - url: "https://www.soltius.co.id/id/blog/konsep-warehouse-management-system-yang-wajib-anda-tahu"
    anchor: "warehouse management system"
  - url: "https://www.soltius.co.id/id/blog/business-intelligence"
    anchor: "business intelligence"
  - url: "https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud"
    anchor: "migrasi ERP ke cloud"
external_citations:
  - url: "https://www.peraturan.go.id/id/peraturan-bpom-no-20-tahun-2025"
    context: "Standar CDOB terkini diatur Peraturan BPOM No. 20 Tahun 2025 (diundangkan 3 Juli 2025)"
  - url: "https://learning.sap.com/courses/basic-customizing-in-sap-s-4hana-ewm/applying-the-stock-removal-strategies"
    context: "Strategi stock removal SAP EWM, termasuk Shelf Life Expiration Date (logika FEFO), batch, dan handling unit"
brief_id: "warehouse-management-system-02"
target_word_count: 1650
publish_month: "2026-07-2"
word_count: 1740
---

# Warehouse Management System untuk Farmasi & FMCG: Cold Chain, FEFO, dan Kepatuhan CDOB

Di gudang obat, satu batch yang salah suhu atau kedaluwarsa yang lolos ke pengiriman bukan sekadar kerugian stok, tapi risiko keselamatan pasien dan potensi pelanggaran CDOB yang bisa menyeret izin distribusi. Manajer gudang farmasi dan FMCG memikul tanggung jawab yang tidak dimiliki gudang biasa: traceability batch, serialisasi, dan rantai dingin yang tidak boleh putus. Di sinilah sebuah [warehouse management system](https://www.soltius.co.id/id/blog/konsep-warehouse-management-system-yang-wajib-anda-tahu) yang tepat menjadi pembeda. Artikel ini tidak mengulang definisi generik WMS lintas industri, melainkan menjawab satu hal spesifik: fitur apa yang benar-benar dibutuhkan gudang teregulasi, dan di mana batas kemampuannya.

> **Secara singkat:** *Warehouse Management System* (WMS) untuk industri farmasi adalah sistem manajemen gudang yang dirancang mengelola batch, tanggal kedaluwarsa, nomor seri, dan penyimpanan suhu terkontrol sesuai kepatuhan distribusi obat. Berbeda dari inventory biasa, WMS farmasi menegakkan FEFO (mendahulukan kedaluwarsa terdekat), menjaga rantai dingin 2–8°C, dan menyediakan *audit trail* traceability yang dibutuhkan standar CDOB BPOM.

Kita akan membahas mengapa gudang farmasi menuntut WMS berbeda, fitur konkret yang menegakkan kepatuhan, dukungan cold chain dan CDOB, traceability untuk *recall* cepat, hingga satu hal yang jarang diakui vendor: apa yang WMS tidak bisa gantikan.

## Mengapa Gudang Farmasi dan FMCG Membutuhkan WMS yang Berbeda?

Gudang farmasi dan FMCG berbeda karena tiga variabel yang tidak relevan di gudang umum. Sebuah batch obat bukan sekadar unit stok, melainkan entitas dengan masa simpan, karakteristik suhu, dan jejak distribusi yang wajib dapat ditelusuri. WMS generik yang hanya menghitung kuantitas tidak dirancang untuk beban ini. Ketiga variabel itu:

- **Manajemen batch dan kedaluwarsa.** Di gudang biasa, dua palet produk yang sama saling substitusi; di gudang obat, dua batch dengan tanggal kedaluwarsa berbeda harus diperlakukan berbeda, dan urutan pengeluarannya menentukan apakah ada produk kedaluwarsa yang lolos ke pasien.
- **Rantai dingin.** Produk seperti vaksin dan serum harus disimpan pada rentang +2°C sampai +8°C, karena suhu menentukan stabilitas dan efikasinya. Penyimpangan beberapa jam saja bisa merusak satu batch bernilai ratusan juta rupiah tanpa selalu terlihat kasat mata.
- **Regulasi.** Distribusi obat di Indonesia tunduk pada standar Cara Distribusi Obat yang Baik (CDOB), yang menuntut mutu obat terjaga di sepanjang jalur distribusi. Gudang yang tidak memenuhinya menghadapi konsekuensi hukum, bukan sekadar teguran operasional.

## FEFO, Batch, dan Serialisasi: Fitur WMS yang Menjaga Kepatuhan

Fitur inti yang membuat WMS layak untuk farmasi adalah penegakan FEFO, manajemen batch dengan pengecekan masa simpan, dan dukungan serialisasi. Ketiganya mengubah kepatuhan dari pekerjaan manual yang rawan salah menjadi aturan sistem yang dijalankan otomatis pada setiap transaksi. Prinsipnya vendor-neutral; implementasinya paling matang di WMS kelas enterprise.

Mulai dari yang paling sering disalahpahami: **FEFO** (*First Expired First Out*). Metode ini mendahulukan barang dengan tanggal kedaluwarsa terdekat, bukan yang paling lama masuk gudang seperti FIFO (*First In First Out*). Bedanya krusial untuk obat karena batch yang datang belakangan bisa saja kedaluwarsa lebih dulu. Menariknya, di **SAP Extended Warehouse Management (EWM)** logika ini tidak dinamai "FEFO", melainkan diimplementasikan lewat strategi resmi *Shelf Life Expiration Date* yang mengurutkan stok berdasarkan tanggal kedaluwarsa (field VFDAT) saat pengambilan (SAP Learning). FEFO adalah istilah industri; sistem menyebutnya berbeda.

| Aspek | FIFO | LIFO | FEFO |
|---|---|---|---|
| Dasar pengeluaran | Urutan masuk (terlama dulu) | Urutan masuk (terbaru dulu) | Tanggal kedaluwarsa terdekat dulu |
| Cocok untuk | Barang umum tanpa expiry ketat | Kasus akuntansi tertentu (jarang untuk obat) | Obat, vaksin, makanan, kosmetik |
| Di SAP EWM | Strategi FIFO / Stringent FIFO | Strategi LIFO | Strategi *Shelf Life Expiration Date* |

Fitur kedua adalah **batch management** dengan pengecekan sisa masa simpan. Saat barang diterima (*goods receipt*), sistem mengumpulkan karakteristik batch sesuai relevansinya. Jika sisa masa simpan kurang dari ambang yang ditetapkan, WMS dapat dikonfigurasi menolak atau mengunci penerimaan itu, sehingga produk yang hampir kedaluwarsa tidak diam-diam masuk ke stok aktif.

Fitur ketiga adalah **serialisasi**. Di Indonesia, penerapan track and trace obat diatur melalui Peraturan BPOM No. 22 Tahun 2022 tentang Penerapan 2D Barcode. Barcode autentikasi memakai standar GS1 DataMatrix dan memuat lima elemen data: GTIN, nomor izin edar BPOM, nomor batch, tanggal kedaluwarsa, dan nomor seri. Penerapannya bertahap per kategori produk, bukan serentak, jadi keliru bila ada yang mengklaim seluruh obat sudah wajib serialisasi penuh hari ini.

## Bagaimana WMS Mendukung Cold Chain dan Kepatuhan CDOB?

WMS mendukung cold chain dengan mengelola *storage type* khusus untuk area bersuhu terkontrol (misalnya cold room 2–8°C), memisahkan penempatan produk rantai dingin, dan mencatat setiap pergerakan batch dalam *audit trail*. Untuk pemantauan suhu real-time, WMS umumnya diintegrasikan dengan sensor atau perangkat IoT, bukan mengukur suhu lewat modul bawaannya sendiri.

Poin ini sering dilebih-lebihkan, jadi perlu ditegaskan: memantau suhu bukan fungsi native WMS. Sistem mengaitkan lokasi penyimpanan dengan tipe area terkontrol, lalu menerima data sensor eksternal agar setiap penyimpangan suhu (*temperature excursion*) terekam dan dapat ditindaklanjuti. Dashboard kepatuhan yang menampilkan tren near-expiry, temperature excursion, dan akurasi batch justru salah satu use case [business intelligence](https://www.soltius.co.id/id/blog/business-intelligence) operasional yang paling berguna di gudang farmasi.

Semua ini bermuara pada CDOB. Standar Cara Distribusi Obat yang Baik terkini diatur **Peraturan BPOM No. 20 Tahun 2025**, yang diundangkan pada 3 Juli 2025 dan menggantikan pedoman teknis sebelumnya. Sertifikat CDOB wajib dimiliki Pedagang Besar Farmasi (PBF), umumnya berlaku lima tahun sesuai ketentuan sertifikasi BPOM. Pengelolaan produk rantai dingin sesuai CDOB menuntut personel terlatih, fasilitas memadai, operasional sesuai SOP, pemeliharaan, serta kalibrasi, kualifikasi, dan validasi. WMS menyentuh sebagian besar area ini lewat pencatatan dan penegakan aturan, tapi tidak seluruhnya.

Sebagai gambaran, studi pemetaan suhu chiller di salah satu PBF di Jakarta menemukan suhu rata-rata cold room 5,15°C, masih dalam rentang aman 2–8°C (Majalah Farmasetika, Universitas Padjadjaran, Mei 2023). Ini temuan satu studi, bukan generalisasi nasional, tapi menunjukkan bahwa data suhu yang tercatat rapi adalah bahan baku audit yang konkret, dan di sinilah WMS berkontribusi.

## Traceability End-to-End: Dari Batch ke Recall dalam Hitungan Menit

Traceability adalah kemampuan menelusuri satu unit produk mundur ke batch asalnya dan maju ke seluruh titik distribusinya. Dengan traceability rapi, sebuah *recall* yang tadinya memakan berhari-hari penyisiran manual bisa dipersempit ke batch spesifik dalam hitungan menit, membatasi kerugian sekaligus melindungi pasien.

Tulang punggung teknisnya adalah **Handling Unit Management (HUM)**. Di SAP EWM, sebuah *handling unit* adalah unit fisik gabungan kemasan dan barang yang diberi nomor identitas unik, umumnya mengikuti standar SSCC (*Serial Shipping Container Code*). Nomor unik inilah yang memungkinkan pelacakan real-time sebuah palet atau karton di sepanjang rantai pasok, dan kapabilitas ini bernilai khusus di industri dengan traceability ketat seperti farmasi, makanan, dan otomotif.

Traceability juga memungkinkan **kontrol status batch**: bergantung pada status disposisinya, sebuah batch dapat dicegah dipilih ke tugas gudang, misalnya batch yang masih menunggu pelulusan mutu tidak boleh ikut dikirim. Pemisahan stok layak-kirim dan tidak-layak-kirim pun menjadi aturan sistem, bukan kewaspadaan manual petugas.

Berikut pemetaan ringkas kebutuhan kepatuhan dan fitur WMS yang menjawabnya, dengan SAP EWM sebagai contoh:

| Kebutuhan kepatuhan | Fitur WMS yang menjawab | Catatan |
|---|---|---|
| Cegah produk kedaluwarsa terkirim | Strategi *Shelf Life Expiration Date* (logika FEFO) | Istilah resmi SAP, bukan "FEFO" |
| Kontrol batch & sisa masa simpan | *Batch management* + cek masa simpan saat *goods receipt* | Bisa menolak/mengunci penerimaan |
| Traceability unit & recall | *Handling Unit Management* (nomor unik, umumnya SSCC) | Mendukung pelacakan real-time |
| Serialisasi obat | Nomor seri + integrasi ke sistem T&T BPOM | Mandat bertahap per PerBPOM 22/2022 |
| Penyimpanan suhu terkontrol | *Storage type* khusus + integrasi sensor/IoT | Monitoring via integrasi, bukan modul bawaan |
| Kesiapan audit CDOB | *Audit trail* pergerakan stok/batch | Mendukung, bukan menggantikan SOP |

Di lapangan, titik paling sensitif justru bukan teknologinya, melainkan konfigurasi. Menetapkan aturan FEFO dan batch dengan benar sejak fase *blueprint* sering menjadi penentu apakah data audit tersedia rapi atau berantakan saat pemeriksaan datang.

## Yang Sering Terlewat: WMS Bukan Pengganti SOP dan Validasi

Bagian ini jarang ditulis vendor, padahal di sinilah kejujuran membangun kepercayaan. WMS memperkuat kepatuhan, tapi tidak menggantikannya. Tidak ada sistem yang otomatis menjamin gudang lolos audit BPOM; CDOB tetap menuntut hal-hal di luar jangkauan perangkat lunak.

Sistem tidak bisa menggantikan **kualifikasi fasilitas dan SOP**. Cold room tetap harus dikualifikasi, sensor suhu dikalibrasi berkala, dan proses divalidasi; dokumentasi tertulis, pelatihan staf, serta disiplin menjalankan prosedur tetap tanggung jawab organisasi. WMS canggih di atas SOP yang kacau hanya merapikan pencatatan dari proses yang tetap keliru.

Ada pula pertanyaan **kapan investasi WMS enterprise belum menjadi prioritas**. Untuk gudang bervolume rendah dengan satu lokasi dan lini produk terbatas, memperbaiki SOP dasar, menertibkan data master, dan menegakkan FEFO secara disiplin bisa lebih mendesak daripada mengimplementasikan sistem berskala besar. WMS enterprise memberi nilai penuh ketika kompleksitas, jumlah SKU, dan volume transaksi sudah melampaui kemampuan proses manual menjaganya tetap patuh. Karena EWM umumnya berjalan di atas S/4HANA, kesiapan platform inti lewat [migrasi ERP ke cloud](https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud) juga menjadi pertimbangan agar traceability terpusat, bukan tambal-sulam di gudang.

## FAQ (Pertanyaan yang Sering Diajukan)

### Apa itu FEFO dan apa bedanya dengan FIFO?
FEFO (*First Expired First Out*) mendahulukan barang dengan tanggal kedaluwarsa terdekat, sedangkan FIFO berbasis urutan masuk. Untuk obat dan makanan, FEFO lebih tepat karena batch yang datang belakangan bisa kedaluwarsa lebih dulu. Di SAP EWM, logika ini dijalankan lewat strategi *Shelf Life Expiration Date*.

### Apa itu CDOB dan siapa yang wajib mematuhinya?
CDOB (Cara Distribusi Obat yang Baik) adalah standar yang memastikan mutu obat terjaga di sepanjang jalur distribusi. Standar terkini diatur Peraturan BPOM No. 20 Tahun 2025. Sertifikat CDOB wajib dimiliki Pedagang Besar Farmasi (PBF), umumnya berlaku lima tahun, dan mencakup fasilitas, personel, SOP, hingga kalibrasi.

### Apakah WMS bisa mengelola tanggal kedaluwarsa secara otomatis?
Bisa. WMS enterprise seperti SAP EWM mengelola kedaluwarsa lewat batch management dan strategi *Shelf Life Expiration Date*. Sistem dapat mengecek sisa masa simpan saat penerimaan barang dan, jika dikonfigurasi, menolak barang yang masa simpannya kurang. Saat pengambilan, stok diurutkan otomatis berdasarkan kedaluwarsa terdekat (FEFO).

### Bagaimana WMS membantu menjaga cold chain?
WMS mengelola *storage type* khusus untuk area bersuhu terkontrol (misalnya cold room 2–8°C), memisahkan penempatan produk rantai dingin, dan mencatat audit trail pergerakan batch. Untuk pemantauan suhu, WMS umumnya diintegrasikan dengan sensor atau IoT agar penyimpangan suhu terekam. Namun WMS mendukung, bukan menggantikan, kualifikasi cold room dan validasi yang tetap diwajibkan CDOB.

### Apa itu serialisasi obat (track and trace)?
Serialisasi obat adalah pemberian identitas unik pada setiap kemasan agar dapat dilacak sepanjang rantai pasok. Di Indonesia, penerapannya diatur Peraturan BPOM No. 22 Tahun 2022 tentang 2D Barcode berstandar GS1. Barcode autentikasi memuat GTIN, nomor izin edar BPOM, nomor batch, tanggal kedaluwarsa, dan nomor seri. Penerapannya bertahap per kategori produk, bukan serentak.

### Apakah WMS menjamin lolos audit BPOM?
Tidak ada sistem yang otomatis menjamin lolos audit. WMS memperkuat kesiapan dengan traceability batch/serial, penegakan FEFO, dan audit trail lengkap, tetapi kepatuhan CDOB juga menuntut SOP tertulis, personel terlatih, kualifikasi cold chain, serta kalibrasi dan validasi berkala. WMS menyediakan data yang rapi; proses dan dokumentasi tetap tanggung jawab organisasi.

### Apakah FMCG makanan juga membutuhkan FEFO?
Ya. Produk FMCG bermasa simpan terbatas seperti makanan, minuman, produk susu, dan kosmetik menghadapi risiko serupa: barang kedaluwarsa yang lolos berarti *write-off*, penarikan produk, dan kepercayaan merek yang tergerus. FEFO, batch management, dan traceability berlaku lintas industri berbasis shelf-life, bukan hanya farmasi teregulasi.

## Kesimpulan

Kepatuhan di gudang farmasi bukan soal satu fitur ajaib, melainkan rangkaian aturan yang dijalankan konsisten pada setiap batch, penerimaan, dan pengambilan. WMS yang tepat menegakkan FEFO, menjaga jejak batch dan serial, serta menyediakan data audit yang rapi, tetapi keberhasilannya ditentukan jauh sebelum sistem menyala, yaitu di konfigurasi aturan dan kesiapan proses. Sebagai SAP Platinum Partner melalui United VARs dengan pengalaman di industri farmasi dan consumer products, Soltius mendampingi perusahaan mengimplementasikan SAP EWM di industri teregulasi, dari penilaian kebutuhan hingga dukungan pasca go-live, agar konfigurasi FEFO dan batch benar sejak awal.

Untuk mendiskusikan kesiapan cold chain dan traceability gudang farmasi Anda, jelajahi solusinya lebih lanjut di soltius.co.id.
