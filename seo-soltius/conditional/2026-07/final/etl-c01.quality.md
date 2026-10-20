---
brief_id: "etl-c01"
validator_run_date: "2026-07-06"
verdict: "pass"
ai_score: 0.08
plagiarism_score: 0.00
revision_loop: 0
---

# Quality Validator Report — Apa Itu ETL (Extract, Transform, Load) dalam Pengolahan Data

> **Batch note:** validated against **conditional/2026-07 style_addendum §7 overrides** — word band 800–1000 (actual 927 = COMPLIANT), FAQ 2–3 (actual 3 = compliant), internal links 2 (actual 2 = compliant), image checks **N/A by design** (0 `{IMAGE_NN}`, no images.json — placeholder ban confirmed, not flagged). All other checks (AI-tell heuristics, plagiarism via quoted WebSearch, EYD, structure integrity) applied in full.

## Verdict: **pass**

Editor recommendation was `approve`; validation concurs. The heuristic script scored the article 0.08/1.0 on AI likelihood (threshold revise ≥0.30) with only two low-severity flags, both waived with documented rationale below. All 7 plagiarism lookups (6 substantive script candidates + 1 validator-added lead check) came back clean — zero exact and zero partial near-matches on any non-Soltius page; aggregate plagiarism score 0.00. Structure integrity, EYD, and the definition-once rule verified by manual read. Curator-ready — but per batch instruction, the pipeline stops here for user review (no curator run, no articles_history commit).

## AI Detector (heuristic v2.0)

- Score: **0.08** / 1.0 (thresholds: revise ≥0.30, reject ≥0.50) → script verdict: **pass**
- Paragraph burstiness (CV): **0.332** (target ≥0.45; hard-fail line <0.30 — not crossed)
- Sentence burstiness: **0.567** (target ≥0.45 — comfortably human)
- Top-30 vocab share: **0.356** (target <0.30)
- Word count (script prose count): 934 | paragraphs: 17 | sentences: 57
- Flags (2, both low severity — both waived after manual re-read):
  - [low] `paragraph-low-variance`: CV=0.332. **Waived — structural, not stylistic.** Addendum §5 mandates a 40–60-word direct answer immediately after each of the 3 body H2s (actual 49/42/49 words), which compresses paragraph-length variance by design in a 900-word format. Where the format does not constrain, the human signal is strong: sentence burstiness 0.567, a deliberate 1-sentence punch paragraph (*garbage in, garbage out*), and 1–4-sentence paragraph rhythm. Above the 0.30 hard-fail line, so no auto-block applies.
  - [low] `vocab-repetition`: top-30 words = 35.6% of body. **Waived — entity-density artifact.** GEO §2a requires entities (ETL, ELT, data warehouse, pipeline, transformasi, flow, SAP Datasphere) to be named explicitly and repeatedly rather than pronominalized; a 927-word technical piece on a single process cannot dilute these terms. No hype-adjective or filler-phrase repetition contributes to the share.
- Pattern flags fired: **0** — no "Selain itu" openers, no "Penting untuk dicatat", no era-filler, no "Dengan demikian"/"Sebagai kesimpulan", em-dash count 0 (max 2).
- Manual §5 re-read concurs: varied rhythm, practitioner asides ("Di lapangan, porsi kerja terbesar..."), genuine hedging pair ("Dua catatan jujur"), no listicle collapse (zero bullet lists; one 3-row table).

## Plagiarism (web lookup of distinctive passages)

8 script candidates; 2 were markdown boilerplate (the `## FAQ` heading line and the table header row `| Tahap | Apa yang terjadi | ...`) — non-distinctive structural syntax, excluded per the common-phrasing rule. The 6 substantive candidates were cleaned of markdown and searched as quoted phrases; 1 additional distinctive lead passage was added by the validator. All 7 clean:

- ✅ Passage 1: "Rantai analitik perusahaan berjalan satu arah: sistem sumber, pipeline ETL, data warehouse..." — clean. Results: topically related ID pages only (digitalskola.com, phintraco.com, dicoding.com, learn.microsoft.com) — none contain the phrase.
- ✅ Passage 2: "Tabel penjualan siap analisis diperbarui tiap malam dan dibaca dashboard keesokan paginya" — clean. Results: generic sales-dashboard pages (fanruan.com, dazo.id, mokapos help) — no phrase match.
- ✅ Passage 3: "Data dibersihkan (duplikat dibuang, error dipetakan ke format target), formatnya diseragamkan..." — clean. Results: Excel dedup tutorials and unrelated patents — no phrase match.
- ✅ Passage 4: "SAP Datasphere menyediakan 3 jenis flow (data flow, replication flow, transformation flow)..." — clean. The underlying **fact** appears on help.sap.com / learning.sap.com / SAP Community / Medium (in English) — that is the cited, dossier-verified claim (Claim 10), not a phrasing lift; the Indonesian sentence appears nowhere.
- ✅ Passage 5: "Pagi harinya manajemen membaca satu angka penjualan konsolidasi, bukan rekap manual per cabang" — clean. Results: multi-branch consolidation articles (erzap.com, equiperp.com, acisindonesia.com) — no phrase match.
- ✅ Passage 6 (CTA): "Untuk mendiskusikan rancangan pipeline ETL dan kesiapan SAP Datasphere..." — clean. Results: English SAP ETL guides only — no phrase match.
- ✅ Passage 7 (validator-added, lead): "Masalahnya jarang ada di dashboard; sumbernya ada di jalur data" — clean. Results: unrelated dashboard/troubleshooting pages — no phrase match.

Definition-snippet note: the concept "ETL adalah proses integrasi data tiga tahap" is inherently high-overlap across the web (glints.com, idmetafora.com, phintraco.com all define ETL similarly) — a quoted search for the snippet's distinctive stem returned **no verbatim match** for the article's actual wording; generic definitional overlap is exempt per the validator rules ("ERP adalah..." class).

- Exact matches (non-Soltius): **0** × 0.05 = 0.00
- Partial near-matches >70% overlap (non-Soltius): **0** × 0.02 = 0.00
- **Aggregate score: 0.00** (pass < 0.10; no verbatim hit ≥20 words anywhere)

## Structure integrity & EYD (manual verification)

- [x] Frontmatter YAML complete and consistent (brief_id, slug 34 chars, `word_count: 927` within band; frontmatter internal_links/external_citations match the 2+2 in-body links)
- [x] Lead ≤80 words, pain + keyword ("ETL adalah" sentence 3) + janji artikel, no separate roadmap paragraph
- [x] "Ringkasnya:" blockquote snippet 57 words — **the only definition in the article** (definition-once rule ✓; no "Apa itu" H2; the era-1970-an paragraph is origin/history, not re-definition)
- [x] 3 body H2s: 2 question-format (≥1 required), 1 structured (3-stage × 3-column table replacing the flow diagram per addendum §3)
- [x] Direct 40–60-word answers after each body H2 (49/42/49), none restating the snippet
- [x] FAQ 3 Q&As, answers 51/44/43 words, each with ≥1 fact/number
- [x] Kesimpulan 64 words (≤80) with 1 positioning line; soft soltius.co.id CTA is the final line, separate from Kesimpulan
- [x] Soltius mentions exactly 2 (≤2 override); implementer framing ("merancang dan mengimplementasikan"), never "builds"
- [x] EYD spot-check clean: no non-standard inanimate "ia" (editor's fixes hold), "siap analisis" unhyphenated, italics first-use discipline consistent, "1×24 jam" / "era 1970-an" formatted correctly
- [x] ≥4 specific inline numbers (era 1970-an, tiga metode ekstraksi, 8 Maret 2023, 3 jenis flow, 1×24 jam, ratusan POS...)
- [x] Editor watch-item accepted: the unlinked "AWS mencatat tiga metode ekstraksi" attribution is by design (dossier instructed ONE AWS link to hold citations at 2) — not flagged as a missing citation

## Word-count note

Script counts 934 (includes headings/table text); editor's clean body count is 927. Both within the 800–1000 override band — no discrepancy to resolve.

## Loop status

This is revision loop 0. Verdict `pass` — no revision instructions needed, no writer loop triggered.

## Disposition

**pass** — curator-eligible (editor `approve` + validator `pass`). Per batch instruction for conditional/2026-07: **curator NOT run, nothing committed to articles_history** — article remains in `conditional/2026-07/final/` for user review.
