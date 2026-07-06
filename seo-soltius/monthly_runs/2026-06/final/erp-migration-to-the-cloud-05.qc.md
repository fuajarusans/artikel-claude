---
brief_id: "erp-migration-to-the-cloud-05"
editor_run_date: "2026-06-02"
recommendation: "approve"
overall_score: 9
---

# Editor QC Report — Setelah Go-Live ERP Cloud: Tantangan yang Jarang Diceritakan (dan Cara Mengatasinya)

## Recommendation
**approve**

This article is ready to ship. The draft was substantively strong on arrival: angle is genuinely distinct (troubleshooting/post-go-live vs. the four sibling articles covering pre-migration planning), voice is human and consultative, all statistics trace directly to verified dossier sources, and the structural bones (5-item listicle + comparison table + FAQ block) are all in place. The two editorial interventions required were: (1) excessive em-dash usage in prose (18+ instances in the draft vs. the ≤2 limit), and (2) a meta description 3 chars over the 160-char ceiling. Both were fixed in-place. No factual errors were found; no Soltius framing violations; no AI tells survive. The article meets the North Star test: a senior SAP consultant leveling with a smart CIO about what actually happens after go-live.

---

## Quality scores

| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Concrete, varied rhythm; "masalah yang sesungguhnya mulai muncul" hook lands well; one AI tell (overuse of em-dashes) fixed |
| Factual & SAP-spec accuracy | 9 | All 5 spot-checked claims verified vs. dossier; ISG 2026 stat (low-confidence) was wisely not used by the writer |
| On-page SEO compliance | 9 | All checklist items pass; meta description trimmed to 149 chars; 5 H2s; 7 FAQ entries; BACA JUGA present |
| Soltius framing discipline | 10 | 2 Soltius mentions (closing + website CTA); framed correctly as implementer/AMS partner; no superlatives; no service dump |
| Internal linking | 10 | Hub BACA JUGA correct; both cousin links natural and contextually placed |
| FAQ quality | 9 | All 7 answers are 40–80 words; directly address the brief's PAA list; the AMS FAQ answer is especially strong |
| Image-brief completeness | 10 | JSON parses; 2 entries match 2 placeholders; each has alt_id, caption_id, visual_direction, suggested_asset_type in Bahasa Indonesia; no SAP screenshot required |

---

## What I fixed (changelog)

1. **Em-dash overuse (major fix)**: The draft contained 18+ em-dashes in body prose. Style guide §5 caps them at ≤2. Replaced all prose em-dashes with commas, colons, full stops, or parentheses as grammatically appropriate. Zero em-dashes remain in body prose (IMAGE placeholder text excluded, which is not reader-facing prose).
   - Example: "berjalan beriringan; kualitas hypercare sangat bergantung..." (was "berjalan beriringan — kualitas hypercare...")
   - Example: "bukan sekadar menunggu. Saatnya mengaktifkan AMS..." (was "bukan sekadar menunggu — saatnya mengaktifkan AMS...")
   - Example: "AMS mencakup pengelolaan insiden, *change request*, pembaruan kecil sistem..." colons used to introduce lists instead of dashes
   - Example: "Master data yang belum dibersihkan sebelum cutover (kode material ganda, nama vendor tidak konsisten, satuan ukuran campur aduk) akan muncul..." (was: "— kode material ganda... —")

2. **Meta description trimmed**: Original draft: 163 chars ("Proyek ERP cloud sudah go-live — tapi masalah baru mulai muncul. Panduan lengkap fase hypercare, 5 tantangan pasca migrasi, dan red flag yang perlu segera ditangani."). Edited to 149 chars: removed em-dash (replaced with "tapi"), removed "lengkap" after "Panduan".

3. **Lead paragraph restructured**: Merged the opening sentence's em-dash-separated clauses into a colon-led list structure for better rhythm: "merencanakan *ERP migration to the cloud*: memilih antara..." (was "— memilih antara...").

4. **Frontmatter word_count updated**: From 1364 to 1358 (reflecting net word reduction after em-dash restructuring removed some filler phrasing).

---

## What I flagged (open issues)

- ⚠️ **Hypercare "4–8 minggu" framing** — the dossier correctly flags this as practitioner consensus, not a formal SAP contractual specification. The final article handles this correctly with "umumnya berlangsung 4–8 minggu berdasarkan praktik implementasi, bukan ketentuan kontrak tertulis." *No action needed — correctly hedged.*

- ⚠️ **"First-party Soltius angle" (30–50% adoption lift with superuser champion)** — the strategist proposed this as a Soltius field-observation claim; the dossier flagged it as unverifiable. The writer wisely did not use the specific percentage. The concept (superuser champion effectiveness) is stated as a general practice observation without the unverifiable 30–50% number. *No action needed — writer handled correctly.*

- ⚠️ **McKinsey "70% transformation failure" stat** — dossier rates confidence as medium-high and recommends attributing as "riset McKinsey" without a specific year. The final article uses "Riset McKinsey menunjukkan bahwa..." without a year. *No action needed — correctly framed.*

- ℹ️ **ISG 2026 "60% projects over-budget" stat** — dossier flags this as low-confidence (secondary citation only). Writer did not use this stat. *No action needed.*

---

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)

- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — lead opens on a concrete action ("menghabiskan berbulan-bulan merencanakan") ✓
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — not present ✓
- [x] No "Penting untuk dicatat / dipahami bahwa" — not present ✓
- [x] "Dengan demikian" not overused — not present ✓
- [x] Em-dash count ≤2 — FIXED. Original had 18+; final has 0 in body prose ✓
- [x] Varied paragraph lengths (not all ~4 sentences) — yes: mix of 1-sentence, 2-sentence, and 4–6-sentence paragraphs ✓
- [x] Not every H2 → 3-bullet list — H2 #1 uses prose + stat; H2 #2 uses numbered list; H2 #3 uses table + prose; H2 #4 uses prose + inline numbered steps; H2 #5 uses bullet list. Good mix ✓
- [x] No generic claims without numbers — all major claims carry dossier-sourced numbers (82%, 49%, 47%, 70%) ✓
- [x] No stacked hype adjectives — not present ✓
- [x] No service-dump paragraph — Soltius closing is one well-crafted sentence mentioning AMS and the SAP Platinum + PCoE credential ✓

**Verdict: Anti-AI scan PASS.**

### B. Factual & SAP-spec spot-check

| Claim | Source check | Verdict |
|---|---|---|
| 82% SAP finance teams: data/integration as biggest challenge | dossier ✓ → insightsoftware.com Nov 2024 | pass |
| 49% post-cloud teams: integration challenges; 47%: skill gaps | dossier ✓ → insightsoftware.com Nov 2024 | pass |
| 70% large-scale transformations fail; employee resistance is primary cause | dossier ✓ → McKinsey transformation research | pass (hedged without year per dossier guidance) |
| Hypercare: typically 4–8 weeks, practitioner consensus, not formal SAP spec | dossier ✓ → SAP Community + ASUG practice docs; flagged as consensus | pass (hedged correctly) |
| Soltius "Certified AMC & AMS Partner (PCoE) in Indonesia" | company_profile.md ✓ — verified credential | pass |

**Verdict: Factual spot-check PASS. No SAP product names invented; no Soltius credentials fabricated; ECC end-of-maintenance dates not used (not relevant to this article's scope).**

### C. On-page SEO checklist (seo_playbook.md §3)

- [x] Meta title ≤60 (keyword first 30) — actual: 51 chars / keyword starts at position 1 ✓
- [x] Meta description 140–160 — actual: 149 chars ✓
- [x] Slug ≤60, kebab-case, keyword — "tantangan-pasca-go-live-erp-cloud-cara-mengatasi" = 49 chars ✓
- [x] H1 contains keyword or clear synonym — "Setelah Go-Live ERP Cloud" + "Migrasi ERP ke Cloud" signal in body; H1 topic is unmistakably about ERP migration post-go-live ✓
- [x] H2 count 4–5 content H2s (plus FAQ H2) — 5 content H2s + 1 FAQ H2 ✓
- [x] ≥1 question-format H2 — "Berapa Lama Fase Transisi Setelah Go-Live ERP Cloud?" ✓
- [x] ≥1 honest/counter-conventional H2 — "Tanda-Tanda Proyek ERP Cloud Anda Perlu Intervensi Segera" (truth-telling red-flag list) ✓
- [x] Keyword in first 100 words — "ERP migration to the cloud" appears in sentence 1 ✓
- [x] Definition snippet near top (40–60 words) — Ringkas blockquote: 54 words ✓
- [x] ≥8 LSI terms — counted: pasca go-live, hypercare, change management, adopsi pengguna, Application Management Services, integrasi sistem, kualitas data, resistensi perubahan, post-migration, SAP S/4HANA Cloud, RISE with SAP, parallel run, master data governance, superuser champion — 14 distinct LSI terms ✓
- [x] 3 internal links (1 hub + 2 cousins) — hub: BACA JUGA → migrasi-erp-ke-cloud; cousin 1: business-intelligence; cousin 2: digital-manufaktur-sistem ✓
- [x] ≥1 external authoritative citation — insightsoftware.com + McKinsey = 2 citations ✓
- [x] FAQ 5–7 Q&As — actual: 7 Q&As ✓
- [x] 2 image placeholders (up to 3) — actual: 2 (IMAGE_01, IMAGE_02) ✓
- [x] ≥1 list + ≥1 table — numbered list (5 tantangan) + bullet list (red flags) + 1 comparison table (fase timeline) ✓
- [x] Word count 1,200–1,500 — actual: ~1,358 ✓

**Verdict: On-page SEO checklist PASS (all items).**

### D. Soltius framing discipline (product_matrix.md + style_guide §11)

- [x] Soltius framed as implementer/partner, NOT "builds/makes SAP" — "mendampingi klien... melalui seluruh perjalanan pasca implementasi: dari hypercare, AMS, hingga optimisasi sistem" ✓
- [x] ≤3 Soltius self-mentions — actual: 2 (1 in closing paragraph + 1 in website CTA line) ✓
- [x] No unverifiable superlatives — not present ✓
- [x] SAP/partner product names + specs match product_matrix.md / dossier — SAP S/4HANA Cloud, RISE with SAP, SAP BTP Integration Suite, SAP Analytics Cloud, AMS — all verified against dossier and product_matrix.md ✓
- [x] Closing uses a company_profile.md positioning line — "Sebagai SAP Platinum Partner dan mitra dengan status *Certified AMC & AMS Partner* (PCoE) di Indonesia" — drawn from the verified credentials in company_profile.md ✓
- [x] Soft website CTA present as the FINAL line, after the conclusion — "Untuk mendiskusikan strategi pasca go-live dan dukungan AMS yang tepat bagi proyek ERP cloud perusahaan Anda, kunjungi [soltius.co.id](https://www.soltius.co.id/)." ✓
- [x] **BACA JUGA** callout present in body — "**BACA JUGA:** [ERP migration to the cloud](https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud)." — anchor text = exact keyword; placed after H2 #1 (definitional section) ✓

**Verdict: Soltius framing PASS.**

### E. Anti-cannibalization spot check

- **Closest prior articles for "ERP migration to the cloud"**: 4 sibling articles (briefs 01–04) exist in this cluster. Brief 01 = migration path selection (brownfield/greenfield/bluefield); Brief 02 = downtime minimization during cutover; Brief 03 = TCO/cost calculation; Brief 04 = security and UU PDP compliance.
- **This article's angle**: pasca go-live troubleshooting — adoption challenges, data quality, change management, red flags, AMS. This is a different phase entirely (post-go-live vs. pre-migration planning).
- **Subtopic overlap (Jaccard estimate)**: <0.10 with each sibling. None of the 4 sibling articles cover hypercare, change management adoption, AMS, or red-flag diagnostics as primary topics.
- **Verdict**: distinct angle confirmed. No cannibalization risk.

### F. Image-brief completeness (images.json)

- [x] JSON parses — confirmed ✓
- [x] One entry per `{IMAGE_NN: ...}` placeholder in the body — 2 placeholders, 2 entries (IMAGE_01 hero, IMAGE_02 body) ✓
- [x] Each entry has alt_id (≤125 chars) — IMAGE_01: 111 chars ✓; IMAGE_02: 116 chars ✓
- [x] Each entry has caption_id in Bahasa Indonesia — ✓ both entries
- [x] Each entry has visual_direction in Bahasa Indonesia — ✓ both entries (detailed color codes, layout specs, font guidance)
- [x] Each entry has suggested_asset_type — IMAGE_01: "infographic"; IMAGE_02: "chart" ✓
- [x] No "real SAP screenshot" requirement surfaced — both images are original design-team work (infographic + data visualization); sourcing notes confirm no SAP screenshot needed ✓
- [x] placeholder_kept_in_body: true for both entries; placeholders confirmed present in final article ✓

**Verdict: Image-brief PASS.**
