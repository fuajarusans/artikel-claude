---
brief_id: "business-intelligence-02"
editor_run_date: "2026-06-08"
recommendation: "approve"
overall_score: 9
---

# Editor QC Report — Augmented Analytics: Bagaimana AI Mengubah Cara Kerja Business Intelligence

## Recommendation
**approve**

This is one of the strongest drafts to come through the BI cluster. The writer honored every single factual flag in the dossier (the unverified "80% karyawan" Gartner stat is absent; Just Ask's Bahasa Indonesia support is correctly NOT claimed; "agentic analytics" is explicitly clarified as a build-platform, not a named BI feature; the Mordor and 50%/90% Gartner figures are all attributed as estimates). All five SAP-fact spot-checks pass against the dossier, and two load-bearing dates (Just Ask GA Q1 2024; Joule Analytical Insights GA Q2 2025 + SAP Build Work Zone dependency) were re-verified against SAP-official sources. The only real defects were stylistic: 23 em-dashes (an AI tell at that volume) and one "Penting dipahami bahwa" cliché — both fixed in place. I also corrected the meta-title keyword position, added the missing bullet list for format diversity, and added a freshness field. Soltius framing is clean (1 mention, implementer voice, no superlatives). Nothing structural needed rework; the article is shippable.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Excellent honest-hedging voice, varied rhythm, concrete examples. Docked 1 only because the raw draft leaned on em-dashes heavily (now fixed). |
| Factual & SAP-spec accuracy | 10 | Every flagged risk handled correctly; SAP dates re-verified vs SAP-official. Best fact-discipline in the cluster. |
| On-page SEO compliance | 9 | Meta/slug/H2 mix/keyword placement all pass after meta-title fix. |
| GEO extractability (§2a) | 9 | 40–60-word direct answer after every H2; one quotable point per paragraph; FAQ FAQPage-ready; freshness field added. |
| Soltius framing discipline | 10 | 1 mention, "membantu menerapkan" (not builds), no superlatives, correct anchor + soft CTA. |
| Internal linking | 8 | 3 correct destinations (hub + 2 correct cousins), natural inline, no BACA JUGA. Minor: 2 of 3 sit in the conclusion. |
| FAQ quality | 9 | 7 Q&As from PAA, each 40–70 words, each carries a fact. |
| Image-brief completeness | 9 | 3 entries, all fields present in Bahasa Indonesia, sourcing notes confirm no SAP screenshot needed. |

## What I fixed (changelog)
- **Reduced em-dash count from 23 → 1 in flowing prose** (style_guide §5 limit ≤2). Converted prose em-dashes to commas/colons/"yaitu"/"sehingga" across the lead, "Tiga Lompatan", NLQ, Smart Predict, "Dari Dashboard", "Batas", all three affected FAQ answers, and the conclusion. Retained one (line ~108, the *Sensors* speed comparison). Left the four table level-labels ("1 — Bahasa alami") and the three `{IMAGE_NN}` concept descriptions untouched (structural / design-brief text, not published prose).
- **Removed AI cliché "Penting dipahami bahwa..."** (§5) at the top of the third paragraph in "Apa Itu Augmented Analytics?" — restated directly as "Augmented analytics adalah evolusi BI, bukan penggantinya."
- **Fixed meta-title keyword position.** Was "Augmented Analytics: AI Ubah Business Intelligence" (50 chars, primary keyword at char 30 — borderline). Now "Business Intelligence Berbasis AI: Augmented Analytics" (53 chars, primary keyword at position 0). Keeps the augmented-analytics hook, satisfies "keyword in first 30."
- **Added a bullet list** ("Sebelum mengaktifkan fitur NLQ … tiga fondasi ini …") in the "Batas Augmented Analytics" section to satisfy the mandatory format mix (the draft had a table + FAQ but no list). It is decision-useful, GEO-extractable, and mirrors the IMAGE_03 pyramid — not padding.
- **Added `last_reviewed: "2026-06-08"`** to the meta block (GEO §2a freshness / `dateModified` requirement).
- **Updated `word_count` 1683 → 1759** to reflect the added list and edits.

## What I flagged (open issues)
- ⚠️ **Internal-link distribution (minor):** 2 of the 3 internal links (Data Warehouse Solutions, migrasi ERP ke cloud) sit together in the conclusion paragraph; the hub link is well-placed in the lead. *Recommendation:* acceptable as-is (the conclusion is where these topics naturally connect), but a future pass could move one cousin link mid-body (e.g., the Data Warehouse link into the "Batas / semantic layer" section where the data-foundation argument lives).
- ⚠️ **Word count is an editor estimate (~1,759):** Bash/word-count tooling was unavailable in this environment, so the count was computed manually (original writer count 1683 + ~73-word bullet block + net em-dash substitutions − cliché removal). It is comfortably inside 1,500–1,800; the validator's `quality-check.ps1` will produce the authoritative figure. *Recommendation:* let the validator's count stand as canonical.
- ⚠️ **Brief-ID numbering note for the curator (not a content issue):** the month already has the slug pattern, and history also contains `2026-06-business-intelligence-02`. Full IDs differ by month prefix (`2026-08-…`), so the history schema is fine; just noting so the curator doesn't treat it as a duplicate.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers
- [x] No "Selain itu" opening ≥2 consecutive paragraphs (grep: 0 occurrences)
- [x] No "Penting untuk dicatat / dipahami bahwa" — the one instance ("Penting dipahami bahwa") was removed
- [x] "Dengan demikian" not overused (grep: 0 occurrences)
- [x] Em-dash count ≤2 — now 1 in prose (was 23). Table level-labels and image-placeholder text excluded as non-prose.
- [x] Varied paragraph lengths (1-sentence to 6-sentence mix; lead is long, "Tujuannya satu:" lines are short)
- [x] Not every H2 → 3-bullet list (only one bullet list in the whole article; H2s lead with prose)
- [x] No generic claims without numbers (170.939 records, <1 min vs ~3 min, 50%/75%/90%, CAGR 9,35%, GA dates)
- [x] No stacked hype adjectives (no canggih/powerful/seamless/terdepan)
- [x] No service-dump paragraph (single Soltius anchor in the conclusion)

### B. Factual & SAP-spec spot-check
| Claim | Source check | Verdict |
|---|---|---|
| Augmented analytics term coined by Gartner in 2017 | dossier Claim 1 (Gartner Glossary) ✓ | pass |
| Just Ask = generative-AI NLQ, GA Q1 2024, replaces Search to Insight (deprecated Q4 2024) | dossier Claim 2/3 ✓ + re-verified via SAP Community "Initial Release of Just Ask" / 2024.02 | pass |
| Joule Analytical Insights GA Q2 2025; needs SAP Build Work Zone since Joule 2506 (2026) | dossier Claim 6/7 ✓ + re-verified via SAP help.sap.com / community.sap.com (Work Zone requirement confirmed; English-only client UI also confirmed) | pass |
| Joule Studio / Agent Builder GA January 2026; NOT a named "agentic analytics" BI feature | dossier Claim 8 ✓ + edge-case note; draft correctly clarifies | pass |
| Smart Predict = automated ML (classification/regression/time-series), no-code | dossier Claim 4 ✓ | pass |
| Gartner: 50%+ orgs already use AI for automated insights/NLQ; 75% analytics content via GenAI by 2027 | dossier Claim 9 (Gartner press release, 18 Jun 2025) ✓ | pass |

All claims verified. No invented SAP product names, no wrong dates, no "Soltius builds SAP" error. The unverified "80%" stat and unconfirmed Bahasa Indonesia support flagged in the dossier are correctly absent from the draft.

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: 53 chars / "Business Intelligence" at position 0 (FIXED)
- [x] Meta description 140–160 — actual: 154 chars
- [x] Slug ≤60, kebab-case, keyword — actual: `augmented-analytics-ai-business-intelligence` (44 chars)
- [x] H1 contains keyword — "...Cara Kerja Business Intelligence"
- [x] H2 count 4–5 — actual: 5 body H2s (+ FAQ + Kesimpulan)
- [x] ≥1 question-format H2 ("Bagaimana Cara Kerja...?"); ≥1 honest/counter-conventional H2 ("Yang Tidak Diceritakan Vendor: Batas...")
- [x] Keyword in first 100 words — "*Business Intelligence* (BI)" in the lead
- [x] Definition snippet near top (40–60 words) — the "Secara singkat" blockquote, ~58 words
- [x] ≥8 LSI terms — counted 11+ (augmented analytics, NLQ, Just Ask, Smart Predict, Smart Insights, Joule, machine learning, generative AI, semantic layer, SAP Analytics Cloud, AI agent/agentic)
- [x] 3 internal links (1 hub + 2 cousins) — destinations: BI hub (lead), Data Warehouse Solutions (conclusion), migrasi ERP ke cloud (conclusion). Matches product_matrix BI cousin map.
- [x] ≥1 external authoritative citation — actual: 2 (Gartner press release; PMC/Sensors peer-reviewed), both cited inline
- [x] FAQ 5–7 Q&As — actual: 7
- [x] 2 image placeholders (up to 3) — actual: 3, all kept in body
- [x] ≥1 list + ≥1 table — table (4-level capability matrix) + bullet list (added). No numbered list, but §2 allows "numbered and/or bulleted"; bullet + table + FAQ satisfies the practical format mix.
- [x] Word count 1,500–1,800 — actual: ~1,759 (editor estimate; validator to confirm)

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — verified for all 5 body H2s (each opens with a standalone definitional/answer sentence, e.g., "Augmented analytics adalah...", "AI masuk ke BI lewat tiga lompatan...", "*Natural language query* bekerja dengan...", "Pergeseran inti 2026 adalah...", "Batas terbesar augmented analytics sederhana:...")
- [x] Each body paragraph makes one independently quotable, verifiable point
- [x] FAQ parseable for FAQPage schema; `last_reviewed` / freshness now in the meta block

### D. Soltius framing discipline (product_matrix.md + style_guide §11)
- [x] Soltius framed as implementer/partner ("membantu perusahaan menerapkan augmented analytics SAP Analytics Cloud") — NOT "builds/makes SAP"
- [x] ≤3 Soltius self-mentions — actual: 1 (conclusion)
- [x] No unverifiable superlatives ("terbaik/nomor satu") — none
- [x] SAP/partner product names + specs match product_matrix.md / dossier (SAC, Just Ask, Smart Predict, Smart Insights, Joule, SAP Datasphere, SAP Build Work Zone — all correct)
- [x] Closing uses a company_profile.md positioning line (Data and AI Consulting anchor)
- [x] Soft website CTA present as the FINAL line, after the conclusion ("...kunjungi soltius.co.id.") — soft tone, not "beli sekarang"
- [x] Hub link present as a natural inline anchor in the lead (definition snippet), descriptive anchor text "Business Intelligence" — NOT a "BACA JUGA" callout

### E. Anti-cannibalization spot check
- Closest prior articles for this keyword: `2026-06-business-intelligence-04` (self-service vs traditional; lists "augmented analytics" as a subtopic) and `2026-06-business-intelligence-02` (SAC three pillars; augmented as one pillar)
- Subtopic overlap (Jaccard estimate): ~0.15 (shared entities limited to "augmented analytics" + "SAP Analytics Cloud")
- Verdict: distinct angle confirmed — this is a deep-dive on the AI/GenAI wave (NLQ mechanics, 4-level maturity, Joule Analytical Insights, semantic-layer limits) not covered by any prior; not a product review of SAC.

### F. Image-brief completeness (images.json)
- [x] JSON parses
- [x] One entry per `{IMAGE_NN}` placeholder in the body (3 placeholders / 3 entries: IMAGE_01, IMAGE_02, IMAGE_03)
- [x] Each entry has alt_id (≤125 chars) + caption_id + visual_direction + suggested_asset_type, all in Bahasa Indonesia
- [x] "Real SAP screenshot" requirement surfaced — each `sourcing_note` explicitly states no SAP screenshot/UI reproduction needed (original infographic/diagram); no real-screenshot requirement exists for this article
