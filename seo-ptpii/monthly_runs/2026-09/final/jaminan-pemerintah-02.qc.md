---
brief_id: "jaminan-pemerintah-02"
editor_run_date: "2026-09-22"
recommendation: "approve"
overall_score: 9
ai_score: 0.04
plagiarism_score: 0.05
---

# Editor QC Report — Jaminan Pemerintah dan VGF: Kapan Proyek KPBU Perlu Keduanya

> **Run note:** QC-completion pass. A prior editor run polished the draft into `final/` but hit a rate limit before writing this report. This run verified the existing final against the full checklist rather than re-polishing, fixed three real defects in place, ran the originality scan, and issues the binding recommendation.

## Recommendation
**approve**

The article clears every gate, including the two that were most at risk. The load-bearing hedge survived intact: the VGF / Availability Payment question is presented as unresolved in all three places it appears (body prose, combination table, FAQ), and nowhere does the article assert a flat bar such as "VGF tidak dapat digabungkan dengan AP" — the prior editor even re-cut the H2 heading from the brief's "Kombinasi yang masuk akal dan yang tidak" to "…dan yang regulasinya belum menjawab", which is a better fit for an open question than the brief's own wording. The Pasal 4 ayat (1) enumeration is exact, including "dan/atau" and the fifth item as *pemrosesan dokumen* Availability Payment rather than a Kemenkeu cash disbursement; no table cell or sentence misattributes a payment (VGF to Kemenkeu, AP to PJPK, penjaminan to PT PII — all correct). Zero em-dashes, AI-detector 0.04, burstiness CV 0.345, 1.690 kata in band, 3 distinct inline ptpii.co.id links with anchors that all differ from August's, no named officials, no Fitch, no Danantara, no claim ever asserted as paid. Fixes were cosmetic: a frontmatter word-count that trailed the real count by 2, a stale `date_modified`, and one overclaiming verb. Two low-severity flags are recorded below; neither blocks commit.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Zero em-dashes, zero listed AI-tell phrases, paragraph lengths 16–94 kata. Narrative lead with a genuine callback in Kesimpulan. Half-point off: the mandatory disambiguation sentence interrupts the hook between sentence 1 and its payoff. |
| Factual & penjaminan infrastruktur / KPBU accuracy | 9 | 6/6 spot-checks pass; the penjaminan eligibility triad independently re-confirmed against kpbu.kemenkeu.go.id this run. Deduction only for the "per Juni 2026" precision (see flags). |
| On-page SEO compliance | 9 | Every §3 item passes with margin. Meta 58/154 chars, slug 46, 5 body H2, 6 FAQ, 2 tables, 2 lists, 3 internal + 2 external, 1.690 kata. |
| GEO extractability (§2a) | 9 | All five body H2 answers measured inside 40–60 (50/53/48/60/44). Definition snippet 53 kata at ~word 100. FAQ FAQPage-parseable, `date_modified` present. |
| PT PII framing discipline | 9 | 3 self-mentions including CTA. Guarantee-provider/BUPI framing only; never administers VGF, never pays AP. Closing uses a pre-approved positioning line verbatim. |
| Internal linking | 10 | 3 distinct URLs, all inline, no "BACA JUGA", zero institute.iigf.co.id, all three anchors differ from August's on the same URLs. |
| FAQ quality | 9 | 6 Q&As, 41–59 kata each — all inside the 40–80 band. The prior run swapped out the August-overlapping "apa bedanya VGF dan penjaminan" question for a sequencing question this article actually owns. |
| Originality (plagiarism + AI-detector) | 9 | AI 0.04 (pass). 3 of 3 permitted web lookups run; no verbatim ≥20-word match on any non-PT PII page. Sampled, not exhaustive — see §F. |

## What I fixed (changelog)
- **Frontmatter `word_count` 1688 → 1690** — synced to the canonical `tools/count_words.py` figure.
- **Frontmatter `date_modified` 2026-09-21 → 2026-09-22** — the file was modified this run; freshness field now matches `editor_run_date`.
- **§"Celah apa yang sebenarnya dimiliki proyek Anda?": "Persoalan itu diselesaikan di luar menu PMK 68/2024" → "Persoalan itu ditangani di luar menu PMK 68/2024"** — removed an overclaim. Pemda fiscal capacity is not *solved* by creative-financing instruments; "ditangani" states where the question is handled without promising an outcome. One-for-one word swap, word count unaffected.

### Verified as already-correct (inherited from the prior run, no action needed)
- The writer's reported single em-dash in the lead was struck cleanly — codepoint scan confirms **0 em-dashes and 0 en-dashes** in the body (45 plain hyphens only).
- The draft's FAQ "Apa bedanya Dukungan Kelayakan (VGF) dan penjaminan infrastruktur?" — squarely August-02's taxonomy territory — was replaced with "Mana yang diajukan lebih dulu…", which is this article's own sequencing angle. Good anti-cannibalization call.
- The draft's flatter hedge ("tidak ada pasal atau penjelas resmi yang eksplisit melarang") was tightened to the epistemically correct "sampai artikel ini disusun, **tidak ditemukan** pasal maupun penjelas resmi…". The table row likewise moved from "Tidak ada pengaturan eksplisit" to "**Belum ditemukan** pengaturan eksplisit". This is the difference between reporting an absence of evidence and asserting an absence of law — the final gets it right.
- H2 #4 heading re-cut from the brief's "Kombinasi yang masuk akal dan yang tidak" to "Kombinasi yang masuk akal, dan yang regulasinya belum menjawab". Deliberate deviation from the brief, and the correct one — the brief's heading would have promised a verdict the research could not supply.

## What I flagged (open issues)
- ⚠️ **"per Juni 2026" portfolio precision** — `company_profile.md` records the portfolio as "61 proyek / Rp 732 triliun / Rp 113 triliun, publikasi resmi 2026"; the month-level precision ("Juni 2026") and the 38 KPBU / 23 non-KPBU split come from the brief's locked instruction, cross-checked and marked high-confidence by the dossier. Figures and scope labels are correct and correctly distinguished (nilai proyek vs nilai penjaminan). *Recommendation*: fine to commit as-is; if the curator wants belt-and-braces, soften "per Juni 2026" to "per publikasi resmi 2026" to match the knowledge base exactly. Not a defect — a provenance note.
- ⚠️ **"instrumen standar pada skema public private partnership di banyak negara"** (§Urutan pengajuan) — the one generic claim in the article without a number or citation behind it. The dossier deliberately pulled no World Bank/ADB source for this angle, so I did not add one (editors do not add facts). *Recommendation*: leave as written — it is hedged framing, not a load-bearing claim — or have a future researcher supply one PPIAF/World Bank figure if this sentence is ever reused.
- ℹ️ **Cross-article framing note for the curator (not a defect)** — August-02 was built on the colloquial confusion between "jaminan pemerintah" and "dukungan pemerintah"; this article states the post-consolidation legal position, that penjaminan *is* one of the five bentuk Dukungan Pemerintah under PMK 68/2024 Pasal 4 ayat (1). Both are accurate and the September framing is the legally precise one, but the two articles will read differently on that point if a reader hits both.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — 0 hits
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — **0 occurrences of "Selain itu" anywhere**
- [x] No "Penting untuk dicatat / dipahami bahwa" — 0 hits
- [x] "Dengan demikian" not overused — **0 occurrences**
- [x] Em-dash count ≤2 — **0** (codepoint scan: only U+002D present, 45×)
- [x] Varied paragraph lengths — 24 prose paragraphs, 16–94 kata, **CV 0.345** (spec floor 0.30)
- [x] Not every H2 → 3-bullet list — H2 #1 bullets, #2 table, #3 numbered list, #4 table, #5 pure prose. Genuinely mixed.
- [x] No generic claims without numbers — one soft exception flagged above ("di banyak negara")
- [x] No stacked hype adjectives — 0 hits on canggih/terdepan/terbaik/powerful/seamless/revolusioner
- [x] No service-dump paragraph — PT PII anchored to exactly one product (Penjaminan Pemerintah); Persiapan & Pendampingan is *not* listed alongside even though PDF/Pra-PDF is discussed at length

### B. Factual & penjaminan infrastruktur / KPBU spot-check
| Claim | Source check | Verdict |
|---|---|---|
| PMK 68/2024 Pasal 4 ayat (1) lists five bentuk joined by "dan/atau", fifth = **pemrosesan dokumen** Availability Payment | dossier ✓ (pasal.id pasal-level citation, cross-checked vs jdih.kemenkeu.go.id summary) | **pass** — enumeration reproduced exactly; fifth item never flattened into "Kemenkeu pays AP" |
| PMK 68/2024 berlaku 18 Oktober 2024; tujuh peraturan dicabut | dossier ✓ + `company_profile.md` locked baseline | **pass** |
| VGF minimum total investment Rp 100 miliar; five published criteria incl. prinsip pengguna membayar | dossier ✓ (kpbu.kemenkeu.go.id, fetched twice same-day) | **pass** — cited in body and FAQ with "(portal KPBU Kementerian Keuangan, diakses 2026)" |
| Penjaminan eligibility requires independent prastudi kelayakan, competitive tender, binding arbitration clause | dossier ✓ **+ independently re-confirmed by WebSearch this run** against `kpbu.kemenkeu.go.id/read/84-238` | **pass** |
| SPAM Umbulan: VGF from Kemenkeu + Perjanjian Penjaminan Juli 2016; VGF Rp 818 miliar | dossier ✓ (triangulated across 3 outlets; rupiah figure flagged medium-confidence, single-source) | **pass** — figure carries "(pemberitaan media ekonomi, 2021)" *and* an explicit caveat that it has not been restated officially and should be read as an order of magnitude |
| Portfolio: 61 proyek (38 KPBU), nilai proyek > Rp 732 triliun, nilai penjaminan Rp 113 triliun, per Juni 2026 | `company_profile.md` ✓ on totals; brief/dossier supply the month and split | **pass** (provenance flagged above) — the nilai proyek vs nilai penjaminan scope distinction is stated explicitly, not blurred |

**Reference-year audit — every figure in the article:** Rp 100 miliar (diakses 2026) ✓ · 18 Oktober 2024 ✓ · tujuh peraturan / PMK 68 Tahun 2024 ✓ · Rp 818 miliar (2021) ✓ · Juli 2016 ✓ · 61/38/Rp 732 T/Rp 113 T (Juni 2026) ✓ · empat tahap, tiga kondisi, lima kriteria — regulatory counts, not time-varying. **No bare numbers.**

**Regulation currency:** PMK 68/2024 cited as the live basis throughout ✓. PMK 223/2012 and PMK 170/2018 appear **only** as revoked regulations still displayed by a lagging portal — never as current law ✓. "Perpres 38/2005" typo never reproduced (Perpres not cited at all) ✓. No PMK 260/2010 or PMK 8/2016 ✓.

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: **58 chars / keyword at position 0**
- [x] Meta description 140–160 — actual: **154**
- [x] Slug ≤60, kebab-case, keyword — actual: **46**, `jaminan-pemerintah-vgf-kombinasi-dukungan-kpbu`
- [x] H1 contains keyword — "Jaminan Pemerintah dan VGF: Kapan Proyek KPBU Perlu Keduanya"
- [x] H2 count 4–5 — actual: **5 body H2** (+ FAQ + Kesimpulan)
- [x] ≥1 question-format H2 ("Celah apa yang sebenarnya dimiliki proyek Anda?"); ≥1 honest/counter-conventional H2 ("Meminta lebih banyak dukungan tidak membuat proyek lebih kuat")
- [x] Keyword in first 100 words — word 14
- [x] Definition snippet near top — blockquote, **53 kata**, at ~word 100
- [x] ≥8 LSI terms — counted: **14** (dukungan pemerintah KPBU, Dukungan Kelayakan/VGF, penjaminan infrastruktur, Fasilitas Pra-PDF/PDF, Availability Payment, PMK 68 Tahun 2024, kelayakan finansial, kelayakan ekonomi, prinsip pengguna membayar, PJPK, prastudi kelayakan, financial close, lender, BUPI)
- [x] 3 internal links (1 hub + 2 cousins) — `/kpbu` (lead), `/pembiayaan-kreatif` (H2 #2), `/public-private-partnership` (H2 #3). **3 distinct URLs, all inline anchors, zero institute.iigf.co.id**
- [x] ≥1 external authoritative citation — actual: **2** (JDIH Kemenkeu PMK 68/2024; portal KPBU Kemenkeu Dukungan Kelayakan)
- [x] FAQ 5–7 Q&As — actual: **6**
- [x] ≥1 list + ≥1 table — 1 bullet list + 1 numbered list + **2 tables**
- [x] Word count inside band 1.500–1.800 — actual: **1.690** (frontmatter synced this run)

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — **measured: 50 / 53 / 48 / 60 / 44 kata**. All five inside band; H2 #4 sits at the ceiling exactly.
- [x] Each body paragraph makes one independently quotable, verifiable point — the strongest are "Proyek yang melewatkan penyiapan gagal di dua pintu, bukan satu" and the VGF-vs-penjaminan fiscal-nature contrast, both liftable without context
- [x] FAQ parseable for FAQPage schema (6× H3 question → single-paragraph answer); `date_modified: 2026-09-22` in the meta block

### D. PT PII framing discipline (product_matrix.md + style_guide §11)
- [x] Framed as the government-guarantee provider (BUPI) under Kemenkeu — NOT a lender, investor, contractor, operator, or regulator; **no Danantara reference**
- [x] ≤3 PT PII self-mentions — actual: **3** (SPAM Umbulan example, Kesimpulan positioning line, CTA). The mid-article single-window aside deliberately says "Badan Usaha Penjaminan Infrastruktur (BUPI)" instead of naming PT PII a fourth time.
- [x] **Payment attribution audit** — VGF → Kementerian Keuangan / Komite Dukungan Kelayakan ✓; Availability Payment → "tetap kewajiban anggaran PJPK, bukan Kementerian Keuangan" ✓ (stated twice, body + FAQ); Kemenkeu's AP role limited to Konfirmasi Pendahuluan/Final ✓. **No cell or sentence attributes VGF or AP to PT PII.**
- [x] No unverifiable superlatives — 0 hits on terbaik/nomor satu/terdepan
- [x] Product names match product_matrix / dossier — "Penjaminan Pemerintah" as the CTA anchor product
- [x] Closing uses a `company_profile.md` positioning line — verbatim from the pre-approved list
- [x] Soft website CTA is the FINAL line, after Kesimpulan, consultative tone ("tersedia di ptpii.co.id", no "beli sekarang")
- [x] Hub link is a natural inline anchor in the lead — "dukungan pemerintah dalam proyek KPBU"; no "BACA JUGA" callout anywhere
- [x] **No named Direksi/Komisaris** — TitleCase-bigram sweep returned only "Penanggung Jawab" (PJPK expansion), "Project Development" (PDF expansion) and "Sering Diajukan" (FAQ heading). Komite Dukungan Kelayakan and Menteri Keuangan referenced institutionally only.
- [x] **No claim ever asserted as paid** — "klaim" appears twice, both as the conditional "bila risiko tanggung jawab PJPK terjadi dan klaimnya sah"
- [x] Fitch / ratings omitted entirely, per dossier flag
- [x] **Disambiguation** — infrastructure/KPBU token in title, meta_title, meta_description, H1 and first H2 ✓; the three-way not-this line (bukan jaminan sosial / bukan agunan-kebendaan / bukan jaminan pelaksanaan) lands at **words 32–49**, inside the 60-word requirement ✓

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: `2026-08-jaminan-pemerintah-02` — *Jaminan Pemerintah vs Dukungan Pemerintah dalam KPBU: Apa Bedanya?*
- **Subtopic overlap (Jaccard, measured against that record's declared subtopic list): ~0.21** — shared: PMK 68/2024 consolidation, VGF, Availability Payment, subsidi-vs-penjaminan. Slightly above the strategist's predicted 0.185 because the final added back the "Apakah jaminan pemerintah sama dengan subsidi?" FAQ; still far under the 0.4 ceiling.
- **Boundary checks against the other two August siblings:** `regres` = **0 occurrences** (August-03 territory clean) · `penjaminan pinjaman langsung` and `Perpres 103/2020` = **0 occurrences** (August-02 keeps its distinct fourth instrument) · the article never partitions coverage by project stage (August-01 territory clean).
- **Confirming evidence:** August-02's own "Notes for future strategist runs" lists *"Blended instruments (VGF + guarantee + AP combinations)"* as an angle **still uncovered**. That is precisely this article's territory.
- The article leads with the gap and the diagnosis, not with instrument definitions: the instrument refresher in H2 #1 runs **~76 kata**, well inside the brief's 150-word drift ceiling.
- **Verdict: distinct angle confirmed.**

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran; `jaminan-pemerintah-02.id.quality-input.json` written (re-run after edits)
- [x] AI-detector score < 0.30 — **actual: 0.04** (verdict: pass). One low-severity flag only: `paragraph-low-variance`, CV 0.345 against the script's stricter internal target of 0.45. **The editor spec's floor is CV ≥ 0.30, which this clears**; the observed spread (16–94 kata) is genuinely varied, so no remediation applied and no re-run needed.
- [x] Paragraph burstiness CV ≥ 0.30 — **actual: 0.345**
- [x] Plagiarism: **3 of 3 permitted WebSearch calls used** (cap respected). Queries run:
  1. VGF five-criteria phrasing (`"total biaya investasi paling kurang Rp 100 miliar" + "prinsip pengguna membayar" + "skema pengalihan aset"`) — **no verbatim match**; results were unrelated finance/prospectus content.
  2. Narrative lead (`"Sebuah tim penyiapan menutup prastudi kelayakan"` / `"mengajukan semuanya sekaligus" + "celah pembiayaan"`) — **no match**; only topically-adjacent Kemenkeu KPBU portal pages. The hook is original.
  3. Penjaminan eligibility triad (`"kajian prastudi kelayakan oleh konsultan independen dan profesional" + "klausul arbitrase yang mengikat"`) — surfaced the source page `kpbu.kemenkeu.go.id/read/84-238`. Longest shared run is **~9 words of regulatory term-of-art** ("kajian prastudi kelayakan oleh konsultan independen dan profesional"), embedded in a differently-constructed sentence. Under the 20-word threshold and within the regulation-text exemption. **Not a hit.** Bonus: this lookup independently re-confirmed spot-check claim #4.
- **Plagiarism score: 0.05.** **Honest scope statement:** this is a 3-query sample of the 8 candidates the scanner extracted, not an exhaustive scan — the WebSearch cap for this run was 3. The 5 unqueried candidates (mostly table fragments and the PMK-consolidation sentence) remain preserved with their queries in `jaminan-pemerintah-02.id.quality-input.json` for a later session. No lookup is claimed here that was not actually performed.

### G. Load-bearing hedge — dedicated verification
The VGF / Availability Payment combination is left unresolved in **all three** places it appears, with no flat bar anywhere:
| Location | Wording | Verdict |
|---|---|---|
| Combination table | "Belum ditemukan pengaturan eksplisit" / basis: "Kriteria VGF mensyaratkan prinsip pengguna membayar" | ✓ states the criterion, not a prohibition |
| Body prose (H2 #4) | "Namun sampai artikel ini disusun, tidak ditemukan pasal maupun penjelas resmi yang secara eksplisit melarang ataupun mengizinkan kombinasi keduanya. Perlakukan sebagai pertanyaan terbuka, dan konfirmasikan ke Kementerian Keuangan…" | ✓ symmetric (neither forbids nor permits), time-stamped, routes the reader to the authority |
| FAQ #4 | "Aturan yang eksplisit melarang atau mengizinkan kombinasi ini belum ditemukan, sehingga PJPK sebaiknya mengonfirmasi langsung ke Kementerian Keuangan." | ✓ same hedge, no drift |
| Adjacent row | Penjaminan + AP: "Tidak disinggung dalam kriteria yang dipublikasikan" | ✓ scoped to *published criteria*, not to the law as a whole |

The five criteria are stated as published, and the conceptual tension is named honestly ("Ketegangan konseptualnya nyata") without being resolved. **This is exactly the fallback the brief and dossier specified.**
