---
brief_id: "cng-indonesia-01"
editor_run_date: "2026-09-28"
recommendation: "approve"
overall_score: 9
ai_score: 0.04
plagiarism_score: 0.05
---

# Editor QC Report — Regulasi CNG di Indonesia: Aturan, Regulator, dan Arah Kebijakannya

## Recommendation
**approve**

This is a genuinely strong policy explainer that does what the brief asked: it maps the regulatory architecture (regulator roles → payung hukum → technical standards → roadmap → the gap between rule and practice) as vendor-neutral education, not a buying guide, and stays cleanly distinct from the fiscal-angle sibling (cng-13) and the product-mechanics sibling (cng-06). Every regulation number, date, and figure I spot-checked traces to the dossier, and the writer honored all the critical hedge flags — the CNG 3 kg program is framed as "masih diujicobakan… belum ada Kepmen atau Permen yang meresmikannya," the 30–40% savings and Rp15–20 juta converter-kit figures are attributed to their sources (Menteri ESDM / IESR), no clause/pasal numbers were invented, and PGN Gagas is framed as a licensed downstream niaga operator, not a regulator ("Posisinya berada di dalam rezim yang dibahas artikel ini, bukan mengaturnya"), with a single self-mention — under the strict 2-mention cap set by the dossier. Anti-AI scan is clean (0 em-dashes, 0 banned openers, varied rhythm; heuristic AI score 0.04). I applied four small in-place fixes and flag one minor CMS-side freshness item. It is curator-ready.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | 0 em-dashes, 0 banned openers, varied paragraph/sentence lengths, honest "ini sering disalahpahami" asides. Heuristic AI score 0.04. |
| Factual & energi-gas / CNG accuracy | 9 | All spot-checked claims verified vs dossier; no invented pasal/nomor; hedge flags honored. |
| On-page SEO compliance | 9 | Meta title 48, meta desc 156, slug 22; 5 body H2s; 3 internal + 3 external links; definition snippet 58 words. |
| GEO extractability (§2a) | 9 | 40–60-word direct answer after every H2; one quotable point per paragraph; FAQ FAQPage-ready. |
| PGN Gagas framing discipline | 10 | 1 self-mention; provider/distributor framing; explicit non-regulator disclaimer; positioning line + soft CTA. |
| Internal linking | 9 | Hub inline in lead + 2 cousins woven in body; no "BACA JUGA". |
| FAQ quality | 8 | 6 Q&As, each 40–80 words, mirrors PAA; added 1 dossier-verified Q for price coverage. |
| Originality (plagiarism + AI-detector) | 9 | AI 0.04, burstiness CV 0.365; plagiarism heuristic-only (no WebSearch) — candidates are facts/title/original framing, no lift evident. |

## What I fixed (changelog)
- Expanded **BBG on first use** in §4: "dari BBM dan LPG" → "dari bahan bakar minyak (BBM) ke Bahan Bakar Gas (BBG)" (acronym-gloss discipline, style_guide §3).
- Smoothed the awkward semicolon fragment on the CNG 3 kg program in §4 ("Turunannya, tabung CNG 3 kg 'Merah Putih';" → "Salah satu turunannya adalah **rencana** tabung CNG 3 kg 'Merah Putih'. Menteri ESDM…") — reads cleaner and reinforces the plan-not-yet-policy hedge.
- Added one dossier-verified FAQ, **"Apakah harga CNG untuk konsumen diatur pemerintah?"** (62 words), lifting FAQ from 5 → 6 Q&As and covering a brief PAA on price regulation not fully isolated elsewhere.
- Updated frontmatter `word_count` 1503 → **1571** to reflect the additions (clean prose count).

## What I flagged (open issues)
- ⚠️ **Freshness / `dateModified` (GEO §2a)** — the meta block carries `publish_month: "2026-10"` but no explicit `dateModified`. The article contains time-stamped claims ("per akhir September 2026", "uji coba… hasil ditargetkan September 2026") that will age fast. *Recommendation*: CMS should set an accurate `dateModified` on publish and schedule a refresh once the CNG 3 kg trial result / kota percontohan is announced. Non-blocking.
- ⚠️ **Plagiarism check ran in degraded mode (heuristic-only, no WebSearch)** — 8 candidate passages were assessed manually rather than web-confirmed. All are regulation-number/date facts, our own H1, or original editorial framing; none is a distinctive lift. *Recommendation*: if a WebSearch budget frees up later, a spot re-check of the two most distinctive editorial sentences is optional insurance. Non-blocking.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — grep: 0
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — grep: 0
- [x] No "Penting untuk dicatat / dipahami bahwa" — grep: 0
- [x] "Dengan demikian" not overused — grep: 0
- [x] Em-dash count ≤2 — actual: 0
- [x] Varied paragraph lengths (1-sentence to 5–6-sentence mix; not monotone)
- [x] Not every H2 → 3-bullet list — mix of prose, numbered list, 2 tables, 1 bullet list
- [x] No generic claims without numbers — dense with sourced numbers/dates
- [x] No stacked hype adjectives (canggih/powerful/seamless/terdepan) — none
- [x] No service-dump paragraph — single anchored mention in the close

### B. Factual & energi-gas / CNG spot-check
| Claim | Source check | Verdict |
|---|---|---|
| UU No. 22 Tahun 2001 diubah UU 11/2020 jo. UU 6/2023, kerangka tetap berlaku | dossier (JDIH BPK) ✓ | pass |
| SKK Migas dibentuk Perpres No. 9/2013; BP Migas dibubarkan MK 13 Nov 2012 | dossier (SKK Migas/JDIH) ✓ | pass |
| HGBT Kepmen 76.K/2025 (perubahan kedua atas 91.K/2023): 7 sektor, 253 perusahaan, USD 7 / USD 6,5 per MMBTU | dossier + esdm.go.id ✓ | pass |
| Permen ESDM No. 7/2026 berlaku 12 Juni 2026, menggantikan aturan 2021 (Permen 5/2021) | dossier (JDIH ESDM) ✓ | pass |
| Jargas 115.264 SR TA 2025-2026 di 15 kab/kota, +~1 juta SR tahap berikutnya | dossier (Ditjen Migas, Sep 2025) ✓ | pass |
| Converter kit ~Rp15–20 juta/kendaraan (IESR/Fabby Tumiwa), attributed | dossier (IESR, medium conf., attributed in text) ✓ | pass |

No invented pasal/clause numbers. Low-confidence historical jargas figure (703.308 SR) correctly omitted. All CNG 3 kg / savings claims attributed and hedged.

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: 48 chars / "CNG" at char 10, "Indonesia" within first 25
- [x] Meta description 140–160 — actual: 156
- [x] Slug ≤60, kebab-case, keyword — actual: `regulasi-cng-indonesia` (22)
- [x] H1 contains keyword — "Regulasi **CNG** di **Indonesia**…"
- [x] H2 count 4–5 (body) — actual: 5 body H2s (7 incl. FAQ + Kesimpulan)
- [x] ≥1 question-format H2 (#1–#4); ≥1 honest/counter-conventional H2 (#5)
- [x] Keyword in first 100 words — "CNG" + hub anchor "CNG di Indonesia" in lead
- [x] Definition snippet near top (40–60 words) — actual: 58 words (blockquote)
- [x] ≥8 LSI terms — counted: 12 (regulasi CNG, konversi BBM ke BBG, Permen ESDM, UU Migas 22/2001, BPH Migas, ESDM/Ditjen Migas, izin usaha niaga gas, HGBT, jargas, roadmap konversi, standar teknis instalasi, kebijakan energi)
- [x] 3 internal links (1 hub + 2 cousins) — perusahaan-cng-indonesia (hub, lead), gasku (cousin), perusahaan-lng-indonesia (cousin)
- [x] ≥1 external authoritative citation — actual: 3 (esdm.go.id, bphmigas.go.id, migas.esdm.go.id)
- [x] FAQ 5–7 Q&As — actual: 6
- [x] 2 image placeholders (up to 3) — actual: 2 (IMAGE_01 diagram, IMAGE_02 timeline), both with alt text
- [x] ≥1 list + ≥1 table — 1 numbered list + 1 bullet list + 2 tables
- [x] Word count 1,200–1,600 — actual: ~1,571 (clean prose)

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — verified for all 5 (H2#1 ~45, #2 ~48, #3 ~50, #4 ~46, #5 ~44 words)
- [x] Each body paragraph makes one independently quotable, verifiable point
- [~] FAQ parseable for FAQPage schema (yes); `dateModified`/freshness — only `publish_month` present (see flag)

### D. PGN Gagas framing discipline (product_matrix.md + style_guide §11)
- [x] Framed as gas-energy provider/partner — "menyalurkan gas bumi… lewat solusi CNG", "badan usaha niaga berizin"; NOT producing/regulating
- [x] ≤3 self-mentions (dossier hard cap = 2) — actual: 1 ("PGN Gagas")
- [x] No unverifiable superlatives — none
- [x] Energi-gas/CNG names + specs match dossier/product_matrix — ISO 9001:2015 / 45001:2018 / 37001:2016 (2025) correct; anak usaha PGN / Subholding Gas Pertamina correct
- [x] Closing uses a company_profile.md positioning line — yes (paraphrased)
- [x] Soft website CTA as FINAL line after conclusion — "…kunjungi gagas.co.id." (consultative, not "beli sekarang")
- [x] Hub link as natural inline anchor in lead — "[CNG di Indonesia]" — no "BACA JUGA"

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: `cng-substitusi-impor-lpg-ketahanan-energi` (cng-indonesia-13, 2026-09) — fiscal/import-subsidy angle; also `cng-3kg-tabung-merah-putih` (cng-06) — product mechanics.
- Subtopic overlap (Jaccard estimate): ~0.15–0.20 — shares surface terms (roadmap konversi, CNG 3 kg, jargas) but core subtopics here (UU Migas architecture, ESDM vs BPH Migas vs SKK Migas split, HGBT scheme, technical standards, izin usaha berbasis risiko) are new to the cluster.
- Verdict: distinct angle confirmed (< 0.4).

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran; `cng-indonesia-01.id.quality-input.json` written
- [x] AI-detector score < 0.30 — actual: **0.04** (verdict: pass)
- [x] Paragraph burstiness CV ≥ 0.30 — actual: **0.365** (clears QC bar; script's own stretch target is 0.45, flagged [low] only)
- [~] Plagiarism: **heuristic-only (no WebSearch per run constraint)**. 8 candidate passages extracted and manually reviewed:
  - Regulation-number/date facts (UU 22/2001; SKK Migas / BP Migas 13 Nov 2012; "HGBT direvisi tiga kali sejak 2021…") — factual, non-distinctive, expected to appear across ESDM/JDIH/news sources; treated like well-known definitions → ignore.
  - Our own H1/title ("# Regulasi CNG di Indonesia: Aturan…") → ignore.
  - Original editorial framing sentences ("Arah kebijakan bergerak ke dua tujuan…", "Untuk meniagakan dan mengangkut CNG…") — authored for this article, no lift.
  - CNG 3 kg / harga sentence is a paraphrase of attributed media facts, not a verbatim quote.
  - No non-Gagas verbatim hit ≥20 words identified; no whole-paragraph lift. plagiarism_score: **0.05** (heuristic estimate; not web-confirmed).

## The shipping question
If this appeared on gagas.co.id tomorrow, a senior gas-bumi practitioner and a skeptical industrial buyer would find an honest, correctly-sourced regulatory map — one that names the right regulators, cites the right regulation numbers with dates, refuses to overclaim the CNG 3 kg trial, and separates "aturan yang berlaku" from "program yang masih diujicobakan." WEBARQ Promote would be proud of it. Approve.
