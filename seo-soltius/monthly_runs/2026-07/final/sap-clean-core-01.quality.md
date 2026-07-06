---
brief_id: "sap-clean-core-01"
validator_run_date: "2026-06-08"
verdict: "pass"
ai_score: 0.00
plagiarism_score: 0.00
revision_loop: 0
---

# Quality Validator Report — Tata Kelola SAP Clean Core: Mengapa Core Kembali "Kotor" Setelah Go-Live dan Cara Mencegahnya

## Verdict: **pass**

Both gates clear. The heuristic AI detector scores 0.00 with zero flags — well below the 0.30 revise threshold — and all structural burstiness metrics are healthy (paragraph CV 0.489, sentence burstiness 0.982). Web lookup of all 8 plagiarism candidate passages returned no exact matches and no partial near-matches on any non-Soltius public page. Plagiarism score is 0.00, below the 0.10 pass threshold, and no passage has a verbatim hit of 20+ words anywhere. The editor recommendation is `approve` (length reconciled against the 1,500–1,800 band). Overall verdict: **pass**. Article is curator-ready.

---

## AI Detector (heuristic v2.0)

- Score: **0.00** / 1.0 (thresholds: revise ≥0.30, reject ≥0.50)
- Paragraph burstiness (CV): **0.489** (target ≥0.45 — pass)
- Sentence burstiness: **0.982** (well above threshold — pass)
- Top-30 vocab share: **0.306** (low concentration — pass)
- Flags: **0** (none triggered)

No AI-pattern flags fired. Burstiness metrics are strong: paragraph CV at 0.489 clears the ≥0.45 floor; sentence burstiness at 0.982 indicates high variation in sentence length, consistent with human expert prose. Top-30 vocabulary concentration at 0.306 is low, reflecting the diverse technical terminology and natural phrasing expected from a practitioner-written B2B SAP article. No borderline score requiring manual re-read of flagged sections (score is 0.00, not in the 0.28–0.32 zone).

---

## Plagiarism (web lookup of 8 distinctive passages)

8 candidate passages checked. Score: **0.00**. No exact matches; no partial near-matches.

**Passage 1:** "SAP Cloud ALM menampung RISE with SAP Methodology Dashboard, tempat KPI clean core dipantau terus-menerus."
- Search returned SAP Community and SAP Learning pages describing this capability in English. No Indonesian-language page reproduces this specific phrasing. The concept is SAP product fact; the Indonesian formulation is original to this article.
- Classification: **clean**

**Passage 2:** Article title + opening: "Tata Kelola SAP Clean Core: Mengapa Core Kembali 'Kotor' Setelah Go-Live dan Cara Mencegahnya — Anda baru saja menyelesaikan migrasi S/4HANA..."
- No results match the title or opening prose. Search returned off-topic Indonesian-language pages (corruption news, general ERP go-live articles). Original.
- Classification: **clean**

**Passage 3:** "27/2022) berlaku penuh pada 17 Oktober 2024, dengan sanksi hingga 2% dari pendapatan tahunan, ekspektasi tata kelola IT menguat."
- Search returned Indonesian legal sites (Prolegal.id, Klikpajak.id, etc.) discussing UU PDP generally. The law number, effective date, and 2% sanction cap are matters of public record — inherently high-overlap facts that cannot be plagiarised. The specific phrasing connecting UU PDP to IT governance expectations is original. Per rules: generic well-known legal facts are excluded from scoring.
- Classification: **clean** (generic public-record fact)

**Passage 4:** "Menurut SAP, clean core mencakup lima dimensi: Processes, Extensibility, Data, Integrations, dan Operations ([SAP, 2026]...)"
- Search confirmed this maps to sap.com/products/erp/rise/methodology/clean-core.html, which is an explicitly cited source in the article's frontmatter. Per rules: hits on cited SAP-official URLs are intentional citation, not plagiarism. No non-Soltius, non-SAP-official Indonesian page reproduces the exact sentence.
- Classification: **clean** (cited SAP-official source)

**Passage 5:** "FAQ (Pertanyaan yang Sering Diajukan) — Apa fungsi SAP Cloud ALM untuk tata kelola clean core?"
- Search returned only SAP official pages and English-language partner blog posts. No Indonesian-language FAQ reproduces this heading or the answer text. Original.
- Classification: **clean**

**Passage 6:** "SAP Cloud ALM menampung RISE with SAP Methodology Dashboard yang memantau kepatuhan clean core."
- Variant of Passage 1 (the FAQ answer version, shorter). Same result: SAP official and community pages in English only. No verbatim Indonesian copy found.
- Classification: **clean**

**Passage 7:** "Tata kelola clean core adalah cara perusahaan menjaga inti S/4HANA tetap standar setelah go-live, bukan kegiatan satu kali melainkan siklus berkelanjutan."
- Search returned generic Indonesian IT-governance and corporate-governance articles with no conceptual or lexical overlap with this SAP-specific definition. Original.
- Classification: **clean**

**Passage 8:** "Core kembali kotor karena perhatian governance berhenti tepat saat proyek migrasi selesai."
- Search returned entirely off-topic results (EF Core database migrations, Indonesian development policy, archival systems). No match whatsoever. Original.
- Classification: **clean**

**Aggregate plagiarism score: 0.00** (0 exact hits × 0.05 + 0 partial hits × 0.02 = 0.00)
Plagiarism verdict: **pass** (score < 0.10; no passage with verbatim hit ≥20 words on a non-Soltius site)

---

## Loop status

This is revision loop **0** (first and only pass). Verdict is `pass`; no writer revision loop required. Article proceeds to curator.
