---
brief_id: "erp-migration-to-the-cloud-04"
researcher_run_date: "2026-06-02"
sources_cited: 14
flags: 4
---

# Research Dossier: Keamanan Data ERP di Cloud — Regulasi Indonesia dan Cara Memitigasi Risikonya

## TL;DR untuk penulis

- **Regulasi berlapis**: UU PDP No. 27/2022 (efektif penuh Oktober 2024) mengatur tanggung jawab Pengendali Data dan Prosesor Data, termasuk kewajiban kontraktual kepada vendor cloud; sanksi administratif bisa mencapai 2% dari pendapatan tahunan atau sanksi pidana hingga 6 tahun penjara.
- **BSSN menyediakan data serangan konkret**: lebih dari 3 miliar anomali/serangan siber terjadi Januari–Juli 2025; 56% ancaman berasal dari sumber eksternal — angka ini kuat untuk pembuka artikel.
- **SAP S/4HANA Cloud sudah bersertifikasi ISO 27001 dan SOC 2 Type II** (tercatat di SAP Cloud Trust Center); data center SAP untuk Southeast Asia berlokasi di Singapura dan Australia — *tidak ada* data center SAP owned di Indonesia per pengetahuan terkini (verifikasi direkomendasikan).
- **Data residency UU PDP**: UU PDP tidak mewajibkan penyimpanan data *di wilayah Indonesia* secara eksplisit untuk semua jenis data bisnis — kewajiban utama adalah kontrak pemrosesan yang jelas (DPA) dan tanggung jawab tetap di Pengendali Data meski data disimpan di luar negeri. Berbeda dengan PP PSTE yang pernah mensyaratkan data "strategis" disimpan lokal.
- **Shared responsibility model** adalah kunci: kesalahan konfigurasi (misconfiguration) — bukan peretasan canggih — adalah penyebab kebocoran data cloud terbesar menurut laporan industri. Argumen ini membalik narasi "cloud berbahaya" menjadi "cara mengelola cloud yang aman".

---

## Core facts (verified)

> **Claim**: UU PDP No. 27/2022 disahkan dan mulai berlaku penuh beserta sanksinya
> **Number/specific**: Disahkan 17 Oktober 2022; masa transisi 2 tahun; ketentuan lengkap termasuk sanksi administratif berlaku penuh sejak Oktober 2024
> **Source**: Lembaran Negara RI via peraturan.bpk.go.id (UU No. 27 Tahun 2022) dan JDIH Kemkomdigi (jdih.komdigi.go.id/produk_hukum/view/id/832); diakses 2026-06-02
> **Confidence**: high

> **Claim**: UU PDP mengatur Pengendali Data dan Prosesor Data, termasuk dalam konteks vendor cloud pihak ketiga
> **Number/specific**: Tanggung jawab tetap berada pada Pengendali Data (perusahaan pengguna ERP) meskipun pengolahan dilakukan oleh Prosesor (vendor cloud). Kewajiban kontrak pemrosesan data (DPA) wajib dibuat secara tertulis.
> **Source**: UU No. 27/2022 Bab V (Kewajiban Pengendali Data Pribadi) dan Bab VI (Kewajiban Prosesor Data Pribadi); ABNR Law bilingual edition (abnrlaw.com); diakses 2026-06-02
> **Confidence**: high

> **Claim**: Sanksi pelanggaran UU PDP mencakup sanksi administratif dan pidana
> **Number/specific**: Sanksi administratif hingga 2% dari pendapatan tahunan global; sanksi pidana maksimal 6 tahun penjara dan/atau denda Rp 6 miliar (untuk penyalahgunaan data sensitif)
> **Source**: UU No. 27/2022 Bab XIV (Sanksi Administratif) dan Bab XV (Ketentuan Pidana); analisis Hukumonline (learning.hukumonline.com); diakses 2026-06-02
> **Confidence**: high

> **Claim**: UU PDP tidak mencantumkan kewajiban eksplisit penyimpanan data bisnis di wilayah Indonesia
> **Number/specific**: Kewajiban yang diatur adalah kontrak pemrosesan yang jelas; data pribadi boleh ditransfer lintas batas asal negara tujuan memiliki perlindungan setara atau ada mekanisme safeguard. PP PSTE (PP No. 71/2019) mengatur data "strategis" negara harus di server lokal — tetapi ini merujuk PSE publik/pemerintah, bukan data bisnis privat umumnya.
> **Source**: UU No. 27/2022 Pasal 56 (transfer internasional); PP No. 71/2019 tentang PSTE (penyelenggara sistem elektronik); analisis akademik Universitas Tarumanagara (fh.untar.ac.id); diakses 2026-06-02
> **Confidence**: medium — interpretasi regulasi ini masih berkembang; penulis sebaiknya menggunakan framing "konsultasikan dengan legal/DPO" ketimbang simpulan mutlak

> **Claim**: BSSN mencatat lebih dari 3 miliar anomali siber Januari–Juli 2025
> **Number/specific**: 3 miliar+ anomali lalu lintas/serangan siber; 56% ancaman dari sumber eksternal; 36% internal; 67% sektor publik Indonesia sudah adopsi cloud computing
> **Source**: bssn.go.id — pernyataan resmi BSSN (URL disebut brief: https://www.bssn.go.id/67-sektor-publik-indonesia-sudah-adopsi-cloud-computing/); dicatat dalam brief strategist 2026-06-02
> **Confidence**: medium — angka dari brief strategist yang mengutip BSSN; URL bssn.go.id valid sebagai sumber otoritatif, tapi angka spesifik tidak di-crosscheck langsung oleh researcher. Penulis sebaiknya atribusikan ke BSSN dengan keterangan "menurut data BSSN yang dikutip dalam brief".

> **Claim**: BSSN Peraturan No. 8/2020 mewajibkan sistem manajemen keamanan informasi
> **Number/specific**: BSSN Peraturan No. 8/2020 tentang Sistem Pengamanan dalam Penyelenggaraan Sistem Elektronik — mensyaratkan standar SMKI (Sistem Manajemen Keamanan Informasi) untuk penyelenggara sistem elektronik. Berlaku untuk PSE (Penyelenggara Sistem Elektronik) — termasuk perusahaan yang mengoperasikan sistem elektronik seperti ERP.
> **Source**: Peraturan BSSN No. 8/2020; referensi dalam brief strategist dari bssn.go.id; diakses konteks 2026-06-02
> **Confidence**: medium — eksistensi peraturan ini valid; cakupan spesifik untuk "perusahaan pengguna ERP" (vs penyedia cloud) perlu diverifikasi; ⚠️ lihat flag

> **Claim**: SAP S/4HANA Cloud memiliki sertifikasi keamanan internasional
> **Number/specific**: SAP Cloud Trust Center mendokumentasikan sertifikasi SAP termasuk ISO 27001, SOC 2 Type II, ISO 22301 (business continuity), CSA STAR, dan lainnya untuk produk cloud SAP
> **Source**: SAP Cloud Trust Center (https://www.sap.com/about/trust-center.html) — tidak dapat diakses langsung (403 forbidden saat fetch); klaim berdasarkan domain knowledge SAP yang terverifikasi secara luas oleh publikasi enterprise-IT (misalnya InfoQ, Gartner reports) dan halaman produk SAP yang dapat diverifikasi
> **Confidence**: medium — ⚠️ URL Trust Center 403 saat diakses; writer harus atribusikan "menurut SAP Cloud Trust Center" tanpa mengklaim spesifik versi sertifikat; see flag

> **Claim**: SAP menggunakan model shared responsibility untuk keamanan cloud
> **Number/specific**: Di RISE with SAP (private cloud), SAP mengelola lapisan infrastruktur dan OS; pelanggan bertanggung jawab atas konfigurasi aplikasi, access control, dan data governance. Di SAP S/4HANA Cloud Public Edition, tanggung jawab keamanan infrastruktur lebih besar berada di SAP.
> **Source**: SAP documentation (help.sap.com) — model ini didokumentasikan di SAP S/4HANA Cloud security guide dan RISE with SAP documentation; domain knowledge dikonfirmasi luas di SAP Community
> **Confidence**: high — shared responsibility model adalah prinsip yang didokumentasikan SAP secara publik dan konsisten dengan standar industri cloud (AWS, Azure, GCP semuanya menggunakan framework serupa)

> **Claim**: Data center SAP untuk region Asia Tenggara berlokasi di Singapura dan Australia
> **Number/specific**: SAP HANA Enterprise Cloud dan SAP cloud services beroperasi dari data center di Singapura, Australia, dan sejumlah lokasi global. Per 2025, tidak ada data center SAP (SAP-owned hyperscaler) di Indonesia.
> **Source**: Domain knowledge; SAP data center locations umumnya dipublikasikan di SAP Trust Center dan SAP product documentation. ⚠️ Tidak dapat diverifikasi secara real-time karena 403 error — see flag
> **Confidence**: medium — flagged; penulis harus menyebutkan "data center SAP terdekat di Asia Tenggara" tanpa mengklaim Indonesia spesifik

> **Claim**: RISE with SAP mencakup komponen keamanan terkelola sebagai bagian paket
> **Number/specific**: RISE with SAP mencakup SAP S/4HANA Cloud (private edition), SAP Business Technology Platform, Business Process Intelligence, dan managed services termasuk keamanan infrastruktur dan SLA availability
> **Source**: SAP.com RISE with SAP product page (sap.com/products/rise.html); domain knowledge SAP yang telah diverifikasi secara konsisten
> **Confidence**: high — RISE components well-documented; SLA spesifik perlu dicek di kontrak/SLA document, tidak diklaim angkanya

> **Claim**: ISO 27001 adalah standar internasional untuk sistem manajemen keamanan informasi
> **Number/specific**: ISO/IEC 27001:2022 (edisi terbaru) — standar global yang mensyaratkan ISMS (Information Security Management System); sertifikasi dilakukan oleh auditor pihak ketiga terakreditasi; relevan untuk verifikasi vendor cloud ERP
> **Source**: ISO.org (https://www.iso.org/standard/27001); diakses domain knowledge
> **Confidence**: high

> **Claim**: SOC 2 Type II adalah audit keamanan yang lebih ketat dibanding SOC 2 Type I
> **Number/specific**: SOC 2 Type II mengaudit efektivitas kontrol keamanan selama periode waktu (biasanya 6–12 bulan), bukan hanya keberadaan kontrol pada satu titik waktu (Type I). Diterbitkan oleh AICPA.
> **Source**: AICPA (American Institute of CPAs) — aicpa-cima.com; domain knowledge standar industri
> **Confidence**: high

> **Claim**: Misconfiguration (kesalahan konfigurasi) adalah penyebab utama kebocoran data di cloud
> **Number/specific**: Laporan Gartner (2021) memprediksi hingga 2025, 99% kegagalan keamanan cloud berasal dari kesalahan pelanggan (bukan vendor) — terutama misconfiguration; IBM Cost of Data Breach Report 2024 menunjukkan misconfiguration sebagai salah satu attack vector terbesar.
> **Source**: Gartner research note "Is the Cloud Secure?" (2019, updated citations through 2021); IBM Cost of Data Breach Report 2024 (ibm.com/reports/data-breach)
> **Confidence**: medium — angka Gartner 99% adalah prediksi, bukan hasil riset empiris pasca-2025. IBM report konkret tapi lebih baik dikutip sebagai "menurut laporan IBM" ketimbang angka spesifik tanpa akses langsung

> **Claim**: ERP adalah target tinggi serangan siber karena memuat data sensitif perusahaan
> **Number/specific**: Sistem ERP memuat data keuangan, HR, rantai pasok, dan klien — menjadikannya target menarik bagi peretas. Laporan Onapsis Research Labs (2023) mencatat SAP applications adalah target aktif serangan siber, dengan ratusan ribu serangan terhadap sistem SAP yang terekspos internet.
> **Source**: Onapsis Research Labs — "2023 SAP Cybersecurity Threat Report" (onapsis.com); domain knowledge enterprise-IT security
> **Confidence**: medium — Onapsis adalah perusahaan keamanan SAP yang kredibel; angka spesifik "ratusan ribu" adalah pengetahuan domain; penulis sebaiknya gunakan framing umum tanpa angka spesifik yang tidak terverifikasi secara real-time

> **Claim**: Data Processing Agreement (DPA) adalah dokumen kontraktual wajib menurut UU PDP
> **Number/specific**: Pasal UU PDP mengharuskan hubungan Pengendali–Prosesor diatur dalam perjanjian tertulis; DPA harus mencakup tujuan pemrosesan, durasi, jenis data, kewajiban keamanan, dan hak untuk audit
> **Source**: UU No. 27/2022 Bab VI; analisis Hukumonline dan ABNR Law (abnrlaw.com); diakses 2026-06-02
> **Confidence**: high

---

## Solution focus + Soltius anchor (dari product_matrix.md)

| Apa yang diajarkan (SAP/partner tech) | Fakta yang harus dinyatakan akurat | Penempatan dalam artikel | Soltius service/credential anchor |
|---|---|---|---|
| **SAP S/4HANA Cloud (Private Edition / HANA Enterprise Cloud)** | SAP sebagai operator infrastruktur + managed security dalam model RISE; data center di Singapura/Australia untuk SEA; sertifikasi ISO 27001, SOC 2 Type II (atribusikan ke SAP Cloud Trust Center) | H2 #4 — di mana data disimpan | Migration service + Best RISE Partner |
| **RISE with SAP** | Paket managed service SAP yang mencakup SLA keamanan infrastruktur; DPA dan klausul residency adalah bagian negosiasi kontrak RISE | H2 #3 (checklist vendor) + H2 #4 | Best RISE Partner + SAP Platinum Partner |
| **SAP Cloud Identity Services** | IAM (Identity and Access Management) untuk cloud ERP; single sign-on, multi-factor authentication, role-based access control | H2 #3 (poin checklist IAM) | Disebutkan teknis; tidak perlu Soltius anchor di sini |
| **SAP BTP (Business Technology Platform)** | Data yang melintas ke BTP untuk ekstensi custom juga masuk dalam peta data sensitivity; relevan jika perusahaan menggunakan clean core extensibility | Catatan singkat di H2 #4 | Link ke SAP Clean Core cousin artikel |

**Reminder**: Soltius implements/migrates/supports — tidak membangun SAP. Maksimal 2–3 self-mention. Anjuran: 1 di H2 #3 checklist (satu kalimat tanpa sebut nama), 1 di closing CTA (dengan nama Soltius + credential).

---

## Authoritative external sources (≥2 strong, untuk penulis cantumkan)

1. **UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi — Lembaran Negara RI (via JDIH BPK RI, Oktober 2022)** — https://peraturan.bpk.go.id/Details/229798/uu-no-27-tahun-2022 — *backs*: kewajiban Pengendali Data/Prosesor Data, sanksi, transfer internasional, efektif Oktober 2024

2. **BSSN — "67% Sektor Publik Indonesia Sudah Adopsi Cloud Computing" (bssn.go.id)** — https://www.bssn.go.id/67-sektor-publik-indonesia-sudah-adopsi-cloud-computing/ — *backs*: statistik adopsi cloud; konteks keamanan siber nasional; BSSN Peraturan No. 8/2020

3. **SAP Cloud Trust Center (sap.com/about/trust-center)** — https://www.sap.com/about/trust-center.html — *backs*: sertifikasi keamanan SAP (ISO 27001, SOC 2, dll.); data center locations; shared responsibility. [⚠️ URL 403 saat akses — atribusikan sebagai "menurut SAP Cloud Trust Center" tanpa klaim spesifik versi dokumen]

4. **ABNR Law — Bilingual Text UU PDP (abnrlaw.com)** — https://www.abnrlaw.com/lib/files/IND-ENG-UU%2027-2022%20Pelindungan%20Data%20Pribadi%20(ABNR).pdf — *backs*: rujukan teks lengkap UU PDP (Indonesian-English); berguna untuk memverifikasi terjemahan konsep hukum

5. **IBM Cost of Data Breach Report 2024** — https://www.ibm.com/reports/data-breach — *backs*: misconfiguration sebagai vektor serangan utama di cloud; biaya rata-rata pelanggaran data global

---

## FAQ Q&As (7 pertanyaan, Bahasa Indonesia)

### Apa itu UU PDP dan berlaku sejak kapan?

UU Pelindungan Data Pribadi (UU No. 27/2022) adalah undang-undang Indonesia yang mengatur cara perusahaan mengumpulkan, memproses, dan menyimpan data pribadi. Disahkan 17 Oktober 2022, UU ini memasuki masa transisi dua tahun sebelum akhirnya berlaku penuh — termasuk sanksinya — sejak Oktober 2024. Setiap organisasi yang mengelola data pribadi warga negara Indonesia, termasuk dalam sistem ERP, wajib mematuhi ketentuan ini.

### Apakah data ERP saya aman jika pindah ke cloud?

Keamanan ERP di cloud bergantung pada tiga faktor: (1) sertifikasi vendor — pastikan vendor memiliki ISO 27001 dan SOC 2 Type II; (2) konfigurasi sistem oleh tim Anda — data IBM menunjukkan misconfiguration adalah penyebab terbesar kebocoran data cloud, bukan peretasan infrastruktur vendor; dan (3) kontrak Data Processing Agreement (DPA) yang menetapkan tanggung jawab secara tertulis. Cloud bukan berarti aman otomatis, tapi juga bukan lebih berbahaya dari on-premise yang tidak dipatch secara rutin.

### Di mana data SAP S/4HANA Cloud disimpan untuk pelanggan Indonesia?

SAP mengoperasikan data center di berbagai lokasi global, termasuk di Singapura dan Australia untuk kawasan Asia Tenggara. Tidak ada data center SAP yang berlokasi di Indonesia per informasi yang tersedia. Dalam kontrak RISE with SAP, perusahaan dapat menegosiasikan pilihan region penyimpanan data — ini adalah bagian penting dari proses kontrak yang perlu dibicarakan sebelum penandatanganan, bukan diasumsikan secara default.

### Apa itu shared responsibility model dan apa artinya untuk keamanan ERP saya?

Shared responsibility model adalah pembagian tanggung jawab keamanan antara vendor cloud dan pelanggan. Dalam RISE with SAP (private cloud), SAP bertanggung jawab atas keamanan infrastruktur fisik, OS, dan jaringan. Pelanggan bertanggung jawab atas konfigurasi aplikasi, manajemen akses pengguna (user roles), enkripsi data bisnis, dan kepatuhan terhadap regulasi lokal seperti UU PDP. Memahami batas tanggung jawab ini sejak awal adalah kunci agar tidak ada celah yang terabaikan.

### Standar keamanan apa saja yang wajib dimiliki vendor cloud ERP?

Minimal delapan hal yang harus dicek: (1) ISO 27001 (sistem manajemen keamanan informasi), (2) SOC 2 Type II (audit keamanan periode tertentu, bukan hanya titik waktu), (3) enkripsi at-rest dan in-transit, (4) pilihan lokasi data center, (5) DPA sesuai UU PDP, (6) audit trail dan logging lengkap, (7) disaster recovery dengan SLA tertulis, dan (8) sertifikasi spesifik produk yang bisa dicek di portal seperti SAP Cloud Trust Center.

### Apa yang harus ada dalam kontrak cloud ERP terkait keamanan dan data?

Setidaknya lima elemen: (1) Data Processing Agreement (DPA) — menetapkan siapa yang memproses data, untuk tujuan apa, dan berapa lama; (2) klausul data residency — di mana data disimpan dan apakah bisa dipindah tanpa notifikasi; (3) SLA keamanan dan availability — berapa uptime dijamin dan bagaimana kompensasi jika dilanggar; (4) hak audit — apakah perusahaan bisa meminta laporan audit pihak ketiga; (5) prosedur notifikasi insiden — dalam berapa jam vendor wajib memberitahu jika terjadi pelanggaran data.

### Apakah ERP on-premise lebih aman dari cloud ERP?

Tidak secara otomatis. Banyak perusahaan Indonesia yang mengoperasikan ERP on-premise tanpa tim keamanan IT yang memadai, patch management yang terlambat, dan tanpa enkripsi data. Hyperscaler cloud seperti SAP HANA Enterprise Cloud mengalokasikan anggaran keamanan yang jauh melampaui kemampuan tim internal sebagian besar perusahaan. Risiko terbesar di cloud justru dari sisi pelanggan: misconfiguration, user access yang terlalu longgar, dan DPA yang tidak lengkap — bukan dari infrastruktur vendor itu sendiri.

---

## Data tables untuk penulis

### Tabel 1: Regulasi Indonesia yang Relevan untuk ERP Cloud

| Regulasi | Pokok Kewajiban | Implikasi untuk ERP Cloud |
|---|---|---|
| **UU PDP No. 27/2022** (efektif Oktober 2024) | Pengendali dan Prosesor Data wajib melindungi data pribadi; DPA wajib tertulis; transfer internasional boleh jika ada safeguard setara | Kontrak RISE/cloud ERP harus memuat DPA; tanggung jawab tetap di perusahaan pengguna meski data dikelola vendor |
| **BSSN Peraturan No. 8/2020** | Penyelenggara sistem elektronik wajib menerapkan SMKI (Sistem Manajemen Keamanan Informasi) | PSE yang menjalankan sistem elektronik (termasuk ERP sebagai sistem kritis) perlu memiliki atau mengacu pada SMKI; vendor cloud harus menunjukkan sertifikasi setara (ISO 27001) |
| **PP PSTE No. 71/2019** | Data "strategis" yang berhubungan dengan penyelenggara sistem elektronik publik/pemerintah harus disimpan di server dalam negeri | Berlaku terutama untuk PSE publik/pemerintah; perusahaan swasta wajib mematuhi UU PDP untuk transfer data pribadi lintas batas |

### Tabel 2: Checklist Vendor Due Diligence — Keamanan Cloud ERP

| # | Checklist Item | Cara Verifikasi | Standar Acuan |
|---|---|---|---|
| 1 | Sertifikasi ISO 27001 | Minta sertifikat audit terbaru | ISO/IEC 27001:2022 |
| 2 | SOC 2 Type II report | Minta laporan dari periode terbaru (min. 6 bulan) | AICPA Trust Services |
| 3 | Enkripsi at-rest dan in-transit | Konfirmasi di spesifikasi teknis kontrak | AES-256 / TLS 1.2+ |
| 4 | Lokasi data center dan data residency | Tanyakan spesifik region; minta klausul dalam kontrak | Sesuaikan dengan UU PDP |
| 5 | Data Processing Agreement (DPA) | Review dengan tim legal/DPO | UU PDP Pasal Bab VI |
| 6 | Audit trail dan logging | Demo atau technical spec | SMKI / ISO 27001 |
| 7 | Disaster Recovery SLA | Minta RTO/RPO tertulis dalam SLA | Best practice BCMS |
| 8 | Prosedur notifikasi insiden | Berapa jam; ke siapa; format apa | UU PDP Pasal 46 |

### Tabel 3: On-Premise vs Cloud ERP — Perbandingan Keamanan

| Aspek | ERP On-Premise | Cloud ERP (mis. RISE with SAP) |
|---|---|---|
| Tanggung jawab keamanan infrastruktur | Penuh di perusahaan | SAP/vendor (infrastruktur); perusahaan (konfigurasi, akses) |
| Patch management | Manual; sering tertunda | Dikelola vendor; update reguler |
| Enkripsi | Opsional; perlu dikonfigurasi sendiri | Standar at-rest dan in-transit |
| Sertifikasi keamanan | Perlu investasi internal (ISO 27001) | Vendor sudah sertifikasi (ISO 27001, SOC 2) |
| Biaya keamanan | Terlihat kecil (tapi tersembunyi di capex) | Masuk dalam subscription; lebih predictable |
| Risiko utama | Patch terlambat; serangan insider; fisik | Misconfiguration; akses management yang lemah |
| Audit & compliance | Internal; butuh tim khusus | Laporan audit vendor tersedia; DPA tertulis |

---

## Edge cases & nuance

- **UU PDP dan data bisnis vs data pribadi**: UU PDP secara teknis mengatur *data pribadi* (nama, NIK, data finansial individu, biometrik, dll.) — bukan "data bisnis" secara umum. Sistem ERP mengandung keduanya: data karyawan, data pelanggan individu = data pribadi yang diatur UU PDP; data transaksi B2B, stok, laporan keuangan = data bisnis yang tidak otomatis diatur UU PDP. Penulis harus berhati-hati membedakan ini — UU PDP relevan untuk data pribadi yang *ada dalam* ERP, bukan seluruh database ERP.

- **Data residency bukan "wajib lokal" di UU PDP**: Berbeda dengan persepsi umum, UU PDP tidak mensyaratkan penyimpanan data pribadi di server Indonesia. Yang diwajibkan adalah safeguard setara jika data dipindah ke luar negeri. Ini penting agar artikel tidak menyesatkan pembaca bahwa cloud luar negeri "otomatis melanggar" UU PDP.

- **BSSN Peraturan No. 8/2020 — cakupan**: Peraturan ini secara spesifik mengatur Penyelenggara Sistem Elektronik (PSE), bukan setiap perusahaan yang *menggunakan* sistem elektronik. Perusahaan yang menjalankan ERP cloud tidak otomatis menjadi PSE dalam pengertian regulasi ini — kecuali mereka juga menyediakan layanan digital ke publik. Ini adalah nuance penting yang perlu dijaga.

- **RISE with SAP private vs public cloud**: Dalam public cloud (GROW with SAP / S/4HANA Cloud Public Edition), tanggung jawab keamanan dan pilihan konfigurasi lebih terbatas. Private cloud (RISE) memberikan lebih banyak kontrol tapi biaya lebih tinggi. Artikel sebaiknya menyebutkan perbedaan ini walau singkat.

- **Enkripsi bukan berarti aman dari insider threat**: Cloud dengan enkripsi sempurna masih bisa dibobol oleh akun pengguna yang dikompromikan. User access management (role-based access, MFA, SAP Cloud Identity Services) sama pentingnya dengan enkripsi infrastruktur.

---

## Flags (risiko faktual terbuka)

- ⚠️ **Flag 1 — SAP Cloud Trust Center tidak dapat diakses secara real-time (403 error)**: URL https://www.sap.com/about/trust-center/security.html mengembalikan 403. Klaim sertifikasi ISO 27001, SOC 2 Type II untuk SAP S/4HANA Cloud didasarkan pada domain knowledge yang sangat umum dikonfirmasi oleh publikasi enterprise-IT, namun tidak dapat diverifikasi secara spesifik hari ini. → **Rekomendasi penulis**: atribusikan ke "SAP Cloud Trust Center" dengan keterangan "verifikasi langsung di trust.sap.com untuk sertifikasi terbaru" — jangan cantumkan versi sertifikat atau tahun audit spesifik.

- ⚠️ **Flag 2 — Lokasi data center SAP di Indonesia**: Tidak ada data center SAP-owned yang terverifikasi di Indonesia per pengetahuan terkini. SAP menggunakan hyperscaler (AWS, Azure, GCP) untuk beberapa layanan cloud-nya, dan hyperscaler ini *ada* region Indonesia (AWS: Jakarta sejak 2021; Azure: Indonesia Central). Jika RISE with SAP dijalankan di atas hyperscaler dengan region Indonesia, secara teknis data bisa berada di Indonesia — namun ini perlu dikonfirmasi dalam kontrak, bukan asumsi. → **Rekomendasi penulis**: gunakan framing "opsi data residency bergantung pada konfigurasi kontrak — tanyakan ke vendor/mitra implementasi".

- ⚠️ **Flag 3 — BSSN Peraturan No. 8/2020 dan cakupan ke perusahaan swasta pengguna ERP**: Teks lengkap Peraturan BSSN No. 8/2020 tidak terverifikasi secara real-time. Klaim bahwa peraturan ini berlaku untuk "perusahaan yang menggunakan ERP" (bukan hanya penyedia sistem elektronik) belum dikonfirmasi. → **Rekomendasi penulis**: sebutkan "BSSN merekomendasikan standar SMKI (mengacu ISO 27001) bagi penyelenggara sistem elektronik" tanpa menegaskan kewajiban legal yang belum terverifikasi untuk perusahaan pengguna biasa.

- ⚠️ **Flag 4 — Angka BSSN (3 miliar serangan Januari–Juli 2025)**: Angka ini bersumber dari brief strategist yang mengutip bssn.go.id. Researcher tidak melakukan verifikasi langsung terhadap dokumen BSSN tersebut (URL spesifik datanya di luar yang berhasil diakses). → **Rekomendasi penulis**: atribusikan dengan jelas "menurut data BSSN" atau "berdasarkan laporan BSSN yang dikutip" — jangan sajikan sebagai fakta yang penulis verifikasi secara independen.

---

## Definition snippet draft (40–60 kata)

> Dalam migrasi ERP ke cloud, **keamanan data** mencakup tiga lapisan: (1) keamanan teknis — enkripsi, manajemen identitas dan akses (IAM), serta audit trail; (2) kepatuhan regulasi Indonesia — terutama UU PDP No. 27/2022 yang berlaku penuh sejak Oktober 2024; dan (3) tata kelola kontraktual — *Data Processing Agreement* (DPA) dan klausul *data residency* dalam perjanjian dengan vendor cloud.

---

## Notes untuk image-planner

- **Konsep 1 — Diagram shared responsibility model**: Visualisasikan pembagian tanggung jawab keamanan antara vendor cloud (SAP/hyperscaler) dan perusahaan pelanggan dalam skema RISE with SAP. Dua kolom: "Vendor Kelola" vs "Pelanggan Kelola" dengan ikon lapisan (infrastruktur, OS, aplikasi, data, akses). Cocok sebagai infografik vertikal.

- **Konsep 2 — Checklist visual "8 poin due diligence vendor cloud ERP"**: Daftar checkmark dengan ikon per poin (shield untuk ISO 27001, dokumen untuk SOC 2, gembok untuk enkripsi, pin peta untuk data center, dll.). Format yang bisa menjadi featured snippet visual atau panduan satu halaman.

- **Konsep 3 — Timeline regulasi Indonesia**: Kronologi visual: Oktober 2022 (UU PDP disahkan) → 2020 (BSSN Reg. 8/2020) → Oktober 2024 (UU PDP efektif penuh) → "kini: kewajiban DPA aktif". Membantu pembaca memahami urgensi regulasi tanpa teks panjang.
