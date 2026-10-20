---
brief_id: "business-intelligence-05"
researcher_run_date: "2026-08-11"
sources_cited: 14
flags: 6
---

# Research Dossier: BI di Cloud atau On-Premise? Memilih Model Deployment yang Tepat

## TL;DR for the writer

- **Ini artikel tentang MODEL DEPLOYMENT (di mana platform + data berjalan)**, bukan frekuensi data (real-time vs batch) atau fitur produk. Tiga model: cloud/SaaS (dikelola vendor), on-premise (infrastruktur sendiri), hybrid (gabungan). Bingkai keputusan sebagai TCO 3–5 tahun + residensi + kapasitas tim + data gravity — bukan "harga awal" atau "cloud selalu lebih murah".
- **Pemetaan SAP yang AMAN & terverifikasi**: SAP Analytics Cloud (SAC) = layanan **SaaS cloud** (tidak ada edisi on-premise penuh; ia bisa *terhubung* ke data on-prem via live connection, tapi platformnya berjalan di cloud SAP). SAP BusinessObjects BI = platform **on-premise** (SAP berkomitmen mempertahankannya on-prem, dengan rilis BI 2025 dan roadmap BI 2027/2029). SAP HANA Cloud = database cloud terkelola. RISE with SAP = S/4HANA Cloud **Private Edition** (single-tenant terkelola); GROW with SAP = **Public Edition** (multi-tenant).
- **Data gravity** (Dave McCrory, 2010) adalah tulang punggung H2 #4: makin besar data menumpuk di satu lokasi, makin mahal/lambat memindahkannya — sehingga *compute/BI ditarik mendekati data*, bukan sebaliknya. Biaya egress cloud memperkuat efek ini. Implikasi langsung: **lokasi data warehouse sering menentukan lokasi deployment BI**.
- **Residensi data Indonesia** yang boleh dikutip: **PP 71/2019** (PSE Lingkup Publik wajib olah/simpan data di Indonesia; Lingkup Privat lebih fleksibel) dan **POJK 11/POJK.03/2022** untuk bank umum (pusat data & DRC di Indonesia, tapi sebagian **boleh** di luar negeri dengan izin OJK). Jangan mengarang lokasi data center SAC atau angka harga lisensi.
- **Mitos "cloud selalu lebih murah" harus dikoreksi jujur** (H2 #5): langganan tumbuh seiring jumlah pengguna & volume data, ada biaya egress dan risiko lock-in; untuk beban stabil jangka panjang, capex on-prem bisa lebih ekonomis. Kuncinya: modelkan TCO, jangan berasumsi.

## Core facts (verified)

> **Claim**: SAP Analytics Cloud (SAC) adalah layanan analitik berbasis cloud (SaaS) — dirancang sebagai solusi cloud sejak awal, tanpa edisi on-premise penuh.
> **Number/specific**: SAC dibangun pada 2015 sebagai solusi cloud murni; enhancement/kustomisasi tidak memerlukan instalasi on-premise. Ia dapat *terhubung* ke sumber data on-prem (live/import connection), tetapi platformnya berjalan di cloud SAP.
> **Source**: SAP Community (blog SAP Analytics Cloud) & SAP PRESS "SAP and the Cloud: An Overview of SAP's SaaS Solutions", diakses 2026-08-11
> **Confidence**: high (positioning produk konsisten); phrasing "tidak ada edisi on-prem penuh" akurat — hindari menyebut ada "SAC on-premise".

> **Claim**: SAP BusinessObjects BI adalah platform BI on-premise, dan SAP berkomitmen mempertahankan ketersediaan on-premise.
> **Number/specific**: SAP memperpanjang Mainstream Maintenance BI Platform 4.3 hingga akhir 2026, dengan jaminan perbaikan keamanan hingga akhir 2027; SAP merilis SAP BusinessObjects BI 2025 (Maret 2025) agar pelanggan bisa tetap on-premise, dan roadmap menyebut rilis BI 2027 (Q1 2027) serta BI 2029.
> **Source**: SAP Knowledge Base Article 3540544 (BI 2025 Maintenance Strategy) & SAP Community "SAP BusinessObjects BI Future is clarified"; ringkasan wiiisdom/s-peers, diakses 2026-08-11
> **Confidence**: high untuk sifat on-premise; **medium** untuk tanggal rilis roadmap (BI 2027/2029 dapat bergeser — attribute sebagai rencana SAP).

> **Claim**: Model cloud publik bersifat multi-tenant (infrastruktur bersama, dikelola vendor); model cloud privat bersifat single-tenant (infrastruktur terdedikasi, kontrol & kustomisasi lebih besar).
> **Number/specific**: SAP S/4HANA Cloud Public Edition (GROW with SAP) = multi-tenant, proses standar, deploy lebih cepat, TCO lebih rendah; Private Edition (RISE with SAP) = single-tenant, mendukung kustomisasi & migrasi kompleks, kontrol lingkungan lebih besar.
> **Source**: SAP Community & panduan editions (Kellton, Cloud4C, Panaya), diakses 2026-08-11
> **Confidence**: high

> **Claim**: RISE with SAP adalah penawaran cloud terkelola (S/4HANA Cloud Private Edition) di mana SAP mengelola lingkungan; relevan sebagai konteks "ketika sumber ERP juga cloud".
> **Number/specific**: RISE membungkus S/4HANA Cloud Private Edition sebagai layanan single-tenant terkelola yang dapat berjalan di atas hyperscaler (AWS/Azure/GCP) — memberi fleksibilitas mirip on-prem dengan infrastruktur cloud.
> **Source**: SAP Community & panduan RISE editions, diakses 2026-08-11
> **Confidence**: high

> **Claim**: "Data gravity" menjelaskan mengapa lokasi data menentukan lokasi analitik/BI.
> **Number/specific**: Istilah diperkenalkan Dave McCrory (2010); saat data menumpuk di satu lokasi ia makin sulit/mahal dipindah, sehingga aplikasi & compute cenderung berkumpul di dekatnya untuk menekan latency dan biaya bandwidth.
> **Source**: Computer Weekly "Data gravity: What is it and how to manage it"; Pure Storage "The Economics of Data Gravity", diakses 2026-08-11
> **Confidence**: high

> **Claim**: Biaya egress (data keluar dari jaringan cloud) adalah faktor TCO nyata dan pendorong data gravity — kadang membuat perpindahan data antar-platform tidak ekonomis.
> **Number/specific**: McCrory menyebut biaya egress sebagai "artificial" data gravity — bukan batas teknologi, melainkan model finansial layanan cloud; makin banyak data disimpan, makin mahal memindahkannya.
> **Source**: Pure Storage / Computer Weekly / simplyblock (glossary data gravity), diakses 2026-08-11
> **Confidence**: high (konsep); angka egress spesifik bervariasi per vendor — jangan sebut tarif tertentu tanpa sumber.

> **Claim**: On-premise umumnya bermodel capex (belanja modal di muka: hardware + lisensi), sedangkan SaaS bermodel opex (langganan berulang).
> **Number/specific**: Perbedaan struktur biaya ini adalah inti perbandingan TCO — SaaS memindahkan beban hardware/patch/skala ke vendor; on-prem menahan capex tapi memberi kontrol penuh.
> **Source**: Panduan cloud-vs-on-prem BI (Sigma, Zoho), diakses 2026-08-11
> **Confidence**: high (prinsip umum); **medium** sebagai klaim vendor — bingkai sebagai kerangka, bukan angka pasti.

> **Claim**: Deploy cloud/SaaS umumnya jauh lebih cepat daripada on-premise.
> **Number/specific**: Sumber vendor menyebut deployment SaaS dalam hitungan jam/hari (vendor menangani hosting, maintenance, scaling) versus on-prem yang butuh minggu/bulan untuk provisioning hardware & instalasi.
> **Source**: Sigma "BI: Cloud (SaaS) vs On-Premises"; Zoho "Cloud vs On-Premises BI", diakses 2026-08-11
> **Confidence**: medium — sumber vendor; writer sebaiknya menulis "umumnya/menurut penyedia SaaS", bukan angka absolut.

> **Claim**: Hybrid (gabungan cloud + on-premise) kini menjadi pola arsitektur enterprise yang umum, bukan pengecualian.
> **Number/specific**: Perusahaan menyimpan beban sensitif/legacy on-prem sembari memanfaatkan elastisitas cloud untuk beban lain; contoh nyata: menjalankan software on-prem seperti BusinessObjects di atas infrastruktur cloud (mis. Azure/IaaS) sebagai lift-and-shift — berbeda dari SaaS penuh.
> **Source**: Yellowfin "Why Companies Still Choose On-Premise BI"; Microsoft Learn "SAP BusinessObjects BI platform on Azure", diakses 2026-08-11
> **Confidence**: medium-high

> **Claim**: PP 71/2019 mewajibkan Penyelenggara Sistem Elektronik (PSE) Lingkup Publik mengelola, memproses, dan/atau menyimpan Sistem Elektronik dan Data Elektronik di wilayah Indonesia; Lingkup Privat lebih fleksibel.
> **Number/specific**: PP 71/2019 menggantikan PP 82/2012; PSE Lingkup Publik (instansi negara / yang ditunjuk) wajib menempatkan pengelolaan & penyimpanan data di Indonesia, sementara PSE Lingkup Privat boleh di luar negeri sepanjang menjamin akses untuk pengawasan & penegakan hukum.
> **Source**: JDIH Komdigi & peraturan.go.id — PP No. 71 Tahun 2019, diakses 2026-08-11
> **Confidence**: high

> **Claim**: POJK 11/POJK.03/2022 mengatur penyelenggaraan TI oleh bank umum, termasuk lokasi pusat data & disaster recovery center.
> **Number/specific**: Ditetapkan 5 Juli 2022, berlaku 6 Oktober 2022. Bank wajib menempatkan sistem elektronik pada pusat data & DRC di Indonesia; sebagian **boleh** ditempatkan di luar negeri dengan **izin OJK** (masuk rencana pengembangan TI dan melalui proses persetujuan).
> **Source**: OJK — Ringkasan & FAQ POJK 11/POJK.03/2022; Bisnis.com "Pusat Data Diatur Ulang", diakses 2026-08-11
> **Confidence**: high — jangan gambarkan sebagai larangan mutlak cloud; ada jalur izin.

> **Claim**: Kepatuhan residensi/perlindungan data pribadi di Indonesia juga dibingkai oleh UU Pelindungan Data Pribadi.
> **Number/specific**: UU No. 27 Tahun 2022 (UU PDP) adalah payung perlindungan data pribadi nasional; untuk artikel ini singgung ringan saja — pembahasan akses/RLS & PDP mendalam ada di artikel lain batch ini (business-intelligence-02).
> **Source**: UU No. 27 Tahun 2022 (rujukan umum), diakses 2026-08-11
> **Confidence**: high (keberadaan UU); **jaga tetap ringan** sesuai catatan brief.

> **Claim**: Keputusan cloud vs on-premise sebaiknya berbasis TCO 3–5 tahun, bukan harga awal.
> **Number/specific**: Komponen TCO yang relevan: lisensi/langganan, hardware & fasilitas, tenaga pemeliharaan/patch, upgrade, biaya egress/transfer data, downtime, dan pertumbuhan pengguna/volume. SaaS memindahkan sebagian ke opex vendor; on-prem menahan capex tapi menambah beban operasional internal.
> **Source**: Sintesis Sigma/Zoho + prinsip data gravity (Pure Storage), diakses 2026-08-11
> **Confidence**: medium-high — kerangka analitis, bukan angka tunggal.

> **Claim**: SAP HANA Cloud adalah layanan database cloud terkelola yang dapat menjadi fondasi data untuk analitik cloud.
> **Number/specific**: HANA Cloud disediakan sebagai layanan cloud (DBaaS) yang dikelola SAP; relevan sebagai lapisan data di skenario cloud/hybrid dan sebagai kontras dengan database on-prem.
> **Source**: SAP (materi HANA Cloud / SAP PRESS SaaS overview), diakses 2026-08-11
> **Confidence**: medium-high — sebut sebagai "database cloud terkelola", jangan merinci SKU/harga.

## Solution focus + Soltius anchor (from product_matrix.md)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| Model deployment (SaaS / on-prem / hybrid) — vendor-neutral | Definisi tiga model + siapa mengelola hosting/patch/skala | H2 #1 (definisi) | — (edukasi netral dulu) |
| SAP Analytics Cloud (SAC) | Layanan SaaS cloud; bisa terhubung ke data on-prem; tidak ada edisi on-prem penuh | H2 #1–#2 sebagai contoh SaaS | Analytics + Data and AI Consulting |
| SAP BusinessObjects BI | Platform on-premise; SAP komit pertahankan on-prem (BI 2025; roadmap BI 2027/2029) | H2 #1–#3 sebagai contoh on-prem/hybrid | Implementation/AMS |
| SAP HANA Cloud; RISE (Private) vs GROW (Public) | HANA Cloud = DB cloud terkelola; RISE = S/4HANA Private single-tenant; GROW = Public multi-tenant | H2 #3–#4 (konteks data gravity & ERP cloud) | Cloud + Best RISE/Best Cloud Partner |
| Residensi data (PP 71/2019, POJK 11/2022) | Kewajiban & jalur izin; bukan larangan mutlak | H2 #3 | Best Cloud Partner — menilai TCO/kepatuhan |

**Closing anchor (satu, di penutup)**: "Sebagai Best RISE & Best Cloud Partner, Soltius membantu memilih dan mengimplementasikan model deployment BI — cloud seperti SAP Analytics Cloud maupun estat on-premise/hybrid — sesuai TCO, kepatuhan residensi, dan kesiapan tim Anda." Opsional 1 aside di H2 #4: arsitektur data (lokasi warehouse) sebaiknya diputuskan bersama saat merancang deployment.

Reminder: Soltius **mengimplementasikan/memigrasi/mendukung** teknologi ini — bukan membangunnya. Maks 2–3 self-mention (idealnya 1 di penutup + 1 aside).

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **SAP Community / SAP Knowledge Base — "SAP BusinessObjects BI Future is clarified" & KBA 3540544 (2025)** — https://community.sap.com/t5/technology-blog-posts-by-sap/sap-businessobjects-bi-future-is-clarified/ba-p/14146353 — *what it backs*: BusinessObjects tetap on-premise; maintenance 4.3 hingga 2026/2027; komitmen on-prem & roadmap BI 2025/2027.
2. **JDIH Komdigi / peraturan.go.id — PP No. 71 Tahun 2019** — https://jdih.komdigi.go.id/produk_hukum/view/id/695 — *what it backs*: kewajiban lokalisasi data PSE Lingkup Publik; fleksibilitas Lingkup Privat.
3. **OJK — Ringkasan & FAQ POJK 11/POJK.03/2022** — https://www.ojk.go.id/id/regulasi/Documents/Pages/Penyelenggaraan-Teknologi-Informasi-Oleh-Bank-Umum/RINGKASAN%20POJK%2011%20-%2003%20-%202022.pdf — *what it backs*: pusat data & DRC bank di Indonesia; jalur izin penempatan sebagian di luar negeri.
4. **Computer Weekly — "Data gravity: What is it and how to manage it"** & **Pure Storage — "The Economics of Data Gravity"** — https://www.computerweekly.com/feature/Data-gravity-What-is-it-and-how-to-manage-it — *what it backs*: konsep data gravity, egress cost, "move compute to data".

Priority order dipenuhi: SAP official > (Kemenkominfo/Komdigi + OJK) > tech press. Sigma/Zoho/Yellowfin dipakai hanya untuk framing praktis (deploy speed, hybrid), diberi atribusi vendor.

## FAQ Q&As (6 drafted, Bahasa Indonesia)

### Lebih baik BI di cloud atau on-premise?
Tidak ada jawaban universal — bergantung pada TCO 3–5 tahun, kapasitas tim memelihara sistem, letak data terbesar (data gravity), kecepatan upgrade yang diinginkan, dan aturan residensi data di sektor Anda. Cloud/SaaS unggul untuk kecepatan deploy dan pemeliharaan minim; on-premise unggul untuk kontrol penuh dan beban stabil jangka panjang. Banyak enterprise akhirnya memilih hybrid.

### Apakah data BI di cloud aman dan patuh regulasi Indonesia?
Bisa, selama model deployment sesuai kewajiban sektoral. PP 71/2019 mewajibkan PSE Lingkup Publik menyimpan/mengolah data di Indonesia, sedangkan Lingkup Privat lebih fleksibel. Untuk bank, POJK 11/POJK.03/2022 mengharuskan pusat data & DRC di Indonesia, meski sebagian boleh di luar negeri dengan izin OJK. Petakan kewajiban sektor sebelum memilih cloud publik.

### Apa itu deployment hybrid?
Hybrid menggabungkan cloud dan on-premise: beban sensitif atau data legacy tetap di infrastruktur sendiri, sementara analitik atau beban elastis berjalan di cloud. Pola ini kini umum di enterprise karena menyeimbangkan kontrol/residensi dengan skalabilitas. Contoh: menjalankan BusinessObjects on-prem (atau di IaaS cloud) sembari memakai SAP Analytics Cloud untuk dashboard self-service.

### Apakah SAP Analytics Cloud bisa on-premise?
Tidak — SAP Analytics Cloud adalah layanan SaaS yang berjalan di cloud SAP; tidak ada edisi on-premise penuh. Yang mungkin adalah *menghubungkan* SAC ke sumber data on-premise (misalnya via live connection), sehingga data tetap di tempat Anda tetapi platform analitiknya di cloud. Untuk BI yang sepenuhnya on-premise, SAP menyediakan SAP BusinessObjects BI.

### Apa itu data gravity?
Data gravity, istilah yang diperkenalkan Dave McCrory (2010), menggambarkan bahwa makin besar data menumpuk di satu lokasi, makin sulit dan mahal memindahkannya — sehingga aplikasi dan analitik cenderung "tertarik" mendekat untuk menekan latency dan biaya transfer (egress). Implikasinya: lokasi data warehouse Anda sering menentukan di mana sebaiknya BI dijalankan.

### Bagaimana menghitung TCO deployment BI?
Jangan berhenti di harga awal. Hitung total biaya 3–5 tahun: lisensi atau langganan (yang tumbuh dengan jumlah pengguna & volume data), hardware/fasilitas, tenaga pemeliharaan dan patch, biaya upgrade, biaya egress/transfer data, serta risiko downtime dan lock-in. SaaS memindahkan sebagian beban ke opex vendor; on-premise menahan capex tetapi menambah biaya operasional internal.

## Data tables for the writer

### Tabel utama — Cloud (SaaS) vs On-Premise vs Hybrid (enam dimensi)
| Dimensi | Cloud (SaaS) | On-Premise | Hybrid |
|---|---|---|---|
| Biaya | Opex/langganan; rendah di muka, tumbuh dengan pengguna/volume | Capex di muka (hardware+lisensi); stabil jangka panjang | Campuran; optimalkan per beban |
| Kecepatan deploy | Jam/hari (vendor) | Minggu/bulan (provisioning sendiri) | Bertahap per komponen |
| Pemeliharaan/upgrade | Ditangani vendor; kontinu | Tim internal; terjadwal | Terbagi vendor & internal |
| Kontrol/kustomisasi | Terbatas standar vendor | Penuh | Fleksibel per lokasi |
| Skalabilitas | Elastis, on-demand | Terbatas kapasitas fisik | Elastis di sisi cloud |
| Keamanan/residensi | Bergantung region & kepatuhan vendor | Kontrol penuh, cocok residensi ketat | Data sensitif on-prem, sisanya cloud |

### Tabel sifat deployment produk SAP (untuk akurasi)
| Produk | Sifat deployment | Catatan akurat |
|---|---|---|
| SAP Analytics Cloud (SAC) | SaaS / cloud-only | Bisa terhubung ke data on-prem; tidak ada edisi on-prem penuh |
| SAP BusinessObjects BI | On-premise | SAP komit pertahankan on-prem; BI 2025 rilis, roadmap BI 2027/2029 |
| SAP HANA Cloud | Database cloud terkelola (DBaaS) | Lapisan data untuk skenario cloud/hybrid |
| RISE with SAP (S/4HANA Private Edition) | Cloud privat single-tenant terkelola | Kontrol mirip on-prem, infrastruktur cloud |
| GROW with SAP (S/4HANA Public Edition) | Cloud publik multi-tenant | Standar, deploy cepat, TCO lebih rendah |

### Komponen TCO deployment BI (checklist untuk pembaca)
| Komponen | SaaS (cloud) | On-premise |
|---|---|---|
| Lisensi/langganan | Berulang; skala dengan pengguna & data | Sekali di muka + maintenance |
| Hardware/fasilitas | Termasuk (vendor) | Beban internal (server, listrik, ruang) |
| Pemeliharaan/patch/upgrade | Vendor | Tim IT internal |
| Egress/transfer data | Bisa signifikan (data gravity) | Minim (data lokal) |
| Skala pertumbuhan | Bayar sesuai pemakaian | Perlu belanja modal baru |

## Edge cases & nuance

- **"Cloud-only" SAC tidak berarti data Anda wajib pindah ke cloud.** SAC bisa memakai *live connection* ke sumber on-prem — platform di cloud, data tetap di tempat. Ini penting untuk menjawab keberatan residensi tanpa salah kaprah.
- **On-premise di atas IaaS ≠ SaaS.** Menjalankan BusinessObjects di Azure/AWS adalah lift-and-shift infrastruktur, bukan SaaS; Anda tetap mengelola software, upgrade, dan patch. Berguna untuk menjelaskan spektrum hybrid secara jujur.
- **"Cloud selalu lebih murah" itu keliru untuk beban stabil besar.** Langganan yang tumbuh + egress + lock-in bisa melampaui capex on-prem yang terdepresiasi. Framing yang benar: modelkan TCO 3–5 tahun per skenario beban.
- **Residensi bukan larangan cloud.** POJK 11/2022 dan PP 71/2019 punya jalur (izin OJK; klasifikasi Publik vs Privat). Hindari narasi "regulasi Indonesia melarang cloud".
- **Data gravity bekerja dua arah.** Jika ERP/warehouse sudah di cloud (mis. RISE/HANA Cloud), menaruh BI di cloud mengurangi egress & latency; jika data inti masih on-prem, BI on-prem/hybrid sering lebih rasional.

## Flags (open factual risk)

- ⚠️ **Tanggal roadmap BusinessObjects (BI 2027 Q1 2027, BI 2029)**: rencana SAP yang dapat bergeser → attribute sebagai "roadmap SAP" / "SAP menyatakan berencana", jangan sebagai fakta pasti.
- ⚠️ **Angka kecepatan deploy "jam/hari vs minggu/bulan"**: berasal dari sumber vendor (Sigma/Zoho), bukan SAP official → phrase "umumnya/menurut penyedia", hindari angka absolut.
- ⚠️ **Lokasi data center SAC / region Indonesia**: jangan klaim data center SAC ada/tidak ada di Indonesia tanpa sumber SAP resmi → bahas residensi sebagai *pertimbangan*, arahkan pembaca memverifikasi region ke SAP.
- ⚠️ **Harga/lisensi SAC, HANA Cloud, RISE**: jangan sebut angka atau SKU spesifik — tidak diverifikasi dan cepat berubah.
- ⚠️ **Tarif egress spesifik**: bervariasi antar hyperscaler → sebut sebagai "biaya egress dapat signifikan", tanpa angka.
- ⚠️ **UU PDP mendalam & RLS/kontrol akses**: sengaja disimpan ringan (ada di business-intelligence-02) → jangan memperdalam agar tidak tumpang-tindih.

## Definition snippet draft (40–60 words)

> **Model deployment Business Intelligence** menentukan di mana platform dan data BI berjalan: **cloud (SaaS, dikelola vendor)**, **on-premise (di infrastruktur sendiri)**, atau **hybrid (gabungan keduanya)**. Pilihan ini memengaruhi biaya (TCO), kecepatan deploy, pemeliharaan, kontrol, dan kepatuhan residensi data — bukan sekadar soal teknologi, melainkan keputusan bisnis dan risiko.

## Internal links (confirm placement)
- **Hub**: `https://www.soltius.co.id/id/blog/business-intelligence` — anchor `Business Intelligence`.
- **Cousin 1**: `https://www.soltius.co.id/id/blog/data-warehouse-solutions` — anchor `Data Warehouse Solutions` (data gravity: lokasi warehouse menentukan deployment BI). Tempatkan di H2 #4.
- **Cousin 2**: `https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud` — anchor `migrasi ERP ke cloud` (bila ERP pindah cloud/RISE, BI cloud jadi pasangan alami). Tempatkan di H2 #3 atau penutup.
