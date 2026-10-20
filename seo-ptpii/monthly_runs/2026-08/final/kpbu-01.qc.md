---
brief_id: "kpbu-01"
editor_run_date: "2026-08-12"
recommendation: "approve"
overall_score: 8
ai_score: 0.04
plagiarism_score: 0.12
---

# Editor QC Report — KPBU: Tahapan Proyek dari Perencanaan hingga Akhir Perjanjian

## Recommendation
**approve**

The draft arrived in unusually good shape for a regulation-heavy pilot: correct law throughout, zero em-dashes, real paragraph burstiness, and all five body H2s already carrying a 40–60-word extractable answer. My fixes were corrective rather than structural — one wrong figure (`Rp 10.350 triliun` → the dossier's `Rp 10.302 triliun`), attribution hygiene on the two claims the researcher explicitly flagged as unverified at pasal level (the 8→5 kajian count and the *financial close* extension tightening), and a redundancy where the H2 #5 opener re-listed its own bullets verbatim. The article's thesis is regulatory freshness, and it does not itself cite dead law: Perpres 38/2015 and Permen PPN/Bappenas 7/2023 are both framed as in force, Permen 4/2015 and 2/2020 only as revoked, and Permen 9/2025 appears as existence-plus-date with an explicit statement that its pasal content could not be read. The one thing I could not do is the live plagiarism lookup — the session's WebSearch budget was exhausted (200/200) before this run, so section F is heuristic-only and honestly labelled as such. Given the heuristic AI score of 0.04 and the fact that every extracted candidate is either regulation metadata, an inline-attributed institutional description, or a heading artifact, I do not think that gap justifies holding the article; I have flagged it for a spot re-check when budget resets.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Zero em-dashes, paragraph CV 0.355, sentence CV 0.679. Opens on a concrete scene, not a generic frame. No press-release register anywhere. |
| Factual & penjaminan infrastruktur / KPBU accuracy | 8 | All regulation numbers/dates/status correct. One figure corrected. Two flagged claims re-attributed rather than dropped. |
| On-page SEO compliance | 9 | Meta title 46, meta desc 153, slug 43, 7 H2s, 3+3 links, 6 FAQs, list + table all present. |
| GEO extractability (§2a) | 9 | 45/43/48/52/52-word answers after the five body H2s; 54-word definition snippet at ~90 words in; FAQ 40–50 words each. |
| PT PII framing discipline | 9 | 2 named self-mentions + CTA = 3. Guarantee provider/BUPI framing only. No officials, no superlatives, no Danantara. |
| Internal linking | 10 | Exactly 3 distinct ptpii.co.id URLs, all inline, hub in the lead. Zero institute.iigf.co.id. |
| FAQ quality | 8 | 6 Q&As from real PAA, each self-contained and inside the 40–80-word band. Slightly uniform in length (40–50). |
| Originality (plagiarism + AI-detector) | 7 | AI 0.04 (clear pass). Plagiarism assessed **heuristically only** — web lookup unavailable this session. Score reflects that uncertainty, not detected copying. |

## What I fixed (changelog)
- **Corrected a figure that drifted from the dossier**: `Rp 10.000–10.350 triliun` → `Rp 10.000–10.302 triliun` (dossier upper bound; the draft had inflated it by ~48 triliun).
- **Gave both RPJMN figures an explicit shared attribution.** The `~40%` APBN/APBD share previously leaned on the year marker attached to the preceding sentence; it now sits under an explicit "Kedua angka berasal dari pernyataan Kementerian Keuangan pada forum infrastruktur internasional, Juni 2025."
- **Re-attributed the "delapan kajian" table cell.** It was stated as flat fact ("Delapan kajian di bawah Permen 2/2020") while resting on the same unverified practitioner source as the "lima" figure the prose already hedged. Now: "Delapan kajian menurut penjelasan praktisi atas Permen 2/2020."
- **Hedged the *financial close* extension row** per the dossier's ⚠ (mechanism not verified against pasal text): "Dibatasi lebih ketat" → "Disebut dibatasi lebih ketat; rincian mekanismenya belum terbaca pada teks pasal."
- **Closed the Permen 9/2025 loop explicitly** — added "sehingga mekanisme yang diubahnya belum bisa disimpulkan" so no reader infers a substantive claim from the mention.
- **Removed a verbatim self-repetition in §5.** The H2 opener listed the same four failure causes that the bullets below it then repeated word-for-word; the opener now names the categories at a higher level ("kualitas dokumen, kepastian kebijakan, kelayakan finansial, kecepatan pengambilan keputusan") and still measures 52 words for GEO.
- **Softened two absolutes**: "hampir selalu tersendat di hulu" → "lebih sering tertahan di hulu"; "sebagian besar penjelasan yang mudah ditemukan hari ini" → "...yang mudah ditemukan **di hasil pencarian** hari ini" (grounds an otherwise unsourced proportion claim in something observable).
- **Tightened a near-source paraphrase** of the Fasilitas Penyiapan Proyek description (plagiarism candidate #3) so no ~20-word string tracks the Kemenkeu portal page, while keeping the inline link and attribution.
- **Lifted FAQ #3 from 39 to 50 words** (it was one word under the 40–80 band) by adding a dossier-sourced clause on what PJPK does.
- **Split the conclusion into two paragraphs** so the regulatory takeaway and the PT PII positioning line stop competing in one 96-word block.
- Precision passes: "(diakses 2026)" → "(diakses Agustus 2026)" ×2; "unit yang melekat pada unit kerjanya" → "...pada struktur kerjanya" (word echo); dropped a filler "sebuah".
- **Frontmatter**: added `date_modified: "2026-08-12"` (§2a freshness requirement, previously absent) and synced `word_count` 1634 → **1783** (the draft's stated count was 149 words below the real body count).

## What I flagged (open issues)
- ⚠️ **Plagiarism verdict is heuristic-only.** The session's WebSearch budget was exhausted (200/200) before this run; I attempted a lookup and received an explicit budget-exhausted response. No candidate passage was checked against the live web. *Recommendation*: when budget resets, spot-check candidates #2 (RPJMN figure sentence) and #5 (tahap perencanaan description) — the two most likely to track a source's phrasing. Nothing in the heuristic output suggests a lift.
- ⚠️ **The 8→5 kajian claim remains secondary-sourced.** It now appears twice, both times attributed to practitioner explanation and never as regulation text, which is the safest available treatment. *Recommendation*: if anyone later reads Lampiran II of Permen 7/2023 directly, upgrade or delete both mentions rather than leaving them half-hedged.
- ⚠️ **The article's freshness has a half-life.** Its whole differentiator is "the current rulebook is 7/2023 as amended by 9/2025." *Recommendation*: schedule a re-check when 9/2025's full text becomes readable, and revisit if a further amendment lands.
- ⚠️ **Paragraph-variance flag (low severity)** from the scanner: CV 0.355 vs the script's aspirational 0.45 target. Our binding threshold is ≥0.30, so this passes. I tested splitting the 91-word lead and it *lowered* CV to 0.314, so I left the distribution alone — the prose genuinely runs 15 to 91 words per paragraph.
- ⚠️ **Word count sits at 1.783 of a 1.800 ceiling.** I trimmed ~15 words of flab to open headroom. *Recommendation*: any later addition to this article needs a compensating cut.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — grep clean
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — phrase absent entirely
- [x] No "Penting untuk dicatat / dipahami bahwa" — absent
- [x] "Dengan demikian" not overused — absent
- [x] Em-dash count ≤2 — **0** (the 3 dashes present are en-dashes in `2025–2029` etc., correct usage)
- [x] Varied paragraph lengths — 91/45/36/57/15/49/43/21/48/39/34/51/52/61/46/52/69/34/44/27/52/43/19 words; sentence counts run 1–6
- [x] Not every H2 → 3-bullet list — §2 numbered list of 6, §5 bulleted list of 4, §1/§3/§4 lead with prose, §4 carries the table
- [x] No generic claims without numbers
- [x] No stacked hype adjectives — grep clean on canggih/terdepan/terbaik/seamless/revolusioner
- [x] No service-dump paragraph — one anchor (Penjaminan Pemerintah), no product list
- [x] **Press-release register** (this client's signature failure mode) — grep clean on "Dalam rangka…", "Sebagai wujud komitmen…"

### B. Factual & penjaminan infrastruktur / KPBU spot-check
Web lookup unavailable this session; verification is against the dossier, `company_profile.md`, `product_matrix.md`, and the orchestrator's stated regulatory position as of 2026-08-12.

| Claim | Source check | Verdict |
|---|---|---|
| Perpres No. 38 Tahun 2015 ditetapkan 20 Maret 2015, berstatus berlaku | dossier Core Facts #1 (JDIH Kemenkeu, high confidence) ✓ + company_profile legal table ✓ + orchestrator brief ✓ | pass |
| Permen PPN/Bappenas 7/2023 ditetapkan 22 Sep 2023, diundangkan 29 Okt 2023, mencabut Permen PPN 4/2015 & 2/2020 | dossier Core Facts #3 ✓ + company_profile ✓ + orchestrator confirms revocation ✓ | pass |
| Permen PPN/Bappenas 9/2025 ditetapkan 30 Desember 2025, mengubah 7/2023 | dossier Core Facts #4 (peraturan.go.id direct fetch, high confidence) ✓ — article claims existence/date only, no mechanism | pass |
| Kebutuhan investasi RPJMN 2025–2029 ~USD 625,37 miliar; APBN+APBD ~40% | dossier Core Facts #12–13 ✓ — **rupiah range was wrong in the draft (10.350), corrected to 10.302** | fail → fixed |
| Durasi menuju *financial close* ~1 tahun, disorot 2023; penyiapan 3–4 tahun | dossier Core Facts #11 + Flags ✓ — article frames both as indicative ranges, attributes the 2023 timestamp, names no official | pass |
| Kajian prastudi kelayakan 8 → 5 | dossier Flags: **FLAGGED, secondary source only** — article attributes to practitioner explanation in both places, never to pasal text | pass (as attributed opinion) |

**Named-risk sweep (orchestrator's list):** no `86,65% / 7,22% / 6,13%` breakdown, no `Rp 49 miliar` threshold, no `Pasal 85`, no `43/37/35/32%` stall percentages, no `Rp 1.905,3 triliun` / `Rp 753,11 triliun` PU figure bleeding into the RPJMN total. All grep-verified absent. No revoked rule (PMK 260/2010, PMK 8/2016, Permen 4/2015, Permen 2/2020) is cited as current law.

**Reference-year audit:** USD 625,37 miliar (Juni 2025) ✓ · Rp 10.000–10.302 triliun (Juni 2025) ✓ · 40% (Juni 2025) ✓ · Perpres 38/2015 (20 Maret 2015) ✓ · Permen 7/2023 (22 Sep / 29 Okt 2023) ✓ · Permen 9/2025 (30 Des 2025) ✓ · ~1 tahun *financial close* (2023) ✓ · 3–4 tahun penyiapan (labelled indicative) ✓. No bare number remains.

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: **46 chars**, "KPBU" at position 1
- [x] Meta description 140–160 — actual: **153 chars**
- [x] Slug ≤60, kebab-case, keyword — actual: `kpbu-tahapan-proyek-hingga-akhir-perjanjian` (43)
- [x] H1 contains keyword — "KPBU: Tahapan Proyek dari Perencanaan hingga Akhir Perjanjian"
- [x] H2 count 4–7 — actual: **7** (5 body + FAQ + Kesimpulan)
- [x] ≥1 question-format H2 (#1, #3); ≥1 honest/counter-conventional H2 (#5 "Di tahap mana proyek KPBU paling sering tersendat")
- [x] Keyword in first 100 words — sentence 1; also in the last paragraph
- [x] Definition snippet near top — **54 words**, blockquote at ~90 words in
- [x] ≥8 LSI terms — counted **14**: Kerja Sama Pemerintah dengan Badan Usaha, tahapan proyek KPBU, PJPK, Perpres 38/2015, Permen PPN/Bappenas 7/2023, prastudi kelayakan, studi pendahuluan, Daftar Rencana KPBU, financial close, Simpul KPBU, Kantor Bersama KPBU, Fasilitas Penyiapan Proyek, Value for Money, Availability Payment
- [x] 3 internal links (1 hub + 2 cousins) — `ptpii.co.id/kpbu` (lead, anchor "skema KPBU"), `/public-private-partnership` (§1), `/pembiayaan-kreatif` (§5). Three distinct URLs, all inline, no "BACA JUGA", zero institute.iigf.co.id
- [x] ≥1 external authoritative citation — actual: **3** (JDIH Kemenkeu, peraturan.go.id, kpbu.kemenkeu.go.id)
- [x] FAQ 5–7 Q&As — actual: **6**
- [x] ≥1 list + ≥1 table — numbered list (6 tahapan), bulleted list (4 penyebab), comparison table (4 rows)
- [x] Word count inside band 1.500–1.800 — actual: **1.783** (`tools/count_words.py`), frontmatter synced

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — measured: **45 / 43 / 48 / 52 / 52** words for H2 #1–#5. All inside band.
- [x] Each body paragraph makes one independently quotable, verifiable point — spot-checked; the §5 opener was rewritten because it duplicated its own bullets instead of making a distinct point
- [x] FAQ parseable for FAQPage schema (`### question` + single answer paragraph, 40–50 words each); **`dateModified` added to the meta block** as `date_modified: "2026-08-12"`

### D. PT PII framing discipline (product_matrix.md + style_guide §11)
- [x] Framed as Badan Usaha Penjaminan Infrastruktur under Kementerian Keuangan — never lender, investor, contractor, operator, or regulator; Danantara never mentioned
- [x] ≤3 PT PII self-mentions — actual: **3** (one mid-article aside on penyiapan/strukturisasi transaksi; one closing positioning line; the CTA). Hub links counted separately as mandated internal links.
- [x] No unverifiable superlatives — grep clean on terbaik/nomor satu/paling terpercaya
- [x] Product names match product_matrix.md / dossier — single anchor **Penjaminan Pemerintah**, correctly scoped as "salah satu instrumen" toward *financial close*, not a cure-all (respects the dossier's caveat)
- [x] Closing uses a company_profile.md positioning line — "Sebagai Badan Usaha Penjaminan Infrastruktur di bawah Kementerian Keuangan, PT PII menjembatani kebutuhan kepastian investor dengan kemampuan fiskal negara"
- [x] Soft website CTA is the FINAL line, after the conclusion — "Cara kerja penjaminan pemerintah pada proyek KPBU… dapat Anda telusuri lebih lanjut di ptpii.co.id." Consultative, no "beli sekarang"
- [x] Hub link is a natural inline anchor in the lead ("skema KPBU") — not a callout
- [x] **No named officials** — no Direksi, Komisaris, or minister anywhere; the 2023 *financial close* observation is framed institutionally as "disorot dalam forum sektor infrastruktur", and the RPJMN figures as "pernyataan Kementerian Keuangan"

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: **none yet** — `articles_history/index.json` has an empty `articles` array; this is PT PII's first run.
- Siblings this month: `kpbu-02` (*KPBU atau APBN? Cara Menentukan Skema yang Tepat* — VfM decision framework) and `kpbu-03` (*KPBU dan Pembagian Risiko: Siapa Menanggung Apa*).
- Subtopic overlap (Jaccard estimate): **~0.08** vs both. This article owns process/sequence/outputs and the 2023–2025 regulatory refresh; VfM appears twice as a passing gate mention inside the tahapan list, and risk allocation twice as a passing clause. Neither is a section spine.
- **"Jaminan Pemerintah" cluster drift check**: clean. No three-stage guarantee mechanics, no hak regres, no coverage map. Penjaminan appears only in the closing and the CTA, exactly as the brief scoped it.
- Verdict: **distinct angle confirmed.**

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran on the saved final; `kpbu-01.id.quality-input.json` written to `monthly_runs/2026-08/final/`
- [x] AI-detector score < 0.30 — actual: **0.04** (verdict `pass`; thresholds revise ≥0.30, reject ≥0.50). One **low**-severity flag: `paragraph-low-variance` CV 0.355 against the script's aspirational 0.45 target.
- [x] Paragraph burstiness CV ≥ 0.30 — actual: **0.355** (sentence burstiness 0.679; top-30 vocab share 0.292)
- [ ] **Plagiarism: distinctive passages NOT web-checked — lookup unavailable.** The session's WebSearch budget was exhausted (200/200) during research. I issued one lookup against candidate #5 and received an explicit budget-exhausted refusal, so **no candidate was verified against the live web**. The verdict below is heuristic only, and I am not claiming otherwise.

**Heuristic review of the 8 extracted candidates** (manual read, no web lookup):

| # | Passage type | Assessed risk |
|---|---|---|
| 1 | Perpres 38/2015 date + JDIH status, with inline link | very low — regulation metadata, cited |
| 2 | RPJMN 2025–2029 figures sentence | low — figures are widely reported, but the framing ("tergantung asumsi kurs yang dipakai masing-masing pelapor") is original editorial hedging, not press phrasing |
| 3 | Fasilitas Penyiapan Proyek description | **reworded in-place** as a precaution; retains inline link to the Kemenkeu source it paraphrases |
| 4 | Permen 7/2023 + 9/2025 dates | very low — regulation metadata |
| 5 | Tahap perencanaan description | low — standard procedural content; sentence construction is the writer's own |
| 6 | FAQ heading string | non-issue — heading artifact, not prose |
| 7 | APBN/APBD 40% sentence in FAQ | low — original framing with inline attribution |
| 8 | Condensed six-stage summary in FAQ | low — semicolon-parallel construction is the writer's own |

No whole-paragraph lift is visible; the candidate set is dominated by facts (dates, numbers, regulation identifiers) rather than protectable expression, and the two passages closest to a source are both inline-attributed to that source. **Assigned plagiarism_score 0.12 — this reflects the unverified state of the check, not detected copying.** Recommend a spot re-check of candidates #2 and #5 when WebSearch budget resets.
