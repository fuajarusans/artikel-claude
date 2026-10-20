---
brief_id: "perusahaan-lng-indonesia-01"
editor_run_date: "2026-09-28"
recommendation: "approve"
overall_score: 9
ai_score: 0.04
plagiarism_score: 0.05
---

# Editor QC Report — Manajemen Boil-Off Gas (BOG) LNG: Menekan Gas yang Menguap dan Rugi Biaya

## Recommendation
**approve**

A clean, decision-useful, practitioner-grade article that hits the brief's angle exactly (proactive BOG minimization + economics + methane emissions, distinct from the reactive troubleshooting/regasifikasi/TCO siblings). Every critical hedge the brief flagged is honored in the draft: the two BOR classes are kept separate (large tanker ~0,10–0,15%/hari vs ISO tank ~0,1–0,3%/hari, never merged), GWP always states its horizon (GWP100 27–30× / GWP20 ~82,5×), "boil-off allowance" is framed as an international-contract norm explicitly unverified for Indonesian domestic supply, and the 0,12%/hari figure is labeled "bukan batas resmi." LNG framing is strict and correct: Gagas is positioned only as a beyond-pipeline gas-bumi distributor that operates an LNG Hub and schedules ISO-tank delivery/satellite regas — no producer/liquefaction/FSRU/reliquefaction claim, no "pionir/pemimpin pasar," and PT PGN LNG Indonesia is never conflated (never mentioned). The LNG Hub Bandung capacity was correctly omitted. AI-detector 0.04 (clear pass); anti-cannibalization clear. Fixes were light: added one high-value PAA FAQ from the dossier and tightened frontmatter. Two minor, non-blocking flags noted below.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Concrete pain hook, varied rhythm, honest hedging ("rentang ilustratif", "bukan janji angka"); AI score 0.04. |
| Factual & energi-gas / CNG accuracy | 9 | All 5 spot-checked claims trace to dossier; every critical hedge honored. One standard fact (1/600 volume) Wärtsilä-attributed but not in this dossier — low risk. |
| On-page SEO compliance | 9 | Meta/slug/keyword placement all pass; only H1 carries the keyword as the synonym "LNG" (cluster convention). |
| GEO extractability (§2a) | 9 | 40–60-word direct answer after every H2; one quotable point per paragraph; 6 FAQPage-ready Q&As; dateModified added. |
| PGN Gagas framing discipline | 10 | Distributor/LNG-Hub-operator only; safe verbs; 3 mentions; no superlatives; no entity conflation. |
| Internal linking | 10 | 3 inline natural anchors (hub in lead + 2 cousins); no "BACA JUGA". |
| FAQ quality | 9 | 6 Q&As, each 40–80 words, self-contained, mirrors PAA. |
| Originality (plagiarism + AI-detector) | 9 | AI 0.04; plagiarism heuristic-only (no WebSearch) — candidates are original ID composition / factual ranges, no lift pattern. |

## What I fixed (changelog)
- **Added one FAQ** ("Apa yang terjadi jika boil-off gas dibiarkan menumpuk di tangki?") using the dossier's drafted answer, tightened to ~55 words and rephrased to drop its em-dash — raises FAQ from 5 to 6 and captures a distinct high-value PAA (pressure buildup → MARVS → venting). Self-contained for FAQPage schema.
- **Lead micro-edit**: changed "Itu *boil-off gas* — sebagian LNG menguap..." to "Itu *boil-off gas*, yaitu sebagian LNG menguap..." to remove the article's only em-dash (em-dash count now 0).
- **Frontmatter**: `target_word_count` 1400 → 1500 (matches brief); added `date_modified: "2026-09-28"` for GEO freshness; `word_count` set to accurate body count **1532**.

## What I flagged (open issues)
- ⚠️ **H1 does not contain the exact primary keyword** — it carries "LNG" as a synonym only. *Recommendation*: acceptable and consistent with all 18 prior LNG-cluster articles (angle-led H1s; the exact keyword lives in meta title, slug, lead first-100-words, and Kesimpulan). No change needed; noted for transparency.
- ⚠️ **"1/600 volume" LNG fact** attributed inline to Wärtsilä but not explicitly stated in this dossier. *Recommendation*: it is standard encyclopedic LNG knowledge (universally cited ~600:1) and low risk; keep, but curator/writer may confirm the exact citation if desired.
- ⚠️ **Plagiarism check ran in degraded mode (heuristic-only, no WebSearch)** per run constraint. *Recommendation*: candidates are original Indonesian compositions and factual ranges (translated/synthesized from English technical sources), not lift-prone; if a paid API/WebSearch becomes available, a spot re-check of the two BOR-range sentences would fully close it.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan / Tidak dapat dipungkiri" openers — opens on a concrete plant pain
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — none present
- [x] No "Penting untuk dicatat / dipahami bahwa" — none
- [x] "Dengan demikian" not overused — none
- [x] Em-dash count ≤2 — **0** after the lead fix
- [x] Varied paragraph lengths — 1-sentence and 4–6-sentence paragraphs mixed; sentence burstiness 1.046
- [x] Not every H2 → 3-bullet list — prose, bullets, table, numbered steps all used
- [x] No generic claims without numbers — number-rich (BOR ranges, −162°C, 27–30×/82,5×, 2,4×)
- [x] No stacked hype adjectives — none ("terbesar" hits are "pengungkit terbesar" = biggest lever, not a brand claim)
- [x] No service-dump paragraph — single Gaslink aside + closing anchor only

### B. Factual & energi-gas / CNG spot-check
| Claim | Source check | Verdict |
|---|---|---|
| BOR: large tanker ~0,10–0,15%/hari (modern ~0,1%); ISO tank ~0,1–0,3%/hari, kept separate | dossier ✓ (Wärtsilä/ICCT/ScienceDirect); brief critical hedge (never merge classes) ✓ | pass |
| GWP metana: GWP100 27–30× (EPA/IPCC AR6), GWP20 ~82,5× (IEA GMT 2025), horizon always stated | dossier ✓; brief critical hedge (always state horizon) ✓ | pass |
| LNG stored ~−160 to −163°C | dossier ✓ (Wärtsilä) | pass |
| "Boil-off allowance" = international-contract norm; unverified for Indonesian domestic supply | dossier ✓; brief critical hedge ✓ (framed as a question to ask the supplier) | pass |
| Reliquefaction = reverse Brayton + nitrogen, common on ships/large terminals, rarely worth it at small customer points; Gagas not doing reliquefaction | dossier ✓ + product_matrix framing ✓ | pass |
| (Note) "1/600 volume" reduction, Wärtsilä-attributed | not explicit in dossier; standard encyclopedic LNG fact | low-risk flag |

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — 51 chars; keyword at position 1
- [x] Meta description 140–160 — ~157 chars
- [x] Slug ≤60, kebab-case, keyword — `perusahaan-lng-indonesia-boil-off-gas-bog` (41)
- [~] H1 contains keyword — synonym "LNG" only (see flag; cluster convention)
- [x] H2 count 4–5 — 5 body H2s (+ FAQ + Kesimpulan)
- [x] ≥1 question-format H2 (#1, #2); ≥1 honest/counter-conventional H2 (#5)
- [x] Keyword in first 100 words — "perusahaan LNG di Indonesia" in the lead
- [x] Definition snippet near top (40–60 words) — blockquote after lead
- [x] ≥8 LSI terms — ~18 counted (BOG, BOR, holding time, reliquefaction, venting, emisi metana, GWP100/20, MARVS, ISO tank, heat ingress, energy recovery, reverse Brayton, insulasi kriogenik, manajemen inventori, boil-off allowance, densitas energi, CNG, LNG)
- [x] 3 internal links (1 hub + 2 cousins) — perusahaan-lng-indonesia (lead), perusahaan-cng-indonesia (§5), gaslink (§3)
- [x] ≥1 external authoritative citation — 3 inline attributions (Wärtsilä, EPA, IEA); 2 URLs in frontmatter
- [x] FAQ 5–7 Q&As — 6
- [x] 2 image placeholders — IMAGE_01, IMAGE_02 (both with alt-text)
- [x] ≥1 list + ≥1 table — bullet list (§2), numbered list (§4), comparison table (§3)
- [x] Word count 1,200–1,600 — 1,532 body (1,397 excl. table); script whole-file 1,583

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 (verified for #1–#5)
- [x] Each body paragraph makes one independently quotable, verifiable point
- [x] FAQ parseable for FAQPage schema; `date_modified: 2026-09-28` added to meta block

### D. PGN Gagas framing discipline (product_matrix.md + style_guide §11)
- [x] Framed as gas-energy distributor/LNG-Hub operator (menyalurkan / mengoperasikan / menjadwalkan) — NOT producer/liquefaction/FSRU/reliquefaction
- [x] ≤3 PGN Gagas self-mentions — 3 (Gaslink aside in §3 + positioning line + soft CTA)
- [x] No unverifiable superlatives — none; no "pionir/pemimpin pasar/terbesar" as brand claim
- [x] Energi-gas / LNG product names + specs match product_matrix.md / dossier; PT PGN LNG Indonesia never conflated (never mentioned); Bandung LNG Hub capacity correctly omitted
- [x] Closing uses a company_profile.md positioning line (anak usaha PGN / Subholding Gas Pertamina, menyalurkan gas bumi beyond-pipeline, mengoperasikan LNG Hub)
- [x] Soft website CTA present as the FINAL line, after Kesimpulan (invites gagas.co.id; consultative)
- [x] Hub link is a natural inline anchor in the lead — not a "BACA JUGA" callout

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: `kendala-pasokan-lng-cara-mengatasi` (2026-08, #15, troubleshooting) — BOG appears only as a minor "kapan harus vent" section. Other boil-off mentions: `lng-beyond-pipeline-konsep-lng-hub` (#02) and `lng-untuk-industri-kapan-lebih-cocok-dari-cng` (#03) list "boil-off gas" among many subtopics; `cara-menghitung-tco-lng-untuk-pabrik` (#16) lists it as a cost line item. **None is a dedicated proactive BOG-management article.**
- Subtopic overlap (Jaccard estimate): ~0,20 vs #15 (corroborates the brief). Unique here: BOR-by-tank-class, heat-ingress minimization, energy recovery, reliquefaction economics, rupiah-loss method, GWP horizons, boil-off allowance.
- Verdict: **distinct angle confirmed**

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran; `perusahaan-lng-indonesia-01.id.quality-input.json` written
- [x] AI-detector score < 0.30 — **0.04** (verdict: pass)
- [x] Paragraph burstiness CV ≥ 0.30 — **0.413** (script's stricter 0.45 target fires one *low* flag only; sentence burstiness 1.046, top30 vocab share 0.289 — all healthy)
- [~] Plagiarism: **heuristic-only (no WebSearch — run constraint)**. 8 candidate passages reviewed manually: all are either the article's own distinctive headings/worked examples, original Bahasa Indonesia compositions of general technical facts, or numeric BOR ranges (facts, not copyrightable prose). Sources are English (Wärtsilä/ICCT/ScienceDirect) while the text is original ID synthesis, so a verbatim ≥20-word non-Gagas match is implausible. No whole-paragraph lift pattern. The BOG definition is a well-known exempt definition. Assigned heuristic plagiarism score **0.05**; no in-place rewrite required. Note: degraded mode — a WebSearch/API spot-check of the two BOR-range sentences would fully close it.
