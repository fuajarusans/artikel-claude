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
| Approval model | Autonomous with review — curator commits only articles with editor `recommendation: approve`; rest stays in `final/`. |
| Audience | <decision-makers / personas> |
| Working directory | `<path to this client folder>` |

---

## 2. Keyword model (per-month input)
Keywords are defined per month in `monthly_runs/<YYYY-MM>/keywords.md` (copy `monthly_runs/_keywords.template.md`). That file fully replaces the set each month. `run-month` reads it, auto-derives slugs, and builds the cousin-link map from that month's set.

> Fill a `keywords.md` for the first month before running. Each row: `keyword`, `landing_page`, `articles`, + optional `priority`/`topic_focus`/`anchor`/`notes`.

---

## 3. Agent roster
**Slim 5-agent pipeline.**

| # | Agent | Model | Role |
|---|---|---|---|
| 1 | `seo-keyword-strategist` | opus | N deduped concepts per keyword |
| 2 | `sme-researcher` | sonnet | Fact-rich dossier per concept |
| 3 | `seo-article-writer-<lang>` | opus | Full draft |
| 4 | `seo-editor` | opus | Editorial QC **+ plagiarism/AI-detector scan**, fixes in-place; binding `recommendation` = the **single commit gate** |
| 5 | `article-history-curator` | haiku | Commits `approve`; builds `.docx` |

> Agent 2 ships generic (`sme-researcher`) — prefix it with the niche per client, e.g. `energy-sme-researcher`, `infra-finance-sme-researcher`.

> **Customize per client:** the researcher is niche-named (`<niche>-*`) — rename + retarget its domain expertise and priority sources. The writer/strategist/editor reference the client's benchmarks + priorities — update those.

> **Retired (do not re-add without a reason):** `image-planner` — the writer's `{IMAGE_NN}` concept IS the design brief, so a separate planner and `images.json` added a stage without adding information. `seo-quality-validator` — its plagiarism + AI-detector scan now runs inside the editor's pass, which removes a whole stage and the revise-loop while keeping the gate.

> **A second writer** (`seo-article-writer-en`) can be added when a client needs per-keyword language routing — see `seo-ptpii` for a worked example.

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
- **Language**: <LANGUAGE>. (For per-keyword language routing, add `seo-article-writer-en` and a `language` field in `keywords.md` — see `seo-ptpii`.)
- **Length**: <LENGTH_BAND>, overridable per keyword via the `length` field in `keywords.md`. The orchestrator re-counts every draft with `tools/count_words.py` and trims out-of-band drafts before the editor.
- **Images**: <brief-only placeholders | none at all>. Brief-only = the writer's `{IMAGE_NN}` concept IS the design brief (no planner agent, no `images.json`). None = strip `{IMAGE_NN}` from the writer, editor, style guide §12, and the playbook checklist.
- **Voice**: human, expert, honest-hedging, decision-useful. Benchmarks = <paths>.
- **Internal links**: 3 per article as natural inline anchors (hub in lead + 2 cousins from the month's set); no "BACA JUGA" callouts.
- **Structure**: definition snippet near top, GEO 40–60-word answer after each H2, FAQ block, `## Kesimpulan` section, soft website CTA as the final line.
- **Quality gate**: the plagiarism + AI-detector scan runs inside the editor's pass (mandatory before commit). The editor fixes what it can in-place and issues one binding `recommendation`; the curator commits only `approve`. No separate validator agent, no revise-loop.

---

## 6. Run a month
Fill `monthly_runs/<YYYY-MM>/keywords.md`, then `/run-month <YYYY-MM>`.
