#!/usr/bin/env python3
"""
curate_month.py - one-shot knowledge-base curator for a monthly_runs batch.

Commits every editor-APPROVED article of a month to articles_history in a single run:
  1. Reads each final/<brief-id>.qc.md; commits ONLY recommendation: approve (skips revise/reject).
  2. Assigns a continuing per-keyword running id  ->  <month>-<keyword_slug>-<NN>
     (NN continues from the count already committed for that slug in index.json).
  3. Appends a full entry to articles_history/index.json (schema-matched).
  4. Writes a by_keyword/<slug>/<article-slug>.md record, relocating the
     strategist-authored "Notes for future strategist runs" block verbatim
     (the whitespace map next month's dedup depends on) plus the article's
     real H2s, internal links and citations.
  5. Generates a styled .docx for each committed article via tools/md-to-docx.ps1.

Deterministic: it MOVES content the strategist/writer/editor already authored,
it does not invent facts. Run once:  python tools/curate_month.py 2026-09
"""
import re, sys, os, json, glob, subprocess, datetime

def load_fm(path):
    """Return (frontmatter_dict, body_str)."""
    import yaml
    with open(path, 'r', encoding='utf-8') as f:
        txt = f.read()
    m = re.match(r'^---\n(.*?)\n---\n?(.*)$', txt, flags=re.DOTALL)
    if not m:
        return {}, txt
    try:
        fm = yaml.safe_load(m.group(1)) or {}
    except Exception as e:
        print(f'  ! YAML parse issue in {os.path.basename(path)}: {e}')
        fm = {}
    return fm, m.group(2)

def brief_section(brief_body, heading):
    """Extract the markdown text under a '## <heading>' up to the next '## '."""
    pat = re.compile(r'^##\s+' + re.escape(heading) + r'\s*$(.*?)(?=^##\s|\Z)',
                     flags=re.DOTALL | re.MULTILINE)
    m = pat.search(brief_body)
    return m.group(1).strip() if m else ''

def h2_list(body):
    """Return the ordered list of '## ' headings in an article body (excl. H1/H3)."""
    out = []
    for line in body.split('\n'):
        m = re.match(r'^##\s+(?!#)(.+?)\s*$', line)
        if m:
            out.append(m.group(1).strip().lstrip('# ').strip())
    return out

def main():
    month = sys.argv[1] if len(sys.argv) > 1 else '2026-09'
    root = os.getcwd()
    final_dir = os.path.join('monthly_runs', month, 'final')
    brief_dir = os.path.join('monthly_runs', month, 'briefs')
    idx_path  = os.path.join('articles_history', 'index.json')

    with open(idx_path, 'r', encoding='utf-8') as f:
        index = json.load(f)
    articles = index['articles']

    # existing committed count per keyword_slug -> base for running NN
    base_nn = {}
    for a in articles:
        ks = a.get('keyword_slug', '?')
        base_nn[ks] = base_nn.get(ks, 0) + 1

    qc_files = sorted(glob.glob(os.path.join(final_dir, '*.qc.md')))
    committed, skipped, docx_ok, docx_fail = [], [], [], []
    # per-slug local counter (order = sorted brief-id)
    local_seq = {}

    # deterministic order: group by slug, then brief-id
    parsed = []
    for qc in qc_files:
        brief_id = os.path.basename(qc)[:-len('.qc.md')]
        qfm, _ = load_fm(qc)
        rec = str(qfm.get('recommendation', '')).strip().lower()
        final_md = os.path.join(final_dir, brief_id + '.id.md')
        brief_md = os.path.join(brief_dir, brief_id + '.brief.md')
        bfm, bbody = load_fm(brief_md)
        ks = bfm.get('keyword_slug') or re.sub(r'-\d+$', '', brief_id)
        parsed.append((ks, brief_id, rec, final_md, brief_md, qc, qfm, bfm, bbody))

    parsed.sort(key=lambda t: (t[0], t[1]))

    for ks, brief_id, rec, final_md, brief_md, qc, qfm, bfm, bbody in parsed:
        if rec != 'approve':
            skipped.append((brief_id, rec))
            print(f'  SKIP {brief_id} (recommendation={rec})')
            continue
        ffm, fbody = load_fm(final_md)
        local_seq[ks] = local_seq.get(ks, 0) + 1
        nn = base_nn.get(ks, 0) + local_seq[ks]
        art_id = f'{month}-{ks}-{nn}'
        slug = ffm.get('slug') or re.sub(r'-\d+$', '', brief_id)
        title = ffm.get('title', brief_id)
        keyword = bfm.get('keyword') or ffm.get('primary_keyword', ks)
        angle = bfm.get('angle', '')
        ahash = str(bfm.get('angle_hash', '')).strip()
        if ahash and not ahash.startswith('sha1:'):
            ahash = 'sha1:' + ahash[:12]
        intent = bfm.get('search_intent', '')

        # internal / external links from the FINAL frontmatter
        il = ffm.get('internal_links', []) or []
        il_urls, il_pairs = [], []
        for x in il:
            if isinstance(x, dict):
                il_urls.append(x.get('url', ''))
                il_pairs.append((x.get('url', ''), x.get('anchor', '')))
            else:
                il_urls.append(str(x)); il_pairs.append((str(x), ''))
        ec = ffm.get('external_citations', []) or []
        ec_pairs = []
        for x in ec:
            if isinstance(x, dict):
                ec_pairs.append((x.get('url', ''), x.get('context', '')))
            else:
                ec_pairs.append((str(x), ''))

        # subtopics: from final secondary_keywords (clean list), up to 6
        subs = ffm.get('secondary_keywords') or []
        if isinstance(subs, str):
            subs = [s.strip() for s in subs.split(',') if s.strip()]
        subtopics = [s for s in subs][:6]

        # gagas_mentions: derive teach + anchor from the brief prose (best-effort)
        teach_txt = brief_section(bbody, 'Energi-gas / CNG topic to teach (from product_matrix.md)') \
                    or brief_section(bbody, 'Energi-gas / CNG topic to teach')
        anchor_txt = brief_section(bbody, 'PGN Gagas anchor (max 2–3 self-mentions; usually the closing)') \
                     or brief_section(bbody, 'PGN Gagas anchor')
        def first_clause(t, limit=140):
            t = re.sub(r'\s+', ' ', re.sub(r'\*\*|`|^-\s*', '', t)).strip()
            t = re.split(r'(?<=[a-z0-9])\.\s', t)[0] if t else ''
            return (t[:limit]).strip(' .,;')
        gagas_mentions = []
        if teach_txt:  gagas_mentions.append(first_clause(teach_txt) + ' (teach)')
        if anchor_txt: gagas_mentions.append(first_clause(anchor_txt) + ' (anchor)')
        if not gagas_mentions:
            gagas_mentions = [f'{angle} (teach)']

        entry = {
            'id': art_id, 'month': month, 'keyword': keyword, 'keyword_slug': ks,
            'title': title, 'slug': slug, 'angle': angle, 'angle_hash': ahash,
            'search_intent': intent, 'subtopics': subtopics,
            'gagas_mentions': gagas_mentions,
            'internal_links': il_urls,
            'external_citations': [u for u, _ in ec_pairs],
            'word_count': ffm.get('word_count', 0),
            'status': 'editor-approved',
            'paths': {
                'id_md': f'monthly_runs/{month}/final/{brief_id}.id.md',
                'id_docx': f'monthly_runs/{month}/final/{brief_id}.id.docx',
                'qc': f'monthly_runs/{month}/final/{brief_id}.qc.md',
            },
            'published_at': None, 'live_url': None,
        }
        articles.append(entry)

        # ---- by_keyword record ----
        notes_future = brief_section(bbody, 'Notes for future strategist runs')
        angle_summary = brief_section(bbody, 'Distinct angle vs. history')
        hooks = brief_section(bbody, 'Hook hypothesis')
        h2s = h2_list(fbody)
        il_lines = '\n'.join(f'- {u} — anchor: "{a}"' for u, a in il_pairs) or '- (none)'
        ec_lines = '\n'.join(f'- {u} — {c}' for u, c in ec_pairs) or '- (none)'
        h2_lines = '\n'.join(f'{i+1}. {h}' for i, h in enumerate(h2s)) or '(none)'
        sub_lines = '\n'.join(f'- {s}' for s in subtopics) or '- (none)'
        rec_md = f"""---
id: {art_id}
keyword: {keyword}
title: {title}
angle: {angle}
month: {month}
status: editor-approved
---

# Article notes

## Angle summary
{angle_summary or hooks or angle}

## Subtopics covered
{sub_lines}

## Sections (H2s)
{h2_lines}

## Internal links used
{il_lines}

## External citations
{ec_lines}

## Topic taught / Gagas anchor
{('- ' + ' ; '.join(gagas_mentions)) if gagas_mentions else '- (n/a)'}

## Notes for future strategist runs
{notes_future or '(none captured in brief)'}
"""
        bykw_dir = os.path.join('articles_history', 'by_keyword', ks)
        os.makedirs(bykw_dir, exist_ok=True)
        rec_path = os.path.join(bykw_dir, f'{slug}.md')
        with open(rec_path, 'w', encoding='utf-8') as f:
            f.write(rec_md)
        committed.append((brief_id, art_id, slug, ffm.get('word_count', 0), rec_path))
        print(f'  OK   {brief_id} -> {art_id}  ({slug})')

    # ---- write index.json ----
    index['last_updated'] = datetime.date.today().isoformat()
    with open(idx_path, 'w', encoding='utf-8') as f:
        json.dump(index, f, ensure_ascii=False, indent=2)
    print(f'\nindex.json now holds {len(articles)} entries (+{len(committed)}).')

    # ---- docx generation via md-to-docx.ps1 (one loop, this run) ----
    print('\nGenerating .docx ...')
    for brief_id, art_id, slug, wc, rec_path in committed:
        inp = os.path.join(final_dir, brief_id + '.id.md')
        cmd = ['powershell.exe', '-ExecutionPolicy', 'Bypass', '-File',
               os.path.join('tools', 'md-to-docx.ps1'), '-InputPath', inp]
        try:
            r = subprocess.run(cmd, capture_output=True, text=True, timeout=180)
            out_docx = inp[:-3] + '.docx'
            if os.path.exists(out_docx):
                docx_ok.append(brief_id)
            else:
                docx_fail.append((brief_id, (r.stderr or r.stdout or '').strip()[:200]))
        except Exception as e:
            docx_fail.append((brief_id, str(e)[:200]))

    # ---- report ----
    print('\n==================== CURATION REPORT ====================')
    print(f'month: {month}')
    print(f'committed: {len(committed)} | skipped: {len(skipped)} | docx ok: {len(docx_ok)} | docx fail: {len(docx_fail)}')
    print('\nCommitted (running id / words):')
    for brief_id, art_id, slug, wc, _ in committed:
        print(f'  {art_id:<38} {wc:>5}w  {slug}')
    if skipped:
        print('\nSkipped (not approve):')
        for b, r in skipped:
            print(f'  {b}: {r}')
    if docx_fail:
        print('\ndocx FAILED:')
        for b, err in docx_fail:
            print(f'  {b}: {err}')
    report = {'month': month, 'committed': len(committed), 'skipped': skipped,
              'docx_ok': docx_ok, 'docx_fail': docx_fail,
              'ids': [a for _, a, _, _, _ in committed]}
    with open(os.path.join('monthly_runs', month, 'curation_report.json'), 'w', encoding='utf-8') as f:
        json.dump(report, f, ensure_ascii=False, indent=2)
    print(f'\nReport: monthly_runs/{month}/curation_report.json')

if __name__ == '__main__':
    main()
