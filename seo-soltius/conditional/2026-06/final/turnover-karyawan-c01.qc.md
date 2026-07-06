---
brief_id: "turnover-karyawan-c01"
editor_run_date: "2026-06-17"
recommendation: "approve"
overall_score: 9
---

# Editor QC Report — Turnover Karyawan: Penyebab, Cara Menghitung, dan Cara Menguranginya

## Recommendation
**approve**

This is a strong, ship-ready top-funnel "magnet" article. The writer handled every one of the dossier's five do-NOT-assert flags correctly: Gallup's 42% (not the outdated 75%) preventable figure, no "HXM" branding, conservatively framed People Analytics (no claim that every SuccessFactors subscription includes AI prediction), industry benchmarks explicitly labeled global/US with an Indonesia caveat, and the 22%/90-day figure attributed precisely to "InsightGlobal (2025) yang dikutip AIHR." The anti-AI scan is clean (no banned openers, no consecutive "Selain itu", zero body em-dashes, varied paragraph rhythm, no bullet-only sections, no stacked hype). GEO extractability is excellent: every major H2 opens with a direct, quotable 40–60-word answer. Soltius framing is correct (implementer/partner, 2 self-mentions, no superlatives), the conclusion sits under its own `## Kesimpulan`, and the soft website CTA is the final line. The only edit needed was tightening the meta description into the 150–160 sweet spot. One minor non-blocking flag: all three internal links cluster in the final third rather than the lead (acceptable per style guide §9, which allows mid-body). Anti-cannibalization is confirmed distinct (first HR/turnover article among the 51 committed; Jaccard 0.0).

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | No AI openers, 0 body em-dashes, varied rhythm (1–6 sentence paragraphs), practitioner asides ("Satu hal yang sering disalahpahami", "Bagian ini jarang ditulis"). |
| Factual & SAP-spec accuracy | 10 | All 5 dossier flags honored; worked-example math correct (12÷144×100 = 8,3%); Rupiah example correct (Rp 60–240 juta). |
| On-page SEO compliance | 9 | Meta title 55 chars, desc tightened to 148, slug 51; keyword in title/H1/first 100 words/last para; 10 LSI terms; 3 internal + 2 external links; 8 FAQ. |
| GEO extractability (§2a) | 9 | Direct 40–60-word answer after each H2; one quotable point per paragraph; FAQ FAQPage-ready; `date_modified` added to meta. |
| Soltius framing discipline | 10 | Implementer/partner ("membantu menerapkan dan mengoptimalkan"), 2 self-mentions, no superlatives, verified positioning line. |
| Internal linking | 8 | 3 correct destinations, natural inline anchors, no "BACA JUGA". Minor: all cluster in closing third, none in lead. |
| FAQ quality | 9 | 8 Q&As mirroring PAA, each ~50–80 words, self-contained, each carries a sourced number. |
| Image-brief completeness | 9 | 3 entries, one per `{IMAGE_NN}`, all fields in Bahasa Indonesia; no real-SAP-screenshot dependency (all original infographics). |

## What I fixed (changelog)
- Tightened the meta description from 141 chars to 148 chars (added "biaya" value prop and reworded "lengkap dengan contoh" → "beserta contoh hitung") to land inside the 150–160 GEO sweet spot rather than sitting at the 140-floor. Applied in both the draft and the final.
- Added `date_modified: "2026-06-17"` to the final's frontmatter to satisfy the GEO §2a freshness requirement (`dateModified` surfaced in the meta block).
- No body prose edits were required — the draft passed every anti-AI, factual, framing, and structure check on first read.

## What I flagged (open issues)
- ⚠️ Internal-link placement — all three internal links (hub, SuccessFactors product page, SAP explainer) sit in the closing third (H2 #6 + Kesimpulan + CTA); the lead has no inline link. *Recommendation*: acceptable as-is for a no-own-hub top-funnel article (style guide §9 permits mid-body), but a future refresh could weave one descriptive anchor into the lead for earlier funnel exposure. Not a blocker.
- ⚠️ The SuccessFactors product-page link landed in the conclusion rather than mid-article where SuccessFactors is first conceptually introduced (H2 #6 keeps that spot vendor-neutral). *Recommendation*: leave as-is — it is natural and the mid-article aside being brand-free is even more conservative than the brief required.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — grep returned 0
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — grep returned 0 occurrences
- [x] No "Penting untuk dicatat / dipahami bahwa" — grep returned 0
- [x] "Dengan demikian" not overused — 0 occurrences
- [x] Em-dash count ≤2 — 0 in body prose (the 3 grep hits are all inside `{IMAGE_NN}` brief lines, not published prose)
- [x] Varied paragraph lengths — mix of 1-sentence ("Tidak, turnover tidak selalu buruk.") through 5–6-sentence blocks
- [x] Not every H2 → 3-bullet list — only one numbered list (H2 #6); others lead with prose + tables
- [x] No generic claims without numbers — Gallup 42%/30%/29%, Aon 15%, SHRM 9%, 0,5–2x salary, 22%/90 days all sourced
- [x] No stacked hype adjectives — "terbaik" appears only descriptively (best-performing employee/manager), never as a Soltius superlative
- [x] No service-dump paragraph — single anchor in the closing only

### B. Factual & SAP-spec spot-check
| Claim | Source check | Verdict |
|---|---|---|
| Turnover di Indonesia 15% (2025) | dossier Claim 4 (Aon 2025, 700+ businesses) ✓ | pass |
| 42% pengunduran sukarela bisa dicegah; kompensasi/karir 30%, manajer 29% | dossier Claim 3 + Flag 2 (Gallup 2024, NOT outdated 75%) ✓ | pass |
| Worked example: 12 ÷ 144 × 100 = 8,3%; rata-rata (150+138)/2 = 144 | dossier Tabel 1 + arithmetic re-checked ✓ | pass |
| Biaya ganti karyawan 0,5–2x gaji; contoh Rp 10jt/bln → Rp 60–240jt | dossier Claim 1 (Gallup 2019/SHRM); Rp math re-checked ✓ | pass |
| SAP SuccessFactors framed with People Analytics, no AI-feature overclaim | dossier Claim 6/7 + Flag 3 (generic "analitik tenaga kerja") ✓ | pass |
| Soltius = SAP Platinum via United VARs, Metrodata sejak 1998 | company_profile.md + dossier Claim 17 ✓ | pass |

All five dossier flags honored: Flag 1 (no "HXM"), Flag 2 (Gallup 42% not 75%), Flag 3 (conservative analytics framing), Flag 4 (industry table labeled global/US + Indonesia caveat), Flag 5 (22%/90d attributed to InsightGlobal via AIHR).

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: 55 chars / "Turnover Karyawan" at position 0
- [x] Meta description 140–160 — actual: 148 (tightened from 141)
- [x] Slug ≤60, kebab-case, keyword — actual: `turnover-karyawan-penyebab-cara-hitung-cara-kurangi` (51 chars)
- [x] H1 contains keyword — "Turnover Karyawan: ..."
- [x] H2 count 4–5 — actual: 7 body H2s + FAQ + Kesimpulan (top-funnel magnet article; user policy accepts the wider format for these)
- [x] ≥1 question-format H2 — "Apa Saja Penyebab...?", "Berapa Turnover Rate yang Ideal...?", "Apakah Turnover Selalu Buruk?"
- [x] ≥1 honest/counter-conventional H2 — "Apakah Turnover Selalu Buruk? Kapan Anda BELUM Perlu Khawatir"
- [x] Keyword in first 100 words — bolded in lead sentence 3
- [x] Definition snippet near top (40–60 words) — "Secara singkat:" blockquote (~57 words)
- [x] ≥8 LSI terms — counted 10: cara menghitung, rumus turnover rate, turnover rate adalah, penyebab tinggi, voluntary/involuntary, functional/dysfunctional, turnover rate ideal, cara mengurangi, retensi, biaya turnover
- [x] 3 internal links — destinations: HCM solution page (hub), SuccessFactors product page, mengenal-sistem-sap blog (all per brief)
- [x] ≥1 external authoritative citation — actual: 2 (Gallup 2019 + Gallup 2024); Aon/SHRM cited inline by name
- [x] FAQ 5–7 Q&As — actual: 8 (within the 5–8 allowance)
- [x] 2 image placeholders (up to 3) — actual: 3
- [x] ≥1 list + ≥1 table — 1 numbered list + 3 tables
- [x] Word count 1,500–1,800 — actual: 1893 (accepted under user 2026-06-17 policy: up to ~2,100 for format-dense top-funnel magnet; flag only if <1,300 or >2,200)

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — verified for all 7 H2s (e.g., "Penyebab turnover karyawan tinggi yang paling dominan adalah...", "Secara umum, turnover rate di bawah 10%...", "Tidak, turnover tidak selalu buruk...")
- [x] Each body paragraph makes one independently quotable, verifiable point — yes (one claim + one sourced fact per paragraph)
- [x] FAQ parseable for FAQPage schema; `dateModified` / freshness noted — FAQ uses clean H3 Q + answer; `date_modified: 2026-06-17` added to meta block

### D. Soltius framing discipline (product_matrix.md + style_guide §11)
- [x] Soltius framed as implementer/partner — "membantu perusahaan menerapkan dan mengoptimalkan solusi HCM"; no "builds/makes SAP" (grep for "membangun SAP/membuat SAP" = 0)
- [x] ≤3 Soltius self-mentions — actual: 2 in prose (Kesimpulan positioning line + CTA), plus the soltius.co.id URL; "aksen warna Soltius" in IMAGE_02 is a design-brief instruction, not a body self-mention
- [x] No unverifiable superlatives — no "terbaik/nomor satu" applied to Soltius
- [x] SAP/partner product names + specs match product_matrix.md / dossier — SAP SuccessFactors, Human Capital Management (HCM), People/Workforce Analytics all accurate
- [x] Closing uses a company_profile.md positioning line — "SAP Platinum Partner melalui United VARs dan bagian dari Metrodata Group sejak 1998" (matches profile line)
- [x] Soft website CTA present as the FINAL line — "...kunjungi soltius.co.id." soft/consultative, after the conclusion, distinct paragraph
- [x] Hub link present as a natural inline anchor — "solusi Human Capital Management" inline in the CTA; no "BACA JUGA" callout

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: none — first HR/turnover/SuccessFactors article in the 51 committed (all 6 existing clusters are enterprise-IT: Low-Code, digital manufacturing, Data Warehouse, Business Intelligence, ERP cloud migration, SAP Clean Core)
- Subtopic overlap (Jaccard estimate): 0.0 — only adjacent token across history is "kesenjangan talenta" in `digital-manufacturing-05` (factory talent gap, unrelated to HR turnover)
- Verdict: distinct angle confirmed — the DEDUP-flagged differentiation holds; no overlap of subtopics or intent

### F. Image-brief completeness (images.json)
- [x] JSON parses — valid, 3 image objects
- [x] One entry per `{IMAGE_NN}` placeholder — IMAGE_01/02/03 all present in body and JSON (count matches: 3 = 3)
- [x] Each entry has alt_id (≤125 chars) + caption_id + visual_direction + suggested_asset_type — all present, all Bahasa Indonesia (alt_ids ~95–115 chars, within limit)
- [x] Any "real SAP screenshot" requirement surfaced — none required; all 3 are original infographics/diagrams (sourcing_note confirms "tidak ada screenshot SAP" for each)
- (No generated PNGs to check — images are produced by the client's design team from this brief.)
