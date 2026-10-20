---
brief_id: "jaminan-pemerintah-01"
editor_run_date: "2026-09-21"
recommendation: "approve"
overall_score: 9
ai_score: 0.04
plagiarism_score: 0.04
---

# Editor QC Report — Jaminan Pemerintah KPBU: Di Mana Tercatat dalam APBN?

## Recommendation

**approve**

The draft arrived unusually clean on the mechanical markers (zero em-dashes, zero banned openers, paragraph-length CV 0.467, all five H2 answers already inside the 40–60-word GEO band) and the angle is exactly the one the brief reserved: the accounting and disclosure status of an *uncalled* guarantee, with the claim-flow and coverage-map territory left to the August siblings. Every hard numeric constraint holds — no gearing ratio, no capacity figure, no derivable multiple (no equity or PMN figure appears anywhere), and no guarantee-exposure rupiah figure is asserted from any of the three disclosure channels; the article says so out loud rather than papering over the gap. The one binding violation was the draft quoting **PSAP 09 by paragraph number as literal standard text**, which the brief forbids and which the dossier itself flags as sourced only from the superseded Lampiran II; I rewrote the three affected passages to anchor on **PP 71/2010** as the accounting vehicle without losing the disclosed-vs-recognised spine. Ten fixes applied in place, three open flags, none blocking. This reads like a practitioner explaining an architecture, not a press release about it.

## Quality scores

| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Paragraph CV 0.467; lengths 11–92 words; zero em-dashes; concrete opener ("Tim keuangan mencarinya di neraca APBN dan tidak menemukannya"); no banned transition or hedge patterns |
| Factual & penjaminan infrastruktur / KPBU accuracy | 9 | 5/5 spot-checks pass; Pasal 7 mechanism and PMK 69/2023 independently web-confirmed; one correction applied (PSAP 09 → PP 71/2010) |
| On-page SEO compliance | 9 | Meta title 53 (keyword at char 0), description 151, slug 51, 7 H2s, 1.679 kata — every item inside spec |
| GEO extractability (§2a) | 9 | H2 answers measured at 48 / 47 / 49 / 42 / 43 words; definition snippet 59 words inside the first ~150; `date_modified` present |
| PT PII framing discipline | 10 | Exactly 3 mentions (aside + positioning line + CTA); BUPI/SMV framing correct; no officials, no superlatives, no Danantara, no lender/investor drift |
| Internal linking | 10 | 3 distinct ptpii.co.id URLs, all inline, all three anchors fresh vs August; zero institute.iigf.co.id |
| FAQ quality | 9 | 6 Q&As, all 45–49 words, PAA-derived, FAQPage-parseable; answers are slightly uniform in length but each carries a dated fact |
| Originality (plagiarism + AI-detector) | 9 | ai_score 0.04 (pass); 3 targeted web checks returned no verbatim match; resemblances are attributed regulation paraphrase |

## What I fixed (changelog)

1. **HARD CONSTRAINT — de-quoted PSAP 09.** Removed "Standar Akuntansi Pemerintahan Nomor 09, lampiran PP 71/2010, mendefinisikan…", the "Standar yang sama, pada paragraf 18…" attribution, and the "PSAP 09 sendiri menyatakan…" caveat. All three now anchor on **PP 71/2010 as the accounting vehicle** ("Standar Akuntansi Pemerintahan yang ditetapkan lewat PP 71/2010 memperlakukan…"), keeping both recognition thresholds intact but dropping the paragraph-level pinpointing the dossier could only verify against the superseded Lampiran II.
2. **Conflation guard on the portfolio figures.** "portofolio yang dijamin" → "portofolio penjaminan yang diterbitkan BUPI", and added an explicit closing line: *"Keduanya adalah angka portofolio penjamin, bukan angka eksposur yang diungkapkan dalam dokumen APBN."* Without it, a reader in a section titled "Yang tidak bisa Anda baca dari angka pengungkapan" could read Rp 113 triliun as the state-disclosed exposure — the exact conflation the brief marks pass/fail.
3. **Claim-history boundary.** "Tidak munculnya kewajiban di neraca hanya berarti…" (an assertion about the current state of the neraca, i.e. implicitly that no claim has been recognised) → "Ketika sebuah kewajiban tidak muncul di neraca, yang terbaca hanyalah…" — now a conditional reading rule that neither asserts nor speculates about claim history.
4. **Regres clause de-perfected.** "atas klaim yang **telah** dibayarkan" → "atas nilai klaim yang dibayarkannya kepada penerima jaminan"; dropped the hedge "umumnya". Removes the residual implication of a payment history. Still exactly one sentence, per the boundary.
5. **Commercial-risk precision.** "bukan permintaan yang meleset, bukan salah hitung biaya konstruksi…" → "bukan **risiko komersial yang tetap melekat pada badan usaha**: permintaan yang meleset, biaya konstruksi yang salah hitung, atau kelalaian operasi." States the blacklist rule positively instead of by example.
6. **Acronym discipline inside the H2 #3 answer block.** Expanded "Badan Pemeriksa Keuangan (BPK)" and "Badan Usaha Penjaminan Infrastruktur (BUPI)" at first use (both were previously introduced unexpanded, with BPK expanded only later in the table). Block went 45 → 49 words, still inside the GEO band; de-duplicated the table's now-redundant BPK expansion.
7. **LSI recovery.** Inserted "batas maksimal penjaminan" (a brief-listed secondary keyword previously absent) into lever 1: "keberadaan **batas maksimal penjaminan** dan kadensa peninjauannya, bukan satu angka rasio permanen." Legally accurate and does not hint at a number.
8. **Smoothed the PT PII aside.** The dropped-in one-liner in §4 now reads as two connected sentences tied to the preceding paragraph ("Penjaminan yang dibicarakan sepanjang artikel ini diterbitkan PT PII selaku Badan Usaha Penjaminan Infrastruktur.").
9. **Primary keyword in the final line.** CTA "Skema **penjaminan** pemerintah…" → "Skema **jaminan** pemerintah untuk proyek KPBU, termasuk cakupan dan tahapan penerbitannya…" — satisfies the playbook's keyword-in-last-paragraph rule; tone stays soft/consultative.
10. **Frontmatter.** `word_count` 1675 → **1679** (re-verified with `tools/count_words.py`); `external_citations` context for Perpres 78/2010 corrected to include Pasal 1 (definition) and Pasal 19 (sumber kekayaan BUPI), both of which the body cites.

## What I flagged (open issues)

- ⚠️ **"Nota Keuangan … edisi terkini membahas RAPBN Tahun Anggaran 2027, dipublikasikan Agustus 2026"** appears in the table and in FAQ #3 with no external link. The dossier rates this medium-high (existence inferred from a 24 Agustus 2026 media report; the DJPPR media API returned `ECONNREFUSED` on both attempts, so no document was fetched). The claim is dated and hedged to existence-and-cadence only, so it is publishable — *recommendation*: add the direct Kemenkeu URL at the next refresh, once the DJPPR endpoint recovers.
- ⚠️ **Softest cluster overlap is "penjaminan bukan subsidi"** (one paragraph in §1 plus FAQ #5). August-03 gave that idea a full H2 and August-02 covers it inside its taxonomy. Here it is contained and repurposed — it exists only to justify the accounting treatment ("Perbedaan ini … justru yang menentukan bagaimana kewajibannya dicatat"). Measured overlap stays far under the ceiling, so no action — *recommendation*: the strategist should keep the subsidi framing off the table for the remaining `jaminan-pemerintah` siblings.
- ⚠️ **AI-detector low-severity flag: vocab concentration 36,6% vs a <30% target.** Structural to the subject — "penjaminan", "kewajiban", "kontinjensi", "APBN", "Perpres" cannot be synonym-swapped without losing legal precision. Not treated as a tell; overall ai_score is 0.04 and burstiness is strong. No action.
- ℹ️ **WebSearch budget: 3/3 used** (Perpres 78/2010 Pasal 7 mechanism, PMK 69/2023 definition and status, and one originality probe on three distinctive original phrasings). No further lookups were performed and none are claimed. The remaining five plagiarism candidates were assessed on text comparison against the dossier's quoted primary sources, not on live web lookup — the queries are preserved in `jaminan-pemerintah-01.id.quality-input.json` for a later session.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)

- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — 0 hits
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — 0 occurrences anywhere
- [x] No "Penting untuk dicatat / dipahami bahwa" — 0 hits
- [x] "Dengan demikian" not overused — 0 hits
- [x] Em-dash count ≤2 — **0**
- [x] Varied paragraph lengths — 11 / 17 / 24 / 26 / 28 / 29 / 33 / 37 / 38 / 42 / 43 / 47 / 48 / 49 / 56 / 57 / 74 / 76 / 78 / 92 words; **CV 0.467**
- [x] Not every H2 → 3-bullet list — §1 and §2 are pure prose; §3 prose+table; §4 numbered list; §5 prose+bullets
- [x] No generic claims without numbers — every figure carries a reference year (see B)
- [x] No stacked hype adjectives — 0 hits on canggih / terdepan / terbaik / revolusioner
- [x] No service-dump paragraph — one product anchor only (Penjaminan Pemerintah)
- [x] No press-release register — 0 hits on "Dalam rangka" / "Sebagai wujud komitmen"; conclusion does not open with "Sebagai kesimpulan"

### B. Factual & penjaminan infrastruktur / KPBU spot-check

| Claim | Source check | Verdict |
|---|---|---|
| Pasal 21 Perpres 78/2010: MenKeu menetapkan kecukupan modal BUPI dan meninjaunya **selambat-lambatnya setiap 2 tahun** | dossier ✓ (verbatim from peraturan.go.id/files/ps78-2010.pdf, fetched 2026-09-17) | **pass** |
| Pasal 7: jika usulan lolos prosedur/teknis/finansial tetapi melampaui kecukupan modal BUPI, MenKeu dapat ikut menjamin berdasarkan pembagian risiko dan **keputusan BUPI mengikuti keputusan MenKeu** | dossier ✓ + WebSearch 1/3 — corroborated by pasal.id/peraturan/perpres/perpres-no-78-tahun-2010/pasal-7 and kpbu.kemenkeu.go.id | **pass** |
| PMK 69/2023 berlaku **12 Juli 2023**; Dana Cadangan Penjaminan = rekening khusus penampung akumulasi alokasi anggaran kewajiban penjaminan | dossier ✓ + WebSearch 2/3 — jdih.kemenkeu.go.id/dok/pmk-69-tahun-2023/summary and peraturan.bpk.go.id/Details/257851 confirm title, status **berlaku**, and the definition (it also revokes PMK 183/PMK.08/2018, so it is the live instrument) | **pass** |
| PMK 68/2024, **berlaku 18 Oktober 2024**, menamai dua bentuk: Penjaminan Bersama dan Penjaminan BUPI | brief locked baseline ✓ + dossier ✓ (the 24 September 2024 figure in JDIH's summary field is the *ditetapkan* date — portal field inconsistency, already resolved upstream) | **pass** |
| Portofolio **per Juni 2026**: 61 proyek (38 KPBU + 23 non-KPBU), nilai proyek > Rp 732 triliun, nilai penjaminan Rp 113 triliun | dossier ✓ + `company_profile.md` ✓ (publikasi resmi 2026) — project value and guarantee value kept distinct, and now explicitly separated from APBN-disclosed exposure (fix #2) | **pass** |

**Hard-constraint verification:**

- **No gearing ratio / no capacity figure** — confirmed absent. 0 hits on "gearing"; no ratio, no multiple, no ceiling value. **Nor can one be derived**: the article publishes no equity, PMN, or total-asset figure, so Rp 113 triliun has no denominator on the page. Lever 1 states the point explicitly: *"Yang dikunci regulasi adalah keberadaan batas maksimal penjaminan dan kadensa peninjauannya, bukan satu angka rasio permanen."*
- **No guarantee-exposure rupiah figure** — confirmed. The three disclosure channels are named, none is quantified, and §3 closes with *"artikel ini tidak mengutip angka eksposur dari ketiga kanal itu. Angka tanpa tanggal dan tanpa cakupan lebih menyesatkan daripada berguna."*
- **PSAP 09 not quoted as literal standard text** — **was a fail on arrival; fixed.** 0 remaining hits on "PSAP", "Nomor 09", or "paragraf 18". PP 71/2010 is now the accounting vehicle throughout, including both FAQ answers.
- **Never asserts a claim has been paid** — confirmed after fixes #3 and #4. No claim event, no payment history, no speculation that none occurred.
- **Portal regres framing not reused** — confirmed. 0 hits on "tidak berlaku"; regres appears once, cited neutrally to Pasal 15.
- **Fitch / ratings** — 0 hits. The writer's omission was left in place as the safest treatment.
- **Named officials** — 0. All references are institutional ("Menteri Keuangan", "Kementerian Keuangan", "BUPI", "BPK").
- **Every figure carries a reference year and scope** — verified item by item: Perpres 78/2010 · PP 71/2010 · PMK 69/2023 (12 Juli 2023) · PMK 68/2024 (18 Oktober 2024) · portofolio per Juni 2026 · PT PII 30 Desember 2009 · PPRF 2006 · Nota Keuangan RAPBN TA 2027, Agustus 2026.

### C. On-page SEO checklist (seo_playbook.md §3)

- [x] Meta title ≤60 (keyword first 30) — actual: **53 chars / position 0**
- [x] Meta description 140–160 — actual: **151**
- [x] Slug ≤60, kebab-case, keyword — actual: `jaminan-pemerintah-kpbu-di-mana-tercatat-dalam-apbn` (**51**)
- [x] H1 contains keyword — "Jaminan Pemerintah KPBU: Di Mana Tercatat dalam APBN?"
- [x] H2 count 4–7 — actual: **7** (5 body + FAQ + Kesimpulan)
- [x] ≥1 question-format H2 (§2 "Apakah jaminan pemerintah tercatat sebagai utang di neraca APBN?"); ≥1 honest/counter-conventional H2 (§5 "Yang tidak bisa Anda baca dari angka pengungkapan")
- [x] Keyword in first 100 words — "dijamin pemerintah" at word 8, exact "Jaminan pemerintah" at word 24; **also now in the final line** (fix #9)
- [x] Definition snippet near top — blockquote, **59 words**, at ~word 100
- [x] ≥8 LSI terms — counted: **12/12** from the brief's list now present (fix #7 recovered the last one)
- [x] 3 internal links (1 hub + 2 cousins) — `ptpii.co.id/kpbu` (lead, inline) · `ptpii.co.id/public-private-partnership` (§3) · `ptpii.co.id/pembiayaan-kreatif` (§4). Three distinct URLs, no "BACA JUGA", **zero institute.iigf.co.id**
- [x] ≥1 external authoritative citation — actual: **3** (peraturan.go.id Perpres 78/2010 · jdih.kemenkeu.go.id PMK 69/2023 · ksap.org)
- [x] FAQ 5–7 Q&As — actual: **6**, answers 46 / 47 / 49 / 45 / 45 / 46 words
- [x] ≥1 list + ≥1 table — numbered list (4 pengendali) + bullet list (3 salah-baca) + 1 table (3 kanal dokumen)
- [x] Word count inside band 1.500–1.800 — actual: **1.679** (`tools/count_words.py`; the PowerShell scanner's 1.711 counts markdown tokens differently — the Python count is the binding one and frontmatter is synced to it)

**Anchor freshness vs August** (checked against `articles_history/by_keyword/jaminan-pemerintah/`): all three anchors are new. August used "jaminan pemerintah untuk proyek KPBU" / "jaminan pemerintah pada proyek KPBU" / "jaminan pemerintah dalam skema KPBU" (hub), "kerangka public private partnership" ×3, and "pembiayaan kreatif untuk infrastruktur daerah" / "…untuk proyek daerah" / "skema pembiayaan kreatif". This article uses "penjaminan pemerintah pada skema KPBU", "praktik public private partnership di Indonesia", "instrumen pembiayaan kreatif infrastruktur". No repeats.

### C2. GEO extractability (seo_playbook.md §2a)

- [x] Direct 40–60-word answer immediately after each major H2 — measured: §1 **48** · §2 **47** · §3 **49** · §4 **42** · §5 **43**. All five stand alone without the surrounding prose.
- [x] Each body paragraph makes one independently quotable, verifiable point — spot-checked across §2–§5; the highest-value block ("Tidak, selama belum ada klaim… diungkapkan… bukan diakui…") is self-contained and carries its own legal anchor
- [x] FAQ parseable for FAQPage schema (`### question` + single answer paragraph, uniform); `date_modified: "2026-09-21"` present in the meta block

### D. PT PII framing discipline (product_matrix.md + style_guide §11)

- [x] PT PII framed as the government-guarantee provider (BUPI) — "PT PII selaku Badan Usaha Penjaminan Infrastruktur"; no lender / investor / contractor / operator / regulator language; no Danantara reference
- [x] ≤3 PT PII self-mentions — actual: **3** (mid-article aside in §4 · positioning line in Kesimpulan · soft CTA). The three `ptpii.co.id` link URLs are inline anchors, not prose mentions.
- [x] No unverifiable superlatives — 0 hits on terbaik / nomor satu / satu-satunya
- [x] Product names + specs match product_matrix / dossier — single anchor "Penjaminan Pemerintah", consistent with the brief
- [x] Closing uses a `company_profile.md` positioning line — "Penjaminan pemerintah yang diterbitkan PT PII dirancang untuk meningkatkan kelayakan kredit proyek sekaligus memagari kewajiban kontinjensi APBN" (pre-approved line, used verbatim)
- [x] Soft website CTA present as the FINAL line, after the conclusion — consultative ("dapat ditelusuri lebih jauh di ptpii.co.id"), no "beli sekarang"/"hubungi sekarang juga"; wording differs from August's
- [x] Hub link present as a natural inline anchor in the lead — descriptive, no callout box
- [x] Never implies the guarantee covers commercial risk or is a subsidy — stated explicitly in the negative in §1 and FAQ #5 (strengthened by fix #5)
- [x] **Disambiguation (pass/fail)** — infrastructure/KPBU token in title ✓, meta description ✓, H1 ✓, first H2 ✓. The "what this is NOT" line (bukan jaminan sosial/BPJS, bukan agunan/jaminan kebendaan, bukan jaminan pelaksanaan) closes at **word 55**, inside the 60-word window, and is said once. **PASS.**

### E. Anti-cannibalization spot check

- Closest prior article for this keyword: `2026-08-jaminan-pemerintah-03` (*Klaim Jaminan Pemerintah di Proyek KPBU: Bagaimana Hak Regres Bekerja*)
- Subtopic overlap (Jaccard, measured on H2s + bolded lead-ins vs each August record's subtopic + section list):
  - vs `2026-08-jaminan-pemerintah-01` (coverage map) = **0.076**
  - vs `2026-08-jaminan-pemerintah-02` (four-instrument taxonomy) = **0.082**
  - vs `2026-08-jaminan-pemerintah-03` (claim + regres) = **0.100**
- Shared tokens are cluster-level vocabulary (penjaminan, kewajiban, kontinjensi, APBN, kesimpulan), not shared subtopics. The article never partitions coverage by project stage (August-01), never compares fiscal instruments (August-02), and touches regres in exactly one sentence as an exposure-control lever (August-03's territory respected). This month's `-03` daerah access route is untouched; "DPRD" appears once, as an audience noun in the conclusion.
- **Verdict: distinct angle confirmed.** All three well under the 0.4 ceiling.

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)

- [x] Script ran; `monthly_runs/2026-09/final/jaminan-pemerintah-01.id.quality-input.json` written
- [x] AI-detector score **0.04** — verdict *pass* (well below the 0.30 revise threshold). One low-severity flag: vocab-repetition 36,6% (top-30 words) vs a <30% target — domain-inherent, see open flags.
- [x] Paragraph burstiness CV **0.467** (threshold ≥0.30) — paragraph lengths span 11 to 92 words
- [x] Plagiarism: 8 candidates extracted; **3 web-checked** within the editor's budget, no non-PT PII verbatim hit ≥20 words — **plagiarism_score 0.04**

| Candidate | Check | Result |
|---|---|---|
| Pasal 7 co-guarantee mechanism ("…MenKeu dapat ikut menjamin… keputusan BUPI mengikuti keputusan MenKeu") | WebSearch 1/3 | Matches Perpres 78/2010 in substance; the article's rendering is a compressed conditional, not a ≥20-word lift, and is attributed in-sentence ("Pasal 7 Perpres 78/2010 mengatur:"). Attributed regulation text — **not a hit** |
| Dana Cadangan Penjaminan definition | WebSearch 2/3 | Official definition is "dana hasil akumulasi dari alokasi anggaran kewajiban penjaminan pemerintah yang dikelola dalam rekening khusus"; the article reorders it into "rekening khusus yang menampung akumulasi alokasi anggaran…" with PMK 69/2023 cited in the same sentence. ~7 shared words. **Not a hit** |
| Three distinctive original phrasings ("plafon kemungkinan, bukan perkiraan biaya" / "Angka tanpa tanggal dan tanpa cakupan lebih menyesatkan daripada berguna" / "dua ambang pengakuan belum terlampaui") | WebSearch 3/3 | **Zero matches.** Results returned unrelated Indonesian pages on plafon rumah, plafon kredit, and date formatting — confirming the article's original framing is not lifted |
| Remaining 5 candidates (PMK 68/2024 naming, Pasal 19 sumber kekayaan, Perpres 78/2010 definition, regres clause, PPRF 2006) | Text comparison vs dossier's quoted primary sources | All are short, in-sentence-attributed paraphrases of regulation or of the KSAP page already cited inline. No lookup performed and none claimed — queries preserved in the JSON |
