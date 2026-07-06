---
brief_id: "jurnal-umum-c01"
editor_run_date: "2026-06-17"
recommendation: "approve"
overall_score: 9
---

# Editor QC Report — Apa Itu Jurnal Umum? Pengertian, Fungsi, dan Cara Membuatnya

## Recommendation
**approve**

> **Reconciliation (2026-06-17, orchestrator):** The only blocker was length vs the 1,500–1,800 band. Per the user's conditional-article policy (accept the denser "magnet" length, ~≤2,100), the ~2,080-word length is ACCEPTED → recommendation upgraded **revise → approve**. Every other dimension was approve-grade (GEO pass, Soltius framing correct, dossier do-NOT-assert flags honored, dedup distinct). The validator's single low flag (paragraph-CV 0.436 vs 0.45 target) is minor and non-blocking. Original `revise` analysis preserved below.

This is a strong, genuinely useful, and editorially clean article — anti-AI scan passes outright, every critical dossier flag is honored, Soltius framing is exemplary, GEO extractability is met, and all on-page elements (meta, links, FAQ, tables, image placeholders) are present and correct. I fixed everything fixable in place. The single blocking issue is **length**: the readable body is ~2,080 words (full body incl. table cells; ~1,890 narrative-only), which exceeds the mandated **1,500–1,800** ceiling. I trimmed ~185 words of genuine redundancy (cut the optional roadmap line, dropped two FAQ entries that fully duplicated body H2s, tightened several tail sentences), but bringing it inside the band requires removing a further ~280 words of body — which means cutting protected/valuable content (e.g., shortening the worked example to ~5 transactions, dropping the perusahaan-dagang clause, or thinning the honest "kapan manual tidak memadai" pivot). That is a writer-side structural decision, not an editor polish, so I am returning it as `revise` with a precise trim list below. Note the declared `word_count: 1687` in the incoming draft was an undercount; I corrected the frontmatter to the accurate figure. If the project chooses to treat the documented 2026-06 precedent (batch ran 1,650–2,250) as governing over the strict 1,500–1,800 instruction, this is otherwise an `approve` — everything else clears the bar.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | No banned openers, no "Selain itu"/"Dengan demikian"/"Sebagai kesimpulan", 0 body em-dashes, varied paragraph + sentence lengths, honest hedging present. Reads like a practitioner. |
| Factual & SAP-spec accuracy | 10 | All 5 spot-checked claims pass vs dossier. ACDOCA framed as single source of truth WITHOUT the "BSEG dihapus total" error (Flag #1 honored). No fabricated BPS/adoption %. Worked example balances. |
| On-page SEO compliance | 9 | Meta title 46 chars (kw first), meta desc 149, slug 50, H1 has keyword, 5 H2s, 3 internal + 2 external links, FAQ 5, list + 3 tables. Only miss: word count over ceiling. |
| GEO extractability (§2a) | 9 | 40–60-word answer after each major H2, one quotable point per paragraph, definition snippet 57 words, FAQPage-parseable, dateModified added. |
| Soltius framing discipline | 10 | 2 mentions (mid-aside + closing), implementer framing ("mendampingi"/"kerap menjumpai"), no superlatives, positioning line + soft website CTA as final line. |
| Internal linking | 10 | 3 natural inline anchors (siklus akuntansi in lead, SAP FICO + laporan keuangan mid-body), no "BACA JUGA". |
| FAQ quality | 8 | Now 5 Q&As (trimmed from 7 to cut body duplication), each 40–60 words, PAA-aligned, self-contained. |
| Image-brief completeness | 9 | images.json parses; 3 entries match 3 placeholders; all fields in Bahasa Indonesia; SAP-screenshot caveat surfaced (no fabricated SAP UI). |

## What I fixed (changelog)
- **Corrected inaccurate frontmatter** `word_count: 1687` → `2080` (the declared figure undercounted the actual readable body by ~400 words).
- **Added `dateModified: "2026-06-17"`** to the meta block (GEO §2a freshness requirement was missing).
- **Cut the redundant roadmap line** ("Melalui panduan ini, kita akan menyusurinya...") — the lead already previews the article; removed ~23 words.
- **Dropped 2 duplicative FAQ entries** ("Apa saja fungsi jurnal umum?" and "Bagaimana cara menentukan debit dan kredit?") — both restated their body H2s near-verbatim. FAQ now 5 Q&As (within 5–8) with less internal duplication; removed ~110 words.
- **Tightened ~6 flabby/redundant sentences** across §Fungsi, §Debit-Kredit, §Contoh, §vs-Khusus, and the dagang example (folded into a single clause, preserving the "perusahaan dagang" keyword) — removed ~50 words.
- **Nudged two GEO answers into the 40–60-word band**: §Apa Itu (was 62 → ~56), §Contoh (was 38 → ~44).
- **Kept body em-dash count at 0**: when a trim risked introducing an em-dash, I substituted a comma/colon (en-dash "Rendah–sedang" inside a table is a range separator, not an em-dash — does not count).
- Verified all 3 internal-link anchors render inline and the worked-example column totals (111.250.000 = 111.250.000) are arithmetically correct.

## What I flagged (open issues)
- ⚠️ **Word count over ceiling (BLOCKING)** — final readable body ≈ 2,080 words (full, incl. table cells) / ≈ 1,890 (narrative-only), vs the mandated 1,500–1,800. After my ~185-word trim it is still ~80–280 over depending on counting convention. *Recommendation*: writer trims a further ~280 words. Cleanest targets that preserve all mandatory elements: (a) shorten the worked example from 7 to 5 transactions (saves ~70 words of table + keeps balance — re-verify totals after), (b) cut the §Apa-Itu third paragraph's IAI/SAK sentence OR the §Kapan-manual second paragraph by one sentence (~30–40 each), (c) trim §Cara-Membuat's "6 kolom" closing paragraph (~45, now partly duplicated by FAQ "Apa saja kolom"). Do NOT cut: the saldo-normal table, the comparison table, the honest pivot section, the SAP/Universal-Journal teaching, the 5 FAQ, or any internal/external link.
- ⚠️ **Meta description at 149 chars** — inside the 140–160 band but just below the 150–160 GEO sweet spot. *Recommendation*: optional; could pad to ~152 (e.g., "...contoh tabel jurnal lengkap yang sudah balance."). Non-blocking.
- ℹ️ **Internal-link liveness** — the three soltius.co.id accounting-blog URLs were strategist-confirmed live per 2026-06-17 but are outside the 6-cluster product_matrix map; the validator/curator should re-confirm 200/OK before commit (standard for conditional/ad-hoc topics).

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — grep: 0 matches
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — grep: 0 matches anywhere
- [x] No "Penting untuk dicatat / dipahami bahwa" — grep: 0 matches
- [x] "Dengan demikian" not overused — grep: 0 matches
- [x] Em-dash count ≤2 — **0 em-dashes (—) in body prose** (the only — chars are inside {IMAGE_NN} design-brief instructions, not published prose; "Rendah–sedang" is an en-dash range separator)
- [x] Varied paragraph lengths — mix of 1-sentence (e.g., "Berikut rinciannya:", "Logikanya soal efisiensi.") and 4–5-sentence paragraphs
- [x] Not every H2 → 3-bullet list — only §Fungsi uses bullets; others lead with prose + tables + numbered steps
- [x] No generic claims without numbers — concrete figures throughout (5 fungsi, 4 jenis jurnal khusus, 5 langkah, Rp values, 1 Jan 2015, ACDOCA)
- [x] No stacked hype adjectives (canggih/powerful/seamless/terdepan) — none present
- [x] No service-dump paragraph — single anchor in closing; Soltius taught vendor-neutrally

### B. Factual & SAP-spec spot-check
| Claim | Source check | Verdict |
|---|---|---|
| ACDOCA = single source of truth in S/4HANA; **does not claim "BSEG dihapus total"** | dossier Core fact B + Flag #1; draft uses "rekonsiliasi manual antar-buku ... tidak lagi diperlukan" | **pass** (Flag #1 honored exactly) |
| Universal Journal unifies FI + CO so separate reconciliation no longer needed | dossier Core fact B (SAP Community + SAP PRESS) | pass |
| Saldo normal: Aset/Beban=Debit; Liabilitas/Ekuitas/Pendapatan=Kredit | dossier Tabel 1 (STIE YKPN); double-entry standard | pass |
| Worked example balances: Debit = Kredit = Rp 111.250.000 | recomputed column sums by hand: 50+12+3,5+22+8+15+0,75 jt = 111,25 jt both sides | pass (balances) |
| SAK Indonesia IFRS-based, convergent since 1 Jan 2015 | dossier Core fact (IAI) | pass |
| Manual→ERP threshold kept qualitative (no fabricated transaction-count number) | dossier Flag #3 + Edge cases | pass — draft explicitly says "Tidak ada angka transaksi resmi yang menjadi patokan" |
| No fabricated BPS/adoption % | grep for % / BPS / persen | pass — none present |

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: **46 chars** / keyword "Jurnal Umum" at pos 1
- [x] Meta description 140–160 — actual: **149** (inside band; slightly below 150–160 sweet spot — see flag)
- [x] Slug ≤60, kebab-case, keyword — actual: `apa-itu-jurnal-umum-pengertian-fungsi-cara-membuat` (**50 chars**, contains "jurnal-umum")
- [x] H1 contains keyword — "Apa Itu **Jurnal Umum**?..."
- [x] H2 count 4–5 — actual: **6** body H2 + FAQ + Kesimpulan (within 4–7 playbook allowance; brief specified this set)
- [x] ≥1 question-format H2 ("Bagaimana Cara Menentukan Debit dan Kredit?", "Kapan Memakai yang Mana?"); ≥1 honest/counter-conventional H2 ("Kapan Pencatatan Jurnal Manual Mulai Tidak Memadai?")
- [x] Keyword in first 100 words — "jurnal umum" appears in sentence 2 of the lead
- [x] Definition snippet near top (40–60 words) — blockquote, **57 words**
- [x] ≥8 LSI terms — counted **12**: contoh jurnal umum, pengertian, fungsi, cara membuat, debit/kredit, saldo normal, buku besar, siklus akuntansi, jurnal khusus, persamaan dasar akuntansi, double-entry, book of original entry
- [x] 3 internal links (1 bridge/hub + 2 cousins) — destinations: siklus akuntansi (lead), SAP FICO (mid), laporan keuangan (mid); all inline, no BACA JUGA
- [x] ≥1 external authoritative citation — actual: **2** (STIE YKPN inline §Debit-Kredit; SAP Help Portal inline §Kapan-manual)
- [x] FAQ 5–7 Q&As — actual: **5** (trimmed from 7 to remove body duplication)
- [x] 2 image placeholders (up to 3) — actual: **3** ({IMAGE_01/02/03}), all kept in body
- [x] ≥1 list + ≥1 table — 1 bullet list + 1 numbered list + 3 tables
- [ ] Word count 1,500–1,800 — **actual ≈ 2,080 (full body) / ≈ 1,890 (narrative-only) — OVER CEILING** (see open flag; method below)

**Word-count method**: manual section-by-section tally of published body (prose + list items + FAQ + conclusion + CTA + table-cell text), excluding YAML frontmatter and the three `{IMAGE_NN: ...}` design-brief instructions (Bash/`wc` unavailable in this environment). Narrative-only (no table cells) ≈ 1,890; full readable (incl. table cells, the CMS/Yoast-style count) ≈ 2,080. Both exceed 1,800.

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — verified: Apa Itu ~56, Fungsi ~49, Debit/Kredit ~57, Cara Membuat ~47, Contoh ~44, vs Khusus ~53, Kapan manual ~49 (all in 40–60 band after fixes)
- [x] Each body paragraph makes one independently quotable, verifiable point — yes; one claim + sourced fact per paragraph
- [x] FAQ parseable for FAQPage schema; `dateModified` / freshness in meta — FAQ is clean H3-question → answer; `dateModified: "2026-06-17"` added to frontmatter

### D. Soltius framing discipline (product_matrix.md + style_guide §11)
- [x] Soltius framed as implementer/partner, NOT "builds/makes SAP" — "mendampingi perusahaan memindahkan pembukuan", "kerap menjumpai perusahaan yang..."; SAP S/4HANA Finance taught as the product, Soltius as the implementer
- [x] ≤3 Soltius self-mentions — actual: **2** (mid-aside §Kapan-manual + closing positioning line)
- [x] No unverifiable superlatives ("terbaik/nomor satu") — none; only "SAP Platinum Partner via United VARs" + "Metrodata Group sejak 1998" (verified credentials)
- [x] SAP/partner product names + specs match dossier — SAP S/4HANA Finance, Universal Journal, ACDOCA, FI, CO all match dossier Bagian B (no SAP Simple Finance / SAP FICO Cloud misnomers — Flag #4 honored)
- [x] Closing uses a company_profile.md positioning line — uses the approved "SAP Platinum Partner melalui United VARs ... Metrodata Group sejak 1998" framing
- [x] Soft website CTA present as the FINAL line, after the conclusion — "...kunjungi soltius.co.id." is the last line, consultative ("mendiskusikan kesiapan"), not "beli sekarang"
- [x] Hub/bridge link present as natural inline anchor — "siklus akuntansi" woven into §Apa-Itu opening (bridge substitute for the absent SAP hub, per brief); no BACA JUGA callout
- [x] Conclusion under its own `## Kesimpulan` heading, separated from FAQ — yes

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: **none yet** — grep of articles_history/index.json for jurnal/akuntansi/finance/saldo/debit returns only one unrelated hit ("financial BI" inside a Business Intelligence article, different topic/intent)
- Subtopic overlap (Jaccard estimate): **0.0** — no accounting/jurnal cluster exists among the 51 committed articles (all in 6 SAP enterprise clusters)
- Verdict: **distinct angle confirmed** — first top-funnel accounting magnet in the pipeline; 0 overlap as the brief predicted

### F. Image-brief completeness (images.json)
- [x] JSON parses — valid
- [x] One entry per `{IMAGE_NN}` placeholder in the body (count matches) — 3 entries (IMAGE_01/02/03) ↔ 3 placeholders in body
- [x] Each entry has alt_id (≤125 chars) + caption_id + visual_direction + suggested_asset_type — all present, all Bahasa Indonesia; alt_ids within length (IMAGE_01 alt ~110 chars, IMAGE_02 ~108, IMAGE_03 ~118)
- [x] Any "real SAP screenshot" requirement is surfaced — IMAGE_03 sourcing_note explicitly: "jangan fabrikasi UI SAP ... minta screenshot asli dari tim SAP/Soltius" if real SAP UI is wanted (none required for the illustrative diagram)
- (No generated PNGs to check — images produced by the client's design team from this brief.)
