import type { SectionContent } from '../library'

// ============================================================================
// StudyVerse master study content — Compiler Design, Chapter 7: Top-Down LL(1)
// Sections 7.1 – 7.4. Full depth: FIRST and FOLLOW computation, predictive
// tables, conflict diagnosis, left recursion and left factoring rewrites.
// ============================================================================

export const compcoaCh07Content: SectionContent[] = [
  // ---------------------------------------------------------------- 7.1
  {
    sectionId: 'compcoa-ch7-s1',
    readingTime: 8,
    intro: 'FIRST sets tell a predictive parser which terminals can begin strings derived from any grammar symbol. The computation handles empty derivations carefully because nullability decides whether the next symbol contributes. This section gives the fixed-point rules and traces them on a small expression grammar.',
    objectives: [
      'Define FIRST for terminals, nonterminals, and symbol strings including empty',
      'Run the fixed-point iteration that adds terminals and empty through nullable prefixes',
      'Use FIRST of right-hand sides to justify predictive choices'
    ],
    concepts: [
      {
        term: 'FIRST of a symbol string',
        kind: 'definition',
        statement: 'The set **FIRST** of a string `alpha` holds every terminal `a` that can appear first in some derivation plus `epsilon` when `alpha` derives empty. Formally $a \\in FIRST(\\alpha)$ when $\\alpha \\Rightarrow^{*} a\\beta$ and $\\epsilon \\in FIRST(\\alpha)$ when $\\alpha \\Rightarrow^{*} \\epsilon$.',
        detail: 'Terminals seed themselves with $FIRST(a) = \\{a\\}$ while nonterminals accumulate through productions. The empty marker is a flag, not a consumable terminal.'
      },
      {
        term: 'Nullable symbols',
        kind: 'definition',
        statement: 'A symbol is **nullable** when it derives `epsilon`, computed first as the **least fixed point** of the rules for empty productions and nullable bodies. Nullability gates every longer FIRST rule because $X_1 \\ldots X_k$ is nullable exactly when each $X_i$ is nullable.',
        detail: 'Iterate from direct $A \\to \\epsilon$ productions outward until no fresh nullable head appears. Without this pass the main FIRST loop cannot decide how far to look down a right-hand side.'
      },
      {
        term: 'FIRST rule for one production',
        kind: 'method',
        statement: 'For `A -> X1 X2 ... Xk` add **FIRST(Xi) minus epsilon** for each leading nullable run, stopping at the first non-nullable `Xi`. When the whole body is nullable then also add `epsilon` to `FIRST(A)` since $FIRST(A) \\supseteq \\bigcup FIRST(X_i)$ over that prefix.',
        detail: 'The scan is prefix-bounded: symbols after a non-nullable head never contribute to this production. Each round only adds symbols, so termination is guaranteed.'
      },
      {
        term: 'Fixed-point iteration order',
        kind: 'method',
        statement: 'The solver repeats a **worklist pass** over all productions `P` until no set changes, which reaches the least solution of the FIRST equations. Processing nullable nonterminals early reduces rounds but any fair order converges to the same $FIRST$ sets.',
        detail: 'Monotonic growth bounds the total work by grammar size times alphabet size. A changed head requeues only productions that mention it on the right.'
      },
      {
        term: 'FIRST of right-hand sides in decisions',
        kind: 'insight',
        statement: 'Predictive choice uses **FIRST of the body**, denoted `FIRST(beta)`, to map lookahead `a` to at most one alternative of `A`. When $a \\in FIRST(\\beta_i)$ the parser commits to `A -> beta_i` without consuming input or backtracking.',
        detail: 'Overlapping body FIRST sets already signal a future table clash. Computing these body sets once lets table building become a direct placement loop.'
      }
    ],
    examples: [
      {
        title: 'Trace: FIRST on an expression grammar',
        problem: 'Compute FIRST for `E -> T X`, `X -> + T X | epsilon`, `T -> id | ( E )`.',
        steps: [
          { label: 'Step 1', text: '```text\nE -> T X\nX -> + T X | epsilon\nT -> id | ( E )\n```\nSeed terminals with themselves and mark X nullable from its empty alternative, so the nullable set starts as {X}.' },
          { label: 'Step 2', text: 'From $T \\to id$ add $id$ and from $T \\to (E)$ add $($ to $FIRST(T)$. Since $T$ is not nullable, $FIRST(E) = FIRST(T) = \\{id, (\\}$ with no spill into $X$ on this pass.' },
          { label: 'Step 3', text: 'From $X \\to +TX$ add $+$ to $FIRST(X)$, and keep $\\epsilon$ from the empty alternative, giving $FIRST(X) = \\{+, \\epsilon\\}$. No further round changes any set, so the fixed point is reached.' }
        ],
        result: 'FIRST(E) is {id, (}, FIRST(T) is {id, (}, FIRST(X) is {+, epsilon}, with X the only nullable head.'
      },
      {
        title: 'Trace: nullable chain through three symbols',
        problem: 'Find FIRST(A) for `A -> B C d`, `B -> epsilon | b`, `C -> epsilon | c`.',
        steps: [
          { label: 'Step 1', text: '```text\nA -> B C d\nB -> epsilon | b\nC -> epsilon | c\n```\nNullable seeds are B and C from their empty alternatives, while d stays non-nullable and blocks full nullability of A.' },
          { label: 'Step 2', text: 'Scan the body $BCD$ left to right: add $FIRST(B) - \\{\\epsilon\\} = \\{b\\}$, continue past nullable $B$, add $FIRST(C) - \\{\\epsilon\\} = \\{c\\}$, continue past nullable $C$, then add $FIRST(d) = \\{d\\}$ and stop.' },
          { label: 'Step 3', text: 'Collect $\\{b, c, d\\}$ as $FIRST(A)$ with no $\\epsilon$ because $d$ is non-nullable. Removing $d$ would flip the result to include $\\epsilon$.' }
        ],
        result: 'FIRST(A) equals {b, c, d} since the nullable prefix B C exposes each successive symbol.'
      }
    ],
    keyTakeaways: [
      'FIRST holds possible leading terminals plus epsilon exactly when empty is derivable.',
      'Nullable computation comes first and controls how far each production scan reaches.',
      'Each production contributes body FIRST minus epsilon up to the first non-nullable symbol.',
      'Iteration to a fixed point yields the least solution that predictive tables rely on.'
    ],
    quiz: [
      // PYQ-pattern: FIRST computation with nullable prefix, a standard fixed-point question.
      {
        q: 'Given `A -> B C d` with B and C nullable, $b \\in FIRST(B)$, $c \\in FIRST(C)$, what is FIRST(A)?',
        options: [`$\\{b\\}$`, `$\\{b, c, d\\}$`, `$\\{b, c\\}$`, `$\\{b, c, d, \\epsilon\\}$`],
        answer: 1,
        explanation: 'Step 1: Scan past nullable B and collect b. Step 2: Scan past nullable C and collect c. Step 3: Reach non-nullable d and collect d, then stop. Step 4: Exclude epsilon since the body cannot vanish.'
      },
      {
        q: 'When is $\\epsilon$ placed in FIRST(A)?',
        options: ['When A derives at least one terminal string', 'Whenever A has two alternatives', 'Only when some production body of A is fully nullable', 'Whenever FOLLOW(A) is nonempty'],
        answer: 2,
        explanation: 'Step 1: Recall epsilon marks derivability of empty. Step 2: Check each production body for full nullability. Step 3: Add epsilon only when one body qualifies. Step 4: Reject terminal-derivation or alternative-count tests.'
      },
      {
        q: 'Why must nullability be computed before the main FIRST loop?',
        options: ['Because the reach of each production scan depends on which prefix symbols vanish', 'Because terminals need FOLLOW first', 'Because epsilon must be removed from all sets', 'Because worklists cannot hold productions'],
        answer: 0,
        explanation: 'Step 1: Recall each scan stops at the first non-nullable symbol. Step 2: Note the stop position is unknown without nullability. Step 3: Compute nullable heads to fix scan extents. Step 4: Run FIRST accumulation with correct prefix bounds.'
      },
      {
        q: 'What does $a \\in FIRST(\\beta)$ tell a predictive parser at nonterminal A?',
        options: ['That A must derive epsilon', 'That the parser should pop A without reading', 'That a belongs in FOLLOW(A)', 'That lookahead a selects the alternative with body beta'],
        answer: 3,
        explanation: 'Step 1: Recall prediction maps lookahead to one body. Step 2: Match a against each body FIRST set. Step 3: Commit to the body whose set holds a. Step 4: Distinguish this selection role from FOLLOW duties.'
      }
    ]
  },

  // ---------------------------------------------------------------- 7.2
  {
    sectionId: 'compcoa-ch7-s2',
    readingTime: 8,
    intro: 'FOLLOW sets tell the parser what can legally appear right after each nonterminal in a sentential form. They seed the end marker at the start symbol and then flow across productions wherever a nullable tail lets context pass through. This section states the two propagation rules and traces them to a fixed point.',
    objectives: [
      'State the seeding and propagation rules for FOLLOW with nullable tails',
      'Trace FOLLOW growth on an expression grammar until sets stabilize',
      'Explain how FOLLOW selects empty alternatives during prediction'
    ],
    concepts: [
      {
        term: 'FOLLOW definition',
        kind: 'definition',
        statement: 'The set **FOLLOW** of `A` holds every terminal `a` that can follow `A` in some sentential form plus the end marker `eof`. Formally $a \\in FOLLOW(A)$ when $S \\Rightarrow^{*} \\alpha A a \\beta$ for start $S$, with $eof \\in FOLLOW(S)$ by seeding.',
        detail: 'FOLLOW is context-sensitive to grammar position, unlike FIRST which is local to derivations. The same terminal may follow A in one grammar and never follow it in another.'
      },
      {
        term: 'Seeding with the end marker',
        kind: 'law',
        statement: 'Every computation starts with **`eof` in FOLLOW(S)** for the start symbol `S` and nowhere else initially. This single seed models the virtual terminator after the whole input, written $eof \\in FOLLOW(S)$.',
        detail: 'Without the seed, trailing nonterminals would show empty FOLLOW and empty alternatives at the input end could never be selected. The marker flows only through tail propagation, never by invention.'
      },
      {
        term: 'Rule one: FIRST of the tail',
        kind: 'method',
        statement: 'For each `A -> alpha B beta`, add **FIRST(beta) minus epsilon** to `FOLLOW(B)` using the `beta` block after `B`. The equation is $FOLLOW(B) \\supseteq FIRST(\\beta) - \\{\\epsilon\\}$ for every occurrence of $B$ with trailing $\\beta$.',
        detail: 'This rule is local to one production and fires even when beta cannot vanish. It captures terminals that directly begin the material after B.'
      },
      {
        term: 'Rule two: flow through nullable tails',
        kind: 'method',
        statement: 'For each `A -> alpha B beta` with `beta` nullable or missing, add **FOLLOW(A)** into `FOLLOW(B)`, giving $FOLLOW(B) \\supseteq FOLLOW(A)$. Whatever can follow the head can follow the exposed tail occurrence, and the copy repeats until no set grows.',
        detail: 'Chains of tail copies move the eof seed deep into the grammar. Missing this rule is the usual cause of underfilled FOLLOW sets on trailing nonterminals.'
      },
      {
        term: 'FOLLOW selects empty bodies',
        kind: 'insight',
        statement: 'When `A -> epsilon` exists, lookahead `a` selects it exactly when `a` is in **FOLLOW(A)**, coded as `M[A, a] = A -> epsilon`. The parser pops `A` without consuming input whenever $a \\in FOLLOW(A)$ and $a \\notin FIRST$ of other bodies.',
        detail: 'This is the second half of table placement: FIRST places nonempty bodies while FOLLOW places empty ones. Disjointness of those placements keeps prediction unique.'
      }
    ],
    examples: [
      {
        title: 'Trace: FOLLOW on the expression grammar',
        problem: 'Compute FOLLOW for `E -> T X`, `X -> + T X | epsilon`, `T -> id | ( E )`.',
        steps: [
          { label: 'Step 1', text: '```text\nE -> T X\nX -> + T X | epsilon\nT -> id | ( E )\nFIRST: E={id,(} T={id,(} X={+,eps}\n```\nSeed $FOLLOW(E) = \\{eof\\}$ since E starts the derivation, with all other sets initially empty.' },
          { label: 'Step 2', text: 'From $E \\to TX$ with empty tail after $X$, copy $FOLLOW(E)$ into $FOLLOW(X)$, and with tail $X$ after $T$, add $FIRST(X) - \\{\\epsilon\\} = \\{+\\}$ to $FOLLOW(T)$. From $X \\to +TX$ the same pattern adds $\\{+\\}$ again and schedules $FOLLOW(X)$ into $FOLLOW(T)$ through the nullable tail.' },
          { label: 'Step 3', text: 'From $T \\to (E)$ copy $FOLLOW(T)$ into $FOLLOW(E)$, which already holds $eof$ plus the new $)$ from the closing parenthesis context. Closure gives $FOLLOW(E) = FOLLOW(X) = \\{eof, )\\}$ and $FOLLOW(T) = \\{+, eof, )\\}$ with no further growth.' }
        ],
        result: 'FOLLOW(E) and FOLLOW(X) are {eof, )} while FOLLOW(T) adds + for the operator that can directly follow a factor.'
      },
      {
        title: 'Trace: tail copy through two levels',
        problem: 'Find FOLLOW(B) and FOLLOW(C) for `S -> A B`, `A -> x | epsilon`, `B -> C y`, `C -> z | epsilon`.',
        steps: [
          { label: 'Step 1', text: '```text\nS -> A B\nB -> C y\nC -> z | epsilon\n```\nSeed $FOLLOW(S) = \\{eof\\}$ and note B sits at the tail of S while C sits before y inside B.' },
          { label: 'Step 2', text: 'From $S \\to AB$ copy $FOLLOW(S)$ into $FOLLOW(B)$, giving $\\{eof\\}$ so far. From $B \\to Cy$ add $FIRST(y) = \\{y\\}$ to $FOLLOW(C)$ by rule one.' },
          { label: 'Step 3', text: 'Since $y$ is non-nullable, no tail copy from $FOLLOW(B)$ reaches $C$, so $FOLLOW(C) = \\{y\\}$ while $FOLLOW(B) = \\{eof\\}$ stays fixed.' }
        ],
        result: 'Tail position moves eof into B, while C sees only the terminal that directly follows it.'
      }
    ],
    keyTakeaways: [
      'FOLLOW holds terminals plus eof that can appear immediately after each nonterminal.',
      'Seed eof at the start symbol and let it travel only through nullable or missing tails.',
      'Rule one copies FIRST of the trailing block minus epsilon at every occurrence.',
      'Empty alternatives are chosen by FOLLOW membership when no body FIRST set matches.'
    ],
    quiz: [
      {
        q: 'Where does the eof marker start in every FOLLOW computation?',
        options: ['In FOLLOW of every nonterminal', 'In FOLLOW(S) for the start symbol S only', 'In FIRST of the start symbol', 'In FOLLOW of terminals'],
        answer: 1,
        explanation: 'Step 1: Recall the virtual terminator sits after the whole input. Step 2: Attach it to the start symbol alone. Step 3: Let propagation carry it elsewhere through tails. Step 4: Reject seeding every nonterminal or any FIRST set.'
      },
      // PYQ-pattern: FOLLOW propagation across nullable tails, the most tested fixed-point step.
      {
        q: 'For `A -> alpha B beta` with beta nullable, which update applies?',
        options: ['Add FOLLOW(A) into FOLLOW(B) in addition to FIRST(beta) minus epsilon', 'Add FIRST(beta) minus epsilon to FOLLOW(B) only', 'Add FOLLOW(B) into FOLLOW(A)', 'Add epsilon into FOLLOW(B)'],
        answer: 0,
        explanation: 'Step 1: Apply rule one for FIRST of beta minus epsilon. Step 2: Test beta for nullability and find it nullable. Step 3: Apply rule two copying FOLLOW of the head. Step 4: Combine both additions for B.'
      },
      {
        q: 'In the expression grammar, why does $+$ belong to FOLLOW(T)?',
        options: ['Because + is in FIRST(T)', 'Because T can vanish', 'Because X follows T and + is in FIRST(X)', 'Because eof is in FIRST(X)'],
        answer: 2,
        explanation: 'Step 1: Locate production E to T X with X after T. Step 2: Compute FIRST of the tail X as {+, epsilon}. Step 3: Copy minus epsilon into FOLLOW of T. Step 4: Conclude plus arrives via the trailing block.'
      },
      {
        q: 'When does lookahead `)` select `X -> epsilon` in the expression grammar?',
        options: ['When ) is in FIRST(X)', 'When ) is in FIRST(+)', 'When ) is in FOLLOW(X) and no nonempty body of X starts with )', 'Always, since epsilon matches anything'],
        answer: 3,
        explanation: 'Step 1: Recall empty bodies are placed by FOLLOW. Step 2: Check that ) lies in FOLLOW of X. Step 3: Verify no nonempty body of X starts with ). Step 4: Select the empty alternative without consuming input.'
      }
    ]
  },

  // ---------------------------------------------------------------- 7.3
  {
    sectionId: 'compcoa-ch7-s3',
    depth: [
      {
        tier: 'masters',
        title: 'Predictive parsing tables: correctness and conflict diagnosis',
        blocks: [
          {
            kind: 'para',
            body: 'An **LL(1)** parser decides each expansion from one lookahead symbol using a table $M[A, a]$ built from **FIRST** and **FOLLOW** sets. For production $A \\to \\alpha$, the table places it on $FIRST(\\alpha)$ and, when $\\alpha$ derives empty, on $FOLLOW(A)$. Graduate parsing theory treats a multiply-defined cell not as a tool failure but as a **grammar defect report**: the grammar is not predictive, and the cell names the productions and lookahead that witness ambiguity or left recursion. Table construction is therefore both a parser generator and a decidable well-formedness check.'
          },
          {
            kind: 'theorem',
            body: 'A grammar is **LL(1)** if and only if its predictive table has no multiply-defined entries. Equivalently, for every pair of distinct productions $A \\to \\alpha$ and $A \\to \\beta$: $FIRST(\\alpha) \\cap FIRST(\\beta) = \\emptyset$, and if $\\alpha$ derives $\\epsilon$ then $FIRST(\\beta) \\cap FOLLOW(A) = \\emptyset$ with the symmetric condition. When the condition holds, the table-driven parser with stack discipline accepts exactly $L(G)$ and performs one expansion per leftmost derivation step.'
          },
          {
            kind: 'proof',
            body: 'If two productions share a table cell on $a$, the parser with lookahead $a$ atop $A$ has two valid continuations, so no deterministic choice exists — the grammar is not predictive. Conversely, disjoint placement gives exactly one candidate per $(A, a)$ pair, so the driver never backtracks. Correctness follows by induction on leftmost derivations: maintain that the stack plus remaining input derive the target string, and each table step replaces $A$ by the unique body consistent with the lookahead; acceptance on empty stack with empty input coincides with derivation completion. Left-recursive grammars necessarily violate the disjointness because $FIRST(A)$ contains the recursion entry, which is why elimination and left factoring are preprocessing obligations rather than optimizations.'
          },
          {
            kind: 'example',
            heading: 'Reading a conflict as a defect report',
            body: 'Grammar $E \\to E + T \\mid T$ places $T$ on $FIRST(T) = \\{id, (\\}$ in row $E$, but left recursion also demands $E \\to E + T$ on the same symbols — a multiply-defined cell on $id$. The cell reports that one lookahead cannot decide how many $E$ layers to expand before seeing $+$. Left factoring or conversion to $E \\to T E^{\\prime}$ with $E^{\\prime} \\to + T E^{\\prime} \\mid \\epsilon$ separates the choice: $E^{\\prime}$ decides on $+$ versus follow symbols, restoring disjointness. Production parsers emit exactly this diagnosis, turning the table from a black box into a grammar-debugging instrument.'
          }
        ]
      }
    ],
    readingTime: 9,
    intro: 'The LL(1) table turns FIRST and FOLLOW sets into a concrete parsing program with one row per nonterminal and one column per terminal. Each production occupies exactly the cells named by its body FIRST set plus FOLLOW for nullable bodies. This section builds tables and reads multiply-defined cells as precise grammar defect reports.',
    objectives: [
      'Place each production into table cells from FIRST and FOLLOW sets',
      'Diagnose multiply-defined entries as FIRST overlap or nullable conflicts',
      'Drive a stack-based predictive parse from the finished table'
    ],
    concepts: [
      {
        term: 'Table placement rule',
        kind: 'method',
        statement: 'For `A -> beta`, write the production into **`M[A, a]`** for each `a` in `FIRST(beta)` minus epsilon, and when `beta` is nullable also into `M[A, b]` for each `b` in `FOLLOW(A)`. The placement covers $cells = FIRST(\\beta) \\cup FOLLOW(A)$ restricted by nullability.',
        detail: 'Every production is placed independently, so a clash surfaces exactly where two placements target the same cell. Empty cells denote syntax faults at parse time.'
      },
      {
        term: 'Multiply-defined cell as defect',
        kind: 'theorem',
        statement: 'A cell with **two productions** proves the grammar is **not LL(1)**, because one lookahead `a` admits two leftmost choices for `A`. The conflict is either $FIRST(\\beta_i) \\cap FIRST(\\beta_j) \\ne \\emptyset$ or a FIRST and FOLLOW overlap on a nullable body.',
        detail: 'The table is the decision procedure: success with all singletons certifies LL(1), while any doubleton pinpoints the offending pair and symbol. No deeper analysis can rescue a clashed cell without changing the grammar.'
      },
      {
        term: 'FIRST and FIRST clash',
        kind: 'definition',
        statement: 'A **FIRST and FIRST clash** puts two nonempty bodies `beta` and `gamma` of `A` into one column `a` with $a \\in FIRST(\\beta) \\cap FIRST(\\gamma)$. The parser cannot choose between `A -> beta` and `A -> gamma` on lookahead `a`, so `M[A, a]` holds both.',
        detail: 'Common left prefixes cause this clash, and left factoring is the targeted repair. The overlap set lists every lookahead needing disambiguation.'
      },
      {
        term: 'FIRST and FOLLOW clash on empty',
        kind: 'definition',
        statement: 'A **FIRST and FOLLOW clash** occurs when a nullable `beta` shares a terminal `a` between `FIRST(beta)` of a nonempty sibling and `FOLLOW(A)`. The cell $M[A, a]$ then holds both the nonempty body and `A -> epsilon`.',
        detail: 'Optional constructs with overlapping terminators trigger this pattern. The fix reshapes the grammar so the optional part has a disjoint lookahead or is folded into surrounding structure.'
      },
      {
        term: 'Stack driver for prediction',
        kind: 'method',
        statement: 'The driver pushes the start symbol `S` plus `eof`, then repeatedly replaces top `A` by the body in **`M[A, lookahead]`** or matches equal terminals. Acceptance is the configuration $stack = [eof]$ with $lookahead = eof$ after all replacements and matches.',
        detail: 'Each step is forced by one table lookup with no backtracking. An empty cell at top A with current lookahead is reported as a syntax fault naming both.'
      }
    ],
    derivations: [
      {
        title: 'LL(1) Table Property: One Cell Holds One Choice',
        statement: 'A grammar is predictive exactly when no table cell holds two productions: $$|M[A, a]| \\leq 1$$',
        prerequisites: [
          '$\\mathrm{FIRST}(\\alpha)$ as terminals starting strings from $\\alpha$ plus $\\epsilon$ when nullable',
          '$\\mathrm{FOLLOW}(A)$ as terminals that can follow $A$ in some sentential form',
          'Table placement of $A \\to \\alpha$ under $\\mathrm{FIRST}(\\alpha)$ and $\\mathrm{FOLLOW}(A)$ when nullable',
        ],
        steps: [
          {
            label: 'Step 1: Place each production by its prediction sets',
            formula: `$$M[A, a] \\ni A \\to \\alpha \\iff a \\in \\mathrm{FIRST}(\\alpha) \\cup (\\mathrm{FOLLOW}(A) \\text{ if nullable})$$`,
            explanation: 'Lookahead $a$ can precede a use of $A \\to \\alpha$ only when $a$ starts the body or when the body vanishes and $a$ follows $A$. Writing the production into exactly those cells encodes every valid prediction once. Correct placement is why table inspection alone decides predictiveness.',
          },
          {
            label: 'Step 2: Read a collision as nondeterminism',
            formula: `$$M[A, a] = \\{A \\to \\alpha, A \\to \\beta\\}$$`,
            explanation: 'Two bodies in one cell mean lookahead $a$ atop $A$ licenses two different leftmost continuations. A one-symbol driver has no further information to break the tie, so determinism fails at that configuration. The grammar is therefore not $LL(1)$, and the cell names the witness pair.',
          },
          {
            label: 'Step 3: State disjointness as the LL(1) condition',
            formula: `$$\\mathrm{FIRST}(\\alpha) \\cap \\mathrm{FIRST}(\\beta) = \\emptyset$$`,
            explanation: 'Distinct bodies of one head must have disjoint first sets so no terminal predicts both. When either body is nullable, its follow contribution must also avoid the sibling first set and the end marker discipline must hold. Pairwise checks across all bodies of every $A$ are sufficient because collisions only occur within one row.',
          },
          {
            label: 'Step 4: Lift uniqueness to whole derivations',
            formula: `$$\\mathrm{stack} = [A, \\dots], \\; \\mathrm{lookahead} = a \\Rightarrow M[A, a]$$`,
            explanation: 'With disjoint cells each driver step replaces $A$ by the unique body consistent with $a$ or matches an equal terminal. Induction on leftmost derivations keeps the invariant that stack plus remaining input derive the target string. Acceptance on empty stack with exhausted input then coincides with derivation completion.',
          },
        ],
        result: 'Disjoint prediction sets give $|M[A, a]| \\leq 1$ everywhere, so the table driver parses deterministically without backtracking; any shared cell proves the grammar needs left factoring, recursion removal, or more lookahead.',
      },
    ],
    examples: [
      {
        title: 'Trace: building a small table',
        problem: 'Build LL(1) rows for `E -> T X`, `X -> + T X | epsilon` with computed FIRST and FOLLOW sets.',
        steps: [
          { label: 'Step 1', text: '```text\nM[E, id]  = E -> T X\nM[E, ( ]  = E -> T X\nM[X, +]  = X -> + T X\nM[X, eof] = X -> epsilon\nM[X, )]  = X -> epsilon\n```\nPlace E by FIRST(T X) giving id and open parenthesis, and place the nonempty X body by its FIRST plus token.' },
          { label: 'Step 2', text: 'Place the empty X body by $FOLLOW(X) = \\{eof, )\\}$ into the two cells shown. No cell receives two bodies, so every defined entry is a singleton.' },
          { label: 'Step 3', text: 'Remaining cells stay empty and denote faults, such as $M[E, +]$ with plus where an operand must start. The stack driver consults exactly these cells during parsing.' }
        ],
        result: 'The fragment table is conflict-free with five filled cells and all other cells empty fault entries.'
      },
      {
        title: 'Trace: reading a conflict cell',
        problem: 'Diagnose the table for `A -> a b | a c` with lookahead `a`.',
        steps: [
          { label: 'Step 1', text: '```text\nFIRST(a b) = {a}\nFIRST(a c) = {a}\nM[A, a] = {A -> a b, A -> a c}\n```\nBoth bodies start with a, so both placements target the same cell.' },
          { label: 'Step 2', text: 'Classify as FIRST and FIRST overlap since $\\{a\\} \\cap \\{a\\} = \\{a\\}$ with neither body nullable. The parser reading $a$ cannot decide whether $b$ or $c$ follows.' },
          { label: 'Step 3', text: 'Prescribe left factoring $A \\to a A1$ with $A1 \\to b | c$ so the shared prefix is matched once and the choice moves to $b$ versus $c$.' }
        ],
        result: 'Cell M[A, a] holds two productions, certifying the grammar is not LL(1) until factored.'
      }
    ],
    keyTakeaways: [
      'Each production fills cells named by its body FIRST set plus FOLLOW when nullable.',
      'A doubleton cell is a proof of non-LL(1) with the two offending bodies named.',
      'FIRST and FIRST clashes come from shared prefixes while FIRST and FOLLOW clashes involve empty.',
      'The stack driver is fully table-driven with empty cells as precise fault reports.'
    ],
    quiz: [
      {
        q: 'For `A -> beta` with beta nullable, which cells receive the production?',
        options: ['Only FIRST(beta) minus epsilon', 'FIRST(beta) minus epsilon plus FOLLOW(A)', 'Only FOLLOW(A)', 'The whole row of A'],
        answer: 1,
        explanation: 'Step 1: Place by FIRST of the body minus epsilon. Step 2: Test beta for nullability and find it nullable. Step 3: Add FOLLOW of the head as empty-case cells. Step 4: Fill exactly the union of both groups.'
      },
      {
        q: 'What does a cell holding two productions prove?',
        options: ['The grammar is not LL(1) on the clashed symbol', 'The table needs a larger lookahead alphabet', 'The parser stack is too small', 'FOLLOW was seeded wrongly'],
        answer: 0,
        explanation: 'Step 1: Recall LL(1) needs at most one choice per cell. Step 2: Observe two bodies share one lookahead. Step 3: Conclude unique prediction fails there. Step 4: Classify the grammar as non-LL(1) without repair.'
      },
      // PYQ-pattern: classifying FIRST-FIRST versus FIRST-FOLLOW conflicts from table cells.
      {
        q: '`A -> a b | a c` clashes on `a`. What kind of conflict is it?',
        options: ['FIRST and FOLLOW on epsilon', 'FOLLOW and FOLLOW overlap', 'FIRST and FIRST overlap on a', 'A stack underflow fault'],
        answer: 2,
        explanation: 'Step 1: Compute FIRST of each body as {a}. Step 2: Intersect to get nonempty {a}. Step 3: Check nullability and find neither body nullable. Step 4: Label it FIRST and FIRST overlap.'
      },
      {
        q: 'How does the predictive driver treat an empty table cell?',
        options: ['It backtracks to an earlier choice', 'It skips the lookahead silently', 'It inserts epsilon and continues', 'It reports a syntax fault naming the top nonterminal and lookahead'],
        answer: 3,
        explanation: 'Step 1: Recall each step is forced by one lookup. Step 2: Find no production for the pair. Step 3: Halt with top of stack and current lookahead. Step 4: Report both in the diagnostic.'
      }
    ]
  },

  // ---------------------------------------------------------------- 7.4
  {
    sectionId: 'compcoa-ch7-s4',
    readingTime: 8,
    intro: 'Some grammars can never be predictive in their raw form because left recursion hides the choice from one-symbol lookahead. Left factoring cures the sibling problem of shared prefixes by postponing the decision. This section gives both rewrites with language-preservation arguments.',
    objectives: [
      'Remove direct and indirect left recursion while preserving the denoted language',
      'Factor shared prefixes so the choice moves past the common part',
      'Order the two rewrites correctly when both defects appear'
    ],
    concepts: [
      {
        term: 'Direct left recursion shape',
        kind: 'definition',
        statement: 'Direct left recursion is the pair **`A -> A alpha | beta`** where `beta` does not start with `A`. A predictive parser loops forever here because choosing `A -> A alpha` never consumes input before reentering `A`.',
        detail: 'The loop condition is $A \\Rightarrow^{+} A\\gamma$ in one step. Any table would need infinite lookahead to decide how many alpha blocks precede the beta base.'
      },
      {
        term: 'Eliminating direct recursion',
        kind: 'method',
        statement: 'Replace the pair by **`A -> beta R`** and **`R -> alpha R | epsilon`** with fresh `R`. The new form derives $\\beta\\alpha^{*}$ right-recursively so each `alpha` block is chosen after its leading terminal is visible.',
        detail: 'Language equality holds because both old and new forms denote $\\beta$ followed by zero or more $\\alpha$ blocks. Associativity of the operator changes, which later phases must note.'
      },
      {
        term: 'Indirect recursion via ordering',
        kind: 'method',
        statement: 'Indirect recursion such as `A -> B x` with `B -> A y` is removed by **ordering nonterminals** and substituting earlier bodies into later ones until direct recursion appears. The substitution $B \\to Ay$ turns the cycle into a direct loop that the previous rule then removes.',
        detail: 'Processing heads in fixed order $A_1 \\ldots A_n$ guarantees each substitution strictly advances the head index. Cycles spanning several nonterminals collapse one edge at a time.'
      },
      {
        term: 'Left factoring of shared prefixes',
        kind: 'method',
        statement: 'Productions **`A -> alpha beta | alpha gamma`** factor into `A -> alpha R` with `R -> beta | gamma`. The shared `alpha` is matched once and the decision moves to `FIRST(beta)` versus `FIRST(gamma)` where the strings first differ.',
        detail: 'The rewrite denotes the same union $\\alpha(\\beta \\cup \\gamma)$ by distributivity of concatenation. Repeated factoring handles nested prefixes until choice symbols are disjoint.'
      },
      {
        term: 'Rewrite order and limits',
        kind: 'insight',
        statement: 'Always remove **recursion before factoring** is misleading: factor first with `A -> alpha R` when shared prefixes hide the recursive shape, then remove recursion, then factor again if fresh prefixes appear. Neither rewrite fixes **ambiguity**, which needs grammar redesign rather than mechanical reshaping.',
        detail: 'The loop is factor, eliminate, refactor to a clash-free table. Ambiguous bodies with two parses of one string stay ambiguous under both rewrites.'
      }
    ],
    examples: [
      {
        title: 'Trace: removing expression recursion',
        problem: 'Rewrite `E -> E + T | T` into predictive form.',
        steps: [
          { label: 'Step 1', text: '```text\nE  -> E + T | T\nalpha = + T\nbeta  = T\n```\nIdentify the recursive alternative starting with E and the base alternative starting with T.' },
          { label: 'Step 2', text: 'Introduce fresh $R$ and emit $E \\to T R$ with $R \\to +TR | \\epsilon$. The language stays $T(+T)^{*}$ but association becomes right-leaning.' },
          { label: 'Step 3', text: 'Check prediction: $FIRST(TR) = FIRST(T)$ selects the nonempty $R$ body on operand starts, while $FOLLOW(R)$ selects empty at end or closing parenthesis.' }
        ],
        result: 'The rewritten pair is LL(1) and derives the same operand and operator sequences as the source.'
      },
      {
        title: 'Trace: factoring a call versus array split',
        problem: 'Factor `S -> a b c | a b d | e` for prediction.',
        steps: [
          { label: 'Step 1', text: '```text\nS -> a b c | a b d | e\nshared = a b\n```\nThe first two bodies share the two-symbol prefix a b while the third starts distinctly.' },
          { label: 'Step 2', text: 'Factor once to $S \\to abR | e$ with $R \\to c | d$. The shared block is matched a single time before any choice.' },
          { label: 'Step 3', text: 'Table cells split cleanly: $M[S,a]$ takes the factored body, $M[S,e]$ takes the singleton, and $R$ chooses on $c$ versus $d$ with no overlap.' }
        ],
        result: 'One factoring step removes the doubleton cell and exposes disjoint choice symbols c and d.'
      }
    ],
    keyTakeaways: [
      'Left recursion makes one-symbol prediction loop without consuming input.',
      'Direct recursion becomes right recursion through a fresh tail nonterminal with an empty base.',
      'Indirect recursion is exposed by ordered substitution and then removed as direct recursion.',
      'Left factoring matches shared prefixes once and moves the choice to the first differing symbols.'
    ],
    quiz: [
      {
        q: 'Why is `E -> E + T | T` not LL(1) in raw form?',
        options: ['Because + is in FOLLOW(E)', 'Because choosing the recursive body reenters E before consuming any input', 'Because T is nullable', 'Because + and T overlap in FIRST'],
        answer: 1,
        explanation: 'Step 1: Inspect the recursive alternative starting with E. Step 2: Note no terminal is consumed before reentry. Step 3: Observe lookahead cannot count recursion depth. Step 4: Conclude prediction loops without progress.'
      },
      {
        q: 'What is the standard rewrite of `A -> A alpha | beta`?',
        options: ['`A -> alpha A | beta`', '`A -> alpha beta | beta alpha`', '`A -> beta | epsilon`', '`A -> beta R`, `R -> alpha R | epsilon`'],
        answer: 3,
        explanation: 'Step 1: Keep the base beta as the new head body. Step 2: Add fresh tail R after beta. Step 3: Loop alpha inside R with empty base. Step 4: Verify the denoted set beta followed by alpha stars.'
      },
      // PYQ-pattern: left factoring of common prefixes to repair FIRST-FIRST clashes.
      {
        q: 'How is `A -> alpha beta | alpha gamma` factored?',
        options: ['`A -> alpha | beta | gamma`', '`A -> beta alpha | gamma alpha`', '`A -> alpha R`, `R -> beta | gamma`', '`A -> alpha beta gamma`'],
        answer: 2,
        explanation: 'Step 1: Extract the shared prefix alpha. Step 2: Match it once in the head body. Step 3: Defer beta versus gamma to fresh R. Step 4: Check the union denotes the same two strings.'
      },
      {
        q: 'Both left recursion and shared prefixes appear. What is the safe order?',
        options: ['Factor, eliminate recursion, then refactor if new prefixes appear', 'Neither rewrite can be applied', 'Eliminate recursion only, factoring is never needed', 'Factor only, recursion removes itself'],
        answer: 0,
        explanation: 'Step 1: Factor visible prefixes that may hide recursion. Step 2: Remove exposed direct and indirect recursion. Step 3: Inspect fresh bodies for new shared prefixes. Step 4: Factor again until table cells are singletons.'
      }
    ]
  }
]
