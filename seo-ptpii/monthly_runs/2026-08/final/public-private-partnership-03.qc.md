---
brief_id: "public-private-partnership-03"
editor_run_date: "2026-08-12"
recommendation: "approve"
overall_score: 9
ai_score: 0.04
plagiarism_score: 0.05
---

# Editor QC Report — Public Private Partnership Guarantees: Indonesia's Cover vs MIGA and MDBs

## Recommendation
**approve**

This is the most delicate article in the batch and it survives scrutiny. The three-level stacking answer (confirmed domestic *Penjaminan Bersama*, historical World Bank Group co-guarantee, exploratory-only MIGA) is intact, dated, and hedged exactly as the dossier requires; nothing was flattened into a confident "yes". The comparator institutions are described only from their own current material, the fairness paragraph ("That is not a criticism; it applies to all four") survived the trim, and the guarantee-is-not-insurance distinction is structurally sharp (secondary promise + regress vs. policy + proof of loss + subrogation). I made one **material factual correction**: the draft called IDR 191.6 trillion PT PII's guarantee "exposure" when the dossier records it as *maximum guarantee capacity* (effective exposure grew by IDR 8.7 trillion during 2025 against a 6.5x gearing ratio) — that is a meaningfully different claim and it is now correct and attributed. I also removed an unsourced "two years" figure that sat next to the description of insurance-type claim mechanics and could have read as a swipe at MIGA, and hedged one table cell that stated an instrument-class generalisation as an absolute. Everything else was polish: entity expansion on first use, a JDIH primary-source link, and two paragraph splits that lifted burstiness CV from 0.354 to 0.436. Word count 1,750, inside the binding 1,500–1,800 band. Two open flags remain, neither blocking: the Fitch figures still rest on a specialist news-wire republication (a direct fitchratings.com check is recommended before publication), and the plagiarism verdict is heuristic-only because the session's WebSearch budget was exhausted.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Zero em-dashes, zero AI connectors ("furthermore/moreover/additionally" all absent), no press-release register. Openers vary; sentence length runs 5 to 45 words. Burstiness CV 0.436 after two splits. |
| Factual & penjaminan infrastruktur / KPBU accuracy | 9 | One material correction applied (capacity vs. exposure). Every figure carries a reference year and scope. Regulation chain correct: Perpres 78/2010 in force, PMK 68/2024 effective 18 Oct 2024 revoking PMK 260/PMK.011/2010. |
| On-page SEO compliance | 9 | Meta title 46 chars (keyword at position 0), meta description 150, slug 46. 7 H2s, 1 question-format, 1 counter-conventional. Table + 2 bullet lists + 1 numbered list. |
| GEO extractability (§2a) | 9 | 40–60-word answers after all five body H2s (53/55/53/51/48, untouched by my edits). Definition snippet 57 words in the first ~135 words. Comparison table is one claim per cell. `dateModified` not in the meta block (see flags). |
| PT PII framing discipline | 10 | Exactly 3 self-mentions. Framed as BUPI / Ministry of Finance guarantee company throughout; body otherwise uses "the national guarantee provider". No superlatives, no officials, no Danantara, no lender/investor/operator framing. |
| Internal linking | 10 | Exactly 3 distinct ptpii.co.id URLs, all inline, hub in the lead. Zero links to institute.iigf.co.id. |
| FAQ quality | 8 | 5 Q&As, answers 44–53 words, all FAQPage-parseable. Compliant but at the floor of the 5–7 band; three useful brief questions were dropped in the trim. |
| Originality (plagiarism + AI-detector) | 8 | AI-detector 0.04 (pass, well under 0.30). Plagiarism assessed heuristically only — WebSearch budget exhausted, so no lookup was run and none is claimed. |

## What I fixed (changelog)
- **Corrected a material factual error**: "exposure of IDR 191.6 trillion against equity of IDR 16.0 trillion" → "the BUPI's own capacity, which stood at a maximum IDR 191.6 trillion against equity of IDR 16.0 trillion as at end-December 2025 (Fitch Ratings, 12 February 2026)". The dossier records IDR 191.6tn as *maximum guarantee capacity*, not exposure. The rewrite also stops the colon construction from implying the Kemenkeu KPBU portal supplied Fitch's figures.
- **Removed an unsourced, comparator-adjacent number**: "protection that pays in full two years after a missed instalment" → "long after a missed instalment". The only sourced insurance-type day-counts in the dossier are 60/90/180 days (MIGA FY17); an invented "two years" sitting beside the MIGA mechanics discussion was both unsourced and a fairness risk.
- **Reinforced comparator fairness in §3**: "Hence the pattern: political risk insurance for the equity, a bank-type guarantee for senior debt" → "Hence the common pattern, a division of labour rather than a ranking: political risk insurance for equity exposure, a bank-type guarantee for senior debt." Also fixes a small internal contradiction — the table's own beneficiary cell says MIGA covers investors *and* cross-border lenders.
- **Hedged an over-absolute table cell**: MDB claim mechanics "Defined trigger conditions; no waiting period" → "generally no waiting period", matching the dossier's instrument-class wording ("generally without a mandatory waiting period"). Table cells get lifted verbatim by AI engines, so an unhedged cell is the riskiest place for an absolute.
- **Entity expansion on first use** (brief's GEO entity list): added "*Kerja Sama Pemerintah dengan Badan Usaha*" at the first KPBU mention and "(*Penanggung Jawab Proyek Kerja Sama*)" at the first PJPK mention. Previously the KPBU expansion appeared only in the FAQ, after ~10 prior uses.
- **Added a primary-source external link**: the PMK 68/2024 citation now links to JDIH Kementerian Keuangan (was a bare textual attribution). Raises authoritative outbound links from 2 to 3 and matches the frontmatter `external_citations`.
- **Made a positional reference self-contained**: "Row two reproduces MIGA's own published cover" → "The political risk insurance row reproduces…" (a paragraph that says "Row two" is unusable if extracted alone).
- **Hedged an unsourced frequency claim**: "Regional projects more often use creative financing arrangements than a full guarantee" → "often turn to … rather than a full guarantee". The dossier supports "may use different funding routes", not a comparative frequency.
- **Added scope to two extractable statements**: FAQ answer on currency inconvertibility now reads "Not in the Indonesian provider's published risk list"; the portfolio figure now reads "The Indonesian guarantee provider's cumulative portfolio". Both keep the "not published" framing and the June 2026 reference date, and neither adds a 4th self-mention.
- **Two paragraph splits for rhythm** (zero word cost): isolated "The instrument is not insurance, and the distinction is structural." and "Before paying for both, check that covered events, beneficiary and trigger genuinely differ." as one-sentence paragraphs. Burstiness CV 0.354 → 0.436.
- **Frontmatter**: `word_count` 1716 → 1750.

## What I flagged (open issues)
- ⚠️ **Fitch figures rest on a news-wire republication.** The dossier could not fetch fitchratings.com directly (site blocks automated fetch); the IDR 191.6tn capacity / IDR 16.0tn equity / 12 February 2026 action all come via Petromindo's republication of the Fitch release. — *recommendation*: **pre-publication check against fitchratings.com.** These are the only third-party financial figures in the article; if the direct source disagrees, the numbers in H2 #4 item 1 need updating before it goes live.
- ⚠️ **Plagiarism verdict is heuristic-only.** The session's WebSearch budget was exhausted (200/200), so none of the 8 candidate passages was web-checked. I am not claiming a lookup I could not run. — *recommendation*: if the curator has search budget, run the 8 queries in `public-private-partnership-03.en.quality-input.json`; my manual read finds no lift risk (see §F).
- ⚠️ **FAQ sits at 5, the floor of the 5–7 band.** The trim dropped "Is the Indonesian guarantee provider rated?", "Who pays a claim, and can it be recovered?" and "What is a partial risk guarantee?" — all drafted in the dossier and all PAA-adjacent. — *recommendation*: not a blocker at 1,750 words with a 1,800 ceiling; if the band is ever relaxed, "Is the provider rated?" is the highest-value addition because it is the article's only unused E-E-A-T asset.
- ⚠️ **No `dateModified` field in the meta block** (§2a freshness). `publish_month: "2026-08"` is the only freshness marker, and `style_guide.md` §7's meta-block template does not define a `dateModified` field. — *recommendation*: I deliberately did **not** invent a field this batch's other 14 articles lack. Handle at CMS level, or add it to the §7 template as a knowledge-base change so the whole pipeline stays consistent.
- ⚠️ **Comparator facts have a short shelf life.** MIGA's product architecture and the World Bank Group Guarantee Platform were both reorganised recently (platform live 1 July 2024), and the MIGA relationship is explicitly described as exploratory "as of March 2026 reporting". — *recommendation*: schedule a review of H2 #2 and H2 #4 within ~6 months; if a PT PII–MIGA arrangement is ever signed, item 3 of the stacking list must be rewritten, not left to age.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5) — English equivalents applied
- [x] No "In today's / As technology advances / It cannot be denied" openers — lead opens on a concrete credit-committee problem
- [x] No "Additionally / Moreover / Furthermore" opening consecutive paragraphs — **zero occurrences of any of the three in the whole article**
- [x] No "It is important to note / It is worth noting" — zero
- [x] No "Therefore / Thus" overuse — zero mechanical connectors
- [x] Em-dash count ≤2 — **actual: 0** (deliberate; verified after every edit). One en-dash, in the proper noun "Kediri–Tulungagung"
- [x] Varied paragraph lengths — 1-sentence to 6-sentence paragraphs; burstiness CV 0.436
- [x] Not every H2 → 3-bullet list — H2 #1 prose+bullets+prose, #2 prose+table+prose, #3 all prose, #4 prose+numbered list+prose, #5 prose+bullets+prose
- [x] No generic claims without numbers — 10+ dated data points
- [x] No stacked hype adjectives — no "comprehensive/robust/seamless/cutting-edge/world-class"; scanned and clean
- [x] No service-dump paragraph — one CTA anchor only (Penjaminan Pemerintah); Pembiayaan Kreatif appears once as a genuine routing alternative, not a product pitch
- [x] No press-release register — the client's signature failure mode; absent

### B. Factual & penjaminan infrastruktur / KPBU spot-check
**No WebSearch was available this run (budget 200/200 exhausted).** All verification is against the dossier, `product_matrix.md` and `company_profile.md`, which are themselves source-cited with 2026-08-12 access dates. No claim was accepted on memory.

| Claim | Source check | Verdict |
|---|---|---|
| "PMK 68/2024 took effect on 18 October 2024 and revoked PMK 260/PMK.011/2010"; "Peraturan Presiden 78/2010 remains in force" | dossier ✓ (JDIH Kemenkeu, accessed 2026-08-12) + `company_profile.md` legal-basis table ✓ | **pass** — the article gets right what the brief and much public commentary get wrong; the "commentary still citing the 2010 rule is out of date" line is a genuine differentiator |
| Maximum guarantee capacity IDR 191.6 trillion against equity IDR 16.0 trillion, as at end-December 2025 (Fitch Ratings, 12 February 2026) | dossier ✓ — but dossier says **maximum guarantee capacity**, draft said **exposure** | **fail → corrected in place.** Now matches the dossier. Underlying figures still carry the Fitch-via-Petromindo caveat (flagged) |
| MIGA's covered risks: currency inconvertibility and transfer restriction, expropriation, war and civil disturbance, breach of contract; non-honouring of financial obligations in a separate credit line | dossier ✓ (miga.org + miga.org/products, direct fetch 2026-08-12) | **pass** — matches MIGA's current product-family architecture, not the older flat five-risk list |
| World Bank Group Guarantee Platform live 1 July 2024, consolidating World Bank, IFC and MIGA products at MIGA | dossier ✓ (worldbank.org + MIGA press release) | **pass** — and the article correctly avoids legacy product names, which was a named trap for this piece |
| Portfolio: 61 projects, 38 KPBU, seven sectors, above IDR 732 trillion as at June 2026; Palapa Ring and Kediri–Tulungagung as guaranteed projects | dossier ✓ (ptpii.co.id/informasi-proyek, fetched 2026-08-12) + `company_profile.md` ✓ | **pass** — the hub's stale "33 projects" does not appear anywhere; sectors named (toll roads, drinking water, geothermal, waste-to-energy, telecoms) all map to named projects in `company_profile.md` |
| "~15 years, upfront fee plus recurring six-monthly fee" attributed to A&O Shearman, 2026 | dossier ✓ — flagged as law-firm commentary only, attribution mandatory | **pass** — attributed inline, never presented as PT PII's published terms |
| MIGA FY17 mechanics: 60-day waiting period, ~90 further days, 180-day filing window | dossier ✓ — flagged "illustrative only, 2017 vintage" | **pass** — dated to "fiscal year 2017" and explicitly closed with "Those illustrate mechanics, not current binding terms" |

**Prohibited items — confirmed absent:** no current (2024–2026) percentage-of-GDP guarantee ceiling (the 2018–2021 6% ADB figure is not used at all); no claim that the guarantee covers currency inconvertibility (uses the "not published… treat this as unpublished rather than settled" framing); no named official of PT PII, the Ministry of Finance, MIGA, the World Bank, ADB or any ECA; no revoked regulation cited as current law; no implication the guarantee reaches commercial risk (explicitly denied twice) or is a subsidy (explicitly denied).

**The three-level stacking answer — re-verified line by line, unaltered by me:**
1. Domestic *Penjaminan Bersama* — "confirmed and operating", PMK 68/2024, Ministry of Finance + BUPI on one project risk ✓
2. World Bank Group — "documented, but historical", ~2011 to 2020 vintage, "Treat it as precedent, not a standing feature" ✓
3. MIGA — "exploratory", 4 February 2025 release describing a visit as exploring potential collaboration, 5 March 2026 reporting still showing partner-seeking ✓
The section's 51-word opening answer also states all three levels before the list, and the closing paragraph separately distinguishes the *two meanings* of stacking (two Indonesian government-side providers on one risk vs. instruments protecting different counterparties). Nothing here was flattened.

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: **46 chars**, keyword at position **0**
- [x] Meta description 140–160 — actual: **150**
- [x] Slug ≤60, kebab-case, keyword — actual: `public-private-partnership-guarantees-compared` (**46**)
- [x] H1 contains keyword — "Public Private Partnership Guarantees: Indonesia's Cover vs MIGA and MDBs"
- [x] H2 count 4–7 (playbook §3 band) — actual: **7** (5 body + FAQ + Conclusion)
- [x] ≥1 question-format H2 — 3 of them ("What is a government guarantee…", "Which instrument pays faster…", "Can these instruments be combined…"); ≥1 honest/counter-conventional — "When you do not need Indonesia's government guarantee"
- [x] Keyword in first 100 words — appears at ~word 45, inside the hub anchor
- [x] Definition snippet near top (40–60 words) — **57 words**, blockquoted, ends ~word 135
- [x] ≥8 LSI terms — counted **14+**: PPP guarantee comparison · political risk insurance · partial risk guarantee · partial credit guarantee · export credit agency cover · IIGF · currency inconvertibility and transfer restriction · breach of contract · co-guarantee · guarantee stacking · multilateral development bank guarantee · BUPI · PJPK · regress · subrogation · non-honouring of financial obligations · creditworthiness
- [x] 3 internal links (1 hub + 2 cousins) — `/public-private-partnership` (lead, inline), `/kpbu` (H2 #1), `/pembiayaan-kreatif` (H2 #5). **3 distinct URLs, zero "READ ALSO" callouts, zero institute.iigf.co.id**
- [x] ≥1 external authoritative citation — actual: **3** (JDIH Kementerian Keuangan, MIGA, World Bank Group); ADB, Global Infrastructure Hub, A&O Shearman and Fitch additionally cited inline by name
- [~] FAQ 5–7 Q&As — actual: **5** (at the band floor; flagged)
- [x] ≥1 list + ≥1 table — 2 bullet lists, 1 numbered list, 1 seven-column comparison table
- [x] Word count inside the brief's band (1,500–1,800) — actual: **1,750** (`tools/count_words.py`), frontmatter synced

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — verified word by word: **53 / 55 / 53 / 51 / 48**. None of my edits touched these five paragraphs; all remain in band
- [x] Each body paragraph makes one independently quotable, verifiable point — improved by de-positioning "Row two" and by adding scope to two FAQ statements
- [x] FAQ parseable for FAQPage schema — clean `## FAQ` → `### question` → answer structure, answers 44–53 words, each self-contained
- [~] `dateModified` / freshness noted in the meta block — only `publish_month: "2026-08"`; not added, because `style_guide.md` §7 defines no such field and the other 14 articles this month would diverge (flagged for a knowledge-base decision)
- [x] Comparison table is citation-ready — one claim per cell, consistent column order, no compound cells

### D. PT PII framing discipline (product_matrix.md + style_guide §11)
- [x] PT PII framed as the government-guarantee provider (BUPI) — "the Ministry of Finance's guarantee company for infrastructure PPP projects" (snippet) and "the Ministry of Finance's Badan Usaha Penjaminan Infrastruktur, mandated to issue government guarantees for KPBU projects" (conclusion). Never a lender, investor, contractor, operator or regulator. No Danantara reference
- [x] ≤3 PT PII self-mentions — actual: **3** (definition snippet, conclusion, CTA). The body deliberately uses "the national guarantee provider" / "the Indonesian provider" / "BUPI" elsewhere, which is what keeps a comparison article from reading as vendor copy
- [x] No unverifiable superlatives — none; the article's own closing line ("The useful question is never which instrument is strongest") forecloses the temptation
- [x] Product names + specs match product_matrix.md / dossier — CTA anchor is Penjaminan Pemerintah, the single correct anchor for this brief; Pembiayaan Kreatif appears once as a routing alternative, matching the dossier's H2 #5 mapping
- [x] Closing uses a company_profile.md positioning line — the "only BUMN mandated as BUPI" line, softened to a factual mandate statement without the superlative construction
- [x] Soft website CTA present as the FINAL line, after the conclusion — "How government guarantees are structured for KPBU projects, and where they sit alongside other cover, is set out at ptpii.co.id." Consultative, no "contact us now"
- [x] Hub link present as a natural inline anchor in the lead — "Then the contracting agency offers [Indonesia's public private partnership guarantee]…", descriptive anchor, no callout box
- [x] IIGF disambiguation — IIGF used once, with "Indonesia Infrastructure Guarantee Fund", "Ministry of Finance" and "infrastructure PPP projects" all in the same sentence. No route to confusing it with the International Institute of Green Finance
- [x] Fairness to comparators — no ranking language anywhere; explicit symmetry paragraph ("MIGA policies, MDB guarantees and ECA cover are equally capped, priced and eligibility-bound"), reinforced by my §3 edit ("a division of labour rather than a ranking")

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: **none yet** — `articles_history/index.json` `articles: []` as at 2026-08-11, first run for this keyword
- Sibling check against this month's set: `public-private-partnership-01` (risk allocation inside the Indonesian contract: who carries what, what the guarantee covers/excludes, testing your risk matrix) and `public-private-partnership-02` (bankability, the sequence to financial close, lender diligence, who stands behind government obligations)
- Subtopic overlap (Jaccard estimate): **~0.15 vs 01**, **~0.14 vs 02**. The shared surface is limited to "what the guarantee does not do", and each treats it from a different unit of analysis — 01 by contract scope, 02 by project quality, 03 by instrument caps/fees and by whether another provider's instrument is the better fit
- Verdict: **distinct angle confirmed.** 03 is the only one of the three whose unit of analysis is the instrument rather than the project, and the only one that reaches outside Indonesia (MIGA/MDB/ECA). No strategist re-spin needed

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran on the saved final; `public-private-partnership-03.en.quality-input.json` written to `monthly_runs/2026-08/final/`
- [x] AI-detector score < 0.30 — actual: **0.04**, verdict `pass` (revise ≥0.30, reject ≥0.50). Ran three times across the edit pass; stable at 0.04
- [x] Paragraph burstiness CV ≥ 0.30 — actual: **0.436** (from 0.354 in the draft, improved by two zero-cost paragraph splits). The script's own stretch target is 0.45 and it emits a `[low]` severity `paragraph-low-variance` flag at 0.436; this is comfortably above the binding 0.30 threshold and I stopped there rather than split further, which would have been metric-gaming rather than editing
- [~] Plagiarism: **web lookup could not be run.** The session's WebSearch budget was exhausted (200/200) during research; my one attempt returned the budget error, so **no candidate passage was web-checked and I am not claiming otherwise.** Verdict below is heuristic and manual only

**Manual review of the 8 extracted candidates** (queries preserved in the JSON for anyone with search budget):

| # | Passage | Assessment |
|---|---|---|
| 1 | "Since the World Bank Group Guarantee Platform went live on 1 July 2024, World Bank, IFC and MIGA products have formed one consolidated menu at MIGA." | Widely reported fact, distinctively worded ("one consolidated menu"). Low risk |
| 2 | Table header row | Markdown structure, not prose. Not a plagiarism vector |
| 3 | "World Bank Group co-guarantee: documented, but historical. Third-party case-study material records…" | Original editorial hedging that describes its own source vintage; could not exist verbatim elsewhere. Low risk |
| 4 | "A domestic co-guarantee with the Ministry of Finance is confirmed under PMK 68/2024, while a standing MIGA arrangement was still described as exploratory…" | Original synthesis of two dated sources. Low risk |
| 5 | Portfolio figures (61 projects / IDR 732 trillion / June 2026) | Sourced to ptpii.co.id — **excluded by rule** (client's own material) |
| 6 | H1 + lead ("Credit committees are easier to convince when every instrument in the package has a defined job") | Distinctive authorial voice. No risk |
| 7 | "PT PII is the Ministry of Finance's Badan Usaha Penjaminan Infrastruktur, mandated to issue government guarantees for KPBU projects." | Client positioning line from `company_profile.md` — **excluded by rule** |
| 8 | "PMK 68/2024 also defines two forms of cover: a guarantee from a BUPI alone, or a co-guarantee issued jointly with the Government." | Paraphrase of a regulation definition, attributed to PMK 68/2024 in the same sentence. Not verbatim regulatory text — **excluded by rule** |

**Plagiarism score 0.05 — heuristic only, degraded mode.** Three of the eight candidates fall under explicit exclusions (client-owned material, attributed regulation paraphrase); the other five are hedged, dated synthesis whose construction is specific to this dossier and could not plausibly be verbatim from another page. That is a reasoned assessment, not a verified one. If the curator wants the verified version, the 8 quoted queries are ready to run.
