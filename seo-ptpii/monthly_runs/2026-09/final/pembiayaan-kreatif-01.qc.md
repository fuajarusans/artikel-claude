---
brief_id: "pembiayaan-kreatif-01"
editor_run_date: "2026-09-22"
recommendation: "approve"
overall_score: 9
ai_score: 0.00
plagiarism_score: 0.05
---

# Editor QC Report — Pembiayaan Kreatif dari Nilai Tanah: Aturan Ada, Hasil Belum

## Recommendation

**approve**

This is the strongest draft in the September batch on the dimension that matters most for this article: epistemic discipline. Every one of the six high-risk traps flagged in the assignment was already handled correctly by the writer — the Perpres is cited only by its undisputed *diundangkan* date, the Permenko 3/2026 implementing rule is present and correctly framed as arriving ~21 months late (never "belum ada"), the core finding reads "belum terdokumentasi" with the rejected phrasing explicitly quoted and disowned, DKI's KLB compensation is labelled as a separate and older in-kind mechanism, no collected-revenue figure is invented anywhere, and the unverified Madiun figures have not returned. My fixes were therefore refinements rather than repairs: PT PII framing tightened off "menyiapkan proyek", four domain acronyms expanded at first use, one figure re-aligned to the dossier's exact wording, and the meta description made epistemically exact. The AI-detector scores 0.00 with zero flags and paragraph burstiness of 0.485. I used my full 3-call WebSearch budget on plagiarism/fact verification and cleared 3 of 8 candidate passages; the remaining 5 are regulation-registry boilerplate, a link artifact, and original narrative, so I am comfortable at a 0.05 plagiarism score — but I did not look them up and am not claiming otherwise.

## Quality scores

| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Zero em-dashes, zero banned openers, burstiness CV 0.485. "Bagian yang jarang ditulis:", "perlu dibaca hati-hati", "di ruang rapat Bappeda" read as practitioner, not press release |
| Factual & penjaminan infrastruktur / KPBU accuracy | 9 | Permenko 3/2026 number independently confirmed this session; all regulation references current; every figure now carries year + scope |
| On-page SEO compliance | 9 | Meta title 60, description 152, slug 35; keyword in title/H1/slug/first-100/last line |
| GEO extractability (§2a) | 10 | All five H2 answers measured 43–56 words; snippet 58; disambiguation trio inside first 100 words |
| PT PII framing discipline | 9 | 3 mentions incl. CTA; explicit "bukan pada pemungutan nilai kawasan" disclaimer; no lender/investor/regulator drift |
| Internal linking | 10 | Exactly 3 inline links to 3 distinct ptpii.co.id URLs; all anchors fresh vs August |
| FAQ quality | 8 | 6 Q&As, all 40–47 words after fix; parseable for FAQPage. Two brief-listed questions unused (see flags) |
| Originality (plagiarism + AI-detector) | 9 | ai 0.00 / 0 flags; 3 of 8 candidates web-cleared, no verbatim ≥20-word hit |

## What I fixed (changelog)

1. **PT PII framing (critical)** — "Pengalaman PT PII **menyiapkan** dan menjamin proyek KPBU daerah" → "**mendampingi penyiapan** dan menjamin". The original edged toward PT PII acting as project developer, which `product_matrix.md` forbids. Reworked the preceding transition to "Di titik inilah kualitas penyiapan proyek menentukan." to avoid a *pendampingan/mendampingi* echo.
2. **Acronym expansion at first use (4×, style_guide §3)** — the draft used PBB-P2, KPBU, BPHTB, NJOP and PAD bare throughout. Expanded each at its first occurrence: Pajak Bumi dan Bangunan Perdesaan dan Perkotaan (lead), Kerja Sama Pemerintah dengan Badan Usaha (lead), Bea Perolehan Hak atas Tanah dan Bangunan + Nilai Jual Objek Pajak (H2 #2 answer), Pendapatan Asli Daerah (closing bullet). Verified the H2 #2 answer stayed inside 40–60 after the additions (45 → 56 words).
3. **Definition snippet entity clarity** — P3NK and LVC both appeared as bare acronyms on first use *inside* the snippet. Now "*land value capture* (LVC, penangkapan nilai lahan)" and "P3NK (Pengelolaan Perolehan Peningkatan Nilai Kawasan)". Snippet 52 → 58 words, still inside band.
4. **Meta description epistemic fix** — "realisasi penerimaan daerah **belum ada**" → "penerimaan daerah **belum terdokumentasi**". The body was scrupulous about this distinction; the meta was not, and the meta is what gets quoted in SERPs and AI answers. 151 → 152 chars.
5. **Removed "belum ada" misread risk in H2 #4** — "Aturan pelaksananya **baru ada**." → "Aturan pelaksananya **sudah ada, tetapi baru**." An AI engine extracting that 53-word block in isolation could have read "baru ada" as "belum ada", inverting the article's central correction. 53 words, still in band.
6. **Figure re-aligned to dossier** — ADB Indonesia investment gap "pada kisaran 5% dari PDB" → "hampir 5% dari PDB" (dossier Core Fact #18 wording).
7. **ADB attribution smoothed** — "[ADB] (catatan diakses September 2026) mencatat" → "Catatan [ADB] yang diakses September 2026 menunjukkan". Removes a parenthetical mid-sentence and the *mencatat/catatan* repetition, while keeping the access-date anchor the dossier requires in place of a publication year.
8. **Removed redundant "dan Shenzhen"** from the Rail+Property country list — Shenzhen is named in the immediately preceding sentence.
9. **FAQ #5 length** — 39 words, one under the 40-word floor. Extended to 41 ("di koridor yang terdampak proyek infrastruktur").
10. **EYD** — "Celah inilah yang seharusnya ditutup [anchor]" → "ditutup **oleh** [anchor]".
11. **Frontmatter** — added `date_modified: "2026-09-22"` (matches the convention in this month's other approved finals); `word_count` 1690 → **1755**, verified with `tools/count_words.py`.

**Net word count:** draft 1717 → final **1755** (band 1.500–1.800). I briefly added a 7th FAQ ("Apa langkah pertama bagi pemda yang tertarik?", from the brief's list and drafted in the dossier), which pushed the article to 1808 — over the ceiling. Rather than make seven compensating cosmetic trims across the body to fund it, I removed it again: 6 FAQs already satisfies the 5–8 requirement, and holding my footprint to editorial scope is the better call. Noted below as an optional enhancement.

## What I flagged (open issues)

- ⚠️ **Plagiarism coverage is 3 of 8 candidate passages** — the 3-call WebSearch budget was spent on the three most liftable passages (the P3NK definitional paraphrase, the "pembiayaan kreatif adalah" snippet, the Permenko passage). The 5 unchecked candidates are two regulation-registry identity strings (exempt per the rules), one markdown-link artifact, the original lead narrative, and generic PBB-P2/NJOP tax mechanics. *Recommendation*: none needed for shipping; the queries are preserved in `pembiayaan-kreatif-01.id.quality-input.json` if a later session has budget.
- ⚠️ **SKPD, BLUD and BUMD are used unexpanded** (H2 #1 and FAQ #6). A deliberate call, not an oversight: the brief's reader is pemda/OPD/Bappeda, for whom these are their own org chart, and expanding all three would cost ~12 words and clutter the sentence. *Recommendation*: leave as-is for this reader; revisit if the hub ever targets lenders/international readers.
- ⚠️ **Two brief-listed FAQ questions unused** — "Apakah daerah kecil bisa memakai skema ini?" and "Apa langkah pertama bagi pemda yang tertarik?". Both are drafted in the dossier and both are genuinely useful next-step content for this reader. *Recommendation*: not a defect (6 of 5–8 required, word band is the binding constraint). Hand to the strategist as seed material for a follow-up article rather than forcing them in here.
- ⚠️ **The ADB Shenzhen figures (23% / 17%) carry an access date, not a publication year** — this is the dossier's explicit instruction (Core Fact #18: the ADB blog shows no publication date, so "jangan tambahkan tahun publikasi blog"). The article anchors them with "yang diakses September 2026" plus the 2016–2030 projection period. *Recommendation*: acceptable as the honest maximum; if ADB ever dates that post, swap in the real year.
- ⚠️ **`ekon.go.id` is now reachable** — the researcher could not fetch it (persistent TLS errors) and worked around it. This session's searches surfaced two live pages (`/publikasi/detail/6952` LVC socialization, `/publikasi/detail/6978` P3NK implementation). *Recommendation*: feed back to the researcher so the next run on this hub can cite the primary Kemenko source directly instead of relying on `bisnis.com` / `idxchannel.com` intermediaries.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)

- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — grep clean
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — zero occurrences
- [x] No "Penting untuk dicatat / dipahami bahwa" — zero
- [x] "Dengan demikian" not overused — zero occurrences
- [x] Em-dash count ≤2 — **0**
- [x] Varied paragraph lengths — 7 / 9 / 16 / 27 / 36 / 43 / 45 / 46 / 47 / 48 / 51 / 53 / 54 / 62 / 63 / 71 / 83 / 98 / 109 words. Paragraph burstiness CV **0.485**
- [x] Not every H2 → 3-bullet list — H2 #1 prose only, #2 prose only, #3 prose + table, #4 prose + numbered list, #5 prose + bullets
- [x] No generic claims without numbers
- [x] No stacked hype adjectives — grep clean on canggih/terdepan/revolusioner/seamless/terbaik/nomor satu
- [x] No service-dump paragraph — one anchor (Pembiayaan Kreatif), no product list
- [x] No press-release register — grep clean on "Dalam rangka mendukung" / "Sebagai wujud komitmen"; no named officials anywhere

### B. Factual & penjaminan infrastruktur / KPBU spot-check

| Claim | Source check | Verdict |
|---|---|---|
| Perpres No. 79 Tahun 2024 **diundangkan 12 Agustus 2024**, Berita Negara RI No. 166/2024 | dossier Core Fact #1/#2 ✓ (peraturan.bpk.go.id + peraturan.go.id, cross-checked). String "1970" absent from the entire file ✓ | **pass** |
| **Permenko No. 3 Tahun 2026** is the P3NK implementing rule, launched ~akhir Mei–awal Juni 2026, ~21 bulan after the Perpres | dossier Core Fact #7 ✓ **+ WebSearch this session**: ekon.go.id ("socialization of Ministerial Regulation Number 3 Year 2026, national reference"), CNBC Indonesia 29 Mei 2026, Vibizmedia 28 Mei 2026, bisnis.com 4 Juni 2026 — number and date range independently confirmed | **pass** |
| **No public documentation** that any region has collected/booked P3NK revenue per September 2026 | dossier Core Fact #8 ✓ (pembiayaan.pu.go.id + 2 outlets). This session's searches returned only launch/socialization/capability coverage — zero realized-revenue reporting. Article reads "belum terdokumentasi" and explicitly disowns "tidak pernah terjadi" ✓ | **pass** |
| DKI KLB compensation runs under **Pergub No. 11 Tahun 2026** (ditetapkan 9 April 2026), predates and sits separately from Perpres 79/2024, paid **in-kind** | dossier Core Facts #10/#11 ✓. Article: "Ia mendahului dan berdiri terpisah dari Perpres 79/2024… bukan setoran tunai ke kas daerah. Menyebutnya 'P3NK yang sudah berhasil' keliru." ✓ | **pass** |
| PT PII portfolio **61 proyek**, nilai proyek **> Rp 732 triliun per Juni 2026** | dossier Core Fact #16 ✓ / `company_profile.md`. Scope correctly labelled as *nilai proyek* (not guarantee value) and dated ✓ | **pass** |
| P3NK is a **receipts** instrument, outside APBN/APBD, not subject to PP No. 1 Tahun 2024 borrowing thresholds | dossier Core Facts #12/#20 ✓ + this session's ekon.go.id summary ("alternative financing scheme outside APBN and APBD") ✓ | **pass** |

**Regulation currency:** UU No. 1 Tahun 2022 (HKPD) ✓ current · PP No. 1 Tahun 2024 ✓ current · Perpres 79/2024 ✓ in force · Pergub DKI 11/2026 ✓ current, with 175/2015 and 210/2016 framed as a superseded chain ("kini Pergub No. 11 Tahun 2026"). **No revoked DJPK chain** (UU 33/2004, PP 54/2005, PMK 147/2006, PP 30/2011) appears anywhere — portal-lag trap avoided.

**Figures audit (year + scope on every number):** Perpres 79/2024 + 12 Agt 2024 ✓ · BN 166/2024 ✓ · Permenko 3/2026 + Mei–Juni 2026 ✓ · 21 bulan (derived, stated as "kira-kira") ✓ · Shenzhen 23% @400m / 17% @600m + ADB access Sept 2026 ✓ · USD 22,6 triliun @ 2016–2030 ✓ · ~5% PDB / 2,4% regional ✓ (same ADB note) · Pergub 11/2026 @ 9 Apr 2026 ✓ · Madiun COD 18 Juli 2023 ✓ · 61 proyek / > Rp 732 triliun nilai proyek @ Juni 2026 ✓. **No bare numbers.**

**Blacklist sweep:** no Direksi/Komisaris/bupati/walikota/gubernur/menteri named (note: the CNBC headline surfaced in search names the Menko — correctly absent here) · no Danantara · no Fitch · no `institute.iigf.co.id` · no invented rupiah collection figure · no "7.459 titik" / "299,7 km" · no funding-certainty promise · no claim-ever-paid assertion.

### C. On-page SEO checklist (seo_playbook.md §3)

- [x] Meta title ≤60 (keyword first 30) — actual: **60** / keyword at chars **1–18**
- [x] Meta description 140–160 — actual: **152**
- [x] Slug ≤60, kebab-case, keyword — actual: `pembiayaan-kreatif-nilai-tanah-p3nk` (**35**)
- [x] H1 contains keyword — "Pembiayaan Kreatif dari Nilai Tanah: Aturan Ada, Hasil Belum"
- [x] H2 count 4–7 — actual: **7** (5 body + FAQ + Kesimpulan)
- [x] ≥1 question-format H2 (**2**: "Apa itu…", "Mengapa…") ; ≥1 honest/counter-conventional H2 ("Kapan daerah Anda sebaiknya BELUM mengejar skema ini")
- [x] Keyword in first 100 words — "pembiayaan kreatif" at word **52**
- [x] Definition snippet near top — **58 words**, opens exactly "Pembiayaan kreatif dalam konteks infrastruktur daerah adalah…", sits at ~word 110
- [x] ≥8 LSI terms — counted **13+**: land value capture, P3NK, Perpres 79/2024, peningkatan nilai kawasan, Penerima Manfaat, PBB-P2, BPHTB, NJOP, kompensasi KLB, PAD, kawasan berorientasi transit, APBD, SKPD/BLUD/BUMD, KPBU
- [x] 3 internal links (1 hub + 2 cousins) — `/pembiayaan-kreatif` (lead), `/public-private-partnership` (H2 #2), `/kpbu` (H2 #5). **3 distinct URLs, all inline, no "BACA JUGA"**
- [x] ≥1 external authoritative citation — actual: **4** (peraturan.go.id, pembiayaan.pu.go.id, blogs.adb.org, jdih.jakarta.go.id)
- [x] FAQ 5–7 Q&As — actual: **6**, each 41–49 words
- [x] ≥1 list + ≥1 table — numbered list (4), bullet list (3), comparison table (5 rows)
- [x] Word count inside band 1.500–1.800 — actual: **1.755** (`tools/count_words.py`)

**DISAMBIGUATION check (binding):** trio verified inside the first 100 words — APBD (w7), "Pemerintah daerah" (w28–29), "infrastruktur daerah" (w60–61), "Kerja Sama Pemerintah dengan Badan Usaha (KPBU)" (w68–74). The KPBU expansion I added materially strengthens this signal against the ekonomi-kreatif/UMKM/multifinance query drift.

**Anchor freshness vs August:** "pembiayaan kreatif berbasis nilai kawasan" / "proyek KPBU di kawasan perkotaan" / "model public private partnership global" — all three distinct from August's six anchors ("pembiayaan kreatif untuk infrastruktur daerah" ×2, "skema pembiayaan kreatif untuk infrastruktur daerah", "skema KPBU", "tahapan proyek KPBU", "alokasi risiko proyek KPBU", "public private partnership", "praktik public private partnership", "Pengalaman public private partnership"). ✓

### C2. GEO extractability (seo_playbook.md §2a)

- [x] Direct 40–60-word answer immediately after each major H2 — **measured**: 47 / 56 / 43 / 53 / 53 words. All five inside band
- [x] Each body paragraph makes one independently quotable, verifiable point — spot-checked all 19 prose blocks; each carries a single claim plus a dated fact or a named regulation
- [x] FAQ parseable for FAQPage schema — clean `## FAQ` → `###` question → answer-paragraph structure, 6 pairs
- [x] Freshness — `date_modified: "2026-09-22"` added to the meta block; body carries four explicit time anchors ("per September 2026" in an H2 title, "hingga September 2026", "per Juni 2026", "yang diakses September 2026")

### D. PT PII framing discipline (product_matrix.md + style_guide §11)

- [x] PT PII framed as the government-guarantee provider (BUPI) — "Sebagai Badan Usaha Penjaminan Infrastruktur di bawah Kementerian Keuangan, PT PII mendampingi penyiapan dan strukturisasi transaksi proyek KPBU daerah". Not a lender/investor/contractor/operator/regulator; not under Danantara
- [x] **No LVC-levy role implied** — the closing states it outright: "Perannya di sisi kesiapan proyek, bukan pada pemungutan nilai kawasan." This is the single best line in the article for this guardrail
- [x] ≤3 PT PII self-mentions — actual: **3** (mid-article aside in H2 #4, closing positioning line, ptpii.co.id CTA)
- [x] No unverifiable superlatives
- [x] Penjaminan / KPBU product names + specs match product_matrix.md / dossier — one anchor only (**Pembiayaan Kreatif**), correct per the matrix row for "pembiayaan kreatif infrastruktur"
- [x] Closing uses a company_profile.md positioning line — paraphrase of "Sebagai Badan Usaha Penjaminan Infrastruktur di bawah Kementerian Keuangan…"
- [x] No funding-certainty promise — "tanpa menjanjikan kepastian pendanaan dari skema berbasis nilai mana pun"
- [x] Soft website CTA present as the FINAL line, after the conclusion — "Ragam skema pembiayaan kreatif untuk proyek infrastruktur daerah, berikut jalur diskusi awalnya, dapat ditelusuri di ptpii.co.id." Consultative, no "beli sekarang"
- [x] Hub link present as a natural inline anchor in the lead — "[pembiayaan kreatif berbasis nilai kawasan]", descriptive, no callout box

### E. Anti-cannibalization spot check

Measured against all three August articles on this hub (`articles_history/by_keyword/pembiayaan-kreatif/`):

| Prior article | Shared subtopics | Jaccard | Verdict |
|---|---|---|---|
| `pembiayaan-kreatif-daerah-instrumen-di-luar-apbd` (Agt-01) | Land Value Capture; pembiayaan kreatif scope | **0.10** | distinct |
| `pembiayaan-kreatif-checklist-kesiapan-pemda` (Agt-02) | kapasitas teknis pemda | **0.05** | distinct |
| `pembiayaan-kreatif-mandek-penyebab-proyek-daerah` (Agt-03) | — | **0.00** | distinct |

**Verdict: distinct angle confirmed.** August-01 held LVC as *one row in a six-instrument table*; this article takes that row down to its legal basis, its five statutory mechanisms, and its realization status. No H2 here maps onto any August H2.

**Instrument-comparison guard:** the article's table compares the **five mechanisms inside P3NK** (Dana P3NK, kompensasi KLB, pengalihan hak membangun, pemanfaatan BMN/BMD, integrasi horizontal), not instruments against each other. August-01's six-instrument map is **not** rebuilt. ✓

**Sibling guard (this month):** `-02` owns debt ceilings/DSCR — this article touches PP No. 1 Tahun 2024 only to establish that P3NK is *not* subject to it, and deliberately states no 75% / DSCR 2,5 figures. `-03` owns per-sector instrument choice — absent here. ✓

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)

- [x] Script ran against the **saved final**; `pembiayaan-kreatif-01.id.quality-input.json` written
- [x] AI-detector score **0.00** (<0.30 threshold) — verdict `pass`, **0 flags**, `external_api_used: false`
- [x] Paragraph burstiness CV **0.485** (≥0.30) · sentence burstiness 0.635 · top-30 vocab share 0.291
- [x] Plagiarism: **3 of 8** distinctive passages web-checked — plagiarism score **0.05**

**Plagiarism detail (WebSearch budget 3/3 used, fully spent — stated plainly):**

| # | Passage checked | Result |
|---|---|---|
| 1 | `"skema pendanaan infrastruktur berbasis kewilayahan yang memungkinkan sebagian kenaikan nilai kawasan"` (H2 #1 answer — the Perpres Pasal 1 paraphrase, highest lift risk) | **No verbatim hit.** Returned topical pages only (ekon.go.id, ANTARA, idxchannel, ITS journal). The official wording differs materially; our text is a genuine paraphrase, attributed to the Perpres |
| 2 | `"kumpulan skema pendanaan di luar APBD" + "pinjaman konvensional"` (the definition snippet — the most extractable passage) | **No verbatim hit.** Top result is ptpii.co.id's own hub page (exempt); rest are Kemenkeu/Kemenko/Bappenas topical pages with different phrasing |
| 3 | `"Permenko" "Nomor 3 Tahun 2026" P3NK land value capture` (the news-sourced passage) | **No verbatim hit**, and the regulation number/date was independently confirmed (see §B) |

**Not web-checked (5 of 8), with risk rationale:** #1 and #8 are Perpres registry identity strings ("Perpres No. 79 Tahun 2024 yang diundangkan 12 Agustus 2024 melalui Berita Negara RI No. 166/2024") — regulation-identity boilerplate, explicitly exempt; #5 is a markdown-link URL artifact, not prose; #4 is the H1 plus the original *jalan lingkar* narrative hook, which is invented framing; #6 and #7 are generic PBB-P2/NJOP mechanics and a Pergub-chain description. None is a plausible lift vector. **I did not run lookups on these five and make no claim about them** — their queries are preserved in the quality-input JSON for a later session.

**One overlap worth recording (not a hit):** the official P3NK cycle terminology — *perencanaan → penciptaan nilai → penangkapan nilai → pendanaan nilai* — appears in FAQ #2 as a compressed four-term enumeration. The source sentence on ekon.go.id runs 27 words with different connectives; ours is a 9-term list of named statutory stages. Enumerating the regulation's own stage names is unavoidable and correct, and falls under the verbatim-regulation exemption.

## The shipping question

Would WEBARQ Promote be proud of this on ptpii.co.id tomorrow, read by a senior KPBU practitioner and a skeptical PJPK official? **Yes.** The article does the thing the entire SERP refuses to do — it names a regulation none of the top three cite, then says plainly that nobody has collected a rupiah under it yet, and it says so with the epistemic care ("belum terdokumentasi", not "tidak pernah terjadi") that survives a hostile read. The honest H2, the status column in the table, and the refusal to dress DKI's KLB compensation up as a P3NK success are exactly the trust signals this audience tests for.
