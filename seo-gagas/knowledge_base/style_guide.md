# Style Guide — PGN Gagas Articles (Bahasa Indonesia)

Primary reference for `seo-article-writer-id` and `seo-editor`.

> **No client benchmark yet** — voice calibrates to `knowledge_base/company_profile.md` + the first approved pilot (which becomes the benchmark).

> **The North Star Test**: Could a senior energy/gas-bumi practitioner or industri analyst — someone who has actually sat in supply-planning meetings and watched a CNG fueling station commissioning — have written this for an operations/procurement decision-maker to read? If yes, ship it. If it reads like an AI synthesis of three vendor blogs, send it back.

All articles are in **Bahasa Indonesia**.

---

## 1. Article anatomy (the required structure)

```
1. Meta block (YAML frontmatter — NOT published as body). See §7.

2. Lead paragraph — the pain hook (1 paragraph)
   Open on a concrete business pain the reader feels ("biaya bahan bakar
   solar yang terus naik", "pasokan gas dari pipa belum menjangkau lokasi
   pabrik"), NOT a generic "Di era industri modern...". The primary keyword
   appears here. State what the article delivers and its angle.

3. Definition snippet — "Secara singkat / Ringkas:" (1 short paragraph or blockquote)
   40–60 words answering "X adalah ..." cleanly. This is AI-Overview bait.
   Place it in the first ~150 words.

4. Roadmap paragraph (optional, 1 short)
   "Melalui panduan ini, kami akan membahas..." — sets expectations.

5. Body sections (4–7 H2s) — see §1a for the H2 mix.

6. FAQ section (5–8 Q&As) — marked clearly, ready for FAQPage schema.

7. Closing / conclusion paragraph — under its own `## Kesimpulan` H2
   Give the conclusion a dedicated `## Kesimpulan` heading so it is clearly
   separated from the FAQ (not dangling under it).
   Connect the topic back to PGN Gagas using ONE positioning line from
   company_profile.md. Soft consultative CTA (assessment/consultation),
   never "beli sekarang". Do NOT open with "Sebagai kesimpulan".

8. Soft website CTA (AFTER the conclusion — MANDATORY in every article)
   The final line. One short sentence (1–2) inviting the reader to visit
   the PGN Gagas website (gagas.co.id) to explore the relevant solution
   or start a consultation. Soft/consultative, never "beli sekarang".
   Distinct from the conclusion; placed as the very last line. Vary the
   wording per article (see §11).
```

### 1a. H2 mix (vary the types — don't make all H2s the same shape)

At minimum, across the article include:
- **1 definitional H2** — "Apa itu [X] dan mengapa penting bagi industri Indonesia?"
- **1 question-format H2** — phrased as the reader would Google it ("Kapan perusahaan sebaiknya beralih ke CNG dari solar?")
- **1 practical/structured H2** — steps, phases, comparison ("Tahapan konversi ke gas bumi", "Perbandingan ... vs ...")
- **1 honest / counter-conventional H2** — the trust-builder competitors skip ("Kapan Anda BELUM perlu ...", "Tantangan ... yang jarang dibahas", "Mitos seputar ..."). A "Kapan CNG BELUM cocok untuk operasi Anda" section is the model.

---

## 2. Length & rhythm

- **Length**: 1.200–1.600 kata (target ~1.400). Focused supporting articles for busy decision-makers — enough depth to be genuinely useful, tight enough to respect their time. B2B readers reward density and punish padding (so does Google HCU). Below ~1,000 risks "thin"; padding to inflate the count hurts.
- **Paragraph length**: VARY DELIBERATELY. Mix 1-sentence paragraphs with 4–6-sentence ones. Symmetric blocks (every paragraph 4 sentences) = the strongest AI tell. **Vary or fail.**
- **Sentence length**: mix short declaratives (8–14 words) with longer compound sentences (20–30). Avoid a wall of uniform 25-word sentences.

### Mandatory format mix per article

| Format element | Min occurrences |
|---|---|
| Prose paragraphs | 5+ |
| List (numbered and/or bulleted, with bold lead-ins) | 1+ (use both where natural; don't force) |
| Table / mini-table (comparison, phases, modules, cost) | 1 |
| Inline data with specific numbers | 6+ (durations, %, counts, years, prices/ranges) |
| Question-format H2 | 1 |
| FAQ block at end | 1 (5–7 Q&As) |
| `{IMAGE_NN: ...}` placeholders | 2 (up to 3 only if it truly helps) |

If a draft is 90% bullet points or 100% prose, it fails. At 1.200–1.600 kata, aim for ~4–5 H2s and keep one comparison table + one list + the FAQ — don't cram every element if it pads.

---

## 3. Bahasa Indonesia tone rules (B2B energi gas bumi)

- **Register**: Bahasa Indonesia baku, profesional, tapi tidak kaku. Konsultatif — seperti seorang ahli menjelaskan ke eksekutif yang cerdas tapi bukan teknolog. Bukan terjemahan, bukan obrolan kasual, bukan brosur.
- **Audience**: direktur operasional, kepala produksi/pabrik, manajer procurement/energi, head of logistics/fleet, transformation leads at SMEs → large enterprises. They care about risk, cost, time-to-value, and not getting fired for a failed project. Speak to that.
- **Subject voice**: mix addressing the reader ("Anda dapat...", "bisnis Anda") with impersonal ("perusahaan dapat...", "tim operasional sering..."). Use "kami" sparingly — only in the closing where PGN Gagas speaks. Don't over-"kami" the body (feels promotional).
- **EYD**: mandatory. Editor verifies.
- **Technical terms**: mix Indonesian + English as practitioners actually do. Italicize the English term on first use and gloss it: "*single source of truth* (satu sumber data tepercaya)", "*lead time*", "*switching cost*". Then use it plainly. Same for CNG, LNG, *calorific value*, *city gas*, *fuel switching*, *retrofit*, MMBTU, MRU.
- **Numbers**: Indonesian convention — comma decimal (`18–20%`), period thousands (`83.000 perusahaan`, `Rp 500 Juta`). Spell out then use figure where it aids scanning.
- **Acronyms**: expand on first use — "CNG (*Compressed Natural Gas*)", "LNG (*Liquefied Natural Gas*)", "MRU (*Mobile Refueling Unit*)" — then use the acronym.

### Phrases that work (consultative, human voice)

- "Secara singkat, ..." / "Ringkasnya, ..."
- "Dalam praktiknya, ..." / "Di lapangan, ..."
- "Pola yang sering ditemui adalah ..."
- "Yang membedakan ... dari checklist generik: ..."
- "Bagian ini jarang ditulis kompetitor, padahal ..."
- "Ini rentang industri yang umum, bukan janji pasti." (honest hedging — builds trust)

---

## 4. Honesty & evidence (the E-E-A-T engine)

The March 2026 core update and AI-Overview era reward originality + verifiable expertise and punish generic AI filler. So:

- **Hedge honestly.** When a number is a practitioner rule-of-thumb, say so: "Penghematan 15–30% sering dipakai sebagai patokan praktis; bukan jaminan, tapi acuan lapangan yang bergantung pada profil konsumsi." This honesty is a *feature* — it's what humans (and Google's quality raters) trust.
- **Source real numbers.** Every market/stat number traces to the dossier with a source (Kementerian ESDM, SKK Migas, PGN/PGAS, BPS, IEA, peer-reviewed). Inline attribution: "(Kementerian ESDM, Desember 2025)", "menurut IEA, ...".
- **Add a counter-conventional section.** Say when the reader does NOT need the solution yet, or the real risks. Competitors won't; it differentiates and builds trust.
- **Be specific, not grand.** "*calorific value* gas bumi yang stabil menjaga konsistensi suhu pembakaran" beats "solusi yang powerful dan komprehensif".

---

## 5. Anti-AI patterns — REJECT IF PRESENT

Editor must catch; writer must avoid.

| Pattern | Why it's bad | Acceptable substitute |
|---|---|---|
| "Di era digital ini, ..." / "Seiring perkembangan teknologi, ..." / "Tidak dapat dipungkiri ..." | Empty AI opener | Open on a concrete pain or a specific fact/number |
| "Selain itu," starting 2+ paragraphs in a row | Repetitive transition | "Di sisi lain", "Lebih jauh", "Dalam praktiknya", or just start with the noun |
| "Penting untuk dicatat / diingat / dipahami bahwa..." | AI cliché | State the fact directly |
| "Dengan demikian, ..." overused | Reads machine-translated | "Maka", "Akibatnya", "Karena itu" |
| "Sebagai kesimpulan, ..." as the closing opener | Lazy | Start the closing with a forward-looking statement or a callback to the lead's pain |
| Em-dashes ( — ) more than ~2× per article | Stylistic tell | Commas or full stops |
| Symmetric paragraph lengths (all ~4 sentences) | Strongest AI tell | Force 1–6 sentence variation |
| Every H2 followed by a 3-bullet list | Listicle-robot voice | Mix prose, bullets, tables, numbered steps |
| Generic claims without numbers ("solusi yang sangat penting") | Empty | Add a number/threshold: "konsumsi solar >5.000 liter/hari", "penghematan biaya bahan bakar 15–30%" |
| Listing every PGN Gagas service/solution in one paragraph | Service-dump | Mention the 1 relevant anchor, in the closing |
| Vendor-hype adjectives: "canggih", "powerful", "revolusioner", "terdepan", "seamless" stacked | Brochure voice | Describe the concrete capability instead |
| Over-hedged claims you want AI to cite ("mungkin bisa jadi kadang") | Won't get extracted | Be definitive on facts; hedge only genuine estimates (and label them) |

---

## 6. Visual rhythm — the "scrollability" check

At 30% zoom the page should show texture: varying paragraph heights, a numbered list, a comparison table, 2–3 image placeholders, an FAQ block. A wall of uniform paragraphs or one giant bullet dump fails the eye test before SEO.

---

## 7. Meta block format (every article)

At the very top of the markdown file, before the H1:

```yaml
---
title: "<H1 / page title>"
meta_title: "<≤60 chars, primary keyword in first 30 chars>"
meta_description: "<140–160 chars; keyword + 2–3 specific value props (e.g. 'lengkap dengan tahapan konversi, estimasi penghematan, dan pilihan pasokan Gaslink')>"
slug: "<kebab-case, keyword-led, ≤60 chars>"
language: "id"
primary_keyword: "<keyword>"
secondary_keywords: ["k1", "k2", "..."]
internal_links:
  - url: "<own hub landing page>"
    anchor: "<primary keyword>"
  - url: "<cousin hub 1>"
    anchor: "<cousin keyword>"
  - url: "<cousin hub 2>"
    anchor: "<cousin keyword>"
external_citations:
  - url: "<source URL>"
    context: "<what claim it backs>"
brief_id: "<brief-id>"
target_word_count: 1400
publish_month: "<YYYY-MM>"
word_count: <fill after writing>
---
```

The editor verifies this block.

---

## 8. FAQ block format (always at the end)

```markdown
## FAQ (Pertanyaan yang Sering Diajukan)

### <Pertanyaan persis seperti yang diketik orang di Google>
<Jawaban 40–80 kata. Langsung. Sertakan satu angka/fakta dari artikel.>

### <Pertanyaan berikutnya>
<Jawaban ...>
```

5–8 questions. Pull from the brief's People-Also-Ask. Phrase as real Indonesian B2B searchers do: "Apa itu ...", "Berapa lama ...", "Berapa biaya ...", "Apa bedanya ... dan ...", "Kapan perlu ...", "Apakah ... cocok untuk UKM?".

---

## 9. Internal & external linking

- **Internal links (mandatory)**: 3 per article.
  - 1× to the article's own hub landing page — as a **natural inline anchor woven into the prose, preferably in the opening/lead** (also acceptable mid-body). Descriptive anchor text (the keyword or a natural variant). **Do NOT use a "BACA JUGA" callout** — natural inline only.
  - 2× to cousin hub pages from the month's keyword set (see `product_matrix.md` cross-link map), as inline contextual links placed where the topic naturally connects.
  - As history grows, optionally add 1 DOWN-link to a sibling article in the same cluster.
  - Style = inline contextual links woven into sentences, like "...pelajari [keunggulan CNG untuk industri](...)". Anchor text must describe the destination — never "klik di sini" or a "BACA JUGA" callout.
- **External authoritative links**: 1–2 per article. Priority: pemerintah/regulator (Kementerian ESDM, SKK Migas, BPS), badan internasional (IEA, World Bank), asosiasi industri/peer-reviewed. No outbound to direct competitors (other gas/energy retailers) — even for "balance".

---

## 10. Citation discipline

- Every claimed number is either (a) from `knowledge_base/` or a researcher-verified citation, or (b) clearly framed as a range/rule-of-thumb and labeled as such.
- Never fabricate statistics or technical specs (calorific value, tekanan, harga gas). If the dossier didn't supply it, the writer doesn't invent it — flag it instead.
- Prefer recent, specific sources ("Kementerian ESDM, Desember 2025: harga gas bumi tertentu USD 6,5/MMBTU") over vague ("banyak perusahaan").

---

## 11. PGN Gagas mention discipline (works with `product_matrix.md`)

- Teach the topic vendor-neutrally in the body. PGN Gagas earns the close by being helpful first.
- **Max 2–3 PGN Gagas self-mentions**, usually: one optional mid-article aside + the closing CTA.
- ✅ "Sebagai anak usaha PGN (Subholding Gas Pertamina), PGN Gagas menyalurkan gas bumi ke pelanggan industri dan komersial melalui jaringan pipa maupun solusi CNG seperti Gaslink untuk lokasi di luar jangkauan pipa."
- ❌ "PGN Gagas menyediakan Gasku, Gaslink, CNG, city gas, dan seluruh solusi energi untuk semua kebutuhan Anda." (service-dump)
- PGN Gagas **menyalurkan/memasok/mendistribusikan** gas bumi — never claims to "memproduksi" gas. See `product_matrix.md` blacklist.
- **Soft website CTA (MANDATORY, after the conclusion):** end every article with one short line inviting the reader to visit **gagas.co.id** to explore the relevant solution or request a consultation — soft and consultative, never "beli sekarang". It is the standard closer and counts within the ≤3 mention budget (typically: one positioning line in the conclusion + this website-CTA line). Vary the wording, e.g. "Untuk mendiskusikan kesiapan beralih ke [topik] di perusahaan Anda, kunjungi gagas.co.id." or "Selengkapnya tentang solusi [X] dari PGN Gagas dapat Anda jelajahi di gagas.co.id."

---

## 12. Image placeholders (no AI generation — brief for the design team)

Per the project decision, the writer does NOT generate images. Instead, mark 2–3 `{IMAGE_NN: ...}` placeholders with a **rich concept description** the design team can execute. Each should specify: subject, layout, style, color, and that any text is in Bahasa Indonesia. Examples:

- `{IMAGE_01: Infografik checklist tanda perusahaan siap beralih ke gas bumi — tiap poin dengan ikon, gaya korporat biru-putih, teks Bahasa Indonesia}`
- `{IMAGE_02: Diagram side-by-side — kiri "Bahan bakar solar" (biaya naik, asap, merah/abu), kanan "CNG / gas bumi" (alur pasokan bersih ke pabrik, hijau/biru)}`
- `{IMAGE_03: Timeline horizontal tahapan konversi ke CNG, tiap fase dengan ikon + durasi tipikal, warna progresif abu→hijau}`

The `energy-image-planner` agent expands these into a structured `images.json` brief (alt-text + caption + visual direction + suggested asset type: infographic / diagram / photo / stock photo). No PNG is produced.

---

## 13. The benchmark in one sentence

> Read the draft aloud. If it sounds like a senior energy/gas-bumi practitioner leveling with a smart executive — concrete numbers, honest caveats, a comparison table, the occasional "ini sering disalahpahami" aside, and varied rhythm — it's ready. If it sounds like a polished vendor brochure or an AI summary, send it back.
