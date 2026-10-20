---
brief_id: "perusahaan-cng-indonesia-03"
editor_run_date: "2026-09-28"
recommendation: "approve"
overall_score: 9
ai_score: 0.04
plagiarism_score: 0.05
---

# Editor QC Report — Data Pemakaian & Lock-in: Hak atas Data dari Perusahaan CNG

## Recommendation
**approve**

The draft arrived in strong shape: clean anti-AI profile (zero em-dashes, no filler openers, varied rhythm), correct PGN Gagas framing, and every critical hedge honored — Gagas is framed strictly as a CNG *penyedia/distributor beyond-pipeline* (not a producer), only the two verified first-party facts (IoT sensor monitoring + smart-meter usage-based billing) are cited, and the article explicitly does NOT claim Gagas offers data export/API. It never asserts any Indonesian regulation mandates open-data/API for gas telemetry, and the EMS break-even is kept qualitative. All five spot-checked facts trace to the dossier/product_matrix. I fixed the two real gaps in-place — external authoritative sources were named but not hyperlinked (added 3 inline gov/IEA links), and the FAQ had 5 of the 6 briefed Q&As (added the "klausul data" question) — then trimmed ~16 words to bring the scanner word count from 1616 to exactly 1600. AI-detector 0.04 (clear pass); plagiarism heuristic-only (no WebSearch this run) shows no boilerplate lift, only original phrasings and source-attributed facts. Curator-ready.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | 0 em-dashes, no filler openers, honest-hedging voice ("bukan tebakan bulanan", "belum ada angka titik impas baku"); varied paragraph lengths |
| Factual & energi-gas / CNG accuracy | 9 | All spot-checked claims dossier-sourced; standards (Modbus 2004, MQTT ISO/IEC 20922:2016, ISO 50001:2018, IEC 62443) taught generically, not attributed to Gagas |
| On-page SEO compliance | 9 | Meta title 49, desc 151, slug 48; 5 body H2 (2 question-format); 3 internal + 3 external links; FAQ 6; table + numbered + bulleted lists |
| GEO extractability (§2a) | 9 | 40–60-word direct answer after every H2; definition snippet near top; one quotable point per paragraph; date_modified added |
| PGN Gagas framing discipline | 10 | 2 brand self-mentions (aside + close); provider/distributor framing; no superlatives; no export/API claim |
| Internal linking | 9 | Hub in lead (natural inline) + 2 cousins (Gaslink, LNG) contextually placed; no BACA JUGA |
| FAQ quality | 9 | 6 Q&As, each 40–80 words, PAA-mirrored, self-contained with a number/fact |
| Originality (plagiarism + AI-detector) | 9 | ai_score 0.04; burstiness CV 0.427 (>0.30 bar); plagiarism heuristic-only, no verbatim-lift signal |

## What I fixed (changelog)
- Added 3 inline external authoritative links that were named-only in the draft body: UU No. 27/2022 → peraturan.bpk.go.id, IEA *Digitalisation and Energy* → iea.org, "regulasi Ditjen Migas" → migas.esdm.go.id. (Draft frontmatter already declared these citations; body had no outbound hyperlinks.)
- Added the 6th briefed FAQ ("Klausul data apa saja yang wajib ada di kontrak pasokan CNG?") with a 50-word, em-dash-free answer drawn from the dossier — FAQ now 6 (was 5), matching brief + dossier.
- Added `date_modified: "2026-09-28"` to the meta block (GEO §2a freshness requirement).
- Trimmed ~16 words (two low-value trailing clauses in §1) to bring the scanner word count from 1616 → exactly 1600, keeping every H2 direct-answer snippet intact.
- Updated frontmatter `word_count` to 1600 (scanner's authoritative count).

## What I flagged (open issues)
- ⚠️ Plagiarism verified **heuristic-only (no WebSearch this run)** — 8 distinctive passages were extracted by the scanner but not web-cross-checked. Heuristic read shows original phrasing + source-attributed facts (no vendor-blog boilerplate); risk assessed low. *Recommendation*: if a full plagiarism pass is desired later, WebSearch the 8 quoted queries in `perusahaan-cng-indonesia-03.id.quality-input.json`; not a blocker.
- ⚠️ Scanner word count is exactly 1600 (inclusive of headings/table/FAQ); running-prose count is ~1435. Both within the 1,200–1,600 band. *Recommendation*: none — informational.
- Minor: scanner "paragraph-low-variance" CV=0.427 vs its own 0.45 target (low severity). Above the editor's 0.30 burstiness bar; no action.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers
- [x] No "Selain itu" opening ≥2 consecutive paragraphs (0 occurrences)
- [x] No "Penting untuk dicatat / dipahami bahwa" (0)
- [x] "Dengan demikian" not overused (0)
- [x] Em-dash count ≤2 — actual: 0
- [x] Varied paragraph lengths (1–6 sentences; burstiness CV 0.427)
- [x] Not every H2 → 3-bullet list (mix of prose, table, numbered + bulleted lists)
- [x] No generic claims without numbers (2004, ISO/IEC 20922:2016, 53/33 perusahaan, Pasal 1/8, ISO 9001/45001/37001)
- [x] No stacked hype adjectives ("paling lazim/padat/sering" are descriptive, not brand hype)
- [x] No service-dump paragraph

### B. Factual & energi-gas / CNG spot-check
| Claim | Source check | Verdict |
|---|---|---|
| "Modbus... standar terbuka sejak 2004"; "MQTT... ISO/IEC 20922:2016" | dossier ✓ (Modbus Org, ISO/IEC) | pass |
| "53 perusahaan pemegang izin niaga CNG per semester II-2025, naik dari 33" (data ESDM, via Bloomberg Technoz) | dossier ✓ | pass |
| "UU No. 27/2022... data pribadi = data orang perseorangan teridentifikasi (Pasal 1)"; Pasal 8 portabilitas hanya untuk data pribadi individu | dossier ✓ + hedge honored | pass |
| PGN Gagas: sensor IoT real-time volume+tekanan + penagihan smart meter pemakaian aktual | dossier ✓ (gagas.co.id first-party); NO export/API claimed | pass |
| "regulasi Ditjen Migas menaruh tanggung jawab akurasi alat ukur pada badan usaha... sisanya ranah negosiasi" | dossier ✓ (Surat Edaran Ditjen Migas) + asset-ownership hedge honored | pass |

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: 49 chars / keyword at pos 0
- [x] Meta description 140–160 — actual: 151
- [x] Slug ≤60, kebab-case, keyword — actual: perusahaan-cng-indonesia-hak-data-vendor-lock-in (48)
- [x] H1 contains keyword (variant "Perusahaan CNG"; exact form in meta title/desc/slug)
- [x] H2 count 4–5 — actual: 5 body H2 (+ FAQ + Kesimpulan)
- [x] ≥1 question-format H2 (2: "...Milik Pelanggan atau Penyedia?", "Cukup Laporan Bulanan atau Perlu Integrasi Penuh?"); ≥1 honest/counter-conventional ("Menghindari Vendor Lock-in..." + "banyak usaha kecil tidak butuh integrasi")
- [x] Keyword in first 100 words (hub anchor "perusahaan CNG di Indonesia" in lead)
- [x] Definition snippet near top (~52 words, "Ringkasnya:" blockquote)
- [x] ≥8 LSI terms — counted: ~16 (telemetri, kepemilikan data, portabilitas, EMS, ERP, BMS, API, vendor lock-in, Modbus, MQTT, interoperabilitas, keamanan siber, klausul, PRS, ISO 50001, IEC 62443)
- [x] 3 internal links (1 hub + 2 cousins) — destinations: perusahaan-cng-indonesia (hub, lead), gaslink, perusahaan-lng-indonesia
- [x] ≥1 external authoritative citation — actual: 3 (bpk.go.id/UU PDP, migas.esdm.go.id, iea.org)
- [x] FAQ 5–7 Q&As — actual: 6
- [x] 2 image placeholders (up to 3) — actual: 3, each with Bahasa Indonesia alt-text
- [x] ≥1 list + ≥1 table — numbered (5 klausul) + bulleted (skala signals) + 1 protocol table
- [x] Word count 1,200–1,600 — actual: 1600 (scanner); ~1435 running prose

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 (all 5 verified, in addition to top definition snippet)
- [x] Each body paragraph makes one independently quotable, verifiable point
- [x] FAQ parseable for FAQPage schema; `date_modified: 2026-09-28` in meta block

### D. PGN Gagas framing discipline (product_matrix.md + style_guide §11)
- [x] Framed as gas-energy provider/distributor (menyalurkan CNG beyond-pipeline), NOT producing gas
- [x] ≤3 self-mentions — actual: 2 "PGN Gagas" (mid-article aside + closing positioning); within brief's stricter ≤2
- [x] No unverifiable superlatives ("terbaik/nomor satu/terbesar") — none
- [x] Energi-gas / CNG product names + specs match product_matrix.md / dossier (Gaslink, CNG, ISO 9001/45001/37001, IoT smart meter)
- [x] Closing uses a company_profile.md positioning line ("anak usaha PGN... Subholding Gas Pertamina...")
- [x] Soft website CTA present as the FINAL line, after the conclusion (invites visit to gagas.co.id; consultative)
- [x] Hub link present as a natural inline anchor in the lead — NOT a BACA JUGA callout

### E. Anti-cannibalization spot check
- Closest prior articles for this keyword: `layanan-penyedia-cng-pasokan-distribusi-gtm` (#02, telemetry→billing accuracy), `manajemen-pasokan-cng-multi-lokasi-vendor` (#14, multi-location management), `perusahaan-cng-indonesia-data-esg-laporan` (#15, telemetry→ESG emissions)
- Subtopic overlap (Jaccard estimate): ~0.15 — shared object is "telemetry/usage data"; this article's treatment (data ownership, EMS/ERP integration, Modbus/MQTT, anti vendor lock-in, contract clauses) is entirely new
- Verdict: distinct angle confirmed

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran; `perusahaan-cng-indonesia-03.id.quality-input.json` written
- [x] AI-detector score < 0.30 — actual: 0.04 (verdict: pass)
- [x] Paragraph burstiness CV ≥ 0.30 — actual: 0.427 (scanner's own 0.45 target missed → low-severity flag only; above editor's 0.30 bar)
- [~] Plagiarism: **heuristic-only (no WebSearch this run)** — 8 distinctive passages extracted for lookup. Heuristic read: passages are either original idiomatic phrasing (e.g. "bukan tebakan bulanan", "tak berjawab baku") or facts attributed to cited authoritative sources (bpk.go.id, ESDM, ISO, Ditjen Migas). No generic vendor-blog boilerplate detected; no verbatim non-Gagas lift signalled. plagiarism_score: 0.05 (heuristic confidence; web-verification not performed per run constraint).
