---
brief_id: "cng-indonesia-03"
editor_run_date: "2026-07-08"
recommendation: "approve"
overall_score: 9
ai_score: 0.00
plagiarism_score: 0.00
---

# Editor QC Report — 7 Mitos CNG yang Masih Dipercaya (dan Faktanya)

## Recommendation
**approve**

The article is curator-ready. It nails the myth-vs-fact angle the brief asked for, teaches the physics vendor-neutrally, and (crucially) honors the honesty mandate by keeping "tenaga turun" framed as *sebagian benar* rather than debunking it flat. Every load-bearing number traces to the dossier and was re-verified against authoritative sources (Kementerian ESDM/Ditjen Migas, Kompas 2012, multi-outlet CNG Merah Putih coverage, U.S. DOE/AFDC, peer-reviewed CNG-vs-E10 study). Originality is clean: AI-detector 0.00 with 0 flags and paragraph burstiness CV 0.503; no non-Gagas verbatim ≥20 words across all 8 plagiarism candidates. The two fixes that mattered most were made in-place: the em-dash count in body prose was cut from 19 to 0 (a strong AI/style tell), and the length was trimmed from an over-cap draft to 1,566 reader-facing words (script count 1,599) — inside the 1,200–1,600 band. All must-keeps (3 links, 4 authoritative citations, definition snippet, all H2s + 40–60w answers, comparison table, both list types, honest-limitations H2, 6 FAQs, Kesimpulan + soft CTA, 3 {IMAGE_NN}, ≤3 self-mentions) are intact, and no hedge was weakened.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Varied rhythm, honest hedging, no filler openers; em-dashes reduced to 0 in body prose. Burstiness CV 0.503. |
| Factual & energi-gas / CNG accuracy | 9 | 5/5 spot-checks pass; every figure sourced/hedged. No invented specs; 540°C correctly attributed to industry, not ESDM. |
| On-page SEO compliance | 9 | Meta title 37c, desc 154c, slug 32c; keyword in H1/lead/last para; 4 external citations. |
| GEO extractability (§2a) | 9 | Definition snippet + a 40–60w direct answer after each major H2; one quotable point per paragraph; FAQPage-ready. |
| PGN Gagas framing discipline | 10 | Framed as distributor/penyalur CNG beyond-pipeline; 2 self-mentions; no superlatives; product names match matrix. |
| Internal linking | 10 | Hub inline in lead + 2 cousins (Gasku, Gaslink) placed where the topic connects. No "BACA JUGA". |
| FAQ quality | 8 | 6 Q&As, each 40–60w, self-contained, mirrors PAA. Dropped one duplicate ("boros perawatan") to trim length. |
| Originality (plagiarism + AI-detector) | 10 | AI 0.00 / 0 flags; plagiarism 0 verbatim hits ≥20 words on non-Gagas pages. |

## What I fixed (changelog)
- **Em-dashes: 19 → 0 in body prose** (replaced with commas/full stops throughout lead, definition snippet, all 5 H2 bodies, FAQ, and Kesimpulan). Remaining em-dashes are only in the title/H1, one question-format H2, and the three `{IMAGE_NN}` design-brief captions — none are body prose.
- **Length: over-cap draft → 1,566 reader-facing words** (script word_count 1,599; both under the 1,600 hard cap and inside the 1,200–1,600 band). Cuts were redundancy-only: merged two duplicative paragraphs in Mitos 1 (both restated "lighter than air → disperses up"), removed one fully-duplicate FAQ ("boros perawatan", a non-priority-PAA question already covered by Mitos 6 body), and tightened flabby connectors. **No hedge, number, citation, link, or structural element was cut.**
- **Preserved all required hedges verbatim**: "tenaga turun" stays *sebagian benar / bukan mitos kosong*; "10–20%" retained with the "12,4% daya / 23,7% torsi vs Pertamax RON 92" kept as an explicitly labeled single-study illustration; "540°C" kept with "(angka rentang teknis industri CNG/NGV, bukan regulasi ESDM)" attribution; emission figures kept as "sekitar 20% / 27%, besarannya bervariasi antar studi". The forbidden "95% emisi" claim and the "1.000 truk / 18.000 kendaraan" projection are correctly **absent**.
- **Frontmatter**: corrected `word_count` 1727 → 1566 (the 1727 was a `wc`-of-body count that included the ~141 words of `{IMAGE_NN}` design-brief caption text, which is not published prose); added `dateModified: "2026-07-08"` for GEO freshness.

## What I flagged (open issues)
- ⚠️ Auto-ignition "~540°C" and flammability "~5–15%" remain industry-standard figures without a direct ESDM/Lemigas primary source. *Recommendation*: the article already attributes them correctly ("angka rentang teknis industri CNG/NGV, bukan regulasi ESDM") — no action needed, but do not let a future edit reattribute them to ESDM.
- ⚠️ CNG Merah Putih is a live, evolving July-2026 story. As of the re-verification, ministers now publicly claim CNG will be 30–40% cheaper than LPG; the article's more conservative "harganya ditargetkan setara LPG bersubsidi, tapi ini target uji coba, belum harga final" is defensibly cautious and remains accurate. *Recommendation*: fine to publish now; refresh if the price policy is finalized.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers
- [x] No "Selain itu" opening ≥2 consecutive paragraphs (0 occurrences)
- [x] No "Penting untuk dicatat / dipahami bahwa"
- [x] "Dengan demikian" not overused (0 occurrences)
- [x] Em-dash count ≤2 in body prose — **0 in body prose** (remaining 6 are title/H1, 1 question-H2, 3 image-brief captions — all exempt)
- [x] Varied paragraph lengths (1–6 sentences; burstiness CV 0.503)
- [x] Not every H2 → 3-bullet list (mix of prose, bullets, numbered list, table, bolded sub-myths)
- [x] No generic claims without numbers (6+ specific figures)
- [x] No stacked hype adjectives (no canggih/powerful/terdepan)
- [x] No service-dump paragraph

### B. Factual & energi-gas / CNG spot-check
| Claim | Source check | Verdict |
|---|---|---|
| Metana densitas ≈0,657 kg/m³ < udara ≈1,2 kg/m³ (naik saat bocor) | dossier ✓ (Kementerian ESDM, Ditjen Migas — "bahan bakar gas akan membumbung ke udara") | pass |
| Auto-ignition ~540°C + flammability ~5–15% (attributed to industri CNG/NGV, bukan ESDM) | product_matrix/dossier ✓ + WebSearch (Automotive Fleet "Dispelling CNG Safety Myths", Wikipedia CNG; methane 540–580°C range) | pass (correctly hedged) |
| CNG Merah Putih 3 kg, ~15 prototipe, Lemigas mulai Juli 2026 | dossier ✓ (CNBC) + WebSearch (Kontan, Detik, CNN Indonesia, Bloomberg Technoz all corroborate) | pass |
| Tenaga turun ~10–20% pada retrofit (12,4%/23,7% one study, illustrative) | dossier ✓ (framed as *sebagian benar*, single study labeled) | pass (hedge intact) |
| Emisi CO₂ turun ~20% vs E10 / ~27% vs solar (bervariasi) | dossier ✓ (AFDC/DOE) + WebSearch (peer-reviewed CNG-vs-E10 study confirms ~20% CO₂) | pass (ranged + attributed) |

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: **37 chars**, "CNG ... Indonesia" within first ~15 chars
- [x] Meta description 140–160 — actual: **154 chars**
- [x] Slug ≤60, kebab-case, keyword — actual: `mitos-cng-indonesia-dan-faktanya` (32 chars)
- [x] H1 contains keyword ("CNG")
- [x] H2 count 4–5 body — actual: **5 body H2s** (+ FAQ + Kesimpulan = 7 total)
- [x] ≥1 question-format H2 (Mitos 1 "…— Benarkah?"); ≥1 honest/counter-conventional H2 ("Fakta yang Juga Perlu Diakui…")
- [x] Keyword in first 100 words (lead)
- [x] Definition snippet near top (blockquote, ~55 words)
- [x] ≥8 LSI terms — counted: **~15** (metana, auto-ignition, solenoid valve, excess flow valve, densitas, bi-fuel, converter kit, retrofit, beyond-pipeline, GTM, SPBG, LPG, BBG, CNG Merah Putih, Compressed Natural Gas)
- [x] 3 internal links (1 hub + 2 cousins) — destinations: perusahaan-cng-indonesia (lead) / gasku / gaslink
- [x] ≥1 external authoritative citation — actual: **4** (ESDM/Ditjen Migas, Kompas, CNBC, U.S. DOE/AFDC)
- [x] FAQ 5–7 Q&As — actual: **6**
- [x] 2 image placeholders (up to 3) — actual: **3**
- [x] ≥1 list + ≥1 table — bulleted list, numbered list, and 1 comparison table
- [x] Word count 1,200–1,600 — actual: **1,566 reader-facing / 1,599 script count**

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 (Kenapa mitos, Mitos 1, Mitos 2–4, Mitos 5–7, Keterbatasan — each opens with a self-contained quotable answer)
- [x] Each body paragraph makes one independently quotable, verifiable point
- [x] FAQ parseable for FAQPage schema; `dateModified: 2026-07-08` noted in the meta block

### D. PGN Gagas framing discipline (product_matrix.md + style_guide §11)
- [x] PGN Gagas framed as gas-energy provider/distributor ("menghadirkan gas bumi… lewat solusi CNG beyond-pipeline"), NOT producing gas
- [x] ≤3 PGN Gagas self-mentions — actual: **2** (1× "PGN Gagas" in Kesimpulan + 1× gagas.co.id CTA)
- [x] No unverifiable superlatives (no terbaik/terbesar/nomor satu)
- [x] Energi-gas / CNG product names + specs match product_matrix.md / dossier (Gasku, Gaslink, GTM, beyond-pipeline)
- [x] Closing uses a company_profile positioning line ("anak usaha PGN dan bagian Subholding Gas Pertamina")
- [x] Soft website CTA present as the FINAL line, after the conclusion (invites visit to gagas.co.id; consultative tone)
- [x] Hub link present as a natural inline anchor in the lead ("[CNG di Indonesia]") — NOT a "BACA JUGA" callout

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: `apa-itu-cng-compressed-natural-gas-cara-kerja` (cng-indonesia-01), which contains one small "CNG ≠ LPG" aside.
- Subtopic overlap (Jaccard estimate): **~0.14** (only "CNG ≠ LPG" + "CNG aman" overlap thinly; this article deliberately keeps the LPG point brief per the brief).
- Verdict: **distinct angle confirmed** — this is a full myth-vs-fact article on perception/adoption psychology, not a definition or comparison piece; no overlap with cng-indonesia-01/02/04/05.

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran clean; `cng-indonesia-03.id.quality-input.json` written (word_count 1599, 27 paragraphs, 88 sentences)
- [x] AI-detector score < 0.30 — actual: **0.00** (verdict pass, 0 flags, external_api_used false)
- [x] Paragraph burstiness CV ≥ 0.30 — actual: **0.503** (sentence burstiness 0.662; top30 vocab share 0.257)
- [x] Plagiarism: 8 candidate passages web-checked; **0 non-Gagas verbatim hits ≥20 words**. The distinctive candidates (540°C sentence, GTM beyond-pipeline sentence, CNG Merah Putih price line, SPBG 2011–2013 passage) returned only same-topic paraphrases across independent sources, no verbatim lift; the remaining candidates are our own H2 headings. Plagiarism score: **0.00**.
