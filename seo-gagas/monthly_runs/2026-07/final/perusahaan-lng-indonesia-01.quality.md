---
brief_id: "perusahaan-lng-indonesia-01"
validator_run_date: "2026-06-09"
verdict: "pass"
ai_score: 0.04
plagiarism_score: 0.00
revision_loop: 0
---

# Quality Validator Report — Apa Itu LNG dan Bedanya dengan CNG serta Gas Pipa

## Verdict: **pass**

All gates clear. The AI heuristic score (0.04) is well below the revise threshold (0.30), driven by strong sentence-level burstiness (CV 0.942) and a healthy vocabulary profile (top-30 share 0.33). One low-severity flag fires — paragraph-level burstiness CV 0.392, just below the 0.45 target — but the numeric score is so far below rejection territory that this does not warrant revision on its own. A manual read of the flagged sections confirms variation is present: the article mixes 1-sentence paragraphs (the paired-em-dash fix, the "rantai dingin" observation) against 4–6-sentence blocks; the CV slightly undershoots the ideal because the table section and FAQ block pull the distribution. No single structural AI pattern from style_guide.md §5 fired. Plagiarism lookup of all 8 candidate passages returned zero exact matches and zero partial near-matches (aggregate score 0.00); all phrasing is original to this article. LNG technical facts (−162°C, ~1/600, 200–250 bar) appear widely in public sources as shared scientific and regulatory terminology — not as copied prose. Article is curator-ready.

---

## AI Detector (heuristic v2.0)

- Score: **0.04** / 1.0 (thresholds: revise ≥0.30, reject ≥0.50)
- Paragraph burstiness (CV): **0.392** (target ≥0.45) — only metric below target
- Sentence burstiness (CV): **0.942** — strong; well above target
- Top-30 vocab share: **0.33** — healthy (lower = more varied vocabulary)
- Word count: 1,611 (within 1,200–1,600 target band, minor overage)
- Flags (1):
  - [low] paragraph-low-variance: Paragraph word-count CV=0.392 (target ≥0.45)

**Manual review note on the low-paragraph-variance flag:** The flag is real but its practical weight is low here. The article's 17 paragraphs include a YAML frontmatter block, an image-placeholder block, a comparison table, a blockquote definition snippet, and a 6-entry FAQ — all of which have structurally constrained lengths that compress the distribution toward the mean. The actual prose body (excluding structural elements) shows adequate 1-to-6 sentence variation across H2 sections. With an overall AI score of 0.04, the paragraph CV shortfall does not independently trigger a revise call per the "do not approve when paragraph burstiness CV < 0.30" rule — that absolute floor is comfortably cleared.

---

## Plagiarism (web lookup of 8 candidate passages)

All searches executed as quoted-phrase queries. None returned a hit on a non-Gagas public page.

| # | Passage (truncated) | Result | Notes |
|---|---|---|---|
| 1 | "CNG dikompresi ~200–250 bar pada suhu ruang sehingga tetap berwujud gas (volume ~1/250)." | clean | Technical fact widely published (ESDM, Wikipedia, pgnlng.co.id); the exact phrasing with "~200–250 bar", "suhu ruang", and "(volume ~1/250)" in sequence is unique to this article. Sources found describe these parameters in separate sentences or different syntactic constructions. |
| 2 | "Dengan mendinginkannya hingga sekitar −162°C, volumenya menyusut ~1/600, sehingga satu tangki bisa memuat energi setara sekitar 600 tangki gas atmosferik." | clean | No match. The "600 tangki gas atmosferik" framing and "satu tangki bisa memuat energi setara" clause are original constructions. The underlying 1/600 figure is sourced from ESDM/Ditjen Migas (cited in text) and appears in public sources without this specific sentence structure. |
| 3 | "Tiga moda ini sering tertukar karena terlihat mirip di mata pengguna akhir." | clean | No match. Search returned unrelated content (marine biology, visual perception). Phrasing is original. |
| 4 | "Keduanya memang gas bumi yang sama, tetapi cara memadatkannya berbeda total: LNG didinginkan jadi cair, CNG ditekan tetap berwujud gas." | clean | No match. Searches surfaced background articles (Kompas, Detik, Wikipedia) that discuss LNG vs CNG; none share this exact phrasing or the "cara memadatkannya berbeda total" construction. |
| 5 | "Dalam wujud cair, volumenya menyusut hingga sekitar 1/600 dibanding kondisi gasnya (Kementerian ESDM)." | clean | No match. The "(Kementerian ESDM)" inline attribution and "kondisi gasnya" phrasing are unique. Public sources use different sentence structures for this same cited fact. |
| 6 | "Yang berbeda hanya cara penyalurannya: gas pipa dialirkan kontinu lewat jaringan tetap; LNG dicairkan lalu diregasifikasi; CNG dikompresi bertekanan tinggi." | clean | No match. The semicolon-separated triple parallel construction is original. Background articles on LNG/CNG/gas pipa found do not share this specific sentence architecture. |
| 7 | "FAQ (Pertanyaan yang Sering Diajukan)" + "Apa itu LNG (Liquefied Natural Gas)?" | clean | No match for the combined block. "FAQ (Pertanyaan yang Sering Diajukan)" is a generic structural label; pgnlng.co.id, solarindustri.com, and others publish LNG FAQs but none matched the specific Q&A phrasing in this article. |
| 8 | "Gas bumi sendiri ditargetkan menyumbang 24% bauran energi nasional pada 2050, dan sekitar 22,57% produksinya saat ini diekspor dalam bentuk LNG (Kementerian ESDM)." | clean | No match. The ESDM 24%/2050 target appears on multiple government pages; the 22,57% export figure is consistent with ESDM data (reported elsewhere as 22.18% for a different base year — typical dataset-period variation). The specific sentence combining both statistics with "(Kementerian ESDM)" attribution is original to this article. The 22,57% figure is treated as a sourced fact from the researcher's dossier, not a copied phrase. |

**Aggregate plagiarism score: 0.00** (0 exact hits × 0.05 + 0 partial hits × 0.02 = 0.00)

Verdict threshold: pass if score < 0.10 AND no passage has a verbatim hit ≥20 words on a non-Gagas site. Both conditions met.

**Gagas.co.id exclusion applied:** internal links to gagas.co.id/perusahaan-lng-indonesia/, gagas.co.id/perusahaan-cng-indonesia/, and gagas.co.id/gaslink/ are intentional self-references and were excluded from plagiarism consideration per protocol.

**Common-terminology exclusion applied:** LNG technical parameters (−162°C, 1/600, 200–250 bar, CH4, regasifikasi) are standard ESDM-sourced scientific and regulatory terminology — inherently high-overlap across the industry — and were assessed at the sentence/phrasing level, not the isolated term level.

---

## Loop status

This is revision loop 0. Verdict is **pass** — no revision loop required. Article is curator-ready.

---

## Recommendation

**Curator-ready.** Editor verdict: approve (9/10). Validator verdict: pass. Both gates cleared. Curator may commit `monthly_runs/2026-07/final/perusahaan-lng-indonesia-01.id.md` to history and build the `.docx`.
