"""Extract the 5 new topics from the pre-rebase working tree so they can be
re-applied onto the rebased (remote-HEAD) field files. The micronutrients
topic is intentionally DROPPED: remote already authored
'health-nutrition-micronutrients' ('Micronutrients: Vitamins, Minerals and
Hidden Hunger') — zero-repetition rule."""
import json, os

TOPICS = {
    'src/data/knowledge/fields/physical-sciences.ts': ['geo-glaciers-ice-ages', 'astro-moon-phases-eclipses-tides'],
    'src/data/knowledge/fields/life-sciences.ts': ['ecol-population-growth-limits'],
    'src/data/knowledge/fields/health-wellness.ts': ['epidem-outbreak-investigation'],
    'src/data/knowledge/fields/law-governance.ts': ['crim-theories-of-crime'],
}

os.makedirs('/tmp/xpass-topics', exist_ok=True)
manifest = {}
for path, ids in TOPICS.items():
    src = open(path).read()
    for tid in ids:
        marker = "    {\n      id: '" + tid + "',"
        start = src.find(marker)
        assert start != -1, f'{tid} start not found in {path}'
        # find the start of the NEXT topic (or the topics-array terminator)
        next_topic = src.find("    {\n      id: '", start + len(marker))
        tail = src.find("\n  ],\n}", start)
        candidates = [c for c in (next_topic, tail) if c != -1]
        assert candidates, f'{tid} has no end anchor in {path}'
        end = min(candidates)
        block = src[start:end].rstrip()
        # strip any trailing comma on the closing "    }," -> keep "    }," style
        if not block.endswith('},'):
            block = block.rstrip(',\n') + ','
        fname = '/tmp/xpass-topics/' + tid + '.txt'
        open(fname, 'w').write(block + '\n')
        manifest[tid] = {'file': path, 'block': fname, 'chars': len(block)}
        print(tid, '->', fname, len(block), 'chars')

json.dump(manifest, open('/tmp/xpass-topics/manifest.json', 'w'), indent=1)
print('OK')
