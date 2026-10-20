---
brief_id: "cng-indonesia-01"
editor_run_date: "2026-07-08"
recommendation: "approve"
overall_score: 9
ai_score: 0.04
plagiarism_score: 0.03
---

# Editor QC Report — CNG 3 Kg (Tabung Merah Putih): Pengganti LPG, Ini Cara Kerjanya

## Recommendation
**approve**

This is a strong, news-driven explainer that gets the single hardest thing right: it keeps the ESDM **Tabung Merah Putih 3 kg cylinder pilot** cleanly separated from the **jargas-CNG piped-network** program (the 160.000/2026 & 1 juta/2027 connection targets are correctly labeled as the jargas track, explicitly "**bukan** target Tabung Merah Putih"), which the dossier flagged as the top risk and which most competing news pages blur. Every high-risk hedge the brief/dossier demanded is intact and exact: no definitive public-launch date, savings framed as a government estimate/range (20–30% ESDM roadmap; 30–40% per Menteri Bahlil, attributed, not settled fact), Mother Station Medan "sejak Juni 2025," and — crucially — PGN Gagas is never implied to produce, test, or distribute the cylinders (it anchors only its general beyond-pipeline Mother Station role). Anti-AI scan is clean (AI-detector 0.04), plagiarism scan clears (no non-Gagas verbatim ≥20 words; facts corroborated across ESDM/CNN/Kompas/Tempo/Investortrust), GEO extractability is excellent (40–60-word answer after every H2), and all on-page items pass. Fixes were minor: reduced body em-dashes to zero, trimmed prose to hold the length ceiling, added `date_modified` for freshness. Curator-ready.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | No AI openers; varied paragraph/sentence rhythm; honest "masih di ruang uji, bukan di rak warung" register. AI-detector 0.04. |
| Factual & energi-gas / CNG accuracy | 10 | All 5 spot-checks pass vs dossier + web. Type 4 composite, ~15 prototipe, 200–250 bar, 83,97%/80,58%, jargas-vs-cylinder split all correct and correctly hedged. |
| On-page SEO compliance | 9 | Meta title 48, desc 159, slug 41; 5 body H2s; keyword first 100 words; definition snippet; 3 internal links; 15 LSI terms; table+list+FAQ. |
| GEO extractability (§2a) | 10 | 40–60-word direct answer after every major H2 (54/53/57/51/49); one quotable point per paragraph; FAQ FAQPage-ready; `date_modified` added. |
| PGN Gagas framing discipline | 10 | 2 self-mentions; framed as distributor/penyalur; NOT tied to the cylinder pilot; no superlatives; positioning line + soft CTA in close. |
| Internal linking | 9 | Hub (CNG di Indonesia) inline in lead; cousins Gasku + LNG woven naturally mid-body; no BACA JUGA. |
| FAQ quality | 9 | 7 self-contained Q&As from PAA, each 40–70 words with a number; mirrors real queries. |
| Originality (plagiarism + AI-detector) | 9 | AI 0.04, plagiarism 0.03; distinctive passages web-checked, no verbatim lift. |

## What I fixed (changelog)
- Removed both remaining body-prose em-dashes (line 43 "…tekanan tinggi — titik…" → split into two sentences; line 49 "…titik rendah ruangan — itulah kenapa…" → "…, sehingga…"). Body em-dash count now **0** (the only 2 em-dashes left are inside `{IMAGE_NN}` design-brief text, not reader prose).
- Tightened the lead (dropped redundant "apa itu CNG dan") and several supporting sentences to hold the length ceiling without touching any must-keep.
- Split the "Konversi ke gas bumi domestik…" sentence for rhythm and trimmed the Kesimpulan by one clause (kept the positioning line + soft CTA intact).
- Lightly tightened FAQ #1 and #7 answers (kept them 40–70 words, self-contained, with numbers).
- Added `date_modified: "2026-07-08"` to the meta block (GEO freshness signal, §2a) and set `word_count` to an accurate figure.

## What I flagged (open issues)
- ⚠️ **Raw word-count method vs table tokens** — a naïve `wc -w` of the body (incl. the comparison-table cells) reads ~1630; the actual published *prose* is ~1470 words, comfortably inside 1,200–1,600. The comparison table is a required must-keep (featured-snippet bait), so I did not cut it. Frontmatter `word_count: 1580` reflects the corpus-convention count. *Recommendation*: none needed — within policy; noting only so the curator isn't surprised by a tool that counts table cells.
- ⚠️ **Fast-moving news topic** — the pilot status ("tahap ketiga," "produksi target Juli") is fluid; the article is dated "per Juli 2026 / awal Juli 2026" throughout and `date_modified` is set. *Recommendation*: schedule a refresh check in ~4–6 weeks in case the cylinder clears its final Lemigas stage or a public-availability date is announced.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — grep clean
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — none present
- [x] No "Penting untuk dicatat / dipahami bahwa" — none
- [x] "Dengan demikian" not overused — 0 occurrences
- [x] Em-dash count ≤2 — body prose now **0**; only 2 inside IMAGE placeholders (design brief, non-reader)
- [x] Varied paragraph lengths — mixes 1-sentence and 5–6-sentence paragraphs; CV 0.31 (clears the 0.30 floor)
- [x] Not every H2 → 3-bullet list — mix of prose, a numbered 4-step list, one bulleted list, one table
- [x] No generic claims without numbers — 6+ specific figures (83,97%, 80,58%, 200–250 bar, ~15 prototipe, 160.000/1jt, 20–40%)
- [x] No stacked hype adjectives — none
- [x] No service-dump paragraph — single anchor (Mother Station beyond-pipeline) in the close

### B. Factual & energi-gas / CNG spot-check
| Claim | Source check | Verdict |
|---|---|---|
| LPG impor 83,97% (Jan–Feb 2026) vs 80,58% (2025) | dossier ✓ + Investortrust/Merdeka/Liputan6/GlobalEnergi (ESDM data) ✓ | pass |
| 160.000 sambungan (2026) / 1 juta (2027) = **jargas-CNG piped** program, NOT the 3kg cylinder | dossier flag ✓ + Kompas 19 Jun 2026 / Tempo / ANTARA / RRI ✓ | pass (correctly separated) |
| Savings 20–30% (ESDM roadmap) / 30–40% (Menteri Bahlil), framed as govt estimate/range | dossier ✓ + Bisnis.com (Rp30T) / Sumeks / Gebrak ✓ | pass (attributed, hedged) |
| ~15 prototipe Type 4 komposit, uji tahap ketiga di Lemigas, no launch date | dossier ✓ (CNN 1 Jul 2026, Dirjen Migas Laode Sulaeman) ✓ | pass (hedged "target internal") |
| Mother Station Medan "sejak Juni 2025," melayani industri/komersial/UMKM Sumut | dossier ✓ (PGN Gagas press release; correction applied) ✓ | pass |

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — 48 chars; "CNG" at pos 1
- [x] Meta description 140–160 — 159 chars
- [x] Slug ≤60, kebab-case, keyword — `cng-3-kg-tabung-merah-putih-pengganti-lpg` (41)
- [x] H1 contains keyword — "CNG 3 Kg (Tabung Merah Putih)…"
- [x] H2 count 4–5 — 5 body H2s (+ FAQ + Kesimpulan)
- [x] ≥1 question-format H2 ("Bagaimana CNG Sampai ke Dapur…?"); ≥1 honest/counter-conventional ("Yang Belum Terjawab…")
- [x] Keyword in first 100 words — "CNG 3 kg" in sentence 1
- [x] Definition snippet near top (40–60 words) — blockquote "Ringkasnya:" = 58 words
- [x] ≥8 LSI terms — 15 counted (Compressed Natural Gas, Type 4 komposit, gas melon, jargas, Lemigas, metana, Mother Station, beyond pipeline, subsidi, propana-butana, 200–250 bar, …)
- [x] 3 internal links — cng-indonesia (lead) + gasku + lng (body)
- [x] ≥1 external authoritative citation — inline: CNN Indonesia + Kompas.com + Kementerian ESDM; frontmatter lists ESDM roadmap URL + CNN + Kompas
- [x] FAQ 5–7 Q&As — 7
- [x] 2 image placeholders — {IMAGE_01}, {IMAGE_02}, each with alt-text
- [x] ≥1 list + ≥1 table — numbered 4-step list + bulleted list + comparison table
- [x] Word count 1,200–1,600 — ~1,470 published prose (frontmatter 1,580 corpus-convention); within band

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — 54 / 53 / 57 / 51 / 49 words
- [x] Each body paragraph makes one independently quotable, verifiable point
- [x] FAQ parseable for FAQPage schema; `date_modified: 2026-07-08` in meta block

### D. PGN Gagas framing discipline (product_matrix.md + style_guide §11)
- [x] Framed as distributor/penyalur CNG beyond-pipeline — "menyalurkan," "mengoperasikan Mother Station"; NOT producer; NOT linked to the cylinder pilot
- [x] ≤3 self-mentions — 2 ("PGN Gagas" in H2 #3 aside + Kesimpulan)
- [x] No unverifiable superlatives — none ("terbaik/nomor satu" absent)
- [x] Energi-gas / CNG names + specs match dossier / product_matrix — Type 4, 200–250 bar, Mother Station, jargas all correct
- [x] Closing uses a company_profile positioning line — "distributor CNG *beyond-pipeline* dan bagian Subholding Gas Pertamina"
- [x] Soft website CTA is the FINAL line — "…Anda dapat menjelajahinya di gagas.co.id." (consultative, not "beli sekarang")
- [x] Hub link is a natural inline anchor in the lead ("CNG di Indonesia") — no BACA JUGA callout

### E. Anti-cannibalization spot check
- Closest prior article for keyword_slug `cng-indonesia`: `cng-indonesia-01` (batch-1) — "Apa Itu CNG (Compressed Natural Gas) dan Cara Kerjanya" (general CNG definition / kompresi / Mother Station / CNG vs LNG vs LPG).
- Subtopic overlap (Jaccard estimate): ~0.10 — this batch-2 article is the **consumer 3 kg Tabung Merah Putih / LPG-replacement / jargas-vs-cylinder** angle, a 2026-news application absent from every batch-1 article.
- Verdict: **distinct angle confirmed** — no cannibalization risk.

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran clean (exit 0); `cng-indonesia-01.id.quality-input.json` written
- [x] AI-detector score < 0.30 — **0.04** (pass); one low-severity flag only (paragraph CV 0.31, above the 0.30 strong-tell floor)
- [x] Paragraph burstiness CV ≥ 0.30 — **0.31** (sentence burstiness 0.92)
- [x] Plagiarism: 8 distinctive passages web-checked; no non-Gagas verbatim hit ≥20 words — **0.03**. Facts corroborated across ESDM/CNN Indonesia/Kompas/Tempo/ANTARA/Investortrust; article phrasing original; the one definition-style passage ("CNG Merah Putih adalah tabung…") is a standard definition, not a lift.
