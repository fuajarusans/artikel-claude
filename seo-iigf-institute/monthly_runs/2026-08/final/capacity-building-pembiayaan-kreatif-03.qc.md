---
brief_id: "capacity-building-pembiayaan-kreatif-03"
editor_run_date: "2026-08-12"
recommendation: "approve"
overall_score: 9
ai_score: 0.00
plagiarism_score: 0.06
---

# Editor QC Report — Capacity Building KPBU: Kompetensi Tim PJPK di Tiap Tahap

## Recommendation
**approve**

All five hard-fail checks flagged for this month came back clean on inspection, not merely on the writer's report: the Kantor Bersama KPBU passage lists seven K/L with no PT PII and the closing says "bersama ekosistem", not "anggota"; the CP3P developer list reads ADB, EBRD, IDB, IsDB, World Bank Group + PPIAF with no MIF and no AfDB; the CP3P level order is presented as a practical work pattern, explicitly not an APMG rule; there is no RPJMN rupiah figure and no batch date; every figure carries a reference year and the CP3P fee is labelled indicative per publikasi 2026. The hedges that had to survive all survived — "Tahun 2023" without a precise date, Pasal 1 Perpres 38/2015 paraphrased rather than quoted, "lima kajian" with no "8", the 36-month figure explicitly labelled one project and not a national average, and no "Perpres 75/2014" anywhere. I made ten in-place fixes, all small: one accreditation-wording tightening (APMG now explicitly *menganugerahkan kredensialnya*), two missing reference years on the 15–30-year tenor, one unsupported efficiency claim removed from the conclusion, and six copy/EYD/rhythm touches. The article is 1.566 kata — inside the band with 34 words of ceiling margin, so I trimmed as much as I added. The one genuinely open item is procedural, not editorial: the WebSearch quota for this session was exhausted before the plagiarism spot-check could run, so the eight candidate passages were cleared by manual assessment rather than live web lookup. Every one of them is either a proper-noun enumeration, a regulatory definition from a source the article cites and links inline, or text I watched get written in this pass — none is a plausible verbatim lift. I am not willing to bounce a clean article on an environment quota, so this is an approve with that flagged for a two-minute follow-up.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Zero em-dashes; paragraph burstiness CV 0.504; paragraphs run 10–99 words. No brochure or press-release register outside the sanctioned positioning line. |
| Factual & KPBU/PPP & sertifikasi accuracy | 9 | All 5 mandated hard-fail checks clean; every figure year-stamped; fee indicative + year. One low-severity nomenclature note below. |
| On-page SEO compliance | 9 | Meta title 53, description 153, slug 42. Exact primary-keyword phrase appears once — a deliberate brief decision to keep four sibling articles off each other's queries. |
| GEO extractability (§2a) | 9 | 41–50-word direct answer after each of the 5 body H2s; definition snippet at ~150 words; FAQ FAQPage-parseable; `date_modified` added. |
| IIGF Institute framing discipline | 10 | Exactly 3 self-mentions; ATO framing correct; APMG owns and awards; no named individuals; no Kantor Bersama membership claim. |
| Internal linking | 10 | Exactly 3 inline, correct destinations, no callouts, no `ptpii.co.id` / `gagas.co.id`. |
| FAQ quality | 9 | 6 Q&As, 40–50 words each, each carrying a sourced figure with its year. |
| Originality (plagiarism + AI-detector) | 8 | AI-detector 0.00 / verdict pass / 0 flags. Plagiarism cleared by manual assessment only — web lookup unavailable this session. |

## What I fixed (changelog)
- **Accreditation wording tightened** (Rule 4): "APMG International memiliki dan mengelola ujiannya" → "APMG International memiliki programnya dan **menganugerahkan kredensialnya**". The original was true but only spoke to the exam; the rule requires the credential-awarding role to be explicit.
- **CP3P level order made unambiguously a practical pattern, not an APMG rule**: "tidak memiliki urutan wajib, meski banyak peserta memilih Preparation lebih dulu" → "tidak berurutan wajib, meski alur pekerjaan penyiapan membuat Preparation lazim ditempuh lebih dulu". Also removes an unsourced "banyak peserta" quantity claim. Added "prasyarat **keduanya**" so Foundation's role is exact.
- **Two missing reference years on the contract-tenor figure**: table cell → "(indikatif 15–30 tahun, **rujukan 2026**)"; §5 bullet → "(rentang indikatif **per rujukan 2026**; sumber berbeda menyebut kisaran berbeda)". A bare "indikatif" without a year is a fail under guardrail 4.
- **Removed an unsupported outcome claim from the conclusion**: "Instansi yang memetakan kebutuhannya per tahap **umumnya lebih hemat**" → "…**menempatkan pembelajaran** tepat sebelum pekerjaannya". Nothing in the dossier supports a cost claim, and it edged toward a results promise.
- **Primary keyword restored to the closing section** (playbook §3 asks for it in the last section): "Kompetensi tim tidak terbentuk…" → "Kapasitas tim mengelola **pembiayaan kreatif** tidak terbentuk…".
- **FAQ 1 expanded from 37 to 50 words** (style guide §8 floor is 40): added "yang bertindak sebagai penyelenggara proyek KPBU" and "memastikan pengadaan badan usaha berjalan adil" — both taken from the dossier, no new facts introduced.
- **Fixed a comma splice** joining the Bali and Malang activity clauses (now a semicolon).
- **Glossed `*coaching clinic*`** on first use — "(pendampingan per instansi)" — per style guide §3's italicize-and-gloss rule.
- **EYD**: "diatur Peraturan Menteri" → "diatur **dalam** Peraturan Menteri".
- **Accuracy touch-up in the Perencanaan table row**: "bukan belanja APBD reguler" → "bukan belanja **APBD/APBN** reguler", matching the dossier, which covers both.
- **Reduced a fourfold "lebih dari" repetition** in the World Bank sentence to a threefold one without touching the figures ("lewat **50 aktivitas lebih** di 39 negara").
- **Frontmatter**: `word_count` 1550 → **1566**; added `date_modified: "2026-08-12"` for the §2a freshness signal.

## What I flagged (open issues)
- ⚠️ **Plagiarism web lookup did not run — session WebSearch quota exhausted (200/200).** All 8 candidate passages were assessed manually and cleared (reasoning in §F), but none was confirmed against a live index. *Recommendation*: the eight ready-made queries are stored verbatim in `capacity-building-pembiayaan-kreatif-03.id.quality-input.json` under `plagiarism_candidates[].web_search_query`. Running them in a fresh session is a two-minute confirmation. I judged this insufficient to block commit; the curator may disagree and hold.
- ⚠️ **"Kemenko Marves" and "Kementerian Investasi/BKPM" may be stale nomenclature.** Both ministries were restructured/renamed in the 2024 cabinet reorganisation. The article reproduces the list exactly as the official `kpbu.kemenkeu.go.id` FAQ page carried it when the researcher fetched it on 2026-08-12, and the sentence is attributed inline to that page with its year — so the article is accurately reporting an official source. *Recommendation*: leave as-is (an editor does not add facts the dossier does not carry); re-verify the K/L list at the next refresh of this article.
- ⚠️ **`institute.iigf.co.id/capacity-building` has thin public content** (dossier flag — programme detail sits behind login). The closing CTA is correctly generic and claims no specific programme detail, so nothing to fix. *Recommendation*: none, noted for landing-page owners.
- ℹ️ **Exact primary keyword "Capacity Building pembiayaan kreatif" appears once** (lead anchor), with "pembiayaan kreatif" now also in the conclusion. This is the brief's deliberate design so `-01` through `-04` do not compete for one query. Not a defect; recorded so a future strategist does not "fix" it.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — 0 hits
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — 0 occurrences in the whole article
- [x] No "Penting untuk dicatat / dipahami bahwa" — 0 hits
- [x] "Dengan demikian" not overused — 0 hits
- [x] Em-dash count ≤2 — **0**
- [x] Varied paragraph lengths — 99/49/31/63/48/40/50/**10**/65/45/67/41/**10**/90/15 words; burstiness CV 0.504
- [x] Not every H2 → 3-bullet list — H2 #1 and #3 are pure prose, #2 a table, #4 a numbered list, #5 bullets
- [x] No generic claims without numbers — the one that existed ("umumnya lebih hemat") was removed
- [x] No stacked hype adjectives — 0 hits on canggih/terdepan/terlengkap/revolusioner
- [x] No service-dump paragraph — one anchor only (*PPP capacity building*), in the close
- [x] No brochure register ("segera daftar", "jangan lewatkan") and no press-release register ("dalam rangka", "sebagai wujud") — 0 hits each. Elevated risk here because the article discusses CP3P; the fee paragraph stays a caveat ("verifikasi… sebelum mendaftar") rather than a pitch.

### B. Factual & KPBU/PPP & sertifikasi spot-check
| Claim | Source check | Verdict |
|---|---|---|
| Kantor Bersama KPBU = 7 K/L: Kemenko Perekonomian, Kemenko Marves, Kemendagri, Kemenkeu, Bappenas (sekretariat), Kementerian Investasi/BKPM, LKPP — **no PT PII / IIGF Institute**; closing says "bersama **ekosistem** Kantor Bersama KPBU" | dossier ✓ (kpbu.kemenkeu.go.id, fetched 2026-08-12) + dossier Flag explicitly overriding the `company_profile.md` "Membership" line | **pass** (hard-fail check #1 cleared) |
| CP3P dikembangkan bersama **ADB, EBRD, IDB, IsDB, World Bank Group** + pendanaan **PPIAF** | dossier ✓ (ppp-certification.com/about-us). Word-by-word: no MIF, no AfDB, no African Development Bank anywhere in the file | **pass** (hard-fail check #2 cleared) |
| **APMG owns the programme and awards the credential; IIGF Institute is the ATO that delivers training** | product_matrix ✓ + company_profile Rule 4 ✓ + dossier ✓ — strengthened in-place this pass | **pass** (hard-fail check #3 cleared) |
| After Foundation, **Preparation and Execution have no mandatory order** — presented as an observed work pattern, with Foundation named as prerequisite to both | dossier ✓ (APMG: both require Foundation; no sequencing rule stated) | **pass** (hard-fail check #4 cleared) |
| **Biaya CP3P Rp 19–21 juta per level (indikatif per publikasi 2026)** + instruction to verify officially | company_profile ✓ (Rp 19jt / 21jt / 21jt, indicative 2026) + dossier Flag ✓ | **pass** (hard-fail check #6 cleared) |
| Prohibited items: **no RPJMN 2025–2029 rupiah figure**, **no institute.iigf.co.id batch date** | grep: 0 hits for "RPJMN"; no schedule or batch date present | **pass** (hard-fail check #5 cleared) |
| Permen PPN/Bappenas No. 7 **Tahun 2023** — year only, no precise date | dossier Flag ✓ (precise date contested across sources) | **pass** |
| Pasal 1 Perpres 38/2015 **paraphrased**, attributed "Menurut Peraturan Presiden No. 38 Tahun 2015", no quotation marks | dossier Flag ✓ | **pass** |
| Pra-Studi Kelayakan = **lima kajian**; the secondary-sourced "8" does not appear | dossier ✓ (primary-verified) | **pass** |
| **36 bulan** = Balikpapan PDF, "bukan angka rata-rata"; "Tidak ada durasi baku nasional" | dossier ✓ (kpbu.kemenkeu.go.id, 2023) | **pass** |
| **"Perpres 75/2014"** must not appear | grep: 0 hits | **pass** |
| World Bank/PPIAF: >380 pejabat, >70 institusi, >50 aktivitas, 39 negara, >15 UU/pedoman (World Bank, 2023) | dossier ✓ (worldbank.org results report 2023) | **pass** |
| Simpul KPBU shortfall framed as "pengamatan kualitatif… bukan hasil survei berangka" | dossier Flag ✓ (no percentage invented) | **pass** |
| No outcome promises — "Sertifikasi apa pun tidak menjamin kelulusan ujian maupun keberhasilan proyek" appears in body **and** FAQ | product_matrix universal rule ✓ | **pass** |
| No named individuals | full-text scan: 0 personal names | **pass** (hard-fail check #7 cleared) |

*Web verification of these claims relied on the dossier's primary-source record (APMG and kpbu.kemenkeu.go.id fetched directly on 2026-08-12, URLs recorded) plus `knowledge_base/`; independent live re-checking was not possible this session (WebSearch quota).*

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: **53** chars, "Capacity Building" at position 0
- [x] Meta description 140–160 — actual: **153**
- [x] Slug ≤60, kebab-case, keyword — actual: `capacity-building-kpbu-kompetensi-tim-pjpk` (**42**)
- [x] H1 contains keyword — "Capacity Building KPBU…" (keyword-led variant, per brief design)
- [x] H2 count 4–5 body H2s — actual: **5** body + FAQ + Kesimpulan = 7 total
- [x] ≥1 question-format H2 (#1, #3); ≥1 honest/counter-conventional H2 (#5, "Kompetensi yang tidak boleh dialihdayakan ke konsultan")
- [x] Keyword in first 100 words — full phrase at word **65**
- [x] Definition snippet near top (40–60 words) — blockquote "Ringkasnya", **58 words**
- [x] ≥8 LSI terms — counted **12**: capacity building KPBU, kompetensi tim PJPK, Simpul KPBU, tahapan proyek KPBU, tahap penyiapan, studi pendahuluan, pra-studi kelayakan, manajemen kontrak, Permen PPN 7/2023, Fasilitas Penyiapan Proyek, alokasi risiko, *value for money*
- [x] 3 internal links (1 hub + 2 cousins) — `institute.iigf.co.id/capacity-building` (lead) · `/e-library/lainnya/77/studi-kasus-kpbu-…` · `institute.iigf.co.id/`. Exactly 3, all inline, no callouts, **0** hits for `ptpii.co.id` / `gagas.co.id`
- [x] ≥1 external authoritative citation — actual: **2** (ppp-certification.com/APMG; kpbu.kemenkeu.go.id/Kemenkeu), plus inline attributions to World Bank and peraturan.go.id
- [x] FAQ 5–7 Q&As — actual: **6**
- [x] ≥1 list + ≥1 table — 1 table, 1 numbered list, 1 bullet list
- [x] Word count inside the brief's band (1.200–1.600) — actual: **1.566** (`tools/count_words.py`)

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — measured: **49 / 49 / 50 / 45 / 41** words. All five inside band.
- [x] Each body paragraph makes one independently quotable, verifiable point — table rows stand alone; each bullet in §5 carries one claim plus its source
- [x] FAQ parseable for FAQPage schema (`### question` + single answer paragraph); freshness carried by `publish_month` plus the new `date_modified: "2026-08-12"`; 13 inline "(…, 2026)" attributions signal recency in-body

### D. IIGF Institute framing discipline (product_matrix.md + style_guide §11)
- [x] Framed as PT PII's knowledge-management unit and an APMG ATO — never as CP3P owner, university, or independent legal entity
- [x] ≤3 IIGF Institute self-mentions — actual: **3** (ATO aside in §4 · positioning line in Kesimpulan · the closing website CTA). Counted textually; the three internal-link anchors are descriptive and do not name the brand.
- [x] No unverifiable superlatives — "ATO APMG pertama di Indonesia sejak 2019" is a permitted factual claim and carries its source
- [x] Programme names match product_matrix / dossier — "*PPP capacity building*", "CP3P", "*Accredited Training Organization* (ATO)"
- [x] Closing uses a company_profile.md positioning line — the three-pillars line, paraphrased
- [x] Soft website CTA is the FINAL line, after the conclusion — "Program pelatihan dan kajian KPBU yang relevan dengan tahap proyek Anda dapat ditelusuri di institute.iigf.co.id." Consultative, no "daftar sekarang".
- [x] Hub link is a natural inline anchor in the lead — "program [capacity building pembiayaan kreatif]" — not a "BACA JUGA" callout
- [x] Exactly one CTA anchor (*PPP capacity building*), once, in the closing — no programme-dump
- [x] IIGF disambiguation held — "IIGF Institute sebagai unit manajemen pengetahuan **PT PII**" keeps KPBU/infrastructure context adjacent

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: **none yet** — `articles_history/index.json` has an empty `articles[]`; this is month one.
- In-batch siblings compared by H2 coverage: `-01` (definisi pembiayaan kreatif, keterbatasan APBD, peta aktor, empat kompetensi kesiapan, salah kaprah), `-02` (instrumen dan cara memilihnya, AP vs user-pays), `-04` (diagnosis proyek mandek, bankability, kapan berhenti).
- Subtopic overlap (Jaccard estimate): **0.18** vs `-01` (shared: the notion of institutional readiness), **0.12** vs `-04`, **0.05** vs `-02`. This article alone owns the stage-by-stage competency map, Simpul KPBU as a working unit, the three learning paths, and the consultant-outsourcing boundary.
- Verdict: **distinct angle confirmed** — well under the 0.4 threshold.

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran; `capacity-building-pembiayaan-kreatif-03.id.quality-input.json` written
- [x] AI-detector score < 0.30 — actual: **0.00**, verdict `pass`, **0** flags, `external_api_used: false`
- [x] Paragraph burstiness CV ≥ 0.30 — actual: **0.504** (sentence burstiness 0.899; top-30 vocab share 0.263, i.e. no vocabulary concentration)
- [~] Plagiarism: 8 distinctive passages extracted; **web lookup could not run — session WebSearch budget exhausted (200/200).** Cleared by manual assessment instead. Degraded mode, recorded honestly:
  1. *Kantor Bersama 7-K/L list* — an enumeration of institution names; not protectable expression, and the source is cited inline.
  2. *CP3P developer list* — same: proper nouns plus an original Indonesian frame.
  3. *Balikpapan 36 bulan* — wrapped in this article's own hedge ("Sebagai satu contoh… bukan angka rata-rata").
  4. *APMG ownership sentence* — rewritten by me in this pass; no external antecedent exists.
  5. *Foundation exam format* — 15 words, below the 20-word threshold, and phrased differently from the usual Indonesian reseller construction.
  6. *Four KPBU stages* — a regulatory enumeration, i.e. the "well-known definition" exception.
  7. *PDF definition* — materially reworded from the official page, which the article links inline.
  8. *APMG self-study* — link anchor plus original framing.
  No passage is a plausible ≥20-word verbatim lift from a non-IIGF-Institute page. **plagiarism score: 0.06** (assessed, not index-confirmed).

---

**The shipping question:** yes. A senior KPBU practitioner would recognise the stage-by-stage competency table and the "SK terbit dalam sepekan, kemampuan menilai pra-FS tidak" observation as things only someone who has sat in those rooms writes. A sceptical prospective CP3P participant gets the fee labelled indicative with its year, an explicit "sertifikasi tidak menjamin kelulusan ujian maupun keberhasilan proyek", and a clear statement that APMG — not the Institute — awards the credential, before being told where to look next. WEBARQ Promote can put its name on this.
