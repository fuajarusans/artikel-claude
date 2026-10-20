---
brief_id: "gasku-01"
editor_run_date: "2026-08-11"
recommendation: "approve"
overall_score: 9
ai_score: 0.04
plagiarism_score: 0.03
---

# Editor QC Report — Kendaraan Apa Saja yang Bisa Pakai Gasku? Matriks Kompatibilitas BBG

## Recommendation
**approve**

A clean, genuinely useful draft that clears every hard gate. The anti-AI scan is essentially spotless (zero em-dashes, no cliché openers, honest hedging throughout, varied rhythm), the AI-detector score is 0.04, and no distinctive passage returns a non-Gagas verbatim match. Most importantly for this article's risk profile, all four critical framing hedges hold: **Gasku is stated as gasoline-only**, **DDF is kept explicitly separate as a Pertamina/PGN corporate-fleet program (not retail Gasku)**, **CNG kit (ISO 11439/SNI 7407) is clearly distinguished from LPG/LGV kit (ECE R67)**, and kit prices are labeled market ranges, not Gagas tariffs. My only substantive fix was turning the two inline authority attributions (Kemenperin, Kementerian ESDM/Ditjen Migas) into real outbound hyperlinks, which the on-page checklist requires. The article is curator-ready.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | No em-dashes, no AI openers, real hedging ("pernyataan perusahaan, bukan angka audit"). Paragraph CV 0.395 — above the 0.30 strong-tell line, just under the script's 0.45 ideal. |
| Factual & energi-gas / CNG accuracy | 10 | All 5 spot-checked claims trace to the dossier; every flagged risk in the dossier is correctly hedged. |
| On-page SEO compliance | 9 | Meta/title/slug/H2/keyword all pass. Fixed: external sources were attributed in text but not hyperlinked — now 2 live authoritative outbound links. |
| GEO extractability (§2a) | 9 | 40–60-word direct answer after every major H2, top definition snippet, one quotable point per paragraph, FAQ FAQPage-ready. |
| PGN Gagas framing discipline | 9 | Provider/distributor framing correct ("memasok…lewat SPBG", not kit maker/producer). 3 company self-mentions — at the ceiling but within budget. No superlatives. |
| Internal linking | 10 | 3 links: hub (Gasku) in lead + 2 cousins (CNG, Gaslink), all natural inline anchors, no BACA JUGA. |
| FAQ quality | 8 | 6 Q&As (brief targeted 7; within the 5–8 band), each 42–52 words, self-contained, sourced. |
| Originality (plagiarism + AI-detector) | 10 | AI 0.04; no verbatim ≥20-word lift on any non-Gagas page. |

## What I fixed (changelog)
- **Converted 2 inline authority attributions into real outbound hyperlinks** (on-page + §9 requirement): "(Kemenperin)" → `[persyaratan teknis konverter kit dari Kemenperin](https://kemenperin.go.id/artikel/4130/)`; "Kementerian ESDM melalui Ditjen Migas" → linked to the ESDM/Ditjen Migas DDF page. The article previously had 0 outbound authoritative links despite listing them in frontmatter.
- **Updated frontmatter `word_count` 1543 → 1549** to reflect the ~6 added anchor words. (The scanner reports 1605 because it tokenizes the two long source URLs as words; genuine readable prose is ~1549, within the 1,200–1,600 band.)

## What I flagged (open issues)
- ⚠️ Paragraph burstiness CV = 0.395 — *recommendation*: acceptable (above the 0.30 strong-tell threshold; AI score 0.04). No action needed; noted only because the scanner's stricter 0.45 ideal fired a low-severity flag. Did not pad to fix, since HCU penalizes padding.
- ⚠️ Company self-mentions sit at 3 (definition snippet, FAQ motor-trial attribution, conclusion) — *recommendation*: at the ceiling but compliant. The FAQ mention is a factual, dossier-verified attribution of a real PGN + PT Gagas Energi Indonesia trial, so it is defensible; if a future edit adds another, drop one.
- ⚠️ FAQ has 6 Q&As vs the brief's target of 7 (the "mobil injeksi modern" question is covered instead inside H2 #4) — *recommendation*: leave as-is; 6 is within the 5–8 policy band and avoids duplicating the injeksi/karburator H2.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan / Tidak dapat dipungkiri" openers — grep clean
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — grep clean (zero occurrences)
- [x] No "Penting untuk dicatat / dipahami bahwa" — grep clean
- [x] "Dengan demikian" not overused — zero occurrences
- [x] Em-dash count ≤2 — **0 em-dashes**
- [x] Varied paragraph lengths — mixes 1-sentence ("'Bisa dipasang' tidak selalu berarti 'sebaiknya dipasang'.") with 4–5-sentence blocks
- [x] Not every H2 → 3-bullet list — H2s lead with prose; only 2 sections use bullets, plus 1 table + 1 numbered list
- [x] No generic claims without numbers — 200 bar, RON >120, Dec 2022, 89 trucks, 30%, 38,7 km/LSP, Rp 15–25 jt, Rp 12–13 jt
- [x] No stacked hype adjectives — none
- [x] No service-dump paragraph — single anchor at close only

### B. Factual & energi-gas / CNG spot-check
| Claim | Source check | Verdict |
|---|---|---|
| Gasku = 200 bar, RON >120, tabung seamless | dossier ✓ (gagas.co.id/gasku/ first-party) | pass |
| DDF: 3 truk tangki Des 2022, target 89 truk 2024, hemat s/d 30% (pernyataan PGN) | dossier ✓ (ESDM/Ditjen Migas) | pass |
| CNG kit → ISO 11439/SNI 7407-2009/7408-2009 vs LGV → ECE R67, payung Permenperin 70/2012 | dossier ✓ (Kemenperin artikel 4130) | pass |
| Uji coba motor CNG Maret 2023, 3 unit, rata-rata 38,7 km/LSP, dual-fuel | dossier ✓ + WebSearch corroborated (Republika, Liputan6, Antara, Dunia Energi) | pass |
| Biaya kit Rp 15–25 jt (baru) / Rp 12–13 jt (bekas), labeled "angka pasar, bukan tarif Gasku" | dossier ✓ (Kumparan; market range) | pass |

**Critical hedges — all held:** bensin-only ✓; DDF a separate corporate program (not retail Gasku) ✓; CNG-kit ≠ LPG/LGV-kit ✓; Permenhub 39/2012 attributed generally, no verbatim pasal ✓; tabung retest = "inspeksi berkala sesuai standar/penandaan pabrik" with no invented interval ✓; no regulator vehicle-age cutoff ("Tidak ada batas tahun resmi") ✓; no current SPBG total stated ✓ (WebSearch surfaced a live "14 SPBG/7 provinsi" figure the draft correctly avoids); kit price framed as market range ✓.

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — 53 chars; "Gasku" at pos 0
- [x] Meta description 140–160 — ~150 chars
- [x] Slug ≤60, kebab-case, keyword — `gasku-matriks-kompatibilitas-kendaraan-bbg` (42)
- [x] H1 contains keyword — "Kendaraan Apa Saja yang Bisa Pakai Gasku?…"
- [x] H2 count 4–5 — 5 body H2s (+ FAQ + Kesimpulan)
- [x] ≥1 question-format H2 (#1, #2, #4); ≥1 honest/counter-conventional H2 (#5 "…yang Sebaiknya TIDAK Dipaksakan Dulu")
- [x] Keyword in first 100 words — "Gasku" in sentence 1 (hub-linked)
- [x] Definition snippet near top (40–60 words) — blockquote "Ringkas:", ~55 words
- [x] ≥8 LSI terms — 12+ (spark-ignition, DDF, bi-fuel, dedicated CNG, converter kit SNI, gas injector, kalibrasi ECU, mixer, uji tipe/SUT/SRUT, tabung seamless, CNG, SPBG)
- [x] 3 internal links — gagas.co.id/gasku/ (lead), /perusahaan-cng-indonesia/ (H2#1), /gaslink/ (CTA)
- [x] ≥1 external authoritative citation — **now 2 live links** (Kemenperin, ESDM/Ditjen Migas) after fix
- [x] FAQ 5–7 Q&As — 6
- [x] 2 image placeholders (up to 3) — 3 {IMAGE_01/02/03}, each with Bahasa Indonesia alt-text
- [x] ≥1 list + ≥1 table — 1 table (matriks) + 1 numbered list (jalur legal) + 2 bullet lists
- [x] Word count 1,200–1,600 — ~1549 prose (scanner 1605 = URL-token inflation)

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — verified for all 5
- [x] Each body paragraph makes one independently quotable, verifiable point
- [x] FAQ parseable for FAQPage schema; freshness — publish_month 2026-08 present in meta block

### D. PGN Gagas framing discipline (product_matrix.md + style_guide §11)
- [x] Framed as gas-energy provider/distributor ("Gasku memasok bahan bakar CNG-nya lewat jaringan SPBG… converter kit… ranah produsen kit… bukan penyedia gas") — NOT a kit maker/gas producer
- [x] ≤3 PGN Gagas self-mentions — 3 (def snippet / FAQ trial attribution / conclusion); at ceiling, compliant
- [x] No unverifiable superlatives — none
- [x] Energi-gas / CNG product names + specs match product_matrix.md / dossier
- [x] Closing uses a company_profile.md positioning line ("anak usaha PGN… bagian dari Subholding Gas Pertamina… menyalurkan energi gas bumi… melalui jaringan SPBG")
- [x] Soft website CTA present as the FINAL line, after `## Kesimpulan` — invites visit to gagas.co.id, consultative tone
- [x] Hub link is a natural inline anchor in the lead — no BACA JUGA callout

### E. Anti-cannibalization spot check
- Closest prior article: `2026-07-gasku-03` ("Kapan Kendaraan & Armada Anda BELUM Cocok Pakai BBG (Jujur)") — an operational/economic eligibility filter.
- This article filters on **technical/mechanical** eligibility (engine architecture, injeksi vs karburator, DDF separation, SNI/SUT legalization) → different output (technical verdict vs business verdict). Also distinct from `2026-07-2-gasku-06` (BBG vs LGV vs listrik comparison).
- Subtopic overlap (Jaccard estimate): ~0.15
- Verdict: **distinct angle confirmed** (well under 0.4)

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran; `gasku-01.id.quality-input.json` written
- [x] AI-detector score < 0.30 — **0.04** (verdict: pass)
- [x] Paragraph burstiness CV ≥ 0.30 — **0.395** (sentence burstiness 0.729; top30 vocab share 0.322)
- [x] Plagiarism: 8 candidates extracted; distinctive prose passages web-checked — **no non-Gagas verbatim ≥20 words**. The motor-trial figure (38,7 km/LSP, Mar 2023) is multi-outlet common knowledge in our own paraphrase; definition snippet and injeksi/karburator line return no lifts. Plagiarism score: 0.03.
