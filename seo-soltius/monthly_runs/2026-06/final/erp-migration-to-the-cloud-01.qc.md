---
brief_id: "erp-migration-to-the-cloud-01"
editor_run_date: "2026-06-02"
recommendation: "approve"
overall_score: 8
---

# Editor QC Report — Brownfield, Greenfield, atau Bluefield? Panduan Memilih Jalur Migrasi ERP ke Cloud

## Recommendation
**approve**

This article is well-structured, genuinely decision-useful, and hits every mandatory SEO and framing requirement. The writer produced a substantive comparison guide with a real kerangka keputusan, honest counter-conventional section, correct SAP framing, and appropriate hedging on indirect-citation statistics. The primary editorial issue was severe em-dash overuse (33 instances in the draft), which is a strong AI-tell. All em-dashes in prose were replaced with commas, colons, or restructured sentences. One minor meta title trim was also needed (65 → 52 chars). After these in-place fixes the article is shippable. Four dossier-flagged facts remain as open flags — all are handled correctly in the text with appropriate hedging, and none constitute errors.

---

## Quality scores

| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 8 | Solid after em-dash fix. Varied rhythm, honest caveats, "miskonsepsi yang mahal" tone. No banned openers. |
| Factual & SAP-spec accuracy | 8 | SAP ECC 2027/2030 dates from SAP Support Portal: verified. BLUEFIELD® trademark: correctly attributed to SNP Group. ISG 2026 stats: correctly hedged as indirect citation. Garuda Indonesia: correctly omitted from final (low-confidence flag honored). |
| On-page SEO compliance | 9 | All mandatory checklist items pass. Meta title trimmed. BACA JUGA present. All 3 internal links present. 2 external citations declared in frontmatter. |
| Soltius framing discipline | 10 | 2 Soltius mentions total (conclusion + CTA). Framed as implementer/partner. No superlatives. Correct positioning line used. |
| Internal linking | 10 | Hub link as BACA JUGA after H2-1 (exact format). SAP Clean Core + data warehouse solutions as inline contextual cousins. All anchors match brief spec. |
| FAQ quality | 8 | 7 Q&As, all 40–80 words, direct answers with at least one specific number each. Mirrors People Also Ask from brief. |
| Image-brief completeness | 9 | 2 placeholders confirmed present. images.json: both entries have alt_id, caption_id, visual_direction, suggested_asset_type in Bahasa Indonesia. No "real SAP screenshot" required. JSON parses cleanly. |

---

## What I fixed (changelog)

1. **Meta title shortened**: "ERP Migration to the Cloud: Brownfield vs Greenfield vs Bluefield" (65 chars) → "ERP Migration to the Cloud: Brownfield vs Greenfield" (52 chars). Keyword remains in first 30 chars.
2. **Em-dashes reduced from 33 to 1**: All prose em-dashes replaced with commas, colons, or sentence restructuring. The one remaining em-dash is inside the frontmatter `context` field (acceptable). Specific replacements made in:
   - Lead paragraph: "hal berbeda — dan memilih" → "hal berbeda, dan memilih"; "kustomisasi, usia data, batas downtime, dan anggaran" punctuation cleaned
   - Definition snippet blockquote: "(seperti SAP ECC)" replaces "— seperti SAP ECC —"
   - Image placeholder: cleaned the em-dash in the alt-text concept description
   - H2-1 body: "Brownfield — atau" → "Brownfield, atau"; "Greenfield — atau" → "Greenfield, atau"; "Bluefield — istilah" → "Bluefield adalah istilah"
   - Table footnote: "bukan langsung dari laporan ISG" — removed em-dash before "bukan"
   - H2-2 body: "(kode ABAP sendiri, tabel Z..." replaces "— kode ABAP sendiri, tabel Z..." in each item
   - H2-3: "pilihan aman — tapi" → "pilihan aman. Ini"; "Bukan hanya biaya teknologi — ini" → "Bukan hanya biaya teknologi: ini"; "melebihi anggaran atau jadwal — terlepas" → "melebihi anggaran atau jadwal, terlepas"; "saat migrasi — dan" → "saat migrasi, dan"
   - H2-4: "dibahas — padahal" → "dibahas, padahal"; "terstruktur — tim" → "terstruktur: tim"; "greenfield yang diisi kembali kustomisasi lama — yang" → "greenfield yang diisi kembali kustomisasi lama, yang"
   - H2-5 (ECC 2027): "(Enhancement Package 6–8, mayoritas instalasi)" replaces "(Enhancement Package 6–8 — mayoritas instalasi)"; "tersedia tanpa" replaces "— tanpa"; "pada pertengahan 2026 berisiko tidak selesai sebelum akhir 2027. Proyek 12–18 bulan" restructured from single run-on sentence; "workshop strategi ERP, di mana" replaces "workshop strategi ERP — di mana"
   - FAQ answers: multiple em-dashes in FAQ answers replaced with semicolons or commas
   - Conclusion: "keputusan teknis semata; ini" replaces "keputusan teknis semata — ini"; "hingga eksekusi dan dukungan pasca go-live, dengan" replaces "... go-live — dengan"
3. **Word count updated** in frontmatter: 1,498 → 1,492 (reflecting minor word reduction from em-dash fix edits).

---

## What I flagged (open issues)

- ⚠️ **Garuda Indonesia case study (low confidence)** — The draft's dossier flagged this as unverifiable (confidence: low). The writer correctly omitted this case from the final draft. No action needed; flag is resolved by omission.
- ⚠️ **ISG 2026 adoption stats (48%/34%/18%) and 60% over-budget (medium confidence)** — Cited as indirect (SoftwareSeni / intelliswat.com, not directly from ISG). The draft correctly hedges these as "berdasarkan penelitian ISG 2026 yang dikutip dalam sumber industri." *Open flag* — not an error, correctly handled. If the client or validator wants to trace to primary ISG source, request directly from ISG.
- ⚠️ **Extended maintenance "+9–12% total" not used** — Writer correctly limited to "+2 percentage point per tahun" (SAP-confirmed), omitting the Crowe Indonesia "+9–12% total" figure that was flagged as unverified. Good editorial discipline; no action needed.
- ⚠️ **Project duration ranges (brownfield 6–10 bln, greenfield 12–18 bln, bluefield 9–18 bln) are industry estimates, not primary-source data** — Correctly framed as "kisaran industri umum, bukan angka pasti." *Open flag* — acceptable hedge. No correction needed.

---

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)

- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — PASS
- [x] No "Selain itu" opening 2+ consecutive paragraphs — PASS (zero occurrences)
- [x] No "Penting untuk dicatat / dipahami bahwa" — PASS
- [x] "Dengan demikian" not overused — PASS (zero occurrences; "Demikian juga" used once appropriately)
- [x] Em-dash count ≤2 — **FIXED**: 33 → 1 in final
- [x] Varied paragraph lengths — PASS: mix of 1-sentence, 2-sentence, 3–4 sentence paragraphs
- [x] Not every H2 → 3-bullet list — PASS: H2-1 (3 prose paras + table), H2-2 (4 bold-lead items + table), H2-3 (3 prose paras), H2-4 (1 short para + 3 bullets + 1 closing para), H2-5 (3 prose paras), FAQ (7 Q&As)
- [x] No generic claims without numbers — PASS: every major claim has a number or date
- [x] No stacked hype adjectives — PASS: no "canggih", "powerful", "revolusioner", "seamless"
- [x] No service-dump paragraph — PASS: one targeted closing mention only

### B. Factual & SAP-spec spot-check

| Claim | Source check | Verdict |
|---|---|---|
| SAP ECC mainstream maintenance berakhir 31 Des 2027 (EHP 6–8) | SAP Support Portal — dossier high-confidence | pass |
| Extended maintenance tersedia 2028–2030 dengan premi +2 percentage point/tahun | SAP Support Portal — dossier high-confidence | pass |
| SAP berkomitmen mendukung S/4HANA hingga 2040 | SAP Support Portal — dossier high-confidence | pass |
| BLUEFIELD® adalah trademark terdaftar SNP Group; istilah resmi SAP = Selective Data Transition (SDT) | SNP Group blog + SAPInsider — dossier high-confidence | pass |
| ISG 2026: SDT/bluefield ~48%, brownfield ~34%, greenfield ~18% | ISG 2026 via SoftwareSeni/intelliswat — medium confidence; correctly hedged | pass (hedged) |
| ISG 2026: 60% proyek migrasi SAP melebihi anggaran atau jadwal | ISG 2026 via intelliswat — medium confidence; correctly hedged | pass (hedged) |
| RISE with SAP mendukung ketiga pendekatan (brownfield/greenfield/bluefield) pada private edition | SAP product pages — dossier high-confidence | pass |
| NZDT meminimalkan (bukan menghilangkan) downtime | SAP Community — dossier high-confidence with caveat; article correctly says "meminimalkan" | pass |

### C. On-page SEO checklist (seo_playbook.md §3)

- [x] Meta title ≤60 (keyword first 30) — actual: 52 chars / keyword at pos 0 — PASS (fixed from 65)
- [x] Meta description 140–160 — actual: 160 chars — PASS (at upper limit, acceptable)
- [x] Slug ≤60, kebab-case, keyword — actual: "brownfield-greenfield-bluefield-panduan-migrasi-erp-ke-cloud" (60 chars) — PASS
- [x] H1 contains keyword synonym ("Migrasi ERP ke Cloud") — PASS
- [x] H2 count 4–5 — actual: 5 content H2s + 1 FAQ H2 = 6 total — PASS (within 4–7 range per playbook)
- [x] ≥1 question-format H2 — "Bagaimana Menentukan Jalur Migrasi yang Tepat untuk Bisnis Anda?" — PASS
- [x] ≥1 honest/counter-conventional H2 — "Kapan Bluefield BUKAN Pilihan Terbaik" — PASS
- [x] Keyword in first 100 words — "ERP migration to the cloud" appears in lead paragraph — PASS
- [x] Definition snippet near top (40–60 words) — blockquote after lead, ~57 words — PASS
- [x] ≥8 LSI terms — migrasi ERP ke cloud, brownfield SAP S/4HANA, greenfield migration SAP, bluefield selective data transition, SAP ECC ke S/4HANA, RISE with SAP, GROW with SAP, konversi sistem SAP, selective data transition, NZDT, SAP Best Practices, custom code analysis = 12 terms — PASS
- [x] 3 internal links (1 hub + 2 cousins) — hub: BACA JUGA after H2-1; cousin 1: SAP Clean Core in H2-5; cousin 2: data warehouse solutions in H2-3 — PASS
- [x] ≥1 external authoritative citation — 2 declared in frontmatter (SAP Support Portal + SNP Group blog) — PASS
- [x] FAQ 5–7 Q&As — actual: 7 — PASS
- [x] 2 image placeholders — IMAGE_01 (hero) + IMAGE_02 (body) — PASS
- [x] ≥1 list + ≥1 table — 2 tables + 1 bulleted list in H2-4 — PASS
- [x] Word count 1,200–1,500 — declared: 1,492 — PASS

### D. Soltius framing discipline (product_matrix.md + style_guide §11)

- [x] Soltius framed as implementer/partner — "mendampingi perusahaan mulai dari workshop ERP Strategy, pemilihan jalur migrasi, hingga eksekusi dan dukungan pasca go-live" — PASS
- [x] ≤3 Soltius self-mentions — actual: 2 (conclusion paragraph + soft website CTA line) — PASS
- [x] No unverifiable superlatives ("terbaik/nomor satu") — PASS
- [x] SAP/partner product names match product_matrix.md / dossier — PASS: SAP ECC, SAP S/4HANA Cloud, RISE with SAP, GROW with SAP, BLUEFIELD®, SDT, NZDT all correctly named
- [x] Closing uses a company_profile.md positioning line — "Sebagai SAP Platinum Partner melalui keanggotaan United VARs, Soltius mendampingi perusahaan mulai dari workshop ERP Strategy, pemilihan jalur migrasi, hingga eksekusi dan dukungan pasca go-live, dengan pengalaman lintas industri sejak 1998" — matches approved framing — PASS
- [x] Soft website CTA present as the FINAL line, after the conclusion — "Untuk mendiskusikan kesiapan migrasi ERP ke cloud di perusahaan Anda, kunjungi soltius.co.id." — PASS
- [x] **BACA JUGA** callout present in body — `**BACA JUGA:** [ERP migration to the cloud](https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud).` — exact format, correct anchor text, correct URL — PASS

### E. Anti-cannibalization spot check

- Closest prior article for this keyword: **none** (articles_history/index.json is empty — first article in cluster)
- Subtopic overlap (Jaccard estimate): 0
- Verdict: distinct angle confirmed

### F. Image-brief completeness (images.json)

- [x] JSON parses cleanly
- [x] 2 entries matching IMAGE_01 and IMAGE_02 placeholders in body — count matches
- [x] IMAGE_01: alt_id (Indonesian, 76 chars ≤125), caption_id (Indonesian), visual_direction (detailed), suggested_asset_type: "diagram" — PASS
- [x] IMAGE_02: alt_id (Indonesian, 87 chars ≤125), caption_id (Indonesian), visual_direction (detailed), suggested_asset_type: "infographic" — PASS
- [x] No "real SAP screenshot" requirement — both are original diagrams/infographics for the design team
- [x] placeholder_kept_in_body: true for both entries — confirmed in body

---

## Summary

- **Issues fixed**: 2 (meta title trim + 32 em-dash replacements)
- **Open flags**: 4 (all dossier-inherited, all correctly hedged in text — none constitute errors; no writer re-spin needed)
- **Cannibalization risk**: none (first article in cluster)
- **Shipping question**: Yes — a senior SAP consultant reading this would find the decision framework genuine and the honesty about bluefield's limitations refreshing. The ISG stat hedges are transparent. WEBARQ Promote can be proud to publish this.
