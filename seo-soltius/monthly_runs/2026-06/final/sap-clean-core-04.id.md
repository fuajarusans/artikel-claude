---
title: "Ekstensi SAP Tanpa Menyentuh Core: Panduan Side-by-Side Extensibility di BTP"
meta_title: "SAP Clean Core: Cara Ekstensi via SAP BTP Tanpa Ubah Core"
meta_description: "Pahami side-by-side extensibility SAP: perbandingan in-app vs side-by-side, komponen SAP Build, batasan BTP, dan kapan masing-masing pendekatan tepat digunakan."
slug: "side-by-side-extensibility-sap-btp-clean-core"
language: "id"
primary_keyword: "SAP Clean Core"
secondary_keywords:
  - "side-by-side extensibility"
  - "in-app extensibility"
  - "SAP BTP Business Technology Platform"
  - "SAP Build Apps"
  - "SAP Build Process Automation"
  - "released API SAP"
  - "upgrade-safe extension"
  - "ABAP Cloud"
  - "SAP Integration Suite"
  - "arsitektur loosely coupled"
  - "low-code extension SAP"
  - "ekstensi S/4HANA cloud"
internal_links:
  - url: "https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide"
    anchor: "SAP Clean Core"
  - url: "https://www.soltius.co.id/id/blog/low-code-and-no-code-platforms"
    anchor: "platform low-code SAP Build"
  - url: "https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud"
    anchor: "migrasi ERP ke cloud"
external_citations:
  - url: "https://help.sap.com/docs/SAP_S4HANA_CLOUD/extensibility"
    context: "Definisi resmi side-by-side extensibility, taksonomi tiga tier extensibility SAP S/4HANA Cloud"
  - url: "https://api.sap.com"
    context: "Katalog released API SAP — SAP Business Accelerator Hub"
brief_id: "sap-clean-core-04"
target_word_count: 1350
publish_month: "2026-06"
word_count: 1388
---

# Ekstensi SAP Tanpa Menyentuh Core: Panduan Side-by-Side Extensibility di BTP

Banyak tim IT yang sudah menerima prinsip *clean core* — jangan ubah kode inti SAP — tapi kemudian berhenti di pertanyaan yang lebih mendesak: kustomisasi yang bisnis masih butuhkan harus taruh di mana? Laporan non-standar untuk direksi, workflow persetujuan yang unik, integrasi dengan sistem *legacy* — semua itu tidak bisa sekadar dihapus atas nama *SAP Clean Core*. Artikel ini menjawab pertanyaan itu secara konkret: menjelaskan model *side-by-side extensibility* di SAP BTP, membandingkannya dengan alternatif in-app, memperkenalkan SAP Build sebagai jembatan *low-code*, dan menunjukkan kapan pendekatan ini justru bukan pilihan yang paling masuk akal.

> **Ringkas:** *Side-by-side extensibility* adalah pendekatan kustomisasi SAP di mana ekstensi dibangun di luar inti S/4HANA — umumnya di **SAP BTP** (*Business Technology Platform*) — dan terhubung ke sistem inti melalui *released API* resmi SAP. Karena inti tidak dimodifikasi, sistem tetap *upgrade-safe* sesuai prinsip *clean core* SAP.

{IMAGE_01: Diagram arsitektur konseptual tiga lapisan — (bawah) "S/4HANA Core" kotak tertutup berwarna biru tua, (tengah) "SAP BTP" dengan ikon SAP Build Apps, Build Process Automation, dan Integration Suite, (atas) "End Users". Panah dua arah antara S/4HANA dan BTP berlabel "Released API". Di luar kotak core, teks: "Ekstensi di sini = upgrade-safe". Gaya infografik korporat, teks Bahasa Indonesia.}

## Apa itu side-by-side extensibility dan mengapa ini jantung dari clean core?

SAP mendefinisikan tiga tingkat extensibility untuk S/4HANA Cloud (SAP Help Portal, help.sap.com/docs/SAP_S4HANA_CLOUD/extensibility):

1. **In-app extensibility (key-user extensibility)** — kustomisasi di dalam S/4HANA sendiri menggunakan *key-user tools* bawaan. Tidak memerlukan SAP BTP. Cocok untuk *custom field*, objek bisnis kustom sederhana, dan workflow ringan via SAP Fiori.
2. **Developer extensibility (ABAP Cloud)** — pengembang menulis kode ABAP dalam S/4HANA, tapi *hanya* menggunakan *released objects*. Opsi ini sering terlupakan — tepat untuk logika kompleks yang harus berjalan dalam transaksi inti tanpa *overhead* jaringan ke BTP.
3. **Side-by-side extensibility** — ekstensi dibangun sepenuhnya di luar inti, di SAP BTP, dan terhubung ke S/4HANA melalui *released API* resmi SAP.

Ketiga tingkat ini lahir karena model lama — memodifikasi langsung kode standar SAP ("Z-code") — membuat setiap pembaruan menjadi proyek rekayasa ulang. Di lingkungan cloud di mana pembaruan lebih sering, biaya itu tidak berkelanjutan. Bagi perusahaan yang menuju S/4HANA Cloud, kemampuan menerima pembaruan tanpa proyek besar setiap siklus adalah syarat dasar agar *total cost of ownership* tetap masuk akal.

**BACA JUGA:** [SAP Clean Core](https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide).

## In-app vs. side-by-side extensibility: memilih pendekatan yang tepat

Pertanyaan praktis dari tim IT: *bagaimana kami tahu mana yang perlu dibangun di BTP dan mana yang cukup dikerjakan di dalam S/4HANA?* Tabel di bawah merangkum kriteria utamanya — ini bait *featured snippet* yang bisa menjadi referensi cepat.

| Aspek | In-App / Key-User | Side-by-Side di BTP |
|---|---|---|
| **Di mana berjalan** | Di dalam S/4HANA | Di SAP BTP (di luar inti) |
| **Siapa yang mengerjakan** | Key user / pengguna bisnis terlatih | Developer BTP / ABAP Cloud |
| **Tool utama** | Custom Fields and Logic, Custom Business Objects, Fiori key-user apps | SAP Build Apps, SAP Build Process Automation, ABAP Cloud di BTP |
| **Kapan cocok** | Custom field, validasi, workflow ringan | Logika kompleks, integrasi sistem lain, aplikasi UI baru |
| **Butuh SAP BTP?** | Tidak | Ya — plus lisensi BTP untuk skala produksi |
| **Upgrade-safe?** | Ya (jika pakai released tools) | Ya (jika pakai released API) |
| **Latensi** | Minimal (dalam sistem yang sama) | Ada overhead round-trip ke BTP |
| **Kompleksitas arsitektur** | Rendah | Lebih tinggi — monitoring terpisah, error handling lintas sistem |

Polanya jelas: mulai dari in-app. Kalau kebutuhan melampaui key-user tools — logika kompleks, integrasi sistem *legacy*, atau aplikasi mobile baru — barulah side-by-side di BTP masuk hitungan.

## SAP Build: ekstensi clean core tanpa banyak kode ABAP

*Side-by-side extensibility* terdengar menarik, tapi siapa yang membangunnya jika perusahaan kekurangan developer ABAP senior? Di sinilah SAP Build menjadi relevan untuk konteks Indonesia, terutama di tengah tren adopsi *low-code* enterprise yang terus tumbuh.

SAP Build adalah suite *low-code/no-code* yang berjalan di atas SAP BTP, terdiri dari empat komponen utama per pertengahan 2026:

- **SAP Build Apps** — membangun aplikasi mobile dan web secara visual. Berasal dari akuisisi AppGyver oleh SAP pada 2022, diberi nama resmi "SAP Build Apps" pada 2023. Terhubung ke S/4HANA melalui *released API* dan OData services.
- **SAP Build Process Automation** — otomasi workflow dan RPA, menggabungkan SAP Workflow Management dan SAP iRPA dalam satu antarmuka *low-code*.
- **SAP Build Work Zone** — portal dan *launchpad* terpusat untuk pengguna, menggabungkan akses ke aplikasi SAP dan non-SAP.
- **SAP Build Code** — diperkenalkan pada 2024 untuk developer profesional berbantuan AI Joule di BTP, berbasis *Cloud Application Programming Model* (CAP).

Semua komponen terhubung ke S/4HANA melalui *released API* yang dikatalogkan di **SAP Business Accelerator Hub** (api.sap.com) — katalog resmi SAP yang mencakup ribuan API lintas domain Finance, Logistik, SDM, dan lainnya.

Dalam proyek *enhancement* yang ditangani Soltius, SAP Build Process Automation digunakan untuk otomasi workflow persetujuan yang sebelumnya dilakukan via modifikasi program standar SAP. Ekstensi baru berjalan di BTP; core tetap bersih — dan pembaruan SAP berikutnya tidak lagi memerlukan pengujian ulang untuk workflow tersebut.

Untuk memahami platform *low-code* ini lebih luas, [platform low-code SAP Build](https://www.soltius.co.id/id/blog/low-code-and-no-code-platforms) membahas konsep dan skenario penggunaannya.

{IMAGE_02: Infografik dua kolom — kiri "In-App Extensibility": ikon key-user, label "Dalam S/4HANA", checklist kebutuhan ringan, warna biru muda; kanan "Side-by-Side Extensibility": ikon developer dan cloud, label "Di SAP BTP", checklist kebutuhan kompleks, warna biru tua. Format korporat, teks Bahasa Indonesia.}

## Kapan side-by-side extensibility BUKAN pilihan terbaik

Bagian ini jarang ditulis, padahal justru di sinilah kepercayaan dibangun. Side-by-side di BTP adalah arah yang benar untuk banyak kasus — tapi ada kondisi nyata di mana masuk ke sana sekarang justru menambah beban.

Pertimbangkan ulang jika kondisi berikut berlaku:

- **Kebutuhan kustomisasi sederhana.** Kalau yang dibutuhkan hanya *custom field* tambahan atau aturan validasi, key-user tools dalam S/4HANA jauh lebih efisien. Jangan bangun infrastruktur BTP untuk kebutuhan yang bisa selesai via in-app.
- **Operasi sensitif latensi.** Kustomisasi yang dipanggil dalam transaksi inti — validasi saat *posting* FI, perhitungan harga di sales order — membutuhkan respons sangat cepat. *Round-trip* ke BTP menambah *overhead* yang bisa tidak diterima untuk operasi kritis; dalam skenario ini, ABAP Cloud dalam S/4HANA lebih tepat.
- **Tim IT belum siap mengelola BTP.** Side-by-side menambah sistem yang harus dioperasikan: monitoring terpisah, *connectivity setup*, *error handling* lintas sistem. Bagi tim IT yang terbiasa dengan satu lingkungan, kompleksitas operasional ini bisa lebih berat dari kustomisasi inti yang sudah dikenal.
- **Biaya BTP belum diperhitungkan.** RISE with SAP menyertakan kapasitas BTP dasar, tetapi pengembangan ekstensi di skala produksi umumnya membutuhkan lisensi BTP *service plans* tambahan. Ini perlu masuk dalam *business case* sejak awal, bukan sebagai kejutan di tengah proyek.

*Clean core* bukan kondisi biner yang bisa dicapai sekaligus. Kustomisasi baru sebaiknya langsung dibangun dengan prinsip side-by-side atau in-app. Kustomisasi lama perlu diprioritaskan bertahap — sambil perusahaan membangun kapasitas BTP-nya secara berkelanjutan.

Bagi perusahaan yang sedang menjalani [migrasi ERP ke cloud](https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud), arsitektur extensibility ini adalah keputusan desain awal yang paling berdampak jangka panjang.

## FAQ (Pertanyaan yang Sering Diajukan)

### Apa itu side-by-side extensibility SAP?

*Side-by-side extensibility* adalah pendekatan kustomisasi di mana ekstensi dibangun di luar inti S/4HANA — umumnya di SAP BTP — dan terhubung ke sistem inti melalui *released API* resmi SAP. Karena kode inti tidak disentuh, ekstensi bersifat *upgrade-safe*: pembaruan SAP tidak akan merusak ekstensi yang dibangun dengan cara ini.

### Apa bedanya in-app extensibility dan side-by-side extensibility?

*In-app extensibility* dilakukan di dalam S/4HANA menggunakan *key-user tools* bawaan — custom field, objek bisnis kustom, workflow sederhana via SAP Fiori. Tidak butuh SAP BTP. *Side-by-side extensibility* dibangun di luar inti, di SAP BTP, untuk logika bisnis kompleks, integrasi sistem lain, atau aplikasi UI baru. Keduanya *upgrade-safe* jika menggunakan API dan tools yang *released*.

### Apa itu SAP BTP dan mengapa digunakan untuk ekstensi clean core?

SAP BTP (*Business Technology Platform*) adalah platform cloud SAP untuk pengembangan aplikasi, integrasi, analitik, dan AI. BTP menjadi "rumah" side-by-side extensions karena SAP menyediakan koneksi standar ke S/4HANA via *released API* — ekstensi di BTP dapat menambah kapabilitas tanpa risiko merusak inti saat pembaruan SAP dirilis.

### Komponen SAP Build apa yang tersedia untuk ekstensi clean core?

Per 2026: **SAP Build Apps** (aplikasi mobile/web secara visual), **SAP Build Process Automation** (otomasi workflow dan RPA), **SAP Build Work Zone** (portal dan launchpad), dan **SAP Build Code** (diperkenalkan 2024, untuk developer profesional berbantuan AI Joule di BTP). Semua terhubung ke S/4HANA via *released API*.

### Apakah ekstensi di SAP BTP memerlukan lisensi tambahan?

Ya. RISE with SAP menyertakan kapasitas BTP dasar, namun pengembangan di skala produksi — menggunakan SAP Build Apps, Build Process Automation, atau SAP Integration Suite — umumnya membutuhkan lisensi BTP *service plans* tambahan. Model harganya berbasis konsumsi atau berlangganan; perlu dimasukkan dalam evaluasi *total cost of ownership* sejak awal.

### Apa itu released API SAP dan mengapa penting?

*Released API* adalah API yang SAP tandai sebagai stabil — tidak akan berubah *backward-incompatibly* saat ada pembaruan. Ini kontrak stabilitas: ekstensi yang hanya menggunakan *released API* dijamin berfungsi setelah upgrade. Katalognya ada di **SAP Business Accelerator Hub** (api.sap.com), mencakup ribuan API lintas domain Finance, Logistik, SDM, dan lainnya. Menggunakan API non-released adalah akar masalah kustomisasi yang rusak saat upgrade.

### Bagaimana SAP Integration Suite berperan dalam arsitektur clean core?

SAP Integration Suite adalah layanan integrasi utama di SAP BTP — menghubungkan S/4HANA dengan sistem eksternal via konektor standar, API Management, dan *event-driven messaging*. Dalam arsitektur clean core, ia menggantikan integrasi *point-to-point* yang dikodekan langsung di sistem SAP: aliran data dikelola di lapisan BTP, bukan di dalam core, sehingga inti tetap bersih dan *upgrade-safe*.

---

Pertanyaan "kustomisasi taruh di mana?" akhirnya punya jawaban yang bisa dioperasionalkan: in-app untuk kebutuhan sederhana, ABAP Cloud untuk logika kompleks yang harus berjalan dalam transaksi inti, dan side-by-side di BTP untuk integrasi lintas sistem atau antarmuka baru. Tiga tingkat ini bukan pilihan kompetitif — melainkan alat yang dipilih berdasarkan kebutuhan teknis, kapasitas tim, dan realitas anggaran. Sebagai SAP Platinum Partner melalui United VARs, Soltius merancang arsitektur ekstensi *clean core* bersama klien — membantu menentukan mana yang in-app, mana yang side-by-side di BTP, dan mana yang paling tepat diimplementasikan via SAP Build — agar sistem tetap mudah di-upgrade seiring pertumbuhan bisnis.

Untuk mendiskusikan arsitektur ekstensi SAP yang sesuai dengan kondisi sistem dan kebutuhan bisnis perusahaan Anda, kunjungi soltius.co.id.
