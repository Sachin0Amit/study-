/**
 * Knowledge Universe — Mathematics — Chapter 02: Algebra
 * 3 lessons · ~7,014 words
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
    words: 3496,
    readMins: 17,
    addedOn: '2026-10-24',
    blocks: [
      {
        kind: 'para',
        text: 'Baghdad, around 820 CE. In the House of Wisdom, Muhammad ibn Musa al-Khwarizmi sets down a problem the only way his age allowed — as a sentence: “a square and ten of its roots equal thirty-nine dirhams”. We would write x² + 10x = 39 and be done. His readers could not — the symbols did not exist yet, and algebra would stay written in prose for centuries. The Arabic al-jabr — restoring what a subtraction removed to the other side — gave the subject its name, and al-Khwarizmi’s Latinised name gave us the word algorithm. The notation this lesson teaches is the end of a long compression: François Viète proposed vowels for unknowns and consonants for knowns in 1591; René Descartes fixed x, y, z for unknowns in La Géométrie of 1637. What looks like jargon is the most productive notation ever devised: one short line of symbols asserts infinitely many numerical facts at once. This lesson teaches its fluent reading — the anatomy of an expression, the laws that govern it, and the four commands simplify, expand, factorise and rearrange that every later chapter assumes.',
      },
      { kind: 'heading', text: 'From arithmetic to letters' },
      {
        kind: 'para',
        text: 'An algebraic expression is a recipe for computing a number, written with letters standing in for values that are unknown or arbitrary. The expression 3x² − 5x + 7 says: square a number x, multiply by three, subtract five of the original x, and add seven. Letters are the crucial upgrade from arithmetic. In the mental-arithmetic lesson the commutative, associative and distributive laws worked on actual numbers — 7 × 98 was split into 7 × (100 − 2). A letter is the device for saying this holds for every number: writing a(b + c) = ab + ac asserts the trick for all values at once — the formalisation that lesson promised. Two writing conventions apply. Multiplication is silent: 3x means 3 × x, and 3x² means 3 × (x × x) — the power grabs only the letter, not the coefficient, so 3x² and (3x)² are different objects — three copies of x² versus nine. And the arithmetic order of operations still rules: powers first, then multiplication and division, then addition and subtraction, with brackets overriding everything.',
      },
      { kind: 'heading', text: 'The anatomy of an expression' },
      {
        kind: 'para',
        text: 'An expression is built from terms — the pieces separated by plus and minus signs. In 3x² − 5x + 7 there are three terms: 3x², −5x and 7. The sign travels with the term — the second term is −5x — a discipline that prevents the most frequent error in the subject. Each term has an anatomy of its own. The coefficient is the number multiplying the letters: 3 in the first term, −5 in the second, sign included. The variable is the letter itself, standing for the unknown or arbitrary quantity. The degree of a term is the total exponent of its variables: 3x² has degree 2, −5x has degree 1, and the constant 7 has degree 0 because no variable appears at all. The degree of the whole expression is the highest among its terms — here 2, which makes it quadratic in shape.',
      },
      {
        kind: 'para',
        text: 'Two terms are like terms when they involve exactly the same letters raised to exactly the same powers. 5x and −2x are like — both are “some number of x”. 5x and 5x² are not, nor 3xy and 3x: the letter part must match completely. This vocabulary is not decoration — questions are phrased in it: state the coefficient of x; the degree of the expression. The figure below pins all of these names onto a real expression; study it until labelling any term is automatic.',
      },
      { kind: 'heading', text: 'The laws that make letters behave like numbers' },
      {
        kind: 'para',
        text: 'Three laws form the entire legal code of manipulation. The commutative laws say order does not matter: a + b = b + a and ab = ba — though subtraction and division are not covered: 5 − 3 ≠ 3 − 5. The associative laws say grouping does not matter: (a + b) + c = a + (b + c) and (ab)c = a(bc) — the reason terms can be added in any order. The distributive law is the engine of this lesson: a(b + c) = ab + ac — read forwards it expands a bracket, backwards it factorises. Every move in this lesson is one of these three sentences wearing different clothes, and nothing else is permitted: a rewrite must follow from these laws, so checking a manipulation means checking that it did.',
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
        text: 'Expanding means multiplying out every bracket until none remain. For a single bracket the distributive law does everything: 3(2x − 5) = 6x − 15 — the outside factor meets every inside term, not just the first. A minus in front of a bracket is the same move with −1: −(x − 4) = −x + 4 — every inside sign flips. This is where marks are silently lost: 5a − (2a − 3b) equals 5a − 2a + 3b, not 5a − 2a − 3b, because the minus multiplies both inside terms.',
      },
      {
        kind: 'para',
        text: 'Two brackets multiply by applying the law twice: (x + 2)(x + 3) = x(x + 3) + 2(x + 3) = x² + 3x + 2x + 6, which collects to x² + 5x + 6. Four products — one for each pairing of an outside term with an inside term; first, outer, inner, last, as a mnemonic to check all four. Notice the pattern: the middle coefficient 5 is the sum of the bracket numbers, the final term 6 their product. The area model in the figure shows why the pattern must hold — one rectangle, sliced four ways, is the whole computation in a picture.',
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
        text: 'Factorising rewrites a sum as a product — expansion reversed. It matters because products have a property sums lack: a product is zero the moment any factor is zero, the hinge the quadratics lesson will swing. The order of attack is fixed. First, take out the highest common factor. In 6x² + 9x both terms carry x, and 6 and 9 share 3, so 6x² + 9x = 3x(2x + 3) — verified instantly by expanding back. This generalises the highest-common-factor reasoning of the number-system lesson, where the HCF of two whole numbers comes from prime factors; here the idea runs over letters too. Make it the first move even when a fancier pattern waits: 4x² − 100 = 4(x² − 25) = 4(x − 5)(x + 5) needs both, in that order.',
      },
      {
        kind: 'para',
        text: 'Second, recognise the named patterns. The difference of squares: a² − b² = (a − b)(a + b) — expand the right side and the middle terms cancel like a film run forwards and backwards. So x² − 49 = (x − 7)(x + 7) and 9x² − 25 = (3x − 5)(3x + 5). The perfect square runs the derivation above in reverse: a² + 6a + 9 = (a + 3)². The warning cuts both ways: a difference of squares always factorises; a sum of squares a² + b² does not — no rearrangement of signs will ever do it.',
      },
      {
        kind: 'formula',
        name: 'Difference of squares',
        latex: 'a^2 - b^2 = (a - b)(a + b)',
        meaning: 'The middle terms cancel on expansion. A sum of squares has no factorisation over the ordinary numbers — only the difference does.',
      },
      {
        kind: 'para',
        text: 'Third, for expressions of the shape x² + bx + c, hunt a pair of numbers whose product is c and whose sum is b. In x² − x − 12 the pair is −4 and 3: (−4) × 3 = −12, −4 + 3 = −1, so x² − x − 12 = (x − 4)(x + 3). The trick works because (x + m)(x + n) = x² + (m + n)x + mn — m and n must reproduce b and c. Expanding back takes ten seconds and proves the factorisation: make the check automatic, because a wrong factorisation silently poisons every equation solved with it later.',
      },
      { kind: 'heading', text: 'Rearranging formulae: solving with a letter as the target' },
      {
        kind: 'para',
        text: 'A formula relates several quantities, and rearranging it means making a chosen letter — the subject — stand alone. The method is equation-solving with a different target: undo, in reverse order, the operations applied to the subject, performing each undoing on both sides so the balance survives. From v = u + at: the recipe that built the subject read multiply a by t, then add u; reversed — subtract u, then divide by a — it lands on t = (v − u)/a. The last operation applied is always the first undone: dividing by a before subtracting u would tangle u with a.',
      },
      {
        kind: 'para',
        text: 'When the target letter appears in more than one term, collect those terms first and factor the letter out — the distributive law in the extracting direction. From ax − bx = c: x appears twice, so read the left side as x(a − b) and only then divide, giving x = c/(a − b). Two disciplines govern every rearrangement: whatever is done to one side is done to the other — an equation is a balance, not a conveyor belt for symbols — and the result is verified by substituting convenient numbers into both the original and the rearranged formula; if they disagree, the rearrangement is wrong no matter how plausible it looked.',
      },
      { kind: 'heading', text: 'Identities versus equations: two different contracts' },
      {
        kind: 'para',
        text: 'An equation is a claim true for particular values: 2x = 10 holds only at x = 5, and solving is the search for those values. An identity is a claim true for every value: 2(x + 3) = 2x + 6 whatever x is, and (a − b)(a + b) = a² − b² whatever a and b are. Identities are the patterns of this lesson stated as permanent facts, often marked with the triple bar ≡. Robert Recorde introduced the equals sign in his 1557 book The Whetstone of Witte, choosing a pair of parallel lines because no two things could be more equal; the identity sign is his symbol under the strictest reading. The distinction changes how you answer: an equation you solve; an identity you verify — expand or factorise one side into the other, never solve. A question phrased “show that …” is an identity question, and answering it with a particular value of x is a category error.',
      },
      { kind: 'heading', text: 'Three worked examples' },
      {
        kind: 'example',
        title: 'One expression, all four commands',
        steps: [
          'Identify what is asked: simplify 3x(2x − 5) − 2x(x − 4) + 7x fully.',
          'Expand with the distributive law, signs attached: 3x × 2x = 6x², 3x × (−5) = −15x, −2x × x = −2x², −2x × (−4) = +8x. The expression becomes 6x² − 15x − 2x² + 8x + 7x.',
          'Collect like terms: the x² family holds (6 − 2)x² = 4x²; the x family holds −15 + 8 + 7 = 0, so the x-terms cancel completely.',
          'State the result: the expression simplifies to 4x² — and the vanishing middle is a signal to look for structure: 4x² = (2x)².',
          'Reuse the shapes in a rearrangement: from y = 4x² − k, undo in reverse order — add k, divide by 4, square-root — giving x = ±√((y + k)/4), both roots kept.',
        ],
      },
      {
        kind: 'example',
        title: 'Factorise completely: x⁴ − 16',
        steps: [
          'Identify what is asked: rewrite x⁴ − 16 as a product that cannot be broken further.',
          'First move — highest common factor: x⁴ and 16 share nothing beyond 1, so go straight to the named patterns.',
          'Recognise the difference of squares: x⁴ = (x²)² and 16 = 4², so x⁴ − 16 = (x² − 4)(x² + 4).',
          'Keep going: the first factor is itself a difference of squares, x² − 4 = (x − 2)(x + 2). The second, x² + 4, is a sum of squares and stops there.',
          'State the result: x⁴ − 16 = (x − 2)(x + 2)(x² + 4). Verify by expanding back in pairs: (x − 2)(x + 2) = x² − 4, then (x² − 4)(x² + 4) = x⁴ − 16. Stopping a stage early is half an answer — factorise until nothing factors.',
        ],
      },
      {
        kind: 'example',
        title: 'A tank formula, rearranged and used',
        steps: [
          'Identify what is asked: the total surface of a closed cylindrical tank of radius r and height h is S = 2πr² + 2πrh; make h the subject, then find h when S = 1,848 cm² and r = 14 cm, taking π = 22/7.',
          'Concept: h is multiplied by 2πr after the term 2πr² was added — the last operation applied is the addition, so undo it first: S − 2πr² = 2πrh.',
          'Divide both sides by 2πr (r must be non-zero, which a tank radius always is): h = (S − 2πr²)/(2πr).',
          'Substitute: 2πr² = 2 × (22/7) × 14 × 14 = 2 × 22 × 2 × 14 = 1,232, so the numerator is 1,848 − 1,232 = 616. The denominator is 2 × (22/7) × 14 = 88.',
          'Calculate: h = 616/88 = 7.',
          'State the result: h = 7 cm — a tank 28 cm across and 7 cm tall, whose ends contribute 1,232 cm² and curved side 616 cm², summing to 1,848: the check that certifies the rearrangement.',
        ],
      },
      {
        kind: 'callout',
        title: 'Where the grammar pays',
        text: 'Every formula-driven subject rearranges exactly this way — t = (v − u)/a above is kinematics doing algebra. Code and spreadsheets follow the same order of operations and distributive law. The quantity-comparison lessons open their decision ladder with the rung “combine like terms” — this lesson’s first command under time pressure — and the mental-arithmetic lesson’s tricks are these three laws run on numbers.',
        tone: 'insight',
      },
      {
        kind: 'callout',
        title: 'Common pitfalls',
        text: 'Dropping a minus while collecting or expanding — signs travel attached to their terms. Multiplying only the first inside term: the law hits everything inside, and a minus in front of a bracket flips every sign within. Announcing (a + b)² = a² + b² — the most-exploited error in the subject. Skipping the highest-common-factor check, and stopping a factorisation one stage early. Treating 3x² as (3x)² — the power binds only the letter. Sliding symbols across without operating on both sides. And solving when the question says “show that”: identities are verified, never solved.',
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
            q: 'In 5x³ − 2x + 8, what are the coefficient of x and the degree of the expression?',
            options: [
              'coefficient −2; degree 3',
              'coefficient 2; degree 3',
              'coefficient −2; degree 8',
              'coefficient 5; degree 3',
            ],
            answer: 0,
            explain: 'The x-term is −2x: coefficient −2, sign included. Term degrees are 3, 1 and 0; the expression takes the highest, 3. Option D quotes the leading coefficient of 5x³ instead of the asked x-term.',
          },
          {
            q: 'Which expression equals (2x + 3)²?',
            options: ['4x² + 12x + 9', '4x² + 9', '4x² + 6x + 9', '2x² + 12x + 9'],
            answer: 0,
            explain: 'Apply (a + b)² = a² + 2ab + b² with a = 2x, b = 3: middle term 2 × 2x × 3 = 12x. Option B forgets the middle; option C halves it; option D fails to square the coefficient.',
          },
          {
            q: 'Factorise 4x² − 25.',
            options: ['(2x − 5)(2x + 5)', '(4x − 5)(x + 5)', '(2x − 5)²', 'not factorable'],
            answer: 0,
            explain: '4x² = (2x)² and 25 = 5²: difference of squares with a = 2x, b = 5. Option C is the perfect square — it expands to 4x² − 20x + 25; option B does not multiply back.',
          },
          {
            q: 'Factorise x² − x − 12.',
            options: ['(x − 4)(x + 3)', '(x + 4)(x − 3)', '(x − 6)(x + 2)', '(x − 12)(x + 1)'],
            answer: 0,
            explain: 'The pair must multiply to −12 and add to −1: −4 and 3. Every wrong option has the right product but the wrong sum — (x + 4)(x − 3) would give a middle term of +x.',
          },
          {
            q: 'Rearrange p = 2(a + b) to make b the subject.',
            options: ['b = p − 2a', 'b = (p − 2a)/2', 'b = p/(2a)', 'b = 2(p − a)'],
            answer: 1,
            explain: 'Divide by 2 first: a + b = p/2; then subtract a: b = p/2 − a = (p − 2a)/2. Option A skips the division — the 2 multiplies both a and b, so undoing must touch both.',
          },
          {
            q: 'Which statement is an identity rather than an equation?',
            options: ['3x + 1 = 10', 'x² = 16', '(x + 1)² = x² + 2x + 1', '2x − 4 = 0'],
            answer: 2,
            explain: 'It holds for every x — an expansion pattern stated as a permanent fact, the strict contract the ≡ sign flags. The others hold only for particular values and are solved for them.',
          },
          {
            q: 'Making x the subject of ax − bx = c gives:',
            options: ['x = c/(a − b)', 'x = c − a − b', 'x = c/(a + b)', 'x = c − (a − b)'],
            answer: 0,
            explain: 'The letter appears twice: collect first, x(a − b) = c, then divide by (a − b). Option B subtracts the letters as if they were numbers; option C ignores the minus between the terms.',
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
      'Standard form ax\u00b2 + bx + c = 0',
      'Solving by factorising',
      'The square-root property',
      'Completing the square: the recipe and why it works',
      'The quadratic formula and its four-step use',
      'The discriminant and the number of solutions',
      'Choosing the fastest method',
      'Vertex form and applications',
    ],
    words: 1471,
    readMins: 7,
    addedOn: '2026-10-24',
    blocks: [
      { kind: 'heading', text: 'Why this matters' },
      {
        kind: 'para',
        text: 'Quadratic equations are the boundary between school arithmetic and real algebra: the first equation type whose solutions are not obvious, and the template for every higher-degree technique that follows. Projectile heights, areas, revenue curves — when one quantity is the square of another plus a linear term, a quadratic models it. The examinable skill set is compact and fixed: put the equation in standard form, choose among four solving methods, read the discriminant to know how many solutions exist, and switch to vertex form when the question asks for a maximum or minimum. This lesson covers all four moves and the decision rule between them.',
      },
      { kind: 'heading', text: 'Standard form and the first two methods' },
      {
        kind: 'para',
        text: 'Standard form is ax\u00b2 + bx + c = 0 with a \u2260 0 — everything moved to one side, zero on the other. Every method begins here, and most lost marks on quadratics are lost before any solving: a sign dropped while moving terms poisons everything downstream. Rearrange first, identify a, b and c, then solve.',
      },
      {
        kind: 'para',
        text: 'Method one, factorising, uses the algebra lesson\u2019s machinery: x\u00b2 \u2212 x \u2212 12 = 0 factorises to (x \u2212 4)(x + 3) = 0, and a product is zero only when a factor is zero — so x = 4 or x = \u22123. Fast and clean when the factor pair is friendly. Method two, the square-root property, handles the missing-middle-term shape: x\u00b2 = k gives x = \u00b1\u221ak (both roots!), and a(x \u2212 h)\u00b2 = k gives x = h \u00b1 \u221a(k/a). The habit to keep: a square root always carries a plus-or-minus — forgetting the negative root is the single most common answer-killing slip on this method.',
      },
      { kind: 'heading', text: 'Completing the square: the recipe and the reason' },
      {
        kind: 'para',
        text: 'Completing the square rewrites any quadratic so the x appears exactly once, squared: x\u00b2 + bx + c = (x + b/2)\u00b2 + (c \u2212 b\u00b2/4). The recipe, when the leading coefficient is 1: take half of b, square it, add and subtract that square, then regroup. For x\u00b2 + 6x + 2 = 0: half of 6 is 3, squared is 9, so x\u00b2 + 6x + 2 = (x + 3)\u00b2 \u2212 9 + 2 = (x + 3)\u00b2 \u2212 7; setting this to zero gives (x + 3)\u00b2 = 7 and x = \u22123 \u00b1 \u221a7. When the leading coefficient is not 1, divide the whole equation by a first — OpenStax\u2019s Intermediate Algebra makes the same point: completing the square requires a = 1, so make it so.',
      },
      {
        kind: 'para',
        text: 'Why the maneuver works: (x + b/2)\u00b2 expands to x\u00b2 + bx + b\u00b2/4 — the square of half of b is exactly the constant that completes x\u00b2 + bx into a perfect square. Adding and subtracting b\u00b2/4 changes nothing while creating that square. Beyond solving, the form pays twice: (x \u2212 h)\u00b2 + k is the vertex form of the parabola, handing over the turning point (h, k) directly, and it is the launchpad from which the quadratic formula is derived.',
      },
      { kind: 'heading', text: 'The quadratic formula and the discriminant' },
      {
        kind: 'para',
        text: 'Method four works on every quadratic: x = (\u2212b \u00b1 \u221a(b\u00b2 \u2212 4ac))/(2a). OpenStax drills a four-step procedure: write the equation in standard form and identify a, b, c; write the formula; substitute; simplify — and then CHECK the solutions by substitution. Worked example from the same text: 2x\u00b2 + 9x \u2212 5 = 0 has a = 2, b = 9, c = \u22125, giving x = (\u22129 \u00b1 \u221a(81 + 40))/4 = (\u22129 \u00b1 11)/4, so x = 1/2 or x = \u22125. The formula is an equation — start every line with x =, and keep the whole numerator over the whole denominator.',
      },
      {
        kind: 'para',
        text: 'The discriminant b\u00b2 \u2212 4ac counts the solutions before any arithmetic: positive — two distinct real roots; zero — exactly one (a repeated root; the parabola touches the axis); negative — no real roots (two complex ones). So b\u00b2 \u2212 4ac = 9 \u2212 4(1)(\u22124) style questions are answered by inspection after computing one number. The method-choice strategy rounds out the toolkit, in OpenStax\u2019s order: try factorising first if the factors are easy; use the square-root property if the shape fits; otherwise the quadratic formula — and completing the square is the method you fall back on when you must SHOW the vertex or the derivation. Applications tie it together: projectile height h = \u221216t\u00b2 + v\u2080t questions ask \u201cwhen is h = 0?\u201d (solve) or \u201cwhat is the maximum height?\u201d (vertex form, or \u2212b/2a for the time).',
      },
      {
        kind: 'example',
        title: 'Worked Example — One equation, method decision live',
        steps: [
          'Solve 2x\u00b2 \u2212 4x \u2212 3 = 0. Standard form already; a = 2, b = \u22124, c = \u22123.',
          'Method check: factorising — factors of 2 \u00d7 (\u22123) summing to \u22124? \u22126 and 2 give \u22124, but 2x\u00b2 + 2x \u2212 6x \u2212 3 resists clean grouping (2x(x+1) \u2212 3(2x+1)) — not friendly. Square-root property: no isolated square. So: quadratic formula.',
          'Formula: x = (4 \u00b1 \u221a(16 + 24))/4 = (4 \u00b1 \u221a40)/4 = (4 \u00b1 2\u221a10)/4 = (2 \u00b1 \u221a10)/2.',
          'Discriminant read: b\u00b2 \u2212 4ac = 16 + 24 = 40 > 0 — two distinct real roots, as found. (If it had been 0, the equation would collapse to one root; negative, none.)',
          'Vertex bonus: x = \u2212b/2a = 4/4 = 1; f(1) = 2 \u2212 4 \u2212 3 = \u22125. Vertex (1, \u22125) — the minimum, since a > 0. The same numbers, read two ways.',
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Solve x\u00b2 = 49.',
            options: ['x = 7', 'x = \u00b17', 'x = \u00b124.5', 'x = 7 or x = 0'],
            answer: 1,
            explain: 'Square-root property: x = \u00b1\u221a49 = \u00b17. Every square root in solving carries both signs — the negative root is the classic dropped solution.',
          },
          {
            q: 'What number completes the square for x\u00b2 + 10x + 3?',
            options: [
              'add and subtract 100',
              'add and subtract 25',
              'add and subtract 10',
              'add and subtract 5',
            ],
            answer: 1,
            explain: 'Half of b = 5; squared = 25. x\u00b2 + 10x + 25 = (x + 5)\u00b2, so the expression becomes (x + 5)\u00b2 \u2212 22.',
          },
          {
            q: 'For 3x\u00b2 + 2x + 5 = 0, the discriminant is',
            options: ['4 \u2212 60 = \u221256: no real solutions', '4 + 60 = 64: two solutions', '9 \u2212 20 = \u221211: no real solutions', '0: one solution'],
            answer: 0,
            explain: 'b\u00b2 \u2212 4ac = 2\u00b2 \u2212 4(3)(5) = 4 \u2212 60 = \u221256. Negative discriminant means the parabola never meets the x-axis — no real roots.',
          },
          {
            q: 'According to the standard method-choice strategy, which equation is best solved by the square-root property?',
            options: [
              'x\u00b2 + 5x + 6 = 0',
              '(x \u2212 3)\u00b2 = 12',
              '2x\u00b2 + 9x \u2212 5 = 0',
              'x\u00b4 \u2212 5x\u00b2 + 6 = 0',
            ],
            answer: 1,
            explain: 'The shape (x \u2212 h)\u00b2 = k is the square-root property\u2019s home turf: x \u2212 3 = \u00b1\u221a12 directly. The others suit factorising or the formula.',
          },
          {
            q: 'A ball\u2019s height is h = \u221216t\u00b2 + 40t. What is its maximum height?',
            options: [
              'solve \u221216t\u00b2 + 40t = 0',
              'vertex: t = \u221240/(2\u00d7(\u221216)) = 1.25, h(1.25) = 25',
              'discriminant: 1600, so height 40',
              'factorise: 8t(5 \u2212 2t), maximum 5',
            ],
            answer: 1,
            explain: 'Maxima need the vertex, not the roots: t = \u2212b/2a = 1.25 s, h(1.25) = \u221216(1.5625) + 50 = 25. Solving h = 0 finds landing time, not peak.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Solving before reaching standard form — always gather to ax\u00b2 + bx + c = 0 first. Dropping the \u00b1 on square roots, in the square-root property and the formula alike. Halving b twice or forgetting to divide by a before completing the square when a \u2260 1. Writing the formula with only part of the numerator over 2a — the whole of \u2212b \u00b1 \u221a(b\u00b2 \u2212 4ac) sits over 2a. Announcing one solution when the discriminant is negative and \u201cno real solutions\u201d was meant — complex roots still exist. Answering maximum-height questions with roots instead of the vertex. And skipping the check — substitution catches sign slips the algebra hid.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: the algebraic-notation-and-manipulation lesson — factorising and rearranging are this lesson\u2019s first and third methods. Follow with function-graphing topics (the parabola as a function\u2019s picture) and, later, the derivative lesson, whose critical points generalize the vertex. Primary reading: OpenStax, Intermediate Algebra 2e \u00a79.2 \u201cSolve Quadratic Equations by Completing the Square\u201d and \u00a79.3 \u201cSolve Quadratic Equations Using the Quadratic Formula\u201d, with \u00a79.5\u2019s projectile applications (openstax.org, CC BY-NC-SA).',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Standard form first: ax\u00b2 + bx + c = 0, a \u2260 0; identify a, b, c.',
        'Factorise when friendly; square-root property when a square stands alone — both roots.',
        'Complete the square: half of b, squared, added and subtracted; divide by a first if needed.',
        'Formula: x = (\u2212b \u00b1 \u221a(b\u00b2 \u2212 4ac))/2a — four steps, then check.',
        'Discriminant trichotomy: positive two, zero one, negative none.',
        'Vertex from \u2212b/2a: maxima and minima live there, not at the roots.',
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
