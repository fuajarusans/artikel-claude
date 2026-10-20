---
brief_id: "sap-clean-core-02"
researcher_run_date: "2026-09-21"
sources_cited: 8
flags: 6
---

# Research Dossier: Clean Core saat Merger & Akuisisi — Menyatukan Lanskap SAP Tanpa Warisan Kotor

## TL;DR for the writer

- **Sudut yang belum digarap (whitespace)**: tak ada artikel Indonesia yang menautkan *clean core* ke skenario M&A/carve-out. Kompetitor (Natuvion, IgniteSAP, blogs.sap.com Central Finance) bicara konsolidasi teknis, bukan "menyatukan tanpa mewarisi core kotor". Jadikan tesis: M&A menghasilkan core SAP paling kotor sekaligus peluang sekali-seumur-proyek untuk memulai bersih. Persona: transformation lead, group CFO/CIO, M&A integration lead.
- **Tiga pilar konsolidasi (kerangka H2 #2)**: harmonisasi proses (fit-to-standard) → harmonisasi data → konsolidasi sistem. Urutannya penting: harmonisasi proses harus mendahului penggabungan sistem, agar sistem hasil gabungan tidak mewarisi kustomisasi lama.
- **Tiga opsi konsolidasi jujur (H2 #3)**: (1) *full consolidation* ke satu S/4HANA; (2) **SAP Central Finance** sebagai lapisan pelaporan/konsolidasi terpusat ("stepping consolidation") yang non-disruptif; (3) **two-tier ERP / template** ketika entitas terlalu berbeda untuk dipaksa menyatu. Alatnya: **SAP Landscape Transformation (SLT)** untuk replikasi, dan **Selective Data Transition (SDT)** untuk carve-in/carve-out selektif.
- **Fakta yang WAJIB dibingkai hati-hati**: (a) **Central Finance MASIH strategi yang didukung & direkomendasikan SAP di 2026** — bukan produk yang dipensiunkan (SAP menjalankan "Central Finance & Beyond Conference 2026", 30 Sep–1 Okt 2026); (b) **"Bluefield" adalah merek dagang SNP**, istilah resmi SAP adalah **Selective Data Transition** — jangan tukar; (c) **JANGAN kutip durasi/biaya proyek sebagai angka pasti** — bingkai sebagai rentang praktis berlabel estimasi.
- **Framing Soltius**: SAP Platinum Partner via United VARs; tim ERP Strategy menilai *technical debt* lintas entitas dan merancang pendekatan konsolidasi (gabung, Central Finance, atau two-tier) dengan clean core sebagai *tujuan desain* — Soltius **mengimplementasikan/memigrasi**, bukan membangun SAP. Maks 2–3 self-mention; anchor di closing + 1 aside opsional.

## Core facts (verified)

> **Claim**: Selective Data Transition (SDT) adalah pendekatan migrasi resmi SAP yang menjadi jalan tengah antara *system conversion* (brownfield) dan *new implementation* (greenfield).
> **Number/specific**: SAP mendefinisikan SDT sebagai "an alternative to a System Conversion and New Implementation for moving to SAP S/4HANA" yang "combines the advantages of both approaches without their limitations" — mentransfer data terpilih tanpa terikat status (mis. item yang sudah closed).
> **Source**: SAP — Selective Data Transition Engagement, https://support.sap.com/en/offerings-programs/support-services/data-management-landscape-transformation/selective-data-transition-engagement.html (akses 2026-09-21).
> **Confidence**: high (SAP official).

> **Claim**: SDT secara eksplisit dirancang untuk skenario konsolidasi lanskap dan M&A, termasuk menggabungkan atau memisahkan sistem.
> **Number/specific**: SAP menyatakan SDT memungkinkan pelanggan "flexibly re-organize the target system landscape and merge or split systems according to your requirements", dan "can be utilized to implement for example a carve-out scenario ... in the context of M&A (Mergers & Acquisitions)", termasuk migrasi antar-instance S/4HANA.
> **Source**: SAP — Selective Data Transition Engagement (URL di atas), akses 2026-09-21.
> **Confidence**: high (SAP official).

> **Claim**: SAP membentuk SAP Selective Data Transition Engagement sebagai program bersertifikat dengan mitra pionir tertentu.
> **Number/specific**: Engagement dibentuk pada 2020, beranggotakan empat organisasi — **CBS, Natuvion, SAP, dan SNP** — sebagai "leading experts and pioneers for selective data transformation towards a cloud-centric SAP landscape" dengan standar terstandardisasi.
> **Source**: SAP — Selective Data Transition Engagement (URL di atas), akses 2026-09-21.
> **Confidence**: high (SAP official).

> **Claim**: "Bluefield" bukan istilah resmi SAP; itu merek dagang SNP untuk pendekatan SDT.
> **Number/specific**: "Bluefield" adalah merek dagang (trademark) SNP Group; istilah resmi/vendor-netral SAP adalah **Selective Data Transition**. Penulis sebaiknya memakai "Selective Data Transition (kadang disebut pendekatan bluefield oleh mitra)".
> **Source**: SNP Group / SAP Community — "What is a Selective Data Transition to S/4HANA", https://community.sap.com/t5/technology-blog-posts-by-members/what-is-a-selective-data-transition-to-s-4hana/ba-p/13548469 (akses 2026-09-21).
> **Confidence**: high.

> **Claim**: SAP Landscape Transformation (SLT) adalah teknologi replikasi data real-time/near-real-time yang menjadi tulang punggung banyak skenario transformasi lanskap.
> **Number/specific**: SLT Replication Server melakukan ETL (extract-transform-load) dalam mode batch atau real-time; menopang skenario seperti *selective data extraction*, *merge/split* antar-sistem, penghapusan data, perubahan organisasi, dan Selective Data Transition ke S/4HANA — mencakup penggabungan beberapa sistem SAP dan pemisahan sistem per unit bisnis.
> **Source**: cbs Corporate Business Solutions — "What is System Landscape Transformation (SLT)?" (SLT FAQ), https://www.cbs-consulting.com/ ; SAP Community — SAP Landscape Transformation. Akses 2026-09-21.
> **Confidence**: high (fungsi teknis SLT mapan; SLT = alat replikasi/eksekusi, bukan metodologi transformasi utuh).

> **Claim**: SAP Central Finance (CFIN) mereplikasi dokumen/posting keuangan dari beberapa sistem sumber ke satu sistem S/4HANA Finance terpusat untuk pelaporan grup.
> **Number/specific**: Central Finance mereplikasi data keuangan (real-time) dari beberapa ERP sumber — SAP ECC, SAP versi lama, maupun non-SAP — ke satu instance S/4HANA sebagai lapisan pelaporan/konsolidasi terpusat, tanpa langsung mematikan sistem sumber (non-disruptif). Sering disebut "stepping consolidation".
> **Source**: SAP Learning — "Explaining the Central Finance Implementation Strategy" (learning journey "Discovering Finance in SAP S/4HANA"); blogs.sap.com — "SAP Central Finance and Mergers & Acquisitions Framework" (2020). Akses 2026-09-21.
> **Confidence**: high untuk definisi (fakta SAP mapan). NB: deep-link learning journey mengembalikan 404 saat diakses; kutip judul journey, bukan URL persis.

> **Claim**: SAP Central Finance MASIH strategi yang didukung dan diinvestasikan SAP pada 2026 — bukan produk yang dipensiunkan atau digeser total.
> **Number/specific**: SAP menyelenggarakan "**SAP Central Finance & Beyond Conference 2026**" (jadwal edisi US: 30 September–1 Oktober 2026) dan menerbitkan road map fungsi finance (Mei 2026). Central Finance diposisikan sebagai "a strong starting point to roll out the rest of their S/4HANA roadmap at their own pace".
> **Source**: SAP Events — "Central Finance and Beyond Conference 2026", https://events.sap.com/us-sap-central-finance-and-beyond-conference-2026/en_us/home.html ; SAP — "Building the future of the finance function: Inside SAP's road map" (Mei 2026), https://www.sap.com/assetdetail/2026/05/0a29b4f2-507f-0010-bca6-c68f7e60039b.html. Akses 2026-09-21.
> **Confidence**: high untuk "masih aktif/didukung 2026"; medium untuk nuansa posisi persis (kutip sebagai "salah satu opsi/starting point", bukan "satu-satunya rekomendasi").

> **Claim**: Carve-out adalah pemisahan/divestasi sebagian lanskap SAP menjadi entitas independen; carve-in adalah integrasi entitas hasil akuisisi ke lanskap induk.
> **Number/specific**: SAP carve-out (a.k.a. system separation/divestiture) memisahkan data finansial, master data, data transaksi, dan infrastruktur SAP dari organisasi induk — dipicu divestasi plant/company/business unit. Carve-in adalah kebalikannya: menyerap entitas akuisisi ke sistem/proses induk.
> **Source**: cbs Corporate Business Solutions — "What is an SAP carve-out?", https://www.cbs-consulting.com/us/what-is-an-sap-carve-out/ ; D4M International — "SAP M&A Carve-In & Carve-Out", https://d4m-int.com/sap/carve-in-carve-out-overview/. Akses 2026-09-21.
> **Confidence**: high.

> **Claim**: Perangkat teknis untuk carve-in/carve-out dan konsolidasi mencakup SLT, System Landscape Optimization (SLO), dan transformasi berbasis SDT.
> **Number/specific**: Solusi transformasi mencakup "company code carve-out" dan "company code deletion"; praktisi memakai SAP System Landscape Optimization (SLO) dan SAP Landscape Transformation (SLT) untuk mengelola pemisahan/penggabungan dengan presisi.
> **Source**: cbs / D4M International (URL di atas); SAP Community — SAP Landscape Transformation. Akses 2026-09-21.
> **Confidence**: high (kategori alat mapan).

> **Claim**: Selective Data Transition menggabungkan kelebihan greenfield dan brownfield sekaligus memberi kendali atas apa yang dipertahankan, dibersihkan, atau dipensiunkan.
> **Number/specific**: SDT memungkinkan tim memilih *slice* data historis yang relevan untuk pelaporan/audit/kontinuitas operasi, alih-alih memindahkan semua data (greenfield: mulai bersih tanpa data lama; brownfield: bawa semuanya). Ini membuat SDT cocok saat konsolidasi harus membersihkan warisan tanpa kehilangan histori kritikal.
> **Source**: SAP — Selective Data Transition Engagement; SNP Group knowledge center — Landscape Transformation. Akses 2026-09-21.
> **Confidence**: high.

> **Claim**: Prinsip clean core adalah menjaga inti S/4HANA tetap standar dan *upgrade-safe* dengan memindahkan kustomisasi ke ekstensi *side-by-side* di SAP BTP lewat *released API*.
> **Number/specific**: SAP merekomendasikan ekstensi dibangun terpisah (di BTP via SAP Build/ABAP Cloud/CAP) dan berinteraksi dengan S/4HANA hanya melalui *released API*/extension point — tanpa memodifikasi inti — sehingga upgrade tetap aman. Dalam M&A, ini menjadi *tujuan desain* sistem hasil konsolidasi.
> **Source**: SAP News Center (Agustus 2025) — "How to Extend SAP S/4HANA Cloud the Right Way | Clean Core", https://news.sap.com/2025/08/extend-sap-s4hana-cloud-right-way-clean-clear/. Akses 2026-09-21.
> **Confidence**: high (SAP official).

> **Claim**: SAP mengklasifikasikan ekstensi ke dalam model kematangan 4-level (A–D) berdasarkan integritas arsitektur & keamanan upgrade — dipakai untuk memilah/triase ekstensi.
> **Number/specific**: Model kini memakai 4 level (A, B, C, D). **Level A** = ekstensi paling bersih (on-stack ABAP Cloud atau side-by-side di BTP, hanya lewat *released API*); level menurun ke arah D untuk ekstensi klasik/berisiko yang memodifikasi inti. Dalam M&A, level dipakai untuk mengkatalog & menandai ekstensi berisiko lintas sistem sebelum cutover (keep / rebuild di BTP / retire).
> **Source**: community.sap.com — "ABAP Extensibility Guide – Clean Core (August 2025 Update)"; SAP News Center (Agustus 2025). Akses 2026-09-21.
> **Confidence**: high untuk keberadaan model 4-level (per Agustus 2025). NB: penamaan/level SAP berevolusi — sebut "per pembaruan Agustus 2025" dan jangan klaim daftar final.

> **Claim**: Two-tier ERP adalah model konsolidasi yang sah — kantor pusat menjalankan S/4HANA, anak usaha memakai ERP yang lebih ringan yang terintegrasi ke sistem korporat.
> **Number/specific**: Dalam two-tier, HQ memakai S/4HANA (tier-1) sementara subsidiary/entitas akuisisi memakai ERP tier-2 (mis. SAP Business One atau S/4HANA Cloud public edition) yang terhubung ke korporat via integrasi standar. Cocok saat entitas berbeda regulasi/geografi/model bisnis, sehingga memaksa satu instance justru lebih mahal/berisiko.
> **Source**: Konsep SAP two-tier ERP (mapan dalam ekosistem SAP); `knowledge_base/product_matrix.md`. Akses 2026-09-21.
> **Confidence**: medium (konsep mapan; bahas kualitatif, jangan klaim angka biaya spesifik).

> **Claim**: Clean core adalah prasyarat praktis untuk kesiapan cloud, upgrade berkala, dan kapabilitas AI (Joule) SAP.
> **Number/specific**: Core yang standar mempercepat adopsi RISE with SAP, upgrade dua-kali-setahun tanpa regresi, dan fitur AI/Joule yang mengandalkan proses & data standar. Core yang penuh Z-code menunda semua ini — itu sebabnya M&A menjadi momen untuk "membersihkan" alih-alih mewarisi kekacauan.
> **Source**: SAP News Center (Agustus 2025) — Clean Core (URL di atas); tema utama SAP Sapphire 2026 (sinyal WebSearch). Akses 2026-09-21.
> **Confidence**: medium-high (posisi strategis SAP; bingkai sebagai arah/rekomendasi, bukan angka).

> **Claim**: Soltius adalah SAP Platinum Partner via United VARs dan mendampingi strategi hingga eksekusi migrasi/konsolidasi SAP.
> **Number/specific**: SAP Platinum Certified Channel Partner & VAR (tier tertinggi) melalui keanggotaan United VARs (45 top VAR, 90+ negara); layanan **ERP Strategy** (Strategy) + **Migration** (Implementation); bagian dari Metrodata Group sejak 2008, berpengalaman sejak 1998.
> **Source**: `knowledge_base/company_profile.md` + `product_matrix.md` (verified-by-default).
> **Confidence**: high.

## Solution focus + Soltius anchor (from product_matrix.md)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| **Prinsip clean core (multi-sistem)** | Jaga inti S/4HANA standar; kustomisasi ke side-by-side BTP via *released API*; dalam M&A = *tujuan desain* konsolidasi | H2 #1 (definisi) + H2 #4 | — (fondasi konsep) |
| **SAP Central Finance** | Lapisan pelaporan/konsolidasi terpusat non-disruptif; replikasi finansial multi-sumber; MASIH didukung SAP 2026 ("stepping consolidation") | H2 #3 (opsi 2) | — |
| **SAP Landscape Transformation (SLT)** | Replikasi real-time/near-real-time; motor merge/split/carve-out & SDT | H2 #3 | — |
| **Selective Data Transition (SDT)** | Pendekatan resmi SAP (jalan tengah brownfield/greenfield); merge/split & carve-out M&A; "bluefield" = merek SNP | H2 #3 | — |
| **Clean Core Levels A–D** | Klasifikasi 4-level untuk triase ekstensi lintas sistem sebelum cutover (keep/rebuild BTP/retire) | H2 #4 (tabel) | — |
| **Two-tier ERP / template** | Alternatif sah saat entitas terlalu berbeda; S/4HANA HQ + tier-2 subsidiary | H2 #5 (honest) | — |
| **ERP Strategy + Migration (Implementation)** | Menilai *technical debt* lintas entitas; merancang pendekatan konsolidasi dengan clean core sebagai tujuan desain | **Closing (CTA)** + 1 aside mid-article | **SAP Platinum Partner via United VARs** + ERP Strategy + Migration |

Reminder: Soltius **mengimplementasikan/memigrasi/mendukung** teknologi SAP di atas — **tidak membangunnya**. Maks 2–3 self-mention. Anchor CTA di closing: tim ERP Strategy Soltius menilai kondisi core beberapa entitas dan merancang pendekatan konsolidasi (gabung ke satu S/4HANA, Central Finance, atau two-tier) dengan clean core sebagai tujuan desain. Aside opsional (mid-article, tanpa klien/angka): "di lapangan, entitas hasil akuisisi hampir selalu membawa Z-code yang tak terdokumentasi".

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **SAP — Selective Data Transition Engagement (support.sap.com)** — https://support.sap.com/en/offerings-programs/support-services/data-management-landscape-transformation/selective-data-transition-engagement.html — *what it backs*: definisi resmi SDT; dukungan eksplisit untuk merge/split sistem & carve-out M&A; engagement 4-mitra (CBS/Natuvion/SAP/SNP). **Sumber terkuat untuk H2 #3.**
2. **SAP News Center — "How to Extend SAP S/4HANA Cloud the Right Way | Clean Core" (Agustus 2025)** — https://news.sap.com/2025/08/extend-sap-s4hana-cloud-right-way-clean-clear/ — *what it backs*: prinsip clean core, side-by-side extensibility di BTP via released API.
3. **SAP — "Building the future of the finance function: Inside SAP's road map" (Mei 2026)** — https://www.sap.com/assetdetail/2026/05/0a29b4f2-507f-0010-bca6-c68f7e60039b.html — *what it backs*: Central Finance masih bagian aktif road map finance SAP di 2026.
4. **SAP Events — Central Finance & Beyond Conference 2026** — https://events.sap.com/us-sap-central-finance-and-beyond-conference-2026/en_us/home.html — *what it backs*: Central Finance masih diinvestasikan/didukung SAP (event resmi 30 Sep–1 Okt 2026).
5. **community.sap.com — ABAP Extensibility Guide (Clean Core, Agustus 2025 Update)** — *what it backs*: model klasifikasi ekstensi 4-level (A–D).
6. **cbs Corporate Business Solutions — "What is an SAP carve-out?"** — https://www.cbs-consulting.com/us/what-is-an-sap-carve-out/ — *what it backs*: definisi carve-out & kerangka pemisahan (praktik M&A independen, konsultansi reputable).
7. **D4M International — "SAP M&A Carve-In & Carve-Out"** — https://d4m-int.com/sap/carve-in-carve-out-overview/ — *what it backs*: perbedaan carve-in vs carve-out + tooling (SLO/SLT).
8. **IgniteSAP — "SAP Consulting in Mergers and Acquisitions"** — https://ignitesap.com/sap-consulting-in-mergers-and-acquisitions/ — *what it backs*: peran SLT & Central Finance dalam konsolidasi M&A (kerangka umum, sumber independen).

Priority order terpenuhi: SAP official (support/news/sap.com/events/community) > konsultansi independen (cbs/D4M/IgniteSAP).

## FAQ Q&As (6 drafted, Bahasa Indonesia)

### Bagaimana cara menggabungkan dua sistem SAP setelah merger?
Mulai dari proses, bukan sistem. Harmonisasikan proses ke standar (fit-to-standard), lalu satukan data, baru gabungkan sistem — agar sistem hasil gabungan tidak mewarisi kustomisasi lama. Secara teknis, penggabungan biasanya memakai SAP Landscape Transformation (SLT) untuk replikasi dan Selective Data Transition untuk memindahkan hanya data relevan. Alternatifnya, gunakan SAP Central Finance sebagai lapisan konsolidasi tanpa langsung mematikan sistem sumber.

### Apa itu SAP Central Finance dan kapan cocok dipakai?
SAP Central Finance mereplikasi data keuangan (real-time) dari beberapa ERP sumber — SAP ECC, SAP lama, bahkan non-SAP — ke satu S/4HANA terpusat sebagai lapisan pelaporan/konsolidasi, tanpa langsung mematikan sistem sumber. Cocok saat grup butuh pelaporan konsolidasi cepat pasca-merger tetapi belum siap mengganti semua sistem. Central Finance masih strategi yang didukung SAP pada 2026 dan sering dipakai sebagai titik awal perjalanan S/4HANA.

### Apa bedanya carve-in dan carve-out di SAP?
Carve-out adalah memisahkan sebagian lanskap SAP (data finansial, master data, transaksi, infrastruktur) menjadi entitas independen — biasanya saat divestasi anak usaha atau unit bisnis. Carve-in adalah kebalikannya: menyerap entitas hasil akuisisi ke dalam sistem dan proses induk. Keduanya memakai perangkat seperti SLT, System Landscape Optimization (SLO), dan pendekatan Selective Data Transition, dengan transformasi seperti company code carve-out.

### Apakah konsolidasi pasca-merger sebaiknya greenfield?
Tidak selalu. Greenfield (mulai bersih) menarik karena membuang warisan, tetapi berisiko kehilangan histori dan memakan waktu. Selective Data Transition sering lebih tepat: menggabungkan kelebihan greenfield dan brownfield, memungkinkan Anda memilih data yang dipertahankan, dibersihkan, atau dipensiunkan. Pertahankan mindset clean core apa pun jalurnya — pindahkan kustomisasi ke SAP BTP, bukan mewarisi Z-code ke inti hasil konsolidasi.

### Bagaimana menjaga clean core saat mengintegrasikan hasil akuisisi?
Katalogkan semua ekstensi lintas sistem lebih dulu, lalu nilai memakai Clean Core Levels A–D untuk menandai item berisiko sebelum cutover. Putuskan tiap ekstensi: dipertahankan (jika sudah bersih/Level A), dibangun ulang sebagai side-by-side di SAP BTP lewat released API, atau dipensiunkan. Prinsip intinya: inti S/4HANA hasil konsolidasi dijaga tetap standar dan upgrade-safe, sementara kebutuhan unik dipenuhi di luar inti.

### Berapa lama proyek konsolidasi lanskap SAP biasanya berjalan?
Tidak ada angka tunggal — sangat bergantung jumlah entitas, tingkat kustomisasi, volume & kualitas data, serta pendekatan (Central Finance biasanya lebih cepat karena non-disruptif; full consolidation ke satu S/4HANA paling lama). Sebagai rule-of-thumb (estimasi, bukan komitmen), proyek grup multi-entitas umumnya diukur dalam kuartal hingga tahunan. Tetapkan durasi lewat penilaian lanskap awal, bukan asumsi generik.

## Data tables for the writer

### Tabel keputusan — tiga opsi konsolidasi (draft; writer boleh perhalus)
| Aspek | Full consolidation (satu S/4HANA) | Central Finance (lapisan pelaporan) | Two-tier / template |
|---|---|---|---|
| Ide inti | Semua entitas pindah ke satu instance S/4HANA | Replikasi finansial multi-sumber ke satu S/4HANA untuk pelaporan; sumber tetap jalan | HQ di S/4HANA; subsidiary di ERP tier-2 (mis. Business One / S/4HANA Cloud) |
| Kapan dipilih | Proses & regulasi entitas relatif seragam; ingin satu core bersih jangka panjang | Butuh pelaporan konsolidasi cepat; belum siap ganti semua sistem ("stepping consolidation") | Entitas berbeda regulasi/geografi/model bisnis; memaksa satu instance tak sepadan |
| Dampak clean core | Peluang terbaik memulai bersih — jika kustomisasi tidak diwariskan | Core baru bersih; sumber lama tetap ada (utang teknis belum lunas) | Core HQ bersih; tier-2 lebih ringan by design |
| Kompleksitas/risiko | Tertinggi (harmonisasi penuh, cutover besar) | Menengah (non-disruptif, tapi butuh mapping & rekonsiliasi) | Menengah (integrasi antar-tier & tata kelola template) |
| Perangkat khas | SLT + Selective Data Transition; fit-to-standard | Central Finance + SLT (replikasi) | Integrasi standar S/4HANA ↔ tier-2; template roll-out |

> ⚠️ Jangan tambahkan kolom biaya/durasi berangka. Jika perlu, beri label "estimasi/rentang praktis" dan sandarkan pada penilaian lanskap.

### Carve-in vs carve-out
| Aspek | Carve-in (akuisisi) | Carve-out (divestasi) |
|---|---|---|
| Arah | Menyerap entitas baru ke lanskap induk | Memisahkan sebagian lanskap menjadi entitas independen |
| Pemicu khas | Merger/akuisisi menambah unit bisnis | Penjualan/spin-off plant, company code, atau unit |
| Yang dipindah | Data & proses entitas akuisisi ke sistem induk | Data finansial, master, transaksi, infrastruktur ke sistem terpisah |
| Perangkat | SLT, SDT, harmonisasi proses/data | SLT/SLO, "company code carve-out", "company code deletion" |
| Risiko clean core | Membawa Z-code tak terdokumentasi ke induk | Memisahkan tanpa merusak integritas core yang tersisa |

### Triase ekstensi dengan Clean Core Levels A–D (sebelum cutover)
| Level (indikatif) | Karakter ekstensi | Keputusan M&A tipikal |
|---|---|---|
| A | Paling bersih: ABAP Cloud on-stack / side-by-side BTP via released API | Keep — aman diteruskan |
| B–C | Semi-bersih / butuh penyesuaian agar upgrade-safe | Rebuild/refactor ke side-by-side BTP jika masih bernilai |
| D | Klasik/berisiko: modifikasi inti, tak upgrade-safe | Retire atau bangun ulang; jangan wariskan ke core hasil konsolidasi |

> ⚠️ Level A–D per pembaruan Agustus 2025; jelaskan ringkas (detail penuh ada di artikel upgrade-safe/level A–D 2026-07-2-05). Di sini fokus pada pemakaian untuk triase warisan lintas sistem.

## Edge cases & nuance

- **Urutan itu penting**: harmonisasi proses (fit-to-standard) HARUS mendahului penggabungan sistem. Menggabungkan sistem dulu = mewarisi dua set kustomisasi, bukan menghilangkannya. Ini pembeda utama vs artikel "konsolidasi teknis" kompetitor.
- **Central Finance bukan tujuan akhir, tapi lapisan**: ia memberi pelaporan konsolidasi cepat, tetapi sistem sumber (dan utang tekniknya) tetap ada. Bingkai sebagai "stepping consolidation", bukan solusi yang otomatis membersihkan core.
- **Clean core = tujuan desain, bukan alasan menggabungkan segalanya** (inti H2 #5). Kadang mempertahankan instance terpisah (two-tier) justru lebih bersih & murah daripada memaksa satu core.
- **"Bluefield" vs "Selective Data Transition"**: banyak vendor memakai "bluefield"; itu merek SNP. Untuk artikel vendor-netral, pakai istilah SAP (SDT) dan sebut bluefield sebagai sinonim mitra.
- **SLT ≠ metodologi**: SLT adalah alat replikasi/eksekusi. Konsolidasi butuh metodologi (harmonisasi + SDT/engagement), bukan sekadar menyalakan SLT.
- **Konteks Indonesia**: konglomerasi/grup Indonesia sering restrukturisasi (akuisisi lintas industri, spin-off). Tidak ada statistik adopsi SAP-M&A spesifik Indonesia yang terverifikasi — gunakan kerangka global dan bingkai relevansinya untuk grup Indonesia secara kualitatif.

## Flags (open factual risk)

- ⚠️ **Status Central Finance 2026**: TERVERIFIKASI masih didukung/diinvestasikan SAP (conference 2026 + road map Mei 2026). Namun JANGAN tulis "satu-satunya rekomendasi SAP" — posisikan sebagai salah satu opsi/starting point. Jangan klaim ia dipensiunkan (salah).
- ⚠️ **Durasi/biaya proyek**: tidak ada angka pasti yang bisa diverifikasi. → Bahas hanya sebagai rentang praktis/rule-of-thumb berlabel "estimasi"; sandarkan pada penilaian lanskap. Jangan tulis angka bulan/rupiah tertentu.
- ⚠️ **"Bluefield"**: merek dagang SNP, bukan istilah SAP. → Pakai "Selective Data Transition"; sebut bluefield sebagai istilah mitra bila perlu.
- ⚠️ **Clean Core Levels A–D**: penamaan/level SAP berevolusi (dikonfirmasi per pembaruan Agustus 2025). → Sebut "per pembaruan Agustus 2025"; jelaskan ringkas; jangan klaim daftar final/permanen atau definisi kaku tiap level tanpa merujuk pembaruan.
- ⚠️ **Two-tier ERP (biaya/kelayakan)**: konsep mapan tetapi kelayakan sangat kontekstual. → Bahas kualitatif; jangan klaim "lebih murah" sebagai fakta universal — bingkai "sering lebih sepadan saat entitas sangat berbeda".
- ⚠️ **Statistik M&A/konsolidasi SAP untuk Indonesia**: tidak ditemukan sumber otoritatif spesifik. → Jangan mengarang angka adopsi lokal; pakai kerangka global + relevansi kualitatif untuk konglomerasi Indonesia.

## Definition snippet draft (52 words)

> Dalam **merger & akuisisi**, **clean core** adalah upaya menyatukan beberapa sistem SAP menjadi satu lanskap yang tetap standar dan *upgrade-safe* — dengan mengharmonisasi proses dan data, memindahkan kustomisasi ke SAP BTP lewat *released API*, dan menandai ekstensi berisiko (Clean Core Levels A–D) untuk dibersihkan sebelum *cutover*, alih-alih mewarisi Z-code lama ke inti hasil konsolidasi.
