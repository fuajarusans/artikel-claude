---
brief_id: "cng-indonesia-05"
validator_run_date: "2026-06-09"
verdict: "pass"
ai_score: 0.08
plagiarism_score: 0.00
revision_loop: 0
---

# Quality Validator Report — CNG & Transisi Energi Indonesia: Peran Gas Bumi Menuju Energi Bersih

## Verdict: **pass**

Both gates clear. AI heuristic score of 0.08 is well below the 0.30 revise threshold; sentence burstiness is strong at 0.673; two low-severity statistical flags (paragraph CV and vocab concentration) are domain-expected artefacts, not genuine AI tells, and do not alter the verdict. Plagiarism web lookup returned zero exact or near-exact matches on any non-Gagas public page across all 8 candidate passages — passages containing shared policy figures (15,75% EBT, 24% bauran 2050, 12 BSCFD, Permen ESDM 35/2021, IEA ~35%) are correctly attributed sourced citations, not copied phrasing. Article is curator-ready.

---

## AI Detector (heuristic v2.0)

- Score: **0.08** / 1.0 (thresholds: revise ≥ 0.30, reject ≥ 0.50)
- Paragraph burstiness (CV): **0.376** (target ≥ 0.45 — below target; context noted below)
- Sentence burstiness: **0.673** (strong)
- Top-30 vocab share: **0.362** (target < 0.30 — above target; context noted below)
- Flags (2):
  - [low] paragraph-low-variance: Paragraph word-count CV = 0.376 (target ≥ 0.45)
  - [low] vocab-repetition: Top 30 words = 36.2% of body (target < 30%)

### Manual re-read of flagged sections

Both flags are low severity and their scores sit only modestly outside target ranges. Neither crosses a hard-reject threshold, and neither survives contextual scrutiny as a genuine AI tell.

**Paragraph CV (0.376 vs. 0.45 target).** The article includes image-placeholder lines ({IMAGE_NN: ...}), a four-row comparison table, and a numbered list — all of which register as very short "paragraphs" in the word-count scanner, compressing the distribution. Reading the actual prose paragraphs directly: the lead is ~75 words, the blockquote ~55 words, the roadmap sentence ~27 words, the "Peran kedua paling sering luput" standalone line is one deliberate short sentence (~27 words), the bauran section opens with ~60 words, the FAQ answers range 50–80 words, and the Kesimpulan is ~85 words. This is genuine length variation typical of a human expert writer mixing density with punch lines. The low CV reading is a scanner artefact of non-prose elements, not a structural AI tell.

**Vocab concentration (36.2% vs. 30% target).** The article is topically narrow by design: it covers a single domain (gas bumi / energi transisi / CNG) and must use its core terminology throughout (gas, energi, transisi, batu bara, EBT, emisi, bumi, bauran). These are load-bearing topic words, not decorative AI filler. A domain-focused 1,500-word B2B explainer on a single policy/energy topic will inherently have higher vocabulary concentration than general-purpose prose. The editor's §5 anti-AI scan confirmed zero pattern matches (no clichéd openers, no "Selain itu" stacking, no em-dashes in prose, no symmetric paragraph structures, no hype adjectives). The vocab flag does not represent an AI pattern in this context.

No high-severity flags fired. Overall AI score of 0.08 is comfortably clear. Verdict from this gate: **pass**.

---

## Plagiarism (web lookup of 8 distinctive passages)

Aggregate score: **0.00**

| # | Passage (truncated) | Search result | Classification |
|---|---|---|---|
| 1 | "Gas bukan tujuan akhir, dan mengakui keterbatasannya justru memperkuat kredibilitas." | Topically adjacent articles (Greenpeace, infonasional) share the concept but no page reproduces this sentence verbatim. | clean |
| 2 | "gas bumi ditargetkan mengisi sekitar 24% bauran energi nasional pada 2050, berdampingan dengan minyak bumi 20% dan EBT 31%." | ESDM/Ditjen Migas/Databoks confirm 24% / 20% / 31% as public RUEN figures. No page reproduces this sentence phrasing verbatim. Properly attributed paraphrase of official policy data. | clean (sourced fact) |
| 3 | "bauran EBT nasional baru mencapai 15,75% pada 2025, di bawah target 23% (Kementerian ESDM, 2025)." | Dunia Energi, InvestorTrust, ESDM all report 15.75% and 23% target. No page reproduces this exact sentence. Public empirical statistic, inline-attributed. | clean (sourced fact) |
| 4 | "pemerintah menargetkan 12 BSCFD pada 2030 lewat Permen ESDM 35/2021." | ESDM/Ditjen Migas pages confirm 12 BSCFD and Permen ESDM 35/2021. No verbatim sentence match. Public policy regulation, properly cited by name. | clean (sourced fact) |
| 5 | "Apa Itu Energi Transisi, dan Mengapa Gas Bumi Termasuk di Dalamnya?" (H2 heading) | ESDM and university pages discuss the topic; none reproduce this exact heading. Generic question-format H2. | clean |
| 6 | "emisi lifecycle-nya sekitar 35% lebih rendah dari batu bara" attributed to IEA Global Methane Tracker 2025 | IEA iea.org page confirms "about 35% fewer emissions than coal" in Global Methane Tracker 2025. Article attributes the figure correctly inline. No verbatim Indonesian sentence match on any non-Gagas page. | clean (proper citation) |
| 7 | "60% produksi gas bumi nasional kini dialokasikan untuk dalam negeri" (Ditjen Migas) | Bisnis.com / SKK Migas data show actual domestic allocation at 68–69%. Article uses conservative ">60%" consistent with the floor of public data. No verbatim sentence match. | clean (conservative sourced claim) |
| 8 | "Apa target bauran energi gas bumi Indonesia pada 2030 dan 2050?" (FAQ heading) | Generic question; found as a topic across multiple energy pages but no verbatim heading match. | clean |

**Scoring:** 0 exact matches (0 × 0.05 = 0.00) + 0 partial near-matches (0 × 0.02 = 0.00) = **0.00**. Verdict threshold: pass < 0.10. This gate: **pass**.

---

## Aggregate verdict

| Gate | Score | Threshold | Result |
|---|---|---|---|
| AI detector | 0.08 | revise ≥ 0.30 | pass |
| Plagiarism | 0.00 | revise ≥ 0.10 | pass |
| **Overall (worst of two)** | — | — | **pass** |

---

## Loop status

This is revision loop 0 (first pass). Verdict: **pass** — no revision needed. Article is curator-ready.
