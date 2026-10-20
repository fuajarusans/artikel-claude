---
brief_id: "pembiayaan-infrastruktur-02"
editor_run_date: "2026-08-12"
recommendation: "approve"
overall_score: 8
ai_score: 0.04
plagiarism_score: 0.15
---

# Editor QC Report — Pembiayaan Infrastruktur: Corporate Finance atau Project Finance?

## Recommendation
**approve**

The draft arrived in unusually good shape for the highest-risk article in this cluster. The single biggest trap — putting PT PII in the lender's seat while explaining financing structures — was avoided cleanly: PT PII appears exactly three times (one portfolio attribution, one closing positioning line, one soft CTA), always as guarantor/BUPI under the Ministry of Finance, never as a financier. Every regulation cited is current law (Perpres 38/2015, PMK 68/2024, PMK 101/PMK.08/2018), no revoked chain appears, no "belum pernah diubah" claim was made, and none of the four forbidden unsourced numbers (DSCR threshold, tenor in years, transaction-cost threshold, financial-close duration) made it into the text — all four are handled qualitatively and the DSCR bullet explicitly says no Indonesian benchmark exists. I applied ten in-place fixes, the substantive ones being: the PMK 101/2018 scope was vague ("cakupan spesifik") and is now concrete and bounded; the 2013 cost-of-fund figures now carry their year *before* the numbers rather than only after; the Umbulan/Boser values now carry the dossier-mandated attribution safeguard; and three verbatim runs (one shared with a sibling article in this same batch, one with the dossier, one CTA tail) were rewritten. Two things I could not close: the plagiarism web-verification could not be run at all (WebSearch budget exhausted at 200/200 — heuristic and offline evidence only, stated plainly below), and the Umbulan/Boser Rupiah values still rest on another researcher's verification rather than an independent re-check. Neither blocks publication; both are listed as open flags.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Zero em-dashes, zero cliché openers, no press-release register. Paragraph rhythm runs 1–5 sentences with genuine one-liners. Reads like a practitioner, not a synthesis. |
| Factual & penjaminan infrastruktur / KPBU accuracy | 8 | All 5 spot-checked claims pass against dossier + knowledge_base. Deduction only for the two portfolio Rupiah values inherited from another researcher's verification (safeguarded in-text, flagged below). |
| On-page SEO compliance | 9 | Title 54 chars, meta description 154, slug 53, 18/18 LSI terms, 3 internal + 2 external links. Word count 1786 sits at the top of the band. |
| GEO extractability (§2a) | 9 | All five body H2s carry a measured 44–55-word direct answer; definition snippet 52 words; 7 FAQs at 44–54 words each; `date_modified` added. |
| PT PII framing discipline | 9 | Exactly 3 mentions, correct BUPI/SMV framing, guarantee explicitly stated as neither subsidy nor commercial-risk cover, no superlatives, no named officials, no Danantara. |
| Internal linking | 9 | 3 distinct ptpii.co.id URLs, all inline with descriptive anchors, hub in the lead. Zero links to institute.iigf.co.id. |
| FAQ quality | 9 | Restored the brief's 7th question; all answers self-contained and FAQPage-parseable. |
| Originality (plagiarism + AI-detector) | 7 | AI-detector 0.04 (pass). No cross-article verbatim ≥20 words after my fixes. Held at 7 because web plagiarism verification was impossible this session. |

## What I fixed (changelog)
- **PMK 101/2018 scope made concrete.** "dengan cakupan spesifik" told the reader nothing and left room to infer an open-ended BUMN mandate. Now: "yang cakupannya terbatas pada pinjaman BUMN dari lembaga keuangan internasional serta beberapa program percepatan yang disebut namanya". Matches the primary text read by the researcher; still a single sentence, so it does not become a second product pitch.
- **Cost-of-fund labelling moved in front of the numbers.** Was "pada empat kontraktor BUMN besar, biaya modal utang tercatat 8,9%–9,55% … (Putri & Wisudanto, 2016, data 2013)"; now "dengan **data 2013** atas empat kontraktor BUMN besar, …" followed by "Dua angka itu adalah potret biaya dana korporasi **pada 2013**, bukan patokan biaya dana *project finance* hari ini." The year now appears twice and cannot be skimmed past.
- **Umbulan/Boser attribution safeguard added.** Recast to open with "Menurut informasi portofolio penjaminan PT PII, Badan Usaha Penjaminan Infrastruktur (BUPI) di bawah Kementerian Keuangan, …" per the dossier's explicit recommendation. No extra PT PII mention was spent — the existing one was relocated.
- **Portfolio figure disambiguated.** "61 proyek dijamin senilai lebih dari Rp 732 triliun" → "61 proyek dijamin dengan **total nilai proyek** lebih dari Rp 732 triliun per Juni 2026", so it cannot be misread as the guarantee value (Rp 113 triliun, 2026).
- **KPBU expanded on first use** — "KPBU (*Kerja Sama Pemerintah dengan Badan Usaha*)". The draft never expanded it; a style-guide §3 requirement and an entity-clarity gain for AI extraction.
- **Sibling-article duplicate broken.** The closing positioning line was verbatim-identical (20 words) to `pembiayaan-kreatif-02`. Paraphrased to "Peran penjamin tidak berhenti di penerbitan jaminan: PT PII juga mendampingi penyiapan dan strukturisasi transaksi hingga proyek sampai ke *financial close*." Same approved substance, `company_profile.md` sanctions paraphrase.
- **CTA differentiated.** The final line shared a 9-word tail with `kpbu-03` and promised roughly the same content. Rewritten to this article's angle: "Bagaimana penjaminan pemerintah menopang struktur *project finance* sebuah proyek KPBU diuraikan lebih lengkap di ptpii.co.id."
- **Dossier-verbatim FAQ text rewritten.** The new composition FAQ and FAQ 2 tracked the dossier's drafted answers for 30+ consecutive words. Both reworded into article voice; attribution and reference year kept.
- **Restored the brief's 7th FAQ** ("Berapa komposisi utang dan ekuitas yang lazim pada proyek infrastruktur?"), and stripped the duplicated 70–80% figure out of FAQ 2 so the two answers no longer overlap.
- **Paragraph rhythm.** §1 had three consecutive 3-sentence paragraphs. Restructured into a 3-sentence paragraph plus a 1-sentence closer; also tightened two flabby clauses to protect the word band.

## What I flagged (open issues)
- ⚠️ **Plagiarism web verification could not be run.** The WebSearch budget was exhausted (200/200) before this article's turn; my one attempt returned the budget error. The `plagiarism_score: 0.15` is therefore a **heuristic + offline estimate, not a verified result** — see section F for exactly what evidence it rests on. *Recommendation*: if the curator or user has search budget, run the 8 queries in `pembiayaan-infrastruktur-02.id.quality-input.json` before publication; candidates 2–4 (Kemenkeu 70–80% composition) and 1 (PMK 68/2024 scope list) are the only ones with a plausible external origin, and both categories are attributed in-text.
- ⚠️ **Umbulan/Boser Rupiah values inherited, not independently re-verified.** Rp 4,51 triliun (*financial close* 30 Desember 2016) and Rp 12,351 triliun (perjanjian penjaminan 3 Oktober 2025) came from another researcher's verification this month; this article's own researcher could not re-confirm them (news searches blocked) and asked the editor to re-confirm if precision is critical. I could not re-check either. Project existence, dates, and portfolio membership *are* independently confirmed. *Recommendation*: a 2-minute check against ptpii.co.id/informasi-proyek before publication. The in-text safeguard means an error would be attributed, not asserted.
- ⚠️ **Word count 1786 leaves only 14 words of headroom** below the 1.800 ceiling. *Recommendation*: no additions at CMS stage without re-running `tools/count_words.py`.
- ⚠️ **Paragraph word-count CV 0.347** — above the 0.30 fail floor, below the scanner's preferred 0.45 (flagged "low"). Improved from 0.341 by my restructuring; pushing higher would mean padding or amputating paragraphs, which costs more than it buys. *Recommendation*: accept.
- ⚠️ **External authority is Kemenkeu + one peer-reviewed proceeding**, not World Bank/ADB, because both multilateral domains returned HTTP 403 throughout research. This satisfies the ≥1–2 authoritative-source rule (a ministry portal plus a peer-reviewed source), but the article lacks an international-institutional citation. *Recommendation*: optional upgrade on a future refresh, not a blocker.
- ℹ️ **Minor boundary note, no action needed.** The tenor bullet closes with "rencana pembiayaan ulang" — *refinancing* was reserved by the strategist for a future month. This is a four-word passing clause, not coverage, and removing it would leave the tenor-gap explanation incomplete. Similarly, PMK 68/2024's four support instruments (VGF, AP, PDF) are listed once as the regulation's contents, not pitched — the Pembiayaan Kreatif cluster still owns that territory.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — 0 occurrences
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — 0 occurrences anywhere
- [x] No "Penting untuk dicatat / dipahami bahwa" — 0
- [x] "Dengan demikian" not overused — 0
- [x] Em-dash count ≤2 — **0** (en-dashes present are numeric ranges, correct convention)
- [x] Varied paragraph lengths — sentence counts run 4/2/2/3/3/1/2/4/5/4/2/5/4/3/2/3/3/3/2/4/2/3/2/3/5/1
- [x] Not every H2 → 3-bullet list — §1 and §4 are pure prose; §2 prose+table; §3 prose+bullets; §5 prose+numbered list
- [x] No generic claims without numbers — 8 dated data points inline
- [x] No stacked hype adjectives — 0 ("canggih/terdepan/terbaik" absent)
- [x] No service-dump paragraph — one anchor only (Penjaminan Pemerintah)
- [x] No press-release register ("Dalam rangka", "Sebagai wujud komitmen") — 0

### B. Factual & penjaminan infrastruktur / KPBU spot-check
| Claim | Source check | Verdict |
|---|---|---|
| Kemenkeu names three financing options (*government / corporate / project financing*), KPBU being *project financing* via BUP | dossier ✓ (Kantor Bersama KPBU, diakses 2026-08-12), quoted verbatim from the Q&A page | pass |
| Debt–equity 70–80% / 20–30% as a *practice range, not a regulatory threshold* | dossier ✓ + edge-case note; article states the caveat twice (bullet + FAQ) | pass |
| PMK No. 68 Tahun 2024 berlaku 18 Oktober 2024, consolidating penjaminan / VGF / AP / fasilitas penyiapan | company_profile.md ✓ (ditetapkan 24 Sep 2024, berlaku 18 Okt 2024); revoked chain absent | pass |
| PMK No. 101/PMK.08/2018 ditetapkan 24 Agustus 2018; bounded scope; hak regres | dossier ✓ (JDIH primary text read in full) + company_profile.md ✓. Scope corrected from vague to specific by me. No "never amended" claim present | pass |
| PT PII portfolio: 61 proyek, total nilai proyek > Rp 732 triliun per Juni 2026 | dossier ✓ + company_profile.md ✓ (61 proyek / Rp 732 triliun, publikasi resmi 2026); "nilai proyek" vs "nilai penjaminan Rp 113 triliun" disambiguated by me | pass |
| Cost of debt 8,9%–9,55% / cost of equity 10,3%–12,5% | dossier ✓ (Putri & Wisudanto 2016, Tabel 2–4, data 2013) — flagged medium confidence, must be labelled historical corporate context. Labelling strengthened by me | pass |
| Umbulan Rp 4,51 triliun (30 Des 2016) · Boser Rp 12,351 triliun (3 Okt 2025) | dossier ⚠️ medium — existence/dates independent, Rupiah values inherited. Safeguard added in-text; **WebSearch re-check impossible** | pass with flag |

**Figures without a reference year: 0.** Every number carries a year or a full date. **Named officials: 0.** **Revoked regulations cited: 0** (260/2010, 8/2016, 223/2012, 143/2013, 170/2015, 170/2018, 260/PMK.08/2016, 180/2020 all absent). **Funding-gap figures: 0** — correctly left to sibling `-01`, so no scope-conflation risk exists in this article.

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: **54 chars**, keyword at position 0–23
- [x] Meta description 140–160 — actual: **154**
- [x] Slug ≤60, kebab-case, keyword — actual: `pembiayaan-infrastruktur-corporate-vs-project-finance` (**53**)
- [x] H1 contains keyword
- [x] H2 count 4–7 — actual: **7** (5 body + FAQ + Kesimpulan)
- [x] ≥1 question-format H2 (2: §1, §3); ≥1 honest/counter-conventional H2 (§5 "Kapan *project finance* BUKAN pilihan yang tepat")
- [x] Keyword in first 100 words — yes, ~word 40; also in the last body paragraph
- [x] Definition snippet near top — blockquote at ~word 110, **52 words**
- [x] ≥8 LSI terms — counted: **18/18** from the brief's list
- [x] 3 internal links (1 hub + 2 cousins) — `/pembiayaan-kreatif` (lead), `/public-private-partnership` (§2), `/kpbu` (§4); 3 distinct URLs, all inline, no "BACA JUGA"
- [x] ≥1 external authoritative citation — actual: **2** (kpbu.kemenkeu.go.id; Putri & Wisudanto via iptek.its.ac.id)
- [x] FAQ 5–7 Q&As — actual: **7**
- [x] ≥1 list + ≥1 table — bulleted list (§3), numbered list (§5), comparison table (§2)
- [x] Word count inside band 1.500–1.800 — actual: **1786** (`tools/count_words.py`)
- [x] Zero links to institute.iigf.co.id

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — measured: **45 / 55 / 49 / 44 / 49 words** for §1–§5. All five in range.
- [x] Each body paragraph makes one independently quotable, verifiable point — the §2 table is designed to survive being lifted row-by-row; each bullet in §3 is one claim + its caveat
- [x] FAQ parseable for FAQPage schema — 7 `###` questions, answers 44–54 words, all self-contained (no "see above" cross-references)
- [x] `dateModified` / freshness noted in the meta block — **added** `date_modified: "2026-08-12"` (was missing; house convention matches `kpbu-01`)

### D. PT PII framing discipline (product_matrix.md + style_guide §11)
- [x] Framed as the government-guarantee provider (BUPI) under the Ministry of Finance — not a lender, investor, contractor, operator, or regulator; Danantara never mentioned. **Checked sentence by sentence given this article's subject matter**; PT SMI / PT IIF / LPEI are not mentioned at all, so no conflation risk
- [x] ≤3 PT PII self-mentions — actual: **3** (§4 portfolio attribution · Kesimpulan positioning line · CTA)
- [x] No unverifiable superlatives — 0
- [x] Product names + specs match product_matrix.md / dossier — Penjaminan Pemerintah is the single anchor; Penjaminan Pinjaman Langsung is explained by function under PMK 101/2018 without being named as a product or pitched
- [x] Closing uses a company_profile.md positioning line — paraphrased (sanctioned) to avoid a verbatim clash with `pembiayaan-kreatif-02`
- [x] Soft website CTA present as the FINAL line, after the conclusion — consultative, no "beli sekarang"
- [x] Hub link present as a natural inline anchor in the lead — "Pilihan pembiayaan infrastruktur" → `/pembiayaan-kreatif`
- [x] Guarantee explicitly framed as neither subsidy nor commercial-risk cover — "penjaminan pemerintah bukan subsidi, dan tidak menghapus risiko komersial badan usaha. Risiko konstruksi, operasi, dan permintaan pasar tetap di pundak Badan Usaha Pelaksana."

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: **none yet** — `articles_history/index.json` has an empty `articles[]`; this is a first-run month.
- Same-batch siblings compared by H2 coverage: `-01` (national funding map, RPJMN funding-gap figures, source composition), `-03` (*financial close*, lender due-diligence checklist, credit-committee red flags), and the `pembiayaan-kreatif` cluster (pemda/APBD instruments, VGF/PDF access, stalled regional projects).
- Subtopic overlap (Jaccard estimate): **~0.10 vs `-01`**, **~0.15 vs `-03`** (shared vocabulary only — *bankability*, cost of funds — used here as a consequence of structure rather than as an object of lender testing), **~0.05 vs the Pembiayaan Kreatif cluster**.
- Longest verbatim run against any sibling article after my fixes: **9 words** ("SPAM Umbulan mencapai *financial close* pada 30 Desember 2016" and "Badan Usaha Penjaminan Infrastruktur (BUPI) di bawah Kementerian Keuangan") — bare factual and entity strings, unavoidable and well under threshold.
- Verdict: **distinct angle confirmed.** The protagonist is the sponsor and the subject is a structural choice; no strategist re-spin needed.

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran on the **saved final**; `pembiayaan-infrastruktur-02.id.quality-input.json` written
- [x] AI-detector score < 0.30 — actual: **0.04** (verdict `pass`; thresholds revise ≥0.30 / reject ≥0.50). Sentence burstiness 1.006; top-30 vocabulary share 0.339
- [x] Paragraph burstiness CV ≥ 0.30 — actual: **0.347** (one "low" flag: scanner target is 0.45). Improved from 0.341 by the §1 paragraph restructure; above the fail floor
- [ ] **Plagiarism: distinctive passages web-checked — NOT DONE.** WebSearch was unavailable for the entire run: the session had already consumed 200/200 calls during research, and my attempt returned the budget error rather than results. **I did not verify any of the 8 candidate passages against the live web, and I am not claiming otherwise.**

**What the 0.15 plagiarism score actually rests on** (offline evidence only):
1. **Provenance review of all 8 candidates.** Candidates 5–8 (§5 decision questions, §3 DSCR/tenor bullets, the Kesimpulan sentence) are original analytical prose with no plausible external source. Candidate 1 is a summary of PMK 68/2024's contents — regulation-derived text, attributed by number and effective date, and an explicit exclusion under the plagiarism rule. Candidates 2–4 restate the Kemenkeu 70–80%/20–30% composition, attributed in-text to Kementerian Keuangan with an access year in all three places — the "cited authoritative source" exclusion.
2. **Offline n-gram comparison** against all 15 drafts, all 9 existing finals, this article's brief, and its dossier. Longest shared run with any *published-destined* article: **9 words**. Longest run with internal-only artifacts (brief, dossier — never published anywhere): 19 and 30 words respectively, both of which I reduced by rewriting.
3. **No verbatim regulation blocks.** No quoted passage of legal text appears anywhere in the article; regulations are cited by number, year, and effect only.
- Residual risk: **low but unquantified.** A real match, if one exists, would most likely be a short attributed phrase from the Kemenkeu Q&A page — which would not be a plagiarism finding under our own rules.

## The shipping question
Would WEBARQ Promote be proud of this in front of a skeptical PJPK official or a lender's credit analyst? Yes. The comparison table is genuinely absent from the current SERP, the §5 "when this structure is wrong" section is the kind of honesty that converts this audience, and the article refuses to invent a DSCR threshold or a transaction-cost cutoff where no source exists — saying so out loud instead. It teaches vendor-neutrally for roughly 1.700 words before PT PII appears at all, and when it does, it appears as the guarantor it actually is.
