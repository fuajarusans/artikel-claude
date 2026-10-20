---
brief_id: "tanda-butuh-erp-c01"
editor_run_date: "2026-09-01"
recommendation: "approve"
overall_score: 9
batch: "conditional-2026-09"
overrides_applied: "800–1000 words (cleaned-prose), FAQ 2–3, internal links exactly 2, no image placeholders (N/A), ≤2 Soltius mentions, lead ≤80 words, kesimpulan ≤80 words, definition once (snippet only), 3–4 H2, ≥4 inline numbers"
---

# Editor QC Report — 10 Tanda Perusahaan Anda Membutuhkan Sistem ERP

## Recommendation
**approve**

The draft ships. It meets every batch-2026-09 override and every full-force rule that still applies (anti-AI §5, EYD, citation discipline §10, Soltius framing §11, meta block §7, GEO extractability §2a). The article holds its intended lane cleanly: a generic, vendor-neutral ERP-diagnostic (ERP = category, SAP = one vendor), 10 cross-function signs, a measurable-symptom table, an honest "kapan belum perlu" section, and a funnel to SAP Business One confined to FAQ #2 + the CTA. Every dossier Flag was honored — no "61%", no "9 bulan", no invented durations/costs, no rounded-up install base, "tiga tanda" framed as an editorial heuristic (not cited as study data). I applied three in-place fixes (definition-repeat/duplication in H2 #2, a sub-40-word GEO answer in H2 #3, and an em-dash I introduced and then removed to stay ≤2); all four cited/linked URLs were live-verified today. No factual, framing, or structural rework is required.

## Batch-2026-09 overrides applied (NOT the agent's monthly defaults)
- Word band checked: **800–1000** (cleaned-prose via `tools/count_words.py`) — not 1,500–1,800. Raw whitespace counts over-count table pipes/URLs and were **not** used to judge >1000.
- FAQ checked: **2–3** — not 5–8.
- Internal links checked: **exactly 2** (1 hub + 1 cousin) — not 3.
- Image-placeholder validation: **N/A** (none by design) — not flagged as missing; grep confirms zero `{IMAGE_NN}`.
- Soltius self-mentions: **≤2** — not ≤3.
- Lead ≤80 words (no roadmap paragraph); Kesimpulan ≤80 words; soft CTA = last line; primary keyword in closing/CTA.
- **Definition appears once only** (the "Ringkasnya:" snippet); body/H2/FAQ checked for a restated definition — one restatement found in H2 #2 and **fixed** (see changelog).
- H2 count 3–4; ≥1 question-format; ≥1 practical/structured (table/list); no definitional "Apa itu ERP" H2.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | No banned openers/transitions; varied 1–4-sentence rhythm; em-dash count **1** (inside the mandated snippet); no hype adjectives; no service-dump. |
| Factual & SAP-spec accuracy | 10 | All spot-checked claims match dossier + product_matrix; Panorama and SAP News figures verified live today; all dossier Flags honored. |
| On-page SEO compliance | 9 | Meta title 47, meta desc 146, slug 26 — all within limits; keyword in H1/lead/closing; 3 body H2 (≥1 question, ≥1 table). |
| GEO extractability (§2a) | 9 | 40–60-word direct answer after each H2 carrying NEW info (43/42/44 words); one quotable point per paragraph; FAQ FAQPage-ready. |
| Soltius framing discipline | 10 | Implementer/pendamping (not builder); exactly 2 mentions; no superlatives; positioning line + soft CTA; vendor-neutral body. |
| Internal linking | 9 | Structure correct (hub + cousin); both URLs live-verified (HTTP 200); "5 tanda" cannibalization page correctly NOT linked. |
| FAQ quality | 9 | 3 Q&As, 37–54 words each, each carries a fact/number; no definition-snippet repetition after the H2 #2 fix. |

## What I fixed (changelog)
- **Definition-repeat + FAQ duplication removed (H2 #2 cousin-link sentence).** The original read "…akan melihat inti nilainya: *single source of truth* … yang membuat satu transaksi memperbarui semua fungsi terkait tanpa entri ulang." That restated the snippet's definition ("satu sumber kebenaran") *and* duplicated FAQ #1's clause almost verbatim. Rewrote to point the cousin link at the **mechanism** without re-defining ERP or echoing the FAQ: "Pembaca yang ingin menelusuri [cara kerja sistem ERP](…), yakni bagaimana *single source of truth* (satu sumber data tepercaya) menutup gejala-gejala di atas, dapat mendalami mekanismenya lebih lanjut." Keeps the exact anchor + the `single source of truth` entity; drops the definitional restatement.
- **GEO direct answer bumped to 40+ words (H2 #3).** The "kapan belum perlu" opener was **39 words** (§2a requires 40–60). Added two substantive touches — "sudah siap" and "ke sistem baru yang jauh lebih mahal" (a real readiness point: encoding dirty data into a costlier system) — bringing it to **44 words**. No empty padding.
- **Em-dash discipline held (self-correction).** My first H2 #2 rewrite used an em-dash pair, which would have pushed the article to 3 em-dashes (over the ≤2 cap). Replaced with commas; final em-dash count is **1** (the single one in the mandated snippet).
- **Frontmatter `word_count` updated 988 → 985** to match the post-edit cleaned-prose count.

No other prose edits were required — the writer's self-review held. No anti-AI, factual, meta, or Soltius-framing issues remained to correct.

## What I flagged (open issues)
- ℹ️ **List/table overlap in H2 #1 is intentional-per-brief (non-blocking).** The numbered 10-sign list and the 10-row `Tanda | Area | Gejala terukur` table restate the same items in different words. The brief explicitly mandates **both** as distinct GEO extraction targets (numbered list = line-by-line bait for the "tanda perusahaan butuh ERP" query; table = "tanda→area→gejala terukur" AI-Overview bait), and the addendum permits both while under 1000 words (article is 985). Kept as-authored; noted only so the curator/user knows it is deliberate, not an oversight.
- ℹ️ **Cannibalization is an SEO-ops action outside editor scope (awareness).** The live Soltius page `…/kenali-5-tanda-perusahaan-membutuhkan-software-erp-indonesia` targets the identical keyword. Per the brief, this new article is the **deep/canonical** version and deliberately does **not** link that thin page. *Recommendation (SEO-ops, not this pipeline):* make this article canonical for "tanda perusahaan butuh ERP" — consider a 301 of the "5 tanda" page here, or an UP-link from the old page. No article change needed.

## Detailed check results

### A. Anti-AI scan (style_guide §5)
- [x] No "Di era digital / Seiring perkembangan / Tidak dapat dipungkiri" openers — lead opens on concrete pain (busy team, late reports, mismatched numbers across divisions).
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — grep: none.
- [x] No "Penting untuk dicatat / dipahami" — grep: none.
- [x] "Dengan demikian" / "Sebagai kesimpulan" not present — grep: none. Kesimpulan opens forward-looking ("Mengenali tanda … adalah langkah pertama").
- [x] Em-dash count = **1** (≤2) — inside the mandated snippet; none elsewhere.
- [x] Varied paragraph lengths (1–4 sentences); short punch lines used ("Tidak.", "Tanda-tanda ini jarang muncul sendirian.").
- [x] Not every H2 → bullet list — H2 #1 = numbered list + table + prose; H2 #2 = prose; H2 #3 = prose + bulleted checklist. No listicle-robot pattern.
- [x] No generic claims without numbers — 8 specific numbers inline (see C).
- [x] No stacked hype adjectives (canggih/powerful/seamless/terdepan) — none.
- [x] No service-dump paragraph — single Soltius anchor in the close.

### B. Factual & SAP-spec spot-check
| Claim | Source check | Verdict |
|---|---|---|
| Panorama 2026 ERP Report surveyed 170 organizations; **>seperempat (>25%)** of ERP projects exceeded budget, often from unanticipated additional technology needs | dossier (Panorama press release, high conf) ✓; Panorama resource page live-verified today (HTTP 200, "The 2026 ERP Report") | pass |
| SAP Business One = **83.000+ pelanggan, 170+ negara** (FAQ #2) | dossier + `news.sap.com/2025/12/…` live-verified today: "more than 83,000 customers … more than 170 countries" — matches verbatim, not rounded up | pass |
| Placement of the Panorama budget-overrun stat in **H2 #3 (readiness)**, not H2 #2 | dossier explicit: "Placement terbaik: H2 #3" ✓ | pass |
| "Tiga atau lebih tanda" / "tiga tanda" presented as a practical heuristic, not a study finding | dossier Flag ✓ — framed editorially throughout ("Secara praktis…", "Secara praktik…"); no false citation | pass |
| "61% organisasi mengejar ERP" and "nilai terukur dalam 9 bulan" | dossier Flags: DO NOT USE — grep confirms **absent** | pass (avoided) |
| Soltius = mitra implementasi SAP, Metrodata Group, sejak 1998; mendampingi/mengimplementasikan/menopang (never "builds") | product_matrix / CLAUDE.md ✓ | pass |
| Vendor-neutral framing (ERP = kategori; SAP salah satu vendor; no "ERP = SAP") | dossier Flag ✓ — SAP appears only in FAQ #2 + CTA | pass |

Dossier Flags honored in full: no fabricated durations/costs; no "3–6 bulan" universalized; "tiga tanda" heuristic not cited as data; the 403-blocked SAP concept URLs (`what-is-erp`, `what-are-data-silos`) are **not** used as citations (only Panorama + SAP News are linked), so their block status is moot.

### C. On-page SEO checklist (seo_playbook §3 + batch overrides)
- [x] Meta title ≤60 — **47 chars**; "10 Tanda … Perusahaan" carries the keyword tokens in the first 30 chars.
- [x] Meta description 140–160 — **146 chars**; keyword + concrete value props (data silo, tutup buku molor, kapan beralih, kapan belum perlu).
- [x] Slug ≤60, kebab-case, keyword — **26 chars** (`tanda-perusahaan-butuh-erp`).
- [x] H1 contains the primary keyword (synonym form: "10 Tanda Perusahaan Anda Membutuhkan Sistem ERP").
- [x] H2 count = **3 body H2** (batch: 3–4) — ≥1 question-format (#2 "Kapan Waktu yang Tepat Beralih ke ERP?"), ≥1 praktis/tabel (#1), 1 honest/counter-conventional (#3). No definitional "Apa itu ERP" H2.
- [x] Keyword in first 100 words (lead: "sepuluh tanda perusahaan butuh ERP") and in closing (Kesimpulan: "Mengenali tanda perusahaan butuh ERP…").
- [x] Definition snippet near top — "Ringkasnya:" blockquote, **46 words** (40–60); the article's sole definition.
- [x] Internal links = **exactly 2** — hub `mengenal-sistem-sap-dan-manfaatnya` (after snippet, live-verified 200) + cousin `cara-kerja-sistem-sap-dan-fungsinya-untuk-perusahaan` (H2 #2, live-verified 200). "5 tanda" page correctly NOT linked.
- [x] External authoritative citations = **2** inline — Panorama 2026 ERP Report (H2 #3) + SAP News Dec 2025 (FAQ #2). Both live-verified today.
- [x] FAQ = **3 Q&As** (batch: 2–3), 37–54 words each; each carries a fact/number (contrast fact; 83.000/170+; "tiga tanda").
- [x] ≥1 structured element — numbered 10-sign list **and** a 3-column measurable-symptom table (10 rows); table markdown integrity OK (header + separator + 10 rows).
- [x] Word count = **985** cleaned-prose (`tools/count_words.py`), band 800–1000.
- [x] Image placeholders = **0** (batch: forbidden). Validation N/A per override.
- [x] Specific numbers inline (≥4): 10 tanda; tiga atau lebih; 170 organisasi; >seperempat/>25%; 83.000 pelanggan; 170+ negara; 1998; tiga tanda → **8**.

### C2. GEO extractability (seo_playbook §2a)
- [x] Direct 40–60-word answer immediately after each H2, each carrying NEW info (not a snippet repeat): H2 #1 ≈**43w** (signs spread cross-function + 3-or-more threshold = structural); H2 #2 ≈**42w** (trigger = volume × complexity × data-users, not company size); H2 #3 ≈**44w** (readiness prerequisite; ERP over dirty data/undocumented process fails on internal unreadiness).
- [x] Each body paragraph makes one independently quotable, verifiable point.
- [x] FAQ parseable for FAQPage schema (### question / plain-text answer).
- [~] Freshness: `publish_month: "2026-09"` present in the meta block (per §7 template); no separate `dateModified` field (not mandated by §7; CMS concern). Acceptable.

### D. Soltius framing discipline (product_matrix + style_guide §11)
- [x] Framed as implementer/pendamping — "mitra implementasi SAP … mendampingi … mengimplementasikan, dan menopang sistem pasca go-live"; never "builds".
- [x] Self-mentions = **2** (batch ≤2): positioning line in Kesimpulan + soft website CTA (final line). The 2 blog-link URLs are contextual/educational, not counted as self-mentions (per brief).
- [x] No unverifiable superlatives ("terbaik/nomor satu") — none.
- [x] SAP/partner product names + specs match dossier/product_matrix — only "SAP Business One" (FAQ #2 + CTA), no module bedah.
- [x] Closing positioning line present (mitra implementasi SAP lintas industri sejak 1998, Metrodata Group).
- [x] Soft website CTA = the **final line** ("…kunjungi soltius.co.id."), consultative, not "beli sekarang"; funnel anchor "SAP Business One".
- [x] Hub link is a natural inline anchor (no "BACA JUGA" callout); no mid-body Soltius aside.

### E. Anti-cannibalization spot check
- Closest prior pipeline article: `sap-business-one-01` (2026-05, "7 Tanda Bisnis … SAP Business One") — brief-computed Jaccard **≈0.33** (< 0.4); differentiated by generic-ERP framing, 10 cross-function signs (5 net-new vs B1: order fulfillment, AP/AR & cash flow, forecasting, compliance/tax, scalability/IT), and the "kapan waktunya / kapan belum perlu" subtopics. B1's signature thresholds ("closing >10 hari kerja", "traktor untuk kebun sayur") were **not** reused.
- Live-site keyword collision: the Soltius "5 tanda" page (same keyword) — deliberately not linked; canonicalization is an SEO-ops action (see flag).
- Verdict: **distinct angle confirmed** — this article owns the deep, measurable, cross-function ERP-need diagnostic; does not duplicate the B1-specific, module-feature, or "cara kerja SAP" angles held by sibling articles.

## The shipping question
If this appeared on soltius.co.id tomorrow and a skeptical CIO plus a senior SAP consultant read it: yes — it stays vendor-neutral, gives self-checkable thresholds competitors don't, tells the reader honestly when NOT to buy, quotes Panorama and SAP accurately (both verified live), and points only to live pages. **approve.**
