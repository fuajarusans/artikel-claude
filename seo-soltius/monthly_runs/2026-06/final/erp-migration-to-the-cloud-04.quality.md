---
brief_id: "erp-migration-to-the-cloud-04"
validator_run_date: "2026-06-03"
verdict: "pass"
ai_score: 0.20
plagiarism_score: 0.00
revision_loop: 0
---

# Quality Validator Report — Keamanan Data ERP di Cloud: Regulasi Indonesia dan Cara Memitigasi Risikonya

## Verdict: **pass**

All checks clear. AI heuristic score is 0.20 (well below 0.30 revise threshold); paragraph burstiness at 0.474 exceeds the minimum 0.45 requirement; no anti-AI pattern flags beyond the script's em-dash overcount, which on manual inspection is an artefact of the script counting em-dashes in image placeholder tags and numbered-list definitional separators — actual prose em-dashes are ≤2, confirmed by both the editor's changelog and direct line-by-line review. Plagiarism web lookup on all 8 candidate passages returns clean (0 exact or partial matches on non-Soltius URLs). Article is curator-ready.

---

## AI Detector (heuristic v2.0)

- Score: **0.20** / 1.0 (thresholds: revise ≥0.30, reject ≥0.50)
- Paragraph burstiness (CV): **0.474** (target ≥0.45 — PASS)
- Sentence burstiness: **0.641** (healthy variance)
- Top-30 vocab share: **0.335** (within normal range for Bahasa Indonesia B2B content)
- Flags (1):
  - [medium] em-dash-overuse: "Em-dashes count: 14 (max 2)"

**Flag analysis — em-dash overcounting:**

The script reports 14 em-dashes in the file. Manual line-by-line inspection shows the following breakdown:

| Context | Count | Prose em-dash? |
|---|---|---|
| `{IMAGE_01}` caption tag (line 47) | 1 | No — image placeholder tag, not prose |
| `{IMAGE_02}` caption tag (line 90) | 1 | No — image placeholder tag, not prose |
| Numbered checklist items (lines 77–84): `**ISO 27001** — standar...` etc. | 8 | No — definitional list separators (standard convention per style_guide.md) |
| Blockquote/definition snippet structural separators (line 43) | 3 | No — structured enumeration in definitional block |
| Body prose paragraph (line 88): "kontrak RISE — jangan asumsikan" | 1 | Yes — 1 prose em-dash |

**Actual prose em-dashes: 1.** Editor changelog confirms reduction from ~8 to ≤2 in body prose. Script flag does not trigger revise threshold (it is a medium-severity flag at score 0.20, well below the 0.30 revise threshold). No revision needed.

---

## Plagiarism (web lookup of distinctive passages)

8 candidate passages checked via WebSearch (quoted exact-phrase probes):

- Passage 1: "27/2022) disahkan 17 Oktober 2022 dan berlaku penuh, termasuk sanksinya, sejak Oktober 2024." — **clean**. Widely reported legal fact; no verbatim phrase match found on non-Soltius URLs. Multiple news sources (CNN Indonesia, Kompas, Antaranews) report the same legal fact in different phrasing.
- Passage 2: H2 "Mengapa Keamanan Data Menjadi Kekhawatiran Utama dalam Migrasi ERP ke Cloud Sistem ERP memuat data keuangan, karyawan..." — **clean**. No match found. H2 heading + opening sentence is original framing.
- Passage 3: "SOC 2 Type II — menguji efektivitas kontrol keamanan selama periode nyata (6–12 bulan), bukan hanya keberadaan kontrol di satu titik waktu." — **clean**. SOC 2 Type II definition is standard knowledge; the exact Indonesian phrasing is not found verbatim on any indexed page.
- Passage 4: H2 "Di Mana Data SAP S/4HANA Cloud Disimpan dan Apakah Ini Mematuhi Hukum Indonesia?" — **clean**. Unique question framing; no match found.
- Passage 5: "Sertifikasi bukan jaminan, tapi absennya sertifikasi adalah tanda merah." — **clean**. No match found; original aphoristic phrasing.
- Passage 6: "Perbandingan jujurnya seperti ini: | Aspek | ERP On-Premise | Cloud ERP (mis." — **clean**. Table header text; no match found.
- Passage 7: "27/2022 yang berlaku penuh sejak Oktober 2024; dan (3) tata kelola kontraktual — *Data Processing Agreement* (DPA) dan klausul *data residency*..." — **clean**. Legal terminology + UU PDP factual date; exact tri-component framing ("tata kelola kontraktual") not found elsewhere.
- Passage 8: "Data Processing Agreement (DPA) — dokumen wajib sesuai UU PDP; review bersama tim legal/DPO." — **clean**. List item with standard legal term; exact phrasing not found on non-Soltius URLs.

**Aggregate plagiarism score: 0.00** (threshold: revise ≥0.10 or any 20+ word verbatim hit)

No exact matches. No partial near-matches (>70% word-order overlap). Common legal terminology (UU PDP, DPA, data residency) is standard field vocabulary and excluded per scoring rules.

---

## Loop status

This is revision loop **0** (first and only pass). Verdict: **pass**. No revision required.

---

## Curator recommendation

**Curator-ready.** Editor verdict: `approve`. Validator verdict: `pass`. Article may be committed to `articles_history/` and `.docx` generated.
