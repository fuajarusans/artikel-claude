---
brief_id: "jaminan-pemerintah-02"
editor_run_date: "2026-08-12"
recommendation: "approve"
overall_score: 9
ai_score: 0.00
plagiarism_score: 0.05
---

# Editor QC Report — Jaminan Pemerintah vs Dukungan Pemerintah dalam KPBU: Apa Bedanya?

## Recommendation
**approve**

The draft arrived in unusually good shape on the two dimensions that could have sunk it. Every payment attribution in the pivot table is correct (VGF is disbursed by Kementerian Keuangan, Availability Payment is paid by the PJPK, and PT PII/BUPI appears only on the two guarantee rows), and all four of the named factual traps were avoided outright: no VGF eligibility criteria or Rp 100 miliar threshold from the stale Kemenkeu portal page, no Rp 105 triliun / 8 BUMN / 3 obligasi figure, no "PSAP 09" pseudo-quotation, and no "never amended" claim on PMK 101/PMK.08/2018. The regulation map matches the dossier and `company_profile.md` line for line, Perpres 103/2020 is framed as legally live but functionally historical, and the article's central intellectual move — contingent versus firm obligation, and the guarantee-is-not-a-subsidy-but-VGF-genuinely-is distinction — lands cleanly. I fixed 13 items in place, the sharpest being a metaphor collision where "satu pintu BUPI" (single window) sat 14 lines from "lebih dari satu pintu" (multiple mandates), which a KPBU practitioner would have read as a contradiction. Anti-AI is exceptionally clean (zero em-dashes, zero pattern hits, paragraph burstiness 0.488, AI-detector 0.00). One honest caveat: the WebSearch budget for this session was exhausted (200/200, confirmed by a failed call), so the plagiarism verdict rests on heuristic output plus manual comparison against the dossier's quoted source excerpts, not live lookups — see §F.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Zero em-dashes, zero §5 pattern hits, 24 distinct paragraph openers, burstiness 0.488. Reads like a practitioner, not a press release. |
| Factual & penjaminan infrastruktur / KPBU accuracy | 9 | 5/5 spot-checks pass; every figure carries a reference year; all four named traps avoided. Residual: PMK 101/2018 rests on `company_profile.md` + secondary sources, not a directly fetched JDIH page. |
| On-page SEO compliance | 9 | Full checklist passes. 3 external citations vs the playbook's 1–2 — kept deliberately (see §C note). |
| GEO extractability (§2a) | 9 | All five H2 answers 44–51 words; definition snippet 60; every table cell self-contained. |
| PT PII framing discipline | 10 | 3 mentions incl. CTA; payer attribution correct in all four table rows; positioning line drawn from `company_profile.md`. |
| Internal linking | 10 | 3 distinct ptpii.co.id URLs, all natural inline anchors, hub in the lead. Zero links to institute.iigf.co.id. |
| FAQ quality | 9 | 6 Q&As, 43–52 words each, PAA-derived, FAQPage-parseable. |
| Originality (plagiarism + AI-detector) | 8 | AI-detector 0.00 / 0 flags. Plagiarism heuristic-only — live web verification was not available this session. |

## What I fixed (changelog)
1. **Metaphor collision (substantive).** "penjaminan infrastruktur diselenggarakan lewat satu pintu BUPI" sat 14 lines above "jaminan pemerintah berjalan lewat lebih dari satu pintu" — the same figure of speech carrying opposite meanings. Second instance → "lebih dari satu **jalur mandat**", which is what it actually meant (KPBU vs non-KPBU tracks).
2. **Sharpened the article's thesis line.** Added the missing half of the subsidy contrast: "Dukungan Kelayakan justru merupakan dukungan fiskal riil: uang APBN yang keluar dari kas negara untuk menutup sebagian biaya konstruksi." The draft asserted the guarantee is not a subsidy but never put VGF's genuine fiscal-support nature beside it. This is the article's stated reason for existing, and it now lands in one paragraph. It also increases separation from sibling `-03`, which owns "bukan subsidi" as a full H2 but does not discuss VGF.
3. **Regulation-title precision.** "satu peraturan berjudul 'Dukungan Pemerintah'" → "satu peraturan tentang Dukungan Pemerintah untuk Pembiayaan Infrastruktur". PMK 68/2024's title begins with, but is not, "Dukungan Pemerintah"; the compressed version read as a quotation of a title that does not exist.
4. **Direct-lending scope tightened.** Table row 4 and FAQ 6: "pinjaman atau penerbitan obligasi" → "pinjaman **dari lembaga keuangan internasional** atau penerbitan obligasi", matching Perpres 82/2015's actual scope (which both cells cite) and the dossier's phrasing. Prevents the row reading as an open-ended mandate.
5. **Legal-basis column made self-contained (GEO).** "Perpres 78/2010 jo. PMK 68/2024" → "Perpres 78/2010 (payung); PMK 68/2024 (pelaksana)"; same for row 4. "Jo." between a Perpres and a PMK is loose drafting for an audience that includes transaction lawyers. Added "(berlaku 18 Oktober 2024)" to the two PMK-only rows so each cell stands alone when extracted.
6. **PJPK expanded on first use.** Moved *Penanggung Jawab Proyek Kerja Sama* into the definition snippet (its first appearance) and removed the now-duplicate gloss from §1; snippet re-measured at 60 words, §1 answer at 46.
7. **BUPI expanded on first use** in the table row where it first appears.
8. **Disambiguation pulled inside the 60-word window.** "jaminan pelaksanaan pada pengadaan barang dan jasa" → "jaminan pelaksanaan pengadaan"; all three exclusions (jaminan sosial / agunan kebendaan / jaminan pelaksanaan) now complete at word 59.
9. **Primary keyword added to the closing paragraph** (playbook §3 requires it there): "Di dalam skema KPBU, hanya jaminan pemerintah yang menjawab tidak." Doubles as the conclusion's punchline.
10. **Heading echo removed.** §2's opening sentence repeated its own H2 almost verbatim ("Empat instrumen … paling sering tertukar") → re-cast as "Yang paling sering tertukar dalam pembicaraan proyek KPBU ada empat"; still 51 words.
11. **Repetition control.** "sebaliknya" 3× → 2× and "justru" 2× → 1× within one section; "sekaligus" 5× → 4×; removed a third "benar-benar" cluster.
12. **Register fix.** "Perbedaan sifat itu **berbuntut panjang**" → "terasa di tiga tempat" — the idiom implies unwelcome fallout, which is not the meaning intended.
13. **Grammar + metadata.** "sedangkan PPP istilah generik" → "adalah istilah generik"; "jaminan justru instrumen yang tepat" → "adalah instrumen yang tepat"; added `date_modified: "2026-08-12"` (GEO §2a freshness, matching the convention in sibling finals); synced `word_count` 1706 → 1734.

## What I flagged (open issues)
- ⚠️ **Plagiarism not verified live.** WebSearch budget was exhausted (200/200) before this run; I attempted one lookup and it was refused. The 8 candidate passages were assessed heuristically and by manual comparison against the source text quoted in the dossier — no live SERP check was performed. *Recommendation*: if the curator wants belt-and-braces, re-run the 8 `web_search_query` strings in `jaminan-pemerintah-02.id.quality-input.json` in a session with budget. Nothing in the manual comparison suggests a problem (longest attributed verbatim run is 18 words, from an official Kemenkeu definition that is quoted with a reporting verb and an inline link).
- ⚠️ **PMK 101/PMK.08/2018 provenance.** The dossier flagged this as medium confidence (JDIH fetch failed). `company_profile.md` independently carries it with full title, ditetapkan 24 Agustus 2018, diundangkan 27 Agustus 2018, BN RI 2018 No. 1148, and an explicit "not among those revoked by PMK 68/2024" — so it is knowledge-base-verified and I let it stand. *Recommendation*: a direct JDIH confirmation at the next knowledge-base refresh would close the flag permanently, since three of this month's articles rely on this number.
- ⚠️ **Minor overlap with sibling `-03` on "jaminan bukan subsidi"** (two sentences here vs a dedicated H2 there). Well inside tolerance and the two treatments now point in different directions (taxonomy-vs-VGF here, claim-and-regres economics there). *Recommendation*: no action; note it if a future article in this cluster wants the same point again.
- ℹ️ **3 external citations vs the playbook's 1–2.** I kept the writer's judgment. Each backs a distinct load-bearing claim (Kemenkeu KPBU portal = the canonical definition; JDIH = PMK 68/2024 as the current implementing rule; DJKN = the contingent-vs-direct liability definition that is the article's spine), all are Kementerian Keuangan properties, and for an article whose subject *is* the regulation map, removing one would leave a central claim unsourced.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — 0 hits
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — 0 hits anywhere
- [x] No "Penting untuk dicatat / dipahami bahwa" — 0 hits
- [x] "Dengan demikian" not overused — 0 hits
- [x] Em-dash count ≤2 — **actual: 0**
- [x] Varied paragraph lengths — 1 to 5 sentences; 5 to 97 words; paragraph burstiness CV **0.488**
- [x] Not every H2 → 3-bullet list — 1 bulleted list and 1 numbered list across 5 body H2s; the other three run on prose + table
- [x] No generic claims without numbers — portfolio figure carries "Sampai Juni 2026" plus a cumulative-and-changes hedge
- [x] No stacked hype adjectives — 0 hits on canggih / terdepan / revolusioner / komprehensif / terbaik
- [x] No service-dump paragraph — one anchor (Penjaminan Pemerintah); the other three products are never listed
- [x] No press-release register — 0 hits on "Dalam rangka" / "Sebagai wujud komitmen"
- [x] 24 body paragraphs, 24 distinct openers — no repeated sentence-start pattern

### B. Factual & penjaminan infrastruktur / KPBU spot-check
| Claim | Source check | Verdict |
|---|---|---|
| "PMK Nomor 68 Tahun 2024, ditetapkan 24 September 2024 dan berlaku 18 Oktober 2024, mencabut rangkaian PMK lama untuk penjaminan infrastruktur, Dukungan Kelayakan, *Availability Payment*, sekaligus fasilitas penyiapan proyek" | dossier ✓ (high confidence, 4 independent sources) + `company_profile.md` legal-basis table ✓ | **pass** |
| "Payung tingkat Perpres tetap: Perpres 78/2010 dan Perpres 38/2015 masih berlaku" | dossier ✓ (JDIH, verified 2026-08-12) + `company_profile.md` ✓ | **pass** |
| Table row 4: "Perpres 82/2015 (payung); PMK 101/PMK.08/2018 (pelaksana)" for penjaminan pinjaman langsung | `company_profile.md` ✓ (full title, ditetapkan 24 Agustus 2018, BN RI 2018 No. 1148, explicitly not revoked by PMK 68/2024); dossier medium confidence. No "never amended" claim made. | **pass** (with §"open issues" flag on provenance) |
| "Sampai Juni 2026 … 61 proyek senilai investasi lebih dari Rp 732 triliun, terbagi atas 38 proyek KPBU dan 23 proyek non-KPBU" | dossier ✓ + `company_profile.md` scale table ✓; reference year present; internally consistent (38+23=61); framed as nilai **investasi**, not nilai penjaminan; hedged as cumulative | **pass** |
| "Perpres Nomor 103 Tahun 2020 … belum dicabut, tetapi program yang dilayaninya berakhir sekitar 2022, sehingga lebih tepat dibaca sebagai rezim historis" | dossier ✓ (status Berlaku verified 2026-08-12; PEN wound down ~2022, medium-high; uses the dossier's recommended "sekitar 2022" hedge rather than a precise date) | **pass** |
| DJKN definition of kewajiban kontinjensi vs kewajiban langsung | dossier ✓ (high confidence, DJKN Kemenkeu); attributed inline with link | **pass** |

**Traps checked and clear:** VGF eligibility criteria / Rp 100 miliar minimum — **absent** ✓ · Rp 105 triliun / 8 BUMN / 3 obligasi (Juni 2022) — **absent** ✓ · "PSAP 09" quoted as accounting-standard text — **absent** ✓ · named Direksi/Komisaris — **absent** ✓ · Danantara — **absent** ✓ · revoked PMK cited as live law — **absent** ✓ · any figure without a reference year — **none found** ✓.

**Payment-attribution audit (the highest-risk check for this brief):**
| Instrument | Who pays, per the article | Correct? |
|---|---|---|
| Jaminan Pemerintah | BUPI → badan usaha pelaksana, hak regres ke PJPK | ✓ |
| Dukungan Kelayakan (VGF) | APBN, dicairkan **Kementerian Keuangan** → badan usaha pelaksana | ✓ (PT PII correctly absent) |
| Availability Payment | **PJPK** (menteri/kepala lembaga/kepala daerah) → badan usaha pelaksana | ✓ (PT PII correctly absent) |
| Penjaminan Pinjaman Langsung | Pemerintah dan/atau BUPI → pemberi pinjaman / pemegang obligasi | ✓ |

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: **49 chars / keyword at position 0**
- [x] Meta description 140–160 — actual: **158 chars**
- [x] Slug ≤60, kebab-case, keyword — actual: `jaminan-pemerintah-vs-dukungan-pemerintah-kpbu` (**46**)
- [x] H1 contains keyword — "Jaminan Pemerintah vs Dukungan Pemerintah dalam KPBU: Apa Bedanya?"
- [x] H2 count 4–7 — actual: **5 body H2s** (+ FAQ + Kesimpulan = 7 total)
- [x] ≥1 question-format H2 (**2**: §1 and §3); ≥1 honest/counter-conventional H2 (§5 "Kapan jaminan pemerintah TIDAK akan menyelesaikan masalah Anda")
- [x] Keyword in first 100 words — "jaminan pemerintah dalam skema KPBU" at word 83 (also the hub anchor)
- [x] Definition snippet near top — blockquote at ~word 100, **60 words**
- [x] ≥8 LSI terms — counted: **25** (dukungan pemerintah · Dukungan Kelayakan/VGF · Availability Payment · penjaminan infrastruktur · penjaminan pinjaman langsung · kewajiban kontinjensi · kewajiban langsung · PJPK · KPBU · BUPI · financial close · badan usaha pelaksana · APBN · lender · ring-fence · hak regres · direct lending · viability gap funding · public private partnership · Perpres 78/2010 · Perpres 38/2015 · Perpres 82/2015 · Perpres 103/2020 · PMK 68/2024 · PMK 101/PMK.08/2018)
- [x] 3 internal links (1 hub + 2 cousins) — destinations: `/kpbu` (lead, inline) · `/public-private-partnership` (§4) · `/pembiayaan-kreatif` (§5). Three distinct URLs, no "BACA JUGA", **zero links to institute.iigf.co.id**
- [x] ≥1 external authoritative citation — actual: **3** (kpbu.kemenkeu.go.id · jdih.kemenkeu.go.id · djkn.kemenkeu.go.id), all Kementerian Keuangan; see flag
- [x] FAQ 5–7 Q&As — actual: **6**
- [x] ≥1 list + ≥1 table — 1 bulleted list, 1 numbered list, 1 six-column comparison table
- [x] Word count inside the brief's band (1.500–1.800) — actual: **1.734** (`tools/count_words.py`); the PowerShell scanner's independent tokenizer reports 1.785, also in band
- [x] Specific numbers in 6+ places — 8 dated data points

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — measured: **46 · 51 · 48 · 44 · 47** words
- [x] Definition snippet 40–60 words — measured: **60** (at the ceiling; kept there because trimming further would drop either the "penjaminan infrastruktur" alias or the layak-ekonomi/belum-layak-finansial criterion, both of which are extraction-critical)
- [x] Each body paragraph makes one independently quotable, verifiable point — spot-checked across all 24; the table rows are now self-contained after fix #5
- [x] FAQ parseable for FAQPage schema — 6 clean `###` question / single-paragraph answer pairs, 43–52 words each
- [x] `dateModified` / freshness noted in the meta block — added `date_modified: "2026-08-12"`; both external sources also carry "(diakses 2026)" inline

### D. PT PII framing discipline (product_matrix.md + style_guide §11)
- [x] Framed as the government-guarantee provider (BUPI) under Kementerian Keuangan — never a lender, investor, contractor, operator, or regulator; Danantara never mentioned
- [x] ≤3 PT PII self-mentions — actual: **3** (one mid-article aside in §4, one positioning line in Kesimpulan, one soft CTA)
- [x] No unverifiable superlatives — the only strong claim is "satu-satunya BUMN dengan mandat BUPI", which `product_matrix.md` explicitly permits as factual
- [x] Product names + specs match `product_matrix.md` / dossier — single anchor: **Penjaminan Pemerintah**; no service-dump
- [x] Closing uses a `company_profile.md` positioning line — "Penjaminan pemerintah yang diterbitkan PT PII dirancang untuk meningkatkan kelayakan kredit proyek sekaligus memagari kewajiban kontinjensi APBN"
- [x] Soft website CTA is the FINAL line, after the conclusion — "Pemetaan instrumen Penjaminan Pemerintah untuk proyek KPBU dapat Anda telusuri lebih jauh di ptpii.co.id." Consultative, no "beli sekarang"
- [x] Hub link is a natural inline anchor in the lead — "jaminan pemerintah dalam skema KPBU" → `/kpbu`; no callout box
- [x] Guarantee never implied to be a subsidy or to cover the badan usaha's commercial risk — both are stated explicitly in the negative in §5

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: **none yet** — `articles_history/index.json` has an empty `articles[]`; 2026-08 is the first run.
- In-batch siblings compared by actual H2 coverage: `-01` (definition · tiga tahap · risks covered · what is not covered · matching coverage to risk profile) and `-03` (claim flow · hak regres · ring-fence APBN · why not a subsidy).
- Subtopic overlap (Jaccard estimate): **vs -01 ≈ 0.13** · **vs -03 ≈ 0.13** (the brief predicted 0.07 each; the delta is the shared "bukan subsidi" assertion and a single ring-fence bullet). Both well under the 0.4 threshold.
- Boundary compliance: hak regres appears **once**, as a table cell defining payment flow — no process walkthrough, per the brief's boundary. Claim mechanics are absent. The KPBU scheme itself is not explained. The pemda/APBD angle appears only as a one-clause hand-off to `/pembiayaan-kreatif`.
- Verdict: **distinct angle confirmed** — this is the only article in the cluster working *between* instruments.

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran on the **saved final**; `jaminan-pemerintah-02.id.quality-input.json` written
- [x] AI-detector score < 0.30 — actual: **0.00**, verdict `pass`, **0 flags**, no external API used
- [x] Paragraph burstiness CV ≥ 0.30 — actual: **0.488** (sentence burstiness 1.417; top-30 vocabulary share 0.349)
- [ ] Plagiarism: distinctive passages web-checked — **NOT PERFORMED.** The session's WebSearch budget was exhausted (200/200) before this run; one lookup was attempted and refused. **plagiarism score: 0.05 — heuristic estimate only, not a live-verified result.**

**Manual substitute for the web check.** I compared all 8 extracted candidates against the source text quoted in the dossier:
- 4 candidates are short regulation-reference sentences (e.g., "Payung hukumnya Perpres Nomor 78 Tahun 2010, dengan aturan pelaksana PMK Nomor 68 Tahun 2024") — unavoidably similar to any correct statement of the same legal facts, but composed in the article's own syntax.
- 1 candidate is a false positive: the DJKN citation's markdown anchor, i.e. the cited source's own page title, properly attributed and linked.
- 3 candidates are original argumentative prose with no external source ("Bagi PJPK. Dua instrumen pasti harus diamankan dalam kapasitas fiskal multitahun…", "Jaminan memperbaiki kepastian bagi *lender*, VGF memperbaiki kelayakan finansial…", "Itulah alasan penjaminan infrastruktur diselenggarakan lewat satu pintu…").
- Longest verbatim run against any known source: **18 words**, in the Kemenkeu KPBU portal's official definition of penjaminan infrastruktur — under the 20-word threshold, introduced by a reporting verb ("…menyebut penjaminan infrastruktur sebagai…"), and hyperlinked to the source. The DJKN contingent-liability definition runs 15 words on the same terms. Both fall under the cited-authoritative-source / official-definition carve-out.
- The Availability Payment and VGF official definitions were substantially reworded by the writer (longest shared run ≈ 5 words); no long regulatory passage is reproduced anywhere in the article.
