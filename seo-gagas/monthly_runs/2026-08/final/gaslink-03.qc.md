---
brief_id: "gaslink-03"
editor_run_date: "2026-08-11"
recommendation: "approve"
overall_score: 9
ai_score: 0.08
plagiarism_score: 0.05
---

# Editor QC Report — Seberapa Bersih Gas Bumi? Jejak Karbon Well-to-Burner

## Recommendation
**approve**

This is a strong, curator-ready draft that hits the hardest part of the brief — an honest, well-hedged lifecycle explainer on a climate-sensitive topic — without a single AI tell, superlative, or framing error. Every critical numerical hedge is intact and correctly attributed: EIA combustion factors (52,91 / 62,88 / 74,14 / 95,99 kg CO2/MMBTU), GWP stated as ranges (GWP100 ~27–30x, GWP20 ~80–83x), the two non-equivalent leakage studies kept separate (Alvarez 2018 ~2,7% US/GWP100 vs Gordon 2023 4,7% GWP20 / 7,6% GWP100 global), the "~2–3%" internet figure explicitly debunked as a conflation, and the IEA "~35% lebih rendah" claim attributed (not verbatim) and labelled "rata-rata global." No PGN Gagas-specific methane number and no ~16% renewable-mix figure appear. Originality is excellent (AI-detector 0.08; no non-Gagas verbatim ≥20 words). I applied one clarity edit distinguishing the two adjacent "35%" figures and corrected the frontmatter word count. The only open note is intentional-by-design (the brand keyword "Gaslink" sits in lead/conclusion/anchor rather than the H1/meta title, because the article deliberately targets the "seberapa bersih gas bumi" informational query) — aligned with the brief, not drift.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Zero flagged openers/transitions; varied rhythm; honest-hedging voice reads like a practitioner. |
| Factual & energi-gas / CNG accuracy | 9 | All five spot-checks pass vs dossier; one medium-confidence Indonesia ranking figure, properly attributed. |
| On-page SEO compliance | 8 | Meta/slug/lengths all in range; brand keyword absent from title/H1/slug by deliberate intent (noted). |
| GEO extractability (§2a) | 9 | 40–60-word answer after every H2; one quotable point per paragraph; extractable tables/lists. |
| PGN Gagas framing discipline | 9 | "menyalurkan" not "memproduksi"; 3 self-mentions; positioning line + soft CTA; no superlatives. |
| Internal linking | 9 | Hub in lead + 2 distinct cousins (deduped correctly to gasku); descriptive anchors, no BACA JUGA. |
| FAQ quality | 9 | 6 self-contained Q&As, 40–80 words, each carries a sourced number. |
| Originality (plagiarism + AI-detector) | 10 | AI 0.08 (pass); no verbatim non-Gagas hit ≥20 words across 3 targeted web checks. |

## What I fixed (changelog)
- Distinguished the two adjacent "35%" figures in the "Gas Bumi vs Batubara" section — added a signpost ("Ini soal pangsa metana, bukan lagi perbandingan lifecycle di atas...") and expanded "sektor bahan bakar fosil (batubara, minyak, dan gas)" so readers don't conflate the lifecycle-vs-coal 35% (para 1, IEA GMT 2025) with the methane-share 35% (para 2, IEA GMT 2026). No numbers or hedges changed.
- Corrected frontmatter `word_count` 1464 → 1517 (tool-measured readable count of the final; excludes {IMAGE} concept text).

## What I flagged (open issues)
- ⚠️ Primary/brand keyword "Gaslink" is not in the meta title, H1, or slug (it appears in the lead hub link, the conclusion, and the link anchor). — *recommendation*: leave as-is. This is deliberate and brief-aligned: the article targets the informational query "seberapa bersih gas bumi / jejak karbon well-to-burner," and forcing the brand term into the title would mismatch intent. Keyword-placement for the true target ("gas bumi," "well-to-burner") is fully satisfied.
- ⚠️ The "Indonesia peringkat ke-2 Asia Selatan-Tenggara, >3 juta ton (2025)" figure is medium-confidence in the dossier (IEA regional page was 403-blocked; corroborated via secondary ecobiz.asia + WebSearch). — *recommendation*: it is correctly attributed to IEA GMT 2026 and framed as reported; safe to publish. If it later becomes a headline claim, verify wording direct from iea.org.
- ⚠️ No explicit `dateModified` field in the meta block (freshness carried by `publish_month: 2026-08`). — *recommendation*: CMS should populate `dateModified` on publish for GEO freshness.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan / Tidak dapat dipungkiri" openers — 0 hits
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — 0 hits
- [x] No "Penting untuk dicatat / dipahami bahwa" — 0 hits
- [x] "Dengan demikian" not overused — 0 hits
- [x] Em-dash count ≤2 — 0 in body (writer used commas)
- [x] Varied paragraph lengths — mix of 2–5 sentence paras + 1-line list lead-ins (burstiness CV 0.43)
- [x] Not every H2 → 3-bullet list — H2s mix prose / table / numbered list / bullets
- [x] No generic claims without numbers — 20+ specific figures inline
- [x] No stacked hype adjectives (canggih/powerful/terdepan/seamless) — 0 hits
- [x] No service-dump paragraph — single positioning line in conclusion

### B. Factual & energi-gas / CNG spot-check
| Claim | Source check | Verdict |
|---|---|---|
| Gas 52,91 vs batubara 95,99 kg CO2/MMBTU (~45% lebih rendah), LPG 62,88, solar 74,14 | dossier ✓ / EIA (eia.gov) ✓ | pass |
| GWP100 metana ~27–30x, GWP20 ~80–83x (ranges, IPCC AR6) | dossier ✓ / product_matrix framing ✓ | pass |
| Alvarez 2018 ~2,7% (US, GWP100, pembangkit) + riil ~2,3% — kept separate from Gordon | dossier ✓ (two-studies note) | pass |
| Gordon 2023 global: ~7,6% (GWP100) / ~4,7% (GWP20); field range 0,65%–>60% | dossier ✓ | pass |
| IEA: gas ~35% lebih rendah lifecycle (rata-rata global) + fossil ~35% metana antropogenik (GMT 2026) | dossier ✓ (attributed, not verbatim) | pass |

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — 52 chars; topic keyword "Gas Bumi" in first 30; brand keyword by design not present (see flag)
- [x] Meta description 140–160 — 151 chars
- [x] Slug ≤60, kebab-case, keyword — `jejak-karbon-gas-bumi-well-to-burner` (36)
- [x] H1 contains keyword/synonym — "Gas Bumi" + "Well-to-Burner" (topic target)
- [x] H2 count 4–5 — 5 body H2s
- [x] ≥1 question-format H2 (H2#3) + ≥1 honest/counter-conventional H2 (H2#5)
- [x] Keyword in first 100 words — "Gaslink" + "jejak karbon gas bumi" in lead
- [x] Definition snippet near top (40–60 words) — blockquote ~55 words
- [x] ≥8 LSI terms — 12+ (well-to-burner, LCA, metana, kebocoran hulu, GWP20/100, MMBTU, IEA GMT, CCUS, bridge fuel, batubara, MMBTU, combustion)
- [x] 3 internal links (1 hub + 2 cousins) — gaslink (hub, lead) + perusahaan-cng-indonesia (H2#1) + gasku (H2#5)
- [x] ≥1 external authoritative citation — 2 (EIA, IEA GMT 2026)
- [x] FAQ 5–7 Q&As — 6
- [x] 2 image placeholders (up to 3) — 3 ({IMAGE_01/02/03}) with alt-text
- [x] ≥1 list + ≥1 table — numbered list + bullet list + EIA table
- [x] Word count 1,200–1,600 — 1517

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 (verified for all 5 H2s)
- [x] Each body paragraph makes one independently quotable, verifiable point (claim + sourced number)
- [x] FAQ parseable for FAQPage schema; freshness via `publish_month` (recommend CMS `dateModified` — see flag)

### D. PGN Gagas framing discipline (product_matrix.md + style_guide §11)
- [x] Framed as gas-energy provider/distributor ("menyalurkan gas bumi ... lewat solusi CNG"), NOT producer
- [x] ≤3 self-mentions — 3 (Gaslink hub in lead; PGN Gagas positioning line in Kesimpulan; gagas.co.id CTA)
- [x] No unverifiable superlatives — none
- [x] Energi-gas / CNG names + specs match product_matrix.md / dossier (Gaslink = CNG industri/komersial; Gasku = BBG transportasi)
- [x] Closing uses a company_profile.md positioning line ("anak usaha PGN ... Subholding Gas Pertamina")
- [x] Soft website CTA is the FINAL line, consultative ("kunjungi gagas.co.id"), not "beli sekarang"
- [x] Hub link is a natural inline anchor in the lead — not a BACA JUGA callout

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: `2026-07-2-gaslink-06` (Gaslink & Dekarbonisasi: Turunkan Emisi Scope 1) — angle_hash `sha1:9cdbc3157a74`. Cross-cluster: `2026-07-cng-indonesia-05` (CNG & Transisi Energi, touches GWP20).
- Subtopic overlap (Jaccard estimate): ~0.11 vs gaslink-06; ~0.18 vs cng-indonesia-05. gaslink-02 shares the EIA combustion table but its intent is cost/efficiency comparison, not lifecycle/methane — this article explicitly labels the combustion table as NOT a lifecycle picture, so no cannibalization.
- Verdict: distinct angle confirmed (well-to-burner lifecycle + upstream methane at supply level; informational/counter-conventional). Below 0.4.

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran; `gaslink-03.id.quality-input.json` written
- [x] AI-detector score < 0.30 — actual **0.08** (verdict: pass). Two low-severity flags only: paragraph-variance CV 0.431 (clears the 0.30 tell threshold; just under the 0.45 aspirational target) and vocab-repetition 35.6% (expected — domain terms gas/metana/emisi/kebocoran/batubara must recur in a focused technical piece). No fix required.
- [x] Paragraph burstiness CV ≥ 0.30 — actual **0.431**
- [x] Plagiarism: distinctive passages web-checked (3 targeted searches on original prose + the leakage-conflation synthesis); no non-Gagas verbatim hit ≥20 words. Remaining candidates are EIA/IPCC data values — cited authoritative facts, ignored per rule. Plagiarism score: **0.05**
