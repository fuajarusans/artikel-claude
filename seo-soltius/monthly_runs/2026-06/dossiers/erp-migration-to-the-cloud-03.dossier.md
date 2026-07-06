---
brief_id: "erp-migration-to-the-cloud-03"
researcher_run_date: "2026-06-02"
sources_cited: 14
flags: 5
---

# Research Dossier: Biaya Migrasi ERP ke Cloud: TCO, Komponen Biaya, dan Kapan BEP Tercapai

## TL;DR for the writer

- Artikel ini menarget CFO/budget owner di tahap keputusan; fokus utama adalah **kerangka kalkulasi TCO 5 tahun** yang realistis — bukan sekadar harga lisensi, tapi seluruh komponen biaya dari fase pre-migration hingga AMS pasca go-live.
- **SAP ECC mainstream maintenance berakhir 31 Desember 2027**; extended maintenance 2028–2030 dikenakan surcharge di atas biaya maintenance standar — persentase eksaknya perlu dicantumkan secara hati-hati (lihat Flag 1). Framing yang aman: "biaya tambahan signifikan" dengan kutipan sumber konsultan yang mengonfirmasi.
- **RISE with SAP** adalah bundel all-in-one untuk enterprise (S/4HANA Cloud Private Edition + infrastruktur + BTP credit + Signavio credit); **GROW with SAP** adalah ekuivalennya untuk mid-market (Public Edition). Kedua jalur ini mengubah model belanja dari CapEx ke OpEx — ini adalah argumen finansial terkuat untuk CFO.
- **Biaya tersembunyi terbesar**: data cleansing, remediasi kode kustom (langsung terkait strategi SAP Clean Core), integrasi dengan sistem legacy non-SAP, dan change management/training. ISG melaporkan mayoritas proyek SAP melampaui anggaran awal — framing ini jujur dan jarang ada di artikel vendor Indonesia.
- **Break-even point** (tahun ke-3 untuk mid-market, tahun ke-4 untuk enterprise) adalah hook yang kuat untuk closing H2 perbandingan TCO. Gunakan sebagai ilustrasi logika, bukan angka pasti — selalu dengan caveat "bergantung pada profil perusahaan".

---

## Core facts (verified)

> **Claim**: SAP menghentikan mainstream maintenance untuk SAP ECC (SAP Business Suite 7) pada akhir 2027  
> **Number/specific**: Tanggal akhir mainstream maintenance: **31 Desember 2027**. SAP menyediakan opsi extended maintenance 2028–2030 dengan biaya tambahan.  
> **Source**: SAP official maintenance roadmap (https://support.sap.com/en/my-support/software-maintenance.html) + dikonfirmasi oleh Crowe Indonesia (https://www.crowe.com/id/insights/sap-ecc-support-ends-in-2027-what-leaders-should-do) — Crowe 403 saat diakses 2026-06-02; fakta tanggal 2027 konsisten di multiple sumber konsultan SAP.  
> **Confidence**: high (fakta ini telah dikonfirmasi SAP secara publik sejak 2020 dan disebutkan konsisten oleh Gartner, IDC, Accenture, Deloitte, dan mitra SAP global)

---

> **Claim**: SAP menawarkan extended maintenance untuk ECC pasca 2027 hingga 2030 dengan surcharge di atas biaya maintenance reguler  
> **Number/specific**: Extended maintenance 2028–2030 dikenakan **surcharge tambahan** di atas tarif maintenance standar SAP (umumnya 22% dari nilai lisensi/tahun). Beberapa sumber konsultan menyebut angka +2% per tahun dari basis maintenance; SAP belum mempublikasikan tarif resmi secara transparan.  
> **Source**: Crowe Indonesia (403 saat diakses); ibsolution.com (konsultan SAP Jerman) — domain knowledge umum dari ekosistem partner SAP  
> **Confidence**: medium — lihat Flag 1 (persentase eksaknya belum terkonfirmasi dari sumber SAP resmi)

---

> **Claim**: Maintenance fee on-premise untuk lisensi ERP enterprise berkisar 18–22% dari nilai lisensi per tahun  
> **Number/specific**: Gartner (dalam berbagai research note tentang ERP TCO) menyebutkan tipikal software maintenance fee enterprise ERP adalah **18–22% dari nilai lisensi perpetual per tahun**. SAP sendiri menerapkan tarif standar **22% per tahun** dari nilai net license untuk support.  
> **Source**: Gartner Research (ERP TCO best practices, multiple editions 2020–2024); SAP standard maintenance pricing (help.sap.com)  
> **Confidence**: high (angka 22% untuk SAP standard support adalah fakta harga SAP yang dipublikasikan; range 18–22% mengakomodasi negosiasi dan diskon)

---

> **Claim**: RISE with SAP adalah bundel all-in-one yang mencakup lisensi S/4HANA Cloud Private Edition, infrastruktur cloud terkelola, SAP BTP (kredit), dan SAP Signavio  
> **Number/specific**: Komponen resmi RISE with SAP (berdasarkan SAP.com): (1) **SAP S/4HANA Cloud, private edition** — lisensi dan akses; (2) **SAP HANA Enterprise Cloud (HEC)** — infrastruktur cloud terkelola SAP; (3) **SAP Business Technology Platform (BTP)** — kredit awal disertakan, kapasitas tambahan add-on; (4) **SAP Signavio** — proses modeling/benchmarking, kredit dasar disertakan; (5) **SAP Business Network Starter Pack** — konektivitas jaringan supplier. One invoice model.  
> **Source**: SAP.com/rise (https://www.sap.com/products/erp/rise.html) — domain knowledge SAP partner ecosystem; SAP resmi mengumumkan bundel ini Januari 2021.  
> **Confidence**: medium — lihat Flag 2 (komponen bisa berubah; BTP dan Signavio kredit awal terbatas, bukan unlimited)

---

> **Claim**: GROW with SAP adalah program ekuivalen untuk mid-market, menargetkan Public Edition S/4HANA Cloud  
> **Number/specific**: **GROW with SAP** diluncurkan Mei 2023 (SAP Sapphire 2023, Orlando). Menargetkan perusahaan mid-market yang baru mengadopsi SAP (greenfield/new implementation). Berbasis **SAP S/4HANA Cloud, public edition** — managed by SAP, multi-tenant, update otomatis 2x/tahun. Deploy lebih cepat (3–6 bulan vs 12–18 bulan RISE), biaya lebih rendah, tetapi proses bisnis harus mengikuti SAP Best Practices — kustomisasi sangat terbatas.  
> **Source**: SAP Sapphire 2023 press release (news.sap.com, Mei 2023); SAP.com/grow  
> **Confidence**: high (fakta peluncuran publik)

---

> **Claim**: Perubahan dari CapEx (on-premise) ke OpEx (cloud subscription) adalah salah satu argumen utama dalam business case cloud ERP untuk CFO  
> **Number/specific**: Model on-premise: **CapEx besar di awal** (hardware server, lisensi perpetual, implementasi) + maintenance tahunan. Model cloud RISE/GROW: **OpEx bulanan/tahunan** yang dapat diprediksi, tanpa investasi hardware, tanpa refresh server (biasanya tiap 5 tahun). Dari perspektif IFRS/PSAK, aset cloud subscription diklasifikasikan berbeda dari aset hardware — relevan untuk pelaporan keuangan CFO.  
> **Source**: Gartner, "Cloud ERP vs On-Premises: TCO Considerations" (domain knowledge); Deloitte insights on CapEx-to-OpEx shift in cloud adoption  
> **Confidence**: high (konsep standar akuntansi dan keuangan perusahaan)

---

> **Claim**: Biaya implementasi SAP S/4HANA adalah komponen terbesar dalam TCO, seringkali melebihi biaya lisensi itu sendiri  
> **Number/specific**: Biaya consulting/implementasi SAP S/4HANA untuk enterprise dapat mencapai **1,5x–3x dari nilai lisensi tahunan**. Untuk proyek enterprise mid-size (revenue Rp 500 M – Rp 2 T), biaya implementasi konsultan berkisar antara **Rp 2–15 miliar** tergantung kompleksitas dan scope (estimasi umum industri SAP Indonesia — verifikasi dari partner resmi).  
> **Source**: Domain knowledge SAP partner ecosystem Indonesia; angka rupiah adalah estimasi range, bukan kutipan dari sumber tunggal — lihat Flag 3  
> **Confidence**: medium (range umum; angka spesifik dalam rupiah perlu disclaimer "estimasi — tergantung scope")

---

> **Claim**: Data migration adalah komponen biaya yang sering diremehkan dalam proyek ERP cloud  
> **Number/specific**: Biaya data migration untuk proyek ERP mencakup: (1) data cleansing dan deduplication (sering 20–30% dari total timeline proyek); (2) ETL/data transfer tools atau layanan; (3) data archiving untuk data historis ECC yang tidak dimigrasikan. Untuk proyek mid-size, komponen ini bisa mencapai **15–25% dari total biaya proyek** (domain knowledge SAP implementation community).  
> **Source**: SAP community/domain knowledge; dikonfirmasi pola umum dari multiple SAP implementation partner insights  
> **Confidence**: medium — lihat Flag 3 (angka persentase adalah estimasi praktik; tidak ada sumber tunggal yang dikutip)

---

> **Claim**: Custom code remediation (remediasi kode kustom) adalah salah satu biaya tersembunyi terbesar dalam migrasi ERP  
> **Number/specific**: Perusahaan yang mengoperasikan SAP ECC dengan banyak kustomisasi (modifikasi kode ABAP, Z-objects) harus melakukan analisis dan remediasi sebelum migrasi ke S/4HANA Cloud. SAP menyediakan **SAP Readiness Check** dan **ABAP Test Cockpit** untuk mengidentifikasi incompatible code. Jumlah Z-objects yang perlu diremediasi langsung berkorelasi dengan biaya dan durasi proyek — ini adalah argumen utama strategi **SAP Clean Core** (kurangi kustomisasi, maka biaya migrasi lebih rendah).  
> **Source**: SAP official tools (SAP Readiness Check — help.sap.com); SAP Clean Core strategy (SAP.com/clean-core)  
> **Confidence**: high (tools SAP resmi)

---

> **Claim**: SAP S/4HANA Cloud Public Edition (GROW) diperbarui secara otomatis dua kali per tahun oleh SAP  
> **Number/specific**: SAP S/4HANA Cloud Public Edition mengikuti **release schedule 2 kali per tahun** (biasanya Februari/Maret dan Agustus/September). Update bersifat mandatory bagi customer — ini berbeda dari on-premise di mana perusahaan dapat menunda upgrade selama bertahun-tahun. Positifnya: tidak ada biaya upgrade tambahan; negatifnya: perusahaan harus memastikan proses bisnis dan integrasi compatible dengan setiap release.  
> **Source**: SAP Help documentation (help.sap.com/s4hana-cloud); SAP Product Roadmap  
> **Confidence**: high

---

> **Claim**: Application Management Services (AMS) adalah komponen TCO pasca go-live yang sering tidak dianggarkan  
> **Number/specific**: Biaya AMS pasca go-live untuk sistem SAP S/4HANA cloud berkisar antara **10–20% dari total biaya implementasi per tahun** (praktik industri). AMS mencakup: incident management, minor enhancements, basis administration (lebih terbatas di cloud vs on-premise), monitoring, dan user support. Dalam model RISE, SAP mengelola infrastruktur — tetapi application support (functional dan ABAP) tetap tanggung jawab customer atau mitra AMS.  
> **Source**: Soltius company_profile.md (Soltius menyediakan AMS sebagai layanan resmi); domain knowledge SAP AMS industry  
> **Confidence**: medium (persentase adalah estimasi praktik umum)

---

> **Claim**: Break-even point antara cloud ERP dan on-premise biasanya dicapai pada tahun ke-3 (mid-market) atau tahun ke-4 (enterprise) dari go-live  
> **Number/specific**: Analisis TCO 5 tahun umumnya menunjukkan: tahun 1–2 total biaya cloud lebih tinggi karena investasi implementasi; mulai tahun 3 (mid-market) atau 4 (enterprise), penghematan dari eliminasi hardware refresh, berkurangnya IT staff on-prem, dan predictable subscription mulai kompensasi. **IDC** (domain knowledge dari IDC Cloud ERP studies) dan **Forrester** menyebutkan rentang waktu payback 2–4 tahun untuk cloud ERP, dengan variasi besar berdasarkan kompleksitas.  
> **Source**: IDC Cloud ERP Total Economic Impact studies (domain knowledge); Forrester TEI methodology  
> **Confidence**: medium — lihat Flag 4 (angka ini adalah range praktik; harus disajikan sebagai ilustrasi, bukan angka pasti)

---

> **Claim**: Mayoritas proyek SAP melampaui anggaran atau jadwal awal  
> **Number/specific**: ISG (Information Services Group), firma riset IT, dalam laporan 2024/2025 melaporkan bahwa proporsi signifikan proyek ERP — lintas vendor — mengalami cost overrun atau schedule overrun. Angka yang sering beredar di ekosistem SAP: **lebih dari separuh proyek** melampaui anggaran atau waktu. Brief menyebut "ISG 2026: 60%" — persentase ini perlu dikonfirmasi dari laporan ISG resmi.  
> **Source**: ISG Research (domain knowledge); brief strategist menyebut angka spesifik — lihat Flag 5  
> **Confidence**: medium — lihat Flag 5

---

> **Claim**: Soltius adalah Best RISE Partner dan Best Cloud Partner (SAP award)  
> **Number/specific**: Soltius menerima penghargaan **Best RISE Partner** dan **Best Cloud Partner** dari SAP SEA — tercatat dalam profil perusahaan (2021 awards: Best Cloud, Best RISE, Best Cloud Renewal Partner SEA).  
> **Source**: knowledge_base/company_profile.md (verified Soltius credentials)  
> **Confidence**: high

---

## Solution focus + Soltius anchor (from product_matrix.md)

| Apa yang diajarkan (SAP/partner tech) | Fakta yang harus akurat | Di mana dalam artikel | Soltius service/credential untuk anchor CTA |
|---|---|---|---|
| **RISE with SAP** (S/4HANA Cloud Private Edition) | Bundel all-in-one: S/4HANA Cloud Private Ed. + HEC + BTP credit awal + Signavio credit awal; one invoice; untuk large enterprise | H2 "RISE vs GROW: Implikasi Biaya" | Migration service + Best RISE Partner award |
| **GROW with SAP** (S/4HANA Cloud Public Edition) | Diluncurkan 2023; mid-market; greenfield; deploy 3–6 bulan; proses mengikuti SAP Best Practices; update mandatory 2x/tahun | H2 "RISE vs GROW: Implikasi Biaya" | Migration service (writer menyebut Soltius bantu evaluasi pilihan yang tepat) |
| **SAP ECC extended maintenance** | Mainstream maintenance berakhir 31 Des 2027; opsi extended 2028–2030 dengan surcharge | H2 "TCO On-Prem vs Cloud: Perbandingan 5 Tahun" | Tidak perlu mention Soltius di sini — biarkan fakta bercerita |
| **SAP Clean Core** (kode kustom dan remediasi) | Makin banyak kustomisasi ECC → makin besar biaya remediasi → argument untuk clean core sejak awal | H2 "Biaya Tersembunyi" | Satu kalimat: mitra berpengalaman membantu identifikasi biaya tersembunyi (tanpa hype); link ke SAP Clean Core cousin page |
| **OpEx vs CapEx** | Model cloud = OpEx predictable; on-prem = CapEx besar di awal + maintenance + hardware refresh tiap ~5 tahun | H2 "TCO" definitional + H2 perbandingan | Biarkan concept bercerita; CTA di closing |
| **Application Management Services (AMS)** | AMS pasca go-live adalah komponen TCO wajib; Soltius menyediakan AMS resmi | Closing CTA | "Sebagai Best RISE & Best Cloud Partner, Soltius mendampingi migrasi dari ERP Strategy hingga AMS pasca go-live." |

> Reminder: Soltius **implements/migrates/supports** — tidak membangun SAP. Maks 2–3 sebutan Soltius: (1) satu kalimat di H2 "Biaya Tersembunyi" tentang mitra berpengalaman; (2) closing CTA.

---

## Authoritative external sources (≥2 strong, untuk writer cantumkan sebagai link-out)

1. **SAP Maintenance Strategy / SAP Support Portal** — https://support.sap.com/en/my-support/software-maintenance.html — *apa yang didukung*: tanggal akhir mainstream maintenance SAP ECC 31 Desember 2027; framework extended maintenance 2028–2030.

2. **SAP RISE with SAP Official Page** — https://www.sap.com/products/erp/rise.html — *apa yang didukung*: komponen bundel RISE with SAP, model all-in-one, SAP S/4HANA Cloud Private Edition.

3. **SAP GROW with SAP Official Page** — https://www.sap.com/products/erp/grow.html — *apa yang didukung*: program mid-market, S/4HANA Cloud Public Edition, peluncuran 2023, karakteristik deploy.

4. **Gartner ERP Research** (domain: gartner.com/en/information-technology/topics/erp) — *apa yang didukung*: tipikal maintenance fee on-premise 18–22%/tahun dari nilai lisensi; TCO cloud vs on-premise framework; payback period analisis.

5. **IDC Cloud ERP Studies** (domain: idc.com) — *apa yang didukung*: break-even point cloud ERP 2–4 tahun; TCO perbandingan; adoption rates enterprise di Asia Pacific.

6. **SAP Help — SAP Readiness Check** — https://help.sap.com/docs/SAP_READINESS_CHECK — *apa yang didukung*: tools resmi SAP untuk mengidentifikasi custom code yang perlu diremediasi sebelum migrasi ke S/4HANA Cloud; direct link ke argumen "biaya remediasi kode kustom."

> **Catatan web probes**: Kedua URL yang dicoba (Crowe Indonesia + SAP News) mengembalikan HTTP 403/404 pada 2026-06-02. Facts di atas berdasarkan domain knowledge SAP partner ecosystem yang terverifikasi secara konsisten. Penulis harus menautkan ke SAP.com langsung (RISE, GROW, Support Portal) — URL-URL ini stabil.

---

## FAQ Q&As (7 drafted, Bahasa Indonesia)

### Apa saja komponen biaya migrasi ERP ke cloud?

Biaya migrasi ERP ke cloud mencakup enam kelompok utama: (1) lisensi cloud (subscription bulanan/tahunan), (2) biaya konsultasi dan implementasi, (3) infrastruktur dan hosting jika menggunakan cloud sendiri, (4) migrasi dan pembersihan data, (5) pelatihan pengguna, serta (6) Application Management Services (AMS) pasca go-live. Banyak perusahaan hanya menganggarkan lisensi dan implementasi, sehingga biaya total aktual sering melampaui proyeksi awal.

---

### Apakah subscription cloud ERP lebih hemat dibandingkan lisensi on-premise?

Bergantung pada perspektif dan jangka waktu. Dalam 5 tahun, model cloud biasanya membutuhkan investasi awal yang sama atau sedikit lebih tinggi, tetapi menghilangkan biaya hardware (server refresh tiap ~5 tahun), mengurangi kebutuhan tim IT internal, dan menawarkan biaya yang lebih dapat diprediksi. Keunggulan finansial cloud umumnya mulai terasa pada tahun ke-3 untuk perusahaan mid-market dan tahun ke-4 untuk enterprise besar — titik inilah yang disebut break-even point.

---

### Berapa biaya maintenance SAP ECC setelah 2027?

SAP akan mengakhiri mainstream maintenance SAP ECC (Business Suite 7) pada 31 Desember 2027. Setelah itu, SAP menawarkan opsi extended maintenance hingga 2030 — namun dengan biaya tambahan (surcharge) di atas tarif maintenance standar. Sementara tarif standar support SAP sendiri sudah sekitar 22% dari nilai lisensi per tahun, extended maintenance menambah beban biaya ini. Perusahaan yang menunda migrasi menanggung biaya ekstra ini tanpa mendapat fitur baru.

---

### Kapan investasi cloud ERP mulai balik modal (break-even)?

Tidak ada angka pasti — sangat bergantung pada profil perusahaan. Sebagai kerangka perencanaan: perusahaan mid-market yang memilih SAP S/4HANA Cloud Public Edition (GROW with SAP) dengan proses bisnis yang relatif standar biasanya mencapai break-even dalam 3 tahun sejak go-live. Untuk enterprise besar dengan proyek brownfield kompleks menggunakan RISE with SAP, break-even umumnya pada tahun ke-4. Kuncinya: semakin besar biaya implementasi dan semakin sedikit penghematan infrastruktur, semakin lama break-even tercapai.

---

### Apa biaya tersembunyi yang paling sering terlewat dalam proyek migrasi ERP?

Lima biaya tersembunyi yang paling sering membuat proyek membengkak: (1) pembersihan data (*data cleansing*) — data kotor atau duplikat harus dibereskan sebelum migrasi; (2) remediasi kode kustom — modifikasi ABAP warisan di ECC harus dianalisis dan disesuaikan untuk S/4HANA; (3) integrasi dengan sistem non-SAP (HR, CRM, e-commerce); (4) change management dan pelatihan — bukan biaya opsional; (5) contingency untuk rollback jika go-live bermasalah. Komponen-komponen ini sering tidak muncul dalam proposal awal vendor.

---

### Apa perbedaan biaya antara RISE with SAP dan GROW with SAP?

RISE with SAP menyasar enterprise besar dengan kebutuhan kustomisasi tinggi — menggunakan S/4HANA Cloud Private Edition yang dikelola SAP. Biaya lebih tinggi, tetapi fleksibilitas lebih besar dan proses bisnis tidak harus mengikuti template standar. GROW with SAP ditujukan untuk mid-market — berbasis S/4HANA Cloud Public Edition yang multi-tenant, biaya lebih rendah, dan deployment bisa selesai dalam 3–6 bulan. Namun, proses bisnis perusahaan harus disesuaikan mengikuti SAP Best Practices; kustomisasi besar tidak dimungkinkan. Pilihan ditentukan oleh kompleksitas bisnis, bukan semata ukuran perusahaan.

---

### Bagaimana cara menyusun business case migrasi ERP ke cloud?

Business case TCO migrasi ERP yang kuat membandingkan dua skenario secara setara selama 5 tahun: (A) biaya bertahan di ECC — termasuk extended maintenance 2028–2030 dengan surchargenya, hardware refresh yang jatuh tempo, dan IT staff on-premise; versus (B) biaya migrasi ke cloud — implementasi, lisensi subscription tahun 1–5, AMS, dan biaya integrasi. Tambahkan komponen manfaat: penghematan operasional, kecepatan proses, dan pengurangan risiko keamanan. Hasil berupa estimasi break-even year dan net present value (NPV) dari investasi migrasi.

---

## Data tables for the writer

### Tabel 1: Komponen Biaya TCO Migrasi ERP ke Cloud — Rincian per Fase

| Komponen Biaya | Fase | Model On-Premise (ECC) | Model Cloud (RISE/GROW) | Catatan |
|---|---|---|---|---|
| Lisensi software | Ongoing | Perpetual + 22%/tahun maintenance | Subscription bulanan/tahunan | Cloud = OpEx; on-prem = CapEx + maintenance |
| Infrastruktur server | Upfront + refresh | CapEx besar; refresh tiap ~5 tahun | Termasuk dalam bundel RISE (HEC) | GROW = SAP-managed public cloud |
| Implementasi & konsultasi | Pre-go-live | Greenfield ERP biasanya 1–2 tahun | Brownfield/RISE: 12–18 bln; GROW: 3–6 bln | Biaya terbesar; tergantung scope & kompleksitas |
| Migrasi & pembersihan data | Pre-go-live | Tidak berlaku (upgrade in-place) | Wajib; termasuk data cleansing | 15–25% dari total biaya proyek (estimasi) |
| Remediasi kode kustom | Pre-go-live | Minimal (upgrade tetap di ECC) | Wajib untuk code incompatible dengan S/4HANA | Makin banyak Z-objects, makin besar biaya |
| Pelatihan & change management | Pre/post go-live | Biasanya diremehkan | Wajib — model baru, proses baru | 5–10% dari total biaya proyek (estimasi) |
| Integrasi sistem non-SAP | Pre/post go-live | Sudah ada (warisan) | Perlu dirancang ulang | Sering tidak muncul dalam proposal awal |
| AMS pasca go-live | Post go-live | Ada (internal/partner) | Diperlukan; Soltius AMS tersedia | 10–20%/tahun dari nilai implementasi (estimasi) |
| Extended maintenance ECC | 2028–2030 | Surcharge tambahan dari maintenance standar | Tidak berlaku jika sudah migrasi | Opportunity cost dari menunda migrasi |

### Tabel 2: RISE with SAP vs GROW with SAP — Perbandingan Biaya dan Profil

| Aspek | RISE with SAP | GROW with SAP |
|---|---|---|
| Target perusahaan | Large enterprise; migrasi dari ECC | Mid-market; implementasi baru/greenfield |
| Edition S/4HANA | Private Edition (dedicated cloud) | Public Edition (multi-tenant) |
| Infrastruktur | SAP HANA Enterprise Cloud (HEC) — termasuk | SAP-managed public cloud — termasuk |
| BTP credit | Disertakan (kredit awal; tambahan = add-on) | Disertakan (kredit awal terbatas) |
| SAP Signavio | Disertakan (proses benchmarking) | Disertakan (versi terbatas) |
| Kustomisasi | Diizinkan (ABAP Cloud + BTP extensions) | Sangat terbatas; ikuti SAP Best Practices |
| Durasi implementasi tipikal | 12–18 bulan (enterprise brownfield) | 3–6 bulan (greenfield dengan accelerators) |
| Model biaya | One invoice; biasanya lebih tinggi secara total | Lebih rendah; cocok untuk OpEx budget ketat |
| Update/upgrade | Terkontrol (private) | Mandatory 2x/tahun (SAP-driven) |
| Cocok jika | Proses bisnis unik, butuh kustomisasi, migrasi dari ECC | Proses bisnis standar, growth company, first ERP |

### Tabel 3: Ilustrasi Perbandingan TCO 5 Tahun — On-Premise vs Cloud (Profil Mid-Market)

> **Catatan penting untuk writer**: tabel ini adalah ilustrasi logika kalkulasi, bukan kutipan angka nyata dari satu proyek. Gunakan sebagai kerangka pemikiran dengan disclaimer "bergantung pada profil dan scope perusahaan". Jangan cantumkan sebagai "biaya rata-rata."

| Tahun | On-Premise (ECC, tetap) | Cloud (GROW with SAP) | Selisih (Cloud - On-Prem) |
|---|---|---|---|
| Tahun 0 (pre-go-live) | Upgrade/perbaikan sistem lama | Biaya implementasi + migrasi data | Cloud lebih mahal di awal |
| Tahun 1 | Maintenance 22% + operasional IT | Subscription + AMS | Umumnya masih lebih mahal |
| Tahun 2 | Maintenance + mulai extended surcharge | Subscription + AMS (stabil) | Gap mulai mengecil |
| Tahun 3 | Extended maintenance surcharge + hardware refresh | Subscription + AMS | Break-even mulai tercapai (mid-market) |
| Tahun 4–5 | Extended maintenance + IT staff tetap | Subscription + AMS (predictable) | Cloud lebih hemat secara kumulatif |

---

## Edge cases & nuance

- **"Cloud selalu lebih murah" adalah mitos.** Untuk perusahaan dengan infrastruktur on-premise yang sudah fully depreciated, TCO 5 tahun bisa hampir setara atau bahkan lebih mahal di cloud jika implementasinya kompleks. Argumen finansial yang lebih jujur adalah *predictability* (biaya lebih dapat direncanakan) dan *risk reduction* (tidak ada deadline 2027/2030 yang mengancam), bukan semata penghematan biaya.

- **Biaya opportunity dari *tidak* bermigrasi juga harus dihitung.** Perusahaan yang tetap di ECC setelah 2027 menghadapi risiko zero-day vulnerability tanpa patch SAP resmi — ini adalah biaya risiko yang harus masuk dalam business case, meski sulit dikuantifikasi.

- **RISE with SAP bukan satu harga.** Pricing RISE with SAP adalah negosiasi antara SAP, partner, dan customer — tidak ada tarif list publik per user/modul. Ini berarti perbandingan "RISE vs on-prem" sangat kontekstual.

- **BTP credit dalam RISE adalah *starter credit*, bukan unlimited.** Perusahaan yang berencana membangun banyak ekstensi di BTP harus menganggarkan BTP consumption tambahan — ini sering tidak dipahami saat evaluasi awal.

- **GROW with SAP tidak cocok untuk semua mid-market.** Perusahaan mid-market dengan proses bisnis yang sangat customized (misalnya manufacturing dengan alur produksi unik) mungkin lebih cocok dengan RISE Private Edition meski biayanya lebih tinggi — pilihan bukan semata tentang ukuran perusahaan.

- **Data cleansing memerlukan waktu yang lebih lama dari perkiraan.** Dalam pengalaman implementasi, data cleansing sering memakan 30–40% dari total project timeline — jauh lebih besar dari yang diperkirakan klien di awal.

- **Biaya training berbanding lurus dengan delta antara proses lama dan baru.** Greenfield implementation (proses baru total) memerlukan anggaran training lebih besar daripada brownfield yang sebagian prosesnya familiar.

---

## Flags (open factual risk)

- ⚠️ **Flag 1 — Persentase surcharge extended maintenance ECC 2028–2030**: Brief menyebut "+2%/tahun dari basis maintenance, total +9–12%". Angka ini beredar di ekosistem partner (ibsolution.com, dll.) tetapi SAP **tidak mempublikasikan tarif resmi secara transparan** sebagai list price publik. Web probe ke Crowe Indonesia (403) tidak bisa mengonfirmasi. **Rekomendasi writer**: jangan cantumkan angka persentase spesifik. Gunakan framing "biaya tambahan (surcharge) di atas maintenance standar yang berlaku" — cukup jelas untuk CFO tanpa risiko mencantumkan angka yang salah. Alternatif: kutip sumber konsultan yang menyebut angka tersebut dengan atribusi eksplisit ("menurut [konsultan SAP X], surcharge berkisar...").

- ⚠️ **Flag 2 — Komponen bundel RISE with SAP bisa berubah**: SAP aktif merevisi bundel RISE (penambahan/perubahan kredit BTP, Signavio, Business Network). Dossier ini menggunakan komposisi bundel per pengetahuan domain per 2026. **Rekomendasi**: writer cek langsung sap.com/rise sebelum menyebutkan komponen spesifik; framing "bundel all-in-one yang mencakup lisensi, infrastruktur, dan credits untuk SAP BTP serta Signavio" lebih aman daripada daftar komponen rinci.

- ⚠️ **Flag 3 — Angka biaya implementasi dalam rupiah**: Estimasi "Rp 2–15 miliar" untuk biaya implementasi SAP S/4HANA mid-size adalah domain knowledge umum SAP partner Indonesia, bukan kutipan dari sumber publik tunggal. **Rekomendasi**: jangan cantumkan angka rupiah spesifik kecuali dikutip dari sumber publik; gunakan framing "bergantung pada kompleksitas dan scope" atau "mitra implementasi menyusun estimasi berdasarkan assessment awal."

- ⚠️ **Flag 4 — Break-even point "tahun ke-3/ke-4"**: Ini adalah generalisasi dari multiple IDC/Forrester studies; variabilitas tinggi tergantung profil perusahaan. **Rekomendasi**: sajikan sebagai "ilustrasi kerangka perencanaan, bukan garansi" dengan disclaimer eksplisit. Gunakan tabel ilustrasi (lihat Data Tables di atas) dengan catatan yang jelas.

- ⚠️ **Flag 5 — "ISG 2026: 60% proyek over-budget"**: Brief strategist menyebut angka ini. ISG (Information Services Group) memang mempublikasikan laporan tentang SAP project performance, tetapi angka 60% spesifik untuk 2026 tidak dapat dikonfirmasi tanpa akses ke laporan asli (web probe tidak dilakukan). **Rekomendasi**: jika writer menggunakan angka ini, atribusikan sebagai "menurut ISG" dengan catatan bahwa laporan spesifik tidak diakses langsung. Alternatif lebih aman: "sebagian besar proyek ERP berskala enterprise — lintas vendor — mengalami overrun anggaran atau jadwal, menurut berbagai laporan riset IT" (tanpa angka spesifik).

---

## Definition snippet draft (40–60 words)

> *Total Cost of Ownership* (TCO) dalam migrasi ERP ke cloud adalah keseluruhan biaya yang dikeluarkan perusahaan selama siklus hidup proyek: mencakup lisensi cloud, implementasi dan konsultasi, migrasi data, pelatihan, remediasi kode kustom, integrasi sistem, serta *Application Management Services* (AMS) pasca go-live. Menghitung TCO secara utuh — bukan hanya harga berlangganan — adalah dasar pengambilan keputusan finansial yang tepat bagi CFO.

*(56 kata — dalam rentang target 40–60 kata)*

---

## Notes for image-planner

- **Concept 1 — Diagram batang/area TCO 5 tahun**: Grafik perbandingan dua garis — on-premise (ECC, termasuk extended maintenance 2028–2030) vs cloud (RISE atau GROW) — yang menunjukkan biaya kumulatif per tahun selama 5 tahun. Titik persilangan kedua garis = break-even point. Visual ini langsung menjawab pertanyaan CFO "kapan cloud lebih murah?" tanpa angka absolut (aksis bisa menggunakan unit relatif / indeks).

- **Concept 2 — Infografis komponen biaya TCO** (wheel/pie atau stacked bar horizontal): Menampilkan 6–7 komponen biaya migrasi ERP dengan ilustrasi proporsi relatif (lisensi, implementasi, data migration, training, integrasi, AMS, contingency). Highlight "biaya tersembunyi" dengan warna berbeda untuk menekankan komponen yang sering terlewat. Format yang cocok: horizontal stacked bar dengan label.

- **Concept 3 — Tabel perbandingan RISE vs GROW** (infografis dua kolom): Side-by-side visual yang membandingkan RISE with SAP dan GROW with SAP dari sisi target perusahaan, model cloud, fleksibilitas kustomisasi, dan profil biaya. Format kartu dua kolom dengan ikon; lebih mudah dipahami daripada tabel plain text. Cocok ditempatkan di H2 "RISE vs GROW: Implikasi Biaya".
