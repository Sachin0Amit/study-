import type { SectionContent } from '../library'

// ============================================================================
// StudyVerse master study content — Compiler Design, Chapter 6: Lexical Analysis
// Sections 6.1 – 6.4. Full depth: tokens, Thompson construction, subset
// construction traces, DFA minimization preview, recovery.
// ============================================================================

export const compcoaCh06Content: SectionContent[] = [
  // ---------------------------------------------------------------- 6.1
  {
    sectionId: 'compcoa-ch6-s1',
    readingTime: 7,
    intro: 'Lexical analysis is the first phase of compilation and it converts a raw character stream into a structured sequence of tokens for the parser. Each token pairs a symbolic name with the matched text and optional semantic value. This section fixes the vocabulary of tokens and lexemes and states the longest-match rule that makes tokenization deterministic.',
    objectives: [
      'Distinguish token names from lexemes and from attribute values carried with tokens',
      'Apply the longest-match rule and the keyword-priority rule to tokenize short fragments',
      'Describe the lexer and parser interface using lookahead and pushback'
    ],
    concepts: [
      {
        term: 'Token, lexeme, attribute',
        kind: 'definition',
        statement: 'A **token** is a symbolic terminal name such as `IF` or `NUM`, a **lexeme** is the concrete source substring matched such as `if` or `42`, and an **attribute** is the carried semantic value such as `ival = 42`. The parser sees the token stream `IF ID(NAME=count) LE NUM(42)` while the lexeme text is retained only when needed downstream.',
        detail: 'One token name covers infinitely many lexemes: `NUM` matches `7` and `007` and `3.14`. The relation is $token = (name, lexeme, attribute)$ and only the name plus attribute cross into parsing.'
      },
      {
        term: 'Longest match, or maximal munch',
        kind: 'law',
        statement: 'The lexer always takes the **longest valid prefix** of the remaining input, so `<=` is one token `LE` and never `<` followed by `=`. When two patterns match the same longest text, the **earlier-listed rule wins**, which is how `if` becomes keyword `IF` rather than identifier `ID`.',
        detail: 'Maximal munch is greedy but local: at each position it extends the match as far as any pattern allows, then emits one token. The rule removes ambiguity without backtracking across token boundaries.'
      },
      {
        term: 'Keywords versus identifiers',
        kind: 'method',
        statement: 'Keywords are matched by **reserved patterns listed before** the general identifier pattern `ID`, so the string `then` yields `THEN` while `thenx` yields `ID`. The check is textual priority, not a table lookup after matching, and it guarantees that `ifx` is one `ID` rather than `IF` plus `x`.',
        detail: 'Alternately a lexer can match `ID` and then test membership in a keyword table, which is equivalent when the table holds exactly the reserved spellings. Either way the invariant is $lexeme \\in Keywords \\Rightarrow token \\ne ID$.'
      },
      {
        term: 'Regular definitions',
        kind: 'notation',
        statement: 'A **regular definition** names a pattern for reuse, with `letter = [A-Za-z]` and `digit = [0-9]` building `id = letter (letter | digit)*`. The definition layer keeps specifications short and lets one change to `digit` propagate to every rule that uses `NUM`.',
        detail: 'Definitions are pure abbreviations with no matching power beyond regular languages. The expression $id = letter \\cdot (letter \\cup digit)^{*}$ denotes all strings starting with a letter followed by letters or digits.'
      },
      {
        term: 'Attributes and symbol-table hand-off',
        kind: 'insight',
        statement: 'The lexer attaches **attributes** such as numeric value or symbol-table pointer via `yylval`, so `NUM(42)` carries $value = 42$ while `ID` carries $ptr = entry(count)$. Later phases never rescan the lexeme text because the needed value already travels with the token.',
        detail: 'Storing the pointer at lex time avoids repeated hashing during parsing. Literals may also be folded here when the spelling fully determines the value.'
      }
    ],
    examples: [
      {
        title: 'Trace: tokenizing a short statement',
        problem: 'Tokenize the fragment `if count <= 42 then` under longest match with keyword priority.',
        steps: [
          { label: 'Step 1', text: '```lex\nif count <= 42 then\n```\nPosition zero matches `if` exactly. Since `IF` is listed before `ID` and no longer keyword extends the match, emit `IF` and advance past two characters.' },
          { label: 'Step 2', text: 'Skip the blank, then match `count` against `ID` because no keyword equals that spelling. Emit `ID(lexeme = count, ptr = entry(count))` and advance five characters.' },
          { label: 'Step 3', text: 'At `<=` the patterns `<` and `<=` both match prefixes, so longest match selects two characters and emits `LE`. Then `42` matches `NUM` with $value = 42$ and `then` matches `THEN`, giving `IF ID LE NUM THEN`.' }
        ],
        result: 'Token stream is IF ID LE NUM THEN with attributes ptr for count and value 42 for the literal.'
      },
      {
        title: 'Trace: why greed matters',
        problem: 'Decide the tokenization of `a+++b` and of `x<=y` under longest match.',
        steps: [
          { label: 'Step 1', text: '```c\na+++b\nx<=y\n```\nList the candidate operators as `+`, `++`, `<`, `<=`. At each position every candidate is tested and only maximal prefixes survive.' },
          { label: 'Step 2', text: 'In `a+++b`, after `ID(a)` the text `+++` admits `++` of length two and `+` of length one, so longest match emits `++` then `+`, giving `ID(a) ++ + ID(b)` with no alternative split.' },
          { label: 'Step 3', text: 'In `x<=y`, after `ID(x)` the prefix `<=` of length two beats `<` of length one, so the lexer emits `LE` and the full stream is `ID(x) LE ID(y)` rather than `ID(x) LT ASSIGN ID(y)`.' }
        ],
        result: 'Greed plus rule priority makes tokenization unique: a+++b splits as ID ++ + ID and x<=y splits as ID LE ID.'
      }
    ],
    keyTakeaways: [
      'Token is the name, lexeme is the matched text, attribute is the carried value such as a numeric constant or table pointer.',
      'Longest match plus earlier-rule-wins makes scanning deterministic without parser help.',
      'Keywords are reserved patterns placed before ID so exact spellings win and longer names stay identifiers.',
      'The lexer and parser meet at a narrow interface of token names plus attributes with one symbol of pushback.'
    ],
    quiz: [
      // PYQ-pattern: token versus lexeme versus attribute distinction, a recurring single-mark style question.
      {
        q: 'For the input `while x1 <= 10`, which statement correctly uses the three terms?',
        options: ['`WHILE` is a lexeme and `while` is a token', '`NUM` is a token, `10` is its lexeme, and $10$ is its attribute value', 'The lexeme is the numeric value $10$ and the attribute is the string `10`', 'Tokens carry line breaks and comments into the parser'],
        answer: 1,
        explanation: 'Step 1: Recall that the token is the symbolic name NUM. Step 2: Note the matched text 10 is the lexeme. Step 3: Note the converted numeric value is the attribute. Step 4: Select the option that assigns all three correctly.'
      },
      {
        q: 'Under longest match, how is `a<=b` tokenized when `<=` and `<` are both operators?',
        options: ['`ID(a) LE ID(b)`', '`ID(a) LT ASSIGN ID(b)`', '`ID(a) LT ID(=b)`', 'A lexical error on the `=` character'],
        answer: 0,
        explanation: 'Step 1: List matches at the operator position: `<` of length one and `<=` of length two. Step 2: Apply longest match, which prefers length two. Step 3: Emit LE and continue with b as a fresh ID. Step 4: Conclude the three-token stream is correct.'
      },
      {
        q: 'Why does `thenx` lex as one ID rather than THEN followed by ID(x)?',
        options: ['Because the parser merges them later', 'Because THEN is checked only after full ID matching fails', 'Because longest match extends past `then` to the full five letters, and only exact `then` is a keyword', 'Because identifiers cannot contain keyword spellings as prefixes'],
        answer: 2,
        explanation: 'Step 1: Observe the input prefix then is a keyword but thenx is longer. Step 2: Apply longest match over the ID pattern, which consumes all five letters. Step 3: Test the full lexeme against keywords and find no match. Step 4: Emit a single ID token.'
      },
      {
        q: 'Which interface choice keeps the lexer and parser properly separated?',
        options: ['The lexer passes raw characters and the parser groups them', 'The lexer passes parse trees for each line', 'The parser calls the regex engine on every character', 'The lexer passes token names plus compact attributes with pushback of one symbol'],
        answer: 3,
        explanation: 'Step 1: Recall the parser needs terminal names, not characters. Step 2: Recall attributes avoid rescanning lexemes. Step 3: Note one-symbol pushback lets the parser peek without loss. Step 4: Pick the narrow token-plus-attribute interface.'
      }
    ]
  },

  // ---------------------------------------------------------------- 6.2
  {
    sectionId: 'compcoa-ch6-s2',
    readingTime: 9,
    intro: 'Regular expressions become executable scanners through an intermediate automaton, and Thompson construction is the bridge that builds a small NFA for every expression. Each operator gets a fixed shape with fresh start and accept states joined by empty moves. This section shows each shape and how nesting composes without disturbing already built fragments.',
    objectives: [
      'Draw the Thompson NFA fragment for each base symbol, alternation, concatenation, and closure',
      'Count states and empty moves for a composed expression from its operator tree',
      'Explain why fresh start and accept states keep composition correct'
    ],
    concepts: [
      {
        term: 'Thompson base and empty fragments',
        kind: 'method',
        statement: 'Every symbol `a` becomes a **two-state fragment** `start -a-> accept`, and the empty string becomes `start -epsilon-> accept`. Each fragment exposes exactly one entry and one exit, so larger machines connect only through those two points.',
        detail: 'The invariant is $L(fragment)$ equals the denoted language with no stray entry or exit edges. Fresh states per fragment keep names disjoint by construction.'
      },
      {
        term: 'Alternation construction',
        kind: 'method',
        statement: 'For `r|s` the builder adds a **new start** with `epsilon` edges to both substarts and a **new accept** with `epsilon` edges from both subaccepts. The language is the union $L(r) \\cup L(s)$ and no string can mix halves because all paths commit to one branch.',
        detail: 'Cost is two fresh states plus four empty moves per alternation node. Nesting alternations stacks these diamonds without sharing interiors.'
      },
      {
        term: 'Concatenation construction',
        kind: 'method',
        statement: 'For `rs` the builder links the accept of `r` to the start of `s` with an `epsilon` edge and keeps the **start of r** and the **accept of s** as the new pair. The language is the product $L(r) \\cdot L(s)$ with every accepting path crossing the link exactly once.',
        detail: 'Only one fresh empty move is added per concatenation. Associativity of linking means `abc` builds as a chain of two links with no extra states.'
      },
      {
        term: 'Closure construction',
        kind: 'method',
        statement: 'For `r*` the builder wraps the submachine with a **new start and accept**, adding loop-back, skip, and exit `epsilon` edges. The language is $L(r)^{*}$ including $\\epsilon$, and the skip edge is what admits zero repetitions.',
        detail: 'Four empty moves per star node implement the three behaviors of skip, repeat, and finish. The shape for `r+` drops the skip edge so at least one copy is required.'
      },
      {
        term: 'Composition invariant and size bound',
        kind: 'theorem',
        statement: 'Every Thompson fragment has **one start and one accept** with no incoming edges to the start and no outgoing edges from the accept, denoted ` Frag(r) `. An expression with $n$ symbol occurrences yields at most $2n$ states and at most $4n$ empty moves.',
        detail: 'Induction on the operator tree proves the invariant because each construction only rewires the exposed pair. Linear size is why this route scales to large lexer specifications.'
      }
    ],
    examples: [
      {
        title: 'Trace: NFA for a(b|c)*',
        problem: 'Build the Thompson NFA for `a(b|c)*` and count its states.',
        steps: [
          { label: 'Step 1', text: '```text\nFrag(a) = s0 -a-> f0\nFrag(b) = s1 -b-> f1\nFrag(c) = s2 -c-> f2\n```\nStart with three base fragments, two states each, so six states before any operator.' },
          { label: 'Step 2', text: 'Combine `b|c` with a fresh start $s3$ and fresh accept $f3$ plus four empty moves, giving $L(b) \\cup L(c)$. Wrap that diamond with a star fragment adding fresh $s4$ and $f4$ plus loop, skip, and exit edges for $(b|c)^{*}$.' },
          { label: 'Step 3', text: 'Concatenate `a` with the starred block by linking $f0$ to $s4$ with one empty move. Total states are $2 + 2 + 2 + 2 + 2 = 10$ with entry $s0$ and exit $f4$.' }
        ],
        result: 'The composed NFA has ten states and accepts exactly strings starting with a followed by any mix of b and c symbols.'
      },
      {
        title: 'Trace: NFA for (ab|a)* shape check',
        problem: 'Sketch the Thompson NFA for `(ab|a)*` and verify that `aba` is accepted.',
        steps: [
          { label: 'Step 1', text: '```text\nFrag(ab): s0 -a-> m -eps-> s1 -b-> f1\nFrag(a):  s2 -a-> f2\nAlt: new s3,f3 with 4 eps edges\nStar: new s4,f4 with skip/loop/exit\n```\nBuild `ab` by linking, keep lone `a` beside it, join with alternation, then wrap with the star shell.' },
          { label: 'Step 2', text: 'To accept `aba`, take the skip-free entry into the alternation, cross the `ab` branch consuming $a$ then $b$, loop back through the star edge, cross the lone `a` branch consuming $a$, then exit.' },
          { label: 'Step 3', text: 'Empty moves crossed are entry, branch select, branch join, loop, reselect, join, and exit, all $\\epsilon$ steps that consume no input while advancing the state set.' }
        ],
        result: 'An accepting path exists for aba using ab once and a once, confirming closure over the union language.'
      }
    ],
    keyTakeaways: [
      'Thompson construction maps each operator to a fixed epsilon-wired shape with one entry and one exit.',
      'Alternation adds two states and four empty moves, concatenation adds one empty move, closure adds two states and four empty moves.',
      'Fresh boundary states keep fragments disjoint so nesting never creates accidental paths.',
      'Total NFA size is linear in the number of symbol occurrences in the expression.'
    ],
    quiz: [
      // PYQ-pattern: Thompson state counting for alternation and closure, a classic construction question.
      {
        q: 'How many fresh states does Thompson construction add for one alternation `r|s`?',
        options: ['Zero, it reuses submachine boundaries', 'One shared accept state', 'Two: one new start and one new accept', 'Four: entry, fork, join, and exit'],
        answer: 2,
        explanation: 'Step 1: Recall the alternation diamond needs fresh entry and exit points. Step 2: Count one new start with two outgoing empty moves. Step 3: Count one new accept with two incoming empty moves. Step 4: Conclude the total is two fresh states.'
      },
      {
        q: 'Which epsilon edges does the `r*` wrapper add?',
        options: ['Skip from new start to new accept, entry to old start, loop from old accept to old start, and old accept to new accept', 'Only a loop from old accept to old start', 'One edge from new start to old accept', 'No empty moves, only symbol edges'],
        answer: 0,
        explanation: 'Step 1: List the four wrapper edges of the star shell. Step 2: Identify the skip edge admitting zero copies. Step 3: Identify loop plus entry and exit edges. Step 4: Match the option with all four edges.'
      },
      {
        q: 'An expression has $5$ symbol occurrences and no other operators counted. What is the Thompson state upper bound?',
        options: ['5 states', '25 states', '32 states', '10 states'],
        answer: 3,
        explanation: 'Step 1: Recall each symbol contributes two base states. Step 2: Recall operators add at most a linear number of fresh states. Step 3: Apply the $2n$ bound with $n = 5$. Step 4: Obtain ten states as the bound.'
      },
      {
        q: 'Why do Thompson fragments require fresh start and accept states?',
        options: ['To minimize the number of empty moves', 'To prevent accidental sharing that would admit strings outside $L(r)$', 'To make every NFA deterministic', 'To remove the need for an accept state'],
        answer: 1,
        explanation: 'Step 1: Consider reusing interior states across fragments. Step 2: Observe reused states would merge distinct paths. Step 3: Conclude extra strings could slip through the merged wiring. Step 4: Select freshness as the guard of composition.'
      }
    ]
  },

  // ---------------------------------------------------------------- 6.3
  {
    sectionId: 'compcoa-ch6-s3',
    depth: [
      {
        tier: 'masters',
        title: 'Subset construction: correctness and state minimality',
        blocks: [
          {
            kind: 'para',
            body: 'Lexing turns regular expressions into deterministic scanners in two steps: **Thompson construction** builds an epsilon NFA with one start and one accept per operator, then **subset construction** groups NFA states into DFA states via epsilon closure. Each DFA state is the set of NFA positions reachable after the same prefix, so the DFA simulates all NFA paths in parallel without backtracking. Graduate automata theory asks for two guarantees — the DFA accepts exactly the original language, and no smaller DFA suffices — which connect compilation directly to the **Myhill-Nerode** characterization of regularity.'
          },
          {
            kind: 'theorem',
            body: 'Let $N$ be an epsilon NFA and $D$ the DFA from subset construction with $D_0 = closure(N_0)$ and $\\delta_D(S, a) = closure(move(S, a))$. Then $L(D) = L(N)$: the DFA accepts exactly the strings with an accepting NFA path. Moreover, minimizing $D$ by partition refinement yields the unique minimal DFA for the language, with states in bijection with Myhill-Nerode equivalence classes. In the worst case $|D| = 2^{|N|}$, and this exponential blowup is unavoidable for some languages.'
          },
          {
            kind: 'proof',
            body: 'Prove language equality by induction on input length: maintain that after reading $w$, the DFA state equals the set of NFA states reachable on $w$ including epsilon steps. Base $w = \\epsilon$ holds by start-closure definition; inductive step applies $move$ then $closure$, exactly mirroring NFA transitions on the next character $a$. Acceptance follows because the DFA state contains an NFA accept state if and only if some NFA path accepts. Minimality follows because distinguishable prefixes in the Myhill-Nerode sense must land in different DFA states, and partition refinement merges precisely indistinguishable ones. Exponential necessity is witnessed by the language of the $n$-th bit from the end, whose NFA has $O(n)$ states but whose DFA needs $2^{n}$ to remember the last $n$ bits.'
          },
          {
            kind: 'example',
            heading: 'Closures on a tiny NFA',
            body: 'Consider NFA states $\\{0, 1, 2\\}$ with epsilon from $0$ to $1$ and symbol $a$ from $1$ to $2$. Start closure is $\\{0, 1\\}$, so $D_0 = \\{0, 1\\}$. On $a$, $move(\\{0,1\\}, a) = \\{2\\}$ and $closure(\\{2\\}) = \\{2\\}$, giving transition $D_0 \\xrightarrow{a} D_1$ with $D_1 = \\{2\\}$ accepting. No other input moves, so the two-state DFA is already minimal: $\\epsilon$ and $a$ are distinguished by acceptance, occupying distinct Myhill-Nerode classes. The trace exhibits the general pattern — closures computed once per DFA state, moves followed by closures, acceptance lifted from NFA membership.'
          }
        ]
      }
    ],
    readingTime: 9,
    intro: 'NFAs with empty moves cannot drive a scanner directly, so subset construction groups NFA states into deterministic DFA states built from epsilon closures. Each DFA state is the full set of NFA positions reachable after consuming the same prefix. This section traces closures and moves and previews minimization that merges equivalent DFA states.',
    objectives: [
      'Compute epsilon-closure and move sets for small NFAs by hand',
      'Trace subset construction to list reachable DFA states and their transitions',
      'State when two DFA states can be merged during minimization'
    ],
    concepts: [
      {
        term: 'Epsilon-closure',
        kind: 'definition',
        statement: 'The **closure** `eps-closure(S)` is `S` plus every state reachable by only `epsilon` edges, computed as a **fixed point** that keeps adding targets until nothing changes. For a start set $S_0$ the DFA start state is $D_0 = closure(\\{s_0\\})$ before any symbol is read.',
        detail: 'Closure is monotone: adding states can only add more empty successors. Worklist iteration reaches the least fixed point in at most as many rounds as there are NFA states.'
      },
      {
        term: 'Move on a symbol',
        kind: 'definition',
        statement: 'The **move** `move(S, a)` collects every NFA target of an `a`-labeled edge leaving `S`, ignoring `epsilon` edges. A DFA transition is then $\\delta(D, a) = closure(move(D, a))$ so empty reach is always reapplied after consuming `a`.',
        detail: 'Separating move from closure keeps the two concerns distinct: move consumes one symbol while closure completes empty reach. Omitting the outer closure is the standard hand-trace error.'
      },
      {
        term: 'Subset construction loop',
        kind: 'method',
        statement: 'Construction keeps a **worklist of unmarked DFA sets**: pop a set `D`, compute `closure(move(D, a))` for each `a` in the alphabet, add fresh results as new DFA states, and record `D -a-> result`. Only sets reachable from `D_0` are ever created, so dead combinations never appear.',
        detail: 'In the worst case $2^{n}$ subsets exist for $n$ NFA states, but reachable sets on lexer NFAs stay small. Marking guarantees each reachable set is expanded exactly once.'
      },
      {
        term: 'Accepting DFA states',
        kind: 'law',
        statement: 'A DFA state `D` is **accepting** when `D` contains at least one NFA accept state, written `D \\cap F \\ne \\emptyset`. When several NFA accept states share one `D`, the **earliest-listed pattern** decides the token, which reimplements keyword priority inside the DFA.',
        detail: 'The condition is existential over members: one accepting member suffices. Priority resolution needs the retained pattern order from the specification.'
      },
      {
        term: 'Minimization preview by partitioning',
        kind: 'insight',
        statement: 'Two DFA states merge when no string **distinguishes** them, found by starting from the split `{accept, nonaccept}` and repeatedly splitting blocks whose `a`-successors fall in different blocks. The survivors are the **fewest states** for the same language with the same `delta` behavior.',
        detail: 'Partition refinement runs to a fixed point where $p \\equiv q$ means equal acceptance plus equal successors. Lexer tables are minimized after construction to shrink the driver.'
      }
    ],
    derivations: [
      {
        title: 'Subset Construction Preserves the Recognized Language',
        statement: 'The DFA $D$ built from NFA $N$ accepts exactly the same strings: $$L(D) = L(N)$$',
        prerequisites: [
          'Epsilon closure $\\epsilon\\text{-closure}(S)$ of a state set $S$',
          'NFA move $\\mathrm{move}(S, a)$ on symbol $a$',
          'Extended transitions $\\hat{\\delta}$ built by induction on strings',
        ],
        steps: [
          {
            label: 'Step 1: Start the DFA from the full epsilon reach',
            formula: `$$q_{0}^{D} = \\epsilon\\text{-closure}(q_{0}^{N})$$`,
            explanation: 'The NFA can wander along empty moves before reading anything, so its true start configuration is the whole epsilon reach of $q_{0}^{N}$. Making that set the DFA start state bakes all pre-reading nondeterminism into one deterministic node. Any string accepted after a silent preamble is therefore reachable from the correct launch set.',
          },
          {
            label: 'Step 2: Lift each symbol move through closure',
            formula: `$$\\delta_{D}(S, a) = \\epsilon\\text{-closure}(\\mathrm{move}(S, a))$$`,
            explanation: 'From a DFA state $S$, the NFA positions after symbol $a$ are the one-step successors plus everything reachable silently afterward. Defining the DFA transition by move-then-close reproduces exactly that reachable set. Determinism comes free because the right side is a single set for each pair of $S$ and $a$.',
          },
          {
            label: 'Step 3: Match reachable sets on every string by induction',
            formula: `$$\\hat{\\delta}_{D}(q_{0}^{D}, w) = \\epsilon\\text{-closure}(\\hat{\\delta}_{N}(q_{0}^{N}, w))$$`,
            explanation: 'The base case $w = \\epsilon$ is Step 1 by definition, anchoring the induction. The inductive stride appends one symbol and applies Step 2 to both sides, preserving equality through the same move-then-close operation. Hence after any input $w$ the DFA state names precisely the NFA frontier.',
          },
          {
            label: 'Step 4: Accept exactly when the set hides an NFA accept',
            formula: `$$w \\in L(D) \\iff \\hat{\\delta}_{D}(q_{0}^{D}, w) \\cap F_{N} \\neq \\emptyset$$`,
            explanation: 'The DFA declares acceptance when its reached set contains at least one NFA accept state from $F_{N}$. By Step 3 that membership coincides with the NFA possessing an accepting path for $w$. Both machines therefore agree on every string, which is language equality.',
          },
        ],
        result: 'Subset construction yields $L(D) = L(N)$ because each DFA state tracks the exact NFA frontier and acceptance tests that set existentially. Determinism costs at most an exponential state blowup but changes nothing about membership.',
      },
    ],
    examples: [
      {
        title: 'Trace: subsets for a(b|c)*',
        problem: 'Compute the start closure and the first two DFA moves for the NFA of `a(b|c)*`.',
        steps: [
          { label: 'Step 1', text: '```text\nD0 = closure({s0})\nD1 = closure(move(D0, a))\nD2 = closure(move(D1, b))\n```\nD0 covers the entry empty edges before any input. Firing `a` from D0 reaches the fragment accept plus the link into the star shell, then closure adds star entry, branch entries, and the final accept.' },
          { label: 'Step 2', text: 'From $D_1$ on symbol $b$, move reaches the `b` fragment accept, then closure adds the alternation join, the star loop-back, both branch entries, and the star accept, forming $D_2$. The same shape on $c$ yields a symmetric set $D_3$.' },
          { label: 'Step 3', text: 'Both $D_1$ and $D_2$ contain the star accept, so both are accepting with priority from the single pattern. Further moves on $b$ or $c$ from $D_2$ return to the same loop family, closing the reachable table.' }
        ],
        result: 'Reachable DFA has a start state, a post-a loop head, and loop states that self-sustain on b and c symbols.'
      },
      {
        title: 'Trace: closure fixed point on a diamond',
        problem: 'For an alternation diamond with start $s$, branch starts $p$ and $q$, compute $closure(\\{s\\})$.',
        steps: [
          { label: 'Step 1', text: '```text\nround0 = {s}\nround1 = {s, p, q}\nround2 = closure of branch entries\n```\nSeed the worklist with s and follow its two empty edges to p and q in the first expansion round.' },
          { label: 'Step 2', text: 'Expand $p$ and $q$ along their own empty entries into branch interiors, adding whatever wrapper entries the star or concatenation shells contribute. Each newly added state is queued once.' },
          { label: 'Step 3', text: 'Stop when the queue empties with no fresh empty successors, leaving $closure(\\{s\\}) = \\{s, p, q, \\ldots\\}$ as the least fixed point containing all empty reach.' }
        ],
        result: 'The DFA start state bundles the diamond entry with both branch entries before reading any symbol.'
      }
    ],
    keyTakeaways: [
      'Epsilon-closure completes empty reach and move consumes exactly one alphabet symbol before reclosing.',
      'Subset construction creates only reachable DFA states by expanding unmarked sets until the worklist empties.',
      'A DFA state accepts when any member NFA state accepts, with pattern order breaking ties.',
      'Partition refinement previews minimization by merging states no continuation string can distinguish.'
    ],
    quiz: [
      // PYQ-pattern: epsilon-closure plus move trace for subset construction tables.
      {
        q: 'What is $closure(\\{s\\})$ when $s$ has empty edges to $p$ and $q$ and no other empty edges leave $\\{s,p,q\\}$?',
        options: [`$\\{s\\}$`, `$\\{p, q\\}$`, `$\\{s, p, q\\}$`, `$\\emptyset$`],
        answer: 2,
        explanation: 'Step 1: Seed the set with s. Step 2: Add both empty successors p and q. Step 3: Check for further empty edges and find none. Step 4: Return the three-element fixed point.'
      },
      {
        q: 'What is the DFA transition formula from a DFA state $D$ on symbol $a$?',
        options: ['$move(D, a)$ without closure', `$closure(move(D, a))$`, `$closure(D) \\cup move(D, a)$`, `$move(closure(a), D)$`],
        answer: 1,
        explanation: 'Step 1: Recall move consumes one a edge from D. Step 2: Recall empty reach must be closed again after the symbol. Step 3: Apply closure outside move in that order. Step 4: Select the nested formula.'
      },
      {
        q: 'A DFA state $D = \\{p, f_1, q\\}$ contains NFA accept $f_1$ for pattern one and no accept of pattern two. What is D?',
        options: ['Accepting for pattern one', 'Nonaccepting because most members reject', 'Accepting for pattern two by majority', 'A dead state with no transitions'],
        answer: 0,
        explanation: 'Step 1: Apply the existential accept rule over members. Step 2: Find the contained accept f_1. Step 3: Resolve priority to the earliest pattern owning a contained accept. Step 4: Mark D accepting for pattern one.'
      },
      {
        q: 'During minimization, when must two DFA states stay in different blocks?',
        options: ['When they were created in different rounds', 'When they contain different numbers of NFA states', 'When they share any NFA member', 'When one accepts and the other does not, or their a-successors lie in different blocks'],
        answer: 3,
        explanation: 'Step 1: Start from the accept versus nonaccept split. Step 2: Check successor blocks for each alphabet symbol. Step 3: Split whenever successors diverge across blocks. Step 4: Keep only indistinguishable states together.'
      }
    ]
  },

  // ---------------------------------------------------------------- 6.4
  {
    sectionId: 'compcoa-ch6-s4',
    readingTime: 6,
    intro: 'Real input contains mistakes and hostile spellings, so the lexer needs a disciplined response when no pattern matches. Panic mode skips or repairs a bounded prefix and resumes at a clean boundary. This section compares recovery styles and explains why lexical failures stay local instead of collapsing the whole compilation.',
    objectives: [
      'Describe panic-mode recovery with warning plus skip to a synchronizing character',
      'Compare deletion, insertion, and token-substitution repairs for a bad character',
      'Justify why most lexical faults need no parser involvement'
    ],
    concepts: [
      {
        term: 'Lexical error condition',
        kind: 'definition',
        statement: 'A **lexical error** occurs when the current prefix matches **no pattern** and the DFA sits in a **dead state** with no transition on the lookahead character `ch`. The scanner reports the position of `ch` and must choose a repair before the parser is ever consulted.',
        detail: 'The dead state has $\\delta(D, ch)$ undefined for the offending character. Stray control symbols and malformed literals are the usual triggers.'
      },
      {
        term: 'Panic mode with synchronization',
        kind: 'method',
        statement: 'Panic mode emits a **diagnostic**, discards input up to a **synchronizing set** such as whitespace or `;`, and restarts matching there. The rule `skip until $ch \\in Sync$` bounds the damage to one local window.',
        detail: 'Synchronizing characters are chosen because they cannot appear inside tokens of interest. The parser never sees the skipped window as tokens.'
      },
      {
        term: 'Repair by delete, insert, or substitute',
        kind: 'method',
        statement: 'A repair treats the fault as a **single-character edit**: delete the offending `ch`, insert a missing quote or digit, or substitute a legal spelling such as `0` for `O` in `0O7`. The cheapest edit with distance $d = 1$ is tried first and reported as a fix hypothesis.',
        detail: 'Edit choice uses the expected token class from surrounding context. Repairs rewrite the character stream, not the DFA tables.'
      },
      {
        term: 'Error tokens for the parser',
        kind: 'notation',
        statement: 'Some drivers emit an explicit **error token** `ERROR(lexeme)` so the parser can count faults and stay synchronized at phrase level. The token carries the skipped text in `lexeme` and never enters any grammar production as a valid terminal.',
        detail: 'Counting error tokens gives a fault budget: after $k$ such tokens the driver may stop to avoid cascading diagnostics. Valid parses never derive the error token.'
      },
      {
        term: 'Why lexing rarely fails globally',
        kind: 'insight',
        statement: 'Lexing recovers locally because **token boundaries** reset the matcher, so one bad character cannot corrupt already emitted `tokens`. The parser resumes with a clean lookahead and only the enclosing phrase may need a second repair.',
        detail: 'Isolation follows from maximal munch restarting at each boundary: state after the sync point depends only on fresh input, not on the discarded window.'
      }
    ],
    examples: [
      {
        title: 'Trace: stray character in an identifier run',
        problem: 'Recover from the input `count@ = 5` when `@` belongs to no pattern.',
        steps: [
          { label: 'Step 1', text: '```c\ncount@ = 5\n     ^ dead on @\n```\nMatch `count` as ID, then find no transition on `@` from the ID continuation set, so halt with lookahead `@`.' },
          { label: 'Step 2', text: 'Emit diagnostic at the caret position and apply single-delete repair by dropping `@`, since deletion yields the legal continuation `count = 5` with distance $d = 1$.' },
          { label: 'Step 3', text: 'Resume matching at the blank before `=` and emit `ASSIGN NUM(5)`, leaving token history as `ID(count) ASSIGN NUM(5)` with one counted fault.' }
        ],
        result: 'One deletion plus a warning recovers the statement with no parser repair needed.'
      },
      {
        title: 'Trace: unterminated string',
        problem: 'Recover from `"abc` followed by a newline when strings cannot span lines.',
        steps: [
          { label: 'Step 1', text: '```c\nx = "abc\n```\nThe string DFA consumes `"abc` and then blocks at newline with no closing quote transition, marking the lexeme incomplete.' },
          { label: 'Step 2', text: 'Panic mode inserts the missing quote before the newline, forming `"abc"` with $d = 1$, and emits a diagnostic that a delimiter was supplied.' },
          { label: 'Step 3', text: 'Restart after the newline so the next line lexes normally, giving `ID(x) ASSIGN STR(abc)` plus one repair note.' }
        ],
        result: 'Insertion of one delimiter closes the literal and confines the fault to a single line.'
      }
    ],
    keyTakeaways: [
      'A lexical fault is a dead DFA transition on the lookahead character before any parser action.',
      'Panic mode warns and skips to a synchronizing character to bound the damaged window.',
      'Single-character delete, insert, or substitute repairs cover most stray and malformed spellings.',
      'Token boundaries isolate faults so recovery stays local and parsing resumes cleanly.'
    ],
    quiz: [
      {
        q: 'When does the lexer declare a lexical fault?',
        options: ['When no pattern matches and the DFA has no transition on the lookahead', 'When the parser rejects the token stream', 'When two patterns match the same text', 'When a comment is too long'],
        answer: 0,
        explanation: 'Step 1: Recall matching happens before parsing. Step 2: Check the dead-state condition on the lookahead. Step 3: Distinguish ambiguity, which priority resolves, from absence of any match. Step 4: Select the dead-transition condition.'
      },
      // PYQ-pattern: panic-mode recovery with synchronizing characters, often tested as error-handling concept.
      {
        q: 'What does panic mode do after reporting a bad character?',
        options: ['It halts compilation immediately', 'It backtracks across already emitted tokens', 'It discards input until a synchronizing character and restarts matching', 'It asks the parser to insert a token'],
        answer: 2,
        explanation: 'Step 1: Recall the goal is bounded local damage. Step 2: Skip characters without emitting tokens. Step 3: Stop at whitespace or a delimiter in the sync set. Step 4: Restart the matcher from that clean boundary.'
      },
      {
        q: 'The input `0O7` uses letter O where digit zero was intended. Which single-edit repair fits?',
        options: ['Delete the whole literal', 'Substitute `0` for `O` to form `007`', 'Insert a semicolon after it', 'Split into two tokens `0` and `O7`'],
        answer: 1,
        explanation: 'Step 1: Align the faulty spelling against the NUM pattern. Step 2: Find distance one substitution of zero for letter O. Step 3: Verify 007 matches NUM cleanly. Step 4: Report the substitution as the minimal repair.'
      },
      {
        q: 'Why does an error token never appear in a valid parse?',
        options: ['Because the lexer deletes it silently', 'Because the parser cannot read tokens', 'Because error tokens carry no lexeme', 'Because no grammar production derives ERROR as a terminal'],
        answer: 3,
        explanation: 'Step 1: Recall error tokens exist for bookkeeping and sync. Step 2: Check grammar productions, which list only real terminals. Step 3: Note ERROR is outside that terminal set. Step 4: Conclude valid derivations cannot contain it.'
      }
    ]
  }
]
