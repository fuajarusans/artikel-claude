---
brief_id: "capacity-building-pembiayaan-kreatif-04"
editor_run_date: "2026-09-22"
recommendation: "approve"
overall_score: 9
ai_score: 0.04
plagiarism_score: 0.05
---

# Editor QC Report — KPBU Syariah dan Sukuk Daerah: Jalur Pembiayaan Kreatif

## Recommendation
**approve**

This is the highest-source-risk article of the September batch and it survives the scan with room to spare. Every hard guardrail holds: no akad names, no religious advocacy (the syariah route is consistently framed as a financing-structure option with calculable administrative consequences, never as a moral preference), the fatwa-scope caveat is intact, the compliance-judgement sentence correctly places syariah conformity with the competent authority rather than the project team, the scheme/instrument separation is clean and never collapses, the legal chain carries number + year + status, the 2,5× / 75% figures are labelled policy indications attached to PP No. 1/2024 rather than verified article text, and the Republika aggregate is attributed to its outlet and date and explicitly demoted to "indikasi skala, bukan basis data resmi". Framing discipline is exemplary: 2 self-mentions, Rule 5 collaboration wording verbatim, CP3P never mentioned so Rule 6 cannot fire, no named individuals despite the primary sources being full of them. I made 6 in-place edits, the most substantive being an attribution correction in the definition snippet (the riba/gharar/maysir triad was credited to the Kemenkeu portal; the dossier traces it to DSN-MUI) and the removal of an unsourced "sewa atau bagi hasil" characterisation in the comparison table. Net word change: zero — the final is still 1.574, preserving the 26-word margin. Open flags are all inherited dossier-confidence items already hedged in-text, not defects in the draft.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | ai_score 0.04. Zero em-dashes, zero cliché openers, no "Selain itu"/"Dengan demikian"/"Sebagai kesimpulan". Sentence burstiness 0.934. Concrete pemerintah-kota hook; "Ini sering disalahpahami" aside reads like an instructor. Neither brochure nor press-release register. |
| Factual & KPBU/PPP & sertifikasi accuracy | 9 | 7 claims spot-checked, all pass. Two independently re-verified on the live web this run (workshop Bandung; Concept Note authorship). Riau rupiah figure remains dossier-medium confidence — attributed and dated in-text. |
| On-page SEO compliance | 8 | All items pass except the full primary keyword in `meta_title` — a brief-authorized deviation (see flags), not a drafting error. |
| GEO extractability (§2a) | 9 | All five body H2s carry a 44–50-word direct answer. Definition snippet 60 words. FAQ FAQPage-ready. `date_modified` added. |
| IIGF Institute framing discipline | 10 | 2 self-mentions; PT PII knowledge-unit framing; Rule 5 "berkolaborasi dalam ekosistem"; CP3P absent so no ownership risk; no superlatives; no individuals; positioning line + soft CTA as the final line. |
| Internal linking | 10 | Exactly 3 inline anchors, all on `institute.iigf.co.id`, correct destinations, no "BACA JUGA", no `ptpii.co.id` / `gagas.co.id`. |
| FAQ quality | 9 | 6 Q&As, each 48–58 words, each carrying a figure with its year. The "lebih murah?" answer refuses the claim outright — strong neutrality signal. |
| Originality (plagiarism + AI-detector) | 9 | ai 0.04; 3 of 8 candidate passages web-probed within budget, no verbatim ≥20 words on any page. |

## What I fixed (changelog)
- **Definition snippet attribution corrected (the single most important fix).** The blockquote credited "menghindari *riba*, *gharar*, dan *maysir*" to the Kementerian Keuangan portal. Dossier A1 records Kemenkeu as supplying only the "pengembangan dari KPBU konvensional / akad sesuai syariah" framing; the triad traces to DSN-MUI (Fatwa No. 32/DSN-MUI/IX/2002) per dossier A4. Split into two attributed sentences: "…sebagaimana dijelaskan portal resmi Kementerian Keuangan. Penghindaran *riba*, *gharar*, dan *maysir* berpijak pada kaidah Dewan Syariah Nasional-MUI." This also removed an internal inconsistency — §1 paragraph 2 already attributed the triad correctly. Snippet still lands at 60 words (inside the 40–60 band).
- **Removed an unsourced characterisation of syariah financing structure** in the comparison table: "Tim membaca logika sewa atau bagi hasil atas aset" → "Tim membaca logika kepemilikan aset dan hak manfaat". The replacement traces directly to the AAOIFI definition Kemenkeu cites (dossier A5: "ownership of tangible asset, usufruct and services"). "Sewa atau bagi hasil" was an editorial inference edging toward akad characterisation — the article's number-one risk. Length-neutral.
- **Narrowed an over-broad claim in the lead**: "Yang tersedia di internet hanya definisi normatif dan reportase kegiatan" → "Yang mudah ditemukan hanya…". The original asserted something about the entire internet (−1 word).
- **Tightened §2 to fund the snippet edit**: "Bukti bahwa keduanya berbeda terletak pada rekam jejaknya." → "Perbedaan itu terlihat di rekam jejaknya." (−3 words), keeping the net change at zero against the 26-word ceiling margin.
- **Split the fatwa-scope caveat into its own paragraph** (§1). "Fatwa itu mengatur instrumen sukuk dan obligasi syariah secara umum, bukan skema bernama 'KPBU Syariah'" is now an independently quotable unit rather than the tail of a three-claim paragraph — GEO one-point-per-paragraph, and it raises paragraph variance.
- **Split the Republika figure into its own paragraph** (§4), visually separating the primary-source 8% (Oktober 2021) from the secondary media aggregate and reinforcing the "indikasi skala, bukan basis data resmi" demotion.
- **Added `date_modified: "2026-09-22"`** to the frontmatter (§2a freshness requirement; matches the convention in the August finals, which the draft had dropped).
- **Word count**: 1.574 before, 1.574 after. Frontmatter `word_count` verified in sync via `tools/count_words.py`.

## What I flagged (open issues)
- ⚠️ **Riau figure sits on medium dossier confidence.** "Rp 0,26 triliun, sekitar separuh nilai investasi" (pembiayaan.pu.go.id, 26 Oktober 2021) was extracted by automated summary, not a manual line-by-line read (dossier C1). It is properly attributed and dated in-article, so it is publishable as written — *recommendation*: a human should open the source page once before publication, since this is the article's load-bearing "the scheme has actually run" evidence.
- ⚠️ **`simpulkpbu.pu.go.id` is now reachable.** The KPBU Syariah (KPBUS) page — indexed under "skema pembiayaan" — surfaced in two of my three searches, after failing DNS for both the strategist and the researcher. It independently corroborates the article's scheme-vs-instrument spine and is the strongest available third citation. *Recommendation*: not added here (an editor does not add sources, and the 1.600 ceiling leaves no room); route to the researcher for the next refresh or the next article in this cluster.
- ⚠️ **A strong corroborating fact exists outside the dossier and was deliberately NOT added.** Search surfaced that DSN-MUI issued a syariah-conformity opinion for the first KPBU Syariah project (a regional hospital in Aceh). This would materially strengthen the article's "penilaian kesesuaian syariah adalah ranah otoritas yang berwenang" line. *Recommendation*: researcher verifies it primary, strategist considers it for a future brief — I am not a writer and will not import facts the dossier does not carry.
- ⚠️ **`meta_title` does not carry the full primary keyword.** It carries "Pembiayaan Kreatif" but not "Capacity Building pembiayaan kreatif". This is a brief-authorized deviation: the brief front-loads "KPBU Syariah" in the title and requires the full phrase in the lead and meta description — both satisfied. Widening the title would breach 60 characters, which the failure-mode list forbids. *Recommendation*: accept as-is.
- ⚠️ **Paragraph burstiness CV 0.442 vs the script's 0.45 aspiration** (flagged `low`). Far above the ≥0.30 hard bar. I lifted it from 0.432 with two editorially justified splits and stopped: the remaining splittable blocks are the GEO 40–60-word H2 answers, which must stay intact. *Recommendation*: no action — chasing 0.008 would mean optimising for the scanner against prose quality.
- ⚠️ **Plagiarism leg partially degraded (budget cap).** 3 of 8 candidate passages web-probed, per the 3-query instruction. The 3 chosen were the highest-risk: the core definition sentence, the KNEKS/Kementerian PU ecosystem passage (whose primary sources — bandung.go.id, kneks.go.id — are *not* cited in the article, so a hit there would have counted), and the Concept Note sentence. Five lower-risk candidates (regulatory enumerations and paraphrases of the two cited portals) were not probed.
- ⚠️ **One factual sentence carries no year of its own**: "Satu proyek jalan di Sumatera Selatan juga disebut dibiayai sindikasi bank syariah." This is correct handling — dossier C2 flags the source's publication year as unconfirmed and advises qualitative use without the rupiah figure, which is exactly what the writer did, with the hedge "disebut" and the preceding sentence's attribution carrying over. Noted for transparency, no fix needed.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — grep clean
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — 0 occurrences at paragraph start
- [x] No "Penting untuk dicatat / dipahami bahwa" — 0
- [x] "Dengan demikian" not overused — 0
- [x] Em-dash count ≤2 — **0** (en-dashes in "30–31", "Cirebon–Kroya" are correct usage, not the tell)
- [x] Varied paragraph lengths — 1-sentence ("Instrumennya belum.") through 5-sentence lead; CV 0.442, sentence burstiness 0.934
- [x] Not every H2 → 3-bullet list — §1/§4 pure prose, §2 prose + 2 bullets, §3 prose + table, §5 prose + numbered list
- [x] No generic claims without numbers — 12+ dated figures inline
- [x] No stacked hype adjectives — grep clean for terbaik/nomor satu/terlengkap/terdepan/canggih/seamless
- [x] No service-dump paragraph — one anchor (PPP capacity building), closing only
- [x] **Register check (client-specific)**: not brochure ("bukan jalan pintas", "Tidak ada dasar untuk mengklaim demikian"), not press-release (no "dalam rangka mendukung" / "sebagai wujud komitmen")
- [x] **Religious neutrality**: syariah presented as a financing-structure option throughout; no sentence reads as religious encouragement; no moral-superiority framing; the cost question is answered in the negative
- [x] **No syariah-law interpretation**: every principle statement is attributed (Kemenkeu, DSN-MUI, AAOIFI via Kemenkeu); the conformity-judgement sentence assigns the call to the competent authority, not the project team
- [x] **No akad names**: grep clean for ijarah / IMBT / istishna / musyarakah / mudharabah / MMQ — the FLAG's Plan B held, and secondary sources circulating these names (confirmed in search 1) were correctly ignored

### B. Factual & KPBU/PPP & sertifikasi spot-check
| Claim | Source check | Verdict |
|---|---|---|
| Workshop Sukuk Daerah dan KPBU Syariah untuk Pemkot Bandung, 30–31 Agustus 2022, 13 dinas + 7 BUMD | dossier D1 (high, bandung.go.id primary) ✓ + **independently re-verified this run** via bandung.go.id / kneks.go.id | pass |
| UU No. 1 Tahun 2022 (HKPD) → PP No. 1 Tahun 2024 (pengganti PP No. 56 Tahun 2018) → POJK No. 10 Tahun 2024, "ketiganya berlaku per verifikasi 2026" | dossier B2 ✓ — number + year + status all present, chain in correct order, repeal noted | pass |
| Kapasitas fiskal 2,5 kali + pagu kumulatif 75% pendapatan APBD = "indikasi yang melekat pada PP No. 1 Tahun 2024… bukan bunyi pasal yang sudah diverifikasi" | dossier B2 hedge ✓ — the required framing is reproduced almost verbatim, including the explicit disclaimer sentence | pass |
| Nol realisasi obligasi/sukuk daerah s.d. pertengahan 2026; DKI Jakarta "nilai indikatif Rp 3,5 triliun", tenor 7 tahun, target Juni 2027, "per pemberitaan Juli 2026… masih rencana dan belum *financial close*" | dossier B3 ✓ — indicative label, year, and not-yet-financial-close status all present | pass |
| Pembiayaan syariah ~8% dari pembiayaan perbankan proyek KPBU sektor PU per Oktober 2021 | dossier C3 ✓ (pembiayaan.pu.go.id, medium-high) — cited inline with the source link | pass |
| Republika (28 November 2024): 16 proyek KPBU, Rp 20,35 triliun, "lebih tepat dibaca sebagai indikasi skala, bukan basis data resmi" | dossier C4 ✓ — outlet + date attributed, demoted as required, not the article's headline number, Cisumdawu correctly dropped | pass |
| Concept Note KPBU Syariah disusun KNEKS bersama PT PII; tahun "tidak konsisten antar sumber"; status rujukan konsep bukan peraturan | dossier A2/A3 ✓ + **independently re-verified this run** (Kemenkeu portal). Writer correctly kept only the high-confidence pair and omitted the medium-confidence additions | pass |
| Fatwa No. 32/DSN-MUI/IX/2002 governs sukuk/obligasi syariah **secara umum**, not a scheme named "KPBU Syariah" | dossier A4 flag ✓ — caveat present and now standing as its own paragraph | pass |

**Banned-content sweep (all clean):** Cisumdawu · RPJMN · funding gap · Rp 1.435 triliun · "38 provinsi" · akad names · MIF · CP3P · "anggota Kantor Bersama" · named individuals · `ptpii.co.id` · `gagas.co.id` · pre-feasibility-study counts. Rule 6 cannot fire — CP3P is never mentioned, so no developer list appears. Rule 5 satisfied verbatim: "Berkolaborasi dalam ekosistem Kantor Bersama KPBU". IsDB appears once, in the KPBU-syariah ecosystem context only, never adjacent to a CP3P-developer claim.

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: **54 chars**; "KPBU Syariah" at position 0, "Pembiayaan Kreatif" at 30. Full primary keyword absent — brief-authorized, see flags
- [x] Meta description 140–160 — actual: **146**; contains "capacity building pembiayaan kreatif" in full
- [x] Slug ≤60, kebab-case, keyword — actual: `kpbu-syariah-sukuk-daerah-pembiayaan-kreatif` (**44**)
- [x] H1 contains keyword — "…Jalur Pembiayaan Kreatif" (partial, per brief)
- [x] H2 count 4–7 — actual: **5 body H2s** (+ FAQ + Kesimpulan = 7 total)
- [x] ≥1 question-format H2 (2: "Apa itu KPBU Syariah?", "Apa bedanya KPBU syariah dan sukuk daerah?"); ≥1 honest/counter-conventional H2 ("Jalur syariah bukan jalan pintas: apa yang justru bertambah")
- [x] Keyword in first 100 words — "capacity building pembiayaan kreatif" at word ~78
- [x] Definition snippet near top — blockquote, **60 words**, inside first 150
- [x] ≥8 LSI terms — counted **17**: KPBU Syariah/KPBUS, sukuk daerah, obligasi daerah, pembiayaan syariah infrastruktur, KNEKS, DSN-MUI, UU HKPD, POJK 10/2024, PP 1/2024, PJPK, prastudi kelayakan, akad, AAOIFI, Sukuk Negara, *financial close*, kapasitas fiskal, basis investor syariah
- [x] 3 internal links (1 hub + 2 cousins) — `/capacity-building` (lead, inline) · `/e-library/lainnya/77/…` (§3) · `/` (§5). Exactly 3, no more
- [x] ≥1 external authoritative citation — actual: **2** (kpbu.kemenkeu.go.id, pembiayaan.pu.go.id)
- [x] FAQ 5–7 Q&As — actual: **6**, each 48–58 words
- [x] ≥1 list + ≥1 table — bulleted pair (§2), 6-item numbered list (§5), 4×4 comparison table (§3)
- [x] Word count inside the brief's band (1.200–1.600) — actual: **1.574** (26 under the hard ceiling; net editorial change 0)

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — measured: §1 **49** · §2 **46** · §3 **50** · §4 **47** · §5 **44**. All five inside the band; none is the top definition snippet
- [x] Each body paragraph makes one independently quotable, verifiable point — improved by two splits this run (fatwa-scope caveat; Republika aggregate). Strongest extraction candidate remains §2's opening, which no competing page answers cleanly
- [x] FAQ parseable for FAQPage schema (`## FAQ` → `###` question → answer paragraph); `date_modified: "2026-09-22"` added to the meta block

### D. IIGF Institute framing discipline (product_matrix.md + style_guide §11)
- [x] Framed as PT PII's knowledge-management unit — "IIGF Institute sebagai unit manajemen pengetahuan PT Penjaminan Infrastruktur Indonesia (Persero)". Not a university, not an independent legal entity, not a CP3P owner/awarder. CP3P is never mentioned, so the ATO/APMG sentence is not triggered
- [x] ≤3 IIGF Institute self-mentions — actual: **2** (one named mention in `## Kesimpulan`, one domain mention in the closing CTA)
- [x] No unverifiable superlatives — grep clean
- [x] Programme names match product_matrix / dossier — "PPP capacity building", the anchor the brief mandates, once, in the closing. No programme-dump
- [x] Closing uses a company_profile.md positioning line — the Rule 5 collaboration line, reproduced without mutation into "anggota"
- [x] Soft website CTA is the FINAL line, after the conclusion — "Jika daftar kesiapan di atas ingin Anda dalami lebih jauh, program dan publikasi terkait dapat ditelusuri di institute.iigf.co.id." Consultative, not "beli/daftar sekarang"
- [x] Hub link is a natural inline anchor in the lead — "[capacity building pembiayaan kreatif](https://institute.iigf.co.id/capacity-building)". No "BACA JUGA" callout anywhere
- [x] IIGF disambiguation — "infrastruktur / KPBU / PPP / PT PII" context sits in the same sentence as the only "IIGF" mention

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: `instrumen-pembiayaan-kreatif-daerah` (2026-08, `-02`, angle_hash `sha1:ecaed3c07d59`)
- Subtopic overlap (Jaccard estimate): **≈0,20** — shared: obligasi daerah, sukuk daerah, (partially) UU HKPD. Distinct here: KPBU Syariah as a scheme, riba/gharar/maysir, DSN-MUI, KNEKS, AAOIFI, prastudi kelayakan, institutional readiness. Brief estimated 0,15; my read is marginally higher but well under the 0,4 threshold
- **Hardest guardrail in the batch — verified clean**: the seven-instrument comparison table is **not** reconstructed. The article's only table is `aspek · jalur konvensional · jalur syariah · implikasi`, i.e. syariah vs conventional on the same project, which is the one permitted comparison. The "memilih instrumen yang tepat" framing is absent; §5's "memilih jalur syariah" is a route-readiness question, not an instrument-selection question
- Also checked against `-01` (no rebuild of the umbrella "pembiayaan kreatif" definition or the four instrument groups), `-03` (added competencies here are route-specific, not mapped per project-cycle stage), `-04` (the list is syariah prerequisites, not the six failure causes)
- Verdict: **distinct angle confirmed**

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran on the saved final; `capacity-building-pembiayaan-kreatif-04.id.quality-input.json` written
- [x] AI-detector score < 0.30 — actual: **0.04** (verdict `pass`; 1 flag, severity `low`). Re-run after the two paragraph splits confirmed the score held
- [x] Paragraph burstiness CV ≥ 0.30 — actual: **0.442** (raised from 0.432 this run; script aspiration 0.45, hard bar 0.30). Sentence burstiness 0.934; top-30 vocab share 0.348
- [x] Plagiarism: 3 of 8 distinctive passages web-checked (3-query budget), no non-IIGF-Institute verbatim hit ≥20 words — plagiarism score: **0.05**
  - *Probe 1* — definition sentence "KPBU Syariah adalah skema Kerja Sama Pemerintah dengan Badan Usaha yang pembiayaannya distrukturkan memakai akad sesuai prinsip syariah": no exact-phrase match. Returned topically related pages (kpbu.kemenkeu.go.id, simpulkpbu.pu.go.id, Republika) whose wording differs materially. Well-known-definition territory in any case
  - *Probe 2* — "KNEKS dan Ditjen Pembiayaan Infrastruktur Kementerian PU tercatat menyelenggarakan sosialisasi serta pelatihan…": no verbatim match. bandung.go.id and kneks.go.id confirm the underlying facts (30–31 Agustus 2022, Hotel Luxton, 13 dinas + 7 BUMD) in entirely different prose — and both name the mayor, whom our article correctly omits
  - *Probe 3* — the Concept Note sentence: no verbatim match. Corroborated the KNEKS + PT PII authorship claim; sources also add DSN-MUI, which the writer correctly withheld as medium-confidence per dossier A2
  - Residual 0.05 reflects the 5 unprobed candidates, all of which are either regulatory enumerations (Perpres 38/2015 stages) or paraphrases of the two cited portals — categories the protocol treats as ignorable

---

## The shipping question
Would WEBARQ Promote be proud of this in front of a senior KPBU practitioner and a skeptical prospective participant? **Yes.** The scheme-vs-instrument separation, backed by the asymmetry that the scheme has reached financial close while the instrument has zero realisations, is a genuinely original contribution no page in the SERP makes cleanly. The article refuses three easy temptations — naming akad it cannot source, leading with a media aggregate, and implying the syariah route is cheaper or morally preferable — and says so out loud each time. That restraint is the credibility.
