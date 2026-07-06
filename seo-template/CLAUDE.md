# <CLIENT_NAME> — Monthly SEO Article Pipeline

Operations manual for the agent system that produces **<LANGUAGE>** SEO articles for **<CLIENT_NAME>** (<one-line who they are>), client of **<AGENCY>**.

> This file auto-loads into every Claude Code session in this directory. Read it first, then dispatch agents.
> **This is a fork of `seo-template`.** See `ONBOARDING.md` (in the template) for what to customize. Replace every `<PLACEHOLDER>` below.

---

## 1. Project at a glance
| Field | Value |
|---|---|
| Client | <CLIENT_NAME> (<website>) |
| Who they are | <short positioning> |
| Agency | <AGENCY> |
| Monthly volume | **Variable per month** — keyword set defined in `monthly_runs/<YYYY-MM>/keywords.md` (fully replaces prior months; no defaults). |
| Language | **<LANGUAGE>** |
| Output formats | `.md` (canonical) + `.docx` (review-ready, via pandoc) |
| Images | <brief-only (design team executes) | generate via FLUX/OpenAI> |
| Approval model | Autonomous with review — curator commits only editor `approve` AND validator `pass`; rest stays in `final/`. |
| Audience | <decision-makers / personas> |
| Working directory | `<path to this client folder>` |

---

## 2. Keyword model (per-month input)
Keywords are defined per month in `monthly_runs/<YYYY-MM>/keywords.md` (copy `monthly_runs/_keywords.template.md`). That file fully replaces the set each month. `run-month` reads it, auto-derives slugs, and builds the cousin-link map from that month's set.

> Fill a `keywords.md` for the first month before running. Each row: `keyword`, `landing_page`, `articles`, + optional `priority`/`topic_focus`/`anchor`/`notes`.

---

## 3. Agent roster
| # | Agent | Model | Role |
|---|---|---|---|
| 1 | `seo-keyword-strategist` | opus | N deduped concepts per keyword |
| 2 | `sme-researcher` | sonnet | Fact-rich dossier per concept |
| 3 | `seo-article-writer-<lang>` | opus | Full draft |
| 4 | `image-planner` | sonnet | Image brief (`images.json`) — no generation by default |
| 5 | `seo-editor` | opus | Editorial QC; binding `recommendation` |
| 6 | `seo-quality-validator` | sonnet | Plagiarism + AI-detector; `verdict` |
| 7 | `article-history-curator` | haiku | Commits `approve`+`pass`; builds `.docx` |

> Agents 2 and 4 ship generic (`sme-researcher` / `image-planner`) — optionally prefix with the niche per client, e.g. `energy-sme-researcher`.

> **Customize per client:** the researcher + image-planner are niche-named (`<niche>-*`) — rename + retarget their domain expertise. The writer/strategist/editor reference the client's benchmarks + priorities — update those.

---

## 4. Knowledge base — customize before running
| File | Purpose |
|---|---|
| `knowledge_base/company_profile.md` | <CLIENT> facts, credentials, services, positioning, blacklist |
| `knowledge_base/product_matrix.md` | Keyword → topic/solution to teach + <CLIENT> anchor; universal framing rules |
| `knowledge_base/style_guide.md` | Article anatomy, brand voice, anti-AI patterns, benchmarks |
| `knowledge_base/seo_playbook.md` | 2026 algorithm + AI-Overview/GEO rules (mostly generic) |

---

## 5. Locked decisions (fill per client)
- **Language**: <LANGUAGE>.
- **Length**: <e.g. 1,500–1,800 words (~1,650 target)>.
- **Images**: <brief-only | generate>.
- **Voice**: human, expert, honest-hedging, decision-useful. Benchmarks = <paths>.
- **Internal links**: 3 per article as natural inline anchors (hub in lead + 2 cousins from the month's set); no "BACA JUGA" callouts.
- **Structure**: definition snippet near top, GEO 40–60-word answer after each H2, FAQ block, `## Kesimpulan` section, soft website CTA as the final line.
- **Quality gate**: plagiarism + AI-detector pass mandatory before commit.

---

## 6. Run a month
Fill `monthly_runs/<YYYY-MM>/keywords.md`, then `/run-month <YYYY-MM>`.
