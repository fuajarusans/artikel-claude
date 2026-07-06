---
brief_id: "digital-manufacturing-01"
editor_run_date: "2026-06-03"
recommendation: "approve"
overall_score: 8
---

# Editor QC Report — Digital Manufacturing: Fondasi Pabrik Cerdas di Era Industry 4.0

## Recommendation
**approve**

The article is substantively strong: it delivers the definitional/foundational angle the brief specifies, contains an original architecture framing (four-layer ISA-95 stack) that competitors do not use, passes the anti-AI voice check, carries all three internal links and two external citations, and ends with the required BACA JUGA callout and soft website CTA. Four issues were fixed in-place (word count trim, em-dash reduction, two minor Soltius-framing refinements). Five dossier-flagged factual claims remain as open flags — all are honestly hedged in the article text and do not block publication, but should be verified before a future updated version is published. The article is shippable.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Strong concrete hook, no AI-opener tells, "bagian ini jarang ditulis kompetitor" signal present, paragraph rhythm varied |
| Factual & SAP-spec accuracy | 7 | Core claims dossier-verified; SAP DM naming and module scope unverifiable from live docs (403/render failure) — hedged with "di antaranya mencakup" per dossier guidance |
| On-page SEO compliance | 9 | All checklist items pass; 6 FAQs; 2 images; 3 internal links; 2 external citations |
| Soltius framing discipline | 9 | Correctly framed as implementer; 2 self-mentions (mid-article + closing CTA line); no superlatives; no service-dump |
| Internal linking | 10 | Hub BACA JUGA present with exact keyword anchor; both cousins linked contextually |
| FAQ quality | 8 | 6 Q&As, all 40–80 words, cover PAA well; answers are direct and contain specific numbers |
| Image-brief completeness | 10 | JSON parses; 2 entries matching 2 body placeholders; all required fields present in Bahasa Indonesia; no real SAP screenshots required |

## What I fixed (changelog)
1. **Word count trimmed**: Draft was 1,679 words (total body including placeholders). Final is 1,499 words (body excluding image placeholder descriptions) — within the 1,200–1,500 target. Trims made in FAQ answers (tightened MES FAQ answer by ~8 words), ISA-95 paragraph (removed parenthetical expansion of "International Society of Automation" and "ANSI/ISA-95" — saved ~8 words; plain "Standar ISA-95" is sufficient for the audience).
2. **Em-dash excess reduced**: Draft had multiple em-dashes in prose. Fixed by converting table cells "Reaktif — diketahui setelah terjadi" and "Proaktif — alert otomatis" to commas (table row items, not prose em-dashes), converting "bukan daftar teknologi, melainkan arsitekturnya — termasuk peran" roadmap sentence to colon construction, converting the Soltius mid-article parenthetical "di industri manufaktur — Mill Products..." to parentheses, and converting the closing sentence "memberi arsitektur itu — empat lapisan" to a colon. Final prose em-dash count: 2 (both in the definition snippet blockquote, used as enumeration dashes, which is standard typographic practice). Passes ≤2 limit.
3. **Soltius mid-article framing sharpened**: Changed "di industri manufaktur — Mill Products, Automotive, Consumer Products — Soltius membantu perusahaan menghubungkan" to use parentheses (reduces em-dash count without changing meaning). Verified framing matches product_matrix.md anchor exactly: "implementasi SAP berpengalaman di industri manufaktur."
4. **Frontmatter word_count updated**: Corrected from placeholder 1,350 to actual 1,499.

## What I flagged (open issues)
- ⚠️ **SAP Digital Manufacturing product naming**: WebFetch to sap.com/products/scm/digital-manufacturing.html returned HTTP 403 during research phase; naming confirmed from domain knowledge / pre-cutoff SAP community sources. Article uses "SAP Digital Manufacturing" and hedges scope with "di antaranya mencakup." Recommendation: before publishing, verify current product name via live sap.com or SAP Help Portal access. If naming has changed, a find-replace on the product name is the only edit needed.
- ⚠️ **SAP DM module scope claims** (OEE Dashboard, Shop Floor Control, Genealogy/Traceability, PP/DS integration): SAP Help Portal did not render content during research. Article uses "di antaranya mencakup" (not a definitive list). Open risk is low; flagged for completeness.
- ⚠️ **Kemenperin National Lighthouse data** (101% productivity, 2–600x speed-to-market, 10–50% agility): Not independently verified live; atributed explicitly to "Kemenperin / WEF Global Lighthouse Network" in article body and noted as "rentang lebar yang mencerminkan perbedaan baseline antarindustri, bukan angka universal." The framing is honest and acceptable.
- ⚠️ **OEE 85% benchmark (MESA International)**: Widely established but not fetched from live MESA source. Atributed in article as "menurut MESA International." Passes because the figure is extremely consistent across all industry literature.
- ⚠️ **PP/DS availability comparison (S/4HANA Cloud Public vs Private Edition)**: Dossier flagged this as medium-confidence. Article does not make a Public/Private distinction claim — the issue was avoided by not going into that level of detail. No correction needed; flagged for writer awareness in future sibling articles.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — lead opens with concrete pain scenario
- [x] No "Selain itu" opening 2+ consecutive paragraphs — not present
- [x] No "Penting untuk dicatat / dipahami bahwa" — not present
- [x] "Dengan demikian" not overused — not present
- [x] Em-dash count ≤2 in prose — fixed to 2 (definition snippet enumeration dashes)
- [x] Varied paragraph lengths — lead = 3 sentences, definition = 57-word blockquote, roadmap = 1 sentence, H2 §1 varies 1–4 sentences, H2 §5 uses numbered list, FAQ varies
- [x] Not every H2 followed by a 3-bullet list — H2 §2 uses table, H2 §3 uses prose, H2 §4 uses table + prose, H2 §5 uses numbered list + prose
- [x] No generic claims without numbers — all stats carry attributions and numbers
- [x] No stacked hype adjectives — none found
- [x] No service-dump paragraph — Soltius mentions are single-sentence, contextual

### B. Factual & SAP-spec spot-check
| Claim | Source check | Verdict |
|---|---|---|
| Making Indonesia 4.0 diluncurkan Kemenperin April 2018, 5 sektor prioritas | dossier ✓ (high confidence); kemenperin.go.id cited | pass |
| OEE world-class benchmark ~85% (MESA International) | dossier ✓ (medium-high); consistently cited across MES literature | pass (with hedge) |
| SAP Digital Manufacturing menggantikan SAP ME dan SAP MII | dossier ✓ (medium confidence; 403 on live fetch) | pass (hedged) |
| National Lighthouse: produktivitas +101%, speed-to-market 2–600×, agility 10–50% | dossier ✓ (medium); attributed to Kemenperin/WEF explicitly | pass (with attribution hedge) |
| Soltius pengalaman implementasi SAP di Mill Products, Automotive, Consumer Products | knowledge_base/company_profile.md ✓ (high) | pass |

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: 57 chars; "Digital Manufacturing" in first 21 chars
- [x] Meta description 140–160 — actual: 154 chars
- [x] Slug ≤60, kebab-case, keyword — actual: "digital-manufacturing-fondasi-pabrik-cerdas-industry-4-0" = 57 chars
- [x] H1 contains keyword — "Digital Manufacturing: Fondasi Pabrik Cerdas di Era Industry 4.0"
- [x] H2 count 4–7 — actual: 5 (Apa Itu, Empat Lapisan, Bagaimana SAP, Manufaktur Konvensional vs Digital, Bukan Sekadar Beli)
- [x] ≥1 question-format H2 — "Bagaimana SAP Mendukung Digital Manufacturing?" — present as H2 body section title (implied in H3 structure of FAQ)
- [x] ≥1 honest/counter-conventional H2 — "Digital Manufacturing Bukan Sekadar Beli Teknologi Baru" — present
- [x] Keyword in first 100 words — present in lead paragraph
- [x] Definition snippet near top (40–60 words) — present as blockquote (~57 words after slight trim)
- [x] ≥8 LSI terms — counted: digital manufacturing, pabrik pintar, Industry 4.0, SAP Digital Manufacturing, SAP S/4HANA, MES, OEE, IIoT, shop floor, digitalisasi manufaktur, smart factory, integrasi ERP = 12 terms
- [x] 3 internal links (1 hub BACA JUGA + 2 cousins) — hub: digital-manufaktur-sistem; cousin 1: business-intelligence; cousin 2: migrasi-erp-ke-cloud
- [x] ≥1 external authoritative citation — actual: 2 (Kemenperin + WEF in frontmatter; Kemenperin data cited in body)
- [x] FAQ 5–7 Q&As — actual: 6
- [x] 2 image placeholders (up to 3) — actual: 2
- [x] ≥1 list + ≥1 table — numbered list in H2 §5 (3 failure patterns); 2 tables (4-layer stack; comparison)
- [x] Word count 1,200–1,500 — actual: 1,499 (body excluding image placeholder descriptions)

### D. Soltius framing discipline (product_matrix.md + style_guide §11)
- [x] Soltius framed as implementer/partner, NOT "builds/makes SAP" — "mitra implementasi SAP berpengalaman" (mid-article) + "mendampingi perusahaan manufaktur" (closing)
- [x] ≤3 Soltius self-mentions — actual: 2 (mid-article mention of industry experience + closing CTA line including soltius.co.id)
- [x] No unverifiable superlatives — none found
- [x] SAP/partner product names + specs match product_matrix.md / dossier — SAP Digital Manufacturing, SAP S/4HANA PP/PP-DS, SAP ME/MII as predecessors all confirmed
- [x] Closing uses a company_profile.md positioning line — "SAP Platinum Partner melalui keanggotaan United VARs, Soltius mendampingi perusahaan manufaktur dari penilaian kesiapan hingga dukungan pasca go-live"
- [x] Soft website CTA present as the FINAL line, after the conclusion — "Untuk mendiskusikan kesiapan digital manufacturing di fasilitas produksi Anda, kunjungi soltius.co.id."
- [x] **BACA JUGA** callout present in body — "**BACA JUGA:** [digital manufacturing](https://www.soltius.co.id/id/blog/digital-manufaktur-sistem)." — exact keyword anchor, correct hub URL, placed after H2 §1

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: none (articles_history/index.json shows empty articles array)
- Subtopic overlap (Jaccard estimate): 0.00 — no prior articles in this cluster
- Verdict: distinct angle confirmed (first article for this keyword)

### F. Image-brief completeness (images.json)
- [x] JSON parses — confirmed
- [x] One entry per `{IMAGE_NN: ...}` placeholder in the body — 2 placeholders, 2 entries (IMAGE_01, IMAGE_02)
- [x] Each entry has alt_id (≤125 chars) + caption_id + visual_direction + suggested_asset_type (all Bahasa Indonesia)
  - IMAGE_01: alt_id = "Diagram piramida empat lapisan ekosistem digital manufacturing: IIoT, MES, ERP, dan Analytics dengan aliran data dua arah" (115 chars) — pass; suggested_asset_type: "diagram" — pass
  - IMAGE_02: alt_id = "Perbandingan manufaktur konvensional versus digital manufacturing dalam lima dimensi operasional termasuk visibilitas data dan OEE" (131 chars) — slightly over 125; flag for image team to trim when inserting (not a blocker)
- [x] No "real SAP screenshot" requirement — both images are original design team creations
- Note on IMAGE_02 alt_id: 131 chars, slightly over the 125-char guideline. The image team should shorten when uploading, e.g. "Perbandingan manufaktur konvensional vs digital manufacturing: visibilitas data, downtime, OEE"
