import re, sys

path = sys.argv[1] if len(sys.argv) > 1 else 'monthly_runs/2026-06/final/erp-migration-to-the-cloud-01.id.md'

with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Strip YAML frontmatter
body = re.sub(r'^---.*?---\s*', '', content, flags=re.DOTALL)

# Remove image placeholders
body = re.sub(r'\{IMAGE_\d+:[^\}]+\}', '', body)

# Remove markdown link syntax - keep anchor text
body = re.sub(r'\[([^\]]+)\]\([^\)]+\)', r'\1', body)

# Remove bare URLs
body = re.sub(r'https?://\S+', '', body)

# Remove heading markers
body = re.sub(r'^#+\s*', '', body, flags=re.MULTILINE)

# Remove table separator lines
body = re.sub(r'^\|[\-\s\|]+\|$', '', body, flags=re.MULTILINE)

# Remove markdown formatting chars
body = re.sub(r'[*_`>|\\]', '', body)

# Remove horizontal rules
body = re.sub(r'^-{3,}$', '', body, flags=re.MULTILINE)

# Clean whitespace
body = re.sub(r'\s+', ' ', body).strip()

words = body.split()
print(f'Word count: {len(words)}')
