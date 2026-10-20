---
brief_id: "oee-c01"
validator_run_date: "2026-07-18"
verdict: "pass"
ai_score: 0.08
plagiarism_score: 0.00
revision_loop: 0
batch: "conditional-2026-08 (style_addendum.md overrides applied — band 800–1000, FAQ 2–3, 2 internal links, no image placeholders, ≤2 Soltius mentions, definition-once)"
---

# Quality Validator Report — Apa Itu OEE (Overall Equipment Effectiveness) dan Cara Menghitungnya

## Verdict: **pass**

The article clears both gates the validator owns. The AI-tell heuristic scores **0.08** (pass; revise ≥0.30) with only two low-severity flags, both fully explained by the article's deliberately formula-dense body rather than by generative uniformity. Plagiarism web lookups on six distinctive passages returned **zero verbatim or near-verbatim matches** on any non-Soltius page (aggregate 0.00). Independent re-verification of every arithmetic chain and every cited standard/benchmark number reconciles exactly with the dossier. All batch-2026-08 addendum overrides are satisfied. Editor recommendation (`approve`) is concurred. Curator may commit.

## AI Detector (heuristic v2.0)
- Score: **0.08** / 1.0 (thresholds: revise ≥0.30, reject ≥0.50) → **pass**
- Paragraph burstiness (CV): **0.395** (target ≥0.45; hard AI-tell floor 0.30 — comfortably above)
- Sentence burstiness (CV): **0.668** (excellent variance — strong human signal)
- Top-30 vocab share: **0.369**
- Flags (2, both LOW):
  - [low] `paragraph-low-variance`: CV=0.395 (below the 0.45 ideal but well above the 0.30 danger floor). Verified by eye: paragraphs run 1–4 sentences with several single-sentence blocks; the modest CV is driven by the worked-calculation list and short quotable one-liners sitting next to fuller prose, not by uniform GPT-style paragraphing. Not an AI tell.
  - [low] `vocab-repetition`: top-30 words = 36.9% of body. Expected artefact of a calculation article that necessarily repeats the domain nouns (OEE, availability, performance, quality, time, menit, unit) and the illustration's variable names. Not indicative of low perplexity.
- Manual §5 cross-check: 0 clichéd openers (lead opens on a concrete pain), 0 "Selain itu" openers, 0 "Penting untuk dicatat", 0 "Dengan demikian", **0 em-dash** (≤2), no bullet-only sections (1 table + 1 numbered list + prose), no stacked hype adjectives, no mid-body service dump. Clean.

## Plagiarism (web lookup of distinctive passages)
6 distinctive passages web-searched (quoted). Illustration-arithmetic candidates are article-specific fabricated numbers and carry no plagiarism risk by construction; the checks below targeted the quotable prose most at risk of accidental lifting.
- ✅ "85% adalah hasil perkalian tiga minimum komponen dalam kerangka TPM…" — clean (generic TPM pages only; no verbatim page)
- ✅ "Masing-masing punya rumus turunannya sendiri… Run Time, Planned Production Time, Ideal Cycle Time…" — clean (generic cycle-time pages only)
- ✅ "Dua lini di pabrik yang sama melaporkan OEE 70%…" (lead) — clean (no page carries the sentence; concept is common, wording original)
- ✅ "OEE hanya sejujur pencatatan di baliknya" / "Micro-stop dua menit yang tak pernah dicatat…" — clean
- ✅ "…identik dengan hasil perkalian tiga faktor" / "Kalau kedua cara tidak bertemu, yang salah datanya, bukan rumusnya" — clean
- ✅ "OEE menilai eksekusi; TEEP mengungkap kapasitas yang menganggur" — clean (standard OEE/TEEP contrast, original phrasing)
- Exact matches on non-Soltius URLs: **0**. Partial near-matches (>70% word-order): **0**.
- Aggregate plagiarism score: **0.00** (threshold revise ≥0.10) → **pass**

## Re-verified: formula math (all chains recomputed independently)
| Chain | Result | Verdict |
|---|---|---|
| Planned Production Time = 480 − 30 | 450 | ✅ |
| Run Time = 450 − 90 | 360 | ✅ |
| Availability = 360 ÷ 450 | 80% | ✅ |
| Performance = (0,45 × 720) ÷ 360 = 324 ÷ 360 | 90% | ✅ |
| Ideal capacity 360 ÷ 0,45 = 800; speed loss 800 − 720 | 80 unit | ✅ |
| Quality = 684 ÷ 720; reject 720 − 684 | 95%; 36 | ✅ |
| OEE = 80% × 90% × 95% | 68,4% | ✅ |
| Cross-check = (684 × 0,45) ÷ 450 = 307,8 ÷ 450 | 68,4% (identical) | ✅ |
| World-class = 90% × 95% × 99% | 84,645% ≈ 85% | ✅ |
| TEEP = 0,684 × 16/24 | 45,6% | ✅ |

Every chain reconciles to the printed figure. Cross-check truly equals the three-factor product (both 68,4%). Loss attribution (90 min downtime / 80 unit speed / 36 unit reject) is internally consistent. All figures carry the mandated "angka rekaan, bukan data pabrik" label.

## Re-verified: cited standard & benchmark numbers (against dossier Flags)
- **ISO 22400-2:2014** — correct standard number and year; framed only as "membakukan definisi KPI manufaktur" and "kerangka KPI ISO 22400 memisahkan planned down time dari planned busy time". No clause text quoted, no "34 KPI", no POT/PBT/PDOT presented as verbatim ISO. Complies with Flag 4.
- **Nakajima 85% provenance** — uses 90% × 95% × 99% ≈ 84,6% (the brief's committed convention), rounds to 85%, never writes "tepatnya 84,6%", never mixes in 99,9%. Complies with Flag 1.
- **Nakajima / TPM / JIPM** — attributed with **no book year** (default-safe). Complies with Flag 2.
- **Six big losses** — six items with loss #6 as "kerugian hasil saat start-up"; 2→Availability, 2→Performance, 2→Quality. Complies with Flag 3.
- **SAP Digital Manufacturing cascade** — 4 operational levels (Loading Time → Net Production Time → Net Operating Time → Value Operating Time); no Theoretically Available Time, no technical field names, "A × P × Q" not attributed to SAP; computed at resource/work-center level, shift/day range. Complies with Flag 6.
- **No fabricated Indonesia benchmark**, no 19,07% PDB figure. Complies with Flag 5.

## EYD & structure integrity
- **EYD**: Bahasa Indonesia spelling/grammar correct; decimal-comma convention consistent (68,4%; 0,45; 84,6%; 45,6%); English terms italicised on first use; acronyms expanded once. No errors found.
- **Structure**: lead → single "Ringkasnya:" definition snippet (the article's only definition; no restatement in body/H2) → 4 lean H2 (question-format #1 & #3; table in #1, numbered worked calculation in #2) → FAQ (3 Q&A) → Kesimpulan → soft `soltius.co.id` CTA on the final line. Order and element integrity intact.

## Batch-2026-08 overrides (recorded per assignment — addendum wins over script defaults)
| Check | Script default | Override applied | Result |
|---|---|---|---|
| Word band | 1.500–1.800; script naive count **1036** | Band **800–1000**; editor calibrated **985** | **compliant** (script's 1036 is inflated by table pipes and `=`/`÷`/`×` symbols — a known batch artefact; recorded **N/A** as a band failure) |
| FAQ count | 5–8 | 2–3 | **compliant** (3) |
| Internal links | 3 | 2 | **compliant** (2: hub + cousin) |
| Image placeholders / images.json | required | forbidden by design | **N/A** (0 found; image checks skipped by design) |
| Soltius self-mentions | ≤3 | ≤2 | **compliant** (2: positioning line + CTA) |
| Definition repetition | — | once (snippet only) | **compliant** |
| Em-dash | ≤2 | ≤2 | **compliant** (0) |
| External citations | ≥1–2 | 1–2 | **compliant** (2: SAP Learning + ISO 22400-2) |

## Loop status
Revision loop **0**. No revision required — first pass clears both gates.

## Recommendation
**Curator-ready.** Editor `approve` + validator `pass`. Per assignment, the batch stops here for user review; do not run the curator and do not commit to `articles_history`.
