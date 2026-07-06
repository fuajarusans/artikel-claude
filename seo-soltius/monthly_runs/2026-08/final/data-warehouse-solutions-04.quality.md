---
brief_id: "data-warehouse-solutions-04"
validator_run_date: "2026-06-08"
verdict: "pass"
ai_score: 0.00
plagiarism_score: 0.00
revision_loop: 0
---

# Quality Validator Report — Data Warehouse per Industri: Use Case Nyata di Manufaktur, Distribusi, dan Lainnya

## Verdict: **pass**

Both gates clear. The heuristic AI detector scores 0.00 — no patterns fired, paragraph burstiness CV of 0.478 sits comfortably above the 0.45 target, and sentence burstiness of 0.811 signals genuinely varied rhythm. Plagiarism lookup across all 8 candidate passages returned zero verbatim hits and zero near-matches on non-Soltius, non-cited URLs; every high-overlap passage (OEE 85% benchmark, Evocon statistics, Gartner 61%) is a correctly attributed, standard industry reference that appears only in the context of its named source — not copied phrasing from a competing page. The editor's `recommendation: approve` is confirmed. Article is curator-ready.

## AI Detector (heuristic v2.0)
- Score: **0.00** / 1.0 (thresholds: revise ≥0.30, reject ≥0.50)
- Paragraph burstiness (CV): **0.478** (target ≥0.45 — pass)
- Sentence burstiness (CV): **0.811** (healthy — strong variation)
- Top-30 vocab share: **0.305** (below the concentration danger zone)
- Flags: **0**

No anti-AI patterns from `style_guide.md` §5 fired. The editor's changelog confirms em-dashes were reduced to 0 in prose/meta/headings prior to this validation run. Manual read confirms varied paragraph lengths (single-sentence "Tidak selalu." opener through 6-sentence narrative blocks), no symmetric 4-sentence blocks, no stacked openers ("Selain itu", "Di era digital", "Penting untuk dicatat"), and no service-dump paragraph.

## Plagiarism (web lookup of distinctive passages)

8 candidate passages checked. Scoring: exact match on unique non-Soltius URL = +0.05; partial near-match (>70% word-order overlap) = +0.02; inherently generic/standard phrasing = ignored.

- Passage 1: "Standar OEE *world-class* adalah 85%, patokan yang ditetapkan Seiichi Nakajima dalam *Introduction to TPM* (1984), dengan komponen target Availability ≥90%, Performance ≥95%, dan Quality ≥99,9%." — **clean**. The 85%/Nakajima/1984 fact appears across many English-language manufacturing sites (oee.com, Evocon, Tractian, LeanWorx) but none contain this Indonesian phrasing. Standard attributed benchmark reference, not copied text.
- Passage 2: "Berdasarkan analisis Evocon terhadap 3.500+ mesin di 50+ negara, rata-rata OEE global hanya berkisar 55–60%, dan hanya sekitar 6% pabrik yang benar-benar mencapai 85% secara tahunan." — **clean**. Evocon is cited in the article's own `external_citations` frontmatter; no verbatim Indonesian match found on non-Soltius pages. Correctly attributed source.
- Passage 3: "Data Warehouse per Industri: Use Case Nyata di Manufaktur, Distribusi, dan Lainnya — Seorang kepala pabrik tidak peduli pada 'single source of truth' sebagai konsep." — **clean**. No match on any public non-Soltius URL. Original lead phrasing.
- Passage 4: "Patokan OEE world-class adalah 85%, sementara rata-rata global hanya 55–60% dan hanya sekitar 6% pabrik mencapai 85% (Evocon)." — **clean**. FAQ restatement of the same attributed statistic. No verbatim Indonesian match on non-Soltius pages.
- Passage 5: "Celah belasan poin persen inilah yang dipersempit ketika data produksi terbaca real-time, bukan seminggu kemudian." — **clean**. No match found. Original analytical prose.
- Passage 6: "Pertanyaan inilah yang menjelaskan kenapa proyek data sering terasa antiklimaks bagi pengguna bisnis." — **clean**. The concept appears on Indonesian IT-industry pages (xenopati.id) but the search engine result was an AI-generated summary, not a quote of the article; no verbatim 20-word sequence match found on any public page.
- Passage 7: "Survei Gartner pada April 2024 menemukan 61% organisasi global terpaksa mengevaluasi ulang model operasional data dan analitik mereka karena dampak teknologi AI." — **clean**. Gartner is cited in `external_citations`; this is an attributed paraphrase of Gartner's own press release (gartner.com/en/newsroom/...). No verbatim Indonesian match on non-Soltius pages. Correctly cited reference.
- Passage 8: "Perusahaan perkebunan harus menyatukan data produktivitas per blok, input (pupuk, air, pestisida), cuaca, dan hasil panen dari puluhan hingga ratusan blok kebun." — **clean**. No verbatim match found on any public non-Soltius URL. Original practitioner-voice description.

**Aggregate plagiarism score: 0.00** (threshold revise ≥0.10; threshold reject ≥0.25)

## Loop status

This is revision loop 0. Verdict is `pass` — no revision loop initiated.
