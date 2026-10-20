---
brief_id: "sap-b1-vs-accurate-c01"
validator_run_date: "2026-07-06"
verdict: "pass"
ai_score: 0.00
plagiarism_score: 0.00
revision_loop: 0
---

# Quality Validator Report — SAP Business One vs Accurate vs Zahir: ERP Terbaik untuk Bisnis Berkembang

> **Batch note:** validated under **conditional/2026-07 style_addendum §7 overrides** — word band 800–1000 (editor clean count **977** = compliant), FAQ 2–3 (actual 3 = compliant), internal links 2 (actual 2 = compliant), image checks **N/A by design** (0 `{IMAGE_NN}`, no images.json — confirmed 0 by grep, NOT flagged). All other checks (AI-tell heuristics, plagiarism via quoted WebSearch, EYD, structure integrity) applied in full. Script raw word count (1033) includes markdown/table syntax and is superseded by the editor's clean count.

## Verdict: **pass**

The article clears both gates decisively. The heuristic AI detector fired **zero flags** (score 0.00) with paragraph burstiness CV 0.537 — comfortably above the 0.45 human-rhythm target — and a manual read confirms no statistical tells: sentence lengths swing hard (short verdict sentences against long table-anchored elaborations), sections lead with prose not bullets, and every claim carries a number. All 8 plagiarism candidates came back clean on quoted web lookup — no verbatim or partial match on any non-cited page; the single related hit is the article's own attributed Antara citation (intentional, ignored per rules). Editor recommendation was `approve`; nothing here contradicts it. Curator-ready — but per batch instruction, the pipeline stops here for user review (no curator run, no history commit).

## AI Detector (heuristic v2.0)

- Score: **0.00** / 1.0 (thresholds: revise ≥0.30, reject ≥0.50) → **pass**
- Paragraph burstiness (CV): **0.537** (target ≥0.45) ✓
- Sentence burstiness: **1.644** ✓
- Top-30 vocab share: **0.308** (flag line 0.35 — under; mildly elevated, expected for a 3-brand comparison where product names necessarily repeat)
- Flags (**0**): none
- External AI-detector API: not used (no `AI_DETECTOR_API_KEY`; heuristic mode)

Manual cross-read (validator's own pass, per role rules for borderline scores — score is not borderline, read done anyway):
- 1 em-dash total (inside the verbatim definition snippet) — within max 2 ✓ (grep-verified)
- No banned openers/transitions ("Di era digital", "Selain itu" paragraph openers, "Penting untuk dicatat", "Dengan demikian", "Sebagai kesimpulan"): 0 ✓
- Paragraph rhythm varied: 1-sentence paragraph ("Pasarnya luas: ..."), 2–3-sentence paragraphs, two bold-lead-in lists, one table — not template-uniform ✓
- Practitioner voice markers present ("Sinyal paling praktis justru terlihat di tagihan", "Yang harus jujur masuk kalkulasi") — reads like a consultant, not a generator ✓

## Plagiarism (web lookup of distinctive passages)

8 candidate passages checked via quoted WebSearch (script extracted 8; candidate 4 was a markdown-heading artifact and was replaced with a distinctive lead sentence). Classification per role rules: hits on soltius.co.id and on cited sources (Antara, SAP News Center) are intentional and not scored.

- ✅ Passage 1: "25,5 juta UMKM Indonesia telah masuk ekosistem digital per Juli 2024..." — matches only the article's **own cited source** ([Antara](https://www.antaranews.com/berita/4397157/kemenkop-ukm-255-juta-umkm-telah-go-digital), attributed inline) + independent coverage of the same Kemenkop UKM statistic; a cited government figure, not lifted phrasing — **clean (ignored per citation rule)**
- ✅ Passage 2: "SAP menyebut pelanggan tipikal Business One adalah perusahaan kecil atau menengah, dengan 10 pelanggan baru per hari..." — no verbatim match; only topically related SAP-B1 pages — **clean**
- ✅ Passage 3: "Per Desember 2025 produk ini dipakai lebih dari 83.000 perusahaan di 170+ negara..." — no verbatim match anywhere (original Indonesian rendering of the cited SAP News statistic) — **clean**
- ✅ Passage 4 (substitute for heading artifact): "pembukuan mulai sesak ketika cabang bertambah, stok tersebar di beberapa gudang" — no verbatim match — **clean**
- ✅ Passage 5: definition snippet "SAP Business One adalah ERP untuk usaha kecil-menengah yang menyatukan keuangan, penjualan, persediaan..." — no verbatim match; the opening fragment is a standard product definition (inherently high-overlap, ignored per rules), the distinctive continuation appears nowhere — **clean**
- ✅ Passage 6: "Perbedaan paling menentukan ada pada model lisensi dan cara sistem diperluas" — no verbatim match — **clean**
- ✅ Passage 7: "implementasinya umumnya proyek terencana bersama partner, bukan aktivasi instan" — no verbatim match — **clean**
- ✅ Passage 8: "Soltius, diakui sebagai SAP Business One Partner of the Year, mendampingi bisnis berkembang..." — no verbatim match on any page (a soltius.co.id hit would be intentional anyway) — **clean**

Scoring: 0 exact matches (× 0.05) + 0 partial near-matches (× 0.02) = **aggregate score 0.00** → pass (threshold: pass <0.10). No passage has a verbatim hit ≥20 words on any non-Soltius site.

## Structure integrity & EYD (validator's own checks)

- [x] Frontmatter complete and consistent (title, meta_title 60, meta_desc 151, slug, keywords, 2 internal_links matching body, 2 external_citations matching body, `word_count: 977`)
- [x] H1 ×1; 3 body H2 + FAQ + Kesimpulan; 2 of 3 body H2 question-format (≥1 required)
- [x] Definition snippet: 52-word "Ringkasnya:" blockquote (band 40–60); definition appears **once only** — no "Apa itu" H2, no definitional body paragraph (addendum definition-once rule ✓; the table's "Kelas produk" row is structured comparison data, accepted as the editor ruled)
- [x] Internal links exactly 2 (override) — hub `pengertian-sap-business-one-dan-kegunaannya` + cousin `8-modul-sap-indonesia-yang-paling-banyak-digunakan`; grep-verified 2 unique body URLs
- [x] Soltius self-mentions exactly 2 (Kesimpulan positioning line + final-line soltius.co.id CTA); zero mid-body mentions; implementer framing ("mendampingi"), never "builds"
- [x] Soft CTA = literal last line ✓
- [x] FAQ 3 Q&As (band 2–3), each answer carries ≥1 number
- [x] EYD spot-check clean: "asesmen", "persediaan", "berjenjang", "rekonsiliasi" correct KBBI forms; decimal comma "25,5 juta" and "Rp 333.000" formatting consistent; foreign terms italicized on first use (*add-on*, *on-premise*, *bill of materials*, *go-live*); acronyms expanded once (ERP, CRM, BOM); no typos found
- [x] Editor watch item respected: missing Zahir tier prices NOT flagged (dossier Flag #3 — conflicting official IDR/USD pages; only the verified Simply entry price is named)

## Revision instructions

None — verdict is pass.

## Loop status

This is revision loop **0**. No writer loop needed.

## Handoff

Editor `approve` + validator `pass` → article is curator-ready. **Per batch instruction, the curator is NOT run and nothing is committed to articles_history** — the batch stops here for user review of `conditional/2026-07/final/`.
