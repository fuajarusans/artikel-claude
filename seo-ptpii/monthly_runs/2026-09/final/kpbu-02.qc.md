---
brief_id: "kpbu-02"
editor_run_date: "2026-09-21"
recommendation: "approve"
overall_score: 9
ai_score: 0.04
plagiarism_score: 0.05
---

# Editor QC Report — Prastudi Kelayakan KPBU: 5 Kajian Penentu Nasib Proyek

## Recommendation

**approve**

This draft arrived in unusually good shape and, critically, it protected its own hedge. The five-kajian spine — the one thing two consecutive research cycles could not confirm against the Permen PPN/Bappenas 7/2023 lampiran — is attributed as "umumnya dijelaskan mencakup" and carries an explicit honesty paragraph naming the sourcing limitation. The rejected competing list ("Kajian Strategis/Ekonomi/Komersial/Finansial/Manajemen") appears nowhere. The 8→5 item-by-item mapping table is absent; only the direction of consolidation is stated, and it is marked "dilaporkan". Perpres 75/2014 is never cited. Every figure carries a reference year and its scope, and both toll-road figures are attributed to Kompas, dated 12 April 2026, with an in-text caveat that they are single-sourced. I made five in-place fixes — the largest being a precision error in the definition snippet that conflated the five-kajian axis with the OBC→FBC axis, and a rebuild of a 104-word conclusion block into three paragraphs with tighter PT PII framing. AI-detector 0.04, no verbatim plagiarism hits across three exact-phrase lookups. It is curator-ready.

## Quality scores

| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Zero em-dashes, zero banned openers, zero press-release register. Paragraph lengths run 12–78 words; sentence counts run 1–7. "Reviu internal memeriksa kelengkapan; pasar memeriksa asumsi" is a practitioner line, not an AI line. |
| Factual & penjaminan infrastruktur / KPBU accuracy | 9 | All five spot-checked claims trace to the dossier. Loses a point only because the article's spine is inherently secondary-sourced — correctly so, and correctly disclosed. |
| On-page SEO compliance | 9 | Meta title 48 chars (keyword at char 20), description 153, slug 35. 20 LSI terms. One table where the format mix would tolerate two. |
| GEO extractability (§2a) | 10 | Direct answers of 45/48/48/43/44 words after all five body H2s and 44 after `## Kesimpulan`; 57-word definition snippet inside the first ~150 words; six FAQ answers at 43–53 words. |
| PT PII framing discipline | 10 | Two self-mentions (closing + CTA). Framed as penjamin/BUPI reading the document, explicitly "bukan dari sisi penyusunnya". No named officials, no Danantara, no Fitch, no claim-paid assertion. |
| Internal linking | 10 | Three distinct ptpii.co.id URLs, all inline, hub in the lead. Anchors differ from August's and from both September siblings. |
| FAQ quality | 9 | Six Q&As, all self-contained and FAQPage-parseable. The dossier's eighth Q&A (the one that attributed the five names to Permen 7/2023) was correctly dropped. |
| Originality (plagiarism + AI-detector) | 10 | ai 0.04; three exact-phrase web lookups returned no verbatim match. |

## What I fixed (changelog)

- **Definition snippet — precision error.** "Isinya kini disederhanakan menjadi lima kajian utama, mulai dari kajian awal (OBC) hingga kajian akhir (FBC)" read as if the five kajian *run from* OBC to FBC. They are two different axes (content categories vs depth stages), and the article itself says so 25 lines later. Rewritten to "Isinya kini umumnya dijelaskan mencakup lima kajian utama, dan disusun bertahap dari kajian awal (*Outline Business Case*) ke kajian akhir (*Final Business Case*)". This also aligns the snippet's attribution strength with the body's hedge — the snippet was the only place in the article asserting the five-kajian count flatly, and it is the passage most likely to be lifted into an AI Overview.
- **Conclusion — 104-word single block split into three paragraphs.** It was the one monotony spike in an otherwise well-varied article, and it buried the portfolio figures mid-sentence behind a colon.
- **PT PII framing sharpened.** "PT PII membaca dokumen ini dari kursi evaluator" → "PT PII membaca prastudi kelayakan dari sisi penjamin, bukan dari sisi penyusunnya." "Evaluator" sat uncomfortably close to regulator framing; the replacement states the guarantor role and simultaneously preserves the dossier's explicit distinction that PT PII is a *reader* of this document, not its author. Portfolio figures restated as "portofolio penjaminannya" so the 61-project count is unambiguously the guarantee portfolio.
- **Kompas citation made clickable.** The 12 April 2026 report was named and dated in-text but not linked, even though it is the single source for the article's only hard cost evidence. Added the inline hyperlink (it was already in the frontmatter `external_citations`).
- **"Biayanya nyata dan terdokumentasi" → "Biayanya bukan hipotetis."** The original oversold a single media source as documentation, two sentences before the article admits it is single-sourced. Removing the tension protects the hedge.
- **Frontmatter:** added `date_modified: "2026-09-21"` (GEO §2a freshness, matching the convention established in the August finals); synced `word_count` 1650 → **1683** per `count_words.py`.

## What I flagged (open issues)

- ⚠️ **The five-kajian names remain secondary-sourced.** Two consecutive research cycles (6 WebSearch + ~22 WebFetch this month) failed to reach the Permen PPN/Bappenas 7/2023 lampiran primary text. The article handles this correctly and honestly, but the ceiling on this article's authority is set by that gap. *Recommendation*: a human opening **https://peraturan.bpk.go.id/Download/329421/2023pmppn007.pdf** (89 pages, exceeds WebFetch's size limit; the BPK "Read" viewer returns no extractable text) could confirm the five names verbatim and upgrade the hedge to a firm lampiran citation before publication. That is a five-minute manual check with a real payoff — it would make this the only accessible page on the Indonesian web that states the current structure with primary backing. **Do not upgrade the hedge without that check.**
- ⚠️ **Tol Gilimanuk–Mengwi and Tol Getaci are single-sourced to Kompas, 12 April 2026**, not cross-checked against a BPJT/Kementerian PU release. The article discloses this in-text ("Keduanya berasal dari satu pemberitaan dan belum dikonfirmasi silang ke rilis resmi"), which is the right call. *Recommendation*: no action; if a BPJT release later corroborates, the caveat sentence can be dropped on refresh.
- ⚠️ **Permen PPN/Bappenas 9/2025 content is unverified for a third consecutive cycle.** The article names it by number and date only and says its content "perlu dibaca langsung pada teks peraturan" — correct. *Recommendation*: if a future run ever extracts its pasal text, this paragraph is the place to revisit.
- ⚠️ **Paragraph burstiness CV = 0.395.** Above my binding floor (0.30) and the script rates it `[low]` severity only, but below the script's own soft target of 0.45. *Recommendation*: none — forcing more variance here would mean padding or amputating paragraphs that currently each carry one clean quotable point. Noted for transparency, not as a defect.
- ℹ️ **Word-count tooling disagrees**: `count_words.py` = 1683 (binding, synced to frontmatter); `quality-check.ps1` = 1715 (different tokenizer, counts link syntax). Both sit inside the 1.500–1.800 band, so the discrepancy is cosmetic.
- ℹ️ **One table, not two.** Format mix passes (1 table + 1 numbered list + 1 bullet list + 6 FAQ pairs), and adding a second table here would most naturally be the 8→5 mapping — which is exactly the table the dossier forbids. Deliberately left as one.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)

- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — 0 occurrences
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — 0 occurrences of "Selain itu" anywhere
- [x] No "Penting untuk dicatat / dipahami bahwa" — 0 occurrences
- [x] "Dengan demikian" not overused — 0 occurrences
- [x] Em-dash count ≤2 — **0**. (2 en-dashes, both inside the proper noun "Gilimanuk–Mengwi" — not a stylistic tell.)
- [x] Varied paragraph lengths — body paragraphs run 12–78 words; sentence counts 1, 2, 3, 4, 5, 7. Passes §5's hardest test.
- [x] Not every H2 → 3-bullet list — H2 #1 prose, #2 numbered list after a prose answer, #3 prose + table, #4 all prose, #5 prose + 4 bullets + prose
- [x] No generic claims without numbers — 16 distinct figures/dates, each with its year
- [x] No stacked hype adjectives — "canggih / terdepan / revolusioner / terbaik / nomor satu": 0 occurrences
- [x] No service-dump paragraph — one anchor only (Penjaminan Pemerintah); no product list
- [x] No press-release register ("Dalam rangka", "Sebagai wujud komitmen") — 0 occurrences
- [x] No "Sebagai kesimpulan" opener — conclusion opens on a callback to the lead's thesis

### B. Factual & penjaminan infrastruktur / KPBU spot-check

| Claim | Source check | Verdict |
|---|---|---|
| "Payung hukumnya Perpres No. 38 Tahun 2015" — current legal umbrella for KPBU | dossier Core Fact #1 (peraturan.go.id primary text, captured 2026-09-17, confidence high) ✓ + product_matrix ✓ | **pass** |
| "Permen PPN/Kepala Bappenas No. 7 Tahun 2023 yang tercatat berlaku dalam register JDIH" + "Permen PPN No. 4 Tahun 2015 jo. No. 2 Tahun 2020 … sudah dicabut oleh Permen PPN/Bappenas No. 7 Tahun 2023" | dossier Core Fact #2 (confidence high); linked inline to peraturan.bpk.go.id/Details/271431 ✓ | **pass** |
| "Permen PPN/Bappenas No. 9 Tahun 2025, ditetapkan 30 Desember 2025 dan tercatat berlaku. Isi perubahannya perlu dibaca langsung pada teks peraturan" | dossier Core Fact #3 — existence/status high confidence, content explicitly unverified. Article makes **no** content claim ✓ | **pass** |
| "Tol Gilimanuk–Mengwi sepanjang 96,84 km dengan nilai investasi Rp 25,4 triliun berulang kali gagal lelang" | dossier Core Fact #10 (Kompas, 12 April 2026, medium confidence, single source). Attributed in-text, dated, hyperlinked, causation hedged as "dikaitkan", single-sourcing disclosed ✓ | **pass** |
| "Per Juni 2026, portofolio penjaminannya mencakup 61 proyek (38 KPBU dan 23 non-KPBU), dengan nilai proyek lebih dari Rp 732 triliun dan nilai penjaminan Rp 113 triliun" | dossier Core Fact #13 / company_profile.md ✓. Reference year present; **project value and guarantee value kept as separate figures, not merged** ✓ | **pass** |
| *(bonus)* Eight-aspect predecessor structure listed in H2 #4 | dossier Core Fact #4 (Kemenkeu OBC template, primary-confirmed). Incidentally corroborated during my plagiarism lookup: toolkitkpbu.com publishes "BAB 8. Kajian Kebutuhan Dukungan Pemerintah dan/atau Jaminan Pemerintah" under pra-studi kelayakan, matching item 1.7/1.8 of the old structure ✓ | **pass** |

**Spine-protection checks (orchestrator's binding instructions):**

- [x] **No pasal citation attached to the five kajian.** Article says "umumnya dijelaskan mencakup lima kajian" (H2 #2) and "dilaporkan menyederhanakannya menjadi lima kajian" (H2 #4). The string "menurut Permen … lima kajian tersebut adalah" appears nowhere. The FAQ that would have attributed the names to Permen 7/2023 (present in the dossier) was correctly dropped by the writer.
- [x] **No 8→5 mapping table.** One table in the article, and it is OBC vs FBC. The old eight aspects appear only as a prose list, explicitly labelled as the revoked-regulation template.
- [x] **Rejected competing list absent.** "Kajian Strategis", "Kajian Komersil", "Kajian Finansial", "Kajian Manajemen": 0 occurrences.
- [x] **Honesty paragraph survives, verbatim and un-tightened**: *"Satu catatan kejujuran sebelum daftarnya dibaca. Rincian kelima kajian ini bersumber dari penjelasan praktisi dan ringkasan pedoman yang beredar luas, bukan dari kutipan verbatim lampiran Permen PPN/Bappenas No. 7 Tahun 2023…"* — I did not touch it.
- [x] **Perpres 75/2014 not cited.** The Kemenkeu OBC/FBC page is used for the concept only; its own outdated citation is not repeated.
- [x] **Revoked regulations** (PMK 260/PMK.011/2010, PMK 8/PMK.08/2016, Permen PPN 4/2015, Permen PPN 2/2020, Perpres 75/2014): the 2015/2020 Permen appear **once**, correctly labelled as dicabut. No PMK 260 or PMK 8. No revoked regulation presented as current law.

### C. On-page SEO checklist (seo_playbook.md §3)

- [x] Meta title ≤60 (keyword first 30) — actual: **48 chars**, "KPBU" at position **20**
- [x] Meta description 140–160 — actual: **153**
- [x] Slug ≤60, kebab-case, keyword — actual: `prastudi-kelayakan-kpbu-lima-kajian` (35)
- [x] H1 contains keyword — "Prastudi Kelayakan KPBU: 5 Kajian Penentu Nasib Proyek"
- [x] H2 count 4–7 — actual: **7** (5 body + FAQ + Kesimpulan)
- [x] ≥1 question-format H2 (**2**: "Apa itu prastudi kelayakan dalam proyek KPBU?", "Apa bedanya Outline Business Case dan Final Business Case?"); ≥1 honest/counter-conventional H2 ("Kajian yang paling sering dikerjakan asal lengkap")
- [x] Keyword in first 100 words — yes, in sentence 3 of the lead (inside the hub anchor)
- [x] Definition snippet near top — **57 words**, blockquote, at ~word 100
- [x] ≥8 LSI terms — counted: **20/20** target terms present
- [x] 3 internal links (1 hub + 2 cousins) — `/kpbu` (lead), `/public-private-partnership` (H2 #3), `/pembiayaan-kreatif` (H2 #5). Three **distinct** URLs, all inline. Zero `institute.iigf.co.id`. Zero "BACA JUGA".
- [x] ≥1 external authoritative citation — actual: **3** (peraturan.bpk.go.id JDIH, kpbu.kemenkeu.go.id, kompas.com)
- [x] FAQ 5–7 Q&As — actual: **6**
- [x] ≥1 list + ≥1 table — 1 numbered list (5 items), 1 bullet list (4 items), 1 table
- [x] Word count inside band 1.500–1.800 — actual: **1.683** (`count_words.py`), frontmatter synced

**Anchor-text differentiation (binding check):**

| Article | /kpbu | /public-private-partnership | /pembiayaan-kreatif |
|---|---|---|---|
| Aug kpbu-01/02/03 | "skema KPBU" / "proyek KPBU" | "public private partnership" | "pembiayaan kreatif" |
| Sep kpbu-01 | "penyelenggaraan KPBU lintas sektor" | "praktik PPP di tingkat internasional" | "opsi pendanaan infrastruktur daerah" |
| Sep kpbu-03 | "struktur proyek KPBU" | "model PPP yang dipakai secara global" | "alternatif pembiayaan di luar APBD" |
| **Sep kpbu-02 (this)** | **"tahap penyiapan proyek KPBU"** | **"standar penyiapan proyek PPP"** | **"skema pendanaan alternatif bagi pemerintah daerah"** |

All three anchors distinct from August and from both September siblings. ✓

### C2. GEO extractability (seo_playbook.md §2a)

- [x] Direct 40–60-word answer immediately after each major H2 — measured: **45 / 48 / 48 / 43 / 44** words after the five body H2s, and **44** after `## Kesimpulan` (was 104 before my split). Not only the top snippet.
- [x] Each body paragraph makes one independently quotable, verifiable point — spot-checked across all sections; the numbered five-kajian block is liftable as a unit, each item being one question + one scope line
- [x] FAQ parseable for FAQPage schema (`### question` → single answer paragraph, 6 clean pairs, 43–53 words each); freshness: `date_modified: "2026-09-21"` added to the meta block, and both regulatory sources carry "(diakses 2026)" / "per 2026" inline

### D. PT PII framing discipline (product_matrix.md + style_guide §11)

- [x] PT PII framed as the government-guarantee provider (BUPI) — "satu-satunya BUMN yang memperoleh mandat menyediakan penjaminan pemerintah untuk proyek infrastruktur skema KPBU", reading the document "dari sisi penjamin, bukan dari sisi penyusunnya". Not a lender, investor, contractor, operator, or regulator. No Danantara reference anywhere.
- [x] ≤3 PT PII self-mentions — actual: **2** (one in `## Kesimpulan`, one in the closing CTA). The other three `ptpii.co.id` strings are internal-link URLs, not mentions. No mid-article aside was used.
- [x] No unverifiable superlatives — "terbaik / nomor satu": 0. The factual "satu-satunya BUMN dengan mandat" is the pre-approved formulation from `company_profile.md`.
- [x] Product names + specs match product_matrix.md / dossier — anchor is **Penjaminan Pemerintah**, exactly one, placed at the close and reached through the fifth kajian, as briefed. No claim that a guarantee has ever been paid out. No Fitch rating, no "Outlook Stabil".
- [x] Closing uses a company_profile.md positioning line — verbatim from the pre-approved list (line 191 of `company_profile.md`)
- [x] Soft website CTA present as the FINAL line, after the conclusion — *"Uraian lebih rinci mengenai penjaminan pemerintah pada tahap penyiapan proyek KPBU dapat Anda telusuri di ptpii.co.id."* Consultative, no "beli sekarang", wording differs from siblings.
- [x] Hub link present as a natural inline anchor in the lead, descriptive anchor text, no callout box
- [x] No named Direktur/Komisaris anywhere — 0 personal names in the article

### E. Anti-cannibalization spot check

- Closest prior article for this keyword: **`kpbu-tahapan-proyek-hingga-akhir-perjanjian`** (2026-08-kpbu-01)
- Subtopic overlap (Jaccard estimate): **0.21** vs Aug kpbu-01 · **0.05** vs Aug kpbu-02 (VfM) · **0.04** vs Aug kpbu-03 (risk matrix) · ~0.10 vs Sep kpbu-01 (sektor) · ~0.08 vs Sep kpbu-03 (pengembalian investasi)
- My 0.21 figure is higher than the strategist's claimed 0.095 because I counted shared *entities* (PJPK, Simpul KPBU, Permen 7/2023) as well as shared subtopics. Still well under the 0.4 threshold.
- **Boundary enforcement, verified line by line:**
  - *Six-stage sequence (Aug kpbu-01)* — not rebuilt. The stages are touched only to locate the document: "disusun PJPK pada tahap penyiapan, setelah studi pendahuluan, dan menjadi dasar keputusan apakah proyek dibawa ke tahap transaksi". Three touchpoints, no enumeration, no gate/output table.
  - *VfM (Aug kpbu-02)* — named in **one clause** inside kajian #3: "Analisis *Value for Money* kuantitatif lazimnya ditempatkan di sini." No framework, no comparison axes, no KPBU-vs-APBN table. Never a section spine.
  - *Risk matrix (Aug kpbu-03)* — "pembagian risiko antara pemerintah dan badan usaha" appears once, as a scope item of the fifth kajian. No categories reproduced, no allocation matrix, no eleven-category taxonomy.
- Verdict: **distinct angle confirmed.** The unit of analysis here is a document's interior; August's was a timeline, a decision framework, and a risk table respectively.

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)

- [x] Script ran on the **saved final**; `monthly_runs/2026-09/final/kpbu-02.id.quality-input.json` written
- [x] AI-detector score < 0.30 — actual: **0.04** (verdict `pass`; thresholds revise ≥0.30, reject ≥0.50). One `[low]` flag only.
- [x] Paragraph burstiness CV ≥ 0.30 — actual: **0.395** (sentence burstiness 0.65; top-30 vocab share 0.33). Passes the binding floor; below the script's soft 0.45 target, flagged above and deliberately left alone.
- [x] Plagiarism: distinctive passages web-checked; no non-PT PII verbatim hit ≥20 words — **plagiarism score: 0.05**

**Plagiarism methodology (WebSearch budget: 3 of 3 used — this is a full account, no lookup is claimed that I did not run):**

The scanner extracted 8 candidate passages. Five of them (#1, #3, #4, #6, #7) are regulation references or the standard PJPK expansion — exempt under the rules as verbatim regulation text and well-known definitions. #2 is PT PII's own portfolio figure (ptpii.co.id-sourced, exempt). #8 is a heading. That left #5 plus the article's genuinely distinctive original prose, which the scanner does not rank. I spent the three searches as follows:

1. `"Penyusunnya adalah PJPK" "dibantu Tim KPBU dan dikoordinasikan melalui Simpul KPBU"` — **no verbatim match.** Results were topically related Kemenkeu/DJKN pages (the dossier's own source among them), none reproducing the sentence.
2. `"kajian bentuk kerja sama, risiko, dan kebutuhan dukungan atau jaminan pemerintah"` — **no verbatim match.** Useful by-catch: toolkitkpbu.com publishes "BAB 8. KAJIAN KEBUTUHAN DUKUNGAN PEMERINTAH DAN/ATAU JAMINAN PEMERINTAH" under pra-studi kelayakan, which independently corroborates the eight-aspect predecessor structure the article describes in H2 #4. It does **not** corroborate the five current names, so the hedge stands unchanged.
3. `"bukan struktur babnya, melainkan kualitas buktinya" OR "Reviu internal memeriksa kelengkapan; pasar memeriksa asumsi"` — **no verbatim match.** These are the article's two most distinctive original sentences, in the section most at risk of consultancy-blog lift. Nothing indexed.

No rewrite was required on originality grounds.
