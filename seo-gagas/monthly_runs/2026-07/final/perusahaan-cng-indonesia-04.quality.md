---
brief_id: "perusahaan-cng-indonesia-04"
validator_run_date: "2026-06-09"
verdict: "pass"
ai_score: 0.04
plagiarism_score: 0.02
revision_loop: 0
---

# Quality Validator Report — Keamanan & Keandalan Pasokan CNG: Yang Wajib Dijamin Penyedia

## Verdict: **pass**

The article clears both gates. The heuristic AI scorer returned 0.04 — well below the 0.30 revise threshold — and a manual read of the single low-severity flag (paragraph burstiness CV 0.444, marginally under the 0.45 target) confirms the shortfall is trivial: the article mixes 1-sentence asides, 3-sentence analytical paragraphs, a 5-bullet listicle, a numbered 4-item section, two tables, and a 6-Q&A FAQ block. The statistical variance measurement is borderline, not indicative of flat AI-generated prose. All 8 plagiarism candidate passages were web-searched; the aggregate score is 0.02, reflecting one partial near-match on a common cited fact (the Dirjen Migas/CNBC article, which is an intentional source citation, not lifted prose). No verbatim 20-word lift was found on any non-Gagas, non-cited-source URL. Curator-ready.

---

## AI Detector (heuristic v2.0)

- Score: **0.04** / 1.0 (thresholds: revise >= 0.30, reject >= 0.50)
- Paragraph burstiness (CV): **0.444** (target >= 0.45 — marginally short, low-severity only)
- Sentence burstiness: **0.982** (excellent — sentence lengths vary strongly)
- Top-30 vocab share: **0.274** (healthy — well below concentration risk zone)
- Flags (1):
  - [low] paragraph-low-variance: Paragraph word-count CV=0.444 (target >=0.45)

### Validator judgment on the low-severity flag

The CV of 0.444 sits 0.006 below the 0.45 target — a margin that is statistically negligible. Manual inspection of the 16 paragraphs shows genuine structural diversity: a 3-sentence lead, a 52-word blockquote snippet, a 2-sentence clarification aside, a 5-bullet list section, a 4-item numbered checklist, a 2-table data section, a 6-Q&A FAQ block, and a 2-paragraph conclusion. Sentence burstiness at 0.982 confirms the writing does not exhibit the symmetric rhythm that is the strongest AI tell (style_guide.md §5: "Symmetric paragraph lengths — strongest AI tell"). The paragraph CV value does not warrant a revise. The editor's anti-AI scan (voice score 9/10, zero hits on all eight §5 patterns) corroborates this reading. The flag is noted, not actionable.

---

## Plagiarism (web lookup of 8 distinctive passages)

Aggregate plagiarism score: **0.02**

### Passage-by-passage results

**Passage 1** — "Penyangga titik pasok pun diperluas: pada 2025 PGN Gagas membangun Mother Station CNG Medan (1 MMSCFD) dan LNG Hub Bandung (0,5 MMSCFD)."

Result: **clean**. Multiple news outlets (Investor.id, Tribunnews, Kompas Money, RuangEnergi, Telegraf, Dunia Energi, rm.id, investortrust.id) report the same PGN Gagas infrastructure facts — 1 MMSCFD Medan Mother Station, 0.5 MMSCFD Bandung LNG Hub — but in their own editorial phrasing. No source reproduces the article's specific sentence construction ("Penyangga titik pasok pun diperluas…"). These are shared factual facts, not copied prose. The article attributes the facts correctly ("PGN via ANTARA, 2025" in the body). Score contribution: +0.00.

**Passage 2** — "Permen ESDM No. 32/2021 (inspeksi teknis instalasi migas), Kepmen ESDM 176.K/2024 tentang Sistem Manajemen Keselamatan Migas (SMKM, berlaku 25 Januari 2025), dan ISO 45001:2018 (manajemen K3 yang dapat diaudit pihak ketiga)."

Result: **clean**. The ESDM/migas.esdm.go.id pages and hukumonline.com confirm these are real regulations with these exact designations, but the article's prose arrangement — listing three instruments in one explanatory sentence with parenthetical glosses — does not match any discovered page. Regulation names are facts, not copyrightable expression. Score contribution: +0.00.

**Passage 3** — "Dirjen Migas (CNBC Indonesia, 19 Mei 2026) menyebut risiko kebakaran CNG relatif lebih rendah."

Result: **partial near-match (intentional citation)** — The CNBC Indonesia article (cnbcindonesia.com/news/20260519185705-4-736079) confirmed live. The article's sentence is a paraphrase-citation of that source, not a verbatim copy. The sentence explicitly cites the source ("CNBC Indonesia, 19 Mei 2026"). This is compliant citation of an authoritative source listed in the article's own `external_citations` frontmatter and the brief's approved source list. Per the scoring rules: "Ignore any hit on … cited authoritative sources (intentional, not plagiarism)." Score contribution: +0.00 (exempted).

BeritaSatu also ran a secondary report on the same Dirjen Migas statement, confirming the claim is correctly attributed.

**Passage 4** — "Standar & Sertifikasi Keselamatan yang Wajib Dipenuhi Penyedia CNG — Untuk menilai keselamatan layanan distribusi CNG ke lokasi industri, tiga acuan yang relevan adalah…"

Result: **partial near-match (topic overlap, not phrasing overlap)**. The solarindustri.com page ("Apakah CNG aman? Simak Risiko dan Standar Keselamatannya") covers similar terrain — CNG safety standards — but its angle is product safety for general audiences, not the three-instrument Permen/Kepmen/ISO 45001 framework for distribution operators this article argues. No sentence from solarindustri.com matches the article's framing. The H2 heading text shares topic vocabulary but is structurally distinct. Near-match on topic: yes; on phrasing: no. Score contribution: +0.02 (conservative partial credit for topic proximity; this does not reach the 70% word-order overlap threshold for a "partial near-match").

**Passage 5** — "Sebagai gambaran, infrastruktur PGN sebagai induk grup menjaga keandalan di level 99,9% dengan Tim Penanganan Gangguan bersiaga 24 jam (PGN via ANTARA, 2025)."

Result: **clean**. Search found multiple PGN Satgas RAFI 2026 press releases (WartaBromo, KampusSemarang, RuangEnergi, JatengPos) mentioning "Tim Penanganan Gangguan siap disiagakan selama 24 jam" — phrasing from PGN's own PR language. The article's sentence is an independent paraphrase of that PGN communications material, properly attributed ("PGN via ANTARA, 2025"). The specific 99.9% keandalan figure was not found reproduced elsewhere verbatim, consistent with the editor's note that this figure came from the dossier. Score contribution: +0.00.

**Passage 6** — "Penyedia andal dapat menjelaskan sumber gas, kapasitas Mother Station, rencana cadangan armada GTM, pemantauan tekanan real-time, serta SLA dengan waktu respons tertulis."

Result: **clean**. No search hit returned any page reproducing this sentence or any close paraphrase of it as a structured checklist. The rajawalichaktiutama.com Mother Station page covers infrastructure basics; it does not replicate this five-point supplier-capability framework. Score contribution: +0.00.

**Passage 7** — "'Aman' diterjemahkan menjadi sertifikat berlingkup tepat dan inspeksi sesuai Permen ESDM 32/2021; 'andal' menjadi kapasitas Mother Station, redundansi armada, telemetri, dan SLA tertulis."

Result: **clean**. The Permen ESDM 32/2021 official texts (jdih.esdm.go.id, peraturan.bpk.go.id, jdih.maritim.go.id) are bare regulatory documents, not editorial synthesis. No source outside this article structures "aman vs andal" as a conceptual binary mapped to specific evidence types in this way. Original construction. Score contribution: +0.00.

**Passage 8** — "Risiko utama meliputi kebocoran (dimitigasi detektor gas, ventilasi, inspeksi), tekanan berlebih (Pressure Relief Device dan pemeriksaan PRS rutin), kegagalan komponen, serta kesalahan operator."

Result: **clean**. indonesiasafetycenter.org and jurnal K3 pages discuss gas leak risk mitigation generically; none reproduce this article's four-item risk enumeration in this syntactic structure. Generic safety vocabulary ("detektor gas", "ventilasi", "Pressure Relief Device") is shared domain terminology — equivalent to "ISO adalah…" for standard names. Score contribution: +0.00.

### Plagiarism score summary

| Passage | Classification | Score contribution |
|---|---|---|
| 1 — Mother Station/LNG Hub facts | Clean (shared factual domain, attributed) | +0.00 |
| 2 — Permen/Kepmen/ISO 45001 list | Clean (regulation names = facts) | +0.00 |
| 3 — Dirjen Migas CNBC citation | Exempted (intentional cited source) | +0.00 |
| 4 — H2 + distribusi CNG intro | Partial near-match on topic only (<70% word-order overlap) | +0.02 |
| 5 — PGN 99.9% / Tim Penanganan Gangguan | Clean (attributed paraphrase of PGN comms) | +0.00 |
| 6 — Penyedia andal checklist | Clean | +0.00 |
| 7 — Aman vs andal binary | Clean (original editorial construction) | +0.00 |
| 8 — Risiko utama enumeration | Clean (shared domain terminology) | +0.00 |
| **Aggregate** | | **0.02** |

Threshold: pass < 0.10, revise >= 0.10, reject >= 0.25. **Verdict: pass.**

---

## Aggregate verdict

| Gate | Score | Threshold | Verdict |
|---|---|---|---|
| AI detector | 0.04 | revise >= 0.30 | pass |
| Plagiarism | 0.02 | revise >= 0.10 | pass |
| **Overall (worst of two)** | | | **pass** |

---

## Loop status

This is revision loop **0**. No revision required. Article is curator-ready.

Inherited editor recommendation: **approve** (9/10). Both gates clear independently. No conflict.
