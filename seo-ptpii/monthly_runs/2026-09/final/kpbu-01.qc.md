---
brief_id: "kpbu-01"
editor_run_date: "2026-09-21"
recommendation: "approve"
overall_score: 9
ai_score: 0.04
plagiarism_score: 0.05
---

# Editor QC Report — KPBU per Sektor: Mengapa Air, Tol, dan Sampah Tak Sama

## Recommendation
**approve**

The draft arrived unusually clean on the things that normally sink this client's articles — zero press-release register, zero em-dashes, every figure already carrying a reference year, and a correctly separated Rp 732 triliun (nilai proyek) vs Rp 113 triliun (nilai penjaminan). The collision check against `pembiayaan-infrastruktur-01` passes cleanly: kpbu-01's table carries only PJPK · dasar regulasi sektor · langkah kelembagaan, with no cost-of-funds, tariff-adequacy, or revenue-model column anywhere. I found and fixed one genuine accuracy defect — the H2 #1 direct answer claimed "19 jenis" but printed a collapsed 17-item list, the exact contradicting-enumeration trap the brief warns about for the 7-sektor figure — plus two figures missing a period scope, one near-verbatim table/body repeat, and a closing positioning line that was running verbatim in three articles of this batch. All were fixed in place. Nothing outstanding requires writer or strategist rework.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Zero tell phrases, 0 em-dashes, paragraph CV 0.382, concrete two-project opening rather than a generic hook |
| Factual & penjaminan infrastruktur / KPBU accuracy | 9 | 19-jenis enumeration corrected; all three known copy-traps avoided; ketenagalistrikan hedged honestly per dossier |
| On-page SEO compliance | 9 | Every item passes; FAQ sits at the floor of the 5–7 band |
| GEO extractability (§2a) | 9 | All five body H2s answered in 44–53 words; snippet at word 111; `date_modified` added |
| PT PII framing discipline | 10 | 2 prose mentions + CTA; BUPI/Kemenkeu identity stated; no officials, no superlatives, no Danantara |
| Internal linking | 10 | 3 distinct ptpii.co.id URLs, inline; anchors distinct from August's and from all five siblings this month |
| FAQ quality | 8 | 5 Q&As, each 43–52 words, PAA-derived; minimum compliant count |
| Originality (plagiarism + AI-detector) | 9 | AI 0.04; no verbatim hit in 3 targeted web checks; cross-article boilerplate de-duplicated |

## What I fixed (changelog)
- **Accuracy (material).** H2 #1 direct answer asserted "19 jenis" then printed only 17 items (it had collapsed *air limbah terpusat* + *setempat* into one, and *migas dan energi terbarukan* + *konservasi energi* into "energi"). Rewrote as an explicitly partial list ("mulai dari … hingga …") so the count and the enumeration no longer contradict. Kept at 52 words, inside the GEO band. Primary text letters a–k independently re-confirmed via web check.
- **Reference scope.** "proyek PSEL … tercatat hanya dua secara nasional" → added the regime period "sepanjang rezim 2018–2025"; same fix applied to FAQ #5 ("sepanjang 2018–2025"). A bare "dua" was a figure without a period.
- **Causal hedge.** "Latar penggantian itu adalah rendahnya realisasi" → "Alasan yang mengemuka di balik penggantian itu adalah …" (the dossier supports this as the *stated* rationale, not an independently established cause).
- **Near-verbatim repeat.** The H2 #5 ketenagalistrikan paragraph restated its own table row almost word-for-word. Rewrote to carry the honest limit instead, and added a practical instruction for the reader; expanded *Independent Power Producer* (IPP) once at its true first use, in the table.
- **Axis discipline.** H2 #4 direct answer re-grounded in Perpres 38/2015 (the two statutory recovery forms) rather than leading on who pays, which sharpens the split against `pembiayaan-infrastruktur-01`'s money axis. 43 → 50 words, still in band.
- **Generic claim.** Struck the trailing "Sebarannya juga tidak merata." — an unnumbered assertion; the paragraph now closes on the quotable nilai proyek / nilai penjaminan distinction.
- **Cross-article duplicate boilerplate.** The conclusion used the pre-approved positioning line *verbatim*, identical to `jaminan-pemerintah-01` and `pembiayaan-infrastruktur-01` in this same batch (17-word run). Replaced with a paraphrase of a different pre-approved line that also supplies the BUPI-under-Kemenkeu identity the article otherwise lacked.
- **Precision.** "diakses 2026" → "diakses September 2026".
- **Frontmatter.** `word_count` 1690 → **1762** (actual, via `count_words.py`); added `date_modified: "2026-09-21"` to match the August final convention and carry a freshness signal.

## What I flagged (open issues)
- ⚠️ **FAQ count sits at the band floor (5 of 5–7).** Not a fail. I deliberately did not add a sixth: the final is at 1762 words against an 1800 ceiling, and the best remaining PAA candidate ("Siapa yang membiayai proyek pada skema KPBU?") belongs to `pembiayaan-infrastruktur-01`'s money axis. *Recommendation*: leave as is; if a future trim frees 60 words, "Apa itu Kantor Bersama KPBU?" is the on-axis addition (ready-drafted in the dossier).
- ⚠️ **Four of five table rows share sectors with `pembiayaan-infrastruktur-01`** (tol, SPAM, ketenagalistrikan, PSEL; kpbu-01 has APJ where the sibling has telekomunikasi). The *axes* are cleanly separated and neither table shares a single column, so this is not a collision — but if both publish in the same week, stagger them. *Recommendation*: curator sequences kpbu-01 first, since it establishes the legal regime the money article assumes.
- ⚠️ **Ketenagalistrikan row carries an explicit "belum terkonfirmasi lewat sumber primer" hedge**, carried over from the dossier flag. This is the right call (honesty over tidiness) and reads as expertise, but it is the one cell an unsympathetic reader could call incomplete. *Recommendation*: keep; re-verify the IPP/PPA-vs-KPBU institutional relationship in a future research run and tighten then.
- ⚠️ **Web verification was capped at 3 WebSearch calls** by the batch budget. Three highest-risk passages were checked (see §F); the remaining five candidates were cleared on exemption grounds (statutory paraphrase, cited source, or prose written this session), not by lookup. Queries are preserved in `kpbu-01.id.quality-input.json` for a later session.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — 0 hits
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — 0 occurrences anywhere
- [x] No "Penting untuk dicatat / dipahami bahwa" — 0 hits
- [x] "Dengan demikian" not overused — 0 hits
- [x] Em-dash count ≤2 — **0**. (2 en-dashes, both inside the year range "2018–2025" — legitimate, not stylistic)
- [x] Varied paragraph lengths — CV **0.382**; range 10–99 words
- [x] Not every H2 → 3-bullet list — H2 #1 bullets, #2 table, #3 prose, #4 prose, #5 prose + numbered triad
- [x] No generic claims without numbers — one ("Sebarannya juga tidak merata") struck
- [x] No stacked hype adjectives — 0 hits on canggih/terdepan/terbaik/komprehensif
- [x] No service-dump paragraph — PT PII appears twice, both load-bearing
- [x] No press-release register — 0 hits on "Dalam rangka" / "Sebagai wujud" / "Sebagai kesimpulan"

### B. Factual & penjaminan infrastruktur / KPBU spot-check
| Claim | Source check | Verdict |
|---|---|---|
| Perpres 38/2015 Pasal 6(2) defers PJPK determination to sector law — the article's spine | dossier ✓ (high confidence, two independent sources: primary text + DJKN Kemenkeu) | **pass** |
| Pasal 5 lists 19 jenis across infrastruktur ekonomi/sosial; ketenagalistrikan is huruf (i) | dossier ✓ + WebSearch on primary text (peraturan.bpk.go.id / peraturan.go.id) confirmed letters a–k incl. (i) ketenagalistrikan | **pass after fix** — printed list was 17 items against a stated 19; corrected to an explicitly partial list |
| Perpres 35/2018 revoked, replaced by Perpres 109/2025 (Oktober 2025, berlaku); only two PSEL projects under the old regime | dossier ✓ (two registries) + WebSearch confirmed both the revocation and the two-project rationale | **pass** — scope "2018–2025" added |
| PT PII: 61 proyek, 7 sektor, per Juni 2026; nilai proyek > Rp 732 T vs nilai penjaminan Rp 113 T | dossier ✓ / company_profile ✓ | **pass** — year present, scope present, the two figures explicitly distinguished in-text ("Dua angka terakhir kerap tertukar") |
| PMK 68/2024 berlaku 18 Oktober 2024 consolidates Dukungan Kelayakan + Availability Payment | product_matrix / dossier ✓; WebSearch independently showed the ecosystem still citing revoked PMK 260/PMK.08/2016 — the article does **not** | **pass** |

**Article-specific checks from the assignment, all verified:**
- Perpres 38/2015 Pasal 6(2) is the spine ✓ (lead, table intro, H2 #3, FAQ #3)
- Perpres 35/2018 treated as revoked everywhere (3 mentions, all with "dicabut/digantikan") ✓ — never as live law
- 7-sektor: uses PT PII's own "tujuh sektor" phrasing; **no numbered sector list printed** ✓
- Must-not-appear: SPAM Umbulan "40+ tahun" — **absent** ✓ · Legok Nangka granular figures — **absent** (project not named at all) ✓ · claims about what Permen 9/2025 changes — **absent**; existence + date (30 Desember 2025) + amendment relationship only ✓
- Current law only: Perpres 38/2015 ✓ · Permen PPN/Bappenas 7/2023 ✓ · PMK 68/2024 ✓ · Perpres 109/2025 ✓ · **PMK 260/2016 absent** ✓ · **Permen PPN 4/2015 absent** ✓ · Permen PPN 2/2020 appears once, correctly flagged as *revoked* and used as a reader warning about stale portal citations — the right treatment, not a copy ✓
- No named officials ✓ (institutional titles only: "menteri yang membidangi pekerjaan umum", "bupati atau wali kota")
- Never asserts a guarantee claim has been paid ✓
- Fitch / ratings — **omitted entirely** ✓ (permitted, and the safer call given the 4 Maret 2026 sovereign outlook change)

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: **46 chars**, "KPBU" at position 1
- [x] Meta description 140–160 — actual: **147**
- [x] Slug ≤60, kebab-case, keyword — actual: `kpbu-per-sektor-perbedaan-rezim` (31)
- [x] H1 contains keyword — "KPBU per Sektor: Mengapa Air, Tol, dan Sampah Tak Sama"
- [x] H2 count 4–5 — actual: **5** body H2s (+ FAQ + Kesimpulan)
- [x] ≥1 question-format H2 (#1, #3); ≥1 honest/counter-conventional H2 (#5)
- [x] Keyword in first 100 words — "KPBU" at ~word 40 of the lead
- [x] Definition snippet near top (40–60 words) — **55 words**, positioned at word **111**
- [x] ≥8 LSI terms — counted: **12** (sektor KPBU, jenis infrastruktur, PJPK, Perpres 38/2015, SPAM, jalan tol, PSEL/persampahan, APJ, Availability Payment, infrastruktur ekonomi/sosial, BPJT, BUJT)
- [x] 3 internal links (1 hub + 2 cousins) — `/kpbu` (lead, inline), `/pembiayaan-kreatif` (post-table), `/public-private-partnership` (H2 #3). 3 distinct URLs, no "BACA JUGA", **0 links to institute.iigf.co.id**
- [x] ≥1 external authoritative citation — actual: **3** (peraturan.go.id ×2, bpjt.pu.go.id)
- [x] FAQ 5–7 Q&As — actual: **5** (band floor; see flags)
- [x] ≥1 list + ≥1 table — 1 bulleted list, 1 numbered list, 1 five-row table
- [x] Word count inside band 1.500–1.800 — actual: **1762** (`count_words.py`), frontmatter synced

**Anchor-text distinctness (assignment check).** August used `skema KPBU` · `public private partnership` · `pembiayaan kreatif`. This article uses *penyelenggaraan KPBU lintas sektor* · *praktik PPP di tingkat internasional* · *opsi pendanaan infrastruktur daerah* — **no repeats**. Also cross-checked against all five siblings in this month's batch (kpbu-02/03, pembiayaan-kreatif-01/02/03): **no collisions**.

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — measured: **52 / 46 / 53 / 50 / 44** words. All five in band.
- [x] Each body paragraph makes one independently quotable, verifiable point — spot-checked; the strongest extractables are "Nama dokumennya sama, isinya tidak", "Sektornya eligible sejak 2015; regulasi turunannya sendiri yang jadi hambatan", and the nilai proyek/nilai penjaminan distinction
- [x] FAQ parseable for FAQPage schema (5 × `###` question + single-paragraph answer, 43–52 words each); `date_modified: "2026-09-21"` present in the meta block

### D. PT PII framing discipline (product_matrix.md + style_guide §11)
- [x] Framed as the government-guarantee provider (BUPI) under Kementerian Keuangan — the conclusion now states this explicitly. Not a lender, investor, contractor, operator, or regulator; Danantara never mentioned.
- [x] ≤3 PT PII self-mentions — actual: **2** in prose (H2 #5 portfolio aside, Kesimpulan) **+ 1 CTA domain = 3 total**. Matches the dossier's recommendation exactly.
- [x] No unverifiable superlatives — 0 hits on terbaik/nomor satu/terdepan
- [x] Product names + specs match product_matrix / dossier — "Penjaminan Pemerintah", "Dukungan Kelayakan", "Availability Payment" all correctly named; PMK 68/2024 correctly identified as the consolidating rule
- [x] Closing uses a company_profile.md positioning line — paraphrase of line 1 ("Sebagai Badan Usaha Penjaminan Infrastruktur di bawah Kementerian Keuangan…"), deliberately varied from the verbatim line the siblings use
- [x] Soft website CTA is the FINAL line, after the conclusion — "Gambaran skema penjaminan pemerintah untuk proyek KPBU di berbagai sektor dapat ditelusuri lebih jauh di ptpii.co.id." Consultative, no "beli sekarang".
- [x] Hub link is a natural inline anchor in the lead — "melengkapi gambaran [penyelenggaraan KPBU lintas sektor]"

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: `kpbu-tahapan-proyek-hingga-akhir-perjanjian` (2026-08-kpbu-01)
- Subtopic overlap (Jaccard estimate): **0.049** vs August kpbu-01 · **0.077** vs kpbu-02 (VfM) · **0.020** vs kpbu-03 (risk matrix)
- Verdict: **distinct angle confirmed.** The article never narrates the six stages, never runs a VfM/APBN comparison, and never reproduces the 11-category risk matrix. Its spine is Pasal 5(2) + Pasal 6(2) — it holds the stage constant and varies the sector, the inverse of August's time axis. Closest adjacency is August's H2 "Siapa itu PJPK dan siapa saja yang bisa menjadi PJPK?" versus this month's "Mengapa PJPK bisa berbeda meski tahapannya sama?" — August enumerates the categories, September explains the sector-law mechanism that selects among them. Different question, no reject-level overlap.
- **Collision check vs `pembiayaan-infrastruktur-01` (this month):** **PASS.** kpbu-01 table columns = *Sektor · PJPK yang lazim · Dasar regulasi sektor · Langkah kelembagaan yang khas* — purely legal/institutional. The sibling's columns = *Pembayar · Prediktabilitas arus kas · Kualitas kredit pembayar · Horizon modal terkunci · Pemicu biaya dana* — purely money. **Zero shared columns.** No cost-of-funds, tariff-adequacy, or revenue-model column exists in kpbu-01; nothing had to be struck. The SPAM row mentions PDAM only as an institutional counterparty to secure (hedged "umumnya"), never as a credit-quality question — the sibling owns the BPPSPAM 42% figure and kpbu-01 does not carry it.

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran against the **saved final**; `kpbu-01.id.quality-input.json` written
- [x] AI-detector score < 0.30 — actual: **0.04** (verdict: pass). Single low-severity flag: `paragraph-low-variance`, CV 0.374 at scan time against the script's 0.45 ideal.
- [x] Paragraph burstiness CV ≥ 0.30 — actual: **0.382** (post-edit recount). Sentence burstiness 0.711; top-30 vocab share 0.309. Comfortably clear of the 0.30 failure threshold; no re-run needed.
- [x] Plagiarism: distinctive passages web-checked; no non-PT PII verbatim hit ≥20 words — **plagiarism score: 0.05**

**Plagiarism method, stated plainly.** The scanner extracted 8 candidate passages. The batch budget capped me at **3 WebSearch calls**, all of which I ran; I did not check the other five by lookup and am not claiming otherwise.

| # | Passage | Action | Result |
|---|---|---|---|
| 4 | "…hanya menghasilkan dua proyek PSEL nasional…" (the one non-statutory distinctive factual claim) | **WebSearch run** | No verbatim ≥20-word match. Independent sources phrase it differently ("yang berbelit-belit sehingga baru menghasilkan dua proyek PSEL"). Bonus: confirmed the Perpres 109/2025 revocation and the stated rationale. |
| 6 | Availability Payment definition in FAQ #4 | **WebSearch run** | No verbatim match; official phrasing ("bersumber dari pembayaran berkala oleh Pemerintah… atas dasar tersedianya layanan") differs structurally from the article's. Also surfaced the revoked-PMK-260 copy-trap, which the article avoids. |
| 8 | Definition snippet / Pasal 5 framing (the AI-Overview target, most liftable passage) | **WebSearch run** | The exact phrase returns no page; results are the Perpres itself. Original prose confirmed, and primary-text letters a–k independently verified. |
| 1, 2, 5 | Perpres 38/2015 Pasal 5 ayat (3)/(4)/(5) and status-berlaku sentences | Cleared on exemption — statutory paraphrase, attributed and linked | Not checked by lookup |
| 3 | BPJT tarif-vs-AP passage | Cleared on exemption — cited authoritative source, linked inline with attribution | Not checked by lookup |
| 7 | "Eligibilitasnya tegas di Pasal 5 ayat (2) huruf i…" | Cleared — prose written by me during this edit pass | Not checked by lookup |

**Internal duplication (caught outside the scanner).** A 17-word run — "Penjaminan pemerintah yang diterbitkan PT PII dirancang untuk meningkatkan kelayakan kredit proyek sekaligus memagari kewajiban kontinjensi APBN" — was running verbatim in `kpbu-01`, `jaminan-pemerintah-01`, and `pembiayaan-infrastruktur-01`. It is a pre-approved `company_profile.md` line (marked "paraphrase, vary, don't stack"), so it is not plagiarism, but three identical closings on one domain is a duplicate-content and templated-voice signal. Rewritten here. **Worth raising with the other two editors / the curator — I can only fix my own article.**
