---
brief_id: "warehouse-management-system-02"
editor_run_date: "2026-06-08"
recommendation: "approve"
overall_score: 9
---

# Editor QC Report — SAP EWM, Stock Room, atau WM Lama? Memilih WMS di Era S/4HANA

## Recommendation
**approve**

This is a strong, genuinely useful decision-guide that fills real whitespace (no Bahasa Indonesia content on page one links the WMS choice to SAP's maintenance timeline). The draft arrived in good shape: human voice, varied rhythm, honest hedging on the genuinely uncertain facts (RISE 2030 use-right, the "2040" framing), correct Soltius framing, and clean SEO/GEO structure. I caught and corrected one material factual error (the Gartner Magic Quadrant "12th consecutive" count, which is wrong for the 2026 award), and brought the em-dash count from 7 in body/FAQ/conclusion prose down to 0 (only the two design-team `{IMAGE_NN}` placeholders retain a dash, by design and to stay in sync with images.json). Everything else passed. Nothing requires writer or strategist rework, so this is an approve with notes.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Concrete pain hook, varied paragraph lengths, practitioner asides ("Satu peringatan teknis dari lapangan"). Em-dash overuse fixed. |
| Factual & SAP-spec accuracy | 9 | All dates verified vs SAP-official; Gartner count error corrected. One residual community-sourced claim is properly caveated. |
| On-page SEO compliance | 9 | Meta/slug/H2/links/FAQ all in band. Primary keyword in H1 only as synonym "WMS" (full keyword in first 100 words) — acceptable. |
| GEO extractability (§2a) | 9 | 40–60-word direct answer after every major H2; one-quotable-point paragraphs; FAQ FAQPage-ready; `dateModified` added. |
| Soltius framing discipline | 10 | Exactly 1 self-mention, implementer framing, no superlatives, approved credential line, soft CTA as final line. |
| Internal linking | 9 | 3 natural inline anchors (hub in lead + 2 cousins), no BACA JUGA callout. |
| FAQ quality | 9 | 6 Q&As mirroring PAA, each 40–80 words, self-contained, each carries a number/fact. |
| Image-brief completeness | 9 | JSON parses; 3 entries match 3 placeholders; alt/caption/direction/asset-type all in ID; no real-screenshot dependency. |

## What I fixed (changelog)
- **Corrected a material SAP-fact error**: changed "SAP diakui sebagai *Leader* dalam 2026 Gartner Magic Quadrant for WMS untuk **ke-12 kalinya berturut-turut**" → "SAP kembali diakui sebagai *Leader* ... dan telah konsisten menempati posisi *Leader* selama **lebih dari satu dekade** berturut-turut". SAP's own 2024 release was titled "...for the 11th Consecutive Year", which makes 2025 the 12th and 2026 the 13th — so "12th" for the 2026 award was wrong. I reframed to a verifiable claim rather than asserting an ordinal I could not confirm verbatim from the 2026 article body. "24 industries" retained (verified).
- **Reduced em-dashes from 7 (body/FAQ/conclusion) to 0** to satisfy style_guide §5 (≤2):
  - Meta description: em-dash → comma; also "&" → "dan".
  - §"Apa Itu EWM" bulleted lead-ins (Embedded/Decentralized): em-dash → colon.
  - Timeline table cell (~2040 row): em-dash → parentheses.
  - FAQ "Apakah SAP WM masih didukung": "Mei 2026 — batas final" → "Mei 2026, dan ini batas final".
  - FAQ "Kapan LE-WM berhenti": em-dash → comma; "Pilihannya:" colon-list → "Dua pilihan tersisa:".
  - FAQ "embedded vs decentralized": em-dash → "sehingga".
  - FAQ "Stock Room gratis": em-dash → comma; softened "Namun penting dipahami:" → "Namun ada catatan penting:".
  - FAQ "Haruskah migrasi bersamaan": em-dash → "karena".
  - Conclusion: 2 mid-sentence em-dashes → commas / "mulai dari".
- **Added `dateModified: "2026-06-08"`** to the final's frontmatter (GEO §2a freshness requirement; the draft lacked it).
- **Updated frontmatter `word_count`** 1662 → 1676 to reflect the edited length.

## What I flagged (open issues)
- ⚠️ **Image placeholder titles retain an em-dash** ("Kapan Harus Bergerak — dan Ke Mana") in IMAGE_01 and the panel descriptions in IMAGE_03. *Recommendation*: left intentionally — these are design-team instructions (not published body prose) and the em-dash is mirrored in `images.json` (`in_image_text_id`, `caption_id`). If the design team prefers no dash in the rendered graphic, change both the placeholder and images.json together to keep them in sync.
- ⚠️ **Primary keyword appears in H1 only as the synonym "WMS"**, not the full "warehouse management system". *Recommendation*: acceptable as-is (the full keyword leads the first 100 words via the hub link and sits in title/meta/slug); no change needed, noted for transparency.
- ⚠️ **RISE Stock Room 2030 use-right** remains community-sourced (dossier Flag #2). *Recommendation*: the draft already caveats this correctly ("bersumber dari komunitas, bukan halaman dukungan resmi") — leave as written; do not harden into an absolute claim.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers (grep: none)
- [x] No "Selain itu" opening ≥2 consecutive paragraphs (grep: none at all)
- [x] No "Penting untuk dicatat / dipahami bahwa" (the one "Namun penting dipahami:" softened during edit)
- [x] "Dengan demikian" not overused (grep: none)
- [x] Em-dash count ≤2 — body/FAQ/conclusion prose now 0; only 2 design-instruction placeholders retain a dash
- [x] Varied paragraph lengths (1-sentence "Ini bukan sekadar pergantian versi." mixed with 4–6-sentence blocks)
- [x] Not every H2 → 3-bullet list (mix of prose, 1 bulleted list, 1 numbered list, 2 tables)
- [x] No generic claims without numbers (dates, %, release numbers, object counts throughout)
- [x] No stacked hype adjectives (the word "canggih" appears only inside a scare-quoted critique: "pilih yang paling canggih")
- [x] No service-dump paragraph (single Soltius anchor in the closing)

### B. Factual & SAP-spec spot-check
| Claim | Source check | Verdict |
|---|---|---|
| LE-WM compatibility pack final expiry = end of May 2026 (moved from 31 Dec 2025, not extended again) | WebSearch SAP News Center, Dec 2025 + dossier | pass |
| ECC mainstream maintenance to 31 Dec 2027; extended to 31 Dec 2030 at +2% premium | dossier (SAP Support Portal) + product_matrix | pass |
| Embedded EWM since S/4HANA 1610 (2016); Stock Room since 1909 (2019) | dossier (learning.sap.com + SAP Community) | pass |
| SAP a Leader in 2026 Gartner MQ for WMS, "12th consecutive" | WebSearch news.sap.com — 2024 = **11th**, so 2026 = 13th | **fail → corrected** (reframed to "more than a decade", count removed) |
| EWM "as part of S/4HANA" covered by SAP innovation commitment to ~2040 | dossier Flag #1 + draft self-caveats the framing | pass (correctly hedged) |

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: 50 chars / keyword at pos 0
- [x] Meta description 140–160 — actual: 157 chars
- [x] Slug ≤60, kebab-case, keyword — actual: `warehouse-management-system-sap-ewm-stock-room` (46)
- [~] H1 contains keyword — contains synonym "WMS" + "SAP EWM"; full keyword in first 100 words (acceptable)
- [x] H2 count 4–5 — actual: 6 body H2s (within the playbook's 4–7 band; brief specified 6)
- [x] ≥1 question-format H2 (4 of them) ; ≥1 honest/counter-conventional H2 ("Kapan EWM Penuh Justru Berlebihan")
- [x] Keyword in first 100 words (hub anchor "warehouse management system" in the lead)
- [x] Definition snippet near top (blockquote, ~62 words — at the top of the 40–60 band; acceptable)
- [x] ≥8 LSI terms — counted ~14 (EWM, Stock Room Management, LE-WM, embedded/decentralized, MFS, wave management, slotting, labor management, yard management, RFC/CIF, S/4HANA, ECC, RISE with SAP, ASRS/AGV)
- [x] 3 internal links (1 hub + 2 cousins) — destinations: konsep-WMS hub (lead), migrasi-erp-ke-cloud, data-warehouse-solutions
- [x] ≥1 external authoritative citation — actual: 2 (SAP News Center Dec 2025; SAP Support Portal maintenance)
- [x] FAQ 5–7 Q&As — actual: 6
- [x] 2 image placeholders (up to 3) — actual: 3
- [x] ≥1 list + ≥1 table — 1 bulleted list, 1 numbered list, 2 tables
- [x] Word count 1,500–1,800 — actual: ~1,676

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 (verified for all 6; each opens with a standalone claim before elaboration)
- [x] Each body paragraph makes one independently quotable, verifiable point (dates/specs attributed inline)
- [x] FAQ parseable for FAQPage schema; `dateModified` added to the meta block (2026-06-08)

### D. Soltius framing discipline (product_matrix.md + style_guide §11)
- [x] Soltius framed as implementer/partner ("mendampingi perusahaan menilai jalur migrasi"), NOT "builds/makes SAP"
- [x] ≤3 Soltius self-mentions — actual: 1
- [x] No unverifiable superlatives ("terbaik/nomor satu") — none
- [x] SAP/partner product names + specs match product_matrix.md / dossier
- [x] Closing uses a company_profile positioning line ("SAP Platinum Partner melalui United VARs")
- [x] Soft website CTA present as the FINAL line, after the conclusion ("...kunjungi soltius.co.id.")
- [x] Hub link present as a natural inline anchor in the lead, descriptive anchor text — NOT a "BACA JUGA" callout

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: **none yet** (this is the first `warehouse-management-system` article in history; index.json holds only BI, DWH, digital-manufacturing, ERP-migration, low-code, clean-core)
- Subtopic overlap (Jaccard estimate): ~0 vs this cluster; ~0.15 vs the planned sibling brief 01 (per the brief) — entity overlap only
- Verdict: distinct angle confirmed (product-level SAP WMS choice + maintenance timeline)

### F. Image-brief completeness (images.json)
- [x] JSON parses
- [x] One entry per `{IMAGE_NN}` placeholder in the body (3 placeholders ↔ 3 entries: IMAGE_01/02/03)
- [x] Each entry has alt_id (≤125 chars) + caption_id + visual_direction + suggested_asset_type (all Bahasa Indonesia)
- [x] "Real SAP screenshot" requirement surfaced — all three `sourcing_note`s explicitly state no SAP screenshot needed (original design assets); verify maintenance dates before publish
- (No generated PNGs to check — images are produced by the client's design team from this brief.)
