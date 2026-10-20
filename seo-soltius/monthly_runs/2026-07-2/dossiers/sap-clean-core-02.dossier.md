---
brief_id: "sap-clean-core-02"
researcher_run_date: "2026-07-07"
sources_cited: 6
flags: 6
research_mode: "live-web — WebSearch + WebFetch operational; SAP-official news.sap.com & support.sap.com fetched directly; community.sap.com returns HTTP 403 to WebFetch, so those facts are corroborated via WebSearch snippets + a second independent source"
---

# Research Dossier: SAP Clean Core di Industri Teregulasi — Menyeimbangkan Compliance dan Core yang Bersih

## TL;DR for the writer

- **The core tension is real and under-covered.** In pharma, banking, and food/manufacturing, regulators demand audit trails, validation, and specific controls — so *some* customization is not a choice but a legal obligation. The article's job is to resolve the false dilemma: **compliance ≠ a dirty core.** Frame at decision level (IT lead / compliance officer / transformation lead), not as an ABAP tutorial. This is the brief's whitespace — every competitor page is English and pharma-only.
- **The resolution is SAP's own A–D extensibility model (formalized Aug 2025).** Place mandatory compliance controls as **Level A/B** extensions — released/public APIs on ABAP Cloud (on-stack) or side-by-side on SAP BTP — that are *decoupled* from the core, instead of modifying standard objects. SAP explicitly recommends this and says a properly-built extension keeps validation/re-qualification effort minimal each upgrade. (SAP News, 2025-08-12; SAP Community GxP post.)
- **The pharma mechanism has a name: IQ/OQ/PQ.** In GxP, every extension undergoes its own validation (Installation/Operational/Performance Qualification). SAP-official guidance: adhere to clean-core principles "to ensure minimal PQ efforts over the extension lifecycle." That single sentence is the spine of H2 #3 — clean-core extensions cost *less* to re-qualify every release. Standards to name: **21 CFR Part 11** (FDA) and **EU GMP Annex 11** (audit trails, computerized-system validation).
- **The Indonesia hook is concrete and verified.** **Coretax / Core Tax Administration System (DJP)** went live 31 Dec 2024, effective **January 2025**, and integrates with external/ERP systems via **official API** (e-Faktur, e-Bupot, e-Billing). This is a live, real example of a "compliance-mandated integration you can build clean-core-safe via a released API" — perfect for the table in H2 #4. For **OJK** and **CPOB/BPOM**, real regulations exist (OJK POJK/PADK on IT risk & reporting; BPOM CPOB requires data integrity/audit trail) — but **no source ties them specifically to clean core**, so frame generically ("regulator menuntut jejak audit & pelaporan") without inventing a clause.
- **The honest beat (Core-Update value):** clean core is *graded*, not binary — "50 shades of clean core." A few regulated controls may legitimately sit close to the core (Level B, or briefly Level C on a remediation roadmap). What matters is a **conscious, documented decision + a remediation plan**, not zero customization. Clean core is "responsible extensibility, not a ban on customization" (SAP Community). Never promise the reader that Soltius or clean core "guarantees" passing an audit.

---

## Core facts (verified)

> External facts verified live (2026-07-07) against the sources named. Soltius facts verified against `knowledge_base/company_profile.md` (no web needed). Where `community.sap.com` blocked WebFetch (HTTP 403), the fact is corroborated by a WebSearch snippet **plus** a second independent source, and flagged accordingly.

> **Claim 1**: *Clean core* adalah prinsip menjaga inti SAP S/4HANA tetap standar dan mudah di-upgrade dengan menempatkan kustomisasi di luar inti, bukan memodifikasi objek standar.
> **Number/specific**: SAP: "keep the core clean, standard, and upgrade-stable while still enabling business-specific differentiation"; kustomisasi menumpuk "limits flexibility, slows down upgrades, and increases the total cost of ownership."
> **Source**: SAP News Center, "How to Extend SAP S/4HANA Cloud the Right Way" — https://news.sap.com/2025/08/extend-sap-s4hana-cloud-right-way-clean-clear/ — published 2025-08-12, accessed 2026-07-07.
> **Confidence**: high.

> **Claim 2**: SAP memformalkan model **empat tingkat extensibility (Level A–D)** pada Agustus 2025 untuk mengklasifikasikan setiap ekstensi berdasarkan keamanan upgrade.
> **Number/specific**: **Level A** (Recommended) = ekstensi hanya memakai released/public API yang stabil, dengan *stability contract* — via ABAP Cloud (on-stack) atau side-by-side di SAP BTP; fully upgrade-safe. **Level B** (Compliant) = classic ABAP APIs yang terdokumentasi & umumnya upgrade-stable (legacy API, BAdI, user exit); butuh governance. **Level C** (Partial) = mengakses objek internal SAP; ada risiko upgrade, "conditionally clean" bila ada pengecekan changelog sebelum upgrade — masuk roadmap remediasi. **Level D** (Not Recommended) = modifikasi inti / objek tak-direkomendasikan / implicit enhancement; risiko tertinggi, harus dihilangkan.
> **Source**: SAP News (as Claim 1) for the A–D tiers verbatim; corroborated by SAP Community "ABAP Extensibility Guide – Clean Core (August 2025 Update)" — https://community.sap.com/t5/technology-blog-posts-by-sap/abap-extensibility-guide-clean-core-for-sap-s-4hana-cloud-august-2025/ba-p/14175399 (WebSearch snippet; WebFetch 403), accessed 2026-07-07.
> **Confidence**: high (A–D framing confirmed by the directly-fetched SAP News page).

> **Claim 3**: **In-app / key-user extensibility** memperluas S/4HANA dari dalam memakai objek *released* (upgrade-safe); **side-by-side extensibility** membangun aplikasi *decoupled* terpisah di **SAP BTP** yang berjalan independen dari inti, terhubung lewat released/public API.
> **Number/specific**: SAP: side-by-side = "scalable, decoupled applications that run independently from the core"; on-stack ABAP Cloud = "tightly integrated, upgrade-stable extensions within the ERP system"; SAP menyarankan "SAP BTP-first strategy."
> **Source**: SAP News, https://news.sap.com/2025/08/extend-sap-s4hana-cloud-right-way-clean-clear/, accessed 2026-07-07.
> **Confidence**: high.

> **Claim 4**: Di industri teregulasi (GxP), **setiap ekstensi harus melewati evaluasi GxP dan kualifikasi IQ/OQ/PQ tersendiri**; mengikuti prinsip clean core memastikan **effort PQ minimal sepanjang siklus hidup ekstensi**.
> **Number/specific**: SAP (verbatim): "Extensions if required must undergo their own GxP evaluation and IQ/OQ/PQ... adhere to clean core principals to ensure minimal PQ efforts over the extension lifecycle." Model tanggung jawab bersama (*shared responsibility*): sebagian kontrol dikelola SAP, tetapi organisasi tetap sepenuhnya akuntabel ke regulator.
> **Source**: SAP Community (blog by SAP), "Accelerating GxP Compliance for SAP Digital Manufacturing in the Public Cloud" — https://community.sap.com/t5/technology-blog-posts-by-sap/accelerating-gxp-compliance-for-sap-digital-manufacuring-in-the-public/ba-p/14216338 (WebSearch snippet; WebFetch 403), accessed 2026-07-07.
> **Confidence**: high on the IQ/OQ/PQ + minimal-PQ statement (captured verbatim from the SAP-authored post); this is the single most load-bearing external fact for the article.

> **Claim 5**: **21 CFR Part 11** (FDA) mewajibkan audit trail yang aman, computer-generated, dan ber-*timestamp* untuk setiap pembuatan, perubahan, atau penghapusan record/tanda tangan elektronik GxP (who/what/when/why).
> **Number/specific**: Part 11 mencakup input data (create); audit trail harus tidak bisa dinonaktifkan pengguna dan tetap utuh meski record sumber dihapus.
> **Source**: Industry compliance references (simplerQMS; IntuitionLabs "Audit Trails 21 CFR Part 11 & Annex 11") — https://simplerqms.com/21-cfr-part-11-vs-eu-annex-11/ , accessed 2026-07-07.
> **Confidence**: high (well-established regulatory standard; label as industri/compliance source, bukan SAP).

> **Claim 6**: **EU GMP Annex 11** mengatur sistem terkomputerisasi (*computerized systems*) dengan pendekatan berbasis risiko: audit trail diwajibkan bila risk assessment menilainya perlu, mencakup perubahan & penghapusan data GMP-relevan, harus *human-readable* dan ditinjau berkala.
> **Number/specific**: Perbedaan kunci dari Part 11: Annex 11 berbasis risiko (scope ditentukan risk assessment) dan fokus pada *change/delete*; Part 11 juga mewajibkan pencatatan *create*.
> **Source**: simplerQMS "EU Annex 11" + GMP Journal — https://simplerqms.com/eu-annex-11/ , accessed 2026-07-07.
> **Confidence**: high.

> **Claim 7**: **Computer System Validation (CSV)** / validasi sistem = proses terdokumentasi membuktikan sistem terkomputerisasi konsisten memenuhi tujuan penggunaannya (via IQ/OQ/PQ), diwajibkan GxP untuk sistem yang menyentuh data ber-regulasi.
> **Number/specific**: IQ (Installation Qualification), OQ (Operational Qualification), PQ (Performance Qualification). Setiap perubahan pada ekstensi yang tervalidasi memicu re-kualifikasi — inilah mengapa ekstensi yang decoupled (Level A/B) menekan biaya tiap upgrade.
> **Source**: SAP Community GxP post (IQ/OQ/PQ framing, Claim 4 source) + industry CSV references, accessed 2026-07-07.
> **Confidence**: high (konsep) / medium (istilah "CSV" kini sering digantikan "CSA – Computer Software Assurance" dalam guidance FDA terbaru — lihat Flag 4).

> **Claim 8**: **Coretax / Core Tax Administration System (DJP)** resmi diluncurkan **31 Desember 2024** dan efektif melayani administrasi perpajakan (registrasi, SPT, pembayaran) **sejak masa Januari 2025 dan seterusnya**.
> **Number/specific**: DJP (verbatim): melayani "registrasi, penyampaian SPT, pembayaran, dan layanan sejak masa Januari 2025 dan seterusnya."
> **Source**: Direktorat Jenderal Pajak (pajak.go.id), "Implementasi Coretax DJP" — https://www.pajak.go.id/en/node/113210 , accessed 2026-07-07.
> **Confidence**: high.

> **Claim 9**: Coretax menyediakan **integrasi via API resmi** untuk e-Faktur (e-Invoice), e-Bupot Unifikasi, dan e-Billing — sehingga ERP dapat terhubung ke ekosistem pajak tanpa memodifikasi inti (memakai released API dari sisi SAP).
> **Number/specific**: "Coretax includes API technology integration for e-Invoice, e-Bupot Unification, and e-Billing." SAP menerbitkan KBA khusus reformasi Core Tax Indonesia 2025 (SAP KBA 3580758).
> **Source**: DJP/Coretax overview (pajak.go.id) + SAP Knowledge Base Article 3580758 "Indonesia Tax-related reforms... Core Tax Administration System 2025" — https://userapps.support.sap.com/sap/support/knowledge/en/3580758 , accessed 2026-07-07.
> **Confidence**: high on "integrasi via API" ada; medium on the SAP-side implementation detail (KBA body needs SAP login — cite as existence-of-official-guidance, not as a spec).

> **Claim 10**: **OJK** memiliki regulasi manajemen risiko & penyelenggaraan Teknologi Informasi yang relevan bagi lembaga jasa keuangan — termasuk POJK 38/POJK.03/2016 (MRTI bank umum), POJK 23/2024 (pelaporan terdigitalisasi), POJK 42/2024, dan PADK 1/2026 (penyelenggaraan TI bank umum, berlaku 1 Maret 2026).
> **Number/specific**: Regulasi ini menuntut tata kelola TI, manajemen risiko, dan pelaporan — mendasari kebutuhan jejak audit & kontrol. **Tidak ada** sumber yang mengaitkan langsung ke "clean core."
> **Source**: OJK (ojk.go.id) regulasi pages, accessed 2026-07-07 (POJK 38/2016 MRTI; POJK 23/2024; PADK 1/2026).
> **Confidence**: high (regulasi ada) — namun **bingkai secara umum**; jangan klaim OJK mensyaratkan kustomisasi SAP tertentu (Flag 2).

> **Claim 11**: **SAP ECC / Business Suite 7** (EHP 6–8): mainstream maintenance berakhir **akhir 2027**; extended maintenance tersedia **awal 2028 hingga akhir 2030** dengan **premi 2 percentage points** pada basis maintenance; setelahnya customer-specific maintenance. SAP juga memberi *innovation commitment* untuk **S/4HANA hingga akhir 2040**.
> **Number/specific**: Verbatim SAP: "mainstream maintenance... until end of 2027"; "extended maintenance... from beginning of 2028 until end of 2030"; "premium of two percent points"; "innovation commitment for SAP S/4HANA until the end of 2040."
> **Source**: SAP Support Portal, "Maintenance 2040 / Innovation Commitment for SAP S/4HANA" (Business Suite 7 maintenance-strategy page) — https://support.sap.com/en/release-upgrade-maintenance/maintenance-information/maintenance-strategy/s4hana-business-suite7.html , accessed 2026-07-07.
> **Confidence**: high (fetched directly from SAP support portal). Context only — the article's spine is clean core, not the ECC deadline; use lightly to explain "why upgrade-safe matters."

> **Claim 12**: Clean core **bukan larangan kustomisasi** — melainkan *responsible/controlled extensibility* yang ditempatkan **di luar** inti. "There are 50 shades of clean core"; clean core adalah perjalanan bertingkat, bukan tujuan biner.
> **Number/specific**: SAP Community (Fortaleza blog): clean core kini "risk-based approach in managing custom code," "transforms clean core extensibility from a rigid rule into more of an actionable roadmap." Frasa "50 shades of clean core" berasal dari praktisi (TechTarget).
> **Source**: SAP Community, "Rethinking Clean Core in SAP: From Rigid Formalism to Pragmatic Common Sense" — https://community.sap.com/t5/fortaleza-blog-posts/rethinking-clean-core-in-sap-from-rigid-formalism-to-pragmatic-common-sense/ba-p/14191424 ; TechTarget "There are '50 shades of clean core'" — https://www.techtarget.com/searchsap/news/366631222/ , accessed 2026-07-07.
> **Confidence**: high on the "not a ban" framing (SAP-official language) / medium on the exact "50 shades" attribution (practitioner phrasing, label as such).

> **Claim 13 (Soltius — verified via knowledge_base, no web needed)**: Soltius adalah **SAP Platinum Certified Channel Partner & Value Added Reseller**, anggota **United VARs**, bagian dari **Metrodata Group sejak 1998** (diakuisisi 2008); 200+ konsultan, 120+ klien; kontributor pendapatan terbesar bagi SAP Indonesia (diakui sejak 2015).
> **Source**: `knowledge_base/company_profile.md` (pre-approved).
> **Confidence**: high (internal, terverifikasi).

> **Claim 14 (Soltius — verified via knowledge_base + product_matrix baris #6)**: Soltius berpengalaman lintas industri teregulasi/relevan — **Pharma, Healthcare, Consumer Products, Wholesale Distribution, Plantation (Perkebunan), Mill Products** — sebagai mitra **Implementation + Enhancement + ERP Strategy**. Soltius **mengimplementasikan/memigrasi/mendukung** SAP, **tidak membangun** software-nya, dan **tidak menjamin** kelulusan audit/validasi.
> **Source**: `knowledge_base/company_profile.md` ("By industry": Pharma, Plantation, Mill Products, dll.) + `product_matrix.md` baris #6.
> **Confidence**: high (internal). NB: profil menyebut "Pharma" sebagai vertikal industri — boleh disebut sebagai pengalaman industri, **tanpa** klaim outcome/angka klien.

*(14 claims captured; ≥12 satisfied. Claims 13–14 = Soltius facts verified internally; Claims 1–12 external, live-verified 2026-07-07.)*

---

## Solution focus + Soltius anchor (from product_matrix.md, baris #6)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| **Prinsip clean core + mengapa industri teregulasi berbeda** | Inti S/4HANA standar & upgrade-safe; regulasi menciptakan kontrol yang wajib ada (audit trail, validasi) → kustomisasi bukan pilihan tapi kewajiban | H2 #1 (definisi) + H2 #2 (asal kustomisasi wajib) | — (edukasi) |
| **Model extensibility A–D** | Tempatkan kontrol compliance sebagai **Level A/B** (released API, ABAP Cloud on-stack, atau side-by-side BTP), decoupled dari inti; Level C hanya bila terpaksa + roadmap; Level D dihindari | H2 #3 (question-format) | — (vendor-netral) |
| **IQ/OQ/PQ + released API + Coretax** | Ekstensi tervalidasi (IQ/OQ/PQ); clean core = effort PQ/re-kualifikasi minimal tiap upgrade; integrasi Coretax via API resmi = pola clean-core-safe | H2 #3 + tabel H2 #4 | Opsional 1 aside di H2 #4: "di lapangan, kebutuhan regulator paling sering bisa dipenuhi tanpa menyentuh inti bila dipetakan sejak awal" (Soltius — ringan) |
| **Clean core bertingkat ("50 shades")** | Beberapa kontrol wajib boleh dekat inti (Level B / sementara C) — yang penting keputusan sadar + dokumentasi + roadmap remediasi | H2 #5 (honest) | — |
| **Soltius — pengalaman lintas vertikal teregulasi** | "Sebagai SAP Platinum Partner melalui United VARs dengan pengalaman implementasi lintas industri — termasuk farmasi/life sciences, distribusi, dan manufaktur — Soltius mendampingi perusahaan memetakan kebutuhan compliance ke pola clean-core-safe." | Closing | **Implementation + industry experience + SAP Platinum/United VARs** |

**Reminder:** Soltius **implements/migrates/supports** clean core — it does **not build** SAP, S/4HANA, BTP, or ABAP Cloud, and **does not guarantee** audit/validation success. **Max 2–3 Soltius self-mentions** (closing CTA + ≤1 mid-article aside in H2 #4). No invented client outcomes, project values, or cost percentages. No superlatives — only the verified "kontributor pendapatan terbesar bagi SAP Indonesia (sejak 2015)" if a ranking-style line is needed.

---

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **SAP News Center — "How to Extend SAP S/4HANA Cloud the Right Way | Clean Core" (2025-08-12)** — https://news.sap.com/2025/08/extend-sap-s4hana-cloud-right-way-clean-clear/ — *what it backs*: definisi clean core, model extensibility Level A–D, in-app vs side-by-side (SAP BTP-first, decoupled apps), ABAP Cloud, released API. **Otoritas tertinggi** untuk fakta produk SAP. Link-out utama.
2. **SAP Community (blog by SAP) — "Accelerating GxP Compliance for SAP Digital Manufacturing in the Public Cloud"** — https://community.sap.com/t5/technology-blog-posts-by-sap/accelerating-gxp-compliance-for-sap-digital-manufacuring-in-the-public/ba-p/14216338 — *what it backs*: shared-responsibility GxP model, ekstensi wajib IQ/OQ/PQ, clean core → "minimal PQ efforts over the extension lifecycle." **Jembatan langsung clean core ↔ compliance** — sumber paling relevan untuk sudut artikel ini.
3. **Direktorat Jenderal Pajak (pajak.go.id) — "Implementasi Coretax DJP"** — https://www.pajak.go.id/en/node/113210 — *what it backs*: Coretax live 31 Des 2024 / efektif Januari 2025; hook Indonesia untuk integrasi regulator via API resmi. Sumber pemerintah resmi.

> Priority order honored: SAP official (1,2) > pemerintah Indonesia (3). Standar GxP (21 CFR Part 11 / Annex 11) di-back oleh referensi compliance industri — **labeli sebagai sumber industri/compliance**, bukan SAP. **Hindari outbound ke integrator SAP pesaing** (SNP, IntuitionLabs, Assima disebut hanya sebagai konteks SERP di brief, jangan di-link keluar).

---

## FAQ Q&As (7 drafted, Bahasa Indonesia)

> Mirror the brief's PAA + FAQ list. Each 40–80 words, standalone, ≥1 specific fact.

### Apakah clean core melarang kustomisasi untuk compliance?
Tidak. Clean core bukan larangan kustomisasi, melainkan prinsip menempatkan kustomisasi di luar inti secara bertanggung jawab. Untuk kebutuhan compliance yang wajib — misalnya audit trail atau field pelaporan regulator — kontrol tetap boleh dibangun, tetapi sebagai ekstensi Level A atau B (memakai released API di ABAP Cloud atau SAP BTP), bukan dengan memodifikasi objek standar. Dengan begitu inti tetap upgrade-safe dan kepatuhan tetap terpenuhi.

### Bagaimana clean core di industri farmasi yang wajib GxP?
Di industri farmasi, setiap ekstensi harus melewati evaluasi GxP dan kualifikasi IQ/OQ/PQ tersendiri agar tervalidasi. Menurut panduan SAP, mengikuti prinsip clean core memastikan effort PQ (re-kualifikasi) minimal sepanjang siklus hidup ekstensi. Artinya, kontrol wajib seperti audit trail (mengacu 21 CFR Part 11 atau EU GMP Annex 11) sebaiknya dibangun sebagai ekstensi decoupled Level A/B, sehingga tiap upgrade S/4HANA tidak memicu validasi ulang yang mahal.

### Apakah clean core cocok untuk perbankan dan industri teregulasi?
Cocok, dan justru relevan. Perbankan diatur ketat oleh OJK — termasuk regulasi manajemen risiko dan penyelenggaraan teknologi informasi (mis. POJK MRTI dan PADK 1/2026) yang menuntut tata kelola, jejak audit, dan pelaporan. Kebutuhan itu bisa dipenuhi lewat ekstensi clean-core-compliant, bukan modifikasi inti. Prinsipnya sama: tempatkan kontrol regulator sebagai ekstensi decoupled agar sistem tetap patuh sekaligus mudah di-upgrade.

### Bagaimana integrasi SAP ke Coretax/DJP tanpa mengotori core?
Coretax (Core Tax Administration System DJP) resmi berlaku sejak Januari 2025 dan menyediakan integrasi via API resmi untuk e-Faktur, e-Bupot Unifikasi, dan e-Billing. Dari sisi SAP, integrasi ini dibangun memakai released/public API dan pola side-by-side di SAP BTP — bukan menanam kode ke dalam inti. Hasilnya, kewajiban pelaporan pajak terpenuhi sementara inti S/4HANA tetap standar dan upgrade-safe.

### Apa itu validasi sistem (computer system validation) dan kaitannya dengan clean core?
Validasi sistem adalah proses terdokumentasi yang membuktikan sistem terkomputerisasi konsisten memenuhi tujuan penggunaannya, melalui IQ (instalasi), OQ (operasional), dan PQ (performa). Di lingkungan GxP, setiap perubahan pada ekstensi tervalidasi memicu re-kualifikasi. Karena itu, ekstensi yang decoupled dan clean-core-compliant (Level A/B) menekan effort validasi ulang setiap kali SAP merilis upgrade — inilah alasan ekonomis utama menjaga core tetap bersih di industri teregulasi.

### Bagaimana menjaga kustomisasi compliance tetap upgrade-safe?
Kuncinya adalah model extensibility A–D yang diformalkan SAP pada Agustus 2025. Bangun kontrol compliance sebagai Level A (hanya released API, fully upgrade-safe) atau Level B (classic API terdokumentasi, dengan governance). Hindari Level C (mengakses objek internal, berisiko upgrade) dan Level D (modifikasi inti). Ekstensi Level A/B terhubung ke inti lewat kontrak antarmuka stabil, sehingga upgrade SAP tidak mematahkannya dan validasi ulang tetap ringan.

### Apakah kustomisasi compliance yang tak terhindarkan berarti kegagalan clean core?
Tidak. Clean core bersifat bertingkat — sering disebut "50 shades of clean core" — bukan target biner nol kustomisasi. Beberapa kontrol teregulasi mungkin wajib berada dekat inti (Level B, atau sementara Level C dengan rencana remediasi). Yang menentukan keberhasilan adalah keputusan yang sadar, terdokumentasi, dan disertai roadmap perbaikan — bukan ketiadaan kustomisasi. SAP sendiri menegaskan clean core adalah extensibility yang bertanggung jawab, bukan larangan kustomisasi.

---

## Data tables for the writer

### Tabel wajib (H2 #4): Memetakan kebutuhan compliance → pola clean-core-safe

| Kebutuhan compliance (contoh) | Dari mana (regulator/standar) | Pola clean-core-compliant | Level | Alasan tetap bersih |
|---|---|---|---|---|
| **Audit trail** perubahan data ber-regulasi | 21 CFR Part 11 / EU GMP Annex 11; OJK | Manfaatkan audit trail standar S/4HANA + released API; log tambahan via side-by-side BTP | A/B | Tidak menyentuh objek inti; tetap upgrade-safe |
| **Field/atribut wajib** untuk pelaporan | CPOB BPOM / OJK / DJP | Custom field via in-app key-user extensibility (Custom Fields and Logic) | A | Objek released; aman saat upgrade |
| **Laporan regulator** khusus | OJK / DJP / BPOM | Side-by-side app atau embedded analytics memakai released data API | A/B | Logika pelaporan hidup di luar inti |
| **Integrasi pajak (e-Faktur/e-Bupot)** | DJP — Coretax (efektif Jan 2025) | Integrasi via API resmi Coretax + SAP Integration Suite (side-by-side) | A | Released API dua sisi; inti tetap standar |
| **Validasi/CSV ekstensi** | GxP (IQ/OQ/PQ) | Bangun ekstensi decoupled Level A/B agar re-kualifikasi minimal tiap upgrade | A/B | Ekstensi stabil = PQ ulang lebih ringan |

> Bait featured-snippet & AI-Overview — struktur ringkas, mudah diekstrak baris-per-baris. Verifikasi: kolom "regulator/standar" dibingkai umum untuk OJK/BPOM (tak ada sumber clean-core-spesifik) — lihat Flag 2.

### Tabel pendukung (H2 #3): Extensibility Level A–D untuk kontrol compliance

| Level | Teknologi/objek | Upgrade-safe? | Rekomendasi SAP | Untuk kontrol compliance |
|---|---|---|---|---|
| **A** | Released/public API saja — ABAP Cloud (on-stack) atau side-by-side di SAP BTP; stability contract | Ya, penuh | Recommended (target utama) | Pilihan pertama untuk kontrol wajib baru |
| **B** | Classic ABAP API terdokumentasi (legacy API, BAdI, user exit) | Umumnya ya | Compliant, butuh governance | Boleh bila Level A tak cukup |
| **C** | Mengakses objek internal SAP | Berisiko | Partial — "conditionally clean" + cek changelog | Hanya bila terpaksa + roadmap remediasi |
| **D** | Modifikasi inti, objek tak-direkomendasikan, implicit enhancement | Tidak | Not recommended — risiko tertinggi | Hindari; sisa warisan → rencana eliminasi |

> Sumber: SAP News 2025-08-12 + SAP Community ABAP Extensibility Guide (Aug 2025). ⚠️ community.sap.com tak bisa di-WebFetch (403) — A–D dikonfirmasi dari SAP News yang berhasil di-fetch.

---

## Edge cases & nuance

- **Compliance ≠ core kotor.** Ini tesis artikel. Kustomisasi wajib-regulator tetap bisa clean-core-compliant bila ditempatkan sebagai ekstensi decoupled Level A/B. Jangan biarkan pembaca menyimpulkan "industri teregulasi tidak bisa clean core."
- **Clean core itu bertingkat, bukan biner.** "50 shades of clean core." Kadang Level B (atau sementara C dengan roadmap) adalah keputusan pragmatis yang sah untuk kontrol teregulasi tertentu. Yang salah adalah Level D tanpa alasan — atau Level C tanpa rencana remediasi.
- **Public vs private edition mengubah keleluasaan.** S/4HANA Cloud public hanya mengizinkan released extensibility (A). Private edition lebih longgar (masih bisa classic ABAP/B), tetapi clean core tetap disarankan kuat. Industri teregulasi yang butuh kontrol dekat-inti sering memilih private edition — sebut nuансa ini tanpa menyimpulkan "cloud tidak cocok untuk farmasi."
- **Shared responsibility di cloud.** Di public cloud, sebagian kontrol GxP dikelola SAP (kualifikasi supplier via ISO 9001/27001, SOC 2), tetapi organisasi tetap sepenuhnya akuntabel ke regulator. Poin penting: pindah ke cloud tidak "mengalihkan" tanggung jawab compliance.
- **Soltius tidak menjamin kelulusan audit.** Framing wajib: Soltius mengimplementasikan & mendampingi pemetaan kebutuhan compliance ke pola clean-core-safe — bukan menjamin lolos validasi/audit (itu tanggung jawab pemilik sistem + auditor/regulator).
- **OJK/BPOM tidak menyebut "clean core".** Regulasinya nyata (jejak audit, pelaporan, integritas data), tetapi tak ada teks regulator yang menyebut clean core. Bingkai sebagai "regulator menuntut X; clean core adalah cara arsitektural memenuhinya", bukan "OJK mensyaratkan clean core".

---

## Flags (open factual risk)

1. ⚠️ **A–D level detail dari community.sap.com tidak bisa di-WebFetch (HTTP 403).** Definisi A–D dikonfirmasi dari **SAP News (berhasil di-fetch)** + WebSearch snippet ABAP Extensibility Guide. → **Rekomendasi**: aman dipakai; jika editor ingin kutipan verbatim tingkat-level, ambil dari SAP News page, bukan dari community post yang tak terverifikasi langsung.
2. ⚠️ **Klaim OJK/CPOB BPOM spesifik → clean core.** Tidak ada sumber yang mengaitkan regulasi OJK/BPOM langsung ke clean core. → **Rekomendasi**: bingkai umum — "regulator seperti OJK dan BPOM menuntut jejak audit, integritas data, dan pelaporan" (didukung POJK/PADK & CPOB yang nyata) — **jangan** mengarang pasal atau menyebut "OJK mewajibkan clean core." Sebut nomor regulasi (POJK 38/2016, PADK 1/2026) hanya sebagai contoh tata kelola TI, bukan sebagai persyaratan clean-core.
3. ⚠️ **SAP KBA 3580758 (Coretax) butuh login SAP.** Isi detail tak terbaca tanpa akun. → **Rekomendasi**: kutip sebagai "SAP menerbitkan panduan resmi terkait reformasi Core Tax Indonesia 2025" (keberadaan panduan), bukan sebagai spesifikasi teknis. Fakta "integrasi via API" di-back oleh DJP/pajak.go.id.
4. ⚠️ **Istilah "Computer System Validation (CSV)" vs "Computer Software Assurance (CSA)".** FDA mendorong pergeseran CSV → CSA (pendekatan berbasis risiko) dalam guidance terbaru. → **Rekomendasi**: gunakan "validasi sistem (computer system validation)" seperti di brief agar selaras query pembaca; boleh menyebut IQ/OQ/PQ. Hindari klaim bahwa CSV adalah satu-satunya istilah resmi terkini.
5. ⚠️ **Coretax go-live: 31 Des 2024 vs "Januari 2025".** Keduanya benar — diluncurkan 31 Des 2024, **efektif operasional Januari 2025**. → **Rekomendasi**: tulis "berlaku efektif sejak Januari 2025" (selaras brief & sumber DJP); boleh menambахkan "(diluncurkan 31 Desember 2024)".
6. ⚠️ **Jangan menyiratkan clean core / Soltius menjamin lolos audit atau validasi.** → **Rekomendasi**: bahasa "membantu meminimalkan effort re-kualifikasi" / "mendukung kepatuhan", **bukan** "menjamin lolos audit." Kepatuhan tetap tanggung jawab pemilik sistem & regulator (shared-responsibility, Claim 4).

> **Brief-implied claims the writer should NOT assert as hard fact**: (a) angka % penghematan biaya validasi (tak ada sumber — buat kualitatif); (b) pasal OJK/CPOB spesifik yang "mewajibkan clean core" (tak ada — bingkai umum); (c) jaminan kelulusan audit. Treat all as flagged above.

---

## Definition snippet draft (40–60 words)

> *Clean core* adalah prinsip menjaga inti SAP S/4HANA tetap standar dan mudah di-upgrade. Di industri teregulasi seperti farmasi, perbankan, dan manufaktur, kepatuhan tetap dijaga dengan menempatkan kontrol compliance — audit trail, validasi, pelaporan — sebagai ekstensi *clean-core-compliant* (Level A/B) di SAP BTP atau in-app, bukan sebagai modifikasi inti. *(≈52 kata)*

> Konfirmasi fraseologi terhadap SAP News (2025-08-12); definisi terverifikasi live 2026-07-07.
