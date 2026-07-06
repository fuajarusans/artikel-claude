---
brief_id: "gaslink-02"
validator_run_date: "2026-06-09"
verdict: "pass"
ai_score: 0.00
plagiarism_score: 0.00
revision_loop: 0
---

# Quality Validator Report — Gaslink vs LPG vs Solar: Perbandingan Biaya & Efisiensi Industri

## Verdict: **pass**

The article clears both gates cleanly. The heuristic AI detector fires zero flags with an AI score of 0.00/1.0, and paragraph burstiness (CV 0.634) is well above the 0.45 human-writing threshold. All eight plagiarism candidate passages were web-searched; zero verbatim or near-verbatim matches were found on any non-Gagas external domain. The one cited secondary source (laskarteknik.co.id) that returns for the calorific-value figures is already credited as a citation in the article body — that is not plagiarism, it is disclosed sourcing. The article is distinct from the committed sibling gaslink-01 (definitional angle, Jaccard ~0.11). Curator may proceed to commit.

---

## AI Detector (heuristic v2.0)

- Score: **0.00** / 1.0 (thresholds: revise ≥0.30, reject ≥0.50)
- Paragraph burstiness (CV): **0.634** (target ≥0.45 — strong pass; human writers typically 0.45–0.75)
- Sentence burstiness (CV): **0.963** (target ≥0.45 — exceptionally varied sentence lengths)
- Top-30 vocab share: **0.317** (target <0.35 — acceptable; borderline but below threshold)
- Flags: **0**

No Indonesian AI-tell patterns triggered: zero "Selain itu" consecutive paragraph openers, zero "Penting untuk dicatat/diingat/dipahami bahwa", zero era-filler phrases, zero "Dengan demikian" overuse, zero "Sebagai kesimpulan", zero em-dash overuse (body is em-dash-free per editor fix). The paragraph and sentence rhythm metrics both confirm deliberate human variation — 19 prose paragraphs ranging from 1-sentence snapshots to dense multi-clause blocks, 88 sentences with a sentence-length CV of 0.963 (well into human territory).

Manual spot-read of the six highest-scored flagged style risks: the opening lead paragraph (pain-hook structure, concrete problem framing), the HGBT section (two short declarative sentences replacing the original em-dash construction), the honest-contraindications H2 (bulleted list with prose lead-in, not a symmetric 3-bullet robot block), and the conclusion (forward-looking, no "Sebagai kesimpulan"). All confirm the editor's anti-AI assessment.

**AI verdict: pass**

---

## Plagiarism (web lookup of 8 distinctive candidate passages)

Script extracted 8 candidate passages ranked by distinctiveness score (presence of numbers + named entities + low stop-word share). Heading-only candidates (candidates 6, 7, 8) carry negligible plagiarism risk by nature; all were searched for completeness.

**Candidate 1 — Score 27**
Passage: "Pemerintah menetapkan Harga Gas Bumi Tertentu (HGBT) USD 7/MMBTU lewat Kepmen ESDM No."
Search results: Multiple results found (esdm.go.id, liputan6.com, cnbcindonesia.com, antaranews.com, suarapemerintah.id) all reporting on the same public regulatory fact — Kepmen ESDM No. 76.K/2025 establishing HGBT at USD 7/MMBTU. None reproduce the article's exact phrasing "lewat Kepmen ESDM No." — this is the article's own sentence construction around a publicly known regulatory fact. Sources report "Keputusan Menteri ESDM Nomor 76.K/MG.01/MEM.M/2025" in Indonesian bureaucratic style; the article synthesizes it differently. **Classification: clean — standard regulatory reference, no phrasing match.**

**Candidate 2 — Score 25**
Passage: "Pemerintah memproyeksikan efisiensi hingga ~30% dalam roadmap konversi LPG ke CNG (Ditjen Migas ESDM, 2026), dan contoh perhotelan 2017 menyebut 20–50% dibanding LPG."
Search results: migas.esdm.go.id (cited source in article), cnbcindonesia.com, liputan6.com, transisienergiberkeadilan.id all discuss the ~30% efficiency projection in the LPG-to-CNG roadmap context. No external page reproduces the article's specific combined sentence ("dan contoh perhotelan 2017 menyebut 20–50%"). The ~30% figure is the article's cited sourced claim (Ditjen Migas ESDM, Mei 2026, explicitly listed in frontmatter external_citations). **Classification: clean — cited sourced fact, no sentence-level phrasing match.**

**Candidate 3 — Score 24**
Passage: "Karena tiap satuan fisik membawa energi berbeda: satu liter solar ~9.150 kkal, satu kilogram LPG ~11.823 kkal, satu meter kubik gas bumi ~9.000–11.000 kkal."
Search results: laskarteknik.co.id returned for the specific values 9.150 kkal and 11.823 kkal — this site is cited in the article's table footnote as one of the two acknowledged sources for the calorific-value data. No page reproduces the complete sentence with all three values in this exact Bahasa Indonesia phrasing. The sentence structure and framing are original to the article. **Classification: clean — cited secondary source for underlying data; article's sentence construction is original.**

**Candidate 4 — Score 23**
Passage: "Sebagai gambaran harga publik, LPG nonsubsidi diproyeksikan ~USD 22/MMBTU sementara CNG tabung ~USD 10–15/MMBTU."
Search results: bloombergtechnoz.com and asatunews.co.id discuss CNG vs LPG pricing in general terms (CNG at ~USD 15/MMBTU, LPG at ~USD 22/MMBTU in various forms). No external source reproduces the article's specific sentence with "Sebagai gambaran harga publik" framing or the exact combined "~USD 22/MMBTU sementara CNG tabung ~USD 10–15/MMBTU" phrasing. The price figures are disclosed in the article as "rentang referensi bertahun, BUKAN harga Gaslink aktual" — public domain industry ranges, not a lifted passage. **Classification: clean — standard public pricing reference, sentence construction is original.**

**Candidate 5 — Score 20**
Passage: "Pemerintah menetapkan HGBT USD 7/MMBTU, tetapi hanya untuk 7 sektor industri tertentu (pupuk, baja, dll.), bukan pelanggan komersial umum."
Search results: indonesia.go.id, antaranews.com, niaga.asia, suaraenergi.com all report on HGBT for 7 sectors including pupuk, baja. No source uses the "bukan pelanggan komersial umum" qualifier — that is the article's own editorial addition clarifying the scope for Gaslink's typical customers. This sentence is a synthesis, not a lift. **Classification: clean — editorial synthesis from public regulatory facts, no phrasing match.**

**Candidate 6 — Score 18**
Passage: "## Bagaimana Cara Menghitung Penghematan Jika Beralih dari Solar ke Gas Bumi?" (H2 heading)
Search results: No page reproduces this exact H2 heading. Results about switching from solar/diesel to gas were generic engineering or solar-panel articles with no phrasing overlap. **Classification: clean — original heading.**

**Candidate 7 — Score 18**
Passage: "## Payback dan Ambang Volume: Kapan Peralihan Mulai Masuk Akal" + "Tidak ada angka payback tunggal." (H2 + opener)
Search results: No external source found with this heading or "Tidak ada angka payback tunggal" phrasing. Results were about PGN gas supply disruptions and unrelated scientific papers. **Classification: clean — original heading and sentence.**

**Candidate 8 — Score 16**
Passage: "# Gaslink vs LPG vs Solar: Perbandingan Biaya & Efisiensi Industri Anda sudah tahu gas bumi berpotensi lebih hemat."
Search results: gagas.co.id/gaslink returned (intentional self-reference, not plagiarism); other results were generic LPG/CNG comparison articles with no phrasing match to the article's specific lead. **Classification: clean — original H1 and pain-hook sentence.**

**Aggregate plagiarism score: 0.00**
(0 exact matches on non-Gagas URLs; 0 partial near-matches; calorific-value figures correctly attributed to cited laskarteknik.co.id source)

**Plagiarism verdict: pass** (threshold: revise if score ≥0.10 or any 20+ word verbatim hit on non-Gagas URL — neither condition met)

---

## Internal deduplication check (gaslink-01)

Confirmed distinct from committed sibling `apa-itu-gaslink-gas-bumi-tanpa-pipa.md` (gaslink-01). Gaslink-01 covers the definitional/beyond-pipeline angle and supply chain mechanics (Mother Station → GTM → PRS). Gaslink-02 covers the cost-comparison/per-MMBTU methodology, payback framework, and honest threshold analysis. Shared terms: "CNG untuk industri" and "smart metering" — both are domain vocabulary, not structural overlap. Editor's Jaccard estimate of ~0.11 is consistent with this analysis. No near-duplication risk.

---

## Loop status

This is revision loop **0**. Verdict is `pass` — no writer loop required.

---

## Curator guidance

Both gates pass:
- Editor recommendation: `approve` (score 9/10, 2026-06-09)
- Validator verdict: `pass` (AI score 0.00, plagiarism score 0.00, 2026-06-09)

Article is curator-ready for commit to `articles_history/by_keyword/gaslink/` and `.docx` build.
