---
brief_id: "sap-clean-core-01"
researcher_run_date: "2026-07-07"
sources_cited: 12
flags: 6
---

# Research Dossier: Business Case SAP Clean Core — Cara Menjustifikasi Anggarannya ke Direksi

## TL;DR for the writer

- **Sudut ini bukan teknis, tapi finansial.** Tugas artikel: mengubah manfaat clean core yang terdengar abstrak ("core lebih bersih") menjadi angka yang bisa masuk proposal investasi ke CFO/direksi. Kerangka intinya: **biaya inaksi (technical debt) → matematika TCO → penghindaran biaya upgrade → framing bahasa CFO**. Jangan mengulang materi teknis remediasi (sudah di artikel lain cluster ini).
- **Semua angka technical-debt & TCO adalah ESTIMASI vendor/analis — label wajib.** Angka smartShift (USD 0,25–0,63/baris/tahun; ~22.000 custom object; ~2,7 juta baris kode; 40–60% kode tak terpakai) adalah **estimasi industri**, bukan jaminan. Sandingkan dengan padanan analis yang lebih kuat: **McKinsey** — tech debt = **20–40% nilai technology estate** dan **10–20% budget produk baru** habis untuk membayar "tech-debt tax". Gunakan McKinsey sebagai otoritas utama untuk framing biaya inaksi ke direksi.
- **Angka jangkar SAP yang aman & terverifikasi**: SAP ECC / Business Suite 7 mainstream maintenance berakhir **31 Des 2027**; extended maintenance **2028–2030** dengan premium **2 poin persentase** di atas basis maintenance; setelah 2030 hanya customer-specific maintenance (opsi transisi private-edition sampai 2033 untuk pelanggan terpilih — perlakukan hati-hati). Semua dari **SAP Support Portal (resmi)**. Ini pemicu jadwal anggaran yang sah untuk business case.
- **Model extensibility A–D sudah resmi (Agustus 2025).** SAP mengganti model 3-tier lama dengan **4 level A–D**. **Level A** = ekstensi paling bersih & upgrade-safe (ABAP Cloud on-stack atau side-by-side di SAP BTP dengan released API). **Level D** = tidak direkomendasikan, "highest risk and create significant technical debt". Ini menghubungkan bahasa teknis ke bahasa risiko/biaya yang dipahami direksi.
- **Soltius anchor**: **ERP Strategy + readiness/assessment** sebagai SAP Platinum Partner via United VARs, di **closing**. Framing: Soltius membantu menyusun penilaian kesiapan & business case sebelum konversi — **bukan "membangun" SAP**. Maks 2–3 self-mention (closing + opsional 1 aside di H2 #4).

## Core facts (verified)

> **Claim**: SAP menghentikan mainstream maintenance untuk SAP ECC (SAP Business Suite 7).
> **Number/specific**: Mainstream maintenance untuk core applications SAP Business Suite 7 (termasuk SAP ERP 6.0 / ECC) berlaku hingga **akhir 2027 (31 Desember 2027)**.
> **Source**: SAP Support Portal — "Maintenance strategy" (support.sap.com/en/offerings-programs/strategy.html), diakses 2026-07-07.
> **Confidence**: high

> **Claim**: Tersedia extended maintenance berbayar setelah 2027 dengan surcharge.
> **Number/specific**: Extended maintenance tersedia **2028 hingga akhir 2030** (tiga tahun) dengan **premium 2 poin persentase** di atas basis maintenance untuk seluruh scope SAP Business Suite 7. Setelah 2030: customer-specific maintenance.
> **Source**: SAP Support Portal — "Maintenance strategy", diakses 2026-07-07.
> **Confidence**: high

> **Claim**: Ada opsi memperpanjang keberlangsungan ECC sampai 2033 lewat jalur khusus.
> **Number/specific**: SAP memperkenalkan **transition option (private edition)** yang memungkinkan pelanggan terpilih menjalankan ECC dalam lingkungan SAP-managed private cloud dengan dukungan hingga **2033** — hanya untuk pelanggan yang memenuhi syarat komersial tertentu (mis. komitmen pindah ke S/4HANA/RISE). Bukan default untuk semua pelanggan.
> **Source**: E3 Magazine & SAPinsider (mengutip pengumuman SAP), diakses 2026-07-07.
> **Confidence**: medium (2027/2030 = SAP resmi high; detail 2033 dilaporkan pihak ketiga tepercaya — labeli "untuk pelanggan terpilih, syarat berlaku", jangan sajikan sebagai hak umum).

> **Claim**: Clean core adalah prinsip menjaga inti ERP tetap sedekat mungkin dengan standar bawaan SAP.
> **Number/specific**: SAP mendefinisikan clean core sebagai menjaga sistem ERP "as close as possible to its standard, vendor-provided state" sambil menangani kustomisasi lewat **cloud extensions & side-by-side innovations**, sehingga sistem bisa cepat mengadopsi update tanpa merusak kustomisasi.
> **Source**: SAP — "What is a clean core?" (sap.com/resources/what-is-a-clean-core) + SAP Community "Clean Core demystified", diakses 2026-07-07.
> **Confidence**: high

> **Claim**: Clean core mencakup enam dimensi, bukan sekadar "kurangi custom code".
> **Number/specific**: Enam dimensi clean core: **software stack, extensibility, integrations, processes, data, operations**. Masing-masing perlu dijaga standar/terkelola agar upgrade aman.
> **Source**: SAP (RISE with SAP — clean core methodology) via ringkasan sap.com/products/erp/rise/methodology/clean-core + SAP Community, diakses 2026-07-07.
> **Confidence**: high (enam dimensi konsisten di materi SAP; halaman RISE clean-core memblokir fetch langsung — dikuatkan sumber sekunder yang mengutip SAP).

> **Claim**: SAP mengganti model extensibility 3-tier lama dengan model 4 level (A–D) pada 2025.
> **Number/specific**: Sejak **Agustus 2025**, SAP memformalkan **Clean Core Extensibility Levels A–D** (menggantikan model 3-tier), mengklasifikasikan setiap ekstensi berdasarkan upgrade-safety & kepatuhan clean core.
> **Source**: SAP News Center — "How to Extend SAP S/4HANA Cloud the Right Way" (news.sap.com/2025/08/extend-sap-s4hana-cloud-right-way-clean-clear/), dipublikasikan 12 Agustus 2025, diakses 2026-07-07.
> **Confidence**: high

> **Claim**: Level A adalah ekstensi paling bersih dan upgrade-safe.
> **Number/specific**: **Level A** = "fully compliant extensions using only publicly released and stable SAP interfaces, backed by formal stability contracts" — dibangun on-stack dengan **ABAP Cloud** atau side-by-side dengan **SAP Build di SAP BTP** memakai **released API**.
> **Source**: SAP News Center — 12 Agustus 2025, diakses 2026-07-07.
> **Confidence**: high

> **Claim**: Level D adalah ekstensi yang tidak direkomendasikan dan menciptakan technical debt signifikan.
> **Number/specific**: **Level D** = ekstensi yang tidak dianggap "clean" — memakai modifikasi, write access ke tabel SAP, atau implicit enhancement; SAP menyebutnya **"the highest risk and create significant technical debt"**. Level B = classic API (umumnya upgrade-stable); Level C = akses objek internal SAP (untuk skenario legacy, berisiko).
> **Source**: SAP News Center — 12 Agustus 2025, diakses 2026-07-07.
> **Confidence**: high

> **Claim**: Technical debt adalah beban finansial besar dan terukur bagi enterprise (framing biaya inaksi untuk CFO).
> **Number/specific**: Menurut survei McKinsey terhadap CIO, tech debt diperkirakan setara **20–40% nilai seluruh technology estate** (sebelum depresiasi); dan **10–20% budget teknologi untuk produk baru** teralihkan untuk menyelesaikan isu tech debt ("tech-debt tax"). **60% CIO** merasa tech debt organisasinya naik dalam tiga tahun terakhir.
> **Source**: McKinsey Digital — "Tech debt: Reclaiming tech equity" (mckinsey.com), survei ~50 CIO perusahaan >USD 1 miliar, diakses 2026-07-07.
> **Confidence**: high (analis Tier-1; angka umum enterprise, bukan spesifik SAP — labeli sebagai konteks industri).

> **Claim**: Estimasi industri biaya technical debt kustomisasi di sistem SAP ECC.
> **Number/specific**: Sistem SAP ECC rata-rata mengakumulasi **~22.000 custom object** dan **~2,7 juta baris kode kustom**; **40–60% kode kustom** biasanya secara teknis tak terpakai/usang; biaya testing & maintenance tahunan diperkirakan **USD 0,25–0,63 per baris kode**; sekitar **~300.000 technical-debt issue** tersembunyi (performance, security, stability).
> **Source**: smartShift — "SAP Technical Debt: What It Really Costs and How to Measure It in Custom Code" (smartshift.com), diakses 2026-07-07.
> **Confidence**: medium (vendor code-remediation; semua dilabeli SEBAGAI ESTIMASI/RATA-RATA oleh smartShift sendiri — writer WAJIB melabeli "estimasi industri, bukan jaminan"; lihat Flag ⚠️1).

> **Claim**: Rentang pengurangan TCO dari clean core (angka yang diklaim vendor/kasus).
> **Number/specific**: Beberapa kasus dan artikel industri menyebut clean core dapat menurunkan TCO **~30%**; namun ini angka kasus tertentu, bukan benchmark analis independen. Mekanisme yang lebih dapat dipertahankan: **less custom code → less testing & maintenance → lower long-term cost** + upgrade lebih cepat.
> **Source**: Prolifics / erp.today case (Parle 30% TCO cut) — dilabeli sebagai kasus; mekanisme dari SAP "What is a clean core?", diakses 2026-07-07.
> **Confidence**: low untuk angka % TCO spesifik (klaim kasus/vendor — JANGAN sajikan sebagai jaminan atau rata-rata; lihat Flag ⚠️2). high untuk mekanisme kualitatif.

> **Claim**: Clean core adalah prasyarat/enabler menuju cloud ERP dan siklus upgrade cepat.
> **Number/specific**: Dengan clean core, perusahaan dapat "quickly adopt new software updates without worrying about breaking customizations" dan mengakses fitur/patch keamanan/kepatuhan terbaru segera. Clean core juga menjadi fondasi kesiapan AI/analitik di atas proses & data standar.
> **Source**: SAP — "What is a clean core?" + SAP Community, diakses 2026-07-07.
> **Confidence**: high

> **Claim**: Konteks pasar: dorongan migrasi S/4HANA dipacu tenggat ECC 2027, termasuk ekspansi ke Indonesia.
> **Number/specific**: Berakhirnya dukungan ECC 2027 menjadi pendorong utama migrasi S/4HANA global. SAP mengumumkan (Juni 2025) S/4HANA Cloud Public Edition untuk sejumlah vertikal tersedia di **Indonesia** (bersama Malaysia, Filipina, Korea Selatan, Thailand) mulai akhir 2025 — memperluas dari gelombang sebelumnya (Australia, India, Selandia Baru, Singapura).
> **Source**: SAP news / ringkasan pasar S/4HANA (news.sap.com, 2025), diakses 2026-07-07.
> **Confidence**: high untuk pendorong 2027; medium untuk detail daftar negara/tanggal rilis (dari ringkasan — verifikasi ulang jika dikutip spesifik; lihat Flag ⚠️5).

## Solution focus + Soltius anchor (from product_matrix.md)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| **Prinsip clean core** (6 dimensi; inti S/4HANA standar & upgrade-safe) | Definisi SAP; 6 dimensi: software, extensibility, integrations, processes, data, operations | H2 #1 (definisi 40–60 kata) | — |
| **Technical debt / custom code (Z-code)** sebagai biaya inaksi | Estimasi smartShift (dilabeli) + otoritas McKinsey (20–40% estate; 10–20% budget = tech-debt tax) | H2 #2 (biaya inaksi) | — |
| **Model extensibility A–D** (Level A upgrade-safe → Level D not-recommended) | Resmi sejak Agustus 2025; Level A = ABAP Cloud/BTP + released API; Level D = highest risk, significant technical debt | H2 #2/#3 (bahasa risiko→biaya) | — |
| **ABAP Cloud & SAP BTP** sebagai tempat ekstensi | Side-by-side di BTP (decoupled) + on-stack ABAP Cloud (upgrade-stable); pindahkan kustomisasi keluar inti | H2 #4 (komponen biaya remediasi/enablement) | ERP Strategy / Enhancement (aside opsional) |
| **SAP ECC end of maintenance** sebagai pemicu jadwal anggaran | 2027 mainstream; 2028–2030 extended (+2%-poin); 2033 hanya jalur khusus pelanggan terpilih | H2 #2 (pemicu anggaran) | — |
| **RISE with SAP** (konteks kesiapan cloud) | Clean core adalah metodologi di dalam RISE; enabler cloud-ready | H2 #3 aside | — |
| **Soltius: ERP Strategy + readiness/assessment** | SAP Platinum Partner via United VARs; menyusun business case & penilaian kesiapan | closing (+1 aside H2 #4) | **ERP Strategy + readiness assessment (SAP Platinum Partner via United VARs)** |

Reminder: Soltius **implements/migrates/supports** — tidak membangun SAP. Maks 2–3 Soltius self-mention (idealnya closing + satu aside di H2 #4). Untuk topik ini gunakan credibility line: "Sebagai SAP Platinum Partner melalui United VARs, Soltius mendampingi perusahaan menyusun penilaian kesiapan dan business case sebelum proyek konversi."

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **SAP Support Portal — "Maintenance strategy" (diakses 2026-07-07)** — https://support.sap.com/en/offerings-programs/strategy.html — *what it backs*: ECC/Business Suite 7 mainstream maintenance sampai akhir 2027; extended maintenance 2028–2030 dengan premium 2 poin persentase. (Otoritas tertinggi untuk tanggal maintenance.)
2. **SAP News Center — "How to Extend SAP S/4HANA Cloud the Right Way" (12 Agu 2025, diakses 2026-07-07)** — https://news.sap.com/2025/08/extend-sap-s4hana-cloud-right-way-clean-clear/ — *what it backs*: model Clean Core Extensibility Levels A–D; Level A upgrade-safe (ABAP Cloud/BTP + released API); Level D highest risk & significant technical debt.
3. **McKinsey Digital — "Tech debt: Reclaiming tech equity" (diakses 2026-07-07)** — https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/tech-debt-reclaiming-tech-equity — *what it backs*: tech debt = 20–40% nilai technology estate; 10–20% budget produk baru habis untuk tech-debt tax. (Otoritas analis untuk framing biaya inaksi ke direksi.)
4. **SAP — "What is a clean core?" (diakses 2026-07-07)** — https://www.sap.com/resources/what-is-a-clean-core — *what it backs*: definisi clean core & manfaat upgrade cepat/patch keamanan. (Catatan: halaman kadang mem-block fetch otomatis 403; dikuatkan SAP Community "Clean Core demystified".)
5. **smartShift — "SAP Technical Debt: What It Really Costs" (diakses 2026-07-07)** — https://smartshift.com/blog/sap-technical-debt-what-it-really-costs-and-how-to-measure-it-in-custom-code — *what it backs*: estimasi industri biaya technical debt (labeli sebagai ESTIMASI vendor).

Priority linkout: 1 SAP resmi (maintenance strategy) + 1 analis (McKinsey) sebagai dua sumber otoritatif utama. SAP News (A–D) untuk fakta produk. smartShift hanya bila dilabeli estimasi.

## FAQ Q&As (6 drafted, Bahasa Indonesia)

### Apa itu business case clean core?
Business case clean core adalah dokumen justifikasi investasi yang menerjemahkan manfaat teknis clean core — inti S/4HANA yang standar dan mudah di-upgrade — menjadi angka finansial yang dipahami direksi: biaya inaksi (technical debt), penghematan maintenance, penghindaran biaya upgrade, dan kesiapan cloud/AI. Intinya membingkai "core yang bersih" sebagai keputusan investasi dengan biaya, manfaat, dan risiko yang terukur, bukan sekadar proyek teknis.

### Berapa biaya technical debt kustomisasi SAP?
Tidak ada angka tunggal; besarnya bergantung pada jumlah custom code dan kompleksitas sistem. Sebagai konteks, McKinsey memperkirakan technical debt setara 20–40% nilai seluruh technology estate perusahaan, dan 10–20% anggaran teknologi untuk inovasi teralihkan untuk membayarnya. Estimasi industri smartShift menyebut sistem ECC rata-rata menumpuk ~22.000 custom object dengan 40–60% kode tak terpakai. Semua ini estimasi, bukan tarif pasti.

### Berapa penghematan TCO yang realistis dari clean core?
Jujur: tidak ada persentase yang dijamin. Beberapa kasus menyebut pengurangan TCO sekitar 30%, tetapi itu angka kasus tertentu, bukan benchmark independen. Mekanisme penghematan yang bisa dipertanggungjawabkan lebih penting daripada angka: lebih sedikit custom code berarti lebih sedikit testing dan maintenance, siklus upgrade lebih cepat dan murah, serta kesiapan mengadopsi fitur baru. Hitung sendiri dari basis biaya Anda, jangan menelan angka vendor mentah.

### Bagaimana membingkai biaya inaksi (cost of inaction) ke CFO?
Bingkai dalam bahasa jadwal dan risiko anggaran, bukan istilah teknis. Sandarkan pada tenggat nyata: mainstream maintenance SAP ECC berakhir 31 Desember 2027, dan extended maintenance 2028–2030 dikenai premium 2 poin persentase di atas basis maintenance (SAP resmi). Tambahkan bahwa setiap tahun penundaan membuat custom code menumpuk dan upgrade makin mahal — sehingga menunda justru menaikkan biaya, bukan menghematnya.

### Apakah clean core selalu menghemat biaya?
Tidak otomatis. Clean core adalah investasi bertingkat, bukan tombol penghemat instan. Untuk sistem yang akan segera di-decommission, remediasi besar mungkin tak sepadan. Beberapa kustomisasi juga wajib dipertahankan karena kepatuhan atau proses unik yang jadi keunggulan kompetitif. Menjanjikan penghematan pasti adalah kesalahan — clean core menghasilkan nilai lewat upgrade yang lebih murah dan agility jangka panjang, yang besarnya bergantung pada konteks tiap perusahaan.

### Kapan clean core belum layak secara finansial?
Ketika sistem target akan dipensiunkan atau digantikan dalam waktu dekat, ketika kustomisasi yang ada memang diwajibkan regulasi, atau ketika belum ada rencana migrasi/upgrade yang membuat manfaat "upgrade-safe" relevan. Model extensibility SAP sendiri bertingkat (Level A hingga D) — artinya clean core dapat dicicil sesuai prioritas, bukan proyek habis-habisan. Mulai dari ekstensi berisiko tertinggi (Level D) yang paling membebani setiap upgrade.

## Data tables for the writer

### Kerangka biaya vs manfaat business case clean core (H2 #4)
| Sisi | Komponen | Catatan untuk proposal |
|---|---|---|
| **Biaya** | Assessment / readiness (penilaian kesiapan clean core) | Sekali di depan; mengubah asumsi jadi angka |
| **Biaya** | Remediasi custom code (Z-code) — analisis, konsolidasi, decommission | Prioritaskan Level D (paling membebani upgrade) |
| **Biaya** | Enablement ekstensi di SAP BTP / ABAP Cloud | Pindahkan kustomisasi keluar inti (side-by-side / on-stack) |
| **Biaya** | Pelatihan & change management | Adopsi proses standar |
| **Manfaat** | Penghindaran biaya & premium maintenance ECC | Extended 2028–2030 = +2%-poin (SAP resmi) |
| **Manfaat** | Siklus upgrade lebih cepat & murah | Lebih sedikit custom code = lebih sedikit testing |
| **Manfaat** | Turunnya "tech-debt tax" | McKinsey: 10–20% budget inovasi teralihkan |
| **Manfaat** | Kesiapan cloud/AI/BI di atas proses & data standar | Enabler, bukan angka langsung |

### Model Clean Core Extensibility Levels A–D (H2 #2/#3) — resmi SAP, Agu 2025
| Level | Ringkas | Upgrade-safety | Implikasi biaya/risiko |
|---|---|---|---|
| **A** | Released API; ABAP Cloud on-stack atau SAP BTP side-by-side | Tertinggi (stability contract) | Paling rendah; target ideal |
| **B** | Classic API SAP (terdokumentasi) | Umumnya stabil | Rendah–sedang |
| **C** | Akses objek internal SAP (skenario legacy) | Berisiko (perlu changelog) | Sedang–tinggi |
| **D** | Modifikasi, write ke tabel SAP, implicit enhancement | Terendah — "not recommended" | Tertinggi; "significant technical debt" |

### Tenggat maintenance SAP ECC sebagai pemicu anggaran (H2 #2)
| Fase | Periode | Biaya/kondisi | Sumber |
|---|---|---|---|
| Mainstream maintenance | s.d. 31 Des 2027 | Basis maintenance standar | SAP Support (resmi) |
| Extended maintenance | 2028 – 2030 | +2 poin persentase di atas basis | SAP Support (resmi) |
| Setelah 2030 | 2031+ | Customer-specific maintenance | SAP Support (resmi) |
| Transition option (private edition) | s.d. 2033 | Hanya pelanggan terpilih, syarat komersial | E3/SAPinsider (pihak ketiga) |

## Edge cases & nuance

- **"ECC berakhir 2027" harus diframe sebagai Business Suite 7 core (EhP 6–8).** Jangan generalisasi ke semua rilis lama; EhP lama sudah berakhir lebih awal. Aman: "mainstream maintenance SAP Business Suite 7 hingga akhir 2027".
- **Angka 2033 bukan hak umum.** Itu opsi transisi bersyarat untuk pelanggan terpilih (komitmen migrasi). Jangan sajikan sebagai "ECC aman sampai 2033" — bisa menyesatkan pembaca yang menunda.
- **Persentase TCO/technical-debt = estimasi, bukan jaminan.** Ini disiplin utama artikel. smartShift & angka "30% TCO" adalah klaim vendor/kasus; McKinsey adalah konteks industri lintas sektor (bukan khusus SAP). Selalu labeli sumber & sifat estimasi.
- **Clean core itu bertingkat ("50 shades of clean core").** Model A–D membuktikan clean core bisa dicicil — bukan biner "bersih vs kotor". Ini memperkuat H2 #5: business case boleh bertahap, mulai dari Level D.
- **Custom code ≠ selalu buruk.** Sebagian kustomisasi adalah diferensiasi kompetitif atau kepatuhan wajib. Business case yang jujur memisahkan "debt yang harus dibayar" dari "investasi yang disengaja".
- **Konteks Indonesia (opsional).** Siklus RKAP/CAPEX tahunan bisa disebut sebagai pemicu jadwal anggaran — tetapi hanya sebagai konteks umum praktik korporasi, tanpa klaim numerik bersumber (tidak ada sumber spesifik yang diverifikasi untuk angka ini).

## Flags (open factual risk)

- ⚠️1 **Angka smartShift (USD/baris, 22.000 object, 40–60%)**: estimasi vendor code-remediation, dilabeli sebagai rata-rata/estimasi oleh smartShift sendiri. → Writer WAJIB menulis "estimasi industri" dan tidak menyajikannya sebagai tarif/jaminan. Idealnya sandingkan dengan McKinsey untuk otoritas.
- ⚠️2 **"Pengurangan TCO ~30%"**: klaim kasus/vendor (mis. kasus Parle di erp.today, artikel Prolifics), BUKAN benchmark analis independen. → Sajikan sebagai "beberapa kasus menyebut", jangan sebagai rata-rata/jaminan. Brief menyebut rentang "~30–55%"; angka 55% TIDAK terkonfirmasi di sumber otoritatif — JANGAN kutip 55% tanpa sumber; aman gunakan hanya framing kualitatif + satu contoh kasus berlabel.
- ⚠️3 **Detail 2033**: 2027 (mainstream) & 2030 (extended, +2%) = SAP resmi, aman. 2033 = dilaporkan E3/SAPinsider sebagai transition option bersyarat untuk pelanggan terpilih. → Labeli "hanya pelanggan terpilih, syarat komersial"; jangan sajikan sebagai deadline umum.
- ⚠️4 **Definisi & 6 dimensi clean core**: halaman resmi sap.com/resources/what-is-a-clean-core dan halaman RISE clean-core methodology mem-block fetch otomatis (HTTP 403) saat diakses; fakta dikuatkan lewat SAP Community & ringkasan yang mengutip SAP. → Konten (6 dimensi, definisi) high-confidence, tetapi jika writer mengutip frasa persis, atribusikan ke "SAP (materi clean core RISE)" bukan URL spesifik yang belum bisa dibuka langsung sesi ini.
- ⚠️5 **Detail ekspansi Indonesia (daftar negara/tanggal rilis 2025)**: berasal dari ringkasan pasar, bukan fetch langsung ke news.sap.com. → Aman menyebut "tenggat ECC 2027 mendorong migrasi S/4HANA" (kuat). Jika mengutip daftar negara/tanggal spesifik Indonesia, verifikasi ulang atau frasa longgar ("SAP memperluas ketersediaan S/4HANA Cloud di Asia Tenggara, termasuk Indonesia").
- ⚠️6 **McKinsey angka technical debt (20–40%, 10–20%)**: valid & Tier-1, tetapi berasal dari survei CIO lintas industri (finansial/teknologi, perusahaan >USD 1 miliar, survei 2020), BUKAN khusus SAP. → Gunakan sebagai konteks industri untuk framing biaya inaksi, jangan implikasikan sebagai angka khusus lingkungan SAP.

## Definition snippet draft (40–60 words)

> **Business case clean core** adalah justifikasi investasi yang menerjemahkan manfaat teknis clean core — menjaga inti SAP S/4HANA tetap standar dan mudah di-upgrade dengan memindahkan kustomisasi ke SAP BTP atau ABAP Cloud — menjadi angka finansial untuk direksi: biaya inaksi (technical debt), penghematan maintenance, penghindaran biaya upgrade, dan kesiapan cloud. Intinya membingkai "core yang bersih" sebagai keputusan investasi terukur, bukan proyek teknis abstrak.
