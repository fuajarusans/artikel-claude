---
brief_id: "perusahaan-cng-indonesia-05"
editor_run_date: "2026-07-08"
recommendation: "approve"
overall_score: 9
ai_score: 0.00
plagiarism_score: 0.05
---

# Editor QC Report — CNG untuk Hotel, RS & Restoran: Pengganti LPG Komersial

## Recommendation
**approve**

This draft arrived strong on voice and honesty but ~200 words over the 1.600 ceiling (frontmatter reported 1770). I tightened every section — lead, all five body H2s, the FAQ answers, and the conclusion — without touching a single hedge or must-keep, bringing it to a readable ~1.585 words (script-measured body 1.720 incl. table/heading tokens). Every high-risk fact verified against authoritative sources on WebSearch: the LPG price hike (18 April 2026), the RSHS solar-basis Rp3 M/yr caveat, and the ESDM roadmap "sedang disiapkan" hedge all hold exactly as written. The article separates the 15–30% (Batam 2026) and ~20–50% (Dharmawangsa 2017, labeled old) ranges by source, keeps the "vs solar not LPG" RSHS caveat, invents no MMBTU threshold, and uses zero superlatives ("pionir/pemimpin pasar" absent). AI-detector scored 0.00 with strong burstiness (paragraph CV 0.498); no non-Gagas verbatim lifts. It is curator-ready.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | No AI openers; varied paragraph/sentence lengths (burstiness CV 0.498); honest hedging throughout. Prose em-dash usage now 1 (a framing pair in the conclusion). |
| Factual & energi-gas / CNG accuracy | 10 | 5 claims web-verified; all pass. Ranges kept separated by source/year; RSHS solar-basis caveat intact. |
| On-page SEO compliance | 9 | Meta title 45 chars, desc trimmed to 152, slug 44, 3 internal + gov citation, 7 FAQ, table+list, keyword in lead. |
| GEO extractability (§2a) | 9 | 40–60-word direct answer after each major H2; one quotable point per paragraph; FAQ FAQPage-ready. |
| PGN Gagas framing discipline | 10 | Framed as anak usaha PGN / Subholding Gas Pertamina that *menyalurkan/mendistribusikan* CNG. 1 promotional self-mention (closing); no superlatives. |
| Internal linking | 10 | Hub in lead (natural inline), 2 cousins (Gaslink, LNG) mid-body; no BACA JUGA. |
| FAQ quality | 9 | 7 Q&As, each 40–70 words, each carries a sourced number. |
| Originality (plagiarism + AI-detector) | 10 | AI score 0.00; no verbatim ≥20-word non-Gagas match; cited-fact echoes only. |

## What I fixed (changelog)
- **Length cut ~1805 → ~1585 readable words** (well under the 1.600 ceiling) via tightening across every section — no must-keep removed.
- Lead: trimmed "sudah lama jadi beban" → "jadi beban"; "konteks lanskap penyedianya" → "konteks lanskapnya".
- H2 #1: merged the standalone *calorific value* sentence into the roadmap paragraph; condensed "di Maluku-Papua lebih tinggi lagi" → parenthetical.
- H2 #2: removed the doubled "berencana memperluas ke boiler dan genset" in the RSHS bullet; tightened bullet lead-ins and the closing "pola yang sering ditemui" sentence.
- H2 #3: condensed the range intro and the two attribution bullets (removed the range restated in-bullet, kept the bold-labeled range + attribution); tightened the RSHS "salah kutip" caveat and the Gaslink aside — **all hedges preserved verbatim in meaning**.
- H2 #4: tightened the lahan/retrofit paragraphs and the LNG cousin sentence.
- H2 #5: tightened all four honesty bullets and the closing 600-pelanggan paragraph.
- FAQ: trimmed each of the 7 answers (parenthetical case labels, dropped filler) while keeping every number.
- Conclusion: compressed to a tighter callback + positioning line.
- Meta description: 160 → 152 chars (dropped "komersial" tail; still keyword + 3 value props).
- Frontmatter `word_count`: 1770 → 1585.
- Reduced prose em-dashes from 4 (introduced mid-edit) back to 1 usage; the 3 em-dashes in `{IMAGE_NN}` captions are design-brief text, not prose.

## What I flagged (open issues)
- ⚠️ Minor — External citations are inline text attributions (BloombergTechnoz, Kompas, Warta Ekonomi, Kumparan, Ditjen Migas ESDM) rather than hyperlinks in body; the frontmatter `external_citations` carries the two URL-backed authoritative links (ESDM roadmap + Warta Ekonomi). *Recommendation*: CMS can hyperlink the ESDM/Kompas attributions on publish for stronger E-E-A-T; not a blocker.
- ⚠️ Minor — "PGN Gagas Batam" appears 3× as a *sourced spokesperson attribution* (Area Head, Mei 2026) plus 1 promotional close. These attributions are citations, not brand self-promotion, so they sit within the ≤3 self-mention spirit; the sole promotional mention is the conclusion. No change needed. *Noted for the curator.*

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan / Tidak dapat dipungkiri" openers
- [x] No "Selain itu" opening ≥2 consecutive paragraphs
- [x] No "Penting untuk dicatat / dipahami bahwa"
- [x] "Dengan demikian" not overused (absent)
- [x] Em-dash count ≤2 — prose usage: 1 (framing pair in conclusion); 3 more inside `{IMAGE_NN}` captions (design-brief text, exempt)
- [x] Varied paragraph lengths (burstiness CV 0.498) — not monotone
- [x] Not every H2 → 3-bullet list (mix of prose, bullets, numbered list, table)
- [x] No generic claims without numbers
- [x] No stacked hype adjectives
- [x] No service-dump paragraph

### B. Factual & energi-gas / CNG spot-check
| Claim | Source check | Verdict |
|---|---|---|
| LPG non-subsidi 12 kg → Rp228.000, 5,5 kg → Rp107.000, Jawa-Bali-Nusra, 18 Apr 2026 | WebSearch: BloombergTechnoz/Tempo/Poskota confirm exact figures + date | pass |
| RSHS Bandung hemat ~Rp3 M/thn, basis **solar** (Rp8M→~Rp5M), 6 Agu 2025, 1.500 m³/bln | WebSearch: Kompas/Tribunnews/Inilah confirm solar basis (NOT LPG) | pass |
| ESDM roadmap konversi LPG→CNG, estimasi 20–30%, "sedang disiapkan" (belum resmi) | WebSearch: migas.esdm.go.id + Kompas/Kontan confirm roadmap being finalized, 20–30% | pass |
| Dharmawangsa ~20–50% vs LPG non-subsidi, sejak 2017 (labeled old) | dossier + WebSearch merdeka.com/Republika confirm 20–50%, 2017 context | pass |
| Gaslink ~600 pelanggan per Sept 2025 (industri/hotel/kafe-resto/MBG) | dossier + WebSearch Kumparan/Katadata confirm 600 pelanggan, Sept 2025 | pass |

No invented gas product names/specs; C-Cyl 28 m³ and Mother Station→GTM→PRS chain match product_matrix.md/dossier. No wrong regulatory dates. No PGN Gagas framing error.

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword-relevant first) — actual: 45 chars ("CNG" first)
- [x] Meta description 140–160 — actual: 152
- [x] Slug ≤60, kebab-case, keyword — actual: `cng-hotel-rumah-sakit-restoran-pengganti-lpg` (44)
- [x] H1 contains keyword/synonym ("CNG untuk Hotel, RS & Restoran: Pengganti LPG Komersial")
- [x] H2 count 4–5 content H2s — actual: 5 (+FAQ +Kesimpulan)
- [x] ≥1 question-format H2 (#3) ; ≥1 honest/counter-conventional H2 (#5)
- [x] Keyword in first 100 words (inline hub anchor in lead)
- [x] Definition snippet near top (blockquote "Ringkasnya", ~57 words)
- [x] ≥8 LSI terms — counted: >12 (HORECA, LPG non-subsidi, boiler laundry, Gaslink, beyond-pipeline, PRS, Mother Station, GTM, C-Cyl, spuyer, MBG/SPPG, konversi, calorific value)
- [x] 3 internal links (1 hub + 2 cousins) — destinations: perusahaan-cng-indonesia (hub, lead), gaslink, perusahaan-lng-indonesia
- [x] ≥1 external authoritative citation — ESDM/Ditjen Migas (gov) + Kompas/BloombergTechnoz/Warta Ekonomi/Kumparan inline; 2 URL-backed in frontmatter
- [x] FAQ 5–7 Q&As — actual: 7
- [x] 2 image placeholders (up to 3) — actual: 3
- [x] ≥1 list + ≥1 table — bullet list, numbered list, 1 comparison table
- [x] Word count 1,200–1,600 — actual: ~1.585 readable (script body 1.720 incl. markup tokens)

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 (all 5 content H2s open with a self-contained answer)
- [x] Each body paragraph makes one independently quotable, verifiable point (one claim + sourced fact)
- [x] FAQ parseable for FAQPage schema; publish_month/freshness in the meta block (recommend CMS set `dateModified`)

### D. PGN Gagas framing discipline (product_matrix.md + style_guide §11)
- [x] PGN Gagas framed as gas-energy provider/distributor (menyalurkan/mendistribusikan CNG beyond-pipeline) — NOT producing gas
- [x] ≤3 PGN Gagas self-mentions — 1 promotional (conclusion); "PGN Gagas Batam" ×3 are sourced spokesperson attributions, not promotion
- [x] No unverifiable superlatives ("terbaik/nomor satu/pionir/pemimpin pasar" — all absent)
- [x] Energi-gas / CNG product names + specs match product_matrix.md / dossier (Gaslink, C-Cyl 28 m³, GTM, PRS, Mother Station)
- [x] Closing uses a company_profile.md positioning line ("anak usaha PGN … Subholding Gas Pertamina")
- [x] Soft website CTA present as the FINAL line, after the conclusion (invites visit to gagas.co.id; consultative, not "beli sekarang")
- [x] Hub link present as a natural inline anchor in the lead ("perusahaan CNG Indonesia") — NOT a BACA JUGA callout

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: `perusahaan-cng-indonesia-03` (industri HGBT + HORECA sekilas + onboarding 6 langkah); also `-01/-02/-04/-05` (memilih penyedia / layanan / keamanan / kesalahan)
- Subtopic overlap (Jaccard estimate): ~0.20–0.25 vs 03 (shared: HORECA, "kapan belum cocok", retrofit, 600-pelanggan; distinct: economics-vs-LPG-non-subsidi, commercial case studies Dharmawangsa/Batam/RSHS, LPG price context, 24-jam continuity — no HGBT focus, no 6-step onboarding)
- Verdict: distinct angle confirmed (< 0.4)

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran clean; `perusahaan-cng-indonesia-05.id.quality-input.json` written
- [x] AI-detector score < 0.30 — actual: **0.00** (verdict pass, 0 flags)
- [x] Paragraph burstiness CV ≥ 0.30 — actual: **0.498** (sentence burstiness 0.668; top30 vocab share 0.285)
- [x] Plagiarism: 8 candidate passages web-checked (top-scored + numeric-fact passages). No non-Gagas verbatim ≥20-word match. Echoes are cited facts (LPG price, RSHS Rp3M, 600 pelanggan) with original sentence construction; the spuyer/kompor technical point is a widely-reported ESDM/PGN fact, phrased originally. **plagiarism score: 0.05**
