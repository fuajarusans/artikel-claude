---
brief_id: "business-intelligence-04"
editor_run_date: "2026-06-08"
recommendation: "approve"
overall_score: 9
---

# Editor QC Report — Cara Mendesain Dashboard BI yang Benar-Benar Dipakai (Bukan Diabaikan)

## Recommendation
**approve**

The draft was strong on substance, structure, and honesty, but carried one dominant AI tell: ~18 em-dashes in body prose (against a ≤2 ceiling) plus an over-length meta description (162 chars). Both are now fixed in-place. The body reads like a senior practitioner leveling with a CIO — concrete numbers, attributed sources, honest hedging on the soft figures (7±2 KPIs, 5-second rule, 65% Gartner), a comparison table, a numbered list, a bullet list, and a counter-conventional adoption section competitors skip. Facts check out against the dossier and product_matrix, and the do-NOT-assert items (KPI thresholds as practitioner consensus, F-pattern as text-content research with loose dashboard implication, 65% as secondary-source indication, SAC feature naming) are all framed exactly as the dossier required. SAC framing is correct (Soltius "merancang dan mengimplementasikan", not "builds"), self-mentions sit at 2, no superlatives, internal links are natural inline anchors with no BACA JUGA, conclusion sits under its own `## Kesimpulan`, and the soft website CTA is the final line. Two minor open items remain (image alt_id lengths slightly over 125 chars; meta_title leads with "Dashboard BI" rather than the literal primary keyword) — neither blocks shipping, and the meta_title call is the correct one given the ≤60-char rule. Shippable.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Excellent practitioner voice and varied rhythm; only flaw was em-dash overuse (now fixed). |
| Factual & SAP-spec accuracy | 9 | All spot-checked claims trace to dossier/SAP-official; soft figures honestly hedged. |
| On-page SEO compliance | 9 | Meta desc trimmed to 156; all elements present. Meta title uses "Dashboard BI" (deliberate, ≤60). |
| GEO extractability (§2a) | 9 | 40–60-word direct answer after every major H2; one quotable point per paragraph; FAQ FAQPage-ready; dateModified added. |
| Soltius framing discipline | 10 | 2 self-mentions, implementer framing, no superlatives, correct positioning line + soft CTA. |
| Internal linking | 10 | Hub in lead + 2 correct cousins (DWH, ERP migration), all natural inline. |
| FAQ quality | 9 | 7 Q&As mirroring PAA; each 40–80 words, self-contained, with a number/fact. |
| Image-brief completeness | 8 | 3 entries match 3 placeholders; complete BI fields; alt_id lengths slightly over 125 chars (flag). |

## What I fixed (changelog)
- **Removed ~17 em-dashes from body prose** (the dominant AI tell; ceiling is ≤2). Converted to colons, commas, parentheses, or sentence breaks across the lead, definition snippet, all five H2 sections, the FAQ, and the conclusion. Left exactly **1** em-dash in the lead ("Masalahnya jarang teknologi — lebih sering desain") as a deliberate rhetorical beat, within budget. (Note: em-dashes remaining in YAML `context:` fields and `{IMAGE_NN}` design-brief blocks are metadata/non-published-prose and were left intact.)
- **Tightened meta description 162 → 156 chars** to fit the 140–160 band (150–160 GEO sweet spot), keeping the keyword and three specific value props.
- **Added `date_modified: "2026-06-08"`** to the meta block (GEO §2a freshness requirement).
- **Smoothed the 65% hedge** ("perlakukan sebagai indikasi arah, bukan presisi") and split two run-on sentences in the adoption section for rhythm.
- **Updated frontmatter `word_count` 1565 → 1580** (editor estimate post-edit; within the 1,500–1,800 band).
- Minor connective-word smoothing where sentence splits left a clause dangling (e.g., FAQ "bukan sekadar kumpulan grafik, melainkan tampilan yang disusun…").

## What I flagged (open issues)
- ⚠️ **Image alt_id lengths exceed 125 chars** (IMAGE_01 ~137, IMAGE_02 ~128, IMAGE_03 ~138) — *recommendation*: image-planner/design team should trim each alt text to ≤125 chars for accessibility/SEO best practice (e.g., IMAGE_01 → "Diagram before/after dashboard BI: kiri 14 tile acak sama besar, kanan hierarki 3 KPI utama dengan 5 detail di bawah"). Does not block article shipping.
- ⚠️ **Meta title leads with "Dashboard BI" rather than the literal "Business Intelligence"** — *recommendation*: keep as-is. "BI" is the universal abbreviation; the full keyword appears in the H1 (as "BI"), the meta description (first ~45 chars), the lead, and the definition snippet. Forcing "Business Intelligence" into the title would breach the ≤60-char rule (an explicit failure mode). Deliberate, defensible.
- ℹ️ **Two listed secondary keywords ("data storytelling", "self-service analytics") do not surface in the body** — by design: the dossier reserved "data storytelling" for a future article and flagged it as a passing-mention-only term. Body LSI coverage from naturally occurring terms still far exceeds the ≥8 minimum. No action needed.
- ℹ️ **`word_count` is an editor estimate (1580)** — the curator's docx build / quality-check will produce the authoritative count; comfortably inside 1,500–1,800 either way.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers
- [x] No "Selain itu" opening ≥2 consecutive paragraphs (zero occurrences)
- [x] No "Penting untuk dicatat / dipahami bahwa"
- [x] "Dengan demikian" not overused (zero occurrences)
- [x] Em-dash count ≤2 — **fixed**: body now has 1 (lead); was ~18
- [x] Varied paragraph lengths (1-sentence beats mixed with 4–6-sentence blocks)
- [x] Not every H2 → 3-bullet list (mix of prose, 1 numbered list, 1 bullet list, 1 table)
- [x] No generic claims without numbers (5-7/3-5/7-9 KPI, 7±2, 25-35%, 65%, 50% by 2027, 80% by 2027)
- [x] No stacked hype adjectives (canggih/powerful/seamless/terdepan) — none
- [x] No service-dump paragraph (single anchored CTA in the conclusion)

### B. Factual & SAP-spec spot-check
| Claim | Source check | Verdict |
|---|---|---|
| KPI ranges 5-7 exec / 7-9 operational, grounded in Miller 7±2 (1956) | dossier Claim 6 (practitioner consensus, framed not as law) ✓ | pass |
| Gartner: BI tool usage ~25-35% of employees, flat for years | dossier Claim 1 (Gartner via TechTarget, high confidence) ✓ | pass |
| Gartner: >50% of CDAOs secure data-literacy funding by 2027 | dossier Claim 4 + external link present ✓ | pass |
| Gartner: 80% of D&A governance initiatives fail by 2027 | dossier Claim 5 (high confidence) ✓ | pass |
| SAC: Smart Insights under "AI for Planning and Analytics" umbrella | dossier Claim 11 + product_matrix; WebSearch SAP-official confirmed (Smart Insights live; "AI for Planning and Analytics" is a current SAP topic area) ✓ | pass |
| Few "Save the pies for dessert"; Tufte "chartjunk"/data-ink ratio | dossier Claims 8–9 ✓ (no misattribution) | pass |

All do-NOT-assert items honored: 65% framed as secondary-source indication; F-pattern framed as text-content research with loose dashboard implication; 5-second rule framed as practitioner heuristic; KPI thresholds framed as practitioner consensus, not a single study.

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: 50 chars; leads "Dashboard BI" (keyword abbreviation in first 12 chars) — see flag
- [x] Meta description 140–160 — actual: **156** (fixed from 162)
- [x] Slug ≤60, kebab-case, keyword — actual: `cara-mendesain-dashboard-bi-yang-dipakai` (40 chars)
- [x] H1 contains keyword — "Dashboard BI" (clear synonym/abbreviation, allowed)
- [x] H2 count 4–5 — actual: **5** body H2s
- [x] ≥1 question-format H2 ("Berapa KPI Ideal dan Bagaimana Memilihnya?"); ≥1 honest/counter-conventional H2 ("Mengapa Dashboard Bagus Pun Sering Diabaikan")
- [x] Keyword in first 100 words (lead link "Business Intelligence" + "dashboard BI")
- [x] Definition snippet near top (the "Ringkas" blockquote, ~52 words)
- [x] ≥8 LSI terms — counted ~14 in body (hierarki visual, visualisasi, KPI, dashboard eksekutif/operasional/strategis, augmented analytics, SAC, Power BI, Tableau, Looker, data-ink ratio, chartjunk, governance, real-time)
- [x] 3 internal links (1 hub + 2 cousins) — destinations: business-intelligence (hub, lead), data-warehouse-solutions, migrasi-erp-ke-cloud
- [x] ≥1 external authoritative citation — actual: **2** (Nielsen Norman Group, Gartner)
- [x] FAQ 5–7 Q&As — actual: **7**
- [x] 2 image placeholders (up to 3) — actual: **3** (IMAGE_01/02/03)
- [x] ≥1 list + ≥1 table — 1 numbered list (5 principles), 1 bullet list (2 KPI questions), 1 table (chart mistakes)
- [x] Word count 1,500–1,800 — actual: ~**1,580** (editor estimate)

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2:
  - "Apa Itu Dashboard BI" → definitional answer (line 1 of section)
  - "Berapa KPI Ideal" → "Sebagai panduan awal, tampilkan 5-7 KPI…"
  - "Lima Prinsip Hierarki Visual" → "Hierarki visual adalah cara desain mengarahkan mata…"
  - "Kesalahan Visualisasi" → "Kesalahan visualisasi yang paling berbahaya bukan yang membuat dashboard jelek…"
  - "Mengapa Dashboard Bagus Pun Diabaikan" → "Desain yang baik perlu, tetapi tidak cukup… 25-35% karyawan…"
- [x] Each body paragraph makes one independently quotable, verifiable point
- [x] FAQ parseable for FAQPage schema; `date_modified` added to the meta block

### D. Soltius framing discipline (product_matrix.md + style_guide §11)
- [x] Soltius framed as implementer/partner ("merancang dan mengimplementasikan dashboard SAP Analytics Cloud"), NOT "builds/makes SAP"
- [x] ≤3 Soltius self-mentions — actual: **2** (mid-article workshop aside in agency voice + closing CTA)
- [x] No unverifiable superlatives ("terbaik/nomor satu") — none
- [x] SAP/partner product names + specs match product_matrix.md / dossier (SAC, Smart Insights, AI for Planning and Analytics, Power BI/Tableau/Looker as vendor-neutral examples)
- [x] Closing uses a company_profile.md positioning line (Data and AI Consulting anchor)
- [x] Soft website CTA present as the FINAL line, after the conclusion (invites a visit to soltius.co.id; consultative tone)
- [x] Hub link present as a natural inline anchor in the lead (descriptive anchor "Business Intelligence") — NOT a BACA JUGA callout

### E. Anti-cannibalization spot check
- Closest prior articles for this keyword (cluster `business-intelligence`, 2026-06): `-04` self-service vs traditional BI; `-01` definisi BI / dashboard vs BI; `-05` why BI projects fail.
- Subtopic overlap (Jaccard estimate): ~**0.12–0.15** vs the closest. This article's subtopics (dashboard design craft: KPI selection, visual hierarchy/F-pattern, chart mistakes, design-driven adoption) are net-new to the cluster and the hub. Only "adoption" intersects `-05`, but `-05` treats it as project-failure diagnosis (ROI, change management, data quality), whereas here it is one section on why even good *design* gets ignored.
- Verdict: **distinct angle confirmed** (well under the 0.4 threshold).

### F. Image-brief completeness (images.json)
- [x] JSON parses
- [x] One entry per `{IMAGE_NN}` placeholder in the body (3 placeholders ↔ 3 entries)
- [~] Each entry has alt_id + caption_id + visual_direction + suggested_asset_type (all Bahasa Indonesia) — all present and high quality; **alt_id slightly exceeds 125 chars on all three** (flagged for trimming)
- [x] Any "real SAP screenshot" requirement surfaced — each `sourcing_note` explicitly states no SAP screenshot needed (original infographics/diagrams with fictitious illustrative data)
- (No generated PNGs to check — images are produced by the client's design team from this brief.)
