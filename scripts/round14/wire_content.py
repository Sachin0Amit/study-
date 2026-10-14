#!/usr/bin/env python3
"""Rewrites the round-14 import blocks in src/data/content/index.ts based on files on disk.
Idempotent: run any time; it syncs imports + spreads for clrs-ch*/hall-ch*/cpp-ch* files."""
import glob, re

# discover files + export names
entries = []  # (file_stem, export_name)
for prefix in ['clrs', 'hall', 'cpp']:
    files = glob.glob(f'src/data/content/{prefix}-ch*.ts')
    files.sort(key=lambda p: int(re.search(r'-ch(\d+)\.ts$', p).group(1)))
    for f in files:
        stem = f.split('/')[-1][:-3]  # e.g. clrs-ch1
        m = re.search(r"export const (\w+Content): SectionContent\[\]", open(f).read())
        if m:
            entries.append((stem, m.group(1)))

imports = [f"import {{ {e} }} from './{s}'" for s, e in entries]
spreads = [f"  ...{e}," for e in [e for _, e in entries]]

block_import = "// ---- Round 14: CLRS / Halliday / C++ master content imports (auto-synced by scripts/round14/wire_content.py) ----\n" + "\n".join(imports)
block_spread = "  // ---- Round 14 books ----\n" + "\n".join(spreads)

src = open('src/data/content/index.ts').read()

# replace or insert the import block right before "const allContent"
if 'const allContent' not in src:
    raise SystemExit("anchor 'const allContent' not found")
if '// ---- Round 14:' in src:
    src = re.sub(r"// ---- Round 14: CLRS / Halliday / C\+\+ master content imports.*?(?=const allContent)",
                 block_import + "\n\n", src, flags=re.S)
else:
    src = src.replace('const allContent', block_import + "\n\nconst allContent")

# replace or insert the spread block right before the closing "]" of allContent
if '  // ---- Round 14 books ----' in src:
    src = re.sub(r"  // ---- Round 14 books ----.*?\n\]", block_spread + "\n]", src, flags=re.S)
else:
    # find the allContent array end: the "]" after the last spread, followed by contentMap
    src = src.replace("\n]\n\nconst contentMap", block_spread + "\n]\n\nconst contentMap")

open('src/data/content/index.ts', 'w').write(src)
print(f"Wired {len(entries)} content files into index.ts")
for s, e in entries[:5]: print("  e.g.", s, "->", e)
