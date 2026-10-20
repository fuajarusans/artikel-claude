---
brief_id: "pembiayaan-kreatif-03"
editor_run_date: "2026-08-12"
recommendation: "approve"
overall_score: 9
ai_score: 0.04
plagiarism_score: 0.05
---

# Editor QC Report — Pembiayaan Kreatif Mandek: 7 Penyebab Proyek Daerah Berhenti Sebelum Lelang

## Recommendation
**approve**

This is the strongest kind of article this cluster can produce: it takes a subject the SERP systematically avoids (why local creative-financing projects stall) and treats it diagnostically rather than promotionally. The tone gate holds cleanly — no region is named as a failure, no official appears, and the one named project (Madiun) is cited as a success. Every figure carries a reference year, only current law is cited (PMK 68/2024, UU 1/2022, UU 2/2012), and the two weakest-evidence causes now read explicitly as KPBU practice doctrine rather than as quoted legal requirements. The heuristic AI-detector returns 0.04 with zero em-dashes and sentence-length CV of 1.09. Ten in-place fixes were applied; the article moved from 1.775 to 1.780 words, still inside the 1.500–1.800 band. One honest limitation: the external plagiarism lookup could not be run because the session's WebSearch budget was exhausted (200/200), so the originality verdict rests on heuristic and local-corpus evidence only — documented in section F and as an open flag.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | 0 em-dashes, sentence CV 1.09, no cliché openers. The "sikap yang rasional bagi pejabat yang tanda tangannya akan diperiksa bertahun-tahun kemudian" aside is exactly the practitioner register the style guide asks for |
| Factual & penjaminan infrastruktur / KPBU accuracy | 9 | All 5 spot-checked claims pass. Only current law cited. One claim (DKI Jakarta, 27 Juli 2026) is orchestrator-supplied rather than dossier-verified — flagged, not a defect in the draft |
| On-page SEO compliance | 9 | Full checklist passes. FAQ sits at the 5-question floor because the word ceiling left no room to add a sixth |
| GEO extractability (§2a) | 9 | 41–50-word direct answer after every body H2; table designed to be read row-by-row |
| PT PII framing discipline | 10 | 2 named mentions + soft CTA = 3. BUPI/SMV Kementerian Keuangan framing, penjaminan ≠ subsidi preserved, no superlatives, no officials, no Danantara |
| Internal linking | 10 | Exactly 3 distinct ptpii.co.id URLs, all natural inline anchors, hub in the lead, zero "BACA JUGA", zero institute.iigf.co.id |
| FAQ quality | 8 | 5 Q&As, 41–47 words each after fix, all FAQPage-parseable. At the floor rather than mid-range |
| Originality (plagiarism + AI-detector) | 8 | AI 0.04; no verbatim overlap with any sibling article beyond a statute's official title. External web verification not possible this session |

## What I fixed (changelog)
- **Evidence-tier correction (cause #2).** "Prinsip **baku** alokasi risiko … **adalah** … ; PMK No. 68 Tahun 2024 **bahkan** mewajibkan …" → "Prinsip yang berlaku **dalam praktik**: … jatuh ke pihak yang paling mampu mengelolanya. PMK No. 68 Tahun 2024 mewajibkan …". The old "bahkan" implied the PMK was the source of the principle; the dossier explicitly could not extract that article text. Now the doctrine and the verified Pasal-75 obligation are two separate claims.
- **Time-bound bond fact sharpened.** "…persetujuan DPRD bukan penerbitan" → "Persetujuan itu belum berupa pendaftaran ke OJK, apalagi penerbitan." Jakarta is now unambiguously *pending*, and the sentence closes the exact gap the OJK statement is about (registration statements), not just issuance.
- **Hedged the unattributed institutional cause (#7).** "kesiapan kelembagaan pengelolaan utang di banyak pemda belum terbentuk" → "kapasitas kelembagaan pengelolaan utang di tingkat pemda **umumnya** belum terbentuk". Dossier flag: this reason never appeared in the OJK quote. Same hedge applied to FAQ #4.
- **Removed a note-to-self sentence.** "Fakta obligasi daerah **sebaiknya selalu ditulis** dengan tanggalnya" read as leaked editorial instruction → "Fakta di balik penyebab ketujuh perlu **dibaca** dengan tanggalnya."
- **Dated a status claim.** Madiun "telah berstatus operasional" → "sudah beroperasi komersial **sejak 2023**" (company_profile.md: commercial operation 18 Juli 2023). A status without a year ages the same way a bare number does.
- **Grammar.** "kerap tidak **pernah** diajukan" → "kerap tidak diajukan".
- **Anchor-text quality on both external citations.** Links moved off bare dates onto the claim verb: "[menyatakan pada 26 Mei 2026]", "[menyatakan pada 2 Juni 2025]". Added the missing inline link to **ADB PPP Monitor**, which was declared in `external_citations` but unlinked in the body.
- **Rhythm.** Split "Penyebab kedua menyimpan satu salah kaprah." into its own one-line paragraph (zero word cost). Paragraph burstiness CV rose 0.358 → 0.419. Also trimmed three flabby connectors ("Satu koreksi juga sering diperlukan pada…", "karena itu", "adalah" → colon).
- **FAQ #5 raised to the 40-word floor** (39 → 41 words).
- **Frontmatter**: `word_count` 1710 → 1780 (draft value was stale by 65), added `date_modified: "2026-08-12"` for GEO freshness, converted `secondary_keywords` to block style to match the other finals in this run.

## What I flagged (open issues)
- ⚠️ **External plagiarism lookup could not be run.** The session's WebSearch budget was exhausted (200/200) before this article reached QC. Not a single candidate query was executed. `plagiarism_score: 0.05` is a heuristic + local-corpus estimate, not a verified web result. *Recommendation*: if the curator wants a hard originality guarantee before publishing, re-run `tools/quality-check.ps1` and web-check the 8 candidate queries in `pembiayaan-kreatif-03.id.quality-input.json` in a fresh session. Nothing in the local evidence suggests a problem.
- ⚠️ **One claim is orchestrator-supplied, not dossier-verified**: DPRD DKI Jakarta approving a Rp 3,5 triliun issuance plan for 2027 on 27 Juli 2026. It does not appear in `pembiayaan-kreatif-03.dossier.md`. It is written conservatively (approval only, explicitly not a filing and not an issuance), so the downside if it is imprecise is small. *Recommendation*: confirm the date and amount against a primary source before publishing, since it is the article's freshest fact.
- ⚠️ **Dossier vs company_profile conflict on Madiun.** The dossier states Madiun is "bukan bagian dari portofolio proyek yang dijamin PT PII" (inferred from the project page not naming PT PII). `company_profile.md` states the opposite and dates it: PT PII signed the Perjanjian Penjaminan and Perjanjian Regres on 20 September 2022. The article correctly takes neither position, so nothing needs changing here — but the **dossier's negative claim should be corrected** so a future writer in this cluster does not publish it. *Recommendation*: researcher fix, next run.
- ⚠️ **FAQ is at the 5-question floor** while the brief drafted 8 candidates. Three good questions were left unused ("Apakah proyek kecil di kabupaten bisa memakai skema KPBU?", "Apa itu VGF dan kapan proyek daerah membutuhkannya?", "Siapa yang menanggung risiko jika proyek KPBU gagal?") purely because the article sits 20 words under the 1.800 ceiling. *Recommendation*: if the band is ever relaxed for this piece, those three are the first additions.
- ℹ️ **`paragraph-low-variance` [low]** from the scanner: CV 0.419 against its stretch target of 0.45. This is a structural consequence of GEO compliance — every body H2 must open with a 40–60-word answer, which compresses the paragraph-length distribution by design. Well above the binding 0.30 threshold. No action.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — 0 hits. Lead opens on a concrete stalled-project pattern
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — 0 occurrences anywhere
- [x] No "Penting untuk dicatat / dipahami bahwa" — 0
- [x] "Dengan demikian" not overused — 0 occurrences
- [x] Em-dash count ≤2 — **0**. (4 en-dashes, all numeric ranges: 15–30 tahun, 1990–2019)
- [x] Varied paragraph lengths — sentence-length CV 1.09, range 3–56 words; paragraph CV 0.419 after the split fix
- [x] Not every H2 → 3-bullet list — H2 #1 pure prose, #2 answer + numbered list + prose, #3 prose + table, #4 answer + bullets + prose, #5 pure prose
- [x] No generic claims without numbers — 5 dated external anchors carry the argument
- [x] No stacked hype adjectives — none present
- [x] No service-dump paragraph — one product anchor (Pembiayaan Kreatif), stated once at the close
- [x] **No press-release register** (this client's signature failure mode) — the article argues *against* the promotional frame the ministry sources use, and says so

### B. Factual & penjaminan infrastruktur / KPBU spot-check
| Claim | Source check | Verdict |
|---|---|---|
| DJPK Kemenkeu, **26 Mei 2026**: hambatan utama bukan ketersediaan instrumen, melainkan komitmen kepala daerah dan kesiapan teknis pemda | dossier ✓ (confidence: high, exact quote verified from djpk.kemenkeu.go.id/?p=76326) | **pass** |
| OJK, **2 Juni 2025**: belum ada pemda yang mengajukan pernyataan pendaftaran obligasi/sukuk daerah; posisi tidak berubah hingga pertengahan 2026 | dossier ✓ (high) + written time-bound as required, with the Jakarta plan marked pending | **pass** |
| **PMK No. 68 Tahun 2024** sebagai dasar Dukungan Kelayakan (VGF) dan kewajiban BUPI menerbitkan Acuan Alokasi Risiko tahunan | product_matrix ✓ / company_profile ✓ (berlaku 18 Oktober 2024; Pasal 75). Revoked PMK chain (223/2012, 143/2013, 260/2010, 8/2016) correctly absent | **pass** |
| **UU No. 2 Tahun 2012** (pengadaan tanah) dan **UU No. 1 Tahun 2022** (HKPD) masih berlaku | dossier ✓ (high, peraturan.go.id, diverifikasi 2026-08-12) | **pass** |
| **ADB PPP Monitor: 135 proyek PPP mencapai *financial close* 1990–2019** | dossier ✓ (medium) — and the article labels the range explicitly plus adds "rentang historis dan bukan potret 2026" | **pass** |
| Madiun: nilai investasi ~**Rp 100 miliar**, beroperasi komersial sejak **2023** | dossier ✓ (Rp 100 miliar, portal resmi) + company_profile ✓ (operasi komersial 18 Juli 2023). Banned granular details (7.459 titik, 299,7 km, 20 Sept 2020, "pertama beroperasi komersial") all absent | **pass** |

**Prohibited-content sweep — all clear:** no RPJMN 2025–2029 figures · no APBN 23% / APBD 17% split · no DAK Fisik 2026 · no TKD 2026 (Rp 693 triliun) · no "30% provinsi / 1% kabupaten / 12% kota" statistic · no "15 tahun" bond-regulation duration · no claim that Jabar/Kaltim/Jateng planned issuances · no revoked PMK cited · **no named officials of any kind** (Direksi, Komisaris, Dirjen, Menteri, kepala daerah).

**Reference-year audit:** every figure in the article carries one — 26 Mei 2026 · 2 Juni 2025 · pertengahan 2026 · 27 Juli 2026 · Rp 3,5 triliun *untuk 2027* · PMK 68/2024 · UU 2/2012 · UU 1/2022 · 135 proyek *1990–2019* · Rp 100 miliar *(diakses 2026)* · beroperasi *sejak 2023*. Zero bare numbers.

**Tone gate — passed.** No stalled project is named. Failure is discussed as pattern and typology only ("sistem penerangan jalan, pasar induk, atau instalasi pengolahan air" — generic, unattributed). Madiun appears solely as a counter-example of success. The DJPK quote about "komitmen kepala daerah" is attributed, dated, and immediately balanced by a paragraph that reads the pemda's caution as *rational* ("sikap yang rasional bagi pejabat yang tanda tangannya akan diperiksa bertahun-tahun kemudian"). The closing explicitly makes diagnosis the pemda's own non-delegable work.

**Corrective-action audit (risk #5).** Every action in the table is something a pemda does: ajukan Dukungan Kelayakan · susun ulang alokasi risiko · gabungkan proyek lintas OPD · perbaiki dokumen dan mulai penetapan lokasi · kunci komitmen di RPJMD dan libatkan DPRD · uji Value for Money · bangun kapasitas pengelolaan utang. The "Siapa yang bergerak" column names only pemda actors (OPD teknis, Bappeda, Simpul KPBU, tim penyiapan, BPKAD, DPRD). No action is "hubungi PT PII". No funding certainty is promised anywhere; the closing hedges to "**berpeluang** sampai ke *financial close*" and states that the useful conversation starts *before* the tender, not after a second failed one.

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: **55 chars / position 0**
- [x] Meta description 140–160 — actual: **150 chars**
- [x] Slug ≤60, kebab-case, keyword — actual: `pembiayaan-kreatif-mandek-penyebab-proyek-daerah` (48)
- [x] H1 contains keyword — "**Pembiayaan Kreatif** Mandek: 7 Penyebab Proyek Daerah Berhenti Sebelum Lelang"
- [x] H2 count 4–7 — actual: **7** (5 body + FAQ + Kesimpulan)
- [x] ≥1 question-format H2 (2: "Mengapa proyek pembiayaan kreatif di daerah sering berhenti sebelum lelang?", "Apakah proyek yang macet harus diganti skemanya atau diperbaiki?"); ≥1 honest/counter-conventional H2 ("Yang jarang diakui: sebagian proyek memang sebaiknya tidak dilanjutkan")
- [x] Keyword in first 100 words — appears at ~word 68
- [x] **Disambiguation trio in first 100 words** — "infrastruktur" (w9) + "APBD" (w33) + "KPBU" (w38) + "daerah" (w5). Confirmed
- [x] Definition snippet near top (40–60 words) — **46-word** causal-answer blockquote per brief override; the term definition itself appears once, compactly, under H2 #1
- [x] ≥8 LSI terms — counted: **24/24** target terms present
- [x] 3 internal links (1 hub + 2 cousins) — `/pembiayaan-kreatif` (lead, inline), `/kpbu` (cause #2), `/public-private-partnership` (H2 #5). **3 distinct URLs, zero institute.iigf.co.id, zero "BACA JUGA"**
- [x] ≥1 external authoritative citation — actual: **3** (DJPK Kemenkeu, OJK via ANTARA, ADB PPP Monitor), all inline
- [x] FAQ 5–7 Q&As — actual: **5** (at the floor; see flags)
- [x] ≥1 list + ≥1 table — numbered list (7), bullet list (4), one 7-row table
- [x] Word count inside `target_word_count` band 1.500–1.800 — actual: **1.780** (`tools/count_words.py`), frontmatter synced

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — measured: **50 / 48 / 41 / 43 / 45 words**. All five inside band
- [x] Each body paragraph makes one independently quotable, verifiable point — table is built one-claim-per-row; the numbered list uses bold lead-ins
- [x] FAQ parseable for FAQPage schema (`## FAQ` → `###` questions → answer paragraph); **`date_modified: "2026-08-12"` added to the meta block** for freshness

### D. PT PII framing discipline (product_matrix.md + style_guide §11)
- [x] Framed as the government-guarantee provider — "PT PII, selaku Badan Usaha Penjaminan Infrastruktur di bawah Kementerian Keuangan, **menjamin** risiko yang menjadi tanggung jawab pemerintah". Not a lender, investor, contractor, operator or regulator. No Danantara reference
- [x] ≤3 PT PII self-mentions — actual: **3** (mid-article aside, closing positioning line, soft CTA)
- [x] No unverifiable superlatives — none
- [x] Product names match product_matrix — single anchor **Pembiayaan Kreatif**, correct for the infrastruktur-daerah/APBD row. No service-dump
- [x] Closing uses a company_profile.md positioning line — "lebih dari sekadar menerbitkan jaminan, PT PII mendampingi penyiapan dan strukturisasi transaksi…", hedged to "berpeluang sampai ke *financial close*"
- [x] Soft website CTA present as the FINAL line, after `## Kesimpulan` — "Gambaran lebih rinci mengenai skema Pembiayaan Kreatif untuk infrastruktur daerah dapat Anda telusuri di ptpii.co.id." Consultative, no "beli sekarang"
- [x] Hub link is a natural inline anchor in the lead — "[skema pembiayaan kreatif untuk infrastruktur daerah]", descriptive, not a callout
- [x] **Guarantee nuance preserved**: "Risiko komersial badan usaha tetap di sisi badan usaha, dan penjaminan bukan subsidi" — the critical caveat for a failure-themed article

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: **none in `articles_history/index.json`** (empty — first run for this client). Compared instead against the two same-batch siblings.
- `pembiayaan-kreatif-01` (instrument map: 6 instruments, "apa itu", "sama dengan berutang?") — subtopic overlap **≈0.18**. Distinct.
- `pembiayaan-kreatif-02` (ex-ante readiness: 8 prasyarat, VGF/PDF access mechanics, Availability Payment, "kapan BELUM mengambil") — subtopic overlap **≈0.30**, under the 0.4 threshold. **The boundary holds where it matters**: -03 names VGF and Fasilitas Penyiapan Proyek only as *pointers* in a corrective column and never explains how to access them (that mechanic is -02's); -03 treats weak documents as an externally visible *symptom* ("market sounding sepi") rather than a checklist item, exactly as the brief required. The nearest pair — -02's "Kapan daerah sebaiknya BELUM mengambil skema" vs -03's "sebagian proyek memang sebaiknya tidak dilanjutkan" — is separated by tense: -02 prevents entry, -03 stops something already running.
- Verdict: **distinct angle confirmed.** No strategist re-spin needed.

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran; `pembiayaan-kreatif-03.id.quality-input.json` written (run twice: before and after the rhythm fix)
- [x] AI-detector score < 0.30 — actual: **0.04** (verdict `pass`; thresholds revise ≥0.30, reject ≥0.50)
- [x] Paragraph burstiness CV ≥ 0.30 — actual: **0.419** (improved from 0.358 by the paragraph split). Sentence burstiness **1.085**; top-30 vocab share 0.326
- [ ] ⚠️ **Plagiarism: distinctive passages NOT web-checked.** The scanner extracted 8 candidate passages, but **the session's WebSearch budget was exhausted (200/200) and every lookup was refused** — I ran one and it was rejected, so I did not attempt the rest. **No web verification was performed and none is claimed.**

  **What I could verify locally instead**, and did:
  - 15-word verbatim shingle scan of the final against **every brief, dossier, draft and final in `monthly_runs/2026-08`**. Result: the only cross-article match is the **official title of UU No. 1 Tahun 2022** ("…tentang Hubungan Keuangan antara Pemerintah Pusat dan Pemerintahan Daerah") — a statute name, unavoidable and correct. **No other ≥15-word span is shared with any sibling article.**
  - 67 shingles are shared with its own `pembiayaan-kreatif-03.dossier.md`, concentrated in the FAQ block, which the researcher drafted for the writer. The dossier is an internal working document, not a published page; this is pipeline design, not duplication.
  - Manual read for lifted text: no long verbatim regulation passages. The two institutional statements (DJPK, OJK) are short, attributed inline, dated, and linked to source.
  - `plagiarism_score: 0.05` reflects this heuristic + local-corpus evidence only. It is **not** a verified external result.

## The shipping question
Would WEBARQ Promote be proud of this on ptpii.co.id tomorrow, read by a senior KPBU practitioner and a skeptical PJPK official? **Yes.** The PJPK official is the one who benefits most: the article gives them a symptom-first diagnostic table they can take into an internal meeting, tells them plainly when to stop a project, and does it without blaming anyone or promising that a phone call to PT PII will unstick anything. That is the honest register this client's niche rewards, and it is the differentiator the SERP leaves wide open.
