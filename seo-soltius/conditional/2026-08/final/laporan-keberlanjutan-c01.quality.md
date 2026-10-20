---
brief_id: "laporan-keberlanjutan-c01"
validator_run_date: "2026-07-18"
verdict: "pass"
ai_score: 0.08
plagiarism_score: 0.00
revision_loop: 0
batch: "conditional-2026-08 (style_addendum.md overrides applied — band 800–1000, FAQ 2–3, internal links exactly 2, image checks N/A by design; all other checks full)"
---

# Quality Validator Report — Apa Itu Laporan Keberlanjutan & Kewajiban POJK 51 bagi Perusahaan

## Verdict: **pass**

The article clears both risks this gate owns. The AI-detector heuristic scores **0.08** (far below the 0.30 revise floor) with only two low-severity flags, both intrinsic to a single-topic regulatory explainer and already anticipated by the editor — no statistical AI tell survives scrutiny. Plagiarism web-lookup of eight distinctive passages returned **zero verbatim non-Soltius matches**; the only overlaps are standard OJK regulatory phrasing (ignored per scoring rules) and intentional self-reference on soltius.co.id. Independent re-verification of every cited Pasal (10, 4, 13, 1 angka 7, Lampiran II) against OJK-official and academic sources confirms the regulatory claims — including the load-bearing "denda Rp1 miliar is a myth" debunk. EYD, structure integrity, and all batch-2026-08 overrides check out. Curator-ready pending the editor's `approve`.

## Batch-2026-08 overrides applied (recorded as N/A, not failures)
- **Word band 800–1000 = COMPLIANT.** Editor-measured prose = **979**; frontmatter `word_count: 979`. The script's `word_count: 1026` is the documented markdown-table-pipe artifact (the mandatory 5-row Pasal 10 ayat 6 table + 2 inline citation URLs inflate the naive whitespace split). Prose length is in-band. The 1,500–1,800 default band is **N/A** for this batch.
- **FAQ 2–3 = COMPLIANT** (3 Q&As). The 5–8 default is **N/A**.
- **Internal links = exactly 2 = COMPLIANT** (SCT cousin blog + Sustainability hub). The 3-link default is **N/A**.
- **Image checks = N/A by design.** Zero `{IMAGE_NN}` placeholders confirmed; no `images.json` expected. Not flagged.

## AI Detector (heuristic v2.0)
- Score: **0.08** / 1.0 (thresholds: revise ≥0.30, reject ≥0.50) → **pass**
- Paragraph burstiness (CV): **0.36** (target ≥0.45; above the 0.30 strong-AI-tell floor)
- Sentence burstiness (CV): **1.016** (very healthy variation — 1-sentence paragraphs mixed with 4-sentence prose, table, and 9-item list)
- Top-30 vocab share: **0.354** (target <0.30)
- Body em-dash count: **0** (the 2 em-dashes in the file are inside frontmatter `external_citations.context` metadata on lines 16 & 18, not published body)
- Flags (2, both low):
  - [low] `paragraph-low-variance`: paragraph word-count CV=0.36. **Not actionable** — the mandatory comparison table + numbered list flatten the prose-paragraph spread; the underlying rhythm is varied and sentence burstiness is high. Above the strong-tell threshold.
  - [low] `vocab-repetition`: top-30 words = 35.4%. **Inherent, not an AI tell** — a regulatory explainer necessarily recurs on laporan, keberlanjutan, POJK, Pasal, LJK, emiten. Concentration reflects the topic, not templated generation.
- Manual re-read of the flagged sections confirms human rhythm, honest hedging ("Sanksi ringan bukan berarti risiko ringan"), and no clichéd openers. No high/medium-severity pattern fired.

## Plagiarism (web lookup of distinctive passages)
8 candidate passages checked via quoted WebSearch. **Aggregate score: 0.00** (no unique non-Soltius verbatim hit ≥20 words).

- ✅ "…laporan wajib disampaikan ke OJK paling lambat 30 April tahun berikutnya…" — **clean.** "30 April tahun berikutnya" is standard OJK deadline phrasing recurring across many unrelated POJK (LPBBTI, BPR, Dana Pensiun); no match to the article's full sentence. Ignored as standard regulatory phrasing.
- ✅ "Pasal 10 ayat (6) mengatur kapan tiap kategori entitas mulai wajib, dari tahun buku 2019 sampai tahun buku 2025." — **clean** (no match; unrelated tax results only).
- ✅ "Sanksi ringan bukan berarti risiko ringan." — **clean.** Concept discussed elsewhere; exact phrasing original.
- ✅ "Satu rencana ke depan, satu pelaporan ke belakang." — **clean.** No source carries this construction; original.
- ✅ Definition snippet ("…memuat kinerja ekonomi, keuangan, sosial, serta lingkungan hidup…dalam menjalankan bisnis berkelanjutan.") — **clean/ignored.** High overlap is inherent: it paraphrases the POJK 51 Pasal 1 angka 13 legal definition. Standard well-known-term definition per scoring rules; the article's sentence structure is its own, no verbatim lift.
- ✅ "Kata \"denda\" tidak muncul sama sekali di salinan POJK 51." — **clean** (no match; original framing of the myth-debunk).
- ✅ "Sebagai SAP Platinum Partner melalui United VARs, Soltius mengimplementasikan dan mendampingi solusi SAP Sustainability…" — **ignored.** All hits are soltius.co.id / Soltius press coverage (intentional self-reference, not plagiarism).
- ✅ "Baris 2020 paling sering salah dikutip…" — **clean** (no match; original analytical framing).

No passage exceeds the 20-word verbatim threshold on any non-Soltius URL. Plagiarism verdict: **pass**.

## Regulation-number re-verification (task-required)
Independently corroborated against OJK-official salinan + academic/legal sources (not merely trusting the dossier):
| Cited claim | Independent corroboration | Verdict |
|---|---|---|
| Pasal 10 — laporan wajib ke OJK paling lambat 30 April; jadwal bertahap tahun buku 2019 (bank besar) → 2025 (dana pensiun aset tertentu) | OJK salinan + guidance confirm phased 2019→2025 and the 30 April deadline | pass |
| Pasal 4 — RAKB, tenggat 31 Januari bagi LJK yang tidak wajib menyampaikan rencana bisnis | Multiple sources confirm 31 Januari for LJK not required to submit a business plan | pass |
| Pasal 13 — sanksi hanya teguran/peringatan tertulis; "denda Rp1 miliar" tidak berdasar | Brawijaya law journal analysis confirms the sanction is "restricted to only one sanction" = teguran/peringatan tertulis; no denda in POJK 51 | pass |
| Pasal 1 angka 7 — perusahaan publik = ≥300 pemegang saham + modal disetor ≥Rp3 miliar | Consistent with the standard UU Pasar Modal definition | pass |
| Lampiran II — sembilan komponen isi minimum | OJK "SAL Lampiran II POJK 51" confirmed to exist as the components source | pass |

No fabricated pasal, tanggal, or nominal rupiah detected. The "denda Rp1 miliar" myth-debunk is affirmatively supported.

## EYD & structure integrity
- **EYD**: clean. Prepositional `di` written separately (di luar, di tengah) vs. verbal prefixes joined (diumumkan, diadministrasikan); foreign terms italicized (*sustainability report*, *feedback*); rupiah format Rp1 triliun / Rp3 miliar correct; punctuation and capitalization sound.
- **Structure**: all required elements present and ordered — frontmatter YAML → H1 → lead (concrete pain, no roadmap) → "Ringkasnya:" definition snippet (blockquote, article's only definition) → 4 body H2 (2 question-format; table in H2 #1, 9-item numbered list in H2 #2) → FAQ (3 Q&A) → ## Kesimpulan (1 Soltius positioning line) → soft CTA `soltius.co.id` as the final line.
- **Definisi-repetition check (addendum §7)**: definition appears only in the snippet; each post-H2 direct answer carries a new point. FAQ #2's four-aspect list is contrastive (Laporan Tahunan vs Laporan Keberlanjutan), not a restatement — acceptable.
- **Soltius mentions**: exactly 2 in body (positioning line + soft CTA); internal-link anchors do not name the brand. Compliant with the max-2 override.
- **Citations/links**: 2 internal (SCT blog cousin + Sustainability hub), 2 external OJK-official (POJK 51 salinan PDF + RPOJK-SF rancangan page). No vendor blogs.

## Loop status
Revision loop **0**. No revision required; no writer loop-back triggered.

## Recommendation to orchestrator
**Curator-ready** on this gate. Editor recommendation is `approve` and validator verdict is `pass` — the approve+pass gate is satisfied. Per batch instruction, the pipeline stops here for user review; do NOT run the curator or commit to `articles_history/` until the user confirms.
