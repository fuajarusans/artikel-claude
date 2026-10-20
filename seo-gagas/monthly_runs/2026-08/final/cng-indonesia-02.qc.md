---
brief_id: "cng-indonesia-02"
editor_run_date: "2026-08-11"
recommendation: "approve"
overall_score: 9
ai_score: 0.04
plagiarism_score: 0.03
---

# Editor QC Report — CNG dan Kualitas Udara: Dampaknya bagi Kesehatan Kota

## Recommendation
**approve**

This is a strong, genuinely useful piece that hits the brief's hardest requirement: a balanced, honest treatment of CNG's air-quality benefits *and* their limits, without overselling. Every high-risk fact from the dossier's flags is handled correctly — no absolute g/km figures, the DPF-diesel counter-narrative is preserved intact, the SOx advantage is stated with attributed ranges (≤17 ppm gas vs 50–500 ppm solar), DLH DKI 2018 is the primary basis with polutan+tahun on every percentage, Transjakarta is framed as "~2019 data terakhir," the Gasku 25–35% claim is explicitly attributed to PGN, and the PM2.5→IQ/stunting link is kept associative ("dikaitkan," not causal). PGN Gagas framing is correct (menyalurkan/distributor, no superlatives, ≤3 mentions). Originality gate is clean: AI-detector 0.04, no non-Gagas verbatim ≥20 words (web checks returned only factual corroboration from primary sources, not text lifts). Fixes were light trims only; no structural rework needed.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Concrete pain-hook lead, honest hedging throughout, 0 em-dashes, no AI-opener patterns. Paragraph-length CV 0.313 (clears 0.30 bar; sentence burstiness strong at 0.771). |
| Factual & energi-gas / CNG accuracy | 9 | 5/5 spot-checks pass vs dossier; key stats independently corroborated (rendahemisi.jakarta.go.id, CATF). Careful attribution on every contested number. |
| On-page SEO compliance | 9 | Meta title 44 chars (keyword first), meta desc 152, slug 33, 3 internal links, FAQ 6, table + numbered + bulleted lists. |
| GEO extractability (§2a) | 9 | 40–60-word direct answer after each of 5 body H2s; one quotable point per paragraph; FAQPage-ready; `date_modified` added to meta block. |
| PGN Gagas framing discipline | 9 | Distributor/penyalur framing correct; "penopang bisnis hilir PGN" positioning line; 25–35% attributed to PGN; no superlatives. |
| Internal linking | 10 | 1 hub (natural inline anchor in lead) + 2 cousins (Gasku, Gaslink), descriptive anchors, no "BACA JUGA." |
| FAQ quality | 9 | 6 Q&As mirroring PAA, each 40–80 words, self-contained, each carries a number. |
| Originality (plagiarism + AI-detector) | 10 | AI 0.04; no verbatim plagiarism; distinctive passages original, facts trace to authoritative sources. |

## What I fixed (changelog)
- Trimmed the draft from ~1,603 → **1,573** (readable article words) to clear the 1,600 ceiling — light consolidations only, no facts/hedges/links removed:
  - Compressed the H2 #1 transition paragraph ("Di sinilah CNG masuk…") from 3 sentences to 1, since H2 #2 immediately elaborates the same SOx/PM point.
  - Merged a redundant topic sentence into the PM2.5-stunting paragraph (kept both the 9%-risk stat and the associative hedge sentence verbatim).
  - Tightened the H2 #3 NOx paragraph, the H2 #2 "two groups" close, the H2 #4 Gaslink aside, and the lead's opening sentence.
- Updated frontmatter `word_count` 1603 → **1573**; `target_word_count` 1400 → 1500 (aligns with the brief's target).
- Added `date_modified: "2026-08-11"` to the meta block (GEO §2a freshness signal).
- No factual, framing, or link edits were needed — the writer's draft was already accurate and well-hedged.

## What I flagged (open issues)
- ⚠️ Paragraph-burstiness CV = 0.313 — *low severity*. It clears the editor's ≥0.30 bar and the AI-detector reads 0.04 (very human), but paragraphs skew toward 3–4 sentences. *Recommendation*: none required for shipping; if a future refresh touches this piece, split one dense body paragraph or add a one-line aside to lift variance.
- ⚠️ Quality-check tokenizer reports word count 1613 vs the readable article count of 1573 — *informational*. The tool counts markdown table cells and standalone numeric tokens (≤17, 50–500, 47%, etc.) as words, inflating the figure. By any reader-facing measure (readable 1573; prose-only 1417) the article sits inside the 1,200–1,600 band. No action needed.
- ⚠️ Baku mutu PM2.5 numeric values (PP 22/2021 Lampiran VII) — the writer wisely did NOT quote the precise 55/15 µg/m³ figures (dossier flagged them as secondary-sourced), citing the regulation generally instead. Correct call; nothing to fix.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan / Tidak dapat dipungkiri" openers — grep clean
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — none present
- [x] No "Penting untuk dicatat / dipahami bahwa" — none
- [x] "Dengan demikian" not overused — absent
- [x] Em-dash count ≤2 — **actual: 0**
- [x] Varied paragraph lengths (1-sentence transitions mixed with 3–4-sentence blocks)
- [x] Not every H2 → 3-bullet list — mix of prose, table, numbered list, bullets
- [x] No generic claims without numbers — 15+ sourced figures inline
- [x] No stacked hype adjectives (canggih/powerful/terdepan) — none
- [x] No service-dump paragraph — single positioning line in Kesimpulan

### B. Factual & energi-gas / CNG spot-check
| Claim | Source check | Verdict |
|---|---|---|
| Transportasi = 67% PM2.5, 72% NOx, 96% CO Jakarta (DLH DKI, data 2018) | dossier ✓ (high) + rendahemisi.jakarta.go.id confirms 67,03/72,40/96,36 | pass |
| Sulfur gas ≤17 ppm vs solar 50–500 ppm → SOx mendekati nol | dossier ✓ (gas pipe spec; Dex 51 = 50 ppm; biosolar hist. ~500 ppm) | pass |
| CATF 2019: PM diesel-DPF ≈ CNG; per-dolar NOx/PM/HC 47%/23%/11% lebih efektif (diesel baru) | dossier ✓ + catf.us confirms figure | pass |
| WHO: ~4,2 juta kematian dini/tahun akibat polusi udara ambien (2019) | dossier ✓ (high) / WHO fact sheet | pass |
| "Emisi Gasku 25–35% lebih rendah" — attributed to PGN, not stated as independent fact | dossier ✓ (PGN statement) + article attributes "menurut PGN" | pass |

Bonus verifications: EV/67,5% batu bara (Mei 2025 ESDM) corroborated (~66–67% across sources); PM2.5→9% stunting / IQ kept associative per dossier flag. All pass.

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — **44 chars**, "CNG Indonesia" at pos 0
- [x] Meta description 140–160 — **152 chars**
- [x] Slug ≤60, kebab-case, keyword — **cng-kualitas-udara-kesehatan-kota (33)**
- [x] H1 contains keyword — "CNG dan Kualitas Udara…"
- [x] H2 count 4–5 — **5 body H2s** (+ FAQ + Kesimpulan)
- [x] ≥1 question-format H2 (#1, #2, #3); ≥1 honest/counter-conventional H2 (#5 "Jujur: CNG Lebih Bersih, tapi Bukan Nol")
- [x] Keyword in first 100 words — "beralih ke CNG", "CNG di Indonesia" in lead
- [x] Definition snippet near top — blockquote ~55 words after lead
- [x] ≥8 LSI terms — counted ~15 (kualitas udara kota, PM2.5, PM10, NOx, SOx, BBG, bus CNG, partikulat, CNG vs diesel, baku mutu udara ambien, sulfur, NH3, tailpipe, DPF, Transjakarta)
- [x] 3 internal links (1 hub + 2 cousins) — perusahaan-cng-indonesia (hub, lead) · gasku · gaslink
- [x] ≥1 external authoritative citation — 4 in meta block (DLH DKI, WHO, CATF, PP 22/2021); inline attributions to DLH DKI, KLHK, WHO, ICCT, CATF, ESDM
- [x] FAQ 5–7 Q&As — **6**
- [x] 2 image placeholders (up to 3) — **3** with alt-text
- [x] ≥1 list + ≥1 table — numbered (PM2.5 pathway) + bulleted (honest section) + comparison table
- [x] Word count 1,200–1,600 — **1,573 readable** (prose-only 1,417)

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each of the 5 major H2s (verified each opener)
- [x] Each body paragraph makes one independently quotable, verifiable point (one claim + sourced fact)
- [x] FAQ parseable for FAQPage schema; `date_modified: 2026-08-11` present in meta block

### D. PGN Gagas framing discipline (product_matrix.md + style_guide §11)
- [x] Framed as gas-energy provider/distributor ("menyalurkan gas bumi… lewat Gasku dan Gaslink"; "penopang bisnis hilir PGN") — NOT a producer
- [x] ≤3 PGN Gagas self-mentions — **3** (H2 #4 Gaslink aside · Kesimpulan positioning line · soft CTA); the Gasku/Gaslink inline anchors are the mandated cousin links, and the FAQ "PGN pun menyatakan…" is a factual attribution
- [x] No unverifiable superlatives ("terbaik/nomor satu") — none
- [x] Energi-gas / CNG product names + specs match product_matrix.md / dossier — Gasku (transport BBG), Gaslink (industri/komersial CNG) used correctly
- [x] Closing uses a company_profile.md positioning line — "Sebagai penopang bisnis hilir PGN…"
- [x] Soft website CTA present as the FINAL line — "…jelajahi solusinya di gagas.co.id." (consultative, not "beli sekarang")
- [x] Hub link is a natural inline anchor in the lead ("CNG di Indonesia") — no "BACA JUGA" callout

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: `manfaat-cng-untuk-industri-dan-lingkungan` (2026-07-cng-indonesia-03)
- Subtopic overlap (Jaccard estimate): **~0.22** (shared concept only "emisi lebih rendah"; this piece owns local pollutants NOx/SOx/PM + public-health + transport/tailpipe, none of which cng-03's industrial-CO2/MMBTU angle covers)
- Prior July siblings (cng-01 "apa itu CNG", cng-02 "CNG vs LNG vs LPG", cng-04 "beyond pipeline", cng-05 "transisi energi") do not cover air-quality/health.
- Verdict: **distinct angle confirmed** (angle_hash sha1:84580967d16d unique)

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran clean (EXIT=0); `cng-indonesia-02.id.quality-input.json` written
- [x] AI-detector score **0.04** (< 0.30) — verdict pass; re-run after trims held at 0.04
- [x] Paragraph burstiness CV **0.313** (≥ 0.30 editor bar; sentence burstiness 0.771)
- [x] Plagiarism: 8 distinctive passages web-checked (seasonal 32–57% + KLHK 44%, EV/67,5% batu bara, WHO 4,2 juta, NOx 12–40%, CATF 47/23/11%, definition snippet, health H2, honest H2) — **no non-Gagas verbatim hit ≥20 words**. Search returns were factual corroboration from primary sources (rendahemisi.jakarta.go.id, catf.us, ESDM coverage), not text lifts. Plagiarism score **0.03**.

## The shipping question
If this ran on gagas.co.id tomorrow, a senior energy practitioner *and* a skeptical industrial buyer would both find it credible: it gives CNG its real due (SOx/PM), refuses to oversell (DPF-diesel parity, NH3/PM2.5 secondary, Transjakarta's retreat, EV's coal-grid caveat), attributes every number, and never claims PGN Gagas does something it doesn't. WEBARQ Promote would be proud of it. **Ship it.**
