---
brief_id: "wms-konsep-c01"
validator_run_date: "2026-07-17"
verdict: "pass"
ai_score: 0.15
plagiarism_score: 0.00
revision_loop: 0
batch: "conditional-2026-08 (style_addendum.md overrides applied — band 800–1000, FAQ 2–3, 0 image placeholder, 2 internal link)"
editor_recommendation: "approve"
---

# Quality Validator Report — Konsep Warehouse Management System yang Wajib Anda Tahu

## Verdict: **pass**

Editor recommended **approve**; this validation confirms **pass**. The heuristic AI score is 0.15 (half the 0.30 revise threshold) with zero AI-tell phrase patterns firing, and plagiarism is 0.00 — no distinctive passage returns a verbatim match on any non-Soltius page. Both load-bearing external facts (SAP Logistics Management GA Feb 2026; SAP EWM across 24 industries) were independently re-verified against SAP sources. EYD, structure integrity, and Soltius framing all hold. The single sub-threshold signal — paragraph word-count CV 0.291 vs 0.30 — was re-examined by hand and cleared as a boundary false-positive driven by the batch's own format rules (see AI Detector section); it does not warrant a bounce.

## Applied overrides (style_addendum.md wins — recorded N/A, not failed)

| Script/default check | Default | Addendum override | Status |
|---|---|---|---|
| Word band | 1,500–1,800 | **800–1000** | **N/A vs default → COMPLIANT.** Cleaned prose 958 (editor); raw `split()` 996 (script). Both inside 800–1000. |
| FAQ count | 5–8 | **2–3** | **N/A vs default → COMPLIANT.** 2 Q&A present. |
| Internal links | 3 | **2** | **N/A vs default → COMPLIANT.** Exactly 2 (1 hub + 1 cousin). |
| Image placeholders / image-brief | required | **0, by design; skip image checks** | **N/A → COMPLIANT.** `{IMAGE` = 0; no images.json expected. Not flagged. |

All remaining checks (AI-tell heuristics, plagiarism, EYD, structure, fact re-verification) applied **in full**.

## AI Detector (heuristic v2.0)

- Score: **0.15** / 1.0 — script verdict **pass** (thresholds: revise ≥0.30, reject ≥0.50)
- Paragraph burstiness (CV): **0.291** (guideline ≥0.45; <0.30 flagged high)
- Sentence burstiness (CV): **0.498** — **healthy, above the 0.45 human target**
- Top-30 vocab share: **0.298** (target <0.30 — clean)
- Flags (1):
  - [high] `paragraph-uniformity`: paragraph word-count CV=0.291 — **examined and cleared** (see below)

### Re-examination of the paragraph-uniformity flag (cleared)

My checklist forbids auto-approving when paragraph CV < 0.30, so I re-read the flagged dimension by hand rather than defer to the script's aggregate pass. Computed prose-paragraph word counts (n=16):

`[13, 27, 34, 41, 41, 46, 49, 50, 51, 51, 53, 56, 57, 61, 65, 70]` — mean 47.8, sd 13.9.

Findings:
- **Genuine spread, not robotic uniformity.** Range 13→70 words is a 5.4× ratio; there are true short paragraphs (13, 27, 34) alongside long ones (61, 65, 70). This is not the flat, evenly-chunked profile the flag is meant to catch.
- **The mild central clustering is pipeline-mandated, not an AI artifact.** Addendum §5 requires a **40–60-word direct answer immediately after every H2** (a GEO/AI-Overview rule), which mechanically pins four paragraphs into the 41–61 band; the required soft CTA is deliberately short (13 words). The metric — calibrated for 1,500–1,800-word long-form — is fighting the batch's own short-form + GEO format, not detecting machine text.
- **The stronger, less-gameable signal passes clearly.** Sentence burstiness 0.498 is above the 0.45 human target. AI-generated prose characteristically fails at the sentence level too; a healthy sentence CV is decisive counter-evidence.
- **No corroborating tells.** Zero filler-opener / "Selain itu" / "Penting untuk dicatat" / era-phrase patterns fired; em-dash 1; vocab share 0.298. Nothing else points to AI authorship.

Bouncing to the writer over a 0.009 CV margin caused by mandatory GEO formatting would be a false positive the writer could only "fix" by violating addendum §5. Cleared → **pass**.

## Plagiarism (quoted WebSearch of distinctive passages)

Script extracted 8 candidates; I searched the distinctive prose passages (self-referential Soltius credential/CTA lines and already-SAP-verified fact statements ignored per agent rules).

- ✅ "WMS bukan satu fitur tunggal, melainkan rantai enam proses berurutan" — **clean.** Only generic niche WMS articles returned; the six-process concept is common in the niche but this exact phrasing appears nowhere verbatim.
- ✅ "modul persediaan bekerja di level *storage location* … menjawab pertanyaan 'berapa' … WMS di level *storage bin* … 'di mana'" — **clean.** No verbatim match; one hit was soltius.co.id itself (intentional self-reference, ignored).
- ✅ "FIFO membaca tanggal penerimaan barang, sedangkan FEFO membaca tanggal kedaluwarsa *batch*" — **clean.** Generic FIFO/FEFO explainer articles only; the article's specific contrastive phrasing is original. Underlying distinction is standard and correct.
- ✅ Soltius credential line + soft CTA — self-referential (soltius.co.id), excluded by rule.
- ✅ SAP-fact statements (SAP Logistics Management; 24 industries; EWM-in-S/4HANA) — verified against SAP sources below, not plagiarism candidates.

- Exact verbatim matches (≥20 words, non-Soltius): **0**
- Partial near-matches (non-Soltius): **0**
- **Aggregate plagiarism score: 0.00** → pass (threshold: revise ≥0.10)

## Fact & citation re-verification (applies in full)

No computational formulas exist in the article (FIFO/LIFO/FEFO are definitional, not arithmetic) and no regulation numbers are cited (zero BPS/legal figures), so "re-verify formula math / regulation numbers" is **N/A by content**. The load-bearing external claims were re-verified via WebSearch:

| Claim | Re-verification | Verdict |
|---|---|---|
| SAP Logistics Management *cloud-native*, unifies warehousing + transportation, **GA sejak Februari 2026** | Independently confirmed via news.sap.com "SAP Logistics Management Now Generally Available" (Feb 2026); SaaS/BTP, warehousing + transportation. Article correctly **omits** the "Oktober 2025 / Germany–USA initial launch" detail the dossier flagged as off-limits. | **pass** |
| SAP EWM "**menurut SAP** melayani pelanggan di **24 industri**" | Independently confirmed ("2000+ customers across 24+ industries"); attributed inline. Article deliberately **avoids** the 2026 Gartner MQ Leader framing (superlative risk) — confirmed correct choice. | **pass** |
| FIFO / LIFO ("Last In, First Out") / FEFO definitions + LIFO non-perishable stacking | Standard definitions confirmed; LIFO correction (rewrite mandate #1) is right; FEFO=earliest-expiry correct. | **pass** |

## EYD & structure integrity (applies in full)

- **EYD:** clean. "kedaluwarsa" spelled correctly (5×); no kadaluarsa/resiko/aktifitas/praktek/analisa/sistim-class errors. No bare coordinating-conjunction sentence openers ("Dan"/"Tetapi"/"Sehingga" = 0). The lone "Karena itu, …" opener is a valid konjungsi antarkalimat, not an error. Acronyms expanded once (WMS/SCM/ERP/EWM); English terms italicized consistently.
- **Structure:** H1 ×1; 4 body H2 + FAQ + Kesimpulan; 2 FAQ H3; "Ringkasnya:" snippet blockquote present; 3-rule FIFO/LIFO/FEFO table; 6-step numbered process list; `{IMAGE` = 0; exactly 2 internal soltius.co.id links; 1 external citation (news.sap.com); em-dash = 1 (≤2); soft CTA to soltius.co.id is the final line. Intact.
- **Soltius framing:** exactly 2 self-mentions (Kesimpulan positioning line + final CTA); "mengimplementasikan serta memigrasikan" (not "builds"); zero unverifiable superlatives.

## Loop status

Revision loop **0**. No revision required — verdict is **pass** on the first validation pass.

## Recommendation to orchestrator

**Curator-ready** for the editor `approve` + validator `pass` gate. Per batch instruction, the pipeline **stops here for user review** — do NOT run the curator or commit to `articles_history` until the user signs off.
