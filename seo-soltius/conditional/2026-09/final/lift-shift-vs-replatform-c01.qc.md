---
brief_id: "lift-shift-vs-replatform-c01"
editor_run_date: "2026-09-01"
recommendation: "approve"
overall_score: 9
batch: "conditional-2026-09"
overrides_applied: "800–1000 words (cleaned-prose), FAQ 2–3, internal links exactly 2, no image placeholders (N/A), ≤2 Soltius mentions, lead ≤80 words, kesimpulan ≤80 words, definition once (snippet only)"
---

# Editor QC Report — Lift & Shift vs Re-Platform: Strategi Migrasi SAP ke IaaS

## Recommendation
**approve**

The draft ships. It meets every batch-2026-09 override and every full-force rule that still applies (anti-AI §5, EYD, citation discipline §10, Soltius framing §11, meta block §7, GEO extractability §2a). Facts trace cleanly to the dossier and product_matrix — no fabricated durations, cost figures, dates, or product capabilities; the writer correctly kept rehost/re-platform speed qualitative-relative and honored every dossier Flag. One real issue surfaced: the intended cousin URL (`sap-hyperscaler-c01`) is **not live** (HTTP 500, absent from the site's own search). I verified this against the client site and resolved it in place by repointing the cousin anchor to a verified-live Soltius article on the identical topic (SAP on IaaS across AWS/Azure/GCP), preserving the exact "1 hub + 1 cousin" structure. With that fix applied, the article is fully shippable now; see the open flag if the user prefers to wait for the pipeline's own hyperscaler article.

## Batch-2026-09 overrides applied (NOT the agent's monthly defaults)
- Word band checked: **800–1000** (cleaned-prose via `tools/count_words.py`) — not 1,500–1,800.
- FAQ checked: **2–3** — not 5–8.
- Internal links checked: **exactly 2** (1 hub + 1 cousin) — not 3.
- Image-placeholder validation: **N/A** (none by design) — not flagged as missing.
- Soltius self-mentions: **≤2** — not ≤3.
- Lead ≤80 words (no roadmap paragraph); Kesimpulan ≤80 words; soft CTA = last line; primary keyword in closing/CTA.
- **Definition appears once only** (the "Ringkasnya:" snippet); body/H2/FAQ checked for restated definition — none found.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | No banned openers/transitions; varied 1–4-sentence rhythm; em-dashes exactly 2 (both in the mandated snippet); no hype adjectives. |
| Factual & SAP-spec accuracy | 10 | All 5+ spot-checked claims match dossier + product_matrix. Durations kept relative; ECC only dated; SUM DMO framed at concept level. |
| On-page SEO compliance | 9 | Meta title 45, meta desc 147, slug 42 — all within limits; keyword in H1/lead/closing; 3 body H2 (≥1 question, ≥1 table). |
| GEO extractability (§2a) | 9 | 40–60-word direct answer after each H2 carrying NEW info; one quotable point per paragraph; FAQ FAQPage-ready. |
| Soltius framing discipline | 10 | Implementer/pendamping (not builder); exactly 2 mentions; no superlatives; positioning line + soft CTA. |
| Internal linking | 8 | Structure correct (hub + cousin); cousin repointed after dead-link verification (see changelog + flag). |
| FAQ quality | 9 | 3 Q&As, 42–50 words each, each carries a fact; no definition-snippet repetition. |

## What I fixed (changelog)
- **Cousin link repointed (dead-link fix).** Verified the brief/dossier-flagged cousin URL `…/id/blog/read/sap-di-aws-azure-gcp-perbandingan-indonesia` is **not live** — HTTP 500 on two fetches, and it does not appear in the client site's own search (the `sap-hyperscaler-c01` conditional-2026-08 article has not published at that slug). Repointed the H2 #3 cousin anchor (and the `internal_links` frontmatter entry) to the verified-live Soltius article on the same topic: `https://www.soltius.co.id/blog/read/sap-in-the-cloud-why-iaas-aws-azure-gcp-is-the-strategic-choice-for-enterprise-indonesia` (confirmed live; compares AWS/Azure/GCP for SAP workloads with a comparison table and S/4HANA migration coverage). Anchor text unchanged ("SAP di AWS, Azure, atau GCP"); cleaned-prose word count unaffected (893).
- Verified the hub URL `https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud` is **live** ("Panduan Utama Migrasi ERP ke Cloud…") — left as placed in the lead.

No prose edits were required — the writer's self-review held. No anti-AI, framing, factual, or meta issues to correct.

## What I flagged (open issues)
- ⚠️ **Cousin link substitution — user/curator awareness.** The article now links to an existing published Soltius hyperscaler-comparison page rather than the pipeline's own `sap-hyperscaler-c01` (conditional 2026-08), which is not yet live. *Recommendation:* ship as-is now (the substitute is live and topically exact); OR, once `sap-hyperscaler-c01` publishes, swap the cousin URL back to it for tighter cluster glue. Either is valid — the current state is not broken.
- ℹ️ **Minor entity shorthand (non-blocking).** "SUM" is introduced as "SUM DMO (*Database Migration Option*)" without spelling out Software Update Manager; "AWS/GCP" shorthand appears before the full "Amazon Web Services / Google Cloud" listing in the Kesimpulan. For a decision-maker audience these are universally recognized entities; not worth padding the 900-word budget to expand. No fix applied.

## Detailed check results

### A. Anti-AI scan (style_guide §5)
- [x] No "Di era digital / Seiring perkembangan / Tidak dapat dipungkiri" openers — lead opens on a concrete pain (a decision meeting stuck on rehost-vs-optimize).
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — grep: none.
- [x] No "Penting untuk dicatat / dipahami" — grep: none.
- [x] "Dengan demikian" / "Sebagai kesimpulan" not present — grep: none.
- [x] Em-dash count = **2** (≤2). Both inside the mandated definition snippet; none elsewhere.
- [x] Varied paragraph lengths (1–4 sentences); short openers used ("Keduanya berada di sumbu berbeda.", "Re-platform menukar tempo untuk hasil.").
- [x] Not every H2 → bullet list — H2 #1 uses a table; H2 #2/#3 are prose; no listicle-robot pattern.
- [x] No generic claims without numbers — 7 specific numbers inline (see C).
- [x] No stacked hype adjectives (canggih/powerful/seamless/terdepan) — none.
- [x] No service-dump paragraph — single Soltius anchor in the close.

### B. Factual & SAP-spec spot-check
| Claim | Source check | Verdict |
|---|---|---|
| 7 Rs framework; rehost & re-platform = 2 of 7 migration strategies | dossier (AWS Prescriptive Guidance, high conf) ✓ | pass |
| Rehost = move app "tanpa perubahan apa pun", "tanpa optimasi cloud" | dossier verbatim AWS quote ✓ | pass |
| Replatform = "sebagian optimasi" e.g. DB to managed service | dossier verbatim AWS quote ✓ | pass |
| ECC 6.0 mainstream maint. ends 31 Des 2027; extended to 31 Des 2030 | dossier + product_matrix §5 ✓ | pass |
| SUM DMO / DMOVE2S4 (one-step DB+update+S/4HANA conversion) + DMO with System Move (move to new host/hyperscaler) | dossier (SAP Community, high conf; framed concept-level) ✓ | pass |
| Re-platform to SAP HANA requires certified instance across the 3 hyperscalers | dossier (SAP, high conf) ✓ | pass |
| Soltius = SAP Platinum Partner via United VARs, sejak 1998; implements/accompanies (not builds) | product_matrix / CLAUDE.md ✓ | pass |

Dossier Flags honored: no fabricated "hari–minggu / 4–12 minggu" durations; no "3x faster" / OpEx-% claims; no extended-maintenance cost figure (dates only); SUM naming framed at concept level with a "detail per-rilis berubah" hedge.

### C. On-page SEO checklist (seo_playbook §3 + batch overrides)
- [x] Meta title ≤60 — **45 chars**; keyword ("Lift & Shift") in first 12 chars.
- [x] Meta description 140–160 — **147 chars**; contains keyword + concrete value props (perubahan sistem, teknik, risiko cutover, kapan pilih).
- [x] Slug ≤60, kebab-case, keyword — **42 chars** (`lift-shift-vs-re-platform-migrasi-sap-iaas`).
- [x] H1 contains primary keyword ("Lift & Shift").
- [x] H2 count = **3 body H2** (batch: 3–4) — ≥1 question-format (#2, also #1), ≥1 praktis/tabel (#1).
- [x] Keyword in first 100 words (lead) and in closing (Kesimpulan: "lift and shift dan re-platform").
- [x] Definition snippet near top — "Ringkasnya:" blockquote, ~51 words (40–60).
- [x] Internal links = **exactly 2** — hub `migrasi-erp-ke-cloud` (lead, verified live) + cousin SAP-IaaS-hyperscaler (H2 #3, repointed to verified-live URL).
- [x] External authoritative citations = **2** inline — AWS Prescriptive Guidance (H2 #1) + SAP Community DMOVE2S4 (H2 #3).
- [x] FAQ = **3 Q&As** (batch: 2–3), 42–50 words each, one fact each.
- [x] ≥1 structured element — comparison table (H2 #1, 7 dimensions × rehost/re-platform); table markdown integrity OK (3 cols, header + separator + 7 rows).
- [x] Word count = **893** cleaned-prose (`tools/count_words.py`), band 800–1000. Raw whitespace counts over-count table pipes/URLs and were not used.
- [x] Image placeholders = **0** (batch: forbidden). Validation N/A per override.
- [x] Specific numbers inline (≥4): 7 Rs / tujuh strategi; dua dari tujuh; 31 Des 2027; 31 Des 2030; dua sumbu; ketiga hyperscaler; sejak 1998 → **7**.

### C2. GEO extractability (seo_playbook §2a)
- [x] Direct 40–60-word answer immediately after each H2, each carrying NEW info (not a snippet repeat): H2 #1 ≈55w (homogeneous vs heterogeneous copy, 7 Rs origin); H2 #2 ≈46w (decision criteria); H2 #3 ≈50w (two-axes correction).
- [x] Each body paragraph makes one independently quotable, verifiable point.
- [x] FAQ parseable for FAQPage schema (### question / answer).
- [~] Freshness: `publish_month: "2026-09"` present in the meta block (per §7 template); no separate `dateModified` field (not mandated by §7; CMS concern). Acceptable.

### D. Soltius framing discipline (product_matrix + style_guide §11)
- [x] Framed as implementer/pendamping — "mengimplementasikan serta mendampingi migrasi SAP"; never "builds".
- [x] Self-mentions = **2** (batch ≤2): positioning line in Kesimpulan + soft website CTA (final line).
- [x] No unverifiable superlatives ("terbaik/nomor satu") — none.
- [x] SAP/partner product names + specs match dossier/product_matrix.
- [x] Closing positioning line present (SAP Platinum Partner via United VARs, sejak 1998).
- [x] Soft website CTA = the **final line** (`…kunjungi soltius.co.id.`), consultative, not "beli sekarang".
- [x] Hub link is a natural inline anchor in the lead (no "BACA JUGA" callout).

### E. Anti-cannibalization spot check
- Closest prior articles: `iaas-untuk-sap-c01`, `sap-hyperscaler-c01`, `saas-paas-iaas-c01`, `sap-ecc-2027-c01` (all conditional, not yet committed).
- Subtopic overlap (brief-computed Jaccard): 0.08–0.12 vs each — all < 0.4.
- Verdict: **distinct angle confirmed** — this article owns the infrastructure-strategy axis (rehost vs re-platform) with the "lift & shift ≠ brownfield" original insight; does not duplicate provider-comparison, what/why-IaaS, service-model, or ECC-deadline angles.

## The shipping question
If this appeared on soltius.co.id tomorrow and a skeptical CIO plus a senior SAP consultant read it: yes — it separates the two decision axes most competitors conflate, quotes AWS and SAP accurately, hedges the numbers it cannot source, and points to live pages. **approve.**
