---
brief_id: "sap-clean-core-01"
researcher_run_date: "2026-10-07"
sources_cited: 11
flags: 6
---

# Research Dossier: GROW with SAP — Keuntungan Clean Core bagi Perusahaan Menengah yang Baru Adopsi SAP

## TL;DR for the writer

- **Thesis holds and is defensible.** GROW with SAP = paket cloud-ERP untuk perusahaan menengah yang dibangun di atas **SAP S/4HANA Cloud Public Edition**, dengan **best practice industri preconfigured**, metodologi **SAP Activate** (fit-to-standard), dan ekstensi di **SAP BTP**. Karena Public Edition secara teknis **tidak memberi akses untuk memodifikasi core** (hanya released API/extension point yang stabil), clean core memang jadi *default arsitektur*, bukan pilihan — jadi adopter baru benar-benar "start clean", bukan "get clean". Ini terverifikasi, bukan klaim marketing kosong.
- **Clean core punya 5 dimensi resmi SAP**: Processes, Extensibility/Extensions, Data, Integrations, Operations. Gunakan ini untuk mendefinisikan clean core secara presisi (hindari menyebut "lima dimensi" salah urut).
- **Angka yang boleh dipakai, dengan label**: go-live "4–8 minggu" = **klaim vendor** (SAP "as little as four weeks"; ASUG "four to eight weeks") — labeli sebagai klaim, bukan janji. Biaya refactor off-core **US$500 ribu–3 juta** (sumber non-SAP, redresscompliance) = pakai HANYA sebagai **kontras**: itu beban yang TIDAK ditanggung adopter baru. Deadline ECC: mainstream **31 Des 2027**, extended berbayar **hingga 31 Des 2030** (EHP 6/7/8) — relevan untuk framing "kenapa mulai bersih sekarang".
- **Batas extensibility Public Edition yang akurat**: key-user in-app extensibility (ABAP for Key Users) + side-by-side di BTP (ABAP Environment/"Steampunk") + developer extensibility — **semua lewat released API, tidak boleh modifikasi core**, upgrade-stable. Jangan menulis "tidak bisa dikustomisasi sama sekali" (salah); tulis "dikustomisasi lewat jalur yang tidak menyentuh core".
- **GROW (Public) vs RISE (Private)**: GROW = net-new/mid-market, standar, cepat, SKU terstruktur; RISE = existing SAP customer / transformasi besar & kompleks, Private Edition lebih fleksibel. Pakai ini untuk H2 #5 (kapan BELUM cocok) dan FAQ.

## Core facts (verified)

> **Claim**: GROW with SAP adalah offering cloud-ERP SAP untuk perusahaan menengah (midsize), dibangun di atas SAP S/4HANA Cloud Public Edition dengan best practice preconfigured, layanan adopsi terakselerasi, komunitas ahli, dan sumber belajar gratis.
> **Number/specific**: Diperkenalkan Maret 2023; menargetkan "midsize customers" dan "net new names"; menjanjikan go-live "in as little as four weeks".
> **Source**: SAP, "GROW with SAP Brings Proven Cloud ERP Benefits to Midsize Customers", news.sap.com, 2023-03 (diakses 2026-10-07)
> **Confidence**: high

> **Claim**: Komponen inti GROW with SAP mencakup SAP S/4HANA Cloud Public Edition + best practice industri yang preconfigured + metodologi SAP Activate + ekstensibilitas via SAP BTP; SAP kini juga memposisikan asisten AI **Joule** tertanam di dalamnya.
> **Number/specific**: Preconfigured best practices untuk finance, supply chain, dan HR "embedded from day one"; BTP untuk extensibility; Joule disematkan lintas workflow.
> **Source**: SAP, "What is SAP GROW" (sap.com/products/erp/grow) + news.sap.com GROW coverage, diakses 2026-10-07
> **Confidence**: high (lihat Flag SuccessFactors untuk cakupan HCM)

> **Claim**: Clean core menurut SAP adalah sistem yang tetap dekat ke standar, menjaga master data berkualitas tinggi dan desain proses optimal, serta mendukung ekstensi dan integrasi yang cloud-compliant — sehingga sistem mudah beradaptasi dan mudah mengadopsi kapabilitas baru (upgrade-safe).
> **Number/specific**: Definisi SAP menegaskan "adheres closely to standards … supporting cloud-compliant extensions and integrations".
> **Source**: SAP, "What is a clean core?" (sap.com/resources) + SAP RISE clean-core methodology page (sap.com/products/erp/rise/methodology/clean-core), diakses 2026-10-07
> **Confidence**: high

> **Claim**: Clean core SAP terdiri dari **lima dimensi**: Processes (proses), Extensibility/Extensions (ekstensi), Data, Integrations (integrasi), dan Operations (operasi).
> **Number/specific**: 5 dimensi; ekstensi "clean" dipisah dari core via released API; proses "clean" sedekat mungkin ke SAP standard.
> **Source**: SAP Learning, "Exploring the Clean Core Concept"; community.sap.com clean-core posts, diakses 2026-10-07
> **Confidence**: high

> **Claim**: SAP S/4HANA Cloud Public Edition menerapkan model extensibility yang upgrade-stable, yang **memisahkan kode SAP dari ekstensi secara mandatory** lewat released API dan extension point publik — sehingga core tidak bisa dimodifikasi langsung.
> **Number/specific**: Tiga opsi: key-user in-app extensibility (ABAP for Key Users), side-by-side di SAP BTP (ABAP Environment / "Steampunk"), dan developer extensibility — semua hanya memakai released SAP API/extension point yang stabil.
> **Source**: SAP, "Extensibility Approaches in SAP S/4HANA Cloud Public Edition", community.sap.com, diakses 2026-10-07
> **Confidence**: high

> **Claim**: Perbedaan inti GROW vs RISE: GROW ditujukan untuk perusahaan yang tumbuh dan **baru di SAP** (net-new), memakai S/4HANA Cloud **Public Edition**, leaner dan lebih prediktabel; RISE ditujukan terutama untuk **existing SAP customer** dalam transformasi besar/kompleks, dengan opsi S/4HANA Cloud **Private Edition** yang lebih fleksibel.
> **Number/specific**: GROW = Public Edition, SKU terstruktur, mid-size & net-new; RISE = Private Edition opsi, tailored, migrasi dari on-premise.
> **Source**: SAP Community, "'GROW with SAP' and 'RISE with SAP Cloud Public Edition' — the differences"; SAP Learning "Exploring the Strategy Updates for RISE with SAP and SAP GROW", diakses 2026-10-07
> **Confidence**: high

> **Claim**: SAP ECC (SAP ERP 6.0) dengan Enhancement Package 6/7/8 masih mendapat **mainstream maintenance hingga 31 Desember 2027**, dengan opsi **extended maintenance berbayar hingga 31 Desember 2030**.
> **Number/specific**: Mainstream berakhir 31-12-2027; extended 01-01-2028 s/d 31-12-2030 (perlu addendum kontrak + biaya tambahan). EHP 1–5 / tanpa EHP: mainstream sudah berakhir 31-12-2025 (kini customer-specific maintenance).
> **Source**: SAP Community, "Maintenance Timelines for SAP ERP 6.0 ('ECC')" + support.sap.com maintenance strategy, diakses 2026-10-07
> **Confidence**: high

> **Claim**: SAP telah menyatakan komitmen inovasi untuk SAP S/4HANA hingga akhir **2040**.
> **Number/specific**: Innovation commitment s/d 2040 — konteks: jalur cloud/S/4HANA adalah tujuan jangka panjang, bukan extended maintenance.
> **Source**: SAP Community (maintenance timeline post) merujuk komitmen S/4HANA 2040, diakses 2026-10-07
> **Confidence**: medium (konfirmasi via SAP official bila dipakai sebagai angka utama)

> **Claim**: SAP memakai **model maturity Clean Core Level A–D** untuk mengklasifikasi ekstensi berdasarkan kepatuhan terhadap standar upgrade-stability.
> **Number/specific**: Level A = released API, didukung penuh SAP; Level B = classic API/teknologi klasik; Level C = akses objek internal (risiko terkelola); Level D = objek not-recommended (risiko tertinggi, technical debt). Menggantikan model 3-tier lama (Tier 1 ABAP Cloud, Tier 2 cloud API enablement, Tier 3 classical).
> **Source**: SAP Community, "Getting to a Clean Core — the new maturity model of extensions into four distinct levels (A,B,C,D)" + "ABAP Extensibility Guide – Clean Core (Aug 2025)", diakses 2026-10-07
> **Confidence**: high (untuk Public Edition, ekstensi praktis berada di Level A karena hanya released API yang tersedia)

> **Claim**: Metodologi implementasi SAP Activate menempatkan **fit-to-standard** sebagai inti: pada fase **Explore**, tim melakukan fit-to-standard analysis atas proses preconfigured, mengidentifikasi gap, dan menentukan ekstensi yang diperlukan.
> **Number/specific**: Fase SAP Activate: Discover, Prepare, Explore (workshop fit-to-standard), Realize, Deploy, Run. Workshop memakai Business-Driven Configuration Questionnaire (BDCQ); requirement dicatat di SAP Cloud ALM.
> **Source**: SAP Learning, "Providing an Overview of the Fit-to-Standard Analysis Process" + "Conducting Fit-to-Standard Workshops", diakses 2026-10-07
> **Confidence**: high

> **Claim**: **SAP Central Business Configuration (CBC)** adalah tool untuk mengonfigurasi proses bisnis S/4HANA Cloud Public Edition dari satu tempat terpusat; berjalan di atas SAP BTP dan terhubung ke tenant starter/development pelanggan.
> **Number/specific**: CBC mendukung konfigurasi S/4HANA Cloud Public Edition; berjalan di SAP BTP; mendukung implementasi end-to-end lintas portofolio cloud SAP.
> **Source**: SAP Community topic page "SAP Central Business Configuration" + help.sap.com CBC Overview, diakses 2026-10-07
> **Confidence**: high

> **Claim**: GROW with SAP dirancang membantu pelanggan "up and running" dalam **4–8 minggu** (empat sampai delapan minggu).
> **Number/specific**: ASUG: "get up and running within four to eight weeks"; SAP: "go live in as little as four weeks". **Ini klaim vendor/target, bukan jaminan**; durasi riil bergantung scope & kesiapan data.
> **Source**: ASUG, "Get to Know GROW with SAP" + SAP grow.html, diakses 2026-10-07
> **Confidence**: medium (klaim vendor — labeli eksplisit; lihat Flags)

> **Claim**: GROW with SAP memakai **fit-to-standard**: proses dipetakan ke best practice industri bawaan, bukan dikustomisasi — SAP memposisikan ini sebagai cara menurunkan barrier adopsi ERP bagi perusahaan tumbuh, dengan extensibility dibangun di BTP seiring pertumbuhan.
> **Number/specific**: ASUG mengutip "we map them to the best practices in their industries" dan "lower the barrier of entry for ERP for growing companies".
> **Source**: ASUG, "Get to Know GROW with SAP", diakses 2026-10-07
> **Confidence**: high

> **Claim (KONTRAS, sumber non-SAP)**: Untuk pelanggan ECC lama dengan kustomisasi berat, usaha memindahkan kustomisasi off-core (ke BTP) diperkirakan menelan biaya **US$500 ribu–3 juta** tergantung cakupan kustomisasi, plus biaya BTP tahunan untuk hosting ekstensi side-by-side pada skala enterprise.
> **Number/specific**: US$500k–3jt (refactoring off-core). **Pakai sebagai KONTRAS**: justru beban inilah yang TIDAK ditanggung adopter baru lewat GROW.
> **Source**: Redress Compliance, "What SAP's Clean Core Strategy Actually Requires" (redresscompliance.com) — **sumber konsultansi/non-SAP, bukan otoritatif untuk fakta produk SAP**; gunakan hanya sebagai ilustrasi biaya skenario besar, bukan angka resmi SAP.
> **Confidence**: low–medium (angka estimasi industri, bukan SAP official — attribusikan jelas atau sajikan sebagai rentang ilustratif)

> **Claim (konteks pasar Indonesia)**: Di Indonesia, adopsi cloud di perusahaan menengah terus naik — survei menunjukkan **73% perusahaan yang belum memakai software berbasis cloud berencana mengadopsinya dalam dua tahun ke depan**, dan **65% perusahaan menengah–besar di kota besar sadar transformasi digital meningkatkan efektivitas & efisiensi bisnis**.
> **Number/specific**: 73% rencana adopsi cloud ≤2 tahun; 65% awareness manfaat transformasi digital.
> **Source**: The Jakarta Post (riset, 2024-09, "52% of Indonesian companies see improved effectivity with cloud-based software"), diakses 2026-10-07 — sajikan sebagai konteks, atribusikan surveinya.
> **Confidence**: medium (sumber media + riset pihak ketiga; konteks, bukan klaim produk)

## Solution focus + Soltius anchor (from product_matrix.md)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| **GROW with SAP** (offering mid-market) | Paket S/4HANA Cloud Public Edition + best practice preconfigured + SAP Activate + BTP; go-live 4–8 minggu (klaim vendor); untuk net-new/midsize | H2 #1 (definisi), lead | — |
| **SAP S/4HANA Cloud Public Edition** | Multi-tenant SaaS; core tidak bisa dimodifikasi; upgrade dikelola SAP | H2 #1–#2 | — |
| **Clean core (5 dimensi) + "start clean"** | Processes/Extensibility/Data/Integrations/Operations; adopter baru tanpa Z-code warisan | H2 #2 | — |
| **Fit-to-standard + SAP Activate + Central Business Configuration** | Fase Explore, workshop fit-to-standard, konfigurasi via CBC di BTP | H2 #3 (tabel) | Aside singkat: disiplin fit-to-standard = change management, bukan teknologi |
| **Extensibility Public Edition (key-user in-app + side-by-side BTP/SAP Build) + Clean Core Levels A–D** | Hanya released API; modifikasi core tidak diizinkan; ekstensi praktis di Level A | H2 #4 (daftar) | — |
| **GROW (Public) vs RISE (Private) / SAP Business One** | Kapan Private Edition / B1 lebih tepat (proses sangat unik, kontrol penuh, integrasi legacy berat) | H2 #5 | — |
| **Soltius anchor** | SAP Platinum Partner via United VARs; pengalaman mid-market termasuk SAP Business One; ERP Strategy + Implementation + Enhancement | **Closing CTA** | "Sebagai SAP Platinum Partner via United VARs dengan pengalaman mid-market (termasuk SAP Business One), Soltius membantu perusahaan menengah memilih jalur adopsi (GROW/Public Edition vs RISE/Private vs B1) dan menjaga implementasi tetap fit-to-standard." |

Reminder: Soltius **implements/migrates/supports** — tidak membangun SAP. Maks 2–3 self-mention; 1 closing + maksimum 1 aside (H2 #3).

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **SAP — "What is a clean core?" / RISE clean-core methodology** — https://www.sap.com/resources/what-is-a-clean-core (dan https://www.sap.com/products/erp/rise/methodology/clean-core.html) — *what it backs*: definisi resmi clean core + lima dimensi; ekstensi via released API; keep-the-core-standard.
2. **SAP — "GROW with SAP Brings Proven Cloud ERP Benefits to Midsize Customers"** — https://news.sap.com/2023/03/grow-with-sap-proven-cloud-erp-midsize-customers/ — *what it backs*: definisi & posisi GROW untuk midsize, go-live cepat, best practice preconfigured.
3. **ASUG — "Get to Know GROW with SAP"** — https://asug.com/insights/get-to-know-grow-with-sap — *what it backs*: rentang go-live 4–8 minggu, fit-to-standard, extensibility di BTP (sumber komunitas pengguna SAP, bukan SAP sendiri — cocok sebagai second source).
4. **SAP Community — "Maintenance Timelines for SAP ERP 6.0 ('ECC')"** — https://community.sap.com/t5/enterprise-resource-planning-blog-posts-by-sap/maintenance-timelines-for-sap-erp-6-0-quot-ecc-quot/ba-p/13524564 — *what it backs*: deadline ECC 2027/2030.
5. **SAP Community — "Extensibility Approaches in SAP S/4HANA Cloud Public Edition"** — https://community.sap.com/t5/technology-blog-posts-by-sap/extensibility-approaches-in-sap-s-4hana-cloud-public-edition/ba-p/13793885 — *what it backs*: batas extensibility Public Edition (key-user, side-by-side, released API, no core mod).

Priority order terpenuhi: SAP official > ASUG (user group) > community.sap.com (SAP-authored). Redress Compliance & Jakarta Post = sumber pendukung non-otoritatif untuk produk; atribusikan, jangan jadikan fakta produk SAP.

## FAQ Q&As (7 drafted, Bahasa Indonesia)

### Apakah GROW with SAP mengharuskan clean core?
Secara praktis, ya. GROW dibangun di atas SAP S/4HANA Cloud Public Edition, yang secara arsitektur tidak mengizinkan modifikasi langsung pada core — kustomisasi hanya lewat released API dan extension point yang stabil. Jadi clean core bukan aturan tambahan yang harus dipatuhi, melainkan default bawaan: perusahaan menengah "mulai bersih" tanpa pernah membuat utang teknis di inti sistem.

### Apa bedanya GROW with SAP dan RISE with SAP?
GROW ditujukan untuk perusahaan menengah yang baru mengadopsi SAP (net-new), memakai S/4HANA Cloud Public Edition, dengan paket terstruktur, cepat, dan prediktabel. RISE ditujukan terutama bagi pelanggan SAP lama yang bertransformasi dalam skala besar atau kompleks, dengan opsi Private Edition yang lebih fleksibel. Singkatnya: GROW untuk mulai bersih di cloud publik, RISE untuk transformasi terkelola yang lebih custom.

### Berapa lama implementasi S/4HANA Cloud Public Edition lewat GROW?
SAP dan ASUG menyebut rentang "empat sampai delapan minggu" untuk mulai beroperasi. Angka ini adalah klaim/target vendor, bukan jaminan — durasi nyata bergantung pada ruang lingkup proses, kesiapan data, dan kedisiplinan fit-to-standard. Metodologi SAP Activate dengan workshop fit-to-standard dan konfigurasi via SAP Central Business Configuration dirancang untuk mempercepat jalur ini.

### Apakah perusahaan menengah boleh melakukan kustomisasi di S/4HANA Cloud Public Edition?
Boleh, tetapi lewat jalur yang tidak menyentuh core. Ada tiga opsi: key-user in-app extensibility (alat berbasis web dengan ABAP for Key Users), side-by-side extensibility di SAP BTP (termasuk ABAP Environment), dan developer extensibility. Semuanya hanya memakai released API dan extension point yang stabil, sehingga ekstensi tetap aman saat SAP melakukan upgrade otomatis.

### Apa itu fit-to-standard dalam implementasi SAP?
Fit-to-standard adalah pendekatan di mana proses bisnis perusahaan dipetakan ke praktik terbaik industri yang sudah terkonfigurasi di dalam sistem, alih-alih memodifikasi perangkat lunak agar meniru proses lama. Dalam metodologi SAP Activate, analisis fit-to-standard dilakukan pada fase Explore melalui workshop; gap yang tersisa ditangani sebagai ekstensi di BTP, bukan sebagai perubahan pada core.

### Apakah GROW cocok untuk setiap perusahaan menengah yang sedang tumbuh?
Tidak selalu. GROW/Public Edition paling cocok ketika perusahaan bersedia mengadopsi proses standar dan ekstensi terbatas. Perusahaan dengan proses sangat unik yang jadi pembeda kompetitif, kebutuhan kontrol/residency khusus, atau integrasi legacy yang berat mungkin lebih tepat di S/4HANA Cloud Private Edition (lewat RISE) — dan bisnis yang lebih kecil bisa mulai dari SAP Business One. Pilihan ini sebaiknya ditimbang sebelum proyek dimulai.

### Apakah bisa pindah dari SAP Business One ke GROW with SAP?
Secara prinsip bisa, karena keduanya solusi SAP, tetapi ini adalah proyek implementasi baru di platform berbeda (S/4HANA Cloud Public Edition), bukan sekadar upgrade. Perpindahan masuk akal ketika kompleksitas proses, kebutuhan best practice lintas lini, atau skala pertumbuhan melampaui cakupan Business One. Perlu asesmen jalur adopsi — data, proses, dan ekstensi dipetakan ulang secara fit-to-standard.

## Data tables for the writer

### Tabel A — Pola lama (kustomisasi dulu) vs Fit-to-standard (adopsi standar + ekstensi di BTP)
| Aspek | Pola lama (customize-first) | Fit-to-standard (GROW / Public Edition) |
|---|---|---|
| Titik awal | Proses lama "dipaksakan" ke ERP via kustomisasi core | Proses dipetakan ke best practice industri bawaan |
| Lokasi kustomisasi | Di dalam core (Z-code, modifikasi) | Di luar core: key-user in-app + side-by-side di BTP |
| Risiko upgrade | Tinggi — tiap upgrade bisa merusak kustomisasi | Rendah — ekstensi pakai released API, upgrade otomatis aman |
| Utang teknis | Menumpuk sejak hari pertama | Nyaris nol bagi adopter baru ("start clean") |
| Kecepatan go-live | Lambat (proyek berbulan–bertahun) | 4–8 minggu (klaim vendor; bergantung scope) |
| Tata kelola | Ad hoc | SAP Activate + Central Business Configuration |

### Tabel B — GROW with SAP (Public) vs RISE with SAP (Private)
| Aspek | GROW with SAP | RISE with SAP |
|---|---|---|
| Edisi inti | S/4HANA Cloud Public Edition | S/4HANA Cloud Private Edition (opsi) |
| Target | Perusahaan menengah, net-new ke SAP | Pelanggan SAP existing / transformasi besar & kompleks |
| Filosofi | Lean, standar, prediktabel, SKU terstruktur | Tailored, fleksibel, lingkup lebih luas |
| Kustomisasi | Terbatas, non-core (key-user + BTP) | Lebih luas (termasuk jalur yang lebih dalam) |
| Jalur umum | Greenfield (mulai bersih) | Sering brownfield (konversi dari on-premise) |
| Clean core | Default arsitektur | Strategi yang dikelola/ditegakkan bertahap |

### Tabel C — Clean Core Levels A–D (ringkas, jangan deep-dive)
| Level | Dasar teknis | Status |
|---|---|---|
| A | Released API, ABAP Cloud | Direkomendasikan, didukung penuh, upgrade-safe |
| B | Classic API/teknologi klasik | Masih dikelola, perlu diawasi |
| C | Akses objek internal | Risiko terkelola, hindari bila bisa |
| D | Objek not-recommended | Risiko tertinggi, technical debt |

> Untuk Public Edition, ekstensi praktis berada di **Level A** karena hanya released API yang tersedia — ini inti kenapa adopter GROW otomatis clean.

## Edge cases & nuance

- **"Clean core by default" ≠ "tidak ada pekerjaan clean core".** Tim tetap perlu disiplin memilih opsi extensibility yang benar (jangan menumpuk ekstensi side-by-side tanpa tata kelola). "Default" ada di tingkat arsitektur (core tak bisa disentuh), bukan menghapus kebutuhan governance di lapisan ekstensi/operations.
- **Fit-to-standard adalah tantangan change management, bukan teknologi.** Resistensi terbesar biasanya dari tim yang terbiasa dengan proses lama — ini pembenaran kuat untuk aside Soltius di H2 #3.
- **Public Edition punya batas nyata.** Proses yang benar-benar unik dan jadi diferensiasi kompetitif bisa tidak terwadahi oleh best practice standar; di situlah Private Edition (RISE) atau pendekatan lain lebih tepat. Framing H2 #5 harus jujur, bukan menjual.
- **"Midsize" bukan definisi headcount yang kaku.** SAP cenderung mendefinisikan midsize lewat kebutuhan/skala, bukan ambang 50–250 karyawan yang kaku (lihat Flag).
- **GROW terus berevolusi.** SAP aktif menambah kapabilitas (mis. Joule/AI). Hindari menyajikan daftar komponen seolah statis; frasa "mencakup, antara lain".
- **Angka biaya US$500k–3jt bukan milik adopter baru.** Jangan sampai pembaca salah mengira ini biaya GROW — itu biaya skenario refactoring ECC lama; pakai eksplisit sebagai kontras.

## Flags (open factual risk)

- ⚠️ **Rentang go-live "4–8 minggu"**: ini klaim/target vendor (SAP "as little as four weeks"; ASUG "four to eight weeks"), bukan jaminan kontraktual. → Rekomendasi: selalu labeli "menurut SAP/ASUG" atau "klaim vendor"; jangan tulis sebagai janji hasil.
- ⚠️ **Ambang "50–250 karyawan"**: tidak ada definisi SAP resmi yang mengunci midsize pada headcount 50–250. → Rekomendasi: frasa sebagai "umumnya perusahaan menengah yang sedang tumbuh" atau "target pasar menengah", bukan batas kaku; jika dipakai, labeli sebagai framing umum.
- ⚠️ **Biaya refactor US$500k–3 juta**: sumber Redress Compliance (konsultansi, non-SAP). → Rekomendasi: atribusikan sebagai estimasi industri/konsultansi, sajikan sebagai rentang ilustratif untuk KONTRAS, jangan sebagai angka SAP resmi.
- ⚠️ **Komitmen inovasi S/4HANA "hingga 2040"**: muncul di post komunitas; bila dipakai sebagai angka utama, konfirmasi ke pernyataan SAP official. → Rekomendasi: boleh dipakai sebagai konteks jangka panjang, atribusikan ke SAP.
- ⚠️ **Cakupan HCM/SuccessFactors dalam GROW**: sebagian materi SAP menyebut SuccessFactors HCM & Joule sebagai bagian platform, namun inti GROW tetap S/4HANA Cloud Public Edition; cakupan HR bisa bervariasi per paket/SKU. → Rekomendasi: jangan tegaskan "GROW selalu termasuk SuccessFactors"; tulis "berpusat pada S/4HANA Cloud Public Edition, dengan best practice finance, supply chain, dan HR".
- ⚠️ **Statistik Indonesia (73% / 65%)**: dari media (Jakarta Post) mengutip riset pihak ketiga, bukan BPS/IDC langsung. → Rekomendasi: atribusikan ke surveinya ("menurut riset yang dikutip Jakarta Post, 2024"); opsional, bukan wajib. Tidak ditemukan statistik IDC 2025 spesifik dalam run ini.

## Definition snippet draft (40–60 words)

> **GROW with SAP** adalah paket cloud ERP dari SAP untuk perusahaan menengah yang baru mengadopsi SAP, dibangun di atas SAP S/4HANA Cloud Public Edition dengan praktik terbaik industri bawaan, metodologi SAP Activate, dan ekstensi di SAP BTP. Karena core-nya tidak bisa dimodifikasi, **clean core**—menjaga inti sistem tetap standar dan mudah di-upgrade—menjadi bawaan sejak hari pertama.
