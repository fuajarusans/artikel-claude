---
brief_id: "pembiayaan-infrastruktur-01"
editor_run_date: "2026-08-12"
recommendation: "approve"
overall_score: 9
ai_score: 0.04
plagiarism_score: 0.05
---

# Editor QC Report — Pembiayaan Infrastruktur: Siapa yang Menutup Kekurangan Dana Nasional

## Recommendation
**approve**

The draft arrived structurally sound and, critically for this brief, it did **not** commit the mis-attachment error the whole article exists to correct: the 86,65% / 7,22% / 6,13% composition is attached to the Rp 47.587,3 triliun all-sector figure and attributed in-text to ANTARA (19 Desember 2024, mengutip Bappenas), never asserted as independently verified. Institution roles survive a line-by-line read — PT SMI and PT IIF finance, LPEI does export finance, PT PII guarantees and explicitly "tidak menyalurkan pinjaman maupun modal". What I fixed were figure-discipline defects that would have been self-defeating in an article about figure discipline: a rupiah range whose upper bound (Rp 10.350 triliun) exceeded the highest conversion any source reported and contradicted the article's own §5 text; three of six table rows carrying a percentage with no reference date; and an H2 opener that promised three causes the body then failed to deliver. I also swapped one FAQ that was duplicated verbatim across siblings -02 and -03. AI-detector score is 0.04 (clean). The plagiarism verdict is heuristic-only — see the open flag — because the session's WebSearch budget was already exhausted (200/200) before this run; I state that plainly rather than implying lookups I could not perform.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Zero §5 patterns, zero em-dashes, paragraph lengths 12–100 words, sentence burstiness 0,817. Opens on a concrete conflict ("Tiga angka berbeda beredar"), not a generic hook. |
| Factual & penjaminan infrastruktur / KPBU accuracy | 8 | All claims trace to the dossier; PMK 68/2024 and its 18 Oktober 2024 effective date correct; institution roles correct. Capped at 8 because figures A/B/C carry medium dossier confidence — no primary-source verification was possible this month. |
| On-page SEO compliance | 9 | Every checklist item passes. Meta title 53 chars, meta description 152, slug 45. |
| GEO extractability (§2a) | 9 | All five H2 openers measured at 47–52 words; definition snippet 50 words at word ~98; six FAQ answers 49–61 words; `date_modified` added. |
| PT PII framing discipline | 9 | Exactly 3 self-mentions including the CTA. Guarantor framing airtight, no superlatives, no officials, no Danantara. |
| Internal linking | 10 | Exactly 3 distinct ptpii.co.id URLs, all inline, hub in the lead, zero "BACA JUGA", zero institute.iigf.co.id. |
| FAQ quality | 9 | Six self-contained answers; one swapped to remove a cross-article duplicate and an intra-article restatement. |
| Originality (plagiarism + AI-detector) | 8 | AI 0.04 clean. Plagiarism assessed heuristically only — the score is a reasoned estimate, not a web-verified result. |

## What I fixed (changelog)
- **Corrected the rupiah range Rp 10.000–10.350 triliun → Rp 10.146–10.303 triliun in 4 places** (H2 #2 opener, Tabel 1 total row, Tabel 2 row 1, FAQ #2). Rp 10.350 triliun is above the highest conversion any source reported and directly contradicted the article's own §5 sentence "dilaporkan setara Rp 10.303 triliun pada satu laporan dan Rp 10.146 triliun pada laporan lain". The new range is the two exactly-reported conversions, so the headline range and the §5 explanation now reconcile. See open flag 3 on the divergence from the suggested "10.302".
- **Rebuilt the Tabel 1 caption to carry the reporting date for every row** ("…siklus RPJMN 2025–2029; seluruh porsi di bawah ini dilaporkan sekitar Juni 2025"), then removed the now-redundant per-row "(dilaporkan)" hedges on BUMN and swasta and the APBN-only date note. Previously three of six rows stated a percentage with no reference date; now all six inherit one, at a net cost of 3 words.
- **Fixed an internal contradiction in §5.** The H2 opener listed the three causes as "cakupan / tahun dasar / asumsi kurs", but the body then argued "cakupan / asumsi kurs / definisi infrastruktur yang elastis" and never returned to tahun dasar. Realigned the opener to the three causes the body actually delivers; period discipline is preserved by the same paragraph's "tanyakan cakupan dan periodenya" and by Tabel 2's "Periode dan atribusi" column.
- **Swapped FAQ #4** "Siapa yang membiayai proyek pada skema KPBU?" → "Siapa saja lembaga pembiayaan infrastruktur di Indonesia?" (both are in the brief skeleton and the dossier FAQ set). The old question appears verbatim in siblings `-02` and `-03` — a FAQPage-schema duplicate across three URLs on the same domain — and its answer restated FAQ #3's 70–80% debt figure inside this same article. The replacement is squarely this article's territory (the institution map) and adds no PT PII mention: it says "badan usaha penjaminan infrastruktur … tidak menyalurkan pinjaman maupun modal" without naming the client, keeping the count at 3.
- **De-duplicated FAQ #1 against the definition snippet** — the two shared roughly 15 near-verbatim words ("keseluruhan cara mendanai pembangunan dan pengoperasian aset publik berumur panjang…"). Rephrased the FAQ at +1 word.
- **Numerical precision:** "artinya sekitar seperlima rumah tangga masih di luar jangkauan" → "lebih dari seperlima". The complement of BPS 77,36% is 22,64%, which "sekitar seperlima" understates.
- **Kesimpulan:** "61 proyek dijamin" → "61 proyek dijamin **secara kumulatif**" — the source figure is cumulative to Juni 2026, and the style guide requires cumulative figures to say so.
- **Re-added "*project financing*" to the body** (H2 #3), which the FAQ swap had removed; it is a declared `secondary_keyword` and was left with zero body presence. Doubles as a sentence split that improves rhythm.
- **Added `date_modified: "2026-08-12"`** to the frontmatter (GEO §2a freshness signal).
- **Tightened ~10 flabby constructions** to pay for every addition: "Ketiganya sah, dan ketiganya mengukur hal yang berbeda" → "Ketiganya sah dan mengukur hal berbeda"; "Angka itu historis dan tidak boleh dibaca sebagai posisi hari ini" → "Angka itu historis, bukan posisi hari ini"; "mengenal skema yang sama sebagai" → "mengenalnya sebagai"; and similar in the Tabel 2 attribution cell, §4, and §5.
- **Sharpened the roles list intro** from "padahal perbedaannya tajam" to "padahal garis antara membiayai dan menjamin tajam", so a skimmer under the "Siapa yang membiayai sisanya" H2 cannot read PT PII as one of the financiers.
- **Frontmatter `word_count` 1676 → 1793.** The draft's declared count was 110 words stale (actual draft: 1.786).

## What I flagged (open issues)
- ⚠️ **Plagiarism lookups could not be run.** The session's WebSearch budget was exhausted (200/200) before this run; a probe confirmed it. The eight candidate passages were assessed by reading, not by web search. `plagiarism_score: 0.05` is a reasoned heuristic estimate, not a verified result. *Recommendation*: if a later session has search budget, run the eight `web_search_query` strings in `pembiayaan-infrastruktur-01.id.quality-input.json`. My read is that the risk is low — every candidate that touches a source carries inline attribution, and the article's most distinctive constructions are original — but the check is genuinely outstanding.
- ⚠️ **Figures A, B, and C are medium-confidence in the dossier.** The researcher could not reach `rpjmn.bappenas.go.id`, `bappenas.go.id`, `antaranews.com`, or the Kementerian PU search (dossier flags 1, 3, 4, 9). The article mitigates this correctly — every one of these numbers is worded "dilaporkan" or attributed to a named outlet and date, never "menurut RPJMN". *Recommendation*: ship as-is; schedule a primary-source re-verification at the next content refresh, and treat `date_modified` as the trigger.
- ⚠️ **I diverged from the suggested "Rp 10.302 triliun" upper bound.** That value appears nowhere in the dossier; the dossier reports Rp 10.303 triliun and Rp 10.146 triliun as the two circulating conversions, and this article quotes Rp 10.303 triliun explicitly in §5. Capping the headline range at 10.302 would have contradicted the article's own text. *Recommendation*: harmonize the sibling articles to **Rp 10.146–10.303 triliun** rather than harmonizing this one downward — it is the dossier-exact pair and it is self-consistent.
- ⚠️ **The BPS 77,36% figure is a secondary citation.** The dossier sourced it from `ptpii.co.id/pembiayaan-kreatif` quoting BPS 2023, not from a direct BPS fetch, and suggests "sebagaimana dikutip PT PII" if source precision matters. I left it as "Data BPS 2023" because adding the PT PII attribution would push self-mentions to 4 and breach the ≤3 ceiling. *Recommendation*: acceptable as-is (BPS is the originating source and the year is stated); revisit only if a direct BPS link becomes available.
- ⚠️ **Paragraph burstiness CV 0,426 against the script's aspirational 0,45** (low severity). Far above the 0,30 fail line, and sentence burstiness is 0,817. Chasing 0,45 would mean padding or gutting paragraphs at a word ceiling that has 7 words of headroom. *Recommendation*: no action.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — 0 hits
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — 0 hits (the only "Selain" is "Selain APBN dan APBD", mid-clause)
- [x] No "Penting untuk dicatat / dipahami bahwa" — 0 hits
- [x] "Dengan demikian" not overused — 0 hits
- [x] Em-dash count ≤2 — **0**. All 14 dashes are en-dashes inside year ranges (2025–2029), which is correct typography, not a tell
- [x] Varied paragraph lengths — 97, 52, 81, 30, 48, 85, 51, 62, 15, 25, 51, 49, 47, 43, 42, 51, 42 words. CV 0,426
- [x] Not every H2 → 3-bullet list — §1, §2, §5 are prose+table; §3 is prose+bullets; §4 is prose+numbered list
- [x] No generic claims without numbers
- [x] No stacked hype adjectives — 0 hits for canggih/terdepan/revolusioner/terbaik/nomor satu
- [x] No service-dump paragraph — no PT PII product list anywhere
- [x] No press-release register — 0 hits for "Dalam rangka" / "Sebagai wujud komitmen"

### B. Factual & penjaminan infrastruktur / KPBU spot-check
| Claim | Source check | Verdict |
|---|---|---|
| Komposisi 86,65% swasta / 7,22% pemerintah / 6,13% BUMN belongs to Rp 47.587,3 triliun (all-sector, 8% growth target), attributed in-text to ANTARA 19 Desember 2024 mengutip Bappenas — and explicitly *not* to the infrastructure figure | dossier figure C + structural finding ✓ | **pass** — the article's differentiator is executed, not committed |
| Rp 1.905,3 triliun kebutuhan / Rp 753,11 triliun gap = Kementerian PU's own portfolio, narrower since the Oktober 2024 split from PUPR, "bukan total nasional" | dossier figure B ✓ | **pass** |
| PMK No. 68 Tahun 2024, berlaku sejak 18 Oktober 2024, consolidates project preparation + VGF + penjaminan | dossier core fact ✓ (mencabut PMK 260/2010 jo. 8/2016) | **pass** — current law, correctly numbered |
| PT SMI and PT IIF finance/invest; LPEI does export finance; PT PII "menerbitkan penjaminan … dan tidak menyalurkan pinjaman maupun modal"; IIF Rp 12,82 triliun per Desember 2025 | dossier Tabel 4 + `iif.co.id` ✓; product_matrix universal rules ✓ | **pass** — the highest-risk passage in this brief, verified line by line |
| 61 proyek dijamin secara kumulatif, >Rp 732 triliun, per Juni 2026 | dossier ✓ (`ptpii.co.id/informasi-proyek`, the only current page); **not** the stale 33 proyek / Rp 6.445 triliun on `/kpbu` and `/public-private-partnership` | **pass** |
| Rp 10.000–10.350 triliun as the rupiah equivalent of USD 625,37 miliar | dossier reports Rp 10.303 tn and Rp 10.146 tn only | **fail → corrected in-place** to Rp 10.146–10.303 triliun |

Banned-content sweep, all absent from the final: PSN "77 proyek (29 baru + 48 lanjutan)"; exact APBD sub-figures 104,31 / 106,31 (the article uses the dossier-sanctioned "≈USD 104–106 miliar" range with the unresolved-conflict note); PT SMI Rp 2,5 triliun; PT IIF Rp 655,5 miliar; USD 600 juta syndicated loan; Rp 6.445 triliun; 33 proyek; Danantara; any named official (all 9 "menteri" hits are inside "Kementerian"). Historical figures are labelled: Rp 4.769 triliun is introduced as RPJMN 2015–2019 and closed with "Angka itu historis, bukan posisi hari ini".

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: **53** chars / keyword at position **0**
- [x] Meta description 140–160 — actual: **152**
- [x] Slug ≤60, kebab-case, keyword — actual: `pembiayaan-infrastruktur-sumber-dana-nasional` (**45**)
- [x] H1 contains keyword
- [x] H2 count 4–7 — actual: **7** (5 body + FAQ + Kesimpulan)
- [x] ≥1 question-format H2 (§1 and §3 and §5); ≥1 honest/counter-conventional H2 (§5, "Mengapa angka funding gap berbeda-beda")
- [x] Keyword in first 100 words — sentence 2 ("kebutuhan pembiayaan infrastruktur Indonesia"); also in the first sentence of Kesimpulan
- [x] Definition snippet near top — **50 words**, begins at word ~98
- [x] ≥8 LSI terms — counted: **19** (funding gap, RPJMN 2025–2029, APBN, APBD, KPBU, penjaminan pemerintah, bankability, project financing, special purpose vehicle, badan usaha pelaksana, Availability Payment, Viability Gap Fund, obligasi, sukuk, financial close, lender, Bappenas, PMN, kewajiban kontinjensi)
- [x] 3 internal links (1 hub + 2 cousins) — `ptpii.co.id/pembiayaan-kreatif` (lead), `/kpbu` (§3), `/public-private-partnership` (§3). 3 distinct URLs, all inline, no callout box
- [x] ≥1 external authoritative citation — actual: **3** (kpbu.kemenkeu.go.id, djkn.kemenkeu.go.id, iif.co.id)
- [x] FAQ 5–7 Q&As — actual: **6**, answers 49–61 words
- [x] ≥1 list + ≥1 table — 1 numbered list (3 items), 1 bullet list (4 items), 2 tables
- [x] Word count inside the brief's band (1.500–1.800) — actual: **1.793** (`tools/count_words.py`), frontmatter synced

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — measured: **52 / 48 / 51 / 51 / 47** words. All five inside the band, all before any elaboration
- [x] Each body paragraph makes one independently quotable, verifiable point — spot-checked; the strongest extractable units are "Penjamin tidak mengucurkan dana; kewajibannya baru muncul bila klaim benar-benar terjadi" and "kebutuhan investasi bukan komitmen pendanaan"
- [x] FAQ parseable for FAQPage schema (clean `### question` → answer paragraph, no nesting); `date_modified: "2026-08-12"` added to the meta block this pass

### D. PT PII framing discipline (product_matrix.md + style_guide §11)
- [x] PT PII framed as the government-guarantee provider (BUPI) under the Ministry of Finance — "menerbitkan penjaminan pemerintah atas risiko sisi pemerintah … dan tidak menyalurkan pinjaman maupun modal"; not a lender, investor, contractor, operator, or regulator; Danantara never mentioned
- [x] ≤3 PT PII self-mentions — actual: **3** (roles list in §3, positioning line in Kesimpulan, CTA line). The three internal links use topic anchors, not the company name
- [x] No unverifiable superlatives — 0 hits
- [x] Product names + specs match product_matrix.md / dossier — one anchor only (Penjaminan Pemerintah untuk proyek KPBU), no service-dump; penjaminan appears strictly as a credit-enhancement lever, with the three stages and hak regres left to the "Jaminan Pemerintah" cluster
- [x] Closing uses a company_profile.md positioning line — "Sebagai Badan Usaha Penjaminan Infrastruktur di bawah Kementerian Keuangan, PT PII menjembatani kebutuhan kepastian investor dengan kemampuan fiskal negara"
- [x] Soft website CTA present as the FINAL line, after `## Kesimpulan` — "Uraian mengenai penjaminan pemerintah untuk proyek KPBU dan bentuk dukungan lain bagi penyiapan proyek dapat Anda telusuri di ptpii.co.id." Consultative, no "beli sekarang"
- [x] Hub link present as a natural inline anchor in the lead — "skema pembiayaan kreatif untuk infrastruktur" → `/pembiayaan-kreatif`, honest to that page's H1

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: **none yet** — `articles_history/index.json` has an empty `articles` array; this is the first article for the client.
- In-batch assessment (the flagged risk pair):
  - **vs `pembiayaan-infrastruktur-02`** (corporate vs project finance): overlap ≈ **0,19**. Shared: the 70–80% debt structure, SPV/BUP, bankability, penjaminan as a lever. Distinct: -01 owns the national scale question and the figure-scope debate; -02 owns structure selection, ratios, tenor, and when project finance is wrong. -01 never compares corporate and project finance.
  - **vs `pembiayaan-infrastruktur-03`** (lender credit committee): overlap ≈ **0,16**. Shared: bankability, the debt share, penjaminan's limits. Distinct: -03 is entirely about the six lender tests, cost of fund, and red flags — none of which -01 touches.
  - **vs `pembiayaan-kreatif-01`** (shared `/pembiayaan-kreatif` hub): overlap ≈ **0,10**. Boundary respected — pemda/APBD is never the protagonist here; APBD appears only as one table row inside the national composition and in the meta description.
- One real duplication existed and I removed it: the FAQ "Siapa yang membiayai proyek pada skema KPBU?" was present verbatim in **all three** `pembiayaan-infrastruktur` drafts. Three identical FAQPage entries on one domain is a self-inflicted duplicate-snippet risk. -01 now asks "Siapa saja lembaga pembiayaan infrastruktur di Indonesia?" instead. *Note for the curator*: -02 and -03 still share that question with each other; worth resolving in one of them.
- Verdict: **distinct angle confirmed** — all pairwise estimates well under the 0,4 threshold.

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran twice (before and after the final edit); `pembiayaan-infrastruktur-01.id.quality-input.json` written to `final/`
- [x] AI-detector score < 0.30 — actual: **0.04** (verdict `pass`; thresholds revise ≥0.30, reject ≥0.50). One low-severity flag: `paragraph-low-variance`
- [x] Paragraph burstiness CV ≥ 0.30 — actual: **0.426** (the script's own aspirational target is 0.45; the fail line for this pipeline is 0.30). Sentence burstiness 0.817, top-30 vocab share 0.299
- [ ] **Plagiarism: distinctive passages web-checked — NOT PERFORMED.** WebSearch returned "this session has used its web search budget (200 of 200)". No lookup was run, and none is claimed. The 8 extracted candidates were assessed by reading against the dossier:
  1. The Rp 47.587,3 triliun + composition sentence — figures are widely reported facts, but the framing ("beredar bersama komposisi…, sebagaimana dilaporkan ANTARA…") is this article's own editorial construction, with attribution.
  2. The 70–80% debt sentence — paraphrased from the cited `kpbu.kemenkeu.go.id` page, attributed inline; citing an authoritative source is an explicit exemption.
  3–4. PT IIF description and the Rp 12,82 triliun figure — institutional facts attributed inline to `iif.co.id`, the cited source.
  5. "Pada RPJMN 2025–2029, anggaran pemerintah dilaporkan hanya menutup sekitar 40 persen kebutuhan" — 14 words, below the 20-word threshold, in the article's own hedged voice.
  6. The USD 625,37 miliar / Rp 10.146–10.303 triliun sentence — the range as stated exists in no source; it is this article's synthesis of two separately reported conversions.
  7. The all-sector comparison sentence — attributed to ANTARA with its date; the comparison itself is the article's contribution.
  8. The Viability Gap Fund definition — a well-known definition, and "manfaat ekonominya tinggi tetapi arus kasnya tipis" is original phrasing.
- **plagiarism score: 0.05** — a heuristic estimate under degraded mode, not a web-verified result. Recorded as an open flag above.
