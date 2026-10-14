import type { SectionContent } from '../library'

// ============================================================================
// Mathematics Companion — Matrices and Determinants (3.1 - 3.4)
// Master study content. Determinant tools, adjoint-inverse identities,
// linear systems and determinant geometry.
// ============================================================================

export const jeemathsCh03Content: SectionContent[] = [
  // ---------------------------------------------------------------- 3.1
  {
    sectionId: 'advmath-ch3-s1',
    readingTime: 8,
    intro: 'A determinant is a signed scale factor that detects singularity and solves linear conditions in one line. Row and column moves simplify it without changing its value, while triangular form makes it a product of diagonal entries. This section turns determinant properties into fast evaluation tools.',
    objectives: [
      'Apply factor extraction, row swaps and $R_i \\to R_i + kR_j$ to simplify determinants without value change',
      'Evaluate triangular, Vandermonde and $a + b$ split forms by standard reductions',
      'Detect zero determinants from proportional rows, zero rows or $R_1 + R_2 + R_3 = 0$ patterns'
    ],
    concepts: [
      {
        term: 'Row-operation rules',
        kind: 'law',
        statement: 'Adding a multiple of one row to another **leaves value unchanged** with `Ri -> Ri + k Rj`, while swapping two rows flips the sign.',
        detail: 'Also $\\det(kA) = k^n\\det(A)$ for $n \\times n$ matrices, and a common factor of one row alone pulls out once. The trap is pulling one factor from every row and counting it only once.'
      },
      {
        term: 'Zero-value patterns',
        kind: 'theorem',
        statement: 'Determinant is **zero when rows are dependent**: `two identical rows`, `proportional rows` or `one row a combination of others` all give $\\Delta = 0$.',
        detail: 'In particular a zero row or zero column forces $\\Delta = 0$. Spotting $C_1 + C_2 + C_3 = 0$ style dependence before expanding saves most of the labour.'
      },
      {
        term: 'Triangular evaluation',
        kind: 'method',
        statement: 'Upper or lower **triangular determinant equals `product of diagonal entries`**, so $\\det = a_{11}a_{22}\\cdots a_{nn}$ after reduction.',
        detail: 'Use $R_i \\to R_i + kR_j$ to create zeros below the diagonal, then read the product. This beats cofactor expansion for $3 \\times 3$ and larger symbolic determinants.'
      },
      {
        term: 'Split by linearity',
        kind: 'method',
        statement: 'A determinant is **linear in each row**: `split a sum row` as $\\det(R_1, R_2+R_2^{\\prime}, R_3) = \\det(R_1,R_2,R_3) + \\det(R_1,R_2^{\\prime},R_3)$.',
        detail: 'Writing $a + b$ entries as a sum of two determinants often exposes a zero piece. Combined with factor extraction, this cracks determinants with $x + a$ style entries.'
      },
      {
        term: 'Vandermonde form',
        kind: 'theorem',
        statement: 'The **Vandermonde** `det [[1,1,1],[a,b,c],[a^2,b^2,c^2]]` equals $(b-a)(c-a)(c-b)$ up to row order.',
        detail: 'Hence it vanishes exactly when two variables coincide. Recognising shifted Vandermonde blocks inside larger determinants gives instant factorisation.'
      }
    ],
    examples: [
      {
        title: 'Factor extraction and zero detection',
        problem: 'Evaluate $\\Delta = \\begin{vmatrix} 2 & 4 & 6 \\\\ 1 & 3 & 5 \\\\ 7 & 8 & 9 \\end{vmatrix}$.',
        steps: [
          { label: 'Step 1', text: '```text\ntake 2 from R1; then R1 -> R1 - 2*R2 style reduction\n```\nFactor $2$ from the first row: $\\Delta = 2\\begin{vmatrix} 1 & 2 & 3 \\\\ 1 & 3 & 5 \\\\ 7 & 8 & 9 \\end{vmatrix}$.' },
          { label: 'Step 2', text: 'Apply $R_2 \\to R_2 - R_1$ and $R_3 \\to R_3 - 7R_1$: the matrix becomes $\\begin{vmatrix} 1 & 2 & 3 \\\\ 0 & 1 & 2 \\\\ 0 & -6 & -12 \\end{vmatrix}$.' },
          { label: 'Step 3', text: 'Now $R_3 = -6R_2$, so rows are dependent and the determinant is $0$. Hence $\\Delta = 2 \\cdot 0 = 0$.' }
        ],
        result: '$\\Delta = 0$ by row dependence after factor extraction.'
      },
      {
        title: 'Triangular reduction',
        problem: 'Evaluate $\\begin{vmatrix} 1 & 2 & 3 \\\\ 0 & 4 & 5 \\\\ 2 & 3 & 4 \\end{vmatrix}$.',
        steps: [
          { label: 'Step 1', text: '```text\nR3 -> R3 - 2*R1 to kill first entry of last row\n```\n$R_3 \\to R_3 - 2R_1$ gives $\\begin{vmatrix} 1 & 2 & 3 \\\\ 0 & 4 & 5 \\\\ 0 & -1 & -2 \\end{vmatrix}$ with value unchanged.' },
          { label: 'Step 2', text: 'Swap handling is unneeded; expand along the first column: $\\Delta = 1 \\cdot \\begin{vmatrix} 4 & 5 \\\\ -1 & -2 \\end{vmatrix} = 4(-2) - 5(-1) = -8 + 5$.' },
          { label: 'Step 3', text: 'Thus $\\Delta = -3$. Check: triangular-after-swap would give the same product up to the swap sign.' }
        ],
        result: 'Determinant equals $-3$.'
      }
    ],
    keyTakeaways: [
      '$R_i \\to R_i + kR_j$ preserves value; swaps flip sign; one-row factors pull out once.',
      'Dependent, identical, proportional or zero rows force $\\Delta = 0$ immediately.',
      'Reduce to triangular form and multiply diagonal entries for fast evaluation.',
      'Linearity splits sum-rows; Vandermonde $(b-a)(c-a)(c-b)$ factors at sight.'
    ],
    quiz: [
      {
        q: 'Swapping two rows of a determinant',
        options: [`$\\text{leaves it unchanged}$`, `$\\text{multiplies it by } -1$`, `$\\text{multiplies it by } 2$`, `$\\text{makes it zero}$`],
        answer: 1,
        explanation: 'Step 1: Determinant is alternating in rows. Step 2: One transposition reverses orientation. Step 3: Hence the sign flips. Step 4: Two swaps would restore the sign.'
      },
      // PYQ-pattern: row-dependence zero detection
      {
        q: 'If two rows of a $3 \\times 3$ matrix are proportional, its determinant is',
        options: [`$1$`, `$-1$`, `$0$`, `$\\text{equal to the common ratio}$`],
        answer: 2,
        explanation: 'Step 1: Factor the ratio out of one row. Step 2: Two identical rows remain. Step 3: Identical rows give zero by the alternating property. Step 4: Hence the whole determinant is $0$.'
      },
      {
        q: '$\\det(kA)$ for $3 \\times 3$ matrix $A$ equals',
        options: [`$k\\det(A)$`, `$k^3\\det(A)$`, `$3k\\det(A)$`, `$k + \\det(A)$`],
        answer: 1,
        explanation: 'Step 1: Each of the $3$ rows gains factor $k$. Step 2: One factor pulls out per row. Step 3: Total $k^3$ emerges. Step 4: Single $k$ would hold only for one-row scaling.'
      },
      {
        q: 'Determinant of an upper triangular matrix equals',
        options: [`$\\text{sum of diagonal entries}$`, `$\\text{product of diagonal entries}$`, `$0$`, `$1$`],
        answer: 1,
        explanation: 'Step 1: Cofactor expansion along the first column peels off $a_{11}$. Step 2: Induction on the remaining block continues. Step 3: Product of diagonal entries results. Step 4: Sum would hold for trace, not determinant.'
      }
    ]
  },
  // ---------------------------------------------------------------- 3.2
  {
    sectionId: 'advmath-ch3-s2',
    readingTime: 9,
    intro: 'The adjoint matrix packages all cofactors so that $A(\\mathrm{adj}\\, A) = |A|I$ holds for every square $A$. When $|A| \\ne 0$ this yields the inverse at once and solves $AX = B$ by multiplication. This section makes the adjoint-inverse route error-free.',
    objectives: [
      'Build $\\mathrm{adj}\\, A$ as the transpose of the cofactor matrix and verify $A(\\mathrm{adj}\\, A) = |A|I$',
      'Write $A^{-1} = \\frac{1}{|A|}\\mathrm{adj}\\, A$ for $|A| \\ne 0$ and solve $AX = B$ as $X = A^{-1}B$',
      'Use $|\\mathrm{adj}\\, A| = |A|^{n-1}$ and $|A^{-1}| = \\frac{1}{|A|}$ for fast modulus questions'
    ],
    concepts: [
      {
        term: 'Cofactor and adjoint',
        kind: 'definition',
        statement: 'The **adjoint** is `transpose of cofactor matrix`: $(\\mathrm{adj}\\, A)_{ij} = C_{ji}$ where $C_{ji}$ is the signed minor.',
        detail: 'Cofactor $C_{ij} = (-1)^{i+j}M_{ij}$ with $M_{ij}$ the minor. The transpose step is mandatory: using cofactors without transposing gives the wrong matrix except in symmetric cases.'
      },
      {
        term: 'Fundamental identity',
        kind: 'theorem',
        statement: 'Every square $A$ obeys **$A(\\mathrm{adj}\\, A) = |A|I$** with `adj on the right`, and also $(\\mathrm{adj}\\, A)A = |A|I$.',
        detail: 'Diagonal entries accumulate $\\sum_k a_{ik}C_{ik} = |A|$, while off-diagonal sums are determinants with a repeated row, hence $0$. This identity defines inverses and singularity together.'
      },
      {
        term: 'Inverse formula',
        kind: 'theorem',
        statement: 'If **$|A| \\ne 0$** then `A^{-1} = adj(A)/|A|`, namely $A^{-1} = \\frac{1}{|A|}\\mathrm{adj}\\, A$, and $AA^{-1} = A^{-1}A = I$.',
        detail: 'If $|A| = 0$ no inverse exists; the equation $AX = B$ then has either no solution or infinitely many. The $2 \\times 2$ shortcut $\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix}^{-1} = \\frac{1}{ad-bc}\\begin{pmatrix}d&-b\\\\-c&a\\end{pmatrix}$ is this formula in miniature.'
      },
      {
        term: 'Determinants of adjoint and inverse',
        kind: 'theorem',
        statement: 'Moduli obey **$|\\mathrm{adj}\\, A| = |A|^{n-1}$** with `power n - 1` and $|A^{-1}| = \\frac{1}{|A|}$ for invertible $A$.',
        detail: 'Taking determinants of $A(\\mathrm{adj}\\, A) = |A|I$ gives $|A||\\mathrm{adj}\\, A| = |A|^n$. For singular $A$ with $n \\ge 2$ the adjoint modulus is $0$ except special rank cases.'
      },
      {
        term: 'Matrix-equation order',
        kind: 'law',
        statement: 'From $AX = B$ deduce **$X = A^{-1}B$** with `left multiplication only`; $BA^{-1}$ is generally different.',
        detail: 'Matrices do not commute, so side matters: $XA = B$ gives $X = BA^{-1}$ instead. Pre versus post multiplication must match the original layout.'
      }
    ],
    examples: [
      {
        title: 'Inverse of a two-by-two matrix',
        problem: 'Find the inverse of $A = \\begin{pmatrix} 2 & 3 \\\\ 1 & 4 \\end{pmatrix}$ and solve $AX = \\begin{pmatrix} 5 \\\\ 6 \\end{pmatrix}$.',
        steps: [
          { label: 'Step 1', text: '```text\ndet = 2*4 - 3*1 = 5 != 0; adj = [[4,-3],[-1,2]]\n```\n$|A| = 8 - 3 = 5 \\ne 0$, so invertible. Cofactor transpose gives $\\mathrm{adj}\\, A = \\begin{pmatrix} 4 & -3 \\\\ -1 & 2 \\end{pmatrix}$.' },
          { label: 'Step 2', text: 'Hence $A^{-1} = \\frac{1}{5}\\begin{pmatrix} 4 & -3 \\\\ -1 & 2 \\end{pmatrix}$. Check $AA^{-1} = I$ by direct multiplication.' },
          { label: 'Step 3', text: 'Then $X = A^{-1}B = \\frac{1}{5}\\begin{pmatrix} 4 & -3 \\\\ -1 & 2 \\end{pmatrix}\\begin{pmatrix} 5 \\\\ 6 \\end{pmatrix} = \\frac{1}{5}\\begin{pmatrix} 2 \\\\ 7 \\end{pmatrix} = \\begin{pmatrix} \\frac{2}{5} \\\\ \\frac{7}{5} \\end{pmatrix}$.' }
        ],
        result: '$A^{-1} = \\frac{1}{5}\\begin{pmatrix}4&-3\\\\-1&2\\end{pmatrix}$ and $X = (\\frac{2}{5}, \\frac{7}{5})^T$.'
      },
      {
        title: 'Adjoint modulus shortcut',
        problem: 'If $|A| = 3$ for a $3 \\times 3$ matrix $A$, find $|\\mathrm{adj}\\, A|$ and $|A^{-1}|$.',
        steps: [
          { label: 'Step 1', text: '```text\n|adj A| = |A|^{n-1} = 3^2; |A^{-1}| = 1/|A|\n```\nApply $|\\mathrm{adj}\\, A| = |A|^{n-1}$ with $n = 3$.' },
          { label: 'Step 2', text: 'Thus $|\\mathrm{adj}\\, A| = 3^{2} = 9$. No cofactor expansion is needed.' },
          { label: 'Step 3', text: 'Also $|A^{-1}| = \\frac{1}{|A|} = \\frac{1}{3}$. Product check: $|A||A^{-1}| = 1$.' }
        ],
        result: '$|\\mathrm{adj}\\, A| = 9$ and $|A^{-1}| = \\frac{1}{3}$.'
      }
    ],
    keyTakeaways: [
      '$\\mathrm{adj}\\, A$ is the transposed cofactor matrix; the transpose must not be skipped.',
      '$A(\\mathrm{adj}\\, A) = |A|I$ gives inverses, singularity tests and modulus relations together.',
      'Invertible exactly when $|A| \\ne 0$, with $A^{-1} = \\frac{1}{|A|}\\mathrm{adj}\\, A$.',
      'Respect multiplication side: $AX = B$ needs left $A^{-1}$; $XA = B$ needs right $A^{-1}$.'
    ],
    quiz: [
      {
        q: 'For invertible $A$, $A^{-1}$ equals',
        options: [`$\\frac{1}{|A|}A$`, `$\\frac{1}{|A|}\\mathrm{adj}\\, A$`, `$|A|\\mathrm{adj}\\, A$`, `$\\mathrm{adj}\\, A$`],
        answer: 1,
        explanation: 'Step 1: Start from $A(\\mathrm{adj}\\, A) = |A|I$. Step 2: Divide by nonzero $|A|$. Step 3: Read $A^{-1} = \\frac{1}{|A|}\\mathrm{adj}\\, A$. Step 4: Omitting the adjoint or the division gives the distractors.'
      },
      {
        q: 'If $A$ is $3 \\times 3$ with $|A| = 2$, then $|\\mathrm{adj}\\, A|$ is',
        options: [`$2$`, `$8$`, `$4$`, `$\\frac{1}{2}$`],
        answer: 2,
        explanation: 'Step 1: Use $|\\mathrm{adj}\\, A| = |A|^{n-1}$. Step 2: Here $n - 1 = 2$. Step 3: Hence $2^2 = 4$. Step 4: Power $3$ would suit $|kA|$, not adjoint.'
      },
      // PYQ-pattern: adjoint-modulus power drill
      {
        q: '$AX = B$ with $|A| \\ne 0$ is solved by',
        options: [`$X = A^{-1}B$`, `$X = BA^{-1}$`, `$X = AB$`, `$X = B - A$`],
        answer: 0,
        explanation: 'Step 1: Left-multiply by $A^{-1}$ to get $A^{-1}AX = A^{-1}B$. Step 2: Simplify to $X = A^{-1}B$. Step 3: Right form $BA^{-1}$ solves $XA = B$ instead. Step 4: Products $AB$ or differences ignore inversion entirely.'
      },
      {
        q: 'A square matrix is invertible exactly when',
        options: [`$|A| = 0$`, '$A$ is symmetric', `$\\mathrm{adj}\\, A = 0$`, `$|A| \\ne 0$`],
        answer: 3,
        explanation: 'Step 1: Inverse formula divides by $|A|$. Step 2: Division needs nonzero denominator. Step 3: Zero determinant means singular with no inverse. Step 4: Symmetry is unrelated to invertibility.'
      }
    ],
    depth: [
      {
        tier: 'masters',
        title: 'Adjugate identities and rank one updates',
        blocks: [
          {
            kind: 'theorem',
            body: 'For every square matrix $A$ the **adjugate identity** states $A \\, \\mathrm{adj}(A) = \\mathrm{adj}(A) \\, A = \\det(A) I$, where $\\mathrm{adj}(A)$ is the transpose of the cofactor matrix. Hence $A$ is invertible exactly when $\\det(A) \\ne 0$, with $A^{-1} = \\mathrm{adj}(A)/\\det(A)$. The rank of the adjugate is extremal: it equals $n$ when $A$ has full rank, equals $1$ when the rank of $A$ is $n - 1$, and equals $0$ when the rank of $A$ is below $n - 1$. Thus the adjugate detects how singular a matrix is, not merely whether it is singular.'
          },
          {
            kind: 'proof',
            body: 'The diagonal entries of $A \\, \\mathrm{adj}(A)$ are Laplace expansions of $\\det(A)$ along each row, while the off diagonal entries are expansions of determinants with a repeated row and therefore vanish. This proves the identity for all $A$ by pure polynomial algebra, with no division. When $\\det(A) \\ne 0$ division yields the inverse formula. When the rank is $n - 1$ some cofactor is nonzero so the adjugate is nonzero, yet $A \\, \\mathrm{adj}(A) = 0$ forces every column of the adjugate into the one dimensional kernel of $A$, giving rank one. Lower rank kills all cofactors.'
          },
          {
            kind: 'example',
            heading: 'Two by two inverse in one line',
            body: 'For $A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$ the cofactor transpose is $\\mathrm{adj}(A) = \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$ and $\\det(A) = ad - bc$. The identity reads $A \\, \\mathrm{adj}(A) = (ad-bc)I$, verified by direct multiplication with cancellation of $bc$ and $ad$ cross terms off the diagonal. When $ad - bc \\ne 0$ the inverse is obtained with no elimination, and when $ad - bc = 0$ but $A \\ne 0$ the adjugate has rank one with columns spanning the kernel direction. This is the smallest case of the general rank trichotomy.'
          }
        ]
      }
    ]
  },
  // ---------------------------------------------------------------- 3.3
  {
    sectionId: 'advmath-ch3-s3',
    readingTime: 9,
    intro: 'Cramer rule writes each unknown as a ratio of determinants, while $|A| = 0$ forces a consistency check on the augmented system. Homogeneous systems always keep the trivial solution and gain nontrivial ones exactly at singularity. This section classifies unique, infinite and no-solution cases.',
    objectives: [
      'Apply Cramer rule $x_i = \\frac{|A_i|}{|A|}$ for $|A| \\ne 0$ in two and three variables',
      'Test consistency for $|A| = 0$ via augmented ranks and proportionality of equations',
      'Separate trivial from nontrivial solutions of $AX = 0$ using $|A| = 0$'
    ],
    concepts: [
      {
        term: 'Cramer rule',
        kind: 'theorem',
        statement: 'When **$|A| \\ne 0$**, `xi = |Ai| / |A|` gives $x_i = \\frac{|A_i|}{|A|}$ where $A_i$ replaces column $i$ by constants.',
        detail: 'For $2 \\times 2$ system $ax+by = e$, $cx+dy = f$: $x = \\frac{ed-bf}{ad-bc}$ and $y = \\frac{af-ec}{ad-bc}$. The rule is efficient for two variables but heavy for larger parametric systems.'
      },
      {
        term: 'Unique-solution certificate',
        kind: 'law',
        statement: 'Nonzero **$|A| \\ne 0$** with `square coefficient matrix` guarantees exactly one solution $X = A^{-1}B$.',
        detail: 'Geometrically two lines meet once and three planes meet once. No further check is needed once $|A| \\ne 0$ is confirmed.'
      },
      {
        term: 'Singular nonhomogeneous split',
        kind: 'law',
        statement: 'If **$|A| = 0$** then `compare augmented ranks`: equal ranks below $n$ give infinitely many solutions, unequal ranks give none.',
        detail: 'For two equations proportionality $\\frac{a_1}{a_2} = \\frac{b_1}{b_2} \\ne \\frac{c_1}{c_2}$ means parallel distinct lines (no solution), while all three ratios equal means coincident lines (infinite solutions).'
      },
      {
        term: 'Homogeneous systems',
        kind: 'theorem',
        statement: 'System **$AX = 0$** always admits `X = 0`, and nontrivial solutions exist iff $|A| = 0$.',
        detail: 'For $|A| \\ne 0$ only the trivial solution exists. For $|A| = 0$ free variables appear; in two variables one equation becomes a multiple of the other.'
      },
      {
        term: 'Consistency shortcut',
        kind: 'method',
        statement: 'Eliminate to **echelon form** with `row moves preserving solution set` and read pivots versus contradictory $0 = k \\ne 0$ rows.',
        detail: 'A row $0 = 0$ signals dependence (infinite or free solutions); a row $0 = k \\ne 0$ signals inconsistency. This avoids computing many $3 \\times 3$ determinants for one decision.'
      }
    ],
    examples: [
      {
        title: 'Cramer solution of a two-variable system',
        problem: 'Solve $2x + 3y = 7$ and $x - y = 1$ by determinants.',
        steps: [
          { label: 'Step 1', text: '```text\nD = 2*(-1) - 3*1 = -5; Dx and Dy by column replacement\n```\n$|A| = \\begin{vmatrix} 2 & 3 \\\\ 1 & -1 \\end{vmatrix} = -2 - 3 = -5 \\ne 0$, so a unique solution exists.' },
          { label: 'Step 2', text: '$|A_x| = \\begin{vmatrix} 7 & 3 \\\\ 1 & -1 \\end{vmatrix} = -7 - 3 = -10$, hence $x = \\frac{-10}{-5} = 2$. Similarly $|A_y| = \\begin{vmatrix} 2 & 7 \\\\ 1 & 1 \\end{vmatrix} = 2 - 7 = -5$, so $y = \\frac{-5}{-5} = 1$.' },
          { label: 'Step 3', text: 'Check: $2(2) + 3(1) = 7$ and $2 - 1 = 1$. The nonzero $|A|$ already guaranteed this single pair.' }
        ],
        result: '$(x, y) = (2, 1)$, the unique intersection point.'
      },
      {
        title: 'Singular system classification',
        problem: 'Classify $x + 2y = 3$ and $2x + 4y = k$ by $k$.',
        steps: [
          { label: 'Step 1', text: '```text\n|A| = 1*4 - 2*2 = 0; ratios 1/2 = 2/4 =? 3/k\n```\n$|A| = 4 - 4 = 0$, so lines are parallel or coincident.' },
          { label: 'Step 2', text: 'Ratios $\\frac{1}{2} = \\frac{2}{4} = \\frac{1}{2}$ for coefficients. If $\\frac{3}{k} = \\frac{1}{2}$, i.e. $k = 6$, all ratios match: coincident lines with infinitely many solutions.' },
          { label: 'Step 3', text: 'If $k \\ne 6$, the constant ratio differs: distinct parallel lines with no solution. No unique case ever occurs since $|A| = 0$.' }
        ],
        result: 'Infinite solutions for $k = 6$; no solution for $k \\ne 6$.'
      }
    ],
    keyTakeaways: [
      'Cramer $x_i = \\frac{|A_i|}{|A|}$ needs $|A| \\ne 0$ and gives the unique solution directly.',
      '$|A| \\ne 0$ means one solution; $|A| = 0$ needs an augmented consistency check.',
      'Proportional coefficients with mismatched constants mean no solution; fully proportional means infinite.',
      '$AX = 0$ has nontrivial solutions exactly when $|A| = 0$.'
    ],
    quiz: [
      {
        q: 'Cramer rule applies when',
        options: [`$|A| = 0$`, `$|A| \\ne 0$`, `$B = 0$`, '$A$ is non-square'],
        answer: 1,
        explanation: 'Step 1: Formula divides by $|A|$. Step 2: Division needs nonzero denominator. Step 3: Zero determinant forces rank analysis instead. Step 4: Non-square matrices have no $|A|$ at all.'
      },
      {
        q: '$x + y = 2$ and $2x + 2y = 4$ have',
        options: [`$\\text{no solution}$`, `$\\text{a unique solution}$`, `$\\text{infinitely many solutions}$`, `$\\text{only } (0,0)$`],
        answer: 2,
        explanation: 'Step 1: Second equation is twice the first. Step 2: Both describe the same line. Step 3: Every point of the line solves the system. Step 4: Unique solution would need $|A| \\ne 0$.'
      },
      // PYQ-pattern: parallel-versus-coincident classification
      {
        q: '$x + y = 2$ and $x + y = 5$ have',
        options: [`$\\text{infinitely many}$`, `$\\text{no solution}$`, `$\\text{unique } (2,5)$`, `$\\text{unique } (0,0)$`],
        answer: 1,
        explanation: 'Step 1: Left sides identical, right sides differ. Step 2: No $(x,y)$ gives sum $2$ and $5$ together. Step 3: Lines are distinct parallels. Step 4: Hence the system is inconsistent.'
      },
      {
        q: '$AX = 0$ with square $A$ has nontrivial solutions iff',
        options: [`$|A| \\ne 0$`, `$|A| = 0$`, `$B \\ne 0$`, `$A = I$`],
        answer: 1,
        explanation: 'Step 1: Trivial $X = 0$ always works. Step 2: Invertible $A$ forces $X = A^{-1}0 = 0$ only. Step 3: Singular $A$ frees at least one variable. Step 4: Hence $|A| = 0$ is the exact criterion.'
      }
    ]
  },
  // ---------------------------------------------------------------- 3.4
  {
    sectionId: 'advmath-ch3-s4',
    readingTime: 7,
    intro: 'Three points make a triangle whose signed area is half a $3 \\times 3$ determinant. Vanishing of that determinant is the collinearity test, and the same determinant writes the line through two points. This section converts coordinate geometry into determinant evaluations.',
    objectives: [
      'Compute triangle area as $\\frac{1}{2}|\\Delta|$ with the unit-column determinant and handle sign',
      'Test collinearity by $\\Delta = 0$ and find a missing coordinate from it',
      'Write the line through $(x_1,y_1)$ and $(x_2,y_2)$ as a vanishing $3 \\times 3$ determinant'
    ],
    concepts: [
      {
        term: 'Area determinant',
        kind: 'theorem',
        statement: 'Triangle area is **$\\frac{1}{2}|\\Delta|$** with `unit column of ones`: $\\Delta = \\begin{vmatrix}x_1&y_1&1\\\\x_2&y_2&1\\\\x_3&y_3&1\\end{vmatrix}$.',
        detail: 'The absolute value removes orientation sign; the $\\frac{1}{2}$ is the triangle factor. Order of points affects sign of $\\Delta$ but not $|\\Delta|$.'
      },
      {
        term: 'Collinearity test',
        kind: 'theorem',
        statement: 'Three points are **collinear iff `area determinant = 0`**, i.e. $\\begin{vmatrix}x_1&y_1&1\\\\x_2&y_2&1\\\\x_3&y_3&1\\end{vmatrix} = 0$.',
        detail: 'Zero area means zero height. This single equation finds the unknown coordinate that aligns a third point with two given ones.'
      },
      {
        term: 'Line through two points',
        kind: 'method',
        statement: 'Line $PQ$ is **$\\begin{vmatrix}x&y&1\\\\x_1&y_1&1\\\\x_2&y_2&1\\end{vmatrix} = 0$** with `variable first row`, expanded as $(y_1-y_2)x + (x_2-x_1)y + (x_1y_2-x_2y_1) = 0$.',
        detail: 'It vanishes exactly when $(x,y)$ is collinear with $P, Q$. Two-point form and intercept form both follow from this determinant by expansion.'
      },
      {
        term: 'Sign and orientation',
        kind: 'insight',
        statement: 'Sign of $\\Delta$ records **orientation**: `positive for anticlockwise order` and negative for clockwise order of the three points.',
        detail: 'Cyclic permutation of rows preserves $\\Delta$; swapping two rows flips it. For area magnitude always take $|\\Delta|$.'
      },
      {
        term: 'Degenerate-point trap',
        kind: 'insight',
        statement: 'Repeated points force **$\\Delta = 0$** with `two identical rows`, which reports collinearity even though no unique line exists.',
        detail: 'Always check distinctness first: if $P = Q$ the line determinant vanishes identically ($0 = 0$) and carries no geometric data.'
      }
    ],
    examples: [
      {
        title: 'Area and collinearity check',
        problem: 'Find the area of triangle $(1,0)$, $(2,3)$, $(4,1)$ and test if $(0,0)$, $(1,1)$, $(2,2)$ are collinear.',
        steps: [
          { label: 'Step 1', text: '```text\nDelta = |1 0 1; 2 3 1; 4 1 1|; expand along R1\n```\n$\\Delta = 1(3\\cdot1-1\\cdot1) - 0 + 1(2\\cdot1-3\\cdot4) = 1(2) + (2-12) = -8$.' },
          { label: 'Step 2', text: 'Area $= \\frac{1}{2}|-8| = 4$. Sign negative merely records clockwise ordering.' },
          { label: 'Step 3', text: 'Second triple: rows $(0,0,1)$, $(1,1,1)$, $(2,2,1)$ have first two columns proportional, so $\\Delta = 0$. Points lie on $y = x$, hence collinear.' }
        ],
        result: 'Area $4$ square units; second triple collinear on $y = x$.'
      },
      {
        title: 'Line by determinant',
        problem: 'Write the line through $(2,1)$ and $(5,4)$ via determinant and simplify.',
        steps: [
          { label: 'Step 1', text: '```text\n| x y 1; 2 1 1; 5 4 1 | = 0; expand\n```\nSet $\\begin{vmatrix}x&y&1\\\\2&1&1\\\\5&4&1\\end{vmatrix} = 0$.' },
          { label: 'Step 2', text: 'Expand: $x(1-4) - y(2-5) + 1(8-5) = -3x + 3y + 3 = 0$.' },
          { label: 'Step 3', text: 'Divide by $-3$: $x - y - 1 = 0$, i.e. $y = x - 1$. Both given points meet it: $1 = 1$ and $4 = 4$.' }
        ],
        result: 'Line $x - y - 1 = 0$.'
      }
    ],
    keyTakeaways: [
      'Area $= \\frac{1}{2}|\\Delta|$ with unit column; sign records orientation only.',
      'Collinearity is $\\Delta = 0$; use it to solve for the aligning coordinate.',
      'Line through $P, Q$ is the vanishing determinant with variable row $(x, y, 1)$.',
      'Identical points give $0 = 0$: confirm distinctness before reading a line.'
    ],
    quiz: [
      {
        q: 'Area of triangle $(0,0)$, $(4,0)$, $(0,3)$ is',
        options: [`$6$`, `$12$`, `$7$`, `$5$`],
        answer: 0,
        explanation: 'Step 1: $\\Delta = 4 \\cdot 3 - 0 = 12$ up to sign. Step 2: Halve to $6$. Step 3: Right-triangle legs $4$ and $3$ confirm $\\frac{12}{2}$. Step 4: Value $12$ omits the half.'
      },
      {
        q: 'Points $(1,2)$, $(3,4)$, $(5,6)$ are',
        options: [`$\\text{non-collinear}$`, `$\\text{collinear}$`, `$\\text{vertices of area } 2$`, `$\\text{vertices of area } 6$`],
        answer: 1,
        explanation: 'Step 1: Successive differences are both $(2,2)$. Step 2: Points lie on $y = x + 1$. Step 3: Area determinant vanishes. Step 4: Hence collinear.'
      },
      // PYQ-pattern: missing-coordinate alignment
      {
        q: 'For collinearity of $(0,0)$, $(2,0)$, $(1,k)$ the value of $k$ is',
        options: [`$1$`, `$0$`, `$2$`, `$-1$`],
        answer: 1,
        explanation: 'Step 1: Base points fix the $x$-axis $y = 0$. Step 2: Third point must have $y = 0$. Step 3: So $k = 0$. Step 4: Other values lift the point off the axis.'
      },
      {
        q: 'Line through $(1,1)$ and $(2,3)$ has equation',
        options: [`$2x - y - 1 = 0$`, `$x + y = 3$`, `$x - y = 0$`, `$2x + y = 5$`],
        answer: 0,
        explanation: 'Step 1: Slope is $\\frac{3-1}{2-1} = 2$. Step 2: Form $y - 1 = 2(x - 1)$. Step 3: Rearranged $2x - y - 1 = 0$. Step 4: Other options fail at one of the points.'
      }
    ],
    depth: [
      {
        tier: 'masters',
        title: 'Determinants as signed volume and area',
        blocks: [
          {
            kind: 'theorem',
            body: 'Three points $(x_{1},y_{1})$, $(x_{2},y_{2})$ and $(x_{3},y_{3})$ span **signed area** $\\Delta = (1/2)(x_{1}(y_{2}-y_{3}) + x_{2}(y_{3}-y_{1}) + x_{3}(y_{1}-y_{2}))$, which is half of a $3 \\times 3$ determinant with a column of ones. Hence collinearity holds exactly when that determinant vanishes. The absolute value gives Euclidean area while the sign records orientation: positive for anticlockwise ordering and negative for clockwise. Scaling all coordinates by $t$ scales the determinant by $t^{2}$, confirming that it measures two dimensional volume.'
          },
          {
            kind: 'proof',
            body: 'Translate so $(x_{1},y_{1})$ moves to the origin; translation invariance of differences leaves the determinant unchanged. The remaining $2 \\times 2$ determinant $x_{2}y_{3} - x_{3}y_{2}$ equals $|u||v|\\sin\\theta$ for edge vectors $u$ and $v$ with included angle $\\theta$, which is twice the triangle area by the half product formula. The sign of $\\sin\\theta$ distinguishes the two orientations. Vanishing means $\\sin\\theta = 0$, so the edge vectors are linearly dependent and the three points lie on one line. The line through two points follows by demanding that the determinant with a variable third point vanish.'
          },
          {
            kind: 'example',
            heading: 'Line through two points from vanishing area',
            body: 'The line through $(1,1)$ and $(2,3)$ is the set of $(x,y)$ making the triple area zero, which expands to $(3-1)(x-1) - (2-1)(y-1) = 0$, namely $2x - y - 1 = 0$. Direction $(1,2)$ has slope $2$ as required. Interchanging the two base points flips the sign of the determinant but leaves the zero set unchanged, showing that orientation affects the signed area while the geometric line depends only on vanishing. When a third test point is inserted, the same determinant instantly reports twice its signed distance times base length.'
          }
        ]
      }
    ]
  }
]
