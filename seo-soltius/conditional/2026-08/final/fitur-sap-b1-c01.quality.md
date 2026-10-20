---
brief_id: "fitur-sap-b1-c01"
validator_run_date: "2026-07-18"
verdict: "pass"
ai_score: 0.04
plagiarism_score: 0.00
revision_loop: 0
batch: "conditional-2026-08 (style_addendum.md overrides applied — band 800–1000, FAQ 2–3, 2 internal links, no image placeholders/no images.json = compliant by design; definition once)"
---

# Quality Validator Report — Fitur SAP Business One yang Wajib Diketahui Bisnis Mid-Market

## Verdict: **pass**

The article clears both automated gates and every applicable batch-2026-08 check. The heuristic AI-detector scores **0.04** (pass; revise ≥0.30) with a single LOW-severity flag (paragraph CV 0.344, above both the 0.30 strong-AI-tell floor and the low-variance line's concern threshold). Web lookup of the distinctive passages returned **zero verbatim matches** on any non-Soltius, non-cited page — the only exact overlap is the SAP customer/user statistic, which the article cites to its declared SAP-official source (news.sap.com), so it is intentional citation, not plagiarism. That same lookup re-verified the headline SAP figures as correct. The article carries no formula math and no regulation numbers to re-verify. EYD is clean, structure is intact, module names match SAP's official spelling, and Soltius framing is disciplined (implementator/pendamping, exactly 2 mentions). Editor recommendation was `approve`; I concur. Per assignment the batch stops here for user review — curator is NOT run and nothing is committed.

## Batch overrides applied (recorded per assignment)
| Check | Script default | Override | Result |
|---|---|---|---|
| Body word band | 1,500–1,800 | 800–1000 (target ~900) | **compliant** — 994 (markdown-aware `count_words.py`); editor reports 978; tool's naive 1041 is the known pipe/URL/markdown inflation artifact, recorded N/A |
| FAQ count | 5–8 | 2–3 | **compliant** — 3 Q&A (answers 43 / 40 / 55 words, each carrying a fact) |
| Internal links | 3 | 2 (1 hub + 1 cousin) | **compliant** — hub `software-erp-sap-business-one` (lead) + cousin `pengertian-sap-business-one-dan-kegunaannya` (H2 #1) |
| Image placeholders | validate `{IMAGE_NN}` + images.json | 0 by design; no images.json | **N/A by design** — 0 placeholders confirmed; image checks skipped, not flagged |
| Soltius mentions | ≤3 | ≤2 | **compliant** — 2 ("Soltius" positioning line in Kesimpulan + "soltius.co.id" soft CTA) |
| Definition repetition | — | once, snippet only | **compliant** — definition lives only in the "Ringkasnya:" snippet; no H2 restates it |

All other checks (anti-AI heuristics, plagiarism/similarity, EYD, structure integrity, fact/citation re-verification) applied in full below.

## AI Detector (heuristic v2.0)
- Score: **0.04** / 1.0 (thresholds: revise ≥0.30, reject ≥0.50) → **pass**
- Paragraph burstiness (CV): **0.344** (target ≥0.45; strong-AI-tell floor <0.30 — clears it)
- Sentence burstiness (CV): **1.191** (very strong, varied rhythm)
- Top-30 vocab share: **0.307** (below the 0.35 flag line)
- Flags (1):
  - [low] paragraph-low-variance: "Paragraph word-count CV=0.344 (target >=0.45)"
- Manual re-read confirms the script: 0 banned openers ("Di era digital / Seiring perkembangan / Tidak dapat dipungkiri" — lead opens on a concrete pain: stock not matching the warehouse count), 0 consecutive "Selain itu", 0 "Penting untuk dicatat", 0 "Dengan demikian", **0 body em-dashes** (the 5 en-dashes are inside official product names `Sales – A/R` / `Purchasing – A/P`, kept deliberately), no all-bullet H2 (H2 #1 = table + prose; #2 = 4-bullet lead-in + numbers paragraph; #3 = 3-bullet + hedging), no hype adjectives, no Soltius service-dump. Short punchy sentences ("Bukan jumlah modulnya.", "Petunjuk kecil, tapi konsisten.") are mixed with medium ones. The lone low-variance flag is inherent to a dense ~900-word explainer and is above the 0.30 approval floor; forcing more variance would require padding or telegram-compression, both banned by addendum §1. Accepted; no action.

## Plagiarism (web lookup of distinctive passages)
8 candidates extracted; the distinctive prose passages were web-searched (header/heading-merge candidates were reduced to their prose core before searching).
- ✅ "Catatan stok di sistem tidak cocok dengan hitungan fisik gudang" — no verbatim match; inventory-discrepancy is a widely written-about concept, but no page reproduces this phrasing. Original wording.
- ✅ "Pesanan pelanggan hidup di satu file, jurnalnya menyusul lewat rekap Excel akhir bulan" — no match; concept-level overlap only with generic bookkeeping content.
- ✅ "SAP Business One dikapalkan sebagai satu aplikasi, bukan kumpulan program yang disambung" — no verbatim match; top result is soltius.co.id (self-reference, ignored) and the single-solution idea is standard, phrased originally here.
- ✅ "Modul lain di daftar resmi (Administration, Business Partners, Banking, Human Resources) melengkapi peta" — no match.
- ✅ "Konsolidasi antar cabang tanpa rekap manual tiap akhir bulan" — no verbatim match; multi-branch consolidation is a common theme, original phrasing.
- ⚠️→ignored "Per Desember 2025, SAP mencatat lebih dari 83.000 pelanggan dan 1,2 juta pengguna di lebih dari 170 negara" — exact overlap with **news.sap.com/2025/12/global-success-of-sap-business-one/**, which is the article's own declared external citation. Per scoring rules, hits on cited SAP-official URLs are intentional citation, not plagiarism, and numeric facts are inherently high-overlap. **Not scored.**
- ✅ MRP-vs-Production distinction and CRM-not-a-module / "Limited CRM User" licensing claims — no verbatim match; both are verifiable against SAP official documentation (Limited CRM User confirmed via the SAP License Guide), stated in the article's own words.
- **Aggregate plagiarism score: 0.00** — no exact match ≥20 words and no partial near-match on any non-Soltius, non-cited URL.

## Fact / math / citation re-verification
- **SAP scale statistics** (83,000+ customers, 1.2M users, 170+ countries, 850 partners, 500+ extensions; grew 3 → 250 employees; "small businesses and the lower midmarket") — **confirmed** verbatim against the cited SAP News Center article (15 Dec 2025). Search returned an exact match.
- **50 localizations, 28 languages** — sourced to the same SAP News article; editor confirmed these are SAP's current figures (not the stale 42/27). Consistent; no overclaim.
- **Module names/spelling** (Financials, Sales – A/R, Purchasing – A/P, Inventory, Production, MRP, Service, Reports + Administration, Business Partners, Banking, Human Resources, Sales Opportunities) — match SAP Help Portal Modules Tab. **OK.**
- **MRP ≠ Production** and **"no module named CRM" / "Limited CRM User"** — supported by SAP's official module list and license structure (Limited CRM User verified). Accurate distinctions, not invention. **OK.**
- **License model** (named user; Professional + three Limited variants; full-control / read-only / no-access) — consistent with the SAP License Guide for SAP Business One 10.0. Writer attributes it as text (no third inline citation), keeping authoritative inline citations at exactly 2 per addendum §4. **OK.**
- **Formula math**: none present. **Regulation numbers**: none cited (no PSAK/law numbers). Nothing further to re-verify.
- **Soltius award** ("beberapa kali menerima SAP Business One Partner of the Year") — matches `company_profile.md`; no excess year precision, no superlative. **OK.**

## Structure integrity
- H1 present; 3 content H2 (#1 practical table; #2 & #3 question-format, #3 counter-conventional "kapan tidak lagi cukup") — within the batch 3–4 band; no definitional "Apa itu" H2 restating the snippet.
- Definition snippet blockquote "Ringkasnya:" (47 words) defines SAP Business One once, immediately after the lead; primary keyword present.
- Direct 40–60-word answer after each H2 (55 / 44 / 42), each a NEW point, not a snippet paraphrase.
- FAQ: 3 Q&A drawn from PAA. Kesimpulan under its own H2 (≤80 words, 1 Soltius positioning line). Soft CTA (soltius.co.id) is the final, separate line.
- 2 internal links (both inline, no "BACA JUGA"), 2 external SAP citations (SAP News + SAP Help Portal Modules Tab), 1 table (8 rows) + two lists.
- EYD clean; the editor's single kopula fix ("Kolom ketiga **berisi** penilaian…") is present.

## Loop status
Revision loop 0. No revision required.

## Recommendation to orchestrator
**Curator-ready — but hold.** AI 0.04, plagiarism 0.00, all applicable batch checks compliant, image checks N/A by design. Overall verdict (worst of AI-pass and plagiarism-pass) = **pass**. Per the assignment, the batch stops here for user review — do NOT run the curator and do NOT commit to articles_history.
