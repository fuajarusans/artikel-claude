---
brief_id: "sap-clean-core-01"
researcher_run_date: "2026-09-21"
sources_cited: 14
flags: 5
---

# Research Dossier: Clean Core sebagai Strategi Keamanan SAP — Kurangi Attack Surface, Percepat Patch

## TL;DR for the writer

- **Sudut keamanan valid dan dapat disumberkan.** Kode kustom (Z-code) adalah "sumber vulnerability tak-terdeteksi terbesar" di lanskap SAP; ABAP yang salah bisa menimpa authorization buffer dan diam-diam memberi hak setara SAP_ALL. Clean core mengurangi permukaan ini — tapi tidak menghapusnya.
- **Angka patch: gunakan data September 2026, bukan "28 notes Agustus" di brief.** SAP Security Patch Day September 2026 (Selasa kedua, 8 Sep 2026) = 19 security note baru + 14 update = 33 total; 4 kritis, termasuk satu CVSS 10.0. Volume bulanan berfluktuasi — kutip sebagai contoh, jangan sebagai konstanta.
- **Trade-off inti (angle jujur):** side-by-side extensibility di SAP BTP tidak menghapus attack surface, ia **memindahkannya** ke runtime web internet-facing → threat vector cloud-native (XSS, SSRF, broken object-level authorization). Karena ekstensi tersambung balik ke core lewat **SAP Cloud Connector**, satu celah di aplikasi BTP bisa jadi pintu lateral ke ERP produksi.
- **Shared responsibility RISE:** SAP mengamankan data center/hardware/network/hypervisor + baseline platform; **pelanggan tetap 100% bertanggung jawab** atas keamanan aplikasi, data, akses/role, custom code, dan **wajib menilai/meminta/memvalidasi Security Note level aplikasi sendiri**. Core bersih membuat kewajiban pelanggan ini jauh lebih ringan dieksekusi.
- **Kontrol yang harus disebut namanya:** ABAP Test Cockpit (ATC) dengan check variant `ABAP_CLEAN_CORE_READINESS` + Code Vulnerability Analyzer (CVA), released API, Clean Core Extensibility Levels A–D, DevSecOps untuk BTP.

## Core facts (verified)

> **Claim**: SAP merilis security patch terjadwal pada "SAP Security Patch Day", umumnya Selasa kedua tiap bulan.
> **Number/specific**: Patch Day September 2026 jatuh pada 8 September 2026 (Selasa kedua).
> **Source**: SAP Support — Security Notes & News, September 2026 (support.sap.com/.../security-notes-news/september-2026.html), diakses 21 Sep 2026.
> **Confidence**: high

> **Claim**: Volume security note per Patch Day cukup besar dan berfluktuasi tiap bulan.
> **Number/specific**: September 2026 = 19 security note baru + 14 update note lama (33 total); severitas: 4 critical, 5 high, 10 medium, 1 low; satu di antaranya CVSS 10.0.
> **Source**: Onapsis / Pathlock / SecurityBridge "SAP Security Patch Day — September 2026" + SAP Support, diakses 21 Sep 2026.
> **Confidence**: high (angka konsisten di beberapa vendor keamanan + SAP Support)

> **Claim**: Kode ABAP kustom adalah sumber kerentanan tak-terdeteksi terbesar di sistem SAP.
> **Number/specific**: Cacat umum: missing authority-check, ABAP SQL injection, directory traversal, hardcoded credentials.
> **Source**: SecurityBridge — "Securing the Custom Codebase"; Pathlock — "Four Common SAP Vulnerabilities", diakses 21 Sep 2026.
> **Confidence**: high

> **Claim**: ABAP kustom yang rentan dapat menimpa authorization buffer dan memberi hak SAP_ALL secara tersembunyi.
> **Number/specific**: Program Z jahat dapat meng-grant SAP_ALL tanpa terekam di database user maintenance; backdoor di area $TMP tidak masuk version control.
> **Source**: Pathlock — "Authorization Buffer Exploits"; SAP Community — "How SAP consulters bypass your security restrictions: Hidden SAP_ALL", diakses 21 Sep 2026.
> **Confidence**: high (untuk konsep; frasa hati-hati "dapat" bukan "selalu")

> **Claim**: Kode tanpa authority-check bisa dieksekusi user mana pun — melewati kontrol otorisasi standar.
> **Number/specific**: "ABAP code without embedded authority checks can be executed by any user."
> **Source**: SAP Community — Hidden SAP_ALL (blog member), diakses 21 Sep 2026.
> **Confidence**: high

> **Claim**: Clean core = menjaga inti S/4HANA tetap standar dan upgrade-safe; ekstensi dibangun secara decoupled.
> **Number/specific**: ABAP Cloud "fully compliant" dengan prinsip clean core untuk ekstensi yang decoupled, cloud-ready, dan upgrade-stable.
> **Source**: SAP Community — ABAP Cloud FAQ (pages.community.sap.com/topics/abap/abap-cloud-faq), diakses 21 Sep 2026.
> **Confidence**: high

> **Claim**: Released API adalah objek yang SAP publikasikan dengan kontrak stabilitas & jaminan backward-compatibility lintas upgrade; hanya objek released yang boleh dipakai ABAP Cloud.
> **Number/specific**: ABAP Cloud "based on released objects and public APIs and extension points".
> **Source**: SAP Community — ABAP Cloud FAQ / ABAP Extensibility Guide (Aug 2025 update), diakses 21 Sep 2026.
> **Confidence**: high

> **Claim**: SAP mengklasifikasikan ekstensi ke dalam Clean Core Extensibility Levels A–D.
> **Number/specific**: Level A = paling bersih (on-stack ABAP Cloud atau side-by-side SAP Build/CAP/low-code di BTP); Level B–D = pengembangan ABAP klasik. Whitepaper diperbarui Agustus 2025 (evolusi konsep 3-Tier Extensibility).
> **Source**: SAP Community — "Clean Core Extensibility Levels" & "ABAP Extensibility Guide – August 2025 Update", diakses 21 Sep 2026.
> **Confidence**: high

> **Claim**: Side-by-side extensibility memindahkan logika kustom dari server ABAP on-prem yang terisolasi ke runtime web BTP yang terdistribusi & internet-facing.
> **Number/specific**: Memperluas application attack surface; mengekspos threat vector cloud-native: XSS, SSRF, broken object-level authorization.
> **Source**: Onapsis — "Securing the Clean Core: Why SAP BTP Extensibility Requires DevSecOps" & "What is SAP BTP Security and the Clean Core Transition?", diakses 21 Sep 2026.
> **Confidence**: high

> **Claim**: Ekstensi BTP tersambung balik ke digital core lewat SAP Cloud Connector, sehingga celah di aplikasi cloud bisa menjadi jalur lateral ke ERP produksi.
> **Number/specific**: "Unmitigated cloud application vulnerability can allow malicious actors to move laterally into core ERP production environments."
> **Source**: Onapsis — clean core / BTP security articles, diakses 21 Sep 2026.
> **Confidence**: high

> **Claim**: ABAP Test Cockpit (ATC) menyediakan check variant khusus clean core dan analisis keamanan custom code.
> **Number/specific**: Check variant `ABAP_CLEAN_CORE_READINESS`; variant standar `ABAP_CLOUD_DEVELOPMENT_DEFAULT`; ATC di BTP mencakup SAP Code Vulnerability Analyzer (CVA) tanpa biaya lisensi terpisah; clean core check butuh S/4HANA 2023+.
> **Source**: SAP Community — "ATC recommendations for governance of clean core ABAP development"; GitHub SAP/abap-atc-cr-cv-s4hc, diakses 21 Sep 2026.
> **Confidence**: high

> **Claim**: Pada RISE with SAP, tanggung jawab keamanan dibagi (shared responsibility model).
> **Number/specific**: SAP: data center, hardware, network, hypervisor, baseline security platform. Pelanggan: keamanan aplikasi & data, patching/konfigurasi aplikasi, identity governance, user access/role, custom code, kepatuhan.
> **Source**: SecurityBridge — "RISE with SAP Security: Understanding Shared Responsibility"; Onapsis — "The SAP Shared Responsibility Model", diakses 21 Sep 2026.
> **Confidence**: high

> **Claim**: Dalam RISE, pelanggan tetap harus menilai, meminta, dan memvalidasi sendiri Security Note level aplikasi.
> **Number/specific**: "Customers must still assess, request, and validate all application-level Security Notes"; tanggung jawab kepatuhan (GDPR/SOX/NIST) tetap pada pelanggan.
> **Source**: Onapsis / SecurityBridge / SAPinsider — RISE shared responsibility, diakses 21 Sep 2026.
> **Confidence**: high

> **Claim**: Sistem manajemen vendor SAP terbagi dua produk yang saling terintegrasi.
> **Number/specific**: SAP Fieldglass = external/contingent workforce + services procurement (SOW); SAP Ariba = penemuan supplier, sourcing, kontrak, procure-to-pay/spend management. Keduanya dirancang berintegrasi.
> **Source**: help.sap.com — "SAP Fieldglass and SAP Ariba Integration"; LeverX — perbedaan SAP Procurement/Ariba/Fieldglass, diakses 21 Sep 2026.
> **Confidence**: high

> **Claim (Soltius)**: Soltius adalah SAP Platinum Partner (via United VARs) yang mengerjakan Implementation, Enhancement, remediasi kustomisasi, dan ekstensi BTP — bukan pembuat software SAP.
> **Number/specific**: Platinum Certified Channel Partner & VAR; anggota United VARs; kontributor pendapatan terbesar SAP Indonesia (sejak 2015); berdiri 1998; bagian Metrodata Group.
> **Source**: `knowledge_base/company_profile.md`, `product_matrix.md` (pre-approved).
> **Confidence**: high

## Solution focus + Soltius anchor (from product_matrix.md)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| Prinsip clean core + core standar/upgrade-safe | Inti S/4HANA tetap standar → attack surface lebih kecil, patch lebih cepat | H2 #1 (definisi) | — |
| Kode kustom sebagai liabilitas keamanan | Missing authority-check, authorization-buffer overwrite, SAP_ALL tersembunyi, SoD rusak | H2 #2 | Mid-article aside opsional (remediasi Z-code berisiko otorisasi, tanpa nama klien) |
| ABAP Cloud + released API + Levels A–D | Hanya objek released; Level A paling bersih; whitepaper Aug 2025 | H2 #1/#4 | — |
| Side-by-side extensibility di SAP BTP + Cloud Connector | Memindahkan (bukan menghapus) attack surface; XSS/SSRF/BOLA; jalur lateral via Cloud Connector; butuh DevSecOps | H2 #4 (tabel) | — |
| ATC + CVA (code scanning) | `ABAP_CLEAN_CORE_READINESS`, CVA tanpa lisensi terpisah di BTP | H2 #4 | — |
| SAP Security Notes / Patch Day | Selasa kedua; Sep 2026 = 19 baru + 14 update; core bersih = jendela patch lebih pendek | H2 #3 (mini-tabel) | — |
| Shared responsibility RISE with SAP | Pelanggan pegang keamanan aplikasi/data/custom code + validasi Security Note | H2 #4/#5 | — |
| Soltius: Implementation + Enhancement + remediasi kustomisasi | Platinum Partner via United VARs; implements/migrates/supports, tidak "membangun" SAP | Closing CTA | **Implementation + Enhancement + ERP Strategy — SAP Platinum Partner via United VARs** |

Reminder: Soltius **implements/migrates/supports** — bukan membuat produk keamanan atau software SAP. **Maks 2–3 self-mention** (idealnya 1 closing + 1 aside di H2 #4). Bingkai: membantu menerapkan clean core (pindahkan kustomisasi ke BTP, remediasi Z-code) agar sistem lebih mudah dipatch & diaudit — **bukan menjual produk keamanan**. Hindari fear-mongering; bingkai sebagai pengurangan risiko terukur.

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **SAP Support — Security Notes & News, September 2026** — https://support.sap.com/en/my-support/knowledge-base/security-notes-news/september-2026.html — *what it backs*: jadwal Patch Day (Selasa kedua) + volume/severitas note bulan berjalan (sumber SAP-official, otoritas tertinggi untuk fakta ini).
2. **Onapsis — "Securing the Clean Core: Why SAP BTP Extensibility Requires DevSecOps"** — https://onapsis.com/blog/sap-btp-extensibility-clean-core-devsecops/ — *what it backs*: attack surface berpindah ke runtime web internet-facing; XSS/SSRF/BOLA; jalur lateral via Cloud Connector.
3. **SecurityBridge — "RISE with SAP Security: Understanding Shared Responsibility"** — https://securitybridge.com/blog/rise-with-sap-security/ — *what it backs*: pembagian tanggung jawab keamanan SAP vs pelanggan di RISE.
4. **SAP Community — ABAP Cloud FAQ / ABAP Extensibility Guide (Aug 2025 update)** — https://pages.community.sap.com/topics/abap/abap-cloud-faq — *what it backs*: released API, ABAP Cloud, Clean Core Extensibility Levels A–D.

Priority ranking sesuai playbook: SAP official (support.sap.com, community.sap.com) > vendor keamanan SAP independen (Onapsis, SecurityBridge, Pathlock). Writer sebaiknya menautkan **≥1 SAP-official** (untuk fakta produk/patch) + **≥1 sumber keamanan independen** (untuk klaim attack surface/threat vector).

## FAQ Q&As (6 drafted, Bahasa Indonesia)

### Apakah clean core membuat sistem SAP lebih aman?
Ya, tetapi tidak otomatis kebal. Dengan menjaga inti S/4HANA tetap standar dan memindahkan kustomisasi ke SAP BTP, clean core memperkecil permukaan serangan di dalam core dan mempercepat penerapan SAP Security Notes. Namun ekstensi BTP yang ceroboh justru bisa membuka vektor baru. Clean core adalah fondasi keamanan, bukan pengganti RBAC, patch disiplin, dan monitoring.

### Bagaimana kode kustom bisa menjadi celah keamanan?
Kode ABAP kustom adalah sumber kerentanan tak-terdeteksi terbesar di banyak lanskap SAP. Cacat umum mencakup authority-check yang hilang, SQL injection ABAP, directory traversal, dan hardcoded credentials. Kode tanpa authority-check bisa dieksekusi user mana pun, dan program Z yang rentan bahkan dapat menimpa authorization buffer sehingga memberi hak setara SAP_ALL secara tersembunyi. Karena itu setiap kustomisasi memperbesar risiko.

### Berapa sering SAP merilis security patch?
SAP merilis security note terjadwal pada SAP Security Patch Day, umumnya Selasa kedua setiap bulan. Volumenya berfluktuasi: pada Patch Day September 2026 (8 September) SAP menerbitkan 19 security note baru plus 14 pembaruan note lama, dengan empat berkategori kritis termasuk satu bernilai CVSS 10.0. Core yang bersih membuat setiap patch bulanan ini bisa diterapkan lebih cepat.

### Apakah ekstensi di SAP BTP lebih aman daripada modifikasi core langsung?
Lebih aman untuk core, tetapi bukan tanpa risiko. Side-by-side extensibility tidak menghapus attack surface—ia memindahkannya ke runtime web BTP yang internet-facing, memunculkan vektor cloud-native seperti XSS, SSRF, dan broken object-level authorization. Karena ekstensi tersambung balik ke core lewat SAP Cloud Connector, satu celah bisa menjadi jalur lateral ke ERP produksi. Karena itu ekstensi BTP menuntut praktik DevSecOps dan code scanning.

### Apa itu segregation of duties (SoD) dan kaitannya dengan clean core?
Segregation of duties (SoD) adalah prinsip memisahkan tugas sensitif agar tidak satu orang mengendalikan seluruh transaksi—misalnya orang yang membuat vendor tidak boleh sekaligus menyetujui pembayaran. Kaitannya: kode kustom yang melewati authority-check dapat merusak SoD dengan diam-diam memberi hak berlebih. Menjaga core tetap standar dan mengaudit kustomisasi lewat ATC membantu mempertahankan kontrol SoD yang efektif.

### Siapa yang bertanggung jawab atas keamanan di RISE with SAP?
RISE with SAP memakai shared responsibility model. SAP mengamankan lapisan infrastruktur: data center, hardware, jaringan, hypervisor, dan baseline platform. Pelanggan tetap 100% bertanggung jawab atas keamanan lapisan aplikasi dan data—termasuk role dan akses user, custom code, konfigurasi aplikasi, serta menilai, meminta, dan memvalidasi Security Note level aplikasi. Kepatuhan (mis. SOX, GDPR) juga tetap tanggung jawab pelanggan.

## Data tables for the writer

### Tabel 1 — Siklus patch: core kotor vs core bersih (H2 #3)
| Aspek | Core kotor (banyak modifikasi) | Core bersih (standar + ekstensi decoupled) |
|---|---|---|
| Uji regresi tiap Security Note | Wajib diuji ulang terhadap semua kustomisasi | Minimal—core standar mengikuti jalur uji SAP |
| Kecepatan penerapan patch | Lambat; patch tertunda antre pengujian | Cepat; jendela kerentanan lebih pendek |
| Risiko efek samping upgrade | Tinggi (modifikasi bisa pecah) | Rendah (ekstensi upgrade-safe) |
| Biaya per Patch Day (bulanan) | Naik seiring jumlah objek kustom | Relatif tetap dan dapat diprediksi |

### Tabel 2 — Attack surface berpindah, bukan hilang (H2 #4)
| Lokasi risiko | Threat vector khas | Kontrol yang relevan |
|---|---|---|
| Core ABAP (Z-code on-stack) | Missing authority-check, SQL injection ABAP, authorization-buffer overwrite → SAP_ALL, backdoor $TMP | ATC + CVA (`ABAP_CLEAN_CORE_READINESS`), released API only, review otorisasi, hapus $TMP di produksi |
| Ekstensi side-by-side (SAP BTP) | XSS, SSRF, broken object-level authorization, endpoint API tidak aman | DevSecOps, secure coding, API auth kuat, hardening SAP Cloud Connector, pemindaian dependency |
| Jembatan core ↔ BTP | Lateral movement via SAP Cloud Connector | Least-privilege pada koneksi, segmentasi, monitoring |

### Tabel 3 — Shared responsibility keamanan RISE with SAP (H2 #4/#5)
| Domain | SAP | Pelanggan |
|---|---|---|
| Data center, hardware, jaringan, hypervisor | ✅ | |
| Baseline security platform | ✅ | (validasi tetap perlu) |
| Keamanan aplikasi SAP & data | | ✅ |
| Role, akses user, identity governance | | ✅ |
| Custom code & konfigurasi aplikasi | | ✅ |
| Menilai/meminta/memvalidasi Security Note aplikasi | (dapat menerapkan patch teknis tertentu) | ✅ (tanggung jawab akhir) |
| Kepatuhan (SOX, GDPR, dsb.) | | ✅ |

### Tabel 4 (opsional) — Clean Core Extensibility Levels A–D
| Level | Karakter | Contoh |
|---|---|---|
| A | Paling bersih, upgrade-safe | On-stack ABAP Cloud; side-by-side SAP Build/CAP/low-code di BTP |
| B–D | ABAP klasik, makin jauh dari clean core | Modifikasi/enhancement klasik yang perlu remediasi bertahap |

## Edge cases & nuance

- **Clean core bukan peluru perak.** Ia mengurangi, bukan menghapus, risiko. Ekstensi BTP yang ceroboh bisa lebih berbahaya daripada Z-code terisolasi karena terpapar internet. Keamanan tetap butuh RBAC, patch disiplin, SoD, dan monitoring.
- **Volume note fluktuatif.** Jangan sajikan "X notes/bulan" sebagai konstanta; gunakan September 2026 sebagai contoh dan bingkai sebagai "belasan hingga puluhan note per bulan".
- **RISE tidak memindahkan tanggung jawab aplikasi.** Kesalahpahaman umum: "pindah ke RISE = SAP mengurus keamanan". Faktanya lapisan aplikasi/data/custom code tetap milik pelanggan.
- **Frasa SAP_ALL hati-hati.** Sumber menyebut ini sebagai skenario eksploitasi yang *mungkin* (bukan otomatis terjadi di tiap Z-code). Gunakan "dapat"/"berpotensi", bukan klaim absolut.
- **ATC clean core check butuh S/4HANA 2023+** (atau ATC di BTP). Jangan implikasikan tersedia di ECC atau S/4HANA lama.
- **Fieldglass ≠ Ariba.** Untuk cousin-link "sistem manajemen vendor": Fieldglass = tenaga kerja kontingen/eksternal (vektor identitas & akses pihak ketiga yang bersinggungan dengan SoD); Ariba = siklus supplier/procure-to-pay. Kaitkan ke SoD/attack surface lewat akses pihak ketiga, jangan salah petakan.

## Flags (open factual risk)

- ⚠️ **Angka "Agustus 2026 = 28 notes" di brief tidak terverifikasi.** → Rekomendasi: pakai angka September 2026 yang terkonfirmasi (19 baru + 14 update; 4 kritis; satu CVSS 10.0) dari SAP Support + vendor keamanan; bingkai sebagai contoh, bukan konstanta bulanan.
- ⚠️ **"Selasa kedua tiap bulan"** benar untuk cadence yang terdokumentasi; namun writer sebaiknya menautkan halaman SAP Support bulan berjalan alih-alih menjamin tanggal spesifik untuk bulan mana pun. → phrasing: "umumnya Selasa kedua".
- ⚠️ **Klaim SAP_ALL / authorization-buffer overwrite** bersumber vendor keamanan & blog member SAP Community, bukan advisory SAP-official spesifik. Konsep kredibel dan konsisten lintas sumber. → phrasing hati-hati ("dapat/berpotensi"), hindari fear-mongering.
- ⚠️ **Threat vector BTP (XSS/SSRF/BOLA)** bersumber Onapsis (vendor keamanan), bukan SAP-official. Kredibel untuk konteks keamanan; attribute ke sumber saat mengklaim. → sajikan sebagai risiko cloud-native yang berlaku umum, bukan cacat produk SAP.
- ⚠️ **Tidak menambahkan statistik makro Indonesia (Kemenkominfo/BPS).** Angle ini teknis/keamanan untuk CISO/CIO; data adopsi ID tidak sentral dan tidak ditemukan yang relevan-spesifik. → Rekomendasi: cukup dengan sumber SAP/keamanan; jangan memaksakan statistik ID yang tidak nyambung.

## Definition snippet draft (48 words)

> Dari sudut keamanan, **clean core** adalah prinsip menjaga inti SAP S/4HANA tetap standar dan upgrade-safe sehingga permukaan serangan lebih kecil dan SAP Security Notes bisa diterapkan lebih cepat, dengan memindahkan kustomisasi ke SAP BTP dan hanya memakai released API alih-alih memodifikasi core secara langsung.
