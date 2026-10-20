---
brief_id: "cng-indonesia-03"
editor_run_date: "2026-08-11"
recommendation: "revise"
overall_score: 8
ai_score: 0.04
plagiarism_score: 0.05
---

# Editor QC Report — Kualitas Gas CNG: Nilai Kalor, Wobbe Index, dan Spesifikasinya

## Recommendation
**revise**

Editorially this is a strong, ship-quality article: the anti-AI scan is clean (zero AI-tell openers, zero em-dashes, well-varied rhythm), the originality gate passes comfortably (AI-detector 0.04, no verbatim web matches), GEO extractability is excellent (40–60-word answer after every H2), PGN Gagas framing is correct and disciplined (≤3 mentions, provider/distributor voice), and every enforced hedge held — **SNI 8414:2025 active** (BSN, 12 Mar 2025), **SNI 8219:2017 correctly flagged as DME (not gas bumi/CNG)**, **no exact SNI numeric limits quoted**, Wobbe formula sourced to ISO 13686/6976/15971, metana kept qualitative. The single reason this is `revise` rather than `approve`: my own fact-check + plagiarism WebSearch surfaced that the dossier **missed SNI 8204:2016** — the finalized "spesifikasi bahan bakar CNG untuk sektor transportasi," which is the *most on-topic standard for this entire article*. The draft (inheriting the dossier gap) told readers the closest reference for CNG-vehicle gas quality was only the Lemigas 2015 kajian — a claim a skeptical energy practitioner would immediately fault in the article's flagship "honest about standards" section. I corrected all affected passages in-place (verifiable via BSN, no invented numbers, enforced hedges preserved), but because this **reverses an explicit dossier finding and the enforced framing** and the standard's *current edition/status* was not fully verified in this pass (it may itself have been revised post-2016), a human/researcher should confirm before commit.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Concrete pain-hook lead; varied paragraph/sentence lengths; no AI-tell patterns; honest hedging throughout |
| Factual & energi-gas / CNG accuracy | 6 | All hedges held and 5/6 spot-checks pass; docked for the SNI 8204:2016 dossier gap (corrected in-place, needs confirmation) |
| On-page SEO compliance | 9 | Meta/slug/H1/keyword/LSI/FAQ all pass; added 2 missing inline external links |
| GEO extractability (§2a) | 9 | 40–60w answer after every H2; one quotable point/paragraph; FAQ FAQPage-ready; `date_modified` added |
| PGN Gagas framing discipline | 9 | Distributor/provider voice, no superlatives, ≤3 self-mentions after trimming FAQ #6 |
| Internal linking | 10 | 3 links: hub in lead + Gaslink + LNG cousins, all natural inline anchors |
| FAQ quality | 8 | 6 Q&As, 40–80w, self-contained; #6 made vendor-neutral |
| Originality (plagiarism + AI-detector) | 9 | AI 0.04; no non-Gagas verbatim ≥20 words; burstiness CV 0.421 |

## What I fixed (changelog)
- **Added 2 inline external authoritative hyperlinks** — body had none (only frontmatter). Linked "Ditjen Migas Kementerian ESDM" (H2 #1) → migas.esdm.go.id, and "Badan Standardisasi Nasional (BSN)" (H2 #5) → pesta.bsn.go.id/…/sni8414:2025. Satisfies the ≥1 external-citation requirement.
- **Corrected the CNG-vehicle standards claim (4 places + IMAGE_03)** — draft said the closest reference for CNG-vehicle gas quality was only the Lemigas 2015 kajian; corrected to acknowledge **SNI 8204:2016** (spesifikasi CNG untuk transportasi) as the dedicated standard, with the Lemigas 2015 study reframed as the *revision input* for its water/particulate limits. No numeric limits asserted (paywalled-doc hedge preserved). Updated H2 #5, FAQ #4, FAQ #5, and the IMAGE_03 comparison-card concept; added SNI 8204:2016 to `external_citations`.
- **Trimmed PGN Gagas out of FAQ #6** — replaced the brand mention with a vendor-neutral ISO-9001/QMS statement, keeping self-mentions cleanly at 3 (H2 #4 Gaslink aside + Kesimpulan + soft CTA).
- **Added `date_modified: "2026-08-11"`** to the meta block for GEO freshness (§2a).
- **Updated `word_count`** to 1515 (scanner-authoritative, within band).

## What I flagged (open issues)
- ⚠️ **Dossier factual gap — SNI 8204:2016 was omitted.** The dossier asserted "no confirmed, finalized SNI exists specifically for CNG gas-quality-for-vehicles," and the launch instruction enforced that hedge. This is **contradicted** by the BSN catalog (pesta.bsn.go.id/produk/detail/10798-sni82042016): SNI 8204:2016 is "standar dan mutu (spesifikasi) bahan bakar gas jenis CNG untuk sektor transportasi," covering kadar air, partikulat, komposisi, dan nilai kalor. Ironically the dossier caught its sibling SNI 8219 (DME) but missed 8204 (CNG) — the most relevant standard for this article. *Recommendation*: researcher verifies SNI 8204:2016 **scope and current edition/status** (search notes it "telah direvisi melalui proses perumusan RSNI" — a newer edition may exist, so citing "2016" as current risks the same staleness trap as "8414:2017"); dossier should be patched so sibling articles in this cluster inherit the correct standards map. Human confirms the corrected framing before commit.
- ⚠️ **SNI numeric limits remain unverified (by design).** No exact values (mg/Nm³ air, ppm H2S, MJ/Nm³ nilai kalor) are quoted anywhere — correct, but if a future refresh wants them, they must come from the paid BSN documents (SNI 8414:2025 / SNI 8204:2016), not secondary summaries.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan / Tidak dapat dipungkiri" openers — grep: none
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — grep: none in article
- [x] No "Penting untuk dicatat / dipahami bahwa" — none
- [x] "Dengan demikian" not overused — none
- [x] Em-dash count ≤2 — grep: **0** em-dashes
- [x] Varied paragraph lengths — 1-word ("Ya.") to 5–6 sentence blocks; not symmetric
- [x] Not every H2 → 3-bullet list — mix: numbered list, prose, table, bullet list, bold-lead prose
- [x] No generic claims without numbers — technical, specific throughout
- [x] No stacked hype adjectives — none (canggih/powerful/terdepan absent)
- [x] No service-dump paragraph — single anchor per mention

### B. Factual & energi-gas / CNG spot-check
| Claim | Source check | Verdict |
|---|---|---|
| SNI 8414:2025 = standar aktif gas bumi via pipa, ditetapkan BSN 12 Mar 2025 (revisi 8414:2017) | dossier ✓ + WebSearch BSN pesta ✓ | pass |
| SNI 8219:2017 = Dimethyl Ether (DME), bukan gas bumi/CNG | dossier ✓ + WebSearch BSN pesta ✓ | pass |
| Wobbe index = nilai kalor ÷ √berat jenis; parameter di ISO 13686/6976/15971 | dossier ✓ + WebSearch (ISO 15971 / engineering refs) ✓ | pass |
| Kompresi CNG hingga ±250 bar (Ditjen Migas ESDM) | dossier ✓ | pass |
| "Rujukan terdekat mutu CNG kendaraan hanya kajian Lemigas 2015" (draft) | WebSearch BSN pesta → **SNI 8204:2016 exists** | **fail → corrected in-place + flagged** |

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: **50** chars; "CNG…Indonesia" within first 30
- [x] Meta description 140–160 — actual: **152**
- [x] Slug ≤60, kebab-case, keyword — actual: `kualitas-gas-cng-nilai-kalor-wobbe-index` (40, contains "cng")
- [x] H1 contains keyword — "Kualitas Gas **CNG**…"
- [x] H2 count 4–5 — actual: **5** content H2s (+ FAQ + Kesimpulan)
- [x] ≥1 question-format H2 (#4) ; ≥1 honest/counter-conventional H2 (#5)
- [x] Keyword in first 100 words — "pengguna CNG…di Indonesia" in lead
- [x] Definition snippet near top (40–60 words) — "Secara ringkas" blockquote = **58 words**
- [x] ≥8 LSI terms — counted **12+** (nilai kalor, Wobbe, calorific value, interchangeability, metana/CH4, H2S, CO2, moisture, hidrokarbon berat, densitas/berat jenis, MMBTU, dew point, spesifikasi gas bumi)
- [x] 3 internal links (1 hub + 2 cousins) — perusahaan-cng-indonesia (lead), gaslink (H2#4), perusahaan-lng-indonesia (H2#5)
- [x] ≥1 external authoritative citation — actual: **2 inline** (ESDM, BSN) + 4 in frontmatter (added during edit)
- [x] FAQ 5–7 Q&As — actual: **6**
- [x] 2 image placeholders (up to 3) — actual: **3** with alt-text
- [x] ≥1 list + ≥1 table — 1 numbered + 1 bulleted list, 1 table
- [x] Word count 1,200–1,600 — actual: **1515**

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — verified all 5 (≈57/50/58/52/44 words)
- [x] Each body paragraph makes one independently quotable, verifiable point
- [x] FAQ parseable for FAQPage schema; `date_modified: 2026-08-11` in meta block

### D. PGN Gagas framing discipline (product_matrix.md + style_guide §11)
- [x] Framed as gas-energy provider/distributor ("menyalurkan CNG"), NOT producer
- [x] ≤3 PGN Gagas self-mentions — actual: **3** (Gaslink aside H2#4 + Kesimpulan positioning + soft CTA); FAQ #6 brand mention removed
- [x] No unverifiable superlatives ("terbaik/nomor satu") — none
- [x] Energi-gas / CNG product names + specs match product_matrix.md / dossier — Gaslink (industri/komersial), Gasku (transportasi), ISO 9001:2015 all correct
- [x] Closing uses a company_profile.md positioning line — "anak usaha PGN…Subholding Gas Pertamina…"
- [x] Soft website CTA present as FINAL line (gagas.co.id, consultative) — "…jelajahi solusinya di gagas.co.id."
- [x] Hub link as natural inline anchor in lead ("CNG di Indonesia") — not a BACA JUGA callout

### E. Anti-cannibalization spot check
- Closest prior articles for "CNG Indonesia": `apa-itu-cng-compressed-natural-gas-cara-kerja` (cng-indonesia-01, physics of compression) and the tabung/keselamatan article (hardware). Neighbors in 2026-07/08 cluster cover definitions, comparisons, beyond-pipeline, transisi energi, keselamatan tabung, mitos, sejarah — **none cover gas-quality parameters** (nilai kalor / Wobbe / batas pengotor / interchangeability).
- Subtopic overlap (Jaccard estimate): **~0.28** (only "komposisi metana" + "standar" overlap; Wobbe/nilai kalor/interchangeability/pengotor fully new)
- Verdict: **distinct angle confirmed** (< 0.40)

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran; `cng-indonesia-03.id.quality-input.json` written
- [x] AI-detector score < 0.30 — actual: **0.04** (verdict: pass)
- [x] Paragraph burstiness CV ≥ 0.30 — actual: **0.421** (script's ≥0.45 stretch-target flagged "low" severity only; well above the 0.30 tell floor)
- [x] Plagiarism: distinctive passages web-checked — SNI 8414:2025 statement, SNI 8219/DME correction, lead hook, ISO 13686/6976/15971 passage: **no verbatim ≥20-word match on any non-Gagas page** (hits were topical SNI-catalog / burner-troubleshooting / ISO-standard pages only). New SNI 8204 sentences are editor's own phrasing. Plagiarism score: **0.05**
