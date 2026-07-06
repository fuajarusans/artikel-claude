# Onboarding a New Client — SEO Article Pipeline (TEMPLATE)

`seo-template/` is the **client-agnostic engine** for the monthly SEO-article pipeline. To run it for a new client, **fork this folder** and fill in the client-specific content. **One folder per client → full isolation** (no fact / angle / voice / history bleed between clients).

---

## 1. Fork a new client
Copy `seo-template/` → `seo-<client-slug>/` (sibling folder), open that folder in Claude Code, then customize the files in §3. The folder's own `CLAUDE.md` + `.claude/agents/` auto-load — so each client is fully self-contained.

## 2. Reusable engine vs per-client content
| Reusable engine — leave as-is | Per-client — must customize |
|---|---|
| `tools/` (md-to-docx, quality-check, image gen) | `CLAUDE.md` (operations manual) |
| `.claude/commands/run-month.md` | `knowledge_base/company_profile.md` |
| `knowledge_base/seo_playbook.md` (GEO/SEO 2026 — generic; only swap the §2a source + client examples) | `knowledge_base/product_matrix.md` |
| `articles_history/README.md` (schema) | `knowledge_base/style_guide.md` (brand voice + benchmarks) |
| `monthly_runs/_keywords.template.md` | `.claude/agents/*` (niche tailoring — see §3) |
| `.env.example`, `.gitignore` | `articles_history/index.json` + empty `by_keyword/` |

## 3. Per-client customization checklist
- [ ] **CLAUDE.md** — client name, niche, language, audience, locked decisions, keyword model.
- [ ] **company_profile.md** — verified facts, credentials, services, positioning lines, **blacklist** (claims not allowed).
- [ ] **product_matrix.md** — keyword → topic/solution mapping + the client's CTA "anchor" + universal framing rules.
- [ ] **style_guide.md** — brand voice + **1–2 benchmark articles** + length band + anti-AI patterns (generic ones kept).
- [ ] **agents** — replace niche specifics: researcher's domain expertise + priority sources; writer's benchmark file paths + voice; strategist's strategic priorities; image-planner's brand palette. (The template ships generic `sme-researcher` / `image-planner` — optionally prefix per client niche; retarget their domain expertise + sources, and update references in `CLAUDE.md` + `run-month.md`.)
- [ ] **seo_playbook.md** — keep the generic GEO/SEO rules; swap client-specific examples + the §2a GEO source.
- [ ] **index.json** — set `client` + `language`; keep `articles: []`.
- [ ] **.env** — API keys only if generating images (else brief-only, like the default).

## 4. Onboarding inputs to collect from the client
Company profile (facts / credentials / services / blacklist) · keyword ↔ landing-page map · **1–2 benchmark articles** (voice calibration) · language + target length · images mode (brief-only vs generate) · optional SEO/ranking report · domain.

## 5. Running a month (inside a client folder)
Copy `monthly_runs/_keywords.template.md` → `monthly_runs/<YYYY-MM>/keywords.md`, fill it, then `/run-month <YYYY-MM>`. The keyword set is per-month and **fully replaces** prior months.

## 6. Propagating engine improvements (good hygiene)
When you improve an agent / tool / the playbook in one place, **back-port it to `seo-template/`**, then re-sync the engine files to active client folders. **Never** overwrite a client's `knowledge_base/`, `CLAUDE.md`, or `articles_history/` during a re-sync. Keep a short changelog at the bottom of this file.

---

## Changelog
- (init) Engine extracted from the original pipeline build (client-agnostic). Includes: 7-agent chain, per-month `keywords.md` model (full-replace), GEO §2a, natural-inline internal links, `## Kesimpulan` section, length band configurable, brief-only images by default.
