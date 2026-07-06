---
brief_id: "business-intelligence-04"
validator_run_date: "2026-06-03"
verdict: "pass"
ai_score: 0.10
plagiarism_score: 0.00
revision_loop: 0
---

# Quality Validator Report — Self-Service BI vs BI Tradisional: Framework Keputusan untuk Perusahaan Anda

## Verdict: **pass**

The article clears both quality gates. The AI heuristic score is 0.10 (well below the 0.30 revise threshold), paragraph burstiness CV is 0.481 (above the 0.45 minimum), and sentence burstiness is strong at 1.071 — indicating genuine length variation rather than machine-uniform rhythm. All 8 distinctive passages checked against the web returned zero exact or near-exact matches on any non-Soltius public page; plagiarism score is 0.00. The single script flag (em-dash count = 4) was investigated and dismissed: all four em-dashes appear inside image placeholder descriptions and table row labels (structural/design direction), not in prose — exactly the exemption documented in the editor's changelog and style_guide.md §5. Editor recommendation is "approve". The article is curator-ready.

---

## AI Detector (heuristic v2.0)

- Score: **0.10** / 1.0 (thresholds: revise ≥0.30, reject ≥0.50) — **PASS**
- Paragraph burstiness (CV): **0.481** (target ≥0.45) — PASS
- Sentence burstiness: **1.071** — PASS (strong variation)
- Top-30 vocab share: **0.341** — PASS
- Flags (1):
  - [medium] em-dash-overuse: "Em-dashes count: 4 (max 2)" — **DISMISSED**

### Em-dash flag investigation

Script found 4 em-dash characters. Manual grep confirms all 4 occur in structural/non-prose contexts:

- Line 48: `{IMAGE_01: ... "Self-Service BI vs BI Tradisional" — kolom kiri ...}` — inside image placeholder
- Line 90: `{IMAGE_02: ... "Analytics Maturity Model" — Level 1 ...}` — inside image placeholder
- Line 98: `| **1 — Reaktif** |` — inside markdown table cell (level label)
- Line 101: `| **4 — Prediktif** |` — inside markdown table cell (level label)

Zero prose em-dashes in article body. The editor removed all 21 prose em-dashes from the draft; these 4 are structural. Flag does not affect verdict.

---

## Plagiarism (web lookup of distinctive passages)

8 candidate passages extracted from quality-input.json. All checked via WebSearch (1 probe per candidate). No hits on soltius.co.id or metrodata are treated as intentional self-reference per agent rules.

- **Passage 1** (score 18): "Bagian ini jarang ditulis, padahal inilah yang paling sering terjadi" — search returned zero results for this exact phrase in any BI context. **Clean.**
- **Passage 2** (score 16): "Smart Insights dan Smart Discovery secara proaktif menemukan anomali dan menjelaskan perubahan KPI tanpa pengguna perlu memformulasikan pertanyaannya" — no match for this Bahasa Indonesia phrasing. Results returned English SAP documentation only. **Clean.**
- **Passage 3** (score 13): "perusahaan melompat ke Level 3 tanpa infrastruktur Level 1–2 yang solid dan harus kembali ke langkah pertama enam bulan kemudian" — no match found on any public Bahasa Indonesia BI page. **Clean.**
- **Passage 4** (score 10): "Fitur augmented analytics bawaan SAC, yaitu Smart Insights dan Smart Discovery, adalah evolusi selanjutnya: AI memperpendek jarak data ke insight secara otomatis" — results returned only English SAP partner blogs (nextlytics.com, big-cube.com) with no overlap in phrasing. **Clean.**
- **Passage 5** (score 10): "Untuk sebagian besar perusahaan Indonesia di Level 1–2, jawabannya adalah membangun fondasi BI tradisional yang kuat terlebih dahulu" — no match found. **Clean.**
- **Passage 6** (score 10): "Ketika setiap departemen bebas membuat dashboard sendiri tanpa definisi metrik terpusat, konflik angka hampir pasti muncul" — results returned general dashboard and "semantic drift" articles (Tableau, Qontak, etc.) with no phrasing overlap. The concept is common; the specific sentence construction is original. **Clean.**
- **Passage 7** (score 8): "FAQ (Pertanyaan yang Sering Diajukan) — Apa itu self-service business intelligence?" — results returned English BI comparison guides (atlan.com, yellowfinbi.com, techtarget.com, supaboard.ai) with no Bahasa Indonesia FAQ content matching this article's text. **Clean.**
- **Passage 8** (score 8): "BI tradisional tetap relevan di Level 1–2 kematangan analitik: data masih tersebar, belum ada single source of truth, atau semantic layer belum dibangun" — no match found. Results returned semantic layer architecture articles with no Bahasa Indonesia phrasing overlap. **Clean.**

**Aggregate plagiarism score: 0.00**
(0 exact matches + 0 partial near-matches × weight = 0.00; threshold: revise ≥0.10)

---

## Loop status

This is revision loop **0** (first and only pass). Verdict is **pass** — no loop triggered.

---

## Curator note

Article `business-intelligence-04` is approved for commit:
- Editor recommendation: **approve**
- Validator verdict: **pass**
- AI score: 0.10 (clear)
- Plagiarism score: 0.00 (clean)
- Revision loops: 0

The curator may proceed to commit `monthly_runs/2026-06/final/business-intelligence-04.id.md` to `articles_history/` and generate the `.docx`.
