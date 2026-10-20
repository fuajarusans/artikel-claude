---
brief_id: "public-private-partnership-01"
editor_run_date: "2026-08-12"
recommendation: "approve"
overall_score: 9
ai_score: 0.04
plagiarism_score: 0.05
---

# Editor QC Report — Risk Allocation in Indonesia's Public Private Partnership: Who Carries What

## Recommendation
**approve**

This draft arrived in unusually good shape: correct legal chain, every figure dated and scoped, the "not covered" rows intact and carrying real weight, and no press-release register. My edits were corrective rather than structural. Two were substantive — an unsourced debt-tenor claim ("twenty-five-year debt") replaced with the dossier-sourced 25-to-30-year concession length, and a logical inconsistency where the article asserted the market "remains dominated by domestic investors" and then cited a figure (72 of 135, 53%) that pointed the other way and was not in the dossier. The rest were voice, attribution precision, dating, and GEO extractability. All eight of the article's specific risks named in the assignment were verified clean: no "11 categories" count, no toll-road names, no Rp 1.905,3 T national-total figure, no stale 33-project number, PMK 68/2024 cited as current with the old pairing appearing only inside an explicit portal-lag caveat, ~15-year tenor attributed as law-firm commentary, IIGF disambiguated at its single use. **One honest limitation**: the WebSearch budget was exhausted (200/200) before this run, so the eight plagiarism candidates could not be web-checked. The plagiarism verdict below rests on heuristic output plus claim-by-claim provenance tracing against the dossier — not on a web lookup. I have not claimed otherwise.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Zero em-dashes, no AI openers, sentence burstiness 1.03. Fixed one symmetric-parallel pair and one duplicated verb construction. |
| Factual & penjaminan infrastruktur / KPBU accuracy | 9 | All five spot-checked claims trace to the dossier with reference years. Two claims corrected; one unsourced assertion removed. |
| On-page SEO compliance | 9 | Every checklist item passes. FAQ sits at the floor of the 5–8 band. |
| GEO extractability (§2a) | 9 | All five H2 answers land 40–60 words; definition snippet 58 words at word 94; `date_modified` added. |
| PT PII framing discipline | 10 | 3 mentions incl. CTA, BUPI/SMV framing correct, no officials, no superlatives, no Danantara, IIGF disambiguated. |
| Internal linking | 10 | Exactly 3 inline links to 3 distinct ptpii.co.id URLs, no callout, zero institute.iigf.co.id. |
| FAQ quality | 8 | 5 Q&As, all 40–80 words, PAA-matched. At band floor — see open flags. |
| Originality (plagiarism + AI-detector) | 8 | AI-detector 0.04 (clear pass). Plagiarism heuristic-only; scored down for the unverifiable dimension, not for observed risk. |

## What I fixed (changelog)

**Factual / attribution**
- Replaced an unsourced tenor comparison: "Fifteen years of cover against twenty-five-year debt" → "against a 25-to-30-year concession". The 25–30-year concession length is dossier-sourced (A&O Shearman); the 25-year *debt* tenor was not sourced anywhere.
- Removed the claim that Indonesian PPP "remains dominated by domestic investors and financiers" — it is not in the dossier, and the sentence that followed it (72 of 135 financially closed projects with foreign sponsor participation, 53%) argued against it. Reframed to "Foreign participation is real but partial" and added the dossier-supported vintage note "still the most recent national count it has published".
- Sharpened the market-practice attribution on cap/tenor/fees: "market commentary reviewed in 2026" → "law-firm commentary current to 2026, not published guarantee terms".
- Softened an over-attribution to the World Bank: "says the same" → "rests on the same logic" (the specific drafting-vs-claim formulation is the article's gloss, not the World Bank's wording).
- Added a reference date to the portal-lag caveat, which was undated present tense on a volatile, checkable claim: "as at August 2026, the Ministry of Finance's KPBU portal **still listed** the revoked 2010 and 2016 ministerial regulations…".
- Added an as-at date to the Perpres 38/2015 in-force status: "still in force as at August 2026".

**Anti-AI / voice**
- Broke a symmetric-parallel tell: consecutive paragraphs opening "The force majeure row is…" / "The currency row deserves…" → second rewritten to "Offshore readers should look hardest at currency." This also removed a duplicated "deserves" construction ("The currency row deserves…" / "Regress deserves…").
- Removed a redundancy inside "What the guarantee will not do for you": paragraph 1's "not a repair for a badly allocated contract" and paragraph 2's "Nor will a guarantee repair an allocation that was wrong at signing" made the same point twice. Paragraph 2 rewritten to keep only the distinctive appraisal insight.
- Removed an anchor echo: "Small and **subnational** schemes… which is why creative financing routes for smaller and **subnational** projects…" → "Small and regional schemes…".

**Language / EN register (§3a)**
- Moved the KPBU expansion (*Kerja Sama Pemerintah dengan Badan Usaha*) to its first use in the definition snippet. It previously appeared two paragraphs after first use, which fails §3a for an international audience. Removed the now-duplicate expansion downstream.
- Clarified a forward reference for the offshore reader: "the guarantee business entity" → "the country's infrastructure guarantee business entity" (BUPI is not introduced until the following H2).

**SEO / GEO**
- Captured an exact secondary keyword: "a regress agreement" → "a **guarantee and regress agreement**".
- Split three multi-point paragraphs so each makes one independently quotable point (§2a): the PJPK/Badan Usaha paragraph, the guarantor paragraph, and the conclusion.
- Added a 14-word analytical bridge before the counterparty data — "Its standing matters, because a guarantee is only as good as whoever writes it" — so the Fitch figures read as counterparty analysis rather than a credential drop. This directly counters the press-release failure mode flagged for this client.
- Smoothed the closing CTA: "How **government guarantees** are appraised…" → "How **these guarantees** are appraised…" (the preceding sentence already says "government guarantees").
- Added `date_modified: "2026-08-12"` to the meta block for GEO freshness, matching the convention in `kpbu-03.id.md`.

**Word count**
- Trialled a 6th FAQ ("What is the difference between government support and a government guarantee?") and **removed it**: it pushed the article to 1,840 words, over the binding 1,800 ceiling, and near-duplicated the in-body paragraph in H2 #3 almost phrase for phrase.
- Synced frontmatter `word_count`: the draft self-reported 1,672; `tools/count_words.py` measured 1,761. Final is **1,789**, verified with the same tool.

## What I flagged (open issues)

- ⚠️ **Plagiarism could not be web-verified.** The WebSearch budget was exhausted (200/200) before this run; the assignment anticipated this. The scanner extracted 8 candidate passages and I could not run a single lookup. *Recommendation*: treat `plagiarism_score: 0.05` as a provenance-based estimate, not a web-verified result. If the curator wants certainty before commit, re-run the 8 queries in `public-private-partnership-01.en.quality-input.json` in a fresh session. My assessment of each is in section F.
- ⚠️ **FAQ sits at the floor of the 5–8 band.** The highest-value missing question is "What is the difference between government support and a government guarantee?" — the dossier calls this the single most common investor-side error. It *is* taught in the body (H2 #3, closing paragraph), so the substance is not lost, but it is not separately extractable for FAQPage schema. *Recommendation*: no action now — the binding 1,500–1,800 band has no room. If the band is ever widened for this article, this is the first thing to add.
- ⚠️ **Paragraph-length CV is 0.33 against the scanner's 0.45 target** (low severity; the editor threshold is ≥0.30, which it clears). I made three paragraph splits on genuine extractability grounds; they did not move the metric much because they landed near the mean. *Recommendation*: accept. Chasing 0.45 would mean inserting filler one-line paragraphs, which games a heuristic rather than improving the article. Sentence burstiness is 1.03, which is strong.
- ⚠️ **Frontmatter/body citation mismatch (deliberate).** `external_citations` lists four sources; three are hyperlinked in-body. The Fitch source (via Petromindo) is recorded as provenance for the rating and capacity figures but not linked, because three in-body external links already exceeds the playbook's 1–2 requirement. *Recommendation*: leave as is; the meta block is the right place to record provenance.
- ⚠️ **Sibling-overlap watch for the writers of ppp-02 and ppp-03.** This article now uses the Fitch rating and guarantee-capacity figures in one paragraph; `ppp-02` H2 #4 is built entirely on them. It also uses MIGA's currency-inconvertibility cover in one boundary sentence; `ppp-03` H2 #2 is the full instrument comparison. Neither is a cannibalization risk at this scale, but 02 and 03 should not simply restate these framings.
- ℹ️ **Resolution recorded for the dropped funding-gap figure.** The writer flagged an unresolved scope question and dropped Rp 1.905,3 triliun / Rp 753 triliun rather than mislabel it. That was the correct call. For the record: this is **Kementerian PU's portfolio, not the national total** (two researchers independently confirmed). It does not appear anywhere in the final and must not be reinstated as a national figure. I verified its absence.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "In today's / In an era of / It cannot be denied" openers — 0 hits
- [x] No "Additionally / Moreover / Furthermore" opening ≥2 consecutive paragraphs — 0 hits; all 25 paragraph openers distinct
- [x] No "It is important to note / It should be noted" — 0 hits
- [x] "Therefore / Thus" not overused — 0 hits
- [x] Em-dash count ≤2 — **0** (en-dashes also 0)
- [x] Varied paragraph lengths — body paragraphs run 21–79 words with a 148-word table block; no two adjacent sections share a rhythm
- [x] Not every H2 → 3-bullet list — one bulleted list, one numbered list, one table, prose elsewhere
- [x] No generic claims without numbers — 6+ dated figures (61 projects/June 2026, IDR 732tn, IDR 191.6tn, IDR 16.0tn, 12 Feb 2026, 49%, 72 of 135/2019, 15 years, 25–30 years)
- [x] No stacked hype adjectives — 0 hits on the superlative pattern set
- [x] No service-dump paragraph — one anchor only (Penjaminan Pemerintah); no product list
- [x] **Fixed**: symmetric-parallel paragraph openers, duplicated "deserves", cross-paragraph redundancy — see changelog

### B. Factual & penjaminan infrastruktur / KPBU spot-check

| Claim | Source check | Verdict |
|---|---|---|
| "As at June 2026 it had guaranteed 61 projects, 38 of them KPBU, worth more than IDR 732 trillion" | dossier ✓ (verbatim first-party quote from `ptpii.co.id/informasi-proyek`, fetched 2026-08-12); matches `company_profile.md` scale table | **pass** — dated, scoped, and not the stale 33 figure from the English hub |
| "Legal basis is Perpres No. 78 Tahun 2010, still in force, with PMK No. 68 Tahun 2024, effective 18 October 2024" | dossier ✓ (JDIH Kemenkeu); `company_profile.md` ✓ ("ditetapkan 24 September 2024, berlaku 18 Oktober 2024") | **pass** — current chain cited; revoked PMK 260/2010 + PMK 8/2016 appear **only** inside the portal-lag caveat, never as live law |
| "Viability Gap Fund covers up to 49% of construction, equipment, and installation cost under PMK 68/2024" | dossier ✓ (medium-high; 49% long-standing, current basis is PMK 68/2024 not the older PMK chain) | **pass** — correctly attached to the *current* regulation, avoiding the common PMK 170/2018 error |
| "Fitch affirmed it at 'BBB' long-term and 'AAA(idn)' national, Outlook Stable, on 12 February 2026, with reported maximum guarantee capacity of IDR 191.6 trillion on IDR 16.0 trillion of equity" | dossier ✓ (Fitch action via Petromindo); `company_profile.md` rating table ✓; figures internally consistent (16.0 × ~12x ceiling ≈ 191.6) | **pass** — date present, "reported" hedge preserved, 2022 equity vintage not mixed in |
| "72 of 135 financially closed projects with foreign sponsor participation (2019 data)" | dossier ✓ (ADB PPP Monitor, direct fetch) | **pass** — explicitly dated 2019; I added "still the most recent national count it has published", which the dossier supports |

**Corrections made** (2): the unsourced "twenty-five-year debt" tenor, and the unsourced "dominated by domestic investors and financiers" framing. Both detailed in the changelog.

**Negative checks — all clear**: no risk-category count ("11"/"eleven": 0 hits) · no toll-road names (Gedebage/Tasikmalaya/Cilacap/Gilimanuk/Mengwi: 0 hits) · no Rp 1.905,3 T or Rp 753 T (0 hits) · no Rp 10.303 T (0 hits) · no "33 projects" (0 hits) · no named Direksi/Komisaris/minister (0 hits) · no Danantara (0 hits) · no `institute.iigf.co.id` (0 hits) · no claim that the guarantee covers commercial risk or is a subsidy (the only "subsid" hit is the explicit negation "It is not a subsidy").

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: **55 chars**, keyword at position **0**
- [x] Meta description 140–160 — actual: **153**
- [x] Slug ≤60, kebab-case, keyword — actual: **52** — `public-private-partnership-risk-allocation-indonesia`
- [x] H1 contains keyword — "Risk Allocation in Indonesia's **Public Private Partnership**: Who Carries What"
- [x] H2 count 4–7 (playbook §3) — actual: **7** (5 body + FAQ + Conclusion)
- [x] ≥1 question-format H2 (**2**: "What is risk allocation…", "What does Indonesia's government guarantee actually cover?"); ≥1 honest/counter-conventional H2 (**1**: "What the guarantee will not do for you")
- [x] Keyword in first 100 words — appears at ~word 35, inside the lead's hub-link anchor
- [x] Definition snippet near top (40–60 words) — **58 words**, beginning at word **94**
- [x] ≥8 LSI terms — counted: **18** (risk allocation · KPBU · PJPK · Badan Usaha Pelaksana · Perpres 38/2015 · Perpres 78/2010 · PMK 68/2024 · Acuan Alokasi Risiko · termination compensation · contingent liability · guarantee and regress agreement · Viability Gap Fund · availability payment · discriminatory change of law · force majeure · financial close · political risk insurance · BUPI/IIGF)
- [x] 3 internal links (1 hub + 2 cousins) — destinations: `/public-private-partnership` (lead), `/kpbu` (H2 #1), `/pembiayaan-kreatif` (H2 #5). Three **distinct** URLs, all inline prose anchors, no "READ ALSO" callout
- [x] ≥1 external authoritative citation — actual: **3** in-body (World Bank PPP Knowledge Lab, JDIH Kemenkeu, ADB PPP Monitor) + 1 recorded in frontmatter (Fitch via Petromindo)
- [x] FAQ 5–7 Q&As — actual: **5** (band floor — flagged)
- [x] ≥1 list + ≥1 table — 1 bulleted list (four guaranteed risk families), 1 numbered list (five matrix tests), 1 table (12-row risk matrix)
- [x] Word count inside the brief's band (1.500–1.800) — actual: **1,789** (`tools/count_words.py`), frontmatter synced

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — measured: **48 · 47 · 49 · 41 · 46**. All five inside band, all before elaboration
- [x] Each body paragraph makes one independently quotable, verifiable point — three multi-point paragraphs split during this pass to satisfy it
- [x] FAQ parseable for FAQPage schema — 5 × `###` question + single-paragraph answer; answer lengths **52 · 48 · 49 · 46 · 43**, all inside 40–80
- [x] Freshness noted in the meta block — `date_modified: "2026-08-12"` added
- [x] Table is a clean citation asset — 12 rows, one claim per cell, no compound cells; the third column ("Reachable by a government guarantee?") is the row-by-row extractable differentiator

### D. PT PII framing discipline (product_matrix.md + style_guide §11)
- [x] Framed as the government-guarantee provider (BUPI) — "the Ministry of Finance's Badan Usaha Penjaminan Infrastruktur for KPBU projects"; verbs used are *appraised, structured, issued*. Never lender, investor, contractor, operator, or regulator. Not under Danantara
- [x] ≤3 PT PII self-mentions — actual: **3** (one mid-article identification aside in H2 #3, one closing positioning line, one soft CTA)
- [x] No unverifiable superlatives — 0 hits
- [x] Product names + specs match product_matrix.md / dossier — single anchor: **Penjaminan Pemerintah** (correct per the matrix for risk/bankability/PJPK topics); Pembiayaan Kreatif appears only as internal-link context, not as a second CTA
- [x] Closing uses a company_profile.md positioning line — paraphrase of "…meningkatkan kelayakan kredit proyek sekaligus memagari kewajiban kontinjensi APBN"
- [x] Soft website CTA present as the FINAL line, after the conclusion — "How these guarantees are appraised and structured for KPBU projects is set out in more detail at ptpii.co.id." Consultative, no "buy now"
- [x] Hub link is a natural inline anchor in the lead — "Most material on [Indonesia's public private partnership framework]…". No callout box
- [x] IIGF disambiguated — its single use carries "Indonesia Infrastructure Guarantee Fund", "Ministry of Finance", "Badan Usaha Penjaminan Infrastruktur" and "KPBU" in the same sentence. No route to reading it as the International Institute of Green Finance
- [x] Guarantee never framed as a subsidy or as covering the sponsor's commercial risk — stated explicitly in the negative, and the table's "No" rows carry it structurally

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: **none yet** — `articles_history/index.json` `articles` array is empty as at 2026-08-11. First article in the cluster.
- Nearest same-month neighbour: **`kpbu-03.id`** ("KPBU dan Pembagian Risiko: Siapa Menanggung Apa dalam Kontrak"), already in `final/`. Compared subtopic sets directly:
  - `kpbu-03` (id): definition/why it matters · who bears what · the 11-category official taxonomy (sourced to Simpul KPBU Kementerian PU) · how mis-allocation raises project cost · three misconceptions.
  - `ppp-01` (en): definition · risk matrix **with a guarantee-reachability column** · what the guarantee covers and the current legal chain · what it will not do (regress, cap/tenor, foreign-participation reality) · a pre-bid matrix test.
- **Subtopic overlap (Jaccard estimate): 0.25** — two of five subtopics are conceptually shared (definition, who-bears-what), three are unique. Below the 0.4 threshold.
- The tables do not collide: `kpbu-03` uses the official Indonesian taxonomy with a "Mengapa" column; `ppp-01` uses international risk-register categories with a "Reachable by a government guarantee?" column that `kpbu-03` does not have at all.
- **Verdict: distinct angle confirmed. This does not read as a translation of the Indonesian cluster** — it is built on an offshore investment committee's question, rupiah revenue exposure, the MIGA contrast, ADB foreign-sponsor data, and local-court enforcement risk, none of which appear in the domestic treatment.

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran on the **saved final**; `public-private-partnership-01.en.quality-input.json` written (EN pattern matrix auto-detected from the filename)
- [x] AI-detector score < 0.30 — actual: **0.04** (verdict: pass; thresholds revise ≥0.30, reject ≥0.50). External API not used; heuristic only
- [~] Paragraph burstiness CV ≥ 0.30 — actual: **0.332** (clears the editor threshold; below the script's own 0.45 target, logged as one low-severity flag). Sentence burstiness **1.03**; top-30 vocabulary share **0.27**

*Note on the two word counts*: `tools/count_words.py` (the pipeline's binding tool) reports **1,789**; `quality-check.ps1` reports 1,856 because it counts table-cell and markup tokens differently. The band check uses `count_words.py`.
- [ ] **Plagiarism: distinctive passages could NOT be web-checked — WebSearch budget exhausted (200/200).** I attempted one lookup and it was refused. No web verification was performed, and none is claimed.

**Plagiarism assessment on heuristic + provenance grounds only.** The scanner extracted 8 candidate passages. Assessing each by origin rather than by web match:

| # | Candidate | Assessment |
|---|---|---|
| 1 | "As at June 2026 it had guaranteed 61 projects, 38 of them KPBU, worth more than IDR 732 trillion." | PT PII's own published figure; source text is Indonesian, so this English phrasing is original. Any match would be on ptpii.co.id — ignorable by rule |
| 2 | "KPBU (*Kerja Sama Pemerintah dengan Badan Usaha*) is Indonesia's legal term for a public private partnership…" | Well-known definition — ignorable by rule |
| 3 | "…No. 78 Tahun 2010, still in force, with Peraturan Menteri Keuangan… No. 68 Tahun 2024" | Regulation titles and numbers — ignorable by rule |
| 4 | "Support pays: the Viability Gap Fund covers up to 49% of construction, equipment, and installation cost under PMK 68/2024." | The 49% figure is widely reproduced; the construction "Support pays:" is original to this draft |
| 5 | Definition snippet ("Risk allocation in a public private partnership is…") | Original composition, adapted from the dossier's own drafted snippet |
| 6 | "The [JDIH record for PMK 68 Tahun 2024](…) is the current position." | A citation sentence containing a URL |
| 7 | "Run the matrix through five tests before committing bid costs." | Original editorial framing; the five named tests are not drawn from any source in the dossier |
| 8 | "As the Ministry of Finance's Badan Usaha Penjaminan Infrastruktur, PT PII issues government guarantees intended to raise a project's creditworthiness while ring-fencing the state's contingent liabilities." | Paraphrase of a pre-approved positioning line in `company_profile.md` — client's own material, ignorable by rule |

Every factual claim in the article traces to a dossier entry with a recorded source, and no passage reproduces source wording at length: the two law-firm-derived facts (cap/tenor/fees, the three foreign-sponsor deterrents) are summarised and attributed, not quoted, and no regulation text is reproduced verbatim. On that basis I record **`plagiarism_score: 0.05`** as a provenance estimate. It is not a web-verified figure, and the flag above says so.

---

**Shipping question**: if a senior KPBU practitioner, a skeptical PJPK official, or an offshore credit analyst read this on ptpii.co.id tomorrow — would WEBARQ Promote be proud of it? Yes. The risk matrix with its guarantee-reachability column is genuinely the thing nobody else publishes; the "No" rows are stated plainly; the legal chain is current where the government's own portal is not; and every number carries its year and its scope. The one thing I cannot personally certify is the plagiarism web check, and I have flagged that rather than papered over it.
