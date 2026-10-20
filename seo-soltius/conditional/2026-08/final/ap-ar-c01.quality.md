---
brief_id: "ap-ar-c01"
validator_run_date: "2026-07-18"
verdict: "pass"
ai_score: 0.04
plagiarism_score: 0.00
revision_loop: 0
batch: "conditional-2026-08 (style_addendum.md overrides applied — band 800–1000, FAQ 2–3, 2 internal links, no image placeholders/no images.json = compliant by design)"
---

# Quality Validator Report — Account Payable & Account Receivable: Pengertian dan Cara Mengelolanya

## Verdict: **pass**

The article clears both automated gates and every applicable batch-2026-08 check. The heuristic AI-detector scores **0.04** (pass; revise ≥0.30) with a single LOW-severity flag (paragraph CV 0.362, above both the 0.30 strong-AI-tell line and the approval floor). Web lookup of eight distinctive passages returned **zero verbatim matches** on any non-Soltius page — the only overlaps are concept-level standard accounting knowledge (three-way match, the meaning of 2/10 net 30), which the scoring rules explicitly ignore and which the article states in original phrasing. Formula math is correct, no regulation numbers are cited to re-verify (the article deliberately carries no PSAK number), EYD is clean, structure is intact, and the SAP claims are conservatively scoped to SAP Learning. Editor recommendation was `approve`; I concur. Curator may commit.

## Batch overrides applied (recorded per assignment)
| Check | Script default | Override | Result |
|---|---|---|---|
| Body word band | 1,500–1,800 | 800–1000 (target ~900) | **compliant** — 995 (markdown-aware `count_words.py`); tool's naive 1060 is the known pipe/URL inflation artifact, recorded N/A |
| FAQ count | 5–8 | 2–3 | **compliant** — 3 Q&A (43 / 50 / 50 words) |
| Internal links | 3 | 2 (1 hub + 1 cousin) | **compliant** — FICO hub (H2 #4) + Manajemen-Keuangan cousin (lead) |
| Image placeholders | validate `{IMAGE_NN}` + images.json | 0 by design; no images.json | **N/A by design** — 0 placeholders present; image checks skipped |
| Soltius mentions | ≤3 | ≤2 | **compliant** — 2 (positioning line + CTA) |
| Definition repetition | — | once, snippet only | **compliant** — no H2 restates the snippet |

All other checks applied in full (below).

## AI Detector (heuristic v2.0)
- Score: **0.04** / 1.0 (thresholds: revise ≥0.30, reject ≥0.50) → **pass**
- Paragraph burstiness (CV): **0.362** (target ≥0.45; failure floor <0.30 — clears it)
- Sentence burstiness (CV): **0.943** (strong, varied rhythm)
- Top-30 vocab share: **0.338** (below the 0.35 flag line)
- Flags (1):
  - [low] paragraph-low-variance: "Paragraph word-count CV=0.362 (target >=0.45)"
- Manual re-read confirms the script: 0 banned openers ("Di era digital / Seiring / Tidak dapat dipungkiri"), 0 consecutive "Selain itu", 0 "Penting untuk dicatat", 0 "Dengan demikian", **0 em-dashes**, no all-bullet H2 (2 tables + 1 numbered list + prose), no hype adjective stacks. The lone low-variance flag is inherent to a dense ~900-word explainer; forcing more variance would require padding or telegram-compression, both banned by addendum §1. Accepted; no action.

## Plagiarism (web lookup of distinctive passages)
8 candidate passages extracted; 6 distinctive prose passages web-searched (the other 2 candidates were header+sentence merges of the same prose).
- ✅ "menolak membayar sebelum tiga dokumen cocok" — no match; three-way match is standard practice, original wording
- ✅ "Notasi termin seperti 2/10 net 30 dibaca begini…" — no verbatim match; the 2/10-net-30 meaning is a standard accounting definition (ignored per rules), stated in the article's own phrasing
- ✅ "Piutang lewat 90 hari baru ketahuan saat direktur bertanya mengapa kas seret…" — no match (0 hits)
- ✅ "kontrolnya justru bekerja setelah faktur terbit, karena uangnya sudah ada di tangan orang lain" — no match
- ✅ "Faktur pemasok disetujui padahal barangnya kurang satu palet" — no match
- ✅ "Staf account payable memverifikasi faktur pemasok terhadap tiga dokumen…" — no verbatim match; the AP-staff duties are standard/generic (ignored per rules), phrased originally here
- **Aggregate plagiarism score: 0.00** — no exact match ≥20 words, no partial near-match on any non-Soltius URL.

## Fact / math / citation re-verification
- **2/10 net 30**: "diskon 2% bila dibayar dalam 10 hari, jatuh tempo penuh 30 hari" — **correct** (confirmed against standard accounting sources).
- **Aging buckets** 0–30 / 31–60 / 61–90 / >90 — contiguous 30-day tiers, no gap/overlap; consistent with "berjenjang 30 hari." Hedged "lazim dipakai, bukan ketentuan baku." **OK.**
- **Rp1 miliar worked example** (all 20 days healthy vs. half over 90 days not) — logically sound, no arithmetic error. **OK.**
- **DPO/DSO** named only (one table row each), no formula — respects the BI-cluster boundary. **OK.**
- **Regulation numbers**: article cites **no** PSAK number (correct per brief guardrail); classification stated as standard accounting fact. Nothing to re-verify. **OK.**
- **SAP claims** (three-step verification; payment via payment program only when no discrepancy and no payment block; AR records/manages each customer's data with reconciliation account auto-updated; master data holds payment terms + dunning terms) are scoped to SAP Learning and match the frontmatter citation contexts. The "three-way match" term is explicitly **not** attributed to SAP ("di luar SAP lazim disebut"). SAP Learning pages are JS-rendered (WebFetch returns title-only), so live body re-fetch is unreliable; relying on the editor/dossier same-day full-body capture, consistent with batch practice. **No overclaim found.**

## Structure integrity
- H1 present; 4 content H2 (#1 & #4 question-format, #2 & #3 practical/structured) — no definitional "Apa itu AP" H2 that would restate the snippet.
- Definition snippet blockquote "Ringkasnya:" defines both entities once; primary keyword "account payable adalah" appears verbatim.
- FAQ: 3 Q&A. Kesimpulan under its own H2. Soft CTA (soltius.co.id) as the final, separate line.
- 2 internal links (both inline, no "BACA JUGA"), 2 external SAP Learning citations, 2 tables + 1 numbered list.
- EYD clean; the editor's 3 light fixes (membayar / berulang kali / jenjang) are present.

## Loop status
Revision loop 0. No revision required.

## Recommendation to orchestrator
**Curator-ready.** AI 0.04, plagiarism 0.00, all applicable batch checks compliant, image checks N/A by design. Overall verdict (worst of AI-pass and plagiarism-pass) = **pass**. Per the assignment, the batch stops here for user review — do NOT run the curator or commit to articles_history.
