---
title: "SAP Clean Core: Menjaga Ekstensi Tetap Upgrade-Safe dari Waktu ke Waktu"
meta_title: "SAP Clean Core: Ekstensi yang Tetap Upgrade-Safe"
meta_description: "Panduan SAP Clean Core menjaga ekstensi tetap upgrade-safe: level A–D vs risiko upgrade, deprecation released API, siklus rilis S/4HANA, dan checklist praktik."
slug: "sap-clean-core-ekstensi-upgrade-safe"
language: "id"
primary_keyword: "SAP Clean Core"
secondary_keywords:
  - "upgrade-safe extensibility"
  - "released API SAP"
  - "deprecation API"
  - "clean core extensibility level A B C D"
  - "ABAP Cloud"
  - "SAP BTP"
  - "siklus rilis S/4HANA"
  - "stability contract"
  - "ABAP Test Cockpit"
internal_links:
  - url: "https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide"
    anchor: "SAP Clean Core"
  - url: "https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud"
    anchor: "migrasi ERP ke cloud"
  - url: "https://www.soltius.co.id/id/blog/data-warehouse-solutions"
    anchor: "data warehouse solutions"
external_citations:
  - url: "https://news.sap.com/2025/08/extend-sap-s4hana-cloud-right-way-clean-clear/"
    context: "Definisi level A–D, released API + stability contract, dan rencana changelog untuk objek Level C"
  - url: "https://news.sap.com/2022/09/new-sap-s4hana-release-maintenance-strategy/"
    context: "Siklus rilis dua-tahunan sejak S/4HANA 2023, 7 tahun mainstream maintenance, feature pack tiap 6 bulan"
brief_id: "sap-clean-core-05"
target_word_count: 1650
publish_month: "2026-07-2"
word_count: 1653
---

# SAP Clean Core: Menjaga Ekstensi Tetap Upgrade-Safe dari Waktu ke Waktu

Sebuah ekstensi yang "bersih" saat dibangun bisa berubah jadi sumber masalah dua tahun kemudian, bukan karena ada yang menyentuh inti sistem, melainkan karena *API* yang dipakainya di-*deprecate* atau karena SAP kini merilis pembaruan jauh lebih sering. Banyak arsitek yang percaya "sekali clean core, selamanya clean core" terkejut saat regresi muncul di rilis berikutnya. Artikel ini bukan penjelasan ulang tentang cara menempatkan ekstensi, melainkan cara menjaga prinsip [SAP Clean Core](https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide) tetap terpelihara dari waktu ke waktu: deprecation, pergeseran antar-level A–D, dan kadens rilis S/4HANA yang membuat semua ini penting.

> **Secara singkat:** Ekstensi *upgrade-safe* adalah ekstensi SAP yang tetap berfungsi tanpa perbaikan saat sistem di-upgrade, karena hanya memakai *released API* stabil (Level A) dengan *stability contract* dan terpisah dari inti S/4HANA. *Clean core* dengan begitu adalah kondisi yang dijaga sepanjang siklus rilis, bukan status permanen sekali jadi.

## Apa artinya ekstensi "upgrade-safe" dan mengapa clean core bisa luntur?

Ekstensi *upgrade-safe* adalah ekstensi yang bertahan melewati upgrade tanpa perlu diperbaiki, karena ia hanya menyentuh *released API* resmi dan hidup di luar inti S/4HANA. Kebalikannya, ekstensi yang mengakses objek internal SAP bisa retak kapan saja objek itu berubah, dan inilah sebabnya clean core bukan sertifikat sekali jadi.

Ada tiga cara ekstensi yang tadinya rapi bisa "membusuk" seiring waktu. Pertama, objek atau *API* yang dipakainya di-*deprecate* SAP dan akhirnya dihapus. Kedua, ekstensi ternyata dibangun di atas level kepatuhan yang lebih longgar daripada yang disadari tim. Ketiga, dan paling sering diremehkan, frekuensi rilis SAP meningkat, jadi tiap ekstensi non-standar punya lebih banyak kesempatan untuk retak. Prinsip clean core menjaga inti S/4HANA tetap standar dengan memindahkan kustomisasi ke luar inti, umumnya ke *ABAP Cloud* (on-stack) atau *side-by-side* di *SAP BTP* (*Business Technology Platform*). Tetapi memindahkannya sekali tidak cukup; ia harus dipantau tiap siklus.

## Mengapa SAP kini merilis lebih sering, dan apa artinya bagi ekstensi Anda

Semakin sering sistem di-upgrade, semakin sering pula ekstensi non-standar berpotensi retak. Mulai SAP S/4HANA 2023, produk berpindah ke siklus rilis dua-tahunan dengan tujuh tahun *mainstream maintenance* per rilis (naik dari lima tahun), sementara edisi cloud publik menerima dua rilis besar tiap tahun plus pembaruan berkelanjutan di antaranya (SAP News, September 2022).

Perbedaan edisi penting agar tidak salah kaprah. Untuk **S/4HANA Cloud Public Edition**, rilis besar turun tiap Februari dan Agustus, dengan *Continuous Feature Delivery*, yaitu fitur non-disruptif yang bisa diadopsi lebih awal atau aktif otomatis di rilis besar berikutnya. Untuk jalur **private/on-premise** sejak rilis 2023, modelnya dua-tahunan dengan *feature pack* yang direncanakan turun tiap enam bulan pada dua tahun pertama (SAP News, September 2022; wording SAP memakai "currently planned", jadi kebijakan ini bisa direvisi).

Implikasinya jelas. Di era ECC dulu, kustomisasi bisa "aman" bertahun-tahun karena upgrade jarang terjadi; di S/4HANA, jendela antar-perubahan jauh lebih pendek, dan ekstensi yang bersandar pada objek internal kini menghadapi lebih banyak titik uji per tahun. Kompatibilitas upgrade adalah salah satu janji utama saat perusahaan menjalankan [migrasi ERP ke cloud](https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud), dan janji itu hanya bertahan jika ekstensi ikut dijaga.

## Apa perbedaan level A, B, C, dan D, dan bagaimana pengaruhnya saat upgrade?

Model clean core membagi ekstensi ke empat level menurut keamanan upgrade. Level A hanya memakai *released API* dengan *stability contract* formal (paling aman). Level B memakai *classic API* seperti BAPI/RFC yang umumnya upgrade-stable tapi tanpa kontrak formal. Level C mengakses objek internal SAP (berisiko nyata saat upgrade). Level D mencakup modifikasi dan teknik non-recommended (risiko tertinggi).

Yang membuat Level A istimewa adalah *stability contract*: kontrak *teknis*, bukan hukum, yang menyertai tiap *released API* dan menjamin *API* itu tidak berubah secara tak-kompatibel antar-rilis (SAP News, 12 Agustus 2025). Objek internal Level C tidak punya jaminan itu, sehingga bisa berubah kapan saja tanpa pemberitahuan kompatibilitas. Untuk membantu tim mendeteksi perubahan lebih dini, SAP menyatakan **berencana** menyediakan *changelog* bagi objek SAP agar upgrade Level C bisa direncanakan proaktif, ini rencana, belum fitur yang tersedia penuh.

| Level | Apa yang dipakai | Stability contract? | Risiko saat upgrade | Tindakan yang disarankan |
|---|---|---|---|---|
| **A** | *Released API* (ABAP Cloud on-stack atau side-by-side di SAP BTP) | Ya (formal) | Terendah, upgrade-safe | Target ideal; pertahankan |
| **B** | *Classic API* (BAPI, RFC-enabled function module) | Tidak formal, umumnya stabil | Rendah–moderat | Sah bila Level A belum tersedia; kelola dengan governance |
| **C** | Objek internal SAP (tak dirilis untuk pelanggan) | Tidak | Nyata, objek bisa berubah tanpa jaminan | Masuk roadmap remediasi; pantau changelog (rencana SAP) |
| **D** | Modifikasi, *write access* ke tabel SAP, *implicit enhancement* | Tidak | Tertinggi, *technical debt* | Hilangkan atau ganti |

*(Sumber level & definisi: SAP News, 12 Agustus 2025.)*

*Deprecated* tidak berarti langsung mati. Objek yang di-*deprecate* masih berfungsi sementara; risikonya adalah penghapusan di rilis mendatang. SAP memperlakukan kode yang memakai objek *deprecated* sebagai Level B dan menandainya untuk remediasi, dengan arahan mencari *successor API* lalu menjadwalkan migrasi sebelum objek benar-benar dihapus.

## Praktik menjaga ekstensi tetap upgrade-safe

Menjaga ekstensi tetap upgrade-safe adalah disiplin berkala, bukan proyek sekali jalan. Intinya: pakai released API resmi, pantau deprecation, uji sebelum tiap upgrade, dan rencanakan remediasi objek Level C atau D. Lima praktik berikut yang paling menentukan di lapangan.

1. **Bangun di atas *released API*.** Ambil *API*, event, dan objek resmi dari **SAP Business Accelerator Hub**, katalog resmi objek yang dirilis untuk clean core. *ABAP Development Tools* di Eclipse juga menampilkan *released objects view* untuk *ABAP Cloud*.
2. **Pantau *deprecation* dan *changelog*.** Jadikan pemeriksaan status objek bagian dari rutinitas rilis, bukan kejutan saat upgrade. Untuk objek yang sudah *deprecated*, identifikasi *successor*-nya lebih dulu.
3. **Jalankan pemeriksaan clean core terjadwal.** *ABAP Test Cockpit* (ATC) menyediakan *check variant* `ABAP_CLEAN_CORE_DEVELOPMENT` yang memverifikasi apakah ekstensi hanya memakai teknologi *enhancement* yang diizinkan dan *released API*. Variant ini tersedia via *remote* ATC di *SAP BTP ABAP environment* dan di S/4HANA 2025 FPS01 (private cloud/on-premise), jadi perhatikan konteks versinya.
4. **Uji regresi di lingkungan non-produksi.** Sebelum upgrade produksi, jalankan uji regresi ekstensi terhadap rilis target. Di sinilah masalah terdeteksi murah, bukan mahal.
5. **Jadwalkan remediasi Level C/D.** Masukkan objek berisiko ke *roadmap* dengan prioritas, bukan dibiarkan sampai upgrade memaksa.

Dalam praktik *Application Management Services* (AMS), justru uji regresi terjadwal inilah yang paling sering mencegah kejutan saat upgrade, bukan perbaikan darurat setelah sistem retak. Objek data yang berubah antar-rilis juga bisa memengaruhi lapisan hilir, sehingga tim yang mengelola [data warehouse solutions](https://www.soltius.co.id/id/blog/data-warehouse-solutions) perlu ikut memantau perubahan *released API* yang mereka konsumsi.

## Tidak semua ekstensi harus Level A, dan mengapa mengejar kesempurnaan bisa boros

Ada godaan untuk menargetkan semua ekstensi ke Level A. Dalam praktik, itu tidak selalu bijak. Level B tetap sah ketika *released API* belum menutup sebuah kebutuhan, dan memaksa semuanya ke Level A dengan biaya besar sering memberi hasil marginal. Yang penting adalah keputusan yang *sadar* dan ditata *governance*, bukan kesempurnaan buta.

Anggap clean core sebagai sesuatu yang bertingkat, bukan biner. *Classic API* Level B umumnya upgrade-stable; kelemahannya hanya tidak adanya *stability contract* formal, dan selama dipantau, ia kompromi yang wajar. Yang benar-benar perlu diberantas adalah Level D, objek non-recommended, *write access* langsung ke tabel SAP, dan *implicit enhancement*, karena inilah sumber *technical debt* termahal dan risiko upgrade tertinggi. Membelanjakan anggaran menaikkan Level B yang sehat ke Level A sementara objek Level D masih menganga adalah salah prioritas.

## FAQ (Pertanyaan yang Sering Diajukan)

### Apa itu ekstensi upgrade-safe?
Ekstensi upgrade-safe adalah ekstensi SAP yang tetap berfungsi tanpa perbaikan saat sistem di-upgrade. Kuncinya: ekstensi hanya memakai *released API* stabil (Level A) dan terpisah dari inti S/4HANA, bukan objek internal. Karena SAP menjamin *released API* lewat *stability contract*, ekstensi seperti ini tidak retak ketika versi baru dirilis, berbeda dari kustomisasi yang menyentuh objek tak-resmi.

### Apa perbedaan level A, B, C, dan D?
Model clean core membagi ekstensi jadi empat level menurut keamanan upgrade. Level A memakai *released API* dengan *stability contract* (paling aman). Level B memakai *classic API* seperti BAPI/RFC, upgrade-stable tapi tanpa kontrak formal. Level C mengakses objek internal SAP (berisiko saat upgrade). Level D memakai objek non-recommended dan modifikasi, risiko tertinggi (SAP News, 12 Agustus 2025).

### Apa itu deprecation released API?
Deprecation adalah penandaan sebuah *API* atau objek SAP sebagai usang: masih bisa dipakai sementara, tetapi akan dihapus atau tak lagi direkomendasikan di rilis mendatang. Jika ekstensi Anda memakai objek *deprecated*, ATC memperlakukannya sebagai Level B dan menandainya untuk remediasi. Langkah tepatnya: cari *successor API* di SAP Business Accelerator Hub, lalu jadwalkan migrasi sebelum objek benar-benar dihapus.

### Seberapa sering SAP S/4HANA Cloud upgrade?
Tergantung edisi. Public Edition menerima dua rilis besar per tahun (Februari dan Agustus) plus *Continuous Feature Delivery* di antaranya. Untuk jalur private/on-premise, sejak SAP S/4HANA 2023 SAP memakai siklus dua-tahunan dengan *feature pack* tiap enam bulan pada dua tahun pertama, dan tiap rilis memperoleh tujuh tahun *mainstream maintenance*.

### Apa itu stability contract?
Stability contract adalah kontrak *teknis* (bukan legal) yang menyertai tiap *released API* SAP. Isinya: SAP menjamin *API* tersebut tidak berubah secara tak-kompatibel antar-rilis, sehingga ekstensi yang memakainya tetap berfungsi setelah upgrade. Inilah yang membuat ekstensi Level A upgrade-safe. Objek internal SAP (Level C) tidak punya jaminan ini, jadi bisa berubah kapan saja tanpa pemberitahuan kompatibilitas.

### Bagaimana menguji ekstensi sebelum upgrade?
Gunakan *ABAP Test Cockpit* (ATC) dengan *check variant* `ABAP_CLEAN_CORE_DEVELOPMENT` untuk memeriksa apakah ekstensi hanya memakai teknologi *enhancement* yang diizinkan dan *released API*. Variant ini tersedia di ATC *SAP BTP ABAP environment* serta di S/4HANA 2025 FPS01 (private cloud/on-premise). Selain itu, pantau *deprecation* SAP, lalu jalankan uji regresi terjadwal di sistem non-produksi sebelum upgrade produksi.

## Kesimpulan

Clean core paling tepat dipahami sebagai kondisi yang dijaga, bukan tonggak yang dicapai sekali lalu dilupakan. Kombinasi released API dengan stability contract, pemantauan deprecation, dan uji regresi terjadwal itulah yang membuat ekstensi tetap upgrade-safe ketika kadens rilis S/4HANA makin cepat. Sebagai SAP Platinum Partner melalui United VARs, Soltius menjaga ekstensi klien tetap kompatibel tiap siklus rilis melalui *Application Management Services* (AMS), memastikan yang sudah ada tetap sehat saat sistem berevolusi.

Untuk mendiskusikan kesiapan clean core dan strategi upgrade ekstensi di perusahaan Anda, kunjungi soltius.co.id.
