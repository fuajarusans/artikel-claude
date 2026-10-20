---
brief_id: "low-code-platform-01"
researcher_run_date: "2026-10-07"
sources_cited: 6
flags: 7
---

# Research Dossier: Berapa Biaya Platform Low-Code? Membedah Model Lisensi SAP BTP

## TL;DR for the writer

- **Biaya low-code SAP bukan satu angka lisensi** — ia ditentukan oleh *model komersial* yang dipilih untuk SAP BTP (CPEA, BTPEA, atau PAYG) plus *tingkat konsumsi* layanan yang diukur dalam **cloud credits**. Ini fondasi seluruh artikel.
- SAP resmi (learning.sap.com) mengonfirmasi empat model: **CPEA, SAP BTPEA, Pay-As-You-Go, dan Subscription**. Tiga model konsumsi (CPEA/BTPEA/PAYG) berbagi mekanisme cloud credits; **CPEA & BTPEA menawarkan entry & volume-based discount, PAYG tidak**. BTPEA adalah evolusi CPEA yang diperkenalkan **April 2024**.
- **Free tier itu nyata dan penting**: SAP membedakan "Always Free" (selalu gratis) vs "Free Tier" (kapasitas gratis sampai ambang tertentu, lalu kena biaya). PAYG hanya menagih pemakaian **di atas batas free tier**. Ini jalur pilot berbiaya rendah.
- **Hati-hati dengan angka rupiah/dolar pasti.** Entry point (~USD 750/bln) dan rentang enterprise (USD 250rb–1jt+/tahun) hanya ada di sumber pihak ketiga (Redress Compliance), BUKAN SAP resmi → tandai sebagai "estimasi pihak ketiga", jangan jadikan klaim keras. Diskon persis (20–40% / 25–40%) juga tidak dipatok SAP secara publik.
- Angle anggaran ini bersih dari overlap: hub dan 8 artikel terdahulu tidak membedah model komersial/TCO. Tautkan ke **Clean Core** (biaya BTP = biaya mengadopsi extensibility clean-core) dan tutup dengan Soltius sebagai pendamping *sizing & pemilihan model*, bukan penjual lisensi.

## Core facts (verified)

> **Claim**: SAP BTP memiliki empat model komersial resmi
> **Number/specific**: CPEA (Cloud Platform Enterprise Agreement), SAP BTPEA (SAP BTP Enterprise Agreement), Pay-As-You-Go for SAP BTP, dan Subscription
> **Source**: SAP Learning — "Exploring SAP BTP Commercial Models" (learning.sap.com/courses/becoming-an-sap-btp-solution-architect), diakses 2026-10-07
> **Confidence**: high

> **Claim**: CPEA adalah model prabayar berbasis cloud credits dengan komitmen tahunan
> **Number/specific**: "A prepaid investment in cloud credits for the contract duration with an annual commitment to consume SAP BTP services"; organisasi membeli credits di muka lalu men-*draw down* saat mengaktifkan layanan
> **Source**: SAP Learning — Exploring SAP BTP Commercial Models, diakses 2026-10-07
> **Confidence**: high

> **Claim**: SAP BTPEA adalah evolusi CPEA, diperkenalkan April 2024
> **Number/specific**: "a new license introduced as of April 2024… an evolution of the existing Cloud Platform Enterprise Agreement (CPEA) commercial model"; prabayar cloud credits untuk durasi kontrak + komitmen tahunan
> **Source**: WebSearch korpus lisensi SAP BTP (Redress Compliance; developers.sap.com BTP-EA onboarding), diakses 2026-10-07 — *konteks tanggal pihak ketiga*
> **Confidence**: medium (tanggal April 2024 dari pihak ketiga; SAP Learning mengonfirmasi keberadaan BTPEA tapi tidak tanggalnya → lihat Flags)

> **Claim**: Pay-As-You-Go (PAYG) tanpa komitmen, bayar di belakang per bulan
> **Number/specific**: "Payment is in arrears via monthly invoicing and is based only for what is used beyond free tier limits"; "No minimum usage requirement or annual commitment"
> **Source**: SAP Learning — Exploring SAP BTP Commercial Models, diakses 2026-10-07
> **Confidence**: high

> **Claim**: Model Subscription = biaya tetap terlepas dari konsumsi, kontrak 1–3 tahun
> **Number/specific**: "the usage of specific SAP BTP services at a fixed cost regardless of consumption"; "fixed contract typically from one to three years"; dibayar di muka saat kontrak mulai
> **Source**: SAP Learning — Exploring SAP BTP Commercial Models, diakses 2026-10-07
> **Confidence**: high

> **Claim**: Hanya CPEA & BTPEA yang memberi diskon; PAYG tidak
> **Number/specific**: CPEA/BTPEA punya "entry and volume-based discounts"; PAYG "no entry and volume-based discounts available" (bayar di harga list)
> **Source**: SAP Learning — Exploring SAP BTP Commercial Models, diakses 2026-10-07
> **Confidence**: high

> **Claim**: Besaran diskon CPEA/BTPEA pada volume komitmen berarti
> **Number/specific**: "Discounts of 25–40% versus PAYG list price achievable at meaningful commitment volumes" (brief menyebut ~20–40%)
> **Source**: WebSearch korpus lisensi SAP BTP (Redress Compliance), diakses 2026-10-07 — *pihak ketiga, bukan SAP resmi*
> **Confidence**: medium (rentang persisnya tidak dipublikasikan SAP → phrase "umumnya" / "rentang kira-kira" / attribusi; lihat Flags)

> **Claim**: Penagihan CPEA/BTPEA tahunan di muka; overage ditagih di belakang pada harga list
> **Number/specific**: "Billing is annually and in advance. Any consumption overages are billed in arrears at list price"; "No prepayment penalty. Cloud credits can be topped off at any time to prevent overages"
> **Source**: SAP Learning — Exploring SAP BTP Commercial Models, diakses 2026-10-07
> **Confidence**: high

> **Claim**: SAP membedakan dua jenis gratis: "Always Free" vs "Free Tier"
> **Number/specific**: "Always Free" = disertakan tanpa biaya; "Free Tier" = kapasitas tertentu gratis, biaya baru muncul melebihi ambang. Ketiga model konsumsi menyertakan alokasi gratis
> **Source**: SAP Learning — Exploring SAP BTP Commercial Models, diakses 2026-10-07
> **Confidence**: high

> **Claim**: Layanan BTP (termasuk SAP Build) dikonsumsi lewat cloud credits pada model konsumsi
> **Number/specific**: Mekanisme penagihan model konsumsi adalah cloud credits; SAP Learning tidak menyebut harga per-user untuk layanan BTP yang dibahas
> **Source**: SAP Learning — Exploring SAP BTP Commercial Models, diakses 2026-10-07
> **Confidence**: high (untuk "credits"); metrik persis SAP Build Apps per-user vs per-app tidak ditegaskan → lihat Flags

> **Claim**: Pasar teknologi low-code development diproyeksikan ~USD 44,5 miliar pada 2026
> **Number/specific**: ~USD 44,5 miliar pada 2026, CAGR ~19%
> **Source**: Gartner, "Forecast Analysis / 5 Low-Code Opportunities for Application Service Vendors" (gartner.com/en/documents) — figur banyak dikutip ulang via Kissflow/ToolJet/AppMaster
> **Confidence**: medium (dokumen primer Gartner di balik paywall; attribusi "menurut Gartner" + sebut sebagai proyeksi; lihat Flags)

> **Claim**: Gartner memproyeksikan mayoritas aplikasi baru akan memakai low-code/no-code
> **Number/specific**: **Klaim asli Gartner**: "by 2025, 70% of new applications developed by organizations will use low-code or no-code technologies, up from less than 25% in 2020"
> **Source**: Gartner (press release 2021, dikutip luas) — diakses 2026-10-07
> **Confidence**: medium (sumber sekunder sering memindah tahun ke "2026" / base "2023" — gunakan versi asli 2025/2020; lihat Flags)

> **Claim**: SAP Build adalah portofolio low-code/pro-code di atas SAP BTP
> **Number/specific**: Komponen: **SAP Build Apps** (aplikasi visual), **SAP Build Process Automation** (workflow + RPA + Document Information Extraction), **SAP Build Work Zone** (portal/experience), **SAP Build Code** (dev berbantuan GenAI). Semuanya berjalan di SAP BTP
> **Source**: knowledge_base/product_matrix.md + cache research (WebSearch sap.com), diakses 2026-10-07
> **Confidence**: high (nama komponen inti); kapabilitas rinci tiap komponen → verifikasi help.sap.com bila writer mengklaim fitur spesifik

> **Claim**: Biaya BTP adalah bagian dari biaya mengadopsi extensibility Clean Core
> **Number/specific**: Side-by-side extension untuk menjaga S/4HANA core tetap standar "tinggal" di SAP BTP; maka pos biaya BTP = pos biaya menjalankan strategi clean-core
> **Source**: knowledge_base/product_matrix.md (baris Low-Code & Clean Core), diakses 2026-10-07
> **Confidence**: high (framing konseptual, bukan angka)

> **Claim** (Soltius, verified-by-default): Soltius = SAP Platinum Certified Channel Partner via United VARs, berdiri 1998, anak usaha Metrodata (sejak 2008), 200+ konsultan, 120+ klien; kontributor pendapatan terbesar bagi SAP Indonesia (sejak 2015)
> **Number/specific**: SAP Platinum Partner; United VARs (45 top VARs, 90+ negara); layanan ERP Strategy + Implementation + Migration + Data and AI Consulting
> **Source**: knowledge_base/company_profile.md
> **Confidence**: high (pre-approved; jangan superlatif, jangan klaim Soltius "membuat" BTP)

## Solution focus + Soltius anchor (from product_matrix.md)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| **SAP BTP** sebagai platform + model komersial **CPEA / BTPEA / PAYG / Subscription**; konsep **cloud credits**; **free tier / always free** | 4 model resmi SAP; hanya CPEA/BTPEA diskon; PAYG tanpa komitmen & hanya tagih di atas free tier; BTPEA evolusi CPEA (April 2024); konsumsi via credits | H2 #1 (komponen biaya), H2 #2 (definisi model), H2 #3 (tabel), H2 #4 (free tier) | **ERP Strategy + Implementation** — sizing & pemilihan model komersial BTP |
| **SAP Build** (Build Apps, Build Process Automation) di atas BTP | Portofolio low-code SAP; dikonsumsi lewat BTP (credits), bukan produk buatan Soltius | lead / H2 #1 | Digital Platform solution (implementasi) |
| **Clean Core** tie-in | Extension side-by-side tinggal di BTP → biaya BTP bagian dari biaya clean-core | H2 #5 (biaya tersembunyi) + cousin link | — |

Reminder: Soltius **mengimplementasikan/mendampingi** (sizing, pemilihan model, pencegahan over-provisioning) — **tidak menjual atau membangun** BTP. Maks 2–3 self-mention: satu closing (ERP Strategy + Implementation), opsional satu aside di H2 #5 (pendampingan sizing mencegah over-provisioning). Framing closing: *"Soltius membantu perusahaan menakar kebutuhan dan memilih model komersial SAP BTP yang paling pas agar anggaran low-code terkendali."*

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **SAP Learning — "Exploring SAP BTP Commercial Models" (learning.sap.com, diakses 2026-10-07)** — https://learning.sap.com/courses/becoming-an-sap-btp-solution-architect/exploring-sap-btp-commercial-models — *what it backs*: definisi resmi CPEA/BTPEA/PAYG/Subscription, mekanisme cloud credits, aturan diskon (CPEA/BTPEA ya, PAYG tidak), billing, serta beda "Always Free" vs "Free Tier". **Sumber primer tertinggi** untuk fakta model komersial — writer sebaiknya menautkan ini.
2. **Gartner — Low-Code Development Technologies forecast (gartner.com/en/documents, dikutip 2026-10-07)** — https://www.gartner.com/en/documents/4350499 — *what it backs*: proyeksi pasar low-code ~USD 44,5 miliar pada 2026 (CAGR ~19%) dan tren adopsi enterprise. Attribusi "menurut Gartner"; sebut sebagai proyeksi, bukan realisasi.

> Prioritas: SAP official > Gartner > Kemenkominfo/BPS. Hindari menautkan Redress Compliance/Kissflow/ToolJet sebagai otoritas utama — mereka hanya pembanding/korpus pencarian, bukan sumber primer.

## FAQ Q&As (7 drafted, Bahasa Indonesia)

### Berapa kira-kira biaya awal untuk mulai memakai SAP Build?
Tidak ada "harga awal" tunggal yang dipatok SAP secara publik. Jalur termurah adalah memakai **free tier** pada model konsumsi (PAYG/CPEA) untuk pilot tanpa biaya hingga batas kapasitas tertentu. Di luar itu, biaya mengikuti konsumsi layanan dalam cloud credits. Angka entry yang beredar (misalnya ratusan dolar per bulan) berasal dari sumber pihak ketiga, bukan daftar harga resmi SAP, jadi perlakukan sebagai estimasi.

### Apa itu CPEA pada SAP BTP?
CPEA (Cloud Platform Enterprise Agreement) adalah model komersial prabayar: perusahaan berkomitmen membeli sejumlah **cloud credits** di muka untuk durasi kontrak (umumnya tahunan), lalu menariknya seiring layanan BTP diaktifkan. Karena ada komitmen, CPEA memperoleh entry dan volume-based discount dibanding harga list PAYG. Kelebihan pemakaian (overage) ditagih di belakang pada harga list, dan credits bisa ditambah kapan saja.

### Apakah SAP BTP punya free tier?
Ya. SAP membedakan dua hal: **"Always Free"** (layanan tertentu selalu gratis) dan **"Free Tier"** (kapasitas gratis sampai ambang tertentu, biaya baru muncul setelahnya). Pada PAYG, tagihan hanya untuk pemakaian **di atas** batas free tier. Free tier ini ideal untuk membangun proof of concept dan menguji SAP Build sebelum berkomitmen pada model berbayar yang lebih besar.

### Apa bedanya CPEA dan PAYG?
Keduanya berbasis konsumsi cloud credits, tetapi **PAYG tanpa komitmen**: bayar di belakang per bulan hanya untuk yang dipakai melebihi free tier, tanpa diskon. **CPEA berkomitmen di muka** (prabayar tahunan) sehingga memperoleh entry dan volume-based discount. Singkatnya: PAYG cocok untuk pilot/beban tak menentu; CPEA untuk pemakaian yang sudah bisa diprediksi dan ingin menekan biaya per unit.

### Apakah low-code selalu lebih murah daripada membangun aplikasi sendiri?
Tidak selalu. Low-code memangkas waktu dan beban developer, tetapi menambah pos biaya baru: konsumsi platform (credits), runtime aplikasi, lisensi pengguna/developer, integrasi ke S/4HANA, dan tata kelola. Tanpa sizing yang tepat, over-provisioning credits dan aplikasi "yatim" yang tetap menyedot runtime bisa menggerus penghematan. Perhitungan jujur harus memakai TCO menyeluruh, bukan sekadar membandingkan harga lisensi.

### Bagaimana mengendalikan biaya SAP BTP agar tidak membengkak?
Kuncinya sizing yang realistis dan tata kelola konsumsi. Pilih model komersial sesuai fase (PAYG untuk pilot, CPEA/BTPEA saat pola pemakaian stabil), pantau monthly balance statement, manfaatkan free tier untuk eksperimen, dan matikan aplikasi/layanan "yatim" yang tetap menagih runtime. Karena credits CPEA bisa ditambah kapan saja tanpa penalti, lebih aman mulai konservatif lalu top-up ketimbang over-commit sejak awal.

### Apakah model lisensi SAP BTP bisa diubah seiring waktu?
Bisa, dan memang lazim: banyak perusahaan mulai dengan PAYG atau free tier untuk pilot, lalu pindah ke CPEA ketika pola konsumsi jelas, dan ke BTPEA (evolusi CPEA, diperkenalkan 2024) untuk komitmen multi-tahun dengan diskon lebih dalam serta price protection. Perpindahan ini bagian dari strategi anggaran; sizing berkala membantu memilih model yang paling hemat untuk fase perusahaan saat itu.

## Data tables for the writer

### CPEA vs BTPEA vs PAYG (model konsumsi BTP)
| Aspek | PAYG (Pay-As-You-Go) | CPEA | BTPEA |
|---|---|---|---|
| Komitmen di muka | Tidak ada | Ya (prabayar credits, umumnya tahunan) | Ya (prabayar credits, multi-tahun) |
| Mekanisme | Bayar di belakang per bulan, hanya di atas free tier | Draw-down cloud credits | Draw-down cloud credits |
| Diskon | Tidak (harga list) | Entry & volume-based discount | Entry & volume-based discount (umumnya lebih dalam) + price protection* |
| Billing | Bulanan, in arrears | Tahunan di muka; overage in arrears di harga list | Tahunan di muka; overage in arrears |
| Free tier | Ya (tagih hanya di atas batas) | Ya | Ya |
| Paling cocok | Pilot, PoC, beban tak menentu | Pemakaian terprediksi, ingin tekan biaya/unit | Komitmen jangka panjang, skala enterprise |

\* *price protection pada BTPEA disebut sumber pihak ketiga; angka diskon persis tidak dipublikasikan SAP — phrase sebagai "umumnya lebih dalam" tanpa persentase keras.*

### Komponen biaya (TCO) platform low-code di BTP
| Komponen | Isi |
|---|---|
| Konsumsi platform | Layanan BTP yang diaktifkan, diukur dalam cloud credits |
| Runtime aplikasi | Biaya menjalankan aplikasi yang sudah jadi (termasuk aplikasi "yatim") |
| Lisensi pengguna/developer | Akses pengembang & pengguna aplikasi |
| Integrasi | Koneksi ke S/4HANA & sistem lain (side-by-side extension) |
| Tata kelola & skill | Governance, ALM, pelatihan citizen developer |

## Edge cases & nuance

- **"Biaya" ≠ "harga lisidn".** Pesan inti artikel: pembaca mencari satu angka, padahal yang menentukan adalah *model + konsumsi*. Hindari memberi satu angka sebagai jawaban.
- **Free tier bukan "gratis selamanya untuk produksi".** Ia untuk eksperimen/PoC dan ada batas kapasitas; jangan berjanji perusahaan bisa menjalankan beban produksi penuh gratis.
- **Diskon bukan otomatis.** Entry/volume discount CPEA/BTPEA bergantung pada volume komitmen; perusahaan kecil dengan komitmen tipis tidak serta-merta dapat 40%.
- **Aplikasi "yatim" (orphaned apps)** adalah biaya tersembunyi nyata: aplikasi yang tak lagi dipakai tetap mengonsumsi runtime/credits bila tidak dimatikan — poin kuat untuk H2 #5.
- **Subscription model** sering terlupakan dalam narasi "CPEA vs PAYG"; sebut sekilas bahwa ada juga model subscription biaya tetap untuk layanan tertentu agar artikel akurat.

## Flags (open factual risk)

- ⚠️ **Angka harga dolar/rupiah pasti** (entry ~USD 750/bln; enterprise USD 250rb–1jt+/tahun): hanya dari pihak ketiga (Redress Compliance), BUKAN SAP resmi. → **Rekomendasi**: jangan jadikan klaim pasti; tandai "estimasi pihak ketiga / bervariasi menurut kontrak" atau cukup jelaskan *mekanisme* biaya tanpa angka.
- ⚠️ **Persentase diskon persis** (20–40% vs 25–40%): SAP tidak mempublikasikan angka; sumber berbeda memberi rentang berbeda. → **Rekomendasi**: tulis "umumnya menawarkan diskon dibanding harga list PAYG, bergantung volume komitmen" tanpa mematok persen, atau attribusi ke sumber bila dipakai.
- ⚠️ **Tanggal BTPEA "April 2024"**: dari sumber pihak ketiga; SAP Learning mengonfirmasi BTPEA ada & merupakan evolusi CPEA tapi tidak menyebut tanggal di materi yang diakses. → **Rekomendasi**: tulis "diperkenalkan sebagai evolusi CPEA" ; jika menyebut tahun, attribusi longgar.
- ⚠️ **Gartner USD 44,5 miliar 2026 / CAGR 19%**: dokumen primer Gartner berbayar; angka beredar lewat sumber sekunder. → **Rekomendasi**: "menurut proyeksi Gartner" + sebut sebagai proyeksi; jangan nyatakan sebagai realisasi.
- ⚠️ **Statistik "70% aplikasi baru"**: klaim asli Gartner adalah **"by 2025, up from less than 25% in 2020"** — sumber sekunder sering mengubahnya jadi "2026 / dari 2023". → **Rekomendasi**: pakai versi asli (2025 / <25% di 2020) atau hilangkan tahun base yang salah.
- ⚠️ **Metrik lisensi SAP Build Apps (per-user vs per-app vs credits)**: SAP Learning menegaskan layanan BTP dikonsumsi lewat *credits*, tapi tidak merinci metrik SAP Build Apps spesifik. → **Rekomendasi**: tulis "dikonsumsi melalui BTP (cloud credits)" dan hindari mengklaim satuan per-user yang pasti tanpa sumber help.sap.com.
- ⚠️ **Kapabilitas rinci komponen SAP Build** (fitur per komponen): nama komponen aman, tapi fitur spesifik berubah. → **Rekomendasi**: jika writer mengklaim fitur tertentu, verifikasi ke help.sap.com; selain itu cukup sebut peran umum tiap komponen.

## Definition snippet draft (47 words)

> Biaya platform low-code di SAP BTP tidak ditentukan oleh satu harga lisensi tetap, melainkan oleh model komersial yang dipilih — CPEA, BTPEA, atau PAYG — dan tingkat konsumsi layanan yang diukur dalam cloud credits. Total biaya mencakup konsumsi platform, runtime aplikasi, lisensi pengembang/pengguna, serta biaya integrasi dan tata kelola.
