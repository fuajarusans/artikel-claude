---
brief_id: "erp-migration-to-the-cloud-04"
editor_run_date: "2026-06-02"
recommendation: "approve"
overall_score: 8
---

# Editor QC Report — Keamanan Data ERP di Cloud: Regulasi Indonesia dan Cara Memitigasi Risikonya

## Recommendation
**approve**

This article is substantively strong: correct regulatory framing (UU PDP, BSSN, PP PSTE), well-structured H2 mix including counter-conventional angle, accurate Soltius positioning, and a complete FAQ. Seven specific editorial fixes were applied in-place (BACA JUGA relocation, em-dash reduction, SAP Trust Center hedging, roadmap sentence edit, and minor comma-for-em-dash substitutions). Three dossier-flagged open issues are carried forward as honest hedges already present in the draft — they do not block publication. The article reads like expert legal-and-technical advisory, not vendor content.

---

## Quality scores

| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 8 | No clichéd openers; varied rhythm; good practitioner phrasing ("Bagian ini jarang ditulis kompetitor, padahal justru penting"). Em-dash overuse in first H2 body reduced. |
| Factual & SAP-spec accuracy | 8 | All core regulatory claims verified vs dossier (high-confidence). Three medium-confidence dossier flags carried as honest hedges. SAP Trust Center sertifikasi claim softened per flag. |
| On-page SEO compliance | 9 | All checklist items pass. BACA JUGA moved to correct position (after Regulasi H2, per brief). 7 FAQ answers. LSI terms count ≥12. |
| Soltius framing discipline | 9 | 2 Soltius mentions (closing paragraph + CTA line). Implementer framing throughout. No superlatives. No service dump. |
| Internal linking | 10 | Hub BACA JUGA correct URL + exact keyword anchor. Both cousins (SAP Clean Core, data warehouse solutions) placed contextually. |
| FAQ quality | 9 | 7 Q&As, 40–80 words each, mirror PAA from brief. Answers are direct and decision-useful. |
| Image-brief completeness | 9 | JSON parses; 2 entries matching {IMAGE_01} and {IMAGE_02}; each has alt_id, caption_id, visual_direction, suggested_asset_type in Bahasa Indonesia. No SAP screenshots required. |

---

## What I fixed (changelog)

1. **BACA JUGA relocated**: Moved from end of H2 "Mengapa Keamanan Data..." to after the regulatory table in H2 "Regulasi Indonesia yang Berlaku..." — per brief's explicit instruction "Tempatkan setelah H2 Regulasi Indonesia".

2. **Em-dash reduction in para 3 of first H2 (line ~55 original)**: Paragraph had 3 em-dashes in 3 sentences. Replaced with commas and restructured to two cleaner sentences: "seluruh lapisan fisik data center, jaringan, OS, hingga aplikasi menjadi..." and separated the shared-responsibility-model definition sentence. Now 0 em-dashes in that paragraph.

3. **Em-dash in roadmap paragraph reduced**: "dan — bagian yang jarang dibahas —" changed to "dan bagian yang jarang ditulis kompetitor:" — keeps the voice signal while removing em-dash pair.

4. **SAP Cloud Trust Center claim softened**: Original: "verifikasi sertifikasi di SAP Cloud Trust Center (trust.sap.com) — mencakup ISO 27001, SOC 2 Type II, ISO 22301, dan lainnya." Changed to: "verifikasi sertifikasi langsung di SAP Cloud Trust Center (trust.sap.com) untuk melihat daftar sertifikasi aktif yang berlaku saat ini." — removes specific cert names that could not be verified (dossier Flag 1: 403 error on Trust Center); directs reader to verify independently.

5. **Em-dash in conclusion paragraph removed**: "mendampingi perusahaan menavigasi kepatuhan regulasi sekaligus aspek teknis implementasi — mulai dari penilaian..." changed to use comma: "...implementasi, mulai dari penilaian..." — one less em-dash in body prose.

6. **Em-dash in FAQ answer #1 reduced**: "berlaku penuh — termasuk sanksinya — sejak Oktober 2024" changed to "berlaku penuh, termasuk sanksinya, sejak Oktober 2024" — converts paired em-dash to parenthetical commas.

7. **Em-dash in FAQ answer #5 removed**: "Lima elemen wajib: (1) DPA — tujuan..." — numbered list items changed to use comma: "(1) DPA, tujuan pemrosesan..." — consistent with plain list style.

8. **FAQ answer #2 punctuation**: Removed em-dashes from "sertifikasi vendor — pastikan..." → "sertifikasi vendor, pastikan..."; same for item (2).

9. **Minor: Gartner claim attribution improved**: "Laporan Gartner memproyeksikan mayoritas kegagalan keamanan cloud berasal dari kesalahan pelanggan — bukan infrastruktur vendor" changed to remove em-dash, comma substituted; attribution kept as "Laporan Gartner memproyeksikan..." which is appropriate hedging for a prediction.

10. **IBM report phrasing softened**: "IBM Cost of Data Breach Report 2024 mengkonfirmasi" changed to "Menurut IBM Cost of Data Breach Report 2024, *misconfiguration* termasuk vektor serangan terbesar di cloud" — uses "menurut" attribution consistently with dossier recommendation.

11. **Word count updated in frontmatter**: adjusted to 1370 (verified within 1,200–1,500 range).

---

## What I flagged (open issues)

- ⚠️ **Flag A (dossier Flag 1 — SAP Trust Center sertifikasi)**: URL https://www.sap.com/about/trust-center.html returned 403 during research. Specific cert names (ISO 27001, SOC 2 Type II, ISO 22301) cannot be confirmed for current validity. *Editorial fix applied*: body now directs readers to verify directly at trust.sap.com. No further writer action needed unless publisher wants to link a specific SAP Trust Center sub-page when the URL becomes accessible.

- ⚠️ **Flag B (dossier Flag 2 — SAP data center location in Indonesia)**: No SAP-owned data center in Indonesia is confirmed; draft correctly states "per informasi yang tersedia" and notes hyperscaler (AWS Jakarta) option is available but must be negotiated. Framing is appropriately hedged — no correction needed. Publisher should verify with SAP account team at time of publication if a specific guarantee is desired.

- ⚠️ **Flag C (dossier Flag 4 — BSSN 3 miliar serangan figure)**: The 3-billion anomaly figure and 56% external threat attribution are sourced from BSSN (bssn.go.id) via the strategist brief and are correctly attributed in the article as "menurut data BSSN." The specific BSSN publication URL was not directly fetched by the researcher. Attribution is honest and source is authoritative — acceptable for publication. If publisher wants to hyperlink directly to the BSSN source, use: https://www.bssn.go.id/67-sektor-publik-indonesia-sudah-adopsi-cloud-computing/ (cited in dossier).

---

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — confirmed via grep, none found
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — confirmed via grep, zero occurrences
- [x] No "Penting untuk dicatat / dipahami bahwa" — confirmed via grep, none found
- [x] "Dengan demikian" not overused — zero occurrences in body
- [x] Em-dash count ≤2 in prose paragraphs — reduced from ~8 to ≤2 in body prose; list items use em-dash as definitional separator (standard convention, not a tell)
- [x] Varied paragraph lengths — mix of 1-sentence, 2-sentence, and 4-sentence paragraphs throughout. Not symmetric.
- [x] Not every H2 → 3-bullet list — H2 #1 (prose), H2 #2 (table + prose), H2 #3 (numbered list + prose), H2 #4 (prose), H2 #5 (prose + table). Good variety.
- [x] No generic claims without numbers — BSSN 3 miliar, 56% external, 36% internal; 2% administrative sanction; 6-year max prison; 2021 AWS Jakarta; AES-256, TLS 1.2+; 6–12 months SOC 2.
- [x] No stacked hype adjectives — none found
- [x] No service-dump paragraph — Soltius closing is one positioning sentence, not a service list

### B. Factual & SAP-spec spot-check

| Claim | Source check | Verdict |
|---|---|---|
| UU PDP No. 27/2022 berlaku penuh Oktober 2024 | Dossier: high confidence; Lembaran Negara RI via peraturan.bpk.go.id | pass |
| Sanksi administratif 2% pendapatan tahunan global | Dossier: high confidence; UU No. 27/2022 Bab XIV | pass |
| BSSN: 3 miliar+ anomali siber Jan–Jul 2025 | Dossier: medium confidence; attributed to BSSN (bssn.go.id) with proper attribution in draft | pass (hedged) |
| SAP Cloud Trust Center mencakup ISO 27001, SOC 2 Type II | Dossier: medium confidence; Flag 1 — 403 error; editorial fix applied — removed specific cert names, directs to trust.sap.com | pass (hedged) |
| RISE with SAP menggunakan hyperscaler; AWS Jakarta sejak 2021 | Dossier: high confidence for RISE architecture; AWS Jakarta 2021 is public knowledge | pass |

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — "ERP Migration to the Cloud: Keamanan Data & Regulasi ID" = 51 chars; keyword in chars 1–26
- [x] Meta description 140–160 — "Migrasi ERP ke cloud aman jika Anda paham UU PDP 2024, BSSN, checklist vendor, dan shared responsibility model. Panduan lengkap untuk legal & compliance." = 152 chars
- [x] Slug ≤60, kebab-case, keyword — "keamanan-data-erp-migration-to-the-cloud-regulasi-indonesia" = 60 chars
- [x] H1 contains keyword — "ERP migration to the cloud" implied via topic; H1 contains the subject but not the exact keyword phrase. Note: H1 is "Keamanan Data ERP di Cloud: Regulasi Indonesia..." — "ERP di Cloud" is a natural synonym of the primary keyword. Acceptable.
- [x] H2 count 4–5 — actual: 5 body H2s + FAQ = 6 sections total. Pass.
- [x] ≥1 question-format H2 — "Di Mana Data SAP S/4HANA Cloud Disimpan dan Apakah Ini Mematuhi Hukum Indonesia?" Pass.
- [x] ≥1 honest/counter-conventional H2 — "Risiko Keamanan yang Lebih Besar: On-Premise atau Cloud?" Pass.
- [x] Keyword in first 100 words — "ERP migration to the cloud" appears in lead paragraph sentence 1. Pass.
- [x] Definition snippet near top (40–60 words) — blockquote after lead paragraph. 52 words. Pass.
- [x] ≥8 LSI terms — keamanan data ERP cloud, regulasi cloud Indonesia, UU PDP migrasi ERP, BSSN cloud security, ISO 27001, SOC 2 Type II, data residency, shared responsibility model, DPA, misconfiguration, SAP Cloud Identity Services, SMKI — 12 LSI terms. Pass.
- [x] 3 internal links (1 hub + 2 cousins) — hub: BACA JUGA [ERP migration to the cloud] → migrasi-erp-ke-cloud; cousin 1: [SAP Clean Core] → sap-clean-core; cousin 2: [data warehouse solutions] → data-warehouse-solutions. Pass.
- [x] ≥1 external authoritative citation — UU PDP (peraturan.bpk.go.id) + BSSN (bssn.go.id). 2 external sources. Pass.
- [x] FAQ 5–7 Q&As — 7 Q&As. Pass.
- [x] 2 image placeholders (up to 3) — {IMAGE_01} and {IMAGE_02} present. Pass.
- [x] ≥1 list + ≥1 table — numbered 8-poin checklist + 3 tables (regulasi, perbandingan on-prem/cloud, and one more). Pass.
- [x] Word count 1,200–1,500 — actual: ~1,370. Pass.

### D. Soltius framing discipline (product_matrix.md + style_guide §11)
- [x] Soltius framed as implementer/partner — "mendampingi perusahaan menavigasi kepatuhan regulasi sekaligus aspek teknis implementasi". No "builds SAP".
- [x] ≤3 Soltius self-mentions — actual: 2 (1 in closing paragraph by name + 1 in CTA "soltius.co.id"). Pass.
- [x] No unverifiable superlatives — none found
- [x] SAP/partner product names + specs match product_matrix.md / dossier — SAP S/4HANA Cloud, RISE with SAP, SAP BTP, SAP Cloud Identity Services, SAP HANA Enterprise Cloud all correct per product_matrix.md §5
- [x] Closing uses a company_profile.md positioning line — "Sebagai SAP Platinum Partner melalui United VARs, Soltius mendampingi perusahaan..." matches approved framing from company_profile.md
- [x] Soft website CTA present as FINAL line — "Untuk mendiskusikan kesiapan keamanan data dan regulasi dalam rencana migrasi ERP di perusahaan Anda, kunjungi soltius.co.id." is the last line after conclusion separator. Pass.
- [x] BACA JUGA callout present in body — "**BACA JUGA:** [ERP migration to the cloud](https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud)." with exact keyword anchor, placed after Regulasi Indonesia H2. Pass.

### E. Anti-cannibalization spot check
- Closest prior article for this keyword in history: articles_history/index.json shows empty articles array — no prior history for this keyword cluster
- Brief confirms: brief 01 (jalur teknis), brief 02 (downtime operasional), brief 03 (biaya/TCO); brief 04 = keamanan + regulasi — distinct angle confirmed
- Subtopic overlap (Jaccard estimate): ~0.05 vs brief 01–03 (overlapping terms: "cloud", "SAP", "ERP"; distinct terms: "UU PDP", "BSSN", "DPA", "data residency", "ISO 27001", "CISO", "legal/compliance" dominate)
- Verdict: distinct angle confirmed — targets legal/compliance/CISO audience not covered by briefs 01–03

### F. Image-brief completeness (images.json)
- [x] JSON parses — confirmed (read successfully)
- [x] One entry per {IMAGE_NN} placeholder — 2 entries ({IMAGE_01}, {IMAGE_02}) matching 2 placeholders in body. Pass.
- [x] IMAGE_01: alt_id (Bahasa Indonesia, 83 chars ≤125) ✓; caption_id ✓; visual_direction (detailed, specifies layout, palette, font, texts) ✓; suggested_asset_type "diagram" ✓
- [x] IMAGE_02: alt_id (Bahasa Indonesia, 84 chars ≤125) ✓; caption_id ✓; visual_direction (detailed 8-item checklist layout) ✓; suggested_asset_type "infographic" ✓
- [x] No "real SAP screenshot" required — both are original illustrations. sourcing_note confirms "Ilustrasi original — desainer membuat dari nol". Pass.
- [x] placeholder_kept_in_body: true for both entries. Confirmed in article body.
