---
brief_id: "sap-clean-core-01"
editor_run_date: "2026-06-08"
recommendation: "approve"
overall_score: 9
---

# Editor QC Report — Tata Kelola SAP Clean Core: Mengapa Core Kembali "Kotor" Setelah Go-Live dan Cara Mencegahnya

## Recommendation
**approve**

> **Reconciliation (2026-06-08, orchestrator):** The only blocker below was length vs the then-current 1,200–1,500 ceiling. The user relaxed the band to **1,500–1,800 words** for this dense SAP niche; at **~1,690 words this article is now within band**, satisfying the editor's own stated condition ("once the user lifts the band, this is a confident approve"). Recommendation upgraded **revise → approve**; all other dimensions were already approve-grade. Original analysis preserved below.

This is a genuinely strong, factually scrupulous pilot article — voice, SAP accuracy, GEO extractability, Soltius framing, internal/external linking, and the image brief are all at or above the shipping bar, and the draft honored every "do-NOT-assert" caution in the dossier (80% not merged with 40%; ATC 2511 version number avoided; ECC 2027/2030/2031–2033 dates not printed at all, so no "extended support" mislabel; only confirmed Cloud ALM KPIs cited). I fixed every issue I found in-place (an editorial-note leak in the body, an over-long FAQ, redundant paragraphs, a hype word, and ~290 words of flab/duplication). The **single blocking issue is length**: the draft was ~1,980 reader-facing words against the binding 1,200–1,500 spec, and after aggressive but careful editorial reduction it still lands at **~1,690 words — ~190 over the 1,500 ceiling**. Closing that remaining gap requires removing unique, brief-mandated content (the Indonesia/UU PDP local hook, the depth of the "kapan BELUM perlu" nuance, or condensing the four-pillar/four-step teaching), which is writer re-scoping rather than editorial polish — so per the editor guardrail ("if structural rework is needed, recommend revise"), the verdict is **revise**. Everything else is approve-grade; this is a length-only bounce. (See the process note at the end: the entire editor-approved 2026-06 cluster ran 1,650–2,250 words under this same band — the spec may be miscalibrated for this dense SAP niche, which is worth a user decision.)

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | No banned openers, no "Selain itu"/"Dengan demikian", varied paragraph length, prose-led H2s. Reads like a senior consultant. |
| Factual & SAP-spec accuracy | 9 | All 5 spot-checked claims verify vs dossier/product_matrix; all dossier cautions honored. |
| On-page SEO compliance | 8 | Meta/slug/H1/links/FAQ all pass; only the length spec fails. |
| GEO extractability (§2a) | 9 | 40–60-word answer after every major H2; one quotable point per paragraph; FAQ FAQPage-ready; dateModified added. |
| Soltius framing discipline | 9 | 2 mentions, implementer framing, no superlatives, positioning line + soft CTA + inline hub link all correct. |
| Internal linking | 9 | 3 links (hub as natural inline anchor in lead + 2 cousins), descriptive anchors, correct destinations per product_matrix. |
| FAQ quality | 8 | Now 5 Q&As (was 8), each 40–55 words, lead-with-answer, one fact each. Maps to PAA. |
| Image-brief completeness | 9 | images.json parses; 3 entries match 3 placeholders; all fields Bahasa Indonesia; sourcing notes flag "no SAP screenshot needed". |

## What I fixed (changelog)
- **Removed an editorial-note leak from published prose** — the ATC paragraph contained "...editor sebaiknya mengonfirmasi status rilisnya sebelum publikasi", an internal instruction that must never reach the reader. Rewrote to hedge the check-variant cleanly without the version number (honors dossier Flag 1).
- **FAQ trimmed 8 → 5 Q&As** (still within the 5–7 spec): removed "Apa itu tata kelola..." and "Mengapa core kotor..." (verbatim duplicates of the top definition snippet + H2#1/H2#2 answers) and the "Apa perbedaan Level A–D" entry (now a triplicate of H2#4 step 2 + IMAGE_03). Tightened the 5 remaining answers to ~40–55 words each.
- **Removed the redundant Level A–D comparison table** — A–D is now delivered three other ways (H2#4 step 2 inline, the FAQ, and the dedicated IMAGE_03 infographic); folded the four level definitions into step 2 so no information was lost, keeping the mandatory ≥1 table (the governance-mechanism table, this article's unique deliverable).
- **Merged 2 redundant paragraphs in H2#2** ("Pola drift ini terdokumentasi" restated the prior paragraph) and trimmed trailing summary sentences across H2#1/#3/#4/#5.
- **Replaced a hype adjective** — "alat secanggih apa pun" → "alat sebaik apa pun" (avoids §5 "canggih" family).
- **Reduced body-prose em-dashes** — converted the closing paragraph's em-dash to a colon; readable-prose em-dashes now = 1 (the H2#5 heading). (Em-dashes inside `{IMAGE_NN}` briefs do not reach the reader.)
- **Corrected a meta_description claim** — it advertised "tabel level A-D" which I removed; changed to "level A-D" so the meta matches the body.
- **Fixed a UU PDP phrasing** for accuracy per the dossier caution: "Clean core tidak secara khusus disyaratkan UU PDP" → "UU PDP tidak secara khusus mensyaratkan clean core".
- **Added `dateModified: "2026-06-08"`** to the meta block (GEO §2a freshness) and **updated `word_count` 1432 → 1690** (the writer's 1,432 was inaccurate; see method below).
- Net effect: ~290 words removed (~1,980 → ~1,690); all 3 `{IMAGE_NN}` placeholders, all 3 internal links, both external citations, both Soltius mentions, the positioning line, and the soft CTA preserved.

## What I flagged (open issues)
- ⚠️ **Length still over spec (BLOCKER).** Final ~1,690 words vs 1,200–1,500 ceiling (~190 over). *Recommendation*: writer cuts ~200 words of unique content — fastest clean options: (a) drop the UU PDP/Indonesia paragraph (~60 words; it is a "nice-to-have" local hook, not core to the governance argument), (b) condense H2#5 from 4 paragraphs to 3 by merging the "Governance adalah alat untuk mengelola risiko" reinforcement into the opener (~25 words), (c) tighten H2#3 pillar prose by one sentence each now that the mechanism table reinforces them (~40 words), and (d) trim the four numbered steps' second sentences (~40 words). That lands ~1,460–1,490. Alternatively, the user confirms a higher band for this niche (see process note).
- ⚠️ **`{IMAGE_NN}` em-dashes remain in the design briefs.** Left intentionally — those are internal direction for the design team and are replaced by rendered images at publication, so they never appear in reader-facing prose. No action needed unless the docx caption fallback is used, in which case the design team's final art replaces them.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — grep clean
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — grep clean (0 occurrences in body)
- [x] No "Penting untuk dicatat / dipahami bahwa" — grep clean
- [x] "Dengan demikian" not overused — 0 occurrences
- [x] Em-dash count ≤2 — readable-prose em-dashes = 1 (H2#5 heading); 1 table-cell label; rest are inside IMAGE briefs (non-reader-facing)
- [x] Varied paragraph lengths — 1–6 sentence mix; lead long, several 2-sentence and 1-sentence beats
- [x] Not every H2 → 3-bullet list — H2s lead with prose; one numbered list, one table, rest prose
- [x] No generic claims without numbers — concrete figures throughout (18 bulan, Prioritas 1 & 2, Agustus 2025, 80%, 17 Okt 2024, 2%)
- [x] No stacked hype adjectives — fixed "secanggih"; none remaining
- [x] No service-dump paragraph — single AMS anchor in closing + one mid-article aside

### B. Factual & SAP-spec spot-check
| Claim | Source check | Verdict |
|---|---|---|
| Clean core = 5 dimensi (Processes, Extensibility, Data, Integrations, Operations) | dossier ✓ (sap.com clean-core page) | pass |
| Extensibility Levels A–D formalized Aug 2025; A = upgrade-safe via released API/ABAP Cloud/BTP; D = modifications to eliminate | dossier ✓ + product_matrix §6 ✓ (SAP News 2025-08-12) | pass |
| Central ATC on SAP BTP ABAP environment = SAP's recommended governance approach; blocking mode for Priority 1 & 2 | dossier ✓ (SAP Community ATC guide) | pass |
| SAP Cloud ALM RISE Methodology Dashboard: System/Operations View, Technical Debt Score, Clean Core Share, Customer Objects drill-down | dossier ✓ (KPIs confirmed GA early 2026; draft cites only confirmed KPIs, honoring Flag 2) | pass |
| "SAP melaporkan ... 80% lebih sedikit kustomisasi" (attributed, not merged with the 40% Sapphire figure) | dossier ✓ (Flag 3 honored — only 80%, framed "SAP melaporkan") | pass |

*Do-NOT-assert list audit:* 80% vs 40% NOT merged ✓ | ATC 2511 version number avoided (now "varian check khusus clean core", no number) ✓ | ECC 2027/2030/2031–2033 dates NOT printed → no "extended support" mislabel possible ✓ | only confirmed Cloud ALM KPIs cited (no Data Volume Efficiency claim) ✓. No WebSearch needed — every spot-checked fact is dossier-grounded with high-confidence SAP-official sources.

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — "SAP Clean Core: Menjaga Core Tetap Bersih Pasca Go-Live" = 55 chars; keyword at pos 0
- [x] Meta description 140–160 — ~150 chars (after my edit); keyword present
- [x] Slug ≤60, kebab-case, keyword — `tata-kelola-sap-clean-core-pasca-go-live` (40 chars; contains keyword)
- [x] H1 contains keyword — "Tata Kelola **SAP Clean Core**: ..."
- [x] H2 count 4–5 — 5 content H2s + FAQ H2
- [x] ≥1 question-format H2 (3: "Apa itu...", "Mengapa...", "Bagaimana cara...") ; ≥1 honest/counter-conventional H2 ("Kapan ... BELUM perlu — dan kapan justru wajib")
- [x] Keyword in first 100 words — bolded in lead sentence ~70 words in
- [x] Definition snippet near top (40–60 words) — blockquote "Ringkas:" = ~58 words
- [x] ≥8 LSI terms — counted 12+: tata kelola clean core, technical debt, ATC, exemption log, SAP Cloud ALM, RISE Methodology Dashboard, Technical Debt Score, Clean Core Share, extensibility level A-D, transport governance, CoE, released API, ABAP Cloud, MDG, upgrade-safe
- [x] 3 internal links (1 hub + 2 cousins) — hub (natural inline anchor in lead, "SAP Clean Core"), migrasi-erp-ke-cloud, low-code-and-no-code-platforms ✓ per product_matrix cousin map
- [x] ≥1 external authoritative citation — 2 SAP-official: sap.com clean-core + SAP Community ATC guide
- [x] FAQ 5–7 Q&As — 5 (trimmed from 8; all net-new value)
- [x] 2 image placeholders (up to 3) — 3 (IMAGE_01/02/03), all kept in body
- [x] ≥1 list + ≥1 table — numbered list (4 steps) + governance-mechanism table
- [x] **Word count 1,500–1,800 — actual ~1,690 — PASS** (band relaxed from 1,200–1,500 on 2026-06-08)

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — H2#1 (line 37, ~45w), H2#2 (line 47, ~52w), H2#3 (line 59, ~49w), H2#4 (line 82, ~49w), H2#5 (line 97, ~56w). All present, all ~40–60.
- [x] Each body paragraph makes one independently quotable, verifiable point — yes; claims carry inline attribution (SAP, 2026 / IgniteSAP, Maret 2026) where sourced
- [x] FAQ parseable for FAQPage schema; dateModified / freshness in meta block — FAQ uses clean H3-question + answer pattern; `dateModified: 2026-06-08` added

### D. Soltius framing discipline (product_matrix.md + style_guide §11)
- [x] Soltius framed as implementer/partner ("mendampingi", "mengoperasikan", "memantau", "menjalankan") — never "builds/makes SAP"
- [x] ≤3 Soltius self-mentions — 2 ("Soltius" at the mid-article AMS aside + the closing)
- [x] No unverifiable superlatives — none; uses "SAP Platinum Partner via United VARs / Certified AMS Partner / PCoE" (all from company_profile, allowed)
- [x] SAP/partner product names + specs match product_matrix.md / dossier — verified
- [x] Closing uses a company_profile.md positioning line — "Sebagai SAP Platinum Partner melalui United VARs sekaligus Certified AMS Partner dan PCoE di Indonesia..."
- [x] Soft website CTA present as the FINAL line, after the conclusion — "Untuk mendiskusikan kesiapan tata kelola clean core ... kunjungi soltius.co.id ..." (consultative, not "beli sekarang")
- [x] Hub link as natural inline anchor — "SAP Clean Core" linked in the lead/opening to the English hub (revised 2026-06-08 per user: BACA JUGA callout replaced with natural inline link)

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: `sap-clean-core-maturity-assessment` (2026-06, -03)
- Subtopic overlap (Jaccard estimate): **~0.09** vs -03; ~0.08 vs -02; ≤0.05 vs -01/-04/-05
- Verdict: **distinct angle confirmed.** All five 2026-06 siblings treat clean core as a migration-time event (definition, Z-code remediation, maturity scoring, side-by-side extensibility, brownfield/greenfield). This is the only one on the *post-go-live operating model* (anti-drift governance: ATC blocking + exemption-log KPI, SAP Cloud ALM compliance cadence, transport governance, CoE ownership, quarterly health review). Those mechanisms appear in none of the siblings. Well under the 0.4 threshold.

### F. Image-brief completeness (images.json)
- [x] JSON parses
- [x] One entry per `{IMAGE_NN}` placeholder — 3 entries (IMAGE_01/02/03) ↔ 3 placeholders in body
- [x] Each entry has alt_id (≤125 chars) + caption_id + visual_direction + suggested_asset_type — all present (plus in_image_text_id, sourcing_note, asset_type_rationale), all Bahasa Indonesia
- [x] Any "real SAP screenshot" requirement surfaced — sourcing_note on each explicitly states no SAP screenshot is needed (original diagrams/infographic) and warns the designer not to fabricate SAP UI; product names to be written exactly. Good discipline.
- (No generated PNGs to check — by design.)

---

## Word count — method & result
Manual block-by-block tally of reader-facing prose (PowerShell/Bash word-count tooling was unavailable this session; Grep used for pattern checks). Counted: H1 + all body paragraphs + H2/H3 headings + table cells + FAQ + closing + CTA. **Excluded**: YAML frontmatter and the three `{IMAGE_NN: ...}` design-brief blocks (these are replaced by rendered images at publication and never appear as reader prose; the writer's original `word_count: 1432` appears to have miscounted, likely omitting tables/FAQ or partially counting).
- Pre-edit reader-facing: **~1,980 words**
- Post-edit reader-facing: **~1,690 words** (~290 cut)
- Spec band: 1,200–1,500 → **still ~190 over the ceiling** → the blocker behind the `revise`.

## Process note for the user (not a per-article defect)
Every one of the 30 editor-approved articles in `2026-06` ran **1,650–2,250 words** (clean-core siblings: 1,872–2,190) under the same locked 1,200–1,500 spec. This pilot draft at ~1,980 is consistent with that established house pattern, not an outlier. Either (a) the writer prompt should be tightened to genuinely target ~1,350 for this dense SAP niche, or (b) the band should be re-set higher (e.g., 1,500–2,000) to match what these decision-stage SAP articles actually need for depth + GEO coverage. This is a one-decision item worth resolving before the full 2026-07 run, because it determines whether ~30 articles get bounced on length. I enforced the current spec as written (hence `revise`); I did not ratify the prior cluster's overage by repeating it.

## The shipping question
"If this appeared on soltius.co.id tomorrow and a senior SAP consultant (and a skeptical CIO) read it, would WEBARQ Promote be proud of it?" — On **content quality: yes**, unreservedly (accurate, original post-go-live angle, honest "kapan BELUM perlu", clean extractable structure). On **spec compliance: not yet** — it breaches the agreed length band by ~190 words, and tightening that last stretch is a content-scope decision for the writer. Honest call: **revise** (length only). Once the writer trims ~200 words (or the user lifts the band), this is a confident approve.
