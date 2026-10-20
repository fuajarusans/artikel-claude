---
title: "SAP Clean Core untuk Industri Teregulasi: Farmasi, Bank, Manufaktur"
meta_title: "SAP Clean Core di Industri Teregulasi & Compliance"
meta_description: "Cara menjaga SAP Clean Core saat regulator (GxP, OJK, BPOM, DJP) menuntut kustomisasi wajib: kerangka extensibility Level A/B, validasi, dan integrasi Coretax."
slug: "sap-clean-core-industri-teregulasi"
language: "id"
primary_keyword: "SAP Clean Core"
secondary_keywords:
  - "clean core industri teregulasi"
  - "compliance SAP GxP"
  - "21 CFR Part 11 GMP Annex 11"
  - "validasi sistem computer system validation"
  - "audit trail SAP"
  - "extensibility level A-D"
  - "SAP BTP side-by-side"
  - "integrasi Coretax DJP API"
  - "kustomisasi wajib compliance"
  - "S/4HANA farmasi perbankan OJK"
internal_links:
  - url: "https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide"
    anchor: "SAP Clean Core"
  - url: "https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud"
    anchor: "migrasi ERP ke cloud"
  - url: "https://www.soltius.co.id/id/blog/data-warehouse-solutions"
    anchor: "data warehouse solutions"
external_citations:
  - url: "https://news.sap.com/2025/08/extend-sap-s4hana-cloud-right-way-clean-clear/"
    context: "Definisi clean core, model extensibility Level A–D, in-app vs side-by-side BTP, ABAP Cloud, released API"
  - url: "https://community.sap.com/t5/technology-blog-posts-by-sap/accelerating-gxp-compliance-for-sap-digital-manufacuring-in-the-public/ba-p/14216338"
    context: "Model shared-responsibility GxP; ekstensi wajib IQ/OQ/PQ; clean core = effort PQ minimal sepanjang siklus hidup ekstensi"
  - url: "https://www.pajak.go.id/en/node/113210"
    context: "Coretax DJP diluncurkan 31 Des 2024, efektif Januari 2025, integrasi via API resmi"
brief_id: "sap-clean-core-02"
target_word_count: 1650
publish_month: "2026-07"
word_count: 1662
---

# SAP Clean Core untuk Industri Teregulasi: Farmasi, Bank, Manufaktur

Di perusahaan farmasi, bank, atau produsen pangan, nasihat "cukup pakai standar SAP saja" sering terbentur kenyataan: auditor menuntut jejak audit, validasi sistem, dan kontrol tertentu yang mengharuskan kustomisasi. Seorang IT lead atau *compliance officer* pun merasa terjebak. Patuh pada regulator berarti menyentuh sistem, sementara prinsip [SAP Clean Core](https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide) menuntut inti tetap bersih. Artikel ini menyelesaikan dilema itu: bagaimana memenuhi tuntutan GxP, OJK, dan DJP tanpa mengembalikan core ke kondisi "kotor" yang mahal di-upgrade. Fokusnya keputusan arsitektur, bukan tutorial teknis.

> **Secara singkat:** *Clean core* adalah prinsip menjaga inti SAP S/4HANA tetap standar dan mudah di-upgrade. Di industri teregulasi seperti farmasi, perbankan, dan manufaktur, kepatuhan tetap dijaga dengan menempatkan kontrol compliance (audit trail, validasi, pelaporan) sebagai ekstensi *clean-core-compliant* (Level A/B) di SAP BTP atau in-app, bukan sebagai modifikasi inti.

## Apa itu clean core, dan mengapa industri teregulasi menghadapinya secara berbeda?

Bedanya di industri teregulasi: sebagian kustomisasi bukan pilihan, melainkan kewajiban hukum. Regulator menuntut jejak audit, validasi, dan pelaporan tertentu, sehingga pertanyaannya bukan "apakah menyesuaikan sistem", melainkan "di mana menaruh penyesuaian itu". Menurut SAP, tujuan clean core adalah "keep the core clean, standard, and upgrade-stable while still enabling business-specific differentiation" (SAP News, Agustus 2025). Kustomisasi yang menumpuk di inti "limits flexibility, slows down upgrades, and increases the total cost of ownership", persis mimpi buruk perusahaan yang setiap upgrade harus menyentuh ratusan objek modifikasi.

Di sektor umum, godaan mengotori core datang dari kenyamanan; di sektor teregulasi, tekanannya datang dari luar. Farmasi wajib membuktikan integritas data ke BPOM dan FDA, bank harus memenuhi pelaporan Otoritas Jasa Keuangan (OJK), dan produsen pangan butuh keterlacakan (*traceability*) lot. Semua ini melahirkan kontrol yang harus ada, dan di sinilah dilema clean core paling tajam.

## Kustomisasi yang diwajibkan regulator: dari mana asalnya

Kustomisasi wajib lahir dari tiga sumber yang menuntut kontrol spesifik, yang tak selalu tersedia sebagai konfigurasi standar:

- **Farmasi dan life sciences (GxP).** Standar acuannya konkret. **21 CFR Part 11** (FDA) mewajibkan audit trail yang aman, dihasilkan sistem, dan ber-*timestamp* untuk setiap pembuatan, perubahan, atau penghapusan record dan tanda tangan elektronik: mencatat siapa, apa, kapan, dan mengapa. **EU GMP Annex 11** mengatur sistem terkomputerisasi (*computerized systems*) berbasis risiko, dengan audit trail *human-readable* yang ditinjau berkala. Di dalam negeri, CPOB dari BPOM menuntut integritas data pada level setara.
- **Perbankan dan jasa keuangan (OJK).** OJK menerbitkan serangkaian regulasi tata kelola dan manajemen risiko teknologi informasi, mulai dari POJK 38/POJK.03/2016 tentang manajemen risiko TI bank umum hingga ketentuan penyelenggaraan TI yang lebih baru. Semuanya menuntut tata kelola, jejak audit, dan pelaporan terdigitalisasi. Perlu ditegaskan: tidak ada teks OJK yang menyebut "clean core". Regulator menuntut hasil, dan clean core adalah cara arsitektural untuk memenuhinya.
- **Manufaktur pangan dan consumer products.** Kebutuhannya berpusat pada keterlacakan bahan baku hingga produk jadi serta integrasi ke ekosistem pemerintah, termasuk pelaporan pajak.

Polanya berbeda antar-industri, tetapi logikanya sama: ada kontrol yang wajib ada, dan pertanyaan sesungguhnya adalah di mana menempatkannya.

## Bisakah tetap clean core saat compliance menuntut kustomisasi?

Bisa. Kuncinya menempatkan kontrol compliance sebagai ekstensi *decoupled* (released API di ABAP Cloud on-stack atau aplikasi side-by-side di SAP BTP), bukan memodifikasi objek standar. SAP menyebut ekstensi seperti ini "scalable, decoupled applications that run independently from the core". Compliance terpenuhi, inti tetap upgrade-safe; keduanya bukan hal yang saling meniadakan.

Argumen paling kuat justru datang dari sisi ekonomi validasi. Panduan SAP untuk lingkungan GxP menyatakan setiap ekstensi harus melewati evaluasi GxP dan kualifikasi tersendiri, yakni **IQ/OQ/PQ** (*Installation*, *Operational*, *Performance Qualification*), lalu menambahkan agar tim "adhere to clean core principals to ensure minimal PQ efforts over the extension lifecycle" (SAP Community, 2025). Mekanismenya masuk akal: ekstensi yang hanya bergantung pada released API terhubung ke inti lewat kontrak antarmuka stabil, sehingga saat SAP meng-upgrade inti, kontrak dijaga, ekstensi tidak patah, dan cakupan validasi ulang menyempit ke ekstensi itu sendiri. Sebaliknya, kontrol yang ditanam sebagai modifikasi inti berisiko patah tiap upgrade dan memicu validasi ulang berskala luas yang mahal. Inilah alasan ekonomis menjaga core tetap bersih justru di industri yang paling banyak diatur.

## Kerangka: memetakan kebutuhan compliance ke pola clean-core-safe

Cara paling praktis adalah memetakan tiap kebutuhan regulator ke pola teknis yang tetap bersih. Aturan mainnya sederhana: pakai objek dan API yang *released*, taruh logika di luar inti, dan integrasikan lewat antarmuka resmi. Tabel berikut menerjemahkan kebutuhan compliance umum menjadi pola clean-core-compliant beserta alasannya.

| Kebutuhan compliance (contoh) | Sumber (regulator/standar) | Pola clean-core-compliant | Level | Alasan tetap bersih |
|---|---|---|---|---|
| Audit trail perubahan data ber-regulasi | 21 CFR Part 11 / Annex 11; OJK | Audit trail standar S/4HANA + released API; log tambahan via side-by-side BTP | A/B | Tidak menyentuh objek inti; tetap upgrade-safe |
| Field wajib & laporan regulator | CPOB BPOM / OJK / DJP | *Custom field* via key-user extensibility (*Custom Fields and Logic*) atau app side-by-side | A/B | Objek released; logika di luar inti |
| Integrasi pajak (e-Faktur/e-Bupot) | DJP, Coretax (efektif Jan 2025) | API resmi Coretax + SAP Integration Suite (side-by-side) | A | Released API dua sisi; inti tetap standar |
| Validasi ekstensi (CSV) | GxP (IQ/OQ/PQ) | Bangun ekstensi decoupled Level A/B agar re-kualifikasi minimal tiap upgrade | A/B | Ekstensi stabil = PQ ulang lebih ringan |

Contoh Indonesia paling konkret adalah pajak. **Coretax** (Core Tax Administration System DJP) resmi berlaku efektif sejak Januari 2025, setelah diluncurkan 31 Desember 2024, dan menyediakan integrasi via API resmi untuk e-Faktur, e-Bupot Unifikasi, dan e-Billing (pajak.go.id). Dari sisi SAP, kewajiban pelaporan pajak ini dipenuhi dengan menghubungkan ekstensi side-by-side lewat released API, bukan menanam kode ke inti: kebutuhan negara terpenuhi, core tetap standar. Prinsip governance data yang sama menopang pelaporan regulator lain, dan banyak laporan kepatuhan bergantung pada [data warehouse solutions](https://www.soltius.co.id/id/blog/data-warehouse-solutions) yang rapi agar jejak audit dapat direkonstruksi dengan cepat.

Di lapangan, kebutuhan regulator paling sering bisa dipenuhi tanpa menyentuh inti bila dipetakan sejak awal blueprint. Pemetaan sejak awal itulah yang biasanya membedakan proyek yang mulus dari yang menumpuk utang teknis.

## Ketika kustomisasi compliance memang tak terhindarkan — dan itu bukan kegagalan

Clean core bukan target biner nol kustomisasi. SAP memformalkan model empat tingkat extensibility pada Agustus 2025: **Level A** (Recommended) memakai hanya released API dan fully upgrade-safe; **Level B** (Compliant) memakai classic ABAP API terdokumentasi yang umumnya stabil tetapi butuh governance; **Level C** (Partial) menyentuh objek internal dan hanya "conditionally clean"; **Level D** (Not Recommended) adalah modifikasi inti yang harus dihindari. Praktisi menyebutnya "50 shades of clean core", sebuah perjalanan bertingkat, bukan garis on/off.

Konsekuensinya jujur: beberapa kontrol teregulasi memang wajib berada dekat inti. Sebuah field validasi khusus atau logika kontrol tertentu mungkin paling masuk akal sebagai Level B, atau sementara Level C dengan rencana perbaikan. Itu bukan kegagalan. Yang menentukan keberhasilan adalah keputusan yang sadar, terdokumentasi, dan disertai roadmap remediasi, bukan ketiadaan kustomisasi. SAP sendiri menegaskan clean core adalah *responsible extensibility*, bukan larangan kustomisasi.

Satu miskonsepsi perlu diluruskan: pindah ke cloud tidak mengalihkan tanggung jawab compliance. Dalam model *shared responsibility*, SAP mengelola sebagian kontrol infrastruktur, tetapi organisasi tetap sepenuhnya akuntabel ke regulator. Kekhawatiran kehilangan kontrol inilah yang membuat sebagian perusahaan teregulasi ragu saat merencanakan [migrasi ERP ke cloud](https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud), padahal pemetaan clean core yang rapi justru membuat kepatuhan lebih terkelola. Edisi private pun masih memberi keleluasaan lebih (Level B) bagi kontrol yang benar-benar butuh dekat inti.

## FAQ (Pertanyaan yang Sering Diajukan)

### Apakah clean core melarang kustomisasi untuk compliance?

Tidak. Clean core bukan larangan kustomisasi, melainkan prinsip menempatkannya di luar inti secara bertanggung jawab. Kebutuhan wajib seperti audit trail atau field pelaporan regulator tetap boleh dibangun sebagai ekstensi Level A/B, memakai released API di ABAP Cloud atau SAP BTP, bukan dengan memodifikasi objek standar, sehingga inti tetap upgrade-safe.

### Bagaimana clean core di industri farmasi yang wajib GxP?

Setiap ekstensi harus melewati evaluasi GxP dan kualifikasi IQ/OQ/PQ tersendiri. Menurut panduan SAP, mengikuti prinsip clean core memastikan effort PQ (re-kualifikasi) minimal sepanjang siklus hidup ekstensi. Kontrol wajib seperti audit trail, yang mengacu 21 CFR Part 11 atau EU GMP Annex 11, sebaiknya dibangun decoupled sebagai Level A/B, agar tiap upgrade S/4HANA tak memicu validasi ulang mahal.

### Apakah clean core cocok untuk perbankan dan industri teregulasi?

Cocok, dan justru relevan. Perbankan diatur ketat oleh OJK lewat regulasi manajemen risiko dan penyelenggaraan teknologi informasi yang menuntut tata kelola, jejak audit, dan pelaporan. Kebutuhan itu bisa dipenuhi lewat ekstensi clean-core-compliant, bukan modifikasi inti: tempatkan kontrol regulator sebagai ekstensi decoupled agar sistem tetap patuh sekaligus mudah di-upgrade.

### Bagaimana integrasi SAP ke Coretax/DJP tanpa mengotori core?

Coretax berlaku efektif sejak Januari 2025 dan menyediakan integrasi via API resmi untuk e-Faktur, e-Bupot Unifikasi, dan e-Billing. Dari sisi SAP, integrasi dibangun memakai released API dan pola side-by-side di SAP BTP, bukan menanam kode ke inti. Kewajiban pelaporan pajak terpenuhi, sementara inti S/4HANA tetap standar dan upgrade-safe.

### Apa itu validasi sistem (computer system validation) dan kaitannya dengan clean core?

Validasi sistem adalah proses terdokumentasi yang membuktikan sistem terkomputerisasi konsisten memenuhi tujuan penggunaannya, melalui IQ (instalasi), OQ (operasional), dan PQ (performa). Di lingkungan GxP, setiap perubahan pada ekstensi tervalidasi memicu re-kualifikasi. Karena itu, ekstensi decoupled Level A/B menekan effort validasi ulang tiap SAP merilis upgrade. Inilah alasan ekonomis menjaga core bersih.

### Bagaimana menjaga kustomisasi compliance tetap upgrade-safe?

Kuncinya model extensibility A sampai D yang diformalkan SAP pada Agustus 2025. Bangun kontrol compliance sebagai Level A (hanya released API, fully upgrade-safe) atau Level B (classic API terdokumentasi, dengan governance); hindari Level C (objek internal, berisiko) dan Level D (modifikasi inti). Ekstensi Level A/B terhubung lewat kontrak antarmuka stabil, sehingga upgrade tidak mematahkannya dan validasi ulang tetap ringan.

## Kesimpulan

Ketegangan antara auditor dan prinsip clean core sebenarnya dilema semu. Regulator menuntut hasil, yaitu jejak audit, validasi, dan pelaporan, dan clean core adalah cara arsitektural memenuhinya tanpa membebani upgrade. Kunci praktisnya: petakan tiap kebutuhan compliance ke pola Level A/B sejak fase blueprint, dokumentasikan setiap keputusan Level C, dan rencanakan remediasi Level D. Sebagai SAP Platinum Partner melalui United VARs dengan pengalaman implementasi lintas industri (termasuk farmasi, distribusi, dan manufaktur), Soltius mendampingi perusahaan memetakan kebutuhan regulator ke pola clean-core-safe, tanpa menjanjikan kelulusan audit yang tetap menjadi tanggung jawab pemilik sistem dan regulator itu sendiri.

Untuk mendiskusikan kesiapan clean core di lingkungan teregulasi perusahaan Anda, kunjungi soltius.co.id.
