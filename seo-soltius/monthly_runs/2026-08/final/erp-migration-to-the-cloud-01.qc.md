---
brief_id: "erp-migration-to-the-cloud-01"
editor_run_date: "2026-06-08"
recommendation: "approve"
overall_score: 9
---

# Editor QC Report — RISE with SAP vs GROW with SAP: Mana Jalur Migrasi ERP ke Cloud yang Tepat?

## Recommendation
**approve**

This is a strong, decision-useful comparison article that delivers exactly what the brief promised: RISE vs GROW framed as a commercial program-selection decision (not a feature war), with a per-condition decision matrix, honest caveats, and accurate SAP facts. Every factual spot-check passed against the dossier, and the writer respected the do-NOT-assert list well — the "4-week go-live", the 40–60% cost delta, the bundle composition, and the 2031–2033 transition option are all hedged exactly as the flags required. Soltius framing is clean (one self-mention, "merancang dan mengeksekusi" = implements, no superlatives). The one material issue was an em-dash count of 20 (limit ≤2), a classic anti-AI tell; I reduced it to a single deliberate stylistic em-dash in the body by converting the rest to commas, colons, and full stops without changing meaning. With that fixed, the draft clears the quality floor. The only residual notes are minor and non-blocking (meta title leads with the brand-comparison terms rather than the literal English keyword; per-H2 answers run slightly long at ~60–67 words). Shippable.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 8 | No AI openers, no "Selain itu" stacking, no hype adjectives, varied paragraph rhythm. Only flaw was 20 em-dashes (now fixed to 1). |
| Factual & SAP-spec accuracy | 10 | All 5 spot-checked claims verified vs dossier; do-NOT-assert items correctly hedged. |
| On-page SEO compliance | 9 | Meta/slug/H1/headings/links/FAQ/table/list all pass. Keyword present as ID variant "Migrasi ERP" in meta title (not first 30 chars in English form — acceptable for an ID comparison article). |
| GEO extractability (§2a) | 9 | Direct answer after every H2; one quotable point per paragraph; FAQPage-ready; dateModified added. Answers run slightly over 60 words. |
| Soltius framing discipline | 10 | 1 self-mention, implementer framing, positioning line + soft CTA, no superlatives. |
| Internal linking | 10 | Hub inline in lead + 2 cousins (Clean Core, Data Warehouse) inline, descriptive anchors, no BACA JUGA. |
| FAQ quality | 9 | 7 Q&As mirroring PAA; all 40–75 words, self-contained, each carries a number/fact. |
| Image-brief completeness | 9 | 2 entries, both matched to body markers; full alt/caption/direction/asset-type in Bahasa Indonesia; no real-SAP-screenshot dependency. |

## What I fixed (changelog)
- **Em-dash reduction (20 → 1 in body):** converted em-dashes to commas/colons/periods across the lead cousin-link, the rebranding paragraph, the greenfield/brownfield definition, the bundle paragraph, both buyer-profile paragraphs, the SAPinsider stat, the cost paragraph, the clean-core paragraph, the ECC-deadline paragraph, the transition-option clarification, the conclusion, and two FAQ answers. Kept ONE deliberate stylistic em-dash in §"Bagaimana Pilihan Ini Memengaruhi..." ("Tidak ada yang 'lebih unggul' — ...").
- **Meta description:** replaced the em-dash with a colon and tightened 159 → 153 chars (still inside 140–160).
- **Frontmatter:** removed the em-dash from the `external_citations` context line (line 31) for clean metadata; added `date_modified: "2026-06-08"` to satisfy GEO §2a freshness requirement.
- **Minor prose smoothing** where an em-dash removal needed a connective (e.g., "Menurut SAP Learning, inilah pembeda yang paling fundamental antara kedua program."; "dan perlu dicatat bahwa SAP sendiri tidak menerbitkan harga resmi").
- Updated frontmatter `word_count` to 1680 (near-neutral net change from the 1684 draft).

## What I flagged (open issues)
- ⚠️ **Meta title keyword position** — the primary keyword "ERP migration to the cloud" appears in meta title only as its Indonesian rendering ("Migrasi ERP Cloud") at ~char 35, not the literal English phrase in the first 30 chars. *Recommendation:* acceptable as-is — leading with "RISE vs GROW with SAP" captures the high-intent comparison query, and the keyword lives in the H1, slug, and first 100 words. No change needed unless the client insists on literal-keyword-first.
- ⚠️ **Per-H2 answer length** — the direct answers after each major H2 run ~60–67 words rather than strictly 40–60. *Recommendation:* leave as-is; each is a clean, standalone, quotable answer and the slight overage doesn't hurt extractability. If a future tightening pass is desired, trim the H2 #4 trade-off answer by one clause.
- ⚠️ **Word count is an estimate** — the PowerShell/Bash word-counter was unavailable this run; 1680 is a manual near-neutral estimate from the 1684 draft. *Recommendation:* curator should let `md-to-docx`/quality-check confirm the exact figure on build. Comfortably inside the 1,500–1,800 band either way.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers (grep: none)
- [x] No "Selain itu" opening ≥2 consecutive paragraphs (grep: none)
- [x] No "Penting untuk dicatat / dipahami bahwa" (grep: none)
- [x] "Dengan demikian" not overused (grep: none)
- [x] Em-dash count ≤2 — **now 1 in body** (was 20; fixed)
- [x] Varied paragraph lengths (1–6 sentences; mix of short declaratives and compound sentences)
- [x] Not every H2 → 3-bullet list (prose-led sections; 2 tables; no bullet-dump)
- [x] No generic claims without numbers (30%/19%, 122, 8–14 bln, 4/12/16 mgg, 2027/2030/2031–2033, +2%, level A–D)
- [x] No stacked hype adjectives (grep: canggih/powerful/seamless/terdepan — none)
- [x] No service-dump paragraph (single Soltius anchor in the conclusion)

### B. Factual & SAP-spec spot-check
| Claim | Source check | Verdict |
|---|---|---|
| ECC mainstream maintenance ends 31 Des 2027; extended +2% to 2030 | dossier Claim 9 & 10 ✓; SAP Support Portal cited | pass |
| Transition option 2031–2033 = new cloud subscription, NOT on-prem extension | dossier Claim 11 ✓; SAP News Feb 2025 cited | pass |
| GROW = Public Edition, greenfield-only, no custom ABAP | dossier Claim 2,3,4 ✓; SAP Learning cited | pass |
| "Go-live 4 minggu" = limited scenario; GROW Fast ~12–16 weeks | dossier Claim 6 ✓ (hedged as marketing floor per Flag 3) | pass |
| 30% fully live on Private Ed. (up from 19%), 122 SAP pros, legacy <50% | dossier Claim 12 ✓; SAPinsider via ERP Today, attributed + sample-size caveat | pass |
| Bonus — Clean Core A–D framework formalized Aug 2025 | dossier Claim 15 ✓ | pass |
| Bonus — Soltius "Best RISE / Best Cloud Partner" via United VARs | company_profile.md (2021 awards) + product_matrix ✓ | pass |

No invented SAP product names/editions; rebranding (S/4HANA Cloud Private/Public → SAP Cloud ERP Private/SAP Cloud ERP) handled correctly per dossier Flag 1. No "Soltius builds SAP" framing.

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: 52 chars / keyword as ID variant "Migrasi ERP" at ~pos 35 (see flag; acceptable)
- [x] Meta description 140–160 — actual: 153
- [x] Slug ≤60, kebab-case, keyword — actual: `rise-vs-grow-with-sap-migrasi-erp-cloud` (39 chars)
- [x] H1 contains keyword — "...Migrasi ERP ke Cloud..."
- [x] H2 count 4–5 — actual: 5 body H2 (+ FAQ + Kesimpulan)
- [x] ≥1 question-format H2 (#3 "Perusahaan Seperti Apa...", #4 "Bagaimana..."); ≥1 honest/counter-conventional H2 (#5 "Kapan...BELUM Tentu...")
- [x] Keyword in first 100 words (line 1 of lead)
- [x] Definition snippet near top (40–60 words) — blockquote, ~57 words
- [x] ≥8 LSI terms — counted ~12 (RISE with SAP, GROW with SAP, Private/Public Edition, fit-to-standard, brownfield/greenfield, single-/multi-tenant, SAP BTP, Signavio, ABAP, clean core, system conversion, SAP Business Network)
- [x] 3 internal links (1 hub + 2 cousins) — destinations: migrasi-erp-ke-cloud (hub, lead), sap-clean-core (cousin), data-warehouse-solutions (cousin)
- [x] ≥1 external authoritative citation — actual: 3 (SAP Learning, SAP Support Portal, SAP News) all SAP-official
- [x] FAQ 5–7 Q&As — actual: 7
- [x] 2 image placeholders (up to 3) — actual: 2, kept in body
- [x] ≥1 list + ≥1 table — 2 tables (comparison + ECC timeline); table-led comparison appropriate for this intent (no forced bullet list)
- [x] Word count 1,500–1,800 — actual: ~1,680 (estimate; see flag)

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct ~40–60-word answer immediately after each major H2 (all 5 present; run ~60–67 words — see flag)
- [x] Each body paragraph makes one independently quotable, verifiable point (one claim + sourced fact pattern throughout)
- [x] FAQ parseable for FAQPage schema; `date_modified: 2026-06-08` added to meta block for freshness

### D. Soltius framing discipline (product_matrix.md + style_guide §11)
- [x] Soltius framed as implementer/partner ("merancang dan mengeksekusi migrasi"), NOT "builds/makes SAP"
- [x] ≤3 Soltius self-mentions — actual: 1 (conclusion only)
- [x] No unverifiable superlatives (grep: terbaik/nomor satu/terdepan — none; "Best RISE/Best Cloud Partner" is the verified award name, framed as recognition)
- [x] SAP/partner product names + specs match product_matrix.md / dossier
- [x] Closing uses a company_profile.md positioning line (SAP Platinum Partner via United VARs)
- [x] Soft website CTA present as the FINAL line, after the conclusion (invites visit to soltius.co.id; consultative "mulai dari penilaian kesiapan", not "beli sekarang")
- [x] Hub link present as a natural inline anchor in the lead (descriptive anchor "migrasi ERP ke cloud"); NOT a BACA JUGA callout

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: `2026-06-erp-migration-to-the-cloud-01` (Brownfield/Greenfield/Bluefield decision guide, angle_hash sha1:a3f82c1d9e45)
- Subtopic overlap (Jaccard estimate): ~0.18 (shared: "RISE with SAP" entity + brownfield/greenfield concepts; new axes — commercial program selection, public/private edition, buyer profile, bundles, ECC transition option — are distinct)
- Verdict: distinct angle confirmed. Prior `-01` compares *technical migration approaches*; this article compares *two commercial SAP programs and which company profile fits each*. Well under the 0.4 threshold. (Note: the new article will need its own unique id on commit, e.g. `2026-08-erp-migration-to-the-cloud-01`, since `-01` already exists from June — curator's concern, flagged for awareness.)

### F. Image-brief completeness (images.json)
- [x] JSON parses
- [x] One entry per `{IMAGE_NN}` placeholder in the body (IMAGE_01, IMAGE_02 — count matches; both placeholders kept in body)
- [x] Each entry has alt_id (≤125 chars) + caption_id + visual_direction + suggested_asset_type, all Bahasa Indonesia
- [x] Any "real SAP screenshot" requirement surfaced — both entries explicitly note "tidak memerlukan screenshot SAP; desainer tidak perlu mengakses produk SAP" (infographic + diagram from article data)
- (No generated PNGs to check — images are produced by the client's design team from this brief.)
