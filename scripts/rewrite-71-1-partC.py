# Rewrite §71.1 — Part C: callouts (expanded pitfalls), terms (+2), quiz ($...$ + 1 new), recap (+2).
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

NL = chr(92) + 'n'
BS = chr(92) * 2

# ---- applications callout: light $...$ conversion ----
rep(
 "        text: 'Every formula-driven subject rearranges exactly this way — t = (v − u)/a above is kinematics doing algebra. Code and spreadsheets follow the same order of operations and distributive law. The quantity-comparison lessons open their decision ladder with the rung “combine like terms” — this lesson’s first command under time pressure — and the mental-arithmetic lesson’s tricks are these three laws run on numbers.',",
 "        text: 'Every formula-driven subject rearranges exactly this way — $t = (v - u)/a$ above is kinematics doing algebra. Code and spreadsheets follow the same order of operations and distributive law. The quantity-comparison lessons open their decision ladder with the rung “combine like terms” — this lesson’s first command under time pressure — and the mental-arithmetic lesson’s tricks are these three laws run on numbers.',",
)

# ---- pitfalls callout: expanded with the WHY + substitution trap ----
rep(
 "        text: 'Dropping a minus while collecting or expanding — signs travel attached to their terms. Multiplying only the first inside term: the law hits everything inside, and a minus in front of a bracket flips every sign within. Announcing (a + b)² = a² + b² — the most-exploited error in the subject. Skipping the highest-common-factor check, and stopping a factorisation one stage early. Treating 3x² as (3x)² — the power binds only the letter. Sliding symbols across without operating on both sides. And solving when the question says “show that”: identities are verified, never solved.',",
 "        text: 'Dropping a minus while collecting or expanding — signs travel attached to their terms, and a minus in front of a bracket flips every sign within, which is why $5a - (2a - 3b)$ gains $+3b$. Multiplying only the first inside term — the distributive law hits everything inside: $2x(3x^2 - 4x + 7)$ must gain three products, not one. Announcing $(a + b)^2 = a^2 + b^2$ — the most-exploited error in the subject: the area model’s two cross-strips are exactly the missing $2ab$. Skipping the highest-common-factor check, or stopping a factorisation one stage early — $4(x^2 - 25)$ is not finished until the difference of squares has fired. Treating $3x^2$ as $(3x)^2$ — the power binds only the letter: at $x = -2$, $$3(-2)^2 = 3 \\\\times 4 = 12 \\\\qquad\\\\text{while}\\\\qquad (3 \\\\times -2)^2 = 36$$ Substituting without brackets invites the same trap. Sliding symbols across an equals sign without operating on both sides — the balance breaks. And solving when the question says “show that”: identities are verified, never solved.',",
)

# ---- terms: add Expand and Substitution ----
rep(
 "          { term: 'Distributive law', def: 'a(b + c) = ab + ac: expanding read forwards, factorising read backwards.' },",
 "          { term: 'Distributive law', def: 'a(b + c) = ab + ac: expanding read forwards, factorising read backwards.' },\n          { term: 'Expand', def: 'Multiply out every bracket with the distributive law until none remain — the outside factor meets every inside term.' },\n          { term: 'Substitution', def: 'Replacing a letter with a value — brackets around every substituted value, powers applied before products.' },",
)

# ---- quiz: convert questions/explains to $...$, add substitution question ----
rep(
 "            q: 'In 5x³ − 2x + 8, what are the coefficient of x and the degree of the expression?',",
 "            q: 'In $5x^3 - 2x + 8$, what are the coefficient of $x$ and the degree of the expression?',",
)
rep(
 "            explain: 'The x-term is −2x: coefficient −2, sign included. Term degrees are 3, 1 and 0; the expression takes the highest, 3. Option D quotes the leading coefficient of 5x³ instead of the asked x-term.',",
 "            explain: 'The $x$-term is $-2x$: coefficient $-2$, sign included. Term degrees are $3$, $1$ and $0$; the expression takes the highest, $3$. Option D quotes the leading coefficient of $5x^3$ instead of the asked $x$-term.',",
)
rep(
 "            q: 'Which expression equals (2x + 3)²?',",
 "            q: 'Which expression equals $(2x + 3)^2$',",
)
rep(
 "            explain: 'Apply (a + b)² = a² + 2ab + b² with a = 2x, b = 3: middle term 2 × 2x × 3 = 12x. Option B forgets the middle; option C halves it; option D fails to square the coefficient.',",
 "            explain: 'Apply $(a + b)^2 = a^2 + 2ab + b^2$ with $a = 2x$, $b = 3$: middle term $2 \\\\times 2x \\\\times 3 = 12x$. Option B forgets the middle; option C halves it; option D fails to square the coefficient.',",
)
rep(
 "            q: 'Factorise 4x² − 25.',",
 "            q: 'Factorise $4x^2 - 25$.',",
)
rep(
 "            explain: '4x² = (2x)² and 25 = 5²: difference of squares with a = 2x, b = 5. Option C is the perfect square — it expands to 4x² − 20x + 25; option B does not multiply back.',",
 "            explain: '$4x^2 = (2x)^2$ and $25 = 5^2$: difference of squares with $a = 2x$, $b = 5$. Option C is the perfect square — it expands to $4x^2 - 20x + 25$; option B does not multiply back.',",
)
rep(
 "            q: 'Factorise x² − x − 12.',",
 "            q: 'Factorise $x^2 - x - 12$.',",
)
rep(
 "            explain: 'The pair must multiply to −12 and add to −1: −4 and 3. Every wrong option has the right product but the wrong sum — (x + 4)(x − 3) would give a middle term of +x.',",
 "            explain: 'The pair must multiply to $-12$ and add to $-1$: $-4$ and $3$. Every wrong option has the right product but the wrong sum — $(x + 4)(x - 3)$ would give a middle term of $+x$.',",
)
rep(
 "            q: 'Rearrange p = 2(a + b) to make b the subject.',",
 "            q: 'Rearrange $p = 2(a + b)$ to make $b$ the subject.',",
)
rep(
 "            explain: 'Divide by 2 first: a + b = p/2; then subtract a: b = p/2 − a = (p − 2a)/2. Option A skips the division — the 2 multiplies both a and b, so undoing must touch both.',",
 "            explain: 'Divide by $2$ first: $a + b = p/2$; then subtract $a$: $b = p/2 - a = (p - 2a)/2$. Option A skips the division — the $2$ multiplies both $a$ and $b$, so undoing must touch both.',",
)
rep(
 "            options: ['3x + 1 = 10', 'x² = 16', '(x + 1)² = x² + 2x + 1', '2x − 4 = 0'],",
 "            options: ['$3x + 1 = 10$', '$x^2 = 16$', '$(x + 1)^2 = x^2 + 2x + 1$', '$2x - 4 = 0$'],",
)
rep(
 "            q: 'Making x the subject of ax − bx = c gives:',",
 "            q: 'Making $x$ the subject of $ax - bx = c$ gives:',",
)
rep(
 "            explain: 'The letter appears twice: collect first, x(a − b) = c, then divide by (a − b). Option B subtracts the letters as if they were numbers; option C ignores the minus between the terms.',",
 "            explain: 'The letter appears twice: collect first, $x(a - b) = c$, then divide by $(a - b)$. Option B subtracts the letters as if they were numbers; option C ignores the minus between the terms.',",
)

# ---- NEW question 8 (substitution), appended after q7 ----
rep(
 "            explain: 'The letter appears twice: collect first, $x(a - b) = c$, then divide by $(a - b)$. Option B subtracts the letters as if they were numbers; option C ignores the minus between the terms.',\n          },\n        ],\n      },",
 "            explain: 'The letter appears twice: collect first, $x(a - b) = c$, then divide by $(a - b)$. Option B subtracts the letters as if they were numbers; option C ignores the minus between the terms.',\n          },\n          {\n            q: 'Evaluate $3x^2$ at $x = -2$.',\n            options: ['12', '36', '-12', '-36'],\n            answer: 0,\n            explain: 'Substitute with brackets: $3(-2)^2 = 3 \\\\times 4 = 12$ — the power binds the letter before the coefficient multiplies. Option B computes $(3x)^2$ instead; options C and D mishandle the sign: $(-2)^2 = 4$, never $-4$.',\n          },\n        ],\n      },",
)

# ---- recap: one added item ----
BSX = chr(92) * 2
recap_old = "        'Equations are solved for particular values; identities are shown for all values — and simplify, expand, factorise and rearrange are different commands.',\n      ] },"
recap_new = (
    "        'Equations are solved for particular values; identities are shown for all values — and simplify, expand, factorise and rearrange are different commands.',\n"
    "        'Substitute with brackets around every value — the power binds the letter before the coefficient multiplies: $3(-2)^2 = 12$, not $(3 " + BSX + "times -2)^2$.',\n"
    "      ] },"
)
rep(recap_old, recap_new)

io.open(P, 'w', encoding='utf-8').write(src)
print('Part C applied:', edits, 'edits')
