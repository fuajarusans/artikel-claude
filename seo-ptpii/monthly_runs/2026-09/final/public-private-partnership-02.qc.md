---
brief_id: "public-private-partnership-02"
editor_run_date: "2026-09-21"
recommendation: "approve"
overall_score: 9
ai_score: 0.04
plagiarism_score: 0.05
---

# Editor QC Report — Public Private Partnership Step-In Rights: Do They Work?

## Recommendation

**approve**

This is the strongest kind of article this client can publish: it takes a clause everyone negotiates, asks the empirical question nobody asks, and answers it honestly without overselling the answer. The two epistemic load-bearing points survived intact and unaltered — the Global Infrastructure Hub quote is verbatim and carries no guessed publication year, and the Indonesian finding is stated as "no publicly documented instance of step-in or substitution being exercised on a KPBU project, as at September 2026," with the "absence of evidence rather than proof of absence" caveat attached in both the body and the FAQ. The three constantly-conflated remedies (lender step-in, the PJPK's own termination-and-takeover right, the government guarantee) are held structurally apart in a dedicated bullet block and again in the FAQ. No cure-period day-count appears anywhere; no criterion is presented as statutory; no pasal is pinned to the authority's takeover right; PMK 68/2024 is cited only as the separate government-support instrument, never as a source of step-in mechanics. Fitch and all rating language stayed out entirely, which was the right call. My fixes were editorial rather than structural: two internal-link anchors collided with August's articles and were rewritten, one external citation was attributing a characterisation to a page the researcher could never retrieve (403) and was demoted to a standing reference with the retrieval failure disclosed in frontmatter, and 37 words of genuine repetition were cut to open length headroom. Word count landed at 1,762, 38 under the ceiling.

## Quality scores

| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Zero em-dashes, zero AI openers, zero hype adjectives. Prose-paragraph CV 0.53. Aphoristic closers ("a right against a borrower already failing") read as a practitioner, not a synthesis. |
| Factual & penjaminan infrastruktur / KPBU accuracy | 9 | All 5 spot-checked claims pass. Every figure carries a reference year and a scope label. Two claims picked up independent external corroboration this run. |
| On-page SEO compliance | 9 | Meta title 56 chars, keyword at position 0. Meta description 154. Slug 41. 5 body H2s, 2 question-format, 1 counter-conventional. |
| GEO extractability (§2a) | 10 | All 6 H2 answers measured 49–55 words. Definition snippet 55 words at word 109. FAQ cleanly FAQPage-parseable. |
| PT PII framing discipline | 10 | 2 self-mentions. Explicitly "the guarantor is not a party to the direct agreement." No lender/investor/operator/regulator drift, no Danantara, no officials, no superlatives. |
| Internal linking | 8 | 3 links to 3 distinct ptpii.co.id URLs, all inline, no callouts. Two anchors needed rewriting because they duplicated August's. |
| FAQ quality | 8 | 5 Q&As, all 44–58 words. Brief targeted 6; left at 5 because the length lock made a sixth unaffordable. |
| Originality (plagiarism + AI-detector) | 9 | AI 0.04, verdict pass. 3 of 8 candidates web-checked, zero verbatim hits. |

## What I fixed (changelog)

1. **Hub anchor collided with August's `ppp-03`.** The draft's `what Indonesia's public private partnership guarantee actually promises a project` contains August `ppp-03`'s anchor verbatim as a substring, and the brief explicitly forbade reusing "Indonesia's public private partnership framework/scheme/guarantee." Rewritten to `what a public private partnership guarantee actually commits the government to` — keyword retained, the repeated "Indonesia's public private partnership X" pattern broken. Lead sentence adjusted to carry it naturally.
2. **Cousin-2 anchor was a word-order shuffle of August's `ppp-01`.** Draft: `smaller regional projects financed through creative financing routes`; August `ppp-01`: `creative financing routes for smaller and subnational projects`. Same tokens, same head noun. Rewritten to `municipal-scale schemes funded through creative financing`.
3. **Cousin-1 anchor** changed from `...these remedies sit inside` to `...these remedies operate inside` — removes an echo of "sit around" in the same paragraph and further separates it from August's three KPBU anchors.
4. **World Bank PPPLRC was attributing content to an unread page.** The draft said the page "treats these undertakings as core to the lender-issues checklist." That page returned HTTP 403 to the strategist and twice to the researcher; the dossier's instruction was "do not attribute an unread quote to it." Reframed to a statement about the resource's standing ("is the standard reference on lender issues of this kind"), which is supportable from its title and position alone. The 403 is now disclosed in the frontmatter `external_citations` context field. Link kept — the integrity problem was the attribution, not the citation.
5. **Removed a redundant restatement** in the direct-agreement section: the agency's notice-and-forbearance undertakings were spelled out twice (H2 answer and again two paragraphs later). Compressed the second to the one element that was genuinely new (dealing with a nominee or approved substitute), freeing 13 words.
6. **Cut "exercised to stop a termination"** from the Global Infrastructure Hub paragraph — the preceding paragraph already says "so that the contracting agency does not terminate." The verbatim quote itself was not touched.
7. **Fixed "Indonesian legal commentary" appearing twice in consecutive paragraphs** → second instance to "The same commentary."
8. **Tightened without loss**: numbered-list steps 2, 5 and 6; the contractor-insolvency sentence; conclusion paragraphs 1 and 2; FAQ 1.
9. **Put the primary keyword in the final line.** The closing CTA read "...structured for KPBU projects is available at ptpii.co.id" — no primary keyword anywhere in the closing. Rewritten to "Readers tracing how these government guarantees are structured for public private partnership projects in Indonesia can start at ptpii.co.id," which also reads as an invitation rather than a statement.
10. **Broke two dense paragraphs** (direct-agreement section, and the "mechanism is doing its job" paragraph) into shorter units. This was a measured fix: after my trims the scanner's paragraph CV had fallen to 0.299 and the uniformity flag escalated to `[high]`, lifting the AI score from 0.04 to 0.15. The splits restored CV to 0.382 and the score to 0.04 at zero word cost.
11. **Frontmatter `word_count`** 1745 → 1762 (the draft's own figure was already wrong; actual draft was 1,799).

## What I flagged (open issues)

- ⚠️ **FAQ has 5 questions; the brief asked for 6.** Five clears the binding floor, and the article was delivered one word under the ceiling, so a sixth Q&A (40–80 words) could not be paid for without cutting something load-bearing. *Recommendation*: acceptable as shipped. If a sixth is wanted later, "What is a direct agreement, and why does it matter?" is already drafted in the dossier and there are now 38 words of headroom.
- ⚠️ **Plagiarism leg is partial, not exhaustive.** WebSearch was capped at 3 calls for this run and the scanner surfaced 8 candidates. I checked the 3 highest-risk passages; the 5 unchecked are regulation citations (Perpres 38/2015, Perpres 78/2010, PMK 68/2024) and the article's own hedge language, which are the lowest-risk classes and are excluded from a plagiarism finding by rule anyway. *Recommendation*: no action. The unrun queries are preserved in `public-private-partnership-02.en.quality-input.json` for a later session.
- ⚠️ **The GI Hub study's publication year remains unconfirmed**, exactly as the dossier flagged. The article cites the finding with no year, which is correct and was left alone. *Recommendation*: do not add a year later without a direct check against gihub.org. A guessed year would be worse than no year.
- ⚠️ **Three external citations against the playbook's 1–2.** I kept all three rather than dropping one, because each does distinct work: GI Hub carries the article's central empirical claim and was directly fetched; the JDIH Perpres 38/2015 text is the primary source for the "framework is silent on substitution mechanics" claim and was directly fetched; the World Bank PPPLRC is now a pure standing reference with its retrieval failure disclosed. *Recommendation*: keep. Over-citation is not a defect here; false attribution would have been, and that is fixed.
- ⚠️ **No explicit `dateModified` field** in the frontmatter. The house template (`style_guide.md` §7) does not define one, and freshness is carried by `publish_month: 2026-09` plus two in-body "as at September 2026" markers. *Recommendation*: none for this article; raise with the template owner if FAQPage/Article schema needs the field at CMS level.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)

- [x] No "In today's / In an era of / It is undeniable" openers — zero hits
- [x] No "Moreover / Furthermore" opening consecutive paragraphs — zero hits
- [x] No "It is important to note / worth noting" — zero hits
- [x] No press-release register ("In order to", "committed to") — zero hits
- [x] Em-dash count ≤2 — **actual: 0** (also 0 en-dashes)
- [x] Varied paragraph lengths — prose-paragraph CV **0.531**; spread 17 to 139 words
- [x] Not every H2 → 3-bullet list — H2 1 prose+bullets, H2 2 all prose, H2 3 prose+numbered list, H2 4 prose+table, H2 5 all prose
- [x] No generic claims without numbers — 250 projects, 61 projects, IDR 732 trillion, 4 dated regulations
- [x] No stacked hype adjectives — zero hits on cutting-edge/seamless/robust/comprehensive/leading/best-in-class
- [x] No service-dump paragraph — one anchor only (Penjaminan Pemerintah), in the closing

### B. Factual & penjaminan infrastruktur / KPBU spot-check

| Claim | Source check | Verdict |
|---|---|---|
| GI Hub: "the study has not found any example of substitution in the sample of 250 projects globally" | dossier ✓ (exact quote from direct fetch of managingppp.gihub.org, 2026-09-17); quoted verbatim, attributed, **no year asserted** | pass |
| "no publicly documented instance of step-in or substitution being exercised on a KPBU project, as at September 2026" | dossier ✓ (absence-of-evidence finding, phrased exactly as instructed); caveat "absence of evidence rather than proof of absence" present in body **and** FAQ | pass |
| Perpres 38/2015, enacted 20 March 2015, in force as at September 2026, does not prescribe substitution or termination-compensation mechanics | dossier ✓ (primary text fetched at jdih.kemenkeu.go.id + BPK record); no pasal pinned, consistent with the flag | pass |
| Step-in built as conditional assignment (*cessie*), contractual not registered security, untested before Indonesian courts, open to challenge as circumventing the statutory security regime | dossier (medium-high, generic attribution) + **independently corroborated this run**: Indonesian taking-security commentary confirms conditional assignment/novation plus supporting powers of attorney is the standard "other security document" route and is "potentially challengeable and voidable" as circumvention of the statutory security regime | pass, confidence raised |
| Portfolio: 61 projects, project value above IDR 732 trillion, as at June 2026 | product_matrix/company_profile via dossier ✓; scope correctly labelled **project value** (not guarantee value); the stale English hub's 33-project figure does **not** appear anywhere | pass |

Every figure in the article carries a reference year: 250 projects (GI Hub, no year asserted by design), Perpres 38/2015 (20 March 2015), Perpres 78/2010, PMK 68/2024 (effective 18 October 2024), the 2019 practice guide, 61 projects / IDR 732 trillion (June 2026), two "as at September 2026" markers.

Negative checks — all confirmed absent: no cure-period or standstill day-count (the only digits in the body are list numbers, dates, regulation numbers and the 250/61/732 figures); no claim that substitution criteria are statutory; no pasal attached to the authority's takeover right; no claim that PMK 68/2024 addresses step-in; no named Indonesian project asserted to have defaulted or been stepped into; no Fitch, rating, or outlook language of any kind; no assertion that a guarantee claim has ever been paid; no implication that the guarantee covers commercial risk or is a subsidy; no named official of any institution; no disparagement of lenders, sponsors or any project.

### C. On-page SEO checklist (seo_playbook.md §3)

- [x] Meta title ≤60 (keyword first 30) — actual: **56 chars / position 0**
- [x] Meta description 140–160 — actual: **154**
- [x] Slug ≤60, kebab-case, keyword — actual: `public-private-partnership-step-in-rights` (41)
- [x] H1 contains keyword
- [x] H2 count 4–7 — actual: **5 body H2s** (+ FAQ + Conclusion)
- [x] ≥1 question-format H2 (two: "What are step-in rights…?", "Can a foreign lender legally take over…?"); ≥1 honest/counter-conventional ("Why step-in rights are negotiated hard and used almost never")
- [x] Keyword in first 100 words (word 5 of the H1, and in the lead)
- [x] Definition snippet near top — **55 words, beginning at word 109**
- [x] ≥8 LSI terms — counted: **12** (lender step-in, direct agreement, substitution, BUP, project company default, cure period/standstill, conditional assignment/cessie, security package, PJPK, concession termination, KPBU contract, foreign-ownership limits)
- [x] 3 internal links (1 hub + 2 cousins) — `/public-private-partnership` (lead, inline), `/kpbu`, `/pembiayaan-kreatif`. Three distinct URLs, all inline, no "READ ALSO". Zero `institute.iigf.co.id`.
- [x] ≥1 external authoritative citation — actual: **3** (GI Hub, JDIH Perpres 38/2015, World Bank PPPLRC)
- [x] FAQ 5–7 Q&As — actual: **5** (brief targeted 6 — see flags)
- [x] ≥1 list + ≥1 table — bullet list, numbered list, 1 comparison table
- [x] Word count inside band 1,500–1,800 — actual: **1,762** (38 under the ceiling; was 1,799)

### C2. GEO extractability (seo_playbook.md §2a)

- [x] Direct 40–60-word answer immediately after each major H2 — measured: **52 / 51 / 51 / 49 / 55 / 54** words. All six in band.
- [x] Each body paragraph makes one independently quotable, verifiable point — the numbered default-to-outcome sequence keeps one sentence per step, as the brief required
- [x] FAQ parseable for FAQPage schema (H3 question → single answer paragraph, 44–58 words each); freshness carried by `publish_month: 2026-09` and two in-body "as at September 2026" markers. No `dateModified` field exists in the house template — flagged, not failed.

### D. PT PII framing discipline (product_matrix.md + style_guide §11)

- [x] Framed as the government-guarantee provider (BUPI) under the Ministry of Finance — and, specific to this brief, explicitly **"The guarantor is not a party to the direct agreement."** No lender, equity investor, contractor, operator or regulator framing. No Danantara reference.
- [x] ≤3 PT PII self-mentions — actual: **2** (the closing positioning line, and the ptpii.co.id CTA). The three internal-link URLs are not prose self-mentions.
- [x] No unverifiable superlatives — "the only Indonesian state-owned enterprise mandated as Badan Usaha Penjaminan Infrastruktur" is the factually verifiable form expressly permitted by `product_matrix.md`
- [x] Product names match product_matrix/dossier — single anchor, Penjaminan Pemerintah (Government Guarantee), at the close
- [x] Closing uses a company_profile.md positioning line (English rendering of the "satu-satunya BUMN dengan mandat BUPI" line)
- [x] Soft website CTA is the FINAL line, after `## Conclusion` — consultative ("Readers tracing… can start at ptpii.co.id"), no "buy now"
- [x] Hub link is a natural inline anchor in the lead, descriptive text, no callout
- [x] IIGF introduced once with infrastructure / KPBU / Ministry of Finance context adjacent — no acronym-clash risk
- [x] Guarantee product not dissected (August's `ppp-01`/`ppp-03` own that); it appears only as one bullet in the three-remedies block, one mid-article aside, and the close
- [x] The structural point is intact and stated twice: "A government guarantee covering the agency's own default is not a substitute for step-in, and step-in does not cure a sponsor's commercial failure"

### E. Anti-cannibalization spot check

- Closest prior article for this keyword: `2026-08-public-private-partnership-01` (Risk Allocation: Who Carries What)
- Subtopic overlap (Jaccard estimate): **ppp-01 ≈ 0.29 · ppp-02 ≈ 0.05 · ppp-03 ≈ 0.05** (ceiling 0.4)
- Verdict: **distinct angle confirmed.** Overlap with `ppp-01` is entirely shared entities and regulations (PJPK, BUP, Perpres 38/2015, step-in named once in its risk matrix), not shared spine — this article builds no risk matrix and allocates no risks. Against August's `ppp-02` (bankability and the road to financial close), which was the specific concern: the terms **"financial close," "bankability" and "due diligence" appear zero times** in this article. It begins at the point of default, not before it. No diligence checklist, no financial-close sequence. All three internal-link anchors were rewritten or verified distinct from August's nine.

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)

- [x] Script ran on the saved final; `public-private-partnership-02.en.quality-input.json` written
- [x] AI-detector score **0.04**, verdict `pass` (revise ≥0.30, reject ≥0.50)
- [x] Paragraph burstiness CV **0.382** by the scanner's measure (0.531 across prose paragraphs only); sentence burstiness 0.834; top-30 vocab share 0.325. Remaining flag is `[low] paragraph-low-variance` against an aspirational 0.45 target, comfortably clear of the 0.30 tell threshold. *Interim note: after my first round of trims CV had dropped to 0.299 and the score rose to 0.15 — I broke two paragraphs, re-ran, and it returned to 0.382 / 0.04.*
- [x] Plagiarism: **3 of 8 candidate passages web-checked** under the 3-call cap. Zero verbatim matches of ≥20 words on any non-PT PII page.
  - Indonesian Civil Code / conditional assignment / powers of attorney passage — no verbatim match; independent sources state the same legal position in different words, and corroborate the article's characterisation.
  - "step-in right living only in the loan documents" / "a right against a borrower already failing" — no match; original phrasing.
  - Definition snippet ("intervene in or nominate a substitute…") — no match; the underlying concept is standard across the literature but the wording is the article's own.
  - The 5 unchecked candidates are Perpres/PMK citations and the article's own hedge sentences, both excluded classes. Their queries are preserved in the JSON.
  - The one directly quoted passage (Global Infrastructure Hub, 21 words) is inside quotation marks, attributed in-sentence, and linked — correctly handled, not a hit.
- **plagiarism_score: 0.05** (heuristic + 3 targeted lookups; scored honestly as partial coverage, not a clean sweep)
