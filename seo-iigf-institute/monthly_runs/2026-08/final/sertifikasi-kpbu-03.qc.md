---
brief_id: "sertifikasi-kpbu-03"
editor_run_date: "2026-08-12"
recommendation: "approve"
overall_score: 9
ai_score: 0.04
plagiarism_score: 0.10
---

# Editor QC Report — Sertifikasi KPBU Internasional: Alur Tiga Level CP3P dan Urutannya

## Recommendation
**approve**

This was flagged as the highest accuracy-risk article in the batch, and it survives the audit. Every hard-fail tripwire is clear: no MIF, no African Development Bank/ALSF, no "open-book" exam format, no batch dates, no pinned chapter range for Execution, no mandatory Preparation→Execution order, no Kantor Bersama membership claim, no named individuals, no forbidden link domains. The APMG-owns / IIGF-Institute-delivers split holds at all six touchpoints where the two entities appear together. I applied eight in-place fixes, the two most substantive being (a) the training-registration vs exam-registration step, which stated a universal "two registrations" rule that contradicted the bundled-package fact three paragraphs later, and (b) a FAQ fee answer that generalised one provider's published price into a market-wide "biaya pelatihan di Indonesia berkisar" claim. Both now carry the separation the brief demanded, and the fee is explicitly labelled "bukan tarif resmi APMG". Anti-AI is genuinely clean — zero em-dashes, zero cliché openers, paragraphs running 1 to 7 sentences and 5 to 157 words, AI-detector 0.04. The one honest caveat: the WebSearch budget for this session was exhausted (200/200), so the plagiarism web-lookup leg and live APMG re-verification could not be executed; I fell back to the dossier's own APMG citations (which are unusually strong here — three independent APMG-domain sources plus a verbatim launch-article quote for the exam format) and a manual read of the eight extracted candidate passages. That is recorded as an open flag, not hidden.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | 0 em-dashes, 0 cliché openers, 0 hype adjectives; paragraph burstiness CV 0.429; no brochure or press-release register despite the topic being a certification pathway |
| Factual & KPBU/PPP & sertifikasi accuracy | 9 | All CP3P claims trace to APMG via dossier; 3 precision corrections applied; −1 because live re-verification could not run this session |
| On-page SEO compliance | 9 | Meta 48/148/37 chars, all counts in band; H1, first-100-words, and last paragraph all carry the keyword |
| GEO extractability (§2a) | 10 | 40–60-word answer after every major H2 (59/44/48/44/44); definition snippet 50 words; FAQ answers 40–48 words |
| IIGF Institute framing discipline | 10 | Exactly 3 mentions (2 name + CTA domain); ATO/APMG split correct everywhere; only sourced factual superlative used |
| Internal linking | 10 | Exactly 3 inline anchors, correct destinations, hub in the lead, no "BACA JUGA", no ptpii.co.id/gagas.co.id |
| FAQ quality | 9 | 6 Q&As, all in band and PAA-mapped; brief listed 8 candidate questions, 2 were folded into body H2s |
| Originality (plagiarism + AI-detector) | 8 | AI 0.04 (pass); plagiarism risk assessed low by manual read, but the web-lookup leg is degraded |

## What I fixed (changelog)
- **Corrected the exam-registration step (accuracy, highest priority).** Step 5 read "Daftarkan ujian terpisah dari kelas… Dua proses, dua pendaftaran" as a universal rule, which contradicted the bundled-package fact stated three paragraphs later. Rewritten to "Bedakan pendaftaran kelas dari pendaftaran ujian" — training is bought from the ATO, the exam remains APMG's and is scheduled via Candidate Portal, some ATOs sell a package that already includes the exam fee, but what you sit is still an APMG exam. Added the practical instruction to confirm up front whether the exam slot is included.
- **Corrected APMG's role verb.** "APMG memiliki skema, **menyusun soal**, dan menganugerahkan kredensial" → "**menyelenggarakan ujiannya**". The dossier supports scheme ownership, exam administration, and credential award; it does not establish that APMG authors the question bank.
- **De-generalised the fee in FAQ #4.** "biaya pelatihan di Indonesia berkisar Rp 19.000.000…" implied a market survey that was never done. Now: "satu paket pelatihan plus ujian yang dipublikasikan penyelenggara terakreditasi di Indonesia tercatat Rp 19.000.000…", with "Angka itu bukan tarif resmi APMG dan dapat berubah" added.
- **Added the same fee/tariff separation to the table caption** ("indikatif per Agustus 2026, bukan tarif resmi APMG") and tightened the post-list budget paragraph to lead with the training-vs-exam-fee distinction rather than a vague "Soal uang, ada satu hal yang perlu dipisahkan".
- **Expanded the KPBU acronym on first use** (style_guide §3), adding the PPP equivalence: "KPBU (*Kerja Sama Pemerintah dengan Badan Usaha*) adalah istilah Indonesia untuk *public-private partnership* (PPP)". The H2 answer stays in band at 59 words.
- **Softened an over-broad accreditation statement.** "Penyelenggara di luar daftar itu tidak **berhak** menyebut pelatihannya terakreditasi" → "tidak **dapat** menyebut pelatihannya terakreditasi **APMG**" — accurate (a provider may hold other accreditations) and removes any disparagement edge.
- **Hedged an unverifiable prevalence claim** in FAQ #3: "**Banyak** peserta tetap memilih Preparation lebih dulu" → "**Sebagian** peserta memilih…", and added the APMG source tag to the exam-format numbers in that answer.
- **Removed a duplicated medium-confidence detail.** The digital-badge claim (dossier confidence: medium) appeared twice; dropped from step 6 of the numbered list and kept once in the FAQ where it carries its "per akses Agustus 2026" attribution.
- Reduced "paling sering" from three occurrences to two (vocabulary concentration); updated frontmatter `word_count` 1512 → 1563.

## What I flagged (open issues)
- ⚠️ **Plagiarism web-lookup leg not executed** — the session's WebSearch budget was exhausted (200/200) before this article ran, so none of the 8 candidate passages could be checked against live results, and APMG pages could not be re-fetched for independent confirmation. *Recommendation*: this is low residual risk by construction — every APMG source is English-language, the only Indonesian page covering this material is the client's own (an excluded domain), and the strategist's SERP scrape found no Indonesian article explaining the CP3P flow at all. If the curator wants belt-and-braces, re-run `tools/quality-check.ps1` in a fresh session and search the 8 quoted queries in `sertifikasi-kpbu-03.id.quality-input.json` before publishing.
- ⚠️ **Paragraph burstiness 0.429 vs the script's aspirational 0.45** (my threshold is ≥0.30, so this passes comfortably and the script rates it "low"). *Recommendation*: no action. The article already runs 1-sentence to 7-sentence paragraphs; pushing variance further would be artificial.
- ⚠️ **Exam language is never stated.** The dossier notes that APMG materials and exams were found only in English, which is decision-useful for this audience and would pre-empt an obvious reader question. I did not add it — editors do not add content. *Recommendation*: hand to the writer as a one-clause addition for a future refresh, or leave to the next strategist cycle (the brief already reserves "strategi persiapan ujian" for a later month).
- ⚠️ **Word count 1563 of a 1600 hard ceiling** — 37 words of headroom. *Recommendation*: any future insertion must be paired with a trim.
- ⚠️ **Three cluster articles each touch "what certification does not guarantee"** (-02 H2 #5, -03 H2 #5 ¶2, -04 H2 #5). Overlap is well under threshold because the weight and framing differ in each, but a fourth pass at the same idea next month would tip it. *Recommendation*: strategist should retire this sub-point from the cluster's future briefs.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — grep: 0 hits
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — grep: 0 hits anywhere
- [x] No "Penting untuk dicatat / dipahami bahwa" — 0 hits
- [x] "Dengan demikian" not overused — 0 hits
- [x] Em-dash count ≤2 — actual: **0**
- [x] Varied paragraph lengths — 7/3/4/2/4/1/3/1/4/2/3/3/4/1/2/16(list)/3/4/4/3/2/2/1 sentences; 5 to 157 words
- [x] Not every H2 → 3-bullet list — H2 #1 prose + bullets, #2 prose + table, #3 prose only, #4 prose + numbered steps, #5 prose only
- [x] No generic claims without numbers — 50/40 menit/50%, 4×20 poin/2,5 jam, 8 bab, ~30 ATO, Rp 19jt/21jt, 2019, all with reference year
- [x] No stacked hype adjectives — grep for terbaik/nomor satu/terlengkap/terdepan/canggih/komprehensif: 0 hits
- [x] No service-dump paragraph — one anchor only (Sertifikasi CP3P), in the closing
- [x] **Brochure register (this client's signature failure mode)**: clear. No "segera daftar", "jangan lewatkan", "daftar sekarang". The step list teaches a decision sequence rather than selling seats, and step 1 actively steers a reader toward a team programme instead of an individual enrolment.

### B. Factual & KPBU/PPP & sertifikasi spot-check
> **Degraded mode**: WebSearch budget exhausted (200/200) before this run. Verdicts below rest on the dossier's direct APMG citations, `company_profile.md`, and `product_matrix.md`. No claim was accepted on the writer's word alone; anything the dossier marked medium-confidence was either attributed inline or removed.

| Claim | Source check | Verdict |
|---|---|---|
| Foundation: 50 soal pilihan ganda, 40 menit, ambang lulus 50% (25/50) | dossier ✓ (FAQ resmi APMG, ppp-certification.com/faqs, high confidence) | **pass** |
| Preparation & Execution: 4 soal @20 poin (80 total), 2,5 jam, ambang lulus 50% (40/80) | dossier ✓ (APMG FAQ + verbatim quote from APMG's 2018 Execution-exam launch article: "2.5 hours long with four questions worth 20 marks each; passing requires 40 of 80 possible marks") | **pass** |
| Setelah Foundation, Preparation dan Execution bebas urutan — "*not in a successive order*" | dossier ✓ (3 independent APMG sources; explicitly corrects the brief's assumption). Draft renders it as an APMG rule and labels the Preparation-first habit "preferensi belajar yang masuk akal, bukan ketentuan APMG" | **pass** |
| Kerangka dikembangkan ADB, EBRD, IDB, IsDB, World Bank Group + pendanaan PPIAF | dossier ✓ (apmg-international.com product page). **MIF absent, African Development Bank/ALSF absent** — both are hard fails and neither appears. Note: `company_profile.md` still lists MIF; the dossier could not verify it in any source, and the draft correctly follows the dossier | **pass** |
| Biaya Rp 19jt / 21jt / 21jt, indikatif per Agustus 2026, paket kursus + ujian, bukan tarif APMG | dossier ✓ + product_matrix ✓ + company_profile ✓ (3 independent confirmations). Label present in all 4 places the figure appears (table header, caption, body paragraph, FAQ) | **pass** |
| PT Penjaminan Infrastruktur Indonesia (Persero) terdaftar di direktori ATO APMG; ~30 ATO global | dossier ✓ (ppp-certification.com/training-providers — first-party APMG source). Draft hedges with "sekitar 30" | **pass** |
| Nomor bab level Execution | **Not pinned** — draft uses functional description ("dokumen tender dan kontrak, proses tender, manajemen kontrak") plus an explicit note that chapter numbering follows the current PPP Guide edition. Complies with the instruction not to fix 5–8 vs 5–7 | **pass** |
| "Open-book" exam format | **Absent** — grep: 0 hits. Correctly excluded (client-site-only claim, unconfirmed by APMG) | **pass** |
| Tanggal batch / jadwal kelas | **Absent** — grep: 0 hits for batch/November 2024/any schedule | **pass** |
| Klaim anggota Kantor Bersama KPBU | **Absent** — grep: 0 hits | **pass** |
| Janji kelulusan / hasil karier | **Absent**, and actively negated: "Sertifikasi juga tidak menjanjikan hasil ujian, kenaikan jenjang, atau keberhasilan proyek" | **pass** |
| Nama individu | **Absent** — grep and manual read: 0 | **pass** |

**Corrected in-place, not merely flagged**: APMG "menyusun soal" → "menyelenggarakan ujiannya"; the universal "dua pendaftaran" rule → the bundled-package-aware formulation; the market-wide fee generalisation → single published package.

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: **48 chars / keyword at position 0**
- [x] Meta description 140–160 — actual: **148**
- [x] Slug ≤60, kebab-case, keyword — actual: **`sertifikasi-kpbu-alur-tiga-level-cp3p` (37)**
- [x] H1 contains keyword — "Sertifikasi KPBU Internasional: Alur Tiga Level CP3P dan Urutannya"
- [x] H2 count 4–7 — actual: **5 body H2s** (+ FAQ + Kesimpulan = 7 total)
- [x] ≥1 question-format H2 (2: "Apa itu CP3P dan apa hubungannya…?", "Harus mulai dari level mana, dan bolehkah melompat?"); ≥1 honest/counter-conventional H2 ("Lulus Foundation belum berarti Anda menyandang CP3P")
- [x] Keyword in first 100 words — actual: **word #52 of the body**, as the hub anchor
- [x] Definition snippet near top — **50 words**, blockquote at ~word 100
- [x] ≥8 LSI terms — counted: **~20** (CP3P, CP3P Foundation, level Preparation, level Execution, ujian *Practitioner*, PPP Guide, APMG International, ATO, Candidate Portal, KPBU, *public-private partnership*, *appraisal*, *risk allocation*, ADB, EBRD, IDB, IsDB, World Bank Group, PPIAF, kredensial PPP internasional)
- [x] 3 internal links (1 hub + 2 cousins) — destinations: `institute.iigf.co.id/` (lead, anchor "sertifikasi KPBU"), `/capacity-building` (step 1), `/e-library/lainnya/77/…` (H2 #5). All inline, no callouts
- [x] ≥1 external authoritative citation — actual: **2, both APMG** (apmg-international.com product page; ppp-certification.com/faqs)
- [x] FAQ 5–7 Q&As — actual: **6**
- [x] ≥1 list + ≥1 table — 1 bulleted list, 1 numbered 6-step list, 1 comparison table
- [x] Word count inside band 1.200–1.600 — actual: **1.563** (`count_words.py`; the quality-check script's looser counter reports 1.603 because it counts table pipes and headings differently — `count_words.py` is the pipeline's canonical counter per CLAUDE.md §6)

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — measured: **59 / 44 / 48 / 44 / 44** words (Kesimpulan opener also 52). All five in band
- [x] Each body paragraph makes one independently quotable, verifiable point — spot-checked: the ATO-vs-APMG paragraph, the fee-separation paragraph, and the chapter-edition caveat each stand alone with a sourced fact
- [x] FAQ parseable for FAQPage schema — clean `### Question` → answer-paragraph pairs, answers 40–48 words
- [x] Freshness noted — `publish_month: 2026-08` in the meta block plus 12 inline "per akses Agustus 2026" stamps. No separate `dateModified` field, consistent with the batch convention set by the other four finals in `2026-08/final/`

### D. IIGF Institute framing discipline (product_matrix.md + style_guide §11)
- [x] Framed as PT PII's knowledge-management unit and an APMG ATO — **NOT** the owner/awarder of CP3P. Verified at all six touchpoints: "pemiliknya APMG International"; "Lembaga pelatihan tidak menerbitkan kredensial ini"; "APMG memiliki skema, menyelenggarakan ujiannya, dan menganugerahkan kredensial"; "Kredensial CP3P penuh diterbitkan APMG… bukan oleh lembaga yang melatih Anda"; "Status ATO berlaku untuk pelatihan; kredensialnya tetap diterbitkan APMG"; closing "menyelenggarakan pelatihan Sertifikasi CP3P"
- [x] ≤3 IIGF Institute self-mentions — actual: **3** (table caption, Kesimpulan, CTA domain). Both name mentions carry "PT Penjaminan Infrastruktur Indonesia (Persero)" + KPBU context, satisfying the IIGF disambiguation guardrail
- [x] No unverifiable superlatives — only "ATO APMG pertama di Indonesia sejak 2019", which `product_matrix.md` permits as a sourced factual claim; it sits inside a sentence attributed to IIGF Institute's own publication, and the article separately tells the reader to verify ATO status in APMG's directory
- [x] Programme names match product_matrix/dossier — "Sertifikasi CP3P" and "capacity building" only; exactly one CTA anchor, no programme-dump
- [x] Closing uses a company_profile.md positioning line — paraphrase of "unit manajemen pengetahuan PT PII" + "ATO APMG pertama di Indonesia untuk program sertifikasi CP3P"
- [x] Soft website CTA is the FINAL line, after the conclusion — "Rincian program pelatihan dan publikasi KPBU lainnya dapat Anda telusuri di institute.iigf.co.id." Consultative, no "daftar sekarang"
- [x] Hub link is a natural inline anchor in the lead — "Jalur [sertifikasi KPBU](https://institute.iigf.co.id/) bertaraf internasional memang berjenjang". No "BACA JUGA" callout anywhere
- [x] No links to `ptpii.co.id` / `gagas.co.id` — grep: 0 hits. PT PII appears only as a plain factual mention of the parent

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: **none yet** — `articles_history/index.json` has an empty `articles` array; this is month one for the client.
- In-batch cluster siblings: `-01` (peta tiga kategori), `-02` (nasional vs internasional), `-04` (kapan belum perlu + kesalahan umum).
- Subtopic overlap (Jaccard estimate): **~0.13 vs -01**, **~0.12 vs -02**, **~0.11 vs -04**. This is the only article in the cluster that covers the three CP3P levels, the PPP Guide chapter mapping, exam formats, the Foundation prerequisite, the non-successive-order rule, the six-step flow, and the training-vs-exam registration split — none of those appear in the other three drafts' H2 sets.
- Shared-idea note: "what a credential does not guarantee" appears in -02, -03, and -04, but as a full H2 in -02 and -04 versus a single paragraph inside a differently-framed section here.
- **Verdict: distinct angle confirmed.**

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran; `sertifikasi-kpbu-03.id.quality-input.json` written to `monthly_runs/2026-08/final/`
- [x] AI-detector score < 0.30 — actual: **0.04** (verdict: pass). Sentence burstiness 0.997; top-30 vocab share 0.32; one low-severity flag only
- [x] Paragraph burstiness CV ≥ 0.30 — actual: **0.429** (script's own aspirational target is 0.45; my threshold is 0.30)
- [ ] **Plagiarism: distinctive passages web-checked — NOT EXECUTED (degraded).** WebSearch budget exhausted (200/200) before this article ran. 8 candidate passages were extracted and assessed manually instead:
  1. Lead scene ("Persetujuan anggaran sudah keluar…") — original narrative written for this article; no plausible source.
  2. Closing IIGF Institute positioning — derived from pre-approved `company_profile.md` lines; any match would be to institute.iigf.co.id, an excluded domain.
  3, 6. Bare exam specs ("4 soal kompleks, 80 poin, 2,5 jam"; "50 soal dalam 40 menit") — 8–12 words, structurally below the 20-word threshold, and the source is English.
  4, 5. "~30 ATO terdaftar di seluruh dunia" — Indonesian rendering of an APMG directory count; original phrasing.
  7, 8. Foundation-open-to-beginners and digital-badge sentences — Indonesian paraphrases of English APMG FAQ text.
  Structural argument: every authoritative source for this topic is English-language, and the strategist's SERP scrape confirmed **no Indonesian article explains the CP3P flow** (`biaya cp3p` returned zero autocomplete suggestions). The only Indonesian corpus overlap is the client's own site. Verbatim ≥20-word Indonesian matching on a non-IIGF page is therefore implausible rather than merely unobserved.
  Internal reuse check: the FAQ answers share up to 15 consecutive words with the dossier's drafted FAQs — expected pipeline behaviour (researcher → writer), not external plagiarism.
- **plagiarism score: 0.10** — low risk, scored above the batch's usual 0.05 purely to reflect the unexecuted web leg rather than any observed hit.
