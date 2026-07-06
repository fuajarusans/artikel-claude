---
brief_id: "sap-clean-core-01"
validator_run_date: "2026-06-02"
verdict: "pass"
ai_score: 0.00
plagiarism_score: 0.00
revision_loop: 0
---

# Quality Validator Report — Apa Itu Clean Core SAP dan Mengapa Penting Sebelum Pindah ke Cloud

## Verdict: **pass**

The article clears both gates with the strongest possible results on this re-validation run. The AI-detector heuristic returned 0.00 with zero pattern flags; paragraph burstiness CV (0.56) substantially exceeds the 0.45 human-prose threshold. All 8 plagiarism candidate passages were web-searched this run (WebSearch recovered); none returned an exact or near-verbatim match on any non-Soltius public page. The prose is original Bahasa Indonesia written by a practitioner voice for a senior-IT decision-maker audience — no scaled-content or copy-paste risk detected. The editor's `recommendation: approve` stands unchallenged. Article is curator-ready.

## AI Detector (heuristic v2.0)

- Score: **0.00** / 1.0 (thresholds: revise ≥0.30, reject ≥0.50)
- Paragraph burstiness (CV): **0.56** (target ≥0.45 — PASS, +0.11 above threshold)
- Sentence burstiness: **0.922** (strong rhythm variation — PASS)
- Top-30 vocab share: **0.309** (within natural range — no flag)
- Flags: **0** — none triggered
- Word count (script): 1,893 | Paragraphs: 19 | Sentences: 99
- External API used: no (heuristic mode)

Manual read confirms the heuristic result. The prose shows markers of genuine human editorial voice: a concrete house-renovation analogy ("seperti rumah kontrak"), a frank contrarian section that acknowledges when clean core is NOT a priority — a structural choice that AI-generated content almost never makes — calibrated hedging on disputed facts ("gambaran arah, bukan teks resmi yang final", "perlakukan sebagai pendekatan, bukan skala angka resmi"), and deliberate sentence-length variation including one-sentence punches ("Risikonya dulu.", "Alasannya teknis, tapi konsekuensinya finansial.") against multi-sentence explanatory blocks. No banned AI openers. One body em-dash (H2 #5, within the ≤2 limit). No stacked hype adjectives. Verdict: this reads like a senior SAP consultant writing for a CIO, not like a language model completing a brief.

## Plagiarism (web lookup of distinctive passages)

8 candidate passages checked. WebSearch recovered and all 8 lookups completed this run.

- Passage 1 (score 21): "Menurut panduan SAP terkini, *mainstream maintenance* untuk SAP ECC (bagian dari SAP Business Suite 7) berakhir pada **2027**, dengan opsi *extended maintenance* berbayar hingga **2030**." — Search returned 10+ public English-language pages on SAP ECC maintenance deadlines (Rimini Street, SAVIC, All for One, etc.). **No verbatim or near-verbatim match** of the Indonesian sentence was found on any non-Soltius URL. The underlying dates are documented factual knowledge; the Indonesian phrasing is original. Result: **CLEAN.**

- Passage 2 (score 10): FAQ heading fragment "FAQ (Pertanyaan yang Sering Diajukan) — Apa itu clean core dalam SAP?" — Search returned SAP.com and partner sites in English (SAP official, IgniteSAP, SmartShift, KPS, Crescense). The exact Indonesian FAQ heading does not appear on any external page. Result: **CLEAN.**

- Passage 3 (score 10): "Jadi clean core berfungsi sebagai prasyarat de-facto kesiapan cloud, bukan sekadar praktik baik opsional." — Search returned Indonesian articles about generic "clean code" (programming style, not SAP), and cloud computing papers. The specific SAP-context Indonesian phrase does not appear anywhere. Result: **CLEAN.**

- Passage 4 (score 8): "Inti yang bersih membuat jalur seperti RISE with SAP atau GROW with SAP berjalan jauh lebih mulus, karena lebih sedikit kustomisasi yang harus diuji ulang, dipindahkan, atau dibuang." — Search returned Soltius's own blog pages on RISE with SAP (intentional self-reference, excluded by rule) and generic Indonesian SAP articles. No verbatim match on any third-party page. Result: **CLEAN.**

- Passage 5 (score 8): H2 heading "Risiko core yang 'kotor' — dan kapan clean core BELUM jadi prioritas Anda / Sekarang sisi yang jarang ditulis kompetitor..." — Search returned completely unrelated results (core competency, hardware risk management, Google core updates). The unique first-person editorial framing does not appear anywhere externally. Result: **CLEAN.**

- Passage 6 (score 6): "Salah satu *cara* membangun ekstensi *side-by-side* adalah lewat portofolio low-code SAP Build di atas BTP..." — Search returned generic SAP BTP and portfolio content; no Indonesian article uses this phrasing. The internal-link sentence is original. Result: **CLEAN.**

- Passage 7 (score 6): "Begitu SAP mengarahkan seluruh ekosistemnya ke S/4HANA Cloud, tempat SAP yang memegang kendali upgrade, modifikasi inti gaya lama berubah dari 'fleksibilitas' menjadi beban." — Search returned SAP official upgrade guides (English). The Indonesian phrasing is original editorial prose. Result: **CLEAN.**

- Passage 8 (score 6): "*Side-by-side* extensibility membangun aplikasi terpisah di SAP BTP yang tersambung ke inti lewat released/public API." — Search returned SAP Community and learning.sap.com pages explaining side-by-side extensibility in English. The Indonesian sentence is a paraphrase of SAP's concept, not a verbatim lift from any source. Result: **CLEAN.**

Aggregate plagiarism score: **0.00** (0 exact hits × 0.05 + 0 partial hits × 0.02 = 0.00). Threshold for pass is <0.10 with no 20-word verbatim hit — both conditions satisfied.

## Loop status

This is revision loop **0**. No revision needed. Verdict is **pass**. Article is curator-ready.

## Inherited open items (non-blocking, carry-forward from editor QC)

These items do not affect the validator verdict. They are noted for the client's ongoing content maintenance:

1. **SAP product-naming verification pending** (dossier flags #1, #3–#7, #9): clean-core dimension names/count, S/4HANA Cloud private-edition boundary detail, ABAP Cloud scope, RISE/GROW package contents, released-objects portal name, SAP Build component naming, "clean core maturity" as an official scale. All hedged correctly in-prose; not blocking.
2. **Definition snippet source URL**: learning.sap.com cited at domain root. Swap for an exact deep-link during the next editorial pass with web access.
3. **Custom-code cost share**: kept qualitative by design. Do not add a percentage without a valid Gartner/IDC/Forrester source.
