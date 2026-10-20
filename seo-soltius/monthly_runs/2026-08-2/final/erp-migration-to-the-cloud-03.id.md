---
title: "Strategi Pengujian Migrasi ERP ke Cloud: SIT, UAT, Mock Cutover"
meta_title: "Migrasi ERP ke Cloud: Uji SIT, UAT, Mock Cutover"
meta_description: "Strategi pengujian migrasi ERP ke cloud: jenis tes SIT & UAT, jumlah siklus mock migration, kriteria lulus mock cutover, dan prioritas berbasis risiko."
slug: "migrasi-erp-ke-cloud-strategi-pengujian-sit-uat"
language: "id"
primary_keyword: "ERP migration to the cloud"
secondary_keywords:
  - "migrasi ERP ke cloud"
  - "pengujian migrasi SAP S/4HANA"
  - "SIT system integration test"
  - "UAT user acceptance test"
  - "regression testing SAP"
  - "mock cutover dress rehearsal"
  - "mock migration cycle"
  - "SAP Cloud ALM Test Management"
  - "entry exit criteria pengujian"
  - "SAP Activate testing"
internal_links:
  - url: "https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud"
    anchor: "migrasi ERP ke cloud"
  - url: "https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide"
    anchor: "SAP Clean Core"
  - url: "https://www.soltius.co.id/id/blog/business-intelligence"
    anchor: "business intelligence"
external_citations:
  - url: "https://learning.sap.com/courses/implementing-sap-s-4hana-cloud-public-edition/explaining-the-test-strategy"
    context: "Definisi unit/string/integration test & UAT, urutan SIT sebelum UAT, siapa yang menguji"
  - url: "https://community.sap.com/t5/enterprise-resource-planning-blog-posts-by-sap/faq-on-upgrading-sap-s-4hana-cloud-public-edition/ba-p/13657921"
    context: "S/4HANA Cloud Public Edition di-upgrade 2x/tahun (Feb & Agu); regression oleh partner sebelum production"
brief_id: "erp-migration-to-the-cloud-03"
target_word_count: 1650
publish_month: "2026-08-2"
word_count: 2091
---

# Strategi Pengujian Migrasi ERP ke Cloud: SIT, UAT, Mock Cutover

Proyek migrasi ERP yang gagal di hari go-live jarang runtuh karena satu modul yang belum dikonfigurasi. Lebih sering, penyebabnya ada di lapisan yang tidak terlihat: regression yang setengah jalan, UAT yang dikebut demi mengejar tanggal, atau rencana cutover yang belum pernah benar-benar dilatih. Bagi seorang project manager atau QA lead, disiplin pengujian sering menjadi penentu yang lebih besar daripada pilihan teknologinya. Artikel ini memetakan strategi pengujian untuk [migrasi ERP ke cloud](https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud) yang realistis: jenis tes yang wajib dijalankan, berapa siklus mock migration yang masuk akal, dan kriteria lulus sebelum sistem dinyalakan. Fokusnya bukan teori, melainkan keputusan lapangan yang menentukan apakah go-live berjalan mulus atau berujung krisis.

> **Ringkasnya:** Strategi pengujian migrasi ERP ke cloud adalah rangkaian tes berlapis (unit test, string test, system integration test/SIT, regression test, dan user acceptance test/UAT) yang dilengkapi beberapa siklus mock migration dan satu dress rehearsal (mock cutover), untuk memastikan sistem, data, dan proses bisnis benar-benar siap sebelum go-live di lingkungan cloud.

Di bawah, kita telusuri urutannya: dari jenis tes, jumlah siklus mock, kriteria lulus cutover, sampai cara memprioritaskan pengujian ketika "menguji semuanya" bukan pilihan yang tersedia.

## Apa itu strategi pengujian migrasi ERP dan mengapa menentukan sukses go-live?

Strategi pengujian migrasi ERP adalah rencana berlapis untuk memverifikasi bahwa konfigurasi, data, integrasi, dan proses bisnis bekerja benar sebelum sistem baru menggantikan yang lama. Tujuannya satu: mencegah cacat lolos ke produksi, tempat perbaikannya paling mahal dan paling mengganggu operasi. Dalam metodologi *SAP Activate*, pengujian hidup di fase Realize, sedangkan cutover terjadi di fase Deploy.

SAP Activate menyusun proyek ke dalam urutan fase: Prepare, Explore, Realize, Deploy, lalu Run. Pengujian fungsional inti berlangsung di Realize, dan cutover ke sistem produksi dijalankan pada akhir pekan terakhir sebelum go-live di fase Deploy ([SAP Learning](https://learning.sap.com/courses/implementing-sap-s-4hana-cloud-public-edition/explaining-the-test-strategy)). Menempatkan tiap pengujian pada fase yang benar penting karena setiap cacat yang lolos akan berpindah ke lingkungan yang biaya perbaikannya jauh lebih besar.

Biaya sebuah *defect* naik tajam seiring ia bergerak ke hilir. Kesalahan konfigurasi yang tertangkap saat unit test cukup diperbaiki satu konsultan dalam hitungan jam. Kesalahan yang sama, bila baru ketahuan setelah go-live, bisa menghentikan penagihan, menahan pengiriman, atau mengacaukan tutup buku, dengan tekanan waktu dan reputasi yang berlipat.

## Jenis pengujian dalam migrasi ERP: dari unit test hingga UAT

Migrasi ERP diuji berlapis. Unit test memverifikasi satu komponen proses; string test merangkai beberapa unit; system integration test (SIT) menguji seluruh proses *end-to-end* lintas modul setelah data ter-*load*; dan UAT memastikan sistem layak dipakai dari sudut pengguna bisnis. SIT selalu mendahului UAT dan merupakan tes formal terakhir tim konsultan sebelum pengguna menilai sistem.

Definisi tiap lapisan diambil langsung dari panduan SAP. Menguji satu komponen individual sebuah proses bisnis disebut *unit test*, sedangkan merangkai beberapa unit test menjadi satu untai disebut *string test*; keduanya dikerjakan tim proyek selama sprint. Integration test, atau SIT, mencakup pengujian seluruh fungsionalitas yang dibangun dan menjadi pengujian formal terakhir oleh tim konsultan sebelum tim bisnis menguji sistem dalam UAT (SAP Learning).

Perbedaan SIT dan UAT sering dikaburkan, padahal keduanya menjawab pertanyaan berbeda. SIT dijalankan tim teknis dan konsultan untuk memastikan aliran data serta *interface* antar-modul (finance, procurement, inventory, HR) dan antar-sistem berjalan setelah integrasi; fokusnya "apakah sistem terhubung dengan benar". UAT dijalankan *business expert*, idealnya mereka yang ikut *workshop* fit-to-standard, untuk memastikan sistem cocok dengan cara kerja nyata; fokusnya "apakah layak dipakai".

| Jenis tes | Apa yang diverifikasi | Siapa yang menguji | Fase SAP Activate |
|---|---|---|---|
| Unit test | Satu komponen/konfigurasi proses bisnis | Konsultan/tim proyek | Realize (per sprint) |
| String test | Rangkaian beberapa unit yang saling terkait | Konsultan/tim proyek | Realize (per sprint) |
| SIT / integration test | Seluruh proses end-to-end lintas modul & integrasi sistem, dengan data ter-load | Tim konsultan (tes formal terakhir sebelum UAT) | Realize |
| Regression test | Proses lama & kustomisasi tetap berjalan setelah perubahan/upgrade | Partner/tim tes | Realize + berulang saat update cloud |
| UAT | Kesesuaian dengan cara kerja nyata ("fit-for-use") | Business/LoB expert eks-fit-to-standard | Realize (jelang Deploy) |
| Mock cutover / dress rehearsal | Kelayakan & durasi seluruh langkah cutover | Seluruh tim cutover | Deploy (sebelum go-live) |

Satu lapisan pantas mendapat perhatian khusus: regression test. Ini menguji ulang proses yang sudah berjalan, terutama yang dikustomisasi, untuk memastikan perubahan tidak merusak fungsi yang tadinya normal. Regression bukan pekerjaan sekali jalan menjelang go-live; ia berulang setiap kali sistem cloud di-*upgrade*. S/4HANA Cloud Public Edition, misalnya, menerima dua upgrade terjadwal tiap tahun (Februari dan Agustus), dan mitra bertanggung jawab menjalankan regression di sistem test sebelum production menyusul ([SAP Community](https://community.sap.com/t5/enterprise-resource-planning-blog-posts-by-sap/faq-on-upgrading-sap-s-4hana-cloud-public-edition/ba-p/13657921)). Di sinilah prinsip [SAP Clean Core](https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide) berperan: dengan menjaga inti tetap standar dan memindahkan kustomisasi ke luar inti, cakupan regression pada tiap upgrade menjadi jauh lebih ringan.

## Berapa banyak siklus mock migration dan dress rehearsal sebelum go-live?

Sebagai patokan praktik (*rule-of-thumb*, bukan aturan resmi SAP), tim implementasi umumnya menjalankan sekitar 3–5 siklus mock migration di sandbox, lalu satu dress rehearsal yang meniru go-live sesungguhnya. Siklus mock memvalidasi data dan durasi migrasi; dress rehearsal membuktikan seluruh rencana cutover bisa dijalankan tim dalam jendela waktu nyata. Jumlah siklus bergantung pada kompleksitas, bukan target yang harus dikejar.

Penting membedakan dua istilah yang kerap tertukar. *Mock migration cycle* adalah eksekusi teknis migrasi data secara berulang, memakai salinan data produksi untuk menemukan masalah lebih dulu. SAP sendiri hanya menyebut "beberapa siklus hingga migrasi produksi" tanpa angka pasti. *Mock cutover* atau *dress rehearsal* adalah hal yang berbeda: latihan penuh seluruh rangkaian cutover, bukan hanya pemindahan data. Yang pertama memvalidasi data; yang kedua memvalidasi rencana.

Tiap siklus mock migration idealnya memvalidasi hal yang berbeda dan makin stabil dari putaran ke putaran:

1. **Kelengkapan dan konsistensi data:** apakah seluruh record berpindah tanpa terpotong atau ganda.
2. **Hasil fungsional:** apakah proses inti berjalan benar di atas data hasil migrasi.
3. **Custom code dan integrasi:** apakah kustomisasi dan antarmuka tetap bekerja pada struktur data baru.
4. **Durasi runtime:** berapa lama migrasi berjalan, agar jendela downtime saat go-live bisa diprediksi.

Begitu hasil beberapa siklus terakhir stabil dan dapat diulang, tim naik ke latihan yang lebih besar. Menurut panduan SAP, dress rehearsal meniru cutover produksi sedekat mungkin, mencakup cutover plan, proses, logistik, sumber daya, dan lingkungan IT, untuk membuktikan rencana realistis dan tim siap. Ia menguji sesuatu yang tidak bisa diverifikasi tes fungsional mana pun: koreografinya. Sebuah *cutover plan* mendeskripsikan seluruh tugas sebelum go-live, lengkap dengan timeline, tanggung jawab, sumber daya, dan rencana kontingensi; latihan penuh membuktikan urutan itu bisa dijalankan orang sungguhan dalam jendela waktu yang tersedia, bukan sekadar rapi di atas kertas.

Setiap fase tes biasanya dibatasi *entry criteria* (syarat boleh dimulai) dan *exit criteria* (syarat dianggap selesai). Ini kriteria yang lazim disepakati tim QA, bukan skema baku SAP, dan gunanya mencegah dua kesalahan sekaligus: pengujian yang tak berujung dan rilis yang prematur.

| Fase | Entry criteria (mulai) | Exit criteria (selesai) |
|---|---|---|
| SIT | Konfigurasi & interface siap; data uji ter-load; unit/string test lulus | Semua skenario integrasi kritis lulus; defect severity-1/2 ditangani; hasil terdokumentasi |
| UAT | Konfigurasi di-freeze; SIT selesai; lingkungan stabil; tester terlatih | Semua skenario bisnis kritis lulus; tidak ada defect severity-1 terbuka; go/no-go tercatat |
| Mock cutover | Cutover plan final; lingkungan production-mirror; tim & peran siap | Seluruh langkah tereksekusi dalam jendela waktu target; isu terdokumentasi & di-remediasi |

## Data uji dan manajemen defect: kenapa UAT sering gagal

UAT lebih sering gagal karena data uji yang buruk daripada karena konfigurasi yang salah. Data yang tidak realistis, tidak ter-*masking*, atau tidak ter-*versioning* membuat pengujian tidak mencerminkan kondisi nyata. Manajemen data uji yang rapi, ditambah pencatatan defect yang disiplin, adalah prasyarat agar UAT bermakna dan bukan sekadar formalitas jelang go-live.

Data uji yang meyakinkan memiliki beberapa ciri:

- **Volume yang mewakili** kondisi produksi, bukan segelintir record contoh.
- **Variasi kasus tepi** (*edge case*) yang benar-benar muncul di operasi nyata.
- **Referensi antar-objek yang utuh**, agar proses end-to-end tidak putus di tengah.
- **Masking data sensitif dan versioning**, supaya aman secara kepatuhan sekaligus bisa direproduksi.

Di sisi defect, tiap temuan diberi tingkat *severity* dan *priority* yang disepakati sejak awal proyek. Prinsip yang lazim dipegang: defect kritis dan tinggi harus tuntas sebelum sign-off go-live, sedangkan defect berprioritas rendah boleh dibawa sebagai *residual risk* yang terdokumentasi dalam laporan go/no-go. Yang berbahaya bukan adanya defect, melainkan defect yang tidak tercatat.

Seluruh tes formal sebaiknya terdokumentasi di satu tempat. Untuk lanskap cloud, tool yang tepat adalah **SAP Cloud ALM Test Management**, bukan Solution Manager lama. SAP Cloud ALM adalah *successor* cloud-native dari SAP Solution Manager (yang mainstream maintenance-nya berakhir 31 Desember 2027) dan sudah termasuk dalam kontrak RISE with SAP tanpa biaya lisensi tambahan. Ia mengorkestrasi tes manual maupun otomatis dengan *traceability* penuh ke proses solusi dan requirement.

Satu area yang kerap luput dari rencana tes adalah pelaporan. Dashboard dan laporan analitik, termasuk solusi [business intelligence](https://www.soltius.co.id/id/blog/business-intelligence) yang menempel pada ERP, wajib ikut diregression setelah migrasi agar angka yang tampil tetap konsisten dengan buku besar. Laporan yang "kelihatan jalan" tetapi menghitung dari logika lama adalah salah satu cacat paling sunyi dan paling menggerus kepercayaan pada sistem baru.

## Yang jarang dibahas: menguji "semua" itu mustahil

Menguji setiap skenario itu mustahil, dan mengejar 100% coverage justru kontraproduktif. Pendekatan yang lebih sehat adalah *risk-based testing*: memprioritaskan proses paling kritis dan paling berisiko lebih dulu. Financial close, order-to-cash, dan procure-to-pay diuji paling dalam, sementara skenario langka berdampak rendah cukup diuji secukupnya, bukan dikejar demi memenuhi angka cakupan.

Godaan mengejar cakupan sempurna terasa aman, padahal mahal. Waktu tim habis untuk skenario berisiko rendah, tanggal go-live mundur, sementara risiko yang sebenarnya nyaris tak berkurang. Prioritas berbasis risiko membalik logika itu: petakan proses mana yang, bila gagal, paling merugikan bisnis, lalu kerahkan tenaga tes ke sana lebih dulu.

Ada satu sudut yang jarang disadari: disiplin pengujian tidak berhenti di go-live. Karena upgrade cloud datang dua kali setahun, regression menjadi rutinitas, bukan acara sekali seumur proyek. Mitra implementasi seperti Soltius menjalankan disiplin QA lintas siklus proyek, dari SIT dan UAT hingga cutover rehearsal, lalu berlanjut ke regression setiap kali sistem cloud diperbarui.

## FAQ (Pertanyaan yang Sering Diajukan)

### Bagaimana cara menguji migrasi SAP S/4HANA sebelum go-live?

Pengujian dilakukan berlapis di fase Realize SAP Activate: unit test (satu komponen), string test (rangkaian unit), lalu SIT (seluruh proses lintas modul dan sistem), dan UAT oleh pengguna bisnis. Setelahnya, jalankan beberapa siklus mock migration di sandbox dan satu dress rehearsal yang meniru go-live sesungguhnya. Semua tes formal didokumentasikan, idealnya di SAP Cloud ALM Test Management.

### Apa bedanya SIT dan UAT?

SIT (System Integration Test) diuji tim teknis dan konsultan untuk memastikan proses end-to-end lintas modul (finance, procurement, inventory, HR) dan integrasi antar-sistem berjalan setelah data ter-load; fokusnya "apakah sistem terhubung benar". UAT (User Acceptance Test) diuji business expert, biasanya peserta workshop fit-to-standard, untuk memastikan sistem cocok dengan kerja nyata. SIT selalu mendahului UAT.

### Apa itu mock cutover dan dress rehearsal?

Mock cutover atau dress rehearsal adalah simulasi lengkap proses go-live sebelum cutover produksi. Menurut panduan SAP, latihan ini meniru cutover sedekat mungkin, mencakup cutover plan, proses, logistik, sumber daya, dan lingkungan IT, untuk membuktikan rencana realistis dan tim siap. Waktu tiap langkah diukur agar jendela downtime saat go-live bisa diprediksi.

### Berapa siklus tes yang realistis sebelum go-live?

Sebagai patokan praktik (rule-of-thumb, bukan aturan resmi SAP), tim implementasi umumnya menjalankan sekitar 3–5 siklus mock migration di sandbox sebelum dress rehearsal final. SAP hanya menyebut "beberapa siklus hingga migrasi produksi" tanpa angka pasti. Tiap siklus memvalidasi hal berbeda: kelengkapan data, hasil fungsional, custom code, dan durasi runtime, hingga hasilnya stabil dan dapat diulang.

### Apa itu regression testing dan mengapa penting?

Regression testing menguji ulang proses bisnis yang sudah ada, terutama yang dikustomisasi, untuk memastikan perubahan atau upgrade tidak merusak fungsi yang tadinya berjalan. Ini krusial karena S/4HANA Cloud Public Edition di-upgrade dua kali setahun (Februari dan Agustus), dan mitra bertanggung jawab meregresi sistem test sebelum production menyusul. Inti yang bersih (clean core) membuat tiap regression jauh lebih ringan.

### Apa itu SAP Cloud ALM Test Management?

SAP Cloud ALM Test Management adalah tool bawaan SAP untuk merencanakan, menjalankan, dan mendokumentasikan pengujian fungsional dengan traceability penuh ke proses solusi dan requirement, mendukung tes manual maupun otomatis. SAP Cloud ALM adalah successor cloud-native dari SAP Solution Manager (mainstream maintenance-nya berakhir 31 Desember 2027) dan sudah termasuk dalam kontrak RISE with SAP tanpa biaya lisensi tambahan.

## Kesimpulan

Go-live yang mulus bukan hasil keberuntungan, melainkan konsekuensi dari pengujian yang jujur: tes yang berlapis, siklus mock yang cukup, cutover yang benar-benar dilatih, dan prioritas yang diarahkan ke proses paling berisiko. Kabar baiknya, semua ini bisa direncanakan jauh sebelum tanggal go-live ditetapkan. Sebagai SAP Platinum Partner melalui United VARs dan bagian dari Metrodata Group sejak 1998, Soltius mendampingi perusahaan menjaga disiplin QA sepanjang proyek, dari SIT dan UAT hingga dress rehearsal, lalu regression saat update rutin cloud yang didukung Application Management Services (AMS) pasca go-live.

Untuk mendiskusikan strategi pengujian dan kesiapan migrasi ERP ke cloud di perusahaan Anda, kunjungi soltius.co.id.
