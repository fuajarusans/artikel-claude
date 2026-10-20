---
brief_id: "kpbu-03"
editor_run_date: "2026-09-21"
recommendation: "approve"
overall_score: 9
ai_score: 0.00
plagiarism_score: 0.04
---

# Editor QC Report — Pengembalian Investasi KPBU: Availability Payment atau Tarif

## Recommendation
**approve**

This is the batch's best-sourced article and the draft earned that description. The Perpres 38/2015 Pasal 11 ayat (2) spine is quoted accurately, and — the check that mattered most — the "dan/atau" point is genuinely load-bearing rather than decorative: it drives the meta description, the definition snippet, H2 #1's enumeration, the whole of H2 #5, two FAQ entries, and the conclusion. The two error traps the brief warned about were both clean on arrival: PT PII is never shown paying an Availability Payment or setting a tariff (the draft states the opposite explicitly in FAQ #3), and the Dharmasraya example was already fenced off from PT PII's guarantee portfolio with no PJPK named. The anti-AI scan came back empty — zero banned openers, zero em-dashes, paragraph burstiness 0.503, AI-detector 0.00 with no flags. My fixes were tightening rather than repair: I made all five body H2 direct answers land inside the 40–60-word GEO band (one was trailing off into a colon lead-in), de-duplicated a positioning line that six of this month's fifteen drafts were reusing verbatim, removed an unsourced "belasan tahun" from the lead, dated one undated portal citation, and hardened the Dharmasraya disclaimer so "jaminan pembayaran" could not collide with "penjaminan" in a skimming reader's eye. One honest limitation is recorded in section B: my 3-search budget corroborated PMK 68/2024's existence, scope, and revocation chain, but did not independently re-surface the specific PMK 260/PMK.08/2016 line item or the two dates — those rest on the dossier's direct JDIH fetch, which is rated high confidence.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Zero banned patterns. Em-dash count 0. Paragraph burstiness CV 0.503, sentence 0.849. Practitioner lines land ("Mengaku tidak tahu lebih berguna daripada menebak bentuknya") |
| Factual & penjaminan infrastruktur / KPBU accuracy | 9 | Pasal 11(2) verbatim-accurate; all figures carry year + scope; every dossier "do not assert" boundary respected |
| On-page SEO compliance | 9 | All §3 checks pass; meta description tightened 160 → 152 for truncation margin |
| GEO extractability (§2a) | 9 | All 5 body H2s now 47–52-word standalone answers; FAQ FAQPage-clean. One batch-level note on `dateModified` |
| PT PII framing discipline | 9 | BUPI/SMV framing correct; 3 mentions incl. CTA (at ceiling); no superlative beyond the allowed "satu-satunya BUMN … mandat" |
| Internal linking | 10 | 3 distinct ptpii.co.id URLs, all inline, anchors distinct from August *and* from this month's kpbu-01/02 |
| FAQ quality | 9 | 6 Q&As, each 44–54 words; leads with the captured PAA |
| Originality (plagiarism + AI-detector) | 9 | AI 0.00 / 0 flags; no verbatim ≥20-word hit on any non-PT PII page in the passages checked |

## What I fixed (changelog)
- **GEO — H2 #4 direct answer**: the 40–60-word slot ended on a colon lead-in ("…mensyaratkan dua kondisi terpenuhi lebih dulu:"), so the extractable unit was only ~34 self-contained words. Rewrote it to close on its own substance (51 w) and split the list lead-in into a separate one-line paragraph.
- **GEO — H2 #5 direct answer**: fixed a logic wobble ("Tiga hal…" followed by "keduanya") and expanded 42 → 52 words so the standalone answer names both mechanisms explicitly.
- **PT PII framing (defensive)**: reworded the Dharmasraya sentence so "mensyaratkan jaminan pembayaran tahunan" became "mewajibkan PJPK menyediakan kepastian pembayaran tahunan" — removing a "jaminan"/"penjaminan" collision sitting one sentence away from a PT PII mention. Strengthened the disclaimer to "dikutip semata sebagai contoh sektor …, bukan sebagai proyek yang dijamin PT PII."
- **Internal-duplication**: the closing used `company_profile.md`'s positioning line #1 **verbatim**, as do five other drafts in this month's batch (jaminan-pemerintah-02/03, pembiayaan-infrastruktur-02/03, pembiayaan-kreatif-02). Paraphrased to approved line #3 ("satu-satunya BUMN yang memperoleh mandat…") and added the style-guide cumulative hedge ("Angkanya kumulatif dan terus bertumbuh"). Style guide §11 says paraphrase, vary, don't stack.
- **Unsourced figure in the lead**: "anggaran daerah terikat komitmen **belasan tahun**" → "komitmen **multi-tahun**". "Belasan" is a 11–19-year claim with no source, and the article's own worked example runs five years.
- **Citation precision**: table row "Penetap tarif … (Pasal 12 ayat 1)" → "(Pasal 12 ayat 1 dan 2)" — the row covers tarif awal *and* penyesuaiannya, and adjustment sits in ayat (2). Used "dan" rather than an en-dash to keep the dash count at zero.
- **Source-strength calibration**: "panduan World Bank melalui PPP Knowledge Lab menempatkannya sebagai…" → "dalam literatur PPP internasional, termasuk materi PPP Knowledge Lab World Bank, … diklasifikasikan sebagai…". The dossier flags this source as a WebSearch synthesis, not a whole-page fetch, so the article should not assert what one named document says.
- **Reference year**: "Portal Kantor Bersama KPBU menyebut tiga prinsip penganggarannya" → added "per pemeriksaan September 2026", matching the article's other portal citations.
- **Meta description**: 160 → 152 chars (inside the 150–160 GEO sweet spot with truncation margin).
- **Frontmatter**: `word_count` 1665 → **1637** (actual, per `tools/count_words.py`).

## What I flagged (open issues)
- ⚠️ **PMK 68/2024 specifics are dossier-backed, not re-verified verbatim this run** — my one fact-check search confirmed the instrument, its full title, that it governs Availability Payment, and that it revokes a chain of prior PMKs, but the returned summary named PMK 260/**PMK.011/2010** rather than PMK 260/**PMK.08/2016**, and did not surface the "ditetapkan 24 September 2024 / berlaku 18 Oktober 2024" dates. The dossier rates both high-confidence off a direct JDIH fetch and the strategist confirmed independently. *Recommendation*: no article change — but since this claim is the article's E-E-A-T centerpiece, re-confirm the revocation line and the two dates against `jdih.kemenkeu.go.id/dok/pmk-68-tahun-2024` before publication if a search budget is available.
- ⚠️ **`dateModified` absent from the meta block** — §2a asks for it; only 1 of this month's 15 drafts carries it, so it is a batch-wide convention gap, not an article defect. Freshness is otherwise well signalled (`publish_month: 2026-09` plus four in-body "per pemeriksaan September 2026" markers). *Recommendation*: curator/CMS sets `dateModified` at publish time; decide the field convention batch-wide rather than per article.
- ⚠️ **PT PII mention count sits exactly at the ceiling (3 incl. CTA)** — the brief specified 2 placements. The third is the Dharmasraya negative disclaimer, which the dossier's own flag explicitly asks for. *Recommendation*: keep it; a disclaimer that prevents a factual misread is worth the slot. No action.
- ⚠️ **Overlap with August `kpbu-02` is higher than the strategist's 0.053 estimate** — my recount puts it at **0.118** because kpbu-02's history file lists "Availability Payment vs user charge scheme choice" and "Dukungan Kelayakan" as covered subtopics. Still far under the 0.4 threshold and the treatment depth is completely different (one variable inside a seven-axis VfM table vs. the entire article). *Recommendation*: none for this article; note the estimate drift for future strategist runs.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — **0 occurrences**. Lead opens on a concrete pain (a lender's question after feasibility and risk allocation are already done)
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — **0 occurrences of "Selain itu" anywhere**
- [x] No "Penting untuk dicatat / dipahami bahwa" — **0**
- [x] "Dengan demikian" not overused — **0**
- [x] Em-dash count ≤2 — **0**
- [x] Varied paragraph lengths — word counts range 10–95; paragraph burstiness CV **0.503**
- [x] Not every H2 → 3-bullet list — H2 #1 numbered list, #2 table, #3 pure prose, #4 2-bullet list, #5 pure prose
- [x] No generic claims without numbers — 6+ dated specifics present
- [x] No stacked hype adjectives — **0** hits for canggih/terdepan/revolusioner/seamless/terbaik/nomor satu
- [x] No service-dump paragraph — one anchor only (Penjaminan Pemerintah), in the close
- [x] No press-release register — **0** hits for "Dalam rangka" / "Sebagai wujud"

### B. Factual & penjaminan infrastruktur / KPBU spot-check
| Claim | Source check | Verdict |
|---|---|---|
| Perpres 38/2015 Pasal 11(2) lists **three** sources joined by **"dan/atau"**; article's three bolded items reproduce the statutory wording exactly | dossier ✓ (triple-corroborated: peraturan.go.id PDF, jdih.kemenkeu.go.id fullText, pasal.id) — char-matched against dossier verbatim | **pass** |
| Pasal 11(1) quote "meliputi penutupan biaya modal, biaya operasional, dan keuntungan Badan Usaha Pelaksana" | dossier ✓ verbatim — exact match of the quoted fragment | **pass** |
| Pasal 13 ayat (4) a & b quoted verbatim in quotation marks | dossier ✓ (the only ayat re-verified verbatim this cycle) — exact match. Pasal 13(1)–(3) are paraphrased, never quoted, per the dossier flag | **pass** |
| Pasal 12 ayat (5) quote "hanya diberikan bagi KPBU yang mempunyai kepentingan dan kemanfaatan sosial" | dossier ✓ verbatim. Pasal 12(4)'s truncated internal ayat cross-reference is **never quoted** — the article paraphrases it functionally, per the dossier flag | **pass** |
| PMK 68/2024 governs Availability Payment and revoked PMK 260/PMK.08/2016; ditetapkan 24 Sep 2024, berlaku 18 Okt 2024 | dossier ✓ (JDIH direct) + WebSearch 1/3 on jdih.kemenkeu.go.id/peraturan.go.id/kpbu.kemenkeu.go.id — **partial**: title, AP scope and revocation-chain confirmed; the specific 260/PMK.08/2016 line item and the two dates not re-surfaced | **pass (dossier-backed)** — see open flag |
| KPBU PJU Kabupaten Dharmasraya: PKS 19 Sep 2023, 4.520 titik lampu, 5 tahun | dossier ✓ (portal KPBU Kemenkeu press release, high confidence) — inline-attributed "(portal KPBU Kementerian Keuangan, 2023)" | **pass** |

**Reference-year + scope audit** — every figure carries both: 61 proyek / 38 KPBU **per Juni 2026** (project *count*, correctly scoped); no rupiah figure used at all, so the Rp 732 T project-value vs Rp 113 T guarantee-value trap is structurally avoided. PMK 68/2024 dates explicit. Dharmasraya figures dated 2023. Four portal observations dated "per pemeriksaan September 2026". Perpres 38/2015 in-force status dated and hedged to "menurut metadata".

**Negative checks (all clean):**
- No named toll road tied to an AP-vs-tarif variant — **the word "tol" does not appear in the article at all**
- No Pasal 12(4) internal ayat cross-reference quoted; no Pasal 13(1)–(3) verbatim
- No named officials — only institutional roles ("Menteri/Kepala Lembaga/Kepala Daerah", "PJPK"); **0** hits for Direktur/Komisaris
- No Fitch mention; no Danantara mention; no "subsidi" framing
- No assertion that a guarantee covers the badan usaha's commercial risk, and **no claim that a claim has ever been paid** — FAQ #3 limits the role to "menjamin risiko yang menjadi tanggung jawab pemerintah dalam kontrak"

**Article-specific trap #1 (PT PII pays AP / sets tariffs) — cleared at every occurrence:**
- FAQ #3 states it negatively and explicitly: *"Badan usaha penjaminan infrastruktur tidak membayar Availability Payment dan tidak menetapkan tarif"*
- Comparison table attributes the payer to "Anggaran kementerian/lembaga atau daerah selaku PJPK" and the tariff-setter to "PJPK"
- H2 #3 opens "PJPK yang menetapkan tarif awal…"
- Conclusion keeps PT PII on the guarantee layer, never the payment layer

**Article-specific trap #3 (Dharmasraya) — cleared:** presented as a sector example, explicitly excluded from PT PII's portfolio, **no PJPK named** (the kabupaten appears only inside the project's official name; the counterparty is referred to as "PJPK"), and the BUP's corporate name is omitted entirely.

**Article-specific trap #4 (revoked PMK on the ministry portal) — cleared:** stated as a neutral observation, dated, and immediately defused with *"Besar kemungkinan ini keterlambatan pemutakhiran konten"* plus a practical instruction ("Bagi penyusun dokumen lelang, rujukannya tetap PMK 68/2024"). No jab.

**Article-specific trap #5 ("bentuk lainnya" gap) — survived intact:** framed as a documentation gap, not a criticism — *"Opsinya tersedia secara hukum, panduan publiknya belum ada. Mengaku tidak tahu lebih berguna daripada menebak bentuknya."* No speculation about what the third form might contain.

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: **60** chars, "KPBU" at position **23**
- [x] Meta description 140–160 — actual: **152** (was 160)
- [x] Slug ≤60, kebab-case, keyword — actual: `pengembalian-investasi-kpbu-availability-payment-tarif` (**54**)
- [x] H1 contains keyword — "Pengembalian Investasi KPBU: Availability Payment atau Tarif"
- [x] H2 count 4–7 — actual: **7** (5 body + FAQ + Kesimpulan)
- [x] ≥1 question-format H2 (#1, #3); ≥1 honest/counter-conventional H2 (#5)
- [x] Keyword in first 100 words — "KPBU" at ~word 77, plus H1
- [x] Definition snippet near top — **54 words**, blockquote, inside first 150 words
- [x] ≥8 LSI terms — counted: **16** (pengembalian investasi, Availability Payment, Pembayaran Ketersediaan Layanan, tarif pengguna, risiko permintaan/demand risk, Dukungan Kelayakan/VGF, BUP, PJPK, Perpres 38/2015, PMK 68/2024, Perjanjian Kerja Sama, kemampuan bayar pengguna, biaya modal, biaya operasional, indikator layanan, APBD)
- [x] 3 internal links (1 hub + 2 cousins) — `/kpbu` (lead, inline), `/public-private-partnership` (H2 #2), `/pembiayaan-kreatif` (H2 #4). **3 distinct URLs, no "BACA JUGA", zero institute.iigf.co.id**
- [x] ≥1 external authoritative citation — actual: **2 live** (peraturan.go.id, jdih.kemenkeu.go.id) + 2 attributed-inline (portal KPBU Kemenkeu, PPP Knowledge Lab World Bank)
- [x] FAQ 5–7 Q&As — actual: **6**, each **44–54 words**
- [x] ≥1 list + ≥1 table — numbered list (H2 #1), bullet list (H2 #4), comparison table (H2 #2)
- [x] Word count inside band 1.500–1.800 — actual: **1.637** (`tools/count_words.py`), frontmatter synced

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — measured after fixes: **#1 = 50 w · #2 = 50 w · #3 = 47 w · #4 = 51 w · #5 = 52 w**. All five in band; #4 and #5 were fixed this pass
- [x] Each body paragraph makes one independently quotable, verifiable point — spot-checked; the H2 #5 signposting ("Kombinasi lebih dulu." / "Sumber ketiga lebih tipis lagi." / "Soal beban, logikanya lurus.") makes each paragraph extract cleanly on its own
- [~] FAQ parseable for FAQPage schema (H2 → H3 → answer, clean) ✓; `dateModified` **not present** — see open flag. Freshness otherwise carried by `publish_month` + four dated in-body verification markers

### D. PT PII framing discipline (product_matrix.md + style_guide §11)
- [x] Framed as the government-guarantee provider (BUPI / SMV Kementerian Keuangan) — not a lender, investor, contractor, operator, or regulator; Danantara never mentioned
- [x] ≤3 PT PII self-mentions — actual: **3** (2 × "PT PII" + the ptpii.co.id CTA). At ceiling, one above the brief's specified 2; the extra is the dossier-mandated Dharmasraya disclaimer
- [x] No unverifiable superlatives — "satu-satunya BUMN yang memperoleh mandat menerbitkan penjaminan pemerintah bagi proyek KPBU" is the factual formulation expressly allowed by `product_matrix.md`
- [x] Product names match product_matrix / dossier — single anchor: **Penjaminan Pemerintah** (correct for a KPBU-contract / PJPK-obligation topic)
- [x] Closing uses a `company_profile.md` positioning line — approved line #3, paraphrased (see changelog)
- [x] Soft website CTA is the FINAL line, after the conclusion — *"Pembahasan lebih rinci mengenai cakupan penjaminan pemerintah pada proyek KPBU tersedia di ptpii.co.id."* Consultative, not transactional
- [x] Hub link is a natural inline anchor in the lead — "[struktur proyek KPBU](https://www.ptpii.co.id/kpbu)", descriptive, no callout

**Anchor-collision check (both directions, all clear):**
| Destination | This article | August's kpbu-02 / kpbu-03 | This month's kpbu-01 / kpbu-02 |
|---|---|---|---|
| `/kpbu` | struktur proyek KPBU | proyek KPBU · skema KPBU | penyelenggaraan KPBU lintas sektor · tahap penyiapan proyek KPBU |
| `/public-private-partnership` | model PPP yang dipakai secara global | public private partnership | praktik PPP di tingkat internasional · standar penyiapan proyek PPP |
| `/pembiayaan-kreatif` | alternatif pembiayaan di luar APBD | pembiayaan kreatif | opsi pendanaan infrastruktur daerah · skema pendanaan alternatif bagi pemerintah daerah |

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: `kpbu-atau-apbn-value-for-money` (2026-08-kpbu-02)
- Subtopic overlap (Jaccard estimate): **0.118** vs August kpbu-02 · **0.048** vs August kpbu-03 · **0.000** vs August kpbu-01
- Verdict: **distinct angle confirmed** — all well under the 0.4 threshold

**Ownership-boundary verification (the three the brief drew):**
- **August kpbu-03 owns the risk-allocation matrix** — ✓ not rebuilt. Demand risk appears as *one row* in a tarif-vs-AP mechanism table and as the single consequence distinguishing the two routes. No risk taxonomy, no eleven categories, no allocation matrix.
- **August jaminan-pemerintah-02 owns the four-instrument fiscal taxonomy; VGF mechanics must not be built out** — ✓ Dukungan Kelayakan appears in three sentences only, strictly as Pasal 12's consequence chain (affordability-capped tariff → VGF → social-benefit restriction). No sizing, no forms, no application process, no instrument taxonomy.
- **This article owns AP as a recovery-scheme choice, not as a blended-package component** — ✓ the "combination" discussion in H2 #5 is explicitly about combining Pasal 11(2) *recovery sources*, not about blending VGF + penjaminan + AP. It also correctly refuses to invent a hybrid example ("bukan preseden siap pakai").
- Bonus: **0** occurrences of "APBN" and "Value for Money" — the kpbu-02 collision surface is untouched.

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran (twice: pre-edit and post-edit); `kpbu-03.id.quality-input.json` written to `final/`
- [x] AI-detector score **0.00** (< 0.30 threshold), verdict `pass`, **0 flags**, `external_api_used: false`
- [x] Paragraph burstiness CV **0.503** (≥ 0.30). Sentence burstiness 0.849. Top-30 vocab share 0.330 (no concentration tell)
- [x] Plagiarism: 8 candidate passages extracted; **plagiarism score 0.04**

**Web-check disposition (WebSearch budget: 3/3 used, all spent):**
| # | Candidate | Disposition |
|---|---|---|
| 1, 3 | PMK 68/2024 full regulation title | **Exempt** — verbatim regulation title, attributed and linked to JDIH |
| 4 | Sentence containing the peraturan.go.id markdown URL | **Artifact** — our own sentence with a cited link |
| 5, 6 | Portal observations dated "per September 2026" | **Original** — first-hand observations made this research cycle; cannot pre-exist |
| 7 | AP definition (FAQ #1) | **Web-checked (search 2/3)**. Official wording is *"pembayaran secara berkala oleh Menteri/Kepala Lembaga/Kepala Daerah kepada Badan Usaha Pelaksana atas tersedianya layanan Infrastruktur yang sesuai dengan kualitas dan/atau kriteria…"*; the article's is a genuine reword. Longest common run **8 words** (well under 20), and a well-known regulatory definition is exempt regardless. **No hit** |
| 2, 8 | Pasal 12 / Pasal 13 paraphrases | **Exempt** — same class as #7: regulatory-definition paraphrase, attributed to the pasal in-line |
| — | H2 #2 analytical framing sentence (most distinctive original prose) | **Web-checked (search 3/3)** with an exact-phrase query. Zero verbatim matches; the engine fell back to unrelated semantic results, indicating the phrase does not exist on the indexed web. **No hit** |

**Result: no verbatim ≥20-word match on any non-PT PII page.** Search 1/3 was spent on the PMK 68/2024 fact check (section B). No further budget remained, so candidates 2 and 8 were cleared by class analogy to the web-checked #7 rather than by their own lookup — stated plainly here rather than claimed as verified. All eight queries are preserved in `kpbu-03.id.quality-input.json` for a later session.

*(Note: `quality-check.ps1` reports 1.677 words because it counts markdown syntax; the binding counter `tools/count_words.py` returns **1.637**, which is what the frontmatter carries.)*
