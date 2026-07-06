---
brief_id: "sap-clean-core-04"
editor_run_date: "2026-06-08"
recommendation: "approve"
overall_score: 9
---

# Editor QC Report — Memilih Partner Implementasi SAP untuk Clean Core: Pertanyaan yang Wajib Diajukan

## Recommendation
**approve**

This is a strong, on-brief, bottom-of-funnel article that fills genuine whitespace (no Bahasa Indonesia content exists on choosing a clean-core implementation partner). Structure, GEO extractability, internal linking, FAQ, and Soltius framing discipline were all in good shape from the writer. The one dominant defect was an AI-tell-grade overuse of em-dashes — 21 spaced em-dashes in body prose against the style guide's ≤2 ceiling (§5) — which I reduced to zero in published prose by converting to colons, commas, parentheses, and full stops without losing meaning or rhythm. I also caught and corrected one factual conflation that the dossier itself had flagged as uncertain: the draft credited United VARs with "more than 10,000 implementations," but the live United VARs profile attributes 10,000+ to *consultants* (and ~500 to international implementations). I reframed it to the verifiable "70+ elite partners with thousands of certified consultants across 100+ countries." With those two fixes applied in place, the article clears the shipping bar: a senior SAP consultant and a skeptical CIO would both find it accurate, useful, and non-salesy.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Strong concrete-pain hook, honest counter-conventional section, varied paragraph lengths. Only flaw was em-dash flooding (now fixed). |
| Factual & SAP-spec accuracy | 9 | All SAP specs (5 dimensions, A–D levels, 75–80%, April-2024 recert, ~10% code retired) verified vs dossier. One United VARs conflation corrected via live source. |
| On-page SEO compliance | 9 | Meta/slug/H2/keyword/links/FAQ all pass. Meta description 149 chars, meta title 42 chars. |
| GEO extractability (§2a) | 9 | 40–60-word direct answer after every major H2; one quotable point per paragraph; FAQ FAQPage-ready; `date_modified` added. |
| Soltius framing discipline | 10 | 2 self-mentions; implementer framing ("mendampingi… implementasi… dukungan"), no "builds", no superlatives; body stays vendor-neutral. |
| Internal linking | 10 | 3 natural inline anchors (hub in lead + 2 cousins mid-body); no "BACA JUGA". |
| FAQ quality | 9 | 6 Q&As mirroring PAA; each 40–80 words, self-contained, with a number. |
| Image-brief completeness | 9 | images.json parses; 3 entries match 3 placeholders; all fields in Bahasa Indonesia; no real-SAP-screenshot requirement (all original art). |

## What I fixed (changelog)
- **Removed all 21 spaced em-dashes from body prose (style guide §5 cap is ≤2)**, converting to colons/commas/parentheses/full stops across the lead, definition snippet, all five H2 answer paragraphs, the numbered question list (items 3, 4, 7), the red/green-flag aside, the tier section, the conclusion, and three FAQ answers. Em-dashes inside the three `{IMAGE_NN}` placeholders were intentionally left (design-brief text, not published body, and they key to images.json `concept_from_writer`).
- **Corrected a factual conflation**: "United VARs … menyelesaikan lebih dari 10.000 implementasi di 100+ negara" → "menghimpun lebih dari 70 partner elite dengan ribuan konsultan bersertifikat di 100+ negara." The live United VARs profile attributes 10,000+ to *consultants*, not implementations; the dossier (Flag 2) had flagged this number as unconfirmed. New phrasing uses only source-verified figures.
- **Converted H2 heading em-dash** "Apa arti tier dan sertifikasi partner SAP — dan seberapa penting?" → "…SAP, dan seberapa penting?"
- **Added `date_modified: "2026-06-08"`** to the meta block to satisfy GEO §2a freshness/`dateModified` requirement (was missing).
- **Updated frontmatter `word_count`** 1662 → 1665 to reflect the minor net additions from de-em-dashing.

## What I flagged (open issues)
- ⚠️ **United VARs membership numbers drift over time** — *recommendation*: the company_profile.md line ("45 top VARs across 90+ countries, 10,000 certified SAP consultants serving 8,000+ customers") is now stale versus the live United VARs profile ("70+ partners, 100+ countries, 10,000+ consultants, ~500 international implementations"). Article uses the conservative, currently-verifiable framing, but the knowledge base entry should be refreshed by the curator/owner.
- ⚠️ **"Sejumlah partner Platinum bernaung" in United VARs** — *recommendation*: phrasing is accurate (United VARs is itself a Platinum Partner alliance); no change needed, noted for transparency.
- ⚠️ **No structural issues** — angle, structure, and length are on-brief; no writer/strategist re-spin required.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — none present (lead opens on a concrete kontrak/upgrade pain)
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — zero occurrences
- [x] No "Penting untuk dicatat / dipahami bahwa" — zero occurrences
- [x] "Dengan demikian" not overused — zero occurrences
- [x] Em-dash count ≤2 — **was 21 in body prose; now 0** (only inside image placeholders, which are design briefs)
- [x] Varied paragraph lengths — mixes 2-sentence and 4–5-sentence paragraphs; numbered list + bullets + table break the rhythm
- [x] Not every H2 → 3-bullet list — H2s lead with prose answers; only one section uses a bullet list, one uses the numbered question list, one a table
- [x] No generic claims without numbers — specific figures throughout (18 bulan, ~10%, 75–80%, 20–25%, A–D, April 2024, 25 dokumen, 70+, 100+)
- [x] No stacked hype adjectives (canggih/powerful/seamless/terdepan) — none
- [x] No service-dump paragraph — single Soltius credential cluster in the close + one factual aside

### B. Factual & SAP-spec spot-check
| Claim | Source check | Verdict |
|---|---|---|
| Clean core = 5 dimensi (Processes, Extensibility, Data, Integrations, Operations) | dossier Claim 1 (SAP) ✓ | pass |
| 75–80% proses bisnis hampir identik; 20–25% pembeda | dossier Claim 2 (SAP positioning) ✓ | pass |
| 4 level ekstensi A–D; Level A upgrade-safe, Level D tidak direkomendasikan (SAP, Agt 2025) | dossier Claim 4 (news.sap.com Aug 2025) ✓ | pass |
| Sejak April 2024 SAP mewajibkan sertifikasi ulang tahunan untuk peran kunci RISE | dossier Claim 7 ✓ | pass |
| Satu tim SAP mempensiunkan ~10% custom code (SAP Community) | dossier Claim 6 ✓ | pass |
| SAP Platinum = level tertinggi PartnerEdge, by invitation (no "34 worldwide" figure printed) | dossier Claim 8 + Flag 1 honored ✓ | pass |
| United VARs scale | dossier Claim 9 said "10,000+ implementations"; **live united-vars.com says 10,000+ *consultants*, ~500 implementations, 70+ partners, 100+ countries** | fixed (was fail) |
| Soltius = SAP Platinum via United VARs + Certified AMC & AMS (PCoE Indonesia); Metrodata since 1998 | company_profile.md ✓ | pass |

Do-NOT-assert list (dossier Flags) honored: no "34 Platinum partners worldwide" (Flag 1); no contested United VARs consultant-as-implementation number (Flag 2, now corrected); no active "Best RISE/Best Cloud" status claim (Flag 3 — omitted entirely); no "largest revenue contributor" boast (Flag 4 — omitted); no superlatives (Flag 5).

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: 42 chars / "SAP Clean Core" at char 9–22 (within 30)
- [x] Meta description 140–160 — actual: 149
- [x] Slug ≤60, kebab-case, keyword — actual: `memilih-partner-sap-clean-core` (30)
- [x] H1 contains keyword — "…SAP untuk Clean Core…"
- [x] H2 count 4–5 — actual: 5 content H2s (+ FAQ + Kesimpulan)
- [x] ≥1 question-format H2; ≥1 honest/counter-conventional H2 — "Mengapa…?", "Apa arti…?" (question) + "Kapan partner termurah… justru pilihan yang salah" (counter-conventional)
- [x] Keyword in first 100 words — "SAP Clean Core" in lead sentence 3
- [x] Definition snippet near top (40–60 words) — blockquote, ~50 words
- [x] ≥8 LSI terms — counted: 12+ (fit-to-standard, ABAP Cloud, side-by-side, released API, BTP, PCoE, AMS, CoE, technical debt, RFC, Keep/Refactor/Retire, get clean stay clean)
- [x] 3 internal links (1 hub + 2 cousins) — destinations: sap-clean-core hub (lead), low-code-and-no-code-platforms, migrasi-erp-ke-cloud
- [x] ≥1 external authoritative citation — actual: 2 (TechTarget, news.sap.com) cited inline + in frontmatter
- [x] FAQ 5–7 Q&As — actual: 6
- [x] 2 image placeholders (up to 3) — actual: 3
- [x] ≥1 list + ≥1 table — numbered list (7 questions) + bullet list (3 traps) + 1 table (red/green flag)
- [x] Word count 1,500–1,800 — actual: ~1,665

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — verified for all 5 H2s (lead-in answer paragraph precedes elaboration in each)
- [x] Each body paragraph makes one independently quotable, verifiable point — yes; claims are granular with inline attributions (SAP / TechTarget / SAP Community)
- [x] FAQ parseable for FAQPage schema; `dateModified` / freshness noted — FAQ is clean H3 Q&A; `date_modified: 2026-06-08` added to meta block

### D. Soltius framing discipline (product_matrix.md + style_guide §11)
- [x] Soltius framed as implementer/partner, NOT "builds/makes SAP" — "mendampingi… penilaian kesiapan, implementasi… dukungan pasca go-live"
- [x] ≤3 Soltius self-mentions — actual: 2 ("Soltius" in tier aside §4 + conclusion) + the soltius.co.id website CTA
- [x] No unverifiable superlatives ("terbaik/nomor satu") — none
- [x] SAP/partner product names + specs match product_matrix.md / dossier — yes
- [x] Closing uses a company_profile.md positioning line — "Sebagai SAP Platinum Partner melalui keanggotaan United VARs dan bagian dari Metrodata Group sejak 1998…"
- [x] Soft website CTA present as the FINAL line, after the conclusion — "…kunjungi soltius.co.id." (consultative, not "beli sekarang")
- [x] Hub link present as a natural inline anchor — descriptive anchor "SAP Clean Core" woven into the lead; not a callout

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: none on partner-selection. Existing sap-clean-core cluster covers definition/cloud-readiness, custom-code remediation, maturity assessment, side-by-side extensibility, brownfield-vs-greenfield.
- Subtopic overlap (Jaccard estimate): ~0.0 (only shares the background concept of clean core; all subtopics — SI evaluation criteria, the seven questions, red/green flags, tier/PCoE, price traps — are new)
- Verdict: distinct angle confirmed (decision intent, partner-selection; well below 0.4)

### F. Image-brief completeness (images.json)
- [x] JSON parses
- [x] One entry per `{IMAGE_NN}` placeholder in the body (count matches) — 3 placeholders / 3 entries (IMAGE_01, IMAGE_02, IMAGE_03)
- [x] Each entry has alt_id (≤125 chars) + caption_id + visual_direction + suggested_asset_type — all present and in Bahasa Indonesia
- [x] Any "real SAP screenshot" requirement is surfaced — none required; each sourcing_note explicitly instructs the design team to build original art and NOT screenshot SAP UIs
- (No generated PNGs to check — images produced by the client's design team from this brief.)
