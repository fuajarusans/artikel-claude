---
brief_id: "etl-c01"
editor_run_date: "2026-07-06"
recommendation: "approve"
overall_score: 9
---

# Editor QC Report — Apa Itu ETL (Extract, Transform, Load) dalam Pengolahan Data

> **Batch note:** evaluated against **conditional/2026-07 style_addendum overrides** (word band 800–1000; FAQ 2–3; internal links exactly 2; image-brief validation N/A — `{IMAGE_NN}` banned; Soltius mentions max 2; lead & Kesimpulan ≤80 words; definition allowed ONCE, in the snippet only; soft CTA soltius.co.id = final line). All other checks (anti-AI §5, EYD, citation discipline §10, Soltius framing §11, meta block §7, GEO §2a) applied in full.

## Recommendation
**approve**

Every number traces to the dossier's verified claims and all 7 researcher flags are respected (no "80% of project time" lore — the transform-effort observation stays qualitative; batch rhythm 1×24 jam labeled "umumnya"; no Pentaho or any third-party tool name; the compliance rationale phrased descriptively without citing regulation; the IBM 1970s claim not extended beyond Claim 2's sentence; Datasphere's "preferred flows" claim deliberately unused per Flag #6; no invented adoption stats). Zero AI tells, zero em-dashes, zero image placeholders, definition stated once (snippet only — no "Apa itu" H2, no restated definition in the body). I applied 9 in-place fixes, all EYD/register/entity-clarity level; the only fact-adjacent one reordered the SAP Datasphere apposition so the 8 Maret 2023 date unambiguously attaches to the Datasphere announcement (dossier Claim 9). Final body: **927 words** (band 800–1000; clean count — frontmatter stripped, links counted as anchor text, markdown syntax stripped, table content counted).

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | No banned openers/transitions; em-dash 0; paragraph rhythm 1–4 sentences (incl. the 1-sentence *garbage in, garbage out* punch paragraph); "Dua catatan jujur" hedging pair is a genuine practitioner move |
| Factual & SAP-spec accuracy | 10 | All 6 spot-checked claims pass vs dossier (IBM/AWS/SAP official); all 7 researcher flags honored; writer's deliberate drops (Claim 11, "3 tipe load") documented and correct |
| On-page SEO compliance | 9 | Meta title 60 exact (working title verbatim; "ETL" chars 9–11), meta desc 157, slug 34; keyword "ETL adalah" in lead sentence 3 |
| GEO extractability (§2a) | 9 | 40–60-word direct answer after all 3 body H2s (49/42/49), each carrying that H2's own new point; 3-stage table AI-liftable row-by-row (one claim per cell); snippet 57 words |
| Soltius framing discipline | 10 | Exactly 2 prose mentions (Kesimpulan positioning line + CTA); "merancang dan mengimplementasikan" — implementer framing, never "builds"; body 100% vendor-neutral until the brief-mandated Datasphere teach |
| Internal linking | 10 | Exactly 2: hub `data-warehouse-solutions` (lead) + cousin `business-intelligence` (H2 #3, on the "kualitas ETL menentukan dashboard" line, exactly where the brief placed it); natural inline anchors, no "BACA JUGA" |
| FAQ quality | 9 | 3 Q&As (band 2–3), answers 51/44/43 words, each with ≥1 fact/number (1×24 jam + ratusan POS; era 1970-an + koeksistensi per AWS; 3 jenis flow); all from the brief's PAA list; FAQPage-parseable |
| Image-brief completeness | N/A | Batch override: no placeholders by design; 0 `{IMAGE_NN}` found ✓ |

## What I fixed (changelog)
- **Fact clarity (H2 #3, ¶3)**: "SAP Datasphere, penerus SAP Data Warehouse Cloud yang diumumkan 8 Maret 2023, ..." → "SAP Datasphere, yang diumumkan 8 Maret 2023 sebagai penerus SAP Data Warehouse Cloud, ..." — the relative clause could be read as dating Data Warehouse Cloud; Claim 9 dates the **Datasphere** announcement.
- **EYD (H2 #3, ¶1)**: "...tidak berhenti di pipeline; ia langsung muncul..." → "...tidak berhenti di pipeline, tetapi langsung muncul..." — removes the non-standard inanimate "ia" (same fix class as the `sap-ecc-2027-c01` pass).
- **EYD (H2 #3, ¶2)**: "...dalam keadaan kotor, ia hanya menyimpannya" → "...dalam keadaan kotor, hanya menyimpannya" (second inanimate "ia").
- **EYD (H2 #3, ¶4)**: sentence-initial "Dan bila sumber data..." reworked into an enumeration matching the "Dua catatan jujur" lead-in: "Pertama, ETL bukan proyek sekali jadi; ... Kedua, bila sumber data hanya berasal dari satu atau dua aplikasi, ...".
- **Entity/GEO (lead)**: POS expanded once — "POS (*point of sale*)" — per addendum §5 acronym rule; lead 71 → 76 words, still ≤80.
- **Entity/GEO (table, Extract row)**: CRM expanded once — "CRM (*customer relationship management*)" — matching the batch convention set in `sap-b1-vs-accurate-c01`; cell restructured ("sistem sumber seperti ... dan API") to avoid nested parentheses; "lewat penarikan" → "melalui penarikan" (register).
- **EYD (table, Load row)**: "siap-analisis" → "siap analisis" (no hyphen in this compound).
- **Italics discipline (§3 first-use rule)**: *staging area* de-italicized at its second use (H2 #1 direct answer; first italic use = snippet); *mapping* and *cleansing* italicized at first use (H2 #3, ¶1). Naturalized loanwords (dashboard, pipeline, cloud, spreadsheet, tools, error, API) intentionally left plain, consistent with practitioner register.
- **Frontmatter**: `word_count` 895 → **927** (clean count after edits).

## What I flagged (open issues)
- ⚠️ (watch item for validator) **"AWS mencatat tiga metode ekstraksi" (H2 #1 direct answer) is attributed in-text without a link by design** — that fact comes from AWS "What is ETL?" (dossier Claim 3), a different page from the linked AWS compare page; the dossier instructed picking ONE AWS page to hold the external-citation count at 1–2 (actual: 2 — IBM + AWS compare). Do not flag the unlinked attribution as a missing citation.
- ℹ️ (accepted writer decisions, no action) Claim 11 ("replication/transformation flow diutamakan") deliberately unused to avoid the Flag #6 scope-generalization risk; "3 tipe load replication flow" detail dropped for the word budget ("3 jenis flow" retained). Both documented in the writer's notes and consistent with the dossier.
- ℹ️ (option for curator) Brief permits swapping the cousin link to sibling `data-lake-vs-data-warehouse-c01` or `data-warehouse-solutions-03` **if** a live URL exists; none is confirmed, so the verified default cousin (`business-intelligence`, WebFetch-checked by strategist 2026-07-06) stays. Total remains exactly 2 either way.
- ℹ️ "lima sistem yang berbeda" (H2 #1 closing observation) is a rhetorical hypothetical, not a claimed statistic — consistent with Flag #1's qualitative-only instruction.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers (grep: 0)
- [x] No "Selain itu" opening paragraphs (grep: 0)
- [x] No "Penting untuk dicatat / dipahami bahwa" (0)
- [x] "Dengan demikian" not used (0)
- [x] Em-dash count ≤2 — actual: **0** (writer replaced the brief's meta-description em-dash with a colon; budget intact)
- [x] Varied paragraph lengths — 1–4 sentences; the 1-sentence *garbage in, garbage out* paragraph breaks the rhythm deliberately
- [x] Not every H2 → bullet list — **zero bullet lists**; H2 #1 is prose + 3-row table + prose; H2 #2 and #3 are pure prose
- [x] No generic claims without numbers — 8+ inline figures
- [x] No stacked hype adjectives (canggih/powerful/seamless/terdepan/revolusioner: 0)
- [x] No service-dump paragraph — zero Soltius mentions in body
- [x] No "Sebagai kesimpulan" opener — Kesimpulan opens on a callback ("Tiga tahap ETL terdengar sederhana di atas kertas...")

### B. Factual & SAP-spec spot-check
| Claim | Source check | Verdict |
|---|---|---|
| ETL diperkenalkan era 1970-an, seiring pindah ke database tersentralisasi lebih besar, lalu jadi metode utama untuk data warehousing (linked to IBM) | dossier Claim 2 (ibm.com/think/topics/etl) + Flag #5 respected (not extended beyond IBM's sentence) ✓ | pass |
| 3 metode ekstraksi: update notification, inkremental, full extraction ("AWS mencatat") | dossier Claim 3 (aws.amazon.com/what-is/etl/) ✓ | pass |
| Full load saat pertama kali + incremental load terjadwal; staging area sebagai penampungan sementara | dossier Claims 4 & 6 ✓ | pass |
| ETL vs ELT = urutan transformasi; ELT mengolah di dalam warehouse dengan komputasi cloud; keduanya dapat dipakai bersama (linked to AWS compare) | dossier Claims 7–8 ✓; "bukan pilihan saling meniadakan" matches the koeksistensi edge case | pass |
| SAP Datasphere diumumkan 8 Maret 2023 sebagai penerus SAP Data Warehouse Cloud | dossier Claim 9 (news.sap.com) ✓ — apposition fixed this pass so the date attaches to Datasphere | pass |
| 3 jenis flow: data flow (ETL klasik), replication flow (replikasi massal), transformation flow (SQL di dalam platform) — body + FAQ 3 | dossier Claim 10 (help.sap.com + learning.sap.com) ✓; Flag #6 respected (no "preferred" generalization) | pass |

Blacklist sweep: no "Soltius builds SAP" ("membangun pipeline penuh" refers to a data pipeline, not the software — allowed); no invented product names; no third-party tool names (Flag #3 ✓); no "80% waktu di transform" stat (Flag #1 ✓ — kept qualitative); 1×24 jam / setiap malam labeled "umumnya/misalnya" (Flag #2 ✓); compliance rationale descriptive, no regulation cited, no UU PDP (Flag #4 ✓); no adoption/market stats (Flag #7 ✓).

### C. On-page SEO checklist (seo_playbook §3, with batch overrides)
- [x] Meta title ≤60 (keyword first 30) — actual: **60** chars exactly, working title preserved verbatim per brief; "ETL" at chars 9–11, definitional "Apa Itu ETL" pattern captures `etl adalah`
- [x] Meta description 140–160 — actual: **157**; keyword "ETL adalah" chars 1–10 + supporting "proses ETL" + 3 value props (tiga tahap, data warehouse, contoh)
- [x] Slug ≤60, kebab-case, keyword — actual: `apa-itu-etl-extract-transform-load` (**34**), matches brief
- [x] H1 contains keyword — H1 = working title verbatim
- [x] H2 count (addendum: 3–4 body) — actual: **3 body** + FAQ + Kesimpulan
- [x] ≥1 question-format H2 — **2 of 3** (#1 "Bagaimana Tahapan Proses ETL Bekerja?", #2 "Apa Perbedaan ETL dan ELT?")
- [x] ≥1 praktis/terstruktur H2 — #1 with the 3-stage × 3-column table (Tahap · Apa yang terjadi · Contoh di perusahaan), the brief's mandated replacement for a flow diagram; honest/counter-conventional H2 correctly dropped per addendum §2, replaced by the "Dua catatan jujur" hedging pair at the end of H2 #3
- [x] Keyword in first 100 words — "ETL adalah mekanisme baku..." in lead sentence 3
- [x] Definition snippet near top (40–60 words) — **57-word** "Ringkasnya:" blockquote, dossier draft essentially verbatim; **the only definition in the article**
- [x] ≥8 LSI terms — 12+ (extract transform load, tahapan/proses ETL, ekstraksi, transformasi/data cleansing, full/incremental load, data warehouse, integrasi data, pipeline data, staging area, ETL vs ELT, tools ETL, SAP Datasphere, data/replication/transformation flow, BI)
- [x] Internal links **exactly 2** (override) — hub `data-warehouse-solutions` (lead) + cousin `business-intelligence` (H2 #3); inline, descriptive anchors; CTA kept as plain text (not hyperlinked) so the count stays 2
- [x] External authoritative citations 1–2 — **2 inline links** (IBM think/topics/etl; AWS compare ETL-vs-ELT), both matching frontmatter `external_citations`
- [x] FAQ **2–3** (override) — actual: **3**, answers 51/44/43 words (band 30–60), each with ≥1 fact/number, all from the brief's PAA list ("Tools" answer uses generic categories only, per Flag #3)
- [x] Image placeholders **0 / banned** (override) — actual: 0
- [x] ≥1 structured element — 1 table (3 tahap × 3 kolom); 13 prose paragraphs; no forced second list (per addendum §4)
- [x] Word count **800–1000** (override) — actual: **927** (frontmatter updated)
- [x] ≥4 specific inline numbers — tiga tahap; era 1970-an; tiga metode ekstraksi; batch setiap malam / 1×24 jam; full + incremental (2 pola); 8 Maret 2023; 3 jenis flow; ratusan POS cabang

### C2. GEO extractability (seo_playbook §2a)
- [x] Direct 40–60-word answer immediately after each body H2 — **49 / 42 / 49** words, each carrying that H2's own new point (urutan + staging + jadwal batch; perbedaan urutan transformasi + "tahapannya sama, tempatnya berpindah"; posisi ETL dalam rantai analitik + kualitas menentukan kepercayaan) — none restates the snippet
- [x] **Definition-once rule (addendum)**: definition appears only in the "Ringkasnya:" snippet; no "Apa itu" H2; the era-1970-an paragraph is origin/history (new info per the brief), not a re-definition
- [x] One quotable, verifiable point per paragraph — each ¶ = one claim; table cells one sentence each, liftable row-by-row
- [x] Entities full-name on first use, acronyms expanded once — ETL, ELT, ERP, POS (fixed this pass), CRM (fixed this pass), BI, SAP Datasphere (with predecessor + date), staging area glossed at first body use, all three flow types named in full
- [x] FAQ parseable for FAQPage schema; freshness via `publish_month: 2026-07` (batch meta-block template has no separate dateModified field — same treatment as all prior batch finals); freshness matters here: strongest competitors date 2014–2021

### D. Soltius framing discipline (product_matrix.md + style_guide §11)
- [x] Framed as implementer/pendamping — "Soltius membantu perusahaan **merancang dan mengimplementasikan** pipeline data serta data warehouse modern seperti SAP Datasphere"; never "builds"
- [x] Self-mentions ≤**2** (override) — actual: **2** (Kesimpulan positioning line + soltius.co.id CTA); zero mid-body asides; the transform-effort practitioner observation correctly carries no brand
- [x] No unverifiable superlatives — "Data and AI Consulting" verified vs company_profile.md/product_matrix.md (Data Warehouse row anchor)
- [x] SAP/partner product names + specs match product_matrix.md row 3 / dossier — Datasphere naming ("formerly Data Warehouse Cloud") researcher-verified per the row's "verify before claiming" note
- [x] Closing uses the brief's positioning line (Data and AI Consulting)
- [x] Soft website CTA is the final line, consultative ("Untuk mendiskusikan rancangan pipeline ETL dan kesiapan SAP Datasphere ... kunjungi soltius.co.id"), separate from the Kesimpulan, anchored on the tracker's funnel product (SAP Datasphere)
- [x] Hub link as natural inline anchor in the lead, no callout

### E. Anti-cannibalization spot check
- Closest prior: `data-warehouse-solutions-03` (2026-06, "Cara Implementasi Data Warehouse: Roadmap 5 Fase", angle `roadmap-implementasi-etl-langkah-praktis`) — there ETL vs ELT is a sub-section of a project roadmap; this article covers the ETL **process itself** and contains zero project-phase/go-live/governance material ✓
- Boundary checks: data warehouse mentioned only as pipeline destination (linked to hub, architecture not explained — `data-lake-vs-data-warehouse-c01`'s territory); no schema-on-read/write or lakehouse; no CDC/streaming (sibling 2026-08); no Datasphere vs BW/4HANA; no UU PDP ✓
- Subtopic overlap (Jaccard estimate): ≈ **0.17** vs closest prior (irisan {ETL vs ELT, data quality/cleansing} of ~12 union — brief's calculation, confirmed against the history record's subtopics list) — < 0.4
- Verdict: **distinct angle confirmed**

### F. Image-brief completeness
**N/A — batch-2026-07 override**: no `{IMAGE_NN}` placeholders by design, no images.json, image-planner stage skipped. Confirmed **0** placeholders in the final (grep). The visual concept (diagram alur pipeline) is carried by the 3-stage table, per addendum §3.

---

## The shipping question
An IT manager who has watched three systems disagree about last month's revenue gets: a one-sentence diagnosis in the lead, a 57-word liftable definition, a 3-stage table that explains what actually happens to the data (with the "PT ABC / ABC, PT" example every practitioner recognizes), an honest ETL-vs-ELT rule of thumb that refuses to declare a winner, the garbage-in-garbage-out warning that explains why their dashboard is untrusted, and two frank caveats competitors omit — with exactly one restrained Soltius mention pair at the close. Yes — ship it.
