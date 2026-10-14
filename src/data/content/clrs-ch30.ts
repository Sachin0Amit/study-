import type { SectionContent } from '../library'

// ============================================================================
// CLRS — Introduction to Algorithms, 3rd Edition
// Chapter 30: Polynomials and the FFT (Sections 30.1 – 30.3)
// ============================================================================

export const clrsCh30Content: SectionContent[] = [
  // ---------------------------------------------------------------- 30.1
  {
    sectionId: 'clrs-ch30-s1',
    readingTime: 6,
    intro: "A polynomial can live in two worlds: as a list of coefficients, or as its values at chosen points. Addition is cheap in coefficients, multiplication is cheap in point-value form — and a degree-bound $n$ polynomial is pinned down by its values at any $n$ distinct points. The whole FFT story is about shuttling between the two representations fast enough to make multiplication cheap everywhere.",
    objectives: [
      "Convert between coefficient and point-value representations (evaluation, interpolation)",
      "State the uniqueness of the degree-bound-n representation through n points",
      "Tabulate the costs of each operation in each representation",
      "Set up the three-step pipeline for fast multiplication",
    ],
    concepts: [
      {
        term: 'Coefficient representation',
        kind: 'definition',
        statement: "A polynomial of **degree bound $n$** is the coefficient vector $a = (a_0, a_1, \\ldots, a_{n-1})$ standing for $A(x) = \\sum_{j=0}^{n-1} a_j x^j$. Evaluation of $A$ at one point takes $\\Theta(n)$ by Horner's rule; adding two such polynomials costs $\\Theta(n)$; multiplying them costs $\\Theta(n^2)$ (each $a_i$ meets each $b_j$).",
        detail: "The coefficient world is the schoolbook world: the $\\Theta(n^2)$ convolution of coefficients is the bottleneck this chapter demolishes.",
      },
      {
        term: 'Point-value representation',
        kind: 'definition',
        statement: "Choose $n$ distinct points $x_0, \\ldots, x_{n-1}$ and store $\\{(x_k, y_k) : y_k = A(x_k)\\}$. Addition and multiplication of polynomials are **pointwise** — $\\Theta(n)$ each: the product $C = AB$ (degree bound $2n$) is represented by its values at $2n$ points.",
        detail: "Caveat: to multiply two degree-bound-$n$ polynomials you need $2n$ points, so both inputs must first be *padded* — zero-extended to degree bound $2n$ (adding zero coefficients changes nothing).",
      },
      {
        term: 'Uniqueness / interpolation',
        kind: 'theorem',
        statement: "**(Uniqueness of degree-bound-$n$ polynomials.)** A degree-bound-$n$ polynomial is uniquely determined by its values at any $n$ distinct points: the linear map from coefficients to values is given by the Vandermonde matrix $(x_k^j)$, which is invertible when the $x_k$ are distinct. Recovering the coefficients (**interpolation**) costs $\\Theta(n^2)$ by Lagrange's formula or Gaussian elimination.",
        detail: "Lagrange: $A(x) = \\sum_k y_k \\prod_{j \\ne k} \\frac{x - x_j}{x_k - x_j}$ — each basis polynomial is 1 at $x_k$ and 0 at the other points, so the sum visibly matches the data.",
      },
      {
        term: 'The cost ledger and the strategy',
        kind: 'method',
        statement: "Evaluate at $n$ points: $\\Theta(n^2)$ naively (or $\\Theta(n \\lg n)$ by FFT at the roots of unity). Pointwise multiply: $\\Theta(n)$. Interpolate: $\\Theta(n^2)$ (or $\\Theta(n \\lg n)$ by inverse FFT). Pipeline for $C = AB$: evaluate both, multiply pointwise, interpolate — $\\Theta(n^2) + \\Theta(n) + \\Theta(n^2)$ naively, or $\\Theta(n \\lg n)$ with FFTs.",
        detail: "The chapter's punchline: naive evaluation and interpolation are the *only* obstacles between us and near-linear multiplication; choosing the evaluation points to be roots of unity removes both at once (Section 30.2).",
      },
      {
        term: 'Horner’s rule for evaluation',
        kind: 'method',
        statement: 'Evaluate $A(x) = a_0 + a_1x + \\cdots + a_{n-1}x^{n-1}$ as $a_0 + x(a_1 + x(a_2 + \\cdots + x a_{n-1}))$: $n-1$ multiplies and adds, $\\Theta(n)$ per point, $\\Theta(n^2)$ for $n$ points. Point-value multiplication needs this $n$ times, hence $\\Theta(n^2)$ naive conversion.',
        detail: 'Horner is optimal for single-point evaluation (no method uses fewer operations on general coefficients), but evaluating at $n$ arbitrary points is still $\\Theta(n^2)$: the FFT beats it by choosing the points to be roots of unity.',
      },
    ],
    examples: [
      {
        title: 'Multiplication through point-value form',
        problem: "Multiply $A(x) = x^2 + 1$ and $B(x) = x + 2$ (degree bounds 3 and 3 after padding) using the values at $x = 0, 1, 2$.",
        steps: [
          { label: 'Step 1: Evaluate both at the points', text: "$A$: $(0,1), (1,2), (2,5)$. $B$: $(0,2), (1,3), (2,4)$. (Horner: $A(2) = (1 \\cdot 2 + 0)\\cdot 2 + 1 = 5$.)" },
          { label: 'Step 2: Multiply pointwise', text: "Product values: $(0, 1 \\cdot 2), (1, 2 \\cdot 3), (2, 5 \\cdot 4) = (0, 2), (1, 6), (2, 20)$ — three $\\Theta(1)$ multiplications." },
          { label: 'Step 3: Interpolate', text: "The product $C(x) = (x^2+1)(x+2) = x^3 + 2x^2 + x + 2$ is a cubic, so *these three points underdetermine it* — the honest pipeline needs $2n = 4$ points (padding the inputs to degree bound 4). Adding the value at $x = 3$: $A(3) = 10$, $B(3) = 5$, $C(3) = 50$; and indeed $27 + 18 + 3 + 2 = 50$ ✓." },
          { label: 'Step 4: Recover coefficients', text: "With 4 points $(2, 6, 20, 50)$ at $x = 0..3$, solving the Vandermonde system returns $C = (2, 1, 2, 1)$: $C(x) = x^3 + 2x^2 + x + 2$ ✓ — check at $x = 2$: $8 + 8 + 2 + 2 = 20$ ✓." },
        ],
        result: 'Pointwise multiplication is trivial; the cost lives entirely in evaluation and interpolation — exactly what the FFT accelerates.',
      },
      {
        title: 'Evaluating $1+2x+3x^2$ at three points',
        problem: 'Evaluate $A(x) = 1+2x+3x^2$ at $x = 0,1,2$ by Horner and count operations.',
        steps: [
          { label: 'Horner form', text: '$A(x) = 1 + x(2 + 3x)$: $2$ operations per point.' },
          { label: `$x = 0$`, text: '$1 + 0 \\cdot (2+0) = 1$.' },
          { label: `$x = 1$`, text: '$1 + 1 \\cdot (2+3) = 6$.' },
          { label: `$x = 2$`, text: '$1 + 2 \\cdot (2+6) = 17$. Three points $\\times 2$ ops $= 6$: $\\Theta(n^2)$ for $n = 3$; FFT does $n$ special points in $\\Theta(n \\lg n)$.' },
        ],
        result: 'Values $[1,6,17]$ in $6$ operations; $n$ arbitrary points cost $\\Theta(n^2)$, motivating the roots-of-unity shortcut.',
      },
    ],
    keyTakeaways: [
      "Coefficient form: $\\Theta(n)$ evaluation (Horner) and addition, $\\Theta(n^2)$ multiplication.",
      "Point-value form: $\\Theta(n)$ addition and multiplication — but the product of degree-bound-$n$ polynomials needs $2n$ points.",
      "Uniqueness: values at $n$ distinct points determine a degree-bound-$n$ polynomial (invertible Vandermonde).",
      "Pipeline evaluate → multiply pointwise → interpolate; FFT makes both ends $\\Theta(n \\lg n)$ instead of $\\Theta(n^2)$.",
    ],
    quiz: [
      {
        q: "Multiplying two degree-bound-$n$ polynomials purely in point-value form requires:",
        options: ["n points for each input", "2n distinct points, with inputs zero-padded to degree bound 2n", "n² points", "the points to include 0"],
        answer: 1,
        explanation: "The product has degree bound $2n-1$ (degree ≤ 2n−2), so 2n values are needed to pin it down; padding the operands with zero coefficients keeps their values unchanged.",
      },
      {
        q: "The map from coefficients to values at $n$ fixed distinct points is invertible because:",
        options: ["polynomials are continuous", "the Vandermonde matrix $(x_k^j)$ has nonzero determinant when the points are distinct", "evaluation is linear in the points", "Horner's rule is stable"],
        answer: 1,
        explanation: "det = product of pairwise differences $\\prod_{k<j}(x_j - x_k) \\ne 0$ — this is the uniqueness theorem that makes interpolation possible.",
      },
      {
        q: "In the multiplication pipeline with FFTs, the $\\Theta(n \\lg n)$ terms are:",
        options: ["the pointwise products", "evaluation and interpolation (two FFTs of size 2n and one inverse FFT)", "the padding step", "reading the input"],
        answer: 1,
        explanation: "Pointwise multiplication stays $\\Theta(n)$; the two transforms and the inverse transform carry the $\\Theta(n \\lg n)$ cost — still far below $\\Theta(n^2)$.",
      },
    ],
  },

  // ---------------------------------------------------------------- 30.2
  {
    sectionId: 'clrs-ch30-s2',
    readingTime: 8,
    intro: "Evaluate at special points — the complex roots of unity — and evaluation collapses into a divide-and-conquer recursion: the even and odd coefficients form half-size polynomials evaluated at the *squared* points, which by the halving lemma are again roots of unity, half as many. That single geometric fact is the entire engine of the $\\Theta(n \\lg n)$ FFT.",
    objectives: [
      "Define roots of unity and primitive roots; compute with them",
      "State the DFT as evaluation at the $n$th roots of unity",
      "Derive the FFT recurrence from the even/odd split of $A(x)$",
      "Invert the DFT by conjugating the roots and scaling by $1/n$",
    ],
    concepts: [
      {
        term: 'Roots of unity',
        kind: 'definition',
        statement: "A **complex $n$th root of unity** satisfies $\\omega^n = 1$. There are exactly $n$ of them: $\\omega_n^0, \\omega_n^1, \\ldots, \\omega_n^{n-1}$ for the **primitive** root $\\omega_n = e^{2\\pi i/n}$ — equally spaced points on the unit circle. Key identities: $\\omega_n^n = 1$, $\\omega_n^{n/2} = -1$, $\\omega_n^{k + n/2} = -\\omega_n^k$.",
        detail: "For $n = 8$: $\\omega_8 = \\frac{1+i}{\\sqrt 2}$; for $n = 4$: $\\omega_4 = i$. Powers repeat with period $n$ — exponents are understood modulo $n$.",
      },
      {
        term: 'The DFT',
        kind: 'definition',
        statement: "The **discrete Fourier transform** of $a = (a_0, \\ldots, a_{n-1})$ is $y = \\mathrm{DFT}_n(a)$ with $y_k = \\sum_{j=0}^{n-1} a_j \\omega_n^{jk} = A(\\omega_n^k)$ — the values of $A$ at *all $n$ roots of unity*.",
        detail: "Matrix form: $y = V a$ with the Vandermonde matrix $V_{kj} = \\omega_n^{jk}$. The DFT is nothing but evaluation at these particular $n$ points — chosen so that evaluation has a fast algorithm.",
      },
      {
        term: 'The FFT recurrence',
        kind: 'method',
        statement: "Split $A(x) = A^{[0]}(x^2) + x A^{[1]}(x^2)$, where $A^{[0]}$ collects the even-position coefficients and $A^{[1]}$ the odd ones (degree bound $n/2$ each). Then for $k = 0, \\ldots, n/2 - 1$:\n$$y_k = A(\\omega_n^k) = A^{[0]}(\\omega_n^{2k}) + \\omega_n^k A^{[1]}(\\omega_n^{2k}), \\qquad y_{k+n/2} = A^{[0]}(\\omega_n^{2k}) - \\omega_n^k A^{[1]}(\\omega_n^{2k}).$$\nThe two half-size problems are DFTs of length $n/2$ (since $(\\omega_n^k)^2 = \\omega_{n/2}^k$), so $T(n) = 2T(n/2) + \\Theta(n) = \\Theta(n \\lg n)$.",
        detail: "The second line is the first with $\\omega_n^{k+n/2} = -\\omega_n^k$ — one complex multiplication $\\omega_n^k \\cdot A^{[1]}(\\ldots)$ feeds both outputs: the *butterfly*. RECURSIVE-FFT: split, recurse on $y^{[0]} = \\mathrm{FFT}(a^{[0]})$ and $y^{[1]} = \\mathrm{FFT}(a^{[1]})$, combine with the two-line loop.",
      },
      {
        term: 'The inverse transform',
        kind: 'theorem',
        statement: "$a = \\mathrm{DFT}_n^{-1}(y)$ is computed by $a_j = \\frac{1}{n} \\sum_{k=0}^{n-1} y_k \\omega_n^{-jk}$: run the same FFT algorithm with $\\omega_n$ replaced by $\\omega_n^{-1}$ and divide every result by $n$.",
        detail: "The proof is a Vandermonde inverse computation: $V^{-1} = \\frac{1}{n}$ times the matrix with entries $\\omega_n^{-jk}$ — the conjugate roots. Interpolation is thus the *same algorithm* as evaluation.",
      },
      {
        term: 'Why roots of unity and not, say, 1..n',
        kind: 'insight',
        statement: "The recursion needs the squared evaluation points of the children to form *one* half-size set, not two overlapping ones. Squaring the $n$ roots of unity yields exactly the $n/2$ roots of unity of order $n/2$, each hit exactly twice (halving lemma) — any other choice of points scatters into $2n$ distinct values and the recursion never shrinks.",
        detail: "This is the design decision that makes the whole chapter work — the masters tier below proves it carefully.",
      },
    ],
    figures: [
      {
        caption: 'The halving lemma on the unit circle ($n = 8$): the eight 8th roots $\\omega_8^k$ (dots) square onto the four 4th roots — the ringed points $\\omega_8^{2j} = \\omega_4^j$ — each hit exactly twice: $(\\omega_8^{k+4})^2 = \\omega_8^{2k}$ since $\\omega_8^{2k+8} = \\omega_8^{2k}$. Amber arcs show $\\omega_8^5 \\mapsto \\omega_8^{10} = \\omega_8^2$, $\\omega_8^3 \\mapsto \\omega_8^6$, $\\omega_8^1 \\mapsto \\omega_8^2$… squaring doubles the angle. The right circle is the induced half-size problem: $A^{[0]}$ and $A^{[1]}$ are evaluated at just the 4th roots, exactly as a length-4 DFT requires.',
        svg: '<svg viewBox="0 0 720 360" width="100%" role="img" aria-label="Squaring the 8th roots of unity folds them onto the 4th roots"><text x="20" y="26" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" font-weight="600">Squaring folds the 8th roots onto the 4th roots</text><circle cx="210" cy="190" r="120" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="210" cy="190" r="3" fill="currentColor"/><path d="M 294.85 105.15 Q 275 32.8 214 68" fill="none" stroke="#f59e0b" stroke-width="1.8"/><polygon points="214,70 224,64 220,74" fill="#f59e0b"/><path d="M 125.15 105.15 Q 34.5 262.7 206 306" fill="none" stroke="#f59e0b" stroke-width="1.8"/><polygon points="208,308 197,300 208,296" fill="#f59e0b"/><path d="M 125.15 274.85 Q 25.2 113.5 206 76" fill="none" stroke="#f59e0b" stroke-width="1.8"/><polygon points="208,74 198,68 208,64" fill="#f59e0b"/><g fill="currentColor"><circle cx="294.85" cy="105.15" r="4"/><circle cx="125.15" cy="105.15" r="4"/><circle cx="125.15" cy="274.85" r="4"/><circle cx="294.85" cy="274.85" r="4"/></g><g fill="none" stroke="#14b8a6" stroke-width="2.2"><circle cx="330" cy="190" r="7"/><circle cx="210" cy="70" r="7"/><circle cx="90" cy="190" r="7"/><circle cx="210" cy="310" r="7"/></g><g fill="currentColor"><circle cx="330" cy="190" r="3.5"/><circle cx="210" cy="70" r="3.5"/><circle cx="90" cy="190" r="3.5"/><circle cx="210" cy="310" r="3.5"/></g><g font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor"><text x="302" y="98">ω₈¹</text><text x="118" y="98">ω₈³</text><text x="112" y="292">ω₈⁵</text><text x="302" y="292">ω₈⁷</text><text x="342" y="182">ω₈⁰ = ω₄⁰</text><text x="226" y="62">ω₈² = ω₄¹</text><text x="66" y="182">ω₈⁴ = ω₄²</text><text x="226" y="328">ω₈⁶ = ω₄³</text></g><text x="150" y="135" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="#f59e0b" text-anchor="middle">(ω₈⁵)² = ω₈²</text><text x="150" y="252" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="#f59e0b" text-anchor="middle">(ω₈³)² = ω₈⁶</text><polygon points="448,190 440,185.5 440,194.5" fill="currentColor"/><line x1="352" y1="190" x2="446" y2="190" stroke="currentColor" stroke-width="1.6"/><text x="400" y="182" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" text-anchor="middle">substitute x²</text><circle cx="555" cy="190" r="95" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="555" cy="190" r="3" fill="currentColor"/><g fill="currentColor"><circle cx="650" cy="190" r="4"/><circle cx="555" cy="95" r="4"/><circle cx="460" cy="190" r="4"/><circle cx="555" cy="285" r="4"/></g><g stroke="#14b8a6" fill="none" stroke-width="1.4"><circle cx="650" cy="190" r="6.5"/><circle cx="555" cy="95" r="6.5"/><circle cx="460" cy="190" r="6.5"/><circle cx="555" cy="285" r="6.5"/></g><g font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" text-anchor="middle"><text x="650" y="172">ω₄⁰</text><text x="573" y="90">ω₄¹</text><text x="460" y="172">ω₄²</text><text x="573" y="300">ω₄³</text></g><text x="555" y="330" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.8">the half-size problem: A⁽⁰⁾(x²), A⁽¹⁾(x²) at n/2 points</text></svg>',
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: 'A 4-point DFT by hand, via the even/odd split',
        problem: "Compute $y = \\mathrm{DFT}_4(1, 2, 3, 4)$ — the values of $A(x) = 1 + 2x + 3x^2 + 4x^3$ at $\\omega_4^k = 1, i, -1, -i$ — using the FFT recurrence.",
        steps: [
          { label: 'Step 1: Split into even and odd', text: "Even-position coefficients: $a^{[0]} = (1, 3)$, i.e. $A^{[0]}(x) = 1 + 3x$; odd: $a^{[1]} = (2, 4)$, i.e. $A^{[1]}(x) = 2 + 4x$. Then $A(x) = A^{[0]}(x^2) + x A^{[1]}(x^2)$." },
          { label: 'Step 2: Two base-case DFTs of length 2', text: "With $\\omega_2 = -1$: $y^{[0]} = (A^{[0]}(1), A^{[0]}(-1)) = (4, -2)$; $y^{[1]} = (A^{[1]}(1), A^{[1]}(-1)) = (6, -2)$." },
          { label: 'Step 3: Butterfly combine with $\\omega_4^0 = 1$, $\\omega_4^1 = i$', text: "$y_0 = 4 + 1 \\cdot 6 = 10$; $y_2 = 4 - 1 \\cdot 6 = -2$; $y_1 = -2 + i(-2) = -2 - 2i$; $y_3 = -2 - i(-2) = -2 + 2i$." },
          { label: 'Step 4: Verify directly', text: "$A(i) = 1 + 2i + 3i^2 + 4i^3 = 1 + 2i - 3 - 4i = -2 - 2i$ ✓ and $A(1) = 10$, $A(-1) = -2$, $A(-i) = -2+2i$ ✓." },
        ],
        result: "$y = (10,\\ -2-2i,\\ -2,\\ -2+2i)$ — five complex multiplies at this size, $\\frac{n}{2}\\lg n$ in general.",
      },
      {
        title: 'Inverse FFT scaling by $1/n$',
        problem: 'DFT of $[1,1,1,1]$ is $[4,0,0,0]$. Invert with $\\omega^{-1}$ and $1/4$ scaling.',
        steps: [
          { label: 'Forward', text: '$A = [1,1,1,1]$: $\\hat A_0 = 4$, $\\hat A_{1,2,3} = 0$ (roots sum to $0$).' },
          { label: 'Inverse roots', text: 'Use $\\omega^{-1} = \\bar\\omega$: same butterfly with conjugated twiddles: FFT$([4,0,0,0])$ with $\\omega^{-1}$ gives $[4,4,4,4]$.' },
          { label: 'Scale', text: 'Divide by $n = 4$: $[1,1,1,1]$ recovered. Forgetting $1/n$ returns $nA$, the classic inverse-FFT bug.' },
          { label: 'Cost', text: 'Forward $\\Theta(n \\lg n)$ + inverse $\\Theta(n \\lg n)$ + pointwise $\\Theta(n)$: multiplication in $\\Theta(n \\lg n)$ total.' },
        ],
        result: 'Inverse yields $[4,4,4,4]/4 = [1,1,1,1]$; $1/n$ scaling is what makes FFT$^{-1}$(FFT($A$)) $= A$.',
      },
    ],
    keyTakeaways: [
      "The primitive root $\\omega_n = e^{2\\pi i/n}$ generates $n$ equally spaced roots of unity on the unit circle; $\\omega_n^{n/2} = -1$.",
      "DFT = evaluation at all $n$ roots of unity: $y_k = \\sum_j a_j \\omega_n^{jk}$ — a Vandermonde product.",
      "FFT splits even/odd coefficients, evaluates them at the *squared* roots (a half-size DFT by the halving lemma), and combines with one butterfly per output pair: $\\Theta(n \\lg n)$.",
      "The inverse DFT is the same algorithm on $\\omega_n^{-1}$ with a final division by $n$.",
    ],
    quiz: [
      {
        q: "The DFT of a coefficient vector $a$ equals the values of $A(x)$ at the points:",
        options: ["$x = 0, 1, \\ldots, n-1$", "the $n$ complex $n$th roots of unity $\\omega_n^k$", "the integers modulo $n$", "the powers of 2"],
        answer: 1,
        explanation: "$y_k = A(\\omega_n^k)$ — evaluation at $\\omega_n^0, \\ldots, \\omega_n^{n-1}$, the choice that makes the halving recursion collapse.",
      },
      {
        q: "In the FFT combine step, $y_{k+n/2}$ differs from $y_k$ by:",
        options: ["a factor of 2", "the sign of the odd-polynomial term: $y_{k+n/2} = A^{[0]}((\\omega_n^k)^2) - \\omega_n^k A^{[1]}((\\omega_n^k)^2)$", "complex conjugation only", "nothing — they are equal"],
        answer: 1,
        explanation: "Since $\\omega_n^{k+n/2} = -\\omega_n^k$ while the squared arguments coincide, the two outputs share $A^{[0]}$ and the $\\omega A^{[1]}$ term flips sign — the butterfly.",
      },
      {
        q: "To compute the inverse DFT with the same FFT code, you:",
        options: ["reverse the input array", "run it with $\\omega_n^{-1}$ in place of $\\omega_n$ and divide all outputs by $n$", "run it twice", "transpose the input first"],
        answer: 1,
        explanation: "The inverse Vandermonde is the conjugate root matrix scaled by $1/n$: interpolation becomes evaluation at conjugate points plus one scalar division.",
      },
      {
        q: "Why must the FFT's recursion depth be exactly $\\lg n$ (power-of-two sizes)?",
        options: ["complex numbers require it", "each level halves the number of evaluation points, and the halving lemma produces exactly $n/2$ squared roots only for even $n$ — the book assumes $n$ a power of 2 (padding otherwise)", "to keep the butterfly symmetric", "to avoid overflow"],
        answer: 1,
        explanation: "Squaring the $n$th roots yields $n/2$ points only when $n$ is even; halving repeatedly forces $n$ to be a power of two — smaller problems pad with zeros.",
      },
    ],
    depth: [
      {
        tier: 'masters',
        title: 'FFT correctness via the halving lemma',
        blocks: [
          {
            kind: 'para',
            body: "The FFT's correctness is often taken on faith because the algebra looks like bookkeeping. It is worth proving once, cleanly, because the entire $\\Theta(n \\lg n)$ edifice — multiplication of polynomials, convolution of signals — rests on one lemma about the geometry of roots of unity. We prove that the recursive combine step of RECURSIVE-FFT computes exactly $\\mathrm{DFT}_n(a)$.",
          },
          {
            kind: 'theorem',
            heading: 'Halving lemma',
            body: "If $n \\ge 1$ is even, the squares of the $n$ complex $n$th roots of unity are the $n/2$ complex $(n/2)$th roots of unity, each occurring exactly twice: $\\{ (\\omega_n^k)^2 : k = 0, \\ldots, n-1 \\} = \\{ \\omega_{n/2}^j : j = 0, \\ldots, n/2 - 1 \\}$ with $k$ and $k + n/2$ yielding the same square.",
          },
          {
            kind: 'proof',
            body: "Fix $k$. First, $(\\omega_n^k)^2 = \\omega_n^{2k}$, and using $\\omega_n = e^{2\\pi i/n}$, $\\omega_n^{2k} = e^{4 \\pi i k / n} = e^{2 \\pi i k / (n/2)} = \\omega_{n/2}^k$ (the *cancellation lemma*: $\\omega_{dn}^{dk} = \\omega_n^k$). Second, $k$ and $k + n/2$ collide: $(\\omega_n^{k+n/2})^2 = \\omega_n^{2k} \\cdot \\omega_n^n = \\omega_n^{2k} \\cdot 1 = (\\omega_n^k)^2$. So the squaring map sends the $n$ roots onto at most $n/2$ values, and the values $\\omega_{n/2}^k$ for $k = 0, \\ldots, n/2-1$ are all distinct (they are powers of a primitive $(n/2)$th root) — each is hit exactly twice. $\\blacksquare$",
          },
          {
            kind: 'theorem',
            heading: 'FFT correctness',
            body: "For even $n$, let $a^{[0]}$ and $a^{[1]}$ be the even- and odd-indexed halves of $a$, and let $y^{[0]} = \\mathrm{DFT}_{n/2}(a^{[0]})$, $y^{[1]} = \\mathrm{DFT}_{n/2}(a^{[1]})$. Then for $k = 0, \\ldots, n/2 - 1$ the combine step produces $$y_k = y^{[0]}_k + \\omega_n^k y^{[1]}_k, \\qquad y_{k+n/2} = y^{[0]}_k - \\omega_n^k y^{[1]}_k,$$ and this vector equals $\\mathrm{DFT}_n(a)$.",
          },
          {
            kind: 'proof',
            body: "Factor $A(x) = \\sum_j a_j x^j = \\sum_j a_{2j} x^{2j} + x \\sum_j a_{2j+1} x^{2j} = A^{[0]}(x^2) + x A^{[1]}(x^2)$ — splitting by the parity of $j$; both $A^{[0]}$ and $A^{[1]}$ have degree bound $n/2$. Evaluate at $x = \\omega_n^k$ for $0 \\le k < n/2$. By the halving lemma $(\\omega_n^k)^2 = \\omega_{n/2}^k$, so\n$$A(\\omega_n^k) = A^{[0]}\\big(\\omega_{n/2}^k\\big) + \\omega_n^k\\, A^{[1]}\\big(\\omega_{n/2}^k\\big) = y^{[0]}_k + \\omega_n^k\\, y^{[1]}_k,$$\nexactly the definition of the length-$n/2$ DFT outputs at index $k$. For the upper half, $\\omega_n^{k+n/2} = \\omega_n^k \\cdot \\omega_n^{n/2} = -\\omega_n^k$ while the squared argument is unchanged — the *same* halving-lemma collapse $(\\omega_n^{k+n/2})^2 = (\\omega_n^k)^2 = \\omega_{n/2}^k$ — giving\n$$A(\\omega_n^{k+n/2}) = A^{[0]}\\big(\\omega_{n/2}^k\\big) - \\omega_n^k\\, A^{[1]}\\big(\\omega_{n/2}^k\\big) = y^{[0]}_k - \\omega_n^k\\, y^{[1]}_k.$$\nNo other values of $A$ are needed: the $n$ evaluation points split into two groups whose squares coincide in pairs, so the two length-$(n/2)$ DFTs supply every required value. Induction on $n$ (base: $\\mathrm{DFT}_1(a) = a$) completes the proof. $\\blacksquare$",
          },
          {
            kind: 'remark',
            body: "Notice what the lemma bought twice. First, well-foundedness: the children need evaluation at only $n/2$ points, because the parents' $n$ points square down onto them — a different choice of evaluation points would generally produce $2n$ distinct squares and the recursion would *grow*. Second, the butterfly: the two outputs $y_k, y_{k+n/2}$ share both child values, so one complex multiplication $\\omega_n^k y^{[1]}_k$ serves both — this pairing is exactly where the factor-of-two savings per level lives, giving $T(n) = 2T(n/2) + \\Theta(n) = \\Theta(n \\lg n)$.",
          },
          {
            kind: 'application',
            heading: 'Consequences that follow for free',
            body: "With correctness in hand: (1) the inverse DFT is the same recursion with $\\omega_n^{-1}$, because the proof only ever used $\\omega_n^{2k} = \\omega_{n/2}^k$ and $\\omega_n^{n/2} = -1$, both of which hold for the conjugate root $\\omega_n^{-1}$ as well; (2) polynomial multiplication follows by the pipeline of Section 30.1 — evaluate at the $2n$ roots of unity, multiply pointwise, interpolate — all three stages $\\Theta(n \\lg n)$; (3) the same identity powers the convolution theorem of Section 30.3 and every FFT-based signal-processing pipeline built on it.",
          },
        ],
      },
    ],
  },

  // ---------------------------------------------------------------- 30.3
  {
    sectionId: 'clrs-ch30-s3',
    readingTime: 7,
    intro: "The recursive FFT hides a beautiful pattern: the leaves of the recursion arrive in *bit-reversed* index order. Unrolling the recursion into loops over stages of butterflies yields the iterative, in-place FFT — the version that actually runs on hardware, with no recursion overhead and no extra memory.",
    objectives: [
      "Compute the bit-reversal permutation and explain why the recursion produces it",
      "Trace ITERATIVE-FFT: stages, blocks, butterflies",
      "Invert the FFT and state the convolution theorem",
      "Explain why the iterative version is the implementation of choice",
    ],
    concepts: [
      {
        term: 'Bit-reversal permutation',
        kind: 'definition',
        statement: "For $n = 2^{\\lg n}$ a power of two, $\\mathrm{REV}_n(k)$ reverses the $\\lg n$ bits of $k$: e.g. for $n = 8$ (3 bits) $\\mathrm{REV}(001) = 100$, giving the order $0, 4, 2, 6, 1, 5, 3, 7$.",
        detail: "Where it comes from: each recursion level splits by the *low* bit of the index (even/odd) but keeps halves by the high bit. After $\\lg n$ levels, the element at input position $k$ sits in the leaf labeled by $k$'s bits read backwards. The book's BIT-REVERSE-COPY scatters the input into this order first.",
      },
      {
        term: 'The iterative FFT',
        kind: 'method',
        statement: "ITERATIVE-FFT: after the bit-reversal copy, loop $s = 1$ to $\\lg n$ with block size $m = 2^s$ and root $\\omega_m = \\omega_n^{n/m}$; within each block, each butterfly at offset $k$ computes $t = \\omega_m^k \\cdot x[k + m/2]$, then $x[k] \\mathrel{+}= t$, $x[k+m/2] \\mathrel{-}= t$ — all in place, arrays only.",
        detail: "Stage $s$ performs exactly the butterflies the recursion's combine step would do at height $s$: the same $\\Theta(n \\lg n)$ arithmetic with zero function-call overhead and perfect locality within a block.",
      },
      {
        term: 'The butterfly',
        kind: 'notation',
        statement: "The 2-in/2-out gadget $\\begin{pmatrix} u' \\\\ v' \\end{pmatrix} = \\begin{pmatrix} 1 & \\omega \\\\ 1 & -\\omega \\end{pmatrix} \\begin{pmatrix} u \\\\ v \\end{pmatrix}$ — one complex multiply, one add, one subtract. The full FFT is $\\frac{n}{2} \\lg n$ butterflies arranged in $\\lg n$ stages.",
        detail: "The factor $\\omega$ is a *twiddle factor*: at stage $s$, butterfly $k$ of a block uses $\\omega_m^k$ — a power of $\\omega_8$ for the last stage of an 8-point transform, and so on down.",
      },
      {
        term: 'The inverse FFT and the convolution theorem',
        kind: 'theorem',
        statement: "Replacing $\\omega$ by $\\omega^{-1}$ in every butterfly and dividing the final array by $n$ inverts the transform. **Convolution theorem:** for vectors $a, b$ padded to length $n \\ge$ sum of degrees + 1: $a \\otimes b = \\mathrm{DFT}^{-1}(\\mathrm{DFT}(a) \\cdot \\mathrm{DFT}(b))$ — polynomial multiplication, big-integer multiplication, and signal filtering all in $\\Theta(n \\lg n)$.",
        detail: "The pointwise product of transforms is the transform of the coefficient convolution — the identity that Section 30.1's pipeline operationalizes.",
      },
      {
        term: 'Engineering notes',
        kind: 'insight',
        statement: "The iterative FFT needs no stack, touches memory in progressively larger strides, and admits vectorization and parallelization (each stage's butterflies are independent — the multithreaded FFT of Chapter 27 is a natural sequel).",
        detail: "Real implementations precompute twiddle-factor tables once per $n$ and reuse them across transforms — the trig evaluation is more expensive than the butterfly arithmetic itself.",
      },
    ],
    figures: [
      {
        caption: 'The 8-point iterative FFT as three stages of butterflies ($\\lg 8 = 3$). Inputs enter in **bit-reversed order** — $a_0, a_4, a_2, a_6, a_1, a_5, a_3, a_7$ — because each recursion level splits on the low bit while the halves are indexed by the high bit. Straight wires carry the sum output, amber crossings carry the $\\omega$-weighted path: each butterfly computes $x_k + \\omega_m^k x_{k+m/2}$ and $x_k - \\omega_m^k x_{k+m/2}$. Stage 1 uses $\\omega_2^0$ (plain subtraction), stage 2 the fourth roots ($\\omega_4^0 = 1$, $\\omega_4^1 = i$), stage 3 the eighth roots $\\omega_8^0 \\ldots \\omega_8^3$. Outputs emerge in natural order $y_0 \\ldots y_7$.',
        svg: '<svg viewBox="0 0 720 420" width="100%" role="img" aria-label="Eight point FFT butterfly network with bit-reversed input order"><text x="20" y="24" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" font-weight="600">8-point FFT: 3 stages of butterflies, input bit-reversed</text><g font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" text-anchor="middle" font-weight="600"><text x="175" y="46">stage s = 1 (m = 2)</text><text x="345" y="46">stage s = 2 (m = 4)</text><text x="535" y="46">stage s = 3 (m = 8)</text></g><g stroke="currentColor" stroke-width="1.1" opacity="0.55"><line x1="100" y1="70" x2="250" y2="70"/><line x1="100" y1="115" x2="250" y2="115"/><line x1="100" y1="160" x2="250" y2="160"/><line x1="100" y1="205" x2="250" y2="205"/><line x1="100" y1="250" x2="250" y2="250"/><line x1="100" y1="295" x2="250" y2="295"/><line x1="100" y1="340" x2="250" y2="340"/><line x1="100" y1="385" x2="250" y2="385"/><line x1="250" y1="70" x2="440" y2="70"/><line x1="250" y1="115" x2="440" y2="115"/><line x1="250" y1="160" x2="440" y2="160"/><line x1="250" y1="205" x2="440" y2="205"/><line x1="250" y1="250" x2="440" y2="250"/><line x1="250" y1="295" x2="440" y2="295"/><line x1="250" y1="340" x2="440" y2="340"/><line x1="250" y1="385" x2="440" y2="385"/><line x1="440" y1="70" x2="630" y2="70"/><line x1="440" y1="115" x2="630" y2="115"/><line x1="440" y1="160" x2="630" y2="160"/><line x1="440" y1="205" x2="630" y2="205"/><line x1="440" y1="250" x2="630" y2="250"/><line x1="440" y1="295" x2="630" y2="295"/><line x1="440" y1="340" x2="630" y2="340"/><line x1="440" y1="385" x2="630" y2="385"/></g><g stroke="#f59e0b" stroke-width="1.3"><line x1="100" y1="70" x2="250" y2="115"/><line x1="100" y1="115" x2="250" y2="70"/><line x1="100" y1="160" x2="250" y2="205"/><line x1="100" y1="205" x2="250" y2="160"/><line x1="100" y1="250" x2="250" y2="295"/><line x1="100" y1="295" x2="250" y2="250"/><line x1="100" y1="340" x2="250" y2="385"/><line x1="100" y1="385" x2="250" y2="340"/><line x1="250" y1="70" x2="440" y2="160"/><line x1="250" y1="160" x2="440" y2="70"/><line x1="250" y1="115" x2="440" y2="205"/><line x1="250" y1="205" x2="440" y2="115"/><line x1="250" y1="250" x2="440" y2="340"/><line x1="250" y1="340" x2="440" y2="250"/><line x1="250" y1="295" x2="440" y2="385"/><line x1="250" y1="385" x2="440" y2="295"/><line x1="440" y1="70" x2="630" y2="250"/><line x1="440" y1="250" x2="630" y2="70"/><line x1="440" y1="115" x2="630" y2="295"/><line x1="440" y1="295" x2="630" y2="115"/><line x1="440" y1="160" x2="630" y2="340"/><line x1="440" y1="340" x2="630" y2="160"/><line x1="440" y1="205" x2="630" y2="385"/><line x1="440" y1="385" x2="630" y2="205"/></g><g font-family="ui-sans-serif, system-ui" font-size="10" fill="#f59e0b" text-anchor="middle"><text x="175" y="98">×ω₂⁰ = ×1</text><text x="175" y="188">×ω₂⁰</text><text x="175" y="278">×ω₂⁰</text><text x="175" y="368">×ω₂⁰</text><text x="345" y="120">×ω₄⁰ = 1</text><text x="345" y="165">×ω₄¹ = i</text><text x="345" y="300">×ω₄⁰</text><text x="345" y="345">×ω₄¹</text><text x="535" y="165">×ω₈⁰</text><text x="535" y="210">×ω₈¹</text><text x="535" y="255">×ω₈²</text><text x="535" y="300">×ω₈³</text></g><g fill="currentColor"><circle cx="100" cy="70" r="3.5"/><circle cx="100" cy="115" r="3.5"/><circle cx="100" cy="160" r="3.5"/><circle cx="100" cy="205" r="3.5"/><circle cx="100" cy="250" r="3.5"/><circle cx="100" cy="295" r="3.5"/><circle cx="100" cy="340" r="3.5"/><circle cx="100" cy="385" r="3.5"/><circle cx="250" cy="70" r="3.5"/><circle cx="250" cy="115" r="3.5"/><circle cx="250" cy="160" r="3.5"/><circle cx="250" cy="205" r="3.5"/><circle cx="250" cy="250" r="3.5"/><circle cx="250" cy="295" r="3.5"/><circle cx="250" cy="340" r="3.5"/><circle cx="250" cy="385" r="3.5"/><circle cx="440" cy="70" r="3.5"/><circle cx="440" cy="115" r="3.5"/><circle cx="440" cy="160" r="3.5"/><circle cx="440" cy="205" r="3.5"/><circle cx="440" cy="250" r="3.5"/><circle cx="440" cy="295" r="3.5"/><circle cx="440" cy="340" r="3.5"/><circle cx="440" cy="385" r="3.5"/><circle cx="630" cy="70" r="3.5"/><circle cx="630" cy="115" r="3.5"/><circle cx="630" cy="160" r="3.5"/><circle cx="630" cy="205" r="3.5"/><circle cx="630" cy="250" r="3.5"/><circle cx="630" cy="295" r="3.5"/><circle cx="630" cy="340" r="3.5"/><circle cx="630" cy="385" r="3.5"/></g><g font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor" text-anchor="end"><text x="92" y="74">a₀ (000)</text><text x="92" y="119">a₄ (100)</text><text x="92" y="164">a₂ (010)</text><text x="92" y="209">a₆ (110)</text><text x="92" y="254">a₁ (001)</text><text x="92" y="299">a₅ (101)</text><text x="92" y="344">a₃ (011)</text><text x="92" y="389">a₇ (111)</text></g><g font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor"><text x="642" y="74">y₀</text><text x="642" y="119">y₁</text><text x="642" y="164">y₂</text><text x="642" y="209">y₃</text><text x="642" y="254">y₄</text><text x="642" y="299">y₅</text><text x="642" y="344">y₆</text><text x="642" y="389">y₇</text></g><text x="92" y="408" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" opacity="0.8">bit-reversed in</text><text x="648" y="408" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" opacity="0.8">natural out</text></svg>',
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'Bit-reversal, by hand',
        problem: "Compute the bit-reversal permutation for $n = 8$ and verify where $a_3$ lands.",
        steps: [
          { label: 'Step 1: Write 3-bit indices', text: "$0..7$ in binary: 000, 001, 010, 011, 100, 101, 110, 111." },
          { label: 'Step 2: Reverse each', text: "000→000 (0), 001→100 (4), 010→010 (2), 011→110 (6), 100→001 (1), 101→101 (5), 110→011 (3), 111→111 (7). The order: $0, 4, 2, 6, 1, 5, 3, 7$." },
          { label: 'Step 3: Track $a_3$ through the recursion', text: "$3 = 011$ is odd, so the first split sends $a_3$ right; its half index $1 = 01$ is odd again — right; then $0$ — left. Path R-R-L: the leaf position is $100_2 = 4$… read the path bits as they accumulate high-to-low: odd, odd, even = $110 = 6$? Careful: each level contributes the *current low bit* of the index — 1, then 1, then 0 — which assemble into the leaf label read as (first-split bit = most significant) $110_2 = 6$." },
          { label: 'Step 4: Confirm', text: "REV(3): $011 \\to 110 = 6$ ✓. So $a_3$ is copied to array slot 6 — matching the input column of the figure." },
        ],
        result: 'BIT-REVERSE-COPY puts $a_k$ into slot $\\mathrm{REV}(k)$; the butterfly stages then overwrite the array in place into natural order.',
      },
      {
        title: 'Multiplying polynomials with the convolution theorem',
        problem: "Use the pipeline to multiply $A = (1, 2, 3, 4)$ (i.e. $1 + 2x + 3x^2 + 4x^3$) by $B = (0, 1, 0, 0)$ (i.e. $x$).",
        steps: [
          { label: 'Step 1: Pad', text: "The product has degree bound $8 - 1 = 7$? Degrees: $3 + 1 = 4$, so degree bound $5$ suffices — round up to a power of two: 8. Both padded to length 8." },
          { label: 'Step 2: Transform', text: "$y = \\mathrm{DFT}_8(a)$: the values of $A$ at all 8th roots of unity; $y' = \\mathrm{DFT}_8(b)$: the values of $x$, i.e. $\\omega_8^k$ themselves." },
          { label: 'Step 3: Pointwise multiply', text: "$y''_k = y_k \\cdot \\omega_8^k$ — the values of $A(x) \\cdot x$ at the 8th roots (since $(A \\cdot B)(\\omega_8^k) = A(\\omega_8^k) \\cdot \\omega_8^k$)." },
          { label: 'Step 4: Inverse transform', text: "$\\mathrm{IDFT}_8(y'')$ returns the coefficients of $x + 2x^2 + 3x^3 + 4x^4$ — the shift by one that multiplication by $x$ performs. Total: three $\\Theta(n \\lg n)$ transforms and $n$ multiplies." },
        ],
        result: 'The convolution theorem turns coefficient multiplication into pointwise multiplication — the reason the FFT ends up inside every signal processor and bignum library.',
      },
    ],
    keyTakeaways: [
      "Unrolling the recursion: inputs enter in bit-reversed order because levels split on the low bit while halves are indexed by the high bit.",
      "ITERATIVE-FFT: bit-reversal copy, then $\\lg n$ stages of $n/2$ butterflies each, twiddle factors $\\omega_m^k$ per stage — in place, no recursion.",
      "Inverse FFT: swap $\\omega \\leftrightarrow \\omega^{-1}$, divide by $n$; the same code serves both directions.",
      "Convolution theorem: $\\mathrm{DFT}^{-1}(\\mathrm{DFT}(a) \\cdot \\mathrm{DFT}(b))$ multiplies polynomials in $\\Theta(n \\lg n)$.",
      "$\\frac{n}{2} \\lg n$ butterflies = the entire arithmetic of an FFT — engineering effort goes to twiddle tables and memory layout.",
    ],
    quiz: [
      {
        q: "In the iterative 8-point FFT, the element $a_1$ (binary 001) is first copied to the array slot:",
        options: ["1 (no move)", "4 (binary 100)", "2 (binary 010)", "7"],
        answer: 1,
        explanation: "REV reverses the 3 bits: 001 becomes 100 = 4 — bit-reversal copy places $a_1$ in slot 4, next to $a_0$.",
      },
      {
        q: "Stage $s$ of ITERATIVE-FFT uses butterflies of width $m = 2^s$ with twiddle factor for offset $k$:",
        options: ["$\\omega_n^k$", "$\\omega_m^k$ (a $2^s$-th root)", "$\\omega_n^{n/m}$ for every butterfly", "$1$ always"],
        answer: 1,
        explanation: "Each stage's butterflies need only the $m$th roots; $\\omega_m = \\omega_n^{n/m}$, and butterfly $k$ of a block uses $\\omega_m^k$ — the smaller roots come for free as powers of the big one.",
      },
      {
        q: "The convolution theorem states that polynomial multiplication equals:",
        options: ["convolving the two DFTs", "the inverse DFT of the pointwise product of the two DFTs (after padding)", "the pointwise product of the two coefficient vectors", "the sum of the two transforms"],
        answer: 1,
        explanation: "Values of the product = products of values: transform both, multiply pointwise, transform back — $\\Theta(n \\lg n)$ end to end.",
      },
      {
        q: "The advantage of the iterative FFT over the recursive one is:",
        options: ["better asymptotic complexity", "in-place operation with no recursion overhead — same $\\Theta(n \\lg n)$ count, but practical speed and locality", "it avoids complex arithmetic", "it does not need powers of two"],
        answer: 1,
        explanation: "The butterfly arithmetic is identical; eliminating the call stack, enabling bit-reversal preprocessing and stage-local memory access is what implementations actually gain.",
      },
    ],
  },
]
