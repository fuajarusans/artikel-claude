#!/usr/bin/env python3
"""One-shot: re-derive clean gagas_mentions for a month's committed entries.
Fixes mid-word truncation in index.json[<month>] entries and the matching
by_keyword record's '## Topic taught / Gagas anchor' line. In-place, no appends."""
import re, sys, os, json, yaml

def load_fm(path):
    with open(path, 'r', encoding='utf-8') as f:
        txt = f.read()
    m = re.match(r'^---\n(.*?)\n---\n?(.*)$', txt, flags=re.DOTALL)
    if not m: return {}, txt
    return (yaml.safe_load(m.group(1)) or {}), m.group(2)

def section(body, heading):
    m = re.compile(r'^##\s+' + re.escape(heading) + r'\s*$(.*?)(?=^##\s|\Z)',
                   flags=re.DOTALL | re.MULTILINE).search(body)
    return m.group(1).strip() if m else ''

def clean_clause(t, limit=160):
    t = re.sub(r'\s+', ' ', re.sub(r'\*\*|`', '', t)).strip()
    t = re.sub(r'^-\s*', '', t)
    # first sentence
    t = re.split(r'(?<=[a-z0-9\)])\.\s', t)[0].strip(' .,;:')
    if len(t) > limit:                       # cut at last word boundary <= limit
        t = t[:limit].rsplit(' ', 1)[0].strip(' .,;:')
    return t

def main():
    month = sys.argv[1] if len(sys.argv) > 1 else '2026-09'
    idx = json.load(open('articles_history/index.json', encoding='utf-8'))
    changed = 0
    for e in idx['articles']:
        if e.get('month') != month:
            continue
        # brief_id from the id_md path
        bid = os.path.basename(e['paths']['id_md']).replace('.id.md', '')
        bfm, bbody = load_fm(os.path.join('monthly_runs', month, 'briefs', bid + '.brief.md'))
        teach = section(bbody, 'Energi-gas / CNG topic to teach (from product_matrix.md)') \
                or section(bbody, 'Energi-gas / CNG topic to teach')
        anchor = section(bbody, 'PGN Gagas anchor (max 2–3 self-mentions; usually the closing)') \
                 or section(bbody, 'PGN Gagas anchor')
        gm = []
        if teach:
            gm.append(clean_clause(teach) + ' (teach)')
        if anchor:
            a = anchor
            a = re.sub(r'^-?\s*\*\*Service/credential to anchor the CTA\*\*:\s*', '', a.strip())
            gm.append(clean_clause(a) + ' (anchor)')
        if not gm:
            continue
        e['gagas_mentions'] = gm
        # patch the by_keyword record
        rec = os.path.join('articles_history', 'by_keyword', e['keyword_slug'], e['slug'] + '.md')
        if os.path.exists(rec):
            with open(rec, encoding='utf-8') as f:
                txt = f.read()
            new_line = '- ' + ' ; '.join(gm)
            txt2 = re.sub(r'(##\s+Topic taught / Gagas anchor\s*\n)(.*?)(?=\n##\s)',
                          lambda m: m.group(1) + new_line + '\n', txt, flags=re.DOTALL)
            if txt2 != txt:
                with open(rec, 'w', encoding='utf-8') as f:
                    f.write(txt2)
        changed += 1
    json.dump(idx, open('articles_history/index.json', 'w', encoding='utf-8'),
              ensure_ascii=False, indent=2)
    print(f'Re-derived gagas_mentions for {changed} {month} entries (index.json + by_keyword records).')

if __name__ == '__main__':
    main()
