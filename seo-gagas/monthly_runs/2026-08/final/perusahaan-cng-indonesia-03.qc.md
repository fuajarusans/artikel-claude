---
brief_id: "perusahaan-cng-indonesia-03"
editor_run_date: "2026-08-11"
recommendation: "approve"
overall_score: 9
ai_score: 0.04
plagiarism_score: 0.03
---

# Editor QC Report — Saat Pasokan CNG Bermasalah: Eskalasi, SLA, & Kompensasi

## Recommendation
**approve**

Despite the writer dying pre-polish, the draft arrived structurally complete and — critically — with every high-risk legal hedge intact. My verification focused on the enforced hedges: force majeure is correctly grounded in KUHPerdata Pasal 1244–1245, wanprestasi in Pasal 1243, no SLA/kompensasi percentage or nominal is invented anywhere (every instance defers to "bergantung kontrak"), no public Gagas SLA number is claimed, telemetry is framed as Pasal 5 UU ITE evidence *with* the authentication/integrity caveat, the "7 hari kerja" notification is labeled a drafting example (not a mandate), and the UUPK-for-B2B point is properly hedged ("cenderung dianggap konsumen antara"). Facts trace cleanly to the dossier and company profile; PGN Gagas framing is provider/distributor with 2 self-mentions + the soft CTA. Originality is clean (AI-detector 0.04, no non-Gagas verbatim ≥20 words). I made two light in-place edits (added a 6th FAQ on force majeure to mirror PAA; smoothed one nested clause) and added a `date_modified` freshness field. Curator-ready.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Concrete pain lead, honest hedging, varied rhythm, em-dash count 0, no filler openers |
| Factual & energi-gas / CNG accuracy | 9 | KUHPerdata 1243/1244–1245/1249/1250, UU ITE Ps.5, UU 30/1999, Gagas 24-jam+smart-meter+ISO 9001 all dossier/profile-sourced |
| On-page SEO compliance | 9 | Meta title 51, meta desc 149, slug 48; 5 body H2 + FAQ + Kesimpulan; 3 internal + 3 external links |
| GEO extractability (§2a) | 9 | 40–60-word answer after every H2; definition snippet; one quotable point/paragraph; FAQPage-ready; `date_modified` added |
| PGN Gagas framing discipline | 9 | Provider/distributor framing, 2 self-mentions + CTA, no superlatives, positioning line in close |
| Internal linking | 9 | Hub inline in lead + 2 cousins (Gaslink, LNG), descriptive anchors, no BACA JUGA |
| FAQ quality | 9 | 6 Q&As, each 40–80 words, PAA-mirrored, self-contained |
| Originality (plagiarism + AI-detector) | 10 | AI 0.04 (pass); no verbatim web hits on distinctive passages |

## What I fixed (changelog)
- Added a 6th FAQ ("Apa saja yang termasuk force majeure dalam kontrak pasokan gas?") to mirror the brief's PAA set and strengthen FAQPage/GEO coverage (draft had 5; brief specified 6). Answer is original prose, force-majeure hedge intact.
- Smoothed an awkward nested relative clause in the H2 #2 Gaslink aside ("Pada layanan Gaslink … dari PGN Gagas, yang menyatakan …") → "PGN Gagas, misalnya, menyatakan melayani pelanggan CNG 24 jam lewat [layanan Gaslink untuk industri] (ANTARA, 2019); …" — clearer attribution, cousin anchor + citation preserved, self-mention count unchanged.
- Added `date_modified: "2026-08-11"` to the meta block (GEO §2a freshness signal).
- Updated frontmatter `word_count` to 1481 (post-FAQ addition; within 1,200–1,600 band).

## What I flagged (open issues)
- ⚠️ H1 carries "CNG" but not the exact-match "Perusahaan CNG Indonesia" — *recommendation*: accept as-is. Forcing the full keyword into this incident-handling headline would read awkwardly; exact match lives in the meta title, the first 100 words, and the hub anchor. No action needed.
- ⚠️ Putusan MA No. 3655 K/Pdt/1985 (dossier, medium-confidence, secondary source) was NOT used in the article — good call by the writer; no fix needed, noted so it isn't reintroduced without direct verification.
- ⚠️ `external_citations` include pengadaan.or.id and ANTARA (2019); hukumonline direct-fetch was 403 during research. Links are valid and appropriately attributed inline; CMS should confirm they resolve at publish.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan / Tidak dapat dipungkiri" openers — lead opens on concrete pain
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — none present
- [x] No "Penting untuk dicatat / dipahami bahwa" — none
- [x] "Dengan demikian" not overused — 0 uses
- [x] Em-dash count ≤2 — actual 0 (the 1244–1245 / 1200–1600 are en-dashes)
- [x] Varied paragraph lengths — 1-sentence to 5-sentence mix; sentence-burstiness CV 0.694
- [x] Not every H2 → 3-bullet list — mix of prose (H2#1,#3), numbered list (H2#2), table (H2#4), bullets (H2#5)
- [x] No generic claims without numbers — pasal numbers, 6%, 7 hari, 24 jam, UU 30/1999 throughout
- [x] No stacked hype adjectives — none
- [x] No service-dump paragraph — single anchor in close
- Note: quality-check.ps1 flagged paragraph CV 0.334 as *low* severity only (above the 0.30 AI-tell threshold; sentence-level variance is healthy at 0.694). Not actionable.

### B. Factual & energi-gas / CNG spot-check
| Claim | Source check | Verdict |
|---|---|---|
| Force majeure = Pasal 1244–1245 KUHPerdata (membebaskan penyedia) | dossier ✓ (Core facts, high confidence) | pass |
| Wanprestasi/keterlambatan = Pasal 1243 KUHPerdata | dossier ✓ (high) | pass |
| Bunga moratoir 6%/tahun = Pasal 1250 KUHPerdata, framed as general civil-law default (not a gas tariff) | dossier ✓ (high for text); hedge correct | pass |
| Telemetri = alat bukti sah lewat Pasal 5 UU ITE, dengan hedge autentikasi/integritas | dossier ✓ (high for Ps.5; hedge required & present) | pass |
| PGN Gagas layanan 24 jam via Gaslink (ANTARA, 2019) + smart-meter + ISO 9001:2015 (2025) | dossier ✓ + company_profile.md ✓ | pass |
| Arbitrase butuh klausul tertulis (UU No. 30/1999); default = pengadilan negeri | dossier ✓ (high) | pass |
- No invented SLA/compensation figures; no fabricated gas specs or product names. WebSearch confirmed the legal facts are mainstream (UU 30/1999, Pasal 5 UU ITE) — no correction needed.

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — 51 chars; "Perusahaan CNG Indonesia" at pos 0
- [x] Meta description 140–160 — 149 chars
- [x] Slug ≤60, kebab-case, keyword — `perusahaan-cng-indonesia-eskalasi-sla-kompensasi` (48)
- [~] H1 contains keyword — "CNG" present; exact match in first 100 words + hub anchor (flagged, acceptable)
- [x] H2 count 4–5 — 5 body H2s
- [x] ≥1 question-format H2 (H2#3) ; ≥1 honest/counter-conventional H2 (H2#5)
- [x] Keyword in first 100 words — "perusahaan CNG Indonesia" in lead
- [x] Definition snippet near top (40–60 words) — ~55-word blockquote
- [x] ≥8 LSI terms — 14+ (SLA, response/restore time, force majeure, wanprestasi, KUHPerdata, kredit layanan, telemetri, arbitrase, BANI, resolusi sengketa, klausul kontrak, hardship, GTM, UU ITE)
- [x] 3 internal links (1 hub + 2 cousins) — perusahaan-cng-indonesia (hub, lead), gaslink, perusahaan-lng-indonesia
- [x] ≥1 external authoritative citation — 3 (bpk.go.id UU 30/1999, pengadaan.or.id, ANTARA)
- [x] FAQ 5–7 Q&As — 6 (after edit)
- [x] 2 image placeholders (up to 3) — 3 ({IMAGE_01/02/03}) with alt-text
- [x] ≥1 list + ≥1 table — numbered list + bullet list + comparison table
- [x] Word count 1,200–1,600 — ~1,481 (frontmatter) / 1,529 (scanner) — in band

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — verified for all 5 H2s (52/52/47/52/48 words)
- [x] Each body paragraph makes one independently quotable, verifiable point
- [x] FAQ parseable for FAQPage schema; `date_modified: 2026-08-11` added to meta block

### D. PGN Gagas framing discipline (product_matrix.md + style_guide §11)
- [x] Framed as gas-energy provider/distributor ("menyalurkan CNG beyond-pipeline"), NOT producer
- [x] ≤3 self-mentions — 2× "PGN Gagas" (H2#2 aside + Kesimpulan) + soft gagas.co.id CTA
- [x] No unverifiable superlatives — none
- [x] Product names + specs match — Gaslink, 24-jam, smart meter, ISO 9001:2015 (2025) all profile/dossier-verified
- [x] Closing uses a company_profile.md positioning line (anak usaha PGN / Subholding Gas Pertamina)
- [x] Soft website CTA is the FINAL line, after Kesimpulan — "…kunjungi gagas.co.id." (consultative)
- [x] Hub link is a natural inline anchor in the lead — "penyedia CNG di Indonesia" (no BACA JUGA)

### E. Anti-cannibalization spot check
- Closest prior articles for this keyword: `keandalan-penyedia-cng-kelangsungan-bisnis` (BCP/prevention), `keamanan-keandalan-pasokan-cng` (standards), `model-harga-kontrak-cng-minimum-offtake`, `layanan-penyedia-cng` (scope)
- Subtopic overlap (Jaccard estimate): ~0.3 (shared terms: SLA/keandalan/kontrak only)
- Verdict: distinct angle confirmed — this is the only cluster article on *post-incident* escalation + force majeure/wanprestasi legal framing + dispute resolution from the buyer's side. Time axis (pasca-insiden) and actor (pembeli yang bertindak) are new.

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran; `perusahaan-cng-indonesia-03.id.quality-input.json` written
- [x] AI-detector score < 0.30 — actual 0.04 (verdict: pass); only 1 low-severity flag (paragraph CV 0.334)
- [x] Paragraph burstiness CV ≥ 0.30 — actual 0.334 (sentence CV 0.694; top-30 vocab share 0.287)
- [x] Plagiarism: 5 distinctive passages web-checked (lead GTM incident, SLA definition, wanprestasi/force-majeure split, escalation email step, BANI arbitrase clause) — no non-Gagas verbatim hit ≥20 words. Only conceptual/topical overlap (legal journals on force majeure; UU 30/1999) and Gagas-owned cluster pages (gagas.co.id + a syndicated sibling on agendasonly.com — both ignored per rule). Plagiarism score: 0.03.
