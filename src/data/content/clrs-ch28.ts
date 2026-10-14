import type { SectionContent } from '../library'

// ============================================================================
// CLRS — Introduction to Algorithms, 3rd Edition
// Chapter 28: Matrix Operations (Sections 28.1 – 28.3)
// ============================================================================

export const clrsCh28Content: SectionContent[] = [
  // ---------------------------------------------------------------- 28.1
  {
    sectionId: 'clrs-ch28-s1',
    readingTime: 8,
    intro: "Solving $Ax = b$ by Gaussian elimination is the oldest algorithm on this shelf and still the workhorse of scientific computing. Its modern form — factor once into $LUP$, then solve triangular systems — costs $\\Theta(n^3)$ once and $\\Theta(n^2)$ per right-hand side, and pivoting makes it work for every nonsingular matrix.",
    objectives: [
      "Perform forward and back substitution on triangular systems",
      "Compute an LU decomposition and explain when it exists",
      "Describe LUP decomposition with pivoting and why it always exists for nonsingular $A$",
      "Analyze the costs: $\\Theta(n^3)$ to factor, $\\Theta(n^2)$ per solve",
    ],
    concepts: [
      {
        term: 'Forward and back substitution',
        kind: 'method',
        statement: "If $L$ is lower triangular, $Ly = b$ solves top-down: $y_i = \\big(b_i - \\sum_{j<i} \\ell_{ij} y_j\\big) / \\ell_{ii}$. If $U$ is upper triangular, $Ux = y$ solves bottom-up analogously. Each costs $\\Theta(n^2)$.",
        detail: "Substitution is the 'pay per use' part of the pipeline: cheap enough that re-solving with new right-hand sides is nearly free after the factorization.",
      },
      {
        term: 'LU decomposition',
        kind: 'theorem',
        statement: "$A = LU$ with $L$ unit lower triangular and $U$ upper triangular exists **iff all leading principal minors are nonzero** — equivalently, Gaussian elimination on $A$ never hits a zero pivot.",
        detail: "The multipliers used to kill entries below pivot $k$ become the column $\\ell_k$ of $L$; what remains is $U$. For nonsingular $A$ with a zero minor (e.g. $\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$), $LU$ fails and rows must be exchanged — which is exactly what $P$ is for.",
      },
      {
        term: 'LUP decomposition',
        kind: 'theorem',
        statement: "For **every** nonsingular $A$ there is a permutation matrix $P$ with $PA = LU$. LUP-DECOMPOSITION pivots: at step $k$ it swaps the row with the largest $|a_{ik}|$ in the active submatrix into the pivot position (partial pivoting), then eliminates below it.",
        detail: "The factorization is found in place: the strict lower triangle holds $L$ (unit diagonal implicit), the upper triangle $U$, and a single $\\pi$ array records the row permutation — $O(n)$ extra space.",
      },
      {
        term: 'The cost structure',
        kind: 'insight',
        statement: "LUP-DECOMPOSITION does $\\Theta(n^3)$ arithmetic (the three nested loops of updates $a_{ij} \\mathrel{-}= \\ell_{ik} u_{kj}$). Each subsequent solve is $2\\Theta(n^2)$ substitutions. Solving $n$ systems with the same $A$ (e.g. for inversion) therefore costs $\\Theta(n^3) + n \\cdot \\Theta(n^2) = \\Theta(n^3)$ — the same order as one naive Gaussian elimination *without* reuse.",
        detail: "This 'factor once, solve many' pattern is why numerical libraries never run raw Gaussian elimination on repeated right-hand sides.",
      },
      {
        term: 'Pivoting and stability',
        kind: 'insight',
        statement: "Choosing the largest-magnitude pivot keeps multipliers $|\\ell_{ik}| \\le 1$, which bounds the growth of round-off error: partial pivoting makes Gaussian elimination backward stable in practice.",
        detail: "Tiny pivots would divide by near-zero numbers, amplifying rounding error catastrophically even in exact-arithmetic-feasible systems.",
      },
    ],
    figures: [
      {
        caption: 'The triangularization wavefront in LUP-DECOMPOSITION after two iterations. Shaded left columns below the diagonal hold the already-computed multipliers of $L$; the shaded top rows hold the finished rows of $U$; only the $4 \\times 4$ active submatrix (outlined) still needs work. Iteration $k = 3$ picks the largest-magnitude entry in its column of the active submatrix as the next pivot (circled), swaps it into place, fills column $k$ of $L$ with multipliers $\\ell_{ik} = a_{ik}/u_{kk}$, and rank-1-updates the trailing submatrix with $a_{ij} \\mathrel{-}= \\ell_{ik} u_{kj}$.',
        svg: '<svg viewBox="0 0 720 340" width="100%" role="img" aria-label="LU triangularization wavefront pattern in a 6 by 6 matrix"><text x="20" y="26" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" font-weight="600">LUP-DECOMPOSITION on a 6×6 matrix — after two iterations</text><g font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" text-anchor="end"><text x="158" y="77">row 1</text><text x="158" y="125">row 2</text><text x="158" y="173">row 3</text><text x="158" y="221">row 4</text><text x="158" y="269">row 5</text><text x="158" y="317">row 6</text></g><g font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" text-anchor="middle"><text x="182" y="46">col 1</text><text x="230" y="46">col 2</text><text x="278" y="46">col 3</text><text x="326" y="46">col 4</text><text x="374" y="46">col 5</text><text x="422" y="46">col 6</text></g><rect x="166" y="130" width="96" height="192" fill="#14b8a6" fill-opacity="0.18"/><rect x="166" y="54" width="288" height="96" fill="currentColor" fill-opacity="0.07"/><g stroke="currentColor" stroke-width="1"><rect x="166" y="54" width="288" height="268" fill="none"/><line x1="262" y1="54" x2="262" y2="322"/><line x1="214" y1="54" x2="214" y2="322"/><line x1="310" y1="54" x2="310" y2="322"/><line x1="358" y1="54" x2="358" y2="322"/><line x1="406" y1="54" x2="406" y2="322"/><line x1="454" y1="54" x2="454" y2="322"/><line x1="166" y1="102" x2="454" y2="102"/><line x1="166" y1="150" x2="454" y2="150"/><line x1="166" y1="198" x2="454" y2="198"/><line x1="166" y1="246" x2="454" y2="246"/><line x1="166" y1="294" x2="454" y2="294"/><line x1="166" y1="54" x2="454" y2="54"/><line x1="166" y1="322" x2="454" y2="322"/></g><rect x="262" y="150" width="192" height="172" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="286" cy="174" r="15" fill="none" stroke="#f59e0b" stroke-width="2.5"/><text x="286" y="178" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" text-anchor="middle">a₃₃</text><text x="480" y="90" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor">U — finished rows</text><text x="480" y="106" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" opacity="0.75">(pivot row swaps go here)</text><text x="280" y="145" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor" text-anchor="end" fill-opacity="0.9">L — multipliers</text><text x="358" y="240" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor" text-anchor="middle">active submatrix</text><text x="358" y="256" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.75">(4×4, still to update)</text><line x1="520" y1="70" x2="560" y2="70" stroke="#f59e0b" stroke-width="1.8"/><polygon points="570,70 560,65.5 560,74.5" fill="#f59e0b"/><text x="578" y="74" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">next pivot: largest |aᵢ₃| in col 3</text><line x1="520" y1="112" x2="560" y2="112" stroke="#14b8a6" stroke-width="1.8"/><polygon points="570,112 560,107.5 560,116.5" fill="#14b8a6"/><text x="578" y="116" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">eliminate below it (fills L)</text><line x1="520" y1="154" x2="560" y2="154" stroke="currentColor" stroke-width="1.8"/><polygon points="570,154 560,149.5 560,158.5" fill="currentColor"/><text x="578" y="158" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor">rank-1 update of the trailing block</text></svg>',
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: 'LU, then two substitutions, by hand',
        problem: "Solve $Ax = b$ for $A = \\begin{pmatrix} 2 & 3 & 1 \\\\ 4 & 7 & 5 \\\\ 6 & 18 & 22 \\end{pmatrix}$, $b = (6, 16, 46)^T$ using the decomposition $A = LU$ with $L = \\begin{pmatrix} 1 & 0 & 0 \\\\ 2 & 1 & 0 \\\\ 3 & 9 & 1 \\end{pmatrix}$, $U = \\begin{pmatrix} 2 & 3 & 1 \\\\ 0 & 1 & 3 \\\\ 0 & 0 & -8 \\end{pmatrix}$.",
        steps: [
          { label: 'Step 1: Verify the factorization', text: "Row 2 of $LU$: $2 \\cdot (2,3,1) + 1 \\cdot (0,1,3) = (4, 7, 5)$ ✓. Row 3: $3 \\cdot (2,3,1) + 9 \\cdot (0,1,3) + 1 \\cdot (0,0,-8) = (6, 18, 22)$ ✓. Both pivots 2, 1 were nonzero — no permutation needed." },
          { label: 'Step 2: Forward substitution $Ly = b$', text: "$y_1 = 6$; $y_2 = 16 - 2 y_1 = 16 - 12 = 4$; $y_3 = 46 - 3 y_1 - 9 y_2 = 46 - 18 - 36 = -8$. So $y = (6, 4, -8)$." },
          { label: 'Step 3: Back substitution $Ux = y$', text: "$-8 x_3 = -8 \\Rightarrow x_3 = 1$; $x_2 + 3 x_3 = 4 \\Rightarrow x_2 = 1$; $2 x_1 + 3 x_2 + x_3 = 6 \\Rightarrow x_1 = 1$." },
          { label: 'Step 4: Check', text: "$A (1,1,1)^T = (2+3+1,\\ 4+7+5,\\ 6+18+22)^T = (6, 16, 46)^T = b$ ✓." },
        ],
        result: 'The pipeline: pay $\\Theta(n^3)$ once for the factorization, then any new $b$ costs just the two $\\Theta(n^2)$ triangular sweeps.',
      },
      {
        title: 'When LU fails and pivoting rescues it',
        problem: "Explain why $A = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$ has no $LU$ decomposition, and how LUP handles it.",
        steps: [
          { label: 'Step 1: Chase the zero pivot', text: "With $\\ell_{11} = 1$ fixed by the unit-diagonal convention, $u_{11}$ must equal $a_{11} = 0$. The first elimination step then divides by $u_{11} = 0$ — impossible." },
          { label: 'Step 2: Recognize the invariant', text: "$A$ is perfectly nonsingular (det $= -1$); the failure is about *order of rows*, not about $A$." },
          { label: 'Step 3: Pivot', text: "Swap rows: $P = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$ gives $PA = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} = I \\cdot I$: $L = U = I$. Now solve $PAx = Pb$, i.e. $LUx = Pb$." },
        ],
        result: 'Partial pivoting guarantees a nonzero pivot at every step of any nonsingular matrix — $PA = LU$ always exists.',
      },
    ],
    keyTakeaways: [
      "Triangular systems solve by substitution in $\\Theta(n^2)$: forward for $L$, backward for $U$.",
      "$A = LU$ exists iff every leading principal minor is nonzero; for any nonsingular $A$, permuting rows first ($PA = LU$) always works.",
      "Partial pivoting — bring the largest-magnitude entry of the active column to the diagonal — keeps multipliers $\\le 1$ and the algorithm numerically stable.",
      "Cost split: $\\Theta(n^3)$ to factor once, $\\Theta(n^2)$ per right-hand side — the economic heart of the chapter.",
    ],
    quiz: [
      {
        q: "After computing $PA = LU$ for a fixed $A$, solving a second system $Ax = b'$ costs:",
        options: ["$\\Theta(n^3)$", "$\\Theta(n^2)$", "$\\Theta(n \\lg n)$", "$\\Theta(n)$"],
        answer: 1,
        explanation: "Only the two triangular substitutions run again: $Ly = Pb'$ then $Ux = y$, each $\\Theta(n^2)$. The $\\Theta(n^3)$ factorization is amortized away.",
      },
      {
        q: "The matrix $\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$ has no LU decomposition because:",
        options: ["it is singular", "its first pivot $a_{11} = 0$ forces division by zero during the first elimination step", "its determinant is negative", "L must have a zero diagonal"],
        answer: 1,
        explanation: "The matrix is nonsingular (det $= -1$); the failure is purely that Gaussian elimination without row exchanges meets a zero pivot — LUP fixes it with one swap.",
      },
      {
        q: "In LUP-DECOMPOSITION the multipliers stored in column $k$ of $L$ are:",
        options: ["the entries of row $k$ of $U$", "$\\ell_{ik} = a_{ik} / u_{kk}$ computed from the current, already-updated active submatrix", "the reciprocals of the pivots", "chosen after the algorithm finishes"],
        answer: 1,
        explanation: "Each multiplier is exactly what Gaussian elimination divides by: the (updated) entry to kill divided by the pivot. Pivoting first ensures $|\\ell_{ik}| \\le 1$.",
      },
      {
        q: "Partial pivoting (choosing the largest-magnitude entry of the active column) exists mainly to:",
        options: ["minimize the total number of arithmetic operations", "keep multipliers at most 1 in magnitude, controlling round-off growth", "make the decomposition unique", "avoid storing the permutation"],
        answer: 1,
        explanation: "The operation count is unchanged by row order; stability is what pivoting buys — small multipliers stop rounding errors from compounding.",
      },
    ],
  },

  // ---------------------------------------------------------------- 28.2
  {
    sectionId: 'clrs-ch28-s2',
    readingTime: 7,
    intro: "Once LUP decomposition is on the shelf, inverting a matrix is almost boring: $A^{-1}$ is the matrix $X$ whose columns solve $Ax = e_i$ for each standard basis vector $e_i$. One $\\Theta(n^3)$ factorization plus $n$ cheap triangular solves inverts any nonsingular matrix in $\\Theta(n^3)$ total.",
    objectives: [
      "Derive matrix inversion from n solves of $Ax = e_i$",
      "Verify the correctness identity $X = A^{-1}$ from $PA = LU$",
      "Explain why explicitly inverting is the wrong way to solve systems in practice",
      "Discuss the effect of condition number on computed inverses",
    ],
    concepts: [
      {
        term: 'Inversion by column solves',
        kind: 'method',
        statement: "**LUP-INVERSE(A):** compute $PA = LU$; for each $i = 1, \\ldots, n$, solve $LUx = P e_i$ by forward then back substitution and store the solution as column $i$ of $X$. Then $AX = I$.",
        detail: "Why $P e_i$ and not $e_i$: $Ax = e_i \\iff PAx = Pe_i \\iff LUx = Pe_i$ — the permutation is just a reordering of the right-hand side's entries.",
      },
      {
        term: 'Correctness identity',
        kind: 'theorem',
        statement: "Let $X$ be the matrix LUP-INVERSE produces. Since column $i$ of $X$ solves $Ax = e_i$, we get $AX = [Ae_1' \\ldots] = I$ column by column. As $A$ is nonsingular, its inverse is unique, hence $X = A^{-1}$.",
        detail: "The proof is a column-by-column verification that $AX = I$ — no matrix products needed beyond the definition of matrix–vector multiplication.",
      },
      {
        term: 'The cost accounting',
        kind: 'method',
        statement: "LUP: $\\Theta(n^3)$. The $n$ column solves: $n \\cdot \\Theta(n^2) = \\Theta(n^3)$. Total $\\Theta(n^3)$ — the same order as a single Gaussian elimination, and asymptotically optimal for dense inversion by known lower-bound arguments.",
        detail: "A subtlety: the $n$ right-hand sides $Pe_i$ form a permuted identity matrix, so blocked variants of the algorithm multiply triangular matrices by blocks, improving cache behavior without changing the $\\Theta(n^3)$ count.",
      },
      {
        term: 'Never invert to solve',
        kind: 'insight',
        statement: "To solve $Ax = b$, computing $A^{-1}b$ costs *more* than one LUP + substitution, and in floating point it is less accurate: the inverse is formed and rounded, then multiplied, compounding error at each step.",
        detail: "The computed $\\hat{x}$ from a backward-stable solve satisfies $(A + \\Delta A)\\hat{x} = b$ with $\\|\\Delta A\\|$ tiny relative to $\\kappa(A)\\|A\\|$ — a guarantee the explicit-inverse route loses.",
      },
      {
        term: 'Condition number',
        kind: 'definition',
        statement: "The **condition number** $\\kappa(A) = \\|A\\| \\cdot \\|A^{-1}\\| \\ge 1$ measures how a relative perturbation of $A$ or $b$ can inflate the relative error of $x$: roughly $\\kappa(A)$ is the worst amplification.",
        detail: "A large-$\\kappa$ (ill-conditioned) matrix can be inverted exactly by the algorithm yet yield useless answers: rounding $b$ slightly moves the true solution a lot. Even singular-in-the-limit Vandermonde-like systems teach the same lesson.",
      },
    ],
    examples: [
      {
        title: 'Inverting a 2×2 matrix through the LUP pipeline',
        problem: "Invert $A = \\begin{pmatrix} 4 & 7 \\\\ 2 & 6 \\end{pmatrix}$ via $PA = LU$ and two column solves.",
        steps: [
          { label: 'Step 1: Factor', text: "No pivoting needed ($4$ is the larger column entry anyway): $L = \\begin{pmatrix} 1 & 0 \\\\ 0.5 & 1 \\end{pmatrix}$, $U = \\begin{pmatrix} 4 & 7 \\\\ 0 & 2.5 \\end{pmatrix}$ (multiplier $2/4 = 0.5$)." },
          { label: 'Step 2: Column 1 — solve $Ax = e_1$', text: "$Ly = e_1 = (1, 0)$: $y_1 = 1$, $y_2 = 0 - 0.5 = -0.5$. Then $Ux = y$: $2.5 x_2 = -0.5 \\Rightarrow x_2 = -0.2$; $4 x_1 + 7(-0.2) = 1 \\Rightarrow x_1 = 0.6$." },
          { label: 'Step 3: Column 2 — solve $Ax = e_2$', text: "$Ly = e_2 = (0,1)$: $y = (0, 1)$. $Ux = y$: $2.5 x_2 = 1 \\Rightarrow x_2 = 0.4$; $4 x_1 = -7(0.4) = -2.8 \\Rightarrow x_1 = -0.7$." },
          { label: 'Step 4: Assemble and verify', text: "$X = \\begin{pmatrix} 0.6 & -0.7 \\\\ -0.2 & 0.4 \\end{pmatrix}$. Multiply: $AX = \\begin{pmatrix} 4(0.6)+7(-0.2) & 4(-0.7)+7(0.4) \\\\ 2(0.6)+6(-0.2) & 2(-0.7)+6(0.4) \\end{pmatrix} = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$ ✓. (Sanity: $\\det A = 10$, and $X = \\frac{1}{10}\\begin{pmatrix} 6 & -7 \\\\ -2 & 4 \\end{pmatrix}$.)" },
        ],
        result: 'Two triangular solves per column: the entire inverse for the price of about one elimination.',
      },
      {
        title: 'Solving without inverting',
        problem: 'Solve $A x = b$ with $A = [[2,1],[1,2]]$, $b = [3,3]$ via LUP (no explicit inverse) and compare with $A^{-1}b$.',
        steps: [
          { label: 'LUP', text: '$P = I$, $L = [[1,0],[0.5,1]]$, $U = [[2,1],[0,1.5]]$: $PA = LU$ ✓.' },
          { label: 'Forward', text: 'Solve $Ly = Pb = [3,3]$: $y_1 = 3$, $0.5 \\cdot 3 + y_2 = 3$: $y_2 = 1.5$.' },
          { label: 'Backward', text: 'Solve $Ux = y$: $1.5 x_2 = 1.5$: $x_2 = 1$; $2x_1 + 1 = 3$: $x_1 = 1$: $x = [1,1]$.' },
          { label: 'Versus inverse', text: '$A^{-1} = [[2/3,-1/3],[-1/3,2/3]]$: $A^{-1}b = [1,1]$ same, but inversion needed $2$ solves ($e_1,e_2$) plus a multiply: $3\\times$ the work for one $b$.' },
        ],
        result: '$x = [1,1]$ in $\\Theta(n^2)$ after one $\\Theta(n^3)$ factorization; explicit $A^{-1}$ costs $n$ solves for the same answer.',
      },
    ],
    keyTakeaways: [
      "Invert by solving $Ax = e_i$ for every $i$; assembling the solution vectors as columns gives $X = A^{-1}$ with $AX = I$ verified columnwise.",
      "Total cost $\\Theta(n^3)$: one LUP decomposition plus $n$ substitutions at $\\Theta(n^2)$ each.",
      "The permuted right-hand sides $Pe_i$ reappear because $Ax = e_i \\iff LUx = Pe_i$.",
      "In practice, never compute $A^{-1}b$ to solve a system — substitute instead: cheaper and numerically safer.",
      "The condition number $\\kappa(A) = \\|A\\|\\,\\|A^{-1}\\|$ bounds how much rounding in $A$ or $b$ can distort $x$.",
    ],
    quiz: [
      {
        q: "LUP-INVERSE solves, for column $i$ of the inverse, the system:",
        options: ["$Ax = e_i$ (via $LUx = Pe_i$)", "$Ax = P e_i$ (via $LUx = e_i$)", "$A^T x = e_i$", "$LUx = 0$"],
        answer: 0,
        explanation: "Multiplying $Ax = e_i$ by $P$ gives $LUx = Pe_i$ — the permutation moves to the right-hand side; the solver sees a permuted unit vector.",
      },
      {
        q: "The total asymptotic cost of inverting an $n \\times n$ matrix via LUP-INVERSE is:",
        options: ["$\\Theta(n^2)$", "$\\Theta(n^3)$", "$\\Theta(n^4)$", "$\\Theta(n^3 \\lg n)$"],
        answer: 1,
        explanation: "$\\Theta(n^3)$ for the decomposition plus $n \\cdot \\Theta(n^2) = \\Theta(n^3)$ for the solves — the solve phase does not change the exponent.",
      },
      {
        q: "Which statement about solving $Ax = b$ by first computing $A^{-1}$ is correct?",
        options: ["it is both faster and more accurate", "it does more arithmetic than an LUP solve and loses the backward-stability guarantee of substitution", "it is required when $b$ changes rarely", "it is required when $A$ is symmetric"],
        answer: 1,
        explanation: "Explicit inversion wastes a factor of $n$ versus substitution and introduces extra rounding: computing and multiplying by a rounded inverse is a strictly worse pipeline.",
      },
    ],
  },

  // ---------------------------------------------------------------- 28.3
  {
    sectionId: 'clrs-ch28-s3',
    readingTime: 8,
    intro: "Symmetric positive-definite matrices — the Hessians of convex functions, the Gram matrices of data — Gaussian elimination can attack without any pivoting: all pivots come out positive. That observation yields the Cholesky factorization $A = LL^T$, and the same normal-equations machinery gives the method of least squares its algebraic backbone.",
    objectives: [
      "Define symmetric positive-definite matrices and recognize common examples",
      "Prove $A^T A$ is SPD exactly when $A$ has full column rank",
      "Derive the normal equations $A^TA\\hat{x} = A^Tb$ from orthogonality of the residual",
      "Compute a Cholesky factorization and fit a least-squares line",
    ],
    concepts: [
      {
        term: 'Symmetric positive-definite matrix',
        kind: 'definition',
        statement: "$A$ is **SPD** if $A = A^T$ and $x^T A x > 0$ for every $x \\ne 0$. Equivalently (for symmetric $A$): all eigenvalues are positive.",
        detail: "Testable without eigenvalues: a symmetric matrix is SPD iff Gaussian elimination runs without row exchanges and produces all *positive* pivots — which is precisely what makes Cholesky work.",
      },
      {
        term: 'Least squares and the normal equations',
        kind: 'method',
        statement: "For $A \\in \\mathbb{R}^{m \\times n}$, $b \\in \\mathbb{R}^m$, the least-squares problem minimizes $\\|Ax - b\\|_2$. The minimizer $\\hat{x}$ satisfies the **normal equations** $A^T A \\hat{x} = A^T b$: geometrically, $A\\hat{x}$ is the orthogonal projection of $b$ onto the column space of $A$ — the residual $b - A\\hat{x}$ is perpendicular to every column of $A$.",
        detail: "'Perpendicular to every column of $A$' translates verbatim to $A^T(b - A\\hat{x}) = 0$.",
      },
      {
        term: 'Existence and uniqueness via SPD',
        kind: 'theorem',
        statement: "$A^TA$ is always symmetric positive-*semi*definite; it is SPD **iff $A$ has full column rank** (i.e. $Ax = 0$ only at $x = 0$). When $A$ has full column rank the least-squares solution exists and is $\\hat{x} = (A^TA)^{-1}A^T b$.",
        detail: "The one-line proof: $x^T A^T A x = \\|Ax\\|_2^2 > 0$ unless $Ax = 0$. So the normal equations inherit a unique solution exactly when the columns of $A$ are independent — repeated data columns or collinear regressors destroy uniqueness.",
      },
      {
        term: 'Cholesky factorization',
        kind: 'method',
        statement: "Every SPD matrix factors as $A = LL^T$ with $L$ lower triangular and **positive diagonal**. The entries follow recursively from symmetry: $\\ell_{kk} = \\sqrt{a_{kk} - \\sum_{j<k} \\ell_{kj}^2}$ and $\\ell_{ik} = \\big(a_{ik} - \\sum_{j<k} \\ell_{ij}\\ell_{kj}\\big)/\\ell_{kk}$.",
        detail: "Cost: $\\Theta(n^3)$ — but with roughly *half* the arithmetic of LU, because the algorithm exploits symmetry: it computes only the lower triangle and mirrors it. The positive pivots of the SPD elimination are exactly the squares $\\ell_{kk}^2$.",
      },
      {
        term: 'Why least squares is the right fallback',
        kind: 'insight',
        statement: "Overdetermined systems ($m > n$) usually have no exact solution; minimizing the 2-norm of the residual is the variational substitute, and the normal equations convert it into a square SPD system solvable by Cholesky in $\\Theta(n^3)$.",
        detail: "This is the computational engine of linear regression: $A$ holds a column of 1s and a column of predictor values, $b$ the responses.",
      },
    ],
    figures: [
      {
        caption: 'Least squares on data $(1,2), (2,3), (3,5), (4,6), (5,9)$. The normal equations $A^TA\\hat{x} = A^Tb$ with $A = [\\mathbf{1}, x]$ give slope $1.7$, intercept $-0.1$: the fitted line $\\hat{y} = 1.7x - 0.1$. Vertical dashed segments are the residuals $b_i - \\hat{y}_i = 0.4, -0.3, 0, -0.7, 0.6$ — they sum to exactly $0$ (perpendicular to the constant column) and their squares total $\\mathrm{SSE} = 1.10$, the minimum over all lines.',
        svg: '<svg viewBox="0 0 720 360" width="100%" role="img" aria-label="Least squares fitted line through five scattered points with residuals"><text x="20" y="26" font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" font-weight="600">Fitting by orthogonal projection of the response vector</text><line x1="70" y1="300" x2="650" y2="300" stroke="currentColor" stroke-width="1.5"/><polygon points="660,300 648,295.5 648,304.5" fill="currentColor"/><line x1="70" y1="300" x2="70" y2="70" stroke="currentColor" stroke-width="1.5"/><polygon points="70,60 65.5,72 74.5,72" fill="currentColor"/><g stroke="currentColor" stroke-width="0.8" opacity="0.25"><line x1="70" y1="254" x2="650" y2="254"/><line x1="70" y1="208" x2="650" y2="208"/><line x1="70" y1="162" x2="650" y2="162"/><line x1="70" y1="116" x2="650" y2="116"/><line x1="70" y1="70" x2="650" y2="70"/></g><g font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" text-anchor="end" opacity="0.7"><text x="64" y="304">0</text><text x="64" y="258">2</text><text x="64" y="212">4</text><text x="64" y="166">6</text><text x="64" y="120">8</text><text x="64" y="74">10</text></g><g font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.7"><text x="181" y="318">1</text><text x="293" y="318">2</text><text x="404" y="318">3</text><text x="516" y="318">4</text><text x="627" y="318">5</text></g><line x1="70" y1="286.7" x2="650" y2="83.3" stroke="#f59e0b" stroke-width="2.2"/><text x="640" y="76" font-family="ui-sans-serif, system-ui" font-size="12" fill="#f59e0b" text-anchor="end" font-style="italic">ŷ = 1.7x − 0.1</text><g stroke="#14b8a6" stroke-width="1.4" stroke-dasharray="3 4"><line x1="181.5" y1="254" x2="181.5" y2="263.2"/><line x1="293" y1="231" x2="293" y2="224.1"/><line x1="404.5" y1="185" x2="404.5" y2="185"/><line x1="516" y1="162" x2="516" y2="145.9"/><line x1="627.5" y1="93" x2="627.5" y2="106.8"/></g><g fill="currentColor"><circle cx="181.5" cy="254" r="4"/><circle cx="293" cy="231" r="4"/><circle cx="404.5" cy="185" r="4"/><circle cx="516" cy="162" r="4"/><circle cx="627.5" cy="93" r="4"/></g><g font-family="ui-sans-serif, system-ui" font-size="10.5" fill="#14b8a6" text-anchor="middle"><text x="170" y="266">+0.4</text><text x="308" y="238">−0.3</text><text x="529" y="155">−0.7</text><text x="615" y="102">+0.6</text></g><text x="404.5" y="176" font-family="ui-sans-serif, system-ui" font-size="10.5" fill="currentColor" text-anchor="middle">0</text><text x="560" y="340" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.8">Σ residuals = 0 · SSE = 1.10</text></svg>',
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'Fitting a line by the normal equations',
        problem: "Fit $\\hat{y} = \\beta_0 + \\beta_1 x$ to the data $(1,2), (2,3), (3,5), (4,6), (5,9)$ by least squares.",
        steps: [
          { label: 'Step 1: Set up $A$ and $b$', text: "With $A = \\begin{pmatrix} 1 & 1 \\\\ 1 & 2 \\\\ 1 & 3 \\\\ 1 & 4 \\\\ 1 & 5 \\end{pmatrix}$ and $b = (2,3,5,6,9)^T$, the model is $A\\beta \\approx b$ with $\\beta = (\\beta_0, \\beta_1)$." },
          { label: 'Step 2: Form the normal equations', text: "$A^T A = \\begin{pmatrix} 5 & 15 \\\\ 15 & 55 \\end{pmatrix}$ (counts and sums of $x$), $A^T b = (25, 92)^T$ (sums of $y$ and $xy$)." },
          { label: 'Step 3: Solve the 2×2 SPD system', text: "$\\det(A^TA) = 275 - 225 = 50$. Cofactors: $\\beta_0 = (55 \\cdot 25 - 15 \\cdot 92)/50 = (1375 - 1380)/50 = -0.1$ and $\\beta_1 = (-15 \\cdot 25 + 5 \\cdot 92)/50 = (460 - 375)/50 = 1.7$." },
          { label: 'Step 4: Interpret the check', text: "Fitted values $1.6, 3.3, 5.0, 6.7, 8.4$; residuals $0.4, -0.3, 0, -0.7, 0.6$ summing to zero — the residual is orthogonal to the constant column, exactly as $A^T(b - A\\hat{\\beta}) = 0$ demands. $\\mathrm{SSE} = 0.16+0.09+0+0.49+0.36 = 1.10$." },
        ],
        result: 'Least-squares line $\\hat{y} = 1.7x - 0.1$; the normal equations turn an overconstrained problem into an SPD system.',
      },
      {
        title: 'Cholesky on a 3×3 SPD matrix',
        problem: "Factor $A = \\begin{pmatrix} 4 & 12 & -16 \\\\ 12 & 37 & -43 \\\\ -16 & -43 & 98 \\end{pmatrix} = LL^T$.",
        steps: [
          { label: 'Step 1: Column 1', text: "$\\ell_{11} = \\sqrt{4} = 2$; $\\ell_{21} = 12/2 = 6$; $\\ell_{31} = -16/2 = -8$." },
          { label: 'Step 2: Column 2', text: "$\\ell_{22} = \\sqrt{37 - 6^2} = \\sqrt{37-36} = 1$; $\\ell_{32} = (-43 - (-8)(6))/1 = -43+48 = 5$." },
          { label: 'Step 3: Column 3', text: "$\\ell_{33} = \\sqrt{98 - (-8)^2 - 5^2} = \\sqrt{98 - 64 - 25} = \\sqrt{9} = 3$. Every radicand positive — the SPD certificate." },
          { label: 'Step 4: Verify', text: "$L = \\begin{pmatrix} 2 & 0 & 0 \\\\ 6 & 1 & 0 \\\\ -8 & 5 & 3 \\end{pmatrix}$; row 3 of $LL^T$: $(-16,\\ -48+5,\\ 64+25+9) = (-16, -43, 98)$ ✓ — and $A$'s symmetry was used to skip half the work." },
        ],
        result: 'Cholesky needs no pivoting, takes square roots only of positive numbers, and stores one triangle.',
      },
    ],
    keyTakeaways: [
      "SPD means $x^TAx > 0$ for all $x \\ne 0$; for symmetric matrices this is equivalent to all-positive eigenvalues (and to all-positive Gaussian pivots).",
      "$A^TA$ is SPD iff $A$ has full column rank — the exact condition for a unique least-squares solution.",
      "Normal equations $A^TA\\hat{x} = A^Tb$: project $b$ onto the column space of $A$; the residual is orthogonal to every column.",
      "Cholesky $A = LL^T$ exploits symmetry for roughly half of LU's arithmetic, with guaranteed positive radicands on SPD input.",
    ],
    quiz: [
      {
        q: "For which matrices $A$ is $A^TA$ (with $A \\ne 0$) symmetric positive-definite rather than merely semidefinite?",
        options: ["all $A$", "exactly the $A$ with full column rank (independent columns)", "only square $A$", "only orthogonal $A$"],
        answer: 1,
        explanation: "$x^T A^T A x = \\|Ax\\|^2 > 0$ unless $Ax = 0$; some nonzero $x$ with $Ax = 0$ exists exactly when the columns are dependent.",
      },
      {
        q: "The geometric meaning of the least-squares solution is that $A\\hat{x}$ is:",
        options: ["the closest vector to $b$ inside the column space of $A$ — the orthogonal projection of $b$", "the vector of residuals", "the shortest column of $A$", "b itself, when the system is inconsistent"],
        answer: 0,
        explanation: "Minimizing $\\|Ax - b\\|$ over the column space picks the projection; equivalently the residual $b - A\\hat{x}$ is orthogonal to every column — which is the normal-equations statement.",
      },
      {
        q: "Cholesky factorization $A = LL^T$ is guaranteed to exist (with real positive diagonal $L$) for every:",
        options: ["nonsingular matrix", "symmetric positive-definite matrix", "triangular matrix", "matrix with nonzero determinant"],
        answer: 1,
        explanation: "Positivity of the pivots — equivalent to SPD for symmetric matrices — keeps every radicand $a_{kk} - \\sum \\ell_{kj}^2$ positive under the square root.",
      },
      {
        q: "In the regression example, the residuals $0.4, -0.3, 0, -0.7, 0.6$ sum to exactly zero because:",
        options: ["the data lie on a line", "the residual vector is orthogonal to the constant (intercept) column of $A$", "least squares always zeroes the median residual", "the SSE is minimal"],
        answer: 1,
        explanation: "The first column of $A$ is all ones; $A^T(b - A\\hat{\\beta}) = 0$ makes the residual orthogonal to it — i.e. its entries sum to zero. Minimality alone would not force this.",
      },
    ],
  },
]
