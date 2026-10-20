---
brief_id: "perusahaan-lng-indonesia-02"
editor_run_date: "2026-09-21"
recommendation: "approve"
overall_score: 9
ai_score: 0.04
plagiarism_score: 0.05
---

# Editor QC Report — Gas dari Perusahaan LNG Indonesia: Apakah Peralatan Pabrik Kompatibel? (Wobbe Index)

## Recommendation
**approve**

The draft arrived close to shippable and clears every quality bar after three minor in-place fixes. The anti-AI scan is clean (no filler openers, no em-dashes, no hype adjectives, no forbidden superlatives). Every factual and gas-technical claim traces to the dossier, and — most importantly for this strict-framing keyword — the hedges the researcher demanded are all honored: SNI 8414:2025 is cited by name and date without inventing its numeric limits; the 39–45 / 45,5–55 MJ/Nm³ ranges are explicitly labeled European illustrative (not Indonesian); the "2–3% inert" figure is flagged as non-Indonesian; and PGN Gagas is framed strictly as an LNG-Hub operator that *menyalurkan/menyerahkan* gas, never a producer, market leader, or "pionir". The "market leader" trap found on gagas.co.id's own page is correctly not reproduced. Originality is strong (AI-detector 0.04; plagiarism heuristic-only pass — WebSearch budget exhausted). Angle is distinct from the existing LNG cluster. Curator-ready.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Concrete pain-hook lead, varied rhythm, honest hedging ("kecenderungan, bukan aturan pasti"). No tells. |
| Factual & energi-gas / CNG accuracy | 9 | All spot-checks pass vs dossier; every risky number correctly labeled/hedged. |
| On-page SEO compliance | 9 | Meta title 54 chars, meta desc ~159, slug 46 chars, 5 H2s, 3 internal + 2 external links. |
| GEO extractability (§2a) | 9 | 40–60-word answer after each major H2 (47/48/47/50/45 words); definition snippet 54 words; date_modified added. |
| PGN Gagas framing discipline | 10 | Operator/penyalur framing only; 2 self-mentions + CTA; no superlative; market-leader trap avoided. |
| Internal linking | 9 | Hub in lead + 2 cousins (CNG, Gaslink), all natural inline; matches brief + cross-link map. |
| FAQ quality | 8 | 5 well-formed Q&As (44–52 words each), FAQPage-ready; could stretch to 6–7. |
| Originality (plagiarism + AI-detector) | 9 | AI 0.04; no distinctive verbatim-risk passage (heuristic). |

## What I fixed (changelog)
- **Lead fragment repaired**: "Alatnya tidak rusak; karakter gasnya yang berbeda." → "Alatnya tidak rusak; yang berbeda adalah karakter gasnya." (the original was a grammatically incomplete clause).
- **Added `date_modified: "2026-09-21"` to the meta block** — the draft had no freshness field; GEO §2a requires a `dateModified`/freshness note in the meta block.
- **Corrected frontmatter `word_count` 1387 → 1428** to match the canonical scanner count (still comfortably within 1.200–1.600).

## What I flagged (open issues)
- ⚠️ **FAQ count = 5** (within the 5–7 range, so passing). *Recommendation*: optional enhancement — a 6th Q&A on supply-side adjustment ("Bisakah penyedia menyesuaikan kualitas gas agar cocok dengan alat saya?") is available in the dossier and would capture one more PAA; the content is already covered in body §5, so this is non-blocking.
- ⚠️ **2 image placeholders** (min met). *Recommendation*: the dossier offered a 3rd concept ("Gas Pipa vs Gas dari LNG vs LPG" comparison cards) that would pair well with the table section; optional, non-blocking.
- ⚠️ **Plagiarism scan ran heuristic-only (no WebSearch — budget exhausted)**, per standing degraded-mode policy. *Recommendation*: none required; candidate passages are definitional or bespoke (see §F). No web verification possible this run.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — grep clean; lead opens on a concrete plant-floor pain
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — none present
- [x] No "Penting untuk dicatat / dipahami bahwa" — none
- [x] "Dengan demikian" not overused — absent
- [x] Em-dash count ≤2 — zero em-dashes (only en-dashes inside numeric ranges/table, which are correct)
- [x] Varied paragraph lengths — 1-clause fragments, 3–4-sentence blocks, list-led paras (paragraph burstiness CV 0.413)
- [x] Not every H2 → 3-bullet list — mix of prose, numbered checklist, comparison table, bullet triad
- [x] No generic claims without numbers — ISO editions, 18 titik, 39–55 MJ/Nm³, MN=100, 2–3% inert, 6-step checklist
- [x] No stacked hype adjectives — none (canggih/powerful/terdepan/seamless all absent)
- [x] No service-dump paragraph — single anchor aside + closing positioning line

### B. Factual & energi-gas / CNG spot-check
| Claim | Source check | Verdict |
|---|---|---|
| Wobbe Index = HHV / √SG; metode diformalkan ISO 6976:2016; ISO 13686:2013 pakai WI sebagai parameter mutu | dossier ✓ (Core facts, ISO entries) | pass |
| SNI 8414:2025 terbit 12 Maret 2025, menggantikan edisi 2017; angka batas TIDAK dikarang | dossier ✓ (BSN) + flag honored (no invented numeric limits) | pass |
| Rentang 39–45 / 45,5–55 MJ/Nm³ = contoh klasifikasi Eropa, bukan spesifikasi Indonesia | dossier ✓ + flag honored (labeled illustrative, not SNI) | pass |
| BPH Migas memantau nilai kalor, berat jenis, gas inert di 18 titik pipa pengangkutan | dossier ✓ (BPH Migas) | pass |
| Methane Number: metana murni = 100, turun seiring naiknya etana/propana; ~2–3% inert = angka luar Indonesia | dossier ✓ (Clarke Energy) + flag honored (labeled non-Indonesia) | pass |
| PGN Gagas = operator LNG Hub yang menyalurkan gas beyond-pipeline (bukan produsen/likuifaksi) | product_matrix.md ✓ + dossier ✓ + framing guard honored | pass |

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: 54 chars / keyword at char 1–24
- [x] Meta description 140–160 — actual: ~159
- [x] Slug ≤60, kebab-case, keyword — actual: `perusahaan-lng-indonesia-wobbe-index-peralatan` (46)
- [x] H1 contains keyword — "Gas dari Perusahaan LNG Indonesia: ..."
- [x] H2 count 4–5 — actual: 5 content H2s (+ FAQ + Kesimpulan)
- [x] ≥1 question-format H2 (#2) ; ≥1 honest/counter-conventional H2 (#5 "Kapan Anda BELUM Perlu Retrofit")
- [x] Keyword in first 100 words — natural variant "perusahaan LNG di Indonesia" in lead (exact match in H1/title/meta)
- [x] Definition snippet near top (40–60 words) — 54-word "Ringkas:" blockquote
- [x] ≥8 LSI terms — counted: 10+ (Wobbe Index, interchangeability, HHV/nilai kalor, rich/lean, Methane Number, air-fuel ratio, derating, flame lift, sooting, retrofit, spec sheet)
- [x] 3 internal links (1 hub + 2 cousins) — hub `/perusahaan-lng-indonesia/` (lead), `/perusahaan-cng-indonesia/`, `/gaslink/`
- [x] ≥1 external authoritative citation — actual: 2 (BSN/SNI, BPH Migas)
- [x] FAQ 5–7 Q&As — actual: 5
- [x] 2 image placeholders (up to 3) — actual: 2, each with alt-text
- [x] ≥1 list + ≥1 table — numbered checklist + bullet triad + comparison table
- [x] Word count 1,200–1,600 — actual: 1428

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — 47 / 48 / 47 / 50 / 45 words respectively
- [x] Each body paragraph makes one independently quotable, verifiable point — claims are granular and sourced
- [x] FAQ parseable for FAQPage schema; freshness noted — `date_modified: 2026-09-21` added to meta block

### D. PGN Gagas framing discipline (product_matrix.md + style_guide §11)
- [x] Framed as gas-energy provider/operator (menyalurkan/menyerahkan/mendampingi), NOT producer/liquefaction/FSRU
- [x] ≤3 PGN Gagas self-mentions — actual: 2 (mid-article aside in §3 + closing positioning line) + soft website CTA
- [x] No unverifiable superlatives — "market leader/pionir/terbesar/pemimpin pasar" all absent (gagas.co.id's own "market leader" phrase correctly NOT reproduced)
- [x] Energi-gas / CNG product names + specs match product_matrix.md / dossier — LNG Hub, Gaslink, CNG all accurate; ISO 45001 (CNG-scoped) not misapplied to LNG
- [x] Closing uses a company_profile.md positioning line — "anak usaha PGN ... bagian dari Subholding Gas Pertamina ... menghadirkan gas bumi ke lokasi di luar jaringan pipa"
- [x] Soft website CTA present as the FINAL line — "...jelajahi solusinya di gagas.co.id." (consultative, not "beli sekarang")
- [x] Hub link present as natural inline anchor in the lead — "[pasokan LNG di Indonesia]" (no BACA JUGA callout)

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: `regasifikasi-lng-vaporizer-sru` (2026-08, #14) — hardware of regasification (vaporizer/SRU), stops at *producing* gas. Also checked #12 (LNG vs LPG makanan), #15 (kendala pasokan), 2026-07 cluster (apa itu LNG, LNG Hub, rantai pasok, memilih penyedia).
- Subtopic overlap (Jaccard estimate): ~0.10 — this article begins *after* gas is produced (Wobbe Index, interchangeability, Methane Number, burner retuning, retrofit checklist); none of those subtopics appears in prior LNG cluster records.
- Verdict: distinct angle confirmed.

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran; `perusahaan-lng-indonesia-02.id.quality-input.json` written
- [x] AI-detector score < 0.30 — actual: **0.04** (verdict pass; one low-severity `paragraph-low-variance` flag, CV 0.413 vs script target 0.45)
- [x] Paragraph burstiness CV ≥ 0.30 — actual: **0.413** (sentence burstiness 0.731; top-30 vocab share 0.289 — all healthy)
- [x] Plagiarism: 8 candidates assessed **heuristic-only (no WebSearch — budget exhausted)** — plagiarism score ~0.05
  - Candidates 4/5/6 (Wobbe Index = HHV/√SG; "Wobbe Index adalah nilai kalor..."; "Methane Number ... metana murni bernilai 100") are universal definitions/formulas → explicitly exempt.
  - Candidates 2/3 are H2 headings + generic sentences → not distinctive lifts.
  - Candidates 1/7/8 are bespoke Indonesian prose built from dossier facts (ISO citation phrasing, spec-sheet advice) → no verbatim-lift risk; candidate 8 is intentional checklist/FAQ internal repetition, not external.
  - No non-Gagas verbatim passage ≥20 words identified heuristically. Degraded mode acceptable per standing policy.
