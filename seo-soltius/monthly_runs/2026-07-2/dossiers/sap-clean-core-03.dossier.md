---
brief_id: "sap-clean-core-03"
researcher_run_date: "2026-07-07"
sources_cited: 13
flags: 6
---

# Research Dossier: Fit-to-Standard — Hambatan Terbesar SAP Clean Core Bukan Teknologi, Tapi Budaya

## TL;DR for the writer

- **Sudut ini psikologis & organisasional, bukan teknis.** Tim IT bisa punya semua alat clean core (ABAP Cloud, BTP, ATC), tapi yang menentukan sukses/gagal adalah *kesediaan pemilik proses bisnis mengubah cara kerjanya* agar cocok dengan praktik terbaik bawaan SAP. Jangan mengulang materi teknis remediasi/extensibility (sudah ada di artikel lain cluster ini) — jadikan A–D hanya *rujukan pendukung*, bukan subjek.
- **Frasa jangkar yang aman & terverifikasi**: **"Why not standard" mindset** — SAP-Press mendefinisikannya sebagai "adopting SAP's standard processes first and allowing deviations only with strong justification" (blog.sap-press.com, 12 Des 2025). Padukan dengan **fit-to-standard mindset** dari SAP Learning "Managing Clean Core" (learning.sap.com): dari "How do we force the system to match our historical ways of working?" ke "How can we leverage standard, best-practice processes to become more agile and efficient?".
- **"Two-question test" adalah framing praktisi/komunitas, BUKAN frasa resmi SAP verbatim.** SAP Learning sebenarnya memakai **klasifikasi tiga kategori** (Standard → Enhanced (konfigurasi/pengembangan) → Custom) dan menetapkan deviasi hanya untuk tiga alasan: **industry compliance, local regulatory requirements, market-differentiating capabilities dengan nilai bisnis terukur (quantifiable value)**. Writer boleh menyajikan "two-question test" sebagai *penyederhanaan populer* dari logika ini — jangan diklaim sebagai istilah resmi SAP. (Lihat Flag ⚠️2.)
- **Klaim "hambatan terberat bersifat organisasi/budaya" harus diatribusikan sebagai pandangan praktisi.** Sumber terkuat: **IgniteSAP "Resistance to Standardization in SAP Projects"** (30 Jan 2025) + "SAP's Clean Core in Practice". Keduanya menyebut delivery pressure, governance kurang sumber daya, resistensi budaya ke standar, dan kebiasaan meraih custom code. Ini pandangan industri, bukan statistik absolut — labeli.
- **SAP Signavio boleh disebut sebagai alat objektif untuk "berdebat dengan data, bukan opini"** — tapi hanya untuk kapabilitas nyata: **process mining** (menemukan bagaimana proses benar-benar berjalan dari data transaksi) dan **conformance checking** (membandingkan proses aktual dengan model referensi/standar untuk menyorot deviasi). Jangan mengklaim ia otomatis "memutuskan" standar vs custom. (Lihat Flag ⚠️3.)
- **Statistik "70% transformasi gagal" itu KONTROVERSIAL asal-usulnya.** Sering diatribusikan ke McKinsey, tetapi laporan McKinsey sendiri melacaknya balik ke Kotter dan tidak ada dasar empiris tunggal — rantai sitasi melingkar. Jika dipakai, framing sebagai "sering dikutip" bukan "menurut McKinsey, 70%". (Lihat Flag ⚠️4.)
- **Soltius anchor**: **Change Management + ERP Strategy** sebagai SAP Platinum Partner via United VARs, di **closing**. Framing: Soltius mendampingi fase fit-to-standard & adopsi (workshop Business Blueprint, sponsor eksekutif) — **bukan "membangun" SAP**. Maks 2–3 self-mention (closing + opsional 1 aside di H2 #4).

## Core facts (verified)

> **Claim**: Fit-to-standard adalah pergeseran pola pikir, bukan sekadar teknik konfigurasi.
> **Number/specific**: SAP Learning membingkainya sebagai perubahan dari pertanyaan "How do we force the system to match our historical ways of working?" menjadi "How can we leverage standard, best-practice processes to become more agile and efficient?" — memakai "Fit to Standard mindset and methodology" dan "leverage SAP Best Practices (configuration elements, test scripts, process diagrams)".
> **Source**: SAP Learning — "Exploring How to Make Business Processes Clean Core Compliant" (course *Managing Clean Core for SAP Cloud ERP*), learning.sap.com, diakses 2026-07-07.
> **Confidence**: high

> **Claim**: SAP menganjurkan pola pikir "Why not standard".
> **Number/specific**: "Embracing a 'Why not standard' mindset (adopting SAP's standard processes first and allowing deviations only with strong justification) minimizes customizations and preserves system integrity."
> **Source**: SAP-Press blog — "SAP S/4HANA Clean Core: Principles, Benefits, and Best Practices", blog.sap-press.com, dipublikasikan 12 Desember 2025, diakses 2026-07-07.
> **Confidence**: high (penerbit resmi ekosistem SAP; frasa mindset selaras dengan SAP Learning).

> **Claim**: Clean core lebih dari strategi teknis — ia perlu disiplin/komitmen organisasi.
> **Number/specific**: "The SAP S/4HANA clean core approach is more than just a technical strategy; it is a foundational pillar for building a future-ready, intelligent enterprise." Ekstensi hanya dibuat setelah "first evaluating whether standard ERP features or configurations can fulfill the business need".
> **Source**: SAP-Press blog — 12 Desember 2025, diakses 2026-07-07.
> **Confidence**: high

> **Claim**: SAP menetapkan logika keputusan standar-vs-custom berbasis kategori, dan hanya membolehkan deviasi untuk alasan tertentu.
> **Number/specific**: SAP Learning mengklasifikasikan proses menjadi tiga: **Standard** (SAP-delivered), **Enhanced** (standar + konfigurasi/pengembangan), dan **Custom**. Deviasi dari standar hanya dipertimbangkan untuk: **(1) industry compliance requirements, (2) local regulatory requirements, (3) market-differentiating capabilities yang menawarkan quantifiable business value**.
> **Source**: SAP Learning — "Exploring How to Make Business Processes Clean Core Compliant", learning.sap.com, diakses 2026-07-07.
> **Confidence**: high

> **Claim**: "Two-question test" adalah penyederhanaan populer dari logika di atas, bukan istilah resmi SAP verbatim.
> **Number/specific**: Framing praktisi/komunitas: setiap kebutuhan lulus dua pertanyaan — (a) bisakah SAP standard memenuhinya? (b) jika tidak, cukupkah ekstensi Level A/B? Baru setelah keduanya "tidak", kustomisasi lebih dalam dipertimbangkan, dengan persetujuan governance. SAP Learning sendiri memakai klasifikasi tiga kategori + tiga alasan deviasi (lihat fakta sebelumnya), bukan frasa "two-question test".
> **Source**: Framing industri/komunitas (IgniteSAP; SAP Community "pragmatic common sense"); logika inti dikuatkan SAP Learning, diakses 2026-07-07.
> **Confidence**: medium (logika high; nama "two-question test" bukan istilah resmi SAP — lihat Flag ⚠️2).

> **Claim**: Hambatan terberat clean core bersifat organisasi/budaya, bukan teknologi.
> **Number/specific**: "Delivery pressure, under-resourced governance, cultural resistance to standard processes, and the deeply embedded habit of reaching for custom code when a business requirement arrives are all present on most projects today." Resistensi berakar pada "established business practices, cultural barriers, and technical concerns".
> **Source**: IgniteSAP — "SAP's Clean Core in Practice" dan "Resistance to Standardization in SAP Projects" (30 Jan 2025), ignitesap.com, diakses 2026-07-07.
> **Confidence**: medium (pandangan praktisi berpengalaman, bukan studi terkontrol — atribusikan sebagai "pandangan industri"; lihat Flag ⚠️1).

> **Claim**: Banyak organisasi melebih-lebihkan keunikan prosesnya.
> **Number/specific**: "Many organizations overestimate the need for ERP customization" dan mengasumsikan "their workflows are too complex for SAP's standard functionalities" — padahal seringkali sekadar kebiasaan lama, bukan diferensiasi nyata.
> **Source**: IgniteSAP — "Resistance to Standardization in SAP Projects" (30 Jan 2025), ignitesap.com, diakses 2026-07-07.
> **Confidence**: medium (pandangan praktisi; atribusikan).

> **Claim**: Resistensi paling efektif diatasi lewat komunikasi yang disesuaikan per audiens, pelatihan, dan advokat internal.
> **Number/specific**: Untuk eksekutif, "discussions should focus on financial savings, operational efficiency, and scalability"; untuk tim IT, pada "system reliability, reduced maintenance workloads, and long-term advantages". "Interactive training methods such as scenario-based learning tend to be more effective than passive instruction"; "internal advocates within departments can help drive adoption".
> **Source**: IgniteSAP — "Resistance to Standardization in SAP Projects" (30 Jan 2025), ignitesap.com, diakses 2026-07-07.
> **Confidence**: medium (pandangan praktisi).

> **Claim**: Setiap kustomisasi menambah beban maintenance jangka panjang dan risiko upgrade.
> **Number/specific**: Praktik clean core "lower maintenance efforts, reduce technical debt, and cut down long-term costs related to custom development and support"; ekstensi harus "be avoided whenever possible" dengan mengevaluasi dulu apakah fitur/konfigurasi standar cukup. Implikasinya: tiap permintaan custom adalah *utang berulang*, bukan biaya sekali.
> **Source**: SAP-Press blog — 12 Desember 2025, diakses 2026-07-07.
> **Confidence**: high

> **Claim**: Model extensibility clean core resmi berjenjang A–D — memberi bahasa objektif untuk mengklasifikasikan tiap permintaan custom.
> **Number/specific**: Sejak **Agustus 2025** SAP memformalkan **Clean Core Extensibility Levels A–D**. **Level A** = released/public stable API (ABAP Cloud on-stack atau side-by-side di SAP BTP), upgrade-safe. **Level B** = classic API resmi (diizinkan bila A tak cukup, perlu governance). **Level C** = objek internal SAP (risiko upgrade). **Level D** = tidak direkomendasikan (modifikasi core, write ke tabel SAP), "highest risk and create significant technical debt".
> **Source**: SAP News Center — "How to Extend SAP S/4HANA Cloud the Right Way" (12 Agustus 2025), news.sap.com/2025/08/extend-sap-s4hana-cloud-right-way-clean-clear/, diakses 2026-07-07.
> **Confidence**: high (rujukan pendukung, bukan subjek utama artikel ini).

> **Claim**: SAP Signavio Process Intelligence dapat menemukan bagaimana proses benar-benar berjalan (process mining).
> **Number/specific**: SAP Signavio "empowers organizations to deeply analyze and continuously monitor how their business processes actually run", secara otomatis menghasilkan model proses interaktif dari data yang diekstrak, menyorot varian, rework loop, dan bottleneck.
> **Source**: SAP Signavio Process Intelligence (signavio.com/products/process-intelligence) + SAP Learning "Process Mining in Practice", diakses 2026-07-07.
> **Confidence**: high

> **Claim**: SAP Signavio dapat melakukan conformance checking — membandingkan proses aktual dengan model referensi/standar untuk menyorot deviasi.
> **Number/specific**: Conformance check "compares the discovered process model (as-is) with a predefined process model to identify deviations, compliance issues, and bottlenecks"; KPI utama = conformity rate + deviasi (langkah hilang, proses berubah, loop). Ini yang membuat debat "proses kita unik" bisa diuji dengan fakta, bukan opini.
> **Source**: SAP Signavio dokumentasi/knowledge (help.sap.com signavio-process-intelligence; abat "Conformance Check with SAP Signavio", 2025), diakses 2026-07-07.
> **Confidence**: high untuk kapabilitas; medium untuk framing "alat mengakhiri debat" (itu interpretasi — lihat Flag ⚠️3).

> **Claim**: Deviasi dari standar SAP kadang memang sah dan disengaja.
> **Number/specific**: Tiga skenario yang membenarkan kustomisasi menurut praktisi: **regulatory compliance** di industri terkontrol, **operasi terspesialisasi** yang standar SAP-nya tak memadai, dan **keunggulan kompetitif sejati** ("business processes do drive unique value" — walau lebih jarang daripada yang diklaim). Kuncinya: keputusan sadar & terdokumentasi via ekstensi bersih (Level A/B), bukan menyerah pada setiap permintaan.
> **Source**: IgniteSAP — "Resistance to Standardization in SAP Projects" (30 Jan 2025), selaras dengan tiga alasan deviasi SAP Learning, diakses 2026-07-07.
> **Confidence**: high (dikuatkan dua sumber; SAP Learning = otoritas untuk kriteria).

> **Claim**: Tanpa disiplin/oversight, kustomisasi merayap kembali setelah go-live.
> **Number/specific**: "Without strong oversight, customization can gradually creep back in." Fase pasca go-live paling sering menjadi titik gagal karena tim implementasi mundur dan perhatian governance pindah ke proyek berikutnya.
> **Source**: IgniteSAP — "Resistance to Standardization" & "Clean Core in Practice", diakses 2026-07-07.
> **Confidence**: medium (pandangan praktisi; catat bahwa detail governance pasca go-live adalah topik artikel lain di cluster — di sini cukup sebagai penegasan pentingnya budaya berkelanjutan).

## Solution focus + Soltius anchor (from product_matrix.md)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| **Fit-to-standard & "Why not standard" mindset** | Pergeseran "ubah software→cocokkan proses" ke "sesuaikan proses ke best practice"; SAP Learning + SAP-Press | H2 #1 (definisi 40–60 kata) & #2 | — |
| **Logika keputusan standar-vs-custom** (klasifikasi 3 kategori + 3 alasan deviasi) | Standard → Enhanced → Custom; deviasi hanya utk compliance / local regulatory / market-differentiating dgn nilai terukur | H2 #3 ("two-question test" sebagai penyederhanaan populer) | — |
| **Model extensibility A–D** (rujukan pendukung) | Level A upgrade-safe → Level D not-recommended; bahasa objektif untuk menilai permintaan custom | H2 #3 aside | — |
| **SAP Signavio** (process mining + conformance checking) | Menemukan proses aktual; membandingkan dgn model standar untuk menyorot deviasi → berdebat dgn data | H2 #3 (alat objektif) | — |
| **Konsep change management** | Komunikasi per audiens, pelatihan scenario-based, sponsor eksekutif, advokat internal, keputusan terdokumentasi | H2 #4 (pola resistensi + penawar) | Change Management (aside opsional) |
| **Deviasi yang sah** | Compliance, operasi terspesialisasi, keunggulan kompetitif sejati — via ekstensi bersih, terdokumentasi | H2 #5 (honest) | — |
| **Soltius: Change Management + ERP Strategy** | SAP Platinum Partner via United VARs; mendampingi fit-to-standard & adopsi (workshop Business Blueprint) | closing (+1 aside H2 #4) | **Change Management + ERP Strategy (SAP Platinum Partner via United VARs)** |

Reminder: Soltius **implements/migrates/supports** — tidak membangun SAP. Maks 2–3 Soltius self-mention (idealnya closing + satu aside di H2 #4). Credibility line yang cocok: "Sebagai SAP Platinum Partner melalui United VARs, Soltius mendampingi perusahaan pada fase fit-to-standard dan adopsi pengguna — dari workshop hingga dukungan pasca go-live." Aside mid-article yang direkomendasikan brief: dalam praktik, resistensi paling reda ketika sponsor eksekutif ikut duduk di ruang keputusan proses.

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **SAP Learning — "Exploring How to Make Business Processes Clean Core Compliant" (course *Managing Clean Core for SAP Cloud ERP*), diakses 2026-07-07** — https://learning.sap.com/courses/managing-clean-core-for-sap-cloud-erp/exploring-how-to-make-business-processes-clean-core-compliant-1 — *what it backs*: fit-to-standard mindset resmi SAP; klasifikasi 3 kategori (Standard/Enhanced/Custom); tiga alasan sah deviasi (compliance, local regulatory, market-differentiating dengan quantifiable value). **Otoritas SAP-official untuk logika keputusan.**
2. **SAP-Press blog — "SAP S/4HANA Clean Core: Principles, Benefits, and Best Practices" (12 Des 2025), diakses 2026-07-07** — https://blog.sap-press.com/sap-s4hana-clean-core-principles-benefits-and-best-practices — *what it backs*: "Why not standard" mindset (definisi verbatim); clean core = lebih dari strategi teknis; evaluasi standar dulu sebelum ekstensi.
3. **SAP News Center — "How to Extend SAP S/4HANA Cloud the Right Way" (12 Agu 2025), diakses 2026-07-07** — https://news.sap.com/2025/08/extend-sap-s4hana-cloud-right-way-clean-clear/ — *what it backs*: model Clean Core Extensibility Levels A–D (rujukan pendukung).
4. **IgniteSAP — "Resistance to Standardization in SAP Projects" (30 Jan 2025), diakses 2026-07-07** — https://ignitesap.com/resistance-to-standardization-in-sap-projects/ — *what it backs*: hambatan budaya/organisasi; organisasi melebih-lebihkan keunikan; komunikasi per audiens + pelatihan; tiga skenario deviasi sah. **Labeli sebagai pandangan praktisi.**

Priority linkout untuk writer: **1 SAP-official (SAP Learning fit-to-standard)** + **1 pandangan praktisi berlabel (IgniteSAP resistensi)**. Hindari pesaing SI (jangan link ke halaman marketing integrator lain).

## FAQ Q&As (6 drafted, Bahasa Indonesia)

### Apa itu fit-to-standard?
Fit-to-standard adalah pendekatan menyesuaikan proses bisnis agar cocok dengan praktik terbaik bawaan SAP, alih-alih memodifikasi software agar cocok dengan cara kerja lama. SAP membingkainya sebagai pergeseran pola pikir: dari "bagaimana mengubah sistem agar sesuai kebiasaan kami" menjadi "bagaimana memanfaatkan proses standar agar lebih gesit dan efisien". Pendekatan ini menjadi inti clean core karena tanpa kesediaan mengurangi kustomisasi, alat teknis seperti ABAP Cloud dan SAP BTP tidak akan menjaga inti tetap bersih.

### Mengapa clean core lebih soal budaya daripada teknologi?
Karena alatnya sudah tersedia dan matang — ABAP Cloud, SAP BTP, model extensibility A–D — tetapi keputusan untuk *tidak* meng-custom ada di tangan pemilik proses bisnis, bukan tim IT. Pandangan praktisi (IgniteSAP) menyebut hambatan terberat justru bersifat organisasi: tekanan jadwal, governance kurang sumber daya, resistensi ke standar, dan kebiasaan meraih custom code. Teknologi bisa dibeli; kesediaan mengubah cara kerja harus dikelola lewat komunikasi, pelatihan, dan sponsor eksekutif.

### Apa itu mindset "why-not-standard"?
Mindset "why not standard" adalah kebiasaan menjadikan proses standar SAP sebagai titik awal default, dan hanya membolehkan deviasi bila ada justifikasi kuat. SAP-Press mendefinisikannya sebagai "adopting SAP's standard processes first and allowing deviations only with strong justification". Secara praktis, setiap permintaan kustomisasi harus membuktikan mengapa standar tidak cukup — membalik beban pembuktian dari "kenapa tidak custom" menjadi "kenapa tidak standar" — sehingga kustomisasi menjadi pengecualian yang disengaja, bukan refleks.

### Bagaimana menangani pemilik proses yang menolak standar?
Ganti debat opini dengan fakta dan biaya. Gunakan process mining seperti SAP Signavio untuk menunjukkan bagaimana proses benar-benar berjalan dan seberapa jauh menyimpang dari standar — conformance checking membandingkan proses aktual dengan model referensi. Kaitkan setiap permintaan custom dengan biaya maintenance berulang dan risiko upgrade, bukan biaya sekali. Sesuaikan pesan per audiens: eksekutif bicara penghematan dan skalabilitas, tim operasional bicara keandalan. Sertakan sponsor eksekutif dan dokumentasikan keputusannya.

### Kapan menyimpang dari standar SAP dibenarkan?
Fit-to-standard bukan "standar buta". SAP Learning membolehkan deviasi untuk tiga alasan: kepatuhan industri, kewajiban regulasi lokal, dan kapabilitas pembeda pasar yang memberi nilai bisnis terukur. Praktisi menambahkan operasi sangat terspesialisasi yang standarnya tidak memadai. Kuncinya: penyimpangan harus keputusan sadar dan terdokumentasi, diwujudkan lewat ekstensi bersih (Level A/B di luar inti) — bukan menyerah pada setiap permintaan atau memodifikasi core.

### Apa peran change management dalam clean core?
Change management adalah yang menentukan apakah prinsip clean core benar-benar dijalankan atau hanya jadi slide. Perannya: menyelaraskan pemilik proses lewat komunikasi yang disesuaikan per audiens, pelatihan berbasis skenario yang lebih efektif daripada instruksi pasif, membangun advokat internal di tiap departemen, dan memastikan sponsor eksekutif hadir di ruang keputusan proses. Tanpa oversight ini, praktisi mengingatkan bahwa kustomisasi perlahan merayap kembali setelah go-live dan inti kembali "kotor".

## Data tables for the writer

### Lima pola resistensi fit-to-standard → penyebab → penawar (H2 #4)
| Kalimat yang sering diucapkan | Penyebab sebenarnya | Penawar |
|---|---|---|
| "Proses kita unik" | Sering melebih-lebihkan keunikan; kebiasaan lama disalahartikan sebagai diferensiasi (IgniteSAP) | Uji dengan process mining/conformance (SAP Signavio): tunjukkan seberapa jauh proses menyimpang & apakah keunikan itu nyata |
| "User tidak mau berubah" | Ketidakpahaman & rasa tak aman, bukan penolakan murni | Pelatihan berbasis skenario + advokat internal; komunikasikan "apa untungnya bagi saya" |
| "Lebih cepat kalau di-custom saja" | Fokus pada biaya sekali, mengabaikan utang berulang | Kaitkan tiap custom ke biaya maintenance & risiko upgrade jangka panjang (Level A–D) |
| "Kita selalu begini" | Attachment ke legacy; tekanan jadwal delivery | Sponsor eksekutif menegaskan default = standar; keputusan terdokumentasi |
| "Vendor bilang bisa di-custom" | Governance lemah; tak ada beban pembuktian | Terapkan "why not standard": permintaan custom harus lulus uji standar → ekstensi Level A/B dulu, dgn persetujuan governance |

### Logika keputusan: standar dulu, deviasi belakangan (H2 #3)
| Langkah | Pertanyaan | Jika "ya" | Jika "tidak" |
|---|---|---|---|
| 1 | Bisakah proses standar SAP memenuhinya? | Pakai standar (fit-to-standard) | Lanjut ke langkah 2 |
| 2 | Cukupkah ekstensi bersih (Level A/B di luar inti)? | Bangun ekstensi bersih, terdokumentasi | Lanjut ke uji justifikasi |
| 3 | Apakah termasuk 3 alasan sah? (compliance / regulasi lokal / pembeda pasar bernilai terukur) | Deviasi sadar via ekstensi bersih + governance | Tolak permintaan; adopsi standar |

*Catatan writer: sajikan tabel ini sebagai penyederhanaan populer ("two-question test"); logika inti bersumber SAP Learning (klasifikasi 3 kategori + 3 alasan deviasi), nama "two-question test" adalah istilah komunitas.*

### Model Clean Core Extensibility Levels A–D (rujukan pendukung, resmi SAP Agu 2025)
| Level | Ringkas | Upgrade-safety | Kapan dipakai |
|---|---|---|---|
| **A** | Released API; ABAP Cloud on-stack atau SAP BTP side-by-side | Tertinggi (stability contract) | Target ideal untuk pengembangan baru |
| **B** | Classic API SAP resmi | Umumnya stabil | Bila A tak cukup; perlu governance |
| **C** | Objek internal SAP (skenario legacy) | Berisiko | Sementara; masuk roadmap remediasi |
| **D** | Modifikasi core, write ke tabel SAP | Terendah — "not recommended" | Dihindari; "significant technical debt" |

## Edge cases & nuance

- **Fit-to-standard ≠ tanpa kustomisasi sama sekali.** Ia berarti *standar sebagai default*, deviasi sebagai pengecualian yang disengaja & terdokumentasi. Menyajikannya sebagai "haram meng-custom" adalah salah dan akan ditolak pembaca berpengalaman. SAP sendiri mendefinisikan tiga alasan sah untuk deviasi.
- **"Two-question test" bukan istilah resmi SAP.** Ini penyederhanaan komunitas dari logika klasifikasi SAP Learning. Aman: sajikan sebagai "yang di lapangan sering disederhanakan menjadi dua pertanyaan". Jangan tulis "menurut SAP, two-question test adalah...".
- **Proses "unik" bisa nyata ATAU sekadar kebiasaan.** Justru ini inti diagnostik artikel: jangan menuduh semua klaim keunikan sebagai kebiasaan. Alat objektif (process mining) memisahkan keunikan nyata dari kebiasaan lama — itu yang membuat argumen berbasis data, bukan dogma.
- **SAP Signavio adalah alat, bukan wasit.** Ia menyorot deviasi & memberi fakta; keputusan tetap manusiawi/governance. Jangan mengklaim Signavio "memutuskan" standar vs custom atau "otomatis membersihkan" proses.
- **Statistik change-failure harus hati-hati.** Angka "70% transformasi gagal" sangat populer tetapi asal-usulnya diperdebatkan (rantai sitasi melingkar, dilacak balik ke Kotter, bukan studi McKinsey tunggal). Jika dipakai, framing sebagai "angka yang sering dikutip", jangan sebagai fakta McKinsey yang pasti.
- **Konteks Indonesia (opsional).** Kepatuhan lokal (mis. integrasi ke sistem pajak/Coretax DJP, atau kewajiban regulator sektor) adalah contoh sah "local regulatory requirements" yang membenarkan ekstensi bersih — sebutkan hanya sebagai ilustrasi kategori deviasi, tanpa klaim numerik bersumber.

## Flags (open factual risk)

- ⚠️1 **Klaim "hambatan terberat organisasi/budaya"**: berasal dari IgniteSAP (pandangan praktisi berpengalaman), bukan studi terkontrol atau data SAP-official. → Writer WAJIB mengatribusikan: "menurut pengamatan praktisi/industri (IgniteSAP)", bukan "faktanya" atau "menurut SAP". Jangan sajikan sebagai kebenaran absolut.
- ⚠️2 **"Two-question test"**: BUKAN istilah/frasa resmi SAP. SAP Learning memakai klasifikasi 3 kategori (Standard/Enhanced/Custom) + 3 alasan deviasi. → Sajikan "two-question test" sebagai penyederhanaan populer komunitas atas logika SAP; jangan atribusikan namanya ke SAP.
- ⚠️3 **SAP Signavio "mengakhiri debat/otomatis memutuskan"**: kapabilitas nyata Signavio = process mining + conformance checking (menemukan & menyorot deviasi dari model referensi). Ia **tidak** memutuskan standar vs custom atau membersihkan proses secara otomatis. → Batasi klaim ke "alat untuk berargumen dengan data"; keputusan tetap governance/manusia.
- ⚠️4 **Statistik "70% transformasi/change gagal"**: sering diatribusikan ke McKinsey, tetapi McKinsey sendiri melacaknya balik ke Kotter; tidak ada dasar empiris tunggal (rantai sitasi melingkar). → Jika dipakai: "angka yang kerap dikutip" tanpa menyebut "menurut McKinsey, 70%". Lebih aman: hindari angka spesifik, gunakan framing kualitatif ("mayoritas transformasi tersandung pada faktor manusia, bukan teknologi").
- ⚠️5 **Definisi/dimensi clean core & halaman SAP resmi**: sebagian halaman SAP (sap.com/resources, halaman RISE clean-core, help.sap.com Signavio) mem-block fetch otomatis (HTTP 403 / header kosong) sesi ini. Fakta dikuatkan lewat SAP Learning, SAP News, SAP-Press, dan ringkasan yang mengutip SAP. → Untuk kutipan persis, atribusikan ke sumber yang benar-benar terbuka (SAP Learning, SAP-Press, SAP News Aug 2025), bukan URL yang belum bisa dibuka langsung.
- ⚠️6 **Tanggal & keaktualan sumber**: IgniteSAP resistensi = 30 Jan 2025; SAP-Press = 12 Des 2025; SAP News A–D = 12 Agu 2025 (diakses 2026-07-07). Nama & model produk SAP berubah cepat — jika writer mengutip model extensibility, tetap sebut "resmi sejak Agustus 2025" agar tahan waktu. Jangan menambah klaim versi/tanggal yang tidak ada di dossier ini.

## Definition snippet draft (40–60 words)

> **Fit-to-standard** adalah pendekatan menyesuaikan proses bisnis agar cocok dengan praktik terbaik bawaan SAP, alih-alih memodifikasi software. Ia menjadi inti *clean core* karena tanpa kesediaan mengurangi kustomisasi, alat teknis seperti ABAP Cloud dan SAP BTP tidak akan menjaga inti tetap bersih. SAP menyebutnya pergeseran ke pola pikir "why not standard": jadikan proses standar default, deviasi hanya dengan justifikasi kuat.
