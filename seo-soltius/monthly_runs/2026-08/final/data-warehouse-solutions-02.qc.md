---
brief_id: "data-warehouse-solutions-02"
editor_run_date: "2026-06-08"
recommendation: "approve"
overall_score: 9
---

# Editor QC Report — Real-Time vs Batch Data Warehouse: Kapan Anda Perlu Data Seketika

## Recommendation
**approve**

A genuinely strong, decision-useful draft with a clear practitioner voice, an honest counter-conventional section ("Kapan Real-Time Justru Pemborosan?"), and SAP facts that match the dossier precisely. The single material defect was an anti-AI failure: ~25 em-dashes against a ≤2 limit (style_guide §5). I reduced that to 0 in-place, replacing each with commas, colons, parentheses, or appositive connectors without altering meaning or rhythm. I also softened one residual AI cliché ("Perlu dicatat:"), converted a three-item inline-bold run into a true bulleted list (to satisfy the format-mix list requirement and sharpen GEO extractability), tightened the meta description off an em-dash, and updated the word count. Every do-NOT-assert item on the dossier flag list is honored: no BDC over-explanation, no Confluent dollar figures, no BFSI 91% stat, "near-real-time" used correctly (not "real-time penuh"), and Soltius framed strictly as implementer. The article is shippable.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Excellent rhythm and honest hedging; only failure was em-dash overuse (now fixed to 0). |
| Factual & SAP-spec accuracy | 10 | All 5 spot-checked claims match the dossier; product names, versions, and dates correct. |
| On-page SEO compliance | 9 | Meta title 46 chars, desc 156, slug 33, 5 H2s, 3 internal + 2 external links, 6-Q FAQ. |
| GEO extractability (§2a) | 9 | 40–60-word answer after each of the 5 H2s; one quotable point per paragraph; FAQPage-ready. |
| Soltius framing discipline | 10 | 2 self-mentions + soft web CTA; implementer framing; zero superlatives. |
| Internal linking | 9 | Hub anchor in lead; 2 cousins inline (BI, ERP migration); no BACA JUGA. |
| FAQ quality | 9 | 6 well-formed Q&As, each 50–70 words, each with a concrete fact. |
| Image-brief completeness | 9 | JSON parses; 3 entries match 3 placeholders; all ID fields present; SAP-screenshot note surfaced. |

## What I fixed (changelog)
- **Anti-AI (primary):** Removed all em-dashes from the body, meta description, definition snippet, tables, FAQ, and conclusion — count reduced from ~25 to **0** (limit ≤2). Replacements used commas, colons, parentheses, semicolons, and appositive connectors ("yaitu", "yakni", "seperti", "melainkan").
- Softened the AI cliché "Perlu dicatat:" → "Satu batasan jujur:" in the §4 (Datasphere) section (style_guide §5).
- Converted the three real-time scenarios (fraud / cross-warehouse stock / dynamic pricing) from inline-bold prose into a proper bulleted list — satisfies the mandatory list element (style_guide §2) and makes each scenario independently quotable for GEO.
- Tightened meta description: replaced the leading em-dash with a colon; length now 156 chars (within 140–160).
- Updated frontmatter `word_count` 1664 → 1690 to reflect the edits.
- Saved the polished article from `drafts/` to `final/data-warehouse-solutions-02.id.md`.

## What I flagged (open issues)
- ⚠️ **Word count is an editor estimate (~1,690), not a tool-verified count** — the Bash/`wc` path was unavailable in this environment. The figure is the writer's verified 1,664 plus the net words added by em-dash-replacement connectors and the bulleted-list expansion. Comfortably inside 1,500–1,800; *recommendation*: validator's `quality-check.ps1` will produce the authoritative count — accept it if it lands in-band (it will).
- ⚠️ **`dateModified` not a discrete frontmatter field** — freshness is carried by `publish_month: "2026-08"`, consistent with every approved article in `index.json` (none use a discrete `dateModified`). *Recommendation*: the CMS sets the real `dateModified` on publish; no content change needed. Noted only for §2a completeness.
- ℹ️ **Run month vs history:** live run is `2026-08`; `articles_history/index.json` currently holds only `2026-06` entries. No slug or angle collision exists. The strategist's in-cluster comparison (vs `-03`/`-04`) still holds. No action.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — lead opens on a concrete dual-pain hook.
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — none present (grep clean).
- [x] No "Penting untuk dicatat / dipahami bahwa" — the one soft variant ("Perlu dicatat:") was rephrased.
- [x] "Dengan demikian" not overused — not present.
- [x] Em-dash count ≤2 — **now 0** (was ~25; fixed in-place).
- [x] Varied paragraph lengths — strong variation (1–6 sentences); not symmetric.
- [x] Not every H2 → 3-bullet list — only one bulleted list in the whole article; the rest lead with prose.
- [x] No generic claims without numbers — concrete figures throughout (100 ms, S/4HANA 1909 FPS01, Cloud 1905, Maret 2023, <1 jam / <15 menit thresholds).
- [x] No stacked hype adjectives — "canggih" appears once, used rhetorically (the article argues it is the *wrong* question); "terdepan" describes the finance sector's adoption, not Soltius.
- [x] No service-dump paragraph — single Soltius anchor, no service list.

### B. Factual & SAP-spec spot-check
| Claim | Source check | Verdict |
|---|---|---|
| "SAP Datasphere — nama produk sejak Maret 2023, menggantikan SAP Data Warehouse Cloud" | dossier Claim 4 (8 March 2023) ✓ | pass |
| "interval micro-batch dapat ditekan hingga 100 milidetik dengan jaminan exactly-once" (Apache Spark Structured Streaming) | dossier Claim 2 ✓ | pass |
| "CDC … ODP … tersedia mulai S/4HANA 1909 FPS01 (on-premise) dan S/4HANA Cloud 1905" | dossier Claim 10 ✓ | pass |
| "Confluent Cloud sebagai SAP Endorsed App … lewat Replication Flow … bukan broker Kafka di dalam Datasphere" | dossier Claim 8 + Edge-case note ✓ | pass |
| "CDC … near-real-time (detik hingga menit), bukan sub-detik penuh" | dossier Flag 1 (honors the near-real-time caveat) ✓ | pass |

Additional do-NOT-assert verification: dollar streaming-cost figures **omitted** (Flag 3 honored — qualitative "beberapa kali lipat" only); BFSI 91% stat **omitted** (Flag 4 honored — "sektor terdepan" attribution only); SAP Business Data Cloud **not introduced** (Edge-case guidance honored). No invented specs.

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: **46 chars**; "Data Warehouse" at position ~16–30 (primary-keyword stem in first 30).
- [x] Meta description 140–160 — actual: **156 chars**.
- [x] Slug ≤60, kebab-case, keyword — actual: `real-time-vs-batch-data-warehouse` (**33 chars**, contains "data-warehouse").
- [x] H1 contains keyword — "Real-Time vs Batch Data Warehouse…" (keyword synonym present).
- [x] H2 count 4–5 — actual: **5**.
- [x] ≥1 question-format H2; ≥1 honest/counter-conventional H2 — Q: "Apa Bedanya di Mata Pembaca Bisnis…?"; honest: "Kapan Real-Time Justru Pemborosan?".
- [x] Keyword in first 100 words — "Data Warehouse Solutions" hub anchor in the lead.
- [x] Definition snippet near top (40–60 words) — "Secara singkat:" blockquote, ~58 words.
- [x] ≥8 LSI terms — counted: **10+** (real-time data warehouse, batch processing, micro-batch, streaming, change data capture, data federation, data replication, latensi, near-real-time, SAP Datasphere, ODP, CDS views).
- [x] 3 internal links (1 hub + 2 cousins) — destinations: data-warehouse-solutions (hub, lead), business-intelligence (cousin), migrasi-erp-ke-cloud (cousin). Matches product_matrix cross-link map.
- [x] ≥1 external authoritative citation — actual: **2** (Confluent CDC; SAP Help Portal Datasphere real-time replication).
- [x] FAQ 5–7 Q&As — actual: **6**.
- [x] 2 image placeholders (up to 3) — actual: **3**, all retained in body.
- [x] ≥1 list + ≥1 table — actual: 1 bulleted list (added) + **2 tables**.
- [x] Word count 1,500–1,800 — actual: **~1,690** (editor estimate; see open flag).

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — verified for all 5 H2s (lines following each heading lead with a self-contained answer before elaboration).
- [x] Each body paragraph makes one independently quotable, verifiable point — yes; the scenario list and the two decision tables are row-extractable.
- [x] FAQ parseable for FAQPage schema; freshness noted — FAQ is clean H3-Q/paragraph-A; freshness carried by `publish_month` (see open flag re: `dateModified`).

### D. Soltius framing discipline (product_matrix.md + style_guide §11)
- [x] Soltius framed as implementer/partner — "merancang arsitektur", "ditangani layanan Data and AI Consulting"; never "builds".
- [x] ≤3 Soltius self-mentions — actual: **2** company mentions (mid-article aside in §4 + conclusion) plus the soft website-CTA line; within budget.
- [x] No unverifiable superlatives — none ("terbaik/nomor satu" absent).
- [x] SAP/partner product names + specs match product_matrix.md / dossier — SAP Datasphere, Data Flow, Replication Flow, Remote Table, CDC/ODP, Confluent all correct.
- [x] Closing uses a company_profile.md positioning line — Data and AI Consulting framing (matches the approved anchor).
- [x] Soft website CTA present as the FINAL line — "…kunjungi soltius.co.id." after the conclusion; consultative, not "beli sekarang".
- [x] Hub link as natural inline anchor (lead) — yes; no "BACA JUGA" callout anywhere.

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: `data-warehouse-solutions-04` (SAP Datasphere vs BW/4HANA — touches "data federation") and `-03` (ETL/ELT roadmap). Note: history index currently holds the 2026-06 cluster; this run is 2026-08.
- Subtopic overlap (Jaccard estimate): **~0.15** — shared entities limited to "SAP Datasphere" and the federation/replication pair; the differentiating axis (data latency: batch vs CDC vs streaming) is absent from all priors.
- Verdict: **distinct angle confirmed** (well under 0.4). No strategist re-spin needed.

### F. Image-brief completeness (images.json)
- [x] JSON parses.
- [x] One entry per `{IMAGE_NN}` placeholder — 3 entries (IMAGE_01/02/03) match the 3 body placeholders exactly.
- [x] Each entry has alt_id (≤125 chars) + caption_id + visual_direction + suggested_asset_type — all present, all in Bahasa Indonesia.
- [x] Any "real SAP screenshot" requirement surfaced — IMAGE_02 sourcing_note explicitly states it is a *schematic* diagram, NOT a fabricated SAP UI, and to request a genuine screenshot from the SAP/Soltius team if one is wanted. Correctly handled.
- (No generated PNGs to check — design team executes from this brief.)
