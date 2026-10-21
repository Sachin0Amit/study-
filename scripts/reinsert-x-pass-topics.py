"""Re-insert the 5 extracted topic blocks onto the rebased (remote-HEAD)
field files, appending each before the closing of the topics array."""
import json

manifest = json.load(open('/tmp/xpass-topics/manifest.json'))
by_file = {}
for tid, info in manifest.items():
    by_file.setdefault(info['file'], []).append(tid)

for path, tids in by_file.items():
    src = open(path).read()
    anchor = '\n  ],\n}'
    end = src.rfind(anchor)
    assert end != -1, f'topics-array terminator not found in {path}'
    inserts = ''.join('\n' + open('/tmp/xpass-topics/' + t + '.txt').read() for t in tids)
    src = src[:end] + inserts + src[end:]
    open(path, 'w').write(src)
    print('inserted', tids, '->', path)
print('OK')
