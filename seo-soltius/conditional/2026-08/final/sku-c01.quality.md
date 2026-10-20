---
brief_id: "sku-c01"
validator_run_date: "2026-07-17"
verdict: "pass"
ai_score: 0.04
plagiarism_score: 0.00
revision_loop: 0
batch: "conditional-2026-08 (style_addendum.md overrides applied — band 800–1000, FAQ 2–3, 2 internal links, 0 image placeholder by design)"
---

# Quality Validator Report — SKU (Stock Keeping Unit): Pengertian, Fungsi, dan Cara Membuatnya

## Verdict: **pass**

The article clears both gates it owns. The AI-detector heuristic scores **0.04** (far below the 0.30 revise threshold), with only one low-severity flag (paragraph-length CV 0.396 — below the 0.45 stylistic target but well above the 0.30 hard AI-tell line, and expected in an 800–1000-word piece that deliberately mixes several one-sentence paragraphs). Sentence burstiness is excellent at **0.967**. Plagiarism web-lookup of the distinctive passages returned **zero verbatim matches** on any non-Soltius page; the only overlaps are standard, inherently high-overlap SKU definitions (ignored per agent rules), and this article's phrasing of them is original. Structure is intact, EYD is consistent, and the two re-verifiable regulation/spec numbers plus the worked arithmetic all check out. Editor recommended `approve`; I concur. **Curator-ready.**

## Batch override handling (addendum wins — recorded as N/A, not failures)

The `quality-check.ps1` script has no knowledge of the 2026-08 addendum, so its default bands do not apply. Per assignment instructions, the following are recorded **N/A / compliant by override**, not failed:

- **Word band.** Script's raw whitespace token count = **1042**. This is the raw-token trap the editor explicitly flagged: it counts markdown table pipes/separators, heading/bullet/blockquote markers, standalone em-dash, and inline-link URLs as tokens. The governing band is **800–1000** (addendum §1/§7) measured on cleaned prose tokens; editor's calibrated `word_count: 973` sits inside the band. Independent sanity check: the ~69-token gap between raw 1042 and clean 973 is fully accounted for by two tables' markup, five inline-link URLs, and heading/list markers — plausible and in-band. **COMPLIANT.** `word_count: 973` is correct; do not change it, and do not read the raw 1042 as ">1000 fail."
- **FAQ count.** 3 Q&A — within the **2–3** override band. **COMPLIANT.**
- **Internal links.** Exactly 2 (hub `retail-produk` + cousin `warehouse-management-system`) — matches the **2**-link override. **COMPLIANT.**
- **Image checks.** 0 `{IMAGE_NN}` placeholders and no `images.json` — **compliant by design** (addendum §3/§7). Image-brief validation **skipped, not flagged.**

## AI Detector (heuristic v2.0)

- Score: **0.04** / 1.0 (thresholds: revise ≥0.30, reject ≥0.50) → **pass**
- Paragraph burstiness (CV): **0.396** (target ≥0.45; hard AI-tell <0.30 — not triggered)
- Sentence burstiness (CV): **0.967** (strong human variance)
- Top-30 vocab share: **0.308** (below the 0.35 repetition flag)
- Flags (1):
  - [low] paragraph-low-variance: paragraph word-count CV=0.396. Non-blocking — a short piece (17 paragraphs) with three intentional one-sentence paragraphs compresses CV; sentence-level burstiness (0.967) confirms the rhythm is human, not uniform.
- Independent anti-AI read (addendum requires full §5 scan): 0 cliché openers, 0 "Selain itu/Dengan demikian/Penting untuk dicatat", 0 stacked hype adjectives, em-dash count 1 (limit 2), no every-H2-is-a-3-bullet pattern (H2 #4 is pure prose). Clean.

## Plagiarism (web lookup of distinctive passages)

5 distinctive passages web-searched (quoted). Aggregate score **0.00** — no exact match ≥20 words, no partial near-match on any non-Soltius URL.

- ✅ Lead narrative ("dua produk sama-sama bernama 'Kaos Polos Hitam'...") — clean; results are unrelated apparel/SKU pages, no phrase overlap.
- ✅ "penomoran manual gagal bukan karena aturannya salah, melainkan karena tidak ada yang menegakkannya" — clean; no source carries the phrase.
- ✅ "Kode SKU yang baik dibaca dari umum ke spesifik..." — clean; the general→specific principle is common SKU advice (ignored per rules), but no page shares the wording.
- ✅ "Angka 0 versus huruf O, 1 versus I..." — clean; character-confusion advice is generic, phrasing original.
- ✅ Definition snippet ("kode unik alfanumerik yang dibuat sebuah bisnis untuk mengidentifikasi setiap varian produk") — clean; standard SKU definition, inherently high-overlap and thus ignored, but returns no verbatim match.
- Self-reference / cited passages (Soltius credential line; "Menurut GS1 US...") correctly excluded from scoring (intentional citation/self-reference).

## Fact & regulation re-verification (addendum: re-verify formulas + cited numbers)

- **GTIN "8, 12, 13, atau 14 digit"** — CONFIRMED (GS1 US / Wikipedia: "GTINs can be 8, 12, 13, or 14 digits long"). Hedge on the SKU 8–12-char figure ("Tidak ada standar resminya") is intact and not falsely attributed to GS1.
- **SAP S/4HANA Retail variant numbering: "nomor varian secara standar dibentuk dari nomor artikel induk ditambah sufiks urut tiga digit"** — CONFIRMED verbatim against SAP source ("variants are by standard numbered based on the generic article's number, with an additional sequential three-digit suffix"). Hedge "secara standar" preserved; no transaction code / user exit / version claimed; cited URL (`learning.sap.com/.../creating-a-generic-article-1-1`) is the exact top result. Sound.
- **Arithmetic "3 warna × 4 ukuran = 12 SKU"** — CORRECT; series `NRD-KP-HTM-S` → `NRD-KP-NVY-XL` is internally consistent; Nordika labelled illustrative/fictional twice.

## Structure & EYD integrity

- Frontmatter → H1 → lead (≤80 w) → "Ringkasnya:" snippet blockquote → 4 body H2 → FAQ (3× H3) → Kesimpulan → soft CTA on the final line — all present and correctly ordered.
- Definition-once holds: definition appears only in the snippet. FAQ #1's contrastive mini-definition is the editor's documented, justified retention (FAQPage self-containment) and does not restate snippet content — accepted.
- EYD consistent: `antarproses` written closed correctly; foreign terms italicized on first mention (*stock opname*, *picking*, *dead stock*, *generic article*); number/range formatting (en-dash in "8–12", "sejak 1998") correct; no mixed "Stok opname" spelling remains (editor standardization verified via grep = 0).
- Soltius framing: exactly 2 self-mentions (positioning line in Kesimpulan + soft CTA), "mengimplementasikan serta mendampingi" (implements/supports, not "builds"), no body aside — within the ≤2 override.

## Loop status

Revision loop **0**. No revision required — verdict is `pass` on the first validator pass. Curator may commit (editor `approve` + validator `pass`).
