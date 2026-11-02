/**
 * Knowledge Universe — Mathematics — Chapter 02: Algebra
 * 3 lessons · ~11,453 words
 * field: Algebra
 * legacy sources: x29-orphan-closure-pass.ts, x63-cengage-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: fields [Algebra]
 *
 * Lessons (snapshot at reorganization):
 *   02.1 math-algebra-notation-manipulation — Algebraic Notation and Manipulation: The Grammar of Expressions
 *   02.2 math-quadratics-completing-square — Quadratics: Four Ways to Solve, One Formula to Rule Them
 *   02.3 math-modulus-logarithm-inequalities — Modulus and Logarithm Inequalities: The Algebra of Distance and of Growth
 */
import type { KnowledgeTopic } from '../../types'

export const mathematicsUnifiedCh02: KnowledgeTopic[] = [
  {
    id: 'math-algebra-notation-manipulation',
    title: 'Algebraic Notation and Manipulation: The Grammar of Expressions',
    domain: 'Mathematics',
    field: 'Algebra',
    branch: 'Elementary Algebra',
    tier: 'core',
    concepts: [
      'Terms, coefficients, variables, degrees',
      'Collecting like terms',
      'Expanding brackets with the distributive law',
      'Factorising: common factor first',
      'Difference of squares and quadratic factor patterns',
      'Rearranging formulae: inverse operations in order',
      'Identities versus equations',
      'Substitution and evaluation',
    ],
    words: 4277,
    readMins: 21,
    addedOn: '2026-10-24',
    blocks: [
      {
        kind: 'para',
        text: 'Baghdad, around 820 CE. In the House of Wisdom, Muhammad ibn Musa al-Khwarizmi sets down a problem the only way his age allowed — as a sentence: “a square and ten of its roots equal thirty-nine dirhams”. We would write it in one line and be done:\n\n$$x^2 + 10x = 39$$\n\nHis readers could not — the symbols did not exist yet, and algebra would stay written in prose for centuries. The Arabic **al-jabr** — restoring what a subtraction removed to the other side — gave the subject its name, and al-Khwarizmi’s Latinised name gave us the word algorithm. The notation this lesson teaches is the end of a long compression: François Viète proposed vowels for unknowns and consonants for knowns in 1591; René Descartes fixed $x$, $y$, $z$ for unknowns in La Géométrie of 1637. What looks like jargon is the most productive notation ever devised: one short line of symbols asserts infinitely many numerical facts at once. This lesson teaches its fluent reading — the anatomy of an expression, the laws that govern it, and the four commands simplify, expand, factorise and rearrange that every later chapter assumes.',
      },
      { kind: 'heading', text: 'From arithmetic to letters' },
      {
        kind: 'para',
        text: 'An **algebraic expression** is a recipe for computing a number, written with letters standing in for values that are unknown or arbitrary. The expression $3x^2 - 5x + 7$ says: square a number $x$, multiply by three, subtract five of the original $x$, and add seven. Letters are the crucial upgrade from arithmetic. In the mental-arithmetic lesson the commutative, associative and distributive laws worked on actual numbers — $7 \\times 98$ was split into $7 \\times (100 - 2)$. A letter is the device for saying this holds for every number: writing the distributive assertion asserts the trick for all values at once — the formalisation that lesson promised. Two writing conventions apply. Multiplication is silent: $3x$ means $3 \\times x$, and $3x^2$ means $3 \\times (x \\times x)$ — the power grabs only the letter, not the coefficient. The two objects are genuinely different, as squaring both shows:\n\n$$3x^2 = 3 \\times (x \\times x) \\qquad\\text{against}\\qquad (3x)^2 = (3x) \\times (3x) = 9x^2$$\n\nThree copies of $x^2$ versus nine. And the arithmetic order of operations still rules: powers first, then multiplication and division, then addition and subtraction, with brackets overriding everything.',
      },
      { kind: 'heading', text: 'The anatomy of an expression' },
      {
        kind: 'para',
        text: 'An expression is built from **terms** — the pieces separated by plus and minus signs. In the model expression there are three of them, each carrying its sign into the dissection:\n\n$$3x^2 - 5x + 7$$\n\nThe sign travels with the term — the second term is $-5x$ — a discipline that prevents the most frequent error in the subject. Each term has an anatomy of its own. The **coefficient** is the number multiplying the letters: $3$ in the first term, $-5$ in the second, sign included. The **variable** is the letter itself, standing for the unknown or arbitrary quantity. The **degree** of a term is the total exponent of its variables: $3x^2$ has degree $2$, $-5x$ has degree $1$, and the constant $7$ has degree $0$ because no variable appears at all. The degree of the whole expression is the highest among its terms — here $2$, which makes it quadratic in shape.\n\nRead a second expression the same way, and the vocabulary does the work:\n\n$$7a^3 + \\tfrac{1}{2}a^2 - a + 4$$\n\nFour terms: $7a^3$ (coefficient $7$, degree $3$), $\\tfrac{1}{2}a^2$ (coefficient $\\tfrac{1}{2}$ — coefficients may be fractions), $-a$ (coefficient $-1$, written invisibly, degree $1$), and $4$ (degree $0$). The expression has degree $3$: a cubic. Reading any polynomial this way — term by term, sign attached, degree counted — must become automatic, because every command that follows acts on one term at a time.',
      },
      {
        kind: 'para',
        text: 'Two terms are **like terms** when they involve exactly the same letters raised to exactly the same powers. $5x$ and $-2x$ are like — both are “some number of $x$”. $5x$ and $5x^2$ are not, nor $3xy$ and $3x$: the letter part must match completely. This vocabulary is not decoration — questions are phrased in it: state the coefficient of $x$; the degree of the expression. The figure below pins all of these names onto a real expression; study it until labelling any term is automatic.',
      },
      { kind: 'heading', text: 'The laws that make letters behave like numbers' },
      {
        kind: 'para',
        text: 'Three laws form the entire legal code of manipulation — every rewrite this lesson performs is one of these sentences wearing different clothes, and nothing else is permitted. The **commutative laws** say order does not matter:\n\n$$a + b = b + a \\qquad ab = ba$$\n\nthough subtraction and division are not covered: $5 - 3 \\ne 3 - 5$. The **associative laws** say grouping does not matter — the reason terms can be added in any order:\n\n$$(a + b) + c = a + (b + c) \\qquad (ab)c = a(bc)$$\n\nAnd the **distributive law** is the engine of the lesson — read forwards it expands a bracket, backwards it factorises:\n\n$$a(b + c) = ab + ac$$\n\nA rewrite must follow from these laws, so checking a manipulation means checking that it did: expand the result back, or substitute a number — the law itself is the referee.',
      },
      {
        kind: 'formula',
        name: 'The distributive law',
        latex: 'a(b + c) = ab + ac',
        meaning: 'The engine of the lesson: forwards it expands a bracket, backwards it factorises a sum into a product.',
      },
      { kind: 'heading', text: 'Expanding: the distributive law at work' },
      {
        kind: 'para',
        text: '**Expanding** means multiplying out every bracket until none remain. For a single bracket the distributive law does everything — the outside factor meets EVERY inside term, not just the first:\n\n$$3(2x - 5) = 3 \\cdot 2x + 3 \\cdot (-5) = 6x - 15$$\n\nThree inside terms make the same point three times over:\n\n$$2x(3x^2 - 4x + 7) = 6x^3 - 8x^2 + 14x$$\n\nA minus in front of a bracket is the same move with $-1$ — every inside sign flips:\n\n$$-(x - 4) = -x + 4$$\n\nThis is where marks are silently lost, so set the rule as a displayed contrast:\n\n$$5a - (2a - 3b) = 5a - 2a + 3b \\qquad\\text{(the minus hits BOTH terms)}$$\n$$5a - (2a - 3b) \\ne 5a - 2a - 3b \\qquad\\text{(the classic slip)}$$\n\nThe minus belongs to the bracket, and multiplying $-1$ into $(2a - 3b)$ flips both signs — the $-3b$ becomes $+3b$.',
      },
      {
        kind: 'para',
        text: 'Two brackets multiply by applying the law twice — treat the first bracket as the outside factor:\n\n$$(x + 2)(x + 3) = x(x + 3) + 2(x + 3)$$\n$$= x^2 + 3x + 2x + 6$$\n$$= x^2 + 5x + 6$$\n\nFour products — one for each pairing of an outside term with an inside term; first, outer, inner, last, as a mnemonic to check all four. Notice the pattern: the middle coefficient $5$ is the sum of the bracket numbers, the final term $6$ their product. The general form is worth naming as an identity, because the factorising section runs it in reverse:\n\n$$(x + m)(x + n) = x^2 + (m + n)x + mn \\tag{1}$$\n\nThe area model in the figure shows why the pattern must hold — one rectangle, sliced four ways, is the whole computation in a picture.',
      },
      {
        kind: 'figure',
        caption:
          'The grammar of expressions, drawn. LEFT — the anatomy of 3x² − 5x + 7: three terms with signs attached, each with a coefficient (3, −5, 7) and a degree (2, 1, 0); the expression’s degree is the highest, 2. RIGHT — the area model of (x + 3)(x + 2): one rectangle sliced into four products x², 2x, 3x and 6, totalling x² + 5x + 6 — middle coefficient the sum, end term the product.',
        afterConcept: 2,
        svg: `<svg viewBox="0 0 880 430" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Left panel labels the terms, coefficients and degrees of the expression 3x squared minus 5x plus 7; right panel shows the area model of the product of x plus 3 and x plus 2 as four rectangles">
  <style>.lbl{font-family:Georgia,serif;font-size:14px;fill:#3f3f46}.big{font-size:18px;font-weight:bold}.sm{font-size:12px;fill:#52525b}.expr{font-family:Georgia,serif;font-size:27px;font-weight:bold;fill:#18181b}.mid{font-family:Georgia,serif;font-size:13.5px;font-weight:bold;fill:#3f3f46;text-anchor:middle}.box{fill:none;stroke:#c8c8d0;stroke-width:1.6;stroke-dasharray:5 4}.cell{font-family:Georgia,serif;font-size:19px;font-weight:bold;fill:#3f3f46;text-anchor:middle}</style>
  <rect x="24" y="52" width="404" height="352" rx="12" class="box"/>
  <text class="lbl big" x="40" y="78">The anatomy of an expression</text>
  <text class="sm" x="40" y="96">3x² − 5x + 7 — three terms, each with its sign</text>
  <rect x="36" y="112" width="120" height="26" rx="8" fill="#fafafa" stroke="#e11d48" stroke-width="1.8"/>
  <text class="mid" x="96" y="130">TERM 1 · 3x²</text>
  <rect x="166" y="112" width="120" height="26" rx="8" fill="#fafafa" stroke="#7c3aed" stroke-width="1.8"/>
  <text class="mid" x="226" y="130">TERM 2 · −5x</text>
  <rect x="296" y="112" width="120" height="26" rx="8" fill="#fafafa" stroke="#8a8a93" stroke-width="1.8"/>
  <text class="mid" x="356" y="130">TERM 3 · 7</text>
  <line x1="96" y1="138" x2="96" y2="156" stroke="#8a8a93" stroke-width="1.6"/>
  <line x1="226" y1="138" x2="226" y2="156" stroke="#8a8a93" stroke-width="1.6"/>
  <line x1="356" y1="138" x2="356" y2="156" stroke="#8a8a93" stroke-width="1.6"/>
  <text class="expr" x="96" y="182" text-anchor="middle">3x²</text>
  <text class="expr" x="226" y="182" text-anchor="middle">− 5x</text>
  <text class="expr" x="356" y="182" text-anchor="middle">+ 7</text>
  <text class="sm" x="96" y="208" text-anchor="middle">coefficient 3 · degree 2</text>
  <text class="sm" x="226" y="208" text-anchor="middle">coefficient −5 · degree 1</text>
  <text class="sm" x="356" y="208" text-anchor="middle">constant · degree 0</text>
  <text class="sm" x="40" y="244">the sign belongs to the term that follows it — −5x is one term</text>
  <rect x="40" y="262" width="372" height="126" rx="10" fill="#fafafa" stroke="#c8c8d0" stroke-width="1.4"/>
  <text class="mid" x="226" y="286" style="font-size:14px">Like terms — same letters, same powers</text>
  <text class="sm" x="56" y="314">5x and −2x · LIKE — both are “some number of x”</text>
  <text class="sm" x="56" y="338">5x and 5x² · NOT like — the powers differ</text>
  <text class="sm" x="56" y="362">3xy and 3x · NOT like — the letters differ</text>
  <rect x="452" y="52" width="404" height="352" rx="12" class="box"/>
  <text class="lbl big" x="468" y="78">The area model of (x + 3)(x + 2)</text>
  <text class="sm" x="468" y="96">one rectangle, four slices — the distributive law drawn</text>
  <text class="mid" x="615" y="112">x</text>
  <text class="mid" x="725" y="112">2</text>
  <text class="mid" x="527" y="172">x</text>
  <text class="mid" x="527" y="247">3</text>
  <rect x="540" y="120" width="150" height="95" fill="#fff1f2" stroke="#e11d48" stroke-width="2"/>
  <text class="cell" x="615" y="175">x²</text>
  <rect x="690" y="120" width="70" height="95" fill="#faf5ff" stroke="#c4b5fd" stroke-width="1.8"/>
  <text class="cell" x="725" y="175">2x</text>
  <rect x="540" y="215" width="150" height="55" fill="#faf5ff" stroke="#c4b5fd" stroke-width="1.8"/>
  <text class="cell" x="615" y="248">3x</text>
  <rect x="690" y="215" width="70" height="55" fill="#f4f4f5" stroke="#c8c8d0" stroke-width="1.8"/>
  <text class="cell" x="725" y="248">6</text>
  <text class="sm" x="468" y="305">total area = x² + 2x + 3x + 6 = x² + 5x + 6</text>
  <text class="sm" x="468" y="330">middle coefficient 5 = 3 + 2 — the SUM of the bracket numbers</text>
  <text class="sm" x="468" y="352">end term 6 = 3 × 2 — the PRODUCT of the bracket numbers</text>
  <text class="sm" x="468" y="380">sliced four ways or computed by algebra — same rectangle, same total</text>
</svg>`,
      },
      {
        kind: 'derivation',
        title: 'The perfect square, derived',
        statement:
          'Squaring a sum produces three terms, never two: the identity (a + b)² = a² + 2ab + b² follows in four short steps from the distributive law.',
        prerequisites: ['The distributive law', 'Two brackets expand into four products'],
        steps: [
          {
            label: 'Write the square as a product',
            formula: '$(a + b)^2 = (a + b)(a + b)$',
            explanation: 'Squaring means multiplying by itself — no new rule needed.',
          },
          {
            label: 'Distribute once',
            formula: '$= a(a + b) + b(a + b)$',
            explanation: 'The left bracket is a sum, so each of its terms multiplies the second bracket.',
          },
          {
            label: 'Distribute again',
            formula: '$= a \\cdot a + a \\cdot b + b \\cdot a + b \\cdot b$',
            explanation: 'Each outside term now meets both inside terms — four products, exactly as the area model shows.',
          },
          {
            label: 'Collect like terms',
            formula: '$= a^2 + 2ab + b^2$',
            explanation: 'The cross-products ab and ba are like terms — the commutative law makes them equal — so they merge into 2ab, the two strips of the picture.',
          },
        ],
        result:
          '(a + b)² = a² + 2ab + b². With a minus the same steps give (a − b)² = a² − 2ab + b². Read backwards these are factorising patterns: a² + 6a + 9 = (a + 3)² because 6a is exactly 2 × a × 3 — and announcing (a + b)² = a² + b² forgets the two strips.',
      },
      { kind: 'heading', text: 'Factorising: running the film backwards' },
      {
        kind: 'para',
        text: '**Factorising** rewrites a sum as a product — expansion reversed. It matters because products have a property sums lack: a product is zero the moment any factor is zero, the hinge the quadratics lesson will swing. The order of attack is fixed. First, take out the **highest common factor**:\n\n$$6x^2 + 9x = 3x(2x + 3)$$\n\nBoth terms carry $x$, and $6$ and $9$ share $3$ — verified instantly by expanding back. This generalises the highest-common-factor reasoning of the number-system lesson, where the HCF of two whole numbers comes from prime factors; here the idea runs over letters too. Make it the first move even when a fancier pattern waits — both moves compose, in that order:\n\n$$4x^2 - 100 = 4(x^2 - 25) = 4(x - 5)(x + 5)$$',
      },
      {
        kind: 'para',
        text: 'Second, recognise the named patterns. The formula block below states the **difference of squares**; expand its right side and the middle terms cancel like a film run forwards and backwards. The instances worth instant recall:\n\n$$x^2 - 49 = (x - 7)(x + 7) \\qquad 9x^2 - 25 = (3x - 5)(3x + 5)$$\n\nThe **perfect square** runs the derivation above in reverse:\n\n$$a^2 + 6a + 9 = (a + 3)^2$$\n\nThe warning cuts both ways: a difference of squares always factorises; a **sum of squares** $a^2 + b^2$ does not — no rearrangement of signs will ever do it, over the ordinary numbers.',
      },
      {
        kind: 'formula',
        name: 'Difference of squares',
        latex: 'a^2 - b^2 = (a - b)(a + b)',
        meaning: 'The middle terms cancel on expansion. A sum of squares has no factorisation over the ordinary numbers — only the difference does.',
      },
      {
        kind: 'para',
        text: 'Third, for expressions of the shape $x^2 + bx + c$, hunt a pair of numbers whose product is $c$ and whose sum is $b$ — identity (1) read backwards, with $m$ and $n$ reproducing $b$ and $c$:\n\n$$x^2 - x - 12 = (x - 4)(x + 3) \\qquad (-4) \\times 3 = -12, \\; -4 + 3 = -1$$\n\nThe hunt is systematic, not inspired. For $x^2 + 7x + 12$, list the pairs multiplying to $12$ and read their sums:\n\n$$1 \\times 12 \\to 13 \\qquad 2 \\times 6 \\to 8 \\qquad 3 \\times 4 \\to 7 \\;\\checkmark$$\n\nso $x^2 + 7x + 12 = (x + 3)(x + 4)$. And know when the hunt fails: $x^2 + x + 1$ has no integer pair — the only product-$1$ pair is $1 \\times 1$, summing to $2$ — so it does not factorise over the integers at all; the quadratics lesson opens its other three doors exactly for such equations. Expanding back takes ten seconds and proves a factorisation: make the check automatic, because a wrong factorisation silently poisons every equation solved with it later.',
      },
      { kind: 'heading', text: 'Rearranging formulae: solving with a letter as the target' },
      {
        kind: 'para',
        text: 'A formula relates several quantities, and rearranging it means making a chosen letter — the **subject** — stand alone. The method is equation-solving with a different target: undo, in reverse order, the operations applied to the subject, performing each undoing on both sides so the balance survives. From $v = u + at$: the recipe that built the subject read “multiply $a$ by $t$, then add $u$”; reversed — subtract $u$, then divide by $a$ — it lands on the rearranged form:\n\n$$v = u + at$$\n$$v - u = at \\qquad\\text{(subtract } u \\text{ from both sides)}$$\n$$t = \\frac{v - u}{a} \\qquad\\text{(divide both sides by } a\\text{)}$$\n\nThe last operation applied is always the first undone: dividing by $a$ before subtracting $u$ would tangle $u$ with $a$.',
      },
      {
        kind: 'para',
        text: 'When the target letter appears in more than one term, collect those terms first and factor the letter out — the distributive law in the extracting direction:\n\n$$ax - bx = c \\;\\Longrightarrow\\; x(a - b) = c \\;\\Longrightarrow\\; x = \\frac{c}{a - b}$$\n\nTwo disciplines govern every rearrangement. Whatever is done to one side is done to the other — an equation is a balance, not a conveyor belt for symbols. And the result is verified by substituting convenient numbers into both the original and the rearranged formula:\n\n$$v = 20, \\; u = 4, \\; a = 2 \\;\\Longrightarrow\\; t = \\frac{20 - 4}{2} = 8 \\qquad\\text{check: } 4 + 2 \\times 8 = 20 \\;\\checkmark$$\n\nIf the two sides disagree, the rearrangement is wrong no matter how plausible it looked.',
      },
      { kind: 'heading', text: 'Identities versus equations: two different contracts' },
      {
        kind: 'para',
        text: 'An **equation** is a claim true for particular values, and solving is the search for those values. An **identity** is a claim true for every value — the patterns of this lesson stated as permanent facts, often marked with the triple bar $\\equiv$. Set the two contracts side by side:\n\n$$2x = 10 \\quad\\text{holds only at } x = 5 \\qquad\\text{equation — solve it}$$\n$$2(x + 3) = 2x + 6 \\quad\\text{holds for every } x \\qquad\\text{identity — verify it}$$\n\nVerification means expanding or factorising one side into the other, never solving. To show that $(a - b)(a + b)$ is the difference of squares, expand and watch the middle terms cancel:\n\n$$(a - b)(a + b) = a^2 + ab - ba - b^2 = a^2 - b^2 \\;\\checkmark$$\n\nRobert Recorde introduced the equals sign in his 1557 book The Whetstone of Witte, choosing a pair of parallel lines because no two things could be more equal; the identity sign is his symbol under the strictest reading. A question phrased “show that …” is an identity question, and answering it with a particular value of $x$ is a category error.',
      },
      { kind: 'heading', text: 'Three worked examples' },
      {
        kind: 'example',
        title: 'One expression, all four commands',
        steps: [
          'Identify what is asked: simplify $3x(2x - 5) - 2x(x - 4) + 7x$ fully — expand, collect, and read any structure the result reveals.',
          'Expand each product with the distributive law, signs attached to their terms:\n\n$$3x(2x - 5) = 6x^2 - 15x$$\n$$-2x(x - 4) = -2x^2 + 8x$$\n\nso the whole expression becomes $$6x^2 - 15x - 2x^2 + 8x + 7x$$',
          'Collect like terms, families apart:\n\n$$(6 - 2)x^2 = 4x^2 \\qquad -15 + 8 + 7 = 0$$\n\nThe $x$-family sums to zero — the entire middle cancels.',
          'State the result: the expression simplifies to $$4x^2 = (2x)^2$$ — and the vanishing middle was a signal: a perfect square was hiding under the noise.',
          'Reuse the shapes in a rearrangement: from $$y = 4x^2 - k$$ undo in reverse order — add $k$, divide by $4$, square-root, both roots kept:\n\n$$x = \\pm\\sqrt{\\frac{y + k}{4}}$$',
        ],
      },
      {
        kind: 'example',
        title: 'Factorise completely: x⁴ − 16',
        steps: [
          'Identify what is asked: rewrite $x^4 - 16$ as a product that cannot be broken further.',
          'First move — highest common factor: $x^4$ and $16$ share nothing beyond $1$, so go straight to the named patterns.',
          'Recognise the difference of squares — both parts are perfect squares:\n\n$$x^4 = (x^2)^2, \\qquad 16 = 4^2$$\n$$x^4 - 16 = (x^2 - 4)(x^2 + 4)$$',
          'Keep going: the first factor is itself a difference of squares,\n\n$$x^2 - 4 = (x - 2)(x + 2)$$\n\nwhile the second, $x^2 + 4$, is a sum of squares and stops there.',
          'State the result: $$x^4 - 16 = (x - 2)(x + 2)(x^2 + 4)$$ Verify by expanding back in pairs: $(x - 2)(x + 2) = x^2 - 4$, then $(x^2 - 4)(x^2 + 4) = x^4 - 16$. Stopping a stage early is half an answer — factorise until nothing factors.',
        ],
      },
      {
        kind: 'example',
        title: 'A tank formula, rearranged and used',
        steps: [
          'Identify what is asked: the total surface of a closed cylindrical tank of radius $r$ and height $h$ is\n\n$$S = 2\\pi r^2 + 2\\pi rh$$\n\nmake $h$ the subject, then find $h$ when $S = 1{,}848$ cm$^2$ and $r = 14$ cm, taking $\\pi = 22/7$.',
          'Concept: $h$ is multiplied by $2\\pi r$ after the term $2\\pi r^2$ was added — the last operation applied is the addition, so undo it first:\n\n$$S - 2\\pi r^2 = 2\\pi rh$$',
          'Divide both sides by $2\\pi r$ ($r$ must be non-zero, which a tank radius always is):\n\n$$h = \\frac{S - 2\\pi r^2}{2\\pi r}$$',
          'Substitute and compute each piece separately:\n\n$$2\\pi r^2 = 2 \\times \\frac{22}{7} \\times 14 \\times 14 = 1{,}232$$\n$$S - 2\\pi r^2 = 1{,}848 - 1{,}232 = 616 \\qquad 2\\pi r = 2 \\times \\frac{22}{7} \\times 14 = 88$$',
          'Calculate:\n\n$$h = \\frac{616}{88} = 7$$',
          'State the result: $h = 7$ cm — a tank 28 cm across and 7 cm tall, whose ends contribute $1{,}232$ cm$^2$ and curved side $616$ cm$^2$, summing to $1{,}848$: the check that certifies the rearrangement.',
        ],
      },
      {
        kind: 'example',
        title: 'Substitution under the order-of-operations law',
        steps: [
          'Identify what is asked: the total energy of a 2 kg mass moving at 3 m/s at height 5 m above the ground (taking $g = 10$ m/s$^2$) is\n\n$$E = \\tfrac{1}{2}mv^2 + mgh$$\n\nevaluate it, and then test what the formula says at $v = -3$.',
          'Discipline first: bracket every substituted value BEFORE computing — the expression is $\\tfrac{1}{2}mv^2 + mgh$, so with $m = 2$, $v = 3$, $h = 5$:\n\n$$E = \\tfrac{1}{2} \\times 2 \\times (3)^2 + 2 \\times 10 \\times 5$$',
          'Apply the order of operations — the power binds $v$ before any product is taken:\n\n$$E = \\tfrac{1}{2} \\times 2 \\times 9 + 2 \\times 10 \\times 5 = 9 + 100 = 109$$',
          'State the result: $E = 109$ joules — $9$ J of kinetic energy riding on $100$ J of potential energy.',
          'Now the sign test: at $v = -3$ the square erases the sign, $(-3)^2 = 9$, so\n\n$$E = \\tfrac{1}{2} \\times 2 \\times (-3)^2 + 100 = 109$$\n\n— the same $109$ joules. Kinetic energy depends on speed squared, not on direction of motion: the formula\'s structure, read honestly through substitution.',
        ],
      },
      {
        kind: 'callout',
        title: 'Where the grammar pays',
        text: 'Every formula-driven subject rearranges exactly this way — $t = (v - u)/a$ above is kinematics doing algebra. Code and spreadsheets follow the same order of operations and distributive law. The quantity-comparison lessons open their decision ladder with the rung “combine like terms” — this lesson’s first command under time pressure — and the mental-arithmetic lesson’s tricks are these three laws run on numbers.',
        tone: 'insight',
      },
      {
        kind: 'callout',
        title: 'Common pitfalls',
        text: 'Dropping a minus while collecting or expanding — signs travel attached to their terms, and a minus in front of a bracket flips every sign within, which is why $5a - (2a - 3b)$ gains $+3b$. Multiplying only the first inside term — the distributive law hits everything inside: $2x(3x^2 - 4x + 7)$ must gain three products, not one. Announcing $(a + b)^2 = a^2 + b^2$ — the most-exploited error in the subject: the area model’s two cross-strips are exactly the missing $2ab$. Skipping the highest-common-factor check, or stopping a factorisation one stage early — $4(x^2 - 25)$ is not finished until the difference of squares has fired. Treating $3x^2$ as $(3x)^2$ — the power binds only the letter: at $x = -2$, $$3(-2)^2 = 3 \\times 4 = 12 \\qquad\\text{while}\\qquad (3 \\times -2)^2 = 36$$ Substituting without brackets invites the same trap. Sliding symbols across an equals sign without operating on both sides — the balance breaks. And solving when the question says “show that”: identities are verified, never solved.',
        tone: 'warn',
      },
      {
        kind: 'callout',
        title: 'Study path',
        text: 'Prerequisites: arithmetic with negatives and fractions, and the mental-arithmetic lesson, whose laws this lesson formalises. Follow immediately with the quadratics lesson — the factor-pair hunt becomes its first solving method — then the modulus and logarithm inequalities, where manipulation fluency decides speed. The same grammar runs through every formula-driven subject in this library. Primary reading: OpenStax, Intermediate Algebra 2e, ch.1 “The Language of Algebra” and the factoring chapters (openstax.org, CC BY-NC-SA).',
        tone: 'path',
      },
      { kind: 'heading', text: 'Key terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Term', def: 'A piece of an expression separated by plus or minus signs; its sign travels with it.' },
          { term: 'Coefficient', def: 'The number multiplying the letters of a term, sign included.' },
          { term: 'Degree', def: 'The total exponent of a term’s variables; the expression’s degree is the highest term degree.' },
          { term: 'Like terms', def: 'Terms with exactly the same letters raised to exactly the same powers — only these may be collected.' },
          { term: 'Distributive law', def: 'a(b + c) = ab + ac: expanding read forwards, factorising read backwards.' },
          { term: 'Expand', def: 'Multiply out every bracket with the distributive law until none remain — the outside factor meets every inside term.' },
          { term: 'Substitution', def: 'Replacing a letter with a value — brackets around every substituted value, powers applied before products.' },
          { term: 'Factorise', def: 'Rewrite a sum as a product: highest common factor first, then named patterns, then the factor-pair hunt.' },
          { term: 'Identity', def: 'A statement true for every value, marked ≡; verified by expansion or factorisation, never solved.' },
          { term: 'Subject', def: 'The letter standing alone after a formula is rearranged, isolated by inverse operations in reverse order.' },
        ],
      },
      { kind: 'heading', text: 'Check your understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'In $5x^3 - 2x + 8$, what are the coefficient of $x$ and the degree of the expression?',
            options: [
              'coefficient −2; degree 3',
              'coefficient 2; degree 3',
              'coefficient −2; degree 8',
              'coefficient 5; degree 3',
            ],
            answer: 0,
            explain: 'The $x$-term is $-2x$: coefficient $-2$, sign included. Term degrees are $3$, $1$ and $0$; the expression takes the highest, $3$. Option D quotes the leading coefficient of $5x^3$ instead of the asked $x$-term.',
          },
          {
            q: 'Which expression equals $(2x + 3)^2$',
            options: ['4x² + 12x + 9', '4x² + 9', '4x² + 6x + 9', '2x² + 12x + 9'],
            answer: 0,
            explain: 'Apply $(a + b)^2 = a^2 + 2ab + b^2$ with $a = 2x$, $b = 3$: middle term $2 \\times 2x \\times 3 = 12x$. Option B forgets the middle; option C halves it; option D fails to square the coefficient.',
          },
          {
            q: 'Factorise $4x^2 - 25$.',
            options: ['(2x − 5)(2x + 5)', '(4x − 5)(x + 5)', '(2x − 5)²', 'not factorable'],
            answer: 0,
            explain: '$4x^2 = (2x)^2$ and $25 = 5^2$: difference of squares with $a = 2x$, $b = 5$. Option C is the perfect square — it expands to $4x^2 - 20x + 25$; option B does not multiply back.',
          },
          {
            q: 'Factorise $x^2 - x - 12$.',
            options: ['(x − 4)(x + 3)', '(x + 4)(x − 3)', '(x − 6)(x + 2)', '(x − 12)(x + 1)'],
            answer: 0,
            explain: 'The pair must multiply to $-12$ and add to $-1$: $-4$ and $3$. Every wrong option has the right product but the wrong sum — $(x + 4)(x - 3)$ would give a middle term of $+x$.',
          },
          {
            q: 'Rearrange $p = 2(a + b)$ to make $b$ the subject.',
            options: ['b = p − 2a', 'b = (p − 2a)/2', 'b = p/(2a)', 'b = 2(p − a)'],
            answer: 1,
            explain: 'Divide by $2$ first: $a + b = p/2$; then subtract $a$: $b = p/2 - a = (p - 2a)/2$. Option A skips the division — the $2$ multiplies both $a$ and $b$, so undoing must touch both.',
          },
          {
            q: 'Which statement is an identity rather than an equation?',
            options: ['$3x + 1 = 10$', '$x^2 = 16$', '$(x + 1)^2 = x^2 + 2x + 1$', '$2x - 4 = 0$'],
            answer: 2,
            explain: 'It holds for every x — an expansion pattern stated as a permanent fact, the strict contract the ≡ sign flags. The others hold only for particular values and are solved for them.',
          },
          {
            q: 'Making $x$ the subject of $ax - bx = c$ gives:',
            options: ['x = c/(a − b)', 'x = c − a − b', 'x = c/(a + b)', 'x = c − (a − b)'],
            answer: 0,
            explain: 'The letter appears twice: collect first, $x(a - b) = c$, then divide by $(a - b)$. Option B subtracts the letters as if they were numbers; option C ignores the minus between the terms.',
          },
          {
            q: 'Evaluate $3x^2$ at $x = -2$.',
            options: ['12', '36', '-12', '-36'],
            answer: 0,
            explain: 'Substitute with brackets: $3(-2)^2 = 3 \\times 4 = 12$ — the power binds the letter before the coefficient multiplies. Option B computes $(3x)^2$ instead; options C and D mishandle the sign: $(-2)^2 = 4$, never $-4$.',
          },
        ],
      },
      { kind: 'heading', text: 'Five-minute recap' },
      { kind: 'list', ordered: true, items: [
        'Terms carry their signs; the coefficient is the number with the letters; the degree is the highest exponent among the terms.',
        'Only the commutative, associative and distributive laws license a rewrite — every move is one of these three.',
        'Expand: the outside factor meets every inside term; two brackets give four products.',
        '(a + b)² = a² + 2ab + b² — never forget the middle term.',
        'Factorise in order: highest common factor, difference of squares, perfect square, then the pair multiplying to c and summing to b — and check by expanding back.',
        'Rearrange by undoing the last operation first, symmetrically on both sides; collect and factor when the target appears twice.',
        'Equations are solved for particular values; identities are shown for all values — and simplify, expand, factorise and rearrange are different commands.',
        'Substitute with brackets around every value — the power binds the letter before the coefficient multiplies: $3(-2)^2 = 12$, not $(3 \\times -2)^2$.',
      ] },
    ],
  },
  {
    id: 'math-quadratics-completing-square',
    title: 'Quadratics: Four Ways to Solve, One Formula to Rule Them',
    domain: 'Mathematics',
    field: 'Algebra',
    branch: 'Quadratic Equations',
    tier: 'core',
    concepts: [
      'Standard form ax² + bx + c = 0',
      'Zero-product property and factorising',
      'The square-root property and its ±',
      'Completing the square: the recipe, the geometry, the reason',
      'The quadratic formula DERIVED, step by step',
      'The discriminant and the number of solutions',
      'Vertex form, the turning point and −b/2a',
      'Choosing the fastest method',
    ],
    words: 5129,
    readMins: 26,
    addedOn: '2026-10-24',
    blocks: [
      {
        kind: "para",
        text: "A scribe in Babylon, somewhere around 1800 BCE, presses a problem into wet clay — a problem that survives on the tablet we now call BM 13901: 'I tore out my square's side from inside its area, and 870 was left.' Strip away the wording and it is an equation — the area $x^2$ minus the side $x$ equals 870:\n\n$$x^2 - x = 870$$\n\nThere is no algebra yet, no letter $x$, no formula — and yet the scribe solves it in four quick moves, spoken aloud like a recipe: 'Break the torn-out side in half. Make the half and itself hold — that is, square it. Append that quarter to the 870. The equalside of 870 and a quarter is 29 and a half; tear out the half you added, and the side is 30.' Set in our symbols, his four moves read:\n\n$$\\left(x - \\tfrac{1}{2}\\right)^2 = 870 + \\tfrac{1}{4} = \\tfrac{3481}{4}$$\n$$x - \\tfrac{1}{2} = \\tfrac{59}{2}$$\n$$x = 30$$\n\nand the check is one line:\n\n$$30^2 - 30 = 900 - 30 = 870 \\;\\checkmark$$\n\nThe answer is right. What the scribe did — halve the coefficient, square the half, add it back, take a square root — is completing the square, the oldest reliable solving technique in mathematics, working thirty-seven centuries before anyone drew a parabola. This lesson takes that clay-tablet move and builds the whole modern machinery on top of it: four ways to solve any quadratic equation, the reason each works, one formula that contains them all — and the arithmetic to choose the fastest door every time.",
      },
      { kind: 'heading', text: 'Background: What a Quadratic Is and Where It Comes From' },
      {
        kind: "para",
        text: "A quadratic equation is any equation that can be written in standard form:\n\n$$ax^2 + bx + c = 0, \\qquad a \\ne 0$$\n\nwhere $a$, $b$ and $c$ are fixed numbers. Everything about solving hangs on that little condition $a \\ne 0$: if $a$ were zero, the $x^2$ term would vanish and the equation would collapse to the linear $bx + c = 0$, which the mental-arithmetic and algebra lessons already handle. The $x^2$ term is what makes a quadratic a quadratic — and it is what makes it hard, because squaring destroys the neat one-to-one logic of linear equations: both $+3$ and $-3$ square to $9$, so equations can now have two honest answers.",
      },
      {
        kind: "para",
        text: "Where do such equations come from? Three places worth naming. Areas and designs: the Babylonian scribe's own problem was literally about a square field with a strip removed, and the same shape appears whenever a fixed fence encloses a rectangular garden (you will work one below). Motion: an object thrown upward has height\n\n$$h = -4.9\,t^2 + v_0\,t + h_0 \\ \\text{(metres)}$$\n\nin metres — the $-4.9$ is half of $g$, gravity's $9.8\\ \\text{m/s}^2$, and the $t^2$ is the very signature of acceleration (the physics lessons carry the derivation; here we borrow the formula). Money: if lowering a price by $p$ rupees sells $40p$ more tickets, revenue is a product of two linear terms,\n\n$$R\\left(p\\right) = \\left(\\text{price} - p\\right)\\left(\\text{count} + 40p\\right),$$\n\nwhich expands into a quadratic. In every case the question 'when does the quantity hit a target value, or reach its peak?' becomes 'solve a quadratic'. The algebra lesson (§71.1) already built the tools this lesson consumes: expanding brackets gave us the identity\n\n$$\\left(x + h\\right)^2 = x^2 + 2hx + h^2,$$\n\nand factorising turned products into equations. Those two rungs are the whole ladder; climb them again here.",
      },
      { kind: 'heading', text: 'Standard Form First — and the First Two Methods' },
      {
        kind: "para",
        text: "Every solving method begins from standard form $ax^2 + bx + c = 0$, with everything gathered on one side and zero on the other. This is not bureaucracy: the methods read their inputs off $a$, $b$ and $c$, and a sign dropped while gathering terms poisons every line downstream. So the discipline is mechanical — expand, collect, set to zero, THEN identify $a$, $b$ and $c$:\n\n$$3x^2 = 5x - 2 \\quad\\Longrightarrow\\quad 3x^2 - 5x + 2 = 0, \\qquad a = 3,\\; b = -5,\\; c = 2$$\n$$(x + 1)(x - 2) = 4 \\quad\\Longrightarrow\\quad x^2 - x - 2 = 4 \\quad\\Longrightarrow\\quad x^2 - x - 6 = 0$$",
      },
      {
        kind: "para",
        text: "Method one is factorising, powered by the zero-product property: if a product equals zero, at least one factor must equal zero (there is no other way to multiply two numbers and get nothing). The algebra lesson built the factorising toolkit; here it becomes a solving engine:\n\n$$x^2 - x - 12 = 0$$\n$$(x - 4)(x + 3) = 0$$\n$$x - 4 = 0 \\quad\\text{or}\\quad x + 3 = 0$$\n$$x = 4 \\quad\\text{or}\\quad x = -3$$\n\nNotice what the property just bought: one product equation split into two linear ones. The method is fast and clean when the factor pair is friendly, and silent when it is not — which is exactly why we need methods three and four.",
      },
      {
        kind: "para",
        text: "Method two, the square-root property, handles the missing-middle shape where the unknown appears only once, squared:\n\n$$x^2 = k, \\quad k \\ge 0 \\quad\\Longrightarrow\\quad x = \\pm\\sqrt{k}$$\n\nBOTH signs, because squaring erases sign, so the equation cannot tell $+\\sqrt{k}$ from $-\\sqrt{k}$ apart. Forgetting the negative root is the single most common answer-killing slip in the whole topic. The same property solves the shifted shape directly:\n\n$$(x - 3)^2 = 12$$\n$$x - 3 = \\pm\\sqrt{12} = \\pm 2\\sqrt{3}$$\n$$x = 3 \\pm 2\\sqrt{3}$$\n\nAnd it draws a line worth noticing:\n\n$$x^2 = -5 \\quad\\Longrightarrow\\quad \\text{no real solution}$$\n\nno real number squares to a negative — park that thought; it returns as the third case of the discriminant. Method two looks like a special case, but it is secretly the destination: the next method is precisely the art of REWRITING any quadratic into this shape.",
      },
      { kind: 'heading', text: 'Completing the Square: The Recipe and the Geometry' },
      {
        kind: "para",
        text: "Here is the heart of the lesson. Look again at the identity from the algebra lesson:\n\n$$\\left(x + h\\right)^2 = x^2 + 2hx + h^2$$\n\nThe middle coefficient $2h$ is twice the $h$ hiding inside the bracket. Read it in reverse: given $x^2 + bx$, the bracket constant that would generate that middle term is half of $b$,\n\n$$h = \\frac{b}{2},$$\n\nand the constant that completes the perfect square is its square,\n\n$$h^2 = \\left(\\frac{b}{2}\\right)^2.$$\n\nThat is the entire recipe: to complete the square of $x^2 + bx$, take half of $b$ and square it. Watch it run:\n\n$$x^2 + 6x = \\left(x + 3\\right)^2 - 9$$\n$$x^2 + 10x = \\left(x + 5\\right)^2 - 25$$\n$$x^2 - 8x = \\left(x - 4\\right)^2 - 16$$\n\n(half of $-8$ is $-4$, and $(-4)^2 = 16$ — the half keeps the sign, the square forgets it). Because we INVENTED the $h^2$, we must also subtract it to keep the value unchanged:\n\n$$x^2 + bx + c = \\left(x + \\frac{b}{2}\\right)^2 + c - \\frac{b^2}{4}$$\n\nNothing was gained or lost — the expression was only re-packaged so the unknown appears once, squared, which is exactly the shape method two devours.",
      },
      {
        kind: "para",
        text: "Why should half-and-square work? Because it is literally cutting and pasting area. Draw the $x^2$ as a literal square of side $x$, and $bx$ as a rectangle of side $b$ and width $x$. Cut that rectangle in half lengthwise, giving two strips of $\\left(b/2\\right) \\times x$, and glue one strip onto the right edge of the square and the other onto the top edge. The figure now ALMOST forms a bigger square of side $x + b/2$ — it is missing exactly one corner piece, a little square of side $b/2$, of area $\\left(b/2\\right)^2$. Append that corner and the square is complete. This is not a modern teaching gimmick: it is the Babylonian scribe's own move ('break the side in half, make the half and itself hold, append the quarter'), and the figure the Baghdad mathematician al-Khwarizmi drew around 820 CE to justify his version of the same recipe. The algebra lesson opened with al-Khwarizmi's equation 'a square and ten roots equal thirty-nine dirhams',\n\n$$x^2 + 10x = 39,$$\n\nand here is the picture he attached to it: four rectangles of $2\\tfrac{1}{2} \\times x$ (total area $10x$) glued to the four sides of the $x^2$ square, four $2\\tfrac{1}{2} \\times 2\\tfrac{1}{2}$ corner squares (total 25) filling the gaps, one big square of side $x + 5$. Its area is $39 + 25 = 64$, so the side is 8:\n\n$$\\left(x + 5\\right)^2 = 39 + 25 = 64$$\n$$x + 5 = 8$$\n$$x = 8 - 5 = 3$$\n\nFigure 1 shows both constructions; the labels use the exact words of this paragraph.",
      },
      {
        kind: 'figure',
        caption: 'Figure 1 — Completing the square as cut-and-paste geometry. LEFT: the gnomon version — an x² square plus two (b/2) × x half-strips almost makes a bigger square; only the (b/2)² corner is missing. RIGHT: al-Khwarizmi\'s x² + 10x = 39 — four 2½-wide strips and four 2½ × 2½ corners complete a big square of side x + 5, whose area is 39 + 25 = 64, so x + 5 = 8 and x = 3.',
        afterConcept: 4,
        svg: `<svg viewBox="0 0 880 470" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two geometric completing-the-square constructions: a gnomon of two half strips and a corner square, and al-Khwarizmi's four strips and four corners making a big square of side x plus five with area sixty-four">
  <style>.lbl{font-family:Georgia,serif;font-size:14px;fill:#3f3f46}.big{font-size:17px;font-weight:bold}.sm{font-size:12px;fill:#52525b}.ink{stroke:#8a8a93;fill:none;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round}.thin{stroke:#b8b8c0;fill:none;stroke-width:1.4}.box{fill:none;stroke:#c8c8d0;stroke-width:1.6;stroke-dasharray:5 4}</style>
  <text class="lbl big" x="28" y="32" fill="#3f3f46">Completing the square: the missing corner</text>
  <rect x="24" y="48" width="396" height="400" rx="12" class="box"/>
  <text class="lbl" x="40" y="72" font-weight="bold">ONE-STRIP-A-SIDE VERSION (the gnomon)</text>
  <rect x="70" y="100" width="150" height="150" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
  <text class="lbl" x="145" y="180" text-anchor="middle">x²</text>
  <rect x="220" y="100" width="60" height="150" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
  <rect x="70" y="52" width="210" height="48" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
  <text class="sm" x="285" y="180">strip (½b)·x</text>
  <text class="sm" x="120" y="46">strip (½b)·x</text>
  <rect x="220" y="52" width="60" height="48" fill="#fef9c3" stroke="#ca8a04" stroke-width="2" stroke-dasharray="4 3"/>
  <text class="sm" x="228" y="80">corner (½b)²</text>
  <path class="ink" d="M320 130 H362"/><path d="M366 130 l-9 -4 v8 z" fill="#8a8a93"/>
  <rect x="70" y="100" width="210" height="198" class="thin"/>
  <text class="lbl" x="64" y="330" font-weight="bold">the completed square: (x + ½b)²</text>
  <text class="sm" x="40" y="352">its area = x² + bx + (½b)² — only the yellow corner</text>
  <text class="sm" x="40" y="370">was added, so subtract it again to keep the value:</text>
  <text class="lbl" x="40" y="396">x² + bx + c = (x + ½b)² + c − (½b)²</text>
  <text class="sm" x="40" y="424"> Babylon: 'break the side in half, square the half,</text>
  <text class="sm" x="40" y="440">append the quarter' — BM 13901, c. 1800 BCE</text>
  <rect x="452" y="48" width="404" height="400" rx="12" class="box"/>
  <text class="lbl" x="468" y="72" font-weight="bold">AL-KHWARIZMI'S x² + 10x = 39 (c. 820 CE)</text>
  <rect x="560" y="150" width="130" height="130" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
  <text class="lbl" x="625" y="220" text-anchor="middle">x²</text>
  <rect x="560" y="112" width="168" height="38" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
  <rect x="560" y="280" width="168" height="38" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
  <rect x="522" y="150" width="38" height="130" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
  <rect x="690" y="150" width="38" height="130" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
  <rect x="522" y="112" width="38" height="38" fill="#fef9c3" stroke="#ca8a04" stroke-width="2"/>
  <rect x="690" y="112" width="38" height="38" fill="#fef9c3" stroke="#ca8a04" stroke-width="2"/>
  <rect x="522" y="280" width="38" height="38" fill="#fef9c3" stroke="#ca8a04" stroke-width="2"/>
  <rect x="690" y="280" width="38" height="38" fill="#fef9c3" stroke="#ca8a04" stroke-width="2"/>
  <text class="sm" x="736" y="170">2½-wide strip</text>
  <text class="sm" x="736" y="186">area 2½x (×4)</text>
  <text class="sm" x="736" y="300">2½ × 2½</text>
  <text class="sm" x="736" y="316">corner (×4)</text>
  <text class="lbl" x="468" y="352" font-weight="bold">big square side x + 5</text>
  <text class="sm" x="468" y="372">(x + 5)² = x² + 10x + 25 = 39 + 25 = 64</text>
  <text class="sm" x="468" y="390">x + 5 = 8  →  x = 3   (check: 9 + 30 = 39 ✓)</text>
  <text class="sm" x="468" y="416">four green strips give 4 × 2½x = 10x;</text>
  <text class="sm" x="468" y="432">four yellow corners give 4 × 6¼ = 25</text>
</svg>`,
      },
      {
        kind: "para",
        text: "Solving BY completing the square now runs itself. Take $x^2 + 6x + 2 = 0$: half of 6 is 3, squared is 9, so\n\n$$x^2 + 6x + 2 = 0$$\n$$\\left(x + 3\\right)^2 - 9 + 2 = 0$$\n$$\\left(x + 3\\right)^2 = 7$$\n\nand method two finishes it:\n\n$$x + 3 = \\pm\\sqrt{7}$$\n$$x = -3 \\pm \\sqrt{7}$$\n\nOne subtlety, and it is the equation-side version of the geometry: when you complete the square on an EQUATION (not just an expression), you may add the $\\left(b/2\\right)^2$ to the left side ONLY if you add it to the right side too — the scribe's 'append the quarter' applied to BOTH the area and the target number. The safest habit, though, is the add-and-subtract form on one side, which cannot go wrong.",
      },
      {
        kind: "para",
        text: "When the leading coefficient is not 1, divide the whole equation by $a$ first — completing the square needs a bare $x^2$, and OpenStax's Intermediate Algebra (2e), our standing source for this topic, makes the same point in exactly those words:\n\n$$ax^2 + bx + c = 0 \\quad\\Longrightarrow\\quad x^2 + \\frac{b}{a}\,x + \\frac{c}{a} = 0$$\n\nThere is also a lovely fraction-free alternative that Indian textbooks credit to Sridhara (c. 870–930 CE; his algebra is lost, and his rule survives as a quotation in later commentaries): instead of dividing, MULTIPLY the whole equation by $4a$:\n\n$$4a\\left(ax^2 + bx + c\\right) = 0$$\n$$4a^2x^2 + 4abx + 4ac = 0$$\n$$\\left(2ax + b\\right)^2 = b^2 - 4ac$$\n\nthe square completes itself around $2ax + b$, no fractions ever appear, and the formula drops out (as you will see in the derivation below). Both roads are the same idea wearing different clothes: make the square complete.",
      },
      {
        kind: 'derivation',
        title: 'The Quadratic Formula, Derived — Not Memorised',
        statement: 'Every quadratic formula is one completing-the-square computation done once, with letters instead of numbers. Derive $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$ from $ax^2 + bx + c = 0$.',
        prerequisites: ['completing the square for x² + px', 'square-root property with its ±', 'adding a fraction to a fraction: common denominator'],
        steps: [
          { label: 'Normalise: divide through by a', formula: 'x^2 + \\tfrac{b}{a}\\,x + \\tfrac{c}{a} = 0', explanation: 'a ≠ 0 is guaranteed by the definition of a quadratic, so the division is legal. The leading coefficient is now 1, as the recipe requires.' },
          { label: 'Move the constant to the right', formula: 'x^2 + \\tfrac{b}{a}\\,x = -\\tfrac{c}{a}', explanation: 'Only the x-terms stay on the left; they are what the square will absorb.' },
          { label: 'Complete the square: half of b/a is b/(2a), square it', formula: '\\left(x + \\tfrac{b}{2a}\\right)^2 = \\tfrac{b^2}{4a^2} - \\tfrac{c}{a} = \\tfrac{b^2 - 4ac}{4a^2}', explanation: 'Add b²/(4a²) to BOTH sides (the scribe\'s append-to-both rule). On the left it completes the perfect square; on the right, put the two fractions over the common denominator 4a² — and notice the combination b² − 4ac appearing for the first time.' },
          { label: 'Square-root property — with its ±', formula: 'x + \\tfrac{b}{2a} = \\pm\\sqrt{b^2 - 4ac}\\,\\big/\\,2a', explanation: 'The square root of the right side is √(b² − 4ac) over √(4a²) = 2a (positive, since a² > 0). The ± is where BOTH roots enter the story — dropping it here is the classic half-answer error.' },
          { label: 'Subtract b/(2a) and tidy', formula: 'x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}', explanation: 'Both terms on the left share the denominator 2a, so they merge into one fraction. There is the formula — not a rule to memorise but a computation you can now redo from scratch whenever memory fails.' },
        ],
        result: 'x = (−b ± √(b² − 4ac))/(2a) for every quadratic ax² + bx + c = 0 with a ≠ 0. The quantity under the root, b² − 4ac, decides how many real answers exist — it gets its own name, the discriminant, in the next section. History note: a rule equivalent to one root of this formula appears (stated without derivation) in Brahmagupta\'s Brāhmasphuṭasiddhānta of 628 CE; the name discriminant was coined by James Joseph Sylvester in 1851.',
      },
      { kind: 'heading', text: 'The Formula in Action and the Discriminant' },
      {
        kind: "para",
        text: "Method four — the formula — works on every quadratic, friendly or not. OpenStax drills a four-step rhythm worth keeping: write standard form and identify $a$, $b$, $c$; write the formula; substitute; simplify — then CHECK by substitution, because the formula is an equation and each line should start with $x =$. Their worked example is a fine model:\n\n$$2x^2 + 9x - 5 = 0, \\qquad a = 2,\\; b = 9,\\; c = -5$$\n$$x = \\frac{-9 \\pm \\sqrt{9^2 - 4\\left(2\\right)\\left(-5\\right)}}{2\\left(2\\right)} = \\frac{-9 \\pm \\sqrt{81 + 40}}{4} = \\frac{-9 \\pm \\sqrt{121}}{4} = \\frac{-9 \\pm 11}{4}$$\n$$x = \\tfrac{1}{2} \\quad\\text{or}\\quad x = -5$$\n\nSubstitute either back:\n\n$$2\\left(\\tfrac{1}{2}\\right)^2 + 9\\left(\\tfrac{1}{2}\\right) - 5 = \\tfrac{1}{2} + \\tfrac{9}{2} - 5 = 0 \\;\\checkmark$$\n\nThe two discipline points that save marks: the WHOLE numerator $-b \\pm \\sqrt{b^2 - 4ac}$ sits over the $2a$ (never just part of it), and the $\\pm$ line produces two separate simplifications — do not average them or drop one.",
      },
      {
        kind: "para",
        text: "The number hiding under the root is the discriminant — Sylvester's 1851 coinage — and it is a fortune-teller: it counts the real roots BEFORE any arithmetic:\n\n$$\\Delta = b^2 - 4ac$$\n$$\\Delta > 0 \\;\\Longrightarrow\\; \\text{two distinct real roots}$$\n$$\\Delta = 0 \\;\\Longrightarrow\\; \\text{one repeated (double) root}$$\n$$\\Delta < 0 \\;\\Longrightarrow\\; \\text{no real roots}$$\n\nRead each line's reason: $\\Delta > 0$ makes the square root a positive real, so the $\\pm$ splits it into two different values. $\\Delta = 0$ contributes nothing — the $\\pm$ is $\\pm 0$, and both branches collapse onto one value. $\\Delta < 0$ would need the square root of a negative — no real number provides one (the equation still has two perfectly good complex roots, which the algebra goes on to study; Cardano in 1545, meeting $\\sqrt{-15}$ in a problem about dividing 10 into two parts of product 40, famously called the handling of such quantities 'dismissing mental tortures'). Geometrically the trichotomy is exactly how a parabola can meet the x-axis: twice, once (kissing it at the vertex), or never — Figure 2 shows all three.",
      },
      {
        kind: 'figure',
        caption: 'Figure 2 — The discriminant is the parabola\'s appointment book. A parabola y = ax² + bx + c with a > 0 crosses the x-axis once for each real root. Δ > 0: two crossings, two roots. Δ = 0: the vertex sits ON the axis — one repeated root. Δ < 0: the parabola floats entirely above (or below) — no real roots. The axis of symmetry x = −b/2a runs through the vertex in every case.',
        afterConcept: 6,
        svg: `<svg viewBox="0 0 880 430" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three parabolas: one crossing the axis twice, one touching at the vertex, one floating above with no real roots; axis of symmetry marked through the vertex">
  <style>.lbl{font-family:Georgia,serif;font-size:14px;fill:#3f3f46}.big{font-size:17px;font-weight:bold}.sm{font-size:12px;fill:#52525b}.ink{stroke:#3b82f6;fill:none;stroke-width:2.6;stroke-linecap:round}.axis{stroke:#8a8a93;stroke-width:1.6}.dash{stroke:#ca8a04;stroke-width:1.4;stroke-dasharray:5 4}.box{fill:none;stroke:#c8c8d0;stroke-width:1.6;stroke-dasharray:5 4}</style>
  <text class="lbl big" x="28" y="32" fill="#3f3f46">The discriminant Δ = b² − 4ac counts the crossings</text>
  <rect x="24" y="48" width="264" height="330" rx="12" class="box"/>
  <text class="lbl" x="40" y="72" font-weight="bold">Δ &gt; 0 — two real roots</text>
  <line x1="44" y1="280" x2="268" y2="280" class="axis"/>
  <path class="ink" d="M64 120 Q156 470 248 120"/>
  <circle cx="103" cy="280" r="5" fill="#e11d48"/><circle cx="209" cy="280" r="5" fill="#e11d48"/>
  <text class="sm" x="96" y="302">root 1</text><text class="sm" x="196" y="302">root 2</text>
  <line x1="156" y1="96" x2="156" y2="340" class="dash"/>
  <text class="sm" x="118" y="356">axis x = −b/2a</text>
  <text class="sm" x="40" y="330">the curve dips THROUGH the axis:</text>
  <text class="sm" x="40" y="346">two separate meetings, two answers</text>
  <rect x="308" y="48" width="264" height="330" rx="12" class="box"/>
  <text class="lbl" x="324" y="72" font-weight="bold">Δ = 0 — one repeated root</text>
  <line x1="328" y1="280" x2="552" y2="280" class="axis"/>
  <path class="ink" d="M352 140 Q440 420 528 140"/>
  <circle cx="440" cy="280" r="5" fill="#e11d48"/>
  <text class="sm" x="392" y="302">vertex ON the axis</text>
  <text class="sm" x="324" y="330">the parabola only KISSES the axis:</text>
  <text class="sm" x="324" y="346">both ± branches collapse to one value</text>
  <text class="sm" x="324" y="362">— the repeated (double) root</text>
  <rect x="592" y="48" width="264" height="330" rx="12" class="box"/>
  <text class="lbl" x="608" y="72" font-weight="bold">Δ &lt; 0 — no real roots</text>
  <line x1="612" y1="330" x2="836" y2="330" class="axis"/>
  <path class="ink" d="M632 110 Q724 320 816 110"/>
  <text class="sm" x="648" y="352">the whole parabola floats above:</text>
  <text class="sm" x="648" y="368">never meets the axis</text>
  <text class="sm" x="608" y="330">no real number squares to negative —</text>
  <text class="sm" x="608" y="346">no real roots (complex ones exist)</text>
</svg>`,
      },
      {
        kind: 'formula',
        name: 'The discriminant trichotomy',
        latex: '\\Delta = b^2 - 4ac:\\quad \\Delta > 0 \\;\\Rightarrow\\; \\text{two distinct real roots};\\quad \\Delta = 0 \\;\\Rightarrow\\; \\text{one repeated root};\\quad \\Delta < 0 \\;\\Rightarrow\\; \\text{no real roots}',
        meaning: 'One subtraction decides the shape of the answer set before any root is taken. A positive Δ that is also a PERFECT SQUARE (with rational a, b, c) further guarantees the equation factorises over the rationals — the quick test of whether method one is worth trying.',
      },
      { kind: 'heading', text: 'Vertex Form: What the Square Buys Beyond Roots' },
      {
        kind: "para",
        text: "Completing the square does more than solve equations. Written as a FUNCTION $y = ax^2 + bx + c$, the completed-square form is the vertex form:\n\n$$y = ax^2 + bx + c = a\\left(x - h\\right)^2 + k, \\qquad h = -\\frac{b}{2a}, \\quad k = c - \\frac{b^2}{4a}$$\n\nand it reads the parabola's turning point straight off: the vertex is $\\left(h, k\\right)$. Why must the turning point sit there? The bracket $\\left(x - h\\right)^2$ is zero exactly once, at $x = h$, and it is a square — so it can never be negative. Every other $x$ makes it positive, pushing $y$ ABOVE (when $a > 0$) or BELOW (when $a < 0$) the value $k$. The point $x = h$ is therefore the unique best-or-worst point of the whole curve, and $k$ is its value. The vertical line $x = h$ is the axis of symmetry: the $\\pm$ in the formula is its mirror twin — roots sit symmetrically on either side of it,\n\n$$x = -\\frac{b}{2a} \\pm \\frac{\\sqrt{\\Delta}}{2a},$$\n\nwhich is also why the two roots of any quadratic sum to $-b/a$ (their midpoint is the axis). That midpoint shortcut is the fastest route to a maximum or minimum: in the projectile\n\n$$h = -4.9\,t^2 + v_0\,t + h_0$$\n\nthe peak arrives at\n\n$$t_{\\text{peak}} = -\\frac{v_0}{2\\left(-4.9\\right)} = \\frac{v_0}{9.8}$$\n\nhalf the total flight time, exactly as symmetry demands.",
      },
      {
        kind: "example",
        title: 'Worked Example 1 — One Equation, Two Doors, One Answer',
        steps: [
          'Identify what is asked: solve $2x^2 - 4x - 3 = 0$ twice — by completing the square and by the formula — and confirm the answers agree.',
          'Door A, completing the square: $a = 2 \\ne 1$, so divide everything by 2 first (half of $-2$ is $-1$; squared is 1):',
          '$$x^2 - 2x - \\tfrac{3}{2} = 0$$\n$$x^2 - 2x = \\tfrac{3}{2}$$\n$$\\left(x - 1\\right)^2 = \\tfrac{3}{2} + 1 = \\tfrac{5}{2}$$',
          'Square-root property, then rationalise the root:',
          '$$x - 1 = \\pm\\sqrt{\\tfrac{5}{2}} = \\pm\\tfrac{\\sqrt{10}}{2}$$\n$$x = 1 \\pm \\tfrac{\\sqrt{10}}{2} = \\tfrac{2 \\pm \\sqrt{10}}{2}$$',
          'Door B, the formula: $a = 2$, $b = -4$, $c = -3$:',
          '$$x = \\frac{4 \\pm \\sqrt{16 + 24}}{4} = \\frac{4 \\pm \\sqrt{40}}{4} = \\frac{4 \\pm 2\\sqrt{10}}{4} = \\tfrac{2 \\pm \\sqrt{10}}{2}$$',
          'Cross-check numerically ($\\sqrt{10} \\approx 3.162$, so $x \\approx 2.581$ or $x \\approx -0.581$):',
          '$$2\\left(2.581\\right)^2 - 4\\left(2.581\\right) - 3 \\approx 13.32 - 13.32 = 0 \\;\\checkmark$$\n$$\\Delta = 16 + 24 = 40 > 0 \\;\\;\\text{— two distinct real roots, as found}$$',
          'State the result: $x = \\left(2 \\pm \\sqrt{10}\\right)/2$ by either road. Two methods, one truth — and the agreement is itself the check.',
        ],
      },
      {
        kind: "example",
        title: 'Worked Example 2 — The Ball\'s Peak: Roots Answer "When", the Vertex Answers "How High"',
        steps: [
          'Identify what is asked: a ball is thrown upward from 2 m with speed 30 m/s; its height is $h = -5t^2 + 30t + 2$ (g ≈ 10 m/s²). Find BOTH the time it lands and the peak height.',
          'Landing is $h = 0$ — multiply by $-1$ to keep the leading coefficient positive:',
          '$$5t^2 - 30t - 2 = 0$$\n$$\\Delta = \\left(-30\\right)^2 - 4\\left(5\\right)\\left(-2\\right) = 900 + 40 = 940$$\n$$\\sqrt{940} = \\sqrt{4 \\times 235} = 2\\sqrt{235} \\approx 30.66$$',
          'Formula:',
          '$$t = \\frac{30 \\pm 30.66}{10}$$\n$$t \\approx 6.07\\ \\text{s} \\quad\\text{or}\\quad t \\approx -0.07\\ \\text{s}$$',
          'Time cannot be negative — discard the negative root. The ball lands about 6.07 seconds after the throw.',
          'The peak is NOT a root — it is the vertex (half of the flight, as the symmetry argument promised):',
          '$$t_{\\text{vertex}} = -\\frac{30}{2\\left(-5\\right)} = 3\\ \\text{s}$$\n$$h\\left(3\\right) = -5\\left(9\\right) + 90 + 2 = -45 + 92 = 47\\ \\text{m}$$',
          'State the result: lands at $t \\approx 6.07$ s; peaks at 47 m, reached at $t = 3$ s. Roots answer "when is height zero"; the vertex answers "how high at best" — two different questions, two different features of the same parabola.',
        ],
      },
      {
        kind: "example",
        title: 'Worked Example 3 — Reading Δ Before Computing, and a Design Question',
        steps: [
          'Identify what is asked: (a) classify $9x^2 - 12x + 4 = 0$ without solving fully; (b) a 40 m fence encloses a rectangular garden against a straight wall on one side — what width maximises the area?',
          '(a) Read the discriminant first, with $a = 9$, $b = -12$, $c = 4$:',
          '$$\\Delta = \\left(-12\\right)^2 - 4\\left(9\\right)\\left(4\\right) = 144 - 144 = 0$$\n$$x = \\tfrac{12}{18} = \\tfrac{2}{3} \\quad\\text{(one repeated root)}$$\n$$9x^2 - 12x + 4 = \\left(3x - 2\\right)^2$$',
          'a perfect square — and the parabola\'s vertex $\\left(\\tfrac{2}{3}, 0\\right)$ sits exactly on the x-axis, kissing it.',
          '(b) Let $x$ be the two fenced widths (the wall covers the third side); the length is $40 - 2x$:',
          '$$A = x\\left(40 - 2x\\right) = -2x^2 + 40x$$',
          'This is a quadratic with $a = -2 < 0$ — opens downward, so its vertex is a MAXIMUM:',
          '$$x_{\\text{vertex}} = -\\frac{40}{2\\left(-2\\right)} = 10\\ \\text{m}$$\n$$\\text{length} = 40 - 2\\left(10\\right) = 20\\ \\text{m}$$\n$$A\\left(10\\right) = 10 \\times 20 = 200\\ \\text{m}^2$$',
          'Confirm with the completed-square form — the 200 stands alone as the peak:',
          '$$A = -2\\left(x^2 - 20x\\right) = -2\\left(x - 10\\right)^2 + 200$$',
          'State the result: (a) $\\Delta = 0$ → the equation is $\\left(3x - 2\\right)^2 = 0$ with the repeated root $x = \\tfrac{2}{3}$; (b) the optimal garden is 10 m wide (two 10 m widths) and 20 m long along the wall, area 200 m².',
        ],
      },
      { kind: 'heading', text: 'Choosing the Fastest Door' },
      {
        kind: "para",
        text: "Four methods, one decision rule. Look for a friendly factorisation first — if integer factors jump out within a few seconds (check: does $\\Delta$ being a small perfect square make it likely?), take them. Look for an isolated square next —\n\n$$\\left(x - h\\right)^2 = k$$\n\nor anything one move away from it — and let the square-root property finish. If neither shape appears, use the formula: it always works and its discriminant tells you in advance whether roots exist at all. Completing the square 'by hand' is the method you reach for when the question demands it — when the vertex, the maximum or the derivation itself is the point — and it remains the honest fallback that the formula was born from. Speed-layer short-cuts (pattern-spotting, sign games, option-plugging under time pressure) belong to test-strategy material; this lesson is the concept-depth home they optimise. Whatever the door, the exit ritual never changes: substitute both answers back and watch them vanish the equation.",
      },
      {
        kind: 'callout',
        title: 'Applications in the Real World',
        tone: 'insight',
        text: "Projectiles and sport: every thrown ball's height is a quadratic in time — solve $h = 0$ for the landing, read $-b/2a$ for the apex, exactly as Worked Example 2 did. Business pricing: if each rupee off the price sells more tickets, revenue (price × count) is a quadratic in the discount, and the vertex IS the optimal price — companies live on $-b/2a$. Design: parabolic dishes and headlight reflectors use the curve's focusing property, and the fence problem's vertex logic sizes everything from bookshelf spans to solar-panel layouts. Equation plumbing: the geometry-and-measurement chapter recovers a circle's or sphere's centre-and-radius by completing the square in two or three variables at once (the sphere lesson cites this lesson for the method). Quantity comparisons: when an entrance-style comparison hides a polynomial, moving everything to one side and studying the SIGN of the resulting quadratic — its discriminant first — is exactly the algebraic-comparison technique the data-sufficiency lesson teaches. And engineering stability: characterising when a system oscillates or settles reduces to reading the sign of a discriminant.",
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: "Eight traps, in descending frequency. Dropping the $\\pm$ — on the square-root property AND inside the formula; every square root in solving carries both signs. Adding $\\left(b/2\\right)^2$ to one side of an equation only — the scribe appended the quarter to BOTH sides. Forgetting to divide by $a$ before completing the square (or mis-dividing when $a$ does not go evenly). Writing the formula with part of the numerator over $2a$ — the WHOLE of $-b \\pm \\sqrt{b^2 - 4ac}$ sits over $2a$. Solving before reaching standard form, so $a$, $b$, $c$ are read off the wrong arrangement. Answering 'how high' with roots or 'when' with the vertex — roots and vertex are different features (Worked Example 2). Saying 'no solutions' when $\\Delta < 0$ — the honest phrase is 'no REAL solutions'; complex roots still exist. Skipping the substitution check, which catches sign slips the algebra hid.",
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'Standard form', def: '$ax^2 + bx + c = 0$ with $a \\ne 0$ — the gathered arrangement every method reads its $a$, $b$, $c$ from.' },
        { term: 'Zero-product property', def: 'If a product of factors is zero, at least one factor is zero — the licence that turns $\\left(x - 4\\right)\\left(x + 3\\right) = 0$ into two linear equations.' },
        { term: 'Square-root property', def: 'If $x^2 = k \\ge 0$ then $x = \\pm\\sqrt{k}$ — both signs, because squaring erases sign.' },
        { term: 'Completing the square', def: 'Rewriting $x^2 + bx + c$ as $\\left(x + \\frac{b}{2}\\right)^2 + \\left(c - \\frac{b^2}{4}\\right)$: half the middle coefficient, squared, added and subtracted. The Babylonian scribe\'s cut-and-paste move, made algebra.' },
        { term: 'Perfect-square trinomial', def: 'A quadratic that IS a square: $x^2 + 2hx + h^2 = \\left(x + h\\right)^2$. Its discriminant is 0.' },
        { term: 'Quadratic formula', def: '$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$ — completing the square done once with letters; derived, not memorised, in this lesson.' },
        { term: 'Discriminant', def: '$\\Delta = b^2 - 4ac$: positive → two distinct real roots; zero → one repeated root; negative → no real roots (two complex). Named by Sylvester, 1851.' },
        { term: 'Repeated (double) root', def: 'The single root that remains when $\\Delta = 0$; geometrically, the vertex sitting exactly on the x-axis.' },
        { term: 'Vertex form', def: '$y = a\\left(x - h\\right)^2 + k$ with vertex $\\left(h, k\\right)$ and $h = -\\frac{b}{2a}$ — the completed-square packaging that reads off the turning point.' },
        { term: 'Axis of symmetry', def: 'The vertical line $x = -\\frac{b}{2a}$ through the vertex; the two roots sit mirrored on either side of it, so they sum to $-\\frac{b}{a}$.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'Solve $x^2 = 49$.',
          options: ['$x = 7$', '$x = \\pm 7$', '$x = \\pm 24.5$', '$x = 7$ or $x = 0$'],
          answer: 1,
          explain: 'Square-root property: $x = \\pm\\sqrt{49} = \\pm 7$. Every square root in solving carries both signs — the negative root is the classic dropped solution.',
        },
        {
          q: 'What number completes the square for $x^2 + 10x + 3$?',
          options: ['add and subtract 100', 'add and subtract 25', 'add and subtract 10', 'add and subtract 5'],
          answer: 1,
          explain: 'Half of $b$ is 5; squared is 25. $x^2 + 10x + 25 = \\left(x + 5\\right)^2$, so the expression becomes $\\left(x + 5\\right)^2 - 22$. Al-Khwarizmi\'s $10x$ needed exactly the same 25.',
        },
        {
          q: 'Solve $2x^2 - 8x + 6 = 0$ by dividing by $a$ first. The roots are:',
          options: ['1 and 3', '−1 and −3', '2 only', 'no real roots'],
          answer: 0,
          explain: 'Divide by 2: $x^2 - 4x + 3 = 0 \\Rightarrow \\left(x - 1\\right)\\left(x - 3\\right) = 0 \\Rightarrow x = 1$ or 3. Check 3: $18 - 24 + 6 = 0$ ✓. Dividing first keeps the completing-square arithmetic fraction-free.',
        },
        {
          q: 'For $3x^2 + 2x + 5 = 0$, the discriminant is:',
          options: ['$4 - 60 = -56$: no real solutions', '$4 + 60 = 64$: two solutions', '$9 - 20 = -11$: no real solutions', '0: one solution'],
          answer: 0,
          explain: '$\\Delta = b^2 - 4ac = 2^2 - 4\\left(3\\right)\\left(5\\right) = 4 - 60 = -56$. Negative discriminant: the parabola never meets the x-axis — no REAL roots (complex ones exist).',
        },
        {
          q: 'Which equation is best solved by the square-root property?',
          options: ['$x^2 + 5x + 6 = 0$', '$\\left(x - 3\\right)^2 = 12$', '$2x^2 + 9x - 5 = 0$', '$x^4 - 5x^2 + 6 = 0$'],
          answer: 1,
          explain: 'The shape $\\left(x - h\\right)^2 = k$ is the square-root property\'s home turf: $x - 3 = \\pm\\sqrt{12} = \\pm 2\\sqrt{3}$ directly. The others suit factorising or the formula.',
        },
        {
          q: 'The vertex of $y = 2x^2 - 4x - 3$ is:',
          options: ['(1, −5)', '(−1, 5)', '(2, −3)', '(4, −3)'],
          answer: 0,
          explain: '$x$-vertex $= -\\frac{b}{2a} = \\frac{4}{4} = 1$; $y\\left(1\\right) = 2 - 4 - 3 = -5$. Since $a = 2 > 0$ the parabola opens up, so this is the minimum — Worked Example 1\'s equation read as a function.',
        },
        {
          q: 'For the ball $h = -5t^2 + 30t + 2$ of Worked Example 2, the peak height is:',
          options: ['45 m', '47 m', '92 m', '30 m'],
          answer: 1,
          explain: 'Peak at $t = -\\frac{b}{2a} = 3$ s; $h\\left(3\\right) = -45 + 90 + 2 = 47$ m. The 45 m is only the $-5t^2$ contribution, and 92 is a sign slip: peaks come from the VERTEX, never from the roots.',
        },
        {
          q: 'If a quadratic\'s discriminant is exactly 0, what does the graph do?',
          options: ['crosses the x-axis twice', 'touches the x-axis once, at the vertex', 'never meets the x-axis', 'has no vertex'],
          answer: 1,
          explain: '$\\Delta = 0$ collapses the $\\pm$ into one value: the repeated root sits AT the vertex, which lies exactly on the axis — the parabola kisses the x-axis once (Figure 2, middle panel).',
        },
      ] },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: the algebraic-notation-and-manipulation lesson (§71.1) — expanding brackets and factorising are this lesson\'s first method and its completing-square identity; the mental-arithmetic rungs of the applied-mathematics lesson sharpen the half-and-square speed. Follow the algebra chapter in order: §71.3 pushes these equations into modulus and logarithm inequalities, where a quadratic\'s discriminant decides how many cases exist. Later connections: the function-graphing material draws the parabola this lesson describes; the sphere and circle lessons (§73.3, geometry-and-measurement) reuse completing the square in three variables to recover centre and radius; the derivative lesson generalises the vertex to every curve\'s critical points — the −b/2a you computed here is that story\'s first chapter. Sources: OpenStax, Intermediate Algebra 2e (sections on quadratic equations and the quadratic formula) for the four-step formula rhythm, the 2x² + 9x − 5 worked example and the a = 1 point; BM 13901 problem 2 as translated in Jöran Friberg\'s and Eleanor Robson\'s Babylonian-mathematics scholarship; al-Khwarizmi\'s Al-jabr (c. 820 CE) for the four-rectangle completion; Brahmagupta, Brāhmasphuṭasiddhānta (628 CE); Sridhara\'s rule as preserved in later quotations (c. 870–930); Sylvester 1851 for "discriminant"; Cardano, Ars Magna (1545), chapter on the irreducible case.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Standard form first: $ax^2 + bx + c = 0$, $a \\ne 0$; identify $a$, $b$, $c$ before choosing anything.',
        'Factorise when friendly (zero-product property splits it); square-root property when a square stands alone — carry the $\\pm$.',
        'Completing the square: half of $b$, squared, added and subtracted; divide by $a$ first (or use Sridhara\'s $4a$-multiply); the geometry is a missing corner.',
        'The formula is completing the square done once — and you can now re-derive it, not just recall it.',
        '$\\Delta = b^2 - 4ac$ counts roots: positive two, zero one (vertex on the axis), negative none real.',
        'Vertex form $y = a\\left(x - h\\right)^2 + k$ reads the turning point $\\left(h, k\\right)$ with $h = -\\frac{b}{2a}$; roots answer "when", the vertex answers "how high".',
        'Door-choice: factor → square → formula; complete the square when the vertex or the derivation is the question. Then CHECK by substitution.',
      ] },
    ],
  },
  {
    id: 'math-modulus-logarithm-inequalities',
    title: 'Modulus and Logarithm Inequalities: The Algebra of Distance and of Growth',
    domain: 'Mathematics',
    field: 'Algebra',
    branch: 'Inequalities',
    tier: 'advanced',
    concepts: [
      'Modulus as distance on the number line',
      '|x| < a and |x| > a as interval statements',
      'Sum of distances |x − a| + |x − b| and its band geometry',
      'Case-splitting versus squaring — when each is legal',
      '|f(x)| < g(x) resolved as −g < f < g',
      'Logarithm inequalities: the base decides the direction',
      'Domain first: the logarithm\u2019s argument must stay positive',
      'Exponential inequalities as mirrored logarithm problems',
    ],
    words: 2047,
    readMins: 10,
    addedOn: '2026-10-26',
    blocks: [
      {
        kind: 'para',
        text: 'Two families of inequalities dominate the algebra portion of every demanding engineering-entrance syllabus and ruin more solutions than any other topic: inequalities carrying modulus signs and inequalities carrying logarithms. They fail for the same underlying reason — both hide a branch decision. The modulus |x| is defined by cases, and the logarithm\u2019s order depends on its base. Solve either family on autopilot — multiply through, square both sides, "take log of both sides" — and the branch decision silently corrupts the answer set. The standard treatment (it heads the algebra volume of the most-used advanced series, as the chapter "Inequalities, Modulus and Logarithm") builds the discipline this lesson teaches: read the modulus as distance, read the logarithm as growth, and let the geometry and the base decide the direction before any algebra begins.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Modulus inequalities describe tolerances and error bands (a machined part within ±0.05 mm of spec, a signal within a corridor); distance-sum forms are literally how facilities and routing problems are posed; logarithm inequalities govern pH thresholds, decibel limits, earthquake magnitudes, compound-interest doubling times and every "how many digits" question in computer science. The branch discipline itself — checking which case you are in — is the same discipline required wherever piecewise functions meet inequalities.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The modulus |x − a| is the distance between x and a on the number line — this single reading generates every rule. |x| < a (with a > 0) says: x is within distance a of 0, i.e. −a < x < a, one open interval. |x| > a says: x is FARTHER than a from 0, i.e. x < −a or x > a — two rays, and the word "or" is what careless solvers drop. The same two patterns apply to |x − a| < b, the points within b of a: the interval (a − b, a + b). Watch the strictness: |x − a| ≤ b closes the endpoints. And if the right side is negative, |anything| < negative has no solution while |anything| > negative is true everywhere — checking the right side\u2019s sign first costs one second and saves whole wrong answers.',
      },
      {
        kind: 'para',
        text: 'The distance reading shines on sums. The expression |x − 2| + |x − 5| is the total walking distance from x to 2 plus from x to 5 — the classic facilities question. Between the two points the sum is constant, exactly the gap 3 (one leg shrinks as the other grows); outside, each step away adds two to the sum. So |x − 2| + |x − 5| ≥ 3 always, with equality exactly on the segment [2, 5] — the triangle inequality materialised on a line. This turns inequality questions into geometry: |x − 2| + |x − 5| < 9 asks where the total distance is under 9, and the answer is a symmetric band around the segment: the distance-budget 9 exceeds the gap by 6, split evenly, giving (2 − 3, 5 + 3) = (−1, 8). No case-splitting needed — though the case method below must give the same answer, and checking both against each other is excellent practice.',
      },
      {
        kind: 'formula',
        name: 'Distance-sum bounds',
        latex: '|x-a| + |x-b| \\;\\ge\\; |a-b| \\quad\\text{(equality exactly on } [a,b]\\text{)}',
        meaning: 'The sum of distances from x to two fixed points is least between them, where it equals the gap; every unit of movement outside the segment adds two units to the sum. Read |x−a| + |x−b| < d as a band when d exceeds the gap, empty when d is smaller.',
      },
      {
        kind: 'para',
        text: 'When geometry does not finish the job, two algebraic engines exist: case-splitting and squaring. Case-splitting is universal: the modulus\u2019s zeros chop the line into intervals, on each of which every modulus opens with a known sign, and the resulting ordinary inequalities are intersected with their own intervals before the pieces union. Squaring is faster but conditional: |f(x)| < g(x) is equivalent to f² < g² (both sides were non-negative), which factorises as (f − g)(f + g) < 0. The cleanest general form worth memorising: for g(x) > 0, the chain |f(x)| < g(x) ⟺ −g(x) < f(x) < g(x), and |f(x)| > g(x) ⟺ f(x) > g(x) or f(x) < −g(x). Never split |f(x)| < g(x) into "f(x) < ±g(x)" without the conjunction discipline — the double inequality is the safe memory.',
      },
      {
        kind: 'para',
        text: 'Logarithm inequalities add the second branch. The logarithm log_b(x) is increasing when b > 1 (each doubling of x adds a fixed amount) and DECREASING when 0 < b < 1 — the base decides the direction, exactly as the modulus\u2019s argument decides the case. So log_b(f(x)) < log_b(g(x)) becomes f(x) < g(x) when b > 1 but f(x) > g(x) when 0 < b < 1, and in both cases the domain f(x) > 0, g(x) > 0 must accompany the comparison. The compound discipline is absolute: DOMAIN FIRST, then the order. The same mirror holds for exponential inequalities: b^{f(x)} > b^{g(x)} means f > g when b > 1 and f < g when 0 < b < 1 — the exponential and logarithm rules are the same fact read in opposite directions, since they are inverse functions.',
      },
      {
        kind: 'para',
        text: 'A final workhorse pattern: inequalities where the logarithm hides behind a disguise. The expression (log x)² − 4(log x) + 3 < 0 is a quadratic in the variable u = log x — solve for u first (factoring gives 1 < u < 3), then unwrap the outer inequality back through the logarithm with full base-and-domain discipline. Substitution plus branch-aware unwrapping is the complete method: treat the transcendental quantity as a letter, solve the algebra, then translate each bound back through the function\u2019s monotonicity.',
      },
      { kind: 'heading', text: 'Worked Examples' },
      {
        kind: 'example',
        title: 'Worked Example — a distance-sum band, two ways',
        steps: [
          'Solve |x − 2| + |x − 5| < 4. Geometry first: the gap between 2 and 5 is 3, so the distance budget 4 exceeds it by 1, split evenly on both sides: the band is (2 − 1/2, 5 + 1/2) = (3/2, 11/2).',
          'Verify by cases. On [2, 5]: the sum is (x − 2) + (5 − x) = 3 < 4 — always true, so the whole segment [2, 5] is in (but check the ends below).',
          'For x < 2: sum = (2 − x) + (5 − x) = 7 − 2x < 4 gives x > 3/2; intersecting with x < 2 yields (3/2, 2). For x > 5: sum = (x − 2) + (x − 5) = 2x − 7 < 4 gives x < 11/2; intersecting yields (5, 11/2).',
          'Union of the three pieces: (3/2, 11/2) — matching the geometric band exactly, including strict endpoints (at x = 3/2 the sum is exactly 4, excluded).',
          'Note how each case\u2019s inequality was intersected with its own defining interval — dropping that intersection is the standard way to import phantom solutions.',
        ],
      },
      {
        kind: 'example',
        title: 'Worked Example — a base-aware logarithm inequality with domain',
        steps: [
          'Solve log_{1/2}(x − 1) > −2. Domain first: x − 1 > 0, so x > 1.',
          'The base is 1/2, which lies between 0 and 1 — the logarithm is DECREASING, so the inequality reverses when exponentiating: x − 1 < (1/2)^{−2} = 4.',
          'So x − 1 < 4 gives x < 5; intersect with the domain x > 1: the solution is 1 < x < 5.',
          'Sanity check at x = 3: log_{1/2}(2) = −1 > −2 ✓. At x = 6: log_{1/2}(5) ≈ −2.32, which is NOT greater than −2 ✓ (excluded).',
          'Disguise variant: solve log₂(x − 1) + log₂(x − 3) ≤ 2. Domain: x > 3 (both arguments positive). Combine: log₂((x − 1)(x − 3)) ≤ 2, base 2 > 1 so (x − 1)(x − 3) ≤ 4, i.e. x² − 4x − 1 ≤ 0, giving 2 − √5 ≤ x ≤ 2 + √5. Intersect with x > 3: the solution is 3 < x ≤ 2 + √5 (note 2 + √5 ≈ 4.24).',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Engineering tolerances: a dimension within ±δ of nominal is exactly |x − a| < δ — the interval form every quality-control chart plots',
          'Facilities and routing: total travel distance to two depots |x − a| + |x − b| ≤ D defines the serviceable corridor — the distance-sum band',
          'pH and chemistry: pH > 7 or pH < 7 thresholds are logarithm inequalities (pH = −log₁₀[H⁺]) where the base-10 direction is implicit',
          'Acoustics and seismology: decibel and magnitude scales are logarithmic, so "limit to X dB" and "above magnitude Y" translate to exponential inequalities',
          'Computer science: digit counts and bit lengths (⌊log₂ n⌋ + 1) make memory-sizing and loop-analysis questions logarithm inequalities in disguise',
          'Finance: doubling-time and compound-growth questions compare b^t against a target — exponential inequalities with base-aware unwrapping',
        ],
      },
      { kind: 'heading', text: 'Pitfalls and Exam Traps' },
      {
        kind: 'list',
        items: [
          'Reading |x| > a as a single interval: it is a UNION of two rays (x < −a or x > a) — the "or" is structural',
          'Squaring both sides of an inequality without checking signs: |f| < g squares safely (both non-negative), but f < g does not',
          'Forgetting the domain of every logarithm BEFORE comparing: solutions outside the domain are the most common wrong answers in this whole topic',
          'Keeping the inequality direction when the base is less than 1: log_{1/2} REVERSES the order — base check first, always',
          'Solving (log f(x))²-style disguises by expanding logs instead of substituting u = log f(x): treat the log as the variable, then unwrap',
          'Missing the equality check at band endpoints for ≤ versus <: distance-sum equalities land exactly on the boundary points',
        ],
      },
      {
        kind: 'terms',
        items: [
          { term: 'Modulus', def: '|x − a|: the distance between x and a; defined by cases, which is the source of every branch decision.' },
          { term: 'Distance-sum band', def: 'The solution of |x − a| + |x − b| < d when d exceeds the gap: a symmetric interval around [a, b].' },
          { term: 'Domain-first discipline', def: 'Before comparing logarithms, enforce every argument > 0; the comparison is meaningless off the domain.' },
          { term: 'Base-aware direction', def: 'log_b comparisons keep their direction when b > 1 and reverse when 0 < b < 1; same for exponentials.' },
          { term: 'Disguised quadratic', def: 'An inequality polynomial in log f(x): substitute u = log f(x), solve the algebra in u, then unwrap with base and domain discipline.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'The solution set of |x − 3| < 5 is:',
            options: [
              'x < −2 or x > 8',
              '−2 < x < 8',
              '−5 < x < 5',
              'x < 2 or x > 8',
            ],
            answer: 1,
            explain: '|x − 3| < 5 says x is within distance 5 of 3: (3 − 5, 3 + 5) = (−2, 8). The two-ray form is the trap for the > version of the question.',
          },
          {
            q: 'The minimum value of |x + 1| + |x − 4| is attained:',
            options: [
              'at x = −1 only',
              'at x = 4 only',
              'at every x in [−1, 4]',
              'nowhere — the sum grows without bound downward',
            ],
            answer: 2,
            explain: 'The sum of distances to −1 and 4 equals the gap 5 for EVERY point between them (one leg grows exactly as the other shrinks); outside the segment it exceeds 5. Equality holds on the whole closed segment.',
          },
          {
            q: 'The inequality log_{0.3}(x + 2) < log_{0.3}(6 − x) implies:',
            options: [
              'x + 2 < 6 − x, with −2 < x < 6',
              'x + 2 > 6 − x, with −2 < x < 6',
              'x + 2 > 6 − x, with x > 4',
              'x + 2 < 6 − x, with x < 4',
            ],
            answer: 1,
            explain: 'Base 0.3 lies between 0 and 1, so the decreasing logarithm REVERSES the comparison: x + 2 > 6 − x, giving x > 2. The domain needs both arguments positive: x > −2 and x < 6. Together: 2 < x < 6.',
          },
          {
            q: 'The number of integers satisfying log₂(x − 1) + log₂(x − 3) ≤ 2 is:',
            options: [
              '0',
              '1',
              '2',
              '3',
            ],
            answer: 1,
            explain: 'Domain first: x > 3. Combining the logs (base 2 > 1 keeps the direction): (x − 1)(x − 3) ≤ 4, so x² − 4x − 1 ≤ 0, giving 2 − √5 ≤ x ≤ 2 + √5 ≈ 4.24. Intersecting with x > 3: the solution is 3 < x ≤ 4.24. Checking: x = 4 gives 3·1 = 3 ≤ 4 ✓, while x = 5 gives 8 > 4 ✗. Exactly one integer, namely 4.',
          },
        ],
      },
    ],
  },
]
