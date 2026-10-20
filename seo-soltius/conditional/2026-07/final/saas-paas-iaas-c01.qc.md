---
brief_id: "saas-paas-iaas-c01"
editor_run_date: "2026-07-06"
recommendation: "approve"
overall_score: 9
---

# Editor QC Report — SaaS vs PaaS vs IaaS: Perbedaan dan Contoh Penerapannya

> **Batch note:** evaluated against **conditional/2026-07 style_addendum overrides** (word band 800–1000; FAQ 2–3; internal links exactly 2; image-brief validation N/A — `{IMAGE_NN}` banned; Soltius mentions max 2; lead & Kesimpulan ≤80 words; soft CTA = final line). All other checks (anti-AI §5, EYD, facts, meta block §7, GEO §2a) applied in full.

## Recommendation
**approve**

The draft was already close to shippable: on-angle per the brief (equal-weight 3-model comparison with enterprise/SAP mapping), every number traced to the dossier, no AI tells, and all GEO extraction blocks in band. I fixed five in-place issues — two EYD errors, one comma-splice sentence, one missing acronym expansion (AWS), and one imprecise Gartner baseline — none structural. Facts avoid every dossier flag (no Heroku/Google App Engine/Google Workspace claims; Gartner USD 850 miliar stays an attributed projection). Final body: **963 words** (band 800–1000).

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | No banned openers/transitions; 1 em-dash; varied paragraph rhythm (1–4 sentences); prose-led sections |
| Factual & SAP-spec accuracy | 9 | All claims dossier-verified (NIST, Microsoft, SAP Learning/sap.com, Gartner as projection); flagged unverified examples correctly omitted |
| On-page SEO compliance | 9 | Meta title 53, meta desc 158, slug 41; keyword in H1/lead/last para; H2s per addendum skeleton |
| GEO extractability (§2a) | 9 | 40–60-word direct answer after all 4 body H2s (51/50/47/44 words); table quotable row-by-row; snippet 56 words |
| Soltius framing discipline | 10 | Exactly 2 self-mentions (positioning line + CTA); implements/supports framing; no superlatives; body vendor-neutral |
| Internal linking | 10 | Exactly 2: hub `migrasi-erp-ke-cloud` (in lead) + cousin `low-code-and-no-code-platforms` (at SAP BTP mention); natural inline anchors |
| FAQ quality | 9 | 2 Q&As (compliant with 2–3 band), 47 & 38 words, each carries a fact/number, FAQPage-parseable |
| Image-brief completeness | N/A | Batch override: no placeholders by design; 0 `{IMAGE_NN}` found ✓ |

## What I fixed (changelog)
- **EYD**: "integrasi antar sistem" → "integrasi antarsistem" (H2 #3 direct answer).
- **EYD**: "ini jarang menjadi pilihan salah-satu" → "perusahaan jarang harus memilih salah satu saja" (H2 #4 honest-hedging; removed non-standard hyphenation).
- **Grammar**: fixed colon + comma-splice in the SaaS examples sentence (H2 #3) → "Pada lapisan SaaS, perusahaan memakai … untuk ERP; semuanya berlangganan, tanpa tim infrastruktur sendiri."
- **Entity/GEO**: expanded AWS on first prose use — "Azure Virtual Machines atau EC2 dari Amazon Web Services (AWS)" (brief's entity list requires one expansion per acronym).
- **Precision**: FAQ #1 Gartner figure "naik 21,3%" → "naik 21,3% dari 2025" (baseline year per dossier Claim 10).
- **Frontmatter**: `word_count` updated 954 → 963 (verified clean count, markdown syntax stripped).

## What I flagged (open issues)
- ⚠️ (minor, accepted) "ERP" first appears in the lead inside the mandated hub anchor "migrasi ERP ke cloud", so the expansion "(Enterprise Resource Planning)" sits at first body use in H2 #3 instead — anchor integrity took precedence. No action needed.
- ⚠️ (watch item) Gartner USD 850 miliar / +21,3% (2026) is dossier confidence **medium-high** (press release not directly fetchable). Kept exactly as the dossier prescribes: attributed, "memproyeksikan … sekitar", no inline link (the 2 inline external links remain NIST + Microsoft). If the validator wants it hardened further, swap to the fully verified 2025 figure (USD 723,4 miliar, Gartner press release 19 Nov 2024).

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers
- [x] No "Selain itu" opening ≥2 consecutive paragraphs (0 occurrences)
- [x] No "Penting untuk dicatat / dipahami bahwa"
- [x] "Dengan demikian" not used
- [x] Em-dash count ≤2 — actual: 1 (definition snippet)
- [x] Varied paragraph lengths (1–4 sentences; lead 3, single-sentence table note, list block, short close)
- [x] Not every H2 → bullet list (only H2 #4 uses bullets, with prose frame; H2 #1/#3 prose, H2 #2 table)
- [x] No generic claims without numbers (NIST 5/3/4, Sept 2011, Mei 2026, USD 850 miliar, 21,3%)
- [x] No stacked hype adjectives
- [x] No service-dump paragraph

### B. Factual & SAP-spec spot-check
| Claim | Source check | Verdict |
|---|---|---|
| NIST SP 800-145 (Sept 2011): 5 karakteristik, 3 service model, 4 deployment model; per-model management boundaries | dossier Claims 1–4 (NIST PDF read in full) ✓ | pass |
| Microsoft shared-responsibility matrix (updated Mei 2026): OS user-managed only in IaaS; data & identity always user's | dossier Claim 5 ✓ | pass |
| SaaS examples Microsoft 365, SAP SuccessFactors, S/4HANA Cloud **Public Edition**; PaaS = SAP BTP, Azure App Service; IaaS = Azure VM, AWS EC2 | dossier Claims 6–8 + edge-case note (Public Edition qualifier used) ✓ | pass |
| RISE with SAP bundles SaaS + PaaS (BTP) + IaaS hyperscaler in one contract — exactly 1 body sentence + 1 FAQ sentence, no depth | dossier Claim 9 + dedup boundary respected ✓ | pass |
| Gartner ~USD 850 miliar public-cloud end-user spend 2026, +21,3% vs 2025 — written as attributed projection ("memproyeksikan … sekitar") | dossier Claim 10 (medium-high; framing rule followed) ✓ | pass |

Blacklist/framing: no "Soltius builds SAP", no invented products/dates, no unverified examples (Heroku/Google App Engine/Google Workspace correctly absent per dossier flags), no Indonesian cloud-market stats (dedup boundary), no partner tech claimed as Soltius's own.

### C. On-page SEO checklist (seo_playbook §3, with batch overrides)
- [x] Meta title ≤60 (keyword first 30) — actual: 53 chars, "SaaS vs PaaS vs IaaS" at position 1
- [x] Meta description 140–160 — actual: 158
- [x] Slug ≤60, kebab-case, keyword — actual: `saas-paas-iaas-perbedaan-contoh-penerapan` (41)
- [x] H1 contains keyword — "SaaS vs PaaS vs IaaS: Perbedaan dan Contoh Penerapannya"
- [x] H2 count (addendum: 3–4 body) — actual: 4 body + FAQ + Kesimpulan
- [x] ≥1 question-format H2 — 3 of 4 (#2, #3, #4); honest H2 replaced by 2-sentence hedging in #4 per addendum §2
- [x] Keyword in first 100 words — lead sentence 1
- [x] Definition snippet near top (40–60 words) — 56-word "Ringkasnya:" blockquote
- [x] ≥8 LSI terms — 10+ (model layanan cloud computing, komputasi awan, hyperscaler, pay-as-you-go, server virtual/penyimpanan/jaringan, langganan, SAP BTP, shared responsibility, tingkat kontrol, …)
- [x] Internal links **exactly 2** (override) — hub `migrasi-erp-ke-cloud` + cousin `low-code-and-no-code-platforms`, inline, no "BACA JUGA"
- [x] External authoritative citations 1–2 — 2 inline links (NIST, Microsoft Learn) + Gartner attributed without link
- [x] FAQ **2–3** (override) — actual: 2, answers 47/38 words, each with a fact/number
- [x] Image placeholders **0 / banned** (override) — actual: 0
- [x] ≥1 structured element — 1 comparison table (7 rows) + 1 bold-lead-in list; 4+ prose paragraphs
- [x] Word count **800–1000** (override) — actual: **963** (frontmatter updated)
- [x] ≥4 specific inline numbers — Sept 2011; 5/3/4 (NIST); Mei 2026; USD 850 miliar; 21,3%; 2025/2026

### C2. GEO extractability (seo_playbook §2a)
- [x] Direct 40–60-word answer immediately after each body H2 — 51 / 50 / 47 / 44 words
- [x] One quotable, verifiable point per paragraph (definition paras "X adalah…"; table AI-liftable row-by-row; data-and-identity nuance is a standalone quotable)
- [x] Entities full-name on first use, acronyms expanded once (NIST, SaaS/PaaS/IaaS, SAP BTP, ERP, AWS — AWS fixed this pass)
- [x] FAQ parseable for FAQPage schema; freshness via `publish_month: 2026-07` (meta-block template has no separate dateModified field)

### D. Soltius framing discipline (product_matrix.md + style_guide §11)
- [x] Framed as implementer/partner — "mengimplementasikan dan mendukung solusi SAP", never "builds/owns"
- [x] Self-mentions ≤**2** (override) — actual: 2 (Kesimpulan positioning line + soltius.co.id CTA)
- [x] No unverifiable superlatives
- [x] SAP/partner names & specs match dossier (BTP = PaaS per sap.com; S/4HANA Cloud Public Edition qualifier; RISE 1-sentence)
- [x] Closing uses the company positioning line (SAP Platinum Partner via United VARs)
- [x] Soft website CTA is the very last line, consultative, separate from the conclusion paragraph
- [x] Hub link as natural inline anchor in the lead ("migrasi ERP ke cloud"), no callout

### E. Anti-cannibalization spot check
- Closest prior article: `iaas-untuk-sap-c01` (conditional 2026-06, not in committed history index; also checked committed index — no 3-model comparison exists)
- Subtopic overlap: ≈ 0.25 per brief's dedup (shared: IaaS definition, model comparison, responsibility split; distinct: equal-weight SaaS/PaaS coverage, enterprise example mapping, decision rules)
- Boundary compliance verified in-draft: no HANA instance certification, no self-managed vs RISE detail, no Indonesian cloud-market stats
- Verdict: **distinct angle confirmed**

### F. Image-brief completeness
**N/A — batch-2026-07 override**: no `{IMAGE_NN}` placeholders by design, no images.json, image-planner stage skipped. Confirmed 0 placeholders in the final. Visual concept (layer stack per model) is carried by the who-manages-what table, per addendum §3.

---

## Revisi R1 (2026-07-06, permintaan user)

- **Aturan baru (dikunci di style_addendum.md):** definisi hanya muncul SEKALI, di definition
  snippet. H2/paragraf yang mengulang definisi snippet dengan kata lain dipangkas.
- **Perubahan:** H2 pertama ("Apa Itu SaaS, PaaS, dan IaaS dalam Cloud Computing?") dihapus
  karena tiga paragraf definisinya mengulang isi snippet. Info barunya (standar NIST SP 800-145,
  kepanjangan akronim) dipindah ke pembuka H2 "Perbedaan". Gloss *pay-as-you-go* dipindah ke
  paragraf contoh IaaS.
- **Word count:** 963 -> 853 (band 800-1000 tetap terpenuhi). Struktur: 3 H2 + FAQ (2) + Kesimpulan.
- Sitasi NIST + Microsoft, 2 internal link, 2 mention Soltius: tidak berubah.
- recommendation: approve (tetap berlaku)
