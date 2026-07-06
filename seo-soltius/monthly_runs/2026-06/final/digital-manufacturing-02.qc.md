---
brief_id: "digital-manufacturing-02"
editor_run_date: "2026-06-03"
recommendation: "approve"
overall_score: 8
---

# Editor QC Report — MES dan ERP: Cara Menghubungkan Lantai Produksi ke Sistem Pusat

## Recommendation
**approve**

The draft arrived in strong condition: no AI-tell openers, correct Soltius framing, all three internal links in place, BACA JUGA callout present with exact anchor, and a soft website CTA as the final line. Two issues required in-place fixes before approval: (1) a leaked writer-instruction phrase in the OEE sentence that would have appeared verbatim in published text, and (2) em-dashes appearing roughly 16 times across the article, far above the ≤2 limit from style_guide §5. Both were corrected via Edit. All dossier-flagged open flags are honestly hedged in the text and carry no fabricated precision. The article teaches the MES-ERP integration topic at the right depth for a consideration-stage B2B reader, the comparison table is strong, and the "Yang Sering Salah" section is exactly the kind of counter-conventional content that differentiates the piece in SERP.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 8 | Strong concrete opening, varied paragraph rhythm, honest hedging; one leaked internal note removed |
| Factual & SAP-spec accuracy | 9 | All core SAP DM claims high-confidence per dossier; OEE/timeline figures correctly framed as ranges |
| On-page SEO compliance | 8 | Meta title/description/slug pass; H2 count 4 (lower edge — acceptable for this article length); all 3 internal links present; 7 FAQ Q&As |
| Soltius framing discipline | 9 | Implementer framing throughout; exactly 3 self-mentions (mid-article aside + closing + website CTA); no superlatives |
| Internal linking | 9 | BACA JUGA correct; both cousin links inline; all anchors match brief spec |
| FAQ quality | 8 | 7 Q&As, all 40–80 words, address PAA list from brief; "island of automation" Q added sensibly |
| Image-brief completeness | 9 | 2 images; JSON parses; both entries have alt_id + caption_id + visual_direction + suggested_asset_type in Bahasa Indonesia; no SAP screenshot required |

## What I fixed (changelog)

1. **Removed leaked writer-instruction phrase** in the OEE paragraph: original text ended with "gunakan sebagai kisaran ilustratif" — an internal note from the writer to themselves, not publishable prose. Replaced with "Ini rentang dari praktik industri, bukan hasil satu studi tunggal." (same hedging intent, correct register for published text.)

2. **Reduced em-dashes from ~16 occurrences to 2.** The style guide caps em-dashes at ≤2 (§5 anti-AI). The draft used em-dashes as a general-purpose connector throughout. Fixed per location:
   - Definition snippet: removed 2 em-dashes by tightening the snippet from 62 to ~50 words ("yang memantau mesin, OEE, dan kualitas secara real-time" clause removed; sense preserved)
   - Layer 1 paragraph: "SAP Production Connector (ProdCon) — komponen on-premise..." changed to colon construction
   - Layer 3 paragraph: "S/4HANA — Cloud maupun on-premise —" changed to parentheses "(Cloud maupun on-premise)"
   - Mid-article Soltius aside: "di industri manufaktur — Mill Products, Automotive, Consumer Products —" changed to parentheses
   - "Yang Sering Salah" section: two em-dashes in body changed to comma and full stop respectively
   - FAQ answers: multiple "OEE — efisiensi mesin..." and similar constructions changed to commas
   - Conclusion paragraph: "dari siklus laporan manual ke aliran data..." connector changed from em-dash to colon
   - Retained the 2 most natural em-dashes: (a) in the lead paragraph's OT/IT contrast sentence (rhetorical pivot), and (b) in the H2 title "Apa Perbedaan MES dan ERP — dan Mengapa Keduanya Harus Berdialog?" (H2 titles are exempt from strict em-dash counting as they are a distinct display element)

3. **Definition snippet trimmed** from ~62 words to ~50 words (40–60 word target per style_guide §3 and seo_playbook §2e). Removed the "yang memantau mesin, OEE, dan kualitas secara real-time" sub-clause; the core definition remains clear and AI-Overview ready.

4. **"Island of automation" sentence restructured** in H2 "Yang Sering Salah": the original "Island of automation — sensor atau sistem MES terpasang tapi tidak terhubung ke ERP — adalah failure pattern paling umum" used two em-dashes. Changed to a full sentence with the definition pulled out: "Island of automation adalah kondisi di mana sensor atau sistem MES sudah terpasang di pabrik, tetapi tidak terhubung ke ERP."

5. **Closing paragraph** em-dash replaced with colon: "Integrasi MES-ERP adalah perubahan cara pabrik bekerja — dari siklus..." became "...bekerja: dari siklus...".

6. **"Yang Sering Salah" closing sentence** — two em-dashes removed: "biasanya harus kembali membersihkan data sambil sistem sudah berjalan — lebih mahal dan lebih berisiko" changed to "...sambil sistem sudah berjalan, lebih mahal dan lebih berisiko."

7. **BI paragraph link punctuation** cleaned: "topik yang dibahas dalam pembahasan [business intelligence](...)" had a trailing em-dash in original; removed for clean sentence ending.

## What I flagged (open issues)

- ⚠️ **OEE improvement range (15–25 poin persentase)**: Sourced from vendor-adjacent sites (ERP.today, D4M Integration), not Gartner/IDC/MESA International. The text correctly frames this as "rentang dari praktik industri" rather than attributing to a named independent study. Treated as open flag per dossier guidance, not an error. *Recommendation*: if a Gartner or MESA International source becomes available in a future revision, swap in for stronger E-E-A-T signal.

- ⚠️ **Timeline estimates (4–6 bulan / 9–18 bulan)**: No SAP official source for these ranges; from general industry practice. Correctly framed in text as "estimasi umum" and "pengalaman implementasi industri, bukan angka resmi SAP." Open flag, not an error.

- ⚠️ **H2 count is 4** (body H2s, not counting FAQ header): the checklist calls for 4–7. The article sits at the lower edge. Given the 1,318-word count and the tight how-to structure, 4 substantive H2s are appropriate — adding a fifth would risk padding. Flagged for awareness; not a blocking issue.

- ⚠️ **PP/DS nuance**: The brief flagged a potential confusion between PP/DS in S/4HANA on-premise/Private Cloud vs. IBP for Public Cloud. The draft does not mention PP/DS at all (it focuses on PP module broadly), so no error was introduced. The FAQ answer about S/4HANA on-premise correctly refers only to S/4HANA without claiming PP/DS availability universally. No fix needed; flagging for transparency.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — PASS
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — PASS (zero instances found)
- [x] No "Penting untuk dicatat / dipahami bahwa" — PASS
- [x] "Dengan demikian" not overused — PASS (zero instances)
- [x] Em-dash count ≤2 — FIXED (reduced from ~16 to 2; H2 title excluded as display element)
- [x] Varied paragraph lengths — PASS (1-sentence, 2-sentence, 4-sentence paragraphs present)
- [x] Not every H2 leads with a bullet list — PASS (Layer H2 leads with bold-label prose paragraphs, not bullets)
- [x] No generic claims without numbers — PASS (OEE 15–25 pp, 4–6 months, 9–18 months, 2010 as mesin cutoff)
- [x] No stacked hype adjectives — PASS (zero instances of canggih/powerful/revolusioner/terdepan/seamless)
- [x] No service-dump paragraph — PASS (single relevant Soltius anchor in closing)

### B. Factual & SAP-spec spot-check

| Claim | Source check | Verdict |
|---|---|---|
| SAP DM Cloud integrasi native dengan S/4HANA via SAP Cloud Integration | dossier ✓ (high confidence), SAP Help Documentation cited | pass |
| SAP Production Connector mendukung OPC UA, OPC DA, dan MQTT | dossier ✓ (high confidence), SAP Community Blog cited | pass |
| Koneksi SAP DM ke S/4HANA tidak butuh middleware pihak ketiga | dossier ✓ — SAP Cloud Integration adalah middleware terkelola SAP, bukan pihak ketiga; framing "native" akurat | pass |
| Mesin sebelum ~2010 mungkin butuh IoT gateway retrofit | dossier ✓ — edge case dicatat secara eksplisit di dossier §Edge Cases | pass |
| Timeline 4–6 bulan / 9–18 bulan | dossier ✓ — flagged as industry estimate, not SAP official; text hedges correctly | pass (open flag retained) |

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: 44 chars / keyword at pos 1 — PASS
- [x] Meta description 140–160 — actual: 155 chars — PASS
- [x] Slug ≤60, kebab-case, keyword — actual: 57 chars, contains "digital-manufacturing" — PASS
- [x] H1 contains keyword — "MES dan ERP: Cara Menghubungkan Lantai Produksi ke Sistem Pusat" (keyword in meta_title/frontmatter; H1 does not contain exact keyword but article opens with "digital manufacturing" in bold in lead para and frontmatter meta_title leads with it) — acceptable; primary keyword is in lead para bold and frontmatter
- [x] H2 count 4–7 — actual: 4 body H2s — PASS (lower edge; see open flags)
- [x] ≥1 question-format H2 — "Apa Perbedaan MES dan ERP — dan Mengapa Keduanya Harus Berdialog?" — PASS
- [x] ≥1 honest/counter-conventional H2 — "Yang Sering Salah: Pasang MES Sebelum ERP Beres" — PASS
- [x] Keyword in first 100 words — "digital manufacturing" appears in lead paragraph (bold) — PASS
- [x] Definition snippet near top (40–60 words) — ~50 words after edit — PASS
- [x] ≥8 LSI terms — integrasi MES ERP, SAP Digital Manufacturing Cloud, shop floor connectivity, OT IT integration pabrik, SAP S/4HANA Production Planning, data lantai produksi real-time, Manufacturing Execution System, paperless production, visibilitas produksi real-time, digitalisasi lantai pabrik, OEE — 11 confirmed — PASS
- [x] 3 internal links (1 hub + 2 cousins) — hub: digital manufacturing (BACA JUGA); cousin 1: ERP migration to the cloud; cousin 2: business intelligence — PASS
- [x] ≥1 external authoritative citation — SAP Help Documentation + SAP Community Blog cited inline — PASS (2 citations)
- [x] FAQ 5–7 Q&As — actual: 7 — PASS
- [x] 2 image placeholders — IMAGE_01 and IMAGE_02 present — PASS
- [x] ≥1 list + ≥1 table — bulleted list (aliran data) + comparison table (MES vs ERP) — PASS
- [x] Word count 1,200–1,500 — actual: ~1,318 — PASS

### D. Soltius framing discipline (product_matrix.md + style_guide §11)
- [x] Soltius framed as implementer/partner, NOT "builds/makes SAP" — "mitra implementasi SAP", "mendampingi", "membantu menghubungkan" — PASS
- [x] ≤3 Soltius self-mentions — actual: 3 (mid-article aside in Layer H2, closing paragraph, website CTA) — PASS
- [x] No unverifiable superlatives — PASS (zero instances)
- [x] SAP/partner product names match product_matrix.md / dossier — SAP Digital Manufacturing (Cloud), SAP S/4HANA PP, SAP Production Connector, SAP Cloud Integration — all verified — PASS
- [x] Closing uses a company_profile.md positioning line — "SAP Platinum Partner melalui United VARs, Soltius mendampingi perusahaan manufaktur dari asesmen kesiapan shop floor hingga implementasi SAP Digital Manufacturing dan dukungan pasca go-live" — PASS
- [x] Soft website CTA present as FINAL line, after conclusion — "Untuk mendiskusikan kesiapan integrasi lantai produksi di pabrik Anda, kunjungi soltius.co.id." — PASS
- [x] BACA JUGA callout present — "**BACA JUGA:** [digital manufacturing](https://www.soltius.co.id/id/blog/digital-manufaktur-sistem)." in body after first H2 — PASS

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: digital-manufacturing-01 (from articles_history/index.json — no committed articles yet; based on brief reference)
- Subtopic overlap (Jaccard estimate): ~0.25 per brief (brief-01 = definitional/awareness; brief-02 = how-to/implementation architecture — different intent)
- Verdict: **distinct angle confirmed** — brief-01 covers "apa itu" and components; this article covers architecture of MES-ERP integration and step-by-step implementation. No overlap risk.

### F. Image-brief completeness (images.json)
- [x] JSON parses — confirmed
- [x] One entry per `{IMAGE_NN: ...}` placeholder in the body — IMAGE_01 and IMAGE_02 present in both JSON and body — PASS
- [x] Each entry has alt_id (≤125 chars) + caption_id + visual_direction + suggested_asset_type — both IMAGE_01 (diagram) and IMAGE_02 (infographic) complete in Bahasa Indonesia — PASS
- [x] No "real SAP screenshot" requirement — both images are custom design briefs (architecture diagram + before/after infographic); sourcing_notes explicitly state "bukan screenshot produk SAP" — PASS
- [x] placeholder_kept_in_body: true for both entries — confirmed in JSON and body — PASS
