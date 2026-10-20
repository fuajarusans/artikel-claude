---
brief_id: "pembiayaan-infrastruktur-03"
editor_run_date: "2026-09-22"
recommendation: "approve"
overall_score: 9
ai_score: 0.04
plagiarism_score: 0.05
---

# Editor QC Report — Pembiayaan Infrastruktur: Kenapa Modal Menumpuk di Jawa

## Recommendation
**approve**

This was flagged as the most politically sensitive piece in the batch, and the draft arrived clean on exactly that axis: the allocator's rule is framed as arithmetic throughout ("Pemodal tidak memilih Jawa sebagai lokasi"), no region is implied undeserving, no government policy or allocation decision is criticised, and the counter-evidence half carries real weight (a four-row table of genuinely non-Java projects plus a constructive explanation of what made each financeable). The statistic-scope discipline the cluster has fought all month held: 57,27% is labelled a PDB contribution share and explicitly denied as an investment share in three separate places, and the unconfirmed 54,79% PMTB figure is not quoted at all — only described and set aside. The geography correction held: Dieng 2, Patuha 2 and Karian–Serpong appear once each, correctly located on Java and used as an educational trap-warning rather than as luar-Jawa evidence. The one blocking defect was PT PII framing, not tone: the closing ran `company_profile.md` positioning line #1 **verbatim**, word-for-word identical to the closing of `jaminan-pemerintah-02.id.md` and partially identical to `kpbu-01.id.md` — exactly the stacking the knowledge base warns against. I rewrote it around the only unused pre-approved line (structuring/preparation support), which happens to be the best thematic fit for an article arguing that structure beats geography. Nine in-place fixes, no structural rework, word count 1.776 inside the binding band, AI score 0.04, no verbatim hits on the distinctive passages I could check.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Zero AI-tell openers, zero em-dashes in body, paragraph CV 0,44, sentences 3–46 words. Lead opens on a concrete allocation-committee scene, not a generic framing. |
| Factual & penjaminan infrastruktur / KPBU accuracy | 9 | Every figure carries year AND scope. One qualitative attribution (ekon.go.id) remains undated and unlinked — dossier flagged it, article correctly avoids a precise date. |
| On-page SEO compliance | 9 | All meta counts inside band; 5 body H2s; 2 external authorities; 3 internal links. |
| GEO extractability (§2a) | 9 | All five body H2s open with a measured 42–56-word direct answer; definition snippet 50 words at word ~103. |
| PT PII framing discipline | 9 | Was 6 on arrival (verbatim positioning-line duplication + a regres phrasing that could read as asserting a claim had been paid). Both fixed. 2 self-mentions + soft CTA = 3. |
| Internal linking | 10 | 3 distinct ptpii.co.id URLs, hub inline in the lead, all three anchors distinct from August's burned list and from this month's five other ID finals. |
| FAQ quality | 9 | 6 Q&As, answers 44–51 words, each standalone-parseable and carrying a dated fact. |
| Originality (plagiarism + AI-detector) | 9 | ai_score 0.04 (pass). Two distinctive prose passages web-checked, no verbatim match. Remaining candidates are attributed statistics/regulation references. |

## What I fixed (changelog)
- **Rewrote the closing positioning sentence (blocking).** "Sebagai Badan Usaha Penjaminan Infrastruktur di bawah Kementerian Keuangan, PT PII menjembatani kebutuhan kepastian investor dengan kemampuan fiskal negara…" was a 20-word verbatim match against the closing of `monthly_runs/2026-09/final/jaminan-pemerintah-02.id.md`, and its first 11 words also matched `kpbu-01.id.md`. Replaced with a paraphrase of the one pre-approved line still unused this month (guarantee issuance + transaction-structuring support), plus an explicit "bekerja di lapisan itu, bukan di lapisan lokasi" clause that also discharges the "PT PII does not decide where infrastructure is built" rule.
- **Rewrote the final soft CTA.** "…dapat Anda telusuri lebih jauh di ptpii.co.id" echoed the CTA pattern of `kpbu-01` and `jaminan-pemerintah-01`. Now points at the project-information page and its regional spread, which is this article's actual subject.
- **Corrected an unsupported financial-close claim.** "Empat proyek berikut sudah melewati tahap yang paling sulit dinegosiasikan, yaitu saat pemberi pinjaman bersedia menandatangani" asserted lender sign-off for all four; the dossier confirms signed cooperation/guarantee agreements (and commercial operation for Palapa Ring), not financial close for Sitinjau Lauik. Reframed to what is verified: agreements signed, dates publicly traceable. Side benefit: moves the sentence off August `-03`'s lender's-desk territory.
- **Removed a phrasing that could read as asserting a claim had been paid.** "lazimnya disertai hak regres atas klaim yang dibayarkan" → "lazimnya disertai hak regres kepada PJPK apabila klaim sampai dibayarkan" (conditional, and names the counterparty).
- **Broke an internal near-verbatim repetition.** "keterlambatan persetujuan penting atau terminasi akibat tindakan pemerintah" ran three times in near-identical wording (H2 #4 bullet, H2 #5 body, FAQ). Rewrote the H2 #4 bullet ("Siapa menanggung apa bila persetujuan tertunda atau kerja sama diakhiri lebih cepat…") and cut the example list from the H2 #5 sentence, which also tightens the guarantee to boundary-level and away from product dissection. The examples now survive once, in the FAQ.
- **Expanded BPS on first use** — "(BPS)" → "(Badan Pusat Statistik/BPS)" in the definition snippet, per the brief's entity list. Snippet stays at 50 words.
- **Added two declared secondary keywords that were absent from the body**: "risiko permintaan" (H2 #2, numbered item 1) and "*bankability*" with its gloss (H2 #4 lead). H2 #4's direct answer moved 49 → 56 words, still inside the 40–60 band.
- **Smoothed two clunky constructions** introduced by the above: a duplicated "di wilayah mana pun" across consecutive sentences in the conclusion, and a repeated subject in the guarantee-boundary sentence.
- **Synced frontmatter `word_count`** 1620 → 1776 (the draft's own figure was 140 words low).

## What I flagged (open issues)
- ⚠️ **The Kementerian Koordinator Bidang Perekonomian attribution (H2 #2, item 1) carries no date and no hyperlink.** The dossier rates it medium confidence — content trusted, release date unconfirmable this session (two WebFetch attempts failed on a TLS chain error). The article handles it correctly by naming the institution without a date, so it ships. *Recommendation*: on a future refresh, re-fetch `ekon.go.id/publikasi/detail/5388/…`, add the date, and hyperlink it as a third external authority.
- ⚠️ **57,27% is a triwulan II-2023 figure and is the newest that could be confirmed.** The dossier notes the trend is slowly declining (≈59% in 2019) and that the search budget ran out before 2024/2025 tables were located. The article states the period explicitly and never implies it is today's latest — correct handling, but this is the figure that will age first. *Recommendation*: flag for the next quarterly refresh.
- ⚠️ **Word-count headroom is 24 words.** Any later addition to this article pushes it past the 1.800 ceiling. *Recommendation*: any future insert must be paired with a cut.
- ⚠️ **This month's `pembiayaan-infrastruktur-01` and `-02` finals did not exist in `final/` at QC time**, so cross-article overlap with them was assessed against the brief's declared boundaries rather than against the shipped text. From this side the boundaries hold: no per-sector money profile, no refinancing or post-close discussion, no single-daerah fiscal capacity. *Recommendation*: the curator should re-check the closing lines of `-01` and `-02` against this one before committing all three.
- ⚠️ **Plagiarism verification is partial and I am stating that plainly.** The 3-call WebSearch cap allowed 2 plagiarism lookups plus 1 factual spot-check. Five scanner candidates went unchecked; all five are attributed-statistic or regulation-reference sentences (BPS 57,27%, DJKN USD 625 miliar, PMK 68/2024, Perpres 38/2015) that are exempt under the policy anyway. Their queries are preserved in `pembiayaan-infrastruktur-03.id.quality-input.json` for a later session.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — 0 occurrences
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — 0 occurrences of "Selain itu" anywhere
- [x] No "Penting untuk dicatat / dipahami bahwa" — 0
- [x] "Dengan demikian" not overused — 0
- [x] Em-dash count ≤2 — **0 in body** (the single `—` in the file sits in a frontmatter citation note)
- [x] Varied paragraph lengths — 21 prose paragraphs, 11–102 words, CV 0,44
- [x] Not every H2 → 3-bullet list — H2 #1 prose only, #2 prose + numbered list, #3 prose + table, #4 prose + bullets + prose, #5 prose only
- [x] No generic claims without numbers
- [x] No stacked hype adjectives — "canggih/terdepan/komprehensif/solusi/terbaik" all 0
- [x] No service-dump paragraph — one product named (Penjaminan Pemerintah), never a product list
- [x] No press-release register — no "Dalam rangka", no "Sebagai wujud komitmen"
- [x] No named officials — "Menteri/Gubernur/Bupati/Direktur/Komisaris" all 0 as standalone tokens; the 5 substring hits are all inside "Kementerian"

**Political-tone read (the batch's highest-risk item):** passes. The allocator's rule is stated as economics ("Mereka memilih kombinasi variabel yang kebetulan lebih sering lengkap di koridor padat"), not neglect. No region is called incapable or a bad investment; "wilayah berpenduduk tipis" is used demographically and is paired with the constructive reading that such areas are better served by direct government spending. The de-politicizing hinge — "Proyek di Jawa dengan penyiapan yang lemah pun bisa berhenti sebelum lelang" — survives intact. No criticism of government policy or allocation decisions anywhere.

### B. Factual & penjaminan infrastruktur / KPBU spot-check
| Claim | Source check | Verdict |
|---|---|---|
| Jawa 57,27% PDB nasional triwulan II-2023; Sumatra 21,94 / Kalimantan 8,32 / Sulawesi 7,13 / Bali–NT 2,77 / Maluku–Papua 2,57 (sums to 100%) | dossier ✓ (BPS via ANTARA, directly fetched 2026-09-17), cited inline with link | pass — **and scope explicitly stated as PDB, not investment, in 3 places** |
| PMTB Jawa 2023 figure | dossier ⚠️ low confidence | pass — **the number is not quoted at all**; the article names the metric, says the circulating figure is secondary-sourced and untraced to a primary BPS table, and declines to use it |
| Perjanjian Penjaminan & Regres KPBU PJU Kabupaten Lombok Barat diteken 12 Oktober 2023 | dossier flagged "editor spot-check if possible" → **WebSearch 2026-09-22**: confirmed by `kpbu.kemenkeu.go.id/berita/read/1621` (Cooperation + Guarantee + Regress agreements signed 12 Oktober 2023; PT PII as guarantor) | pass — dossier flag closed |
| USD 625 miliar ≈ Rp 10.146–10.303 triliun, APBN ≈40%, 2025–2029 | dossier ✓ (DJKN Kemenkeu, 1 Juli 2025) | pass — scope = national RPJMN, stated once in the lead as the brief requires |
| Portofolio 61 proyek, nilai investasi > Rp 732 triliun, nilai penjaminan Rp 113 triliun, per Juni 2026 | dossier ✓ / company_profile ✓ | pass — the two values are labelled distinctly (project value vs guarantee value), not conflated |
| PMK 68/2024 berlaku sejak 18 Oktober 2024; Perpres 38/2015 payung KPBU | company_profile ✓ (both "berlaku") | pass — no revoked regulation cited; PMK 260/2010 and its chain absent |
| Dieng 2 / Patuha 2 / Karian–Serpong | dossier ✓ high confidence | pass — **all three appear exactly once, correctly placed on Java**, used as a naming-trap lesson, never as luar-Jawa evidence |
| Flyover Sitinjau Lauik investment value | dossier ⚠️ single-sourced | pass — **value omitted**; only the mechanism facts (AP, 12,5 tahun, kontrak 21 Maret 2025) are used |
| Regional cost-of-funds spread / risk premium | dossier: unsourceable, do not invent | pass — 0 occurrences |

**Figure-scope audit:** Rp 544,48 triliun (Kementerian PU), Rp 1.905,3 / Rp 753,11 triliun (Kementerian PU), Rp 47.587,3 triliun (all sectors), and Fitch are all **absent** — correct. Every number in the article carries both a reference year and a scope label.

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: **55 chars**, keyword at chars 0–24
- [x] Meta description 140–160 — actual: **149 chars**; scope-safe (says "Data BPS 2023", never "porsi investasi")
- [x] Slug ≤60, kebab-case, keyword — actual: `pembiayaan-infrastruktur-kenapa-modal-menumpuk-di-jawa` (54)
- [x] H1 contains keyword
- [x] H2 count 4–7 — actual: **5 body H2s** + FAQ + Kesimpulan
- [x] ≥1 question-format H2 ("Apa itu…?", "Mengapa pemodal swasta lebih memilih proyek di Jawa?"); ≥1 honest/counter-conventional H2 ("Menyebar proyek tidak sama dengan menyebar pembiayaan")
- [x] Keyword in first 100 words — yes, and again in the conclusion's first sentence
- [x] Definition snippet near top (40–60 words) — **50 words**, begins at word ~103
- [x] ≥8 LSI terms — counted: **21** (ketimpangan pembiayaan infrastruktur, penyerapan modal pembangunan, PDB, PMTB, kelayakan finansial proyek, penyiapan proyek, risiko permintaan, bankability, Availability Payment, Dukungan Kelayakan/VGF, KPBU, PJPK, offtaker, financial close, arus kas, KI, KEK, DPP, penjaminan pemerintah, hak regres, Perpres 38/2015 + PMK 68/2024)
- [x] 3 internal links (1 hub + 2 cousins) — `/pembiayaan-kreatif` (lead), `/kpbu` (H2 #1), `/public-private-partnership` (H2 #2). Three distinct URLs, zero `institute.iigf.co.id`
- [x] ≥1 external authoritative citation — actual: **2** (BPS via ANTARA; Kantor Bersama KPBU Kemenkeu)
- [x] FAQ 5–7 Q&As — actual: **6**, answers 44/50/51/48/47/49 words
- [x] ≥1 list + ≥1 table — 1 numbered list (4), 1 bullet list (3), 1 table (4 rows)
- [x] Word count inside band 1.500–1.800 — actual: **1.776** (`tools/count_words.py`)

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — measured: **49 / 50 / 42 / 56 / 48**. All five inside band; none is a restatement of the top snippet.
- [x] Each body paragraph makes one independently quotable, verifiable point — the four-row table is the primary extraction unit and each row stands alone (project · region · sector · what made it financeable)
- [x] FAQ parseable for FAQPage schema — flat `###` question → single-paragraph answer, no nesting
- [~] Freshness — `publish_month: "2026-09"` carries it, consistent with the rest of the batch; there is no `dateModified` field in this pipeline's frontmatter convention. Noted, not a fail.

### D. PT PII framing discipline (product_matrix.md + style_guide §11)
- [x] Framed as the government-guarantee provider (BUPI) — "menerbitkannya untuk proyek KPBU sekaligus mendampingi penyiapan struktur transaksi". Never lender/investor/contractor/operator/regulator. Danantara: 0 occurrences.
- [x] **Does not decide where infrastructure is built** — reinforced by the rewritten closing ("bekerja di lapisan itu, bukan di lapisan lokasi")
- [x] ≤3 PT PII self-mentions — actual: **2 named mentions** (mid-article portfolio aside, closing) + 1 soft CTA = 3
- [x] No unverifiable superlatives — "terbaik/nomor satu/paling terpercaya" all 0
- [x] Product names + specs match product_matrix / dossier — "Penjaminan Pemerintah" is the single anchor
- [x] Closing uses a company_profile positioning line — **rewritten**; now paraphrases the one line unused elsewhere this month, verified non-duplicative against `kpbu-01`, `kpbu-02`, `kpbu-03`, `jaminan-pemerintah-01`, `jaminan-pemerintah-02`
- [x] Soft website CTA present as the FINAL line, after the conclusion — consultative, no "beli sekarang", wording distinct from all five other ID finals
- [x] Hub link as a natural inline anchor in the lead, descriptive text, no "BACA JUGA"
- [x] **Guarantee never framed as a subsidy or as covering commercial risk** — stated explicitly: "Ia bukan subsidi, tidak menutup risiko komersial badan usaha, dan tidak menciptakan permintaan yang sebelumnya tidak ada"
- [x] **No claim is asserted to have ever been paid** — the regres sentence is now conditional ("apabila klaim sampai dibayarkan")
- [x] **Guarantee product not dissected** — boundary-level only; the covered-risk examples now appear once, in the FAQ
- [x] **Availability Payment not dissected** — 5 name-level mentions (one parenthetical gloss at first use, 3 forced by the table's last column, 1 financing-stack reference). No taxonomy, no budgeting mechanics, no evaluation stages. Dukungan Kelayakan likewise named only.

### E. Anti-cannibalization spot check
Measured against `articles_history/by_keyword/pembiayaan-infrastruktur/`:

| Prior article | Its territory | Jaccard estimate | Note |
|---|---|---|---|
| `2026-08-…-03` penilaian-lender (closest) | lender diligence checklist, financial close mechanics, DSCR-adjacent credit tests | **0,15** | **No checklist is rebuilt.** H2 #4's three bullets are diagnostic determinants, not preparation steps; the only credit-committee reference is a single rhetorical line. Shared vocabulary is limited to "bankability" and a one-bullet contractual-certainty point. |
| `2026-08-…-01` sumber-dana-nasional | composition of national funding sources | **0,10** | National need figure appears once, in the lead, as the brief permits; no source-composition table. |
| `2026-08-…-02` corporate-vs-project-finance | SPV, recourse, DSCR, structure choice | **0,04** | Verified absent: SPV 0, recourse 0, DSCR 0. |

- Closest prior article: `2026-08-pembiayaan-infrastruktur-03` (*Yang Dinilai Lender Sebelum Dana Cair*)
- Subtopic overlap (Jaccard estimate): **0,15**
- Verdict: **distinct angle confirmed.** August `-01`'s own history note lists "Regional funding disparities" as an angle deliberately left open — this article fills exactly that slot. Cross-cluster boundaries also hold: single-daerah fiscal capacity ("Pembiayaan Kreatif" cluster) is absent — `pendapatan asli daerah` 0, `pinjaman daerah` 0, `DPRD` 0, `land value capture` 0; refinancing (this month's `-02`) 0; no per-sector money profile (this month's `-01`).

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran on the saved final; `pembiayaan-infrastruktur-03.id.quality-input.json` written (re-run after the last edit)
- [x] AI-detector score **0.04** — pass (revise ≥0.30, reject ≥0.50). One low-severity flag: `paragraph-low-variance`, CV 0,424 against the script's stricter 0,45 target. Our threshold is ≥0,30, so this clears comfortably; no remediation needed.
- [x] Paragraph burstiness CV **0,424** (≥0,30). Sentence-length CV 0,52, range 3–46 words.
- [~] Plagiarism — **partial verification, stated honestly.** WebSearch budget 3/3 used:
  1. Lead hook (`"Keduanya proyek jalan, keduanya punya PJPK" "butuh tenor panjang"`) → **no verbatim match**. Incidental find: `ptpii.co.id/jalan-trans-papua-ruas-jayapura-wamena` exists, corroborating that project's portfolio status.
  2. Signature analytic lines (`"Menyebar proyek tidak sama dengan menyebar pembiayaan"` / `"Yang membedakan mereka bukan koordinat, melainkan siapa yang berdiri di sisi pembayar"`) → **no verbatim match**.
  3. Spent on closing the dossier's APJ Lombok Barat verification flag (see §B).
  The 5 unchecked scanner candidates are all attributed-statistic or regulation-reference sentences, exempt under the policy. **No non-PT PII verbatim hit ≥20 words found.** plagiarism score: **0.05**.
- [x] **Internal duplication check (the real risk this month)** — caught and fixed: the closing positioning sentence was a 20-word verbatim lift from `jaminan-pemerintah-02.id.md`. The final CTA also echoed two sibling finals and was rewritten. Post-fix, no ≥10-word overlap remains against any of the five other 2026-09 ID finals.

## The shipping question
Yes. A skeptical PJPK official would recognise the allocation committee in the lead; a lender would find nothing overstated; and a reader looking for a grievance would not find one, because the piece never offers a villain — only an arithmetic, its limits, and four projects that beat it. WEBARQ Promote can put its name on this.
