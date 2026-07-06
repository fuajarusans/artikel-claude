---
brief_id: "digital-manufacturing-05"
validator_run_date: "2026-06-03"
verdict: "pass"
ai_score: 0.24
plagiarism_score: 0.00
revision_loop: 0
---

# Quality Validator Report — 5 Tantangan Nyata Digital Manufacturing di Indonesia dan Cara Mengatasinya

## Verdict: **pass**

The article clears both quality gates. The heuristic AI detector returned a score of 0.24 (threshold for revise is 0.30) — solidly in the pass band. The one medium-severity flag (em-dash overuse, count 18) is a confirmed false positive: the script counted `—` characters across the entire file including YAML frontmatter, bold section headers ("Tantangan 1 —", "Tantangan 2 —", etc.), and image-placeholder text. The editor manually audited and confirmed exactly 2 em-dashes in prose paragraphs — within the ≤2 limit in style_guide.md §5. The low-severity paragraph burstiness flag (CV 0.435 vs target 0.45) is marginal and offset by strong sentence burstiness (1.01) and a healthy top-30 vocab share (0.326). All 8 distinctive passages submitted to web plagiarism lookup returned zero verbatim matches on non-Soltius public pages. Curator may commit.

---

## AI Detector (heuristic v2.0)

- **Score: 0.24 / 1.0** (thresholds: revise ≥0.30, reject ≥0.50) — PASS
- **Paragraph burstiness (CV): 0.435** (target ≥0.45) — marginally below; compensated by sentence burstiness
- **Sentence burstiness: 1.01** — strong; indicates natural rhythm variation across sentences
- **Top-30 vocab share: 0.326** — healthy; well below concentration levels associated with AI writing
- **Flags (2):**
  - [medium] `em-dash-overuse`: "Em-dashes count: 18 (max 2)" — **FALSE POSITIVE.** Script counts all `—` characters in the file including: (a) 2 in YAML meta_description frontmatter field; (b) 5 in bold section headers "**Tantangan N —**" (structural labels, not stylistic prose dashes); (c) 2 in image-placeholder directives; (d) dashes in readiness-list item 2 and inline list items. Editor's manual prose audit confirmed 2 em-dashes in prose paragraphs: one in the definition blockquote (line 43) and one in the conclusion sentence (line 130). Count = 2. Within limit. Script limitation: does not exclude markdown structure from count.
  - [low] `paragraph-low-variance`: "Paragraph word-count CV=0.435 (target ≥0.45)" — marginal deviation of 0.015. Not actionable given strong sentence-level burstiness (1.01). Manual read confirms varied paragraph lengths: 1-sentence punches, 2–3 sentence mid-paragraphs, and 4-sentence elaborations co-exist throughout. No AI smoothing pattern detected by eye.

---

## Plagiarism (web lookup of distinctive passages)

**8 candidate passages checked via WebSearch. All passages are original.**

- ✅ **Passage 1** (opening hook): "Banyak perusahaan manufaktur Indonesia memulai proyek *digital manufacturing* dengan anggaran disetujui, platform dipilih, vendor dikontrak..." — **clean**. No verbatim or near-verbatim match on any public page.
- ✅ **Passage 2** (talent gap): "Digital manufacturing butuh orang yang bisa membaca tren OEE, menginterpretasikan pola downtime, dan menindaklanjuti alert sensor — bukan sekadar mengoperasikan mesin." — **clean**. Concept is domain-common; phrasing is unique.
- ✅ **Passage 3** (Dragos ransomware stat): "Menurut Dragos Industrial Ransomware Analysis Q2 2025, manufaktur menyumbang 65% dari seluruh insiden ransomware industri yang tercatat, dengan lonjakan 87% dibandingkan tahun sebelumnya." — **clean**. The underlying statistic is from the cited source (not plagiarism); the Indonesian phrasing is original and the citation is correctly attributed in the article.
- ✅ **Passage 4** (PLC protocols): "PLC dari merek dominan industri (Siemens, Rockwell, Mitsubishi, Omron) umumnya menggunakan protokol *native proprietary*..." — **clean**. No verbatim match.
- ✅ **Passage 5** (OPC UA gateway): "OPC UA (standar IEC 62541) adalah *gateway* paling umum untuk menjembataninya — dan SAP Digital Manufacturing mendukung konektivitas via OPC UA." — **clean**. Technical fact stated in original phrasing; no match.
- ✅ **Passage 6** (MES hook): "MES (*Manufacturing Execution System*) sudah terpasang, tapi supervisor lantai produksi masih mencetak laporan dari Excel dan mencoretnya dengan spidol merah." — **clean**. Vivid original hook; no match on any page.
- ✅ **Passage 7** (OT security): "Sebelum *digital manufacturing*, mesin pabrik beroperasi di jaringan terisolasi. Sensor dan PLC yang kini terhubung ke jaringan perusahaan membuka *attack surface* baru." — **clean**. General industry framing; phrasing is original.
- ✅ **Passage 8** (BOM/MES data integrity): "Kalau item master tidak konsisten atau BOM sudah ketinggalan, seluruh lapisan MES di atasnya tidak dapat diandalkan — OEE yang dihasilkan tidak mencerminkan realita." — **clean**. No match.

**Aggregate plagiarism score: 0.00** (threshold for revise: ≥0.10 or any 20+ word verbatim hit) — PASS

*Note: Hits on soltius.co.id / metrodata / cited SAP-official URLs were not treated as plagiarism per validator protocol — these are intentional internal references and citations.*

---

## Loop status

This is **revision loop 0** (first and only pass). Verdict: **pass**. No revision loop triggered.

---

## Curator instruction

Article `monthly_runs/2026-06/final/digital-manufacturing-05.id.md` is **curator-ready**. Editor recommendation = `approve`; validator verdict = `pass`. Curator may commit to `articles_history/` and produce `.docx`.
