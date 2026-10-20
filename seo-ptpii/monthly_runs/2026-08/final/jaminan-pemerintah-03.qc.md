---
brief_id: "jaminan-pemerintah-03"
editor_run_date: "2026-08-12"
recommendation: "approve"
overall_score: 9
ai_score: 0.08
plagiarism_score: 0.10
---

# Editor QC Report — Klaim Jaminan Pemerintah di Proyek KPBU: Bagaimana Hak Regres Bekerja

## Recommendation
**approve**

This was flagged as the highest-risk article in the batch, and the two hard gates hold cleanly: no project is named anywhere in the body, no passage asserts or implies that a claim has ever been paid (every claim statement is conditional or structural, and the numbered flow is explicitly labelled "rekonstruksi beralasan … bukan kutipan pasal"), and hak regres is carried entirely on practice evidence with **zero pasal numbers cited** — the word "pasal" appears once in the article, in a sentence *disclaiming* a pasal citation. The rejected lead (regres allegedly not applying to Kementerian/Lembaga PJPK) did not leak in; PSAP 09 is never named, let alone quoted; no contingent-liability rupiah figure and no guarantee fee appear. I fixed nine things in place, three of them substantive: the PT PII mention budget was at four sites (over the ≤3 ceiling), the mandatory disambiguation triad closed at roughly word 66 instead of inside the 60-word window, and the "61 proyek" figure sat inside a KPBU-single-window paragraph without its 38/23 split, implying all 61 were KPBU projects. All three are resolved. The payoff logic lands explicitly ("Negara memajukan pembayaran; negara tidak menyerap kerugiannya secara permanen"), and the "jaminan bukan subsidi" territory that `-01`'s editor vacated is genuinely developed here: a dedicated H2, a four-row comparison table, a bullet list of what stays with the badan usaha, and its own FAQ (6 uses of "subsidi" against 1 in each sibling). The one thing I could not do is the web-side plagiarism lookup — the WebSearch budget was already exhausted (200/200) before this run, so no lookup was performed and none is claimed.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Zero em-dashes, zero banned openers, paragraphs 15–76 words. Practitioner asides ("Ini sering disalahpahami…", "Pembedaan ini punya sisi yang kurang menyenangkan bagi sponsor proyek") carry the register. No press-release drift on a topic that invites it. |
| Factual & penjaminan infrastruktur / KPBU accuracy | 9 | 5/5 spot-checks pass against dossier + `company_profile.md`. Every figure carries a year; the only two rupiah figures are the pre-approved portfolio numbers. Regulation chain correct: Perpres 78/2010 berlaku, PMK 68/2024 berlaku 18 Okt 2024, PMK 260/2010 named only as revoked. |
| On-page SEO compliance | 9 | Meta title 54, description 150, slug 40. All counts inside band. |
| GEO extractability (§2a) | 10 | 53-word definition snippet; direct answers of 48/46/44/45/42 words after all five body H2s; FAQ clean for FAQPage; `date_modified` added. |
| PT PII framing discipline | 9 | Guarantee provider / BUPI / SMV Kemenkeu throughout; never lender, investor, contractor, operator, regulator; "bukan di bawah Danantara" stated. Reduced from 4 mention sites to 3 incl. CTA. |
| Internal linking | 10 | Exactly 3 distinct ptpii.co.id URLs, all inline with descriptive anchors, hub in the lead. Zero links to institute.iigf.co.id. |
| FAQ quality | 9 | 6 Q&As, 42–48 words each, all mapped to captured PAA. |
| Originality (plagiarism + AI-detector) | 8 | AI 0.08 (pass), both flags `[low]`. Plagiarism verdict rests on heuristic + manual provenance only — see §F. |

## What I fixed (changelog)
- **Mention budget 4 → 3 sites.** De-named the mid-article aside in §4: "tujuan pembentukan ~~PT PII selaku~~ Badan Usaha Penjaminan Infrastruktur di bawah Kementerian Keuangan". The positioning fact survives; the named sites are now the PAA-driven FAQ, the Kesimpulan positioning line, and the CTA. Matches the batch norm (all three approved siblings run 2 named mentions + CTA).
- **Disambiguation window.** Trimmed the lead by 8 words ("Di berkas menjelang" → "Menjelang"; "kalau klaim jaminan pemerintah cair" → "kalau klaim cair"; "Yang dibahas di sini adalah" → "Konteksnya") so the full triad *bukan jaminan sosial / bukan agunan kebendaan / bukan jaminan pelaksanaan* now closes at body word **58**. It previously opened at word 56 and ran past 66, outside the brief's mandatory 60-word window.
- **Figure scope.** "per publikasi resmi 2026, penjaminan tercatat pada 61 proyek" → "per publikasi resmi **Juni 2026**, penjaminan tercatat pada 61 proyek **(38 skema KPBU dan 23 non-KPBU)**". The sentence sits inside a paragraph about KPBU single-window intake and, unqualified, implied all 61 were KPBU projects. Split is dossier- and sibling-consistent.
- **Acronym order.** PJPK appeared in the definition snippet but was glossed only two paragraphs later. Expanded it in the snippet ("dari Penanggung Jawab Proyek Kerja Sama (PJPK)…", snippet 48 → 53 words, still in band) and removed the now-duplicate gloss in §1.
- **Evidence–claim match.** "Berita resmi penandatanganan … memperlihatkan pola yang sama pada PJPK tingkat pusat maupun kabupaten" → "**Sejumlah** berita resmi … memperlihatkan pola yang sama, **baik ketika PJPK-nya sebuah kementerian maupun pemerintah kabupaten**." One linked news item cannot carry a plural claim; the dossier holds three, and this wording matches what the portal actually shows.
- **Added the JDIH inline link** on "PMK No. 68 Tahun 2024". It was listed in frontmatter as a citation but never linked, and it backs the article's load-bearing "which rule is actually current" correction. Both approved siblings link it.
- **Unsourced frequency claim softened**: "dan sering menjadi alasan pemerintah daerah menimbang" → "dan menjadi salah satu alasan".
- **Keyword in the closing.** "uang klaim berhenti di PJPK" → "uang klaim **jaminan pemerintah** berhenti di PJPK" (playbook §3 wants the primary keyword in the last section; it previously appeared only as the product-name variant "Penjaminan Pemerintah").
- **Tightened** the Nota Keuangan sentence (dropped "diterbitkan sebagai dokumen tersendiri", −5 words) and **varied the CTA** — all three approved siblings end with "…dapat Anda telusuri lebih jauh di ptpii.co.id"; §11 requires varying it.
- **Frontmatter**: added `date_modified: "2026-08-12"` (GEO §2a freshness, batch norm); synced `word_count` 1667 → **1631** (verified by `count_words.py`).

## What I flagged (open issues)
- ⚠️ **Plagiarism lookups were not run.** WebSearch returned a hard budget error (200/200) on the attempt made this run. The 0.10 score is heuristic + manual provenance review of all 8 candidate passages, not a web verdict — *recommendation*: if the curator has search budget, re-run the 8 queries in `jaminan-pemerintah-03.id.quality-input.json` before publishing. Nothing in the manual review suggests a lift (see §F).
- ⚠️ **Hak regres still has no pasal-level primary source.** The article handles this correctly — practice framing, no pasal, honest labelling — so it is not a publication blocker. *Recommendation*: log a refresh task to read the full PMK 68/2024 text manually; if a pasal exists, the §3 sentence can be upgraded on the next content refresh. Do not add a citation speculatively.
- ⚠️ **The Oktober 2023 link resolves to the central-PJPK example only.** The kabupaten-PJPK example is dossier-verified (`kpbu.kemenkeu.go.id/berita/read/1621`) but unlinked, so a reader clicking through sees one of the two cases. Acceptable as attribution-to-portal, and I kept the external link count at 4 rather than stacking a fifth. *Recommendation*: none required; note it if a reader queries the sourcing.
- ⚠️ **"BUPI di Indonesia berperingkat BBB…"** attributes a Fitch rating that belongs to PT PII to the institutional role. This is accurate (there is one BUPI) and was kept unnamed deliberately to hold the ≤3 mention budget. *Recommendation*: leave as is; naming the entity there would push the article to 4 mention sites.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan / Tidak dapat dipungkiri" openers — 0 hits
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — 0 paragraph-initial hits
- [x] No "Penting untuk dicatat / dipahami bahwa" — 0
- [x] "Dengan demikian" not overused — 0
- [x] Em-dash count ≤2 — **actual: 0**
- [x] Varied paragraph lengths — 15 / 25 / 26 / 26 / 31 / 37 / 42 / 44 / 45 / 46 / 48 / 55 / 63 / 69 / 71 / 75 words; 1–6 sentences
- [x] Not every H2 → 3-bullet list — prose openers on all five; one numbered list, one bullet list, one table across the whole article
- [x] No generic claims without numbers
- [x] No stacked hype adjectives
- [x] No service-dump paragraph — one anchor only (Penjaminan Pemerintah)
- [x] No press-release register — the client's signature failure mode; the §4 institutional aside is a single 26-word line, not a paragraph of commitment language

### B. Factual & penjaminan infrastruktur / KPBU spot-check
| Claim | Source check | Verdict |
|---|---|---|
| "Perpres No. 78 Tahun 2010 … berstatus berlaku per verifikasi basis data peraturan resmi 2026" | dossier ✓ (peraturan.go.id, re-verified independently 2026-08-12) + `company_profile.md` legal table ✓ | pass |
| "PMK No. 68 Tahun 2024, berlaku sejak 18 Oktober 2024, yang mencabut PMK No. 260/PMK.011/2010" | dossier ✓ (ditetapkan 24 Sep 2024, diundangkan 18 Okt 2024; JDIH riwayat states the revocation explicitly) + `company_profile.md` ✓ | pass |
| "PP No. 71 Tahun 2010, ditetapkan 22 Oktober 2010 dan masih berlaku" + kewajiban-kontinjensi wording attributed to "penjelasan Kementerian Keuangan" | dossier ✓ — status high-confidence; the definition is the portal paraphrase and is attributed as such. **PSAP 09 is never named or quoted**, exactly as instructed | pass |
| "61 proyek (38 skema KPBU dan 23 non-KPBU), nilai proyek Rp 732 triliun, nilai penjaminan Rp 113 triliun, per publikasi resmi Juni 2026" | `company_profile.md` Scale table ✓ + dossier ✓ + brief ✓; split and month added by this edit | pass (after fix) |
| "BBB internasional / AAA(idn) nasional, Outlook Stabil (Fitch Ratings, afirmasi 12 Februari 2026)" | `company_profile.md` ✓ (pre-approved, exact date carried) | pass |
| *Negative checks*: no rupiah figure from the DJPPR Nota Keuangan; no guarantee fee/formula; no revoked rule cited as current; no named official or jabatan; no project name | dossier Flags ✓ — all five negatives hold | pass |

Programmatic sweeps run on the saved final: project-name blacklist (21 strings incl. JORR/Cikunir/Ulujami/Lombok/PUPR/Bupati) = 0 hits; claim-history patterns ("pernah dibayar", "riwayat klaim") = 0 hits; "pasal" = 1 hit, inside the disclaimer "…bukan kutipan pasal"; "kementerian/lembaga" rejected-lead pattern = 0 hits; "PSAP" = 0; fee terms = 0; officials/titles = 0.

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: **54 chars**, keyword at position **0**
- [x] Meta description 140–160 — actual: **150**
- [x] Slug ≤60, kebab-case, keyword — actual: **40**, `jaminan-pemerintah-hak-regres-klaim-kpbu`
- [x] H1 contains keyword — "Klaim **Jaminan Pemerintah** di Proyek KPBU…"
- [x] H2 count — **5 body H2** + FAQ + Kesimpulan = 7 headings (playbook band 4–7)
- [x] ≥1 question-format H2 (2 with "?", plus 1 interrogative "Bagaimana penjaminan justru memagari APBN"); ≥1 honest/counter-conventional H2 ("Mengapa jaminan pemerintah bukan subsidi", with the risks-you-still-own list)
- [x] Keyword in first 100 words — hub anchor at ~word 43
- [x] Definition snippet near top — **53 words**, immediately after the lead
- [x] ≥8 LSI terms — counted: **18** (hak regres, perjanjian regres, klaim, kewajiban kontinjensi, ring-fence, risiko fiskal, PJPK, Badan Usaha Pelaksana, BUPI, kompensasi finansial, single window, co-guarantee, financial close, Dukungan Kelayakan, credit enhancing, kelayakan kredit, APBD, Nota Keuangan)
- [x] 3 internal links (1 hub + 2 cousins) — `/kpbu` (lead, inline), `/pembiayaan-kreatif` (§3), `/public-private-partnership` (§4). Three **distinct** URLs, no "BACA JUGA", zero `institute.iigf.co.id`
- [x] ≥1 external authoritative citation — actual: **4** (kpbu.kemenkeu.go.id definisi; peraturan.go.id Perpres 78/2010; jdih.kemenkeu.go.id PMK 68/2024; kpbu.kemenkeu.go.id berita Okt 2023)
- [x] FAQ 5–7 Q&As — actual: **6**, each 42–48 words
- [x] ≥1 list + ≥1 table — numbered list (6 steps), bullet list (3 items), comparison table (4×4)
- [x] Word count inside the brief's band 1.500–1.800 — actual: **1.631** (`count_words.py`, frontmatter synced)
- [x] Specific numbers in 6+ places — 9 (Perpres 78/2010; PMK 68/2024 + 18 Okt 2024; PMK 260/2010; PP 71/2010 + 22 Okt 2010; 61/38/23 proyek; Rp 732 T; Rp 113 T; Fitch 12 Feb 2026; Nota Keuangan 2025)

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — measured: **48, 46, 44, 45, 42** words (all five body H2s), separate from the 53-word top snippet
- [x] Each body paragraph makes one independently quotable, verifiable point — sampled: "Yang dijamin adalah kewajiban finansial PJPK, bukan keberhasilan proyek"; "hak regres adalah hak untuk menagih, bukan kepastian bahwa dana kembali utuh dan tepat waktu"; "Negara memajukan pembayaran; negara tidak menyerap kerugiannya secara permanen"
- [x] FAQ parseable for FAQPage schema (`### question` + single answer paragraph); `date_modified: "2026-08-12"` present in the meta block

### D. PT PII framing discipline (product_matrix.md + style_guide §11)
- [x] Framed as the government-guarantee provider (BUPI / SMV Kementerian Keuangan) — never lender, investor, contractor, operator, or regulator; "tidak berada di bawah holding Danantara" stated explicitly in the FAQ
- [x] ≤3 PT PII self-mentions — **actual: 3 sites** (FAQ answering the PAA query "PT PII berada di bawah kementerian apa?" — the article's only full-name introduction; the Kesimpulan positioning line; the CTA domain). Reduced from 4 by this edit
- [x] No unverifiable superlatives — 0
- [x] Product names + specs match `product_matrix.md` / dossier — one anchor only, **Penjaminan Pemerintah**; VGF described exactly as "kontribusi tunai sebagian biaya konstruksi"
- [x] Closing uses a `company_profile.md` positioning line — "Penjaminan pemerintah yang diterbitkan PT PII dirancang untuk meningkatkan kelayakan kredit proyek sekaligus memagari kewajiban kontinjensi APBN"
- [x] Soft website CTA is the FINAL line, after the conclusion, consultative — "Struktur Penjaminan Pemerintah untuk proyek KPBU, termasuk posisi Perjanjian Regres di dalamnya, diuraikan lebih lanjut di ptpii.co.id."
- [x] Hub link is a natural inline anchor in the lead — "jaminan pemerintah pada proyek KPBU" → `/kpbu`
- [x] Never implies the guarantee removes commercial risk — the article argues the opposite, with a named list

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: **none yet** — `articles_history/index.json` is empty (`articles: []`); 2026-08 is the first run.
- Batch siblings compared on actual coverage, not just briefs:
  - vs `jaminan-pemerintah-01` (coverage boundary *before* a claim): ~0.13. `-01` maps risks per project stage and what is not covered; this article starts at claim submission. No overlap in H2 territory.
  - vs `jaminan-pemerintah-02` (instrument taxonomy): ~0.08. `-02` compares four instruments across a full matrix; the table here uses a single axis ("ditagih kembali atau tidak") and does not restate the instrument matrix.
  - vs `kpbu-03` (ex-ante risk allocation): ~0.10. Binding deconfliction respected — the phrase "siapa menanggung apa" appears **0 times**, and no risk-allocation matrix is reconstructed.
- Boundary handover from `-01` verified: `-01` removed its "jaminan = subsidi" FAQ because this article owns the territory. It genuinely does — "subsidi" appears **6×** here versus **1×** in each sibling, with a dedicated H2, a comparison table, a consequences list, and its own FAQ.
- Verdict: **distinct angle confirmed.**

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran on the **saved final**; `jaminan-pemerintah-03.id.quality-input.json` written to `final/`
- [x] AI-detector score < 0.30 — **actual: 0.08** (verdict: pass). Both flags `[low]`.
- [x] Paragraph burstiness CV ≥ 0.30 — **actual: 0.349** (failure line 0.30; the tool's aspirational target is 0.45). Sentence burstiness 0.547. Paragraphs genuinely run 15–76 words; the CV is depressed by six numbered steps of deliberately similar length. No cosmetic re-cutting done — churning prose to move a metric is the tell we are trying to avoid.
- Second flag, `vocab-repetition` (top-30 words = 38% vs <30% target): **false positive for this niche**, same finding the sibling editors recorded. The concentration is *klaim · regres · penjaminan · PJPK · kompensasi · perjanjian* — the entity repetition §2a treats as an extraction asset on an article whose whole disambiguation problem is being mis-filed as insurance or jaminan kebendaan.
- [ ] **Plagiarism: distinctive passages NOT web-checked.** WebSearch returned a hard budget error (200 of 200 consumed before this run). No lookup was performed and none is claimed. **Plagiarism score: 0.10 — heuristic + offline provenance only.**

Manual provenance review of all 8 candidate passages, in lieu of the lookup:

| # | Passage | Provenance assessment |
|---|---|---|
| 1 | Lead / *financial close* framing | Writer-original; no known source text |
| 2 | PMK 68/2024 sentence | Regulation identifiers are unavoidable common text; surrounding prose original, <20 distinctive words |
| 3 | Perpres 78/2010 sentence | Same as above |
| 4 | PT PII institutional description (FAQ) | Entity boilerplate about the client itself, from `company_profile.md` — excluded by rule (PT PII source / well-known definition) |
| 5 | "Memagari kewajiban kontinjensi pemerintah dan meminimalkan kejutan langsung terhadap APBN" | Closest thing to a lift, and it is **PT PII's own published wording** (ptpii.co.id/kpbu, quoted verbatim in the dossier and pre-approved in `company_profile.md` as a positioning line). Excluded by rule; the matching run is ~12 words, under the 20-word threshold |
| 6 | Fitch rating sentence | Figures + original framing; not a lift |
| 7 | Numbered step 2 | Writer's own reconstruction, explicitly labelled as such in the preceding paragraph |
| 8 | Nota Keuangan sentence | Writer's own; only the document title is fixed text |

No candidate presents a plausible non-PT PII verbatim run of ≥20 words. That is an inspection judgement, not a verified negative.
