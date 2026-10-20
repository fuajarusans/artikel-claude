---
brief_id: "cng-indonesia-02"
editor_run_date: "2026-09-28"
recommendation: "approve"
overall_score: 9
ai_score: 0.04
plagiarism_score: 0.05
---

# Editor QC Report — CNG untuk Pembangkit Listrik di Daerah Tanpa Pipa Gas

## Recommendation
**approve**

The draft arrived unusually clean and I approve it with only light editorial fixes. It nails the brief's angle (CNG/gas as fuel for power generation and remote-area electrification — an *application* article, distinct from the cng-04 distribution-mechanics piece), holds a human, honest-hedging voice with zero AI tells, and every number traces to the dossier. Most importantly for this INFORMASIONAL brief, it honors all critical hedges: PGN Gagas is framed strictly as a downstream CNG distributor that *supplies gas* (never electricity, never a producer), every PLN/PLN EPI/Pertamina/ESDM program is attributed to its real owner, and the article explicitly states the cited projects are "dijalankan PLN bersama Pertamina, bukan oleh Gagas." The writer also correctly declined to state the unverified "~40% dual-fuel savings" figure the dossier flagged. Originality is strong (AI-detector 0.04; no verifiable plagiarism). Remaining flags are low-impact and noted below; none blocks shipping.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Varied paragraph/sentence rhythm; honest caveats; 0 em-dashes in body prose; no AI-opener/transition tells |
| Factual & energi-gas / CNG accuracy | 9 | All 5 spot-checks pass vs dossier; hedges (year labels, "estimasi", LNG≠CNG) preserved; unverified 40% correctly omitted |
| On-page SEO compliance | 9 | Title 55/desc 157/slug 40 all in-band; 5 body H2 + FAQ + Kesimpulan; keyword in lead |
| GEO extractability (§2a) | 9 | 40–60-word direct answer after each H2; one quotable point/paragraph; date_modified added |
| PGN Gagas framing discipline | 10 | Distributor/provider framing; gas-not-listrik; projects attributed to PLN/Pertamina; explicit non-ownership disclaimer |
| Internal linking | 10 | 3 natural inline anchors (hub in lead + 2 cousins); no BACA JUGA |
| FAQ quality | 9 | 6 Q&As, each 40–80 words, PAA-aligned, FAQPage-ready |
| Originality (plagiarism + AI-detector) | 9 | AI 0.04 pass; plagiarism heuristic-only (no WebSearch) — distinctive fact passages, original phrasing |

## What I fixed (changelog)
- **Meta title** strengthened to carry the full primary keyword: "CNG untuk Pembangkit Listrik Daerah Tanpa Pipa Gas" (50) → "CNG Indonesia untuk Pembangkit Listrik Daerah Terpencil" (55 chars) — keyword "CNG Indonesia" now in first 13 chars, still ≤60.
- **Added 1 FAQ** — "Apa bedanya pembangkit diesel dan pembangkit gas?" (from the brief's PAA / dossier draft), bringing the FAQ from 5 → 6 Q&As; rewrote the dossier's drafted answer to drop its em-dash and keep body prose em-dash-free.
- **Added `date_modified: "2026-09-28"`** freshness field to the meta block (GEO §2a requirement).
- **Updated `word_count`** 1421 → 1483 (canonical `count_words.py` recount after the FAQ addition).

## What I flagged (open issues)
- ⚠️ **"detikFinance, 2017" year label** on the Rp1.100 vs Rp1.800/kWh comparison and the Maluku-Papua PLTMG rationale — the year is inferred (the dossier did not explicitly confirm the publication year and even carries a "(data 2019)" note on a different figure from the same article). Low impact: the label honestly signals this is older data, not a current tariff. *Recommendation:* confirm the detikFinance publication year before publish; if it can't be confirmed, drop the "2017" and keep "(detikFinance, data lama)".
- ⚠️ **Plagiarism check is heuristic-only (no WebSearch per run constraint).** The 8 candidate passages are all fact-dense sentences (program figures, the Jayanti Baruna shipment, the 2013 Batam fact) in the writer's own paraphrase — not verbatim lifts. Risk assessed low, but not web-verified. *Recommendation:* if a pre-publish web scan is available, run the 8 quoted queries once.
- ⚠️ **Image placeholders carry no explicit alt-text field** (the rich concept doubles as the design brief). Minor. *Recommendation:* design team derives Bahasa Indonesia alt-text from each concept.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers
- [x] No "Selain itu" opening ≥2 consecutive paragraphs (none present)
- [x] No "Penting untuk dicatat / dipahami bahwa"
- [x] "Dengan demikian" not overused (0 uses)
- [x] Em-dash count ≤2 — **0 in body prose** (the 2 "—" are separators inside `{IMAGE_01}`/`{IMAGE_02}` design-brief captions, not published prose)
- [x] Varied paragraph lengths (1-sentence GEO answers mixed with 4–5-sentence blocks; CV=0.36)
- [x] Not every H2 → 3-bullet list (mix of prose lead, one bullet list, one numbered list, one table)
- [x] No generic claims without numbers (6+ specific figures throughout)
- [x] No stacked hype adjectives (canggih/powerful/terdepan/seamless)
- [x] No service-dump paragraph (single relevant anchor only)

### B. Factual & energi-gas / CNG spot-check
| Claim | Source check | Verdict |
|---|---|---|
| PLN memakai CNG untuk pembangkit sejak 2013, mulai Batam 6 MW | dossier ✓ (ESDM "CNG solusi pembangkit wilayah remote") | pass |
| Rasio elektrifikasi 99,83% Triwulan I 2026, naik dari 91,16% (2016) | dossier ✓ (Antara, 4 Jun 2026) | pass |
| Kepmen ESDM 13 K/13/MEM/2020: 52 lokasi, ~1.697 MW, 167 BBTUD; update ESDM Jan 2024: 27 PLTMG ~2.269 MW | dossier ✓ (JDIH ESDM + ESDM 25 Jan 2024) — years/sources labeled | pass |
| PLTMG Luwuk 40 MW, hindari ~75.000 ton CO2/tahun (Kompas, 2025) | dossier ✓ (Kompas, 10 Jan 2025) | pass |
| Kapal CNG Jayanti Baruna, muatan perdana 23,38 MMSCF Gresik→Lombok Peaker, Sep 2024 | dossier ✓ (HaloNTB/PLN UIP Nusra) | pass |
| (Framing) dual-fuel study — "~40%" figure NOT stated; only "BPP gas lebih ekonomis" | dossier hedge honored ✓ (unverified 40% correctly omitted) | pass |

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: **55 chars / "CNG Indonesia" at pos 0**
- [x] Meta description 140–160 — actual: **157**
- [x] Slug ≤60, kebab-case, keyword — actual: **`cng-pembangkit-listrik-daerah-tanpa-pipa` (40)**
- [x] H1 contains keyword — "CNG ... Pembangkit Listrik ... Pipa Gas"
- [x] H2 count 4–5 — actual: **5 body H2s** (+ FAQ + Kesimpulan)
- [x] ≥1 question-format H2 (#1, #2, #4); ≥1 honest/counter-conventional H2 (#5)
- [x] Keyword in first 100 words (hub anchor "CNG di Indonesia" + "Indonesia" in sentence 1)
- [x] Definition snippet near top — "Ringkasnya:" blockquote, ~56 words
- [x] ≥8 LSI terms — counted: **~18** (PLTMG, PLTD, PLTG, PLTGU, dual-fuel/PLTDG, gasifikasi, konversi diesel-gas, rasio elektrifikasi, virtual pipeline, GTM, kapal CNG, HSD, MFO, LNG, BBTUD, gas engine, beyond-pipeline, MW)
- [x] 3 internal links (1 hub + 2 cousins) — destinations: perusahaan-cng-indonesia (lead), gaslink (H2 #3), perusahaan-lng-indonesia (H2 #5)
- [x] ≥1 external authoritative citation — actual: **5 in meta block** (ESDM ×2, Kompas, Katadata/IEEFA, Antara) + inline detikFinance/Liputan6/Ditjen Migas
- [x] FAQ 5–7 Q&As — actual: **6**
- [x] 2 image placeholders (up to 3) — actual: **3**
- [x] ≥1 list + ≥1 table — 1 bullet list, 1 numbered list, 1 comparison table
- [x] Word count 1,200–1,600 — actual: **1,483**

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 (all 5 H2s open with a standalone answer before elaboration)
- [x] Each body paragraph makes one independently quotable, verifiable point (numbers + inline attribution)
- [x] FAQ parseable for FAQPage schema; `date_modified: 2026-09-28` present in meta block

### D. PGN Gagas framing discipline (product_matrix.md + style_guide §11)
- [x] PGN Gagas framed as gas-energy provider/distributor (menyalurkan/menghadirkan gas bumi beyond-pipeline) — never producing gas or electricity
- [x] ≤3 PGN Gagas self-mentions — actual: **2 substantive** (mid-article aside in H2 #3 + positioning line in Kesimpulan) + the website CTA; within budget
- [x] No unverifiable superlatives ("terbaik/nomor satu/terbesar") — the "kapal terbesar" superlative from the dossier was NOT carried into the body
- [x] Energi-gas / CNG product names + specs match product_matrix.md / dossier (no invented specs; 200–250 bar, GTM, virtual pipeline all dossier-backed)
- [x] Closing uses a company_profile.md-style positioning line (anak usaha PGN / Subholding Gas Pertamina, sisi hilir)
- [x] Soft website CTA present as the FINAL line, after Kesimpulan (invites visit to gagas.co.id; consultative)
- [x] Hub link is a natural inline anchor in the lead ("CNG di Indonesia") — NOT a BACA JUGA callout
- [x] **Critical hedge honored:** all PLN/PLN EPI/Pertamina/ESDM programs attributed explicitly; article states projects are "dijalankan PLN bersama Pertamina, bukan oleh Gagas"; Gagas positioned as technical *analogi moda*, not project participant

### E. Anti-cannibalization spot check
- Closest prior article for this cluster: **`cng-beyond-pipeline-gas-bumi-tanpa-pipa` (2026-07-cng-indonesia-04)** — distribution *mechanics* (Mother Station → GTM → kapal), with PLN Batam/Gresik/Lombok as example destinations only.
- Subtopic overlap (Jaccard estimate): **~0.20** — shared context (beyond-pipeline / CNG vessel / island geography) but distinct core (this article: PLTMG, PLTD/dual-fuel, gasifikasi program, rasio elektrifikasi, IEEFA economics). Other cluster siblings (cng-vs-listrik-ev = personal vehicles; cng-vs-pipa-gas-ekonomi = infrastructure TCO) are on different axes.
- Verdict: **distinct angle confirmed** (application-to-electricity vs mechanics-of-distribution). No re-spin needed. Checked vs index.json + by_keyword/cng-indonesia listing; no WebSearch (per run constraint).

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1) — heuristic-only (no WebSearch)
- [x] Script ran; `cng-indonesia-02.id.quality-input.json` written
- [x] AI-detector score < 0.30 — actual: **0.04** (verdict: pass; 1 low-severity flag only)
- [x] Paragraph burstiness CV ≥ 0.30 — actual: **0.361** (above the 0.30 tell threshold; script target ≥0.45 noted but AI score of 0.04 confirms no synthetic uniformity)
- [~] Plagiarism: **heuristic-only (no WebSearch per run constraint).** 8 candidate passages extracted (top candidate_score 34) — all fact-dense sentences (program figures, Jayanti Baruna shipment, 2013 Batam fact) in the writer's own paraphrase; no verbatim non-Gagas lift is *verifiable* without web, and none reads as a lift of a well-known definition or competitor copy. Plagiarism score: **0.05** (low, heuristic estimate). Degraded mode noted; recommend a one-time web scan of the 8 queries pre-publish if available.
