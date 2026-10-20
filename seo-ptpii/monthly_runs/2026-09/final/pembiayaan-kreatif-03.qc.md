---
brief_id: "pembiayaan-kreatif-03"
editor_run_date: "2026-09-22"
recommendation: "approve"
overall_score: 9
ai_score: 0.00
plagiarism_score: 0.05
---

# Editor QC Report — Pembiayaan Kreatif per Sektor: Instrumen Mana yang Cocok

## Recommendation
**approve**

The draft arrived in unusually good shape: zero §5 anti-AI patterns, zero em-dashes, paragraph burstiness CV 0.486, and — critically — every one of the four landmine checks in the task brief was already handled correctly by the writer. The Madiun "7.459 titik / 299,7 km" figures are absent; both Legok Nangka hedges carry explicit dates ("disepakati Oktober 2019", "per Juni 2024, belum beroperasi, target 2028–2029"); the Governor's name from the ANTARA source did not leak; PMK 68/2024 is cited by number and year only; pasar is correctly labelled *urusan pilihan*; and PJU is described solely as "kewenangan kabupaten/kota" with no bidang urusan named. I fixed seven things in place — the largest being an H2 direct answer at 38 words (below the GEO 40–60 floor) and an exhaustive "Dua proyek KPBU APJ" count that conflicted with this month's already-approved `kpbu-01`, which names a third (Dharmasraya). The article's load-bearing statistic (19 of 394 BUMD Air Minum, Kementerian PU) and the Legok Nangka tipping-fee structure were both independently confirmed by web lookup. PT PII framing is exact and sits precisely at the 3-mention cap. One genuinely minor open flag remains (a one-day publication-date discrepancy between pu.go.id and its media mirrors), which does not block shipping.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Zero pattern hits; CV 0.486; deliberate fragments ("Air minum dan persampahan.", "Konsekuensinya praktis."); practitioner asides. No press-release register — this client's signature failure mode is fully avoided. |
| Factual & penjaminan infrastruktur / KPBU accuracy | 9 | 2 load-bearing figures web-verified against independent sources. Every figure carries a year and a scope. Hedges are dated, not vague. |
| On-page SEO compliance | 9 | Every §3 item passes. Meta title 56, description 154, slug 39. |
| GEO extractability (§2a) | 9 | Fixed one 38-word H2 answer; all five now 46–49 words. Definition snippet 55 words, opens with the mandated phrase. |
| PT PII framing discipline | 10 | Exactly 3 mentions incl. CTA. BUPI/penjamin framing correct; no lender/VGF-administrator/AP-payer drift; no Danantara; no officials. |
| Internal linking | 10 | 3 distinct ptpii.co.id URLs, all inline, hub in the lead. All three anchors fresh vs August. Zero institute.iigf.co.id. |
| FAQ quality | 9 | 6 Q&As, 48–54 words each, every one carries a dated fact. FAQPage-parseable. |
| Originality (plagiarism + AI-detector) | 10 | ai_score 0.00, no flags fired; no verbatim ≥20-word hit on the two candidates web-checked. |

## What I fixed (changelog)
- **GEO floor breach** — H2 #4 ("Dua sektor yang paling sering salah pasang instrumen") opened with a 38-word answer, under the 40–60 band. Extended to 47 words using a dossier-sourced nuance (raising tariffs to FCR level is rarely politically popular) rather than invented filler.
- **Exhaustive-count conflict with a sibling article** — "Dua proyek KPBU APJ berskala kabupaten sudah melewati penandatanganan kontrak" → "**Sedikitnya dua** proyek…". This month's already-approved `kpbu-01` names Madiun, Lombok Barat **and Dharmasraya**; the original phrasing asserted a closed count that contradicts it.
- **Writer's note leaking into published prose** — "(angka berbeda antarsumber, perlakukan sebagai kisaran)" was an instruction to the writer, not to the reader. Rewritten as a reader-facing hedge, and the Rp 100 miliar figure now carries its reference year: "sekitar Rp 100 miliar pada saat perjanjian ditandatangani tahun 2022. Angka itu berbeda-beda antarsumber, jadi lebih aman dibaca sebagai kisaran ketimbang nilai pasti."
- **Vague access dates** — three instances of "(diakses 2026)" → "(diakses September 2026)".
- **Weak attribution on a negative claim** — "Kementerian Keuangan tidak menetapkan ambang nilai minimal untuk KPBU" → "**Halaman persyaratan proyek** Kementerian Keuangan tidak **mencantumkan** ambang nilai minimal…". A ministry not publishing a threshold on one page is a narrower, defensible claim than the ministry not setting one at all — material for a pemda reader who may act on it.
- **Colloquial register in a reference table** — air minum row, "*User charge*, sering perlu tambalan" → "*User charge*, umumnya perlu ditambal Dukungan Kelayakan". The table is the article's primary GEO asset and must read cleanly row-by-row.
- **Awkward phrasing** — "Kurang dari 5% populasi BUMD Air Minum nasional" → "Kurang dari 5% dari seluruh BUMD Air Minum nasional".
- **Frontmatter sync** — `word_count: 1684` → `1755` (verified with `tools/count_words.py`).

## What I flagged (open issues)
- ⚠️ **Source-date discrepancy, one day** — the article cites the Kementerian PU release as **13 Maret 2025** (the dossier's direct WebFetch of pu.go.id recorded that page date), but independent mirrors (Bisnis.com, Monitor.co.id) carried the same story on **12 Maret 2025**. Most likely the ministry posted its own page a day after the event media covered. *Recommendation*: leave as-is — the date attaches to the cited page and the link resolves to it. If the curator wants zero exposure, softening to "Maret 2025" costs nothing; the table row already says "(Maret 2025)".
- ⚠️ **Performance data vintage vs publication date** — the 394/258/96/40 BUMD breakdown is **2024 performance data published March 2025**. The article attributes it to the March 2025 publication, which is standard and correct practice, but a very precise reader could distinguish the two. *Recommendation*: acceptable as published; no change needed.
- ⚠️ **`dateModified` absent from the meta block** — seo_playbook §2a asks for a freshness marker in the frontmatter. This article carries `publish_month: "2026-09"` only. This is a **house-template gap, not a writer error** — no approved final this month (incl. `kpbu-01`, `kpbu-02`, `kpbu-03`) has the field either. *Recommendation*: add `dateModified` to the §7 template in `style_guide.md` for next month rather than patching one article out of band.
- ⚠️ **`pasal.id` used as the source for UU 23/2014 Pasal 12** — a third-party extraction, weaker than the JDIH/peraturan.go.id primary the playbook prefers. The dossier explains why: the official PDF would not OCR. The article's other two citations (kpbu.kemenkeu.go.id, pu.go.id) are both primary, so the ≥1-authoritative bar is met comfortably. *Recommendation*: swap to `peraturan.go.id/id/uu-no-23-tahun-2014` in a future refresh once the URL is confirmed to resolve — I did not have the search budget to verify it this run and would not swap in an unverified URL.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — 0 hits
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — 0 occurrences anywhere
- [x] No "Penting untuk dicatat / dipahami bahwa" — 0 hits. The equivalent idea appears as "Satu hal yang sering disalahpahami:" — a practitioner voice, not the cliché
- [x] "Dengan demikian" not overused — 0 occurrences
- [x] Em-dash count ≤2 — **0**. (1 en-dash, in the range "2028–2029", which is correct typography)
- [x] Varied paragraph lengths — 21 prose paragraphs, 8–125 words, **CV 0.486**
- [x] Not every H2 → 3-bullet list — H2 #1 prose + numbered list, #2 prose + table, #3 four prose paragraphs, #4 four prose paragraphs, #5 prose + bullets
- [x] No generic claims without numbers — 394/258/19, Rp 386.000/ton, 30%/70%, Rp 4 triliun, Rp 100 miliar, 61/38/23, Rp 732 triliun, 19 kategori, all dated
- [x] No stacked hype adjectives — "canggih" appears once, inside a **negation** ("bukan kecanggihan strukturnya, justru kesederhanaannya"), which is the opposite of brochure voice
- [x] No service-dump paragraph — one anchor (Pembiayaan Kreatif), one aside, one CTA
- [x] No press-release register — checked for "Dalam rangka", "Sebagai wujud", "Sebagai kesimpulan": 0 hits

### B. Factual & penjaminan infrastruktur / KPBU spot-check
| Claim | Source check | Verdict |
|---|---|---|
| "Dari 394 BUMD Air Minum nasional, 258 berkinerja sehat, tetapi hanya 19 yang memenuhi syarat kerja sama dengan swasta… tarif *full cost recovery* tiga tahun berturut-turut (Kementerian Pekerjaan Umum, 13 Maret 2025)" | dossier Core Fact #8 ✓ + **WebSearch run this session**: pu.go.id URL returned as top result; independent mirrors confirm "258 sehat, 96 kurang sehat, 40 sakit" and "only 19 meet the criteria… FCR tariffs for three consecutive years" | **pass** — figure, ratio logic (19 ⊂ 258 ⊂ 394), source, and FCR condition all exact. "Kurang dari 5%" = 19/394 = 4,8% ✓ |
| "TPPAS Regional Legok Nangka menyepakati *tipping fee* Rp 386.000 per ton pada Oktober 2019, dengan 30% disubsidi Pemerintah Provinsi Jawa Barat dan 70% ditanggung enam kabupaten/kota peserta dari APBD masing-masing" | dossier Core Fact #11 ✓ + **WebSearch run this session**: Bisnis Bandung, Kompas, ANTARA Jabar, jabarnews all confirm Rp 386.000/ton, 30% subsidy (Rp 115.800), 70% to six kab/kota, agreed 9 Oktober 2019 | **pass** — and the article's hedge "Tarif 2019 itu belum tentu masih berlaku dalam bentuk yang sama" correctly honours the dossier's staleness flag |
| "Per Juni 2024, proyek bernilai sekitar Rp 4 triliun itu dilaporkan belum beroperasi, dengan target rampung 2028–2029" | dossier Core Fact #12 ✓ (detik.com, 28 Juni 2024) | **pass** — time-boxed exactly as the dossier requires; the article never says "sudah"/"masih belum" without the date qualifier |
| "PT PII menandatangani Perjanjian Penjaminan dan Perjanjian Regres… 20 September 2022, dan proyek beroperasi komersial pada 18 Juli 2023"; Lombok Barat 12 Oktober 2023 | dossier Core Facts #13, #14 ✓ / `company_profile.md` (PT PII press release, verified 2026-08-12) | **pass** — stated as a portfolio fact, not a project-success claim, exactly per the brief's aside instruction |
| "61 proyek dijamin (38 KPBU dan 23 non-KPBU) bernilai **proyek** lebih dari Rp 732 triliun **per Juni 2026**" | dossier Core Fact #15 ✓ / `company_profile.md` | **pass** — **scope word present** ("nilai proyek"), so no confusion with the Rp 113 triliun guarantee value; reference month/year present |
| **Regulation audit** — Perpres 38/2015, UU 23/2014, PMK 68/2024, PP 1/2024 | `company_profile.md` regulation table: Perpres 38/2015 = ✅ Berlaku; UU 23/2014, PP 1/2024, PMK 68/2024 all current per the task checklist | **pass** — no revoked chain (PMK 260/2010, 8/2016, 223/2012 etc.) cited anywhere; **no PMK 68/2024 pasal numbers quoted**, per instruction |

**Landmine checks from the task brief — all clear:**
- `7.459` / `299,7` Madiun figures: **0 occurrences** ✓
- Named Governor from the Legok Nangka source, "Gedung Sate", "PwC": **0 occurrences** ✓ (also 0 hits for Gubernur/Bupati/Wali Kota/Menteri/Direktur/Komisaris as name-bearing titles)
- Pasar preserved as ***urusan pilihan***: ✓ stated twice — table note and body prose ("perdagangan adalah urusan pilihan, bukan wajib, sehingga proyek pasar tidak terikat Standar Pelayanan Minimal")
- PJU bidang urusan: ✓ article says only "konsisten diperlakukan sebagai **kewenangan kabupaten/kota**" and explicitly notes it does not appear as its own category — never names a bidang. (Air minum/jalan → pekerjaan umum, persampahan → lingkungan hidup are named, which is dossier-confirmed and permitted.)
- BPPSPAM 2023 (37,8%) comparator: correctly left dropped ✓
- Fitch: absent ✓ · funding certainty promised: never ✓ · claim ever paid: never asserted ✓ · invented tariff or eligibility rule: none ✓

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: **56** / keyword at position **1**
- [x] Meta description 140–160 — actual: **154**
- [x] Slug ≤60, kebab-case, keyword — actual: `pembiayaan-kreatif-instrumen-per-sektor` (**39**)
- [x] H1 contains keyword — "Pembiayaan Kreatif per Sektor: Instrumen Mana yang Cocok"
- [x] H2 count 4–7 — actual: **5 body H2s** (+ FAQ + Kesimpulan)
- [x] ≥1 question-format H2 (2: #1, #3); ≥1 honest/counter-conventional H2 (#5 "Kapan proyek sebaiknya tetap dibiayai APBD")
- [x] Keyword in first 100 words — "pembiayaan kreatif" at word **54**
- [x] **Disambiguation trio in first 100 words** — APBD (w.32), infrastruktur (w.62), pemerintah daerah (w.63), KPBU (w.70) ✓
- [x] Definition snippet near top — **55 words**, opens exactly "Pembiayaan kreatif dalam konteks infrastruktur daerah adalah…" ✓, sits at ~word 86
- [x] ≥8 LSI terms — counted: **16/16** of the target set present
- [x] 3 internal links (1 hub + 2 cousins) — `/pembiayaan-kreatif` (lead, inline), `/kpbu` (H2 #1), `/public-private-partnership` (H2 #4). **3 distinct URLs**, no "BACA JUGA", **0** institute.iigf.co.id. Anchors all differ from August's
- [x] ≥1 external authoritative citation — actual: **3** (kpbu.kemenkeu.go.id, pu.go.id, pasal.id — first two primary)
- [x] FAQ 5–7 Q&As — actual: **6** (48, 51, 52, 53, 53, 54 words)
- [x] ≥1 list + ≥1 table — numbered list (H2 #1), bullet list (H2 #5), 5×5 sector matrix (H2 #2)
- [x] Word count inside band — **1.755** (band 1.500–1.800) ✓ frontmatter synced

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — measured: **49 · 46 · 49 · 47 · 46**. (H2 #4 was 38 before my fix.)
- [x] Each body paragraph makes one independently quotable, verifiable point — spot-checked; the sector matrix is one claim per cell and quotable row-by-row, which is the article's primary GEO asset
- [~] FAQ parseable for FAQPage schema ✓ (clean `###` Q → answer pairs); **`dateModified` absent** — flagged above as a house-template gap, not an article defect

### D. PT PII framing discipline (product_matrix.md + style_guide §11)
- [x] Framed as the government-guarantee provider — "PT PII menandatangani Perjanjian Penjaminan dan Perjanjian Regres" and "lebih dari sekadar menerbitkan jaminan, PT PII mendampingi penyiapan dan strukturisasi transaksi". **Not** a lender/investor/contractor/operator/regulator; not under Danantara (0 hits)
- [x] **Does not administer VGF, does not pay AP** — the article is explicit in the opposite direction: "Availability Payment tetap kewajiban PJPK yang dianggarkan dari APBD sepanjang masa kontrak, bukan hibah. Penjaminan pemerintah memagari risiko sisi pemerintah dalam kontrak, bukan menghapus kewajiban membayar itu." Dukungan Kelayakan is attributed to PMK 68/2024, never to PT PII
- [x] ≤3 PT PII self-mentions — actual: **3** (Madiun aside · Kesimpulan · ptpii.co.id CTA) — at the cap, not over
- [x] No unverifiable superlatives — 0 hits for terbaik/nomor satu/terdepan. "Proyek KPBU APJ pertama di Indonesia" is a dossier-verified factual first, not a marketing superlative
- [x] Product names + specs match product_matrix.md / dossier — anchor is **Pembiayaan Kreatif**, correct per the matrix row for infrastruktur daerah
- [x] Closing uses a company_profile.md positioning line — paraphrase of "Lebih dari sekadar menerbitkan jaminan, PT PII mendampingi penyiapan dan strukturisasi transaksi agar proyek benar-benar sampai ke *financial close*"
- [x] Soft website CTA present as the FINAL line, after the conclusion — "Ragam skema pembiayaan kreatif untuk proyek daerah, beserta posisi penjaminan pemerintah di dalamnya, dapat ditelusuri lebih jauh di ptpii.co.id." Consultative, no "beli sekarang"
- [x] Hub link as a natural inline anchor in the lead — "[pembiayaan kreatif untuk proyek sektoral daerah](https://www.ptpii.co.id/pembiayaan-kreatif)", descriptive, no callout

### E. Anti-cannibalization spot check
**vs `articles_history/by_keyword/pembiayaan-kreatif/` (August, 3 articles):**
- Closest prior article: `pembiayaan-kreatif-daerah-instrumen-di-luar-apbd` (2026-08-pembiayaan-kreatif-01)
- Subtopic overlap (Jaccard estimate): **0,15** (3 shared of 20 union: pembiayaan-kreatif definition/scope, KPBU daerah, Dukungan Kelayakan/VGF)
- vs `pembiayaan-kreatif-checklist-kesiapan-pemda`: **0,10** · vs `pembiayaan-kreatif-mandek-penyebab-proyek-daerah`: **0,10**
- **Availability table NOT rebuilt** ✓ — August's axis was instrument × attribute with a `status pemakaian` column and a debt column. This table has neither ("status pemakaian": 0 hits) and its axis is sector × fitting instrument. Also absent: obligasi/sukuk daerah (0), dana abadi (0), land value capture (0) — the other five August instruments are not re-enumerated.

**vs the three live same-month collisions:**
- **`pembiayaan-kreatif-01` (owns LVC)** — overlap ≈ **0,05**. Zero hits for "nilai tanah", "land value", "P3NK", "LVC".
- **`pembiayaan-kreatif-02` (owns debt ceilings + DSCR)** — overlap ≈ **0,05**. **"DSCR": 0 hits**, "obligasi": 0, "sukuk": 0. PP No. 1 Tahun 2024 appears once as a bare boundary reference ("pinjaman daerah di bawah ambang PP No. 1 Tahun 2024") with **no thresholds reproduced** — exactly the narrow use the dossier sanctions.
- **`pembiayaan-infrastruktur-01` (national money profile)** — overlap ≈ **0,25**, distinct. Its table axis is Pembayar / prediktabilitas arus kas / kualitas kredit / horizon modal / **pemicu biaya dana**. This one is Sumber arus kas / skema pengembalian / instrumen realistis. **Verified: "biaya dana" 0 hits, "cost of fund" 0, "tenor" 0, "refinancing" 0, "multilateral" 0, "funding gap" 0, "secara nasional" 0.** The pemda stays the protagonist throughout — every section is framed as a decision one daerah makes for its own project. Sector rows barely intersect: this article covers pasar and jalan kabupaten, which `pembiayaan-infrastruktur-01` does not; that one covers jalan tol, ketenagalistrikan and telekomunikasi, which this one explicitly rules out of scope.
- **`kpbu-01` (legal/institutional regime by sector)** — overlap ≈ **0,25**, distinct. **Verified: no PJPK-identity column and no governing-regulation column in this article's table** (its columns carry cash-flow source and fitting instrument instead). PJPK appears exactly once, as a first-use gloss. "Dasar regulasi": 0 hits. `kpbu-01` answers "who signs and under what regulation"; this answers "what do I pay it with".
- **Verdict**: distinct angle confirmed on all six comparisons; every estimate well under the 0,4 threshold. One cross-article inconsistency was found and fixed (see changelog: the APJ project count now reads "sedikitnya dua", so it no longer contradicts `kpbu-01`'s third project, Dharmasraya).

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran on the **saved, fully-edited** final; `pembiayaan-kreatif-03.id.quality-input.json` written
- [x] **AI-detector score 0.00** (revise ≥0.30, reject ≥0.50) — verdict `pass`, **0 flags fired**
- [x] **Paragraph burstiness CV 0.457** (script) / 0.486 (my own paragraph-level measure) — both well above the 0.30 floor. Sentence burstiness 1.033; top-30 vocab share 0.311 (no vocabulary concentration)
- [x] Plagiarism — **plagiarism score 0.05**, no non-PT PII verbatim hit ≥20 words

**Plagiarism method, stated honestly.** WebSearch was capped at **3 calls** for this run. I spent **1 on fact verification** (the 394/19 BUMD figure — the article's strongest and most actionable asset) and **2 on the highest-risk plagiarism candidates**. The script extracted **8** candidates; **2 received a direct web lookup**, and the remaining **6 were cleared on rule rather than on search**:

| # | Candidate | How cleared |
|---|---|---|
| 3 | Legok Nangka tipping fee sentence | **Web-checked.** Sources (Bisnis Bandung, Kompas, ANTARA Jabar, 2019) phrase it as "Pemdaprov Jabar akan mensubsidi… 30 persen… sedangkan 70 persen dibebankan kepada pemerintah daerah". The article restructures into a single clause and adds "dari APBD masing-masing". **Longest common run well under 20 words — no hit.** |
| 0 | Kemenkeu three return mechanisms | **Web-checked** (surfaced via the same lookups plus the cited page). The three names are the ministry's own official designations and are unavoidable; the sentence wrapping them is the writer's. No hit. |
| 2, 4 | Madiun dates / PT PII guarantee signing | Rule: PT PII press-release-derived facts — **explicitly ignorable** per the plagiarism rule (hits on ptpii.co.id / cited sources don't count). |
| 5, 6 | UU 23/2014 Pasal 12 list; the sector enumeration | Rule: verbatim regulation text and well-known statutory enumerations. Both are **quoted and attributed inline** in the article, which is the prescribed treatment. |
| 1 | Lombok Barat signing date | Rule: a single dated fact from the Kemenkeu KPBU portal, a cited source. |
| 7 | "Sektor tanpa tarif pengguna sama sekali hanya bisa dibayar dari APBD melalui Availability Payment." | **14 words — structurally below the 20-word hit threshold**, and it is a definitional statement. |

No rewrite was required. **Six of eight candidates carry their `web_search_query` in the JSON** for a later session with spare budget, should the curator want belt-and-braces coverage.
