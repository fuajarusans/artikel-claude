---
brief_id: "pembiayaan-kreatif-02"
editor_run_date: "2026-09-22"
recommendation: "approve"
overall_score: 9
ai_score: 0.04
plagiarism_score: 0.05
---

# Editor QC Report — Pembiayaan Kreatif: Berapa Utang yang Boleh Ditanggung Pemda

## Recommendation
**approve**

This is the highest-duty-of-care article in the batch — a BPKAD officer can compute a real number from it — and it holds up. Both binding thresholds (75% cap, DSCR ≥ 2,5) carry their exact pasal citations and match the dossier's directly-confirmed Pasal 40 text. Both mandated hedges survive, and they survive *per extractable unit*: the DSCR composition is labelled "praktik perhitungan yang umum dipakai, bukan kutipan bunyi pasal" in the body **and** now carries the same instruction inside the FAQ answer; the Availability-Payment-is-not-Pinjaman-Daerah conclusion is hedged in the H2's 40–60-word answer, in the body, **inside the comparison-table cell**, and in the FAQ — so no single lifted block can read as settled law. The worked example is labelled illustrative at the paragraph level and again on every step. PT PII framing is exactly right for a debt-capacity article: three mentions including the CTA, and an explicit "PT SMI dan PT IIF menyalurkan pembiayaan kepada daerah; peran penjamin bukan itu." Anti-AI scan is clean (0 em-dashes, no banned openers, paragraph burstiness CV 0.453), AI-detector score 0.04, no verbatim lifts found. I removed one unverifiable comparative (see changelog) rather than ship a claim I could not stand behind. Word count 1787, inside the 1.500–1.800 band.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Concrete meeting-room hook, 1–5 sentence paragraph variation, practitioner asides. Minor: two bits of meta-scaffolding ("Di sinilah kejujuran perlu dijaga", "Pengingat terakhir bersifat terikat waktu") — left in because both earn their place as honesty signals |
| Factual & penjaminan infrastruktur / KPBU accuracy | 9 | Every threshold pinned to its pasal; PMK 97/2025 independently confirmed this session; one unverifiable comparative struck |
| On-page SEO compliance | 9 | Meta title 55, description 147, slug 37; all counts inside spec |
| GEO extractability (§2a) | 9 | All five H2 answers measured at 42–51 words; definition snippet 57; hedges survive table/FAQ extraction |
| PT PII framing discipline | 10 | 3 mentions incl. CTA; lender/penjamin distinction stated explicitly — the single highest-risk item in this article, handled well |
| Internal linking | 10 | 3 distinct ptpii.co.id URLs, all inline, hub in the lead, anchors fresh vs August |
| FAQ quality | 9 | 6 Q&As, each 43–57 words, each standalone, each carrying its hedge |
| Originality (plagiarism + AI-detector) | 9 | AI 0.04; no verbatim hit ≥20 words on the two candidates I could web-check |

## What I fixed (changelog)
- **Struck "mundur dari jadwal sebelumnya"** from the DKI Jakarta obligasi sentence. The dossier and the task brief both treat the Juni 2027 target as having moved out, but my own web check could not corroborate any earlier published target date, and the comparative is not load-bearing. Replaced with "Itu target, bukan capaian." — which delivers the required pending-not-accomplished framing on verified facts only. Also changed "kini menargetkan" → "baru menargetkan".
- **Strengthened the DSCR hedge inside FAQ #2.** Was "Secara konsep, rasio ini membandingkan…" — too weak for a block that sits one sentence away from a Pasal 40 ayat (4) citation and gets extracted independently. Now: "Komposisi rincinya lazim dijelaskan sebagai … ; perlakukan itu sebagai praktik perhitungan yang umum, bukan bunyi ayat." Same explicit instruction the body already carried.
- **Softened an over-claim on the RPMK**: "sudah melewati konsultasi publik" → "sudah masuk tahap konsultasi publik". The dossier confirms a consultation page exists, not that the process concluded.
- **Expanded APBD on first definitional use** in FAQ #3 ("Penerimaan umum Anggaran Pendapatan dan Belanja Daerah (APBD)…") per the brief's entity list. Placed in the FAQ rather than the lead so it reads naturally to a BPKAD audience instead of patronising them.
- **Tightened the citation freshness marker**: "(peraturan.go.id, diakses 2026)" → "diakses September 2026".
- **Added `date_modified: "2026-09-22"`** to the meta block (§2a freshness requirement; matches the August convention).
- **Synced frontmatter `word_count` 1683 → 1787** (the draft's figure was wrong by 104 words; actual draft was 1771).

## What I flagged (open issues)
- ⚠️ **DSCR detailed composition remains unconfirmed against PP 1/2024 pasal text** (official PDF corrupt at research time, no PDF reader available). It is correctly presented as commonly described practice in both the body and the FAQ, and the article never names the PAD / DBH−DBHDR / DAU components. *Recommendation*: do not let a future refresh sharpen this into pasal wording without reading the PDF first.
- ⚠️ **No explicit exclusion clause exists** placing Availability Payment outside Pembiayaan Utang Daerah. Hedged in four separate places. *Recommendation*: leave all four hedges intact on any future edit; removing the table-cell one is the silent failure mode.
- ⚠️ **"Penerimaan umum APBD" component list** (excluding DAK, dana darurat, dana pinjaman lama) is attributed to "rujukan yang beredar" and not pinned to a pasal, per the dossier flag. Correct as written. *Recommendation*: same caution as above.
- ⚠️ **Pasal 41's "tiga kementerian"** is hedged as "rujukan yang beredar menyebut… meski rincian itu tidak terbaca langsung dari bunyi pasalnya". Correct. No minister is named.
- ⚠️ **Portfolio figure provenance mismatch between KB and brief.** `company_profile.md` records 61 proyek / Rp 732 triliun as "publikasi resmi situs PT PII, 2026" (no month); the task brief specifies "per Juni 2026". The article follows the brief. *Recommendation*: curator or a future run should add the month to `company_profile.md` so the two stay in sync.
- ⚠️ **Scanner low-severity flag: vocab concentration 35.2%** (target <30%). Inherent to a regulation-dense Indonesian article where "Pembiayaan Utang Daerah", "daerah", "APBD", and "Pasal" must repeat for precision. Not worth fixing — synonym-swapping legal terms here would be an accuracy regression. AI score is 0.04 regardless.
- ⚠️ **WebSearch budget fully spent (3/3).** Two of eight plagiarism candidates were web-checked; the remaining six are regulation-identity strings (PP/PMK titles, dates, revocation lists) and a table fragment, which I classified without lookup. Queries are preserved in the `.quality-input.json` for a later session.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — 0 hits; opens on a concrete budget-meeting question
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — 0 occurrences anywhere
- [x] No "Penting untuk dicatat / dipahami bahwa" — 0 hits
- [x] "Dengan demikian" not overused — 0 hits
- [x] Em-dash count ≤2 — **0** (the 3 en-dashes are numeric ranges: Pasal 36–71, ayat (5)–(6), angka 18–19 — correct typography)
- [x] Varied paragraph lengths — 1 to 5 sentences; paragraph burstiness CV **0.453**
- [x] Not every H2 → 3-bullet list — one bullet list total, one numbered list, two tables, the rest prose
- [x] No generic claims without numbers — 16+ dated/sourced figures
- [x] No stacked hype adjectives — "terbaik" / "nomor satu" / "canggih" / "terdepan": 0 hits
- [x] No service-dump paragraph — one product anchor (Pembiayaan Kreatif), in the closing
- [x] No press-release register — "Dalam rangka" / "Sebagai wujud komitmen": 0 hits
- [x] Closing does not open with "Sebagai kesimpulan" — opens on a callback to the lead's meeting room

### B. Factual & penjaminan infrastruktur / KPBU spot-check
| Claim | Source check | Verdict |
|---|---|---|
| Sisa + Pembiayaan Utang Daerah baru ≤ 75% penerimaan umum APBD tahun sebelumnya — **Pasal 40 ayat (2) huruf a jo. ayat (3)**, PP No. 1 Tahun 2024 | dossier ✓ (confirmed from pasal text, converged from three independent paths) + task brief confirmation | pass |
| DSCR paling sedikit 2,5 — **Pasal 40 ayat (2) huruf b jo. ayat (4)** | dossier ✓ (explicit ayat text) + task brief confirmation | pass |
| PP No. 1 Tahun 2024 diundangkan 2 Januari 2024, mencabut PP No. 56 Tahun 2018, Pembiayaan Utang Daerah = BAB III Pasal 36–71, satu dari empat pilar | dossier ✓ + **WebSearch this session** (jdih.kemenkeu.go.id / peraturan.bpk.go.id independently confirmed the repeal and the four pillars: sinergi kebijakan fiskal nasional, Pembiayaan Utang Daerah, Dana Abadi Daerah, Sinergi Pendanaan) | pass |
| Peta Kapasitas Fiskal Daerah diatur **PMK No. 97 Tahun 2025**, lima kategori, jadi pertimbangan pemberian Pembiayaan Utang Daerah | dossier flagged this **medium** confidence — I verified it: **WebSearch confirmed** PMK 97/2025 *Peta Kapasitas Fiskal Daerah*, ditetapkan 22 Des 2025, diundangkan 31 Des 2025, mencabut PMK 65/2024 dan PMK 127/2024 → current law, correctly numbered | pass (upgraded from medium) |
| Hingga September 2026 belum ada daerah menerbitkan obligasi daerah / mengajukan pernyataan pendaftaran ke OJK; DKI Rp 3,5 triliun menargetkan Juni 2027 | dossier ✓ (bpkd.jakarta.go.id, terbit 22 Juli 2026) + **WebSearch this session** corroborated the Juni 2027 target and found no evidence of issuance or OJK registration | pass — but the "moved out" comparative was **not** corroborated and has been removed |

**Reference-year audit**: every figure carries a year. Regulation thresholds carry pasal + PP year; DJPK RPMK carries "(DJPK, 2026)"; DKI carries "(BPKD Provinsi DKI Jakarta, 22 Juli 2026)"; portfolio carries "per Juni 2026" **with scope stated** ("bernilai proyek lebih dari Rp 732 triliun" = project value, not guarantee value). Illustration figures are labelled at paragraph level and on all five steps.

**Prohibited content audit**: POJK number — 0 hits ✓ · "tidak memiliki tunggakan" — 0 hits ✓ · Peta Kapasitas Fiskal province counts — absent (only the five *category* names, which the dossier supports) ✓ · Fitch — absent ✓ · any assertion a guarantee claim has been paid — absent ✓ · named officials (bupati/walikota/gubernur/menteri/Direksi/Komisaris) — **0** ✓ (note: the DKI web search surfaced a governor's name; it is correctly absent from the article) · funding-certainty promise — absent; the article states the opposite explicitly ✓.

**Portal-lag audit**: `djpk.kemenkeu.go.id` is never cited as law — the article only says "Sebagian halaman portal pemerintah masih memajang dasar hukum lama, jadi rujuk PP ini langsung" and repeats it in FAQ #4. `kpbu.kemenkeu.go.id` is cited **for the Availability Payment concept definition only**; the revoked PMK 260/PMK.08/2016 on that page is never referenced. ✓

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: **55** chars / keyword at position **1**
- [x] Meta description 140–160 — actual: **147**
- [x] Slug ≤60, kebab-case, keyword — actual: `pembiayaan-kreatif-batas-utang-daerah` (37)
- [x] H1 contains keyword — "Pembiayaan Kreatif: Berapa Utang yang Boleh Ditanggung Pemda"
- [x] H2 count 4–7 — actual: **7** (5 body + FAQ + Kesimpulan)
- [x] ≥1 question-format H2 ("Berapa besar utang yang boleh ditanggung sebuah daerah?"); ≥2 honest/counter-conventional ("Komitmen yang tidak dihitung sebagai utang…", "Lolos ambang bukan berarti layak berutang")
- [x] Keyword in first 100 words — "pembiayaan kreatif daerah" at word ~61
- [x] Definition snippet near top — **57 words**, opens verbatim with the mandated "Pembiayaan kreatif dalam konteks infrastruktur daerah adalah…", inside the first ~150 words
- [x] **Disambiguation trio inside first 100 words** — infrastruktur (w5), daerah/APBD (w6/w51), KPBU (w80) ✓
- [x] ≥8 LSI terms — counted **11**: batas pinjaman daerah, pembiayaan utang daerah, DSCR daerah, penerimaan umum APBD, kapasitas fiskal daerah, PP 1/2024, obligasi daerah, Availability Payment, kontrak tahun jamak, KPBU daerah, PJPK
- [x] 3 internal links (1 hub + 2 cousins) — `/pembiayaan-kreatif` (lead, inline), `/kpbu` (H2 #4), `/public-private-partnership` (H2 #3). **3 distinct URLs**, no "BACA JUGA", zero institute.iigf.co.id
- [x] ≥1 external authoritative citation — actual: **3** (peraturan.go.id, kpbu.kemenkeu.go.id, bpkd.jakarta.go.id)
- [x] FAQ 5–7 Q&As — actual: **6**
- [x] ≥1 list + ≥1 table — 1 bullet list, 1 numbered list, **2** tables
- [x] Word count inside band 1.500–1.800 — actual: **1787** (frontmatter synced)

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — **measured**: H2 #1 = 51, #2 = 46, #3 = 42, #4 = 42, #5 = 43 words. All five inside the band
- [x] Each body paragraph makes one independently quotable, verifiable point — spot-checked; standouts: "Satu hal dipegang sejak awal: tidak semua pembiayaan kreatif berarti berutang.", "Lolos hitungan tidak sama dengan lolos seluruh persyaratan.", "Instrumen yang tersedia secara hukum belum tentu tersedia dalam praktik."
- [x] FAQ parseable for FAQPage schema — clean `###` H3 per question, 6 Q&As at 43–57 words each
- [x] `dateModified` / freshness noted in the meta block — `date_modified: "2026-09-22"` added
- [x] **Hedge survives per-block extraction** — the AP comparison-table cell reads "Tidak, menurut pembacaan definisi Pasal 1, bukan klausul pengecualian eksplisit"; the DSCR FAQ now carries "praktik perhitungan yang umum, bukan bunyi ayat"

### D. PT PII framing discipline (product_matrix.md + style_guide §11)
- [x] Framed as the government-guarantee provider (BUPI) under Kementerian Keuangan — not a lender, investor, contractor, operator, or regulator; Danantara: 0 hits
- [x] **The critical distinction for a debt-capacity article is stated outright**: "penilaian kemampuan fiskal PJPK adalah pekerjaan rutin PT PII selaku penjamin, dan itu berbeda dari pemberian pinjaman. PT SMI dan PT IIF menyalurkan pembiayaan kepada daerah; peran penjamin bukan itu."
- [x] ≤3 PT PII self-mentions — actual: **3** (one mid-article aside in H2 #4, one in Kesimpulan, one in the CTA)
- [x] No unverifiable superlatives — 0 hits
- [x] Product names + specs match product_matrix.md / dossier — anchor is **Pembiayaan Kreatif**, the brief's `client_anchor`; no service-dump
- [x] Closing uses a company_profile.md positioning line — "Sebagai Badan Usaha Penjaminan Infrastruktur di bawah Kementerian Keuangan, PT PII menjembatani kebutuhan kepastian investor dengan kemampuan fiskal negara" (pre-approved, verbatim)
- [x] Soft website CTA present as the FINAL line, after `## Kesimpulan` — "Skema pembiayaan kreatif untuk infrastruktur daerah beserta cakupan penjaminannya dapat ditelusuri lebih jauh di ptpii.co.id." Consultative, no "beli sekarang"
- [x] Hub link as a natural inline anchor in the lead — "Artikel ini membedah [kapasitas pembiayaan kreatif daerah]…" — descriptive, not a callout

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: `pembiayaan-kreatif-daerah-instrumen-di-luar-apbd` (2026-08-pembiayaan-kreatif-01)
- Subtopic overlap (Jaccard estimate): **0,14** vs August-01 (shared: pinjaman daerah, obligasi daerah, status "belum terbit") · **0,09** vs August-02 checklist (shared: debt ceilings, persetujuan DPRD) · **0,04** vs August-03 mandek (shared: obligasi daerah belum terbit)
- **August-02's eight-step readiness checklist is NOT rebuilt.** This article's numbered list is a five-step *arithmetic* calculation. Absent entirely: prastudi kelayakan, Tim KPBU, PJPK formation, Fasilitas Penyiapan Proyek, VGF, KUA-PPAS sequencing — i.e. the whole of August-02's substance.
- September siblings: `-01` owns Land Value Capture (zero LVC content here); `-03` owns per-sector instrument choice (no sector-by-sector mapping here). The "Pembiayaan Infrastruktur" cluster owns the national/macro view — this article stays on **one pemda's balance sheet** throughout.
- The "obligasi daerah belum pernah terbit" fact, owned by August-01, appears here exactly as the brief permits: a time-bound supporting note plus one FAQ entry sanctioned by the brief's FAQ list.
- Verdict: **distinct angle confirmed**

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran; `pembiayaan-kreatif-02.id.quality-input.json` written (re-run after final edits, so the JSON matches the shipped file)
- [x] AI-detector score < 0.30 — actual: **0.04** (verdict: pass). One low-severity flag: vocab concentration 35.2% vs <30% target — see open issues
- [x] Paragraph burstiness CV ≥ 0.30 — actual: **0.453** (sentence burstiness 0.653)
- [x] Plagiarism: distinctive passages web-checked; no non-PT PII verbatim hit ≥20 words — plagiarism score: **0.05**
  - Candidate 1/7 (DKI Jakarta Rp 3,5 triliun / Juni 2027) — **web-checked**. News coverage of the same underlying fact exists (Tempo, CNBC, Kompas, Liputan6), but none matches the article's phrasing; our sentence is independently constructed and cites the primary BPKD source. No hit. The check also produced the factual correction logged above.
  - Candidate 2/3/4/6 (PP No. 1 Tahun 2024 title, promulgation date, repeal list, threshold pairing) — **one web-checked**; matches returned are regulation-identity pages only (jdih.kemenkeu.go.id, peraturan.bpk.go.id, peraturan.go.id). Regulation identity text, attributed and linked → ignorable per the rule on verbatim regulation text.
  - Candidate 5 (DSCR definition) — classified without lookup: "rasio kemampuan keuangan daerah untuk mengembalikan Pembiayaan Utang Daerah" is the regulation's own phrasing, attributed in-line to Pasal 40 ayat (4) → ignorable.
  - Candidate 8 — a markdown table fragment, not prose; no meaningful lookup possible.
- **Budget note**: WebSearch cap was 3 and all 3 were used (PMK 97/2025 verification, DKI passage, PP 1/2024 passage). Six of eight plagiarism candidates were classified by category rather than by lookup; their queries remain in the `.quality-input.json` for a later session. I am not claiming any lookup I did not run.
