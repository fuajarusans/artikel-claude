---
brief_id: "data-warehouse-solutions-04"
editor_run_date: "2026-06-08"
recommendation: "approve"
overall_score: 9
---

# Editor QC Report — Data Warehouse per Industri: Use Case Nyata di Manufaktur, Distribusi, dan Lainnya

## Recommendation
**approve**

This is a strong, genuinely useful article that hits the brief's distinct angle (per-industry use cases with concrete KPIs) — a real whitespace in the Indonesian SERP. The voice is a senior consultant leveling with a smart executive: the lead opens on a concrete pain (OEE lini 3 turun, rekap Excel basi), paragraph rhythm varies deliberately, and the honest "Apakah Setiap Industri Benar-Benar Butuh Data Warehouse Penuh?" section builds trust where competitors oversell. All factual claims I spot-checked trace cleanly to the dossier, and the writer correctly honored every do-NOT-assert flag — the unverified "30%" and the low-confidence ResearchGate retail percentages (27/21/35) do not appear; the ResearchGate study is used only as an attributed illustration; no named client outcomes were invented. The only blocking-level pre-edit defect was an em-dash overload (10 occurrences, vs §5 limit of ≤2), which I fixed in place across the definition snippet, two SAP paragraphs, the FAQ, the agribisnis paragraph, the meta description, and the H2 #4 heading; body prose, meta, and headings are now em-dash-free. Remaining open items are minor and non-blocking: three image alt_id values exceed the 125-char guideline (image-planner's deliverable, surfaced below), and the article has no numbered list (a §3 format item that would be artificial to force here). Shippable.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Concrete pain hook, varied rhythm, honest hedging; em-dash overload fixed in place |
| Factual & SAP-spec accuracy | 10 | All 5 spot-checks pass vs dossier; every do-NOT-assert flag honored |
| On-page SEO compliance | 9 | Meta/slug/links/FAQ/tables all pass; no numbered list (minor) |
| GEO extractability (§2a) | 9 | 40–60-word answer after each of 5 H2s; one quotable point per paragraph; date_modified added |
| Soltius framing discipline | 10 | 1 explicit mention + website CTA; implementer framing; no superlatives |
| Internal linking | 10 | 3 natural inline links (hub + 2 correct cousins); no BACA JUGA |
| FAQ quality | 9 | 6 self-contained Q&As, 40–80 words each, each carries a number |
| Image-brief completeness | 7 | Valid JSON, 1:1 placeholder match, complete fields; 3 alt_id over 125 chars |

## What I fixed (changelog)
- **Em-dash reduction (10 → 0 in prose/meta/headings).** Converted em-dash constructions to parentheticals/colons/commas in: the "Secara singkat" definition snippet; the SAP S/4HANA *embedded analytics* paragraph ("— aplikasi" → ", yaitu aplikasi"); the SAP Datasphere paragraph (appositive dashes → parentheses); FAQ #1 (industry list moved after a colon); the agribisnis paragraph ("— memetakan" → ", yakni memetakan"); and the meta description (two dashes → colon + comma). Remaining em-dashes exist only inside the three `{IMAGE_NN}` design-brief placeholders, which must stay verbatim.
- **H2 #4 rewritten** from "Bagaimana Industri Lain — Agribisnis, Jasa Keuangan, Logistik — Memetik Manfaatnya?" to "Bagaimana Agribisnis, Jasa Keuangan, dan Logistik Memetik Manfaatnya?" — removes the two heading em-dashes while keeping the question format and the entities.
- **Meta description tightened** to 154 chars (from 152 with em-dashes); keyword "data warehouse" stays in the first ~30 chars, value props preserved (OEE / perputaran stok / traceability + KPI).
- **Added `date_modified: "2026-06-08"`** to the frontmatter to satisfy the GEO §2a freshness requirement.
- **Updated `word_count` 1683 → 1684** to reflect the net change from the edits.

## What I flagged (open issues)
- ⚠️ **Image alt_id length** — all three `alt_id` values in `data-warehouse-solutions-04.images.json` exceed the ≤125-char guideline (IMAGE_01 ≈172, IMAGE_02 ≈149, IMAGE_03 ≈174). *Recommendation*: image-planner trims each to ≤125 chars (e.g., IMAGE_01 → "Diagram arsitektur data warehouse tiga lapisan: sumber data di bawah, warehouse sebagai single source of truth di tengah, konsumen BI di atas"). Non-blocking; the descriptions are accurate, keyword-relevant, and in Bahasa Indonesia.
- ⚠️ **No numbered list** — the article has a bullet list + two comparison tables but no numbered list (seo_playbook §3 format-diversity lists all three). *Recommendation*: leave as-is. The content is a use-case map, not a sequence of steps/phases; forcing a numbered list would be artificial and the style_guide explicitly says "use both where natural; don't force." Scrollability and format diversity are otherwise strong.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers (grep: none)
- [x] No "Selain itu" opening ≥2 consecutive paragraphs (grep: none)
- [x] No "Penting untuk dicatat / dipahami bahwa" (grep: none)
- [x] "Dengan demikian" not overused (grep: none)
- [x] Em-dash count ≤2 — **fixed**: 0 in body prose/meta/headings; remaining occurrences only inside the 3 mandatory `{IMAGE_NN}` placeholders
- [x] Varied paragraph lengths (1-sentence "Tidak selalu." opener through 6-sentence blocks; not symmetric)
- [x] Not every H2 → 3-bullet list (mix of prose, bullets, and two tables)
- [x] No generic claims without numbers (OEE 85/55–60/~6%, inventory turnover ranges, Gartner 61%, BW/4HANA 2040)
- [x] No stacked hype adjectives (grep for canggih/powerful/seamless/terdepan/terbaik: none)
- [x] No service-dump paragraph (one Soltius anchor in the conclusion only)

### B. Factual & SAP-spec spot-check
| Claim | Source check | Verdict |
|---|---|---|
| OEE world-class 85% (Nakajima/TPM 1984; Avail ≥90%, Perf ≥95%, Qual ≥99,9%); global avg 55–60%; ~6% achievers; Evocon 3.500+ mesin, 50+ negara | dossier Claim 6 & 7 (Evocon) ✓ | pass |
| SAP Datasphere = nama resmi sejak 8 Maret 2023, menggantikan SAP Data Warehouse Cloud | dossier Claim 1 ✓ | pass |
| SAP BW/4HANA dipertahankan hingga 2040 (tetap relevan, on-prem/hibrida) — NOT retired | dossier Claim 4 ✓ | pass |
| Gartner April 2024: 61% organisasi mengevaluasi ulang model operasional D&A karena AI | dossier Claim 15 ✓ | pass |
| Inventory turnover: grocery 12–25x, elektronik 5–10x, furnitur 3–5x; 11+ = high performance (Onramp Funds 2025) | dossier Claim 9 ✓ (framed as range) | pass |
| SAP Leader Gartner MQ Data Integration Tools, ke-17 kalinya 2024 | dossier Claim 3 ✓ | pass |
| Kementan traceability nasional (sawit, karet, kakao, kopi; pasar ekspor bebas deforestasi) | dossier Claim 14 ✓ (EUDR name correctly avoided) | pass |
| Datasphere "ruang kerja virtual" (Spaces) per divisi dalam satu instance | dossier FAQ / Claim ✓ | pass |

*Do-NOT-assert verification (grep):* "30%/27%/21%/35%" → none (Flags 2 & 3 honored). Named clients (Great Giant/HPI Agro/Honda Power/etc.) → none, generic "pengalaman implementasi di sektor perkebunan" used instead (Flag 5 honored). "Soltius builds/makes SAP" → none.

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: **43 chars**; "Data Warehouse" at pos 1–14
- [x] Meta description 140–160 — actual: **154 chars** (was 152 with em-dashes)
- [x] Slug ≤60, kebab-case, keyword — actual: **`data-warehouse-per-industri-use-case`** (36 chars)
- [x] H1 contains keyword — "Data Warehouse per Industri…" ✓
- [x] H2 count 4–5 — actual: **5** (4 body H2 + FAQ + Kesimpulan; 5 substantive body H2s)
- [x] ≥1 question-format H2 (#1 and #4); ≥1 honest/counter-conventional H2 (#5 "Apakah Setiap Industri Benar-Benar Butuh…")
- [x] Keyword in first 100 words — "data warehouse" (linked) in the lead
- [x] Definition snippet near top (40–60 words) — "Secara singkat" blockquote ≈52 words
- [x] ≥8 LSI terms — counted: **14 distinct** present (36 total occurrences): single source of truth, data silo, inventory turnover, SAP Datasphere, SAP BW/4HANA, embedded analytics, OEE, fill rate, data mart, traceability, KPI, S/4HANA, semantic/federasi data, etc.
- [x] 3 internal links (1 hub + 2 cousins) — destinations: data-warehouse-solutions (hub, lead), migrasi-erp-ke-cloud (cousin, manufaktur §), business-intelligence (cousin, distribusi §) — matches product_matrix cross-link map
- [x] ≥1 external authoritative citation — actual: **2 in frontmatter** (Evocon, Gartner) + inline Onramp Funds, ResearchGate, Kementan
- [x] FAQ 5–7 Q&As — actual: **6**
- [x] 2 image placeholders (up to 3) — actual: **3** (`{IMAGE_01/02/03}`)
- [x] ≥1 list + ≥1 table — actual: 1 bullet list + **2 tables**
- [ ] ≥1 numbered list — **none** (flagged; not natural for a use-case map; not forced)
- [x] Word count 1,500–1,800 — actual: **1684**

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — verified for all 5: #1 (~55w), #2 (~58w), #3 (~57w), #4 (~55w), #5 (~52w "Tidak selalu…")
- [x] Each body paragraph makes one independently quotable, verifiable point (OEE gap, inventory turnover ranges, Datasphere definition, BW/4HANA 2040, data mart vs warehouse continuum)
- [x] FAQ parseable for FAQPage schema; `date_modified` added to the meta block (2026-06-08)

### D. Soltius framing discipline (product_matrix.md + style_guide §11)
- [x] Soltius framed as implementer/partner — "merancang arsitektur data warehouse" (not "builds SAP")
- [x] ≤3 Soltius self-mentions — actual: **1 explicit** ("Soltius" in conclusion) + the soltius.co.id website-CTA line
- [x] No unverifiable superlatives (grep for terbaik/nomor satu: none)
- [x] SAP/partner product names + specs match product_matrix / dossier (Datasphere, BW/4HANA, S/4HANA embedded analytics, SAC implied)
- [x] Closing uses a company_profile positioning line — "Melalui layanan Data and AI Consulting … pengalaman di industri manufaktur, distribusi, perkebunan"
- [x] Soft website CTA as the FINAL line, after the conclusion — "…kunjungi soltius.co.id dan mulai dari sebuah percakapan" (consultative, not "beli sekarang")
- [x] Hub link present as a natural inline anchor in the lead ("[data warehouse]"), descriptive anchor text — NOT a BACA JUGA callout

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: **2026-06-data-warehouse-solutions-01** (definisi/manfaat enterprise — general benefits)
- Subtopic overlap (Jaccard estimate): **~0.18** (shared: single source of truth, SAP Datasphere; entire per-industry structure + KPIs is new)
- Other cluster siblings checked: DWS-02 (architecture comparison), DWS-03 (5-phase roadmap), DWS-04 (Datasphere vs BW/4HANA), DWS-05 (governance/UU PDP) — all distinct angles
- Verdict: **distinct angle confirmed** (well under the 0.4 threshold)

### F. Image-brief completeness (images.json)
- [x] JSON parses (valid)
- [x] One entry per `{IMAGE_NN}` placeholder in the body — 3 entries (IMAGE_01/02/03) match 3 body placeholders exactly
- [~] Each entry has alt_id + caption_id + visual_direction + suggested_asset_type (all Bahasa Indonesia) — all fields present and in Bahasa Indonesia, **but all 3 alt_id exceed the ≤125-char guideline** (≈172 / ≈149 / ≈174 chars) → flagged for image-planner to trim
- [x] Any "real SAP screenshot" requirement surfaced — none required; all three are diagram/chart/infographic with explicit "BUKAN screenshot SAP" sourcing notes (correct)
- (No generated PNGs to check — images are produced by the client's design team from this brief.)
