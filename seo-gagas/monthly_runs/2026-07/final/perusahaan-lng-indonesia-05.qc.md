---
brief_id: "perusahaan-lng-indonesia-05"
editor_run_date: "2026-06-09"
recommendation: "approve"
overall_score: 9
---

# Editor QC Report — Memilih Penyedia Solusi LNG di Indonesia: Kriteria dan Pertimbangan

## Recommendation
**approve**

This draft ships. It is a genuinely vendor-neutral decision framework for evaluating any LNG provider — the "tidak semua perusahaan LNG berperan sama" hulu/midstream/hilir distinction is the editorial spine, and it teaches criteria (legalitas, cold chain, kriogenik, ekosistem, transparansi) before it positions PGN Gagas. Every PROTECT guardrail is honored: PGN Gagas is framed as a beyond-pipeline distributor "mengoperasikan LNG Hub yang sedang dikembangkan" (not a full LNG company); PT PGN LNG Indonesia is used only as a cited technical source, never conflated with Gagas; the Bali 2022 ISO tank episode is correctly absent; no competitor names, no "terbesar"/rank, no LNG price/MMBTU, and BOG 0,10–0,15%/hari is explicitly labeled "angka acuan, bukan standar baku regulator." Anti-AI scan is clean (zero filler openers, zero body em-dashes, varied rhythm, mixed formats). GEO extractability is strong — a quotable 40–60-word answer leads every H2. I made three light, length-neutral fixes (one fact-attribution tightening, one meta-description trim, one frontmatter word_count correction); nothing required writer or strategist rework.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | No AI openers; body em-dash count = 0; paragraph lengths vary (1–6 sentences); "Bagian ini jarang ditulis penyedia, padahal..." practitioner aside present. |
| Factual & energi-gas / LNG accuracy | 9 | All 5 spot-checked claims trace to dossier/authoritative sources; legalitas framed safely ("Permen ESDM No. 4/2018 dan perubahannya" — avoids the dossier's incorrect "52/2018" amendment number). |
| On-page SEO compliance | 9 | Meta title 44 chars (keyword in first 30); meta desc trimmed to ~158; slug 39 chars; 3 internal + 2 external; 5 FAQ; table + 2 lists. |
| GEO extractability (§2a) | 9 | 40–60-word direct answer after each of the 5 H2s; one quotable point per paragraph; FAQ FAQPage-ready; dateModified present. |
| PGN Gagas framing discipline | 10 | 2 self-mentions (both in Kesimpulan); distributor/LNG-Hub-operator framing; no superlatives; "sedang dikembangkan" hedge correct. |
| Internal linking | 9 | Hub inline in lead; 2 cousins (CNG, Gaslink) inline mid/closing — all natural anchors, no "BACA JUGA". |
| FAQ quality | 8 | 5 self-contained Q&As, each 55–75 words with a specific fact; within the 5–7 band (could add break-bulking/LNG-vs-CNG Q&A but prose already covers them; left at 5 to stay length-neutral). |
| Image-brief completeness | 9 | images.json parses; 3 entries match 3 body placeholders; all alt_id/caption_id/visual_direction/suggested_asset_type in Bahasa Indonesia; vendor-neutral sourcing notes surfaced. |

## What I fixed (changelog)
- **Fact attribution tightened (Jebakan kedua):** changed "Indonesia bahkan sempat mengalihkan kargo ekspor ke dalam negeri pada 2024 (RBAC, 2024)" → "mendorong pemerintah mengalihkan sejumlah kargo ekspor ke dalam negeri dalam beberapa tahun terakhir (SKK Migas, 2025)". Live verification (CNBC/ANTARA reporting SKK Migas) confirms the cargo diversion is an SKK Migas-led action documented through 2025–2026; the demand surge began 2024 but concrete diversions (≈5 cargoes Apr–May 2025; 9 by 2026) are 2025+. New phrasing is more authoritative (SKK Migas > private analyst) and removes a contestable single-year pin. Net ≈ +1 word.
- **Meta description trimmed:** "...ekosistem, plus jebakan yang sering luput." → "...ekosistem, dan jebakan yang sering luput." (≈161 → ≈158 chars, lands inside the 140–160 band).
- **Frontmatter word_count corrected:** 1565 → 1553 to match the verified count_words.py figure.

## What I flagged (open issues)
- ⚠️ **Inline attribution "(SKK Migas, 2025)" is a contextual reference, not a formal external_citation.** Like the benchmark gaslink-01 (which uses "kumparan, 2025" / "RBAC, 2024" inline beyond its two formal citations), this is acceptable; the two formal `external_citations` (ESDM Ditjen Migas + PGN LNG ISO tank) remain the schema-level sources. — *recommendation*: no action needed; noted for transparency. If the CMS wants every inline attribution URL-backed, add the SKK Migas/CNBC link (https://www.cnbcindonesia.com/news/20250410130522-4-624874/cegah-kekurangan-gas-ekspor-lng-bakal-dialihkan-ke-domestik) as a third citation.
- ⚠️ **LNG Hub operational status (dossier Flag 1).** Draft says "LNG Hub yang sedang dikembangkan" — correct and safe per PROTECT. — *recommendation*: before publish, a quick check of the latest gagas.co.id press release; if the hub has since gone operational, the phrasing can be upgraded, but "sedang dikembangkan" is the safe default and needs no change now.
- ⚠️ **FAQ count at the floor (5).** Within the 5–7 band but at the minimum. — *recommendation*: optional — a 6th Q&A ("Apa beda memilih penyedia LNG vs CNG?" or "Apa itu break-bulking?") from the dossier would add GEO surface area; omitted here to keep length neutral (≤1600). Not blocking.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — grep clean
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — grep clean (zero occurrences)
- [x] No "Penting untuk dicatat / dipahami bahwa" — grep clean
- [x] "Dengan demikian" not overused — zero occurrences
- [x] Em-dash count ≤2 — body prose = 0 (the 3 grep hits are all inside {IMAGE_NN} design briefs, replaced by images in the docx; not prose)
- [x] Varied paragraph lengths — mix of 1-sentence ("Petakan dulu siapa berperan di tahap apa.") through 5–6-sentence blocks
- [x] Not every H2 → 3-bullet list — H2 mix: prose-led (#1), numbered list (#2), table (#3), bullets+prose (#4), prose (#5)
- [x] No generic claims without numbers — -162°C, 1/600, 20.000–40.000 liter, 0,10–0,15%/hari, ISO years all present
- [x] No stacked hype adjectives — none (no canggih/powerful/terdepan/seamless)
- [x] No service-dump paragraph — single anchor (LNG Hub + Gaslink) in the close only

### B. Factual & energi-gas / LNG spot-check
| Claim | Source check | Verdict |
|---|---|---|
| LNG didinginkan ~-162°C; volume menyusut ~1/600 | dossier Claim 1 (PGN LNG / PP 36/2004) ✓ | pass |
| Niaga LNG non-pipa wajib Izin Usaha Niaga Migas dari Menteri ESDM | dossier Claim 2 + live WebSearch (Ditjen Migas / JDIH; amendment is Permen 19/2021) ✓ — draft uses "dan perubahannya", avoids wrong number | pass |
| ISO tank kriogenik 20.000–40.000 liter | dossier Claim 5 (PGN LNG + Arcon, UN T75/ISO 1496-3) ✓ | pass |
| BOG 0,10–0,15% volume/hari, labeled "acuan, bukan standar baku regulator" | dossier Claim 7 + Flag 5 ✓ — label requirement satisfied | pass |
| Pemerintah mengalihkan kargo ekspor LNG ke domestik (post-edit: SKK Migas, beberapa tahun terakhir) | live WebSearch (CNBC/ANTARA: SKK Migas atur ulang ekspor, 5 kargo Apr–Mei 2025, 9 kargo per 2026) ✓ | pass (tightened from dossier Claim 16) |

PROTECT-specific verification: no competitor names (Badak/Tangguh/DSLNG/Nusantara Regas/Pertagas) — grep clean; no "terbesar"/rank — grep clean; PGN Gagas not conflated with PT PGN LNG Indonesia (latter cited as separate source only); Bali 2022 ISO tank correctly absent; no LNG price/MMBTU — grep clean; no "memproduksi/produsen" attributed to Gagas — grep clean.

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: 44 chars / "LNG" at char ~17
- [x] Meta description 140–160 — actual: ~158 (post-trim)
- [x] Slug ≤60, kebab-case, keyword — actual: `memilih-penyedia-lng-indonesia-kriteria` (39 chars, contains "lng")
- [x] H1 contains keyword — "Memilih Penyedia Solusi LNG di Indonesia..."
- [x] H2 count 4–5 — actual: 5 body H2 (+ FAQ + Kesimpulan)
- [x] ≥1 question-format H2 ("Apa Saja Kriteria...?"); ≥1 honest/counter-conventional ("Jebakan Saat Memilih Penyedia LNG")
- [x] Keyword in first 100 words — "perusahaan LNG" + "penyedia LNG di Indonesia" in lead
- [x] Definition snippet near top (40–60 words) — blockquote ~58 words
- [x] ≥8 LSI terms — counted 12+ (cold chain, regasifikasi, break-bulking, ISO tank, kriogenik, boil-off, SRU, izin niaga, FSRU, SLA, UN T75 implied, midstream/hilir)
- [x] 3 internal links — /perusahaan-lng-indonesia/ (lead), /perusahaan-cng-indonesia/ (Kesimpulan), /gaslink/ (Kesimpulan)
- [x] ≥1 external authoritative citation — 2 (Ditjen Migas ESDM + PGN LNG); inline ESDM/SKK Migas references additionally present
- [x] FAQ 5–7 Q&As — actual: 5
- [x] 2 image placeholders (up to 3) — actual: 3
- [x] ≥1 list + ≥1 table — 1 numbered list, 2 bullet lists, 1 table
- [x] Word count 1,200–1,600 — actual: 1553 (count_words.py)

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — verified for all 5 (#1 three-role opener; #2 "Pilih berdasarkan lima kriteria inti..." + numbered list; #3 table lead-in; #4 differentiation opener; #5 "Tiga jebakan paling sering...")
- [x] Each body paragraph makes one independently quotable, verifiable point — confirmed (e.g., regasifikasi/SRU paragraph, BOG paragraph each carry one sourced claim)
- [x] FAQ parseable for FAQPage schema; `dateModified` / freshness in meta block — `date_modified: "2026-06-09"` present

### D. PGN Gagas framing discipline (product_matrix.md + style_guide §11)
- [x] PGN Gagas framed as gas-energy provider/distributor (distribusi beyond-pipeline, mengoperasikan LNG Hub) — NOT a full LNG company / producer
- [x] ≤3 PGN Gagas self-mentions — actual: 2 (both in Kesimpulan)
- [x] No unverifiable superlatives — none
- [x] Energi-gas / LNG names + specs match product_matrix.md / dossier — ISO certs (9001:2015/45001:2018/37001:2016, 2025), LNG Hub, Gaslink all profile-accurate
- [x] Closing uses a company_profile.md positioning line — "anak usaha PGN yang merupakan bagian dari Subholding Gas Pertamina..."
- [x] Soft website CTA as the FINAL line, after the conclusion — "...kunjungi gagas.co.id dan mulai konsultasinya." (consultative, not "beli sekarang")
- [x] Hub link as natural inline anchor in the lead — "[penyedia LNG di Indonesia]" — not a callout

### E. Anti-cannibalization spot check
- Closest prior articles for the "memilih penyedia" frame: `perusahaan-cng-indonesia-01` (7 kriteria memilih CNG) and `perusahaan-cng-indonesia-04` (keamanan & keandalan pasokan CNG) — both committed (editor-approved).
- Subtopic overlap (Jaccard estimate): ~0.15. Shared generic principles (legalitas, ISO, keandalan, transparansi) but ZERO shared subtopic tokens on the technical axis — this article = cryogenic/cold-chain/regasifikasi/SRU/break-bulking/ISO-tank/role-fragmentation (hulu-midstream-hilir); the CNG articles = compression/GTM/Mother-Station/auto-ignition/Permen-ESDM-32-2021.
- Verdict: distinct LNG-specific angle confirmed. The "tidak semua perusahaan LNG berperan sama" (kilang vs regas vs distribusi) framing is unique to this piece and absent from any CNG article.

### F. Image-brief completeness (images.json)
- [x] JSON parses
- [x] One entry per {IMAGE_NN} placeholder in the body — 3 entries (IMAGE_01/02/03) match 3 body placeholders exactly
- [x] Each entry has alt_id (≤125 chars) + caption_id + visual_direction + suggested_asset_type — all present, all Bahasa Indonesia
- [x] Vendor-neutrality surfaced — every sourcing_note instructs "tidak ada nama perusahaan, logo, atau branding" (consistent with the article's vendor-neutral mandate); BOG figure in IMAGE_03 flagged as industry reference, not regulator standard
- (No generated PNGs to check — by design; client design team executes from this brief.)
