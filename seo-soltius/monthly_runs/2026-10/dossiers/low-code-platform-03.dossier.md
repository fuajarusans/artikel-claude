---
brief_id: "low-code-platform-03"
researcher_run_date: "2026-10-07"
sources_cited: 10
flags: 8
---

# Research Dossier: Dari Workflow ke RPA — Otomatisasi Proses Bisnis dengan SAP Build

## TL;DR for the writer

- **SAP Build Process Automation (SPA) bukan tiga produk terpisah, melainkan satu layanan low-code yang menyatukan tiga mekanisme**: workflow orchestration (orkestrasi tugas & approval antar-orang/sistem), RPA (bot yang meniru aksi di UI sistem), dan Document Information Extraction / SAP Document AI (menarik data dari dokumen). SAP sendiri menyebut SPA sebagai **evolusi/penggabungan dari dua produk lama — SAP Workflow Management + SAP Intelligent RPA — ke dalam satu tempat**. Ini fakta pembuka terkuat untuk membedakan artikel dari sekadar "daftar fitur".
- **Tiga mekanisme ≠ sama.** Pesan edukatif inti: pakai *workflow* untuk mengorkestrasi langkah & persetujuan; *RPA* ketika tak ada API dan bot harus "mengetuk" UI; *Document AI* untuk membaca PDF/dokumen. Pembaca Indonesia sering mengira ketiganya identik — di situlah whitespace artikel.
- **Attended vs unattended terkonfirmasi SAP**: attended = "digital assistant" di workstation pengguna, dipicu/didampingi manusia untuk tugas yang butuh intervensi; unattended = "digital worker" di server, dipicu jadwal/API/form, tanpa manusia. Satu Desktop Agent dikonfigurasi untuk salah satu mode, bukan keduanya sekaligus.
- **Document Information Extraction memang template + LLM** (jawaban langsung atas pertanyaan brief): mendukung ekstraksi berbasis *template* (preconfigured/custom) **dan** *pre-trained ML models*, serta mode **berbasis LLM (premium edition)** yang menarik data tanpa perlu membuat template. Jangan menyebut DOX "hanya template".
- **Jebakan otomatisasi itu nyata dan harus jujur**: RPA bersifat *surface automation* — rapuh bila UI sistem sumber berubah; integrasi via API/konektor lebih tahan lama. SAP sendiri menyediakan **konektor native + 120 paket konten siap pakai** untuk S/4HANA, jadi narasi yang benar adalah "pakai konektor/API dulu, RPA untuk celah yang tak ber-API". Mengotomasi proses yang rusak hanya mempercepat kesalahan — perbaiki/sederhanakan proses dulu.
- **Clean core tie-in**: otomatisasi & ekstensi berjalan di SAP BTP (side-by-side), di luar inti S/4HANA, sehingga core tetap standar dan mudah di-upgrade. Soltius ditutup sebagai mitra yang **merancang & mengimplementasikan** otomatisasi di SAP Build — bukan pembuat SAP Build.

## Core facts (verified)

> **Claim**: SAP Build Process Automation adalah satu layanan low-code yang menggabungkan workflow dan RPA
> **Number/specific**: SPA adalah "an evolution of previous standalone solutions SAP Workflow Management and SAP Intelligent RPA bringing both solutions together in one place" — otomasi proses & tugas dengan antarmuka drag-and-drop
> **Source**: SAP Community (blog SAP-authored, pages.community.sap.com/topics/process-automation & technology-blog-posts-by-sap), diakses 2026-10-07
> **Confidence**: high

> **Claim**: SPA menyatukan workflow orchestration, RPA bots, Document Information Extraction, business rules/decisions, dan forms dalam satu lingkungan visual di atas SAP BTP
> **Number/specific**: kemampuan inti mencakup proses/workflow, bot RPA, ekstraksi dokumen, decisions, dan formulir; dibangun tanpa/sedikit kode
> **Source**: SAP — halaman fitur SAP Build Process Automation (sap.com/products/technology-platform/process-automation/features.html) + cache research `low-code-platform.research.json`, diakses 2026-10-07
> **Confidence**: high (nama kapabilitas inti); fitur sangat rinci bisa berubah → lihat Flags

> **Claim**: Attended bot adalah "digital assistant" yang berjalan di workstation pengguna dan mendampingi manusia
> **Number/specific**: "Attended bots, also referred to as digital assistants… deployed on the user's workstation and typically launched by the users themselves" untuk proses yang masih butuh interaksi/validasi pengguna
> **Source**: SAP Community / SAP Help (community.sap.com + help.sap.com Desktop Agent docs), diakses 2026-10-07
> **Confidence**: high

> **Claim**: Unattended bot adalah "digital worker" yang berjalan di server tanpa intervensi manusia
> **Number/specific**: "Unattended bots, also referred to as digital workers… deployed on the server and typically scheduled or started by a configured trigger mechanism" (API call, jadwal, atau form)
> **Source**: SAP Community / SAP Help (community.sap.com + help.sap.com Desktop Agent docs), diakses 2026-10-07
> **Confidence**: high

> **Claim**: Satu Desktop Agent dikonfigurasi untuk mode attended ATAU unattended, tidak keduanya sekaligus; mode unattended memerlukan desktop agent service
> **Number/specific**: "Each Desktop Agent can be configured to run either attended or unattended automation, but not both simultaneously. To run an automation in unattended mode, the desktop agent service is required"
> **Source**: SAP Help — Desktop Agent Service / Desktop Agent User Guide (help.sap.com/docs/build-process-automation), diakses 2026-10-07
> **Confidence**: high

> **Claim**: Lisensi Attended Automation dijual dalam blok 10 koneksi
> **Number/specific**: "Attended Automation licenses are sold in blocks of 10 connections" — satu connection dihitung saat Agent terhubung ke cloud dan aktif menjalankan proses
> **Source**: WebSearch korpus lisensi/dokumentasi SPA (SAP-domain + ringkasan lisensi), diakses 2026-10-07 — *bukan halaman harga primer SAP*
> **Confidence**: medium (mekanisme blok-10 konsisten di beberapa sumber, tetapi SAP tidak mematok harga publik → lihat Flags; jangan sebut angka rupiah)

> **Claim**: Document Information Extraction mendukung ekstraksi berbasis template (preconfigured maupun custom) dan pre-trained ML models
> **Number/specific**: "template-based intelligent document processing… using preconfigured templates or custom templates"; dapat memakai "Templates or Pre-Trained AI Models" untuk menarik data dari PDF
> **Source**: SAP Help / SAP Developers — Document Information Extraction / SAP Document AI (help.sap.com/docs/document-ai + developers.sap.com tutorials), diakses 2026-10-07
> **Confidence**: high

> **Claim**: Tersedia juga ekstraksi berbasis LLM (premium edition) yang menarik data tanpa perlu membuat template
> **Number/specific**: "LLM-based document information extraction available to extract data from various document types without needing to create templates, using large language models (LLMs) powered by the premium edition"
> **Source**: SAP Help / SAP Developers — SAP Document AI (help.sap.com/docs/document-ai + developers.sap.com/tutorials/cp-aibus-dox-ui-gen-ai), diakses 2026-10-07
> **Confidence**: high (menjawab langsung pertanyaan brief "template + LLM?": jawabannya YA, keduanya ada)

> **Claim**: SAP menawarkan bantuan AI desain (Joule) untuk mempercepat pembuatan otomatisasi
> **Number/specific**: "design time AI assistance with Joule for developers… generate processes, forms, decisions, and scripts with natural language" plus ringkasan artifact otomatis
> **Source**: SAP (halaman fitur SPA) + SAP Community, diakses 2026-10-07
> **Confidence**: medium-high (fitur AI SAP berevolusi cepat; nama "Joule" benar per 2025-2026 → lihat Flags)

> **Claim**: SPA terintegrasi native ke SAP S/4HANA dan sistem SAP/non-SAP lewat konektor siap pakai
> **Number/specific**: "Native integrations with SAP Integration Suite, SAP S/4HANA Cloud, SAP Signavio solutions… prebuilt content, native connectors"; serta "connectors for SAP and non-SAP systems"
> **Source**: SAP (halaman fitur SPA) + SAP Learning course "Integration Between SAP Build Process Automation and S/4HANA/SAP ECC", diakses 2026-10-07
> **Confidence**: high

> **Claim**: SAP menyediakan konten otomatisasi siap pakai dalam jumlah besar untuk S/4HANA
> **Number/specific**: "120 pre-built content packages to easily extend business processes with automations for S/4HANA"; serta "hundreds of free, pre-built automation features and tools designed specifically for SAP S/4HANA Cloud"
> **Source**: SAP News — "New Automation Starter Pack for SAP S/4HANA Cloud, Public Edition" (news.sap.com/2023/01) + SAP Community, diakses 2026-10-07
> **Confidence**: medium (angka "120" dari 2023; jumlah pasti bergerak → attribusi/soft; lihat Flags)

> **Claim**: SAP Build Process Automation adalah salah satu komponen portofolio SAP Build di atas SAP BTP
> **Number/specific**: SAP Build = SAP Build Apps (aplikasi visual), **SAP Build Process Automation** (workflow + RPA + Document Information Extraction), SAP Build Work Zone (portal/experience), SAP Build Code (dev berbantuan GenAI) — semua berjalan di SAP BTP
> **Source**: knowledge_base/product_matrix.md + cache research `low-code-platform.research.json` (WebSearch sap.com), diakses 2026-10-07
> **Confidence**: high (nama komponen inti)

> **Claim**: Otomatisasi/ekstensi di SPA berjalan di luar inti S/4HANA (side-by-side di BTP) sehingga menjaga clean core
> **Number/specific**: logika otomatisasi & ekstensi "tinggal" di SAP BTP, bukan di dalam core S/4HANA, menjaga core tetap standar dan mudah di-upgrade
> **Source**: knowledge_base/product_matrix.md (baris Low-Code & Clean Core), diakses 2026-10-07
> **Confidence**: high (framing konseptual, bukan angka)

> **Claim**: RPA bersifat surface automation sehingga rapuh terhadap perubahan UI, sedangkan integrasi API/konektor lebih tahan lama
> **Number/specific**: bot RPA meniru klik/ketik di UI aplikasi; bila layout/UI sistem sumber berubah, bot bisa gagal. Konektor/API native (yang disediakan SPA untuk S/4HANA) tidak bergantung pada tampilan layar sehingga lebih stabil
> **Source**: prinsip praktik otomatisasi yang diakui luas (RPA = presentation-layer automation) + fakta konektor native SPA dari SAP, diakses 2026-10-07
> **Confidence**: medium (prinsip umum/pola lapangan, bukan satu angka tunggal → sajikan sebagai best practice, lihat Flags)

> **Claim**: Hyperautomation adalah pendekatan menggabungkan banyak alat otomatisasi (RPA + workflow + AI/ML + process mining) — pasar RPA & hyperautomation tumbuh kuat menuju 2026
> **Number/specific**: pasar RPA & hyperautomation diproyeksikan dari ~USD 16,73 miliar (2025) ke ~USD 20,46 miliar (2026), CAGR ~22,3%
> **Source**: WebSearch (laporan pasar sekunder — The Business Research Company/innowise), diakses 2026-10-07 — *bukan Gartner primer*
> **Confidence**: medium (sumber sekunder; sajikan sebagai proyeksi + attribusi; lihat Flags)

> **Claim**: Gartner memproyeksikan mayoritas pengembangan aplikasi baru akan memakai low-code, didorong antara lain oleh hyperautomation
> **Number/specific**: versi yang beredar: "low-code akan menjadi ~75% pengembangan aplikasi baru pada 2026 (naik dari ~40% pada 2021)"; pasar teknologi low-code ~USD 44,5 miliar pada 2026 (CAGR ~19%). Klaim Gartner yang paling sering dikutip aslinya: "by 2025, 70% of new applications… up from less than 25% in 2020"
> **Source**: Gartner (dikutip via sumber sekunder: Kissflow/AppMaster/InfoWorld), diakses 2026-10-07
> **Confidence**: medium (dokumen Gartner primer berbayar; versi angka/tahun berbeda antar sumber → attribusi + sajikan sebagai proyeksi; lihat Flags)

> **Claim** (Soltius, verified-by-default): Soltius = SAP Platinum Certified Channel Partner via United VARs, berdiri 1998, anak usaha Metrodata (sejak 2008), 200+ konsultan, 120+ klien; kontributor pendapatan terbesar bagi SAP Indonesia (sejak 2015)
> **Number/specific**: layanan relevan: Implementation (New Implementation, Enhancement, Migration) + ERP Strategy + Digital Platform solution
> **Source**: knowledge_base/company_profile.md
> **Confidence**: high (pre-approved; jangan superlatif; jangan klaim Soltius "membuat" SAP Build)

## Solution focus + Soltius anchor (from product_matrix.md)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| **SAP Build Process Automation** sebagai satu lingkungan: workflow orchestration + RPA (attended/unattended) + Document Information Extraction (template + LLM) + decisions/forms | Evolusi dari SAP Workflow Management + SAP Intelligent RPA; di atas SAP BTP; konektor native ke S/4HANA & non-SAP; bantuan AI Joule | H2 #1 (definisi), H2 #2 (tiga mekanisme), H2 #3 (attended/unattended) | **Implementation + Enhancement (SAP Platinum Partner via United VARs)** — merancang & mengimplementasikan otomatisasi |
| **RPA attended vs unattended** + batas/lisensi | Attended = digital assistant di workstation; unattended = digital worker di server; 1 Desktop Agent = 1 mode; lisensi attended per blok koneksi | H2 #3 (tabel) | — (edukasi vendor-netral) |
| **Clean Core** tie-in | Otomatisasi/ekstensi di BTP (side-by-side) menjaga inti S/4HANA standar & upgrade-safe | H2 #5 (jebakan) + cousin link | — |
| **Document Information Extraction / SAP Document AI** | Template (preconfigured/custom) + pre-trained ML + LLM premium edition tanpa template; untuk invoice/PO/dokumen | H2 #2 & FAQ | Digital Platform solution (implementasi) |

Reminder: Soltius **merancang/mengimplementasikan** otomatisasi di atas SAP Build — **tidak membuat** SAP Build. Maks 2–3 self-mention: satu closing (Implementation + Enhancement sebagai SAP Platinum Partner), opsional satu aside di H2 #5 bahwa **pemetaan proses yang benar adalah pekerjaan utama sebelum membangun bot** (hanya satu kalimat). Framing closing yang disarankan: *"Soltius membantu perusahaan merancang otomatisasi proses di SAP Build — dari pemetaan proses hingga implementasi — tanpa merusak inti S/4HANA."*

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **SAP — SAP Build Process Automation (halaman fitur resmi), diakses 2026-10-07** — https://www.sap.com/products/technology-platform/process-automation/features.html — *what it backs*: cakupan SPA (workflow + RPA + Document Information Extraction + decisions), konektor native ke S/4HANA & sistem non-SAP, bantuan AI. **Sumber primer tertinggi** untuk fakta produk — writer sebaiknya menautkan ini. (Catatan: fetch langsung diblokir anti-bot 403; isi dikonfirmasi via pencarian SAP-domain + mirror regional sap.com/mena.)
2. **SAP Help — Document Information Extraction / SAP Document AI + Desktop Agent Service, diakses 2026-10-07** — https://help.sap.com/docs/document-information-extraction/document-information-extraction/what-is-document-information-extraction — *what it backs*: DOX template + pre-trained + LLM (premium edition); definisi attended vs unattended via Desktop Agent. Sumber primer untuk kapabilitas ekstraksi dokumen & bot.
3. **Gartner — proyeksi low-code & hyperautomation (via sumber sekunder), diakses 2026-10-07** — mis. https://kissflow.com/low-code/gartner-forecasts-on-low-code-development-market/ — *what it backs*: tren adopsi low-code & hyperautomation menuju 2026. Attribusi "menurut proyeksi Gartner"; sebut sebagai proyeksi, bukan realisasi.

> Prioritas tautan: **SAP official > Gartner (sekunder) > lainnya.** Jangan menautkan blog pihak ketiga/vendor RPA pesaing (UiPath/Automation Anywhere) sebagai otoritas; mereka hanya pembanding, bukan sumber primer.

## FAQ Q&As (7 drafted, Bahasa Indonesia)

### Apa itu SAP Build Process Automation?
SAP Build Process Automation adalah layanan low-code di atas SAP BTP yang menyatukan tiga kemampuan dalam satu lingkungan visual: workflow orchestration (mengatur alur tugas dan persetujuan), RPA (bot yang meniru aksi manusia di layar sistem), serta Document Information Extraction untuk membaca data dari dokumen. SAP membangunnya dari penggabungan dua produk lama, SAP Workflow Management dan SAP Intelligent RPA, menjadi satu platform.

### Apa bedanya RPA dan workflow?
Workflow mengorkestrasi urutan langkah, tugas, dan persetujuan antar-orang maupun antar-sistem — ia mengatur "siapa melakukan apa, kapan". RPA (Robotic Process Automation) adalah bot yang meniru klik dan ketikan manusia pada antarmuka sistem yang tidak punya API. Workflow mengatur alur, RPA mengeksekusi tugas repetitif di dalam alur itu. Keduanya sering dipakai bersama, bukan saling menggantikan.

### Apa itu attended dan unattended bot?
Attended bot (digital assistant) berjalan di komputer pengguna dan didampingi manusia — cocok untuk tugas yang masih butuh validasi atau keputusan orang, dan biasanya dijalankan oleh penggunanya. Unattended bot (digital worker) berjalan di server tanpa campur tangan manusia, dipicu jadwal, API, atau form. Dalam SAP Build Process Automation, satu Desktop Agent dikonfigurasi untuk salah satu mode saja.

### Apa itu Document Information Extraction?
Document Information Extraction (kini juga disebut SAP Document AI) adalah layanan yang menarik data dari dokumen bisnis terstruktur maupun tidak terstruktur, seperti faktur dan PO dalam PDF. Ia mendukung ekstraksi berbasis template (preconfigured atau custom) dan model AI terlatih; tersedia pula mode berbasis LLM pada premium edition yang mengekstrak data tanpa perlu membuat template lebih dulu.

### Proses apa yang paling cocok diotomasi lebih dulu?
Prioritaskan proses bervolume tinggi dan berulang, berbasis aturan yang jelas, rawan salah ketik manual, melibatkan beberapa sistem, dan memiliki ROI terukur — misalnya entri faktur, rekonsiliasi data, atau pembuatan sales order dari lampiran email. Hindari mengotomasi proses yang masih sering berubah, penuh pengecualian, atau yang prosesnya sendiri belum beres; otomatisasi di atas proses buruk hanya mempercepat kesalahan.

### Apakah RPA aman dan tahan lama?
RPA aman bila diberi tata kelola yang benar (kredensial terkelola, hak akses minimal, audit log), namun secara teknis ia rapuh: karena meniru UI, bot bisa gagal ketika tampilan sistem sumber berubah. Karena itu, untuk sistem yang punya API — seperti S/4HANA yang menyediakan konektor native di SAP Build Process Automation — integrasi API lebih tahan lama daripada bot layar. RPA sebaiknya untuk celah yang tak ber-API.

### Apakah perlu kemampuan coding untuk memakainya?
Tidak untuk sebagian besar kasus. SAP Build Process Automation dirancang low-code dengan antarmuka drag-and-drop, template proses, dan konten siap pakai, sehingga pengguna bisnis (citizen developer) bisa membangun alur dan bot sederhana. Untuk logika kompleks atau integrasi lanjutan, keterampilan teknis tetap membantu, dan bantuan AI Joule dapat mempercepat pembuatan proses, form, serta skrip lewat perintah bahasa natural.

## Data tables for the writer

### Workflow vs RPA vs Document Information Extraction (H2 #2)
| Aspek | Workflow orchestration | RPA (bot) | Document Information Extraction |
|---|---|---|---|
| Fungsi inti | Mengatur urutan tugas & persetujuan antar-orang/sistem | Meniru aksi manusia (klik/ketik) di UI aplikasi | Membaca & menarik data dari dokumen/PDF |
| Kapan dipakai | Ada alur multi-langkah/approval | Sistem sumber tak punya API | Input berupa dokumen (faktur, PO, surat jalan) |
| Bergantung pada | Definisi proses & peran | Kestabilan tampilan UI sistem sumber | Template atau model AI/LLM |
| Ketahanan | Tinggi (logika, bukan UI) | Rapuh bila UI berubah | Tinggi untuk dokumen yang polanya konsisten |
| Contoh | Approval cuti/pengadaan lintas divisi | Salin data antar aplikasi legacy tanpa API | Ekstrak data faktur dari PDF ke S/4HANA |

### Attended vs Unattended Bot (H2 #3)
| Aspek | Attended (digital assistant) | Unattended (digital worker) |
|---|---|---|
| Lokasi jalan | Workstation/komputer pengguna | Server |
| Pemicu | Dijalankan/ didampingi pengguna, on-demand | Jadwal, API call, atau form (tanpa manusia) |
| Pengawasan manusia | Ya — untuk validasi/keputusan | Tidak |
| Cocok untuk | Tugas yang masih butuh intervensi manusia | Proses batch volume tinggi yang penuh aturan |
| Konfigurasi | Satu Desktop Agent = satu mode (tidak keduanya sekaligus) | Butuh desktop agent service untuk mode unattended |
| Contoh | Bot bantu agen call-center saat melayani pelanggan | Rekonsiliasi semalam, posting faktur massal |

### Kriteria memilih proses yang layak diotomasi lebih dulu (H2 #4)
| Kriteria | Mengapa penting |
|---|---|
| Volume tinggi & berulang | ROI otomatisasi berbanding lurus dengan frekuensi |
| Berbasis aturan jelas | Mudah dikodekan; sedikit pengecualian |
| Rawan salah ketik manual | Otomatisasi menekan error & rework |
| Lintas sistem | Menghapus "copy-paste" antar aplikasi |
| ROI terukur | Bisa dibuktikan (waktu/biaya yang dihemat) |
| **JANGAN dulu**: proses tak stabil, penuh pengecualian, atau belum beres | Otomatisasi memperbesar masalah proses yang rusak |

## Edge cases & nuance

- **"Low-code" bukan hanya soal aplikasi cantik.** Pain terbesar banyak perusahaan adalah proses manual (approval menumpuk, data diketik ulang, sistem tak saling bicara) — itulah ranah SPA, bukan sekadar app builder. Framing ini membedakan artikel dari hub yang generik.
- **Workflow, RPA, dan Document AI bukan sinonim** — kesalahan paling umum. Tegaskan: RPA adalah pilihan terakhir ketika API tak ada; workflow & integrasi API adalah tulang punggung yang lebih tahan lama.
- **RPA = presentation-layer automation.** Karena "mengetuk" UI, bot rapuh terhadap perubahan layar/versi aplikasi. Ini bukan cacat produk, tetapi sifat teknologi — maka SAP menyediakan konektor native/API untuk S/4HANA agar tak semua hal harus pakai bot.
- **Otomasi proses yang rusak = mempercepat kesalahan.** Trust-builder utama artikel (H2 #5): pemetaan & penyederhanaan proses mendahului pembangunan bot. Ini juga aside Soltius yang jujur (satu kalimat).
- **Document AI bukan OCR biasa.** Ia memahami field bisnis (nomor faktur, jumlah, vendor), bukan sekadar mengubah gambar jadi teks; mode LLM bahkan menangani dokumen yang belum pernah "dilihat" tanpa template.
- **Nama produk bergeser.** "Document Information Extraction" sedang di-rebrand SAP menjadi **"SAP Document AI"**; "SAP Intelligent RPA" sudah dilebur ke SPA. Pakai nama terkini dan jangan mencampur sebagai dua produk aktif terpisah.

## Flags (open factual risk)

- ⚠️ **Fetch halaman SAP resmi diblokir (HTTP 403 / render kosong).** Fakta produk dikonfirmasi lewat pencarian terbatas domain SAP (sap.com, help.sap.com, community.sap.com, developers.sap.com, learning.sap.com, news.sap.com) dan mirror regional, **bukan** satu fetch halaman primer bersih. → **Rekomendasi**: writer tetap menautkan URL kanonik fitur/help; untuk klaim fitur yang sangat spesifik, perlakukan sebagai "per dokumentasi SAP" dan hindari merinci batas teknis yang tak terkonfirmasi.
- ⚠️ **Lisensi attended "blok 10 koneksi"**: konsisten di beberapa ringkasan lisensi, tetapi SAP tidak mempublikasikan harga/metrik ini di satu halaman primer. → **Rekomendasi**: boleh sebut "dilisensikan per blok koneksi" tanpa angka rupiah/dolar; jangan mematok harga. Bila ragu, cukup katakan ada pertimbangan lisensi untuk bot dan sizing perlu dihitung.
- ⚠️ **Angka "120 pre-built content packages" (2023)**: jumlah konten siap pakai bergerak naik seiring rilis. → **Rekomendasi**: tulis "ratusan konten/konektor siap pakai (SAP menyebut sekitar 120 paket untuk S/4HANA per 2023)" atau frasa "puluhan hingga ratusan paket"; attribusi tahun bila menyebut angka.
- ⚠️ **Nama "Joule" & kapabilitas AI SAP**: berkembang sangat cepat (Joule, Joule Studio, agent AI). → **Rekomendasi**: sebut peran umum ("asisten AI SAP mempercepat pembuatan otomatisasi") dan hindari mengklaim fitur AI yang sangat spesifik tanpa verifikasi help.sap.com terbaru.
- ⚠️ **Pasar RPA & hyperautomation USD 20,46 miliar 2026 / CAGR 22,3%**: dari laporan pasar sekunder (TBRC/innowise), bukan Gartner primer. → **Rekomendasi**: "menurut proyeksi riset pasar" + sebut sebagai proyeksi; jangan menyandarkan ke Gartner bila yang dikutip bukan dokumen Gartner.
- ⚠️ **Statistik Gartner low-code (75% pada 2026 dari 40% 2021 vs 70% pada 2025 dari <25% 2020)**: beredar dalam beberapa versi tahun/base yang berbeda. → **Rekomendasi**: pilih satu versi, attribusi "menurut proyeksi Gartner", sajikan sebagai proyeksi; versi asli yang paling aman: "pada 2025, 70% aplikasi baru… naik dari <25% pada 2020".
- ⚠️ **Klaim "RPA rapuh terhadap perubahan UI"**: prinsip praktik yang diakui luas, bukan satu angka tunggal bersumber. → **Rekomendasi**: sajikan sebagai best practice/pola lapangan ("di lapangan, bot RPA cenderung…"), bukan statistik; sandingkan dengan fakta konektor native SAP yang terverifikasi.
- ⚠️ **Angka efisiensi spesifik (mis. "hemat X% waktu")**: brief mengingatkan jangan mengarang. → **Rekomendasi**: jika dipakai, hanya bila ada sumber SAP/analis; bila tidak, bingkai sebagai pola lapangan tanpa persentase keras.

## Definition snippet draft (55 words)

> Otomatisasi proses low-code adalah pembuatan alur kerja, bot, dan ekstraksi data secara visual dengan sedikit atau tanpa kode. Pada SAP, kemampuan ini diwakili SAP Build Process Automation — layanan di atas SAP BTP yang menyatukan workflow orchestration, RPA (bot attended dan unattended), serta Document Information Extraction (berbasis template dan LLM) dalam satu lingkungan.
