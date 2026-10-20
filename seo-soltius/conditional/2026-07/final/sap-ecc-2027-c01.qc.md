---
brief_id: "sap-ecc-2027-c01"
editor_run_date: "2026-07-06"
recommendation: "approve"
overall_score: 9
---

# Editor QC Report — SAP ECC End of Life 2027: Dampak dan Opsi Migrasi Anda

> **Batch note:** evaluated against **conditional/2026-07 style_addendum overrides** (word band 800–1000; FAQ 2–3; internal links exactly 2; image-brief validation N/A — `{IMAGE_NN}` banned; Soltius mentions max 2; lead & Kesimpulan ≤80 words; definition allowed ONCE, in the snippet only; soft CTA soltius.co.id = final line). All other checks (anti-AI §5, EYD, citation discipline §10, Soltius framing §11, meta block §7, GEO §2a) applied in full.

## Recommendation
**approve**

The draft arrived unusually clean: every date and figure traces to the dossier's verified claims, all 8 researcher flags respected (no generic "12–24 bulan" duration — Medco 2026→2027 is the only duration illustration, framed as a bourse disclosure; transition-option price written as "biaya lebih tinggi yang besarannya tidak diungkap"; EHP 0–5 = "akhir 2025" without a day-precise date; 2040 phrased as "minimal satu rilis dalam maintenance"; 17.000 always "Gartner memproyeksikan"; talent shrinkage kept qualitative with an explicit "belum ada statistik resmi" hedge), zero AI tells, zero em-dashes, zero image placeholders, definition stated once (snippet only). I applied 10 in-place fixes — the only convention-level one converted the two inline text attributions (SAP support.sap.com; CIO.com/Gartner) into inline links per the batch-pilot convention (`saas-paas-iaas-c01`, `sap-b1-vs-accurate-c01`); the rest were EYD/register polish. Final body: **987 words** (band 800–1000; clean count — frontmatter stripped, links counted as anchor text, markdown syntax stripped, table content counted).

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | No banned openers/transitions; em-dash 0; paragraph rhythm 1–4 sentences (incl. two 1–2-sentence punch paragraphs); "masih sempat tidak sebelum 2027" is a genuine practitioner line |
| Factual & SAP-spec accuracy | 10 | All 6 spot-checked claims pass vs dossier + support.sap.com framing; every researcher flag honored; no invented durations/prices |
| On-page SEO compliance | 9 | Meta title 52 (keyword chars 1–24), meta desc 149 with supporting keyword, slug 44; H1 = working title verbatim; keyword in lead sentence 1 |
| GEO extractability (§2a) | 9 | 40–60-word direct answer after all 3 body H2s (55/48/45), each carrying that H2's own new point; 4-option table AI-liftable row-by-row; snippet 47 words |
| Soltius framing discipline | 10 | Exactly 2 prose mentions (Kesimpulan positioning line + CTA); "mendampingi ... dari assessment awal hingga go-live" — implementer framing; body 100% vendor-neutral |
| Internal linking | 10 | Exactly 2: hub `migrasi-erp-ke-cloud` (lead) + cousin `RISE-With-SAP-Untuk-ERP-Enterprise` (prose right after the options table); natural inline anchors, no "BACA JUGA" |
| FAQ quality | 9 | 3 Q&As (band 2–3), answers 40/38/35 words, each with ≥1 fact/number (31 Des 2027 + akhir 2025; 39%; 2 poin persen); FAQPage-parseable |
| Image-brief completeness | N/A | Batch override: no placeholders by design; 0 `{IMAGE_NN}` found ✓ |

## What I fixed (changelog)
- **Citations (convention)**: converted both inline text attributions into inline external links per the batch-pilot convention — "(SAP, support.sap.com, diakses Juli 2026)" now links to the official maintenance-strategy page (H2 #1 direct answer) and "(CIO.com, Juni 2025)" now links to the Gartner-sourced CIO.com article (H2 #1, ¶3). URLs match frontmatter `external_citations`; anchor word counts unchanged, so the direct answer stays at 55 words.
- **EYD (Kesimpulan)**: "bukan hari sistem Anda padam; ia titik ketika..." → "bukan hari sistem Anda padam, melainkan titik ketika..." — correct "bukan ... melainkan" pairing; removes the awkward inanimate "ia".
- **EYD/register (H2 #1, ¶4)**: "Tidak; yang berakhir adalah jaminan SAP..." → "Kenyataannya, yang berakhir adalah jaminan SAP..." — removes the non-standard one-word-plus-semicolon construction, keeps the mispersepsi-correction punch.
- **Register (H2 #2 elaboration)**: "...yang dikelola SAP, jadi tim Anda tidak lagi mengurus data center sendiri" → "...sehingga tim Anda..." (baku conjunction).
- **Register (third-party-support hedging)**: "jadi perlakukan dengan hati-hati" → "karena itu perlu dibaca dengan hati-hati" (baku; supplies the missing object sense).
- **EYD (H2 #1, ¶3)**: "statistik resmi soal lajunya" → "statistik resmi mengenai lajunya" ("soal" as preposition is informal).
- **Italics discipline (§3, first-use rule)**: *legal update* now italicized at its first occurrence (definition snippet, where *mainstream maintenance* and *extended maintenance* were already italicized) and de-italicized at second use (H2 #1, ¶2); *assessment* italicized at first use (H2 #3); *go-live* italicized (single use, Kesimpulan).
- **Frontmatter**: `word_count` 977 → **987** (clean count after edits).

## What I flagged (open issues)
- ⚠️ (minor, accepted) **"tinggal 18 bulan lagi" is time-anchored** (accurate as of publish month 2026-07 against 31 Des 2027) — like "Kuartal ini" in the Kesimpulan and "semester ini" in H2 #3, it will need updating if the article is refreshed after 2026. Deliberate for an urgency piece; freshness carried by `publish_month: 2026-07` (batch meta-block template has no separate dateModified field — same treatment as the two prior batch finals).
- ⚠️ (watch item for validator) **No third external citation for Medco/SAP News by design** — Medco is attributed in-text ("keterbukaan informasi bursa Juni 2026") and the transition option in-text ("SAP mengumumkan pada Februari 2025") without links, keeping the external-citation count at exactly 2 per the addendum (1–2). Do not flag the unlinked attributions as missing citations.
- ℹ️ (option for curator) Brief permits swapping the cousin link to sibling `iaas-untuk-sap-c01` **if** its live URL exists; no live URL is confirmed, so the verified default cousin (RISE page, WebFetch-checked by strategist 2026-07-06) stays. Total remains exactly 2 either way.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers (grep: 0)
- [x] No "Selain itu" opening paragraphs (grep: 0)
- [x] No "Penting untuk dicatat / dipahami bahwa" (0)
- [x] "Dengan demikian" not used (0)
- [x] Em-dash count ≤2 — actual: **0**
- [x] Varied paragraph lengths — 1–4 sentences; two short punch paragraphs (mispersepsi ¶, extended-maintenance hedging ¶) break the rhythm deliberately
- [x] Not every H2 → bullet list — zero bullet lists; H2 #2 is prose + table + prose; H2 #1 and #3 are pure prose
- [x] No generic claims without numbers — 10+ inline figures
- [x] No stacked hype adjectives (canggih/powerful/seamless/terdepan/revolusioner: 0)
- [x] No service-dump paragraph — zero Soltius mentions in body
- [x] No "Sebagai kesimpulan" opener — Kesimpulan opens on a callback to the lead's pain ("Tenggat 2027 bukan hari sistem Anda padam...")

### B. Factual & SAP-spec spot-check
| Claim | Source check | Verdict |
|---|---|---|
| Mainstream maintenance SAP ECC 6.0 / Business Suite 7 berakhir 31 Desember 2027; berlaku EHP 6–8 | dossier Claim 1 & 3 (support.sap.com, diakses 2026-07-06) ✓ | pass |
| Extended maintenance awal 2028–akhir 2030, premi 2 poin persen di atas basis maintenance, hanya EHP 6–8 | dossier Claims 2–3 ✓ ("2 poin persen", bukan "2% dari nilai kontrak") | pass |
| EHP 0–5 sudah kehilangan dukungan "pada akhir 2025" (tanpa tanggal harian) | dossier Claim 4 + Flag #3 respected ✓ | pass |
| S/4HANA: "komitmen minimal satu rilis dalam maintenance hingga 2040" (snippet-safe phrasing, tabel & direct answer) | dossier Claim 6 + Flag #6 respected ✓ (NOT "semua rilis didukung sampai 2040") | pass |
| Transition option: 2031–2033, syarat pindah ke SAP ERP private edition sebelum akhir 2030, diumumkan Feb 2025, "biaya lebih tinggi yang besarannya tidak diungkap", bagi pelanggan paling kompleks, "bukan alasan menunda" | dossier Claim 7 + Flag #2 + edge case "bukan perpanjangan untuk semua" ✓ | pass |
| Gartner via CIO.com Juni 2025: 39% dari ~35.000 per akhir 2024; "Gartner memproyeksikan" ~17.000 belum migrasi hingga 2027; Medco USD 1,75 juta, 2 anak usaha, 2026→2027, framed keterbukaan informasi bursa | dossier Claims 8–10 + Flags #7–#8 respected ✓ (bonus stat 13.000 correctly unused) | pass |

Blacklist sweep: no "Soltius builds SAP"; no invented product names/editions; no generic migration durations (Flag #1 ✓); no third-party-support savings percentages (Flag #4 ✓); talent shrinkage qualitative with explicit hedge (Flag #5 ✓); "18 bulan lagi" is arithmetic from verified dates, not an invented stat.

### C. On-page SEO checklist (seo_playbook §3, with batch overrides)
- [x] Meta title ≤60 (keyword first 30) — actual: **52** chars; "SAP ECC End of Life 2027" at chars 1–24
- [x] Meta description 140–160 — actual: **149**; opens with supporting keyword "Akhir dukungan SAP ECC" + 3 specific value props (31 Des 2027, premi 2 poin persen, 4 opsi/RISE)
- [x] Slug ≤60, kebab-case, keyword — actual: `sap-ecc-end-of-life-2027-dampak-opsi-migrasi` (**44**), matches brief suggestion
- [x] H1 contains keyword — working title preserved verbatim per brief ("SAP ECC ... 2027" in first 25 chars)
- [x] H2 count (addendum: 3–4 body) — actual: **3 body** + FAQ + Kesimpulan
- [x] ≥1 question-format H2 — **2 of 3** (#1 "Apa Dampaknya Jika...?", #3 "Mengapa Keputusan Harus Diambil pada 2026...?")
- [x] ≥1 praktis/terstruktur H2 — #2 with the 4-option × 4-column decision table (honest/counter-conventional H2 correctly dropped per addendum §2; replaced by 2 hedging insertions: third-party-support ¶ and extended-maintenance-rasional ¶)
- [x] Keyword in first 100 words — "tenggat SAP ECC 2027" in lead sentence 1
- [x] Definition snippet near top (40–60 words) — 47-word "Ringkasnya:" blockquote, dossier draft verbatim
- [x] ≥8 LSI terms — 12+ (akhir dukungan SAP ECC, mainstream/extended/customer-specific maintenance, SAP Business Suite 7, migrasi S/4HANA, S/4HANA Cloud Private Edition, RISE with SAP, transition option, patch keamanan, legal update, hyperscaler, brownfield/greenfield, EHP)
- [x] Internal links **exactly 2** (override) — hub `migrasi-erp-ke-cloud` (lead) + cousin `RISE-With-SAP-Untuk-ERP-Enterprise` (prose after table, per brief "baris opsi RISE"); inline, descriptive anchors
- [x] External authoritative citations 1–2 — **2 inline links** (SAP support.sap.com maintenance strategy; CIO.com/Gartner) — converted from text attributions this pass; Medco & SAP News attributed in-text without links to hold the count at 2
- [x] FAQ **2–3** (override) — actual: **3**, answers 40/38/35 words, each with ≥1 fact/number, all from the brief's PAA list (PAA #5 perbedaan ECC vs S/4HANA correctly NOT answered — sibling's territory)
- [x] Image placeholders **0 / banned** (override) — actual: 0
- [x] ≥1 structured element — 1 decision table (4 opsi × 4 kolom); 12 prose paragraphs; no forced second list (per addendum §4)
- [x] Word count **800–1000** (override) — actual: **987** (frontmatter updated)
- [x] ≥4 specific inline numbers — 18 bulan; 31 Desember 2027; akhir 2025; awal 2028; 2028–2030; 2 poin persen; 2040; 2031–2033; Februari 2025; 39% dari ~35.000; ~17.000; USD 1,75 juta; 1 Januari 2028

### C2. GEO extractability (seo_playbook §2a)
- [x] Direct 40–60-word answer immediately after each body H2 — **55 / 48 / 45** words, each carrying that H2's own new point (status turun + batasan EHP; peta 4 jalur; durasi-vs-kapasitas berjalan bersamaan) — none restates the snippet
- [x] **Definition-once rule (addendum)**: definition appears only in the "Ringkasnya:" snippet; no "Apa itu" H2; no definitional paragraph in the body; the mispersepsi ¶ corrects a misconception (brief-mandated point (e)), it does not re-define the term
- [x] One quotable, verifiable point per paragraph — each ¶ = one claim + sourced fact; ¶3 of H2 #1 pairs the Gartner stat with the explicitly-hedged ecosystem observation (single "skala persoalan" point)
- [x] Entities full-name on first use, acronyms expanded once — SAP ECC (SAP ERP Central Component) in lead; SAP Business Suite 7, S/4HANA Cloud Private Edition, SAP ERP, private edition, transition option all named in full; EHP used after "Enhancement Package 6–8" in snippet
- [x] FAQ parseable for FAQPage schema; freshness via `publish_month: 2026-07` + in-text date caps ("diakses Juli 2026", "Juni 2025", "Juni 2026") — batch meta-block template has no separate dateModified field (consistent with both prior batch finals)

### D. Soltius framing discipline (product_matrix.md + style_guide §11)
- [x] Framed as implementer/pendamping — "Soltius mendampingi perusahaan memetakan jalur keluar dari ECC, dari assessment awal hingga go-live"; never "builds"
- [x] Self-mentions ≤**2** (override) — actual: **2** (Kesimpulan positioning line + soltius.co.id CTA); zero mid-body asides
- [x] No unverifiable superlatives — "SAP Platinum Partner", "Best RISE Partner dan Best Cloud Partner SAP SEA" verified vs company_profile.md (2021 SEA awards; Platinum tier)
- [x] SAP/partner product names + specs match product_matrix.md row 5 / dossier — 2027/2030 ECC dates researcher-verified per the row's "verify before claiming" note
- [x] Closing uses a company_profile.md positioning line
- [x] Soft website CTA is the final line, consultative ("Untuk mendiskusikan skenario RISE with SAP ... kunjungi soltius.co.id"), separate from the Kesimpulan, anchored on the tracker's funnel product (RISE with SAP)
- [x] Hub link as natural inline anchor in the lead, no callout
- [x] Medco NOT associated with Soltius — framed purely as a public bourse-disclosure example ✓

### E. Anti-cannibalization spot check
- Closest prior: `erp-migration-to-the-cloud-01` (2026-06, brownfield/greenfield/bluefield) — uses "SAP ECC 2027 deadline" only as urgency anchor; this article makes the deadline itself the subject and keeps brownfield/greenfield to exactly 1 referring sentence ✓
- Boundary checks: no TCO math (belongs to `erp-migration-to-the-cloud-03`, which holds "extended maintenance" as opportunity-cost only); no phase/duration timeline beyond Medco 2026→2027 (sibling `timeline-migrasi-rise-c01`); no S/4HANA feature depth (sibling `sap-s4hana-c01`); ECC-vs-S/4HANA difference not answered ✓
- Subtopic overlap (Jaccard estimate): ≈ 0.22 vs closest prior (brief's calculation, confirmed by history subtopic lists) — < 0.4
- Verdict: **distinct angle confirmed**

### F. Image-brief completeness
**N/A — batch-2026-07 override**: no `{IMAGE_NN}` placeholders by design, no images.json, image-planner stage skipped. Confirmed **0** placeholders in the final (grep). The visual concept (peta opsi) is carried by the 4-option decision table, per addendum §3.

---

## The shipping question
A skeptical CIO who suspects "2027 = system dies" gets the correction in paragraph form, the exact SAP dates with a primary-source link, an honest four-option table that includes the stay-put and extended-maintenance paths competitors omit, a real Indonesian bourse-disclosure cost anchor, and exactly one restrained Soltius mention pair at the close. Yes — ship it.
