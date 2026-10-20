---
brief_id: "sap-hyperscaler-c01"
editor_run_date: "2026-07-17"
recommendation: "approve"
overall_score: 9
batch: "conditional-2026-08 (style_addendum.md overrides applied — band 800–1000, FAQ 2–3, 2 internal links, ZERO image placeholders, max 2 Soltius mentions, definition once only)"
---

# Editor QC Report — SAP di AWS vs Azure vs GCP: Perbandingan untuk Perusahaan Indonesia

## Recommendation
**approve**

Clean pass under independent verification. Every batch-2026-08 override holds (word band, FAQ 2, exactly 2 internal links, zero `{IMAGE_NN}`, ≤2 Soltius mentions, single definition, lead/kesimpulan ≤80, CTA as last line), the anti-AI §5 scan returns zero hits, all inline facts reconcile with the dossier, and all 7 dossier flags are respected verbatim. No substantive edits were required — the draft was tuned tightly to a hard 1000-word ceiling, and forcing changes would risk regressing the verified word budget or rhythm without improving quality. Final = verified draft content; frontmatter `word_count` confirmed at 976 via the canonical `tools/count_words.py`.

## Batch-2026-08 overrides applied (NOT the agent's 1,500–1,800 defaults)
- Word band checked = **800–1000** (not 1,500–1,800). Actual 976 ✓ (target ~900 exceeded ~8%; still inside band).
- FAQ checked = **2–3**. Actual 2 ✓ — see "FAQ 2 vs parent 'FAQ 3'" reconciliation below.
- Internal links checked = **exactly 2** (1 hub + 1 cousin). Actual 2 ✓.
- Image placeholders = **N/A by design** — validation skipped; 0 `{IMAGE_NN}` present, none to remove ✓.
- Soltius self-mentions = **max 2**. Actual 2 (positioning line + CTA) ✓.
- Definition = **once only** (snippet). No body/H2 restatement ✓.
- Everything else (anti-AI §5, EYD, citation discipline §10, Soltius framing §11, meta block §7, GEO §2a) enforced in full.

## FAQ 2 vs parent checklist "FAQ 3" — reconciliation
The parent narrative said "FAQ 3", but the binding batch rule (style_addendum §4, which the parent's own enforcement list restates as "FAQ 2-3 = compliant, do not add more") sets the band at 2–3. The brief + dossier both gate Q3 explicitly: *"Q3 hanya bila word count masih di bawah 950."* Body without Q3 = 976 → gate fails. Adding Q3 → ~1021 words → breaks the hard 1000 ceiling (§1 = "di atas 1000 = gagal"). The writer's rules-based deviation to FAQ 2 is therefore correct and compliant; adding Q3 would have caused a hard fail. **No action.**

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Zero forbidden-phrase hits; varied openers (Rencana/Ya/Setiap/Satu/Jarak/Baris/Bacalah/Tidak/Dokumentasi/Tiga/Ketiganya…); paragraph lengths 1–4 sentences; em-dash 0. |
| Factual & SAP-spec accuracy | 9 | All numbers/dates/instance families/SAP Notes reconcile with dossier; nothing invented; every soft spot hedged. |
| On-page SEO compliance | 9 | Meta title 56 / desc 154 / slug 43 all in band; keyword entities in H1, lead, meta, last section; 4 H2 (3 question-format). |
| GEO extractability (§2a) | 9 | 40–60-word direct answer after each H2 (51/42/42/45), each a new point; table rows quotable stand-alone; FAQ FAQPage-ready. |
| Soltius framing discipline | 10 | "implements/supports…di atas platform hyperscaler pihak ketiga"; never builds/owns; not framed as a cloud provider; Huawei Cloud absent. |
| Internal linking | 9 | Exactly 2 (hub "solusi cloud" inline in lead; cousin at H2 #4 close), both descriptive inline anchors, no "BACA JUGA". |
| FAQ quality | 9 | 2 Q&A, each 43 words (band 30–60), each carries a fact (3 AZ; SAP Note 2271345); distinct from `iaas-untuk-sap-c01` FAQ. |

## What I fixed (changelog)
- **No substantive edits.** Independent re-verification of every checklist item passed; the draft was already shippable. Making cosmetic edits to a draft trimmed to a hard 1000-word ceiling would have risked regressing the verified word budget for no quality gain. Final is a byte-faithful copy of the verified draft with frontmatter `word_count: 976` confirmed against the canonical counter.

## What I flagged (open issues)
- ⚠️ **Freshness / `dateModified`** — the GEO §2a checklist asks for a freshness signal in the meta block, but the canonical §7 meta template (and all existing pipeline finals, e.g. `2026-06/final/cara-kerja-sistem-sap-c01.id.md`) carry freshness via `publish_month` only, with no `dateModified` field. The draft matches that convention (`publish_month: "2026-08"`). *Recommendation:* leave as-is; `dateModified` is a CMS concern per §2a. Not a fail.
- ⚠️ **Two internal-link URLs verified 200 on 2026-07-17 by strategist + researcher, not re-fetched by editor** — `…/id/solutions-by-products/cloud` and the EN cousin `…/blog/read/sap-in-the-cloud-…`. Same-day dual verification on the run date; low risk. *Recommendation:* curator/CMS to re-confirm at publish.
- ⚠️ **English-language cousin link from an ID article** — accepted pipeline practice (per `product_matrix.md` §6, the SAP Clean Core hub is also English); the anchor stays Bahasa Indonesia. Fallback (`/id/blog/migrasi-erp-ke-cloud`) available if a reviewer objects, but the EN cousin is preferred for its dedup hand-off function. Not a defect.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan / Tidak dapat dipungkiri" openers — lead opens on concrete pain ("Rencana besarnya sudah disepakati…")
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — 0 occurrences
- [x] No "Penting untuk dicatat / dipahami bahwa" — 0
- [x] "Dengan demikian" not overused — 0
- [x] Em-dash count ≤2 — **0** (en-dash 1×, only in numeric range "M1–M4", acceptable typography, not an em-dash)
- [x] Varied paragraph lengths — 1–4 sentences, mixed
- [x] Not every H2 → 3-bullet list — H2 #1 prose, #2 table+prose, #3 prose+3-bullet, #4 prose+3-bullet
- [x] No generic claims without numbers — ≥4 specific numbers inline
- [x] No stacked hype adjectives (canggih/powerful/seamless/terdepan) — 0
- [x] No service-dump paragraph — single positioning line in Kesimpulan

### B. Factual & SAP-spec spot-check
| Claim | Source check | Verdict |
|---|---|---|
| Region dates: GCP Jun 2020 / AWS Des 2021 / Azure Apr 2025 | dossier Claim 5–7; F3 (April 2025 GA, not 27 May) | pass |
| "hampir lima tahun" (Jun 2020 → Apr 2025) | dossier Claim 8 ("rentang ~5 tahun") | pass |
| 3 availability zones per region (×3) | dossier Claim 5–7 (confirmed current, not stale) | pass |
| Certification attaches to instance type, all 3 point to same SAP HANA Hardware Directory | dossier Claim 1–2 | pass |
| SAP Notes 1656099 / 1928533 / 2271345 named as references only, "isi hanya lewat SAP Portal" | dossier Claim 3–4 + F1 | pass |
| Instance families AWS (r8i/x8i incl.) / Azure (M-series, Mv2/Mv3, E-series) / GCP (M1–M4, X4, N1/N2, C3/C4) | dossier Claim 9–11 + researcher corrections | pass |
| Region ≠ AZ availability; `describe-instance-type-offerings` | dossier Claim 12 (verbatim AWS + Google Cloud) | pass |

### C. On-page SEO checklist (batch-adjusted)
- [x] Meta title ≤60 (keyword first 30) — **56**; "SAP di AWS vs Azure vs GCP" = 26 chars
- [x] Meta description 140–160 — **154**
- [x] Slug ≤60, kebab-case, keyword — `sap-di-aws-azure-gcp-perbandingan-indonesia` (**43**)
- [x] H1 contains keyword entities (SAP + AWS + Azure + GCP)
- [x] H2 count 3–4 (batch) — **4** body H2
- [x] ≥1 question-format H2 — 3 (#1, #3, #4); honest-hedging substitutes for counter-conventional H2 per addendum §2 (H2 #1 non-certified rule + H2 #3 region≠availability)
- [x] Keyword entities in first 100 words — lead
- [x] Definition snippet 40–60 words — **58**, single occurrence
- [x] Internal links **exactly 2** (batch) — hub + cousin
- [x] External authoritative citations 1–2 — **2** (AWS docs + Google Cloud docs, both H2 #3, direct `docs.` URLs not 301s)
- [x] FAQ **2–3** (batch) — **2**
- [x] ≥1 table + ≥1 list — 1 comparison table + 2 bold-lead-in lists
- [x] Word count **800–1000** (batch) — **976** (canonical counter)
- [x] Image placeholders **0** (batch: none by design)

### C2. GEO extractability (§2a)
- [x] Direct 40–60-word answer after each major H2 — 51 / 42 / 42 / 45, each a NEW point (cert attaches to instance type · "local region?" now settled for all three · region ≠ instance availability · decision sits outside the hyperscaler), zero snippet paraphrase
- [x] Each body paragraph makes one quotable, verifiable point — table rows stand alone
- [x] FAQ parseable for FAQPage schema; freshness via `publish_month: 2026-08` (see flag)

### D. Soltius framing discipline (product_matrix.md + §11)
- [x] Framed as implementer/partner "di atas platform hyperscaler pihak ketiga" — NOT builds/owns; NOT positioned as a cloud provider
- [x] ≤2 Soltius self-mentions (batch) — **2** (United VARs positioning line + soltius.co.id CTA); URLs in internal links not counted
- [x] No unverifiable superlatives — none
- [x] SAP/partner names + specs match dossier; Huawei Cloud correctly absent (not dragged into comparison)
- [x] Closing uses a company positioning line (SAP Platinum Partner via United VARs)
- [x] Soft website CTA is the FINAL line, after Kesimpulan (15 words, consultative, anchor "SAP on AWS/Azure/GCP")
- [x] Hub link = natural inline anchor in the lead, no "BACA JUGA"

### D2. Dossier flags (all 7 respected)
- [x] **F1** SAP Note numbers as references only + hedge "Isi Note tersebut hanya terbuka lewat SAP Portal"; no content quoted
- [x] **F2** SAP HANA Hardware Directory named + function only ("Daftarnya dipegang SAP"); no directory content claimed
- [x] **F3** Azure = April 2025 (GA); 27 May 2025 absent
- [x] **F4** RISE = exactly 1 sentence, safest level ("infrastruktur berjalan di hyperscaler tetapi dikontrakkan lewat SAP"); no hyperscaler names / default / savings figures
- [x] **F5** Zero comparative performance/downtime/price/SLA/SAPS claims; no Nitro / NetApp / BigQuery-Vertex angle; Azure "largest HANA memory" insight deliberately NOT asserted (would violate F5) — replaced with neutral "umur region tidak menentukan kemampuan platform"
- [x] **F6** "region terdekat di Asia Tenggara" — Singapore not named
- [x] **F7** "residensi data" one clause, no regulation number

### E. Anti-cannibalization spot check
- Closest prior article: `iaas-untuk-sap-c01` (2026-06) + live EN page `sap-in-the-cloud-why-iaas-aws-azure-gcp-…`
- Subtopic overlap (Jaccard, per brief): **~0.13** (< 0.4)
- Boundary dedup honored: no IaaS what/why, no IaaS characteristics, no IaaS vs PaaS vs SaaS, no shared-responsibility table, no self-managed/RISE spectrum, no cloud vs on-premise, no NIST, no TCO. "Apa & mengapa IaaS" handed off to the cousin link at H2 #4 close (the requested pattern).
- Verdict: **distinct angle confirmed** — head-to-head on verifiable axes (certification source, region + code + operating year + AZ count, instance families, region≠availability caveat) vs the June article's model-layer axis.

## The shipping question
If this appeared on soltius.co.id tomorrow and a senior SAP consultant plus a skeptical CIO read it: yes — it answers the real Indonesian decision (which certified configuration is available in which region), stays neutral where competitors oversell, cites primary AWS/Google Cloud documentation, and never overreaches on Soltius. **Ship it.**
