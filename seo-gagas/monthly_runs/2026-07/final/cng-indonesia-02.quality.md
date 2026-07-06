---
brief_id: "cng-indonesia-02"
validator_run_date: "2026-06-09"
verdict: "pass"
ai_score: 0.04
plagiarism_score: 0.00
revision_loop: 0
---

# Quality Validator Report — CNG vs LNG vs LPG: Apa Bedanya dan Kapan Pakai yang Mana

## Verdict: **pass**

All eight plagiarism candidates returned clean — no verbatim match (20+ words) found on any non-Gagas public page, and no near-match (>70% word-order overlap) found either. Technical data points shared across candidate passages (pressure specs, temperature figures, caloric values) are inherently non-copyrightable standard engineering data sourced from Ditjen Migas ESDM and cited openly; the article's sentence constructions are demonstrably its own. AI heuristic score is 0.04, far below the 0.30 revise threshold; the one low-severity flag (paragraph burstiness CV = 0.413, target ≥0.45) does not reach the hard floor (CV < 0.30) and is rebutted by strong sentence burstiness (1.055), healthy vocabulary distribution (top-30 share = 0.283), and manual confirmation of genuine paragraph-length variation. Article is curator-ready.

---

## AI Detector (heuristic v2.0)

- Score: **0.04** / 1.0 (thresholds: revise ≥0.30, reject ≥0.50)
- Paragraph burstiness (CV): **0.413** (target ≥0.45 — see note below)
- Sentence burstiness: **1.055** (strong; well above threshold)
- Top-30 vocab share: **0.283** (healthy; no vocabulary concentration)
- Flags (1):
  - [low] paragraph-low-variance: Paragraph word-count CV=0.413 (target ≥0.45)

**Flag note — low severity, not blocking.** The style_guide hard floor for rejection is CV < 0.30; this article at 0.413 clears that floor by a meaningful margin. Manual re-read of the 22 paragraphs confirms genuine length variation: single-sentence declaratives ("Inilah simpul kebingungannya."; "Perbedaan asal ini bukan trivia.") alternate with 4–5-sentence analytical blocks. The slight CV compression is attributable to the article's structured comparison format (three parallel objects require consistent density across sections), not to AI-pattern repetition. Sentence burstiness at 1.055 and zero pattern flags on all nine style_guide §5 checks reinforce that this is not a statistical AI tell — it is an artifact of the topic structure. No action required.

---

## Plagiarism (web lookup of distinctive passages)

8 candidate passages checked via WebSearch. Scoring: exact match ≥20 words on unique non-Gagas URL = +0.05; partial near-match >70% word-order overlap = +0.02; hits on gagas.co.id or cited authoritative sources = ignored; standard technical definitions = ignored.

**Passage 1** — "Wujud & cara dimampatkan: CNG dikompresi (~200–250 bar, tetap gas), LNG didinginkan (~-162°C, jadi cair), LPG dicairkan dengan tekanan ringan (~8 bar)."
Result: clean. Many Indonesian sites (MetroTV, Tricore, Dataloka, Listrik Indonesia) discuss CNG/LNG/LPG pressure specs, but none use this sentence construction. The underlying numbers (200–250 bar, -162°C, 8 bar) are cited from Ditjen Migas ESDM — standard technical data, not copyrightable phrasing. Score contribution: 0.00.

**Passage 2** — "Perbedaan Mendasar: Asal, Wujud, Tekanan, dan Nilai Kalori / Empat sumbu membedakan ketiganya."
Result: clean. No public page uses "empat sumbu membedakan ketiganya" or the specific four-axis framing (Asal, Wujud, Tekanan, Nilai Kalori) as an analytical structure. The AlvinDocs and KarbonAktif articles use different structural approaches. Score contribution: 0.00.

**Passage 3** — "Lewat skema terbaru (Kepmen ESDM, ditandatangani 26 Februari 2025, mencakup 7 sektor industri), harga itu dipatok USD 7/MMBTU untuk bahan bakar dan USD 6,5/MMBTU untuk bahan baku."
Result: clean. The HGBT facts (Kepmen No. 76.K/MG.01/MEM.M/2025, 26 Feb 2025, USD 7/USD 6.5 per MMBTU, 7 sectors) are confirmed by Kontan, CNBC, ESDM, Antara, Niaga.Asia, and others. The article cites the ESDM source directly in its frontmatter. This is a factual government policy citation — the sentence construction is the article's own and does not reproduce any third-party phrasing. Score contribution: 0.00.

**Passage 4** — "Apakah CNG industri sama dengan tabung CNG 3 kg pengganti LPG?"
Result: clean. The topic of CNG 3 kg vs industrial CNG is widely covered (Detik, Kompas, CNN Indonesia, CNBC Indonesia, May 2026), but no source uses this exact question as a heading. The article's framing ("jebakan logika") and the disambiguation approach are original. Score contribution: 0.00.

**Passage 5** — "CNG (Compressed Natural Gas), LNG (Liquefied Natural Gas), dan LPG (Liquefied Petroleum Gas) adalah tiga jenis bahan bakar gas yang berbeda asal dan cara penyimpanannya."
Result: clean. Many comparison articles define all three gases, but no source uses "berbeda asal dan cara penyimpanannya" as the closing differentiator in a definitional sentence of this exact construction. Score contribution: 0.00.

**Passage 6** — "CNG dan LNG sebenarnya berasal dari gas bumi yang sama, keduanya berbasis metana (CH4)."
Result: clean. PGN LNG's site (pgnlng.co.id) states "CNG sebenarnya merupakan gas yang sama dengan LNG, hanya saja pada CNG, gas metana dikompresi namun tidak sampai mencair." The concept is identical (same base gas, methane), as expected for a technical fact. The sentence structures differ: PGN LNG uses "merupakan gas yang sama" + "hanya saja"; this article uses "berasal dari gas bumi yang sama, keduanya berbasis metana". Overlap is below the 70% word-order threshold and the shared concept is inherent CNG/LNG domain knowledge. Score contribution: 0.00.

**Passage 7** — "CNG disimpan di ~200–250 bar, LPG hanya ~8 bar, sehingga regulator LPG standar tidak aman untuk tekanan CNG."
Result: clean. NIS Regulator, JurnalLugas, Bisnis.com, and CNBC Indonesia all discuss regulator incompatibility between CNG and LPG following the 2026 LPG-to-CNG transition news, but none reproduce this sentence. The concept (regulator safety incompatibility) is a shared engineering fact; the specific phrasing is the article's own. Score contribution: 0.00.

**Passage 8** — "CNG (~200–250 bar) dan LPG (~8 bar) beroperasi pada tekanan yang sangat berbeda, sehingga regulator LPG standar tidak mampu menangani CNG dan penggunaan silang berisiko kebocoran."
Result: clean. Same topic cluster as Passage 7. Alekkurniawan.com and JurnalLugas discuss cross-use risks in detail, but their sentences ("sebuah regulator standar akan langsung jebol jika dipaksa menahan tekanan 200 bar") differ structurally from this article's phrasing. Score contribution: 0.00.

**Aggregate plagiarism score: 0.00** (threshold: revise ≥0.10, reject ≥0.25)
Plagiarism verdict: **pass**

---

## Loop status

This is revision loop 0 (first pass). Verdict is pass — no revision loop initiated.

---

## Curator recommendation

**Curator-ready.** Editor recommendation: approve (9/10). Validator verdict: pass. AI score 0.04, plagiarism score 0.00. Article may be committed to history and converted to .docx.
