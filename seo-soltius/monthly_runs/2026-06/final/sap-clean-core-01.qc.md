---
brief_id: "sap-clean-core-01"
editor_run_date: "2026-06-02"
recommendation: "approve"
overall_score: 9
language: "id"
web_mode: "1 probe used (succeeded) — ECC 2027/2030 dates verified vs SAP-official support.sap.com this run; all other facts vs dossier + product_matrix.md per instruction, no retry-loop"
---

# Editor QC Report — Apa Itu Clean Core SAP dan Mengapa Penting Sebelum Pindah ke Cloud

## Recommendation
**approve**

This is the re-edit of the pilot article after refinement to the new spec (1,200–1,500 words + mandatory soft website CTA after the conclusion). The revised draft lands cleanly inside every gate: it is genuinely 1,200–1,500 words, the soft website CTA is present as the final line after the conclusion (and is soft/consultative, not hard-sell), the image plan has exactly 2 entries matching the 2 `{IMAGE_NN}` placeholders, and the anti-AI, framing, linking, and structure checks all pass. The five dossier-flagged facts (ECC 2027/2030, clean-core dimension count, S/4HANA Cloud public released-only, ABAP Cloud, custom-code cost share) are honestly hedged exactly as designed — and the single web probe I was allotted actually *confirmed* the ECC 2027/2030 dates against SAP's official maintenance-strategy page, so I upgraded that citation URL and stamped the date. No corrective body edits were needed; the writer delivered a tight, decision-level explainer that reads like a senior SAP consultant leveling with a CIO. The remaining open items are the inherited "pending live verification" flags on a few SAP product-naming/scope facts — all already hedged in-prose, none blocking. Shippable.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | No AI openers, no "Selain itu"/"Dengan demikian", 1 body em-dash, deliberately varied paragraph rhythm (1-sentence "Risikonya dulu." beside 5-sentence blocks). Analogy ("rumah kontrak") + honest asides read first-party. |
| Factual & SAP-spec accuracy | 9 | 5/5 spot-checked claims pass; ECC dates *web-verified* this run. Flagged facts correctly hedged, no invented numbers/specs. |
| On-page SEO compliance | 9 | Meta title 48 chars, meta description 159, slug ≤60, keyword in H1 + first 100 words + last paragraph, definition snippet ~55 words, 5 content H2s, 3 internal links, 2 SAP citations, 5 FAQ, table + 2 lists. |
| Soltius framing discipline | 10 | 2 brand mentions + 1 website-CTA line = 3 (at the ≤3 ceiling). "Membantu menerapkan/mendampingi" — implements, never builds. Credentials match company_profile.md verbatim. No superlatives. |
| Internal linking | 9 | Exactly 3, matching the product_matrix cross-link map (own hub + ERP-migration + Low-Code cousins), all natural in-prose anchors. |
| FAQ quality | 9 | 5 Q&As (within 5–7), each ~51–58 words (in the 40–80 band), self-contained, each carries a specific fact. Trimmed from the dossier's 8 to fit the shorter format — no padding. |
| Image-brief completeness | 9 | JSON parses, 2 entries for 2 placeholders, all fields in Bahasa Indonesia, alt_id ≤125 chars, IMAGE_02 surfaces the 2027/2030 "pending verification" note for the design team. |

## What I fixed (changelog)
- **Upgraded the ECC-maintenance citation URL** in frontmatter from the bare `https://support.sap.com/` to the precise verified page `https://support.sap.com/en/release-upgrade-maintenance/maintenance-information/maintenance-strategy/s4hana-business-suite7.html`, and replaced the "URL pasti perlu diverifikasi" hedge with "Diverifikasi 2026-06-02" — because my one allotted web probe confirmed the 2027/2030 dates against SAP's official maintenance-strategy page (Innovation Commitment until 2040).
- **Added `clean core maturity` to `secondary_keywords`** — the term is used in the body (H2 #5) and is in the brief's LSI list; strengthens LSI coverage. (No body text changed.)
- **Overwrote the prior long final** (which was the old 1,600–2,200 / `word_count: 2080` version) with the revised 1,200–1,500 version; corrected frontmatter `target_word_count` 1900 → 1350 and `word_count` 2080 → 1421 to match the refined article.
- No corrective edits to body prose were required — the revised draft already complied with the updated style guide (§1 step 8 CTA, §2 length, §11 CTA + mention budget). Per "don't change for the sake of it / don't dramatically restructure," I left the clean prose intact.

## What I flagged (open issues)
- ⚠️ **Inherited "pending live verification" flags on SAP product naming/scope** (dossier flags #1, #3–#7, #9): clean-core dimension count/names, S/4HANA Cloud private-edition boundary detail, ABAP Cloud scope, RISE/GROW package contents, released-objects portal name, SAP Build component names, "clean core maturity" as an official scale. **All are already hedged in-prose** ("umumnya dijelaskan dalam beberapa dimensi", "konfirmasi nama tool", "perlakukan sebagai pendekatan, bukan skala angka resmi"). *Recommendation*: validator passes these as honest hedging; on a future re-run with web restored, confirm against SAP-official and tighten the hedges where a fact firms up. **Not blocking.**
- ⚠️ **Clean-core definition phrasing** (dossier flag, definition snippet): the "Ringkas:" snippet is concept-accurate but was not fetched live from SAP's "what is clean core" page. *Recommendation*: confirm phrasing against learning.sap.com on the next clean web run; the `learning.sap.com` citation still carries the honest "URL pasti perlu diverifikasi" note by design. **Not blocking.**
- ⚠️ **Custom-code cost share kept qualitative** (dossier flag #8): the article deliberately does NOT attach a percentage to custom-code migration cost. *Recommendation*: if a real Gartner/IDC/Forrester figure surfaces later, an editor may add it with inline attribution; do not invent one. **Correct as-is.**
- Note (image brief, design-team action, not an article flag): IMAGE_02's `sourcing_note` correctly instructs the design team not to lock the 2027/2030 years until confirmed against SAP. My web probe now confirms both — the design team can render them with confidence.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — grep: none
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — grep: none
- [x] No "Penting untuk dicatat / dipahami bahwa" — grep: none
- [x] "Dengan demikian" not overused — grep: 0 occurrences
- [x] Em-dash count ≤2 — 1 in published body (H2 #5 heading). The other 4 grep hits are in frontmatter `external_citations` (metadata) and inside `{IMAGE_NN}` design briefs (not published prose). Pass.
- [x] Varied paragraph lengths — 1-sentence "Risikonya dulu." and "Alasannya teknis, tapi konsekuensinya finansial." beside 4–6-sentence blocks. Pass.
- [x] Not every H2 → 3-bullet list — H2 #1/#4 lead with prose; H2 #2 prose→list→table; H2 #3 prose→3-item list; H2 #5 prose→numbered list→prose. Varied. Pass.
- [x] No generic claims without numbers — concrete: 2027, 2030, 2025, 1998, "sekitar enam", "dua tahun". Pass.
- [x] No stacked hype adjectives — grep for canggih/powerful/seamless/terdepan/revolusioner: none. Pass.
- [x] No service-dump paragraph — single relevant anchor (Implementation/Enhancement) in the closing only. Pass.

### B. Factual & SAP-spec spot-check
Picked 5 highest-risk claims (dates + SAP product facts + Soltius framing). One web probe used (ECC dates) — succeeded this run.
| Claim | Source check | Verdict |
|---|---|---|
| SAP ECC / Business Suite 7 mainstream maintenance ends 2027, optional extended (paid) to 2030 (cloud-readiness §) | **WebSearch SAP-official** (support.sap.com maintenance-strategy / s4hana-business-suite7) + dossier Claim 7 + product_matrix #6 | **pass** (web-verified 2026-06-02; 2 ppt premium, then customer-specific maintenance) |
| S/4HANA Cloud public edition only permits *released* extensibility; private has more latitude but clean core still advised | dossier Claim 6 (high conf) + product_matrix #6 | pass |
| Side-by-side extensions live on **SAP BTP**, connected via released/public API | dossier Claim 4 + product_matrix #6 | pass (product name stable/correct) |
| **ABAP Cloud** = governed, upgrade-stable ABAP dev model (released objects only), not a separate product | dossier Claim 5 | pass (framed as model, not product) |
| Soltius = SAP Platinum Partner via United VARs, part of Metrodata Group since 1998; *implements/accompanies*, not builds | company_profile.md (verified) | pass (framing + credentials exact) |

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: 48 chars / "Clean Core SAP" within first 23 chars
- [x] Meta description 140–160 — actual: 159
- [x] Slug ≤60, kebab-case, keyword — actual: `apa-itu-clean-core-sap` (22 chars)
- [x] H1 contains keyword — "Apa Itu Clean Core SAP dan Mengapa Penting Sebelum Pindah ke Cloud"
- [x] H2 count 4–5 — actual: 5 content H2s (+ FAQ block). Within band.
- [x] ≥1 question-format H2; ≥1 honest/counter-conventional H2 — question: "Bagaimana cara menjaga core tetap bersih?" + "Apa kaitan clean core dengan kesiapan migrasi ke cloud?"; honest: "Risiko core yang 'kotor' — dan kapan clean core BELUM jadi prioritas Anda"
- [x] Keyword in first 100 words — "SAP clean core" (bold) at end of lead ¶
- [x] Definition snippet near top — "Ringkas:" blockquote, ~55 words, first ~150 words
- [x] ≥8 LSI terms — counted 44 hits across the target-term set (released, side-by-side, in-app, ABAP Cloud, SAP BTP, S/4HANA, technical debt, upgrade-safe, RISE/GROW, custom code, digital core, extensibility, key-user, brownfield/greenfield, clean core maturity, regression testing, Readiness Check, public/private edition)
- [x] 3 internal links (1 hub + 2 cousins) — destinations: `/blog/sap-clean-core-the-complete-guide` (hub), `/id/blog/migrasi-erp-ke-cloud` (cousin), `/id/blog/low-code-and-no-code-platforms` (cousin)
- [x] ≥1 external authoritative citation — actual: 2 (SAP learning + SAP support, both SAP-official; support URL upgraded to precise verified page)
- [x] FAQ 5–7 Q&As — actual: 5
- [x] 2 image placeholders (up to 3) — actual: 2 ({IMAGE_01}, {IMAGE_02})
- [x] ≥1 list + ≥1 table — 1 table + 2 bullet lists + 1 numbered list
- [x] Word count 1,200–1,500 — actual: 1,421 (full body incl. image-brief text + markdown); ~1,250–1,290 published Indonesian prose excluding the 2 image-brief blocks. Both inside the band. **Pass.**

### D. Soltius framing discipline (product_matrix.md + style_guide §11)
- [x] Soltius framed as implementer/partner, NOT "builds/makes SAP" — "membantu perusahaan menerapkan prinsip clean core", "mendampingi perusahaan dari penilaian custom code hingga migrasi S/4HANA"
- [x] ≤3 Soltius self-mentions — actual: 2 brand "Soltius" (both in closing ¶) + 1 website-CTA line = 3, exactly at the ceiling (§11 counts the CTA within budget)
- [x] No unverifiable superlatives — grep terbaik/nomor satu: none; credentials stated as recognition only
- [x] SAP/partner product names + specs match product_matrix.md / dossier — SAP S/4HANA, SAP BTP, ABAP Cloud, RISE/GROW, ECC/Business Suite 7, SAP Build, SAP Readiness Check all match (named per dossier, hedged where dossier flags scope/naming drift)
- [x] Closing uses a company_profile.md positioning line — "Sebagai SAP Platinum Partner melalui keanggotaan United VARs dan bagian dari Metrodata Group sejak 1998..."
- [x] Soft website CTA present as the FINAL line, after the conclusion — **"Untuk menilai seberapa 'bersih' inti SAP Anda sebelum melangkah ke cloud, jelajahi solusi dan mulai diskusi lebih lanjut di soltius.co.id."** Last line, after the conclusion ¶, invites a visit to soltius.co.id, soft/consultative ("jelajahi solusi dan mulai diskusi"), not "beli sekarang". **Pass.**

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: **none yet** (`articles_history/index.json` → `"articles": []` — first SOLTIUS article in the cluster)
- Subtopic overlap (Jaccard estimate): **0.0** (no prior)
- Verdict: **distinct angle confirmed** — far below the 0.4 threshold; the English hub exists but no ID supporting article. This is a decision-level ID explainer that links UP to the hub.

### F. Image-brief completeness (images.json)
- [x] JSON parses — valid; `image_count: 2`
- [x] One entry per `{IMAGE_NN: ...}` placeholder in the body (count matches) — 2 placeholders (IMAGE_01 hero, IMAGE_02 in cloud-readiness §) ↔ 2 JSON entries. **Match.**
- [x] Each entry has alt_id (≤125 chars) + caption_id + visual_direction + suggested_asset_type — all present, all Bahasa Indonesia. (IMAGE_01 alt_id 120 chars; IMAGE_02 alt_id 117 chars — both ≤125.)
- [x] Any "real SAP screenshot" requirement is surfaced — both `sourcing_note`s state "Bukan screenshot SAP" (manual vector diagrams), so no real SAP asset needed. IMAGE_02 additionally surfaces the 2027/2030 "PENDING VERIFICATION" instruction for the design team (now web-confirmed this run).
- (No generated PNGs to check — images are produced by the client's design team from this brief.)
