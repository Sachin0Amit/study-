import type { SectionContent } from '../library'

// ============================================================================
// Engineering Mathematics — Linear Maps, Null Spaces & Duality
// Chapter 19: sections 19.1 to 19.4. Master study content.
// Source: Axler, Linear Algebra Done Right, 4e, Chapter 3 (Sections 3A-3B, 3D-3F).
// Math is LaTeX rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const engmathCh19Content: SectionContent[] = [
  // ---------------------------------------------------------------- 19.1
  {
    sectionId: 'engmath-ch19-s1',
    readingTime: 9,
    intro: 'The null space collects every vector a map sends to zero, and the range collects every value the map attains. Both are subspaces, and their dimensions already appeared as nullity and rank in the previous chapter. Injectivity reads off the null space while surjectivity reads off the range, so the two fundamental subspaces answer the two fundamental questions.',
    objectives: [
      'Compute null spaces and ranges of differentiation, shifts and coordinate maps',
      'Test injectivity from `$\\operatorname{null} T$` and surjectivity from `$\\operatorname{range} T$`',
      'Balance nullity against rank with the Fundamental Theorem on concrete maps'
    ],
    concepts: [
      {
        term: 'Null space is a subspace',
        kind: 'definition',
        statement: 'The **null space** `$\\operatorname{null} T = \\{v \\in V : Tv = 0\\}$` holds `$0$` and survives sums and scalings because `$T$` preserves both, the `nullsub` result 3.13 built on 3.11. Linearity does all the work: `$T(u + w) = Tu + Tw = 0$` whenever both terms vanish. Every null space is therefore a subspace of the domain automatically.',
        detail: 'The name reminds you of `$0$`: the null space is exactly the fiber above the zero vector.'
      },
      {
        term: 'Differentiation and multiplication null spaces',
        kind: 'method',
        statement: 'Differentiation `$D$` on `$\\mathcal{P}(\\mathbb{R})$` has null space the **constants**, since only constant polynomials differentiate to zero, while multiplication by `$x^{2}$` has null space `$\\{0\\}$`, the `nullex` pair from Axler 3.12 and 3.14. The first map forgets exactly one dimension of information and the second forgets none. Computing a null space always means solving `$Tv = 0$` completely, not guessing one solution.',
        detail: 'Only multiplication by `$x^{2}$` is injective among the 3.12 examples, precisely because its null space is trivial.'
      },
      {
        term: 'Injectivity equals trivial null space',
        kind: 'theorem',
        statement: '`$T$` is **injective** if and only if `$\\operatorname{null} T = \\{0\\}$`, the `injnull` equivalence 3.15. A collision `$Tu = Tw$` rearranges to the nonzero null vector `$u - w$`, and a nonzero null vector `$v$` gives the collision `$Tv = T0$`. One subspace test therefore settles uniqueness of preimages for every map.',
        detail: 'The inclusion `$\\{0\\} \\subseteq \\operatorname{null} T$` is free since `$T0 = 0$`; only the reverse inclusion needs proof.'
      },
      {
        term: 'Range is a subspace with telling examples',
        kind: 'definition',
        statement: 'The **range** `$\\operatorname{range} T = \\{Tv : v \\in V\\}$` is a subspace of the codomain, the `rangesub` of Axler 3B. Differentiation maps `$\\mathcal{P}(\\mathbb{R})$` **onto** itself since every polynomial integrates, while the backward shift misses exactly the first coordinate. Ranges measure what a map can reach, just as null spaces measure what it kills.',
        detail: 'Axler 3.17 through 3.20 develop range examples in parallel with the null-space ones, keeping the two anatomies side by side.'
      },
      {
        term: 'Surjectivity equals full range',
        kind: 'theorem',
        statement: '`$T$` is **surjective** if and only if `$\\operatorname{range} T = W$`, and a map into a larger space can never be surjective, the `surjrange` criterion with 3.24. Dimension counting gives the verdict when `$\\dim \\operatorname{range} T < \\dim W$`: too small a range cannot cover `$W$`. Null spaces govern injectivity while ranges govern surjectivity, completing the symmetric picture.',
        detail: 'When dimensions match, either property forces the other, previewing the invertibility equivalences of the next section.'
      }
    ],
    figures: [
      {
        caption: 'Fibers of a non-injective map: each `$w$` in `$\\operatorname{range} T$` lifts to a whole coset, while `$\\operatorname{null} T$` is the fiber above `$0$` that decides injectivity.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Fibers of a linear map above range points"><text x="360" y="38" font-family="sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="currentColor">Fibers above the range, null fiber above zero</text><ellipse cx="170" cy="200" rx="100" ry="105" fill="none" stroke="currentColor" stroke-width="2"/><text x="170" y="72" font-family="sans-serif" font-size="15" font-weight="bold" text-anchor="middle" fill="currentColor">V</text><line x1="120" y1="140" x2="220" y2="140" stroke="currentColor" stroke-width="2.5"/><line x1="120" y1="200" x2="220" y2="200" stroke="currentColor" stroke-width="2.5"/><line x1="120" y1="260" x2="220" y2="260" stroke="currentColor" stroke-width="3.5"/><circle cx="170" cy="260" r="6" fill="currentColor"/><text x="232" y="144" font-family="sans-serif" font-size="13" fill="currentColor">fiber</text><text x="232" y="204" font-family="sans-serif" font-size="13" fill="currentColor">fiber</text><text x="232" y="264" font-family="sans-serif" font-size="13" font-weight="bold" fill="currentColor">null T</text><ellipse cx="550" cy="200" rx="100" ry="105" fill="none" stroke="currentColor" stroke-width="2"/><text x="550" y="72" font-family="sans-serif" font-size="15" font-weight="bold" text-anchor="middle" fill="currentColor">W</text><circle cx="550" cy="140" r="7" fill="currentColor"/><circle cx="550" cy="200" r="7" fill="currentColor"/><circle cx="550" cy="260" r="7" fill="currentColor"/><text x="566" y="144" font-family="sans-serif" font-size="13" fill="currentColor">w1</text><text x="566" y="204" font-family="sans-serif" font-size="13" fill="currentColor">w2</text><text x="566" y="264" font-family="sans-serif" font-size="13" font-weight="bold" fill="currentColor">0</text><line x1="270" y1="140" x2="450" y2="140" stroke="currentColor" stroke-width="2"/><polygon points="450,140 438,134 438,146" fill="currentColor"/><line x1="270" y1="200" x2="450" y2="200" stroke="currentColor" stroke-width="2"/><polygon points="450,200 438,194 438,206" fill="currentColor"/><line x1="270" y1="260" x2="450" y2="260" stroke="currentColor" stroke-width="2"/><polygon points="450,260 438,254 438,266" fill="currentColor"/><text x="360" y="330" font-family="sans-serif" font-size="13" font-style="italic" text-anchor="middle" fill="currentColor">long null fiber means collisions; a point fiber means injective</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Differentiation from cubics to quadratics',
        problem: 'For `$D : \\mathcal{P}_{3}(\\mathbb{R}) \\to \\mathcal{P}_{2}(\\mathbb{R})$` with `$Dp = p^{\\prime}$`, find the null space and the range, then check `$4 = 1 + 3$`.',
        steps: [
          { label: 'Step 1: Kill and keep', text: '`$Dp = 0$` exactly for constant polynomials, so `$\\operatorname{null} D = \\operatorname{span}(1)$` with nullity `$1$`. Every quadratic `$a + bx + cx^{2}$` integrates to `$ax + (b \\div 2)x^{2} + (c \\div 3)x^{3}$`, so the range is all of `$\\mathcal{P}_{2}(\\mathbb{R})$` with rank `$3$`.' },
          { label: 'Step 2: Confirm the coefficients by script', text: '```python\n# D(a + b x + c x^2 + d x^3) = b + 2c x + 3d x^2\nprint((0, 1, 0, 0))  # D(x) = 1: constants are hit\nprint((0, 0, 0, 5))  # D(5x^3/3) ~ x^2 direction present\n```\nThe script exhibits preimages for the constant and quadratic directions, and the linear direction works the same way.' },
          { label: 'Step 3: Balance nullity and rank', text: 'Nullity `$1$` plus rank `$3$` equals domain dimension `$4$`, as 3.21 demands. Differentiation forgets exactly the constants and nothing else.' }
        ],
        result: '`$\\operatorname{null} D$` is the constants and `$\\operatorname{range} D = \\mathcal{P}_{2}(\\mathbb{R})$`, with `$1 + 3 = 4$`.'
      },
      {
        title: 'A coordinate projection and its fiber line',
        problem: 'For `$T(x_{1}, x_{2}, x_{3}) = (x_{2}, x_{3}, 0)$`, compute `$\\operatorname{null} T$` and `$\\operatorname{range} T$` and verify the Fundamental Theorem.',
        steps: [
          { label: 'Step 1: Solve the killing equation', text: '`$T(x_{1}, x_{2}, x_{3}) = 0$` forces `$x_{2} = x_{3} = 0$` with `$x_{1}$` free, so `$\\operatorname{null} T$` is the `$x_{1}$`-axis with nullity `$1$`.' },
          { label: 'Step 2: Describe the reachable set', text: 'Images have the form `$(x_{2}, x_{3}, 0)$`, filling the `$xy$`-plane `$\\{(y_{1}, y_{2}, 0)\\}$`, so the rank is `$2$` and `$T$` is neither injective nor surjective.' },
          { label: 'Step 3: Check the balance', text: 'Again `$1 + 2 = 3$`. The map drops the first coordinate into the null fiber and shifts the rest down by one slot.' }
        ],
        result: 'Null space the `$x_{1}$`-axis, range the `$xy$`-plane, with `$1 + 2 = 3$`.'
      }
    ],
    keyTakeaways: [
      'Null spaces and ranges are subspaces; fibers above `$0$` and above reachable values tell the whole story.',
      'Injectivity is `$\\operatorname{null} T = \\{0\\}$`, as with multiplication by `$x^{2}$`.',
      'Surjectivity is `$\\operatorname{range} T = W$`, as with differentiation on polynomials.',
      'Nullity plus rank always returns the domain dimension on finite-dimensional domains.'
    ],
    quiz: [
      // PYQ-pattern: null-space injectivity drill with changed maps (rephrased, values changed)
      {
        q: 'What is the null space of differentiation `$D$` on `$\\mathcal{P}(\\mathbb{R})$`?',
        options: ['Only the zero polynomial', 'The constant polynomials', 'All polynomials of degree at most one', 'The polynomials vanishing at `$0$`'],
        answer: 1,
        explanation: 'Step 1: Solve `$Dp = 0$`, meaning `$p^{\\prime}$` is identically zero. Step 2: Only constants have zero derivative everywhere. Step 3: Nonzero constants show the null space exceeds `$\\{0\\}$`. Step 4: Hence `$D$` is not injective, with nullity one.'
      },
      {
        q: 'A map `$T$` satisfies `$Tu = Tw$` for `$u \\ne w$`. What follows?',
        options: ['`$T$` is surjective', '`$u - w$` is a nonzero vector of `$\\operatorname{null} T$`', '`$T$` must be the zero map', 'The range of `$T$` equals `$\\{0\\}$`'],
        answer: 1,
        explanation: 'Step 1: Linearity gives `$T(u - w) = Tu - Tw = 0$`. Step 2: Since `$u \\ne w$`, the vector `$u - w$` is nonzero. Step 3: A nonzero null vector breaks injectivity by 3.15. Step 4: Surjectivity and the zero map are unrelated to one collision.'
      },
      {
        q: 'Differentiation `$D : \\mathcal{P}_{3}(\\mathbb{R}) \\to \\mathcal{P}_{2}(\\mathbb{R})$` has rank three because of which fact?',
        options: ['Every quadratic integrates to a cubic', 'The null space holds the constants', 'Cubics have dimension four', 'Derivatives lower degree by exactly one'],
        answer: 0,
        explanation: 'Step 1: Rank is the dimension of the range. Step 2: Each quadratic `$q$` has an antiderivative cubic `$p$` with `$Dp = q$`. Step 3: So the range is all of `$\\mathcal{P}_{2}$`, of dimension three. Step 4: The null-space facts fix nullity, not rank.'
      },
      {
        q: 'If `$\\dim \\operatorname{range} T = 2$` inside a three-dimensional `$W$`, what about surjectivity?',
        options: ['`$T$` is surjective because rank is positive', '`$T$` is surjective when the domain is large', 'Surjectivity is undecided without the null space', '`$T$` is not surjective since `$2 < 3$`'],
        answer: 3,
        explanation: 'Step 1: Surjectivity needs the range to equal all of `$W$`. Step 2: A two-dimensional subspace of a three-dimensional space is proper. Step 3: Some vector of `$W$` lies outside the range. Step 4: Domain size and nullity cannot rescue a short range.'
      }
    ]
  },
  // ---------------------------------------------------------------- 19.2
  {
    sectionId: 'engmath-ch19-s2',
    readingTime: 9,
    intro: 'An invertible map undoes itself perfectly, with a two-sided inverse that is again linear. In finite dimensions injectivity alone or surjectivity alone already forces invertibility once dimensions match. Isomorphic spaces are then just relabelled copies of each other, classified entirely by dimension.',
    objectives: [
      'Test invertibility of small maps and construct two-sided inverses explicitly',
      'Use the finite-dimensional equivalence of injectivity, surjectivity and invertibility',
      'Classify spaces up to isomorphism by dimension and count `$\\dim \\mathcal{L}(V, W)$`'
    ],
    concepts: [
      {
        term: 'Invertible maps and their inverses',
        kind: 'definition',
        statement: '`$T$` is **invertible** when some `$S$` satisfies `$ST = I$` and `$TS = I$` on the respective spaces, and that `$S$` is then **linear** and unique, written `$T^{-1}$`, the `invert` package of Axler 3D. One-sided inverses need not agree in infinite dimensions, as the shifts show. In finite dimensions with matching sizes, one side implies the other.',
        detail: 'Uniqueness follows the classic sandwich: two rival inverses `$S_{1}, S_{2}$` satisfy `$S_{1} = S_{1}I = S_{1}(TS_{2}) = (S_{1}T)S_{2} = S_{2}$`.'
      },
      {
        term: 'One side suffices in finite dimensions',
        kind: 'theorem',
        statement: 'When `$\\dim V = \\dim W$`, injectivity, surjectivity and invertibility of `$T$` are **equivalent**, the `oneside` crown of Axler 3D. Rank-nullity leaves no room for a map that is injective but misses values, or surjective but collides, once dimensions agree. Checking one property therefore certifies all three, which halves every invertibility test.',
        detail: 'The hypothesis is essential: the forward shift is injective but not invertible, and the backward shift is surjective but not invertible.'
      },
      {
        term: 'Isomorphisms preserve all linear structure',
        kind: 'definition',
        statement: 'An **isomorphism** is an invertible linear map, and `$V$` is **isomorphic** to `$W$` when one exists, the `isomorph` notion of 3D. Isomorphisms carry independent lists to independent lists, spanning lists to spanning lists, and bases to bases. Whatever is true linearly on one side transports faithfully to the other.',
        detail: 'Coordinates give the model isomorphism `$V \\cong \\mathbb{F}^{n}$` for `$n = \\dim V$`, via any fixed basis.'
      },
      {
        term: 'Same dimension means isomorphic',
        kind: 'theorem',
        statement: 'Two finite-dimensional spaces are **isomorphic if and only if** their dimensions agree, the `dimclass` classification of Axler 3D. Matching bases bijectively and extending linearly builds the isomorphism in one direction, while an isomorphism transports any basis to a basis for the other. Dimension is therefore the complete invariant: one integer classifies everything.',
        detail: 'In particular every `$n$`-dimensional `$V$` is a relabelled `$\\mathbb{F}^{n}$`, so abstract spaces never outgrow coordinates.'
      },
      {
        term: 'Dimension of the map space',
        kind: 'theorem',
        statement: 'The space `$\\mathcal{L}(V, W)$` has **dimension** `$(\\dim V)(\\dim W)$`, with basis the maps sending one basis vector to one target basis vector and the rest to zero, the `lvwdim` count of Chapter 3. For `$\\mathcal{L}(\\mathbb{F}^{n}, \\mathbb{F}^{m})$` this recovers `$mn$` matrix entries. Counting maps is counting basis-to-basis assignments, nothing more.',
        detail: 'Hence `$\\mathcal{L}(V) = \\mathcal{L}(V, V)$` has dimension `$(\\dim V)^{2}$`, the square that matrix algebras inhabit.'
      }
    ],
    figures: [
      {
        caption: 'An isomorphism pairs `$V$` with `$W$` bijectively: independent lists, spans and bases transport across unchanged, since only the labels differ.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bijective pairing between two isomorphic spaces"><text x="360" y="38" font-family="sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="currentColor">Isomorphism: same structure, new labels</text><rect x="70" y="90" width="200" height="180" fill="none" stroke="currentColor" stroke-width="2"/><text x="170" y="74" font-family="sans-serif" font-size="15" font-weight="bold" text-anchor="middle" fill="currentColor">V, dim n</text><circle cx="130" cy="140" r="7" fill="currentColor"/><circle cx="130" cy="200" r="7" fill="currentColor"/><circle cx="130" cy="260" r="7" fill="currentColor"/><text x="112" y="144" font-family="sans-serif" font-size="13" text-anchor="end" fill="currentColor">v1</text><text x="112" y="204" font-family="sans-serif" font-size="13" text-anchor="end" fill="currentColor">v2</text><text x="112" y="264" font-family="sans-serif" font-size="13" text-anchor="end" fill="currentColor">v3</text><rect x="450" y="90" width="200" height="180" fill="none" stroke="currentColor" stroke-width="2"/><text x="550" y="74" font-family="sans-serif" font-size="15" font-weight="bold" text-anchor="middle" fill="currentColor">W, dim n</text><circle cx="590" cy="140" r="7" fill="none" stroke="currentColor" stroke-width="2.5"/><circle cx="590" cy="200" r="7" fill="none" stroke="currentColor" stroke-width="2.5"/><circle cx="590" cy="260" r="7" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="608" y="144" font-family="sans-serif" font-size="13" fill="currentColor">Tv1</text><text x="608" y="204" font-family="sans-serif" font-size="13" fill="currentColor">Tv2</text><text x="608" y="264" font-family="sans-serif" font-size="13" fill="currentColor">Tv3</text><line x1="270" y1="110" x2="450" y2="110" stroke="currentColor" stroke-width="2"/><polygon points="450,110 438,104 438,116" fill="currentColor"/><line x1="270" y1="180" x2="450" y2="180" stroke="currentColor" stroke-width="2"/><polygon points="450,180 438,174 438,186" fill="currentColor"/><line x1="270" y1="250" x2="450" y2="250" stroke="currentColor" stroke-width="2"/><polygon points="450,250 438,244 438,256" fill="currentColor"/><line x1="450" y1="140" x2="270" y2="140" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 5"/><polygon points="270,140 282,134 282,146" fill="currentColor"/><text x="360" y="100" font-family="sans-serif" font-size="13" font-style="italic" text-anchor="middle" fill="currentColor">T forward</text><text x="360" y="238" font-family="sans-serif" font-size="13" font-style="italic" text-anchor="middle" fill="currentColor">inverse back</text><text x="360" y="330" font-family="sans-serif" font-size="13" font-style="italic" text-anchor="middle" fill="currentColor">equal dimensions make one-way checks two-way</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Invert a two-dimensional twist',
        problem: 'Show `$T(x, y) = (x + y, x - y)$` on `$\\mathbb{F}^{2}$` is invertible and find `$T^{-1}$` explicitly.',
        steps: [
          { label: 'Step 1: Test injectivity', text: 'If `$T(x, y) = 0$` then `$x + y = 0$` with `$x - y = 0$`, forcing `$x = y = 0$`. The null space is trivial, so `$T$` is injective, hence invertible since dimensions match.' },
          { label: 'Step 2: Solve for the inverse and confirm by script', text: '```python\ndef T(v):\n    x, y = v\n    return (x + y, x - y)\ndef S(w):\n    u, v = w\n    return ((u + v) / 2, (u - v) / 2)\nprint(S(T((3, 1))))  # (3.0, 1.0)\nprint(T(S((5, 7))))  # (5.0, 7.0)\n```\nSetting `$(u, v) = (x + y, x - y)$` and solving gives `$x = (u + v) \\div 2$` with `$y = (u - v) \\div 2$`, and the script round-trips both directions.' },
          { label: 'Step 3: Certify both sides', text: 'Direct substitution shows `$S(T(x, y)) = (x, y)$` and `$T(S(u, v)) = (u, v)$`, so `$S = T^{-1}$` is linear with the required two-sided property.' }
        ],
        result: '`$T^{-1}(u, v) = ((u + v) \\div 2, (u - v) \\div 2)$`, verified in both composition orders.'
      },
      {
        title: 'Shifts show why finite dimensions matter',
        problem: 'On `$\\mathbb{F}^{\\infty}$`, let `$S(x_{1}, x_{2}, \\ldots) = (0, x_{1}, x_{2}, \\ldots)$` and `$B(x_{1}, x_{2}, \\ldots) = (x_{2}, x_{3}, \\ldots)$`. Show `$S$` is injective but not surjective while `$B$` is surjective but not injective.',
        steps: [
          { label: 'Step 1: Analyze the forward shift', text: '`$S$` prepends `$0$`, so distinct sequences stay distinct and `$S$` is injective. Nothing hits `$(1, 0, 0, \\ldots)$` since the first slot is always `$0$`, so `$S$` is not surjective.' },
          { label: 'Step 2: Analyze the backward shift', text: '`$B$` drops the first coordinate, so every tail extends to a preimage and `$B$` is surjective. But `$(1, 0, \\ldots)$` and `$(0, 0, \\ldots)$` share an image, so `$B$` is not injective.' },
          { label: 'Step 3: Draw the moral', text: 'One-sided behavior without invertibility is possible exactly because `$\\mathbb{F}^{\\infty}$` is infinite-dimensional. The equivalences of this section need the finite-dimensional hypothesis.' }
        ],
        result: 'Injective-neither-surjective and surjective-neither-injective maps exist, but only in infinite dimensions.'
      }
    ],
    keyTakeaways: [
      'Invertible maps own a unique linear two-sided inverse `$T^{-1}$`.',
      'With equal finite dimensions, injective, surjective and invertible coincide.',
      'Isomorphic means linked by an invertible map, which happens exactly for equal dimensions.',
      '`$\\dim \\mathcal{L}(V, W) = (\\dim V)(\\dim W)$`, so `$\\mathcal{L}(\\mathbb{F}^{n}, \\mathbb{F}^{m})$` has `$mn$` entries.'
    ],
    quiz: [
      // PYQ-pattern: invertibility and isomorphism dimension drill with changed maps (rephrased, values changed)
      {
        q: 'For `$T(x, y) = (x + y, x - y)$`, what is `$T^{-1}(u, v)$`?',
        options: [`$(u + v, u - v)$`, '`$((u + v) \\div 2, (u - v) \\div 2)$`', '`$(u - v, u + v)$`', '`$(v, u)$`'],
        answer: 1,
        explanation: 'Step 1: Set `$u = x + y$` with `$v = x - y$`. Step 2: Adding gives `$2x = u + v$`, subtracting gives `$2y = u - v$`. Step 3: Hence `$x = (u + v) \\div 2$` with `$y = (u - v) \\div 2$`. Step 4: The other options skip the halving or swap the roles.'
      },
      {
        q: 'A map between two three-dimensional spaces is injective. What follows?',
        options: ['It is invertible, by the finite-dimensional equivalence', 'It is the identity map', 'Its inverse is nonlinear', 'Nothing, without the matrix entries'],
        answer: 0,
        explanation: 'Step 1: Rank-nullity gives rank three from trivial null space. Step 2: Full rank in a three-dimensional codomain means surjective. Step 3: Bijective linear maps own linear inverses. Step 4: So injectivity alone certifies invertibility here.'
      },
      {
        q: 'Which spaces are isomorphic to `$\\mathcal{P}_{2}(\\mathbb{R})$`?',
        options: ['`$\\mathbb{R}^{2}$`, since quadratics use two coefficients', '`$\\mathbb{R}^{3}$`, since `$\\dim \\mathcal{P}_{2} = 3$`', 'Only `$\\mathcal{P}_{2}(\\mathbb{R})$` itself', 'Every finite-dimensional space'],
        answer: 1,
        explanation: 'Step 1: The basis `$1, x, x^{2}$` has length three. Step 2: Isomorphism class is fixed by dimension alone. Step 3: `$\\mathbb{R}^{3}$` shares dimension three. Step 4: `$\\mathbb{R}^{2}$` and the other options mismatch the count.'
      },
      {
        q: 'What is `$\\dim \\mathcal{L}(\\mathbb{F}^{2}, \\mathbb{F}^{3})$`?',
        options: [`$5$`, `$6$`, `$8$`, `$9$`],
        answer: 1,
        explanation: 'Step 1: Use `$\\dim \\mathcal{L}(V, W) = (\\dim V)(\\dim W)$`. Step 2: Substitute `$2$` with `$3$`. Step 3: The product is `$6$`, matching the six matrix entries. Step 4: Sums and powers of the dimensions give the wrong counts.'
      }
    ],
    depth: [
      {
        tier: 'masters',
        title: 'Finite-dimensional rigidity of invertibility',
        blocks: [
          {
            kind: 'theorem',
            body: 'Let $T: V \\to V$ be linear with $V$ finite dimensional. Then injective, surjective, bijective and invertible are equivalent, and any one sided inverse is the two sided inverse: $ST = I$ or $TS = I$ implies $S = T^{-1}$. Equivalently $\\det[T]_{\\mathcal{B}} \\neq 0$ in any basis, $0$ is not an eigenvalue, and rows and columns are both independent. Dimension is the rigidity source: rank nullity leaves no room for the asymmetric behavior common in infinite dimensions. Isomorphic spaces are exactly those of equal dimension.'
          },
          {
            kind: 'proof',
            body: 'Rank nullity gives $\\dim \\ker T + \\dim \\mathrm{range}(T) = \\dim V$. Injectivity means $\\dim \\ker T = 0$, forcing $\\dim \\mathrm{range} = \\dim V$ and hence surjectivity. Surjectivity means $\\dim \\mathrm{range} = \\dim V$, forcing $\\dim \\ker = 0$ and hence injectivity. If $ST = I$ then $T$ is injective, hence invertible with inverse $T^{-1}$, and $S = S I = S (T T^{-1}) = (ST) T^{-1} = T^{-1}$; the $TS = I$ case is symmetric. Determinant multiplicativity $\\det(ST) = \\det(S)\\det(T)$ mirrors the argument in coordinates.'
          },
          {
            kind: 'example',
            heading: 'Shifts show why finite dimensions matter',
            body: 'On square summable sequences let $R(x_{1}, x_{2}, \\ldots) = (0, x_{1}, x_{2}, \\ldots)$ be the right shift and $L(x_{1}, x_{2}, \\ldots) = (x_{2}, x_{3}, \\ldots)$ the left shift. Then $R$ is injective but not surjective since $(1, 0, \\ldots)$ is missed, while $L$ is surjective but not injective since $(1, 0, \\ldots)$ is killed. Moreover $L R = I$ yet $R L \\neq I$, so one sided inverses need not agree. The unilateral shift is the universal model for isometries in Beurling Lax and Hardy space theory.'
          },
        ]
      }
    ],
  },
  // ---------------------------------------------------------------- 19.3
  {
    sectionId: 'engmath-ch19-s3',
    readingTime: 8,
    intro: 'The product of spaces stacks vectors side by side, adding dimensions instead of multiplying them. The quotient collapses a whole subspace to zero, so vectors differing by an element of the subspace become identical. Both constructions come with dimension formulas that turn decompositions into arithmetic.',
    objectives: [
      'Compute in product spaces `$V_{1} \\times \\cdots \\times V_{m}$` and add their dimensions',
      'Form cosets `$v + U$`, add and scale them, and use the quotient map',
      'Apply `$\\dim V \\div U = \\dim V - \\dim U$` to quotients such as `$\\mathbb{F}^{3}$` by an axis'
    ],
    concepts: [
      {
        term: 'Product of vector spaces',
        kind: 'definition',
        statement: 'The **product** `$V_{1} \\times \\cdots \\times V_{m}$` holds tuples `$(v_{1}, \\ldots, v_{m})$` added and scaled slot by slot, the `prodspace` construction of Axler 3E. Its dimension is the **sum** `$\\dim V_{1} + \\cdots + \\dim V_{m}$`, proved by concatenating bases. Products stack spaces the way `$\\mathbb{F}^{n}$` stacks scalars, and `$\\mathbb{F}^{n}$` is exactly the `$n$`-fold product of `$\\mathbb{F}$`.',
        detail: 'The product is not the span of a union: its vectors keep all slots alive at once instead of mixing them.'
      },
      {
        term: 'Quotient space and cosets',
        kind: 'definition',
        statement: 'For a subspace `$U$` of `$V$`, the **quotient** `$V \\div U$` holds the **cosets** `$v + U = \\{v + u : u \\in U\\}$`, added by `$(v + U) + (w + U) = (v + w) + U$` and scaled by `$a(v + U) = av + U$`, the `quotdef` of Axler 3E. The operations are well defined because rival representatives differ by elements of `$U$` that absorb into the coset. Intuitively `$U$` is crushed to a point and the cosets are parallel copies of `$U$`.',
        detail: 'Modulo the `$z$`-axis, `$(1, 2, 3)$` and `$(1, 2, 7)$` name one coset since their difference sits in the axis.'
      },
      {
        term: 'Quotient map and its kernel',
        kind: 'method',
        statement: 'The **quotient map** `$\\pi : V \\to V \\div U$` sends `$v$` to `$v + U$`; it is linear and surjective with `$\\operatorname{null} \\pi = U$`, the `quotmap` of 3E. Every map killing `$U$` factors uniquely through `$\\pi$`, the universal property that makes quotients inevitable rather than ornamental. Kernels and quotients are two faces of one idea: killing `$U$` by mapping, or by collapsing.',
        detail: 'Applying rank-nullity to `$\\pi$` already yields the quotient dimension formula of the next concept.'
      },
      {
        term: 'Dimension formulas for products and quotients',
        kind: 'theorem',
        statement: 'Dimensions **add** across products and **subtract** across quotients: `$\\dim(V \\times W) = \\dim V + \\dim W$` and `$\\dim(V \\div U) = \\dim V - \\dim U$`, the `quotdim` pair of Axler 3E. Hence `$\\mathbb{F}^{3}$` modulo the `$z$`-axis has dimension `$3 - 1 = 2$`, with `$e_{1} + U$` and `$e_{2} + U$` as a basis. Decomposition arithmetic never needs coordinates again.',
        detail: 'The quotient formula is rank-nullity applied to `$\\pi$`, since `$\\operatorname{range} \\pi = V \\div U$` and `$\\operatorname{null} \\pi = U$`.'
      },
      {
        term: 'Quotients complete the decomposition toolkit',
        kind: 'insight',
        statement: 'Subspaces select, products stack, direct sums split, and **quotients collapse**: the four moves compose into every decomposition argument, the `decomptool` panorama. A complement `$V = U \\oplus W$` gives `$V \\div U \\cong W$` for free, linking sums to quotients. Whenever a proof ignores differences inside `$U$`, a quotient is hiding in the background.',
        detail: 'Congruence modulo `$n$` is the same idea for integers, with multiples of `$n$` collapsed exactly like a subspace.'
      }
    ],
    figures: [
      {
        caption: 'The product `$V \\times W$` grids pairs side by side, while the quotient `$V \\div U$` flattens each coset `$v + U$` to one point of a lower-dimensional space.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Product grid and quotient collapse diagrams"><text x="190" y="38" font-family="sans-serif" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">Product stacks</text><text x="530" y="38" font-family="sans-serif" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">Quotient collapses</text><line x1="70" y1="280" x2="310" y2="280" stroke="currentColor" stroke-width="1.5"/><line x1="90" y1="300" x2="90" y2="100" stroke="currentColor" stroke-width="1.5"/><line x1="150" y1="280" x2="150" y2="100" stroke="currentColor" stroke-width="1" stroke-dasharray="5 4"/><line x1="210" y1="280" x2="210" y2="100" stroke="currentColor" stroke-width="1" stroke-dasharray="5 4"/><line x1="90" y1="220" x2="310" y2="220" stroke="currentColor" stroke-width="1" stroke-dasharray="5 4"/><line x1="90" y1="160" x2="310" y2="160" stroke="currentColor" stroke-width="1" stroke-dasharray="5 4"/><circle cx="210" cy="160" r="7" fill="currentColor"/><text x="224" y="156" font-family="sans-serif" font-size="13" font-weight="bold" fill="currentColor">(v, w)</text><text x="190" y="322" font-family="sans-serif" font-size="13" font-style="italic" text-anchor="middle" fill="currentColor">dims add: 2 + 1 = 3</text><line x1="420" y1="280" x2="640" y2="280" stroke="currentColor" stroke-width="2"/><line x1="440" y1="280" x2="500" y2="100" stroke="currentColor" stroke-width="2.5"/><line x1="510" y1="280" x2="570" y2="100" stroke="currentColor" stroke-width="2.5"/><line x1="580" y1="280" x2="640" y2="100" stroke="currentColor" stroke-width="2.5"/><line x1="455" y1="190" x2="625" y2="190" stroke="currentColor" stroke-width="1.5"/><polygon points="625,190 613,184 613,196" fill="currentColor"/><text x="530" y="178" font-family="sans-serif" font-size="13" fill="currentColor">pi</text><text x="470" y="300" font-family="sans-serif" font-size="13" fill="currentColor">v + U</text><text x="530" y="322" font-family="sans-serif" font-size="13" font-style="italic" text-anchor="middle" fill="currentColor">dims subtract: 3 - 1 = 2</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Dimensions and arithmetic in a product',
        problem: 'Show `$\\mathbb{R}^{2} \\times \\mathbb{R}^{3}$` has dimension five, add two of its elements, and confirm the count by script.',
        steps: [
          { label: 'Step 1: Concatenate bases', text: 'Take the two standard vectors on the left slot and three on the right; together the five pairs `$(e_{1}, 0)$`, `$(e_{2}, 0)$`, `$(0, f_{1})$`, `$(0, f_{2})$`, `$(0, f_{3})$` are independent and spanning. Hence the dimension is `$2 + 3 = 5$`.' },
          { label: 'Step 2: Add slot by slot, with a numeric check', text: '```python\na = ((1, 2), (3, 4, 5))\nb = ((0, 1), (1, 0, 2))\nsum_ab = ((1, 3), (4, 4, 7))\nprint(sum_ab)  # ((1, 3), (4, 4, 7))\n```\nAddition never mixes the slots: left pairs add with left pairs and right triples with right triples, as the script shows.' },
          { label: 'Step 3: Read the lesson', text: 'Products add dimensions because bases concatenate without interference. `$\\mathbb{F}^{5}$` is isomorphic to this product but keeps its slots unnamed.' }
        ],
        result: '`$\\dim(\\mathbb{R}^{2} \\times \\mathbb{R}^{3}) = 5$`, with slotwise addition verified.'
      },
      {
        title: 'Quotient of `$\\mathbb{F}^{3}$` by the z-axis',
        problem: 'Let `$U = \\{(0, 0, z)\\}$` in `$\\mathbb{F}^{3}$`. Describe the cosets, give a basis of `$\\mathbb{F}^{3} \\div U$`, and state its dimension.',
        steps: [
          { label: 'Step 1: Parametrize the cosets', text: 'Each coset is a vertical line `$(a, b, 0) + U = \\{(a, b, t) : t \\in \\mathbb{F}\\}$`, fixed by its first two coordinates. Two vectors share a coset exactly when they agree in slots one and two.' },
          { label: 'Step 2: Push a basis through the quotient map', text: 'The images `$e_{1} + U$` and `$e_{2} + U$` span the quotient since `$e_{3} + U$` is zero there, and they are independent because a relation would pull back into `$U$`. Hence they form a basis.' },
          { label: 'Step 3: Subtract the dimensions', text: 'By the quotient formula `$\\dim(\\mathbb{F}^{3} \\div U) = 3 - 1 = 2$`, matching the two-element basis. Collapsing one axis leaves a plane of cosets.' }
        ],
        result: '`$\\mathbb{F}^{3} \\div U$` is two-dimensional with basis `$e_{1} + U$`, `$e_{2} + U$`.'
      }
    ],
    keyTakeaways: [
      'Products stack spaces slot by slot and add their dimensions.',
      'Cosets `$v + U$` partition `$V$`; the quotient identifies each with one point.',
      'The quotient map `$\\pi$` is linear and surjective with kernel `$U$`.',
      '`$\\dim(V \\div U) = \\dim V - \\dim U$`, so `$\\mathbb{F}^{3}$` by an axis is two-dimensional.'
    ],
    quiz: [
      // PYQ-pattern: product and quotient dimension drill with changed spaces (rephrased, values changed)
      {
        q: 'What is `$\\dim(\\mathbb{F}^{2} \\times \\mathbb{F}^{3})$`?',
        options: [`$5$`, `$6$`, `$3$`, 'Infinite'],
        answer: 0,
        explanation: 'Step 1: Concatenate a basis of `$\\mathbb{F}^{2}$` with one of `$\\mathbb{F}^{3}$`. Step 2: The five pairs are independent and spanning. Step 3: Product dimensions add, giving `$2 + 3 = 5$`. Step 4: Multiplication of dimensions counts maps, not products.'
      },
      {
        q: 'When do `$v$` and `$w$` define the same coset modulo `$U$`?',
        options: ['When `$v + w \\in U$`', 'When `$v - w \\in U$`', 'When both lie outside `$U$`', 'When one of them is `$0$`'],
        answer: 1,
        explanation: 'Step 1: Equality `$v + U = w + U$` means `$w = v + u$` for some `$u$`. Step 2: Rearranging gives `$w - v \\in U$`. Step 3: Sums test nothing about cosets. Step 4: Location outside `$U$` is irrelevant to the difference test.'
      },
      {
        q: 'What is `$\\dim(\\mathbb{F}^{3} \\div U)$` for `$U$` the `$z$`-axis?',
        options: ['`$1$', '`$2$', '`$3$', '`$0$`'],
        answer: 1,
        explanation: 'Step 1: Apply `$\\dim(V \\div U) = \\dim V - \\dim U$`. Step 2: Substitute `$3 - 1$`. Step 3: The quotient is two-dimensional, spanned by `$e_{1} + U$` with `$e_{2} + U$`. Step 4: Collapsing one axis removes exactly one dimension.'
      },
      {
        q: 'What is the null space of the quotient map `$\\pi : V \\to V \\div U$`?',
        options: ['`$\\{0\\}$` always', 'The whole space `$V$`', '`$U$` itself', 'The complement of `$U$`'],
        answer: 2,
        explanation: 'Step 1: By definition `$\\pi(v) = v + U$`. Step 2: This coset is zero exactly when `$v \\in U$`. Step 3: Hence `$\\operatorname{null} \\pi = U$`. Step 4: Rank-nullity on `$\\pi$` then yields the quotient dimension formula.'
      }
    ]
  },
  // ---------------------------------------------------------------- 19.4
  {
    sectionId: 'engmath-ch19-s4',
    readingTime: 8,
    intro: 'The dual space collects all linear functionals, the scalar-valued maps that measure vectors. Every basis begets a dual basis that reads coordinates, and the double dual returns the original space. Annihilators then replay null spaces and ranges on the functional side, previewing the cleanest statements of all.',
    objectives: [
      'Evaluate dual-basis functionals and expand vectors in the dual pairing',
      'Compute annihilators `$U^{0}$` and balance `$\\dim U + \\dim U^{0} = \\dim V$`',
      'Use the dual map `$T^{\\prime}$` and the double-dual identification `$V \\cong V^{\\prime\\prime}$`'
    ],
    concepts: [
      {
        term: 'Dual space of functionals',
        kind: 'definition',
        statement: 'The **dual space** `$V^{\\prime} = \\mathcal{L}(V, \\mathbb{F})$` holds all linear maps from `$V$` to scalars, called **functionals**, with the `dualspace` structure of Axler 3F. It is a vector space under pointwise operations and satisfies `$\\dim V^{\\prime} = \\dim V$` in finite dimensions. Functionals measure vectors the way coordinates do, one linear reading at a time.',
        detail: 'On `$\\mathbb{F}^{n}$` the coordinate projections are the model functionals, each reporting one slot.'
      },
      {
        term: 'Dual basis reads coordinates',
        kind: 'theorem',
        statement: 'For a basis `$v_{1}, \\ldots, v_{n}$`, the **dual basis** `$\\varphi_{1}, \\ldots, \\varphi_{n}$` is fixed by `$\\varphi_{j}(v_{k}) = 1$` for `$j = k$` and `$0$` otherwise, the `dualbasis` of 3F. Every `$v$` then expands as `$v = \\varphi_{1}(v)v_{1} + \\cdots + \\varphi_{n}(v)v_{n}$`, so dual functionals are coordinate readers. Existence follows by defining each `$\\varphi_{j}$` on the basis and extending linearly.',
        detail: 'For the basis `$(1, 1)$`, `$(1, -1)$` of `$\\mathbb{F}^{2}$`, the dual functionals are `$\\varphi_{1}(x, y) = (x + y) \\div 2$` with `$\\varphi_{2}(x, y) = (x - y) \\div 2$`.'
      },
      {
        term: 'Dual map reverses direction',
        kind: 'definition',
        statement: 'For `$T \\in \\mathcal{L}(V, W)$`, the **dual map** `$T^{\\prime} \\in \\mathcal{L}(W^{\\prime}, V^{\\prime})$` is defined by `$T^{\\prime}(\\psi) = \\psi \\circ T$`, the `dualmap` of 3F. It pulls measurements on `$W$` back to measurements on `$V$`, reversing arrows while preserving linearity. Algebraically it is the transpose before matrices are mentioned.',
        detail: 'The assignment `$T \\mapsto T^{\\prime}$` is itself linear and reverses products: `$(ST)^{\\prime} = T^{\\prime}S^{\\prime}$`.'
      },
      {
        term: 'Annihilators and their dimensions',
        kind: 'theorem',
        statement: 'The **annihilator** `$U^{0} = \\{\\varphi \\in V^{\\prime} : \\varphi(u) = 0$` for all `$u \\in U\\}$` holds the functionals vanishing on `$U$`, with `$\\dim U + \\dim U^{0} = \\dim V$`, the `annihil` formula of 3F. Functionals constrained on `$U$` lose exactly `$\\dim U$` degrees of freedom. Annihilators are the functional shadows of subspaces.',
        detail: 'For the `$x$`-axis `$U$` in `$\\mathbb{F}^{3}$`, `$U^{0}$` is spanned by the second and third coordinate functionals, of dimension two.'
      },
      {
        term: 'Double dual returns home',
        kind: 'insight',
        statement: 'Evaluation at `$v$` defines a functional on `$V^{\\prime}$`, and `$v \\mapsto$` evaluation is a **natural isomorphism** `$V \\cong V^{\\prime\\prime}$`, the `doubledual` of 3F. No basis choice is needed, unlike `$V \\cong V^{\\prime}$`, which is never canonical. Null spaces and ranges dualize cleanly: `$\\operatorname{null} T^{\\prime} = (\\operatorname{range} T)^{0}$` with `$\\operatorname{range} T^{\\prime} = (\\operatorname{null} T)^{0}$`.',
        detail: 'Naturality means every `$T$` commutes with evaluation, so the identification respects all maps at once.'
      }
    ],
    figures: [
      {
        caption: 'A nonzero functional `$\\varphi$` slices the plane into parallel level lines `$\\varphi = c$`: the kernel line through `$0$` plus its evenly spaced translates.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Level lines of a linear functional"><text x="360" y="38" font-family="sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="currentColor">Level lines of a linear functional</text><line x1="60" y1="300" x2="660" y2="300" stroke="currentColor" stroke-width="1.5"/><line x1="90" y1="320" x2="90" y2="60" stroke="currentColor" stroke-width="1.5"/><line x1="110" y1="290" x2="350" y2="70" stroke="currentColor" stroke-width="1.5" stroke-dasharray="7 5"/><line x1="200" y1="300" x2="440" y2="80" stroke="currentColor" stroke-width="2.5"/><line x1="290" y1="310" x2="530" y2="90" stroke="currentColor" stroke-width="1.5" stroke-dasharray="7 5"/><line x1="380" y1="310" x2="620" y2="90" stroke="currentColor" stroke-width="1.5" stroke-dasharray="7 5"/><text x="452" y="72" font-family="sans-serif" font-size="13" font-weight="bold" fill="currentColor">kernel</text><text x="150" y="120" font-family="sans-serif" font-size="13" fill="currentColor">c = 2</text><text x="330" y="310" font-family="sans-serif" font-size="13" fill="currentColor">c = -1</text><text x="560" y="310" font-family="sans-serif" font-size="13" fill="currentColor">c = -2</text><line x1="320" y1="190" x2="380" y2="190" stroke="currentColor" stroke-width="2"/><polygon points="380,190 368,184 368,196" fill="currentColor"/><text x="350" y="178" font-family="sans-serif" font-size="13" font-style="italic" text-anchor="middle" fill="currentColor">growth</text><text x="360" y="336" font-family="sans-serif" font-size="13" font-style="italic" text-anchor="middle" fill="currentColor">parallel slices, even spacing: the signature of linearity</text></svg>`,
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: 'Dual basis of a tilted pair',
        problem: 'Find the functionals `$\\varphi_{1}, \\varphi_{2}$` dual to `$v_{1} = (1, 1)$` and `$v_{2} = (1, -1)$` in `$\\mathbb{F}^{2}$`, and verify the duality relations by script.',
        steps: [
          { label: 'Step 1: Solve for the readers', text: 'Write `$\\varphi_{1}(x, y) = ax + by$`; the conditions `$\\varphi_{1}(v_{1}) = 1$` with `$\\varphi_{1}(v_{2}) = 0$` give `$a + b = 1$` and `$a - b = 0$`, so `$a = b = 1 \\div 2$`. Similarly `$\\varphi_{2}(x, y) = (x - y) \\div 2$`.' },
          { label: 'Step 2: Verify all four pairings by script', text: '```python\ndef p1(v):\n    return (v[0] + v[1]) / 2\ndef p2(v):\n    return (v[0] - v[1]) / 2\nprint(p1((1, 1)), p1((1, -1)))  # 1.0 0.0\nprint(p2((1, 1)), p2((1, -1)))  # 0.0 1.0\n```\nThe script checks `$\\varphi_{j}(v_{k})$` equals one for matching indices and zero otherwise.' },
          { label: 'Step 3: Expand a vector', text: 'For instance `$(3, 1) = 2(1, 1) + 1(1, -1)$`, and indeed `$\\varphi_{1}(3, 1) = 2$` with `$\\varphi_{2}(3, 1) = 1$`. Dual functionals report coordinates without solving.' }
        ],
        result: '`$\\varphi_{1}(x, y) = (x + y) \\div 2$` and `$\\varphi_{2}(x, y) = (x - y) \\div 2$` form the dual basis.'
      },
      {
        title: 'Annihilator of the x-axis in `$\\mathbb{F}^{3}$`',
        problem: 'Compute `$U^{0}$` for `$U = \\{(x, 0, 0)\\}$` in `$\\mathbb{F}^{3}$` and verify `$\\dim U + \\dim U^{0} = 3$`.',
        steps: [
          { label: 'Step 1: Translate vanishing into equations', text: 'Write `$\\varphi(x, y, z) = ax + by + cz$`; vanishing on `$U$` means `$ax = 0$` for all `$x$`, so `$a = 0$`. Hence `$U^{0} = \\{by + cz\\}$` with free `$b, c$`.' },
          { label: 'Step 2: Name the spanning functionals', text: 'The coordinate projections `$\\varphi_{2}(x, y, z) = y$` and `$\\varphi_{3}(x, y, z) = z$` span `$U^{0}$` and are independent, so `$\\dim U^{0} = 2$`.' },
          { label: 'Step 3: Balance the dimensions', text: 'With `$\\dim U = 1$`, the sum `$1 + 2 = 3$` confirms the annihilator formula. One constrained direction removes exactly one functional degree of freedom.' }
        ],
        result: '`$U^{0} = \\operatorname{span}(\\varphi_{2}, \\varphi_{3})$` is two-dimensional, and `$1 + 2 = 3$`.'
      }
    ],
    keyTakeaways: [
      'The dual `$V^{\\prime}$` holds all scalar-valued linear measurements with `$\\dim V^{\\prime} = \\dim V$`.',
      'Dual bases read coordinates: `$v = \\varphi_{1}(v)v_{1} + \\cdots + \\varphi_{n}(v)v_{n}$`.',
      'Annihilators satisfy `$\\dim U + \\dim U^{0} = \\dim V$`, shadowing subspaces functionally.',
      'Evaluation identifies `$V$` with `$V^{\\prime\\prime}$` naturally, dualizing null spaces into annihilators of ranges.'
    ],
    quiz: [
      // PYQ-pattern: dual basis and annihilator drill with changed bases (rephrased, values changed)
      {
        q: 'What is the dual space `$V^{\\prime}$`?',
        options: ['The set of all subspaces of `$V$`', 'The space `$\\mathcal{L}(V, \\mathbb{F})$` of linear functionals', 'The product `$V \\times \\mathbb{F}$`', 'The quotient of `$V$` by `$\\{0\\}$`'],
        answer: 1,
        explanation: 'Step 1: Functionals are linear maps landing in the scalars. Step 2: Collecting them with pointwise operations gives `$\\mathcal{L}(V, \\mathbb{F})$`. Step 3: Subspaces, products and quotients are different constructions. Step 4: In finite dimensions its dimension matches `$\\dim V$`.'
      },
      {
        q: 'For the dual pair, `$\\varphi_{1}(1, 1)$` with `$\\varphi_{1}(x, y) = (x + y) \\div 2$` equals what?',
        options: [`$0$`, `$1$`, '`$2$', '`$1 \\div 2$`'],
        answer: 1,
        explanation: 'Step 1: Substitute `$x = 1$` with `$y = 1$`. Step 2: Compute `$(1 + 1) \\div 2 = 1$`. Step 3: This is the `$j = k$` case of the duality relations. Step 4: Off-diagonal pairings give zero instead.'
      },
      {
        q: 'If `$\\dim V = 5$` and `$\\dim U = 2$`, what is `$\\dim U^{0}$`?',
        options: [`$2$`, `$5$`, `$3$`, `$7$`],
        answer: 2,
        explanation: 'Step 1: Apply `$\\dim U + \\dim U^{0} = \\dim V$`. Step 2: Substitute `$2 + \\dim U^{0} = 5$`. Step 3: Solve to get `$3$`. Step 4: Vanishing on more directions leaves fewer free functionals, never more.'
      },
      {
        q: 'The double-dual identification `$V \\cong V^{\\prime\\prime}$` is special because of which property?',
        options: ['It doubles the dimension', 'It needs no basis choice, unlike `$V \\cong V^{\\prime}$`', 'It reverses all arrows twice', 'It holds only for `$\\mathbb{F}^{n}$`'],
        answer: 1,
        explanation: 'Step 1: Evaluation at `$v$` is defined without coordinates. Step 2: The map `$v$` to evaluation is an isomorphism in finite dimensions. Step 3: Identifying `$V$` with `$V^{\\prime}$` always chooses a basis. Step 4: Naturality makes the double-dual identification respect every linear map.'
      }
    ]
  }
]
