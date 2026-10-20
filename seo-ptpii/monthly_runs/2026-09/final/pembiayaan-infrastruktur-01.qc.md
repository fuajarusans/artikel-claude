---
brief_id: "pembiayaan-infrastruktur-01"
editor_run_date: "2026-09-22"
recommendation: "approve"
overall_score: 9
ai_score: 0.00
plagiarism_score: 0.05
---

# Editor QC Report — Pembiayaan Infrastruktur per Sektor: Kenapa Tak Seragam

## Recommendation
**approve**

This draft arrived in unusually good shape: zero anti-AI pattern hits, zero em-dashes, paragraph burstiness CV 0.589, every figure already carrying a reference year and a scope, and the four national-figure scopes kept strictly apart (only the RPJMN 2025–2029 line is used, once, in the lead). The two binding cross-article problems were real and are both fixed in-place: the 17-word pre-approved positioning line was running verbatim against `jaminan-pemerintah-01` and has been rewritten (the closing cadence that mirrored `kpbu-01` went with it), and one sector-regulation reference had crept into the money table's Horizon cell — struck. I also removed one claim the dossier had explicitly flagged as unverifiable this session (that the Acuan Alokasi Risiko matrix is "disusun per sektor"; the 2025 PDF was unreachable), replacing it with the part of the Pasal 75 mandate I could confirm. Money-axis discipline holds throughout: no PJPK-identity column, no sector-regulation column, no pemda protagonist, no invented spread, basis point, DSCR, or cost-of-funds differential. PT SMI / PT IIF / LPEI / PT PII roles are stated correctly in the one place they appear. Word count lands at 1.789 of a 1.800 ceiling, so the remaining headroom is 11 words.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Zero pattern hits; paragraph CV 0.589, sentence CV 1.398; 6-, 9-, and 10-word paragraphs used as deliberate beats |
| Factual & penjaminan infrastruktur / KPBU accuracy | 9 | All figures carry year + scope; revoked Perpres 35/2018 handled correctly; one unverified claim struck |
| On-page SEO compliance | 9 | Meta 55/152 chars, slug 35, 5 body H2, 12 LSI terms, 3 internal + 6 external links |
| GEO extractability (§2a) | 9 | 44–48-word answers measured after all five H2s; 49-word definition snippet at ~word 120; `date_modified` added |
| PT PII framing discipline | 10 | 3 mentions incl. CTA; BUPI/SMV framing; no officials, no Danantara, no subsidy or commercial-risk implication, no claim-paid assertion |
| Internal linking | 8 | 3 distinct ptpii.co.id URLs, hub inline in the lead, no callouts; one anchor sits close to a sibling's (flagged) |
| FAQ quality | 9 | 7 Q&As, 44–55 words each, all traceable to the brief's PAA capture |
| Originality (plagiarism + AI-detector) | 9 | ai_score 0.00, no flags; 2 of 8 candidate passages web-checked (budget cap), no verbatim hit |

## What I fixed (changelog)
- **Cross-article duplicate (binding).** Rewrote the closing positioning sentence. The draft carried the `company_profile.md` line "Penjaminan pemerintah yang diterbitkan PT PII dirancang untuk meningkatkan kelayakan kredit proyek sekaligus memagari kewajiban kontinjensi APBN" **verbatim, 17 words, identical to `jaminan-pemerintah-01.id.md` line 129**. Replaced with a paraphrase of different structure ("PT PII menerbitkannya selaku BUPI, dengan dua efek sekaligus: kelayakan kredit proyek naik, dan kewajiban kontinjensi pemerintah tetap dipagari"). Also dropped the trailing "dan diskusinya paling produktif ketika…" clause, which mirrored `kpbu-01`'s "dan pembahasannya paling berguna ketika…" — three articles were closing on the same rhythm.
- **CTA final line rewritten.** All three September finals were ending on the same construction ("… dapat ditelusuri lebih jauh di ptpii.co.id"). This one now reads "Jika Anda ingin menelusuri cakupan risiko yang dapat dijamin pada proyek KPBU, titik awalnya ada di ptpii.co.id." Still soft, still last line.
- **Collision check — table.** Read side by side with `kpbu-01.id.md`. Columns are clean (Pembayar · Prediktabilitas · Kualitas kredit · Horizon · Pemicu biaya dana vs kpbu-01's PJPK · Dasar regulasi · Langkah kelembagaan). One creep found and struck: the Persampahan **Horizon** cell read "tenor spesifik belum terverifikasi dari **Perpres 109/2025**" — a sector-regulation reference inside the money table, and the same regulation kpbu-01 carries in its legal column. Now "angka tenor spesifik belum terverifikasi dari sumber primer".
- **Struck an unverified claim.** Body and FAQ #1 both asserted the Acuan Alokasi Risiko matrix is "disusun per sektor". The dossier flags the 2025 PDF as unopenable this session and says not to cite its sectoral matrix. One WebSearch confirmed the Pasal 75 mandate and that the guideline serves as the shared reference for PJPK, badan usaha, and financiers — so the sentence now states that, not the matrix's internal structure.
- **Hedged the availability-payment tenor.** Dossier confidence on Palapa Ring / SATRIA tenor is low-medium. Table now reads "Pola Palapa Ring dan SATRIA: sekitar 15 tahun pasca-konstruksi"; FAQ #6 now "dilaporkan berjalan sekitar 15 tahun".
- **Closed the last year-less figure.** "70–80% utang dan 20–30% ekuitas (portal KPBU Kementerian Keuangan)" → added "diakses September 2026" (the portal page is undated; the dossier fetched it 2026-09-17).
- **Corrected a loose attribution.** "Dokumen KPBU menyebut masa kerja sama 15–30 tahun" → "Publikasi resmi 2026 menyebut…" in two places; the 15–30 range comes from a PT PII page, not a generic KPBU document.
- **Grammar/flow.** Fixed the ungrammatical BPPSPAM clause ("kesehatan keuangan PDAM yang 58% di antaranya…" → "…yang pada data 2019 menunjukkan 58% di antaranya…"); split the four-comma lead sentence so the hub link no longer reads as bolted on.
- **Frontmatter.** Added `date_modified: "2026-09-22"` (§2a freshness; both siblings already had it); `word_count` synced to 1789.

## What I flagged (open issues)
- ⚠️ **"Tujuh sektor" vs eight sector names on ptpii.co.id/informasi-proyek.** The article uses PT PII's own "tujuh sektor" framing and never enumerates, which is the correct handling — but the source page's own inconsistency is unresolved. *Recommendation*: raise with the client; it will bite any future article that tries to list the sectors.
- ⚠️ **BPPSPAM 42% is 2019 data (7 years old).** A WebSearch this run also surfaced a pu.go.id page citing a 2017 assessment at 53% healthy of 378 PDAM — different year, different denominator, not a contradiction, but it shows the series moves. *Recommendation*: the "(BPPSPAM 2019)" label must never be softened to "saat ini"; refresh the figure when newer data is published.
- ⚠️ **Anchor near-collision.** "kerangka public private partnership di Indonesia" is one word from `jaminan-pemerintah-01`'s "praktik public private partnership di Indonesia". Kept because the brief specifies it verbatim. *Recommendation*: strategist should diversify the /public-private-partnership anchor next month; three near-identical anchors would be a real over-optimization signal.
- ⚠️ **Portfolio non-conflation caveat now runs in all three September finals** (three distinct phrasings: "dua besaran berbeda, bukan satu angka" / "Dua angka terakhir kerap tertukar" / "Nilai proyek bukan nilai penjaminan"). Factually required and not verbatim, but it is at the limit. *Recommendation*: next month, carry it in one article only.
- ⚠️ **11 words of headroom** (1.789 / 1.800). Any curator- or client-side addition must remove something first.
- ⚠️ **WebSearch budget spent: 3/3** (1 fact verification on Acuan Alokasi Risiko, 2 plagiarism probes). Six of eight candidate passages were **not** web-checked; their queries are preserved in `pembiayaan-infrastruktur-01.id.quality-input.json` for a later session. The plagiarism score below reflects partial verification and is stated as such, not as a clean full sweep.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — 0 hits
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — 0 occurrences anywhere
- [x] No "Penting untuk dicatat / dipahami bahwa" — 0 hits
- [x] "Dengan demikian" not overused — 0 hits
- [x] Em-dash count ≤2 — **0**
- [x] Varied paragraph lengths — body paragraph words range 6–110; CV 0.589
- [x] Not every H2 → 3-bullet list — H2 #1 numbered list, #2 prose only, #3 table, #4 prose + bullets, #5 prose only
- [x] No generic claims without numbers — 10+ dated figures inline
- [x] No stacked hype adjectives — 0 hits on canggih/terdepan/terbaik/seamless/revolusioner
- [x] No service-dump paragraph — one product named (Penjaminan Pemerintah), in the closing
- [x] No press-release register — checked the closing and the PT PII aside specifically; both stay analytical

### B. Factual & penjaminan infrastruktur / KPBU spot-check
| Claim | Source check | Verdict |
|---|---|---|
| Kebutuhan RPJMN 2025–2029 ≈USD 625,37 miliar ≈ Rp 10.146–10.303 triliun, APBN+APBD ≈40% (DJKN, 2025) | dossier ✓ (djkn.kemenkeu.go.id, 1 Juli 2025) — scope *infrastruktur RPJMN*, stated once, in the lead | pass |
| PMK 68/2024 berlaku 18 Oktober 2024; Pasal 75 mewajibkan BUPI menerbitkan Acuan Alokasi Risiko tahunan | dossier ✓ + product/company_profile ✓ + WebSearch confirmation of the Pasal 75 mandate and its use by PJPK, badan usaha, dan pemberi pinjaman | pass (sector-matrix claim struck) |
| Perpres No. 109 Tahun 2025 ditetapkan 10 Oktober 2025, mencabut Perpres No. 35 Tahun 2018 | dossier ✓ (peraturan.bpk.go.id, direct fetch) — the revoked 35/2018 is never cited as live law | pass |
| Portofolio 61 proyek (38 KPBU + 23 non-KPBU), tujuh sektor, nilai investasi > Rp 732 triliun, **nilai penjaminan Rp 113 triliun**, posisi Juni 2026 | company_profile.md ✓ + dossier ✓ — the two values are labelled separately and an explicit non-conflation sentence follows | pass |
| Hanya 42% PDAM berkategori sehat (data BPPSPAM 2019); 58% kurang sehat/sakit | dossier ✓ (sim.ciptakarya.pu.go.id/bppspam) — year label explicit in body, table, and FAQ; internally consistent (42+58) | pass |
| Tarif tol dievaluasi dua tahunan atas dasar inflasi + SPM (Kementerian PU, 2026) | dossier ✓ (bpjt.pu.go.id FAQ, direct fetch). PP 23/2024 was **medium** confidence and the article correctly never cites it | pass |
| PSEL Legok Nangka = satu-satunya proyek KPBU persampahan yang dijamin, hingga Juni 2026 | company_profile.md approved project list ✓ | pass |

Figure-scope audit (the four that must never be conflated): Rp 10.146–10.303 triliun appears **once**, with scope and year. Rp 1.905,3 triliun, Rp 47.587,3 triliun, and Rp 544,48 triliun appear **zero times** — confirmed by grep. No invented spread, basis point, DSCR, or cost-of-funds differential — grep clean; the three cost-of-funds drivers stay qualitative (margin, tenor, covenants). No named officials — grep clean. No Fitch reference, no Danantara, no PT PII-as-lender phrasing.

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: **55** chars, keyword at position 0
- [x] Meta description 140–160 — actual: **152**
- [x] Slug ≤60, kebab-case, keyword — actual: `pembiayaan-infrastruktur-per-sektor` (35)
- [x] H1 contains keyword
- [x] H2 count 4–5 — actual: **5** body H2 (+ FAQ + Kesimpulan)
- [x] ≥1 question-format H2 (2: #1, #2); ≥1 honest/counter-conventional H2 (#5, plus #4 on thin precedent)
- [x] Keyword in first 100 words — word 46
- [x] Definition snippet near top — **49 words**, begins ~word 120
- [x] ≥8 LSI terms — counted: **12** of 12 secondary keywords present
- [x] 3 internal links (1 hub + 2 cousins) — `/pembiayaan-kreatif` (lead), `/public-private-partnership` (H2 #1), `/kpbu` (H2 #3); zero institute.iigf.co.id; zero "BACA JUGA"
- [x] ≥1 external authoritative citation — actual: **6** (JDIH Kemenkeu, BPJT, BPPSPAM, portal KPBU Kemenkeu, peraturan.bpk.go.id, World Bank)
- [x] FAQ 5–7 Q&As — actual: **7**, each 44–55 words
- [x] ≥1 list + ≥1 table — numbered list, bulleted list, one 6-column table
- [x] Word count inside band — actual: **1.789** (band 1.500–1.800)

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — measured: **45 / 48 / 45 / 44 / 44** words for H2 #1–#5
- [x] Each body paragraph makes one independently quotable point — the one-line beats ("Dua proyek, dua pertanyaan yang sama sekali berbeda.", "Sektor mengubah bentuk risiko. Ia tidak mengubah kualitas proyek.") are deliberate and self-contained
- [x] FAQ parseable for FAQPage schema (`###` question + single answer block); `date_modified: 2026-09-22` added to the meta block

### D. PT PII framing discipline (product_matrix.md + style_guide §11)
- [x] Framed as the government-guarantee provider (BUPI, SMV Kementerian Keuangan) — not lender, investor, contractor, operator, regulator; not under Danantara
- [x] ≤3 PT PII self-mentions — actual: **3** (FAQ #7, Kesimpulan, CTA). The portfolio paragraph deliberately says "data portofolio BUPI" to avoid a fourth
- [x] No unverifiable superlatives — none
- [x] Product names match product_matrix.md / dossier — only "Penjaminan Pemerintah", correctly described
- [x] PT SMI / PT IIF lend and invest, LPEI finances exports, PT PII guarantees — verified at every occurrence (FAQ #7 is the only place the distinction is drawn, and it is correct)
- [x] Never implies the guarantee covers commercial risk or is a subsidy; never asserts a claim has been paid — "Ia bukan subsidi, tidak menanggung risiko komersial badan usaha, dan umumnya disertai hak regres"
- [x] Closing uses a company_profile.md positioning line — paraphrased, **not** stacked verbatim (see changelog)
- [x] Soft website CTA is the FINAL line, after `## Kesimpulan`, consultative in tone
- [x] Hub link is a natural inline anchor in the lead, descriptive, no callout

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: `2026-08-pembiayaan-infrastruktur-01` — *Siapa yang Menutup Kekurangan Dana Nasional*
- Subtopic overlap (Jaccard estimate): **0,18 counting FAQ entries; ~0,05 body-only** vs August -01 · **0,11** vs -02 (corporate vs project finance) · **0,08** vs -03 (credit committee)
- The only real contact points are two FAQ answers the brief explicitly ordered (70–80/20–30 debt-equity as one context line, and "perusahaan pembiayaan vs penjamin", which autosuggest demands). Neither becomes a section. August's burned axes stay burned: no source-composition map, no funding-gap scope debate, no corporate-vs-project-finance choice, no SPV/recourse/DSCR (grep confirms zero occurrences), no due-diligence checklist.
- Cluster boundaries respected: penjaminan appears only as a credit-enhancement layer (Jaminan Pemerintah cluster keeps guarantee mechanics); no pemda is the protagonist anywhere, including the PSEL and SPAM passages, where the actor is consistently the lender or the payer's balance sheet (Pembiayaan Kreatif cluster keeps the APBD angle).
- Same-month collision with `kpbu-01`: tables read side by side, no legal/institutional column present, one Perpres reference struck from a money cell. Both articles state the Perpres 35/2018 → 109/2025 replacement, which is unavoidable and framed to opposite conclusions (kpbu-01: regulation was the constraint; here: regulation strengthened, price and precedent are the constraint). No verbatim run ≥20 words between the two.
- Verdict: **distinct angle confirmed**

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran twice (pre- and post-edit); `pembiayaan-infrastruktur-01.id.quality-input.json` written
- [x] AI-detector score **0.00** (revise ≥0.30, reject ≥0.50) — verdict pass, **0 flags**, `external_api_used: false`
- [x] Paragraph burstiness CV **0.589** (threshold 0.30); sentence burstiness 1.398; top-30 vocab share 0.272
- [~] Plagiarism: **2 of 8** candidate passages web-checked against the 3-call cap — the definition snippet ("Pembiayaan infrastruktur adalah rangkaian cara mendanai pembangunan dan operasi aset publik…") and the SPAM/PDAM passage. Neither returned a verbatim match; results were topically related pages only, and the most-cited neighbours (kpbu.kemenkeu.go.id, pu.go.id, ptpii.co.id) are cited sources anyway. No non-PT PII verbatim hit ≥20 words found. **plagiarism_score: 0.05 — low, but on partial coverage**; the remaining six queries are preserved in the JSON for a future session.
