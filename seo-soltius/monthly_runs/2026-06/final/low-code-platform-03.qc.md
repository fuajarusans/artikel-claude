---
brief_id: "low-code-platform-03"
editor_run_date: "2026-06-03"
recommendation: "approve"
overall_score: 8
---

# Editor QC Report — Cara Membangun Program Citizen Developer di Perusahaan dengan Low-Code Platform

## Recommendation
**approve**

The draft arrived structurally strong and factually grounded. The primary corrective work was eliminating a significant em-dash overuse problem (20+ in body; limit ~2), which is the clearest AI-tell in this pipeline. After reducing em-dashes to 2 in the body and making several supporting fixes (meta title keyword position, prose transitions, one table cell reformat), the article meets every shipping criterion. Dossier-flagged open items are all properly hedged in the draft and require no writer rework — they are genuine open flags, not errors. The article is genuinely decision-useful for its audience (IT managers, CIOs at consideration stage), covers a gap in the Indonesian SERP, and reads with a practitioner voice.

---

## Quality scores

| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 8 | Em-dash overuse was the major tell; fixed. Paragraph rhythm and honest hedging are strong. "Bagian ini jarang ditulis" section is excellent. |
| Factual & SAP-spec accuracy | 8 | All facts trace to dossier or product_matrix. Open dossier flags properly hedged. No invented SAP specs. |
| On-page SEO compliance | 8 | All checklist items pass post-edit. Meta title keyword position corrected. 7 FAQ Q&As, 2 image placeholders, 3 internal links, 2 external citations. |
| Soltius framing discipline | 9 | Exactly 2 Soltius mentions (mid-article step 3 + closing). Correctly framed as implementer. One pre-approved positioning line used. No superlatives. |
| Internal linking | 9 | BACA JUGA callout present with exact anchor "Low-Code Platform". SAP Clean Core and digital manufacturing cousins linked contextually. |
| FAQ quality | 8 | 7 Q&As, all 40–80 words, self-contained, sourced. Real PAA phrasing used. |
| Image-brief completeness | 9 | 2 placeholders in body match 2 entries in images.json. Each entry has alt_id, caption_id, visual_direction, suggested_asset_type in Bahasa Indonesia. No SAP screenshot required. |

---

## What I fixed (changelog)

1. **Meta title keyword position corrected**: "Citizen Developer: Panduan Low-Code Platform untuk Perusahaan" (keyword at char 32, past the 30-char threshold) → "Low-Code Platform: Panduan Program Citizen Developer" (keyword in first 16 chars). Length 51 chars — within ≤60.

2. **Em-dash overuse eliminated**: Draft had 20+ em-dash ( — ) occurrences in body prose. Style guide limit is ~2. Reduced to exactly 2 in body text (both in the governance table column header "Federated (Hybrid — Rekomendasi)" which is a label, not flowing prose). All prose em-dashes replaced:
   - Body H1-section prose dashes → commas or colons
   - Definition snippet dashes → commas (two occurrences)
   - "shadow IT" definition sentence restructured to use "merupakan" and separate clause
   - "IT backlog" paragraph: "bukan keluhan — itu" → "bukan sekadar keluhan, melainkan"
   - "Pertanyaan ini jarang dijawab jujur..." sentence: comma used instead of dash
   - Step 4 closing: "— yang penting" → "; yang penting"
   - H2 "kehilangan momentum" section opener: "bukan karena teknologinya — platformnya" → "bukan karena teknologinya, platformnya"
   - "5 level approval" bullet: spelled out "lima" for readability
   - ROI bullet: "Angka sederhana — berapa... berapa..." restructured to "Angka sederhana seperti berapa... dan berapa..."
   - Final manufacturing sentence: colon instead of dash

3. **FAQ parenthetical style adjusted**: Some FAQ answers used em-dash as parenthetical. Replaced with standard parentheses or restructured sentence.

4. **Meta description em-dash**: Replaced " — " separator with ":" for consistency and character-count safety (156 chars maintained).

5. **Word count frontmatter**: Updated from writer's 1,392 to post-edit 1,381 (net reduction from em-dash-to-comma substitutions reducing char count slightly; word count unchanged materially — verified in range 1,200–1,500).

---

## What I flagged (open issues)

- ⚠️ **Durasi training "3–5 hari"** (dossier flag): The article correctly avoids the specific "3–5 hari" number from the brief, instead writing "dalam beberapa hari secara modular" — this is the right hedging approach. No action needed; dossier recommendation followed.

- ⚠️ **Freudenberg Confactory case study** (dossier flag): Article uses the case study with proper hedging: "menurut studi kasus SAP Build, 2023" and "lebih dari 30 peserta pilot". Attribution is honest. Open flag only — not an error.

- ⚠️ **"12% departemen IT" figure**: Included in body with correct attribution: "survei Gartner global" and "kondisi serupa yang juga dilaporkan di enterprise Asia Tenggara". This matches dossier recommendation for honest attribution. Open flag maintained.

- ⚠️ **No Indonesia-specific IT backlog data**: Brief angle used global/APAC context with appropriate caveats. Acceptable given dossier's finding that no IDC Indonesia-specific data was available. Open flag for future researcher if article is revisited.

---

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)

- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — Lead opens on concrete business pain (platform bought but unused). PASS.
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — Not present. PASS.
- [x] No "Penting untuk dicatat / dipahami bahwa" — Not present. PASS.
- [x] "Dengan demikian" not overused — Not present. PASS.
- [x] Em-dash count ≤2 in body prose — **FIXED**: reduced from 20+ to 2 (both in table label). PASS after fix.
- [x] Varied paragraph lengths — Mix of 1-sentence to 4-sentence paragraphs present. PASS.
- [x] Not every H2 → 3-bullet list — H2s use: 1 prose+blockquote, 1 table+prose, 1 numbered list, 1 table+prose, 1 bullet list. Excellent variety. PASS.
- [x] No generic claims without numbers — Specific numbers throughout: 4:1 ratio, 12%, 80 questions, 12 months, 5–10 people, 4–8 weeks, 30+ participants, 4 metrics. PASS.
- [x] No stacked hype adjectives — Not present. Concrete capabilities described. PASS.
- [x] No service-dump paragraph — Soltius is mentioned precisely twice, in correct positions. PASS.

**Anti-AI verdict: PASS** (after em-dash fix)

### B. Factual & SAP-spec spot-check

| Claim | Source check | Verdict |
|---|---|---|
| Gartner 4:1 ratio citizen developer vs professional developer 2026 | Dossier: high confidence, via Kissflow citing Gartner; consistent across multiple Kissflow sources | pass |
| SAP Build terdiri dari Build Apps, Build Process Automation, Build Work Zone di atas SAP BTP | Dossier: high confidence + product_matrix.md confirmed | pass |
| "SAP Certified – SAP Build Developer" (80 pertanyaan, valid 12 bulan) | Dossier: high confidence, SAP Learning official page (learning.sap.com/certifications/sap-certified-associate-low-code-no-code-developer-sap-build) | pass |
| Freudenberg "Confactory" 30+ peserta pilot | Dossier: medium confidence (third-party SAP partner blog); article uses correct hedge "menurut studi kasus SAP Build, 2023" | pass (hedged) |
| 12% departemen IT mampu memenuhi semua permintaan teknologi baru | Dossier: medium confidence, Gartner global; article uses "survei Gartner global" and "Asia Tenggara" qualifier | pass (hedged per dossier recommendation) |

**Factual verdict: PASS** — all five spot-checked claims either verified at high confidence or properly hedged per dossier flags.

### C. On-page SEO checklist (seo_playbook.md §3)

- [x] Meta title ≤60 chars, keyword in first 30 — "Low-Code Platform: Panduan Program Citizen Developer" = 51 chars; "Low-Code Platform" in first 16 chars. FIXED & PASS.
- [x] Meta description 140–160 chars — "Panduan praktis membangun program citizen developer dengan low-code platform: 5 langkah, model governance, checklist kesiapan, dan cara mengukur ROI program." = 155 chars. PASS.
- [x] Slug ≤60, kebab-case, contains keyword — "program-citizen-developer-low-code-platform-perusahaan" = 54 chars. PASS.
- [x] H1 contains keyword — "Cara Membangun Program Citizen Developer di Perusahaan dengan Low-Code Platform" — contains keyword. PASS.
- [x] H2 count 4–7 — 5 H2s (Apa Itu Citizen Developer / Kapan Perusahaan Siap / 5 Langkah / Model Governance / Mengapa Banyak Program) + FAQ block = 5 body H2s. PASS.
- [x] ≥1 question-format H2 — "Kapan Perusahaan Siap Memulai Program Citizen Developer?" PASS.
- [x] ≥1 honest/counter-conventional H2 — "Mengapa Banyak Program Citizen Developer Kehilangan Momentum di Tahun Pertama" PASS.
- [x] Keyword in first 100 words — "*low-code platform*" in first sentence. PASS.
- [x] Definition snippet near top (40–60 words) — Blockquote definition in first ~150 words; 57 words. PASS.
- [x] ≥8 LSI terms — Present: citizen developer program, low-code platform untuk perusahaan, pengembangan aplikasi tanpa coding, SAP Build BTP, governance low-code, shadow IT, enablement citizen developer, low-code ROI, center of excellence low-code, aplikasi bisnis internal = 10 LSI terms. PASS.
- [x] 3 internal links (1 hub BACA JUGA + 2 cousins) — (1) BACA JUGA: Low-Code Platform hub, (2) SAP Clean Core cousin, (3) digital manufacturing cousin. PASS.
- [x] ≥1 external authoritative citation — (1) Gartner via Kissflow cited inline, (2) SAP Learning certification in frontmatter. PASS.
- [x] FAQ 5–7 Q&As — 7 Q&As. PASS.
- [x] 2 image placeholders (up to 3) — IMAGE_01 and IMAGE_02 present. PASS.
- [x] ≥1 list + ≥1 table — Numbered list (5 langkah), bullet list (mengapa gagal), 2 comparison tables. PASS.
- [x] Word count 1,200–1,500 — 1,381 words. PASS.

**SEO checklist verdict: PASS** (after meta title fix)

### D. Soltius framing discipline

- [x] Soltius framed as implementer/partner, NOT "builds/makes SAP" — Step 3: "mitra implementasi seperti Soltius dapat membantu merancang kurikulum pilot"; Closing: "Soltius membantu perusahaan merancang dan menjalankan program citizen developer di atas SAP Build". Correct framing throughout. PASS.
- [x] ≤3 Soltius self-mentions — Exactly 2 mentions: (1) mid-article step 3, (2) closing paragraph. PASS.
- [x] No unverifiable superlatives — Not present. PASS.
- [x] SAP/partner product names + specs match product_matrix.md / dossier — SAP Build, SAP BTP, Build Apps, Build Process Automation, Build Work Zone all correctly named. PASS.
- [x] Closing uses a company_profile.md positioning line — "Sebagai SAP Platinum Partner melalui keanggotaan United VARs, Soltius membantu perusahaan..." matches pre-approved framing from company_profile.md. PASS.
- [x] Soft website CTA present as FINAL line, after the conclusion — "Untuk mendiskusikan kesiapan program citizen developer di perusahaan Anda, kunjungi [soltius.co.id](https://www.soltius.co.id/)." is the final line, after the conclusion paragraph. PASS.
- [x] BACA JUGA callout present with anchor text = exact keyword "Low-Code Platform" linking to hub — Present after H2 definitional section: "**BACA JUGA:** [Low-Code Platform](https://www.soltius.co.id/id/blog/low-code-and-no-code-platforms)." PASS.

**Soltius framing verdict: PASS**

### E. Anti-cannibalization spot check

- **Prior articles in this cluster**: index.json shows no prior articles committed to history yet (articles array is empty). low-code-platform-01 and -02 exist in final/ but not yet in history.
- **Brief states**: low-code-platform-01 = definitional ("apa itu"), -02 = SAP Build deep-dive. This article (-03) = how-to operational guide for IT managers who have decided to start.
- **Subtopic overlap (Jaccard estimate)**: Brief's Jaccard estimate of 0.2 vs -01 and -02 is plausible. This article's core content (citizen developer program roadmap, governance models, failure patterns, checklist) is not covered by a definitional or SAP-Build-feature article.
- **Verdict**: Distinct angle confirmed. PASS.

### F. Image-brief completeness (images.json)

- [x] JSON parses — Validated (well-formed JSON, 2 image entries). PASS.
- [x] One entry per `{IMAGE_NN}` placeholder in body — IMAGE_01 and IMAGE_02 both in body; images.json has entries for both. PASS.
- [x] Each entry has alt_id ≤125 chars + caption_id + visual_direction + suggested_asset_type (all Bahasa Indonesia) — Confirmed for both entries. alt_id IMAGE_01: 82 chars; alt_id IMAGE_02: 107 chars. PASS.
- [x] No "real SAP screenshot" requirement — sourcing_note for both images explicitly states "tidak membutuhkan screenshot SAP" and "Tim desain membuat dari nol". PASS.
- [x] Placeholder_kept_in_body: true — Confirmed for both entries. PASS.

**Image-brief verdict: PASS**

---

## Summary for validator

| Check | Result |
|---|---|
| Recommendation | **approve** |
| Word count | 1,381 (target 1,200–1,500) |
| BACA JUGA present | YES — "**BACA JUGA:** [Low-Code Platform](https://www.soltius.co.id/id/blog/low-code-and-no-code-platforms)." after definitional H2 |
| Soft website CTA (final line) | YES — "Untuk mendiskusikan kesiapan program citizen developer di perusahaan Anda, kunjungi [soltius.co.id](https://www.soltius.co.id/)." |
| Issues fixed | 5 (meta title, em-dash overuse x20+, meta description separator, one FAQ restructure, conclusion dash) |
| Open flags | 4 (all dossier-inherited, all properly hedged in article — not errors) |
| Anti-AI scan | PASS after fix |
| Factual spot-check | PASS (5/5 claims verified or properly hedged) |
| SEO checklist | PASS after fix |
| Soltius framing | PASS |
| Anti-cannibalization | PASS (distinct how-to angle, Jaccard ~0.2) |
| Image brief | PASS |
