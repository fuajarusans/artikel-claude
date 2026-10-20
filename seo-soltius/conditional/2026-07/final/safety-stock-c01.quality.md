---
brief_id: "safety-stock-c01"
validator_run_date: "2026-07-06"
verdict: "pass"
ai_score: 0.08
plagiarism_score: 0.00
revision_loop: 0
batch_overrides: "conditional-2026-07 (style_addendum.md §7): word band 800–1000 = N/A-vs-default (compliant); FAQ 2–3 compliant; internal links 2 compliant; zero {IMAGE_NN} + no images.json = compliant BY DESIGN (image checks skipped). All other checks applied in full."
---

# Quality Validator Report — Safety Stock: Pengertian, Rumus, dan Cara Menentukannya

## Verdict: **pass**

The editor recommended **approve**, and both automated gates confirm it. The heuristic AI score is **0.08** (far below the 0.30 revise threshold), with only two low-severity statistical notes — neither an AI tell. Plagiarism web-lookup of the distinctive passages found **no verbatim match** on any non-Soltius page: the safety-stock formulas are standard mathematical conventions used across the SERP with different numbers, our chained illustration (50/70/10/14 → 480 vs 63) and prose are original, and the only self-referential phrase (the Soltius positioning line) is intentional. The safety-stock formula math was independently re-verified and is correct. Curator-ready.

## Batch overrides applied (conditional-2026-07, addendum §7)
- Word band **800–1000**: body = **956** (script) — compliant (default 1,500–1,800 recorded as N/A).
- FAQ **2–3**: actual **3** — compliant.
- Internal links **2**: actual **2** — compliant.
- Image checks: **zero `{IMAGE_NN}` + no images.json = compliant BY DESIGN** — skipped, not failed.
- All other checks (AI-tell heuristics, plagiarism/similarity, EYD, structure, formula math) applied in full.

## AI Detector (heuristic v2.0)
- Score: **0.08** / 1.0 (thresholds: revise ≥0.30, reject ≥0.50) → **pass**
- Paragraph burstiness (CV): **0.398** (target ≥0.45; above the 0.30 strong-AI-tell floor)
- Sentence burstiness (CV): **0.757** (healthy variation)
- Top-30 vocab share: **0.381**
- Flags (2, both low):
  - [low] paragraph-low-variance: CV=0.398 — re-read: at ~950 words a comparison table, a numbered calculation, and a bulleted factor list legitimately interleave with prose, compressing paragraph-length spread; sentence burstiness (0.757) is strong. Not an AI tell.
  - [low] vocab-repetition: top-30 words = 38.1% — re-read: expected topical density for a single-concept explainer ("safety stock", "buffer", "rumus", "service level", "lead time" recur by necessity). Not machine repetition.
- Manual §5 pass by eye: no "Di era digital/Selain itu/Penting untuk dicatat/Dengan demikian/Sebagai kesimpulan" patterns; 1 em-dash (≤2); varied rhythm. Confirms the script.

## Plagiarism (web lookup of distinctive passages)
8 candidates extracted; 5 highest-signal passages web-checked (formula/number strings + distinctive prose + positioning line):
- ✅ Passage 1 — "Service level 100% praktis mustahil dicapai karena kebutuhan buffer naik tidak proporsional." — no matching page; concept is standard SCM knowledge, phrasing original. Clean.
- ✅ Passage 2 — "Datanya: pemakaian rata-rata 50 unit per hari, maksimum 70; lead time rata-rata 10 hari, maksimum 14; σd harian 12 unit." — no page has this sentence; the (70×14)−(50×10)=480 formula is a standard convention (competitors use different numbers). Clean.
- ✅ Passage 3 — "Menentukan tidak sama dengan menghitung." — no source contains this phrasing; competing articles use entirely different wording. Clean.
- ✅ Passage 4 — "Rumus sederhana menumpuk skenario terburuk permintaan dan lead time sekaligus..." — no verbatim match; SERP uses different example numbers (e.g. 50/30/10→200). Clean.
- ✅ Passage 5 — Soltius positioning line ("Sebagai SAP Platinum Partner melalui keanggotaan United VARs...") — intentional self-reference from company_profile/product_matrix; hits (if any) would be on soltius.co.id. Ignored per validator rule (not plagiarism).
- **Aggregate plagiarism score: 0.00** — no verbatim hit ≥20 words on any non-Soltius URL.

## Formula math verification (batch requirement)
- Rumus sederhana: (70 × 14) − (50 × 10) = 980 − 500 = **480 unit** ✓ (re-derived)
- Rumus statistik: 1,65 × 12 × √10 = 1,65 × 12 × 3,1623 = **62,61 ≈ 63 unit** ✓ (re-derived)
- Ratio 480 / 63 = 7,62 → "hampir delapan kali" ✓
- Z-scores: 95% → 1,65; 99% → 2,33 ✓ (King table, dossier Claim 4)
- Carrying cost 15–25% correctly attributed to "Praktisi APICS/ASCM"; "eksponensial" correctly avoided in favor of "tidak proporsional". ✓

## The shipping question
- Would HCU / SpamBrain flag this as scaled-AI content? **No** (score 0.08; original decision-oriented angle, worked example, honest hedging).
- Would Originality.ai give >30% AI probability? **Unlikely** (healthy sentence burstiness; concrete numbers; practitioner framing).
- Would any 20-word phrase turn up verbatim elsewhere? **No** (all checked passages clean).

All "no" → **pass**.

## Loop status
Revision loop **0**. No revision needed. No writer loop triggered.
