# Rewrite §71.1 (math-algebra-notation-manipulation) — Part A: theory paras.
# Equation-style conversion + restored depth (3b re-expansion), prose law bolds.
# File-level latex convention: DOUBLE backslashes inside single-quoted TS strings.
# In this script, r"\\left" = the two file chars backslash-backslash + "left".
import io, sys

P = 'src/data/knowledge/subjects/mathematics-unified/02-algebra.ts'
src = io.open(P, encoding='utf-8').read()
edits = 0

def rep(old, new):
    global src, edits
    assert old in src, 'NOT FOUND: ' + old[:90]
    assert src.count(old) == 1, 'AMBIGUOUS: ' + old[:90]
    src = src.replace(old, new)
    edits += 1

# ---- the three laws ----
rep(
 r"""        text: 'Three laws form the entire legal code of manipulation. The commutative laws say order does not matter: a + b = b + a and ab = ba — though subtraction and division are not covered: 5 − 3 ≠ 3 − 5. The associative laws say grouping does not matter: (a + b) + c = a + (b + c) and (ab)c = a(bc) — the reason terms can be added in any order. The distributive law is the engine of this lesson: a(b + c) = ab + ac — read forwards it expands a bracket, backwards it factorises. Every move in this lesson is one of these three sentences wearing different clothes, and nothing else is permitted: a rewrite must follow from these laws, so checking a manipulation means checking that it did.',""",
 r"""        text: 'Three laws form the entire legal code of manipulation — every rewrite this lesson performs is one of these sentences wearing different clothes, and nothing else is permitted. The **commutative laws** say order does not matter:\n\n$$a + b = b + a \\qquad ab = ba$$\n\nthough subtraction and division are not covered: $5 - 3 \\ne 3 - 5$. The **associative laws** say grouping does not matter — the reason terms can be added in any order:\n\n$$(a + b) + c = a + (b + c) \\qquad (ab)c = a(bc)$$\n\nAnd the **distributive law** is the engine of the lesson — read forwards it expands a bracket, backwards it factorises:\n\n$$a(b + c) = ab + ac$$\n\nA rewrite must follow from these laws, so checking a manipulation means checking that it did: expand the result back, or substitute a number — the law itself is the referee.',""",
)

# ---- expanding para 1 (single bracket + minus) ----
rep(
 r"""        text: 'Expanding means multiplying out every bracket until none remain. For a single bracket the distributive law does everything: 3(2x − 5) = 6x − 15 — the outside factor meets every inside term, not just the first. A minus in front of a bracket is the same move with −1: −(x − 4) = −x + 4 — every inside sign flips. This is where marks are silently lost: 5a − (2a − 3b) equals 5a − 2a + 3b, not 5a − 2a − 3b, because the minus multiplies both inside terms.',""",
 r"""        text: '**Expanding** means multiplying out every bracket until none remain. For a single bracket the distributive law does everything — the outside factor meets EVERY inside term, not just the first:\n\n$$3(2x - 5) = 3 \\cdot 2x + 3 \\cdot (-5) = 6x - 15$$\n\nThree inside terms make the same point three times over:\n\n$$2x(3x^2 - 4x + 7) = 6x^3 - 8x^2 + 14x$$\n\nA minus in front of a bracket is the same move with $-1$ — every inside sign flips:\n\n$$-(x - 4) = -x + 4$$\n\nThis is where marks are silently lost, so set the rule as a displayed contrast:\n\n$$5a - (2a - 3b) = 5a - 2a + 3b \\qquad\\text{(the minus hits BOTH terms)}$$\n$$5a - (2a - 3b) \\ne 5a - 2a - 3b \\qquad\\text{(the classic slip)}$$\n\nThe minus belongs to the bracket, and multiplying $-1$ into $(2a - 3b)$ flips both signs — the $-3b$ becomes $+3b$.',""",
)

# ---- expanding para 2 (two brackets + tag identity) ----
rep(
 r"""        text: 'Two brackets multiply by applying the law twice: (x + 2)(x + 3) = x(x + 3) + 2(x + 3) = x² + 3x + 2x + 6, which collects to x² + 5x + 6. Four products — one for each pairing of an outside term with an inside term; first, outer, inner, last, as a mnemonic to check all four. Notice the pattern: the middle coefficient 5 is the sum of the bracket numbers, the final term 6 their product. The area model in the figure shows why the pattern must hold — one rectangle, sliced four ways, is the whole computation in a picture.',""",
 r"""        text: 'Two brackets multiply by applying the law twice — treat the first bracket as the outside factor:\n\n$$(x + 2)(x + 3) = x(x + 3) + 2(x + 3)$$\n$$= x^2 + 3x + 2x + 6$$\n$$= x^2 + 5x + 6$$\n\nFour products — one for each pairing of an outside term with an inside term; first, outer, inner, last, as a mnemonic to check all four. Notice the pattern: the middle coefficient $5$ is the sum of the bracket numbers, the final term $6$ their product. The general form is worth naming as an identity, because the factorising section runs it in reverse:\n\n$$(x + m)(x + n) = x^2 + (m + n)x + mn \\tag{1}$$\n\nThe area model in the figure shows why the pattern must hold — one rectangle, sliced four ways, is the whole computation in a picture.',""",
)

# ---- factorising para 1 (HCF) ----
rep(
 r"""        text: 'Factorising rewrites a sum as a product — expansion reversed. It matters because products have a property sums lack: a product is zero the moment any factor is zero, the hinge the quadratics lesson will swing. The order of attack is fixed. First, take out the highest common factor. In 6x² + 9x both terms carry x, and 6 and 9 share 3, so 6x² + 9x = 3x(2x + 3) — verified instantly by expanding back. This generalises the highest-common-factor reasoning of the number-system lesson, where the HCF of two whole numbers comes from prime factors; here the idea runs over letters too. Make it the first move even when a fancier pattern waits: 4x² − 100 = 4(x² − 25) = 4(x − 5)(x + 5) needs both, in that order.',""",
 r"""        text: '**Factorising** rewrites a sum as a product — expansion reversed. It matters because products have a property sums lack: a product is zero the moment any factor is zero, the hinge the quadratics lesson will swing. The order of attack is fixed. First, take out the **highest common factor**:\n\n$$6x^2 + 9x = 3x(2x + 3)$$\n\nBoth terms carry $x$, and $6$ and $9$ share $3$ — verified instantly by expanding back. This generalises the highest-common-factor reasoning of the number-system lesson, where the HCF of two whole numbers comes from prime factors; here the idea runs over letters too. Make it the first move even when a fancier pattern waits — both moves compose, in that order:\n\n$$4x^2 - 100 = 4(x^2 - 25) = 4(x - 5)(x + 5)$$',""",
)

# ---- factorising para 2 (named patterns) ----
rep(
 r"""        text: 'Second, recognise the named patterns. The difference of squares: a² − b² = (a − b)(a + b) — expand the right side and the middle terms cancel like a film run forwards and backwards. So x² − 49 = (x − 7)(x + 7) and 9x² − 25 = (3x − 5)(3x + 5). The perfect square runs the derivation above in reverse: a² + 6a + 9 = (a + 3)². The warning cuts both ways: a difference of squares always factorises; a sum of squares a² + b² does not — no rearrangement of signs will ever do it.',""",
 r"""        text: 'Second, recognise the named patterns. The formula block below states the **difference of squares**; expand its right side and the middle terms cancel like a film run forwards and backwards. The instances worth instant recall:\n\n$$x^2 - 49 = (x - 7)(x + 7) \\qquad 9x^2 - 25 = (3x - 5)(3x + 5)$$\n\nThe **perfect square** runs the derivation above in reverse:\n\n$$a^2 + 6a + 9 = (a + 3)^2$$\n\nThe warning cuts both ways: a difference of squares always factorises; a **sum of squares** $a^2 + b^2$ does not — no rearrangement of signs will ever do it, over the ordinary numbers.',""",
)

# ---- factorising para 3 (factor-pair hunt + restored depth) ----
rep(
 r"""        text: 'Third, for expressions of the shape x² + bx + c, hunt a pair of numbers whose product is c and whose sum is b. In x² − x − 12 the pair is −4 and 3: (−4) × 3 = −12, −4 + 3 = −1, so x² − x − 12 = (x − 4)(x + 3). The trick works because (x + m)(x + n) = x² + (m + n)x + mn — m and n must reproduce b and c. Expanding back takes ten seconds and proves the factorisation: make the check automatic, because a wrong factorisation silently poisons every equation solved with it later.',""",
 r"""        text: 'Third, for expressions of the shape $x^2 + bx + c$, hunt a pair of numbers whose product is $c$ and whose sum is $b$ — identity (1) read backwards, with $m$ and $n$ reproducing $b$ and $c$:\n\n$$x^2 - x - 12 = (x - 4)(x + 3) \\qquad (-4) \\times 3 = -12, \\; -4 + 3 = -1$$\n\nThe hunt is systematic, not inspired. For $x^2 + 7x + 12$, list the pairs multiplying to $12$ and read their sums:\n\n$$1 \\times 12 \\to 13 \\qquad 2 \\times 6 \\to 8 \\qquad 3 \\times 4 \\to 7 \\;\\checkmark$$\n\nso $x^2 + 7x + 12 = (x + 3)(x + 4)$. And know when the hunt fails: $x^2 + x + 1$ has no integer pair — the only product-$1$ pair is $1 \\times 1$, summing to $2$ — so it does not factorise over the integers at all; the quadratics lesson opens its other three doors exactly for such equations. Expanding back takes ten seconds and proves a factorisation: make the check automatic, because a wrong factorisation silently poisons every equation solved with it later.',""",
)

# ---- rearranging para 1 ----
rep(
 r"""        text: 'A formula relates several quantities, and rearranging it means making a chosen letter — the subject — stand alone. The method is equation-solving with a different target: undo, in reverse order, the operations applied to the subject, performing each undoing on both sides so the balance survives. From v = u + at: the recipe that built the subject read multiply a by t, then add u; reversed — subtract u, then divide by a — it lands on t = (v − u)/a. The last operation applied is always the first undone: dividing by a before subtracting u would tangle u with a.',""",
 r"""        text: 'A formula relates several quantities, and rearranging it means making a chosen letter — the **subject** — stand alone. The method is equation-solving with a different target: undo, in reverse order, the operations applied to the subject, performing each undoing on both sides so the balance survives. From $v = u + at$: the recipe that built the subject read “multiply $a$ by $t$, then add $u$”; reversed — subtract $u$, then divide by $a$ — it lands on the rearranged form:\n\n$$v = u + at$$\n$$v - u = at \\qquad\\text{(subtract } u \\text{ from both sides)}$$\n$$t = \\frac{v - u}{a} \\qquad\\text{(divide both sides by } a\\text{)}$$\n\nThe last operation applied is always the first undone: dividing by $a$ before subtracting $u$ would tangle $u$ with $a$.',""",
)

# ---- rearranging para 2 (factor-out + restored numeric verification) ----
rep(
 r"""        text: 'When the target letter appears in more than one term, collect those terms first and factor the letter out — the distributive law in the extracting direction. From ax − bx = c: x appears twice, so read the left side as x(a − b) and only then divide, giving x = c/(a − b). Two disciplines govern every rearrangement: whatever is done to one side is done to the other — an equation is a balance, not a conveyor belt for symbols — and the result is verified by substituting convenient numbers into both the original and the rearranged formula; if they disagree, the rearrangement is wrong no matter how plausible it looked.',""",
 r"""        text: 'When the target letter appears in more than one term, collect those terms first and factor the letter out — the distributive law in the extracting direction:\n\n$$ax - bx = c \\;\\Longrightarrow\\; x(a - b) = c \\;\\Longrightarrow\\; x = \\frac{c}{a - b}$$\n\nTwo disciplines govern every rearrangement. Whatever is done to one side is done to the other — an equation is a balance, not a conveyor belt for symbols. And the result is verified by substituting convenient numbers into both the original and the rearranged formula:\n\n$$v = 20, \\; u = 4, \\; a = 2 \\;\\Longrightarrow\\; t = \\frac{20 - 4}{2} = 8 \\qquad\\text{check: } 4 + 2 \\times 8 = 20 \\;\\checkmark$$\n\nIf the two sides disagree, the rearrangement is wrong no matter how plausible it looked.',""",
)

# ---- identities para ----
rep(
 r"""        text: 'An equation is a claim true for particular values: 2x = 10 holds only at x = 5, and solving is the search for those values. An identity is a claim true for every value: 2(x + 3) = 2x + 6 whatever x is, and (a − b)(a + b) = a² − b² whatever a and b are. Identities are the patterns of this lesson stated as permanent facts, often marked with the triple bar ≡. Robert Recorde introduced the equals sign in his 1557 book The Whetstone of Witte, choosing a pair of parallel lines because no two things could be more equal; the identity sign is his symbol under the strictest reading. The distinction changes how you answer: an equation you solve; an identity you verify — expand or factorise one side into the other, never solve. A question phrased “show that …” is an identity question, and answering it with a particular value of x is a category error.',""",
 r"""        text: 'An **equation** is a claim true for particular values, and solving is the search for those values. An **identity** is a claim true for every value — the patterns of this lesson stated as permanent facts, often marked with the triple bar $\\equiv$. Set the two contracts side by side:\n\n$$2x = 10 \\quad\\text{holds only at } x = 5 \\qquad\\text{equation — solve it}$$\n$$2(x + 3) = 2x + 6 \\quad\\text{holds for every } x \\qquad\\text{identity — verify it}$$\n\nVerification means expanding or factorising one side into the other, never solving. To show that $(a - b)(a + b)$ is the difference of squares, expand and watch the middle terms cancel:\n\n$$(a - b)(a + b) = a^2 + ab - ba - b^2 = a^2 - b^2 \\;\\checkmark$$\n\nRobert Recorde introduced the equals sign in his 1557 book The Whetstone of Witte, choosing a pair of parallel lines because no two things could be more equal; the identity sign is his symbol under the strictest reading. A question phrased “show that …” is an identity question, and answering it with a particular value of $x$ is a category error.',""",
)

io.open(P, 'w', encoding='utf-8').write(src)
print('Part A applied:', edits, 'edits')
