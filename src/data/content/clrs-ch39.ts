import type { SectionContent } from '../library'

// ============================================================================
// CLRS — Introduction to Algorithms, 3rd Edition
// Appendix D (Chapter 39): Matrices (Sections D.1 – D.2)
// Master study content.
// ============================================================================

export const clrsCh39Content: SectionContent[] = [
  // ------------------------------------------------------------- 39.1
  {
    sectionId: "clrs-ch39-s1",
    readingTime: 6,
    intro: "Matrices are the data structure of linear algebra and of half the book's algorithms — Strassen's multiplication, shortest paths, flows, and least squares all reduce to matrix operations. This section fixes the notation: matrices as rectangular arrays, vectors as one-dimensional special cases, the transpose, and the family of structured square matrices (diagonal, triangular, tridiagonal, permutation, symmetric). Then the operations — componentwise addition and scalar multiples, the row-times-column product that costs $\\Theta(n^3)$ in the schoolbook implementation, and the inner and outer products and Euclidean norm for vectors.",
    objectives: [
      "Use matrix notation — transpose, unit vectors, zero matrix — and classify diagonal, triangular, tridiagonal, permutation and symmetric matrices",
      "Compute matrix sums, scalar multiples and products, tracking compatibility and the $n^3$ cost of SQUARE-MATRIX-MULTIPLY",
      "Compute matrix–vector products, inner and outer products, and Euclidean norms",
    ],
    concepts: [
      {
        term: "Matrices, vectors, transpose",
        kind: "definition",
        statement: "A **matrix** is a rectangular array of numbers: $A = (a_{ij})$ denotes the $m \\times n$ matrix whose row-$i$, column-$j$ entry is $a_{ij}$ — equation (D.1):\n$$A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\end{pmatrix}$$\nis $2 \\times 3$. The set of $m \\times n$ real matrices is $\\mathbb{R}^{m \\times n}$; entries drawn from a set $S$ give $S^{m \\times n}$. The **transpose** $A^{T}$ exchanges rows and columns: here $A^{T} = \\begin{pmatrix} 1 & 4 \\\\ 2 & 5 \\\\ 3 & 6 \\end{pmatrix}$. A **vector** is a one-dimensional array; an **$n$-vector** $x$ has elements $x_1, \\ldots, x_n$; the standard form is the **column vector** (an $n \\times 1$ matrix), whose transpose is the row vector. The **unit vector** $e_i$ has a 1 in position $i$ and 0s elsewhere (size from context), and the **zero matrix** is all 0s.",
        detail: "Since a column vector is simply an $n \\times 1$ matrix, every matrix fact below applies to vectors for free — the transpose of an $n$-vector is a $1 \\times n$ matrix.",
      },
      {
        term: "Special square matrices",
        kind: "definition",
        statement: "Square $n \\times n$ matrices of special shape: a **diagonal** matrix has $a_{ij} = 0$ whenever $i \\ne j$ — all off-diagonal entries zero — and is written $\\mathrm{diag}(a_{11}, a_{22}, \\ldots, a_{nn})$. The **identity matrix** $I_n = \\mathrm{diag}(1, 1, \\ldots, 1)$; its $i$th column is the unit vector $e_i$. A **tridiagonal** matrix $T$ has $t_{ij} = 0$ whenever $|i - j| > 1$: nonzeros live only on the main diagonal and its immediate neighbors. An **upper-triangular** matrix $U$ has $u_{ij} = 0$ for $i > j$ (below the diagonal all zero; *unit* upper-triangular if the diagonal is all 1s), and **lower-triangular** $L$ mirrors this above the diagonal. A **permutation matrix** $P$ has exactly one 1 in each row and each column and 0s elsewhere — multiplying a vector $x$ by $P$ permutes the elements of $x$. A **symmetric** matrix satisfies $A = A^{T}$, e.g. $\\begin{pmatrix} 1 & 2 & 3 \\\\ 2 & 6 & 4 \\\\ 3 & 4 & 5 \\end{pmatrix}$.",
        detail: "These shapes are exactly what Chapter 28 exploits: LUP decomposition factors any nonsingular matrix into a permutation matrix times lower- and upper-triangular matrices.",
      },
      {
        term: "Addition and scalar multiplication",
        kind: "definition",
        statement: "If $A = (a_{ij})$ and $B = (b_{ij})$ are both $m \\times n$ matrices, the **matrix sum** $C = A + B$ is componentwise: $c_{ij} = a_{ij} + b_{ij}$ for every $i, j$. The zero matrix is the identity for addition: $A + 0 = 0 + A = A$. For a number $\\lambda$, the **scalar multiple** $\\lambda A = (\\lambda a_{ij})$ scales every entry; the **negative** $-A = (-1)A$ has entries $-a_{ij}$, so $A + (-A) = 0$, and **matrix subtraction** is $A - B = A + (-B)$.",
        detail: "Addition inherits commutativity and associativity from the underlying number system — the reals, complexes, or integers modulo a prime — because it is just $mn$ simultaneous scalar additions.",
      },
      {
        term: "Matrix multiplication",
        kind: "definition",
        statement: "The product $AB$ requires **compatibility**: the number of columns of $A$ equals the number of rows of $B$ (any expression containing $AB$ is implicitly assumed compatible). For $A = (a_{ik})$ an $m \\times n$ matrix and $B = (b_{kj})$ an $n \\times p$ matrix, the product $C = AB$ is the $m \\times p$ matrix with (equation D.2):\n$$c_{ij} = \\sum_{k=1}^{n} a_{ik} b_{kj}$$\n— the inner product of row $i$ of $A$ with column $j$ of $B$. SQUARE-MATRIX-MULTIPLY (Section 4.2) implements this directly on $n \\times n$ matrices, performing $n^3$ multiplications and $n^2(n-1)$ additions — $\\Theta(n^3)$ time. Identities: $I_m A = A I_n = A$ and $A \\cdot 0 = 0$ (the zero of the matching size).",
        detail: "Multiplication is associative and distributes over addition (Section 39.2), but for $n > 1$ it is **not commutative** — and the $\\Theta(n^3)$ cost is what Strassen's divide-and-conquer (Section 4.2) beats by block multiplication.",
      },
      {
        term: "Matrix–vector and vector–vector products",
        kind: "definition",
        statement: "Treat vectors as matrices and these products come free: if $A$ is $m \\times n$ and $x$ is an $n$-vector, then $Ax$ is an $m$-vector. For $n$-vectors $x$ and $y$: the **inner product**\n$$x^{T} y = \\sum_{i=1}^{n} x_i y_i$$\nis a number (formally a $1 \\times 1$ matrix); the **outer product** $x y^{T}$ is the $n \\times n$ matrix $Z$ with $z_{ij} = x_i y_j$; and the **(Euclidean) norm** $\\|x\\| = (x_1^2 + x_2^2 + \\cdots + x_n^2)^{1/2} = (x^{T} x)^{1/2}$ is the length of $x$ in $n$-dimensional Euclidean space.",
        detail: "The norm is the raw material of Theorem D.6: $\\|Ax\\|^{2} = (Ax)^{T}(Ax) = x^{T} A^{T} A x$ — which is why $A^{T}A$ keeps showing up in least-squares arguments (Section 28.3).",
      },
    ],
    figures: [
      {
        caption: "The structured square matrices of Appendix D; shaded cells mark where nonzero entries may live. (a) diagonal: $a_{ij} = 0$ for $i \\ne j$; (b) tridiagonal: $t_{ij} = 0$ for $|i - j| > 1$; (c) upper-triangular: $u_{ij} = 0$ for $i > j$, with lower-triangular the mirror image; (d) permutation: exactly one 1 per row and column, so $Px$ rearranges the entries of $x$; (e) symmetric: $A = A^{T}$, so the nonzero pattern mirrors across the main diagonal. Chapter 28's LUP decomposition factors any nonsingular matrix into a permutation matrix times triangular matrices — all five shapes in service at once.",
        afterConcept: 2,
        svg: `<svg viewBox="0 0 720 300" width="100%" role="img" aria-label="Five six-by-six grids showing the zero patterns of diagonal, tridiagonal, upper-triangular, permutation, and symmetric matrices, with shaded cells where nonzero entries may appear"><g font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle"><text x="106" y="78">(a) diagonal</text><text x="242" y="78">(b) tridiagonal</text><text x="378" y="78">(c) upper-triangular</text><text x="514" y="78">(d) permutation</text><text x="650" y="78">(e) symmetric</text></g><g stroke="currentColor" stroke-width="0.9" opacity="0.8"><rect x="46" y="96" width="120" height="120"/><rect x="182" y="96" width="120" height="120"/><rect x="318" y="96" width="120" height="120"/><rect x="454" y="96" width="120" height="120"/><rect x="590" y="96" width="120" height="120"/></g><g fill="currentColor" fill-opacity="0.18"><rect x="46" y="96" width="20" height="20"/><rect x="66" y="116" width="20" height="20"/><rect x="86" y="136" width="20" height="20"/><rect x="106" y="156" width="20" height="20"/><rect x="126" y="176" width="20" height="20"/><rect x="146" y="196" width="20" height="20"/><rect x="182" y="96" width="60" height="20"/><rect x="202" y="116" width="60" height="20"/><rect x="222" y="136" width="60" height="20"/><rect x="242" y="156" width="60" height="20"/><rect x="262" y="176" width="60" height="20"/><rect x="282" y="196" width="20" height="20"/><rect x="318" y="96" width="120" height="20"/><rect x="338" y="116" width="100" height="20"/><rect x="358" y="136" width="80" height="20"/><rect x="378" y="156" width="60" height="20"/><rect x="398" y="176" width="40" height="20"/><rect x="418" y="196" width="20" height="20"/><rect x="474" y="96" width="20" height="20"/><rect x="454" y="116" width="20" height="20"/><rect x="514" y="136" width="20" height="20"/><rect x="474" y="156" width="20" height="20"/><rect x="554" y="176" width="20" height="20"/><rect x="514" y="196" width="20" height="20"/><rect x="630" y="96" width="20" height="20"/><rect x="630" y="116" width="20" height="20"/><rect x="610" y="136" width="20" height="20"/><rect x="650" y="136" width="20" height="20"/><rect x="670" y="176" width="20" height="20"/><rect x="630" y="196" width="20" height="20"/><rect x="670" y="156" width="20" height="20"/><rect x="670" y="196" width="20" height="20"/><rect x="610" y="196" width="20" height="20"/></g><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 4" opacity="0.5"><line x1="106" y1="90" x2="106" y2="222"/><line x1="242" y1="90" x2="242" y2="222"/><line x1="378" y1="90" x2="378" y2="222"/><line x1="514" y1="90" x2="514" y2="222"/><line x1="650" y1="90" x2="650" y2="222"/><line x1="166" y1="156" x2="46" y2="156"/><line x1="302" y1="156" x2="182" y2="156"/><line x1="438" y1="156" x2="318" y2="156"/><line x1="574" y1="156" x2="454" y2="156"/><line x1="710" y1="156" x2="590" y2="156"/></g><text x="360" y="264" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor" text-anchor="middle" opacity="0.75">dashed diagonals mark the main diagonal — (e) mirrors across it</text></svg>`,
      },
      {
        caption: "The product $C = AB$ of an $m \\times n$ and an $n \\times p$ matrix, blocked into stripes. Row $i$ of $A$ (amber) and column $j$ of $B$ (amber) combine to give the single entry $c_{ij} = \\sum_{k=1}^{n} a_{ik} b_{kj}$ of the $m \\times p$ matrix $C$ — $n$ multiply–adds per entry, $n^3$ multiplications and $n^2(n-1)$ additions in all for square matrices, which is why SQUARE-MATRIX-MULTIPLY runs in $\\Theta(n^3)$. Read the same picture in blocks — $A$ split by columns into $[A_1 \\; A_2]$ and $B$ split by rows — and it says $AB = A_1 B_1 + A_2 B_2$: block multiplication is the dot-product picture applied to submatrices, the starting point of Strassen's method.",
        afterConcept: 4,
        svg: `<svg viewBox="0 0 720 400" width="100%" role="img" aria-label="Three grids labeled A, B and C equals A times B, with one row of A highlighted, one column of B highlighted, and one cell of C highlighted, and two arrows showing the row and column combining into that cell"><g font-family="ui-sans-serif, system-ui" font-size="12" fill="currentColor" text-anchor="middle"><text x="145" y="84" font-weight="bold">A is m × n</text><text x="345" y="40" font-weight="bold">B is n × p</text><text x="571" y="76" font-weight="bold">C = AB is m × p</text></g><g stroke="currentColor" stroke-width="1.5" fill="none"><rect x="70" y="100" width="150" height="120"/><rect x="300" y="75" width="90" height="150"/><rect x="520" y="88" width="102" height="136"/></g><g fill="none" stroke="currentColor" stroke-width="2"><path d="M 64 100 L 58 100 L 58 220 L 64 220"/><path d="M 226 100 L 232 100 L 232 220 L 226 220"/><path d="M 294 75 L 288 75 L 288 225 L 294 225"/><path d="M 396 75 L 402 75 L 402 225 L 396 225"/><path d="M 514 88 L 508 88 L 508 224 L 514 224"/><path d="M 622 88 L 628 88 L 628 224 L 622 224"/></g><g stroke="currentColor" stroke-width="0.9" opacity="0.75"><line x1="100" y1="100" x2="100" y2="220"/><line x1="130" y1="100" x2="130" y2="220"/><line x1="160" y1="100" x2="160" y2="220"/><line x1="190" y1="100" x2="190" y2="220"/><line x1="70" y1="130" x2="220" y2="130"/><line x1="70" y1="160" x2="220" y2="160"/><line x1="70" y1="190" x2="220" y2="190"/><line x1="330" y1="75" x2="330" y2="225"/><line x1="360" y1="75" x2="360" y2="225"/><line x1="300" y1="105" x2="390" y2="105"/><line x1="300" y1="135" x2="390" y2="135"/><line x1="300" y1="165" x2="390" y2="165"/><line x1="300" y1="195" x2="390" y2="195"/><line x1="554" y1="88" x2="554" y2="224"/><line x1="588" y1="88" x2="588" y2="224"/><line x1="520" y1="122" x2="622" y2="122"/><line x1="520" y1="156" x2="622" y2="156"/><line x1="520" y1="190" x2="622" y2="190"/></g><rect x="70" y="160" width="150" height="30" fill="#f59e0b" fill-opacity="0.14" stroke="#f59e0b" stroke-width="1.8"/><g font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" text-anchor="middle"><text x="85" y="180">a₃₁</text><text x="115" y="180">a₃₂</text><text x="145" y="180">a₃₃</text><text x="175" y="180">a₃₄</text><text x="205" y="180">a₃₅</text></g><rect x="330" y="75" width="30" height="150" fill="#f59e0b" fill-opacity="0.14" stroke="#f59e0b" stroke-width="1.8"/><g font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" text-anchor="middle"><text x="345" y="93">b₁₂</text><text x="345" y="123">b₂₂</text><text x="345" y="153">b₃₂</text><text x="345" y="183">b₄₂</text><text x="345" y="213">b₅₂</text></g><rect x="554" y="156" width="34" height="34" fill="#f59e0b" fill-opacity="0.30" stroke="#f59e0b" stroke-width="2"/><text x="571" y="177" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor" text-anchor="middle" font-weight="bold">c₃₂</text><text x="54" y="178" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor" text-anchor="end" font-style="italic">row i</text><text x="345" y="243" font-family="ui-sans-serif, system-ui" font-size="11.5" fill="currentColor" text-anchor="middle" font-style="italic">column j</text><text x="252" y="170" font-family="ui-sans-serif, system-ui" font-size="18" fill="currentColor" text-anchor="middle">×</text><text x="452" y="166" font-family="ui-sans-serif, system-ui" font-size="17" fill="currentColor" text-anchor="middle">=</text><g fill="none" stroke="#f59e0b" stroke-width="1.4" stroke-dasharray="5 3"><path d="M 232 175 C 262 175 262 262 340 262 L 470 262 C 500 262 505 215 508 190"/><path d="M 402 150 C 445 150 460 160 508 172"/></g><polygon points="508,190 500,186 504,179" fill="#f59e0b"/><polygon points="508,172 498,168 500,177" fill="#f59e0b"/><g font-family="ui-sans-serif, system-ui" font-size="13" fill="currentColor" text-anchor="middle"><text x="360" y="322">cᵢⱼ = aᵢ₁b₁ⱼ + aᵢ₂b₂ⱼ + ⋯ + aᵢₙbₙⱼ</text><text x="360" y="348" font-size="11.5" opacity="0.75">the dot product of row i of A with column j of B</text></g><text x="360" y="376" font-family="ui-sans-serif, system-ui" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.6">(grid drawn for m = 4 rows, n = 5 columns, p = 3 columns)</text></svg>`,
      },
    ],
    examples: [
      {
        title: "A full 2×3 times 3×2 product",
        problem: "Compute $AB$ for $A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\end{pmatrix}$ and $B = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\\\ 5 & 6 \\end{pmatrix}$, and describe the shape of $BA$.",
        steps: [
          { label: "Step 1: Check compatibility", text: "$A$ is $2 \\times 3$ and $B$ is $3 \\times 2$: the inner dimensions match, so $AB$ is $2 \\times 2$ (and $BA$ will be $3 \\times 3$)." },
          { label: "Step 2: Row 1", text: "$c_{11} = 1 \\cdot 1 + 2 \\cdot 3 + 3 \\cdot 5 = 22$ and $c_{12} = 1 \\cdot 2 + 2 \\cdot 4 + 3 \\cdot 6 = 28$." },
          { label: "Step 3: Row 2", text: "$c_{21} = 4 \\cdot 1 + 5 \\cdot 3 + 6 \\cdot 5 = 49$ and $c_{22} = 4 \\cdot 2 + 5 \\cdot 4 + 6 \\cdot 6 = 64$." },
          { label: "Step 4: The other order", text: "$BA$ is defined but $3 \\times 3$; even its first entry differs in kind: $(BA)_{11} = 1 \\cdot 1 + 2 \\cdot 4 = 9$." },
        ],
        result: "$AB = \\begin{pmatrix} 22 & 28 \\\\ 49 & 64 \\end{pmatrix}$; $BA$ is a $3 \\times 3$ matrix. When both orders are defined they generally differ in size — let alone in value.",
      },
      {
        title: "Permutations, inner products, norms",
        problem: "Let $P = \\begin{pmatrix} 0 & 1 & 0 \\\\ 1 & 0 & 0 \\\\ 0 & 0 & 1 \\end{pmatrix}$ (which swaps rows 1 and 2), $A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\\\ 7 & 8 & 9 \\end{pmatrix}$, $x = (2, 3, 5)$, and $y = (1, 0, -1)$. Compute $PA$, $AP$, $x^{T} y$, and $\\|x\\|$.",
        steps: [
          { label: "Step 1: Left-multiply by P", text: "$PA$ permutes the ROWS of $A$ by the same swap: $PA = \\begin{pmatrix} 4 & 5 & 6 \\\\ 1 & 2 & 3 \\\\ 7 & 8 & 9 \\end{pmatrix}$." },
          { label: "Step 2: Right-multiply by P", text: "$AP$ permutes the COLUMNS instead: $AP = \\begin{pmatrix} 2 & 1 & 3 \\\\ 5 & 4 & 6 \\\\ 8 & 7 & 9 \\end{pmatrix}$." },
          { label: "Step 3: Inner product", text: "$x^{T} y = 2 \\cdot 1 + 3 \\cdot 0 + 5 \\cdot (-1) = -3$ — a scalar (a $1 \\times 1$ matrix)." },
          { label: "Step 4: Norm", text: "$\\|x\\| = \\sqrt{2^2 + 3^2 + 5^2} = \\sqrt{38} \\approx 6.16$ — equivalently $(x^{T} x)^{1/2}$ with $x^{T} x = 38$." },
        ],
        result: "Left multiplication by a permutation matrix rearranges rows, right multiplication rearranges columns; the transpose's position in $x^{T} y$ (scalar) versus $xy^{T}$ (a $3 \\times 3$ matrix) decides everything.",
      },
    ],
    keyTakeaways: [
      "A matrix is an $m \\times n$ array $(a_{ij})$; the transpose swaps rows and columns, and vectors are the $n \\times 1$ special case — with unit vectors and the zero matrix as the two degenerate building blocks.",
      "The product $c_{ij} = \\sum_{k=1}^{n} a_{ik} b_{kj}$ costs $n^3$ multiplications and $n^2(n-1)$ additions for square matrices — $\\Theta(n^3)$, the barrier Strassen's blocking attacks.",
      "Special shapes matter: diagonal, tridiagonal, triangular, permutation and symmetric matrices carry Chapters 28's factorizations, while $x^{T} y$ (inner, scalar) and $xy^{T}$ (outer, matrix) differ only in the transpose's position.",
    ],
    quiz: [
      {
        q: "If $A$ is $4 \\times 7$ and $B$ is $7 \\times 3$, the product $AB$ is:",
        options: ["$4 \\times 3$", "$7 \\times 7$", "$3 \\times 4$", "undefined — the inner dimensions differ"],
        answer: 0,
        explanation: "Compatibility is columns of $A$ = rows of $B$ (7 = 7 ✓), and the result takes the OUTER dimensions: $4 \\times 3$. Option D confuses this with $BA$, which IS undefined.",
      },
      {
        q: "SQUARE-MATRIX-MULTIPLY on two $n \\times n$ matrices performs how many scalar multiplications?",
        options: ["$n^3$", "$n^2$", "$n^2(n-1)$", "$n$"],
        answer: 0,
        explanation: "Each of the $n^2$ entries of the product needs the $n$-term sum $\\sum_k a_{ik}b_{kj}$ — one multiplication per term. Option C counts the additions, not the multiplications.",
      },
      {
        q: "For compatible matrices $A$ and $B$, $(AB)^{T}$ equals:",
        options: ["$B^{T} A^{T}$", "$A^{T} B^{T}$", "$(BA)^{T}$", "$A^{T} + B^{T}$"],
        answer: 0,
        explanation: "Entry $ij$ of $AB$ is row $i$ of $A$ times column $j$ of $B$; transposing swaps the roles, so row $j$ of $B$ meets column $i$ of $A$ — the order reverses (Exercise D.1-2).",
      },
      {
        q: "For $n$-vectors $x$ and $y$ with $n > 1$, which statement is true?",
        options: [
          "$x^{T} y$ is a scalar (a $1 \\times 1$ matrix) while $xy^{T}$ is an $n \\times n$ matrix",
          "both $x^{T} y$ and $xy^{T}$ are scalars",
          "$x^{T} y$ is an $n \\times n$ matrix while $xy^{T}$ is a scalar",
          "$x^{T} y$ is defined only when $x = y$",
        ],
        answer: 0,
        explanation: "Read the dimensions: $(1 \\times n)(n \\times 1) = 1 \\times 1$, but $(n \\times 1)(1 \\times n) = n \\times n$ — the position of the transpose decides the shape.",
      },
    ],
  },

  // ------------------------------------------------------------- 39.2
  {
    sectionId: "clrs-ch39-s2",
    readingTime: 7,
    intro: "The algebra of matrices parallels the algebra of numbers — associativity, distributivity, identities — with two great exceptions: multiplication does not commute, and division is replaced by inversion, which can fail. This section assembles the failure-detection kit: rank, null vectors and determinants decide invertibility (Theorems D.1, D.2, D.5), and positive-definite matrices — guaranteed by $A^{T}A$ whenever $A$ has full column rank — close the appendix with the structure Chapter 28 builds on.",
    objectives: [
      "Verify the associative and distributive laws and demonstrate noncommutativity concretely",
      "Decide invertibility via rank, null vectors and determinants (Theorems D.1, D.2, D.5), using identities like $(BA)^{-1} = A^{-1}B^{-1}$",
      "Verify positive-definiteness, including Theorem D.6's $A^{T}A$ construction",
    ],
    concepts: [
      {
        term: "The algebra of matrix products",
        kind: "theorem",
        statement: "For compatible matrices: multiplication is **associative**, $A(BC) = (AB)C$; it **distributes over addition** on both sides, $A(B + C) = AB + AC$ and $(B + C)D = BD + CD$; identities act as $I_m A = A I_n = A$; and multiplying by a zero matrix gives a zero matrix. But for $n > 1$ multiplication is **not commutative**:\n$$\\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix}\\begin{pmatrix} 0 & 0 \\\\ 1 & 0 \\end{pmatrix} = \\begin{pmatrix} 1 & 0 \\\\ 0 & 0 \\end{pmatrix} \\quad \\text{but} \\quad \\begin{pmatrix} 0 & 0 \\\\ 1 & 0 \\end{pmatrix}\\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix} = \\begin{pmatrix} 0 & 0 \\\\ 0 & 1 \\end{pmatrix}.$$",
        detail: "The same pair is the standard counterexample to cancellation: $AB \\ne BA$ here, and either product with a nonzero partner can even be zero. Order must be tracked in every derivation — which is exactly why $(AB)^{T} = B^{T}A^{T}$ and $(BA)^{-1} = A^{-1}B^{-1}$ both reverse order.",
      },
      {
        term: "Matrix inverses",
        kind: "definition",
        statement: "The **inverse** of an $n \\times n$ matrix $A$ is the $n \\times n$ matrix $A^{-1}$ (if it exists) such that $AA^{-1} = I_n = A^{-1}A$. For example,\n$$\\begin{pmatrix} 1 & 1 \\\\ 1 & 0 \\end{pmatrix}^{-1} = \\begin{pmatrix} 0 & 1 \\\\ 1 & -1 \\end{pmatrix}.$$\nA matrix without an inverse is **noninvertible**, or **singular** — e.g. the nonzero $\\begin{pmatrix} 1 & 0 \\\\ 1 & 0 \\end{pmatrix}$; one that has an inverse is **invertible**, or **nonsingular**. Inverses are unique when they exist (Exercise D.2-1). If $A$ and $B$ are nonsingular $n \\times n$ matrices, then $(BA)^{-1} = A^{-1}B^{-1}$ — note the reversal — and the inverse operation commutes with the transpose: $(A^{-1})^{T} = (A^{T})^{-1}$.",
        detail: "Two further transpose facts (Exercise D.1-2) power Theorem D.6: $(AB)^{T} = B^{T}A^{T}$, and $A^{T}A$ is always symmetric.",
      },
      {
        term: "Linear dependence and rank",
        kind: "definition",
        statement: "Vectors $x_1, x_2, \\ldots, x_n$ are **linearly dependent** if there exist coefficients $c_1, \\ldots, c_n$, not all zero, with $c_1 x_1 + \\cdots + c_n x_n = 0$. The rows $(1\\;2\\;3)$, $(2\\;6\\;4)$, $(4\\;11\\;9)$ are dependent, since $2x_1 + 3x_2 - 2x_3 = 0$. Vectors not linearly dependent are **linearly independent** — the columns of an identity matrix are. The **column rank** of a nonzero $m \\times n$ matrix $A$ is the size of the largest set of linearly independent columns of $A$; the **row rank** is the same for rows — and a fundamental fact is that the two always agree, so we speak simply of the **rank** of $A$, an integer between 0 and $\\min(m, n)$. Equivalently, the rank is the smallest $r$ such that $A = BC$ for matrices of sizes $m \\times r$ and $r \\times n$ — often the more useful form. A square $n \\times n$ matrix has **full rank** when its rank is $n$.",
        detail: "**Theorem D.1:** a square matrix has full rank if and only if it is nonsingular. **Theorem D.2:** a matrix has full column rank if and only if it has no null vector (a nonzero $x$ with $Ax = 0$); hence **Corollary D.3:** a square matrix is singular if and only if it has a null vector.",
      },
      {
        term: "Determinants",
        kind: "definition",
        statement: "The $ij$th **minor** $A_{[ij]}$ of an $n \\times n$ matrix ($n > 1$) is the $(n-1) \\times (n-1)$ matrix obtained by deleting the $i$th row and $j$th column. The **determinant** is defined recursively — $\\det(A) = a_{11}$ if $n = 1$; otherwise expansion along the first row:\n$$\\det(A) = \\sum_{j=1}^{n} (-1)^{1+j} a_{1j} \\det(A_{[1j]}),$$\nwith $(-1)^{i+j}\\det(A_{[ij]})$ the **cofactor** of $a_{ij}$. **Theorem D.4** (determinant properties): a zero row or column forces $\\det(A) = 0$; scaling any single row (or column) by $\\lambda$ scales the determinant by $\\lambda$; adding one row (or column) into another leaves the determinant unchanged; $\\det(A) = \\det(A^{T})$; exchanging two rows (or columns) multiplies the determinant by $-1$; and for square $A, B$: $\\det(AB) = \\det(A)\\det(B)$.",
        detail: "**Theorem D.5:** $A$ is singular if and only if $\\det(A) = 0$ — the determinant is the singularity detector. The $2 \\times 2$ case to internalize: $\\begin{vmatrix} a & b \\\\ c & d \\end{vmatrix} = ad - bc$, zero exactly when the rows (or columns) are proportional.",
      },
      {
        term: "Positive-definite matrices",
        kind: "definition",
        statement: "An $n \\times n$ matrix $A$ is **positive-definite** if $x^{T}Ax > 0$ for every $n$-vector $x \\ne 0$. The identity is positive-definite: $x^{T} I_n x = x^{T} x = \\sum_{i=1}^{n} x_i^2 > 0$ for $x \\ne 0$. **Theorem D.6:** if $A$ has full column rank, then $A^{T}A$ is positive-definite. *Proof.* For any $x$: $x^{T}(A^{T}A)x = (Ax)^{T}(Ax) = \\|Ax\\|^{2} \\ge 0$. If $\\|Ax\\|^{2} = 0$ then every component of $Ax$ is 0, i.e. $Ax = 0$; since $A$ has full column rank, Theorem D.2 gives $x = 0$. So for $x \\ne 0$ the quantity is strictly positive. $\\square$",
        detail: "Matrices arising in applications are often positive-definite for exactly this reason — $A^{T}A$ appears whenever data is squared and summed. Section 28.3 develops their further properties; they are the matrix analogue of positive numbers.",
      },
    ],
    examples: [
      {
        title: "Noncommutativity, and inverting a 2×2",
        problem: "Verify that $AB \\ne BA$ for $A = \\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix}$ and $B = \\begin{pmatrix} 0 & 0 \\\\ 1 & 0 \\end{pmatrix}$; then invert $M = \\begin{pmatrix} 2 & 1 \\\\ 1 & 1 \\end{pmatrix}$ and check both defining products.",
        steps: [
          { label: "Step 1: Compute AB", text: "Row 1 of $A$ is $(0, 1)$: $AB$'s first row is $(0 \\cdot 0 + 1 \\cdot 1,\\; 0 \\cdot 0 + 1 \\cdot 0) = (1, 0)$; row 2 of $A$ is zero, so $AB = \\begin{pmatrix} 1 & 0 \\\\ 0 & 0 \\end{pmatrix}$." },
          { label: "Step 2: Compute BA", text: "Row 1 of $B$ is zero; row 2 is $(1, 0)$: $BA = \\begin{pmatrix} 0 & 0 \\\\ 0 & 1 \\end{pmatrix}$ — a different matrix from $AB$." },
          { label: "Step 3: Invert M", text: "$\\det(M) = 2 \\cdot 1 - 1 \\cdot 1 = 1 \\ne 0$, so $M$ is nonsingular, and $M^{-1} = \\frac{1}{\\det M}\\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix} = \\begin{pmatrix} 1 & -1 \\\\ -1 & 2 \\end{pmatrix}$." },
          { label: "Step 4: Verify both orders", text: "$MM^{-1} = \\begin{pmatrix} 2-1 & -2+2 \\\\ 1-1 & -1+2 \\end{pmatrix} = I_2$ and $M^{-1}M = \\begin{pmatrix} 2-1 & 1-1 \\\\ -2+2 & -1+2 \\end{pmatrix} = I_2$." },
        ],
        result: "$AB = \\begin{pmatrix} 1 & 0 \\\\ 0 & 0 \\end{pmatrix} \\ne \\begin{pmatrix} 0 & 0 \\\\ 0 & 1 \\end{pmatrix} = BA$; and $M^{-1} = \\begin{pmatrix} 1 & -1 \\\\ -1 & 2 \\end{pmatrix}$ satisfies both defining identities.",
      },
      {
        title: "Singularity three ways, and a guaranteed positive-definite matrix",
        problem: "Let $S = \\begin{pmatrix} 1 & 0 \\\\ 1 & 0 \\end{pmatrix}$ and $A = \\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix}$. (a) Show $S$ is singular via rank, via a null vector, and via its determinant. (b) Show that $A^{T}A$ is positive-definite.",
        steps: [
          { label: "Step 1: Rank", text: "$S$'s second row equals its first, so its rows are linearly dependent: rank 1 < 2, not full rank — singular by Theorem D.1." },
          { label: "Step 2: Null vector", text: "$S \\begin{pmatrix} 0 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix}$: a nonzero null vector exists — singular by Corollary D.3. (In contrast $\\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}$ maps to itself.)" },
          { label: "Step 3: Determinant", text: "$\\det(S) = 1 \\cdot 0 - 0 \\cdot 1 = 0$ — singular by Theorem D.5." },
          { label: "Step 4: The product", text: "$A^{T}A = \\begin{pmatrix} 1 & 0 \\\\ 1 & 1 \\end{pmatrix}\\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix} = \\begin{pmatrix} 1 & 1 \\\\ 1 & 2 \\end{pmatrix}$, and $x^{T}(A^{T}A)x = x_1^2 + 2x_1 x_2 + 2x_2^2 = (x_1 + x_2)^2 + x_2^2 > 0$ unless $x_1 + x_2 = 0$ and $x_2 = 0$, i.e. $x = 0$." },
        ],
        result: "Three independent witnesses agree on $S$ — rank 1, null vector $(0, 1)^{T}$, determinant 0 — and $(x_1 + x_2)^2 + x_2^2 > 0$ proves $A^{T}A = \\begin{pmatrix} 1 & 1 \\\\ 1 & 2 \\end{pmatrix}$ positive-definite, as Theorem D.6 promises since $A$ has full column rank (its determinant is 1).",
      },
    ],
    keyTakeaways: [
      "Products associate and distribute, and $I_m A = A I_n = A$ — but $\\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix}\\begin{pmatrix} 0 & 0 \\\\ 1 & 0 \\end{pmatrix} \\ne \\begin{pmatrix} 0 & 0 \\\\ 1 & 0 \\end{pmatrix}\\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix}$: order matters everywhere, including $(BA)^{-1} = A^{-1}B^{-1}$.",
      "For square matrices, nonsingularity = full rank = $\\det \\ne 0$ = no null vector (Theorems D.1, D.2, D.5) — four names for one property; $\\det(AB) = \\det(A)\\det(B)$ multiplies along with it.",
      "$A$ full column rank $\\Rightarrow$ $A^{T}A$ positive-definite, because $x^{T}A^{T}Ax = \\|Ax\\|^{2}$ and only $x = 0$ lands in the null space — the fact behind least-squares normal equations.",
    ],
    quiz: [
      {
        q: "For nonsingular $n \\times n$ matrices $A$ and $B$, $(BA)^{-1}$ equals:",
        options: ["$A^{-1}B^{-1}$", "$B^{-1}A^{-1}$", "$(AB)^{-1}$", "$B^{T}A^{T}$"],
        answer: 0,
        explanation: "Multiply and let associativity cancel the inner pairs: $(A^{-1}B^{-1})(BA) = A^{-1}(B^{-1}B)A = A^{-1}A = I$. $B^{-1}A^{-1}$ is $(AB)^{-1}$ — the order reverses.",
      },
      {
        q: "For a square $n \\times n$ matrix $A$, which condition is NOT equivalent to the other three?",
        options: ["$A$ is symmetric", "$A$ has full rank", "$\\det(A) \\ne 0$", "$A$ has no null vector"],
        answer: 0,
        explanation: "Full rank, nonzero determinant, and absence of null vectors are equivalent characterizations of nonsingularity (Theorems D.1, D.5, D.2) — symmetry is an unrelated structural property.",
      },
      {
        q: "A null vector for the matrix $\\begin{pmatrix} 1 & 0 \\\\ 1 & 0 \\end{pmatrix}$ is:",
        options: ["$(0, 1)^{T}$", "$(1, 0)^{T}$", "$(1, 1)^{T}$", "none — the matrix is nonsingular"],
        answer: 0,
        explanation: "Multiplying by $(0,1)^{T}$ gives $\\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix}$, since the second column is zero. $(1,0)^{T}$ maps to $(1,1)^{T}$; and a null vector existing certifies singularity, so option D is exactly backwards.",
      },
      {
        q: "If $A$ has full column rank, Theorem D.6 guarantees that $A^{T}A$ is:",
        options: ["positive-definite", "singular", "diagonal", "the identity matrix"],
        answer: 0,
        explanation: "$x^{T}A^{T}Ax = \\|Ax\\|^{2} > 0$ for $x \\ne 0$, since full column rank means $Ax = 0$ only for $x = 0$. The product need be neither diagonal nor the identity.",
      },
    ],
  },
]
