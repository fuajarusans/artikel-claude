#!/usr/bin/env python3
"""
finalize_drafts.py - one-shot batch finalizer for a monthly_runs drafts folder.

Loops EVERY *.id.md draft in the target folder and, in a single run:
  1. Rechecks the canonical word count (identical algorithm to tools/count_words.py).
  2. Applies SAFE markdown hygiene fixes (no prose is deleted):
       - strip trailing whitespace
       - collapse 3+ blank lines to one
       - guarantee a blank line around headings, {IMAGE_NN} placeholders and tables
       - normalise bullet markers (* / + -> -)
       - exactly one trailing newline
  3. Syncs the frontmatter `word_count:` to the freshly counted value.
  4. Prints a report and writes finalize_report.json, flagging any draft still > MAX
     (those need semantic tightening by the editor stage - a script must NOT blindly
      delete sentences, or it would drop the verified hedges/caveats).

Usage:  python tools/finalize_drafts.py [drafts_dir]
Default dir: monthly_runs/2026-07-2/drafts
"""
import re, sys, os, json, glob

MAX_WORDS = 1600
BAND_LO, BAND_HI = 1200, 1600

def count_words(content: str) -> int:
    """Replicates tools/count_words.py exactly."""
    body = re.sub(r'^---.*?---\s*', '', content, flags=re.DOTALL)
    body = re.sub(r'\{IMAGE_\d+:[^\}]+\}', '', body)
    body = re.sub(r'\[([^\]]+)\]\([^\)]+\)', r'\1', body)
    body = re.sub(r'https?://\S+', '', body)
    body = re.sub(r'^#+\s*', '', body, flags=re.MULTILINE)
    body = re.sub(r'^\|[\-\s\|]+\|$', '', body, flags=re.MULTILINE)
    body = re.sub(r'[*_`>|\\]', '', body)
    body = re.sub(r'^-{3,}$', '', body, flags=re.MULTILINE)
    body = re.sub(r'\s+', ' ', body).strip()
    return len(body.split())

def split_frontmatter(content: str):
    """Returns (frontmatter_including_fences_or_None, body)."""
    m = re.match(r'^(---\n.*?\n---\n)(.*)$', content, flags=re.DOTALL)
    if m:
        return m.group(1), m.group(2)
    return None, content

def hygiene(body: str) -> str:
    lines = [ln.rstrip() for ln in body.split('\n')]

    # normalise bullet markers at line start (indent-aware)
    norm = []
    for ln in lines:
        norm.append(re.sub(r'^(\s*)[*+]\s+', r'\1- ', ln))
    lines = norm

    is_heading = lambda s: bool(re.match(r'^#{1,6}\s', s))
    is_image   = lambda s: '{IMAGE_' in s
    is_table   = lambda s: s.lstrip().startswith('|')

    out = []
    def last_nonblank_is_table():
        for x in reversed(out):
            if x.strip() == '':
                return False
            return is_table(x)
        return False

    for i, ln in enumerate(lines):
        blank = (ln.strip() == '')
        if blank:
            if out and out[-1].strip() == '':
                continue  # collapse consecutive blanks
            out.append('')
            continue
        # ensure a blank line before headings / images / start-of-table
        needs_gap_before = is_heading(ln) or is_image(ln) or (is_table(ln) and not last_nonblank_is_table())
        if needs_gap_before and out and out[-1].strip() != '':
            out.append('')
        out.append(ln)
        # ensure a blank line after headings / images
        if is_heading(ln) or is_image(ln):
            nxt = lines[i+1] if i + 1 < len(lines) else ''
            if nxt.strip() != '':
                out.append('')

    # trim leading/trailing blank lines, then exactly one trailing newline
    while out and out[0].strip() == '':
        out.pop(0)
    while out and out[-1].strip() == '':
        out.pop()
    return '\n'.join(out) + '\n'

def sync_word_count(fm: str, count: int):
    """Returns (new_fm, changed)."""
    if re.search(r'^word_count:.*$', fm, flags=re.MULTILINE):
        new_fm = re.sub(r'^word_count:.*$', f'word_count: {count}', fm, flags=re.MULTILINE)
        return new_fm, (new_fm != fm)
    # insert before closing fence
    new_fm = fm[:-4] + f'word_count: {count}\n---\n' if fm.endswith('---\n') else fm
    return new_fm, (new_fm != fm)

def main():
    drafts_dir = sys.argv[1] if len(sys.argv) > 1 else 'monthly_runs/2026-07-2/drafts'
    files = sorted(glob.glob(os.path.join(drafts_dir, '*.id.md')))
    if not files:
        print(f'No *.id.md drafts found in {drafts_dir}')
        sys.exit(1)

    rows, over = [], []
    for path in files:
        with open(path, 'r', encoding='utf-8') as f:
            original = f.read()
        fm, body = split_frontmatter(original)
        new_body = hygiene(body)
        count = count_words((fm or '') + new_body)
        changed_fm = False
        if fm is not None:
            fm, changed_fm = sync_word_count(fm, count)
        new_content = (fm or '') + new_body
        changed = (new_content != original)
        if changed:
            with open(path, 'w', encoding='utf-8') as f:
                f.write(new_content)
        name = os.path.basename(path).replace('.id.md', '')
        status = 'OK' if count <= MAX_WORDS else 'OVER'
        rows.append({'id': name, 'words': count, 'status': status,
                     'in_band': BAND_LO <= count <= BAND_HI, 'rewrote_file': changed})
        if count > MAX_WORDS:
            over.append((name, count))

    rows.sort(key=lambda r: r['id'])
    print(f'\n=== finalize_drafts: {len(files)} drafts in {drafts_dir} ===')
    print(f'{"id":<32} {"words":>6}  {"status":<5} {"file"}')
    for r in rows:
        print(f'{r["id"]:<32} {r["words"]:>6}  {r["status"]:<5} {"rewritten" if r["rewrote_file"] else "unchanged"}')
    n_ok = sum(1 for r in rows if r['status'] == 'OK')
    print(f'\n{n_ok}/{len(rows)} within <= {MAX_WORDS} words.')
    if over:
        print(f'{len(over)} still OVER {MAX_WORDS} (editor must tighten, script will NOT delete prose):')
        for name, c in over:
            print(f'   - {name}: {c}')
    else:
        print('All drafts within the ceiling.')

    report_path = os.path.join(drafts_dir, 'finalize_report.json')
    with open(report_path, 'w', encoding='utf-8') as f:
        json.dump({'dir': drafts_dir, 'max_words': MAX_WORDS, 'rows': rows,
                   'over': [{'id': n, 'words': c} for n, c in over]}, f, indent=2)
    print(f'\nReport written: {report_path}')

if __name__ == '__main__':
    main()
