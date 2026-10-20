---
brief_id: "erp-migration-to-the-cloud-02"
researcher_run_date: "2026-08-11"
sources_cited: 12
flags: 5
---

# Research Dossier: Strategi Integrasi Saat Migrasi ERP ke Cloud: Antarmuka & API

## TL;DR for the writer

- **Integrasi adalah risiko delivery yang sering diremehkan** dalam migrasi S/4HANA — sistem jarang gagal di modul inti, tapi di titik integrasi (interface ke bank, pajak, e-commerce, gudang). Framing utama artikel: memetakan → memilih pola → memindahkan antarmuka, bukan menyalinnya apa adanya.
- **SAP Integration Suite adalah penerus resmi SAP PI/PO** dan merupakan layanan inti **SAP BTP**. SAP PI/PO (berbasis NetWeaver 7.5) **berakhir mainstream maintenance 31 Desember 2027**, extended maintenance sampai **akhir 2030** — deadline yang sejajar dengan deadline ECC. Ini pengait "kenapa sekarang".
- Kapabilitas Integration Suite yang perlu dijelaskan vendor-neutral: **Cloud Integration (mesin iFlow), API Management, Open Connectors, Event Mesh, Integration Advisor**. Kaitkan pola **API-led + side-by-side** dengan **clean core** (perluas tanpa modifikasi inti).
- **Konteks lokal Indonesia**: **Coretax DJP live sejak 1 Januari 2025** menggantikan e-Faktur/e-SPT/e-Billing lama — memaksa banyak perusahaan membangun/menata ulang interface pajak; integrasi ERP↔Coretax lazimnya lewat API (OAuth2). Interface bank **host-to-host** dan **WMS** adalah antarmuka satelit paling umum yang harus di-repoint saat cutover.
- **Soltius anchor**: mitra Implementation + Digital Platform yang menata ulang lapisan integrasi SAP–non-SAP; **implementasi/konfigurasi, bukan "membangun" Integration Suite**. Maksimum 2–3 sebutan, di penutup.

## Core facts (verified)

> **Claim**: SAP Integration Suite adalah produk penerus resmi dari SAP Process Integration/Orchestration (PI/PO).
> **Number/specific**: SAP menegaskan Integration Suite (di atas SAP BTP) sebagai successor strategis PI/PO; PI/PO tidak lagi menerima inovasi fungsional baru.
> **Source**: SAP Knowledge Base Article 3463462 "What is the successor product of SAP NetWeaver Process Integration?"; SAP Architecture Center "Migrating from SAP PI/PO to SAP Integration Suite" (https://architecture.learning.sap.com/docs/ref-arch/9a5f7b59dc/1), diakses 2026-08-11.
> **Confidence**: high

> **Claim**: SAP PI/PO berakhir masa dukungan mainstream, dengan opsi extended.
> **Number/specific**: Mainstream maintenance SAP Process Integration/Orchestration (berbasis NetWeaver 7.5) berakhir **31 Desember 2027**; extended maintenance tersedia hingga **akhir 2030** (biaya lebih tinggi, scope terbatas, tanpa fungsi baru).
> **Source**: SAP maintenance strategy (support.sap.com); dikonfirmasi banyak konsultan SAP (Conceto, S5 Consulting, PCG), diakses 2026-08-11.
> **Confidence**: high

> **Claim**: SAP Integration Suite adalah layanan inti (core service) dari SAP Business Technology Platform (BTP).
> **Number/specific**: Integration Suite adalah salah satu layanan utama SAP BTP — platform in-a-suite untuk integrasi cloud, hybrid, dan on-premise.
> **Source**: SAP Help Portal — Introduction to SAP Integration Suite (help.sap.com), diakses 2026-08-11.
> **Confidence**: high

> **Claim**: SAP Integration Suite memiliki beberapa kapabilitas inti.
> **Number/specific**: Empat kapabilitas utama — **Cloud Integration, API Management, Event Mesh, Integration Advisor** — plus **Open Connectors**. Cloud Integration adalah mesin integrasi proses/pesan (penerus fungsi ESB PI/PO) yang menjalankan **integration flow (iFlow)**.
> **Source**: SAP Help Portal (help.sap.com) + SAP Learning "Administering SAP Integration Suite" (learning.sap.com), diakses 2026-08-11.
> **Confidence**: high

> **Claim**: Cloud Integration menghubungkan aplikasi cloud dan on-premise melalui pertukaran pesan.
> **Number/specific**: Cloud Integration mendukung integrasi proses end-to-end antar aplikasi cloud dan on-premise (cloud↔on-premise dua arah) via pertukaran message.
> **Source**: SAP Help Portal / SAP Community (help.sap.com), diakses 2026-08-11.
> **Confidence**: high

> **Claim**: Open Connectors menyediakan konektor prebuilt ke aplikasi pihak ketiga.
> **Number/specific**: Open Connectors menawarkan konektor bawaan ke ratusan aplikasi non-SAP (rujukan umum "350+"), mempercepat integrasi ke aplikasi SaaS pihak ketiga.
> **Source**: SAP Help Portal + materi ASUG/SAP-Press, diakses 2026-08-11.
> **Confidence**: medium (angka "350+" bervariasi antar dokumen; sebaiknya frasa "ratusan konektor prebuilt").

> **Claim**: Integration Advisor mempercepat integrasi B2B dan mendukung standar EDI.
> **Number/specific**: Integration Advisor memberi usulan pemetaan (mapping) cerdas dan mendukung standar seperti **EDIFACT, ANSI X12, dan IDoc**.
> **Source**: SAP Learning / SAP Help Portal, diakses 2026-08-11.
> **Confidence**: high

> **Claim**: Event Mesh mendukung komunikasi event-driven (publish/subscribe).
> **Number/specific**: Aplikasi mengirim event kecil ke event broker saat suatu kejadian terjadi; aplikasi lain berlangganan event yang relevan — memungkinkan arsitektur asinkron/loosely coupled.
> **Source**: SAP Help Portal, diakses 2026-08-11.
> **Confidence**: high (catatan: brief membatasi kedalaman event-driven — sebut singkat saja).

> **Claim**: Integrasi/antarmuka kompleks termasuk tantangan terbesar dalam migrasi S/4HANA.
> **Number/specific**: Integrasi kompleks disebut termasuk tantangan terbesar migrasi S/4HANA (bersama kualitas data, custom code yang tak kompatibel, resistensi organisasi); "sistem tidak gagal secara terisolasi — mereka gagal di titik integrasi".
> **Source**: CIO.com "SAP customers struggle with S/4HANA migration"; PractiTest "Common Risks in S/4HANA Migration", diakses 2026-08-11.
> **Confidence**: high (untuk klaim kualitatif; hindari mengarang persentase spesifik).

> **Claim**: Koneksi bank host-to-host di SAP secara klasik memakai middleware untuk mengirim file pembayaran dan menerima rekening koran.
> **Number/specific**: Alur khas: program pembayaran di S/4HANA/ECC menghasilkan **payment file** → middleware (historisnya PI/PO) mengambil, mengenkripsi, dan mengirim via **SFTP** ke jaringan bank → bank membalas **status pembayaran** dan **bank statement** (format legacy seperti MT940 / CAMT.053). Alternatif modern: **SAP Multi-Bank Connectivity (MBC)**.
> **Source**: SAP Community "Corporate-to-Bank Connectivity in SAP: An Overview" (community.sap.com/.../ba-p/13481855) + "SAP Multi-Bank Connectivity (MBC)", diakses 2026-08-11.
> **Confidence**: high (untuk pola umum; format spesifik per bank bervariasi).

> **Claim**: Coretax DJP menggantikan sistem perpajakan lama dan menjadi platform terintegrasi.
> **Number/specific**: **Coretax DJP live sejak 1 Januari 2025**, menyatukan e-Faktur, e-SPT, e-Billing, dan manajemen akun wajib pajak dalam satu platform; menggantikan sistem DJP sebelumnya. Penegasan kepatuhan lewat **PER-19/PJ/2025** (efektif 22 Oktober 2025).
> **Source**: Kemenkeu — Media Keuangan "Peralihan Sistem Perpajakan Indonesia ke Coretax DJP" (mediakeuangan.kemenkeu.go.id); IKPI (ikpi.or.id), diakses 2026-08-11.
> **Confidence**: high (tanggal live & fungsi); medium (detail PER-19 — sumber asosiasi/konsultan, bukan teks resmi DJP yang di-fetch langsung).

> **Claim**: Integrasi ERP ke Coretax lazim dilakukan lewat API dengan autentikasi berbasis token.
> **Number/specific**: Perusahaan mendaftarkan aplikasi ERP sebagai sistem terintegrasi di portal DJP; menghasilkan **Client ID/Client Secret** untuk autentikasi **OAuth2**, agar data transaksi ERP mengalir otomatis ke Coretax tanpa input ulang manual.
> **Source**: Praktik implementasi ERP–Coretax (blog vendor ERP: erzap, saka-erp), diakses 2026-08-11.
> **Confidence**: medium (mekanisme OAuth2/Client ID akurat secara umum; sumber bukan tier-1 — sarankan frasa "umumnya lewat API resmi DJP dengan autentikasi token", tanpa mengklaim detail teknis sebagai standar mutlak).

> **Claim**: SAP menjamin masa dukungan jangka panjang S/4HANA, sementara ECC menuju akhir dukungan.
> **Number/specific**: **Innovation commitment SAP S/4HANA hingga 2040** (selalu ada minimal satu release dalam maintenance). SAP ECC (Business Suite 7, EHP 6–8) **mainstream maintenance berakhir 31 Desember 2027**, extended hingga **31 Desember 2030**.
> **Source**: SAP support "Innovation Commitment for SAP S/4HANA until 2040" & maintenance strategy (support.sap.com), diakses 2026-08-11.
> **Confidence**: high

## Solution focus + Soltius anchor (from product_matrix.md)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| **SAP Integration Suite** (layanan inti SAP BTP) | Penerus resmi PI/PO; kapabilitas Cloud Integration/API Management/Event Mesh/Integration Advisor/Open Connectors | H2 #3 (Apa itu Integration Suite) | **Digital Platform** (integrasi/extensibility BTP) + **Implementation** |
| **SAP PI/PO (Process Integration/Orchestration)** | Middleware klasik; mainstream maintenance berakhir 31 Des 2027, extended s/d 2030 → alasan migrasi | H2 #1 & #3 | — (konteks urgensi, bukan CTA) |
| **Pola integrasi**: point-to-point vs API-led; iDoc/RFC/BAPI vs API modern | API-led + side-by-side = wujud clean core (perluas tanpa modifikasi inti) | H2 #4 (tabel) | tie-in ke **SAP Clean Core** (cousin link) |
| **Interface lokal**: bank host-to-host, Coretax/e-Faktur, e-commerce, WMS | Coretax live 1 Jan 2025; host-to-host via SFTP + payment file/bank statement | H2 #5 | **Implementation** — pengalaman menata interface SAP–non-SAP |
| **Migrasi PI/PO → Integration Suite** | Bukan lift-and-shift; kesempatan memangkas interface warisan | H2 #2 & #6 | **Migration** service + **ERP Strategy** |

Reminder: Soltius **mengimplementasi/mengonfigurasi/menata ulang** lapisan integrasi ini — **tidak "membangun" SAP Integration Suite**. Maks 2–3 sebutan Soltius; utamakan penutup. Anchor phrasing yang cocok: *"Sebagai SAP Platinum Partner (melalui United VARs), Soltius merancang ulang lapisan integrasi — dari middleware lama ke SAP Integration Suite di atas BTP — agar antarmuka bank, pajak, dan gudang tetap andal setelah pindah ke cloud."*

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **SAP Architecture Center — "Migrating from SAP PI/PO to SAP Integration Suite" (SAP, diakses 2026-08-11)** — https://architecture.learning.sap.com/docs/ref-arch/9a5f7b59dc/1 — *what it backs*: Integration Suite sebagai penerus resmi PI/PO + panduan pola migrasi.
2. **SAP Knowledge Base Article 3463462 — "What is the successor product of SAP NetWeaver Process Integration?" (SAP)** — https://userapps.support.sap.com/sap/support/knowledge/en/3463462 — *what it backs*: posisi successor resmi PI/PO.
3. **SAP — "Innovation Commitment for SAP S/4HANA until 2040" & maintenance strategy (SAP support)** — https://support.sap.com/en/release-upgrade-maintenance/maintenance-information/maintenance-strategy/s4hana-business-suite7.html — *what it backs*: tanggal ECC 2027/2030 & komitmen S/4HANA 2040.
4. **SAP Community — "Corporate-to-Bank Connectivity in SAP: An Overview" (SAP)** — https://community.sap.com/t5/enterprise-resource-planning-blog-posts-by-sap/corporate-to-bank-connectivity-in-sap-an-overview/ba-p/13481855 — *what it backs*: pola host-to-host bank (payment file, SFTP, MT940/CAMT, MBC).
5. **Kemenkeu — Media Keuangan, "Peralihan Sistem Perpajakan Indonesia ke Coretax DJP"** — https://mediakeuangan.kemenkeu.go.id/article/show/menuju-pajak-yang-lebih-mudah-peralihan-sistem-perpajakan-indonesia-ke-coretax-djp — *what it backs*: Coretax live 2025 sebagai platform pajak terintegrasi (konteks localization Indonesia).
6. **CIO.com — "SAP customers struggle with S/4HANA migration"** — https://www.cio.com/article/3851772/sap-users-struggle-with-s4-hana-migration.html — *what it backs*: integrasi sebagai salah satu tantangan terbesar migrasi.

Priority order terpenuhi: SAP official (1–4) > Kemenkeu (5) > tech press (6).

## FAQ Q&As (6 drafted, Bahasa Indonesia)

### Apa itu SAP Integration Suite?
SAP Integration Suite adalah platform integrasi cloud-native yang menjadi layanan inti SAP Business Technology Platform (BTP). Ia menyatukan beberapa kapabilitas dalam satu paket: Cloud Integration untuk menghubungkan aplikasi cloud dan on-premise, API Management untuk mengelola API, Event Mesh untuk komunikasi berbasis event, plus Integration Advisor dan konektor prebuilt. SAP memposisikannya sebagai penerus resmi SAP PI/PO.

### Apa bedanya SAP PI/PO dan SAP Integration Suite?
SAP PI/PO (Process Integration/Orchestration) adalah middleware on-premise generasi lama berbasis NetWeaver. SAP Integration Suite adalah penggantinya yang cloud-native di atas BTP, dengan API Management, Event Mesh, dan konektor bawaan. Yang menentukan: mainstream maintenance PI/PO berakhir 31 Desember 2027 (extended hingga 2030), sehingga interface lama perlu direncanakan pindah ke Integration Suite.

### Apakah integrasi lama bisa langsung dipakai setelah migrasi ke cloud?
Umumnya tidak apa adanya. Banyak antarmuka era ECC dibangun sebagai koneksi point-to-point atau di atas PI/PO yang masa dukungannya berakhir 2027. Perubahan data model S/4HANA, endpoint baru, dan model keamanan cloud sering membuat interface warisan harus dipetakan ulang, dikonfigurasi ulang, atau dibangun kembali di platform integrasi cloud — bukan sekadar disalin.

### Bagaimana SAP terhubung dengan e-Faktur/Coretax DJP dan bank?
Untuk pajak, sejak Coretax DJP berlaku 1 Januari 2025, integrasi ERP umumnya melalui API resmi DJP dengan autentikasi token (aplikasi didaftarkan di portal DJP) sehingga data faktur mengalir otomatis. Untuk bank, pola host-to-host lazim dipakai: ERP menghasilkan file pembayaran yang dikirim terenkripsi via SFTP, lalu bank membalas status dan rekening koran (mis. MT940/CAMT.053).

### Apakah integrasi harus diuji terpisah sebelum go-live?
Ya. Integrasi adalah salah satu titik kegagalan paling sensitif dalam migrasi S/4HANA — sistem sering gagal justru di titik antarmuka, bukan modul inti. Setiap interface kritikal (bank, pajak, e-commerce, WMS) sebaiknya punya skenario uji end-to-end sendiri, termasuk uji volume, penanganan error, dan rekonsiliasi, sebelum interface lama di-repoint ke lingkungan cloud saat cutover.

### Berapa besar porsi pekerjaan integrasi dalam proyek migrasi ke cloud?
Bervariasi per perusahaan, tetapi integrasi konsisten disebut sebagai salah satu penyumbang risiko dan effort terbesar migrasi S/4HANA, sejajar dengan kualitas data dan remediasi custom code. Langkah pertama yang menentukan adalah inventarisasi: mendata seluruh antarmuka inbound/outbound, mengklasifikasi kritikal vs non-kritikal, dan memutuskan mana yang dipindahkan, dibangun ulang, atau justru dipangkas.

## Data tables for the writer

### Tabel 1 — SAP PI/PO vs SAP Integration Suite
| Aspek | SAP PI/PO (Process Integration/Orchestration) | SAP Integration Suite |
|---|---|---|
| Model deployment | On-premise, berbasis SAP NetWeaver | Cloud-native, layanan inti SAP BTP |
| Status dukungan | Mainstream maintenance berakhir **31 Des 2027** (extended s/d 2030) | Produk penerus resmi; menerima inovasi baru |
| Kapabilitas API | Terbatas (fokus middleware/ESB) | API Management penuh (design, publish, kelola siklus hidup API) |
| Event-driven | Tidak native | Event Mesh (publish/subscribe) |
| Konektor pihak ketiga | Adapter, sebagian besar dibangun manual | Open Connectors prebuilt (ratusan aplikasi) |
| Gaya integrasi | Cenderung point-to-point/terpusat | API-led, side-by-side (selaras clean core) |

### Tabel 2 — Pola integrasi: kapan pakai yang mana
| Pola | Cara kerja | Cocok untuk | Risiko/catatan |
|---|---|---|---|
| **Point-to-point** | Koneksi langsung antar dua sistem | Interface sedikit, sederhana, jarang berubah | Berlipat menjadi "spaghetti" saat sistem bertambah; sulit dipelihara |
| **iDoc / RFC / BAPI (klasik SAP)** | Format & remote call bawaan SAP | Skenario SAP-ke-SAP, EDI berbasis IDoc | Masih didukung, tapi kurang fleksibel untuk konsumen cloud/mobile |
| **API-led (REST/OData via API Management)** | Interface distandarkan sebagai API terkelola | Ekosistem campuran SAP + non-SAP, kanal cloud/mobile | Butuh tata kelola API; investasi awal lebih besar |
| **Event-driven (Event Mesh)** | Publish/subscribe event asinkron | Proses loosely-coupled, notifikasi real-time | Kompleksitas operasional; brief membatasi kedalaman topik ini |

### Tabel 3 — Antarmuka khas perusahaan Indonesia yang perlu di-integrasikan ulang
| Antarmuka satelit | Fungsi | Pola integrasi umum | Catatan lokal |
|---|---|---|---|
| **Bank (host-to-host)** | Kirim instruksi bayar, terima rekening koran/status | File pembayaran via SFTP; alternatif SAP Multi-Bank Connectivity | Format per bank bervariasi (mis. MT940/CAMT.053) |
| **Pajak — Coretax DJP / e-Faktur** | Kirim data faktur, terima status | API resmi DJP dengan autentikasi token | Coretax live 1 Jan 2025; interface pajak lama perlu diperbarui |
| **e-commerce / marketplace** | Sinkron order, stok, harga | API/konektor (REST) | Volume tinggi; butuh penanganan error & idempotensi |
| **WMS / sistem gudang** | Sinkron stok, pengiriman, penerimaan | iDoc/RFC atau API | Salah satu interface satelit paling umum; kaitkan ke cousin link WMS |

## Edge cases & nuance

- **"Successor" bukan berarti migrasi otomatis.** Integration Suite adalah penerus resmi PI/PO, tetapi konten integrasi (iFlow, mapping, adapter) umumnya harus di-assess dan sebagian dibangun ulang — bukan tombol "upgrade". SAP menyediakan Migration Assessment/tooling, namun writer sebaiknya tidak menjanjikan konversi 1:1.
- **Migrasi = kesempatan memangkas, bukan menyalin.** Sebagian interface warisan sudah usang (sistem sumber pensiun, proses berubah). H2 #6 harus jujur: membawa semua interface lama ("lift & shift" integrasi) justru memindahkan hutang teknis ke cloud.
- **Clean core vs realita.** API-led/side-by-side adalah wujud clean core, tapi tidak semua interface bisa 100% "bersih" sejak hari pertama; sering ada fase transisi hybrid (sebagian tetap di on-premise sementara). Frasa sebagai perjalanan, bukan status biner.
- **Host-to-host tidak seragam.** Format file & protokol bank berbeda-beda; jangan menyebut satu format sebagai "standar Indonesia". MT940/CAMT/SFTP adalah contoh umum, bukan aturan universal.
- **RISE with SAP ≠ integrasi selesai.** RISE/GROW membundel S/4HANA Cloud + entitlement BTP dasar, tetapi pekerjaan menata interface tetap proyek tersendiri; jangan menyiratkan RISE otomatis menyelesaikan integrasi.

## Flags (open factual risk)

- ⚠️ **Angka "350+ Open Connectors"**: bervariasi antar dokumen SAP/mitra → rekomendasi: tulis "ratusan konektor prebuilt", hindari angka pasti kecuali dikutip langsung dari SAP.
- ⚠️ **Detail teknis integrasi Coretax (OAuth2/Client ID-Secret)**: akurat secara umum tetapi sumber tier-2 (blog vendor ERP), bukan dokumen resmi DJP yang di-fetch langsung → rekomendasi: frasa "umumnya melalui API resmi DJP dengan autentikasi token"; jangan klaim sebagai satu-satunya mekanisme atau standar mutlak.
- ⚠️ **PER-19/PJ/2025 (efektif 22 Okt 2025)**: dari sumber asosiasi/konsultan pajak (IKPI), bukan teks resmi DJP yang diverifikasi langsung → rekomendasi: boleh sebut Coretax berlaku 2025 sebagai fakta; untuk nomor peraturan spesifik, attribut atau lebih baik cukup sebut "penegasan kepatuhan pada 2025".
- ⚠️ **Persentase spesifik "porsi integrasi X% dari effort migrasi"**: tidak ada angka otoritatif tunggal → rekomendasi: nyatakan kualitatif ("salah satu penyumbang risiko/effort terbesar"), jangan mengarang persentase.
- ⚠️ **Format file bank (MT940/CAMT.053) & SAP Multi-Bank Connectivity**: benar sebagai contoh umum, tetapi implementasi per bank berbeda → rekomendasi: sajikan sebagai ilustrasi, bukan spesifikasi wajib; semua contoh interface harus generik, bukan klaim proyek Soltius spesifik.

## Definition snippet draft (48 words)

> Strategi integrasi dalam migrasi ERP ke cloud adalah pendekatan terencana untuk memetakan seluruh antarmuka yang menghubungkan ERP dengan sistem lain — bank, pajak, e-commerce, dan gudang — lalu memilih pola integrasi yang tepat dan memindahkannya ke platform integrasi cloud-native seperti SAP Integration Suite, alih-alih menyalin interface lama apa adanya.
