---
brief_id: "reorder-point-c01"
validator_run_date: "2026-07-17"
verdict: "pass"
ai_score: 0.08
plagiarism_score: 0.00
revision_loop: 0
batch: "conditional-2026-08 (style_addendum.md overrides applied — band 800–1000, FAQ 2–3, 2 internal links, no image placeholders; all other checks in full)"
---

# Quality Validator Report — Reorder Point (ROP): Rumus dan Contoh Perhitungannya

## Verdict: **pass**

The article clears both gates the validator owns. AI-detector heuristic score is **0.08** (pass; revise threshold 0.30) with only two low-severity flags, and sentence burstiness is high (CV 0.771) — no AI-tell pattern fired. Plagiarism web lookup of eight distinctive passages found **zero verbatim matches** on any non-Soltius site; all competing reorder-point pages use different wording. Independently re-verified: every arithmetic step reconciles and is internally consistent, and the one non-obvious cited fact (SAP's three-component replenishment lead time for externally procured material) is corroborated by SAP's own documentation. Structure, EYD, and the batch overrides all hold. Concurring with the editor's `approve`. Curator may commit.

## Batch overrides (recorded per assignment — addendum wins over script defaults)
| Check | Script default | Override applied | Status |
|---|---|---|---|
| Body word band | 1,500–1,800 | 800–1000 (target ~900) | **Compliant** — editor markdown-aware count 954; tool's 1011 is raw whitespace inflated by table pipes/heading markers (known batch artifact) |
| FAQ count | 5–8 | 2–3 | **Compliant** — 3 Q&A |
| Internal links | 3 | 2 | **Compliant** — 2 (SCM hub + WMS cousin) |
| Image placeholders / image brief | present | 0 by design; no images.json | **N/A** — image checks skipped by design (0 `{IMAGE_NN}`, no images.json) |

## AI Detector (heuristic v2.0)
- Score: **0.08** / 1.0 (thresholds: revise ≥0.30, reject ≥0.50) → **pass**
- Paragraph burstiness (CV): **0.347** (target ≥0.45; strong-AI-tell threshold is <0.30 — clears it)
- Sentence burstiness (CV): **0.771** (healthy; well above 0.45)
- Top-30 vocab share: **0.361** (target <0.30)
- Flags (2):
  - [low] `paragraph-low-variance`: CV 0.347 — matches the approved batch norm for short, table-heavy definitional articles; sentence-level variance (0.771) is strong, so overall burstiness signal is human. Not disqualifying.
  - [low] `vocab-repetition`: top-30 words = 36.1% — inherent to a "rumus" article whose head term ("reorder point"/"ROP") is the subject and legitimately recurs in H1, all H2s, the snippet, and FAQ questions. Reducing further would weaken the primary-keyword signal.
- No pattern-based AI tells fired: 0 "Selain itu" openers, 0 "penting untuk dicatat", 0 era-filler, 0 "dengan demikian", **em-dash count 0** (≤2).

## Plagiarism (web lookup of distinctive passages)
8 candidate passages checked via quoted WebSearch. Aggregate score **0.00** — no exact match, no partial near-match ≥70% word-order overlap on any non-Soltius URL.
- ✅ Lead opener "Stok menipis biasanya bukan kejutan" — clean (only unrelated news results)
- ✅ Unit-trap example "…1.200 unit per bulan… 14.400 unit… 30 kali lipat…" — clean; competing pages teach the concept but none share the wording
- ✅ "…40 unit per hari selama 12 hari ditambah 90 unit memberi 570 unit" — clean
- ✅ "Begitu stok tercatat menyentuh 570 unit, PO dibuat, bukan saat gudang terlihat menipis" — clean
- ✅ "…perhitungan ROP meleset di lapangan hampir selalu satuan, bukan rumusnya" — clean
- ✅ "Reorder point bukan angka sekali tetap" / "Ketika Reorder Point Tidak Bisa Lagi Ditulis di Spreadsheet" — clean (competitor phrasings differ)
- ✅ "Safety stock tidak mengubah logika ROP…menggeser titik pemicunya" — clean
- ⏭️ Soltius credential line — intentional self-reference (ignored per scoring rules, not plagiarism)
- No passage produced a verbatim hit ≥20 words on a third-party site.

## Independent re-verification (math + cited facts)
Re-checked from scratch (not trusting the editor's spot-check):
- 40 × 12 = **480** ✓
- (40 × 12) + 90 = **570**; selisih 570 − 480 = **90** (= the buffer) ✓
- Wrong-unit path: 1.200 × 12 = **14.400** ✓; 14.400 ÷ 480 = **30** → "tepat 30 kali lipat" ✓
- Conversion: 1.200 ÷ 30 = **40 unit per hari** ✓
- **Internal consistency:** the "30 kali lipat" ratio and the "÷ 30" conversion both derive from the same 30-day/month basis (1.200 ÷ 40 = 30) — self-consistent, not a coincidence. No arithmetic error.
- **Cited SAP fact (load-bearing):** replenishment lead time for externally procured material = *planned delivery time* + goods-receipt processing time + purchasing processing time (exactly three components). Corroborated by SAP's own RLT documentation. Citation is correctly scoped — attached only to the RLT composition/trigger/planning-mode facts, **not** to the two-form ROP formula table (the dossier's biggest attribution risk, correctly avoided).
- **Regulation numbers:** none present (no Indonesian legal/statutory citations to verify) — N/A.

## Structure integrity & EYD
- H1 with keyword ✓ · Lead ≤80 words, concrete pain, no roadmap paragraph ✓ · Definition snippet blockquote ("Ringkasnya:"), stated **once only** ✓
- 4 H2 (band 3–4): #1 & #3 question-format; #1/#2/#3 carry structured elements (2 tables + 1 numbered list) ✓
- FAQ 3 Q&A, each with a concrete number ✓ · Kesimpulan with 1 Soltius positioning line ✓ · Soft `soltius.co.id` CTA as the final, separate line ✓
- 2 internal links (both inline anchors, no "BACA JUGA" callout) · 2 external SAP citations ✓
- Soltius: 2 self-mentions, framed as implementer/partner ("mengimplementasikan dan mendampingi"), no superlatives ✓
- EYD: foreign terms consistently italicized; acronyms expanded on first use (PO → pesanan pembelian (PO); ERP; EOQ; SAP IBP); thousands separators correct (1.200 / 14.400); no typos or punctuation errors found.

## Loop status
Revision loop **0** (first pass). No revision required — verdict is `pass`, not `revise`.

## The shipping question
Would an HCU / SpamBrain review flag this as scaled-AI content? No. Would a detector give it >30% AI probability? No (0.08). Would any 20-word phrase turn up verbatim elsewhere? No. All three "no" → **pass**.
