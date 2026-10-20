---
brief_id: "cng-indonesia-03"
editor_run_date: "2026-09-21"
recommendation: "approve"
overall_score: 9
ai_score: 0.04
plagiarism_score: 0.06
---

# Editor QC Report — Bio-CNG: CNG Terbarukan dari Limbah Sawit di Indonesia

## Recommendation
**approve**

The draft was already strong: a genuinely educational, vendor-neutral explainer on a true whitespace angle (Bio-CNG / biometana from POME) that no prior article in the CNG cluster touches. It opens on a concrete image, not an AI cliché; carries zero em-dashes and no AI-tell openers; every number traces to the dossier with inline attribution; and it correctly avoids every figure the dossier flagged as unverified (536.413 m³/jam, the ~6% solar-transport share, KBLI 35203, the 71,5 juta m³ utilisation claim). It also respects the held August "kualitas gas / Wobbe / nilai kalor" angle — gas quality appears only as a one-line challenge, never as the axis. I made five in-place fixes (self-mention discipline, external hyperlinks, one added FAQ, a freshness field, word-count correction) and found no blocking issue. AI-detector score is 0.04 and the plagiarism scan (heuristic, degraded mode) shows no distinctive verbatim lift. Curator-ready.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Concrete pain-image lead, honest hedging ("realitas lapangan, bukan janji"), varied rhythm; 0 em-dashes, 0 AI-tell openers. |
| Factual & energi-gas / CNG accuracy | 9 | All figures dossier-sourced + attributed; flagged-risky numbers correctly omitted; framing "bukan produsen" preserved. |
| On-page SEO compliance | 8 | Meta title 51 chars, desc 150, slug 41, 3 internal + 2 hyperlinked authoritative externals, table+list+FAQ. Minor: exact phrase "CNG Indonesia" not contiguous in meta description. |
| GEO extractability (§2a) | 9 | 40–60-word direct answer after each of the 4 body H2s; one quotable point per paragraph; FAQPage-ready; dateModified added. |
| PGN Gagas framing discipline | 9 | Provider/distributor, explicitly "bukan produsen"; 2 self-mentions; no superlatives; positioning line + soft CTA closer; hub inline in lead. |
| Internal linking | 9 | Hub (lead) + Gaslink + Gasku cousins, all natural inline; no "BACA JUGA". |
| FAQ quality | 8 | 6 Q&As, each 40–65 words, PAA-aligned; added the biogas-vs-biometana-vs-CBG term-clarifier. |
| Originality (plagiarism + AI-detector) | 9 | AI 0.04 (pass); no non-Gagas verbatim ≥20 words on heuristic read. |

## What I fixed (changelog)
- **Self-mention discipline (framing hedge ≤2):** removed the standalone mid-body self-mention sentence quoting Dirut Santiaji Gunawan ("agregator, offtaker, dan distributor") and instead embedded the "*offtaker* dan distributor, bukan produsen" framing directly into the factual Pekanbaru project bullet. PGN Gagas now appears as exactly **2** narrative mentions (one attributed project fact + the closing positioning/CTA), with the "bukan produsen" safeguard preserved. Replaced the removed sentence with a vendor-neutral value-chain note ("produksi biometana … tetap di tangan pengelola limbah sawit; pihak penyalur bertugas mengompresi, mengangkut, dan mendistribusikannya").
- **External-link compliance (§9):** converted two inline text attributions into real outbound hyperlinks — Ditjen EBTKE/Kontan (Maret 2023) and IEA (2025) — so the article carries ≥1–2 clickable authoritative citations, not just frontmatter metadata.
- **FAQ enrichment:** added one FAQ from the dossier ("Apakah Bio-CNG sama dengan biogas, dan apa bedanya dengan biometana atau CBG?") — FAQ count 5 → 6; strengthens PAA/term-disambiguation coverage.
- **GEO freshness:** added `date_modified: "2026-09-21"` to the meta block (§2a freshness signal).
- **Frontmatter accuracy:** corrected `word_count` 1379 → 1486 to match the polished body.

## What I flagged (open issues)
- ⚠️ **Meta description lacks the exact contiguous phrase "CNG Indonesia."** Tokens are present ("CNG terbarukan", "biometana Indonesia") and the exact phrase does appear in the meta title (inside "Bio-CNG Indonesia"), H1, and slug. *Recommendation:* acceptable as-is given the Bio-CNG angle; optionally reword to "…potensi biometana di Indonesia…". Non-blocking.
- ⚠️ **Paragraph burstiness CV = 0.323** — above the editor's 0.30 strong-tell threshold but below the script's stricter 0.45 target. With an AI-detector score of 0.04 this is immaterial; no rewrite warranted.
- ⚠️ **Knowledge-base gap (from dossier Flag):** PGN Gagas's Bio-CNG offtaker/distributor role is not yet in `company_profile.md`. The article handles this correctly via press attribution (ANTARA, Jan 2024). *Recommendation:* orchestrator should update `company_profile.md` with this verified role for future briefs.
- ⚠️ **Tapung Hilir (Kampar) project** is sourced to a single regional outlet (pewarta.co, Feb 2026). Used correctly here as an attributed example, not a central claim. *Recommendation:* seek one corroborating source before elevating it to a central claim in any future article.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan / Tidak dapat dipungkiri" openers — grep clean
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — none present
- [x] No "Penting untuk dicatat / dipahami bahwa" — none
- [x] "Dengan demikian" not overused — absent
- [x] Em-dash count ≤2 — **0** em-dashes
- [x] Varied paragraph lengths — 1-line blockquote, short and long prose, lists (paragraph CV 0.323)
- [x] Not every H2 → 3-bullet list — mix of prose, numbered steps, bullet list, table
- [x] No generic claims without numbers — 6+ specific figures throughout
- [x] No stacked hype adjectives — none
- [x] No service-dump paragraph — single anchor discipline held

### B. Factual & energi-gas / CNG spot-check
| Claim | Source check | Verdict |
|---|---|---|
| Biometana ~90–95% metana pasca-*upgrading*; biogas mentah ~50–70% | dossier ✓ (CEO PGN Gagas / EBTKE forum + literatur biogas-upgrading) | pass |
| Metana GWP100 ~28x CO2 (IPCC AR5) | dossier ✓ (konsisten IPCC AR5) | pass |
| GAPKI: potensi biogas POME ~3,6 miliar m³/tahun, ~15% termanfaatkan; IPOSS >1,5 miliar m³ ≈ 1,1 miliar liter solar | dossier ✓ (GAPKI Ags 2026; IPOSS 2025) — labeled as estimate, dual-sourced | pass |
| Pekanbaru: Gagas offtaker/distributor Bio-CNG KIS Biofuels, ~36.500 MMBTU th-1, ritel pertama | dossier ✓ (ANTARA Jan 2024) + attributed | pass |
| Pertagas Niaga–reNIKOLA–PTPN IV: 15 thn, ~USD 45 juta, >830.000 MMBTU/thn | dossier ✓ (ANTARA Sept 2026) | pass |
| Flagged-risky figures (536.413 m³/jam; ~6% solar transport; KBLI 35203; 71,5 juta m³) | dossier flags: OMIT | pass — none appear in article |

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — **51** chars; "CNG Indonesia" appears inside "Bio-CNG Indonesia" (chars ~5–17)
- [x] Meta description 140–160 — **150** chars
- [x] Slug ≤60, kebab-case, keyword — `bio-cng-indonesia-terbarukan-limbah-sawit` (41)
- [x] H1 contains keyword — "…CNG…di Indonesia"
- [x] H2 count 4–5 — **4** content H2s (+ FAQ + Kesimpulan = 6 total)
- [x] ≥1 question-format H2 (#1, #3); ≥1 honest/counter H2 (#4 "Tantangan … yang Jarang Dibahas")
- [x] Keyword in first 100 words — yes (lead + hub anchor)
- [x] Definition snippet near top — "Ringkas:" blockquote ~55 words
- [x] ≥8 LSI terms — ~12 (Bio-CNG, biometana, CBG, POME, gas terbarukan, biogas, upgrading, digester anaerobik, virtual pipeline, GTM, metana/GWP, drop-in, dekarbonisasi)
- [x] 3 internal links (1 hub + 2 cousins) — perusahaan-cng-indonesia (lead), gaslink, gasku
- [x] ≥1 external authoritative citation — **2 hyperlinked** (ESDM via Kontan, IEA) + inline attributions (ANTARA, pewarta.co, sawitindonesia, GAPKI, IPOSS)
- [x] FAQ 5–7 Q&As — **6**
- [x] 2 image placeholders — IMAGE_01, IMAGE_02 (rich concepts + alt-text)
- [x] ≥1 list + ≥1 table — numbered steps + project bullets + comparison table
- [x] Word count 1,200–1,600 — **1486**

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each of the 4 body H2s (verified per section: ~50/48/50/48 words)
- [x] Each body paragraph makes one independently quotable, verifiable point (claim + sourced fact)
- [x] FAQ parseable for FAQPage schema; `date_modified: 2026-09-21` added to meta block

### D. PGN Gagas framing discipline (product_matrix.md + style_guide §11)
- [x] Framed as gas-energy provider/distributor (menyerap/mendistribusikan/menyalurkan) — explicit "bukan produsen"
- [x] ≤3 self-mentions — **2** (Pekanbaru project fact + closing positioning/CTA); tightened from draft to honor the ≤2 informational hedge
- [x] No unverifiable superlatives — none ("pertama untuk pelanggan ritel" is an attributed press claim, not a superlative)
- [x] Product names/specs match product_matrix.md / company_profile.md (Gasku, Gaslink/GTM, virtual pipeline; anak usaha PGN / Subholding Gas Pertamina)
- [x] Closing uses a company_profile.md positioning line (paraphrased "penopang bisnis hilir … memperluas manfaat gas bumi … ke wilayah tanpa pipa")
- [x] Soft website CTA is the FINAL line, after Kesimpulan — "…kunjungi gagas.co.id." (consultative)
- [x] Hub link is a natural inline anchor in the lead ("CNG di Indonesia") — no "BACA JUGA"

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: `cng-indonesia-05` (cng-transisi-energi-indonesia — fossil gas as bridge fuel). No prior Bio-CNG/biometana/POME article exists (grep of index.json + by_keyword returned only "baseload backup energi terbarukan" in cng-05).
- Subtopic overlap (Jaccard estimate): ~0.08 (shares only the "energi bersih" umbrella; entities and source-of-gas differ entirely).
- Verdict: **distinct angle confirmed** — true whitespace; held Wobbe/nilai-kalor angle not reused.

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran; `cng-indonesia-03.id.quality-input.json` written
- [x] AI-detector score < 0.30 — **0.04** (verdict pass); 1 low flag (paragraph-low-variance CV 0.323, target ≥0.45) — immaterial at this score
- [x] Paragraph burstiness CV ≥ 0.30 — **0.323** (sentence burstiness 0.732; top-30 vocab share 0.328)
- [x] Plagiarism: **heuristic-only (no WebSearch — budget exhausted)**. All 8 candidate passages are the writer's own prose carrying dossier-sourced facts/numbers/proper-nouns, each attributed inline (ANTARA, pewarta.co, sawitindonesia.com, GAPKI, IPOSS, Kontan/ESDM). Candidate #7 is a generic technical process description (upgrading removes CO2/H2S/water to ~90–95% methane) — well-known-fact category. No distinctive ≥20-word original-prose lift detected; expected web overlaps are shared facts/entity names only (ignored per policy). Heuristic plagiarism score: **0.06** (below revise thresholds 0.15 sentence / 0.08 paragraph). Degraded mode acceptable per standing policy.

## The shipping question
If this ran on gagas.co.id tomorrow, a senior energy practitioner would find it accurate, appropriately hedged, and free of vendor puff — and a skeptical industrial buyer would trust the "belum instan / belum ada skema harga khusus / selalu ada biaya angkut" candor. WEBARQ Promote would be proud of it. **Approve.**
