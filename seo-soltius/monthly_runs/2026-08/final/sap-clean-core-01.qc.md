---
brief_id: "sap-clean-core-01"
editor_run_date: "2026-06-08"
recommendation: "approve"
overall_score: 9
---

# Editor QC Report — SAP Clean Core: Fondasi AI dan Joule di S/4HANA

## Recommendation
**approve**

This is a strong, original, and accurate article that fully delivers the brief's distinctive angle — tying clean core to 2026 AI/Joule readiness rather than to migration mechanics, a frame absent from all five prior cluster articles and from the English-language SERP top 3. The two highest-risk SAP facts (ECC end-of-maintenance dates and Joule Studio's 2026 status) were verified against SAP-official sources and are correct and correctly hedged. The draft honored the dossier's do-NOT-assert list precisely: Joule Studio is framed as "rollout mulai Juni 2026" (not full GA), the Levi Strauss / Aeropuertos Argentina uplift numbers are labeled "dilaporkan perusahaan... bukan jaminan SAP," quarterly AI counts are period-stamped, and "SAP Business AI Platform" is used in place of the deprecated "SAP BTP AI Foundation." Soltius framing is clean (implementer/preparer, single self-mention plus the soft CTA, no superlatives). The only material defect at intake was an em-dash count of 9 (style guide ceiling: 2); I reduced published-prose em-dashes to zero, smoothed two introduced clauses, neutralized two "canggih" hype usages, tightened the meta description, and added the missing `date_modified` for GEO freshness. All fixes were in-place; no structural rework was needed. Ships with confidence.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Concrete pain hook, honest hedging, varied rhythm, practitioner asides ("Di lapangan...", "Ini pekerjaan yang tidak glamor."). Em-dash overload fixed. |
| Factual & SAP-spec accuracy | 10 | 5/5 spot-checks pass; 2 verified against SAP-official via WebSearch. Do-NOT-assert list fully honored. |
| On-page SEO compliance | 9 | Meta/slug/H1/keyword/links/FAQ/table/list all compliant. Word count 1,535 (in band, near floor). |
| GEO extractability (§2a) | 9 | 40–60-word direct answer after every major H2; one quotable point per paragraph; FAQPage-ready; `date_modified` added. |
| Soltius framing discipline | 10 | Implementer framing, 1 self-mention + soft CTA, no superlatives, positioning line in conclusion. |
| Internal linking | 10 | Hub inline in lead; 2 cousins inline; no "BACA JUGA". |
| FAQ quality | 9 | 7 Q&As, each 40–80 words, mirror PAA, each carries a fact. |
| Image-brief completeness | 9 | JSON parses; 3 entries match 3 placeholders; all fields in Bahasa Indonesia; no real-screenshot dependency. |

## What I fixed (changelog)
- **Removed all 5 published-prose em-dashes** (style guide §5 ceiling is 2; draft had 9 total). Converted to commas / connectors / a colon: lead-in on the *released API* clause (body §2), the "secara aman" clause (§4 intro), the "umumnya ke SAP BTP" clause (FAQ #1), the Joule Studio clause (FAQ #5), and the §5 H2 heading ("...prioritas Anda — dan" → "...prioritas Anda, dan"). The 3 remaining em-dashes live only inside `{IMAGE_NN}` design-brief placeholders (not published body text) and were intentionally left intact.
- **Neutralized 2 hype adjectives ("canggih")**: "agen AI transaksional canggih" → "agen AI transaksional yang bisa mengeksekusi tindakan" (concrete capability); "Model AI canggih tersedia sebagai layanan" → "Model AI sudah tersedia sebagai layanan siap pakai."
- **Smoothed an introduced clause** for clarity: "...mengeksekusi tindakan sementara core masih Level D" → "...padahal core masih berada di Level D."
- **Tightened meta description** from 159 chars (with em-dash) to 158 chars, em-dash removed (split into two sentences) — still within the 140–160 band, keyword first.
- **Aligned the ExxonMobil quote punctuation** in FAQ #6 to match the body (italicized, period inside quotes) for EYD/quote consistency.
- **Added `date_modified: "2026-06-08"`** to the final's frontmatter (GEO §2a freshness requirement; draft lacked it).
- **Updated `word_count`** 1525 → 1535 to reflect the small net additions from de-em-dashing.

## What I flagged (open issues)
- ⚠️ **Word count 1,535 — within the 1,500–1,800 band but near the floor.** Acceptable and I did not pad (padding hurts HCU and this audience notices). *Recommendation*: no action required; if a future refresh wants more depth, the natural expansion point is a short worked example under "Empat fondasi" (e.g., a one-line before/after of a Z-modification exposed via a released API). Not blocking.
- ⚠️ **`date_modified` is an editor-added field.** *Recommendation*: confirm the CMS/Article-schema mapping consumes `date_modified` (the playbook §2a expects freshness surfaced in the meta block); if the schema uses a different key, map accordingly at publish time.
- ⚠️ **Cousin link substitution (Business Intelligence in place of Low-Code/BTP).** product_matrix lists Clean Core's cousins as ERP migration + Low-Code Platform; the brief deliberately swapped Low-Code for Business Intelligence to serve the data-for-AI thesis. *Recommendation*: accepted as a justified, brief-sanctioned choice (BI is the closer cousin for an AI/data angle); no change. Noted only so the curator isn't surprised by the deviation from the default pairing.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers (grep: none)
- [x] No "Selain itu" opening ≥2 consecutive paragraphs (grep: none)
- [x] No "Penting untuk dicatat / dipahami bahwa" (grep: none)
- [x] "Dengan demikian" not overused (grep: none)
- [x] Em-dash count ≤2 — published prose now **0** (3 remain only inside `{IMAGE_NN}` placeholders, which are design instructions, not body)
- [x] Varied paragraph lengths (1-sentence "Ini pekerjaan yang tidak glamor." alongside 5–6-sentence blocks)
- [x] Not every H2 → 3-bullet list (mix of prose, a numbered list, a 4-row table, FAQ)
- [x] No generic claims without numbers (350 features, 2.400+/2.500+ skills, 35 solutions, 30+ agents, Level A–D, 2027/2030, 6 weeks, 9 instances, 1.000+ agents)
- [x] No stacked hype adjectives — 2 isolated "canggih" usages replaced with concrete capability
- [x] No service-dump paragraph (single Soltius anchor in the conclusion)

### B. Factual & SAP-spec spot-check
| Claim | Source check | Verdict |
|---|---|---|
| ECC mainstream maintenance ends end-2027; extended (paid) to end-2030 | product_matrix + dossier Claim 12 + **WebSearch SAP Support (s4hana-business-suite7)** — confirmed mainstream to end of 2027, extended 2028–2030 at +2pp premium | pass |
| Joule Studio announced Sapphire (May 2026), rollout from June 2026 (not full GA) | dossier Claim 8 + **WebSearch news.sap.com** — "first production customers start onboarding in June 2026," free design-time access through 2026 | pass |
| Per Q1 2026: Joule in 35 solutions, 2.500+ Joule Skills, 30+ specialized agents | dossier Claim 6 (SAP News Center, April 2026) | pass |
| Clean-core maturity model = 4 levels A–D; Level D uses "noAPI" objects, not clean core | dossier Claim 11 (SAP News Center, Aug 2025) | pass |
| Levi Strauss / Aeropuertos Argentina results = company-reported at Sapphire 2026, not an SAP guarantee | dossier Claims 3–4 + draft explicitly labels "dilaporkan perusahaan tersebut... bukan jaminan SAP" | pass |

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: 47 chars / "SAP Clean Core" at position 0
- [x] Meta description 140–160 — actual: 158 chars (em-dash removed)
- [x] Slug ≤60, kebab-case, keyword — actual: `sap-clean-core-fondasi-ai-joule-s4hana` (38)
- [x] H1 contains keyword — "SAP Clean Core: Fondasi AI dan Joule di S/4HANA"
- [x] H2 count 4–5 — actual: 5 body H2 (+ FAQ + Kesimpulan)
- [x] ≥1 question-format H2 (3: "Apa hubungan...", "Mengapa core...", implied in §3); ≥1 honest/counter-conventional H2 ("Kapan AI BELUM perlu...")
- [x] Keyword in first 100 words (lead, bolded)
- [x] Definition snippet near top (40–60 words) — "Secara singkat" blockquote, 57 words
- [x] ≥8 LSI terms — counted 10+ (clean core untuk AI, SAP Business AI, SAP Joule, released API, proses standar, data tepercaya, Joule Studio, ABAP Cloud, SAP BTP, AI readiness, fit-to-standard, Level A–D)
- [x] 3 internal links (1 hub + 2 cousins) — destinations: hub `sap-clean-core-the-complete-guide` (lead), `migrasi-erp-ke-cloud` (§3), `business-intelligence` (§4)
- [x] ≥1 external authoritative citation — 2 in frontmatter (news.sap.com 2024; erp.today 2026) + inline SAP attributions throughout
- [x] FAQ 5–7 Q&As — actual: 7
- [x] 2 image placeholders (up to 3) — actual: 3, kept in body
- [x] ≥1 list + ≥1 table — numbered list (4 fondasi) + comparison table (4-row kondisi core)
- [x] Word count 1,500–1,800 — actual: ~1,535 (in band; flagged as near-floor, not padded)

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — confirmed for all 5 H2 (lead sentences of §§ "Apa hubungan", "Mengapa core", "Kondisi core", "Empat fondasi", "Kapan AI BELUM")
- [x] Each body paragraph makes one independently quotable, verifiable point (granular claims with inline source dates)
- [x] FAQ parseable for FAQPage schema; `date_modified: 2026-06-08` added to the meta block

### D. Soltius framing discipline (product_matrix.md + style_guide §11)
- [x] Soltius framed as implementer/partner ("menyiapkan fondasi", "pendampingan implementasi"), NOT "builds/makes SAP"
- [x] ≤3 Soltius self-mentions — actual: 1 textual mention (conclusion) + 1 soft website CTA = 2, within budget
- [x] No unverifiable superlatives ("terbaik/nomor satu") — none
- [x] SAP/partner product names + specs match product_matrix.md / dossier (S/4HANA, BTP, ABAP Cloud, Business AI, Joule, Joule Studio, RISE with SAP, released API, SAP Business AI Platform)
- [x] Closing uses a company_profile.md positioning line ("Data and AI Consulting" + "SAP Platinum Partner melalui United VARs")
- [x] Soft website CTA present as the FINAL line, after the conclusion ("...kunjungi soltius.co.id untuk memulai penilaian awal."), soft/consultative tone
- [x] Hub link present as a natural inline anchor in the lead (descriptive anchor "SAP Clean Core") — NOT a "BACA JUGA" callout

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: `apa-itu-clean-core-sap` (2026-06-sap-clean-core-01) — definitional but closes on cloud-migration readiness
- Subtopic overlap (Jaccard estimate): ~0.05 (shares only base entities clean core / S/4HANA / BTP; AI, Joule, Joule Studio, Business AI, AI-readiness blueprint appear in NONE of the 5 prior cluster articles)
- Verdict: distinct angle confirmed — clean-core-as-AI-prerequisite is net-new for the cluster and for the Indonesian-language SERP

### F. Image-brief completeness (images.json)
- [x] JSON parses
- [x] One entry per `{IMAGE_NN: ...}` placeholder in the body — 3 placeholders (IMAGE_01/02/03), 3 entries, markers match
- [x] Each entry has alt_id (≤125 chars) + caption_id + visual_direction + suggested_asset_type, all Bahasa Indonesia (alt_id lengths ~110–120 chars, within limit)
- [x] Any "real SAP screenshot" requirement is surfaced — all three entries explicitly state "tidak memerlukan screenshot produk SAP" (original assets); no screenshot dependency
- (No generated PNGs to check — images are produced by the client's design team from this brief.)
