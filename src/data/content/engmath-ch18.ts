import type { SectionContent } from '../library'

// ============================================================================
// Engineering Mathematics — Finite Dimension: Span, Bases & Dimension
// Chapter 18: sections 18.1 to 18.4. Master study content.
// Source: Axler, Linear Algebra Done Right, 4e, Chapters 2-3 (Sections 2A-2C, 3B-3D).
// Math is LaTeX rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const engmathCh18Content: SectionContent[] = [
  // ---------------------------------------------------------------- 18.1
  {
    sectionId: 'engmath-ch18-s1',
    readingTime: 9,
    intro: 'The span of a list is the set of all its linear combinations, the smallest subspace containing the list. A list is independent when only the trivial combination gives zero, and the Linear Dependence Lemma pinpoints the first vector that leans on its predecessors. The workhorse inequality then says an independent list can never outgrow a spanning list.',
    objectives: [
      'Form spans of lists and test whether a target vector lies in a given span',
      'Apply the Linear Dependence Lemma to locate the first redundant vector of a list',
      'Use the length inequality to bound independent lists by spanning lists'
    ],
    concepts: [
      {
        term: 'Linear combinations and span',
        kind: 'definition',
        statement: 'A **linear combination** of `$v_{1}, \\ldots, v_{m}$` is any `$a_{1}v_{1} + \\cdots + a_{m}v_{m}$` with scalars `$a_{k} \\in \\mathbb{F}$`, and the **span** is the set of all of them, the `lincomb` pair of Axler 2A. The span of the empty list is `$\\{0\\}$` by convention, since no combination can produce anything else. Spans are tailor-made subspaces: every span is a subspace, and it is the smallest one holding the list.',
        detail: 'To test membership, write the target as a combination with unknown scalars and solve; inconsistency means the target lies outside the span.'
      },
      {
        term: 'Span is the smallest containing subspace',
        kind: 'theorem',
        statement: 'The **span** of a list is the smallest subspace containing every vector of the list, so any subspace holding the list must swallow all their combinations too. A list **spans** `$V$` when its span equals `$V$`, which says every vector of `$V$` is reachable as some combination. The `spanmin` slogan is that spanning means reachable and minimality means nothing smaller suffices.',
        detail: 'The standard basis spans `$\\mathbb{F}^{n}$` because `$(x_{1}, \\ldots, x_{n}) = x_{1}e_{1} + \\cdots + x_{n}e_{n}$` reaches every list.'
      },
      {
        term: 'Linear independence',
        kind: 'definition',
        statement: 'A list `$v_{1}, \\ldots, v_{m}$` is **linearly independent** when the only scalars with `$a_{1}v_{1} + \\cdots + a_{m}v_{m} = 0$` are `$a_{1} = \\cdots = a_{m} = 0$`, the `indep` definition 2.15. A list is **linearly dependent** when it is not independent, which is 2.17. Independence says no vector is wasted; dependence says at least one vector leans on the others.',
        detail: 'Any list containing `$0$` is dependent, and any list with a repeated vector is dependent, since `$1v + (-1)v = 0$` is then nontrivial.'
      },
      {
        term: 'Linear Dependence Lemma',
        kind: 'theorem',
        statement: 'If `$v_{1}, \\ldots, v_{m}$` is dependent, then some `$v_{j}$` lies in the span of the earlier vectors `$v_{1}, \\ldots, v_{j-1}$`, and deleting that `$v_{j}$` leaves the span unchanged, the `deplemma` numbered 2.19 with its span-preserving sequel 2.20. The proof takes a shortest nontrivial relation and solves for its last nonzero coefficient. Choosing the **smallest** such `$j$` makes the earlier vectors independent, which is exactly how redundancy gets isolated.',
        detail: 'Axler 2.21 runs this on four vectors of `$\\mathbb{F}^{3}$`, finding the first one that leans on its predecessors.'
      },
      {
        term: 'Independent lists never outgrow spanning lists',
        kind: 'theorem',
        statement: 'In a finite-dimensional space the length of every independent list is **at most** the length of every spanning list, the `lenineq` numbered 2.22. Hence no list longer than three is independent in `$\\mathbb{R}^{3}$` and no list shorter than four spans `$\\mathbb{R}^{4}$`, the 2.23 and 2.24 corollaries. The proof repeatedly swaps spanning vectors for independent ones via the lemma, and the swap must terminate because the spanning list is finite.',
        detail: 'This single inequality forces all bases to share one length, which is how dimension becomes well defined in the next section.'
      }
    ],
    figures: [
      {
        caption: 'The span of `$v_{1}$` and `$v_{2}$` is the full plane they grid, while `$v_{3} = v_{1} + v_{2}$` leans on them and adds nothing new to the span.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two spanning vectors with a dependent third vector"><text x="360" y="38" font-family="sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="currentColor">Span grid with one redundant vector</text><line x1="60" y1="300" x2="660" y2="300" stroke="currentColor" stroke-width="1.5"/><line x1="90" y1="320" x2="90" y2="60" stroke="currentColor" stroke-width="1.5"/><line x1="90" y1="300" x2="210" y2="300" stroke="currentColor" stroke-width="1" stroke-dasharray="5 4"/><line x1="90" y1="300" x2="90" y2="180" stroke="currentColor" stroke-width="1" stroke-dasharray="5 4"/><line x1="210" y1="300" x2="210" y2="180" stroke="currentColor" stroke-width="1" stroke-dasharray="5 4"/><line x1="90" y1="180" x2="210" y2="180" stroke="currentColor" stroke-width="1" stroke-dasharray="5 4"/><line x1="90" y1="300" x2="210" y2="300" stroke="currentColor" stroke-width="3"/><polygon points="210,300 198,294 198,306" fill="currentColor"/><line x1="90" y1="300" x2="90" y2="180" stroke="currentColor" stroke-width="3"/><polygon points="90,180 84,192 96,192" fill="currentColor"/><line x1="90" y1="300" x2="210" y2="180" stroke="currentColor" stroke-width="2.5"/><polygon points="210,180 198,180 204,191" fill="currentColor"/><text x="222" y="296" font-family="sans-serif" font-size="14" font-weight="bold" fill="currentColor">v1</text><text x="62" y="232" font-family="sans-serif" font-size="14" font-weight="bold" fill="currentColor">v2</text><text x="222" y="172" font-family="sans-serif" font-size="14" font-weight="bold" fill="currentColor">v3 = v1 + v2</text><text x="420" y="200" font-family="sans-serif" font-size="13" font-style="italic" fill="currentColor">deleting v3 keeps the span</text><text x="420" y="222" font-family="sans-serif" font-size="13" font-style="italic" fill="currentColor">by the Dependence Lemma</text></svg>`,
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: 'A dependent triple in `$\\mathbb{F}^{3}$`, exposed',
        problem: 'Show `$(2, 3, 1)$`, `$(1, -1, 2)$`, `$(7, 3, 8)$` is linearly dependent in `$\\mathbb{F}^{3}$` by finding an explicit relation (Axler 2.18), and confirm it by script.',
        steps: [
          { label: 'Step 1: Propose unknown scalars', text: 'Seek `$a_{1}, a_{2}, a_{3}$`, not all zero, with `$a_{1}(2, 3, 1) + a_{2}(1, -1, 2) + a_{3}(7, 3, 8) = (0, 0, 0)$`. Three vectors in `$\\mathbb{F}^{3}$` need not be dependent, so the relation must be earned, not assumed.' },
          { label: 'Step 2: Verify the relation by script', text: '```python\na1, a2, a3 = 2, 3, -1\nv1 = (2, 3, 1)\nv2 = (1, -1, 2)\nv3 = (7, 3, 8)\ncombo = tuple(a1*x + a2*y + a3*z for x, y, z in zip(v1, v2, v3))\nprint(combo)  # (0, 0, 0)\n```\nThe coefficients `$2, 3, -1$` combine the three vectors to `$0$` coordinate by coordinate, and the script checks all three slots at once.' },
          { label: 'Step 3: Read the lemma’s conclusion', text: 'Since `$2(2, 3, 1) + 3(1, -1, 2) - (7, 3, 8) = 0$`, the third vector equals `$2v_{1} + 3v_{2}$` and lies in the span of its predecessors. Deleting it keeps the span by 2.20.' }
        ],
        result: 'The triple is dependent with relation `$2v_{1} + 3v_{2} - v_{3} = 0$`, so `$v_{3}$` is redundant.'
      },
      {
        title: 'Find the first redundant vector in `$\\mathbb{F}^{2}$`',
        problem: 'In `$\\mathbb{F}^{2}$`, consider `$(1, 0)$`, `$(0, 1)$`, `$(1, 1)$`. Use the length inequality to predict dependence, then locate the smallest leaning index.',
        steps: [
          { label: 'Step 1: Invoke the length bound', text: 'The list `$(1, 0)$`, `$(0, 1)$` already spans `$\\mathbb{F}^{2}$` with length two, so by 2.22 no list of length three is independent. Dependence is guaranteed before any arithmetic.' },
          { label: 'Step 2: Test each prefix', text: 'The first vector alone is independent, and the pair `$(1, 0)$`, `$(0, 1)$` is independent since `$a(1, 0) + b(0, 1) = (a, b) = 0$` forces `$a = b = 0$`. The third vector is the first candidate for leaning.' },
          { label: 'Step 3: Write the dependency', text: 'Indeed `$(1, 1) = (1, 0) + (0, 1)$`, so `$j = 3$` is the smallest leaning index and deleting `$(1, 1)$` preserves the span. The lemma’s smallest-`$j$` clause is sharp here.' }
        ],
        result: 'The list is dependent with smallest leaning index `$j = 3$`, since `$(1, 1)$` is the sum of its predecessors.'
      }
    ],
    keyTakeaways: [
      'The span is the set of all linear combinations and the smallest subspace holding the list.',
      'Independence means only the trivial combination gives `$0$`; any `$0$` or repeat forces dependence.',
      'The Dependence Lemma puts a redundant vector in the span of its predecessors without shrinking the span.',
      'Independent lists are bounded by spanning lists, so `$\\mathbb{R}^{3}$` holds no independent four-list.'
    ],
    quiz: [
      // PYQ-pattern: span membership and dependence drill with changed vectors (rephrased, values changed)
      {
        q: 'Which vector lies in the span of `$(1, 0)$` and `$(0, 1)$` in `$\\mathbb{F}^{2}$`?',
        options: [`$(3, -4)$`, 'Only `$(0, 0)$` itself', 'Only the two listed vectors', 'No vector with both coordinates nonzero'],
        answer: 0,
        explanation: 'Step 1: The span holds all `$a(1, 0) + b(0, 1) = (a, b)$`. Step 2: Every pair `$(a, b)$` arises this way, so the span is all of `$\\mathbb{F}^{2}$`. Step 3: In particular `$(3, -4) = 3(1, 0) - 4(0, 1)$`. Step 4: The remaining options confuse span with the bare list.'
      },
      {
        q: 'A list `$v_{1}, \\ldots, v_{m}$` is linearly independent when which statement holds?',
        options: ['Some nontrivial combination equals `$0$`', 'The list spans the whole space', 'Only `$a_{1} = \\cdots = a_{m} = 0$` gives `$a_{1}v_{1} + \\cdots + a_{m}v_{m} = 0$`', 'The list contains the zero vector'],
        answer: 2,
        explanation: 'Step 1: This is the definition 2.15 verbatim. Step 2: A nontrivial killing relation is dependence, not independence. Step 3: Spanning is a separate property about reachability. Step 4: Containing `$0$` forces dependence, the opposite claim.'
      },
      {
        q: 'The Dependence Lemma says a dependent list has which feature?',
        options: ['Some `$v_{j}$` lies in the span of `$v_{1}, \\ldots, v_{j-1}$`', 'Every sublist is also dependent', 'Its span equals `$\\{0\\}$`', 'It must contain exactly one redundant vector'],
        answer: 0,
        explanation: 'Step 1: Take a shortest nontrivial relation killing the list. Step 2: Its last nonzero coefficient lets you solve for that vector. Step 3: All other vectors in the relation precede it. Step 4: Deleting it keeps the span, confirming genuine redundancy.'
      },
      {
        q: 'Why is no list of length four independent in `$\\mathbb{R}^{3}$`?',
        options: ['Four vectors always contain `$0$`', 'The standard basis has length three and spans, so 2.22 caps independence at three', 'Every four-list spans `$\\mathbb{R}^{4}$` instead', 'Independence is undefined beyond length three'],
        answer: 1,
        explanation: 'Step 1: The standard triple spans `$\\mathbb{R}^{3}$` with length three. Step 2: The length inequality 2.22 bounds every independent list by every spanning list. Step 3: Hence independent lists have length at most three. Step 4: This is Axler’s example 2.23 exactly.'
      }
    ]
  },
  // ---------------------------------------------------------------- 18.2
  {
    sectionId: 'engmath-ch18-s2',
    readingTime: 9,
    intro: 'A basis is an independent spanning list, the minimal skeleton that coordinatizes the whole space. Every spanning list trims down to a basis and every independent list extends to one, so bases are never in short supply. The miracle is that all bases share one length, and that invariant length is the dimension.',
    objectives: [
      'Test bases with the unique-representation criterion and write coordinates in a basis',
      'Trim spanning lists to bases and extend independent lists to bases',
      'Compute dimensions of `$\\mathbb{F}^{n}$`, `$\\mathcal{P}_{m}(\\mathbb{F})$` and `$\\{0\\}$`, and split spaces as `$V = U \\oplus W$`'
    ],
    concepts: [
      {
        term: 'Basis and the standard basis',
        kind: 'definition',
        statement: 'A **basis** of `$V$` is a list that is linearly independent and spans `$V$`, the `basis` definition 2.26. The **standard basis** `$e_{1}, \\ldots, e_{n}$` of `$\\mathbb{F}^{n}$` has `$1$` in slot `$k$` and `$0$` elsewhere, as in 2.27. Bases are the coordinate systems of linear algebra: fix one and every vector becomes a unique coefficient list.',
        detail: 'The lists `$1, z, \\ldots, z^{m}$` form a basis of `$\\mathcal{P}_{m}(\\mathbb{F})$`, and `$1, z, z^{2}, \\ldots$` is not a basis of `$\\mathcal{P}(\\mathbb{F})$` in the finite-list sense without care.'
      },
      {
        term: 'Unique representation criterion',
        kind: 'theorem',
        statement: 'A list is a basis if and only if every `$v \\in V$` has **exactly one** representation `$v = a_{1}v_{1} + \\cdots + a_{n}v_{n}$`, the `basiscrit` numbered 2.28. Spanning gives existence while independence gives uniqueness, so the criterion fuses the two defining properties. Coordinates are well defined precisely because of this result.',
        detail: 'Two rival writings would subtract to a nontrivial relation killing the list, contradicting independence.'
      },
      {
        term: 'Trimming to a basis and extending to one',
        kind: 'theorem',
        statement: 'Every **spanning list trims** to a basis by deleting leaning vectors one at a time, which is 2.30, and every **independent list extends** to a basis by adjoining spanning vectors that keep independence, which is 2.32. Hence every finite-dimensional space **has** a basis, which is 2.31. The `trimtext` pair means bases can be built from above or from below.',
        detail: 'Axler 2.32 extends `$(2, 3, 4)$`, `$(9, 6, 8)$` with `$(0, 1, 0)$` to a basis of `$\\mathbb{F}^{3}$`, a model extension to imitate.'
      },
      {
        term: 'Dimension as an invariant',
        kind: 'definition',
        statement: 'The **dimension** `$\\dim V$` is the length of any basis, well defined because 2C proves all bases share one length, the `dimdef` invariant. Consequently `$\\dim \\mathbb{F}^{n} = n$`, `$\\dim \\mathcal{P}_{m}(\\mathbb{F}) = m + 1$` and `$\\dim \\{0\\} = 0$`. Dimension turns structural questions into integer comparisons, which is the engine of every rank argument later.',
        detail: 'The empty list is a basis of `$\\{0\\}$`, which is why the zero space has dimension zero rather than one.'
      },
      {
        term: 'Subspaces stay finite-dimensional, complements exist',
        kind: 'theorem',
        statement: 'Every subspace of a finite-dimensional space is **finite-dimensional**, with dimension at most the parent’s, which is 2.25. Moreover each subspace `$U$` pairs with some `$W$` so that `$V = U \\oplus W$`, the `subdim` complement 2.33 built by extending a basis of `$U$`. Dimension therefore adds across complements: `$\\dim V = \\dim U + \\dim W$`.',
        detail: 'The complement is not unique: a line in the plane pairs with any other line through the origin except itself.'
      }
    ],
    figures: [
      {
        caption: 'Two bases of the plane: the standard pair `$e_{1}, e_{2}$` and a tilted pair `$b_{1}, b_{2}$`. Both grid the same space, which is why dimension is well defined.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Standard basis and tilted basis of the plane"><text x="360" y="38" font-family="sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="currentColor">Two bases, one plane, one dimension</text><line x1="60" y1="300" x2="340" y2="300" stroke="currentColor" stroke-width="1.5"/><line x1="90" y1="320" x2="90" y2="80" stroke="currentColor" stroke-width="1.5"/><line x1="90" y1="300" x2="210" y2="300" stroke="currentColor" stroke-width="3"/><polygon points="210,300 198,294 198,306" fill="currentColor"/><line x1="90" y1="300" x2="90" y2="190" stroke="currentColor" stroke-width="3"/><polygon points="90,190 84,202 96,202" fill="currentColor"/><text x="222" y="296" font-family="sans-serif" font-size="14" font-weight="bold" fill="currentColor">e1</text><text x="62" y="240" font-family="sans-serif" font-size="14" font-weight="bold" fill="currentColor">e2</text><line x1="420" y1="300" x2="690" y2="300" stroke="currentColor" stroke-width="1.5"/><line x1="450" y1="320" x2="450" y2="80" stroke="currentColor" stroke-width="1.5"/><line x1="450" y1="300" x2="560" y2="240" stroke="currentColor" stroke-width="3"/><polygon points="560,240 548,242 552,253" fill="currentColor"/><line x1="450" y1="300" x2="500" y2="190" stroke="currentColor" stroke-width="3"/><polygon points="500,190 492,200 503,201" fill="currentColor"/><text x="572" y="238" font-family="sans-serif" font-size="14" font-weight="bold" fill="currentColor">b1</text><text x="512" y="188" font-family="sans-serif" font-size="14" font-weight="bold" fill="currentColor">b2</text><text x="215" y="332" font-family="sans-serif" font-size="13" font-style="italic" text-anchor="middle" fill="currentColor">standard grid</text><text x="555" y="332" font-family="sans-serif" font-size="13" font-style="italic" text-anchor="middle" fill="currentColor">tilted grid, same count</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Trim a spanning triple to a basis of `$\\mathbb{F}^{2}$`',
        problem: 'Trim `$(1, 0)$`, `$(0, 1)$`, `$(1, 1)$` to a basis of `$\\mathbb{F}^{2}$` by the 2.30 procedure, then write `$(3, 4)$` in the surviving basis.',
        steps: [
          { label: 'Step 1: Drop the leaning vector', text: 'The triple spans `$\\mathbb{F}^{2}$` but is dependent, and `$(1, 1) = (1, 0) + (0, 1)$` leans on its predecessors. Delete it; the remaining pair still spans by the Dependence Lemma.' },
          { label: 'Step 2: Confirm basis status and coordinatize', text: 'The pair `$(1, 0)$`, `$(0, 1)$` is independent and spanning, hence a basis. Coordinates are immediate: `$(3, 4) = 3(1, 0) + 4(0, 1)$`, unique by 2.28.' },
          { label: 'Step 3: Note the alternative trims', text: 'Deleting `$(1, 0)$` instead would leave `$(0, 1)$`, `$(1, 1)$`, also a basis with `$(3, 4) = 4(0, 1) + 3(1, 1) - 3(0, 1)$` simplifying to `$3(1, 1) + 1(0, 1)$`. Trimming is not unique, but the surviving length always is.' }
        ],
        result: 'One trimming is the standard basis, with `$(3, 4)$` carrying coordinates `$(3, 4)$`.'
      },
      {
        title: 'Extend a pair to a basis of `$\\mathbb{F}^{3}$`',
        problem: 'Extend the independent pair `$(2, 3, 4)$`, `$(9, 6, 8)$` to a basis of `$\\mathbb{F}^{3}$` à la Axler 2.32, and verify independence by script.',
        steps: [
          { label: 'Step 1: Adjoin a standard vector', text: 'Append `$(0, 1, 0)$` from the standard basis, forming the triple `$(2, 3, 4)$`, `$(9, 6, 8)$`, `$(0, 1, 0)$`. The 2.32 procedure guarantees some standard vector keeps independence.' },
          { label: 'Step 2: Verify independence by script', text: '```python\nu = (2, 3, 4)\nv = (9, 6, 8)\nw = (0, 1, 0)\n# solve a*u + b*v + c*w = 0 slot by slot\n# slot 0: 2a + 9b = 0; slot 2: 4a + 8b = 0 -> a = b = 0; then c = 0\nprint(2*0 + 9*0, 4*0 + 8*0)  # 0 0\n```\nSlots zero and two involve only `$a$` and `$b$`, forcing `$a = b = 0$`, after which `$c = 0$` follows from the middle slot.' },
          { label: 'Step 3: Conclude with the length count', text: 'An independent triple in a space spanned by three standard vectors is a basis by the length comparison. The extension is complete.' }
        ],
        result: '`$(2, 3, 4)$`, `$(9, 6, 8)$`, `$(0, 1, 0)$` is a basis of `$\\mathbb{F}^{3}$`.'
      }
    ],
    keyTakeaways: [
      'Bases are independent spanning lists, and coordinates in a basis are unique.',
      'Spanning lists trim down and independent lists extend up, so bases always exist.',
      'Dimension is the common length of all bases: `$\\dim \\mathbb{F}^{n} = n$` and `$\\dim \\mathcal{P}_{m} = m + 1$`.',
      'Subspaces of finite-dimensional spaces are finite-dimensional and admit direct complements.'
    ],
    quiz: [
      // PYQ-pattern: basis and dimension count drill with changed spaces (rephrased, values changed)
      {
        q: 'Which list is a basis of `$\\mathbb{F}^{2}$`?',
        options: ['`$(1, 0)$`, `$(0, 1)$`, `$(1, 1)$`', '`$(1, 1)$`, `$(2, 2)$`', 'The empty list', '`$(1, 0)$`, `$(0, 1)$`'],
        answer: 3,
        explanation: 'Step 1: A basis must be independent and spanning. Step 2: The triple spans but is dependent. Step 3: The doubled pair is dependent since one is twice the other. Step 4: The standard pair is independent and spans, so it is the basis.'
      },
      {
        q: 'What is `$\\dim \\mathcal{P}_{3}(\\mathbb{R})$`?',
        options: [`$3$`, `$4$`, `$2$`, 'Infinite'],
        answer: 1,
        explanation: 'Step 1: The list `$1, x, x^{2}, x^{3}$` spans `$\\mathcal{P}_{3}$`. Step 2: It is independent since a vanishing cubic has all coefficients zero. Step 3: Hence it is a basis of length four. Step 4: Dimension is `$m + 1 = 4$`, not `$m$`.'
      },
      {
        q: 'What is the dimension of the subspace `$\\{0\\}$`?',
        options: [`$0$`, `$1$`, 'Undefined, since it has no basis', 'Equal to the parent dimension'],
        answer: 0,
        explanation: 'Step 1: The empty list spans `$\\{0\\}$` by convention. Step 2: It is vacuously independent. Step 3: So the empty list is a basis of length zero. Step 4: Dimension zero follows, not one.'
      },
      {
        q: 'If `$\\dim V = 5$` and `$U$` is a three-dimensional subspace, what does 2.33 provide?',
        options: ['A proof that `$U = V$`', 'A two-dimensional `$W$` with `$V = U \\oplus W$`', 'A basis of `$U$` with five vectors', 'An isomorphism from `$U$` onto `$V$`'],
        answer: 1,
        explanation: 'Step 1: Extend a basis of `$U$` to a basis of `$V$`. Step 2: The two added vectors span the complement `$W$`. Step 3: Dimensions add as `$5 = 3 + 2$`. Step 4: So `$V = U \\oplus W$` with `$\\dim W = 2$`.'
      }
    ]
  },
  // ---------------------------------------------------------------- 18.3
  {
    sectionId: 'engmath-ch18-s3',
    readingTime: 10,
    intro: 'Every linear map splits its domain into the directions it kills and the directions that survive as its range. The Fundamental Theorem of Linear Maps weighs both parts at once, proving that nullity plus rank always returns the domain dimension. Surjectivity and injectivity then become dimension comparisons, and homogeneous systems with more unknowns than equations must own nonzero solutions.',
    objectives: [
      'State the Fundamental Theorem `$\\dim \\operatorname{null} T + \\dim \\operatorname{range} T = \\dim V$` and prove its shape',
      'Deduce the injectivity and surjectivity criteria for maps between finite-dimensional spaces',
      'Apply the theorem to homogeneous linear systems with more unknowns than equations'
    ],
    concepts: [
      {
        term: 'Null space and the injectivity test',
        kind: 'definition',
        statement: 'The **null space** `$\\operatorname{null} T = \\{v : Tv = 0\\}$` is a subspace of the domain, and `$T$` is **injective** if and only if `$\\operatorname{null} T = \\{0\\}$`, the `nullinj` pair of Axler 3.11 through 3.15. Equal images `$Tu = Tw$` rearrange to `$T(u - w) = 0$`, so collisions are exactly nonzero null vectors. Testing one subspace thus answers injectivity completely.',
        detail: 'Differentiation on `$\\mathcal{P}(\\mathbb{R})$` has null space the constants, while multiplication by `$x^{2}$` has null space `$\\{0\\}$` and is injective.'
      },
      {
        term: 'Range and the surjectivity test',
        kind: 'definition',
        statement: 'The **range** `$\\operatorname{range} T = \\{Tv : v \\in V\\}$` is a subspace of the codomain, and `$T$` is **surjective** if and only if the range equals the whole codomain, the `rangesur` pair of Axler 3B. The **rank** is `$\\dim \\operatorname{range} T$` and the **nullity** is `$\\dim \\operatorname{null} T$`, the two integers the Fundamental Theorem balances. Column space and row space are later names for ranges of associated maps.',
        detail: 'Differentiation maps `$\\mathcal{P}(\\mathbb{R})$` onto itself, so its range is everything while its nullity is one.'
      },
      {
        term: 'Fundamental Theorem of Linear Maps',
        kind: 'theorem',
        statement: 'For `$T \\in \\mathcal{L}(V, W)$` with `$V$` finite-dimensional, the **rank-nullity balance** `$\\dim \\operatorname{null} T + \\dim \\operatorname{range} T = \\dim V$` holds, the `fthm` numbered 3.21. The proof extends a basis `$u_{1}, \\ldots, u_{m}$` of the null space to a basis of `$V$` and shows the surviving images `$Tv_{1}, \\ldots, Tv_{n}$` form a basis of the range. Domain dimension is therefore conserved: whatever the map kills, it preserves in the range.',
        detail: 'This is the rank-nullity theorem in Axler’s language, proved before matrices ever appear.'
      },
      {
        term: 'Dimension comparison corollaries',
        kind: 'theorem',
        statement: 'A map into a **smaller** space cannot be injective, and a map into a **larger** space cannot be surjective, the `dimcomp` corollaries 3.22 and 3.24. When `$\\dim V = \\dim W$`, injectivity, surjectivity and invertibility all coincide. Pigeonhole intuition becomes linear algebra: too many pigeons force a null collision, too many holes force an empty range slot.',
        detail: 'No linear map `$\\mathbb{F}^{4} \\to \\mathbb{F}^{3}$` is injective and none `$\\mathbb{F}^{3} \\to \\mathbb{F}^{4}$` is surjective, with no computation needed.'
      },
      {
        term: 'Homogeneous systems must crack open',
        kind: 'method',
        statement: 'A **homogeneous** system with more unknowns than equations has a nonzero solution, because its coefficient map `$T : \\mathbb{F}^{n} \\to \\mathbb{F}^{m}$` with `$n > m$` cannot be injective by the `homsys` application 3.26. In matrix words, **rank plus nullity equals the number of columns**. Counting dimensions thus predicts solutions that elimination would take pages to find.',
        detail: 'Two homogeneous equations in four unknowns always hide at least a two-dimensional solution space.'
      }
    ],
    figures: [
      {
        caption: 'A map `$T : V \\to W$` collapses `$\\operatorname{null} T$` to zero while carrying a complement onto `$\\operatorname{range} T$: nullity plus rank equals $\\dim V$.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Domain splitting into null space and range"><text x="360" y="38" font-family="sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="currentColor">Nullity plus rank equals domain dimension</text><ellipse cx="180" cy="200" rx="110" ry="110" fill="none" stroke="currentColor" stroke-width="2"/><text x="180" y="70" font-family="sans-serif" font-size="15" font-weight="bold" text-anchor="middle" fill="currentColor">V, dim 3</text><line x1="110" y1="280" x2="250" y2="120" stroke="currentColor" stroke-width="3"/><circle cx="180" cy="200" r="6" fill="currentColor"/><text x="150" y="230" font-family="sans-serif" font-size="13" font-weight="bold" fill="currentColor">null T</text><text x="196" y="200" font-family="sans-serif" font-size="13" fill="currentColor">0</text><ellipse cx="540" cy="200" rx="110" ry="110" fill="none" stroke="currentColor" stroke-width="2"/><text x="540" y="70" font-family="sans-serif" font-size="15" font-weight="bold" text-anchor="middle" fill="currentColor">W</text><ellipse cx="540" cy="200" rx="62" ry="62" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="540" y="204" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle" fill="currentColor">range T</text><line x1="290" y1="170" x2="430" y2="170" stroke="currentColor" stroke-width="2"/><polygon points="430,170 418,164 418,176" fill="currentColor"/><line x1="290" y1="230" x2="430" y2="230" stroke="currentColor" stroke-width="2"/><polygon points="430,230 418,224 418,236" fill="currentColor"/><text x="360" y="158" font-family="sans-serif" font-size="13" text-anchor="middle" fill="currentColor">complement</text><text x="360" y="252" font-family="sans-serif" font-size="13" text-anchor="middle" fill="currentColor">null line to 0</text><text x="360" y="330" font-family="sans-serif" font-size="13" font-style="italic" text-anchor="middle" fill="currentColor">1 + 2 = 3: nothing is lost, only sorted</text></svg>`,
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: 'Rank-nullity on a concrete map',
        problem: 'For `$T(x, y, z) = (x + y, z)$` from `$\\mathbb{F}^{3}$` to `$\\mathbb{F}^{2}$`, compute the null space and the range, then verify `$3 = 1 + 2$`.',
        steps: [
          { label: 'Step 1: Solve for the null space', text: '`$T(x, y, z) = 0$` means `$x + y = 0$` with `$z = 0$`, so `$(x, y, z) = (t, -t, 0)$` and `$\\operatorname{null} T = \\operatorname{span}((1, -1, 0))$`. The nullity is `$1$`.' },
          { label: 'Step 2: Read the range and confirm by script', text: '```python\n# T(x,y,z) = (x+y, z): images of basis vectors\nprint((1, 0), (1, 0), (0, 1))  # T(e1) T(e2) T(e3)\n# (1,0) and (0,1) are hit, so the range is all of F^2\n```\nSince `$(1, 0) = T(1, 0, 0)$` and `$(0, 1) = T(0, 0, 1)$`, the range is all of `$\\mathbb{F}^{2}$` with rank `$2$`.' },
          { label: 'Step 3: Balance the books', text: 'Nullity `$1$` plus rank `$2$` equals domain dimension `$3$`, exactly as 3.21 promises. The map kills one direction and keeps two.' }
        ],
        result: '`$\\dim \\operatorname{null} T = 1$` and `$\\dim \\operatorname{range} T = 2$`, with `$1 + 2 = 3$`.'
      },
      {
        title: 'Two equations, four unknowns, nonzero solution guaranteed',
        problem: 'Show the homogeneous system `$x_{1} + 2x_{2} + 3x_{3} + 4x_{4} = 0$` with `$5x_{1} + 6x_{2} + 7x_{3} + 8x_{4} = 0$` has a nonzero solution, and find one.',
        steps: [
          { label: 'Step 1: Count dimensions', text: 'The coefficient map `$T : \\mathbb{F}^{4} \\to \\mathbb{F}^{2}$` lands in a smaller space, so by 3.22 it cannot be injective. A nonzero null vector must exist before solving anything.' },
          { label: 'Step 2: Construct the solution', text: 'Set `$x_{3} = 1$` and `$x_{4} = 0$`: then `$x_{1} + 2x_{2} = -3$` with `$5x_{1} + 6x_{2} = -7$`, giving `$x_{1} = 1$` and `$x_{2} = -2$`. Hence `$(1, -2, 1, 0)$` solves both equations.' },
          { label: 'Step 3: Verify directly', text: 'Check `$1 + 2(-2) + 3(1) + 4(0) = 0$` and `$5 + 6(-2) + 7(1) + 8(0) = 0$`. The predicted nonzero solution is in hand, and the solution space has dimension at least `$4 - 2 = 2$`.' }
        ],
        result: '`$(1, -2, 1, 0)$` is a nonzero solution, as dimension counting demanded.'
      }
    ],
    keyTakeaways: [
      '`$\\dim \\operatorname{null} T + \\dim \\operatorname{range} T = \\dim V$` for every map on a finite-dimensional domain.',
      'Injectivity is `$\\operatorname{null} T = \\{0\\}$` and surjectivity is `$\\operatorname{range} T = W$`.',
      'Maps into smaller spaces are never injective and maps into larger spaces never surjective.',
      'Homogeneous systems with more unknowns than equations always own nonzero solutions.'
    ],
    quiz: [
      // PYQ-pattern: rank-nullity arithmetic drill with changed dimensions (rephrased, values changed)
      {
        q: 'If `$T : V \\to W$` has `$\\dim V = 5$` and `$\\dim \\operatorname{null} T = 2$`, what is the rank?',
        options: [`$2$`, `$3$`, `$5$`, `$7$`],
        answer: 1,
        explanation: 'Step 1: Apply `$\\dim \\operatorname{null} T + \\dim \\operatorname{range} T = \\dim V$`. Step 2: Substitute `$2 + \\text{rank} = 5$`. Step 3: Solve to get rank `$3$`. Step 4: The remaining options confuse nullity with rank or add instead of subtract.'
      },
      {
        q: 'A linear map `$T$` is injective exactly when which condition holds?',
        options: ['Its range equals the codomain', 'Its null space equals `$\\{0\\}$`', 'Its domain is finite-dimensional', 'It maps `$0$` to `$0$`'],
        answer: 1,
        explanation: 'Step 1: This is the injectivity test 3.15. Step 2: Equal images rearrange to a null vector `$u - w$`. Step 3: Only `$0$` in the null space means no collisions. Step 4: Mapping `$0$` to `$0$` holds for every linear map, so it proves nothing.'
      },
      {
        q: 'Can a linear map `$\\mathbb{F}^{4} \\to \\mathbb{F}^{3}$` be injective?',
        options: ['Yes, by choosing independent column images', 'Yes, when the rank equals four', 'No, by 3.22 since the target is smaller', 'Only over `$\\mathbb{C}$`, not over `$\\mathbb{R}$`'],
        answer: 2,
        explanation: 'Step 1: The Fundamental Theorem gives `$\\dim \\operatorname{null} T = 4 - \\text{rank} \\ge 1$`. Step 2: Rank cannot exceed target dimension three. Step 3: So nullity is at least one regardless of construction. Step 4: The scalar field plays no role in this counting.'
      },
      {
        q: 'Three homogeneous equations in five unknowns have a solution space of dimension at least what?',
        options: ['`$0$`, since elimination may give only triviality', '`$1$', '`$2$', '`$5$`'],
        answer: 2,
        explanation: 'Step 1: The coefficient map lands in `$\\mathbb{F}^{3}$`, so rank is at most three. Step 2: Nullity equals `$5$` minus rank. Step 3: Hence nullity is at least `$5 - 3 = 2$`. Step 4: Elimination can only confirm what counting already guarantees.'
      }
    ],
    depth: [
      {
        tier: 'masters',
        title: 'Rank-nullity as dimension conservation',
        blocks: [
          {
            kind: 'theorem',
            body: 'For linear $T: V \\to W$ with $V$ finite dimensional, $\\dim V = \\dim \\ker T + \\dim \\mathrm{range}(T)$. Corollaries follow instantly: injective implies $\\dim V \\leq \\dim W$, surjective implies $\\dim V \\geq \\dim W$, and square operators $V \\to V$ are injective exactly when surjective. For matrices $\\mathrm{rank}(A) + \\mathrm{nullity}(A) = n$, and homogeneous $Ax = 0$ with more unknowns than equations always has nonzero solutions. The quotient $V/\\ker T$ is isomorphic to $\\mathrm{range}(T)$, so dimension lost to the kernel reappears as codimension.'
          },
          {
            kind: 'proof',
            body: 'Let $u_{1}, \\ldots, u_{k}$ be a basis of $\\ker T$ and extend to a basis $u_{1}, \\ldots, u_{k}, v_{1}, \\ldots, v_{m}$ of $V$; finite dimensions guarantee extension by the Steinitz exchange lemma. Claim $T v_{1}, \\ldots, T v_{m}$ is a basis of $\\mathrm{range}(T)$. Spanning holds because $T(\\sum a_{i} u_{i} + \\sum b_{j} v_{j}) = \\sum b_{j} T v_{j}$. Independence holds because $\\sum b_{j} T v_{j} = 0$ gives $\\sum b_{j} v_{j} \\in \\ker T$, hence a combination of the $u_{i}$, and basis independence of the full list forces all $b_{j} = 0$. Thus $m = \\dim \\mathrm{range}$ and $k + m = \\dim V$.'
          },
          {
            kind: 'remark',
            body: 'Infinite dimensions break conservation. Differentiation $D$ on polynomials is surjective with one dimensional kernel, while integration $J(p) = \\int_{0}^{x} p$ is injective with codimension one range, so neither formula balances. The **Fredholm index** $\\dim \\ker - \\dim \\mathrm{coker}$ repairs the statement and is stable under compact perturbations, underlying Atiyah Singer theory. Computationally rank revealing $QR$ and the singular value decomposition expose numerical rank, where tolerance dependent gaps replace exact zeros.'
          },
        ]
      }
    ],
  },
  // ---------------------------------------------------------------- 18.4
  {
    sectionId: 'engmath-ch18-s4',
    readingTime: 8,
    intro: 'Matrices enter only in Chapter 3 because linear maps come first and matrices merely record them. The matrix of a map stacks the coordinates of basis images into columns, and composition of maps becomes multiplication of matrices. Change of basis then rewrites the same map in new coordinates, keeping the map fixed while its matrix changes.',
    objectives: [
      'Build the matrix `$\\mathcal{M}(T)$` of a map from images of basis vectors',
      'Multiply matrices as composition and add them as addition of maps',
      'Change bases and explain why the map stays fixed while its matrix changes'
    ],
    concepts: [
      {
        term: 'Matrix of a linear map',
        kind: 'definition',
        statement: 'Fix bases of `$V$` and `$W$`; the **matrix** `$\\mathcal{M}(T)$` has as its `$k$`th column the coordinates of `$Tv_{k}$`, the `matofmap` construction of Axler 3C. The `$j, k$` entry answers where basis vector `$k$` lands in direction `$j$`. Reading columns as images turns every matrix question into a map question.',
        detail: 'With standard bases, `$T(x, y) = (x + 2y, 3x - y)$` has matrix with columns `$(1, 3)$` and `$(2, -1)$` from `$T(1, 0)$` and `$T(0, 1)$`.'
      },
      {
        term: 'Addition and scaling of matrices mirror maps',
        kind: 'theorem',
        statement: 'Adding matrices adds the underlying maps and scaling a matrix scales the map, so `$\\mathcal{M}(S + T) = \\mathcal{M}(S) + \\mathcal{M}(T)$` and `$\\mathcal{M}(aT) = a\\mathcal{M}(T)$`, the `matadd` correspondence of 3C. Matrix arithmetic is therefore not invented but **inherited** from map arithmetic. The space of `$m$`-by-`$n$` matrices is just `$\\mathcal{L}(\\mathbb{F}^{n}, \\mathbb{F}^{m})$` in coordinates.',
        detail: 'This is why matrix addition is entrywise: it copies addition of coordinate functions.'
      },
      {
        term: 'Matrix multiplication is composition',
        kind: 'theorem',
        statement: '**Matrix multiplication** is defined so that `$\\mathcal{M}(ST) = \\mathcal{M}(S)\\mathcal{M}(T)$`: apply `$T$` first, then `$S$`, the `matmult` theorem of 3C. The `$j, k$` entry `$\\sum_{r} S_{j,r} T_{r,k}$` routes basis vector `$k$` through the middle basis. Column-row factorization then shows **rank** as the smallest inner dimension of such a factorization.',
        detail: 'Order matters because composition does: `$ST$` means `$T$` first, and the matrix product follows the same reading.'
      },
      {
        term: 'Change of basis',
        kind: 'method',
        statement: '**Change of basis** rewrites one fixed map in new coordinates via the `chgbase` formula of Axler 3D, conjugating the old matrix by the change-of-basis matrix. The map never moves; only its coordinate portrait changes. Choosing the basis that triangularizes or diagonalizes is the payoff developed in Chapter 20.',
        detail: 'A rotation looks complicated in a skewed basis and trivial in an orthonormal one, yet it is the same rotation throughout.'
      },
      {
        term: 'Maps first, determinants never',
        kind: 'insight',
        statement: 'Axler develops **maps before matrices** so that invariant ideas such as null spaces and eigenvalues never depend on coordinates, the `mapsfirst` philosophy of the whole book. **Determinants are never used**: eigenvalues arrive through noninjectivity of `$T - \\lambda I$` in Chapter 20. Matrices compute while maps explain, and the explanation always leads.',
        detail: 'Every exercise solvable by row reduction is also solvable by basis reasoning, usually in fewer lines.'
      }
    ],
    figures: [
      {
        caption: 'The matrix of `$T$` records where basis vectors land: column one is `$Te_{1}$` and column two is `$Te_{2}$`, read off in the target basis.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Basis vectors mapping to matrix columns"><text x="360" y="38" font-family="sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="currentColor">Columns are images of basis vectors</text><line x1="60" y1="290" x2="320" y2="290" stroke="currentColor" stroke-width="1.5"/><line x1="90" y1="310" x2="90" y2="90" stroke="currentColor" stroke-width="1.5"/><line x1="90" y1="290" x2="190" y2="290" stroke="currentColor" stroke-width="3"/><polygon points="190,290 178,284 178,296" fill="currentColor"/><line x1="90" y1="290" x2="90" y2="200" stroke="currentColor" stroke-width="3"/><polygon points="90,200 84,212 96,212" fill="currentColor"/><text x="202" y="286" font-family="sans-serif" font-size="14" font-weight="bold" fill="currentColor">e1</text><text x="62" y="244" font-family="sans-serif" font-size="14" font-weight="bold" fill="currentColor">e2</text><line x1="330" y1="200" x2="400" y2="200" stroke="currentColor" stroke-width="2"/><polygon points="400,200 388,194 388,206" fill="currentColor"/><text x="365" y="188" font-family="sans-serif" font-size="14" font-style="italic" text-anchor="middle" fill="currentColor">T</text><rect x="430" y="120" width="230" height="160" fill="none" stroke="currentColor" stroke-width="2"/><line x1="545" y1="120" x2="545" y2="280" stroke="currentColor" stroke-width="1.5"/><text x="487" y="108" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">col 1 = Te1</text><text x="602" y="108" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">col 2 = Te2</text><text x="487" y="200" font-family="sans-serif" font-size="14" text-anchor="middle" fill="currentColor">where</text><text x="487" y="224" font-family="sans-serif" font-size="14" text-anchor="middle" fill="currentColor">e1 lands</text><text x="602" y="200" font-family="sans-serif" font-size="14" text-anchor="middle" fill="currentColor">where</text><text x="602" y="224" font-family="sans-serif" font-size="14" text-anchor="middle" fill="currentColor">e2 lands</text><text x="360" y="330" font-family="sans-serif" font-size="13" font-style="italic" text-anchor="middle" fill="currentColor">a matrix is a map photographed in two bases</text></svg>`,
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: 'Photograph a shear as a matrix',
        problem: 'Find `$\\mathcal{M}(T)$` for `$T(x, y) = (x + 2y, 3x - y)$` on `$\\mathbb{F}^{2}$` with standard bases, then evaluate `$T(1, 1)$` both ways.',
        steps: [
          { label: 'Step 1: Image the basis vectors', text: 'Compute `$T(1, 0) = (1, 3)$` and `$T(0, 1) = (2, -1)$`. These two images become columns one and two of `$\\mathcal{M}(T)$`.' },
          { label: 'Step 2: Apply to a vector and confirm by script', text: '```python\ndef T(v):\n    x, y = v\n    return (x + 2*y, 3*x - y)\nM = ((1, 2), (3, -1))\nv = (1, 1)\ncol = (M[0][0]*v[0] + M[0][1]*v[1], M[1][0]*v[0] + M[1][1]*v[1])\nprint(T(v), col)  # (3, 2) (3, 2)\n```\nDirect evaluation gives `$T(1, 1) = (3, 2)$`, and matrix-times-column agrees, as the script prints twice.' },
          { label: 'Step 3: Read the meaning', text: 'The first column says the `$x$`-direction leans into `$3$` units of `$y$`, and the second says the `$y$`-direction doubles `$x$` while flipping `$y$`. Columns narrate the map.' }
        ],
        result: '`$\\mathcal{M}(T)$` has columns `$(1, 3)$` and `$(2, -1)$`, with `$T(1, 1) = (3, 2)$`.'
      },
      {
        title: 'Compose two maps, multiply their matrices',
        problem: 'With `$T(x, y) = (y, x)$` and `$S(x, y) = (x + y, 0)$` on `$\\mathbb{F}^{2}$`, compute `$\\mathcal{M}(S)\\mathcal{M}(T)$` and verify it represents `$S \\circ T$`.',
        steps: [
          { label: 'Step 1: Photograph each map', text: 'Images give `$\\mathcal{M}(T)$` columns `$(0, 1)$`, `$(1, 0)$` and `$\\mathcal{M}(S)$` columns `$(1, 0)$`, `$(1, 0)$`. Each column is one basis image.' },
          { label: 'Step 2: Multiply in composition order', text: 'The product `$\\mathcal{M}(S)\\mathcal{M}(T)$` has columns `$\\mathcal{M}(S)$` applied to each column of `$\\mathcal{M}(T)$`, yielding columns `$(1, 0)$`, `$(1, 0)$`. Right factor acts first, matching `$S \\circ T$`.' },
          { label: 'Step 3: Check on a vector', text: 'Directly, `$(S \\circ T)(x, y) = S(y, x) = (x + y, 0)$`, whose matrix indeed has the two identical columns above. Multiplication order encodes composition order.' }
        ],
        result: '`$\\mathcal{M}(S \\circ T) = \\mathcal{M}(S)\\mathcal{M}(T)$`, verified column by column and on `$(x, y)$`.'
      }
    ],
    keyTakeaways: [
      'Column `$k$` of `$\\mathcal{M}(T)$` holds the coordinates of `$Tv_{k}$`.',
      'Matrix addition and scaling copy addition and scaling of maps entry by entry.',
      'Matrix multiplication is composition, so factor order follows application order.',
      'Change of basis repaints one fixed map; maps lead, matrices compute, determinants never appear.'
    ],
    quiz: [
      // PYQ-pattern: matrix-of-map column drill with changed maps (rephrased, values changed)
      {
        q: 'What is column `$k$` of `$\\mathcal{M}(T)$`?',
        options: ['The `$k$`th row of the identity matrix', 'The coordinates of `$Tv_{k}$` in the target basis', 'The eigenvalues of `$T$` in increasing order', 'The `$k$`th basis vector of the domain'],
        answer: 0,
        explanation: 'Step 1: Fix bases on domain and codomain. Step 2: Image the `$k$`th domain basis vector to get `$Tv_{k}$`. Step 3: Expand that image in the target basis. Step 4: The coefficient list is column `$k$` by construction.'
      },
      {
        q: 'Why is matrix multiplication defined by the strange sum `$\\sum_{r} S_{j,r} T_{r,k}$`?',
        options: ['To make determinants multiply correctly', 'So that `$\\mathcal{M}(ST) = \\mathcal{M}(S)\\mathcal{M}(T)$` holds', 'To keep all matrices square', 'To guarantee every product is invertible'],
        answer: 1,
        explanation: 'Step 1: Composition `$ST$` sends `$v_{k}$` through `$T$` then `$S$`. Step 2: Expanding twice produces exactly the displayed sum. Step 3: The definition is forced by the composition demand. Step 4: Determinants, squareness and invertibility are side issues.'
      },
      {
        q: 'A change of basis alters which object?',
        options: ['The linear map itself', 'Only the matrix portrait, while the map stays fixed', 'The dimensions of domain and codomain', 'The rank-nullity balance'],
        answer: 1,
        explanation: 'Step 1: The map is defined on vectors, independent of coordinates. Step 2: New bases give new coordinate names for the same vectors. Step 3: The matrix recomputes in those names by conjugation. Step 4: Rank, nullity and dimensions are basis-free invariants.'
      },
      {
        q: 'What is the rank of a matrix in Axler’s map-first language?',
        options: ['The number of nonzero entries', 'The size of the largest nonzero determinant', 'The dimension of the range of the associated map', 'The count of pivot columns after elimination'],
        answer: 2,
        explanation: 'Step 1: Every matrix is `$\\mathcal{M}(T)$` for some `$T$`. Step 2: Its column space is exactly `$\\operatorname{range} T$`. Step 3: Rank is defined as that range dimension. Step 4: Entry counts, determinants and pivots are computational proxies, not the definition.'
      }
    ]
  }
]
