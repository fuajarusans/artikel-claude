---
brief_id: "sap-clean-core-01"
researcher_run_date: "2026-06-08"
sources_cited: 18
flags: 5
---

# Research Dossier: Setelah Go-Live, Core Kembali Kotor: Tata Kelola SAP Clean Core Jangka Panjang

## TL;DR for the writer

- SAP formalized the four-level extensibility model (A-D) in August 2025 through its ABAP Extensibility Guide and news.sap.com article. Level A is the only fully upgrade-safe target; Levels C and D carry meaningful-to-severe upgrade risk. These are the governance language the article must teach.
- Central ATC on the SAP BTP ABAP environment is confirmed by SAP as the recommended governance approach for private-cloud and on-premise ABAP development. Blocking mode for Priority 1 and 2 findings is the standard configuration. The exemption log growing unchecked is the primary early-warning signal of drift — confirmed by multiple SAP-adjacent sources and the IgniteSAP practice article (March 2026).
- The RISE with SAP Methodology Dashboard inside SAP Cloud ALM is the confirmed product name and location for clean-core KPIs. The dashboard has two views (System View + Operations View) and now tracks extensibility objects by Level A/B/C/D, plus a Technical Debt Score and Clean Core Share KPI — these reached GA by early 2026. ATC integration (manual import of check results) is also confirmed.
- The SAP official page (`sap.com/products/erp/rise/methodology/clean-core.html`) cites: 80% less software customization, 70% of core processes automated, 50% reduction in database size, 80% of core processes standardized across 24 countries — these are SAP-published customer-outcome figures, not a named study. Use with attribution ("menurut SAP...") and treat as reported figures, not guaranteed outcomes.
- The ECC / SAP Business Suite 7 timeline is confirmed: mainstream maintenance ends 31 December 2027; extended maintenance runs 2028-2030 at +2 percentage points surcharge; the SAP ERP Private Edition Transition Option covers 2031-2033 for qualifying customers. Do NOT simplify this to "ECC ends in 2027" — the nuance matters.


## Core facts (verified)

> **Claim**: SAP clean core is a strategy for keeping the ERP core standard, agile, and upgrade-safe
> **Number/specific**: SAP's official definition: "An ERP clean core strategy helps your organization ensure that business-critical systems remain agile, cost-effective, and ready to adopt innovation." It spans five dimensions: Processes, Extensibility, Data, Integrations, and Operations.
> **Source**: SAP, "RISE with SAP | ERP Clean Core Strategy" — https://www.sap.com/products/erp/rise/methodology/clean-core.html (accessed 2026-06-08)
> **Confidence**: high

---

> **Claim**: SAP formalized the four Clean Core Extensibility Levels (A, B, C, D) in August 2025, replacing the previous three-tier model
> **Number/specific**: The model was published in the ABAP Extensibility Guide (August 2025 Update) via SAP Community and announced on news.sap.com on 12 August 2025. The guide is the evolved version of SAP's original three-tier extensibility concept.
> **Source**: SAP Community, "ABAP Extensibility Guide – Clean Core for SAP S/4HANA Cloud – August 2025 Update" — https://community.sap.com/t5/technology-blog-posts-by-sap/abap-extensibility-guide-clean-core-for-sap-s-4hana-cloud-august-2025/ba-p/14175399 (accessed 2026-06-08); SAP News Center — https://news.sap.com/2025/08/extend-sap-s4hana-cloud-right-way-clean-clear/ published 2025-08-12 (accessed 2026-06-08)
> **Confidence**: high

---

> **Claim**: Level A = fully upgrade-safe extensions using only publicly released and stable SAP interfaces backed by formal stability contracts
> **Number/specific**: SAP's exact wording: "Fully compliant extensions using only publicly released and stable SAP interfaces, backed by formal stability contracts." Built on-stack via ABAP Cloud or side-by-side on SAP BTP.
> **Source**: SAP News Center, https://news.sap.com/2025/08/extend-sap-s4hana-cloud-right-way-clean-clear/ (accessed 2026-06-08)
> **Confidence**: high

---

> **Claim**: Level B = compliant extensions using SAP's classic APIs and technologies (documented, generally upgrade-stable)
> **Number/specific**: SAP's exact wording: "Compliant extensions, in addition to meeting Level A criteria, using also SAP's classic APIs and technologies." Acceptable with governance sign-off and monitoring.
> **Source**: SAP News Center, https://news.sap.com/2025/08/extend-sap-s4hana-cloud-right-way-clean-clear/ (accessed 2026-06-08)
> **Confidence**: high

---

> **Claim**: Level C = partially compliant extensions accessing SAP internal objects; carries meaningful upgrade risk; must be on a remediation roadmap
> **Number/specific**: SAP's exact wording: "Partially compliant extensions allowing access to SAP internal objects, offering flexibility for legacy scenarios." SAP provides a changelog for SAP objects to help identify changes early and plan upgrades proactively.
> **Source**: SAP News Center, https://news.sap.com/2025/08/extend-sap-s4hana-cloud-right-way-clean-clear/ (accessed 2026-06-08)
> **Confidence**: high

---

> **Claim**: Level D = not clean core; includes system modifications, reliance on non-recommended SAP objects, or unsupported techniques such as implicit enhancements
> **Number/specific**: SAP's exact wording: "Extensions not considered 'clean' that use explicitly non-recommended objects or techniques." Creates severe upgrade exposure. SAP Community search results confirm: Level D covers modifications and direct writes to SAP tables.
> **Source**: SAP News Center, https://news.sap.com/2025/08/extend-sap-s4hana-cloud-right-way-clean-clear/ (accessed 2026-06-08); SAP Community search results corroborate (accessed 2026-06-08)
> **Confidence**: high

---

> **Claim**: Central ATC on the SAP BTP ABAP environment is SAP's recommended governance approach for private-cloud and on-premise S/4HANA ABAP development
> **Number/specific**: The SAP Community ATC governance guide states explicitly: "Central ATC in the SAP BTP ABAP environment is the SAP recommended approach for governance of ABAP developments for clean core in SAP S/4HANA private cloud or on-premise landscapes."
> **Source**: SAP Community, "ABAP Test Cockpit (ATC) recommendations for governance of clean core ABAP development" — https://community.sap.com/t5/technology-blog-posts-by-sap/abap-test-cockpit-atc-recommendations-for-governance-of-clean-core-abap/ba-p/14186130 (accessed 2026-06-08); SAP Help Portal corroborates — https://help.sap.com/docs/btp/btp-developers-guide/keep-clean-core-governance-with-abap-test-cockpit (accessed 2026-06-08)
> **Confidence**: high

---

> **Claim**: ATC blocking mode should be active for Priority 1 and Priority 2 findings on transport tasks and transport requests in development systems
> **Number/specific**: Exact guidance: "Setup the ATC blocking mode in DEV systems for all Priority 1 and Priority 2 findings for transport tasks and transport requests." This prevents non-compliant code from being transported to quality or production.
> **Source**: SAP Community, "ABAP Test Cockpit (ATC) recommendations for governance of clean core ABAP development" — https://community.sap.com/t5/technology-blog-posts-by-sap/abap-test-cockpit-atc-recommendations-for-governance-of-clean-core-abap/ba-p/14186130 (accessed 2026-06-08); corroborated by IgniteSAP practice analysis — https://ignitesap.com/saps-clean-core-in-practice/ (published 2026-03-05)
> **Confidence**: high

---

> **Claim**: An ATC exemption log that grows without regular review is an early indicator of governance drift and should be tracked as a clean core KPI
> **Number/specific**: IgniteSAP (March 2026 practice analysis): "An ATC exemption log that grows without regular review is one of the clearest early indicators of governance drift, tracking exemption volume and approval rationale as a Clean Core KPI."
> **Source**: IgniteSAP, "SAP's Clean Core in Practice" — https://ignitesap.com/saps-clean-core-in-practice/ (published 2026-03-05, accessed 2026-06-08)
> **Confidence**: high (practitioner source, corroborated by SAP Community ATC guide)

---

> **Claim**: The RISE with SAP Methodology Dashboard in SAP Cloud ALM is the product that monitors clean-core compliance KPIs, with System View and Operations View
> **Number/specific**: The dashboard has two confirmed views: System View (checks compliance status, product version currency, extension counts by level) and Operations View (KPIs for monitoring and continuous improvement including System Health score). New KPIs include Technical Debt Score and Clean Core Share (distribution of custom objects across Level A-D). A dedicated Customer Objects drill-down dashboard was added in early 2026.
> **Source**: SAP Community, "New Clean Core Extensibility KPIs arrive on the RISE with SAP Dashboard" — https://community.sap.com/t5/enterprise-resource-planning-blog-posts-by-sap/new-clean-core-extensibility-kpis-arrive-on-the-rise-with-sap-dashboard/ba-p/14257352 (accessed 2026-06-08); SAP Support, "Why SAP Cloud ALM supports the adoption of clean core" — https://support.sap.com/en/alm/sap-cloud-alm/sap-cloud-alm-clean-core-adoption.html (accessed 2026-06-08)
> **Confidence**: high

---

> **Claim**: Quarterly clean core health reviews are the recommended governance cadence; they should cover custom object count by level, the ATC exception log, clean core KPIs in the dashboard, new exceptions since the last review, and the Level C/D remediation roadmap
> **Number/specific**: Confirmed in IgniteSAP (March 2026): "A quarterly Clean Core health review gives that governance structure operational effectiveness, reviewing custom object count by level, the ATC exception log, clean core compliance KPIs in the RISE with SAP Methodology Dashboard in SAP Cloud ALM, new exceptions added since the previous review, and a current remediation roadmap for Level C and D code."
> **Source**: IgniteSAP, "SAP's Clean Core in Practice" — https://ignitesap.com/saps-clean-core-in-practice/ (published 2026-03-05, accessed 2026-06-08); learning.sap.com course "Evaluating Clean Core Best Practices" corroborates — https://learning.sap.com/courses/managing-clean-core-for-sap-s-4hana-cloud/evaluating-clean-core-best-practices-1 (accessed 2026-06-08)
> **Confidence**: high

---

> **Claim**: The SAP Center of Excellence (CoE) owns the clean core governance framework, manages the extension decision catalogue, and is the primary escalation point for exception requests
> **Number/specific**: IgniteSAP (March 2026): "The SAP Centre of Excellence, where one exists, owns the governance framework, trains incoming team members in clean core practice, manages the extension decision catalogue, and acts as the primary escalation point for exception requests." SAP itself frames the Customer CoE around five domains: Strategy, Governance, Organization, Processes, and People.
> **Source**: IgniteSAP, "SAP's Clean Core in Practice" — https://ignitesap.com/saps-clean-core-in-practice/ (published 2026-03-05); SAP Community, "What is a Center of Excellence (CoE)?" — https://community.sap.com/t5/additional-blog-posts-by-sap/what-is-a-center-of-excellence-coe/ba-p/12980015 (accessed 2026-06-08)
> **Confidence**: high

---

> **Claim**: SAP ECC / Business Suite 7 mainstream maintenance ends 31 December 2027; extended maintenance runs 2028-2030 with a +2 percentage point surcharge
> **Number/specific**: Directly from the SAP support page: "Mainstream Maintenance End Date: End of 2027. Extended Maintenance Period: Beginning of 2028 through end of 2030 (3-year duration). Surcharge: A premium of two percentage points applied to the maintenance basis for all support offerings within SAP Business Suite 7's scope." Customers paying 22% Enterprise Support effectively pay ~24% during extension.
> **Source**: SAP, "Innovation Commitment for SAP S/4HANA until 2040" / maintenance strategy page — https://support.sap.com/en/release-upgrade-maintenance/maintenance-information/maintenance-strategy/s4hana-business-suite7.html (accessed 2026-06-08); corroborated by SAP News Center, 2025-08-04 — https://news.sap.com/2025/08/rise-with-sap-journey-sap-erp-private-edition-transition-option-updates/
> **Confidence**: high

---

> **Claim**: For the most complex customers, SAP introduced the SAP ERP Private Edition Transition Option covering 2031-2033 — available for purchase from 2028
> **Number/specific**: Confirmed by SAP News Center (2025-08-04): "A time-bound subscription offering designed to provide business continuity from 2031 to 2033 while enabling a structured path to SAP Cloud ERP or SAP Cloud ERP Private." Requires migration to SAP ERP Private Edition by 31 December 2030, SAP HANA as the only supported database, and minimum 2 TB system size.
> **Source**: SAP News Center, "Navigating Your RISE with SAP Journey" — https://news.sap.com/2025/08/rise-with-sap-journey-sap-erp-private-edition-transition-option-updates/ (published 2025-08-04, accessed 2026-06-08)
> **Confidence**: high

---

> **Claim**: SAP's official page reports customer outcomes of 80% less software customization and 70% of core business processes automated among clean-core adopters
> **Number/specific**: The SAP RISE with SAP / clean core methodology page (sap.com) states: 80% less software customization; 70% of core business processes automated; 50% reduction in database size; 80% of core business processes standardized across 24 countries. The SAP Sapphire 2024 statistic from SAP CEO Christian Klein: RISE customers enjoy "40% less need for customisations." These are SAP-published figures, not independently verified case study data.
> **Source**: SAP, "RISE with SAP | ERP Clean Core Strategy" — https://www.sap.com/products/erp/rise/methodology/clean-core.html (accessed 2026-06-08); Computer Weekly / SAP Sapphire 2024 — https://www.computerweekly.com/blog/CW-Developer-Network/SAP-Sapphire-2024-Running-a-modification-free-clean-core-cloud-ERP (published June 2024, accessed 2026-06-08)
> **Confidence**: medium (SAP-published; reflects customer-reported outcomes, not a controlled study. Writer must attribute: "menurut SAP..." and treat as reported figures.)

---

> **Claim**: Clean core governance failure after go-live occurs most commonly when implementation teams roll off and operational teams inherit the system without governance habits, authority, or tooling familiarity
> **Number/specific**: IgniteSAP (March 2026): "Implementation teams roll off, and governance attention moves to the next project, then operational teams inherit a system without the habits, authority, or tooling familiarity to maintain clean core standards under operational pressure."
> **Source**: IgniteSAP, "SAP's Clean Core in Practice" — https://ignitesap.com/saps-clean-core-in-practice/ (published 2026-03-05, accessed 2026-06-08)
> **Confidence**: high (practitioner-documented pattern)

---

> **Claim**: ATC on SAP BTP provides a new ABAP_CLEAN_CORE_DEVELOPMENT check variant and a Clean Core check category (introduced in the upcoming 2511 release)
> **Number/specific**: The SAP Community ATC governance guide notes: "In the upcoming 2511 version these 4 checks will be conveniently offered under the new Clean Core check category and in addition the new ATC check variant ABAP_CLEAN_CORE_DEVELOPMENT will be delivered, containing all recommended ATC checks for clean core governance." The four checks cover: allowed SAP enhancement technologies, usage of APIs, search for customer modifications, and critical statements.
> **Source**: SAP Community, "ABAP Test Cockpit (ATC) recommendations for governance of clean core ABAP development" — https://community.sap.com/t5/technology-blog-posts-by-sap/abap-test-cockpit-atc-recommendations-for-governance-of-clean-core-abap/ba-p/14186130 (accessed 2026-06-08); search result summary corroborates
> **Confidence**: medium (the "2511 version" notation suggests this was upcoming at time of posting; verify whether 2511 has shipped as of article publication date — writer should phrase as "recently introduced" or "available from version 2511")

---

> **Claim**: Indonesia's UU PDP (Personal Data Protection Law No. 27/2022) became fully enforceable on 17 October 2024, requiring enterprise IT governance controls including data classification, security controls, and breach notification within 72 hours
> **Number/specific**: Full enforcement as of October 2024. Fines can reach up to 2% of annual revenue. Enterprises in banking, telecom, and e-commerce are the primary compliance cohort in 2024-2025. This creates an enterprise IT governance context relevant to the local audience.
> **Source**: Schinder Law Firm legal brief — https://schinderlawfirm.com/blog/sanctions-and-compliance-with-indonesias-personal-data-protection-law-uu-pdp-by-october-16-2024/ (accessed 2026-06-08)
> **Confidence**: high (law is publicly verifiable; enforcement date widely confirmed)


## Solution focus + Soltius anchor (from product_matrix.md)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| SAP Clean Core principle + five dimensions | Core = Processes, Extensibility, Data, Integrations, Operations; governance = ongoing discipline, not a one-time project | H2 #1 (definitional) | — |
| Clean Core Extensibility Levels A, B, C, D | Formalized August 2025; A = fully upgrade-safe (released APIs + ABAP Cloud/BTP); B = classic APIs with governance; C = internal objects, remediation roadmap required; D = modifications, eliminate | H2 #4 (operating cycle) | — |
| ABAP Test Cockpit (ATC) — central on BTP ABAP environment | SAP's recommended approach for private-cloud/on-prem; blocking mode = Priority 1 + 2; exemption log as KPI; new ABAP_CLEAN_CORE_DEVELOPMENT check variant in release 2511 | H2 #3 (four pillars) | — |
| SAP Cloud ALM — RISE with SAP Methodology Dashboard | System View (Level A/B/C/D object counts, Technical Debt Score, Clean Core Share) + Operations View (System Health KPI); Customer Objects drill-down available 2026; supports ATC result import | H2 #3 (four pillars) | — |
| Transport governance | ATC blocking mode on DEV system prevents non-compliant transports; sign-off + change request link per transport; governance failure = transport to QA without documentation | H2 #3 (four pillars) | — |
| SAP Center of Excellence (CoE) | Owns governance framework; trains new members; manages extension decision catalogue; primary escalation for exceptions; quarterly review cadence | H2 #3 + H2 #4 | — |
| SAP Master Data Governance (MDG) | Brief mention: data dimension of clean core; cloud-ready mode follows clean core principles; available for business partner data | H2 #3 (brief aside) | — |
| Application Management Services (AMS) + PCoE | "Soltius mendampingi tata kelola clean core pasca go-live melalui Application Management Services (AMS) — Soltius adalah Certified AMS Partner dan Partner Center of Expertise (PCoE) di Indonesia." First-party signal: tim AMS sering menemukan exemption log yang menumpuk sebagai sinyal drift pertama | Closing CTA + one mid-article aside in H2 #3 | **AMS + PCoE + SAP Platinum Partner via United VARs** |

Reminder: Soltius **mendampingi/mendukung/mengimplementasikan** — never "membangun" SAP. Max 2–3 self-mentions. The CoE discussion is vendor-neutral teaching; Soltius's AMS/PCoE is the anchor for how they deliver this in practice.


## Authoritative external sources (for the writer to link out)

1. **SAP, "RISE with SAP | ERP Clean Core Strategy" (accessed 2026-06-08)** — https://www.sap.com/products/erp/rise/methodology/clean-core.html — *backs*: clean core definition, five dimensions, SAP-published outcome figures (80%/70%/50% customer data). **Primary external link — authoritative, canonical SAP page.**

2. **SAP Community, "ABAP Test Cockpit (ATC) recommendations for governance of clean core ABAP development" (accessed 2026-06-08)** — https://community.sap.com/t5/technology-blog-posts-by-sap/abap-test-cockpit-atc-recommendations-for-governance-of-clean-core-abap/ba-p/14186130 — *backs*: Central ATC on BTP = SAP-recommended approach; blocking mode Priority 1+2; exemption workflow. **Second external link — SAP official Community post by SAP team.**

Optional third: **SAP News Center, "How to Extend SAP S/4HANA Cloud the Right Way" (2025-08-12)** — https://news.sap.com/2025/08/extend-sap-s4hana-cloud-right-way-clean-clear/ — *backs*: A-D level definitions with exact SAP wording.


## FAQ Q&As (Bahasa Indonesia)

### Apa itu tata kelola (governance) SAP Clean Core?
Tata kelola SAP Clean Core adalah disiplin berkelanjutan untuk menjaga inti sistem SAP S/4HANA tetap standar dan upgrade-safe setelah go-live. Ini bukan proyek pembersihan satu kali, melainkan siklus operasional yang mencakup kebijakan pengembangan (menggunakan ATC sebagai gerbang kode), pemantauan lewat SAP Cloud ALM, kepemilikan yang jelas melalui Center of Excellence (CoE), dan tinjauan kesehatan berkala setiap kuartal.

### Mengapa core SAP bisa kembali kotor setelah go-live?
Drift terjadi karena governance berhenti saat proyek migrasi selesai: tim implementor meninggalkan klien, tekanan jadwal mendorong pengembang mencari jalan pintas, dan exemption ATC menumpuk tanpa ditinjau. Tanpa mekanisme yang menahan kebiasaan lama — misalnya ATC blocking mode dan siklus review kuartalan — technical debt tumbuh kembali diam-diam hingga upgrade berikutnya menjadi mahal.

### Apa fungsi SAP Cloud ALM untuk tata kelola clean core?
SAP Cloud ALM menampung RISE with SAP Methodology Dashboard yang memantau kepatuhan clean core secara terus-menerus. Dashboard ini memiliki System View (menampilkan distribusi objek kustom per Level A, B, C, D, Technical Debt Score, dan Clean Core Share) dan Operations View (KPI kesehatan sistem harian). Tim dapat melakukan drill-down ke Customer Objects untuk melihat objek mana yang paling berisiko dan perlu diprioritaskan untuk remediasi.

### Apa itu ABAP Test Cockpit (ATC) dan bagaimana cara kerjanya untuk clean core?
ABAP Test Cockpit (ATC) adalah alat pemindai kode bawaan SAP yang menganalisis setiap objek ABAP sebelum ditransport ke sistem kualitas atau produksi. Untuk governance clean core, SAP merekomendasikan Central ATC di SAP BTP ABAP environment. Konfigurasi standar: blocking mode aktif untuk temuan Prioritas 1 dan 2 — artinya kode yang melanggar panduan clean core tidak dapat ditransport sampai diperbaiki atau mendapat exemption yang terdokumentasi.

### Apa perbedaan Extensibility Level A, B, C, dan D?
SAP meresmikan model empat level ini pada Agustus 2025. Level A: ekstensi menggunakan API yang dirilis SAP (ABAP Cloud atau side-by-side di BTP) — sepenuhnya upgrade-safe dan merupakan target semua pengembangan baru. Level B: menggunakan classic API SAP yang terdokumentasi — dapat diterima dengan persetujuan CoE. Level C: mengakses objek internal SAP — berisiko saat upgrade dan harus masuk roadmap remediasi. Level D: modifikasi atau teknik yang tidak direkomendasikan SAP — harus dieliminasi karena menciptakan risiko upgrade paling berat.

### Apakah tata kelola clean core hanya urusan tim IT?
Tidak. Keputusan di Level C dan D memiliki konsekuensi bisnis — apakah proses tertentu boleh dikustomisasi atau harus mengikuti standar SAP — sehingga manajemen fungsional perlu terlibat. Tinjauan kuartalan idealnya dihadiri oleh kepemimpinan teknis dan fungsional. Selain itu, keberhasilan governance bergantung pada sponsor eksekutif dengan otoritas nyata yang mampu menahan tekanan "ini lebih cepat" dari tim operasional.

### Berapa sering audit atau review clean core sebaiknya dilakukan?
Standar yang direkomendasikan adalah tinjauan kesehatan clean core setiap kuartal. Agenda: jumlah objek kustom per level, log exemption ATC beserta rasionalisasinya, KPI di RISE with SAP Methodology Dashboard, exemption baru sejak review sebelumnya, dan roadmap remediasi untuk Level C dan D. Di luar siklus kuartalan, ATC harus berjalan otomatis di lingkungan pengembangan setiap kali kode akan ditransport.

### Apa risiko jika core SAP kembali kotor setelah migrasi?
Risiko utama: biaya upgrade berikutnya melonjak karena setiap pembaruan SAP harus diuji ulang terhadap kustomisasi yang ada. SAP melaporkan pelanggan clean core mengalami 80% lebih sedikit kustomisasi perangkat lunak dibandingkan sebelum migrasi — angka yang sulit dipertahankan tanpa governance. Risiko lain: kustomisasi Level D dapat rusak saat SAP merilis patch keamanan, dan fitur baru seperti SAP Business AI (Joule) tidak dapat diaktifkan jika core sudah terkontaminasi.


## Data tables for the writer

### Governance Mechanism Table (Four Pillars — the article's core deliverable)

| Mekanisme | Apa yang dikontrol | Pemilik | Frekuensi |
|---|---|---|---|
| **ABAP Test Cockpit (ATC) — blocking mode** | Mencegah kode Prioritas 1 & 2 masuk transport ke QA/Prod | Tim pengembangan (teknis) + CoE sebagai pemilik kebijakan | Per transport (otomatis, berkelanjutan) |
| **ATC Exemption Log** | Melacak jumlah dan rasionalisasi pengecualian; indikator awal drift jika log tumbuh tanpa ditinjau | CoE / SAP Manager | Ditinjau setiap kuartal (minimum) |
| **RISE with SAP Methodology Dashboard (SAP Cloud ALM)** | Distribusi objek kustom per Level A-D, Technical Debt Score, Clean Core Share, KPI kesehatan sistem | CoE + CIO / IT Lead | Monitoring harian (Operations View); review mendalam per kuartal |
| **Transport Governance** | Dokumentasi dan persetujuan setiap transport sebelum masuk QA; tautan ke change request | Change manager + CoE | Per transport |
| **Quarterly Clean Core Health Review** | Jumlah objek per level, exemption baru, roadmap remediasi Level C & D, KPI dashboard | CoE — dihadiri oleh kepemimpinan teknis DAN fungsional | Setiap kuartal |
| **Extension Decision Catalogue** | Mendokumentasikan setiap keputusan ekstensi (level, justifikasi, rencana remediasi) | CoE | Diperbarui setiap ada ekstensi baru atau keputusan exemption |
| **Master Data Governance (MDG)** | Kualitas data master (Business Partner, Vendor, Customer) agar dimensi data tetap bersih | Data steward + CoE | Berkelanjutan; dikonfigurasi per proses |

### SAP ECC / Business Suite 7 Maintenance Timeline

| Fase | Periode | Kondisi / Catatan |
|---|---|---|
| Mainstream Maintenance | s.d. 31 Desember 2027 | Termasuk SAP ECC EhP 6-8 dan Business Suite 7 core applications. EhP 0-5 sudah berakhir 31 Des 2025. |
| Extended Maintenance | 1 Januari 2028 – 31 Desember 2030 | Opsional; +2 poin persentase surcharge di atas biaya maintenance yang ada (~22% → ~24%). |
| SAP ERP Private Edition Transition Option | 2031 – 2033 | Untuk pelanggan paling kompleks; time-bound subscription; hanya HANA; minimum sistem 2 TB; harus berkomitmen sebelum akhir 2030. |
| Rekomendasi SAP | Migrasi ke S/4HANA Cloud (RISE/GROW) sesegera mungkin | Pelanggan yang bermigrasi lebih awal mendapatkan syarat komersial yang lebih baik. |

### Extensibility Level A–D Quick Reference

| Level | Nama | Karakteristik | Upgrade Risk | Target Status |
|---|---|---|---|---|
| A | Extend with SAP Build | Hanya released APIs; ABAP Cloud on-stack atau side-by-side di SAP BTP; formal stability contracts | Nol (upgrade-safe) | Target semua pengembangan baru |
| B | Leverage Classic APIs | Classic API SAP yang terdokumentasi dan umumnya stabil; memenuhi kriteria Level A plus classic APIs | Rendah, dengan monitoring | Dapat diterima dengan persetujuan CoE |
| C | Accesses Internal Objects | Mengakses objek internal SAP; fleksibel untuk skenario legacy | Sedang-Tinggi | Harus masuk roadmap remediasi |
| D | Not Recommended | Modifikasi, implicit enhancements, penulisan langsung ke tabel SAP | Berat | Dieliminasi — tentukan timeline penghapusan |


## Edge cases & nuance

- **"Clean core" bukan sinonim "zero customization".** SAP secara eksplisit mendukung ekstensi Level A dan Level B. Artikel harus menyampaikan bahwa governance bukan tentang melarang semua kustomisasi, melainkan memastikan kustomisasi menggunakan jalur yang tepat.

- **Central ATC di BTP ABAP environment vs ATC di dalam S/4HANA sendiri.** Rekomendasi SAP adalah menempatkan Central ATC di BTP ABAP environment (bukan langsung di S/4HANA). Ini penting karena penempatan yang salah berarti governance tidak benar-benar "central" dan tidak bisa menganalisis seluruh landscape. Penulis jangan menyederhanakan menjadi "ATC di dalam S/4HANA."

- **Exemption bukan musuh — yang berbahaya adalah exemption tanpa tata kelola.** Exemption (pengecualian) memang ada dalam sistem ATC dan itu sah untuk skenario tertentu. Masalahnya ketika exemption tidak terdokumentasi, tidak punya rasionalisasi, atau tidak ditinjau secara berkala. Artikel harus membedakan ini agar tidak dianggap dogmatis.

- **Brownfield vs greenfield: intensitas governance berbeda.** Perusahaan yang baru go-live greenfield dengan sedikit kustomisasi mungkin belum memerlukan governance sekompleks yang dijelaskan artikel (CoE penuh, quarterly review formal, dll.). Artikel wajib jujur soal ini di H2 #5. Threshold nyata: organisasi dengan ratusan objek Z atau landscape brownfield besar adalah audience utama untuk governance berat ini.

- **Dashboard KPI: GA vs preview.** Berdasarkan hasil penelitian, KPI inti (Technical Debt Score, Clean Core Share, Customer Objects drill-down) tersedia sebagai GA per awal 2026. Namun beberapa fitur data-related (Data Volume Efficiency tab) masih baru. Penulis sebaiknya menyebut fitur utama saja tanpa mengklaim semua fitur sudah GA secara menyeluruh.

- **"80% fewer modifications" adalah angka SAP, bukan hasil studi independen.** Angka ini muncul di halaman resmi SAP dan harus diatribusikan kepada SAP, bukan diklaim sebagai temuan riset. Perbedaan juga ada: SAP CEO Klein di Sapphire 2024 menyebut "40% less need for customisations" untuk pelanggan RISE. Angka 80% mungkin merujuk pada skenario greenfield penuh. Jangan gabungkan dua angka ini tanpa konteks.

- **UU PDP Indonesia sebagai local hook.** Enforcement per Oktober 2024 menciptakan kebutuhan nyata akan data governance — yang merupakan salah satu dimensi clean core (dimensi Data, termasuk MDG). Ini adalah koneksi yang jujur dan relevan untuk audiens Indonesia, tapi harus disampaikan dengan hati-hati: UU PDP tidak secara spesifik mensyaratkan clean core SAP; clean core membantu kepatuhan data governance secara umum.

- **ECC end dates: ada tiga lapisan, bukan satu.** Penulis harus menghindari menyederhanakan menjadi "ECC berakhir 2027." Ada mainstream maintenance (2027), extended maintenance (2028-2030, berbayar), dan Transition Option (2031-2033, sangat terbatas). Simplifikasi berlebihan adalah sumber mis-informasi yang umum dalam artikel SAP.


## Flags (open factual risk)

- **Flag 1 — ATC "version 2511" timing**: Penelitian menunjukkan fitur ABAP_CLEAN_CORE_DEVELOPMENT check variant dijanjikan dalam "upcoming 2511 version" pada saat posting SAP Community. Belum dikonfirmasi apakah 2511 sudah rilis saat artikel ini diterbitkan (Juli 2026). Rekomendasi: penulis menyebut "tersedia sejak rilis 2511" atau cukup menyebut "check variant terbaru untuk clean core" tanpa nomor versi spesifik — editor harus memverifikasi status rilis 2511 sebelum approve.

- **Flag 2 — Dashboard KPI: GA vs preview boundary**: Penelitian mengonfirmasi KPI utama (Technical Debt Score, Clean Core Share, Customer Objects) GA per awal 2026, tetapi beberapa fitur baru (Data Volume Efficiency, data-related KPIs) belum jelas statusnya (GA atau preview). Rekomendasi: hanya klaim KPI utama (Technical Debt Score, Clean Core Share, Level A-D object counts) sebagai tersedia; hindari listing semua fitur tanpa verifikasi.

- **Flag 3 — "80% fewer modifications" sumber dan konteks**: Angka ini ada di halaman resmi SAP (`sap.com/products/erp/rise/methodology/clean-core.html`) tapi tidak diatribusikan ke studi spesifik. SAP CEO di Sapphire 2024 menyebut angka berbeda (40%). Rekomendasi: penulis menggunakan framing "SAP melaporkan..." dan tidak mencantumkan angka 80% dan 40% bersamaan tanpa menjelaskan konteks berbeda (satu dari halaman produk SAP, satu dari pernyataan CEO di konferensi untuk RISE customers).

- **Flag 4 — Central ATC: "BTP ABAP environment" vs "S/4HANA embedded ATC"**: Kedua istilah ini ada di ekosistem SAP dan bisa membingungkan. Rekomendasi: penulis menggunakan framing SAP yang tepat — "Central ATC yang di-host di SAP BTP ABAP environment" — dan tidak menyebutnya sebagai "ATC di dalam S/4HANA" karena itu berbeda secara teknis dan bisa menyesatkan pembaca.

- **Flag 5 — Extensibility Whitepaper: akses terbatas**: Beberapa upaya WebFetch ke halaman SAP Community (yang merupakan sumber paling rinci untuk definisi A-D) menghasilkan HTTP 403, artinya konten mungkin memerlukan login SAP Community. Definisi yang digunakan dalam dossier ini dikonfirmasi via news.sap.com (public) dan hasil WebSearch dari SAP Community. Rekomendasi: penulis dan editor dapat menggunakan definisi dari news.sap.com sebagai sumber publik yang dapat ditautkan.


## Definition snippet draft (40–60 words)

> Tata kelola SAP Clean Core adalah disiplin berkelanjutan yang menjaga inti sistem SAP S/4HANA tetap standar dan upgrade-safe setelah go-live, melalui kebijakan pengembangan (ABAP Test Cockpit sebagai gerbang kode), pemantauan KPI (RISE with SAP Methodology Dashboard di SAP Cloud ALM), dan kepemilikan yang jelas melalui SAP Center of Excellence — bukan proyek pembersihan satu kali.

*(56 kata — dalam batas 40-60. Editor dapat mempersingkat jika diperlukan.)*


## Notes for image-planner

- **Concept 1 — Governance Operating Model Diagram**: Diagram lingkaran atau roda yang menggambarkan empat pilar tata kelola clean core (ATC sebagai gerbang kode, SAP Cloud ALM sebagai dashboard KPI, Transport Governance, CoE sebagai pemilik keputusan) dengan panah menunjukkan siklus kuartalan. Latar belakang bersih, warna SAP (biru/putih). Cocok untuk H2 #3. Alt-text: "Diagram empat pilar tata kelola SAP Clean Core pasca go-live."

- **Concept 2 — Extensibility Level A-D Comparison Visual**: Infografik empat kolom (Level A, B, C, D) dengan ikon warna berbeda (hijau untuk A, kuning untuk B, oranye untuk C, merah untuk D), masing-masing menampilkan: nama level, jenis API yang digunakan, status upgrade safety, dan tindakan yang diperlukan. Sangat cocok untuk Featured Snippet dan GEO. Alt-text: "Perbandingan Extensibility Level A, B, C, D dalam SAP Clean Core — mulai dari upgrade-safe hingga tidak direkomendasikan."

- **Concept 3 — Core Drift Timeline**: Ilustrasi timeline horizontal yang menggambarkan: titik Go-Live (core bersih) → 6 bulan pasca go-live (exemption mulai menumpuk) → 12-18 bulan (Level C dan D tumbuh) → upgrade berikutnya (biaya tinggi). Setiap titik waktu dilabeli dengan tindakan governance yang mencegah drift. Cocok untuk H2 #2 (mengapa core kembali kotor). Alt-text: "Timeline drift core SAP dan bagaimana tata kelola mencegah technical debt tumbuh pasca go-live."
