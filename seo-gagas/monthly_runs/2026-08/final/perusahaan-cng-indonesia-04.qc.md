---
brief_id: "perusahaan-cng-indonesia-04"
editor_run_date: "2026-08-11"
recommendation: "approve"
overall_score: 9
ai_score: 0.04
plagiarism_score: 0.04
---

# Editor QC Report — Kelola Pasokan CNG Banyak Lokasi: Strategi Multi-Vendor Grup Usaha

## Recommendation
**approve**

The draft arrived unusually clean for a writer who died pre-polish. My priority was verifying the six enforced hedges — and all six held without correction: kontrak payung is framed explicitly as a government-procurement (LKPP/Perpres) instrument that private groups "meminjam konsepnya" (analogy, not binding); coverage is never claimed as "banyak provinsi" (the phrase appears only inside a FAQ *question*, answered with a hedge); ISO 50001 is not mentioned or implied for Gagas; the Deloitte 74% stat is explicitly attributed as a global cross-industry survey; the single-vs-multi-vendor threshold is kept qualitative ("tak ada rumus di atas sekian kilometer"); and the Gaslink IoT telemetry anchor is used as a verifiable first-party fact. Anti-AI scan is clean (0 prose em-dashes, no filler openers, varied rhythm), the AI-detector heuristic returns 0.04, and no distinctive passage has a non-Gagas verbatim web match. The only substantive edit needed was a light trim to bring the scanner's word count from 1601 to 1599 (≤1600). This is curator-ready.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Varied paragraph/sentence rhythm; honest hedges ("Satu catatan jujur…", "Pegangannya kualitatif"); 0 prose em-dashes; no AI-tell openers |
| Factual & energi-gas / CNG accuracy | 9 | All 5+ spot-checked claims verified vs dossier + product_matrix + WebSearch; every enforced hedge held |
| On-page SEO compliance | 9 | Meta title 53c, desc 153c, slug 41c; keyword in first 100 words + last line; 5 body H2s |
| GEO extractability (§2a) | 9 | 40–60-word direct answer after each H2 (55/58/52/54/53); one quotable point per paragraph; FAQ FAQPage-parseable |
| PGN Gagas framing discipline | 9 | Provider framing ("menyalurkan"); 3 mention touchpoints; no superlatives; positioning line + soft CTA |
| Internal linking | 10 | 3 inline natural anchors (hub in lead + Gaslink + Gasku); no BACA JUGA callouts |
| FAQ quality | 8 | 5 well-formed 40–80w Q&As (meets ≥5); brief listed 6 — the SLA FAQ is omitted but covered in body §3 |
| Originality (plagiarism + AI-detector) | 9 | AI 0.04; burstiness CV 0.373 (≥0.30); no non-Gagas verbatim ≥20 words |

## What I fixed (changelog)
- Copied draft → `final/perusahaan-cng-indonesia-04.id.md`.
- **Word count trim to satisfy ≤1600**: scanner reported 1601 (its tokenizer counts standalone table-pipe `|` tokens as words). Removed the flabby idiom "dengan mata terbuka" in §5 and tightened the §1 closing transition ("Karena skalanya jadi mungkin, keputusan strukturnya makin menentukan" → "Karena skala itu bisa dicapai, cara menstrukturkannya jadi penentu"). Scanner now 1599.
- **Frontmatter `word_count` 1558 → 1556** (reflects the trims; genuine reader-word count ~1556–1574, comfortably within the 1,200–1,600 band).
- Ran `tools/quality-check.ps1` on the saved final; `perusahaan-cng-indonesia-04.id.quality-input.json` written. AI-detector 0.04 = pass.
- No hedge corrections were required — the writer got all six critical hedges right before dying. Verified, not rewritten.

## What I flagged (open issues)
- ⚠️ **FAQ = 5, brief skeleton listed 6** (the missing item is "Bagaimana menyeragamkan SLA di banyak lokasi cabang?"). *Recommendation*: not a blocker — 5 meets the ≥5 floor and SLA standardization is already taught in §3 (body prose + numbered step 3). Adding the 6th would require a compensating trim to stay ≤1600 by the scanner (currently at the top of band); leave to curator discretion.
- ⚠️ **External citations are inline text attributions**, not outbound hyperlinks in the body ("(JDIH LKPP, 2025)", "(Kementerian ESDM)"); the URLs live in frontmatter `external_citations`. This matches cluster convention (CMS wires frontmatter URLs). *Recommendation*: if the CMS does not auto-link, convert one attribution to an inline outbound `<a>` to guarantee ≥1 authoritative outbound link.
- ⚠️ **No explicit `dateModified`** in the meta block (only `publish_month: 2026-08`). *Recommendation*: CMS should set `dateModified` for GEO freshness; not a content-side blocker.
- ℹ️ Paragraph burstiness CV = 0.373 (low flag, passes the ≥0.30 floor). Driven by GEO's mandated 40–60-word answer paragraphs after each H2 — an inherent, acceptable tension, not an AI tell.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan / Tidak dapat dipungkiri" openers
- [x] No "Selain itu" opening ≥2 consecutive paragraphs (none present)
- [x] No "Penting untuk dicatat / dipahami bahwa"
- [x] "Dengan demikian" not overused (0 uses)
- [x] Em-dash count ≤2 — actual: 0 in prose (1 only inside `{IMAGE_01}` caption, which the scanner strips)
- [x] Varied paragraph lengths (1-sentence lead-ins mixed with 4–5-sentence blocks)
- [x] Not every H2 → 3-bullet list (mix of prose, bullets §1, numbered list §3, table §2)
- [x] No generic claims without numbers (74%, ≥6.000 TOE, Perpres 46/2025, 1–6 steps)
- [x] No stacked hype adjectives (canggih/powerful/terdepan)
- [x] No service-dump paragraph

### B. Factual & energi-gas / CNG spot-check
| Claim | Source check | Verdict |
|---|---|---|
| "74% pimpinan procurement mengandalkan pencarian sumber pasokan alternatif" (Deloitte 2025, global) | dossier ✓ + WebSearch (no verbatim; attributed explicitly as global cross-industry) | pass |
| Kontrak payung = instrumen pengadaan pemerintah (LKPP); swasta pinjam konsep, tak terikat | dossier ✓ + WebSearch (UKPBJ/LKPP definition) — analogy framing held | pass |
| LKPP teken kontrak payung konsolidasi 2025 (sosialisasi Perpres 46/2025) | WebSearch ✓ (JDIH LKPP + Sultra PDH/ATK, 26/6/2025) | pass |
| PP 33/2023: pengguna energi ≥6.000 TOE/tahun wajib manajemen energi terstruktur | dossier ✓ + WebSearch (ESDM/BPK) | pass |
| PGN Gagas "Sistem Pemantauan Telemetri" IoT (volume+tekanan real-time, auto-replenishment) | dossier ✓ + gagas.co.id first-party | pass |
| Coverage NOT overstated as "banyak provinsi"; ISO 50001 NOT claimed | verified vs company_profile.md (only 9001/45001/37001; DKI/Banten/Batam) | pass |

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: 53 chars / keyword "Perusahaan CNG Indonesia" at pos 0
- [x] Meta description 140–160 — actual: 153
- [x] Slug ≤60, kebab-case, keyword token — actual: `manajemen-pasokan-cng-multi-lokasi-vendor` (41; contains "cng"; angle-led, consistent with cluster)
- [x] H1 contains keyword token — "Kelola Pasokan CNG Banyak Lokasi…" (CNG); full keyword in first 100 words + meta
- [x] H2 count 4–5 — actual: 5 body H2s
- [x] ≥1 question-format H2 ("Bagaimana Memantau Konsumsi Semua Lokasi dari Satu Dasbor?"); ≥1 honest/counter H2 ("Kapan Multi-Vendor Justru Lebih Aman…")
- [x] Keyword in first 100 words ("Bila Anda menimbang perusahaan CNG Indonesia…")
- [x] Definition snippet near top (~48 words, blockquote "Ringkasnya")
- [x] ≥8 LSI terms — counted: 12+ (kontrak payung, framework agreement, single vs multi vendor, konsolidasi tagihan, telemetri IoT, SLA, GTM, PRS, call-off order, procurement terpusat, dasbor, single point of failure)
- [x] 3 internal links (1 hub + 2 cousins) — destinations: perusahaan-cng-indonesia (hub, lead), gaslink, gasku
- [x] ≥1 external authoritative citation — actual: 3 attributed (Deloitte, JDIH LKPP, Kementerian ESDM) — see flag re: body hyperlinks
- [~] FAQ 5–7 Q&As — actual: 5 (meets floor; brief listed 6 — see flag)
- [x] Image placeholders — actual: 3 ({IMAGE_01/02/03}, each with alt-text)
- [x] ≥1 list + ≥1 table — bullets §1, numbered list §3, comparison table §2
- [x] Word count 1,200–1,600 — actual: ~1,556 reader / 1,599 scanner (within band)

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — §1:55, §2:58, §3:52, §4:54, §5:53
- [x] Each body paragraph makes one independently quotable, verifiable point
- [x] FAQ parseable for FAQPage schema; freshness present as `publish_month` (explicit `dateModified` flagged for CMS)

### D. PGN Gagas framing discipline (product_matrix.md + style_guide §11)
- [x] Framed as gas-energy provider/distributor ("menyalurkan gas bumi… lewat solusi CNG beyond-pipeline") — NOT producer
- [x] ≤3 self-mentions — actual: 3 touchpoints (telemetry aside §4 + positioning line in Kesimpulan + gagas.co.id CTA); Gaslink/Gasku are the mandatory cousin links
- [x] No unverifiable superlatives ("terbaik/nomor satu/terbesar") — none
- [x] Energi-gas / CNG product names + specs match dossier (GTM, Sistem Pemantauan Telemetri, Gaslink, Gasku)
- [x] Closing uses a company_profile.md positioning line ("anak usaha PGN… bagian dari Subholding Gas Pertamina")
- [x] Soft website CTA present as the FINAL line, after Kesimpulan ("…kunjungi gagas.co.id.") — consultative, not "beli sekarang"
- [x] Hub link present as a natural inline anchor in the lead ("[penyedia CNG di Indonesia]") — no BACA JUGA

### E. Anti-cannibalization spot check
- Closest prior articles for this keyword: `layanan-penyedia-cng-pasokan-distribusi-gtm` (perusahaan-cng-indonesia-02, 2026-07, single-customer telemetry/scope) and `cara-memilih-perusahaan-cng-indonesia` (…-01, 7 criteria)
- Subtopic overlap (Jaccard estimate): ~0.25 (intersection only at "telemetri / provider criteria")
- Verdict: **distinct angle confirmed** — this piece operates at the portfolio level (multi-site/multi-vendor, kontrak payung, konsolidasi, centralized dashboard); prior cluster assumes single-buyer/single-location

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran; `perusahaan-cng-indonesia-04.id.quality-input.json` written
- [x] AI-detector score < 0.30 — actual: 0.04 (pass; only a low-severity paragraph-low-variance flag)
- [x] Paragraph burstiness CV ≥ 0.30 — actual: 0.373 (sentence CV 0.876)
- [x] Plagiarism: 5 distinctive passages web-checked (Deloitte 74%, LKPP/Perpres 46/2025, telemetry anchor, PP 33/2023, definition-list). No non-Gagas verbatim hit ≥20 words. Only near-echo is gagas.co.id's own first-party telemetry description (ignored per rules). Plagiarism score: 0.04
