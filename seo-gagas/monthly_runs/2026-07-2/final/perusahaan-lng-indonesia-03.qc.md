---
brief_id: "perusahaan-lng-indonesia-03"
editor_run_date: "2026-07-08"
recommendation: "approve"
overall_score: 9
ai_score: 0.04
plagiarism_score: 0.02
---

# Editor QC Report — Keekonomian LNG vs Solar: Kapan Beralih dari Diesel Menguntungkan

## Recommendation
**approve**

Draft came in strong on substance and honest-hedging, and cleanly on the two facts that most easily go wrong in this brief: the 74,54% figure is correctly labeled a ferry-propulsion study (not power gen), the Rp 60 miliar Pesanggaran case is labeled a 2016 illustration, every price carries a date and a "volatil/ilustratif" hedge, the discredited BPP Rp 1.714,3/kWh figure is (correctly) absent, and Gagas is framed as a beyond-pipeline / LNG Hub downstream distributor — never a producer, FSRU operator, or "pionir/pemimpin pasar." Two issues needed fixing in-place: 10 em-dashes in prose (a strong AI tell that fired the heuristic) and a 166-char meta description, plus a length overrun (writer count 1662). All three fixed: em-dashes → 0, meta description → 158, word count → 1599 (writer-equivalent, table-inclusive) / ~1503 pure prose — inside the 1.200–1.600 band. AI-detector 0.04 (pass), plagiarism clear (all fact passages trace to cited authoritative sources, no non-Gagas verbatim). Curator-ready.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Em-dashes eliminated; varied rhythm; honest asides land. Paragraph CV 0.343 (fine, >0.30). |
| Factual & energi-gas / CNG accuracy | 10 | 8 spot-checked claims all trace to dossier + authoritative sources; hedges exact. |
| On-page SEO compliance | 9 | Meta desc trimmed to 158; title 46 (LNG first); slug 31; H2 mix complete. |
| GEO extractability (§2a) | 9 | 40–60-word answer after each body H2; one quotable point per paragraph; FAQ FAQPage-ready. |
| PGN Gagas framing discipline | 10 | Downstream/LNG Hub framing exact; 1 self-mention + CTA; no superlatives; no producer/FSRU claim. |
| Internal linking | 10 | 3 links: hub in lead + CNG + Gaslink cousins, natural inline anchors. |
| FAQ quality | 9 | 6 self-contained Q&As, all 40–80 words, each carries a hedge/number. |
| Originality (plagiarism + AI-detector) | 9 | AI 0.04; plagiarism ~0.02; distinctive passages web-checked, no verbatim hit. |

## What I fixed (changelog)
- **Removed all 10 prose em-dashes** (list lead-ins, table cell, bullet lead-ins) → converted to colons / semicolons / commas. Prose em-dash count now 0 (was firing +0.20 on the AI heuristic). Also cleaned the 3 em-dashes inside `{IMAGE_NN}` concepts (cosmetic; script exempts those).
- **Tightened meta description** 166 → 158 chars (dropped "BPP", "peralihan") to fit the 140–160 band.
- **Cut length from writer-count 1662 → 1599** (writer-equivalent, table-inclusive) via ~25 targeted trims of flabby words/clauses across lead, H2#1–#5, table cells, and two FAQ answers — preserving every number, date, hedge, link, H2, and the definition snippet. Pure-prose count ~1503.
- **Expanded then tightened the H2#4 ("Biaya Tersembunyi") intro** to a proper ~40-word extractable answer (was 35w), enumerating the five hidden-cost pos before the bullet list.
- **Updated frontmatter** `word_count` 1662 → 1599.
- Ran `quality-check.ps1` on the saved final; AI score 0.04 (pass), no re-run needed.

## What I flagged (open issues)
- ⚠️ **External citations are frontmatter-declared + inline text-attributed, not hyperlinked in body prose** — *recommendation*: this matches the established approved-article convention in this pipeline (verified vs `gaslink-02` final, which also has 0 in-body external hyperlinks). No change made; noted for consistency only. The CMS/design step can hyperlink the ESDM/CNBC attributions if desired.
- ⚠️ **Solar HSD B40 price (Rp 26.000–28.400/liter)** sources to niche distributors (solarindustri.com/bctn.co.id), not Pertamina/BPH Migas — *recommendation*: already labeled "indikatif / bervariasi wilayah / bergerak dua-mingguan" in-text; adequate for an illustrative range. No fix needed.
- ⚠️ **Paragraph burstiness CV 0.343** — above the 0.30 strong-tell threshold but below the 0.45 ideal — *recommendation*: acceptable; the piece already mixes 1–6-sentence paragraphs and the sentence-level CV is 0.765 (very human). No action.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan / Tidak dapat dipungkiri" openers
- [x] No "Selain itu" opening ≥2 consecutive paragraphs (0 occurrences)
- [x] No "Penting untuk dicatat / dipahami bahwa" (0)
- [x] "Dengan demikian" not overused (0)
- [x] Em-dash count ≤2 — **fixed: 0 in prose** (was 10)
- [x] Varied paragraph lengths (1–6 sentences; sentence CV 0.765)
- [x] Not every H2 → 3-bullet list (mix of prose, numbered list, bullets, table)
- [x] No generic claims without numbers (numbers sourced + dated throughout)
- [x] No stacked hype adjectives
- [x] No service-dump paragraph (1 Gagas self-mention + CTA)

### B. Factual & energi-gas / CNG spot-check
| Claim | Source check | Verdict |
|---|---|---|
| LNG non-HGBT USD 13/MMBTU (turun dari USD 20–23), 29 Jun 2026 | dossier ✓ + CNBC/Kontan/Detik 2026 (WebSearch) | pass |
| HGBT USD 6,5–7/MMBTU; gas pipa non-HGBT ~USD 9,6 JaBar (Permen 76.K, Feb 2025) | dossier ✓ + ESDM/WebSearch three-tier confirmed | pass |
| PLTDG Pesanggaran hemat "tidak kurang dari Rp 60 miliar/tahun" (ESDM, 2016) | dossier ✓ + esdm.go.id + PLN (WebSearch); labeled old case | pass |
| 74,54% = studi **kapal feri** (JIEMAR 2022), NOT power gen | dossier ✓ (flag honored) + JIEMAR (WebSearch); label exact in text | pass |
| Boil-off 0,1–0,15%/hari = standar maritim IMO, tangki darat berbeda | dossier ✓; labeled indicative/maritime not stationary | pass |
| ~dua pertiga produksi gas untuk domestik (ESDM) | dossier ✓ (68–69%, framed as "sekitar dua pertiga") | pass |
| Gagas = LNG Hub / beyond-pipeline downstream distributor, not producer/FSRU | product_matrix ✓ + dossier ✓; framing exact | pass |
| BPP Rp 1.714,3/kWh (dossier: unverifiable) | correctly ABSENT from draft | pass |

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: 46 / "LNG" at pos 0
- [x] Meta description 140–160 — **fixed: 158** (was 166)
- [x] Slug ≤60, kebab-case, keyword — actual: `keekonomian-lng-vs-solar-diesel` (31)
- [x] H1 contains keyword (LNG) — 65 chars
- [x] H2 count 4–5 body — actual: 5 body H2 (+ FAQ + Kesimpulan = 7 total)
- [x] ≥1 question-format H2 ("Berapa Lama Balik Modal…") ; ≥1 honest/counter H2 ("Kapan Solar/Diesel Justru Masih Lebih Ekonomis")
- [x] Keyword in first 100 words ("keekonomian LNG vs solar" in lead)
- [x] Definition snippet near top (blockquote, ~55 words)
- [x] ≥8 LSI terms — counted 12+ (BPP, HSD, dual-fuel, break-even, MMBTU, boil-off, vaporizer, regasifikasi, capex, TCO, last-mile, HGBT)
- [x] 3 internal links (1 hub + 2 cousins) — LNG hub (lead), CNG, Gaslink
- [~] ≥1 external authoritative citation — 2 declared in frontmatter (ESDM, CNBC) + inline text attributions; not in-body hyperlinks (matches pipeline convention — flagged)
- [x] FAQ 5–7 Q&As — actual: 6
- [x] 2 image placeholders — actual: 3 ({IMAGE_01/02/03})
- [x] ≥1 list + ≥1 table — 1 numbered list + 1 bullet list + 1 table
- [x] Word count 1,200–1,600 — actual: 1599 (writer-equivalent) / ~1503 pure prose

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer after each major H2 (H2#1 47w, #2 50w, #3 49w, #4 ~42w, #5 51w)
- [x] Each body paragraph makes one independently quotable, verifiable point
- [x] FAQ parseable for FAQPage schema; freshness noted (all prices date-stamped, "per akhir Juni 2026")

### D. PGN Gagas framing discipline (product_matrix.md + style_guide §11)
- [x] Framed as gas-energy provider/downstream distributor ("penopang bisnis hilir PGN", "beyond-pipeline", "pengoperasian LNG Hub", "menghitung logistik dan pemakaian, bukan menetapkan harga komoditas LNG") — NOT producer/FSRU
- [x] ≤3 self-mentions — actual: 1 ("PGN Gagas" in conclusion) + soft website CTA + 1 unnamed "penyedia distribusi hilir" mid-body aside
- [x] No unverifiable superlatives (no "terbaik/nomor satu/pionir/pemimpin pasar")
- [x] Energi-gas / LNG product names + specs match product_matrix.md / dossier (LNG Hub, Gaslink, beyond-pipeline)
- [x] Closing uses a company_profile positioning line (anak usaha/hilir PGN, Subholding Gas Pertamina ecosystem)
- [x] Soft website CTA present as FINAL line ("…kunjungi gagas.co.id"), consultative not "beli sekarang"
- [x] Hub link is a natural inline anchor in the lead, not a "BACA JUGA" callout

### E. Anti-cannibalization spot check
- Closest prior articles (keyword_slug=perusahaan-lng-indonesia): `-03` (LNG vs CNG, axis=volume/jarak/ruang), `-05` (memilih penyedia), `-02` (LNG Hub concept)
- Subtopic overlap (Jaccard estimate): ~0.15–0.18 — only shared concept is generic "kapan beralih"; new axis = economics (LNG vs diesel/solar, BPP, break-even, payback, hidden costs); part-1 explicitly excluded cost
- Verdict: **distinct angle confirmed** (angle_hash sha1:4dcc7a93e820 unique)

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran clean; `perusahaan-lng-indonesia-03.id.quality-input.json` written
- [x] AI-detector score < 0.30 — actual: **0.04** (pass; 1 low flag: paragraph CV 0.343)
- [x] Paragraph burstiness CV ≥ 0.30 — actual: 0.343 (sentence CV 0.765; vocab share 0.311)
- [x] Plagiarism: 8 candidates extracted; 4 most-distinctive web-checked (boil-off IMO, Pesanggaran Rp 60 miliar, 74,54% ferry, USD 13/MMBTU + solar). No non-Gagas verbatim ≥20 words; all fact-bearing passages corroborate cited authoritative sources (ESDM/PLN/CNBC/JIEMAR) with original phrasing — **plagiarism score: 0.02**
