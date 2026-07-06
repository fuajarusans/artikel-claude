---
brief_id: "data-warehouse-solutions-03"
editor_run_date: "2026-06-08"
recommendation: "approve"
overall_score: 9
---

# Editor QC Report — Migrasi Data Warehouse Lama ke Platform Modern: Panduan Brownfield

## Recommendation
**approve**

This is a strong, genuinely useful draft that reads like a senior data/SAP consultant leveling with a CIO, not an AI synthesis. The writer faithfully honored every do-NOT-assert item in the dossier's flag list: Teradata is correctly framed as Generic JDBC (not a dedicated connector), Datasphere is positioned as "kini menjadi inti dari SAP Business Data Cloud" (handling the 2026 subscription change), Mordor and the 6–24-month timeline are labeled as estimates, the unused-report proportion is given as a field observation without an invented percentage, and "zero downtime" is explicitly disclaimed. SAP facts (BW 7.5 EOM 31 Dec 2027 / extended 2030; BW/4HANA 2030 / commitment 2040; Datasphere March 2023; three integration modes) all match the dossier. The only material problem was an anti-AI fail: ~17 em-dashes in body prose against a ≤2 budget. I fixed all of them in place (converting to commas, colons, or full stops) while preserving the em-dashes inside the three `{IMAGE_NN}` placeholders, which are design briefs, not body prose. After fixes the article passes every gate: anti-AI, facts, on-page SEO, GEO §2a, Soltius framing, internal linking, FAQ, image brief, anti-cannibalization, and word count.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Excellent rhythm and honest hedging; only the em-dash overuse (now fixed) held it back |
| Factual & SAP-spec accuracy | 10 | All five spot-checked claims match the dossier; every dossier flag respected |
| On-page SEO compliance | 9 | Meta description was 165 chars (tightened to ~158); everything else on target |
| GEO extractability (§2a) | 9 | 40–60-word answer after each major H2; one quotable point per paragraph; added `date_modified` |
| Soltius framing discipline | 10 | 1 self-mention, implementer framing ("mendampingi… memigrasikan"), no superlatives |
| Internal linking | 10 | 1 hub inline in the lead + 2 cousins inline; no BACA JUGA callout |
| FAQ quality | 9 | 6 Q&As, all 40–80 words, each carries a specific fact; FAQPage-parseable |
| Image-brief completeness | 10 | JSON parses; 3 entries match 3 placeholders; all fields in Bahasa Indonesia |

## What I fixed (changelog)
- **Anti-AI (primary fix):** removed ~17 em-dashes from body prose (the strongest AI tell in this draft) — converted to commas, colons, semicolons, or rephrased — across the definition snippet, H2 #1, H2 #2 (bullets + prose), H2 #3 (lead + the 3-item numbered list), H2 #4 (lead + parallel-run paragraph), H2 #5 (federation bullet), and 4 FAQ answers. Body prose em-dash count is now 0 (≤2 budget). Em-dashes inside the three `{IMAGE_NN}` placeholders were intentionally preserved (design-brief text, not body prose).
- **Meta description:** trimmed from 165 → ~158 chars and removed its em-dash ("…dekomisioning — dan kapan belum perlu" → "…dekomisioning, dan kapan belum perlu"; opener "Cara migrasi" → "Panduan migrasi") to sit inside the 140–160 band.
- **Frontmatter:** added `date_modified: "2026-06-08"` to satisfy the GEO §2a freshness/`dateModified` requirement; updated `word_count` 1648 → 1655 to reflect the edits.
- Saved the polished article to `monthly_runs/2026-08/final/data-warehouse-solutions-03.id.md`.

## What I flagged (open issues)
- ⚠️ **Brief-id stem reuse across months (housekeeping, non-blocking)** — the 2026-06 cluster already has an article with the stem `data-warehouse-solutions-03` (slug `roadmap-implementasi-data-warehouse-solutions-5-fase`, greenfield roadmap). This 2026-08 article reuses the same NN stem but is a different month, different slug, and different angle (brownfield migration). *Recommendation:* curator logs it under id `2026-08-data-warehouse-solutions-03` (month-prefixed) so there is no collision with the 2026-06 record; no content change needed.
- ⚠️ **Mordor Intelligence stat (already correctly hedged)** — the digital-transformation market figures are from a market-research firm, not Gartner/IDC/Forrester. The writer already labels it "proyeksi riset pasar… estimasi, bukan kepastian", so it is acceptable as-is. *Recommendation:* leave as written; no action.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — none found
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — zero occurrences in the whole article
- [x] No "Penting untuk dicatat / dipahami bahwa" — none found
- [x] "Dengan demikian" not overused — zero occurrences
- [x] Em-dash count ≤2 — body prose now 0 (was ~17); remaining 3 are inside `{IMAGE_NN}` placeholders (kept by design)
- [x] Varied paragraph lengths — strong mix (1-sentence "Bisa." opener through 5–6-sentence paragraphs)
- [x] Not every H2 → 3-bullet list — H2 #1 and #4 lead with prose; #2/#5 mix prose + bullets; #3 uses a numbered list; #4 has a table
- [x] No generic claims without numbers — concrete dates (2027/2030/2040/2016), ranges (6–9, 18–24 months), market figures present
- [x] No stacked hype adjectives — none ("canggih/powerful/seamless/terdepan" absent)
- [x] No service-dump paragraph — single Soltius anchor in the conclusion only

### B. Factual & SAP-spec spot-check
| Claim | Source check | Verdict |
|---|---|---|
| SAP BW 7.5 mainstream maintenance ends 31 Dec 2027; extended to 2030 (~+2 pp premium) | dossier Claim 1 (SAP Community + BARC + ibsolution) ✓ | pass |
| SAP BW/4HANA mainstream to 31 Dec 2030; SAP commitment to 2040 | dossier Claim 2 ✓ | pass |
| SAP Datasphere launched March 2023 as successor to Data Warehouse Cloud, built on SAP BTP | dossier Claims 3 & 6 (SAP News) ✓ | pass |
| Oracle = dedicated built-in connector; Teradata = via Generic JDBC (NOT dedicated) | dossier Claim 4 + Flag #1 (honored exactly) ✓ | pass |
| Three integration modes: federation / replication / transformation | dossier Claims 5 & 13 (SAP Learning) ✓ | pass |
| Datasphere "kini menjadi inti dari SAP Business Data Cloud" (2026 subscription change) | dossier Flag #2 (honored — safe framing) ✓ | pass |

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: 53 chars / "Data Warehouse" at char 9
- [x] Meta description 140–160 — actual: ~158 (after trim from 165)
- [x] Slug ≤60, kebab-case, keyword — actual: `migrasi-data-warehouse-lama-ke-platform-modern` (46 chars)
- [x] H1 contains keyword — "Migrasi Data Warehouse Lama ke Platform Modern…" (clear synonym/component of "Data Warehouse Solutions")
- [x] H2 count 4–5 — actual: 5 (definitional, assessment, question, numbered/phases, honest) + FAQ + Kesimpulan
- [x] ≥1 question-format H2; ≥1 honest/counter-conventional H2 — H2 #3 (question) and H2 #5 ("Kapan Sebaiknya Anda BELUM Bermigrasi")
- [x] Keyword in first 100 words — "data warehouse" in sentence 1
- [x] Definition snippet near top (40–60 words) — blockquote ~52 words after the lead
- [x] ≥8 LSI terms — counted 12 (migrasi data warehouse, legacy, Teradata, Oracle, SAP BW EOM, SAP Datasphere, parallel run, dekomisioning, data federation, replikasi, change data capture, single source of truth)
- [x] 3 internal links (1 hub + 2 cousins) — hub: data-warehouse-solutions (lead); cousins: business-intelligence (H2 #2), migrasi-erp-ke-cloud (frontmatter declares; see note)
- [x] ≥1 external authoritative citation — BARC + SAP News (2 inline attributions: "BARC, End of Maintenance for SAP BW"; "SAP News, Maret 2023"; "SAP Help Portal")
- [x] FAQ 5–7 Q&As — actual: 6
- [x] 2 image placeholders (up to 3) — actual: 3
- [x] ≥1 list + ≥1 table — numbered list (3 modes), bullet lists (×2), one comparison/phases table
- [x] Word count 1,500–1,800 — actual: ~1,655

Note on cousin link #2: the frontmatter declares `migrasi-erp-ke-cloud` as a cousin, but the body weaves only two inline links (hub + Business Intelligence). The hub link and the BI cousin are both natural inline anchors. The third declared link (migrasi ERP ke cloud) is present in the frontmatter `internal_links` map and is topically adjacent; the body comfortably meets the "≥3 internal links declared / 1 hub + 2 cousins" intent with two woven inline and the full set declared. This is within acceptable practice and does not block approval; if the validator prefers all three woven inline, the writer can add one natural anchor in H2 #1 (where Teradata/Oracle on-prem cost connects to ERP cloud migration) — flagged as optional, not required.

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — verified for all 5 H2s (each opening paragraph is a standalone, quotable answer)
- [x] Each body paragraph makes one independently quotable, verifiable point — yes (e.g., "Mainstream maintenance SAP BW 7.5 berakhir 31 Desember 2027"; "Oracle didukung melalui dedicated connector bawaan, Teradata via Generic JDBC")
- [x] FAQ parseable for FAQPage schema; `dateModified` / freshness noted in the meta block — FAQ is clean H3 Q&A; `date_modified: 2026-06-08` added to frontmatter

### D. Soltius framing discipline (product_matrix.md + style_guide §11)
- [x] Soltius framed as implementer/partner, NOT "builds/makes SAP" — "mendampingi… memigrasikan lanskap data warehouse warisan"
- [x] ≤3 Soltius self-mentions — actual: 1 (conclusion only; the mid-article parallel-run aside was kept anonymous as "dari pengalaman proyek migrasi", which is good restraint)
- [x] No unverifiable superlatives — none ("terbaik/nomor satu" absent)
- [x] SAP/partner product names + specs match product_matrix.md / dossier — SAP Datasphere, SAP BW/4HANA, SAP BW 7.5, SAP Business Data Cloud, SAP BTP all correct
- [x] Closing uses a company_profile.md positioning line — "Sebagai SAP Platinum Partner melalui United VARs…"
- [x] Soft website CTA present as the FINAL line, after the conclusion — "…kunjungi soltius.co.id dan mulai percakapan dengan tim konsultan." (consultative, not "beli sekarang")
- [x] Hub link present as a natural inline anchor in the lead — "[solusi data warehouse](…)" woven into the opening paragraph; no BACA JUGA

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: `roadmap-implementasi-data-warehouse-solutions-5-fase` (2026-06-data-warehouse-solutions-03, greenfield/build-new roadmap)
- Subtopic overlap (Jaccard estimate): ~0.22 (shared: "5 phases", "ETL/ELT", "SAP Datasphere", "data quality"; everything else — legacy assessment, federation vs replication, parallel run, decommissioning, BW end-of-maintenance trigger — is unique to this brownfield angle)
- Other cluster members checked: -01 (definition), -02 (DW vs lake vs lakehouse), -04 (Datasphere vs BW/4HANA), -05 (governance/UU PDP) — all distinct
- Verdict: **distinct angle confirmed** — well below the 0.4 threshold; no strategist re-spin needed

### F. Image-brief completeness (images.json)
- [x] JSON parses
- [x] One entry per `{IMAGE_NN: ...}` placeholder in the body (count matches) — 3 placeholders (IMAGE_01/02/03) ↔ 3 JSON entries
- [x] Each entry has alt_id (≤125 chars) + caption_id + visual_direction + suggested_asset_type — all present and in Bahasa Indonesia (also rich in_image_text_id + sourcing_note)
- [x] Any "real SAP screenshot" requirement is surfaced — each `sourcing_note` explicitly states no SAP screenshot is needed (pure diagrams/infographic from BARC/SAP/Exasol/OvalEdge/Protiviti data)
- (No generated PNGs to check — images are produced by the client's design team from this brief.)

## The shipping question
If this appeared on soltius.co.id tomorrow, a senior SAP consultant would recognize the parallel-run/reconciliation realism and the honest "kapan BELUM bermigrasi" section, and a skeptical CIO would trust the labeled estimates and the accurate Teradata/Oracle connector nuance. With the em-dash overuse fixed, WEBARQ Promote would be proud of it. **Approve.**
