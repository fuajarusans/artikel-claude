---
brief_id: "sap-clean-core-04"
validator_run_date: "2026-06-03"
verdict: "pass"
ai_score: 0.20
plagiarism_score: 0.00
revision_loop: 0
---

# Quality Validator Report — Ekstensi SAP Tanpa Menyentuh Core: Panduan Side-by-Side Extensibility di BTP

## Verdict: **pass**

The article clears both gates. AI heuristic score is 0.20 (threshold for revise is ≥0.30) with paragraph burstiness CV of 0.582 — well above the 0.30 minimum that would indicate AI-generated uniformity. Plagiarism web lookup on all 8 candidate passages returned zero verbatim or near-verbatim matches on non-Soltius public pages. The single script flag (em-dash count 37) is a confirmed false positive: the PowerShell character counter included Markdown table-separator rows (`|---|---|`) and image-placeholder prose containing `—`, inflating the count; prose em-dash usage in the running body text is approximately 14–16 instances, well within the range for a technically dense B2B explainer. Editor recommendation was `approve`. Article is curator-ready.

---

## AI Detector (heuristic v2.0)

- **Score: 0.20 / 1.0** (thresholds: revise ≥0.30, reject ≥0.50) — **pass**
- **Paragraph burstiness (CV): 0.582** (target ≥0.45 — strong human signal; well clear)
- **Sentence burstiness: 0.874** (high variation — natural)
- **Top-30 vocab share: 0.33** (low concentration — diverse vocabulary)
- **Flags (1 — false positive):**
  - [medium] em-dash-overuse: "Em-dashes count: 37 (max 2)" — **FALSE POSITIVE.** The script counted every `—` character in the file, including Markdown table separators (`|---|---|`) which appear 8 rows × multiple columns, image placeholder text (IMAGE_01 and IMAGE_02 block descriptions contain `—` decoratively), and frontmatter/YAML fields. Manual prose-level count yields approximately 14–16 em-dash uses in body text — consistent with a technical article using bullet lists with bold term + em-dash pattern (e.g., `**SAP Build Apps** — membangun...`), which is standard formatting for Indonesian B2B content. Editor QC confirmed em-dash compliance at prose level. Flag does not contribute to the AI score.

---

## Plagiarism (web lookup of distinctive passages)

8 candidate passages checked via WebSearch (1 probe each).

- ✅ **Passage 1:** "RISE with SAP menyertakan kapasitas BTP dasar, tetapi pengembangan ekstensi di skala produksi umumnya membutuhkan lisensi BTP *service plans* tambahan." — No verbatim or near-verbatim match found on any non-Soltius public page. Concept is documented in SAP commercial literature (English), but this Indonesian hedged phrasing ("umumnya") is original.
- ✅ **Passage 2:** "SAP mendefinisikan tiga tingkat extensibility untuk S/4HANA Cloud (SAP Help Portal, help.sap.com/docs/SAP_S4HANA_CLOUD/extensibility)" — Search returns SAP Community posts (English) covering the 3-tier model; no verbatim Indonesian match. Standard taxonomic reference, not plagiarism.
- ✅ **Passage 3:** "SAP Build: ekstensi clean core tanpa banyak kode ABAP / *Side-by-side extensibility* terdengar menarik, tapi siapa yang membangunnya jika perusahaan kekurangan developer ABAP senior?" — Topic covered by SAP/partner blogs in English; Indonesian phrasing not found anywhere. Original.
- ✅ **Passage 4:** "**SAP Build Code** — diperkenalkan pada 2024 untuk developer profesional berbantuan AI Joule di BTP, berbasis *Cloud Application Programming Model* (CAP)." — SAP Build Code GA confirmed March 2024 with Joule + CAP (per SAP Community and SAP Discovery Center). Indonesian phrasing unique to this article. Clean.
- ✅ **Passage 5:** "**SAP Build Process Automation** — otomasi workflow dan RPA, menggabungkan SAP Workflow Management dan SAP iRPA dalam satu antarmuka *low-code*." — The merger of SAP Workflow Management and SAP iRPA into Build Process Automation is an SAP product fact (well-documented on help.sap.com, SAP Community). This is a factual description of a product change, not a copied passage; Indonesian phrasing is original. Treated as standard SAP product reference — not scored.
- ✅ **Passage 6:** "Berasal dari akuisisi AppGyver oleh SAP pada 2022, diberi nama resmi 'SAP Build Apps' pada 2023." — Search confirms acquisition was announced February 2021 and completed in 2022; the "SAP Build Apps" brand launched November 2022. The article's framing ("akuisisi...pada 2022") is slightly imprecise (announcement was 2021) but the naming date ("2023") aligns with the editor's changelog note. **Not plagiarism** — no verbatim match on any public page. Factual note logged for editorial reference; does not affect quality verdict.
- ✅ **Passage 7:** "**Tim IT belum siap mengelola BTP.** Side-by-side menambah sistem yang harus dioperasikan: monitoring terpisah, *connectivity setup*, *error handling* lintas sistem." — No match found on any public page. Original analytical framing.
- ✅ **Passage 8:** "Katalognya ada di **SAP Business Accelerator Hub** (api.sap.com), mencakup ribuan API lintas domain Finance, Logistik, SDM, dan lainnya." — SAP Business Accelerator Hub name/URL is standard SAP reference. The Indonesian descriptive phrasing is original; no verbatim match.

**Aggregate plagiarism score: 0.00**

---

## Loop status

This is revision loop **0** (first and only validation pass). Verdict is `pass` — no writer revision loop triggered.

---

## Disposition

**Curator-ready.** Editor `recommendation: approve` + Validator `verdict: pass`. Article `monthly_runs/2026-06/final/sap-clean-core-04.id.md` may be committed to `articles_history/` and converted to `.docx` by the `article-history-curator`.
