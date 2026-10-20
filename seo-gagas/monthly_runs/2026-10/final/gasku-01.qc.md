---
brief_id: "gasku-01"
editor_run_date: "2026-09-28"
recommendation: "approve"
overall_score: 9
ai_score: 0.04
plagiarism_score: 0.05
---

# Editor QC Report — Tabung CNG Gasku: Beda Type 1–4, Baja vs Komposit, Bobot dan Biaya

## Recommendation
**approve**

The draft was already strong: clean human voice, correct Type 1–4 taxonomy, and disciplined hedging that honors every dossier flag (relative-weight percentages attributed to composite-vendor sources, no fabricated Rupiah for tanks, the "Type 1" mapping explicitly framed as inference not a Gagas claim, PGN Gagas framed strictly as a BBG distributor via SPBG rather than a gas/tank producer). I made three in-place improvements — added the strong "berat tabung penumpang" PAA as a sixth FAQ, softened the closing so the 14-SPBG figure reads as a PGN-ecosystem number (per dossier hedge, not exclusively Gagas's), and synced the frontmatter word_count. The originality scan is clean (AI-detector 0.04, well under the 0.30 line; the sole flag is topic-driven vocabulary repetition). Plagiarism was assessed heuristic-only (no WebSearch this session); the distinctive passages read as original synthesis with no whole-paragraph lifts. Curator-ready.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Concrete pain-hook lead; varied paragraph/sentence lengths; 0 em-dashes; no banned openers/transitions. |
| Factual & energi-gas / CNG accuracy | 9 | 5/5 spot-checks pass vs dossier; ISO 11439:2013, ~200 bar / 260 bar, 15–20 yr AFDC, Permenperin 70/2012 all correct; hedges honored. |
| On-page SEO compliance | 9 | Meta title 44 chars, description 158, slug 42; keyword in H1/first-100/last-para; def snippet 52 words; list+table present. |
| GEO extractability (§2a) | 9 | 40–60-word direct answer after every H2; one quotable point per paragraph; FAQPage-ready; dateModified in meta. |
| PGN Gagas framing discipline | 9 | Distributor-via-SPBG framing; ~2–3 mentions; no superlatives; Type-1 mapping hedged; no invented tank price. |
| Internal linking | 9 | Hub (Gasku) in lead + 2 cousins (CNG, Gaslink) as natural inline anchors; no BACA JUGA. |
| FAQ quality | 9 | 6 Q&As, each 40–80 words, self-contained, sourced; mirrors captured PAA. |
| Originality (plagiarism + AI-detector) | 9 | AI 0.04 (pass); plagiarism heuristic-only, no verbatim ≥20-word non-Gagas hit apparent. |

## What I fixed (changelog)
- **Added a 6th FAQ** — "Berapa kira-kira berat tabung CNG untuk mobil penumpang?" (dossier-drafted, hedged: percentages attributed to composite-industry references, closes with "cek spesifikasi produk terpasang"). Hits the brief's 6-question target and captures a top PAA that was otherwise only in body prose.
- **Softened the closing SPBG framing** — changed "…melalui jaringan SPBG yang kini mencakup 14 SPBG di 7 provinsi (CNBC Indonesia, 2025)" to attribute the 14-SPBG figure to the *PGN ecosystem* ("Dalam ekosistem PGN, jaringan itu terus diperluas hingga mencakup 14 SPBG…"), honoring dossier flag #7 (the figure is a PGN-group number, not exclusively PGN Gagas's).
- **Frontmatter word_count** synced 1404 → 1482 (repo `count_words.py`) after the FAQ addition.

## What I flagged (open issues)
- ⚠️ **Plagiarism check ran heuristic-only (no WebSearch this session)** — *degraded mode*. AI-detector script ran normally; distinctive passages were assessed by pattern/originality rather than live web lookup. Passages read as original synthesis (no stock-definition copy, no whole-paragraph lift). *Recommendation*: if a WebSearch budget frees up before publish, spot-check candidates [0], [1], [7] from `gasku-01.id.quality-input.json`; not blocking.
- ⚠️ **vocab-repetition flag (low, 35.4% vs <30% target)** — driven by unavoidable domain nouns (*tabung*, *Type*, *CNG*, *komposit*, *baja*). Reducing them would hurt clarity/SEO; AI score is 0.04, so no action taken. *Recommendation*: accept.
- ⚠️ **External citations are inline text attributions** ("(ISO)", "(Kemenperin)", "(CNBC Indonesia, 2025)") + frontmatter URLs, not in-body hyperlinks. *Recommendation*: CMS/design should hyperlink from the frontmatter `external_citations` list on publish.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers
- [x] No "Selain itu" opening ≥2 consecutive paragraphs (0 occurrences)
- [x] No "Penting untuk dicatat / dipahami bahwa" (0)
- [x] "Dengan demikian" not overused (0)
- [x] Em-dash count ≤2 (actual: 0; en-dashes are range separators, correct convention)
- [x] Varied paragraph lengths (1-sentence "Tidak selalu." opener vs 5–6-sentence blocks)
- [x] Not every H2 → 3-bullet list (mix: prose, bullets, table, numbered list)
- [x] No generic claims without numbers (200/260 bar, 15–20 yr, ~30%, ~60–70%, 6-month transition, 14 SPBG)
- [x] No stacked hype adjectives ("seamless" used as glossed technical term, not hype)
- [x] No service-dump paragraph (single anchor at close)

### B. Factual & energi-gas / CNG spot-check
| Claim | Source check | Verdict |
|---|---|---|
| Tekanan kerja ~200 bar @ 15°C, isi maks ~260 bar (ISO 11439) | dossier ✓ (Core facts, confidence high) | pass |
| ISO 11439:2013 membagi tabung ke 4 kelas konstruksi | dossier ✓ (edisi terkini 2013) | pass |
| Type 4 ~60–70% lebih ringan / Type 3 ~30% vs Type 2 — *attributed to vendor* | dossier ✓ + flag #1 honored (footnote attributes to vendor) | pass |
| Umur pakai 15–20 tahun (AFDC/US DOE); no seragam RI re-test interval | dossier ✓ + flag #3 honored (hedged) | pass |
| Permenperin 70/2012 wajib SNI 7407/7408, ISO 11439, atau UN-ECE R110 via KAN; transisi 6 bln | dossier ✓ + flag #2 honored (SNI 7407/7408 cited together, scope not split) | pass |

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: 44 chars, "Gasku" at pos 12
- [x] Meta description 140–160 — actual: 158
- [x] Slug ≤60, kebab-case, keyword — actual: `tabung-cng-gasku-type-1-4-baja-vs-komposit` (42)
- [x] H1 contains keyword ("Gasku")
- [x] H2 count 4–5 — actual: 5 body H2s (+ FAQ + Kesimpulan)
- [x] ≥1 question-format H2 (#1, #2, #4); ≥1 honest/counter-conventional H2 (#5)
- [x] Keyword in first 100 words (Gasku ~word 85, in lead)
- [x] Definition snippet near top (52 words, blockquote after lead)
- [x] ≥8 LSI terms — counted 15+ (Type 1–4, baja, komposit, seamless, liner, carbon fiber, ISO 11439, SNI 7407/7408, UN-ECE R110, bobot, payload, water capacity, korosi, umur pakai, KAN, SPBG)
- [x] 3 internal links (1 hub + 2 cousins) — Gasku (hub, lead) / CNG (H2#1) / Gaslink (H2#4)
- [x] ≥1 external authoritative citation — actual: 4 (ISO, Kemenperin, AFDC, CNBC), inline attributions + frontmatter URLs
- [x] FAQ 5–7 Q&As — actual: 6
- [x] 2 image placeholders — actual: 2, each with alt-text
- [x] ≥1 list + ≥1 table — 1 bullet list, 1 numbered list, 1 comparison table
- [x] Word count 1,200–1,600 — actual: 1,482 (repo tool)

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 (checked H2 #1–#5, all ~50–55 words, answer-first)
- [x] Each body paragraph makes one independently quotable, verifiable point
- [x] FAQ parseable for FAQPage schema; `date_modified: 2026-09-28` present in meta

### D. PGN Gagas framing discipline (product_matrix.md + style_guide §11)
- [x] PGN Gagas framed as gas-energy provider/distributor (menyalurkan via SPBG), NOT producer of gas or tanks
- [x] ≤3 PGN Gagas self-mentions — actual: 2 named ("PGN Gagas" in FAQ + Kesimpulan) + Gasku brand as hub link/FAQ subject; within discipline
- [x] No unverifiable superlatives ("terbaik/nomor satu")
- [x] Energi-gas / CNG product names + specs match dossier/product_matrix (Gasku, seamless cylinder, 200 bar; tank Type specs framed as generic ISO/industry ranges, not Gagas specs)
- [x] Closing uses a company_profile.md positioning line ("anak usaha PGN … bagian dari Subholding Gas Pertamina")
- [x] Soft website CTA present as the FINAL line, after the conclusion (visit gagas.co.id; consultative)
- [x] Hub link present as natural inline anchor in the lead ("[Gasku]"), not a "BACA JUGA" callout

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: `gasku-converter-kit-bbg-venturi-vs-sequential` (2026-09-gasku-12) — subject = converter kit (venturi vs sequential); mentions "ISO 11439 tabung CNG" only as a standard reference. Also `gasku-matriks-kompatibilitas-kendaraan-bbg` (2026-08-gasku-07, "tabung CNG seamless" = one row) and `perawatan-kendaraan-bbg-gasku-jadwal-servis-uji-tabung` (2026-07-2-gasku-04, uji berkala — deliberately NOT re-covered here).
- Subtopic overlap (Jaccard estimate): ~0.15–0.20 (shared: ISO 11439, CNG, SNI 7407, sertifikasi; distinct/new: Type 1–4 material classification, baja vs komposit, bobot/biaya/umur-pakai trade-off, payload impact)
- Verdict: distinct angle confirmed — the tank itself is the subject here, not the kit or the maintenance schedule.

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran; `gasku-01.id.quality-input.json` written
- [x] AI-detector score < 0.30 — actual: **0.04** (verdict pass); 1 low flag: vocab-repetition 35.4% (topic-driven, domain nouns)
- [x] Paragraph burstiness CV ≥ 0.30 — no burstiness flag fired (paragraph-length variation adequate)
- [~] Plagiarism: **heuristic-only (no WebSearch this session)** — 8 candidate passages extracted; assessed by originality/pattern. Candidates read as original synthesis (e.g., "Type 1 baja paling murah sekaligus paling berat…", safety-vs-standard framing); [5][6] are Gagas/CNBC-cited content (ignorable). No stock-definition copy or whole-paragraph lift apparent. Heuristic plagiarism score: ~0.05. If WebSearch frees up, spot-check candidates [0]/[1]/[7].
