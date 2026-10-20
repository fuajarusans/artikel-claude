---
brief_id: "gasku-03"
editor_run_date: "2026-09-28"
recommendation: "approve"
overall_score: 9
ai_score: 0.04
plagiarism_score: 0.05
---

# Editor QC Report — Keselamatan Kerja & Liability Pengemudi Armada BBG (Gasku)

## Recommendation
**approve**

The draft lands the brief's uncovered angle cleanly: it fuses generic public-transport safety obligations (SMK, asuransi awak/penumpang, jam kerja) with the specifics of a gas-fuelled fleet (tabung CNG bertekanan, SOP pengisian, deteksi kebocoran) — the exact gap the SERP top-3 leave open. Every regulatory and gas-safety claim traces to the dossier and is attributed to its issuing body (Kemenhub / UU 22/2009 / PM 85/2018 / PP 44/2015 / Jasa Raharja / BPJS Ketenagakerjaan), never to PGN Gagas. The critical liability hedges are honored: Gagas is framed strictly as an SPBG operator that follows standard fuelling procedure — not a K3 regulator, SMK issuer, or insurer. Anti-AI scan is clean (0 body em-dashes, no cliché openers, varied rhythm), the AI-detector score is 0.04, and the on-page + GEO checklists pass. Two in-place fixes applied; two low-risk open notes flagged (a medium-confidence single-source sanction figure that the dossier itself supplied and attributed, and heuristic-only plagiarism mode per run constraints). Curator-ready.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | No AI-tell openers; 0 body em-dashes; varied paragraph + sentence length; honest hedges ("keunggulan relatif, bukan jaminan bebas risiko") |
| Factual & energi-gas / CNG accuracy | 9 | All claims dossier-sourced; CNG 200/250 bar, "lebih ringan dari udara" hedge honored; only soft note = Pasal 309 sanction (dossier single-source, medium) |
| On-page SEO compliance | 9 | Meta title 42 chars, meta desc 154, slug 39; 5 body H2s; 3 internal + 2 external links; 6 FAQs; 1 table + numbered + bullet lists |
| GEO extractability (§2a) | 9 | 40–60-word direct answer after every H2; one quotable point per paragraph; FAQ FAQPage-ready |
| PGN Gagas framing discipline | 10 | Provider/distributor via SPBG, not regulator/insurer; 2 self-mentions (1 aside + closing); no superlatives; positioning line + soft CTA |
| Internal linking | 9 | Hub (Gasku) inline in lead; cousins CNG + Gaslink placed where topic connects; descriptive anchors, no "BACA JUGA" |
| FAQ quality | 8 | 6 Q&As, 40–80 words each, self-contained; swapped brief's "siapa bertanggung jawab saat pengisian" PAA for a sanksi Q&A (both valid) |
| Originality (plagiarism + AI-detector) | 9 | ai=0.04 (pass); plagiarism heuristic-only, no whole-paragraph lift; distinctive regulatory phrasings legitimately echo cited gov sources |

## What I fixed (changelog)
- Precision reword in H2 #4 "Manajemen" bullet: "standar K3 penyalur gas seperti ISO 45001" → "standar sistem manajemen K3 seperti ISO 45001 yang lazim dipakai penyalur gas" (avoids implying ISO 45001 is a gas-specific standard; it is a general OHS standard, as company_profile / dossier state).
- Synced frontmatter `word_count` 1419 → 1465 (verified count from quality-check.ps1).

## What I flagged (open issues)
- ⚠️ **Pasal 309 sanction figures** (kurungan maks 6 bulan / denda maks Rp1.500.000) rest on a single secondary source (pojokasuransi.com, medium confidence per dossier). The draft attributes them to the law rather than quoting verbatim, which matches the dossier's recommendation — but this is the weakest-sourced number in the piece. *Recommendation*: acceptable to ship as-is (dossier-supplied, correctly attributed); recheck against the UU 22/2009 official text (peraturan.bpk.go.id) at next opportunity. Not blocking.
- ⚠️ **Plagiarism scan ran heuristic-only (no WebSearch, per run constraints).** The 8 candidate passages are either regulatory/legal statements that would legitimately match cited government sources (dephub, ESDM, bpk.go.id) or original-voice sentences; no whole-paragraph lift is detectable heuristically. *Recommendation*: if a future run has WebSearch budget, spot-verify the two non-regulatory candidates ("Satu hal yang sering menjebak…", the H2 heading) — expected clean.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan / Tidak dapat dipungkiri" openers — grep: none
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — grep: none
- [x] No "Penting untuk dicatat / dipahami bahwa" — grep: none
- [x] "Dengan demikian" not overused — grep: none
- [x] Em-dash count ≤2 — 0 in body (1 match is in frontmatter metadata only)
- [x] Varied paragraph lengths — sentence burstiness CV 0.657; paragraph CV 0.417 (mixed 1–5-sentence blocks)
- [x] Not every H2 → 3-bullet list — #1 prose, #2 numbered, #3 prose+table, #4 bullets, #5 bullets
- [x] No generic claims without numbers — 250/200 bar, 8 jam, 30 menit/4 jam, 6 bulan, Rp1.500.000, etc.
- [x] No stacked hype adjectives
- [x] No service-dump paragraph

### B. Factual & energi-gas / CNG spot-check
| Claim | Source check | Verdict |
|---|---|---|
| SMK wajib bagi perusahaan angkutan umum, teknis via PM 85/2018 (UU 22/2009 Pasal 204) | dossier ✓ (dephub.go.id; medium-high) | pass |
| Lima aspek SMK: regulasi, pengemudi, kendaraan, perbengkelan, manajemen | dossier ✓ (Kemenhub, high) | pass |
| Pasal 90: maks 8 jam/hari, istirahat 30 menit tiap 4 jam | dossier ✓ (hukumonline + pasal.id, high) | pass |
| CNG kompresi ~250 bar (ESDM); tekanan kerja ~200 bar/15°C (kajian teknik); lebih ringan dari udara | dossier ✓ + product_matrix ✓; hedge "bukan jaminan bebas risiko" honored | pass |
| Empat lapis perlindungan (asuransi kendaraan / tanggung gugat Ps.188-189 / Jasa Raharja UU 33-34/1964 / BPJS TK PP 44/2015) berdiri terpisah | dossier ✓; framed as separate classes, not one package | pass |

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — 42 chars; "Gasku" at position 1
- [x] Meta description 140–160 — 154 chars
- [x] Slug ≤60, kebab-case, keyword — `gasku-k3-liability-pengemudi-armada-bbg` (39)
- [x] H1 contains keyword — "…(Gasku)"
- [x] H2 count 4–5 — 5 body H2s (+ FAQ + Kesimpulan)
- [x] ≥1 question-format H2 (#1, #3); ≥1 honest/counter-conventional H2 (#5)
- [x] Keyword in first 100 words — "Gasku" in lead
- [x] Definition snippet near top — 40–60-word blockquote after lead
- [x] ≥8 LSI terms — counted 12+ (K3, SMK, SOP pengisian, SPBG, tanggung gugat, BPJS TK, Jasa Raharja, CNG, tabung bertekanan, bi-fuel, PM 39/2012, konversi BBM→BBG)
- [x] 3 internal links — gagas.co.id/gasku (hub, lead), /perusahaan-cng-indonesia (CNG), /gaslink (Gaslink)
- [x] ≥1 external authoritative citation — 2 in body (dephub.go.id, migas.esdm.go.id) + PM 85/2018 bpk.go.id in meta
- [x] FAQ 5–7 Q&As — 6
- [x] 2 image placeholders — {IMAGE_01}, {IMAGE_02}, both with alt-text
- [x] ≥1 list + ≥1 table — numbered SOP + 2 bullet lists + 1 table
- [x] Word count 1,200–1,600 — 1,465

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 (verified all 5)
- [x] Each body paragraph makes one independently quotable, verifiable point
- [x] FAQ parseable for FAQPage schema; freshness — publish_month 2026-10 in meta (CMS to set dateModified)

### D. PGN Gagas framing discipline (product_matrix.md + style_guide §11)
- [x] Framed as gas-energy provider/SPBG operator (menyalurkan/mengoperasikan/menjalankan prosedur), NOT regulator K3 / SMK issuer / insurer
- [x] ≤3 self-mentions — 2 "PGN Gagas" (H2 #2 aside + closing); Gasku brand + Gaslink cousin used contextually
- [x] No unverifiable superlatives
- [x] Energi-gas / CNG facts + product names match product_matrix.md / dossier (Gasku = BBG transportasi via SPBG)
- [x] Closing uses a company_profile.md positioning line (anak usaha PGN / Subholding Gas Pertamina)
- [x] Soft website CTA present as the FINAL line, after Kesimpulan (invites visit to gagas.co.id; consultative tone)
- [x] Hub link as natural inline anchor in the lead — not a "BACA JUGA" callout

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: `gasku-garansi-asuransi-mobil-bbg-pasca-konversi` (2026-09-gasku-10) — garansi pabrikan + asuransi kendaraan (properti/PSAKBI) for private owners
- Subtopic overlap (Jaccard estimate): ~0.1 — only the generic "asuransi" concept intersects; this article covers a different insurance class (liability/jiwa: tanggung gugat, Jasa Raharja, BPJS TK) + K3/SMK/SOP for fleet operators. Also distinct from gasku-04 (uji berkala tabung) — draft names uji berkala only as part of the "kendaraan" aspect, no intervals, per dossier reservation.
- Verdict: distinct angle confirmed

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran; `gasku-03.id.quality-input.json` written
- [x] AI-detector score < 0.30 — actual: **0.04** (verdict pass)
- [x] Paragraph burstiness CV ≥ 0.30 — actual: **0.417** (above editor bar; script's stricter internal target is 0.45, fired as a [low]-severity note only — not blocking given ai=0.04 and sentence CV 0.657)
- [~] Plagiarism: **heuristic-only (no WebSearch)** per run constraints. 8 candidate passages extracted; each is either a regulatory/legal statement that would legitimately echo cited authoritative sources (UU 22/2009, PM 85/2018, ESDM, bpk.go.id) or an original-voice sentence/heading. No whole-paragraph lift detectable heuristically. plagiarism_score (heuristic): **0.05**.
