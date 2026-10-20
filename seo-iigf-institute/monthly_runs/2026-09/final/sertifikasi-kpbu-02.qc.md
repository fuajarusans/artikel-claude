---
brief_id: "sertifikasi-kpbu-02"
editor_run_date: "2026-09-22"
recommendation: "approve"
overall_score: 9
ai_score: 0.04
plagiarism_score: 0.05
---

# Editor QC Report — Sertifikasi KPBU: Menghitung Biaya Total dan Siklus Anggaran

## Recommendation
**approve**

This is the highest-risk article type in the cluster — a cost article for a client that sells the training — and the draft arrived clean on every hard gate. The regulatory landmines were all handled correctly before I touched it: no "Pasal 49", no "Pasal 203", no characterisation of SBM as an absolute ceiling, the 20 JP figure attributed generically as "hak sekaligus tanggung jawab" with no article number and no "hak menjadi kewajiban" narrative. The cost facts are equally disciplined: Rp 19/21/21 juta labelled indicative-2026 and explicitly stated as a bundled training-plus-exam package, the national-path fee stated frankly as unpublished, retake policy as full-fee-again with the Foundation-only hedge intact, bulk-voucher discounts and regional exam pricing described as mechanisms with no invented numbers, and zero price comparison or disparagement of any other provider. My fixes were precision work, not repair: one fee figure was missing its indicative label, one passage generalised a single published tariff into an Indonesia-wide market range, four EYD/collocation slips, and one FAQ that duplicated sibling article `-03`'s territory on free APMG materials. GEO is the article's strongest dimension — verified 46/52/48/41/43-word answers after the five H2s, a 57-word snippet, and five FAQ answers at 41–60 words. AI-detector 0.04 with paragraph burstiness 0.515. Curator-ready.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Zero §5 pattern hits. 1 em-dash. Deliberate 1-sentence paragraphs ("Yang paling sering luput adalah risiko tidak lulus."). No brochure or press-release register despite being a pricing article. |
| Factual & KPBU/PPP & sertifikasi accuracy | 9 | All 7 spot-checked claims pass. Only defect: a single-provider published tariff presented as a market-wide range — tightened. |
| On-page SEO compliance | 9 | Every item passes. LSI sits at the 8-term floor verbatim (4 more present as variants) — deliberately not stuffed. |
| GEO extractability (§2a) | 10 | 40–60-word answer after all 5 H2s (measured, not claimed). `date_modified` added. |
| IIGF Institute framing discipline | 10 | 2 self-mentions (budget 3). ATO/APMG ownership split stated explicitly. Body teaches vendor-neutrally. |
| Internal linking | 10 | Exactly 3, all inline, all correct destinations. No `ptpii.co.id` / `gagas.co.id`. No "BACA JUGA". |
| FAQ quality | 9 | 5 Q&As held (no drop), all 41–60 words, one re-angled to de-duplicate against sibling `-03`. |
| Originality (plagiarism + AI-detector) | 9 | ai 0.04; no verbatim hit. Plagiarism leg partially degraded by the 3-query budget. |

## What I fixed (changelog)
1. **Missing indicative label (hard-rule fix)** — step 4 of the budget list read "Satu tahun anggaran sering tidak cukup menampung Rp 61 juta per orang" with no label → added "(indikatif 2026)". This was the article's only bare figure.
2. **Single-provider tariff generalised to a market range** — "pelatihan CP3P di Indonesia berada di kisaran Rp 19 juta…" implied a market survey the researcher never ran (dossier confidence: medium, one published source) → "Angka indikatif yang dipublikasikan untuk pelatihan CP3P di Indonesia per 2026 berada di kisaran…". Also picked up the LSI term "CP3P Foundation" naturally.
3. **Duration figure without an indicative marker** — "pelatihan ketiga level menghabiskan sekitar dua belas hari kerja" → "dengan durasi indikatif 2026, pelatihan ketiga level menghabiskan…".
4. **20 JP claim given a reference year** — added "(penelusuran 2026)" to the BKN attribution, matching sibling-article convention.
5. **Intra-cluster FAQ de-duplication** — FAQ 3 "Apakah ada materi belajar CP3P yang gratis?" answered the same facts as *two* FAQs in September `-03` ("Apakah PPP Guide bisa diunduh gratis?" / "Apakah ada kursus gratis untuk persiapan CP3P?"). Re-angled to this article's budget lens: "Apakah materi gratis CP3P bisa memotong anggaran pelatihan?", answer now closes on the Rp 42 juta of the path that has no free preparation route (arithmetic derived from the article's own table, no new fact).
6. **Missing copula causing a parse stumble** — "Padahal paket pelatihan dan biaya ujian dua aliran biaya yang bisa dipisahkan" → "…merupakan dua aliran biaya…" (the numeral-initial predicate read as a list continuation).
7. **Internal echo removed** — the H2 #4 closer repeated the FAQ's "mekanisme berbeda antarinstansi, konfirmasikan ke unit perencanaan" almost verbatim, and used the non-idiomatic "Pastikan X ke Y" → "Nama pos, akun belanja, dan opsi pembiayaan bertahap yang tersedia perlu ditanyakan langsung ke unit perencanaan instansi Anda sendiri."
8. **EYD / collocation** — added "adalah" to the terminology note; "Pastikan angka terkini ke halaman resmi" → "Periksa angka terkini di halaman resmi"; "dibanding" → "daripada"; "jarang muat nyaman dalam satu pos" → "jarang tertampung dalam satu pos anggaran".
9. **Scenario C label** — "Satu orang, bertahap dua tahun" → "Pengiriman bertahap, satu orang, dua tahun" (recovers the brief's LSI term "pengiriman bertahap" in a natural position).
10. **Frontmatter** — added `date_modified: "2026-09-22"` (GEO §2a freshness, matching house convention in the approved September finals); annotated the JDIH citation as cited in text without an outbound link; `word_count` 1493 → **1538**.

## What I flagged (open issues)
- ⚠️ **Fee figures carry medium confidence at source.** Rp 19/21/21 juta trace to `company_profile.md` ← `institute.iigf.co.id`, a site that blocks part of automated access and serves mutually inconsistent schedule pages. The article hedges correctly and points readers to the official page, so this is publishable — *recommendation*: re-verify the three numbers manually before the page goes live, since the whole article is built on them.
- ⚠️ **SBM "batas tertinggi" nuance deliberately omitted.** My plagiarism query surfaced secondary/government summaries (incl. `jdih.kemenkoinfra.go.id`, `djpb.kemenkeu.go.id`) describing a two-class SBM scheme — Lampiran I *bersifat batas tertinggi*, Lampiran II *dapat dilampaui*. The researcher could not read the primary PDF, so per the month's binding rule the article says only "kerangka acuan penyusunan RKA-K/L". That is accurate and conservative; I did not add the nuance because an editor does not add facts. *Recommendation*: if the primary text becomes parseable, a future refresh can add the two-class distinction — it would strengthen the budgeting section.
- ⚠️ **Plagiarism leg partially degraded.** Budget capped at 3 WebSearch queries; 3 of 8 candidate passages checked (the 3 highest-risk). See §F for which and why.
- ⚠️ **Vocab-repetition flag (low).** Top-30 words = 35.8% of body vs a <30% target. Inherent to an article whose subject is biaya/anggaran/level/juta/indikatif; paragraph burstiness 0.515 and sentence burstiness 0.633 both clear comfortably, so I read this as a false positive of the heuristic rather than an AI tell. No action taken.
- ⚠️ **LSI verbatim count at the floor.** 8 of 12 frontmatter secondary keywords appear verbatim; the other 4 ("anggaran pelatihan instansi", "level Execution", plus variants) are present semantically. Meets the ≥8 requirement without stuffing — noted so a future run does not "fix" it by padding.
- ⚠️ **Residual fact overlap with September `-03`** on PPP Guide / free-Foundation-course availability. Brief-sanctioned (the brief tells `-02` to use it as a budget fact and reserves study strategy for `-03`), and the H2 #5 treatment is budget-framed. Mitigated further by fix 5. *Recommendation*: if both go live in the same week, `-03` should own the "is there a free course" query and `-02` the "does free material cut my budget" query — which is now how they are phrased.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — 0 hits; lead opens on a concrete recurring institutional failure
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — 0 occurrences of "Selain itu" anywhere
- [x] No "Penting untuk dicatat / dipahami bahwa" — 0 hits
- [x] "Dengan demikian" not overused — 0 hits
- [x] Em-dash count ≤2 — **1**
- [x] Varied paragraph lengths — sentence counts per prose block: 4, 2, 1, 1, 1, 3, 2, 2, 4, 1, 3, 3, 2, 2, 3, 3, 1, 4, 1 (CV 0.88); paragraph word CV 0.71
- [x] Not every H2 → 3-bullet list — prose / table / table / numbered list / prose
- [x] No generic claims without numbers — every section carries a sourced figure with its year
- [x] No stacked hype adjectives — 0 hits on canggih/terdepan/terbaik/terlengkap/komprehensif/seamless
- [x] No service-dump paragraph — single programme anchor, in the closing only
- [x] **Brochure register (this client's signature failure mode)** — 0 hits on "segera daftar / jangan lewatkan"; 0 hits on press-release "dalam rangka / sebagai wujud". The cost table is presented as a planning instrument, not a price list, and the honest H2 actively routes some readers *away* from individual certification.

### B. Factual & KPBU/PPP & sertifikasi spot-check
| Claim | Source check | Verdict |
|---|---|---|
| Rp 19 juta Foundation / Rp 21 juta Preparation / Rp 21 juta Execution → Rp 61 juta full path, "indikatif 2026", stated as a bundled course **+ exam** package | dossier ✓ (Core facts, confidence medium) + `product_matrix.md` ✓ + `company_profile.md` table ✓ | **pass** (after fix 2 removed the market-range implication) |
| PMK No. 32 Tahun 2025 (SBM TA 2026), berlaku 20 Mei 2025, status berlaku; SBM framed as a *kerangka acuan* for RKA-K/L and explicitly **not** a line item named "sertifikasi CP3P" | dossier primary verification at `jdih.kemenkeu.go.id/dok/pmk-32-tahun-2025` ✓; date/status independently corroborated in my §F query 3 (14 Mei 2025 ditetapkan, 20 Mei 2025 diundangkan, BN 2025 No. 347) ✓ | **pass** — and the forbidden "plafon mutlak" characterisation is absent |
| Retake: no discounted rate; full exam fee payable again each attempt; stated explicitly for Foundation, hedged for the two Practitioner levels | dossier verbatim from `ppp-certification.com/faqs` ✓; article carries the hedge sentence verbatim in intent | **pass** |
| PPP Guide free to download; one free online course for Foundation only; none for Preparation/Execution | dossier verbatim ✓ (*"There is no free online training course for the Preparation and Execution exam levels."*) | **pass** |
| Bulk exam vouchers at a discount for eligible organisations incl. *government departments* and *PPP units*; discount size and procedure **not published**, reader directed to APMG | dossier verbatim from `ppp-certification.com/book-your-exam` ✓ | **pass** — no percentage invented |
| National-scheme (Ahli Pratama KPBU) fee **not published openly**, so no cross-path cost comparison is presented | dossier ✓ (absence-of-data finding, carried from August) | **pass** — stated frankly, no guessed figure |
| 20 JP/tahun attributed generically to "peraturan kepegawaian tentang Manajemen Pegawai Negeri Sipil" + BKN, framed as "hak sekaligus tanggung jawab", **no article number** | dossier ✓ (BKN opened directly; explicit recommendation to omit article numbers and the hak→kewajiban narrative) | **pass** |

Additional hard-rule sweeps, all clean: no "Pasal 49" · no "Pasal 203" · no "batas tertinggi" · no "esai" · no "MIF" · no "anggota Kantor Bersama" · no named individuals · no batch/class dates · no Execution chapter pegged (table says "Bab 5 ke atas (berbeda antarversi PPP Guide)") · no inter-provider price comparison · no disparagement of other providers · no pre-feasibility study count. Rule 6 (CP3P developer list) and Rule 5 (Kantor Bersama) are not triggered — neither topic appears.

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: **47** chars / keyword at position **0**
- [x] Meta description 140–160 — actual: **150**
- [x] Slug ≤60, kebab-case, keyword — actual: `sertifikasi-kpbu-biaya-total-siklus-anggaran` (**44**)
- [x] H1 contains keyword — "Sertifikasi KPBU: Menghitung Biaya Total dan Siklus Anggaran"
- [x] H2 count 4–5 — actual: **5** body H2s (+ FAQ + Kesimpulan = 7 total `##`)
- [x] ≥1 question-format H2 ("Lebih baik menuntaskan satu orang atau mengirim beberapa orang ke level dasar?"); ≥1 honest/counter-conventional H2 ("Bagian jalur ini yang sebenarnya tidak berbiaya")
- [x] Keyword in first 100 words — verified true (lead, as the hub anchor)
- [x] Definition snippet near top (40–60 words) — **57** words, in the first ~150 words
- [x] ≥8 LSI terms — counted: **8 verbatim** of 12, remaining 4 present as variants
- [x] 3 internal links (1 hub + 2 cousins) — `institute.iigf.co.id/` (lead, anchor "sertifikasi KPBU") · `/capacity-building` (H2 #5) · `/e-library/lainnya/77/…` (H2 #4, step 5). All inline, no callouts.
- [x] ≥1 external authoritative citation — actual: **2** outbound (`ppp-certification.com/faqs`, `ppp-certification.com/book-your-exam`) + 1 in-text regulatory citation (PMK 32/2025 via JDIH Kemenkeu, annotated in frontmatter)
- [x] FAQ 5–7 Q&As — actual: **5** (unchanged count; 41–60 words each)
- [x] ≥1 list + ≥1 table — 1 bullet list, 1 numbered list, 2 tables
- [x] Word count inside the brief's band (1.200–1.600) — actual: **1.538** (`tools/count_words.py`), 62 to spare
- [x] Keyword in last paragraph — "…menyusun angka untuk sertifikasi KPBU tahun anggaran berikutnya"

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — measured: **46 / 52 / 48 / 41 / 43**. Writer reported 46/48/48/41/43; the 48→52 shift on H2 #2 is my fix 2, still in band.
- [x] Each body paragraph makes one independently quotable, verifiable point — the two tables are row-readable with the indicative label and year inside the header, so partial quotation stays accurate; every scenario row states its own arithmetic and outcome
- [x] FAQ parseable for FAQPage schema (`###` question / plain-paragraph answer); freshness surfaced via `date_modified: "2026-09-22"` added to the meta block

### D. IIGF Institute framing discipline (product_matrix.md + style_guide §11)
- [x] Framed as PT PII's knowledge-management unit and an APMG ATO — "IIGF Institute, unit manajemen pengetahuan PT Penjaminan Infrastruktur Indonesia (Persero) di bidang penjaminan dan pembiayaan infrastruktur, merupakan *Accredited Training Organization* APMG pertama di Indonesia… **APMG International sendiri yang memiliki, menguji, dan menganugerahkan kredensialnya**". Not a university, not an independent entity, not the CP3P owner.
- [x] ≤3 IIGF Institute self-mentions — actual: **2** (one in `## Kesimpulan`, one as the closing CTA domain). Writer reported 3; recount confirms 2. The H2 #2 aside stayed vendor-neutral ("penyelenggara berstatus *Accredited Training Organization* (ATO) APMG"), which is the better choice in a cost article.
- [x] No unverifiable superlatives — "ATO APMG pertama di Indonesia" is the pre-approved factual claim; no "terbaik/nomor satu"
- [x] Programme names match `product_matrix.md` / dossier — "Sertifikasi CP3P" exactly once, capitalised, at the close (per `client_anchor`)
- [x] Closing uses a `company_profile.md` positioning line — the ATO-pertama line, with "infrastruktur / KPBU / PT PII" context adjacent to the single "IIGF" mention (disambiguation rule satisfied)
- [x] Soft website CTA present as the FINAL line, after the conclusion — "Rincian program pelatihan dan publikasi KPBU dapat Anda telusuri di institute.iigf.co.id sebelum angka anggaran dikunci." Consultative, not "beli/daftar sekarang".
- [x] Hub link present as a natural inline anchor in the lead — anchor "sertifikasi KPBU", no "BACA JUGA"

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: **`sertifikasi-kpbu-kapan-belum-jadi-prioritas`** (2026-08-04, *decision*) — the brief's designated neighbour, since this article promotes one of its checklist bullets into a whole piece.
- Subtopic overlap (Jaccard estimate): **0.00** vs August `-04`; **≈0.08** vs August `-02`; **≈0.15** vs August `-03` (the real nominal neighbour — `-03` lists "biaya sertifikasi" among its subtopics). All well under 0.4.
- Binding scope limits verified against the delivered text:
  - "Kapan belum perlu" / common-mistakes analysis (August `-04`) — **not repeated.** The lead states outright "Keputusan untuk bersertifikasi diasumsikan sudah diambil." The one adjacent moment (H2 #5's team-capacity-per-rupiah point) is a budget-allocation judgement explicitly mandated by the brief, not a defer/proceed decision.
  - National vs international comparison (August `-02`) — **not re-run.** Exactly one declining line of context, correctly stating the national fee is unpublished.
  - Re-teaching the three-level structure (August `-03`) — **not re-taught.** Levels appear as cost units; the only structural statements are the two clauses needed to make scenarios B and C interpretable.
  - Level-to-job-role mapping (September `-01`) — **absent.**
- Textual similarity vs the three September siblings (8-gram shingles): Jaccard **0.0079 / 0.0091 / 0.0091**. Every shared shingle is either an internal-link URL or the mandated positioning line — i.e. intentional boilerplate. **No repeat of August's verbatim-FAQ incident**: zero FAQ question or answer shares a shingle with any sibling, and the one topical collision (free APMG materials vs `-03`) was re-angled (fix 5).
- Verdict: **distinct angle confirmed.**

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran on the **saved final**; `sertifikasi-kpbu-02.id.quality-input.json` written
- [x] AI-detector score < 0.30 — actual: **0.04** (verdict `pass`; thresholds revise ≥0.30 / reject ≥0.50). No re-run needed.
- [x] Paragraph burstiness CV ≥ 0.30 — actual: **0.515** (sentence burstiness 0.633)
- Flags raised: **1, severity low** — `vocab-repetition`, top-30 words = 35.8% of body vs <30% target. Judged a heuristic false positive for a cost/budget article (see open issues); no fix applied.
- [x] Plagiarism: distinctive passages web-checked; **no non-IIGF-Institute verbatim hit ≥20 words** — plagiarism score **0.05**

**Plagiarism leg — honest disclosure of degraded coverage.** The run was capped at **3 WebSearch queries**; the scanner extracted **8** candidates. I spent the budget on the three highest-risk passages and dispositioned the rest without search:

| # | Passage checked | Result |
|---|---|---|
| 1 | Fee phrasing — `"Rp 19 juta untuk Foundation" "Rp 21 juta" Preparation Execution` | **No verbatim match.** Only relevant hit was `institute.iigf.co.id/cp3p/ikhtisar-kursus` — the client's own page, ignorable by rule. (It also independently corroborates the level→chapter mapping, and confirms the article was right not to peg the Execution chapter number.) |
| 2 | Definition snippet — `"penjumlahan biaya seluruh level" … "bukan harga satu kelas"` | **No match.** Snippet is original synthesis. |
| 3 | SBM/RKA-K/L framing — `"kerangka acuan penyusunan Rencana Kerja dan Anggaran Kementerian/Lembaga" "PMK No. 32 Tahun 2025"` | **No verbatim ≥20-word match.** Many pages carry the regulation's own title/metadata (a well-known-fact exclusion), none carry the article's sentence — the distinguishing clause "bukan daftar yang memuat pos bernama sertifikasi CP3P" is unique to this article. Bonus: corroborated 14 Mei 2025 / 20 Mei 2025 / BN 2025 No. 347. |

Not searched (budget exhausted), with reasoning: candidates 2, 3 and 4 are fragments of the article's **own scenario table** (arithmetic derived in-article — no external source can exist); candidate 6 is a recap of the fee sentence already cleared by query 1; candidate 8 is the "sertifikasi KPBU adalah frasa pencarian" terminology note, an original editorial framing. The retake paragraph is a faithful Indonesian rendering of an **explicitly cited** APMG FAQ passage, which the rules exclude from hit-counting. Residual risk is therefore low but not zero, which is why `plagiarism_score` is recorded as 0.05 rather than 0.00.

---

## The shipping question
Would WEBARQ Promote be proud of this on institute.iigf.co.id tomorrow, read by a senior KPBU practitioner *and* a sceptical prospective CP3P participant? **Yes.** The practitioner gets something no page in the SERP offers — a total-cost-of-ownership calculation for a tiered credential mapped onto the RKA cycle, with the lost-workdays and retake-risk components that no brochure prints. The sceptic gets a training provider that publishes the retake policy against its own interest, admits the two expensive levels have no free preparation route, points them to APMG's bulk-voucher discount rather than its own invoice, and tells a subset of readers that team capacity building would be the better use of their rupiah. That is the think-tank register the brand needs, achieved in an article about its own price list.
