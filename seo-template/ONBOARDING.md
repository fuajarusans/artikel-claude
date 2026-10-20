# Onboarding a New Client — SEO Article Pipeline (TEMPLATE)

`seo-template/` is the **client-agnostic engine** for the monthly SEO-article pipeline. To run it for a new client, **fork this folder** and fill in the client-specific content. **One folder per client → full isolation** (no fact / angle / voice / history bleed between clients).

---

## 1. Fork a new client
Copy `seo-template/` → `seo-<client-slug>/` (sibling folder), open that folder in Claude Code, then customize the files in §3. The folder's own `CLAUDE.md` + `.claude/agents/` auto-load — so each client is fully self-contained.

## 2. Reusable engine vs per-client content
| Reusable engine — leave as-is | Per-client — must customize |
|---|---|
| `tools/` (md-to-docx, quality-check, image gen) | `CLAUDE.md` (operations manual) |
| `.claude/commands/run-month.md` (incl. the length gate) | `knowledge_base/company_profile.md` |
| `knowledge_base/seo_playbook.md` (GEO/SEO 2026 — generic; only swap the §2a source + client examples) | `knowledge_base/product_matrix.md` |
| `articles_history/README.md` (schema) | `knowledge_base/style_guide.md` (brand voice + benchmarks) |
| `monthly_runs/_keywords.template.md` | `.claude/agents/*` (niche tailoring — see §3) |
| `.env.example`, `.gitignore` | `articles_history/index.json` + empty `by_keyword/` |

## 3. Per-client customization checklist
- [ ] **CLAUDE.md** — client name, niche, language, audience, locked decisions, keyword model.
- [ ] **company_profile.md** — verified facts, credentials, services, positioning lines, **blacklist** (claims not allowed).
- [ ] **product_matrix.md** — keyword → topic/solution mapping + the client's CTA "anchor" + universal framing rules.
- [ ] **style_guide.md** — brand voice + **1–2 benchmark articles** + length band + anti-AI patterns (generic ones kept).
- [ ] **agents** — replace niche specifics: researcher's domain expertise + priority sources; writer's benchmark file paths + voice; strategist's strategic priorities; editor's framing checks and "shipping question". (The template ships a generic `sme-researcher` — prefix it per client niche, e.g. `energy-sme-researcher`, and update references in `CLAUDE.md` + `run-month.md`.)
- [ ] **language** — single-language by default. For per-keyword routing, add `seo-article-writer-en`, a `language` field in `keywords.md`, and language-aware paths in the editor/curator (worked example: `seo-ptpii`).
- [ ] **images** — brief-only placeholders (default) or none at all. If none: strip `{IMAGE_NN}` from the writer, editor checklist, `style_guide.md` §12, and the playbook's image checklist row.
- [ ] **time-sensitive data policy** — decide up front whether figures and personnel names may be cited. A good default for institutional/BUMN clients: figures allowed **with a mandatory reference year**, personnel names blacklisted (they change and date the article).
- [ ] **seo_playbook.md** — keep the generic GEO/SEO rules; swap client-specific examples + the §2a GEO source.
- [ ] **index.json** — set `client` + `language`; keep `articles: []`.
- [ ] **.env** — API keys only if generating images (else brief-only, like the default).

## 4. Onboarding inputs to collect from the client
Company profile (facts / credentials / services / blacklist) · keyword ↔ landing-page map · **1–2 benchmark articles** (voice calibration — if none exist, the first approved pilot becomes the benchmark) · language (single or per-keyword) + target length band · images mode (brief-only placeholders vs none) · **policy on time-sensitive data** (figures with reference years? personnel names allowed?) · optional SEO/ranking report · domain.

Ask these before building — each one changes files, not just copy. For a fast onboarding, ask them as a short multiple-choice round rather than an open questionnaire.

## 5. Running a month (inside a client folder)
Copy `monthly_runs/_keywords.template.md` → `monthly_runs/<YYYY-MM>/keywords.md`, fill it, then `/run-month <YYYY-MM>`. The keyword set is per-month and **fully replaces** prior months.

## 6. Propagating engine improvements (good hygiene)
When you improve an agent / tool / the playbook in one place, **back-port it to `seo-template/`**, then re-sync the engine files to active client folders. **Never** overwrite a client's `knowledge_base/`, `CLAUDE.md`, or `articles_history/` during a re-sync. Keep a short changelog at the bottom of this file.

---

## Changelog
- (init) Engine extracted from the original pipeline build (client-agnostic). Includes: 7-agent chain, per-month `keywords.md` model (full-replace), GEO §2a, natural-inline internal links, `## Kesimpulan` section, length band configurable, brief-only images by default.
- **2026-08-11 — slim 5-agent pipeline back-ported** (from `seo-gagas`, validated across two live client builds).
  - **Removed `image-planner`**: the writer's `{IMAGE_NN}` concept already IS the design brief, so the planner and `images.json` added a stage without adding information.
  - **Removed `seo-quality-validator`**: its plagiarism + AI-detector scan now runs inside `seo-editor`'s pass. The editor fixes what it can in-place, so its `recommendation` is the single commit gate — one fewer stage and no revise-loop.
  - **Added the length gate to `run-month`**: writers cannot count their own output and overshoot ~15–20%, so every draft is re-counted with `tools/count_words.py` and trimmed by a Bash-capable agent before the editor stage. The band comes from the brief's `target_word_count` (per-keyword `length` in `keywords.md`).
  - **Curator** now commits on editor `approve` alone; schema note updated.
  - New client folders built on this version: `seo-ptpii`, `seo-iigf-institute` (both image-free; `seo-ptpii` also demonstrates per-keyword `language` routing with a second writer, `seo-article-writer-en`).
