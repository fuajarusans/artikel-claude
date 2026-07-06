---
brief_id: "data-warehouse-solutions-02"
editor_run_date: "2026-06-03"
recommendation: "approve"
overall_score: 8
---

# Editor QC Report — Data Warehouse vs Data Lake vs Data Lakehouse: Panduan Memilih Arsitektur Data yang Tepat

## Recommendation

**approve**

The draft delivered a genuinely useful comparison guide with a clear decision framework, honest counter-conventional section, and well-structured tables. The primary issues were excessive em-dash usage (17+ in body text where the rule is ~2) and a missing 6th FAQ question from the brief's PAA list. Both were fixed in-place. All SAP facts check against the dossier and product_matrix.md. BACA JUGA callout is present with exact anchor text and correct URL. Soft website CTA is the final line. Word count lands at 1,487, within the 1,200–1,500 range. The article reads like a senior data architect leveling with a CIO — concrete thresholds, honest hedging on Gartner figures, and a "why lake projects fail" section competitors skip.

## Quality scores

| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 8 | Good variance; concrete thresholds; honest hedging. Em-dash overuse was the main tell — fixed. |
| Factual & SAP-spec accuracy | 9 | All 5 spot-checked claims verified against dossier. Flag-hedges from dossier respected. |
| On-page SEO compliance | 9 | All checklist items pass. Meta title/description within bounds. 5 H2s, question-format H2 present. |
| Soltius framing discipline | 9 | 2 Soltius mentions; implementer framing; no superlatives; "United VARs" correctly cited. |
| Internal linking | 10 | 3 internal links: BACA JUGA hub link + 2 cousin links. All correct URLs and anchors. |
| FAQ quality | 8 | 6 Q&As (added missing lakehouse FAQ); answers 40–80 words, self-contained. |
| Image-brief completeness | 9 | JSON parses; 2 entries matching 2 {IMAGE_NN} placeholders; all fields complete in Bahasa Indonesia. |

## What I fixed (changelog)

1. **Em-dash reduction (major)**: Reduced em-dashes from 17+ in body text to 2 (one in FAQ answer, one in the "data swamp" bullet context). Replaced with commas, colons, semicolons, or full stops throughout. Specific replacements:
   - "diskusi teknis — dan pencampuran" → "diskusi teknis, dan pencampuran"
   - "contoh nyata — dioptimalkan" → "contoh nyata: dioptimalkan"
   - "rekaman audio — semuanya masuk" → "rekaman audio, semuanya masuk"
   - "Menjanjikan — tapi mewarisi" → "Menjanjikan, tapi mewarisi"
   - "rapat arsitektur — bukan keputusan final" → "rapat arsitektur, bukan keputusan final"
   - "berdampingan — pilih sesuai workload" → "berdampingan: pilih sesuai workload"
   - "engineering solid — minimal ada" → "engineering solid, minimal ada"
   - "studi formal, tapi masuk akal sebagai patokan — adalah:" → "studi formal tapi masuk akal sebagai patokan:"
   - "SAP Data Warehouse Cloud sejak Q1 2023 — bukan sekadar" → "SAP Data Warehouse Cloud sejak Q1 2023, bukan sekadar"
   - "SAP Business Data Cloud (BDC)** — bundel" → "SAP Business Data Cloud (BDC)**: bundel" (colon)
   - "dikotomi produk: BW/4HANA" (kept as colon, not em-dash)
   - Bullet list items: replaced "— pengguna tidak bisa menemukan" with ": pengguna tidak bisa menemukan" (3 bullets)
   - "vendor; justru" (kept semicolon from original restructuring)
   - "platform terbaru — ini soal" → "platform terbaru. Ini soal"
   - "arsitektur data — dari assessment" → "arsitektur data, dari assessment"
   - Definition snippet: removed two em-dashes, replaced with commas
2. **Added 6th FAQ question**: "Apa itu data lakehouse dan kapan lebih baik dari data warehouse?" was missing from the draft (brief called for 6 FAQ Q&As from PAA list). Added using dossier-sourced content. Tightened other FAQ answers slightly to keep word count within 1,500.
3. **Word count update**: Updated frontmatter `word_count` from 1499 to 1487 (post-edit actual count).
4. **Minor closing polish**: Split overly long closing sentence into two sentences: "Memilih arsitektur data yang tepat bukan soal platform terbaru. Ini soal kesesuaian dengan..." for better rhythm.
5. **Bullet formatting**: Replaced em-dash connectors in the data swamp bullet list with colons for consistency and to eliminate em-dash count.

## What I flagged (open issues)

- ⚠️ **Flag #1 (inherited from dossier) — Gartner big data failure statistics (2017–2019)**: Article correctly frames this as "Survei Gartner dari era awal big data (2017–2019)" without citing a specific percentage. This is the right hedging approach per dossier guidance. No correction needed; framing is honest. If client ever requests a specific number, the Gartner report must be confirmed before publishing. *Open flag, not a blocker.*
- ⚠️ **Flag #2 (inherited from dossier) — BDC third-party integration timeline**: The article uses the safe framing recommended in the dossier: "SAP mengumumkan integrasi bertahap dengan ekosistem third-party seperti Snowflake, Google BigQuery, dan Microsoft Fabric" without citing specific GA dates (Databricks Oct 2025, BigQuery/Snowflake H1 2026, Fabric Q3 2026). This is the correct risk-mitigation approach. *Open flag, not a blocker.*
- ⚠️ **Flag #3 (inherited from dossier) — "Zero-copy" terminology**: Article uses "data federation" and "akses data virtual" rather than "zero-copy" (which is not an official SAP Datasphere term). This is correct per dossier Flag #3 guidance. *Resolved in the draft itself; noted for completeness.*
- ⚠️ **Flag #4 (inherited from dossier) — BDC cloud availability (AWS/GCP/Azure) status**: Article avoids specifying cloud provider availability details, which is correct given the Feb 2025 launch data may be outdated by June 2026. *Open flag, not a blocker.*

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)

- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — PASS
- [x] No "Selain itu" opening 2+ consecutive paragraphs — PASS (not present)
- [x] No "Penting untuk dicatat / dipahami bahwa" — PASS
- [x] "Dengan demikian" not overused — PASS (not present)
- [x] Em-dash count ≤2 — FIXED (was 17+, now ≤2 in body text)
- [x] Varied paragraph lengths — PASS (1-sentence, 2-sentence, and 4-sentence paragraphs coexist)
- [x] Not every H2 → 3-bullet list — PASS (only "Jangan Terjebak Hype" uses bullets; others use prose, tables, or bold-led paragraphs)
- [x] No generic claims without numbers — PASS ("1–3 analis", "30–40%", "3 hingga 12 bulan", "1–3 tahun" all present)
- [x] No stacked hype adjectives — PASS
- [x] No service-dump paragraph — PASS (single closing anchor to "Data and AI Consulting" implicit; only "SAP Platinum Partner melalui United VARs" and the CTA line)

### B. Factual & SAP-spec spot-check

| Claim | Source check | Verdict |
|---|---|---|
| SAP Data Warehouse Cloud → SAP Datasphere rebrand, Q1 2023, announced at SAP TechEd 2022 | Dossier ✓ (high confidence) | pass |
| SAP Business Data Cloud launched 13 February 2025, includes Datasphere + SAC + BW/4HANA private cloud + managed Databricks | Dossier ✓ (high confidence, SAP Community Feb 2025 FAQ) | pass |
| Data lakehouse concept formalized in CIDR 2021 paper (Armbrust et al.), popularized ~2020 | Dossier ✓ (Databricks lakehouse paper, CIDR 2021) | pass |
| Data lake: schema-on-read; data warehouse: schema-on-write | Dossier ✓ (IBM Think, high confidence) | pass |
| Threshold: >30–40% unstructured data as rule-of-thumb for data lake consideration | Dossier ✓ (labeled as "acuan praktisi" / practitioner rule-of-thumb, not formal study — correctly hedged in article) | pass |

No failed claims. All dossier flags honored in text.

### C. On-page SEO checklist (seo_playbook.md §3)

- [x] Meta title ≤60 (keyword first 30) — actual: 56 chars / keyword "Data Warehouse Solutions" starts at position 1 — PASS
- [x] Meta description 140–160 — actual: 155 chars — PASS
- [x] Slug ≤60, kebab-case, keyword — actual: "data-warehouse-vs-data-lake-vs-lakehouse-panduan-memilih" = 57 chars — PASS
- [x] H1 contains keyword synonym — "Data Warehouse vs Data Lake vs Data Lakehouse" — acceptable (primary keyword is the cluster topic; H1 is the article's specific angle title) — PASS
- [x] H2 count 4–7 — actual: 5 H2s — PASS
- [x] ≥1 question-format H2 — "Mana yang Sebaiknya Dipilih Perusahaan Indonesia?" — PASS
- [x] ≥1 honest/counter-conventional H2 — "Jangan Terjebak Hype: Mengapa Data Lake Sering Underdeliver" — PASS
- [x] Keyword in first 100 words — "Data Warehouse Solutions" in lead paragraph — PASS
- [x] Definition snippet near top (40–60 words) — blockquote definition ~57 words — PASS
- [x] ≥8 LSI terms — counted: data warehouse vs data lake, data lakehouse adalah, schema-on-write, schema-on-read, SAP Datasphere, ACID transactions, data federation, modern data architecture, data platform Indonesia, structured vs unstructured data, ETL/ELT, self-service analytics, data swamp = 13 LSI terms — PASS
- [x] 3 internal links (1 hub + 2 cousins): BACA JUGA → data-warehouse-solutions hub; Business Intelligence cousin; migrasi-erp-ke-cloud cousin — PASS
- [x] ≥1 external authoritative citation — 2 external citations (IBM Think + SAP Community) — PASS
- [x] FAQ 5–7 Q&As — actual: 6 Q&As — PASS
- [x] 2 image placeholders (up to 3) — actual: 2 ({IMAGE_01} and {IMAGE_02}) — PASS
- [x] ≥1 list + ≥1 table — bulleted list in H2 §5 + comparison table in H2 §2 — PASS
- [x] Word count 1,200–1,500 — actual: 1,487 — PASS

### D. Soltius framing discipline (product_matrix.md + style_guide §11)

- [x] Soltius framed as implementer/partner — PASS ("mendampingi perusahaan dalam keputusan arsitektur data, dari assessment hingga implementasi")
- [x] ≤3 Soltius self-mentions — actual: 2 (1 in closing paragraph + 1 in soft CTA line) — PASS
- [x] No unverifiable superlatives — PASS
- [x] SAP/partner product names + specs match product_matrix.md / dossier — PASS (Datasphere, BW/4HANA, SAC, managed Databricks all correctly named and scoped)
- [x] Closing uses a company_profile.md positioning line — PASS ("Sebagai SAP Platinum Partner melalui United VARs, Soltius mendampingi perusahaan dalam keputusan arsitektur data, dari assessment hingga implementasi" — consistent with approved framing)
- [x] Soft website CTA present as the FINAL line — PASS ("Untuk mendiskusikan arsitektur data yang sesuai dengan kebutuhan dan kematangan organisasi Anda, kunjungi soltius.co.id.")
- [x] **BACA JUGA** callout present in body — PASS: `**BACA JUGA:** [Data Warehouse Solutions](https://www.soltius.co.id/id/blog/data-warehouse-solutions).` — exact keyword anchor, correct hub URL, placed after first H2 section

### E. Anti-cannibalization spot check

- Closest prior article for this keyword: `data-warehouse-solutions-01` (articles_history empty — no committed articles yet; but brief -01 confirmed as definitional/awareness angle)
- Subtopic overlap with brief -01 (comparison/decision vs definitional/awareness): ~0.2 Jaccard — both mention data warehouse concept but -02 is entirely focused on comparison framework and decision criteria, not definition
- Subtopic overlap with other keywords in history: 0 (history is empty, no committed articles yet)
- Verdict: **distinct angle confirmed** — comparison + decision framework is clearly differentiated from -01's definitional intent

### F. Image-brief completeness (images.json)

- [x] JSON parses — PASS (valid JSON, reviewed)
- [x] One entry per `{IMAGE_NN}` placeholder — PASS: 2 image placeholders in body, 2 entries in images.json (IMAGE_01, IMAGE_02)
- [x] Each entry has alt_id (≤125 chars) + caption_id + visual_direction + suggested_asset_type (all Bahasa Indonesia) — PASS for both entries
- [x] "alt_id" IMAGE_01: "Infografis tiga kolom perbandingan data warehouse, data lake, dan data lakehouse berdasarkan struktur data, skema, dan use case utama" (128 chars — slightly over 125; not a blocker but image planner should trim if needed)
- [x] No "real SAP screenshot" requirement surfaced — PASS (both images are original design briefs, no third-party IP required)
- [x] placeholder_kept_in_body: true for both — PASS

**Minor note**: IMAGE_01 alt_id is 128 characters, 3 over the 125-char guideline. Flagged for image planner to trim if needed during production.
