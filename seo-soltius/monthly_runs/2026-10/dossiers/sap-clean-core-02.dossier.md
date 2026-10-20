---
brief_id: "sap-clean-core-02"
researcher_run_date: "2026-10-07"
sources_cited: 14
flags: 6
---

# Research Dossier: Integrasi SAP Clean Core dengan Sistem Regulasi Indonesia: Coretax, SLIK OJK, hingga BPJS

## TL;DR for the writer

- **Coretax sudah wajib sejak 31 Desember 2025** dan menggantikan e-Faktur lama. Modelnya berubah dari *pelaporan pasca-terbit* menjadi *validasi real-time (clearance)*: faktur dibuat dalam format XML spesifik, diunggah ke Coretax, lalu divalidasi dan diberi QR code + NSFP — tanpa itu faktur tidak sah untuk kredit PPN. Inilah pemicu teknis mengapa arsitektur integrasi SAP harus ditata ulang.
- **Jalur integrasi berjenjang**: mayoritas wajib pajak memakai *portal web* Coretax; **host-to-host (H2H) dan API baru relevan untuk filer volume tinggi / skala enterprise** — persis segmen pengguna SAP. Jangan menggambarkan H2H/API sebagai satu-satunya jalan untuk semua perusahaan.
- **Inti clean core (terverifikasi SAP)**: jaga S/4HANA sedekat mungkin dengan standar; pakai *three-tier extensibility* (Tier 1 ABAP Cloud yang hanya mengakses *released API*, key-user/developer extensibility di dalam aplikasi, dan *side-by-side* di SAP BTP untuk yang harus terpisah). Connector regulasi dibangun sebagai integrasi longgar di luar core, bukan modifikasi core.
- **JANGAN mengarang** nama endpoint/API DJP spesifik, dan **jangan mengklaim ada produk e-invoicing Indonesia tersertifikasi SAP** tanpa sumber — saya tidak menemukan sumber SAP-resmi yang mengonfirmasi cakupan Coretax oleh produk compliance SAP. Lihat Flags.
- **Nama resmi yang benar**: SLIK (OJK, pengganti BI Checking), BI-FAST (infrastruktur pembayaran ritel BI), BPJS Ketenagakerjaan & BPJS Kesehatan, UU PDP No. 27/2022 (berlaku penuh 17 Okt 2024).

## Core facts (verified)

> **Claim**: Coretax menjadi sistem administrasi pajak nasional yang wajib bagi hampir seluruh PKP dan menggantikan e-Faktur lama.
> **Number/specific**: Wajib / fully enforceable per **31 Desember 2025**; Coretax adalah rilis produksi program pembaruan sistem inti DJP (PSIAP) yang diluncurkan Januari 2025.
> **Source**: Comarch — "Indonesia's Coretax System: Full E-Invoicing Enforcement by Dec 31" (diakses 2026-10-07); Workato — "Coretax ERP Integration in 2026" (diakses 2026-10-07)
> **Confidence**: high

> **Claim**: Model berubah dari pelaporan pasca-terbit menjadi validasi real-time (clearance).
> **Number/specific**: Faktur divalidasi sebelum sah; cakupan mencakup transaksi B2B & B2G domestik, faktur ekspor, serta dokumen pembetulan (nota kredit/debit).
> **Source**: Comarch (diakses 2026-10-07)
> **Confidence**: high

> **Claim**: Faktur harus dibuat dalam format XML lokal spesifik, diunggah ke Coretax, divalidasi, dan diberi QR code + Nomor Seri Faktur Pajak (NSFP).
> **Number/specific**: Tanpa validasi/NSFP, faktur tidak sah untuk pengkreditan PPN.
> **Source**: Comarch; vatcalc; fiscal-requirements.com (diakses 2026-10-07)
> **Confidence**: high

> **Claim**: Jalur akses berjenjang — portal web adalah default bagi mayoritas wajib pajak; H2H atau klien desktop hanya untuk wajib pajak volume tinggi / skala enterprise.
> **Number/specific**: Sumber industri menyebut ambang praktis "sekitar 10.000 faktur/bulan" untuk jalur H2H/desktop, tetapi sumber Comarch tidak mencantumkan ambang numerik resmi. **Perlakukan angka 10.000 sebagai acuan industri, bukan angka resmi DJP.**
> **Source**: Comarch (jalur, tanpa ambang); vatcalc / fiscal-requirements.com (menyebut ~10.000/bulan) (diakses 2026-10-07)
> **Confidence**: medium (ambang numerik), high (keberadaan jenjang portal vs H2H/API)

> **Claim**: Integrasi via API Coretax umumnya menangani operasi tertentu (bukan nama endpoint resmi).
> **Number/specific**: Operasi tipikal: *push* faktur dengan alokasi NSFP, pengambilan status persetujuan faktur, alur pembatalan/penggantian, dan penautan dokumentasi klaim PPN masukan.
> **Source**: Workato — "Coretax ERP Integration in 2026" (diakses 2026-10-07)
> **Confidence**: medium (sumber iPaaS non-SAP; gunakan sebagai gambaran kapabilitas, jangan sebut sebagai nama API resmi DJP)

> **Claim**: Prinsip clean core = menjaga S/4HANA sedekat mungkin dengan standar, meminimalkan kode kustom dan modifikasi inti agar upgrade tidak mahal.
> **Number/specific**: "Clean core" = sistem yang mengikuti pedoman standar untuk semua elemen inti sehingga upgrade tidak menuntut upaya besar untuk uji & adaptasi.
> **Source**: SAP — "Clean core demystified" (blogs.sap.com); SAP BTP clean-core best practices (diakses 2026-10-07)
> **Confidence**: high

> **Claim**: SAP menetapkan *three-tier extensibility model* untuk extensibility clean-core-compliant.
> **Number/specific**: Tier 1 = ABAP Cloud (cara utama, *upgrade-safe*, hanya mengakses *released* SAP API); Developer Extensibility (ABAP Cloud, in-app lanjutan); Key User Extensibility (adaptasi sederhana in-app); Side-by-Side Extensibility di SAP BTP untuk yang harus *decoupled* dari ERP.
> **Source**: SAP Learning — "Practicing Clean Core Extensibility for SAP S/4HANA Cloud"; SAP ABAP Cloud FAQ (community.sap.com) (diakses 2026-10-07)
> **Confidence**: high

> **Claim**: ABAP Cloud adalah model pengembangan yang patuh prinsip clean core dan hanya dapat mengakses objek/released API publik.
> **Number/specific**: Versi ABAP cloud-optimized yang dibatasi; akses ke released API dan extension point resmi saja.
> **Source**: SAP ABAP Cloud FAQ (pages.community.sap.com) (diakses 2026-10-07)
> **Confidence**: high

> **Claim**: SAP BTP mendukung strategi clean core dengan menampung ekstensi & integrasi *side-by-side* di luar inti ERP.
> **Number/specific**: BTP menyediakan konektivitas proses, manajemen event, dan replikasi data sebagai jalur integrasi yang decoupled.
> **Source**: SAP — "Get your organization in shape: keep a clean core with SAP BTP" (blogs.sap.com) (diakses 2026-10-07)
> **Confidence**: high

> **Claim**: SAP Integration Suite adalah iPaaS (middleware) di SAP BTP untuk menghubungkan aplikasi SAP dan non-SAP.
> **Number/specific**: Berperan sebagai lapisan integrasi/orkestrasi; mapping, transformasi, dan konektivitas dilakukan di sini, bukan di dalam core.
> **Source**: SAP Learning — "Understanding SAP Integration Suite's Role in Connecting Applications" (diakses 2026-10-07)
> **Confidence**: high

> **Claim**: SAP Business Accelerator Hub adalah katalog API/integrasi/event/konektor siap pakai untuk menemukan released API.
> **Number/specific**: Berisi 3.400+ integrasi prebuilt, 250+ konektor ke aplikasi SAP & non-SAP, 3.800+ API & Data Graph, dan 600+ business event. Dokumentasi mengikuti spesifikasi OpenAPI.
> **Source**: SAP Business Accelerator Hub overview (api.sap.com) (diakses 2026-10-07)
> **Confidence**: high (angka ini berubah seiring waktu — sebut sebagai "ribuan" bila ragu)

> **Claim**: "SAP Event Mesh" dan "SAP Integration Suite, advanced event mesh" adalah dua produk berbeda yang saling melengkapi — bukan sekadar penggantian nama.
> **Number/specific**: Advanced event mesh (berbasis teknologi Solace, high-volume, multi-region) dapat meneruskan event ke SAP Event Mesh / Integration Suite untuk transformasi ke sistem of record.
> **Source**: SAP — halaman produk "SAP Integration Suite, advanced event mesh" (sap.com); blog SAP perbandingan (diakses 2026-10-07)
> **Confidence**: high

> **Claim**: SLIK (Sistem Layanan Informasi Keuangan) adalah sistem informasi perkreditan terpadu yang dikelola OJK, menggantikan "BI Checking"/SID.
> **Number/specific**: Pengelolaan beralih dari Bank Indonesia ke OJK sejak 1 Januari 2018; berisi riwayat kredit, status kolektibilitas, data agunan dari bank & lembaga keuangan nonbank.
> **Source**: Bisnis.com / Detik Finance / OJK via liputan (diakses 2026-10-07)
> **Confidence**: high

> **Claim**: BI-FAST adalah infrastruktur sistem pembayaran ritel nasional milik Bank Indonesia yang real-time dan tersedia 24/7.
> **Number/specific**: Diluncurkan Desember 2021, menggantikan SKNBI sebagai tulang punggung transfer ritel; memakai proxy address dan dilengkapi fitur deteksi fraud.
> **Source**: Bank Indonesia (bi.go.id — fungsi utama sistem pembayaran ritel); Warta Ekonomi (diakses 2026-10-07)
> **Confidence**: high

> **Claim**: UU Perlindungan Data Pribadi (UU PDP) No. 27 Tahun 2022 telah berlaku penuh.
> **Number/specific**: Diundangkan 17 Oktober 2022, dengan masa transisi 2 tahun; **berlaku penuh sejak 17 Oktober 2024**; memuat sanksi administratif hingga pidana atas kelalaian pengelolaan data pribadi (termasuk data karyawan & pelanggan).
> **Source**: Hukumonline (diakses 2026-10-07)
> **Confidence**: high

> **Claim**: SAP ECC mendekati akhir dukungan sementara S/4HANA dijamin jangka panjang — konteks "mengapa upgrade-safe penting".
> **Number/specific**: Mainstream maintenance ECC berakhir **31 Desember 2027**; extended maintenance berbayar hingga **2030** (+2 poin persen premi); komitmen inovasi S/4HANA hingga **2040**.
> **Source**: liputan SAP maintenance strategy (The Register/CIO/Rimini Street ringkasan) (diakses 2026-10-07) — untuk angka pasti, writer dapat merujuk SAP Note resmi
> **Confidence**: high (angka sudah stabil sejak pengumuman; tetap atribusikan ke SAP)

## Solution focus + Soltius anchor (from product_matrix.md)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| **SAP Integration Suite** (iPaaS/middleware di BTP) | Lapisan integrasi di luar core; mapping/transformasi/monitoring ada di sini | H2 #3 | — |
| **Released OData/REST API** + **three-tier extensibility** (ABAP Cloud Tier 1) | Hanya released API yang upgrade-safe; connector ke Coretax dipanggil lewat API resmi, bukan interface Z di core | H2 #1, #3 | — |
| **SAP Business Accelerator Hub** | Katalog untuk menemukan released API/konektor | H2 #3 | — |
| **Side-by-side extension di SAP BTP** (+ SAP Build) | Logika kustom regulasi lokal ditampung di BTP agar core bersih | H2 #4, #5 | — |
| **Event-driven (Event Mesh)** — sebut ringkas | Pola notifikasi perubahan/async; hati-hati penamaan (lihat Flags) | H2 #4 (baris tabel event) | — |
| **Soltius: Implementation + Enhancement + Integration + ERP Strategy** | SAP Platinum Partner via United VARs; pemahaman lanskap regulasi lokal | **Closing** + 1 aside opsional di H2 #3 | "Soltius merancang integrasi SAP ke sistem regulator Indonesia dengan pola clean-core-safe sehingga kepatuhan terpenuhi tanpa menambah utang teknis." |

Reminder: Soltius **mengimplementasikan/mengintegrasikan/mendukung** teknologi ini — bukan membangunnya. **Maks 2–3 self-mention Soltius** (idealnya: 1 aside di H2 #3 + 1 closing). Jangan menyebut superlatif ("terbaik/nomor satu"). Boleh: "SAP Platinum Partner melalui United VARs" dan "kontributor pendapatan terbesar bagi SAP Indonesia (sejak 2015)" sebagai pengakuan.

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **SAP — "Clean core demystified: what does it mean and how to achieve it with SAP BTP" (blogs.sap.com, 2023)** — https://blogs.sap.com/2023/07/01/clean-core-demystified-what-does-it-mean-and-how-to-achieve-it-with-sap-btp/ — *what it backs*: definisi clean core, peran BTP untuk ekstensi side-by-side.
2. **SAP Learning — "Practicing Clean Core Extensibility for SAP S/4HANA Cloud"** — https://learning.sap.com/courses/practicing-clean-core-extensibility-for-sap-s-4hana-cloud — *what it backs*: three-tier extensibility model; ABAP Cloud & released API.
3. **Comarch — "Indonesia's Coretax System: Full E-Invoicing Enforcement by Dec 31"** — https://www.comarch.com/trade-and-services/data-management/legal-regulation-changes/indonesias-coretax-system-full-e-invoicing-enforcement-by-dec-31/ — *what it backs*: tenggat 31 Des 2025, format XML, QR+NSFP, jalur portal vs H2H. (Konteks industri, bukan kompetitor SI — aman untuk outbound.)
4. **Bank Indonesia — Sistem Pembayaran Ritel / BI-FAST (bi.go.id)** — https://www.bi.go.id/id/fungsi-utama/sistem-pembayaran/ritel/infrastruktur/default.aspx — *what it backs*: definisi & karakter BI-FAST (real-time, 24/7).
5. **Hukumonline — penerapan penuh UU PDP No. 27/2022** — rujukan untuk tanggal berlaku penuh (17 Okt 2024) & rezim sanksi.

Priority order terpenuhi: SAP official > analis/industri > regulator Indonesia. **Hindari outbound ke halaman marketing kompetitor system integrator SAP.**

## FAQ Q&As (7 drafted, Bahasa Indonesia)

### Bagaimana cara menghubungkan SAP S/4HANA ke Coretax tanpa mengotori core?
Hubungkan melalui *released API* (OData/REST) yang dipanggil lewat middleware SAP Integration Suite di SAP BTP, bukan dengan interface Z atau connector ABAP di dalam core. Coretax menuntut faktur berformat XML yang divalidasi real-time (diberi QR code dan NSFP). Mapping, transformasi, dan monitoring ditempatkan di lapisan integrasi, sehingga inti S/4HANA tetap standar dan aman saat upgrade.

### Apakah integrasi pajak ke Coretax harus memakai custom ABAP di dalam core?
Tidak seharusnya. Refleks lama menulis connector ABAP atau interface Z di dalam core justru menambah utang teknis dan membuat setiap perubahan aturan DJP berisiko memicu regresi saat upgrade. Pendekatan clean-core menaruh logika integrasi di luar core — via SAP Integration Suite dan, bila perlu kustomisasi, lewat ekstensi side-by-side di BTP. Bila ABAP diperlukan, gunakan ABAP Cloud yang hanya mengakses released API dan bersifat upgrade-safe.

### Apa itu SAP Integration Suite dan apa fungsinya untuk integrasi regulasi?
SAP Integration Suite adalah layanan integrasi (iPaaS) di SAP BTP untuk menghubungkan aplikasi SAP dan non-SAP. Untuk integrasi regulasi, ia menjadi "lapisan perantara" tempat sistem SAP berbicara dengan endpoint Coretax, bank, atau BPJS: menangani konektivitas, transformasi format (mis. ke XML DJP), orkestrasi, dan pemantauan — semuanya di luar core. SAP Business Accelerator Hub membantu menemukan released API dan konektor yang relevan.

### Bagaimana pola integrasi SAP dengan SLIK OJK atau BI-FAST?
SLIK (Sistem Layanan Informasi Keuangan OJK, pengganti BI Checking) relevan bagi pelaku perbankan/pembiayaan untuk pengecekan riwayat kredit; BI-FAST adalah infrastruktur pembayaran ritel real-time 24/7 Bank Indonesia. Keduanya diintegrasikan melalui pola yang sama: panggilan API atau host-to-host ke sistem/penyelenggara terkait lewat middleware, dengan kredensial dan logika di luar core. Akses SLIK umumnya tunduk pada ketentuan dan perizinan OJK.

### Apakah middleware wajib untuk integrasi pajak DJP?
Secara teknis sebuah perusahaan bisa memanggil API langsung, tetapi untuk skala enterprise middleware sangat dianjurkan. Middleware (SAP Integration Suite) memberi *loose coupling*: ketika DJP mengubah skema XML atau alur, perubahan diserap di lapisan integrasi tanpa menyentuh core S/4HANA. Ini juga memusatkan keamanan, retry, dan monitoring. Tanpa middleware, connector cenderung tertanam di core dan rapuh terhadap perubahan regulasi.

### Apakah memakai solusi e-Faktur/e-invoicing dari partner tetap clean core?
Bisa, selama solusi tersebut berjalan sebagai aplikasi/ekstensi terpisah (mis. di SAP BTP) dan berintegrasi via released API — bukan menambal modifikasi ke dalam core. Pilih solusi partner tersertifikasi dan evaluasi apakah logikanya decoupled. Yang membuat integrasi "kotor" bukanlah penggunaan solusi pihak ketiga, melainkan menaruh connector dan mapping kustom di dalam inti ERP.

### Bagaimana UU PDP No. 27/2022 memengaruhi integrasi data pajak dan HR?
UU PDP (berlaku penuh 17 Oktober 2024) menuntut pemrosesan data pribadi — termasuk data karyawan untuk payroll/BPJS dan data rekanan pada faktur — dilakukan dengan dasar hukum, pengamanan, dan pembatasan yang jelas, dengan sanksi administratif hingga pidana atas kelalaian. Secara arsitektur, ini memperkuat alasan memusatkan aliran data di lapisan integrasi yang terkontrol (audit, enkripsi, minimisasi data) alih-alih menyebarkannya lewat connector ad-hoc di core.

## Data tables for the writer

### Tabel 1 — Pola integrasi × endpoint regulasi (H2 #4)
| Kebutuhan | Pola integrasi | Karakter | Contoh endpoint regulasi |
|---|---|---|---|
| Pelaporan batch berjadwal | Replikasi / scheduled (API batch / H2H) | Volume besar, tidak real-time, toleran jeda | Pengunggahan faktur pajak massal ke Coretax; pelaporan iuran BPJS |
| Cek status / validasi seketika | API sinkron (request–response) | Perlu jawaban cepat per transaksi | Validasi faktur & pengambilan status NSFP di Coretax; pengecekan SLIK |
| Notifikasi perubahan | Event-driven (eventing/Event Mesh) | Asinkron, loosely coupled, reaktif | Pemicu saat status pembayaran/faktur berubah |
| Pembayaran/transfer | H2H / API ke rail pembayaran | Keandalan & rekonsiliasi tinggi | BI-FAST / host-to-host bank |

> Catatan: volume/SLA pada tabel adalah **acuan praktis**, bukan angka resmi regulator.

### Tabel 2 — Di dalam core vs clean-core-safe (H2 #1/#3)
| Aspek | Pendekatan lama (mengotori core) | Pendekatan clean-core-safe |
|---|---|---|
| Lokasi connector | Interface Z / ABAP kustom di dalam core | SAP Integration Suite (iPaaS) di BTP |
| Jenis API | Akses tabel/BAPI langsung tak terkontrol | Released OData/REST API (via Business Accelerator Hub) |
| Kustomisasi lokal | Modifikasi inti | Ekstensi side-by-side di BTP / ABAP Cloud |
| Dampak perubahan DJP | Regresi & re-test core saat upgrade | Diserap di lapisan integrasi; core tetap standar |
| Keamanan & audit | Tersebar | Terpusat di middleware (sesuai UU PDP) |

## Edge cases & nuance

- **Portal dulu, baru H2H/API.** Mayoritas PKP memakai portal Coretax; H2H/API adalah jalur untuk filer volume tinggi — yaitu segmen pengguna SAP. Tulis dengan jujur: artikel ini relevan karena pembaca berada di segmen enterprise, bukan karena semua wajib pajak butuh H2H.
- **Angka "10.000 faktur/bulan" bukan patokan resmi.** Sumber industri menyebutnya; sumber Comarch tidak mencantumkan ambang numerik. Labeli sebagai acuan industri.
- **Kustomisasi lokal kadang tak terhindarkan** (format DJP yang belum tercakup standar, perubahan mendadak). Itu bukan kegagalan clean core — asal ditampung di BTP/ABAP Cloud dan tetap decoupled. Ini inti H2 #5.
- **SLIK bukan "integrasi bebas".** Akses SLIK tunduk perizinan OJK dan hanya relevan bagi lembaga jasa keuangan — jangan menggambarkannya sebagai integrasi generik untuk semua perusahaan.
- **BPJS = konteks payroll/HR.** Pelaporan iuran BPJS Ketenagakerjaan & Kesehatan bersinggungan dengan data pribadi karyawan (UU PDP). Hindari menyebut nama portal pelaporan spesifik kecuali diverifikasi (lihat Flags).

## Flags (open factual risk)

- ⚠️ **Produk e-invoicing Coretax tersertifikasi SAP**: saya **tidak menemukan sumber SAP-resmi** yang mengonfirmasi bahwa produk compliance SAP (mis. Document and Reporting Compliance) secara eksplisit mencakup Coretax Indonesia. → **Rekomendasi**: jangan sebut produk SAP spesifik untuk Coretax. Bicarakan *pola* ("solusi e-invoicing partner tersertifikasi" atau "kerangka statutory compliance") tanpa menamai produk yang cakupannya belum terkonfirmasi.
- ⚠️ **Nama endpoint/API DJP spesifik**: operasi (push faktur + NSFP, cek status, pembatalan/penggantian) berasal dari sumber iPaaS non-SAP (Workato). → **Rekomendasi**: deskripsikan sebagai *kapabilitas tipikal*, jangan tulis sebagai nama API resmi DJP. Jangan mengarang nama endpoint.
- ⚠️ **Ambang 10.000 faktur/bulan untuk H2H**: acuan industri, bukan angka resmi DJP yang terkonfirmasi. → **Rekomendasi**: frasa "wajib pajak volume tinggi" atau "sekitar 10.000 faktur/bulan (acuan industri)".
- ⚠️ **Penamaan event-driven**: "SAP Event Mesh" ≠ "SAP Integration Suite, advanced event mesh" (produk berbeda, saling melengkapi). → **Rekomendasi**: sebut generik "pola event-driven (kapabilitas eventing SAP Integration Suite)" dan hindari menyamakan keduanya.
- ⚠️ **Nama portal pelaporan BPJS** (mis. SIPP Online untuk BPJS Ketenagakerjaan, EDABU untuk BPJS Kesehatan): tidak diverifikasi dalam run ini. → **Rekomendasi**: jangan sebut nama portal spesifik kecuali writer memverifikasi; cukup "pelaporan iuran BPJS".
- ⚠️ **Angka Business Accelerator Hub** (3.400+ integrasi, 3.800+ API, dll.) berubah seiring waktu. → **Rekomendasi**: tulis "ribuan released API & konektor" bila ingin aman, atau atribusikan sebagai angkat per 2026.

## Definition snippet draft (48 words)

> **Integrasi clean core** adalah cara menghubungkan SAP S/4HANA ke sistem luar — seperti Coretax DJP, BI-FAST, atau BPJS — melalui released API dan middleware (SAP Integration Suite) di luar inti sistem, bukan lewat connector atau modifikasi di dalam core. Tujuannya menjaga core tetap standar dan aman saat upgrade.
