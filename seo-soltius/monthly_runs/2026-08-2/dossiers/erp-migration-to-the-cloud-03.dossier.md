---
brief_id: "erp-migration-to-the-cloud-03"
researcher_run_date: "2026-08-11"
sources_cited: 9
flags: 5
---

# Research Dossier: Strategi Pengujian Migrasi ERP ke Cloud: SIT, UAT, Cutover

## TL;DR for the writer

- **Pengujian migrasi ERP hidup di fase Realize (test) dan Deploy (cutover) dari SAP Activate.** Urutannya berlapis: unit → string → integration/SIT → UAT, lalu mock cutover/dress rehearsal sebelum go-live. Definisi tiap jenis tes sudah terverifikasi dari SAP official (learning.sap.com) — pakai persis.
- **SAP Cloud ALM Test Management adalah tool tes yang benar untuk cloud — bukan Solution Manager lama.** Cloud ALM adalah successor cloud-native SAP Solution Manager; mainstream maintenance Solution Manager berakhir 31 Desember 2027. Cloud ALM sudah termasuk dalam kontrak RISE with SAP tanpa biaya lisensi tambahan. Ini fakta penting dan menghindari kesalahan menulis "Solution Manager".
- **Angka "3–5 siklus mock migration" adalah rule-of-thumb praktik, BUKAN aturan resmi SAP.** SAP hanya menyebut "multiple DMO cycles till production migration". Tulis dengan label patokan praktik/rule-of-thumb, jangan atribusikan ke SAP. (Flag #1.)
- **Regression bukan cuma soal go-live — ini disiplin berulang di cloud.** S/4HANA Cloud Public Edition di-upgrade dua kali setahun (Februari & Agustus); partner bertanggung jawab melakukan regression di jendela antara upgrade sistem test dan production. Clean core membuat regression tiap upgrade jauh lebih ringan. Ini kaitan kuat ke cousin link Clean Core.
- **Entry/exit criteria dan severity defect adalah praktik QA industri, bukan skema baku SAP.** Sampaikan sebagai pola umum (mis. "tidak ada defect severity-1 terbuka" sebagai exit UAT), jangan mengarang persentase coverage atau angka defect spesifik. (Flag #2, #4.)

## Core facts (verified)

> **Claim**: Pengujian implementasi/migrasi berlangsung di fase Realize dari metodologi SAP Activate; fit-to-standard workshop di fase Explore; cutover & go-live di fase Deploy.
> **Number/specific**: Urutan fase SAP Activate: (Discover) → Prepare → Explore → Realize → Deploy → Run. Unit, string, integration test, dan UAT terjadi di Realize; cutover "performed on the last weekend before go-live" di Deploy.
> **Source**: SAP Learning — "Analyzing each phase of SAP Activate" & "Explaining the Test Strategy", learning.sap.com, diakses 2026-08-11
> **Confidence**: high

> **Claim**: Unit test menguji satu komponen individual dari proses bisnis; string test merangkai beberapa unit test.
> **Number/specific**: "Testing an individual component of a business process is a unit test, while linking multiple unit tests together is a string test." Dilakukan tim proyek selama sprint.
> **Source**: SAP Learning — "Explaining the Test Strategy", learning.sap.com, diakses 2026-08-11
> **Confidence**: high

> **Claim**: Integration test (SIT) mencakup pengujian seluruh fungsionalitas yang dibangun dan merupakan tes formal terakhir oleh tim konsultan sebelum UAT.
> **Number/specific**: "Integration testing covers the testing of all functionalities built. This is the final testing performed by the consulting team before the business team tests the system in User Acceptance Testing." Integration & data migration tests bersifat formal dan wajib didokumentasikan.
> **Source**: SAP Learning — "Explaining the Test Strategy" / "Testing the Integration", learning.sap.com, diakses 2026-08-11
> **Confidence**: high

> **Claim**: UAT sebaiknya dilakukan oleh LoB expert pelanggan yang ikut fit-to-standard workshop, menggunakan aplikasi SAP Cloud ALM Test Management.
> **Number/specific**: "Ideally, the customer LoB experts who participated in the Fit-to-Standard workshops should perform the UAT. For UAT, partner configuration experts set up manual test cases using the SAP Cloud ALM Test Management apps." — menjawab PAA "Siapa yang melakukan UAT".
> **Source**: SAP Learning — "Explaining the Test Strategy", learning.sap.com, diakses 2026-08-11
> **Confidence**: high

> **Claim**: SAP Cloud ALM Test Management adalah platform orkestrasi tes fungsional dengan traceability penuh ke Solution Process, Requirement, dan User Story; mendukung tes manual dan otomatis, pendekatan berbasis langkah (step-based).
> **Number/specific**: Aktivitas solution process dapat dipakai ulang sebagai test steps; mendukung manual functional testing dan integrasi automated test tools; kapabilitas "Test Sequences" ditambahkan pada update 2025 untuk struktur test cycle kompleks.
> **Source**: SAP — "SAP Test Management" (Cloud ALM Expert Portal) & SAP Community "What's New in SAP Cloud ALM: Test Management Updates for 2025", support.sap.com / community.sap.com, diakses 2026-08-11
> **Confidence**: high

> **Claim**: SAP Cloud ALM adalah successor cloud-native dari SAP Solution Manager dan menjadi tool ALM yang direkomendasikan SAP untuk cloud.
> **Number/specific**: "SAP Cloud ALM is SAP's cloud-native successor to SAP Solution Manager" dan menjadi fokus investasi fitur & AI berkelanjutan; dapat dipakai di seluruh fase Discover, Explore, Realize, Deploy.
> **Source**: SAP — "Transition to SAP Cloud ALM", support.sap.com, diakses 2026-08-11
> **Confidence**: high

> **Claim**: Mainstream maintenance SAP Solution Manager berakhir 31 Desember 2027; SAP menyarankan transisi ke SAP Cloud ALM sebelum tanggal itu.
> **Number/specific**: "Mainstream maintenance for SAP Solution Manager ends on December 31st, 2027."
> **Source**: SAP — "Transition to SAP Cloud ALM", support.sap.com, diakses 2026-08-11
> **Confidence**: high

> **Claim**: Kontrak RISE with SAP mencakup entitlement SAP Cloud ALM tanpa biaya lisensi/langganan tambahan.
> **Number/specific**: "RISE with SAP customers can request and use their own SAP Cloud ALM tenant without additional license or subscription fee."
> **Source**: SAP Learning / SAP support — RISE with SAP methodology & Cloud ALM, learning.sap.com / support.sap.com, diakses 2026-08-11
> **Confidence**: high

> **Claim**: Mainstream maintenance SAP Business Suite 7 (termasuk SAP ECC 6.0) berakhir akhir 2027, dengan extended maintenance opsional berbayar hingga akhir 2030.
> **Number/specific**: Mainstream maintenance hingga 31 Des 2027; extended maintenance opsional 1 Jan 2028 – 31 Des 2030 dengan premi +2 percentage points di atas basis maintenance; setelah itu customer-specific maintenance. S/4HANA di-commit hingga 2040.
> **Source**: SAP Support — "Innovation Commitment for SAP S/4HANA until 2040 / Maintenance strategy Business Suite 7", support.sap.com, diakses 2026-08-11
> **Confidence**: high

> **Claim**: Dress rehearsal / mock cutover mensimulasikan cutover produksi seutuhnya sebelum go-live untuk memastikan cutover plan realistis dan tim siap.
> **Number/specific**: "Cutover Simulation / Dress Rehearsal is to test all aspects of the cutover prior to the Production Cutover; emulating the Production Cutover as close as possible including the Cutover Plan, processes, logistics, resources, IT environments." — menjawab PAA "Apa itu mock cutover/dress rehearsal".
> **Source**: SAP Community (by SAP) — "SAP Project Manager's Guide to SAP Project Cutover" & "Cutover Management: Planning and Orchestration", community.sap.com, diakses 2026-08-11
> **Confidence**: high

> **Claim**: Perencanaan migrasi umumnya melibatkan beberapa siklus mock/DMO hingga migrasi produksi; siklus mock memakai salinan data produksi untuk menemukan masalah lebih dulu.
> **Number/specific**: "Project planning typically involves multiple DMO cycles till production migration ... Mock environment cycles involve testing with production data copied ... to identify issues before final production migration." SAP tidak menetapkan jumlah pasti.
> **Source**: SAP Community (by SAP) — Downtime-Optimized Conversion / SUM DMO blog series, community.sap.com, diakses 2026-08-11
> **Confidence**: high (jumlah spesifik 3–5 TIDAK bersumber SAP — lihat Flag #1)

> **Claim**: Cutover plan mendeskripsikan seluruh tugas & aktivitas sebelum go-live, termasuk timeline, tanggung jawab, sumber daya, dan rencana kontingensi.
> **Number/specific**: "A cutover plan should describe all required tasks and activities that must be performed before the go-live ... timelines, responsibilities, resources required, and contingency plans."
> **Source**: SAP Community (by SAP) — "SAP Project Manager's Guide to SAP Project Cutover", community.sap.com, diakses 2026-08-11
> **Confidence**: high

> **Claim**: S/4HANA Cloud Public Edition di-upgrade dua kali setahun (Februari & Agustus); partner bertanggung jawab menjalankan regression testing pada sistem test yang sudah di-upgrade sebelum production menyusul.
> **Number/specific**: Dua upgrade/tahun (Feb & Agu), penamaan tahun+bulan (mis. 2508 = Agustus 2025); regression dilakukan di jendela antara upgrade sistem test dan production; pelanggan diberi tahu via email 6 minggu sebelum upgrade. Upgrade 2SL berdurasi 2 minggu, 3SL 3 minggu.
> **Source**: SAP Community (by SAP) — "FAQ on Upgrading SAP S/4HANA Cloud Public Edition" & SAP Learning "Navigating Release Upgrades", community.sap.com / learning.sap.com, diakses 2026-08-11
> **Confidence**: high

> **Claim**: Regression testing menguji ulang proses bisnis yang sudah ada — terutama proses yang dikustomisasi — untuk memastikan tidak ada yang rusak setelah perubahan/upgrade.
> **Number/specific**: "Regression testing ... means testing the existing business processes, with a specific focus on customized processes, in the upgraded test system to determine if everything is performing as expected." — menjawab PAA "Apa itu regression testing".
> **Source**: SAP Community (by SAP) — "FAQ on Upgrading SAP S/4HANA Cloud Public Edition", community.sap.com, diakses 2026-08-11
> **Confidence**: high

> **Claim**: Entry criteria dan exit criteria adalah standar objektif untuk menentukan kapan sebuah fase tes boleh dimulai dan kapan dianggap selesai; exit criteria mencegah pengujian tak berujung sekaligus rilis prematur.
> **Number/specific**: Contoh entry UAT: konfigurasi di-freeze, defect di bawah ambang, lingkungan stabil, data uji siap, tester terlatih. Contoh exit UAT: semua skenario kritis lulus, tidak ada defect severity-1 terbuka, severity-2 dimitigasi dengan rencana, go/no-go tercatat.
> **Source**: aqua cloud — "Mastering UAT Entry and Exit Criteria" & ThinkSys — "Entry and Exit Criteria in Software Testing", industri QA, diakses 2026-08-11
> **Confidence**: medium (praktik QA industri umum, bukan skema baku SAP — lihat Flag #2)

> **Claim**: Severity dan priority defect ditetapkan di awal proyek; mayoritas tim mensyaratkan resolusi 100% defect critical/high sebelum sign-off go-live.
> **Number/specific**: "Severity and priority definitions are decided during business meetings ... Most teams require 100 percent resolution of critical and high severity defects before sign-off." Defect low-priority sisa didokumentasikan sebagai residual risk dalam laporan go/no-go.
> **Source**: SoftwareTestingHelp — "Which Defects are Acceptable for Software Go-live" & Medium/TestCaseLab — "Defect Management", industri QA, diakses 2026-08-11
> **Confidence**: medium (praktik industri; angka persentase spesifik jangan dimutlakkan — lihat Flag #4)

> **Claim**: SIT (System Integration Test) memverifikasi bahwa proses end-to-end lintas modul dan lintas sistem berjalan setelah integrasi dan data ter-load — berbeda dari UAT yang memvalidasi kesesuaian dengan kebutuhan bisnis dari sudut pengguna.
> **Number/specific**: SIT dieksekusi tim teknis/konsultan, fokus pada aliran data & interface antar-modul (finance, procurement, inventory, HR) dan sistem eksternal; UAT dieksekusi business user, fokus "fit-for-use". — menjawab PAA "Apa bedanya SIT dan UAT".
> **Source**: SAP Learning — "Explaining the Test Strategy" & SAP Community "Beyond UAT: Why System Integration Test is the True Backbone of SAP S/4HANA Success", learning.sap.com / community.sap.com, diakses 2026-08-11
> **Confidence**: high

## Solution focus + Soltius anchor (from product_matrix.md)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| Fase pengujian dalam **SAP Activate** (Realize/Deploy) | Prepare→Explore→Realize→Deploy→Run; unit/string/SIT/UAT di Realize, cutover di Deploy | H2 #1–#2 | — (konteks) |
| Jenis tes: unit, string, **SIT/integration**, **regression**, **UAT** | Definisi persis dari SAP learning; UAT oleh LoB expert eks-fit-to-standard | H2 #2 (tabel) | — |
| **Mock migration cycle** & **dress rehearsal/mock cutover** | "Multiple DMO cycles"; dress rehearsal mensimulasikan cutover penuh; 3–5 = rule-of-thumb | H2 #3, #4 | Migration service (Implementation) |
| **SAP Cloud ALM Test Management** | Successor Solution Manager; termasuk RISE; orkestrasi tes manual+otomatis dengan traceability | H2 #5 | — |
| **Regression** + update rutin S/4HANA Cloud (clean core memudahkan) | 2 upgrade/tahun (Feb & Agu); partner jalankan regression; clean core = regression lebih ringan | H2 #2 aside / #6 | **Implementation + AMS** (disiplin QA lintas siklus) |

Reminder: Soltius **mengimplementasikan/memigrasikan/mendukung** teknologi ini — bukan membangunnya. Maks 2–3 self-mention. Anchor CTA penutup: **Implementation + AMS** — "disiplin QA sepanjang proyek, dari SIT hingga cutover rehearsal dan regression saat update rutin cloud". Frasa kredibilitas yang cocok: Best RISE & Best Cloud Partner + AMS pasca go-live (jangan superlatif).

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **SAP Learning — "Explaining the Test Strategy" (Implementing SAP S/4HANA Cloud)**, 2026 — https://learning.sap.com/courses/implementing-sap-s-4hana-cloud-public-edition/explaining-the-test-strategy — *what it backs*: definisi unit/string/integration test & UAT, siapa yang menguji, penggunaan SAP Cloud ALM Test Management untuk UAT. (Sumber SAP-official paling otoritatif untuk artikel ini; sekaligus halaman #1 kompetitor — lampaui dengan konteks keputusan & Bahasa Indonesia.)
2. **SAP Community (by SAP) — "FAQ on Upgrading SAP S/4HANA Cloud Public Edition"**, 2024–2025 — https://community.sap.com/t5/enterprise-resource-planning-blog-posts-by-sap/faq-on-upgrading-sap-s-4hana-cloud-public-edition/ba-p/13657921 — *what it backs*: 2 upgrade/tahun (Feb & Agu), regression testing oleh partner, notifikasi 6 minggu — pondasi H2 regression & tie-in clean core.
3. **SAP Support — "Transition to SAP Cloud ALM"**, 2026 — https://support.sap.com/en/alm/sap-cloud-alm/transition-to-sap-cloud-alm.html — *what it backs*: Cloud ALM successor Solution Manager; mainstream maintenance Solution Manager berakhir 31 Des 2027; termasuk RISE.
4. **SAP Support — Maintenance strategy SAP Business Suite 7 (Innovation Commitment for SAP S/4HANA until 2040)**, 2026 — https://support.sap.com/en/release-upgrade-maintenance/maintenance-information/maintenance-strategy/s4hana-business-suite7.html — *what it backs*: ECC/Business Suite 7 mainstream 2027, extended 2030 (+2pp) — konteks urgensi migrasi.

Priority ranking terpenuhi: SAP official (1–4) mendominasi; sumber QA industri (aqua cloud, SoftwareTestingHelp) hanya untuk pola entry/exit & defect umum — jangan dijadikan sumber utama, cukup pendukung.

## FAQ Q&As (8 drafted, Bahasa Indonesia)

### Bagaimana cara menguji migrasi SAP S/4HANA sebelum go-live?
Pengujian dilakukan berlapis di fase Realize SAP Activate: unit test (satu komponen), string test (rangkaian unit), lalu system integration test/SIT (seluruh proses lintas modul dan sistem), dan UAT oleh pengguna bisnis. Setelah itu, jalankan beberapa siklus mock migration di sandbox dan satu dress rehearsal (mock cutover) yang meniru go-live sesungguhnya. Semua tes formal didokumentasikan, idealnya di SAP Cloud ALM Test Management.

### Apa bedanya SIT dan UAT?
SIT (System Integration Test) diuji tim teknis/konsultan untuk memastikan proses end-to-end lintas modul (finance, procurement, inventory, HR) dan integrasi antar-sistem berjalan setelah data ter-load — fokusnya "apakah sistem terhubung benar". UAT (User Acceptance Test) diuji business expert, biasanya peserta workshop fit-to-standard, untuk memastikan sistem sesuai kebutuhan kerja nyata — fokusnya "apakah layak dipakai". SIT selalu mendahului UAT.

### Apa itu mock cutover dan dress rehearsal?
Mock cutover atau dress rehearsal adalah simulasi lengkap proses go-live sebelum cutover produksi. Menurut panduan SAP, latihan ini meniru cutover sedekat mungkin — mencakup cutover plan, proses, logistik, sumber daya, dan lingkungan IT — untuk membuktikan bahwa rencana cutover realistis dan tim siap memindahkan bisnis ke sistem baru tanpa kejutan. Waktu eksekusi tiap langkah diukur agar jendela downtime saat go-live dapat diprediksi.

### Berapa siklus tes yang realistis sebelum go-live?
Sebagai patokan praktik (rule-of-thumb, bukan aturan resmi SAP), tim implementasi umumnya menjalankan sekitar 3–5 siklus mock migration di sistem sandbox sebelum dress rehearsal final. SAP sendiri menyebut "beberapa siklus DMO hingga migrasi produksi" tanpa angka pasti. Setiap siklus memvalidasi hal berbeda: kelengkapan & konsistensi data, hasil fungsional, custom code, dan durasi runtime — hingga hasilnya stabil dan dapat diulang.

### Apa itu regression testing dan mengapa penting?
Regression testing menguji ulang proses bisnis yang sudah ada — terutama yang dikustomisasi — untuk memastikan perubahan atau upgrade tidak merusak fungsi yang tadinya berjalan. Ini krusial karena S/4HANA Cloud Public Edition di-upgrade dua kali setahun (Februari dan Agustus), dan mitra bertanggung jawab meregresi sistem test sebelum production menyusul. Inti yang bersih (clean core) membuat setiap regression jauh lebih ringan karena kustomisasi tidak menempel di inti.

### Siapa yang melakukan UAT?
UAT idealnya dilakukan oleh business expert atau LoB (line-of-business) pelanggan yang sebelumnya ikut workshop fit-to-standard — merekalah yang paling paham proses kerja nyata. Konsultan konfigurasi partner menyiapkan test case manual di aplikasi SAP Cloud ALM Test Management, lalu pengguna bisnis mengeksekusi skenario dan mendokumentasikan temuan di sistem test. Peran tim IT di sini memfasilitasi, bukan menggantikan penilaian pengguna.

### Apa itu entry dan exit criteria dalam pengujian?
Entry criteria adalah syarat sebuah fase tes boleh dimulai (mis. konfigurasi di-freeze, lingkungan stabil, data uji siap, tester terlatih). Exit criteria adalah syarat fase dianggap selesai (mis. semua skenario kritis lulus, tidak ada defect severity-1 terbuka, severity-2 dimitigasi dengan rencana). Kriteria objektif ini mencegah dua kesalahan sekaligus: pengujian tanpa ujung dan rilis prematur yang membawa cacat ke produksi.

### Apa itu SAP Cloud ALM Test Management?
SAP Cloud ALM Test Management adalah tool bawaan SAP untuk merencanakan, menjalankan, dan mendokumentasikan pengujian fungsional dengan traceability penuh ke proses solusi dan requirement. Ia mendukung tes manual maupun otomatis dengan pendekatan berbasis langkah. SAP Cloud ALM adalah successor cloud-native dari SAP Solution Manager (mainstream maintenance-nya berakhir 31 Desember 2027) dan sudah termasuk dalam kontrak RISE with SAP tanpa biaya lisensi tambahan.

## Data tables for the writer

### Jenis pengujian dalam migrasi ERP (fase Realize → Deploy)
| Jenis tes | Apa yang diverifikasi | Siapa yang menguji | Fase SAP Activate |
|---|---|---|---|
| Unit test | Satu komponen/konfigurasi proses bisnis | Konsultan/tim proyek | Realize (per sprint) |
| String test | Rangkaian beberapa unit yang saling terkait | Konsultan/tim proyek | Realize (per sprint) |
| SIT / integration test | Seluruh proses end-to-end lintas modul & integrasi sistem, dengan data ter-load | Tim konsultan (tes formal terakhir sebelum UAT) | Realize |
| Regression test | Proses lama & kustomisasi tetap berjalan setelah perubahan/upgrade | Partner/tim tes | Realize + berulang saat update cloud |
| UAT | Kesesuaian dengan kebutuhan kerja nyata ("fit-for-use") | Business/LoB expert eks-fit-to-standard | Realize (jelang Deploy) |
| Mock cutover / dress rehearsal | Kelayakan & durasi seluruh langkah cutover | Seluruh tim cutover | Deploy (sebelum go-live) |

### Contoh entry/exit criteria (pola umum QA — bukan skema baku SAP)
| Fase | Entry criteria (mulai) | Exit criteria (selesai) |
|---|---|---|
| SIT | Konfigurasi & interface siap; data uji ter-load; unit/string test lulus | Semua skenario integrasi kritis lulus; defect severity-1/2 ditangani; hasil terdokumentasi |
| UAT | Konfigurasi di-freeze; SIT selesai; lingkungan stabil; tester terlatih | Semua skenario bisnis kritis lulus; tidak ada defect severity-1 terbuka; go/no-go tercatat |
| Mock cutover | Cutover plan final; lingkungan production-mirror; tim & peran siap | Seluruh langkah tereksekusi dalam jendela waktu target; isu terdokumentasi & di-remediasi |

### SAP Cloud ALM vs SAP Solution Manager (untuk konteks tool)
| Aspek | SAP Cloud ALM | SAP Solution Manager |
|---|---|---|
| Posisi | Successor cloud-native, fokus investasi SAP | Legacy on-premise |
| Maintenance | Berkelanjutan | Mainstream berakhir 31 Des 2027 |
| Lisensi (RISE) | Termasuk, tanpa biaya tambahan | Terpisah |
| Cocok untuk | Implementasi & migrasi cloud (S/4HANA Cloud, RISE/GROW) | Landscape on-prem lama |

## Edge cases & nuance

- **Mock migration ≠ mock cutover.** Mock migration cycle = eksekusi berulang teknis migrasi data (mis. siklus SUM DMO) untuk memvalidasi kelengkapan/konsistensi data & durasi. Dress rehearsal/mock cutover = latihan penuh seluruh rangkaian cutover (bukan hanya data: freeze, migrasi, validasi, sign-off, buka sistem). Writer sebaiknya bedakan keduanya secara eksplisit.
- **Greenfield vs brownfield mengubah bentuk "mock".** Istilah DMO cycle relevan untuk brownfield/system conversion (upgrade+migrasi in-place via SUM DMO). Untuk greenfield/GROW with SAP, "mock migration" lebih berupa uji beban data via SAP Migration Cockpit ke sistem baru. Hindari menyiratkan SUM DMO berlaku untuk semua pendekatan.
- **"3–5 siklus" itu praktik, bukan patokan universal.** Jumlah siklus bergantung kompleksitas data, banyaknya custom code, dan seberapa cepat hasil stabil. Frame sebagai kisaran praktik, bukan target yang harus dikejar.
- **100% coverage itu mitos yang mahal** (mendukung H2 #6 counter-conventional). Menguji "semua" mustahil; risk-based testing memprioritaskan proses kritikal (financial close, order-to-cash, procure-to-pay) lebih dulu. Mengejar 100% coverage menghabiskan waktu untuk skenario berisiko rendah dan menunda go-live tanpa menurunkan risiko secara berarti.
- **Regression adalah biaya berulang, bukan sekali.** Karena upgrade cloud dua kali setahun, disiplin regression berlanjut di fase Run (operate) — bukan hanya sebelum go-live. Ini jembatan alami ke argumen clean core (inti bersih = regression tiap upgrade ringan) dan ke AMS Soltius.
- **UAT gagal sering karena data uji, bukan konfigurasi.** Data yang tidak realistis/tidak ter-mask/tidak ter-versioning membuat UAT tidak mencerminkan kondisi nyata; test data management yang rapi adalah prasyarat UAT yang bermakna.

## Flags (open factual risk)

- ⚠️ **"3–5 siklus mock migration"**: SAP hanya menyebut "multiple DMO cycles till production migration" tanpa angka. → **Rekomendasi**: tulis sebagai rule-of-thumb/patokan praktik, jangan atribusikan angka 3–5 ke SAP. Frasa aman: "dalam praktik implementasi, umumnya sekitar 3–5 siklus...".
- ⚠️ **Persentase resolusi defect (100% critical/high, 90% P2, 70% P3)**: berasal dari sumber QA industri (medium authority), bukan aturan SAP. → **Rekomendasi**: sampaikan prinsipnya ("critical/high harus tuntas sebelum sign-off; low boleh jadi residual risk terdokumentasi"), hindari mengutip persentase P2/P3 sebagai standar mutlak.
- ⚠️ **Entry/exit criteria spesifik per fase**: pola umum QA, SAP tidak menerbitkan daftar baku tunggal. → **Rekomendasi**: bingkai sebagai "kriteria yang lazim disepakati", bukan "kriteria resmi SAP".
- ⚠️ **Angka defect / coverage spesifik**: brief secara eksplisit melarang mengarang persentase coverage atau jumlah defect. → **Rekomendasi**: jangan sebut angka coverage numerik; gunakan prinsip risk-based prioritization.
- ⚠️ **Cadence upgrade Februari & Agustus**: valid untuk **S/4HANA Cloud Public Edition**; Private Edition punya siklus & kontrol upgrade berbeda (pelanggan lebih mengatur timing). → **Rekomendasi**: kaitkan "2x/tahun (Feb & Agu)" spesifik ke Public Edition; untuk Private Edition, gunakan frasa lebih umum "update/upgrade berkala".

## Definition snippet draft (40–60 words)

> **Strategi pengujian migrasi ERP ke cloud** adalah rangkaian pengujian berlapis — unit test, string test, system integration test (SIT), regression test, dan user acceptance test (UAT) — yang dilengkapi beberapa siklus mock migration dan satu dress rehearsal (mock cutover), untuk memastikan sistem, data, dan proses bisnis benar-benar siap sebelum go-live di lingkungan cloud.
