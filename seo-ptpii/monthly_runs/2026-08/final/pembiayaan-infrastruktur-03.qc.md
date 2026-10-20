---
brief_id: "pembiayaan-infrastruktur-03"
editor_run_date: "2026-08-12"
recommendation: "approve"
overall_score: 9
ai_score: 0.00
plagiarism_score: 0.08
---

# Editor QC Report — Pembiayaan Infrastruktur: Yang Dinilai Lender Sebelum Dana Cair

## Recommendation
**approve**

The draft arrived unusually clean on the two dimensions that were flagged as highest-risk. The PT PII framing survives a sentence-by-sentence pass through the credit-committee material: nowhere is PT PII cast as a lender, arranger, investor, contractor, operator, or regulator, and nowhere does it price, provide, or arrange debt — the guarantee is consistently described as *moving government-side risk out of the lender's calculation*, which is the correct mechanism. The honest section's evidence architecture is intact: the boundary statement carries its sourced backing, the itemised "what a guarantee does not cure" list is explicitly disowned as reasoned inference, and the MIGA parallel sits on the boundary principle rather than on the list. All four numeric traps were avoided by the writer and stayed avoided — no Fitch capacity or gearing figure, no CNBC figures alongside the Fitch set, no DSCR threshold, no tenor in years, no basis-point claim (the article explicitly warns readers off unsourced bp claims). I fixed eight things in place: one GEO opener that measured 39 words, an unglossed EPC acronym, an idiom wobble in the lead, a missing reference year on a Kemenkeu attribution, imprecise Fitch rating-scale wording, a portfolio figure lacking scope, a citation that implied a regulation described a facility's functions, and the stale frontmatter word count. Originality is clear on the heuristic scan (AI 0.00, no flags, paragraph burstiness 0.46). The one honest limitation: the plagiarism web lookup could not be run — the session's WebSearch budget was exhausted (200/200) and the tool refused the call — so the plagiarism verdict rests on heuristic output plus a manual longest-verbatim-run analysis against the known cited sources, not on live lookups. That is documented rather than papered over, and given the longest common run against any cited source is 8 words of standard regulatory terminology inside an inline-attributed sentence, it does not hold up the commit.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Zero hits on every §5 pattern. Paragraphs run 1–4 sentences (88/44/28/41/36/43/40/46/24/26/50/39/50/44/7/54/59/91/18 words). Em-dash count 1. Lead opens on a concrete stall, not a generic era-opener. |
| Factual & penjaminan infrastruktur / KPBU accuracy | 9 | 7 dated data points, all dossier- or knowledge-base-sourced. All four flagged number traps avoided. PMK 68/2024 cited; revoked PMK 180/2020 correctly absent. |
| On-page SEO compliance | 9 | Every checklist item passes. H2 count 7 sits at the playbook ceiling (4–7) — acceptable, not padded. |
| GEO extractability (§2a) | 9 | All five body H2 openers now 43–46 words (one was 39 before my fix). Definition snippet 44 words in the first ~110. FAQ is FAQPage-parseable; `date_modified` added. |
| PT PII framing discipline | 9 | The batch's highest-risk article, and it holds. 3 mentions incl. CTA. Fitch mention reframed to name Kemenkeu as sole shareholder, reinforcing the SMV placement. |
| Internal linking | 10 | Exactly 3 distinct ptpii.co.id URLs, all inline with descriptive anchors, hub in the lead. Zero "BACA JUGA". Zero institute.iigf.co.id. |
| FAQ quality | 8 | 6 Q&As at 43–47 words each — inside the band, but one short of the brief's 7. |
| Originality (plagiarism + AI-detector) | 9 | AI 0.00, zero flags. Plagiarism assessed heuristically only — web lookup unavailable. |

## What I fixed (changelog)
- **GEO band failure** — the direct answer under `## Sinyal bahaya di mata komite kredit dan akibatnya` measured **39 words**, one short of the 40–60 band. Rewrote to **46 words** without changing the claim.
- **Unglossed acronym** — "kontraktor EPC" appeared twice with no first-use expansion (style_guide §3 requires it). Added "(*engineering, procurement, and construction*)" at first use.
- **Evidence-framing hardening (honest section)** — "Pola serupa berlaku secara internasional:" was ambiguous about *what* MIGA backs; a fast reader could take it as sourcing the itemised list. Changed to "**Yang punya rujukan lintas negara adalah garisnya, bukan daftarnya:**", which pins the citation to the boundary principle and leaves the list explicitly unsourced, as intended.
- **Regulation-citation precision** — "(PMK No. 68 Tahun 2024)" attached to a functional description of Fasilitas Penyiapan Proyek implied the PMK contains that description. Changed to "(dasar hukum: PMK No. 68 Tahun 2024)".
- **Missing reference year** — "Kementerian Keuangan menyebutnya *credit enhancing product*…" → "Kementerian Keuangan **(2026)** menyebutnya…".
- **Fitch precision + entity clarity** — "peringkat PT PII pada BBB internasional dan AAA(idn) nasional" was loose about Fitch's two scales and used the short form on first mention. Now: full entity name on first mention, "BBB untuk skala internasional dan AAA(idn) untuk skala nasional", date leading the sentence, and the sentence split into three so a 48-word comma-chain became short/long/medium. Added "sepenuhnya dimiliki negara melalui Kementerian Keuangan" — accurate per dossier, and it quietly reinforces the correct institutional placement.
- **Figure scope** — "penjaminan itu melekat pada 61 proyek" conflated the KPBU and non-KPBU portfolios. Now: "portofolio penjaminannya mencakup 61 proyek, **38 di antaranya berskema KPBU**, dengan nilai proyek lebih dari Rp 732 triliun" (reference date "per publikasi resmi Juni 2026" retained).
- **Idiom** — "Artikel ini **menulis** pembiayaan infrastruktur dari seberang meja" (unidiomatic; "menulis" needs "tentang") → "**membedah**". Keyword position unchanged.
- **Frontmatter** — `word_count` corrected 1680 → **1647** (verified with `tools/count_words.py`); added `date_modified: "2026-08-12"` for GEO freshness; converted `secondary_keywords` to the block-list form the rest of this month's finals use.

## What I flagged (open issues)
- ⚠️ **Plagiarism web lookup could not be run.** WebSearch returned "this session has used its web search budget (200 of 200)". *Recommendation*: the `plagiarism_score: 0.08` is a heuristic + manual-analysis figure, not a lookup result. If the curator wants a live check before publishing, re-run the 8 queries in `pembiayaan-infrastruktur-03.id.quality-input.json` in a fresh session. My read is that this is low-risk (see §F).
- ⚠️ **SPAM Umbulan figures are medium-high confidence.** The dossier confirms 30 Desember 2016 / Rp 4,51 triliun / six months early via cross-team verification, but the researcher could not find a page displaying the number directly. *Recommendation*: leave as-is (the article hedges it correctly as "contoh yang layak dipelajari, bukan patokan"), but re-verify if this article is ever refreshed.
- ⚠️ **FAQ has 6 Q&As, brief specified 7.** The dropped question ("Apa saja yang dinilai *lender* dalam uji tuntas proyek?") is fully answered by body H2 #2's numbered list, so adding it would duplicate. *Recommendation*: accept — it is inside the 5–8 playbook band and duplication would hurt more than the missing entry.
- ⚠️ **The "what a guarantee does not cure" list must never acquire a citation.** It is reasoned inference and is currently framed as such in two places. *Recommendation*: flag this for any future refresh — attaching a source to that list would convert a defensible editorial position into an unsupported factual claim.
- ⚠️ **~0.27–0.43 concept overlap with the EN `public-private-partnership-02`.** Recorded, no action needed this month (see §E). *Recommendation*: the strategist should not commission a third financial-close/lender-diligence article in either language without a genuinely new axis.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — 0 hits each
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — 0 occurrences in the entire article
- [x] No "Penting untuk dicatat / dipahami bahwa" — 0 hits
- [x] "Dengan demikian" not overused — 0 hits
- [x] Em-dash count ≤2 — **1**
- [x] Varied paragraph lengths — 1–4 sentences; word lengths 7 to 91; paragraph burstiness CV **0.462**
- [x] Not every H2 → 3-bullet list — H2 #1 prose only, #2 prose + numbered list, #3 prose + bullets, #4 prose + table, #5 prose + bullets
- [x] No generic claims without numbers — 7 dated data points
- [x] No stacked hype adjectives — 0 instances of canggih/terdepan/komprehensif-stacking
- [x] No service-dump paragraph — one anchor only (Penjaminan Pemerintah); no product list
- [x] **No press-release register** (this client's signature failure mode) — 0 instances of "Dalam rangka…", "Sebagai wujud komitmen…"

### B. Factual & penjaminan infrastruktur / KPBU spot-check
| Claim | Source check | Verdict |
|---|---|---|
| *Financial close* sits at the end of the transaction stage, after the PKS is signed and conditions precedent are met, before construction (Kemenkeu/Kantor Bersama KPBU, 2026) | dossier ✓ (triangulated across 3 pages, 2 domains, confidence high) | pass |
| Debt dominates KPBU project financing at 70–80% of project cost (Kementerian Keuangan, 2026) | dossier ✓ verbatim quote from the linked kpbu.kemenkeu.go.id page | pass |
| PMK No. 68 Tahun 2024 Pasal 75 requires BUPI to publish an annual Acuan Alokasi Risiko | product_matrix ✓ / company_profile.md legal table ✓ (in force: ditetapkan 24 Sep 2024, berlaku 18 Okt 2024) | pass |
| Fitch affirmed BBB (international scale) / AAA(idn) (national scale), Outlook Stabil, 12 Februari 2026 | company_profile.md scale table ✓ + dossier ✓ | pass |
| Portfolio: 61 proyek, 38 of them KPBU, project value > Rp 732 triliun, per publikasi resmi Juni 2026 | dossier ✓ (fetched from ptpii.co.id/informasi-proyek) + company_profile ✓ | pass |
| SPAM Umbulan reached *financial close* 30 Desember 2016, Rp 4,51 triliun, six months early | dossier ✓ (cross-team verified; medium-high — see flags) | pass with flag |
| MIGA political-risk cover is limited to breach of contract, currency inconvertibility/transfer restriction, and war/civil disturbance | dossier ✓ (fetched miga.org/what-we-offer) | pass |
| Fasilitas Penyiapan Proyek legal basis = PMK 68/2024 | company_profile ✓ — **revoked PMK 180/PMK.08/2020 correctly absent** despite still appearing on the Kemenkeu portal | pass |

**Number traps — all four cleared:**
- Fitch capacity (Rp 191,6 triliun) and gearing (6,5x): **absent**. No sentence invites the reader to derive one from the other. ✓
- CNBC 5 Maret 2026 figures (Rp 17,5 T equity / Rp 115 T capacity): **absent**. ✓
- DSCR threshold: **absent**. Specific tenor in years: **absent** (tenor discussed only qualitatively, "lebih pendek dari masa konsesi"). Basis-point reduction: **absent** — the article states outright that no standard figure exists and that unsourced bp claims should be avoided. ✓
- Every figure carries a reference year **and** scope (70–80% labelled as project-level; the Fitch set labelled by rating scale; portfolio labelled by publication date and KPBU/non-KPBU split). ✓

**Named officials:** none. Institutional framing throughout ("komite kredit", "Kementerian Keuangan", "manajemen"). ✓
**No party disparaged; no project asserted to have been refused financing.** The article diagnoses patterns; the only named project (Umbulan) is a positive example, hedged. ✓

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: **58 chars / keyword at position 0**
- [x] Meta description 140–160 — actual: **148**
- [x] Slug ≤60, kebab-case, keyword — actual: `pembiayaan-infrastruktur-penilaian-lender` (**41**)
- [x] H1 contains keyword — "Pembiayaan Infrastruktur: Yang Dinilai Lender Sebelum Dana Cair"
- [x] H2 count 4–7 — actual: **7** (5 body + FAQ + Kesimpulan)
- [x] ≥1 question-format H2 (#1 and #3); ≥1 honest/counter-conventional H2 (#5)
- [x] Keyword in first 100 words — yes, sentence 4 of the lead
- [x] Definition snippet near top — **44 words**, inside the first ~110
- [x] ≥8 LSI terms — counted **14+**: financial close · conditions precedent · bankability · uji tuntas · komite kredit · biaya dana · premi risiko · alokasi risiko · credit enhancing product · creditworthiness · project financing · availability payment · BUP · PJPK
- [x] 3 internal links (1 hub + 2 cousins) — `/pembiayaan-kreatif` (lead) · `/kpbu` (H2 #2) · `/public-private-partnership` (H2 #3); 3 distinct URLs, all inline
- [x] ≥1 external authoritative citation — actual: **2** (kpbu.kemenkeu.go.id, miga.org)
- [x] FAQ 5–7 Q&As — actual: **6** (43, 47, 43, 45, 44, 44 words)
- [x] ≥1 list + ≥1 table — 1 numbered list, 2 bullet lists, 1 five-row table
- [x] Word count inside the brief's band (1.500–1.800) — actual: **1.647** (`tools/count_words.py`)

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — measured: **44 / 43 / 46 / 46 / 44 words**. The fourth was 39 before my fix.
- [x] Each body paragraph makes one independently quotable, verifiable point — the red-flag table and the six-item list both stand alone if lifted row-by-row
- [x] FAQ parseable for FAQPage schema (`### question` + single answer paragraph); **`date_modified: "2026-08-12"` added** to the meta block

### D. PT PII framing discipline (product_matrix.md + style_guide §11)
- [x] PT PII framed as the government-guarantee provider (BUPI) — **verified line by line through the credit-committee sections**, which was the flagged risk. The guarantee is always described as *moving government-side risk out of the lender's calculation*, never as providing, pricing, or arranging debt. The three instances of "membiayai" refer to (a) Fasilitas Penyiapan Proyek financing project *preparation*, (b) the FAQ question "siapa yang membiayai proyek pada skema KPBU", answered as **Badan Usaha Pelaksana**, and (c) the statement that KPBU projects are **not** financed directly by the APBN or the sponsor's balance sheet. None attaches financing to PT PII.
- [x] Not framed as investor, contractor, operator, or regulator — 0 instances
- [x] Not under Danantara — 0 mentions; Kemenkeu ownership stated explicitly
- [x] ≤3 PT PII self-mentions — actual: **3** (H2 #5 Fitch aside, `## Kesimpulan` positioning line, CTA)
- [x] No unverifiable superlatives — 0 instances of terbaik/nomor satu/paling
- [x] **Never implies the guarantee covers commercial risk or is a subsidy** — stated as a negative twice in the body and once in the FAQ; "bukan subsidi" appears twice, both as negations
- [x] Product names + specs match product_matrix / dossier — one anchor only (Penjaminan Pemerintah); no service-dump
- [x] Closing uses a company_profile.md positioning line — the pre-approved "meningkatkan kelayakan kredit proyek sekaligus memagari kewajiban kontinjensi APBN", used once
- [x] Soft website CTA present as the FINAL line, after `## Kesimpulan` — "Pemetaan risiko sisi pemerintah yang dapat dijamin pada sebuah proyek KPBU dapat Anda telusuri lebih jauh di ptpii.co.id." Consultative, not transactional.
- [x] Hub link as a natural inline anchor in the lead — yes, no "BACA JUGA" callout anywhere
- [x] Zero links to institute.iigf.co.id — confirmed 0

**Cluster boundary (BOUNDARY instruction):** held. The article contains **0** occurrences of "regres", "pra-konstruksi", and "tiga tahap" — the guarantee's three stages, recourse rights, and the detailed covered/not-covered map stay with the "Jaminan Pemerintah" cluster. H2 #5 *states* the boundary without dissecting it, which is the single permitted exception. The pemda/APBD angle ("Pembiayaan Kreatif" territory) does not appear; the national funding-gap framing (`-01`) does not appear; DSCR/gearing/tenor-as-a-topic (`-02`) does not appear.

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: **none yet** — `articles_history/index.json` has an empty `articles[]`; this is the first cohort.
- Same-keyword siblings this month (the ones that matter for cannibalization):
  - vs `pembiayaan-infrastruktur-02` (same keyword, same hub): Jaccard ≈ **0.10**. `-02` owns corporate-vs-project-finance, the three-route comparison, and the ratios that decide project finance; `-03` owns the lender's diligence, cost-of-fund premium mechanics, and the red-flag table. The final `-03` contains no DSCR, no gearing, and no tenor figure, so the split is clean rather than merely declared.
  - vs `pembiayaan-infrastruktur-01`: Jaccard ≈ **0.00** — national funding map, no shared subtopic.
- Cross-hub, cross-language: vs the English `public-private-partnership-02`, my subtopic Jaccard is **0.27** (3 shared of 11 union: financial close, lender diligence, "a guarantee won't rescue a weak project"); the sibling editor's looser concept measure was **~0.43**. Both sit at or under the 0.4 line. SERP overlap is effectively **zero** — different language, different primary keyword, different hub, different reader (Indonesian credit committee vs international PPP counterpart), and the two treat the shared ground differently: `-03` is diagnostic (red-flag → consequence → remedy, premium mechanics), while `ppp-02` is sequential (the clock to financial close) and institutional (who stands behind the obligations, which `-03` deliberately avoids).
- **Verdict: distinct angle confirmed.** No strategist re-spin needed. Recorded so the split stays deliberate: a third article on financial close / lender diligence in either language needs a genuinely new axis (e.g. post-construction refinancing, or the ecosystem player map — both already reserved in the brief's "notes for future strategist runs").

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran on the **saved final**; `pembiayaan-infrastruktur-03.id.quality-input.json` written (re-run after the last edit)
- [x] AI-detector score < 0.30 — actual: **0.00**, verdict `pass`, **0 flags**, `external_api_used: false`
- [x] Paragraph burstiness CV ≥ 0.30 — actual: **0.462** (sentence burstiness 0.815; top-30 vocab share 0.303)
- [ ] **Plagiarism: distinctive passages web-checked — NOT RUN.** WebSearch refused the call: *"this session has used its web search budget (200 of 200 WebSearch calls)"*. I am not claiming a lookup I could not run. The 8 candidate queries remain in the quality-input JSON for a fresh session.
  - **Substitute analysis performed:** I computed the longest common verbatim word-run between the final and every source string the dossier records verbatim. Results — Kemenkeu lender-criteria sentence: **8 words** ("kelayakan teknis kelayakan finansial dan kelayakan kredit proyek", standard regulatory terminology, inside a sentence that names and links Kementerian Keuangan inline); Kemenkeu debt-ratio sentence: **3 words**; Kemenkeu *credit enhancing* essay: **4 words**; MIGA product page: **1 word**; company_profile boundary line: **6 words**.
  - **Verdict on the available evidence:** no run approaches the 20-word threshold, there are no whole-paragraph lifts, and the two passages closest to their sources are both inline-attributed to the authoritative source they came from — the explicitly exempt category. The remaining candidates are either the article's own original lead, or factual data points (dates, values) whose phrasing is ours.
  - **plagiarism_score: 0.08** — heuristic + manual analysis, **degraded mode**, not a live-lookup result.

## The shipping question
Would a senior KPBU practitioner, a skeptical PJPK official, and a credit analyst all read this without wincing? Yes. The credit analyst gets a diagnosis of their own process that is recognisably right and refuses to hand them a fake DSCR threshold or a fake basis-point saving. The PJPK official gets the red-flag table and the uncomfortable line that a project can clear every administrative KPBU requirement and still fail commercial diligence. And the guarantee is sold honestly — by naming its limits first, which is exactly the section a skeptical reader checks. WEBARQ Promote would be proud of it.
