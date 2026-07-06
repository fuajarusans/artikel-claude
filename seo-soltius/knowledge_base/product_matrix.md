# Solution & Service Matrix — When to Mention What (SOLTIUS)

Primary reference for the SME researcher (which solution/service to flag) and the writer (placing mentions in context).

> **Per-month keywords:** keywords are defined per month in `monthly_runs/<YYYY-MM>/keywords.md` and fully replace prior sets. The keyword→solution rows below are a **reference library for recurring/known topics** (the 2026-06 set). For a **new keyword not listed here**, derive its SAP/partner mapping + Soltius anchor from `keywords.md` (`sap_focus`/`soltius_anchor`) + research. The **universal rules — blacklist, "implements not builds", ≤3 mentions, no superlatives — apply to ALL keywords**, listed or not. The cross-link/cousin map is rebuilt each month from that month's keyword set.

> **Key framing for this client:** Soltius is an **SAP implementation & IT consulting partner**, not a software maker. So "product mentions" here means two things: (1) the **SAP / partner technology** the article educates the reader about, and (2) the **Soltius service + credibility anchor** that powers a natural, non-salesy closing. Max **2–3 mentions of Soltius itself** per article, almost always in the closing or one mid-article aside. The body should teach the topic generously and vendor-neutrally — Soltius earns the CTA by being genuinely helpful first.

---

## How to use this file

1. **Researcher** reads the brief, identifies the keyword + sub-topic, then pulls the matching row(s) below and lists them in the dossier under "Solution focus" and "Soltius anchor".
2. **Writer** explains the SAP/partner technology accurately in the body (verify specs via dossier), and places **one** Soltius service/credibility anchor — usually the closing CTA, optionally one mid-article aside.
3. **Editor** verifies: no invented SAP specs, no claim that Soltius builds the software, no superlatives, ≤3 Soltius self-mentions.

---

## Keyword → solution + service mapping

### 1. Low-Code Platform → `/id/blog/low-code-and-no-code-platforms`

| Field | Value |
|---|---|
| **What to teach** | Low-code/no-code concepts; **SAP Build** (Build Apps, Build Process Automation, Build Work Zone) on **SAP BTP**; **ABAP Cloud**; citizen development; visual app/workflow building; governance of low-code. |
| **Reader pain** | IT backlog, slow custom-app delivery, shadow IT, gap between business needs and dev capacity. |
| **Soltius anchor** | Digital Platform solution + Implementation; "Soltius membantu perusahaan memanfaatkan platform low-code SAP Build di atas SAP BTP untuk mempercepat pengembangan aplikasi tanpa membebani tim IT inti." |
| **Tie-in** | Strong link to **SAP Clean Core** (extend without modifying the core) and **digital platform/extensibility**. |
| **Verify before claiming** | Exact SAP Build component names/capabilities (they evolve) — researcher confirms via SAP docs. |

### 2. digital manufacturing → `/id/blog/digital-manufaktur-sistem`

| Field | Value |
|---|---|
| **What to teach** | Digital manufacturing / smart factory; **SAP Digital Manufacturing (Cloud)**; S/4HANA **Production Planning (PP)** & manufacturing; MES, OEE, shop-floor visibility, paperless production, Industry 4.0 / IIoT, predictive maintenance. |
| **Reader pain** | Manual/paper shop floor, no real-time production visibility, downtime, quality variance, disconnected OT/IT. |
| **Soltius anchor** | Implementation + industry experience (Mill Products, Automotive, Consumer Products); "Sebagai mitra implementasi SAP dengan pengalaman lintas industri manufaktur, Soltius membantu menghubungkan lantai produksi dengan sistem ERP secara real-time." |
| **Verify before claiming** | SAP Digital Manufacturing module names/scope; any OEE/uptime figures must be sourced (never invent). |

### 3. Data Warehouse Solutions → `/id/blog/data-warehouse-solutions`

| Field | Value |
|---|---|
| **What to teach** | Data warehouse concepts vs data lake vs lakehouse; **SAP Datasphere** (formerly Data Warehouse Cloud), **SAP BW/4HANA**, **SAP HANA Cloud**; ETL/ELT, data modeling, single source of truth, real-time vs batch, governance. |
| **Reader pain** | Data silos, slow/inconsistent reporting, multiple conflicting numbers, no real-time analytics. |
| **Soltius anchor** | Data Management solution + **Data and AI Consulting**; "Melalui layanan Data and AI Consulting, Soltius merancang arsitektur data warehouse modern (mis. SAP Datasphere/BW/4HANA) agar data tersebar menjadi satu sumber kebenaran." |
| **Verify before claiming** | SAP Datasphere vs BW/4HANA positioning; capabilities. Researcher confirms current product naming. |

### 4. Business Intelligence → `/id/blog/business-intelligence`

| Field | Value |
|---|---|
| **What to teach** | BI concepts; **SAP Analytics Cloud (SAC)**, **SAP BusinessObjects BI**, embedded analytics in S/4HANA; dashboards, self-service BI, augmented analytics, planning & predictive, data-driven culture. |
| **Reader pain** | Reports take days, decisions made on stale data, no self-service, "gut-feel" management. |
| **Soltius anchor** | Analytics solution + Data and AI Consulting; "Soltius mengimplementasikan solusi Business Intelligence seperti SAP Analytics Cloud agar manajemen memantau KPI secara real-time, bukan menunggu rekap manual." |
| **Note** | ⚠️ This keyword crashed #10→#100 (Apr). Articles here should be especially original/deep to help recovery — define BI crisply, add a comparison table, answer PAA thoroughly. |
| **Verify before claiming** | SAC feature claims; any market stats sourced. |

### 5. ERP migration to the cloud → `/id/blog/migrasi-erp-ke-cloud`

| Field | Value |
|---|---|
| **What to teach** | Cloud ERP migration; **SAP S/4HANA Cloud** (private/public edition); **RISE with SAP** / **GROW with SAP**; migration approaches (greenfield/brownfield/selective "bluefield", lift-and-shift vs re-platform); **SAP ECC end of mainstream maintenance (2027, extended 2030)**; data migration, downtime, TCO, security. |
| **Reader pain** | Aging on-prem ECC, 2027/2030 deadline pressure, capex burden, scaling/limited agility, migration risk fear. |
| **Soltius anchor** | **Migration** service (under Implementation) + Cloud solution + Strategy/ERP Strategy; "Sebagai Best RISE & Best Cloud Partner, Soltius merancang dan mengeksekusi migrasi ERP ke cloud dengan pendekatan yang meminimalkan downtime dan risiko data." |
| **Note** | 🎉 Currently #1. Build a tight cluster around it (downtime, cost, RISE, brownfield vs greenfield, security, post-migration) to defend the position. |
| **Verify before claiming** | The 2027/2030 ECC dates and RISE inclusions — confirm current SAP guidance (these have shifted historically). |

### 6. SAP Clean Core → `/blog/sap-clean-core-the-complete-guide`

| Field | Value |
|---|---|
| **What to teach** | Clean Core principle: keep the S/4HANA core standard/upgrade-safe; **side-by-side extensions on SAP BTP**, **in-app/key-user extensibility**, **ABAP Cloud**; custom-code remediation, "keep the core clean", clean-core maturity, why it matters for cloud ERP & upgrades. |
| **Reader pain** | Heavy legacy customization, painful/expensive upgrades, technical debt, blocked from moving to cloud. |
| **Soltius anchor** | Implementation + Enhancement + ERP Strategy; "Soltius membantu perusahaan menerapkan prinsip clean core — memindahkan kustomisasi ke SAP BTP — agar sistem tetap mudah di-upgrade dan siap cloud." |
| **Note** | Biggest whitespace (rank #100). **English landing page** (`/blog/...`, no `/id/`). Article is still written in Bahasa Indonesia, but link anchor points to that English hub page. Tie strongly to ERP-cloud-migration and Low-Code/BTP clusters. |
| **Verify before claiming** | Clean-core dimensions, ABAP Cloud, BTP extensibility model — confirm via SAP's clean-core guidance. |

---

## Cross-keyword internal-link map (the 6 hubs + strong cousins)

Every article links **UP** to its own hub (anchor = keyword) + **2 cousin hubs**. Natural cousin pairings:

| Article's keyword | Cousin hub 1 | Cousin hub 2 |
|---|---|---|
| Low-Code Platform | SAP Clean Core (extend without breaking core) | digital manufacturing (low-code apps on shop floor) |
| digital manufacturing | ERP migration to the cloud (S/4HANA foundation) | Business Intelligence (production analytics) |
| Data Warehouse Solutions | Business Intelligence (BI needs a warehouse) | ERP migration to the cloud (data layer on cloud) |
| Business Intelligence | Data Warehouse Solutions (where BI gets data) | ERP migration to the cloud (analytics post-migration) |
| ERP migration to the cloud | SAP Clean Core (clean core enables cloud) | Data Warehouse Solutions / digital manufacturing |
| SAP Clean Core | ERP migration to the cloud (clean core = cloud-ready) | Low-Code Platform (BTP side-by-side extensions) |

**Cousin landing pages (canonical URLs):**
- Low-Code: `https://www.soltius.co.id/id/blog/low-code-and-no-code-platforms`
- digital manufacturing: `https://www.soltius.co.id/id/blog/digital-manufaktur-sistem`
- Data Warehouse: `https://www.soltius.co.id/id/blog/data-warehouse-solutions`
- Business Intelligence: `https://www.soltius.co.id/id/blog/business-intelligence`
- ERP migration: `https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud`
- SAP Clean Core: `https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide`

**Optional DOWN-links** to existing high-traffic Soltius blog posts when contextually relevant (these already rank — good for topical glue): `mengenal-sistem-sap-dan-manfaatnya`, `8-modul-sap-indonesia-yang-paling-banyak-digunakan`, `pengertian-sap-business-one-dan-kegunaannya`, `cara-kerja-sistem-sap-dan-fungsinya-untuk-perusahaan`. As history grows, link to sibling articles in the same cluster.

---

## Soltius services & credibility markers (for non-product credibility lifts)

| Topic need | Mention | Anchor phrasing direction |
|---|---|---|
| Implementation depth | SAP Platinum Partner via United VARs | "Sebagai SAP Platinum Partner melalui United VARs..." |
| Cloud/migration credibility | Best RISE / Best Cloud Partner awards | "...diakui sebagai Best RISE Partner dan Best Cloud Partner." |
| Heritage / trust | Sejak 1998, Metrodata Group | "Berpengalaman sejak 1998 dan bagian dari Metrodata Group..." |
| Data / BI / analytics | Data and AI Consulting service | "Melalui layanan Data and AI Consulting Soltius..." |
| Ongoing ownership | Application Management Services (AMS) | "...didukung Application Management Services (AMS) pasca go-live." |
| Industry fit | 9 industry verticals + named clients | "...dengan pengalaman di industri manufaktur/perkebunan/distribusi." |

---

## Don'ts (verified blacklist)

- ❌ Don't say Soltius **builds/makes/owns** SAP, S/4HANA, SAP Build, Datasphere, SAC, etc. Soltius **implements, migrates, integrates, and supports** them.
- ❌ Don't claim Soltius is "the best/number one in Indonesia". "Largest revenue contributor to SAP Indonesia (since 2015)" is the only ranking-style claim allowed, framed as a recognition.
- ❌ Don't invent SAP product names, version numbers, module capabilities, pricing, or the ECC end-of-maintenance dates — researcher verifies each.
- ❌ Don't invent client names, project values, consultant counts (only "200+"), or client outcomes beyond the one-line testimonials in `company_profile.md`.
- ❌ Don't list every Soltius service/solution in one paragraph (service-dump). Pick the 1 relevant anchor.
- ❌ Don't refer to Soltius as a "startup" or "newcomer" — operating since 1998.
- ❌ Don't position partner techs (Huawei Cloud, Siemens) as Soltius's own.
