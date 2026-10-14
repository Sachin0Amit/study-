import type { SectionContent } from '../library'

// ============================================================================
// Bjarne Stroustrup, The C++ Programming Language, 4th ed. — Chapter 29
// A Matrix Design — sections 29.1 … 29.5 (ids cpp-ch29-s1 … cpp-ch29-s5)
// Reference: TC++PL 4e pp. 827–856. The capstone design study: Matrix<T,N>,
// slices and arithmetic, and Gaussian elimination with partial pivoting.
// ============================================================================

export const cppCh29Content: SectionContent[] = [
  // ------------------------------------------------------------------ 29.1
  {
    sectionId: 'cpp-ch29-s1',
    readingTime: 6,
    intro: "Chapter 29 applies everything the book has built — templates, operator overloading, initializer lists, move semantics, the metaprogramming of Chapter 28 — to one serious, real-world design: a numerical matrix library. Not because the world needs another matrix library, but because a matrix forces the questions every library designer faces: what should the user be able to write (mathematical notation), what must the implementation deliver (contiguous storage, zero-copy views, near-optimal loops), and where do those demands fight? The result, Matrix<T,N>, is the book's capstone design study.",
    objectives: [
      "State the design goals for Matrix<T,N>: N dimensions at compile time, element types as parameters, several subscript styles, useful arithmetic",
      "Recognize the tension between mathematical elegance and implementation efficiency that the chapter navigates",
      "Read the sample usage that the rest of the chapter implements",
    ],
    concepts: [
      {
        term: 'What is being designed',
        kind: 'definition',
        statement: "**A template for N-dimensional numerical matrices:** `Matrix<double,2>` is a 2-D matrix (rows and columns), `Matrix<double,1>` behaves like a `vector` with matrix-style operations, and `Matrix<char,3>` is a 3-D block of chars. The element type and the number of dimensions are compile-time template parameters; the EXTENTS (3 rows, 4 columns) are chosen at run time, at construction.",
        detail: "That split is the central design decision: dimension count affects the type system machinery (variadic subscripting, slice dimensionality), while extents are just data — an array of sizes carried in each object.",
      },
      {
        term: 'The design goals',
        kind: 'method',
        statement: "**The chapter sets out five aims:** (1) N-dimensional matrices with N a template parameter; (2) element types as template parameters; (3) conventional subscripting — elements, rows, columns, slices — without copying; (4) useful matrix arithmetic (`+`, `-`, scalar `*`, matrix product, `apply`); (5) near-optimal performance for a simple, readable design.",
        detail: "Explicitly not goals: a complete linear-algebra system (no eigenvalues, no factorizations), sparse-matrix support, or parallelism. The chapter wants the design and implementation techniques, kept honest and complete enough to actually use.",
      },
      {
        term: 'What the user writes',
        kind: 'insight',
        statement: "**The target usage reads like the math**\n```\nMatrix<double,2> A = {  {2, 1, -1},  {-3, -1, 2},  {-2, 1, 2}  };\nMatrix<double,1> b = { 8, -11, -3 };\nMatrix<double,1> x = solve(A, b);        // 29.5's Gaussian elimination\n\nA(1,2) = 7;                             // element access\nMatrix<double,1> r = A[1];              // a row, viewed not copied\n```",
        detail: "Everything in this tour — the initializer lists, the element indexing, the row view, the solver — is built from the techniques of the preceding chapters. The rest of the chapter makes it real, one layer at a time.",
      },
      {
        term: 'The design lessons it carries',
        kind: 'insight',
        statement: "**A matrix is the classic vehicle for C++ design questions:** where to draw the interface/implementation line (operators in front, descriptors underneath), how to alias safely (views borrow, owners copy), when checked access is worth it, and how to make a template general without making it slow.",
        detail: "Stroustrup's framing: by the end you have seen how a professional-grade library component is shaped — and you have written most of one yourself.",
      },
      {
        term: 'Introduction: the working contract',
        kind: 'definition',
        statement: '**Introduction.** A matrix as a real design. You can claim this section when you can state the design goals for Matrix<T,N>: N dimensions at compile time, element types as parameters, several subscript styles, useful arithmetic — and can say what would go wrong if you could not.',
        detail: 'This section belongs to Chapter 29 (A Matrix Design); later sections in the chapter use it without restating it, so the contract compounds.',
      },
    ],
    examples: [
      {
        title: 'The one-minute tour',
        problem: "Given `Matrix<double,2> m = { {1,2,3}, {4,5,6}, {7,8,9} };`, read an element, a row and a slice, and scale the matrix.",
        steps: [
          { label: 'Element', text: "`m(1,2)` is 8: row index 1, column index 2, zero-based — the middle row {4,5,6} contributes its third entry." },
          { label: 'Row', text: "`m[1]` is a view of the whole middle row {4,5,6} — a `Matrix_ref<double,1>` borrowing m's storage, not a copy of it." },
          { label: 'Scale', text: "`m2 = 3*m;` produces a new 3×3 matrix with every element tripled: {3,6,9},{12,15,18},{21,24,27}; extents are checked and match (3 and 3)." },
          { label: 'The promise', text: "Nothing here allocates per element access, and nothing copies except the operations that visibly make new matrices. The rest of the chapter earns those two sentences." },
        ],
        result: 'Elements, rows, scaling — the whole interface surface in four lines, on one 3×3 test matrix.',
      },
      {
        title: 'Working through introduction',
        problem: 'A matrix as a real design. Your task: state the design goals for Matrix<T,N>: N dimensions at compile time, element types as parameters, several subscript styles, useful arithmetic.',
        steps: [
          { label: 'Step 1: restate', text: 'Restate the goal in the section’s terms: state the design goals for Matrix<T,N>: N dimensions at compile time, element types as parameters, several subscript styles, useful arithmetic. Write down the guarantee you will rely on — for this chapter it is: `Matrix<T,N>`: element type and dimension count are compile-time; extents are run-time data.' },
          { label: 'Step 2: build', text: 'Build the smallest program that exercises it. Start from this skeleton and adapt it: `Matrix<double, 2> m(3, 3);` Compile it before adding anything else, so later errors are attributable to later changes.' },
          { label: 'Step 3: vary', text: 'Change one thing at a time — recognize the tension between mathematical elegance and implementation efficiency that the chapter navigates — and recompile after each change, so each diagnostic maps to exactly one decision.' },
          { label: 'Step 4: verify', text: 'Check the result against the takeaway: Design aims: N-D generality, several subscript styles without copying, useful arithmetic, near-optimal performance — but deliberately not a full linear-algebra system. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it.' },
        ],
        result: 'The section’s lesson survives contact with the compiler: `Matrix<T,N>`: element type and dimension count are compile-time; extents are run-time data. Small, compiled, varied, checked — that is the whole method.',
      },
    ],
    keyTakeaways: [
      "`Matrix<T,N>`: element type and dimension count are compile-time; extents are run-time data.",
      'Design aims: N-D generality, several subscript styles without copying, useful arithmetic, near-optimal performance — but deliberately not a full linear-algebra system.',
      'The chapter doubles as a course in library design: interface/implementation separation, views vs. owners, checked vs. unchecked access.',
    ],
    quiz: [
      {
        q: 'In `Matrix<T,N>`, which is fixed at compile time?',
        options: ['the extents (number of rows and columns)', 'the number of dimensions N and the element type T', 'the total element count', 'the storage address'],
        answer: 1,
        explanation: 'Extents are run-time data carried by each object; N and T are template parameters and therefore part of the type.',
      },
      {
        q: '`Matrix<double,1>` is best described as:',
        options: ['a 1-D matrix behaving much like a vector', 'a single double', 'a matrix forced to have one row', 'an error — N must be at least 2'],
        answer: 0,
        explanation: '1-D matrices support the same subscripting/view/arithmetic machinery and serve as the vector type of 29.5.',
      },
      {
        q: "Which is NOT among the chapter's stated design goals for Matrix?",
        options: ['N-dimensional matrices', 'several subscript and slice styles', 'a complete industrial linear-algebra package (eigenvalues, sparse, parallel)', 'near-optimal performance for a simple design'],
        answer: 2,
        explanation: 'The chapter explicitly disclaims completeness: no factorizations, no sparse or parallel support — techniques over features.',
      },
    ],
  },
  // ------------------------------------------------------------------ 29.2
  {
    sectionId: 'cpp-ch29-s2',
    readingTime: 7,
    intro: "The heart of the design is the subscripting interface: users must reach individual elements, grab whole rows and columns, carve sub-matrices with slices, and construct from nested initializer lists — all without copying data. This section fixes that interface and the small set of supporting types that make it uniform: Matrix_ref for borrowed views, slice descriptors for rectangular regions, and the degenerate Matrix<double,0> that is its own element.",
    objectives: [
      "Use the three access styles: elements `m(i,j)`, rows/columns via `m[i]` and named views, and slice-based sub-matrices",
      "Explain why `operator()` takes all indices at once while `operator[]` yields a lower-dimensional view",
      "Construct matrices from extents and from nested initializer lists, with ragged lists rejected",
    ],
    concepts: [
      {
        term: 'The shape of Matrix<T,N>',
        kind: 'definition',
        statement: "**A Matrix owns its elements and carries a descriptor of their arrangement.** Constructed from extents — `Matrix<double,2> m(3,4)` makes 3 rows × 4 columns — or from nested initializer lists: `Matrix<double,2> m = { {1,2,3}, {4,5,6} };`.",
        detail: "The members are a `Matrix_slice<N>` (start, extents, strides — see 29.4) and a handle to the elements, default-initialized to zero for arithmetic types. Copy is deep; move is a constant-time steal of the handle.",
      },
      {
        term: 'Element access: operator()',
        kind: 'method',
        statement: "**`m(i,j)` returns a reference to the element at row i, column j — all indices at once, variadic:** `T& operator()(Args... dims)` computes the offset through the descriptor and indexes the elements. `Matrix<T,0>` is the degenerate case: a 0-dimensional matrix IS its element, and its `operator()` takes zero indices.",
        detail: "Why `()` rather than `[]` for elements: `operator[]` takes ONE argument, so `m[i][j]` would need an intermediate proxy for every access — and that proxy reads wrongly for N ≠ 2. A single call with all indices needs no proxy and adapts naturally to any dimension count; subscripts can be checked (in debug builds) before touching memory.",
      },
      {
        term: 'Rows, columns and slices',
        kind: 'method',
        statement: "**`m[i]` views the i-th row — a `Matrix_ref<T,N-1>` that borrows storage; named views do the rest:** a column of a 2-D matrix, and slice-based sub-matrices: a `slice(i,n)` names the n elements starting at index i along one dimension, so `m(slice(1,2), slice(1,2))` carves the 2×2 block of rows 1–2 and columns 1–2 — still an alias, never a copy.",
        detail: "Every one of these returns a `Matrix_ref` (a descriptor plus a raw pointer — 29.4); writing through a view writes the matrix. Slices were chosen over iterators for sub-matrix selection because they describe a rectangular region of ANY dimension with the same three numbers: start, extent, stride.",
      },
      {
        term: 'Matrix_ref: the view type',
        kind: 'definition',
        statement: "**A `Matrix_ref<T,N>` is (almost) a Matrix that does not own its elements:** same descriptor machinery, same subscript styles, but a borrowed pointer instead of owned storage — the same relationship that `string_view` and `span` bear to their owners.",
        detail: "Views are how the library does 'look at part of the data' cheaply and safely: the price is that the user must keep the owner alive, exactly as with any borrowed-range type.",
      },
      {
        term: 'Initializer lists',
        kind: 'method',
        statement: "**Nested brace lists construct matrices with the shape checked:** the `Matrix_initializer<T,N>` machinery unwinds the nesting recursively, requires the structure to be perfectly rectangular, and derives the extents — `{ {1,2,3}, {4,5,6} }` yields a 2×3. A ragged list like `{ {1,2}, {3} }` throws rather than guessing.",
        detail: "This is Chapter 28 metaprogramming at work: the initializer's type encodes the nesting depth, and a small trait (`Matrix_init<T,N>`) recognizes `initializer_list` chains of exactly the right depth for N dimensions.",
      },
    ],
    examples: [
      {
        title: 'Access patterns on a 3×3',
        problem: "For `Matrix<double,2> m = { {1,2,3}, {4,5,6}, {7,8,9} };` read elements, a row and a slice, and confirm the extents.",
        steps: [
          { label: 'Elements', text: "`m(0,0)` is 1, `m(1,2)` is 8, `m(2,2)` is 9 — indices are (row, column), zero-based." },
          { label: 'Row view', text: "`m[1]` aliases the middle row {4,5,6}: it is a `Matrix_ref`, so `m[1](0) = 40;` also changes `m(1,0)` — one storage, two ways in." },
          { label: 'Slice', text: "`m(slice(1,2), slice(1,2))` carves rows 1–2 and columns 1–2: the 2×2 block { {5,6}, {8,9} } — still aliased, still no copy." },
          { label: 'Extents', text: "`m.extent(0)` is 3 (rows) and `m.extent(1)` is 3 (columns); the elements live contiguously as 9 doubles, and every view above is descriptor arithmetic on them." },
        ],
        result: 'One object, three views into it — elements, rows and slice blocks all alias the same contiguous storage.',
      },
      {
        title: 'Working through a matrix template',
        problem: 'The Matrix template design. Your task: use the three access styles: elements `m(i,j)`, rows/columns via `m[i]` and named views, and slice-based sub-matrices.',
        steps: [
          { label: 'Step 1: restate', text: 'Restate the goal in the section’s terms: use the three access styles: elements `m(i,j)`, rows/columns via `m[i]` and named views, and slice-based sub-matrices. Write down the guarantee you will rely on — for this chapter it is: Elements: `m(i,j)` — one variadic call with all indices, no proxy, checkable; `Matrix<T,0>` is the degenerate element.' },
          { label: 'Step 2: build', text: 'Build the smallest program that exercises it. Start from this skeleton and adapt it: `Matrix<double, 2> m(3, 3);` Compile it before adding anything else, so later errors are attributable to later changes.' },
          { label: 'Step 3: vary', text: 'Change one thing at a time — explain why `operator()` takes all indices at once while `operator[]` yields a lower-dimensional view — and recompile after each change, so each diagnostic maps to exactly one decision.' },
          { label: 'Step 4: verify', text: 'Check the result against the takeaway: Rows (`m[i]`), columns and slice blocks return `Matrix_ref` views that borrow storage instead of copying it. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it.' },
        ],
        result: 'The section’s lesson survives contact with the compiler: Elements: `m(i,j)` — one variadic call with all indices, no proxy, checkable; `Matrix<T,0>` is the degenerate element. Small, compiled, varied, checked — that is the whole method.',
      },
    ],
    keyTakeaways: [
      "Elements: `m(i,j)` — one variadic call with all indices, no proxy, checkable; `Matrix<T,0>` is the degenerate element.",
      "Rows (`m[i]`), columns and slice blocks return `Matrix_ref` views that borrow storage instead of copying it.",
      'Nested initializer lists construct with derived extents; ragged structure is rejected at run time by the initializer machinery.',
    ],
    quiz: [
      {
        q: "For `Matrix<double,2> m = { {1,2,3}, {4,5,6}, {7,8,9} };`, the value of `m(1,2)` is:",
        options: ['2', '6', '8', '9'],
        answer: 2,
        explanation: 'Row 1 is {4,5,6}; column 2 of that row is 8. Indices are zero-based (row, column).',
      },
      {
        q: 'The interface uses `operator()` rather than `operator[]` for elements because:',
        options: ['`operator[]` cannot return references', '`operator()` is always faster', 'a single call takes all N indices at once, avoiding chained proxies that only fit 2-D', '`operator[]` is reserved for arithmetic'],
        answer: 2,
        explanation: '`operator[]` takes one argument; N-dimensional access through it would need proxy objects — one variadic `()` call handles any N.',
      },
      {
        q: 'Along one dimension, `slice(1,2)` selects:',
        options: ['elements 1 and 2', 'two elements starting at index 1', 'every other element from 1 on', 'rows 1 through 2 of the other dimension'],
        answer: 1,
        explanation: 'A slice is (start, extent): here indices 1 and 2 — two entries beginning at 1.',
      },
      {
        q: 'A `Matrix_ref` differs from a `Matrix` because it:',
        options: ['owns a copy of the elements', 'aliases (borrows) the elements through a slice descriptor, adding no ownership', 'cannot be assigned through', 'always has one fewer dimension'],
        answer: 1,
        explanation: 'Views borrow: same subscript machinery, but the storage belongs to someone else — like `span` over a `vector`.',
      },
    ],
  },
  // ------------------------------------------------------------------ 29.3
  {
    sectionId: 'cpp-ch29-s3',
    readingTime: 7,
    intro: "With subscripting in place, arithmetic is where the design pays for itself: `+` and `-` are element-wise with extents checked, scalar multiplication scales every element, `apply` runs any function over the whole matrix, and the matrix product multiplies 2-D matrices with the classical triple loop. The chapter is equally clear about what it does not do — no expression templates to fuse operations, no general N-dimensional tensor contraction — keeping every line readable and every allocation visible.",
    objectives: [
      "Use element-wise `+`, `-`, compound assignment, scalar `*`, and `apply`",
      "Compute matrix products with the extents check that guards them",
      "Say what the design deliberately omits — expression templates, general tensor products — and why",
    ],
    concepts: [
      {
        term: 'Element-wise arithmetic',
        kind: 'definition',
        statement: "**`a + b` and `a - b` produce a new matrix with the same extents**, each element the sum or difference of the corresponding pair; `a += b` and friends assign in place. Both operands' extents must match exactly — enforced by an `assert` at run time, because extents are run-time data.",
        detail: "The natural spelling is a loop over `m.begin()..m.end()` or nested index loops; either way the whole implementation of `operator+` is a few lines, thanks to the uniform access machinery of 29.2.",
      },
      {
        term: 'Scalar multiplication and apply',
        kind: 'method',
        statement: "**`m * 2.0` scales every element; `m.apply(f)` calls `f` on each element in place; `apply(m, f)` returns the transformed copy.** The scalar version is itself `apply` in disguise, `m.apply([](double& x){ x *= 2.0; })`.",
        detail: "Because `apply` takes any callable, one line buys you absolute values, rounding, clamping — the standard unary functions of `<cmath>` applied across a matrix. Element access stays behind the descriptor, so the loops need no special cases for rows or views.",
      },
      {
        term: 'The matrix product',
        kind: 'method',
        statement: "**The 2-D product is the classical triple loop, guarded by an extents check**\n```\ntemplate<typename T>\nMatrix<T,2> operator*(const Matrix<T,2>& a, const Matrix<T,2>& b)\n{\n    Matrix<T,2> res(a.extent(0), b.extent(1));   // an m×n times n×p is m×p\n    for (int i = 0; i != a.extent(0); ++i)\n        for (int j = 0; j != b.extent(1); ++j)\n            for (int k = 0; k != a.extent(1); ++k)\n                res(i,j) += a(i,k) * b(k,j);\n    return res;\n}\n```\n`assert(a.extent(1) == b.extent(0))` fires when the shapes do not chain.",
        detail: "Loop order matters for speed: with row-major storage, making `j` (the b-column index) the inner stride-touching loop keeps both `b(k,j)` and `res(i,j)` walking contiguous memory — the i-k-j ordering shown is the cache-friendly one. The chapter keeps the loops plain and near-optimal rather than clever and opaque.",
      },
      {
        term: 'What is deliberately left out',
        kind: 'insight',
        statement: "**No expression templates:** `C = A*B + D` computes and allocates the product `A*B` first, then adds `D`. **No general N-D product:** multiplication is defined for 2-D matrices only — an N-dimensional tensor contraction machinery would dwarf everything else in the chapter.",
        detail: "The omissions are the design's honesty: fusing loops buys constant factors at the cost of a second, invisible language; real heavy numerics belongs to a BLAS-backed library. The chapter's target is near-optimal WHILE readable.",
      },
      {
        term: 'Matrix Arithmetic Operations: the working contract',
        kind: 'definition',
        statement: '**Matrix Arithmetic Operations.** Slices, views and arithmetic. You can claim this section when you can use element-wise `+`, `-`, compound assignment, scalar `*`, and `apply` — and can say what would go wrong if you could not.',
        detail: 'This section belongs to Chapter 29 (A Matrix Design); later sections in the chapter use it without restating it, so the contract compounds.',
      },
    ],
    examples: [
      {
        title: 'A 2×3 times 3×2 product, by hand and by code',
        problem: "With `A = { {1,2,3}, {4,5,6} }` and `B = { {7,8}, {9,10}, {11,12} }`, compute `A*B` element by element, and count the arithmetic.",
        steps: [
          { label: 'Shape', text: "`A` is 2×3, `B` is 3×2 — the inner extents chain (3 = 3), so the result is 2×2." },
          { label: 'First row', text: "`res(0,0) = 1·7 + 2·9 + 3·11 = 7 + 18 + 33 = 58`; `res(0,1) = 1·8 + 2·10 + 3·12 = 8 + 20 + 36 = 64`." },
          { label: 'Second row', text: "`res(1,0) = 4·7 + 5·9 + 6·11 = 28 + 45 + 66 = 139`; `res(1,1) = 4·8 + 5·10 + 6·12 = 32 + 50 + 72 = 154`." },
          { label: 'Cost', text: "Each of the 4 result entries is an inner product of length 3: 3 multiplies + 3 adds = 6 flops, so $2\\times m\\times n\\times p = 2\\times 2\\times 3\\times 2 = 24$ flops in all — for large shapes the $\\Theta(n^3)$ cubic growth is the reason the loop order (and real BLAS libraries) matter." },
        ],
        result: "`A*B` is { {58, 64}, {139, 154} } — every entry verifiable by hand, 24 flops total.",
      },
      {
        title: 'Working through matrix arithmetic operations',
        problem: 'Slices, views and arithmetic. Your task: use element-wise `+`, `-`, compound assignment, scalar `*`, and `apply`.',
        steps: [
          { label: 'Step 1: restate', text: 'Restate the goal in the section’s terms: use element-wise `+`, `-`, compound assignment, scalar `*`, and `apply`. Write down the guarantee you will rely on — for this chapter it is: `+`, `-`, `+=` are element-wise with matching extents asserted at run time; `*` by a scalar scales; `apply(f)` maps any function over the elements.' },
          { label: 'Step 2: build', text: 'Build the smallest program that exercises it. Start from this skeleton and adapt it: `Matrix<double, 2> m(3, 3);` Compile it before adding anything else, so later errors are attributable to later changes.' },
          { label: 'Step 3: vary', text: 'Change one thing at a time — compute matrix products with the extents check that guards them — and recompile after each change, so each diagnostic maps to exactly one decision.' },
          { label: 'Step 4: verify', text: 'Check the result against the takeaway: The 2-D product is a triple loop over descriptors with an extents check — an m×n times n×p gives m×p. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it.' },
        ],
        result: 'The section’s lesson survives contact with the compiler: `+`, `-`, `+=` are element-wise with matching extents asserted at run time; `*` by a scalar scales; `apply(f)` maps any function over the elements. Small, compiled, varied, checked — that is the whole method.',
      },
    ],
    keyTakeaways: [
      "`+`, `-`, `+=` are element-wise with matching extents asserted at run time; `*` by a scalar scales; `apply(f)` maps any function over the elements.",
      "The 2-D product is a triple loop over descriptors with an extents check — an m×n times n×p gives m×p.",
      "No expression templates, no general tensor products: constant-factor tricks are traded away for readable, near-optimal code.",
    ],
    quiz: [
      {
        q: "With `A = { {1,2,3}, {4,5,6} }` and `B = { {7,8}, {9,10}, {11,12} }`, the entry `(A*B)(1,0)` is:",
        options: ['58', '64', '139', '154'],
        answer: 2,
        explanation: 'Row 1 of A inner-product column 0 of B: 4·7 + 5·9 + 6·11 = 139.',
      },
      {
        q: 'The product of an m×n matrix and an n×p matrix has extents:',
        options: ['n×n', 'm×n×p', 'p×m', 'm×p'],
        answer: 3,
        explanation: 'The inner dimensions must chain and disappear; the outer ones survive: m×p.',
      },
      {
        q: 'Multiplying a 3×2 matrix by a 3×2 matrix with this library results in:',
        options: ['a 3×2 result', 'a run-time assert failure — the extents do not chain', 'a compile-time error', 'an empty matrix'],
        answer: 1,
        explanation: 'Extents are run-time data, so the check is a run-time assert: 2 ≠ 3 kills the operation after construction.',
      },
      {
        q: '`m.apply(f)` does what?',
        options: ['applies f to the matrix descriptor', 'applies f to every element, in place', 'applies f only to the diagonal', 'returns f(m) once'],
        answer: 1,
        explanation: 'One call per element, mutating the matrix — and `apply(m,f)` is the non-mutating twin that returns a copy.',
      },
    ],
  },
  // ------------------------------------------------------------------ 29.4
  {
    sectionId: 'cpp-ch29-s4',
    readingTime: 8,
    intro: "Now the lid comes off. Every Matrix<T,N> is two things: a handle to its elements plus a Matrix_slice<N> — the small descriptor that maps N subscripts to an offset. Computing that offset is the entire implementation: a row-major 2-D matrix stores rows end to end, so a 3×4 matrix has strides {4,1} and element (i,j) sits at offset 4i+j. Every access style of 29.2 — elements, rows, slices, Matrix_refs — reduces to arithmetic on descriptors.",
    objectives: [
      "Define `Matrix_slice<N>` and its three members: start, extents, strides",
      "Compute element offsets for row-major matrices, including strided column walks",
      "Explain `Matrix<T,0>`, `Matrix_ref` and the `begin()`/`end()` iterator pair",
    ],
    concepts: [
      {
        term: 'Matrix_slice<N>',
        kind: 'definition',
        statement: "**The descriptor every matrix and view carries**\n```\ntemplate<size_t N>\nstruct Matrix_slice {\n    size_t start;                  // offset of the first element\n    array<size_t, N> extents;       // number of elements per dimension\n    array<size_t, N> strides;       // offset step along each dimension\n    // ... plus size(), and the offset computation\n};\n```",
        detail: "A `Matrix` owns elements and a slice; a `Matrix_ref` holds a slice and someone else's pointer. Two objects share ALL the subscript machinery precisely because both are a slice plus a way to reach elements.",
      },
      {
        term: 'The offset formula',
        kind: 'law',
        statement: "**Element (i₁, …, i_N) lives at flat offset**\n$$\\text{loc} = \\text{start} + i_1 \\cdot \\text{strides}[0] + \\cdots + i_N \\cdot \\text{strides}[N{-}1]$$\n**— one multiply-add per dimension, no searches, no branches.** The default layout is row-major (C-style): the last dimension has unit stride, and each stride going up is the product of the extents below it.",
        detail: "For a 3×4 matrix: strides = {4,1}, so m(2,1) is at 2·4 + 1·1 = 9. A row view is a slice with stride 1 and extent 4; a COLUMN view is stride 4, extent 3 — the descriptor language covers both without special cases.",
      },
      {
        term: 'Matrix<T,0>: the degenerate case',
        kind: 'insight',
        statement: "**A zero-dimensional matrix is just its element.** The specialization stores a single `T`; subscripting with zero indices returns it. That one class is what lets generic code recurse cleanly: each row of an N-D matrix is (N−1)-D, down to 0-D.",
        detail: "Degenerate cases that work are the measure of a general design — `Matrix<double,0>` is why `m[i]` of a 1-D matrix can yield the element itself rather than a view, and why the initializer-list machinery can bottom out.",
      },
      {
        term: 'Views are descriptors',
        kind: 'insight',
        statement: "**`m[i]` is a `Matrix_ref<T,N-1>` whose slice is the i-th slab of `m`'s slice; a slice expression rewrites extents and strides in O(1).** No element is touched to build a view — carving a sub-matrix costs three numbers per dimension.",
        detail: "This is the implementation of 29.2's promise that views never copy: `m(slice(1,2), slice(1,2))` adjusts start by 1·strides[0] + 1·strides[1], sets extents to {2,2} and inherits the strides — arithmetic, not data movement.",
      },
      {
        term: 'Iterators and checking',
        kind: 'method',
        statement: "**`begin()` and `end()` iterate over all elements in storage (row-major) order** — which makes `range-for` and the standard algorithms work on matrices — while subscript access through `()` can be checked or bare depending on build.",
        detail: "The chapter keeps checks cheap: indices are validated against extents where debugging needs it, and move semantics make returning matrices from functions free — a moved Matrix is a slice-and-pointer steal, O(1) whatever the element count.",
      },
    ],
    figures: [
      {
        caption: "Row-major storage of a 3×4 `Matrix<double,2>`: 12 contiguous doubles whose flat offsets are printed in the cells. The descriptor is $\\{\\text{start} = 0,\\ \\text{extents} = \\{3,4\\},\\ \\text{strides} = \\{4,1\\}\\}$, so element $(2,1)$ sits at offset $2\\cdot4 + 1\\cdot1 = 9$; row 1 occupies offsets 4–7 contiguously, while column 2 lives at offsets 2, 6, 10 — a stride-4 walk, which is why column views are descriptors, not copies.",
        svg: `<svg viewBox="0 0 760 320" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Row-major matrix storage with strides and flat offsets"><defs><marker id="c29" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs><text x="30" y="40" font-size="15" fill="currentColor">Matrix_slice&lt;2&gt; descriptor:</text><text x="30" y="60" font-size="15" fill="currentColor">start = 0&#160;&#160;&#160;extents = {3, 4}&#160;&#160;&#160;strides = {4, 1}</text><text x="30" y="80" font-size="14" fill="currentColor" opacity="0.8">elements: 12 contiguous doubles, row-major</text><text x="127" y="94" text-anchor="middle" font-size="14" fill="currentColor">j = 0</text><text x="222" y="94" text-anchor="middle" font-size="14" fill="currentColor">j = 1</text><text x="317" y="94" text-anchor="middle" font-size="14" fill="currentColor">j = 2</text><text x="412" y="94" text-anchor="middle" font-size="14" fill="currentColor">j = 3</text><text x="70" y="131" text-anchor="end" font-size="14" fill="currentColor">i = 0</text><text x="70" y="185" text-anchor="end" font-size="14" fill="currentColor">i = 1</text><text x="70" y="239" text-anchor="end" font-size="14" fill="currentColor">i = 2</text><rect x="80" y="100" width="95" height="54" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5"/><rect x="175" y="100" width="95" height="54" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5"/><rect x="270" y="100" width="95" height="54" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5"/><rect x="365" y="100" width="95" height="54" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5"/><rect x="80" y="154" width="95" height="54" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-width="1.5"/><rect x="175" y="154" width="95" height="54" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-width="1.5"/><rect x="270" y="154" width="95" height="54" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-width="1.5"/><rect x="365" y="154" width="95" height="54" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-width="1.5"/><rect x="80" y="208" width="95" height="54" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5"/><rect x="175" y="208" width="95" height="54" fill="currentColor" fill-opacity="0.32" stroke="currentColor" stroke-width="3"/><rect x="270" y="208" width="95" height="54" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5"/><rect x="365" y="208" width="95" height="54" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5"/><text x="127" y="134" text-anchor="middle" font-size="20" fill="currentColor">0</text><text x="222" y="134" text-anchor="middle" font-size="20" fill="currentColor">1</text><text x="317" y="134" text-anchor="middle" font-size="20" fill="currentColor">2</text><text x="412" y="134" text-anchor="middle" font-size="20" fill="currentColor">3</text><text x="127" y="188" text-anchor="middle" font-size="20" fill="currentColor">4</text><text x="222" y="188" text-anchor="middle" font-size="20" fill="currentColor">5</text><text x="317" y="188" text-anchor="middle" font-size="20" fill="currentColor">6</text><text x="412" y="188" text-anchor="middle" font-size="20" fill="currentColor">7</text><text x="127" y="242" text-anchor="middle" font-size="20" fill="currentColor">8</text><text x="222" y="242" text-anchor="middle" font-size="20" font-weight="bold" fill="currentColor">9</text><text x="317" y="242" text-anchor="middle" font-size="20" fill="currentColor">10</text><text x="412" y="242" text-anchor="middle" font-size="20" fill="currentColor">11</text><rect x="270" y="100" width="95" height="54" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="7 5"/><rect x="270" y="154" width="95" height="54" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="7 5"/><rect x="270" y="208" width="95" height="54" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="7 5"/><line x1="322" y1="108" x2="474" y2="118" stroke="currentColor" stroke-width="1.2" opacity="0.6"/><text x="478" y="123" font-size="14" fill="currentColor">column 2: offsets 2, 6, 10 — stride 4</text><line x1="462" y1="181" x2="474" y2="181" stroke="currentColor" stroke-width="1.2" opacity="0.6"/><text x="478" y="186" font-size="14" fill="currentColor">row 1: offsets 4–7 — contiguous</text><text x="80" y="292" font-size="14" fill="currentColor">m(2,1): offset = start + 2·strides[0] + 1·strides[1] = 0 + 2·4 + 1·1 = 9</text><text x="478" y="249" font-size="14" fill="currentColor" opacity="0.85">highlighted cell (2,1) → offset 9</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'Offsets in a 3×4',
        problem: "For `Matrix<double,2> m(3,4);` in the default row-major layout, locate `m(2,1)`, `m(1,3)`, and the elements of column 2.",
        steps: [
          { label: 'Descriptor', text: "start = 0, extents = {3,4}, strides = {4,1}: the last dimension is unit stride, and each row is 4 elements." },
          { label: 'm(2,1)', text: "offset = 2·4 + 1·1 = 9 — the tenth double of the flat array. In general $(i,j)$ sits at $4i + j$." },
          { label: 'm(1,3)', text: "offset = 1·4 + 3·1 = 7. Cross-check: row 1 owns offsets 4–7, and column 3 is its last entry — 7. ✓" },
          { label: 'Column 2', text: "The entries `m(0,2)`, `m(1,2)`, `m(2,2)` live at offsets 2, 6, 10: same column index, rows four apart — a stride-4 walk through the flat array. That is exactly the descriptor a column view carries: start = 2, extents = {3}, strides = {4}." },
        ],
        result: "Every access is offset arithmetic: (i,j) → 4i+j for the whole 3×4 matrix; columns cost nothing extra because they are just a different stride.",
      },
      {
        title: 'Working through matrix implementation',
        problem: 'Layout, operations and access. Your task: define `Matrix_slice<N>` and its three members: start, extents, strides.',
        steps: [
          { label: 'Step 1: restate', text: 'Restate the goal in the section’s terms: define `Matrix_slice<N>` and its three members: start, extents, strides. Write down the guarantee you will rely on — for this chapter it is: A Matrix is a slice plus elements; `Matrix_slice<N>` = {start, extents, strides}, and it alone maps subscripts to offsets.' },
          { label: 'Step 2: build', text: 'Build the smallest program that exercises it. Start from this skeleton and adapt it: `Matrix<double, 2> m(3, 3);` Compile it before adding anything else, so later errors are attributable to later changes.' },
          { label: 'Step 3: vary', text: 'Change one thing at a time — compute element offsets for row-major matrices, including strided column walks — and recompile after each change, so each diagnostic maps to exactly one decision.' },
          { label: 'Step 4: verify', text: 'Check the result against the takeaway: Offset = start + Σ index·stride — one multiply-add per dimension; row-major means strides {extent₁, …, 1}. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it.' },
        ],
        result: 'The section’s lesson survives contact with the compiler: A Matrix is a slice plus elements; `Matrix_slice<N>` = {start, extents, strides}, and it alone maps subscripts to offsets. Small, compiled, varied, checked — that is the whole method.',
      },
    ],
    keyTakeaways: [
      "A Matrix is a slice plus elements; `Matrix_slice<N>` = {start, extents, strides}, and it alone maps subscripts to offsets.",
      'Offset = start + Σ index·stride — one multiply-add per dimension; row-major means strides {extent₁, …, 1}.',
      "`Matrix<T,0>` is its own element; `begin()`/`end()` walk all elements in storage order; views are descriptors, never copies.",
    ],
    quiz: [
      {
        q: 'For a row-major `Matrix<double,2>` with 3 rows and 4 columns, the strides are:',
        options: ['{1,4}', '{4,1}', '{3,1}', '{12,1}'],
        answer: 1,
        explanation: 'Row-major gives the last dimension unit stride; moving one row jumps 4 elements: strides = {4,1}.',
      },
      {
        q: 'In that same 3×4 matrix, `m(2,3)` lives at flat offset:',
        options: ['9', '10', '11', '23'],
        answer: 2,
        explanation: 'offset = 2·strides[0] + 3·strides[1] = 2·4 + 3·1 = 11.',
      },
      {
        q: '`Matrix<T,0>` is:',
        options: ['an error case', 'a specialization storing a single element of type T', 'a matrix with unknown extent', 'the same as `Matrix<T,1>`'],
        answer: 1,
        explanation: 'The 0-dimensional matrix degenerates to its own element — the base case that makes the N-dimensional recursion bottom out.',
      },
      {
        q: '`begin()` and `end()` on a Matrix iterate:',
        options: ['only the first row', 'in column-major order for speed', 'over all elements in storage (row-major) order', 'over the strides'],
        answer: 2,
        explanation: 'The element sequence is the flat storage order — which is what makes range-for and standard algorithms work directly.',
      },
    ],
  },
  // ------------------------------------------------------------------ 29.5
  {
    sectionId: 'cpp-ch29-s5',
    readingTime: 8,
    intro: "The payoff of the whole design is numerical: solving Ax = b by Gaussian elimination. The idea is two centuries old — eliminate below the diagonal by subtracting scaled rows, then back-substitute — but doing it in floating point adds one crucial refinement: partial pivoting, always dividing by the largest available pivot, obtained by swapping rows. The chapter uses its own Matrix type to write both the naive and the pivotal solver, and closes with the numerical programmer's catechism: never trust an untested floating-point algorithm.",
    objectives: [
      'Carry out forward elimination and back-substitution on a small system, by hand',
      'Explain partial pivoting and why the naive solver fails or loses accuracy',
      "Test numerical code the way the chapter does: generate the answer first, then recover it",
    ],
    concepts: [
      {
        term: 'The problem, in Matrix types',
        kind: 'definition',
        statement: "**Given an n×n `Matrix<double,2>` A and a right-hand side `Vector b`, find the `Vector x` with A·x = b — where Vector is simply a 1-D matrix:**\n```\nusing Vector = Matrix<double,1>;\n\nVector classical_gaussian_elimination(Matrix<double,2> A, Vector b);\nVector pivotal_elimination(Matrix<double,2> A, Vector b);\n```",
        detail: "The matrices are passed BY VALUE on purpose: elimination destroys its operands, so each solver works on its own copies and returns the solution — the caller's data is untouched.",
      },
      {
        term: 'Forward elimination',
        kind: 'method',
        statement: "**For each column k = 0 … n−2, subtract a multiple of row k from every row below it, choosing the multiple to zero out column k:** row_i ← row_i − (a(i,k)/a(k,k))·row_k, applied to the augmented row including b. After n−1 columns the matrix is upper triangular.",
        detail: "Each elimination step is a whole-row operation — exactly what Matrix rows-as-views make natural: `m(i,k)` indexing and row subtraction are descriptor arithmetic over contiguous storage, with no copies of the matrix.",
      },
      {
        term: 'Partial pivoting',
        kind: 'law',
        statement: "**Before eliminating with column k, find the row p ≥ k with the largest |a(p,k)| and swap rows p and k (b entries included), then eliminate using that pivot.** The naive version divides by a(k,k) whatever its size: a zero pivot crashes the algorithm, and a tiny one amplifies rounding error catastrophically.",
        detail: "The swaps cost only comparisons and element moves, and they rescue essentially all practical systems — the chapter's `pivotal_elimination` differs from `classical_gaussian_elimination` by exactly this inner search-and-swap.",
      },
      {
        term: 'Back-substitution',
        kind: 'method',
        statement: "**Read the unknowns off the triangular system bottom-up:**\n$$x_{n-1} = \\frac{b_{n-1}}{a(n{-}1,\\,n{-}1)}, \\qquad x_i = \\frac{b_i - \\sum_{j>i} a(i,j)\\,x_j}{a(i,i)}$$\n— each step needs only the row already reduced and the unknowns already found.",
        detail: "The inner sum is an inner product of row i's upper part with the partially built x — a one-line loop over `Matrix` elements, again contiguous in storage.",
      },
      {
        term: 'Testing numerical code',
        kind: 'insight',
        statement: "**The chapter's discipline: pick the answer x first, compute b = A·x with the matrix product of 29.3, solve, and compare** — including deliberately nasty (tiny-pivot, ill-conditioned) systems that expose the difference between the classical and pivotal solvers.",
        detail: "A solve that compiles tells you nothing: the same lines run accurately with pivoting and fail without it. Numerical correctness is an empirical property, tested — never assumed — and singular systems should be detected and reported (the chapter throws on a zero pivot) rather than allowed to return garbage.",
      },
    ],
    examples: [
      {
        title: 'A 3×3 solved with partial pivoting',
        problem: "Solve $$2x + y - z = 8, \\qquad -3x - y + 2z = -11, \\qquad -2x + y + 2z = -3$$ by pivotal Gaussian elimination.",
        steps: [
          { label: 'Augment', text: "Rows: (2, 1, −1 | 8), (−3, −1, 2 | −11), (−2, 1, 2 | −3)." },
          { label: 'Pivot on column 0', text: "Available magnitudes: |2|, |−3|, |−2| — the largest is −3 in row 1, so swap rows 0 and 1: (−3, −1, 2 | −11) becomes the pivot row." },
          { label: 'Eliminate below', text: "Row 1 ← row 1 + (2/3)·row 0: (0, 1/3, 1/3 | 2/3). Row 2 ← row 2 − (2/3)·row 0: (0, 5/3, 2/3 | 13/3)." },
          { label: 'Pivot on column 1', text: "Candidates |1/3| and |5/3|: swap rows 1 and 2 so the pivot is 5/3. Eliminate: row 2 ← row 2 − (1/5)·row 1: (0, 0, 1/5 | −1/5)." },
          { label: 'Back-substitute', text: "From the last row: (1/5)z = −1/5, so z = −1. Then (5/3)y + (2/3)(−1) = 13/3 gives (5/3)y = 5, so y = 3. Finally −3x − 3 + 2(−1) = −11 gives −3x = −6, so x = 2." },
          { label: 'Check in the originals', text: "2(2) + 3 − (−1) = 8 ✓; −3(2) − 3 + 2(−1) = −11 ✓; −2(2) + 3 + 2(−1) = −3 ✓." },
        ],
        result: 'x = 2, y = 3, z = −1 — every step is a row operation the Matrix library performs on views, and every equation verifies.',
      },
      {
        title: 'Working through solving linear equations',
        problem: 'Gaussian elimination with Matrix. Your task: carry out forward elimination and back-substitution on a small system, by hand.',
        steps: [
          { label: 'Step 1: restate', text: 'Restate the goal in the section’s terms: carry out forward elimination and back-substitution on a small system, by hand. Write down the guarantee you will rely on — for this chapter it is: Forward elimination turns A upper-triangular by subtracting scaled pivot rows; back-substitution then reads x off from the bottom.' },
          { label: 'Step 2: build', text: 'Build the smallest program that exercises it. Start from this skeleton and adapt it: `Matrix<double, 2> m(3, 3);` Compile it before adding anything else, so later errors are attributable to later changes.' },
          { label: 'Step 3: vary', text: 'Change one thing at a time — explain partial pivoting and why the naive solver fails or loses accuracy — and recompile after each change, so each diagnostic maps to exactly one decision.' },
          { label: 'Step 4: verify', text: 'Check the result against the takeaway: Partial pivoting — swap in the largest-magnitude pivot before each elimination — is what keeps floating-point elimination stable; a zero pivot is a hard failure, a tiny one a silent one. If the program satisfies it with no extra machinery, stop — extra machinery would tax code that does not need it.' },
        ],
        result: 'The section’s lesson survives contact with the compiler: Forward elimination turns A upper-triangular by subtracting scaled pivot rows; back-substitution then reads x off from the bottom. Small, compiled, varied, checked — that is the whole method.',
      },
    ],
    keyTakeaways: [
      'Forward elimination turns A upper-triangular by subtracting scaled pivot rows; back-substitution then reads x off from the bottom.',
      'Partial pivoting — swap in the largest-magnitude pivot before each elimination — is what keeps floating-point elimination stable; a zero pivot is a hard failure, a tiny one a silent one.',
      "The chapter's solvers take A and b by value (they are destroyed), and are tested by generating x first: numerical correctness is established empirically.",
    ],
    quiz: [
      {
        q: 'Partial pivoting exists to:',
        options: ['reduce the operation count below cubic', 'avoid zero or near-zero pivots that crash the algorithm or amplify rounding error', 'make the matrix symmetric', 'eliminate the need for back-substitution'],
        answer: 1,
        explanation: 'Dividing by the largest available pivot keeps multipliers ≤ 1 in size and keeps elimination numerically honest.',
      },
      {
        q: 'After forward elimination, the coefficient matrix has become:',
        options: ['a diagonal matrix', 'a lower-triangular matrix', 'an upper-triangular matrix', 'the identity matrix'],
        answer: 2,
        explanation: 'All entries below the diagonal have been zeroed; the unknowns can then be read from the bottom up.',
      },
      {
        q: 'With `Vector = Matrix<double,1>` and the solvers of this section, the call `pivotal_elimination(A, b)`:',
        options: ['works on its own copies — A and b are passed by value because the algorithm destroys them', 'modifies A and b in the caller, since they are passed by reference', 'refuses non-square A at compile time', 'requires A to be symmetric'],
        answer: 0,
        explanation: 'Pass by value is deliberate: elimination consumes its operands, and the caller keeps pristine data.',
      },
      {
        q: "The chapter's way of testing the solvers is to:",
        options: ['run them once and eyeball the output', 'choose x, compute b = A·x, then solve and compare the recovered x', 'compare against a printed textbook table only', 'count the number of template instantiations'],
        answer: 1,
        explanation: 'Generate the answer first, then recover it — including on nasty systems where only the pivotal version survives.',
      },
    ],
  },
]
