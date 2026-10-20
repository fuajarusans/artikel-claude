---
brief_id: "perusahaan-cng-indonesia-02"
editor_run_date: "2026-09-28"
recommendation: "approve"
overall_score: 9
ai_score: 0.04
plagiarism_score: 0.05
---

# Editor QC Report — Rencana Kontingensi Energi: Jangan Bergantung Satu Perusahaan CNG

## Recommendation
**approve**

This is a strong, decision-useful draft that reads like a supply-planning practitioner talking to a procurement lead, not an AI synthesis. It nails the hardest part of this brief: the three easily-confused "~48%" figures are explicitly separated (AGIT ~47,5% Jan–Mei vs. ~78–80% of minimum-contract volume in September vs. 45–48% cost-share), and the September price disparity is presented as a reported range rather than a single fact. Every number traces to the dossier; there is no invented uptime, Rupiah, product name, or spec. PGN Gagas framing is exemplary — distributor "menyalurkan CNG beyond-pipeline" (not producer), the telemetry claim is attributed to gagas.co.id and framed as "satu lapis mitigasi, bukan jaminan," and the root cause of the 2026 crisis is correctly located upstream ("di luar kendali distributor mana pun"). AI-detector score is 0.04 and burstiness CV 0.44 (healthy). I made two in-place improvements (added the force-majeure FAQ that the brief listed as a PAA; attributed the Kepmen numbers to secondary press per the dossier hedge). The only open item is that plagiarism was verified heuristic-only because WebSearch was disabled this run — a degraded mode that does not block a clean approve here, since the flagged passages are the writer's own sentences wrapping non-copyrightable facts.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Concrete pain hook, varied rhythm, honest hedging; zero body em-dashes, no "Selain itu"/"Dengan demikian"/"Penting untuk dicatat". AI score 0.04. |
| Factual & energi-gas / CNG accuracy | 9 | All claims dossier-sourced; the three ~48% figures disambiguated; price disparity framed as range; Kepmen numbers attributed to press. |
| On-page SEO compliance | 9 | Meta title 53, meta desc 151, slug 41; H1 has keyword; 5 body H2s; keyword in first 100 words; def snippet; 3 internal links; FAQ 6; tables + lists. |
| GEO extractability (§2a) | 9 | 40–60-word direct answer after every H2; one quotable point per paragraph; FAQ FAQPage-ready; `date_modified` added to meta block. |
| PGN Gagas framing discipline | 10 | Distributor not producer; 2 name mentions; no superlatives; telemetry attributed + hedged; upstream root cause; positioning line + soft CTA. |
| Internal linking | 9 | Hub in lead + 2 cousins (Gaslink, LNG), natural inline anchors; no "BACA JUGA". |
| FAQ quality | 9 | 6 Q&As, 40–80 words each, real PAA phrasing, each carries a number/fact. |
| Originality (plagiarism + AI-detector) | 9 | AI 0.04; CV 0.44; no verbatim-lift patterns. Plagiarism heuristic-only (no WebSearch) — see §F. |

## What I fixed (changelog)
- Added a 6th FAQ ("Siapa yang menanggung risiko saat gangguan disebabkan force majeure?") — a PAA explicitly listed in the brief and drafted in the dossier, not covered elsewhere in the body. Rewrote the dossier answer to remove its em-dash and trim to ~63 words.
- Attributed the Kepmen numbers per the dossier hedge: "Kepmen ESDM No. 281.K/2026 yang, menurut pemberitaan industri, menggantikan No. 250.K/2026" (was stated flatly). These numbers are secondary-press-sourced (medium-high), not read from JDIH.
- Added `date_modified: "2026-09-28"` to the meta block (GEO §2a freshness signal).
- Set `word_count` to 1560 (accurate readable-body figure; the writer's 1534 predated the added FAQ).
- Minor punctuation tidy in the ESDM `external_citations` context field (removed the stray em-dash so the article carries zero em-dashes anywhere).

## What I flagged (open issues)
- ⚠️ **Plagiarism check ran in degraded mode (heuristic-only; WebSearch disabled this run).** *Recommendation*: before publish, a curator/human can optionally web-spot-check the two most fact-dense sentences (the Bloomberg Technoz "53 perusahaan … naik dari 33" line and the Perpres 96/2024 fuel-type enumeration). Both wrap non-copyrightable facts, so risk is low; noting for completeness.
- ⚠️ **Secondary-press-sourced facts** (Kepmen 281.K/250.K numbers, September HGBT price disparity US$8–12/MMBTU, and the "45–48% cost-share") rest on media reporting at medium-high dossier confidence, not primary ESDM/JDIH text. *Recommendation*: safe as attributed context (draft does attribute); do not let a later edit quote a specific Kepmen pasal.
- ⚠️ **Burstiness CV 0.44** is 0.01 below the scanner's 0.45 target (flagged "low"), but far above the editor's 0.30 AI-tell threshold. *Recommendation*: none required; paragraph variance is genuinely healthy.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — lead opens on a concrete pain (6 ceramic plants, ~78% cut)
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — 0 occurrences
- [x] No "Penting untuk dicatat / dipahami bahwa" — 0
- [x] "Dengan demikian" not overused — 0
- [x] Em-dash count ≤2 — **0 in body** (1 was in the frontmatter context field; removed)
- [x] Varied paragraph lengths — mix of 1-clause and 5–6-sentence paragraphs; CV 0.44
- [x] Not every H2 → 3-bullet list — H2s mix prose, tables, one bullet list, one numbered list
- [x] No generic claims without numbers — claims carry sourced numbers
- [x] No stacked hype adjectives — none
- [x] No service-dump paragraph — one telemetry aside + one closing positioning line only

### B. Factual & energi-gas / CNG spot-check
| Claim | Source check | Verdict |
|---|---|---|
| Sept 2026: PGN membatasi pasokan industri Jabar ke ~78% (14–30 Sep) / ~80% (1–13 Sep) volume minimum kontrak; ≥6 pabrik keramik setop lini | dossier ✓ (Fortune Indonesia 14 Sep 2026; CNBC 21 Sep 2026) | pass |
| Realisasi AGIT Jan–Mei 2026 ~47,5%; ancaman PHK 55.000 pekerja keramik | dossier ✓ (Kompas.com 23 Jun 2026; Katadata) | pass |
| CPE (Perpres 96/2024) hanya minyak bumi, BBM bensin, LPG — bukan gas bumi | dossier ✓ + product_matrix framing (Kementerian ESDM) | pass |
| 53 perusahaan pemegang izin niaga CNG per semester II-2025 (naik dari 33) | dossier ✓ (Bloomberg Technoz 10 Mei 2026) | pass |
| Asuransi gangguan usaha lazim menuntut "material damage proviso" (gangguan pasokan murni sering di luar cakupan) | dossier ✓ (Indonesia Re; framed "pada umumnya") | pass |
| IEA 90 hari impor bersih | dossier ✓ — framed as country-level analogy, not a gas/pabrik standard | pass |

No WebSearch used (per task constraint); all six verified against dossier + product_matrix.md. No claim required web escalation.

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: **53 chars**, keyword at chars 1–24
- [x] Meta description 140–160 — actual: **151 chars** (in GEO 150–160 sweet spot)
- [x] Slug ≤60, kebab-case, keyword — actual: `kontingensi-pasokan-energi-perusahaan-cng` (41)
- [x] H1 contains keyword — "…Perusahaan CNG"
- [x] H2 count 4–5 — actual: **5** body H2s (+ FAQ + Kesimpulan)
- [x] ≥1 question-format H2 (#2, #3); ≥1 honest/counter-conventional H2 (#5)
- [x] Keyword in first 100 words — "perusahaan CNG di Indonesia" in lead
- [x] Definition snippet near top (40–60 words) — "Ringkasnya" blockquote, ~55 words
- [x] ≥8 LSI terms — counted: 15+ (BCP, dual-source, buffer, failover, standby supplier, business interruption, material damage proviso, RTO, register risiko, HGBT, GTM, PRS, Mother Station, dual-fuel, …)
- [x] 3 internal links (1 hub + 2 cousins) — destinations: perusahaan-cng-indonesia (lead), gaslink (H2 #1), perusahaan-lng-indonesia (H2 #3)
- [x] ≥1 external authoritative citation — actual: **4** named inline + in frontmatter (ESDM, Fortune, Indonesia Re, IEA); plus IRMAPA, ISO, CNBC, Bloomberg Technoz named inline
- [x] FAQ 5–7 Q&As — actual: **6**
- [x] 2 image placeholders (up to 3) — actual: **3** with rich concepts + alt-text
- [x] ≥1 list + ≥1 table — 2 tables, 1 bullet list, 1 numbered list
- [x] Word count 1,200–1,600 — actual: ~**1,506** pure prose / ~1,560 incl. table content (scanner raw count 1,673 includes image-brief + table markup)

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — verified for all five H2s (each opens with a standalone answer before elaboration)
- [x] Each body paragraph makes one independently quotable, verifiable point (numbers + inline source)
- [x] FAQ parseable for FAQPage schema; `date_modified: 2026-09-28` present in meta block

### D. PGN Gagas framing discipline (product_matrix.md + style_guide §11)
- [x] Framed as gas-energy provider/distributor ("menyalurkan CNG beyond-pipeline"), NOT producer
- [x] ≤3 self-mentions — actual: **2** "PGN Gagas" name mentions (telemetry aside in H2 #4 + closing positioning); honors the dossier's stricter max-2
- [x] No unverifiable superlatives — none
- [x] Energi-gas / CNG product names + specs match product_matrix.md / dossier (Gaslink, GTM, PRS, Mother Station, CNG beyond-pipeline)
- [x] Closing uses a company_profile.md positioning line (anak usaha PGN / Subholding Gas Pertamina + layanan 24 jam)
- [x] Soft website CTA present as the FINAL line — "…jelajahi solusinya di gagas.co.id" (consultative, not "beli sekarang")
- [x] Hub link is a natural inline anchor in the lead — NOT a "BACA JUGA" callout
- [x] Critical hedge honored: telemetry attributed to gagas.co.id, framed "satu lapis mitigasi, bukan jaminan"; crisis root cause located upstream, out of any distributor's control

### E. Anti-cannibalization spot check
- Closest prior articles for this keyword: `2026-07-2-perusahaan-cng-indonesia-08` (Keandalan Penyedia CNG — provider-side selection lens); `2026-08-…-13` (Eskalasi, SLA & Kompensasi — reactive, post-incident); `2026-08-…-14` (Multi-Lokasi/Multi-Vendor — portfolio management).
- Subtopic overlap (Jaccard estimate): **~0.2** — shared concept is "keandalan/gangguan pasokan" and dual-source; this article is distinct in actor (buyer, proactive), phase (before failure), and mechanisms (register risiko, buffer, failover fuel, business-interruption insurance, runbook + drill).
- Verdict: **distinct angle confirmed** (well under 0.4; matches the strategist's brief analysis).

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran; `perusahaan-cng-indonesia-02.id.quality-input.json` written
- [x] AI-detector score < 0.30 — actual: **0.04** (verdict: pass)
- [x] Paragraph burstiness CV ≥ 0.30 — actual: **0.44** (scanner flagged "low" only vs its own 0.45 target; well above the 0.30 tell)
- [~] Plagiarism: **heuristic-only (no WebSearch)** this run per task constraint. 8 candidate passages extracted; manual read shows each is the writer's original sentence construction wrapping non-copyrightable facts (Perpres fuel-type list, "53 perusahaan", KUHPerdata pasal reference, the US$ price synthesis, the disambiguation sentence). No whole-paragraph lift patterns; the shared content is facts/well-known legal references, which the editor rules say to ignore. Assigned **plagiarism_score 0.05** in degraded mode; no non-Gagas verbatim ≥20 words detected by the heuristic. Recommend an optional human web spot-check of the two most fact-dense lines before publish.
</content>
