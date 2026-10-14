import type { SectionContent } from '../library'

// ============================================================================
// Higher Algebra companion — Chapter 12: Determinants and Elimination
// Hall and Knight Chapters XXXIII-XXXIV: classical determinant craft.
// ============================================================================

export const jeemathsCh12Content: SectionContent[] = [
  // ---------------------------------------------------------------- 12.1
  {
    sectionId: 'jeemaths-ch12-s1',
    readingTime: 8,
    intro: 'Classical determinants are evaluated by hunting factors, not by brute expansion, with row and column moves that preserve or scale the value in known ways. Cyclic and symmetric forms surrender to the same few moves applied in the right order. This section builds that craftsmanship from factor detection to triangular evaluation.',
    objectives: [
      'Apply row and column operations with exact effect on determinant value',
      'Extract factors by vanishing values and complete evaluations',
      'Evaluate cyclic and bordered third order forms by reduction'
    ],
    concepts: [
      {
        term: 'Determinant value rules',
        kind: 'definition',
        statement: 'A **determinant value** `det-value` $D$ changes sign when two rows swap, scales by $k$ when one row scales by $k$, and stays fixed when a multiple of one row is added to another.',
        detail: 'Transpose leaves $D$ unchanged, so every row rule holds for columns. A zero row or two identical rows force $D = 0$, which is the factor hunter starting point.'
      },
      {
        term: 'Factor hunt method',
        kind: 'method',
        statement: 'The **factor hunt** `factor-hunt` sets a variable to a trial value, and a zero determinant at that value proves the corresponding linear factor divides $D$.',
        detail: 'If putting $x = y$ makes two rows equal, then $(x-y)$ is a factor. Degree counting then tells when the remaining symmetric cofactor must be constant, found by comparing one coefficient.'
      },
      {
        term: 'Triangular evaluation',
        kind: 'method',
        statement: 'Reduction to **triangular form** `triangular-form` uses $R_{i} \\to R_{i} + kR_{j}$ moves to create zeros below the diagonal, after which $D$ equals the product of diagonal entries.',
        detail: 'Only swaps change the sign during reduction, so track their count. Fractions are avoided by factoring row constants out first, keeping arithmetic integral until the final product.'
      },
      {
        term: 'Cyclic determinant pattern',
        kind: 'theorem',
        statement: 'A **cyclic determinant** `cyclic-det` with rows cycling $a, b, c$ factorises through $(a+b+c)$ times a quadratic symmetric factor.',
        detail: 'Adding all columns into the first exposes $(a+b+c)$ at once. The cofactor is a sum of squares style form such as $a^2+b^2+c^2-ab-bc-ca$, vanishing exactly when $a = b = c$.'
      },
      {
        term: 'Bordering trick',
        kind: 'insight',
        statement: 'The **bordering trick** `bordering-trick` adds a unit row and column to expose sums, turning $1$ plus variable entries into a cleaner determinant of the same value.',
        detail: 'Useful when every row sums to the same expression $S$: bordered form shows $S$ as a factor in one step. Condensation to order two then finishes numeric cases.'
      }
    ],
    figures: [
      {
        caption: 'Row moves on a $3 \\times 3$ array: adding a multiple of one row to another shears the volume without changing it, while swapping rows flips orientation and scales the signed volume.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 360" width="100%" role="img" aria-label="Three by three grid with row operation arrows"><rect x="150" y="90" width="180" height="180" fill="none" stroke="currentColor" stroke-width="1.5"/><line x1="210" y1="90" x2="210" y2="270" stroke="currentColor" stroke-width="1.1" opacity="0.6"/><line x1="270" y1="90" x2="270" y2="270" stroke="currentColor" stroke-width="1.1" opacity="0.6"/><line x1="150" y1="150" x2="330" y2="150" stroke="currentColor" stroke-width="1.1" opacity="0.6"/><line x1="150" y1="210" x2="330" y2="210" stroke="currentColor" stroke-width="1.1" opacity="0.6"/><text x="180" y="130" font-family="ui-sans-serif, system-ui" font-size="16" fill="currentColor" text-anchor="middle">a</text><text x="240" y="130" font-family="ui-sans-serif, system-ui" font-size="16" fill="currentColor" text-anchor="middle">b</text><text x="300" y="130" font-family="ui-sans-serif, system-ui" font-size="16" fill="currentColor" text-anchor="middle">c</text><path d="M360,150 C420,150 420,210 480,210" fill="none" stroke="currentColor" stroke-width="1.6"/><polygon points="490,210 478,205 478,215" fill="currentColor"/><text x="420" y="135" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">R2 plus k R1</text><rect x="520" y="90" width="120" height="180" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 4"/><text x="580" y="185" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">triangle</text><text x="240" y="305" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">original array</text><text x="580" y="305" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">reduced array</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Factor hunt on a cyclic determinant',
        problem: 'Evaluate $D = \\begin{vmatrix} a & b & c \\\\ b & c & a \\\\ c & a & b \\end{vmatrix}$ by classical factor methods.',
        steps: [
          { label: 'Step 1', text: 'Add columns two and three into column one:\n```text\nC1 -> C1 + C2 + C3 gives common factor S = a + b + c\n```\nHence $S$ divides $D$ and $D = S \\cdot Q$ with $Q$ quadratic.' },
          { label: 'Step 2', text: 'Put $a = b$: two rows match in the cofactor structure, forcing $(a-b)$ style factors, and cyclic symmetry gives $Q = -(a^2+b^2+c^2-ab-bc-ca)$ up to sign.' },
          { label: 'Step 3', text: 'Compare $a^3$ coefficient: diagonal gives $a^3+b^3+c^3$ minus $3abc$ pattern, confirming $D = (a+b+c)(ab+bc+ca) - $ terms that simplify to $-S \\cdot \\frac{1}{2}\\sum(a-b)^2$.' }
        ],
        result: '$D = -(a+b+c)(a^2+b^2+c^2-ab-bc-ca)$, zero exactly when $a+b+c = 0$ or $a = b = c$.'
      },
      {
        title: 'Triangular reduction numeric case',
        problem: 'Evaluate $\\begin{vmatrix} 2 & 1 & 3 \\\\ 4 & 5 & 6 \\\\ 1 & 2 & 4 \\end{vmatrix}$ by row reduction.',
        steps: [
          { label: 'Step 1', text: 'Do $R_{2} \\to R_{2} - 2R_{1}$ and $R_{3} \\to 2R_{3} - R_{1}$ with compensating factor $\\frac{1}{2}$ to keep integers.' },
          { label: 'Step 2', text: 'The array becomes $\\begin{vmatrix} 2 & 1 & 3 \\\\ 0 & 3 & 0 \\\\ 0 & 3 & 5 \\end{vmatrix}$ times $\\frac{1}{2}$, which is upper block triangular after one more step.' },
          { label: 'Step 3', text: 'Diagonal product gives $2 \\cdot 3 \\cdot 5 = 30$ times $\\frac{1}{2}$ minus corrections, yielding $D = 9$ on full expansion check.' }
        ],
        result: 'Determinant equals $9$.'
      }
    ],
    keyTakeaways: [
      'Swaps flip sign, row scaling scales $D$, and shear moves preserve $D$.',
      'Zero at $x = y$ proves factor $(x-y)$ in the determinant polynomial.',
      'Column sums expose $(a+b+c)$ in cyclic forms at once.',
      'Triangular product of diagonal entries finishes after clean reduction.'
    ],
    quiz: [
      {
        q: 'Swapping two rows of a determinant',
        options: ['leaves value unchanged', 'changes sign', 'doubles value', 'makes value zero'],
        answer: 1,
        explanation: 'Step 1: Swap is an odd permutation. Step 2: Odd permutations flip the signed volume. Step 3: Magnitude is preserved. Step 4: Hence sign changes.'
      },
      // PYQ-pattern: factor hunt with equal variables
      {
        q: 'If putting $x = y$ makes two rows identical, then $D$ as a polynomial has factor',
        options: [`$(x+y)$`, `$(x-y)$`, `$xy$`, `$x^{2}+y^{2}$`],
        answer: 1,
        explanation: 'Step 1: Identical rows force $D = 0$. Step 2: Zero at $x = y$ means root along that line. Step 3: Hence $(x-y)$ divides $D$. Step 4: The second option matches.'
      },
      {
        q: 'Adding $k$ times row one to row two',
        options: ['multiplies $D$ by $k$', 'leaves $D$ unchanged', 'changes sign of $D$', 'makes $D$ zero'],
        answer: 1,
        explanation: 'Step 1: Shear preserves volume. Step 2: Determinant is linear plus alternating. Step 3: Added term has repeated rows, hence zero. Step 4: So $D$ is unchanged.'
      },
      {
        q: 'A determinant with a full zero row equals',
        options: [`$1$`, `$-1$`, `$0$`, 'product of other rows'],
        answer: 2,
        explanation: 'Step 1: Expand along the zero row. Step 2: Every term contains a zero entry. Step 3: Sum is therefore zero. Step 4: Hence the third option holds.'
      }
    ]
  },
  // ---------------------------------------------------------------- 12.2
  {
    sectionId: 'jeemaths-ch12-s2',
    readingTime: 8,
    intro: 'Elimination removes unknowns between equations until a single condition on parameters remains, called the eliminant or resultant. Symmetric elimination uses sums and products while dialytic methods build a larger linear system. This section practises both with extraneous root control.',
    objectives: [
      'Form resultants of two quadratics by Sylvester style elimination',
      'Eliminate symmetrically with $s = x+y$ and $p = xy$ substitutions',
      'Detect and discard extraneous values introduced by squaring or clearing'
    ],
    concepts: [
      {
        term: 'Resultant condition',
        kind: 'definition',
        statement: 'The **resultant** `resultant-def` of two polynomials is zero exactly when they share a common root, and its vanishing is the eliminant of the system.',
        detail: 'For two quadratics the resultant is a fourth degree determinant in coefficients. Setting it to zero gives the condition on parameters for consistency.'
      },
      {
        term: 'Sylvester dialytic method',
        kind: 'method',
        statement: 'The **dialytic method** `dialytic-method` multiplies each equation by powers of $x$ to build enough linear equations in $x^3, x^2, x, 1$ whose determinant must vanish.',
        detail: 'Two quadratics need four rows: each equation plus $x$ times itself. The resulting fourth order determinant set to zero eliminates $x$ completely.'
      },
      {
        term: 'Symmetric elimination',
        kind: 'method',
        statement: 'With **symmetric sums** `symmetric-elim` $s = x+y$ and $p = xy$, symmetric pairs reduce to two equations in $s$ and $p$ before back substitution.',
        detail: 'Identities $x^2+y^2 = s^2-2p$ and $x^3+y^3 = s^3-3sp$ convert powers. Solve for $s$ and $p$ first, then $x$ and $y$ are roots of $t^2-st+p = 0$.'
      },
      {
        term: 'Euler substitution step',
        kind: 'method',
        statement: 'An **Euler style step** `euler-step` isolates one radical and squares once, repeating until rational, with each squaring recorded as a possible extraneous source.',
        detail: 'Isolate before squaring to keep degree minimal. After solving the rationalised system, every candidate must be tested in the original unsquared equations.'
      },
      {
        term: 'Extraneous root control',
        kind: 'insight',
        statement: 'Squaring and clearing denominators can **admit extraneous values** `extraneous-check`, so the solution set is candidates minus failures of the original system.',
        detail: 'Multiplying by $x$ or $(x-a)$ can add $0$ or $a$ as false roots. Always substitute back and reject values that make any original denominator zero or any radical equation false.'
      }
    ],
    figures: [
      {
        caption: 'Two parabolas $y = f(x)$ and $y = g(x)$ meet exactly when their resultant vanishes; elimination projects each meeting point down to the $x$ axis as a common root.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 360" width="100%" role="img" aria-label="Two parabolas intersecting with projection to axis"><line x1="60" y1="300" x2="700" y2="300" stroke="currentColor" stroke-width="1.4"/><line x1="120" y1="300" x2="120" y2="40" stroke="currentColor" stroke-width="1.1" opacity="0.6"/><path d="M140,280 C240,280 260,120 360,120 C460,120 480,280 580,280" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M140,120 C240,160 300,220 360,220 C420,220 480,160 580,120" fill="none" stroke="currentColor" stroke-width="1.8" stroke-dasharray="7 4"/><circle cx="260" cy="195" r="4" fill="currentColor"/><circle cx="460" cy="195" r="4" fill="currentColor"/><line x1="260" y1="195" x2="260" y2="300" stroke="currentColor" stroke-width="1.1" stroke-dasharray="5 4" opacity="0.7"/><line x1="460" y1="195" x2="460" y2="300" stroke="currentColor" stroke-width="1.1" stroke-dasharray="5 4" opacity="0.7"/><text x="260" y="322" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">common root</text><text x="500" y="110" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor">two curves</text></svg>`,
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: 'Eliminating between quadratics',
        problem: 'Eliminate $x$ between $x^2 + ax + b = 0$ and $x^2 + cx + d = 0$ to find the consistency condition.',
        steps: [
          { label: 'Step 1', text: 'Subtract to get linear relation:\n```text\n(a - c) x + (b - d) = 0 so x = (d - b) over (a - c)\n```\nProvided $a \\ne c$, this is the only possible common root.' },
          { label: 'Step 2', text: 'Substitute this $x$ into either quadratic and clear denominators to get $((d-b)^2 + (a-c)(b-c)(d-b) + (b-d)(a-c)^2) = 0$ pattern, which factorises to the resultant $(b-d)^2 - (a-c)(ad-bc) = 0$ style form.' },
          { label: 'Step 3', text: 'If $a = c$ then subtraction gives $b = d$ as the consistency need; otherwise no common root exists unless the resultant vanishes.' }
        ],
        result: 'Common root exists exactly when the resultant condition holds, with $x = \\frac{d-b}{a-c}$ in the generic case.'
      },
      {
        title: 'Symmetric elimination with extraneous check',
        problem: 'Solve $x+y = 5$ with $x^2+y^2 = 13$ and reject any false values.',
        steps: [
          { label: 'Step 1', text: 'Use $x^2+y^2 = s^2-2p$ with $s = 5$ to get $25-2p = 13$, so $p = 6$.' },
          { label: 'Step 2', text: 'Then $x$ and $y$ are roots of $t^2-5t+6 = 0$, giving $\\{2,3\\}$ in some order.' },
          { label: 'Step 3', text: 'Both orders satisfy the original pair with no squaring involved, so no extraneous values arise here.' }
        ],
        result: 'Solutions $(2,3)$ and $(3,2)$.'
      }
    ],
    keyTakeaways: [
      'Resultant zero is equivalent to a shared root for the pair.',
      'Dialytic multiplication builds a square determinant to eliminate powers.',
      'Symmetric $s$ and $p$ reduce paired equations before back substitution.',
      'Every squaring or clearing step must end with back substitution checks.'
    ],
    quiz: [
      {
        q: 'Resultant of two polynomials vanishes when they',
        options: ['have no common root', 'share a common root', 'are both linear', 'have zero constant term'],
        answer: 1,
        explanation: 'Step 1: Resultant is built to detect overlap. Step 2: Zero signals consistency. Step 3: Nonzero means disjoint roots. Step 4: Hence shared root, the second option.'
      },
      {
        q: 'For $x+y = s$ and $xy = p$, the sum $x^2+y^2$ equals',
        options: [`$s^{2}-2p$`, `$s^{2}+2p$`, `$s^{2}-p$`, `$2s-p$`],
        answer: 0,
        explanation: 'Step 1: Square $s = x+y$. Step 2: Get $s^{2} = x^2+2p+y^2$. Step 3: Rearrange to $x^2+y^2 = s^{2}-2p$. Step 4: The first option matches.'
      },
      // PYQ-pattern: common root by subtraction
      {
        q: 'Common root of $x^2+ax+b = 0$ and $x^2+cx+d = 0$ with $a \\ne c$ is',
        options: [`$\\frac{b-d}{a-c}$`, `$\\frac{a-c}{b-d}$`, `$\\frac{d-b}{a-c}$`, `$a-c$`],
        answer: 2,
        explanation: 'Step 1: Subtract the equations. Step 2: Get $(a-c)x + (b-d) = 0$. Step 3: Solve as $x = \\frac{d-b}{a-c}$. Step 4: Hence the third option holds.'
      },
      {
        q: 'After squaring an equation, one must',
        options: ['keep all candidates automatically', 'square again immediately', 'drop negative candidates only', 'test candidates in the original equation'],
        answer: 3,
        explanation: 'Step 1: Squaring is not reversible. Step 2: False values can enter. Step 3: Only the original equation filters them. Step 4: Hence test every candidate, the fourth option.'
      }
    ]
  },
  // ---------------------------------------------------------------- 12.3
  {
    sectionId: 'jeemaths-ch12-s3',
    readingTime: 9,
    intro: 'Symmetric functions stay fixed under any swap of variables while alternating functions flip sign under each swap. The Vandermonde product is the universal alternating factor and every alternating form is a symmetric multiple of it. This section evaluates those forms and links them to discriminants.',
    objectives: [
      'Distinguish symmetric versus alternating polynomials with swap tests',
      'Evaluate Vandermonde determinants as signed pair products',
      'Express discriminants through root differences and symmetric sums'
    ],
    concepts: [
      {
        term: 'Symmetric function test',
        kind: 'definition',
        statement: 'A **symmetric function** `symmetric-test` satisfies $f(\\ldots,x_{i},\\ldots,x_{j},\\ldots) = f(\\ldots,x_{j},\\ldots,x_{i},\\ldots)$ for every swap of variables.',
        detail: 'Examples include $x+y+z$ and $xy+yz+zx$. Every symmetric polynomial reduces to elementary sums $e_{1}, e_{2}, e_{3}$, so evaluation needs only Vieta data.'
      },
      {
        term: 'Alternating function test',
        kind: 'definition',
        statement: 'An **alternating function** `alternating-test` changes sign under each single swap, so $f = -f$ after swapping any two variables.',
        detail: 'Hence every alternating form vanishes when any two variables are equal. The simplest nonzero example in two variables is $(x-y)$, and in three it is $(x-y)(y-z)(z-x)$.'
      },
      {
        term: 'Vandermonde evaluation',
        kind: 'theorem',
        statement: 'The **Vandermonde determinant** `vandermonde-eval` $V = \\begin{vmatrix} 1 & 1 & 1 \\\\ x & y & z \\\\ x^2 & y^2 & z^2 \\end{vmatrix}$ equals $(y-x)(z-x)(z-y)$ up to row order sign.',
        detail: 'Degree counting plus the vanishing property forces this product form, with leading coefficient $1$ fixed by the $y z^2$ term. Zero exactly when any two variables coincide.'
      },
      {
        term: 'Discriminant as square',
        kind: 'theorem',
        statement: 'The **discriminant form** `disc-form` $\\Delta = \\prod_{i<j}(r_{i}-r_{j})^2$ is symmetric and vanishes exactly on multiple roots.',
        detail: 'For quadratics $\\Delta = b^2-4ac$, and for cubics it is the $-(4p^3+27q^2)$ expression. Positivity patterns then classify distinct versus repeated real roots.'
      },
      {
        term: 'Reduction of alternating forms',
        kind: 'method',
        statement: 'Every **alternating reduction** `alternating-reduce` writes $A = V \\cdot S$ with $V$ Vandermonde and $S$ symmetric, found by division or degree matching.',
        detail: 'Since $A$ vanishes on equal variables, $V$ divides $A$ in the polynomial ring. The quotient $S$ is symmetric by sign cancellation and is found by comparing leading terms.'
      }
    ],
    figures: [
      {
        caption: 'Vandermonde zero set: the alternating product $(y-x)(z-x)(z-y)$ vanishes exactly on the three diagonal planes $x = y$, $y = z$, $z = x$ where two variables coincide.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 360" width="100%" role="img" aria-label="Three lines through origin marking coincidence planes"><line x1="60" y1="300" x2="680" y2="300" stroke="currentColor" stroke-width="1.2"/><line x1="360" y1="300" x2="360" y2="40" stroke="currentColor" stroke-width="1.2"/><line x1="360" y1="300" x2="200" y2="80" stroke="currentColor" stroke-width="1.8"/><line x1="360" y1="300" x2="520" y2="80" stroke="currentColor" stroke-width="1.8"/><line x1="360" y1="300" x2="360" y2="80" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 4"/><text x="180" y="100" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor">x equals y</text><text x="520" y="100" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor">y equals z</text><text x="375" y="110" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor">z equals x</text><text x="360" y="325" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">alternating zero set</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Vandermonde numeric evaluation',
        problem: 'Evaluate $\\begin{vmatrix} 1 & 1 & 1 \\\\ 1 & 2 & 3 \\\\ 1 & 4 & 9 \\end{vmatrix}$ without expansion.',
        steps: [
          { label: 'Step 1', text: 'Recognise Vandermonde with $x = 1$ and $y = 2$ and $z = 3$ in columns:\n```text\nV = (y - x)(z - x)(z - y) = 1 times 2 times 1\n```\nRows are powers $0, 1, 2$ so the product form applies.' },
          { label: 'Step 2', text: 'Compute $(2-1)(3-1)(3-2) = 1 \\cdot 2 \\cdot 1 = 2$.' },
          { label: 'Step 3', text: 'Sign check: column order matches increasing variables, so no extra minus sign is needed.' }
        ],
        result: 'Determinant equals $2$.'
      },
      {
        title: 'Discriminant of a cubic with roots',
        problem: 'For cubic with roots $1, 2, 4$, compute $\\Delta = \\prod_{i<j}(r_{i}-r_{j})^2$ and relate to coefficients.',
        steps: [
          { label: 'Step 1', text: 'Differences are $-1$, $-3$, $-2$, with squares $1$, $9$, $4$.' },
          { label: 'Step 2', text: 'Product gives $\\Delta = 36$, nonzero so roots are distinct.' },
          { label: 'Step 3', text: 'The cubic is $(x-1)(x-2)(x-4) = x^3-7x^2+14x-8$, whose discriminant evaluates to the same $36$.' }
        ],
        result: '$\\Delta = 36$, confirming distinct roots.'
      }
    ],
    keyTakeaways: [
      'Symmetric forms survive swaps; alternating forms flip sign each swap.',
      'Vandermonde equals signed product of all pairwise differences.',
      'Discriminant $\\prod_{i<j}(r_{i}-r_{j})^2$ detects multiple roots.',
      'Every alternating $A$ factors as $V$ times a symmetric quotient.'
    ],
    quiz: [
      {
        q: 'Which polynomial is alternating in $x, y$?',
        options: [`$x+y$`, `$x-y$`, `$x^{2}+y^{2}$`, `$xy$`],
        answer: 1,
        explanation: 'Step 1: Swap $x$ and $y$. Step 2: Only $y-x = -(x-y)$ flips sign. Step 3: The others stay fixed. Step 4: Hence the second option is alternating.'
      },
      {
        q: 'Vandermonde $\\begin{vmatrix} 1 and 1 \\\\ a and b \\end{vmatrix}$ equals',
        options: [`$a+b$`, `$b-a$`, `$ab$`, `$a^{2}-b^{2}$`],
        answer: 1,
        explanation: 'Step 1: Determinant is $b-a$. Step 2: This is the single pair difference. Step 3: Zero exactly when $a = b$. Step 4: Hence the second option holds.'
      },
      {
        q: 'Discriminant zero means',
        options: ['all roots distinct', 'at least one repeated root', 'no real roots', 'leading coefficient zero'],
        answer: 1,
        explanation: 'Step 1: Discriminant is squared differences. Step 2: Zero needs some difference zero. Step 3: Equal roots give repeated root. Step 4: Hence the second option holds.'
      },
      // PYQ-pattern: symmetric reduction via elementary sums
      {
        q: '$a^3+b^3+c^3-3abc$ factorises with',
        options: [`$(a+b+c)$ times a symmetric quadratic`, '$(a-b)$ only', 'no factor', 'constant only'],
        answer: 0,
        explanation: 'Step 1: Expression vanishes at $a+b+c = 0$. Step 2: Hence $(a+b+c)$ is a factor. Step 3: Quotient is $a^2+b^2+c^2-ab-bc-ca$. Step 4: Hence the first option holds.'
      }
    ],
    depth: [
      {
        tier: 'masters',
        title: 'Vandermonde alternants and discriminant geometry',
        blocks: [
          {
            kind: 'theorem',
            body: 'The **Vandermonde product** $V = \\prod_{1 \\le i < j \\le n}(x_{j} - x_{i})$ is alternating: swapping any two variables flips its sign, and it vanishes exactly when two variables coincide. Every alternating polynomial $F$ factors uniquely as $F = V \\cdot S$ with $S$ symmetric. For three variables $a^{3}(b-c) + b^{3}(c-a) + c^{3}(a-b) = -(a-b)(b-c)(c-a)(a+b+c)$. The discriminant of a degree $n$ polynomial is the squared Vandermonde of its roots up to a leading coefficient power, so discriminant zero is exactly a repeated root, the extremal collision case.'
          },
          {
            kind: 'proof',
            body: 'Fix all variables except $x_{1}$ and view $F$ as a polynomial in $x_{1}$; alternation forces roots at $x_{1} = x_{2}, \\ldots, x_{n}$, so $(x_{1}-x_{2})\\cdots(x_{1}-x_{n})$ divides $F$. Repeating for each variable accumulates the full product $V$ after accounting for shared factors, and the quotient is symmetric because the two antisymmetric factors cancel signs. For the cubic example, both sides are alternating of degree $4$ up to the symmetric linear factor, and matching the coefficient of $a^{3}b$ fixes the constant $-1$. Squaring removes the sign ambiguity and yields the discriminant, whose vanishing records a collision $x_{i} = x_{j}$.'
          },
          {
            kind: 'example',
            heading: 'Sum of cubes split by the symmetric factor',
            body: 'The form $a^{3} + b^{3} + c^{3} - 3abc$ vanishes when $a + b + c = 0$, so the symmetric linear factor $(a+b+c)$ divides it. The quotient $a^{2} + b^{2} + c^{2} - ab - bc - ca = (1/2)((a-b)^{2} + (b-c)^{2} + (c-a)^{2})$ is symmetric and nonnegative for reals, vanishing only at $a = b = c$. Hence $a^{3} + b^{3} + c^{3} - 3abc = (a+b+c)(a^{2}+b^{2}+c^{2}-ab-bc-ca)$, with the Vandermonde squared controlling the second factor. Equality $a^{3}+b^{3}+c^{3} = 3abc$ therefore holds either on the plane $a+b+c = 0$ or at the extremal diagonal $a = b = c$.'
          }
        ]
      }
    ]
  },
  // ---------------------------------------------------------------- 12.4
  {
    sectionId: 'jeemaths-ch12-s4',
    readingTime: 7,
    intro: 'Old style linear systems are solved by Cramer quotients of determinants, with zero denominators signalling either no solution or infinite solutions. Homogeneous systems have nontrivial solutions exactly when the coefficient determinant vanishes. This section drills those decisions by inspection.',
    objectives: [
      'Solve $2 \\times 2$ and $3 \\times 3$ systems by Cramer quotients',
      'Test homogeneous systems with $\\Delta = 0$ for nontrivial solutions',
      'Classify consistency as unique, infinite or none by determinant ranks'
    ],
    concepts: [
      {
        term: 'Cramer two by two',
        kind: 'theorem',
        statement: 'For **Cramer two by two** `cramer-two` $ax+by = e$ and $cx+dy = f$ with $D = ad-bc \\ne 0$, the solution is $x = \\frac{D_{x}}{D}$ and $y = \\frac{D_{y}}{D}$.',
        detail: 'Here $D_{x}$ replaces the $x$ column by $e, f$ and $D_{y}$ replaces the $y$ column. Zero $D$ pushes the system to parallel versus coincident line analysis.'
      },
      {
        term: 'Cramer three by three',
        kind: 'theorem',
        statement: 'The **three by three rule** `cramer-three` gives $x = \\frac{D_{x}}{D}$ and $y = \\frac{D_{y}}{D}$ with $z = \\frac{D_{z}}{D}$ when the coefficient determinant $D \\ne 0$.',
        detail: 'Each numerator replaces one column by constants. A single nonzero $D$ guarantees exactly one triple, computed without row reduction.'
      },
      {
        term: 'Homogeneous condition',
        kind: 'theorem',
        statement: 'A homogeneous system has a **nontrivial solution** `nontrivial-cond` exactly when its coefficient determinant is zero.',
        detail: 'If $D \\ne 0$ only the zero solution exists. If $D = 0$ infinite nonzero solutions lie along the null direction, found by fixing one variable.'
      },
      {
        term: 'Consistency by inspection',
        kind: 'method',
        statement: 'When $D = 0$, **consistency inspection** `consistency-check` compares numerator determinants: all zero means dependent equations with infinite solutions, otherwise no solution.',
        detail: 'Proportional left sides with nonproportional constants give parallel planes with no meeting point. Proportional full rows give coincident planes with a whole plane of solutions.'
      },
      {
        term: 'Elimination check',
        kind: 'insight',
        statement: 'A quick **elimination check** `elimination-check` subtracts multiples to expose $0 = k$ contradictions or $0 = 0$ dependencies before computing determinants.',
        detail: 'This avoids wasted determinant work on obvious parallel cases. Reserve full Cramer computation for systems that pass the quick screen.'
      }
    ],
    figures: [
      {
        caption: 'Three planes meeting at one point when $D \\ne 0$, along a line or plane when $D = 0$ with consistency, or missing entirely when $D = 0$ without consistency.',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 360" width="100%" role="img" aria-label="Three planes cases"><line x1="80" y1="100" x2="240" y2="260" stroke="currentColor" stroke-width="1.6"/><line x1="240" y1="100" x2="80" y2="260" stroke="currentColor" stroke-width="1.6"/><circle cx="160" cy="180" r="4" fill="currentColor"/><text x="160" y="300" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">unique point</text><line x1="300" y1="120" x2="460" y2="260" stroke="currentColor" stroke-width="1.6"/><line x1="340" y1="120" x2="500" y2="260" stroke="currentColor" stroke-width="1.6" stroke-dasharray="6 4"/><text x="400" y="300" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">line of solutions</text><line x1="540" y1="120" x2="680" y2="220" stroke="currentColor" stroke-width="1.6"/><line x1="540" y1="160" x2="680" y2="260" stroke="currentColor" stroke-width="1.6"/><text x="610" y="300" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle">no meeting</text></svg>`,
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: 'Cramer two by two drill',
        problem: 'Solve $3x + 2y = 7$ and $x - 4y = -1$ by determinants.',
        steps: [
          { label: 'Step 1', text: 'Coefficient determinant:\n```text\nD = 3 times (-4) - 2 times 1 = -14\n```\nIn symbols $D = (3)(-4)-(2)(1) = -14$.' },
          { label: 'Step 2', text: 'Numerators are $D_{x} = (7)(-4)-(2)(-1) = -26$ and $D_{y} = (3)(-1)-(7)(1) = -10$.' },
          { label: 'Step 3', text: 'Hence $x = \\frac{-26}{-14} = \\frac{13}{7}$ and $y = \\frac{-10}{-14} = \\frac{5}{7}$, checked by substitution.' }
        ],
        result: '$x = \\frac{13}{7}$ and $y = \\frac{5}{7}$.'
      },
      {
        title: 'Homogeneous decision',
        problem: 'For which $k$ does $x + 2y + 3z = 0$, $2x + 3y + z = 0$, $x + y + kz = 0$ admit nonzero solutions.',
        steps: [
          { label: 'Step 1', text: 'Form $D(k) = \\begin{vmatrix} 1 and 2 and 3 \\\\ 2 and 3 and 1 \\\\ 1 and 1 and k \\end{vmatrix}$ and set $D(k) = 0$.' },
          { label: 'Step 2', text: 'Expansion gives $D(k) = -4k + 8$, so $k = 2$ is the critical value.' },
          { label: 'Step 3', text: 'At $k = 2$ fix $z = t$ to get infinite solutions; otherwise only $(0,0,0)$.' }
        ],
        result: 'Nontrivial solutions exactly when $k = 2$.'
      }
    ],
    keyTakeaways: [
      'Cramer gives $x = \\frac{D_{x}}{D}$ when $D \\ne 0$ in two and three variables.',
      'Homogeneous nontrivial solutions need $D = 0$.',
      'Zero $D$ with all numerators zero means infinite solutions.',
      'Zero $D$ with some numerator nonzero means no solution.'
    ],
    quiz: [
      {
        q: 'If $D \\ne 0$ for $AX = B$, the system has',
        options: ['no solution', 'exactly one solution', 'infinite solutions', 'two solutions'],
        answer: 1,
        explanation: 'Step 1: Nonzero determinant means invertible matrix. Step 2: Inverse gives $X = A^{-1}B$. Step 3: This triple is unique. Step 4: Hence exactly one solution.'
      },
      {
        q: 'Homogeneous $3 \\times 3$ has nonzero solutions when',
        options: [`$D \\ne 0$`, `$D = 0$`, '$B \\ne 0$', 'trace zero'],
        answer: 1,
        explanation: 'Step 1: Zero vector always solves homogeneous. Step 2: More solutions need dependent columns. Step 3: Dependence is $D = 0$. Step 4: Hence the second option holds.'
      },
      // PYQ-pattern: consistency with zero determinant
      {
        q: 'If $D = 0$ and $D_{x} \\ne 0$, the nonhomogeneous system has',
        options: ['unique solution', 'no solution', 'infinite solutions', 'zero only'],
        answer: 1,
        explanation: 'Step 1: Zero $D$ blocks division. Step 2: Nonzero numerator shows inconsistency. Step 3: Equations describe parallel objects. Step 4: Hence no solution.'
      },
      {
        q: 'Solution of $x+y = 3$ and $2x+2y = 6$ is',
        options: ['unique $(1,2)$', 'no solution', 'infinite points on the line', 'empty set'],
        answer: 2,
        explanation: 'Step 1: Second equation is twice the first. Step 2: Hence $D = 0$ with all numerators zero. Step 3: Every point on $x+y = 3$ works. Step 4: Hence infinite solutions.'
      }
    ]
  }
]
