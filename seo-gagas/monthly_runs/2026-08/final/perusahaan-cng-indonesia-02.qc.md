---
brief_id: "perusahaan-cng-indonesia-02"
editor_run_date: "2026-08-11"
recommendation: "approve"
overall_score: 9
ai_score: 0.04
plagiarism_score: 0.03
---

# Editor QC Report — Pindah dari Gas Pipa ke CNG: Kapan Masuk Akal & Caranya

## Recommendation
**approve**

The draft came in unusually clean for a writer that died pre-polish: every critical hedge the brief/dossier flagged held. The realisasi AGIT/HGBT 2026 numbers are presented with basis + date + source each (47,5% Jan–Mei/Kontan; 27,5% FIPGB/Bisnis; 88% vs Kepmen 281.K Juli/Kompas) rather than collapsed into one figure; "force majeure" is not used anywhere; Gaslink's "hingga 30%" is correctly framed against conventional fuel (solar/LPG), not gas pipa; Bio Farma is described as CNG+solar dual-fuel with an explicit "bukan persis pipa plus CNG" caveat; ISO 22301 (a PGN-induk credential) is absent; and the framing stays neutral toward the pipeline ("jaringan pipa bukan 'gagal'"). The one real problem was an anti-AI tell — 10 em-dashes used as list lead-in separators (my earlier bash `—` grep missed them; the scanner caught 10 and the manual PowerShell pass confirmed 12 total). I converted all list/image em-dashes to colons in-place, which dropped the scanner AI score from 0.24 to 0.04. Facts verified against the dossier and (for HGBT/PRS/pressure) confirmed via WebSearch; no plagiarism hits. On-page SEO, GEO extractability, PGN Gagas framing, and word count (1.579, within band) all pass. Curator-ready.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Clean after em-dash fix; varied sentence rhythm (sentence CV 0.63), honest hedging throughout; concrete pain-led lead. |
| Factual & energi-gas / CNG accuracy | 10 | Every number traces to the dossier; all 5 critical hedges held; no invented GTM capacity, no fabricated commissioning duration. |
| On-page SEO compliance | 9 | Meta title 49, desc 152, slug 41; keyword in first 100 words + last para; 3 internal + 2 external authoritative links. |
| GEO extractability (§2a) | 9 | 40–60-word direct answer after each of 5 H2s; one quotable point per paragraph; FAQPage-ready; `date_modified` added. |
| PGN Gagas framing discipline | 9 | Provider/distributor framing; 2 self-mentions + soft CTA; no superlatives; Bio Farma correctly hedged; hub link inline in lead. |
| Internal linking | 10 | Hub (lead) + Gaslink + LNG cousins, all natural inline anchors, no BACA JUGA callout. |
| FAQ quality | 9 | 6 Q&As, each 45–52 words, mirrors the brief's PAA proxy; self-contained answers. |
| Originality (plagiarism + AI-detector) | 10 | AI-detector 0.04; no non-Gagas verbatim ≥20 words on any distinctive passage. |

## What I fixed (changelog)
- **Anti-AI (em-dash tell):** Converted 10 list lead-in em-dashes (`**Term** — text`) to colons (`**Term**: text`) across the H2#2 bullet list and H2#4 numbered list; also converted 2 image-concept em-dashes to colons. Article em-dash count 12 → 0; scanner AI score 0.24 → 0.04.
- **GEO freshness:** Added `date_modified: "2026-08-11"` to the meta block (§2a requirement; block previously had only `publish_month`).
- **External citation strength:** Hyperlinked the HGBT/Kepmen 76.K claim to the verified ESDM regulator page (`esdm.go.id/.../skema-baru-hgbt-...`), giving 2 live authoritative citations (ESDM + Kontan) instead of 1; updated the frontmatter `external_citations` URL from the esdm.go.id homepage to the specific arsip-berita page.
- **Frontmatter accuracy:** `target_word_count` 1400 → 1550 (aligns with brief); `word_count` 1549 → 1579 (matches canonical scanner measurement of the final).

## What I flagged (open issues)
- ⚠️ **Kepmen ESDM No. 281.K/2026 (porsi Jabar 73% / realisasi PGN Juli ~88%) is verified only via secondary reporting** (Kompas), not the JDIH text. The draft already attributes it as "menurut pemberitaan yang mengutip kepmen tersebut" — *recommendation*: acceptable as-is; if the CMS team can confirm the JDIH text before publish, tighten the attribution.
- ⚠️ **Paragraph burstiness CV = 0.422** (target ≥0.45; scanner low-severity flag). Comfortably above the 0.30 AI-tell threshold and not worth forced restructuring — *recommendation*: none; noted for transparency.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — lead opens on a concrete procurement pain
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — 0 occurrences
- [x] No "Penting untuk dicatat / dipahami bahwa" — 0
- [x] "Dengan demikian" not overused — 0
- [x] Em-dash count ≤2 — **fixed: 12 → 0** (all were list lead-in separators / image-concept text)
- [x] Varied paragraph lengths — sentence CV 0.63; paragraph CV 0.422 (above tell threshold)
- [x] Not every H2 → 3-bullet list — H2#1 table, H2#2 bullets, H2#3 prose, H2#4 numbered, H2#5 prose
- [x] No generic claims without numbers — number-dense (US$7/6,5, 253, 47,5/27,5/88%, US$15–16, US$20,57→13, 24%, 70–250/250–400 bar)
- [x] No stacked hype adjectives
- [x] No service-dump paragraph

### B. Factual & energi-gas / CNG spot-check
| Claim | Source check | Verdict |
|---|---|---|
| HGBT US$7/MMBTU (bahan bakar) & US$6,5 (bahan baku), 253 pengguna, 7 sektor, Kepmen 76.K/MG.01/MEM.M/2025 (Feb 2025) | dossier ✓ + ESDM URL WebSearch-verified ✓ | pass |
| Realisasi AGIT 2026 kontradiktif: ~47,5% Jan–Mei (Kontan 23 Jun), ~27,5% FIPGB (Bisnis 7 Agu), ~88% vs Kepmen 281.K Juli (Kompas 6 Agu) — each with basis+date+source | dossier ✓ (edge-case handled exactly as flagged) | pass |
| Pemangkasan regasifikasi LNG US$20,57 → US$13/MMBTU efektif 29 Jun 2026 | dossier ✓ (Kementerian ESDM) | pass |
| Bio Farma: CNG (PGN Gagas) boiler utama + solar cadangan, 15 Jul 2026, CO2 −24% vs solar — framed as dual-fuel, "bukan persis pipa plus CNG" | dossier ✓ + product_matrix framing ✓ | pass |
| Kompresi 70–250 bar; tabung angkut 250–400 bar; PRS ≈ regulator city-gate | dossier ✓ + WebSearch (industry-standard) ✓ | pass |
| Gaslink "hingga 30%" = vs bahan bakar konvensional (solar/LPG), BUKAN vs gas pipa | dossier ✓ + gagas.co.id/gaslink confirms ✓ | pass |

Hedge audit (task-critical): AGIT/HGBT multi-figure with basis+date ✓ · "force majeure" not used (0 hits) ✓ · Gaslink 30% vs conventional fuel ✓ · Bio Farma dual-fuel not literal pipa+CNG ✓ · ISO 22301 absent (0 hits) ✓ · pipeline-neutral framing ✓.

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: **49** chars, keyword at position 0
- [x] Meta description 140–160 — actual: **152**
- [x] Slug ≤60, kebab-case, keyword — actual: `perusahaan-cng-indonesia-migrasi-gas-pipa` (41)
- [x] H1 contains keyword — "CNG" present (clear synonym; full keyword in meta title + first 100 words)
- [x] H2 count 4–5 — actual: **5**
- [x] ≥1 question-format H2 (2: "Kapan Beralih...", "Apakah Harus Mencabut...") ; ≥1 honest/counter-conventional H2 ("Kapan Tetap di Pipa Lebih Baik")
- [x] Keyword in first 100 words — "perusahaan CNG Indonesia" in lead (~word 70)
- [x] Definition snippet near top (40–60 words) — blockquote after lead, ~55 words
- [x] ≥8 LSI terms — counted **12+** (virtual pipeline, beyond pipeline, HGBT, AGIT, GTM, PRS, Mother Station, dual-source, Wobbe Index, regasifikasi, commissioning, cutover)
- [x] 3 internal links (1 hub + 2 cousins) — hub (lead), gagas.co.id/gaslink, gagas.co.id/perusahaan-lng-indonesia
- [x] ≥1 external authoritative citation — actual: **2** (ESDM regulator + Kontan)
- [x] FAQ 5–7 Q&As — actual: **6**
- [x] 2 image placeholders (up to 3) — actual: **3** (IMAGE_01/02/03, each with alt-text)
- [x] ≥1 list + ≥1 table — table (H2#1) + bullet list (H2#2) + numbered list (H2#4)
- [x] Word count 1,200–1,600 — actual: **1,579**

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each of 5 major H2s (measured 40–52 words each), before elaboration
- [x] Each body paragraph makes one independently quotable, verifiable point (market-context paragraph gives 3 sourced AGIT figures, one per clause)
- [x] FAQ parseable for FAQPage schema; `date_modified: 2026-08-11` present in the meta block

### D. PGN Gagas framing discipline (product_matrix.md + style_guide §11)
- [x] Framed as gas-energy provider/distributor (memasok/menyalurkan/menghadirkan), NOT producing what it doesn't
- [x] ≤3 PGN Gagas self-mentions — actual: **2** explicit ("PGN Gagas" ×2: Bio Farma aside + Kesimpulan positioning) + soft gagas.co.id CTA; Gaslink is the mandated cousin link
- [x] No unverifiable superlatives — 0 (terbaik/nomor satu/terbesar/satu-satunya)
- [x] Energi-gas / CNG product names + specs match product_matrix.md / dossier — Gaslink/GTM/PRS/Mother Station correct; no invented GTM capacity
- [x] Closing uses a company_profile.md positioning line — "anak usaha PGN...bagian dari Subholding Gas Pertamina, menghadirkan gas bumi ke wilayah yang belum terjangkau jaringan pipa lewat solusi CNG"
- [x] Soft website CTA present as the FINAL line — "...mulai diskusinya di gagas.co.id." (consultative, not "beli sekarang")
- [x] Hub link present as a natural inline anchor in the lead — "penyedia CNG di Indonesia", descriptive, no BACA JUGA callout

### E. Anti-cannibalization spot check
- Closest prior articles for this keyword: `cara-memilih-perusahaan-cng-indonesia`, `layanan-penyedia-cng-pasokan-distribusi-gtm`, `keamanan-keandalan-pasokan-cng` (2026-07). 2026-08 siblings: multi-site (04), SLA/eskalasi (03), ESG data (05), MBG procurement (01).
- Subtopic overlap (Jaccard estimate): ~0.22 (shared "keandalan/pasokan" surface only; core "migrasi antar-moda pipa→CNG + pemicu + langkah transisi" is unique to this article)
- Verdict: **distinct angle confirmed** — no prior/sibling covers mode migration pipa→CNG

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran; `perusahaan-cng-indonesia-02.id.quality-input.json` written (no script error)
- [x] AI-detector score < 0.30 — actual: **0.04** (was 0.24 pre-fix; em-dash flag cleared)
- [x] Paragraph burstiness CV ≥ 0.30 — actual: **0.422**; sentence CV 0.63; top-30 vocab share 0.309
- [x] Plagiarism: distinctive passages web-checked; no non-Gagas verbatim hit ≥20 words — plagiarism score: **0.03**
  - Lead ("menganggap urusan energi selesai") — no verbatim match; original
  - Compression sentence (70–250 / 250–400 bar) — common industry fact, phrased originally; no lift
  - "hingga 30%" framing — resembles no source verbatim; search confirmed the vs-conventional-fuel framing is accurate (per gagas.co.id itself, a cited/own source → excepted)
  - PRS ≈ city-gate — standard industry description, original wording
  - HGBT price / regasifikasi cut / AGIT % — necessarily resemble their cited sources (ESDM/Kontan/Kompas), attributed inline; not verbatim paragraph lifts (authoritative-source exception applies)

Scanner run notes: script executed cleanly both times (no fallback needed). Note: git-bash `$'—'` did not expand, so the initial bash em-dash grep falsely read 0; the PowerShell recount (12) and the scanner (10 prose) are authoritative and drove the fix.
