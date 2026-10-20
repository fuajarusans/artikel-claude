---
brief_id: "warehouse-management-system-03"
researcher_run_date: "2026-10-07"
sources_cited: 10
flags: 7
---

# Research Dossier: Gudang Bahan Berbahaya (B3): Peran WMS dalam Kepatuhan dan Keselamatan

## TL;DR for the writer

- **Topik ini adalah persilangan dua rezim yang biasanya terpisah: regulasi lingkungan/K3 Indonesia (PP 22/2021, Permen LHK 6/2021, GHS) di satu sisi, dan kapabilitas WMS/SAP EWM di sisi lain.** Nilai artikel ada di jembatan itu — hampir tak ada konten Indonesia yang menautkan keduanya. PRIORITAS: akurasi angka hukum. Jangan tulis angka regulasi tanpa sumber.
- **Batas waktu simpan di TPS Limbah B3 TERVERIFIKASI dan berbasis kategori + volume, bukan angka tunggal.** Empat skenario: **90 hari** (≥50 kg/hari), **180 hari** (kategori 1, <50 kg/hari), **365 hari** (kategori 2 sumber tidak spesifik & spesifik umum), **365 hari** (kategori 2 sumber spesifik khusus). Ini dasar hukumnya PP 22/2021 dan dirinci di Permen LHK 6/2021. JANGAN sajikan sebagai "maks 90 hari" saja — itu kesalahan umum.
- **SAP EWM memang punya mekanisme hazardous materials yang nyata: product/hazard rating (Hazard Rating 1 & 2) adalah parameter dalam penentuan storage type dan storage section saat putaway, dibaca dari hazardous substance master data + dangerous goods master.** Terverifikasi di learning.sap.com. Inilah inti "bagaimana WMS menegakkan segregasi otomatis".
- **Hati-hati membedakan dua modul SAP**: (1) **SAP EWM** menangani penyimpanan/putaway/segregasi di dalam gudang; (2) **SAP EHS / SAP S/4HANA for product compliance** (komponen Dangerous Goods Management + SDS/label) menangani kepatuhan bahan & dangerous goods untuk transport (ADR/IMDG/IATA) dan penerbitan SDS/label. Jangan dicampur — segregasi gudang ≠ dokumen transport.
- **Tabel inkompatibilitas kimia WAJIB ada (H2 #4), TAPI sumbernya adalah prinsip keselamatan kimia umum (OSHA/NFPA/CAMEO), BUKAN satu tabel resmi di PP 22/2021.** Writer harus menyajikannya sebagai praktik keselamatan standar, bukan kutipan regulasi Indonesia. GHS dan B3-lingkungan adalah dua sistem klasifikasi berbeda — jangan disamakan.

## Core facts (verified)

> **Claim**: B3 (Bahan Berbahaya dan Beracun) didefinisikan dan diatur dalam kerangka hukum lingkungan Indonesia, dengan karakteristik bahaya yang baku.
> **Number/specific**: B3 adalah zat/bahan yang karena sifat, konsentrasi, atau jumlahnya dapat membahayakan lingkungan, kesehatan, serta kelangsungan hidup manusia dan makhluk lain. Karakteristik B3/limbah B3 yang baku: mudah meledak, mudah menyala, reaktif, infeksius, korosif, dan beracun.
> **Source**: PP No. 22 Tahun 2021 tentang Penyelenggaraan Perlindungan dan Pengelolaan Lingkungan Hidup (turunan UU 32/2009 & UU Cipta Kerja); karakteristik konsisten lintas literatur K3/lingkungan.
> **Confidence**: high.

> **Claim**: PP No. 22 Tahun 2021 adalah payung pengelolaan B3 dan limbah B3 di Indonesia.
> **Number/specific**: Pengelolaan limbah B3 mencakup rangkaian: penetapan, pengurangan, **penyimpanan**, pengumpulan, pengangkutan, pemanfaatan, pengolahan, hingga penimbunan. Setiap penghasil wajib mengelola limbah yang dihasilkannya.
> **Source**: PP No. 22/2021 (Bab tentang Pengelolaan Limbah B3); dikonfirmasi silang via pemberitaan Republika/Jawa Pos atas kewajiban industri (Sep 2023).
> **Confidence**: high.

> **Claim**: Batas waktu penyimpanan Limbah B3 di TPS bergantung pada kategori limbah dan volume harian — bukan satu angka tunggal.
> **Number/specific**: **(a) 90 hari** untuk Limbah B3 yang dihasilkan **≥ 50 kg per hari**; **(b) 180 hari** untuk Limbah B3 **kategori 1** yang dihasilkan **< 50 kg per hari**; **(c) 365 hari** untuk Limbah B3 **kategori 2** dari **sumber tidak spesifik dan sumber spesifik umum**; **(d) 365 hari** untuk Limbah B3 **kategori 2** dari **sumber spesifik khusus**.
> **Source**: PP No. 22/2021 (ketentuan batas waktu penyimpanan Limbah B3, umumnya dirujuk sebagai Pasal 285) dan dirinci dalam Permen LHK No. 6 Tahun 2021; dikonfirmasi via dua pencarian independen (2026-10-07).
> **Confidence**: high (angka & kondisi terkonfirmasi; nomor Pasal persis sebaiknya diverifikasi writer sebelum dikutip eksplisit — lihat Flags).

> **Claim**: Permen LHK No. 6 Tahun 2021 merinci tata cara & persyaratan teknis pengelolaan Limbah B3, termasuk TPS.
> **Number/specific**: Mengatur rincian teknis penyimpanan (rincian teknis TPS), pengemasan sesuai karakteristik, **pelabelan dan simbol bahaya**, serta **segregasi/pemisahan** limbah yang tidak saling cocok. Penghasil yang akan menyimpan di TPS wajib memiliki rincian teknis penyimpanan Limbah B3.
> **Source**: Permen LHK No. 6 Tahun 2021 tentang Tata Cara dan Persyaratan Pengelolaan Limbah B3 (teks resmi, mis. salinan JDIH/peraturan.go.id), diakses 2026-10-07.
> **Confidence**: high.

> **Claim**: Fasilitas penyimpanan B3/limbah B3 harus memenuhi persyaratan teknis tertentu.
> **Number/specific**: Antara lain sistem/sarana pengendali kebocoran dan tumpahan (secondary containment), ventilasi memadai, perlindungan dari air hujan dan sinar matahari, serta jarak aman dari permukiman dan lokasi sensitif. Desain disesuaikan dengan karakteristik limbah (mis. zona tahan api untuk mudah menyala).
> **Source**: PP No. 22/2021 & Permen LHK No. 6/2021 (persyaratan fasilitas penyimpanan); dikonfirmasi via ringkasan regulasi (2026-10-07).
> **Confidence**: medium (persyaratan umum terkonfirmasi; detail spesifikasi teknis per karakteristik agar tidak dikutip sebagai angka pasti tanpa membuka pasal terkait).

> **Claim**: Penghasil B3/limbah B3 wajib memiliki perizinan/persetujuan dan menyelenggarakan pencatatan (logbook).
> **Number/specific**: Kegiatan pengelolaan limbah B3 memerlukan persetujuan/izin dari instansi berwenang (kini terintegrasi dalam Persetujuan Lingkungan/perizinan berusaha). Wajib ada catatan timbulan: jenis, jumlah, karakteristik, waktu, dan dokumen penyerahan (manifes) ke pihak berizin.
> **Source**: PP No. 22/2021 (kewajiban perizinan & pencatatan); dikonfirmasi via pemberitaan & ringkasan regulasi (2026-10-07).
> **Confidence**: high.

> **Claim**: Indonesia mengadopsi GHS (Globally Harmonized System) untuk klasifikasi & pelabelan bahan kimia.
> **Number/specific**: Diadopsi lewat **Permenperin No. 87/M-IND/PER/9/2009**, kemudian diperbarui dengan **Permenperin No. 23/M-IND/PER/4/2013** tentang Sistem Harmonisasi Global Klasifikasi dan Pelabelan Bahan Kimia. Elemen label GHS: identitas produk & pemasok, **piktogram bahaya**, **kata sinyal** (Bahaya/Awas), **pernyataan bahaya (H-statement)**, dan **pernyataan kehati-hatian (P-statement)**, didukung **SDS/LDK (Lembar Data Keselamatan)**.
> **Source**: Permenperin No. 87/2009 (salinan peraturan.go.id, bn309-2009) & Permenperin No. 23/2013; ringkasan ChemLinked/jurnal K3 (2026-10-07).
> **Confidence**: high untuk adopsi & elemen label; jumlah persis kelas bahaya GHS → lihat Flags.

> **Claim**: Klasifikasi GHS (bahan kimia, ranah Kemenperin) berbeda dari klasifikasi B3/limbah B3 lingkungan (PP 22/2021, ranah KLHK) — keduanya berlaku paralel.
> **Number/specific**: GHS mengklasifikasikan bahan kimia menurut kelas bahaya fisik, kesehatan, dan lingkungan untuk komunikasi bahaya (label + SDS). PP 22/2021 mengklasifikasikan limbah B3 menurut karakteristik (mudah meledak/menyala/reaktif/infeksius/korosif/beracun) dan kategori 1/2 untuk pengelolaan limbah. Sebuah gudang bisa tunduk pada keduanya sekaligus.
> **Source**: sintesis Permenperin GHS + PP 22/2021 (2026-10-07).
> **Confidence**: high (prinsip; penting agar writer tidak menyamakan "kelas GHS" dengan "kategori limbah B3").

> **Claim**: SAP Extended Warehouse Management (EWM) memakai hazard rating sebagai parameter penentuan lokasi (bin) saat putaway.
> **Number/specific**: Dalam penentuan bin, sistem membaca informasi dari inbound delivery (party entitled to dispose, stock type), warehouse product master (putaway control indicator), **hazardous substance master data**, dan packaging specifications. **Hazard Rating 1 dan 2** adalah parameter yang dipakai sistem saat menentukan **storage type search sequence** dan **storage section** — sehingga bahan dengan sifat bahaya tertentu diarahkan ke zona/section yang sesuai.
> **Source**: SAP Learning — "Configuring Direct Putaway" & "Receiving Goods in the Warehouse" (learning.sap.com, kursus Basic Customizing in SAP S/4HANA EWM); 4flow eBook "Mastering Putaway Strategies in SAP EWM", diakses 2026-10-07.
> **Confidence**: high.

> **Claim**: SAP EWM menyimpan atribut bahan berbahaya di hazardous substance master data untuk mengontrol penyimpanan.
> **Number/specific**: Master data bahan berbahaya di EWM menampung atribut seperti hazard rating, storage class/section, dan kecocokan penyimpanan; atribut ini menjadi dasar aturan storage section determination (mis. memisahkan storage section per karakteristik) dan pemeriksaan kapasitas bin.
> **Source**: learning.sap.com (storage section determination dalam EWM putaway); 4flow eBook (2026-10-07).
> **Confidence**: medium (konsep & peran master data terverifikasi; penamaan field persis bervariasi antar rilis EWM — jangan kunci nama field tunggal).

> **Claim**: SAP EHS / SAP S/4HANA for product compliance menangani dangerous goods & SDS — ranah yang berbeda dari penyimpanan gudang.
> **Number/specific**: Komponen **Dangerous Goods Management (EHS-DGP)** mengelola dangerous goods master dan menjalankan pemeriksaan kepatuhan transport terhadap regulasi internasional (**ADR, IATA, IMDG**), serta menerbitkan dokumen/label transport. Komponen lain menangani **Safety Data Sheet (SDS/LDK) & label management** dan master data substansi/klasifikasi bahaya. Di S/4HANA, fitur ini dirapikan di bawah payung "SAP S/4HANA for product compliance".
> **Source**: blogs.sap.com — "Environment, Health and Safety in SAP S/4HANA 2021" & "Dangerous Goods Management Intro"; gambit.de SAP EHS wiki; consilio-gmbh.de (2026-10-07).
> **Confidence**: high untuk cakupan; penekanan penting — DGP fokus transport, bukan segregasi rak gudang (lihat Edge cases).

> **Claim**: Aturan segregasi/inkompatibilitas kimia adalah praktik keselamatan kimia umum (bukan satu tabel di regulasi B3 Indonesia).
> **Number/specific**: Prinsip baku: oksidator dijauhkan dari bahan mudah menyala & bahan organik; asam dipisah dari basa; asam dipisah dari sianida/sulfida (risiko gas beracun HCN/H2S); bahan reaktif-air (mis. logam alkali) dijauhkan dari air/bahan berair; mudah menyala dijauhkan dari sumber panas/api. Matriks ini bersumber dari panduan keselamatan kimia (OSHA, NFPA, EPA CAMEO Chemicals), bukan dari PP 22/2021.
> **Source**: prinsip chemical compatibility standar (OSHA/NFPA/CAMEO); pengetahuan keselamatan kimia baku.
> **Confidence**: high untuk prinsip kimia; **sumber bukan regulasi Indonesia** — writer harus memframe sebagai praktik keselamatan, bukan kutipan hukum (lihat Flags).

> **Claim**: SAP diakui sebagai Leader di Gartner Magic Quadrant for Warehouse Management Systems 2026 (kredibilitas WMS generik, untuk closing).
> **Number/specific**: Artikel "SAP Recognized as a Leader in the 2026 Gartner Magic Quadrant for Warehouse Management Systems", terbit 4 Mei 2026; ke-12 kali berturut-turut sebagai Leader; EWM melayani pelanggan di 24 industri.
> **Source**: news.sap.com — https://news.sap.com/?p=242340 (dikutip dari batch WMS yang sama, 2026-10-07).
> **Confidence**: high (dipakai maksimal sekali; relevan sebagai kredibilitas umum, bukan klaim spesifik B3).

> **Claim**: Soltius kredibel mendampingi implementasi EWM di gudang berisiko — sebagai mitra, bukan penjamin kepatuhan hukum.
> **Number/specific**: PT Soltius Indonesia — SAP Platinum Certified Channel Partner & Value Added Reseller, anggota United VARs, sejak 1998, bagian Metrodata Group, dengan pengalaman industri manufaktur/consumer products/mill products.
> **Source**: knowledge_base/company_profile.md (pre-approved).
> **Confidence**: high.

## Solution focus + Soltius anchor (derived from brief + keywords.md; WMS bukan baris di product_matrix.md)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| Konsep B3, limbah B3, GHS, K3 (vendor-netral) | Definisi + karakteristik + dasar hukum (PP 22/2021, Permen LHK 6/2021, Permenperin GHS) | H2 #1, #2 | — (body vendor-netral) |
| SAP EWM — putaway berbasis hazard rating | Hazard Rating 1 & 2 sebagai parameter storage type/section determination; hazardous substance master | H2 #3, #4 | — (opsional 1 aside) |
| Segregasi/inkompatibilitas otomatis via EWM | Aturan storage section + pemeriksaan kapasitas/kuota bin per karakteristik | H2 #3, #4 | — |
| SAP EHS / product compliance (opsional) | Dangerous Goods Management (ADR/IMDG/IATA) + SDS/label — ranah transport & dokumen, terhubung master data | H2 #4/#5 (aside) | — |
| Jejak audit & pelaporan dari data WMS | Logbook digital, traceability lot/batch, laporan kepatuhan dari data WMS | H2 #5 | — |
| SAP Leader Gartner MQ WMS 2026 | 4 Mei 2026, ke-12 berturut-turut, 24 industri | closing (kredibilitas) | Implementation + SAP Platinum Partner, pengalaman manufaktur/kimia |

**Soltius anchor (CTA, closing)**: Implementation + pengalaman industri manufaktur/kimia + **SAP Platinum Partner** — contoh framing hati-hati: "Sebagai SAP Platinum Partner dengan pengalaman implementasi di industri manufaktur dan consumer products, Soltius membantu perusahaan menyetel aturan putaway berbasis hazard rating di SAP EWM agar sistem turut menegakkan segregasi — sementara kepatuhan hukum tetap menjadi tanggung jawab dan proses perizinan perusahaan."
**Opsional 1 mid-article aside (H2 #3)**: "dalam praktik implementasi EWM di gudang berisiko, aturan storage section/hazard rating disetel agar oksidator tak pernah ditempatkan di section yang sama dengan bahan mudah menyala."
Reminder: Soltius **mengimplementasikan/menyetel/mendukung** EWM — tidak membangunnya, dan **tidak menjamin kepatuhan hukum**. Maks 2–3 self-mention. Tanpa superlatif.

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **PP No. 22 Tahun 2021 & Permen LHK No. 6 Tahun 2021 (teks resmi)** — peraturan.go.id / JDIH KLHK (salinan terverifikasi mis. https://dinaspmptsp.pemalangkab.go.id/wp-content/uploads/PERMEN-LHK-6-2021.pdf) — *what it backs*: ruang lingkup pengelolaan limbah B3, batas waktu simpan TPS (90/180/365 hari), pelabelan/simbol, segregasi. **Sumber hukum primer — wajib untuk semua angka regulasi.**
2. **SAP Learning — "Configuring Direct Putaway" / "Receiving Goods in the Warehouse" (Basic Customizing in SAP S/4HANA EWM)** — https://learning.sap.com/courses/basic-customizing-in-sap-s-4hana-ewm/configuring-direct-putaway — *what it backs*: hazard rating sebagai parameter storage type/section determination pada putaway EWM. **Authority tertinggi untuk klaim EWM.**
3. **(Pendukung) Permenperin No. 87/2009 tentang GHS** — https://peraturan.go.id/files/bn309-2009.pdf — *what it backs*: adopsi GHS di Indonesia + elemen label/piktogram/SDS.
4. **(Opsional, EHS) SAP Blogs — "Environment, Health and Safety in SAP S/4HANA 2021"** — blogs.sap.com — *what it backs*: Dangerous Goods Management (ADR/IMDG/IATA) + SDS/label management.

Prioritas tautan keluar untuk writer: pakai **#1 (regulasi resmi)** + **#2 (SAP official)** sebagai dua sumber otoritatif wajib; #3/#4 sebagai penguat bila GHS/EHS dibahas.

## FAQ Q&As (7 drafted, Bahasa Indonesia — reuse PAA brief)

### Apa itu bahan berbahaya dan beracun (B3)?
Bahan berbahaya dan beracun (B3) adalah zat atau bahan yang karena sifat, konsentrasi, atau jumlahnya dapat membahayakan lingkungan hidup, kesehatan, serta kelangsungan hidup manusia dan makhluk lain. Menurut kerangka PP 22/2021, karakteristik B3 dan limbah B3 mencakup mudah meledak, mudah menyala, reaktif, infeksius, korosif, dan beracun. Contohnya pelarut, oksidator, asam-basa kuat, dan residu produksi kimia.

### Apa dasar hukum penyimpanan B3 di Indonesia?
Dasar hukum utamanya adalah PP No. 22 Tahun 2021 tentang Penyelenggaraan Perlindungan dan Pengelolaan Lingkungan Hidup, yang mengatur pengelolaan B3 dan limbah B3 dari penetapan hingga penimbunan. Rincian teknis penyimpanan sementara diatur lebih lanjut dalam Permen LHK No. 6 Tahun 2021, sementara klasifikasi dan pelabelan bahan kimia mengikuti GHS melalui Permenperin No. 87/2009 (diperbarui 23/2013).

### Berapa lama batas simpan limbah B3 di TPS?
Batasnya bergantung kategori dan volume, bukan satu angka. Limbah B3 yang dihasilkan 50 kg atau lebih per hari boleh disimpan maksimal 90 hari. Di bawah 50 kg per hari, limbah B3 kategori 1 maksimal 180 hari, sedangkan limbah B3 kategori 2 dari sumber tidak spesifik maupun spesifik umum, serta kategori 2 sumber spesifik khusus, boleh hingga 365 hari sebelum wajib diserahkan ke pihak berizin.

### Apa itu klasifikasi GHS?
GHS (Globally Harmonized System) adalah sistem global yang menyeragamkan cara mengklasifikasikan bahaya bahan kimia dan mengomunikasikannya lewat label dan Lembar Data Keselamatan (SDS/LDK). Di Indonesia, GHS diadopsi melalui Permenperin No. 87/2009 dan diperbarui lewat Permenperin No. 23/2013. Label GHS memuat piktogram bahaya, kata sinyal, pernyataan bahaya, dan pernyataan kehati-hatian — membantu petugas gudang mengenali risiko secara cepat dan seragam.

### Bagaimana WMS mencegah bahan inkompatibel disimpan berdekatan?
WMS modern seperti SAP EWM menyimpan atribut bahaya tiap bahan di master data, lalu memakainya saat menentukan lokasi penyimpanan. Dalam EWM, hazard rating menjadi parameter penentuan storage type dan storage section pada proses putaway, sehingga sistem mengarahkan oksidator, bahan mudah menyala, atau korosif ke zona yang sudah dipisahkan — dan mencegah penempatan di section yang tidak kompatibel. Aturannya ditegakkan otomatis, bukan bergantung ingatan operator.

### Apakah SAP EWM punya fitur untuk bahan berbahaya?
Ya. SAP Extended Warehouse Management membaca hazardous substance master data dan menggunakan Hazard Rating 1 dan 2 sebagai parameter dalam penentuan storage type dan storage section saat putaway. Untuk kepatuhan transport dan dokumen, SAP menyediakan modul terpisah — SAP EHS / SAP S/4HANA for product compliance — yang mengelola dangerous goods (ADR, IMDG, IATA) serta penerbitan Safety Data Sheet dan label. Keduanya saling melengkapi namun berbeda ranah.

### Apakah UMKM wajib punya sistem untuk mengelola B3?
Kewajiban hukumnya terletak pada pengelolaan yang benar — perizinan, TPS sesuai syarat, pelabelan, segregasi, dan pencatatan — bukan pada kepemilikan WMS tertentu. Untuk volume B3 kecil, kombinasi SOP ketat, logbook manual, dan tata letak yang benar bisa memadai. WMS menjadi relevan ketika jumlah SKU berbahaya, lokasi, dan frekuensi audit meningkat sehingga penegakan aturan secara manual mulai rawan salah dan sulit dibuktikan saat audit.

## Data tables for the writer

### Tabel inkompatibilitas/segregasi kimia (draft — PRAKTIK KESELAMATAN UMUM, bukan kutipan PP 22/2021)
| Golongan bahan | Jangan disimpan dekat dengan | Alasan singkat | Implikasi di gudang (zona/bin) |
|---|---|---|---|
| Oksidator (mis. nitrat, peroksida) | Mudah menyala, bahan organik, reduktor | Mempercepat/memicu kebakaran | Section terpisah, jauh dari zona flammable |
| Mudah menyala/pelarut | Oksidator, sumber panas/api, listrik statis | Risiko kebakaran/ledakan | Zona flammable berventilasi, grounding, jauh api |
| Asam kuat | Basa kuat, sianida, sulfida, logam reaktif | Reaksi hebat; gas beracun (HCN/H2S) | Section asam, secondary containment |
| Basa kuat | Asam kuat | Reaksi eksotermik | Section basa, terpisah dari asam |
| Reaktif-air (mis. logam alkali) | Air, bahan berair, asam | Reaksi melepas panas/gas mudah menyala | Zona kering, jauh dari sumber air/sprinkler air |
| Beracun/korosif | Bahan pangan, area kerja terbuka | Kontaminasi & paparan | Section tertutup, akses terbatas, berlabel GHS |

> Catatan writer: sajikan sebagai "prinsip keselamatan kimia (acuan OSHA/NFPA/CAMEO)", bukan sebagai lampiran regulasi. Perusahaan menyesuaikan matriks final dengan SDS tiap bahan.

### Batas waktu penyimpanan Limbah B3 di TPS (draft — angka resmi, wajib disertai sumber)
| Kategori / volume | Batas simpan maksimal | Dasar |
|---|---|---|
| Dihasilkan ≥ 50 kg/hari | 90 hari | PP 22/2021 (dirinci Permen LHK 6/2021) |
| Kategori 1, < 50 kg/hari | 180 hari | PP 22/2021 / Permen LHK 6/2021 |
| Kategori 2 — sumber tidak spesifik & spesifik umum | 365 hari | PP 22/2021 / Permen LHK 6/2021 |
| Kategori 2 — sumber spesifik khusus | 365 hari | PP 22/2021 / Permen LHK 6/2021 |

### Pembagian peran: EWM vs EHS/product compliance (draft)
| Kebutuhan | Modul SAP | Apa yang dilakukan |
|---|---|---|
| Penyimpanan & segregasi di dalam gudang | SAP EWM | Putaway berbasis hazard rating; storage type/section determination; hazardous substance master |
| Kepatuhan transport dangerous goods | SAP EHS — Dangerous Goods Management | Cek ADR/IMDG/IATA; dokumen & label transport |
| SDS/LDK & komunikasi bahaya | SAP EHS / product compliance | Pembuatan & distribusi Safety Data Sheet dan label |

## Edge cases & nuance

- **EWM ≠ EHS.** Kesalahan termudah: mengatakan "EWM menangani SDS dan kepatuhan ADR". Tidak. EWM mengurus di mana barang disimpan (putaway/segregasi); SDS, label, dan cek transport ADR/IMDG/IATA ada di SAP EHS / product compliance. Keduanya terhubung lewat master data, tapi beda ranah.
- **"WMS = kepatuhan" itu keliru.** Sistem hanya menegakkan aturan yang sudah benar dikonfigurasi. Izin TPS, pelatihan, APD, uji berkala, dan SOP tetap wajib dan manusiawi. Ini inti H2 #6 (jujur/counter-conventional): WMS mengurangi kesalahan manusia dan mempercepat pembuktian saat audit, bukan menggantikan sistem manajemen K3L.
- **Angka batas waktu rawan disalahsederhanakan.** Banyak sumber sekunder hanya menyebut "90 hari". Padahal 180/365 hari berlaku untuk volume kecil/kategori 2. Writer harus menyajikan keempat skenario, bukan satu.
- **Tabel inkompatibilitas bukan produk regulasi B3.** PP 22/2021 mewajibkan segregasi, tetapi matriks "apa vs apa" berasal dari ilmu keselamatan kimia (OSHA/NFPA/CAMEO) dan SDS tiap bahan — framing harus tepat agar tidak terkesan mengutip pasal yang tidak ada.
- **GHS vs kategori limbah B3.** GHS (Kemenperin) untuk bahan kimia/produk; kategori 1-2 & karakteristik (KLHK) untuk limbah B3. Satu gudang kimia bisa tunduk keduanya; jangan dicampur dalam satu kalimat seolah satu sistem.
- **Hazard rating EWM: nama field bisa beragam antar rilis** (embedded EWM di S/4HANA vs decentralized vs Cloud). Jelaskan fungsional ("parameter penentuan section"), jangan kunci nama transaksi/field persis.

## Flags (open factual risk)

- ⚠️ **Nomor Pasal persis untuk batas waktu TPS**: angka 90/180/365 hari & kondisinya TERKONFIRMASI, tetapi nomor Pasal (sering dirujuk Pasal 285 PP 22/2021) belum dibuka langsung dari teks resmi dalam run ini. → **Rekomendasi**: kutip angka + kategori dengan menyebut "PP 22/2021 dan Permen LHK 6/2021"; hindari menuliskan nomor Pasal spesifik kecuali writer membuka teks resminya.
- ⚠️ **Jumlah persis kelas bahaya GHS**: GHS membagi bahaya menjadi kelas fisik, kesehatan, dan lingkungan, namun jumlah persisnya bervariasi antar revisi GHS (dan versi yang diadopsi Indonesia). → **Rekomendasi**: tulis "kelas bahaya fisik, kesehatan, dan lingkungan" tanpa angka total, atau beri label "tergantung revisi GHS"; jangan klaim angka tunggal.
- ⚠️ **Matriks inkompatibilitas kimia**: bersumber dari panduan keselamatan umum (OSHA/NFPA/CAMEO), BUKAN dari PP 22/2021/Permen LHK 6/2021. → **Rekomendasi**: framing sebagai "praktik keselamatan kimia standar"; jangan atribusikan ke regulasi Indonesia.
- ⚠️ **Detail spesifikasi teknis TPS** (ukuran, jarak, material lantai, dsb.): disebut umum (pengendali kebocoran, ventilasi, jarak aman) tapi angka presisi tidak diverifikasi dalam run ini. → **Rekomendasi**: sebut kategori persyaratan secara kualitatif; jangan sebut angka jarak/ukuran pasti tanpa membuka pasal.
- ⚠️ **Nama field/transaksi EWM untuk hazard rating**: konsep (Hazard Rating 1 & 2 → storage type/section determination) terverifikasi; penamaan field persis bervariasi antar rilis. → **Rekomendasi**: jelaskan fungsional, hindari mengunci nama field/transaksi tunggal.
- ⚠️ **Payung penamaan "SAP EHS" vs "SAP S/4HANA for product compliance"**: SAP merapikan modul EHS/dangerous-goods/SDS ke bawah "product compliance" di S/4HANA. → **Rekomendasi**: sebut keduanya ("SAP EHS, kini di bawah SAP S/4HANA for product compliance"); jangan klaim satu nama sebagai satu-satunya yang benar.
- ⚠️ **Soltius & kepatuhan hukum**: Soltius mengimplementasikan EWM, BUKAN menjamin kepatuhan hukum klien. → **Rekomendasi**: closing menghindari frasa "menjamin kepatuhan"; gunakan "membantu sistem menegakkan aturan yang telah ditetapkan perusahaan".

## Definition snippet draft (40–60 words)

> **Gudang B3** adalah fasilitas penyimpanan khusus untuk bahan berbahaya dan beracun — zat yang mudah meledak, menyala, reaktif, korosif, infeksius, atau beracun — yang wajib memenuhi syarat teknis, pelabelan, dan segregasi menurut PP 22/2021 dan Permen LHK 6/2021. Berbeda dari gudang biasa, tata letak dan penempatannya diatur oleh karakteristik bahaya, bukan sekadar efisiensi ruang.
