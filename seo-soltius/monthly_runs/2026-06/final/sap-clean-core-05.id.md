---
title: "Clean Core SAP: Bagaimana Dampaknya pada Pilihan Brownfield vs Greenfield?"
meta_title: "SAP Clean Core & Pilihan Migrasi: Brownfield vs Greenfield"
meta_description: "Pelajari bagaimana kondisi SAP Clean Core menentukan pilihan brownfield vs greenfield saat migrasi S/4HANA. Termasuk tabel keputusan dan FAQ praktis."
slug: "clean-core-sap-brownfield-vs-greenfield"
language: "id"
primary_keyword: "SAP Clean Core"
secondary_keywords:
  - "brownfield SAP S/4HANA"
  - "greenfield SAP S/4HANA"
  - "selective data transition"
  - "RISE with SAP"
  - "GROW with SAP"
  - "system conversion SAP"
  - "fit-to-standard SAP"
  - "kustomisasi warisan SAP"
  - "technical debt SAP"
  - "migrasi S/4HANA brownfield greenfield"
  - "ECC end-of-maintenance"
internal_links:
  - url: "https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide"
    anchor: "SAP Clean Core"
  - url: "https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud"
    anchor: "migrasi ERP ke cloud"
  - url: "https://www.soltius.co.id/id/blog/low-code-and-no-code-platforms"
    anchor: "platform low-code dan SAP Build"
external_citations:
  - url: "https://support.sap.com/en/release-upgrade-maintenance/maintenance-information/maintenance-strategy/s4hana-business-suite7.html"
    context: "Konfirmasi tanggal mainstream maintenance ECC (Business Suite 7) berakhir 31 Desember 2027; extended maintenance 2028–2030 dengan surcharge +2%."
  - url: "https://support.sap.com/en/offerings-programs/support-services/data-management-landscape-transformation/selective-data-transition-engagement.html"
    context: "Istilah resmi SAP untuk pendekatan 'bluefield' adalah Selective Data Transition (SDT), bukan 'bluefield'."
brief_id: "sap-clean-core-05"
target_word_count: 1350
publish_month: "2026-06"
word_count: 1354
---

# Clean Core SAP: Bagaimana Dampaknya pada Pilihan Brownfield vs Greenfield?

Ketika perusahaan memutuskan bermigrasi ke SAP S/4HANA, satu pertanyaan pasti muncul di agenda rapat direksi: *brownfield* atau *greenfield*? Sebagian besar konten yang tersedia membahas pilihan ini dari sudut biaya dan timeline. Tetapi ada satu variabel yang sering diabaikan dan justru sangat menentukan: **seberapa bersih *core* SAP yang ada sekarang**. Perusahaan dengan ratusan kustomisasi warisan menghadapi pilihan yang berbeda secara fundamental dibanding perusahaan yang sudah punya *core* yang relatif standar. Artikel ini mengurai hubungan antara kondisi *clean core* dan pilihan pendekatan migrasi, dilengkapi tabel keputusan yang bisa langsung dipakai tim IT dan manajemen.

> **Secara singkat:** *Brownfield* SAP S/4HANA adalah konversi sistem SAP ECC yang ada ke S/4HANA dengan mempertahankan data historis dan konfigurasi; *greenfield* adalah implementasi S/4HANA baru dari awal dengan pendekatan *fit-to-standard*. Kondisi *clean core* — seberapa banyak modifikasi dan kode Z dalam sistem yang ada — menjadi faktor penentu utama pendekatan mana yang lebih realistis dari sisi biaya dan risiko.

Satu konteks yang perlu diingat: SAP Business Suite 7 dan SAP ECC EhP 6–8 mengakhiri *mainstream maintenance* pada 31 Desember 2027 (SAP Support Portal). Opsi *extended maintenance* tersedia 2028–2030, namun dengan surcharge +2% dari biaya maintenance tahunan. Keputusan pendekatan migrasi perlu diambil jauh sebelum tenggat itu tiba.

{IMAGE_01: Diagram alur keputusan vertikal tiga jalur — "Kondisi Clean Core" sebagai titik awal percabangan; tiga jalur mengarah ke "Brownfield / System Conversion", "Selective Data Transition (SDT)", dan "Greenfield / New Implementation"; tiap jalur memiliki trigger kondisi (tingkat kustomisasi, anggaran, toleransi disruption); gaya infografik korporat biru-putih, teks Bahasa Indonesia}

## Brownfield, greenfield, dan SDT: apa bedanya dalam konteks SAP S/4HANA?

Tiga pendekatan resmi tersedia saat perusahaan bermigrasi dari SAP ECC ke S/4HANA, dan masing-masing membawa konsekuensi yang sangat berbeda tergantung kondisi *core* yang ada.

**Brownfield** (*system conversion*) adalah konversi teknis sistem ECC yang ada ke S/4HANA menggunakan SAP Software Update Manager (SUM) dengan opsi Database Migration Option (DMO). Data historis, konfigurasi, dan semua kode Z dibawa ke sistem baru. Keunggulannya: gangguan operasional lebih minimal karena proses bisnis tidak perlu dirancang ulang. Konsekuensinya: seluruh *technical debt* yang ada ikut terbawa, dan setiap kode Z harus diremediasi agar kompatibel dengan ABAP Cloud.

**Greenfield** (*new implementation*) adalah implementasi S/4HANA baru dari nol. Proses bisnis disesuaikan ke standar SAP (*fit-to-standard*), bukan sebaliknya. Kode Z lama ditinggal; fungsionalitas yang masih dibutuhkan dibangun ulang menggunakan *key-user extensibility* atau SAP BTP. Ini peluang modernisasi total, tapi membutuhkan re-desain proses bisnis yang serius dan investasi waktu yang lebih panjang.

**Selective Data Transition (SDT)**, sering disebut "bluefield" di komunitas SAP (meski istilah resmi SAP adalah *Selective Data Transition*), adalah pendekatan hibrida. Perusahaan membuat sistem S/4HANA baru dan memilih secara selektif data serta proses bisnis mana yang dimigrasikan, meninggalkan yang tidak relevan. SDT cocok untuk skenario merger, divestasi (*carve-out*), atau modernisasi parsial. Biayanya hampir selalu lebih tinggi dari brownfield murni karena kompleksitas pemetaan data selektif.

**BACA JUGA:** [SAP Clean Core](https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide).

## Tabel keputusan: kondisi clean core dan pendekatan migrasi yang disarankan

Tabel berikut adalah panduan, bukan keputusan mutlak. Faktor lain seperti anggaran, timeline, dan toleransi disruption operasional tetap berperan.

| Kondisi *clean core* saat ini | Rekomendasi pendekatan | Pertimbangan utama | Program SAP relevan |
|---|---|---|---|
| **Rendah** — banyak kode Z aktif, modifikasi *core* luas, *technical debt* tinggi | Brownfield bertahap (konversi → remediasi bertahap) ATAU SDT jika proses bisnis perlu dipisah | Remediasi kode Z bisa jadi item biaya terbesar; brownfield "langsung" berisiko mewarisi *technical debt* ke S/4HANA | RISE with SAP (Private Edition) |
| **Sedang** — beberapa kustomisasi inti, sebagian besar proses bisnis sudah relatif standar | Brownfield dengan *cleanup* pra-migrasi ATAU greenfield jika ada *appetite* re-desain | Perlu SAP Readiness Check sebelum memutuskan; audit kode Z dulu | RISE with SAP (brownfield atau greenfield) |
| **Tinggi** — *core* sudah relatif standar, sedikit atau tidak ada modifikasi inti | Greenfield ATAU brownfield cepat | Brownfield bisa efisien karena sedikit remediasi; greenfield cocok jika ada re-desain proses bisnis strategis | RISE with SAP atau GROW with SAP |
| **Unit baru / startup** | Greenfield dengan *fit-to-standard* ketat | Tidak ada *legacy*; kesempatan terbaik untuk *clean core* dari hari pertama | GROW with SAP (Public Edition) |

Tentang RISE vs GROW: keduanya adalah program SAP yang berbeda posisi. RISE with SAP menargetkan perusahaan besar yang bermigrasi ke S/4HANA Cloud Private Edition, mendukung brownfield maupun greenfield. GROW with SAP diposisikan untuk perusahaan *midsize* atau unit bisnis baru yang ingin implementasi greenfield cepat di S/4HANA Cloud Public Edition, dengan *fit-to-standard* yang ketat (SAP Learning, 2026). Public Edition tidak mengizinkan modifikasi *core* ABAP; persyaratan *clean core*-nya paling tinggi dari semua opsi.

Untuk topik perencanaan [migrasi ERP ke cloud](https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud) secara lebih luas, termasuk kalkulasi TCO dan perbedaan cloud deployment, bacaan pelengkap tersedia di sana.

## Apa yang terjadi pada kode Z di setiap pendekatan?

Ini pertanyaan paling konkret yang biasanya ditanyakan tim IT, dan jawaban per pendekatan berbeda cukup signifikan.

Dalam **brownfield**, semua kode Z dibawa ke S/4HANA. SAP mensyaratkan compatibility check via SAP Readiness Check dan Custom Code Migration Worklist untuk mengidentifikasi objek mana yang perlu diadaptasi ke standar ABAP Cloud. Perusahaan dengan core "kotor" sering kaget saat menemukan ratusan atau bahkan ribuan objek yang perlu diremediasi. Biaya dan waktu remediasi ini sering *underestimated* dalam perencanaan awal.

Dalam **greenfield**, semua kode Z ditinggal. Tim harus mengevaluasi ulang apakah setiap kustomisasi lama memang masih dibutuhkan, lalu membangun ulang yang masih relevan menggunakan cara modern: *key-user extensibility*, SAP Build (tanpa kode), atau ABAP Cloud via SAP BTP, bukan dengan memodifikasi *core* S/4HANA secara langsung. Ini menjadi jembatan ke klaster [platform low-code dan SAP Build](https://www.soltius.co.id/id/blog/low-code-and-no-code-platforms) yang semakin relevan bagi tim pengembang SAP.

Dalam **SDT**, tim memilih mana kode yang ikut dan mana yang tidak. Fleksibel, tapi paling rumit dari sisi pemetaan. Itulah mengapa biaya SDT hampir selalu lebih tinggi dari brownfield murni.

{IMAGE_02: Infografik tiga kolom menampilkan perbandingan nasib kode Z di tiga pendekatan — kolom kiri "Brownfield: kode Z dibawa, wajib diremediasi ke ABAP Cloud"; kolom tengah "SDT: kode Z dipilih selektif"; kolom kanan "Greenfield: kode Z ditinggal, dibangun ulang di BTP"; gaya korporat biru-putih, ikon kode/database di tiap kolom, teks Bahasa Indonesia}

## Apakah greenfield otomatis menghasilkan core yang lebih bersih dari brownfield?

Tidak. Dan ini yang jarang dikatakan terus terang.

Asumsi umum di kalangan manajemen: "Kalau kita pilih greenfield, kita mulai bersih." Secara teknis, ya, pada hari pertama *go-live*. Tapi yang terjadi dua atau tiga tahun setelahnya bergantung sepenuhnya pada disiplin tim, bukan pada pilihan pendekatan migrasinya.

Perusahaan yang pindah ke greenfield tapi tidak mengubah kebiasaan pengembangannya akan mengakumulasi *technical debt* baru. Tim yang masih terbiasa membangun kode Z langsung di dalam *core* ketika ada permintaan dari bisnis, daripada menggunakan SAP BTP atau *key-user tools*, akan menemukan sistem greenfield mereka sama "kotornya" dengan sistem ECC lama dalam tiga hingga lima tahun. Pola ini cukup dikenal di komunitas SAP dan sering ditemukan di lapangan.

*Clean core* bukan hadiah otomatis dari pendekatan migrasi. Ia adalah **kebiasaan tata kelola dan arsitektur** yang harus ditegakkan pasca *go-live* lewat kebijakan ekstensi yang jelas, pelatihan tim pengembang tentang ABAP Cloud dan SAP Build, dan mekanisme review yang memastikan kustomisasi baru tidak masuk ke *core*.

## Kapan brownfield tetap pilihan lebih cerdas meski core "kotor"?

Bagian ini jarang muncul di slide deck vendor. Kenyataannya, ada situasi di mana brownfield lebih masuk akal secara bisnis, bahkan ketika *core*-nya berat kustomisasi.

Pertama, ketika pengetahuan bisnis tersimpan di *custom code* yang tidak terdokumentasi. Banyak perusahaan manufaktur dan distribusi Indonesia memiliki kode Z yang sudah berjalan belasan tahun dan tidak ada yang benar-benar tahu persis proses bisnis apa yang dikodekan di dalamnya, karena orangnya sudah tidak ada. Greenfield yang memaksa "mulai dari nol" berisiko kehilangan logika bisnis kritis yang tidak pernah tercatat di dokumentasi formal.

Kedua, ketika toleransi disruption operasional sangat rendah. Industri manufaktur proses (*process manufacturing*), distribusi multi-*step*, atau perusahaan dengan siklus operasional panjang yang tidak bisa berhenti hanya untuk re-desain proses. Klien-klien ini sering lebih cocok dengan brownfield bertahap dibanding greenfield total.

Ketiga, ketika anggaran tidak memungkinkan re-desain proses bisnis. Greenfield bukan hanya biaya lisensi dan implementasi teknis; biaya terbesar sering ada di workshop re-desain proses, *change management*, dan pelatihan menyeluruh. Jika anggaran itu tidak tersedia dalam satu siklus proyek, greenfield total bisa lebih berisiko dari brownfield yang dikerjakan dengan hati-hati.

Dalam evaluasi migrasi yang melibatkan banyak variabel seperti ini, pilihannya hampir tidak pernah hitam-putih. Sebagai SAP Platinum Partner melalui United VARs, Soltius mendampingi perusahaan dalam mengevaluasi pendekatan migrasi dari penilaian kondisi *clean core* yang ada hingga perancangan *roadmap* yang mempertimbangkan timeline bisnis, anggaran, dan target S/4HANA Cloud.

## FAQ (Pertanyaan yang Sering Diajukan)

### Apa bedanya brownfield dan greenfield dalam migrasi SAP S/4HANA?

Brownfield (*system conversion*) adalah konversi sistem SAP ECC yang ada ke S/4HANA sambil mempertahankan data historis, konfigurasi, dan kustomisasi. Greenfield (*new implementation*) adalah implementasi S/4HANA baru dari awal dengan *fit-to-standard*: proses bisnis disesuaikan ke *best practice* SAP. Brownfield umumnya lebih cepat dan lebih rendah biaya awal; greenfield memberi kesempatan modernisasi proses yang lebih dalam tapi membutuhkan investasi re-desain yang signifikan.

### Apa itu Selective Data Transition (SDT) atau "bluefield" SAP?

Selective Data Transition (SDT) adalah pendekatan hibrida resmi dari SAP: perusahaan membangun sistem S/4HANA baru dan memilih secara selektif data serta proses yang dimigrasikan dari ECC. "Bluefield" adalah istilah populer di komunitas SAP sebagai sinonim SDT, namun istilah resmi SAP adalah *Selective Data Transition*. SDT cocok untuk skenario merger, *carve-out*, atau modernisasi parsial, tapi biasanya lebih mahal dari brownfield murni karena kompleksitas pemetaan data.

### Bagaimana kondisi clean core mempengaruhi pilihan brownfield vs greenfield?

Kondisi *clean core* menentukan beban dan risiko pendekatan brownfield. Sistem dengan banyak kode Z aktif membutuhkan proses remediasi panjang sebelum *go-live*, memperpanjang durasi dan menaikkan biaya. Sistem dengan *core* yang sudah relatif standar bisa memanfaatkan brownfield lebih efisien. Jika *core* sangat "kotor" dan proses bisnis perlu dirancang ulang, greenfield bisa jadi titik awal lebih bersih, meski bukan jaminan tanpa disiplin *governance* pasca go-live.

### Apakah greenfield SAP S/4HANA selalu lebih baik dari brownfield?

Tidak selalu. Greenfield menawarkan *clean start*, tapi membutuhkan re-desain proses bisnis yang memakan waktu dan investasi besar. Lebih kritis: greenfield tidak otomatis menghasilkan *clean core* permanen. Jika kebiasaan pengembangan tidak berubah, tim tetap membangun kode Z di dalam *core* alih-alih di SAP BTP, sistem greenfield akan mengakumulasi *technical debt* baru dalam beberapa tahun. *Clean core* adalah tata kelola, bukan hasil otomatis dari pilihan pendekatan.

### Berapa estimasi waktu migrasi brownfield vs greenfield ke SAP S/4HANA?

Tidak ada angka resmi yang dipublikasikan SAP secara universal, karena durasi sangat bergantung pada kompleksitas kode Z, scope proses bisnis, dan kesiapan tim. Sebagai panduan lapangan: brownfield biasanya membutuhkan 9–18 bulan tergantung jumlah kode Z yang harus diremediasi; greenfield dengan re-desain proses bisnis cenderung 12–24 bulan atau lebih. Ini estimasi dari pola lapangan, bukan data SAP/Gartner resmi, dan perlu dikalibrasi per kondisi spesifik perusahaan.

### Apa yang terjadi pada kode Z saat memilih pendekatan greenfield?

Dalam greenfield, semua kode Z ditinggal dan tidak dibawa ke sistem baru. Fungsionalitas yang masih dibutuhkan harus dibangun ulang menggunakan standar modern: *key-user extensibility* (konfigurasi tanpa kode), SAP Build, atau ABAP Cloud via SAP BTP. Ini peluang untuk membersihkan akumulasi kustomisasi yang tidak terdokumentasi, sekaligus memaksa tim mengevaluasi ulang apakah tiap kustomisasi masih benar-benar dibutuhkan.

### Apa risiko utama migrasi brownfield jika core sudah sangat banyak kustomisasi?

Risiko utamanya tiga: (1) biaya dan waktu remediasi kode Z yang sering *underestimated*; SAP Readiness Check bisa menemukan ribuan objek yang perlu diadaptasi; (2) risiko regresi fungsional pasca konversi karena kode lama tidak kompatibel dengan ABAP Cloud; (3) *technical debt* terbawa ke S/4HANA, artinya upgrade di masa depan tetap mahal. Tanpa penilaian *technical debt* yang realistis sebelum proyek dimulai, timeline dan anggaran brownfield mudah jebol.

---

Pilihan antara brownfield, greenfield, dan SDT bukan sekadar keputusan teknis. Ini keputusan strategis yang bentuknya ditentukan oleh kondisi *clean core* yang ada, kapasitas organisasi untuk berubah, dan realitas anggaran. Tidak ada formula tunggal. Perusahaan yang berhasil adalah yang melakukan penilaian jujur terhadap kondisi *core*-nya lebih dulu, baru menentukan pendekatan, bukan sebaliknya. Sebagai SAP Platinum Partner melalui United VARs dengan rekam jejak sejak 1998, Soltius mendampingi perusahaan dari penilaian kondisi *clean core* hingga perancangan *roadmap* migrasi yang realistis dan selaras dengan target bisnis.

Untuk mendiskusikan kesiapan migrasi S/4HANA dan kondisi *clean core* di perusahaan Anda, kunjungi soltius.co.id.
