---
brief_id: "warehouse-management-system-01"
validator_run_date: "2026-06-08"
verdict: "pass"
ai_score: 0.04
plagiarism_score: 0.00
revision_loop: 0
---

# Quality Validator Report — WMS vs Modul Gudang ERP vs Aplikasi Inventory: Kapan Modul Bawaan Tidak Cukup?

## Verdict: **pass**

Both gates clear. The heuristic AI-detector returns a score of 0.04 — well below the 0.30 revise threshold — with only one low-severity flag (paragraph burstiness CV 0.44, marginally below the 0.45 target but close enough given sentence burstiness of 0.95 and top-30 vocab share of 0.27 both indicating strong human-authored variation). Plagiarism checks on all 8 distinctive passages returned no verbatim hits on non-Soltius public pages. The article is curator-ready.

## AI Detector (heuristic v2.0)

- Score: **0.04** / 1.0 (thresholds: revise ≥0.30, reject ≥0.50)
- Paragraph burstiness (CV): **0.44** (target ≥0.45 — marginally below; compensated by high sentence burstiness)
- Sentence burstiness: **0.95** (strong; well above typical AI-generated text)
- Top-30 vocab share: **0.27** (well below AI-typical concentration ≥0.40)
- Flags (1):
  - [low] paragraph-low-variance: Paragraph word-count CV=0.44 (target >=0.45) — borderline, not a blocker

**Manual re-read of flagged section:** The editor's changelog confirms deliberate paragraph-length variation: single-sentence close ("Maka, jangan membeli traktor..."), 1-sentence definition blockquote, 6-sentence H2 openers, and a 3-item numbered list in §5. The 0.44 CV reflects the presence of several FAQ answers of similar length, which are structurally expected. No symmetric paragraph-block pattern visible in the prose body. The low-severity flag does not constitute an AI tell at this score level; manual read confirms human rhythm throughout.

## Plagiarism (web lookup of distinctive passages)

8 candidate passages checked via WebSearch.

- Passage 1: "Rata-rata akurasi inventaris lintas industri hanya 83% menurut CAPS Research (via ISM World, Maret 2024)..." — no public Indonesian-language match found; generic inventory accuracy pages returned but none with this specific phrasing. **Clean.**
- Passage 2: "WMS vs Modul Gudang ERP vs Aplikasi Inventory: Kapan Modul Bawaan Tidak Cukup?" (H1 title) — competitor pages on same topic found (automata.co.id, layana.id, hashmicro.com) but none carry this exact verbatim Indonesian title. **Clean.**
- Passage 3: "Modul gudang lama SAP, LE-WM (*Logistics Execution – Warehouse Management*), resmi berakhir dukungannya pada 31 Desember 2025." — only hit on soltius.co.id (the client's own EWM intro blog post). Self-reference; excluded per rules. **Clean.**
- Passage 4: "SAP diakui *Leader* Gartner Magic Quadrant for WMS 11 tahun berturut-turut per 2024." — hits are news.sap.com and SAP Community, both cited as intentional external sources in the article's frontmatter. Standard factual attribution to a citable SAP News release; phrasing is a natural Indonesian paraphrase of the press release, not a lift. **Clean (intentional citation).**
- Passage 5: "EWM *embedded* pertama kali hadir di S/4HANA rilis 1610 (diluncurkan 31 Oktober 2016)." — results include SAP Community, SAP Press, Pillir.io in English confirming the fact; no verbatim Indonesian match found on any non-Soltius page. **Clean.**
- Passage 6: "Fitur lanjutan (*Advanced* EWM) seperti *Wave Management* tingkat lanjut, *Slotting*, *Labor Management*, dan *Material Flow System* untuk otomasi fisik memerlukan lisensi terpisah." — results include primorissystems.com and mysupplychaingroup.com in English covering the same license distinction; no verbatim Indonesian match. **Clean.**
- Passage 7: "Apa Itu Warehouse Management System dan Di Mana Posisinya Terhadap ERP?" (H2 heading) — standard definitional heading pattern; many generic WMS definition pages returned but none with this exact full heading. **Clean.**
- Passage 8: "SAP Extended Warehouse Management (SAP EWM) adalah solusi WMS SAP yang paling komprehensif, tersedia *embedded* di S/4HANA sejak rilis 1610 (2016)." — only English-language SAP official and partner pages; no verbatim Indonesian phrasing found on any external page. **Clean.**

**Aggregate plagiarism score: 0.00**
No exact matches ≥20 words on non-Soltius public pages. No partial near-matches flagged.

## Loop status

This is revision loop 0. Verdict is **pass** — no revision loop required. Article proceeds to curator.
