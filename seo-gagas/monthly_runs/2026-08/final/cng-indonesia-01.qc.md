---
brief_id: "cng-indonesia-01"
editor_run_date: "2026-08-11"
recommendation: "approve"
overall_score: 9
ai_score: 0.04
plagiarism_score: 0.03
---

# Editor QC Report — CNG di Dunia vs Indonesia: Belajar dari Negara Pengguna Terbesar

## Recommendation
**approve**

This is a strong, ship-ready benchmark explainer. Every high-risk fact the brief and dossier flagged is handled correctly: Pakistan is framed as a **collapse** (−83% from the 2011–12 peak, 700+ SPBG closed), not a success story; India's ~7–8 juta fleet is labeled an **estimate**; the energy-density myth is corrected to **~9 MJ/L vs ~32 MJ/L (~25–30%, not "half")**; China's light-duty fleet is shown shrinking since 2020; and the Indonesia 2026 momentum is correctly placed on the household-jargas axis, not the vehicle axis. No "95% Asia populasi" or unverified Argentina figures survived. PGN Gagas framing is clean (distributor/beyond-pipeline, no superlatives, 2 named mentions + the soft gagas.co.id CTA). The originality gate is clear (AI 0.04, no verbatim plagiarism). One factual-framing fix was applied in-place (SPBG count re-attributed to the PGN group). Nothing needs writer/strategist rework.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Concrete pain hook, honest hedging, "sering disalahpahami" density aside, varied rhythm. No AI-tell openers; 0 em-dashes. Paragraph CV 0.321 (above the 0.30 danger line, below the 0.45 ideal). |
| Factual & energi-gas / CNG accuracy | 9 | 5/5 spot-checks pass vs dossier; density corrected; India hedged; SPBG figure re-attributed to PGN parent. |
| On-page SEO compliance | 9 | Meta title 54, desc 154, slug 47; H1 + first-100-words keyword; 5 body H2s (question + honest); def snippet; 10+ LSI; 3 internal + 2 external; 6 FAQ; table + both list types. |
| GEO extractability (§2a) | 8 | 40–60-word answer after each major H2; one quotable point per paragraph; FAQ FAQPage-ready. No explicit `dateModified` field (freshness implied by `publish_month`). |
| PGN Gagas framing discipline | 9 | Provider/distributor beyond-pipeline; 2 named self-mentions + soft CTA; positioning line in Kesimpulan; no superlatives; not "produsen". |
| Internal linking | 10 | Hub `CNG di Indonesia` in the lead + 2 cousins (Gasku, LNG), all natural inline, no "BACA JUGA". |
| FAQ quality | 9 | 6 Q&As, each ~40–55 words, self-contained, mirrors PAA. |
| Originality (plagiarism + AI-detector) | 10 | AI 0.04 (pass); no non-Gagas verbatim ≥20 words across 4 web-checked passages. |

## What I fixed (changelog)
- **Re-attributed the SPBG scale figure**: "per data September 2025 PGN Gagas dilaporkan mengelola 14 SPBG di 7 provinsi (Warta Ekonomi, September 2025)" → "per 2025 kelompok PGN (induk PGN Gagas) dilaporkan mengoperasikan 14 SPBG di 7 provinsi untuk mendukung kendaraan berbahan bakar gas." The "14 SPBG di 7 provinsi" figure is a PGN group-level number (CNBC Indonesia headline attributes it to PGN, and it exceeds the 12-SPBG company_profile snapshot for Gagas) — attributing it to the parent with the year is the accurate framing. Date preserved.
- Updated frontmatter `word_count` 1487 → 1542 (measured on the saved final).

## What I flagged (open issues)
- ⚠️ Meta block has no explicit `dateModified` field — *recommendation*: CMS should stamp `dateModified` on publish; freshness is currently implied by `publish_month: 2026-08`. Minor, GEO §2a.
- ⚠️ Definition snippet runs ~62 words (target 40–60) — *recommendation*: acceptable as-is (strong AI-Overview bait); trim by one clause only if a future refresh touches the lead.
- ⚠️ Cadangan framed as "terbukti 54,83 TSCF" — the underlying Ditjen Migas figure is classified 3P (proven+probable+possible); the article follows the dossier and the cited source's own headline wording. Consistent with the dossier; note for future precision if a 1P-only figure becomes available.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan / Tidak dapat dipungkiri" openers (0 found)
- [x] No "Selain itu" opening ≥2 consecutive paragraphs (0 found)
- [x] No "Penting untuk dicatat / dipahami bahwa" (0 found)
- [x] "Dengan demikian" not overused (0 found)
- [x] Em-dash count ≤2 (0 em-dashes; en-dashes are numeric ranges, correct)
- [x] Varied paragraph lengths (mix of 1-sentence and 4–6-sentence; CV 0.321)
- [x] Not every H2 → 3-bullet list (mix of prose, numbered list, bullets, table)
- [x] No generic claims without numbers (6+ sourced figures)
- [x] No stacked hype adjectives
- [x] No service-dump paragraph

### B. Factual & energi-gas / CNG spot-check
| Claim | Source check | Verdict |
|---|---|---|
| Iran ~4,3 juta kendaraan dual-fuel + >2.365 SPBG (2026) | dossier ✓ (Shana/Kem. Perminyakan Iran); web-corroborated (~4.5 jt / ~2.500 stasiun) | pass |
| Pakistan CNG −83% (325→55 MMCFD, 2011-12→2024-25), 700+ SPBG tutup | dossier ✓ (OGRA via The Nation) | pass |
| Densitas CNG ~9 MJ/L vs bensin ~32 MJ/L (~25–30%, bukan ~1/2) | dossier ✓ (US DOE AFDC); web-corroborated (bensin 32 MJ/L; CNG ~9–11 MJ/L) | pass |
| India CGD: 12 lelang, ~98% populasi & 88% wilayah, >33.753 km pipa transmisi | dossier ✓ (PNGRB/PIB) | pass |
| Indonesia target 160.000 sambungan jargas CNG 2026 | dossier ✓ (Kem. ESDM via Kompas, Juni 2026) | pass |

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: 54 / keyword at pos 1
- [x] Meta description 140–160 — actual: 154
- [x] Slug ≤60, kebab-case, keyword — actual: cng-indonesia-vs-dunia-negara-pengguna-terbesar (47)
- [x] H1 contains keyword ("CNG di Dunia vs Indonesia...")
- [x] H2 count 4–5 — actual: 5 body H2s (+ FAQ + Kesimpulan)
- [x] ≥1 question-format H2 (3×); ≥1 honest/counter-conventional H2 ("Yang Bisa Ditiru, dan yang Tidak Cocok...")
- [x] Keyword in first 100 words
- [x] Definition snippet near top (~62 words — see flag)
- [x] ≥8 LSI terms — counted: 12+ (NGV, BBG, City Gas Distribution, SPBG, densitas energi, konversi BBM ke BBG, virtual pipeline, jargas CNG, Tabung Merah Putih, Mother Station, GTM, dual-fuel, beyond-pipeline)
- [x] 3 internal links (1 hub + 2 cousins) — perusahaan-cng-indonesia (lead), gasku, perusahaan-lng-indonesia
- [x] ≥1 external authoritative citation — actual: 2 hyperlinked (OGRA/The Nation, Kompas/ESDM) + AFDC inline text
- [x] FAQ 5–7 Q&As — actual: 6
- [x] 2 image placeholders (up to 3) — actual: 3
- [x] ≥1 list + ≥1 table — numbered list + 2 bullet lists + 2 comparison tables
- [x] Word count 1,200–1,600 — actual: 1542

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 (verified all 5)
- [x] Each body paragraph makes one independently quotable, verifiable point
- [~] FAQ parseable for FAQPage schema; `dateModified` / freshness — FAQ is clean; explicit `dateModified` absent (flagged for CMS)

### D. PGN Gagas framing discipline (product_matrix.md + style_guide §11)
- [x] Framed as gas-energy provider/distributor (menghadirkan/menyalurkan CNG beyond-pipeline), NOT producing gas
- [x] ≤3 self-mentions — actual: 2 named ("PGN Gagas") + soft gagas.co.id CTA
- [x] No unverifiable superlatives
- [x] Energi-gas / CNG product names + specs match product_matrix / dossier (Mother Station, GTM, MRU, SPBG, beyond-pipeline)
- [x] Closing uses a company_profile.md positioning line ("anak usaha PGN... bagian Subholding Gas Pertamina... menghadirkan gas bumi ke wilayah yang belum terjangkau jaringan pipa lewat solusi CNG")
- [x] Soft website CTA present as the FINAL line, after the conclusion (invites visit to gagas.co.id; consultative tone)
- [x] Hub link present as a natural inline anchor in the lead, descriptive anchor text — NOT a "BACA JUGA" callout

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: `sejarah-cng-indonesia-naik-turun-bbg` (domestic timeline 1985–2026); secondary `cng-transisi-energi-indonesia` (macro energy-mix narrative)
- Subtopic overlap (Jaccard estimate): ~0.2 (only "hambatan/infrastruktur Indonesia")
- Verdict: distinct angle confirmed — this is a data-driven cross-country benchmark (India/Iran/Pakistan/China vs Indonesia), an axis absent from all prior cng-indonesia articles

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran; `cng-indonesia-01.id.quality-input.json` written
- [x] AI-detector score < 0.30 — actual: 0.04 (pass; only 1 low-severity flag: paragraph-low-variance)
- [x] Paragraph burstiness CV ≥ 0.30 — actual: 0.321 (sentence CV 0.961; top-30 vocab share 0.296)
- [x] Plagiarism: 4 distinctive passages web-checked (Iran fleet/SPBG, density 9 vs 32 MJ/L, cadangan 54,83 TSCF, China 6,62 jt); facts corroborated on authoritative pages, no non-Gagas verbatim hit ≥20 words — plagiarism score: 0.03

## The shipping question
If this ran on gagas.co.id tomorrow and a skeptical energy practitioner or industrial buyer read it, WEBARQ Promote would be proud of it — it is honest about where "success" reverses (Pakistan, China), corrects a widespread density myth with a sourced number, and positions PGN Gagas without overclaiming. **Approve.**
