---
brief_id: "capacity-building-pembiayaan-kreatif-02"
editor_run_date: "2026-09-22"
recommendation: "approve"
overall_score: 9
ai_score: 0.00
plagiarism_score: 0.06
---

# Editor QC Report — Anatomi Dokumen Pra-Studi Kelayakan KPBU: Isi dan Cara Memeriksanya

## Recommendation
**approve**

The number-one check passes cleanly: I audited the article word by word — frontmatter, H1, five body H2s, the main table and its footnote, all five FAQ answers, the meta description, and the conclusion — and **no count of kajian, komponen, or rumpun appears anywhere**, in words or digits. Every numeral in the file is a date, a regulation number, a Berita Negara number, a rupiah threshold, or an item in the KPBU project cycle; every number word ("dua bundel", "tiga pembaca", "empat tahap", "satu dokumen", "tiga pilar") is unrelated to the unverified structure claim. The five rumpun names survive only as an explicitly attributed secondary-source enumeration, with a verification pointer to JDIH Kementerian PPN/Bappenas in the body, a footnote under the table, and a second hedge inside FAQ #2 — three independent hedges, all intact, none of which converts into a direct claim from the regulation. The writer's decision to omit preparation duration is correct and I did not import the `-03` figure. Beyond that: zero em-dashes, zero AI openers, AI-detector 0.00 with paragraph burstiness CV 0.495, exactly 3 internal links to `institute.iigf.co.id` (no `gagas.co.id`/`ptpii.co.id`), 2 self-mentions, 40–60-word answers after all five body H2s, and 1.553 words inside the band. I fixed eight things in place (one factual overstatement, one CP3P-ownership ambiguity, one missing year anchor, two short FAQ answers, a duplicated CTA line, a mild cannibalization drift, and a clipped meta title). Nothing is left that needs a writer or strategist.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | 0 em-dashes, 0 banned openers, 0 "Selain itu"/"Dengan demikian"/"Penting untuk dicatat". Paragraphs run 1–4 sentences with real variation; instructor register, no brochure or press-release voice. |
| Factual & KPBU/PPP & sertifikasi accuracy | 9 | Every claim traces to the dossier. Hedges on Permen 9/2025 and the rumpun names reproduce the dossier wording without exceeding it. Chain regulation cited without the unverified "8 kajian". |
| On-page SEO compliance | 8 | All counts pass. Deduction: primary keyword is absent from meta_title, slug, and H1 — a deliberate strategist choice (the head term "Dokumen Pra-Studi Kelayakan KPBU" leads instead); the keyword does appear in meta description, first 100 words, and the closing. |
| GEO extractability (§2a) | 9 | 46/44/44/46/50-word direct answers after the five body H2s; 59-word definition snippet inside the first 150 words; FAQ FAQPage-ready; `date_modified` added. |
| IIGF Institute framing discipline | 10 | 2 self-mentions; PT PII knowledge-unit framing; APMG named as the issuer of the credential; no Kantor Bersama membership claim; no CP3P developer list (Rule 6 untriggered); no individuals. |
| Internal linking | 10 | Exactly 3, all inline, all on `institute.iigf.co.id`, hub in the lead, no "BACA JUGA". |
| FAQ quality | 8 | 5 Q&As, answers now 40–51 words each. Deduction: the brief asked for 6; the *whole lifecycle cost* Q&A was dropped by the writer (the concept is covered in H2 #5) and the word band left no comfortable room to restore it. |
| Originality (plagiarism + AI-detector) | 9 | AI 0.00, zero flags, CV 0.495. 3/3 plagiarism probes clean. Deduction only for the 3-query budget cap (see §F). |

## What I fixed (changelog)
- **Overstated portal claim** — H2 #2: "portal KPBU Kementerian Keuangan justru meluruskan bahwa istilah ini **menyesatkan**" → "**berpotensi membingungkan**". The dossier's source wording is "berpotensi membingungkan"; "menyesatkan" put a stronger judgment in Kemenkeu's mouth.
- **Verification pointer aligned to the brief's instruction** — H2 #3: "konfirmasi langsung ke salinan Berita Negara" → "konfirmasi ke salinan resmi di **JDIH Kementerian PPN/Bappenas**". The Berita Negara reference is retained in the table footnote and now also in FAQ #2, so both pointers survive.
- **CP3P ownership made explicit** — H2 #3 closing sentence now reads "...jalur sertifikasi KPBU berskala internasional **yang kredensialnya diterbitkan APMG**." Previously the sentence linked the certification track to `institute.iigf.co.id` without naming the credential owner in the same clause — a latent Rule 4 ambiguity.
- **Year anchor on the only rupiah figure** — VGF threshold now reads "Rp 100 miliar (PMK No. 223/PMK.011/2012 jo. PMK No. 170/PMK.08/2018, **status per pengecekan 2026**)".
- **FAQ #2 strengthened (39 → 51 words)** — added the gazette identifier: "bersumber sekunder **dan belum terverifikasi ke naskah Berita Negara RI Tahun 2023 Nomor 777**". Lifts the answer into the 40–80-word band and makes the hedge self-contained for anyone extracting that Q&A alone.
- **FAQ #1 and #3 lifted into band** — #1 39 → 45 words ("Kedalamannya jauh melampaui Studi Pendahuluan di tahap perencanaan."); #3 38 → 44 words ("diuji lewat penjajakan minat calon investor sebelum lelang badan usaha dimulai").
- **Cannibalization drift trimmed** — conclusion: "**Memetakan kebutuhan pelatihan tim** lebih dulu..." → "**Melatih tim membaca dokumen penyiapan** lebih dulu biasanya lebih murah daripada menambal dokumen yang sudah jadi." Training-needs mapping edges into the August `-03` competency-mapping territory; the replacement keeps the artefact angle.
- **Duplicate CTA line varied** — the draft's "Ikhtisar program pelatihan dan kajian KPBU dapat Anda telusuri di institute.iigf.co.id." was near-identical to this month's `sertifikasi-kpbu-01` closer. Now: "Materi pelatihan dan kajian tentang penyiapan proyek KPBU dapat Anda telusuri di institute.iigf.co.id."
- **Meta title EYD** — "Isi dan Cara Periksa" → "Isi dan Cara Memeriksa" (54 → 56 chars, still ≤60).
- **Frontmatter** — added `date_modified: "2026-09-22"` (§2a freshness, matching the August finals' convention); `word_count` synced 1512 → **1553**.

## What I flagged (open issues)
- ⚠️ **The five-rumpun structure is still not primary-sourced.** The article is safely hedged, but the underlying gap remains. *Recommendation*: before publication, open `https://jdih.bappenas.go.id/peraturan/detailperaturan/3383/` in an ordinary browser (the 403 hit the researcher's automated fetch, not necessarily a human session). **One new lead from this run**: my plagiarism probe surfaced `kpbu.kemenkeu.go.id/read/1204-1658/...` ("Transaksi Proyek KPBU") in a result set that enumerated the same five rumpun — worth a WebFetch next run, since a Kemenkeu portal page would be a materially better source than the association review. I did not add it to the article (not in the dossier, not verified by me).
- ⚠️ **Primary keyword is absent from meta_title, slug, and H1.** *Recommendation*: accept. Forcing "Capacity Building pembiayaan kreatif" into a ≤60-char meta title would blow the limit or displace the head term readers actually type, and the slug is already baked into this month's link map. The keyword carries the meta description, the first 100 words, and the closing.
- ⚠️ **FAQ is at 5, the brief asked 6** (the *whole lifecycle cost* question). *Recommendation*: optional future addition if the band is relaxed; the concept is already answered in H2 #5 with the verbatim Kemenkeu quote, so GEO coverage is not lost.
- ⚠️ **The lead is an illustrative archetype**, not a documented case ("Sebuah dinas daerah menerima dokumen... dua bundel"). No source is claimed and no number is attributed to it. *Recommendation*: leave as is — the style guide asks for a concrete recognizable problem, and over-hedging a narrative lead would cost more than it protects.
- ⚠️ **Mixed orthography "pra-studi kelayakan" / "prastudi kelayakan"** appears throughout (as it does in the dossier and in the official sources themselves). *Recommendation*: leave as is; it widens variant coverage and matches practitioner usage. Flagging only so it is a choice, not an oversight.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — 0 hits
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — 0 occurrences in the whole article
- [x] No "Penting untuk dicatat / dipahami bahwa" — 0 hits
- [x] "Dengan demikian" not overused — 0 occurrences
- [x] Em-dash count ≤2 — **0**
- [x] Varied paragraph lengths — 1-sentence (L58, L84), 2-sentence (L38), 3–4-sentence (L40, L88, L96) blocks alternate; burstiness CV 0.495
- [x] Not every H2 → 3-bullet list — H2 #1 prose, #2 prose + numbered list, #3 prose + table + 3 bullets, #4 prose only, #5 prose + quote
- [x] No generic claims without numbers — dates, gazette number, threshold, and check dates carry the argument
- [x] No stacked hype adjectives — "paling mahal", "paling sering", "paling operasional" all describe risks/frequency, never the client
- [x] No service-dump paragraph — one programme anchor (*PPP capacity building*), in the closing only
- [x] Register check — no brochure ("segera daftar") and no press-release ("dalam rangka mendukung") constructions

### B. Factual & KPBU/PPP & sertifikasi spot-check
| Claim | Source check | Verdict |
|---|---|---|
| Permen PPN/Kepala Bappenas No. 7 Tahun 2023 ditetapkan 22 Sept 2023, diundangkan 29 Sept 2023, Berita Negara RI 2023 No. 777 | dossier ✓ (direct fetch `peraturan.bpk.go.id/Details/271431`, 2026-09-17, cross-confirmed vs August run) | pass |
| Perpres No. 38 Tahun 2015 ditetapkan 20 Maret 2015, masih berlaku per pengecekan 2026 | dossier ✓ (`peraturan.go.id`, verified 2026-08-12) | pass |
| Permen PPN/Bappenas No. 9 Tahun 2025 ditetapkan 30 Des 2025, berlaku 31 Des 2025; area perubahan **tidak secara eksplisit** menyentuh struktur kajian pra-FS | dossier ✓ — article reproduces the hedge verbatim in substance ("berdasarkan ringkasan resmi yang tersedia"); does **not** claim the structure is untouched | pass |
| VGF hanya untuk proyek layak ekonomi belum layak finansial; nilai investasi minimum Rp 100 miliar (PMK 223/PMK.011/2012 jo. PMK 170/PMK.08/2018) | dossier ✓ (`kpbu.kemenkeu.go.id`, verified 2026-08-12); reference year added by me this pass | pass |
| Rumpun strategis/ekonomi/komersial/finansial/manajemen | dossier ✓ **as secondary-source claim only** — article attributes to "ulasan praktisi KPBU", states no count, and points to JDIH Bappenas for the pasal text | pass (hedge intact) |
| Kerangka lama masih tayang di portal Kemenkeu tanpa tanggal publikasi dan tanpa rujukan ke Permen 7/2023, per pengecekan 17 Sept 2026 | dossier ✓ (direct fetch `kpbu.kemenkeu.go.id/read/76-223`, 2026-09-17); article marks "sudah usang" as reader inference, not a Kemenkeu statement | pass |
| Verbatim CAPEX/OPEX quote | dossier ✓ verbatim, confirmed twice (Aug + Sept); reproduced in quotation marks with inline attribution | pass |
| Rantai regulasi: Permen 4/2015 diubah 2/2020, digantikan 7/2023 | dossier ✓ (BPK metadata). Unverified "8 kajian" **absent** ✓ | pass |

**Prohibited-content sweep**: RPJMN 2025–2029 rupiah figures — 0 hits. `institute.iigf.co.id` batch dates — 0 hits. "Kantor Bersama" — 0 hits (Rule 5 untriggered). MIF / AfDB / ADB / EBRD / IsDB / CP3P developer list — 0 hits (Rule 6 untriggered; no list appears, so nothing to be incomplete). Named individuals — 0 hits. Unverified pasal numbers cited — 0 (the article deliberately asks the reader to make the penyusun cite the pasal, rather than citing one itself).

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: **56 chars**; "Dokumen Pra-Studi Kelayakan KPBU" at position 0
- [x] Meta description 140–160 — actual: **155**, contains "capacity building pembiayaan kreatif"
- [x] Slug ≤60, kebab-case — actual: `anatomi-dokumen-pra-studi-kelayakan-kpbu` (**40**); contains the head term, not the primary keyword (see flags)
- [~] H1 contains keyword — contains the secondary head term, not the primary keyword (strategist's title; flagged, accepted)
- [x] H2 count 4–5 body — actual: **5 body** + FAQ + Kesimpulan = 7 `##` total, inside the playbook's 4–7
- [x] ≥1 question-format H2 (**3**: #1, #2, #3); ≥1 honest/counter-conventional H2 (#4 "Template ... bisa jadi sudah usang")
- [x] Keyword in first 100 words — appears at ~word 55
- [x] Definition snippet near top — blockquote at 59 words, inside the first 150
- [x] ≥8 LSI terms — counted **20+**: dokumen pra-studi kelayakan, prastudi kelayakan, studi pendahuluan, Permen PPN/Kepala Bappenas 7/2023, OBC, FBC, kajian finansial, kajian manajemen, whole lifecycle cost, CAPEX, OPEX, cost of fund, EIRR, ENPV, FNPV, FIRR, DSCR, WACC, market sounding, VGF, PDF, PJPK, Perpres 38/2015
- [x] 3 internal links (1 hub + 2 cousins) — `/capacity-building` (lead) · `institute.iigf.co.id/` (H2 #3) · `/e-library/lainnya/77/...` (H2 #5). Exactly 3, all inline, no "BACA JUGA", no `gagas.co.id`/`ptpii.co.id`
- [x] ≥1 external authoritative citation — actual: **2** (`peraturan.bpk.go.id` JDIH BPK; `kpbu.kemenkeu.go.id`)
- [x] FAQ 5–7 Q&As — actual: **5** (brief asked 6 — flagged)
- [x] ≥1 list + ≥1 table — numbered list (3 steps), bullet list (3 glosses), 4-column table (5 rows)
- [x] Word count inside the band — **1.553** (`tools/count_words.py`), band 1.200–1.600, target 1.450. *(Note: `quality-check.ps1` reports 1598 using its own tokenisation incl. table pipes/frontmatter; the pipeline gate is `count_words.py`.)*

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — measured: **46 / 44 / 44 / 46 / 50** words (H2 #1–#5), each standalone-answerable
- [x] Each body paragraph makes one independently quotable, verifiable point — spot-checked L36/38/40 (who the document serves, the 4-stage cycle, the regulation identity), L80/82/86 (the live old framework, its contents, the re-grouping-vs-reduction distinction), L92/94/96 (CAPEX bias, whole-lifecycle remedy, VGF consequence)
- [x] FAQ parseable for FAQPage schema — clean `### question` + single-paragraph answer, 40–51 words each
- [x] Freshness noted in the meta block — `date_modified: "2026-09-22"` added; in-body check dates ("per pengecekan 17 September 2026", "per pengecekan 2026") reinforce it

### D. IIGF Institute framing discipline (product_matrix.md + style_guide §11)
- [x] Framed as PT PII's knowledge-management unit — "IIGF Institute sebagai unit manajemen pengetahuan PT Penjaminan Infrastruktur Indonesia (Persero)". Not a university, not an independent entity, **not** the owner/awarder of CP3P — APMG is now named as the credential's issuer in the same sentence as the certification anchor
- [x] ≤3 IIGF Institute self-mentions — actual: **2** (conclusion + the CTA line). "IIGF" appears once, with "unit manajemen pengetahuan PT Penjaminan Infrastruktur Indonesia (Persero)" and "KPBU" adjacent → disambiguation rule satisfied
- [x] No unverifiable superlatives — no "terbaik/nomor satu/terlengkap"; no ATO-first claim made here (so no sourcing burden)
- [x] Programme names match product_matrix.md — one anchor only: *PPP capacity building*, in the closing, as the brief specified
- [x] Closing uses a company_profile.md positioning line — the three-pillars line, paraphrased without em-dashes
- [x] Soft website CTA present as the FINAL line, after the conclusion — "Materi pelatihan dan kajian tentang penyiapan proyek KPBU dapat Anda telusuri di institute.iigf.co.id." Consultative, not "beli/daftar sekarang"
- [x] Hub link as a natural inline anchor in the lead — "[capacity building pembiayaan kreatif](https://institute.iigf.co.id/capacity-building)", descriptive, mid-sentence

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: `capacity-building-kpbu-kompetensi-tim-pjpk` (August `-03`, angle `peta-kompetensi-tim-pjpk-per-tahap`)
- Subtopic overlap (Jaccard estimate): **0,12** vs August `-03`. Shared vocabulary ("tahap penyiapan", "studi pendahuluan", "kelayakan finansial") but the object differs throughout: August `-03` maps *what people must be able to do per stage*; this article dissects *what the document must contain and how to inspect it*. No competency map, no per-stage skill list, no training-pathway comparison. The one sentence that leaned that way ("memetakan kebutuhan pelatihan tim") was rewritten this pass.
- Vs other August articles: `-01` fondasi/UU HKPD ≈ 0,05 · `-02` instrumen pembiayaan ≈ 0,03 · `-04` diagnosis proyek mandek ≈ 0,10 (that one lists *causes of failure* with a diagnostic checklist; this one lists *document contents* with a per-kajian "tanda bahaya" column — different artefact, different column logic)
- Vs September siblings: `-01` retensi kapasitas ≈ 0,05 · `-03` biaya & durasi penyiapan ≈ **0,12** — the adjacency is real but contained: this article names **no duration and no preparation cost**, and touches PDF in a single sentence as a route to help, whereas `-03` owns the funding-and-timeline discussion. `-04` syariah/sukuk ≈ 0,03
- Verdict: **distinct angle confirmed** — all pairings well under 0,4; no strategist re-spin needed

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran on the saved final; `capacity-building-pembiayaan-kreatif-02.id.quality-input.json` written
- [x] AI-detector score < 0.30 — actual: **0.00**, verdict `pass`, **0 flags**, `external_api_used: false` (heuristic mode)
- [x] Paragraph burstiness CV ≥ 0.30 — actual: **0.495** (sentence burstiness 0.617; top-30 vocabulary share 0.286). No re-run required
- [x] Plagiarism: distinctive passages web-checked; no non-IIGF-Institute verbatim hit ≥20 words — **plagiarism score 0.06**
  - Probe 1 — `"Pertanyaan di ruang rapat bukan soal isinya"` (lead): no match; results were unrelated meeting-skills content
  - Probe 2 — `"bukan dokumen yang ramping, melainkan dokumen yang bolong"` (the article's most quotable analytical line): no match anywhere
  - Probe 3 — `"dikelompokkan ke dalam rumpun strategis, ekonomi, komersial, finansial, dan manajemen"` (the passage paraphrased from the non-exempt secondary association source): **no verbatim match**; the result set discussed the same five rumpun in different wording, confirming the article's phrasing is its own. Side benefit: it surfaced a Kemenkeu portal page as a possible primary-ish source (see flags). A `ptpii.co.id` PDF also appeared in the results and was **not** used or linked — isolation rule respected
- **Degraded leg, stated plainly**: the WebSearch budget for this article was **3 plagiarism queries, all 3 spent**. Of the 8 candidates the script extracted, 5 were left unprobed; 4 of those are markdown/table fragments and regulation-identity strings (low lift risk) and 1 is the standard PJPK definition, which is an exempt well-known definition. Two passages are intentionally near-verbatim and exempt by rule because they are inline-attributed to the cited authoritative source: the CAPEX/OPEX sentence (in quotation marks) and the old-components enumeration (followed by a `kpbu.kemenkeu.go.id` link). I am not holding the verdict for an environment quota.

## The shipping question
Would WEBARQ Promote be proud of this on institute.iigf.co.id tomorrow, in front of a senior KPBU practitioner and a skeptical prospective participant? Yes. The practitioner gets a table they can hold against a real consultant deliverable, a named failure mode the Ministry's own portal admits to, and an honest warning that two chapter frameworks are circulating — including the admission that the newer one could not be verified against the gazette. The skeptic gets no count they can disprove, no fee, no superlative, and one soft invitation at the very end. The hedging is the credibility here, not a weakness.
