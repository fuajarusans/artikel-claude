---
brief_id: "sap-clean-core-03"
validator_run_date: "2026-06-08"
verdict: "pass"
ai_score: 0.04
plagiarism_score: 0.00
revision_loop: 0
---

# Quality Validator Report — Clean Core untuk Pengguna Bisnis: Kustomisasi SAP Tanpa Coding lewat Key-User Extensibility

## Verdict: **pass**

The article clears both gates comfortably. The AI heuristic score of 0.04 is well below the 0.30 revise threshold; the one low-severity flag (paragraph burstiness CV 0.418 vs target 0.45) is borderline and does not change the verdict on its own — sentence burstiness is strong at 0.865 and top-30 vocab share is low at 0.331, both confirming varied, human-patterned writing. Plagiarism web lookup returned zero exact or partial matches across all 8 candidate passages on non-Soltius public pages; aggregate plagiarism score is 0.00. The editor's `recommendation: approve` is confirmed. Article is curator-ready.

## AI Detector (heuristic v2.0)
- Score: **0.04** / 1.0 (thresholds: revise >=0.30, reject >=0.50)
- Paragraph burstiness (CV): **0.418** (target >=0.45 — marginally below; low-severity flag only)
- Sentence burstiness: **0.865** (strong — well above the 0.45 floor)
- Top-30 vocab share: **0.331** (low — indicates varied vocabulary, not AI-concentrated)
- Flags (1):
  - [low] paragraph-low-variance: Paragraph word-count CV=0.418 (target >=0.45)

**Manual review note on the low paragraph-burstiness flag:** A visual scan of the body confirms paragraph lengths do vary meaningfully — there are 1-sentence paragraphs (e.g., the "Inilah yang sering disalahpahami" para; the "Satu keunggulan praktis" para), 2-sentence paras, and 5-6 sentence blocks in the comparison section and the Kesimpulan. The CV reading of 0.418 is partly depressed by the FAQ section's uniform Q&A structure and the frontmatter YAML block being counted in the word distribution. The underlying prose rhythm is human and varied; this flag does not warrant a revise verdict per the protocol (the hard floor triggering auto-reject is CV < 0.30; 0.418 is clearly above it).

## Plagiarism (web lookup of distinctive passages)
- 8 candidate passages checked
- Passage 1: "developer extensibility hanya didukung untuk aplikasi berbasis RAP (ABAP RESTful Application Programming Model) dan tidak mencakup SAP GUI maupun SOAP API" — clean. SAP Learning and community pages confirm the underlying SAP doctrine in English; no Indonesian-language article reproduces this sentence. No match.
- Passage 2: "semua yang mungkin di SAP S/4HANA Public Edition juga mungkin di Private Edition maupun on-premise" — clean. This is an attributed quotation from SAP Learning, presented in quote marks with source noted. Comparison pages (pikon.com, spinnakersupport.com, SAP help.sap.com) discuss edition differences in English; none reproduce this Indonesian sentence. Intentional citation, not plagiarism.
- Passage 3: "Pusat dari semua ini adalah aplikasi Custom Fields and Logic (CFL), nama aplikasi Fiori yang dikonfirmasi aktif per Juni 2026" — clean. SAP Learning and community pages cover CFL in English; no Indonesian source reproduces this sentence. Original phrasing.
- Passage 4: "Karena perubahan key-user tidak menyentuh kode inti SAP, upgrade berjalan tanpa harus mengerjakan ulang kustomisasi" — clean. The Indonesian page 8thinktank.com discusses SAP BAdI and upgrade safety using different phrasing ("tidak menyentuh kode standar SAP"); word-order overlap is well below the 70% partial-match threshold. No match.
- Passage 5: "Ambang praktisnya bisa Anda pakai sendiri: jika kebutuhan masih sebatas menambah field, menata tampilan, atau aturan validasi/kalkulasi, key user sanggup menanganinya" — clean. No relevant results found; phrase appears unique to this article.
- Passage 6: "Custom Business Objects: membuat entitas data yang belum ada di standar SAP, lengkap dengan tabel, aplikasi Fiori, dan API sederhana" — clean. SAP community and learning pages cover Custom Business Objects in English; no Indonesian article reproduces this sentence.
- Passage 7: FAQ heading "Apa itu key-user (in-app) extensibility di SAP S/4HANA?" — clean. The question format is standard Indonesian SEO phrasing and the answer text does not match any public Indonesian source. SAP Learning titles appear in English only.
- Passage 8: "satu dari tiga jalur perluasan yang sah: key-user extensibility, developer extensibility (ABAP Cloud), dan side-by-side extensibility di SAP BTP" — clean. SAP community pages confirm the three-path model in English; no Indonesian article reproduces this sentence structure.
- **Aggregate plagiarism score: 0.00**

No passage has a verbatim hit of 20+ words on any non-Soltius public page. All concept-level matches are to authoritative SAP official sources (SAP Learning, SAP News Center, SAP Community), which are the article's declared citations — these are intentional references, not plagiarism.

## Loop status
This is revision loop 0. Verdict is `pass` — no revision loop required. Article proceeds directly to curator.
