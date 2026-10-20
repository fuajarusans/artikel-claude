---
brief_id: "sertifikasi-kpbu-01"
editor_run_date: "2026-09-22"
recommendation: "approve"
overall_score: 9
ai_score: 0.04
plagiarism_score: 0.03
---

# Editor QC Report — Sertifikasi KPBU Sesuai Peran: ASN, Konsultan, Akademisi

## Recommendation
**approve**

This is the strongest kind of article for this cluster: it enters from the reader's job, and its spine is a regulatory scope correction rather than a credential catalogue. The number-one check — the narrow scope of Permen PPN/Kepala Bappenas No. 7 Tahun 2023 Pasal 13 ayat (7) — holds row by row and paragraph by paragraph, in both directions: the two bound parties (tenaga ahli employed by konsultan Badan Usaha / konsultan perorangan assisting simpul KPBU) are clearly bound, and the four unbound groups (Badan Penyiapan, akademisi, simpul KPBU/PJPK themselves, Badan Usaha Pelaksana) are clearly not, with the "Badan Usaha Pelaksana ≠ konsultan Badan Usaha" trap named explicitly. I made nine in-place fixes; two of them were substantive. First, the main table's consultant row read standalone as though every konsultan Badan Usaha's tenaga ahli is bound anywhere — a real GEO risk, since that row is the block an AI engine is most likely to lift, so I re-scoped it to "yang membantu simpul KPBU". Second, the conclusion said IIGF Institute bridges practice "termasuk lewat program Sertifikasi CP3P", which left a thin reading in which the Institute runs the certification; it now reads "lewat penyelenggaraan pelatihan Sertifikasi CP3P", with "ATO yang diakuinya hanya menyelenggarakan pelatihan" immediately before it. The fee sentence also generalized one provider's published price list into a nationwide range; that is gone. Originality is clean (ai_score 0.04; no verbatim hit on the three passages I could afford to search). Open flags are minor and none blocks commit: a homepage-level rather than deep-link JDIH citation, an FAQ count sitting at the band floor, and a plagiarism search leg that ran at 3 of 8 candidates because of the query budget.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Zero em-dashes, zero §5 phrase patterns. Sentence burstiness 0.653; paragraph lengths run 20–89 words and 1–8 sentences. Brochure register — the highest risk in this cluster — does not appear: no programme pitch before the close. |
| Factual & KPBU/PPP & sertifikasi accuracy | 9 | All 7 spot-checked claims pass. Every figure carries a reference year; the one fee carries "indikatif per publikasi 2026" and is stated as a training + exam package. BNSP claim attributed to the provider and marked not-found in the public registry, dated September 2026. |
| On-page SEO compliance | 9 | Meta title 47 chars (keyword at 0), description 154, slug 35. 22 distinct LSI terms. 7 H2s inside the 4–7 band. |
| GEO extractability (§2a) | 9 | 40–60-word direct answer after all five body H2s (43 / 47 / 59 / 47 / 43, URLs excluded). Definition snippet 54 words in the first ~150. `date_modified` added. |
| IIGF Institute framing discipline | 9 | Exactly 3 self-mentions (2 visible + the CTA domain line). APMG owns/tests/awards; the Institute is PT PII's knowledge-management unit and a directory-listed ATO. No superlative, no named individual, no Kantor Bersama membership claim. |
| Internal linking | 10 | Exactly 3 inline anchors, all `institute.iigf.co.id`: hub in the lead, then the two briefed cousins at the two points where the argument actually needs them. No "BACA JUGA", no `gagas.co.id`, no `ptpii.co.id`. |
| FAQ quality | 8 | 5 Q&As, answers 40–49 words, all FAQPage-parseable and self-contained. At the floor of the 5–8 band; three brief candidates were dropped (two of them belong to other articles in the cluster anyway). |
| Originality (plagiarism + AI-detector) | 9 | ai_score 0.04 / verdict pass. No verbatim ≥20-word hit on the three highest-risk passages searched. Deducted one point for the unchecked 5 candidates. |

## What I fixed (changelog)
- **Table row 2 scope precision (substantive).** "Konsultan Badan Usaha dan konsultan perorangan" → "…yang membantu simpul KPBU", and "Tenaga ahlinya wajib bersertifikasi" → "Tenaga ahli yang dipekerjakannya wajib bersertifikasi". Read standalone — which is exactly how an AI engine lifts a table row — the old wording generalized Pasal 13 ayat (7) to consultants working for private sponsors, who are not covered.
- **Closing accreditation wording (substantive).** "pelatihannya diselenggarakan organisasi terakreditasi" → "ATO yang diakuinya **hanya** menyelenggarakan pelatihan"; "termasuk lewat **program** Sertifikasi CP3P" → "termasuk lewat **penyelenggaraan pelatihan** Sertifikasi CP3P". The CTA anchor "Sertifikasi CP3P" stays, once, in the close.
- **Fee claim de-generalized.** "Pelatihan CP3P di Indonesia berada pada kisaran Rp 19.000.000 sampai Rp 21.000.000 per level" → "Paket pelatihan sekaligus ujian CP3P dipublikasikan pada kisaran …, angka indikatif per publikasi 2026 yang dapat berubah dan perlu dicek ke halaman resmi penyelenggara." The dossier's source is a single provider's published list, not a national survey.
- **"ATO pertama di Indonesia sejak 2019" now carries its evidence.** Added the dossier-backed attribution (ATO = "penyelenggara yang diakui APMG dan tercantum pada direktori resminya"; the Institute "tercatat di direktori itu"), and split off the classroom observation that had been bolted onto the same sentence with "dan".
- **FAQ #3 raised 39 → 48 words** (it was under the 40-word floor) using the dossier's identical-audience-wording fact, which also sharpens the answer.
- **Soft website CTA rewritten** so it is no longer a structural clone of the closing line in `-02`, `-03`, and `-04` (all four shared the "… dapat Anda telusuri … di institute.iigf.co.id" skeleton).
- **`date_modified: "2026-09-22"` added** to the meta block — GEO freshness signal, consistent with the other September finals.
- **Register and precision polish:** "konsultan pembantu simpul KPBU" → "konsultan yang membantu simpul KPBU" (2×; "pembantu" is off-register in Indonesian); "Dua pihak yang justru paling sering merasa terikat" → "Dua kelompok…" (the sentence then names three entities across two groups); "Bagi mereka" → "Bagi pemegang fungsi itu" (antecedent was "fungsi", not people).
- **`word_count` synced** 1495 → 1537 after edits.

## What I flagged (open issues)
- ⚠️ **Permen citation resolves to the JDIH homepage** (`https://jdih.bappenas.go.id/`) rather than the regulation record. Authoritative (the issuing ministry's own JDIH) so not a fail, but weak as a citation target. *Recommendation*: at refresh, swap to the deep link already verified elsewhere in this batch — `https://peraturan.bpk.go.id/Details/271431/permen-ppnkepala-bappenas-no-7-tahun-2023` (used by `capacity-building-pembiayaan-kreatif-02`). I did not swap it blind; I had no live-fetch budget left to confirm the URL resolves.
- ⚠️ **Plagiarism leg degraded: 3 of 8 candidates web-checked** (query budget capped at 3). *Recommendation*: none needed. The 5 unchecked candidates are, by construction, low risk — three are restatements of the regulation (a hit on the law itself is ignorable), one is a table header, one is a translation of the APMG wording the article already cites.
- ⚠️ **First-party classroom claim is unverifiable externally by design**: "Di ruang kelas, keempat profil di atas biasanya hadir bercampur." Institutionally framed, hedged with "biasanya", and explicitly sanctioned by the brief's first-party angle. *Recommendation*: leave; flag for the client if they want it removed.
- ⚠️ **Paragraph burstiness CV 0.383** — clears the editor threshold (≥0.30) comfortably but sits under the script's 0.45 comfort target; it is the single low-severity flag the scanner raised. Sentence burstiness 0.653 more than compensates. *Recommendation*: no action.
- ⚠️ **Fee range confidence is medium in the dossier** (the client site's own pages disagree on schedules, though the price itself was stable across accesses). Now labelled and pointed at the official page. *Recommendation*: re-verify at the next content refresh.
- ⚠️ **Mandated compliance formula repeats across the cluster.** "APMG International memiliki, menguji, dan menganugerahkan kredensial CP3P" (7 words) also appears in `sertifikasi-kpbu-04`. Kept deliberately — this is the required safe-harbour wording from `company_profile.md` Rule 4, and varying it invites drift. *Recommendation*: accept as boilerplate.
- ⚠️ **FAQ sits at the band floor (5 of 5–8).** Three brief candidates were dropped: "tenaga ahli KPBU menurut ketentuan", "harus mulai dari Foundation?" (that rule belongs to August `-03`), "KPBU dan PPP sama?". *Recommendation*: if the curator wants headroom, "Apa itu tenaga ahli KPBU menurut ketentuan yang berlaku?" is the one worth adding — it is on-angle and the dossier already drafted it.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — 0 hits; lead opens on a concrete scene (four people, four wrong conclusions)
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — 0 occurrences anywhere
- [x] No "Penting untuk dicatat / dipahami bahwa" — 0 occurrences
- [x] "Dengan demikian" not overused — 0 occurrences
- [x] Em-dash count ≤2 — **0**
- [x] Varied paragraph lengths — 1–8 sentences, 20–89 words; sentence burstiness 0.653
- [x] Not every H2 → 3-bullet list — H2 #1/#2/#4 are prose-led; one bullet list (H2 #3), one numbered list (H2 #5), one table (H2 #2)
- [x] No generic claims without numbers — dates, article numbers, gazette number, fee range, ATO year all present
- [x] No stacked hype adjectives — none
- [x] No service-dump paragraph — one anchor only (Sertifikasi CP3P), in the close
- [x] No brochure register — the cluster's signature failure mode; no "daftar", no "jangan lewatkan", no programme pitch before `## Kesimpulan`
- [x] No press-release register — no "dalam rangka", no "sebagai wujud komitmen"

### B. Factual & KPBU/PPP & sertifikasi spot-check
| Claim | Source check | Verdict |
|---|---|---|
| Pasal 13 ayat (7) binds only tenaga ahli employed by konsultan Badan Usaha / konsultan perorangan assisting simpul KPBU — not all ASN, not Badan Penyiapan, not akademisi, not Badan Usaha Pelaksana | dossier ✓ (verbatim from the official text, BN RI 2023 No. 777) + orchestrator confirmation | pass |
| Permen PPN/Kepala Bappenas No. 7 Tahun 2023 ditetapkan 22 Sep 2023, diundangkan & berlaku 29 Sep 2023, Berita Negara RI 2023 No. 777 | dossier ✓ (Pasal 98 + closing block) | pass |
| APMG uses word-for-word identical audience wording for Preparation and Execution ("sebagian besar pejabat sektor publik, praktisi, dan penasihat atau konsultan mereka") | dossier ✓ verbatim from `ppp-certification.com/certification`, accessed 2026-09-17 — the article's whole thesis rests on this and it holds | pass |
| CP3P training + exam package Rp 19.000.000–Rp 21.000.000 per level, indicative per 2026 publication | dossier ✓ / product_matrix ✓ / company_profile ✓ — label "indikatif" + year present, stated as package not exam-only, reader pointed to the official page | pass |
| PJPK = Penanggung Jawab Proyek Kerja Sama; menteri / kepala lembaga / kepala daerah, atau BUMN/BUMD (Perpres 38/2015) | dossier ✓ (Kemenkeu JDIH glossary) **+ independently corroborated** during this run's search leg by `kpbu.kemenkeu.go.id/faq` and DJKN Kemenkeu, which state the same definition. The dossier's warning about the wrong expansion "Pejabat Pengguna Anggaran" — that error does **not** appear in the article | pass |
| BNSP licensing for an LSP in the KPBU field is the provider's own claim and was not found in the public BNSP registry as of September 2026 | dossier ✓ — attributed, hedged, dated, and confined to one short paragraph per the brief's scope limit. Only the confirmed tier is implied; **"Ahli Madya" / "Ahli Utama" appear nowhere** | pass |
| IIGF Institute is an APMG-listed ATO, the first in Indonesia since 2019 | company_profile ✓ + dossier ✓ (`ppp-certification.com/training-providers`); the directory basis is now stated inline | pass |

**Hard-fail sweep (this month's mandatory list):** APMG owns/tests/awards, Institute delivers training — correct in all four places its name sits near CP3P, including the CTA line ✓ · "sertifikasi KPBU" explicitly named as a search phrase, not a credential ("Itu cara orang mencari, bukan nama satu kredensial resmi") ✓ · CP3P developer list absent, so no MIF / no dropped AfDB exposure ✓ · Kantor Bersama KPBU absent ✓ · non-sequential Preparation/Execution stated once as a supporting fact ✓ · exam formats absent, **"esai" 0 hits** ✓ · Execution chapter numbers never pinned (only "Bab 2–5" for Preparation and "Bab 1 dan glosarium" for Foundation) ✓ · Kepmen PPN 218/2019 absent ✓ · no batch dates or class schedules ✓ · no named individuals ✓ · no disparagement of other providers ✓ · no pra-studi kelayakan study count ✓ · "infrastruktur / KPBU / PT PII" context sits beside every "IIGF" ✓.

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: **47** chars / keyword at position **0**
- [x] Meta description 140–160 — actual: **154**
- [x] Slug ≤60, kebab-case, keyword — actual: `sertifikasi-kpbu-sesuai-peran-kerja` (35)
- [x] H1 contains keyword — "Sertifikasi KPBU Sesuai Peran: ASN, Konsultan, Akademisi"
- [x] H2 count 4–7 — actual: **7** (5 body + FAQ + Kesimpulan)
- [x] ≥1 question-format H2 (#1, #3); ≥1 honest/counter-conventional H2 (#5, "Peran yang justru belum terlayani oleh pemetaan mana pun")
- [x] Keyword in first 100 words — appears at ~word 85, as the hub anchor
- [x] Definition snippet near top (40–60 words) — **54 words**, blockquote, inside the first ~150
- [x] ≥8 LSI terms — counted: **22**
- [x] 3 internal links (1 hub + 2 cousins) — destinations: `institute.iigf.co.id/` (lead) · `/e-library/lainnya/77/studi-kasus-…` (H2 #4) · `/capacity-building` (H2 #5)
- [x] ≥1 external authoritative citation — actual: **2** (`ppp-certification.com/certification`, `jdih.bappenas.go.id`), one of them APMG
- [x] FAQ 5–7 Q&As — actual: **5** (at the floor; answers 40–49 words)
- [x] ≥1 list + ≥1 table — 1 bullet list, 1 numbered list, 1 table
- [x] Word count inside the brief's band (1.200–1.600) — actual: **1537** (`tools/count_words.py`), frontmatter synced
- [x] Keyword density natural — 7 exact-phrase occurrences over 1537 words (~0.9%), no stuffing

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — measured with URLs excluded: **43 / 47 / 59 / 47 / 43**. (The writer reported 41–57; H2 #3 was actually 58 before my edit and 59 after — still inside the band, but the report was slightly off.)
- [x] Each body paragraph makes one independently quotable, verifiable point — spot-checked all 22 body paragraphs; the weakest was the ATO paragraph, which welded two unrelated facts together with "dan" and has been split
- [x] FAQ parseable for FAQPage schema (`###` question → single answer paragraph); `date_modified: "2026-09-22"` now in the meta block
- [x] Main table readable row-by-row without surrounding context — this was the reason for the row-2 re-scope

### D. IIGF Institute framing discipline (product_matrix.md + style_guide §11)
- [x] Framed as PT PII's knowledge-management unit and a directory-listed APMG ATO — never owner, awarder, accreditor, university, or independent legal entity
- [x] ≤3 IIGF Institute self-mentions — actual: **3** (H2 #2 factual aside · `## Kesimpulan` positioning line · the CTA domain line, which counts per §11). At the cap, not over.
- [x] No unverifiable superlatives — "ATO pertama di Indonesia sejak 2019" is the permitted factual claim and now carries its directory basis
- [x] Programme names match product_matrix / dossier — one anchor only: **Sertifikasi CP3P**, once, in the close
- [x] Closing uses a company_profile.md positioning line — "Sebagai unit manajemen pengetahuan PT PII, IIGF Institute menjembatani praktik penjaminan infrastruktur dengan dunia akademik dan pembuat kebijakan."
- [x] Soft website CTA is the FINAL line, after `## Kesimpulan`, consultative — "Bila pemetaan peran di atas sudah jelas, langkah berikutnya bisa dimulai dengan menengok daftar program pelatihan dan kajian KPBU di institute.iigf.co.id." No "daftar sekarang".
- [x] Hub link is a natural inline anchor in the lead ("hampir semua penjelasan tentang [sertifikasi KPBU]…") — no "BACA JUGA" callout

### E. Anti-cannibalization spot check
- Prior articles for this keyword: 4 August publications (`sertifikasi-kpbu-tiga-jalur`, `-jalur-nasional-vs-internasional`, `-alur-tiga-level-cp3p`, `-kapan-belum-jadi-prioritas`) + 3 September siblings (`-02` penganggaran, `-03` pola soal, `-04` masa berlaku).
- **Textual check (this was the specific instruction).** 8-gram shingle comparison with URLs stripped: vs all four August articles the maximum shared shingle count is **1**, and it is the regulation's name ("permen ppn kepala bappenas no 7 tahun 2023"). vs the September siblings the maxima are 3 / 7 / 4, and every one is either the pre-approved positioning line or the shared CTA skeleton — the latter is now reduced for `-01` by the rewritten final line. **No FAQ answer and no closing paragraph shares an 8-word run with any sibling.** The 34-word verbatim FAQ duplication reported between two August articles does not recur here.
- **Topical check.** The three-category map is absent (only the one-sentence "'sertifikasi KPBU' is a search phrase, not a credential" hook, which the brief permits). The national-vs-international comparison is absent — the national path gets one short attributed paragraph with no comparison table. The prerequisite/ordering rule appears exactly once, as a supporting fact. Cost is one sentence, leaving `-02` intact. Exam format and validity period are untouched, leaving `-03` and `-04` intact.
- Subtopic overlap (Jaccard estimate): **0.00–0.05** vs the closest prior.
- Verdict: **distinct angle confirmed.** Entry axis (reader's role), output (a personal decision), and the regulatory-scope correction are unique to this article in the cluster.

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran on the **saved final**; `sertifikasi-kpbu-01.id.quality-input.json` written (re-run after edits)
- [x] AI-detector score < 0.30 — actual: **0.04**, verdict `pass`. One low-severity flag only (`paragraph-low-variance`). No revise/reject threshold approached; no re-run needed.
- [x] Paragraph burstiness CV ≥ 0.30 — actual: **0.383** (script's own comfort target is 0.45; sentence burstiness **0.653**, top-30 vocab share 0.33)
- [x] Plagiarism: distinctive passages web-checked; **no non-IIGF-Institute verbatim hit ≥20 words** — plagiarism score: **0.03**
  - Searched 1/3 — the lead hook ("Empat orang bisa duduk di ruang pelatihan yang sama…"): **no match anywhere**; results were unrelated Indonesian permutation maths. Original prose.
  - Searched 2/3 — "tidak menyebut badan usaha calon peserta lelang maupun Badan Usaha Pelaksana": **no verbatim match**; results were unrelated auction/procurement regulations.
  - Searched 3/3 — the simpul KPBU definition: government sources (`kpbu.kemenkeu.go.id/faq`, DJKN Kemenkeu) describe the same concept in **different wording**. Not a hit, and a well-known regulatory definition in any case. Bonus: this independently corroborated the PJPK expansion in FAQ #1.
  - **Degraded coverage, stated honestly:** the environment's 3-query budget was spent, so 5 of 8 candidates went unchecked. Those five are three restatements of the regulation, one table header, and one translation of the APMG wording the article cites — the lowest-risk tranche by construction. This did not affect the verdict.
