# Rewrite §71.1 — Part B: worked examples (display-carrying steps) + NEW example 4.
import io

P = 'src/data/knowledge/subjects/mathematics-unified/02-algebra.ts'
src = io.open(P, encoding='utf-8').read()
edits = 0

def rep(old, new):
    global src, edits
    assert old in src, 'NOT FOUND: ' + old[:90]
    assert src.count(old) == 1, 'AMBIGUOUS: ' + old[:90]
    src = src.replace(old, new)
    edits += 1

# ---- WE1 ----
rep(
 r"""        steps: [
          'Identify what is asked: simplify 3x(2x − 5) − 2x(x − 4) + 7x fully.',
          'Expand with the distributive law, signs attached: 3x × 2x = 6x², 3x × (−5) = −15x, −2x × x = −2x², −2x × (−4) = +8x. The expression becomes 6x² − 15x − 2x² + 8x + 7x.',
          'Collect like terms: the x² family holds (6 − 2)x² = 4x²; the x family holds −15 + 8 + 7 = 0, so the x-terms cancel completely.',
          'State the result: the expression simplifies to 4x² — and the vanishing middle is a signal to look for structure: 4x² = (2x)².',
          'Reuse the shapes in a rearrangement: from y = 4x² − k, undo in reverse order — add k, divide by 4, square-root — giving x = ±√((y + k)/4), both roots kept.',
        ],""",
 r"""        steps: [
          'Identify what is asked: simplify $3x(2x - 5) - 2x(x - 4) + 7x$ fully — expand, collect, and read any structure the result reveals.',
          'Expand each product with the distributive law, signs attached to their terms:\n\n$$3x(2x - 5) = 6x^2 - 15x$$\n$$-2x(x - 4) = -2x^2 + 8x$$\n\nso the whole expression becomes $$6x^2 - 15x - 2x^2 + 8x + 7x$$',
          'Collect like terms, families apart:\n\n$$(6 - 2)x^2 = 4x^2 \\qquad -15 + 8 + 7 = 0$$\n\nThe $x$-family sums to zero — the entire middle cancels.',
          'State the result: the expression simplifies to $$4x^2 = (2x)^2$$ — and the vanishing middle was a signal: a perfect square was hiding under the noise.',
          'Reuse the shapes in a rearrangement: from $$y = 4x^2 - k$$ undo in reverse order — add $k$, divide by $4$, square-root, both roots kept:\n\n$$x = \\pm\\sqrt{\\frac{y + k}{4}}$$',
        ],""",
)

# ---- WE2 ----
rep(
 r"""        steps: [
          'Identify what is asked: rewrite x⁴ − 16 as a product that cannot be broken further.',
          'First move — highest common factor: x⁴ and 16 share nothing beyond 1, so go straight to the named patterns.',
          'Recognise the difference of squares: x⁴ = (x²)² and 16 = 4², so x⁴ − 16 = (x² − 4)(x² + 4).',
          'Keep going: the first factor is itself a difference of squares, x² − 4 = (x − 2)(x + 2). The second, x² + 4, is a sum of squares and stops there.',
          'State the result: x⁴ − 16 = (x − 2)(x + 2)(x² + 4). Verify by expanding back in pairs: (x − 2)(x + 2) = x² − 4, then (x² − 4)(x² + 4) = x⁴ − 16. Stopping a stage early is half an answer — factorise until nothing factors.',
        ],""",
 r"""        steps: [
          'Identify what is asked: rewrite $x^4 - 16$ as a product that cannot be broken further.',
          'First move — highest common factor: $x^4$ and $16$ share nothing beyond $1$, so go straight to the named patterns.',
          'Recognise the difference of squares — both parts are perfect squares:\n\n$$x^4 = (x^2)^2, \\qquad 16 = 4^2$$\n$$x^4 - 16 = (x^2 - 4)(x^2 + 4)$$',
          'Keep going: the first factor is itself a difference of squares,\n\n$$x^2 - 4 = (x - 2)(x + 2)$$\n\nwhile the second, $x^2 + 4$, is a sum of squares and stops there.',
          'State the result: $$x^4 - 16 = (x - 2)(x + 2)(x^2 + 4)$$ Verify by expanding back in pairs: $(x - 2)(x + 2) = x^2 - 4$, then $(x^2 - 4)(x^2 + 4) = x^4 - 16$. Stopping a stage early is half an answer — factorise until nothing factors.',
        ],""",
)

# ---- WE3 ----
rep(
 r"""        steps: [
          'Identify what is asked: the total surface of a closed cylindrical tank of radius r and height h is S = 2πr² + 2πrh; make h the subject, then find h when S = 1,848 cm² and r = 14 cm, taking π = 22/7.',
          'Concept: h is multiplied by 2πr after the term 2πr² was added — the last operation applied is the addition, so undo it first: S − 2πr² = 2πrh.',
          'Divide both sides by 2πr (r must be non-zero, which a tank radius always is): h = (S − 2πr²)/(2πr).',
          'Substitute: 2πr² = 2 × (22/7) × 14 × 14 = 2 × 22 × 2 × 14 = 1,232, so the numerator is 1,848 − 1,232 = 616. The denominator is 2 × (22/7) × 14 = 88.',
          'Calculate: h = 616/88 = 7.',
          'State the result: h = 7 cm — a tank 28 cm across and 7 cm tall, whose ends contribute 1,232 cm² and curved side 616 cm², summing to 1,848: the check that certifies the rearrangement.',
        ],""",
 r"""        steps: [
          'Identify what is asked: the total surface of a closed cylindrical tank of radius $r$ and height $h$ is\n\n$$S = 2\\pi r^2 + 2\\pi rh$$\n\nmake $h$ the subject, then find $h$ when $S = 1{,}848$ cm$^2$ and $r = 14$ cm, taking $\\pi = 22/7$.',
          'Concept: $h$ is multiplied by $2\\pi r$ after the term $2\\pi r^2$ was added — the last operation applied is the addition, so undo it first:\n\n$$S - 2\\pi r^2 = 2\\pi rh$$',
          'Divide both sides by $2\\pi r$ ($r$ must be non-zero, which a tank radius always is):\n\n$$h = \\frac{S - 2\\pi r^2}{2\\pi r}$$',
          'Substitute and compute each piece separately:\n\n$$2\\pi r^2 = 2 \\times \\frac{22}{7} \\times 14 \\times 14 = 1{,}232$$\n$$S - 2\\pi r^2 = 1{,}848 - 1{,}232 = 616 \\qquad 2\\pi r = 2 \\times \\frac{22}{7} \\times 14 = 88$$',
          'Calculate:\n\n$$h = \\frac{616}{88} = 7$$',
          'State the result: $h = 7$ cm — a tank 28 cm across and 7 cm tall, whose ends contribute $1{,}232$ cm$^2$ and curved side $616$ cm$^2$, summing to $1{,}848$: the check that certifies the rearrangement.',
        ],""",
)

# ---- NEW WE4, inserted after WE3's closing brace ----
anchor = """      {
        kind: 'callout',
        title: 'Where the grammar pays',"""
newexample = """      {
        kind: 'example',
        title: 'Substitution under the order-of-operations law',
        steps: [
          'Identify what is asked: the total energy of a 2 kg mass moving at 3 m/s at height 5 m above the ground (taking $g = 10$ m/s$^2$) is\n\n$$E = \\tfrac{1}{2}mv^2 + mgh$$\n\nevaluate it, and then test what the formula says at $v = -3$.',
          'Discipline first: bracket every substituted value BEFORE computing — the expression is $\\tfrac{1}{2}mv^2 + mgh$, so with $m = 2$, $v = 3$, $h = 5$:\n\n$$E = \\tfrac{1}{2} \\times 2 \\times (3)^2 + 2 \\times 10 \\times 5$$',
          'Apply the order of operations — the power binds $v$ before any product is taken:\n\n$$E = \\tfrac{1}{2} \\times 2 \\times 9 + 2 \\times 10 \\times 5 = 9 + 100 = 109$$',
          'State the result: $E = 109$ joules — $9$ J of kinetic energy riding on $100$ J of potential energy.',
          'Now the sign test: at $v = -3$ the square erases the sign, $(-3)^2 = 9$, so\n\n$$E = \\tfrac{1}{2} \\times 2 \\times (-3)^2 + 100 = 109$$\n\n— the same $109$ joules. Kinetic energy depends on speed squared, not on direction of motion: the formula\\'s structure, read honestly through substitution.',
        ],
      },
      {
        kind: 'callout',
        title: 'Where the grammar pays',"""
rep(anchor, newexample)

io.open(P, 'w', encoding='utf-8').write(src)
print('Part B applied:', edits, 'edits')
