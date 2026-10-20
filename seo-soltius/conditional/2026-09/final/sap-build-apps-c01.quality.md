---
brief_id: "sap-build-apps-c01"
validator_run_date: "2026-09-01"
verdict: "pass"
ai_score: 0.08
plagiarism_score: 0.00
revision_loop: 0
batch: "conditional-2026-09 (style_addendum.md §7 overrides applied — word band 800–1000 via cleaned-prose count, FAQ 2–3, internal links 2, zero image placeholders + no images.json = N/A by design; all other checks in full)"
---

# Quality Validator Report — SAP Build Apps: Membuat Aplikasi Bisnis dengan Pendekatan Low-Code

## Verdict: **pass**

The article clears both gates it owns. The AI-detector heuristic returns **0.08** (well below the 0.30 revise line) with no phrase-pattern tells and healthy sentence-level rhythm (CV 0.659). Web lookups of every distinctive passage returned **zero verbatim matches** on any non-Soltius page — the only overlaps are intentional soltius.co.id self-references and inherently generic SAP product descriptions, both excluded by scoring rules. All load-bearing facts re-verified against SAP-official sources (deprecation 23 Mar 2026, contract-duration access, unified path forward, AppGyver 2021, BTP→BAIP mid-2026, GigaOm 3x/59%). Structure, EYD, citations, and Soltius framing are intact. Batch overrides confirmed compliant. Curator-ready.

## AI Detector (heuristic v2.0)
- Score: **0.08** / 1.0 (thresholds: revise ≥0.30, reject ≥0.50) → **pass**
- Paragraph burstiness (CV): **0.301** (target ≥0.45; strong-AI-tell line <0.30) — LOW flag, sits *above* the 0.30 uniformity floor
- Sentence burstiness (CV): **0.659** (healthy — well above 0.45)
- Top-30 vocab share: **0.363** (target <0.30) — LOW flag
- Raw script word_count: 914; paragraphs: 15; sentences: 50
- Flags (2, both low, none actionable):
  - [low] `paragraph-low-variance`: paragraph CV 0.301. Expected artifact of a dense 887-word piece whose two structured blocks (a 6-step numbered list and a 3-row decision table) compress prose-paragraph length spread. Sentence-level burstiness (0.659) confirms genuine rhythm variety; re-read confirms human voice — lead opens on concrete pain (IT backlog), paragraphs run 1–4 sentences, the short opener "Konteksnya lebih luas." breaks cadence. Not an AI tell.
  - [low] `vocab-repetition`: top-30 words = 36.3%. Topic concentration inherent to a single-product article — "SAP", "Build", "Apps", "aplikasi", "low-code" necessarily recur. Not statistical uniformity. Acceptable.
- No high/medium AI-pattern flags fired: no "penting untuk dicatat", no era-filler, no "dengan demikian"/"selain itu" overuse, em-dash count = 0.

## Plagiarism (web lookup of distinctive passages)
8 candidate passages extracted by the script; 6 distinct prose passages checked via quoted WebSearch (2 candidates were markdown-heading/frontmatter artifacts, not prose — skipped). No passage carried a verbatim hit ≥20 words on a non-Soltius site.

- ✅ Lead — "Permintaan aplikasi internal menumpuk di antrean tim IT…" — clean (only generic IT-helpdesk pages; no verbatim overlap)
- ✅ "SAP Build adalah suite terpadu yang menyatukan app builder, SAP Build Process Automation, Work Zone, dan Build Code." — clean (standard SAP product description; no exact-phrase lift — excluded as generic)
- ✅ Step 2 — "SAP S/4HANA dan SuccessFactors lewat OData, sistem non-SAP lewat REST API; koneksi berjalan melalui BTP destinations." — clean (standard integration description; no verbatim match)
- ✅ Soltius positioning line ("…Soltius mendampingi pemilihan dan pembangunan ekstensi low-code SAP Build di atas BTP…") — hits soltius.co.id only → intentional self-reference, **ignored per rules**
- ✅ ".mtar → React/SAPUI5 best-effort" conversion sentence — clean (no verbatim source; wording is the writer's own hedged rendering of the cited path-forward doc)
- ✅ Clean-core side-by-side extensibility sentence — clean (standard clean-core concept; no exact-phrase lift — excluded as generic)
- ✅ GigaOm stat sentence — matches only the cited SAP-official URL (news.sap.com), the declared citation → **not plagiarism**
- **Aggregate plagiarism score: 0.00** → pass

## Fact re-verification (product-capability & dated claims)
All load-bearing claims re-checked against SAP-official / authoritative sources; all accurate:
| Claim in article | Verification | Result |
|---|---|---|
| SAP Build Apps deprecated as standalone product **23 Mar 2026**; capabilities move to unified SAP Build | help.sap.com path-forward + SAP Community | ✓ confirmed |
| Existing customers keep full access + SLA + maintenance **to end of contract**; no new instances after | help.sap.com path-forward | ✓ confirmed |
| No auto-migration; **assisted best-effort** conversion, not one-click | help.sap.com (recommends recreating via pro-code) | ✓ confirmed, hedged correctly |
| AppGyver acquired by SAP **2021** | news.sap.com (Feb 2021) | ✓ confirmed |
| BTP → SAP Business AI Platform (BAIP) **"pertengahan 2026"** | confirmed effective 30 Jun 2026 — article's mid-2026 hedge is accurate & safe | ✓ confirmed |
| GigaOm (Mar 2025): SAP Build **~3x faster, 59% less effort** vs custom | news.sap.com (exact cited URL) | ✓ confirmed |

No fabricated dates, KBA numbers, prices, or capabilities. The one "30 Sep 2026 shutdown" trap flagged in QC is correctly avoided.

## Batch-2026-09 override checks
- Word band **800–1000**: cleaned-prose count (`tools/count_words.py`) = **887** → COMPLIANT. Raw script whitespace count 914 also falls under 1000; the raw>1000 concern is moot here. Recorded as compliant, not fail.
- FAQ **2–3**: article has **3** Q&A → compliant.
- Internal links **2**: hub (`low-code-and-no-code-platforms`) + cousin (`sap-clean-core-the-complete-guide`) → compliant.
- Image checks: **0** `{IMAGE_NN}` placeholders (grep-confirmed), no `images.json` for the batch → **N/A by design** (skipped, not flagged).
- Definition-repetition check: definition appears once (snippet "Ringkasnya:"); no H2/paragraph restates it → compliant.
- Anti-AI §5 / EYD / citations §10 / Soltius framing §11: applied in full — all pass (em-dash 0, no filler patterns, 2 self-mentions, 2 external citations, product names given in full on first mention).

## Loop status
Revision loop **0**. No revision required — verdict is **pass** on first validation.

## Report to orchestrator
- **Verdict: pass** (AI 0.08, plagiarism 0.00, loop 0)
- Editor recommendation `approve` + validator `pass` → **curator-ready** per the batch gate.
- Note (do NOT act): per assignment, the batch stops here for user review — curator is NOT to be run and nothing is committed to `articles_history` until the user approves.
