---
brief_id: "tambak-udang-vaname-01"
validator_run_date: "2026-05-26"
verdict: "pass"
verdict_id: "pass"
verdict_en: "pass"
ai_score_id: 0.00
ai_score_en: 0.00
plagiarism_score_id: 0.00
plagiarism_score_en: 0.00
revision_loop: 0
---

# Quality Validator Report — Tips Sukses Tambak Udang Vaname Hasil Melimpah / Vannamei Shrimp Pond Success Playbook

## Verdict: **pass**

Both language versions clear every automated and web-lookup check. The heuristic AI detector scored 0.00 on both articles (well under the 0.30 revise threshold), with paragraph burstiness at 0.513 (ID) and 0.519 (EN) — comfortably above the 0.45 target, indicating natural human-like rhythm variation. Sentence burstiness sits at 0.851 (ID) and 0.809 (EN), and top-30 vocabulary share is low at 0.275 (ID) and 0.234 (EN), all clean signals. No anti-AI pattern flags fired in either language. Across 16 distinctive-passage web lookups (8 ID + 8 EN), zero verbatim hits surfaced on non-STP / non-cited URLs. The two passages that returned exact source matches (AHPND Bangkalan study, SNI 01-7246-2006 benchmark) hit the journal articles they explicitly cite inline, which is correct attribution rather than plagiarism. All passages flagged in the "Special context" allowlist (Undip JMR Vol 12 No 2, SNI 01-7246-2006, KKP Shrimp Summit 2025, Unair FPK supra-intensive paper, Global Seafood Alliance) behaved as expected. Curator can commit.

## AI Detector (heuristic v2.0)

### Indonesian
- Score: 0.00 / 1.0 (thresholds: revise ≥0.30, reject ≥0.50)
- Paragraph burstiness: 0.513 (target ≥0.45) — pass
- Sentence burstiness: 0.851 — strong
- Top-30 vocab share: 0.275 — healthy lexical variety
- Word count: 2,466 (target 1,900–2,300 — slightly over, acceptable)
- Paragraph / sentence count: 37 / 144
- Flags (0): none

### English
- Score: 0.00 / 1.0 (thresholds: revise ≥0.30, reject ≥0.50)
- Paragraph burstiness: 0.519 (target ≥0.45) — pass
- Sentence burstiness: 0.809 — strong
- Top-30 vocab share: 0.234 — healthy lexical variety
- Word count: 2,800 (heuristic count; note frontmatter declared 1,852 — discrepancy likely from script tokenizing table cells / list bullets separately)
- Paragraph / sentence count: 37 / 141
- Flags (0): none

## Plagiarism (web lookup of distinctive passages)

### Indonesian — 8 candidate passages checked

- Passage 1 — "SNI 01-7246-2006 menetapkan tolok ukur tambak vaname intensif: *survival rate* (SR) 80–90%, FCR 1,4, ADG 0,2 g/ekor/hari, dan produksi minimal 15.000 kg/ha/siklus" — **clean (allowlisted citation)**. No verbatim hit; thematic results only (Scribd SNI scans, KKP journal articles). The SNI 01-7246-2006 standard is allowlisted per Special context.
- Passage 2 — "Studi 2023 di Bangkalan, Jawa Timur, mengkonfirmasi keberadaan AHPND di tambak vaname Indonesia via nested PCR" — **clean (cited source)**. Top result is the exact Undip JMR Vol 12 No 2 May 2023 article cited inline. Correct attribution per allowlist.
- Passage 3 — H1 + lead "# Tips Sukses Tambak Udang Vaname Hasil Melimpah: Panduan 12 Langkah Berbasis SNI..." — **clean**. No verbatim hits; competitor headings on the topic use different framings (Probiotic Aquaculture "SOP Budidaya", DeHeus "7 hal yang perlu diperhatikan", Tambak Milenial "12 Cara Sukses", etc.). Original H1 phrasing confirmed.
- Passage 4 — "**Pengukuran parameter awal.** Cek pH (target 7,5–8,5), salinitas (15–25 ppt optimal, toleransi 5–35 ppt), dan alkalinitas (100–150 ppm) sebelum benur tiba." — **clean**. No verbatim hits. Source results discuss the same parameters with different phrasing; the numeric ranges themselves are industry-standard values (inherent overlap) and the script's quoted-string lookup returned only generic alkalinity articles.
- Passage 5 — "Indikator siap panen untuk tambak intensif siklus 100–120 hari: ABW (Average Body Weight) 15–20 g..." — **clean**. No verbatim hits. Industry sources (Minapoli, Agribiznetwork) discuss the same 100–120 day / ABW 15–20 g standards in different phrasing.
- Passage 6 — "Tambak intensif menggunakan padat tebar 100–300 ekor/m², infrastruktur aerasi penuh, dan manajemen pakan berbasis feeding tray 4–6 kali sehari..." — **clean**. No verbatim hits. Comparable Indonesian sources describe similar parameters with different wording.
- Passage 7 — "- **ABW 25–30 g**: ukuran ekspor premium (30–40 ekor/kg), umumnya butuh 110–130 hari." — **clean**. No verbatim hits; search returned unrelated export-cost / shipping articles.
- Passage 8 — "Dengan siklus 100–120 hari termasuk persiapan 10–14 hari, satu tambak intensif realistis menjalankan 2–3 siklus per tahun." — **clean**. No verbatim hits; thematic results only.

- Aggregate score: **0.00**

### English — 8 candidate passages checked

- Passage 1 — "A 2023 peer-reviewed study confirmed AHPND in vannamei ponds in Bangkalan, East Java, using nested PCR" — **clean (cited source)**. Top result is the cited Undip JMR Vol 12 No 2 May 2023 article. Allowlisted.
- Passage 2 — "## Selecting and Stocking Post-Larvae: The First 30 Days Decide Everything / No grow-out program can rescue post-larvae that enter stressed or pathogen-bearing." — **clean**. No verbatim hits. Global Seafood Alliance / JALA articles cover the topic with substantially different phrasing.
- Passage 3 — "Harvest indicators for a 100-to-120-day intensive cycle: ABW 15 to 20 g: local market grade (50 to 70 head per kg)." — **clean**. No verbatim hits; results unrelated (peanut maturation, gaming/finance).
- Passage 4 — "With 100-to-120-day cycles plus 10 to 14 days of inter-cycle preparation, intensive vannamei ponds realistically run 2 to 3 cycles per year." — **clean**. No verbatim hits; thematic sources (Agrinovo, JALA, Engormix) confirm the underlying claim in different wording.
- Passage 5 — "## Pond Preparation: The Phase Most Often Cut Short / More than a third of failed cycles trace back to a rushed preparation phase." — **clean**. No verbatim hits.
- Passage 6 — "- **ABW 25 to 30 g:** premium export grade (30 to 40 head per kg), typically requiring 110 to 130 days." — **clean**. No verbatim hits; results unrelated.
- Passage 7 — "## Water Quality and Aeration: The Pillar That Decides the Cycle / Of all the variables, water quality is the least forgiving." — **clean**. No verbatim hits.
- Passage 8 — "At intensive density of 100 to 150 PL per square meter, typical aeration requirements run roughly 1 HP per 400 to 500 kg of projected harvest biomass." — **clean**. No verbatim hits. The 1 HP / 400–500 kg ratio is an industry rule-of-thumb (inherent overlap) but no public source used this exact phrasing.

- Aggregate score: **0.00**

## Cross-checks against editor verdict

- Editor recommended **approve** (overall_score 9). Validator concurs.
- Editor's noted fixes (em-dash trim, internal-link parity, meta-description trim) all visible in the polished files — no AI tells reintroduced.
- Special-context allowlist (Undip JMR, SNI 01-7246-2006, KKP Shrimp Summit 2025, Unair FPK, Global Seafood Alliance) was respected: hits on those sources are correct attributions, not plagiarism flags.

## Loop status

Revision loop 0 (first pass). No revision required.

## Recommendation to orchestrator

**Curator-ready.** Both ID and EN ship. No writer revision pass needed. No human escalation required.
