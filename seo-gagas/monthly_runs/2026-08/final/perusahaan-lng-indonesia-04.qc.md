---
brief_id: "perusahaan-lng-indonesia-04"
editor_run_date: "2026-08-11"
recommendation: "approve"
overall_score: 9
ai_score: 0.00
plagiarism_score: 0.05
---

# Editor QC Report — Regasifikasi LNG di Lokasi: Cara Kerja Vaporizer dan SRU

## Recommendation
**approve**

This is a genuinely strong, curator-ready draft. It occupies a real technical gap in the LNG cluster (customer-site SRU / vaporizer selection and sizing — a how-to that none of the 15 prior LNG articles cover) and teaches it vendor-neutrally before earning a soft close. Every critical hedge and framing guard from the task brief holds: the market specs (~400–1.500 Nm³/jam, ~5–17 bar, ~20.000–26.000 L) are explicitly labeled "spesifikasi umum pasar dari vendor, bukan standar teknik tetap"; the unsupported "ORV ~70% terminal" figure is absent; ORV is correctly restricted to coastal facilities (air laut >5°C, not inland); PGN Gagas is framed only as a beyond-pipeline penyalur that mendampingi desain teknik + pemasangan sistem satelit at the customer site (the dossier-confirmed role), never as producer/FSRU/likuifaksi; and there is no "pionir/pemimpin pasar," no ISO 45001 over-extension, and no power-gen/marine project overreach. The heuristic scanner returns an AI-detector score of 0.00 (0 flags, paragraph burstiness CV 0.456) and no verbatim web hits surfaced on any distinctive passage. I applied one register polish (colloquial "jeblok" → "turun drastis"). Ships proudly.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | 0 em-dashes, no AI openers, no "Selain itu"/"Dengan demikian", strong rhythm variation |
| Factual & energi-gas / CNG accuracy | 9 | All 5 spot-checked claims trace to dossier; market specs hedged; year-labeled ESDM data |
| On-page SEO compliance | 8 | All counts in band; exact primary keyword not in meta title/desc (cluster-angle choice — noted) |
| GEO extractability (§2a) | 9 | 40–60-word direct answer after every H2; one quotable point per paragraph; FAQ FAQPage-ready |
| PGN Gagas framing discipline | 10 | Penyalur/pendamping framing exactly right; 2 named mentions + CTA; no superlatives |
| Internal linking | 9 | 3 links (hub in lead + CNG + Gaslink cousins), all natural inline anchors |
| FAQ quality | 9 | 5 Q&As, each 40–80 words, self-contained, no body duplication |
| Originality (plagiarism + AI-detector) | 10 | AI 0.00; no non-Gagas verbatim ≥20 words; facts independently corroborated |

## What I fixed (changelog)
- Register polish: "kapasitasnya jeblok saat beban puncak" → "kapasitasnya turun drastis saat beban puncak" (§Kesalahan) — "jeblok" is colloquial and clashed with the professional B2B register (and with "anjlok" used three sentences later).
- Synced frontmatter `word_count` 1444 → 1445 to reflect the edit (pipeline `count_words.py`).

## What I flagged (open issues)
- ⚠️ Exact primary keyword "Perusahaan LNG Indonesia" does not appear verbatim in meta title, meta description, or slug (they use "regasifikasi LNG" / "LNG"). *Recommendation*: accept as-is. This is a deliberate cluster-angle title for a technical how-to; forcing the commercial phrase would read awkwardly and (per the task) the title must not be stretched past 60 chars. The keyword IS present in the H1 (via "LNG" synonym), the first 100 words (hub anchor "perusahaan LNG di Indonesia"), and the closing paragraph — consistent with the 15 prior approved articles in this cluster. No action needed.
- ⚠️ `dateModified` is not an explicit frontmatter field; freshness is carried by `publish_month: "2026-08"`. *Recommendation*: CMS should set `dateModified` on publish (matches prior cluster handling).

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan / Tidak dapat dipungkiri" openers — grep: none
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — grep: 0 occurrences
- [x] No "Penting untuk dicatat / dipahami bahwa" — none
- [x] "Dengan demikian" not overused — grep: 0
- [x] Em-dash count ≤2 — actual: 0 (temperatures use the minus sign −; ranges use en-dash, both fine)
- [x] Varied paragraph lengths — 1-sentence answers, 3–6-sentence blocks, blockquote, table, numbered + bulleted lists
- [x] Not every H2 → 3-bullet list — mix of prose + numbered steps + table + bullets
- [x] No generic claims without numbers — −160°C, >5°C, 400–1.500 Nm³/jam, 5–17 bar, 20.000–26.000 L, six-step process
- [x] No stacked hype adjectives — none
- [x] No service-dump paragraph — single relevant anchor (Gaslink) + one closing positioning line

### B. Factual & energi-gas / CNG spot-check
| Claim | Source check | Verdict |
|---|---|---|
| LNG disimpan cair pada suhu sekitar −160°C | dossier ✓ ("sekitar -160°C hingga -162°C"; safe range advised) | pass |
| ORV butuh air laut >5°C, tak realistis untuk pabrik inland | dossier ✓ + product_matrix ✓ | pass |
| Vaporizer ~400–1.500 Nm³/jam @ ~20°C = "spesifikasi umum pasar" | dossier flag ✓ (hedge mandated); labeled in draft | pass |
| ISO tank ~20.000–26.000 L, ~5–17 bar = market spec | dossier flag ✓ (5–17 bar per flag/task); labeled "bukan standar teknik tetap" | pass |
| ESDM: LNG skala kecil + LNG untuk truk = prioritas (data ~2022–2023) | dossier ✓ (year-label mandated); labeled in draft | pass |
| SRU = istilah resmi PGN LNG (virtual pipeline) | dossier ✓ (PGN LNG first-party) | pass |

No fabricated specs, dates, or product names. WebSearch corroborated the ISO-tank capacity band and the CNG-no-cryogenic-vaporizer principle from independent sources (facts robust; wording original).

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: 43 chars; core entity "LNG" at char 14 (exact phrase absent — see flag)
- [x] Meta description 140–160 — actual: 155
- [x] Slug ≤60, kebab-case, keyword — actual: `regasifikasi-lng-vaporizer-sru` (30)
- [x] H1 contains keyword — "Regasifikasi LNG di Lokasi…" (LNG synonym)
- [x] H2 count 4–5 — actual: 5 body H2 (+ FAQ + Kesimpulan)
- [x] ≥1 question-format H2 (2: "Bagaimana LNG Diubah…", "Bagaimana Menentukan Kapasitas…"); ≥1 honest ("Kesalahan yang Sering Terjadi: Undersizing dan Frost pada AAV")
- [x] Keyword in first 100 words — "perusahaan LNG di Indonesia" (lead hub anchor)
- [x] Definition snippet near top (40–60 words) — blockquote ~55 words
- [x] ≥8 LSI terms — counted 14 (regasifikasi, vaporizer, SRU, AAV, ORV, SCV, water bath, PRS, Nm³/jam, virtual pipeline, tangki kriogenik, ISO tank, metering, odorisasi)
- [x] 3 internal links (1 hub + 2 cousins) — perusahaan-lng-indonesia (lead) + perusahaan-cng-indonesia + gaslink
- [x] ≥1 external authoritative citation — actual: 2 (PGN LNG, Kementerian ESDM)
- [x] FAQ 5–7 Q&As — actual: 5
- [x] 2 image placeholders (up to 3) — actual: 3 with alt-text
- [x] ≥1 list + ≥1 table — numbered (6 steps) + bulleted (4 pengaman) + vaporizer comparison table
- [x] Word count 1,200–1,600 — actual: 1445 (count_words.py)

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — verified for all 5 H2s (44–48 words each)
- [x] Each body paragraph makes one independently quotable, verifiable point
- [x] FAQ parseable for FAQPage schema; freshness via `publish_month: 2026-08` (see flag re: dateModified)

### D. PGN Gagas framing discipline (product_matrix.md + style_guide §11)
- [x] Framed as gas-energy provider/partner — "penyalur gas bumi beyond-pipeline … mendampingi desain teknik dan pemasangan sistem satelit"; conclusion positioning line; NOT producer/FSRU/likuifaksi
- [x] ≤3 PGN Gagas self-mentions — actual: 2 named ("PGN Gagas") + the gagas.co.id CTA
- [x] No unverifiable superlatives — grep: no "terbaik/terbesar/nomor satu/satu-satunya/pionir/pemimpin pasar"
- [x] Energi-gas / CNG/LNG names + specs match product_matrix.md / dossier — vaporizer types, SRU, virtual pipeline all correct; ISO 45001 not extended to LNG
- [x] Closing uses a company_profile.md positioning line — "Sebagai anak usaha PGN … bagian dari Subholding Gas Pertamina …"
- [x] Soft website CTA is the FINAL line, after Kesimpulan — "…kunjungi gagas.co.id." (consultative, not "beli sekarang")
- [x] Hub link is a natural inline anchor in the lead ("perusahaan LNG di Indonesia") — NOT a "BACA JUGA" callout

### E. Anti-cannibalization spot check
- Closest prior articles for this keyword: `rantai-pasok-lng-likuifaksi-pengguna-akhir` (regasifikasi at terminal/FSRU as one macro node) and `lng-untuk-industri-kapan-lebih-cocok-dari-cng` (decision angle; mentions vaporizer only in passing). Cluster now holds 15 prior LNG articles.
- Subtopic overlap (Jaccard estimate): ~0.05 — only the token "regasifikasi/vaporizer" overlaps; the entire how-to (AAV/ORV/SCV/water bath selection, Nm³/jam sizing, PRS, frost/undersizing, footprint at customer site) is new. Cryogenic-hazard depth is correctly deferred to `keselamatan-lng-bahaya-kriogenik-penanganan`.
- Verdict: distinct angle confirmed.

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran; `perusahaan-lng-indonesia-04.id.quality-input.json` written
- [x] AI-detector score < 0.30 — actual: 0.00 (verdict pass, 0 flags)
- [x] Paragraph burstiness CV ≥ 0.30 — actual: 0.456 (sentence burstiness 0.879; top30 vocab share 0.302)
- [x] Plagiarism: distinctive passages web-checked (4 of 8 most-distinctive prose candidates; remainder were definitional or markdown-heavy query noise); no non-Gagas verbatim hit ≥20 words. Facts independently corroborated by third-party sources — plagiarism score: 0.05
