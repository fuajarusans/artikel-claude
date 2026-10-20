---
brief_id: "sap-hyperscaler-c01"
validator_run_date: "2026-07-17"
verdict: "pass"
ai_score: 0.04
plagiarism_score: 0.00
revision_loop: 0
batch: "conditional-2026-08 (style_addendum.md overrides applied — band 800–1000, FAQ 2–3, 2 internal links, ZERO image placeholders, definition once only)"
---

# Quality Validator Report — SAP di AWS vs Azure vs GCP: Perbandingan untuk Perusahaan Indonesia

## Verdict: **pass**

The article clears both automated gates and every manual re-check. The heuristic AI-detector returns 0.04 (well below the 0.30 revise floor) with strong sentence burstiness (0.684) and varied paragraph openers; the single soft flag (paragraph-length CV 0.413) sits comfortably above the 0.30 AI-tell threshold and is not a fail. Zero plagiarism: none of the distinctive passages surface verbatim on any non-Soltius page — every web hit is either an official SAP/AWS/Google/Microsoft doc the article legitimately references or a generic topical article with no shared phrasing. All cited SAP Note numbers, region codes, launch dates, and availability-zone counts independently reconcile with primary sources. EYD, structure integrity, and all batch-2026-08 overrides hold. No revision needed; curator may commit (pending user review per the batch stop-point).

## Batch-2026-08 overrides applied (recorded as compliant / N/A, not failed)
- **Word band = 800–1000** (not the script's 1,500–1,800 default). Canonical `tools/count_words.py` → **976** ✓ (frontmatter `word_count: 976` confirmed; editor reported 976). The heuristic script's own `word_count: 1017` counts table-cell and markup tokens the canonical counter strips — not a gate; recorded as **N/A** in favor of the canonical 976.
- **FAQ = 2–3.** Actual **2** ✓ (Q3 would push past the hard 1000-word ceiling per editor reconciliation).
- **Internal links = 2** (1 hub + 1 cousin). Actual **2** ✓.
- **Image checks = N/A by design** — 0 `{IMAGE_NN}`, no `images.json`; image validation skipped, not flagged.
- **Definition once only** (snippet). No H2/body restatement ✓.
- **Soltius self-mentions ≤ 2.** Actual **2** (positioning line + CTA) ✓.

## AI Detector (heuristic v2.0)
- Score: **0.04** / 1.0 (thresholds: revise ≥0.30, reject ≥0.50) → **pass**
- Paragraph burstiness (CV): **0.413** (target ≥0.45; AI-tell floor 0.30 — comfortably clear)
- Sentence burstiness (CV): **0.684** (strongly human)
- Top-30 vocab share: **0.349** (under 0.35 threshold — no flag fired)
- Flags (1):
  - [low] paragraph-low-variance: Paragraph word-count CV=0.413 (target ≥0.45)
- Manual read against style_guide §5: no forbidden openers, no "Selain itu"/"Penting untuk dicatat"/"Dengan demikian" tells, **0** em-dashes (only 1 en-dash in the numeric range "M1–M4", correct typography), varied openers (Rencana/Ya/Setiap/Satu/Jarak/Baris/Bacalah/Tidak/Dokumentasi/Tiga/Ketiganya), paragraph lengths 1–4 sentences. Reads human.

## Plagiarism (web lookup of distinctive passages)
8 candidate passages extracted; 5 substantive ones web-searched (the other 3 are the title line, an FAQ heading, and the Soltius CTA — self-referential, excluded per agent rules).
- ✅ "Hanya tipe yang terdaftar di SAP Certified and Supported SAP HANA Hardware Directory…" — clean (hits = official SAP/HPE/Google docs only; no lifted prose)
- ✅ "Setiap hyperscaler menguji dan mensertifikasi konfigurasi bersama SAP… SAP Note 1656099 / 1928533" — clean (hits = SAP Support + Microsoft Learn docs; no verbatim match)
- ✅ "hyperscaler adalah penyedia cloud publik berskala global…" (definition snippet) — clean (topical articles only; no phrase overlap)
- ✅ "konfigurasi tersertifikasi mana yang tersedia di region yang Anda tuju" — clean (no match)
- ✅ Region/AZ comparison sentence — clean
- **Aggregate plagiarism score: 0.00** — no exact match, no 20+-word verbatim hit on any non-Soltius site.

## Fact / cited-number re-verification (override: re-verify cited regulation numbers + formula math)
No formulas present. All cited reference numbers and figures re-checked against primary sources:
| Claim | Independent check | Verdict |
|---|---|---|
| SAP Note **1656099** (AWS reference) | = "SAP Applications on AWS: Supported DB/OS and Amazon EC2 products" | pass |
| SAP Note **1928533** (Azure reference) | = supported Azure VM types for SAP | pass |
| SAP Note **2271345** (non-production rule) | Attributed as an AWS-docs reference, content NOT quoted (portal-gated) — correct per flag F1 | pass |
| AWS Jakarta `ap-southeast-3`, **Des 2021**, 3 AZ | Launched 14 Dec 2021, 3 AZ | pass |
| GCP Jakarta `asia-southeast2`, **Juni 2020**, 3 AZ | Opened 24 Jun 2020, 3 zones | pass |
| Azure **Indonesia Central**, **April 2025**, 3 AZ | GA 15 Apr 2025, 3 AZ (F3: not 27 May) | pass |
| "hampir lima tahun" (Jun 2020 → Apr 2025) | ≈ 4y 10m ≈ ~5 years | pass |

## EYD & structure integrity
- **EYD:** clean. Foreign/technical terms consistently italicized (*sizing*, *availability zone*, *high availability*, *machine type*, *bare metal*, *memory-optimized*, *go-live*); punctuation, capitalization, and sentence structure correct. Minor stylistic-only points (hyphenated bound prefixes "antar-region", "pasca *go-live*"; English preposition in "SAP on AWS/Azure/GCP") are idiomatic B2B-IT usage, not errors — no action.
- **Structure:** H1 with keyword entities ✓ · lead ≤80 words, concrete pain, no roadmap ✓ · single "Ringkasnya:" definition snippet (58 words, band 40–60) ✓ · 4 body H2 (3 question-format, 1 with comparison table) ✓ · definition not restated in any H2 ✓ · 1 comparison table + 2 bold-lead-in lists ✓ · FAQ 2 Q&A (each carries a fact) ✓ · Kesimpulan ≤80 words with 1 Soltius positioning line ✓ · soft website CTA as final line ✓ · 2 internal links + 2 external citations ✓.

## Loop status
Revision loop **0**. Verdict `pass` on first validation — no writer loop-back required.

## The shipping question
Would an HCU / SpamBrain review flag this as scaled-AI content? No — burstiness and openers read human, and the piece answers a real Indonesian buying decision on verifiable axes. Would Originality.ai give it >30% AI? Unlikely (heuristic 0.04). Would a 20-word phrase turn up verbatim elsewhere? No. **All three → pass.**
