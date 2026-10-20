---
brief_id: "olap-oltp-c01"
validator_run_date: "2026-07-18"
verdict: "pass"
ai_score: 0.04
plagiarism_score: 0.00
revision_loop: 0
batch: "conditional-2026-08 (style_addendum.md overrides applied — word band 800–1000; FAQ 2–3; internal links TEPAT 2; zero {IMAGE_NN} + no images.json = compliant by design; all other checks in full)"
---

# Quality Validator Report — OLAP vs OLTP: Perbedaan dan Fungsinya dalam Sistem Database

## Verdict: **pass**

The article clears both automated gates decisively. The AI-tell heuristic scored **0.04** (pass; reject ≥0.50, revise ≥0.30) with a single low-severity flag. Every distinctive passage came back **clean** on quoted web lookup — no verbatim or near-verbatim match on any non-Soltius page. Both cited references re-verified against source: the Plattner SIGMOD 2009 keynote (title, author, DOI) and the three AWS-sourced figures (latency, volume, "most companies run both") are represented accurately. The Soltius credential and framing match the approved knowledge base. Editor recommendation was `approve`, so no short-circuit. All batch-2026-08 addendum overrides are satisfied. **Curator-ready.**

## AI Detector (heuristic v2.0)
- Score: **0.04** / 1.0 (thresholds: revise ≥0.30, reject ≥0.50) → **pass**
- Paragraph burstiness (CV): **0.324** (target ≥0.45; strong-AI-tell floor <0.30 — above it)
- Sentence burstiness (CV): **0.878** (excellent — wide, human-like variation)
- Top-30 vocab share: **0.341** (below 0.35 flag threshold)
- Flags (1):
  - [low] `paragraph-low-variance`: Paragraph word-count CV=0.324 (target ≥0.45)

**Assessment of the one flag (non-blocking):** Paragraph CV sits below the 0.45 target but comfortably above the 0.30 strong-tell floor. In a tight ~900-word format the addendum deliberately caps paragraphs at 1–4 sentences, which compresses paragraph-length variance by design. This is offset by very high *sentence*-level burstiness (0.878) and the total absence of every other tell (no cliché opener, 0 em-dashes, no "Selain itu"/"Penting untuk dicatat"/"Dengan demikian" abuse, not every H2 a bullet list, varied one-sentence paragraphs present). The prose reads human. No action required. Per the validator's own guardrail, the CV is not below the 0.30 auto-fail line, so approval is legitimate.

## Plagiarism (web lookup of distinctive passages)
Script extracted 8 candidates; the meaningful prose passages were WebSearch-checked (heading-artifact concatenations and the intentional Soltius self-reference line were handled per rules — self-mentions of soltius.co.id are excluded, not plagiarism).

- ✅ "OLAP menyentuh sedikit kolom di jutaan baris, misalnya satu kolom margin sepanjang tiga tahun." — no match (results unrelated: Excel/OLAP tutorials, USPTO patents).
- ✅ "AWS mencatat sebagian besar perusahaan justru menjalankan keduanya berdampingan, bukan memilih salah satu." — no match; the underlying claim is a faithful paraphrase of the AWS source, not lifted wording.
- ✅ "OLAP (*Online Analytical Processing*) menjawab pertanyaan analitis lintas periode atas jutaan baris..." — no match.
- ✅ "Ketika manajemen meminta tren margin per lini produk selama tiga tahun, kueri itu memindai jutaan baris..." — no match (results were generic contribution-margin articles).
- ✅ "Sebagai SAP Platinum Partner melalui United VARs, Soltius mengimplementasikan dan mendampingi..." — intentional self-reference (positioning line), excluded from scoring per agent rules.
- ✅ Remaining candidates are H1/H2-plus-first-sentence concatenation artifacts, not real lift risks.

- Aggregate plagiarism score: **0.00** (0 exact hits, 0 partial near-matches on any non-Soltius URL; no 20+-word verbatim passage found anywhere)

## Fact / citation re-verification (mandate: re-verify formula math & cited numbers)
No formulas present. Cited numbers and references re-checked against source:

| Claim in article | Source | Verdict |
|---|---|---|
| OLTP ~milidetik; OLAP ~detik hingga menit (kisaran tipikal) | AWS ID page: "OLTP ... dalam milidetik" / "OLAP ... dalam detik atau menit" | verified ✓ |
| Volume OLTP GB; OLAP TB–PB | AWS ID page: "gigabita (GB)" / "terabita (TB) dan petabita (PB)" | verified ✓ |
| "sebagian besar perusahaan menjalankan keduanya berdampingan" | AWS ID page: "Sebagian besar perusahaan menggunakan sistem OLTP dan OLAP secara bersamaan" | verified ✓ (faithful paraphrase) |
| Plattner, ACM SIGMOD 2009, exact title, DOI 10.1145/1559845.1559846, "makalah keynote" | Semantic Scholar + ACM DL (dl.acm.org/doi/10.1145/1559845.1559846); Providence, RI, Jun–Jul 2009 | verified ✓ (title, author, DOI exact; keynote framing corroborated) |
| HTAP = Hybrid Transactional/Analytical Processing | Standard industry expansion | verified ✓ |
| Hasso Plattner = co-founder SAP; SAP HANA = in-memory column DB engine (≠ S/4HANA app) | Correct; disambiguation is accurate | verified ✓ |
| "SAP Platinum Partner melalui United VARs"; Soltius "mengimplementasikan dan mendampingi" (never builds) | company_profile.md L42/L140 + product_matrix.md L110/L121 (blacklist) | verified ✓ |

## Batch-2026-08 override compliance
| Check | Addendum rule | Status |
|---|---|---|
| Word count | 800–1000 (editor: 959) — COMPLIANT by override | pass (override) |
| FAQ count | 2–3 → 3 present | pass |
| Internal links | exactly 2 (1 hub + 1 cousin) → 2 present | pass |
| Image placeholders / images.json | 0 by design → skip image checks | N/A (compliant by design) |
| Soltius self-mentions | ≤2 → 2 (positioning line + soft CTA) | pass |
| Definition-repeat | definition only in snippet; body must not restate | pass — snippet defines once; H2 direct-answers carry new points (access shape, storage layout, unification, decision criteria); FAQ gives examples/numbers, not a re-definition |
| Structure integrity | frontmatter, H1, lead ≤80w (no roadmap), snippet blockquote 40–60w, 4 body H2 (≥1 question, ≥1 table/list), FAQ, ## Kesimpulan ≤80w, soft CTA last line | all present ✓ |
| EYD | foreign terms italicized on first use (OLTP/OLAP/row store/column store/in-memory/HTAP), acronyms expanded, HANA≠S/4HANA glossed | pass (only "go-live" un-italicized — non-blocking, matches pipeline benchmark) |

Note on the script's raw `word_count: 1001`: this is a whitespace-token count over the full prose text *including* table-cell content, heading text, and split URL fragments — not a clean body-word count. The authoritative body count is the editor's 959, inside the 800–1000 band. Per the batch override this check is compliant regardless; the 1001 figure is a counting-method artifact, not an overflow.

## AI vs plagiarism aggregation
Overall verdict = **worst of the two** = pass (AI: pass 0.04; plagiarism: pass 0.00). Editor recommendation `approve` inherited without downgrade.

## Loop status
Revision loop **0**. No revision needed. No writer loop triggered.

## The shipping question
Would an HCU/SpamBrain review flag this as scaled AI content? No — burstiness and tell-scan are clean, the argument is original and honestly hedged. Would a detector give it >30% AI probability? Unlikely at score 0.04. Would any 20-word phrase surface verbatim elsewhere? None did across every distinctive passage checked. All "no" → **pass.**
