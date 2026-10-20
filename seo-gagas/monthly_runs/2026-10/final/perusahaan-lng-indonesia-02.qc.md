---
brief_id: "perusahaan-lng-indonesia-02"
editor_run_date: "2026-09-28"
recommendation: "approve"
overall_score: 9
ai_score: 0.00
plagiarism_score: 0.05
---

# Editor QC Report — Mini-LNG dan Small-Scale LNG: Model Perusahaan LNG di Indonesia untuk Kepulauan

## Recommendation
**approve**

This draft arrived unusually clean and honors every critical hedge the orchestrator flagged. The strict LNG framing holds throughout: PGN Gagas is presented only as an operator of the Bandung LNG Hub and a beyond-pipeline distributor (menyalurkan/mengoperasikan), never as a producer, liquefactor, or FSRU owner, and never as "pionir/pemimpin pasar." The two Pasuruan capacity figures (current ~20 ton/hari ≈ ~7.000 ton/tahun vs future 5-cryobox ~2.500 ton/bulan) are explicitly kept apart; Pasuruan is correctly framed as "pertama di Pulau Jawa" (with Kayan LNG Kaltara Apr 2023 named as the earlier national first); no corporate link between Gagas and PT Liquid Nusantara Gas / PT Kayan LNG is implied; the LNG Hub is dated "Agustus 2025" with no precise day and flagged as still in development; and every economics figure (Sambera Rp70 M/38%, IEEFA 30–50%) is bound to its own project context. Anti-AI scan is spotless (0 em-dashes, no cliché openers, varied rhythm). All five spot-checked facts verify against the dossier. The AI-detector scores 0.00 with strong burstiness. I added one FAQ (cryobox) to reach 6 Q&As and matched the frontmatter word_count to the tool's count. Plagiarism was heuristic-only this run (no WebSearch); the candidate passages are all sourced factual claims or original lead prose, so I am comfortable approving.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | 0 em-dashes, 0 cliché openers, deliberate 1–6 sentence variation, one-line "Satu memproduksi, satu menerima." beat |
| Factual & energi-gas / CNG accuracy | 10 | 5/5 spot-checks pass vs dossier; disambiguations honored precisely |
| On-page SEO compliance | 9 | Meta title 51 chars, description ~156, slug 39; 5 body H2s; keyword in first 100 words |
| GEO extractability (§2a) | 9 | 40–60-word direct answer after every H2; one quotable point per paragraph; FAQ FAQPage-ready |
| PGN Gagas framing discipline | 10 | Distributor/hub-operator only; 2 self-mentions; no superlatives; strict LNG framing intact |
| Internal linking | 9 | 1 hub (lead) + 2 cousins (Gaslink, CNG) as natural inline anchors |
| FAQ quality | 8 | 6 Q&As, each 40–80 words, one number each; raised from 5 to 6 (added cryobox) |
| Originality (plagiarism + AI-detector) | 9 | AI 0.00, burstiness 0.472; plagiarism heuristic-only (degraded mode) — no detectable lift |

## What I fixed (changelog)
- Added a 6th FAQ ("Apa itu cryobox dalam teknologi mini-LNG?") using dossier-verified facts, to match the brief's 6-question FAQ set and strengthen GEO/PAA coverage. Reworded (not lifted from the dossier draft) to avoid repeating the body's H2 #3 phrasing.
- Updated frontmatter `word_count` from the draft's 1438 to the quality-check tool's authoritative count (1539) — still within the 1,200–1,600 band.

## What I flagged (open issues)
- ⚠️ Plagiarism check ran in **degraded mode (heuristic-only, no WebSearch)** per run constraints. The 8 candidate passages are all sourced factual/numeric claims (ESDM, IEEFA — attributed inline) or the writer's original lead — none show signs of verbatim lifting. *Recommendation*: if a full web check is ever run pre-publish, spot-verify candidate #6 (lead) and the Pasuruan data sentences against esdm.go.id; expected overlap is only on the cited source, which is acceptable.
- ⚠️ `dateModified` / freshness is carried by `publish_month: "2026-10"` rather than a dedicated field. *Recommendation*: CMS should set an explicit `dateModified` on publish; the Pasuruan (11 Feb 2026) and LNG Hub (Agustus 2025) anchors make freshness time-sensitive and worth refreshing if the hub reaches commercial operation.
- ⚠️ External authoritative links = 2 hyperlinked (ESDM Pasuruan, IEEFA); migas.esdm.go.id (Sambera) is declared in frontmatter and attributed in prose ("Menurut Kementerian ESDM") but not hyperlinked. Kept at 2 links to respect the playbook's 1–2 guidance; no action needed.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan / Tidak dapat dipungkiri" openers — grep: none
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — 0 occurrences
- [x] No "Penting untuk dicatat / dipahami bahwa" — none
- [x] "Dengan demikian" not overused — 0 occurrences
- [x] Em-dash count ≤2 — actual: 0
- [x] Varied paragraph lengths — mix of 1-sentence and 5-sentence paragraphs; burstiness 0.472
- [x] Not every H2 → 3-bullet list — H2 mix: prose, table, numbered list, bullet list
- [x] No generic claims without numbers — number-dense (dates, %, ton/hari, MTPA, Rp)
- [x] No stacked hype adjectives — none
- [x] No service-dump paragraph — single anchored aside + CTA only

### B. Factual & energi-gas / CNG spot-check
| Claim | Source check | Verdict |
|---|---|---|
| Pasuruan diresmikan Wamen ESDM Yuliot, 11 Feb 2026, PT Liquid Nusantara Gas di PIER | dossier §B ✓ | pass |
| Kapasitas ~20 ton/hari ≈ ~7.000 ton/tahun; investasi ~Rp247 miliar; TKDN 86% | dossier §B ✓ | pass |
| Target ekspansi 5 cryobox ~2.500 ton/bulan = masa depan, bukan kapasitas berjalan | dossier §B + edge cases ✓ | pass (not conflated) |
| Sambera PLTG 2×20 MW, ~80 km dari Bontang, hemat ~Rp70 M/tahun, turun ~38% | dossier §C ✓ | pass |
| IEEFA (2021): rantai pasok ssLNG 30–50% vs konvensional 10–20%, konteks program PLN | dossier §D ✓ (labeled project-specific) | pass |
| Pasuruan "pertama di Jawa"; Kayan LNG Kaltara pertama nasional (30 Apr 2023) | dossier §C + edge cases ✓ | pass |

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: 51 chars / keyword at pos 0
- [x] Meta description 140–160 — actual: ~156
- [x] Slug ≤60, kebab-case, keyword — actual: `perusahaan-lng-indonesia-model-mini-lng` (39)
- [x] H1 contains keyword — "Model Perusahaan LNG di Indonesia..."
- [x] H2 count 4–5 (body) — actual: 5 body H2s (+FAQ +Kesimpulan = 7 total; within 4–7)
- [x] ≥1 question-format H2 (#2, #4); ≥1 honest/counter-conventional H2 (#5)
- [x] Keyword in first 100 words — lead, hub anchor
- [x] Definition snippet near top (40–60 words) — "Ringkas:" blockquote, ~58 words
- [x] ≥8 LSI terms — counted: 12 (mini LNG, small-scale LNG, kilang mini, cryobox, terminal mini LNG, likuifaksi, regasifikasi, ISO tank, MTPA, TKDN, off-grid, beyond pipeline)
- [x] 3 internal links (1 hub + 2 cousins) — hub (lead), Gaslink (H2 #4), CNG (H2 #5)
- [x] ≥1 external authoritative citation — actual: 2 hyperlinked (ESDM, IEEFA) + 1 attributed (migas.esdm)
- [x] FAQ 5–7 Q&As — actual: 6
- [x] 2 image placeholders — actual: 2 (IMAGE_01, IMAGE_02), each with alt text
- [x] ≥1 list + ≥1 table — numbered list, bullet list, 1 comparison table
- [x] Word count 1,200–1,600 — actual: 1,539 (tool count)

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — verified for all 5 body H2s
- [x] Each body paragraph makes one independently quotable, verifiable point
- [x] FAQ parseable for FAQPage schema; freshness via `publish_month` (see flag — CMS should set explicit `dateModified`)

### D. PGN Gagas framing discipline (product_matrix.md + style_guide §11)
- [x] Framed as gas-energy provider/hub-operator (mengoperasikan LNG Hub, menyalurkan gas bumi) — NOT producer/liquefactor/FSRU
- [x] ≤3 PGN Gagas self-mentions — actual: 2 (H2 #4 aside + Kesimpulan)
- [x] No unverifiable superlatives — grep pionir/pemimpin/terbaik/terbesar: none
- [x] Energi-gas / LNG product names + specs match dossier (LNG Hub ~15.000 MMBTU/bulan, mitra PT Nusantara Regas, Agustus 2025, still in development)
- [x] Closing uses a company_profile positioning line ("anak usaha PGN dalam Subholding Gas Pertamina, menyalurkan gas bumi...")
- [x] Soft website CTA present as the FINAL line ("...mulai diskusinya di gagas.co.id.") — consultative, not "beli sekarang"
- [x] Hub link present as natural inline anchor in the lead — NOT a "BACA JUGA" callout

### E. Anti-cannibalization spot check
- Closest prior articles for this keyword: `lng-beyond-pipeline-konsep-lng-hub` (2026-07, #02) and `rantai-pasok-lng-likuifaksi-pengguna-akhir` (2026-07).
- Subtopic overlap (Jaccard estimate): ~0.18 (per brief; confirmed). The mini-LNG business-model layer was **explicitly parked for a sibling** by `cara-menghitung-tco-lng-untuk-pabrik` and `perusahaan-lng-indonesia-untuk-data-center` ("disisakan untuk sibling: ... model bisnis small-scale/mini-LNG"). `lng-beyond-pipeline-konsep-lng-hub` cites Pasuruan only as a source URL, not as a subtopic.
- Verdict: distinct angle confirmed — this article is the intended sibling.

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran; `perusahaan-lng-indonesia-02.id.quality-input.json` written
- [x] AI-detector score < 0.30 — actual: 0.00 (verdict pass, 0 flags, external_api_used: false)
- [x] Paragraph burstiness CV ≥ 0.30 — actual: 0.472 (sentence burstiness 0.539; top30 vocab share 0.322)
- [~] Plagiarism: **heuristic-only (no WebSearch)** this run per constraints. 8 candidate passages extracted; all are sourced factual/numeric claims (ESDM/IEEFA, attributed inline) or the writer's original lead — no non-Gagas verbatim ≥20-word lift detected heuristically. plagiarism score (heuristic): 0.05.
