---
brief_id: "safety-stock-c01"
editor_run_date: "2026-07-06"
recommendation: "approve"
overall_score: 9
batch_overrides: "conditional-2026-07 (style_addendum.md): word band 800–1000; FAQ 2–3; internal links 2; ZERO image placeholders (image validation N/A); Soltius mentions max 2; definition ONCE (snippet only)"
---

# Editor QC Report — Safety Stock: Pengertian, Rumus, dan Cara Menentukannya

## Recommendation
**approve**

The draft was intact after the earlier transient API 529 failure and required no substantive rework. It is dense, decision-oriented, and factually clean: every number in the two formulas and the worked example verifies against the dossier and independent arithmetic, the definition appears exactly once (in the snippet), Soltius framing is correct (implementer, 2 mentions), and all batch-2026-07 overrides are met. The only editorial change made was adding the GEO-required `date_modified` freshness field to the meta block. Recommendation: **approve**.

## Batch overrides applied (batch conditional-2026-07)
- Word band checked = **800–1000** (not 1,500–1,800). Actual body = **956** (script method) ✓
- FAQ checked = **2–3** (not 5–8). Actual = **3** ✓
- Internal links checked = **2** (1 hub + 1 cousin, not 3). Actual = **2** ✓
- Image placeholders = **NONE by design**; image-brief validation recorded **N/A** (not flagged). Zero `{IMAGE_NN}` found ✓
- Soltius self-mentions = **max 2** (1 positioning line + 1 soft CTA). Actual = **2** ✓
- Definition = **ONCE only** (snippet). No H2/paragraph restates it ✓

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | No AI-tell openers, no "Selain itu"/"Dengan demikian" chains, 1 em-dash, varied paragraph/sentence rhythm (1–4 sentences). |
| Factual & SAP-spec accuracy | 10 | All formula math re-derived and correct; Z-scores, ratio, carrying-cost all dossier-sourced; SAP IBP scoped to Claim 11. |
| On-page SEO compliance | 9 | Meta title 55, description 149, slug 45; keyword in H1/first 100 words/last line; 2 internal + 2 external links. |
| GEO extractability (§2a) | 9 | 40–60-word direct answer after each H2, each a NEW point; one quotable claim per paragraph; `date_modified` added. |
| Soltius framing discipline | 10 | "mengimplementasikan dan mendampingi" (never builds); 2 mentions; no superlatives; positioning line in Kesimpulan. |
| Internal linking | 10 | Hub `apa-itu-supply-chain-management` inline in lead; cousin `konsep-warehouse-management-system` in H2 #3; natural anchors, no "BACA JUGA". |
| FAQ quality | 9 | 3 PAA-derived Q&As, each 30–60 words with a specific number (63 unit; Z 1,65/2,33; 15–25%). |
| Image-brief completeness | N/A | Batch design = no placeholders, no images.json. Skipped per addendum §7 (not an issue). |

## What I fixed (changelog)
- Added `date_modified: "2026-07-06"` to the meta block — the one GEO §2a freshness/`dateModified` item missing from the draft.
- No other edits required. Anti-AI scan, formula math, number fact-check, framing, meta lengths, link counts, and definition-once rule all passed as-drafted; over-editing a clean, in-band draft was deliberately avoided (addendum §1: trim/fix, don't compress a compliant draft).

## What I flagged (open issues)
- None blocking. Note (non-blocking): frontmatter `word_count: 956` reflects the quality-check script's token method (counts table pipes/formula symbols/link URLs); the pure-prose count is ~900. Both are inside the 800–1000 band, so left as-is to match the validator's script output.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan / Tidak dapat dipungkiri" openers
- [x] No "Selain itu" opening ≥2 consecutive paragraphs (zero occurrences)
- [x] No "Penting untuk dicatat / dipahami bahwa"
- [x] "Dengan demikian" not overused (zero occurrences)
- [x] Em-dash count = 1 (≤2)
- [x] Varied paragraph lengths (1–4 sentences; snippet, single-sentence normalcy line, list, worked steps)
- [x] Not every H2 → 3-bullet list (H2 #1 = table, #2 = numbered calc, #3 = bulleted factors)
- [x] No generic claims without numbers
- [x] No stacked hype adjectives (canggih/powerful/seamless/terdepan)
- [x] No service-dump paragraph

### B. Factual & SAP-spec spot-check
| Claim | Source check | Verdict |
|---|---|---|
| Rumus sederhana (70×14) − (50×10) = 480 unit | Dossier Claim 10 + arithmetic re-derived (980−500=480) | pass |
| Rumus statistik 1,65 × 12 × √10 ≈ 63 unit | Dossier Claim 10 + arithmetic (62.61→63); √10≈3,16 | pass |
| Z-score 95%→1,65; 99%→2,33 | Dossier Claim 4 (King table, MIT PDF) | pass |
| Service level 100% mustahil; buffer naik "tidak proporsional" (NOT "eksponensial") | Dossier Claim 5 + Flag 1 avoided | pass |
| Carrying cost 15–25%/tahun with "Praktisi APICS/ASCM" attribution | Dossier Bonus (medium) + Flag 3 handled correctly | pass |
| SAP IBP for Inventory recommends safety stock across products/locations | Dossier Claim 11 (SAP Learning); no invented features | pass |
| Soltius "mengimplementasikan dan mendampingi" SAP IBP | product_matrix blacklist ("implements not builds") | pass |

### C. On-page SEO checklist (seo_playbook §3, batch-adjusted)
- [x] Meta title ≤60 (keyword first 30) — 55 chars, "safety stock" at pos 0
- [x] Meta description 140–160 — 149 chars
- [x] Slug ≤60, kebab-case, keyword — `safety-stock-pengertian-rumus-cara-menentukan` (45)
- [x] H1 contains keyword
- [x] H2 count = 4 (3 body + FAQ + Kesimpulan headings); ≥1 question-format (H2 #1) — within batch 3–4 body H2 rule
- [x] Keyword in first 100 words
- [x] Definition snippet 40–60 words (45) — the ONLY definition
- [x] ≥8 LSI terms present (stok pengaman, service level, Z-score, standar deviasi, lead time, reorder point, stockout, holding/biaya penyimpanan, cycle stock, SAP IBP)
- [x] Internal links = 2 (1 hub + 1 cousin) — **batch override**
- [x] External authoritative citations = 2 (King/MIT + SAP Learning)
- [x] FAQ = 3 Q&As — **batch override (2–3)**
- [ ] Image placeholders — **N/A by design**
- [x] ≥1 list + ≥1 table (bulleted factors + numbered calc + comparison table)
- [x] Word count 800–1000 — **956 (batch band)**

### C2. GEO extractability (seo_playbook §2a)
- [x] Direct 40–60-word answer after each major H2 (51 / 45 / 43 words) — each a NEW point, not the snippet
- [x] Each body paragraph makes one independently quotable, verifiable point
- [x] FAQ parseable for FAQPage schema; `date_modified` present in meta block

### D. Soltius framing discipline (product_matrix + style_guide §11)
- [x] Framed as implementer/partner, NOT "builds SAP"
- [x] ≤2 self-mentions — actual: 2 (1 positioning line + 1 CTA) — **batch override**
- [x] No unverifiable superlatives
- [x] SAP product names/specs match dossier (SAP Integrated Business Planning (SAP IBP) → SAP IBP for Inventory)
- [x] Closing uses a company positioning line (SAP Platinum Partner via United VARs)
- [x] Soft website CTA is the FINAL line (visit soltius.co.id), consultative tone
- [x] Hub link is a natural inline anchor in the lead — no "BACA JUGA"

### E. Anti-cannibalization spot check
- Closest prior article: `lead-time-c01` (2026-06).
- Subtopic overlap (Jaccard est.): ~0.21 (< 0.4) — confirmed distinct. Lead time appears only as a formula variable; ROP is a ≤1-sentence body reference plus one PAA FAQ (no ROP formula expansion). MRP/EOQ/ABC/other IBP modules correctly excluded.
- Verdict: distinct angle confirmed.

### F. Image-brief completeness (images.json)
- **N/A** — batch conditional-2026-07 produces no placeholders and no images.json by design (addendum §3, §7). Not flagged as an issue.
