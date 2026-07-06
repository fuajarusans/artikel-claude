---
brief_id: "sap-business-one-01"
editor_run_date: "2026-05-29"
recommendation: "approve"
overall_score: 9
---

# Editor QC Report — 7 Tanda Bisnis Anda Sudah Butuh SAP Business One

## Recommendation

**approve** (text). One blocking operational issue sits OUTSIDE the article text and must be resolved before publication: the three article images were NOT generated despite the image plan reporting success (details in §G). The markdown for both ID and EN is shippable — it passes the anti-AI scan, every FLAG in the dossier is respected, all on-page SEO markers clear, product-mention discipline holds at exactly 3, and ID↔EN parity is intact. The only in-text fix I applied was reducing English prose em-dashes from ~14 to 2 to meet style_guide §5. I am approving the text and flagging the image regeneration as a publish-gate the user must clear (re-run the image-generator); this is not a text-quality defect.

## Quality scores

| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Strong practitioner voice, varied rhythm, contrarian "BELUM perlu" section. EN em-dash overuse fixed. |
| Factual accuracy | 10 | All 4 dossier FLAGS respected. 83,000+ cited to SAP News; maintenance % framed as industry practice, no rupiah; 10-day close qualified as practitioner benchmark; 3–6 months framed as industry range. |
| On-page SEO compliance | 9 | Meta title 49 chars, keyword front; meta desc in range; 6 H2s + question H2; definition snippet present; 3 internal + 2 external links; 7-Q FAQ. |
| Product mention discipline | 10 | Exactly 3 (SAP Business One + HANA on Cloud + Soltius-status). No product-dump, no invented specs/versions/pricing. |
| Internal linking | 9 | 3 links present in both. EN reverted from unverified /en/ to canonical /id/ (recorded). |
| ID ↔ EN parity | 9 | Same 7 signs, same 6 H2s, same 3 image positions, same 7 FAQ Q&As, same data. |
| FAQ quality | 9 | 7 Q&As, each 40–80 words, self-contained, mirror PAA. |
| Image plan alignment | 4 | Placeholders align 3↔3 across drafts, alt text ≤125 chars. BUT images.json reports false success — actual generation failed (0 of 3 files on disk). |

## What I fixed (changelog)

- **EN draft**: Reduced prose em-dashes from ~14 to 2 (style_guide §5 caps prose em-dashes at ≤2). Replaced with commas, colons, or sentence breaks at lines covering the misconception paragraph, sign 1, sign 6, the signs 1/3/5 combination sentence, the ERP-model sentence, the "bigger accounting software" sentence, the "bigger ledger" line, the readiness-failure sentence, the master-data-cleanup line, the "nine months" line, and the closing CTA. Kept exactly 2 (definition snippet + the on-premise/cloud product line) for natural emphasis. No facts changed.
- **EN draft**: Reverted the three internal links from assumed `/en/...` paths back to the verified `/id/...` canonical Soltius URLs, and rewrote the `editor_note` frontmatter to document the decision and rationale (see §EN-link decision).
- **ID draft**: No content edits required. Prose em-dash count was already 2 (definition snippet + product paragraph); all other em-dashes are in tables/IMAGE markers (acceptable). Copied to final as-is.

## What I flagged (open issues)

- ⚠️ **Images not generated (publish-blocker, non-text)** — `images.json` says `generation_status: images_generated` with `generated: true` for all three, but `sap-business-one-01.manifest.results.json` shows `succeeded: 0, failed: 3`, `bytes: 0`, error `"no STATUS line parsed"` per image. No PNG files exist in `final/`. *Recommendation*: re-run `aquaculture-image-generator` / `tools/generate-images-batch.ps1` for this article before publication; the FLUX batch helper appears to have mis-parsed its STATUS output and written a false-positive plan. Do not publish until the three PNGs exist and the plan is corrected.
- ⚠️ **EN internal-link slugs assumed** — the `/en/` equivalents of the Soltius blog/solution pages were never verified live. I reverted to `/id/` to avoid 404 risk. *Recommendation*: confirm whether `/en/blog/...` and `/en/solutions-by-products/...` parallels exist on the live site; if so, swap; if not, `/id/` is the safe canonical.
- ℹ️ **KB mismatch (non-blocking)** — `style_guide.md` and `seo_playbook.md` are still the aquaculture-client versions (FCR, KKP, JARS). The client-agnostic rules (anti-AI §5, structure, meta block, FAQ format, on-page checklist) apply cleanly and were enforced. The niche-specific examples were ignored as instructed. *Recommendation*: localize a Soltius style guide before the full monthly batch.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)

**ID:**
- [x] No "Selain itu" opening repeated paragraphs (none present)
- [x] No "Penting untuk dicatat / diingat / dipahami bahwa" (none)
- [x] No "Dalam era modern" / "Di zaman sekarang" / "Saat ini" as opener (none)
- [x] Em-dash count ≤2 in prose (2: definition snippet + product paragraph; rest are tables/IMAGE markers)
- [x] Varied paragraph lengths (1–6 sentences; lead is long, several short asides)
- [x] No bullet-only sections (prose leads every H2)
- [x] No generic claims without numbers (10 days, 18–20%, 3–6 months, 83,000+, 61% GDP, 97% workforce, 25.5M/64.2M)
- [x] No product-dump paragraphs (3 mentions, all contextual)

**EN:**
- [x] No "It's important to note that..." (none)
- [x] No "In today's..." (none)
- [x] No "Furthermore"/"Moreover" opening consecutive paragraphs (none)
- [x] No "crucial/essential/vital" unquantified (none)
- [x] No "This article will discuss..." (lead handles it)
- [x] No "In conclusion," as only closing (forward-looking CTA)
- [x] Em-dash count ≤2 in prose — **FIXED** (was ~14; now 2)

### B. Factual spot-check + FLAG verification

| Claim | Source check | Verdict |
|---|---|---|
| Install base 83,000+ companies / 170+ countries / 1.2M users | dossier ✓ + SAP News Dec 2025 cited inline | pass |
| "70,000+" labeled outdated, not used as current | dossier FLAG 1 ✓ | pass |
| Maintenance 18–20% of license/yr, on-premise, industry practice, no rupiah | dossier FLAG 2 ✓ | pass |
| ">10 working days to close" = practitioner benchmark, not a study | dossier FLAG 3 ✓ (qualified in body + sign 1) | pass |
| Implementation 3–6 months = typical industry range, not Soltius promise | dossier ✓ ("rentang industri umum, bukan janji") | pass |
| 5-phase AIP methodology, phase names + durations | dossier ✓ (SAP Learning) | pass |
| Soltius: SAP Platinum Partner via United VARs, Metrodata Group, since 1998 | company_profile ✓ | pass |
| Indonesia 61% GDP / 97% workforce / 25.5M of 64.2M digital (Jul 2024) | dossier ✓ (Kemenkop/Antara) | pass |

**FLAG roll-call (explicit):**
- **FLAG 1 (install base 83,000+, cite SAP News, not 70,000) — RESPECTED.** Both versions state 83,000+/170+/1.2M cited to SAP News (Dec 2025) and explicitly flag 70,000+ as outdated.
- **FLAG 2 (maintenance 18–20%, "typically", no rupiah, no Soltius guarantee) — RESPECTED.** Framed as "umumnya berkisar 18–20% dari nilai lisensi per tahun... mengikuti praktik umum industri" / "typically runs 18–20%... following common industry practice." No currency. No guarantee.
- **FLAG 3 (>10 working days = practitioner benchmark, qualified) — RESPECTED.** Sign 1 in both versions: "sering dipakai sebagai patokan praktis di kalangan praktisi; bukan hasil studi resmi" / "a common practitioner benchmark, not the result of a formal study."
- **FLAG 4 (no client names, no rupiah/currency, no version numbers) — RESPECTED.** Grep across both finals: zero rupiah/IDR/USD/$, zero version numbers, zero client names.

### C. On-page SEO checklist (seo_playbook.md §3)

**ID:**
- [x] Meta title ≤60 chars, keyword in first 30 — actual: 49 chars, "SAP Business One" at position 0
- [x] Meta description 140–160 chars — actual: 154 chars
- [x] Slug ≤60 chars, kebab-case, contains keyword — `tanda-bisnis-butuh-sap-business-one` (35 chars)
- [x] H1 contains keyword — "...SAP Business One"
- [x] H2 count 4–7 — actual: 6 body H2s + FAQ
- [x] ≥1 question-format H2 — "Apa saja tanda bisnis Anda sudah butuh SAP Business One?" + "Software akuntansi mentok di mana?" + "Kenapa SAP Business One...?"
- [x] Keyword in first 100 words — yes (lead paragraph)
- [x] Definition snippet present near top (40–60 words) — the "Ringkas:" blockquote (~55 words)
- [x] ≥8 LSI terms — counted 11 (ERP, UKM, closing bulanan, software akuntansi, single source of truth, modul, on-premise, cloud, SAP HANA, Business Blueprint, go-live)
- [x] 3 internal links (1 primary + 2 cousins) — pengertian SAP Business One (primary) + software ERP SAP Business One + modul SAP
- [x] ≥1 external authoritative citation — actual: 2 (SAP News + Kemenkop/Antara)
- [x] FAQ block 5–8 Q&As — actual: 7
- [x] ≥3 image placeholders — actual: 3
- [x] ≥1 numbered list (7 signs), ≥1 bullet list (BELUM perlu), ≥1 table (3 tables)

**EN:**
- [x] Meta title ≤60 chars, keyword front — "SAP Business One: 7 Signs Your Business Needs It" (48 chars)
- [x] Meta description 140–160 chars — actual: 157 chars
- [x] Slug — `signs-business-needs-sap-business-one` (37 chars)
- [x] H1 contains keyword — yes
- [x] H2 count 4–7 — actual: 6 body + FAQ
- [x] ≥1 question-format H2 — yes (3)
- [x] Keyword in first 100 words — yes
- [x] Definition snippet present — "In short:" blockquote (~52 words)
- [x] ≥8 LSI terms — counted 10+
- [x] 3 internal links — present (reverted to /id/)
- [x] ≥2 external citations — SAP News + Kemenkop/Antara
- [x] FAQ block — 7 Q&As
- [x] ≥3 image placeholders — 3
- [x] ≥1 numbered, ≥1 bullet, ≥1 table — yes

### D. Product mention discipline

| Product mentioned | Spec correct per soltius_product_matrix.md / company_profile? | Naturally placed? |
|---|---|---|
| SAP Business One | ✓ (all-in-one SME ERP; on-prem or cloud; SAP HANA or MS SQL; modular Finance/Sales/Purchasing/Inventory/Production/PM/HR) | ✓ H2 #4 |
| SAP Business One HANA on Cloud | ✓ (Soltius cloud package, anytime internet access, POS integration) | ✓ H2 #4, deployment context |
| Soltius company status | ✓ (Platinum Partner via United VARs, Metrodata Group, since 1998) | ✓ H2 #6 + closing |

- Product mention count: **3** (target ≤3) — pass. No invented specs, editions, version numbers, client names, or pricing. SAP S/4HANA referenced once only to disambiguate (not as a Soltius product pitch) — acceptable.

### E. ID ↔ EN parity

- Same key facts covered? ✓ (7 signs identical; same thresholds; same data points; same FLAG framing)
- Same image placeholder positions? ✓ (IMAGE_01 after definition snippet, IMAGE_02 after accounting-vs-ERP table, IMAGE_03 after go-live phases — identical in both)
- Same internal-link destinations? ✓ — both now point to the same `/id/` URLs (EN reverted from unverified /en/). Mirrored.
- Word counts: ID = ~1,960 (range 1,800–2,500 ✓), EN = ~1,930 (range 1,500–2,200 ✓)
- Same 6 H2s + same 7 FAQ Q&As ✓
- Adaptation check: EN correctly frames the Indonesian UMKM stat as an international-illustrative example rather than a literal translation. Good adaptation per style_guide §4.

### F. Anti-cannibalization spot check

- Pilot article; `articles_history/index.json` has no prior SAP Business One entry for this cluster.
- Closest prior per brief: the definition pillar `pengertian-sap-business-one-dan-kegunaannya` (informational intent). This article is decision/diagnostic intent and routes UP to the pillar.
- Brief-estimated Jaccard overlap ~0.12 — well below 0.4.
- Verdict: distinct angle confirmed. No cannibalization risk.

### G. Image plan alignment

- Image plan JSON validates ✓ (parses; 3 images; markers IMAGE_01/02/03)
- Image count matches placeholders ✓ (3 markers in ID, 3 in EN, 3 in plan)
- Alt text ≤125 chars (ID + EN) ✓ (all six within limit)
- Hard-difficulty fallback notes present ✓ (IMAGE_02 medium-difficulty carries a stock-photo fallback note)
- **Generation results — FAIL (false-positive status):**
  - `images.json` claims `generation_status: "images_generated"` and `generated: true` for all three.
  - `sap-business-one-01.manifest.results.json` contradicts this: `succeeded: 0`, `failed: 3`, each image `bytes: 0`, `status: "unknown"`, `error: "no STATUS line parsed"`.
  - Directory check: NO `sap-business-one-01-01.png / -02.png / -03.png` files exist in `final/`.
  - This is effectively a `prompts_only` outcome mislabeled as success. **Escalating to the user: the image-generator must be re-run for this article before publication.** The text does not depend on the images for approval, so this does not change the text recommendation, but it is a hard publish-gate.

### EN-link decision

The EN writer pointed internal links at assumed `/en/blog/...` and `/en/solutions-by-products/...` slugs and flagged uncertainty. **Decision: reverted to the verified `/id/` canonical URLs.** Rationale: the `/en/` parallels were never confirmed live; shipping unverified paths risks 404s that damage UX and crawl signals. `product_matrix.md` explicitly instructs "point to `/en/` equivalents where they exist; otherwise keep the `/id/` URL and note it for the editor" — so `/id/` is the compliant default. The `editor_note` frontmatter in the EN final records this and the swap condition. Action for the user/dev: confirm whether `/en/` parallels exist; if yes, swap; if no, keep `/id/`.

## The shipping question

Would a senior B2B/enterprise-software editor be proud to see this on soltius.co.id? Yes — for the text. It reads like a Platinum-Partner practitioner talking to a finance/IT decision-maker: quantified thresholds, an honest "you might NOT be ready yet" section competitors avoid, correct and current SAP install-base data, and zero overselling. The single gate before it actually goes live is regenerating the three images.
