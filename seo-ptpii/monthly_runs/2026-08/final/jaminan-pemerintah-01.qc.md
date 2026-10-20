---
brief_id: "jaminan-pemerintah-01"
editor_run_date: "2026-08-12"
recommendation: "approve"
overall_score: 9
ai_score: 0.08
plagiarism_score: 0.10
---

# Editor QC Report — Jaminan Pemerintah Proyek KPBU: Apa yang Dijamin dan Tidak

## Recommendation
**approve**

The draft arrived in unusually good shape: zero mechanical AI tells, zero em-dashes, correct legal citations (Perpres 78/2010 + PMK 68/2024, with the revoked 2010/2016 pair correctly excluded and the portal-lag caveat stated), all five disambiguation signals in place, and the "guarantee ≠ subsidy, guarantee ≠ commercial risk" spine holding from lead to FAQ. Nine fixes were applied in place. Two were substantive: an unsupported claim about the *contents* of the 2025 Acuan Alokasi Risiko (a PDF the researcher could not open — dossier Flag §3) and an FAQ that duplicated sibling `-03`'s dedicated "bukan subsidi" H2 while carrying a second hak-regres mention, breaching the brief's binding boundary. Both are now corrected, and hak *regres* survives as exactly one line. The remaining items were precision and rhythm work. Originality clears on heuristics (AI-detector 0.08, well under the 0.30 revise line); the plagiarism leg is degraded — see the flag below — but every distinctive passage is either in-text attributed, PT PII first-party, or a regulation title, and offline comparison against the source sentences the dossier quotes verbatim shows a maximum 6-word identical run against a 20-word threshold.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Concrete *term sheet* scene as the hook; no press-release register — the client's signature failure mode. 0 em-dashes, 0 banned openers, 0 "Selain itu"/"Penting untuk dicatat". Paragraph CV lifted 0.355 → 0.427. |
| Factual & penjaminan infrastruktur / KPBU accuracy | 9 | 6 claims spot-checked; 5 pass as drafted, 1 over-claimed and corrected. Every figure carries year + scope. |
| On-page SEO compliance | 9 | Every checklist item passes. Meta title 48 chars with keyword at position 0; description 151. |
| GEO extractability (§2a) | 9 | All five H2 answers land 41–46 words; definition snippet 51 words at ~word 100; all six FAQ answers 46–57 words. `date_modified` added. |
| PT PII framing discipline | 10 | Exactly 3 prose self-mentions. Penjamin/BUPI/SMV Kemenkeu only. No Danantara, no officials, no superlatives, no service-dump. |
| Internal linking | 10 | 3 distinct ptpii.co.id URLs, all inline, hub in the lead, no "BACA JUGA", zero institute.iigf.co.id. |
| FAQ quality | 9 | 6 Q&As, all in the 40–80-word band; one swapped to remove a duplicate of sibling `-03`. |
| Originality (plagiarism + AI-detector) | 8 | AI-detector 0.08 (pass). Plagiarism assessed on heuristics + offline source comparison only — no live web lookup was available. |

## What I fixed (changelog)
- **Corrected an unsupported document claim (dossier Flag §3).** "Acuan Alokasi Risiko terbit tahunan dari BUPI ... edisi 2025 mencakup antara lain sektor jalan, air minum, kesehatan, dan telekomunikasi" asserted the *contents* of a PDF the researcher explicitly could not open, and "terbit tahunan" contradicts the observed edition gaps (2019, 2022, 2023, 2025). Rewritten to: publication is public and mandated by PMK 68/2024; the sectors are what the **official page** lists; 2025 is the latest recorded combined edition.
- **Removed a boundary breach into sibling `-03`.** Replaced FAQ "Apakah jaminan pemerintah sama dengan subsidi infrastruktur?" — which duplicated `-03`'s dedicated H2 *and* its own FAQ on the same primary keyword, and carried a second hak-*regres* mention — with "Apakah cakupan jaminan pemerintah sama untuk semua proyek KPBU?", which is squarely inside this article's coverage-boundary remit. Hak *regres* now appears exactly **once**, as the one-line marker in the table's operasi row. The "bukan subsidi" boundary survives as the single sanctioned sentence in H2 #4 plus a clause in the new FAQ.
- **Removed a land-acquisition implication from an extractable unit.** FAQ #5 read "pra-konstruksi termasuk perizinan dan penyiapan lahan". FAQ answers get lifted standalone by AI engines, stripping them of H2 #3's caveat, so this could be read as "land prep is guaranteed" — which is brief-sourced only (dossier Flag §4). Now reads "pra-konstruksi, konstruksi, dan operasi ... keterlambatan persetujuan dan perizinan pada tahap awal".
- **Completed the Perpres 78/2010 title** to "...dalam Proyek Kerja Sama Pemerintah dengan Badan Usaha yang Dilakukan Melalui Badan Usaha Penjaminan Infrastruktur" and split the over-long sentence in two.
- **Made the portal-lag caveat land where it counts.** "Sejumlah portal resmi" → "Sejumlah portal resmi, **termasuk laman Kementerian Keuangan yang dirujuk di atas**" (dossier confirms `kpbu.kemenkeu.go.id` still shows the old PMK pairing). Pre-empts the reader who clicks our own citation and sees the revoked regulation. Added the practical consequence the paragraph promised but did not deliver.
- **Softened an unearned track-record implication.** FAQ #6: co-guarantee "dipakai untuk proyek berskala besar" → "tersedia untuk", per dossier Flag §8 (never imply a claim/mechanism has actually been exercised).
- **Added the missing LSI term `bankability`** — listed in `secondary_keywords` but absent from the body. Placed self-glossing in the lead: "menentukan *bankability* proyek, apakah *lender* mau masuk dan berapa tenor yang ditawarkan."
- **Rhythm and EYD.** "Tabel berikut sintesis..." → "Tabel berikut **adalah** sintesis..."; split a run-on in H2 #4 into two sentences; pulled "Jaminan pemerintah bekerja di atas pembagian risiko itu, bukan menggantikannya" into its own one-line paragraph (quotable standalone + variance); reduced the lead from 5 colons to 2; clarified the dangling referent in "Prinsip ini juga bukan kekhasan Indonesia" → "Pembatasan semacam ini".
- **Frontmatter:** `word_count` 1655 (writer's estimate) → **1640** (`count_words.py`, verified); added `date_modified: "2026-08-12"` for GEO freshness (§2a).

## What I flagged (open issues)
- ⚠️ **Plagiarism leg ran degraded — no live web verification.** The session's WebSearch budget was exhausted (200/200) before this run, and every lookup returns a hard budget error. I did **not** run any of the 8 candidate queries. The `plagiarism_score: 0.10` rests on (a) heuristic extraction and (b) offline comparison against the two source sentences the dossier quotes verbatim (see §F). *Recommendation*: if a paid plagiarism API is ever wired to `PLAGIARISM_API_KEY`, re-run this article; otherwise accept the residual risk, which I assess as low for the reasons in §F.
- ⚠️ **3 external links where `seo_playbook.md` §3 says 1–2.** Editor's call: **keep all three.** Each backs a distinct load-bearing claim that a skeptical reader will want to verify independently — the canonical definition (Kemenkeu portal), the current implementing regulation (JDIH PMK 68/2024), and the 11-category taxonomy (SIMPUL KPBU). Demoting any one would weaken the article's core differentiator, which is legal precision against a SERP full of stubs. Documented as a deliberate deviation, not an oversight.
- ⚠️ **`date_modified` is not in the `style_guide.md` §7 frontmatter template**, but §2a requires freshness in the meta block. I added it here; sibling drafts in this batch do not have it. *Recommendation*: standardize across the batch or add the field to the §7 template — a curator-level decision, not a blocker.
- ⚠️ **Batch-level, not blocking: sibling `-02` H2 "Kapan jaminan pemerintah TIDAK akan menyelesaikan masalah Anda" sits adjacent to this article's "Apa yang TIDAK dijamin".** Different questions (wrong-instrument vs out-of-coverage) on the same primary keyword. This article stays inside its lane; worth a look from whoever edits `-02`.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — 0 hits
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — 0 hits anywhere
- [x] No "Penting untuk dicatat / dipahami bahwa" — 0 hits
- [x] "Dengan demikian" not overused — 0 hits
- [x] Em-dash count ≤2 — **actual: 0**
- [x] Varied paragraph lengths — paragraph CV 0.427 after fix (was 0.355); mixes 1-sentence and 5-sentence paragraphs
- [x] Not every H2 → 3-bullet list — H2 #1 prose · #2 table · #3 4 bullets · #4 prose · #5 numbered list
- [x] No generic claims without numbers — every figure carries year + scope
- [x] No stacked hype adjectives — 0 hits on canggih/terdepan/revolusioner/seamless/terbaik
- [x] No service-dump paragraph — one anchor only (Penjaminan Pemerintah)
- [x] No press-release register — 0 hits on "Dalam rangka" / "Sebagai wujud komitmen"

### B. Factual & penjaminan infrastruktur / KPBU spot-check
| Claim | Source check | Verdict |
|---|---|---|
| Perpres No. 78 Tahun 2010, ditetapkan 21 Desember 2010, status berlaku per 2026 | dossier ✓ (peraturan.go.id, diakses 2026-08-12) + `company_profile.md` ✓ | **pass** |
| PMK No. 68 Tahun 2024 ditetapkan 24 September 2024, mencabut tujuh PMK lama termasuk juklak penjaminan 2010 | dossier ✓ (JDIH Kemenkeu) + `company_profile.md` ✓ | **pass** — and the article correctly does **not** cite PMK 260/2010 or PMK 8/2016 as live law |
| 11 kategori risiko = kerangka **nasional** KPBU (SIMPUL KPBU, Kementerian PU) | dossier ✓ Flag §3 | **pass** — attribution is honest; not passed off as a PT PII document quote |
| 61 proyek, 38 KPBU, nilai investasi >Rp 732 triliun, **per publikasi Juni 2026** | dossier ✓ + `company_profile.md` ✓ | **pass** — year + scope present; the source page's "7 sektor / 8 item" defect is not reproduced |
| Acuan Alokasi Risiko "terbit tahunan"; "edisi 2025 mencakup sektor jalan, air minum, kesehatan, telekomunikasi" | dossier Flag §3 — the 2025 PDF was never opened (>10 MB); editions recorded 2019/2022/2023/2025, i.e. **not** annual | **fail → corrected in place** |
| Penjaminan bersama saat kebutuhan melampaui kapasitas permodalan BUPI | dossier ✓ (portal KPBU Kemenkeu), attributed in-text | **pass** — "dipakai" softened to "tersedia" |

Additional negative checks, all clear: no demand/revenue/pricing risk ever described as guaranteed (rejected 2016 DJKN source did **not** leak in — the article states the opposite four times); no claim asserted to have ever been paid; no project named; no Rp 6.445 triliun / 37% RPJMN 2020–2024 figure present at all (so the lapsed-cycle trap is moot); no named officials; no Danantara reference.

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: **48 chars / position 0**
- [x] Meta description 140–160 — actual: **151**
- [x] Slug ≤60, kebab-case, keyword — actual: `jaminan-pemerintah-proyek-kpbu-yang-dijamin` (43)
- [x] H1 contains keyword — "Jaminan Pemerintah Proyek KPBU: Apa yang Dijamin dan Tidak" (58 chars)
- [x] H2 count 4–7 — actual: **7** (5 body + FAQ + Kesimpulan)
- [x] ≥1 question-format H2 (2: "Apa itu jaminan pemerintah...?", "Risiko apa saja yang benar-benar ditanggung pemerintah?"); ≥1 honest/counter-conventional H2 ("Apa yang TIDAK dijamin")
- [x] Keyword in first 100 words — first sentence
- [x] Definition snippet near top — **51 words**, begins ~word 100
- [x] ≥8 LSI terms — counted: **12 of 12** frontmatter secondary keywords now present (`bankability` was missing, added)
- [x] 3 internal links (1 hub + 2 cousins) — `/kpbu` (lead) · `/public-private-partnership` (H2 #4) · `/pembiayaan-kreatif` (H2 #5); 3 distinct URLs, all inline
- [x] ≥1 external authoritative citation — actual: **3** (Kemenkeu portal KPBU, JDIH PMK 68/2024, SIMPUL KPBU) — deliberate, see flags
- [x] FAQ 5–7 Q&As — actual: **6**
- [x] ≥1 list + ≥1 table — 4 bulleted items, 4 numbered steps, 1 comparison table
- [x] Word count inside band 1.500–1.800 — actual: **1.640** (`count_words.py`), frontmatter synced

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — measured: **46 / 44 / 44 / 41 / 41** words. All five in band.
- [x] Each body paragraph makes one independently quotable, verifiable point — strengthened in two places ("Detail ini berdampak praktis" now delivers its promised consequence; "Jaminan pemerintah bekerja di atas pembagian risiko itu, bukan menggantikannya" promoted to a standalone line)
- [x] FAQ parseable for FAQPage schema (`### question` → answer paragraph, 6 pairs, answers 46–57 words); `date_modified: 2026-08-12` added to the meta block

**Disambiguation gate (pass/fail for this keyword) — PASS:**
| Signal | Infrastructure/KPBU token present |
|---|---|
| Title | "Proyek **KPBU**" ✓ |
| Meta description | "pada proyek **KPBU**" ✓ |
| H1 | "Proyek **KPBU**" ✓ |
| First H2 | "dalam proyek **infrastruktur**" ✓ |

Negative disambiguation lands at **word 50** of the lead, inside the 60-word requirement, and is said once without labouring: "bukan jaminan sosial, bukan agunan atau jaminan kebendaan, dan bukan jaminan pelaksanaan dalam pengadaan barang/jasa." FAQ #4 carries the fuller three-regime split for readers who arrive from the wrong SERP intent — correctly placed at the end rather than in the lead.

### D. PT PII framing discipline (product_matrix.md + style_guide §11)
- [x] PT PII framed as the government-guarantee provider (BUPI) — "Mandat BUPI itu dipegang..." / "PT PII selaku Badan Usaha Penjaminan Infrastruktur di bawah Kementerian Keuangan". Never lender, investor, contractor, operator, or regulator. Not under Danantara (never mentioned).
- [x] ≤3 PT PII self-mentions — actual: **3** (FAQ #2 issuer answer · Kesimpulan positioning line · CTA). The mid-article aside in H2 #5 deliberately says "BUPI" rather than "PT PII", which is what keeps the count at 3 rather than 4.
- [x] No unverifiable superlatives — 0 hits
- [x] Product names + specs match `product_matrix.md` / dossier — single anchor: **Penjaminan Pemerintah** (correct row for risiko pemerintah / bankability / PJPK)
- [x] Closing uses a `company_profile.md` positioning line — "dirancang untuk meningkatkan kelayakan kredit proyek sekaligus memagari kewajiban kontinjensi APBN"
- [x] Soft website CTA present as the FINAL line, after the conclusion — "Peta cakupan penjaminan pemerintah untuk proyek KPBU beserta acuan alokasi risiko per sektornya dapat ditelusuri lebih jauh di ptpii.co.id." Consultative, no "beli sekarang".
- [x] Hub link is a natural inline anchor in the lead — "[jaminan pemerintah untuk proyek KPBU](https://www.ptpii.co.id/kpbu)". No "BACA JUGA" callout anywhere.
- [x] Zero links to `institute.iigf.co.id` — isolation rule held

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: **none yet** — `articles_history/index.json` has an empty `articles` array; 2026-08 is this client's first run. The check is therefore against same-batch siblings.
- Subtopic overlap (Jaccard estimate): vs `-02` (instrument taxonomy) **~0.10** · vs `-03` (claim mechanics + hak regres) **~0.10 after fix** (was drifting toward ~0.20 on the duplicated subsidy FAQ + double regres mention) · vs `kpbu-03` (alokasi risiko) **~0.15**.
- Verdict: **distinct angle confirmed.** This article owns the coverage boundary *before* any claim; the table is keyed on "dijamin / tidak dijamin" rather than contractual responsibility, and the phrase "siapa menanggung apa" (reserved for `kpbu-03`) does not appear. All three estimates sit well under the 0.4 threshold.

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran on the **saved final**; `jaminan-pemerintah-01.id.quality-input.json` written to `final/`
- [x] AI-detector score < 0.30 — **actual: 0.08** (verdict: pass). Both flags are `[low]` severity.
- [x] Paragraph burstiness CV ≥ 0.30 — **actual: 0.427** (raised from 0.355 by the paragraph split; the tool's own ideal is 0.45, so this sits just under an aspirational target, comfortably over the failure line). Sentence burstiness 0.935.
- [ ] **Plagiarism: distinctive passages web-checked — NOT DONE.** WebSearch returned a hard budget error (200/200 consumed before this run) on every attempt. No lookup was performed and none is claimed. **Plagiarism score: 0.10, heuristic + offline only.**

Second flag, `vocab-repetition` (top-30 words = 37.9% vs a <30% target): assessed as a **false positive for this niche**. The concentration is driven by *jaminan · pemerintah · risiko · proyek · KPBU · badan usaha · PJPK* — the exact entity repetition that §2a treats as an asset for AI extraction. Diluting it with synonyms would degrade entity clarity on a keyword whose whole problem is being mis-filed as *hukum jaminan kebendaan*. No action taken.

**Offline substitute for the web check.** All 8 candidate passages were compared by hand against the only source texts available verbatim (the sentences the dossier quotes directly), and classified:

| # | Passage | Classification |
|---|---|---|
| 1 | PMK 68/2024 citation + "mencabut tujuh PMK lama" | Regulation metadata — exempt |
| 2 | Perpres 78/2010 official title | Verbatim regulation title, cited by number and year — exempt |
| 3 | PT PII identity (berdiri 30 Des 2009, SMV Kemenkeu) | PT PII first-party — exempt |
| 4 | Co-guarantee sentence | Longest identical run vs the Kemenkeu source the dossier quotes: **6 words** ("apabila kebutuhan penjaminan melampaui kapasitas permodalan"), then diverges (BUPI vs PT PII). Attributed in-text. Under the 20-word threshold. |
| 5 | 11 kategori risiko | Attributed with link; the list itself is not reproduced — exempt |
| 6 | Definition snippet | Longest identical run vs Kemenkeu's canonical definition: **≈6 words** ("untuk membayar kompensasi kepada badan usaha"); PJPK is expanded, "saat terjadi risiko" is reworked. Well-known official definition + cited source — exempt, and under threshold regardless. |
| 7 | Closing positioning line | Near-verbatim from `knowledge_base/company_profile.md` pre-approved positioning lines — client's own language, exempt |
| 8 | Portfolio figures (61 / 38 / Rp 732 T, Juni 2026) | PT PII first-party — exempt |

No passage shows a ≥20-word verbatim run against any source text available offline, and every passage close to a source is either attributed in the sentence itself or is PT PII's own material. Residual risk: overlap against pages that could not be queried. Assessed **low**, and stated rather than hidden.
