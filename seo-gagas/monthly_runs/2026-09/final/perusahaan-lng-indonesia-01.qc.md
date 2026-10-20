---
brief_id: "perusahaan-lng-indonesia-01"
editor_run_date: "2026-09-21"
recommendation: "approve"
overall_score: 9
ai_score: 0.04
plagiarism_score: 0.05
---

# Editor QC Report — Cara Menghitung Biaya Total (TCO) LNG untuk Pabrik: Metode + Contoh

## Recommendation
**approve**

This is a strong, genuinely useful how-to that fills a real SERP gap: a buyer-side, step-by-step TCO/landed-cost methodology with a worked example and a hidden-cost section — none of the competing pages do this. Every number traces to the dossier, and the draft handles the trickiest factual trap correctly by keeping the three price regimes (HGBT US$6,5–7, non-HGBT LNG US$13, historical regas US$16,77) separate and date-labelled rather than collapsing them into one figure. Anti-AI scan is clean (0 generic openers, 0 em-dashes, 0 "Selain itu"/"Dengan demikian"), the AI-detector heuristic is 0.04, and paragraph burstiness (CV 0.427) clears the editor bar. I made one precautionary framing fix (the mid-article aside implied Gagas performs regasification, which the dossier attributes to partner PT Nusantara Regas) and added a `date_modified` freshness field. No writer/strategist rework needed.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Concrete procurement-manager hook, varied rhythm, practitioner asides ("Ini sering disalahpahami"), honest hedging. 0 AI openers, 0 em-dashes. |
| Factual & energi-gas / CNG accuracy | 9 | 8 spot-checked claims all trace to dossier; HGBT vs non-HGBT vs historical regas kept distinct and date-labelled. |
| On-page SEO compliance | 9 | Meta title 53 / desc 148 / slug 36; 5 body H2 + FAQ + Kesimpulan; 3 internal links; ≥8 LSI. |
| GEO extractability (§2a) | 9 | 40–60-word answer after every H2; 53-word definition snippet; one quotable point per para; `date_modified` added. |
| PGN Gagas framing discipline | 9 | 2 self-mentions; LNG Hub + downstream distribution framing; no superlatives (framing fix applied). |
| Internal linking | 9 | Hub inline in lead + 2 cousins (CNG, Gaslink) woven contextually; no "BACA JUGA". |
| FAQ quality | 8 | 5 Q&As, each 40–80 words, mirror PAA. At the minimum of the 5–7 band (dossier drafted 8; 1–2 more optional). |
| Originality (plagiarism + AI-detector) | 9 | AI-detector 0.04; burstiness CV 0.427; no verbatim lift found (heuristic assessment — see §F). |

## What I fixed (changelog)
- **Framing (STRICT guard):** Mid-article aside said Gagas "menanggung pengangkutan dan regasifikasi sampai ke titik pelanggan" — softened to "berperan mengangkut dan menyalurkan gas bumi hingga ke titik pelanggan" (and the lead-in "logistik dan regasifikasi terakhir" → "logistik dan penyaluran akhir"). The dossier attributes actual regasification to partner PT Nusantara Regas and frames Gagas as LNG Hub operator + downstream distributor, not a regas operator. Keeps framing strictly to menyalurkan/mendistribusikan.
- **GEO freshness:** Added `date_modified: "2026-09-21"` to the meta block (seo_playbook §2a requires a freshness/`dateModified` signal).
- Updated `word_count` 1496 → 1498 to reflect the aside edit.

## What I flagged (open issues)
- ⚠️ Meta description carries "LNG ... di Indonesia" but not the exact phrase "Perusahaan LNG Indonesia" — *recommendation*: acceptable as-is. The how-to angle reads awkwardly with the landing-page phrase forced in, and the exact keyword is present in meta title, H1, and the first 100 words. No change made.
- ⚠️ FAQ has 5 Q&As (bottom of the 5–7 band); the dossier drafted 8 — *recommendation*: optional to add 1–2 (e.g., "Apa itu TCO LNG?", "Apakah boil-off gas termasuk biaya yang saya tanggung?") if a fuller FAQPage is wanted. Not blocking.
- ⚠️ External citations appear as inline text attributions ("(CNBC Indonesia, 29 Jun 2026)", "(Kontan, Jan 2025)", "(Bloomberg Technoz, 29 Jun 2026)") plus 3 URLs in the meta `external_citations` block, rather than clickable body hyperlinks — *recommendation*: consistent with pipeline convention (CMS renders the meta block). No change needed.
- ⚠️ Plagiarism check ran in degraded mode — heuristic-only, no WebSearch (session budget exhausted). See §F.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — grep: 0
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — grep: 0 occurrences
- [x] No "Penting untuk dicatat / dipahami bahwa" — grep: 0
- [x] "Dengan demikian" not overused — grep: 0
- [x] Em-dash count ≤2 — actual: 0 (U+2014); all dashes are en-dash numeric/date ranges
- [x] Varied paragraph lengths — mixes 1–2 sentence paras with 4–5 sentence ones; burstiness CV 0.427
- [x] Not every H2 → 3-bullet list — H2#1 prose only, #2 prose+numbered(8), #3 prose+formula, #4 prose+table, #5 prose+bullets(4)
- [x] No generic claims without numbers — dense with sourced figures
- [x] No stacked hype adjectives (canggih/powerful/seamless/terdepan) — none
- [x] No service-dump paragraph — single anchor per mention

### B. Factual & energi-gas / CNG spot-check
| Claim | Source check | Verdict |
|---|---|---|
| ESDM LNG industri tertentu → US$13/MMBTU efektif 29 Jun 2026, non-HGBT, terutama Jabar | dossier core-fact #1/#2 ✓ | pass |
| ICP Agustus 2026 = US$89,43/barel (Kepmen ESDM No. 352.K/2026) | dossier ✓ | pass |
| FOB slope 14% × ICP ≈ US$12,5/MMBTU; Bloomberg example US$90 × 14% = US$12,6 | dossier ✓; math verified (0,14×89,43=12,52; 0,14×90=12,6) | pass |
| Regas PGN US$16,77/MMBTU Jan–Mar 2025 (historical, labelled bertanggal) | dossier ✓ | pass |
| Boil-off 0,03–0,05%/hari (tangki besar) → 0,1–0,3%/hari (ISO tank kecil) | dossier ✓ (labelled literatur internasional) | pass |
| HGBT US$6,5 (bahan baku) / US$7 (bahan bakar), 7 sektor | dossier ✓ | pass |
| Diesel ≈ 0,035 MMBTU/liter (referensi rekayasa umum) | dossier ✓ (labelled) | pass |
| ICP +9,5% Jul→Ags 2026 (US$81,68→US$89,43) | dossier ✓; 7,75/81,68=9,49% | pass |

No claim exceeds what the dossier supports; every "illustrative" number is explicitly labelled as estimate/asumsi and paired with a "verify with provider" instruction.

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: 53 chars / keyword at pos 1
- [x] Meta description 140–160 — actual: 148
- [x] Slug ≤60, kebab-case, keyword — actual: `cara-menghitung-tco-lng-untuk-pabrik` (36)
- [x] H1 contains keyword/synonym — "LNG untuk Pabrik"
- [x] H2 count 4–5 (+FAQ +Kesimpulan) — actual: 5 body H2s
- [x] ≥1 question-format H2 (#3) ; ≥1 honest/counter-conventional H2 (#5)
- [x] Keyword in first 100 words — hub anchor "perusahaan LNG di Indonesia" in lead
- [x] Definition snippet near top — 53 words
- [x] ≥8 LSI terms — counted 15+ (landed cost, FOB, slope, ICP, HGBT, regasifikasi, boil-off, take-or-pay, capex on-site, O&M, likuifaksi, ISO tank, virtual pipeline, vaporizer/SRU, MMBTU)
- [x] 3 internal links (1 hub + 2 cousins) — perusahaan-lng-indonesia (lead), perusahaan-cng-indonesia (H2#4), gaslink (H2#5)
- [x] ≥1 external authoritative citation — 4 inline attributions (CNBC×2, Kontan, Bloomberg Technoz) + 3 URLs in meta block (ESDM-adjacent)
- [x] FAQ 5–7 Q&As — actual: 5
- [x] 2 image placeholders (up to 3) — actual: 3, each with Bahasa Indonesia alt-text
- [x] ≥1 list + ≥1 table — numbered list, bullet list, and 1 table
- [x] Word count 1,200–1,600 — actual: ~1,498 prose (script word_count 1,544 incl. markup)

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — verified for all 5 (≈40–45 words each)
- [x] Each body paragraph makes one independently quotable, verifiable point
- [x] FAQ parseable for FAQPage schema; `date_modified: 2026-09-21` added to meta block

### D. PGN Gagas framing discipline (product_matrix.md + style_guide §11)
- [x] Framed as gas-energy provider/distributor (mengoperasikan LNG Hub, menyalurkan gas bumi beyond-pipeline) — NOT producer/liquefaction/FSRU (aside softened)
- [x] ≤3 PGN Gagas self-mentions — actual: 2 ("PGN Gagas" at H2#2 aside + Kesimpulan)
- [x] No unverifiable superlatives — no "pionir/pemimpin pasar/terbaik/nomor satu"; no LNG-export claim
- [x] Energi-gas / LNG product names + specs match product_matrix.md / company_profile.md (LNG Hub, Gaslink, anak usaha PGN / Subholding Gas Pertamina)
- [x] Closing uses a company_profile.md positioning line (penopang bisnis hilir PGN)
- [x] Soft website CTA present as the FINAL line, after Kesimpulan ("jelajahi solusinya di gagas.co.id") — consultative, not "beli sekarang"
- [x] Hub link present as a natural inline anchor in the lead — no "BACA JUGA" callout

### E. Anti-cannibalization spot check
- Closest prior articles for this keyword: `keekonomian-lng-vs-diesel-lokasi-remote` (2026-07-2, #08) and `kontrak-struktur-harga-lng-take-or-pay-offtake` (2026-08, #13).
- Subtopic overlap (Jaccard estimate): ~0.15 vs #08 (breakeven LNG vs solar); ~0.25 vs #13 (commercial-terms glossary). Shared terms (take-or-pay, boil-off, HGBT, per-MMBTU) but distinct intent: this article builds the TCO number (formula + components + worked example). #13 explicitly deferred "model spreadsheet perbandingan biaya" to a later article — this fills that gap.
- Verdict: distinct angle confirmed (both overlaps < 0.4).

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran; `perusahaan-lng-indonesia-01.id.quality-input.json` written
- [x] AI-detector score < 0.30 — actual: **0.04** (verdict: pass). One low-severity flag only: paragraph-low-variance (CV 0.427 vs script target 0.45).
- [x] Paragraph burstiness CV ≥ 0.30 — actual: **0.427** (clears the 0.30 editor bar)
- [x] Plagiarism: 8 candidate passages extracted; assessed **heuristic-only (no WebSearch — budget exhausted)** per standing degraded-mode policy. plagiarism score: **0.05 (heuristic)**
  - All 8 candidates are the writer's own constructions (H1/lead narrative hook, TCO formula synthesis, H2 headings) or attributed factual paraphrases. The recurring US$13/MMBTU figure appears across several candidates but is always embedded in original sentence structure with source attribution and the writer's own non-HGBT/Jawa Barat qualifier — not a verbatim headline copy.
  - No well-known boilerplate definition lifted verbatim; no whole-paragraph lift; no evidence of a ≥20-word non-Gagas verbatim block. Heuristic verdict: pass.
</content>
