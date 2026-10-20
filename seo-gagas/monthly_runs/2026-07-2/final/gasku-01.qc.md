---
brief_id: "gasku-01"
editor_run_date: "2026-07-07"
recommendation: "approve"
overall_score: 9
ai_score: 0.04
plagiarism_score: 0.03
---

# Editor QC Report — Perawatan Kendaraan BBG (Gasku): Jadwal Servis & Uji Berkala Tabung

## Recommendation
**approve**

This is a genuinely strong pilot: it fills a real SERP whitespace (post-conversion maintenance, absent from the three pre-decision part-1 Gasku articles), teaches the topic vendor-neutrally, and handles a legally murky area (tank re-test interval) with disciplined, honest hedging that the dossier explicitly required. All five spot-checked facts verify against the dossier plus authoritative sources (Kemenperin, Kemnaker/Permenaker 37/2016, US DOE AFDC), PGN Gagas framing is correct and conservative (one named self-mention + soft website CTA), and originality is clean (AI-detector 0.04, no non-Gagas verbatim ≥20 words). The one substantive editorial defect — an em-dash count of ~15, the article's single strongest AI tell — was fixed in-place down to the ≤2 cap without touching any hedge, fact, link, or image placeholder. Nothing needs writer/strategist rework. One naming-collision flag for the curator (see open issues) does not affect content quality.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | No clichéd openers, no "Selain itu"/"Dengan demikian"/"Penting untuk"; em-dash overuse (the one real tell) fixed to ≤2. Varied rhythm, honest asides ("ini sering disalahpahami"). |
| Factual & energi-gas / CNG accuracy | 10 | 5/5 spot-checks pass; regulatory attribution precise (Permenaker 37/2016 = K3 bejana tekan; SNI 7407-2009 = metode uji, not a retest schedule). |
| On-page SEO compliance | 9 | Meta title 47c, meta desc 148c, slug 54c, keyword in H1/first-100/last-para, 5 H2s, question + honest H2 present. |
| GEO extractability (§2a) | 9 | 40–60-word direct answer after every H2 (45–54 words each); definition snippet 58 words; FAQPage-parseable; date_modified added. |
| PGN Gagas framing discipline | 10 | Provider/distributor framing; 1 named mention + soft CTA; no superlatives; no invented tank-testing service. |
| Internal linking | 10 | Hub in lead (natural inline), 2 cousins mid-body, descriptive anchors, no "BACA JUGA". |
| FAQ quality | 9 | 5 Q&As, each 40–80 words, self-contained, mirrors PAA. |
| Originality (plagiarism + AI-detector) | 10 | AI 0.04; no verbatim lifts; only unavoidable regulatory proper nouns overlap. |

## What I fixed (changelog)
- **Reduced em-dashes from ~15 to 2** (1 in body prose, 1 inside an image-placeholder design brief) — the only material AI tell. Converted each to a comma / colon / period / parenthesis, chosen for natural flow. Affected: lead-body §1 (3 dashes), §2 filter-gas para, §2 leak-test para, §3 SNI para (2 dashes), §4 batas-aman para, §5 hemat para, two FAQ answers, and the conclusion (3 dashes). No hedge, number, source, link, or image concept altered.
- Added rhythm variation as a side effect (e.g., "Gas di dalamnya dikompresi hingga sekitar 200 bar." now a short standalone sentence), nudging paragraph burstiness upward.
- Added `date_modified: "2026-07-07"` to the meta block for GEO freshness (§2a).
- Updated frontmatter `word_count` 1556 → 1573 (net +~15 words from dash→short-sentence conversions; still within 1,200–1,600).

## What I flagged (open issues)
- ⚠️ **Brief-id / history-id naming collision** — `articles_history/index.json` already contains `2026-07-gasku-01` (the old "Apa Itu Gasku…" article) from batch `2026-07`. This new article is batch `2026-07-2`, a different maintenance angle. *Recommendation*: curator must assign a distinct history `id` (e.g., `2026-07-2-gasku-01`) so it does not overwrite the existing entry. Content angle is genuinely distinct (Jaccard ~0.13); this is purely an id-hygiene note.
- ⚠️ **Paragraph-variance scanner note (low severity)** — scanner reports paragraph word-count CV=0.401 vs its own aspirational target ≥0.45. This is ABOVE the editor's burstiness floor (0.30) and the AI-detector still scored 0.04, so no fix required; noted for transparency.
- ⚠️ **"~5 tahun" retest interval remains deliberately hedged** — per the researcher/user instruction, this is left as "commonly cited practice tied to the K3 bejana-tekan framework, confirm locally," NOT attributed to SNI 7407:2009 and NOT stated as settled law. This is correct and intentional; kept as-is. Independent web check corroborated the hedge (K3 practice cites "3–5 tahun tergantung jenis bejana").

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers
- [x] No "Selain itu" opening ≥2 consecutive paragraphs (none present)
- [x] No "Penting untuk dicatat / dipahami bahwa"
- [x] "Dengan demikian" not overused (absent)
- [x] Em-dash count ≤2 — **fixed from ~15 to 2** (1 body prose, 1 in an image-brief)
- [x] Varied paragraph lengths (1-sentence FAQ opener vs 4–5-sentence body paras)
- [x] Not every H2 → 3-bullet list (mix: 3 prose H2s, 1 table H2, 1 bullet H2, 1 numbered H2)
- [x] No generic claims without numbers (200 bar, Rp 4.500/LSP, 15–25 tahun, 1,5× tekanan, ~3 bulan, ~5 tahun)
- [x] No stacked hype adjectives (canggih/powerful/seamless/terdepan) — none found
- [x] No service-dump paragraph (single conservative anchor in conclusion)

### B. Factual & energi-gas / CNG spot-check
| Claim | Source check | Verdict |
|---|---|---|
| Permenaker 37/2016 covers vehicle CNG cylinders; riksa uji by Ahli K3 Pesawat Uap & Bejana Tekanan (Kemnaker) | dossier ✓ + WebSearch (kemnaker/bpk, katigaku, binaprima) ✓ | pass |
| Kemenperin Permen 70/M-IND/PER/7/2012 mandates converter kit CNG meet SNI 7407-2009 / ISO 11439 / ECE R110 | dossier ✓ + WebSearch (kemenperin.go.id/artikel/4130, BSN, hukumonline) ✓ | pass |
| NGV2 tank useful life 15–20 yr (up to 25) | dossier ✓ + WebSearch (AFDC "15 to 20 years"; NGV2 >10 & <25) ✓ | pass |
| Gasku Rp 4.500/LSP nationally; install at PGN-Gagas-designated certified workshop | dossier ✓ (gagas.co.id) + WebSearch (multiple 2026 news, gagas.co.id) ✓ | pass |
| Hydrostatic test at ~1.5× working pressure | dossier ✓ (Permenaker 37/2016 principle; ISO 11439) ✓ | pass |
| Framing: PGN Gagas does NOT run a scheduled tank-testing/maintenance package | dossier flag ✓ — article does not claim it | pass |

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: 47 / "Gasku" at pos 15
- [x] Meta description 140–160 — actual: 148
- [x] Slug ≤60, kebab-case, keyword — actual: perawatan-kendaraan-bbg-gasku-jadwal-servis-uji-tabung (54)
- [x] H1 contains keyword ("Gasku")
- [x] H2 count 4–5 — actual: 5 (+ FAQ + Kesimpulan)
- [x] ≥1 question-format H2 ("Berapa Lama Sekali Tabung CNG Harus Diuji Ulang…"); ≥1 honest/counter-conventional H2 ("Apakah Merawat Mobil BBG Lebih Mahal? (Jujur)")
- [x] Keyword in first 100 words (lead, inline anchor "[Gasku]")
- [x] Definition snippet near top (~58 words, blockquote after lead)
- [x] ≥8 LSI terms — counted: 16+ (converter kit, uji berkala, tabung CNG, leak test, filter gas, masa pakai, bengkel resmi, SNI 7407, ISO 11439, Bi-Fuel, hidrostatik, bejana tekanan, fuel selector switch, Permenaker, NGV2, riksa uji)
- [x] 3 internal links (1 hub + 2 cousins) — destinations: gagas.co.id/gasku (lead), /perusahaan-cng-indonesia (§1), /gaslink (§5)
- [x] ≥1 external authoritative citation — actual: 3 (Kemenperin, Kemnaker/Permenaker 37/2016, US DOE AFDC), all inline-attributed + in meta
- [x] FAQ 5–7 Q&As — actual: 5
- [x] 2 image placeholders (up to 3) — actual: 3 ({IMAGE_01/02/03}, all with rich concept + Bahasa alt-text)
- [x] ≥1 list + ≥1 table — actual: 1 bullet list + 1 numbered list + 1 comparison table
- [x] Word count 1,200–1,600 — actual: ~1,545–1,593 (frontmatter set 1573)

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — measured: H2#1=45, H2#2=45, H2#3=53, H2#4=54, H2#5=50 words
- [x] Each body paragraph makes one independently quotable, verifiable point (one claim + a sourced number per para)
- [x] FAQ parseable for FAQPage schema; `date_modified: 2026-07-07` added to meta block for freshness

### D. PGN Gagas framing discipline (product_matrix.md + style_guide §11)
- [x] PGN Gagas framed as gas-energy provider (menghadirkan Gasku, mewajibkan instalasi di bengkel resmi) — NOT a producer/tester
- [x] ≤3 self-mentions — actual: 1 named "PGN Gagas" (conclusion) + soft website CTA line
- [x] No unverifiable superlatives — none
- [x] Product names + specs match product_matrix.md / dossier (Gasku, Rp 4.500/LSP, ISO 45001:2018, Bi-Fuel, converter kit)
- [x] Closing uses a company_profile positioning line ("anak usaha PGN di bawah Subholding Gas Pertamina … ISO 45001:2018")
- [x] Soft website CTA present as the FINAL line ("…kunjungi gagas.co.id"), consultative
- [x] Hub link is a natural inline anchor in the lead ("[Gasku]"), NOT a "BACA JUGA" callout

### E. Anti-cannibalization spot check
- Closest prior articles for keyword_slug=gasku: `apa-itu-gasku-bbg-kendaraan-cara-kerja-spbg` (informational), `konversi-bbm-ke-bbg-penghematan-armada` (decision), `kapan-kendaraan-belum-cocok-pakai-bbg-gasku` (decision)
- Subtopic overlap (Jaccard estimate): ~0.13 — only "keselamatan tabung" + "bengkel tersertifikasi" touch, in a different (ownership/maintenance) context vs the priors' pre-decision framing
- Verdict: **distinct angle confirmed** — this is the only ownership/post-conversion maintenance angle in the cluster

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran cleanly; `gasku-01.id.quality-input.json` written (word_count 1593, 21 paragraphs, 91 sentences)
- [x] AI-detector score < 0.30 — actual: **0.04** (verdict pass; sentence burstiness 0.782, paragraph burstiness 0.401, top30 vocab share 0.30)
- [x] Paragraph burstiness CV ≥ 0.30 — actual: **0.401** (one low-severity flag vs the tool's aspirational ≥0.45; above editor floor, no action needed)
- [x] Plagiarism: 8 candidate passages web-checked; **no non-Gagas verbatim hit ≥20 words** — plagiarism score: **0.03**. Checked: Kemenperin standards sentence, riksa-uji K3 sentence, lead sentence, Gasku-price sentence. Overlap limited to unavoidable regulation/standard proper nouns (SNI 7407-2009, ISO 11439, "Ahli K3 Bidang Pesawat Uap dan Bejana Tekanan", Permenaker 37/2016) — not copyrightable prose. Remaining candidates were the article's own original H2/FAQ phrasings.

**PowerShell scanner status:** ran cleanly, no errors. Output file: `monthly_runs/2026-07-2/final/gasku-01.id.quality-input.json`.
