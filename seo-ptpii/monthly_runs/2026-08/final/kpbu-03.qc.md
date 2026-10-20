---
brief_id: "kpbu-03"
editor_run_date: "2026-08-12"
recommendation: "approve"
overall_score: 9
ai_score: 0.00
plagiarism_score: 0.05
---

# Editor QC Report — KPBU dan Pembagian Risiko: Siapa Menanggung Apa dalam Kontrak

## Recommendation
**approve**

The draft arrived in unusually good shape for the highest-boundary-risk brief of the month, and the three failure modes this article was most likely to hit were all avoided by the writer: no H2 is built on guarantee mechanics, the "siapa menanggung apa" framing stays here as the strategist reserved it, and the 11 risk categories are attributed to the national taxonomy at Simpul KPBU (Kementerian PU) rather than to PT PII's own *Acuan Alokasi Risiko* PDF, which research never opened. I made eight in-place fixes. The one that mattered factually was removing an unsourced composition figure ("APBN dan APBD ... kira-kira 40 persen") that the dossier had explicitly flagged as unverifiable and self-contradictory across sources; it is replaced with the dossier-approved total range plus an honest note that the private-sector share has no uniform public reference. The rest were GEO band, attribution softening, a second authoritative outbound link, and paragraph-rhythm work that took the heuristic AI score from 0.04 to 0.00 and burstiness from CV 0.364 to 0.462. One honest limitation is recorded below: the plagiarism verdict is heuristic-only because the session's WebSearch budget was exhausted (200/200), so no candidate passage could be checked live.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Zero §5 patterns. 0 em-dashes, no "Selain itu"/"Penting untuk dicatat"/"Dengan demikian". Paragraph CV 0.462, sentence CV 1.094. Practitioner asides ("di meja *lender*", "kepastian palsu") carry real voice. |
| Factual & penjaminan infrastruktur / KPBU accuracy | 9 | All five spot-checks trace to the dossier or `company_profile.md`. One unverifiable figure removed rather than hedged. Every remaining number carries a reference year and scope. |
| On-page SEO compliance | 9 | Meta title 47, description 147, slug 42. 5 body H2 (2 question-format, 1 counter-conventional), 3 internal + 2 external links, 6 FAQ, table + bulleted + numbered list. 1.724 kata. |
| GEO extractability (§2a) | 9 | All five body H2 openers land 44–48 words. Definition snippet 49 words inside the first ~150. FAQ answers 43–46 words, all self-contained. `date_modified` added. |
| PT PII framing discipline | 10 | Two named mentions + the CTA = 3 exactly. BUPI / SMV Kementerian Keuangan framing correct, no lender/investor/operator/regulator drift, no Danantara, no officials, no superlatives. |
| Internal linking | 10 | Exactly 3 distinct `ptpii.co.id` URLs, all inline, hub in the lead, no "BACA JUGA", zero links to `institute.iigf.co.id`. |
| FAQ quality | 9 | 6 Q&As drawn from the brief's PAA list, each 43–46 words, each answerable without the body text. |
| Originality (plagiarism + AI-detector) | 8 | `ai_score` 0.00 with zero flags. Plagiarism heuristic-only — WebSearch unavailable this session, so the score is an assessed estimate, not a verified lookup. |

## What I fixed (changelog)
- **Removed an unverifiable figure.** "…dengan APBN dan APBD diperkirakan menutup kira-kira 40 persen" deleted (dossier Flags #1: composition percentages could not be verified and conflict across sources). Replaced with the dossier-approved total, "kisaran Rp 10.000–10.350 triliun atau sekitar USD 625 miliar" (RPJMN 2025–2029), plus an explicit statement that the badan-usaha share has no uniform public reference.
- **Softened the *Acuan Alokasi Risiko* attribution.** "Kerangka inilah yang menjadi tulang punggung Acuan Alokasi Risiko" → "Taksonomi yang sama menjadi kerangka Acuan Alokasi Risiko", so the 11 categories read as the national taxonomy (Simpul KPBU, linked and dated) and not as a quotation from a 12,5 MB PDF nobody opened.
- **Added a second authoritative external link** — portal KPBU Kementerian Keuangan ("KPBU bukan Privatisasi/Swastanisasi"), a URL already declared in `external_citations` and directly fetched by the researcher.
- **Brought H2 #5 into the GEO band** — opening answer extended 39 → 46 words; all five body H2s now sit inside 40–60.
- **Split the kewajiban-kontinjensi paragraph** so the single passing guarantee mention stands alone and states the two non-negotiables as clean declaratives: "Ia bukan subsidi, dan ia tidak menghapus risiko komersial badan usaha."
- **Paragraph-rhythm pass** — two short bridging paragraphs added (after the matrix table, after the Acuan paragraph), the RPJMN block split, list lead-in lengthened. Burstiness CV 0.364 → 0.462 (target ≥0.45); `ai_score` 0.04 → 0.00, flags 1 → 0.
- **EYD** — "dilindungnilaikan" → "ditutup dengan lindung nilai" (FAQ #3).
- **Frontmatter** — `date_modified: "2026-08-12"` added (GEO freshness; matches the house convention used in the sister project); `word_count` corrected 1707 → 1724, verified with `tools/count_words.py`.

## What I flagged (open issues)
- ⚠️ **Plagiarism verdict is heuristic-only.** The session's WebSearch budget was exhausted (200/200) before this run, so none of the 8 candidate passages could be checked against live search. *Recommendation*: treat `plagiarism_score: 0.05` as an assessed estimate. If the curator wants a verified pass before publishing, re-run `tools/quality-check.ps1` in a fresh session and WebSearch the 8 queries in `kpbu-03.id.quality-input.json`. My assessment of why the risk is low is in section F.
- ⚠️ **World Bank PPP Knowledge Lab is attributed in text but deliberately not hyperlinked.** The dossier could only reach that page through search snippets (direct fetch 403), and I could not re-verify the exact URL path this session. The URL remains in `external_citations`. *Recommendation*: verify `https://ppp.worldbank.org/public-private-partnership/translating-risk-allocation-contract-structure` resolves before the CMS publishes the citation list; if it 404s, drop that entry rather than guessing a path.
- ⚠️ **PMK 68/2024 Pasal 75 is medium-confidence in the dossier** (literal article text never rendered). The article paraphrases the mandate with no Pasal number and no quotation marks, and `company_profile.md` records the same mandate as established, so I treated it as safe. Noting it so it is not later mistaken for a verbatim citation.
- ℹ️ **Stray artifact**: `monthly_runs/2026-08/drafts/kpbu-03.id.quality-input.json` is left over from the pre-edit smoke test. The authoritative file is the one in `final/`. Safe to delete.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — 0 matches
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — 0 occurrences anywhere
- [x] No "Penting untuk dicatat / dipahami bahwa" — 0
- [x] "Dengan demikian" not overused — 0
- [x] Em-dash count ≤2 — actual: 0 (the 2 en-dashes are numeric ranges: 2025–2029, 10.000–10.350)
- [x] Varied paragraph lengths — 12 to 82 words; CV 0.462
- [x] Not every H2 → 3-bullet list — one bulleted list, one numbered list, one table, the rest prose
- [x] No generic claims without numbers — every claim carries either a number with its year or an explicit "tergantung" qualifier
- [x] No stacked hype adjectives — none present
- [x] No service-dump paragraph — single anchor (Penjaminan Pemerintah), used once at the close
- [x] No press-release register — no "dalam rangka", no "sebagai wujud komitmen"

### B. Factual & penjaminan infrastruktur / KPBU spot-check
| Claim | Source check | Verdict |
|---|---|---|
| "Taksonomi 11 kategori risiko … Simpul KPBU Kementerian Pekerjaan Umum … (diakses 2026)" with all 11 names listed | dossier fact #5 (high — direct fetch of `simpulkpbu.pu.go.id/pages/risiko/kategori-risiko`, 12 Aug 2026); names match one-for-one | pass |
| "PMK No. 68 Tahun 2024, berlaku sejak 18 Oktober 2024, memandatkan … peninjauannya sedikitnya sekali dalam 12 bulan" | dossier fact #7 (high — JDIH Kemenkeu direct fetch) + fact #8 (medium, paraphrase only) + `company_profile.md` legal-basis table ✓; no Pasal number, no quotation marks in the article | pass |
| "Perpres No. 38 Tahun 2015 … masih berstatus berlaku per pemeriksaan Agustus 2026" | dossier fact #1 (high — `peraturan.go.id` direct fetch) + `company_profile.md` ✓ Berlaku | pass |
| "Availability Payment → fluktuasi permintaan berpindah ke pemerintah; user charge → risiko tetap di badan usaha (portal KPBU Kementerian Keuangan, 2026)" | dossier fact #10 (high) + matrix row in the dossier's data table | pass |
| "RPJMN 2025–2029 … kisaran Rp 10.000–10.350 triliun atau sekitar USD 625 miliar" | dossier fact #16 (medium — range consistent, precision varies) + Flags #1 | pass **after fix** — the unverifiable 40% composition claim was removed by me |
| Bonus: "Edisi terbarunya terbit pada 2025" (Acuan Alokasi Risiko) | dossier fact #6 (high — `ptpii.co.id/alokasi-risiko` direct fetch) | pass |

Article-specific risk register from the brief, re-verified line by line:
- 11 categories attributed to the national taxonomy, not to PT PII's PDF — **confirmed** (fixed further, see changelog).
- The 3 categories without a sourced bearer stay contextual — **confirmed**: "**Tanpa jawaban baku**: konektivitas jaringan, *interface*, dan kepemilikan aset", plus "Jawaban jujurnya memang 'tergantung'".
- "Risiko terminasi dini" not treated as a standalone category — **confirmed**: absent from the matrix, handled narratively as "konsekuensi lintas kategori".
- Force majeure not hardened into a fixed rule — **confirmed**: matrix reads "Tergantung klausul dan jenis kahar / Tidak ada kaidah pembagian tunggal", reinforced in H2 #5.
- No project's risk event, claim, or outcome asserted — **confirmed**: Palapa Ring, SPAM Umbulan, PSEL Legok Nangka appear once, purely as sector-diversity illustrations.
- "86,65% swasta" — **absent**. Pasal number pinned to Perpres 38/2015 for land — **absent**.
- Guarantee is not a subsidy and does not erase commercial risk — **stated, and strengthened** into its own two-clause declarative rather than a trailing subordinate.
- Every figure carries a reference year and scope; no named officials anywhere (grep-verified against Direktur/Komisaris/Danantara).

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: **47** chars / keyword at position **0**
- [x] Meta description 140–160 — actual: **147**
- [x] Slug ≤60, kebab-case, keyword — actual: `kpbu-pembagian-risiko-siapa-menanggung-apa` (**42**)
- [x] H1 contains keyword — "KPBU dan Pembagian Risiko: Siapa Menanggung Apa dalam Kontrak"
- [x] H2 count 4–7 — actual: **7** (5 body + FAQ + Kesimpulan)
- [x] ≥1 question-format H2 (2: "Apa itu alokasi risiko…?", "Apa saja kategori risiko…?"); ≥1 honest/counter-conventional H2 ("Tiga salah kaprah…")
- [x] Keyword in first 100 words — first sentence; also in the last body paragraph of Kesimpulan
- [x] Definition snippet near top (40–60 words) — **49** words, blockquote, ~line 3 of the body
- [x] ≥8 LSI terms — counted **14**: alokasi risiko KPBU · PJPK · badan usaha pelaksana · Availability Payment · user charge · kahar/*force majeure* · *bankability* · *financial close* · kewajiban kontinjensi · risiko lokasi · risiko politik · matriks alokasi risiko · BUPI · *lender*
- [x] 3 internal links (1 hub + 2 cousins) — `ptpii.co.id/kpbu` (lead, "proyek KPBU") · `/public-private-partnership` (H2 #1) · `/pembiayaan-kreatif` (H2 #4). 3 distinct URLs, all inline, no callout box
- [x] ≥1 external authoritative citation — actual: **2** inline (Simpul KPBU / Kementerian PU; portal KPBU Kementerian Keuangan). Zero links to `institute.iigf.co.id`
- [x] FAQ 5–7 Q&As — actual: **6**
- [x] ≥1 list + ≥1 table — 1 bulleted list, 1 numbered list, 1 nine-row matrix table
- [x] Word count inside the brief's band (1.500–1.800) — actual: **1.724** (`tools/count_words.py`), frontmatter synced

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — measured: **47 · 47 · 48 · 44 · 46** words. (Kesimpulan opens at 71 words; a conclusion is a synthesis, not an extraction target, so it is intentionally exempt.)
- [x] Each body paragraph makes one independently quotable, verifiable point — the matrix is row-by-row extractable, and the AP-vs-user-charge, "terminasi dini", and "bukan subsidi" passages each stand alone
- [x] FAQ parseable for FAQPage schema (`### question` → single-paragraph answer, 43–46 words each); freshness surfaced via `date_modified: "2026-08-12"` in the meta block

### D. PT PII framing discipline (product_matrix.md + style_guide §11)
- [x] Framed as the government-guarantee provider (BUPI) under Kementerian Keuangan — not a lender, investor, contractor, operator, or regulator; no Danantara reference anywhere
- [x] ≤3 PT PII self-mentions — actual: **3** (H2 #3 credential aside; Kesimpulan positioning line; the closing `ptpii.co.id` CTA). FAQ #5 deliberately uses the generic lowercase "badan usaha penjaminan infrastruktur" so it does not consume a fourth slot
- [x] No unverifiable superlatives — grep-clean for terbaik/nomor satu/terdepan/canggih
- [x] Product names match `product_matrix.md` / dossier — the single anchor is **Penjaminan Pemerintah**, correct for a risk/bankability/KPBU-contract article
- [x] Closing uses a `company_profile.md` positioning line — "sebagai Badan Usaha Penjaminan Infrastruktur di bawah Kementerian Keuangan, PT PII menjembatani kebutuhan kepastian investor dengan kemampuan fiskal negara"
- [x] Soft website CTA is the FINAL line, after the conclusion — "…dapat Anda telusuri lebih jauh di ptpii.co.id." Consultative, no "beli sekarang"
- [x] Hub link is a natural inline anchor in the lead ("memetakan alokasi risiko dalam [proyek KPBU]") — no "BACA JUGA" callout

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: **none yet** — `articles_history/index.json` has `"articles": []`
- Same-month sibling comparison (the real risk for this brief):

| Sibling | Its territory | Subtopic overlap (Jaccard est.) |
|---|---|---|
| `jaminan-pemerintah-01` | coverage map: what is and is not guaranteed, three guarantee stages | **0.09** |
| `jaminan-pemerintah-03` | claim flow, hak regres, ring-fence, "bukan subsidi" as a full H2 | **0.08** |
| `kpbu-01` | six KPBU process stages, PJPK, Permen PPN 7/2023 | 0.05 |
| `kpbu-02` | KPBU vs APBN, Value for Money, when KPBU is not appropriate | 0.05 |

- **Boundary verdict: distinct angle confirmed.** No H2 in this article is built around guarantee mechanics. Zero mentions of the three guarantee stages, hak regres, ring-fence, or any covered/not-covered list. The guarantee appears in exactly one two-sentence paragraph as the transition the brief permits, plus one clause in the FAQ and the closing anchor. The reserved phrase "siapa menanggung apa" lives here and nowhere else. `jaminan-pemerintah-03` owns "bukan subsidi" as an H2; here it is one sentence inside a contractual-allocation argument, which is the correct division.

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran on the **saved final**; `monthly_runs/2026-08/final/kpbu-03.id.quality-input.json` written
- [x] AI-detector score < 0.30 — actual: **0.00**, verdict `pass`, **0 flags** (first run on the polished file returned 0.04 with one low flag; fixed in-place and re-run, as required)
- [x] Paragraph burstiness CV ≥ 0.30 — actual: **0.462** (also clears the tool's stricter ≥0.45 target). Sentence burstiness 1.094; top-30 vocab share 0.331
- [ ] Plagiarism: distinctive passages web-checked — **NOT PERFORMED. WebSearch budget was exhausted (200/200) before this run; one call was attempted and refused.** No lookup was run, and none is claimed. Assessed **plagiarism_score: 0.05** on heuristic grounds only:
  - Of the 8 extracted candidates, 3 are enumerations of official category names or a statutory role definition ("menteri, kepala lembaga, atau kepala daerah") — unavoidable terminology, attributed inline to Simpul KPBU with an access year, and not continuous ≥20-word prose blocks.
  - 2 are Availability Payment / user charge explanations written as analysis ("bukan atas jumlah pemakai, sehingga fluktuasi permintaan berpindah ke pemerintah"), not as the regulatory definition, and the underlying definition is a well-known one in any case.
  - 1 is the PT PII credential sentence — a hit there would land on `ptpii.co.id`, which is excluded by rule.
  - 1 is the PMK 68/2024 paraphrase, which by construction cannot be verbatim: the researcher never rendered the literal article text.
  - 1 is the Palapa Ring / SPAM Umbulan / PSEL Legok Nangka comparison, an original synthesis with no plausible source.
  - The article carries no block quotations and no long regulatory passages, the structural pattern that normally trips the scan.
