---
brief_id: "kpbu-02"
editor_run_date: "2026-08-12"
recommendation: "approve"
overall_score: 9
ai_score: 0.04
plagiarism_score: 0.10
---

# Editor QC Report — KPBU atau APBN? Cara Menentukan Skema yang Tepat untuk Proyek

## Recommendation
**approve**

The draft arrived unusually clean on the two things that usually sink this client's articles: it has zero press-release register and it gets the Availability Payment / *user charge* demand-risk mapping right in all three places it appears — the single most-inverted fact in this niche. All four blacklisted data points (Rp 49 miliar, "Pasal 85", the 49%/Rp 100 miliar VGF ceiling, "86,65% swasta") are absent, the regulation chain is current throughout (Perpres 38/2015 · Permen PPN 7/2023 · PMK 68/2024, with no reference to the six revoked PMKs), and the article's most valuable honest point — that Indonesia has no codified quantitative VfM threshold — survived intact and reads clearly. My fixes were precision work, not repair: I decoupled a conflated regulatory claim, added scope to the RPJMN figure, corrected a "coverage" verb that overstated what the 40 percent number means, replaced a vague media attribution with an institutional one, and hardened the sentence that disclaims PT PII's role in the VfM decision. The decision framework is genuinely two-sided — the "kapan BELUM tepat" section runs roughly twice the length of the "kapan masuk akal" section, which is the right imbalance for this brief. Two dossier-level open flags (Permen PPN 7/2023 status, the 8→5 prastudi-kelayakan count) need a manual pre-publication check, and the plagiarism web lookup could not be run at all — see the honest note in section F.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Zero em-dashes, zero boilerplate openers, no hype stack. Paragraphs run 14–89 words. Practitioner asides ("Baris ketiga paling sering tertukar di ruang rapat"; "VfM proyek kecil bisa keluar negatif tanpa ada yang berbuat salah") read as written, not generated. |
| Factual & penjaminan infrastruktur / KPBU accuracy | 9 | All three regulations current and correctly numbered. Every figure now carries year **and** scope. Two medium-confidence dossier items flagged rather than dropped. |
| On-page SEO compliance | 9 | Full §3 checklist passes; meta title 44 chars, meta description 151, slug 30. |
| GEO extractability (§2a) | 9 | 41–49-word direct answer after every body H2 (measured). Definition snippet 59 words, starting at word 76. `date_modified` added. |
| PT PII framing discipline | 10 | Exactly 3 mentions incl. CTA. BUPI/penjamin framing throughout, plus an explicit sentence stating the VfM decision is *not* the guarantor's. |
| Internal linking | 10 | 3 distinct ptpii.co.id URLs, all natural inline anchors, no "BACA JUGA". Zero institute.iigf.co.id. |
| FAQ quality | 9 | 6 Q&As, 42–52 words each, all self-contained and PAA-derived. |
| Originality (plagiarism + AI-detector) | 8 | AI-detector 0.04 (decisive pass). Plagiarism assessed by heuristic + manual read only — no web lookup was possible this session. |

## What I fixed (changelog)
- **Decoupled a conflated regulatory claim (§5).** The draft read "…menyediakan jalur KPBU skala kecil dengan proses disederhanakan, **termasuk** memangkas kajian prastudi kelayakan dari delapan menjadi lima", implying the 8→5 cut belongs to the small-scale track. The dossier presents it as a general Permen PPN 7/2023 change. Split into two sentences and reworded the threshold point ("Yang tidak disediakannya adalah ambang nilai investasi lintas sektor…").
- **Added scope to the headline RPJMN figure.** "Kebutuhan pembiayaan infrastruktur nasional" → "…nasional **lintas sektor**", so it cannot be confused with the Kementerian PU portfolio figure (Rp 1.905,3 triliun) or the total-investment figure (Rp 47.587,3 triliun) that the dossier warns are circulating alongside it.
- **Corrected an overstated verb on the 40 percent figure.** "APBN dan APBD digabung **hanya menutup** sekitar 40 persen" → "**kontribusi** APBN dan APBD digabung **diperkirakan hanya sekitar** 40 persen dari angka itu". The dossier describes a targeted contribution share (APBN ~23% + APBD ~17%), not demonstrated funding coverage.
- **Replaced a vague attribution.** "menurut laporan Juni 2025" → "(forum pembiayaan infrastruktur pemerintah, Juni 2025)", and labelled the 21,4% / Rp 440 triliun figure "pembanding **retrospektif**" so the 2020–2024 number cannot be read as a 2025–2029 projection. Institutional framing kept; no official named.
- **Hardened the PT PII / VfM-authority disclaimer (this article's #1 risk).** "Keputusan uji Value for Money sendiri ada pada PJPK bersama Kementerian Keuangan dan Bappenas, bukan pada penjamin." → "**Uji Value for Money sendiri bukan kewenangan penjamin:** keputusannya ada pada PJPK bersama Kementerian Keuangan dan Kementerian PPN/Bappenas." Leads with the negation instead of trailing it.
- **Added the JDIH Kemenkeu citation for PMK 68/2024** and the clause "**mencabut enam peraturan menteri keuangan sebelumnya**" — the article now actively closes the door on the revoked PMK chain rather than merely avoiding it. Third external citation added to frontmatter.
- **Softened two unsourced quantifiers in the lead.** "hampir selalu karena APBD tidak cukup" → "biasanya"; "Dua tahun kemudian tim baru menyadari" → "Bertahun-tahun berselang, tim penyiapan baru menyadari" (removed a pseudo-precise duration presented as fact).
- **Rewrote the definition snippet** to reduce verbatim overlap with the dossier draft and statutory boilerplate; still 59 words, still attributed to Perpres 38/2015.
- **Glossed *bankability* on first use** per style_guide §3 ("kelayakan proyek di mata pemberi pinjaman").
- **Frontmatter**: added `date_modified: "2026-08-12"` (GEO §2a freshness); synced `word_count` 1668 → **1766**. Note: the writer's self-reported 1668 was wrong — the draft actually measured 1727 via `count_words.py`.

## What I flagged (open issues)
- ⚠️ **Permen PPN/Kepala Bappenas No. 7 Tahun 2023 status is medium-high, not high.** The dossier confirmed "Berlaku" and the 29 Oktober 2023 date via a third-party legal database and search snippets; `jdih.bappenas.go.id` and `peraturan.bpk.go.id` both returned 403 during research, and I could not re-check them either (see section F). — *recommendation*: one manual browser check of jdih.bappenas.go.id before publication. The regulation is cited three times (body §5 and FAQ), so a status change would matter.
- ⚠️ **"Memangkas kajian prastudi kelayakan dari delapan menjadi lima" rests on a practitioner-association source**, not primary regulation text (dossier confidence: medium). It carries its year and regulation, and appears in one clause only. — *recommendation*: verify against the Permen text in the same manual check above; if it cannot be confirmed, delete the clause — the surrounding argument does not depend on it.
- ⚠️ **Plagiarism verdict is heuristic + manual only.** WebSearch was unavailable (budget exhausted, 200/200), so none of the 8 candidate passages received a web lookup. — *recommendation*: if the curator wants a hard originality clearance before commit, re-run the 8 queries in `kpbu-02.id.quality-input.json` in a fresh session. My manual assessment found no external verbatim risk (reasoning in section F).
- ⚠️ **`paragraph-low-variance` (low severity)**: script measured CV=0.365 against its own target of ≥0.45. This clears the binding ≥0.30 bar comfortably and is partly a format artifact — six FAQ answers held to the mandatory 40–80-word band flatten the distribution. Body-only paragraphs range 14–89 words. — *recommendation*: no action; distorting the FAQ to chase variance would break §8.
- ⚠️ **No portfolio figure appears in this article** (no "61 proyek", no "Rp 732 triliun"). That is deliberate and correct for a VfM/scheme-selection piece, and it sidesteps the dossier's fastest-moving number entirely. No pre-publication check needed on that front.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — grep: 0 hits
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — grep: 0 occurrences anywhere
- [x] No "Penting untuk dicatat / dipahami bahwa" — grep: 0 hits
- [x] "Dengan demikian" not overused — grep: 0 occurrences
- [x] Em-dash count ≤2 — **actual: 0**
- [x] Varied paragraph lengths — 14w to 89w; sentence counts 1–5 per paragraph
- [x] Not every H2 → 3-bullet list — §1 prose, §2 table, §3 prose, §4 numbered list, §5 bullets + prose
- [x] No generic claims without numbers — the two soft quantifiers in the lead were softened rather than left as pseudo-claims
- [x] No stacked hype adjectives — grep for canggih/terdepan/terbaik/komprehensif/seamless: 0 hits
- [x] No service-dump paragraph — one anchor only (Penjaminan Pemerintah), no product list
- [x] No press-release register ("Dalam rangka…", "Sebagai wujud komitmen…") — 0 hits
- [x] No named officials — attributions are institutional throughout ("Kementerian Keuangan", "forum pembiayaan infrastruktur pemerintah")

### B. Factual & penjaminan infrastruktur / KPBU spot-check
| Claim | Source check | Verdict |
|---|---|---|
| "Peraturan Presiden No. 38 Tahun 2015 … masih berlaku per pengecekan Agustus 2026" | dossier ✓ (high — Ditjen Bina Marga PU arsip + JDIH BPK cross-check) | **pass** |
| "PMK No. 68 Tahun 2024, berlaku sejak 18 Oktober 2024, mencabut enam peraturan menteri keuangan sebelumnya" | dossier ✓ (high — JDIH Kemenkeu + portal KPBU Kemenkeu, two independent Kemenkeu sources); now linked in-text | **pass** |
| "USD 625,37 miliar / Rp 10.302 triliun; kontribusi APBN+APBD ± 40% (Kementerian Keuangan, Juni 2025)" | dossier ✓ (medium-high, triangulated across four outlets); scope + verb corrected in-place | **pass (corrected)** |
| "Availability Payment → risiko permintaan di PJPK; *user charge* → di badan usaha" | dossier ✓ (high — Simpul KPBU Kementerian PU, verbatim definitions); verified correct in all 3 occurrences (table row 3, §4 closer, FAQ #3) | **pass** |
| "Indonesia tidak memiliki ambang VfM kuantitatif yang dikodifikasi secara nasional" | dossier ✓ (high — Portal KPBU Kemenkeu panduan VfM); the brief's designated honest point, survived intact and stated plainly | **pass** |
| "Permen PPN/Bappenas 7/2023 tidak menetapkan ambang nilai investasi lintas sektor" | dossier ✓ (medium-high) — substance confirmed; **regulation status** needs a manual JDIH check | **pass, with open flag** |

Every figure in the article carries a reference year: Perpres 38/2015 · Permen PPN 7/2023 (29 Oktober 2023) · PMK 68/2024 (18 Oktober 2024) · USD 625,37 miliar & 40% (Juni 2025) · 21,4% / Rp 440 triliun (RPJMN 2020–2024, Juni 2025) · ~1 tahun ke *financial close* (Maret 2023) · panduan VfM & Simpul KPBU (diakses 2026). **No bare numbers.**

Blacklisted items confirmed **absent** (grep): `49 miliar` · `Pasal 85` · `100 miliar` · `86,65` · `7,22` · `61 proyek` · revoked PMK numbers `223/` `170/` `143/` `260/` `180/2020` — 0 hits each.

*Note on the one verbatim quotation*: "biaya penyiapan, transaksi, biaya kontraktual, dan biaya-biaya lain yang umumnya tidak ada dalam pengadaan barang/dan jasa" is quoted from the Kemenkeu VfM guideline inside quotation marks and attributed in the same sentence ("Panduan yang sama menyebut…"). 18 words, under the 20-word threshold, correctly handled per style_guide §10.

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: **44 chars**, "KPBU" at position 0
- [x] Meta description 140–160 — actual: **151 chars** (also satisfies the binding ≤160)
- [x] Slug ≤60, kebab-case, keyword — actual: `kpbu-atau-apbn-value-for-money` (30 chars)
- [x] H1 contains keyword — "KPBU atau APBN? Cara Menentukan Skema yang Tepat untuk Proyek"
- [x] H2 count 4–7 — actual: **7** (5 body + FAQ + Kesimpulan)
- [x] ≥1 question-format H2 (#1 "Apa itu KPBU dan apa bedanya…", #3 "Bagaimana Value for Money…"); ≥1 honest/counter-conventional H2 (#5 "Kapan KPBU BELUM tepat untuk proyek Anda")
- [x] Keyword in first 100 words — yes, in sentence 2 of the lead
- [x] Definition snippet near top (40–60 words) — **59 words**, begins at word 76
- [x] ≥8 LSI terms — counted: **15** (KPBU vs pengadaan konvensional · Value for Money · pengadaan konvensional APBN · biaya transaksi · Availability Payment · user charge · Dukungan Kelayakan/VGF · KPBU skala kecil · pembagian risiko · kewajiban kontinjensi · bankability · financial close · PJPK · kelayakan finansial · APBD)
- [x] 3 internal links (1 hub + 2 cousins) — destinations: `/kpbu` (lead, anchor "skema KPBU"), `/public-private-partnership` (§3, anchor "public private partnership"), `/pembiayaan-kreatif` (§5, anchor "pembiayaan kreatif") — 3 distinct URLs, all inline
- [x] ≥1 external authoritative citation — actual: **3** (kpbu.kemenkeu.go.id · jdih.kemenkeu.go.id · simpulkpbu.pu.go.id — all `.go.id` primary/official)
- [x] FAQ 5–7 Q&As — actual: **6**
- [x] ≥1 list + ≥1 table — 1 numbered list (6 items), 1 bullet list (6 items), 1 comparison table (7 rows)
- [x] Word count inside the brief's band (1.500–1.800) — actual: **1.766** (`tools/count_words.py`). The PowerShell scanner's 1.814 counts markdown table delimiters; `count_words.py` is the binding tool.
- [x] Zero links to `institute.iigf.co.id` — grep: 0

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — measured: **§1 = 49w · §2 = 48w · §3 = 42w · §4 = 41w · §5 = 45w**. All in band. (`## Kesimpulan` = 89w, correctly exempt — it is the conclusion, not a body section.)
- [x] Each body paragraph makes one independently quotable, verifiable point — the table's seven rows are each self-contained; the "no codified VfM threshold" paragraph and the "KPBU tidak menghapus kewajiban fiskal" paragraph are the two most citable standalone passages
- [x] FAQ parseable for FAQPage schema — clean `### question` → answer-paragraph pairs, 6 of them, 42–52 words; `date_modified: "2026-08-12"` added to the meta block for freshness

### D. PT PII framing discipline (product_matrix.md + style_guide §11)
- [x] PT PII framed as the government-guarantee provider (BUPI) — "Sebagai penjamin…", "Sebagai Badan Usaha Penjaminan Infrastruktur di bawah Kementerian Keuangan". No lender/investor/contractor/operator/regulator framing; no Danantara reference
- [x] ≤3 PT PII self-mentions — actual: **3** ("PT PII" ×2 + the ptpii.co.id CTA)
- [x] No unverifiable superlatives — 0 hits for terbaik/nomor satu/paling terpercaya
- [x] Penjaminan infrastruktur / KPBU product names + specs match product_matrix.md / dossier — Dukungan Kelayakan (VGF), Fasilitas Penyiapan Proyek, Availability Payment, *user charge* all named and described per dossier
- [x] **Article-specific risk #1 cleared**: the article never implies PT PII assesses Value for Money or awards projects. It states the opposite explicitly — "Uji Value for Money sendiri bukan kewenangan penjamin: keputusannya ada pada PJPK bersama Kementerian Keuangan dan Kementerian PPN/Bappenas." Kemenkeu is elsewhere correctly named as the party weighing VfM when allocating government support
- [x] Closing uses a company_profile.md positioning line — "…PT PII menjembatani kebutuhan kepastian investor dengan kemampuan fiskal negara" (pre-approved line, unmodified)
- [x] Soft website CTA present as the FINAL line, after the conclusion — "Skema penjaminan pemerintah untuk proyek KPBU diuraikan lebih rinci di ptpii.co.id, bila Anda ingin menelusurinya lebih jauh." Consultative, no "beli sekarang"
- [x] Hub link present as a natural inline anchor in the lead — "…didorong masuk ke kerangka [skema KPBU](https://www.ptpii.co.id/kpbu)". No "BACA JUGA" callout anywhere
- [x] Guarantee **mechanics** kept out — guarantees appear only as a one-line aside and the closing, leaving mechanics to the "Jaminan Pemerintah" cluster as the brief requires

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: **none yet** — `articles_history/index.json` has an empty `articles` array (first batch for PT PII)
- Sibling comparison this month: `kpbu-01` (process/stages) and `kpbu-03` (risk allocation)
- Subtopic overlap (Jaccard estimate): **~0.10 vs kpbu-01**, **~0.05 vs kpbu-03**. This article owns VfM, the seven-axis comparison, the six positive criteria, the "kapan BELUM tepat" signals, and AP-vs-user-charge as a *decision variable*. The only touchpoint with kpbu-01 is a single clause on the 8→5 prastudi-kelayakan cut, which is passing reference, not coverage
- "Jaminan Pemerintah" cluster boundary: respected — no guarantee mechanics, no risk-category matrix, shared `/kpbu` hub link used as intended
- Verdict: **distinct angle confirmed**. No drift from the brief's scheme-selection intent

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran on the **saved final**; `monthly_runs/2026-08/final/kpbu-02.id.quality-input.json` written
- [x] AI-detector score < 0.30 — **actual: 0.04** (verdict: pass; well clear of both thresholds, no re-run needed)
- [x] Paragraph burstiness CV ≥ 0.30 — **actual: 0.365** (sentence burstiness 1.077; top-30 vocab share 0.302). One low-severity flag: `paragraph-low-variance`, measured against the script's stricter internal target of 0.45 — see open flags
- [ ] **Plagiarism: distinctive passages were NOT web-checked.** WebSearch returned *"this session has used its web search budget (200 of 200 WebSearch calls)"* on my first attempt, so **zero of the 8 candidate passages received a web lookup**. I am not claiming a lookup I could not run. — **plagiarism score: 0.10**, assigned from heuristic output plus a manual source-comparison read, not from web verification

**Manual plagiarism reasoning (in lieu of web lookup)**, candidate by candidate:
1. *PMK 68/2024 citation + URL* — regulation naming, not expression. No risk.
2. *21,4% / Rp 440 triliun sentence* — I rewrote the attribution myself this pass; the number is a fact, not protected expression.
3. *Permen PPN 7/2023 sentence* — rewritten this pass ("Yang tidak disediakannya adalah…"); original construction.
4. *user charge sentence* — compared against the Simpul KPBU wording recorded verbatim in the dossier ("skema pengembalian investasi badan usaha secara langsung dari masyarakat sebagai pengguna layanan, dalam bentuk tarif"). The article's construction shares no clause with it and is inline-attributed. Paraphrase, not lift.
5. *"no codified VfM threshold" sentence* — a negative finding stated in the writer's own construction; nothing to copy from.
6. *PT PII positioning line* — verbatim from `knowledge_base/company_profile.md`, i.e. client-owned pre-approved copy. Excluded by rule.
7–8. *VfM-authority disclaimer and the "Kriteria kelima" transition* — both original editorial sentences (7 was rewritten by me this pass).

The only genuine external verbatim in the article is the 18-word Kemenkeu guideline phrase, which is quoted and attributed — the correct handling per the plagiarism rules, and below the 20-word hit threshold.

---

## The shipping question
Would WEBARQ Promote be proud of this on ptpii.co.id tomorrow, read by a senior KPBU practitioner and a skeptical PJPK official? **Yes.** It tells a PJPK reader something the entire SERP avoids — that there is no codified VfM threshold in Indonesia and that the burden of proof sits entirely on the quality of their own kajian — and it says plainly when conventional APBN procurement is the more honest answer. The seven-axis table is genuinely screenshot-and-share material. It stays inside its lane on the one thing PT PII does not decide.
