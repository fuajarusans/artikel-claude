---
brief_id: "gasku-03"
editor_run_date: "2026-07-08"
recommendation: "approve"
overall_score: 9
ai_score: 0.04
plagiarism_score: 0.03
---

# Editor QC Report — Gasku (BBG) vs LGV vs Mobil Listrik: Mana untuk Anda?

## Recommendation
**approve**

The draft was already strong: a genuinely useful three-way decision guide with the honest, vendor-neutral framing the brief demanded, faithful to the dossier's hedges (no invented g/km emission figures, EV price gap framed as a narrowing trend with dates, hemat 30–55% attributed to PGN, EV lifecycle framed as grid-dependent). My work was polish, not repair: I removed all six prose em-dashes (down to zero, from a limit of ≤2), tightened flabby phrasing to bring the published prose from ~1,633 to a comfortably in-band count (~1,488 prose words / declared 1,560), and re-verified every load-bearing number against the dossier and live authoritative sources. AI-detector score is 0.04 and plagiarism checks found no non-Gagas verbatim lift. No hedge, attribution, date, or number was altered. This is curator-ready.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Concrete pain lead, varied rhythm, honest asides; em-dashes now 0. Paragraph CV 0.316 (above the 0.30 tell line, below the softer 0.45 target) — acceptable given deliberate hedged register. |
| Factual & energi-gas / CNG accuracy | 10 | Every claim traces to dossier; 200 bar / 8–12 bar / RON 98 / Rp 4.500 LSP / 16,3% EBT / 20% cleaner all re-verified live. |
| On-page SEO compliance | 9 | Meta title 52, desc 155, slug 33, H1 with keyword, 5 body H2s, keyword in first 100 words. External links declared in frontmatter but not clickable in body (minor). |
| GEO extractability (§2a) | 9 | 40–60-word direct answer after each major H2; comparison table extracts row-by-row; FAQPage-ready; dateModified added. |
| PGN Gagas framing discipline | 10 | Provider/distributor framing correct; 2 self-mentions; no superlatives; positioning line + soft CTA in close. |
| Internal linking | 10 | Hub Gasku in lead + 2 cousins (CNG, Gaslink), natural inline anchors, no BACA JUGA. |
| FAQ quality | 9 | 7 Q&As, all 40–80 words, self-contained, mirror PAA. |
| Originality (plagiarism + AI-detector) | 10 | ai_score 0.04; no verbatim ≥20 words on non-Gagas pages. |

## What I fixed (changelog)
- Removed all 6 prose em-dashes (lead, savings bullet, H2 #5 heading, 3 FAQ answers) → replaced with commas/colons; body prose em-dash count now 0 (limit ≤2). Em-dashes remaining are only inside `{IMAGE_02}`/`{IMAGE_03}` design briefs (structural, preserved).
- Tightened lead, H2 #1 CNG-distribution sentence, H2 #2 emission note, H2 #4 opener + aside, H2 #5 opener, and the EV-price-trend note — trimmed padding words without touching any number, date, hedge, or attribution.
- Changed "tidak ada sumber primer" → "belum ada sumber primer" (softer, same meaning) in the g/km disclaimer.
- Updated frontmatter `word_count` 1633 → 1560 and added `date_modified: "2026-07-08"` (GEO §2a freshness).
- Copied polished article to `final/gasku-03.id.md`.

## What I flagged (open issues)
- ⚠️ **External citations are inline text attributions, not clickable body links** — the 3 authoritative sources (migas.esdm.go.id, iea.org, lestari.kompas.com) are declared in frontmatter `external_citations` and attributed inline ("detikFinance", "IEA", "Ditjen Migas ESDM", "Kompas, mengutip data ESDM") but not rendered as body hyperlinks. *Recommendation*: consistent with the approved sibling-cluster articles; CMS can hyperlink from the frontmatter list. Not blocking. If the client prefers in-body outbound links, add one `[Ditjen Migas ESDM](https://migas.esdm.go.id/post/Lebih-Jauh-Tentang-LGV-dan-CNG)` anchor in H2 #1.
- ⚠️ **company_profile.md is stale on infrastructure** (12 SPBG / 2021) vs current press (14 SPBG / 4 MRU / 1 Mother Station / 7 provinsi, per 2025–2026). Not used incorrectly in this article (the draft avoids the count), but flagged by the dossier for a separate profile refresh. *Recommendation*: refresh `company_profile.md` outside this article.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers
- [x] No "Selain itu" opening ≥2 consecutive paragraphs (0 occurrences)
- [x] No "Penting untuk dicatat / dipahami bahwa" (0)
- [x] "Dengan demikian" not overused (0)
- [x] Em-dash count ≤2 — now 0 in prose (was 6)
- [x] Varied paragraph lengths (1-sentence "Bisa." / "Tergantung..." mixed with 4–5-sentence blocks; CV 0.316)
- [x] Not every H2 → 3-bullet list (mix of prose, one numbered list, one bullet list, one table)
- [x] No generic claims without numbers (6+ specific numbers throughout)
- [x] No stacked hype adjectives
- [x] No service-dump paragraph

### B. Factual & energi-gas / CNG spot-check
| Claim | Source check | Verdict |
|---|---|---|
| CNG ~200 bar (metana) vs LGV 8–12 bar, tabung diisi 80–85%, RON 98 | dossier ✓ / Ditjen Migas ESDM (WebSearch confirmed) | pass |
| Gasku Rp 4.500/LSP stabil (April 2026) | dossier ✓ / detikFinance, Suara, Republika (WebSearch confirmed) | pass |
| BBG ~20% lebih rendah emisi dari BBM (klaim PGN, April 2026); kajian umum 20–30% | dossier ✓ / detikFinance + secondary (confirmed as PGN claim; hedge intact) | pass |
| Bauran EBT sektor ketenagalistrikan 16,3% (2025), lampaui target RUKN 15,9% | dossier ✓ / ESDM + ANTARA + Merdeka (WebSearch confirmed) | pass |
| Hemat 30–55% vs BBM (Corporate Secretary PGN, Okt 2025) — labeled claim, full range | dossier ✓ (upper-bound labeled) | pass |
| EV entry-level ~Rp 300 juta (2026), gap menyempit dari 2022 — trend, dated | dossier ✓ (framed as trend with date, not static %) | pass |

No g/km emission figures present (per dossier flag). No invented product names/specs. No PGN-Gagas-as-producer framing.

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — 52 chars, "Gasku" at position 0
- [x] Meta description 140–160 — 155 chars
- [x] Slug ≤60, kebab-case, keyword — `gasku-bbg-vs-lgv-vs-mobil-listrik` (33)
- [x] H1 contains keyword — "Gasku (BBG) vs LGV vs Mobil Listrik: Mana untuk Anda?"
- [x] H2 count 4–5 — 5 body H2s (+ FAQ + Kesimpulan)
- [x] ≥1 question-format H2 (#3) ; ≥1 honest/counter-conventional H2 (#5)
- [x] Keyword in first 100 words (lead, linked)
- [x] Definition snippet near top (blockquote, ~55 words)
- [x] ≥8 LSI terms — BBG vs mobil listrik, CNG vs LGV, Vi-Gas, converter kit, Bi-Fuel, TCO, LSP, capex/opex, bauran EBT, retrofit, SPBG (11+)
- [x] 3 internal links (1 hub + 2 cousins) — gagas.co.id/gasku (hub, lead), /perusahaan-cng-indonesia, /gaslink
- [~] ≥1 external authoritative citation — 3 declared in frontmatter + inline attributions; not clickable in body (flagged, non-blocking)
- [x] FAQ 5–7 Q&As — 7
- [x] 2 image placeholders (up to 3) — 3 ({IMAGE_01/02/03}), all with alt-text/concept
- [x] ≥1 list + ≥1 table — numbered list + bullet list + 1 comparison table
- [x] Word count 1,200–1,600 — ~1,488 prose (declared 1,560); in band

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 (each opens with a standalone answer before elaboration)
- [x] Each body paragraph makes one independently quotable, verifiable point
- [x] FAQ parseable for FAQPage schema; `date_modified: 2026-07-08` in meta block

### D. PGN Gagas framing discipline (product_matrix.md + style_guide §11)
- [x] Framed as gas-energy provider/partner (Gasku = "layanan CNG/BBG transportasi"; "memposisikan gas bumi sebagai energi transisi") — never producer
- [x] ≤3 self-mentions — 2 "PGN Gagas" (H2 #4 aside + Kesimpulan)
- [x] No unverifiable superlatives ("terbaik" appears only as reader's-best-choice, not a brand claim; "paling hijau" in scare quotes being questioned)
- [x] Energi-gas / CNG names + specs match product_matrix.md / dossier (Gasku, SPBG, CNG, LGV, Bi-Fuel, converter kit)
- [x] Closing uses a company_profile.md positioning line (anak usaha PGN / Subholding Gas — implied via "energi transisi" positioning + Gasku)
- [x] Soft website CTA as FINAL line ("jelajahi layanan Gasku dan mulai konsultasi di gagas.co.id") — consultative, not "beli sekarang"
- [x] Hub link as natural inline anchor in the lead ([Gasku]) — no BACA JUGA callout

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: `konversi-bbm-ke-bbg-penghematan-armada` (gasku-02, decision) and `apa-itu-gasku-bbg-kendaraan-cara-kerja-spbg` (gasku-01, informational); prior-batch `kapan-kendaraan-belum-cocok-pakai-bbg-gasku` (decision)
- Subtopic overlap (Jaccard estimate): ~0.15–0.20 — shared only "converter kit / Bi-Fuel / hemat range", here used as *comparison variables against LGV & EV* rather than the primary teaching
- Verdict: **distinct angle confirmed** — the only gasku article comparing BBG against other clean alternatives (LGV, EV) rather than against BBM; axis is capex-vs-opex + profil pemakaian + emisi lifecycle. angle_hash `sha1:c3f80b16e4d7` unique.

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran clean; `gasku-03.id.quality-input.json` written
- [x] AI-detector score < 0.30 — **0.04** (pass)
- [x] Paragraph burstiness CV ≥ 0.30 — **0.316** (above the tell line; script's softer 0.45 target noted as low-severity flag, not blocking)
- [x] Plagiarism: 8 candidates web-checked; no non-Gagas verbatim ≥20 words. Matches found were (a) corroborating facts we cite (16,3% EBT, 20% cleaner, RON 98) from authoritative sources, or (b) well-known energy definitions — all acceptable per workflow. Original prose ("Ketiga jalur ini sama-sama lebih bersih...") returned zero verbatim hits. Plagiarism score ~0.03.
