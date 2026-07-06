---
brief_id: "cng-indonesia-01"
validator_run_date: "2026-06-09"
verdict: "pass"
ai_score: 0.04
plagiarism_score: 0.00
revision_loop: 0
---

# Quality Validator Report — Apa Itu CNG (Compressed Natural Gas) dan Cara Kerjanya

## Verdict: **pass**

The article clears both gates. AI heuristic score is 0.04 — well below the 0.30 revise threshold — with one low-severity flag (paragraph burstiness CV=0.428, marginally below the 0.45 target) that does not approach the reject floor. Manual review of the flagged paragraph distribution confirms meaningful rhythm variation: the article mixes 1-sentence paragraphs with 5–6-sentence blocks, a 7-step numbered list, a comparison table, and an FAQ. The CV dip is attributable to the structured comparison table and 7-step list anchoring paragraph lengths toward a mid-range cluster; it does not read as machine-generated. Plagiarism lookup across all 8 candidate passages returned zero exact or near-exact matches on any non-Gagas public page. All distinctive formulations are original to this article. Editor recommendation was `approve` (9/10). Curator may commit.

---

## AI Detector (heuristic v2.0)

- Score: **0.04** / 1.0 (thresholds: revise >=0.30, reject >=0.50)
- Paragraph burstiness (CV): **0.428** (target >=0.45) — marginally below target; manual review confirms genuine rhythm variation; not a disqualifying signal at this score level
- Sentence burstiness: **0.90** (strong — well above any concern threshold)
- Top-30 vocab share: **0.326** (low concentration — strong originality signal)
- Flags (1):
  - [low] paragraph-low-variance: Paragraph word-count CV=0.428 (target >=0.45) — attributable to the structured elements (7-step numbered list, comparison table) pulling paragraph word-counts toward a mid-range cluster; prose-only sections show healthy 1–6-sentence variation. Not an AI-pattern trigger at this AI score.

**Manual review of style_guide.md §5 anti-AI matrix:** The single low flag does not trigger a manual review requirement (AI score 0.04 vs. threshold 0.28–0.32 borderline zone). No anti-AI pattern from §5 was detected: no forbidden openers, no consecutive "Selain itu" starts, no "Penting untuk dicatat", no "Dengan demikian" overuse, no "Sebagai kesimpulan" opener, em-dash count at 1 in prose (limit <=2), paragraph lengths vary 1–6 sentences across sections, H2s are not uniformly followed by 3-bullet lists. Score verdict: **pass**.

---

## Plagiarism (web lookup of distinctive passages)

8 candidate passages checked via WebSearch.

- Passage 1: "CNG Bukan Cuma 'Pengganti LPG 3 Kg': Meluruskan Salah Kaprah — Karena gelombang berita 2026, banyak orang mengira CNG identik dengan program tabung 3 kg rumah tangga." — News results (Detik, CNN Indonesia, Kompas, CNBC) discuss the same topic angle but no page reproduces this exact sentence formulation. Original. **clean**

- Passage 2: "Komponen utamanya metana (CH4); menurut Ditjen Migas ESDM, gas dikompresi hingga 200–250 bar sehingga volumenya menyusut menjadi sekitar 1/250." — Ditjen Migas ESDM page and solarindustri.com contain the underlying technical facts (CH4, 200–250 bar, volume ratio). These are standard definitional specs from the cited regulator; the sentence construction is original to this article. Shared terminology from cited source, not copying. **clean**

- Passage 3: "LNG (Liquefied Natural Gas) didinginkan hingga sekitar -163°C sampai mencair, sehingga volumenya menyusut jauh lebih ekstrem, sekitar 1/600 (Ditjen Migas ESDM)." — The Ditjen Migas ESDM page is the authoritative source that the article correctly attributes inline. solarindustri.com discusses LNG distribution without matching phrasing. This is a properly cited factual claim, not plagiarism. **clean**

- Passage 4: "Akibatnya, sekitar 80–84% kebutuhan LPG nasional harus diimpor (CNBC Indonesia, Mei 2026)." — Multiple CNBC Indonesia articles from May 2026 confirm this figure in public reporting. The article correctly attributes the source inline. The exact sentence construction does not appear verbatim on any non-Gagas page. **clean**

- Passage 5: "Kompresi di Mother Station. Kompresor memampatkan gas hingga sekitar 200–250 bar, menyusutkan volumenya ke kisaran 1/250 (Ditjen Migas ESDM)." — Search returned compressor equipment pages (Alibaba, ResearchGate, Atlas Copco) and a Ditjen Migas ESDM PDF, but no verbatim sentence match. **clean**

- Passage 6: "Apa Itu CNG (Compressed Natural Gas) dan Cara Kerjanya — Sejak awal 2026, istilah CNG mendadak ramai di pemberitaan karena pemerintah menyiapkannya sebagai alternatif energi rumah tangga." — Results show topically related articles (Viva, Tempo, Antara, CNBC) but the specific lead construction — "mendadak ramai di pemberitaan" + "dari manajer pabrik sampai orang awam, masih bingung" — does not appear on any public page. **clean**

- Passage 7: "Penetrasinya masih kecil: dari data ESDM 2023, BBG transportasi hanya sekitar 0,16% konsumsi gas domestik." — ESDM official site confirms BBG transport allocated ~5.86 BBTUD in 2023 (underlying data consistent with 0.16% of total ~3.745 MMBTU/day domestic consumption). No page reproduces this exact sentence formulation with the 0.16% figure. **clean**

- Passage 8: "CNG dan gas pipa sama-sama gas bumi (metana), hanya beda cara distribusi: gas pipa mengalir lewat jaringan permanen pada tekanan rendah, CNG dikompresi 200–250 bar lalu diangkut truk." — Conceptually well-covered in industry pages (BPH Migas, Kian Mulia, Babel Insight) but no verbatim sentence match found. The specific comparative formulation is original. **clean**

**Aggregate plagiarism score: 0.00**
No exact verbatim matches (>=20 words) on any non-Gagas public page. No partial near-matches (>70% word-order overlap). Shared technical terminology from properly cited sources (Ditjen Migas ESDM, CNBC Indonesia) is standard definitional phrasing, excluded per scoring rules. Plagiarism verdict: **pass**.

---

## Loop status

This is revision loop 0. No revision needed. Both gates pass.

---

## Final disposition

- AI score: 0.04 — pass
- Plagiarism score: 0.00 — pass
- Editor recommendation: approve (9/10)
- Overall verdict: **pass**
- Recommendation to orchestrator: **curator-ready** — commit to history, build .docx.
