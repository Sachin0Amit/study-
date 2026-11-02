# Repair WE4: replace the broken block (literal newlines + single backslashes)
# with correct file-level content (\\n sequences, doubled latex backslashes).
import io

P = 'src/data/knowledge/subjects/mathematics-unified/02-algebra.ts'
src = io.open(P, encoding='utf-8').read()

start_marker = "      {\n        kind: 'example',\n        title: 'Substitution under the order-of-operations law',"
end_marker = "      {\n        kind: 'callout',\n        title: 'Where the grammar pays',"

i = src.find(start_marker)
j = src.find(end_marker)
assert i != -1 and j != -1 and i < j, (i, j)

NL = chr(92) + 'n'      # file-level backslash-n (two chars)
BS = chr(92) * 2        # file-level doubled backslash

steps = []
steps.append("          'Identify what is asked: the total energy of a 2 kg mass moving at 3 m/s at height 5 m above the ground (taking $g = 10$ m/s$^2$) is" + NL + NL + "$$E = " + BS + "tfrac{1}{2}mv^2 + mgh$$" + NL + NL + "evaluate it, and then test what the formula says at $v = -3$.',")
steps.append("          'Discipline first: bracket every substituted value BEFORE computing — the expression is $" + BS + "tfrac{1}{2}mv^2 + mgh$, so with $m = 2$, $v = 3$, $h = 5$:" + NL + NL + "$$E = " + BS + "tfrac{1}{2} " + BS + "times 2 " + BS + "times (3)^2 + 2 " + BS + "times 10 " + BS + "times 5$$',")
steps.append("          'Apply the order of operations — the power binds $v$ before any product is taken:" + NL + NL + "$$E = " + BS + "tfrac{1}{2} " + BS + "times 2 " + BS + "times 9 + 2 " + BS + "times 10 " + BS + "times 5 = 9 + 100 = 109$$',")
steps.append("          'State the result: $E = 109$ joules — $9$ J of kinetic energy riding on $100$ J of potential energy.',")
steps.append("          'Now the sign test: at $v = -3$ the square erases the sign, $(-3)^2 = 9$, so" + NL + NL + "$$E = " + BS + "tfrac{1}{2} " + BS + "times 2 " + BS + "times (-3)^2 + 100 = 109$$" + NL + NL + "— the same $109$ joules. Kinetic energy depends on speed squared, not on direction of motion: the formula" + chr(92) + "'s structure, read honestly through substitution.',")

block = (
    "      {\n"
    "        kind: 'example',\n"
    "        title: 'Substitution under the order-of-operations law',\n"
    "        steps: [\n" + "\n".join(steps) + "\n        ],\n      },\n"
)

src = src[:i] + block + src[j:]
io.open(P, 'w', encoding='utf-8').write(src)
print('WE4 repaired')
