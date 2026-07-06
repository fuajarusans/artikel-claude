---
brief_id: "perusahaan-lng-indonesia-01"
editor_run_date: "2026-06-09"
recommendation: "approve"
overall_score: 9
---

# Editor QC Report — Apa Itu LNG dan Bedanya dengan CNG serta Gas Pipa

## Recommendation
**approve**

This draft ships. It is the strongest kind of definitional explainer for the brief's LNG-primary angle: LNG is the subject, and the comparison axis is correctly framed as *three modes of delivering the same gas bumi* (LNG dicairkan / CNG dikompresi / gas pipa kontinu), not three types of gas — which cleanly differentiates it from the committed `cng-indonesia-02` (CNG-primary, three gas types + HGBT + nilai kalori). Every PROTECT item holds: −162°C is always hedged "sekitar"; the critical-temperature physics (−82,6°C → why CHILLED, not just compressed) is explained correctly; the LNG-vs-CNG-vs-pipa table is present; PGN Gagas is framed strictly as a beyond-pipeline gas/CNG distributor *tengah mengembangkan* an LNG Hub — never as a "perusahaan LNG", producer, or regasifier — and is never conflated with PT PGN LNG Indonesia or Nusantara Regas. No kilang capacities, no "terbesar". GEO is satisfied (40–60-word extractable answer after each H2). Only one cosmetic polish was needed (an em-dash pair in the definition snippet). I made it in-place; nothing requires writer/strategist rework.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Concrete pain hook, varied rhythm, honest hedging on temperature variance, rhetorical-question transitions. No AI openers. |
| Factual & energi-gas / CNG / LNG accuracy | 9 | 5/5 spot-checked claims pass vs dossier + product_matrix; all dossier flags respected. |
| On-page SEO compliance | 9 | Meta title 43 / desc 156 / slug 39; 3 internal links; 2 ESDM citations; table + list + FAQ all present. |
| GEO extractability (§2a) | 9 | 40–60-word direct answer after each of the 5 H2s; one quotable point per paragraph; FAQ FAQPage-ready. |
| PGN Gagas framing discipline | 10 | Distributor-developing-LNG-Hub frame exactly per brief; 1 self-mention block; no superlatives; no entity conflation. |
| Internal linking | 9 | Hub in lead, CNG cousin mid-body, Gaslink cousin in close — all natural inline anchors, no callouts. |
| FAQ quality | 9 | 6 self-contained Q&As, 40–80 words each, each carries a number; risky 8th (kilang/PGN LNG) wisely dropped by writer. |
| Image-brief completeness | 9 | 2 entries ↔ 2 placeholders; all ID fields present; sourcing notes actively guard the LNG framing. |

## What I fixed (changelog)
- **Definition snippet (blockquote, line 42):** replaced the paired em-dashes around "komponen utamanya metana (CH4)" with comma punctuation — `"...gas bumi yang komponen utamanya metana (CH4), didinginkan hingga sekitar −162°C..."`. This (a) drops published-prose em-dash count to 0 (the benchmark `gaslink-01` and the sibling `cng-indonesia-02` both gloss without paired em-dashes), and (b) makes the snippet identical in phrasing to the FAQ's own "Apa itu LNG" answer, tightening consistency. Length impact: net −2 characters, word_count unchanged (1557).
- Copied the draft into `final/` and confirmed frontmatter `word_count: 1557` and `date_modified: 2026-06-09` are accurate.

No other edits were warranted — the draft arrived clean on facts, framing, structure, and rhythm.

## What I flagged (open issues)
- ⚠️ **LNG Hub operational status (dossier Flag #5).** The article says PGN Gagas "tengah mengembangkan LNG Hub di Bandung" (present-progressive / under-development) — the safe framing per the dossier, which has the hub still in construction as of Aug 2025. *Recommendation:* no change needed now; this wording stays accurate whether or not the hub commissions before publish. If a fresh gagas.co.id release confirms operation, a one-word update ("mengoperasikan") is optional, not required.
- ⚠️ **No body sentence explicitly states "PT PGN LNG Indonesia is a different entity."** The article avoids the trap by simply never claiming Gagas does likuifaksi/regasifikasi — so no factual error exists. *Recommendation:* acceptable as-is for this definitional piece; the distinction is sibling-article (LNG-04) territory. Do not add it here (would cost words and dilute the angle).

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — grep clean
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — grep clean (0 occurrences)
- [x] No "Penting untuk dicatat / dipahami bahwa" — grep clean
- [x] "Dengan demikian" not overused — 0 occurrences
- [x] Em-dash count ≤2 — **0 in published prose** after fix (remaining `—` are inside IMAGE_NN placeholders only, not body text)
- [x] Varied paragraph lengths — 1–6 sentence variation across sections; not all ~4 sentences
- [x] Not every H2 → 3-bullet list — only §5 uses bullets; #1/#2/#3 are prose, #4 is a table
- [x] No generic claims without numbers — −162°C, ~1/600, ~200–250 bar, ~1/250, −82,6°C, 24% (2050), 22,57% all sourced
- [x] No stacked hype adjectives (canggih/powerful/seamless/terdepan) — none
- [x] No service-dump paragraph — single consolidated anchor in the close

### B. Factual & energi-gas / CNG / LNG spot-check
| Claim | Source check | Verdict |
|---|---|---|
| LNG didinginkan "sekitar −162°C" → cair (always hedged) | dossier Core fact #1 + Flag #1 (must use "sekitar") — migas.esdm.go.id ✓ | pass |
| Volume menyusut ~1/600 | dossier Core fact #2 (Ditjen Migas + PGN LNG, "600x") ✓ | pass |
| Metana critical temperature ~−82,6°C → why chilled not just compressed | physics fact; consistent with sibling cng-indonesia-02 FAQ; methane Tc = −82,6°C ✓ | pass |
| CNG ~200–250 bar, ~1/250 (table + body) | dossier Core fact #4 (Ditjen Migas) + product_matrix ✓ | pass |
| Gas bumi 24% bauran energi 2050; ~22,57% diekspor sebagai LNG | dossier Core fact (ESDM "Dirjen Migas: Gas Bumi Seimbangkan...") ✓ | pass |

All five anchored in the dossier; no WebSearch needed (regulator-sourced facts already verified by the researcher and internally consistent with the committed CNG cluster).

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — **43 chars**, "LNG" at position 0
- [x] Meta description 140–160 — **156 chars**, "LNG" at start, 2 value props (bedanya CNG/gas pipa, tabel ringkas)
- [x] Slug ≤60, kebab-case, keyword — **`apa-itu-lng-bedanya-dengan-cng-gas-pipa`** (39, contains "lng")
- [x] H1 contains keyword — "Apa Itu LNG dan Bedanya dengan CNG serta Gas Pipa"
- [x] H2 count 4–5 — **5 body H2s** (+ FAQ + Kesimpulan); within range
- [x] ≥1 question-format H2 (#1, #3); ≥1 honest/counter-conventional H2 (#5)
- [x] Keyword in first 100 words — "LNG" in the opening sentence of the lead
- [x] Definition snippet near top (40–60 words) — blockquote, **55 words**, "LNG ... adalah ..."
- [x] ≥8 LSI terms — counted **10+**: Liquefied Natural Gas, gas alam cair, metana (CH4), likuifaksi, regasifikasi, kriogenik, beyond pipeline, moda penyaluran, ISO tank, critical temperature, cold chain
- [x] 3 internal links — `/perusahaan-lng-indonesia/` (lead) + `/perusahaan-cng-indonesia/` (mid) + `/gaslink/` (close)
- [x] ≥1 external authoritative citation — **2 ESDM** (migas.esdm + esdm.go.id)
- [x] FAQ 5–7 Q&As — **6**
- [x] 2 image placeholders — **2** (IMAGE_01, IMAGE_02)
- [x] ≥1 list + ≥1 table — bullet list (§5) + comparison table (#4)
- [x] Word count 1,200–1,600 — **1557** (verified by count_words.py; edit was length-neutral)

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — measured: #1 ~57 / #2 ~54 / #3 ~60 / #4 ~43 / #5 ~45 words (all within band)
- [x] Each body paragraph makes one independently quotable, verifiable point (e.g., "metana punya suhu kritis sekitar −82,6°C; di atas itu tak akan mencair berapa pun ditekan")
- [x] FAQ parseable for FAQPage schema; `date_modified: 2026-06-09` present in the meta block

### D. PGN Gagas framing discipline (product_matrix.md + style_guide §11)
- [x] PGN Gagas framed as gas/CNG distributor *menyalurkan ... tengah mengembangkan LNG Hub* — NOT producer/regasifier/"perusahaan LNG"
- [x] ≤3 self-mentions — **1 consolidated self-mention block** (closing) + soft CTA line; well under budget
- [x] No unverifiable superlatives — grep for terbesar/terbaik/nomor satu/satu-satunya = 0
- [x] LNG/CNG product names + specs match product_matrix.md / dossier (LNG Hub, ISO tank, Gaslink anchor; CNG 200–250 bar)
- [x] Closing uses a company_profile.md positioning line ("anak usaha PGN ... Subholding Gas Pertamina ... menyalurkan gas bumi ke pelanggan di luar jangkauan pipa lewat solusi CNG")
- [x] Soft website CTA present as the FINAL line, after the conclusion ("...kunjungi gagas.co.id"); soft tone, not "beli sekarang"
- [x] Hub link present as a natural inline anchor in the lead ("[LNG di Indonesia](...)"), descriptive — NOT a "BACA JUGA" callout
- **No conflation with PT PGN LNG Indonesia or PT Nusantara Regas anywhere in the body** (grep clean) — the article sidesteps the regasifier role entirely rather than mis-attributing it.

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: **none in the `perusahaan-lng-indonesia` cluster (this is the first).** Nearest cross-cluster: `cng-indonesia-02` ("CNG vs LNG vs LPG").
- Subtopic overlap (Jaccard estimate) vs `cng-indonesia-02`: **~0.20–0.25** (< 0.4).
- Verdict: **distinct angle confirmed.** cng-02 = CNG-primary, three *gas types*, axes asal/wujud/tekanan/nilai kalori + HGBT pricing, LPG a primary axis. lng-01 = LNG-primary, three *delivery modes*, axes why-chilled / logistics economics / regasifikasi, gas pipa a primary axis, LPG a single clarification. Shared facts (−162°C / ~1/600 / −82,6°C) are framed here as subject attributes, not comparison rows. No re-spin needed.

### F. Image-brief completeness (images.json)
- [x] JSON parses
- [x] One entry per `{IMAGE_NN}` placeholder in the body — **2 entries ↔ 2 placeholders** (IMAGE_01 hero, IMAGE_02 mid-body)
- [x] Each entry has alt_id (≤125 chars), caption_id, visual_direction, suggested_asset_type — all in Bahasa Indonesia (alt_id 01 ~110 chars, alt_id 02 ~120 chars)
- [x] Real-photo/site-asset requirement surfaced — **none required**; both are original infographic/diagram. IMAGE_02 sourcing_note explicitly forbids depicting Badak/Tangguh/FSRU Nusantara Regas specific facilities and mandates the "Diagram prinsip — bukan peta jalur nyata" label, actively protecting the LNG framing.
- (No generated PNGs to check — by design.)
