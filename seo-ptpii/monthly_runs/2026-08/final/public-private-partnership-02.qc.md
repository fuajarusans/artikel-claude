---
brief_id: "public-private-partnership-02"
editor_run_date: "2026-08-12"
recommendation: "approve"
overall_score: 8
ai_score: 0.04
plagiarism_score: 0.10
---

# Editor QC Report — Public Private Partnership Bankability: Reaching Financial Close in Indonesia

## Recommendation
**approve**

The article clears every binding check. The risk flagged as most dangerous for this brief — putting PT PII in the financier's seat in an article written from the lender's chair — never materialised: the guarantor is consistently framed as the counterparty being credit-assessed, never as a party that prices, provides or arranges debt. All legal citations are live law (Perpres 38/2015, PMK 68/2024); no revoked instrument appears as current. Every Fitch figure matches the dossier's 12 February 2026 set, the conflicting 5 March 2026 management-attributed figures are handled as a caveat rather than an equal alternative, and the MIGA/multilateral relationship stays hedged as "being explored". I found and fixed one genuine factual error the writer missed — an unsourced claim that foreign sponsors are "a minority" sitting three paragraphs above the article's own ADB data showing 72 of 135 projects with foreign sponsor participation — plus one AI-detector burstiness failure (paragraph CV 0.292, below the 0.30 tell floor), now 0.426 with the AI score down from 0.15 to 0.04. The one thing I could not do is the web plagiarism verification: the session's WebSearch budget was exhausted (200/200) before this run, so the originality verdict on the plagiarism side rests on heuristic and structural analysis alone and is flagged as such below. I judged that disclosed gap insufficient to block, because the eight flagged passages are all either bare figure strings, client-owned content, or demonstrably original phrasing.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Zero em-dashes, zero "However/Moreover/Furthermore/Additionally", no press-release register. Reads like a credit analyst's note. |
| Factual & penjaminan infrastruktur / KPBU accuracy | 8 | One real error found and fixed (foreign-participation claim contradicting the article's own cited data). Everything else traces to the dossier. |
| On-page SEO compliance | 9 | Every count inside band; meta title 54, description 156, slug 42. |
| GEO extractability (§2a) | 9 | All five body H2s open with a measured 40–60-word answer (44–58). Definition snippet 58 words. `date_modified` added. |
| PT PII framing discipline | 9 | Exactly 3 self-mentions, guarantor framing intact throughout, no officials, no superlatives, positioning line at the close. |
| Internal linking | 10 | 3 distinct ptpii.co.id URLs, all inline, hub in the lead, zero callouts, zero institute.iigf.co.id. |
| FAQ quality | 8 | 5 Q&As, all 49–60 words. Sits at the floor of the 5–8 band by deliberate choice (see flags). |
| Originality (plagiarism + AI-detector) | 7 | AI-detector 0.04 (pass). Plagiarism web verification could not be run — heuristic only. |

## What I fixed (changelog)
- **Struck an unsourced claim that contradicted the article's own evidence.** The draft said "Foreign sponsors and lenders remain a minority here" and then, three paragraphs later, cited ADB's 72-of-135 foreign-sponsor-participation figure — which says the opposite. The dossier had explicitly flagged the "minority" framing as needing a datable source, and none was supplied. Rewrote to lead with the ADB figure and draw the sponsor-equity-versus-offshore-senior-debt distinction instead, which is accurate, dossier-grounded, and better fenced to this article's cross-border angle.
- **Dated the twelve-month clock in the body**: "Practitioner sources put the working deadline…" → "Practitioner guidance published in 2022 puts…". H2 opener stays inside the 40–60-word GEO band (53).
- **Hedged the lead's twelve-month figure** to "By market convention an Indonesian public private partnership then has about twelve months…" so a reader who skims only the lead cannot mistake it for a statutory deadline. No pasal number is asserted anywhere.
- **Labelled the guarantee tenor as indicative**: "tenor about 15 years (2022 sourcing)" → "indicative tenor around 15 years (practitioner sourcing, 2022)".
- **Depersonalised the Boser example**: "the Bogor–Serpong toll road signed its guarantee and regress agreements" → "guarantee and regress agreements for the Bogor–Serpong toll road were signed on 3 October 2025, for a scheme valued at IDR 12.351 trillion" — removes an implied actor and reads correctly.
- **Expanded BUPI on first use** — "a Badan Usaha Penjaminan Infrastruktur (BUPI)".
- **Replaced the cryptic transition** "The deadline is not the process." with "The clock is not always the binding constraint."
- **Grammar/flow**: "This works through…" → "What follows works through…"; "the design outsiders misread" → "the design that outsiders misread".
- **Rewrote the orphaned internal-link line** so the `/pembiayaan-kreatif` link reads as a deliberate editorial aside rather than a link drop, and shortened the over-long anchor to "creative financing structures" (frontmatter updated to match).
- **Removed a ~28-word near-verbatim duplication** between FAQ 1 and the H2 #2 opener; replaced with the dated SPAM Umbulan data point (30 December 2016), per style guide §8.
- **Fixed the AI-detector burstiness failure.** Paragraph word-count CV was 0.292, below the 0.30 strong-tell floor. Split three paragraphs at natural beats (zero net words): the PMK 68/2024 punchline, "Read the reasoning, not the letters.", and the step-in/convertibility pair. CV 0.292 → 0.426; AI score 0.15 → 0.04. The step-in split also fixes a GEO §2a violation — that paragraph had been making two independently quotable points.
- **Frontmatter**: added `date_modified: "2026-08-12"` (GEO §2a freshness); synced `word_count` 1692 → **1775** (the draft's own figure was wrong before any of my edits).

## What I flagged (open issues)
- ⚠️ **Plagiarism lookups were not run.** The session's WebSearch budget was exhausted (200/200) before this article's turn, so none of the eight scanner-flagged passages were web-verified. The `plagiarism_score: 0.10` is a heuristic and structural judgement, not a measured result — *recommendation*: if the curator wants a measured verdict before publishing, re-run `tools/quality-check.ps1` in a fresh session and search the eight `web_search_query` values in `public-private-partnership-02.en.quality-input.json`. My structural read of the highest-risk candidate (the Fitch rating sentence, which is inherently formulaic) is that it shares no run longer than about six words with a standard rating-action release, because it omits the company name, compresses three sentences into one and reorders the designations.
- ⚠️ **"Rupiah cannot leave Indonesia through local banks" carries no in-text vintage.** It is dossier-backed but traced to 2022 practitioner analysis. It is a structural/regulatory statement rather than a figure, so it does not breach the reference-year rule — *recommendation*: re-verify at the next content refresh rather than editing now; adding the vintage inline made the sentence clumsy and the article has only 25 words of headroom.
- ⚠️ **FAQ sits at 5, the floor of the 5–8 band.** The brief's sixth candidate ("Can a foreign lender finance an Indonesian PPP project?") was left out deliberately: the dossier's drafted answer rests on the "foreign lenders remain a minority" claim I struck plus a Perpres 10/2021 reference the dossier says not to hard-pin, and a sixth answer would breach the 1,800-word ceiling — *recommendation*: add it in a future refresh once a datable foreign-participation source exists.
- ⚠️ **Word count is 1,775 against an 1,800 ceiling.** Any curator-side or CMS-side addition will breach the band — *recommendation*: treat the text as length-locked.
- ⚠️ **The 49% VGF ceiling under PMK 68/2024 is still unconfirmed.** The FAQ handles this correctly (reports it as superseded and tells the reader to confirm the current cap) — *recommendation*: firm the answer up when a dossier can open PMK 68/2024's machine-readable text.
- ℹ️ **Tool discrepancy**: `quality-check.ps1` reports 1,822 words, `count_words.py` reports 1,775. The binding tool is `count_words.py`; the scanner appears to count frontmatter and markup.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — EN equivalent ("In today's…", "In an era of…") also absent
- [x] No press-release register ("In order to support…", "As a form of commitment…") — this client's signature failure mode; clean
- [x] No "Selain itu" / "Moreover" / "Furthermore" / "Additionally" opening ≥2 consecutive paragraphs — **zero occurrences of any of them in the article**
- [x] No "Penting untuk dicatat / It is important to note / It is worth noting"
- [x] "Dengan demikian / Therefore / Thus" not overused
- [x] Em-dash count ≤2 — **actual: 0**
- [x] Varied paragraph lengths — paragraph CV **0.426** after fix (was 0.292); sentence burstiness 0.964
- [x] Not every H2 → 3-bullet list — H2 #1 prose, #2 numbered list, #3 table, #4 prose, #5 prose + bullets
- [x] No generic claims without numbers
- [x] No stacked hype adjectives
- [x] No service-dump paragraph — one anchor only (Penjaminan Pemerintah)

### B. Factual & penjaminan infrastruktur / KPBU spot-check
| Claim | Source check | Verdict |
|---|---|---|
| PMK 68/2024, effective 18 October 2024, consolidates government guarantee + VGF + availability payment | dossier ✓ + product_matrix/company_profile ✓ + JDIH Kemenkeu linked in-text | pass |
| Perpres 38/2015 still in force as KPBU's legal basis | dossier ✓ (peraturan.go.id + peraturan.bpk.go.id) + linked in-text | pass |
| Fitch 12 Feb 2026: 'BBB' LT FC/LC, 'F2' ST, 'AAA(idn)', Stable; GRE 45/60; "Virtually Certain"; equity IDR 16.0tn → capacity IDR 191.6tn; gearing 6.5x (2025) vs 6.1x (2024), 12x ceiling | dossier ✓ (Fitch action via Petromindo) + company_profile ✓ | pass |
| Bogor–Serpong guarantee + regress agreements signed 3 October 2025, IDR 12.351 trillion | dossier ✓ (first-party ptpii.co.id) + approved project list ✓ | pass |
| Portfolio 61 projects, 38 KPBU, > IDR 732 trillion as at June 2026 | dossier ✓ + company_profile ✓ (supersedes the hub's stale 33) | pass |
| SPAM Umbulan financial close 30 December 2016, IDR 4.51 trillion, six months early | dossier ✓ (Kemenko Perekonomian) + approved project list ✓ | pass |
| ADB PPP Monitor: 135 projects, USD 63,464 million, 72 with foreign sponsor participation, 2019 vintage | dossier ✓ — **figures correct, but the draft's surrounding interpretation ("foreign sponsors remain a minority") contradicted them** | **fail → fixed in place** |

**Revoked-regulation sweep**: PMK 260/PMK.011/2010, PMK 8/PMK.08/2016, PMK 170/PMK.08/2018, PMK 223/PMK.011/2012 — **none appear anywhere in the article**. The FAQ references the 49% ceiling only as "reported under a regulation superseded in 2024" and tells the reader to confirm the current cap. Perpres 38/2015 and PMK 68/2024 are the only instruments cited as current, both confirmed in force.
**Named-official sweep**: no personal names anywhere. Only institutions appear (Ministry of Finance, Coordinating Ministry for Economic Affairs, Fitch Ratings, ADB). The two names that surfaced in research did not creep back.
**Reference-year sweep**: every figure carries a year and a scope — Fitch set (12 Feb 2026, end-2025 balance sheet), portfolio (June 2026), Boser (3 Oct 2025), Umbulan (30 Dec 2016), ADB (2019 vintage), tenor (practitioner sourcing 2022), twelve-month clock (2022 practitioner guidance).
**Hedging sweep**: the conflicting 5 March 2026 management figures are noted as differing from the Fitch set, not presented as equally current; multilateral cooperation is "described in March 2026 as being explored, not concluded".

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: **54 chars / keyword at position 0**
- [x] Meta description 140–160 — actual: **156**
- [x] Slug ≤60, kebab-case, keyword — actual: **`public-private-partnership-financial-close` (42)**
- [x] H1 contains keyword
- [x] H2 count 4–7 (playbook band) — actual: **7** (5 body + FAQ + Conclusion)
- [x] ≥1 question-format H2 (2: "What makes a public private partnership bankable?", "Who actually stands behind the government's obligations?"); ≥1 honest/counter-conventional ("Why a guarantee will not rescue a weak project")
- [x] Keyword in first 100 words — appears at word ~9
- [x] Definition snippet near top (40–60 words) — **58 words**, at ~word 110
- [x] ≥8 LSI terms — counted: **~18** (bankability, financial close, project finance, lender diligence, availability payment, Viability Gap Fund, termination compensation, step-in rights, conditions precedent, security package, perfection, KPBU, PJPK, BUPI, regress, gearing, government-related entity, convertibility)
- [x] 3 internal links (1 hub + 2 cousins) — destinations: `/public-private-partnership` (lead), `/kpbu`, `/pembiayaan-kreatif` — 3 distinct URLs, all inline
- [x] ≥1 external authoritative citation — actual: **2 hyperlinked** (peraturan.go.id, jdih.kemenkeu.go.id) **+ 3 named in-text attributions** (Fitch Ratings, Coordinating Ministry for Economic Affairs, ADB PPP Monitor)
- [x] FAQ 5–7 Q&As — actual: **5** (each 49–60 words)
- [x] ≥1 list + ≥1 table — 7-step numbered sequence, 3-bullet list, 7-row diligence table
- [x] Word count inside the brief's band (1,500–1,800) — actual: **1,775** (`tools/count_words.py`)

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — measured: **56 / 53 / 44 / 58 / 55** words; the Conclusion opener is also 47
- [x] Each body paragraph makes one independently quotable, verifiable point — one violation found (step-in + convertibility in a single paragraph) and split
- [x] FAQ parseable for FAQPage schema (`### question` + single answer block); freshness noted — `date_modified: "2026-08-12"` added to the meta block

### D. PT PII framing discipline (product_matrix.md + style_guide §11)
- [x] Framed as the government-guarantee provider (BUPI) under the Ministry of Finance — **not** a lender, investor, contractor, operator or regulator; Danantara never mentioned. Verified sentence by sentence in the two highest-risk sections (the financing sequence and the guarantor assessment): the guarantee/regress step is described as documentation the guarantor signs, and the company appears strictly as a rated counterparty being assessed.
- [x] ≤3 PT PII self-mentions — actual: **3** (full legal name + IIGF introduction in H2 #4; "PT PII" in the conclusion; ptpii.co.id in the CTA). The three `ptpii.co.id` internal-link URLs are anchors, not brand mentions.
- [x] No unverifiable superlatives — "the only state-owned company mandated to provide government guarantees for KPBU projects" is the pre-approved factual claim from `company_profile.md`, not a marketing superlative
- [x] Product names + specs match product_matrix.md / dossier — one anchor only (Penjaminan Pemerintah); Viability Gap Fund, availability payment and regress all described per the dossier
- [x] Closing uses a company_profile.md positioning line (creditworthiness raised while APBN contingent liabilities stay ring-fenced)
- [x] Soft website CTA is the FINAL line, after the conclusion, consultative in tone
- [x] Hub link is a natural inline anchor in the lead; no "READ ALSO" callouts anywhere
- [x] Guarantee never implied to cover the sponsor's commercial risk or to be a subsidy — H2 #5 states both negations explicitly
- [x] IIGF disambiguated with infrastructure / KPBU / Ministry of Finance context adjacent

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: **none yet** — `articles_history/index.json` carries an empty `articles` array; this is the first run.
- Overlap vs sibling `public-private-partnership-01` (risk allocation): **~0.11**. One adjacent pair — ppp-01's "What the guarantee will not do for you" against this article's "Why a guarantee will not rescue a weak project". ppp-01 argues the coverage boundary; ppp-02 argues bankability as a whole-package property and adds regress and foreign-participation material. Distinct.
- Overlap vs sibling `public-private-partnership-03` (MIGA/MDB/ECA comparison): **~0.06**. This article's only multilateral reference is the hedged "being explored" caveat. Distinct.
- Overlap vs `pembiayaan-infrastruktur-03` (id, also a lender's view): **~0.43 at concept level** — financial close, a lender-diligence checklist and "the guarantee does not cure everything" appear in both. **However**, SERP overlap is effectively zero: different language, different primary keyword, different hub. This article is properly fenced to the cross-border seat (rupiah revenue against hard-currency debt service, offshore transfer of rupiah, security perfection under Indonesian law, the guarantor's international rating, foreign sponsor participation, enforcement in local courts) — none of which the Indonesian article's domestic framing occupies.
- Verdict: **distinct angle confirmed**. Flagging the ID/EN lender-view adjacency to the strategist as a pattern to keep fenced in future months, not as a blocking issue for this article.

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran; `public-private-partnership-02.en.quality-input.json` written to `final/`
- [x] AI-detector score < 0.30 — actual: **0.04** (first pass 0.15; re-run after the burstiness fix). Verdict: pass. One remaining flag is `paragraph-low-variance` at **low** severity only.
- [x] Paragraph burstiness CV ≥ 0.30 — actual: **0.426** (was 0.292, below the strong-tell floor; fixed and re-measured). Sentence burstiness 0.964; top-30 vocabulary share 0.229.
- [ ] **Plagiarism: distinctive passages NOT web-checked — the session's WebSearch budget was exhausted (200/200) before this run.** No lookup was attempted and none is claimed. Eight candidate passages were extracted and assessed structurally instead:
  - Three are bare figure strings whose numbers are unavoidable facts (ADB dataset; portfolio 61/IDR 732tn; SPAM Umbulan value and date) — figures are not copyrightable expression, and the phrasing around them is the writer's own.
  - Two are client-owned or cited-authority content, excluded by rule (PT PII's legal name and IIGF equivalence; the PT PII portfolio figure).
  - Two are demonstrably original phrasing ("puts money in… puts nothing in unless something goes wrong"; "The signing ceremony is the easy part.").
  - One is the inherently formulaic Fitch rating sentence — the highest structural risk. It omits the company name, compresses three release sentences into one and reorders the designations, so the longest plausible shared run is roughly six words ("long-term foreign- and local-currency"), well under the 20-word threshold. Rating designations are unavoidable technical terms, and Fitch is a cited authoritative source, which the rule excludes in any case.
  - **`plagiarism_score: 0.10` is therefore a heuristic judgement, not a measured result.** Recorded as an open flag above.
