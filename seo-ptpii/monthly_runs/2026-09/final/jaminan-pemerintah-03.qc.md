---
brief_id: "jaminan-pemerintah-03"
editor_run_date: "2026-09-22"
recommendation: "approve"
overall_score: 9
ai_score: 0.04
plagiarism_score: 0.05
---

# Editor QC Report — Jaminan Pemerintah untuk KPBU Daerah: Jalur dan Batasnya

## Recommendation
**approve**

This is the strongest of the three `jaminan-pemerintah` drafts this month, and its centerpiece — the observation that Perpres 78/2010 Pasal 15 establishes a regres obligation for *every* PJPK type, with only the fulfilment mechanism varying (K/L → APBN, Kepala Daerah → APBD, BUMN/BUMD → korporasi) — is stated correctly, on the confirmed Kepala Daerah/APBD branch, and framed as a factual observation about portal lag rather than as criticism of the ministry. The draft arrived clean on the hardest constraints: no named officials, no "7.459 titik" Madiun figure, no Bank Jateng coverage, no Fitch, no claim ever asserted as paid, no funding-certainty promise, and PT PII held at exactly three mentions including the CTA. I made eleven in-place fixes, the two most substantive of which came out of web verification: the revocation sentence now claims only what JDIH confirms (PMK 260/PMK.011/2010 revoked by PMK 68/2024 effective 18 Oktober 2024, with PMK 8/PMK.08/2016 correctly characterised as its perubahan losing its footing rather than being named in the revocation clause), and the RPJMN attribution was softened from a month-level to a year-level citation I could actually stand behind. AI-detector 0.04 with paragraph burstiness 0.566; word count 1.641, inside the band. Two honest limitations are recorded below: only 3 of 8 plagiarism candidates could be web-checked inside the 3-call cap, and eligibility criterion 4 still rests on portal guidance rather than a locatable pasal — both disclosed rather than papered over, and the article itself already hedges the latter in-text.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Paragraph lengths 3–102 words, sentence counts 1–6. Zero em-dashes, zero banned openers. "Satu hal perlu diluruskan.", "Bagian ini sering disalahpahami." read as practitioner asides, not synthesis. |
| Factual & penjaminan infrastruktur / KPBU accuracy | 9 | 5/5 spot-checks pass; 3 of them verified against live sources this session. One precision correction applied to the PMK revocation sentence. |
| On-page SEO compliance | 9 | Every meta field inside spec; 3 internal + 2 external links; 2 tables, 1 numbered + 1 bulleted list. |
| GEO extractability (§2a) | 9 | 43/50/52/49/43-word answers after all five body H2s; 56-word definition snippet; FAQ FAQPage-parseable; `date_modified` added. |
| PT PII framing discipline | 10 | Exactly 3 mentions incl. CTA. Explicitly denies lending to and assessing the readiness of a daerah. No superlative, no Danantara, no official named. |
| Internal linking | 10 | 3 distinct ptpii.co.id URLs, all inline, hub in the lead. All anchors differ from August's and from both September siblings. Zero institute.iigf.co.id. |
| FAQ quality | 9 | 6 Q&As, all 40–47 words after one fix. Mirrors the brief's PAA set. |
| Originality (plagiarism + AI-detector) | 9 | AI 0.04. No verbatim ≥20-word hit on any checked candidate; coverage limitation stated plainly. |

## What I fixed (changelog)
- **Legal precision on the revocation claim (most important fix).** "PMK 260/PMK.011/2010 dan PMK 8/PMK.08/2016 … keduanya telah dicabut oleh PMK 68/2024" → "PMK 260/PMK.011/2010 beserta perubahannya, PMK 8/PMK.08/2016 … PMK 260/PMK.011/2010 sudah dicabut oleh PMK 68/2024 yang berlaku sejak 18 Oktober 2024, sehingga peraturan perubahannya ikut kehilangan pijakan." JDIH Kemenkeu confirms PMK 68/2024 revokes 260/PMK.011/2010 and 260/PMK.08/2016; it does **not** surface 8/PMK.08/2016 by name. The new wording matches exactly what `company_profile.md` supports and is stronger, because it explains *why* the portal's legal basis is stale. The original sentence also read ambiguously, as if PMK 8/2016 were the regulation effective 18 Oktober 2024.
- **RPJMN attribution softened** from "(Kementerian Keuangan, dilaporkan Desember 2025)" to "(Kementerian Keuangan, 2025)". WebSearch confirmed the figure and the split (APBN 23% + APBD 17% ≈ 40% of ± Rp 10.302 triliun) but not the reporting month. Reference year preserved; unverifiable precision removed.
- **Portfolio scope made explicit** in the conclusion: "61 proyek bernilai lebih dari Rp 732 triliun per Juni 2026" → "61 proyek dengan **nilai proyek** lebih dari Rp 732 triliun dan **nilai penjaminan** Rp 113 triliun per Juni 2026". Prevents the standard misreading that PT PII carries Rp 732 triliun of exposure.
- **Regres conditionality tightened twice.** Pasal 15 ayat (1) restated with the regulation's own conditional ("dalam hal Penjamin telah melaksanakan kewajibannya"), and the follow-up paragraph rewritten to "kewajiban regres baru timbul jika klaim benar-benar dibayarkan" — which also removed a near-verbatim repetition of the same clause two paragraphs apart.
- **Removed a figure with no reference year**: FAQ 5 asserted VGF "mensyaratkan nilai investasi minimal Rp 100 miliar". No year, no regulation, and not confirmed live under PMK 68/2024. Rewritten to keep the instrument contrast qualitatively; this also removed a confusing collision with Madiun's "sekitar Rp 100 miliar" investment value.
- **Lead tightened** so the mandatory disambiguation line (bukan jaminan sosial / agunan / jaminan pelaksanaan) closes at word 57 instead of word 60 — margin against the 60-word requirement.
- **Madiun sentence de-anthropomorphised**: a project cannot sign an agreement. "KPBU APJ Kabupaten Madiun … menandatangani Perjanjian Penjaminan" → "Perjanjian Penjaminan untuk KPBU APJ Kabupaten Madiun … ditandatangani". Verified correct against CNBC/ANTARA/portal KPBU: the parties were PT PII and the badan usaha pelaksana.
- **Project-table header fixed**: column 4 was "Tanggal kunci" but the Legok Nangka cell held a status note, not a date → "Catatan kunci"; the "satu-satunya sektor persampahan" claim now carries "per publikasi resmi 2026"; PJPK cell "Regional, Jawa Barat" → "Skema regional, Jawa Barat" (it was not a PJPK identity).
- **FAQ 6 lengthened** from 39 to 47 words (below the 40–80 floor).
- **EYD**: "Kewajiban itu kontinjen." → "Kewajiban regres itu bersifat kontinjen." (idiom + a clearer antecedent across the intervening correction paragraph); H2 "bisa-tidaknya" → "bisa atau tidaknya"; "kelambatan portal" → "kelambatan pemutakhiran portal".
- **Frontmatter**: added `date_modified: "2026-09-22"` (GEO §2a freshness, matching the batch convention); `word_count` corrected 1680 → **1641** (writer's self-count was wrong; `count_words.py` measured 1598 pre-edit).

## What I flagged (open issues)
- ⚠️ **Plagiarism coverage is partial — 3 of 8 candidate passages web-checked.** The 3-call WebSearch cap was spent on one fact check that doubled as sourcing plus the two highest-risk candidates (the Madiun signature sentence, most likely to echo press coverage; the portal/PMK correction, the article's most distinctive passage). Zero verbatim ≥20-word matches on non-PT PII pages. The remaining 5 candidates are either regulation paraphrase with inline attribution (excluded by rule) or clearly original prose, and were assessed heuristically only. *Recommendation*: no action needed pre-publication; the queries are preserved in `jaminan-pemerintah-03.id.quality-input.json` if a later session has budget.
- ⚠️ **Eligibility criterion 4 still has no locatable pasal.** Per the dossier, "prastudi kelayakan disusun konsultan independen dan profesional" was not found verbatim in either Perpres and likely sits in PMK 68/2024's implementing detail. *Recommendation*: none — the article already handles this correctly, attributing the list to the Kemenkeu portal and stating in-text that criterion 4 "sebaiknya dibaca sebagai panduan pemohon … bukan sebagai pasal tersendiri". No pasal is asserted anywhere for the five-item list. Disclosed for the record only.
- ⚠️ **"Satu-satunya KPBU sektor persampahan yang dijamin"** comes from `company_profile.md` and was not independently re-verified this session. I added "per publikasi resmi 2026" so the claim is time-bound. *Recommendation*: re-verify at the next knowledge-base refresh; a second guaranteed waste-sector project would date this line.
- ⚠️ **Scanner low flag: vocab-repetition 36.2%** (target <30%). Driven by the unavoidable lexicon — penjaminan, daerah, PJPK, proyek, KPBU, regres — in a 1.641-word article on exactly those six entities. Burstiness is strong (paragraph CV 0.566, sentence CV 1.009) and the overall AI score is 0.04. *Recommendation*: accept; forcing synonyms here would degrade entity clarity, which GEO §2a rewards.
- ℹ️ **`kpbu.kemenkeu.go.id` is cited as a source while the article corrects it.** This is deliberate and correctly scoped: the portal is cited for the five eligibility criteria (which it publishes authoritatively) and corrected only on the regres line and its stale legal basis. The tone stays factual throughout.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — 0 occurrences
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — 0 occurrences of "Selain itu" anywhere
- [x] No "Penting untuk dicatat / dipahami bahwa" — 0
- [x] "Dengan demikian" not overused — 0
- [x] Em-dash count ≤2 — **0**
- [x] Varied paragraph lengths — 24 paragraphs, 3–102 words, 1–6 sentences; paragraph burstiness CV **0.566**
- [x] Not every H2 → 3-bullet list — 2 H2s open on prose only; 1 bulleted list, 1 numbered list, 2 tables across five body sections
- [x] No generic claims without numbers — every section carries a dated figure, a pasal, or a date
- [x] No stacked hype adjectives — 0 ("canggih/terdepan/revolusioner/terbaik/nomor satu" all absent)
- [x] No service-dump paragraph — one product anchor only (Penjaminan Pemerintah), in the closing
- [x] No press-release register — "Dalam rangka…" / "Sebagai wujud komitmen…" absent

### B. Factual & penjaminan infrastruktur / KPBU spot-check
| Claim | Source check | Verdict |
|---|---|---|
| Perpres 38/2015 Pasal 6(1) verbatim: "Dalam pelaksanaan KPBU, Menteri/Kepala Lembaga/Kepala Daerah bertindak selaku PJPK." | dossier ✓ (primary text read in full, peraturan.go.id/files/ps38-2015.pdf) — quote matches character-for-character | pass |
| Perpres 78/2010 Pasal 15: universal regres obligation (ayat 1); Kepala Daerah → APBD (ayat 3) | dossier ✓ (full verbatim read of all 5 ayat) + orchestrator confirmation. Article uses the **confirmed Kepala Daerah/APBD branch** and states the portal divergence as observation, not criticism | pass |
| PMK 260/PMK.011/2010 dicabut oleh PMK 68/2024, berlaku 18 Oktober 2024 | **WebSearch ✓** jdih.kemenkeu.go.id — confirms revocation of 260/PMK.011/2010 and effective date 18 Oktober 2024. PMK 8/PMK.08/2016 **not** surfaced by name → sentence rewritten to claim only what is supported | pass (after fix) |
| Madiun: Perjanjian Penjaminan 20 September 2022; operasi komersial 18 Juli 2023; KPBU APJ pertama di Indonesia | **WebSearch ✓** CNBC Indonesia, ANTARA, kpbu.kemenkeu.go.id, ptpii.co.id — all corroborate. Also confirms Perjanjian Penjaminan was PT PII ↔ badan usaha and Perjanjian Regres was Pemda ↔ PT PII, which independently validates the article's Pasal 10(1) nuance | pass |
| RPJMN 2025–2029: ± Rp 10.302 triliun; APBN + APBD ≈ 40% | **WebSearch ✓** ikpi.or.id, infobanknews, tirto.id — figure and split confirmed (APBN 23%, APBD 17%). Reporting month not confirmed → attribution softened to "(Kementerian Keuangan, 2025)" | pass (after fix) |

**Reference-year audit** — every figure carries one: Rp 10.302 triliun & 40% (RPJMN 2025–2029, Kemenkeu 2025) · 20 September 2022 · 18 Juli 2023 · 12 Oktober 2023 · Rp 100 miliar (rujukan 2022, hedged "sekitar", "angka berbeda antar sumber") · 18 Oktober 2024 · 61 proyek / Rp 732 triliun nilai proyek / Rp 113 triliun nilai penjaminan (per Juni 2026) · "satu-satunya sektor persampahan" (per publikasi resmi 2026). **No bare number remains.**

**Blacklist sweep** — named officials: 0 (no bupati, walikota, gubernur, menteri, Direksi, Komisaris; the Madiun/Lombok Barat rows say "Kepala daerah kabupaten") · "7.459 titik PJU": absent · Bank Jateng / KPDBU MoU: absent · Fitch: absent · Danantara: absent · "membiayai/meminjamkan" applied to PT PII: absent · claim ever paid: never asserted, written conditionally in all three places.

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: **56 chars** / keyword at position **0–18**
- [x] Meta description 140–160 — actual: **151**
- [x] Slug ≤60, kebab-case, keyword — actual: `jaminan-pemerintah-kpbu-daerah` (30)
- [x] H1 contains keyword — "Jaminan Pemerintah untuk KPBU Daerah: Jalur dan Batasnya"
- [x] H2 count 4–7 — actual: **7** (5 body + FAQ + Kesimpulan)
- [x] ≥1 question-format H2 (2: "Apa itu…?", "Siapa yang menjadi PJPK…?"); ≥1 honest/counter-conventional H2 ("Apa yang ditanggung daerah setelah jaminan terbit")
- [x] Keyword in first 100 words — word ~23
- [x] Definition snippet near top (40–60 words) — **56 words**, blockquote, opens at word ~105
- [x] ≥8 LSI terms — counted: **~20** (KPBU daerah, KPDBU, PJPK, kepala daerah, penjaminan infrastruktur, kriteria kelayakan, kebijakan satu pintu/*single window*, Usulan Penjaminan, APBD, prastudi kelayakan, APJ/penerangan jalan umum, Perjanjian Penjaminan, Perjanjian Regres, BUPI, matriks risiko, kecukupan modal, *creditworthiness*, arbitrase, Dukungan Kelayakan/VGF, imbal jasa penjaminan)
- [x] 3 internal links (1 hub + 2 cousins) — `/kpbu` (lead), `/public-private-partnership` (H2 #1), `/pembiayaan-kreatif` (H2 #4). All inline, no "BACA JUGA", 3 distinct URLs
- [x] ≥1 external authoritative citation — actual: **2** (peraturan.go.id Perpres 78/2010; kpbu.kemenkeu.go.id "Mengajukan Penjaminan")
- [x] FAQ 5–7 Q&As — actual: **6** (40, 46, 42, 41, 48, 47 words)
- [x] ≥1 list + ≥1 table — 1 bulleted, 1 numbered, **2 tables**
- [x] Word count inside band 1.500–1.800 — actual: **1.641** (`count_words.py`), frontmatter synced

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — measured: **43 / 50 / 52 / 49 / 43** words across the five body H2s
- [x] Each body paragraph makes one independently quotable, verifiable point — spot-checked; each carries a pasal, a date, or a dated figure. The strongest standalone extractables: the Pasal 15 mechanism-by-PJPK-type paragraph and the imbal-jasa-vs-regres distinction
- [x] FAQ parseable for FAQPage schema (`### ` question → single answer paragraph); `date_modified: "2026-09-22"` present in the meta block

### D. PT PII framing discipline (product_matrix.md + style_guide §11)
- [x] PT PII framed as the government-guarantee provider (BUPI) — SMV Kementerian Keuangan; not a lender, investor, contractor, operator, or regulator; not under Danantara. Article states explicitly: "Penjaminan bukan pinjaman kepada daerah dan bukan penilaian atas kesiapan pemerintah daerah secara umum"
- [x] ≤3 PT PII self-mentions — actual: **3** (mid-article aside in H2 #5; positioning line in Kesimpulan; the ptpii.co.id CTA)
- [x] No unverifiable superlatives — 0. "Proyek KPBU APJ pertama di Indonesia" and "satu-satunya KPBU sektor persampahan yang dijamin" are factual, sourced, and time-bound
- [x] Product names + specs match product_matrix.md / dossier — one anchor only: **Penjaminan Pemerintah** (per the keyword's `client_anchor`); Pembiayaan Kreatif appears as a cousin link, not as the CTA
- [x] Closing uses a company_profile.md positioning line — "Sebagai Badan Usaha Penjaminan Infrastruktur di bawah Kementerian Keuangan, PT PII menjembatani kebutuhan kepastian investor dengan kemampuan fiskal negara"
- [x] Soft website CTA present as the FINAL line, after the conclusion — "Rincian skema penjaminan pemerintah untuk proyek KPBU, termasuk yang berada di tingkat kabupaten dan kota, dapat ditelusuri di ptpii.co.id." Consultative, not transactional
- [x] Hub link present as a natural inline anchor in the lead — "proyek KPBU dan penjaminannya"
- [x] Never implies the guarantee covers commercial risk or is a subsidy — stated negatively and explicitly
- [x] Never promises funding certainty to a pemda reader — "Terbitnya jaminan juga tidak memastikan proyek memperoleh pembiayaan"

### E. Anti-cannibalization spot check
- Closest prior articles for this keyword: `2026-08-jaminan-pemerintah-01/02/03`
- Subtopic overlap (Jaccard, normalised tokens):
  - vs `2026-08-jaminan-pemerintah-01` (coverage map) = **0.143** (shared: jaminan, pemerintah, pjpk, proyek)
  - vs `2026-08-jaminan-pemerintah-02` (instrument taxonomy) = **0.097**
  - vs `2026-08-jaminan-pemerintah-03` (claim + regres mechanism) = **0.062** (shared: penjaminan, regres)
- Boundary audit: regres appears here only as an obligation the daerah assumes — one paragraph on Pasal 15 ayat (3) plus the conditionality note. **No claim flow, no payment waterfall, no regres procedure walkthrough**, so August-03's territory is untouched. No contingent-liability accounting (this month's `-01`), no LKPP/Nota Keuangan/CaLK. No general pemda readiness, Tim KPBU formation, or fiscal-capacity scoring, so the Pembiayaan Kreatif cluster is untouched; the article draws that line itself with "Penjaminan bukan … penilaian atas kesiapan pemerintah daerah secara umum". No skala-kecil process route.
- Anchor freshness: all 3 anchors differ from every August anchor and from both September siblings' anchors.
- **Verdict: distinct angle confirmed** — all overlaps far under the 0.4 ceiling.

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran on the saved final; `jaminan-pemerintah-03.id.quality-input.json` written (3 runs: pre-fix, mid-fix, final)
- [x] AI-detector score **0.04** — well under the 0.30 revise threshold. Verdict `pass`. One low flag only: vocab-repetition 36.2% (see open issues)
- [x] Paragraph burstiness CV **0.566** (≥0.30 required); sentence burstiness CV **1.009**
- [x] Plagiarism — **3 of 8 distinctive passages web-checked** inside the 3-call cap; **plagiarism score 0.05**:
  - *Portal/PMK correction passage* — searched; no page reproduces it. Original.
  - *Madiun signature passage* — searched; results are topical (CNBC, ANTARA, portal KPBU, ptpii.co.id) with no verbatim ≥20-word overlap. Hits on ptpii.co.id are ignorable per rule.
  - *RPJMN funding-gap claim* — searched; figure corroborated, phrasing is the article's own.
  - Remaining 5 candidates unchecked for budget reasons; they are Perpres paraphrase with inline attribution (excluded by rule) or original prose. **This is stated as a limitation, not as a completed lookup.**
- [x] No non-PT PII verbatim hit ≥20 words on any checked passage. The one long verbatim quotation in the article (Perpres 38/2015 Pasal 6 ayat 1) is quoted and attributed inline, which the rule permits.
