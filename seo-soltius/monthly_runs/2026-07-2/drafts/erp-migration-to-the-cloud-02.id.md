---
title: "Remediasi Custom Code Sebelum Migrasi ERP ke Cloud"
meta_title: "Remediasi Custom Code Sebelum Migrasi ERP ke Cloud"
meta_description: "Panduan remediasi custom code ABAP sebelum migrasi ERP ke cloud: inventarisasi lewat ATC, kerangka keputusan refactor/retire/recode, dan jalur clean core."
slug: "remediasi-custom-code-migrasi-erp-ke-cloud"
language: "id"
primary_keyword: "ERP migration to the cloud"
secondary_keywords:
  - "migrasi ERP ke cloud"
  - "remediasi custom code SAP"
  - "custom code migration S/4HANA"
  - "ABAP Test Cockpit (ATC)"
  - "Simplification Database"
  - "SAP Custom Code Migration app"
  - "Business Partner remapping"
  - "ABAP Cloud"
  - "side-by-side extensibility SAP BTP"
  - "clean core"
internal_links:
  - url: "https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud"
    anchor: "migrasi ERP ke cloud"
  - url: "https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide"
    anchor: "SAP Clean Core"
  - url: "https://www.soltius.co.id/id/blog/data-warehouse-solutions"
    anchor: "data warehouse solutions"
external_citations:
  - url: "https://help.sap.com/doc/9dcbc5e47ba54a5cbb509afaa49dd5a1/2025.001/en-US/CustomCodeMigration_EndtoEnd.pdf"
    context: "ATC memeriksa custom code terhadap Simplification Database; usage data via SCMON/SUSG; kode tak terpakai dihapus via deletion transport"
  - url: "https://community.sap.com/t5/technology-blog-posts-by-sap/custom-code-migration-to-sap-s-4hana-powered-by-sap-joule-for-developers/ba-p/14329094"
    context: "ATC Explain dan Mass S/4 Custom Code Conversion Agent (rilis Q2 2026) untuk perbaikan temuan ATC secara massal"
brief_id: "erp-migration-to-the-cloud-02"
target_word_count: 1650
publish_month: "2026-07"
word_count: 1645
---

# Remediasi Custom Code Sebelum Migrasi ERP ke Cloud

Data dan infrastruktur biasanya mendapat sorotan paling besar saat perusahaan merencanakan pindah ke cloud. Padahal ada variabel yang lebih diam-diam menentukan apakah proyek selesai tepat waktu: ribuan, kadang jutaan, baris kustomisasi ABAP yang menumpuk di SAP ECC selama satu dekade. Kustomisasi lama inilah yang membuat upgrade mahal dan menghambat jalan ke cloud. Artikel ini bukan tutorial koding, melainkan kerangka keputusan untuk kepala IT dan arsitek SAP: bagaimana menginventarisasi, menyaring, dan memindahkan custom code sebelum [migrasi ERP ke cloud](https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud) — supaya yang ikut pindah hanya kode yang benar-benar bernilai.

> **Secara singkat:** Remediasi custom code adalah proses menyaring dan menyesuaikan kode kustom ABAP (objek Z/Y) agar kompatibel dengan SAP S/4HANA sebelum migrasi ke cloud. Dengan ABAP Test Cockpit (ATC), Simplification Database, dan data pemakaian, tiap objek diputuskan untuk diperbaiki, dipensiunkan, atau ditulis ulang — mengikuti prinsip *clean core* agar upgrade berikutnya tetap aman.

## Apa itu remediasi custom code dan mengapa menentukan kelancaran migrasi ke cloud?

Remediasi custom code adalah proses menyisir seluruh kustomisasi ABAP di sistem lama, memutuskan mana yang dibawa, dan menyesuaikannya ke standar S/4HANA. Ini menentukan kelancaran migrasi karena setiap objek custom yang ikut menambah beban adaptasi, pengujian, dan risiko, sekaligus mempersempit ruang untuk tetap *cloud-ready*.

Akar masalahnya adalah *technical debt* (hutang teknis): selama bertahun-tahun, kebutuhan yang tak tersedia di standar SAP ditambal dengan objek Z/Y, dan akumulasinya membuat tiap upgrade jadi proyek besar. Di S/4HANA, banyak perubahan struktural, seperti penyatuan tabel dan objek yang di-*deprecate*, membuat sebagian kode lama tak lagi jalan tanpa penyesuaian.

Konteksnya terikat waktu. Mainstream maintenance untuk SAP Business Suite 7 (termasuk SAP ERP 6.0) berlaku hingga akhir 2027, dengan *extended maintenance* 2028–2030 berbiaya premium 2 poin persentase (SAP Support Portal). Deadline inilah yang membuat remediasi bukan pekerjaan "nanti saja".

## Cara menginventarisasi dan menganalisis custom code: ATC dan Simplification Database

Inventarisasi memeriksa seluruh custom code terhadap daftar perubahan S/4HANA. Prosesnya: impor **Simplification Database** dari SAP, jalankan **ABAP Test Cockpit (ATC)** untuk pemeriksaan kesiapan, lalu gabungkan hasilnya dengan **usage data** agar tim tahu kode mana yang terdampak sekaligus mana yang benar-benar dipakai. Tiga komponen kuncinya:

- **Simplification Database**: konten resmi SAP berisi seluruh item simplifikasi di S/4HANA (misalnya penyatuan tabel Customer/Vendor ke Business Partner atau transaksi yang dihapus). File ini di-*download* dan di-impor ke sistem pemeriksa sebagai acuan analisis; tanpa versi mutakhir, hasil *readiness* tidak akurat.
- **ABAP Test Cockpit (ATC)**: *tool* kualitas kode SAP yang menjalankan pemeriksaan statis. Untuk migrasi, ATC memetakan objek custom terhadap Simplification Database dan menghasilkan daftar temuan (*findings*), lengkap dengan *quick fix* semi-otomatis untuk sebagian kasus (SAP Help, *Custom Code Migration Guide* edisi 2026).
- **Usage data**: data pemakaian yang memisahkan kode terpakai dari kode "tidur", diaktifkan lewat *Usage Logging* (transaksi SCMON) dan diagregasi via SUSG. SAP menyarankan mengumpulkannya di produksi minimal satu tahun sebelum konversi, agar pola musiman seperti tutup buku tahunan ikut tertangkap.

Aplikasi Fiori **Custom Code Migration** menyatukan dua sudut ini, temuan ATC dan data pemakaian, dalam satu tampilan yang bisa difilter menurut ketersediaan *quick fix*, cakupan, dan pola pemakaian. Hasilnya, tim langsung bisa membedakan kode yang harus diperbaiki, yang menunggu keputusan, dan yang tidak pernah dieksekusi.

## Perbaiki, pensiunkan, atau tulis ulang? Kerangka keputusan per objek

Setelah inventarisasi, tiap objek custom menghadapi tiga kemungkinan: **refactor** (perbaiki), **retire** (pensiunkan), atau **recode** (tulis ulang). Keputusan diambil dari tiga sinyal, yaitu frekuensi pakai dari usage data, berat-ringannya temuan ATC, dan kepatuhan terhadap prinsip clean core, bukan dari asumsi atau kebiasaan tim.

Dalam praktik konversi, keputusan *retire* sering kali menekan biaya remediasi paling signifikan: kode yang dihapus lewat *deletion transport* saat *system conversion* tidak perlu lagi diadaptasi, diuji, atau di-*maintain*, sehingga *footprint* migrasi mengecil sejak awal.

| Sinyal objek | Refactor (perbaiki) | Retire (pensiunkan) | Recode (tulis ulang) |
|---|---|---|---|
| Frekuensi pakai | Sering dipakai | Tidak dieksekusi ≥1 tahun | Sering dipakai |
| Temuan ATC | Sedikit / ada *quick fix* | Tidak relevan | Banyak / struktural berat |
| Kepatuhan clean core | Bisa dibuat *compliant* | (tak relevan) | Melanggar (akses tabel internal) |
| Fungsi standar S/4HANA | Belum ada padanan | Sudah usang / duplikatif | Sudah ada padanan |
| Tindakan | Sesuaikan + *quick fix* ATC | Hapus via *deletion transport* | Bangun ulang di ABAP Cloud / BTP |

Satu catatan kejujuran soal *retire*: usage data satu tahun bisa melewatkan proses yang hanya berjalan sekali dalam beberapa tahun, misalnya audit khusus atau pelaporan regulasi tertentu. Verifikasi kandidat *retire* dengan pemilik proses bisnis, jangan hanya percaya *log*.

## Ke mana kustomisasi harus dipindah agar inti tetap bersih?

Kustomisasi yang tetap dibutuhkan dipindah keluar dari inti ke salah satu dari tiga jalur *clean core*: **key-user (in-app) extensibility** untuk logika ringan, **developer extensibility dengan ABAP Cloud** yang menempel di *stack* namun *upgrade-stable*, atau **side-by-side extensibility di SAP BTP** untuk aplikasi dan integrasi besar. Ketiganya menjaga inti tetap standar sehingga upgrade berikutnya aman.

Inilah inti hubungan remediasi dengan [SAP Clean Core](https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide): alih-alih memodifikasi objek SAP langsung, ekstensi dibangun memakai *released API* dan bahasa ABAP yang *cloud-optimized*. ABAP Cloud kini tersedia di semua edisi S/4HANA dan menjadi fondasi teknis clean core *on-stack*. Perlu dicatat, key-user extensibility juga tergolong clean core meski secara teknis bukan *package* ABAP Cloud; ketiganya sebaiknya dibaca sebagai "jalur clean core", bukan hal yang identik.

| Aspek | Key-user (in-app) | Developer (ABAP Cloud) | Side-by-side (SAP BTP) |
|---|---|---|---|
| Siapa | Business expert (low/no-code) | Developer ABAP | Developer (ABAP Cloud / low-code) |
| Kopling ke inti | On-stack, ringan | On-stack, *tightly-coupled* | *Loosely-coupled*, terpisah |
| Cocok untuk | Logika "last mile" | Ekstensi ABAP dekat inti | Aplikasi, integrasi, UI kustom |

Satu pemicu remapping yang konkret adalah **Business Partner (BP)**. Di S/4HANA, Customer (KNA1) dan Vendor (LFA1) tidak lagi menjadi *entry point* utama; BP adalah satu-satunya pintu masuk, disinkronkan lewat *Customer-Vendor Integration* (CVI), dan konversinya wajib. Custom code yang dulu menulis langsung ke KNA1/LFA1 atau memakai transaksi lama seperti XD01/XK01 harus dipetakan ulang ke transaksi dan API Business Partner. Dampaknya kerap lebih luas dari perkiraan, menyentuh *interface*, laporan custom, dan *enhancement* yang mengasumsikan struktur lama.

## Yang jarang diakui: sebagian besar custom code Anda mungkin tak perlu ikut

Godaan terbesar dalam migrasi adalah *lift-and-shift* seluruh custom code, dan itu jebakan termahal. Menurut statistik SAP selama lebih dari 15 tahun, sekitar 30–60% custom code di sistem ERP produktif tidak pernah dieksekusi; sebagian analisis SAP bahkan menyebut lebih dari 60% *Z-code* tidak pernah jalan di produksi. Baca angka itu sebagai rentang, bukan janji pasti; implikasinya tetap konsisten. Membawa semuanya hanya memperbesar *footprint*, *effort* pengujian, dan risiko. Retire lebih dulu, baru adaptasi.

Sebagian kode lama itu pun sebenarnya laporan atau ekstraksi data yang, alih-alih dipertahankan sebagai custom code di inti ERP, lebih tepat dipindah ke lapisan analitik seperti [data warehouse solutions](https://www.soltius.co.id/id/blog/data-warehouse-solutions). Dengan begitu, inti tetap bersih dan kebutuhan pelaporan tetap terpenuhi.

Lalu bagaimana peran AI? Sejak rilis 2026, **SAP Joule for Developers** menambah bantuan di aplikasi Custom Code Migration: fitur *ATC Explain* menjelaskan temuan dan mengusulkan resolusi, sementara *Mass S/4 Custom Code Conversion Agent* (rilis kuartal kedua 2026) memperbaiki temuan ATC secara massal dengan aturan deterministik atau perbaikan AI, tetap diawasi developer (SAP Community). AI mengangkat beban mekanis; keputusan strategis, yakni objek mana di-*retire* dan mana ditulis ulang ke ABAP Cloud, tetap di tangan arsitek.

Dan kadang menulis ulang justru lebih murah daripada menambal. Untuk objek dengan banyak temuan struktural atau yang melanggar clean core (akses tabel internal, modifikasi objek SAP), recode di ABAP Cloud atau BTP bisa lebih hemat jangka panjang ketimbang refactor berulang yang tak pernah selesai.

## FAQ (Pertanyaan yang Sering Diajukan)

### Apa itu custom code remediation dalam migrasi SAP S/4HANA?
Custom code remediation adalah proses menginventarisasi, menyaring, dan menyesuaikan kode kustom ABAP (objek Z/Y) agar kompatibel dengan SAP S/4HANA sebelum atau saat konversi. Prosesnya memakai ABAP Test Cockpit (ATC) yang memeriksa kode terhadap Simplification Database, lalu memutuskan tiap objek untuk diperbaiki, dipensiunkan, atau ditulis ulang mengikuti prinsip clean core.

### Apa fungsi ABAP Test Cockpit (ATC)?
ATC adalah *tool* kualitas kode SAP yang menjalankan pemeriksaan statis. Dalam migrasi, ATC memeriksa custom code terhadap Simplification Database S/4HANA untuk menemukan objek yang terdampak perubahan struktural, seperti tabel yang disatukan atau objek yang di-*deprecate*. Hasilnya berupa daftar temuan disertai *quick fix* semi-otomatis untuk sebagian kasus, sehingga tim tahu persis kode mana yang harus diperbaiki.

### Apa itu Simplification Database?
Simplification Database adalah konten resmi SAP berisi daftar seluruh item simplifikasi di S/4HANA, yaitu perubahan yang membuat kode ECC lama tidak lagi kompatibel, seperti penyatuan tabel Customer/Vendor ke Business Partner atau transaksi yang dihapus. Database ini di-*download* dan di-impor ke sistem, lalu menjadi acuan pemeriksaan ATC. Tanpa versi mutakhir, hasil *readiness* tidak akurat.

### Bagaimana cara tahu custom code mana yang masih dipakai?
Gunakan data pemakaian (usage data). Administrator mengaktifkan *Usage Logging* lewat transaksi SCMON dan mengagregasinya via SUSG. SAP menyarankan mengumpulkan usage data di produksi minimal satu tahun agar pola musiman seperti tutup buku ikut tertangkap. Aplikasi Custom Code Migration lalu menggabungkannya dengan temuan ATC, sehingga kode yang tidak pernah dieksekusi bisa dipensiunkan lewat *deletion transport*.

### Apa itu Business Partner dan mengapa custom code perlu dipetakan ulang?
Business Partner (BP) adalah model master data tunggal di S/4HANA yang menggantikan pengelolaan Customer dan Vendor secara terpisah. Tabel lama KNA1 dan LFA1 tetap ada tetapi hanya diisi melalui BP, disinkronkan oleh Customer-Vendor Integration (CVI). Karena itu, custom code yang dulu menulis langsung ke KNA1/LFA1 atau memakai transaksi lama seperti XD01/XK01 harus dipetakan ulang ke transaksi dan API Business Partner.

### Apakah AI seperti SAP Joule bisa memperbaiki custom code otomatis?
Sebagian, sebagai bantuan, bukan pengganti keputusan arsitektur. Sejak rilis 2026, SAP Joule for Developers menambah *ATC Explain* yang menjelaskan temuan dan mengusulkan resolusi. Mass S/4 Custom Code Conversion Agent (kuartal kedua 2026) memperbaiki temuan ATC secara massal dengan aturan deterministik atau perbaikan AI, tetap diawasi developer. Keputusan retire atau recode ke ABAP Cloud tetap perlu penilaian arsitek.

### Berapa lama proses remediasi custom code biasanya berlangsung?
Durasinya bergantung pada volume dan usia sistem, jadi hindari janji angka pasti. Yang penting, langkah paling menentukan justru dimulai lebih awal: SAP menyarankan mengumpulkan usage data minimal satu tahun sebelum konversi agar kode tidur teridentifikasi. Semakin banyak custom code yang dipensiunkan di tahap awal, semakin kecil lingkup adaptasi, pengujian, dan biaya.

## Kesimpulan

Kelancaran migrasi ERP ke cloud sering ditentukan jauh sebelum server pertama dinyalakan, yakni pada keputusan tenang tentang custom code mana yang layak ikut. Inventarisasi lewat ATC dan Simplification Database, pemilahan berbasis usage data, kerangka refactor/retire/recode, lalu pemindahan ekstensi ke jalur clean core: rangkaian ini yang membuat sistem baru tetap mudah di-upgrade, bukan sekadar pindah tempat membawa hutang teknis lama. Sebagai SAP Platinum Partner melalui United VARs, Soltius membantu menganalisis custom code dan mengarahkan kustomisasi ke pendekatan clean-core di atas SAP BTP agar sistem tetap siap cloud.

Untuk mendiskusikan kesiapan custom code dan strategi migrasi ERP ke cloud di perusahaan Anda, kunjungi soltius.co.id.
