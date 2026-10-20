---
brief_id: "perusahaan-lng-indonesia-05"
editor_run_date: "2026-08-11"
recommendation: "approve"
overall_score: 9
ai_score: 0.04
plagiarism_score: 0.03
---

# Editor QC Report — Kendala Pasokan LNG dan Cara Mengatasinya di Lapangan

## Recommendation
**approve**

A genuinely strong troubleshooting piece that reads like a practitioner leveling with a utilities supervisor, not an AI synthesis. Every one of the brief's critical LNG-framing guards holds: PGN Gagas is framed as a downstream distributor that *develops the Bandung LNG Hub with PT Nusantara Regas* (not a producer/FSRU operator), there is no "pionir/pemimpin pasar" language, ISO 45001 is not misused as an LNG credential, and every hedged number (BOG %/day as FSRU-scale, 0,7 barg MARVS as a concept, ~100-day holding time as indicative) is properly qualified. The Bandung throughput figure (~15.000 MMBTU/bulan) is correctly omitted. Anti-AI scan is clean (no em-dashes, no filler openers, varied rhythm), the on-page and GEO checklists pass, and the originality scan clears comfortably (AI 0.04; no non-Gagas verbatim hit ≥20 words). I applied one micro-polish (varied a repeated "Di sinilah" opener) and updated the word count. Curator-ready.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | No AI tells; varied paragraph lengths (8–84 words); practitioner asides ("Bagian ini jarang ditulis kompetitor, padahal…") |
| Factual & energi-gas / CNG accuracy | 9 | All FSRU/marine-scale figures hedged; mechanisms match dossier; regulator/ITS/ANTARA citations accurate |
| On-page SEO compliance | 9 | Meta title 51, desc 158, slug 34; 3 internal + 3 external links; table + numbered + bulleted lists; 2 image placeholders |
| GEO extractability (§2a) | 9 | 40–60-word answer after every major H2; definition snippet 53w near top; FAQPage-parseable |
| PGN Gagas framing discipline | 10 | Downstream distributor framing exact; 2 self-mentions; no superlatives; no ISO 45001 misuse |
| Internal linking | 9 | Hub anchor in lead, 2 cousins (CNG, Gaslink) placed where topically relevant |
| FAQ quality | 8 | 5 standalone Q&As, 40–80 words each; solid (could reach 6–7 but 5 meets bar without padding) |
| Originality (plagiarism + AI-detector) | 9 | AI 0.04 (pass); no verbatim web hits on distinctive passages |

## What I fixed (changelog)
- Polished a repeated opener: H2 #5's "Di sinilah pertanyaan tentang penyedia…" → "Di titik inilah…" to remove the echo with the lead's "…dan di sinilah keandalan… diuji" (minor rhythm improvement).
- Updated frontmatter `word_count` 1457 → 1458 to reflect the edit.
- No factual, framing, or structural changes required — the draft already respected every guard.

## What I flagged (open issues)
- ⚠️ Paragraph word-count CV = 0.363 — *recommendation*: none blocking. Above the 0.30 AI-tell floor; below the 0.45 ideal only because most body paragraphs cluster around 40–48 words. Rhythm is still varied by short 8- and 18-word paragraphs and an 84-word lead. No action needed.
- ⚠️ Meta description at 158/160 chars — *recommendation*: none; it sits inside the 140–160 band with keyword-first framing. Flagged only so a future CMS trim stays above 140.
- ⚠️ `dateModified` not an explicit frontmatter field — *recommendation*: CMS should populate `dateModified` from `publish_month: 2026-08` at publish for GEO freshness.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan / Tidak dapat dipungkiri" openers — 0 found
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — 0 found
- [x] No "Penting untuk dicatat / dipahami bahwa" — 0 found
- [x] "Dengan demikian" not overused — 0 found
- [x] Em-dash count ≤2 — actual: 0 (only 1 en-dash inside a table, "masuk–keluar")
- [x] Varied paragraph lengths — 8/18/29/40–48/64/65/72/84-word paragraphs mixed
- [x] Not every H2 → 3-bullet list — mix of prose, numbered list, bulleted list, table
- [x] No generic claims without numbers — −162°C, 0,24%/hari, 0,7 barg, 20×, ~100 hari, 170.000 m³, 2020, Agustus 2025
- [x] No stacked hype adjectives — none
- [x] No service-dump paragraph — single anchor in the close

### B. Factual & energi-gas / CNG spot-check
| Claim | Source check | Verdict |
|---|---|---|
| BOG ~0,24%/hari framed as FSRU 170.000 m³ example (ITS 2020), not a customer number | dossier ✓ + ITS study (repository.its.ac.id/80451) ✓; web-checked (0.237%/day in source, our wording original & hedged) | pass |
| MARVS ~0,7 barg is marine-carrier figure, "konsep bukan angka baku" | dossier flag ✓ (Wärtsilä/IGF marine scope); explicitly hedged in-text | pass |
| Holding time ISO tank "hingga sekitar 100 hari" = indicative, not a promise | dossier ✓ (low-med confidence, vendor/trade figure); hedged as "figur indikatif… bukan janji layanan" | pass |
| PGN Gagas develops Bandung LNG Hub with PT Nusantara Regas since Aug-2025 groundbreaking; downstream distributor | dossier ✓ + ANTARA antaranews.com/berita/5016865 ✓ | pass |
| Gas-quality authority sits with Ditjen Migas ESDM (no invented Wobbe tolerance %) | dossier ✓ + migas.esdm.go.id ✓; no tolerance number asserted | pass |

Framing guard verified: no "pionir/pemimpin pasar", no FSRU/liquefaction/producer claim, no ISO 45001 cited for LNG, Bandung ~15.000 MMBTU throughput omitted.

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: 51 chars / keyword at pos 0
- [x] Meta description 140–160 — actual: 158
- [x] Slug ≤60, kebab-case, keyword — actual: `kendala-pasokan-lng-cara-mengatasi` (34)
- [x] H1 contains keyword — "Kendala Pasokan LNG…"; full phrase "perusahaan LNG di Indonesia" in first 100 words
- [x] H2 count 4–7 — actual: 6 body H2s (+ FAQ + Kesimpulan)
- [x] ≥1 question-format H2 (#1/#2/#3); ≥1 honest/counter-conventional H2 (#6)
- [x] Keyword in first 100 words — yes (lead + hub anchor)
- [x] Definition snippet near top (40–60 words) — BOG blockquote, 53 words
- [x] ≥8 LSI terms — counted 13+ (BOG, venting, MARVS, vaporizer, frost/icing, AAV, Wobbe Index, rollover, holding time, ISO tank, reliquefaction, cold-chain, kriogenik)
- [x] 3 internal links — perusahaan-lng-indonesia (hub, lead), perusahaan-cng-indonesia (CNG), gaslink (Gaslink)
- [x] ≥1 external authoritative citation — actual: 3 (ITS, ESDM Ditjen Migas, ANTARA)
- [x] FAQ 5–7 Q&As — actual: 5
- [x] 2 image placeholders — {IMAGE_01}, {IMAGE_02}, each with alt-text
- [x] ≥1 list + ≥1 table — numbered (3 BOG controls) + bulleted (kontinuitas) + diagnostic table
- [x] Word count 1,200–1,600 — actual: ~1,458 (frontmatter); scanner tokenizer 1,502

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — verified for all 6 (≈40–49 words each)
- [x] Each body paragraph makes one independently quotable, verifiable point
- [x] FAQ parseable for FAQPage schema; freshness via `publish_month: 2026-08` (CMS to set `dateModified`)

### D. PGN Gagas framing discipline (product_matrix.md + style_guide §11)
- [x] Framed as gas-energy provider/downstream distributor that develops an LNG Hub — NOT a producer/FSRU
- [x] ≤3 self-mentions — actual: 2 explicit "PGN Gagas" (Kesimpulan + CTA); one vendor-neutral aside + Gaslink cousin link
- [x] No unverifiable superlatives — none
- [x] Energi-gas / LNG names + specs match product_matrix.md / dossier
- [x] Closing uses a company_profile.md positioning line (beyond-pipeline hilir + layanan 24 jam & perhitungan pemakaian akurat)
- [x] Soft website CTA is the FINAL line, after Kesimpulan (invites visit to gagas.co.id; consultative, not "beli sekarang")
- [x] Hub link is a natural inline anchor in the lead ("pasokan LNG di Indonesia") — no "BACA JUGA" callout

### E. Anti-cannibalization spot check
- Closest prior articles for this keyword: `keselamatan-lng-bahaya-kriogenik-penanganan`, `rantai-pasok-lng-likuifaksi-pengguna-akhir`, `memilih-penyedia-lng-indonesia-kriteria`, `lng-untuk-industri-kapan-lebih-cocok-dari-cng`
- Subtopic overlap (Jaccard estimate): ~0.15 (only "BOG" token overlaps; troubleshooting/uptime framing is new to the cluster; safety article covers cryogenic hazard, not operational reliability)
- Verdict: distinct angle confirmed — first troubleshooting (gejala→penyebab→tindakan) piece in the cluster

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran; `perusahaan-lng-indonesia-05.id.quality-input.json` written
- [x] AI-detector score < 0.30 — actual: 0.04 (verdict pass); single low-severity flag (paragraph-low-variance CV 0.363)
- [x] Paragraph burstiness CV ≥ 0.30 — actual: 0.363 (sentence CV 1.148; top-30 vocab share 0.264)
- [x] Plagiarism: distinctive passages web-checked (BOG/MARVS figures, lead hook, honest-section sentence); no non-Gagas verbatim hit ≥20 words — plagiarism score 0.03. Underlying ITS BOG figure appears in the cited source but our sentence wording is original and explicitly attributed/hedged.
