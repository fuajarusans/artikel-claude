---
brief_id: "low-code-platform-01"
researcher_run_date: "2026-09-17"
sources_cited: 6
flags: 5
---

# Research Dossier: SAP Build vs Power Platform vs Mendix — Memilih Low-Code untuk Pengguna SAP

## TL;DR for the writer

- **Sudut yang belum digarap SERP ID**: tak satu pun kompetitor (Mekari, Zoho, kelas.work, indokrisna, javan) membandingkan low-code dari kacamata "perusahaan ini sudah pakai SAP". Itu penentu terbesar TCO & integrasi — jadikan tesis artikel. Untuk audiens SAP, keputusan nyata bukan "platform terbaik secara mutlak" tapi "yang paling pas dengan lanskap sistem inti".
- **Tiga platform, tiga posisi jujur**: SAP Build = native ke ekosistem SAP (side-by-side extensibility di BTP, integrasi ke S/4HANA lewat *released API*, mendukung clean core); Power Platform = jalur tercepat untuk organisasi yang sudah 100% Microsoft 365 (Dataverse/Teams/SharePoint), tapi integrasi ke SAP butuh konektor/lapisan tambahan; Mendix = platform independen model-driven untuk aplikasi kompleksitas menengah-tinggi lintas-cloud.
- **Angka yang aman dikutip** (Gartner, via InfoWorld): low-code ≈ **75% pengembangan aplikasi baru pada 2026** (naik dari 40% pada 2021); pasar diproyeksi **USD 44,5 miliar** dengan pertumbuhan **~19%**. Bingkai sebagai *proyeksi/forecast Gartner*, bukan realisasi.
- **Hati-hati (verify-flags)**: nama komponen SAP Build berubah cepat (kini termasuk SAP Build Code untuk pro-code); rating Gartner Peer Insights Mendix bergerak (≈4,5 tapi jumlah review berubah — kutip "sekitar 4,5" + tanggal akses); JANGAN tulis harga lisensi spesifik — bahas model biaya secara kualitatif.
- **Framing Soltius**: mengimplementasikan/mengintegrasikan SAP Build di atas BTP dan membantu menilai lanskap — BUKAN membuat SAP Build/Power Platform/Mendix. Maks 2–3 mention, ke closing.

## Core facts (verified)

> **Claim**: Low-code diproyeksikan menjadi mayoritas pengembangan aplikasi baru pada 2026.
> **Number/specific**: ~75% pengembangan aplikasi baru akan memakai teknologi low-code pada 2026, naik dari 40% pada 2021 (proyeksi Gartner).
> **Source**: InfoWorld merangkum forecast Gartner — https://www.infoworld.com/article/2337677/low-code-development-technologies-market-forecast-to-hit-445-billion-by-2026.html (akses 2026-09-17); dokumen Gartner "Forecast Analysis: Low-Code Development Technologies, Worldwide" (gartner.com/en/documents/7146430).
> **Confidence**: high (angka forecast Gartner yang dikutip luas; bingkai sebagai proyeksi).

> **Claim**: Pasar teknologi low-code global diproyeksikan mencapai USD 44,5 miliar pada 2026.
> **Number/specific**: ~USD 44,5 miliar pada 2026, dengan laju pertumbuhan ~19% (proyeksi Gartner).
> **Source**: InfoWorld (URL di atas), akses 2026-09-17.
> **Confidence**: medium-high (angka forecast bertahun 2022-an; masih dikutip sebagai patokan 2026, tapi ini proyeksi lama — beri konteks "diproyeksikan/forecast", jangan tulis sebagai realisasi).

> **Claim**: Mayoritas pengguna low-code diperkirakan berasal dari luar departemen IT.
> **Number/specific**: pada 2026, ≥80% pengguna low-code diperkirakan dari luar IT (naik dari ~60% pada 2021) — mendasari relevansi *citizen developer* (Gartner).
> **Source**: Gartner (via InfoWorld/kissflow ringkasan forecast), akses 2026-09-17.
> **Confidence**: medium (angka forecast; kutip sebagai proyeksi Gartner, bukan fakta terukur).

> **Claim**: SAP Build adalah portofolio low-code terpadu, bukan satu produk tunggal.
> **Number/specific**: SAP Build menyatukan **SAP Build Apps** (bangun aplikasi visual drag-and-drop), **SAP Build Process Automation** (otomasi workflow + RPA), **SAP Build Work Zone** (business site/portal terpadu), dan **SAP Build Code** (jalur pro-code untuk developer, mendukung CAP Java/Node).
> **Source**: SAP — https://www.sap.com/products/technology-platform/build.html; learning.sap.com "Explaining the SAP Build Portfolio"; community.sap.com "What's New in SAP Build – Q1 2025". Akses 2026-09-17.
> **Confidence**: high.

> **Claim**: SAP Build berjalan di atas SAP BTP sebagai *side-by-side extensibility* dan mendukung prinsip clean core.
> **Number/specific**: aplikasi/ekstensi dibangun terpisah di SAP BTP (memakai SAP Build low-code/no-code, CAP, atau ABAP Cloud) dan berinteraksi dengan S/4HANA lewat *released API* tanpa memodifikasi inti — sehingga upgrade S/4HANA tetap aman.
> **Source**: SAP News Center (Aug 2025) — https://news.sap.com/2025/08/extend-sap-s4hana-cloud-right-way-clean-clear/; community.sap.com "ABAP Extensibility Guide – Clean Core (August 2025 Update)". Akses 2026-09-17.
> **Confidence**: high.

> **Claim**: SAP telah mengembangkan model extensibility clean core menjadi model kematangan 4 level.
> **Number/specific**: model kini memakai 4 level (A, B, C, D) berdasarkan integritas arsitektur & upgrade-safety. **Level A** = ekstensi paling bersih, dibangun on-stack (ABAP Cloud) ATAU side-by-side memakai SAP Build di BTP (ABAP Cloud, CAP, atau low-code/no-code), hanya lewat *released API*/extension point.
> **Source**: community.sap.com "ABAP Extensibility Guide – Clean Core… August 2025 Update"; news.sap.com (Aug 2025). Akses 2026-09-17.
> **Confidence**: high untuk keberadaan model 4-level (per Agustus 2025). NB: artikel INI comparison cross-vendor — sebut clean core seperlunya (SAP Build = jalan menjaga core bersih); detail per-level dialokasikan ke -03. Jangan over-detail.

> **Claim**: SAP Build kini dilengkapi kapabilitas AI generatif melalui Joule.
> **Number/specific**: **Joule for Developers** (diumumkan Mar 2025) membawa AI ke SAP Build Apps, Build Process Automation, Build Code, dan ABAP — mis. mengusulkan UI dari data model, membuat form/flow dari deskripsi bahasa natural, generate/modernisasi kode.
> **Source**: SAP News (Mar 2025) — https://news.sap.com/2025/03/joule-for-developers-ai-powered-capabilities/; community.sap.com What's New 2025. Akses 2026-09-17.
> **Confidence**: high.

> **Claim**: Microsoft Power Platform adalah suite low-code yang paling erat dengan ekosistem Microsoft 365.
> **Number/specific**: komponen inti **Power Apps** (aplikasi), **Power Automate** (otomasi/RPA), plus Power BI/Copilot Studio, dengan **Dataverse** sebagai data layer dan integrasi native ke Teams, SharePoint, dan Microsoft 365.
> **Source**: Microsoft (powerplatform.microsoft.com) + Gartner Peer Insights market page. Akses 2026-09-17.
> **Confidence**: high (fakta produk mapan). Detail konektor spesifik tak diverifikasi mendalam — bahas kualitatif.

> **Claim**: Power Platform tidak terintegrasi native ke SAP; butuh konektor/lapisan tambahan.
> **Number/specific**: integrasi ke SAP dilakukan lewat konektor (mis. SAP OData/SAP ERP connector di Power Automate/Power Apps) atau middleware — bukan *side-by-side extensibility* di dalam ekosistem SAP seperti SAP Build.
> **Source**: pola integrasi umum yang terdokumentasi (Microsoft Learn connectors) + perbandingan Gartner Peer Insights. Akses 2026-09-17.
> **Confidence**: medium (benar secara arsitektur; hindari klaim teknis spesifik tanpa sumber — bahas kualitatif).

> **Claim**: Mendix (Siemens) adalah platform low-code independen, model-driven, untuk aplikasi kompleksitas menengah-tinggi.
> **Number/specific**: pendekatan *model-driven* + *fusion development* (kolaborasi business, citizen, dan pro developer), lapisan AI **Maia**; independen-vendor dan multi-cloud (dapat deploy lintas hyperscaler).
> **Source**: Gartner Peer Insights — https://www.gartner.com/reviews/market/enterprise-low-code-application-platform (vendor Siemens/Mendix). Akses 2026-09-17.
> **Confidence**: high untuk posisi umum; nama fitur "Maia" benar per materi Mendix — kutip apa adanya.

> **Claim**: Mendix mendapat rating tinggi di Gartner Peer Insights untuk pasar Enterprise Low-Code Application Platform.
> **Number/specific**: **≈4,5 dari 5** di Gartner Peer Insights (jumlah review bergerak — tercatat ~311 review per akses 17 Sep 2026; brief menyebut 314).
> **Source**: Gartner Peer Insights — https://www.gartner.com/reviews/market/enterprise-low-code-application-platform/vendor/siemens-mendix/product/mendix-platfor. Akses 2026-09-17.
> **Confidence**: medium — angka rating stabil ~4,5 tapi jumlah review dinamis. Kutip "sekitar 4,5 (Gartner Peer Insights, per Sep 2026)" TANPA jumlah review kaku, atau sertakan tanggal akses. Jangan bandingkan "X > Y bintang" seolah peringkat resmi.

> **Claim**: Nama pasar Gartner untuk kategori ini sedang bertransisi ke arah AI.
> **Number/specific**: pasar kini berlabel "Enterprise Low-Code Application Platform (Transitioning to **AI-Augmented Low-Code Application Platforms**)" di Gartner Peer Insights.
> **Source**: Gartner Peer Insights market page (URL di atas). Akses 2026-09-17.
> **Confidence**: high — sinyal berguna bahwa AI kini kriteria evaluasi inti; dukung sub-poin "AI di ketiga platform" (Joule / Copilot / Maia).

> **Claim**: Keputusan platform enterprise semakin dibingkai sebagai tiga jalur — build, buy, atau buy-and-extend/low-code.
> **Number/specific**: low-code menempati "middle ground" (workflow/approval/form yang menghubungkan sistem internal), sementara build custom untuk yang benar-benar diferensiasi dan buy SaaS untuk komoditas.
> **Source**: ringkasan praktik (kissflow/Forbes/zylo) yang dirujuk cache riset; konsep umum industri. Akses 2026-09-17.
> **Confidence**: medium (kerangka konseptual, bukan angka keras). NB: kerangka buy-vs-build detail dialokasikan ke -02 — sebut ringkas saja di sini.

> **Claim**: Soltius adalah SAP Platinum Partner dan mengimplementasikan platform low-code SAP di atas BTP.
> **Number/specific**: SAP Platinum Certified Channel Partner & VAR (tier tertinggi) via keanggotaan United VARs; solusi **Digital Platform** (extensibility/low-code/integrasi) + layanan **Implementation**.
> **Source**: `knowledge_base/company_profile.md` + `product_matrix.md` (verified-by-default).
> **Confidence**: high.

## Solution focus + Soltius anchor (from product_matrix.md)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| **SAP Build** (Apps, Process Automation, Work Zone, + Build Code) di atas **SAP BTP** | Portofolio terpadu; side-by-side extensibility; integrasi native S/4HANA via *released API*; mendukung clean core; AI Joule 2025 | H2 #2 (profil SAP Build) + H2 #4 (baris tabel "integrasi SAP") | **Digital Platform + Implementation**; **SAP Platinum Partner via United VARs** |
| **Microsoft Power Platform** (Power Apps, Power Automate, Dataverse) | Terkuat untuk organisasi M365; integrasi ke SAP butuh konektor/lapisan tambahan | H2 #3 + tabel | (pembanding — bukan solusi Soltius) |
| **Mendix** (model-driven, fusion development, AI Maia) | Independen/multi-cloud; kompleksitas menengah-tinggi; ~4,5 Gartner Peer Insights | H2 #4 (diperkenalkan di tabel) | (pembanding — bukan solusi Soltius) |

Reminder: Soltius **mengimplementasikan/mengintegrasikan** SAP Build — **tidak membangun** SAP Build/Power Platform/Mendix. Maks 2–3 self-mention. Anchor CTA di closing: "Soltius mengimplementasikan platform low-code SAP Build di atas SAP BTP dan membantu perusahaan menilai platform mana yang paling pas dengan lanskap sistem mereka." Opsional 1 aside netral di H2 SAP Build: pemilihan platform sebaiknya lewat *assessment* lanskap, bukan default merek.

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **SAP News Center — "How to Extend SAP S/4HANA Cloud the Right Way | Clean Core" (Aug 2025)** — https://news.sap.com/2025/08/extend-sap-s4hana-cloud-right-way-clean-clear/ — *what it backs*: SAP Build sebagai side-by-side extensibility di BTP; integrasi ke S/4HANA lewat released API tanpa memodifikasi inti (clean core).
2. **InfoWorld — "Low-code development technologies market forecast to hit $44.5 billion by 2026"** — https://www.infoworld.com/article/2337677/low-code-development-technologies-market-forecast-to-hit-445-billion-by-2026.html — *what it backs*: proyeksi Gartner — 75% aplikasi baru & USD 44,5 miliar pada 2026.
3. **Gartner Peer Insights — Enterprise Low-Code Application Platform** — https://www.gartner.com/reviews/market/enterprise-low-code-application-platform — *what it backs*: posisi & rating pengguna (Mendix ≈4,5; Power Apps; kategori transisi ke AI-augmented).
4. **SAP News — "Joule for Developers" (Mar 2025)** — https://news.sap.com/2025/03/joule-for-developers-ai-powered-capabilities/ — *what it backs*: AI generatif di SAP Build (Apps/Process Automation/Code/ABAP).
5. **SAP — "App Development and Automation | SAP Build"** — https://www.sap.com/products/technology-platform/build.html — *what it backs*: komponen portofolio SAP Build terkini.
6. **learning.sap.com — "Explaining the SAP Build Portfolio"** — https://learning.sap.com/learning-journeys/implement-and-administer-sap-build-work-zone/explaining-the-sap-build-portfolio — *what it backs*: cakupan tiap komponen SAP Build.

Priority order terpenuhi: SAP official (news/help/learning/sap.com) > Gartner > tech press (InfoWorld).

## FAQ Q&As (6 drafted, Bahasa Indonesia)

### Apa itu SAP Build dan apa saja komponennya?
SAP Build adalah portofolio low-code SAP di atas SAP BTP untuk membangun aplikasi, mengotomasi proses, dan membuat portal tanpa banyak koding. Komponennya: SAP Build Apps (aplikasi visual), SAP Build Process Automation (workflow + RPA), SAP Build Work Zone (business site/portal), dan SAP Build Code untuk jalur pro-code developer. Sejak 2025, AI Joule membantu di seluruh komponen.

### Apa perbedaan utama SAP Build dan Microsoft Power Platform?
Perbedaan intinya soal ekosistem asal. SAP Build lahir di dalam ekosistem SAP: terintegrasi native ke S/4HANA lewat *released API* dan mendukung clean core sebagai side-by-side extensibility di BTP. Power Platform paling kuat untuk organisasi Microsoft 365 (Dataverse, Teams, SharePoint), tetapi integrasi ke SAP umumnya butuh konektor atau lapisan tambahan, bukan koneksi native ke inti SAP.

### Apakah Mendix cocok untuk perusahaan pengguna SAP?
Bisa. Mendix adalah platform low-code independen dan multi-cloud yang kuat untuk aplikasi kompleksitas menengah-tinggi lintas sistem, dengan pendekatan model-driven dan fusion development. Untuk pengguna SAP, Mendix menarik saat aplikasi perlu berjalan lintas-cloud atau independen dari satu vendor — tetapi integrasi ke S/4HANA tetap lewat API, tidak senative SAP Build yang dirancang di dalam ekosistem SAP.

### Apakah low-code bisa terintegrasi langsung dengan SAP S/4HANA?
Ya. Cara yang direkomendasikan SAP adalah side-by-side extensibility: aplikasi low-code (mis. SAP Build) dibangun terpisah di SAP BTP dan berinteraksi dengan S/4HANA lewat *released API* dan event, tanpa memodifikasi inti. Pola ini menjaga prinsip clean core sehingga upgrade S/4HANA tetap aman. Platform non-SAP dapat terhubung juga, umumnya melalui konektor atau integrasi API.

### Bagaimana cara menghindari vendor lock-in saat memilih platform low-code?
Nilai tiga hal sebelum memilih: seberapa mudah data dan logika aplikasi diekspor, apakah platform memakai standar terbuka (API, model data portabel), dan seberapa dalam ketergantungan pada satu ekosistem. Untuk pengguna SAP, kunci sebenarnya bukan menghindari lock-in mutlak, melainkan menyelaraskan platform dengan sistem inti — integrasi native mengurangi biaya jembatan jangka panjang, sekalipun mengikat ke satu ekosistem.

### Platform low-code mana yang paling hemat biaya?
Tidak ada jawaban tunggal karena model biayanya berbeda: SAP BTP/SAP Build umumnya berbasis konsumsi (kapasitas/kredit BTP), Power Platform berbasis lisensi per-pengguna/per-app, dan Mendix berbasis langganan platform/aplikasi. TCO sebenarnya ditentukan oleh biaya integrasi ke sistem inti dan tata kelola, bukan harga lisensi awal. Untuk perusahaan yang sudah pakai SAP, integrasi native sering menekan biaya tersembunyi.

## Data tables for the writer

### Tabel perbandingan multi-kriteria (draft — writer boleh perhalus)
| Kriteria | SAP Build (di SAP BTP) | Microsoft Power Platform | Mendix (Siemens) |
|---|---|---|---|
| Integrasi ke SAP S/4HANA | Native, side-by-side via *released API*; mendukung clean core | Lewat konektor/lapisan tambahan (SAP OData/ERP connector) | Lewat API/konektor; independen SAP |
| Ekosistem paling pas | Perusahaan dengan SAP sebagai sistem inti | Organisasi 100% Microsoft 365 (Teams, SharePoint, Dataverse) | Lintas-cloud / independen vendor |
| Kompleksitas aplikasi ideal | Ekstensi & app di sekitar proses SAP | App internal ringan–menengah, otomasi M365 | Menengah–tinggi, multi-channel |
| Target pengguna | Citizen + pro developer (fusion), Build Code untuk pro | Citizen developer M365, jalur tercepat | Fusion development (business + pro developer) |
| Model biaya (kualitatif) | Konsumsi/kredit BTP | Lisensi per-user/per-app (+ pay-as-you-go) | Langganan platform/app |
| Kapabilitas AI (2025) | Joule (usul UI, flow dari NL, generate kode) | Copilot / Copilot Studio | Maia (NL app generation) |
| Risiko lock-in | Terikat ekosistem SAP (mitigasi: standar BTP, API) | Terikat ekosistem Microsoft | Paling netral vendor |
| Sinyal pihak ketiga | — | Gartner Peer Insights (kutip apa adanya) | ≈4,5 Gartner Peer Insights (per Sep 2026) |

> ⚠️ Baris "model biaya" WAJIB kualitatif. Jangan masukkan angka lisensi/harga tanpa sumber resmi SAP/Microsoft/Mendix. Baris "sinyal pihak ketiga": kutip rating apa adanya + tanggal, jangan buat peringkat/Magic Quadrant fiktif.

## Edge cases & nuance

- **"Terbaik" itu situasional, bukan absolut.** Untuk audiens SAP, penentu terbesar TCO & keberhasilan adalah kedalaman integrasi ke sistem inti — bukan daftar fitur. Ini pesan utama yang membedakan artikel dari listicle SERP.
- **Kapan JUSTRU bukan SAP Build**: kantor yang 100% Microsoft dengan kebutuhan app internal ringan sering lebih cepat dengan Power Platform; aplikasi kompleks lintas-cloud yang harus independen SAP lebih pas ke Mendix. Sampaikan jujur (H2 #5).
- **Batas "citizen developer"**: low-code mempercepat, tapi aplikasi enterprise tetap butuh governance (siapa boleh bangun apa, akses data, lifecycle). Tanpa tata kelola muncul *shadow IT*. (Detail governance sudah digarap di 2026-06-04 — sebut ringkas, jangan duplikasi.)
- **AI mengaburkan batas platform**: ketiga vendor kini menaruh AI generatif (Joule/Copilot/Maia); Gartner bahkan menamai pasar "transitioning to AI-augmented". Jadikan sub-poin, bukan pembeda absolut.
- **Lock-in itu trade-off, bukan dosa**: integrasi native (SAP Build) mengikat ke SAP tapi menekan biaya jembatan; platform netral (Mendix) fleksibel tapi menambah kerja integrasi. Bingkai sebagai keputusan sadar, bukan "hindari lock-in".
- **Model clean core sedang berevolusi** (kini 4-level per Agustus 2025). Untuk artikel comparison ini cukup sebut "SAP Build = side-by-side extensibility yang menjaga core bersih"; detail per-level ada di artikel -03.

## Flags (open factual risk)

- ⚠️ **Nama/cakupan komponen SAP Build**: berubah cepat; kini termasuk **SAP Build Code** (pro-code) di luar tiga komponen "klasik" (Apps/Process Automation/Work Zone). → Sebut keempatnya; hindari mengklaim daftar itu final/permanen.
- ⚠️ **Rating Gartner Peer Insights Mendix**: ~4,5 stabil TAPI jumlah review dinamis (tercatat ~311 per 17 Sep 2026; brief menyebut 314). → Tulis "sekitar 4,5 (Gartner Peer Insights, per Sep 2026)" tanpa jumlah review kaku, atau sertakan tanggal akses. Jangan bandingkan bintang antar-platform seolah peringkat resmi.
- ⚠️ **Angka pasar Gartner (USD 44,5 miliar; 75%; ~19%)**: ini *forecast* (basis ~2022), bukan realisasi 2026. → Selalu bingkai "diproyeksikan/menurut forecast Gartner", cantumkan tahun; jangan tulis sebagai angka aktual.
- ⚠️ **Detail integrasi Power Platform ↔ SAP**: benar bahwa butuh konektor/lapisan tambahan, tapi detail teknis konektor spesifik tidak diverifikasi mendalam. → Bahas kualitatif ("umumnya lewat konektor/middleware"); jangan sebut nama produk konektor sebagai fakta pasti.
- ⚠️ **Harga/lisensi**: tidak ada angka harga yang diverifikasi. → JANGAN cantumkan angka lisensi/biaya; bahas model biaya kualitatif (konsumsi BTP vs lisensi per-user Microsoft vs langganan Mendix) dan tandai sebagai gambaran.

## Definition snippet draft (48 words)

> **Low-code platform** adalah perangkat pengembangan aplikasi yang memakai antarmuka visual (*drag-and-drop*) dan komponen siap pakai sehingga aplikasi dibangun dengan sedikit koding manual. Bagi perusahaan pengguna SAP, pilihan low-code utama menyempit ke tiga: SAP Build (native SAP), Microsoft Power Platform (native Microsoft 365), dan Mendix (independen, lintas-cloud).
