---
title: "Tata Kelola SAP Clean Core: Mengapa Core Kembali 'Kotor' Setelah Go-Live dan Cara Mencegahnya"
meta_title: "SAP Clean Core: Menjaga Core Tetap Bersih Pasca Go-Live"
meta_description: "Tata kelola SAP Clean Core menjaga core S/4HANA tetap upgrade-safe setelah go-live: empat pilar operasional, peran ATC dan SAP Cloud ALM, plus level A-D."
slug: "tata-kelola-sap-clean-core-pasca-go-live"
language: "id"
primary_keyword: "SAP Clean Core"
secondary_keywords: ["tata kelola clean core", "technical debt SAP", "ABAP Test Cockpit", "SAP Cloud ALM", "extensibility level A B C D", "transport governance", "SAP Center of Excellence", "upgrade-safe S/4HANA"]
internal_links:
  - url: "https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide"
    anchor: "SAP Clean Core"
  - url: "https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud"
    anchor: "migrasi ERP ke cloud"
  - url: "https://www.soltius.co.id/id/blog/low-code-and-no-code-platforms"
    anchor: "platform low-code SAP Build"
external_citations:
  - url: "https://www.sap.com/products/erp/rise/methodology/clean-core.html"
    context: "Definisi clean core, lima dimensi, dan angka outcome pelanggan (80% lebih sedikit kustomisasi) yang diatribusikan ke SAP"
  - url: "https://community.sap.com/t5/technology-blog-posts-by-sap/abap-test-cockpit-atc-recommendations-for-governance-of-clean-core-abap/ba-p/14186130"
    context: "Central ATC di SAP BTP ABAP environment sebagai pendekatan governance yang direkomendasikan SAP; blocking mode Prioritas 1 dan 2"
brief_id: "sap-clean-core-01"
target_word_count: 1650
publish_month: "2026-07"
word_count: 1690
dateModified: "2026-06-08"
---

# Tata Kelola SAP Clean Core: Mengapa Core Kembali "Kotor" Setelah Go-Live dan Cara Mencegahnya

Anda baru saja menyelesaikan migrasi S/4HANA dengan core yang relatif bersih. Delapan belas bulan kemudian, core itu kotor lagi, bukan karena teknologinya gagal, tetapi karena tidak ada yang menahan tim kembali ke kebiasaan lama: "ini lebih cepat", "kita memang selalu begini". Technical debt yang baru dibersihkan tumbuh diam-diam, dan upgrade berikutnya kembali mahal. Artikel ini membahas sisi **[SAP Clean Core](https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide)** yang jarang ditulis: bukan cara membersihkan core saat migrasi, melainkan disiplin operasional yang menjaganya tetap bersih setelah go-live.

> **Ringkas:** Tata kelola SAP Clean Core adalah disiplin berkelanjutan yang menjaga inti S/4HANA tetap standar dan *upgrade-safe* setelah go-live, lewat kebijakan pengembangan (ABAP Test Cockpit sebagai gerbang kode), pemantauan KPI (di SAP Cloud ALM), dan kepemilikan yang jelas melalui SAP Center of Excellence. Ini bukan proyek pembersihan satu kali.

{IMAGE_01: Timeline horizontal "perjalanan drift core" — titik Go-Live (ikon core hijau bersih) → 6 bulan (exemption mulai menumpuk, kuning) → 12-18 bulan (objek Level C dan D tumbuh, oranye) → upgrade berikutnya (biaya tinggi, merah). Di bawah setiap titik, label tindakan governance yang mencegah drift. Gaya korporat biru-putih SAP, teks Bahasa Indonesia.}

## Apa itu tata kelola (governance) SAP Clean Core?

Tata kelola clean core adalah cara perusahaan menjaga inti S/4HANA tetap standar setelah go-live, bukan kegiatan satu kali melainkan siklus berkelanjutan. Ia menggabungkan kebijakan (kustomisasi baru harus lewat jalur yang benar), alat pemantauan, dan kepemilikan yang jelas, agar sistem tetap mudah di-*upgrade* dan siap inovasi.

Penting dibedakan dari remediasi awal. Remediasi adalah membersihkan kode Z saat proyek migrasi; governance adalah menjaga agar kebersihan itu tidak hilang lagi sesudahnya. Keduanya berbeda fase dan berbeda pemilik.

Menurut SAP, clean core mencakup lima dimensi: *Processes*, *Extensibility*, *Data*, *Integrations*, dan *Operations* ([SAP, 2026](https://www.sap.com/products/erp/rise/methodology/clean-core.html)). Tata kelola adalah mekanisme yang menjaga kelimanya tetap pada jalurnya.

Satu kesalahpahaman umum: clean core bukan berarti *zero customization*. SAP secara eksplisit mendukung ekstensi yang dibangun dengan benar. Governance tidak melarang kustomisasi, melainkan memastikannya memakai jalur yang tepat.

## Mengapa core kembali "kotor" setelah go-live?

Core kembali kotor karena perhatian governance berhenti tepat saat proyek migrasi selesai. Tim implementor pergi, fokus organisasi pindah ke proyek berikutnya, dan tim operasional mewarisi sistem tanpa kebiasaan, otoritas, atau keakraban alat untuk menjaganya di bawah tekanan jadwal (IgniteSAP, Maret 2026). Saat itu, jalan pintas menang.

Sinyal pertamanya jarang berupa kode baru yang besar. Lebih sering, ia berupa *exemption log* ATC yang tumbuh tanpa ditinjau: daftar pengecualian yang terus bertambah sementara tidak ada yang membaca alasannya. Volume exemption yang naik tanpa review adalah salah satu indikator drift paling awal dan paling jelas (IgniteSAP, Maret 2026).

Konsekuensinya menumpuk perlahan. Setiap kustomisasi yang lolos di luar jalur bersih menambah objek yang harus diuji ulang pada setiap pembaruan SAP, sehingga biaya dan risiko *upgrade* berikutnya naik, persis masalah yang ingin dihindari saat pindah ke cloud.

Karena itu, tata kelola clean core paling masuk akal diperlakukan sebagai kelanjutan langsung dari proyek [migrasi ERP ke cloud](https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud), bukan agenda terpisah yang dipikirkan belakangan.

## Empat pilar operasional yang menjaga core tetap bersih

Tata kelola yang berjalan bersandar pada empat pilar: ATC sebagai gerbang kode, SAP Cloud ALM sebagai dashboard KPI, *transport governance* sebagai kontrol perpindahan, dan SAP Center of Excellence (CoE) sebagai pemilik keputusan. Tiga pertama adalah alat; pilar keempat membuat ketiganya berarti.

**ABAP Test Cockpit (ATC)** adalah alat pemindai kode bawaan SAP yang menganalisis objek ABAP sebelum ditransport. Untuk governance, SAP merekomendasikan *Central ATC* yang di-host di SAP BTP ABAP environment bagi landscape *private cloud* maupun *on-premise*, agar pemantauan mencakup seluruh landscape, bukan satu sistem saja ([SAP Community, 2026](https://community.sap.com/t5/technology-blog-posts-by-sap/abap-test-cockpit-atc-recommendations-for-governance-of-clean-core-abap/ba-p/14186130)). Konfigurasi standarnya adalah *blocking mode* untuk temuan Prioritas 1 dan Prioritas 2 di sistem pengembangan: kode yang melanggar panduan clean core tidak bisa ditransport sampai diperbaiki atau mendapat *exemption* yang terdokumentasi.

**SAP Cloud ALM** menampung RISE with SAP Methodology Dashboard, tempat KPI clean core dipantau terus-menerus. Dashboard ini memiliki dua tampilan: *System View* (distribusi objek kustom per Level A-D, *Technical Debt Score*, dan *Clean Core Share*) dan *Operations View* (KPI kesehatan sistem), dengan *drill-down* ke Customer Objects untuk menyorot objek paling berisiko.

**Transport governance** memastikan setiap perpindahan kode terdokumentasi dan disetujui sebelum masuk produksi, dengan tautan ke *change request*, agar tidak ada kode yang berpindah tanpa jejak.

Di lapangan, tim Application Management Services (AMS) Soltius sering menemukan exemption log yang menumpuk sebagai sinyal drift pertama, jauh sebelum ada keluhan saat upgrade.

| Mekanisme | Apa yang dikontrol | Pemilik | Frekuensi |
|---|---|---|---|
| **ATC — blocking mode** | Mencegah kode Prioritas 1 & 2 masuk transport ke QA/Prod | Tim pengembangan + CoE (pemilik kebijakan) | Per transport (otomatis) |
| **ATC Exemption Log** | Jumlah & rasionalisasi pengecualian; indikator awal drift | CoE / SAP Manager | Ditinjau per kuartal |
| **RISE with SAP Methodology Dashboard (SAP Cloud ALM)** | Objek kustom per Level A-D, Technical Debt Score, Clean Core Share | CoE + CIO / IT Lead | Harian + review per kuartal |
| **Transport Governance** | Dokumentasi & persetujuan tiap transport; tautan change request | Change manager + CoE | Per transport |
| **Quarterly Health Review** | Objek per level, exemption baru, roadmap remediasi C & D | CoE (teknis + fungsional) | Per kuartal |
| **Extension Decision Catalogue** | Justifikasi & rencana remediasi tiap ekstensi | CoE | Tiap ada ekstensi/exemption baru |

{IMAGE_02: Diagram roda empat pilar tata kelola clean core — ATC (gerbang kode), SAP Cloud ALM (dashboard KPI), Transport Governance (kontrol perpindahan), CoE (pemilik keputusan) di pusat. Panah melingkar menunjukkan siklus kuartalan. Warna biru/putih SAP, ikon tiap pilar, teks Bahasa Indonesia.}

## Bagaimana cara membangun siklus tata kelola clean core?

Siklusnya berputar pada dua ritme: pengecekan otomatis setiap kali kode ditulis, dan tinjauan kesehatan mendalam setiap kuartal. Yang pertama mencegah masalah masuk; yang kedua menangkap tren sebelum menjadi technical debt. Bahasa keputusannya adalah *Extensibility Level* A-D, yang SAP resmikan pada Agustus 2025.

Empat langkah berikut membentuk ritme operasional itu:

1. **Pre-development check.** Sebelum menulis kode, tim bertanya: apakah ada *released API* untuk kebutuhan ini? Masuk level berapa ekstensinya? Apakah akan lolos *upgrade* berikutnya? Kustomisasi baru idealnya disalurkan ke jalur bersih, misalnya ekstensi *side-by-side* lewat [platform low-code SAP Build](https://www.soltius.co.id/id/blog/low-code-and-no-code-platforms) di atas SAP BTP.
2. **Klasifikasi per level.** Setiap ekstensi dipetakan ke salah satu *Extensibility Level*: A memakai *released API* dan upgrade-safe (target pengembangan baru); B memakai classic API dan boleh dengan persetujuan CoE; C mengakses objek internal dan masuk roadmap remediasi; D adalah modifikasi yang harus dieliminasi.
3. **Quarterly clean core health review.** Setiap kuartal CoE meninjau jumlah objek per level, log exemption ATC, KPI di dashboard, exemption baru sejak review terakhir, dan roadmap remediasi Level C dan D (IgniteSAP, Maret 2026).
4. **Eskalasi & katalog keputusan.** Permintaan exemption naik ke CoE; setiap keputusan dicatat dalam *extension decision catalogue* agar tidak diputuskan ulang dari nol.

Empat level itu menjadi bahasa bersama tim teknis dan manajemen, bukan jargon: Level A adalah satu-satunya yang sepenuhnya upgrade-safe, sedangkan Level D menciptakan risiko terberat saat setiap pembaruan SAP dirilis.

Kepemilikan menyatukan semuanya. SAP Center of Excellence memiliki kerangka governance, melatih anggota tim baru, mengelola katalog keputusan ekstensi, dan menjadi titik eskalasi utama untuk permintaan exemption (IgniteSAP, Maret 2026). Tanpa pemilik yang jelas, alat sebaik apa pun menganggur.

## Kapan tata kelola seketat ini BELUM perlu — dan kapan justru wajib

Tidak setiap perusahaan butuh governance seberat ini. Untuk organisasi kecil dengan sedikit kustomisasi atau yang baru *greenfield* bersih, membangun CoE penuh dan tinjauan kuartalan formal bisa jadi *over-engineering*: biaya tata kelolanya melebihi risiko yang dicegah. Ambang sederhananya: jika jumlah objek kustom Anda bisa dihitung dengan jari, mulailah ringan.

Governance adalah alat untuk mengelola risiko, bukan tujuan tersendiri. Skalakan dengan kompleksitas *landscape* Anda, bukan dengan ambisi.

Sebaliknya, untuk *landscape* *brownfield* besar dengan ratusan objek Z, ketiadaan governance hampir pasti membuat core kotor lagi dalam satu-dua tahun. Di sinilah ATC blocking mode, dashboard KPI, dan tinjauan kuartalan berhenti menjadi formalitas dan menjadi penahan utama technical debt.

Konteks Indonesia menambah satu alasan. Sejak UU PDP (Undang-Undang Pelindungan Data Pribadi No. 27/2022) berlaku penuh pada 17 Oktober 2024, dengan sanksi hingga 2% dari pendapatan tahunan, ekspektasi tata kelola IT menguat. UU PDP tidak secara khusus mensyaratkan clean core, tetapi dimensi *Data*-nya, termasuk Master Data Governance (MDG), mendukung kontrol data yang kini diawasi lebih ketat.

## FAQ (Pertanyaan yang Sering Diajukan)

### Apa fungsi SAP Cloud ALM untuk tata kelola clean core?
SAP Cloud ALM menampung RISE with SAP Methodology Dashboard yang memantau kepatuhan clean core. Dashboard ini punya System View (distribusi objek kustom per Level A-D, Technical Debt Score, Clean Core Share) dan Operations View (KPI kesehatan sistem), lengkap dengan drill-down ke Customer Objects untuk menyorot objek paling berisiko.

### Apa itu ABAP Test Cockpit (ATC) dan bagaimana kaitannya dengan clean core?
ABAP Test Cockpit (ATC) adalah alat pemindai kode bawaan SAP yang menganalisis objek ABAP sebelum ditransport. SAP merekomendasikan Central ATC di SAP BTP ABAP environment dengan blocking mode untuk temuan Prioritas 1 dan 2, sehingga kode yang melanggar panduan clean core tidak bisa ditransport sampai diperbaiki atau mendapat exemption terdokumentasi.

### Apakah tata kelola clean core hanya urusan tim IT?
Tidak. Keputusan di Level C dan D punya konsekuensi bisnis, yaitu apakah sebuah proses boleh dikustomisasi atau harus mengikuti standar SAP. Karena itu tinjauan kuartalan idealnya dihadiri kepemimpinan teknis dan fungsional, dengan sponsor eksekutif yang mampu menahan tekanan "ini lebih cepat".

### Berapa sering audit atau review clean core sebaiknya dilakukan?
Standar yang direkomendasikan adalah tinjauan kesehatan setiap kuartal: jumlah objek kustom per level, log exemption ATC beserta alasannya, KPI di dashboard, exemption baru sejak review terakhir, dan roadmap remediasi Level C dan D. Di luar itu, ATC berjalan otomatis setiap kali kode akan ditransport.

### Apa risiko jika core SAP kembali kotor setelah migrasi?
Biaya upgrade melonjak karena setiap pembaruan SAP harus diuji ulang terhadap kustomisasi yang ada. SAP melaporkan pelanggan clean core mengalami 80% lebih sedikit kustomisasi perangkat lunak, angka yang sulit dipertahankan tanpa governance. Risiko lain: kustomisasi Level D bisa rusak saat SAP merilis patch, dan inovasi baru sulit diaktifkan.

## Kesimpulan

Menjaga core tetap bersih pada akhirnya bukan soal alat, melainkan soal siapa yang bertanggung jawab saat tekanan datang dan tim implementor sudah pergi. Sebagai SAP Platinum Partner melalui United VARs sekaligus Certified AMS Partner dan Partner Center of Expertise (PCoE) di Indonesia, Soltius mendampingi tata kelola clean core melalui Application Management Services (AMS): mengoperasikan ATC, memantau KPI di dashboard, dan menjalankan tinjauan kuartalan agar core yang sudah bersih tidak perlahan kotor kembali.

Untuk mendiskusikan kesiapan tata kelola clean core di perusahaan Anda, kunjungi soltius.co.id dan mulai dari sebuah percakapan.
