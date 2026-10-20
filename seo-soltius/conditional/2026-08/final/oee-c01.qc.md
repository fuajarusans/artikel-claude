---
brief_id: "oee-c01"
editor_run_date: "2026-07-17"
recommendation: "approve"
overall_score: 9
batch: "conditional-2026-08 (style_addendum.md overrides applied — band 800–1000, FAQ 2–3, 2 internal links, no image placeholders, ≤2 Soltius mentions, definition-once)"
---

# Editor QC Report — Apa Itu OEE (Overall Equipment Effectiveness) dan Cara Menghitungnya

## Recommendation
**approve**

The draft arrived compliant on every hard constraint and needed no factual corrections, no framing fixes, and no structural rework — only light removal of transitional flab to open a safe margin under the 1000-word ceiling. Every batch-2026-08 override is satisfied: body **985 words** on a markdown-aware counter calibrated against the approved pilot (reproduces `saas-paas-iaas-c01` at exactly 853 and `reorder-point-c01` at 953 vs its declared 954), zero image placeholders, FAQ 3, exactly 2 internal links (hub + cousin), 2 external SAP/ISO citations, 2 Soltius mentions, the definition stated once (snippet only), and 4 lean content H2s (2 question-format, 2 with a table/list). All illustrative arithmetic reconciles independently, every dossier Flag (1–6) is handled correctly, and the anti-cannibalization boundary vs `digital-manufacturing-04` / `-01` holds. Two corpus tech-debt items are logged for the curator (not fixed here, by design).

## Batch-2026-08 overrides applied (checklist)
| Override | Required | Actual | OK |
|---|---|---|---|
| Body word band | 800–1000 (target ~900) | 985 (calibrated markdown-aware) | ✅ |
| Image placeholders | 0 (forbidden; image validation N/A) | 0 | ✅ |
| FAQ | 2–3 Q&A, 30–60 words each | 3 (42 / 40 / 45) | ✅ |
| Internal links | exactly 2 (1 hub + 1 cousin) | 2 (digital-manufaktur hub + business-intelligence cousin) | ✅ |
| External citations | 1–2 inline authoritative | 2 (SAP Learning + ISO 22400-2) | ✅ |
| Lead | ≤80 words, no roadmap para | 56 words | ✅ |
| Kesimpulan | ≤80 words + 1 positioning line | 54 words | ✅ |
| Soft CTA soltius.co.id | last line, separate | last line | ✅ |
| Soltius mentions | ≤2 total | 2 (positioning + CTA) | ✅ |
| Definition | once, in snippet only | snippet only (no repeat in body/H2) | ✅ |
| H2 count | 3–4 (≥1 question, ≥1 practical) | 4 (#1 & #3 question; #1 table / #2 list) | ✅ |
| Inline specific numbers | ≥4 | 18+ distinct | ✅ |
| Direct answer after each H2 | 40–60 words, new point | 49 / 47 / 48 / 41 | ✅ |
| Em-dash | ≤2 | 0 | ✅ |

## Word-count note (the batch's recurring risk — resolved)
The writer declared 988; my markdown-aware counter (which strips table pipes, heading/list/quote markers, and link URLs while keeping anchor text) reads the **unedited draft at 999** — i.e. the true reader-visible count sat one word under the ceiling. The 988 vs 999 gap is tokenization of this article's unusually formula-dense body (`480 − 30 = 450`, `68,4%`, `A × P × Q`); the writer's convention drops a few math tokens mine retains. My counter is the calibrated authority here: it reproduces the approved pilot `saas-paas-iaas-c01` at **exactly 853** and `reorder-point-c01` at **953** (declared 954). Shipping at 999 leaves no margin against a ±1 counting uncertainty, so I removed ~14 words of pure transitional flab (see changelog) to land at **985** — squarely inside the batch band and in line with the approved batch finals `pkwt-pkwtt-c01` (986), `sap-hyperscaler-c01` (976), and `sku-c01` (973). No mandated element was cut: the worked calculation, the three-formula table, all four floor-length direct answers, the 3-item FAQ, and the definition snippet are untouched. The pipeline heuristic `tools/quality-check.ps1` will report ~1036 (naive whitespace split, inflated by table pipes and `=`/`÷`/`×` symbols) — a known batch artifact, not a band failure, per the same note on `reorder-point-c01`.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | 0 clichés, 0 em-dash, paragraph lengths 1–4 sentences; no bullet-only sections |
| Factual & SAP-spec accuracy | 10 | Every arithmetic chain and SAP/ISO claim reconciles with dossier; citations scoped to what each source documents |
| On-page SEO compliance | 9 | Meta title 49/keyword-first, slug 32, H1/keyword placement all pass; meta description at 160 (band ceiling) |
| GEO extractability (§2a) | 9 | 40–60w answer after each H2; one quotable point per paragraph; FAQPage-ready |
| Soltius framing discipline | 10 | Implements/supports, never builds; 2 mentions; 1998/Metrodata credential varied from `digital-manufacturing-04` |
| Internal linking | 9 | Exactly 2, natural inline; hub in lead, cousin in H2 #4; `digital-manufacturing-04` correctly NOT linked |
| FAQ quality | 9 | 3 Q&A, each 40–45w with a concrete number; no H2 duplication |

## What I fixed (changelog)
- **H2 #1 — cut empty meta-transition**: removed the sentence "Dua sumber independen bertemu di sini." The two clauses that follow (SAP excludes maintenance stops/shift breaks; ISO separates planned down time from planned busy time) already show the dual-source support without the framing filler. This also converts the paragraph to a clean single-sentence block, improving rhythm variance. (−6 words)
- **H2 #2 — tightened the loss-breakdown quotable**: "Ketiga faktor menunjukkan ke mana perginya tanpa perlu menebak: 90 menit lenyap ke downtime…" → "Ketiga faktor menunjukkan ke mana perginya: 90 menit ke downtime…". Removed "tanpa perlu menebak" and "lenyap"; the three concrete loss numbers (90 menit / 80 unit / 36 unit) — the actual quotable payload — are preserved. (−4 words)
- **H2 #2 — tightened the honest-hedging line**: "Micro-stop dua menit yang tak pernah dicatat operator muncul sebagai Performance yang rendah secara misterius, bukan sebagai downtime." → "…yang tak pernah dicatat muncul sebagai Performance rendah yang misterius, bukan downtime." (−4 words)
- Updated frontmatter `word_count` 988 → **985**.

No other edits: the article did not need them.

## What I flagged (open issues)
- ⚠️ **Corpus tech debt — Nakajima quality minimum (curator, do NOT harmonize here)**: this article uses **99%** (→ ~84,6% ≈ 85%) per the brief's committed convention and the dominant TPM literature; `digital-manufacturing-04` uses **99,9%** (→ 85,4%). Both round to ~85% and both are attested in the literature. Per dossier Flag 1, this is a genuine source dispute, not an error to "fix" — log it alongside the existing MESA 40–60% vs Evocon 55–65% inconsistency for a separate cluster-refresh pass. Not blocking.
- ⚠️ **Meta description at 160 chars (band ceiling)** — compliant (band 140–160) and keyword/value-prop dense as authored in the brief; left as-is. If a downstream CMS counts a trailing character differently, trim "arti nilai 85%" → "nilai 85%" for a 4-char buffer. Non-blocking.
- ⚠️ **Sibling-link deferral (follow-up, not a defect)** — `digital-manufacturing-04` is intentionally NOT linked (linking two pages that both explain the OEE formula would signal cannibalization to Google). Per the brief, leave the sibling-link decision to the curator after this article publishes and the anti-cannibalization boundary is confirmed live. Correct as-is.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan / Tidak dapat dipungkiri" openers — lead opens on a concrete pain (two lines reporting OEE 70%, nobody can source it)
- [x] No "Selain itu" opener (0)
- [x] No "Penting untuk dicatat/dipahami" (0)
- [x] "Dengan demikian" not used (0)
- [x] Em-dash count **0** (≤2)
- [x] Varied paragraph lengths — 1–4 sentences, several single-sentence blocks
- [x] Not every H2 → bullet list (1 table, 1 numbered list, prose provenance, prose system-lens)
- [x] No generic claims without numbers
- [x] No stacked hype adjectives (canggih/powerful/seamless/terdepan = 0)
- [x] No service-dump paragraph — one anchor in the close only

### B. Factual & SAP-spec spot-check
| Claim | Source check | Verdict |
|---|---|---|
| 480 − 30 = 450; 450 − 90 = 360; 360 ÷ 450 = 80% | dossier §D ✓ | pass |
| (0,45 × 720) ÷ 360 = 324 ÷ 360 = 90%; ideal 360 ÷ 0,45 = 800; loss 80 units | dossier §D ✓ | pass |
| 684 ÷ 720 = 95%, 36 reject; 80% × 90% × 95% = 68,4%; cross-check (684 × 0,45) ÷ 450 = 307,8 ÷ 450 = 68,4% | dossier §D (identical both ways) ✓ | pass |
| TEEP 0,684 × 16/24 ≈ 45,6% (FAQ #2) | dossier §D ✓ | pass |
| 85% = 90% × 95% × 99% ≈ 84,6%, "dibulatkan menjadi 85%"; "hasil perkalian tiga minimum komponen … Nakajima" — NOT "tepatnya 84,6%", NO 99,9% mixed in | dossier Flag 1 recommendation honored exactly ✓ | pass |
| Nakajima / TPM / JIPM with NO book year | dossier Flag 2 (year unverified) — no year written ✓ | pass |
| six big losses incl. "kerugian hasil saat start-up"; 2→Availability, 2→Performance, 2→Quality | dossier Flag 3 + §C mapping ✓ | pass |
| ISO 22400-2 framed only as "membakukan definisi KPI manufaktur"; "kerangka KPI ISO 22400" phrasing; NO clause text, NO "34 KPI", NO POT/PBT/PDOT-as-verbatim-ISO | dossier Flag 4 ✓ | pass |
| SAP cascade = 4 operational levels (Loading Time → Value Operating Time); NO Theoretically Available Time; NO field names (NET_PRD_TM…); "A × P × Q" NOT attributed to SAP | dossier Flag 6 ✓ | pass |
| Zero Indonesia OEE benchmark; no 19,07% | dossier Flag 5 ✓ | pass |
| All example numbers labeled "Ilustrasi (angka rekaan, bukan data pabrik)" | dossier §D label requirement ✓ | pass |

### C. On-page SEO checklist (batch-adjusted)
- [x] Meta title **49** chars (≤60); keyword "OEE" in first 3 chars
- [x] Meta description **160** chars (band 140–160; at ceiling — see flag)
- [x] Slug `oee-adalah-rumus-cara-menghitung` **32** chars (≤60), keyword-led, kebab-case
- [x] H1 contains keyword (OEE in first 9 chars)
- [x] H2 count **4** content H2s (batch band 3–4); ≥1 question-format (#1 "Apa Saja Tiga Faktor…", #3 "Mengapa 85%…"); honest/counter-conventional folded into #2 (hedging) + #3 (85% not universal) per addendum §2
- [x] Keyword in first 100 words and in last paragraph (CTA)
- [x] Definition snippet **49** words, near top — the only definition in the article
- [x] LSI terms ≥8 (rumus OEE, availability, performance, quality, Run Time, Planned Production Time, Ideal Cycle Time, Total Count, Good Count, TPM, six big losses, TEEP, SAP Digital Manufacturing)
- [x] Internal links **exactly 2** (batch): hub `digital-manufaktur-sistem` (lead) + cousin `business-intelligence` (H2 #4)
- [x] External authoritative citations **2**: SAP Learning (primary, H2 #4) + ISO 22400-2 (H2 #4, 1 clause)
- [x] FAQ **3** (batch band 2–3)
- [x] ≥1 list + ≥1 table (1 formula table + 1 numbered calculation list)
- [x] Word count **985** (batch band 800–1000) — see word-count note
- N/A Image validation — no placeholders by batch design (0 found; none removed — writer complied)

### C2. GEO extractability (§2a)
- [x] Direct 40–60-word answer immediately after each H2: **49 / 47 / 48 / 41** — each carries a NEW point (derived formulas / time→unit→time flow / 85% provenance / definition consistency), none re-states the snippet
- [x] Each body paragraph makes one independently quotable, verifiable point
- [x] FAQ parseable for FAQPage schema; freshness via `publish_month: 2026-08` (dateModified at CMS layer, consistent with batch template)

### D. Soltius framing discipline
- [x] Framed as implementer/partner ("mengimplementasikan dan mendampingi SAP Digital Manufacturing") — never "builds/owns"
- [x] **2** self-mentions (positioning line in Kesimpulan + soft CTA) — within batch ≤2
- [x] No superlatives ("terbaik/nomor satu" = 0)
- [x] SAP product name accurate (SAP Digital Manufacturing, full name)
- [x] Closing uses a company-heritage positioning line ("Berpengalaman sejak 1998 dan bagian dari Metrodata Group") — deliberately varied from `digital-manufacturing-04`'s United VARs diction per brief
- [x] Soft website CTA present as the FINAL line, after Kesimpulan, consultative tone
- [x] Hub link is a natural inline anchor in the lead — no "BACA JUGA" callout

### E. Anti-cannibalization spot check
- Closest prior article: `digital-manufacturing-04` (2026-06), then `digital-manufacturing-01`
- Subtopic overlap (Jaccard, per brief): ≈ 0.15 (< 0.4)
- Boundary honored: **0** predictive/preventive maintenance, 0 Evocon, 0 MESA, 0 industry averages (40–60/55–65), 0 "~10% pabrik", 0 ISA-95/MES, 0 SAP AIN/PM, 0 "Target World-Class" column, 0 ROI/MRP/PP/BOM. Angle is the mechanics of calculation (three derived formulas + full worked shift + cross-check + 85% provenance + time cascade) — none present in the two prior OEE-touching articles, which treated OEE conceptually only.
- Verdict: **distinct angle confirmed**

## The shipping question
Would a senior SAP consultant and a skeptical CIO find this useful and non-embarrassing on soltius.co.id? Yes. It closes the exact SERP gap the Indonesian competitors miss — named-variable derived formulas, a raw-data worked shift with a validating cross-check, and an honest provenance for the "85% world-class" figure (product of three Nakajima minimums, not a figure from the sky) with its limits stated — sources the one non-illustrative number to a standard and a vendor, labels every fabricated figure, and closes with a scoped, non-salesy Soltius line. **Approve.**
