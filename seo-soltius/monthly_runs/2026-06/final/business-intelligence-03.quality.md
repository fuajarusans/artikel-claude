---
brief_id: "business-intelligence-03"
validator_run_date: "2026-06-03"
verdict: "pass"
ai_score: 0.00
plagiarism_score: 0.00
revision_loop: 0
---

# Quality Validator Report — Embedded Analytics di SAP S/4HANA: BI Operasional Real-Time Tanpa Lapisan Tambahan

## Verdict: **pass**

Both quality gates cleared with margin. The AI heuristic script returned a score of 0.00 — zero flags, paragraph burstiness CV of 0.514 (well above the 0.45 floor), and sentence burstiness of 0.848. All 8 candidate plagiarism passages were searched via WebSearch; none produced a verbatim or near-verbatim match on any public non-Soltius page. The article is original, human-register Bahasa Indonesia prose. The editor's `recommendation: approve` stands confirmed. The curator may commit.

---

## AI Detector (heuristic v2.0)

- Score: **0.00** / 1.0 (thresholds: revise ≥0.30, reject ≥0.50)
- Paragraph burstiness (CV): **0.514** (target ≥0.45 — PASS)
- Sentence burstiness: **0.848** (strong variance — PASS)
- Top-30 vocab share: **0.333** (not concentrated — PASS)
- Flags (**0**): none triggered

No AI-pattern flags. The em-dash purge by the editor (30 → 2 in body prose) removed the primary statistical tell present in the draft. Varied sentence and paragraph lengths produce healthy burstiness scores throughout. The "Bagian ini jarang ditulis" hedge and the honest-hedging on the 4–8 week timeline read as practitioner voice, not AI voice.

---

## Plagiarism (web lookup of 8 distinctive passages)

All 8 candidate passages extracted by `quality-check.ps1` were searched via WebSearch with quoted queries. Results assessed for exact match (≥20 contiguous words on a non-Soltius public URL) or partial near-match (>70% word-order overlap).

- ✅ Passage 1: "Embedded Analytics vs SAP Analytics Cloud: Dua Layer yang Saling Melengkapi — Kesalahpahaman umum..." — English competitor pages on the same topic found (pikon.com, altivate.com, community.sap.com); **no Bahasa Indonesia verbatim match**. Clean.
- ✅ Passage 2: Article title + opening "Manajer produksi Anda menelepon tim IT setiap Senin..." — English SAP Community and SAP official pages returned; **no Bahasa Indonesia title or opening match**. Clean.
- ✅ Passage 3: "Mengapa Embedded Analytics Sering Tidak Dimanfaatkan, Walau Sudah Dibayar — Bagian ini jarang ditulis" — No match anywhere; Indonesian results were unrelated general tech articles. Clean.
- ✅ Passage 4: "Overview Page (OVP): dashboard multi-card per peran (cocok untuk Plant Manager)" — Results entirely unrelated (Home Assistant plant dashboards, construction modules). No SAP/Indonesian match. Clean.
- ✅ Passage 5: "Dengan data bersih, biasanya 4–8 minggu, patokan lapangan bukan spesifikasi resmi SAP" — No match; Indonesian SAP-adjacent pages returned none containing this phrasing. Clean.
- ✅ Passage 6: "Untuk Finance saja lebih dari 350 analytical apps, mencakup KPI tiles, Analytical List Pages, dan Overview Pages untuk manajemen kas, piutang, utang..." — No match; Indonesian results were generic finance software lists. Clean.
- ✅ Passage 7: "Smart Business Cockpit: KPI designer untuk tampilan KPI kustom — Dari KPI tile, pengguna bisa langsung drill-down ke dokumen transaksi individual..." — English SAP Community articles on Smart Business Cockpit found; **no Bahasa Indonesia verbatim phrasing**. The Indonesian wording is original. Clean.
- ✅ Passage 8: "S/4HANA Cloud Public Edition mengintegrasikan embedded SAC langsung di Fiori Launchpad, memberikan story-based analytics yang lebih kaya dibanding on-premise" — English SAP blog posts about embedded SAC in Fiori Launchpad found (confirming factual accuracy); **no Bahasa Indonesia verbatim match**. Clean.

**Aggregate plagiarism score: 0.00** (threshold revise ≥0.10 — not triggered)

Note on Passage 7: the English-language SAP Community documentation confirming Smart Business Cockpit drill-down functionality was found (community.sap.com, sapyard.com, sapspot.com). This validates the factual claim; the Indonesian phrasing is entirely original. Not treated as plagiarism — it is an intentional summary of SAP-documented capability.

---

## Loop status

This is revision loop **0** (first and only pass). No revisions required. Article proceeds directly to curator.

---

## Curator note

`verdict: pass` + `editor recommendation: approve` — both gates cleared. The article `monthly_runs/2026-06/final/business-intelligence-03.id.md` is ready for history commit and `.docx` generation.
