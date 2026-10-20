---
brief_id: "pembiayaan-infrastruktur-02"
editor_run_date: "2026-09-22"
recommendation: "approve"
overall_score: 9
ai_score: 0.04
plagiarism_score: 0.05
---

# Editor QC Report — Pembiayaan Infrastruktur Babak Kedua: Mendaur Ulang Modal

## Recommendation
**approve**

This is the strongest kind of article this cluster can produce: it owns a genuinely vacant slot (the post-*financial close* life of a financing), and its differentiator is honesty rather than volume. The "available in law, unproven in practice" framing verified exactly as briefed — KETUPI's five-layer legal stack is cited correctly (including the `361/KM.6/2024` numbering correction the strategist got wrong), the JORR securitisation stays a reported plan, the 2018 Trans-Jawa divestment stays a dated mechanism illustration with no rupiah figure, and no spread or basis-point number was invented for refinancing. PT PII framing is clean in the one place this article makes it easy to break: the guarantee is described as spanning three project stages and explicitly *not* covering demand or commercial risk, and PT PII is never shown buying, selling, securitising, refinancing, or issuing anything. I made nine in-place fixes, one of which is a real factual correction (the 40% coverage figure is APBN **and** APBD combined, not APBN alone — verified against the June 2025 ICI presentation reporting). Anti-AI scan came back with zero pattern hits and zero em-dashes; the heuristic AI score is 0.04. One open flag is cross-article, not this article's fault: `pembiayaan-infrastruktur-03.id.md` still carries the imprecise "kemampuan APBN" scope for the same figure.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Zero §5 pattern hits, zero em-dashes, sentence burstiness 0.759. Lead opens on a concrete asset, not a trend statement. |
| Factual & penjaminan infrastruktur / KPBU accuracy | 9 | Regulation stack verified; KMK numbering correct; plan-vs-realisation discipline held throughout. One scope correction applied. |
| On-page SEO compliance | 9 | Meta title 54, description 155, slug 41, 5 body H2s, 22/22 LSI terms present. |
| GEO extractability (§2a) | 10 | 40–60-word answers after all five body H2s (48/44/41/43/46). Definition snippet 54 words inside the first 150. |
| PT PII framing discipline | 10 | 2 named self-mentions + CTA. No lender/investor/securitiser drift, no Danantara, no officials, no superlatives, guarantee not dissected. |
| Internal linking | 10 | 3 distinct ptpii.co.id URLs, inline, fresh anchors, hub in the lead. Zero institute.iigf.co.id. |
| FAQ quality | 9 | 6 Q&As, all 43–53 words, each self-contained and carrying a dated fact. |
| Originality (plagiarism + AI-detector) | 9 | ai_score 0.04; 3 of 8 candidate passages web-checked, no verbatim ≥20-word hit on any non-PT PII page. |

## What I fixed (changelog)
- **Factual scope correction (lead):** "dengan APBN hanya mampu menutup sekitar 40%" → "sementara anggaran pemerintah (APBN dan APBD) hanya mampu menutup sekitar 40%". WebSearch of the underlying Kemenkeu/ICI 2025 presentation shows the 40% is APBN 23% (USD 143,84 miliar) + APBD 17% (USD 106,31 miliar). The dossier's shorthand was imprecise; the figure is unchanged, the scope is now correct.
- **Removed double attribution** in §"Apa itu daur ulang modal": two consecutive sentences both opened on "World Bank". Merged into one attributed citation and glossed *demonstrated history of operations* in Indonesian per style_guide §3.
- **De-editorialised the SERP-gap observation:** "Menariknya, sisi ini justru absen dari literatur resmi" → "Sisi pembiayaan ini belum banyak dibahas dalam literatur resmi". The kpbu.kemenkeu.go.id gap now reads as a factual observation, not a jab.
- **Expanded two acronyms on first body use** (brief's entity list required it): KIK-EBA → "(*Kontrak Investasi Kolektif Efek Beragun Aset*)"; KETUPI → "(*Kerja Sama Terbatas untuk Pembiayaan Infrastruktur*)". Both previously only appeared expanded in the FAQ.
- **Added the fourth frontmatter citation as an inline link**: `peraturan.go.id/id/perpres-no-32-tahun-2020` now anchors the "berstatus berlaku" claim, so the regulation-status assertion is verifiable in one click. External citations in body: 3 → 4.
- **Added H3 "Kapan mendaur ulang modal justru merugikan"** inside §"Tersedia secara hukum…". The brief's counter-conventional section had been folded in without a signpost; the H3 restores it and gives the downside argument its own extractable unit.
- **Sharpened the conclusion's evidence claim**: "sisanya belum menunjukkan bukti publik" → split into two precise statements ("untuk *refinancing* tidak ditemukan contoh publik yang lebih baru dari 2020, dan untuk KETUPI belum ditemukan bukti publik sama sekali"). The old phrasing flattened two different evidentiary situations into one.
- **Broke a paragraph for rhythm**: "Kerangkanya hidup." now stands as its own one-line paragraph before the "Namun…" turn. Paragraph burstiness CV 0.401 → 0.427.
- **Tightened the closing CTA**: "…laman produknya tersedia di ptpii.co.id" → "Cara kerja Penjaminan Pemerintah dalam pembiayaan infrastruktur skema KPBU, termasuk pada tahap operasi, diuraikan di ptpii.co.id." Keeps the primary keyword in the final line and stays distinct from the other nine CTAs in this month's set.
- **Frontmatter `word_count` synced** 1672 → 1710 (`tools/count_words.py`).

## What I flagged (open issues)
- ⚠️ **Cross-article inconsistency on the 40% figure.** `monthly_runs/2026-09/final/pembiayaan-infrastruktur-03.id.md` still reads "dengan kemampuan APBN menutup sekitar 40%". `-01` and `jaminan-pemerintah-03` already use the correct combined APBN+APBD scope. — *recommendation*: apply the same one-line scope fix to `-03` before commit; the dossier line it inherits should also be tightened for future runs.
- ⚠️ **Paragraph burstiness CV 0.427 sits below the scanner's own stricter target of 0.45** (it clears the pipeline threshold of 0.30 comfortably, and the AI verdict is `pass` at 0.04). — *recommendation*: no action for this article; monitor whether the 0.45 target is realistic for 1.700-word institutional pieces, since several of this month's finals land in the 0.40–0.45 band.
- ⚠️ **No explicit `dateModified` / freshness field** in the meta block, as §2a asks. `publish_month: "2026-09"` is the only freshness marker, and all ten of this month's finals are consistent on this. — *recommendation*: pipeline-level decision for the curator/CMS, not an article-level fix; I did not diverge unilaterally.
- ⚠️ **"14 jenis infrastruktur" remains a DJKN-attributed claim, not a Perpres-article claim.** My WebSearch confirmed Perpres 66/2024's existence, official title, and JDIH indexing, but did not surface the annex list. The article attributes it correctly ("Menurut artikel penjelas DJKN Kementerian Keuangan (2025)") — *recommendation*: leave as attributed; do not upgrade to "Pasal X menyebutkan" in future refreshes without reading the annex.
- ⚠️ **World Bank "2–8% PDB per tahun" carries a period ("hingga 2030") but no publication year** for the blog post itself. — *recommendation*: acceptable as inline-attributed and linked; add the post's year if a refresh pass re-opens the source.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — 0 hits
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — 0 occurrences anywhere
- [x] No "Penting untuk dicatat / dipahami bahwa" — 0 hits
- [x] "Dengan demikian" not overused — 0 hits
- [x] Em-dash count ≤2 — **0**
- [x] Varied paragraph lengths — 20 / 33 / 40 / 41 / 43 / 44 / 46 / 48 / 54 / 57 / 58 / 59 / 63 / 78 / 82 / 92 / 113 words; sentence counts run 1–5
- [x] Not every H2 → 3-bullet list — 5 body H2s: 3 open into prose only, 1 into prose + bullets, 1 into prose + numbered list + table
- [x] No generic claims without numbers
- [x] No stacked hype adjectives — 0 hits on canggih/terdepan/terbaik/revolusioner/seamless
- [x] No service-dump paragraph — one anchor only (Penjaminan Pemerintah)
- [x] Press-release register absent — no "Dalam rangka…", no "Sebagai wujud komitmen…"

### B. Factual & penjaminan infrastruktur / KPBU spot-check
| Claim | Source check | Verdict |
|---|---|---|
| Perpres 32/2020 (HPT) ditetapkan 14 Februari 2020, berlaku, diubah Perpres 66/2024 | dossier ✓ + peraturan.go.id/peraturan.bpk.go.id via WebSearch (official title confirmed verbatim) | **pass** |
| KMK **361/KM.6/2024** (not "361/KMK.6/2024"), hedged as "tercatat di basis data peraturan DJKN" | dossier ✓ (explicit numbering correction, medium confidence, hedge required and present) | **pass** |
| KIK-EBA Mandiri JSMR01, Tol Jagorawi, Rp 2 triliun, proyeksi 5 tahun, BEI 31 Agustus 2017 | dossier ✓ + WebSearch: Kompas, Detik, Kemenko Perekonomian, Mandiri Investasi all concur | **pass** |
| Kebutuhan 2025–2029 ≈ USD 625 miliar / Rp 10.146–10.303 triliun; 40% dari anggaran pemerintah | dossier (partial) + WebSearch: ANTARA/VOI/infobank reporting of ICI 2025 — **scope corrected from "APBN" to "APBN dan APBD"** | **pass after fix** |
| KETUPI: "belum ada transaksi terdokumentasi publik per Juli 2026"; DJKN artikel 27 Juli 2026 tidak menyebut satu aset pun | dossier ✓ — phrasing is "belum ditemukan/belum memuat", never "tidak pernah terjadi" | **pass** |
| Hutama Karya: Rp 1 triliun / 8,55% / 10 tahun (Des 2016); Rp 1,96 triliun / 8,07% (Mei 2017), past tense | dossier ✓ (PT SMI, 2017) | **pass** |
| JORR Rp 2,5 triliun written as a **reported plan** (2020), no completion claimed | dossier ✓ flag honoured — "diberitakan pada 2020 tanpa konfirmasi independen bahwa transaksinya rampung" | **pass** |
| Trans-Jawa divestment: dated Maret 2018, no rupiah figure, mechanism illustration only | dossier ✓ flag honoured — "nilai transaksinya tidak pernah diungkap publik… ilustrasi mekanisme" | **pass** |
| Refinancing spread / basis points | **no figure invented** — article states "Tidak ada angka selisih marjin proyek Indonesia yang terverifikasi publik" | **pass** |
| Australia ARI (2014) labelled as foreign practice, target shortfall noted, no "15%" incentive figure | dossier ✓ — "Praktik ini bukan temuan Indonesia" + qualitative only | **pass** |
| PT PII: 61 proyek, nilai penjaminan Rp 113 triliun, per publikasi resmi Juni 2026 | dossier ✓ + company_profile ✓ — guarantee value correctly labelled as guarantee value, not project value | **pass** |
| POJK 65/POJK.04/2017 sebagai dasar KIK-EBA | dossier ✓ (peraturan.bpk.go.id mirror) | **pass** |

Every figure in the article carries a reference year **and** a scope. Fitch is absent, as instructed. No claim is asserted to have been paid; the guarantee is never called a subsidy and never extended to commercial risk.

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: **54 chars / keyword at position 0**
- [x] Meta description 140–160 — actual: **155**
- [x] Slug ≤60, kebab-case, keyword — actual: `pembiayaan-infrastruktur-daur-ulang-modal` (41)
- [x] H1 contains keyword — "Pembiayaan Infrastruktur Babak Kedua: Mendaur Ulang Modal"
- [x] H2 count 4–5 body — actual: **5 body H2s** (+ FAQ + Kesimpulan = 7 total, inside the playbook's 4–7 band)
- [x] ≥1 question-format H2 (2: "Apa itu daur ulang modal…?", "Kenapa pembiayaan proyek tidak berhenti di *financial close*?"); ≥1 honest/counter-conventional H2 ("Tersedia secara hukum, belum tentu terbukti di lapangan" + new H3 "Kapan mendaur ulang modal justru merugikan")
- [x] Keyword in first 100 words — "kebutuhan pembiayaan infrastruktur nasional 2025–2029", word ~48
- [x] Definition snippet near top — 54-word blockquote at word ~95
- [x] ≥8 LSI terms — counted: **22/22** present (daur ulang modal, *capital recycling*, *refinancing*, obligasi proyek, *project bond*, KIK-EBA, sekuritisasi, KETUPI, HPT, *brownfield*, *greenfield*, *financial close*, arus kas, tenor, amandemen, BMN, BLU, PJPK, biaya dana, kelayakan kredit, pendapatan masa depan, BUP)
- [x] 3 internal links (1 hub + 2 cousins) — `/pembiayaan-kreatif` ("alternatif pendanaan proyek infrastruktur", lead) · `/kpbu` ("struktur proyek KPBU jangka panjang") · `/public-private-partnership` ("praktik public private partnership internasional"). All 3 distinct, all inline, none is an August anchor. Zero institute.iigf.co.id.
- [x] ≥1 external authoritative citation — actual: **4** (DJKN Kemenkeu, kpbu.kemenkeu.go.id, World Bank PPP Knowledge Lab, peraturan.go.id)
- [x] FAQ 5–7 Q&As — actual: **6**
- [x] ≥1 list + ≥1 table — 1 bullet list, 1 numbered list (4 jalur), 1 table (jalur × prasyarat × rekam jejak)
- [x] Word count inside the band — actual: **1.710** (band 1.500–1.800), frontmatter synced

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — measured: **48 · 44 · 41 · 43 · 46** words. All five inside the band.
- [x] Each body paragraph makes one independently quotable, verifiable point — the numbered four-route list and the three-column table are both row-extractable; the definition snippet is standalone AI-Overview bait for a term with no clean Indonesian definition on the SERP
- [~] FAQ parseable for FAQPage schema (`## FAQ` → `### question` → answer paragraph, 6 entries) ✓; **`dateModified` not present** — `publish_month` only, consistent with all ten finals this month (flagged above, not an article-level fix)

### D. PT PII framing discipline (product_matrix.md + style_guide §11)
- [x] PT PII framed as the government-guarantee provider (BUPI) — "Badan Usaha Penjaminan Infrastruktur di bawah Kementerian Keuangan"; never a lender, investor, contractor, operator, or regulator; not under Danantara
- [x] **Capital-recycling-specific check** — read every occurrence: PT PII does not buy, sell, securitise, refinance, or issue bonds anywhere in the article. Financing is attributed to PT SMI, PT IIF, banks, the bond market, and multilaterals; PT PII only issues guarantees. FAQ 6 states it explicitly: "Badan Usaha Penjaminan Infrastruktur (BUPI) tidak menyalurkan dana."
- [x] ≤3 PT PII self-mentions — actual: **2 named + 1 CTA = 3** (mid-article aside in §5, closing positioning line, final CTA line)
- [x] No unverifiable superlatives — 0 hits
- [x] Three-stage point present but guarantee product **not** dissected — "penjaminan pemerintah pada tiga tahap proyek: pra-konstruksi, konstruksi, dan operasi", plus the honest negative ("Yang tidak ditanggungnya adalah risiko permintaan dan risiko komersial badan usaha"). No risk taxonomy, no claim mechanics, no regres — those belong to the Jaminan Pemerintah cluster.
- [x] Closing uses a company_profile.md positioning line — "menjembatani kebutuhan kepastian investor dengan kemampuan fiskal negara"
- [x] Soft website CTA present as the FINAL line, after `## Kesimpulan` — consultative, no "beli sekarang", distinct from the other nine CTAs this month
- [x] Hub link is a natural inline anchor in the lead — no "BACA JUGA" callout anywhere
- [x] No named Direktur/Komisaris/Menteri — the June 2025 presentation and the kpbu.kemenkeu.go.id article are both attributed institutionally

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: `2026-08-pembiayaan-infrastruktur-02` — *Corporate Finance atau Project Finance?*
- Subtopic overlap (Jaccard estimate): **≈0,05**. August-02 owns the pre-*financial close* structural choice (corporate vs project finance, SPV, non-recourse, DSCR, debt-equity 70–80/20–30, cost-of-capital-by-structure table). This article starts after *financial close* and owns refinancing, project bonds, KIK-EBA, and KETUPI. Zero exact subtopic intersection; "tenor" and "arus kas" appear in both only as supporting vocabulary. The August cost-of-capital-by-structure table is **not** repeated — this article's table is jalur × prasyarat × rekam jejak.
- vs `2026-08-pembiayaan-infrastruktur-03` (lender due diligence → financial close): ≈0,03. Clean time-axis separation; no due-diligence checklist item is repeated.
- vs `2026-08-pembiayaan-infrastruktur-01` (funding gap / sumber dana nasional): ≈0,03. The national-need figure appears **exactly once**, in the lead, as the brief permits.
- vs this month's `-01` (per-sector money profiles) and `-03` (regional disparity): no shared H2, no shared subtopic. Three distinct axes — lifecycle, sector, geography.
- Verdict: **distinct angle confirmed**

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran; `pembiayaan-infrastruktur-02.id.quality-input.json` written
- [x] AI-detector score < 0.30 — actual: **0.04** (verdict `pass`); external API not used, heuristic mode
- [x] Paragraph burstiness CV ≥ 0.30 — actual: **0.427** (improved from 0.401 by the paragraph split; scanner's own stricter target is 0.45, flagged `low`). Sentence burstiness 0.759; top-30 vocabulary share 0.287.
- [x] Plagiarism: distinctive passages web-checked; no non-PT PII verbatim hit ≥20 words — plagiarism score: **0.05**

**WebSearch budget: 3/3 used, all three executed.** Checked passages:
1. JSMR01 / Tol Jagorawi / Rp 2 triliun / 31 Agustus 2017 → no verbatim overlap; facts independently corroborated by Kompas, Detik Finance, Kemenko Perekonomian, and Mandiri Investasi. (Useful extra detail surfaced: the maximum securitisable value was Rp 2,6 triliun with Rp 2 triliun actually drawn — the article's "Rp 2 triliun" matches the dossier and the dominant reporting, so no change made.)
2. Kebutuhan 2025–2029 / USD 625 miliar / 40% → no verbatim overlap; **produced the scope correction** logged above.
3. Perpres 66/2024 / KETUPI / 14 jenis infrastruktur → no verbatim overlap; regulation existence, official title, and JDIH indexing confirmed; the 14-type list stays DJKN-attributed.

The remaining five candidate passages are attributed citations, regulation titles, or restatements of the JSMR01 fact already cleared in check 1; their queries are preserved in the `.quality-input.json` for a later session. Score 0.05 reflects genuine partial coverage (3 of 8 candidates verified live, the other 5 assessed as low-risk by category), not a clean-sheet assumption.
