---
brief_id: "sap-clean-core-02"
editor_run_date: "2026-06-02"
recommendation: "approve"
overall_score: 8
---

# Editor QC Report — Remediasi Custom Code SAP: Langkah Membersihkan Z-Code Menuju ABAP Cloud

## Recommendation
**approve**

The article is structurally sound and genuinely useful for its target audience (IT managers and SAP project leads executing a brownfield conversion). The how-to structure, tabel triase, and the counter-conventional "kapan BELUM perlu" section together deliver exactly what the brief called for and what competing Indonesian-language content lacks. All mandatory gates pass: anti-AI scan, SAP-spec accuracy, internal linking (including BACA JUGA), Soltius framing discipline, image-brief completeness, and soft website CTA. The word count lands at ~1,347 prose words (within target) with the triase table adding ~233 structural words; the QC flag is documented below. No issues requiring writer or strategist rework.

---

## Quality scores

| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 8 | Concrete pain hook, varied paragraph lengths, "kapan BELUM perlu" section, practitioner hedging. No AI openers. |
| Factual & SAP-spec accuracy | 9 | All 5 spot-checked claims verified against dossier (high confidence). Keep/Eliminate/Rebuild correctly hedged as "kerangka triase umum digunakan" not "istilah resmi SAP." |
| On-page SEO compliance | 8 | All checklist items pass. Minor: H1 doesn't contain exact phrase "SAP Clean Core" (uses angle title per brief's strategist decision — acceptable). |
| Soltius framing discipline | 9 | 2 brand mentions (mid-article aside + closing). Framed as "mendampingi" and "implementer." No superlatives. BACA JUGA correct. Soft CTA as final line. |
| Internal linking | 10 | Hub link as BACA JUGA callout (correct format, exact anchor "SAP Clean Core"). Two cousin links inline (ERP migration, Low-Code). All 3 URLs correct. |
| FAQ quality | 8 | 6 Q&As, each 40–75 words, answering real PAA questions. ABAP Cloud FAQ answer includes source citation. Coverage: all 6 from the brief's PAA list addressed (one removed from FAQ body as it's answered fully in H2 #4). |
| Image-brief completeness | 9 | JSON parses. 2 entries for 2 {IMAGE_NN} placeholders. All fields in Bahasa Indonesia: alt_id, caption_id, visual_direction, suggested_asset_type. No SAP screenshots required (both are conceptual infographics). |

---

## What I fixed (changelog)

1. **Em-dashes reduced: 16 → 0 in published body text.** Draft had 16 em-dashes scattered across prose and numbered list headers. All replaced: numbered list "— Tool" separators → ":" colons; prose parenthetical em-dashes → commas or semicolons. (3 em-dashes remain inside `{IMAGE_NN: ...}` placeholder description text — not published, not counted.)
2. **Consecutive paragraph opener "— semuanya masuk ke sini" → comma.** Fixed em-dash used as prose parenthetical in H2 #1 paragraph 1.
3. **Word count trimmed from ~1,833 (draft) to ~1,347 prose / ~1,580 full.** Cuts made: (a) removed redundant summary table in H2 #2 (the 4-column phase table repeated the numbered list content); (b) condensed numbered list items 1 and 2 in H2 #2; (c) condensed H2 #1 paragraph 3; (d) trimmed H2 #5 conclusion paragraph; (e) removed one redundant FAQ entry ("Apakah semua Z-code harus dibersihkan" — fully answered in H2 #4 body); (f) trimmed FAQ entries #1 and #7.
4. **Frontmatter `word_count` updated** from writer's 1,450 → 1,350 (reflecting prose count; see open flag on methodology).
5. **Soltius framing tightened in conclusion.** Minor verbose phrase ("berhasil atau berlarut-larut") trimmed; closing kept its SAP Platinum Partner positioning line intact.
6. **Table triage row 5 clarified.** Changed "Evaluate → Eliminate atau Rebuild" label to "Evaluate lebih lanjut" — cleaner and avoids formatting issues in some CMS renderers.

---

## What I flagged (open issues)

- ⚠️ **Word count methodology discrepancy.** Prose word count = ~1,347 (within 1,200–1,500 target). Full content count including table cells and H2 headings = ~1,580 (80 words over the 1,500 upper bound). The triase table is a mandatory element per the brief (5 rows × 3 columns). If the CMS word-count plugin counts table cells, the article may show as ~1,580. *Recommendation*: If the client's CMS flags this, the table rows can be tightened slightly post-publication, or one FAQ entry trimmed. Not a revise trigger — prose content is within target.
- ⚠️ **H1 does not contain exact phrase "SAP Clean Core."** The H1 is "Remediasi Custom Code SAP: Langkah Membersihkan Z-Code Menuju ABAP Cloud" — the strategist-approved title per the brief. "SAP Clean Core" appears in the lead paragraph (within first 40 words), the BACA JUGA callout, and the definition snippet. This is an intentional angle-based title; the keyword is present in all other critical positions. *Recommendation*: Monitor ranking; if the article doesn't move toward top-10 after 3 months, test adding "SAP Clean Core" to the H1.
- ⚠️ **Dossier open flags honored (passed through as-is):** Flag 1 (Keep/Eliminate/Rebuild not SAP official terminology — correctly hedged in article); Flag 2 (no specific duration promised — correctly framed as range); Flag 3 (no % cost figures — not used); Flag 4 (no "average N objects" figure — correctly framed as "ratusan hingga ribuan"). All four flags are addressed correctly in the draft and carry through to the final.

---

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)

- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — PASS. Lead opens on concrete business pain ("kejutan yang sama: ratusan, bahkan ribuan program custom").
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — PASS. Not used.
- [x] No "Penting untuk dicatat / dipahami bahwa" — PASS. Not used.
- [x] "Dengan demikian" not overused — PASS. Not used.
- [x] Em-dash count ≤2 in published body — PASS. 0 em-dashes in body text (3 remain in image placeholder descriptions only).
- [x] Varied paragraph lengths — PASS. Mix of 1-sentence (e.g., "Tidak."), 2-sentence, and 4-sentence paragraphs throughout.
- [x] Not every H2 → 3-bullet list — PASS. H2s use: prose (§1), numbered list (§2), table + prose (§3), prose (§4), bullet list + prose (§5). Good variety.
- [x] No generic claims without numbers — PASS. "ratusan hingga ribuan objek Z", "0–1 eksekusi per tahun", "beberapa hari hingga minggu / berbulan-bulan" all provide ranges.
- [x] No stacked hype adjectives — PASS.
- [x] No service-dump paragraph — PASS. Soltius mention is one focused sentence in the closing.

### B. Factual & SAP-spec spot-check

| Claim | Source check | Verdict |
|---|---|---|
| "ABAP Cloud membatasi akses hanya ke released objects dan API resmi SAP" | Dossier (SAP Community 2025, high confidence) ✓ | pass |
| "SAP Readiness Check diakses melalui portal SAP for Me (gratis bagi pemegang kontrak SAP aktif; tersedia juga di SAP Cloud ALM)" | Dossier (SAP Help Portal, high confidence) ✓ | pass |
| "ABAP Test Cockpit (ATC) dalam ABAP Development Tools (ADT) Eclipse" | Dossier (SAP Help Portal Upgrade Guide 2025, high confidence) ✓ | pass |
| "tabel MARA...harus diganti dengan CDS View I_PRODUCT" | Dossier (SAP Community 2025, ABAP Platform blog, high confidence) ✓ | pass |
| "Keep/Eliminate/Rebuild" framed as "kerangka triase yang konsisten digunakan komunitas SAP dan panduan migrasi... bukan terminologi resmi tunggal SAP" | Dossier Flag 1 (correctly hedged) ✓; SAP Custom Code Migration Guide 2025 reference cited | pass |

No web probe needed — all 5 claims are verifiable from the dossier at high confidence.

### C. On-page SEO checklist (seo_playbook.md §3)

- [x] Meta title ≤60 chars, keyword in first 30 — actual: 59 chars. "SAP" at position 22, "Clean Core" present in title. Full phrase "SAP Clean Core" split by title angle but both words present. PASS.
- [x] Meta description 140–160 — actual: 152 chars. PASS.
- [x] Slug ≤60, kebab-case, keyword — actual: "remediasi-custom-code-sap-clean-core" (36 chars, contains "sap-clean-core"). PASS.
- [x] H1 contains keyword — H1 contains "SAP" and "Z-Code" but not exact "SAP Clean Core." Strategist-approved angle title. Minor flag documented above. ACCEPTABLE.
- [x] H2 count 4–7 — actual: 6 (5 content + 1 FAQ). PASS.
- [x] ≥1 question-format H2 — "Apakah semua Z-code harus dibersihkan sebelum migrasi ke S/4HANA?" PASS.
- [x] ≥1 honest/counter-conventional H2 — "Kapan remediasi custom code BELUM jadi prioritas utama?" PASS.
- [x] Keyword "SAP Clean Core" in first 100 words — present in first paragraph (~35 words). PASS.
- [x] Definition snippet near top (40–60 words) — blockquote at ~45 words defining ABAP Cloud. PASS.
- [x] ≥8 LSI terms — counted: Z-code (14×), ABAP Cloud (21×), Custom Code Migration (3×), released objects (7×), ABAP Test Cockpit ATC (4×), technical debt (1×), brownfield (8×), Keep/Eliminate/Rebuild (5×), SAP Readiness Check (6×), remediasi custom code (6×), upgrade-safe (3×), ABAP Cloud restrictions (2×) = 12 distinct LSI terms. PASS.
- [x] 3 internal links — BACA JUGA hub (SAP Clean Core) + migrasi ERP ke cloud + platform low-code SAP Build. PASS.
- [x] ≥1 external authoritative citation — 2: SAP Help Portal (CCM Guide 2025) + SAP Community ABAP Cloud FAQ. PASS.
- [x] FAQ 5–7 Q&As — actual: 6. PASS.
- [x] 2 image placeholders — {IMAGE_01} and {IMAGE_02} present. PASS.
- [x] ≥1 list + ≥1 table — numbered list (4 items) + bullet list (3 items) + triase table (5 rows). PASS.
- [x] Word count 1,200–1,500 — prose: ~1,347 (PASS); full count including table: ~1,580 (flag documented above).

### D. Soltius framing discipline (product_matrix.md + style_guide §11)

- [x] Soltius framed as implementer/partner — "ditangani Soltius" (project experience framing) + "Soltius mendampingi perusahaan dari audit custom code hingga migrasi ke model ABAP Cloud." PASS.
- [x] ≤3 Soltius self-mentions — actual: 2 brand mentions ("Soltius" word). PASS.
- [x] No unverifiable superlatives — none found. PASS.
- [x] SAP/partner product names match product_matrix.md / dossier — ABAP Cloud, SAP Readiness Check, ATC/ADT, Custom Code Migration app (Fiori), SAP BTP, SAP Build all correctly named per dossier. PASS.
- [x] Closing uses company_profile.md positioning line — "Sebagai SAP Platinum Partner melalui United VARs" (matches product_matrix.md anchor phrasing). PASS.
- [x] Soft website CTA present as FINAL line — "Untuk mendiskusikan kesiapan remediasi custom code di lingkungan SAP perusahaan Anda, kunjungi soltius.co.id." PASS.
- [x] BACA JUGA callout present — `**BACA JUGA:** [SAP Clean Core](https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide).` — correct format, exact keyword anchor, correct URL. PASS.

### E. Anti-cannibalization spot check

- Closest prior article: `sap-clean-core-01` — "Apa Itu Clean Core SAP dan Mengapa Penting Sebelum ke Cloud" (definitional/awareness angle)
- This article angle: how-to execution, remediasi Z-code step-by-step, ABAP Cloud migration
- Subtopic overlap (Jaccard estimate): ~0.18 per brief (ABAP Cloud term shared, but primary subtopics — ATC, triase framework, brownfield phases, SAP Readiness Check, "when NOT to remediate" — are distinct)
- Verdict: **distinct angle confirmed.** No cannibalization risk.

### F. Image-brief completeness (images.json)

- [x] JSON parses — PASS (verified).
- [x] One entry per `{IMAGE_NN}` placeholder — 2 entries for {IMAGE_01} and {IMAGE_02}. PASS.
- [x] Each entry has alt_id, caption_id, visual_direction, suggested_asset_type — all present, all in Bahasa Indonesia. PASS.
- [x] No "real SAP screenshot" requirement — both are conceptual infographics. Sourcing notes explicitly state "Tidak memerlukan screenshot SAP." PASS.
