---
brief_id: "data-warehouse-solutions-01"
researcher_run_date: "2026-08-11"
sources_cited: 11
flags: 5
---

# Research Dossier: Keamanan Data Warehouse Cloud: Enkripsi, Akses, dan Audit

## TL;DR for the writer

- Angle-nya adalah **peta kontrol keamanan teknis** untuk CISO/security lead — bukan kepatuhan hukum (itu sudah dibahas di artikel governance UU PDP, 2026-06-05). Empat lapisan: **data (enkripsi), akses (RBAC + row-level), jaringan (secure connectivity), dan audit**. Semua fakta SAP di bawah sudah diverifikasi ke SAP Help Portal (versi dokumentasi 2026).
- Fakta paling kuat & bisa dikutip langsung: di **SAP Datasphere**, *data, metadata, log, dan backup* semuanya dienkripsi at-rest dengan **customer-specific encryption key**; fondasinya **SAP HANA Cloud** memakai algoritma **AES-256-CBC** untuk data volume encryption. Opsi lebih lanjut: **Customer-Managed Key (CMK) via SAP Key Management Service** — di mana **SAP tidak memiliki akses ke kunci pelanggan**.
- Kontrol akses baris = **Data Access Controls (DAC)** dengan tiga tipe: **Single Values**, **Operator and Values** (mendukung Boolean AND/OR), dan **Hierarchy**. Masking sensitif = **native data masking** SAP HANA Cloud yang hanya mengubah tampilan di view (data mentah tak berubah), dilewati hanya oleh pemegang privilege **UNMASKED**.
- Angle "salah kaprah" didukung angka eksternal kelas-A: **Gartner** memproyeksikan hingga 2025 **99% kegagalan keamanan cloud adalah kesalahan pelanggan** (mayoritas salah konfigurasi); **IBM Cost of a Data Breach 2025** menaruh rata-rata biaya global breach di **USD 4,44 juta**. Ini bukti bahwa "sudah di cloud ≠ sudah aman" — default harus dikonfigurasi.
- Shared responsibility: **SAP mengamankan infrastruktur & platform; pelanggan mengonfigurasi user access, data access (role/RBAC), dan threat detection**. Ini garis yang paling sering disalahpahami — tekankan.
- Soltius anchor (closing, maks 2–3 sebutan): **Data and AI Consulting** + pengalaman implementasi SAP Datasphere/HANA Cloud sebagai **SAP Platinum Partner via United VARs**. Framing: Soltius **mengonfigurasi & mengaudit** kontrol ini di lapangan, **bukan membuat** produknya.

## Core facts (verified)

> **Claim**: Di SAP Datasphere, seluruh data, metadata, log, dan backup pelanggan dienkripsi saat disimpan (at-rest).
> **Number/specific**: "customers' data, metadata, logs and backups are all encrypted at rest"; tiap database yang menyimpan data pelanggan (termasuk SAP HANA Cloud dan Data Lake — relational engine + object store) dienkripsi dengan satu customer-specific encryption key.
> **Source**: SAP Help Portal — "Data Encryption at Rest" (SAP Datasphere), https://help.sap.com/docs/SAP_DATASPHERE/0c3780ad05fd417fa27b98418535debd/88565a3dfdc34108a9c401a4d44a0fde.html — diakses 2026-08-11
> **Confidence**: high

> **Claim**: Standar enkripsi at-rest pada lapisan SAP HANA Cloud/HANA adalah AES-256.
> **Number/specific**: "all pages that reside in the data area on disk are encrypted using the AES-256-CBC algorithm"; data volume dan redo log dapat dienkripsi terpisah, disarankan keduanya aktif untuk proteksi penuh persistence layer.
> **Source**: SAP Help Portal — "Data and Log Volume Encryption" (SAP HANA Platform), https://help.sap.com/docs/SAP_HANA_PLATFORM/b3ee5778bc2e4a089d3299b82ec762a7/dc01f36fbb5710148b668201a6e95cf2.html — diakses 2026-08-11
> **Confidence**: high — catatan: AES-256-CBC terdokumentasi pada dokumentasi HANA/HANA Cloud (mesin di balik Datasphere), bukan tersurat di halaman Datasphere. Atribusikan ke lapisan HANA Cloud.

> **Claim**: Data juga dienkripsi in-transit dengan TLS.
> **Number/specific**: "All communication between Business Data Cloud components (including Datasphere) and connected SAP services is encrypted using TLS 1.2 or higher"; Web UI, CLI, dan API access diproteksi TLS/SSL; koneksi tak terenkripsi (mis. JDBC/ODBC ke SAP HANA) ditolak.
> **Source**: SAP Help Portal — Manage Certificates / Security Guide SAP Datasphere (Document Version 2026.7); community.sap.com "SAP Business Data Cloud: Cybersecurity, Compliance and Data Protection", https://community.sap.com/t5/technology-blog-posts-by-sap/sap-business-data-cloud-cybersecurity-compliance-and-data-protection/ba-p/14175605 — diakses 2026-08-11
> **Confidence**: high

> **Claim**: Pelanggan dapat memegang kunci sendiri melalui Customer-Managed Key (CMK).
> **Number/specific**: "If you need to control the access to your SAP Datasphere database or the object store, you can create a Customer-Managed Key (CMK) using SAP Key Management Service (KMS) and ask SAP to encrypt the database or the object store with the new key."
> **Source**: SAP Help Portal — "Data Encryption at Rest" (SAP Datasphere), URL di atas — diakses 2026-08-11
> **Confidence**: high

> **Claim**: Dengan CMK/KMS, SAP tidak memiliki akses ke kunci pelanggan (segregation of duties).
> **Number/specific**: "SAP does not have access to customer keys"; segregasi kunci per aplikasi; SAP Data Custodian KMS bersertifikat FIPS 140-2 Level 3; integrasi native dengan SAP HANA sejak HANA 2.0 SP05.
> **Source**: SAP Community (by SAP) — "Customer Controlled Key Management Services with SAP Data Custodian", https://community.sap.com/t5/technology-blog-posts-by-sap/customer-controlled-key-management-services-with-sap-data-custodian/ba-p/13487456 — diakses 2026-08-11
> **Confidence**: high

> **Claim**: Backup tenant SAP Datasphere terenkripsi dan dilakukan berkala.
> **Number/specific**: backup dilakukan tiap interval 15 menit dengan Recovery Point Objective (RPO) 15 menit; "All backups are encrypted and kept internally as they are exclusively for SAP usage."
> **Source**: SAP Help Portal / SAP KBA 3692764 "FAQ about SAP Datasphere's data and metadata backups"; "Data Encryption at Rest" (SAP Datasphere) — diakses 2026-08-11
> **Confidence**: high

> **Claim**: Kontrol akses baris (row-level security) di SAP Datasphere diterapkan lewat Data Access Controls (DAC).
> **Number/specific**: DAC membatasi baris yang bisa dilihat user pada view tertentu di dalam sebuah Space; tersedia tiga tipe kriteria: **Single Values**, **Operator and Values**, dan **Hierarchy**.
> **Source**: SAP Help Portal — "Securing Data with Data Access Controls" (SAP Datasphere), https://help.sap.com/docs/SAP_DATASPHERE/be5967d099974c69b77f4549425ca4c0/a032e51c730147c7a1fcac125b4cfe14.html — diakses 2026-08-11
> **Confidence**: high

> **Claim**: Tipe DAC "Operator and Values" mendukung kombinasi Boolean AND/OR untuk skenario kompleks.
> **Number/specific**: setiap user hanya melihat record yang memenuhi pasangan operator-value yang diizinkan; mendukung operator EQ, NE, GT, GE, LT, LE, BT (BETWEEN), CP (LIKE), IS NULL, NOT NULL, ALL; "supporting Boolean Operators… reduction of administration effort… more complex scenarios… with regards to row-level security."
> **Source**: SAP Community (by SAP) — "Introducing new type of Data Access Control 'Operator and Value' for SAP Datasphere", https://community.sap.com/t5/technology-blog-posts-by-sap/introducing-new-type-of-data-access-control-quot-operator-and-value-quot/ba-p/13597594; SAP Help "Create an 'Operator and Values' Data Access Control" — diakses 2026-08-11
> **Confidence**: high

> **Claim**: SAP HANA Cloud punya native data masking yang menyembunyikan data tanpa mengubah data aslinya.
> **Number/specific**: "changes how data appears in views and does not modify the underlying data"; ekspresi mask berupa konstanta (mis. `XXX-XXX-XXX`) atau ekspresi SQL; data ditampilkan ter-mask kecuali user punya privilege **UNMASKED**; kalkulasi tetap bisa berjalan atas data yang ter-mask.
> **Source**: SAP Help Portal — "Data Masking" (SAP HANA Cloud, SAP HANA Database Security Guide), https://help.sap.com/docs/hana-cloud-database/sap-hana-cloud-sap-hana-database-security-guide/example-masking-data-with-default-mask-mode; SAP Learning "Masking Sensitive Data" — diakses 2026-08-11
> **Confidence**: high

> **Claim**: SAP HANA Cloud juga mendukung data anonymization untuk analitik yang menjaga privasi.
> **Number/specific**: anonymization memungkinkan analisis data sambil melindungi privasi individu via calculation view atau SQL; diperkenalkan sejak SAP HANA 2.0 SPS 02 (2018) dan kini tersedia untuk SAP HANA Cloud.
> **Source**: SAP Community (by SAP) — "Getting Started with SAP HANA Cloud | Security, Data Masking, and Anonymization", https://community.sap.com/t5/technology-blog-posts-by-sap/getting-started-with-sap-hana-cloud-security-data-masking-and-anonymization/ba-p/13441141 — diakses 2026-08-11
> **Confidence**: high

> **Claim**: Konektivitas aman ke sistem on-premise memakai SAP Cloud Connector (bukan membuka jaringan internal).
> **Number/specific**: Cloud Connector berfungsi sebagai reverse invoke proxy, memberi kontrol granular atas sistem on-prem yang boleh diakses cloud, audit logging inbound traffic, dan tunnel terenkripsi TLS; tidak mengekspos seluruh jaringan di balik firewall.
> **Source**: SAP Help Portal — "Set Up Cloud Connector in SAP Datasphere", https://help.sap.com/docs/SAP_DATASPHERE/9f804b8efa8043539289f42f372c4862/6de74f7731c54ce88f2883df8f8671a8.html; SAP Community "SAP Datasphere Integration with SAP S/4HANA: SAP Cloud Connector Setup Guide" — diakses 2026-08-11
> **Confidence**: high

> **Claim**: Audit logging di SAP Datasphere bersifat opt-in per Space dan punya retensi yang dapat diatur.
> **Number/specific**: audit log Read dan/atau Change diaktifkan per Space di tab Auditing; retensi default **30 hari**, minimum **7 hari**, maksimum **10.000 hari**; entri disimpan di audit log database SAP HANA Cloud dan bisa dipantau di System Monitor.
> **Source**: SAP Help Portal — "Logging Read and Change Actions for Audit" / "Enable Audit Logging" (SAP Datasphere), https://help.sap.com/docs/SAP_DATASPHERE/be5967d099974c69b77f4549425ca4c0/266553976e1c4db9aaa28a75e2308b77.html — diakses 2026-08-11
> **Confidence**: high

> **Claim**: Dalam shared responsibility model SAP, keamanan dibagi antara SAP dan pelanggan.
> **Number/specific**: SAP mengelola keamanan infrastruktur, platform, dan layanan cloud; pelanggan bertanggung jawab atas konfigurasi aplikasi & log, user access, data access, serta application threat detection & response ("configuring authentication, authorizations, and role-based access control").
> **Source**: SAP Community (by SAP) — "RISE with SAP: Shared Security Responsibility for SAP Cloud Services", https://community.sap.com/t5/technology-blog-posts-by-sap/rise-with-sap-shared-security-responsibility-for-sap-cloud-services/ba-p/13497110; sap.com "Shared responsibility model for SAP S/4HANA Cloud" — diakses 2026-08-11
> **Confidence**: high

> **Claim**: Mayoritas kegagalan keamanan cloud berakar pada kesalahan pelanggan, bukan penyedia.
> **Number/specific**: Gartner memproyeksikan "through 2025, 99% of cloud security failures will be the customer's fault" — mayoritas karena salah konfigurasi (open storage, izin IAM berlebih, konfigurasi jaringan rentan).
> **Source**: Prediksi Gartner (dipublikasikan 2019, horizon "hingga 2025"), dikutip luas industri keamanan — diakses 2026-08-11
> **Confidence**: medium — lihat Flags: ini prediksi lama (2019) yang kini melewati horizonnya; atribusikan sebagai "proyeksi Gartner" dan jangan sajikan sebagai statistik terukur terbaru.

> **Claim**: Biaya rata-rata pelanggaran data global tetap tinggi pada 2025.
> **Number/specific**: rata-rata global **USD 4,44 juta** (IBM Cost of a Data Breach 2025); rincian per lingkungan: public cloud **USD 4,18 juta**, private cloud **USD 4,68 juta**, multi-environment **USD 5,05 juta** (paling mahal). Di AS rata-rata mencapai rekor USD 10,22 juta.
> **Source**: IBM — "Cost of a Data Breach Report 2025", https://www.ibm.com/think/insights/data-matters/cost-of-a-data-breach — diakses 2026-08-11
> **Confidence**: high

## Solution focus + Soltius anchor (from product_matrix.md)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| Vendor-neutral: lapisan enkripsi (at-rest/in-transit), RBAC, row-level security, masking/anonymization, shared responsibility, audit trail | Definisikan dulu tanpa vendor; jelaskan at-rest vs in-transit, RBAC vs row-level, masking vs anonymization | H2 #1–#3 (body) | — |
| **SAP Datasphere** (illustration) | Enkripsi at-rest data+metadata+log+backup, customer-specific key; **CMK via SAP Key Management Service**; **Data Access Controls** (Single Values / Operator-Values AND-OR / Hierarchy); audit log opt-in per Space (retensi 7–10.000 hari) | H2 #2–#3, #5 | — |
| **SAP HANA Cloud** (fondasi Datasphere) | AES-256-CBC data volume encryption; native **data masking** (UNMASKED privilege) + **anonymization**; TLS 1.2+ in-transit; secure connectivity via **SAP Cloud Connector** | H2 #2, #3, #4 | — |
| Shared responsibility model | SAP amankan infrastruktur/platform; pelanggan konfigurasi role, akses data, koneksi, deteksi ancaman | H2 #4 (tabel) | — |
| **Soltius anchor** | Soltius **mengonfigurasi & mengaudit** kontrol ini di implementasi enterprise; **Data and AI Consulting**; **SAP Platinum Partner via United VARs** | **Closing CTA** + 1 aside mid-artikel opsional | **Data and AI Consulting** + pengalaman implementasi SAP Datasphere/HANA Cloud (SAP Platinum via United VARs) |

Reminder: Soltius **implements/migrates/supports** teknologi ini — **tidak membuatnya**. Maks 2–3 sebutan Soltius. Aside mid-artikel yang disetujui brief: "di lapangan, kontrol yang paling sering lupa diaktifkan adalah audit log dan row-level access" (pengalaman implementasi — bukan klaim numerik).

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **SAP Help Portal — "Data Encryption at Rest" (SAP Datasphere)** — https://help.sap.com/docs/SAP_DATASPHERE/0c3780ad05fd417fa27b98418535debd/88565a3dfdc34108a9c401a4d44a0fde.html — *backs*: data+metadata+log+backup dienkripsi at-rest dengan customer-specific key; opsi CMK via SAP Key Management Service.
2. **SAP Help Portal — "Securing Data with Data Access Controls" (SAP Datasphere)** — https://help.sap.com/docs/SAP_DATASPHERE/be5967d099974c69b77f4549425ca4c0/a032e51c730147c7a1fcac125b4cfe14.html — *backs*: row-level security via DAC; tipe Single Values / Operator-Values / Hierarchy.
3. **SAP Community (by SAP) — "RISE with SAP: Shared Security Responsibility for SAP Cloud Services"** — https://community.sap.com/t5/technology-blog-posts-by-sap/rise-with-sap-shared-security-responsibility-for-sap-cloud-services/ba-p/13497110 — *backs*: pembagian tanggung jawab SAP vs pelanggan.
4. **IBM — "Cost of a Data Breach Report 2025"** — https://www.ibm.com/think/insights/data-matters/cost-of-a-data-breach — *backs*: rata-rata biaya breach USD 4,44 juta; rincian per lingkungan cloud (untuk H2 #5 "salah kaprah").

Priority order terpenuhi: SAP official (utama) > IBM (tech-industry report kelas-A) > Gartner (prediksi, dengan caveat).

## FAQ Q&As (6 drafted, Bahasa Indonesia)

### Apakah data warehouse cloud lebih aman daripada on-premise?
Tidak otomatis — keamanannya bergantung pada konfigurasi, bukan lokasi. Penyedia seperti SAP mengamankan infrastruktur (enkripsi at-rest AES-256, TLS in-transit, backup terenkripsi), tetapi pelanggan tetap bertanggung jawab mengonfigurasi role, akses baris, dan audit. Gartner bahkan memproyeksikan mayoritas kegagalan keamanan cloud berakar pada kesalahan pelanggan, umumnya salah konfigurasi. Cloud memberi fondasi kuat; sisanya soal disiplin konfigurasi.

### Apa itu Customer-Managed Key (CMK) dan kapan perusahaan membutuhkannya?
CMK adalah kunci enkripsi yang dibuat dan dikendalikan pelanggan sendiri, bukan dikelola default oleh penyedia. Di SAP Datasphere, Anda dapat membuat CMK melalui SAP Key Management Service, lalu meminta SAP mengenkripsi database atau object store dengan kunci itu — dan SAP tidak memiliki akses ke kunci Anda. CMK relevan bila regulator, kebijakan internal, atau standar audit menuntut kontrol penuh dan pemisahan tugas atas kunci enkripsi.

### Bagaimana mencegah administrator atau analis melihat data sensitif tertentu?
Gunakan dua lapisan. Pertama, row-level security lewat Data Access Controls agar user hanya melihat baris yang diizinkan (mis. hanya data region-nya). Kedua, data masking SAP HANA Cloud yang menyembunyikan isi kolom sensitif (mis. nomor kartu jadi 1111-XXXX-XXXX-4444); data hanya terlihat utuh oleh pemegang privilege UNMASKED. Prinsipnya least privilege — akses diberikan seminimal yang dibutuhkan tugas.

### Apakah masking mengurangi kegunaan data untuk analitik?
Tidak signifikan bila memakai native data masking. Masking hanya mengubah tampilan data di view, bukan data yang tersimpan, sehingga database tetap bisa menjalankan kalkulasi atas data aslinya. Untuk kebutuhan analisis lintas populasi tanpa membuka identitas individu, SAP HANA Cloud juga menyediakan data anonymization — memungkinkan analisis statistik sambil melindungi privasi. Jadi keamanan dan kegunaan analitik bisa berjalan bersama.

### Berapa lama audit log data warehouse disimpan?
Bergantung konfigurasi Anda. Di SAP Datasphere, audit log untuk operasi Read maupun Change diaktifkan per Space, dan retensinya dapat diatur — default 30 hari, minimum 7 hari, hingga maksimum 10.000 hari. Perlu diingat audit log tidak aktif secara default; ini salah satu kontrol yang paling sering terlupa diaktifkan. Sesuaikan retensi dengan kebutuhan investigasi insiden dan kewajiban audit internal Anda.

### Apa bedanya keamanan data warehouse dan kepatuhan (misalnya UU PDP)?
Keamanan adalah kontrol teknis yang mencegah akses tidak sah — enkripsi, RBAC, row-level access, masking, isolasi jaringan, dan audit. Kepatuhan adalah pemenuhan kewajiban hukum atas data pribadi — dasar pemrosesan, retensi, hak subjek data, dan pelaporan. Keduanya beririsan (audit trail mendukung keduanya), tetapi berbeda fokus: keamanan menjawab "bagaimana melindungi", kepatuhan menjawab "apa yang diwajibkan hukum". Sistem bisa patuh secara dokumen namun tetap rentan bila kontrol teknis lemah.

## Data tables for the writer

### Enkripsi: At-Rest vs In-Transit (ilustrasi SAP Datasphere / HANA Cloud)
| Aspek | At-Rest | In-Transit |
|---|---|---|
| Yang dilindungi | Data, metadata, log, backup tersimpan di disk | Data saat berpindah antar komponen/koneksi |
| Mekanisme | AES-256-CBC (data volume), customer-specific key | TLS 1.2 atau lebih tinggi (Web UI, CLI, API) |
| Kepemilikan kunci | Default dikelola SAP; opsi CMK via SAP Key Management Service | Sertifikat/trust dikelola per koneksi |
| Catatan | Backup terenkripsi (interval 15 menit) | Koneksi tak terenkripsi (mis. JDBC/ODBC polos) ditolak |

### Tipe Data Access Control (row-level) di SAP Datasphere
| Tipe | Cara kerja | Kapan dipakai |
|---|---|---|
| Single Values | User dibatasi ke nilai persis pada kolom kriteria | Filter sederhana (mis. kode cabang) |
| Operator and Values | Pasangan operator-value dengan kombinasi Boolean AND/OR (EQ, GT, BT, LIKE, dst.) | Skenario kompleks; kurangi beban administrasi |
| Hierarchy | User melihat nilai yang diizinkan beserta seluruh turunannya | Struktur berjenjang (organisasi, wilayah) |

### Shared Responsibility: Batas Tanggung Jawab (SAP cloud)
| Area | SAP (penyedia) | Pelanggan (Anda) |
|---|---|---|
| Infrastruktur & platform fisik | ✅ Amankan & patch | — |
| Enkripsi at-rest/in-transit (mesin) | ✅ Sediakan & kelola default | Aktifkan opsi lanjutan (mis. CMK) |
| User & identity di dalam solusi | Kelola identity layanan SAP | ✅ Kelola user, autentikasi, otorisasi |
| Data access & RBAC/row-level | Sediakan mekanisme | ✅ Konfigurasi role, DAC, masking |
| Koneksi ke sistem lain (Cloud Connector) | Sediakan kanal aman | ✅ Tentukan sistem & scope yang diekspos |
| Audit log & deteksi ancaman | Sediakan kapabilitas | ✅ Aktifkan, atur retensi, pantau |

## Edge cases & nuance

- **"Sudah di cloud, berarti sudah aman" itu keliru.** Fondasi kuat ada di penyedia, tetapi kontrol yang paling menentukan (row-level access, masking, audit log, CMK) **harus dikonfigurasi pelanggan** dan banyak yang tidak aktif secara default. Ini inti H2 #5.
- **Audit log tidak menyala otomatis.** Di Datasphere ia opt-in per Space. Menganggapnya aktif adalah asumsi berbahaya saat terjadi insiden.
- **Masking ≠ anonymization.** Masking menyembunyikan tampilan kolom untuk user tak berwenang (reversibel bagi pemegang UNMASKED); anonymization mengubah data agar aman untuk analisis populasi tanpa mengidentifikasi individu. Jangan tukar istilah.
- **CMK menambah kontrol, juga tanggung jawab.** Memegang kunci sendiri berarti pelanggan menanggung tata kelola rotasi/pemulihan kunci; kehilangan kunci bisa berarti kehilangan akses data. Bukan sekadar "lebih aman otomatis".
- **Keamanan vs kepatuhan berbeda tetapi saling menopang** (lihat FAQ). Artikel ini sengaja fokus ke sisi teknis; sisi hukum UU PDP sudah dibahas di artikel governance 2026-06-05 — cukup tautkan, jangan diulang panjang.
- **RBAC vs row-level.** RBAC menentukan *fungsi/objek* apa yang boleh diakses; row-level (DAC) menentukan *baris data mana* yang terlihat. Keduanya komplementer, bukan pengganti.

## Flags (open factual risk)

- ⚠️ **Statistik Gartner "99% kegagalan keamanan cloud = kesalahan pelanggan"**: berasal dari prediksi Gartner 2019 dengan horizon "hingga 2025" yang kini sudah lewat. → Rekomendasi: sajikan sebagai "proyeksi Gartner" untuk menggambarkan pola kesalahan konfigurasi, **bukan** sebagai statistik terukur terbaru; jangan tulis "menurut data Gartner 2026".
- ⚠️ **AES-256-CBC**: terdokumentasi pada dokumentasi SAP HANA/HANA Cloud (mesin di balik Datasphere), bukan tersurat di halaman Datasphere. → Rekomendasi: atribusikan ke lapisan **SAP HANA Cloud**; untuk Datasphere cukup nyatakan "customer-specific encryption key" bila ingin persis mengikuti kata halaman Datasphere.
- ⚠️ **Penamaan produk kunci**: SAP memakai beberapa istilah bersinggungan — "SAP Key Management Service (KMS)", "SAP Data Custodian Key Management Service", dan pada HANA Cloud "Customer-Managed Keys (CMK)"/"Customer-Controlled Encryption Keys (CCEK)". → Rekomendasi: gunakan istilah brief "**Customer-Managed Key (CMK) via SAP Key Management Service**" (sesuai halaman Datasphere) dan hindari mencampur nama tanpa konteks.
- ⚠️ **Klaim sertifikasi (ISO 27001/SOC 2)**: brief mengingatkan jangan mengarang. Dossier ini **tidak** memverifikasi sertifikasi spesifik SAP Datasphere. → Rekomendasi: **jangan** menyebut nomor/nama sertifikasi tanpa sumber; boleh sebut FIPS 140-2 Level 3 hanya dalam konteks SAP Data Custodian KMS (sumber ada), bukan sebagai sertifikasi Datasphere umum.
- ⚠️ **Detail interval backup & RPO 15 menit / retensi audit 7–10.000 hari** dapat berubah seiring versi. → Rekomendasi: aman dikutip (dokumentasi 2026), tetapi frasakan sebagai "saat ini/berdasarkan dokumentasi SAP" agar tahan waktu.

## Definition snippet draft (54 words)

> Keamanan data warehouse cloud adalah kumpulan kontrol teknis yang melindungi data terpusat di cloud melalui empat lapisan: enkripsi (at-rest dan in-transit), kontrol akses (RBAC dan row-level security), keamanan jaringan (koneksi terisolasi), serta audit trail. Tujuannya memastikan hanya pihak berwenang yang dapat mengakses data, dengan pembagian tanggung jawab jelas antara penyedia cloud dan perusahaan.
