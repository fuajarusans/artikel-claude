---
brief_id: "ap-ar-c01"
editor_run_date: "2026-07-17"
recommendation: "approve"
overall_score: 9
batch: "conditional-2026-08 (style_addendum.md overrides applied — band 800–1000, FAQ 2–3, 2 internal links, no image placeholders, ≤2 Soltius mentions, definition-once)"
---

# Editor QC Report — Account Payable & Account Receivable: Pengertian dan Cara Mengelolanya

## Recommendation
**approve**

The draft arrived in excellent shape and needed only three light EYD/consistency touches — no factual corrections, no framing fixes, no structural rework. Every batch-2026-08 override is satisfied: body 995 words (markdown-aware count, band 800–1000, near ~900 target), zero image placeholders, FAQ 3 (43/50/50 words), exactly 2 internal links (1 hub + 1 cousin), 2 external SAP Learning citations inline, ≤2 Soltius mentions, definition stated once (snippet only), 4 lean content H2 (#1 & #4 question-format; #1 table, #2 numbered list, #3 table). All nine dossier flags are obeyed and every SAP claim is scoped to exactly what SAP documents. The article delivers the SERP gap competitors miss — AP and AR as two sides of the same transaction, an enforceable-control asymmetry (hold before cash leaves vs. chase by age), the three-document check, and the sub-ledger→reconciliation-account lens — with honest hedging in two places. AI-detector score 0.04 (pass, tied best-in-batch). Both internal URLs independently re-verified 200 OK this run.

## Batch-2026-08 overrides applied (checklist)
| Override | Required | Actual | OK |
|---|---|---|---|
| Body word band | 800–1000 (target ~900) | 995 (markdown-aware / batch convention) | ✅ |
| Image placeholders | 0 (forbidden; image validation N/A) | 0 | ✅ |
| FAQ | 2–3 Q&A, 30–60 words each | 3 (43 / 50 / 50) | ✅ |
| Internal links | exactly 2 (1 hub + 1 cousin) | 2 (FICO hub in H2 #4 + Manajemen-Keuangan cousin in lead) | ✅ |
| External citations | 1–2 inline authoritative | 2 (SAP Learning P2P + Managing AR) | ✅ |
| Lead | ≤80 words, no roadmap para | 53 words | ✅ |
| Kesimpulan | ≤80 words + 1 positioning line | 61 words | ✅ |
| Soft CTA soltius.co.id | last line, separate | last line | ✅ |
| Soltius mentions | ≤2 total | 2 (positioning line + CTA) | ✅ |
| Definition | once, in snippet only | snippet only (49 words) | ✅ |
| H2 count | 3–4 content (≥1 question, ≥1 practical) | 4 (#1 & #4 question; #1/#2/#3 structured) | ✅ |
| Inline specific numbers | ≥4 | 8+ distinct | ✅ |
| Direct answer after each H2 | 40–60 words, new point | 49 / 43 / 46 / 52 | ✅ |
| Em-dash | ≤2 | 0 | ✅ |

## Word-count note (the flagged batch artifact — resolved)
The pipeline heuristic `tools/quality-check.ps1` reports **1060** for this article, but that counter naively splits on whitespace **without stripping markdown table pipes (`|`) or inline link URLs** — it inflates every table-heavy, link-bearing article by ~60–70 tokens. This is the known batch artifact, not a band failure: the **approved** batch finals `reorder-point-c01` (tool 1009 / declared 954), `sku-c01` (1042 / 973), `pkwt-pkwtt-c01` (1033 / 986), and `sap-hyperscaler-c01` (1017 / 976) all exceed 1000 on the same tool while their reader-visible counts sit under 1000. The repo's own markdown-aware counter `tools/count_words.py` yields **995** here — inside band and under the 1000 hard-fail line. The writer's declared 991 followed the same convention; my three edits (+2 words) bring it to 995. No forced compression was applied; paragraph rhythm (1–4 sentences) is preserved.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | 0 clichéd openers, 0 em-dash, varied rhythm; AI-detector 0.04 (pass) |
| Factual & SAP-spec accuracy | 10 | Every SAP claim scoped to dossier-verified verbatim; all 9 flags obeyed |
| On-page SEO compliance | 9 | Meta title 58, description 156, slug 56; keyword in H1/first-100/last para |
| GEO extractability (§2a) | 9 | 40–60w new-point answer after each H2; one quotable point per paragraph; FAQPage-ready |
| Soltius framing discipline | 10 | Implements/supports, never builds; 2 mentions; 1998/Metrodata credential accurate |
| Internal linking | 9 | Exactly 2, natural inline, both 200 OK; cousin capitalization preserved |
| FAQ quality | 9 | 3 Q&A, each 43–50w with a concrete number; no H2 duplication |

## What I fixed (changelog)
- **H2 #2, termin sentence — grammar**: "…yang dikejar bayar tepat pada tanggal yang diputuskan…" → "…yang dikejar **adalah membayar** tepat pada tanggal yang diputuskan…" (missing linking verb; avoids telegram-style compression per addendum §1).
- **H2 #2, honest-hedging sentence — EYD**: "pemasok yang **berulang** dibayar terlambat" → "pemasok yang **berulang kali** dibayar terlambat" (idiomatic adverbial).
- **H2 #3 — terminology consistency**: "Piutang yang berpindah ke **bucket** berikutnya" → "…ke **jenjang** berikutnya" (aligns with the section's own "berjenjang 30 hari" / "tiap jenjang"; removes an unglossed anglicism).
- Updated frontmatter `word_count` 991 → **995** to match the markdown-aware count of the edited final.

## What I flagged (open issues)
- ⚠️ **Paragraph-low-variance (CV 0.362, LOW severity)** — the sole residual AI-detector flag. Better than the approved batch finals `reorder-point-c01` (0.348) and the approved pilot `saas-paas-iaas` (0.32), both shipped. Inherent to a dense ~900-word explainer; forcing more variance would require padding or telegram-compression, both banned by addendum §1. **Accepted; no action.**
- ⚠️ **Hub-page contents nuance (handled, not a defect)** — the brief claims the FICO hub "explicitly lists Accounts Payable AND Accounts Receivable as sub-modules." My independent 200-OK re-fetch this run shows the page names "piutang pelanggan" (AR) and "hutang" (payables) but does **not** carry a literal "Accounts Payable sub-module" label. The article makes **no** claim about the hub's wording; its sentence states only the independently-true fact ("Keduanya sub-modul standar di modul keuangan SAP (FICO)") with the link as a natural inline anchor. Correct as-is.
- ⚠️ **External SAP Learning citations (verification provenance)** — both URLs were fetched with full verbatim body content in the dossier this same run (2026-07-17); SAP Learning pages are JS-rendered, so a fresh editor WebFetch can return title-only and is not a reliable liveness re-test. Relying on the dossier's same-day full-body capture. No action.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan / Tidak dapat dipungkiri" openers (lead opens on two concrete pains)
- [x] No "Selain itu" opener (0 occurrences)
- [x] No "Penting untuk dicatat/dipahami" (0)
- [x] "Dengan demikian" not used (0)
- [x] Em-dash count **0** (≤2)
- [x] Varied paragraph lengths — CV 0.362 (low-severity flag only; beats approved batch finals); sentence counts range 1–4
- [x] Not every H2 → bullet list (2 tables, 1 numbered list, prose blocks)
- [x] No generic claims without numbers
- [x] No stacked hype adjectives (canggih/powerful/seamless/terdepan = 0)
- [x] No service-dump paragraph
- Tool `quality-check.ps1`: **score 0.04 → verdict pass** (revise ≥0.30). Flags: paragraph-low-variance (low) only.

### B. Factual & SAP-spec spot-check
| Claim | Source check | Verdict |
|---|---|---|
| "three-step verification … membandingkan … sebelum faktur disetujui"; term NOT attributed to SAP as "three-way match" ("di luar SAP lazim disebut") | dossier P2P verbatim + Flag #8 pattern honored | pass |
| Faktur dibayar lewat *payment program* bila "tidak ada selisih dan tidak ada *payment block*"; "payment run" DROPPED | dossier P2P verbatim + Flag #1 (drop) honored | pass |
| Akun rekonsiliasi "diperbarui otomatis" scoped to **AR** page, attributed to SAP Learning | dossier AR verbatim "automatically updated" + Flag #3 (AP never uses "otomatis") honored | pass |
| FAQ #2: AP jangka pendek "karena diselesaikan dalam siklus operasi normal"; "dua belas bulan" attached to **aset lancar**, not to AP | dossier corrected cause + Flag #2 honored (brief's "12 bulan" cause was wrong) | pass |
| No invented figures: no 2/10-net-30 equivalent-annual-cost, no PSAK number, no account 21000000, aging buckets hedged "umumnya/bukan ketentuan baku", 2-doc services hedged "umumnya", no DSO/DPO formula | dossier Flags #4/#5/#6/#7/#9 + BI-cluster boundary all honored | pass |

### C. On-page SEO checklist (batch-adjusted)
- [x] Meta title **58** chars (≤60); "Account Payable" in first 15 chars
- [x] Meta description **156** chars (140–160); primary keyword "account payable adalah" leads
- [x] Slug `account-payable-account-receivable-perbedaan-cara-kelola` **56** chars (≤60), keyword-led
- [x] H1 contains primary keyword
- [x] H2 count **4 content** (batch band 3–4); ≥1 question-format (#1, #4); honest-hedging folded into #2 per addendum §2
- [x] Keyword in first 100 words and in last paragraph (Kesimpulan + CTA)
- [x] Definition snippet **49** words, near top (the only definition)
- [x] LSI terms ≥8 present (utang usaha, piutang usaha, liabilitas jangka pendek, aset lancar, three-way match, purchase order, goods receipt, payment terms, dunning terms, umur piutang/aging, Procure-to-Pay, Order-to-Cash, sub-ledger, reconciliation account, DPO, DSO)
- [x] Internal links **exactly 2** (batch): hub `sistem-sap-fico…` (H2 #4) + cousin `Manajemen-Keuangan…` (lead, capitalization preserved) — both re-verified 200 OK
- [x] External authoritative citations **2**: SAP Learning P2P (H2 #2) + SAP Learning Managing AR (H2 #4)
- [x] FAQ **3** (batch band 2–3)
- [x] ≥1 list + ≥1 table (2 tables + 1 numbered list)
- [x] Word count **995** (batch band 800–1000) — see word-count note
- N/A Image validation — no placeholders by batch design (removed 0; none present)

### C2. GEO extractability (§2a)
- [x] Direct 40–60-word answer immediately after each H2, each a NEW point (not a snippet restatement): 49 (two-sides) / 43 (refuse-before-three-docs) / 46 (control asymmetry + age) / 52 (sub-ledger updates GL instantly)
- [x] Each body paragraph makes one independently quotable, verifiable point
- [x] FAQ parseable for FAQPage schema; freshness via `publish_month: 2026-08` (dateModified handled at CMS layer, consistent with batch template)

### D. Soltius framing discipline
- [x] Framed as implementer/partner ("mengimplementasikan dan mendampingi SAP S/4HANA Finance") — never "builds/owns"
- [x] **2** self-mentions total (positioning line in Kesimpulan + CTA) — within batch ≤2; no aside in body
- [x] No superlatives ("terbaik/nomor satu" = 0)
- [x] SAP product name accurate (SAP S/4HANA Finance, full name)
- [x] Closing uses a company_profile positioning line; credential **heritage 1998 / Metrodata Group** — deliberately different from `neraca-saldo-c01` and `laporan-laba-rugi-c01` (which used "SAP Platinum via United VARs") so the accounting cluster does not read uniform
- [x] Soft website CTA present as the FINAL line, after Kesimpulan, consultative ("Titik awalnya biasanya satu penilaian…" / "kunjungi soltius.co.id"), not "beli sekarang"
- [x] Hub link is a natural inline anchor in H2 #4 — no "BACA JUGA" callout

### E. Anti-cannibalization spot check
- Closest prior article: `ai-untuk-finance-c01` (2026-06); neighbors `neraca-saldo-c01`, `laporan-laba-rugi-c01` (row 5), `jurnal-umum-c01`, `business-intelligence-01`
- Subtopic overlap (Jaccard, per brief): ≈ **0.13** (< 0.4)
- Boundary honored (grep-verified in draft): **0** AI angle (no Joule/Business AI/ML/OCR/cash application/straight-through/anomaly detection); **0** reuse of ai-untuk-finance numbers (60/85/10/70/80%, Gartner, Bain); **0** Universal Journal/ACDOCA; **0** Business Partner; **0** GR/IR / F110 / special GL indicator; **0** PSAK number; no accounting-cycle basics (jurnal umum/debit-kredit/neraca saldo); no income-statement structure/margins/single-vs-multiple-step; DSO/DPO named in one table row only, no formula or cadence (BI-cluster property). Otomasi lens = deterministic ERP sub-ledger, not AI.
- Verdict: **distinct angle confirmed**

## The shipping question
Would a senior SAP consultant and a skeptical CFO/CIO find this useful and non-embarrassing on soltius.co.id? Yes. It answers the exact SERP gap the top Indonesian results miss (AP and AR as two sides of one transaction; enforceable controls, not "catat rapi"; three-document verification; how to read 2/10 net 30; aging buckets mapped to actions; the sub-ledger→GL lens), sources the two non-obvious facts to SAP without over-claiming the terminology, hedges honestly twice, respects every dedup boundary, and closes with a scoped, non-salesy Soltius line. **Approve.**
