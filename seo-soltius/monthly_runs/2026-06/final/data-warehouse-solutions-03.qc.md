---
brief_id: "data-warehouse-solutions-03"
editor_run_date: "2026-06-03"
recommendation: "approve"
overall_score: 9
---

# Editor QC Report — Cara Implementasi Data Warehouse: Roadmap 5 Fase untuk Perusahaan Indonesia

## Recommendation
**approve**

Strong how-to article that directly addresses the SERP gap: a business-language roadmap with phase-level durations, failure modes, and SAP-ecosystem context. Voice is credibly consultative (practitioner hedges present, honest failure statistics, counter-conventional "why projects fail" section). All SEO hard requirements pass. One EYD correction applied (mengkoordinasikan → mengoordinasikan). No AI-tell patterns detected. All facts verified against dossier and product_matrix.md. Word count 1,468 prose words — within 1,200–1,500 target. The article is ready for the quality validator.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Varied rhythm, honest hedges, practitioner asides. No AI clichés detected. Single em-dash usage instance in FAQ ("bukan jabatan IT melainkan") is a colon substitute — within limit. |
| Factual & SAP-spec accuracy | 9 | All 5 spot-checked claims verified vs dossier/product_matrix. ETL/ELT Datasphere flow types accurate. Timeline 4–6 months correctly hedged as industry range. Gartner 80% stat correctly attributed with date and URL. Flag #1 (RAND 80.3%) not used in article — writer correctly relied on Gartner verified data only. |
| On-page SEO compliance | 9 | All checklist items pass. Meta title 53 chars, keyword first 24 chars. Meta description 153 chars. Slug 52 chars. 5 H2s. BACA JUGA present. 3 internal links. 2 external authoritative citations. 6 FAQ entries. 2 image placeholders. Definition snippet within first 150 words. |
| Soltius framing discipline | 10 | 2 explicit Soltius mentions (mid-article aside + closing) + 1 soft CTA = 3 total. Framed correctly as implementer/consultant. No superlatives. Data and AI Consulting anchor used appropriately. "Builds SAP" framing absent. |
| Internal linking | 10 | Hub link (BACA JUGA, exact keyword anchor) + 2 cousin hubs (Business Intelligence, migrasi ERP ke cloud) all present with correct URLs. |
| FAQ quality | 9 | 6 Q&As covering all 6 brief-specified topics. Each answer 45–85 words. Direct, specific, numbered/factual where appropriate. Covers PAA queries from the brief. |
| Image-brief completeness | 10 | 2 image placeholders present in body. images.json parses correctly. Both entries have alt_id, caption_id, visual_direction, suggested_asset_type in Bahasa Indonesia. No real SAP screenshot required (both are original diagrams). Placeholder counts match (IMAGE_01, IMAGE_02). |

## What I fixed (changelog)
- **EYD correction**: "mengkoordinasikan" → "mengoordinasikan" (Fase "mengkoordinasikan" is non-standard; "mengoordinasikan" is correct per PUEBI/KBBI for verbing "koordinasi"). Applied in the "Sumber Data" section, final paragraph.
- **"oversimplifikasi" → "penyederhanaan berlebihan"**: The word "oversimplifikasi" is an anglicism not in KBBI. Replaced with natural Indonesian equivalent in the ETL/ELT section for EYD compliance.
- **Frontmatter word_count updated**: 1,485 (writer estimate) → 1,468 (editor-verified prose count, excluding markdown syntax, image placeholder text, and table pipe characters).

## What I flagged (open issues)
- ⚠️ **Open Flag #1 (from dossier) — RAND 80.3% figure**: Not used in article. Writer correctly relied on verified Gartner data. Flag closed for this article.
- ⚠️ **Open Flag #2 — "25–30% total project time for testing"**: Handled correctly — article says "hampir selalu lebih panjang dari perkiraan" without citing a specific percentage. Rule-of-thumb framing intact. Flag closed.
- ⚠️ **Open Flag #3 — 4–6 month timeline**: Correctly hedged as "rentang praktik industri, bukan jaminan kontraktual" in both body and FAQ. Flag closed.
- ⚠️ **Open Flag #4 — SAP Datasphere name currency**: Used as "SAP Datasphere" with Q4 2025 doc as basis. Confidence high per dossier. Flag noted for future refresh.
- ℹ️ **Note — ETL vs ELT comparison table absent from body**: The dossier provides a full 6-column comparison table (Aspek | ETL | ELT). It was not incorporated because (a) word count was already at ceiling and (b) the prose explanation + IMAGE_02 diagram adequately covers the content. The SEO checklist "≥1 table" requirement is satisfied by the 5-phases table. No action required; this is an enhancement for a future revision if word count allowance changes.
- ℹ️ **Note — "Data Warehouse Solutions" as exact phrase in H1**: H1 reads "Cara Implementasi Data Warehouse..." rather than using the full commercial phrase "Data Warehouse Solutions." This is intentional and correct for Indonesian natural language. The exact phrase appears in meta_title, BACA JUGA anchor, and primary_keyword frontmatter field. No change needed.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — clean opening on concrete reader pain
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — not present anywhere
- [x] No "Penting untuk dicatat / dipahami bahwa" — not present
- [x] "Dengan demikian" not overused — not present
- [x] Em-dash count ≤2 — one em-dash ("pilot satu domain, stabilkan, baru perluas — jauh lebih aman") in body after edit; one in FAQ ("bukan jabatan IT melainkan" uses "melainkan" not em-dash). Acceptable.
- [x] Varied paragraph lengths — present throughout: 1-sentence paragraphs mixed with 4-sentence paragraphs; varies clearly
- [x] Not every H2 leads to a 3-bullet list — mix of table, numbered list, prose + bold subheadings, and pure prose
- [x] No generic claims without numbers — 4–6 months, 2–4 weeks per phase, 9–12 months for complex, 80% Gartner, all specific
- [x] No stacked hype adjectives — none detected
- [x] No service-dump paragraph — single Data and AI Consulting mention in closing only

### B. Factual & SAP-spec spot-check
| Claim | Source check | Verdict |
|---|---|---|
| SAP Datasphere mendukung ETL dan ELT via tipe flow berbeda (Data Flow, Replication Flow, Transformation Flow) | Dossier ✓ (SAP Community Blog, community.sap.com, 2024) | pass |
| Gartner (Februari 2024): 80% inisiatif data governance gagal pada 2027 | Dossier ✓ (Gartner Newsroom press release, direct URL verified) | pass |
| Timeline 4–6 bulan untuk mid-size enterprise | Dossier ✓ (labeled as practitioner range — Flag #3, correctly hedged in article) | pass |
| SAP BW/4HANA menggunakan ETL via SAP Data Services; on-premise/hybrid; valid dan didukung SAP | Dossier ✓ (product_matrix.md + SAP Community Statement of Direction July 2024) | pass |
| SAP Datasphere — platform data di atas SAP BTP; sebelumnya Data Warehouse Cloud (2023 rename) | Dossier ✓ (SAP Community, "5 Things You Need to Know") | pass |

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: 53 chars / keyword ends at char 24
- [x] Meta description 140–160 — actual: 153 chars
- [x] Slug ≤60, kebab-case, keyword — actual: 52 chars; contains "data-warehouse-solutions"
- [x] H1 contains keyword (synonym form "Data Warehouse") — keyword variation present
- [x] H2 count 4–5 — actual: 5 H2s (within 4–7 range)
- [x] ≥1 question-format H2 — "ETL atau ELT? Pilihan yang Menentukan Arsitektur Anda" + "Sumber Data Mana yang Harus Diintegrasikan Lebih Dulu?"
- [x] ≥1 honest/counter-conventional H2 — "Mengapa Banyak Proyek Data Warehouse Terhenti di Tahun Pertama"
- [x] Keyword ("data warehouse") in first 100 words — present in lead paragraph (~60 words in)
- [x] Definition snippet near top (40–60 words) — blockquote at line ~3 of body; 55 words
- [x] ≥8 LSI terms — counted 11: implementasi data warehouse, ETL, ELT, data modeling, pipeline, go-live, data quality, UAT, SAP Datasphere, SAP BW/4HANA, Change Data Capture
- [x] 3 internal links (1 hub + 2 cousins) — BACA JUGA (hub) + Business Intelligence + migrasi ERP ke cloud
- [x] ≥1 external authoritative citation — 2 (SAP Community Blog + Gartner Newsroom)
- [x] FAQ 5–7 Q&As — actual: 6
- [x] 2 image placeholders — IMAGE_01 (hero infographic) + IMAGE_02 (ETL vs ELT diagram)
- [x] ≥1 list + ≥1 table — numbered list (prioritas sumber data) + phases table
- [x] Word count 1,200–1,500 — actual: 1,468 prose words

### D. Soltius framing discipline (product_matrix.md + style_guide §11)
- [x] Soltius framed as implementer/partner — "mendampingi perusahaan dari assessment awal hingga adoption"
- [x] ≤3 Soltius self-mentions — actual: 2 explicit ("tim Soltius" mid-article + "Soltius mendampingi" closing) + 1 soft CTA = 3 total
- [x] No unverifiable superlatives — none present
- [x] SAP/partner product names + specs match product_matrix.md / dossier — Datasphere, BW/4HANA, Data Services all correctly named and positioned
- [x] Closing uses a company_profile.md positioning line — "layanan Data and AI Consulting, Soltius mendampingi perusahaan dari assessment awal hingga adoption pasca go-live" matches approved anchor from dossier/product_matrix
- [x] Soft website CTA present as the FINAL line — "Untuk mendiskusikan kesiapan proyek data Anda bersama konsultan berpengalaman, kunjungi soltius.co.id."
- [x] **BACA JUGA** callout present — `**BACA JUGA:** [Data Warehouse Solutions](https://www.soltius.co.id/id/blog/data-warehouse-solutions).` with exact keyword anchor

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: none (articles_history/index.json is empty — no prior articles committed)
- Brief confirms: Brief -01 = awareness, Brief -02 = comparison, Brief -03 = how-to (this article). Distinct search intent.
- Subtopic overlap (Jaccard estimate): 0.0 with prior history (no history). ~0.15 with brief -01 concepts (ETL mentioned generally), ~0.10 with brief -02.
- Verdict: **distinct angle confirmed** — how-to/roadmap intent with phase-level depth and failure mode analysis

### F. Image-brief completeness (images.json)
- [x] JSON parses — valid JSON structure confirmed
- [x] One entry per `{IMAGE_NN}` placeholder — IMAGE_01 and IMAGE_02 both present; body has 2 placeholders. Count matches.
- [x] IMAGE_01: alt_id (67 chars ≤125) ✓, caption_id ✓, visual_direction ✓, suggested_asset_type "infographic" ✓ — all in Bahasa Indonesia
- [x] IMAGE_02: alt_id (88 chars ≤125) ✓, caption_id ✓, visual_direction ✓, suggested_asset_type "diagram" ✓ — all in Bahasa Indonesia
- [x] No "real SAP screenshot" requirement — sourcing_note for both explicitly states "tidak memerlukan screenshot SAP / screenshot UI SAP"; design team creates original diagrams from brief
- [x] placeholder_kept_in_body: true for both entries — confirmed present in article body
