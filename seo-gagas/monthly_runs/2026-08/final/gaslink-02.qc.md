---
brief_id: "gaslink-02"
editor_run_date: "2026-08-11"
recommendation: "approve"
overall_score: 9
ai_score: 0.04
plagiarism_score: 0.05
---

# Editor QC Report — Perizinan Instalasi Gaslink: PLO, Izin Lingkungan, dan Waktunya

## Recommendation
**approve**

This is a careful, practitioner-grade draft that clears every gate. The single most important risk in this topic — conflating regulatory terminology and inventing timelines — is handled correctly: PLO (Persetujuan Layak Operasi) is consistently framed as the migas term (Ditjen Migas, Permen ESDM 32/2021) and explicitly disambiguated from SLO (ketenagalistrikan); the UKL-UPL 3–5-day figure is labeled an estimate tied to PP 22/2021; there is no invented PLO issuance SLA; the SPPL/UKL-UPL threshold is left as case-by-case via OSS/KBLI with no fabricated capacity number; the downstream customer-side PLO gap is hedged to principle-based; and OSS-RBA is described generically without a single PP number. Anti-AI scan is clean, all GEO answers land at 40–60 words, framing is correct (PGN Gagas as distributor/pendamping, not permit issuer; 2 self-mentions), originality passes (AI 0.04, no non-Gagas verbatim lift). I applied only minor redundancy tightening in-place. Curator-ready.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | No AI openers/transitions; varied formats; honest "satu catatan jujur" aside. |
| Factual & energi-gas / CNG accuracy | 9 | 5/5 spot-checks pass vs dossier + WebSearch; dates verified. |
| On-page SEO compliance | 9 | Meta title 50, desc 146, slug 47; all in-band. |
| GEO extractability (§2a) | 10 | 40–60-word answer after every major H2; one quotable point per paragraph. |
| PGN Gagas framing discipline | 10 | Provider/pendamping framing; 2 mentions; no superlatives; "izin diterbitkan otoritas." |
| Internal linking | 9 | 1 hub (lead) + 2 distinct cousins; brief's same-hub escape hatch used correctly. |
| FAQ quality | 9 | 6 Q&As, each 44–45 words, PAA-aligned. |
| Originality (plagiarism + AI-detector) | 10 | AI 0.04; no non-Gagas verbatim ≥20 words. |

## What I fixed (changelog)
- Tightened redundancy "verifikasinya berkisar **sekitar** 3–5 hari kerja" → "verifikasinya berkisar 3–5 hari kerja" (H2#3, item 2) — "berkisar" already implies approximation.
- Tightened "menyederhanakan dua aturan lama **sebelumnya**" → "dua aturan lama" (H2#2) — removed the "lama + sebelumnya" pleonasm.
- Tightened "menggabungkan dua aturan lama **sebelumnya**" → "dua aturan lama" (FAQ "Apa itu Permen ESDM 32...") — same fix for consistency.
- Updated frontmatter `word_count` 1532 → 1520 to match the polished prose count.

## What I flagged (open issues)
- ⚠️ Paragraph-length variance: quality-check.ps1 reports CV=0.339 (above the editor's ≥0.30 strong-tell bar, below the script's stricter ≥0.45 target). *Recommendation*: non-blocking — the article already mixes 1-sentence and 5–6-sentence paragraphs; AI-detector score is 0.04. No forced padding warranted.
- ⚠️ No explicit `dateModified` field in the meta block. *Recommendation*: freshness is captured via `publish_month: 2026-08`; a `dateModified` is a CMS/Article-schema concern — surface at publish, no content change needed.
- ⚠️ Terminology nuance surfaced during plagiarism WebSearch: some field sources expand "PLO" as *Peralatan* Layak Operasi (per older Permen ESDM 18/2018), not *Persetujuan* Layak Operasi. *Recommendation*: article correctly uses "Persetujuan Layak Operasi" per the dossier's high-confidence source (sipp.menpan.go.id). Leave as-is; the disambiguation from SLO is the load-bearing point and is handled.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan / Tidak dapat dipungkiri" openers — none found
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — zero occurrences
- [x] No "Penting untuk dicatat / dipahami bahwa" — none
- [x] "Dengan demikian" not overused — zero occurrences
- [x] Em-dash count ≤2 — 2 total, both inside `{IMAGE}` captions; **0 in body prose**
- [x] Varied paragraph lengths — 1-sentence ("Tidak ada angka baku.") through 5–6-sentence blocks
- [x] Not every H2 → 3-bullet list — H2#2 is all prose; H2#3 numbered; H2#4 table; H2#1/#5 bullets
- [x] No generic claims without numbers — dates, day ranges, regulation numbers throughout
- [x] No stacked hype adjectives — none (canggih/powerful/terdepan absent)
- [x] No service-dump paragraph — single anchor in closing

### B. Factual & energi-gas / CNG spot-check
| Claim | Source check | Verdict |
|---|---|---|
| Permen ESDM 32/2021 ditetapkan 12 Nov 2021, menggabungkan 2 aturan lama | dossier ✓ + WebSearch (peraturan.bpk.go.id / migas.esdm.go.id: ditetapkan 12 Nov 2021, diundangkan 17 Nov 2021, konsolidasi Permen 18/2018 + Kepmentamben 300K/1997) | pass |
| PLO diterbitkan Ditjen Migas; istilah migas, bukan SLO (ketenagalistrikan) | dossier ✓ (sipp.menpan.go.id) + product_matrix framing | pass |
| UKL-UPL standar ~3–5 hari kerja per tahap = estimasi (PP 22/2021) | dossier ✓ (flagged as estimate) + WebSearch corroboration (DLH SOP: max 3 hari pemeriksaan / max 5 hari rapat) — labeled estimate in draft | pass |
| 8 formulir UKL-UPL standar migas diluncurkan 20 Des 2022 (KLHK+ESDM+SKK Migas) | dossier ✓ (two independent sources) | pass |
| PGN Gagas: anak usaha PGN / Subholding Gas Pertamina; ISO 45001:2018 distribusi CNG | dossier ✓ (company_profile pre-approved) | pass |

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — 50 chars; "Gaslink" at pos ~20
- [x] Meta description 140–160 — 146 chars
- [x] Slug ≤60, kebab-case, keyword — `perizinan-instalasi-gaslink-plo-izin-lingkungan` (47)
- [x] H1 contains keyword — "Perizinan Instalasi Gaslink: ..."
- [x] H2 count 4–7 — 5 content H2 (+ FAQ + Kesimpulan = 7 total)
- [x] ≥1 question-format H2 (3: "Izin Apa Saja...?", "Apa Itu PLO...?", "Berapa Lama...?"); ≥1 honest/counter-conventional ("Apa yang Sering Bikin Perizinan Molor")
- [x] Keyword in first 100 words — "Gaslink" (inline hub link) in lead
- [x] Definition snippet near top — "Ringkas:" blockquote, 59 words
- [x] ≥8 LSI terms — 12+ (PLO, SLO, Permen ESDM 32/2021, UKL-UPL, SPPL, AMDAL, OSS, PJIT, Kepala Teknik, inspeksi teknis, niaga/angkutan gas bumi, komisioning, GTM, beyond pipeline)
- [x] 3 internal links (1 hub + 2 cousins) — gaslink (hub, lead) / gasku (H2#1) / perusahaan-cng-indonesia "penyedia CNG" (H2#5)
- [x] ≥1 external authoritative citation — 3 (migas.esdm.go.id, peraturan.go.id, ppid.menlhk.go.id)
- [x] FAQ 5–7 Q&As — 6
- [x] 2 image placeholders (up to 3) — 3, each with Bahasa Indonesia alt-text
- [x] ≥1 list + ≥1 table — bullets + numbered list + 1 comparison table
- [x] Word count 1,200–1,600 — 1,520

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer after each major H2 — H2#1:46, H2#2:46, H2#3:50, H2#4:44, H2#5:40; definition snippet 59
- [x] Each body paragraph makes one independently quotable, verifiable point
- [x] FAQ parseable for FAQPage schema; freshness via `publish_month: 2026-08` (dateModified = CMS concern, flagged)

### D. PGN Gagas framing discipline (product_matrix.md + style_guide §11)
- [x] Framed as gas-energy provider/pendamping — "menyalurkan/mendampingi", "izin tetap diterbitkan otoritas, penyedia hanya mendampingi"; NOT permit-issuer, NOT producer
- [x] ≤3 self-mentions — 2 ("PGN Gagas" in H2#4 aside + closing)
- [x] No unverifiable superlatives — none
- [x] Product names/specs match product_matrix / dossier — Gaslink (CNG industri/komersial via GTM), Gasku (transport), ISO 45001:2018
- [x] Closing uses a company_profile positioning line — "anak usaha PGN, bagian dari Subholding Gas Pertamina"
- [x] Soft website CTA is FINAL line, after Kesimpulan — "...kunjungi gagas.co.id." (consultative, no "beli sekarang")
- [x] Hub link is natural inline anchor in lead ("Gaslink") — no "BACA JUGA" callout

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: `2026-07-2-gaslink-05` (Keselamatan CNG di Lokasi, angle_hash sha1:116353488dfa); secondary `2026-07-gaslink-03` (Industri Cocok + onboarding)
- Subtopic overlap (Jaccard estimate): ~0.17 (shared only "Permen ESDM 32/2021" + "inspeksi"; SLO/PLO, UKL-UPL/OSS, tanggung jawab split, timeline, PTSP variance all new)
- Verdict: distinct angle confirmed — this is the perizinan/legalisasi layer, not operational safety (gaslink-05) or commercial onboarding (gaslink-03)

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran; `gaslink-02.id.quality-input.json` written
- [x] AI-detector score < 0.30 — **0.04** (verdict: pass); 1 low flag (paragraph-low-variance CV 0.339)
- [x] Paragraph burstiness CV ≥ 0.30 — 0.339 (clears editor bar; below script's 0.45 target — non-blocking given AI 0.04)
- [x] Plagiarism: 8 candidates web-checked. No non-Gagas verbatim hit ≥20 words. Only expected/allowed matches: official regulation title (cited legal title) + PGN Gagas self-description. Distinctive author sentences ("ketiga lapis ini bukan satu tumpukan dokumen...", "verifikasinya berkisar 3–5 hari kerja...", "istilah resminya adalah PLO...") returned no verbatim source. Plagiarism score: 0.05

## The shipping question
Would a senior migas/gas practitioner and a skeptical industrial buyer respect this on gagas.co.id tomorrow? Yes. It teaches the three permit layers cleanly, splits provider-vs-customer responsibility honestly, refuses to invent a PLO SLA, and keeps every terminology and timeline claim correctly hedged. Ship it.
