---
brief_id: "successfactors-vs-hris-c01"
validator_run_date: "2026-07-17"
verdict: "pass"
ai_score: 0.04
plagiarism_score: 0.00
revision_loop: 0
batch: "conditional-2026-08 (style_addendum.md overrides applied — band 800–1000, FAQ 2–3, 2 internal links, 0 image placeholder by design)"
---

# Quality Validator Report — SAP SuccessFactors vs HRIS Lokal: Mana yang Tepat untuk Perusahaan?

## Verdict: **pass**

The article clears both gates this agent owns. The AI-detector heuristic scores **0.04** — far below the 0.30 revise threshold — with a single low-severity flag (paragraph-length CV 0.381, below the 0.45 stylistic target but comfortably above the 0.30 hard AI-tell line, expected in a sub-1000-word piece that deliberately mixes one-sentence paragraphs with longer ones). Sentence burstiness is strong at **0.808**, confirming human rhythm. Plagiarism web-lookup of the distinctive passages returned **zero verbatim matches** on any non-Soltius, non-cited page; the only overlaps are on the two SAP-official URLs the article itself cites (intentional, excluded per agent rules) and on inherently high-overlap SAP spec descriptions. Structure, EYD, and all re-verifiable cited numbers check out — the Gartner MQ category and "10th consecutive Leader" claim, the "50 locale / 800+ regulatory changes" figures, and the biannual release dates all independently confirm. Editor recommended `approve`; I concur. **Curator-ready.**

## Batch override handling (addendum wins — recorded as N/A / compliant, not failures)

The `quality-check.ps1` script has no knowledge of the 2026-08 addendum, so its default bands do not apply. Per assignment instructions:

- **Word band.** Script raw whitespace token count = **993** (it counts table pipes, heading/list/blockquote markers, and inline-link URLs as tokens). The governing band is **800–1000** (addendum §1/§7); editor's calibrated `word_count: 948` sits inside it, and even the raw 993 is in-band. **COMPLIANT.** `word_count: 948` is correct — do not change it.
- **FAQ count.** 2 Q&A — within the **2–3** override band. **COMPLIANT.**
- **Internal links.** Exactly 2 (hub `success-factors` + cousin `sistem-hris-terbaik`) — matches the **2**-link override. **COMPLIANT.**
- **Image checks.** 0 `{IMAGE_NN}` placeholders and no `images.json` — **compliant by design** (addendum §3/§7). Image-brief validation **skipped, not flagged.**

## AI Detector (heuristic v2.0)

- Score: **0.04** / 1.0 (thresholds: revise ≥0.30, reject ≥0.50) → **pass**
- Paragraph burstiness (CV): **0.381** (target ≥0.45; hard AI-tell <0.30 — not triggered)
- Sentence burstiness (CV): **0.808** (strong human variance)
- Top-30 vocab share: **0.31** (below the 0.35 repetition flag)
- Flags (1):
  - [low] paragraph-low-variance: paragraph word-count CV=0.381. Non-blocking — a short piece (14 prose paragraphs) with intentional one-sentence paragraphs ("Kolom HRIS lokal sengaja ditulis pada level kategori...") compresses paragraph CV; sentence-level burstiness (0.808) confirms the rhythm is human, not uniform. Mirrors the approved `sku-c01` precedent (passed at CV 0.396).
- Independent anti-AI read (addendum requires full §5 scan; grep-verified on the file): **0** em-dashes and 0 en-dashes (hyphens used in "15-16 Mei"/"13-14 November"/"berturut-turut" per dossier Flag #8), 0 cliché openers ("Di era digital"/"Seiring perkembangan"/"Tidak dapat dipungkiri" = 0), 0 "Selain itu"/"Dengan demikian"/"Penting untuk dicatat/dipahami"/"Sebagai kesimpulan" (all = 0). "canggih" appears once — inside the verbatim definition snippet as a negation ("bukan soal mana yang lebih canggih"), not a hype descriptor. No every-H2-is-a-3-bullet pattern (H2 #1 = prose + table + prose; H2 #2 = prose + 4-item list; H2 #3 = prose + 3-item list + honest-hedge paragraph). Clean.

## Plagiarism (web lookup of distinctive passages)

8 candidate passages extracted; the distinctive prose and paraphrased claims were web-searched (quoted). Aggregate score **0.00** — no exact match ≥20 words and no partial near-match on any non-Soltius, non-cited URL.

- ✅ "Sistem apa pun akan diakali lewat spreadsheet selama prosesnya belum disepakati" — clean; results are unrelated generic spreadsheet pages, no phrase overlap.
- ✅ "...seberapa jauh proses SDM Anda melampaui administrasi kepegawaian" (Kesimpulan reframe) — clean; the SDM-vs-administrasi distinction is common HR knowledge, but no page carries this wording.
- ✅ "...yang diperbandingkan bukan dua produk sekelas melainkan dua kelas sistem..." (H2 #1 lead) — clean; no source shares the phrasing.
- ➖ "Employee Central Payroll ... 50 locale ... 800+ pembaruan regulasi (SAP, Desember 2023)" — the only overlap is on the **cited** SAP News page (news.sap.com/2023/12/...), which the article explicitly links. Intentional citation, excluded from scoring per agent rules.
- ➖ Gartner MQ category name + "Sebagai SAP Platinum Partner melalui United VARs, Soltius..." — the Gartner category is a proper noun on the cited SAP page; the Soltius line is intentional self-reference. Both excluded per agent rules.
- ✅ Structural candidates the extractor picked up ("## Kesimpulan...", "## FAQ...", "### Apakah SAP SuccessFactors cocok...") are heading text, not plagiarism vectors — no lift.

## Fact & cited-number re-verification (addendum: re-verify formulas + cited regulation/spec numbers)

No arithmetic formulas in this article. Cited specifics re-verified against live sources:

- **Employee Central Payroll "50 locale native + 800+ perubahan regulasi/tahun (SAP, Desember 2023)"** — CONFIRMED. SAP News title reads "Employee Central Payroll Natively Supports 50 Locales" and the body states SAP delivers "over 800 legal changes" per year. Number not inflated; date cap present. The article's honest hedge (cakupan locale berubah antar-rilis; status Indonesia dikonfirmasi per proyek) is intact and correctly leaves the Indonesia-locale question unresolved (dossier Flag #1) rather than guessing.
- **Gartner MQ "for Cloud HCM Suites for 1.000+ Employee Enterprises", Leader sepuluh kali berturut-turut, 10.000+ pelanggan "from startups and mid-sized companies to large enterprises" (Gartner via SAP, 16 September 2025)** — CONFIRMED. The exact category name, "10th consecutive time" as a Leader, and the "over 10,000 customers, from startups and mid-sized companies to large enterprises" wording all match the cited news.sap.com Sep-2025 release. Framed correctly as research-category coverage, not a minimum requirement ("Angka 1.000+ itu cakupan riset Gartner, bukan syarat minimum").
- **Release cadence "produksi 1H 2026 pada 15-16 Mei dan 2H 2026 pada 13-14 November (SAP)"** — CONFIRMED. Public schedules give 1H 2026 production = 15 May 2026 and 2H 2026 production = 13 November 2026; those primary dates match exactly. The article's "15-16 Mei" / "13-14 November" reflect SAP's standard Friday–Saturday production window (15 May and 13 Nov 2026 are both Fridays). Prefixed "mis." as an illustrative example of the biannual cadence; not an error.
- **Integrasi EC → SAP S/4HANA (SAP Learning)** — written one-way only (replicate employee master + org assignments from Employee Central to S/4HANA), respecting dossier Flag #3; no "dua arah"/"siap pakai"/"prepackaged" claim.
- **PPh 21 & BPJS "in full compliance with regulations" (Mekari Talenta, Juli 2026)** — attributed as a category example, not endorsed; consistent with the category-level treatment of the local-HRIS column.

## Structure & EYD integrity

- Frontmatter → H1 → lead (~65 words, ≤80) → "Ringkasnya:" snippet blockquote (~58 words, within 40–60) → 3 body H2 → FAQ (2× H3) → `## Kesimpulan` (~72 words, ≤80) → soft CTA on the final line — all present and correctly ordered (grep-confirmed heading tree).
- Definition-once holds: the definition appears only in the snippet; no "Apa itu..." H2 and no definitional paragraph in the body. The table's "Cakupan fungsi" row is structured comparison data, not a prose restatement.
- EYD consistent: HCM and HRIS expanded once (in the snippet); *human resource information system* italicized; Indonesian number convention correct ("10.000+", "1.000+", "PPh 21", "BPJS"). English loanwords left unglossed ("shortlist", "demo", "suite", "payroll", "spreadsheet", "locale") — acceptable as household terms for the CIO/CHRO audience under the batch's "padat, on-point" directive. Minor: date ranges use hyphens rather than en-dashes, a deliberate tradeoff to hold the em-/en-dash count at 0 (dossier Flag #8) — defensible, not a defect.
- Soltius framing: exactly 2 self-mentions (positioning line in Kesimpulan + soft CTA), "mengimplementasikan dan mendampingi" (implements/supports, never "builds"), zero mid-body aside — within the ≤2 override; body stays fully vendor-neutral, which is the article's differentiator.

## Loop status

Revision loop **0**. No revision required — verdict is `pass` on the first validator pass. Curator may commit (editor `approve` + validator `pass`), per the batch instruction to stop after the verdict for user review.
