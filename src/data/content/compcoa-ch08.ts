import type { SectionContent } from '../library'

// ============================================================================
// StudyVerse master study content — Compiler Design, Chapter 8: Bottom-Up LR
// Sections 8.1 – 8.4. Full depth: handles, LR(0) items, SLR tables, CLR and
// LALR lookaheads, shift-reduce and reduce-reduce diagnosis with fixes.
// ============================================================================

export const compcoaCh08Content: SectionContent[] = [
  // ---------------------------------------------------------------- 8.1
  {
    sectionId: 'compcoa-ch8-s1',
    readingTime: 8,
    intro: 'Bottom-up parsing builds the tree from leaves toward the start symbol by repeatedly locating a handle on the stack and reducing it. Shift moves push input symbols while reduce moves replace a complete right-hand side by its head. This section defines handles and viable prefixes and walks a full shift-reduce trace.',
    objectives: [
      'Define handles, phrases, and viable prefixes on the parser stack',
      'Distinguish shift steps from reduce steps during a rightmost derivation in reverse',
      'Trace a complete shift-reduce run with stack, input, and action at each move'
    ],
    concepts: [
      {
        term: 'Handle of a sentential form',
        kind: 'definition',
        statement: 'A **handle** is the pair `production plus position` identifying which substring to reduce next in a rightmost derivation run backward. For $S \\Rightarrow^{*} \\alpha A w \\Rightarrow \\alpha\\beta w$ the handle is `A -> beta` at the boundary between $\\alpha$ and $w$.',
        detail: 'Handles always sit at the stack top region plus zero lookahead symbols. Finding the handle is the whole parsing problem in miniature.'
      },
      {
        term: 'Shift versus reduce moves',
        kind: 'definition',
        statement: 'A **shift** pushes the lookahead terminal `a` onto the stack and advances input, while a **reduce** by `A -> beta` pops `|beta|` symbols and pushes `A`. Shifts grow the viable prefix and reduces shrink it toward the start symbol $S$.',
        detail: 'The driver chooses by state plus lookahead: shift on an outgoing terminal edge, reduce on a completed item with matching lookahead. Wrong choices surface as conflicts in later sections.'
      },
      {
        term: 'Viable prefixes',
        kind: 'law',
        statement: 'A **viable prefix** is any prefix of a right-sentential form that ends at or before the handle end, so the stack always holds such a string `gamma`. The invariant is $\\gamma$ can extend to a full handle but never passes beyond it.',
        detail: 'Pushing one symbol past the handle end breaks viability and guarantees a future fault. LR automata accept exactly the viable prefixes as their language.'
      },
      {
        term: 'Stack and input trace discipline',
        kind: 'method',
        statement: 'Each trace row lists **stack**, remaining **input**, and **action** such as `shift id` or `reduce T -> id`. The stack shows `state and symbol` pairs in real drivers but symbol-only traces suffice for hand work with `eof` marking the input end.',
        detail: 'A correct trace ends as $stack = [eof, S]$ with $input = eof$ followed by accept. Any deviation in symbol rows mirrors a deviation in state rows.'
      },
      {
        term: 'Why rightmost order matters',
        kind: 'insight',
        statement: 'Reducing the **rightmost** handle first keeps the stack prefix viable and matches LR automaton structure. Leftmost reduction order would demand prediction rather than recognition and belongs to `LL` drivers, not `LR` ones.',
        detail: 'The reverse-rightmost invariant is $input$ always holds the remaining suffix after the handle. This locality is what lets finite states encode all parsing contexts.'
      }
    ],
    examples: [
      {
        title: 'Trace: shifting and reducing id + id',
        problem: 'Parse `id + id` with `E -> E + T | T`, `T -> id`.',
        steps: [
          { label: 'Step 1', text: '```text\nstack=[eof]      input=id + id eof   action=shift id\nstack=[eof id]   input=+ id eof     action=reduce T -> id\nstack=[eof T]    input=+ id eof     action=reduce E -> T\n```\nShift the first operand, reduce it to T, then to E, keeping the stack viable at each row.' },
          { label: 'Step 2', text: 'Shift $+$ and the second $id$, reduce $id$ to $T$, giving $stack = [eof, E, +, T]$ with $input = eof$. The substring $E+T$ now spans the stack above the floor marker.' },
          { label: 'Step 3', text: 'Reduce $E \\to E+T$ to leave $[eof, E]$ on $eof$ input and accept. Every reduction consumed a handle that ended at the stack top.' }
        ],
        result: 'The run uses three shifts and four reductions ending in accept with E covering the full input.'
      },
      {
        title: 'Trace: spotting the handle at each stage',
        problem: 'Mark handles while parsing `( id )` with `S -> ( S ) | id`.',
        steps: [
          { label: 'Step 1', text: '```text\nstack=[eof (]       handle none, must shift\nstack=[eof ( id]     handle S -> id at top\nstack=[eof ( S]      handle none, must shift )\n```\nOnly complete right-hand sides at the stack top qualify, so open brackets alone never reduce.' },
          { label: 'Step 2', text: 'Reduce $S \\to id$ inside the brackets, then shift $)$, forming the stack $[eof, (, S,) ]$ whose top three symbols match the long body.' },
          { label: 'Step 3', text: 'Reduce $S \\to (S)$ to $[eof, S]$ on $eof$ and accept. Each handle ended exactly at the stack top when reduced.' }
        ],
        result: 'Handles were S -> id and then S -> ( S ), each reduced as soon as it became complete on the stack.'
      }
    ],
    keyTakeaways: [
      'A handle names the next production and position to reduce in reverse-rightmost order.',
      'Shift pushes input while reduce pops a body and pushes its head.',
      'Stacks always hold viable prefixes that stop at or before the handle end.',
      'Hand traces with stack, input, and action mirror real LR state drivers.'
    ],
    quiz: [
      // PYQ-pattern: handle identification during shift-reduce traces.
      {
        q: 'In $S \\Rightarrow^{*} \\alpha A w \\Rightarrow \\alpha\\beta w$, what is the handle?',
        options: ['The whole sentential form', 'The start symbol S', 'Production A -> beta at the shown position', 'The lookahead symbol after w'],
        answer: 2,
        explanation: 'Step 1: Locate the last derivation step expanding A to beta. Step 2: Mark beta at its occurrence boundary. Step 3: Pair the production with that position. Step 4: Identify A to beta as the handle.'
      },
      {
        q: 'Which stack content is a viable prefix?',
        options: ['A prefix ending exactly where a handle could end or earlier', 'Any string containing the whole input', 'A stack that already passed the handle end', 'Only the empty stack'],
        answer: 0,
        explanation: 'Step 1: Recall viable means extendable to a handle. Step 2: Allow prefixes ending before the handle end. Step 3: Forbid stacks pushed past the handle end. Step 4: Select the prefix condition.'
      },
      {
        q: 'A reduce by `A -> beta` with $|beta| = 3$ does what?',
        options: ['Pushes three terminals', 'Pops three stack symbols and pushes A', 'Deletes the input suffix', 'Shifts A onto the input'],
        answer: 3,
        explanation: 'Step 1: Measure the body length as three. Step 2: Pop exactly three stack symbols. Step 3: Push the head A. Step 4: Leave input position unchanged for the next decision.'
      },
      {
        q: 'Why do LR drivers reduce rightmost handles?',
        options: ['Because leftmost handles need unbounded lookahead tables', 'Because rightmost order keeps the stack a viable prefix matched by finite states', 'Because shifts are impossible otherwise', 'Because eof appears on the left'],
        answer: 1,
        explanation: 'Step 1: Recall the stack must stay viable. Step 2: Note rightmost reduction preserves that invariant. Step 3: Link viable prefixes to automaton states. Step 4: Reserve leftmost order for predictive drivers.'
      }
    ]
  },

  // ---------------------------------------------------------------- 8.2
  {
    sectionId: 'compcoa-ch8-s2',
    readingTime: 10,
    intro: 'SLR parsing adds just enough lookahead to LR(0) items by consulting FOLLOW sets at reduction time. Items track the dot position while closure and goto build the automaton of viable prefixes. This section constructs item sets by hand and fills action and goto tables with shift and reduce moves.',
    objectives: [
      'Form LR(0) items with dot positions and compute closure and goto sets',
      'Build the canonical item automaton for a small grammar',
      'Fill SLR action and goto entries and flag conflicts'
    ],
    concepts: [
      {
        term: 'LR(0) item with a dot',
        kind: 'notation',
        statement: 'An **item** `A -> alpha . beta` records that `alpha` is already on the stack and `beta` is expected next. The dot at the end in `A -> beta .` marks a **complete item** ready to reduce, while $A \\to \\alpha . X\\gamma$ with symbol $X$ after the dot demands shift or goto on $X$.',
        detail: 'Augment with $S1 \\to S$ so one start item seeds closure. Items with the dot before a nonterminal trigger expansion, while items with the dot before a terminal trigger shifts.'
      },
      {
        term: 'Closure of an item set',
        kind: 'method',
        statement: 'Closure adds **`B -> . gamma`** for every `B` appearing after a dot in the set, repeating until no fresh items appear. The rule is $A \\to \\alpha . B\\gamma$ adds all $B$ productions with the dot at the left, written `closure(I)`.',
        detail: 'Closure stays within one automaton state and may add many items for nested nonterminals. The fixed point closes under every dotted nonterminal present.'
      },
      {
        term: 'Goto on a grammar symbol',
        kind: 'method',
        statement: 'Goto moves the dot over **`X`** in all items containing `. X` and then closes the result, giving $goto(I, X) = closure(\\{A \\to \\alpha X . \\beta\\})$. Terminal gotos become **shift actions** and nonterminal gotos fill the `goto` table for `I -X-> J`.',
        detail: 'Each distinct goto result is one automaton state. Missing gotos correspond to syntax faults from that state on that symbol.'
      },
      {
        term: 'SLR reduce lookahead from FOLLOW',
        kind: 'law',
        statement: 'A complete item `A -> beta .` in state `I` generates **reduce on FOLLOW(A)**, written `action[I, a] = reduce A -> beta` for $a \\in FOLLOW(A)$. Shifts keep priority on their own symbols, and $S1 \\to S .$ on `eof` gives **accept** instead of reduce.',
        detail: 'FOLLOW filtering is the only SLR addition over LR(0), which would reduce on every terminal. Over-wide FOLLOW sets are exactly where SLR spurious conflicts come from.'
      },
      {
        term: 'Action and goto table layout',
        kind: 'notation',
        statement: 'Rows are **states**, action columns are **terminals plus eof**, and goto columns are **nonterminals**. Cells hold `shift s`, `reduce by rule`, `accept`, or `goto j` for `goto[I, A] = J`, with blanks marking faults.',
        detail: 'A table with every action cell holding at most one entry is conflict-free. Double entries are diagnosed in the next section with lookahead or precedence fixes.'
      }
    ],
    examples: [
      {
        title: 'Trace: closure and goto for an augmented grammar',
        problem: 'Start from `S1 -> . S`, `S -> ( S ) | id` and compute closure plus goto on `(`.',
        steps: [
          { label: 'Step 1', text: '```text\nI0 = closure({S1 -> . S})\n   = {S1 -> . S, S -> . ( S ), S -> . id}\n goto(I0, () = closure({S -> ( . S )})\n```\nThe dot before S pulls in both S bodies, completing the start state with three items.' },
          { label: 'Step 2', text: 'Move over $($ to $\\{S \\to (.S)\\}$ and close by adding $S \\to .(S)$ and $S \\to .id$ again for the nested $S$ after the dot. This yields the successor state with three items.' },
          { label: 'Step 3', text: 'Record $goto(I_0, () = I_1$ as shift on $($ in the action table and $goto(I_0, S)$ as the accept-path transition. Repeating for $S$, $)$, and $id$ builds the full automaton.' }
        ],
        result: 'Start state holds three items and the open-parenthesis successor mirrors that shape one level deeper.'
      },
      {
        title: 'Trace: placing SLRreductions',
        problem: 'Place reductions for a state holding `A -> c .` with FOLLOW(A) equal to {d, eof}.',
        steps: [
          { label: 'Step 1', text: '```text\nstate I: {A -> c ., S -> a . A d}\naction[I, d]   = reduce A -> c\naction[I, eof] = reduce A -> c\n```\nThe complete item proposes reduction while the sibling item proposes shift on other symbols.' },
          { label: 'Step 2', text: 'Write $reduce A \\to c$ into columns $d$ and $eof$ only, leaving columns such as $c$ empty when they belong to neither FOLLOW nor shift successors.' },
          { label: 'Step 3', text: 'Keep shift entries from dotted terminals in the same state untouched, since shifts and reduces on disjoint columns coexist without conflict.' }
        ],
        result: 'Two reduce cells are filled from FOLLOW(A) with all other columns decided by shifts or left blank.'
      }
    ],
    keyTakeaways: [
      'Items encode stack progress with a dot separating matched prefix from expected suffix.',
      'Closure expands dotted nonterminals and goto advances the dot over one symbol plus closure.',
      'SLR reduces a completed body only on FOLLOW of its head, unlike raw LR(0).',
      'Action holds shifts and reductions while goto holds nonterminal transitions between states.'
    ],
    quiz: [
      {
        q: 'What does item `A -> alpha . beta` mean?',
        options: ['Alpha is on the stack and beta is expected next', 'The parser must reduce A immediately', 'Beta was already reduced to alpha', 'A is a terminal symbol'],
        answer: 0,
        explanation: 'Step 1: Split the body at the dot. Step 2: Treat the left part as matched stack content. Step 3: Treat the right part as future input. Step 4: Defer reduction until the dot reaches the end.'
      },
      // PYQ-pattern: closure and goto hand computation for LR(0) item sets.
      {
        q: 'Closure of a set holding `A -> alpha . B gamma` must add what?',
        options: ['All terminals in FIRST(gamma)', 'All B productions with the dot at the left', 'The goto of the whole set', 'FOLLOW(B) as fresh items'],
        answer: 1,
        explanation: 'Step 1: Spot the dotted nonterminal B. Step 2: Fetch every B production. Step 3: Place the dot at the left of each body. Step 4: Repeat for newly dotted nonterminals.'
      },
      {
        q: 'SLR places `reduce A -> beta` on which columns?',
        options: ['Every terminal column', 'Only eof', 'Exactly FOLLOW(A)', 'FIRST(beta) columns'],
        answer: 2,
        explanation: 'Step 1: Recall SLR filters reductions by lookahead. Step 2: Fetch FOLLOW of the head A. Step 3: Fill one reduce entry per member. Step 4: Leave nonmember columns for shifts or blanks.'
      },
      {
        q: 'What fills a goto-table cell goto[I, A]?',
        options: ['A shift action on terminal A', 'The FOLLOW set of A', 'A reduce by A', 'The successor state J for I -A-> J, or blank when absent'],
        answer: 3,
        explanation: 'Step 1: Recall goto columns are nonterminals. Step 2: Look up the symbol transition from I. Step 3: Record target J when the edge exists. Step 4: Leave the cell blank otherwise.'
      }
    ]
  },

  // ---------------------------------------------------------------- 8.3
  {
    sectionId: 'compcoa-ch8-s3',
    depth: [
      {
        tier: 'masters',
        title: 'LR lookahead ladders: SLR, LALR and canonical CLR',
        blocks: [
          {
            kind: 'para',
            body: '**LR parsing** encodes viable prefixes as automaton states and uses lookahead to choose shift versus reduce. **SLR** reuses LR(0) cores with reductions on $FOLLOW$, **canonical CLR** splits cores by exact lookahead propagated through $FIRST$, and **LALR** merges CLR states with identical cores, unioning lookaheads. Graduate theory orders them by precision and cost: more precise lookaheads accept strictly more grammars but build larger tables, while merging recovers table size at the risk of reintroducing conflicts. The three methods are therefore points on a deliberate expressiveness-versus-size tradeoff, not competing implementations.'
          },
          {
            kind: 'theorem',
            body: 'Every **SLR grammar is LALR** and every **LALR grammar is CLR**, with strict inclusions witnessed by grammars whose FOLLOW sets over-approximate true contexts. State counts satisfy $|LALR| = |SLR| = |LR(0)| \\leq |CLR|$, since LALR merging restores core count while CLR splits cores by lookahead. Merging is **safe** exactly when no merged state unions two reductions onto one lookahead or creates a fresh shift-reduce clash; otherwise LALR reports a conflict where CLR succeeds. Practical programming grammars are almost always LALR, which is why merged tables dominate generators.'
          },
          {
            kind: 'proof',
            body: 'Inclusion follows because each method refines the last: SLR lookaheads are global $FOLLOW(A)$, LALR lookaheads are unions of exact CLR lookaheads over merged cores, CLR lookaheads are exact per-item contexts from $FIRST(\\beta a)$ propagation. Any SLR-conflict-free table stays conflict-free under refinement, since refinement only shrinks reduction columns, so SLR success implies LALR and CLR success; the converse fails on grammars where $FOLLOW$ mixes contexts from different call sites. State-count equality holds because LALR merging by definition reunites exactly the CLR splits of each LR(0) core. Unsafety arises precisely when two CLR states carry reductions $A \\to \\alpha$ and $B \\to \\beta$ on disjoint lookaheads $a$ and $b$ that merge into $\\{a, b\\}$ alongside a sibling reduction on $b$ — the union collides where the splits did not. Checking merged states for such unions decides safety.'
          },
          {
            kind: 'example',
            heading: 'Merging that stays safe versus one that collides',
            body: 'Core $\\{C \\to d \\cdot\\}$ with CLR states carrying $\\{a\\}$ and $\\{b\\}$ merges to $\\{a, b\\}$: with no sibling reduction, the merged state reduces $C \\to d$ on both symbols without clash — safe compression from two states to one. Add sibling $D \\to e \\cdot$ valid on $\\{b\\}$ in the merged core: CLR kept $C$ on $\\{a\\}$ apart from $D$ on $\\{b\\}$, but LALR unions to two reductions on $b$ — a fresh reduce-reduce conflict. Generators report the LALR conflict with the core and lookaheads involved, directing the user to CLR tables or grammar restructuring. The pair is the minimal demonstration that table size and grammar coverage trade strictly.'
          }
        ]
      }
    ],
    readingTime: 10,
    intro: 'CLR carries exact lookahead on each item while LALR merges states that share item cores to shrink tables. The extra precision removes spurious SLR conflicts but merging can reintroduce collisions. This section compares the three table strengths and shows when merging stays safe.',
    objectives: [
      'Extend LR(0) items with lookahead to form LR(1) items and closures',
      'Compare SLR, LALR, and CLR power with state-count trade-offs',
      'Decide when core merging preserves a conflict-free table'
    ],
    concepts: [
      {
        term: 'LR(1) item with lookahead',
        kind: 'notation',
        statement: 'An **LR(1) item** `[A -> alpha . beta, a]` pairs a dotted body with one lookahead terminal `a` valid after the reduction. The closure rule propagates $FIRST(\\beta a)$ as lookaheads into fresh `B` items rather than copying whole FOLLOW sets.',
        detail: 'Lookahead $a = eof$ seeds the augmented start item. Distinct lookaheads on the same core item become separate CLR states before any merging.'
      },
      {
        term: 'CLR closure with FIRST of suffix',
        kind: 'method',
        statement: 'From `[A -> alpha . B beta, a]` closure adds **`[B -> . gamma, b]`** for each `b` in `FIRST(beta a)`. The equation is $lookaheads = FIRST(\\beta a)$ computed per occurrence, so context-specific symbols replace the global $FOLLOW(B)$.',
        detail: 'When beta is empty the propagated set is just {a}. Longer beta blocks filter the incoming lookahead through their FIRST sets.'
      },
      {
        term: 'LALR merging by cores',
        kind: 'method',
        statement: 'LALR merges all states sharing the same **core** of LR(0) items and unions their lookahead sets, written `merge(I, J)` when `core(I) = core(J)`. Goto targets are merged correspondingly so the automaton has the **LR(0) state count** with refined lookaheads.',
        detail: 'Merging unions reductions: a reduce valid on {a} in one state and on {b} in the other becomes valid on {a, b}. The union can create a fresh reduce and reduce clash absent from CLR.'
      },
      {
        term: 'Power and size ladder',
        kind: 'theorem',
        statement: 'Every **SLR grammar is LALR** and every **LALR grammar is CLR**, while state counts satisfy `states(LR0) = states(SLR) = states(LALR) <= states(CLR)`. More lookahead precision accepts a larger grammar class at the cost of larger or equal tables.',
        detail: 'Strictness is witnessed by grammars needing contextual lookahead beyond FOLLOW. Table size follows cores: CLR splits cores by lookahead while LALR reunites them.'
      },
      {
        term: 'When merging is safe',
        kind: 'insight',
        statement: 'Merging stays safe when **no merged state** gains two reductions on one lookahead `a` or a fresh shift and reduce clash on `a`. The check is $reductions(I) \\cap reductions(J) = \\emptyset$ per symbol plus shift compatibility, verified after unioning.',
        detail: 'Practical builders merge then recheck conflicts rather than proving safety in advance. Grammars of programming constructs almost always survive merging with no new clash.'
      }
    ],
    examples: [
      {
        title: 'Trace: lookahead propagation through one closure',
        problem: 'Close `{[S -> . A a, eof]}` with `A -> x | y` and compute lookaheads on A items.',
        steps: [
          { label: 'Step 1', text: '```text\nseed: [S -> . A a, eof]\nbeta = a, incoming = eof\nadds: [A -> . x, a], [A -> . y, a]\n```\nThe dotted A pulls in both A bodies with lookaheads from the suffix after A.' },
          { label: 'Step 2', text: 'Compute $FIRST(a \\cdot eof) = \\{a\\}$ since $a$ is a terminal that blocks the incoming $eof$. Both fresh items therefore carry $\\{a\\}$ only.' },
          { label: 'Step 3', text: 'Reductions $A \\to x$ and $A \\to y$ will later fire only on $a$, which is narrower than $FOLLOW(A)$ in grammars where $A$ appears under several suffixes.' }
        ],
        result: 'Contextual closure gives lookahead {a} on both A items instead of the whole FOLLOW set.'
      },
      {
        title: 'Trace: merging two cores',
        problem: 'Merge states with shared core `{C -> d .}` carrying {a} and {b} respectively.',
        steps: [
          { label: 'Step 1', text: '```text\nI: core {C -> d .}  looks {a}\nJ: core {C -> d .}  looks {b}\nM: core {C -> d .}  looks {a, b}\n```\nCores match exactly, so LALR unites them into one state with unioned lookaheads.' },
          { label: 'Step 2', text: 'Merged reductions fire on $\\{a, b\\}$ jointly. When no other item in $M$ reduces on $a$ or $b$, the merge introduces no clash.' },
          { label: 'Step 3', text: 'When a sibling item reduces on $\\{b\\}$ in $M$, the union creates a reduce and reduce clash on $b$ that CLR kept split across $I$ and $J$.' }
        ],
        result: 'Merging is safe in the two-item case but unsafe once a second reduction shares the united symbol.'
      }
    ],
    keyTakeaways: [
      'LR(1) items attach exact lookaheads propagated through FIRST of the suffix plus incoming symbol.',
      'CLR keeps split states per lookahead while LALR merges shared cores and unions lookaheads.',
      'Power grows SLR to LALR to CLR while state count grows only at the CLR step.',
      'Merged states must be rechecked for fresh reduce clashes on united lookaheads.'
    ],
    quiz: [
      {
        q: 'Closure of `[A -> alpha . B beta, a]` adds B items with which lookaheads?',
        options: ['FOLLOW(B)', 'FIRST(beta a)', 'Only {a}', 'Only eof'],
        answer: 1,
        explanation: 'Step 1: Isolate the suffix beta after B. Step 2: Append incoming lookahead a to beta. Step 3: Take FIRST of that suffix string. Step 4: Attach each member to fresh B items.'
      },
      // PYQ-pattern: SLR versus LALR versus CLR power and state-count ordering.
      {
        q: 'Which inclusion and size relation holds?',
        options: ['CLR grammars are a subset of SLR with fewer states', 'SLR has more states than CLR', 'LALR and CLR accept the same grammars', 'SLR subset LALR subset CLR with LALR state count equal to SLR'],
        answer: 3,
        explanation: 'Step 1: Order precision from FOLLOW to merged to split lookaheads. Step 2: Note larger class with finer lookahead. Step 3: Count states by cores for SLR and LALR. Step 4: Place CLR as the only larger automaton.'
      },
      {
        q: 'What does LALR merging do to lookahead sets?',
        options: ['It intersects them to {eof}', 'It discards them entirely', 'It unions them across merged states', 'It replaces them with FIRST sets'],
        answer: 2,
        explanation: 'Step 1: Match states by identical cores. Step 2: Collect lookaheads from each. Step 3: Form the union per core item. Step 4: Recheck conflicts on the united sets.'
      },
      {
        q: 'When can LALR merging introduce a fresh conflict?',
        options: ['When two merged reductions share a lookahead after unioning', 'When cores differ between merged states', 'When goto targets are terminals', 'Merging can never introduce conflicts'],
        answer: 0,
        explanation: 'Step 1: Union lookaheads from both states. Step 2: Look for two reductions on one symbol. Step 3: Check shift coexistence on that symbol. Step 4: Flag the clash that CLR kept separated.'
      }
    ]
  },

  // ---------------------------------------------------------------- 8.4
  {
    sectionId: 'compcoa-ch8-s4',
    readingTime: 8,
    intro: 'Conflicts name the exact input position where finite lookahead cannot decide between two actions. Shift-reduce clashes pit a shift against a reduction while reduce-reduce clashes pit two reductions against each other. This section diagnoses both and applies precedence and associativity fixes that resolve expression ambiguity.',
    objectives: [
      'Distinguish shift-reduce from reduce-reduce conflicts in table cells',
      'Resolve dangling-else and expression clashes with precedence directives',
      'Decide when grammar restructuring is required instead of a directive'
    ],
    concepts: [
      {
        term: 'Shift-reduce conflict cell',
        kind: 'definition',
        statement: 'A **shift-reduce conflict** holds both `shift s` and `reduce A -> beta` in **`action[I, a]`** on one lookahead `a`. The state has a shift edge on $a$ plus a complete item whose lookahead includes $a$, so the driver cannot choose pushing versus reducing.',
        detail: 'Dangling-else and binary-operator states show this shape. Resolution keeps one action by precedence or restructures so the two actions move to different states.'
      },
      {
        term: 'Reduce-reduce conflict cell',
        kind: 'definition',
        statement: 'A **reduce-reduce conflict** holds two reductions `A -> beta` and `C -> gamma` in **`action[I, a]`** on the same `a`. Two complete items coexist in $I$ with overlapping lookaheads, so no shift alternative exists to prefer.',
        detail: 'Directives cannot order two reductions by precedence alone. The grammar must change so the two bodies no longer complete together on one symbol.'
      },
      {
        term: 'Dangling-else resolution',
        kind: 'method',
        statement: 'The classic `S -> if C then S | if C then S else S` clash on `else` is fixed by **preferring shift**, which attaches the else to the nearest unmatched then. The directive is $prefer(shift)$ on $else$ and it matches the nesting rule used by block languages.',
        detail: 'Shift preference keeps the longer body growing rather than closing early. Explicit terminators remove the clash entirely when the language allows them.'
      },
      {
        term: 'Precedence and associativity directives',
        kind: 'method',
        statement: 'Each operator level gets a **precedence rank** and an associativity `left`, `right`, or `nonassoc`, coded as `prec(+) < prec(*)`. On a clash between shifting `op` and reducing by a rule with operator `ruleop`, shift wins when $prec(op) > prec(ruleop)$ and reduce wins when lower, with associativity breaking ties at equal rank.',
        detail: 'Directives only mask expression-shaped clashes where both actions carry operator ranks. Unranked clashes and reduce-reduce cells ignore these declarations.'
      },
      {
        term: 'Restructure versus directive',
        kind: 'insight',
        statement: 'Use directives for **expression ambiguity** with layered operators, and restructure the grammar for **reduce-reduce** cells or clashes without operator ranks. The test is whether distinct precedences can label both actions in `action[I, a]`; when they cannot, only fresh nonterminals or factored bodies separate the completions.',
        detail: 'Stratified expression nonterminals per level are the structural version of precedence tables. Directives are shorthand that must agree with that stratification.'
      }
    ],
    examples: [
      {
        title: 'Trace: fixing plus versus star',
        problem: 'Resolve the clash between reducing `E -> E + E` and shifting `*` on lookahead `*`.',
        steps: [
          { label: 'Step 1', text: '```text\nstate I: {E -> E + E ., E -> E . + E, E -> E . * E}\naction[I, *] = {shift, reduce E -> E + E}\nprec(+) < prec(*), both left assoc\n```\nThe complete plus body and the star shift edge collide on star lookahead.' },
          { label: 'Step 2', text: 'Compare ranks: incoming $*$ outranks rule $+$, so the directive selects $shift$ and the star group forms first, matching $a + b*c$ as $a + (b*c)$.' },
          { label: 'Step 3', text: 'On lookahead $+$ with equal rank and left associativity the same table instead selects $reduce$, giving $(a+b)+c$ grouping for chained plus signs.' }
        ],
        result: 'Precedence picks shift on higher-rank input and reduce on equal-rank left chains, removing the ambiguity.'
      },
      {
        title: 'Trace: dangling-else attachment',
        problem: 'Choose the action for `if c1 then if c2 then s1 else s2` on the else.',
        steps: [
          { label: 'Step 1', text: '```text\nstack holds: if c1 then [if c2 then s1 .]  lookahead=else\ncell = {shift else-branch, reduce outer-if body}\n```\nThe inner statement is complete while an else shift can extend it.' },
          { label: 'Step 2', text: 'Apply $prefer(shift)$ so the $else$ joins the nearest unmatched $then$, binding $s2$ to the inner condition $c2$.' },
          { label: 'Step 3', text: 'Reduce the extended inner statement first, then the outer, yielding nesting where each else pairs inward before outward reductions run.' }
        ],
        result: 'Shift preference attaches else to the closest open then, matching the intended nested reading.'
      }
    ],
    keyTakeaways: [
      'Shift-reduce cells pair one shift with one reduction on the same lookahead symbol.',
      'Reduce-reduce cells pair two reductions and need grammar changes rather than directives.',
      'Dangling-else resolves to shift so else binds to the nearest open then.',
      'Precedence plus associativity decides expression clashes by operator rank comparison.'
    ],
    quiz: [
      {
        q: 'What occupies a shift-reduce conflict cell?',
        options: ['Two shifts on one symbol', 'Two reductions on different symbols', 'One shift plus one reduction on the same lookahead', 'An empty cell with a warning'],
        answer: 2,
        explanation: 'Step 1: Inspect the action cell for one state and symbol. Step 2: Find a shift edge on that symbol. Step 3: Find a complete item reducing on it. Step 4: Label the pair shift-reduce.'
      },
      // PYQ-pattern: dangling-else and operator precedence resolution choices.
      {
        q: 'How is the dangling-else clash on `else` normally resolved?',
        options: ['By preferring reduce to close the outer if early', 'By preferring shift so else attaches to the nearest then', 'By deleting the else token', 'By splitting into two lexers'],
        answer: 1,
        explanation: 'Step 1: Locate the complete inner statement. Step 2: Note the shift extends it with else. Step 3: Prefer the longer growing body. Step 4: Bind else inward to the closest open then.'
      },
      {
        q: 'With $prec(+) < prec(*)$, what happens on lookahead `*` against reduction by a `+` rule?',
        options: ['Reduce, since plus is older', 'Pop two extra states', 'Report an unresolvable fault', 'Shift, since incoming star outranks the rule'],
        answer: 3,
        explanation: 'Step 1: Rank both operators by table. Step 2: Compare incoming star against rule plus. Step 3: Shift on higher incoming rank. Step 4: Group the star operands first.'
      },
      {
        q: 'Which conflict forces grammar restructuring rather than a precedence directive?',
        options: ['Reduce-reduce between two completions on one lookahead', 'Shift-reduce on plus versus star', 'Shift-reduce on dangling else', 'A singleton cell'],
        answer: 0,
        explanation: 'Step 1: Check whether two shifts or reductions compete. Step 2: Find two reductions with no shift to rank. Step 3: Rule out precedence, which orders shift against reduce. Step 4: Reshape bodies so completions separate.'
      }
    ]
  }
]
