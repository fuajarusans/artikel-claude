---
brief_id: "tanda-butuh-erp-c01"
validator_run_date: "2026-09-01"
verdict: "pass"
ai_score: 0.04
plagiarism_score: 0.00
revision_loop: 0
batch: "conditional-2026-09"
overrides_applied: "word band 800–1000 (cleaned-prose 985 — raw script 1051 NOT used to fail); FAQ 2–3; internal links 2; image checks N/A (0 placeholders, no images.json)"
---

# Quality Validator Report — 10 Tanda Perusahaan Anda Membutuhkan Sistem ERP

## Verdict: **pass**

The article clears both gates I own. The AI-detector heuristic returns 0.04/1.0 — far below the revise (0.30) and reject (0.50) thresholds — with a single low-severity flag (paragraph CV 0.402, just under the 0.45 target but well above the 0.30 strong-tell floor), so no manual-tell concern remains. Every distinctive passage I web-checked came back clean: zero verbatim lifts, only expected thematic overlap on generic ERP-symptom language, all in the article's own phrasing. Both load-bearing figures re-verified against primary sources today (Panorama 2026 ERP Report; SAP News Dec 2025). All batch-2026-09 overrides are satisfied via the cleaned-prose convention, and every full-force check (anti-AI §5, EYD, citation discipline §10, Soltius framing §11, meta block §7, structure) passes. Concurs with the editor's `approve`. Curator-ready.

## AI Detector (heuristic v2.0)
- Score: **0.04 / 1.0** (thresholds: revise ≥0.30, reject ≥0.50) → **pass**
- Paragraph burstiness (CV): **0.402** (target ≥0.45; strong-AI-tell floor <0.30 — comfortably clear)
- Sentence burstiness (CV): **1.433** (highly varied — strongly human rhythm)
- Top-30 vocab share: **0.29** (target <0.35 — clean)
- Flags (1):
  - [low] paragraph-low-variance: CV=0.402 (target ≥0.45). Non-blocking; the 10-sign parallel list narrows paragraph-length spread by design, and sentence-level burstiness (1.433) plus zero pattern hits offset it.
- Manual anti-AI cross-check (style_guide §5): no banned openers ("Di era / Seiring perkembangan / Tidak dapat dipungkiri"), no "Selain itu" consecutive-paragraph opener, no "Penting untuk dicatat", no "Dengan demikian / Sebagai kesimpulan" overuse; em-dash count **1** (≤2, inside the mandated snippet); en-dash 0; varied 1–4-sentence paragraphs; no hype-adjective stacks; no service-dump.

## Plagiarism (web lookup of distinctive passages)
Script extracted 8 candidates; I ran quoted WebSearch on every distinctive prose passage (header-glued candidates cleaned first).
- ✅ "Angka yang sama berbeda antar-departemen karena tiap tim memegang salinannya sendiri (data silo)" — clean (only generic data-silo articles, different wording)
- ✅ "Hutang-piutang lepas pantau; faktur telat tertagih dan proyeksi arus kas jadi tebakan" — clean (no phrase match)
- ✅ "Jam kerja habis menyalin data antar aplikasi dan mencocokkan spreadsheet" — clean (thematic only)
- ✅ "Menerapkannya di atas proses yang belum terdokumentasi dan master data yang kotor hanya mengodekan kekacauan lama" — clean (readiness theme common; phrasing original)
- ✅ "Sistem baru menuntut cara kerja baru, bukan sekadar aplikasi baru" — clean (no match)
- ✅ "Software akuntansi mencatat data keuangan historis … dalam satu silo" (FAQ #1) — clean (generic accounting theme; original wording)
- ✅ "Stok di sistem sering tak cocok dengan fisik; barang laris habis, barang lambat menumpuk" — clean (stock-mismatch theme common; original)
- ✅ Panorama-stat sentence — clean (matches the source it cites, which is correct attribution, not plagiarism)
- **Aggregate plagiarism score: 0.00** — no verbatim hit ≥20 words on any non-Soltius page; no partial near-match on a unique external URL.

## Fact / claim re-verification (citation discipline §10)
- **Panorama 2026 ERP Report — 170 organizations; >seperempat proyek melampaui anggaran, kerap karena kebutuhan teknologi tambahan.** CONFIRMED. Live source breakdown shows ~30% over budget (22.9% slightly + 7.1% significantly), i.e. "more than a quarter" is accurate and conservative; "additional technology" is named the most common overrun cause. Not overstated. ✓
- **SAP Business One — 83.000+ pelanggan, 170+ negara (SAP News, Des 2025).** CONFIRMED verbatim ("more than 83,000 customers … more than 170 countries"). Not rounded up. ✓
- **Dossier "DO NOT USE" figures** ("61% organisasi mengejar ERP", "nilai terukur 9 bulan"): confirmed **absent** from the article. ✓
- No formula/math present; no regulation/pasal cited → nothing further to re-check. "Tiga tanda" is framed editorially as a heuristic throughout, never cited as study data. ✓

## Batch-2026-09 overrides (recorded per assignment)
- **Word band 800–1000: COMPLIANT.** Cleaned-prose count re-run via `tools/count_words.py` = **985** (matches frontmatter). Raw `quality-check.ps1` token count (1051) over-counts table pipes/URLs and was **not** used to judge >1000, per the override.
- **FAQ 2–3: COMPLIANT** — 3 Q&As (37–54 words each, each carrying a fact/number).
- **Internal links 2: COMPLIANT** — exactly 2 (hub `mengenal-sistem-sap-dan-manfaatnya` + cousin `cara-kerja-sistem-sap-dan-fungsinya-untuk-perusahaan`); both re-verified live today (load successfully, topically correct). The same-keyword "5 tanda" page correctly NOT linked.
- **Image checks: N/A by design** — 0 `{IMAGE_NN}` placeholders (grep confirmed), no `images.json` for this batch. Not flagged.

## Structure / on-page integrity (full-force)
- meta_title **47** (≤60); meta_description **146** (140–160); slug **26** (≤60, kebab-case, keyword).
- Lead **53** words (≤80, no roadmap); definition snippet **47** words (40–60, sole definition — not restated in body/H2/FAQ); Kesimpulan **53** words (≤80); soft CTA = final line (`soltius.co.id`).
- Body H2 = **3** (≥1 question-format "Kapan Waktu…"; ≥1 practical/table H2 #1); no definitional "Apa itu ERP" H2. FAQ + Kesimpulan are separate sections.
- Table integrity OK (header + separator + 10 rows). ≥4 specific inline numbers present (10 tanda; 170 organisasi; >seperempat; 83.000; 170+ negara; 1998).
- Soltius framing: **2** self-mentions (positioning line in Kesimpulan + soft website CTA); implementer/pendamping voice, never "builds"; vendor-neutral (SAP only in FAQ #2 + CTA); no superlatives. EYD clean.

## Loop status
This is revision loop **0**. Verdict is `pass`; no writer revision needed. Curator may commit (editor `approve` + validator `pass`).
