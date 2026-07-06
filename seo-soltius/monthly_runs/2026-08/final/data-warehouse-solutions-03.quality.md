---
brief_id: "data-warehouse-solutions-03"
validator_run_date: "2026-06-08"
verdict: "pass"
ai_score: 0.04
plagiarism_score: 0.00
revision_loop: 0
---

# Quality Validator Report — Migrasi Data Warehouse Lama ke Platform Modern: Panduan Brownfield

## Verdict: **pass**

The article clears both gates with wide margins. The heuristic AI detector returned a score of 0.04 (threshold: revise ≥0.30, reject ≥0.50) — the lowest possible risk tier. Paragraph burstiness CV landed at 0.44, one point below the 0.45 target, but the single low-severity flag does not override a 0.04 AI score; the sentence-level burstiness (0.499) and vocabulary concentration (top-30 share 0.298) are both healthy. Web lookup of all eight distinctive passages returned zero verbatim or near-verbatim hits on any public non-Soltius page; plagiarism score is 0.00. Editor recommendation was `approve`. The article is curator-ready.

## AI Detector (heuristic v2.0)

- Score: **0.04** / 1.0 (thresholds: revise ≥0.30, reject ≥0.50)
- Paragraph burstiness (CV): **0.44** (target ≥0.45 — marginally below, flagged low-severity; does not override a 0.04 overall score)
- Sentence burstiness: **0.499** (healthy — above the 0.45 signal level)
- Top-30 vocab share: **0.298** (healthy — low concentration, no vocabulary-lock)
- Flags (1):
  - [low] paragraph-low-variance: Paragraph word-count CV=0.44 (target ≥0.45) — borderline, not blocking at this AI score

Manual cross-check against `style_guide.md` §5 pattern matrix (performed as a secondary verification given the marginal burstiness reading):

- No "Di era digital ini / Seiring perkembangan teknologi / Tidak dapat dipungkiri" opener — absent.
- No "Selain itu" opening two or more consecutive paragraphs — absent.
- No "Penting untuk dicatat / dipahami bahwa" — absent.
- Em-dashes in body prose: 0 (editor fixed ~17 in the prior pass; IMAGE placeholder em-dashes correctly preserved; ≤2 budget met).
- Paragraph length variation: strong — lead paragraph is one long sentence, definition snippet is one block, roadmap paragraph is one short paragraph, body sections mix 1-sentence assertions with 4–6-sentence developed paragraphs. The marginal CV of 0.44 reflects genuine variety compressed by a higher-than-average word count (2,073 words per script; 1,655 per frontmatter — script likely counts YAML and IMAGE placeholder tokens); visually the variation is evident.
- H2 structure: 5 H2s, no two follow the same content shape (definitional, asesmen/inventory, question/connector, phases/table, honest counter-conventional). No every-H2-followed-by-3-bullets pattern.
- No vendor-hype adjectives stacked.
- No generic claims without numbers — concrete dates (2027, 2030, 2040, 2016), ranges (6–9 months, 18–24 months), market figures present.
- No service-dump paragraph.

Assessment: the article passes the North Star test — it reads like a senior SAP data consultant addressing a CIO, with honest caveats (Teradata via Generic JDBC, not dedicated connector; no "zero downtime" promise; explicit "kapan BELUM bermigrasi" section).

## Plagiarism (web lookup of distinctive passages)

8 candidate passages checked via WebSearch.

- Passage 1: "Tabel berikut merangkum aktivitas, risiko utama, dan mitigasinya: | Fase | Aktivitas Utama | Risiko Utama | Mitigasi |..." — results returned generic risk-management and migration planning pages (Microsoft Learn, DJPb Kemenkeu, Virtusindonesia, ScaleOcean); no verbatim table structure match anywhere. **Clean.**
- Passage 2: "SAP BW/4HANA, generasi penerus BW, memiliki mainstream maintenance hingga 31 Desember 2030 dan komitmen pemeliharaan SAP setidaknya hingga 2040..." — results returned SAP official English docs (sap.com, community.sap.com, ibsolution.com, sapinsider.org) confirming the underlying facts; no Indonesian-language verbatim copy of this phrasing. The facts are from a cited authoritative source (BARC/SAP); not plagiarism. **Clean.**
- Passage 3: "Migrasi Data Warehouse Lama ke Platform Modern: Panduan Brownfield — Sebagian besar panduan data warehouse mengasumsikan Anda mulai dari nol." — results returned IBM, Microsoft Learn, Phisoft, 8thinktank, ScaleOcean — none contain this sentence. **Clean.**
- Passage 4: "Asesmen Sebelum Migrasi: Apa yang Harus Diinventarisasi — Sebelum memindahkan apa pun, inventarisasi dulu apa yang Anda miliki." — results returned IOM, Microsoft EF Core docs, Dropbox, AWS, Centraldatatech — none contain this phrasing. **Clean.**
- Passage 5: "Memindahkan data warehouse warisan ke platform modern jarang gagal karena teknologinya." — results returned Microsoft Azure, AWS, Binus MTI, STEKOM, ekrut.com — no verbatim match. **Clean.**
- Passage 6: "Untuk Teradata, dukungan terkonfirmasi melalui Generic JDBC, bukan konektor khusus berlabel Teradata." — results returned SAP Help Portal Generic JDBC Connections page and Teradata docs (the actual authoritative sources); the phrasing is original Bahasa Indonesia synthesis, not a copy. **Clean.**
- Passage 7: "Oracle didukung melalui dedicated connector bawaan, sementara database lain seperti Teradata umumnya dihubungkan via mekanisme Generic JDBC." — results returned SAP Help Portal Oracle Connections page, SAP Help Portal General JDBC page, Glitchdata; the phrasing is an original Indonesian-language synthesis of SAP documentation. **Clean.**
- Passage 8: "Setelahnya tersedia extended maintenance berbayar (premi sekitar dua persentase poin tambahan) hingga 2030." — results returned SAP B1 pricing articles and generic maintenance-cost articles; no verbatim or near-verbatim match. **Clean.**

Aggregate plagiarism score: **0.00**

No passage produced an exact match (≥20 words verbatim) or a partial near-match (>70% word-order overlap) on any public non-Soltius URL. The two passages that touch SAP official documentation phrasing (Passages 2 and 6–7) are factual claims cited to BARC/SAP — intentional attribution, not plagiarism, and excluded by protocol.

## Loop status

This is revision loop 0. Verdict is `pass`; no writer revision loop triggered. Article is curator-ready.
