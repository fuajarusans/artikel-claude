---
keyword: "ERP migration to the cloud"
keyword_slug: "erp-migration-to-the-cloud"
landing_page: "https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud"
month: "2026-07-2"
brief_id: "erp-migration-to-the-cloud-02"
angle: "remediasi-custom-code-abap-clean-core-ready"
angle_hash: "sha1:fbd654ffe1e9"
search_intent: "how-to"
target_word_count: 1650
strategist_run_date: "2026-07-07"
---

# Remediasi Custom Code Sebelum Migrasi ERP ke Cloud: Panduan Praktis

## Hook hypothesis

Ada satu variabel yang diam-diam menentukan apakah migrasi ERP ke cloud selesai tepat waktu atau membengkak: ribuan (kadang jutaan) baris kustomisasi ABAP yang menumpuk di SAP ECC selama satu dekade. Kustomisasi inilah yang membuat upgrade mahal dan menghalangi jalan ke cloud. Angle ini benar-benar baru untuk cluster ERP-migration Soltius — sudah ada artikel jalur migrasi, downtime, biaya, keamanan, pasca go-live, RISE vs GROW, readiness, dan pemilihan partner, tetapi tidak satu pun membahas *apa yang harus dilakukan terhadap custom code* sebelum pindah. Pembaca (kepala IT, lead ABAP, arsitek SAP) merasakan pain ini persis: mereka tahu ada "hutang teknis" tapi tidak punya kerangka untuk memutuskan mana yang diperbaiki, dipensiunkan, atau dipindah ke luar inti. Soltius kredibel sebagai mitra Implementation + Enhancement yang menjalankan analisis custom code dan mengarahkan ekstensi ke pendekatan clean-core.

## Primary keyword

`ERP migration to the cloud`

## Secondary / LSI keywords (8–12)

- migrasi ERP ke cloud
- remediasi custom code SAP
- custom code migration S/4HANA
- ABAP Test Cockpit (ATC)
- Simplification Database
- SAP Custom Code Migration app
- Business Partner (BP) remapping
- ABAP Cloud
- side-by-side extensibility SAP BTP
- clean core
- refactor / retire / recode
- SAP Joule for Developers

## Search intent & SERP feature targets

- **Stage**: consideration → decision (tim teknis yang menyiapkan sistem untuk konversi)
- **Format**: how-to / roadmap remediasi dengan tabel keputusan (perbaiki/pensiun/pindah)
- **Surface targets**:
  - [x] AI Overview (Google SGE) / AI-engine citation (Perplexity, ChatGPT)
  - [x] Featured Snippet (definition / list / table)
  - [x] People Also Ask

## SERP landscape (live scrape today)

**Top 3 competing pages:**
1. `https://help.sap.com/doc/9dcbc5e47ba54a5cbb509afaa49dd5a1/2025.001/en-US/CustomCodeMigration_EndtoEnd.pdf` — "Custom Code Migration Guide for SAP S/4HANA (2026-02)" — *angle*: panduan resmi SAP end-to-end (scope → ATC vs Simplification DB → adaptasi ke S/4HANA/BTP), teknis dan berbahasa Inggris.
2. `https://diligentglobal.com/blogs/the-definitive-sap-s4hana-custom-code-migration-guide/` — "The Definitive SAP S/4HANA Custom Code Migration Guide" — *angle*: otomatisasi remediasi untuk kepatuhan clean core, pemetaan API Business Partner.
3. `https://community.sap.com/t5/technology-blog-posts-by-sap/custom-code-migration-to-sap-s-4hana-powered-by-sap-joule-for-developers/ba-p/14329094` — "Custom code migration powered by SAP Joule for Developers" — *angle*: AI SAP (Joule/Custom Code Migration Agent) memperbaiki temuan ATC secara massal.

**Gaps to exploit** (what the top 3 do NOT cover well): semua berbahasa Inggris dan berorientasi developer; tidak ada yang menjelaskan keputusan *bisnis* di balik remediasi (mengapa 60–70% custom code sering ternyata tak terpakai) untuk audiens CIO/kepala IT Indonesia; tidak ada yang membingkai remediasi sebagai jembatan menuju clean core dan cloud-ready; tidak ada yang jujur soal "kapan menulis ulang lebih murah daripada memperbaiki".

**People Also Ask** (captured):
- Apa itu custom code remediation dalam migrasi SAP S/4HANA?
- Apa fungsi ABAP Test Cockpit (ATC) dalam migrasi ke S/4HANA?
- Apa itu Simplification Database SAP?
- Bagaimana cara mengurangi jumlah custom code sebelum migrasi ke cloud?
- Apa itu Business Partner dan mengapa custom code perlu dipetakan ulang?

## Distinct angle vs. history

- **Closest prior article in this cluster**: `erp-migration-readiness-assessment-cloud` (2026-08-02) menyebut "custom code legacy: inventarisasi dan strategi remediasi" sebagai *satu poin* di dimensi teknis; dan `apa-itu-clean-core-sap` (klaster Clean Core) membahas prinsip clean core.
- **How this brief differs**: readiness -08-02 hanya menyinggung custom code sebagai satu item assessment, tanpa tool, tahapan, atau matriks keputusan. Brief ini adalah panduan eksekusi remediasi custom code end-to-end khusus dalam konteks migrasi cloud (ATC → Simplification DB → Custom Code Migration app → keputusan refactor/retire/recode → adaptasi ke ABAP Cloud/BTP), dengan Business Partner remapping — belum ada di cluster ERP-migration.
- **Subtopic overlap (Jaccard) with closest prior**: ~0.12 (satu irisan konsep "custom code legacy"; sisanya subtopik teknis-keputusan yang seluruhnya baru).

## Article skeleton — H2s the writer should expand

1. **H2 (definitional)**: "Apa itu remediasi custom code dan mengapa menentukan kelancaran migrasi ke cloud?" — *covers*: definisi remediasi custom code; hubungan hutang teknis ↔ biaya upgrade ↔ hambatan cloud. (Sisipkan definition snippet 40–60 kata.)
2. **H2 (praktis/tool)**: "Cara menginventarisasi dan menganalisis custom code: ATC dan Simplification Database" — *covers*: ABAP Test Cockpit (ATC), Simplification Database, SAP Custom Code Migration app, penggunaan data pemakaian (usage data) untuk memisahkan kode terpakai vs tidur.
3. **H2 (praktis/keputusan)**: "Perbaiki, pensiunkan, atau tulis ulang? Kerangka keputusan per objek" — *covers*: matriks refactor vs retire vs recode berdasarkan frekuensi pakai, kompleksitas, dan kepatuhan clean core. Sertakan tabel keputusan.
4. **H2 (question-format)**: "Ke mana kustomisasi harus dipindah agar inti tetap bersih?" — *covers*: in-app/key-user extensibility vs side-by-side extensibility di SAP BTP; ABAP Cloud; pemetaan ulang ke Business Partner (BP) API; mengapa ini membuat upgrade berikutnya aman. (Tautkan ke clean core.)
5. **H2 (honest/counter-conventional)**: "Yang jarang diakui: sebagian besar custom code Anda mungkin tak perlu ikut" — *covers*: temuan lapangan bahwa banyak kustomisasi tak terpakai/duplikatif; risiko 'mengangkut semua'; peran AI (SAP Joule for Developers / Custom Code Migration Agent) sebagai bantuan, bukan pengganti keputusan arsitektur; kapan menulis ulang lebih murah daripada menambal.
6. **FAQ** — questions to answer:
   - Apa itu custom code remediation dalam migrasi SAP S/4HANA?
   - Apa fungsi ABAP Test Cockpit (ATC)?
   - Apa itu Simplification Database?
   - Bagaimana cara tahu custom code mana yang masih dipakai?
   - Apa itu Business Partner dan mengapa custom code perlu dipetakan ulang?
   - Apakah AI seperti SAP Joule bisa memperbaiki custom code otomatis?
   - Berapa lama proses remediasi custom code biasanya berlangsung?

(≥1 H2 question-format = #4; ≥1 honest/counter-conventional = #5.)

## SAP / partner tech to teach (from product_matrix.md)

Vendor-netral: **ABAP Test Cockpit (ATC)**, **Simplification Database**, **SAP Custom Code Migration app** (Fiori), **usage data** untuk memindai kode tidur; keputusan **refactor / retire / recode**; **in-app (key-user) vs side-by-side extensibility** di **SAP BTP**, **ABAP Cloud**; **Business Partner (BP)** sebagai penyatuan Customer/Vendor yang memaksa remapping API; **SAP Joule for Developers / Custom Code Migration Agent** sebagai bantuan AI. Kaitkan kuat ke prinsip **clean core**. **Researcher harus memverifikasi**: nama/kapabilitas terkini ATC, Custom Code Migration app, dan SAP Joule for Developers dari help.sap.com/community.sap.com; klaim BP remapping; jangan mengarang persentase kode tak terpakai tanpa sumber.

## Soltius anchor (max 2–3 self-mentions; usually the closing)

- **Service/credential to anchor the CTA**: **Implementation + Enhancement + ERP Strategy** + SAP Platinum Partner via United VARs — *placement*: closing. Framing: Soltius membantu menganalisis custom code dan memindahkan kustomisasi ke pendekatan clean-core (SAP BTP) agar sistem tetap mudah di-upgrade dan siap cloud.
- Optional 1 mid-article aside: satu kalimat di H2 #3 soal pola lapangan ("dalam praktik konversi, keputusan retire sering menyusut biaya remediasi secara signifikan") tanpa over-mention Soltius.

## Internal links to place

- **Primary** (this keyword's hub): `https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud` — anchor: `migrasi ERP ke cloud` (inline, di lead).
- **Cousin 1**: `https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide` — anchor: `SAP Clean Core` — why: remediasi custom code adalah langkah paling langsung menuju clean core; ekstensi dipindah ke BTP agar inti tetap standar. (Cousin utama per product_matrix.)
- **Cousin 2**: `https://www.soltius.co.id/id/blog/data-warehouse-solutions` — anchor: `data warehouse solutions` — why: sebagian custom report/ekstraksi lama sebaiknya dipindah ke lapisan data warehouse alih-alih dipertahankan sebagai custom code di inti ERP.

## E-E-A-T signals to embed

- Specific numbers/facts to cite (with source hints): rentang temuan bahwa sebagian besar custom code sering tak terpakai/duplikatif (kutip praktisi/SAP — jangan mengarang %); ATC memetakan temuan terhadap Simplification Database; sistem ECC bisa memiliki jutaan baris kode custom (SAP Community).
- Authoritative sources to cite (suggest 2): SAP official — help.sap.com "Custom Code Migration Guide for SAP S/4HANA" dan/atau community.sap.com (ATC, Joule for Developers); satu sumber praktisi (SAPinsider) untuk konteks effort.
- First-party Soltius angle: pengalaman melakukan analisis custom code + adaptasi ekstensi ke BTP sebagai bagian layanan Implementation/Enhancement.

## AI Overview & GEO optimization (seo_playbook §2a)

- **Question-first + extractable**: H2 #4 dan FAQ diframe sebagai pertanyaan; jawaban langsung 40–60 kata setelah tiap H2 mayor.
- **Definition snippet (40–60 words)**: paragraf dekat atas menjawab "Remediasi custom code adalah ...".
- **Entity list** (named explicitly): ABAP Test Cockpit (ATC), Simplification Database, SAP Custom Code Migration app, SAP BTP, ABAP Cloud, Business Partner, SAP Joule for Developers.
- **FAQ target**: 5–8 pertanyaan; gunakan PAA di atas.

## Data captured this run

- **Source(s)**: live WebSearch (Google ID topikal) + WebFetch landing page + articles_history. Ahrefs/GSC tidak tersedia.
- **Apr 2026 rank** (from report): 1 (2026-06 report; priority "defend" ditegaskan di keywords.md 2026-07-2).
- **Volume / KD / trend**: n/a (Ahrefs not connected); SERP menampilkan panduan SAP resmi bertanggal 2025–2026 dan konten AI-code-migration yang aktif.
- **SERP features present**: AI Overview (kemungkinan besar), PAA, Featured Snippet definisi.
- **cache_source**: `2026-07-2/research/erp-migration-to-the-cloud.research.json (captured: 2026-07-07)`

## Notes for SME researcher

Verifikasi dari SAP resmi: (1) kapabilitas & nama terkini ATC, Custom Code Migration app, Simplification Database (help.sap.com Custom Code Migration Guide, versi 2025/2026); (2) status & cakupan SAP Joule for Developers / Custom Code Migration Agent (community.sap.com) — apakah benar auto-fix temuan ATC; (3) mekanisme Business Partner (penyatuan KNA1/LFA1) dan implikasi remapping API; (4) definisi in-app vs side-by-side extensibility & ABAP Cloud; (5) sumber untuk klaim proporsi custom code tak terpakai — jangan mengarang angka. Konfirmasi tautan clean core konsisten dengan hub SAP Clean Core.

## Notes for future strategist runs

Artikel ini TIDAK akan membahas: (1) strategi data migration (cleansing/archiving) — sudah di brief -01 run ini; (2) tutorial teknis langkah-demi-langkah menulis kode ABAP Cloud (terlalu teknis untuk audiens keputusan); (3) tata kelola proyek/RACI; (4) detail clean-core maturity model (biarkan untuk cluster SAP Clean Core). Sisakan untuk siblings berikutnya.
