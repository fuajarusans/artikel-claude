---
brief_id: "saas-paas-iaas-c01"
validator_run_date: "2026-07-06"
verdict: "pass"
ai_score: 0.08
plagiarism_score: 0.00
revision_loop: 0
---

# Quality Validator Report — SaaS vs PaaS vs IaaS: Perbedaan dan Contoh Penerapannya

> **Batch note:** validated against **conditional/2026-07 `style_addendum.md` §7 overrides** — word band **800–1000** (not 1,500–1,800), FAQ **2–3**, internal links **2**, image placeholders **0 by design** (no `images.json`; image checks N/A). All other checks (anti-AI heuristics, plagiarism lookup, EYD, structure) applied in full. Article: `conditional/2026-07/final/saas-paas-iaas-c01.id.md`. Raw script output: `saas-paas-iaas-c01.id.quality-input.json` (same folder).

## Verdict: **pass**

Editor recommendation was `approve` (score 9); this validation concurs. The heuristic AI-detector scores 0.08 — far below the 0.30 revise threshold — with only two low-severity flags, both explainable by the batch's compact on-point format and the topic's fixed terminology. All 8 distinctive passages came back clean in web lookup: zero verbatim hits, zero partial near-matches on non-Soltius pages. Clean body word count 963–964 sits inside the 800–1000 batch band. No revision needed; article is curator-ready pending user pilot review (curator NOT run per pilot instructions).

## AI Detector (heuristic v2.0)

- Score: **0.08** / 1.0 (thresholds: revise ≥0.30, reject ≥0.50) → script verdict **pass**
- Paragraph burstiness (CV): **0.31** (target ≥0.45; hard-fail floor <0.30 — above floor)
- Sentence burstiness: **0.922** (strongly varied — a clear human signal)
- Top-30 vocab share: **0.397** (target <0.30)
- Word count (script, raw incl. markdown tokens): 1,019 | clean body (markdown stripped, independently verified): **964** (editor: 963)
- Paragraphs: 19 | Sentences: 52
- Flags (2, both low severity):
  - [low] `paragraph-low-variance`: Paragraph word-count CV=0.31 (target ≥0.45). **Assessment:** driven by the addendum's dense ~900-word format — most prose paragraphs are deliberately 40–70 words ("satu paragraf = satu poin"). Above the 0.30 strong-AI-tell floor; sentence-level burstiness (0.922) is excellent. Accepted.
  - [low] `vocab-repetition`: Top-30 words = 39.7% of body (target <30%). **Assessment:** topic-inherent — SaaS/PaaS/IaaS, pengguna/penyedia, aplikasi/cloud must repeat in a 3-model comparison, and the short 963-word body mathematically inflates concentration vs the 1,650-word monthly corpus the threshold was tuned for. Manual re-read found no lazy repetition of non-terminology vocabulary. Accepted.
- No pattern flags fired: 0 banned openers, 0 "Selain itu" chains, 0 "Penting untuk dicatat", 0 era-filler, em-dash count within limit (1).
- External AI-detector API: not used (no `AI_DETECTOR_API_KEY` set; heuristic mode).

## Plagiarism (web lookup of distinctive passages)

8 candidate passages checked via quoted exact-phrase WebSearch. External plagiarism API not used (heuristic mode).

- ✅ Passage 1: "SAP S/4HANA Cloud Public Edition dan SuccessFactors dikonsumsi seperti SaaS, SAP Business Technology Platform adalah PaaS…" — **clean**. No verbatim Indonesian match; results are English topical pages (TechTarget, SAP Learning, Wikipedia) stating the same facts in different words.
- ✅ Passage 2: "Pada lapisan SaaS, perusahaan memakai Microsoft 365 untuk kolaborasi, SAP SuccessFactors untuk HR…" — **clean**. Results are Microsoft Learn integration docs + one soltius.co.id product page (self-reference, ignored per rules); no phrasing overlap.
- ✅ Passage 3 (lead): "Rapat evaluasi cloud sering macet di tiga akronim: SaaS, PaaS, dan IaaS…" — **clean**. Search explicitly found no matching content; only generic SaaS/PaaS/IaaS explainers.
- ✅ Passage 4 (positioning line): "Sebagai SAP Platinum Partner melalui United VARs, Soltius mengimplementasikan dan mendukung solusi SAP di ketiga lapisan itu…" — **clean**. Only soltius.co.id own pages surfaced (intentional self-reference, excluded from scoring); phrase itself not found verbatim anywhere.
- ✅ Passage 5: "Gartner memproyeksikan belanja cloud publik global sekitar USD 850 miliar pada 2026, naik 21,3% dari 2025" — **clean**. No verbatim match; the statistic is properly attributed, and no Indonesian page carries this phrasing.
- ✅ Passage 6 (FAQ heading): "Mana yang lebih baik: SaaS, PaaS, atau IaaS?" — **clean (generic phrasing)**. A similar-topic title exists (idstar.co.id "Perbedaan IaaS, PaaS, dan SaaS, Mana Lebih Baik?") but this is a standard PAA-style question of 7 words — well under the 20-word threshold and inherently high-overlap common phrasing; excluded per validator rules.
- ✅ Passage 7: "RISE with SAP membundel SaaS, PaaS (SAP BTP), dan IaaS hyperscaler … dalam satu kontrak" — **clean**. Fact confirmed by English sources (sap.com, SAP Learning, Onapsis); no Indonesian verbatim phrasing found.
- ✅ Passage 8: "contoh enterprise paling jelas adalah SAP Business Technology Platform (SAP BTP), yang diposisikan SAP sebagai platform as a service" — **clean**. Underlying claim matches Wikipedia/sap.com (standard product description); no verbatim match of the sentence.

**Aggregate plagiarism score: 0.00** — 0 exact matches, 0 countable partial near-matches, no 20+ word verbatim hit anywhere. → plagiarism verdict **pass**.

## Batch-override flags waived as N/A (style_addendum §7)

| Check (monthly default) | Batch-2026-07 value | Result |
|---|---|---|
| Word count 1,500–1,800 | **800–1000** | 963–964 clean body — **compliant** (script's raw 1,019 includes markdown tokens; no "under 1,500" flag recorded) |
| FAQ 5–8 | **2–3** | 2 Q&As — **compliant** |
| Internal links 3 | **2** | 2 (hub `migrasi-erp-ke-cloud` + cousin `low-code-and-no-code-platforms`) — **compliant** |
| `{IMAGE_NN}` placeholders + images.json | **0 by design / checks skipped** | 0 placeholders found — **compliant by design, N/A** |

No other script flag conflicted with the addendum; AI-tell, plagiarism, EYD, and structure checks were applied at full monthly strictness.

## Editor watch item (carried forward, no action)

Editor flagged the Gartner USD 850 miliar / +21,3% (2026) figure as dossier confidence medium-high. Web lookup found no contradicting public figure attributed to Gartner, and the article frames it correctly as an attributed projection ("Gartner memproyeksikan … sekitar") without an inline link. Acceptable as written; the editor's fallback (verified 2025 figure USD 723,4 miliar) remains available if the user prefers hardening.

## Loop status

This is revision loop **0**. Verdict is `pass` — no writer loop triggered. Per pilot instructions the curator was **not** invoked; article remains in `conditional/2026-07/final/` for user review.
