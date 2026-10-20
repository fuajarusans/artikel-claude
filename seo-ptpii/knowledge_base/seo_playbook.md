# SEO Playbook — 2026 Algorithm + AI Optimization (PT PII)

Reference for `seo-keyword-strategist`, `seo-article-writer-id`, and `seo-editor`.

> **Operating principle**: Google's 2026 priorities — and the AI engines (Perplexity, ChatGPT, Gemini) that now refer real traffic to ptpii.co.id — reward *helpfulness, demonstrated expertise, originality, and entity clarity*. The writing that wins is the writing an operations or procurement decision-maker would actually find useful. There is no "SEO trick" overlay anymore; there is being the most genuinely useful, citable source on the topic.

---

## 1. Google ranking signals to optimize for (2026)

### Helpful Content System (HCU) + March 2026 Core Update
- **Person-first, decision-useful content**: each article helps a specific reader (a PJPK official scoping a KPBU tender; a project sponsor assessing whether a government guarantee changes its cost of funds) complete a specific task — not a generic synthesis of consultancy blogs.
- **Originality / primary perspective** (explicitly rewarded by the Mar 2026 core update): add a comparison table, a decision threshold, a "kapan BELUM perlu" section, a worked cost example, or a practitioner caveat the SERP top-10 don't have.
- **AI content without editorial oversight is demoted; expert-reviewed content is safe.** Every article passes the human-voice + expert-review bar (the whole pipeline exists for this).
- **Topic depth**: 1.200–1.600 kata for these focused supporting articles — enough depth to be genuinely useful to a decision-maker, tight enough to respect their time. Below ~1,000 risks thin; padding to hit a count hurts (HCU detects both).

### E-E-A-T (Experience · Expertise · Authoritativeness · Trustworthiness)
- **Experience**: ground claims in operational reality — "di lapangan, pola yang sering ditemui...", "dalam fase komisioning fueling station...".
- **Expertise**: precise terminology, correctly used and glossed (KPBU/PPP, *bankability*, *creditworthiness*, *financial close*, kewajiban kontinjensi, hak *regress*, Availability Payment, Viability Gap Fund, PJPK).
- **Authoritativeness**: cite Kementerian Keuangan/DJPPR, regulasi primer (JDIH), Bappenas, World Bank/PPP Knowledge Lab, ADB, BPS; link out to ≥1–2. Every figure carries its reference year.
- **Trustworthiness**: name the source and date, label estimates as estimates, state PT PII credentials accurately (BUMN Persero, Special Mission Vehicle Kementerian Keuangan, Badan Usaha Penjaminan Infrastruktur — bukan di bawah holding Danantara), no unverifiable superlatives.

### SpamBrain (scaled-content detection)
Scaled AI content with no original insight is penalized. Editor counter-measures: anti-AI pattern scan (`style_guide.md` §5), original-insight check (does this say something the SERP top-10 don't?), practitioner-voice check (named methods, edge cases, when something *doesn't* apply).

---

## 2. AI Overview / AI-engine citation optimization (HIGH PRIORITY for this client)

AI search now refers a growing share of real traffic, and informational-query CTR is dropping as AI answers inline. **Being the cited source matters as much as ranking blue links.** AI engines extract from content that is:

### a. Entity-clear
- **First ~60 words define the core entity, encyclopedia-style.** Example: "*Kerja Sama Pemerintah dengan Badan Usaha* (KPBU) adalah skema penyediaan infrastruktur untuk kepentingan umum yang melibatkan badan usaha, dengan sebagian atau seluruh sumber daya berasal dari badan usaha dan risiko dibagi berdasarkan kontrak kerja sama."
- Name every key entity explicitly: the product/solution (full name on first mention), the technique, the standard, the organization.

### b. Structured
- Clean H1 → H2 → H3 hierarchy. Numbered lists for processes/phases. Tables for comparisons (e.g., "KPBU vs pengadaan konvensional APBN", "Risiko yang dijamin per tahap proyek"). Bullet lists for criteria/checklists.

### c. Citation-ready
- One claim per sentence (or per short paragraph). AI engines quote granularly. Specific numbers > vague descriptors. Inline source attributions where useful.

### d. FAQ-rich
- A dedicated FAQ block (5–8 Q&As) mirroring real voice/typed queries ("apa itu", "berapa lama", "berapa biaya", "apa bedanya", "kapan perlu"). Marked for FAQPage schema.

### e. Definition-snippet bait
- ≥1 paragraph of 40–60 words near the top that cleanly answers "X adalah ..." / "apa itu X".

---

## 2a. GEO field guide (2026) — Generative Engine Optimization

> GEO = structuring content so generative AI engines (ChatGPT, Perplexity, Gemini, Google AI Overviews) surface and **cite** it. It extends §2; it does not replace SEO.

**Core principle: GEO is built on SEO, not instead of it.** ~97% of citations in Google AI Overviews come from pages already ranking in the top ~20 organic results — strong SEO is the prerequisite for AI visibility. (Why now: ChatGPT >700M weekly users; Gartner projects ~25% of organic traffic shifts to AI chatbots by 2026 — appearing *in* the AI answer increasingly decides discovery.)

### What GEO adds on top of our existing checklist
1. **Question-first structure.** Build sections around the exact questions readers ask (mine PAA / AlsoAsked / Reddit). Every question-format H2 must be answerable standalone.
2. **Extractability — the key GEO lever.** AI lifts short passages, so:
   - Put a **direct 40–60-word answer immediately after each major heading**, before elaboration (not only the one definition snippet at the very top).
   - Each body paragraph should make **one point that is independently quotable and verifiable** (one claim + a sourced fact).
   - Match format to question type: **numbered list** for steps, **definition paragraph** for "apa itu", **table** for data/comparison.
3. **Structured data.** Keep FAQ parseable for **FAQPage** schema and the article for **Article** schema (JSON-LD); a "quick answer" block near the top aids extraction. (CMS implements; writer/editor keep the content machine-parseable.)
4. **Content freshness.** Accurate `dateModified` + periodic refresh — stale pages lose citation priority. (Maintenance concern; surface in the meta block.)

On-page specifics from the guide already match §3: **title 50–60 chars, keyword first**; **meta description 150–160** (sweet spot inside our 140–160 band); descriptive anchor text. No change needed there.

### SEO vs GEO (one-line mental model)
| Aspect | SEO | GEO |
|---|---|---|
| Goal | Rank in results | Get cited in AI answers |
| Ideal unit | Heading + relevant keyword | A 40–60-word, question-led, verifiable answer |
| Metric | Ranking, organic traffic, CTR | Citation / inclusion rate |
| Relationship | Prerequisite for GEO | Extension of SEO |

The pipeline already does most of this (definition snippet, FAQ, entity clarity, clusters). The **net-new enforcement** for the editor: a 40–60-word direct answer after *each* major H2, one-quotable-point-per-paragraph, and a freshness/`dateModified` note.

---

## 3. On-page SEO checklist (editor enforces every article)

### Meta block
- [ ] **Meta Title** ≤60 chars, primary keyword in first 30
- [ ] **Meta Description** 140–160 chars, keyword + 2–3 specific value props (not generic adjectives)
- [ ] **Slug** kebab-case, contains keyword, ≤60 chars
- [ ] **Canonical** = slug (CMS handles)

### Heading structure
- [ ] **H1** matches working title; includes primary keyword or a clear synonym
- [ ] **H2 count** 4–7; ≥1 in question format (captures PAA); no skipped levels

### Keyword usage
- [ ] **Primary keyword** in: title, meta title, meta description, slug, H1, first 100 words, last paragraph
- [ ] **Density** ~1–2% (natural); no stuffing
- [ ] **LSI/semantic terms**: 8–12 distinct related terms present

### Body
- [ ] First paragraph uses the keyword naturally and previews the article
- [ ] Definition snippet (40–60 words) near top
- [ ] ≥3 internal links (1 own hub + 2 cousin hubs)
- [ ] 1–2 external authoritative links
- [ ] FAQ section (5–8 Q&As) at end

### Format diversity (anti-AI)
- [ ] ≥1 numbered list, ≥1 bullet list, ≥1 table
- [ ] Varied paragraph lengths (1–6 sentences)
- [ ] Specific numbers in 6+ places

### GEO extractability (editor enforces — see §2a)
- [ ] A direct 40–60-word answer sits immediately after each major H2 (not only the top definition snippet)
- [ ] Each body paragraph makes one independently quotable, verifiable point
- [ ] FAQ parseable for FAQPage schema; `dateModified` / freshness accurate in the meta block

### Image considerations (writer marks; the placeholder IS the brief; design team executes)
- [ ] Each has proposed alt-text (keyword-relevant, descriptive, Bahasa Indonesia)

### Schema readiness (CMS implements; writer marks clearly)
- [ ] Article schema fields available (headline, author, datePublished, image)
- [ ] FAQPage schema parseable from FAQ section
- [ ] HowTo parseable if the article has step-by-step phases

---

## 4. Topical authority via clusters

One hub landing page per keyword in the month's set (defined in `keywords.md`). Every monthly article supports one.

- Each article links **UP** to its own hub (anchor = keyword), **SIDEWAYS** to 2 cousin hubs (topical breadth — see `product_matrix.md` map), and as history grows, **DOWN** to older sibling articles.
- Over months, each hub accrues a deep, non-overlapping cluster. The strategist tracks cluster fill and gaps.

### Anti-cannibalization
- Two articles in the same cluster MUST cover different angles/intents. The strategist's history check (angle_hash + subtopic Jaccard < 0.4) enforces this.
- Same primary keyword across articles is fine *if* secondary keywords and search intent differ.

---

## 5. Indonesian B2B search behavior — what to remember

- **Definitional + decision queries dominate**: "kpbu adalah", "apa itu penjaminan infrastruktur", "perbedaan kpbu dan ppp", "cara kerja penjaminan pemerintah", "siapa itu PJPK". Question-format H2s + FAQ capture these.
- **Mixed-language terms**: the concept is often an English term ("compressed natural gas", "fuel switching") but the searcher reads Bahasa Indonesia. Use the English term as keyword + Indonesian explanation.
- **Desktop-heavy, work-hours audience**: readers are professionals researching during the workday. They tolerate depth and tables; reward skimmable structure (clear H2s, comparison tables, bolded thresholds).
- **Decision-maker skepticism**: this audience has heard vendor hype before. Honesty, caveats, and "kapan BELUM perlu" sections convert better than superlatives.
- **Sharing**: useful explainers get sent to colleagues / in internal chats — design self-contained, screenshot-friendly sections (a clean comparison table travels well).

---

## 6. Featured snippet & PAA optimization

- **Snippet bait**: 40–60-word definition paragraphs near the top; numbered/bulleted lists for "tahapan / langkah" queries; a direct first-sentence answer under each question-format H2.
- **People Also Ask**: strategist captures top PAA per keyword (via WebSearch/WebFetch on Google ID). Writer addresses ≥5 — as body H2s or FAQ entries. Each answer 40–80 words, self-contained.

---

## 7. What makes us cited by AI Overviews / AI engines

(Observed patterns through early 2026)
- Clear entity definitions in the first 60 words.
- Specific, sourced numerical claims (dates, percentages, counts).
- Structured tables/lists AI can extract row-by-row.
- FAQ blocks mirroring voice queries.
- **First-party / expert signals**: "dalam praktik penyiapan proyek KPBU...", attributing to PT PII’s experience as the only BUMN mandated as Badan Usaha Penjaminan Infrastruktur under the Ministry of Finance where honest — first-hand expertise gets cited preferentially over generic articles.
- Avoid hedge-words ("mungkin", "bisa jadi", "kadang") in claims you want extracted; be definitive on facts, label genuine estimates.

---

## 8. SERP feature targets (declare per brief)

- [ ] AI Overview (Google SGE) + AI-engine citation (Perplexity/ChatGPT)
- [ ] Featured Snippet (definition / list / table)
- [ ] People Also Ask
- [ ] Image Pack (less relevant for B2B IT; usually skip)
- [ ] Knowledge panel (long-term, brand-level)

---

## 9. Quality-over-quantity rule

If a draft fails the editor checklist or sounds AI-generated, **send it back to the writer with specific feedback**. Better to ship 28 strong + 2 deferred than 30 mediocre — HCU + the Mar 2026 core update penalize thin/unreviewed AI content heavily, and this is exactly the audience that notices.

---

## 10. Outside this playbook (intentionally)

- Off-page / backlink building & content placement — handled separately by the agency content-placement workstream.
- Technical SEO (site speed, schema rendering, sitemap), CMS, disavow of toxic backlinks — dev/SEO-ops team.
- Paid search — different team.
