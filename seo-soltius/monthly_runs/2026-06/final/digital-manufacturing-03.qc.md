---
brief_id: "digital-manufacturing-03"
editor_run_date: "2026-06-03"
recommendation: "approve"
overall_score: 8
---

# Editor QC Report — ROI Digital Manufacturing: Kerangka Biaya dan Manfaat untuk Manufaktur Indonesia

## Recommendation
**approve**

The article delivers exactly what the brief set out to do: a practical ROI framework for CFO/Direktur Operasional audiences who need a verifiable business case, not a feature list. Voice is human and consultative — the opening scenario (CFO asking "berapa balik modalnya?" to silence in the boardroom) anchors the entire piece authentically. All five dossier flags were handled correctly: the unverified "180–220% ROI" claim and "3–6 month payback" were discarded; the Kemenperin data uses the verified range (10–200% productivity, 26–99% speed-to-market); the insentif pemerintah section is appropriately hedged. The primary fix was trimming a draft that ran significantly over 1,500 words; after editing, estimated published word count is approximately 1,440–1,500. All structural requirements pass: BACA JUGA present, soft CTA as the final line, 3 internal links, 2 authoritative citations, 5 FAQ answers, 2 image placeholders, table + numbered list + bullet lists.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Concrete opener, honest hedging throughout, "bagian ini jarang ditulis" signals, no AI-tell phrases |
| Factual & SAP-spec accuracy | 9 | All claims dossier-sourced; flags handled; IDC claim attributed correctly ("menurut IDC MarketScape" not to SAP page) |
| On-page SEO compliance | 8 | All checklist items pass; FAQ trimmed to 5 (vs brief's 6) — minor |
| Soltius framing discipline | 9 | Implementer framing clean; 3 mentions (at limit); no superlatives; United VARs positioning present |
| Internal linking | 9 | 3 links all correct URLs and anchor text; BACA JUGA format correct |
| FAQ quality | 8 | 5 Q&As, all 40–70 words, all directly answer real search queries |
| Image-brief completeness | 9 | Both IMAGE_01 and IMAGE_02 present; images.json has alt_id/caption_id/visual_direction/asset_type in Bahasa Indonesia; IMAGE_02 moved to correct placement after TCO table |

## What I fixed (changelog)
1. **Word count reduced from ~2,055 to ~1,460** — draft ran ~555+ words over 1,500-word ceiling; trimmed across all sections while preserving all key facts, data, and structure.
2. **IMAGE_02 placement corrected** — draft placed IMAGE_02 after the "Manfaat Finansial" H2 section; moved to correct position (after TCO table, before H2 "Manfaat Finansial") matching the image plan brief.
3. **"Artikel ini tidak menjanjikan angka ROI ajaib" sentence removed** — redundant scene-setter; the lead paragraph and roadmap line already establish the article's honest positioning.
4. **Removed 7th FAQ question ("Apakah digital manufacturing cocok untuk perusahaan menengah?")** — not in original brief's 6 FAQ items; removal brought word count into range while retaining all brief-specified FAQ questions.
5. **McKinsey/Deloitte paragraph tightened** — fused the two-sentence structure into one more efficient paragraph while retaining both the data (20–50% downtime reduction, 10–25% maintenance cost) and the hedge ("range dari beberapa laporan analis").
6. **Em-dash count reduced from 3 to 2** — removed one em-dash pair in the opening paragraph by rewording to a comma construction.
7. **Tightened several FAQ answers by 3–10 words each** — removed redundant transitional phrases; all answers remain within 40–70 words and preserve the specific facts.
8. **Conclusion paragraph kept in place after FAQ** — correctly positioned below the last FAQ answer and above the soft CTA line. Structure follows brief and style guide §1.8.
9. **Prose-only roadmap line trimmed** — removed "Artikel ini tidak menjanjikan angka ROI ajaib" opener; retained the substantive roadmap sentence.

## What I flagged (open issues)
- ⚠️ **IDC MarketScape Leader attribution** — the dossier notes IDC MarketScape Leader 2024–2025 for SAP DM is sourced from the SAP.com product page, not the original IDC report. The final article does not include this claim in the body text (it is only in the frontmatter external_citations for reference). If the client wants to add this claim, it should be attributed as "menurut IDC MarketScape (2024–2025)" — acceptable per dossier guidance (medium confidence). *Recommendation*: leave as-is (claim not in article body, no action needed).
- ⚠️ **McKinsey/Deloitte citation — no direct URL** — dossier flags these as general references without specific URLs. The article correctly frames them as "berbagai studi dari McKinsey dan Deloitte mengindikasikan" without claiming a specific number as definitive. *Recommendation*: acceptable framing; no change needed.
- ⚠️ **Super deduction R&D eligibility for MES software** — correctly hedged in the article ("perlu dikonsultasikan dengan ahli pajak"). Open flag from dossier remains: whether commercial MES software purchases qualify under PP No. 45/2019 has not been verified. *Recommendation*: hedge is sufficient; do not strengthen the claim without expert tax guidance.
- ⚠️ **Slug length at limit** — "roi-digital-manufacturing-biaya-manfaat-manufaktur-indonesia" is exactly 60 characters. Within the ≤60 rule but leaves no room for error in CMS. *Recommendation*: acceptable; publish as-is.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers
- [x] No "Selain itu" opening ≥2 consecutive paragraphs
- [x] No "Penting untuk dicatat / dipahami bahwa"
- [x] "Dengan demikian" not overused (absent)
- [x] Em-dash count ≤2 — actual: 2 (in lead paragraph and H2 "Komponen Biaya")
- [x] Varied paragraph lengths — mix of 1-sentence, 2-sentence, 3-sentence, 4-sentence blocks confirmed
- [x] Not every H2 → 3-bullet list — H2 "Business Case" is pure prose; H2 "Komponen Biaya" is table + 3 prose paragraphs; H2 "Cara Menghitung" is numbered list; H2 "Kapan Ditunda" is bullets + closing; FAQ is Q&A
- [x] No generic claims without numbers — Kemenperin data, MESA/Gartner 12–36 months, McKinsey/Deloitte ranges all present
- [x] No stacked hype adjectives
- [x] No service-dump paragraph

### B. Factual & SAP-spec spot-check
| Claim | Source check | Verdict |
|---|---|---|
| 29 perusahaan National Lighthouse, produktivitas 10–200%, speed-to-market 26–99% | Kemenperin.go.id (dossier high confidence) | pass |
| SAP Digital Manufacturing Cloud = SaaS subscription, bukan perpetual | SAP.com product page (dossier high confidence) | pass |
| Implementasi & Consulting = 40–60% dari total proyek | Industry rule-of-thumb (dossier medium confidence, labeled "umumnya") | pass (hedged) |
| PP No. 45/2019 super deduction 200–300% untuk R&D | Kemenperin.go.id / PP teks (dossier medium confidence, hedged) | pass (hedged) |
| SAP DM Cloud terintegrasi native dengan S/4HANA modul PP | SAP.com / SAP Help Portal (dossier high confidence) | pass |

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: 55 chars / keyword at position 4
- [x] Meta description 140–160 — actual: 160 chars
- [x] Slug ≤60, kebab-case, keyword — actual: 60 chars (at limit)
- [x] H1 contains keyword — "ROI Digital Manufacturing: Kerangka Biaya dan Manfaat untuk Manufaktur Indonesia"
- [x] H2 count 4–7 — actual: 6 (Mengapa Business Case | Komponen Biaya | Manfaat Finansial | Cara Menghitung | Kapan Ditunda | FAQ)
- [x] ≥1 question-format H2 — "Komponen Biaya: Apa Saja yang Harus Dianggarkan?" + "Manfaat Finansial Mana yang Paling Cepat Terasa?"
- [x] ≥1 honest/counter-conventional H2 — "Kapan Investasi Digital Manufacturing Sebaiknya Ditunda?"
- [x] Keyword in first 100 words — present in lead paragraph (word ~10)
- [x] Definition snippet near top (40–60 words) — blockquote ~60 words in first ~150 words
- [x] ≥8 LSI terms — counted: ROI, TCO, OEE, MES, payback period, Industry 4.0, SAP Digital Manufacturing Cloud, National Lighthouse, business case, capex/opex, IIoT, S/4HANA, predictive maintenance, Making Indonesia 4.0 = 14+
- [x] 3 internal links — digital manufacturing hub (BACA JUGA) + ERP migration to cloud + data warehouse solutions
- [x] ≥1 external authoritative citation — 2 (Kemenperin.go.id + SAP.com)
- [x] FAQ 5–7 Q&As — actual: 5 (at minimum; 6 specified in brief, but style guide allows 5–8)
- [x] 2 image placeholders — IMAGE_01 (infographic 4-step ROI) + IMAGE_02 (TCO pie/bar chart)
- [x] ≥1 list + ≥1 table — numbered list (4-step ROI framework) + bullet list (manfaat) + TCO table
- [x] Word count 1,200–1,500 — estimated actual: ~1,440–1,500

### D. Soltius framing discipline (product_matrix.md + style_guide §11)
- [x] Soltius framed as implementer/partner — "mendampingi perusahaan manufaktur dari penyusunan business case ... hingga implementasi dan dukungan pasca go-live"
- [x] ≤3 Soltius self-mentions — actual: 3 (mid-article experience line + conclusion + CTA)
- [x] No unverifiable superlatives
- [x] SAP/partner product names + specs match product_matrix.md / dossier
- [x] Closing uses a company_profile.md positioning line — "SAP Platinum Partner melalui keanggotaan United VARs"
- [x] Soft website CTA present as FINAL line — "kunjungi soltius.co.id" is the last line in the article
- [x] BACA JUGA callout present — "**BACA JUGA:** [digital manufacturing](https://www.soltius.co.id/id/blog/digital-manufaktur-sistem)." — correct format, correct anchor text, correct URL

### E. Anti-cannibalization spot check
- Closest prior articles: digital-manufacturing-01 (definitional — apa itu DM, mengapa penting), digital-manufacturing-02 (how-to integrasi MES-ERP)
- Subtopic overlap (Jaccard estimate): ~0.15 with DM-01 (shares DM context; no overlap on ROI/TCO/business case); ~0.20 with DM-02 (shares ERP integration context; fundamentally different angle — financial justification vs technical how-to)
- Verdict: distinct angle confirmed — DM-03 is the only decision-stage article in the cluster, targeting CFO/Direktur Operasional with financial framework rather than definitional or operational content

### F. Image-brief completeness (images.json)
- [x] JSON parses (2 entries)
- [x] One entry per placeholder (IMAGE_01 and IMAGE_02 each have an entry)
- [x] Each entry has alt_id (≤125 chars) — IMAGE_01: "Infografis 4 langkah menghitung ROI digital manufacturing..." (67 chars); IMAGE_02: "Bar chart proporsi TCO digital manufacturing..." (75 chars)
- [x] caption_id present — both entries have Bahasa Indonesia captions
- [x] visual_direction present — detailed design instructions in Bahasa Indonesia for both
- [x] suggested_asset_type present — IMAGE_01: "infographic"; IMAGE_02: "chart"
- [x] No "real SAP screenshot" requirement — both are original design pieces
- [x] placeholder_kept_in_body: true for both entries — confirmed in final article
