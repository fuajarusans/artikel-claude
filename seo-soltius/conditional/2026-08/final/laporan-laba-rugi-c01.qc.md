---
brief_id: "laporan-laba-rugi-c01"
editor_run_date: "2026-07-18"
recommendation: "approve"
overall_score: 9
batch: "conditional-2026-08 (style_addendum.md overrides applied — band 800–1000, FAQ 2–3, 2 internal links, no image placeholders, ≤2 Soltius mentions, definition-once)"
---

# Editor QC Report — Laporan Laba Rugi: Komponen, Jenis, dan Cara Membacanya

## Recommendation
**approve**

The draft arrived in strong shape and needed only light tightening plus one accuracy/completeness touch — no factual corrections, no framing fixes, no structural rework. Every batch-2026-08 override is satisfied: body **996** words (markdown-aware `count_words.py`, band 800–1000, near ~900 target), zero image placeholders, FAQ 3 (43 / 43 / 51 words), exactly 2 internal links (1 hub + 1 cousin), 2 external authoritative citations inline (IAI + SAP Learning), ≤2 Soltius mentions, definition stated once (snippet only), 4 lean content H2 (#2 & #3 question-format; #1/#2/#3 structured with tables and a formula list). The article delivers the SERP gap competitors miss — the income statement as a *layered* structure, single vs multiple step framed by "how many times profit is computed," three margins each with the diagnostic question it answers, the falling-margin-by-layer reading rule (original insight absent from the SERP), the accrual honesty caveat, and the FSV "one ledger, many report versions" lens — while every dossier flag (F1–F8) is obeyed and every SAP/PSAK claim is scoped to exactly what the source documents. Arithmetic re-verified end to end. AI-detector score **0.03** (pass, best-in-batch tier). Both internal URLs and both citation URLs match the dossier's same-day 200-OK captures.

## Batch-2026-08 overrides applied (checklist)
| Override | Required | Actual | OK |
|---|---|---|---|
| Body word band | 800–1000 (target ~900) | 996 (markdown-aware / batch convention) | ✅ |
| Image placeholders | 0 (forbidden; image validation N/A) | 0 | ✅ |
| FAQ | 2–3 Q&A, 30–60 words each | 3 (43 / 43 / 51) | ✅ |
| Internal links | exactly 2 (1 hub + 1 cousin) | 2 (macam-macam-laporan-keuangan hub in H2 #1 + siklus-akuntansi cousin in lead) | ✅ |
| External citations | 1–2 inline authoritative | 2 (IAI PSAK 201 in H2 #1 + SAP Learning FSV in H2 #4) | ✅ |
| Lead | ≤80 words, no roadmap para | ~52 words | ✅ |
| Kesimpulan | ≤80 words + 1 positioning line | ~52 words | ✅ |
| Soft CTA soltius.co.id | last line, separate | last line | ✅ |
| Soltius mentions | ≤2 total | 2 (positioning line + CTA) | ✅ |
| Definition | once, in snippet only | snippet only (50 words) | ✅ |
| H2 count | 3–4 content (≥1 question, ≥1 practical) | 4 (#2 & #3 question; #1/#2/#3 structured) | ✅ |
| Inline specific numbers | ≥4 | 15+ distinct | ✅ |
| Direct answer after each H2 | 40–60 words, new point | 40 / 45 / 46 / 41 | ✅ |
| Em-dash | ≤2 | 0 | ✅ |

## Word-count note (the batch artifact — resolved)
The pipeline heuristic `tools/quality-check.ps1` counts on raw whitespace **without stripping markdown table pipes (`|`) or inline link URLs**, inflating every table-heavy, link-bearing article by ~60–70 tokens (the known batch artifact, not a band failure). The repo's markdown-aware counter `tools/count_words.py` — the same convention that landed the 12 sibling August finals in-band (`ap-ar-c01` 995, `reorder-point-c01` 954, `sku-c01` 973, `pkwt-pkwtt-c01` 986) — yields **996** here, inside band and under the 1000 hard-fail line. The writer's declared draft count (981) and the markdown-aware count (1004) both fell in/near band; my four light trims (−8 markdown-aware words, removing redundant transitions and a duplicated "PSAK 201") bring it to a comfortable **996**. No forced telegram-compression: paragraph rhythm (1–4 sentences) is preserved.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | 0 clichéd openers, 0 em-dash, varied rhythm (several 1-sentence paragraphs); AI-detector 0.03 (pass) |
| Factual & SAP-spec accuracy | 10 | Arithmetic re-verified; every PSAK/SAP claim scoped to dossier-verified verbatim; all 8 flags obeyed |
| On-page SEO compliance | 9 | Meta title 49, description 156, slug 45; keyword in H1/first-100/closing |
| GEO extractability (§2a) | 9 | 40–60w new-point answer after each H2 (40/45/46/41); one quotable point per paragraph; FAQPage-ready |
| Soltius framing discipline | 10 | Implements/mendampingi, never builds; 2 mentions; SAP Platinum via United VARs credential accurate |
| Internal linking | 9 | Exactly 2, natural inline (no BACA JUGA); hub + cousin both match dossier 200-OK captures |
| FAQ quality | 9 | 3 Q&A, each 43–51w with a concrete fact/number; opens each from a non-snippet angle |

## What I fixed (changelog)
- **H2 #1, definition of complete financial statements — accuracy/completeness**: companion-statement list "…berdampingan dengan neraca, laporan arus kas, dan laporan perubahan ekuitas" → "…berdampingan dengan neraca, laporan perubahan ekuitas, laporan arus kas, **dan catatan atas laporan keuangan**." Adds the omitted CALK so the enumeration of the other main components is complete for an accountant reader — still **without stating any number** (Flag F1 preserved).
- **H2 #1, PSAK sentence — de-duplication**: "Nomornya baru: Ikatan Akuntan Indonesia (IAI) mencatat penomoran ulang dari PSAK 1 **menjadi PSAK 201** disahkan…" → "Menurut Ikatan Akuntan Indonesia (IAI), penomoran ulang dari PSAK 1 disahkan…" (removes the second, redundant "PSAK 201" already carried by the citation anchor immediately prior; tightens filler). Both verified dates kept verbatim.
- **H2 #1 answer — tighten**: "Urutan barisnya sama pentingnya dengan isinya, dan laba bersih hanyalah hasil akhir…" → "Urutannya sama pentingnya dengan isinya: laba bersih adalah hasil akhir…" (leaner; answer stays at the 40-word GEO floor).
- **H2 #3, post-margin sentence — tighten**: "Angka-angka itu belum bercerita apa-apa sendirian. Maknanya muncul saat dibandingkan…" → "Angka margin itu baru bermakna saat dibandingkan antarperiode atau dengan perusahaan sejenis." (one crisp quotable sentence; preserves the "one period tells nothing" point and Flag F4's no-benchmark honesty).
- **H2 #4, FSV description — tighten**: "…serta akun buku besar mana yang masuk ke item mana." → "…serta pemetaan akun buku besar ke tiap item." (same meaning, tighter; still within the SAP Learning scope, Flag F6).
- Updated frontmatter `word_count` 981 → **996** to match the markdown-aware count of the edited final.

## What I flagged (open issues)
- ⚠️ **Currency typography** — the article writes rupiah closed-form ("Rp850.000.000", no space), internally consistent throughout the illustration chain and valid per EYD/Bank Indonesia usage; the style-guide example shows the spaced form ("Rp 500 Juta"). Left as-is (consistent, correct); a CMS-level house-style pass could normalize spacing if desired. **No action.**
- ⚠️ **External SAP Learning / IAI citations (verification provenance)** — both URLs were fetched with full verbatim body in the dossier this run (2026-07-17); SAP Learning pages are JS-rendered, so a fresh editor WebFetch can return title-only and is not a reliable liveness re-test. Relying on the dossier's same-day full-body capture (consistent with batch practice). **No action.**
- ⚠️ **Primary keyword in the very last line** — the exact phrase "laporan laba rugi" appears in the closing **section** (first sentence of Kesimpulan) but the final CTA line uses "pelaporan keuangan." seo_playbook §3 asks for the keyword in the closing; it is present in the Kesimpulan. Forcing it into the soft CTA would read stilted. **Accepted as compliant.**

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan / Tidak dapat dipungkiri" openers (lead opens on a concrete boardroom pain)
- [x] No "Selain itu" opener (0 occurrences)
- [x] No "Penting untuk dicatat/dipahami" (0)
- [x] "Dengan demikian" not used (0)
- [x] Em-dash count **0** (≤2)
- [x] Varied paragraph lengths — several 1-sentence paragraphs (lines "Keduanya konvensi penyajian…", "Konsekuensinya…", "Rumusnya sama…", "Angka margin itu baru bermakna…") among 3–4-sentence blocks
- [x] Not every H2 → bullet list (3 tables, 1 bullet list of margins, prose blocks)
- [x] No generic claims without numbers
- [x] No stacked hype adjectives (canggih/powerful/seamless/terdepan = 0)
- [x] No service-dump paragraph
- Tool `quality-check.ps1`: **score 0.03 → verdict pass** (revise ≥0.30). Flags: paragraph-low-variance (low) only.

### B. Factual & SAP-spec spot-check
| Claim | Source check | Verdict |
|---|---|---|
| PSAK 1 renumbered to PSAK 201, "disahkan 12 Desember 2022 dan berlaku efektif 1 Januari 2024" | dossier Claim 1 verbatim (IAI, web.iaiglobal.or.id/PSAK-Umum/7) | pass |
| "salah satu komponen laporan keuangan lengkap" — **no number stated**; companions listed as neraca/perubahan ekuitas/arus kas/CALK | dossier Claim 3 + Flag F1 (no "5") honored | pass |
| Illustration chain 850−510=340; −220=120; −15=105; −23=82; margins 40,0% / 14,1% / 9,6% | dossier Claims 8–9 (re-computed by editor: 340/850=40,0%; 120/850=14,12%; 82/850=9,65%) | pass |
| Tax shown as nominal Rp23.000.000 only — **no rate/percentage** stated | dossier Claim 7 + Flag F2 honored (22% not claimed; 23M ≠ 22% of 105M) | pass |
| Single vs multiple step framed as "konvensi penyajian, bukan format yang diwajibkan standar" | dossier Flag F3 honored (not attributed to PSAK 201) | pass |
| Accrual written as "prinsip akuntansi standar" — no PSAK paragraph number | dossier Flag F5 honored | pass |
| FSV: "sebanyak versi yang dibutuhkan… otoritas pajak, pengguna internal, pengguna eksternal… dihitung otomatis oleh laporan yang sama" | dossier Claims 4–6 verbatim (SAP Learning); Flag F6 honored (no ACDOCA/tcode/module) | pass |

### C. On-page SEO checklist (batch-adjusted)
- [x] Meta title **49** chars (≤60); "Laporan Laba Rugi" in first 17 chars
- [x] Meta description **156** chars (140–160); primary keyword leads
- [x] Slug `laporan-laba-rugi-komponen-jenis-cara-membaca` **45** chars (≤60), keyword-led
- [x] H1 contains primary keyword
- [x] H2 count **4 content** (batch band 3–4); ≥1 question-format (#2, #3); honest-hedging folded into H2 #3 per addendum §2
- [x] Keyword in first 100 words and in closing (Kesimpulan)
- [x] Definition snippet **50** words, near top (the only definition)
- [x] LSI terms ≥8 present (income statement, komponen laporan laba rugi, single/multiple step, laba kotor/operasi/bersih, HPP/COGS, margin laba, analisis vertikal/common size, PSAK 201, IAI, FSV, SAP S/4HANA Finance)
- [x] Internal links **exactly 2** (batch): hub `macam-macam-laporan-keuangan…` (H2 #1) + cousin `apa-itu-siklus-akuntansi…` (lead)
- [x] External authoritative citations **2**: IAI PSAK 201 (H2 #1) + SAP Learning FSV (H2 #4)
- [x] FAQ **3** (batch band 2–3)
- [x] ≥1 list + ≥1 table (3 tables + 1 margin bullet list)
- [x] Word count **996** (batch band 800–1000) — see word-count note
- N/A Image validation — no placeholders by batch design (none present; none removed)

### C2. GEO extractability (§2a)
- [x] Direct 40–60-word answer immediately after each H2, each a NEW point (not a snippet restatement): 40 (layered structure) / 45 (how many times profit is computed) / 46 (margin as % of revenue + names *common size*) / 41 (report configured once, generated from ledger)
- [x] Each body paragraph makes one independently quotable, verifiable point
- [x] FAQ parseable for FAQPage schema; freshness via `publish_month: 2026-08` (dateModified handled at CMS layer, consistent with batch template)

### D. Soltius framing discipline
- [x] Framed as implementer/partner ("mengimplementasikan dan mendampingi SAP S/4HANA Finance, termasuk menata struktur pelaporan keuangannya") — never "builds/owns"
- [x] **2** self-mentions total (positioning line in Kesimpulan + CTA) — within batch ≤2; no aside in body
- [x] No superlatives ("terbaik/nomor satu" = 0)
- [x] SAP product name accurate (SAP S/4HANA Finance, full name); credential = SAP Platinum via United VARs (single credential, not stacked)
- [x] Closing uses a company_profile positioning line; consultative, not "beli sekarang"
- [x] Soft website CTA present as the FINAL line, after Kesimpulan ("…kunjungi soltius.co.id"), soft/consultative
- [x] Hub link is a natural inline anchor in H2 #1 — no "BACA JUGA" callout

### E. Anti-cannibalization spot check
- Closest prior articles in cluster: `jurnal-umum-c01` (2026-06), `neraca-saldo-c01` (2026-07), `cara-menghitung-hpp-c01` (2026-06), `ap-ar-c01` (this batch)
- Subtopic overlap (Jaccard, per brief): ≈ **0.10** vs jurnal-umum; ≈ 0.09 vs neraca-saldo; ≈ 0.05 vs HPP (< 0.4)
- Boundary honored (verified in final): **0** jurnal umum / debit-kredit / saldo normal / posting; **0** neraca-saldo teaching (balance sheet named only as time-axis contrast, no "neraca saldo"/trial-balance content); HPP kept to **one line** (no COGM/WIP/BOP/PSAK 14); **0** AP/AR; **0** Universal Journal/ACDOCA; ERP lens = **Financial Statement Version** (first use across the dedup surface)
- Verdict: **distinct angle confirmed** — this article owns the cycle's *output* (the income statement and how to read it)

## The shipping question
Would a senior SAP consultant and a skeptical CFO/CIO find this useful and non-embarrassing on soltius.co.id? Yes. It teaches what the crowded Indonesian SERP promises but doesn't deliver — how to actually *read* the statement, layer by layer, with a diagnostic rule no competitor states — corrects the "PSAK 1" the whole SERP still repeats, sources the two non-obvious facts (PSAK 201 dates, FSV multi-version) without over-claiming, hedges the accrual truth honestly, respects every dedup boundary, and closes with a scoped, non-salesy Soltius line. **Approve.**
