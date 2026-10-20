---
brief_id: "gasku-02"
editor_run_date: "2026-08-11"
recommendation: "approve"
overall_score: 9
ai_score: 0.04
plagiarism_score: 0.02
---

# Editor QC Report — Performa & Emisi Gasku (BBG) vs Bensin: Data Tenaga, Konsumsi, Emisi

## Recommendation
**approve**

This is a strong, curator-ready draft — arguably the model for this cluster's "rekonsiliasi angka" angle. It does exactly what the brief and dossier demanded: it treats the conflicting emission claims (20% vs 90% vs 95%) as an editorial problem to solve rather than a number to cherry-pick, and every enforced hedge is present and correctly framed. The primary emission figure is the defensible 25–35% CO2 (Swara Patra 2015 + EIA cross-check); CO/HC/NOx real-world is honestly bounded at 7–30% with the NOx-can-be-equal-or-higher nuance intact; the 95% claim is explicitly dropped as unsourced; the 90% claim is attributed to KPBB (2008 test, Euro-2), not universalized; power loss is 10–20% with the 12,4%/23,7% dynotest framed as a single study; 38,7 km/LSP is kept motor-specific; and no SPBG counts leak in. Anti-AI scan is clean (0 em-dashes, no filler openers), the AI-detector scores 0.04, and web plagiarism checks found no verbatim lifts (only shared public facts with original phrasing). I applied two minor polish edits in-place; nothing needed writer/strategist rework.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | 0 em-dash, no AI openers, varied rhythm; sentence burstiness 0.85, paragraph CV 0.415 |
| Factual & energi-gas / CNG accuracy | 10 | All spot-checked claims trace to dossier; 38,7 km/LSP + EIA CO2 independently corroborated via web |
| On-page SEO compliance | 9 | Meta title 52/keyword@17, desc 154, slug 30; 4 body H2s; keyword in first 100 words + last para |
| GEO extractability (§2a) | 9 | 40–60-word direct answer after each H2; one quotable point/paragraph; date_modified added |
| PGN Gagas framing discipline | 10 | "menyalurkan gas bumi" (provider/distributor), 2 self-mentions, no superlatives |
| Internal linking | 9 | 3 links: Gasku (lead) + CNG + Gaslink, all natural inline anchors |
| FAQ quality | 9 | 6 Q&As, each 40–80 words, one fact/answer, FAQPage-parseable |
| Originality (plagiarism + AI-detector) | 10 | ai 0.04, no non-Gagas verbatim ≥20 words across 6 checked passages |

## What I fixed (changelog)
- Added `date_modified: "2026-08-11"` to the meta block — satisfies GEO §2a freshness note and matches the 2026-08 batch convention (cng-indonesia-02, perusahaan-cng-indonesia-05 also carry it).
- Made the "Nilai kalor" table row unit-consistent: CNG cell now reads `9.000–11.000 kkal/kg (~38–47 MJ/kg)` so it compares apples-to-apples with the bensin cell (`~44–46 MJ/kg`). The MJ/kg figure is from the dossier (restored, not invented); the per-volume energy-density point remains taught separately in the volumetric-efficiency row and H2 #2.
- Updated frontmatter `word_count` 1530 → 1582 to match the tool-verified scan (still ≤1600).

## What I flagged (open issues)
- ⚠️ Minor structural deviation from the brief skeleton (not a blocker) — the writer folded the brief's 5th body H2 ("Apakah BBG Membuat Mesin Lebih Awet atau Justru Aus?") into the FAQ ("Apakah menggunakan BBG bisa merusak mesin kendaraan?") rather than a standalone section. *Recommendation*: accept as-is. The valve-seat/oli content is fully covered and correctly hedged; a 5th body H2 would push length toward/over 1,600 with no new fact. 4 body H2s satisfies the 4–5 range.
- ⚠️ Paragraph burstiness CV = 0.415 sits just under the tool's *ideal* ≥0.45 (a [low]-severity flag), though it clears our ≥0.30 floor comfortably and the AI-detector is 0.04. *Recommendation*: no action; there is a mild lean toward 3-sentence paragraphs, but it is broken up by short declaratives, lists, and the table. Not an AI tell here.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — grep: none
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — grep: 0 occurrences
- [x] No "Penting untuk dicatat / dipahami bahwa" — grep: none
- [x] "Dengan demikian" not overused — grep: 0 occurrences
- [x] Em-dash count ≤2 — actual: **0** (ranges use en-dash `–`, correct)
- [x] Varied paragraph lengths — mix of 1-sentence ("Umumnya 10–20%.") and 3–4-sentence blocks
- [x] Not every H2 → 3-bullet list — H2s lead with prose; only one bulleted + one numbered list total
- [x] No generic claims without numbers — every claim carries a sourced figure
- [x] No stacked hype adjectives — none; framing is concrete
- [x] No service-dump paragraph — single Gasku aside + closing positioning line

### B. Factual & energi-gas / CNG spot-check
| Claim | Source check | Verdict |
|---|---|---|
| Emisi karbon 25–35% lebih rendah (primary) | dossier ✓ (Swara Patra/PPSDM Migas ESDM 2015 + EIA ~30% cross-check) | pass |
| CO/HC/NOx real-world turun 7–30%; NOx bisa setara/lebih tinggi | dossier ✓ (PEMS peer-reviewed, PubMed 27219504); study existence web-confirmed | pass |
| Tenaga turun 10–20%; dynotest −12,4% daya/−23,7% torsi (studi tunggal) | dossier ✓ (IDN Times + Subekti); framed as single study | pass |
| 38,7 km/LSP, uji PGN 2023, 3 sepeda motor (rentang 37–41,6) | dossier ✓ + web-corroborated (CNBC/Kompas/Merdeka/Republika); kept motor-specific | pass |
| 90% = klaim KPBB, uji 2008/Euro-2 (historis, bukan universal) | dossier ✓ + web-confirmed (ANTARA/Tempo/Suara: Ahmad Safrudin, KPBB) | pass |
| RON gas alam ≈120 / nilai kalor 9.000–11.000 kkal/kg | dossier ✓ (Kementerian ESDM/Ditjen Migas 2013) | pass |

No invented specs, product names, or dates. PGN Gagas framed as distributor/penyalur, not producer. No SPBG counts present.

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: **52** chars / "Gasku" at pos ~17
- [x] Meta description 140–160 — actual: **154**
- [x] Slug ≤60, kebab-case, keyword — actual: `gasku-performa-emisi-vs-bensin` (30)
- [x] H1 contains keyword — "Performa & Emisi Gasku (BBG) vs Bensin…"
- [x] H2 count 4–5 — actual: **4 body** (+ FAQ + Kesimpulan)
- [x] ≥1 question-format H2 (#2, #4); ≥1 honest/counter-conventional H2 (#4)
- [x] Keyword in first 100 words — "Gasku" ~word 55 of lead
- [x] Definition snippet near top — "Ringkasnya" blockquote, ~55 words
- [x] ≥8 LSI terms — counted **15+** (efisiensi volumetrik, methane number, RON, nilai kalor, LSP, CO/HC/NOx/CO2, converter kit, valve seat recession, well-to-wheel, dynotest, port-injection, …)
- [x] 3 internal links (1 hub + 2 cousins) — gasku/ (lead), perusahaan-cng-indonesia/, gaslink/
- [x] ≥1 external authoritative citation — actual: **2 inline** (ESDM, Swara Patra) + 2 more in meta block (EIA, PubMed)
- [x] FAQ 5–7 Q&As — actual: **6**
- [x] 2 image placeholders (up to 3) — actual: **3** ({IMAGE_01/02/03})
- [x] ≥1 list + ≥1 table — 1 bulleted + 1 numbered list + 1 comparison table
- [x] Word count 1,200–1,600 — actual: **1,582** (tool scan)

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — verified for #1–#4 (each opens with a standalone answer before elaboration)
- [x] Each body paragraph makes one independently quotable, verifiable point
- [x] FAQ parseable for FAQPage schema; `dateModified` noted in meta block (`date_modified: 2026-08-11`)

### D. PGN Gagas framing discipline (product_matrix.md + style_guide §11)
- [x] Framed as gas-energy provider/distributor — "PGN Gagas menyalurkan gas bumi… lewat layanan BBG Gasku"; no "memproduksi"
- [x] ≤3 self-mentions — actual: **2** explicit "PGN Gagas" (H2 #1 aside + Kesimpulan); CTA references Gasku/gagas.co.id
- [x] No unverifiable superlatives — none ("terbaik/nomor satu" absent)
- [x] Product names + specs match matrix/dossier — Gasku RON >120, ~200 bar, 25–35% ✓
- [x] Closing uses a company_profile positioning line — "anak usaha PGN… bagian Subholding Gas Pertamina… beyond-pipeline"
- [x] Soft website CTA is the FINAL line — "…telusuri layanan Gasku di gagas.co.id." (consultative, not "beli sekarang")
- [x] Hub link is a natural inline anchor in the lead — `[Gasku]` woven into sentence, not a "BACA JUGA" callout

### E. Anti-cannibalization spot check
- Closest prior article: `gasku-06` (bbg-gasku-vs-lgv-vs-mobil-listrik, comparison) and `gasku-03` (touches "penurunan tenaga" as a negation subtopic).
- Subtopic overlap (Jaccard estimate): **~0.2** (shared terms "emisi lebih rendah" / "penurunan tenaga"; core — efisiensi volumetrik, methane number, per-polutan reconciliation, jarak per LSP data — is net-new).
- Verdict: **distinct angle confirmed** — this is the only data-per-parameter + claim-reconciliation article in the cluster.

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran; `gasku-02.id.quality-input.json` written
- [x] AI-detector score < 0.30 — actual: **0.04** (verdict: pass)
- [x] Paragraph burstiness CV ≥ 0.30 — actual: **0.415** (sentence burstiness 0.85; one [low] flag: below tool ideal 0.45, not actionable)
- [x] Plagiarism: 6 distinctive passages web-checked; **no non-Gagas verbatim hit ≥20 words** — plagiarism score **0.02**. All candidates (definition snippet, dynotest sentence, 38,7 km/LSP, PEMS 7–30%, KPBB 90%, EIA CO2) returned only shared public facts/numbers in original phrasing; the 38,7 km/LSP fact and EIA/EPA CO2 coefficients were independently corroborated, confirming accuracy rather than copying.
