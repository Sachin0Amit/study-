import type { SectionContent } from '../library'

// ============================================================================
// Mathematics Companion — Chapter 6: Trigonometry & Inverse Trigonometry
// Master study content (sections 6.1 - 6.4).
// Math is LaTeX rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const mathCompanionCh06Content: SectionContent[] = [
  // ---------------------------------------------------------------- 6.1
  {
    sectionId: 'math-a7-s8',
    readingTime: 9,
    intro: 'Compound-angle and multiple-angle identities turn sums into products and powers into single angles, which is the core toolkit for simplification. When angles satisfy a condition such as $A + B + C = \\pi$, the identities collapse into elegant conditional forms linking tangents, sines and cosines. This section builds both the unconditional toolkit and the conditional identities used for triangle-angle problems.',
    objectives: [
      'Apply sum-to-product and product-to-sum rules to simplify and factor trigonometric expressions',
      'Prove and use conditional identities under $A + B + C = \\pi$ for $\\tan$, $\\sin$ and $\\cos$',
      'Use double-angle, triple-angle and half-angle forms plus the `t` substitution to solve simplification tasks'
    ],
    concepts: [
      {
        term: 'Sum-to-product and product-to-sum',
        kind: 'theorem',
        statement: 'The **sum-to-product** laws factor sums of sines and cosines, and the `product-to-sum` laws reverse the process: $\\sin C + \\sin D = 2\\sin\\left(\\frac{C+D}{2}\\right)\\cos\\left(\\frac{C-D}{2}\\right)$ and $\\cos C + \\cos D = 2\\cos\\left(\\frac{C+D}{2}\\right)\\cos\\left(\\frac{C-D}{2}\\right)$.',
        detail: 'Companion forms: $\\sin C - \\sin D = 2\\cos\\left(\\frac{C+D}{2}\\right)\\sin\\left(\\frac{C-D}{2}\\right)$ and $\\cos C - \\cos D = -2\\sin\\left(\\frac{C+D}{2}\\right)\\sin\\left(\\frac{C-D}{2}\\right)$. Product-to-sum reverses them: $2\\sin A\\cos B = \\sin(A+B) + \\sin(A-B)$ and $2\\cos A\\cos B = \\cos(A+B) + \\cos(A-B)$. Choose the direction that factors or that linearizes.'
      },
      {
        term: 'Double-angle and triple-angle forms',
        kind: 'theorem',
        statement: 'The **multiple-angle** formulas express $2\\theta$ and $3\\theta$ through `single-angle` powers: $\\cos 2\\theta = 2\\cos^{2}\\theta - 1 = 1 - 2\\sin^{2}\\theta = \\cos^{2}\\theta - \\sin^{2}\\theta$ and $\\sin 3\\theta = 3\\sin\\theta - 4\\sin^{3}\\theta$.',
        detail: 'Also $\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$, $\\cos 3\\theta = 4\\cos^{3}\\theta - 3\\cos\\theta$, and $\\tan 2\\theta = \\frac{2\\tan\\theta}{1 - \\tan^{2}\\theta}$. Half-angle corollaries: $1 + \\cos 2\\theta = 2\\cos^{2}\\theta$ and $1 - \\cos 2\\theta = 2\\sin^{2}\\theta$. These power-lowering forms prepare integrals and equation solving.'
      },
      {
        term: 'Conditional tangent identity',
        kind: 'theorem',
        statement: 'If angles satisfy the **triangle condition** $A + B + C = \\pi$, then the `tangent-sum` collapses to $\\tan A + \\tan B + \\tan C = \\tan A\\tan B\\tan C$, provided no angle equals $\\frac{\\pi}{2}$ plus an integer multiple of $\\pi$.',
        detail: 'Proof sketch: $A + B = \\pi - C$ gives $\\tan(A+B) = -\\tan C$, so $\\frac{\\tan A + \\tan B}{1 - \\tan A\\tan B} = -\\tan C$, and rearrangement yields the result. The companion cotangent form is $\\cot A\\cot B + \\cot B\\cot C + \\cot C\\cot A = 1$. Failure of the angle condition destroys the identity.'
      },
      {
        term: 'Conditional sine and cosine identities',
        kind: 'theorem',
        statement: 'Under the same **triangle condition** $A + B + C = \\pi$, sines and cosines obey `closed-sum` identities: $\\sin 2A + \\sin 2B + \\sin 2C = 4\\sin A\\sin B\\sin C$ and $\\cos^{2}A + \\cos^{2}B + \\cos^{2}C + 2\\cos A\\cos B\\cos C = 1$.',
        detail: 'Further useful forms: $\\sin A + \\sin B + \\sin C = 4\\cos\\left(\\frac{A}{2}\\right)\\cos\\left(\\frac{B}{2}\\right)\\cos\\left(\\frac{C}{2}\\right)$ and $\\cos 2A + \\cos 2B + \\cos 2C = -1 - 4\\cos A\\cos B\\cos C$. Derive by grouping two terms with sum-to-product and using $C = \\pi - (A+B)$.'
      },
      {
        term: 'Half-angle tangent substitution',
        kind: 'method',
        statement: 'The **Weierstrass substitution** $t = \\tan\\left(\\frac{x}{2}\\right)$ rationalizes any sine-cosine expression via `rational-form` formulas $\\sin x = \\frac{2t}{1+t^{2}}$ and $\\cos x = \\frac{1-t^{2}}{1+t^{2}}$ with $dx$ replaced accordingly in calculus contexts.',
        detail: 'Use when an expression mixes $\\sin x$ and $\\cos x$ rationally and resists factoring. Also $\\tan x = \\frac{2t}{1-t^{2}}$. Watch the domain: $x$ must avoid odd multiples of $\\pi$ where $t$ is undefined, and verify those excluded points separately.'
      }
    ],
    examples: [
      {
        title: 'Proving the tangent conditional identity',
        problem: 'Given $A + B + C = \\pi$ with none of $A, B, C$ equal to an odd multiple of $\\frac{\\pi}{2}$, prove that $\\tan A + \\tan B + \\tan C = \\tan A\\tan B\\tan C$.',
        steps: [
          { label: 'Step 1', text: 'Start from the condition and take tangents:\n```tex\nA + B = pi - C  =>  tan(A+B) = tan(pi - C) = -tan C\n```\nExpand the left side with the addition formula $\\tan(A+B) = \\frac{\\tan A + \\tan B}{1 - \\tan A\\tan B}$.' },
          { label: 'Step 2', text: 'Equate the two expressions for $\\tan(A+B)$ to get $\\frac{\\tan A + \\tan B}{1 - \\tan A\\tan B} = -\\tan C$. Cross-multiply: $\\tan A + \\tan B = -\\tan C + \\tan A\\tan B\\tan C$.' },
          { label: 'Step 3', text: 'Move $-\\tan C$ to the left: $\\tan A + \\tan B + \\tan C = \\tan A\\tan B\\tan C$. The hypothesis that no tangent is undefined justifies every division.' }
        ],
        result: 'The conditional identity holds exactly when $A + B + C = \\pi$, converting a sum into a product.'
      },
      {
        title: 'Using sum-to-product to solve a factored equation',
        problem: 'Solve $\\sin 5x + \\sin 3x = 0$ for all real $x$, expressing the solution families explicitly.',
        steps: [
          { label: 'Step 1', text: 'Apply sum-to-product: $\\sin 5x + \\sin 3x = 2\\sin 4x\\cos x$. The equation becomes $2\\sin 4x\\cos x = 0$.' },
          { label: 'Step 2', text: 'Split into $\\sin 4x = 0$ giving $4x = n\\pi$, so $x = \\frac{n\\pi}{4}$ for integers $n$, and $\\cos x = 0$ giving $x = (2n+1)\\frac{\\pi}{2}$.' },
          { label: 'Step 3', text: 'Observe the second family is already contained in the first (odd multiples appear when $n$ is even but not divisible by four). Hence the full solution is the single family $x = \\frac{n\\pi}{4}$ with $n \\in \\mathbb{Z}$.' }
        ],
        result: 'Factoring via sum-to-product gives the unified solution $x = \\frac{n\\pi}{4}$ for integer $n$.'
      }
    ],
    keyTakeaways: [
      'Sum-to-product factors sums; product-to-sum linearizes products — choose the direction the task needs.',
      'Under $A + B + C = \\pi$, $\\tan A + \\tan B + \\tan C = \\tan A\\tan B\\tan C$ and $\\sin 2A + \\sin 2B + \\sin 2C = 4\\sin A\\sin B\\sin C$.',
      'Double-angle and triple-angle forms lower powers and expose hidden factors.',
      'The substitution $t = \\tan\\left(\\frac{x}{2}\\right)$ with $\\sin x = \\frac{2t}{1+t^{2}}$ rationalizes mixed expressions.'
    ],
    quiz: [
      // PYQ-pattern: conditional tangent identity under A+B+C = pi
      {
        q: 'If $A + B + C = \\pi$ and no tangent is undefined, which identity holds?',
        options: [`$\\tan A + \\tan B + \\tan C = \\tan A\\tan B\\tan C$`, `$\\tan A + \\tan B + \\tan C = 1$`, `$\\tan A\\tan B + \\tan B\\tan C + \\tan C\\tan A = 0$`, `$\\tan 2A + \\tan 2B + \\tan 2C = 0$`],
        answer: 0,
        explanation: 'Step 1: Write $A + B = \\pi - C$. Step 2: Take tangents to get $\\frac{\\tan A + \\tan B}{1 - \\tan A\\tan B} = -\\tan C$. Step 3: Cross-multiply and rearrange. Step 4: The rearranged form is exactly the first option.'
      },
      {
        q: 'The expression $\\cos 20^{\\circ} + \\cos 100^{\\circ} + \\cos 140^{\\circ}$ equals:',
        options: [`$1$`, `$0$`, `$\\frac{1}{2}$`, `$-\\frac{1}{2}$`],
        answer: 1,
        explanation: 'Step 1: Group $\\cos 100^{\\circ} + \\cos 140^{\\circ} = 2\\cos 120^{\\circ}\\cos(-20^{\\circ})$. Step 2: Since $\\cos 120^{\\circ} = -\\frac{1}{2}$, this equals $-\\cos 20^{\\circ}$. Step 3: Add $\\cos 20^{\\circ}$ to cancel. Step 4: The total is $0$.'
      },
      {
        q: 'With $t = \\tan\\left(\\frac{x}{2}\\right)$, the correct expression for $\\sin x$ is:',
        options: [`$\\frac{1-t^{2}}{1+t^{2}}$`, `$\\frac{2t}{1-t^{2}}$`, `$\\frac{2t}{1+t^{2}}$`, `$\\frac{1+t^{2}}{2t}$`],
        answer: 2,
        explanation: 'Step 1: Recall $\\sin x = 2\\sin\\left(\\frac{x}{2}\\right)\\cos\\left(\\frac{x}{2}\\right)$. Step 2: Divide numerator and denominator by $\\cos^{2}\\left(\\frac{x}{2}\\right)$. Step 3: Identify $t$ and simplify to $\\frac{2t}{1+t^{2}}$. Step 4: The cosine form $\\frac{1-t^{2}}{1+t^{2}}$ is the distractor.'
      },
      {
        q: 'If $A + B + C = \\pi$, then $\\sin 2A + \\sin 2B + \\sin 2C$ equals:',
        options: [`$-4\\sin A\\sin B\\sin C$`, `$2\\sin A\\sin B\\sin C$`, `$4\\cos A\\cos B\\cos C$`, `$4\\sin A\\sin B\\sin C$`],
        answer: 3,
        explanation: 'Step 1: Group $\\sin 2A + \\sin 2B = 2\\sin(A+B)\\cos(A-B)$. Step 2: Replace $\\sin(A+B) = \\sin C$. Step 3: Factor $2\\sin C$ with $\\sin 2C = 2\\sin C\\cos C$. Step 4: Simplify the bracket to $2\\sin A\\sin B$, giving $4\\sin A\\sin B\\sin C$.'
      }
    ],
    depth: [
      {
        tier: 'masters',
        title: 'Trigonometric identities from rotation groups',
        blocks: [
          {
            kind: 'theorem',
            body: 'Rotation through $A + B$ equals rotation through $A$ followed by rotation through $B$, so the **rotation homomorphism** gives $\\cos(A+B) = \\cos A \\cos B - \\sin A \\sin B$ and $\\sin(A+B) = \\sin A \\cos B + \\cos A \\sin B$. Equivalently $e^{i(A+B)} = e^{iA}e^{iB}$ with $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$. Double angle, half angle and product to sum formulas are all specializations: $\\cos 2A = 2\\cos^{2}A - 1$, $\\sin 2A = 2\\sin A\\cos A$, and $2\\sin A\\cos B = \\sin(A+B) + \\sin(A-B)$. The sharp bound $|a\\sin x + b\\cos x| \\le \\sqrt{a^{2}+b^{2}}$ holds with equality at a computable phase.'
          },
          {
            kind: 'proof',
            body: 'Multiply rotation matrices $R(A)R(B)$ and read the entries: the product has cosine of the sum on the diagonal and sine of the sum off the diagonal, which is exactly the compound formulas. In complex form, expand $e^{iA}e^{iB} = (\\cos A + i\\sin A)(\\cos B + i\\sin B)$ and separate real and imaginary parts. Setting $B = A$ yields double angles, setting $B = -A$ yields $\\cos^{2}A + \\sin^{2}A = 1$, and adding the expansions for $(A+B)$ and $(A-B)$ cancels one pair to give product to sum. The bound follows by writing $a\\sin x + b\\cos x = R\\sin(x + \\phi)$ with $R = \\sqrt{a^{2}+b^{2}}$ and $\\tan\\phi = b/a$.'
          },
          {
            kind: 'example',
            heading: 'Conditional tangent identity in a triangle',
            body: 'When $A + B + C = \\pi$ with none equal to $\\pi/2$, dividing $\\tan(A+B) = -\\tan C$ through the addition formula gives $\\tan A + \\tan B + \\tan C = \\tan A\\tan B\\tan C$. The condition collapses the denominator $1 - \\tan A\\tan B - \\tan B\\tan C - \\tan C\\tan A$ relations into a single symmetric constraint. Likewise $\\sin 2A + \\sin 2B + \\sin 2C = 4\\sin A\\sin B\\sin C$ follows by factoring $2\\sin C$ from the grouped sum. These are graduate in spirit because a geometric side condition becomes an algebraic identity through the homomorphism, and extremal cases occur at symmetry $A = B = C = \\pi/3$.'
          }
        ]
      }
    ]
  },
  // ---------------------------------------------------------------- 6.2
  {
    sectionId: 'math-a7-s4',
    readingTime: 8,
    intro: 'A trigonometric equation has infinitely many solutions, so the task is to describe all of them with compact general-solution formulas. Each basic equation $\\sin x = k$, $\\cos x = k$ and $\\tan x = k$ owns a canonical family, and harder equations reduce to these after factoring or bounding. This section also trains the habit of rejecting extraneous roots introduced by squaring or by multiplying with expressions that can vanish.',
    objectives: [
      'Write general solutions for $\\sin x = k$, $\\cos x = k$ and $\\tan x = k$ including principal-solution logic',
      'Reduce factored, quadratic-in-trig and bounded-sum equations to basic families',
      'Detect and discard extraneous roots from squaring and domain restrictions'
    ],
    concepts: [
      {
        term: 'Principal value and general solution for sine',
        kind: 'theorem',
        statement: 'The **sine equation** $\\sin x = k$ with $|k| \\le 1$ has `principal-solution` $\\alpha = \\sin^{-1}k$ in $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$ and full family $x = n\\pi + (-1)^{n}\\alpha$ for $n \\in \\mathbb{Z}$.',
        detail: 'If $|k| > 1$ there is no real solution. The $(-1)^{n}$ factor alternates between the two symmetric positions on the unit circle. For $k = 0$ this collapses to $x = n\\pi$.'
      },
      {
        term: 'General solutions for cosine and tangent',
        kind: 'theorem',
        statement: 'The **cosine and tangent families** are $x = 2n\\pi \\pm \\alpha$ for $\\cos x = k$ with `principal-range` $\\alpha \\in [0, \\pi]$, and $x = n\\pi + \\alpha$ for $\\tan x = k$ with $\\alpha \\in \\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$.',
        detail: 'Cosine gives two symmetric branches per period, hence the $\\pm$. Tangent has period $\\pi$, so one branch per interval suffices. Special cases: $\\cos x = 1$ gives $x = 2n\\pi$; $\\tan x = 0$ gives $x = n\\pi$.'
      },
      {
        term: 'Standard special solution families',
        kind: 'notation',
        statement: 'Memorize the **boundary families** $\\sin x = 0 \\Rightarrow x = n\\pi$, $\\cos x = 0 \\Rightarrow x = (2n+1)\\frac{\\pi}{2}$ and `unit-value` cases $\\sin x = 1 \\Rightarrow x = 2n\\pi + \\frac{\\pi}{2}$ in compact `n-form`.',
        detail: 'Also $\\sin x = -1 \\Rightarrow x = 2n\\pi - \\frac{\\pi}{2}$, $\\cos x = 1 \\Rightarrow x = 2n\\pi$, $\\cos x = -1 \\Rightarrow x = (2n+1)\\pi$. These bypass the general formula and prevent sign slips.'
      },
      {
        term: 'Simultaneous sin-cos equations',
        kind: 'method',
        statement: 'A **simultaneous requirement** such as $\\sin x = \\frac{1}{2}$ and $\\cos x = -\\frac{\\sqrt{3}}{2}$ is solved by `quadrant-intersection`: find each family separately and keep only the common terms, here $x = 2n\\pi + \\frac{5\\pi}{6}$.',
        detail: 'Squaring $\\sin x + \\cos x = c$ or writing $a\\sin x + b\\cos x = R\\sin(x+\\phi)$ can create candidates satisfying only one of the two sign conditions. Always substitute back to select the correct quadrant branch.'
      },
      {
        term: 'Extraneous roots and domain guards',
        kind: 'law',
        statement: 'Squaring and multiplying by a **vanishing factor** can invent roots, so every `domain-guard` step must be verified: reject values making any denominator zero or any squared equation one-sided.',
        detail: 'Typical traps: multiplying by $\\cos x$ when $\\cos x = 0$ might itself be a solution; squaring $\\sin x = 1 - \\cos x$ admits $x$ with $\\sin x < 0$. Substitute each family back into the original unsquared equation before reporting.'
      }
    ],
    examples: [
      {
        title: 'Solving a linear combination by auxiliary angle',
        problem: 'Find all real $x$ satisfying $\\sqrt{3}\\sin x + \\cos x = 2$.',
        steps: [
          { label: 'Step 1', text: 'Normalize with $R = \\sqrt{(\\sqrt{3})^{2}+1^{2}} = 2$:\n```tex\nsqrt(3) sin x + cos x = 2 sin(x + pi/6) = 2\n```\nDivide by $2$ to get $\\sin\\left(x + \\frac{\\pi}{6}\\right) = 1$.' },
          { label: 'Step 2', text: 'Use the unit-value family $\\sin\\theta = 1 \\Rightarrow \\theta = 2n\\pi + \\frac{\\pi}{2}$. Hence $x + \\frac{\\pi}{6} = 2n\\pi + \\frac{\\pi}{2}$.' },
          { label: 'Step 3', text: 'Subtract to isolate: $x = 2n\\pi + \\frac{\\pi}{3}$ for $n \\in \\mathbb{Z}$. Substitution confirms the maximum $2$ is attained there.' }
        ],
        result: 'The solution set is the single arithmetic progression $x = 2n\\pi + \\frac{\\pi}{3}$.'
      },
      {
        title: 'Rejecting an extraneous root after squaring',
        problem: 'Solve $\\sin x + \\cos x = 1$ fully, showing which squared candidates survive.',
        steps: [
          { label: 'Step 1', text: 'Square both sides: $(\\sin x + \\cos x)^{2} = 1$ gives $1 + \\sin 2x = 1$, so $\\sin 2x = 0$ and $2x = n\\pi$, i.e. $x = \\frac{n\\pi}{2}$.' },
          { label: 'Step 2', text: 'Test the four residue classes modulo $2\\pi$: $x = 0$ gives $1$ (keep); $x = \\frac{\\pi}{2}$ gives $1$ (keep); $x = \\pi$ gives $-1$ (reject); $x = \\frac{3\\pi}{2}$ gives $-1$ (reject).' },
          { label: 'Step 3', text: 'The surviving classes are $x = 2n\\pi$ and $x = 2n\\pi + \\frac{\\pi}{2}$. Squaring doubled the candidate set, and substitution halved it back.' }
        ],
        result: 'Only $x = 2n\\pi$ and $x = 2n\\pi + \\frac{\\pi}{2}$ satisfy the original unsquared equation.'
      }
    ],
    keyTakeaways: [
      'Master the three general families: $x = n\\pi + (-1)^{n}\\alpha$ for sine, $x = 2n\\pi \\pm \\alpha$ for cosine, $x = n\\pi + \\alpha$ for tangent.',
      'Write $a\\sin x + b\\cos x$ as $R\\sin(x+\\phi)$ to expose the range $[-R, R]$ and the solution directly.',
      'Intersect sine and cosine families by quadrant when both signs are prescribed.',
      'Substitute every candidate back after squaring or clearing denominators to remove extraneous roots.'
    ],
    quiz: [
      {
        q: 'The general solution of $\\sin x = \\frac{1}{2}$ is:',
        options: [`$x = 2n\\pi \\pm \\frac{\\pi}{6}$`, `$x = n\\pi + (-1)^{n}\\frac{\\pi}{6}$`, `$x = n\\pi + \\frac{\\pi}{6}$`, '$x = 2n\\pi + \\frac{\\pi}{6}$ only'],
        answer: 1,
        explanation: 'Step 1: Principal value is $\\alpha = \\frac{\\pi}{6}$. Step 2: Sine has two symmetric positions per $2\\pi$ block. Step 3: The $(-1)^{n}$ construction alternates between them. Step 4: Only the second option encodes both branches.'
      },
      // PYQ-pattern: bounded linear combination attaining its maximum
      {
        q: 'The solution set of $\\sqrt{3}\\sin x + \\cos x = 2$ is:',
        options: [`$x = 2n\\pi + \\frac{\\pi}{3}$`, `$x = 2n\\pi - \\frac{\\pi}{3}$`, `$x = n\\pi + \\frac{\\pi}{3}$`, 'No real solution'],
        answer: 0,
        explanation: 'Step 1: Amplitude is $R = 2$, so the value $2$ is the attainable maximum. Step 2: Rewrite as $\\sin\\left(x + \\frac{\\pi}{6}\\right) = 1$. Step 3: Solve $x + \\frac{\\pi}{6} = 2n\\pi + \\frac{\\pi}{2}$. Step 4: Simplify to $x = 2n\\pi + \\frac{\\pi}{3}$.'
      },
      {
        q: 'If $\\cos x = -\\frac{1}{2}$ with $x \\in [0, 2\\pi]$, the solutions are:',
        options: [`$\\frac{\\pi}{3}, \\frac{5\\pi}{3}$`, `$\\frac{2\\pi}{3}, \\frac{4\\pi}{3}$`, `$\\frac{\\pi}{6}, \\frac{5\\pi}{6}$`, '$\\frac{2\\pi}{3}$ only'],
        answer: 1,
        explanation: 'Step 1: Principal value is $\\alpha = \\frac{2\\pi}{3}$. Step 2: Cosine is negative in quadrants II and III. Step 3: Symmetric partners about $\\pi$ are $\\frac{2\\pi}{3}$ and $\\frac{4\\pi}{3}$. Step 4: Both lie in $[0, 2\\pi]$.'
      },
      {
        q: 'Squaring $\\sin x = 1 - \\cos x$ yields $x = 2n\\pi$ and $x = 2n\\pi + \\pi$. What survives verification?',
        options: ['Both families survive', 'Only $x = 2n\\pi$ survives', 'Only $x = 2n\\pi + \\pi$ survives', 'Neither survives'],
        answer: 1,
        explanation: 'Step 1: Test $x = 2n\\pi$: left side $0$, right side $0$ — valid. Step 2: Test $x = 2n\\pi + \\pi$: left side $0$, right side $2$ — fails. Step 3: The failure comes from squaring a one-sided equation. Step 4: Hence only $x = 2n\\pi$ is retained.'
      }
    ]
  },
  // ---------------------------------------------------------------- 6.3
  {
    sectionId: 'math-a7-s5',
    readingTime: 8,
    intro: 'Inverse trigonometric functions undo sine, cosine and tangent only after each is restricted to a principal branch where it is one-to-one. The resulting principal values obey a tight web of conversion identities that collapse nested expressions such as $\\sin^{-1}x + \\cos^{-1}x$. This section fixes the branches and builds fluency in simplifying inverse-trig chains without leaving the principal range.',
    objectives: [
      'State domains, ranges and graphs of the six inverse functions via principal branches',
      'Apply conversion identities like $\\sin^{-1}x + \\cos^{-1}x = \\frac{\\pi}{2}$ and homogeneous $\\tan^{-1}$ sums',
      'Simplify nested compositions such as $\\sin(\\cos^{-1}x)$ and $\\tan^{-1}x + \\tan^{-1}y$ correctly'
    ],
    concepts: [
      {
        term: 'Principal branches and ranges',
        kind: 'definition',
        statement: 'Each **principal branch** restricts its trig function to a one-to-one interval with `range-tag` $\\sin^{-1}: [-1,1] \\to \\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$ and $\\cos^{-1}: [-1,1] \\to [0, \\pi]$.',
        detail: 'Full table: $\\tan^{-1}: \\mathbb{R} \\to \\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$, $\\cot^{-1}: \\mathbb{R} \\to (0, \\pi)$, $\\sec^{-1}: (-\\infty,-1]\\cup[1,\\infty) \\to [0,\\pi]\\setminus\\{\\frac{\\pi}{2}\\}$, $\\csc^{-1}: (-\\infty,-1]\\cup[1,\\infty) \\to \\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]\\setminus\\{0\\}$. Outputs must always land in these intervals.'
      },
      {
        term: 'Complementary inverse pairs',
        kind: 'theorem',
        statement: 'The **complementary identity** $\\sin^{-1}x + \\cos^{-1}x = \\frac{\\pi}{2}$ for $|x| \\le 1$ pairs with `co-pair` forms $\\tan^{-1}x + \\cot^{-1}x = \\frac{\\pi}{2}$ and $\\sec^{-1}x + \\csc^{-1}x = \\frac{\\pi}{2}$.',
        detail: 'Geometrically, the two acute angles of a right triangle with hypotenuse $1$ and leg $|x|$ sum to a right angle. Use these to halve the work: evaluate one inverse and subtract from $\\frac{\\pi}{2}$.'
      },
      {
        term: 'Negative-argument and reciprocal rules',
        kind: 'theorem',
        statement: 'Odd inverses obey the **sign rule** $\\sin^{-1}(-x) = -\\sin^{-1}x$ and `odd-even` companions $\\tan^{-1}(-x) = -\\tan^{-1}x$, while $\\cos^{-1}(-x) = \\pi - \\cos^{-1}x$.',
        detail: 'Reciprocal conversions: $\\sin^{-1}x = \\csc^{-1}\\left(\\frac{1}{x}\\right)$ for $|x| \\le 1, x \\ne 0$, and $\\cos^{-1}x = \\sec^{-1}\\left(\\frac{1}{x}\\right)$. The sign rule fails for $\\cos^{-1}$ and $\\cot^{-1}$ because their ranges are not symmetric about zero.'
      },
      {
        term: 'Sum of two arctangents',
        kind: 'theorem',
        statement: 'The **arctangent sum** $\\tan^{-1}x + \\tan^{-1}y = \\tan^{-1}\\left(\\frac{x+y}{1-xy}\\right)$ holds with `branch-correction` $+\\pi$ when $x, y > 0$ and $xy > 1$, and $-\\pi$ when $x, y < 0$ and $xy > 1$.',
        detail: 'Take tangents of both sides and adjust by multiples of $\\pi$ to land back in $\\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$ for the single-term case, or $(-\\pi, \\pi)$ for sums. Doubling: $2\\tan^{-1}x = \\tan^{-1}\\left(\\frac{2x}{1-x^{2}}\\right)$ with the same corrections.'
      },
      {
        term: 'Nested composition simplification',
        kind: 'method',
        statement: 'A **nested composition** such as $\\sin(\\cos^{-1}x)$ is evaluated by the `triangle-draw` method: draw a right triangle with the inner inverse as an angle, label sides, and read the outer function, giving $\\sqrt{1-x^{2}}$.',
        detail: 'More: $\\cos(\\sin^{-1}x) = \\sqrt{1-x^{2}}$, $\\tan(\\sin^{-1}x) = \\frac{x}{\\sqrt{1-x^{2}}}$, $\\sin(2\\sin^{-1}x) = 2x\\sqrt{1-x^{2}}$. Always respect $|x| \\le 1$ and choose the nonnegative root because principal values keep the adjacent geometry in quadrants I or IV.'
      }
    ],
    examples: [
      {
        title: 'Simplifying an arctangent sum with correction',
        problem: 'Simplify $\\tan^{-1}2 + \\tan^{-1}3$ to a single principal value.',
        steps: [
          { label: 'Step 1', text: 'Apply the addition template:\n```tex\ntan^-1 x + tan^-1 y = tan^-1((x+y)/(1-xy)) + correction\n```\nHere $x + y = 5$ and $1 - xy = 1 - 6 = -5$, so the raw fraction is $-1$.' },
          { label: 'Step 2', text: 'Since $x, y > 0$ and $xy = 6 > 1$, the sum exceeds $\\frac{\\pi}{2}$ and needs $+\\pi$ correction: $\\tan^{-1}2 + \\tan^{-1}3 = \\pi + \\tan^{-1}(-1)$.' },
          { label: 'Step 3', text: 'Evaluate $\\tan^{-1}(-1) = -\\frac{\\pi}{4}$, so the sum is $\\pi - \\frac{\\pi}{4} = \\frac{3\\pi}{4}$. Verify numerically: each term is acute and their sum is obtuse.' }
        ],
        result: '$\\tan^{-1}2 + \\tan^{-1}3 = \\frac{3\\pi}{4}$, demonstrating the $+\\pi$ branch correction.'
      },
      {
        title: 'Collapsing a sine-cosine inverse pair',
        problem: 'Prove that $\\sin^{-1}\\left(\\frac{3}{5}\\right) + \\sin^{-1}\\left(\\frac{8}{17}\\right) = \\sin^{-1}\\left(\\frac{77}{85}\\right)$.',
        steps: [
          { label: 'Step 1', text: 'Let $\\alpha = \\sin^{-1}\\left(\\frac{3}{5}\\right)$ and $\\beta = \\sin^{-1}\\left(\\frac{8}{17}\\right)$. Then $\\cos\\alpha = \\frac{4}{5}$ and $\\cos\\beta = \\frac{15}{17}$ by the $3$-$4$-$5$ and $8$-$15$-$17$ triangles.' },
          { label: 'Step 2', text: 'Compute $\\sin(\\alpha+\\beta) = \\sin\\alpha\\cos\\beta + \\cos\\alpha\\sin\\beta = \\frac{3}{5}\\cdot\\frac{15}{17} + \\frac{4}{5}\\cdot\\frac{8}{17} = \\frac{45+32}{85} = \\frac{77}{85}$.' },
          { label: 'Step 3', text: 'Since both $\\alpha$ and $\\beta$ are acute, their sum lies in $(0, \\pi)$ with sine $\\frac{77}{85}$ below $1$, and the acute branch gives $\\alpha + \\beta = \\sin^{-1}\\left(\\frac{77}{85}\\right)$, equivalently $\\cos^{-1}\\left(\\frac{36}{85}\\right)$.' }
        ],
        result: 'The sum collapses to $\\sin^{-1}\\left(\\frac{77}{85}\\right)$ (equivalently $\\cos^{-1}\\left(\\frac{36}{85}\\right)$) via the sine-addition formula.'
      }
    ],
    keyTakeaways: [
      'Outputs of $\\sin^{-1}$, $\\cos^{-1}$ and $\\tan^{-1}$ must lie in their principal ranges, or the evaluation is wrong.',
      '$\\sin^{-1}x + \\cos^{-1}x = \\frac{\\pi}{2}$ and its $\\tan$/$\\cot$, $\\sec$/$\\csc$ analogues halve conversion work.',
      '$\\tan^{-1}x + \\tan^{-1}y$ needs a $\\pm\\pi$ correction when $xy > 1$ to stay on the correct branch.',
      'Draw the right triangle for $\\sin(\\cos^{-1}x) = \\sqrt{1-x^{2}}$ and similar nested forms.'
    ],
    quiz: [
      {
        q: 'The principal value of $\\sin^{-1}\\left(-\\frac{1}{2}\\right)$ is:',
        options: [`$\\frac{\\pi}{6}$`, `$-\\frac{\\pi}{6}$`, `$\\frac{5\\pi}{6}$`, `$-\\frac{5\\pi}{6}$`],
        answer: 1,
        explanation: 'Step 1: Range of $\\sin^{-1}$ is $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$. Step 2: $\\sin\\left(-\\frac{\\pi}{6}\\right) = -\\frac{1}{2}$. Step 3: $\\frac{5\\pi}{6}$ has the right sine but lies outside the range. Step 4: Hence the value is $-\\frac{\\pi}{6}$.'
      },
      {
        q: 'For $|x| \\le 1$, $\\sin^{-1}x + \\cos^{-1}x$ equals:',
        options: [`$\\pi$`, `$\\frac{\\pi}{2}$`, `$0$`, `$2\\pi$`],
        answer: 1,
        explanation: 'Step 1: Let $\\theta = \\sin^{-1}x$. Step 2: Then $\\cos\\left(\\frac{\\pi}{2}-\\theta\\right) = x$. Step 3: Since $\\frac{\\pi}{2}-\\theta \\in [0,\\pi]$, it equals $\\cos^{-1}x$. Step 4: Adding gives $\\theta + \\left(\\frac{\\pi}{2}-\\theta\\right) = \\frac{\\pi}{2}$.'
      },
      // PYQ-pattern: arctangent sum needing branch correction
      {
        q: '$\\tan^{-1}2 + \\tan^{-1}3$ equals:',
        options: [`$\\frac{\\pi}{4}$`, `$\\frac{3\\pi}{4}$`, `$-\\frac{\\pi}{4}$`, `$\\tan^{-1}5$`],
        answer: 1,
        explanation: 'Step 1: Raw formula gives $\\tan^{-1}(-1) = -\\frac{\\pi}{4}$. Step 2: Both inputs are positive with product $6 > 1$. Step 3: The true sum of two acute angles above $\\frac{\\pi}{2}$ each needs $+\\pi$. Step 4: $-\\frac{\\pi}{4} + \\pi = \\frac{3\\pi}{4}$.'
      },
      {
        q: '$\\sin(\\cos^{-1}x)$ for $x \\in [-1,1]$ simplifies to:',
        options: [`$\\sqrt{1-x^{2}}$`, `$\\sqrt{1+x^{2}}$`, `$\\frac{x}{\\sqrt{1-x^{2}}}$`, `$1 - x$`],
        answer: 0,
        explanation: 'Step 1: Set $\\theta = \\cos^{-1}x$ so $\\cos\\theta = x$. Step 2: Then $\\sin\\theta = \\pm\\sqrt{1-x^{2}}$. Step 3: Since $\\theta \\in [0,\\pi]$, sine is nonnegative. Step 4: Keep the positive root $\\sqrt{1-x^{2}}$.'
      }
    ]
  },
  // ---------------------------------------------------------------- 6.4
  {
    sectionId: 'math-a7-s9',
    readingTime: 9,
    intro: 'The side-angle duality of a triangle is captured by the sine rule, the cosine rule and the projection formula, each translating between lengths and angles. Area admits half-product, Heron and circumradius forms that connect to the same data. This section closes with the four classical centres and their distance formulas, which convert triangle geometry into coordinate computation.',
    objectives: [
      'Apply sine, cosine and projection rules to solve sides, angles and ambiguous cases',
      'Compute area via $\\frac{1}{2}ab\\sin C$, Heron and $\\frac{abc}{4R}$ forms interchangeably',
      'Locate circumcentre, incentre, excentres and orthocentre with $R$, $r$ and Euler-line facts'
    ],
    concepts: [
      {
        term: 'Sine rule and circumradius',
        kind: 'theorem',
        statement: 'The **sine rule** states $\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R$ where `diameter-form` $2R$ is the circumdiameter and $R$ the circumradius.',
        detail: 'Use side-to-angle when two angles and a side are known, and angle-to-side when two sides and a non-included angle are known. The $2R$ form instantly gives $R$ from any side-angle pair.'
      },
      {
        term: 'Cosine rule and projection formula',
        kind: 'theorem',
        statement: 'The **cosine rule** $c^{2} = a^{2} + b^{2} - 2ab\\cos C$ generalizes Pythagoras, and the `projection-form` $a = b\\cos C + c\\cos B$ reads each side as a sum of projections.',
        detail: 'Cosine rule solves SSS (all sides) and SAS (two sides plus included angle). Projection formula proves angle-sum consistency and derives Napier-style half-angle identities. For $C = \\frac{\\pi}{2}$ both reduce to $c^{2} = a^{2}+b^{2}$.'
      },
      {
        term: 'Area forms and Heron',
        kind: 'theorem',
        statement: 'Triangle **area** takes three interchangeable `area-forms`: $\\Delta = \\frac{1}{2}ab\\sin C$, $\\Delta = \\sqrt{s(s-a)(s-b)(s-c)}$ with $s = \\frac{a+b+c}{2}$, and $\\Delta = \\frac{abc}{4R} = rs$.',
        detail: 'Half-product needs two sides plus included angle; Heron needs three sides; $\\frac{abc}{4R}$ links area to circumradius; $rs$ links area to inradius $r$. Equating forms yields $R$ or $r$ without extra construction.'
      },
      {
        term: 'Inradius, exradii and semiperimeter',
        kind: 'theorem',
        statement: 'The **inradius-exradius** system gives $r = (s-a)\\tan\\left(\\frac{A}{2}\\right) = 4R\\sin\\left(\\frac{A}{2}\\right)\\sin\\left(\\frac{B}{2}\\right)\\sin\\left(\\frac{C}{2}\\right)$ and `ex-form` $r_{a} = \\frac{\\Delta}{s-a}$ with cyclic partners.',
        detail: 'Also $r = 4R\\sin\\left(\\frac{A}{2}\\right)\\sin\\left(\\frac{B}{2}\\right)\\sin\\left(\\frac{C}{2}\\right)$ and $r_{a}+r_{b}+r_{c} = 4R + r$. Excentre $I_{a}$ touches side $a$ externally and the extensions of the other two.'
      },
      {
        term: 'Centres and Euler line',
        kind: 'insight',
        statement: 'The four **classical centres** — circumcentre $O$, centroid $G$, orthocentre $H$ and incentre $I$ — satisfy the `euler-line` relation $\\vec{OH} = \\vec{OA} + \\vec{OB} + \\vec{OC}$ with $OG:GH = 1:2$.',
        detail: 'Distances: $OI^{2} = R(R-2r)$ (Euler formula), $OH^{2} = 9R^{2} - (a^{2}+b^{2}+c^{2})$. Coordinates: incentre is the weighted average $\\frac{ax_{A}+bx_{B}+cx_{C}}{a+b+c}$; circumcentre is the perpendicular-bisector intersection.'
      }
    ],
    examples: [
      {
        title: 'Resolving the ambiguous case with the sine rule',
        problem: 'Given $a = 7$, $b = 5$ and $A = 60^{\\circ}$, determine the possible values of angle $B$ and the triangle configurations.',
        steps: [
          { label: 'Step 1', text: 'Apply the sine rule:\n```tex\nsin B = b sin A / a = 5 sin60 / 7\n```\nNumerically $\\sin B = \\frac{5}{7}\\cdot\\frac{\\sqrt{3}}{2} \\approx 0.618$.' },
          { label: 'Step 2', text: 'Two angles in $(0, \\pi)$ share this sine: $B_{1} \\approx 38.2^{\\circ}$ and $B_{2} \\approx 180^{\\circ} - 38.2^{\\circ} = 141.8^{\\circ}$.' },
          { label: 'Step 3', text: 'Check sums: $A + B_{1} \\approx 98.2^{\\circ} < 180^{\\circ}$ (valid); $A + B_{2} \\approx 201.8^{\\circ} > 180^{\\circ}$ (invalid). Only $B_{1}$ survives, so the solution is unique here.' }
        ],
        result: 'Only $B = \\sin^{-1}\\left(\\frac{5\\sqrt{3}}{14}\\right) \\approx 38.2^{\\circ}$ is admissible; the supplementary candidate violates the angle sum.'
      },
      {
        title: 'Computing circumradius from area forms',
        problem: 'A triangle has sides $13$, $14$ and $15$. Find its area, circumradius $R$ and inradius $r$.',
        steps: [
          { label: 'Step 1', text: 'Semiperimeter $s = \\frac{13+14+15}{2} = 21$. Heron: $\\Delta = \\sqrt{21 \\cdot 8 \\cdot 7 \\cdot 6} = \\sqrt{7056} = 84$.' },
          { label: 'Step 2', text: 'Circumradius via $\\Delta = \\frac{abc}{4R}$: $R = \\frac{13 \\cdot 14 \\cdot 15}{4 \\cdot 84} = \\frac{2730}{336} = \\frac{65}{8} = 8.125$.' },
          { label: 'Step 3', text: 'Inradius via $\\Delta = rs$: $r = \\frac{84}{21} = 4$. Check Euler inequality $R \\ge 2r$ ($8.125 \\ge 8$) holds tightly.' }
        ],
        result: 'Area $84$, circumradius $R = \\frac{65}{8}$ and inradius $r = 4$.'
      }
    ],
    keyTakeaways: [
      '$\\frac{a}{\\sin A} = 2R$ converts any side-angle pair into the circumradius and vice versa.',
      '$c^{2} = a^{2} + b^{2} - 2ab\\cos C$ handles SSS and SAS; $a = b\\cos C + c\\cos B$ checks consistency.',
      'Equate $\\frac{1}{2}ab\\sin C$, Heron and $\\frac{abc}{4R} = rs$ to extract $R$ and $r$ from side data.',
      '$OI^{2} = R(R-2r)$ and the Euler line $OG:GH = 1:2$ bind the four centres to $R$ and $r$.'
    ],
    quiz: [
      {
        q: 'In any triangle, $\\frac{a}{\\sin A}$ equals:',
        options: [`$R$`, `$2R$`, `$r$`, `$2r$`],
        answer: 1,
        explanation: 'Step 1: Circumscribe the triangle with radius $R$. Step 2: Chord $a$ subtends $2A$ at the centre. Step 3: Hence $a = 2R\\sin A$. Step 4: Dividing gives $\\frac{a}{\\sin A} = 2R$.'
      },
      // PYQ-pattern: Heron plus abc-over-4R for integer-sided triangle
      {
        q: 'A triangle has sides $13$, $14$, $15$. Its circumradius $R$ is:',
        options: [`$8$`, `$\\frac{33}{4}$`, `$\\frac{65}{8}$`, `$7$`],
        answer: 2,
        explanation: 'Step 1: Semiperimeter $s = 21$. Step 2: Heron gives $\\Delta = 84$. Step 3: Use $R = \\frac{abc}{4\\Delta} = \\frac{2730}{336}$. Step 4: Simplify to $\\frac{65}{8}$, the third option.'
      },
      {
        q: 'The projection formula for side $a$ is:',
        options: [`$a = b\\cos C + c\\cos B$`, `$a = b\\cos C - c\\cos B$`, `$a = b\\sin C + c\\sin B$`, `$a^{2} = b^{2} + c^{2}$`],
        answer: 0,
        explanation: 'Step 1: Drop the altitude from $A$ onto $BC$. Step 2: It splits $a$ into $b\\cos C$ and $c\\cos B$. Step 3: Adding the segments recovers $a$. Step 4: The first option with plus-cosine matches.'
      },
      {
        q: 'Euler formula for distance between circumcentre $O$ and incentre $I$ is:',
        options: [`$OI^{2} = R^{2} + 2Rr$`, `$OI^{2} = R(R + 2r)$`, `$OI = R + r$`, `$OI^{2} = R(R - 2r)$`],
        answer: 3,
        explanation: 'Step 1: Recall $R \\ge 2r$ with equality for equilateral. Step 2: Only $R(R-2r)$ is nonnegative under that inequality. Step 3: It vanishes exactly when $R = 2r$. Step 4: This is the fourth option, matching the equilateral coincidence of centres.'
      }
    ]
  }
]
